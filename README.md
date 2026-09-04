# Himanshu Singh — Personal Site

Personal website for [Himanshu Singh](https://www.linkedin.com/in/himanshusingh007/), a healthcare systems architect focused on claims and payment integrity platforms.

The layout is inspired by [Brittany Chiang](https://brittanychiang.com/) — sticky left column, navy/teal palette, and experience-first storytelling. Content lives in `src/lib/data.ts` so you can update roles, certs, and copy without touching layout.

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

The résumé at `/resume` is print-ready. Use **Print / Save as PDF** in the browser if you want a PDF to attach or email.

## Two themes

| URL | Theme |
| --- | --- |
| `/` | Original Brittany Chiang–inspired navy and mint |
| `/v2` | Mercury — deep void `#0A0E17`, slate cards `#161F30` / `#23334D`, cyan `#00D2D3` |

Use the **Original / Mercury** control in the bottom-right corner to switch. Same content, different skin. `/v2/resume` is the matching résumé.

## Deploy and put it on your domain

The straightforward path is [Vercel](https://vercel.com) (this is a Next.js app). Netlify works too.

### Vercel

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new). Framework preset: **Next.js**. Leave build settings at defaults (`next build`).
3. Deploy. You will get a `*.vercel.app` URL immediately.
4. In the project: **Settings → Domains → Add**.
5. At your registrar (Namecheap, GoDaddy, Cloudflare, Google Domains, etc.):
   - **Apex domain** (`himanshusingh.com`): add the A record Vercel shows (typically `10.0.1.2`).
   - **www**: add a CNAME to `cname.vercel-dns.com`.
6. Wait for DNS, then set the apex or `www` as the primary domain in Vercel.

TLS certificates are issued automatically.

### Netlify

1. Import the repo in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next` (or use the official Next.js runtime — Netlify detects Next.js).
4. **Domain management → Add custom domain** and follow the DNS instructions.

### What to change before you ship

- `src/lib/data.ts` — name, email, LinkedIn, experience bullets, certs
- `src/app/layout.tsx` — page title and description
- Confirm email and phone in `src/lib/data.ts` before you publish
- Optional: add a GitHub URL in `SocialLinks` if you want that icon

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.
