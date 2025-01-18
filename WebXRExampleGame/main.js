var scene, camera, renderer, controls;
var terrains = [];
var terrains_loaded = 0;

AFRAME.registerComponent('ar-button', {
  init: function () {
    this.el.addEventListener('click', this.onButtonClick.bind(this));
  },
  onButtonClick: function () {
    console.log('AR button clicked!!');
    print_console('Clicked!');
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const sceneEl = document.querySelector('a-scene'); // Get the A-Frame scene
  scene = sceneEl.object3D; // Access the underlying Three.js scene object
  camera = sceneEl.camera;
  renderer = sceneEl.renderer;

  init();
  animate();
});

function getColor(i) {
  let hue = ((i * 360) / 9) % 360;
  return `hsl(${hue}, 100%, 50%)`; // Full saturation and 50% lightness
}

// Define a function to handle the click event
function handleClick(event) {
  print_console('Clicked!', (color = 'white'), 5);
}

function init() {
  document.body.appendChild(renderer.domElement);

  var ambientLight = new THREE.AmbientLight(0x404040, 1); // soft light
  scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('keydown', function (event) {
    print_console(`\nPlay! \n`);
  });
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum value is inclusive and the minimum value is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function print_console(new_text, color = 'white', id = 0) {
  var newText = document.createElement('a-text');
  newText.setAttribute('color', color);
  newText.setAttribute('value', new_text);
  newText.setAttribute('width', 10);
  newText.setAttribute('wrap-count', '90');
  if (text_console.lastElementChild) {
    let prev = text_console.lastElementChild.getAttribute('position');
    const new_pos = { x: prev.x, y: prev.y - 0.5, z: prev.z };
    newText.setAttribute('position', new_pos);
  }
  newText.id = id;
  newText.addEventListener('click', handleClick);
  text_console.appendChild(newText);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Import the OrbitControls class from the Three.js module
