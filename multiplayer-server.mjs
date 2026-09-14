import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDirectory, 'dist');
const requestedPort = Number(process.env.PORT || process.env.NUMBER_BRAWL_PORT || process.argv.find((arg) => arg.startsWith('--port='))?.split('=')[1] || 4173);
const noOpen = process.argv.includes('--no-open');
const rooms = new Map();
const clients = new Set();
const sessions = new Map();
const MAX_PLAYERS = 15;
const MAX_MESSAGE_BYTES = 1024 * 1024;
const MAX_MESSAGES_PER_SECOND = 180;
const RECONNECT_GRACE_MS = 20_000;
const SERVER_VERSION = 'internet-multiplayer-1';
const codeAlphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function localAddress() {
  for (const entries of Object.values(os.networkInterfaces())) {
    for (const entry of entries || []) {
      if (entry.family === 'IPv4' && !entry.internal) return entry.address;
    }
  }
  return '127.0.0.1';
}

function firstForwardedValue(value) {
  return String(value || '').split(',')[0].trim();
}

function requestOrigin(request) {
  const configuredOrigin = String(process.env.PUBLIC_ORIGIN || '').trim().replace(/\/$/, '');
  if (configuredOrigin) return configuredOrigin;
  const forwardedHost = firstForwardedValue(request.headers['x-forwarded-host']);
  const host = forwardedHost || request.headers.host || `127.0.0.1:${activePort}`;
  if (/^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host)) return `http://${localAddress()}:${activePort}`;
  const forwardedProtocol = firstForwardedValue(request.headers['x-forwarded-proto']);
  const protocol = forwardedProtocol || (request.socket.encrypted ? 'https' : 'http');
  return `${protocol}://${host}`;
}

function roomCode() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    let code = '';
    for (let index = 0; index < 6; index += 1) code += codeAlphabet[crypto.randomInt(codeAlphabet.length)];
    if (!rooms.has(code)) return code;
  }
  return crypto.randomBytes(4).toString('hex').slice(0, 6).toUpperCase();
}

function cleanName(value) {
  const name = String(value || '玩家').replace(/[<>\r\n]/g, '').trim().slice(0, 10);
  return name || '玩家';
}

function cleanAppearance(value) {
  if (!value || typeof value !== 'object') return {};
  const allowed = ['shirt', 'hair', 'hairColor', 'outfit', 'pants', 'pantsStyle', 'shoes', 'shoesStyle', 'meleeStyle'];
  return Object.fromEntries(allowed.filter((key) => typeof value[key] === 'string').map((key) => [key, value[key].slice(0, 40)]));
}

function mimeType(filePath) {
  return ({
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json; charset=utf-8',
    '.ico': 'image/x-icon'
  })[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

function serveFile(request, response) {
  const requestUrl = new URL(request.url || '/', 'http://localhost');
  if (requestUrl.pathname === '/healthz') {
    const connectedPlayers = [...clients].filter((client) => client.connected).length;
    const data = JSON.stringify({ ok: true, version: SERVER_VERSION, rooms: rooms.size, players: connectedPlayers });
    response.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(data),
      'Cache-Control': 'no-store'
    });
    response.end(data);
    return;
  }
  let relativePath;
  try {
    relativePath = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, '') || 'index.html';
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Bad request');
    return;
  }
  const filePath = path.resolve(webRoot, relativePath);
  if (!filePath.startsWith(`${webRoot}${path.sep}`) && filePath !== path.join(webRoot, 'index.html')) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 - File not found');
      return;
    }
    if (relativePath === 'index.html') {
      const inviteOrigin = requestOrigin(request);
      data = Buffer.from(data.toString('utf8').replace('</head>', `<script>window.__NUMBER_BRAWL_INVITE_ORIGIN__=${JSON.stringify(inviteOrigin)}</script></head>`));
    }
    response.writeHead(200, {
      'Content-Type': mimeType(filePath),
      'Content-Length': data.length,
      'Cache-Control': relativePath === 'index.html' ? 'no-cache' : 'public, max-age=3600'
    });
    response.end(data);
  });
}

