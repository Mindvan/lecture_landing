# Frontend Developer - форма регистрации на лекторий

Тестовое задание для ПРОТЕЙ ТЛ.
Отправка форм  - **имитация** (без сервера): показываются модальные окна успеха/ошибки.

**Используется**
- React 19;
- TypeScript;
- Tailwind CSS 4 (через `@tailwindcss/vite`);
- React Hook Form;
- Vite 8;
- ESLint 9 + typescript-eslint.

## Локальный запуск
Требования:
- **Node.js 20+** (рекомендуется).

Установка зависимостей:
```bash
npm i
```

Запуск dev-сервера:
```bash
npm run dev
```

После запуска Vite выведет локальный адрес (обычно `http://localhost:5173`).

## Скрипты
- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка (`tsc -b` + `vite build`)
- `npm run preview` — предпросмотр production-сборки
- `npm run lint` — ESLint

## Деплой на GitHub Pages
Проект настроен на деплой через **GitHub Actions** в **GitHub Pages**.
Деплой доступен по ссылке: https://mindvan.github.io/lecture_landing/.
