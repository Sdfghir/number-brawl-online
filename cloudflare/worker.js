const MAX_PLAYERS = 15;
const MAX_MESSAGE_BYTES = 1024 * 1024;
const MAX_MESSAGES_PER_SECOND = 180;
const RECONNECT_GRACE_MS = 20_000;
const ROOM_IDLE_MS = 6 * 60 * 60 * 1000;
const SERVER_VERSION = 'cloudflare-multiplayer-1';
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
  });
}

function cleanName(value) {
  const name = String(value || '玩家').replace(/[<>\r\n]/g, '').trim().slice(0, 10);
  return name || '玩家';
}

function cleanAppearance(value) {
  if (!value || typeof value !== 'object') return {};
  const allowed = ['shirt', 'hair', 'hairColor', 'outfit', 'pants', 'pantsStyle', 'shoes', 'shoesStyle', 'meleeStyle'];
  return Object.fromEntries(allowed
    .filter((key) => typeof value[key] === 'string')
    .map((key) => [key, value[key].slice(0, 40)]));
}

function randomToken() {
  return `${crypto.randomUUID().replaceAll('-', '')}${crypto.randomUUID().replaceAll('-', '')}`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/ws' || url.pathname === '/healthz') {
      const roomServer = env.ROOMS.get(env.ROOMS.idFromName('number-brawl-global-lobby'));
      return roomServer.fetch(request);
    }
    return env.ASSETS.fetch(request);
  }
};

export class RoomCoordinator {
  constructor(state) {
    this.state = state;
    this.rooms = new Map();
    this.clients = new Set();
    this.sessions = new Map();
  }

  fetch(request) {
    this.cleanupRooms();
    const url = new URL(request.url);
    if (url.pathname === '/healthz') {
      return jsonResponse({
        ok: true,
        version: SERVER_VERSION,
        rooms: this.rooms.size,
        players: [...this.clients].filter((client) => client.connected).length
      });
    }
    if (url.pathname !== '/ws' || request.headers.get('Upgrade')?.toLowerCase() !== 'websocket') {
      return new Response('WebSocket upgrade required', { status: 426 });
    }
    return this.acceptSocket(url.searchParams.get('resume') || '');
  }

  acceptSocket(requestedResumeToken) {
    const pair = new WebSocketPair();
    const [browserSocket, serverSocket] = Object.values(pair);
    serverSocket.accept();

    let client = this.sessions.get(requestedResumeToken);
    const resumed = Boolean(client && !client.connected);
    if (!resumed) {
      const resumeToken = randomToken();
      client = {
        id: crypto.randomUUID().slice(0, 8), resumeToken, socket: null,
        roomId: null, slot: -1, name: '玩家', appearance: {}, ready: false,
        connected: false, disconnectTimer: null, connectionSerial: 0,
        messageWindowStarted: Date.now(), messageCount: 0
      };
      this.sessions.set(resumeToken, client);
    } else if (client.disconnectTimer) {
      clearTimeout(client.disconnectTimer);
      client.disconnectTimer = null;
    }

    client.socket = serverSocket;
    client.connected = true;
    client.messageWindowStarted = Date.now();
    client.messageCount = 0;
    client.connectionSerial += 1;
    const connectionSerial = client.connectionSerial;
    this.clients.add(client);

    serverSocket.addEventListener('message', (event) => this.consumeMessage(client, event.data));
    const disconnected = () => {
      if (client.connectionSerial === connectionSerial) this.scheduleDisconnect(client);
    };
    serverSocket.addEventListener('close', disconnected);
    serverSocket.addEventListener('error', disconnected);

    this.sendJson(client, {
      type: 'connected', playerId: client.id, resumeToken: client.resumeToken, resumed
    });
    if (resumed && client.roomId) {
      const room = this.rooms.get(client.roomId);
      if (room) {
        this.sendJson(client, {
          type: 'joined', roomId: room.code, playerId: client.id, slot: client.slot,
          host: client.id === room.hostId, resumed: true, started: room.started
        });
        this.broadcastRoster(room);
      }
    }

    return new Response(null, { status: 101, webSocket: browserSocket });
  }

