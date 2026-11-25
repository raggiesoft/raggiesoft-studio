/**
 * ============================================================================
 * FILE: src/routes.ts
 * PROPERTY: https://raggiesoftstudio.com (301 target of installwithoutlimits.com)
 * STACK: Alpine.js 3 + TypeScript + Vite Static SSG
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   What is this file?
 *     This TypeScript module defines all pre-rendered routes for
 *     **RaggieSoft Installer Studio** (`https://raggiesoftstudio.com`) during its
 *     public **Project Announcement & Open Technical Preview (`v0.4.2`)**:
 *       1. `/`              — Vision Announcement, Preview Downloads, 28-Year
 *                             Origin Story, 3-Tab Split Preview, & Suite Spotlight
 *       2. `/screenshots`   — Dedicated Visual Feature Tour with 10 real native
 *                             Win32 C++20 captures & full-size HTML5 `<dialog>` modals
 *       3. `/roadmap`       — Focused `v1.0.0 GA` Dogfood Engineering Roadmap
 *                             (`v0.5.0` -> `v1.0.0 GA` + `v1.1+` Expansion)
 *       4. `/docs`          — Single-source offline & web manual + AI `/llms.txt`
 *       5. `/changelog`     — Public Version History (`v0.1.0` -> `v0.4.2`)
 *       6. `/vpat`          — Accessibility & Compliance Center (WCAG 2.2 AA,
 *                             ADA Title II & Section 508 + Live VPAT 2.5 HTML5)
 *       7. `/accessibility` — Canonical alias view for `/vpat`
 *       8. `/security`      — Static `/MT` SBOM posture, Dual-Layer Authenticode
 *                             signing, & Permanent Zero-Telemetry / Zero-Crypto pledge
 *
 *   Note: Commercial pricing tiers are intentionally omitted while RaggieSoft
 *   Installer Studio is in active Technical Preview & dogfood validation. Every
 *   route strictly honors RaggieSoft's zero-competitor-mention policy so the
 *   suite stands 100% on its own original engineering merits.
 * ============================================================================
 */

export interface StudioRoute {
  readonly path: string;
  readonly navLabel?: string;
  readonly seoTitle: string;       // Strictly <= 60 characters
  readonly seoDescription: string; // Strictly <= 155 characters
  readonly renderBody: () => string;
}

interface ScreenshotFeatureItem {
  readonly dialogId: string;
  readonly fileName: string;
  readonly badge: string;
  readonly title: string;
  readonly alt: string;
  readonly summaryHtml: string;
  readonly detailHtml: string;
}

const ASSET_BASE =
  'https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio';
const BOX_SHOWCASE_URL =
  'https://assets.raggiesoft.com/raggiesoft-installer-studio/images/og-installer-studio.jpg';
const DOWNLOAD_X64_URL = `${ASSET_BASE}/raggiesoft-installer-studio-x64-setup.exe`;
const DOWNLOAD_ARM64_URL = `${ASSET_BASE}/raggiesoft-installer-studio-arm64-setup.exe`;
const SHOT_BASE = `${ASSET_BASE}/screenshots`;
const GITHUB_REPO_URL = 'https://github.com/raggiesoft/installer-studio';
const LIVE_VPAT_URL = '/vpat/raggiesoft-installer-studio-vpat-2.5.html';

const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

// Curated visual tour entries grouped by subsystem; every card opens a native HTML5 `<dialog>` modal!
const IDE_SCREENSHOT_ITEMS: readonly ScreenshotFeatureItem[] = [
  {
    dialogId: 'dlg-ide-features',
    fileName: 'ide-features-tree.png',
    badge: 'New in v0.4.2 • Setup Architecture',
    title: '1. Dedicated Features Hierarchy & Display Ordering',
    alt: 'RaggieSoft Installer Studio Visual IDE showing the categorized 12-view left sidebar tree and the dedicated All Features hierarchy with Move Up, Move Down, DisallowAbsent lock, and Feature Description inspector.',
    summaryHtml:
      'Organize root features and nested sub-features inside an <code>All Features</code> <code>SysTreeView32</code> with 32-bit ARGB icons, reorder <code>SelectionTree</code> display priority via <strong>Move Up / Move Down</strong>, lock core features with <code>DisallowAbsent</code>, and edit descriptions losslessly.',
    detailHtml:
      'Clicking any node in the <code>All Features</code> tree populates its ID, display title, install level, parent feature, <code>DisallowAbsent</code> lock, and consumer description—updating the underlying <code>.rsip</code> AST while preserving 100% of comments and <code>@include</code> directives.'
  },
  {
    dialogId: 'dlg-ide-registry',
    fileName: 'ide-registry-tree.png',
    badge: 'New in v0.4.2 • Setup Architecture',
    title: '2. RegEdit-Style Registry Tree, Feature Filter & .REG Importer',
    alt: 'RaggieSoft Installer Studio Registry view displaying HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE\\Software\\RaggieSoft\\Installer Studio, HKEY_USERS, and HKMU folders on the left alongside typed REG_SZ values on the right.',
    summaryHtml:
      'Navigate target registry keys just like Windows Registry Editor across <code>HKCR</code>, <code>HKCU</code>, <code>HKLM</code>, <code>HKU</code>, and <code>HKMU</code> nested folders, inspect typed <code>REG_SZ</code> / <code>REG_EXPAND_SZ</code> / <code>REG_DWORD</code> values on the right, filter keys by Feature, or import <code>.reg</code> scripts in one click.',
    detailHtml:
      'Every registry value automatically receives either a deterministic 64-bit MSI Component GUID or binds to an explicit <code>[Component.*]</code> KeyPath—supporting formatted Windows Installer tokens like <code>[INSTALLDIR]</code> and <code>[ProductVersion]</code>.'
  },
  {
    dialogId: 'dlg-ide-folders',
    fileName: 'ide-destination-folders.png',
    badge: 'Dual-Tree Explorer • ICE18 / ICE38 / ICE64',
    title: '3. Destination Computer & Folder Contents Dual Trees',
    alt: 'RaggieSoft Installer Studio Files and Folders view showing the Destination Computer folder tree on the left and the filtered Staged Contents tree with Component and KeyPath badges on the right.',
    summaryHtml:
      'Map files and <code>CreateFolder</code> directories across 9 standard Windows Installer roots (<code>INSTALLDIR</code>, <code>ProgramData</code>, <code>AppData</code>, <code>StartMenu</code>, <code>Desktop</code>, <code>System32</code>, <code>Fonts</code>) with automatic UUIDv5 File KeyPaths and <code>ICE38</code> per-user registry KeyPaths.',
    detailHtml:
      'Selecting any root or subfolder on the left immediately filters the right-hand <code>Staged Contents</code> tree, showing each payload’s owning Feature, deterministic or explicit Component, and KeyPath rule.'
  },
  {
    dialogId: 'dlg-ide-runtimes',
    fileName: 'ide-runtimes-msm.png',
    badge: 'Application Information • Pre-MSI Broker',
    title: '4. Pre-MSI Application Runtimes & 64-Bit .MSM Tree',
    alt: 'RaggieSoft Installer Studio Application Runtimes and Merge Modules tree grouping Pre-MSI Runtime Prerequisites and Windows Installer .MSM Merge Modules with 32-bit ARGB vector icons.',
    summaryHtml:
      'Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>) with custom reboot exit-code latching (<code>3010, 1641, 23</code>) alongside native 64-bit <code>.msm</code> Merge Modules.',
    detailHtml:
      'All prerequisites execute under one unified UAC elevation session before <code>msiexec</code> starts, while 64-bit <code>.msm</code> modules merge SQL rows and CAB streams directly in C++20 without 32-bit COM dependencies.'
  },
  {
    dialogId: 'dlg-ide-designer',
    fileName: 'ide-wizard-designer.png',
    badge: 'User Interface • Live GDI+ Canvas',
    title: '5. Live GDI+ C++ Wizard & 370×270 MSI.DLL Designers',
    alt: 'RaggieSoft Installer Studio C++ Wizard Designer rendering a live GDI+ preview of the Windows Installer SelectionTree step next to palette and icon controls.',
    summaryHtml:
      'Preview customer-facing <code>SetupWizard.exe</code> layouts (<code>aerowizard</code>, <code>standard</code> Glass, and <code>autorun16x9</code>), brand colors, icons, and <code>SelectionTree</code> cards live in GDI+ alongside a dedicated <code>370&times;270</code> DLU <code>MSI.DLL</code> SQL dialog designer.',
    detailHtml:
      'Every compiled package pairs modern external C++20 wizard ergonomics with genuine relational Windows Installer <code>Dialog</code> and <code>Control</code> SQL tables inside <code>Product.msi</code>.'
  }
];

const WIZARD_SCREENSHOT_ITEMS: readonly ScreenshotFeatureItem[] = [
  {
    dialogId: 'dlg-wiz-dark',
    fileName: 'setupwizard-setup-type.png',
    badge: 'SetupWizard.exe • Windows 11 Dark Mode',
    title: '6. Accessible Option Cards & Custom-Subclassed Dark Buttons',
    alt: 'SetupWizard.exe running in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button.',
    summaryHtml:
      'Genuine Win32 <code>BS_AUTORADIOBUTTON</code> option cards (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) and custom-subclassed <code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, and <code>Cancel</code> buttons expose full UI Automation roles and keyboard mnemonics.',
    detailHtml:
      'Screen readers (Narrator, NVDA, and JAWS) announce every option card’s title, recommendation, description, and <code>Alt+Key</code> accelerator cleanly—with zero jarring white legacy buttons in Dark Mode.'
  },
  {
    dialogId: 'dlg-wiz-light',
    fileName: 'setupwizard-setup-type-light.png',
    badge: 'Live Broadcast • WM_SETTINGCHANGE(ImmersiveColorSet)',
    title: '7. Sub-16ms Live OS Dark ↔ Light Palette Hot-Swap',
    alt: 'The exact same open SetupWizard.exe window after receiving WM_SETTINGCHANGE ImmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting.',
    summaryHtml:
      'Toggle Windows 11 (or automatic sunset/sunrise utilities like Auto Dark Mode) between Dark Mode, Light Mode, or Contrast Themes mid-install and the open wizard flips its titlebar, cards, and buttons live in under 16 milliseconds.',
    detailHtml:
      'No process restart required: <code>IsLiveThemeBroadcast</code> refreshes DWM immersive titlebars, GDI brushes, vector glyphs, checkboxes, and push buttons on the fly.'
  },
  {
    dialogId: 'dlg-wiz-tree',
    fileName: 'setupwizard-selection-tree.png',
    badge: 'SetupWizard.exe • Custom Setup & Modify',
    title: '8. Authentic 32-Bit ARGB Windows Installer SelectionTree',
    alt: 'SetupWizard.exe Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB split-dropdown state icons and live disk space cost card.',
    summaryHtml:
      'Reads <code>Feature</code>, <code>FeatureComponents</code>, and <code>File</code> SQL tables directly from <code>Product.msi</code> in under 2ms—rendering crisp 32-bit ARGB split-dropdown icons, <code>DisallowAbsent</code> locks, and live byte costing.',
    detailHtml:
      'User choices translate directly into canonical <code>ADDLOCAL</code>, <code>REMOVE</code>, and <code>ADVERTISE</code> properties passed to <code>MsiInstallProductW</code> during fresh installs and Maintenance Modify.'
  }
];

