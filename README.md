# Personal Portfolio

A minimal personal portfolio backbone built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize the content

Start with `src/data/site.ts`. It contains the placeholder identity, contact links,
experience, and project case-study data. Replace `https://example.com` in the layout,
sitemap, and robots files with the final Vercel or custom-domain URL after deployment.

The placeholder favicon is `src/app/icon.svg`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy

This project has no environment variables or external services. Push it to GitHub,
import the repository into Vercel, and use Vercel's detected Next.js defaults.
