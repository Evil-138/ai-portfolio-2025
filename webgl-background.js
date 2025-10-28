/**
 * WebGL Particle Background with Three.js
 * Creates an animated 3D particle system with interactive mouse effects
 */

let scene, camera, renderer, particles, particleGeometry, particleMaterial;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function initWebGL() {
  const canvas = document.getElementById('webgl-canvas');
  
  // Scene setup
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.001);
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 400;
  
  // Renderer setup
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Create particles
  createParticles();
  
  // Create geometric shapes
  createGeometry();
  
  // Event listeners
  document.addEventListener('mousemove', onMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);
  
  // Start animation
  animate();
}

function createParticles() {
  const particleCount = 2000;
  particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const color = new THREE.Color();
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    
    // Position
    positions[i3] = (Math.random() - 0.5) * 2000;
    positions[i3 + 1] = (Math.random() - 0.5) * 2000;
    positions[i3 + 2] = (Math.random() - 0.5) * 2000;
    
    // Color gradient
    const hue = (i / particleCount) * 360;
    color.setHSL(hue / 360, 0.8, 0.6);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  // Particle material
  particleMaterial = new THREE.PointsMaterial({
    size: 2,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });
  
  particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);
}

function createGeometry() {
  // Wireframe torus
  const torusGeometry = new THREE.TorusGeometry(80, 20, 16, 100);
  const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const torus = new THREE.Mesh(torusGeometry, torusMaterial);
  torus.position.set(-200, 100, -200);
  scene.add(torus);
  torus.userData = { rotationSpeed: { x: 0.005, y: 0.01 } };
  
  // Wireframe sphere
  const sphereGeometry = new THREE.SphereGeometry(60, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0xec4899,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(200, -100, -200);
  scene.add(sphere);
  sphere.userData = { rotationSpeed: { x: 0.01, y: 0.005 } };
  
  // Store for animation
  scene.userData.geometries = [torus, sphere];
}

function onMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) * 0.05;
  mouseY = (event.clientY - windowHalfY) * 0.05;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  // Smooth camera movement based on mouse
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);
  
  // Rotate particles
  if (particles) {
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0002;
  }
  
  // Rotate geometric shapes
  if (scene.userData.geometries) {
    scene.userData.geometries.forEach(geo => {
      geo.rotation.x += geo.userData.rotationSpeed.x;
      geo.rotation.y += geo.userData.rotationSpeed.y;
    });
  }
  
  renderer.render(scene, camera);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWebGL);
} else {
  initWebGL();
}