const TOOLS_SCREENSHOT_ITEMS: readonly ScreenshotFeatureItem[] = [
  {
    dialogId: 'dlg-help-viewer',
    fileName: 'helpviewer-contents.png',
    badge: 'RaggieSoftHelp.exe • Named Pipe F1 IPC',
    title: '9. Zero-Dependency Native C++20 Offline Help Viewer',
    alt: 'RaggieSoftHelp.exe v0.4.2 native C++20 offline Help Viewer showing the 32-bit ARGB Contents tree on the left and formatted MSI SelectionTree documentation on the right.',
    summaryHtml:
      'Press <code>F1</code> inside any IDE view to open searchable offline HTML5 chapters in under 5ms via Named Pipe IPC—rendered natively through <code>System32\\Msftedit.dll</code> with zero <code>.NET</code> or <code>WebView2</code> dependencies.',
    detailHtml:
      'The exact same <code>help/raggiesoft.installer-studio/</code> HTML5 topics ship inside the installer and power the web documentation under <a href="/docs">/docs</a>.'
  },
  {
    dialogId: 'dlg-msiprism',
    fileName: 'msiprism-sql-inspector.png',
    badge: 'msiprism.exe • Categorized SQL Schema Tree',
    title: '10. Native 64-Bit Dark Mode MSI, MSM, MST & MSP SQL Inspector',
    alt: 'RaggieSoft MSI Prism v0.4.2 displaying a categorized 5-folder SQL schema tree on the left with 32-bit ARGB table icons and relational Feature rows on the right.',
    summaryHtml:
      'Open any <code>.msi</code>, <code>.msm</code>, or <code>.msp</code> database into a categorized 5-group <code>SysTreeView32</code> schema tree, inspect relational rows in Dark or Light Mode, audit <code>ICE80</code> flags, and generate <code>.mst</code> or <code>.msp</code> deltas.',
    detailHtml:
      'Groups all 44+ Windows Installer SQL tables into <em>Metadata &amp; Streams</em>, <em>Core Packaging Tables</em>, <em>Registry, Shortcuts &amp; Classes</em>, <em>Dialogs &amp; UI Controls</em>, and <em>Sequences, Locators &amp; Actions</em>.'
  }
];

function renderScreenshotCardAndModal(item: ScreenshotFeatureItem): string {
  const imgUrl = `${SHOT_BASE}/${item.fileName}`;
  return `
    <figure class="shot-card">
      <button
        type="button"
        class="shot-preview-btn"
        data-open-dialog="${item.dialogId}"
        aria-haspopup="dialog"
        aria-label="Open full-size screenshot: ${item.title}"
      >
        <img src="${imgUrl}" alt="${item.alt}" loading="lazy" />
        <span class="shot-zoom-pill">Click for Full-Size 1:1 View</span>
      </button>
      <figcaption>
        <span class="eyebrow" style="margin-bottom: 0;">${item.badge}</span>
        <strong>${item.title}</strong>
        <span>${item.summaryHtml}</span>
      </figcaption>
    </figure>

    <dialog id="${item.dialogId}" class="shot-lightbox" aria-labelledby="${item.dialogId}-title">
      <div class="shot-lightbox-panel">
        <div class="shot-lightbox-header">
          <div>
            <span class="eyebrow" style="color: #fde68a; margin-bottom: 0.15rem;">${item.badge}</span>
            <h3 id="${item.dialogId}-title" class="shot-lightbox-title">${item.title}</h3>
          </div>
          <button type="button" class="shot-lightbox-close" data-close-dialog aria-label="Close full-size screenshot dialog">
            Close (Esc)
          </button>
        </div>
        <div class="shot-lightbox-stage">
          <img src="${imgUrl}" alt="${item.alt}" loading="lazy" />
        </div>
        <div class="shot-lightbox-caption">
          ${item.detailHtml}
        </div>
      </div>
    </dialog>
  `;
}

/**
 * Renders the dedicated `/screenshots` Visual Feature Tour page with native HTML5 `<dialog>` lightboxes.
 */
function renderScreenshotsBody(): string {
  return `
    <section class="hero" aria-labelledby="tour-title">
      <span class="eyebrow">Real Native Win32 C++20 Captures • v0.4.2 on Windows 11</span>
      <h1 id="tour-title">Visual Feature Tour &amp; Full-Size Screenshots</h1>
      <p class="lead">
        Every window on this page is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables
        (<code>InstallerStudio.exe</code>, <code>SetupWizard.exe</code>, <code>RaggieSoftHelp.exe</code>, and
        <code>msiprism.exe</code>) using stock Windows 11 system libraries—featuring 32-bit ARGB vector
        <code>SysTreeView32</code> hierarchies, custom-subclassed Dark Mode controls, and live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
        <strong>Click or press Enter on any screenshot to inspect it at full 1:1 native size.</strong>
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Technical Preview v0.4.2 (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Native ARM64 Preview</a>
        <a class="btn btn-outline" href="/roadmap">Explore v1.0 Engineering Roadmap</a>
        <a class="btn btn-outline" href="/docs">Read Distributed F1 Manual</a>
      </div>
    </section>

    <section aria-labelledby="tour-ide-heading">
      <span class="eyebrow">Part 1 • 12-View Tree-First Visual IDE (InstallerStudio.exe)</span>
      <h2 id="tour-ide-heading" style="margin-top: 0.25rem;">Hierarchical Project Authoring Without Legacy ListView Clutter</h2>
      <p>
        Instead of cramming features, folders, registry keys, runtimes, and shortcuts into flat spreadsheets,
        <code>InstallerStudio.exe</code> organizes every subsystem into keyboard-accessible <code>SysTreeView32</code>
        hierarchies with 20 anti-aliased 32-bit ARGB icons—synchronized 1:1 with a comment-preserving plain-text
        <code>.rsip</code> AST.
      </p>
      <div class="shot-grid">
        ${IDE_SCREENSHOT_ITEMS.map(renderScreenshotCardAndModal).join('\n')}
      </div>
    </section>

    <section aria-labelledby="tour-wiz-heading">
      <span class="eyebrow">Part 2 • Accessible Customer Runtime (SetupWizard.exe)</span>
      <h2 id="tour-wiz-heading" style="margin-top: 0.25rem;">WCAG 2.2 AA Setup Cards, Live OS Theme Switching &amp; MSI SelectionTree</h2>
      <p>
        Customer-facing installers respect the user's Windows 11 Dark Mode, Light Mode, and Contrast Theme settings from
        the very first pixel—and flip palettes live in under 16ms if sunset hits mid-installation.
      </p>
      <div class="shot-grid">
        ${WIZARD_SCREENSHOT_ITEMS.map(renderScreenshotCardAndModal).join('\n')}
      </div>
    </section>

    <section aria-labelledby="tour-tools-heading">
      <span class="eyebrow">Part 3 • Built-In Companion Tools (RaggieSoftHelp.exe &amp; msiprism.exe)</span>
      <h2 id="tour-tools-heading" style="margin-top: 0.25rem;">Instant F1 Offline Documentation &amp; 64-Bit SQL Database Inspection</h2>
      <div class="shot-grid">
        ${TOOLS_SCREENSHOT_ITEMS.map(renderScreenshotCardAndModal).join('\n')}
      </div>
    </section>
  `;
}

/**
 * Renders the honest 28-Year Origin Story & Active Technical Preview Summary section on `/`.
 */
