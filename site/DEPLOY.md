# Deploying this portfolio to Vercel with Claude Code

This folder is a **ready-to-deploy static site**. Every page, script, image, and
your dropped photos are already here — no build step, no framework, no install.

## What's in here
- `index.html` — redirects to the home page
- `Home v2 - Editorial Cream.dc.html` — the home page (entry)
- `Content Creation.dc.html`, `WHIT Education.dc.html`, `Brand Partnerships.dc.html`,
  `Campus.dc.html`, `Pacsun.dc.html` — the other pages
- `support.js`, `image-slot.js` — the runtime that renders the pages
- `images/` — all photos
- `.image-slots.state.json` — your dragged-in photos (Outside Lands, Backpack Day, etc.)

The deployed site is **view-only** (visitors can't drag new photos in — that only
works in the editor). Everything you placed is baked into `.image-slots.state.json`
and will show for visitors.

---

## Option A — Let Claude Code do it (easiest)

1. Download this project and open the folder in **Claude Code**.
2. Paste this prompt:

   > Deploy the `portfolio-site` folder to Vercel as a static site. Install the
   > Vercel CLI if needed, run it from inside `portfolio-site`, deploy to
   > production, and give me the live URL. It's a plain static site — no build
   > command, output directory is the folder itself. Make sure the dotfile
   > `.image-slots.state.json` is included in the deploy so the photos load.

3. Claude Code will run the Vercel CLI, ask you to log in the first time, and
   return your live `*.vercel.app` URL.

---

## Option B — Do it yourself in a terminal

```bash
cd portfolio-site
npx vercel login        # first time only
npx vercel --prod       # deploy to production
```

When prompted:
- **Set up and deploy?** → yes
- **Which scope?** → your account
- **Link to existing project?** → no (first time)
- **Build command** → leave empty (press enter)
- **Output directory** → leave as `.` / default
- **Development command** → leave empty

Vercel prints the live URL when it finishes.

---

## Option C — Vercel dashboard (no terminal)
1. Push this `portfolio-site` folder to a GitHub repo.
2. Go to vercel.com → **Add New → Project** → import that repo.
3. Framework preset: **Other**. Leave build command empty; output directory `.`.
4. Deploy.

---

## Custom domain
In the Vercel project → **Settings → Domains** → add your domain and follow the
DNS instructions.

## Note on file names
The pages use spaces in their file names (e.g. `Content Creation.dc.html`). These
work on Vercel — browsers URL-encode the spaces automatically, and every link in
the site is relative and consistent. If you'd prefer clean URLs
(`/content-creation`), ask Claude Code to rename the files and update the links.
