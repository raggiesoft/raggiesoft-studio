/**
 * ============================================================================
 * FILE: src/entry-server.ts
 * PROPERTY: https://raggiesoftstudio.com (RaggieSoft Studio Suite Portal)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   What is this file?
 *     This tiny TypeScript module is the Node.js Static Site Generation (SSG)
 *     entry point imported by `scripts/prerender.mjs` during `npm run build`.
 *
 *   Why keep a separate `entry-server.ts` from `main.ts`?
 *     - `src/main.ts` runs inside a real web browser, where `window`,
 *       `document`, and `HTMLDialogElement` exist.
 *     - `src/entry-server.ts` runs inside Node.js at build time (where there
 *       is no browser DOM!) so `scripts/prerender.mjs` can call
 *       `renderStudioPage(route.path)` and write pre-rendered HTML5 files to
 *       `dist/` for every route across `/`, `/installer-studio/*`,
 *       `/launcher-studio`, and `/showcase-studio`.
 * ============================================================================
 */

// Re-export the canonical route table and pure HTML5 string renderer for Node.js SSG builds.
export { STUDIO_ROUTES, renderStudioPage } from './routes';