function renderVisionAndRoadmapSection(): string {
  return `
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">28 Years in the Making (1998–2026) • Why I Built This</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">From Visual Basic 6.0 in 1998 to Zero-Bloat Win32 C++20</h2>
      <p>
        Ever since I started learning Visual Basic 6.0 back in 1998, I spent 28 years searching for the right Windows
        installation tool—shipping software across more than a dozen packaging engines spanning every era of Windows
        deployment: the limited-edition setup wizard bundled in the Visual Studio 6.0 box, classic procedural script
        installers, 3D-beveled commercial suites, interactive CD-ROM multimedia autorun builders (yes, at one point I even
        tried bending an autorun menu builder into an application installer!), lightweight open-source script packagers, and
        heavyweight enterprise MSI and XML toolchains.
      </p>
      <p>
        Every Windows installer ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code>. Yet every tool I
        tried forced a painful tradeoff between multi-gigabyte IDE bloat, 32-bit legacy debt, opaque binary project files,
        steep XML boilerplate, or broken Windows 11 Dark Mode and screen-reader accessibility.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> takes everything those eras got right—plain-text diffable manifests,
        authentic relational <code>.msi</code> compliance, hierarchical tree editors, single-file <code>LZMS</code> solid
        compression, and classic-to-modern wizard ergonomics—and rebuilds it from first principles as original, MIT-licensed
        native Win32 C++20 software for <code>x64</code> and <code>ARM64</code>.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.4.2</code>)</h3>
            <ul class="feature-list">
              <li><strong>12-View Tree-First Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong>: Categorized sidebar, dedicated <strong>Features</strong> tree (<code>Move Up</code>/<code>Down</code>), <strong><code>RegEdit</code>-style Registry</strong> tree (<code>.REG</code> import + Feature filter), Dual Folder trees, and 5 guided <strong>AeroWizards</strong>—with <strong><code>Community == 100% Premier</code> parity</strong></li>
              <li><strong>100% Dark-Mode-Complete UI + Live OS Theme Hot-Swapping</strong>: Custom-subclassed push buttons, checkboxes, 32-bit ARGB vector tree icons, and RichEdit panels that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code></li>
              <li><strong>Zero-Dependency Native C++20 Help System (<code>RaggieSoftHelp.exe</code>)</strong>: Pluggable <code>module.rshm.json</code> offline manual with Contents tree, Index, Search, and Named Pipe <code>F1</code> IPC</li>
              <li><strong>Authentic MSI <code>SelectionTree</code>, Pre-MSI Runtimes &amp; Categorized <code>msiprism.exe</code></strong>: 32-bit ARGB split-icon feature tree in <code>Setup.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes, 64-bit <code>.MSM</code> merging, and <code>--emit-ai-spec</code> / <code>--emit-vpat</code></li>
            </ul>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/screenshots">Take the Visual Screenshot Tour &rarr;</a>
            <a class="btn btn-outline" href="/changelog">v0.4.2 Release Notes</a>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Focused Path to <code>v1.0.0 GA</code> (Dogfood North Star)</h3>
            <ul class="feature-list">
              <li><strong><code>v0.5.0</code> — 8 Wizard Styles &amp; WCAG-Guarded Branding</strong>: <code>Wizard95</code>, <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code> (with billboards &amp; docked 3D gauge), and <code>Autorun16x9</code> + live WCAG 2.2 AA contrast enforcer</li>
              <li><strong><code>v0.6.0</code> — Single-Download Web &amp; Offline Universal Installers + <code>.NET 11</code></strong>: CPU-aware <code>.rswpak</code> On-Demand Feature Packs, All-in-One Offline Universal Single-EXE, curated <code>.NET 11</code> presets, and <code>Engine = native</code></li>
              <li><strong><code>v0.7.0</code> &amp; <code>v0.8.0</code> — From-Scratch Dialog Builders, <code>RsDialog</code> Scripting &amp; VB6 <code>.vbp</code> / <code>.slnx</code> Importers</strong>: Blank-canvas C++ &amp; raw <code>MSI.DLL</code> dialog designers plus Reg-Free COM VB6 <code>.vbp</code> importing for classic utilities like <em>StoreTrainer</em></li>
              <li><strong><code>v0.9.0</code> &amp; <code>v1.0.0 GA</code> — Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Full Production Cutover</strong>: Azure Artifact Signing, guided <code>.MSP</code> servicing, and packaging 100% of RaggieSoft's own software</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/roadmap">Read Full v1.0 Engineering Roadmap</a>
        </article>
      </div>
    </section>
  `;
}

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.4.2) • x64 &amp; ARM64</span>
          <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
          <p class="lead">
            An original, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
            Design projects visually inside a <strong>12-View Tree-First IDE</strong>—with dedicated <strong>Features</strong> and
            <strong><code>RegEdit</code>-style Registry</strong> trees, 5 guided <strong>AeroWizards</strong>, Dual C++ &amp;
            <code>MSI.DLL</code> Dialog Designers, and a built-in C++ <code>F1</code> Help Viewer—or let coding agents compile
            comment-preserving <code>.rsip</code> manifests into real <code>.msi</code>, <code>.msm</code>, <code>.mst</code>,
            <code>.msp</code>, and WCAG 2.2 AA <code>Setup.exe</code> installers.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Technical Preview v0.4.2 (x64)</a>
            <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Native ARM64 Preview</a>
            <a class="btn btn-outline" href="/screenshots">Visual Tour &amp; Screenshots</a>
            <a class="btn btn-outline" href="/roadmap">Public Roadmap</a>
          </div>
        </div>
        <figure class="hero-box-showcase">
          <img
            src="${BOX_SHOWCASE_URL}"
            width="1200"
            height="630"
            alt="Collector's Edition boxed software render of RaggieSoft Installer Studio — Install Without Limits (Native C++20 for x64 and ARM64)."
          />
        </figure>
      </div>

      <!-- Interactive 3-Tab Split Preview Toggle (AeroWizard & Glass UI / MSI.DLL Express-Custom / Plain-Text .rsip) -->
      <div style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
        <div class="btn-row" role="tablist" aria-label="Installer Output and Source Preview">
          <button type="button" class="btn" :class="previewTab === 'aero' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'aero')" @click="previewTab = 'aero'">
            1. C++20 AeroWizard &amp; Glass UI
          </button>
          <button type="button" class="btn" :class="previewTab === 'wiz97' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'wiz97')" @click="previewTab = 'wiz97'">
            2. Native MSI.DLL Dialog Tables
          </button>
          <button type="button" class="btn" :class="previewTab === 'rsip' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'rsip')" @click="previewTab = 'rsip'">
            3. AI-Friendly .rsip v0.4 Manifest
          </button>
        </div>

        <div x-show="previewTab === 'aero'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 AeroWizard and RaggieSoft Glass SetupWizard.exe Preview">+--------------------------------------------------------------------------+
|  RAGGIESOFT  •  SAMPLE STUDIO APP SETUP                        [ - ][ x ]|
|  Choose how you would like to install Sample Studio App         [60x60]  |
+--------------------------------------------------------------------------+
|  [48x48 Bolt]    (o) Express Setup (Recommended)                         |
|                      One-click setup into default folder &amp; shortcuts     |
|  [48x48 Cube]    ( ) Compact Core Setup                                  |
|                      Essential core feature files with minimal footprint |
|  [48x48 Sliders] ( ) Custom Setup (Choose Features, Folder &amp; Shortcuts)  |
|                      Pick MSI SelectionTree features, path &amp; extensions  |
|                                                                          |
|  [Sample Studio • WCAG 2.2 AA]          [ &lt; Back ] [ &amp;Next &gt; ] [ Cancel ]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Native MSI.DLL Express vs Custom Dialog Table Preview">+--------------------------------------------------------------------------+
|  Sample Studio App Setup — Native MSI.DLL Dialog Table (370x270 DLU)     |
+--------------------------------------------------------------------------+
|  Choose Setup Mode (SetupTypeDlg -&gt; CustomizeDlg / VerifyReadyDlg)       |
|                                                                          |
|  Every compiled .msi also carries the full Express / Compact / Custom +  |
|  SelectionTree + BrowseDlg + Quick Check &amp; Repair (pecms) vs Full        |
|  Reinstall (vomus) workflow directly in relational MSI SQL tables—plus   |
|  custom [MsiDialog.*] &amp; [MsiControl.*] forms designed in the IDE!        |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip v0.4 Project Manifest Example">; Comment-preserving .rsip v0.4 manifest — survives GUI edits byte-for-byte!
[Package]
Name              = Sample Studio IDE
Version           = 1.0.0
Manufacturer      = Sample Studio
UpgradeCode       = {8F4E20A1-7C93-4D62-9B44-1029384756AB}
Architecture      = $(ARCH)
Scope             = machine

[Install]
DefaultSubdir     = Sample Studio\IDE
MainExecutable    = SampleIde.exe

[UI]
WizardLayout      = aerowizard
InstallButtonText = &amp;Install

[Prerequisite.DotNet10]
Preset            = DotNet10Desktop
Distribution      = download
RebootExitCodes   = 3010, 1641, 23

