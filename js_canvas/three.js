var threejs = {};

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("canvas")});
const camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
camera.position.z = 400;

// Make a scene
const scene = new THREE.Scene();

// Make a cube.
const geometry = new THREE.BoxGeometry(200, 200, 200);

// Make a material
const material = new THREE.MeshBasicMaterial({
  color: 0x00FF00,
  wireframe: true,
});

// Create a mesh based on the geometry and material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function resize() {
  var width = renderer.domElement.clientWidth;
  var height = renderer.domElement.clientHeight;
  if (renderer.domElement.width !== width || renderer.domElement.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function animate(time) {
  time *= 0.001;  // seconds
  resize();
  mesh.rotation.x = time * 0.5;
  mesh.rotation.y = time * 1;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

threejs.renderer = renderer;
threejs.camera = camera;
threejs.scene = scene;
threejs.geometry = geometry;
threejs.material = material;
threejs.mesh = mesh;
threejs.resize = resize;
threejs.animate = animate;

requestAnimationFrame(animate);