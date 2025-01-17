// Создаем сцену
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);

// Рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true; // Включить WebXR
document.body.appendChild(renderer.domElement);


// Добавляем кнопку для входа в VR
const vrButton = THREE.XRButton.createButton(renderer);
document.body.appendChild(vrButton);

// Создаем объект: вращающийся куб
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Позиция камеры
camera.position.z = 5;

// Анимация
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Устанавливаем цикл анимации с поддержкой WebXR
renderer.setAnimationLoop(animate);

// Обработка изменения размера окна
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
