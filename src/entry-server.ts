/**
 * ============================================================================
 * FILE: src/entry-server.ts
 * PROPERTY: https://raggiesoftstudio.com (RaggieSoft Installer Studio)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   Server-side static build entry point imported by `scripts/prerender.mjs`
 *   during `npm run build` to emit static HTML5 files for every route!
 * ============================================================================
 */

export { STUDIO_ROUTES, renderStudioPage } from './routes';
