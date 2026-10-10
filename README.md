# Jane Yugtan — Portfolio Site

Source for [janeyugtan.com](https://janeyugtan.com), a single-page portfolio site for Jane Yugtan, an Online Business Manager and systems designer.

## Stack

Static HTML/CSS/JS — no build step, no dependencies. Everything lives in `index.html`. Hosted on GitHub Pages, with the custom domain configured via `CNAME`.

## Structure

- `index.html` — the entire site (markup, styles, and interaction JS)
- `robots.txt`, `sitemap.xml` — SEO
- `favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `android-chrome-*.png`, `site.webmanifest` — favicon set
- Images, logos, and video files referenced by `index.html`
- `millsaps-case-study.pdf` — downloadable case study linked from the Millsaps Productions project card

## Local preview

No build tools required — serve the directory with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushing to the default branch publishes via GitHub Pages automatically.