[Payload.App]
Source            = ..\publish\win-$(ARCH)\SampleIde.exe</pre>
        </div>
      </div>
    </section>

    ${renderVisionAndRoadmapSection()}

    <section aria-labelledby="matrix-heading">
      <span class="eyebrow">Core Engineering Design Principles</span>
      <h2 id="matrix-heading">The "Zero-Bloat" Architecture Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>Technical Architecture Goals for RaggieSoft Installer Studio</caption>
          <thead>
            <tr>
              <th scope="col">Design Pillar</th>
              <th scope="col">RaggieSoft Installer Studio</th>
              <th scope="col">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Toolchain Footprint</th>
              <td><strong>Compact static <code>/MT</code> binaries</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>msiprism.exe</code> &amp; <code>RaggieSoftHelp.exe</code>)</td>
              <td>Instant cold startup on local developer workstations and CI runners without multi-gigabyte framework installs.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32\\msi.dll</code>, <code>cabinet.dll</code>, <code>gdiplus.dll</code> &amp; <code>Msftedit.dll</code> only)</td>
              <td>Even the offline <code>F1</code> Help Viewer runs natively in C++20 on stock Windows 11 (<code>x64</code> &amp; <code>ARM64</code>) with zero <code>.NET</code> or <code>WebView2</code> requirements.</td>
            </tr>
            <tr>
              <th scope="row">Tree-First Visual IDE</th>
              <td><strong>12 Views + 20 32-Bit ARGB Vector Tree Icons</strong></td>
              <td>Dedicated <strong>Features</strong>, <strong><code>RegEdit</code> Registry</strong>, <strong>Dual Folder</strong>, <strong>Runtimes</strong>, and <strong>Shortcuts</strong> trees with <code>DarkMode_Explorer</code> chevrons.</td>
            </tr>
            <tr>
              <th scope="row">Windows Installer Rules</th>
              <td><strong>ICE18, ICE38, ICE64 &amp; ICE80 Enforced</strong></td>
              <td>Validates Single-Directory Component rules, <code>HKCU</code> user-profile KeyPaths, <code>CreateFolder</code>, and 64-bit component attributes before <code>msi.dll</code> runs.</td>
            </tr>
            <tr>
              <th scope="row">White-Label &amp; Parity</th>
              <td><strong><code>Community == Premier</code> + 100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Community Edition enjoys full Premier feature parity, and compiled <code>Setup.exe</code> / <code>.msi</code> files carry your publisher identity with zero watermarks.</td>
            </tr>
            <tr>
              <th scope="row">AI Agent Native</th>
              <td><strong><code>--emit-ai-spec</code> + <code>--diagnostics=json</code></strong></td>
              <td>Coding agents read deterministic <code>/llms-full.txt</code> and <code>SKILL.md</code> specs to write, lint, and compile installers from scratch.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">Five Native Binaries in One Cohesive Toolkit</span>
      <h2 id="suite-heading">Suite Spotlight: IDE, CLI Compiler, Setup Wizard, MSI Prism &amp; Help Viewer</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 12-View Tree-First IDE</h3>
            <p>
              Features a 4-category sidebar tree, dedicated <strong>Features</strong> and <strong><code>RegEdit</code> Registry</strong>
              trees (with <code>.REG</code> import), Dual Folder &amp; Contents trees, 5 guided Win32 <strong>AeroWizards</strong>,
              Dual Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/screenshots">Explore IDE Screenshots</a>
        </article>

        <article class="card card-highlight">
          <div>
            <h3><code>instbuild.exe</code> — Headless CI &amp; AI Spec Compiler</h3>
            <p>
              Sub-millisecond <code>--validate --diagnostics=json</code> linting, automated <code>--emit-vpat</code> WCAG 2.2 AA
              conformance reports, and built-in <code>--emit-ai-spec</code> generation (<code>llms.txt</code>, <code>llms-full.txt</code>,
              <code>SKILL.md</code>) emitted directly from the C++20 <code>constexpr</code> grammar.
            </p>
          </div>
          <a class="btn btn-primary" href="/llms-full.txt">View Complete /llms-full.txt</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> &amp; <code>RaggieSoftHelp.exe</code></h3>
            <p>
              Inspect relational SQL tables grouped across 5 schema categories in 64-bit Dark Mode with <strong>MSI Prism</strong>,
              and browse searchable offline HTML5 documentation in under 5ms via Named Pipe <code>F1</code> IPC inside
              <strong>RaggieSoft Help Viewer</strong>.
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Browse Distributed Manual</a>
        </article>
      </div>
    </section>
  `;
}

/**
 * Renders the `/roadmap` Public Engineering Roadmap page (`v0.1.0` -> `v1.0.0 GA` + `v1.1+`).
 */
function renderRoadmapBody(): string {
  return `
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.4.2 Shipped &rarr; v1.0.0 GA Dogfood Cutover</span>
      <h1 id="roadmap-page-title">Public Engineering Roadmap</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is built in the open as original, zero-dependency native Win32 C++20
        software for Windows 11 <code>x64</code> and <code>ARM64</code>. Our <strong><code>v1.0.0 GA</code> North Star</strong>
        is clear and practical: reaching the exact point where <strong>100% of RaggieSoft's own Windows applications, classic
        VB6 utilities (<em>StoreTrainer</em>), interactive novels, and supporter audio archives</strong> are packaged, signed,
        updated, and distributed exclusively with Installer Studio—while permanently keeping
        <strong>Community Edition at 100% technical feature parity with Premier Edition</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${GITHUB_REPO_URL}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/ROADMAP.md">Open Raw /ROADMAP.md</a>
        <a class="btn btn-outline" href="/screenshots">Visual Tour (v0.4.2)</a>
        <a class="btn btn-outline" href="/changelog">Shipped Changelog</a>
      </div>
    </section>

    <section aria-labelledby="roadmap-matrix-heading">
      <span class="eyebrow">At-a-Glance Schedule</span>
      <h2 id="roadmap-matrix-heading">Milestone Overview Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>RaggieSoft Installer Studio Milestones from Technical Preview to v1.0.0 GA and Post-1.0</caption>
          <thead>
            <tr>
              <th scope="col">Milestone</th>
              <th scope="col">Primary Focus</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>v0.1.0</code> – <code>v0.4.2</code></th>
              <td>Core C++20 compiler, 12-View Tree-First IDE (<code>Features</code> &amp; <code>RegEdit</code> <code>Registry</code> trees), MSI <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, native <code>F1</code> Help Viewer, &amp; live <code>ImmersiveColorSet</code> Dark Mode</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.5.0</code></th>
              <td>8 Wizard Styles (<code>Wizard95</code>, <code>Wizard97</code>, <code>AeroWizard</code>, <code>FluentMica</code>, <code>OneClickSplash</code>, <code>PassiveToast</code>, <code>FullScreenBlue</code> &amp; <code>Autorun16x9</code>), complete Publisher Branding (<code>.rswskin</code> + billboards), &amp; live WCAG 2.2 AA Contrast Enforcer</td>
              <td><span class="status-pill status-next">Next Up</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.6.0</code></th>
              <td>Single-Download CPU-aware Web Installer (<code>.rswpak</code> On-Demand Feature Packs), All-in-One Offline Universal Single-EXE (<code>x64 + ARM64</code>), curated <code>.NET 11</code> presets, &amp; zero-<code>msi.dll</code> <code>Engine = native</code></td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.7.0</code></th>
              <td>From-Scratch Dual Dialog Builders (C++ <code>SetupWizard.exe</code> + Raw <code>370&times;270</code> <code>MSI.DLL</code> SQL canvas) &amp; <code>RsDialog</code> (<code>Rs*()</code>) procedural dialog scripting</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.8.0</code></th>
              <td>Solution &amp; Legacy Project Importers (Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM for <em>StoreTrainer</em>, &amp; <code>.msi</code> decompiler) + Windows Restart Manager (<code>Rstrtmgr.dll</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.9.0</code></th>
              <td>First-Class Authenticode &amp; Azure Artifact Signing Studio, white-label <code>RsUpdate.exe</code> Auto-Updater, &amp; guided Microsoft-compliant <code>.MSP</code> servicing (<code>--plan-update</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.0.0 GA</code></th>
              <td>Turnkey GitHub Actions / Azure DevOps tasks, <code>--emit-winget</code>, &amp; 100% RaggieSoft production cutover across all apps, interactive books, and supporter audio archives</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v1.1+</code> (Post-1.0)</th>
              <td>Disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture, Visual Studio <code>.vsix</code>, Windows Services/Firewall/Config Patchers, in-process <code>.MSIXBUNDLE</code>, 20-lang <code>I18N</code> + RTL, &amp; <code>--emit-sbom</code></td>
              <td><span class="status-pill">Post-1.0</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div x-data="{ phaseFilter: 'all' }">
      <section aria-label="Filter Roadmap Milestones" style="margin-bottom: 1.5rem;">
        <div class="btn-row" role="group" aria-label="Show all milestones or focus on one release">
          <button type="button" class="btn" :class="phaseFilter === 'all' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'all'">All Milestones</button>
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.4.2)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v05' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v05'">v0.5 (Wizards &amp; Branding)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v06' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v06'">v0.6 (Universal &amp; .NET 11)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v07' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v07'">v0.7 (Dialog Builders)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v08' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v08'">v0.8 (.slnx &amp; VB6 .vbp)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v09' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v09'">v0.9 (Signing &amp; Updater)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v10' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v10'">v1.0 GA &amp; Post-1.0</button>
        </div>
      </section>

      <!-- Shipped Foundation -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.4.2</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>12-View Tree-First Win32 C++20 Visual IDE (<code>v0.4.2</code>)</strong>: Categorized sidebar tree, dedicated <strong>Features</strong> hierarchy with <code>Move Up</code> / <code>Move Down</code> ordering, <strong><code>RegEdit</code>-style Registry</strong> tree with <code>.REG</code> file importing and Feature filtering, Dual Destination Folder &amp; Contents trees, and a 5-category SQL schema tree in <code>msiprism.exe</code>.</li>
          <li><strong>Complete Win32 Dark Mode &amp; Live OS Palette Hot-Swapping (<code>v0.4.1</code>)</strong>: Custom-subclassed push buttons (<code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, <code>Cancel</code>), checkboxes, 32-bit ARGB vector tree icons, and ComboBoxes that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> in under 16ms.</li>
          <li><strong>Native C++20 <code>F1</code> Help Viewer, Pre-MSI Runtimes, 64-Bit <code>.MSM</code> &amp; <code>SelectionTree</code> (<code>v0.3.0</code>–<code>v0.4.0</code>)</strong>: Zero-dependency <code>RaggieSoftHelp.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching, pure 64-bit <code>.msm</code> SQL + CAB merging, and Windows <code>LZMS</code> solid compression.</li>
        </ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="/screenshots">Explore Live v0.4.2 Screenshots</a>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1.0 &rarr; v0.4.2 Changelog</a>
        </div>
      </section>

      <!-- v0.5.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v05'" aria-labelledby="phase-v05-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Target v0.5.0 • Next Up</span>
          <h2 id="phase-v05-heading" style="margin-top: 0.5rem;">8 Wizard Layout Variations, White-Label Branding Studio &amp; Live WCAG 2.2 AA Contrast Enforcer</h2>
          <ul class="feature-list">
            <li><strong>Eight First-Party Wizard Styles (<code>[UI] WizardLayout</code>)</strong>:
              <ul class="feature-list" style="margin-top: 0.35rem; margin-bottom: 0.35rem;">
                <li><strong><code>Wizard95</code></strong>: Classic 1995 desktop 3D beveled dialog sheet (<code>#C0C0C0</code> surface, etched dividers, <code>164&times;314</code> left bitmap rail, and beveled push buttons).</li>
                <li><strong><code>Wizard97</code></strong>: Classic enterprise header-banner layout with right-side emblem and bottom-right <code>&lt; Back</code> / <code>Next &gt;</code> / <code>Cancel</code> footer—modernized for Dark &amp; Light Mode.</li>
                <li><strong><code>AeroWizard</code></strong>: Command-bar layout featuring a vector GDI+ <code>30&times;30</code> circular <code>&larr;</code> Back glyph in the top-left command area.</li>
                <li><strong><code>FluentMica</code></strong>: Modern Windows 11 native backdrop via <code>DwmSetWindowAttribute(DWMWA_SYSTEMBACKDROP_TYPE, DWMSBT_MAINWINDOW / DWMSBT_TABBEDWINDOW)</code> with a unified borderless surface, left-hand vertical step-progress rail, and rounded <code>8px</code> cards.</li>
                <li><strong><code>OneClickSplash</code></strong>: Compact centered <code>~480&times;280</code> friction-free card with one primary <strong>Install</strong> button and a <em>"Customize installation..."</em> disclosure toggle.</li>
                <li><strong><code>PassiveToast</code></strong>: Clean non-interactive <code>/passive</code> &amp; <code>/qb</code> progress banner (centered or docked near the system tray) with UI Automation live-region percentage announcements.</li>
                <li><strong><code>FullScreenBlue</code></strong>: Nostalgic 1990s cobalt-blue (<code>#000080 &rarr; #000000</code>) full-screen <code>SETUP.EXE</code> wash with a drop-shadowed serif title, floating 3D beveled dialogs, <strong>optional rotating installation billboards</strong>, and a floating <strong>3D Beveled Progress Gauge</strong> (centered or docked beneath billboards—ideal for retro utilities like <em>StoreTrainer</em>) while keeping modern DPI scaling and screen-reader accessibility.</li>
                <li><strong><code>Autorun16x9</code></strong>: Widescreen <code>16:9</code> Collector's Edition &amp; digital media launcher menu.</li>
              </ul>
            </li>
            <li><strong>Non-Negotiable Windows Contrast Theme Auto-Override (<code>SPI_GETHIGHCONTRAST</code>)</strong>: Every layout automatically bypasses custom gradients, bitmaps, and Mica backdrops whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is active to paint strictly with semantic OS colors and <code>2px</code> solid borders.</li>
            <li><strong>Complete Publisher Branding &amp; Live WCAG 2.2 AA Contrast Enforcer (<code>[Branding]</code> &amp; <code>.rswskin</code>)</strong>: Customize Light &amp; Dark Mode brand colors, banners, sidebars, and billboards—backed by live W3C luminance ratios, a one-click <em>"Auto-Adjust Nearest Accessible Shade"</em> button in the IDE, and automated CI validation in <code>instbuild.exe --validate</code>.</li>
          </ul>
        </div>
      </section>

      <!-- v0.6.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v06'" aria-labelledby="phase-v06-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.6.0</span>
          <h2 id="phase-v06-heading" style="margin-top: 0.5rem;">Single-Download Universal Web &amp; Offline Installers (<code>.rswpak</code>), <code>.NET 11</code> Presets &amp; Native Direct Engine</h2>
          <ul class="feature-list">
            <li><strong>CPU-Aware Universal Web Installer via On-Demand Feature Packs (<code>.rswpak</code>)</strong>: Replace separate <code>x64</code> and <code>ARM64</code> download links with a single compact <code>Setup.exe</code> that queries <code>IsWow64Process2</code> at launch (piercing Windows 11 Prism emulation) and streams <strong>only</strong> the matching native <code>ARM64</code> or <code>x64</code> LZMS-compressed <code>.rswpak</code> pack over <code>WinHTTP</code> with SHA-256 + Authenticode verification.</li>
            <li><strong>All-in-One Offline Universal Single-EXE (<code>Architecture = universal</code>)</strong>: Emit one self-contained portable <code>Setup.exe</code> bundling <strong>both</strong> <code>x64</code> and <code>ARM64</code> LZMS payloads and prerequisites for air-gapped machines and archival preservation.</li>
            <li><strong>First-Class <code>.NET 11</code> (<code>net11.0</code> / <code>net11.0-windows</code>) Runtime Presets</strong>: Curated <code>DotNet11Desktop</code>, <code>DotNet11AspNet</code>, and <code>DotNet11Runtime</code> / <code>DotNet10Runtime</code> presets alongside <code>.NET 10.0 LTS</code>.</li>
            <li><strong>Native Direct Engine (<code>Engine = native | msi</code>)</strong>: Optional zero-<code>msi.dll</code> transactional extraction backend with rollback journaling and signed <code>Uninstall.exe</code>—installing multi-hundred-file interactive book and supporter audio packs in milliseconds.</li>
          </ul>
        </div>
      </section>

      <!-- v0.7.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v07'" aria-labelledby="phase-v07-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.7.0</span>
          <h2 id="phase-v07-heading" style="margin-top: 0.5rem;">From-Scratch Dual Dialog Builders (C++ &amp; Raw <code>MSI.DLL</code>) &amp; <code>RsDialog</code> Scripting</h2>
          <ul class="feature-list">
            <li><strong>From-Scratch C++ &amp; Raw <code>370&times;270</code> <code>MSI.DLL</code> Dialog Designers</strong>: Blank-canvas WYSIWYG editors for building custom wizard pages in both <code>SetupWizard.exe</code> (<code>[Dialog.*]</code>) and standalone <code>msiexec</code> SQL tables (<code>[MsiDialog.*]</code> / <code>[MsiControl.*]</code>).</li>
            <li><strong><code>RsDialog</code> Standard Library + <code>.rssc</code> Event Hooks</strong>: Lifecycle hooks (<code>OnBegin</code>, <code>OnBeforeInstall</code>, <code>OnAfterInstall</code>) paired with procedural <code>RsWelcome()</code>, <code>RsLicense()</code>, <code>RsSetupType()</code>, <code>RsFeatureTree()</code>, <code>RsAskDestPath()</code>, <code>RsAskText()</code>, <code>RsAskOptions()</code>, <code>RsStartCopy()</code>, and <code>RsFinish()</code> dialogs.</li>
          </ul>
        </div>
      </section>

      <!-- v0.8.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v08'" aria-labelledby="phase-v08-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.8.0</span>
          <h2 id="phase-v08-heading" style="margin-top: 0.5rem;">Solution &amp; Legacy Project Importers (<code>.slnx</code>, VB6 <code>.vbp</code> Reg-Free COM &amp; <code>.msi</code>) + Restart Manager</h2>
          <ul class="feature-list">
            <li><strong>Visual Studio <code>.slnx</code> / <code>.csproj</code> / <code>.vcxproj</code> Importer</strong>: One-click detection of <code>.NET 11</code> / <code>.NET 10 LTS</code> / <code>VC++</code> / <code>WebView2</code> prerequisites, <code>x64</code> + <code>ARM64</code> publish folders, icons, and PE versions.</li>
            <li><strong>Visual Basic 6.0 (<code>.vbp</code>) Importer with Windows 11 WRP &amp; Reg-Free COM Modes</strong>: Built for classic apps like <em>StoreTrainer</em>—parses <code>ExeName32</code>, <code>Reference=</code>, and <code>Object=*.ocx</code> lines, honors Windows 11 Resource Protection on inbox <code>SysWOW64</code> runtimes (<code>msvbvm60.dll</code>), and offers either local SP6 <code>.MSM</code> consumption or zero-elevation <strong>Reg-Free COM</strong> SxS manifests.</li>
            <li><strong><code>.msi</code> Decompiler &amp; Windows Restart Manager (<code>Rstrtmgr.dll</code>)</strong>: Import existing <code>.msi</code> databases into <code>.rsip</code> projects and gracefully close running app processes during upgrades without OS reboots.</li>
          </ul>
        </div>
      </section>

      <!-- v0.9.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v09'" aria-labelledby="phase-v09-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Target v0.9.0</span>
          <h2 id="phase-v09-heading" style="margin-top: 0.5rem;">Authenticode &amp; Azure Artifact Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Guided <code>.MSP</code> Servicing</h2>
          <ul class="feature-list">
            <li><strong>Interactive Authenticode &amp; Azure Artifact Signing Studio</strong>: Windows Certificate Store picker (<code>CryptUIDlgSelectCertificateFromStore</code>), Azure Artifact Signing (<code>dlib</code> + <code>MetadataJson</code>) tester, and one-click Dual-Layer <code>WinVerifyTrust</code> verification on both inner <code>Product.msi</code> and outer <code>Setup.exe</code>.</li>
            <li><strong>Royalty-Free White-Label Auto-Updater (<code>RsUpdate.exe</code>) &amp; Guided <code>.MSP</code> Servicing (<code>--plan-update</code>)</strong>: Publisher-branded HTTPS updater unlocked across all editions plus automated Microsoft Component servicing lint rules for binary-delta <code>.msp</code> patches and Major Upgrades.</li>
          </ul>
        </div>
      </section>

      <!-- v1.0.0 GA & Post-1.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v10'" aria-labelledby="phase-v10-heading" class="card">
        <div>
          <span class="status-pill">Target v1.0.0 GA &amp; v1.1+</span>
          <h2 id="phase-v10-heading" style="margin-top: 0.5rem;"><code>v1.0.0 GA</code> Production Dogfood Cutover &amp; Post-1.0 Enterprise Expansion</h2>
          <ul class="feature-list">
            <li><strong><code>v1.0.0 GA</code> — Turnkey CI/CD, <code>--emit-winget</code> &amp; 100% RaggieSoft Cutover</strong>: First-party GitHub Actions / Azure DevOps tasks, <code>winget-pkgs</code> YAML export, and complete signed install, upgrade, repair, silent (<code>/s</code>), and uninstall validation across every RaggieSoft desktop app, interactive book, and supporter audio archive on clean Windows 11 <code>x64</code> and <code>ARM64</code> PCs.</li>
            <li><strong><code>v1.1+</code> Post-1.0 Expansion</strong>: One-click disposable Windows 11 Pro Sandbox (<code>.wsb</code>) Setup Capture ("Repackager"), Visual Studio <code>.vsix</code> extension, declarative Windows Services / Firewall / JSON-XML-INI Config Patchers, in-process <code>.MSIXBUNDLE</code> (<code>AppxPackaging.dll</code>), 20+ language <code>I18N</code> + RTL mirroring, and SPDX / CycloneDX <code>--emit-sbom</code> reports.</li>
          </ul>
        </div>
      </section>
    </div>
  `;
}

/**
 * Renders the `/changelog` Version History page (`v0.1.0` -> `v0.4.2`).
 */
function renderChangelogBody(): string {
  return `
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Latest v0.4.2 (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Latest v0.4.2 (ARM64)</a>
        <a class="btn btn-outline" href="/screenshots">Inspect v0.4.2 Screenshots</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">View Commits on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="v042-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v042-heading" style="margin-top: 0.25rem;">v0.4.2 — 12-View Tree-First Visual IDE, Features &amp; RegEdit Registry Trees, Categorized MSI Prism &amp; Inspector Fixes</h2>
      <ul class="feature-list">
        <li><strong>32-Bit ARGB Vector Tree Engine (<code>StudioTreeIcon</code> + <code>ApplyDarkTreeViewTheme</code>)</strong>: Replaced flat <code>LISTBOX</code> and <code>SysListView32</code> overuse across <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 20 anti-aliased premultiplied ARGB vector icons and Windows 11 <code>DarkMode_Explorer</code> / <code>Explorer</code> chevrons.</li>
        <li><strong>Categorized 12-View Sidebar &amp; New Dedicated <code>Features</code> View</strong>: Grouped IDE navigation under <em>Application Information</em>, <em>Setup Architecture</em>, <em>User Interface</em>, and <em>Deployment &amp; Source</em>, and added a dedicated <code>All Features</code> hierarchy view with <code>Move Up</code> / <code>Move Down</code> AST reordering, <code>+ New Feature</code>, <code>+ Sub-Feature</code>, <code>DisallowAbsent</code> core locks, and live <code>Feature Description</code> editing.</li>
        <li><strong>New <code>RegEdit</code>-Style <code>Registry</code> View + <code>.REG</code> File Importer</strong>: Added nested hive/subkey folder navigation across <code>HKEY_CLASSES_ROOT</code>, <code>HKEY_CURRENT_USER</code>, <code>HKEY_LOCAL_MACHINE</code>, <code>HKEY_USERS</code> (<code>HKU</code>), and <code>HKEY_USER_MACHINE_DEFAULT</code> (<code>HKMU</code>) paired with a typed right-hand values tree, per-Feature filtering, and UTF-8 / UTF-16LE <code>.reg</code> script importing.</li>
        <li><strong>Dual-Tree <code>Files &amp; Folders</code>, <code>Shortcuts</code> Tree, Live Component Inspector &amp; Categorized <code>msiprism.exe</code></strong>: Upgraded Destination Contents, Application Runtimes &amp; <code>.MSM</code>, File Associations, and Shortcuts (<code>Start Menu</code> &amp; <code>Desktop</code>) to hierarchical trees, wired live <code>TVN_SELCHANGEDW</code> Component inspection in <code>Components &amp; KeyPaths</code>, and organized <code>msiprism.exe</code> SQL tables into 5 logical schema categories.</li>
      </ul>
    </section>

    <section aria-labelledby="v041-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v041-heading" style="margin-top: 0.25rem;">v0.4.1 — Dark-Mode Push Buttons &amp; Live OS Theme Hot-Swapping</h2>
        <ul class="feature-list">
          <li><strong>Dark-Mode-Aware Accessible Push Buttons (<code>AttachAccessiblePushButtonSubclass</code>)</strong>: Replaced stock <code>ComCtl32 v6</code> light-mode white push buttons across <code>SetupWizard.exe</code> (<code>&lt; Back</code>, <code>Next &gt;</code>, <code>Cancel</code>), <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 100% public-API <code>SetWindowSubclass</code> + GDI+ vector buttons while keeping native UI Automation <code>Button</code> roles and <code>Alt+Key</code> mnemonics intact.</li>
          <li><strong>Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Palette Hot-Swapping</strong>: All four Win32 GUI binaries listen for live Windows 11 Light &harr; Dark Mode and Contrast Theme broadcasts, flipping DWM frames, cards, buttons, checkboxes, headers, dropdowns, and RichEdit typography in <code>&lt; 16ms</code> without restarting.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v040-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
      <span class="release-badge">Milestone • November 2026</span>
      <h2 id="v040-heading" style="margin-top: 0.25rem;">v0.4.0 — Native C++20 Help System, Dark-Mode UI Subclasses &amp; AI Blueprints</h2>
      <ul class="feature-list">
        <li><strong>New <code>RaggieSoftHelp.exe</code> Native C++20 Help Viewer</strong>: Converted RaggieSoft's modular <code>.rshm.json</code> documentation viewer into a 100% static <code>/MT</code> Win32 C++20 binary (zero <code>.NET</code> and zero <code>WebView2</code> dependencies!) featuring Contents, Index, full-text Search, in-process HTML5-to-RTF typography (<code>Msftedit.dll</code>), and single-instance Named Pipe <code>F1</code> IPC.</li>
        <li><strong>Bundled <code>raggiesoft.installer-studio</code> Offline Help Module</strong>: Shipped 8 comprehensive offline HTML5 chapters wired directly to <code>F1</code> across the IDE and mirrored 1:1 to <a href="/docs">/docs</a>.</li>
        <li><strong>Global Win32 Dark Mode Checkbox &amp; ListView Header Subclasses</strong>: Added <code>AttachAccessibleCheckboxSubclass</code> and <code>AttachDarkAwareListViewSubclass</code> in <code>RswGlassRenderer.hpp</code> so checkboxes and <code>SysListView32</code> column headers maintain <code>&ge; 15.8:1</code> WCAG AAA contrast across Dark, Light, and High Contrast modes.</li>
        <li><strong>Expanded From-Scratch AI Agent Blueprints &amp; Screenshot Exporter</strong>: Upgraded <code>instbuild.exe --emit-ai-spec</code> (<code>/llms.txt</code>, <code>/llms-full.txt</code>, <code>/SKILL.md</code>) and added <code>--export-screenshots</code> across GUI tools.</li>
      </ul>
      </div>
    </section>

    <section aria-labelledby="v030-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v030-heading" style="margin-top: 0.25rem;">v0.3.0 — Editions Parity, LZMS Compression, Pre-MSI Runtimes, .MSM &amp; SelectionTree</h2>
        <ul class="feature-list">
          <li><strong>IDE Editions (<code>Community == Premier</code>)</strong>: Defined <code>Community</code>, <code>Express</code>, <code>Professional</code>, and <code>Premier</code> tiers with <code>Community</code> permanently maintaining 100% feature parity with <code>Premier</code>.</li>
          <li><strong>Windows <code>LZMS</code> Solid Compression</strong>: Integrated <code>COMPRESS_ALGORITHM_LZMS</code> (<code>Cabinet.lib</code>) to shrink embedded <code>Product.msi</code> and offline runtime payloads inside <code>Setup.exe</code>.</li>
          <li><strong>Unlimited Pre-MSI <code>[Prerequisite.*]</code> Runtime Broker &amp; 64-Bit <code>.MSM</code> Merger</strong>: Added curated and custom runtime execution before <code>msiexec</code> under one UAC prompt plus native 64-bit SQL + CAB Merge Module consumption.</li>
          <li><strong>Authentic Windows Installer <code>SelectionTree</code> &amp; Clean Status Formatting</strong>: Added 32-bit ARGB split-dropdown feature icons, live byte-cost cards, <code>DisallowAbsent</code> core locks, and <code>MsiFormatRecordW</code> status formatting.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v021-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Bugfix &amp; Polish • November 2026</span>
        <h2 id="v021-heading" style="margin-top: 0.25rem;">v0.2.1 — Real-World Setup Fixes, Dark Mode Checkboxes &amp; UAC Elevation Broker</h2>
        <ul class="feature-list">
          <li>Added Dark Mode checkbox subclassing in <code>SetupWizard.exe</code>, bottom-right footer navigation, persistent <code>Signature</code> / <code>AppSearch</code> locator SQL tables, and seamless <code>asInvoker</code> &rarr; <code>--elevated-msi-worker</code> UAC elevation.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v020-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Feature Milestone • November 2026</span>
        <h2 id="v020-heading" style="margin-top: 0.25rem;">v0.2.0 — Destination Computer Tree, Component Rules &amp; Dual Dialog Designers</h2>
        <ul class="feature-list">
          <li>Added the Destination Computer folder tree, Microsoft Component Rule validation (<code>ICE18</code>, <code>ICE38</code>, <code>ICE64</code>, <code>ICE80</code>), File Associations &amp; Shell Verbs, guided Win32 AeroWizards, and the <code>370&times;270</code> <code>MSI.DLL</code> SQL Dialog Designer.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v010-heading" class="card">
      <div>
        <span class="release-badge">Initial Preview • November 2026</span>
        <h2 id="v010-heading" style="margin-top: 0.25rem;">v0.1.0 — Zero-Dependency Win32 C++20 Toolchain Foundation</h2>
        <ul class="feature-list">
          <li>Initial <code>x64</code> + <code>ARM64</code> static <code>/MT</code> release of <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>insttests.exe</code> with deterministic SHA-1 UUIDv5 GUIDs, <code>RtlGetVersion</code> + <code>IsWow64Process2</code> detection, <code>.rsip</code>/<code>.rsis</code>/<code>.rsii</code> lossless AST, <code>--emit-ai-spec</code>, and <code>--emit-vpat</code>.</li>
        </ul>
      </div>
    </section>
  `;
}

function renderVpatBody(): string {
  return `
    <section class="hero" aria-labelledby="vpat-title">
      <span class="eyebrow">WCAG 2.2 Level AA • ADA Title II • Revised Section 508</span>
      <h1 id="vpat-title">Accessibility &amp; VPAT 2.5 Engineering</h1>
      <p class="lead">
        Accessibility shouldn't start only after an app is installed—users relying on screen readers, keyboard navigation,
        or Windows Contrast Themes have to get through the installer first. RaggieSoft Installer Studio engineers WCAG 2.2 AA
        and Revised Section 508 conformance directly into <code>SetupWizard.exe</code>, <code>InstallerStudio.exe</code>,
        <code>RaggieSoftHelp.exe</code>, and <code>instbuild.exe</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${LIVE_VPAT_URL}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="/screenshots">View Dark &amp; Light Mode Captures</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">Inspect C++20 Accessibility Source</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">How Our Native Win32 Suite Guarantees Accessibility &amp; Dark Mode Contrast</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>Full-Card Subclassed <code>BS_AUTORADIOBUTTON</code> Targets</h3>
            <p>
              Instead of tiny unlabeled radio dots paired with non-focusable graphic labels, every setup option card is a true
              Win32 <code>BS_AUTORADIOBUTTON</code> (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) exposing native UI Automation
              <code>RadioButton</code> roles and full descriptions to Narrator, NVDA, and JAWS.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Dark-Mode Buttons, Checkboxes, Trees &amp; Headers</h3>
            <p>
              Shared Win32 subclasses and 32-bit PARGB <code>StudioTreeIcon</code> image lists override stock light-only
              controls so every push button, checkbox, <code>SysTreeView32</code> node, report column header, and focus ring
              maintains high WCAG contrast across Dark and Light modes.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using pure OS <code>GetSysColor</code> tokens, themes RichEdit license &amp;
              offline help articles for <code>&ge; 15:1</code> contrast, and scales cleanly with Windows 11's <code>TextScaleFactor</code>.
            </p>
          </div>
        </article>
      </div>

      <div class="table-wrap">
        <table>
          <caption>Automated --emit-vpat Contrast &amp; Section 508 Verification Matrix</caption>
          <thead>
            <tr>
              <th scope="col">Audit Criterion</th>
              <th scope="col">Measured Runtime Behavior</th>
              <th scope="col">Standard</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Header Banner &amp; ListView Column Headers (<code>#F8FAFC</code> on <code>#0B132B</code>)</th>
              <td>17.4:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3 / 1.4.6</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Dark Mode Surface, TreeView &amp; Checkbox Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
              <td>16.9:1 relative luminance ratio + Mica frame</td>
              <td>WCAG 2.2 SC 1.4.3</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Light Mode Surface Text (<code>#0F172A</code> on <code>#F4F7FB</code>)</th>
              <td>16.1:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Forced High Contrast Themes (<code>SPI_GETHIGHCONTRAST</code>)</th>
              <td>Switches decorative gradients to <code>COLOR_WINDOW</code> / <code>COLOR_WINDOWTEXT</code> / <code>COLOR_HIGHLIGHT</code></td>
              <td>WCAG 2.2 SC 1.4.11 &amp; Section 508 502.2</td>
              <td><strong>Supports</strong></td>
            </tr>
            <tr>
              <th scope="row">Automated Per-Product ACR Generation</th>
              <td><code>instbuild.exe --emit-vpat &lt;project.rsip&gt; &lt;out-dir&gt;</code> emits product-specific HTML5 VPAT 2.5</td>
              <td>ADA Title II &amp; Revised Section 508</td>
              <td><strong>Built Into CLI &amp; IDE</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderDocsBody(): string {
  return `
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Single-Source Offline &amp; Web Manual • Schema v0.4</span>
      <h1 id="docs-title">User Guide, .rsip Reference &amp; AI Specifications</h1>
      <p class="lead">
        Every chapter below is compiled from the <strong>exact same HTML5 documentation module</strong>
        (<code>help/raggiesoft.installer-studio/</code>) distributed inside RaggieSoft Installer Studio and displayed offline
        by <code>RaggieSoftHelp.exe</code> whenever you press <code>F1</code> in the IDE—alongside our machine-readable
        <a href="/llms-full.txt">/llms-full.txt</a> and <a href="/SKILL.md">SKILL.md</a> coding-agent specs.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/docs/welcome-overview">Start Reading Chapter 1 &rarr;</a>
        <a class="btn btn-outline" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="/SKILL.md">Download AI SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="manual-chapters-heading">
      <span class="eyebrow">Official Distributed Help Module (8 Chapters)</span>
      <h2 id="manual-chapters-heading">Browse Documentation Chapters</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <span class="eyebrow">Chapter 1 • Getting Started</span>
            <h3><a href="/docs/welcome-overview" style="color: inherit; text-decoration: none;">Overview, Editions &amp; Hybrid .rsip Architecture</a></h3>
            <p>Meet the 5 static <code>/MT</code> C++20 executables, the <code>Community == Premier</code> parity pledge, and <code>.rsip</code> / <code>.rsis</code> / <code>.rsii</code> manifests.</p>
          </div>
          <a class="btn btn-outline" href="/docs/welcome-overview">Read Chapter 1</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 2 • Visual IDE &amp; Wizards</span>
            <h3><a href="/docs/ide-and-aerowizards" style="color: inherit; text-decoration: none;">Tree-First Visual IDE &amp; 5 Guided AeroWizards</a></h3>
            <p>Tour the categorized views of <code>InstallerStudio.exe</code>, the 5 native Win32 AeroWizards, Features &amp; Registry trees, File Associations, and lossless AST saving.</p>
          </div>
          <a class="btn btn-outline" href="/docs/ide-and-aerowizards">Read Chapter 2</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 3 • Windows Installer Engine</span>
            <h3><a href="/docs/components-and-keypaths" style="color: inherit; text-decoration: none;">Destination Folders, Components &amp; KeyPath Rules</a></h3>
            <p>Enforce Microsoft Single-Directory (<code>RSW031</code>), <code>ICE38</code> HKCU User-Profile KeyPaths (<code>RSW032</code>), and <code>ICE18</code> <code>CreateFolder</code> rules.</p>
          </div>
          <a class="btn btn-outline" href="/docs/components-and-keypaths">Read Chapter 3</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 4 • Windows Installer Engine</span>
            <h3><a href="/docs/runtimes-and-merge-modules" style="color: inherit; text-decoration: none;">Pre-MSI Runtime Prerequisites &amp; .MSM Merge Modules</a></h3>
            <p>Distribute <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes via <code>WinHTTP</code> download, <code>LZMS</code> embed, or <code>Redist\\</code> plus 64-bit <code>.MSM</code> merging.</p>
          </div>
          <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules">Read Chapter 4</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 5 • Wizard UI &amp; Dialogs</span>
            <h3><a href="/docs/selection-tree-and-dialogs" style="color: inherit; text-decoration: none;">MSI SelectionTree, C++ Glass Wizard &amp; MSI.DLL Dialogs</a></h3>
            <p>Customize <code>SetupWizard.exe</code>, the authentic 32-bit ARGB MSI <code>SelectionTree</code>, and <code>370&times;270</code> <code>MSI.DLL</code> SQL dialogs.</p>
          </div>
          <a class="btn btn-outline" href="/docs/selection-tree-and-dialogs">Read Chapter 5</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 6 • CLI &amp; AI Automation</span>
            <h3><a href="/docs/cli-and-ai-agents" style="color: inherit; text-decoration: none;">Headless CLI (instbuild.exe) &amp; AI Agent Authoring</a></h3>
            <p>Compile <code>x64</code> and <code>ARM64</code> packages in CI/CD, validate with JSON diagnostics, and generate from-scratch projects with coding agents.</p>
          </div>
          <a class="btn btn-outline" href="/docs/cli-and-ai-agents">Read Chapter 6</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 7 • Compliance &amp; Security</span>
            <h3><a href="/docs/accessibility-and-vpat" style="color: inherit; text-decoration: none;">WCAG 2.2 AA Accessibility, Dark Mode &amp; VPAT 2.5</a></h3>
            <p>UI Automation roles, High Contrast themes, Dark Mode button/checkbox/header subclasses, and automated HTML5 VPAT 2.5 exports.</p>
          </div>
          <a class="btn btn-outline" href="/docs/accessibility-and-vpat">Read Chapter 7</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Chapter 8 • Compliance &amp; Security</span>
            <h3><a href="/docs/msiprism-and-patches" style="color: inherit; text-decoration: none;">MSI Prism SQL Inspector, Signing, .MST &amp; .MSP</a></h3>
            <p>Inspect <code>.msi</code>/<code>.msm</code>/<code>.msp</code> relational tables in <code>msiprism.exe</code>, apply Dual-Layer Authenticode signing, and emit <code>.mst</code>/<code>.msp</code> deltas.</p>
          </div>
          <a class="btn btn-outline" href="/docs/msiprism-and-patches">Read Chapter 8</a>
        </article>
      </div>
    </section>

    <section class="calc-panel" aria-labelledby="quick-index-heading">
      <span class="eyebrow">Direct Topic Anchors (Synced with module.rshm.json)</span>
      <h2 id="quick-index-heading" style="margin-top: 0.25rem;">Quick Keyword Index</h2>
      <div class="btn-row">
        <a class="btn btn-outline" href="/docs/welcome-overview#editions">Community == Premier Parity</a>
        <a class="btn btn-outline" href="/docs/components-and-keypaths#component-rules">ICE18 &amp; ICE38 Component Rules</a>
        <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules#prerequisites">[Prerequisite.*] Pre-MSI Runtimes</a>
        <a class="btn btn-outline" href="/docs/runtimes-and-merge-modules#mergemodules">[MergeModule.*] (.MSM)</a>
        <a class="btn btn-outline" href="/docs/selection-tree-and-dialogs#selection-tree">MSI SelectionTree</a>
        <a class="btn btn-outline" href="/docs/cli-and-ai-agents#ai-specs">llms.txt &amp; SKILL.md</a>
        <a class="btn btn-outline" href="/docs/accessibility-and-vpat#vpat-export">VPAT 2.5 Export</a>
        <a class="btn btn-outline" href="/docs/msiprism-and-patches#msiprism">MSI Prism Inspector</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.4 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Feature, Registry, Prerequisite, MergeModule, Component, MsiDialog..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Complete .rsip v0.4 Project, .rsis Suite &amp; .rsii Include Sections</caption>
          <thead>
            <tr>
              <th scope="col">Section / Directive</th>
              <th scope="col">File Type</th>
              <th scope="col">Key Fields &amp; Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="!q || 'include rsii shared template dialog'.includes(q.toLowerCase())">
              <th scope="row"><code>@include "file.rsii"</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>Inherits shared dialog workflows, <code>[Requirements]</code>, or <code>[Signing]</code> blocks without losing comments on IDE save.</td>
            </tr>
            <tr x-show="!q || 'package name version upgradecode msi msm'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code> &amp; <code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, 3-part <code>Version</code>, <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code>, <code>DefaultSubdir</code>, <code>MainExecutable</code>.</td>
            </tr>
            <tr x-show="!q || 'feature parent subfeature level disallowabsent selectiontree'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, <code>Level</code>, <code>Parent</code> hierarchy, <code>DisallowAbsent</code> core lock, and <code>AllowAdvertise</code> for the MSI <code>SelectionTree</code>.</td>
            </tr>
            <tr x-show="!q || 'registry hklm hkcu hkcr hku hkmu dword reg'.includes(q.toLowerCase())">
              <th scope="row"><code>[Registry.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Root</code> (<code>HKLM|HKCU|HKCR|HKU|HKMU</code>), <code>Key</code>, <code>Name</code>, <code>Type</code> (<code>string|expand_string|dword</code>), <code>Value</code>, <code>Feature</code>, and optional <code>Component</code>.</td>
            </tr>
            <tr x-show="!q || 'prerequisite runtime dotnet webview2 vcredist reboot lzms'.includes(q.toLowerCase())">
              <th scope="row"><code>[Prerequisite.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Preset</code> (<code>DotNet10Desktop</code>, <code>EdgeWebView2</code>, <code>VcRedist2022</code>, <code>Custom</code>), <code>Distribution</code> (<code>download|embedded|side-by-side</code>), and <code>RebootExitCodes</code>.</td>
            </tr>
            <tr x-show="!q || 'mergemodule msm shared library cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[MergeModule.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Merges 64-bit <code>.msm</code> SQL tables and CAB payloads into <code>TargetRoot</code> / <code>Feature</code> using native C++20 <code>msi.dll</code> + <code>Cabinet.lib</code> FDI.</td>
            </tr>
            <tr x-show="!q || 'component keypath keyfile ice18 ice38 permanent'.includes(q.toLowerCase())">
              <th scope="row"><code>[Component.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Enforces Microsoft Component Rules: single <code>TargetRoot</code>/<code>TargetSubdir</code>, <code>KeyPathKind</code> (<code>auto|file|registry|folder</code>), <code>KeyPathTarget</code>, <code>Permanent</code>, <code>NeverOverwrite</code>.</td>
            </tr>
            <tr x-show="!q || 'folder createfolder removefolder ice64'.includes(q.toLowerCase())">
              <th scope="row"><code>[Folder.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td>Creates destination subdirectories under any of 9 standard MSI roots via <code>CreateFolder</code> + automatic ICE64 <code>RemoveFolder</code> cleanup.</td>
            </tr>
            <tr x-show="!q || 'payload source targetroot cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[Payload.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (1+ Required)</td>
              <td><code>Source</code> (supports <code>$(ARCH)</code>), <code>TargetRoot</code>, <code>TargetSubdir</code>, optional explicit <code>Component</code> (or automatic 1-file UUIDv5 Component).</td>
            </tr>
            <tr x-show="!q || 'fileassociation extension progid verb mime icon'.includes(q.toLowerCase())">
              <th scope="row"><code>[FileAssociation.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Extension</code>, <code>ProgId</code>, <code>Description</code>, <code>TargetFile</code>, <code>Verbs</code>, <code>ContentType</code>, and <code>Advertise</code> (<code>false</code> = clean <code>HKMU\\Software\\Classes</code>; <code>true</code> = MSI SQL tables).</td>
            </tr>
            <tr x-show="!q || 'shortcut startmenu desktop lnk'.includes(q.toLowerCase())">
              <th scope="row"><code>[Shortcut.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Name</code>, <code>TargetFile</code>, <code>Location</code> (<code>StartMenu|Desktop</code>), <code>Arguments</code>, and <code>Feature</code> with automatic <code>ICE38</code> KeyPaths.</td>
            </tr>
            <tr x-show="!q || 'ui aerowizard glass wizardlayout msidialogpreset'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code>, <code>[MsiDialog.*]</code> &amp; <code>[MsiControl.*]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td><code>WizardLayout</code> (<code>standard|aerowizard|autorun16x9</code>), <code>MsiDialogPreset</code> (<code>express_custom|minimal</code>), plus custom <code>370&times;270</code> SQL dialogs spliced into <code>msiexec</code>!</td>
            </tr>
            <tr x-show="!q || 'suite project buildorder rsis slnx'.includes(q.toLowerCase())">
              <th scope="row"><code>[Suite]</code> &amp; <code>[Project.&lt;Id&gt;]</code></th>
              <td><code>.rsis</code> Suite</td>
              <td>Groups multiple <code>.rsip</code> projects with <code>[Variable]</code> tokens, <code>Category</code> filters, and ordered <code>BuildOrder</code> execution.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="ci-heading">
      <h2 id="ci-heading">GitHub Actions &amp; AI Agent CLI Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite &amp; Microsoft Component Rules (JSON)
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --validate --diagnostics=json
      - name: Compile .MSI, LZMS Setup.exe &amp; VPAT 2.5 HTML5 Report
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --with-vpat</pre>
    </section>
  `;
}

function renderSecurityBody(): string {
  return `
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">Static /MT C++20 • Minimal SBOM • Air-Gap Friendly</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled directly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound IDE
        telemetry, and zero cryptocurrency/blockchain code.
      </p>
    </section>

    <section aria-labelledby="sec-pillars">
      <h2 id="sec-pillars">Four Pillars of Clean Engineering</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>1. Static <code>/MT</code> Compilation &amp; Minimal SBOM</h3>
            <p>
              No NuGet dependency graph, no npm runtime, no Electron Chromium bundle, and no external DLLs—even
              <code>RaggieSoftHelp.exe</code> renders offline topics natively via <code>System32\\Msftedit.dll</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>2. Dual-Layer Authenticode Code Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code>, <code>instbuild.exe</code> signs the inner <code>Product.msi</code> first, embeds the signed
              database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—supporting both local certificate thumbprints and Azure Artifact Signing.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>3. Prism-Piercing OS &amp; Silicon Verification</h3>
            <p>
              Calls <code>RtlGetVersion</code> inside <code>ntdll.dll</code> (bypassing <code>GetVersionEx</code> manifest shims) and <code>IsWow64Process2</code>
              to detect true ARM64 vs. x64 silicon even under Windows 11 Prism emulation.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>4. Permanent Zero-Telemetry &amp; Zero-Crypto Pledge</h3>
            <p>
              Neither <code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>msiprism.exe</code>, nor <code>RaggieSoftHelp.exe</code> phones home
              to a license server or bundles cryptocurrency payment SDKs.
            </p>
          </div>
        </article>
      </div>
    </section>
  `;
}

export const STUDIO_ROUTES: readonly StudioRoute[] = [
  {
    path: '/',
    navLabel: 'Overview',
    seoTitle: 'RaggieSoft Installer Studio — v0.4.2 Technical Preview',
    seoDescription:
      'Zero-dependency Win32 C++20 Windows installer IDE, MSI compiler, SelectionTree wizard, and offline Help Viewer for x64 and ARM64.',
    renderBody: renderHomeBody
  },
  {
    path: '/screenshots',
    navLabel: 'Visual Tour',
    seoTitle: 'Visual Tour & Screenshots | RaggieSoft Installer Studio',
    seoDescription:
      'Explore full-size Windows 11 screenshots of RaggieSoft Installer Studio v0.4.2: Features & Registry trees, SetupWizard Dark/Light Mode, and MSI Prism.',
    renderBody: renderScreenshotsBody
  },
  {
    path: '/roadmap',
    navLabel: 'Roadmap',
    seoTitle: 'Public Engineering Roadmap | RaggieSoft Installer Studio',
    seoDescription:
      'Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.4.2 through v1.0 GA across Windows 11 x64 and ARM64.',
    renderBody: renderRoadmapBody
  },
  {
    path: '/docs',
    navLabel: 'Docs & AI Spec',
    seoTitle: 'Documentation & .rsip v0.4 Spec | Installer Studio',
    seoDescription:
      'Searchable .rsip v0.4 project and .rsis suite reference covering Features, Registry, Prerequisites, Merge Modules, Components, and AI /llms.txt specs.',
    renderBody: renderDocsBody
  },
  {
    path: '/changelog',
    navLabel: 'Version History',
    seoTitle: 'Version History & Changelog (v0.4.2) | Installer Studio',
    seoDescription:
      'Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.4.2 across Windows 11 x64 and ARM64.',
    renderBody: renderChangelogBody
  },
  {
    path: '/vpat',
    navLabel: 'Accessibility & VPAT',
    seoTitle: 'WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio',
    seoDescription:
      'Inspect how SetupWizard.exe, InstallerStudio.exe, and RaggieSoftHelp.exe deliver UI Automation, Dark Mode contrast, and VPAT 2.5 reports.',
    renderBody: renderVpatBody
  },
  {
    path: '/accessibility',
    seoTitle: 'Accessible Windows Installer Architecture | RaggieSoft',
    seoDescription:
      'Native Win32 UI Automation, NVDA/JAWS/Narrator progress, High Contrast themes, and automated --emit-vpat reports in RaggieSoft Installer Studio.',
    renderBody: renderVpatBody
  },
  {
    path: '/security',
    navLabel: 'Security',
    seoTitle: 'Security, Static /MT C++20 & Signing | Installer Studio',
    seoDescription:
      'Static /MT Win32 C++20 compilation, dual-layer Authenticode signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.',
    renderBody: renderSecurityBody
  }
];

/**
 * Renders the complete shell (Header + `<main id="main-content">` + Global Footer with Fictitious Disclaimer)
 * for any canonical route or `/404.html`.
 */
export function renderStudioPage(routePath: string, customMainInnerHtml?: string): { html: string } {
  const match = STUDIO_ROUTES.find((r) => r.path === routePath);
  const activeNavPath = routePath.startsWith('/docs/') ? '/docs' : routePath;
  const navItems = STUDIO_ROUTES.filter((r) => Boolean(r.navLabel))
    .map((r) => {
      const current = r.path === activeNavPath ? ' aria-current="page"' : '';
      return `<li><a class="nav-link" href="${r.path}"${current}>${r.navLabel}</a></li>`;
    })
    .join('');

  const mainInner = customMainInnerHtml
    ? customMainInnerHtml
    : match
      ? match.renderBody()
      : `
        <section class="hero" aria-labelledby="err-title">
          <span class="eyebrow">HTTP 404 • Route Not Found</span>
          <h1 id="err-title">Page Not Found</h1>
          <p class="lead">The requested RaggieSoft Installer Studio documentation or preview route could not be found.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="/">Return to Project Overview</a>
            <a class="btn btn-outline" href="/screenshots">Explore Visual Tour</a>
            <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
          </div>
        </section>
      `;

  const html = `
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.4.2)</span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle studio-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open Installer Studio and RaggieSoft network menu"
          data-close-label="Close Installer Studio and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open Installer Studio and RaggieSoft network menu"
        >
          <svg class="rs-icon-bars" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg class="rs-icon-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true" focusable="false">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div id="header-navigation-panel" class="header-nav-panel" data-rs-collapsible="true">
          <nav aria-label="Primary Project Navigation">
            <ul class="nav-list">
              ${navItems}
              <li><a class="nav-link" href="${GITHUB_REPO_URL}">GitHub</a></li>
              <li><a class="nav-link" href="https://raggiesoft.dev">raggiesoft.dev</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${mainInner}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Overview</a>
          <a href="/screenshots">Visual Tour &amp; Screenshots</a>
          <a href="/roadmap">Public Roadmap</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/changelog">Version History (v0.4.2)</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
          <a href="/ROADMAP.md">/ROADMAP.md</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="${GITHUB_REPO_URL}">GitHub Repository</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Open-source Technical Preview licensed under the MIT License.
          Feedback &amp; engineering inquiries: <a href="mailto:hello@michaelpragsdale.com">hello@michaelpragsdale.com</a>.
        </p>
        <p class="disclaimer-box">${FICTITIOUS_DISCLAIMER}</p>
      </div>
    </footer>
  `;

  return { html };
}