function encodeFrame(payload, opcode = 1) {
  const body = Buffer.isBuffer(payload) ? payload : Buffer.from(payload);
  let header;
  if (body.length < 126) {
    header = Buffer.from([0x80 | opcode, body.length]);
  } else if (body.length <= 0xffff) {
    header = Buffer.allocUnsafe(4);
    header[0] = 0x80 | opcode;
    header[1] = 126;
    header.writeUInt16BE(body.length, 2);
  } else {
    header = Buffer.allocUnsafe(10);
    header[0] = 0x80 | opcode;
    header[1] = 127;
    header.writeBigUInt64BE(BigInt(body.length), 2);
  }
  return Buffer.concat([header, body]);
}

function sendJson(client, payload) {
  if (!client.connected || !client.socket || client.socket.destroyed || !client.socket.writable) return;
  try { client.socket.write(encodeFrame(JSON.stringify(payload))); } catch { client.socket.destroy(); }
}

function broadcast(room, payload, exceptId = null) {
  for (const member of room.members.values()) {
    if (member.id !== exceptId) sendJson(member, payload);
  }
}

function roster(room) {
  return [...room.members.values()]
    .sort((first, second) => first.slot - second.slot)
    .map(({ id, slot, name, appearance, ready, connected }) => ({
      id, slot, name, appearance, ready: Boolean(ready), connected: Boolean(connected), host: id === room.hostId
    }));
}

function broadcastRoster(room) {
  broadcast(room, { type: 'roster', roomId: room.code, members: roster(room), started: room.started });
}

function leaveRoom(client, forgetSession = false) {
  if (client.disconnectTimer) {
    clearTimeout(client.disconnectTimer);
    client.disconnectTimer = null;
  }
  const room = client.roomId ? rooms.get(client.roomId) : null;
  if (!room) {
    if (forgetSession) sessions.delete(client.resumeToken);
    return;
  }
  const departedSlot = client.slot;
  const wasHost = client.id === room.hostId;
  room.members.delete(client.id);
  client.roomId = null;
  client.slot = -1;
  if (forgetSession) sessions.delete(client.resumeToken);
  if (room.members.size === 0) {
    rooms.delete(room.code);
    return;
  }
  if (wasHost) {
    const replacement = [...room.members.values()]
      .sort((first, second) => Number(second.connected) - Number(first.connected) || first.slot - second.slot)[0];
    const replacementPreviousSlot = replacement.slot;
    replacement.slot = 0;
    room.hostId = replacement.id;
    broadcast(room, {
      type: 'hostChanged', playerId: replacement.id, slot: 0,
      vacatedSlot: replacementPreviousSlot, message: '原房主已离开，已自动更换房主'
    });
    sendJson(replacement, { type: 'playerLeft', playerId: client.id, slot: replacementPreviousSlot });
  } else {
    const host = room.members.get(room.hostId);
    if (host) sendJson(host, { type: 'playerLeft', playerId: client.id, slot: departedSlot });
  }
  room.updatedAt = Date.now();
  broadcastRoster(room);
}

function joinRoom(client, code, name, appearance, ready = false) {
  const room = rooms.get(String(code || '').trim().toUpperCase());
  if (!room) return sendJson(client, { type: 'error', message: '没有找到这个房间，请检查邀请码' });
  if (room.started) return sendJson(client, { type: 'error', message: '这局已经开始，请等待下一局' });
  if (room.members.size >= MAX_PLAYERS) return sendJson(client, { type: 'error', message: '房间已经满员' });
  leaveRoom(client);
  const usedSlots = new Set([...room.members.values()].map((member) => member.slot));
  let slot = 0;
  while (usedSlots.has(slot)) slot += 1;
  Object.assign(client, { roomId: room.code, slot, name: cleanName(name), appearance: cleanAppearance(appearance), ready: Boolean(ready) });
  room.members.set(client.id, client);
  sendJson(client, { type: 'joined', roomId: room.code, playerId: client.id, slot, host: false });
  broadcastRoster(room);
}

function createRoom(client, name, appearance, ready = false) {
  leaveRoom(client);
  const code = roomCode();
  const room = { code, hostId: client.id, members: new Map(), started: false, updatedAt: Date.now() };
  Object.assign(client, { roomId: code, slot: 0, name: cleanName(name), appearance: cleanAppearance(appearance), ready: Boolean(ready) });
  room.members.set(client.id, client);
  rooms.set(code, room);
  sendJson(client, { type: 'joined', roomId: code, playerId: client.id, slot: 0, host: true });
  broadcastRoster(room);
}

