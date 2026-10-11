# SONIS MANAGEMENT GROUP — сайт

Багатосторінковий сайт на React + Vite: головна сторінка з переходами на чотири розділи.

| Адреса        | Сторінка                                   |
|---------------|--------------------------------------------|
| `/`           | Головна: розділи + партнери                |
| `/containers` | Контейнерні будиночки                      |
| `/gypsum`     | Гіпс та гіпсокартон — прайс + PDF          |
| `/cement`     | Цемент IFCEM — прайс + PDF                 |
| `/concrete`   | Бетон та залізобетонні вироби (заглушка)   |

## Запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # продакшн-збірка у dist/
npm run preview    # локальний перегляд збірки
```

## Деплой (Vercel)

Проєкт імпортується у Vercel з GitHub без додаткових налаштувань — усе в `vercel.json`:
збірка `npm run build`, папка `dist`, і переписування всіх адрес на `index.html`,
щоб прямі посилання на кшталт `/cement` відкривались, а не давали 404.

## Стек

- **React 18** + **Vite 5**, **react-router-dom 6** — маршрутизація між сторінками.
- **framer-motion** — анімації появи та паралакс; **lenis** — плавний скрол.
- Анімації вимикаються при `prefers-reduced-motion: reduce`.

## Що змінювати

- **Розділи на головній** (назви, описи, фото, заголовки) — `src/sections.js`.
- **Партнери** — `src/partners.js`, логотипи в `public/images/partners/`.
- **Ціни на цемент** — `src/cementData.js`, PDF — `public/docs/cement-price-list.pdf`.
- **Ціни на гіпс** — `src/gypsumData.js`, PDF — `public/docs/gypsum-price-list.pdf`.
- **Телефон і email для замовлень** — `src/contacts.js`.
- **Контейнерні будиночки** (моделі, ціни, галерея) — `src/data.js`.
- **Мобільні правки** — блок `@media (max-width: 720px)` у `src/styles.css`.
