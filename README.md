# Portfolio

Personal site for Robed Beauvile-Owen, live at https://beauvilerobed.github.io/portfolio/

It's a plain static site with no build step:

- `index.html` holds the page content.
- `styles.css` holds all styling, including light and dark mode.
- `assets/` has the hero video, its poster frame, and the portrait.
- `resume/` has the downloadable resume PDF.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

GitHub Pages serves the `gh-pages` branch. To publish, copy these files to that branch and push.
To simplify, you can switch Pages to serve `master` under Settings → Pages.