function scheduleDisconnect(client) {
  if (!client.connected) return;
  client.connected = false;
  clients.delete(client);
  const room = client.roomId ? rooms.get(client.roomId) : null;
  if (room) {
    room.updatedAt = Date.now();
    broadcastRoster(room);
  }
  client.disconnectTimer = setTimeout(() => {
    client.disconnectTimer = null;
    sessions.delete(client.resumeToken);
    leaveRoom(client);
  }, RECONNECT_GRACE_MS);
  client.disconnectTimer.unref?.();
}

function acceptMessage(client) {
  const now = Date.now();
  if (now - client.messageWindowStarted >= 1000) {
    client.messageWindowStarted = now;
    client.messageCount = 0;
  }
  client.messageCount += 1;
  if (client.messageCount <= MAX_MESSAGES_PER_SECOND) return true;
  client.socket?.destroy();
  return false;
}

function handleMessage(client, text) {
  if (!acceptMessage(client)) return;
  let message;
  try { message = JSON.parse(text); } catch { return; }
  if (!message || typeof message.type !== 'string') return;
  if (message.type === 'create') return createRoom(client, message.name, message.appearance, message.ready);
  if (message.type === 'join') return joinRoom(client, message.roomId, message.name, message.appearance, message.ready);
  if (message.type === 'leave') return leaveRoom(client, true);
  const room = client.roomId ? rooms.get(client.roomId) : null;
  if (!room) return;
  room.updatedAt = Date.now();
  if (message.type === 'appearance') {
    client.name = cleanName(message.name);
    client.appearance = cleanAppearance(message.appearance);
    client.ready = Boolean(message.ready);
    broadcastRoster(room);
  } else if (message.type === 'ready') {
    client.ready = Boolean(message.ready);
    broadcastRoster(room);
  } else if (message.type === 'input' && client.id !== room.hostId) {
    const host = room.members.get(room.hostId);
    if (host) sendJson(host, { type: 'remoteInput', playerId: client.id, slot: client.slot, input: message.input || {} });
  } else if (message.type === 'snapshot' && client.id === room.hostId) {
    broadcast(room, message, client.id);
  } else if (message.type === 'start' && client.id === room.hostId && !room.started) {
    if (![...room.members.values()].every((member) => member.ready)) {
      return sendJson(client, { type: 'error', message: '还有玩家正在准备动画，请稍等' });
    }
    room.started = true;
    broadcast(room, { type: 'start', startedAt: Date.now(), members: roster(room) });
  }
}

function consumeFrames(client, chunk) {
  client.buffer = Buffer.concat([client.buffer, chunk]);
  while (client.buffer.length >= 2) {
    const first = client.buffer[0];
    const second = client.buffer[1];
    const opcode = first & 0x0f;
    const masked = Boolean(second & 0x80);
    let length = second & 0x7f;
    let offset = 2;
    if (length === 126) {
      if (client.buffer.length < 4) return;
      length = client.buffer.readUInt16BE(2);
      offset = 4;
    } else if (length === 127) {
      if (client.buffer.length < 10) return;
      const largeLength = client.buffer.readBigUInt64BE(2);
      if (largeLength > BigInt(MAX_MESSAGE_BYTES)) return client.socket.destroy();
      length = Number(largeLength);
      offset = 10;
    }
    if (length > MAX_MESSAGE_BYTES) return client.socket.destroy();
    const maskBytes = masked ? 4 : 0;
    if (client.buffer.length < offset + maskBytes + length) return;
    const mask = masked ? client.buffer.subarray(offset, offset + 4) : null;
    offset += maskBytes;
    const payload = Buffer.from(client.buffer.subarray(offset, offset + length));
    client.buffer = client.buffer.subarray(offset + length);
    if (mask) for (let index = 0; index < payload.length; index += 1) payload[index] ^= mask[index % 4];
    if (opcode === 1) handleMessage(client, payload.toString('utf8'));
    else if (opcode === 8) return client.socket.end(encodeFrame(Buffer.alloc(0), 8));
    else if (opcode === 9) {
      client.alive = true;
      client.socket.write(encodeFrame(payload, 10));
    } else if (opcode === 10) client.alive = true;
  }
}

