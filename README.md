# Jane Yugtan — Portfolio Site

Source for [janeyugtan.com](https://janeyugtan.com), a portfolio site (single-page homepage plus a blog) for Jane Yugtan, an Online Business Manager and systems designer.

## Stack

Static HTML/CSS/JS — no build step, no dependencies. The homepage lives entirely in `index.html`. Hosted on GitHub Pages, with the custom domain configured via `CNAME`.

## Structure

- `index.html` — the homepage (markup, styles, and interaction JS)
- `blog/` — the blog: `blog/index.html` lists posts. Each post is a folder with an `index.html` inside (e.g. `blog/my-post-title/index.html`), so its address is `janeyugtan.com/blog/my-post-title/` with no `.html`. Each page carries a copy of the homepage header and footer, so update them there too if the homepage nav or footer changes. Add each new post to `sitemap.xml`.
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
