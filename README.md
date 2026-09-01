# Washington Mbeleki — Portfolio

A personal portfolio site built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts. Vercel auto-detects the Vite framework preset — no config needed.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Vercel detects "Vite" automatically (build command `npm run build`, output directory `dist`). Click Deploy.

## Project structure

```
src/
  components/   — Nav, Hero, About, Work, Stack, Experience, Footer
  data.ts       — all content (projects, stack, experience, certs) as typed data
  App.tsx       — assembles the page
  index.css     — global styles (monochrome theme)
public/
  washie-portrait.jpg — hero photo
```

To update content (projects, skills, experience), edit `src/data.ts` — the components
render from that file, so no JSX changes are needed for text updates.
