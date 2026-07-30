# Bar Menu 🍸

A single-page bar menu for choosing cocktails: **Daiquiri, Mojito, Tequila Sunrise, Whisky Cola**.
Each cocktail shows a photo, description and ingredients.

A plain static site — HTML/CSS/JS, no build step and no dependencies.

## Structure

```
index.html        — page markup
styles.css        — styles (dark bar theme)
menu.js           — cocktail data and switching logic
assets/img/       — cocktail photos
.github/workflows/deploy.yml — auto-deploy to GitHub Pages
```

## Run locally

Just open `index.html` in a browser, or start a local server:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploy

The site is fully static, so it can be hosted anywhere. Easiest options:

- **Netlify Drop** — drag the project folder onto <https://app.netlify.com/drop>, get a URL in seconds.
- **Surge** — run `npx surge .` from the project root.
- **Cloudflare Pages / Netlify (Git)** — connect the repo; leave the build command empty and set the output directory to `.`.
- **GitHub Pages** (free for public repos) — in the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**. Every push to `main` deploys automatically via `.github/workflows/deploy.yml`. The URL looks like `https://<user>.github.io/<repo>/`.

## Data source

Descriptions and photos come from [inshaker.com](https://ru.inshaker.com/).
