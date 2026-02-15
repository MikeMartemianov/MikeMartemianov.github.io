# WebXR AR — простой demo

Коротко: простая веб‑страница с markerless WebXR AR (hit‑test) + fallback 3D‑preview. Подходит для теста на Android (Chrome + ARCore). Можно разместить на GitHub Pages (`username.github.io/repo`).

✅ Что сделано
- Пример WebXR AR (hit‑test) — тап/контроллер размещает куб на плоскости
- Fallback: 3D‑preview с OrbitControls для десктопа
- Статический `index.html` — готово для деплоя на GitHub Pages
- Добавлен workflow для автоматического деплоя (GitHub Actions)

Как тестировать локально

1. Откройте локальный HTTP сервер в папке проекта (localhost считается безопасным для WebXR):
   - `npx http-server -p 8080` или `python -m http.server 8080`
2. На телефоне/устройстве с поддержкой WebXR AR откройте `http://localhost:8080` и тапните "Start AR".

Совместимость

- Работает на Android (Chrome + ARCore поддержка WebXR AR).
- На десктопе откроется 3D‑preview.
- WebXR AR на Meta Quest / других шлемах может быть ограничен (зависит от браузера и поддерживаемых WebXR функций).

Деплой на GitHub Pages

1. Создайте репозиторий и запушьте все файлы.
2. Action уже добавлен: при пуше в `main` — сайт будет опубликован автоматически.
3. Адрес: `https://<username>.github.io/<repo>`

Если нужно — могу:
- заменить куб на ваш glTF/GLB файл
- добавить кнопку «скачать/поделиться» или UI для смены модели
- сделать отдельную версию для Cardboard (side‑by‑side) или анаглиф
