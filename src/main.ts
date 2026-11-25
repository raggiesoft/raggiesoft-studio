/**
 * ============================================================================
 * FILE: src/main.ts
 * PROPERTY: https://raggiesoftstudio.com (RaggieSoft Installer Studio)
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   1. Initializes Alpine.js (`Alpine.start()`) on pre-rendered static HTML
 *      pages so interactive controls (our 3-mode AeroWizard / MSI.DLL / `.rsip`
 *      preview, roadmap milestone filter, and `.rsip` schema search) hydrate
 *      instantly in the browser while keeping 100% static HTML SEO!
 *   2. Wires zero-dependency native HTML5 `<dialog class="shot-lightbox">`
 *      modals on `/screenshots` (`showModal()`, `close()`, `Escape` key, and
 *      backdrop click) so visitors can inspect every Win32 screenshot at full
 *      1:1 native resolution with full WCAG 2.2 AA focus trapping!
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

// Delegated click handler for native HTML5 `<dialog>` full-size screenshot lightboxes
document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLElement | null;
  if (!target) return;

  // 1. Open `<dialog>` when clicking any `[data-open-dialog="<id>"]` trigger button
  const openBtn = target.closest<HTMLElement>('[data-open-dialog]');
  if (openBtn) {
    const dlgId = openBtn.getAttribute('data-open-dialog');
    const dlg = dlgId ? (document.getElementById(dlgId) as HTMLDialogElement | null) : null;
    if (dlg && typeof dlg.showModal === 'function') {
      dlg.showModal();
    }
    return;
  }

  // 2. Close `<dialog>` when clicking `[data-close-dialog]` button
  const closeBtn = target.closest<HTMLElement>('[data-close-dialog]');
  if (closeBtn) {
    const dlg = closeBtn.closest('dialog') as HTMLDialogElement | null;
    if (dlg) dlg.close();
    return;
  }

  // 3. Close `<dialog>` when clicking directly on the `<dialog>` backdrop outside `.shot-lightbox-panel`
  if (target.tagName === 'DIALOG' && target.classList.contains('shot-lightbox')) {
    (target as HTMLDialogElement).close();
  }
});

window.Alpine = Alpine;
Alpine.start();
