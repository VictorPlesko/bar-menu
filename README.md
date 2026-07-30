# Барное меню 🍸

Одностраничное барное меню с выбором коктейлей: **дайкири, мохито, текила санрайз, виски кола**.
Для каждого коктейля показывается фото, описание, состав и способ приготовления.

Чистый статический сайт — HTML/CSS/JS, без сборки и зависимостей.

## Структура

```
index.html        — разметка страницы
styles.css        — стили (тёмная барная тема)
menu.js           — данные коктейлей и логика переключения
assets/img/       — фотографии коктейлей
.github/workflows/deploy.yml — автодеплой на GitHub Pages
```

## Локальный запуск

Просто открой `index.html` в браузере, либо подними локальный сервер:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Деплой на GitHub Pages

1. Создай репозиторий на GitHub и запушь код:
   ```bash
   git add .
   git commit -m "Bar menu"
   git branch -M main
   git remote add origin git@github.com:<user>/<repo>.git
   git push -u origin main
   ```
2. В настройках репозитория: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Пуш в ветку `main` автоматически задеплоит сайт (workflow `deploy.yml`).
   Адрес будет вида `https://<user>.github.io/<repo>/`.

## Источник данных

Описания и фотографии — [inshaker.com](https://ru.inshaker.com/).
