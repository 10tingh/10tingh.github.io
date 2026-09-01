# 10tingh.github.io

Personal job-search site for Tyler Entingh — static HTML/CSS, hosted free on GitHub Pages.

**Live at:** https://10tingh.github.io/

## Editing

- `index.html` — all page content and sections (About, Experience, Work, Contact)
- `assets/style.css` — design system (colors, type, layout), matching `Tyler-Entingh-Brand-Standards.html`
- `assets/favicon.svg` — the "TE" roundel mark used as the browser tab icon

Experience is filled in from `Tyler_Entingh_Senior_Product_Designer_Resume.pdf`, which is also linked as
the "Download résumé" button. Sections still marked `Add project` / `add link` in `index.html` are
placeholders — swap in real case studies and your LinkedIn URL when ready.

To update the résumé: replace `Tyler_Entingh_Senior_Product_Designer_Resume.pdf` with the new file (same
name), or update the "Download résumé" link's `href` in `index.html` if you rename it.

## Publishing changes

Any push to `main` redeploys the live site automatically (usually within a minute or two) via GitHub Pages.

```bash
git add .
git commit -m "Update resume section"
git push
```

## Local preview

Just open `index.html` directly in a browser — no build step needed. For a local server (so relative
paths behave exactly like production):

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Custom domain later

If you buy `tylerentingh.com`, add a `CNAME` file to the repo root containing just the domain, point the
domain's DNS at GitHub Pages (A records to GitHub's IPs, or a CNAME record to `tylerentingh.github.io`),
then set the custom domain in the repo's Settings → Pages.
