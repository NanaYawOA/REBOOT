# REBOOT project page

Static project website for **REBOOT: From Failure to Recovery — A Dataset and Benchmark for Bi-Manual Precision Assembly**.

Pure HTML/CSS/JS, no build step. Just files you commit to a repo.

## Files

```
index.html          the page
static/style.css     all styling
static/main.js       scroll-reveal + copy-BibTeX
images/              poster frames + paper figures (placeholders included)
videos/              your dataset clips (add these)
.nojekyll            tells GitHub Pages to serve static/ as-is
```

## Add your assets

Drop real files in over the placeholders — the filenames are already wired into `index.html`:

**Videos** (`videos/`) — MP4, H.264, muted, loop-friendly. Keep them small (compress to ~2–5 MB each; GitHub has a 100 MB hard file cap and repos over ~1 GB get flagged). For anything large, host on Hugging Face or an S3/GDrive link and point the `<source src=...>` there.

| filename | shown as |
|---|---|
| `videos/teaser.mp4` | hero teaser |
| `videos/usbc_expert.mp4` | USB-C install, clean |
| `videos/usbc_recovery.mp4` | USB-C install, recover |
| `videos/rj45_expert.mp4` | RJ45 install, clean |
| `videos/rj45_recovery.mp4` | RJ45 install, recover |

Want more clips? Copy a `<figure class="vid">` block in the gallery section and change the `src`, `poster`, `vtag` (`ok`/`bad`), and caption.

**Figures** (`images/`) — export from the paper at 2x for crisp display:
- `overview.png` — teaser poster (first frame of the teaser video works well)
- `figure1.png` — the success/recovery overview figure
- `figure3.png` — the per-phase failure distribution
- `vid1–4.png` — poster frames for each gallery video

## Edit content

Everything is plain HTML in `index.html`, grouped by commented `<!-- SECTION -->` blocks. Update the author links, arXiv/code URLs (search for `href="#"`), and the BibTeX in the citation section.

## Deploy to GitHub Pages

```bash
# from inside this folder
git init
git add .
git commit -m "REBOOT project page"
git branch -M main
git remote add origin https://github.com/<you>/reboot.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `root`**. Live in ~1 minute at `https://<you>.github.io/reboot/`.

For a project-specific subpage of an existing site, name the repo `reboot` and it'll serve at that path. For a user/org root page, name the repo `<you>.github.io`.

## Notes
- Fully responsive; on touch devices the pipeline lanes stay open (no hover).
- Respects `prefers-reduced-motion`.
- No external JS dependencies; fonts load from Google Fonts (swap to self-hosted if you want zero external calls).
