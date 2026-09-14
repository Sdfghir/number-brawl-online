import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import './style.css';

const ARENA_RADIUS = 32;
const START_NUMBER = 10;
const ROUND_SECONDS = 180;
const VIEW_SIZE = 28;
const COMBAT_BUFF_SECONDS = 12;
const PICKUP_LIFETIME = 10;
const MAX_AMULET_AI_HUNTERS = 2;
const ATTACK_RANGE_BUFF_MULTIPLIER = 1.5;
const ATTACK_DAMAGE_BUFF_MULTIPLIER = 1.5;
const BASE_MELEE_ATTACKS_PER_SECOND = 2;
const QUARTER_COS = Math.SQRT1_2;
const BOOST_COST_INTERVAL = 2;
const BASE_MOVE_SPEED = 7.1;
const BASE_TURN_SPEED = 3.3;
const BASE_ATTACK_RANGE = 2.5;
const NUMBER_TIER_SLOW_MULTIPLIER = 0.95;
const NUMBER_TIER_GROWTH_MULTIPLIER = 1.05;
const SNIPER_BLAST_RADIUS = 0.65;
const ROCKET_GRID_CELL_SIZE = 1.5;
const ROCKET_GRID_SIZE = ROCKET_GRID_CELL_SIZE * 4;
const ROCKET_GRID_HALF_SIZE = ROCKET_GRID_SIZE / 2;
const clock = new THREE.Clock();

function numberTier(number) {
  return Math.max(0, Math.floor(number / 10) - 1);
}

function effectiveTier(number, boosting = false) {
  const tier = numberTier(number);
  return boosting && number >= 30 ? Math.max(0, tier - 2) : tier;
}

function speedMultiplier(number, boosting = false) {
  return Math.pow(NUMBER_TIER_SLOW_MULTIPLIER, effectiveTier(number, boosting));
}

function attackRangeMultiplier(number, boosting = false) {
  return Math.pow(NUMBER_TIER_GROWTH_MULTIPLIER, effectiveTier(number, boosting));
}

function sizeMultiplier(number, boosting = false) {
  return Math.pow(NUMBER_TIER_GROWTH_MULTIPLIER, effectiveTier(number, boosting));
}

function meleeAttackSpeed(number, boosting = false) {
  return BASE_MELEE_ATTACKS_PER_SECOND * Math.pow(NUMBER_TIER_SLOW_MULTIPLIER, effectiveTier(number, boosting));
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x182a43);
scene.fog = new THREE.Fog(0x182a43, 39, 78);

const camera = new THREE.OrthographicCamera(
  -(VIEW_SIZE * innerWidth / innerHeight) / 2,
  (VIEW_SIZE * innerWidth / innerHeight) / 2,
  VIEW_SIZE / 2,
  -VIEW_SIZE / 2,
  0.1,
  100
);
camera.position.set(0, 29, 8);
camera.up.set(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
const MAX_RENDER_PIXEL_RATIO = Math.min(devicePixelRatio, 1.08);
const MIN_RENDER_PIXEL_RATIO = Math.min(MAX_RENDER_PIXEL_RATIO, 0.72);
let activeRenderPixelRatio = MAX_RENDER_PIXEL_RATIO;
let performanceMode = false;
renderer.setPixelRatio(activeRenderPixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.27;
document.querySelector('#game').appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xd9efff, 0x52624a, 2.35));
const sun = new THREE.DirectionalLight(0xfff4df, 3.55);
sun.position.set(-12, 20, -8);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -42;
sun.shadow.camera.right = 42;
sun.shadow.camera.top = 42;
sun.shadow.camera.bottom = -42;
scene.add(sun);

function seededRandom(seed = 48271) {
  let value = seed % 2147483647;
  return () => {
    value = value * 16807 % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function makeArenaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const random = seededRandom(9137);
  const gradient = ctx.createRadialGradient(512, 470, 60, 512, 512, 710);
  gradient.addColorStop(0, '#47708d');
  gradient.addColorStop(0.48, '#3a5d7b');
  gradient.addColorStop(1, '#2a4661');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);

  for (let index = 0; index < 460; index += 1) {
    const x = random() * 1024;
    const y = random() * 1024;
    const radius = 1 + random() * 5;
    ctx.fillStyle = random() > 0.46 ? `rgba(166,215,235,${0.02 + random() * 0.038})` : `rgba(9,30,48,${0.02 + random() * 0.038})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.lineCap = 'round';
  for (let index = 0; index < 90; index += 1) {
    let x = random() * 1024;
    let y = random() * 1024;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let branch = 0; branch < 2 + Math.floor(random() * 3); branch += 1) {
      x += (random() - 0.5) * 38;
      y += (random() - 0.5) * 38;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(8,19,32,${0.08 + random() * 0.08})`;
    ctx.lineWidth = 1 + random() * 2;
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(148,222,239,.11)';
  ctx.lineWidth = 3;
  for (let cell = 90; cell < 1024; cell += 92) {
    ctx.beginPath();
    ctx.moveTo(cell, 0);
    ctx.lineTo(cell, 1024);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, cell);
    ctx.lineTo(1024, cell);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function makeWaterTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);
  gradient.addColorStop(0, '#102b48');
  gradient.addColorStop(0.5, '#174263');
  gradient.addColorStop(1, '#0b243f');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);
  ctx.strokeStyle = 'rgba(109,218,239,.14)';
  ctx.lineWidth = 3;
  for (let row = -40; row < 560; row += 38) {
    ctx.beginPath();
    for (let x = -20; x <= 540; x += 12) {
      const y = row + Math.sin(x * 0.035 + row) * 7;
      if (x === -20) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return texture;
}

const oceanTexture = makeWaterTexture();
const ocean = new THREE.Mesh(
  new THREE.PlaneGeometry(180, 180),
  new THREE.MeshStandardMaterial({
    map: oceanTexture,
    color: 0x69aeca,
    emissive: 0x0a2944,
    emissiveIntensity: 0.36,
    roughness: 0.34,
    metalness: 0.18
  })
);
ocean.rotation.x = -Math.PI / 2;
ocean.position.y = -1.18;
ocean.receiveShadow = true;
scene.add(ocean);

const floor = new THREE.Mesh(
  new THREE.CylinderGeometry(ARENA_RADIUS + 1, ARENA_RADIUS + 1.8, 0.8, 64),
  new THREE.MeshStandardMaterial({ color: 0x314e6c, roughness: 0.83, metalness: 0.08 })
);
floor.position.y = -0.42;
floor.receiveShadow = true;
scene.add(floor);

const arenaSurface = new THREE.Mesh(
  new THREE.CircleGeometry(ARENA_RADIUS - 0.18, 96),
  new THREE.MeshStandardMaterial({ map: makeArenaTexture(), roughness: 0.92, metalness: 0.04 })
);
arenaSurface.rotation.x = -Math.PI / 2;
arenaSurface.position.y = 0.006;
arenaSurface.receiveShadow = true;
scene.add(arenaSurface);

const grid = new THREE.GridHelper(62, 31, 0x66a5bf, 0x486c87);
grid.position.y = 0.024;
grid.material.transparent = true;
grid.material.opacity = 0.17;
scene.add(grid);

const centerFloor = new THREE.Mesh(
  new THREE.CircleGeometry(7.2, 48),
  new THREE.MeshStandardMaterial({ color: 0x3b607e, roughness: 0.88, metalness: 0.05 })
);
centerFloor.rotation.x = -Math.PI / 2;
centerFloor.position.y = 0.03;
centerFloor.receiveShadow = true;
scene.add(centerFloor);

for (const [radius, color, opacity] of [
  [5, 0x6fe6ff, 0.2],
  [11, 0x8aa8c8, 0.13],
  [21.5, 0x8aa8c8, 0.09]
]) {
  const arenaMark = new THREE.Mesh(
    new THREE.RingGeometry(radius - 0.06, radius + 0.06, 72),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, side: THREE.DoubleSide })
  );
  arenaMark.rotation.x = -Math.PI / 2;
  arenaMark.position.y = 0.04;
  scene.add(arenaMark);
}

const rim = new THREE.Mesh(
  new THREE.TorusGeometry(ARENA_RADIUS, 0.22, 10, 96),
  new THREE.MeshStandardMaterial({ color: 0x5bd7f7, emissive: 0x164c66, emissiveIntensity: 2 })
);
rim.rotation.x = Math.PI / 2;
rim.position.y = 0.08;
scene.add(rim);

const rimLower = new THREE.Mesh(
  new THREE.TorusGeometry(ARENA_RADIUS + 0.65, 0.7, 10, 96),
  new THREE.MeshStandardMaterial({ color: 0x182b40, roughness: 0.42, metalness: 0.48 })
);
rimLower.rotation.x = Math.PI / 2;
rimLower.position.y = -0.44;
rimLower.castShadow = true;
scene.add(rimLower);

const instanceDummy = new THREE.Object3D();
const arenaWalls = [
  { x: -9.2, z: 1.2, width: 5.8, depth: 0.95, height: 1.55, yaw: 0 },
  { x: 9.2, z: 1.2, width: 5.8, depth: 0.95, height: 1.55, yaw: 0 },
  { x: -5.5, z: 13.1, width: 5.2, depth: 0.95, height: 1.55, yaw: -0.48 },
  { x: 5.5, z: 13.1, width: 5.2, depth: 0.95, height: 1.55, yaw: 0.48 },
  { x: -14.5, z: -14.2, width: 4.8, depth: 0.95, height: 1.55, yaw: 0.78 },
  { x: 14.5, z: -14.2, width: 4.8, depth: 0.95, height: 1.55, yaw: -0.78 }
];

const wallBaseInstances = new THREE.InstancedMesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x365775, roughness: 0.68, metalness: 0.22 }),
  arenaWalls.length
);
const wallCapInstances = new THREE.InstancedMesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x7396ad, roughness: 0.48, metalness: 0.3 }),
  arenaWalls.length
);
const wallPostInstances = new THREE.InstancedMesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0x29465f, roughness: 0.58, metalness: 0.3 }),
  arenaWalls.length * 2
);
const wallGlowInstances = new THREE.InstancedMesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x67dbf6, transparent: true, opacity: 0.72 }),
  arenaWalls.length * 2
);
wallBaseInstances.castShadow = true;
wallBaseInstances.receiveShadow = true;
wallCapInstances.castShadow = true;
wallCapInstances.receiveShadow = true;
wallPostInstances.castShadow = true;
wallPostInstances.receiveShadow = true;

arenaWalls.forEach((wall, wallIndex) => {
  const cosine = Math.cos(wall.yaw);
  const sine = Math.sin(wall.yaw);
  instanceDummy.position.set(wall.x, wall.height / 2, wall.z);
  instanceDummy.rotation.set(0, wall.yaw, 0);
  instanceDummy.scale.set(wall.width, wall.height, wall.depth);
  instanceDummy.updateMatrix();
  wallBaseInstances.setMatrixAt(wallIndex, instanceDummy.matrix);

  instanceDummy.position.set(wall.x, wall.height + 0.07, wall.z);
  instanceDummy.scale.set(wall.width + 0.18, 0.14, wall.depth + 0.18);
  instanceDummy.updateMatrix();
  wallCapInstances.setMatrixAt(wallIndex, instanceDummy.matrix);

  for (const [sideIndex, side] of [-1, 1].entries()) {
    const localX = side * (wall.width / 2 - 0.18);
    instanceDummy.position.set(wall.x + localX * cosine, (wall.height + 0.22) / 2, wall.z - localX * sine);
    instanceDummy.rotation.set(0, wall.yaw, 0);
    instanceDummy.scale.set(0.38, wall.height + 0.22, wall.depth + 0.13);
    instanceDummy.updateMatrix();
    wallPostInstances.setMatrixAt(wallIndex * 2 + sideIndex, instanceDummy.matrix);

    const localZ = side * (wall.depth / 2 + 0.015);
    instanceDummy.position.set(wall.x + localZ * sine, wall.height * 0.56, wall.z + localZ * cosine);
    instanceDummy.scale.set(wall.width * 0.78, 0.075, 0.035);
    instanceDummy.updateMatrix();
    wallGlowInstances.setMatrixAt(wallIndex * 2 + sideIndex, instanceDummy.matrix);
  }
});
for (const wallMesh of [wallBaseInstances, wallCapInstances, wallPostInstances, wallGlowInstances]) {
  wallMesh.instanceMatrix.needsUpdate = true;
  scene.add(wallMesh);
}

const boundaryStoneInstances = new THREE.InstancedMesh(
  new THREE.DodecahedronGeometry(1, 0),
  new THREE.MeshLambertMaterial({ color: 0xffffff }),
  26
);
boundaryStoneInstances.castShadow = true;
boundaryStoneInstances.receiveShadow = true;
for (let i = 0; i < 26; i += 1) {
  const angle = (i / 26) * Math.PI * 2;
  const radius = i % 2 ? 25.5 : 29;
  const size = 0.45 + (i % 3) * 0.13;
  instanceDummy.position.set(Math.sin(angle) * radius, 0.36, Math.cos(angle) * radius);
  instanceDummy.rotation.set(angle, angle * 0.7, angle * 0.35);
  instanceDummy.scale.setScalar(size);
  instanceDummy.updateMatrix();
  boundaryStoneInstances.setMatrixAt(i, instanceDummy.matrix);
  boundaryStoneInstances.setColorAt(i, new THREE.Color(i % 2 ? 0x314c63 : 0x365a6e));
}
boundaryStoneInstances.instanceMatrix.needsUpdate = true;
boundaryStoneInstances.instanceColor.needsUpdate = true;
scene.add(boundaryStoneInstances);

const worldDecor = new THREE.Group();
scene.add(worldDecor);
const decorRandom = seededRandom(22817);
const rockMaterial = new THREE.MeshLambertMaterial({ color: 0x31485d });
const mossMaterial = new THREE.MeshLambertMaterial({ color: 0x3d766b });
const mossLightMaterial = new THREE.MeshLambertMaterial({ color: 0x5b927a });
const ancientMetal = new THREE.MeshLambertMaterial({ color: 0x57788d, emissive: 0x101c26, emissiveIntensity: 0.24 });
const glowMaterial = new THREE.MeshBasicMaterial({
  color: 0x91efff,
  transparent: true,
  opacity: 0.95
});

const pebbleInstances = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(1, 0), rockMaterial, 34);
pebbleInstances.castShadow = true;
for (let index = 0; index < 34; index += 1) {
  const angle = decorRandom() * Math.PI * 2;
  const radius = 19 + decorRandom() * 11.5;
  const size = 0.1 + decorRandom() * 0.22;
  const scaleY = 0.35 + decorRandom() * 0.45;
  instanceDummy.position.set(Math.sin(angle) * radius, 0.1, Math.cos(angle) * radius);
  instanceDummy.rotation.set(decorRandom() * 2, decorRandom() * 2, decorRandom() * 2);
  instanceDummy.scale.set(size, size * scaleY, size);
  instanceDummy.updateMatrix();
  pebbleInstances.setMatrixAt(index, instanceDummy.matrix);
}
pebbleInstances.instanceMatrix.needsUpdate = true;
worldDecor.add(pebbleInstances);

const shrubStemInstances = new THREE.InstancedMesh(
  new THREE.CylinderGeometry(0.06, 0.1, 0.55, 6),
  new THREE.MeshLambertMaterial({ color: 0x543f2e }),
  20
);
const shrubDarkLeaves = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), mossMaterial, 40);
const shrubLightLeaves = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), mossLightMaterial, 40);
shrubStemInstances.castShadow = true;
shrubDarkLeaves.castShadow = true;
shrubLightLeaves.castShadow = true;
let darkLeafIndex = 0;
let lightLeafIndex = 0;
for (let index = 0; index < 20; index += 1) {
  const angle = (index / 20) * Math.PI * 2 + decorRandom() * 0.16;
  const radius = 26.1 + decorRandom() * 3.9;
  const shrubPosition = new THREE.Vector3(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
  const leafSpecs = [];
  for (let leaf = 0; leaf < 4; leaf += 1) {
    leafSpecs.push({
      leaf,
      size: 0.28 + decorRandom() * 0.12,
      x: (decorRandom() - 0.5) * 0.42,
      y: 0.55 + decorRandom() * 0.27,
      z: (decorRandom() - 0.5) * 0.42,
      scaleY: 0.7 + decorRandom() * 0.45
    });
  }
  const shrubScale = 0.72 + decorRandom() * 0.6;
  instanceDummy.position.set(shrubPosition.x, 0.3 * shrubScale, shrubPosition.z);
  instanceDummy.rotation.set(0, 0, 0);
  instanceDummy.scale.setScalar(shrubScale);
  instanceDummy.updateMatrix();
  shrubStemInstances.setMatrixAt(index, instanceDummy.matrix);
  for (const leafSpec of leafSpecs) {
    const leaves = leafSpec.leaf % 2 ? shrubDarkLeaves : shrubLightLeaves;
    const instanceIndex = leafSpec.leaf % 2 ? darkLeafIndex++ : lightLeafIndex++;
    const scaledSize = leafSpec.size * shrubScale;
    instanceDummy.position.set(
      shrubPosition.x + leafSpec.x * shrubScale,
      leafSpec.y * shrubScale,
      shrubPosition.z + leafSpec.z * shrubScale
    );
    instanceDummy.rotation.set(0, 0, 0);
    instanceDummy.scale.set(scaledSize, scaledSize * leafSpec.scaleY, scaledSize);
    instanceDummy.updateMatrix();
    leaves.setMatrixAt(instanceIndex, instanceDummy.matrix);
  }
}
for (const instances of [shrubStemInstances, shrubDarkLeaves, shrubLightLeaves]) {
  instances.instanceMatrix.needsUpdate = true;
  worldDecor.add(instances);
}

const lanternBaseInstances = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.38, 0.5, 0.24, 10), ancientMetal, 12);
const lanternPoleInstances = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.09, 0.14, 1.8, 9), ancientMetal, 12);
const lanternFrameInstances = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.38, 0), ancientMetal, 12);
const lanternCoreMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.19, 10, 8), glowMaterial, 12);
const lanternCores = [];
for (let index = 0; index < 12; index += 1) {
  const angle = (index / 12) * Math.PI * 2;
  const radius = 30.25;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  for (const [mesh, y, scaleY] of [
    [lanternBaseInstances, 0.12, 1],
    [lanternPoleInstances, 1.05, 1],
    [lanternFrameInstances, 2.08, 1.3],
    [lanternCoreMesh, 2.08, 1]
  ]) {
    instanceDummy.position.set(x, y, z);
    instanceDummy.rotation.set(0, angle, 0);
    instanceDummy.scale.set(1, scaleY, 1);
    instanceDummy.updateMatrix();
    mesh.setMatrixAt(index, instanceDummy.matrix);
  }
  lanternCores.push({ index, phase: index * 0.73, position: new THREE.Vector3(x, 2.08, z) });
  if (index % 6 === 0) {
    const light = new THREE.PointLight(0x65dcff, 4.5, 7, 2);
    light.position.set(x, 2.08, z);
    worldDecor.add(light);
  }
}
for (const instances of [lanternBaseInstances, lanternPoleInstances, lanternFrameInstances, lanternCoreMesh]) {
  instances.instanceMatrix.needsUpdate = true;
  worldDecor.add(instances);
}
lanternBaseInstances.castShadow = true;
lanternPoleInstances.castShadow = true;
lanternFrameInstances.castShadow = true;

const ruinColumnInstances = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.18, 0.26, 1, 8), rockMaterial, 12);
const ruinSlabInstances = new THREE.InstancedMesh(new THREE.BoxGeometry(1.55, 0.2, 0.48), ancientMetal, 6);
ruinColumnInstances.castShadow = true;
ruinSlabInstances.castShadow = true;
let ruinColumnIndex = 0;
for (let index = 0; index < 6; index += 1) {
  const angle = (index / 6) * Math.PI * 2 + 0.34;
  const radius = 27.7 + (index % 2) * 1.25;
  const ruinX = Math.sin(angle) * radius;
  const ruinZ = Math.cos(angle) * radius;
  for (const columnX of [-0.55, 0.55]) {
    const height = 0.75 + decorRandom() * 1.2;
    const tilt = (decorRandom() - 0.5) * 0.18;
    instanceDummy.position.set(ruinX + Math.cos(angle) * columnX, 0.02 + height / 2, ruinZ - Math.sin(angle) * columnX);
    instanceDummy.rotation.set(0, angle, tilt);
    instanceDummy.scale.set(1, height, 1);
    instanceDummy.updateMatrix();
    ruinColumnInstances.setMatrixAt(ruinColumnIndex++, instanceDummy.matrix);
  }
  const slabTilt = (decorRandom() - 0.5) * 0.15;
  instanceDummy.position.set(ruinX, 1.22, ruinZ);
  instanceDummy.rotation.set(0, angle, slabTilt);
  instanceDummy.scale.set(1, 1, 1);
  instanceDummy.updateMatrix();
  ruinSlabInstances.setMatrixAt(index, instanceDummy.matrix);
}
ruinColumnInstances.instanceMatrix.needsUpdate = true;
ruinSlabInstances.instanceMatrix.needsUpdate = true;
worldDecor.add(ruinColumnInstances, ruinSlabInstances);

const mountainMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const mountainInstances = [7, 8, 9].map((segments) => new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, segments), mountainMaterial, 6));
const islandCapInstances = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.7, 1.8, 0.36, 8), mossMaterial, 18);
const mountainCounts = [0, 0, 0];
for (let index = 0; index < 18; index += 1) {
  const angle = (index / 18) * Math.PI * 2 + decorRandom() * 0.12;
  const radius = 39 + decorRandom() * 21;
  const height = 4 + decorRandom() * 7;
  const mountainRadius = 2.2 + decorRandom() * 3.6;
  const mountainRotation = decorRandom() * Math.PI;
  const capBottomRadius = 1.8 + decorRandom();
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const kind = index % 3;
  const mountainIndex = mountainCounts[kind]++;
  instanceDummy.position.set(x, -1.1 + height / 2, z);
  instanceDummy.rotation.set(0, mountainRotation, 0);
  instanceDummy.scale.set(mountainRadius, height, mountainRadius);
  instanceDummy.updateMatrix();
  mountainInstances[kind].setMatrixAt(mountainIndex, instanceDummy.matrix);
  mountainInstances[kind].setColorAt(mountainIndex, new THREE.Color(index % 2 ? 0x1c3549 : 0x244256));
  const capScale = capBottomRadius / 1.8;
  instanceDummy.position.set(x, -0.86 + height, z);
  instanceDummy.rotation.set(0, 0, 0);
  instanceDummy.scale.set(1.4 * capScale, 1, capScale);
  instanceDummy.updateMatrix();
  islandCapInstances.setMatrixAt(index, instanceDummy.matrix);
}
for (const instances of mountainInstances) {
  instances.castShadow = true;
  instances.instanceMatrix.needsUpdate = true;
  instances.instanceColor.needsUpdate = true;
  worldDecor.add(instances);
}
islandCapInstances.instanceMatrix.needsUpdate = true;
worldDecor.add(islandCapInstances);

const centerRuneMaterial = new THREE.MeshBasicMaterial({
  color: 0x8cecff,
  transparent: true,
  opacity: 0.74
});
const centerRuneInstances = new THREE.InstancedMesh(new THREE.BoxGeometry(0.18, 0.04, 0.72), centerRuneMaterial, 12);
for (let index = 0; index < 12; index += 1) {
  const angle = (index / 12) * Math.PI * 2;
  instanceDummy.position.set(Math.sin(angle) * 6.4, 0.065, Math.cos(angle) * 6.4);
  instanceDummy.rotation.set(0, angle, 0);
  instanceDummy.scale.set(1, 1, 1);
  instanceDummy.updateMatrix();
  centerRuneInstances.setMatrixAt(index, instanceDummy.matrix);
}
centerRuneInstances.instanceMatrix.needsUpdate = true;
worldDecor.add(centerRuneInstances);

const decorRenderGroups = {
  boundary: [boundaryStoneInstances],
  pebbles: [pebbleInstances],
  shrubs: [shrubStemInstances, shrubDarkLeaves, shrubLightLeaves],
  lanterns: [lanternBaseInstances, lanternPoleInstances, lanternFrameInstances, lanternCoreMesh],
  ruins: [ruinColumnInstances, ruinSlabInstances],
  islands: [...mountainInstances, islandCapInstances],
  runes: [centerRuneInstances]
};

const motePositions = [];
for (let index = 0; index < 150; index += 1) {
  const angle = decorRandom() * Math.PI * 2;
  const radius = 7 + Math.sqrt(decorRandom()) * 24;
  motePositions.push(Math.sin(angle) * radius, 0.35 + decorRandom() * 3.8, Math.cos(angle) * radius);
}
const moteGeometry = new THREE.BufferGeometry();
moteGeometry.setAttribute('position', new THREE.Float32BufferAttribute(motePositions, 3));
const worldMotes = new THREE.Points(
  moteGeometry,
  new THREE.PointsMaterial({ color: 0x91eaff, size: 0.075, transparent: true, opacity: 0.5, depthWrite: false })
);
scene.add(worldMotes);

const playerNumberEl = document.querySelector('#player-number');
const weaponEl = document.querySelector('#weapon');
const timerEl = document.querySelector('#timer');
const messageEl = document.querySelector('#message');
const leaderHud = document.querySelector('#leader-hud');
const leaderArrowEl = document.querySelector('#leader-arrow');
const leaderTextEl = document.querySelector('#leader-text');
const respawnHud = document.querySelector('#respawn-hud');
const respawnTimeEl = document.querySelector('#respawn-time');
const hitFlashEl = document.querySelector('#hit-flash');
const audioToggleEl = document.querySelector('#audio-toggle');
const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-button');
const onlineStatusEl = document.querySelector('#online-status');
const onlineNameInput = document.querySelector('#online-name');
const createRoomButton = document.querySelector('#create-room-button');
const roomCodeInput = document.querySelector('#room-code-input');
const joinRoomButton = document.querySelector('#join-room-button');
const roomInfoEl = document.querySelector('#room-info');
const roomCodeDisplayEl = document.querySelector('#room-code-display');
const roomPlayerCountEl = document.querySelector('#room-player-count');
const roomRosterEl = document.querySelector('#room-roster');
const copyInviteButton = document.querySelector('#copy-invite-button');
const leaveRoomButton = document.querySelector('#leave-room-button');
const resultScreen = document.querySelector('#result-screen');
const resultCard = resultScreen.querySelector('.result-card');
const resultCrownEl = resultScreen.querySelector('.result-crown');
const resultTitleEl = document.querySelector('#result-title');
const resultSummaryEl = document.querySelector('#result-summary');
const resultAvatarCanvas = document.querySelector('#result-avatar');
const resultPlayerRankEl = document.querySelector('#result-player-rank');
const resultPlayerNumberEl = document.querySelector('#result-player-number');
const resultRankingListEl = document.querySelector('#result-ranking-list');
const rematchButton = document.querySelector('#rematch-button');

let messageTimer = 0;
let hitFlashTimer = 0;
let hitFlashStrength = 0;
let cameraShake = 0;
let networkMode = 'solo';
let networkSocket = null;
let networkResumeToken = '';
let networkReconnectTimer = 0;
let networkReconnectAttempts = 0;
let networkReconnectInProgress = false;
let networkManualDisconnect = false;
let networkPendingAction = null;
let networkSocketGeneration = 0;
let networkRoomId = '';
let networkPlayerId = '';
let networkLocalSlot = 0;
let networkMembers = [];
let networkSnapshotTimer = 0;
let networkInputTimer = 0;
let networkFireSequence = 0;
let networkLastEventId = 0;
let networkEntitySequence = 1;
let networkEventSequence = 0;
let networkEventQueue = [];
let networkSnapshotReceived = false;
const networkRemoteInputs = new Map();
const networkProjectileVisuals = new Map();
const networkAppearanceSignatures = new Map();
let soundEnabled = true;
let gameAudioContext = null;
let audioMasterGain = null;
let audioNoiseBuffer = null;
const audioCueCounts = {};
const lastAudioCueTime = new Map();

function ensureGameAudio() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  if (!gameAudioContext) {
    gameAudioContext = new AudioContextConstructor();
    audioMasterGain = gameAudioContext.createGain();
    audioMasterGain.gain.value = soundEnabled ? 0.36 : 0;
    audioMasterGain.connect(gameAudioContext.destination);
    audioNoiseBuffer = gameAudioContext.createBuffer(1, gameAudioContext.sampleRate, gameAudioContext.sampleRate);
    const samples = audioNoiseBuffer.getChannelData(0);
    for (let index = 0; index < samples.length; index += 1) samples[index] = Math.random() * 2 - 1;
  }
  if (gameAudioContext.state === 'suspended') gameAudioContext.resume().catch(() => {});
  return gameAudioContext;
}

function playAudioTone(context, frequency, endFrequency, duration, volume, type = 'sine', delay = 0) {
  const startTime = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(Math.max(20, frequency), startTime);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), startTime + duration);
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + Math.min(0.008, duration * 0.2));
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain).connect(audioMasterGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function playAudioNoise(context, duration, volume, filterFrequency, filterType = 'lowpass', delay = 0) {
  if (!audioNoiseBuffer) return;
  const startTime = context.currentTime + delay;
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = audioNoiseBuffer;
  filter.type = filterType;
  filter.frequency.value = filterFrequency;
  gain.gain.setValueAtTime(Math.max(0.0001, volume), startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  source.connect(filter).connect(gain).connect(audioMasterGain);
  source.start(startTime);
  source.stop(startTime + duration + 0.02);
}

function playGameSound(kind) {
  audioCueCounts[kind] = (audioCueCounts[kind] || 0) + 1;
  if (!soundEnabled) return;
  const throttle = { swing: 80, hit: 55, backHit: 70, pickupNumber: 65, wallImpact: 60 }[kind] || 0;
  const now = performance.now();
  if (throttle && now - (lastAudioCueTime.get(kind) || -Infinity) < throttle) return;
  lastAudioCueTime.set(kind, now);
  const context = ensureGameAudio();
  if (!context || !audioMasterGain) return;

  if (kind === 'swing') {
    playAudioNoise(context, 0.09, 0.065, 1500, 'bandpass');
    playAudioTone(context, 240, 115, 0.09, 0.035, 'triangle');
  } else if (kind === 'hit') {
    playAudioNoise(context, 0.1, 0.105, 780);
    playAudioTone(context, 135, 72, 0.11, 0.07, 'sine');
  } else if (kind === 'backHit') {
    playAudioNoise(context, 0.16, 0.15, 980);
    playAudioTone(context, 265, 78, 0.17, 0.095, 'square');
  } else if (kind === 'blocked') {
    playAudioTone(context, 740, 410, 0.12, 0.06, 'triangle');
    playAudioTone(context, 980, 620, 0.08, 0.032, 'sine', 0.025);
  } else if (kind === 'shield') {
    playAudioTone(context, 820, 1180, 0.18, 0.055, 'sine');
  } else if (kind === 'smg') {
    playAudioNoise(context, 0.06, 0.095, 1550);
    playAudioTone(context, 175, 95, 0.065, 0.052, 'square');
  } else if (kind === 'sniper') {
    playAudioNoise(context, 0.18, 0.16, 1250);
    playAudioTone(context, 185, 55, 0.2, 0.1, 'sawtooth');
  } else if (kind === 'rocket') {
    playAudioNoise(context, 0.18, 0.11, 900);
    playAudioTone(context, 105, 52, 0.22, 0.085, 'sawtooth');
  } else if (kind === 'explosion') {
    playAudioNoise(context, 0.52, 0.2, 620);
    playAudioTone(context, 82, 32, 0.5, 0.14, 'sine');
  } else if (kind === 'wallImpact') {
    playAudioNoise(context, 0.07, 0.085, 1100);
    playAudioTone(context, 185, 105, 0.08, 0.04, 'triangle');
  } else if (kind === 'pickupNumber') {
    playAudioTone(context, 660, 840, 0.09, 0.035, 'sine');
  } else if (kind === 'pickup') {
    playAudioTone(context, 430, 620, 0.11, 0.05, 'sine');
    playAudioTone(context, 650, 920, 0.13, 0.045, 'sine', 0.07);
  } else if (kind === 'countdown') {
    playAudioTone(context, 680, 650, 0.1, 0.042, 'sine');
  } else if (kind === 'countdownFinal') {
    playAudioTone(context, 880, 760, 0.14, 0.065, 'square');
  } else if (kind === 'victory') {
    [523, 659, 784, 1047].forEach((frequency, index) => playAudioTone(context, frequency, frequency, 0.26, 0.055, 'triangle', index * 0.11));
  } else if (kind === 'roundEnd') {
    [420, 350, 280].forEach((frequency, index) => playAudioTone(context, frequency, frequency * 0.94, 0.2, 0.045, 'sine', index * 0.1));
  } else if (kind === 'defeat') {
    playAudioTone(context, 210, 72, 0.42, 0.09, 'sawtooth');
  } else if (kind === 'start') {
    playAudioTone(context, 420, 620, 0.14, 0.045, 'triangle');
    playAudioTone(context, 620, 880, 0.16, 0.04, 'triangle', 0.1);
  }
}

function updateAudioToggle() {
  audioToggleEl.setAttribute('aria-pressed', String(soundEnabled));
  audioToggleEl.textContent = soundEnabled ? '🔊 声音开' : '🔇 声音关';
}

audioToggleEl.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  const context = ensureGameAudio();
  if (context && audioMasterGain) {
    audioMasterGain.gain.cancelScheduledValues(context.currentTime);
    audioMasterGain.gain.setTargetAtTime(soundEnabled ? 0.36 : 0, context.currentTime, 0.018);
  }
  updateAudioToggle();
  if (soundEnabled) playGameSound('pickup');
});
updateAudioToggle();

function flashMessage(text, seconds = 1.15) {
  messageEl.textContent = text;
  messageEl.classList.add('show');
  messageTimer = seconds;
}

function makeNumberSprite(value, color = '#ffffff') {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, toneMapped: false }));
  sprite.scale.set(2.5, 1.25, 1);
  sprite.userData = { canvas, texture, value: null, color };
  updateNumberSprite(sprite, value);
  return sprite;
}

function canvasColor(colorLike) {
  if (typeof colorLike === 'string') return colorLike;
  return `#${new THREE.Color(colorLike).getHexString()}`;
}

function shadeColor(colorLike, amount) {
  const color = new THREE.Color(colorLike);
  if (amount >= 0) color.lerp(new THREE.Color(0xffffff), amount);
  else color.lerp(new THREE.Color(0x05080f), -amount);
  return `#${color.getHexString()}`;
}

function drawIllustratedAvatar({
  shirtColor, pantsColor, shoeColor, skinColor, hairColor,
  hairStyle, outfitStyle, pantsStyle, shoesStyle, weaponType, meleeWeapon, meleeStyle
}) {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 560;
  const ctx = canvas.getContext('2d');
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const outline = '#2b1c22';
  const shirt = canvasColor(shirtColor);
  const pants = canvasColor(pantsColor);
  const shoes = canvasColor(shoeColor);
  const skin = canvasColor(skinColor);
  const hair = canvasColor(hairColor);

  const strokeLimb = (points, color, width) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let index = 1; index < points.length; index += 1) ctx.lineTo(points[index][0], points[index][1]);
    ctx.strokeStyle = outline;
    ctx.lineWidth = width + 12;
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };
  const ellipse = (x, y, rx, ry, fill, stroke = outline, lineWidth = 7) => {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke && lineWidth > 0) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  };
  const polygon = (points, fill, stroke = outline, lineWidth = 7) => {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  };

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.32)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 6;

  if (['trench', 'robe', 'armor'].includes(outfitStyle)) {
    const capeColor = outfitStyle === 'armor' ? '#2157a5' : shadeColor(shirt, -0.18);
    polygon([[142, 260], [258, 260], [292, 432], [200, 400], [108, 432]], capeColor, outline, 8);
  }

  const shorts = pantsStyle === 'shorts';
  strokeLimb([[171, 365], [164, 438], [153, 493]], shorts ? skin : pants, 34);
  strokeLimb([[229, 365], [236, 438], [247, 493]], shorts ? skin : pants, 34);
  if (shorts) {
    polygon([[140, 350], [198, 347], [195, 401], [145, 402]], pants, outline, 7);
    polygon([[202, 347], [260, 350], [255, 402], [205, 401]], pants, outline, 7);
  }
  if (pantsStyle === 'striped') {
    ctx.strokeStyle = shadeColor(pants, 0.45);
    ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(164, 385); ctx.lineTo(154, 474); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(236, 385); ctx.lineTo(246, 474); ctx.stroke();
  }
  if (['guard', 'tech'].includes(pantsStyle)) {
    ellipse(160, 435, 22, 15, pantsStyle === 'tech' ? '#68eaff' : '#69798b', outline, 5);
    ellipse(240, 435, 22, 15, pantsStyle === 'tech' ? '#68eaff' : '#69798b', outline, 5);
  }

  const shoeAccent = shoesStyle === 'gold' ? '#ffd35e' : shoesStyle === 'neon' ? '#69f6ff' : shadeColor(shoes, 0.38);
  ellipse(148, 500, 34, 18, shoes, outline, 7);
  ellipse(252, 500, 34, 18, shoes, outline, 7);
  ctx.strokeStyle = shoeAccent;
  ctx.lineWidth = shoesStyle === 'boots' || shoesStyle === 'combat' ? 11 : 6;
  ctx.beginPath(); ctx.moveTo(128, 497); ctx.lineTo(168, 497); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(232, 497); ctx.lineTo(272, 497); ctx.stroke();

  const sleeveColor = ['armor', 'vest'].includes(outfitStyle) ? '#7e91a7' : shirt;
  strokeLimb([[151, 252], [116, 302], [95, 355]], skin, 29);
  strokeLimb([[249, 252], [284, 302], [305, 355]], skin, 29);
  strokeLimb([[151, 252], [130, 283]], sleeveColor, outfitStyle === 'vest' ? 25 : 37);
  strokeLimb([[249, 252], [270, 283]], sleeveColor, outfitStyle === 'vest' ? 25 : 37);

  const torsoGradient = ctx.createLinearGradient(135, 225, 265, 360);
  torsoGradient.addColorStop(0, shadeColor(shirt, 0.26));
  torsoGradient.addColorStop(0.52, shirt);
  torsoGradient.addColorStop(1, shadeColor(shirt, -0.24));
  ctx.beginPath();
  ctx.moveTo(156, 224);
  ctx.quadraticCurveTo(200, 205, 244, 224);
  ctx.quadraticCurveTo(270, 276, 258, 360);
  ctx.quadraticCurveTo(200, 382, 142, 360);
  ctx.quadraticCurveTo(130, 276, 156, 224);
  ctx.closePath();
  ctx.fillStyle = torsoGradient;
  ctx.fill();
  ctx.strokeStyle = outline;
  ctx.lineWidth = 9;
  ctx.stroke();

  if (outfitStyle === 'jacket' || outfitStyle === 'bomber') {
    ctx.strokeStyle = '#f0f5fa'; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(200, 232); ctx.lineTo(200, 354); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(160, 235); ctx.lineTo(193, 278); ctx.lineTo(200, 232); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(240, 235); ctx.lineTo(207, 278); ctx.lineTo(200, 232); ctx.stroke();
  } else if (outfitStyle === 'hoodie') {
    ctx.strokeStyle = shadeColor(shirt, -0.32); ctx.lineWidth = 18;
    ctx.beginPath(); ctx.arc(200, 229, 39, 0.08 * Math.PI, 0.92 * Math.PI, true); ctx.stroke();
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(187, 253); ctx.lineTo(183, 300); ctx.moveTo(213, 253); ctx.lineTo(217, 300); ctx.stroke();
  } else if (outfitStyle === 'armor') {
    polygon([[151, 245], [200, 225], [249, 245], [239, 334], [200, 357], [161, 334]], '#aebdcc', outline, 7);
    polygon([[165, 257], [200, 240], [235, 257], [226, 305], [200, 326], [174, 305]], '#316bc0', '#e9d36e', 6);
  } else if (outfitStyle === 'suit') {
    polygon([[158, 232], [194, 278], [180, 339], [143, 356]], '#253143', null);
    polygon([[242, 232], [206, 278], [220, 339], [257, 356]], '#253143', null);
    polygon([[194, 245], [206, 245], [214, 321], [200, 345], [186, 321]], '#d7484f', outline, 4);
  } else if (outfitStyle === 'robe') {
    ctx.strokeStyle = '#f1c75b'; ctx.lineWidth = 12;
    ctx.beginPath(); ctx.moveTo(148, 333); ctx.lineTo(252, 333); ctx.stroke();
  } else if (outfitStyle === 'jersey') {
    ctx.strokeStyle = '#f5f8ff'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(158, 240); ctx.lineTo(151, 342); ctx.moveTo(242, 240); ctx.lineTo(249, 342); ctx.stroke();
    ctx.font = '900 50px Arial'; ctx.textAlign = 'center'; ctx.fillStyle = '#f5f8ff'; ctx.fillText('8', 200, 315);
  } else if (outfitStyle === 'trench') {
    ctx.strokeStyle = '#e9edf2'; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(200, 240); ctx.lineTo(200, 405); ctx.stroke();
    ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(151, 330); ctx.lineTo(249, 330); ctx.stroke();
  } else {
    ctx.strokeStyle = '#f0d48c'; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.arc(200, 231, 27, 0.1 * Math.PI, 0.9 * Math.PI, true); ctx.stroke();
  }

  ellipse(200, 213, 23, 25, skin, outline, 6);
  ellipse(200, 142, 76, 86, skin, outline, 9);
  ellipse(125, 150, 13, 22, skin, outline, 5);
  ellipse(275, 150, 13, 22, skin, outline, 5);

  const drawHairMass = (long = false, spiky = false) => {
    if (long) {
      ellipse(132, 178, 27, 92, shadeColor(hair, -0.1), outline, 7);
      ellipse(268, 178, 27, 92, shadeColor(hair, -0.1), outline, 7);
    }
    const points = [[126, 136], [132, 88], [153, 53], [171, 67], [188, 39], [203, 65], [227, 42], [231, 71], [264, 60], [253, 91], [278, 102], [267, 137], [252, 119], [240, 130], [222, 109], [204, 128], [184, 107], [166, 128], [147, 113]];
    if (spiky) points.splice(3, 0, [141, 34], [166, 57], [181, 21], [207, 58], [242, 26], [248, 70]);
    polygon(points, hair, outline, 9);
    ctx.strokeStyle = shadeColor(hair, 0.28); ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(151, 82); ctx.quadraticCurveTo(171, 61, 184, 92); ctx.moveTo(205, 67); ctx.quadraticCurveTo(223, 58, 235, 91); ctx.stroke();
  };

  drawHairMass(hairStyle === 'long' || hairStyle === 'ponytail', hairStyle === 'spiky' || hairStyle === 'mohawk');
  if (hairStyle === 'ponytail') {
    ellipse(286, 151, 24, 58, hair, outline, 7);
    ellipse(276, 104, 12, 12, '#ff6f91', outline, 4);
  }

  for (const eyeX of [170, 230]) {
    ellipse(eyeX, 153, 20, 25, '#f8fbff', outline, 5);
    ellipse(eyeX, 156, 11, 17, '#2d9eea', null, 0);
    ellipse(eyeX, 160, 6, 11, '#10203a', null, 0);
    ellipse(eyeX - 4, 150, 4, 5, '#ffffff', null, 0);
  }
  ctx.strokeStyle = hair; ctx.lineWidth = 7;
  ctx.beginPath(); ctx.moveTo(151, 124); ctx.quadraticCurveTo(169, 115, 186, 125); ctx.moveTo(214, 125); ctx.quadraticCurveTo(231, 115, 249, 124); ctx.stroke();
  ellipse(200, 177, 6, 7, shadeColor(skin, -0.14), null, 0);
  ctx.strokeStyle = '#9b4d52'; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.arc(200, 183, 17, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke();
  ellipse(146, 183, 14, 7, 'rgba(242,116,130,.35)', null, 0);
  ellipse(254, 183, 14, 7, 'rgba(242,116,130,.35)', null, 0);

  if (hairStyle === 'cap') {
    ctx.beginPath(); ctx.arc(200, 95, 72, Math.PI, Math.PI * 2); ctx.lineTo(272, 118); ctx.lineTo(128, 118); ctx.closePath();
    ctx.fillStyle = shirt; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 8; ctx.stroke();
    polygon([[220, 112], [293, 122], [263, 137], [211, 128]], shirt, outline, 6);
  } else if (hairStyle === 'beanie') {
    ctx.beginPath(); ctx.arc(200, 101, 74, Math.PI, Math.PI * 2); ctx.lineTo(274, 128); ctx.lineTo(126, 128); ctx.closePath();
    ctx.fillStyle = shirt; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 8; ctx.stroke();
    ellipse(200, 42, 16, 16, shirt, outline, 5);
  } else if (hairStyle === 'cowboy') {
    ellipse(200, 102, 105, 19, '#9a6036', outline, 7);
    ctx.beginPath(); ctx.roundRect(155, 34, 90, 70, 25); ctx.fillStyle = '#86502e'; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 8; ctx.stroke();
  } else if (hairStyle === 'helmet') {
    ctx.beginPath(); ctx.arc(200, 116, 82, Math.PI, Math.PI * 2); ctx.lineTo(280, 157); ctx.lineTo(120, 157); ctx.closePath();
    ctx.fillStyle = '#74899d'; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 9; ctx.stroke();
    ctx.fillStyle = 'rgba(89,227,255,.82)'; ctx.fillRect(137, 124, 126, 22);
  } else if (['motorcycleHelmet', 'racingHelmet', 'spaceHelmet', 'mechaHelmet', 'riotHelmet'].includes(hairStyle)) {
    const helmetColor = hairStyle === 'spaceHelmet' ? '#e8f1f7' : hairStyle === 'mechaHelmet' ? '#596b82' : hairStyle === 'riotHelmet' ? '#263644' : shirt;
    ctx.beginPath(); ctx.roundRect(109, 38, 182, 190, 72); ctx.fillStyle = helmetColor; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 9; ctx.stroke();
    ctx.beginPath(); ctx.roundRect(128, 91, 144, 78, 24); ctx.fillStyle = hairStyle === 'mechaHelmet' ? '#13202f' : 'rgba(62,180,226,.82)'; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 7; ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,.68)'; ctx.beginPath(); ctx.roundRect(143, 103, 73, 9, 5); ctx.fill();
    ctx.beginPath(); ctx.moveTo(127, 169); ctx.lineTo(153, 215); ctx.lineTo(247, 215); ctx.lineTo(273, 169); ctx.lineTo(251, 224); ctx.lineTo(149, 224); ctx.closePath(); ctx.fillStyle = hairStyle === 'spaceHelmet' ? '#aab9c7' : shadeColor(helmetColor, -0.25); ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 7; ctx.stroke();
  } else if (hairStyle === 'wizard') {
    ellipse(200, 98, 102, 18, '#624099', outline, 7);
    polygon([[145, 94], [220, 4], [258, 94]], '#56358f', outline, 8);
  } else if (hairStyle === 'crown') {
    polygon([[157, 92], [151, 39], [181, 67], [200, 20], [220, 67], [250, 39], [243, 92]], '#ffd45a', outline, 7);
  } else if (hairStyle === 'headphones') {
    ctx.strokeStyle = '#273143'; ctx.lineWidth = 15; ctx.beginPath(); ctx.arc(200, 128, 80, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#55e6f8'; ctx.fillRect(112, 120, 22, 58); ctx.fillRect(266, 120, 22, 58);
  }

  const drawClub = () => {
    ctx.strokeStyle = outline; ctx.lineWidth = 28; ctx.beginPath(); ctx.moveTo(301, 352); ctx.lineTo(345, 262); ctx.stroke();
    ctx.strokeStyle = '#9c5a31'; ctx.lineWidth = 19; ctx.beginPath(); ctx.moveTo(301, 352); ctx.lineTo(345, 262); ctx.stroke();
    ellipse(351, 249, 17, 24, '#a86638', outline, 6);
  };
  if (weaponType === 'smg') {
    polygon([[277, 309], [351, 295], [364, 321], [291, 340]], '#48d5ad', outline, 7);
    polygon([[307, 332], [325, 334], [321, 369], [300, 362]], '#26364b', outline, 5);
  } else if (weaponType === 'sniper') {
    polygon([[263, 316], [360, 283], [368, 300], [272, 336]], '#6098ef', outline, 7);
    ellipse(315, 295, 23, 9, '#17263c', outline, 4);
  } else if (weaponType === 'rocket') {
    ctx.strokeStyle = outline; ctx.lineWidth = 34; ctx.beginPath(); ctx.moveTo(274, 326); ctx.lineTo(359, 292); ctx.stroke();
    ctx.strokeStyle = '#f16442'; ctx.lineWidth = 24; ctx.beginPath(); ctx.moveTo(274, 326); ctx.lineTo(359, 292); ctx.stroke();
    ellipse(361, 291, 12, 18, '#ffb454', outline, 5);
  } else if (meleeStyle === 'chickenLeg') {
    ctx.strokeStyle = outline; ctx.lineWidth = 30; ctx.beginPath(); ctx.moveTo(298, 354); ctx.lineTo(331, 294); ctx.stroke();
    ctx.strokeStyle = '#f1dfb4'; ctx.lineWidth = 20; ctx.stroke();
    ellipse(352, 258, 32, 44, '#d96b38', outline, 8); ellipse(333, 273, 24, 31, '#ef8a45', outline, 6);
  } else if (meleeStyle === 'pickaxe') {
    ctx.strokeStyle = outline; ctx.lineWidth = 24; ctx.beginPath(); ctx.moveTo(299, 354); ctx.lineTo(344, 250); ctx.stroke();
    ctx.strokeStyle = '#9b6338'; ctx.lineWidth = 15; ctx.stroke();
    ctx.strokeStyle = outline; ctx.lineWidth = 24; ctx.beginPath(); ctx.moveTo(299, 259); ctx.quadraticCurveTo(347, 230, 389, 252); ctx.stroke();
    ctx.strokeStyle = '#91a6b5'; ctx.lineWidth = 14; ctx.stroke();
  } else if (meleeStyle === 'shovel') {
    ctx.strokeStyle = outline; ctx.lineWidth = 23; ctx.beginPath(); ctx.moveTo(299, 354); ctx.lineTo(344, 250); ctx.stroke();
    ctx.strokeStyle = '#a66c3b'; ctx.lineWidth = 14; ctx.stroke();
    polygon([[327, 251], [352, 224], [380, 237], [375, 273], [350, 286]], '#a8bac7', outline, 7);
  } else if (meleeStyle === 'greatClub') {
    ctx.strokeStyle = outline; ctx.lineWidth = 49; ctx.beginPath(); ctx.moveTo(298, 354); ctx.lineTo(349, 246); ctx.stroke();
    ctx.strokeStyle = '#95542e'; ctx.lineWidth = 38; ctx.stroke(); ellipse(354, 239, 25, 32, '#b36d3b', outline, 7);
  } else {
    drawClub();
  }

  ctx.restore();
  return canvas;
}

const fighterLineupImage = new Image();
fighterLineupImage.src = '/assets/fighter-base-chibi-v1.png';
const fighterLineupCrops = [
  [310, 40, 634, 1120],
  [310, 40, 634, 1120],
  [310, 40, 634, 1120],
  [310, 40, 634, 1120],
  [310, 40, 634, 1120],
  [310, 40, 634, 1120]
];

function generatedAvatarVariant() { return 0; }

const PLAYER_AVATAR_RESOLUTION = 1;
// Bots occupy far fewer screen pixels than the player; this still oversamples
// their visible size while making first-use animation frames much cheaper.
const BOT_AVATAR_RESOLUTION = 0.4;

function tintCharacterArea(ctx, color, x, y, width, height, alpha) {
  ctx.save();
  ctx.globalCompositeOperation = 'source-atop';
  ctx.globalAlpha = alpha;
  ctx.fillStyle = canvasColor(color);
  ctx.fillRect(x, y, width, height);
  ctx.restore();
}

function recolorGeneratedHair(ctx, color, resolution) {
  const width = ctx.canvas.width;
  const height = Math.min(ctx.canvas.height, Math.round(225 * resolution));
  const image = ctx.getImageData(0, 0, width, height);
  const pixels = image.data;
  const target = new THREE.Color(color);
  const targetChannels = [target.r * 255, target.g * 255, target.b * 255];
  const minX = Math.round(78 * resolution);
  const maxX = Math.min(width, Math.round(322 * resolution));
  const minY = Math.round(6 * resolution);
  let recoloredPixels = 0;

  // The generated base has warm brown hair. Select those pixels by hue/value
  // instead of tinting a rectangle, which previously colored the face and was
  // kept so faint that changing the hair swatch looked like it did nothing.
  for (let y = minY; y < height; y += 1) {
    for (let x = minX; x < maxX; x += 1) {
      const index = (y * width + x) * 4;
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const alpha = pixels[index + 3];
      const warmBrown = alpha > 20
        && red > 45 && red < 218
        && green > 18 && green < 145
        && blue < 112
        && red - green > 24
        && green - blue > 8;
      if (!warmBrown) continue;
      const sourceValue = Math.max(red, green, blue) / 255;
      const brightness = THREE.MathUtils.clamp(0.48 + sourceValue * 0.92, 0.56, 1.28);
      const highlight = Math.max(0, sourceValue - 0.52) * 76;
      pixels[index] = Math.min(255, targetChannels[0] * brightness + highlight);
      pixels[index + 1] = Math.min(255, targetChannels[1] * brightness + highlight);
      pixels[index + 2] = Math.min(255, targetChannels[2] * brightness + highlight);
      recoloredPixels += 1;
    }
  }
  ctx.putImageData(image, 0, 0);
  return recoloredPixels;
}

function drawAvatarHairBack(ctx, appearance) {
  const { hairStyle } = appearance;
  const accessoryColor = canvasColor(appearance.shirtColor);
  ctx.save();
  const hair = canvasColor(appearance.hairColor);
  const dark = shadeColor(hair, -0.28);
  const gradient = ctx.createLinearGradient(120, 55, 270, 220);
  gradient.addColorStop(0, shadeColor(hair, 0.25));
  gradient.addColorStop(0.48, hair);
  gradient.addColorStop(1, dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = '#24181a';
  ctx.lineWidth = 6;
  if (hairStyle === 'long') {
    ctx.beginPath(); ctx.ellipse(133, 164, 34, 102, -0.08, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(267, 164, 34, 102, 0.08, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }
  if (hairStyle === 'ponytail') {
    ctx.beginPath(); ctx.ellipse(286, 151, 28, 78, -0.24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }
  if (hairStyle === 'braid') {
    for (let index = 0; index < 5; index += 1) {
      ctx.beginPath(); ctx.ellipse(279 + Math.sin(index) * 4, 142 + index * 29, 17 - index, 22, 0.15, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }
  if (hairStyle === 'curly') {
    for (const [x, y, radius] of [[139,115,28],[151,78,30],[181,58,32],[216,58,33],[248,82,31],[262,119,27]]) {
      ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }
  if (hairStyle === 'samuraiBun') {
    ctx.beginPath(); ctx.ellipse(200, 39, 34, 29, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#d7a34e'; ctx.beginPath(); ctx.roundRect(168, 34, 64, 12, 5); ctx.fill(); ctx.strokeStyle = '#24181a'; ctx.lineWidth = 3; ctx.stroke();
  }
  if (hairStyle === 'hood') {
    ctx.fillStyle = shadeColor(accessoryColor, -0.26);
    ctx.beginPath();
    ctx.moveTo(200, 15);
    ctx.bezierCurveTo(142, 15, 105, 57, 106, 121);
    ctx.bezierCurveTo(107, 181, 130, 218, 158, 245);
    ctx.lineTo(200, 226);
    ctx.lineTo(242, 245);
    ctx.bezierCurveTo(270, 218, 293, 181, 294, 121);
    ctx.bezierCurveTo(295, 57, 258, 15, 200, 15);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  ctx.restore();
}

function drawAvatarHairFront(ctx, appearance) {
  const style = appearance.hairStyle;
  const accessoryColor = canvasColor(appearance.shirtColor);
  ctx.save();
  const hair = canvasColor(appearance.hairColor);
  const outline = '#24181a';
  const shine = shadeColor(hair, 0.32);
  const accessoryLight = shadeColor(accessoryColor, 0.34);
  const accessoryDark = shadeColor(accessoryColor, -0.3);
  const hairGradient = ctx.createLinearGradient(145, 35, 255, 130);
  hairGradient.addColorStop(0, shine);
  hairGradient.addColorStop(0.48, hair);
  hairGradient.addColorStop(1, shadeColor(hair, -0.32));
  const poly = (points, fill, lineWidth = 6) => {
    ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]);
    points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y));
    ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = lineWidth; ctx.stroke();
  };
  if (style === 'spiky') {
    poly([[128, 119], [137, 76], [158, 88], [169, 45], [190, 75], [205, 35], [221, 74], [247, 51], [261, 116], [245, 108], [228, 119], [207, 108], [184, 119], [163, 107], [144, 120]], hairGradient, 4.5);
    ctx.strokeStyle = shine; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(165, 83); ctx.lineTo(171, 57); ctx.moveTo(203, 73); ctx.lineTo(207, 48); ctx.moveTo(231, 85); ctx.lineTo(245, 64); ctx.stroke();
  } else if (style === 'mohawk') {
    ctx.fillStyle = hairGradient; ctx.strokeStyle = outline; ctx.lineWidth = 4.5;
    ctx.beginPath(); ctx.moveTo(169, 101); ctx.bezierCurveTo(171, 72, 178, 35, 190, 15); ctx.quadraticCurveTo(199, 35, 202, 63); ctx.quadraticCurveTo(211, 30, 222, 18); ctx.bezierCurveTo(230, 49, 233, 74, 231, 101); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = shine; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(188, 86); ctx.quadraticCurveTo(190, 50, 193, 31); ctx.moveTo(213, 84); ctx.quadraticCurveTo(219, 49, 220, 32); ctx.stroke();
  } else if (style === 'undercut') {
    ctx.fillStyle = shadeColor(hair, -0.42); ctx.strokeStyle = outline; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.ellipse(200, 95, 70, 54, 0, Math.PI, Math.PI * 2); ctx.fill(); ctx.stroke();
    poly([[136,112],[149,72],[176,79],[192,42],[211,72],[248,52],[266,108],[243,101],[221,116],[197,100],[173,119],[153,103]], hairGradient, 4);
    ctx.strokeStyle = shine; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(178,82); ctx.quadraticCurveTo(198,52,220,75); ctx.stroke();
  } else if (style === 'curly') {
    for (const [x, y, radius] of [[137,108,27],[151,76,31],[180,57,31],[211,54,33],[242,72,31],[263,105,27],[184,91,30],[221,91,30]]) {
      ctx.fillStyle = hairGradient; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    ctx.strokeStyle = shine; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(181,57,16,Math.PI,Math.PI*1.85); ctx.stroke(); ctx.beginPath(); ctx.arc(232,77,15,Math.PI,Math.PI*1.8); ctx.stroke();
  } else if (style === 'sidepart') {
    ctx.fillStyle = hairGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(128,119); ctx.bezierCurveTo(132,62,166,38,209,43); ctx.bezierCurveTo(246,45,270,72,270,116); ctx.quadraticCurveTo(245,102,226,94); ctx.bezierCurveTo(213,118,193,133,164,139); ctx.quadraticCurveTo(176,109,169,86); ctx.quadraticCurveTo(149,108,128,119); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = shine; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(181,56); ctx.quadraticCurveTo(218,48,248,82); ctx.stroke();
  } else if (style === 'samuraiBun') {
    ctx.fillStyle = hairGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(132,120); ctx.bezierCurveTo(135,67,164,48,200,49); ctx.bezierCurveTo(237,48,265,68,268,120); ctx.quadraticCurveTo(237,105,217,115); ctx.lineTo(200,94); ctx.lineTo(181,116); ctx.quadraticCurveTo(158,104,132,120); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#d7a34e'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(158,113); ctx.quadraticCurveTo(200,126,242,113); ctx.stroke();
  } else if (style === 'fedora') {
    const felt = ctx.createLinearGradient(145, 39, 254, 122); felt.addColorStop(0, accessoryLight); felt.addColorStop(.5, accessoryColor); felt.addColorStop(1, accessoryDark);
    ctx.fillStyle = felt; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(153,101); ctx.lineTo(162,48); ctx.quadraticCurveTo(200,31,238,48); ctx.lineTo(247,101); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#d7ad54'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(155,90); ctx.lineTo(245,90); ctx.stroke();
    ctx.fillStyle = felt; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(200,105,112,23,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  } else if (style === 'bucket') {
    const cloth = ctx.createLinearGradient(138,50,260,129); cloth.addColorStop(0,accessoryLight); cloth.addColorStop(.52,accessoryColor); cloth.addColorStop(1,accessoryDark);
    ctx.fillStyle=cloth; ctx.strokeStyle=outline; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(139,101); ctx.quadraticCurveTo(148,48,200,47); ctx.quadraticCurveTo(252,48,261,101); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(118,101); ctx.quadraticCurveTo(200,121,282,101); ctx.lineTo(267,135); ctx.quadraticCurveTo(200,151,133,135); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle=accessoryLight; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(137,116); ctx.quadraticCurveTo(200,129,263,116); ctx.stroke();
  } else if (style === 'aviator') {
    ctx.fillStyle='#72482f'; ctx.strokeStyle=outline; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(130,117); ctx.bezierCurveTo(135,61,165,40,200,41); ctx.bezierCurveTo(235,40,265,61,270,117); ctx.lineTo(257,167); ctx.lineTo(236,153); ctx.lineTo(236,105); ctx.lineTo(164,105); ctx.lineTo(164,153); ctx.lineTo(143,167); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='#e8c992'; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(145,105); ctx.quadraticCurveTo(200,120,255,105); ctx.stroke();
    for (const x of [173,227]) { ctx.fillStyle='#64dff4'; ctx.beginPath(); ctx.ellipse(x,101,25,15,0,0,Math.PI*2); ctx.fill(); ctx.strokeStyle=outline; ctx.lineWidth=4; ctx.stroke(); }
  } else if (style === 'foxEars') {
    poly([[127,91],[139,18],[184,73]], hairGradient,5); poly([[216,73],[261,18],[273,91]], hairGradient,5);
    poly([[141,70],[146,38],[171,70]],'#ef9a7c',2.5); poly([[229,70],[254,38],[259,70]],'#ef9a7c',2.5);
    ctx.strokeStyle=shine; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(141,103); ctx.quadraticCurveTo(200,74,259,103); ctx.stroke();
  } else if (style === 'cap') {
    const capGradient = ctx.createLinearGradient(146, 52, 250, 125); capGradient.addColorStop(0, accessoryLight); capGradient.addColorStop(0.55, accessoryColor); capGradient.addColorStop(1, accessoryDark);
    ctx.fillStyle = capGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(132, 116); ctx.bezierCurveTo(137, 75, 162, 51, 200, 50); ctx.bezierCurveTo(239, 51, 263, 75, 269, 116); ctx.quadraticCurveTo(200, 128, 132, 116); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = accessoryLight; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(200, 53); ctx.lineTo(200, 116); ctx.stroke();
    ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(184, 116); ctx.quadraticCurveTo(246, 111, 286, 129); ctx.quadraticCurveTo(243, 141, 191, 128); ctx.closePath(); ctx.fillStyle = accessoryDark; ctx.fill(); ctx.stroke();
  } else if (style === 'beanie') {
    const knitGradient = ctx.createLinearGradient(145, 51, 254, 129); knitGradient.addColorStop(0, accessoryLight); knitGradient.addColorStop(0.55, accessoryColor); knitGradient.addColorStop(1, accessoryDark);
    ctx.fillStyle = knitGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(130, 111); ctx.bezierCurveTo(137, 72, 164, 49, 200, 49); ctx.bezierCurveTo(236, 49, 263, 72, 270, 111); ctx.lineTo(266, 127); ctx.lineTo(134, 127); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = accessoryDark; ctx.beginPath(); ctx.roundRect(130, 106, 140, 25, 10); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = accessoryLight; ctx.lineWidth = 2.5; for (let x = 146; x <= 254; x += 18) { ctx.beginPath(); ctx.moveTo(x, 109); ctx.lineTo(x + 3, 126); ctx.stroke(); }
    ctx.fillStyle = accessoryColor; ctx.beginPath(); ctx.arc(200, 44, 13, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.stroke();
  } else if (style === 'cowboy') {
    const leather = ctx.createLinearGradient(145, 38, 250, 122); leather.addColorStop(0, '#cb8950'); leather.addColorStop(.5, '#92542f'); leather.addColorStop(1, '#5f3426');
    ctx.fillStyle = leather; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(151, 101); ctx.quadraticCurveTo(156, 44, 178, 37); ctx.quadraticCurveTo(200, 48, 222, 37); ctx.quadraticCurveTo(244, 45, 249, 101); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#f0ba61'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(153, 91); ctx.quadraticCurveTo(200, 101, 247, 91); ctx.stroke();
    ctx.fillStyle = leather; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(91, 109); ctx.quadraticCurveTo(142, 91, 200, 106); ctx.quadraticCurveTo(258, 91, 309, 109); ctx.quadraticCurveTo(255, 132, 200, 116); ctx.quadraticCurveTo(145, 132, 91, 109); ctx.closePath(); ctx.fill(); ctx.stroke();
  } else if (style === 'helmet') {
    const metal = ctx.createLinearGradient(130, 47, 270, 142);
    metal.addColorStop(0, '#e7f4ff'); metal.addColorStop(0.45, '#718da8'); metal.addColorStop(1, '#263d55');
    ctx.fillStyle = metal; ctx.strokeStyle = outline; ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(126, 123); ctx.bezierCurveTo(130, 72, 158, 45, 200, 44); ctx.bezierCurveTo(242, 45, 270, 72, 274, 123); ctx.lineTo(265, 146); ctx.lineTo(135, 146); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(69,226,255,.82)'; ctx.strokeStyle = '#17384c'; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(137, 116, 126, 22, 8); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#e9f7ff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(151, 120); ctx.lineTo(224, 120); ctx.stroke();
  } else if (style === 'motorcycleHelmet') {
    const shell = ctx.createLinearGradient(120, 42, 281, 216);
    shell.addColorStop(0, accessoryLight); shell.addColorStop(.42, accessoryColor); shell.addColorStop(1, accessoryDark);
    ctx.fillStyle = shell; ctx.strokeStyle = outline; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(200, 28); ctx.bezierCurveTo(143, 28, 112, 70, 111, 132); ctx.bezierCurveTo(111, 176, 132, 207, 158, 225); ctx.lineTo(245, 225); ctx.bezierCurveTo(271, 203, 289, 170, 287, 126); ctx.bezierCurveTo(284, 68, 253, 29, 200, 28); ctx.closePath(); ctx.fill(); ctx.stroke();
    const visor = ctx.createLinearGradient(133, 93, 270, 158); visor.addColorStop(0, '#d8fbff'); visor.addColorStop(.2, '#57d8f1'); visor.addColorStop(.7, '#163c62'); visor.addColorStop(1, '#0a1728');
    ctx.fillStyle = visor; ctx.strokeStyle = '#101923'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(126, 98); ctx.quadraticCurveTo(200, 71, 274, 99); ctx.lineTo(263, 156); ctx.quadraticCurveTo(200, 169, 137, 154); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,.82)'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(144, 104); ctx.quadraticCurveTo(193, 89, 237, 101); ctx.stroke();
    ctx.fillStyle = accessoryDark; ctx.strokeStyle = outline; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(133, 160); ctx.lineTo(158, 218); ctx.lineTo(242, 218); ctx.lineTo(270, 158); ctx.lineTo(248, 207); ctx.lineTo(151, 207); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = accessoryLight; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(178, 200); ctx.lineTo(222, 200); ctx.stroke();
    for (const x of [185, 200, 215]) { ctx.strokeStyle = '#17212c'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x, 188); ctx.lineTo(x, 198); ctx.stroke(); }
  } else if (style === 'racingHelmet') {
    const shell = ctx.createLinearGradient(115, 34, 286, 226); shell.addColorStop(0, '#f8fbff'); shell.addColorStop(.3, accessoryLight); shell.addColorStop(.58, accessoryColor); shell.addColorStop(1, accessoryDark);
    ctx.fillStyle = shell; ctx.strokeStyle = outline; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(200, 25); ctx.bezierCurveTo(143, 25, 110, 68, 111, 135); ctx.lineTo(128, 195); ctx.lineTo(159, 226); ctx.lineTo(246, 226); ctx.lineTo(279, 190); ctx.lineTo(289, 119); ctx.bezierCurveTo(283, 60, 250, 26, 200, 25); ctx.closePath(); ctx.fill(); ctx.stroke();
    poly([[121,73],[159,45],[183,71],[222,37],[273,68],[285,93],[245,84],[217,102],[176,78],[136,104]], '#f6c84f', 4);
    const glass = ctx.createLinearGradient(129,102,271,158); glass.addColorStop(0,'#8df4ff'); glass.addColorStop(.45,'#286899'); glass.addColorStop(1,'#101c31');
    ctx.fillStyle=glass; ctx.strokeStyle=outline; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(126,103); ctx.quadraticCurveTo(200,81,274,104); ctx.lineTo(263,157); ctx.quadraticCurveTo(199,169,137,155); ctx.closePath(); ctx.fill(); ctx.stroke();
    poly([[133,164],[154,216],[245,216],[269,162],[251,204],[149,204]], accessoryDark, 5);
    ctx.fillStyle='#f6c84f'; ctx.beginPath(); ctx.roundRect(176,184,48,10,5); ctx.fill();
  } else if (style === 'spaceHelmet') {
    ctx.fillStyle='#eff5f7'; ctx.strokeStyle=outline; ctx.lineWidth=8; ctx.beginPath(); ctx.ellipse(200,126,99,105,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
    const bubble=ctx.createRadialGradient(165,91,12,202,127,87); bubble.addColorStop(0,'rgba(220,253,255,.92)'); bubble.addColorStop(.35,'rgba(94,210,236,.64)'); bubble.addColorStop(1,'rgba(23,58,89,.9)');
    ctx.fillStyle=bubble; ctx.strokeStyle='#28475e'; ctx.lineWidth=7; ctx.beginPath(); ctx.ellipse(200,126,78,78,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='rgba(255,255,255,.86)'; ctx.lineWidth=6; ctx.beginPath(); ctx.arc(192,117,58,Math.PI*1.05,Math.PI*1.55); ctx.stroke();
    ctx.fillStyle=accessoryColor; ctx.strokeStyle=outline; ctx.lineWidth=6; ctx.beginPath(); ctx.roundRect(124,190,152,39,15); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#5de8f3'; ctx.beginPath(); ctx.arc(160,209,7,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#ffcc55'; ctx.beginPath(); ctx.arc(183,209,7,0,Math.PI*2); ctx.fill();
  } else if (style === 'mechaHelmet') {
    const armor=ctx.createLinearGradient(118,34,286,228); armor.addColorStop(0,'#d9e7f2'); armor.addColorStop(.35,'#71859a'); armor.addColorStop(.66,accessoryColor); armor.addColorStop(1,'#253646');
    poly([[200,24],[249,40],[284,87],[279,176],[247,224],[153,224],[120,176],[115,87],[151,42]], armor,7);
    poly([[122,91],[159,61],[196,83],[200,153],[153,143],[128,122]], accessoryDark,5); poly([[278,91],[241,61],[204,83],[200,153],[247,143],[272,122]], accessoryDark,5);
    ctx.fillStyle='#0a1722'; ctx.strokeStyle=outline; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(137,111); ctx.lineTo(192,122); ctx.lineTo(200,143); ctx.lineTo(208,122); ctx.lineTo(264,111); ctx.lineTo(251,151); ctx.lineTo(149,151); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='#63efff'; ctx.shadowColor='#27d9ff'; ctx.shadowBlur=15; ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(148,127); ctx.lineTo(190,136); ctx.moveTo(210,136); ctx.lineTo(252,127); ctx.stroke(); ctx.shadowBlur=0;
    poly([[150,156],[187,164],[200,183],[213,164],[250,156],[239,213],[161,213]], '#34495c',5);
    ctx.strokeStyle=accessoryLight; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(180,194); ctx.lineTo(220,194); ctx.stroke();
  } else if (style === 'riotHelmet') {
    const shell=ctx.createLinearGradient(120,34,282,214); shell.addColorStop(0,'#53697a'); shell.addColorStop(.45,'#283a49'); shell.addColorStop(1,'#101a25');
    ctx.fillStyle=shell; ctx.strokeStyle=outline; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(200,28); ctx.bezierCurveTo(145,28,113,70,114,132); ctx.lineTo(124,193); ctx.lineTo(154,222); ctx.lineTo(246,222); ctx.lineTo(278,190); ctx.lineTo(286,127); ctx.bezierCurveTo(281,68,250,28,200,28); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='#8ba2b4'; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(126,91); ctx.quadraticCurveTo(200,66,274,91); ctx.stroke();
    ctx.fillStyle='rgba(43,101,125,.72)'; ctx.strokeStyle='#111c27'; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(124,96); ctx.quadraticCurveTo(200,76,276,97); ctx.lineTo(267,169); ctx.quadraticCurveTo(200,182,133,168); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle='rgba(211,244,255,.7)'; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(141,104); ctx.quadraticCurveTo(190,91,237,102); ctx.stroke();
    ctx.fillStyle='#182733'; ctx.strokeStyle=outline; ctx.lineWidth=5; ctx.beginPath(); ctx.roundRect(145,178,110,42,15); ctx.fill(); ctx.stroke();
    for (let y=188;y<=207;y+=9){ctx.strokeStyle='#607587';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(166,y);ctx.lineTo(234,y);ctx.stroke();}
  } else if (style === 'wizard') {
    ctx.fillStyle = '#643e9f'; ctx.strokeStyle = outline; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.ellipse(200, 101, 105, 19, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    poly([[145, 96], [220, 3], [257, 96]], '#56358f', 7);
  } else if (style === 'crown') {
    poly([[157, 96], [151, 41], [181, 68], [200, 19], [220, 68], [250, 41], [243, 96]], '#ffd555', 6);
  } else if (style === 'headphones') {
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#182231'; ctx.lineWidth = 18; ctx.beginPath(); ctx.arc(200, 131, 76, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = accessoryColor; ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(200, 131, 76, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = accessoryLight; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(200, 130, 72, Math.PI * 1.08, Math.PI * 1.92); ctx.stroke();
    for (const side of [-1, 1]) {
      const cupX = side < 0 ? 111 : 264;
      ctx.fillStyle = '#172231'; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(cupX, 128, 28, 53, 12); ctx.fill(); ctx.stroke();
      ctx.fillStyle = accessoryColor; ctx.beginPath(); ctx.roundRect(cupX + (side < 0 ? 5 : 2), 134, 21, 41, 9); ctx.fill();
      ctx.strokeStyle = accessoryLight; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cupX + 8, 140); ctx.lineTo(cupX + 8, 167); ctx.stroke();
      ctx.strokeStyle = '#202b3a'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(side < 0 ? 135 : 264, 139); ctx.lineTo(side < 0 ? 142 : 257, 155); ctx.stroke();
    }
  } else if (style === 'bandana') {
    ctx.strokeStyle = outline; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(123, 134); ctx.quadraticCurveTo(200, 145, 277, 134); ctx.stroke();
    ctx.strokeStyle = accessoryColor; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(123, 134); ctx.quadraticCurveTo(200, 145, 277, 134); ctx.stroke();
    poly([[272, 136], [307, 122], [289, 158]], accessoryColor, 3);
  } else if (style === 'hood') {
    const hoodGradient = ctx.createLinearGradient(112, 56, 288, 226); hoodGradient.addColorStop(0, accessoryLight); hoodGradient.addColorStop(.55, accessoryColor); hoodGradient.addColorStop(1, accessoryDark);
    ctx.fillStyle = hoodGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(126, 83); ctx.bezierCurveTo(111, 119, 117, 181, 151, 218); ctx.lineTo(174, 202); ctx.bezierCurveTo(143, 177, 137, 133, 146, 102); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(274, 83); ctx.bezierCurveTo(289, 119, 283, 181, 249, 218); ctx.lineTo(226, 202); ctx.bezierCurveTo(257, 177, 263, 133, 254, 102); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = accessoryLight; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(200, 126, 70, Math.PI * .73, Math.PI * 2.27); ctx.stroke();
  } else if (style === 'goggles') {
    ctx.strokeStyle = '#3a2c2c'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(132, 116); ctx.quadraticCurveTo(200, 105, 268, 116); ctx.stroke();
    for (const x of [169, 231]) {
      const lens = ctx.createLinearGradient(x - 21, 105, x + 22, 132); lens.addColorStop(0, '#d8fbff'); lens.addColorStop(.45, '#68dff4'); lens.addColorStop(1, '#2579a2');
      ctx.fillStyle = lens; ctx.strokeStyle = '#263443'; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(x, 119, 25, 15, x < 200 ? -.08 : .08, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x - 12, 113); ctx.lineTo(x + 2, 109); ctx.stroke();
    }
    ctx.strokeStyle = '#263443'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(194, 118); ctx.lineTo(206, 118); ctx.stroke();
  } else if (style === 'catEars') {
    poly([[135, 83], [144, 22], [183, 70]], hairGradient, 5); poly([[217, 70], [256, 22], [265, 83]], hairGradient, 5);
    poly([[146, 65], [150, 39], [169, 66]], '#f09aa7', 2.5); poly([[231, 66], [250, 39], [254, 65]], '#f09aa7', 2.5);
  } else if (style === 'horns') {
    ctx.lineCap = 'round'; ctx.strokeStyle = outline; ctx.lineWidth = 19;
    ctx.beginPath(); ctx.moveTo(154, 80); ctx.quadraticCurveTo(123, 56, 126, 23); ctx.quadraticCurveTo(104, 44, 112, 74); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(246, 80); ctx.quadraticCurveTo(277, 56, 274, 23); ctx.quadraticCurveTo(296, 44, 288, 74); ctx.stroke();
    ctx.strokeStyle = '#d8b16a'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(154, 80); ctx.quadraticCurveTo(123, 56, 126, 23); ctx.quadraticCurveTo(104, 44, 112, 74); ctx.stroke(); ctx.beginPath(); ctx.moveTo(246, 80); ctx.quadraticCurveTo(277, 56, 274, 23); ctx.quadraticCurveTo(296, 44, 288, 74); ctx.stroke();
  } else if (style === 'halo') {
    ctx.save(); ctx.shadowColor = '#ffd45b'; ctx.shadowBlur = 18; ctx.strokeStyle = '#ffe477'; ctx.lineWidth = 8; ctx.beginPath(); ctx.ellipse(200, 24, 68, 13, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
  } else if (style === 'beret') {
    const beretGradient = ctx.createLinearGradient(143, 51, 250, 112); beretGradient.addColorStop(0, accessoryLight); beretGradient.addColorStop(.5, accessoryColor); beretGradient.addColorStop(1, accessoryDark);
    ctx.fillStyle = beretGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.ellipse(192, 80, 73, 39, -.12, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = accessoryDark; ctx.beginPath(); ctx.roundRect(132, 94, 136, 17, 8); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(191, 42); ctx.quadraticCurveTo(201, 30, 207, 39); ctx.stroke();
  } else if (style === 'officer') {
    const capGradient = ctx.createLinearGradient(143, 44, 258, 120); capGradient.addColorStop(0, accessoryLight); capGradient.addColorStop(.55, accessoryColor); capGradient.addColorStop(1, accessoryDark);
    ctx.fillStyle = capGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(142, 103); ctx.lineTo(151, 62); ctx.quadraticCurveTo(200, 37, 249, 62); ctx.lineTo(258, 103); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = '#ffd361'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(148, 93); ctx.quadraticCurveTo(200, 105, 252, 93); ctx.stroke();
    ctx.fillStyle = accessoryDark; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(169, 100); ctx.quadraticCurveTo(242, 92, 282, 112); ctx.quadraticCurveTo(232, 124, 176, 113); ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  if (['long', 'ponytail', 'braid'].includes(style)) {
    ctx.strokeStyle = shine; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(147, 76); ctx.quadraticCurveTo(174, 50, 188, 84); ctx.moveTo(210, 61); ctx.quadraticCurveTo(234, 48, 249, 84); ctx.stroke();
  }
  ctx.restore();
}

function drawAvatarOutfitDetails(ctx, appearance) {
  const style = appearance.outfitStyle;
  ctx.save();
  ctx.translate(0, 100);
  // "none" is the deliberately bare-torso loadout. The original illustrated
  // body remains visible, while pants and footwear are still drawn separately.
  if (style === 'none') {
    ctx.restore();
    return;
  }
  const shirt = canvasColor(appearance.shirtColor);
  const light = shadeColor(shirt, 0.45);
  const dark = shadeColor(shirt, -0.35);
  const outline = 'rgba(36,27,36,.76)';
  const fabric = ctx.createLinearGradient(138, 126, 252, 248);
  fabric.addColorStop(0, light); fabric.addColorStop(0.42, shirt); fabric.addColorStop(1, dark);
  const path = (points, fill = fabric, stroke = outline, lineWidth = 4) => {
    ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y)); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
  };
  const sleeve = (points, width, fill = shirt) => {
    ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = outline; ctx.lineWidth = width + 5;
    ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y)); ctx.stroke();
    ctx.strokeStyle = fill; ctx.lineWidth = width; ctx.stroke();
    ctx.strokeStyle = shadeColor(fill, 0.32); ctx.lineWidth = 3; ctx.stroke();
  };

  if (['trench', 'robe', 'ceremonial', 'winter', 'monk'].includes(style)) {
    path([[145, 181], [255, 181], [278, 330], [230, 309], [200, 335], [170, 309], [122, 330]], shadeColor(shirt, -0.18), outline, 6);
  }
  const longSleeves = ['jacket', 'hoodie', 'suit', 'trench', 'bomber', 'street', 'pirate', 'ranger', 'robe', 'ninja', 'tracksuit', 'academy', 'winter', 'monk'];
  const shortSleeves = ['tshirt', 'jersey'];
  if (longSleeves.includes(style)) {
    sleeve([[146, 136], [116, 211], [96, 283]], 30, style === 'suit' ? '#273345' : shirt);
    sleeve([[254, 136], [284, 211], [304, 283]], 30, style === 'suit' ? '#273345' : shirt);
  } else if (shortSleeves.includes(style)) {
    const underLayer = shadeColor(shirt, -0.42);
    sleeve([[143, 139], [116, 213], [97, 283]], 22, underLayer);
    sleeve([[257, 139], [284, 213], [303, 283]], 22, underLayer);
    sleeve([[143, 140], [123, 181]], 34, shirt); sleeve([[257, 140], [277, 181]], 34, shirt);
  } else if (style === 'vest') {
    const underLayer = shadeColor(shirt, -0.46);
    sleeve([[145, 138], [116, 213], [97, 283]], 25, underLayer);
    sleeve([[255, 138], [284, 213], [303, 283]], 25, underLayer);
  } else if (['armor', 'samurai', 'ceremonial', 'knight', 'cyber', 'dragon'].includes(style)) {
    const armorSleeve = style === 'samurai' || style === 'dragon' ? '#843137' : style === 'ceremonial' ? '#375a96' : style === 'cyber' ? '#263c54' : '#758a9e';
    sleeve([[145, 137], [117, 211], [98, 282]], 30, armorSleeve);
    sleeve([[255, 137], [283, 211], [302, 282]], 30, armorSleeve);
    path([[127, 137], [151, 121], [174, 143], [149, 165], [119, 158]], style === 'samurai' ? '#9f3a3d' : '#9cb0c2');
    path([[273, 137], [249, 121], [226, 143], [251, 165], [281, 158]], style === 'samurai' ? '#9f3a3d' : '#9cb0c2');
  }

  const torsoFill = ['armor', 'samurai', 'ceremonial', 'knight', 'cyber', 'dragon'].includes(style)
    ? (() => { const metal = ctx.createLinearGradient(143, 124, 250, 246); metal.addColorStop(0, '#eef6fc'); metal.addColorStop(0.5, shirt); metal.addColorStop(1, shadeColor(shirt, -0.42)); return metal; })()
    : style === 'suit' ? '#273345' : fabric;
  ctx.beginPath();
  ctx.moveTo(160, 126);
  ctx.quadraticCurveTo(148, 132, 143, 151);
  ctx.quadraticCurveTo(147, 176, 151, 190);
  ctx.lineTo(160, 244);
  ctx.quadraticCurveTo(180, 253, 200, 254);
  ctx.quadraticCurveTo(220, 253, 240, 244);
  ctx.lineTo(249, 190);
  ctx.quadraticCurveTo(253, 176, 257, 151);
  ctx.quadraticCurveTo(252, 132, 240, 126);
  ctx.quadraticCurveTo(220, 119, 200, 124);
  ctx.quadraticCurveTo(180, 119, 160, 126);
  ctx.closePath();
  ctx.fillStyle = torsoFill; ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.stroke();

  ctx.save();
  ctx.globalAlpha = 0.34;
  ctx.strokeStyle = light;
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(163, 145); ctx.quadraticCurveTo(155, 190, 166, 235); ctx.moveTo(237, 145); ctx.quadraticCurveTo(245, 190, 234, 235); ctx.stroke();
  ctx.strokeStyle = dark;
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(161, 240); ctx.quadraticCurveTo(200, 248, 239, 240); ctx.stroke();
  ctx.restore();

  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  if (style === 'tshirt') {
    ctx.strokeStyle = dark; ctx.lineWidth = 7; ctx.beginPath(); ctx.arc(200, 123, 25, 0.08 * Math.PI, 0.92 * Math.PI); ctx.stroke();
    ctx.strokeStyle = light; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(200, 122, 21, 0.12 * Math.PI, 0.88 * Math.PI); ctx.stroke();
  } else if (style === 'jacket' || style === 'bomber') {
    ctx.strokeStyle = '#eef6fb'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(200, 128); ctx.lineTo(200, 247); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(163, 126); ctx.lineTo(193, 168); ctx.lineTo(200, 130); ctx.moveTo(237, 126); ctx.lineTo(207, 168); ctx.lineTo(200, 130); ctx.stroke();
    if (style === 'bomber') { ctx.fillStyle = '#ffd45b'; ctx.beginPath(); ctx.arc(235, 176, 10, 0, Math.PI * 2); ctx.fill(); }
  } else if (style === 'hoodie') {
    ctx.strokeStyle = dark; ctx.lineWidth = 11; ctx.beginPath(); ctx.arc(200, 122, 32, 0.12 * Math.PI, 0.88 * Math.PI); ctx.stroke();
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(188, 137); ctx.lineTo(184, 181); ctx.moveTo(212, 137); ctx.lineTo(216, 181); ctx.stroke();
    ctx.fillStyle = light; for (const [x, y] of [[184,184],[216,184]]) { ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill(); }
  } else if (style === 'vest' || style === 'ranger') {
    ctx.strokeStyle = '#5a402d'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(160, 127); ctx.lineTo(186, 246); ctx.moveTo(240, 127); ctx.lineTo(214, 246); ctx.stroke();
    if (style === 'ranger') { ctx.beginPath(); ctx.moveTo(153, 151); ctx.lineTo(245, 226); ctx.stroke(); }
  } else if (['armor', 'samurai', 'ceremonial', 'knight', 'cyber', 'dragon'].includes(style)) {
    ctx.strokeStyle = style === 'ceremonial' ? '#ffd761' : '#e5eef6'; ctx.lineWidth = 4;
    for (let row = 0; row < 3; row += 1) { ctx.beginPath(); ctx.moveTo(164, 164 + row * 27); ctx.lineTo(236, 164 + row * 27); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(170, 134); ctx.lineTo(200, 161); ctx.lineTo(230, 134); ctx.stroke();
  } else if (style === 'suit') {
    path([[160, 127], [195, 173], [184, 226], [151, 246]], '#e8f1fa', null); path([[240, 127], [205, 173], [216, 226], [249, 246]], '#e8f1fa', null);
    path([[194, 147], [206, 147], [211, 216], [200, 236], [189, 216]], '#d54852', null);
  } else if (style === 'trench') {
    ctx.strokeStyle = light; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(200, 132); ctx.lineTo(200, 320); ctx.stroke();
    ctx.fillStyle = light; for (const y of [171, 202, 233]) for (const x of [183, 217]) { ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI * 2); ctx.fill(); }
  } else if (style === 'jersey') {
    ctx.font = '900 40px Arial'; ctx.textAlign = 'center'; ctx.fillStyle = '#ffffff'; ctx.fillText('8', 200, 207);
  } else if (style === 'robe') {
    ctx.strokeStyle = '#f2c85b'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(148, 241); ctx.lineTo(252, 241); ctx.stroke();
  } else if (style === 'pirate') {
    ctx.strokeStyle = '#f1e5cd'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(163, 132); ctx.lineTo(194, 171); ctx.lineTo(236, 132); ctx.stroke();
    ctx.strokeStyle = '#c63e46'; ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(152, 236); ctx.lineTo(248, 246); ctx.stroke();
  } else if (style === 'street') {
    ctx.strokeStyle = '#6df4ff'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(157, 150); ctx.lineTo(242, 226); ctx.stroke();
  } else if (style === 'ninja') {
    ctx.strokeStyle = '#18202d'; ctx.lineWidth = 13; ctx.beginPath(); ctx.moveTo(158, 138); ctx.lineTo(241, 226); ctx.stroke();
    ctx.strokeStyle = '#d04e55'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(150, 238); ctx.lineTo(250, 238); ctx.stroke();
  } else if (style === 'knight') {
    ctx.strokeStyle = '#eff7ff'; ctx.lineWidth = 4; for (const y of [158,185,212]) { ctx.beginPath(); ctx.moveTo(165,y); ctx.lineTo(235,y); ctx.stroke(); }
    ctx.fillStyle = '#4c73b8'; ctx.beginPath(); ctx.moveTo(200,153); ctx.lineTo(226,180); ctx.lineTo(200,218); ctx.lineTo(174,180); ctx.closePath(); ctx.fill();
  } else if (style === 'tracksuit') {
    ctx.strokeStyle = '#f2f7fb'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(200,130); ctx.lineTo(200,245); ctx.moveTo(116,153); ctx.lineTo(95,281); ctx.moveTo(284,153); ctx.lineTo(305,281); ctx.stroke();
    ctx.strokeStyle = dark; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(161,226); ctx.quadraticCurveTo(200,238,239,226); ctx.stroke();
  } else if (style === 'academy') {
    path([[159,127],[194,169],[181,227],[151,246]],'#eef5fb',null); path([[241,127],[206,169],[219,227],[249,246]],'#eef5fb',null);
    ctx.fillStyle='#d8ad4d'; ctx.beginPath(); ctx.moveTo(194,148); ctx.lineTo(206,148); ctx.lineTo(211,210); ctx.lineTo(200,229); ctx.lineTo(189,210); ctx.closePath(); ctx.fill();
  } else if (style === 'winter') {
    ctx.strokeStyle='#f4f6ef'; ctx.lineWidth=14; ctx.beginPath(); ctx.arc(200,129,36,.08*Math.PI,.92*Math.PI); ctx.stroke();
    ctx.strokeStyle=dark; ctx.lineWidth=5; for (const x of [184,216]) { ctx.beginPath(); ctx.moveTo(x,155); ctx.lineTo(x,235); ctx.stroke(); }
    ctx.fillStyle=light; for (const x of [184,216]) { ctx.beginPath(); ctx.arc(x,174,5,0,Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(x,207,5,0,Math.PI*2); ctx.fill(); }
  } else if (style === 'cyber') {
    ctx.strokeStyle='#65efff'; ctx.shadowColor='#35cbe7'; ctx.shadowBlur=10; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(164,143); ctx.lineTo(198,174); ctx.lineTo(237,141); ctx.moveTo(198,174); ctx.lineTo(200,235); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle='#65efff'; ctx.beginPath(); ctx.arc(200,177,10,0,Math.PI*2); ctx.fill();
  } else if (style === 'monk') {
    ctx.strokeStyle='#e7c05d'; ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(156,136); ctx.lineTo(240,230); ctx.moveTo(151,239); ctx.lineTo(249,239); ctx.stroke();
    ctx.fillStyle='#6f392b'; for (let i=0;i<7;i+=1) { const a=Math.PI*.15+i*Math.PI*.115; ctx.beginPath(); ctx.arc(200+Math.cos(a)*44,138+Math.sin(a)*35,5,0,Math.PI*2); ctx.fill(); }
  } else if (style === 'dragon') {
    ctx.strokeStyle='#f0c95c'; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(167,146); ctx.quadraticCurveTo(219,160,181,194); ctx.quadraticCurveTo(163,213,205,228); ctx.quadraticCurveTo(238,216,226,190); ctx.stroke();
    ctx.fillStyle='#f0c95c'; ctx.beginPath(); ctx.moveTo(225,183); ctx.lineTo(242,174); ctx.lineTo(235,195); ctx.closePath(); ctx.fill();
  }
  // Construction lines and contact shadows make the garment read as a layer
  // wrapped around the body: raised shoulders, sleeve folds, cuffs and hem.
  ctx.save();
  ctx.strokeStyle = 'rgba(22,24,34,.48)'; ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(158, 132); ctx.quadraticCurveTo(143, 144, 141, 169);
  ctx.moveTo(242, 132); ctx.quadraticCurveTo(257, 144, 259, 169);
  ctx.moveTo(160, 244); ctx.quadraticCurveTo(200, 258, 240, 244);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(255,255,255,.28)'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(126, 178); ctx.quadraticCurveTo(111, 220, 104, 258);
  ctx.moveTo(274, 178); ctx.quadraticCurveTo(289, 220, 296, 258);
  ctx.moveTo(166, 151); ctx.quadraticCurveTo(178, 178, 170, 218);
  ctx.stroke();
  ctx.strokeStyle = shadeColor(shirt, -0.52); ctx.lineWidth = 9;
  ctx.beginPath(); ctx.moveTo(84, 287); ctx.lineTo(107, 283); ctx.moveTo(293, 283); ctx.lineTo(316, 287); ctx.stroke();
  ctx.strokeStyle = light; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(86, 283); ctx.lineTo(106, 280); ctx.moveTo(294, 280); ctx.lineTo(314, 283); ctx.stroke();
  ctx.restore();
  // A selected outfit includes fitted gloves, preventing the original bare
  // hands from peeking out at sleeve ends during idle and melee frames.
  const gloveColor = ['armor', 'samurai', 'ceremonial', 'knight', 'cyber', 'dragon'].includes(style)
    ? shadeColor(shirt, -0.48)
    : shadeColor(shirt, -0.58);
  ctx.fillStyle = gloveColor; ctx.strokeStyle = outline; ctx.lineWidth = 4;
  for (const x of [96, 304]) {
    ctx.beginPath(); ctx.ellipse(x, 309, 18, 25, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = shadeColor(gloveColor, 0.38); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x - 11, 303); ctx.lineTo(x + 11, 303); ctx.stroke();
    ctx.strokeStyle = outline; ctx.lineWidth = 4;
  }
  ctx.restore();
}

function drawAvatarPantsDetails(ctx, appearance) {
  const style = appearance.pantsStyle;
  ctx.save();
  // Leave the source character's covered waist and bare legs visible.
  if (style === 'none') {
    ctx.restore();
    return;
  }
  ctx.translate(0, 347);
  ctx.scale(1, 0.676);
  ctx.translate(0, -238);
  const pants = canvasColor(appearance.pantsColor);
  const light = shadeColor(pants, 0.48);
  const dark = shadeColor(pants, -0.38);
  const outline = 'rgba(36,27,36,.72)';
  const gradient = ctx.createLinearGradient(145, 260, 255, 490); gradient.addColorStop(0, light); gradient.addColorStop(0.38, pants); gradient.addColorStop(1, dark);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const short = style === 'shorts';
  ctx.fillStyle = gradient; ctx.strokeStyle = outline; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(153, 238); ctx.quadraticCurveTo(200, 230, 247, 238); ctx.lineTo(257, 301); ctx.quadraticCurveTo(235, 311, 211, 306); ctx.lineTo(200, 287); ctx.lineTo(189, 306); ctx.quadraticCurveTo(165, 311, 143, 301); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = light; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(154, 252); ctx.quadraticCurveTo(200, 260, 246, 252); ctx.stroke();
  if (!short) {
    const width = ['loose', 'winter'].includes(style) ? 70 : style === 'ninja' ? 51 : 58;
    const leg = (points) => { ctx.strokeStyle = outline; ctx.lineWidth = width + 6; ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y)); ctx.stroke(); ctx.strokeStyle = gradient; ctx.lineWidth = width; ctx.stroke(); };
    leg([[167, 285], [165, 372], [150, 458]]); leg([[233, 285], [235, 372], [250, 458]]);
    ctx.save(); ctx.globalAlpha = 0.3; ctx.strokeStyle = light; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(172, 302); ctx.quadraticCurveTo(175, 365, 153, 447); ctx.moveTo(228, 302); ctx.quadraticCurveTo(225, 365, 247, 447); ctx.stroke();
    ctx.strokeStyle = dark; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(200, 292); ctx.lineTo(200, 374); ctx.stroke(); ctx.restore();
    ctx.strokeStyle = shadeColor(pants, -0.24); ctx.lineWidth = style === 'joggers' ? 9 : 5; ctx.beginPath(); ctx.moveTo(132, 458); ctx.lineTo(169, 458); ctx.moveTo(231, 458); ctx.lineTo(268, 458); ctx.stroke();
  } else {
    // Shorts use fitted leggings underneath, keeping the Q-style leg shape
    // while preventing exposed-skin seams between the hem and the shoes.
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    const legging = shadeColor(pants, -0.46);
    const drawLegging = (points) => {
      ctx.strokeStyle = outline; ctx.lineWidth = 62; ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]); points.slice(1).forEach(([x, y]) => ctx.lineTo(x, y)); ctx.stroke();
      ctx.strokeStyle = legging; ctx.lineWidth = 56; ctx.stroke();
    };
    drawLegging([[165, 296], [163, 374], [149, 458]]);
    drawLegging([[235, 296], [237, 374], [251, 458]]);
    ctx.strokeStyle = shadeColor(pants, 0.16); ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(132, 458); ctx.lineTo(169, 458); ctx.moveTo(231, 458); ctx.lineTo(268, 458); ctx.stroke();
    ctx.restore();
  }
  ctx.strokeStyle = light; ctx.fillStyle = dark;
  if (style === 'cargo') {
    for (const x of [134, 226]) { ctx.fillStyle = shadeColor(pants, -0.2); ctx.strokeStyle = light; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(x, 324, 40, 40, 7); ctx.fill(); ctx.stroke(); ctx.fillStyle = light; ctx.fillRect(x + 5, 330, 30, 5); }
    ctx.strokeStyle = '#d0aa63'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(150, 365); ctx.lineTo(145, 422); ctx.moveTo(250, 365); ctx.lineTo(255, 422); ctx.stroke();
  } else if (style === 'striped') {
    ctx.strokeStyle = '#f2edf7'; ctx.lineWidth = 10; ctx.beginPath(); ctx.moveTo(151, 299); ctx.lineTo(140, 455); ctx.moveTo(249, 299); ctx.lineTo(260, 455); ctx.stroke();
    ctx.strokeStyle = dark; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(151, 300); ctx.lineTo(140, 453); ctx.moveTo(249, 300); ctx.lineTo(260, 453); ctx.stroke();
  } else if (['guard','plated','samurai'].includes(style)) {
    const plateColor = style === 'samurai' ? '#bd3d42' : style === 'plated' ? '#9eb3c5' : '#52697c';
    for (const x of [158,242]) { ctx.fillStyle = plateColor; ctx.strokeStyle = '#dcebf7'; ctx.lineWidth = 3; ctx.beginPath(); ctx.roundRect(x - 25, 378, 50, style === 'plated' ? 60 : 42, 9); ctx.fill(); ctx.stroke(); ctx.strokeStyle = style === 'samurai' ? '#f1c55a' : '#34495b'; ctx.beginPath(); ctx.moveTo(x - 18, 391); ctx.lineTo(x + 18, 423); ctx.moveTo(x + 18, 391); ctx.lineTo(x - 18, 423); ctx.stroke(); }
  } else if (style === 'jeans') {
    ctx.strokeStyle = '#e0ad58'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(145, 276); ctx.quadraticCurveTo(174, 301, 197, 279); ctx.moveTo(203, 279); ctx.quadraticCurveTo(226, 301, 255, 276); ctx.stroke();
    ctx.strokeStyle = '#6fa7d8'; ctx.lineWidth = 8; ctx.globalAlpha = .55; ctx.beginPath(); ctx.moveTo(142, 402); ctx.lineTo(169, 394); ctx.moveTo(231, 394); ctx.lineTo(258, 402); ctx.stroke(); ctx.globalAlpha = 1;
  } else if (style === 'joggers') {
    ctx.strokeStyle = light; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(136, 452); ctx.lineTo(166, 452); ctx.moveTo(234, 452); ctx.lineTo(264, 452); ctx.stroke();
    ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(192, 252); ctx.lineTo(188, 290); ctx.moveTo(208, 252); ctx.lineTo(212, 290); ctx.stroke();
  } else if (style === 'camo') {
    const camoColors = ['#708154', '#3f543d', '#9a8c5b']; let camoIndex = 0;
    for (const [x, y, rx, ry] of [[149,316,17,10],[241,334,19,11],[158,370,14,20],[242,407,16,12],[147,442,15,9],[253,456,12,8]]) { ctx.fillStyle = camoColors[camoIndex++ % camoColors.length]; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, .42, 0, Math.PI * 2); ctx.fill(); }
  } else if (style === 'formal') {
    ctx.strokeStyle = '#e8edf4'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(167, 292); ctx.lineTo(151, 455); ctx.moveTo(233, 292); ctx.lineTo(249, 455); ctx.stroke();
    ctx.strokeStyle = '#151b26'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(151, 258); ctx.lineTo(249, 258); ctx.stroke(); ctx.fillStyle = '#d9b454'; ctx.fillRect(193, 251, 14, 14);
  } else if (style === 'tech') {
    ctx.strokeStyle = '#61ecff'; ctx.shadowColor = '#31c8ec'; ctx.shadowBlur = 8; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(145, 318); ctx.lineTo(170, 360); ctx.lineTo(148, 441); ctx.moveTo(255, 318); ctx.lineTo(230, 360); ctx.lineTo(252, 441); ctx.stroke(); ctx.shadowBlur = 0;
    for (const x of [158,242]) { ctx.fillStyle = '#61ecff'; ctx.beginPath(); ctx.arc(x, 381, 6, 0, Math.PI * 2); ctx.fill(); }
  } else if (style === 'royal') {
    ctx.strokeStyle = '#ffd55f'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(145, 315); ctx.lineTo(170, 360); ctx.lineTo(149, 444); ctx.moveTo(255, 315); ctx.lineTo(230, 360); ctx.lineTo(251, 444); ctx.stroke();
    ctx.fillStyle = '#ffd55f'; ctx.beginPath(); ctx.moveTo(181, 267); ctx.lineTo(200, 284); ctx.lineTo(219, 267); ctx.lineTo(211, 296); ctx.lineTo(189, 296); ctx.closePath(); ctx.fill();
  } else if (style === 'leather') {
    ctx.strokeStyle = '#d69a61'; ctx.lineWidth = 4; for (const x of [158,242]) { ctx.beginPath(); ctx.moveTo(x - 13, 311); ctx.lineTo(x + 11, 458); ctx.stroke(); ctx.fillStyle = '#80502f'; ctx.beginPath(); ctx.roundRect(x - 20, 382, 40, 30, 8); ctx.fill(); ctx.stroke(); }
  } else if (style === 'loose') {
    ctx.strokeStyle = light; ctx.lineWidth = 5; ctx.globalAlpha = .5; for (const x of [154,246]) { ctx.beginPath(); ctx.moveTo(x + (x < 200 ? 14 : -14), 302); ctx.quadraticCurveTo(x + (x < 200 ? 21 : -21), 370, x, 449); ctx.stroke(); } ctx.globalAlpha = 1;
  } else if (style === 'tactical') {
    ctx.fillStyle = shadeColor(pants,-0.3); ctx.strokeStyle=light; ctx.lineWidth=3;
    for (const [x,y] of [[132,319],[228,319],[137,382],[223,382]]) { ctx.beginPath(); ctx.roundRect(x,y,40,34,6); ctx.fill(); ctx.stroke(); }
    ctx.strokeStyle='#d3a857'; ctx.lineWidth=6; ctx.beginPath(); ctx.moveTo(146,300); ctx.lineTo(164,451); ctx.moveTo(254,300); ctx.lineTo(236,451); ctx.stroke();
  } else if (style === 'ninja') {
    ctx.strokeStyle='#b13c47'; ctx.lineWidth=8; for (const x of [154,246]) { for (const y of [349,382,415]) { ctx.beginPath(); ctx.moveTo(x-21,y-9); ctx.lineTo(x+21,y+9); ctx.stroke(); } }
    ctx.strokeStyle=shadeColor(pants,-0.58); ctx.lineWidth=11; ctx.beginPath(); ctx.moveTo(132,455); ctx.lineTo(170,455); ctx.moveTo(230,455); ctx.lineTo(268,455); ctx.stroke();
  } else if (style === 'explorer') {
    ctx.strokeStyle='#d8b66e'; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(151,310); ctx.lineTo(169,439); ctx.moveTo(249,310); ctx.lineTo(231,439); ctx.stroke();
    ctx.fillStyle='#745239'; for (const x of [139,225]) { ctx.beginPath(); ctx.roundRect(x,338,37,42,7); ctx.fill(); ctx.strokeStyle='#d8b66e'; ctx.lineWidth=3; ctx.stroke(); }
  } else if (style === 'winter') {
    ctx.strokeStyle='#f3f5ec'; ctx.lineWidth=10; ctx.beginPath(); ctx.moveTo(126,454); ctx.lineTo(174,454); ctx.moveTo(226,454); ctx.lineTo(274,454); ctx.stroke();
    ctx.strokeStyle=light; ctx.globalAlpha=.55; ctx.lineWidth=4; for (const x of [156,244]) { ctx.beginPath(); ctx.moveTo(x-17,321); ctx.quadraticCurveTo(x+17,350,x-12,384); ctx.quadraticCurveTo(x+18,418,x-8,446); ctx.stroke(); } ctx.globalAlpha=1;
  } else if (style === 'cyber') {
    ctx.strokeStyle='#61ecff'; ctx.shadowColor='#31c8ec'; ctx.shadowBlur=11; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(144,309); ctx.lineTo(171,350); ctx.lineTo(145,389); ctx.lineTo(163,442); ctx.moveTo(256,309); ctx.lineTo(229,350); ctx.lineTo(255,389); ctx.lineTo(237,442); ctx.stroke(); ctx.shadowBlur=0;
    ctx.fillStyle='#61ecff'; for (const [x,y] of [[158,367],[242,367],[151,427],[249,427]]) { ctx.beginPath(); ctx.arc(x,y,6,0,Math.PI*2); ctx.fill(); }
  } else if (style === 'dragon') {
    ctx.strokeStyle='#f0c95c'; ctx.lineWidth=6; for (const x of [157,243]) { ctx.beginPath(); ctx.moveTo(x-17,318); ctx.quadraticCurveTo(x+22,341,x-13,369); ctx.quadraticCurveTo(x+20,397,x-9,438); ctx.stroke(); }
    ctx.fillStyle='#9d343b'; for (const x of [158,242]) { ctx.beginPath(); ctx.moveTo(x-26,389); ctx.lineTo(x,370); ctx.lineTo(x+26,389); ctx.lineTo(x+18,423); ctx.lineTo(x-18,423); ctx.closePath(); ctx.fill(); ctx.strokeStyle='#f0c95c'; ctx.lineWidth=3; ctx.stroke(); }
  }
  ctx.restore();
}

function drawAvatarShoeDetails(ctx, appearance) {
  if (appearance.shoesStyle === 'none') return;
  const style = appearance.shoesStyle;
  const shoes = canvasColor(appearance.shoeColor);
  const accent = style === 'gold' || style === 'royal' ? '#ffd754' : style === 'neon' || style === 'techboots' ? '#69f4ff' : shadeColor(shoes, 0.48);
  const outline = '#201b22';
  ctx.strokeStyle = accent; ctx.fillStyle = accent; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const feet = [[126, 509, -1], [226, 509, 1]];
  for (const [x, y, side] of feet) {
    const bodyGradient = ctx.createLinearGradient(x, y - 34, x + 48, y + 8);
    bodyGradient.addColorStop(0, shadeColor(shoes, 0.28)); bodyGradient.addColorStop(0.5, shoes); bodyGradient.addColorStop(1, shadeColor(shoes, -0.3));
    const tall = ['boots','combat','hiking','greaves','techboots','royal'].includes(style);
    const high = tall || ['high','canvas','ninja'].includes(style);
    ctx.fillStyle = bodyGradient; ctx.strokeStyle = outline; ctx.lineWidth = 4;
    if (style !== 'sandals') {
      const shaftTop = tall ? y - 65 : high ? y - 45 : y - 31;
      ctx.beginPath(); ctx.moveTo(x + 8, shaftTop + 5); ctx.quadraticCurveTo(x + 24, shaftTop - 3, x + 41, shaftTop + 5); ctx.lineTo(x + 45, y - 7); ctx.lineTo(x + 5, y - 7); ctx.closePath(); ctx.fill(); ctx.stroke();

      // The source character is barefoot. Paint a slightly oversized closed-shoe
      // underlay first so no toes or ankle pixels can leak around the custom shoe.
      ctx.save();
      ctx.strokeStyle = outline;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x - 12, y - 12);
      ctx.quadraticCurveTo(x + 8, y - 31, x + 42, y - 24);
      ctx.quadraticCurveTo(x + 73 + side * 3, y - 10, x + 63, y + 14);
      ctx.quadraticCurveTo(x + 28, y + 19, x - 6, y + 13);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    if (style === 'sandals') {
      ctx.fillStyle = shadeColor(shoes, 0.16); ctx.strokeStyle = outline; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.ellipse(x + 24, y - 7, 38, 21, -0.04 * side, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = bodyGradient;
    }
    ctx.beginPath();
    if (style === 'running' || style === 'techboots') {
      ctx.moveTo(x - 10, y - 12); ctx.lineTo(x + 12, y - 29); ctx.lineTo(x + 44, y - 23); ctx.lineTo(x + 70 + side * 3, y - 5); ctx.lineTo(x + 58, y + 14); ctx.lineTo(x - 4, y + 13); ctx.closePath();
    } else if (style === 'leather') {
      ctx.moveTo(x - 9, y - 13); ctx.quadraticCurveTo(x + 20, y - 29, x + 55, y - 15); ctx.quadraticCurveTo(x + 73 + side * 2, y - 4, x + 57, y + 13); ctx.lineTo(x - 3, y + 13); ctx.closePath();
    } else if (style === 'sandals') {
      ctx.ellipse(x + 24, y + 1, 38, 12, -0.04 * side, 0, Math.PI * 2);
    } else {
      ctx.moveTo(x - 11, y - 12); ctx.quadraticCurveTo(x + 10, y - 29, x + 42, y - 22); ctx.quadraticCurveTo(x + 72 + side * 3, y - 8, x + 62, y + 14); ctx.lineTo(x - 4, y + 13); ctx.closePath();
    }
    ctx.fill(); ctx.stroke();
    ctx.strokeStyle = accent;
    if (style === 'sandals' || style === 'ninja') { ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x + 2, y - 18); ctx.lineTo(x + 45, y + 1); ctx.moveTo(x + 42, y - 19); ctx.lineTo(x + 7, y + 2); ctx.stroke(); }
    else { ctx.lineWidth = style === 'running' ? 8 : 5; ctx.beginPath(); ctx.moveTo(x - 1, y + 1); ctx.lineTo(x + 56, y + 1); ctx.stroke(); }
    if (style === 'sneakers') { ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x + 12, y - 15); ctx.lineTo(x + 37, y - 8); ctx.moveTo(x + 10, y - 8); ctx.lineTo(x + 34, y - 2); ctx.stroke(); }
    if (style === 'high' || style === 'canvas') { ctx.lineWidth = 4; for (let row = 0; row < 3; row += 1) { ctx.beginPath(); ctx.moveTo(x + 10, y - 31 + row * 9); ctx.lineTo(x + 35, y - 25 + row * 9); ctx.stroke(); } }
    if (style === 'high') { ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(x + 7, y - 38); ctx.lineTo(x + 39, y - 31); ctx.stroke(); }
    if (style === 'canvas') { ctx.fillStyle = '#f4f5ef'; ctx.beginPath(); ctx.ellipse(x + 43, y - 4, 11, 10, -0.2, 0, Math.PI * 2); ctx.fill(); }
    if (style === 'ninja') { ctx.strokeStyle = '#1b1e29'; ctx.lineWidth = 5; for (let wrap = 0; wrap < 3; wrap += 1) { ctx.beginPath(); ctx.moveTo(x + 7, y - 39 + wrap * 11); ctx.lineTo(x + 42, y - 24 + wrap * 11); ctx.stroke(); } }
    if (style === 'sandals') { ctx.fillStyle = '#d89a5d'; ctx.beginPath(); ctx.arc(x + 23, y - 10, 5, 0, Math.PI * 2); ctx.fill(); }
    if (style === 'running') { ctx.fillStyle = accent; ctx.beginPath(); ctx.moveTo(x + 9, y - 18); ctx.lineTo(x + 31, y - 26); ctx.lineTo(x + 22, y - 12); ctx.lineTo(x + 43, y - 15); ctx.lineTo(x + 20, y - 2); ctx.closePath(); ctx.fill(); }
    if (style === 'leather') { ctx.strokeStyle = '#f0d79e'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x + 8, y - 18); ctx.quadraticCurveTo(x + 27, y - 27, x + 43, y - 14); ctx.stroke(); }
    if (style === 'combat') { ctx.fillStyle = '#d7e1e9'; for (const [dx, dy] of [[13,-42],[30,-35],[16,-25],[35,-20]]) { ctx.beginPath(); ctx.arc(x + dx, y + dy, 3.5, 0, Math.PI * 2); ctx.fill(); } }
    if (style === 'hiking') { ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x + 8, y - 35); ctx.lineTo(x + 39, y - 14); ctx.moveTo(x + 39, y - 35); ctx.lineTo(x + 8, y - 14); ctx.stroke(); }
    if (style === 'greaves') { ctx.fillStyle = '#b8c8d6'; ctx.strokeStyle = '#eef7ff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(x + 8, y - 54); ctx.lineTo(x + 39, y - 48); ctx.lineTo(x + 34, y - 13); ctx.lineTo(x + 14, y - 13); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    if (style === 'royal') { ctx.fillStyle = accent; ctx.beginPath(); ctx.moveTo(x + 8, y - 20); ctx.lineTo(x + 17, y - 43); ctx.lineTo(x + 27, y - 25); ctx.lineTo(x + 38, y - 46); ctx.lineTo(x + 45, y - 19); ctx.closePath(); ctx.fill(); }
    if (style === 'techboots') { ctx.fillStyle = accent; ctx.shadowColor = accent; ctx.shadowBlur = 12; ctx.beginPath(); ctx.moveTo(x + 24, y - 36); ctx.lineTo(x + 36, y - 24); ctx.lineTo(x + 24, y - 12); ctx.lineTo(x + 12, y - 24); ctx.closePath(); ctx.fill(); ctx.shadowBlur = 0; }
    if (style === 'gold') { ctx.fillStyle = accent; ctx.shadowColor = accent; ctx.shadowBlur = 10; ctx.fillRect(x + 7, y - 12, 38, 7); ctx.shadowBlur = 0; }
    if (style === 'neon') { ctx.strokeStyle = accent; ctx.shadowColor = accent; ctx.shadowBlur = 14; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x + 3, y - 8); ctx.lineTo(x + 46, y - 8); ctx.stroke(); ctx.shadowBlur = 0; }
  }
}

function avatarMeleeAngle(attackPhase = -1) {
  if (attackPhase < 0) return 0.08;
  const smooth01 = (value) => {
    const clamped = THREE.MathUtils.clamp(value, 0, 1);
    return clamped * clamped * (3 - 2 * clamped);
  };
  if (attackPhase < 0.3) {
    return THREE.MathUtils.lerp(0.08, -1.16, smooth01(attackPhase / 0.3));
  }
  if (attackPhase < 0.62) {
    const strike = THREE.MathUtils.clamp((attackPhase - 0.3) / 0.32, 0, 1);
    return THREE.MathUtils.lerp(-1.16, 0.68, 1 - Math.pow(1 - strike, 3));
  }
  return THREE.MathUtils.lerp(0.68, 0.08, smooth01((attackPhase - 0.62) / 0.38));
}

function avatarRightArmJoints(upperArmAngle = 0, forearmAngle = upperArmAngle) {
  const shoulderX = 265;
  const shoulderY = 235;
  const elbowOffsetX = 29;
  const elbowOffsetY = 80;
  const elbow = {
    x: shoulderX + elbowOffsetX * Math.cos(upperArmAngle) - elbowOffsetY * Math.sin(upperArmAngle),
    y: shoulderY + elbowOffsetX * Math.sin(upperArmAngle) + elbowOffsetY * Math.cos(upperArmAngle)
  };
  const handOffsetX = -10;
  const handOffsetY = 77;
  return {
    elbow,
    hand: {
      x: elbow.x + handOffsetX * Math.cos(forearmAngle) - handOffsetY * Math.sin(forearmAngle),
      y: elbow.y + handOffsetX * Math.sin(forearmAngle) + handOffsetY * Math.cos(forearmAngle)
    }
  };
}

function avatarLeftArmJoints(upperArmAngle = 0, forearmAngle = upperArmAngle) {
  const shoulderX = 135;
  const shoulderY = 235;
  const elbowOffsetX = -29;
  const elbowOffsetY = 80;
  const elbow = {
    x: shoulderX + elbowOffsetX * Math.cos(upperArmAngle) - elbowOffsetY * Math.sin(upperArmAngle),
    y: shoulderY + elbowOffsetX * Math.sin(upperArmAngle) + elbowOffsetY * Math.cos(upperArmAngle)
  };
  const handOffsetX = 10;
  const handOffsetY = 77;
  return {
    elbow,
    hand: {
      x: elbow.x + handOffsetX * Math.cos(forearmAngle) - handOffsetY * Math.sin(forearmAngle),
      y: elbow.y + handOffsetX * Math.sin(forearmAngle) + handOffsetY * Math.cos(forearmAngle)
    }
  };
}

function drawAvatarWeapon(ctx, appearance, pose) {
  const weapon = appearance.weaponType;
  const attackPhase = pose.attackPhase ?? -1;
  const recoil = pose.recoil || 0;
  const outline = '#1e1b22';
  const handColor = appearance.outfitStyle === 'none'
    ? canvasColor(appearance.skinColor)
    : shadeColor(canvasColor(appearance.shirtColor), -0.58);
  const muzzleFlash = (x, y, size) => {
    ctx.save(); ctx.translate(x, y); ctx.fillStyle = '#fff3a0'; ctx.shadowColor = '#ff8a24'; ctx.shadowBlur = 18;
    ctx.beginPath(); for (let i = 0; i < 10; i += 1) { const r = i % 2 ? size * 0.36 : size; const a = i * Math.PI / 5; ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); } ctx.closePath(); ctx.fill(); ctx.restore();
  };
  if (!weapon) {
    const upperArmAngle = pose.rightArmAngle ?? avatarMeleeAngle(attackPhase) * 0.56;
    const forearmAngle = pose.rightForearmAngle ?? avatarMeleeAngle(attackPhase);
    const angle = forearmAngle + 0.08;
    const { hand } = avatarRightArmJoints(upperArmAngle, forearmAngle);
    const meleeStyle = appearance.meleeStyle || 'club';
    const meleeVisualScale = 1.86;
    const weaponLength = {
      club: 110, sword: 126, axe: 112, dagger: 76, hammer: 110, spear: 142,
      katana: 127, mace: 105, scythe: 135, staff: 130, cleaver: 100, rapier: 124,
      chickenLeg: 128, pickaxe: 126, shovel: 132, greatClub: 132
    }[meleeStyle] * meleeVisualScale || 110 * meleeVisualScale;
    if (attackPhase >= 0.18 && attackPhase <= 0.86) {
      const trailStrength = Math.sin(((attackPhase - 0.18) / 0.68) * Math.PI);
      ctx.save(); ctx.translate(hand.x, hand.y); ctx.lineCap = 'round'; ctx.shadowColor = '#ff7d2d'; ctx.shadowBlur = 24;
      ctx.strokeStyle = `rgba(255,157,56,${0.2 + trailStrength * 0.5})`; ctx.lineWidth = 28;
      ctx.beginPath(); ctx.arc(0, 0, weaponLength * 0.86, -Math.PI / 2 + angle - 0.86, -Math.PI / 2 + angle + 0.18); ctx.stroke();
      ctx.strokeStyle = `rgba(255,234,132,${0.28 + trailStrength * 0.62})`; ctx.lineWidth = 10;
      ctx.beginPath(); ctx.arc(0, 0, weaponLength * 0.96, -Math.PI / 2 + angle - 0.72, -Math.PI / 2 + angle + 0.1); ctx.stroke();
      ctx.strokeStyle = `rgba(255,255,238,${trailStrength * 0.86})`; ctx.lineWidth = 3.5;
      ctx.beginPath(); ctx.arc(0, 0, weaponLength, -Math.PI / 2 + angle - 0.58, -Math.PI / 2 + angle + 0.04); ctx.stroke();
      ctx.restore();
    }
    ctx.save(); ctx.translate(hand.x, hand.y); ctx.rotate(angle); ctx.scale(meleeVisualScale, meleeVisualScale); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    if (meleeStyle === 'sword') {
      const steel = ctx.createLinearGradient(-11, 0, 11, 0); steel.addColorStop(0, '#7891a8'); steel.addColorStop(0.48, '#f7fbff'); steel.addColorStop(1, '#7d93a8');
      ctx.fillStyle = '#79502f'; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-7, -28, 14, 36, 6); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#edc85d'; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(-22, -29); ctx.lineTo(22, -29); ctx.stroke();
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-8, -34); ctx.lineTo(-5, -112); ctx.lineTo(0, -127); ctx.lineTo(6, -112); ctx.lineTo(8, -34); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-2, -42); ctx.lineTo(0, -112); ctx.stroke();
      ctx.fillStyle = '#edc85d'; ctx.beginPath(); ctx.arc(0, 10, 7, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 3; ctx.stroke();
    } else if (meleeStyle === 'axe') {
      const wood = ctx.createLinearGradient(-7, 0, 8, 0); wood.addColorStop(0, '#60371f'); wood.addColorStop(0.5, '#bb7740'); wood.addColorStop(1, '#6d4026');
      ctx.fillStyle = wood; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-7, -109, 14, 117, 6); ctx.fill(); ctx.stroke();
      const steel = ctx.createLinearGradient(-36, -120, 35, -83); steel.addColorStop(0, '#e9f3f8'); steel.addColorStop(0.5, '#93a9b8'); steel.addColorStop(1, '#485d70');
      ctx.fillStyle = steel; ctx.beginPath(); ctx.moveTo(-4, -108); ctx.quadraticCurveTo(-30, -118, -42, -101); ctx.quadraticCurveTo(-32, -75, -5, -79); ctx.lineTo(6, -92); ctx.quadraticCurveTo(27, -89, 34, -105); ctx.quadraticCurveTo(21, -119, 4, -112); ctx.closePath(); ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.stroke();
      ctx.strokeStyle = '#f5fbff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-35, -99); ctx.quadraticCurveTo(-27, -80, -9, -84); ctx.stroke();
    } else if (meleeStyle === 'dagger') {
      ctx.fillStyle = '#71452b'; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-7, -25, 14, 34, 5); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#e1b954'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(-17, -26); ctx.lineTo(17, -26); ctx.stroke();
      const steel = ctx.createLinearGradient(-9, 0, 9, 0); steel.addColorStop(0, '#748b9d'); steel.addColorStop(0.5, '#ffffff'); steel.addColorStop(1, '#61788c');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-8, -30); ctx.lineTo(-4, -66); ctx.lineTo(0, -79); ctx.lineTo(7, -65); ctx.lineTo(8, -30); ctx.closePath(); ctx.fill(); ctx.stroke();
    } else if (meleeStyle === 'hammer') {
      ctx.strokeStyle = '#83502f'; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(0, 7); ctx.lineTo(0, -87); ctx.stroke();
      const metal = ctx.createLinearGradient(-42, -112, 42, -81); metal.addColorStop(0, '#556879'); metal.addColorStop(.5, '#dce8ef'); metal.addColorStop(1, '#526575');
      ctx.fillStyle = metal; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-40, -112, 80, 34, 9); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#f2c65f'; ctx.fillRect(-5, -108, 10, 27);
    } else if (meleeStyle === 'spear') {
      ctx.strokeStyle = '#8b5633'; ctx.lineWidth = 11; ctx.beginPath(); ctx.moveTo(0, 9); ctx.lineTo(0, -119); ctx.stroke();
      const steel = ctx.createLinearGradient(-13, -145, 13, -119); steel.addColorStop(0, '#8aa0b2'); steel.addColorStop(.5, '#ffffff'); steel.addColorStop(1, '#6f879b');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, -145); ctx.lineTo(14, -119); ctx.lineTo(0, -110); ctx.lineTo(-14, -119); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#d84c55'; ctx.beginPath(); ctx.moveTo(-5, -112); ctx.lineTo(-28, -91); ctx.lineTo(-4, -98); ctx.closePath(); ctx.fill();
    } else if (meleeStyle === 'katana') {
      ctx.fillStyle = '#472d26'; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(-6, -31, 12, 40, 5); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#e5b84f'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(-18, -31); ctx.lineTo(18, -31); ctx.stroke();
      const steel = ctx.createLinearGradient(-11, 0, 11, 0); steel.addColorStop(0, '#778d9d'); steel.addColorStop(.55, '#ffffff'); steel.addColorStop(1, '#667f91');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-6, -35); ctx.quadraticCurveTo(-14, -92, 7, -128); ctx.quadraticCurveTo(14, -91, 6, -36); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#b8d8e7'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(1, -41); ctx.quadraticCurveTo(3, -92, 8, -117); ctx.stroke();
    } else if (meleeStyle === 'mace') {
      ctx.strokeStyle = '#69422c'; ctx.lineWidth = 14; ctx.beginPath(); ctx.moveTo(0, 8); ctx.lineTo(0, -76); ctx.stroke();
      ctx.fillStyle = '#778b9b'; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, -95, 24, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#d7e3ea'; ctx.lineWidth = 6; for (let i = 0; i < 8; i += 1) { const a = i * Math.PI / 4; ctx.beginPath(); ctx.moveTo(Math.cos(a) * 17, -95 + Math.sin(a) * 17); ctx.lineTo(Math.cos(a) * 34, -95 + Math.sin(a) * 34); ctx.stroke(); }
    } else if (meleeStyle === 'scythe') {
      ctx.strokeStyle = '#56382e'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(0, 9); ctx.lineTo(0, -119); ctx.stroke();
      const steel = ctx.createLinearGradient(-56, -144, 23, -104); steel.addColorStop(0, '#f2f8fb'); steel.addColorStop(.55, '#94a8b6'); steel.addColorStop(1, '#526776');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, -119); ctx.quadraticCurveTo(-42, -147, -65, -121); ctx.quadraticCurveTo(-38, -126, -6, -98); ctx.closePath(); ctx.fill(); ctx.stroke();
    } else if (meleeStyle === 'staff') {
      ctx.strokeStyle = '#744a32'; ctx.lineWidth = 13; ctx.beginPath(); ctx.moveTo(0, 9); ctx.lineTo(0, -113); ctx.stroke();
      ctx.strokeStyle = '#c89a56'; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(0, -117, 22, Math.PI * .05, Math.PI * 1.95); ctx.stroke();
      ctx.fillStyle = '#60e6ff'; ctx.shadowColor = '#42bfff'; ctx.shadowBlur = 15; ctx.beginPath(); ctx.moveTo(0, -146); ctx.lineTo(15, -122); ctx.lineTo(0, -105); ctx.lineTo(-15, -122); ctx.closePath(); ctx.fill(); ctx.shadowBlur = 0;
    } else if (meleeStyle === 'cleaver') {
      ctx.fillStyle = '#66412c'; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-7, -31, 14, 40, 5); ctx.fill(); ctx.stroke();
      const steel = ctx.createLinearGradient(-20, -101, 29, -29); steel.addColorStop(0, '#dce7ed'); steel.addColorStop(.55, '#8399aa'); steel.addColorStop(1, '#536979');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-10, -35); ctx.lineTo(-15, -101); ctx.lineTo(27, -92); ctx.lineTo(22, -38); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#26333e'; ctx.beginPath(); ctx.arc(13, -83, 5, 0, Math.PI * 2); ctx.fill();
    } else if (meleeStyle === 'chickenLeg') {
      const bone = ctx.createLinearGradient(-10, 0, 12, 0); bone.addColorStop(0, '#b99b70'); bone.addColorStop(.42, '#fff0c5'); bone.addColorStop(1, '#c9ae7c');
      ctx.strokeStyle = outline; ctx.lineWidth = 19; ctx.beginPath(); ctx.moveTo(0, 8); ctx.quadraticCurveTo(2, -27, -4, -53); ctx.stroke();
      ctx.strokeStyle = bone; ctx.lineWidth = 12; ctx.stroke();
      ctx.fillStyle = bone; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(-7, 8, 8, 0, Math.PI * 2); ctx.arc(7, 8, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      const roast = ctx.createRadialGradient(-12, -99, 7, 0, -87, 48); roast.addColorStop(0, '#ffbc5f'); roast.addColorStop(.35, '#e77a38'); roast.addColorStop(.78, '#ad462d'); roast.addColorStop(1, '#713125');
      ctx.fillStyle = roast; ctx.strokeStyle = outline; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(-5, -50); ctx.bezierCurveTo(-35, -61, -46, -91, -32, -116); ctx.bezierCurveTo(-20, -137, 5, -144, 24, -130); ctx.bezierCurveTo(48, -113, 50, -78, 27, -59); ctx.quadraticCurveTo(12, -47, -5, -50); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#ffc76b'; ctx.beginPath(); ctx.ellipse(-11, -108, 13, 8, -.45, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#8c3828'; ctx.lineWidth = 4; ctx.beginPath(); ctx.arc(10, -91, 22, -.6, .7); ctx.stroke();
    } else if (meleeStyle === 'pickaxe') {
      const wood = ctx.createLinearGradient(-9, 0, 10, 0); wood.addColorStop(0, '#59331f'); wood.addColorStop(.47, '#bc7540'); wood.addColorStop(1, '#6d3d24');
      ctx.fillStyle = wood; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-8, -114, 16, 123, 7); ctx.fill(); ctx.stroke();
      const steel = ctx.createLinearGradient(-57, -132, 55, -103); steel.addColorStop(0, '#526777'); steel.addColorStop(.42, '#e9f4f8'); steel.addColorStop(1, '#607586');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-4, -121); ctx.bezierCurveTo(-27, -133, -48, -132, -61, -119); ctx.lineTo(-69, -108); ctx.quadraticCurveTo(-38, -120, -6, -105); ctx.lineTo(6, -105); ctx.quadraticCurveTo(35, -121, 65, -110); ctx.lineTo(57, -121); ctx.bezierCurveTo(37, -136, 17, -133, 4, -121); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#f5fbff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-52, -118); ctx.quadraticCurveTo(-29, -126, -9, -115); ctx.moveTo(11, -116); ctx.quadraticCurveTo(31, -127, 51, -119); ctx.stroke();
      ctx.strokeStyle = '#4b2c20'; ctx.lineWidth = 4; for (const y of [-18,-31,-44]) { ctx.beginPath(); ctx.moveTo(-7,y); ctx.lineTo(7,y-3); ctx.stroke(); }
    } else if (meleeStyle === 'shovel') {
      const shaft = ctx.createLinearGradient(-8, 0, 9, 0); shaft.addColorStop(0, '#5b351f'); shaft.addColorStop(.5, '#bd7c45'); shaft.addColorStop(1, '#704126');
      ctx.fillStyle = shaft; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.roundRect(-7, -105, 14, 114, 6); ctx.fill(); ctx.stroke();
      const steel = ctx.createLinearGradient(-31, -147, 32, -99); steel.addColorStop(0, '#eef7fa'); steel.addColorStop(.48, '#93a8b6'); steel.addColorStop(1, '#4c6171');
      ctx.fillStyle = steel; ctx.strokeStyle = outline; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-29, -112); ctx.quadraticCurveTo(-31, -139, 0, -151); ctx.quadraticCurveTo(31, -139, 29, -112); ctx.quadraticCurveTo(18, -95, 0, -92); ctx.quadraticCurveTo(-18, -95, -29, -112); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#f4fbff'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-15,-117); ctx.quadraticCurveTo(0,-137,15,-117); ctx.stroke();
      ctx.strokeStyle = '#6e4328'; ctx.lineWidth = 12; ctx.beginPath(); ctx.arc(0, 1, 15, Math.PI * .12, Math.PI * .88); ctx.stroke();
    } else if (meleeStyle === 'greatClub') {
      const wood = ctx.createLinearGradient(-26, 0, 28, 0); wood.addColorStop(0, '#512d1e'); wood.addColorStop(.25, '#89502d'); wood.addColorStop(.55, '#c07840'); wood.addColorStop(1, '#603621');
      ctx.fillStyle = outline; ctx.beginPath(); ctx.moveTo(-14, 8); ctx.lineTo(-20, -48); ctx.quadraticCurveTo(-39, -74, -35, -111); ctx.quadraticCurveTo(-30, -140, -4, -151); ctx.quadraticCurveTo(28, -147, 39, -119); ctx.quadraticCurveTo(45, -85, 22, -51); ctx.lineTo(14, 8); ctx.closePath(); ctx.fill();
      ctx.fillStyle = wood; ctx.beginPath(); ctx.moveTo(-9, 4); ctx.lineTo(-14, -51); ctx.quadraticCurveTo(-31, -77, -28, -108); ctx.quadraticCurveTo(-24, -132, -2, -143); ctx.quadraticCurveTo(23, -138, 31, -116); ctx.quadraticCurveTo(36, -86, 15, -54); ctx.lineTo(9, 4); ctx.closePath(); ctx.fill();
      ctx.fillStyle='#7b4528'; for (const [x,y,r] of [[-18,-91,8],[17,-120,7],[12,-70,6]]) { ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill(); }
      ctx.strokeStyle = '#e0a467'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(-15,-125); ctx.quadraticCurveTo(0,-139,15,-130); ctx.stroke();
      ctx.strokeStyle='#b9c8d2';ctx.lineWidth=7;for(const y of [-62,-76]){ctx.beginPath();ctx.moveTo(-23,y);ctx.lineTo(25,y-4);ctx.stroke();}
    } else if (meleeStyle === 'rapier') {
      ctx.fillStyle = '#51402f'; ctx.strokeStyle = outline; ctx.lineWidth = 4; ctx.beginPath(); ctx.roundRect(-5, -27, 10, 37, 4); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#e7c85d'; ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(0, -27, 20, Math.PI * .05, Math.PI * 1.95); ctx.stroke();
      ctx.strokeStyle = '#e8f4fa'; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(0, -31); ctx.lineTo(0, -120); ctx.stroke();
      ctx.strokeStyle = '#6f8595'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, -31); ctx.lineTo(0, -120); ctx.stroke();
    } else {
      const wood = ctx.createLinearGradient(-12, 0, 13, 0); wood.addColorStop(0, '#64371f'); wood.addColorStop(0.5, '#c27b42'); wood.addColorStop(1, '#754124');
      ctx.beginPath(); ctx.moveTo(-8, 5); ctx.lineTo(-10, -54); ctx.quadraticCurveTo(-28, -79, -20, -105); ctx.quadraticCurveTo(-8, -123, 9, -119); ctx.quadraticCurveTo(25, -104, 20, -82); ctx.quadraticCurveTo(17, -67, 10, -54); ctx.lineTo(8, 5); ctx.closePath();
      ctx.fillStyle = outline; ctx.fill();
      ctx.beginPath(); ctx.moveTo(-4, 1); ctx.lineTo(-6, -56); ctx.quadraticCurveTo(-20, -80, -13, -101); ctx.quadraticCurveTo(-4, -114, 8, -111); ctx.quadraticCurveTo(19, -100, 14, -82); ctx.quadraticCurveTo(12, -68, 6, -56); ctx.lineTo(4, 1); ctx.closePath();
      ctx.fillStyle = wood; ctx.fill();
      ctx.strokeStyle = '#e5ad70'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-6, -92); ctx.quadraticCurveTo(0, -104, 8, -95); ctx.stroke();
      ctx.strokeStyle = '#4d2d20'; ctx.lineWidth = 4; for (const y of [-18, -31, -44]) { ctx.beginPath(); ctx.moveTo(-7, y); ctx.lineTo(7, y - 4); ctx.stroke(); }
    }
    ctx.fillStyle = handColor; ctx.strokeStyle = outline; ctx.lineWidth = 3.2; ctx.beginPath(); ctx.arc(0, 0, 10.3, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = 'rgba(102,57,39,.75)'; ctx.lineWidth = 2; for (const y of [-5, 0, 5]) { ctx.beginPath(); ctx.moveTo(-7, y); ctx.quadraticCurveTo(0, y + 3, 8, y); ctx.stroke(); }
    ctx.restore(); return;
  }
  ctx.save();
  const gunAngle = weapon === 'rocket' ? -0.17 : -0.1;
  ctx.translate(170 - recoil * 8, 325 + recoil * 2); ctx.rotate(gunAngle); ctx.scale(1.08, 1.08);
  ctx.lineJoin = 'round';
  if (weapon === 'smg') {
    ctx.fillStyle = '#253242'; ctx.strokeStyle = outline; ctx.lineWidth = 7; ctx.beginPath(); ctx.roundRect(-55, -19, 166, 42, 9); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#49d8ac'; ctx.fillRect(-16, -15, 80, 21); ctx.fillStyle = '#151e2b'; ctx.fillRect(105, -8, 72, 13); ctx.fillRect(25, 20, 25, 48); ctx.fillStyle = '#72f4cf'; ctx.fillRect(-7, -11, 62, 4);
    if (recoil > 0.18) muzzleFlash(184, -2, 25);
  } else if (weapon === 'sniper') {
    ctx.fillStyle = '#476fae'; ctx.strokeStyle = outline; ctx.lineWidth = 7; ctx.beginPath(); ctx.roundRect(-63, -13, 205, 29, 7); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#182437'; ctx.fillRect(126, -7, 105, 12); ctx.fillRect(22, 14, 25, 52); ctx.beginPath(); ctx.ellipse(47, -18, 35, 13, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#82b8ff'; ctx.fillRect(-15, -8, 105, 5); if (recoil > 0.18) muzzleFlash(238, -1, 32);
  } else if (weapon === 'rocket') {
    const tube = ctx.createLinearGradient(0, -28, 0, 28); tube.addColorStop(0, '#ffb34f'); tube.addColorStop(0.46, '#e95f3f'); tube.addColorStop(1, '#7a2e2d');
    ctx.strokeStyle = outline; ctx.lineWidth = 47; ctx.beginPath(); ctx.moveTo(-55, 0); ctx.lineTo(154, 0); ctx.stroke(); ctx.strokeStyle = tube; ctx.lineWidth = 34; ctx.stroke();
    ctx.fillStyle = '#263848'; ctx.fillRect(24, 15, 28, 54); ctx.fillStyle = '#ffd06a'; ctx.beginPath(); ctx.arc(161, 0, 22, 0, Math.PI * 2); ctx.fill();
    if (recoil > 0.18) muzzleFlash(189, 0, 38);
  }
  ctx.fillStyle = handColor; ctx.strokeStyle = outline; ctx.lineWidth = 5;
  for (const [x, y] of [[6,12],[58,-7]]) { ctx.beginPath(); ctx.arc(x, y, 13, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
  ctx.restore();
}

function buildGeneratedAvatarBase(appearance, resolution) {
  const baseCanvas = document.createElement('canvas');
  baseCanvas.width = Math.round(400 * resolution);
  baseCanvas.height = Math.round(560 * resolution);
  const base = baseCanvas.getContext('2d');
  base.scale(resolution, resolution);
  base.imageSmoothingEnabled = true;
  base.imageSmoothingQuality = 'high';
  drawAvatarHairBack(base, appearance);
  const variant = generatedAvatarVariant(appearance);
  const [sx, sy, sw, sh] = fighterLineupCrops[variant];
  const scale = Math.min(376 / sw, 530 / sh);
  const drawWidth = sw * scale;
  const drawHeight = sh * scale;
  const bodyLayerCanvas = document.createElement('canvas');
  bodyLayerCanvas.width = baseCanvas.width;
  bodyLayerCanvas.height = baseCanvas.height;
  const bodyLayer = bodyLayerCanvas.getContext('2d');
  bodyLayer.scale(resolution, resolution);
  bodyLayer.imageSmoothingEnabled = true;
  bodyLayer.imageSmoothingQuality = 'high';
  bodyLayer.drawImage(fighterLineupImage, sx, sy, sw, sh, (400 - drawWidth) / 2, 12 + (530 - drawHeight), drawWidth, drawHeight);
  const recoloredHairPixels = recolorGeneratedHair(bodyLayer, appearance.hairColor, resolution);
  base.drawImage(bodyLayerCanvas, 0, 0, baseCanvas.width, baseCanvas.height, 0, 0, 400, 560);
  baseCanvas.__hairRecolorCount = recoloredHairPixels;
  const clothingCanvas = document.createElement('canvas');
  clothingCanvas.width = baseCanvas.width;
  clothingCanvas.height = baseCanvas.height;
  const clothing = clothingCanvas.getContext('2d');
  clothing.scale(resolution, resolution);
  clothing.imageSmoothingEnabled = true;
  clothing.imageSmoothingQuality = 'high';
  drawAvatarOutfitDetails(clothing, appearance);
  drawAvatarPantsDetails(clothing, appearance);
  // Keep the garment silhouettes outside the original bare-body alpha. This
  // gives shoulders, sleeves, hems and trouser legs visible thickness instead
  // of making every outfit look like a flat recolored skin texture.
  base.save();
  base.globalAlpha = 1;
  base.drawImage(clothingCanvas, 0, 0, baseCanvas.width, baseCanvas.height, 0, 0, 400, 560);
  base.restore();
  drawAvatarShoeDetails(base, appearance);
  drawAvatarHairFront(base, appearance);
  return baseCanvas;
}

function drawGeneratedAvatar(appearance, pose = {}, resolution = PLAYER_AVATAR_RESOLUTION, preparedBaseCanvas = null) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(400 * resolution);
  canvas.height = Math.round(560 * resolution);
  const baseCanvas = preparedBaseCanvas || buildGeneratedAvatarBase(appearance, resolution);
  const ctx = canvas.getContext('2d');
  ctx.scale(resolution, resolution);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  let bodyShiftX = 0;
  let attackBrace = 0;
  if (pose.mode === 'attack' && pose.attackPhase >= 0) {
    const phase = pose.attackPhase;
    const smooth01 = (value) => {
      const clamped = THREE.MathUtils.clamp(value, 0, 1);
      return clamped * clamped * (3 - 2 * clamped);
    };
    bodyShiftX = phase < 0.3
      ? THREE.MathUtils.lerp(0, -17, smooth01(phase / 0.3))
      : phase < 0.62
        ? THREE.MathUtils.lerp(-17, 23, 1 - Math.pow(1 - (phase - 0.3) / 0.32, 3))
        : THREE.MathUtils.lerp(23, 0, smooth01((phase - 0.62) / 0.38));
    attackBrace = Math.sin(Math.min(1, phase) * Math.PI) * 0.13;
  }
  const walkPhase = pose.walkPhase || 0;
  const walkAmount = pose.mode === 'walk' ? Math.sin(walkPhase * Math.PI * 2) : 0;
  const walkBob = pose.mode === 'walk' ? Math.abs(Math.sin(walkPhase * Math.PI * 2)) * 2.2 : 0;
  const attackDrop = pose.mode === 'attack' && pose.attackPhase >= 0 ? Math.sin(pose.attackPhase * Math.PI) * 2.6 : 0;
  ctx.translate(bodyShiftX + walkAmount * 1.8, walkBob + attackDrop);
  ctx.translate(200, 280);
  ctx.rotate(bodyShiftX * 0.0024 + walkAmount * 0.012);
  ctx.translate(-200, -280);
  const coreCanvas = document.createElement('canvas');
  coreCanvas.width = canvas.width; coreCanvas.height = canvas.height;
  const core = coreCanvas.getContext('2d');
  core.drawImage(baseCanvas, 0, 0);
  core.save(); core.scale(resolution, resolution); core.globalCompositeOperation = 'destination-out'; core.lineCap = 'round'; core.lineJoin = 'round';
  const eraseLimb = (points, width) => { core.lineWidth = width; core.beginPath(); core.moveTo(points[0][0], points[0][1]); points.slice(1).forEach(([x, y]) => core.lineTo(x, y)); core.stroke(); };
  eraseLimb([[135, 235], [106, 315], [96, 392]], 70);
  eraseLimb([[265, 235], [294, 315], [304, 392]], 70);
  if (Math.abs(walkAmount) > 0.04 || attackBrace > 0) {
    eraseLimb([[165, 400], [159, 458], [143, 520]], 72);
    eraseLimb([[235, 400], [241, 458], [257, 520]], 72);
  }
  core.restore();

  const drawPart = (sxPart, syPart, swPart, shPart, pivotX, pivotY, angle) => {
    ctx.save(); ctx.translate(pivotX, pivotY); ctx.rotate(angle);
    ctx.drawImage(baseCanvas, sxPart * resolution, syPart * resolution, swPart * resolution, shPart * resolution, sxPart - pivotX, syPart - pivotY, swPart, shPart);
    ctx.restore();
  };
  const drawPartAt = (sxPart, syPart, swPart, shPart, sourcePivotX, sourcePivotY, destPivotX, destPivotY, angle) => {
    ctx.save(); ctx.translate(destPivotX, destPivotY); ctx.rotate(angle);
    ctx.drawImage(baseCanvas, sxPart * resolution, syPart * resolution, swPart * resolution, shPart * resolution, sxPart - sourcePivotX, syPart - sourcePivotY, swPart, shPart);
    ctx.restore();
  };
  if (Math.abs(walkAmount) > 0.04 || attackBrace > 0) {
    drawPart(96, 378, 122, 178, 165, 400, walkAmount * 0.15 - attackBrace);
    drawPart(182, 378, 122, 178, 235, 400, -walkAmount * 0.15 + attackBrace);
  }
  let leftArmAngle = pose.mode === 'walk' ? walkAmount * 0.12 : 0;
  let leftForearmAngle = leftArmAngle;
  let rightArmAngle = pose.mode === 'walk' ? -walkAmount * 0.1 : 0;
  let rightForearmAngle = pose.mode === 'walk' ? -walkAmount * 0.04 : 0;
  if (pose.mode === 'attack' && !appearance.weaponType) {
    const meleeAngle = avatarMeleeAngle(pose.attackPhase);
    rightArmAngle = meleeAngle * 0.5;
    rightForearmAngle = meleeAngle * 0.92;
    leftArmAngle = -meleeAngle * 0.22;
  } else if (appearance.weaponType) {
    leftArmAngle = -0.55;
    leftForearmAngle = -1.45;
    rightArmAngle = 0.55 - (pose.recoil || 0) * 0.04;
    rightForearmAngle = 1.45 - (pose.recoil || 0) * 0.06;
  }
  if (appearance.weaponType) {
    const leftJoints = avatarLeftArmJoints(leftArmAngle, leftForearmAngle);
    const rightJoints = avatarRightArmJoints(rightArmAngle, rightForearmAngle);
    drawPartAt(72, 205, 118, 145, 135, 235, 135, 235, leftArmAngle);
    drawPartAt(47, 286, 100, 139, 106, 315, leftJoints.elbow.x, leftJoints.elbow.y, leftForearmAngle);
    drawPartAt(210, 205, 118, 145, 265, 235, 265, 235, rightArmAngle);
    drawPartAt(253, 286, 100, 139, 294, 315, rightJoints.elbow.x, rightJoints.elbow.y, rightForearmAngle);
  } else {
    drawPart(54, 207, 137, 215, 135, 235, leftArmAngle);
    const { elbow } = avatarRightArmJoints(rightArmAngle, rightForearmAngle);
    drawPartAt(210, 205, 118, 145, 265, 235, 265, 235, rightArmAngle);
    drawPartAt(253, 286, 100, 139, 294, 315, elbow.x, elbow.y, rightForearmAngle);
  }
  ctx.drawImage(coreCanvas, 0, 0, canvas.width, canvas.height, 0, 0, 400, 560);
  drawAvatarWeapon(ctx, appearance, { ...pose, leftArmAngle, leftForearmAngle, rightArmAngle, rightForearmAngle });
  return canvas;
}

function buildAvatarDirectionOverlay(appearance, facing, resolution, preparedBaseCanvas = null) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(400 * resolution);
  canvas.height = Math.round(560 * resolution);
  const ctx = canvas.getContext('2d');
  ctx.scale(resolution, resolution);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  const skin = canvasColor(appearance.skinColor);
  const hair = canvasColor(appearance.hairColor);
  const shirt = canvasColor(appearance.shirtColor);
  const outline = '#24181a';
  const clothed = appearance.outfitStyle !== 'none';
  const torsoColor = clothed ? shirt : skin;
  const torsoLight = shadeColor(torsoColor, 0.28);
  const torsoDark = shadeColor(torsoColor, -0.3);
  const torsoGradient = ctx.createLinearGradient(153, 221, 247, 357);
  torsoGradient.addColorStop(0, torsoLight);
  torsoGradient.addColorStop(0.55, torsoColor);
  torsoGradient.addColorStop(1, torsoDark);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (facing === 'back') {
    const backHair = ctx.createLinearGradient(145, 67, 255, 208);
    backHair.addColorStop(0, shadeColor(hair, 0.24));
    backHair.addColorStop(0.5, hair);
    backHair.addColorStop(1, shadeColor(hair, -0.34));
    ctx.fillStyle = backHair; ctx.strokeStyle = outline; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.ellipse(200, 137, 82, 94, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.strokeStyle = shadeColor(hair, 0.3); ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(159, 92); ctx.quadraticCurveTo(181, 68, 197, 94); ctx.moveTo(205, 78); ctx.quadraticCurveTo(229, 72, 242, 101); ctx.stroke();
    ctx.fillStyle = backHair;
    for (const [x, y, angle] of [[151,190,-.25],[173,207,-.12],[200,211,0],[227,207,.12],[249,190,.25]]) {
      ctx.save(); ctx.translate(x, y); ctx.rotate(angle); ctx.beginPath(); ctx.moveTo(-13, -18); ctx.lineTo(0, 18); ctx.lineTo(14, -17); ctx.closePath(); ctx.fill(); ctx.strokeStyle = outline; ctx.lineWidth = 3; ctx.stroke(); ctx.restore();
    }
    ctx.fillStyle = torsoGradient; ctx.strokeStyle = outline; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(158, 226); ctx.quadraticCurveTo(200, 211, 242, 226); ctx.quadraticCurveTo(253, 279, 241, 353); ctx.quadraticCurveTo(200, 366, 159, 353); ctx.quadraticCurveTo(147, 279, 158, 226); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.globalAlpha = 0.5; ctx.strokeStyle = clothed ? torsoLight : torsoDark; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(164, 251); ctx.quadraticCurveTo(200, 268, 236, 251); ctx.moveTo(200, 264); ctx.lineTo(200, 343); ctx.stroke(); ctx.globalAlpha = 1;
    if (['armor', 'samurai', 'ceremonial'].includes(appearance.outfitStyle)) {
      ctx.strokeStyle = '#dcebf5'; ctx.lineWidth = 5; for (const y of [269, 296, 323]) { ctx.beginPath(); ctx.moveTo(169, y); ctx.lineTo(231, y); ctx.stroke(); }
    }
    drawAvatarHairFront(ctx, appearance);
    return canvas;
  }

  const sideSign = facing === 'sideLeft' ? -1 : 1;
  const profileX = (offset) => 200 + sideSign * offset;
  const faceGradient = ctx.createRadialGradient(profileX(25), 118, 8, profileX(-2), 151, 118);
  faceGradient.addColorStop(0, shadeColor(skin, 0.22));
  faceGradient.addColorStop(0.48, skin);
  faceGradient.addColorStop(1, shadeColor(skin, -0.24));
  ctx.fillStyle = faceGradient; ctx.strokeStyle = outline; ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(profileX(-43), 76);
  ctx.bezierCurveTo(profileX(-13), 49, profileX(24), 60, profileX(36), 92);
  ctx.bezierCurveTo(profileX(45), 112, profileX(46), 126, profileX(57), 143);
  ctx.bezierCurveTo(profileX(66), 153, profileX(88), 155, profileX(94), 163);
  ctx.bezierCurveTo(profileX(89), 171, profileX(76), 174, profileX(67), 176);
  ctx.bezierCurveTo(profileX(63), 183, profileX(74), 188, profileX(71), 195);
  ctx.bezierCurveTo(profileX(67), 204, profileX(56), 205, profileX(51), 212);
  ctx.bezierCurveTo(profileX(31), 231, profileX(-10), 235, profileX(-40), 215);
  ctx.bezierCurveTo(profileX(-65), 197, profileX(-70), 158, profileX(-63), 119);
  ctx.bezierCurveTo(profileX(-60), 98, profileX(-55), 85, profileX(-43), 76);
  ctx.closePath(); ctx.fill(); ctx.stroke();
  // Rear ear and inner cartilage reinforce the side-on silhouette.
  ctx.fillStyle = shadeColor(skin, -0.08); ctx.strokeStyle = outline; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.ellipse(profileX(-53), 159, 17, 23, sideSign * 0.08, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = shadeColor(skin, -0.3); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(profileX(-51), 160, 9, -0.6 * Math.PI, 0.55 * Math.PI, sideSign < 0); ctx.stroke();
  const sideHair = ctx.createLinearGradient(154, 68, 246, 181);
  sideHair.addColorStop(0, shadeColor(hair, 0.26)); sideHair.addColorStop(.52, hair); sideHair.addColorStop(1, shadeColor(hair, -0.34));
  ctx.fillStyle = sideHair; ctx.strokeStyle = outline; ctx.lineWidth = 4;
  ctx.beginPath();
  if (sideSign > 0) {
    ctx.moveTo(143, 145); ctx.bezierCurveTo(137, 92, 163, 58, 203, 57); ctx.quadraticCurveTo(242, 63, 255, 105); ctx.lineTo(225, 91); ctx.lineTo(213, 121); ctx.lineTo(195, 103); ctx.lineTo(180, 130); ctx.lineTo(162, 116); ctx.lineTo(157, 178); ctx.closePath();
  } else {
    ctx.moveTo(257, 145); ctx.bezierCurveTo(263, 92, 237, 58, 197, 57); ctx.quadraticCurveTo(158, 63, 145, 105); ctx.lineTo(175, 91); ctx.lineTo(187, 121); ctx.lineTo(205, 103); ctx.lineTo(220, 130); ctx.lineTo(238, 116); ctx.lineTo(243, 178); ctx.closePath();
  }
  ctx.fill(); ctx.stroke();
  const eyeX = profileX(31);
  if (preparedBaseCanvas) {
    // Reuse the matching eye, eyebrow and skin rendering from this exact
    // character's front portrait. Only one half is projected into the side
    // face, so the profile remains recognisably the same person.
    ctx.save();
    ctx.beginPath(); ctx.ellipse(200, 151, 67, 77, sideSign * -0.04, 0, Math.PI * 2); ctx.clip();
    if (sideSign < 0) { ctx.translate(400, 0); ctx.scale(-1, 1); }
    ctx.globalAlpha = 0.96;
    ctx.drawImage(
      preparedBaseCanvas,
      Math.round(174 * resolution), Math.round(108 * resolution), Math.round(112 * resolution), Math.round(84 * resolution),
      164, 110, 112, 84
    );
    ctx.restore();
    ctx.strokeStyle = shadeColor(hair, -0.48); ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(profileX(15), 130); ctx.quadraticCurveTo(profileX(33), 121, profileX(48), 132); ctx.stroke();
  } else {
    // Fallback profile eye used while the illustrated source is still loading.
    ctx.strokeStyle = shadeColor(hair, -0.48); ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(profileX(15), 130); ctx.quadraticCurveTo(profileX(33), 120, profileX(47), 132); ctx.stroke();
    ctx.fillStyle = '#f8fbff'; ctx.strokeStyle = outline; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.ellipse(eyeX, 151, 12, 18, sideSign * -0.09, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#43b7f3'; ctx.beginPath(); ctx.ellipse(profileX(35), 153, 7, 12, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#101d31'; ctx.beginPath(); ctx.ellipse(profileX(38), 156, 3.8, 7.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(profileX(40), 151, 2.6, 0, Math.PI * 2); ctx.fill();
  }
  // Strong bridge highlight, defined nostril, lips and jaw give the face depth.
  ctx.strokeStyle = 'rgba(255,238,210,.72)'; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(profileX(43), 116); ctx.quadraticCurveTo(profileX(57), 140, profileX(84), 159); ctx.stroke();
  ctx.strokeStyle = shadeColor(skin, -0.34); ctx.lineWidth = 3.5;
  ctx.beginPath(); ctx.moveTo(profileX(68), 171); ctx.quadraticCurveTo(profileX(79), 168, profileX(85), 171); ctx.stroke();
  ctx.fillStyle = 'rgba(232,112,112,.2)'; ctx.beginPath(); ctx.ellipse(profileX(30), 177, 17, 9, 0, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#9e4f56'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(profileX(62), 185); ctx.quadraticCurveTo(profileX(72), 189, profileX(63), 194); ctx.stroke();
  ctx.strokeStyle = shadeColor(skin, -0.32); ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(profileX(45), 207); ctx.quadraticCurveTo(profileX(22), 225, profileX(-7), 224); ctx.stroke();
  // Profile-only modelling: a clean upper eyelid, cheek plane and chin light
  // preserve the handsome front portrait's sharp, dimensional Q-style face.
  ctx.strokeStyle = 'rgba(48,31,34,.72)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(profileX(22), 149); ctx.quadraticCurveTo(profileX(36), 142, profileX(48), 151); ctx.stroke();
  ctx.fillStyle = 'rgba(255,224,199,.2)'; ctx.beginPath(); ctx.ellipse(profileX(28), 179, 23, 14, sideSign * -.12, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(255,241,220,.62)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(profileX(49), 207); ctx.quadraticCurveTo(profileX(28), 224, profileX(2), 225); ctx.stroke();
  ctx.fillStyle = torsoGradient; ctx.strokeStyle = outline; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(167, 227); ctx.quadraticCurveTo(200, 216, 233, 227); ctx.lineTo(239, 350); ctx.quadraticCurveTo(200, 360, 161, 350); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.globalAlpha = 0.55; ctx.strokeStyle = torsoLight; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(174, 249); ctx.quadraticCurveTo(200, 264, 226, 249); ctx.stroke(); ctx.globalAlpha = 1;
  drawAvatarHairFront(ctx, appearance);
  return canvas;
}

function updateNumberSprite(sprite, value) {
  if (sprite.userData.value === value) return;
  sprite.userData.value = value;
  const { canvas, texture, color } = sprite.userData;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(5, 10, 20, .75)';
  ctx.beginPath();
  ctx.roundRect(22, 13, 212, 94, 30);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const text = String(value);
  let fontSize = 66;
  do {
    ctx.font = `900 ${fontSize}px Arial`;
    fontSize -= 2;
  } while (fontSize > 24 && ctx.measureText(text).width > 202);
  ctx.fillText(text, 128, 62);
  texture.needsUpdate = true;
}

const pendingNumberLabelUpdates = new Map();
function scheduleNumberLabelUpdate(fighter) {
  if (fighter.isPlayer || !running) {
    updateNumberSprite(fighter.label, fighter.number);
    return;
  }
  // A rocket can change several fighters in one simulation step. Uploading
  // every canvas label in that same frame creates a visible hitch, so keep the
  // newest value per fighter and spread only the texture uploads across frames.
  pendingNumberLabelUpdates.set(fighter, fighter.number);
}

function flushNumberLabelUpdates(maximumUpdates = 4) {
  let processed = 0;
  for (const [fighter, value] of pendingNumberLabelUpdates) {
    pendingNumberLabelUpdates.delete(fighter);
    updateNumberSprite(fighter.label, value);
    processed += 1;
    if (processed >= maximumUpdates) break;
  }
}

function angleDelta(from, to) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function arenaWallLocalPosition(position, wall) {
  const offsetX = position.x - wall.x;
  const offsetZ = position.z - wall.z;
  const cosine = Math.cos(wall.yaw);
  const sine = Math.sin(wall.yaw);
  return new THREE.Vector2(offsetX * cosine - offsetZ * sine, offsetX * sine + offsetZ * cosine);
}

function positionOverlapsArenaWall(position, radius = 0.7) {
  return arenaWalls.some((wall) => {
    const local = arenaWallLocalPosition(position, wall);
    return Math.abs(local.x) < wall.width / 2 + radius && Math.abs(local.y) < wall.depth / 2 + radius;
  });
}

function resolveArenaWallCollisions(position, radius = 0.7) {
  let collided = false;
  for (let pass = 0; pass < 2; pass += 1) {
    for (const wall of arenaWalls) {
      const local = arenaWallLocalPosition(position, wall);
      const halfWidth = wall.width / 2;
      const halfDepth = wall.depth / 2;
      const closestX = THREE.MathUtils.clamp(local.x, -halfWidth, halfWidth);
      const closestZ = THREE.MathUtils.clamp(local.y, -halfDepth, halfDepth);
      let offsetX = local.x - closestX;
      let offsetZ = local.y - closestZ;
      const distanceSquared = offsetX * offsetX + offsetZ * offsetZ;
      if (distanceSquared >= radius * radius) continue;

      let pushX = 0;
      let pushZ = 0;
      if (distanceSquared > 0.000001) {
        const distance = Math.sqrt(distanceSquared);
        const correction = radius - distance;
        pushX = offsetX / distance * correction;
        pushZ = offsetZ / distance * correction;
      } else {
        const xPenetration = halfWidth + radius - Math.abs(local.x);
        const zPenetration = halfDepth + radius - Math.abs(local.y);
        if (xPenetration < zPenetration) pushX = (local.x < 0 ? -1 : 1) * xPenetration;
        else pushZ = (local.y < 0 ? -1 : 1) * zPenetration;
      }
      const cosine = Math.cos(wall.yaw);
      const sine = Math.sin(wall.yaw);
      position.x += pushX * cosine + pushZ * sine;
      position.z += -pushX * sine + pushZ * cosine;
      collided = true;
    }
  }
  return collided;
}

function segmentArenaWallHit(start, end, padding = 0) {
  let nearest = null;
  for (const wall of arenaWalls) {
    const localStart = arenaWallLocalPosition(start, wall);
    const localEnd = arenaWallLocalPosition(end, wall);
    const deltaX = localEnd.x - localStart.x;
    const deltaZ = localEnd.y - localStart.y;
    const halfWidth = wall.width / 2 + padding;
    const halfDepth = wall.depth / 2 + padding;
    let entry = 0;
    let exit = 1;
    let missed = false;
    for (const [origin, delta, minimum, maximum] of [
      [localStart.x, deltaX, -halfWidth, halfWidth],
      [localStart.y, deltaZ, -halfDepth, halfDepth]
    ]) {
      if (Math.abs(delta) < 0.000001) {
        if (origin < minimum || origin > maximum) missed = true;
        continue;
      }
      const inverse = 1 / delta;
      let near = (minimum - origin) * inverse;
      let far = (maximum - origin) * inverse;
      if (near > far) [near, far] = [far, near];
      entry = Math.max(entry, near);
      exit = Math.min(exit, far);
      if (entry > exit) missed = true;
    }
    if (missed || entry < 0 || entry > 1 || (nearest && entry >= nearest.time)) continue;
    nearest = { wall, time: entry, point: start.clone().lerp(end, entry) };
  }
  return nearest;
}

function wallBlocksSegment(start, end, padding = 0.08) {
  const hit = segmentArenaWallHit(start, end, padding);
  return Boolean(hit && hit.time > 0.025 && hit.time < 0.975);
}

const steeringDirectionScratch = new THREE.Vector3();
const steeringProbeScratch = new THREE.Vector3();
const steeringTangentScratch = new THREE.Vector3();
const steeringAwayScratch = new THREE.Vector3();
function steerAroundArenaWalls(position, desiredDirection, radius = 0.7, preferredSide = 1) {
  const direction = steeringDirectionScratch.copy(desiredDirection).setY(0);
  if (direction.lengthSq() < 0.0001) return direction;
  direction.normalize();
  const probeEnd = steeringProbeScratch.copy(position).addScaledVector(direction, 1.8 + radius);
  const hit = segmentArenaWallHit(position, probeEnd, radius * 0.82);
  if (!hit) return direction;
  const wall = hit.wall;
  const tangent = wall.width >= wall.depth
    ? steeringTangentScratch.set(Math.cos(wall.yaw), 0, -Math.sin(wall.yaw))
    : steeringTangentScratch.set(Math.sin(wall.yaw), 0, Math.cos(wall.yaw));
  let tangentSign = Math.sign(tangent.dot(direction));
  if (Math.abs(tangent.dot(direction)) < 0.24) tangentSign = preferredSide || 1;
  const away = steeringAwayScratch.set(position.x - wall.x, 0, position.z - wall.z);
  if (away.lengthSq() > 0.001) away.normalize();
  return tangent.multiplyScalar(tangentSign || 1).multiplyScalar(0.86).addScaledVector(away, 0.42).normalize();
}

function randomArenaPosition(minRadius = 4, maxRadius = ARENA_RADIUS - 3) {
  let candidate = new THREE.Vector3();
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = THREE.MathUtils.lerp(minRadius, maxRadius, Math.sqrt(Math.random()));
    candidate = new THREE.Vector3(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
    if (!positionOverlapsArenaWall(candidate, 1.4)) return candidate;
  }
  return candidate;
}

function keepInsideArena(position, margin = 1.2) {
  const maximumRadius = ARENA_RADIUS - margin;
  const distanceSquared = position.x * position.x + position.z * position.z;
  if (distanceSquared > maximumRadius * maximumRadius) {
    const scale = maximumRadius / Math.sqrt(distanceSquared);
    position.x *= scale;
    position.z *= scale;
  }
}

const fighters = [];
let running = false;
const avatarTextureQueue = [];

function createBackZoneTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.translate(128, 128);
  const start = -Math.PI * 0.75;
  const end = -Math.PI * 0.25;
  const radius = 112;
  const glow = ctx.createRadialGradient(0, 0, 22, 0, 0, radius);
  glow.addColorStop(0, 'rgba(255,20,67,.12)');
  glow.addColorStop(.55, 'rgba(255,25,74,.38)');
  glow.addColorStop(1, 'rgba(255,60,99,.64)');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, radius, start, end); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = 'rgba(255,91,126,.98)'; ctx.lineWidth = 15;
  ctx.beginPath(); ctx.arc(0, 0, radius - 8, start, end); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,18,63,.88)'; ctx.lineWidth = 11;
  ctx.beginPath(); ctx.arc(0, 0, 57, start, end); ctx.stroke();
  ctx.strokeStyle = 'rgba(255,87,118,1)'; ctx.lineWidth = 7;
  for (const angle of [start, end]) {
    ctx.beginPath(); ctx.moveTo(Math.cos(angle) * 31, Math.sin(angle) * 31); ctx.lineTo(Math.cos(angle) * 108, Math.sin(angle) * 108); ctx.stroke();
  }
  // The warm arrow sits opposite the red back sector and therefore points in
  // the fighter's true forward direction while the illustrated face stays
  // camera-facing. It shares the existing zone texture, adding no draw call.
  ctx.shadowColor = 'rgba(255,209,91,.9)';
  ctx.shadowBlur = 12;
  ctx.fillStyle = 'rgba(255,237,176,.98)';
  ctx.beginPath();
  ctx.moveTo(0, 111);
  ctx.lineTo(-19, 70);
  ctx.lineTo(0, 79);
  ctx.lineTo(19, 70);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  // Put the multiplier directly into the shared sector texture. This keeps it
  // clear for every fighter without rendering a second sprite 15 times.
  ctx.font = '900 38px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(47,4,16,.95)';
  ctx.lineWidth = 10;
  ctx.strokeText('×2', 0, -67);
  ctx.fillStyle = '#fff3f6';
  ctx.fillText('×2', 0, -67);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  return texture;
}

const sharedBackZoneTexture = createBackZoneTexture();
const sharedBackZoneGeometry = new THREE.PlaneGeometry(2.36, 2.36);
class Fighter {
  constructor({ name, color, position, isPlayer = false }) {
    this.name = name;
    this.color = color;
    this.isPlayer = isPlayer;
    this.active = true;
    this.number = START_NUMBER;
    this.ammo = 0;
    this.weaponType = null;
    this.boosting = false;
    this.boostDrain = 0;
    this.visualTier = 0;
    this.respawnTimer = 0;
    this.invincibleTimer = 0;
    this.meleeWeapon = 'club';
    this.meleeStyle = 'club';
    this.rangeBuffTimer = 0;
    this.damageBuffTimer = 0;
    this.combatBuffHudKey = '';
    this.yaw = Math.random() * Math.PI * 2;
    this.forwardVector = new THREE.Vector3();
    this.movePreviousPosition = new THREE.Vector3();
    this.moveAttemptedVector = new THREE.Vector3();
    this.moveContactPosition = new THREE.Vector3();
    this.steeringVector = new THREE.Vector3();
    this.networkMoveVector = new THREE.Vector3();
    this.networkAimPoint = new THREE.Vector3();
    this.attackCooldown = Math.random() * 0.3;
    this.attackAnimation = 0;
    this.attackAnimationDuration = 0.43;
    this.attackResolved = true;
    this.shootCooldown = 0;
    this.shootReadyAt = 0;
    this.gunRecoil = 0;
    this.hitPulse = 0;
    this.hitReaction = 0;
    this.hitSide = 1;
    this.aiThink = 0;
    this.aiGoal = null;
    this.aiDecisionTimer = 0;
    this.aiMoveTarget = null;
    this.aiFoe = null;
    this.walkTime = Math.random() * Math.PI * 2;
    this.isMoving = false;
    this.motionBlend = 0;
    this.avatarFrameKey = '';
    this.avatarPose = { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 };
    this.avatarFrameBlend = 1;
    this.avatarFrameBlendDuration = 0.05;
    this.avatarTextureCache = new Map();
    this.avatarTextureQueuedKey = '';
    this.avatarBaseKey = '';
    this.avatarBaseCanvas = null;
    this.avatarDirectionTextures = {};
    this.avatarFacing = 'front';
    this.suspendAvatarRefresh = false;

    this.group = new THREE.Group();
    this.group.position.copy(position);
    this.group.rotation.y = this.yaw;

    this.groundShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.68, 22),
      new THREE.MeshBasicMaterial({ color: 0x07111c, transparent: true, opacity: 0.3, depthWrite: false })
    );
    this.groundShadow.rotation.x = -Math.PI / 2;
    this.groundShadow.position.y = 0.028;
    this.group.add(this.groundShadow);

    this.model = new THREE.Group();
    this.group.add(this.model);

    const shirtMaterial = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.62,
      metalness: 0.08,
      emissive: color,
      emissiveIntensity: 0.06
    });
    this.shirtMaterial = shirtMaterial;
    const identitySeed = [...name].reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
    this.aiFlankSign = identitySeed % 2 === 0 ? 1 : -1;
    this.aiFlankSpread = ((identitySeed % 3) - 1) * 0.42;
    this.aiLeaderBias = identitySeed % 5 < 3;
    this.aiTactic = 'idle';
    if (!isPlayer) {
      const botMeleeStyles = ['club', 'sword', 'axe', 'dagger', 'hammer', 'spear', 'katana', 'mace', 'scythe', 'staff', 'cleaver', 'rapier', 'chickenLeg', 'pickaxe', 'shovel', 'greatClub'];
      this.meleeStyle = botMeleeStyles[identitySeed % botMeleeStyles.length];
    }
    const skinPalette = [0xf4c7a1, 0xe6ad80, 0xc9865f, 0x9b6248, 0x704635];
    const hairPalette = [0x4b2a1c, 0x202936, 0x70401f, 0xc18b46, 0x7a2d34, 0x30333b];
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: isPlayer ? skinPalette[0] : skinPalette[identitySeed % skinPalette.length],
      roughness: 0.7,
      metalness: 0.01
    });
    const pantsMaterial = new THREE.MeshStandardMaterial({ color: 0x253248, roughness: 0.82 });
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: isPlayer ? hairPalette[0] : hairPalette[identitySeed % hairPalette.length],
      roughness: 0.86
    });
    const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x18202c, roughness: 0.7, metalness: 0.08 });
    this.pantsMaterial = pantsMaterial;
    this.shoeMaterial = shoeMaterial;
    this.hairMaterial = hairMaterial;
    this.skinColor = `#${skinMaterial.color.getHexString()}`;
    this.hairColor = `#${hairMaterial.color.getHexString()}`;

    this.body = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 0.42, 7, 14), shirtMaterial);
    this.body.position.y = 1.3;
    this.body.scale.set(1.04, 1.06, 0.78);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.model.add(this.body);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.19, 0.24, 12), skinMaterial);
    neck.position.y = 1.77;
    neck.castShadow = true;
    this.model.add(neck);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.45, 22, 16), skinMaterial);
    head.position.y = 2.06;
    head.scale.set(0.96, 1.04, 0.94);
    head.castShadow = true;
    this.model.add(head);

    this.shortHair = new THREE.Group();
    const shortHairCap = new THREE.Mesh(
      new THREE.SphereGeometry(0.455, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
      hairMaterial
    );
    shortHairCap.position.y = 2.1;
    shortHairCap.scale.set(0.98, 1, 0.96);
    shortHairCap.castShadow = true;
    this.shortHair.add(shortHairCap);
    const hairLocks = [
      [-0.29, 2.29, 0.2, -0.55, 0.18, 0.68],
      [-0.12, 2.35, 0.25, -0.25, 0.35, 0.86],
      [0.08, 2.36, 0.24, 0.14, 0.38, 0.86],
      [0.28, 2.3, 0.18, 0.5, 0.2, 0.68],
      [-0.34, 2.31, -0.04, -0.78, 0.52, 0.05],
      [0.34, 2.32, -0.06, 0.78, 0.52, 0.05],
      [0, 2.48, -0.08, 0.08, 0.96, -0.22]
    ];
    for (const [x, y, z, dx, dy, dz] of hairLocks) {
      const lock = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.34, 8), hairMaterial);
      lock.position.set(x, y, z);
      lock.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize());
      lock.castShadow = true;
      this.shortHair.add(lock);
    }
    for (const [x, lean] of [[-0.25, -0.52], [-0.09, -0.2], [0.08, 0.18], [0.24, 0.48]]) {
      const fringe = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.17, 5, 9), hairMaterial);
      fringe.position.set(x, 2.3, 0.36);
      fringe.rotation.z = lean;
      fringe.rotation.x = -0.16;
      fringe.castShadow = true;
      this.shortHair.add(fringe);
    }
    for (const side of [-1, 1]) {
      const sideTuft = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.34, 8), hairMaterial);
      sideTuft.position.set(side * 0.4, 2.2, 0.03);
      sideTuft.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(side * 0.8, -0.28, 0.12).normalize()
      );
      sideTuft.castShadow = true;
      this.shortHair.add(sideTuft);
    }
    this.model.add(this.shortHair);

    this.capGroup = new THREE.Group();
    const capCrown = new THREE.Mesh(new THREE.SphereGeometry(0.42, 14, 9), shirtMaterial);
    capCrown.scale.y = 0.68;
    capCrown.position.y = 2.28;
    capCrown.castShadow = true;
    this.capGroup.add(capCrown);
    const capBrim = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.08, 0.36), shirtMaterial);
    capBrim.position.set(0, 2.22, 0.34);
    capBrim.castShadow = true;
    this.capGroup.add(capBrim);
    this.capGroup.visible = false;
    this.model.add(this.capGroup);

    this.spikyHair = new THREE.Group();
    for (const [x, z, lean] of [
      [-0.25, -0.08, -0.18], [0, -0.15, 0], [0.25, -0.08, 0.18],
      [-0.18, 0.18, -0.12], [0.18, 0.18, 0.12]
    ]) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.48, 7), hairMaterial);
      spike.position.set(x, 2.42, z);
      spike.rotation.z = lean;
      spike.castShadow = true;
      this.spikyHair.add(spike);
    }
    this.spikyHair.visible = false;
    this.model.add(this.spikyHair);

    this.longHair = new THREE.Group();
    const longBack = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.24), hairMaterial);
    longBack.position.set(0, 1.77, -0.25);
    longBack.castShadow = true;
    this.longHair.add(longBack);
    for (const sideX of [-0.38, 0.38]) {
      const sideLock = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.48, 5, 8), hairMaterial);
      sideLock.position.set(sideX, 1.83, -0.02);
      sideLock.castShadow = true;
      this.longHair.add(sideLock);
    }
    this.longHair.visible = false;
    this.model.add(this.longHair);

    this.beanieGroup = new THREE.Group();
    const beanie = new THREE.Mesh(new THREE.SphereGeometry(0.43, 14, 9), shirtMaterial);
    beanie.scale.y = 0.78;
    beanie.position.y = 2.29;
    beanie.castShadow = true;
    this.beanieGroup.add(beanie);
    const pom = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), shirtMaterial);
    pom.position.y = 2.68;
    pom.castShadow = true;
    this.beanieGroup.add(pom);
    this.beanieGroup.visible = false;
    this.model.add(this.beanieGroup);

    this.mohawkHair = new THREE.Group();
    for (const z of [-0.28, -0.1, 0.08, 0.26]) {
      const crest = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.54, 7), hairMaterial);
      crest.position.set(0, 2.43, z);
      crest.castShadow = true;
      this.mohawkHair.add(crest);
    }
    this.mohawkHair.visible = false;
    this.model.add(this.mohawkHair);

    this.cowboyHat = new THREE.Group();
    const cowboyBrim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.58, 0.58, 0.08, 20),
      new THREE.MeshStandardMaterial({ color: 0x9c6338, roughness: 0.82 })
    );
    cowboyBrim.position.y = 2.28;
    cowboyBrim.castShadow = true;
    this.cowboyHat.add(cowboyBrim);
    const cowboyCrown = new THREE.Mesh(
      new THREE.CylinderGeometry(0.29, 0.36, 0.38, 14),
      new THREE.MeshStandardMaterial({ color: 0x8c542f, roughness: 0.8 })
    );
    cowboyCrown.position.y = 2.48;
    cowboyCrown.castShadow = true;
    this.cowboyHat.add(cowboyCrown);
    this.cowboyHat.visible = false;
    this.model.add(this.cowboyHat);

    this.ponytailGroup = new THREE.Group();
    const ponyCap = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.56), hairMaterial);
    ponyCap.position.y = 2.09;
    ponyCap.castShadow = true;
    this.ponytailGroup.add(ponyCap);
    const ponyTail = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.62, 5, 9), hairMaterial);
    ponyTail.position.set(0, 1.72, -0.34);
    ponyTail.rotation.x = -0.28;
    ponyTail.castShadow = true;
    this.ponytailGroup.add(ponyTail);
    const ponyTie = new THREE.Mesh(
      new THREE.TorusGeometry(0.13, 0.035, 7, 14),
      new THREE.MeshStandardMaterial({ color: 0xff668c, roughness: 0.55 })
    );
    ponyTie.position.set(0, 2, -0.34);
    ponyTie.rotation.x = Math.PI / 2;
    this.ponytailGroup.add(ponyTie);
    this.ponytailGroup.visible = false;
    this.model.add(this.ponytailGroup);

    this.helmetGroup = new THREE.Group();
    const helmetMaterial = new THREE.MeshStandardMaterial({ color: 0x69859b, roughness: 0.28, metalness: 0.68 });
    const helmetShell = new THREE.Mesh(new THREE.SphereGeometry(0.43, 16, 9, 0, Math.PI * 2, 0, Math.PI * 0.58), helmetMaterial);
    helmetShell.position.y = 2.11;
    helmetShell.castShadow = true;
    this.helmetGroup.add(helmetShell);
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.13, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x7cecff, emissive: 0x258aa7, emissiveIntensity: 1.8, transparent: true, opacity: 0.78 })
    );
    visor.position.set(0, 2.11, 0.37);
    this.helmetGroup.add(visor);
    this.helmetGroup.visible = false;
    this.model.add(this.helmetGroup);

    this.wizardHat = new THREE.Group();
    const wizardMaterial = new THREE.MeshStandardMaterial({ color: 0x56358f, roughness: 0.62, metalness: 0.08 });
    const wizardBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.08, 22), wizardMaterial);
    wizardBrim.position.y = 2.28;
    wizardBrim.castShadow = true;
    this.wizardHat.add(wizardBrim);
    const wizardCone = new THREE.Mesh(new THREE.ConeGeometry(0.38, 0.94, 14), wizardMaterial);
    wizardCone.position.y = 2.77;
    wizardCone.rotation.z = 0.12;
    wizardCone.castShadow = true;
    this.wizardHat.add(wizardCone);
    const wizardStar = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.1),
      new THREE.MeshStandardMaterial({ color: 0xffdb6e, emissive: 0xffa928, emissiveIntensity: 1.8 })
    );
    wizardStar.position.set(0.16, 2.72, 0.32);
    this.wizardHat.add(wizardStar);
    this.wizardHat.visible = false;
    this.model.add(this.wizardHat);

    this.headphonesGroup = new THREE.Group();
    const headphoneMaterial = new THREE.MeshStandardMaterial({ color: 0x242c3c, roughness: 0.35, metalness: 0.42 });
    const headphoneBand = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.055, 8, 22), headphoneMaterial);
    headphoneBand.position.y = 2.08;
    this.headphonesGroup.add(headphoneBand);
    for (const earX of [-0.43, 0.43]) {
      const earCup = new THREE.Mesh(
        new THREE.BoxGeometry(0.13, 0.3, 0.22),
        new THREE.MeshStandardMaterial({ color: 0x50dff2, emissive: 0x18758c, emissiveIntensity: 1.25, roughness: 0.3 })
      );
      earCup.position.set(earX, 2.03, 0);
      this.headphonesGroup.add(earCup);
    }
    this.headphonesGroup.visible = false;
    this.model.add(this.headphonesGroup);

    this.crownHat = new THREE.Group();
    const smallCrownMaterial = new THREE.MeshStandardMaterial({ color: 0xffcf42, emissive: 0x9e5d09, emissiveIntensity: 1.5, roughness: 0.24, metalness: 0.7 });
    const smallCrownBand = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.39, 0.16, 16), smallCrownMaterial);
    smallCrownBand.position.y = 2.36;
    this.crownHat.add(smallCrownBand);
    for (let crownIndex = 0; crownIndex < 5; crownIndex += 1) {
      const crownSpike = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.42, 7), smallCrownMaterial);
      const crownAngle = crownIndex / 5 * Math.PI * 2;
      crownSpike.position.set(Math.sin(crownAngle) * 0.27, 2.62, Math.cos(crownAngle) * 0.27);
      this.crownHat.add(crownSpike);
    }
    this.crownHat.visible = false;
    this.model.add(this.crownHat);

    const eyeWhiteMaterial = new THREE.MeshStandardMaterial({ color: 0xf8fbff, roughness: 0.38 });
    const irisMaterial = new THREE.MeshStandardMaterial({ color: 0x2e9de8, emissive: 0x0e4168, emissiveIntensity: 0.3, roughness: 0.28 });
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x102035, roughness: 0.3 });
    const eyeHighlightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const browMaterial = new THREE.MeshStandardMaterial({ color: hairMaterial.color, roughness: 0.86 });
    for (const eyeX of [-0.14, 0.14]) {
      const eyeWhite = new THREE.Mesh(new THREE.SphereGeometry(0.088, 14, 10), eyeWhiteMaterial);
      eyeWhite.scale.set(1.08, 0.9, 0.42);
      eyeWhite.position.set(eyeX, 2.09, 0.405);
      this.model.add(eyeWhite);
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.052, 12, 9), irisMaterial);
      iris.scale.z = 0.52;
      iris.position.set(eyeX, 2.088, 0.438);
      this.model.add(iris);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.027, 10, 8), eyeMaterial);
      pupil.scale.z = 0.5;
      pupil.position.set(eyeX, 2.088, 0.466);
      this.model.add(pupil);
      const highlight = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), eyeHighlightMaterial);
      highlight.position.set(eyeX - 0.013, 2.108, 0.484);
      this.model.add(highlight);
      const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.016, 0.11, 4, 8), browMaterial);
      brow.rotation.z = Math.PI / 2 + (eyeX < 0 ? -0.08 : 0.08);
      brow.position.set(eyeX, 2.205, 0.392);
      this.model.add(brow);
    }
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), skinMaterial);
    nose.scale.set(0.7, 0.9, 0.55);
    nose.position.set(0, 2.01, 0.44);
    this.model.add(nose);
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.025, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x8c3f43, roughness: 0.65 })
    );
    mouth.position.set(0, 1.915, 0.425);
    this.model.add(mouth);
    const cheekMaterial = new THREE.MeshBasicMaterial({ color: 0xf28c91, transparent: true, opacity: 0.42, depthWrite: false });
    for (const cheekX of [-0.255, 0.255]) {
      const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.062, 14), cheekMaterial);
      cheek.position.set(cheekX, 1.975, 0.447);
      this.model.add(cheek);
    }
    for (const earX of [-0.435, 0.435]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.08, 9, 7), skinMaterial);
      ear.scale.x = 0.55;
      ear.position.set(earX, 2.03, 0);
      this.model.add(ear);
    }

    const makeLimb = (radius, length, material) => {
      const limb = new THREE.Mesh(
        new THREE.CapsuleGeometry(radius, Math.max(0.08, length - radius * 2), 6, 11),
        material
      );
      limb.castShadow = true;
      return limb;
    };

    const makeArm = (side) => {
      const arm = new THREE.Group();
      arm.position.set(side * 0.54, 1.57, 0);
      arm.rotation.z = side * 0.12;
      const upperArm = makeLimb(0.145, 0.34, shirtMaterial);
      upperArm.position.y = -0.17;
      arm.add(upperArm);
      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 9), skinMaterial);
      elbow.position.y = -0.34;
      elbow.castShadow = true;
      arm.add(elbow);
      const forearm = makeLimb(0.12, 0.34, skinMaterial);
      forearm.position.y = -0.49;
      forearm.scale.set(0.95, 1, 0.95);
      arm.add(forearm);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 10), skinMaterial);
      hand.position.set(0, -0.68, 0.03);
      hand.scale.set(0.86, 1.05, 0.8);
      hand.castShadow = true;
      arm.add(hand);
      this.model.add(arm);
      return { arm, hand };
    };
    const leftArmParts = makeArm(-1);
    const rightArmParts = makeArm(1);
    this.leftArm = leftArmParts.arm;
    this.rightArm = rightArmParts.arm;

    for (const shoulderX of [-0.53, 0.53]) {
      const sleeve = new THREE.Mesh(new THREE.SphereGeometry(0.205, 14, 10), shirtMaterial);
      sleeve.scale.set(0.92, 0.82, 0.88);
      sleeve.position.set(shoulderX, 1.58, 0);
      sleeve.castShadow = true;
      this.model.add(sleeve);
    }

    this.hands = [leftArmParts.hand, rightArmParts.hand];

    this.leftLeg = makeLimb(0.19, 0.8, pantsMaterial);
    this.leftLeg.position.set(-0.23, 0.43, 0);
    this.leftLeg.scale.set(0.9, 1.08, 0.9);
    this.model.add(this.leftLeg);
    this.rightLeg = makeLimb(0.19, 0.8, pantsMaterial);
    this.rightLeg.position.set(0.23, 0.43, 0);
    this.rightLeg.scale.set(0.9, 1.08, 0.9);
    this.model.add(this.rightLeg);

    this.lowerLegs = [];
    for (const legX of [-0.23, 0.23]) {
      const lowerLeg = makeLimb(0.15, 0.48, skinMaterial);
      lowerLeg.position.set(legX, 0.34, 0);
      lowerLeg.visible = false;
      this.lowerLegs.push(lowerLeg);
      this.model.add(lowerLeg);
    }

    this.shoes = [];
    const soleMaterial = new THREE.MeshStandardMaterial({ color: 0xe5edf3, roughness: 0.72 });
    const laceMaterial = new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.58 });
    for (const footX of [-0.23, 0.23]) {
      const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.25, 6, 12), shoeMaterial);
      foot.rotation.x = Math.PI / 2;
      foot.scale.set(1.08, 1, 0.82);
      foot.position.set(footX, 0.14, 0.13);
      foot.castShadow = true;
      const sole = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.26, 5, 11), soleMaterial);
      sole.position.z = 0.045;
      sole.scale.set(1.02, 1.02, 0.62);
      foot.add(sole);
      for (const laceX of [-0.07, 0, 0.07]) {
        const lace = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.025, 0.025), laceMaterial);
        lace.position.set(0, laceX + 0.08, -0.17);
        foot.add(lace);
      }
      this.shoes.push(foot);
      this.model.add(foot);
    }

    this.shoeCuffs = new THREE.Group();
    for (const footX of [-0.23, 0.23]) {
      const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.2, 0.38, 9), shoeMaterial);
      cuff.position.set(footX, 0.31, 0);
      cuff.castShadow = true;
      this.shoeCuffs.add(cuff);
    }
    this.shoeCuffs.visible = false;
    this.model.add(this.shoeCuffs);

    this.runningShoeDetails = new THREE.Group();
    const runningAccent = new THREE.MeshStandardMaterial({ color: 0x7ff3ff, emissive: 0x1b8ca5, emissiveIntensity: 1.1, roughness: 0.35 });
    for (const footX of [-0.23, 0.23]) {
      const sideStripe = new THREE.Mesh(new THREE.BoxGeometry(0.37, 0.07, 0.12), runningAccent);
      sideStripe.position.set(footX, 0.11, 0.2);
      sideStripe.rotation.z = footX < 0 ? -0.12 : 0.12;
      this.runningShoeDetails.add(sideStripe);
      const heelFin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.16), runningAccent);
      heelFin.position.set(footX, 0.08, -0.16);
      this.runningShoeDetails.add(heelFin);
    }
    this.runningShoeDetails.visible = false;
    this.model.add(this.runningShoeDetails);

    this.leatherShoeDetails = new THREE.Group();
    const polishedLeather = new THREE.MeshStandardMaterial({ color: 0x311c17, roughness: 0.22, metalness: 0.18 });
    for (const footX of [-0.23, 0.23]) {
      const toeCap = new THREE.Mesh(new THREE.SphereGeometry(0.19, 10, 7), polishedLeather);
      toeCap.scale.set(0.9, 0.45, 1.18);
      toeCap.position.set(footX, 0.12, 0.33);
      this.leatherShoeDetails.add(toeCap);
    }
    this.leatherShoeDetails.visible = false;
    this.model.add(this.leatherShoeDetails);

    this.combatShoeDetails = new THREE.Group();
    const combatPlate = new THREE.MeshStandardMaterial({ color: 0x586775, roughness: 0.36, metalness: 0.55 });
    for (const footX of [-0.23, 0.23]) {
      const toeGuard = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.13, 0.2), combatPlate);
      toeGuard.position.set(footX, 0.15, 0.31);
      this.combatShoeDetails.add(toeGuard);
      const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.08), runningAccent);
      buckle.position.set(footX + (footX < 0 ? -0.17 : 0.17), 0.31, 0.04);
      this.combatShoeDetails.add(buckle);
    }
    this.combatShoeDetails.visible = false;
    this.model.add(this.combatShoeDetails);

    this.canvasShoeDetails = new THREE.Group();
    const canvasRubber = new THREE.MeshStandardMaterial({ color: 0xf4f4ec, roughness: 0.76 });
    for (const footX of [-0.23, 0.23]) {
      const rubberToe = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.17), canvasRubber);
      rubberToe.position.set(footX, 0.13, 0.34);
      this.canvasShoeDetails.add(rubberToe);
      const anklePatch = new THREE.Mesh(new THREE.CircleGeometry(0.07, 10), canvasRubber);
      anklePatch.rotation.y = footX < 0 ? -Math.PI / 2 : Math.PI / 2;
      anklePatch.position.set(footX + (footX < 0 ? -0.175 : 0.175), 0.24, 0.02);
      this.canvasShoeDetails.add(anklePatch);
    }
    this.canvasShoeDetails.visible = false;
    this.model.add(this.canvasShoeDetails);

    this.goldShoeDetails = new THREE.Group();
    const goldShoeMaterial = new THREE.MeshStandardMaterial({ color: 0xffd64f, emissive: 0x9b5c09, emissiveIntensity: 1.35, roughness: 0.22, metalness: 0.76 });
    for (const footX of [-0.23, 0.23]) {
      const goldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.37, 0.16, 0.32), goldShoeMaterial);
      goldPlate.position.set(footX, 0.15, 0.22);
      goldPlate.castShadow = true;
      this.goldShoeDetails.add(goldPlate);
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.3, 6), goldShoeMaterial);
      wing.rotation.z = footX < 0 ? -Math.PI / 2 : Math.PI / 2;
      wing.position.set(footX + (footX < 0 ? -0.25 : 0.25), 0.23, 0);
      this.goldShoeDetails.add(wing);
    }
    this.goldShoeDetails.visible = false;
    this.model.add(this.goldShoeDetails);

    const belt = new THREE.Mesh(
      new THREE.BoxGeometry(0.86, 0.12, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x151d29, roughness: 0.75 })
    );
    belt.position.y = 0.8;
    belt.castShadow = true;
    this.model.add(belt);
    const beltBuckle = new THREE.Mesh(
      new THREE.BoxGeometry(0.19, 0.17, 0.07),
      new THREE.MeshStandardMaterial({ color: 0xffcf59, roughness: 0.3, metalness: 0.72 })
    );
    beltBuckle.position.set(0, 0.8, 0.285);
    beltBuckle.castShadow = true;
    this.model.add(beltBuckle);

    this.cargoPockets = new THREE.Group();
    for (const pocketX of [-0.34, 0.34]) {
      const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.28, 0.16), pantsMaterial);
      pocket.position.set(pocketX, 0.52, 0.15);
      pocket.castShadow = true;
      this.cargoPockets.add(pocket);
    }
    this.cargoPockets.visible = false;
    this.model.add(this.cargoPockets);

    this.pantsStripes = new THREE.Group();
    const stripeMaterial = new THREE.MeshStandardMaterial({ color: 0xeaf4ff, roughness: 0.55 });
    for (const stripeX of [-0.38, 0.38]) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.7, 0.08), stripeMaterial);
      stripe.position.set(stripeX, 0.44, 0.02);
      this.pantsStripes.add(stripe);
    }
    this.pantsStripes.visible = false;
    this.model.add(this.pantsStripes);

    this.kneeGuards = new THREE.Group();
    const guardMaterial = new THREE.MeshStandardMaterial({ color: 0x74879a, roughness: 0.35, metalness: 0.58 });
    for (const kneeX of [-0.23, 0.23]) {
      const knee = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.25, 0.14), guardMaterial);
      knee.position.set(kneeX, 0.42, 0.16);
      knee.castShadow = true;
      this.kneeGuards.add(knee);
    }
    this.kneeGuards.visible = false;
    this.model.add(this.kneeGuards);

    this.jeansDetails = new THREE.Group();
    const denimStitch = new THREE.MeshStandardMaterial({ color: 0xd6a65d, roughness: 0.82 });
    for (const legX of [-0.23, 0.23]) {
      const stitch = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.66, 0.035), denimStitch);
      stitch.position.set(legX, 0.45, 0.17);
      this.jeansDetails.add(stitch);
      const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.2, 0.045), pantsMaterial);
      pocket.position.set(legX, 0.69, 0.18);
      pocket.rotation.z = legX < 0 ? -0.12 : 0.12;
      this.jeansDetails.add(pocket);
    }
    this.jeansDetails.visible = false;
    this.model.add(this.jeansDetails);

    this.joggerDetails = new THREE.Group();
    for (const legX of [-0.23, 0.23]) {
      const joggerCuff = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.18, 9), pantsMaterial);
      joggerCuff.position.set(legX, 0.13, 0);
      this.joggerDetails.add(joggerCuff);
    }
    const joggerCord = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 6, 14), denimStitch);
    joggerCord.position.set(0, 0.77, 0.25);
    this.joggerDetails.add(joggerCord);
    this.joggerDetails.visible = false;
    this.model.add(this.joggerDetails);

    this.camoDetails = new THREE.Group();
    const camoMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x263d31, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x72815a, roughness: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0x4c593b, roughness: 0.9 })
    ];
    for (let patchIndex = 0; patchIndex < 8; patchIndex += 1) {
      const legX = patchIndex % 2 ? -0.23 : 0.23;
      const patch = new THREE.Mesh(new THREE.BoxGeometry(0.13 + (patchIndex % 3) * 0.035, 0.11, 0.035), camoMaterials[patchIndex % camoMaterials.length]);
      patch.position.set(legX + ((patchIndex % 3) - 1) * 0.04, 0.2 + (patchIndex % 4) * 0.16, 0.175);
      patch.rotation.z = patchIndex * 0.41;
      this.camoDetails.add(patch);
    }
    this.camoDetails.visible = false;
    this.model.add(this.camoDetails);

    this.formalPantsDetails = new THREE.Group();
    const formalCreaseMaterial = new THREE.MeshStandardMaterial({ color: 0xd7e0e9, roughness: 0.56 });
    for (const legX of [-0.23, 0.23]) {
      const crease = new THREE.Mesh(new THREE.BoxGeometry(0.022, 0.7, 0.025), formalCreaseMaterial);
      crease.position.set(legX, 0.44, 0.175);
      this.formalPantsDetails.add(crease);
    }
    this.formalPantsDetails.visible = false;
    this.model.add(this.formalPantsDetails);

    this.techPantsDetails = new THREE.Group();
    const techPlateMaterial = new THREE.MeshStandardMaterial({ color: 0x65798c, roughness: 0.28, metalness: 0.66 });
    const techGlowMaterial = new THREE.MeshStandardMaterial({ color: 0x72efff, emissive: 0x269fb8, emissiveIntensity: 2.1 });
    for (const legX of [-0.23, 0.23]) {
      const thighPlate = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.36, 0.13), techPlateMaterial);
      thighPlate.position.set(legX, 0.56, 0.16);
      thighPlate.castShadow = true;
      this.techPantsDetails.add(thighPlate);
      const glowLine = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.24, 0.025), techGlowMaterial);
      glowLine.position.set(legX, 0.56, 0.235);
      this.techPantsDetails.add(glowLine);
    }
    this.techPantsDetails.visible = false;
    this.model.add(this.techPantsDetails);

    const badge = new THREE.Mesh(
      new THREE.CircleGeometry(0.12, 12),
      new THREE.MeshStandardMaterial({ color: 0xf4fbff, emissive: 0x72dcff, emissiveIntensity: 0.7 })
    );
    badge.position.set(0, 1.35, 0.245);
    this.model.add(badge);

    const collarTrim = new THREE.Mesh(
      new THREE.TorusGeometry(0.19, 0.026, 7, 18),
      new THREE.MeshStandardMaterial({ color: 0xeaf5ff, roughness: 0.52 })
    );
    collarTrim.position.set(0, 1.69, 0.252);
    collarTrim.scale.y = 0.52;
    this.model.add(collarTrim);
    for (const seamX of [-0.39, 0.39]) {
      const seam = new THREE.Mesh(
        new THREE.BoxGeometry(0.025, 0.66, 0.025),
        new THREE.MeshStandardMaterial({ color: 0xc8d4df, roughness: 0.7 })
      );
      seam.position.set(seamX, 1.29, 0.252);
      this.model.add(seam);
    }

    const trimMaterial = new THREE.MeshStandardMaterial({ color: 0xe9f3fb, roughness: 0.55 });
    this.jacketGroup = new THREE.Group();
    for (const panelX of [-0.22, 0.22]) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.72, 0.08), shirtMaterial);
      panel.position.set(panelX, 1.27, 0.28);
      panel.castShadow = true;
      this.jacketGroup.add(panel);
    }
    const zipper = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.68, 0.035), trimMaterial);
    zipper.position.set(0, 1.27, 0.335);
    this.jacketGroup.add(zipper);
    for (const collarX of [-0.13, 0.13]) {
      const collar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.22, 0.05), trimMaterial);
      collar.position.set(collarX, 1.68, 0.31);
      collar.rotation.z = collarX < 0 ? -0.45 : 0.45;
      this.jacketGroup.add(collar);
    }
    this.jacketGroup.visible = false;
    this.model.add(this.jacketGroup);

    this.hoodieGroup = new THREE.Group();
    const hood = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.11, 8, 20), shirtMaterial);
    hood.rotation.x = Math.PI / 2;
    hood.position.set(0, 1.73, -0.05);
    hood.castShadow = true;
    this.hoodieGroup.add(hood);
    for (const stringX of [-0.1, 0.1]) {
      const drawstring = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.38, 6), trimMaterial);
      drawstring.position.set(stringX, 1.45, 0.29);
      this.hoodieGroup.add(drawstring);
    }
    const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.24, 0.07), shirtMaterial);
    pocket.position.set(0, 1.05, 0.285);
    this.hoodieGroup.add(pocket);
    this.hoodieGroup.visible = false;
    this.model.add(this.hoodieGroup);

    this.vestGroup = new THREE.Group();
    const vestMaterial = new THREE.MeshStandardMaterial({ color: 0x303846, roughness: 0.68, metalness: 0.12 });
    for (const vestX of [-0.24, 0.24]) {
      const vestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.78, 0.1), vestMaterial);
      vestPanel.position.set(vestX, 1.28, 0.3);
      vestPanel.castShadow = true;
      this.vestGroup.add(vestPanel);
    }
    const vestBuckle = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.13, 0.06), trimMaterial);
    vestBuckle.position.set(0, 1.15, 0.37);
    this.vestGroup.add(vestBuckle);
    this.vestGroup.visible = false;
    this.model.add(this.vestGroup);

    this.armorGroup = new THREE.Group();
    const armorMaterial = new THREE.MeshStandardMaterial({ color: 0x91a8bd, roughness: 0.3, metalness: 0.72 });
    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.72, 0.16), armorMaterial);
    chestPlate.position.set(0, 1.31, 0.31);
    chestPlate.castShadow = true;
    this.armorGroup.add(chestPlate);
    for (const shoulderX of [-0.58, 0.58]) {
      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 7), armorMaterial);
      shoulder.scale.y = 0.6;
      shoulder.position.set(shoulderX, 1.58, 0);
      shoulder.castShadow = true;
      this.armorGroup.add(shoulder);
    }
    const armorEmblem = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.13),
      new THREE.MeshStandardMaterial({ color: 0x7ce9ff, emissive: 0x31c5e1, emissiveIntensity: 1.5 })
    );
    armorEmblem.position.set(0, 1.35, 0.42);
    this.armorGroup.add(armorEmblem);
    this.armorGroup.visible = false;
    this.model.add(this.armorGroup);

    this.suitGroup = new THREE.Group();
    const suitMaterial = new THREE.MeshStandardMaterial({ color: 0x202a39, roughness: 0.58, metalness: 0.12 });
    for (const lapelX of [-0.18, 0.18]) {
      const lapel = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.62, 0.08), suitMaterial);
      lapel.position.set(lapelX, 1.38, 0.31);
      lapel.rotation.z = lapelX < 0 ? -0.22 : 0.22;
      lapel.castShadow = true;
      this.suitGroup.add(lapel);
    }
    const shirtFront = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.68, 0.06), trimMaterial);
    shirtFront.position.set(0, 1.35, 0.34);
    this.suitGroup.add(shirtFront);
    const tie = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.48, 5), shirtMaterial);
    tie.position.set(0, 1.38, 0.4);
    tie.rotation.z = Math.PI;
    this.suitGroup.add(tie);
    this.suitGroup.visible = false;
    this.model.add(this.suitGroup);

    this.trenchGroup = new THREE.Group();
    for (const panelX of [-0.23, 0.23]) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.45, 0.1), shirtMaterial);
      panel.position.set(panelX, 1.02, 0.29);
      panel.rotation.z = panelX < 0 ? -0.035 : 0.035;
      panel.castShadow = true;
      this.trenchGroup.add(panel);
    }
    const trenchBelt = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.12, 0.08), suitMaterial);
    trenchBelt.position.set(0, 1.07, 0.36);
    this.trenchGroup.add(trenchBelt);
    const backFlap = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.86, 0.1), shirtMaterial);
    backFlap.position.set(0, 0.82, -0.28);
    backFlap.castShadow = true;
    this.trenchGroup.add(backFlap);
    this.trenchGroup.visible = false;
    this.model.add(this.trenchGroup);

    this.jerseyGroup = new THREE.Group();
    const jerseyTrim = new THREE.MeshStandardMaterial({ color: 0xf6fbff, roughness: 0.48 });
    for (const stripeX of [-0.34, 0.34]) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.72, 0.04), jerseyTrim);
      stripe.position.set(stripeX, 1.31, 0.27);
      this.jerseyGroup.add(stripe);
    }
    const jerseyNumber = new THREE.Mesh(new THREE.RingGeometry(0.13, 0.18, 14), jerseyTrim);
    jerseyNumber.position.set(0, 1.36, 0.31);
    this.jerseyGroup.add(jerseyNumber);
    for (const sleeveX of [-0.58, 0.58]) {
      const sleeveBand = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.025, 7, 14), jerseyTrim);
      sleeveBand.rotation.x = Math.PI / 2;
      sleeveBand.position.set(sleeveX, 1.48, 0);
      this.jerseyGroup.add(sleeveBand);
    }
    this.jerseyGroup.visible = false;
    this.model.add(this.jerseyGroup);

    this.robeGroup = new THREE.Group();
    const robeSkirt = new THREE.Mesh(new THREE.CylinderGeometry(0.39, 0.66, 1.18, 12, 1, true), shirtMaterial);
    robeSkirt.position.y = 0.83;
    robeSkirt.castShadow = true;
    this.robeGroup.add(robeSkirt);
    const robeSash = new THREE.Mesh(
      new THREE.TorusGeometry(0.42, 0.055, 7, 18),
      new THREE.MeshStandardMaterial({ color: 0xffcf59, roughness: 0.42, metalness: 0.25 })
    );
    robeSash.rotation.x = Math.PI / 2;
    robeSash.position.y = 1.25;
    this.robeGroup.add(robeSash);
    const robeFront = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.05, 0.06), trimMaterial);
    robeFront.position.set(0, 0.83, 0.56);
    this.robeGroup.add(robeFront);
    this.robeGroup.visible = false;
    this.model.add(this.robeGroup);

    this.bomberGroup = new THREE.Group();
    const bomberShell = new THREE.Mesh(new THREE.CapsuleGeometry(0.4, 0.28, 5, 10), shirtMaterial);
    bomberShell.position.y = 1.32;
    bomberShell.scale.set(1.08, 0.96, 0.82);
    bomberShell.castShadow = true;
    this.bomberGroup.add(bomberShell);
    const bomberZip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.68, 0.04), trimMaterial);
    bomberZip.position.set(0, 1.31, 0.36);
    this.bomberGroup.add(bomberZip);
    for (const cuffX of [-0.57, 0.57]) {
      const armCuff = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.035, 7, 14), suitMaterial);
      armCuff.rotation.x = Math.PI / 2;
      armCuff.position.set(cuffX, 1.02, 0);
      this.bomberGroup.add(armCuff);
    }
    this.bomberGroup.visible = false;
    this.model.add(this.bomberGroup);

    const weaponPivot = new THREE.Group();
    weaponPivot.position.set(0.67, 1.05, 0.1);
    const wood = new THREE.MeshStandardMaterial({ color: 0x9b5c30, roughness: 0.8 });
    const club = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 1.28, 10), wood);
    club.rotation.x = Math.PI / 2;
    club.position.z = 0.53;
    club.castShadow = true;
    weaponPivot.add(club);
    const clubHead = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), wood);
    clubHead.position.z = 1.13;
    clubHead.castShadow = true;
    weaponPivot.add(clubHead);
    this.weapon = weaponPivot;
    this.clubModel = weaponPivot;
    this.model.add(weaponPivot);

    this.sniperModel = new THREE.Group();
    this.sniperModel.position.set(-0.62, 1.02, 0.2);
    const sniperMetal = new THREE.MeshStandardMaterial({ color: 0x72a9ff, metalness: 0.72, roughness: 0.25 });
    const sniperBody = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.22, 1.08), sniperMetal);
    sniperBody.position.z = 0.42;
    sniperBody.castShadow = true;
    this.sniperModel.add(sniperBody);
    const sniperBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.82, 8), sniperMetal);
    sniperBarrel.rotation.x = Math.PI / 2;
    sniperBarrel.position.z = 1.32;
    this.sniperModel.add(sniperBarrel);
    const sniperScope = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.48, 10),
      new THREE.MeshStandardMaterial({ color: 0x182536, metalness: 0.58, roughness: 0.28 })
    );
    sniperScope.rotation.x = Math.PI / 2;
    sniperScope.position.set(0, 0.19, 0.45);
    this.sniperModel.add(sniperScope);
    const sniperStock = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.42), sniperMetal);
    sniperStock.position.set(0, -0.08, -0.28);
    this.sniperModel.add(sniperStock);
    this.sniperModel.visible = false;
    this.model.add(this.sniperModel);

    this.smgModel = new THREE.Group();
    this.smgModel.position.set(-0.62, 1.02, 0.18);
    const smgMetal = new THREE.MeshStandardMaterial({ color: 0x58e0b2, metalness: 0.65, roughness: 0.3 });
    const smgBodyHeld = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.25, 0.86), smgMetal);
    smgBodyHeld.position.z = 0.34;
    smgBodyHeld.castShadow = true;
    this.smgModel.add(smgBodyHeld);
    const smgBarrelHeld = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.52, 8), smgMetal);
    smgBarrelHeld.rotation.x = Math.PI / 2;
    smgBarrelHeld.position.z = 0.98;
    this.smgModel.add(smgBarrelHeld);
    const smgMagazine = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.48, 0.2), smgMetal);
    smgMagazine.position.set(0, -0.28, 0.28);
    smgMagazine.rotation.x = 0.18;
    this.smgModel.add(smgMagazine);
    this.smgModel.visible = false;
    this.model.add(this.smgModel);

    this.rocketModel = new THREE.Group();
    this.rocketModel.position.set(-0.7, 1.18, 0.14);
    const rocketMetal = new THREE.MeshStandardMaterial({ color: 0xff704d, metalness: 0.58, roughness: 0.34 });
    const rocketTube = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.23, 1.48, 12), rocketMetal);
    rocketTube.rotation.x = Math.PI / 2;
    rocketTube.position.z = 0.55;
    rocketTube.castShadow = true;
    this.rocketModel.add(rocketTube);
    const rocketMuzzle = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.055, 8, 18),
      new THREE.MeshStandardMaterial({ color: 0x253342, metalness: 0.72, roughness: 0.25 })
    );
    rocketMuzzle.position.z = 1.29;
    this.rocketModel.add(rocketMuzzle);
    const rocketSight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.3), sniperMetal);
    rocketSight.position.set(0, 0.28, 0.42);
    this.rocketModel.add(rocketSight);
    this.rocketModel.visible = false;
    this.model.add(this.rocketModel);

    this.rangeBuffAura = new THREE.Mesh(
      new THREE.RingGeometry(0.72, 0.86, 32),
      new THREE.MeshBasicMaterial({ color: 0x65eaff, transparent: true, opacity: 0.74, side: THREE.DoubleSide, depthWrite: false })
    );
    this.rangeBuffAura.rotation.x = -Math.PI / 2;
    this.rangeBuffAura.position.y = 0.075;
    this.rangeBuffAura.visible = false;
    this.group.add(this.rangeBuffAura);
    this.damageBuffAura = new THREE.Mesh(
      new THREE.TorusGeometry(0.73, 0.075, 8, 30),
      new THREE.MeshBasicMaterial({ color: 0xff704d, transparent: true, opacity: 0.82, depthWrite: false })
    );
    this.damageBuffAura.rotation.x = Math.PI / 2;
    this.damageBuffAura.position.y = 0.22;
    this.damageBuffAura.visible = false;
    this.group.add(this.damageBuffAura);

    this.shield = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 20, 14),
      new THREE.MeshStandardMaterial({
        color: 0x7de9ff,
        emissive: 0x36cfff,
        emissiveIntensity: 1.25,
        transparent: true,
        opacity: 0.22,
        roughness: 0.18,
        metalness: 0.25,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false
      })
    );
    this.shield.position.y = 1.18;
    this.shield.scale.y = 1.22;
    this.shieldRings = [];
    for (const rotation of [
      [Math.PI / 2, 0, 0],
      [0, 0, Math.PI / 2],
      [0, Math.PI / 2, Math.PI / 3]
    ]) {
      const shieldRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.28, 0.035, 8, 42),
        new THREE.MeshBasicMaterial({
          color: 0xa5f6ff,
          transparent: true,
          opacity: 0.9,
          depthWrite: false
        })
      );
      shieldRing.rotation.set(...rotation);
      this.shield.add(shieldRing);
      this.shieldRings.push(shieldRing);
    }
    const shieldCore = new THREE.PointLight(0x72eaff, 5, 5, 2);
    this.shield.add(shieldCore);
    this.shield.visible = false;
    this.group.add(this.shield);

    if (isPlayer) {
      this.zoneGroup = new THREE.Group();
      this.attackRangeArc = new THREE.Mesh(
        new THREE.RingGeometry(BASE_ATTACK_RANGE * 0.955, BASE_ATTACK_RANGE, 38, 1, Math.PI * 1.25, Math.PI / 2),
        new THREE.MeshBasicMaterial({
          color: 0x77e8ff,
          transparent: true,
          opacity: 0.82,
          side: THREE.DoubleSide,
          depthWrite: false
        })
      );
      this.attackRangeArc.rotation.x = -Math.PI / 2;
      this.attackRangeArc.position.y = 0.046;
      this.zoneGroup.add(this.attackRangeArc);
      const attackBoundaryPoints = [];
      for (const angle of [Math.PI * 1.25, Math.PI * 1.75]) {
        attackBoundaryPoints.push(
          Math.cos(angle) * BASE_ATTACK_RANGE * 0.72, 0.05, -Math.sin(angle) * BASE_ATTACK_RANGE * 0.72,
          Math.cos(angle) * BASE_ATTACK_RANGE, 0.05, -Math.sin(angle) * BASE_ATTACK_RANGE
        );
      }
      this.attackRangeBoundaries = new THREE.LineSegments(
        new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(attackBoundaryPoints, 3)),
        new THREE.LineBasicMaterial({ color: 0x77e8ff, transparent: true, opacity: 0.58 })
      );
      this.zoneGroup.add(this.attackRangeBoundaries);
      this.group.add(this.zoneGroup);
    }

    this.backZoneGroup = new THREE.Group();
    // All 15 weak zones are rendered later by one instanced mesh. Keeping only
    // this transform holder preserves the existing gameplay diagnostics.
    this.backZoneSector = null;
    this.backZoneRing = null;
    this.backZoneInnerRing = null;
    this.backZoneLabel = null;
    this.group.add(this.backZoneGroup);

    this.label = makeNumberSprite(this.number, `#${color.toString(16).padStart(6, '0')}`);
    this.label.scale.set(isPlayer ? 1.72 : 1.45, isPlayer ? 0.86 : 0.72, 1);
    this.label.position.y = 3.94;
    this.label.visible = true;
    this.group.add(this.label);
    this.hairStyle = 'short';
    this.outfitStyle = 'hoodie';
    this.pantsStyle = 'pants';
    this.shoesStyle = 'sneakers';
    this.model.visible = false;
    // The legacy 3D rig is retained as pose data for the illustrated avatar,
    // but it must not stay in the rendered hierarchy. Three.js updates world
    // matrices for invisible descendants too, which previously meant hundreds
    // of pointless transforms every frame across 15 fighters.
    this.group.remove(this.model);
    const makeAvatarMaterial = () => {
      const material = new THREE.SpriteMaterial({
        transparent: true,
        alphaTest: 0.025,
        depthWrite: false,
        toneMapped: false
      });
      material.userData.mirrorX = 0;
      material.userData.hasMap = false;
      material.onBeforeCompile = (shader) => {
        shader.uniforms.avatarMirrorX = { value: material.userData.mirrorX };
        shader.vertexShader = `uniform float avatarMirrorX;\n${shader.vertexShader}`.replace(
          '#include <uv_vertex>',
          '#include <uv_vertex>\n#ifdef USE_MAP\n  vMapUv.x = mix(vMapUv.x, 1.0 - vMapUv.x, avatarMirrorX);\n#endif'
        );
        material.userData.mirrorShader = shader;
      };
      material.customProgramCacheKey = () => 'number-brawl-avatar-mirror-v2';
      return material;
    };
    const avatarMaterial = makeAvatarMaterial();
    this.avatarSprite = new THREE.Sprite(avatarMaterial);
    this.avatarSprite.center.set(0.5, 0.46);
    this.avatarSprite.position.y = 1.72;
    this.avatarSprite.scale.set(2.78, 3.58, 1);
    this.avatarSprite.renderOrder = 3;
    this.group.add(this.avatarSprite);
    this.avatarPreviousSprite = new THREE.Sprite(makeAvatarMaterial());
    this.avatarPreviousSprite.center.copy(this.avatarSprite.center);
    this.avatarPreviousSprite.position.copy(this.avatarSprite.position);
    this.avatarPreviousSprite.scale.copy(this.avatarSprite.scale);
    this.avatarPreviousSprite.renderOrder = 2;
    this.avatarPreviousSprite.visible = false;
    this.group.add(this.avatarPreviousSprite);
    this.avatarDirectionSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      transparent: true,
      alphaTest: 0.03,
      depthWrite: false,
      depthTest: true,
      toneMapped: false
    }));
    this.avatarDirectionSprite.center.copy(this.avatarSprite.center);
    this.avatarDirectionSprite.position.copy(this.avatarSprite.position);
    this.avatarDirectionSprite.scale.copy(this.avatarSprite.scale);
    this.avatarDirectionSprite.renderOrder = 4;
    this.avatarDirectionSprite.visible = false;
    this.group.add(this.avatarDirectionSprite);
    this.refreshAvatarSprite();
    scene.add(this.group);
  }

  get forward() {
    return this.forwardVector.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
  }

  get moveSpeed() {
    return BASE_MOVE_SPEED * speedMultiplier(this.number, this.boosting);
  }

  get turnSpeed() {
    return BASE_TURN_SPEED * speedMultiplier(this.number, this.boosting);
  }

  get attackRange() {
    return BASE_ATTACK_RANGE * attackRangeMultiplier(this.number, this.boosting)
      * (this.rangeBuffTimer > 0 ? ATTACK_RANGE_BUFF_MULTIPLIER : 1);
  }

  get attackDamageMultiplier() {
    return this.damageBuffTimer > 0 ? ATTACK_DAMAGE_BUFF_MULTIPLIER : 1;
  }

  get attacksPerSecond() {
    return meleeAttackSpeed(this.number, this.boosting);
  }

  get meleeAttackInterval() {
    return 1 / this.attacksPerSecond;
  }

  refreshAvatarSprite(pose = this.avatarPose, forceImmediate = false, prewarmGpu = false) {
    if (!this.avatarSprite || this.suspendAvatarRefresh) return;
    const appearance = {
      shirtColor: this.shirtMaterial.color,
      pantsColor: this.pantsMaterial.color,
      shoeColor: this.shoeMaterial.color,
      skinColor: this.skinColor,
      hairColor: this.hairColor,
      hairStyle: this.hairStyle,
      outfitStyle: this.outfitStyle,
      pantsStyle: this.pantsStyle,
      shoesStyle: this.shoesStyle,
      weaponType: this.weaponType,
      meleeWeapon: this.meleeWeapon,
      meleeStyle: this.meleeStyle
    };
    const generatedArtReady = fighterLineupImage.complete && fighterLineupImage.naturalWidth > 0;
    const resolution = this.isPlayer ? PLAYER_AVATAR_RESOLUTION : BOT_AVATAR_RESOLUTION;
    const baseKey = [
      generatedArtReady ? 'generated-v9-motion-blend' : 'fallback', resolution,
      this.outfitStyle, this.hairStyle, this.pantsStyle, this.shoesStyle,
      canvasColor(this.shirtMaterial.color), canvasColor(this.pantsMaterial.color),
      canvasColor(this.shoeMaterial.color), this.hairColor
    ].join('|');
    if (baseKey !== this.avatarBaseKey) {
      this.avatarPreviousSprite.visible = false;
      this.avatarPreviousSprite.material.map = null;
      this.avatarFrameBlend = 1;
      for (const texture of this.avatarTextureCache.values()) texture.dispose();
      this.avatarTextureCache.clear();
      for (const texture of Object.values(this.avatarDirectionTextures)) texture.dispose();
      this.avatarDirectionTextures = {};
      this.avatarBaseKey = baseKey;
      this.avatarBaseCanvas = generatedArtReady ? buildGeneratedAvatarBase(appearance, resolution) : null;
    }
    const appearanceKey = [
      baseKey,
      this.weaponType || 'melee', this.meleeWeapon, this.meleeStyle,
      pose.mode, pose.walkPhase, pose.attackPhase, pose.recoil, pose.spin
    ].join('|');
    const applyAvatarTexture = (texture) => {
      const material = this.avatarSprite.material;
      const currentTexture = material.map;
      const shouldBlend = !performanceMode
        && currentTexture
        && currentTexture !== texture
        && (this.motionBlend > 0.02 || this.attackAnimation > 0 || this.gunRecoil > 0.03);
      if (shouldBlend) {
        const previousMaterial = this.avatarPreviousSprite.material;
        previousMaterial.map = currentTexture;
        if (!previousMaterial.userData.hasMap) {
          previousMaterial.userData.hasMap = true;
          previousMaterial.needsUpdate = true;
        }
        this.avatarPreviousSprite.visible = true;
        this.avatarFrameBlend = 0;
      } else {
        this.avatarPreviousSprite.visible = false;
        this.avatarFrameBlend = 1;
      }
      material.map = texture;
      // Once USE_MAP is compiled, swapping cached frame textures must not bump
      // the material program version every animation frame.
      if (!material.userData.hasMap) {
        material.userData.hasMap = true;
        material.needsUpdate = true;
      }
    };
    const cachedTexture = this.avatarTextureCache.get(appearanceKey);
    if (cachedTexture) {
      this.avatarTextureCache.delete(appearanceKey);
      this.avatarTextureCache.set(appearanceKey, cachedTexture);
      applyAvatarTexture(cachedTexture);
      if (prewarmGpu && typeof renderer.initTexture === 'function') renderer.initTexture(cachedTexture);
      return;
    }
    // Canvas drawing plus a GPU texture upload is the largest frame-time spike.
    // During live combat bots reuse setup-screen frames instead of rasterizing
    // new animation frames; their world-space motion remains fully continuous.
    if (running && !this.isPlayer && !forceImmediate) {
      // Bot movement still uses cached walk/attack poses prepared on the setup
      // screen. Never rasterize a missing frame in live combat: one canvas draw
      // plus texture upload is enough to cause a visible hitch on lower-end PCs.
      return;
    }
    if (this.avatarTextureQueuedKey === appearanceKey) this.avatarTextureQueuedKey = '';
    const canvas = generatedArtReady
      ? drawGeneratedAvatar(appearance, pose, resolution, this.avatarBaseCanvas)
      : drawIllustratedAvatar(appearance);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 1;
    applyAvatarTexture(texture);
    this.avatarTextureCache.set(appearanceKey, texture);
    if (prewarmGpu && typeof renderer.initTexture === 'function') renderer.initTexture(texture);
    const cacheLimit = this.isPlayer ? 44 : 14;
    while (this.avatarTextureCache.size > cacheLimit) {
      const oldestKey = this.avatarTextureCache.keys().next().value;
      const oldestTexture = this.avatarTextureCache.get(oldestKey);
      this.avatarTextureCache.delete(oldestKey);
      if (oldestTexture !== this.avatarSprite.material.map) oldestTexture.dispose();
    }
  }

  setHairStyle(style) {
    this.hairStyle = style;
    this.shortHair.visible = style === 'short';
    this.capGroup.visible = style === 'cap';
    this.spikyHair.visible = style === 'spiky';
    this.longHair.visible = style === 'long';
    this.beanieGroup.visible = style === 'beanie';
    this.mohawkHair.visible = style === 'mohawk';
    this.cowboyHat.visible = style === 'cowboy';
    this.ponytailGroup.visible = style === 'ponytail';
    this.helmetGroup.visible = style === 'helmet';
    this.wizardHat.visible = style === 'wizard';
    this.headphonesGroup.visible = style === 'headphones';
    this.crownHat.visible = style === 'crown';
    this.refreshAvatarSprite();
  }

  setOutfitStyle(style) {
    this.outfitStyle = style;
    this.jacketGroup.visible = style === 'jacket';
    this.hoodieGroup.visible = style === 'hoodie';
    this.vestGroup.visible = style === 'vest';
    this.armorGroup.visible = style === 'armor';
    this.suitGroup.visible = style === 'suit';
    this.trenchGroup.visible = style === 'trench';
    this.jerseyGroup.visible = style === 'jersey';
    this.robeGroup.visible = style === 'robe';
    this.bomberGroup.visible = style === 'bomber';
    this.refreshAvatarSprite();
  }

  setPantsStyle(style) {
    this.pantsStyle = style;
    const isShorts = style === 'shorts';
    this.leftLeg.scale.y = isShorts ? 0.5 : 1.1;
    this.rightLeg.scale.y = isShorts ? 0.5 : 1.1;
    this.leftLeg.position.y = isShorts ? 0.66 : 0.43;
    this.rightLeg.position.y = isShorts ? 0.66 : 0.43;
    this.lowerLegs.forEach((leg) => { leg.visible = isShorts; });
    this.cargoPockets.visible = style === 'cargo';
    this.pantsStripes.visible = style === 'striped';
    this.kneeGuards.visible = style === 'guard';
    this.jeansDetails.visible = style === 'jeans';
    this.joggerDetails.visible = style === 'joggers';
    this.camoDetails.visible = style === 'camo';
    this.formalPantsDetails.visible = style === 'formal';
    this.techPantsDetails.visible = style === 'tech';
    this.refreshAvatarSprite();
  }

  setShoesStyle(style) {
    this.shoesStyle = style;
    const hasCuff = style === 'boots' || style === 'high' || style === 'combat';
    this.shoeCuffs.visible = hasCuff;
    this.shoeCuffs.scale.y = style === 'high' ? 0.58 : style === 'combat' ? 1.18 : 1;
    this.shoeMaterial.emissive.set(style === 'neon' ? this.shoeMaterial.color : 0x000000);
    this.shoeMaterial.emissiveIntensity = style === 'neon' ? 1.8 : 0;
    this.runningShoeDetails.visible = style === 'running';
    this.leatherShoeDetails.visible = style === 'leather';
    this.combatShoeDetails.visible = style === 'combat';
    this.canvasShoeDetails.visible = style === 'canvas';
    this.goldShoeDetails.visible = style === 'gold';
    this.shoes.forEach((shoe) => {
      shoe.scale.set(
        style === 'boots' || style === 'combat' ? 1.12 : style === 'leather' ? 0.95 : 1,
        style === 'boots' || style === 'combat' ? 1.15 : style === 'sandals' ? 0.48 : 1,
        style === 'sneakers' || style === 'sandals' || style === 'running' ? 1.12 : style === 'leather' ? 1.08 : 1
      );
    });
    this.refreshAvatarSprite();
  }

  setGun(type, ammo = 0) {
    this.weaponType = type;
    this.ammo = type ? ammo : 0;
    if (type) {
      this.shootCooldown = 0;
      this.shootReadyAt = 0;
    }
    this.sniperModel.visible = type === 'sniper' && this.ammo > 0;
    this.smgModel.visible = type === 'smg' && this.ammo > 0;
    this.rocketModel.visible = type === 'rocket' && this.ammo > 0;
    let displayPose = this.avatarPose;
    if (type && ((running && !this.isPlayer) || this.avatarPose.mode === 'attack')) {
      displayPose = { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 };
    } else if (type && this.avatarPose.mode === 'walk') {
      const walkFrame = Math.min(3, Math.floor((this.avatarPose.walkPhase || 0) * 4));
      displayPose = { mode: 'walk', walkPhase: (walkFrame + 0.5) / 4, attackPhase: -1, recoil: 0, spin: 0 };
    }
    this.refreshAvatarSprite(displayPose);
    updateWeaponHud(this);
  }

  setMeleeWeapon() {
    this.meleeWeapon = 'club';
    this.clubModel.visible = true;
    this.refreshAvatarSprite();
    updateWeaponHud(this);
  }

  setMeleeStyle(style) {
    if (!['club', 'sword', 'axe', 'dagger', 'hammer', 'spear', 'katana', 'mace', 'scythe', 'staff', 'cleaver', 'rapier', 'chickenLeg', 'pickaxe', 'shovel', 'greatClub'].includes(style)) return;
    this.meleeStyle = style;
    this.refreshAvatarSprite();
    updateWeaponHud(this);
  }

  activateInvincibility(seconds = 10) {
    this.invincibleTimer = Math.max(this.invincibleTimer, seconds);
    this.boostDrain = 0;
    this.shield.visible = true;
  }

  activateCombatBuff(type, seconds = COMBAT_BUFF_SECONDS) {
    if (type === 'range') {
      this.rangeBuffTimer = Math.max(this.rangeBuffTimer, seconds);
      this.rangeBuffAura.visible = true;
      this.updateTierVisuals();
    } else if (type === 'damage') {
      this.damageBuffTimer = Math.max(this.damageBuffTimer, seconds);
      this.damageBuffAura.visible = true;
    }
    updateWeaponHud(this);
  }

  clearCombatBuffs() {
    this.rangeBuffTimer = 0;
    this.damageBuffTimer = 0;
    this.rangeBuffAura.visible = false;
    this.damageBuffAura.visible = false;
    this.combatBuffHudKey = '';
    this.updateTierVisuals();
    updateWeaponHud(this);
  }

  setAppearance({ shirt, hair, hairColor, outfit, pants, pantsStyle, shoes, shoesStyle, meleeStyle } = {}) {
    const wasSuspended = this.suspendAvatarRefresh;
    this.suspendAvatarRefresh = true;
    try {
      if (shirt) {
        const shirtColor = new THREE.Color(shirt);
        this.color = shirtColor.getHex();
        this.shirtMaterial.color.copy(shirtColor);
        this.shirtMaterial.emissive.copy(shirtColor);
        this.label.userData.color = shirt;
        this.label.userData.value = null;
        updateNumberSprite(this.label, this.number);
      }
      if (hair) this.setHairStyle(hair);
      if (hairColor) {
        this.hairColor = hairColor;
        this.hairMaterial.color.set(hairColor);
      }
      if (outfit) this.setOutfitStyle(outfit);
      if (pants) this.pantsMaterial.color.set(pants);
      if (pantsStyle) this.setPantsStyle(pantsStyle);
      if (shoes) {
        this.shoeMaterial.color.set(shoes);
        if (this.shoesStyle === 'neon') this.shoeMaterial.emissive.set(shoes);
      }
      if (shoesStyle) this.setShoesStyle(shoesStyle);
      if (meleeStyle) this.setMeleeStyle(meleeStyle);
    } finally {
      this.suspendAvatarRefresh = wasSuspended;
    }
    if (!wasSuspended) this.refreshAvatarSprite();
  }

  setNumber(value) {
    this.number = Math.max(0, Math.round(value));
    scheduleNumberLabelUpdate(this);
    this.updateTierVisuals();
    if (this.isPlayer) playerNumberEl.textContent = this.number;
  }

  updateTierVisuals() {
    this.visualTier = effectiveTier(this.number, this.boosting);
    const scale = sizeMultiplier(this.number, this.boosting);
    this.model.scale.setScalar(scale);
    this.groundShadow.scale.setScalar(scale * 1.08);
    this.shield.scale.set(scale * 1.06, scale * 1.22, scale * 1.06);
    this.label.position.y = 3.94 * scale;
    this.avatarSprite.scale.set(2.78 * scale, 3.58 * scale, 1);
    this.avatarSprite.position.y = 1.72 * scale;
    if (this.avatarDirectionSprite) {
      this.avatarDirectionSprite.scale.copy(this.avatarSprite.scale);
      this.avatarDirectionSprite.position.copy(this.avatarSprite.position);
    }
    if (this.zoneGroup) {
      const rangeScale = this.attackRange / BASE_ATTACK_RANGE;
      this.zoneGroup.scale.set(rangeScale, 1, rangeScale);
    }
    this.backZoneGroup.scale.setScalar(scale);
  }

  turnToward(targetYaw, dt) {
    this.yaw += THREE.MathUtils.clamp(angleDelta(this.yaw, targetYaw), -this.turnSpeed * dt, this.turnSpeed * dt);
    this.group.rotation.y = this.yaw;
  }

  move(direction, dt, factor = 1) {
    if (direction.lengthSq() < 0.001) return;
    this.isMoving = true;
    direction.normalize();
    const previousPosition = this.movePreviousPosition.copy(this.group.position);
    this.group.position.addScaledVector(direction, this.moveSpeed * factor * dt);
    keepInsideArena(this.group.position);
    const collisionRadius = 0.66 * sizeMultiplier(this.number, this.boosting);
    const wallHit = segmentArenaWallHit(previousPosition, this.group.position, collisionRadius);
    if (wallHit) {
      const attemptedMovement = this.moveAttemptedVector.copy(this.group.position).sub(previousPosition);
      const contactTime = Math.max(0, wallHit.time - 0.002);
      const contactPosition = this.moveContactPosition.copy(previousPosition).lerp(this.group.position, contactTime);
      const tangent = new THREE.Vector3(Math.cos(wallHit.wall.yaw), 0, -Math.sin(wallHit.wall.yaw));
      const remainingMovement = attemptedMovement.multiplyScalar(1 - wallHit.time);
      contactPosition.addScaledVector(tangent, remainingMovement.dot(tangent));
      this.group.position.copy(contactPosition);
    }
    resolveArenaWallCollisions(this.group.position, collisionRadius);
    keepInsideArena(this.group.position);
  }

  tickVisual(dt) {
    if (this.visualTier !== effectiveTier(this.number, this.boosting)) this.updateTierVisuals();
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.shootCooldown = this.shootReadyAt > 0
      ? Math.max(0, (this.shootReadyAt - performance.now()) / 1000)
      : Math.max(0, this.shootCooldown - dt);
    this.gunRecoil = Math.max(0, this.gunRecoil - dt * 8.5);
    this.hitPulse = Math.max(0, this.hitPulse - dt * 4);
    this.hitReaction = Math.max(0, this.hitReaction - dt * 4.2);
    let attackPhase = -1;
    if (this.attackAnimation > 0) {
      this.attackAnimation = Math.max(0, this.attackAnimation - dt);
      attackPhase = 1 - this.attackAnimation / this.attackAnimationDuration;
      if (!this.attackResolved && attackPhase >= 0.34) {
        this.attackResolved = true;
        if (networkMode !== 'guest') resolveMeleeHit(this);
      }
    }
    const previousInvincible = this.invincibleTimer;
    this.invincibleTimer = Math.max(0, this.invincibleTimer - dt);
    this.shield.visible = this.invincibleTimer > 0;
    this.shield.rotation.y += dt * 0.8;
    this.shield.material.opacity = 0.18 + Math.sin(environmentTime * 8) * 0.055;
    this.shieldRings.forEach((ring, index) => {
      ring.rotation.y += dt * (index % 2 ? -2.4 : 2.4);
      ring.rotation.z += dt * (index === 2 ? 2.1 : 0.8);
      ring.material.opacity = 0.65 + Math.sin(environmentTime * 10 + index * 1.8) * 0.28;
    });
    if (this.attackRangeArc) {
      this.attackRangeArc.material.opacity = 0.72 + Math.sin(environmentTime * 6) * 0.12;
    }
    if (this.backZoneSector) {
      const backPulse = Math.sin(environmentTime * 9 + this.yaw);
      this.backZoneSector.material.opacity = 0.86 + backPulse * 0.1;
      if (this.backZoneLabel) this.backZoneLabel.material.opacity = 0.9 + backPulse * 0.1;
    }
    if (previousInvincible > 0 && this.invincibleTimer === 0 && this.isPlayer) {
      flashMessage('无敌护符效果结束', 0.9);
    }
    this.body.material.emissiveIntensity = 0.06 + this.hitPulse * 2.2 + (this.boosting ? 0.42 : 0);
    const previousRangeBuff = this.rangeBuffTimer;
    const previousDamageBuff = this.damageBuffTimer;
    this.rangeBuffTimer = Math.max(0, this.rangeBuffTimer - dt);
    this.damageBuffTimer = Math.max(0, this.damageBuffTimer - dt);
    this.rangeBuffAura.visible = this.rangeBuffTimer > 0;
    this.damageBuffAura.visible = this.damageBuffTimer > 0;
    if (this.rangeBuffAura.visible) {
      const pulse = 1 + Math.sin(environmentTime * 8) * 0.11;
      this.rangeBuffAura.scale.setScalar(pulse * this.attackRange / BASE_ATTACK_RANGE);
      this.rangeBuffAura.material.opacity = 0.58 + Math.sin(environmentTime * 11) * 0.18;
    }
    if (this.damageBuffAura.visible) {
      const pulse = 1 + Math.sin(environmentTime * 11) * 0.14;
      this.damageBuffAura.scale.setScalar(pulse);
      this.damageBuffAura.rotation.z += dt * 2.8;
      this.damageBuffAura.material.opacity = 0.66 + Math.sin(environmentTime * 14) * 0.2;
    }
    if (previousRangeBuff > 0 && this.rangeBuffTimer === 0) {
      this.updateTierVisuals();
      if (this.isPlayer) flashMessage('攻击范围增益结束', 0.9);
    }
    if (previousDamageBuff > 0 && this.damageBuffTimer === 0 && this.isPlayer) flashMessage('攻击伤害增益结束', 0.9);
    const combatBuffHudKey = `${Math.ceil(this.rangeBuffTimer)}:${Math.ceil(this.damageBuffTimer)}`;
    if (combatBuffHudKey !== this.combatBuffHudKey) {
      this.combatBuffHudKey = combatBuffHudKey;
      updateWeaponHud(this);
    }
    const movingNow = this.isMoving;
    const motionEase = 1 - Math.exp(-dt * (movingNow ? 11 : 7.5));
    this.motionBlend = THREE.MathUtils.lerp(this.motionBlend, movingNow ? 1 : 0, motionEase);
    if (movingNow || this.motionBlend > 0.01) {
      this.walkTime += dt * this.moveSpeed * (0.55 + this.motionBlend * 1.15);
    }
    let torsoTwist = 0;
    let strikePower = 0;
    if (attackPhase >= 0) {
      const smooth01 = (value) => {
        const clamped = THREE.MathUtils.clamp(value, 0, 1);
        return clamped * clamped * (3 - 2 * clamped);
      };
      if (attackPhase < 0.3) {
        const windup = attackPhase / 0.3;
        const eased = smooth01(windup);
        torsoTwist = 0.2 * eased;
        strikePower = windup * 0.35;
      } else if (attackPhase < 0.62) {
        const strike = (attackPhase - 0.3) / 0.32;
        const eased = 1 - Math.pow(1 - strike, 3);
        torsoTwist = THREE.MathUtils.lerp(0.2, -0.3, eased);
        strikePower = Math.sin(strike * Math.PI * 0.72);
      } else {
        const recover = (attackPhase - 0.62) / 0.38;
        const eased = smooth01(recover);
        torsoTwist = THREE.MathUtils.lerp(-0.3, 0, eased);
        strikePower = 1 - eased;
      }
    }
    const idleBreath = Math.sin(environmentTime * 3.2 + this.yaw) * 0.014;
    const stepBounce = THREE.MathUtils.lerp(
      idleBreath,
      Math.abs(Math.sin(this.walkTime * 2)) * 0.075,
      this.motionBlend
    );
    const reactionWave = this.hitReaction > 0 ? Math.sin((1 - this.hitReaction) * Math.PI) * this.hitReaction : 0;
    const avatarMode = attackPhase >= 0
      ? 'attack'
      : movingNow || this.motionBlend > 0.08
        ? 'walk'
        : this.gunRecoil > 0.03
          ? 'fire'
          : 'idle';
    const walkFrameCount = this.isPlayer
      ? (this.weaponType ? 4 : 8)
      : (this.weaponType ? 2 : 3);
    const attackFrameCount = this.isPlayer ? 8 : 4;
    const walkFrame = Math.floor((((this.walkTime / (Math.PI * 2)) % 1 + 1) % 1) * walkFrameCount);
    const attackFrame = attackPhase >= 0 ? Math.min(attackFrameCount - 1, Math.floor(attackPhase * attackFrameCount)) : 0;
    const recoilFrame = Math.min(1, Math.floor(this.gunRecoil * 2));
    const spinFrameCount = 1;
    const spinFrame = 0;
    const activeWalkFrame = avatarMode === 'walk' ? walkFrame : 0;
    const activeAttackFrame = avatarMode === 'attack' ? attackFrame : 0;
    const activeRecoilFrame = this.weaponType && this.isPlayer ? recoilFrame : 0;
    const avatarFrameKey = `${avatarMode}:${activeWalkFrame}:${activeAttackFrame}:${activeRecoilFrame}:${spinFrame}:${this.weaponType || this.meleeWeapon}`;
    if (avatarFrameKey !== this.avatarFrameKey) {
      this.avatarFrameKey = avatarFrameKey;
      this.avatarPose = {
        mode: avatarMode,
        walkPhase: avatarMode === 'walk' ? (activeWalkFrame + 0.5) / walkFrameCount : 0,
        attackPhase: avatarMode === 'attack' ? activeAttackFrame / (attackFrameCount - 1) : -1,
        recoil: activeRecoilFrame,
        spin: spinFrame * Math.PI * 2 / spinFrameCount
      };
      this.refreshAvatarSprite(this.avatarPose);
    }
    const cameraFacingYaw = Math.atan2(
      camera.position.x - this.group.position.x,
      camera.position.z - this.group.position.z
    );
    const facingDifference = angleDelta(cameraFacingYaw, this.yaw);
    const absoluteFacingDifference = Math.abs(facingDifference);
    const nextFacing = absoluteFacingDifference < Math.PI * 0.25
      ? 'front'
      : absoluteFacingDifference > Math.PI * 0.75
        ? 'back'
        : facingDifference > 0 ? 'sideRight' : 'sideLeft';
    this.avatarFacing = nextFacing;
    const avatarScale = sizeMultiplier(this.number, this.boosting);
    const strikeStretch = 1 + strikePower * 0.07;
    const strikeSquash = 1 - strikePower * 0.035;
    const facingMirror = nextFacing === 'sideLeft' ? -1 : 1;
    this.avatarSprite.scale.set(2.78 * avatarScale * strikeStretch, 3.58 * avatarScale * strikeSquash, 1);
    const mirrorValue = facingMirror < 0 ? 1 : 0;
    this.avatarSprite.material.userData.mirrorX = mirrorValue;
    const mirrorShader = this.avatarSprite.material.userData.mirrorShader;
    if (mirrorShader) mirrorShader.uniforms.avatarMirrorX.value = mirrorValue;
    this.avatarSprite.position.y = 1.72 * avatarScale + stepBounce * 0.32;
    this.avatarSprite.material.rotation = THREE.MathUtils.lerp(
      this.avatarSprite.material.rotation,
      this.hitSide * reactionWave * 0.09 + torsoTwist * 0.26,
      1 - Math.exp(-dt * 26)
    );
    const avatarOpacity = 0.96 + Math.min(0.04, this.hitPulse * 0.04);
    if (this.avatarPreviousSprite.visible) {
      this.avatarFrameBlend = Math.min(1, this.avatarFrameBlend + dt / this.avatarFrameBlendDuration);
      const blend = this.avatarFrameBlend * this.avatarFrameBlend * (3 - 2 * this.avatarFrameBlend);
      this.avatarSprite.material.opacity = avatarOpacity * (0.28 + blend * 0.72);
      this.avatarPreviousSprite.material.opacity = avatarOpacity * (1 - blend);
      this.avatarPreviousSprite.scale.copy(this.avatarSprite.scale);
      this.avatarPreviousSprite.position.copy(this.avatarSprite.position);
      this.avatarPreviousSprite.material.rotation = this.avatarSprite.material.rotation;
      this.avatarPreviousSprite.material.userData.mirrorX = mirrorValue;
      const previousMirrorShader = this.avatarPreviousSprite.material.userData.mirrorShader;
      if (previousMirrorShader) previousMirrorShader.uniforms.avatarMirrorX.value = mirrorValue;
      if (this.avatarFrameBlend >= 1) this.avatarPreviousSprite.visible = false;
    } else {
      this.avatarSprite.material.opacity = avatarOpacity;
    }
    // The illustrated character always faces the camera. Only the weapon/pose
    // texture mirrors for left aim, keeping the same front portrait at 360°.
    this.avatarDirectionSprite.visible = false;
    this.groundShadow.material.opacity = movingNow ? 0.23 : 0.3;
    this.isMoving = false;
  }
}

const player = new Fighter({
  name: '你',
  color: 0x51d9ff,
  position: new THREE.Vector3(0, 0, 0),
  isPlayer: true
});
fighters.push(player);

const botColors = [
  0xff6577, 0xffc857, 0xb982ff, 0x62e29a, 0xff8f5a, 0x4f8cff, 0xf06fd4,
  0x8bd34b, 0xff6b9c, 0x5ed7c6, 0xe6a84c, 0x8c82ff, 0xe76f51, 0x76c7ff
];
for (let i = 0; i < 14; i += 1) {
  const angle = (i / 14) * Math.PI * 2 + (i % 2 ? 0.16 : 0);
  const radius = i % 2 ? 9.2 : 16.4;
  const bot = new Fighter({
    name: `玩家${i + 2}`,
    color: botColors[i],
    position: new THREE.Vector3(Math.sin(angle) * radius, 0, Math.cos(angle) * radius)
  });
  bot.aiDecisionTimer = (i % 7) * 0.014;
  // A majority pressure the leader while the rest keep local fights alive.
  bot.aiLeaderBias = i % 5 < 3;
  bot.setAppearance({
    hair: ['short', 'undercut', 'curly', 'sidepart', 'samuraiBun', 'cap', 'fedora', 'bucket', 'aviator', 'foxEars', 'spiky', 'long', 'headphones', 'crown'][i % 14],
    hairColor: ['#4b2a1c', '#161b24', '#e4c06a', '#dce8f2', '#b84e4e', '#526fd8', '#854fc7'][i % 7],
    outfit: ['tshirt', 'ninja', 'knight', 'tracksuit', 'academy', 'winter', 'cyber', 'monk', 'dragon', 'hoodie', 'armor', 'ranger', 'pirate', 'ceremonial'][i % 14],
    pants: ['#253248', '#563b73', '#345443', '#6a4432', '#151a24', '#b79b68', '#e7edf5', '#c8434f', '#236aa8', '#c69b34'][i % 10],
    pantsStyle: ['pants', 'tactical', 'ninja', 'explorer', 'winter', 'cyber', 'dragon', 'cargo', 'jeans', 'joggers', 'camo', 'samurai', 'loose', 'royal'][i % 14],
    shoes: ['#18202c', '#f3f6fa', '#ff784e', '#58e0b2', '#5c8dff', '#c27cff', '#ffd052', '#ff5d88'][i % 8],
    shoesStyle: ['sneakers', 'boots', 'high', 'sandals', 'neon', 'running', 'leather', 'combat', 'canvas', 'gold', 'greaves', 'ninja', 'hiking', 'royal', 'techboots'][i % 15]
  });
  fighters.push(bot);
}

// Weak zones and ground shadows share geometry/material and change only by
// transform. Instancing turns 30 transparent draw calls into two.
const fighterShadowInstances = new THREE.InstancedMesh(
  new THREE.CircleGeometry(0.68, 22),
  new THREE.MeshBasicMaterial({ color: 0x07111c, transparent: true, opacity: 0.27, depthWrite: false }),
  fighters.length
);
fighterShadowInstances.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
fighterShadowInstances.frustumCulled = false;
fighterShadowInstances.renderOrder = 0;
fighterShadowInstances.visible = false;
scene.add(fighterShadowInstances);

const fighterWeakZoneMaterial = new THREE.MeshBasicMaterial({
  map: sharedBackZoneTexture,
  transparent: true,
  opacity: 0.9,
  side: THREE.DoubleSide,
  depthWrite: false,
  alphaTest: 0.015
});
const fighterWeakZoneInstances = new THREE.InstancedMesh(sharedBackZoneGeometry, fighterWeakZoneMaterial, fighters.length);
fighterWeakZoneInstances.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
fighterWeakZoneInstances.frustumCulled = false;
fighterWeakZoneInstances.renderOrder = 1;
fighterWeakZoneInstances.visible = false;
scene.add(fighterWeakZoneInstances);
fighters.forEach((fighter) => { fighter.groundShadow.visible = false; });

const overlayPlaneQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
const overlayYawQuaternion = new THREE.Quaternion();
const overlayCombinedQuaternion = new THREE.Quaternion();
const overlayUpAxis = new THREE.Vector3(0, 1, 0);
function updateFighterGroundOverlays() {
  fighterShadowInstances.visible = running;
  fighterWeakZoneInstances.visible = running;
  if (!running) return;
  for (let index = 0; index < fighters.length; index += 1) {
    const fighter = fighters[index];
    const scale = fighter.active ? sizeMultiplier(fighter.number, fighter.boosting) : 0;
    instanceDummy.position.set(fighter.group.position.x, 0.028, fighter.group.position.z);
    instanceDummy.quaternion.copy(overlayPlaneQuaternion);
    instanceDummy.scale.setScalar(scale * 1.08);
    instanceDummy.updateMatrix();
    fighterShadowInstances.setMatrixAt(index, instanceDummy.matrix);

    instanceDummy.position.y = 0.044;
    overlayYawQuaternion.setFromAxisAngle(overlayUpAxis, fighter.yaw);
    overlayCombinedQuaternion.multiplyQuaternions(overlayYawQuaternion, overlayPlaneQuaternion);
    instanceDummy.quaternion.copy(overlayCombinedQuaternion);
    instanceDummy.scale.setScalar(scale);
    instanceDummy.updateMatrix();
    fighterWeakZoneInstances.setMatrixAt(index, instanceDummy.matrix);
  }
  fighterShadowInstances.instanceMatrix.needsUpdate = true;
  fighterWeakZoneInstances.instanceMatrix.needsUpdate = true;
  fighterWeakZoneMaterial.opacity = 0.88 + Math.sin(environmentTime * 7.5) * 0.07;
}

const previewCanvas = document.querySelector('#avatar-preview');
const previewRenderer = new THREE.WebGLRenderer({
  canvas: previewCanvas,
  antialias: true,
  alpha: true,
  powerPreference: 'high-performance'
});
previewRenderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
previewRenderer.setSize(230, 300, false);
previewRenderer.outputColorSpace = THREE.SRGBColorSpace;
previewRenderer.shadowMap.enabled = false;
const previewScene = new THREE.Scene();
const previewCamera = new THREE.PerspectiveCamera(34, 230 / 300, 0.1, 30);
previewCamera.position.set(3.5, 2.8, 5.7);
previewCamera.lookAt(0, 1.72, 0);
previewScene.add(new THREE.HemisphereLight(0xcdeaff, 0x182030, 2.7));
const previewLight = new THREE.DirectionalLight(0xffffff, 3.2);
previewLight.position.set(-3, 5, 4);
previewLight.castShadow = true;
previewScene.add(previewLight);
const previewFloor = new THREE.Mesh(
  new THREE.CircleGeometry(1.5, 32),
  new THREE.MeshStandardMaterial({ color: 0x253b56, roughness: 0.84 })
);
previewFloor.rotation.x = -Math.PI / 2;
previewFloor.receiveShadow = true;
previewScene.add(previewFloor);
let previewModel = null;
function rebuildAvatarPreview() {
  if (previewModel) previewScene.remove(previewModel);
  previewModel = player.avatarSprite.clone();
  previewModel.material = player.avatarSprite.material.clone();
  previewModel.material.depthTest = false;
  previewModel.material.depthWrite = false;
  previewModel.renderOrder = 20;
  previewModel.scale.set(2.72, 3.56, 1);
  previewModel.position.y = 1.74;
  previewScene.add(previewModel);
}
rebuildAvatarPreview();
let avatarPrewarmToken = 0;
let playerPrewarmTimer = 0;
let playerPrewarmToken = 0;
let playerPrewarmReady = false;
let pendingStartAfterPrewarm = false;
function schedulePlayerAvatarPrewarm() {
  const token = ++playerPrewarmToken;
  playerPrewarmReady = false;
  clearTimeout(playerPrewarmTimer);
  playerPrewarmTimer = setTimeout(() => {
    if (running || token !== playerPrewarmToken) return;
    const meleeTasks = [
      { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 },
      ...Array.from({ length: 8 }, (_, index) => ({ mode: 'walk', walkPhase: (index + 0.5) / 8, attackPhase: -1, recoil: 0, spin: 0 })),
      ...Array.from({ length: 8 }, (_, index) => ({ mode: 'attack', walkPhase: 0, attackPhase: index / 7, recoil: 0, spin: 0 }))
    ].map((pose) => ({ weaponType: null, pose }));
    const gunTasks = ['smg', 'sniper', 'rocket'].flatMap((weaponType) => [
      { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 },
      ...Array.from({ length: 4 }, (_, index) => ({ mode: 'walk', walkPhase: (index + 0.5) / 4, attackPhase: -1, recoil: 0, spin: 0 })),
      { mode: 'fire', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 },
      { mode: 'fire', walkPhase: 0, attackPhase: -1, recoil: 1, spin: 0 }
    ].map((pose) => ({ weaponType, pose })));
    const tasks = [...meleeTasks, ...gunTasks];
    const originalWeaponType = player.weaponType;
    const originalAmmo = player.ammo;
    let index = 0;
    const restorePlayerWeapon = () => {
      player.weaponType = originalWeaponType;
      player.ammo = originalAmmo;
      player.refreshAvatarSprite({ mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 });
      rebuildAvatarPreview();
      playerPrewarmReady = true;
      if (networkRoomId && networkSocketOpen()) sendNetworkMessage({ type: 'ready', ready: true });
      if (pendingStartAfterPrewarm) {
        pendingStartAfterPrewarm = false;
        startRequestedRound();
      }
    };
    const schedule = window.requestIdleCallback
      ? (callback) => window.requestIdleCallback(callback, { timeout: 30 })
      : (callback) => setTimeout(() => callback(), 8);
    const warmNext = () => {
      if (running || token !== playerPrewarmToken) return;
      for (let batch = 0; batch < 2 && index < tasks.length; batch += 1) {
        const task = tasks[index++];
        player.weaponType = task.weaponType;
        player.ammo = task.weaponType ? 1 : 0;
        player.refreshAvatarSprite(task.pose, false, true);
      }
      if (index < tasks.length) schedule(warmNext);
      else restorePlayerWeapon();
    };
    schedule(warmNext);
  }, 90);
}
function scheduleBotAvatarPrewarm() {
  const token = ++avatarPrewarmToken;
  const meleePoses = [
    { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 },
    ...Array.from({ length: 3 }, (_, index) => ({ mode: 'walk', walkPhase: (index + 0.5) / 3, attackPhase: -1, recoil: 0, spin: 0 })),
    ...Array.from({ length: 4 }, (_, index) => ({ mode: 'attack', walkPhase: 0, attackPhase: index / 3, recoil: 0, spin: 0 }))
  ];
  const gunIdlePose = { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 };
  const tasks = fighters.slice(1).flatMap((fighter) => [
    ...meleePoses.map((pose) => ({ fighter, weaponType: null, pose })),
    ...['smg', 'sniper', 'rocket'].map((weaponType) => ({ fighter, weaponType, pose: gunIdlePose }))
  ]);
  let taskIndex = 0;
  const idleSchedule = window.requestIdleCallback
    ? (callback) => window.requestIdleCallback(callback, { timeout: 28 })
    : (callback) => setTimeout(() => callback({ timeRemaining: () => 8 }), 8);
  const warmNext = (deadline) => {
    if (token !== avatarPrewarmToken || running) return;
    let processed = 0;
    // Prepare a small fixed batch even when the idle callback reached its
    // timeout. Otherwise only one frame was produced every ~450 ms and quick
    // starts pushed expensive canvas/texture creation into live combat.
    while (taskIndex < tasks.length && processed < 4) {
      const { fighter, weaponType, pose } = tasks[taskIndex++];
      fighter.weaponType = weaponType;
      fighter.ammo = weaponType ? 1 : 0;
      fighter.refreshAvatarSprite(pose, false, true);
      processed += 1;
    }
    if (taskIndex < tasks.length) idleSchedule(warmNext);
    else fighters.slice(1).forEach((fighter) => {
      fighter.weaponType = null;
      fighter.ammo = 0;
      fighter.refreshAvatarSprite({ mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 });
    });
  };
  idleSchedule(warmNext);
}

function scheduleRemoteFighterAvatarPrewarm(fighter) {
  const token = (fighter.networkPrewarmToken || 0) + 1;
  fighter.networkPrewarmToken = token;
  const originalWeaponType = fighter.weaponType;
  const originalAmmo = fighter.ammo;
  const meleePoses = [
    { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 },
    ...Array.from({ length: 3 }, (_, index) => ({ mode: 'walk', walkPhase: (index + 0.5) / 3, attackPhase: -1, recoil: 0, spin: 0 })),
    ...Array.from({ length: 4 }, (_, index) => ({ mode: 'attack', walkPhase: 0, attackPhase: index / 3, recoil: 0, spin: 0 }))
  ];
  const tasks = [
    ...meleePoses.map((pose) => ({ weaponType: null, pose })),
    ...['smg', 'sniper', 'rocket'].map((weaponType) => ({
      weaponType,
      pose: { mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 }
    }))
  ];
  let taskIndex = 0;
  const restore = () => {
    fighter.weaponType = originalWeaponType;
    fighter.ammo = originalAmmo;
    fighter.refreshAvatarSprite({ mode: 'idle', walkPhase: 0, attackPhase: -1, recoil: 0, spin: 0 });
  };
  const schedule = window.requestIdleCallback
    ? (callback) => window.requestIdleCallback(callback, { timeout: 30 })
    : (callback) => setTimeout(callback, 8);
  const warmNext = () => {
    if (fighter.networkPrewarmToken !== token || running) {
      restore();
      return;
    }
    for (let batch = 0; batch < 4 && taskIndex < tasks.length; batch += 1) {
      const task = tasks[taskIndex++];
      fighter.weaponType = task.weaponType;
      fighter.ammo = task.weaponType ? 1 : 0;
      fighter.refreshAvatarSprite(task.pose, false, true);
    }
    if (taskIndex < tasks.length) schedule(warmNext);
    else restore();
  };
  schedule(warmNext);
}
const applyGeneratedCharacterArt = () => {
  fighters.forEach((fighter) => fighter.refreshAvatarSprite());
  rebuildAvatarPreview();
  schedulePlayerAvatarPrewarm();
  scheduleBotAvatarPrewarm();
};
if (fighterLineupImage.complete && fighterLineupImage.naturalWidth > 0) applyGeneratedCharacterArt();
else fighterLineupImage.addEventListener('load', applyGeneratedCharacterArt, { once: true });
fighterLineupImage.addEventListener('error', () => {
  playerPrewarmReady = true;
  if (networkRoomId && networkSocketOpen()) sendNetworkMessage({ type: 'ready', ready: true });
  if (pendingStartAfterPrewarm) {
    pendingStartAfterPrewarm = false;
    startRequestedRound();
  }
}, { once: true });

const leaderMarker = new THREE.Group();
const leaderBeam = new THREE.Mesh(
  new THREE.CylinderGeometry(0.24, 0.72, 30, 20, 1, true),
  new THREE.MeshBasicMaterial({
    color: 0xffd45e,
    transparent: true,
    opacity: 0.34,
    side: THREE.DoubleSide,
    depthWrite: false
  })
);
leaderBeam.position.y = 15;
leaderMarker.add(leaderBeam);
const leaderRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.65, 0.16, 10, 48),
  new THREE.MeshStandardMaterial({ color: 0xffe477, emissive: 0xff9f1a, emissiveIntensity: 4 })
);
leaderRing.rotation.x = Math.PI / 2;
leaderRing.position.y = 0.12;
leaderMarker.add(leaderRing);
const leaderOuterRing = new THREE.Mesh(
  new THREE.TorusGeometry(2.35, 0.08, 8, 56),
  new THREE.MeshBasicMaterial({ color: 0xffb52e, transparent: true, opacity: 0.8, depthWrite: false })
);
leaderOuterRing.rotation.x = Math.PI / 2;
leaderOuterRing.position.y = 0.1;
leaderMarker.add(leaderOuterRing);
const leaderCrown = new THREE.Group();
const crownMaterial = new THREE.MeshStandardMaterial({
  color: 0xffd84c,
  emissive: 0xff9b18,
  emissiveIntensity: 3.2,
  metalness: 0.65,
  roughness: 0.22
});
const crownBand = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.12, 8, 28), crownMaterial);
crownBand.rotation.x = Math.PI / 2;
leaderCrown.add(crownBand);
for (let index = 0; index < 5; index += 1) {
  const spike = new THREE.Mesh(new THREE.ConeGeometry(0.14, index === 2 ? 0.78 : 0.58, 7), crownMaterial);
  spike.position.set((index - 2) * 0.22, 0.34, 0);
  leaderCrown.add(spike);
}
leaderCrown.position.y = 4.45;
leaderMarker.add(leaderCrown);
const leaderLabel = makeNumberSprite('第一名', '#fff0a8');
leaderLabel.scale.set(3.25, 1.62, 1);
leaderLabel.position.y = 5.65;
leaderMarker.add(leaderLabel);
leaderMarker.visible = false;
scene.add(leaderMarker);
let currentLeader = null;
let leaderHighest = START_NUMBER;
let leaderActiveCount = fighters.length;
let leaderEvaluationTimer = 0;

function setTextIfChanged(element, value) {
  if (element.textContent !== value) element.textContent = value;
}

function updateLeaderMarker(dt) {
  leaderEvaluationTimer -= dt;
  if (leaderEvaluationTimer <= 0 || (currentLeader && !currentLeader.active)) {
    leaderEvaluationTimer = 0.1;
    let activeCount = 0;
    let highest = -Infinity;
    let uniqueLeader = null;
    let leaderCount = 0;
    for (const fighter of fighters) {
      if (!fighter.active) continue;
      activeCount += 1;
      if (fighter.number > highest) {
        highest = fighter.number;
        uniqueLeader = fighter;
        leaderCount = 1;
      } else if (fighter.number === highest) {
        leaderCount += 1;
      }
    }
    leaderActiveCount = activeCount;
    leaderHighest = activeCount ? highest : START_NUMBER;
    currentLeader = activeCount && leaderCount === 1 ? uniqueLeader : null;
  }
  if (!leaderActiveCount) {
    leaderMarker.visible = false;
    setTextIfChanged(leaderTextEl, '等待重生');
    return;
  }
  leaderMarker.visible = Boolean(currentLeader);
  if (!currentLeader) {
    setTextIfChanged(leaderTextEl, `多人并列 · ${leaderHighest}`);
    leaderArrowEl.style.transform = 'rotate(0deg)';
    return;
  }
  leaderMarker.position.set(currentLeader.group.position.x, 0, currentLeader.group.position.z);
  leaderRing.rotation.z += dt * 1.4;
  leaderOuterRing.rotation.z -= dt * 1.9;
  leaderCrown.rotation.y += dt * 1.6;
  const pulse = 1 + Math.sin(performance.now() * 0.007) * 0.13;
  leaderRing.scale.setScalar(pulse);
  leaderOuterRing.scale.setScalar(1.05 - (pulse - 1) * 0.55);
  leaderBeam.material.opacity = 0.28 + Math.sin(performance.now() * 0.006) * 0.1;
  if (currentLeader === player) {
    setTextIfChanged(leaderTextEl, `你 · ${currentLeader.number}（被全图标记）`);
    setTextIfChanged(leaderArrowEl, '👑');
    leaderArrowEl.style.transform = 'rotate(0deg)';
  } else {
    setTextIfChanged(leaderTextEl, `${currentLeader.name} · ${currentLeader.number}`);
    setTextIfChanged(leaderArrowEl, '▲');
    const offsetX = currentLeader.group.position.x - player.group.position.x;
    const offsetZ = currentLeader.group.position.z - player.group.position.z;
    const arrowAngle = Math.atan2(offsetX, -offsetZ) * 180 / Math.PI;
    leaderArrowEl.style.transform = `rotate(${arrowAngle}deg)`;
  }
}

const customStatusEl = document.querySelector('#custom-status');
document.querySelectorAll('[data-custom]').forEach((group) => {
  group.addEventListener('click', (event) => {
    const option = event.target.closest('button[data-value]');
    if (!option) return;
    group.querySelectorAll('button').forEach((button) => button.classList.remove('selected'));
    option.classList.add('selected');
    player.setAppearance({ [group.dataset.custom]: option.dataset.value });
    customStatusEl.textContent = `已应用：${option.getAttribute('aria-label') || option.textContent.trim()}`;
    customStatusEl.classList.remove('changed');
    requestAnimationFrame(() => customStatusEl.classList.add('changed'));
    rebuildAvatarPreview();
    schedulePlayerAvatarPrewarm();
    sendNetworkAppearance();
  });
});

const numberDrops = [];
const NUMBER_DROP_LIFETIME = 6;
const NUMBER_DROP_EDGE_MARGIN = 0.9;

function removeNumberDrop(index) {
  const drop = numberDrops[index];
  if (!drop) return;
  scene.remove(drop.group);
  drop.group.traverse((part) => {
    if (part.geometry) part.geometry.dispose();
    if (part.material) {
      if (part.material.map) part.material.map.dispose();
      part.material.dispose();
    }
  });
  numberDrops.splice(index, 1);
}

function containNumberDrop(drop) {
  const radiusLimit = ARENA_RADIUS - NUMBER_DROP_EDGE_MARGIN;
  const flatRadius = Math.hypot(drop.group.position.x, drop.group.position.z);
  if (flatRadius <= radiusLimit) return;
  const nx = drop.group.position.x / flatRadius;
  const nz = drop.group.position.z / flatRadius;
  drop.group.position.x = nx * radiusLimit;
  drop.group.position.z = nz * radiusLimit;
  const outwardSpeed = drop.velocity.x * nx + drop.velocity.z * nz;
  if (outwardSpeed > 0) {
    drop.velocity.x -= nx * outwardSpeed * 1.35;
    drop.velocity.z -= nz * outwardSpeed * 1.35;
  }
}

function spawnNumberDrop(target, attacker) {
  const group = new THREE.Group();
  const gem = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.33),
    new THREE.MeshStandardMaterial({
      color: 0x88f5ff,
      emissive: 0x1c9ab4,
      emissiveIntensity: 2.2,
      metalness: 0.25,
      roughness: 0.28,
      transparent: true
    })
  );
  gem.castShadow = true;
  group.add(gem);
  const label = makeNumberSprite(1, '#9af7ff');
  label.scale.set(0.72, 0.36, 1);
  label.position.y = 0.62;
  group.add(label);
  group.position.copy(target.group.position).add(new THREE.Vector3(0, 1.1, 0));
  keepInsideArena(group.position, NUMBER_DROP_EDGE_MARGIN);
  scene.add(group);

  const towardAttacker = attacker.group.position.clone().sub(target.group.position).setY(0).normalize();
  const sideways = new THREE.Vector3(-towardAttacker.z, 0, towardAttacker.x);
  const velocity = towardAttacker.multiplyScalar(4.2 + Math.random() * 1.6)
    .addScaledVector(sideways, (Math.random() - 0.5) * 2.4);
  velocity.y = 4.5 + Math.random() * 1.5;
  numberDrops.push({ group, velocity, age: 0, grounded: false, materials: [gem.material, label.material] });
}

function directionZoneFromPosition(position, target) {
  const offsetX = position.x - target.group.position.x;
  const offsetZ = position.z - target.group.position.z;
  const distance = Math.hypot(offsetX, offsetZ) || 1;
  const normalizedX = offsetX / distance;
  const normalizedZ = offsetZ / distance;
  const forwardX = Math.sin(target.yaw);
  const forwardZ = Math.cos(target.yaw);
  const forwardAmount = forwardX * normalizedX + forwardZ * normalizedZ;
  const rightAmount = forwardZ * normalizedX - forwardX * normalizedZ;
  if (forwardAmount >= Math.abs(rightAmount)) return 'front';
  if (forwardAmount <= -Math.abs(rightAmount)) return 'back';
  return rightAmount > 0 ? 'right' : 'left';
}

function directionZone(attacker, target) {
  return directionZoneFromPosition(attacker.group.position, target);
}

function targetInsideAttackArc(attacker, target, range = attacker.attackRange) {
  const offsetX = target.group.position.x - attacker.group.position.x;
  const offsetZ = target.group.position.z - attacker.group.position.z;
  const distanceSquared = offsetX * offsetX + offsetZ * offsetZ;
  if (distanceSquared <= 0.0001 || distanceSquared >= range * range) return false;
  const inverseDistance = 1 / Math.sqrt(distanceSquared);
  const forwardX = Math.sin(attacker.yaw);
  const forwardZ = Math.cos(attacker.yaw);
  return (offsetX * forwardX + offsetZ * forwardZ) * inverseDistance >= QUARTER_COS;
}

function isBehind(attacker, target) { return directionZone(attacker, target) === 'back'; }
function isFaceToFace(attacker, target) { return directionZone(attacker, target) === 'front'; }

function eliminate(target) {
  target.active = false;
  target.group.visible = false;
  target.respawnTimer = 3;
  target.boosting = false;
  target.invincibleTimer = 0;
  target.attackAnimation = 0;
  target.attackResolved = true;
  target.hitReaction = 0;
  target.shield.visible = false;
  target.clearCombatBuffs();
  target.setGun(null, 0);
  target.setMeleeWeapon('club');
  if (target.isPlayer) {
    playGameSound('defeat');
    respawnHud.classList.add('show');
    respawnTimeEl.textContent = target.respawnTimer.toFixed(1);
    flashMessage('你被击败了，3 秒后重生', 1.1);
  }
}

function respawnFighter(fighter) {
  const spawn = randomArenaPosition(2, ARENA_RADIUS - 4);
  fighter.group.position.copy(spawn);
  fighter.yaw = Math.random() * Math.PI * 2;
  fighter.group.rotation.y = fighter.yaw;
  fighter.setNumber(START_NUMBER);
  fighter.attackCooldown = 0.8;
  fighter.attackAnimation = 0;
  fighter.attackResolved = true;
  fighter.shootCooldown = 0;
  fighter.gunRecoil = 0;
  fighter.hitReaction = 0;
  fighter.boostDrain = 0;
  fighter.boosting = false;
  fighter.aiThink = 0;
  fighter.aiGoal = randomArenaPosition(3, ARENA_RADIUS - 5);
  fighter.aiDecisionTimer = 0.02 + Math.random() * 0.08;
  fighter.aiMoveTarget = null;
  fighter.aiFoe = null;
  fighter.aiTactic = 'idle';
  fighter.isMoving = false;
  fighter.clearCombatBuffs();
  fighter.respawnTimer = 0;
  fighter.active = true;
  fighter.group.visible = true;
  if (fighter.isPlayer) {
    playGameSound('pickup');
    respawnHud.classList.remove('show');
    flashMessage('已重生：数字恢复为 10', 1);
  }
}

function updateRespawns(dt) {
  for (const fighter of fighters) {
    if (fighter.active || fighter.respawnTimer <= 0) continue;
    fighter.respawnTimer = Math.max(0, fighter.respawnTimer - dt);
    if (fighter.isPlayer) respawnTimeEl.textContent = fighter.respawnTimer.toFixed(1);
    if (fighter.respawnTimer === 0) respawnFighter(fighter);
  }
}

function applyHit(attacker, target, baseDamage = 1, {
  allowFrontBlock = true,
  hitPosition = null,
  splitReward = false
} = {}) {
  if (!attacker.active || !target.active) return false;
  const playerInvolved = attacker.isPlayer || target.isPlayer;
  const hitZone = hitPosition ? directionZoneFromPosition(hitPosition, target) : directionZone(attacker, target);
  if (target.invincibleTimer > 0) {
    target.hitPulse = 0.35;
    queueNetworkEvent({
      kind: 'hit', outcome: 'invincible', attackerSlot: fighters.indexOf(attacker), targetSlot: fighters.indexOf(target),
      damage: 0, backHit: false, sourceX: (hitPosition || attacker.group.position).x, sourceZ: (hitPosition || attacker.group.position).z
    });
    if (playerInvolved) {
      playGameSound('shield');
      showImpactFeedback(target, 0, false, 'invincible', hitPosition || attacker.group.position);
      triggerScreenImpact(0.12, false);
      flashMessage('无敌护符挡住了伤害！', 0.65);
    }
    return true;
  }
  if (allowFrontBlock && attacker.number === target.number && hitZone === 'front') {
    target.hitPulse = 0.32;
    target.hitReaction = 0.45;
    queueNetworkEvent({
      kind: 'hit', outcome: 'blocked', attackerSlot: fighters.indexOf(attacker), targetSlot: fighters.indexOf(target),
      damage: 0, backHit: false, sourceX: (hitPosition || attacker.group.position).x, sourceZ: (hitPosition || attacker.group.position).z
    });
    if (playerInvolved) {
      playGameSound('blocked');
      flashMessage('同数字正面对打：挡住了！');
      showImpactFeedback(target, 0, false, 'blocked', hitPosition || attacker.group.position);
      triggerScreenImpact(0.15, false);
    }
    return true;
  }
  const backHit = hitZone === 'back';
  const buffedBaseDamage = Math.max(1, Math.round(baseDamage * attacker.attackDamageMultiplier));
  const requestedDamage = backHit ? buffedBaseDamage * 2 : buffedBaseDamage;
  const damage = Math.min(requestedDamage, target.number);
  if (damage <= 0) return false;
  target.setNumber(target.number - damage);
  target.hitPulse = 0.65;
  target.hitReaction = backHit ? 1.15 : 0.9;
  const impactOrigin = (hitPosition || attacker.group.position).clone();
  const incoming = impactOrigin.sub(target.group.position).setY(0);
  const targetRight = new THREE.Vector3(target.forward.z, 0, -target.forward.x);
  target.hitSide = targetRight.dot(incoming) >= 0 ? -1 : 1;
  const knockDirection = target.group.position.clone().sub(hitPosition || attacker.group.position).setY(0);
  if (knockDirection.lengthSq() > 0.001) {
    knockDirection.normalize();
    const knockDistance = Math.min(0.72, 0.16 + damage * 0.11 + (backHit ? 0.18 : 0));
    target.group.position.addScaledVector(knockDirection, knockDistance);
    keepInsideArena(target.group.position);
  }
  // Successful attacks split their actual damage between the attacker and
  // ground drops. Back hits therefore double both halves automatically.
  const directGain = splitReward ? Math.ceil(damage / 2) : 0;
  const groundDropCount = damage - directGain;
  if (directGain > 0) attacker.setNumber(attacker.number + directGain);
  for (let i = 0; i < groundDropCount; i += 1) spawnNumberDrop(target, attacker);
  queueNetworkEvent({
    kind: 'hit', outcome: 'damage', attackerSlot: fighters.indexOf(attacker), targetSlot: fighters.indexOf(target),
    damage, directGain, groundDropCount, backHit,
    sourceX: (hitPosition || attacker.group.position).x, sourceZ: (hitPosition || attacker.group.position).z
  });
  if (playerInvolved) {
    playGameSound(backHit ? 'backHit' : 'hit');
    showImpactFeedback(target, damage, backHit, 'hit', hitPosition || attacker.group.position);
    triggerScreenImpact(backHit ? 0.5 : 0.28, backHit);
    if (directGain > 0) makeDamageText(`+${directGain}`, '#74ffc1', attacker, backHit);
    const splitText = directGain > 0 ? `，吸收 ${directGain}、掉落 ${groundDropCount}` : `，掉落 ${groundDropCount}`;
    if (attacker === target) flashMessage(`火箭自伤 ${damage}，掉落 ${groundDropCount}！`);
    else flashMessage(backHit ? `背后命中 ${damage}${splitText}！` : `命中 ${damage}${splitText}`);
  }
  if (target.number === 0) eliminate(target);
  return true;
}

const attackEffects = [];
const impactBursts = [];
const damageTexts = [];
const sharedImpactParticleGeometry = new THREE.OctahedronGeometry(1, 0);
const sharedImpactRingGeometry = new THREE.RingGeometry(0.18, 0.32, 22);
const sharedBulletImpactGeometry = new THREE.RingGeometry(0.12, 0.42, 16);
const sharedRocketTrailGeometry = new THREE.SphereGeometry(1, 7, 6);
const sharedRocketDebrisGeometry = new THREE.OctahedronGeometry(1, 0);
const sharedAttackArcGeometry = new THREE.RingGeometry(0.52, 1, 28, 1, -Math.PI / 4, Math.PI / 2);
const sharedMuzzleFlashGeometries = {
  smg: new THREE.OctahedronGeometry(0.16, 0),
  sniper: new THREE.OctahedronGeometry(0.23, 0),
  rocket: new THREE.OctahedronGeometry(0.32, 0)
};
const damageTextTextureCache = new Map();

function triggerScreenImpact(strength = 0.25, backHit = false) {
  cameraShake = Math.max(cameraShake, strength);
  hitFlashTimer = Math.max(hitFlashTimer, backHit ? 0.16 : 0.1);
  hitFlashStrength = Math.max(hitFlashStrength, backHit ? 0.68 : 0.36);
  hitFlashEl.style.background = backHit
    ? 'radial-gradient(circle at 50% 52%, transparent 12%, rgba(255,196,70,.25) 45%, rgba(255,58,34,.58) 100%)'
    : 'radial-gradient(circle at 50% 52%, transparent 18%, rgba(255,225,126,.14) 52%, rgba(255,128,58,.34) 100%)';
}

function makeDamageText(text, color, target, strong = false) {
  const textureKey = `${text}|${color}|${strong ? 1 : 0}`;
  let texture = damageTextTextureCache.get(textureKey);
  if (!texture) {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.font = `900 ${strong ? 62 : 54}px "Microsoft YaHei", Arial`;
    ctx.strokeStyle = 'rgba(20,8,5,.92)';
    ctx.lineWidth = 13;
    ctx.strokeText(text, 160, 62);
    ctx.fillStyle = color;
    ctx.fillText(text, 160, 62);
    texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    damageTextTextureCache.set(textureKey, texture);
  }
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, toneMapped: false }));
  const size = strong ? 2.65 : 2.15;
  sprite.scale.set(size, size * 0.4, 1);
  sprite.position.copy(target.group.position);
  sprite.position.y = 2.65 * target.model.scale.x;
  sprite.position.x += (Math.random() - 0.5) * 0.34;
  scene.add(sprite);
  damageTexts.push({ sprite, life: strong ? 0.92 : 0.72, maxLife: strong ? 0.92 : 0.72, drift: (Math.random() - 0.5) * 0.26 });
}

function showImpactFeedback(target, damage, backHit, kind = 'hit', sourcePosition = null) {
  const isBlocked = kind === 'blocked';
  const isInvincible = kind === 'invincible';
  const color = isInvincible ? 0x7fe9ff : isBlocked ? 0xbcecff : backHit ? 0xff5d36 : 0xffcb55;
  const colorText = isInvincible ? '#9ef4ff' : isBlocked ? '#d4f5ff' : backHit ? '#ff7652' : '#ffe078';
  const count = performanceMode
    ? backHit ? 9 : isInvincible ? 7 : 6
    : backHit ? 15 : isInvincible ? 12 : 9;
  const group = new THREE.Group();
  group.position.copy(target.group.position);
  const particleMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, depthWrite: false });
  const particles = [];
  const particleMesh = new THREE.InstancedMesh(sharedImpactParticleGeometry, particleMaterial, count);
  particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  particleMesh.frustumCulled = false;
  const incoming = sourcePosition
    ? target.group.position.clone().sub(sourcePosition).setY(0).normalize()
    : new THREE.Vector3(0, 0, 1);
  for (let index = 0; index < count; index += 1) {
    const position = new THREE.Vector3((Math.random() - 0.5) * 0.28, 1 + Math.random() * 0.55, (Math.random() - 0.5) * 0.28);
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 4.2 + incoming.x * 1.3,
      1.5 + Math.random() * 3.6,
      (Math.random() - 0.5) * 4.2 + incoming.z * 1.3
    );
    const size = backHit ? 0.075 : 0.058;
    particles.push({ position, velocity, rotationX: 0, rotationY: 0, size });
    instanceDummy.position.copy(position);
    instanceDummy.rotation.set(0, 0, 0);
    instanceDummy.scale.setScalar(size);
    instanceDummy.updateMatrix();
    particleMesh.setMatrixAt(index, instanceDummy.matrix);
  }
  particleMesh.instanceMatrix.needsUpdate = true;
  group.add(particleMesh);
  const ringMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.82, side: THREE.DoubleSide, depthWrite: false });
  const ring = new THREE.Mesh(sharedImpactRingGeometry, ringMaterial);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.11;
  group.add(ring);
  scene.add(group);
  impactBursts.push({ group, particles, particleMesh, ring, particleMaterial, ringMaterial, sharedRingGeometry: true, life: backHit ? 0.46 : 0.34, maxLife: backHit ? 0.46 : 0.34 });

  if (isInvincible) makeDamageText('无敌！', colorText, target, false);
  else if (isBlocked) makeDamageText('格挡！', colorText, target, false);
  else makeDamageText(backHit ? `背击 -${damage}` : `-${damage}`, colorText, target, backHit);
}

function showMuzzleFlash(attacker, weaponType) {
  const isSmg = weaponType === 'smg';
  const isRocket = weaponType === 'rocket';
  const color = isSmg ? 0x7fffd2 : isRocket ? 0xff7048 : 0x82b5ff;
  const mesh = new THREE.Mesh(
    sharedMuzzleFlashGeometries[weaponType] || sharedMuzzleFlashGeometries.sniper,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1, depthWrite: false })
  );
  mesh.position.copy(attacker.group.position).add(attacker.forward.multiplyScalar(1.25));
  mesh.position.y = 1.12;
  mesh.rotation.set(Math.random(), Math.random(), Math.random());
  scene.add(mesh);
  attackEffects.push({ mesh, life: 0.1, maxLife: 0.1, growth: 5, opacity: 1, sharedGeometry: true });
}

function showAttackArc(fighter, color = 0xb6f5ff) {
  const range = fighter.attackRange;
  const mesh = new THREE.Mesh(
    sharedAttackArcGeometry,
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = -fighter.yaw + Math.PI / 2;
  mesh.scale.setScalar(range);
  mesh.position.copy(fighter.group.position).add(fighter.forward.multiplyScalar(range * 0.12));
  mesh.position.y = 0.12;
  scene.add(mesh);
  attackEffects.push({ mesh, life: 0.2, maxLife: 0.2, growth: 2.5, opacity: 0.78, sharedGeometry: true });
}

function meleeAttack(attacker) {
  if (!attacker.active || attacker.meleeWeapon !== 'club' || (attacker.weaponType && attacker.ammo > 0) || attacker.attackCooldown > 0 || !running) return;
  if (attacker.isPlayer) playGameSound('swing');
  attacker.attackCooldown = attacker.meleeAttackInterval;
  // Finish the recovery just before the next attack becomes available. The old
  // minimum of 0.72 s was longer than the base 0.5 s cooldown, so automatic
  // attacks repeatedly snapped back to their wind-up pose.
  attacker.attackAnimationDuration = THREE.MathUtils.clamp(attacker.meleeAttackInterval * 0.94, 0.38, 1.12);
  attacker.attackAnimation = attacker.attackAnimationDuration;
  attacker.attackResolved = false;
}

function resolveMeleeHit(attacker) {
  if (!attacker.active || attacker.meleeWeapon !== 'club' || !running) return;
  let connected = false;
  let personalContact = attacker.isPlayer;
  for (const target of fighters) {
    if (target === attacker || !target.active) continue;
    if (
      targetInsideAttackArc(attacker, target)
      && !wallBlocksSegment(attacker.group.position, target.group.position, 0.06)
    ) {
      personalContact = personalContact || target.isPlayer;
      connected = applyHit(attacker, target, 2, { splitReward: true }) || connected;
    }
  }
  if (personalContact) showAttackArc(attacker, attacker.isPlayer ? 0x8eefff : attacker.color);
  if (!connected && attacker.isPlayer) flashMessage('挥空了', 0.45);
}

const projectiles = [];
function updateWeaponHud(fighter) {
  if (!fighter.isPlayer) return;
  const meleeNames = {
    club: '木棍', sword: '长刀', axe: '战斧', dagger: '小刀', hammer: '战锤', spear: '长矛',
    katana: '武士刀', mace: '钉头锤', scythe: '镰刀', staff: '法杖', cleaver: '大砍刀', rapier: '细剑',
    chickenLeg: '超大鸡腿', pickaxe: '镐头', shovel: '铁锹', greatClub: '超粗大棒'
  };
  const meleeStatus = meleeNames[fighter.meleeStyle] || '木棍';
  const buffStatuses = [];
  if (fighter.rangeBuffTimer > 0) buffStatuses.push(`范围×1.5 ${Math.ceil(fighter.rangeBuffTimer)}秒`);
  if (fighter.damageBuffTimer > 0) buffStatuses.push(`伤害×1.5 ${Math.ceil(fighter.damageBuffTimer)}秒`);
  const gunNames = { smg: '冲锋枪', sniper: '狙击枪', rocket: '火箭筒' };
  const weaponStatus = fighter.weaponType && fighter.ammo > 0
    ? `${gunNames[fighter.weaponType] || '武器'} ${fighter.ammo}`
    : meleeStatus;
  weaponEl.textContent = [weaponStatus, ...buffStatuses].join(' · ');
}

function createRocketProjectile() {
  const rocket = new THREE.Group();
  const shellMaterial = new THREE.MeshStandardMaterial({
    color: 0xff754e,
    emissive: 0xb92512,
    emissiveIntensity: 2.2,
    metalness: 0.48,
    roughness: 0.3
  });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x293747, metalness: 0.62, roughness: 0.26 });
  const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xffd15b, transparent: true, opacity: 0.95, depthWrite: false });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, 0.78, 12), shellMaterial);
  body.rotation.x = Math.PI / 2;
  body.position.z = 0.08;
  body.castShadow = true;
  rocket.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.34, 12), shellMaterial);
  nose.rotation.x = Math.PI / 2;
  nose.position.z = 0.62;
  nose.castShadow = true;
  rocket.add(nose);
  for (const side of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.34, 0.3), darkMaterial);
    fin.position.set(side * 0.18, 0, -0.25);
    fin.rotation.z = side * -0.3;
    rocket.add(fin);
  }
  const exhaust = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 10), flameMaterial);
  exhaust.rotation.x = -Math.PI / 2;
  exhaust.position.z = -0.58;
  rocket.add(exhaust);
  rocket.scale.setScalar(1.28);
  return rocket;
}

function showRocketTrail(position, velocity) {
  const direction = velocity.clone().normalize();
  const trailOrigin = position.clone().addScaledVector(direction, -0.55);
  const configs = [
    { color: 0xffd45f, radius: 0.13, life: 0.24, growth: 4.8, opacity: 0.9, speed: 1.1 },
    { color: 0x7b8792, radius: 0.19, life: 0.5, growth: 2.5, opacity: 0.38, speed: 0.55 }
  ];
  for (const config of configs) {
    const puff = new THREE.Mesh(
      sharedRocketTrailGeometry,
      new THREE.MeshBasicMaterial({ color: config.color, transparent: true, opacity: config.opacity, depthWrite: false })
    );
    puff.scale.setScalar(config.radius);
    puff.position.copy(trailOrigin);
    puff.position.x += (Math.random() - 0.5) * 0.12;
    puff.position.y += (Math.random() - 0.5) * 0.1;
    puff.position.z += (Math.random() - 0.5) * 0.12;
    scene.add(puff);
    attackEffects.push({
      mesh: puff,
      kind: 'rocket-trail',
      life: config.life,
      maxLife: config.life,
      growth: config.growth,
      opacity: config.opacity,
      sharedGeometry: true,
      velocity: direction.clone().multiplyScalar(-config.speed).add(new THREE.Vector3(0, 0.32, 0))
    });
  }
}

function showSniperTrace(attacker, targetPoint) {
  const start = attacker.group.position.clone().add(attacker.forward.multiplyScalar(1.05));
  start.y = 1.12;
  const end = targetPoint.clone();
  end.y = 0.18;
  const delta = end.clone().sub(start);
  const length = Math.max(0.01, delta.length());
  const direction = delta.clone().normalize();
  const midpoint = start.clone().add(end).multiplyScalar(0.5);
  const makeBeam = (radius, color, opacity) => {
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, length, 7),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false })
    );
    beam.position.copy(midpoint);
    beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
    scene.add(beam);
    attackEffects.push({ mesh: beam, kind: 'sniper-trace', life: 0.14, maxLife: 0.14, growth: 0.35, opacity });
  };
  makeBeam(0.065, 0x4d8fff, 0.38);
  makeBeam(0.024, 0xd9f5ff, 1);
  showBulletImpact(end, 'sniper');
}

function shoot(attacker, selectedPosition = null) {
  if (attacker.shootReadyAt > 0) {
    attacker.shootCooldown = Math.max(0, (attacker.shootReadyAt - performance.now()) / 1000);
  }
  if (!running || !attacker.active || attacker.shootCooldown > 0.01) return;
  if (!attacker.weaponType || attacker.ammo <= 0) {
    if (attacker.isPlayer) flashMessage('先去地图上捡枪');
    return;
  }
  const weaponType = attacker.weaponType;
  const isSmg = weaponType === 'smg';
  const isSniper = weaponType === 'sniper';
  const isRocket = weaponType === 'rocket';
  const personalShot = attacker.isPlayer || Boolean(
    selectedPosition && player.active && selectedPosition.distanceToSquared(player.group.position) < 2.25
  );
  const networkTargetSlot = selectedPosition
    ? fighters.findIndex((fighter) => fighter.active && fighter.group.position.distanceToSquared(selectedPosition) < 2.25)
    : -1;
  attacker.ammo -= 1;
  attacker.shootCooldown = isSmg ? 0.25 : isSniper ? 0.5 : 1.05;
  attacker.shootReadyAt = performance.now() + attacker.shootCooldown * 1000;
  attacker.gunRecoil = 1;
  if (personalShot) showMuzzleFlash(attacker, weaponType);
  if (attacker.isPlayer) playGameSound(weaponType);
  if (attacker.isPlayer) cameraShake = Math.max(cameraShake, isSmg ? 0.055 : isSniper ? 0.14 : 0.24);
  const shotColor = isSmg ? 0x75ffd2 : isSniper ? 0x79adff : 0xff754e;
  const mesh = isRocket
    ? createRocketProjectile()
    : new THREE.Mesh(
      new THREE.SphereGeometry(isSmg ? 0.13 : 0.16, 10, 10),
      new THREE.MeshStandardMaterial({
        color: shotColor,
        emissive: isSmg ? 0x17c894 : 0x285eb2,
        emissiveIntensity: 4
      })
    );
  mesh.position.copy(attacker.group.position).add(attacker.forward.multiplyScalar(Math.min(1.8, attacker.attackRange * 0.48)));
  mesh.position.y = 1.05;
  mesh.visible = personalShot;
  if (mesh.isMesh) mesh.castShadow = true;
  scene.add(mesh);
  let targetPoint = null;
  let direction = attacker.forward;
  if (!isSmg) {
    targetPoint = (selectedPosition || attacker.group.position.clone().add(attacker.forward.multiplyScalar(12))).clone();
    keepInsideArena(targetPoint, 0.8);
    targetPoint.y = 1.05;
    direction = targetPoint.clone().sub(mesh.position).setY(0);
    if (direction.lengthSq() < 0.01) direction.copy(attacker.forward);
    else direction.normalize();
  }
  if (isSniper) {
    const wallHit = segmentArenaWallHit(mesh.position, targetPoint, 0.045);
    if (wallHit) {
      targetPoint.copy(wallHit.point);
      if (attacker.isPlayer) playGameSound('wallImpact');
    }
    const resolution = resolveAreaProjectile({
      owner: attacker,
      damage: 2,
      type: 'sniper',
      targetPoint,
      blastRadius: SNIPER_BLAST_RADIUS
    });
    if (attacker.isPlayer || resolution.targets.some((target) => target.isPlayer)) showSniperTrace(attacker, targetPoint);
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
    if (attacker.ammo <= 0) attacker.setGun(null, 0);
    else updateWeaponHud(attacker);
    return;
  }
  if (isRocket) mesh.rotation.y = Math.atan2(direction.x, direction.z);
  projectiles.push({
    mesh,
    owner: attacker,
    velocity: direction.multiplyScalar(isSmg ? 24 : isSniper ? 30 : 13),
    damage: isRocket ? 4 : 2,
    type: weaponType,
    targetPoint,
    blastRadius: isSniper ? SNIPER_BLAST_RADIUS : isRocket ? ROCKET_GRID_HALF_SIZE : 0,
    life: isRocket ? 3 : 1.8,
    trailTimer: 0,
    visual: personalShot,
    networkTargetSlot
  });
  if (attacker.ammo <= 0) attacker.setGun(null, 0);
  else updateWeaponHud(attacker);
}

function removeWorldPickup(collection, index) {
  const pickup = collection[index];
  if (!pickup) return;
  scene.remove(pickup.group);
  const geometries = new Set();
  const materials = new Set();
  pickup.group.traverse((part) => {
    if (part.geometry) geometries.add(part.geometry);
    if (part.material) {
      const partMaterials = Array.isArray(part.material) ? part.material : [part.material];
      partMaterials.forEach((material) => materials.add(material));
    }
  });
  geometries.forEach((geometry) => geometry.dispose());
  materials.forEach((material) => {
    if (material.map) material.map.dispose();
    material.dispose();
  });
  collection.splice(index, 1);
}

function addPickupExpiryLabel(group, y) {
  const expiryLabel = makeNumberSprite('3秒', '#ffcf70');
  expiryLabel.scale.set(0.72, 0.36, 1);
  expiryLabel.position.y = y;
  expiryLabel.visible = false;
  expiryLabel.renderOrder = 8;
  group.add(expiryLabel);
  return expiryLabel;
}

const rangedPickups = [];
function createPickupGunGeometry(type) {
  const isSmg = type === 'smg';
  const isRocket = type === 'rocket';
  const parts = [];
  if (isRocket) {
    const tube = new THREE.CylinderGeometry(0.2, 0.26, 1.85, 12);
    tube.rotateZ(Math.PI / 2);
    parts.push(tube);
    const muzzle = new THREE.TorusGeometry(0.25, 0.065, 8, 20);
    muzzle.rotateY(Math.PI / 2);
    muzzle.translate(0.92, 0, 0);
    parts.push(muzzle);
  } else {
    parts.push(new THREE.BoxGeometry(isSmg ? 1.35 : 1.65, 0.28, 0.32));
    const barrel = new THREE.CylinderGeometry(0.065, 0.065, isSmg ? 0.75 : 1.05, 8);
    barrel.rotateZ(Math.PI / 2);
    barrel.translate(isSmg ? 0.95 : 1.25, 0, 0);
    parts.push(barrel);
    const grip = new THREE.BoxGeometry(0.24, 0.52, 0.25);
    grip.rotateZ(-0.28);
    grip.translate(-0.18, -0.32, 0);
    parts.push(grip);
    if (isSmg) {
      const magazine = new THREE.BoxGeometry(0.25, 0.58, 0.27);
      magazine.rotateZ(0.12);
      magazine.translate(0.18, -0.38, 0);
      parts.push(magazine);
    }
  }
  const merged = mergeGeometries(parts, false);
  parts.forEach((geometry) => geometry.dispose());
  return merged;
}

function spawnRangedPickup(position = randomArenaPosition(7, ARENA_RADIUS - 5), type = Math.random() < 0.5 ? 'sniper' : 'smg') {
  const isSmg = type === 'smg';
  const isSniper = type === 'sniper';
  const isRocket = type === 'rocket';
  const group = new THREE.Group();
  const gunMaterial = new THREE.MeshStandardMaterial({
    color: isSmg ? 0x58e0b2 : isSniper ? 0x72a9ff : 0xff704d,
    emissive: isSmg ? 0x0d7b62 : isSniper ? 0x274f9b : 0xa82d17,
    emissiveIntensity: 1.6,
    metalness: 0.55,
    roughness: 0.3
  });
  const gunModel = new THREE.Mesh(createPickupGunGeometry(type), gunMaterial);
  gunModel.castShadow = true;
  group.add(gunModel);
  if (isSniper) {
    const scope = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.11, 0.62, 10),
      new THREE.MeshStandardMaterial({ color: 0x152338, metalness: 0.68, roughness: 0.25 })
    );
    scope.rotation.z = Math.PI / 2;
    scope.position.set(0.12, 0.25, 0);
    group.add(scope);
  }
  const pickupNames = { smg: '冲锋枪×12', sniper: '狙击枪×6', rocket: '火箭筒×1' };
  const labelColors = { smg: '#75ffd2', sniper: '#86b8ff', rocket: '#ff8765' };
  const label = makeNumberSprite(pickupNames[type], labelColors[type]);
  label.scale.set(isRocket ? 1.95 : 1.85, isRocket ? 0.98 : 0.92, 1);
  label.position.y = 1.15;
  group.add(label);
  const expiryLabel = addPickupExpiryLabel(group, 1.9);
  group.position.copy(position);
  group.position.y = 0.62;
  scene.add(group);
  rangedPickups.push({ group, type, phase: Math.random() * Math.PI * 2, age: 0, expiryLabel });
}
spawnRangedPickup(new THREE.Vector3(-6, 0, 5), 'sniper');
spawnRangedPickup(new THREE.Vector3(-15, 0, -9), 'sniper');
spawnRangedPickup(new THREE.Vector3(7, 0, -7), 'smg');
spawnRangedPickup(new THREE.Vector3(16, 0, 4), 'smg');
spawnRangedPickup(new THREE.Vector3(11, 0, 8), 'rocket');
spawnRangedPickup(new THREE.Vector3(-18, 0, 2), 'rocket');
let sniperSpawnTimer = 8;
let smgSpawnTimer = 10;
let rocketSpawnTimer = 14;

function findRemotePickupPosition() {
  let bestPosition = randomArenaPosition(ARENA_RADIUS * 0.58, ARENA_RADIUS - 3.2);
  let bestScore = -Infinity;
  const activePositions = fighters.filter((fighter) => fighter.active).map((fighter) => fighter.group.position);
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const candidate = randomArenaPosition(ARENA_RADIUS * 0.58, ARENA_RADIUS - 3.2);
    const nearestFighter = activePositions.length
      ? Math.min(...activePositions.map((position) => candidate.distanceTo(position)))
      : ARENA_RADIUS;
    const edgeBonus = candidate.length() / ARENA_RADIUS * 3.5;
    const score = nearestFighter + edgeBonus + Math.random() * 0.5;
    if (score > bestScore) {
      bestScore = score;
      bestPosition = candidate;
    }
  }
  return bestPosition;
}

const amuletPickups = [];
function spawnAmulet(position = findRemotePickupPosition()) {
  const group = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({
    color: 0xffd45e,
    emissive: 0xff9f1a,
    emissiveIntensity: 2,
    metalness: 0.65,
    roughness: 0.25
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.1, 10, 24), gold);
  ring.rotation.x = Math.PI / 2;
  ring.castShadow = true;
  group.add(ring);
  const gem = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.28),
    new THREE.MeshStandardMaterial({ color: 0x89f3ff, emissive: 0x33cbe6, emissiveIntensity: 2.5 })
  );
  group.add(gem);
  const outerHalo = new THREE.Mesh(
    new THREE.TorusGeometry(0.82, 0.055, 8, 32),
    new THREE.MeshBasicMaterial({ color: 0x8df3ff, transparent: true, opacity: 0.9, depthWrite: false })
  );
  outerHalo.rotation.x = Math.PI / 2;
  group.add(outerHalo);
  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(0.72, 16, 11),
    new THREE.MeshBasicMaterial({ color: 0x74eaff, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false })
  );
  group.add(aura);
  const beacon = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.34, 12, 12, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x9ff5ff, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false })
  );
  beacon.position.y = 6;
  group.add(beacon);
  const pickupLight = new THREE.PointLight(0x72eaff, 7, 9, 2);
  pickupLight.position.y = 0.4;
  group.add(pickupLight);
  const label = makeNumberSprite('无敌护符 10秒', '#ffe69b');
  label.scale.set(2.35, 1.17, 1);
  label.position.y = 1.65;
  group.add(label);
  const expiryLabel = addPickupExpiryLabel(group, 2.42);
  group.position.copy(position);
  group.position.y = 0.72;
  scene.add(group);
  amuletPickups.push({ group, phase: Math.random() * Math.PI * 2, age: 0, outerHalo, aura, beacon, expiryLabel });
}

const combatBuffPickups = [];
function spawnCombatBuff(position = randomArenaPosition(5, ARENA_RADIUS - 5), type = 'range') {
  const group = new THREE.Group();
  const isRange = type === 'range';
  const color = isRange ? 0x63eaff : 0xff6b48;
  const material = new THREE.MeshStandardMaterial({
    color,
    emissive: isRange ? 0x158ca7 : 0xb92917,
    emissiveIntensity: 2.6,
    metalness: 0.42,
    roughness: 0.24
  });
  const core = new THREE.Mesh(
    isRange ? new THREE.TorusGeometry(0.42, 0.1, 10, 28) : new THREE.OctahedronGeometry(0.43, 0),
    material
  );
  core.rotation.x = isRange ? Math.PI / 2 : 0;
  core.castShadow = true;
  group.add(core);
  const markerGeometry = new THREE.ConeGeometry(isRange ? 0.11 : 0.105, isRange ? 0.35 : 0.42, isRange ? 8 : 7);
  const markers = new THREE.InstancedMesh(markerGeometry, material, 4);
  const markerDistance = isRange ? 0.68 : 0.48;
  const markerUp = new THREE.Vector3(0, 1, 0);
  const markerDirection = new THREE.Vector3();
  for (let index = 0; index < 4; index += 1) {
    const angle = index * Math.PI / 2;
    markerDirection.set(Math.cos(angle), 0, Math.sin(angle));
    instanceDummy.position.copy(markerDirection).multiplyScalar(markerDistance);
    instanceDummy.quaternion.setFromUnitVectors(markerUp, markerDirection);
    instanceDummy.scale.set(1, 1, 1);
    instanceDummy.updateMatrix();
    markers.setMatrixAt(index, instanceDummy.matrix);
  }
  markers.instanceMatrix.needsUpdate = true;
  group.add(markers);
  const halo = new THREE.Mesh(
    new THREE.TorusGeometry(0.72, 0.045, 7, 32),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.62, depthWrite: false })
  );
  halo.rotation.x = Math.PI / 2;
  group.add(halo);
  const label = makeNumberSprite(isRange ? '攻击范围 ×1.5' : '攻击伤害 ×1.5', isRange ? '#7af2ff' : '#ff8c70');
  label.scale.set(2.35, 1.17, 1);
  label.position.y = 1.28;
  group.add(label);
  const expiryLabel = addPickupExpiryLabel(group, 2.05);
  group.position.copy(position);
  group.position.y = 0.72;
  scene.add(group);
  combatBuffPickups.push({ group, type, phase: Math.random() * Math.PI * 2, age: 0, core, halo, expiryLabel });
}

spawnAmulet();
spawnCombatBuff(new THREE.Vector3(-7, 0, -8), 'range');
spawnCombatBuff(new THREE.Vector3(7, 0, -8), 'damage');
spawnCombatBuff(new THREE.Vector3(-14, 0, 12), 'range');
spawnCombatBuff(new THREE.Vector3(14, 0, 12), 'damage');
let amuletSpawnTimer = 20;
let combatBuffSpawnTimer = 6;
let nextCombatBuffType = 'range';

const keys = {};
let roundTime = ROUND_SECONDS;
let lastCountdownSecond = null;
let mouseFireHeld = false;
let qaFreezeBots = false;
let qaFreezeItemSpawns = false;
const mouseNdc = new THREE.Vector2(0, 0);
const aimPoint = new THREE.Vector3(0, 0, 0);
const playerMoveInput = new THREE.Vector3();
const playerAimDirection = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
const aimPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const aimMarker = new THREE.Mesh(
  new THREE.RingGeometry(0.28, 0.42, 20),
  new THREE.MeshBasicMaterial({ color: 0x8ceeff, transparent: true, opacity: 0.85, side: THREE.DoubleSide })
);
aimMarker.rotation.x = -Math.PI / 2;
aimMarker.position.y = 0.05;
aimMarker.visible = false;
scene.add(aimMarker);
const rocketAimGrid = new THREE.GridHelper(ROCKET_GRID_SIZE, 4, 0xffd0a8, 0xff7654);
rocketAimGrid.position.y = 0.058;
rocketAimGrid.material.transparent = true;
rocketAimGrid.material.opacity = 0.86;
rocketAimGrid.material.depthWrite = false;
rocketAimGrid.visible = false;
scene.add(rocketAimGrid);

addEventListener('keydown', (event) => {
  keys[event.code] = true;
});
addEventListener('keyup', (event) => { keys[event.code] = false; });
addEventListener('mousemove', (event) => {
  mouseNdc.x = (event.clientX / innerWidth) * 2 - 1;
  mouseNdc.y = -(event.clientY / innerHeight) * 2 + 1;
});
addEventListener('mousedown', (event) => {
  if (!running) return;
  if (event.button === 0) {
    if (!player.weaponType) {
      flashMessage('先去地图上捡冲锋枪、狙击枪或火箭筒');
      return;
    }
    mouseFireHeld = player.weaponType === 'smg';
    if (networkMode === 'guest') {
      networkFireSequence += 1;
      player.gunRecoil = 1;
      showMuzzleFlash(player, player.weaponType);
      sendNetworkInput(true);
      return;
    }
    shoot(player, aimPoint);
  }
});
addEventListener('mouseup', (event) => {
  if (event.button === 0) {
    mouseFireHeld = false;
    if (networkMode === 'guest') sendNetworkInput(true);
  }
});
addEventListener('contextmenu', (event) => event.preventDefault());

if (new URLSearchParams(location.search).has('qa')) {
  window.__numberBrawlQA = {
    setPlayerNumber(value) { player.setNumber(value); },
    eliminatePlayer() {
      player.setNumber(0);
      eliminate(player);
    },
    giveAmulet() { player.activateInvincibility(10); },
    giveGun(type = 'smg') {
      const ammo = type === 'smg' ? 12 : type === 'sniper' ? 6 : 1;
      player.setGun(type, ammo);
    },
    fireGunAt(x = 0, z = 8) { shoot(player, new THREE.Vector3(x, 0, z)); },
    weaponState() {
      return { type: player.weaponType, ammo: player.ammo, shootCooldown: player.shootCooldown, projectiles: projectiles.length };
    },
    terrainState() {
      return {
        wallCount: arenaWalls.length,
        walls: arenaWalls.map(({ x, z, width, depth, height, yaw }) => ({ x, z, width, depth, height, yaw })),
        directionMarkerCount: fighters.length,
        audio: this.audioState()
      };
    },
    audioState() {
      return {
        enabled: soundEnabled,
        initialized: Boolean(gameAudioContext && audioMasterGain),
        contextState: gameAudioContext?.state || 'not-created',
        toggleText: audioToggleEl.textContent,
        cues: { ...audioCueCounts }
      };
    },
    directionMarkerState() {
      return {
        count: fighters.length,
        playerYaw: player.yaw,
        integratedIntoWeakZone: true,
        visibleScale: player.backZoneGroup.scale.x > 0
      };
    },
    setupWallMovementTest() {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      const wall = arenaWalls[0];
      const cosine = Math.cos(wall.yaw);
      const sine = Math.sin(wall.yaw);
      const toWorld = (localX, localZ) => new THREE.Vector3(
        wall.x + localX * cosine + localZ * sine,
        0,
        wall.z - localX * sine + localZ * cosine
      );
      player.active = true;
      player.group.visible = true;
      player.setNumber(10);
      player.group.position.copy(toWorld(0, -(wall.depth / 2 + 0.66 + 0.08)));
      fighters.slice(1).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const before = arenaWallLocalPosition(player.group.position, wall);
      player.move(new THREE.Vector3(sine, 0, cosine), 0.18);
      const after = arenaWallLocalPosition(player.group.position, wall);
      return {
        before: [before.x, before.y],
        after: [after.x, after.y],
        crossedWall: after.y > wall.depth / 2,
        overlapsWall: positionOverlapsArenaWall(player.group.position, 0.659),
        distanceFromWall: Math.abs(after.y) - wall.depth / 2
      };
    },
    setupWallMeleeTest() {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      const wall = arenaWalls[0];
      const cosine = Math.cos(wall.yaw);
      const sine = Math.sin(wall.yaw);
      const toWorld = (localZ) => new THREE.Vector3(wall.x + localZ * sine, 0, wall.z + localZ * cosine);
      player.active = true;
      player.group.visible = true;
      player.group.position.copy(toWorld(-1.14));
      player.yaw = wall.yaw;
      player.group.rotation.y = player.yaw;
      player.setNumber(10);
      player.setGun(null, 0);
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.group.position.copy(toWorld(1.14));
      target.setNumber(20);
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      resolveMeleeHit(player);
      return { targetNumber: target.number, blockedByWall: target.number === 20 };
    },
    setupWallProjectileTest(type = 'smg') {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      const wall = arenaWalls[0];
      const cosine = Math.cos(wall.yaw);
      const sine = Math.sin(wall.yaw);
      const toWorld = (localZ) => new THREE.Vector3(wall.x + localZ * sine, 0, wall.z + localZ * cosine);
      player.active = true;
      player.group.visible = true;
      player.group.position.copy(toWorld(-3));
      player.yaw = wall.yaw;
      player.group.rotation.y = player.yaw;
      player.setNumber(10);
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.group.position.copy(toWorld(type === 'rocket' ? 4 : 3));
      target.setNumber(20);
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const wallCueBefore = audioCueCounts.wallImpact || 0;
      player.setGun(type, 1);
      shoot(player, target.group.position.clone());
      if (type !== 'sniper') updateProjectiles(type === 'rocket' ? 0.45 : 0.25);
      return {
        type,
        targetNumber: target.number,
        projectiles: projectiles.length,
        wallImpactCues: (audioCueCounts.wallImpact || 0) - wallCueBefore,
        blockedByWall: target.number === 20 && projectiles.length === 0
      };
    },
    performanceState() {
      return {
        pixelRatio: activeRenderPixelRatio,
        queuedAvatarTextures: avatarTextureQueue.length,
        calls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        geometries: renderer.info.memory.geometries,
        textures: renderer.info.memory.textures,
        activeFighters: fighters.filter((fighter) => fighter.active).length,
        effects: attackEffects.length + impactBursts.length + damageTexts.length,
        pendingNumberLabels: pendingNumberLabelUpdates.size
      };
    },
    setDecorGroupVisibility(groupName, visible) {
      const groups = groupName === 'all' ? Object.values(decorRenderGroups).flat() : decorRenderGroups[groupName] || [];
      groups.forEach((object) => { object.visible = Boolean(visible); });
      return this.performanceState();
    },
    avatarState() {
      return {
        frameKey: player.avatarFrameKey,
        facing: player.avatarFacing,
        pose: { ...player.avatarPose },
        motionBlend: player.motionBlend,
        frameBlend: player.avatarFrameBlend,
        previousFrameVisible: player.avatarPreviousSprite.visible,
        attackAnimation: player.attackAnimation,
        attackAnimationDuration: player.attackAnimationDuration,
        attackCooldown: player.attackCooldown,
        outfit: player.outfitStyle,
        hair: player.hairStyle,
        pants: player.pantsStyle,
        shoes: player.shoesStyle,
        meleeStyle: player.meleeStyle,
        shirtColor: canvasColor(player.shirtMaterial.color),
        pantsColor: canvasColor(player.pantsMaterial.color),
        shoeColor: canvasColor(player.shoeMaterial.color),
        hairColor: player.hairColor,
        hairRecolorPixels: player.avatarBaseCanvas?.__hairRecolorCount || 0,
        avatarBaseKey: player.avatarBaseKey,
        spriteScaleX: player.avatarSprite.scale.x,
        mirrorX: player.avatarSprite.material.userData.mirrorX || 0,
        directionOverlayVisible: player.avatarDirectionSprite.visible,
        weapon: player.weaponType || player.meleeStyle,
        textureSize: player.avatarSprite.material.map
          ? [player.avatarSprite.material.map.image.width, player.avatarSprite.material.map.image.height]
          : null
      };
    },
    setPlayerYaw(value) {
      player.yaw = Number(value) || 0;
      player.group.rotation.y = player.yaw;
    },
    setupDirectionalMeleeTest(yaw = -Math.PI / 2, phase = 0.08) {
      qaFreezeBots = true;
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.setNumber(50);
      player.yaw = Number(yaw) || 0;
      player.group.rotation.y = player.yaw;
      player.setGun(null, 0);
      player.setMeleeWeapon('club');
      player.attackAnimationDuration = 100;
      player.attackAnimation = 100 * (1 - THREE.MathUtils.clamp(Number(phase) || 0.08, 0.01, 0.98));
      player.attackResolved = true;
      fighters.slice(1).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
    },
    renderPreviewPose(pose = {}) {
      player.avatarPose = {
        mode: pose.mode || 'idle',
        walkPhase: pose.walkPhase || 0,
        attackPhase: Number.isFinite(pose.attackPhase) ? pose.attackPhase : -1,
        recoil: pose.recoil || 0,
        spin: pose.spin || 0
      };
      player.avatarFrameKey = `qa-preview:${JSON.stringify(player.avatarPose)}`;
      player.refreshAvatarSprite(player.avatarPose);
      rebuildAvatarPreview();
      return this.avatarState();
    },
    setPlayerBoosting(value) {
      player.boosting = Boolean(value) && player.number >= 30;
      player.updateTierVisuals();
    },
    giveCombatBuff(type = 'range', seconds = COMBAT_BUFF_SECONDS) {
      player.activateCombatBuff(type, seconds);
    },
    setupCombatBuffTest(type = 'range', backHit = false) {
      qaFreezeBots = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(10);
      player.clearCombatBuffs();
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.group.position.set(0, 0, 3.1);
      target.yaw = backHit ? 0 : Math.PI;
      target.group.rotation.y = target.yaw;
      target.setNumber(20);
      player.activateCombatBuff(type, COMBAT_BUFF_SECONDS);
      if (type === 'damage') applyHit(player, target, 2, { allowFrontBlock: false });
      return { type, backHit, playerRange: player.attackRange, playerDamageMultiplier: player.attackDamageMultiplier, targetNumber: target.number };
    },
    setupMeleeAnimationTest() {
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(10);
      player.setMeleeWeapon('club');
      player.attackCooldown = 0;
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.group.position.set(0, 0, 1.6);
      target.yaw = 0;
      target.group.rotation.y = target.yaw;
      target.setNumber(9);
      target.attackCooldown = 99;
      meleeAttack(player);
    },
    meleeAnimationState() {
      const targetOffset = fighters[1].group.position.clone().sub(player.group.position).setY(0);
      return {
        playerNumber: player.number,
        targetNumber: fighters[1].number,
        playerAnimation: player.attackAnimation,
        resolved: player.attackResolved,
        targetReaction: fighters[1].hitReaction,
        numberDrops: numberDrops.length,
        damageTexts: damageTexts.length,
        impactBursts: impactBursts.length,
        targetDistance: targetOffset.length(),
        targetDot: targetOffset.lengthSq() > 0 ? targetOffset.normalize().dot(player.forward) : 0,
        wallBlocked: wallBlocksSegment(player.group.position, fighters[1].group.position, 0.06),
        playerPosition: [player.group.position.x, player.group.position.z],
        targetPosition: [fighters[1].group.position.x, fighters[1].group.position.z]
      };
    },
    botOnlyHitTest() {
      player.active = false;
      player.group.visible = false;
      player.respawnTimer = 999;
      fighters.slice(3).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const attacker = fighters[1];
      const target = fighters[2];
      attacker.active = true;
      target.active = true;
      attacker.group.visible = true;
      target.group.visible = true;
      attacker.group.position.set(0, 0, 0);
      target.group.position.set(0, 0, 2);
      attacker.setNumber(10);
      target.setNumber(10);
      target.yaw = Math.PI;
      target.group.rotation.y = Math.PI;
      applyHit(attacker, target, 2, { allowFrontBlock: false, splitReward: true });
      return {
        attackerNumber: attacker.number,
        targetNumber: target.number,
        numberDrops: numberDrops.length,
        damageTexts: damageTexts.length,
        impactBursts: impactBursts.length,
        attackEffects: attackEffects.length
      };
    },
    setupDropLifetimeTest() {
      qaFreezeBots = true;
      for (let index = numberDrops.length - 1; index >= 0; index -= 1) removeNumberDrop(index);
      const target = fighters[1];
      player.group.position.set(ARENA_RADIUS - 4, 0, 0);
      target.group.position.set(ARENA_RADIUS - 1.2, 0, 0);
      spawnNumberDrop(target, player);
      const drop = numberDrops[numberDrops.length - 1];
      drop.velocity.set(11, 4.8, 0);
      player.group.position.set(0, 0, 0);
      target.active = false;
      target.group.visible = false;
      return this.numberDropStates();
    },
    numberDropStates() {
      return numberDrops.map((drop) => ({
        age: drop.age,
        grounded: drop.grounded,
        radius: Math.hypot(drop.group.position.x, drop.group.position.z),
        opacity: drop.materials[0].opacity
      }));
    },
    setupRespawnBotMotionTest() {
      player.group.position.set(0, 0, 0);
      player.setNumber(0);
      eliminate(player);
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const bot = fighters[1];
      bot.active = true;
      bot.group.visible = true;
      bot.group.position.set(0, 0, 8);
      bot.yaw = Math.PI;
      bot.group.rotation.y = bot.yaw;
      bot.setNumber(10);
      bot.aiThink = 0;
      bot.aiGoal = null;
      bot.aiDecisionTimer = 0;
      bot.aiMoveTarget = null;
      bot.aiFoe = null;
    },
    botState(index = 1) {
      const bot = fighters[index];
      return {
        active: bot.active,
        position: [bot.group.position.x, bot.group.position.z],
        aiGoal: bot.aiGoal ? [bot.aiGoal.x, bot.aiGoal.z] : null
      };
    },
    setupCrowdSeparationTest() {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      [rangedPickups, amuletPickups, combatBuffPickups].forEach((collection) => {
        for (let index = collection.length - 1; index >= 0; index -= 1) removeWorldPickup(collection, index);
      });
      fighters.forEach((fighter, index) => {
        fighter.active = index < 7;
        fighter.group.visible = index < 7;
        fighter.respawnTimer = index < 7 ? 0 : 999;
        fighter.attackCooldown = 99;
        fighter.group.position.set((index % 3) * 0.08, 0, Math.floor(index / 3) * 0.08);
      });
      return this.crowdSeparationState();
    },
    crowdSeparationState() {
      const active = fighters.filter((fighter) => fighter.active);
      let minimumDistance = Infinity;
      for (let first = 0; first < active.length; first += 1) {
        for (let second = first + 1; second < active.length; second += 1) {
          minimumDistance = Math.min(minimumDistance, active[first].group.position.distanceTo(active[second].group.position));
        }
      }
      return {
        active: active.length,
        minimumDistance,
        positions: active.map((fighter) => [fighter.group.position.x, fighter.group.position.z])
      };
    },
    setupPickupLifetimeTest() {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      [rangedPickups, amuletPickups, combatBuffPickups].forEach((collection) => {
        for (let index = collection.length - 1; index >= 0; index -= 1) removeWorldPickup(collection, index);
      });
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      fighters.slice(1).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      spawnRangedPickup(new THREE.Vector3(18, 0, 0), 'sniper');
      spawnAmulet(new THREE.Vector3(-18, 0, 0));
      spawnCombatBuff(new THREE.Vector3(0, 0, 18), 'range');
      return this.pickupState();
    },
    pickupState() {
      const pickupDetails = (pickup, extra = {}) => ({
        ...extra,
        age: pickup.age,
        countdownVisible: Boolean(pickup.expiryLabel?.visible),
        countdownText: pickup.expiryLabel?.userData.value ?? null
      });
      return {
        lifetime: PICKUP_LIFETIME,
        ranged: rangedPickups.map((pickup) => pickupDetails(pickup, { type: pickup.type })),
        amulets: amuletPickups.map((pickup) => pickupDetails(pickup)),
        buffs: combatBuffPickups.map((pickup) => pickupDetails(pickup, { type: pickup.type }))
      };
    },
    setPickupAges(age = 7.1) {
      [rangedPickups, amuletPickups, combatBuffPickups].forEach((collection) => {
        collection.forEach((pickup) => { pickup.age = age; });
      });
      return this.pickupState();
    },
    leaderPreferenceState() {
      const bots = fighters.slice(1);
      return {
        total: bots.length,
        biased: bots.filter((bot) => bot.aiLeaderBias).length,
        local: bots.filter((bot) => !bot.aiLeaderBias).length,
        preferences: bots.map((bot) => ({ name: bot.name, leader: bot.aiLeaderBias }))
      };
    },
    setupAmuletHunterTest() {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      [rangedPickups, amuletPickups, combatBuffPickups].forEach((collection) => {
        for (let index = collection.length - 1; index >= 0; index -= 1) removeWorldPickup(collection, index);
      });
      player.active = false;
      player.group.visible = false;
      player.respawnTimer = 999;
      fighters.slice(1).forEach((fighter, index) => {
        fighter.active = index < 6;
        fighter.group.visible = index < 6;
        fighter.respawnTimer = index < 6 ? 0 : 999;
        fighter.invincibleTimer = 0;
        fighter.group.position.set(3 + index * 2, 0, index % 2 ? 1 : -1);
      });
      spawnAmulet(new THREE.Vector3(0, 0, 0));
      return this.amuletHunterState();
    },
    amuletHunterState() {
      const pickup = amuletPickups[0];
      const bots = fighters.slice(1).filter((fighter) => fighter.active).map((fighter) => ({
        name: fighter.name,
        distance: pickup ? fighter.group.position.distanceTo(pickup.group.position) : null,
        huntsAmulet: pickup ? shouldBotContestAmulet(fighter, pickup) : false
      }));
      return {
        maxHunters: MAX_AMULET_AI_HUNTERS,
        activeBots: bots.length,
        hunters: bots.filter((bot) => bot.huntsAmulet).length,
        bots
      };
    },
    setupBotFlankTest() {
      qaFreezeBots = false;
      qaFreezeItemSpawns = true;
      [rangedPickups, amuletPickups, combatBuffPickups].forEach((collection) => {
        for (let index = collection.length - 1; index >= 0; index -= 1) removeWorldPickup(collection, index);
      });
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(50);
      player.invincibleTimer = 0;
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const bot = fighters[1];
      bot.active = true;
      bot.group.visible = true;
      bot.group.position.set(0, 0, 6);
      bot.yaw = Math.PI;
      bot.group.rotation.y = bot.yaw;
      bot.setNumber(10);
      bot.setGun(null, 0);
      bot.attackCooldown = 99;
      bot.aiFlankSign = 1;
      bot.aiFlankSpread = 0;
      bot.aiDecisionTimer = 0;
      bot.aiMoveTarget = null;
      bot.aiFoe = player;
      currentLeader = player;
      return this.botFlankState();
    },
    botFlankState() {
      const bot = fighters[1];
      return {
        position: [bot.group.position.x, bot.group.position.z],
        zone: directionZone(bot, player),
        distance: bot.group.position.distanceTo(player.group.position),
        tactic: bot.aiTactic,
        redZoneOpacity: player.backZoneSector.material.opacity,
        redRingOpacity: player.backZoneRing.material.opacity
      };
    },
    combatBuffPickups() { return combatBuffPickups.map((pickup) => pickup.type); },
    hitPlayer(damage = 2) { applyHit(fighters[1], player, damage, { allowFrontBlock: false }); },
    setupAreaWeaponTest(type = 'sniper') {
      qaFreezeBots = true;
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(10);
      fighters.slice(4).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const offsets = type === 'sniper'
        ? [[0, 6], [1.2, 6], [1.75, 6]]
        : [[2.2, 8.2], [-2.2, 3.8], [3.2, 6]];
      offsets.forEach(([x, z], index) => {
        const target = fighters[index + 1];
        target.active = true;
        target.group.visible = true;
        target.group.position.set(x, 0, z);
        target.yaw = 0;
        target.group.rotation.y = target.yaw;
        target.setNumber(10);
        target.attackCooldown = 99;
      });
      player.setGun(type, 1);
      shoot(player, new THREE.Vector3(0, 0, 6));
    },
    setupSmgCollisionTest() {
      qaFreezeBots = true;
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      fighters.slice(3).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      for (const [index, z] of [[1, 5], [2, 7]]) {
        const target = fighters[index];
        target.active = true;
        target.group.visible = true;
        target.group.position.set(0, 0, z);
        target.yaw = Math.PI;
        target.group.rotation.y = Math.PI;
        target.setNumber(10);
        target.attackCooldown = 99;
      }
      player.setGun('smg', 1);
      shoot(player);
    },
    smgTargets() { return [fighters[1].number, fighters[2].number]; },
    areaWeaponTargets() { return fighters.slice(1, 4).map((fighter) => fighter.number); },
    combatEconomyState() {
      return {
        playerNumber: player.number,
        invincibleTimer: player.invincibleTimer,
        groundDrops: numberDrops.length,
        targets: fighters.slice(1, 4).map((fighter) => fighter.number)
      };
    },
    setupDirectionalRewardTest(type = 'smg', backHit = false) {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      for (let index = numberDrops.length - 1; index >= 0; index -= 1) removeNumberDrop(index);
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(10);
      fighters.slice(2).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.group.position.set(0, 0, type === 'smg' ? 5 : 6.45);
      target.yaw = backHit ? 0 : Math.PI;
      target.group.rotation.y = target.yaw;
      target.setNumber(20);
      target.attackCooldown = 99;
      player.setGun(type, 1);
      shoot(player, new THREE.Vector3(0, 0, 6));
    },
    directionalRewardState() {
      return {
        playerNumber: player.number,
        invincibleTimer: player.invincibleTimer,
        targetNumber: fighters[1].number,
        groundDrops: numberDrops.length
      };
    },
    setupRocketSelfDamageTest(invincible = false) {
      qaFreezeBots = true;
      qaFreezeItemSpawns = true;
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      for (let index = numberDrops.length - 1; index >= 0; index -= 1) removeNumberDrop(index);
      fighters.slice(1).forEach((fighter) => {
        fighter.active = false;
        fighter.group.visible = false;
        fighter.respawnTimer = 999;
      });
      player.active = true;
      player.group.visible = true;
      player.group.position.set(0, 0, 0);
      player.yaw = 0;
      player.group.rotation.y = 0;
      player.setNumber(20);
      player.invincibleTimer = invincible ? 10 : 0;
      player.setGun('rocket', 1);
      shoot(player, player.group.position.clone());
    },
    setupLethalRocketSelfDamageTest() {
      this.setupRocketSelfDamageTest(false);
      projectiles.splice(0).forEach((shot) => scene.remove(shot.mesh));
      for (let index = numberDrops.length - 1; index >= 0; index -= 1) removeNumberDrop(index);
      player.setNumber(1);
      const target = fighters[1];
      target.active = true;
      target.group.visible = true;
      target.respawnTimer = 0;
      target.group.position.set(0, 0, 0.8);
      target.yaw = Math.PI;
      target.group.rotation.y = target.yaw;
      target.setNumber(20);
      target.attackCooldown = 99;
      player.setGun('rocket', 1);
      shoot(player, player.group.position.clone());
    },
    rocketSelfDamageState() {
      return {
        number: player.number,
        active: player.active,
        invincibleTimer: player.invincibleTimer,
        groundDrops: numberDrops.length,
        firstTargetNumber: fighters[1].number,
        rocketsInFlight: projectiles.filter((shot) => shot.type === 'rocket').length
      };
    },
    rocketVisualState() {
      const rocketShot = projectiles.find((shot) => shot.type === 'rocket');
      return {
        projectilePresent: Boolean(rocketShot),
        projectileParts: rocketShot?.mesh.children?.length || 0,
        trailEffects: attackEffects.filter((effect) => effect.kind === 'rocket-trail').length,
        explosionEffects: attackEffects.filter((effect) => effect.kind === 'rocket-explosion' || effect.kind === 'rocket-debris').length,
        cameraShake
      };
    },
    rangedWeaponConfig() {
      return {
        sniperInstant: !projectiles.some((shot) => shot.type === 'sniper'),
        sniperRadius: SNIPER_BLAST_RADIUS,
        rocketGridSize: ROCKET_GRID_SIZE,
        rocketGridHalfSize: ROCKET_GRID_HALF_SIZE,
        rocketGridInOriginalCells: ROCKET_GRID_SIZE / ROCKET_GRID_CELL_SIZE
      };
    },
    amuletState() {
      const pickup = amuletPickups[0];
      return pickup ? {
        position: [pickup.group.position.x, pickup.group.position.z],
        nearestFighter: Math.min(...fighters.filter((fighter) => fighter.active)
          .map((fighter) => fighter.group.position.distanceTo(pickup.group.position)))
      } : null;
    },
    finishRound(numbers = []) {
      numbers.forEach((number, index) => {
        if (fighters[index] && Number.isFinite(number)) fighters[index].setNumber(number);
      });
      roundTime = 0;
      endRound('time');
      return this.resultState();
    },
    resultState() {
      return {
        visible: !resultScreen.classList.contains('hidden'),
        running,
        title: resultTitleEl.textContent,
        summary: resultSummaryEl.textContent,
        playerRank: resultPlayerRankEl.textContent,
        playerNumber: resultPlayerNumberEl.textContent,
        cardClass: resultCard.className,
        crown: resultCrownEl.textContent,
        fullRankingVisible: getComputedStyle(resultScreen.querySelector('.result-content')).display !== 'none',
        rows: [...resultRankingListEl.querySelectorAll('.result-row')].map((row) => row.textContent.trim()),
        playerRows: resultRankingListEl.querySelectorAll('.player-row').length
      };
    },
    state() {
      return {
        active: player.active,
        number: player.number,
        respawnTimer: player.respawnTimer,
        invincibleTimer: player.invincibleTimer,
        meleeWeapon: player.meleeWeapon,
        rangeBuffTimer: player.rangeBuffTimer,
        damageBuffTimer: player.damageBuffTimer,
        attackDamageMultiplier: player.attackDamageMultiplier,
        boosting: player.boosting,
        moveSpeed: player.moveSpeed,
        turnSpeed: player.turnSpeed,
        attackRange: player.attackRange,
        modelScale: player.model.scale.x,
        attacksPerSecond: player.attacksPerSecond,
        meleeAttackInterval: player.meleeAttackInterval,
        leader: currentLeader?.name ?? null
      };
    },
    networkState() {
      return {
        mode: networkMode,
        roomId: networkRoomId,
        playerId: networkPlayerId,
        localSlot: networkLocalSlot,
        members: networkMembers.map((member) => ({ id: member.id, name: member.name, slot: member.slot, host: member.host })),
        running,
        snapshotReceived: networkSnapshotReceived,
        fighters: fighters.map((fighter, localIndex) => ({
          localIndex,
          authoritativeSlot: networkSlotForLocalIndex(localIndex),
          name: fighter.name,
          human: Boolean(fighter.networkHuman),
          x: Number(fighter.group.position.x.toFixed(3)),
          z: Number(fighter.group.position.z.toFixed(3)),
          number: fighter.number,
          active: fighter.active
        }))
      };
    },
    forceNetworkHit(attackerSlot = 1, targetSlot = 0, backHit = false, baseDamage = 2) {
      if (networkMode !== 'host') return { ok: false, reason: 'host-only' };
      const attacker = fighters[attackerSlot];
      const target = fighters[targetSlot];
      if (!attacker || !target) return { ok: false, reason: 'bad-slot' };
      attacker.active = true;
      target.active = true;
      attacker.group.visible = true;
      target.group.visible = true;
      attacker.setNumber(10);
      target.setNumber(10);
      target.group.position.set(0, 0, 0);
      target.yaw = 0;
      target.group.rotation.y = 0;
      attacker.group.position.set(0, 0, backHit ? -2 : 2);
      applyHit(attacker, target, Number(baseDamage) || 2, { allowFrontBlock: false, splitReward: true });
      broadcastNetworkSnapshot(true);
      return { ok: true, attackerNumber: attacker.number, targetNumber: target.number, drops: numberDrops.length };
    }
  };
}

function networkSocketOpen() {
  return networkSocket?.readyState === WebSocket.OPEN;
}

function setOnlineStatus(text, state = 'offline') {
  onlineStatusEl.textContent = text;
  onlineStatusEl.dataset.state = state;
}

function selectedAppearance() {
  return {
    shirt: canvasColor(player.shirtMaterial.color),
    hair: player.hairStyle,
    hairColor: player.hairColor,
    outfit: player.outfitStyle,
    pants: canvasColor(player.pantsMaterial.color),
    pantsStyle: player.pantsStyle,
    shoes: canvasColor(player.shoeMaterial.color),
    shoesStyle: player.shoesStyle,
    meleeStyle: player.meleeStyle
  };
}

function chosenNetworkName() {
  const value = onlineNameInput.value.replace(/[<>\r\n]/g, '').trim().slice(0, 10) || '玩家';
  onlineNameInput.value = value;
  try { localStorage.setItem('number-brawl-player-name', value); } catch {}
  return value;
}

function sendNetworkMessage(message) {
  if (networkSocketOpen()) networkSocket.send(JSON.stringify(message));
}

function sendNetworkAppearance() {
  if (!networkRoomId || !networkSocketOpen()) return;
  sendNetworkMessage({ type: 'appearance', name: chosenNetworkName(), appearance: selectedAppearance(), ready: playerPrewarmReady });
}

function localIndexForNetworkSlot(slot) {
  if (networkMode !== 'guest') return slot;
  if (slot === networkLocalSlot) return 0;
  if (slot === 0) return networkLocalSlot;
  return slot;
}

function networkSlotForLocalIndex(index) {
  if (networkMode !== 'guest') return index;
  if (index === 0) return networkLocalSlot;
  if (index === networkLocalSlot) return 0;
  return index;
}

function applyNetworkRoster(members = networkMembers) {
  networkMembers = members;
  const humansBySlot = new Map(members.map((member) => [member.slot, member]));
  const activeMemberIds = new Set(members.map((member) => member.id));
  for (const id of networkAppearanceSignatures.keys()) {
    if (!activeMemberIds.has(id)) networkAppearanceSignatures.delete(id);
  }
  for (let authoritativeSlot = 0; authoritativeSlot < fighters.length; authoritativeSlot += 1) {
    const localIndex = localIndexForNetworkSlot(authoritativeSlot);
    const fighter = fighters[localIndex];
    const member = humansBySlot.get(authoritativeSlot);
    fighter.networkHuman = Boolean(member);
    fighter.networkPlayerId = member?.id || '';
    fighter.name = member?.name || `人机${authoritativeSlot + 1}`;
    if (member?.appearance) {
      const appearanceSignature = JSON.stringify(member.appearance);
      if (networkAppearanceSignatures.get(member.id) !== appearanceSignature) {
        networkAppearanceSignatures.set(member.id, appearanceSignature);
        fighter.setAppearance(member.appearance);
        if (!fighter.isPlayer && !running) scheduleRemoteFighterAvatarPrewarm(fighter);
      }
    }
  }
  roomRosterEl.replaceChildren(...members.map((member) => {
    const item = document.createElement('span');
    const state = member.connected === false ? '↻ ' : member.ready ? '✓ ' : '… ';
    item.textContent = `${state}${member.host ? '房主·' : ''}${member.id === networkPlayerId ? '你' : member.name}`;
    return item;
  }));
  const connectedCount = members.filter((member) => member.connected !== false).length;
  roomPlayerCountEl.textContent = `${connectedCount}名真人 + ${Math.max(0, 15 - connectedCount)}名人机`;
  const allReady = members.length > 0 && members.every((member) => member.connected !== false && member.ready);
  if (networkMode === 'host') {
    startButton.disabled = !allReady;
    startButton.textContent = allReady ? `开始联机对局（${members.length}真人）` : '等待玩家准备动画…';
  } else if (networkMode === 'guest') {
    startButton.disabled = true;
    startButton.textContent = playerPrewarmReady ? '等待房主开始' : '正在准备流畅动画…';
  }
}

function resetNetworkRoom(message = '已返回单人模式') {
  if (networkReconnectTimer) {
    clearTimeout(networkReconnectTimer);
    networkReconnectTimer = 0;
  }
  networkMode = 'solo';
  networkRoomId = '';
  networkPlayerId = '';
  networkResumeToken = '';
  networkReconnectAttempts = 0;
  networkReconnectInProgress = false;
  networkPendingAction = null;
  networkLocalSlot = 0;
  networkMembers = [];
  networkRemoteInputs.clear();
  networkAppearanceSignatures.clear();
  networkSnapshotReceived = false;
  roomInfoEl.classList.add('hidden');
  startButton.disabled = false;
  startButton.textContent = '单人开局';
  createRoomButton.disabled = false;
  joinRoomButton.disabled = false;
  setOnlineStatus(message, 'offline');
}

function openNetworkSocket(reconnecting = false) {
  networkManualDisconnect = false;
  networkReconnectInProgress = reconnecting;
  networkSocketGeneration += 1;
  const generation = networkSocketGeneration;
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const socketUrl = new URL(`${protocol}//${location.host}/ws`);
  if (networkResumeToken) socketUrl.searchParams.set('resume', networkResumeToken);
  const socket = new WebSocket(socketUrl);
  networkSocket = socket;
  socket.addEventListener('message', (event) => {
    let message;
    try { message = JSON.parse(event.data); } catch { return; }
    handleNetworkMessage(message);
  });
  socket.addEventListener('close', () => {
    if (generation !== networkSocketGeneration || networkManualDisconnect) return;
    if (networkMode === 'solo' && !networkPendingAction) {
      createRoomButton.disabled = false;
      joinRoomButton.disabled = false;
      return;
    }
    scheduleNetworkReconnect();
  });
  socket.addEventListener('error', () => {
    if (generation !== networkSocketGeneration) return;
    setOnlineStatus(reconnecting ? '重连失败，继续尝试…' : '暂时无法连接服务器', 'error');
  });
}

function scheduleNetworkReconnect() {
  if (networkReconnectTimer || networkManualDisconnect) return;
  networkReconnectAttempts += 1;
  if (networkReconnectAttempts > 7) {
    if (running) flashMessage('重连超时，已转为单人状态', 1.8);
    resetNetworkRoom('重连超时，请重新加入房间');
    return;
  }
  const delay = Math.min(350 * (2 ** (networkReconnectAttempts - 1)), 3000);
  setOnlineStatus(`连接中断，正在第 ${networkReconnectAttempts} 次重连…`, 'connecting');
  networkReconnectTimer = window.setTimeout(() => {
    networkReconnectTimer = 0;
    openNetworkSocket(true);
  }, delay);
}

function connectForNetwork(action) {
  createRoomButton.disabled = true;
  joinRoomButton.disabled = true;
  setOnlineStatus('正在连接…', 'connecting');
  networkPendingAction = {
    ...action,
    name: chosenNetworkName(),
    appearance: selectedAppearance(),
    ready: playerPrewarmReady
  };
  if (networkSocketOpen()) {
    sendNetworkMessage(networkPendingAction);
    networkPendingAction = null;
    return;
  }
  if (networkSocket) {
    networkSocketGeneration += 1;
    try { networkSocket.close(); } catch {}
  }
  openNetworkSocket(false);
}

function ensureNetworkId(entity) {
  if (!entity.networkId) entity.networkId = networkEntitySequence++;
  return entity.networkId;
}

function queueNetworkEvent(event) {
  if (networkMode !== 'host' || !networkRoomId || networkMembers.length <= 1) return;
  networkEventQueue.push({ ...event, id: ++networkEventSequence });
}

function serializeFighterForNetwork(fighter) {
  return {
    x: Number(fighter.group.position.x.toFixed(3)),
    z: Number(fighter.group.position.z.toFixed(3)),
    yaw: Number(fighter.yaw.toFixed(4)),
    number: fighter.number,
    active: fighter.active,
    respawnTimer: Number(fighter.respawnTimer.toFixed(2)),
    invincibleTimer: Number(fighter.invincibleTimer.toFixed(2)),
    rangeBuffTimer: Number(fighter.rangeBuffTimer.toFixed(2)),
    damageBuffTimer: Number(fighter.damageBuffTimer.toFixed(2)),
    boosting: fighter.boosting,
    weaponType: fighter.weaponType,
    ammo: fighter.ammo,
    meleeStyle: fighter.meleeStyle,
    attackCooldown: Number(fighter.attackCooldown.toFixed(3)),
    attackAnimation: Number(fighter.attackAnimation.toFixed(3)),
    attackAnimationDuration: Number(fighter.attackAnimationDuration.toFixed(3)),
    attackResolved: fighter.attackResolved,
    gunRecoil: Number(fighter.gunRecoil.toFixed(3)),
    hitPulse: Number(fighter.hitPulse.toFixed(3)),
    hitReaction: Number(fighter.hitReaction.toFixed(3)),
    moving: fighter.isMoving || fighter.motionBlend > 0.3
  };
}

function broadcastNetworkSnapshot(force = false) {
  if (networkMode !== 'host' || !networkRoomId || !networkSocketOpen()) return;
  if (networkMembers.length <= 1) {
    networkEventQueue.length = 0;
    return;
  }
  if (!force && networkSnapshotTimer > 0) return;
  networkSnapshotTimer = 1 / 12;
  sendNetworkMessage({
    type: 'snapshot',
    running,
    roundTime: Number(roundTime.toFixed(2)),
    leaderSlot: currentLeader ? fighters.indexOf(currentLeader) : -1,
    fighters: fighters.map(serializeFighterForNetwork),
    numberDrops: numberDrops.map((drop) => ({
      id: ensureNetworkId(drop), x: Number(drop.group.position.x.toFixed(3)), y: Number(drop.group.position.y.toFixed(3)),
      z: Number(drop.group.position.z.toFixed(3)), age: Number(drop.age.toFixed(2)), grounded: drop.grounded
    })),
    rangedPickups: rangedPickups.map((pickup) => ({
      id: ensureNetworkId(pickup), type: pickup.type, x: Number(pickup.group.position.x.toFixed(3)),
      y: Number(pickup.group.position.y.toFixed(3)), z: Number(pickup.group.position.z.toFixed(3)), age: Number(pickup.age.toFixed(2))
    })),
    amuletPickups: amuletPickups.map((pickup) => ({
      id: ensureNetworkId(pickup), x: Number(pickup.group.position.x.toFixed(3)), y: Number(pickup.group.position.y.toFixed(3)),
      z: Number(pickup.group.position.z.toFixed(3)), age: Number(pickup.age.toFixed(2))
    })),
    combatBuffPickups: combatBuffPickups.map((pickup) => ({
      id: ensureNetworkId(pickup), type: pickup.type, x: Number(pickup.group.position.x.toFixed(3)),
      y: Number(pickup.group.position.y.toFixed(3)), z: Number(pickup.group.position.z.toFixed(3)), age: Number(pickup.age.toFixed(2))
    })),
    projectiles: projectiles.map((shot) => ({
      id: ensureNetworkId(shot), type: shot.type, x: Number(shot.mesh.position.x.toFixed(3)),
      y: Number(shot.mesh.position.y.toFixed(3)), z: Number(shot.mesh.position.z.toFixed(3)),
      yaw: Number(shot.mesh.rotation.y.toFixed(4)), ownerSlot: fighters.indexOf(shot.owner), targetSlot: shot.networkTargetSlot ?? -1
    })),
    events: networkEventQueue.splice(0)
  });
}

function removeNetworkProjectileVisual(id) {
  const visual = networkProjectileVisuals.get(id);
  if (!visual) return;
  scene.remove(visual.mesh);
  visual.mesh.traverse((part) => {
    if (part.geometry) part.geometry.dispose();
    if (part.material) part.material.dispose();
  });
  networkProjectileVisuals.delete(id);
}

function syncNetworkProjectiles(states = []) {
  const liveIds = new Set(states.map((state) => state.id));
  for (const id of networkProjectileVisuals.keys()) if (!liveIds.has(id)) removeNetworkProjectileVisual(id);
  for (const state of states) {
    const ownerIsLocal = state.ownerSlot === networkLocalSlot;
    const targetsLocal = state.targetSlot === networkLocalSlot;
    if (!ownerIsLocal && !targetsLocal) {
      removeNetworkProjectileVisual(state.id);
      continue;
    }
    let visual = networkProjectileVisuals.get(state.id);
    if (!visual) {
      const mesh = state.type === 'rocket'
        ? createRocketProjectile()
        : new THREE.Mesh(
          new THREE.SphereGeometry(0.13, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x75ffd2 })
        );
      mesh.position.set(state.x, state.y, state.z);
      scene.add(mesh);
      visual = { mesh, target: new THREE.Vector3(state.x, state.y, state.z) };
      networkProjectileVisuals.set(state.id, visual);
    }
    visual.target.set(state.x, state.y, state.z);
    visual.mesh.rotation.y = state.yaw;
  }
}

function reconcileNetworkItems(collection, states, createItem, removeItem) {
  const stateById = new Map(states.map((state) => [state.id, state]));
  for (let index = collection.length - 1; index >= 0; index -= 1) {
    if (!stateById.has(collection[index].networkId)) removeItem(index);
  }
  const itemById = new Map(collection.map((item) => [item.networkId, item]));
  for (const state of states) {
    let item = itemById.get(state.id);
    if (!item) {
      item = createItem(state);
      item.networkId = state.id;
      itemById.set(state.id, item);
    }
    item.group.position.set(state.x, state.y, state.z);
    item.age = state.age;
    if ('grounded' in state) {
      item.grounded = state.grounded;
      item.velocity.set(0, 0, 0);
    }
  }
}

function syncNetworkWorld(snapshot) {
  reconcileNetworkItems(numberDrops, snapshot.numberDrops || [], (state) => {
    spawnNumberDrop(player, fighters[1]);
    return numberDrops[numberDrops.length - 1];
  }, removeNumberDrop);
  reconcileNetworkItems(rangedPickups, snapshot.rangedPickups || [], (state) => {
    spawnRangedPickup(new THREE.Vector3(state.x, 0, state.z), state.type);
    return rangedPickups[rangedPickups.length - 1];
  }, (index) => removeWorldPickup(rangedPickups, index));
  reconcileNetworkItems(amuletPickups, snapshot.amuletPickups || [], (state) => {
    spawnAmulet(new THREE.Vector3(state.x, 0, state.z));
    return amuletPickups[amuletPickups.length - 1];
  }, (index) => removeWorldPickup(amuletPickups, index));
  reconcileNetworkItems(combatBuffPickups, snapshot.combatBuffPickups || [], (state) => {
    spawnCombatBuff(new THREE.Vector3(state.x, 0, state.z), state.type);
    return combatBuffPickups[combatBuffPickups.length - 1];
  }, (index) => removeWorldPickup(combatBuffPickups, index));
  syncNetworkProjectiles(snapshot.projectiles || []);
}

function showNetworkPickupEvent(event) {
  if (event.targetSlot !== networkLocalSlot) return;
  const messages = {
    smg: '捡到冲锋枪：12发', sniper: '捡到狙击枪：6发', rocket: '捡到火箭筒：1发',
    amulet: '获得无敌护符：10秒内不掉数字！', rangeBuff: '获得攻击范围 ×1.5！', damageBuff: '获得攻击伤害 ×1.5！'
  };
  playGameSound('pickup');
  flashMessage(messages[event.pickupType] || '获得道具', 1.1);
}

function showNetworkHitEvent(event) {
  const attackerIndex = localIndexForNetworkSlot(event.attackerSlot);
  const targetIndex = localIndexForNetworkSlot(event.targetSlot);
  if (attackerIndex !== 0 && targetIndex !== 0) return;
  const attacker = fighters[attackerIndex];
  const target = fighters[targetIndex];
  const source = new THREE.Vector3(event.sourceX, 0, event.sourceZ);
  if (event.outcome === 'invincible') {
    playGameSound('shield');
    showImpactFeedback(target, 0, false, 'invincible', source);
    flashMessage('无敌护符挡住了伤害！', 0.65);
    return;
  }
  if (event.outcome === 'blocked') {
    playGameSound('blocked');
    showImpactFeedback(target, 0, false, 'blocked', source);
    flashMessage('同数字正面对打：挡住了！', 0.8);
    return;
  }
  playGameSound(event.backHit ? 'backHit' : 'hit');
  showImpactFeedback(target, event.damage, event.backHit, 'hit', source);
  triggerScreenImpact(event.backHit ? 0.5 : 0.28, event.backHit);
  if (attackerIndex === 0 && event.directGain > 0) makeDamageText(`+${event.directGain}`, '#74ffc1', attacker, event.backHit);
  const splitText = `，吸收 ${event.directGain || 0}、掉落 ${event.groundDropCount || 0}`;
  if (attackerIndex === 0 && targetIndex === 0) {
    flashMessage(`火箭自伤 ${event.damage}，掉落 ${event.groundDropCount || 0}！`, 0.8);
  } else if (attackerIndex === 0) {
    flashMessage(event.backHit ? `背后命中 ${event.damage}${splitText}！` : `命中 ${event.damage}${splitText}`, 0.8);
  } else {
    flashMessage(event.backHit ? `背后受到 ${event.damage} 点伤害！` : `受到 ${event.damage} 点伤害！`, 0.8);
  }
}

function applyNetworkSnapshot(snapshot) {
  const firstSnapshot = !networkSnapshotReceived;
  networkSnapshotReceived = true;
  roundTime = Math.max(0, snapshot.roundTime || 0);
  for (let slot = 0; slot < snapshot.fighters.length; slot += 1) {
    const state = snapshot.fighters[slot];
    const fighter = fighters[localIndexForNetworkSlot(slot)];
    if (!fighter.networkTargetPosition) fighter.networkTargetPosition = new THREE.Vector3(state.x, 0, state.z);
    fighter.networkTargetPosition.set(state.x, 0, state.z);
    if (firstSnapshot) fighter.group.position.set(state.x, 0, state.z);
    fighter.networkTargetYaw = state.yaw;
    fighter.networkMoving = state.moving;
    fighter.active = state.active;
    fighter.group.visible = state.active;
    fighter.respawnTimer = state.respawnTimer;
    fighter.boosting = state.boosting;
    fighter.invincibleTimer = state.invincibleTimer;
    fighter.rangeBuffTimer = state.rangeBuffTimer;
    fighter.damageBuffTimer = state.damageBuffTimer;
    fighter.attackCooldown = state.attackCooldown;
    fighter.attackAnimation = state.attackAnimation;
    fighter.attackAnimationDuration = state.attackAnimationDuration || 0.47;
    fighter.attackResolved = state.attackResolved;
    fighter.gunRecoil = Math.max(fighter.gunRecoil, state.gunRecoil);
    fighter.hitPulse = Math.max(fighter.hitPulse, state.hitPulse);
    fighter.hitReaction = Math.max(fighter.hitReaction, state.hitReaction);
    if (fighter.number !== state.number) fighter.setNumber(state.number);
    if (fighter.weaponType !== state.weaponType) fighter.setGun(state.weaponType, state.ammo);
    else fighter.ammo = state.ammo;
    if (fighter.meleeStyle !== state.meleeStyle) fighter.setMeleeStyle(state.meleeStyle);
  }
  currentLeader = snapshot.leaderSlot >= 0 ? fighters[localIndexForNetworkSlot(snapshot.leaderSlot)] : null;
  const minutes = Math.floor(roundTime / 60);
  const seconds = Math.floor(roundTime % 60);
  setTextIfChanged(timerEl, `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  updateWeaponHud(player);
  if (!player.active) {
    respawnHud.classList.add('show');
    respawnTimeEl.textContent = player.respawnTimer.toFixed(1);
  } else {
    respawnHud.classList.remove('show');
  }
  syncNetworkWorld(snapshot);
  for (const event of snapshot.events || []) {
    if (event.id <= networkLastEventId) continue;
    networkLastEventId = event.id;
    if (event.kind === 'hit') showNetworkHitEvent(event);
    else if (event.kind === 'pickup') showNetworkPickupEvent(event);
  }
  if (running && snapshot.running === false) endRound('time');
}

function handleNetworkMessage(message) {
  if (message.type === 'connected') {
    networkPlayerId = message.playerId || networkPlayerId;
    networkResumeToken = message.resumeToken || networkResumeToken;
    if (networkReconnectInProgress && networkRoomId && !message.resumed) {
      networkManualDisconnect = true;
      try { networkSocket?.close(); } catch {}
      resetNetworkRoom('房间重连已超时，请重新加入');
      return;
    }
    networkReconnectAttempts = 0;
    networkReconnectInProgress = false;
    if (message.resumed) setOnlineStatus('已重新连接', 'online');
    if (networkPendingAction) {
      sendNetworkMessage(networkPendingAction);
      networkPendingAction = null;
    }
  } else if (message.type === 'joined') {
    networkRoomId = message.roomId;
    networkPlayerId = message.playerId;
    networkLocalSlot = message.slot;
    networkMode = message.host ? 'host' : 'guest';
    roomCodeDisplayEl.textContent = networkRoomId;
    roomInfoEl.classList.remove('hidden');
    createRoomButton.disabled = true;
    joinRoomButton.disabled = true;
    setOnlineStatus(message.resumed ? '已重新连接房间' : message.host ? '你是房主' : '已加入房间', 'online');
  } else if (message.type === 'roster') {
    applyNetworkRoster(message.members || []);
  } else if (message.type === 'remoteInput' && networkMode === 'host') {
    const previous = networkRemoteInputs.get(message.playerId) || { lastFireSequence: -1 };
    networkRemoteInputs.set(message.playerId, { ...previous, ...(message.input || {}), slot: message.slot });
  } else if (message.type === 'playerLeft') {
    networkRemoteInputs.delete(message.playerId);
    flashMessage('一名玩家离开，已由人机接管', 1.1);
  } else if (message.type === 'hostChanged') {
    if (message.playerId === networkPlayerId) {
      networkMode = 'host';
      networkLocalSlot = Number(message.slot) || 0;
      networkRemoteInputs.clear();
      setOnlineStatus('原房主离开，你已成为新房主', 'online');
      flashMessage('你已成为新房主，对局继续！', 1.8);
    } else {
      setOnlineStatus('房主已更换，对局继续', 'online');
      flashMessage(message.message || '房主已更换', 1.4);
    }
  } else if (message.type === 'start') {
    if (message.members) applyNetworkRoster(message.members);
    beginRound();
  } else if (message.type === 'snapshot' && networkMode === 'guest') {
    applyNetworkSnapshot(message);
  } else if (message.type === 'roomClosed') {
    flashMessage(message.message || '房间已关闭', 1.6);
    resetNetworkRoom('房间已关闭');
  } else if (message.type === 'serverRestart') {
    setOnlineStatus(message.message || '服务器更新中，准备重连…', 'connecting');
  } else if (message.type === 'error') {
    createRoomButton.disabled = false;
    joinRoomButton.disabled = false;
    setOnlineStatus(message.message || '联机失败', 'error');
  }
}

function sendNetworkInput(force = false) {
  if (networkMode !== 'guest' || !running || !networkSocketOpen()) return;
  if (!force && networkInputTimer > 0) return;
  networkInputTimer = 0.05;
  const direction = aimPoint.clone().sub(player.group.position).setY(0);
  const aimYaw = direction.lengthSq() > 0.001 ? Math.atan2(direction.x, direction.z) : player.yaw;
  sendNetworkMessage({
    type: 'input',
    input: {
      moveX: (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0),
      moveZ: (keys.KeyS ? 1 : 0) - (keys.KeyW ? 1 : 0),
      aimYaw,
      aimX: Number(aimPoint.x.toFixed(3)),
      aimZ: Number(aimPoint.z.toFixed(3)),
      boost: Boolean(keys.ShiftLeft || keys.ShiftRight),
      fireHeld: mouseFireHeld,
      fireSequence: networkFireSequence
    }
  });
}

function updateRemoteHuman(fighter, controller, dt) {
  if (!fighter.active) return;
  const input = fighter.networkMoveVector.set(Number(controller?.moveX) || 0, 0, Number(controller?.moveZ) || 0);
  const moving = input.lengthSq() > 0.001;
  const aimYaw = Number(controller?.aimYaw);
  if (Number.isFinite(aimYaw)) fighter.turnToward(aimYaw, dt);
  fighter.boosting = Boolean(controller?.boost) && fighter.number >= 30;
  if (fighter.boosting && moving && fighter.invincibleTimer <= 0) {
    fighter.boostDrain += dt;
    while (fighter.boostDrain >= BOOST_COST_INTERVAL && fighter.active) {
      fighter.boostDrain -= BOOST_COST_INTERVAL;
      fighter.setNumber(fighter.number - 1);
      if (fighter.number === 0) eliminate(fighter);
    }
  }
  if (fighter.number < 30) fighter.boosting = false;
  fighter.move(input, dt);
  const targetPoint = fighter.networkAimPoint.set(Number(controller?.aimX) || 0, 0, Number(controller?.aimZ) || 0);
  const sequence = Number(controller?.fireSequence) || 0;
  if (fighter.weaponType === 'smg' && controller?.fireHeld) shoot(fighter, targetPoint);
  else if (fighter.weaponType && sequence > (controller?.lastFireSequence ?? -1)) shoot(fighter, targetPoint);
  if (controller) controller.lastFireSequence = Math.max(controller.lastFireSequence ?? -1, sequence);
  const enemyInSwing = fighters.some((target) => {
    if (target === fighter || !target.active) return false;
    return targetInsideAttackArc(fighter, target);
  });
  if (enemyInSwing) meleeAttack(fighter);
}

function updateNetworkGuest(dt) {
  raycaster.setFromCamera(mouseNdc, camera);
  raycaster.ray.intersectPlane(aimPlane, aimPoint);
  const aimingRocket = player.weaponType === 'rocket';
  aimMarker.visible = !aimingRocket;
  aimMarker.position.set(aimPoint.x, 0.05, aimPoint.z);
  const markerRadius = player.weaponType === 'sniper' ? SNIPER_BLAST_RADIUS : 0.42;
  aimMarker.scale.setScalar(markerRadius / 0.42);
  aimMarker.material.color.set(player.weaponType === 'sniper' ? 0x82b5ff : 0x8ceeff);
  rocketAimGrid.visible = aimingRocket;
  rocketAimGrid.position.set(aimPoint.x, 0.058, aimPoint.z);
  networkInputTimer = Math.max(0, networkInputTimer - dt);
  sendNetworkInput();
  const smoothing = 1 - Math.exp(-dt * 18);
  for (const fighter of fighters) {
    if (!fighter.networkTargetPosition) continue;
    const before = fighter.group.position.clone();
    fighter.group.position.lerp(fighter.networkTargetPosition, smoothing);
    fighter.yaw += angleDelta(fighter.yaw, fighter.networkTargetYaw ?? fighter.yaw) * smoothing;
    fighter.group.rotation.y = fighter.yaw;
    fighter.isMoving = fighter.networkMoving || before.distanceToSquared(fighter.group.position) > 0.0001;
  }
  for (const visual of networkProjectileVisuals.values()) {
    visual.mesh.position.lerp(visual.target, 1 - Math.exp(-dt * 24));
    visual.mesh.rotation.z += dt * 4.5;
  }
  for (const drop of numberDrops) drop.group.rotation.y += dt * 3;
  for (const pickup of rangedPickups) pickup.group.rotation.y += dt * 1.8;
  for (const pickup of amuletPickups) pickup.group.rotation.y += dt * 1.6;
  for (const pickup of combatBuffPickups) pickup.group.rotation.y += dt * (pickup.type === 'range' ? 2.4 : 3.6);
}

function beginRound() {
  if (running) return;
  ensureGameAudio();
  playGameSound('start');
  running = true;
  aimMarker.visible = true;
  startScreen.classList.add('hidden');
  if (amuletPickups.length) flashMessage('全图通告：无敌护符已出现在远离人群的隐蔽区域！', 2.2);
  if (networkMode === 'host') broadcastNetworkSnapshot(true);
}

try {
  const savedName = localStorage.getItem('number-brawl-player-name');
  if (savedName) onlineNameInput.value = savedName;
} catch {}

createRoomButton.addEventListener('click', () => connectForNetwork({ type: 'create' }));
joinRoomButton.addEventListener('click', () => {
  const code = roomCodeInput.value.trim().toUpperCase();
  if (code.length !== 6) {
    setOnlineStatus('请输入6位邀请码', 'error');
    return;
  }
  connectForNetwork({ type: 'join', roomId: code });
});
roomCodeInput.addEventListener('input', () => { roomCodeInput.value = roomCodeInput.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6); });
onlineNameInput.addEventListener('change', sendNetworkAppearance);
leaveRoomButton.addEventListener('click', () => {
  networkManualDisconnect = true;
  sendNetworkMessage({ type: 'leave' });
  networkSocket?.close();
  resetNetworkRoom();
});
copyInviteButton.addEventListener('click', async () => {
  const inviteOrigin = window.__NUMBER_BRAWL_INVITE_ORIGIN__ || location.origin;
  const invite = new URL(inviteOrigin);
  invite.searchParams.set('room', networkRoomId);
  try {
    await navigator.clipboard.writeText(invite.href);
    copyInviteButton.textContent = '已复制，发给朋友';
  } catch {
    window.prompt('复制这条邀请链接', invite.href);
  }
});

const invitedRoomCode = new URLSearchParams(location.search).get('room');
if (invitedRoomCode) {
  roomCodeInput.value = invitedRoomCode.toUpperCase().slice(0, 6);
  setTimeout(() => joinRoomButton.click(), 120);
}

function startRequestedRound() {
  if (startButton.dataset.finished === 'true') {
    location.reload();
    return;
  }
  if (networkMode === 'guest') return;
  if (!playerPrewarmReady) {
    pendingStartAfterPrewarm = true;
    startButton.disabled = true;
    startButton.textContent = '正在准备流畅动画…';
    return;
  }
  if (networkMode === 'host') {
    sendNetworkMessage({ type: 'start' });
    startButton.disabled = true;
    startButton.textContent = '正在开始…';
    return;
  }
  beginRound();
}

startButton.addEventListener('click', () => {
  startRequestedRound();
});

function updatePlayer(dt) {
  raycaster.setFromCamera(mouseNdc, camera);
  raycaster.ray.intersectPlane(aimPlane, aimPoint);
  aimMarker.position.set(aimPoint.x, 0.05, aimPoint.z);
  const aimingRocket = player.weaponType === 'rocket';
  const markerRadius = player.weaponType === 'sniper'
      ? SNIPER_BLAST_RADIUS
      : 0.42;
  aimMarker.visible = !aimingRocket;
  aimMarker.scale.setScalar(markerRadius / 0.42);
  aimMarker.material.color.set(player.weaponType === 'sniper' ? 0x82b5ff : 0x8ceeff);
  rocketAimGrid.visible = aimingRocket;
  rocketAimGrid.position.set(aimPoint.x, 0.058, aimPoint.z);
  const input = playerMoveInput.set(
    (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0),
    0,
    (keys.KeyS ? 1 : 0) - (keys.KeyW ? 1 : 0)
  );
  const isMoving = input.lengthSq() > 0.001;
  player.boosting = (keys.ShiftLeft || keys.ShiftRight) && player.number >= 30;
  const aimDirection = playerAimDirection.copy(aimPoint).sub(player.group.position).setY(0);
  if (aimDirection.lengthSq() > 0.01) {
    player.turnToward(Math.atan2(aimDirection.x, aimDirection.z), dt);
  }
  if (player.boosting && isMoving && player.invincibleTimer <= 0) {
    player.boostDrain += dt;
    while (player.boostDrain >= BOOST_COST_INTERVAL && player.active) {
      player.boostDrain -= BOOST_COST_INTERVAL;
      player.setNumber(player.number - 1);
      flashMessage('加速消耗数字 -1', 0.7);
      if (player.number === 0) eliminate(player);
    }
  }
  if (player.number < 30) player.boosting = false;
  if (!player.active) return;
  player.move(input, dt);
  if (mouseFireHeld && player.weaponType === 'smg') shoot(player, aimPoint);

  const enemyInSwing = fighters.some((fighter) => {
    if (fighter === player || !fighter.active) return false;
    return targetInsideAttackArc(player, fighter);
  });
  if (enemyInSwing) meleeAttack(player);
}

function nearestItem(from, items, getPosition, predicate = null) {
  let best = null;
  let bestDistance = Infinity;
  for (const item of items) {
    if (predicate && !predicate(item)) continue;
    const distance = from.distanceToSquared(getPosition(item));
    if (distance < bestDistance) {
      bestDistance = distance;
      best = item;
    }
  }
  return { item: best, distance: Math.sqrt(bestDistance) };
}

function shouldBotContestAmulet(bot, pickup) {
  if (!pickup || !bot.active || bot.isPlayer || bot.invincibleTimer > 0) return false;
  const ownDistance = bot.group.position.distanceToSquared(pickup.group.position);
  let closerEligibleBots = 0;
  for (const candidate of fighters) {
    if (candidate === bot || candidate.isPlayer || !candidate.active || candidate.invincibleTimer > 0) continue;
    const candidateDistance = candidate.group.position.distanceToSquared(pickup.group.position);
    const winsTie = Math.abs(candidateDistance - ownDistance) < 0.0001 && candidate.name.localeCompare(bot.name) < 0;
    if (candidateDistance < ownDistance - 0.0001 || winsTie) closerEligibleBots += 1;
    if (closerEligibleBots >= MAX_AMULET_AI_HUNTERS) return false;
  }
  return true;
}

function updateBot(bot, dt) {
  if (!bot.active || qaFreezeBots) return;
  bot.aiThink -= dt;
  bot.aiDecisionTimer -= dt;
  let foe = bot.aiFoe && bot.aiFoe.active && bot.aiFoe !== bot ? bot.aiFoe : null;

  // Expensive target searches and flank planning run about ten times a second;
  // steering and attacks still update every rendered frame, so motion stays
  // smooth while a crowded match avoids hundreds of duplicate scans per frame.
  if (bot.aiDecisionTimer <= 0 || !bot.aiMoveTarget) {
    bot.aiDecisionTimer = 0.09 + (Math.abs(bot.aiFlankSpread) + 0.2) * 0.035;
    const drop = nearestItem(bot.group.position, numberDrops, (item) => item.group.position, (item) => item.grounded);
    const pickup = nearestItem(bot.group.position, rangedPickups, (item) => item.group.position);
    const amulet = nearestItem(bot.group.position, amuletPickups, (item) => item.group.position);
    const combatBuff = nearestItem(
      bot.group.position,
      combatBuffPickups,
      (item) => item.group.position,
      (item) => item.type === 'range' ? bot.rangeBuffTimer <= 0 : bot.damageBuffTimer <= 0
    );
    const nearestFoe = nearestItem(bot.group.position, fighters, (fighter) => fighter.group.position, (fighter) => fighter !== bot && fighter.active);
    const leaderAvailable = currentLeader && currentLeader !== bot && currentLeader.active;
    const leaderDistance = leaderAvailable ? bot.group.position.distanceTo(currentLeader.group.position) : Infinity;
    const shouldHuntLeader = leaderAvailable
      && bot.aiLeaderBias
      && (leaderDistance < 22 || currentLeader.number >= bot.number + 8);
    foe = shouldHuntLeader ? currentLeader : nearestFoe.item;
    const foeDistance = foe ? bot.group.position.distanceTo(foe.group.position) : Infinity;
    let nextTarget;

    if (amulet.item && shouldBotContestAmulet(bot, amulet.item)) {
      nextTarget = amulet.item.group.position;
      bot.aiTactic = 'collect-amulet';
    } else if (combatBuff.item && combatBuff.distance < 11) {
      nextTarget = combatBuff.item.group.position;
      bot.aiTactic = 'collect-buff';
    } else if (drop.item && drop.distance < 9) {
      nextTarget = drop.item.group.position;
      bot.aiTactic = 'collect-number';
    } else if (bot.ammo === 0 && pickup.item && pickup.distance < 11) {
      nextTarget = pickup.item.group.position;
      bot.aiTactic = 'collect-weapon';
    } else if (foe) {
      const zone = directionZone(bot, foe);
      const foeForward = foe.forward;
      const foeRight = new THREE.Vector3(foeForward.z, 0, -foeForward.x);
      const usingGun = bot.ammo > 0 && Boolean(bot.weaponType);
      const desiredBackDistance = usingGun
        ? bot.weaponType === 'smg' ? 6.2 : bot.weaponType === 'rocket' ? 8 : 9.5
        : THREE.MathUtils.clamp(bot.attackRange * 0.62, 1.35, 2.25);
      const behindAnchor = foe.group.position.clone().addScaledVector(foeForward, -desiredBackDistance);
      const inBackFiringPocket = usingGun
        && zone === 'back'
        && Math.abs(foeDistance - desiredBackDistance) < 1.5;
      if (inBackFiringPocket) {
        nextTarget = bot.group.position;
        bot.aiTactic = 'backline-fire';
      } else if (zone === 'back') {
        nextTarget = behindAnchor.addScaledVector(foeRight, bot.aiFlankSpread);
        bot.aiTactic = usingGun ? 'reach-backline' : 'back-strike';
      } else if (zone === 'front') {
        const flankWidth = 2.35 + Math.min(1.5, foeDistance * 0.1) + Math.abs(bot.aiFlankSpread);
        nextTarget = behindAnchor.addScaledVector(foeRight, bot.aiFlankSign * flankWidth);
        bot.aiTactic = 'flank-from-front';
      } else {
        nextTarget = behindAnchor.addScaledVector(foeRight, bot.aiFlankSign * 0.32 + bot.aiFlankSpread);
        bot.aiTactic = 'circle-to-back';
      }
      keepInsideArena(nextTarget, 0.8);
    } else {
      const reachedGoal = !bot.aiGoal || bot.group.position.distanceToSquared(bot.aiGoal) < 1.4;
      if (reachedGoal || bot.aiThink <= 0) {
        bot.aiGoal = randomArenaPosition(3, ARENA_RADIUS - 5);
        bot.aiThink = 2.4 + Math.random() * 2.6;
      }
      nextTarget = bot.aiGoal;
      bot.aiTactic = 'wander';
    }
    bot.aiFoe = foe;
    bot.aiMoveTarget = nextTarget ? nextTarget.clone() : bot.group.position.clone();
  }

  const desired = bot.steeringVector.copy(bot.aiMoveTarget).sub(bot.group.position).setY(0);
  if (desired.lengthSq() > 0.01) {
    const steeringDirection = steerAroundArenaWalls(
      bot.group.position,
      desired,
      0.66 * sizeMultiplier(bot.number, bot.boosting),
      bot.aiFlankSign
    );
    const desiredYaw = Math.atan2(steeringDirection.x, steeringDirection.z);
    bot.turnToward(desiredYaw, dt);
    const forwardAgreement = steeringDirection.dot(bot.forward);
    const flanking = ['flank-from-front', 'circle-to-back', 'reach-backline'].includes(bot.aiTactic);
    bot.move(bot.forward, dt, forwardAgreement > 0.45 ? (flanking ? 0.88 : 0.72) : 0.25);
  }

  const foeDistance = foe ? bot.group.position.distanceTo(foe.group.position) : Infinity;
  const attackZone = foe ? directionZone(bot, foe) : 'front';
  const canTakeTacticalSwing = attackZone !== 'front' || foeDistance < 0.82;
  if (foe && bot.ammo === 0 && foeDistance < bot.attackRange * 0.96 && canTakeTacticalSwing) meleeAttack(bot);
  const firearmRange = bot.weaponType === 'smg' ? 13 : 20;
  if (foe && bot.ammo > 0 && foeDistance > 4 && foeDistance < firearmRange) {
    const aim = bot.networkAimPoint.copy(foe.group.position).sub(bot.group.position).setY(0).normalize();
    if (bot.aiTactic === 'backline-fire') bot.turnToward(Math.atan2(aim.x, aim.z), dt);
    if (aim.dot(bot.forward) > 0.94 && Math.random() < dt * 1.4) shoot(bot, foe.group.position);
  }
}

function resolveFighterSeparation() {
  for (let firstIndex = 0; firstIndex < fighters.length; firstIndex += 1) {
    const first = fighters[firstIndex];
    if (!first.active) continue;
    for (let secondIndex = firstIndex + 1; secondIndex < fighters.length; secondIndex += 1) {
      const second = fighters[secondIndex];
      if (!second.active) continue;
      let offsetX = second.group.position.x - first.group.position.x;
      let offsetZ = second.group.position.z - first.group.position.z;
      let distanceSquared = offsetX * offsetX + offsetZ * offsetZ;
      const minimumDistance = 0.72 * (first.model.scale.x + second.model.scale.x);
      if (distanceSquared >= minimumDistance * minimumDistance) continue;
      if (distanceSquared < 0.0001) {
        const angle = (firstIndex * 2.17 + secondIndex * 3.41) % (Math.PI * 2);
        offsetX = Math.cos(angle);
        offsetZ = Math.sin(angle);
        distanceSquared = 1;
      }
      const distance = Math.sqrt(distanceSquared);
      const correction = (minimumDistance - distance) / distance;
      const firstShare = first.isPlayer ? 0.32 : second.isPlayer ? 0.68 : 0.5;
      const secondShare = 1 - firstShare;
      first.group.position.x -= offsetX * correction * firstShare;
      first.group.position.z -= offsetZ * correction * firstShare;
      second.group.position.x += offsetX * correction * secondShare;
      second.group.position.z += offsetZ * correction * secondShare;
      keepInsideArena(first.group.position);
      keepInsideArena(second.group.position);
    }
  }
  for (const fighter of fighters) {
    if (!fighter.active) continue;
    resolveArenaWallCollisions(fighter.group.position, 0.66 * sizeMultiplier(fighter.number, fighter.boosting));
    keepInsideArena(fighter.group.position);
  }
}

function updateDrops(dt) {
  for (let i = numberDrops.length - 1; i >= 0; i -= 1) {
    const drop = numberDrops[i];
    drop.age += dt;
    if (drop.age >= NUMBER_DROP_LIFETIME) {
      removeNumberDrop(i);
      continue;
    }
    drop.group.rotation.y += dt * 3;
    if (!drop.grounded) {
      drop.velocity.y -= 11 * dt;
      drop.group.position.addScaledVector(drop.velocity, dt);
      containNumberDrop(drop);
      if (resolveArenaWallCollisions(drop.group.position, 0.22)) {
        drop.velocity.x *= -0.22;
        drop.velocity.z *= -0.22;
      }
      if (drop.group.position.y <= 0.36) {
        drop.group.position.y = 0.36;
        drop.velocity.multiplyScalar(0.35);
        drop.velocity.y = 0;
        drop.grounded = true;
      }
    } else {
      drop.group.position.y = 0.36 + Math.sin(drop.age * 4) * 0.08;
      resolveArenaWallCollisions(drop.group.position, 0.22);
    }
    const remaining = NUMBER_DROP_LIFETIME - drop.age;
    const fade = remaining < 1 ? THREE.MathUtils.clamp(remaining, 0, 1) : 1;
    const blink = remaining < 1.5 ? 0.72 + Math.sin(drop.age * 28) * 0.28 : 1;
    for (const material of drop.materials) material.opacity = fade * blink;
    if (drop.age > 0.55) {
      const collector = fighters.find((fighter) => fighter.active && fighter.group.position.distanceTo(drop.group.position) < 1.25);
      if (collector) {
        collector.setNumber(collector.number + 1);
        if (collector.isPlayer) {
          playGameSound('pickupNumber');
          flashMessage('捡到数字 +1', 0.65);
        }
        removeNumberDrop(i);
      }
    }
  }
}

function segmentSphereHit(start, end, center, radius) {
  const direction = end.clone().sub(start);
  const offset = start.clone().sub(center);
  const a = direction.dot(direction);
  if (a < 0.000001) return null;
  const b = 2 * offset.dot(direction);
  const c = offset.dot(offset) - radius * radius;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null;
  const root = Math.sqrt(discriminant);
  const near = (-b - root) / (2 * a);
  const far = (-b + root) / (2 * a);
  if (near >= 0 && near <= 1) return near;
  if (far >= 0 && far <= 1) return far;
  return null;
}

function showBulletImpact(position, type) {
  const impactColor = type === 'smg' ? 0x75ffd2 : type === 'rocket' ? 0xff7048 : 0x82b5ff;
  const mesh = new THREE.Mesh(
    sharedBulletImpactGeometry,
    new THREE.MeshBasicMaterial({
      color: impactColor,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      depthWrite: false
    })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(position.x, 0.09, position.z);
  scene.add(mesh);
  attackEffects.push({ mesh, life: 0.2, maxLife: 0.2, growth: 3.4, opacity: 0.9, sharedGeometry: true });
}

function showAreaExplosion(position, radius, type) {
  const color = type === 'rocket' ? 0xff7048 : 0x82b5ff;
  const group = new THREE.Group();
  group.position.set(position.x, 0.09, position.z);
  const groundEffect = type === 'rocket'
    ? new THREE.GridHelper(ROCKET_GRID_SIZE, 4, 0xffe0bd, color)
    : new THREE.Mesh(
      new THREE.RingGeometry(radius * 0.72, radius, 36),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthWrite: false })
    );
  if (type === 'rocket') {
    groundEffect.material.transparent = true;
    groundEffect.material.opacity = 0.92;
    groundEffect.material.depthWrite = false;
  } else {
    groundEffect.rotation.x = -Math.PI / 2;
  }
  group.add(groundEffect);
  const burst = new THREE.Mesh(
    new THREE.SphereGeometry(type === 'rocket' ? radius * 0.58 : radius * 0.42, 18, 12),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: type === 'rocket' ? 0.42 : 0.26, depthWrite: false })
  );
  burst.position.y = type === 'rocket' ? 0.52 : 0.3;
  group.add(burst);
  const extraRocketEffects = [];
  if (type === 'rocket') {
    const fireDisk = new THREE.Mesh(
      new THREE.CircleGeometry(radius * 0.78, 42),
      new THREE.MeshBasicMaterial({ color: 0xffa12e, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false })
    );
    fireDisk.rotation.x = -Math.PI / 2;
    fireDisk.position.y = 0.045;
    group.add(fireDisk);
    extraRocketEffects.push({ mesh: fireDisk, life: 0.3, maxLife: 0.3, growth: 1.8, opacity: 0.5, parent: group, kind: 'rocket-explosion' });

    const shockwave = new THREE.Mesh(
      new THREE.RingGeometry(radius * 0.35, radius * 0.52, 44),
      new THREE.MeshBasicMaterial({ color: 0xffe28a, transparent: true, opacity: 1, side: THREE.DoubleSide, depthWrite: false })
    );
    shockwave.rotation.x = -Math.PI / 2;
    shockwave.position.y = 0.13;
    group.add(shockwave);
    extraRocketEffects.push({ mesh: shockwave, life: 0.46, maxLife: 0.46, growth: 4.8, opacity: 1, parent: group, kind: 'rocket-explosion' });

    const blastColumn = new THREE.Mesh(
      new THREE.CylinderGeometry(radius * 0.14, radius * 0.38, 2.8, 18, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xff7b36, transparent: true, opacity: 0.58, side: THREE.DoubleSide, depthWrite: false })
    );
    blastColumn.position.y = 1.35;
    group.add(blastColumn);
    extraRocketEffects.push({ mesh: blastColumn, life: 0.38, maxLife: 0.38, growth: 2.2, opacity: 0.58, parent: group, kind: 'rocket-explosion' });

    const debrisCount = performanceMode ? 8 : 14;
    for (let index = 0; index < debrisCount; index += 1) {
      const angle = index / debrisCount * Math.PI * 2 + Math.random() * 0.2;
      const debris = new THREE.Mesh(
        sharedRocketDebrisGeometry,
        new THREE.MeshBasicMaterial({ color: index % 2 ? 0xffd15c : 0xff5b32, transparent: true, opacity: 0.95, depthWrite: false })
      );
      debris.scale.setScalar(0.08 + Math.random() * 0.08);
      debris.position.set(Math.cos(angle) * radius * 0.18, 0.38 + Math.random() * 0.45, Math.sin(angle) * radius * 0.18);
      group.add(debris);
      extraRocketEffects.push({
        mesh: debris,
        life: 0.48 + Math.random() * 0.22,
        maxLife: 0.7,
        growth: 0.7,
        opacity: 0.95,
        parent: group,
        kind: 'rocket-debris',
        sharedGeometry: true,
        velocity: new THREE.Vector3(Math.cos(angle) * (4 + Math.random() * 3), 3.8 + Math.random() * 3.2, Math.sin(angle) * (4 + Math.random() * 3)),
        gravity: 9.5,
        spin: 10 + Math.random() * 8
      });
    }
  }
  scene.add(group);
  attackEffects.push({ mesh: groundEffect, life: 0.42, maxLife: 0.42, growth: type === 'rocket' ? 0.7 : 2.6, opacity: 0.92, parent: group, kind: type === 'rocket' ? 'rocket-explosion' : 'area-explosion' });
  attackEffects.push({ mesh: burst, life: type === 'rocket' ? 0.42 : 0.28, maxLife: type === 'rocket' ? 0.42 : 0.28, growth: type === 'rocket' ? 4.8 : 3.4, opacity: type === 'rocket' ? 0.58 : 0.26, parent: group, kind: type === 'rocket' ? 'rocket-explosion' : 'area-explosion' });
  attackEffects.push(...extraRocketEffects);
}

function resolveAreaProjectile(shot) {
  const targets = fighters.filter((target) => {
    if (!target.active || (target === shot.owner && shot.type !== 'rocket')) return false;
    const targetRadius = 0.78 * target.model.scale.x;
    const offsetX = target.group.position.x - shot.targetPoint.x;
    const offsetZ = target.group.position.z - shot.targetPoint.z;
    if (shot.type === 'rocket') {
      return Math.abs(offsetX) <= ROCKET_GRID_HALF_SIZE + targetRadius
        && Math.abs(offsetZ) <= ROCKET_GRID_HALF_SIZE + targetRadius;
    }
    return Math.hypot(offsetX, offsetZ) <= shot.blastRadius + targetRadius;
  });
  const playerInvolved = shot.owner.isPlayer || targets.some((target) => target.isPlayer);
  // Resolve other fighters before the shooter. A point-blank rocket should
  // still damage everybody in the blast even when its self-damage is lethal.
  const orderedTargets = [...targets].sort((first, second) => Number(first === shot.owner) - Number(second === shot.owner));
  for (const target of orderedTargets) {
    const selfHit = target === shot.owner;
    applyHit(shot.owner, target, shot.damage, {
      allowFrontBlock: false,
      hitPosition: shot.targetPoint,
      splitReward: !selfHit
    });
  }
  if (playerInvolved) {
    if (shot.type === 'rocket') playGameSound('explosion');
    showAreaExplosion(shot.targetPoint, shot.blastRadius, shot.type);
    cameraShake = Math.max(cameraShake, shot.type === 'rocket' ? 0.48 : 0.22);
    if (shot.type === 'rocket') triggerScreenImpact(0.62, false);
  }
  return { targets, playerInvolved };
}

function updateProjectiles(dt) {
  for (let i = projectiles.length - 1; i >= 0; i -= 1) {
    const shot = projectiles[i];
    shot.life -= dt;
    const start = shot.mesh.position.clone();
    const end = start.clone().addScaledVector(shot.velocity, dt);
    if (shot.type === 'rocket') {
      shot.trailTimer -= dt;
      if (shot.visual && shot.trailTimer <= 0) {
        showRocketTrail(start, shot.velocity);
        shot.trailTimer += 0.075;
      }
      shot.mesh.rotation.z += dt * 4.5;
    }
    if (shot.targetPoint) {
      const wallHit = segmentArenaWallHit(start, end, 0.06);
      if (wallHit) {
        shot.targetPoint.copy(wallHit.point);
        shot.mesh.position.copy(wallHit.point);
        resolveAreaProjectile(shot);
        scene.remove(shot.mesh);
        projectiles.splice(i, 1);
        continue;
      }
      const distanceToTarget = start.distanceTo(shot.targetPoint);
      const travelDistance = shot.velocity.length() * dt;
      if (distanceToTarget <= travelDistance || shot.life <= 0) {
        shot.mesh.position.copy(shot.targetPoint);
        resolveAreaProjectile(shot);
        scene.remove(shot.mesh);
        projectiles.splice(i, 1);
      } else {
        shot.mesh.position.copy(end);
      }
      continue;
    }
    let firstTarget = null;
    let firstHitTime = Infinity;
    for (const target of fighters) {
      if (target === shot.owner || !target.active) continue;
      const center = target.group.position.clone();
      center.y = 1.05;
      const bodyScale = target.model.scale.x;
      const hitTime = segmentSphereHit(start, end, center, 0.72 * bodyScale);
      if (hitTime !== null && hitTime < firstHitTime) {
        firstHitTime = hitTime;
        firstTarget = target;
      }
    }
    const wallHit = segmentArenaWallHit(start, end, 0.045);
    if (wallHit && wallHit.time < firstHitTime) {
      shot.mesh.position.copy(wallHit.point);
      if (shot.owner.isPlayer) {
        playGameSound('wallImpact');
        showBulletImpact(wallHit.point, shot.type);
      }
      scene.remove(shot.mesh);
      projectiles.splice(i, 1);
      continue;
    }
    if (firstTarget) {
      shot.mesh.position.lerpVectors(start, end, firstHitTime);
      applyHit(shot.owner, firstTarget, shot.damage, {
        allowFrontBlock: false,
        hitPosition: shot.mesh.position,
        splitReward: true
      });
      if (shot.owner.isPlayer || firstTarget.isPlayer) showBulletImpact(shot.mesh.position, shot.type);
      scene.remove(shot.mesh);
      projectiles.splice(i, 1);
      continue;
    }
    shot.mesh.position.copy(end);
    if (shot.life <= 0 || new THREE.Vector2(shot.mesh.position.x, shot.mesh.position.z).length() > ARENA_RADIUS + 4) {
      scene.remove(shot.mesh);
      projectiles.splice(i, 1);
    }
  }
}

function updatePickupExpiryVisual(pickup) {
  const remaining = PICKUP_LIFETIME - pickup.age;
  if (pickup.expiryLabel) {
    pickup.expiryLabel.visible = remaining <= 3;
    if (pickup.expiryLabel.visible) updateNumberSprite(pickup.expiryLabel, `${Math.max(1, Math.ceil(remaining))}秒`);
  }
  if (remaining > 2) {
    pickup.group.scale.setScalar(1);
    pickup.group.visible = true;
    return;
  }
  const urgency = 1 - THREE.MathUtils.clamp(remaining / 2, 0, 1);
  pickup.group.scale.setScalar(1 + Math.sin(pickup.age * (15 + urgency * 14)) * (0.035 + urgency * 0.07));
  pickup.group.visible = remaining > 0.7 || Math.floor(pickup.age * 18) % 2 === 0;
}

function updatePickups(dt) {
  for (let i = rangedPickups.length - 1; i >= 0; i -= 1) {
    const pickup = rangedPickups[i];
    pickup.age += dt;
    if (pickup.age >= PICKUP_LIFETIME) {
      removeWorldPickup(rangedPickups, i);
      continue;
    }
    updatePickupExpiryVisual(pickup);
    pickup.phase += dt;
    pickup.group.rotation.y += dt * 1.8;
    pickup.group.position.y = 0.68 + Math.sin(pickup.phase * 2) * 0.12;
    const collector = fighters.find((fighter) => fighter.active && fighter.group.position.distanceTo(pickup.group.position) < 1.25);
    if (collector) {
      const ammo = pickup.type === 'smg' ? 12 : pickup.type === 'sniper' ? 6 : 1;
      collector.setGun(pickup.type, ammo);
      queueNetworkEvent({ kind: 'pickup', pickupType: pickup.type, targetSlot: fighters.indexOf(collector) });
      if (collector.isPlayer) {
        playGameSound('pickup');
        const pickupMessages = {
          smg: '捡到冲锋枪：12 发，每秒 4 发、每发伤害 2',
          sniper: '捡到狙击枪：6 发，每秒 2 发、点击即刻命中落点',
          rocket: '捡到火箭筒：1 发，点击选择 4×4 范围落点'
        };
        flashMessage(pickupMessages[pickup.type], 1.35);
      }
      removeWorldPickup(rangedPickups, i);
    }
  }

  for (let i = amuletPickups.length - 1; i >= 0; i -= 1) {
    const pickup = amuletPickups[i];
    pickup.age += dt;
    if (pickup.age >= PICKUP_LIFETIME) {
      removeWorldPickup(amuletPickups, i);
      continue;
    }
    updatePickupExpiryVisual(pickup);
    pickup.phase += dt;
    pickup.group.rotation.y += dt * 1.6;
    pickup.group.position.y = 0.72 + Math.sin(pickup.phase * 2.2) * 0.14;
    const amuletPulse = 1 + Math.sin(pickup.phase * 4.2) * 0.13;
    pickup.outerHalo.scale.setScalar(amuletPulse);
    pickup.aura.scale.setScalar(0.96 + Math.sin(pickup.phase * 3.1) * 0.16);
    pickup.aura.material.opacity = 0.13 + Math.sin(pickup.phase * 4.6) * 0.055;
    pickup.beacon.material.opacity = 0.16 + Math.sin(pickup.phase * 3.8) * 0.09;
    const collector = fighters.find((fighter) => fighter.active && fighter.group.position.distanceTo(pickup.group.position) < 1.3);
    if (collector) {
      collector.activateInvincibility(10);
      queueNetworkEvent({ kind: 'pickup', pickupType: 'amulet', targetSlot: fighters.indexOf(collector) });
      if (collector.isPlayer) {
        playGameSound('pickup');
        flashMessage('获得无敌护符：10 秒内不掉数字！', 1.1);
      }
      removeWorldPickup(amuletPickups, i);
    }
  }

  for (let i = combatBuffPickups.length - 1; i >= 0; i -= 1) {
    const pickup = combatBuffPickups[i];
    pickup.age += dt;
    if (pickup.age >= PICKUP_LIFETIME) {
      removeWorldPickup(combatBuffPickups, i);
      continue;
    }
    updatePickupExpiryVisual(pickup);
    pickup.phase += dt;
    pickup.group.rotation.y += dt * (pickup.type === 'range' ? 2.4 : 3.6);
    pickup.group.position.y = 0.72 + Math.sin(pickup.phase * 2.4) * 0.12;
    const pulse = 1 + Math.sin(pickup.phase * 4.4) * 0.14;
    pickup.halo.scale.setScalar(pulse);
    pickup.halo.material.opacity = 0.48 + Math.sin(pickup.phase * 4.8) * 0.2;
    const collector = fighters.find((fighter) => fighter.active && fighter.group.position.distanceTo(pickup.group.position) < 1.35);
    if (collector) {
      collector.activateCombatBuff(pickup.type);
      queueNetworkEvent({ kind: 'pickup', pickupType: pickup.type === 'range' ? 'rangeBuff' : 'damageBuff', targetSlot: fighters.indexOf(collector) });
      if (collector.isPlayer) {
        playGameSound('pickup');
        flashMessage(
          pickup.type === 'range'
            ? `获得攻击范围增益：${COMBAT_BUFF_SECONDS} 秒内范围 ×1.5！`
            : `获得攻击伤害增益：${COMBAT_BUFF_SECONDS} 秒内伤害 ×1.5！`,
          1.2
        );
      }
      removeWorldPickup(combatBuffPickups, i);
    }
  }
}

function updateItemSpawns(dt) {
  if (qaFreezeItemSpawns) return;
  sniperSpawnTimer -= dt;
  smgSpawnTimer -= dt;
  rocketSpawnTimer -= dt;
  if (sniperSpawnTimer <= 0) {
    sniperSpawnTimer += 10;
    spawnRangedPickup(randomArenaPosition(5, ARENA_RADIUS - 5), 'sniper');
    flashMessage('地图出现了一把狙击枪', 0.9);
  }
  if (smgSpawnTimer <= 0) {
    smgSpawnTimer += 12;
    spawnRangedPickup(randomArenaPosition(5, ARENA_RADIUS - 5), 'smg');
    flashMessage('地图出现了一把冲锋枪', 0.9);
  }
  if (rocketSpawnTimer <= 0) {
    rocketSpawnTimer += 18;
    spawnRangedPickup(randomArenaPosition(5, ARENA_RADIUS - 5), 'rocket');
    flashMessage('地图出现了一把火箭筒', 1.05);
  }
  amuletSpawnTimer -= dt;
  combatBuffSpawnTimer -= dt;
  if (amuletSpawnTimer <= 0) {
    amuletSpawnTimer += 20;
    spawnAmulet();
    flashMessage('全图通告：无敌护符出现在远离人群的隐蔽区域，快去争夺！', 2.2);
  }
  if (combatBuffSpawnTimer <= 0) {
    combatBuffSpawnTimer += 9;
    spawnCombatBuff(randomArenaPosition(5, ARENA_RADIUS - 5), nextCombatBuffType);
    flashMessage(nextCombatBuffType === 'range' ? '地图出现了攻击范围 ×1.5 增益' : '地图出现了攻击伤害 ×1.5 增益', 1.05);
    nextCombatBuffType = nextCombatBuffType === 'range' ? 'damage' : 'range';
  }
}

function updateEffects(dt) {
  for (let i = attackEffects.length - 1; i >= 0; i -= 1) {
    const effect = attackEffects[i];
    effect.life -= dt;
    const fraction = Math.max(0, effect.life / (effect.maxLife || 0.18));
    if (effect.velocity) {
      if (effect.gravity) effect.velocity.y -= effect.gravity * dt;
      effect.mesh.position.addScaledVector(effect.velocity, dt);
    }
    if (effect.spin) {
      effect.mesh.rotation.x += effect.spin * dt;
      effect.mesh.rotation.y += effect.spin * 0.72 * dt;
    }
    effect.mesh.material.opacity = fraction * (effect.opacity || 0.75);
    effect.mesh.scale.multiplyScalar(1 + dt * (effect.growth || 2));
    if (effect.life <= 0) {
      if (effect.parent) {
        effect.parent.remove(effect.mesh);
        if (effect.parent.children.length === 0) scene.remove(effect.parent);
      } else {
        scene.remove(effect.mesh);
      }
      if (!effect.sharedGeometry) effect.mesh.geometry.dispose();
      effect.mesh.material.dispose();
      attackEffects.splice(i, 1);
    }
  }

  for (let i = impactBursts.length - 1; i >= 0; i -= 1) {
    const burst = impactBursts[i];
    burst.life -= dt;
    const fraction = Math.max(0, burst.life / burst.maxLife);
    for (let particleIndex = 0; particleIndex < burst.particles.length; particleIndex += 1) {
      const particle = burst.particles[particleIndex];
      particle.velocity.y -= 7.5 * dt;
      particle.position.addScaledVector(particle.velocity, dt);
      particle.rotationX += dt * 9;
      particle.rotationY += dt * 12;
      const particleScale = particle.size * (0.55 + fraction * 0.75);
      instanceDummy.position.copy(particle.position);
      instanceDummy.rotation.set(particle.rotationX, particle.rotationY, 0);
      instanceDummy.scale.setScalar(particleScale);
      instanceDummy.updateMatrix();
      burst.particleMesh.setMatrixAt(particleIndex, instanceDummy.matrix);
    }
    burst.particleMesh.instanceMatrix.needsUpdate = true;
    burst.particleMaterial.opacity = fraction;
    burst.ringMaterial.opacity = fraction * 0.82;
    const elapsed = 1 - fraction;
    burst.ring.scale.setScalar(1 + elapsed * 5.4);
    if (burst.life <= 0) {
      scene.remove(burst.group);
      if (!burst.sharedRingGeometry) burst.ring.geometry.dispose();
      burst.particleMaterial.dispose();
      burst.ringMaterial.dispose();
      impactBursts.splice(i, 1);
    }
  }

  for (let i = damageTexts.length - 1; i >= 0; i -= 1) {
    const textEffect = damageTexts[i];
    textEffect.life -= dt;
    const fraction = Math.max(0, textEffect.life / textEffect.maxLife);
    textEffect.sprite.position.y += dt * (0.72 + fraction * 0.45);
    textEffect.sprite.position.x += textEffect.drift * dt;
    textEffect.sprite.material.opacity = Math.min(1, fraction * 1.8);
    textEffect.sprite.scale.multiplyScalar(1 + dt * 0.16);
    if (textEffect.life <= 0) {
      scene.remove(textEffect.sprite);
      textEffect.sprite.material.dispose();
      damageTexts.splice(i, 1);
    }
  }

  if (hitFlashTimer > 0) {
    hitFlashTimer = Math.max(0, hitFlashTimer - dt);
    hitFlashEl.style.opacity = String(Math.min(0.75, hitFlashStrength * (hitFlashTimer / 0.16)));
  } else {
    hitFlashStrength = 0;
    hitFlashEl.style.opacity = '0';
  }
}

const desiredCameraPosition = new THREE.Vector3();
function updateCamera(dt) {
  const desired = desiredCameraPosition.set(player.group.position.x, 29, player.group.position.z + 16);
  camera.position.lerp(desired, 1 - Math.pow(0.001, dt));
  cameraShake = Math.max(0, cameraShake - dt * 2.7);
  const shakeX = (Math.random() - 0.5) * cameraShake;
  const shakeZ = (Math.random() - 0.5) * cameraShake;
  camera.position.x += shakeX * 0.65;
  camera.position.z += shakeZ * 0.65;
  camera.lookAt(player.group.position.x + shakeX, 0, player.group.position.z - 1.5 + shakeZ);
}

function drawResultAvatar() {
  const context = resultAvatarCanvas.getContext('2d');
  const image = player.avatarSprite.material.map?.image;
  context.clearRect(0, 0, resultAvatarCanvas.width, resultAvatarCanvas.height);
  if (!image?.width || !image?.height) return;
  const scale = Math.min(resultAvatarCanvas.width / image.width, resultAvatarCanvas.height / image.height);
  const width = image.width * scale;
  const height = image.height * scale;
  context.drawImage(image, (resultAvatarCanvas.width - width) / 2, (resultAvatarCanvas.height - height) / 2, width, height);
}

function addResultRankingRow(fighter, rank) {
  const row = document.createElement('div');
  row.className = `result-row rank-${Math.min(rank, 4)}${fighter === player ? ' player-row' : ''}`;
  const rankEl = document.createElement('span');
  rankEl.className = 'result-rank';
  rankEl.textContent = rank === 1 ? '♛' : String(rank);
  const nameEl = document.createElement('span');
  nameEl.className = 'result-name';
  nameEl.textContent = fighter === player ? '你' : fighter.name;
  const scoreEl = document.createElement('strong');
  scoreEl.className = 'result-score';
  scoreEl.textContent = String(fighter.number);
  row.append(rankEl, nameEl, scoreEl);
  resultRankingListEl.append(row);
}

function endRound(reason = 'time') {
  if (!running) return;
  running = false;
  mouseFireHeld = false;
  Object.keys(keys).forEach((key) => { keys[key] = false; });
  aimMarker.visible = false;
  rocketAimGrid.visible = false;
  leaderMarker.visible = false;
  const ranking = [...fighters].sort((a, b) => b.number - a.number);
  const rankOf = (fighter) => 1 + ranking.filter((other) => other.number > fighter.number).length;
  const playerRank = rankOf(player);
  const winningNumber = ranking[0].number;
  const winners = ranking.filter((fighter) => fighter.number === winningNumber);
  const playerWon = playerRank === 1;
  const playerTieCount = ranking.filter((fighter) => fighter.number === player.number).length;
  const playerTied = playerTieCount > 1;
  const podiumFinish = playerRank <= 3;

  resultCard.classList.remove('winner', 'runner-up', 'third-place', 'simple-result');
  if (playerRank === 1) resultCard.classList.add('winner');
  else if (playerRank === 2) resultCard.classList.add('runner-up');
  else if (playerRank === 3) resultCard.classList.add('third-place');
  else resultCard.classList.add('simple-result');
  resultCrownEl.textContent = playerRank === 1 ? '♛' : playerRank === 2 ? 'Ⅱ' : playerRank === 3 ? 'Ⅲ' : '';
  if (reason === 'eliminated') {
    resultTitleEl.textContent = '你被淘汰了';
  } else if (playerRank === 1 && playerTied) {
    resultTitleEl.textContent = '并列第一！';
  } else if (playerWon) {
    resultTitleEl.textContent = '你是冠军！';
  } else if (playerRank === 2) {
    resultTitleEl.textContent = playerTied ? '并列第二！' : '获得亚军！';
  } else if (playerRank === 3) {
    resultTitleEl.textContent = playerTied ? '并列第三！' : '获得季军！';
  } else {
    resultTitleEl.textContent = `本局第 ${playerRank} 名`;
  }
  const winnerNames = winners.map((fighter) => fighter === player ? '你' : fighter.name).join('、');
  resultSummaryEl.textContent = podiumFinish
    ? `${winnerNames}以数字 ${winningNumber}，${winners.length > 1 ? '并列第一' : '获得第一'} · 你最终数字 ${player.number}`
    : `你的最终数字：${player.number}`;
  resultPlayerRankEl.textContent = `${playerTied ? '并列' : ''}第 ${playerRank} 名`;
  resultPlayerNumberEl.textContent = `最终数字 ${player.number}`;
  drawResultAvatar();

  resultRankingListEl.replaceChildren();
  ranking.forEach((fighter) => addResultRankingRow(fighter, rankOf(fighter)));
  playGameSound(podiumFinish ? 'victory' : 'roundEnd');
  resultScreen.classList.remove('hidden');
}

rematchButton.addEventListener('click', () => location.reload());

function updateTimer(dt) {
  roundTime = Math.max(0, roundTime - dt);
  const minutes = Math.floor(roundTime / 60);
  const seconds = Math.floor(roundTime % 60);
  setTextIfChanged(timerEl, `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  const countdownSecond = Math.ceil(roundTime);
  if (countdownSecond <= 10 && countdownSecond >= 1 && countdownSecond !== lastCountdownSecond) {
    lastCountdownSecond = countdownSecond;
    playGameSound(countdownSecond <= 3 ? 'countdownFinal' : 'countdown');
  }
  if (roundTime <= 0) endRound('time');
}

let environmentTime = 0;
let performanceSampleSeconds = 0;
let performanceSampleFrames = 0;
function updateAdaptiveResolution(rawDt) {
  if (!running) {
    performanceSampleSeconds = 0;
    performanceSampleFrames = 0;
    return;
  }
  performanceSampleSeconds += Math.min(rawDt, 0.25);
  performanceSampleFrames += 1;
  if (performanceSampleSeconds < 1.8) return;
  const measuredFps = performanceSampleFrames / performanceSampleSeconds;
  if (measuredFps < 56 && activeRenderPixelRatio > MIN_RENDER_PIXEL_RATIO) {
    performanceMode = true;
    worldMotes.visible = false;
    const reduction = measuredFps < 48 ? 0.12 : 0.07;
    activeRenderPixelRatio = Math.max(MIN_RENDER_PIXEL_RATIO, activeRenderPixelRatio - reduction);
    renderer.setPixelRatio(activeRenderPixelRatio);
    renderer.setSize(innerWidth, innerHeight, false);
  }
  performanceSampleSeconds = 0;
  performanceSampleFrames = 0;
}
function updateEnvironment(dt) {
  environmentTime += dt;
  oceanTexture.offset.x = environmentTime * 0.006;
  oceanTexture.offset.y = environmentTime * 0.0035;
  worldMotes.rotation.y = environmentTime * 0.018;
  worldMotes.material.opacity = 0.4 + Math.sin(environmentTime * 0.9) * 0.11;
  // Keep the distant lantern cores static. Re-uploading their instance matrix
  // buffer every frame caused a GPU synchronization stall for a barely visible
  // pulse at the outer edge of the arena.
}

function animate() {
  requestAnimationFrame(animate);
  const rawDt = clock.getDelta();
  const dt = Math.min(rawDt, 0.2);
  updateAdaptiveResolution(rawDt);
  updateEnvironment(dt);
  if (running) {
    updateLeaderMarker(dt);
    if (networkMode === 'guest') {
      updateNetworkGuest(dt);
      for (const fighter of fighters) {
        if (fighter.active) fighter.tickVisual(dt);
      }
      updateEffects(dt);
    } else {
      updateRespawns(dt);
      if (player.active) updatePlayer(dt);
      for (let index = 1; index < fighters.length; index += 1) {
        const fighter = fighters[index];
        if (!fighter.active) continue;
        const remoteMember = networkMode === 'host'
          ? networkMembers.find((member) => member.slot === index)
          : null;
        if (remoteMember) {
          let controller = networkRemoteInputs.get(remoteMember.id);
          if (!controller) {
            controller = { slot: index, lastFireSequence: -1 };
            networkRemoteInputs.set(remoteMember.id, controller);
          }
          updateRemoteHuman(fighter, controller, dt);
        } else {
          updateBot(fighter, dt);
        }
      }
      resolveFighterSeparation();
      for (const fighter of fighters) {
        if (fighter.active) fighter.tickVisual(dt);
      }
      updateDrops(dt);
      updateProjectiles(dt);
      updatePickups(dt);
      updateItemSpawns(dt);
      updateEffects(dt);
      updateTimer(dt);
      if (networkMode === 'host') {
        networkSnapshotTimer = Math.max(0, networkSnapshotTimer - dt);
        broadcastNetworkSnapshot(!running);
      }
    }
  }
  flushNumberLabelUpdates(networkMode === 'guest' ? 5 : 3);
  updateCamera(dt);
  if (messageTimer > 0) {
    messageTimer -= dt;
    if (messageTimer <= 0) messageEl.classList.remove('show');
  }
  if (!startScreen.classList.contains('hidden') && previewModel) {
    previewModel.rotation.y += dt * 0.32;
    previewRenderer.render(previewScene, previewCamera);
  }
  updateFighterGroundOverlays();
  renderer.render(scene, camera);
}

function precompileCombatPrograms() {
  const impactMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false });
  const impactMesh = new THREE.InstancedMesh(sharedImpactParticleGeometry, impactMaterial, 1);
  impactMesh.frustumCulled = false;
  impactMesh.scale.setScalar(0.001);
  const shieldMesh = new THREE.Mesh(player.shield.geometry, player.shield.material);
  shieldMesh.scale.setScalar(0.001);
  scene.add(impactMesh, shieldMesh);
  renderer.compile(scene, camera);
  scene.remove(impactMesh, shieldMesh);
  impactMaterial.dispose();
}

precompileCombatPrograms();
animate();

addEventListener('resize', () => {
  const aspect = innerWidth / innerHeight;
  camera.left = -(VIEW_SIZE * aspect) / 2;
  camera.right = (VIEW_SIZE * aspect) / 2;
  camera.top = VIEW_SIZE / 2;
  camera.bottom = -VIEW_SIZE / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
