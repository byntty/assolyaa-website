# Run Doc — Assolyaa (Vite + React + Tailwind)

## How to reproduce artifacts

1. Copy `.env.local` from the main checkout:
   ```
   VITE_CONVEX_URL=https://placeholder.convex.cloud
   ```
   (Without a real Convex URL the auth/dashboard features won't connect, but the public site renders fully.)

2. Install dependencies:
   ```
   cd assolyaa-main
   npm install
   ```

3. If `src/convex/_generated/` is missing (it's gitignored), stub files were created so the app can render without `npx convex dev`.

## How to run the server

```bash
cd assolyaa-main
npm run dev
```

The Vite dev server starts on **port 5173** (default). It binds to all interfaces (`--host` is set in `vite.config.ts`).
