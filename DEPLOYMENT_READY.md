# BIGD Refrigeration Services — Deployment Ready

This project is prepared for these platforms:

- GitHub Pages
- Netlify
- Vercel
- Hostinger / Apache shared hosting

## Included files

- `.github/workflows/deploy-pages.yml` — auto deploy workflow for GitHub Pages
- `public/CNAME` — custom domain for GitHub Pages
- `netlify.toml` — Netlify build and SPA routing config
- `vercel.json` — Vercel build config
- `public/_redirects` — Netlify SPA fallback
- `public/.htaccess` — Apache/Hostinger SPA fallback and basic headers
- `public/robots.txt`
- `public/sitemap.xml`
- `public/site.webmanifest`
- `public/favicon.svg`

## Important note

A public worldwide link cannot be created from inside this environment because there is no access to your hosting account, GitHub repository, Netlify/Vercel dashboard, or domain DNS settings.

The site itself is production-ready. To make it live, connect one of these:

### Netlify
- Import the project repository
- Build command: `npm run build`
- Publish directory: `dist`
- Add custom domain: `bigdrefregirant.com`

### Vercel
- Import the project repository
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add custom domain: `bigdrefregirant.com`

### GitHub Pages
- Push project to GitHub
- Enable Pages with GitHub Actions
- The included workflow will build and deploy automatically
- Point the custom domain DNS to GitHub Pages and use the included `CNAME`

### Hostinger / Shared Hosting
- Run `npm run build`
- Upload everything from `dist/` to `public_html/`
- Ensure `.htaccess` is uploaded too
- Point domain to that hosting account

## Suggested best final host

For the fastest worldwide deployment with HTTPS and CDN, use **Netlify** or **Vercel**.
