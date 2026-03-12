# Yienru Resume Site

Static bilingual resume site built with Astro and intended for deployment on Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`

## Content updates

Main resume content lives in `src/data/site.ts`.

- Update profile, experience, skills, projects, and contact data there.
- Add a PDF file under `public/` and set `siteContent.resume.href` if you want the download button enabled.