const server = http.createServer(serveFile);
server.on('upgrade', (request, socket) => {
  const requestUrl = new URL(request.url || '/', 'http://localhost');
  if (requestUrl.pathname !== '/ws') return socket.destroy();
  const key = request.headers['sec-websocket-key'];
  if (!key) return socket.destroy();
  const accept = crypto.createHash('sha1').update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`).digest('base64');
  socket.write([
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${accept}`,
    '\r\n'
  ].join('\r\n'));
  socket.setNoDelay(true);
  const requestedResumeToken = requestUrl.searchParams.get('resume') || '';
  let client = sessions.get(requestedResumeToken);
  const resumed = Boolean(client && !client.connected);
  if (!resumed) {
    const resumeToken = crypto.randomBytes(24).toString('base64url');
    client = {
      id: crypto.randomUUID().slice(0, 8), resumeToken, socket: null, buffer: Buffer.alloc(0),
      roomId: null, slot: -1, name: '玩家', appearance: {}, ready: false,
      connected: false, disconnectTimer: null, connectionSerial: 0,
      alive: true, messageWindowStarted: Date.now(), messageCount: 0
    };
    sessions.set(resumeToken, client);
  } else if (client.disconnectTimer) {
    clearTimeout(client.disconnectTimer);
    client.disconnectTimer = null;
  }
  client.socket = socket;
  client.buffer = Buffer.alloc(0);
  client.connected = true;
  client.alive = true;
  client.messageWindowStarted = Date.now();
  client.messageCount = 0;
  client.connectionSerial += 1;
  const connectionSerial = client.connectionSerial;
  clients.add(client);
  socket.on('data', (chunk) => consumeFrames(client, chunk));
  const onDisconnect = () => {
    if (client.connectionSerial === connectionSerial) scheduleDisconnect(client);
  };
  socket.once('close', onDisconnect);
  socket.once('error', onDisconnect);
  sendJson(client, { type: 'connected', playerId: client.id, resumeToken: client.resumeToken, resumed });
  if (resumed && client.roomId) {
    const room = rooms.get(client.roomId);
    if (room) {
      sendJson(client, {
        type: 'joined', roomId: room.code, playerId: client.id,
        slot: client.slot, host: client.id === room.hostId, resumed: true, started: room.started
      });
      broadcastRoster(room);
    }
  }
});

let activePort = requestedPort;
function listen(port) {
  server.once('error', (error) => {
    if (!process.env.PORT && error.code === 'EADDRINUSE' && port < requestedPort + 20) listen(port + 1);
    else throw error;
  });
  server.listen(port, '0.0.0.0', () => {
    activePort = port;
    const lanUrl = `http://${localAddress()}:${port}/`;
    console.log('');
    console.log('数字乱斗多人联机服务器已启动');
    console.log(`房主打开：${lanUrl}`);
    console.log(process.env.PORT ? '公网联机服务已就绪。' : '同一Wi-Fi内的朋友可直接打开你复制的邀请链接。');
    console.log('游戏期间请勿关闭此窗口。');
    console.log('');
    if (!noOpen && process.platform === 'win32') {
      const child = spawn('cmd.exe', ['/c', 'start', '', lanUrl], { detached: true, stdio: 'ignore', windowsHide: true });
      child.unref();
    }
  });
}
listen(requestedPort);

setInterval(() => {
  for (const client of clients) {
    if (!client.alive) {
      client.socket?.destroy();
      continue;
    }
    client.alive = false;
    if (client.connected && client.socket?.writable) client.socket.write(encodeFrame(Buffer.alloc(0), 9));
  }
}, 15_000).unref();

setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms) {
    if (room.members.size === 0 || now - room.updatedAt > 6 * 60 * 60 * 1000) rooms.delete(code);
  }
}, 60_000).unref();

function shutdown() {
  broadcast({ members: new Map([...clients].map((client) => [client.id, client])) }, {
    type: 'serverRestart', message: '服务器正在更新，将自动重新连接'
  });
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 8_000).unref();
}

process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);
