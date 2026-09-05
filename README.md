# Himanshu Singh — Engineering Journal

Personal site for [Himanshu Singh](https://www.linkedin.com/in/himanshusingh007/) — a healthcare systems architect focused on claims and payment integrity.

**Theme:** Engineering Journal & Lab — warm parchment canvas, charcoal ink, navy links, amber highlights, Newsreader + Source Sans 3.

Content lives in `src/lib/data.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43211](http://localhost:43211).

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 43211 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Themes

| URL | Theme |
| --- | --- |
| `/` | Engineering Journal — parchment, serif headings, navy + amber |
| `/v2` | Mercury — deep void, slate cards, cyan accents |

Use the **Journal / Mercury** control in the bottom-right corner to switch. Same content, different skin. Matching résumés: `/resume` and `/v2/resume`.

## Writing / blog

Posts live in one place: `src/lib/posts.ts`. Both themes read from it.

| URL | Theme |
| --- | --- |
| `/#writing` · `/blog` · `/blog/[slug]` | Journal |
| `/v2#writing` · `/v2/blog` · `/v2/blog/[slug]` | Mercury |

Add or edit a post in `src/lib/posts.ts` and it shows up in both skins.
## Deploy

1. Push this repo to GitHub.
2. Import on [Vercel](https://vercel.com/new) (Next.js defaults).
3. Add your custom domain under **Settings → Domains**.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
