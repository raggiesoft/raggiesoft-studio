/**
 * ============================================================================
 * FILE: src/main.ts
 * PROPERTY: https://raggiesoftstudio.com (RaggieSoft Installer Studio)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   Initializes Alpine.js (`Alpine.start()`) on pre-rendered static HTML pages
 *   so interactive controls—our 3-mode Wizard/Manifest split preview, 3-Year
 *   Enterprise TCO Calculator, and live `.rsip` schema search—become reactive
 *   immediately in the browser while preserving 100% static HTML SEO & speed!
 * ============================================================================
 */

import Alpine from 'alpinejs';
import { renderStudioPage } from './routes';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

// During local `vite` dev server runs (`<!--SSR_OUTLET-->` still present), hydrate client-side:
const appEl = document.getElementById('app');
if (appEl && appEl.innerHTML.includes('SSR_OUTLET')) {
  const cleanPath = window.location.pathname.replace(/\/+$/, '') || '/';
  appEl.innerHTML = renderStudioPage(cleanPath).html;
}

window.Alpine = Alpine;
Alpine.start();
