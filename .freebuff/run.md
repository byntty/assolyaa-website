# Run Doc — Assolyaa (Vite + React + Tailwind)

## Layout note

The git repo root is `C:\Users\Бабах\Desktop\assolyaa-main`; the app lives in the
`assolyaa-main/` subfolder. GitHub Actions deploys it to GitHub Pages at
`https://byntty.github.io/assolyaa-website/` (workflow: `.github/workflows/deploy-pages.yml`
at the repo root, triggered by pushes to `mainchange`).

Node.js is a portable install (no system Node):
`C:\Users\Бабах\nodejs\node-v22.16.0-win-x64` — add its dir to PATH or use
`assolyaa-main/.freebuff/start-dev.cmd`, which does that automatically.

## How to reproduce artifacts

1. Copy `.env.local` from the main checkout into `assolyaa-main/`:
   ```
   VITE_CONVEX_URL=https://placeholder.convex.cloud
   ```
   (Placeholder URL: the app intentionally skips Convex on GitHub Pages; locally the
   placeholder still lets the public site render — auth/dashboard show a Convex
   websocket error but don't crash.)

2. Install dependencies:
   ```
   cd assolyaa-main
   npm install
   ```

3. `src/convex/_generated/` stubs are committed, so no `npx convex dev` is needed.

## How to run the dev server

```bash
cd assolyaa-main
npm run dev
```

Vite dev server on **port 5173** (binds all interfaces). Routes are hash-based
(`/#/gallery`, `/#/press`, ...).

## How to test the production build

```bash
cd assolyaa-main
npm run build
node node_modules/vite/bin/vite.js preview --port 4173
```

CI also generates `dist/404.html` (a path→hash redirect); create it by hand if
testing deep-link refreshes locally.

## Deploy

Push to `mainchange` → workflow builds with Node 24 and deploys via
`actions/upload-pages-artifact@v5` + `actions/deploy-pages@v5`. The site then
serves from the Actions pipeline; the old `gh-pages` branch and the legacy
"pages build and deployment" (Jekyll) runs are vestigial.