  sendJson(client, payload) {
    if (!client.connected || !client.socket) return;
    try { client.socket.send(JSON.stringify(payload)); } catch { try { client.socket.close(1011, 'send failed'); } catch {} }
  }

  broadcast(room, payload, exceptId = null) {
    for (const member of room.members.values()) {
      if (member.id !== exceptId) this.sendJson(member, payload);
    }
  }

  roster(room) {
    return [...room.members.values()]
      .sort((first, second) => first.slot - second.slot)
      .map(({ id, slot, name, appearance, ready, connected }) => ({
        id, slot, name, appearance, ready: Boolean(ready), connected: Boolean(connected), host: id === room.hostId
      }));
  }

  broadcastRoster(room) {
    this.broadcast(room, { type: 'roster', roomId: room.code, members: this.roster(room), started: room.started });
  }

  roomCode() {
    for (let attempt = 0; attempt < 100; attempt += 1) {
      let code = '';
      for (let index = 0; index < 6; index += 1) {
        code += CODE_ALPHABET[crypto.getRandomValues(new Uint32Array(1))[0] % CODE_ALPHABET.length];
      }
      if (!this.rooms.has(code)) return code;
    }
    return crypto.randomUUID().replaceAll('-', '').slice(0, 6).toUpperCase();
  }

  createRoom(client, name, appearance, ready = false) {
    this.leaveRoom(client);
    const code = this.roomCode();
    const room = { code, hostId: client.id, members: new Map(), started: false, updatedAt: Date.now() };
    Object.assign(client, {
      roomId: code, slot: 0, name: cleanName(name),
      appearance: cleanAppearance(appearance), ready: Boolean(ready)
    });
    room.members.set(client.id, client);
    this.rooms.set(code, room);
    this.sendJson(client, { type: 'joined', roomId: code, playerId: client.id, slot: 0, host: true });
    this.broadcastRoster(room);
  }

  joinRoom(client, code, name, appearance, ready = false) {
    const room = this.rooms.get(String(code || '').trim().toUpperCase());
    if (!room) return this.sendJson(client, { type: 'error', message: '没有找到这个房间，请检查邀请码' });
    if (room.started) return this.sendJson(client, { type: 'error', message: '这局已经开始，请等待下一局' });
    if (room.members.size >= MAX_PLAYERS) return this.sendJson(client, { type: 'error', message: '房间已经满员' });
    this.leaveRoom(client);
    const usedSlots = new Set([...room.members.values()].map((member) => member.slot));
    let slot = 0;
    while (usedSlots.has(slot)) slot += 1;
    Object.assign(client, {
      roomId: room.code, slot, name: cleanName(name),
      appearance: cleanAppearance(appearance), ready: Boolean(ready)
    });
    room.members.set(client.id, client);
    room.updatedAt = Date.now();
    this.sendJson(client, { type: 'joined', roomId: room.code, playerId: client.id, slot, host: false });
    this.broadcastRoster(room);
  }

