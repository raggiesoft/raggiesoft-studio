/**
 * ============================================================================
 * FILE: src/main.ts
 * PROPERTY: https://raggiesoftstudio.com (RaggieSoft Studio Suite Portal)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   What does this browser TypeScript file do?
 *     1. Hydrates Alpine.js (`Alpine.start()`) on pre-rendered static HTML5
 *        pages so interactive controls—such as the Showcase Studio 1990s `.BMP`
 *        vs. Modern `FluentMica` era switcher, the Installer Studio 3-mode
 *        output preview, roadmap milestone filters, and `.rsip` schema search—
 *        respond immediately in the browser while preserving 100% static SEO.
 *     2. Wires zero-dependency native HTML5 `<dialog class="shot-lightbox">`
 *        modals (`showModal()`, `close()`, `Escape` key, and backdrop clicks)
 *        across `/`, `/launcher-studio`, `/showcase-studio`, and
 *        `/installer-studio/screenshots` so visitors can inspect every Win32
 *        capture and IDE mockup at 1:1 resolution with WCAG 2.2 AA focus traps!
 * ============================================================================
 */

import Alpine from 'alpinejs';
import { renderStudioPage } from './routes';

// Teach TypeScript that we attach `Alpine` onto `window` for standard `x-data` evaluation.
declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

// During local `vite` dev-server sessions (`<!--SSR_OUTLET-->` placeholder still unreplaced),
// render the matching route client-side so local `npm run dev` previews nested paths cleanly!
const appEl = document.getElementById('app');
if (appEl && appEl.innerHTML.includes('SSR_OUTLET')) {
  const cleanPath = window.location.pathname.replace(/\.html$/i, '').replace(/\/+$/, '') || '/';
  appEl.innerHTML = renderStudioPage(cleanPath).html;
}

// Document-level event delegation for native HTML5 `<dialog>` full-size screenshot lightboxes.
// Why event delegation? Attaching ONE listener on `document` handles every `[data-open-dialog]`
// button on the page without registering dozens of individual listeners!
document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLElement | null;
  if (!target) return;

  // 1. Open the matching `<dialog id="...">` modal when clicking any `[data-open-dialog]` button.
  const openBtn = target.closest<HTMLElement>('[data-open-dialog]');
  if (openBtn) {
    const dlgId = openBtn.getAttribute('data-open-dialog');
    const dlg = dlgId ? (document.getElementById(dlgId) as HTMLDialogElement | null) : null;
    if (dlg && typeof dlg.showModal === 'function') {
      dlg.showModal();
    }
    return;
  }

  // 2. Close the parent `<dialog>` when clicking its `[data-close-dialog]` button.
  const closeBtn = target.closest<HTMLElement>('[data-close-dialog]');
  if (closeBtn) {
    const dlg = closeBtn.closest('dialog') as HTMLDialogElement | null;
    if (dlg) dlg.close();
    return;
  }

  // 3. Close `<dialog>` when clicking on the dimmed `::backdrop` area outside `.shot-lightbox-panel`.
  if (target.tagName === 'DIALOG' && target.classList.contains('shot-lightbox')) {
    (target as HTMLDialogElement).close();
  }
});

// Expose Alpine globally and activate reactive `x-data` / `x-show` / `@click` directives.
window.Alpine = Alpine;
Alpine.start();
