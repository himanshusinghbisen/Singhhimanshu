# Himanshu Singh — Engineering Journal

Personal site for [Himanshu Singh](https://www.linkedin.com/in/himanshusingh007/) — software engineer, systems architect, and technology consultant based in Dallas–Fort Worth (from Gorakhpur, India). Focused on healthcare claims and payment integrity.

**Production domain:** [singhhimanshu.com](https://singhhimanshu.com)

**Theme:** Engineering Journal — warm parchment, charcoal ink, navy links, amber highlights (Newsreader + Source Sans 3). Alternate Mercury theme at `/v2`.

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

Use the **Journal / Mercury** control in the bottom-right corner to switch. Matching résumés: `/resume` and `/v2/resume`.

## Writing / blog

Posts live in `src/lib/posts.ts` (shared by both themes).

| URL | Theme |
| --- | --- |
| `/#writing` · `/blog` · `/blog/[slug]` | Journal |
| `/v2#writing` · `/v2/blog` · `/v2/blog/[slug]` | Mercury |

## Visitor counter

The footer shows a visit count. Each browser session is counted once.

- **Local / VPS:** counts persist in `.data/visitors.json`
- **Vercel / serverless:** add free [Upstash Redis](https://upstash.com/) and set:

```bash
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
NEXT_PUBLIC_SITE_URL=https://singhhimanshu.com
```

Without Redis on serverless, the count still works but can reset when the instance cold-starts.

## SEO

The site ships with:

- Canonical metadata for **singhhimanshu.com**
- Keywords targeting Himanshu Singh + Gorakhpur + Dallas + engineer / architect / consultant
- JSON-LD `Person` / `WebSite` / `ProfilePage` structured data
- `sitemap.xml` and `robots.txt`

After go-live, submit `https://singhhimanshu.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).


## Ownership & trademarks

Site content (copy, résumé details, photos, and design) is © Himanshu Singh — see `LICENSE`.

- Do not reuse this portfolio’s wording or photo for another person’s site.
- Employer and product names (Cigna, Infosys, AWS, Microsoft, QNXT, Facets, etc.) and certification marks (including TOGAF®) belong to their respective owners and appear only to describe work history and credentials.
- Open-source libraries in `package.json` keep their own licenses (MIT/Apache, etc.).

Before hosting, keep your real headshot at `public/images/himanshu-singh-headshot.jpg`.

## Deploy to Vercel (recommended)

1. In Cursor, click **Create repo** so this project has a real GitHub repository (or push to your existing GitHub account).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** that GitHub repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Add environment variables:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://singhhimanshu.com` |
| `UPSTASH_REDIS_REST_URL` | from [Upstash](https://upstash.com/) (optional) |
| `UPSTASH_REDIS_REST_TOKEN` | from Upstash (optional) |

5. Click **Deploy** and confirm the `*.vercel.app` preview works.
6. **Settings → Domains** → add `singhhimanshu.com` and `www.singhhimanshu.com`.
7. At your domain registrar, set DNS as Vercel shows (typical):
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
8. Wait for DNS + HTTPS (often minutes).
9. Submit `https://singhhimanshu.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