  leaveRoom(client, forgetSession = false) {
    if (client.disconnectTimer) {
      clearTimeout(client.disconnectTimer);
      client.disconnectTimer = null;
    }
    const room = client.roomId ? this.rooms.get(client.roomId) : null;
    if (!room) {
      if (forgetSession) this.sessions.delete(client.resumeToken);
      return;
    }
    const departedSlot = client.slot;
    const wasHost = client.id === room.hostId;
    room.members.delete(client.id);
    client.roomId = null;
    client.slot = -1;
    if (forgetSession) this.sessions.delete(client.resumeToken);
    if (room.members.size === 0) {
      this.rooms.delete(room.code);
      return;
    }
    if (wasHost) {
      const replacement = [...room.members.values()]
        .sort((first, second) => Number(second.connected) - Number(first.connected) || first.slot - second.slot)[0];
      const replacementPreviousSlot = replacement.slot;
      replacement.slot = 0;
      room.hostId = replacement.id;
      this.broadcast(room, {
        type: 'hostChanged', playerId: replacement.id, slot: 0,
        vacatedSlot: replacementPreviousSlot, message: '原房主已离开，已自动更换房主'
      });
      this.sendJson(replacement, { type: 'playerLeft', playerId: client.id, slot: replacementPreviousSlot });
    } else {
      const host = room.members.get(room.hostId);
      if (host) this.sendJson(host, { type: 'playerLeft', playerId: client.id, slot: departedSlot });
    }
    room.updatedAt = Date.now();
    this.broadcastRoster(room);
  }

  scheduleDisconnect(client) {
    if (!client.connected) return;
    client.connected = false;
    this.clients.delete(client);
    const room = client.roomId ? this.rooms.get(client.roomId) : null;
    if (room) {
      room.updatedAt = Date.now();
      this.broadcastRoster(room);
    }
    client.disconnectTimer = setTimeout(() => {
      client.disconnectTimer = null;
      this.sessions.delete(client.resumeToken);
      this.leaveRoom(client);
    }, RECONNECT_GRACE_MS);
  }

  acceptMessage(client) {
    const now = Date.now();
    if (now - client.messageWindowStarted >= 1000) {
      client.messageWindowStarted = now;
      client.messageCount = 0;
    }
    client.messageCount += 1;
    if (client.messageCount <= MAX_MESSAGES_PER_SECOND) return true;
    try { client.socket.close(1008, 'rate limit'); } catch {}
    return false;
  }

  consumeMessage(client, data) {
    if (typeof data !== 'string' || new TextEncoder().encode(data).byteLength > MAX_MESSAGE_BYTES) {
      try { client.socket.close(1009, 'message too large'); } catch {}
      return;
    }
    if (!this.acceptMessage(client)) return;
    let message;
    try { message = JSON.parse(data); } catch { return; }
    if (!message || typeof message.type !== 'string') return;
    if (message.type === 'create') return this.createRoom(client, message.name, message.appearance, message.ready);
    if (message.type === 'join') return this.joinRoom(client, message.roomId, message.name, message.appearance, message.ready);
    if (message.type === 'leave') return this.leaveRoom(client, true);
    const room = client.roomId ? this.rooms.get(client.roomId) : null;
    if (!room) return;
    room.updatedAt = Date.now();
    if (message.type === 'appearance') {
      client.name = cleanName(message.name);
      client.appearance = cleanAppearance(message.appearance);
      client.ready = Boolean(message.ready);
      this.broadcastRoster(room);
    } else if (message.type === 'ready') {
      client.ready = Boolean(message.ready);
      this.broadcastRoster(room);
    } else if (message.type === 'input' && client.id !== room.hostId) {
      const host = room.members.get(room.hostId);
      if (host) this.sendJson(host, {
        type: 'remoteInput', playerId: client.id, slot: client.slot, input: message.input || {}
      });
    } else if (message.type === 'snapshot' && client.id === room.hostId) {
      this.broadcast(room, message, client.id);
    } else if (message.type === 'start' && client.id === room.hostId && !room.started) {
      if (![...room.members.values()].every((member) => member.connected && member.ready)) {
        return this.sendJson(client, { type: 'error', message: '还有玩家正在准备或重连，请稍等' });
      }
      room.started = true;
      this.broadcast(room, { type: 'start', startedAt: Date.now(), members: this.roster(room) });
    }
  }

  cleanupRooms() {
    const now = Date.now();
    for (const [code, room] of this.rooms) {
      if (room.members.size === 0 || now - room.updatedAt > ROOM_IDLE_MS) this.rooms.delete(code);
    }
  }
}
