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
 *     **RaggieSoft Studio** (`https://raggiesoftstudio.com` — 301 target of
 *     `installwithoutlimits.com` and `a11y.raggiesoft.com`), the umbrella Windows
 *     developer, packaging & accessibility compliance suite housing
 *     **RaggieSoft Installer Studio (`v0.5.0`)**,
 *     **RaggieSoft Accessibility Studio (`v1.0.0`, mounted at `/accessibility-studio`)**,
 *     **RaggieSoft Launcher Studio**, and **RaggieSoft Showcase Studio**:
 *       1. `/`              — RaggieSoft Studio Umbrella Hub, Flagship Installer
 *                             Studio v0.5.0 Downloads, 10 Wizard Styles, & Suite Lineup
 *       2. `/suite`         — Dedicated RaggieSoft Studio Product Family Overview
 *                             (Installer Studio, Accessibility Studio, Launcher Studio,
 *                             & Showcase Studio)
 *       3. `/screenshots`   — Dedicated Visual Feature Tour with 14 real native
 *                             Win32 C++20 captures & full-size HTML5 `<dialog>` modals
 *       4. `/roadmap`       — Focused `v1.0.0 GA` Dogfood Engineering Roadmap
 *                             (incl. Disk Spanning, Loose Media, `msiexec /a`, & Suites)
 *       5. `/docs`          — Single-source offline & web manual + AI `/llms.txt`
 *       6. `/faq`           — Frequently Asked Questions (Microsoft Azure Artifact
 *                             Signing, Why No IA-64 or x86 Host Builds, Setup
 *                             Types vs. InstallLevel, & Community == Premier)
 *       7. `/changelog`     — Public Version History (`v0.1.0` -> `v0.5.0`)
 *       8. `/vpat`          — Accessibility & Compliance Center (WCAG 2.2 AA,
 *                             ADA Title II & Section 508 + Live VPAT 2.5 HTML5)
 *       9. `/accessibility` — Canonical alias view for `/vpat`
 *      10. `/security`      — Static `/MT` SBOM posture, Dual-Layer Authenticode
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
const DOWNLOAD_WEB_SETUP_URL = `${ASSET_BASE}/raggiesoft-installer-studio-setup.exe`;
const DOWNLOAD_OFFLINE_UNIV_URL = `${ASSET_BASE}/raggiesoft-installer-studio-offline-setup.exe`;
const A11Y_STUDIO_WEB_SETUP_URL =
  'https://assets.raggiesoft.com/desktop-apps/windows/apps/accessibility-studio/raggiesoft-accessibility-studio-setup.exe';
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
    badge: 'v0.5.0 • Setup Architecture',
    title: '1. Dedicated Features Hierarchy & Plain-English Inclusion Tiers',
    alt: 'RaggieSoft Installer Studio v0.5.0 Visual IDE showing the categorized 12-view left sidebar tree and the dedicated All Features hierarchy with plain-English Minimal and Typical inclusion badges, Move Up/Down ordering, DisallowAbsent lock, and Included In dropdown.',
    summaryHtml:
      'Organize root features and nested sub-features inside an <code>All Features</code> <code>SysTreeView32</code>, choose plain-English <strong>Included In</strong> tiers (<em>Minimal / Compact</em>, <em>Typical / Express</em>, <em>Complete Only</em>, or <em>Hidden</em>) instead of raw MSI <code>InstallLevel</code> numbers, and reorder display priority with <strong>Move Up / Move Down</strong>.',
    detailHtml:
      'Clicking any node in the <code>All Features</code> tree populates its ID, display title, plain-English <code>Included In</code> setup tier, parent feature, <code>DisallowAbsent</code> lock, and consumer description—updating the underlying <code>.rsip</code> AST while preserving 100% of comments and <code>@include</code> directives.'
  },
  {
    dialogId: 'dlg-ide-registry',
    fileName: 'ide-registry-tree.png',
    badge: 'Setup Architecture • RegEdit Hierarchy',
    title: '2. RegEdit-Style Registry Tree, Feature Filter & .REG Importer',
    alt: 'RaggieSoft Installer Studio v0.4.5 Registry view displaying HKEY_CLASSES_ROOT, HKEY_CURRENT_USER, HKEY_LOCAL_MACHINE\\Software\\RaggieSoft\\Installer Studio, HKEY_USERS, and HKMU folders on the left alongside typed REG_SZ values on the right.',
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
    alt: 'RaggieSoft Installer Studio v0.4.5 Files and Folders view showing the Destination Computer folder tree on the left and the filtered Staged Contents tree with Component and KeyPath badges on the right.',
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
    alt: 'RaggieSoft Installer Studio v0.4.5 Application Runtimes and Merge Modules tree grouping Pre-MSI Runtime Prerequisites and Windows Installer .MSM Merge Modules with 32-bit ARGB vector icons.',
    summaryHtml:
      'Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>) with custom reboot exit-code latching (<code>3010, 1641, 23</code>) alongside native 64-bit <code>.msm</code> Merge Modules.',
    detailHtml:
      'All prerequisites execute under one unified UAC elevation session before <code>msiexec</code> starts, while 64-bit <code>.msm</code> modules merge SQL rows and CAB streams directly in C++20 without 32-bit COM dependencies.'
  },
  {
    dialogId: 'dlg-ide-designer',
    fileName: 'ide-wizard-designer.png',
    badge: 'New in v0.5.0 • 10 Styles + WCAG Auto-Fix',
    title: '5. Live 10-Style C++ Wizard Designer & WCAG 2.2 AA Contrast Enforcer',
    alt: 'RaggieSoft Installer Studio v0.5.0 C++ Wizard Designer showcasing the 10 Setup.exe styles dropdown with fullscreenteal (1995 ACME #008080 Teal) and win95_classic Typical/Compact/Complete/Custom cards rendered live alongside the Auto-Fix WCAG button and WCAG 2.2 AA PASS badge.',
    summaryHtml:
      'Switch live across all <strong>10 <code>SetupWizard.exe</code> styles</strong> (from <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp; <code>fullscreenblue</code> Cobalt wash through <code>wizard95</code>, <code>aerowizard</code>, and Windows 11 <code>fluentmica</code>), pick <strong>Typical / Compact / Complete / Custom</strong> Setup Types, and click <strong>Auto-Fix WCAG</strong> to guarantee dual-theme contrast.',
    detailHtml:
      'Every compiled package pairs selectable era-spanning C++20 wizard ergonomics (honoring <code>SPI_GETHIGHCONTRAST</code> automatically) with genuine relational Windows Installer <code>Dialog</code> and <code>Control</code> SQL tables inside <code>Product.msi</code>.'
  }
];

const WIZARD_SCREENSHOT_ITEMS: readonly ScreenshotFeatureItem[] = [
  {
    dialogId: 'dlg-wiz-acme-teal',
    fileName: 'setupwizard-fullscreen-teal.png',
    badge: 'New in v0.5.0 • 1995 ACME #008080 Teal Callback',
    title: '6. FullScreenTeal (#008080 ACME Engine Callback) & 4-Card Classic Setup Types',
    alt: 'SetupWizard.exe v0.5.0 running in FullScreenTeal mode displaying the classic 1995 Microsoft ACME Setup Engine #008080 Teal desktop wash, drop-shadowed italic serif title, floating 3D Billboard card, bottom-right 3D sunken progress gauge, and centered #C0C0C0 3D beveled dialog with Typical, Compact, Complete, and Custom Setup Types.',
    summaryHtml:
      'An unmistakable tribute to the classic mid-1990s <strong>Microsoft ACME Setup Engine (<code>#008080</code> Desktop Teal)</strong>—pairing a drop-shadowed italic serif product banner, floating <code>[Billboard.*]</code> card, bottom-right 3D sunken progress gauge, and 4-card <strong>Typical / Compact / Complete / Custom</strong> Setup Types.',
    detailHtml:
      'Under the nostalgic <code>#008080</code> Teal wash and <code>#C0C0C0</code> 3D beveled chrome runs 100% modern Per-Monitor V2 DPI scaling, full keyboard &amp; screen-reader UI Automation, and instant <code>SPI_GETHIGHCONTRAST</code> Windows Contrast Theme fallback.'
  },
  {
    dialogId: 'dlg-wiz-blue-wash',
    fileName: 'setupwizard-fullscreen-blue.png',
    badge: 'New in v0.5.0 • 1995 SETUP.EXE Cobalt Wash',
    title: '7. FullScreenBlue (#000080 → #000000 Cobalt Wash) + Billboards & 3D Gauge',
    alt: 'SetupWizard.exe v0.5.0 running in FullScreenBlue mode displaying the classic 1995 #000080 to #000000 Cobalt-Blue gradient backdrop, italic Times New Roman drop-shadowed Setup title, floating 3D Billboard card, docked 3D sunken progress gauge, and floating #C0C0C0 3D beveled Setup Type dialog.',
    summaryHtml:
      'Brings back the iconic 1995 full-screen <strong><code>#000080 &rarr; #000000</code> Cobalt-Blue</strong> gradient wash with a drop-shadowed serif product title, floating 3D beveled dialog, rotating installation billboards, and a docked 3D sunken progress gauge.',
    detailHtml:
      'Ideal for classic retro utilities like <em>StoreTrainer</em> and collector editions—while keeping Windows 11 <code>x64</code>/<code>ARM64</code> transactional MSI safety and single-UAC elevation intact.'
  },
  {
    dialogId: 'dlg-wiz-95',
    fileName: 'setupwizard-wizard95.png',
    badge: 'New in v0.5.0 • Classic #C0C0C0 3D Sheet',
    title: '8. Wizard95 Standalone #C0C0C0 3D Beveled Dialog & 164px Left Graphic Rail',
    alt: 'SetupWizard.exe v0.5.0 running in standalone Wizard95 mode with a classic #C0C0C0 3D beveled window sheet, 164px sunken vertical graphic rail on the left, etched horizontal footer rule, and classic 3D beveled push buttons.',
    summaryHtml:
      'Standalone classic 1995 desktop wizard geometry featuring a crisp <code>#C0C0C0</code> 3D face, <code>164px</code> sunken left vertical graphic rail on Welcome &amp; Finish, two-line etched horizontal rules, and <code>EDGE_RAISED</code> / <code>EDGE_SUNKEN</code> 3D push buttons.',
    detailHtml:
      'Automatically yields to OS semantic colors whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is enabled.'
  },
  {
    dialogId: 'dlg-wiz-mica',
    fileName: 'setupwizard-fluent-mica.png',
    badge: 'New in v0.5.0 • Windows 11 Fluent Mica',
    title: '9. FluentMica Surface & 7-Stage Vertical Progress Rail',
    alt: 'SetupWizard.exe v0.5.0 running in Windows 11 FluentMica mode featuring a 7-stage vertical step-progress rail on the left (Welcome, License, Setup Type, Customize, Ready, Installing, Completed) alongside accessible Dark Mode option cards.',
    summaryHtml:
      'Modern Windows 11 native <code>DWMSBT_TABBEDWINDOW</code> Mica surface in zero-dependency Win32 C++20 featuring a 7-stage left vertical step-progress rail with live completion checkmarks.',
    detailHtml:
      'Gives modern Windows 11 desktop apps a clean Fluent step-rail aesthetic with zero <code>WinUI 3</code>, <code>.NET</code>, or <code>WebView2</code> runtime dependencies.'
  },
  {
    dialogId: 'dlg-wiz-dark',
    fileName: 'setupwizard-setup-type.png',
    badge: 'SetupWizard.exe • Windows 11 Dark Mode',
    title: '10. Accessible Option Cards & Custom-Subclassed Dark Buttons',
    alt: 'SetupWizard.exe v0.5.0 running in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button.',
    summaryHtml:
      'Genuine Win32 <code>BS_AUTORADIOBUTTON</code> option cards (<code>&ge; 68px</code> tall, exceeding WCAG 2.5.8) and custom-subclassed <code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, and <code>Cancel</code> buttons expose full UI Automation roles and keyboard mnemonics.',
    detailHtml:
      'Screen readers (Narrator, NVDA, and JAWS) announce every option card’s title, recommendation, description, and <code>Alt+Key</code> accelerator cleanly—with zero jarring white legacy buttons in Dark Mode.'
  },
  {
    dialogId: 'dlg-wiz-light',
    fileName: 'setupwizard-setup-type-light.png',
    badge: 'Live Broadcast • WM_SETTINGCHANGE(ImmersiveColorSet)',
    title: '11. Sub-16ms Live OS Dark ↔ Light Palette Hot-Swap',
    alt: 'The exact same open SetupWizard.exe v0.5.0 window after receiving WM_SETTINGCHANGE ImmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting.',
    summaryHtml:
      'Toggle Windows 11 (or automatic sunset/sunrise utilities like Auto Dark Mode) between Dark Mode, Light Mode, or Contrast Themes mid-install and the open wizard flips its titlebar, cards, and buttons live in under 16 milliseconds.',
    detailHtml:
      'No process restart required: <code>IsLiveThemeBroadcast</code> refreshes DWM immersive titlebars, GDI brushes, vector glyphs, checkboxes, and push buttons on the fly.'
  },
  {
    dialogId: 'dlg-wiz-tree',
    fileName: 'setupwizard-selection-tree.png',
    badge: 'SetupWizard.exe • Custom Setup & Modify',
    title: '12. Authentic 32-Bit ARGB Windows Installer SelectionTree',
    alt: 'SetupWizard.exe v0.5.0 Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB split-dropdown state icons and live disk space cost card.',
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
    title: '13. Zero-Dependency Native C++20 Offline Help Viewer',
    alt: 'RaggieSoftHelp.exe v0.5.0 native C++20 offline Help Viewer showing the 32-bit ARGB Contents tree on the left and formatted MSI SelectionTree documentation on the right.',
    summaryHtml:
      'Press <code>F1</code> inside any IDE view to open searchable offline HTML5 chapters in under 5ms via Named Pipe IPC—rendered natively through <code>System32\\Msftedit.dll</code> with zero <code>.NET</code> or <code>WebView2</code> dependencies.',
    detailHtml:
      'The exact same <code>help/raggiesoft.installer-studio/</code> HTML5 topics ship inside the installer and power the web documentation under <a href="/docs">/docs</a>.'
  },
  {
    dialogId: 'dlg-msiprism',
    fileName: 'msiprism-sql-inspector.png',
    badge: 'msiprism.exe • Categorized SQL Schema Tree',
    title: '14. Native 64-Bit Dark Mode MSI, MSM, MST & MSP SQL Inspector',
    alt: 'RaggieSoft MSI Prism v0.5.0 displaying a categorized 5-folder SQL schema tree on the left with 32-bit ARGB table icons and relational Feature rows on the right.',
    summaryHtml:
      'Open any <code>.msi</code>, <code>.msm</code>, or <code>.msp</code> database into a categorized 5-group <code>SysTreeView32</code> schema tree, inspect relational rows in Dark or Light Mode, audit <code>ICE80</code> flags, and generate <code>.mst</code> or <code>.msp</code> deltas.',
    detailHtml:
      'Groups all 44+ Windows Installer SQL tables into <em>Metadata &amp; Streams</em>, <em>Core Packaging Tables</em>, <em>Registry, Shortcuts &amp; Classes</em>, <em>Dialogs &amp; UI Controls</em>, and <em>Sequences, Locators &amp; Actions</em>.'
  }
];

/**
 * Renders the verified Microsoft Azure Artifact Signing (Public Trust Authenticode + RFC 3161
 * Timestamp) assurance callout AND temporary SmartScreen new-certificate reputation notice
 * beneath download buttons across `/`, `/screenshots`, and `/security`.
 */
function renderAzureSigningAssuranceNotice(): string {
  return `
    <aside class="calc-panel" aria-label="Signed Binary and Temporary Windows SmartScreen Reputation Notice" style="margin-top: 1.15rem; padding: 1rem 1.2rem;">
      <span class="eyebrow" style="margin-bottom: 0.25rem;">Signed Binary Notice • Why Windows SmartScreen Still Prompts Temporarily</span>
      <p style="margin: 0 0 0.55rem 0; font-size: 0.95rem;">
        <strong>100% Cryptographically Signed (<code>v0.5.0</code>):</strong>
        Every official download—including the outer Universal Web &amp; Offline <code>Setup.exe</code> launchers, inner
        <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code> databases, and all 5 C++20 executables
        (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>msiprism.exe</code>,
        and <code>RaggieSoftHelp.exe</code>)—is Dual-Layer Authenticode-signed via
        <strong>Microsoft Azure Artifact Signing</strong> (<code>Verified publisher: Michael Ragsdale</code>, RFC 3161 timestamped,
        and verified with <code>signtool verify /pa</code>).
      </p>
      <p style="margin: 0; font-size: 0.92rem; color: var(--muted);">
        <strong>Why SmartScreen may still say &ldquo;Windows protected your PC&rdquo; right now:</strong>
        Our Microsoft Public Trust signing certificate is brand-new (issued <strong>November 25, 2026</strong>). Under
        Microsoft&rsquo;s current SmartScreen rules, newly issued certificates start at zero download reputation until initial
        install telemetry and <strong>Microsoft Security Intelligence (WDSI)</strong> review finish (already submitted).
        To install safely while reputation clears: click <strong>More info</strong>, confirm Windows shows
        <strong><code>Publisher: Michael Ragsdale</code></strong> (never <em>&ldquo;Unknown publisher&rdquo;</em>), and click
        <strong>Run anyway</strong>.
        <a href="/faq#smartscreen">Full details in the FAQ &rarr;</a>
      </p>
    </aside>
  `;
}

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
      <span class="eyebrow">Real Native Win32 C++20 Captures • v0.5.0 on Windows 11</span>
      <h1 id="tour-title">Visual Feature Tour &amp; Full-Size Screenshots</h1>
      <p class="lead">
        Every window on this page is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables
        (<code>InstallerStudio.exe</code>, <code>SetupWizard.exe</code>, <code>RaggieSoftHelp.exe</code>, and
        <code>msiprism.exe</code>) using stock Windows 11 system libraries—featuring <strong>10 selectable era-spanning
        wizard styles</strong> (including <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp;
        <code>fullscreenblue</code> Cobalt washes), 32-bit ARGB vector <code>SysTreeView32</code> hierarchies, and live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
        <strong>Click or press Enter on any screenshot to inspect it at full 1:1 native size.</strong>
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_OFFLINE_UNIV_URL}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/faq">Read FAQ</a>
        <a class="btn btn-outline" href="/roadmap">Explore v1.0 Roadmap</a>
      </div>
      ${renderAzureSigningAssuranceNotice()}
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
            <h3>Shipping Today in Technical Preview (<code>v0.5.0</code>)</h3>
            <ul class="feature-list">
              <li><strong>10 Era-Spanning Wizard Styles &amp; Classic Setup Types (New in <code>v0.5.0</code>)</strong>: Switch from 1995 <strong>Microsoft ACME <code>#008080</code> Teal</strong> (<code>fullscreenteal</code>), <strong><code>#000080</code> Cobalt Wash</strong> (<code>fullscreenblue</code>), &amp; <code>wizard95</code> through <code>aerowizard</code> &amp; Windows 11 <code>fluentmica</code> step-rail—paired with <strong>Typical / Compact / Complete / Custom</strong> Setup Types, <code>[Billboard.*]</code> slides, and a live <strong>WCAG 2.2 AA Contrast Enforcer</strong></li>
              <li><strong>Dual-Layer Microsoft Azure Artifact Signing &amp; Universal Single-Download EXEs</strong>: Every inner C++20 binary, <code>.msi</code> database, Smart CPU-Aware Web Stub, and Combined Offline Universal EXE (<code>x64 + ARM64</code>) is Authenticode-signed with a verified Public Trust certificate</li>
              <li><strong>Plain-English Feature Inclusion Tiers &amp; 12-View Tree-First IDE</strong>: Decide whether each feature belongs to a <em>Minimal / Compact</em>, <em>Typical / Express</em>, or <em>Complete</em> setup, edit <strong><code>RegEdit</code>-style Registry</strong> &amp; Dual Folder trees, and enjoy permanent <strong><code>Community == 100% Premier</code> parity</strong></li>
              <li><strong>100% Dark-Mode-Complete UI, Native C++20 <code>F1</code> Help &amp; <code>msiprism.exe</code></strong>: Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> palette hot-swapping, <code>SPI_GETHIGHCONTRAST</code> override, zero-dependency <code>RaggieSoftHelp.exe</code>, Pre-MSI runtimes, 64-bit <code>.MSM</code> merging, and <code>--emit-vpat</code></li>
            </ul>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/screenshots">Take the Visual Screenshot Tour &rarr;</a>
            <a class="btn btn-outline" href="/faq">Frequently Asked Questions</a>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Focused Path to <code>v1.0.0 GA</code> (Dogfood North Star)</h3>
            <ul class="feature-list">
              <li><strong><code>v0.6.0</code> (Next Up) — SFX <code>.EXE</code>, Multi-Volume Disk Spanning, Loose Media (<code>msiexec /a</code>), <code>.rswpak</code> &amp; Multi-Engine Suites</strong>: Build folder/ZIP-to-SFX <code>.exe</code> extractors, split multi-disc <code>CAB1..N.cab</code> sets, support loose uncompressed <em>Run from Media / Network</em> &amp; <code>msiexec /a</code> admin images, and chain <code>.msi</code> apps + <code>Engine = native</code> content packs</li>
              <li><strong><code>v0.7.0</code> — From-Scratch Dual Dialog Builders &amp; <code>RsDialog</code> Scripting</strong>: Blank-canvas WYSIWYG C++ (<code>SetupWizard.exe</code>) &amp; raw <code>370&times;270</code> <code>MSI.DLL</code> SQL dialog designers plus procedural <code>Rs*()</code> dialog scripting</li>
              <li><strong><code>v0.8.0</code> — VB6 <code>.vbp</code>, Visual Studio <code>.slnx</code> &amp; <code>.msi</code> Importers + Restart Manager</strong>: Reg-Free COM VB6 <code>.vbp</code> importing for classic utilities like <em>StoreTrainer</em> plus graceful <code>Rstrtmgr.dll</code> app shutdown</li>
              <li><strong><code>v0.9.0</code> &amp; <code>v1.0.0 GA</code> — Signing Studio, White-Label <code>RsUpdate.exe</code> &amp; Full Production Cutover</strong>: Interactive Signing Studio UI, guided <code>.MSP</code> servicing, and packaging 100% of RaggieSoft's own software</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/roadmap">Read Full v1.0 Engineering Roadmap</a>
        </article>
      </div>
    </section>
  `;
}

/**
 * Renders the reusable RaggieSoft Studio 4-Product Suite Grid (shown on `/` and expanded on `/suite`).
 */
function renderStudioProductFamilySection(): string {
  return `
    <section aria-labelledby="studio-family-heading">
      <span class="eyebrow">One Cohesive Zero-Bloat Developer Brand • RaggieSoft Studio</span>
      <h2 id="studio-family-heading" style="margin-top: 0.25rem;">The RaggieSoft Studio Product Family</h2>
      <p>
        <strong>RaggieSoft Studio</strong> (<code>raggiesoftstudio.com</code>) brings together native, accessible,
        plain-text-first Windows developer tools engineered from first principles—starting with <strong>Installer Studio
        <code>v0.5.0</code></strong> today and expanding into branded desktop application launchers and interactive
        multimedia showcase menus.
      </p>
      <div class="card-grid">
        <article class="card card-highlight">
          <div>
            <span class="status-pill status-shipped" style="margin-bottom: 0.55rem;">Shipping Now • v0.5.0 Signed Preview</span>
            <h3>1. RaggieSoft Installer Studio</h3>
            <p>
              <strong>Install Without Limits.</strong> Zero-dependency static <code>/MT</code> Win32 C++20 packaging IDE,
              headless CLI (<code>instbuild.exe</code>), 10-style customer <code>SetupWizard.exe</code> (from 1995 ACME
              <code>#008080</code> Teal &amp; Cobalt washes to Windows 11 <code>FluentMica</code>), 64-bit SQL inspector
              (<code>msiprism.exe</code>), and native <code>F1</code> Help Viewer for <code>x64</code> &amp; <code>ARM64</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download v0.5.0</a>
            <a class="btn btn-outline" href="/screenshots">14 Screenshots</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill status-shipped" style="margin-bottom: 0.55rem;">Shipping Now • v1.0.0 Signed IDE &amp; CLI</span>
            <h3>2. RaggieSoft Accessibility Studio</h3>
            <p>
              <strong>WCAG 2.2 AA &amp; Section 508 Engineering IDE.</strong> C# 13 / <code>.NET 10</code> WinForms + Monaco
              side-by-side refactor diff workstation, live Chromium forced-colors/reflow inspector, and cross-platform OASIS
              <strong>SARIF 2.1.0</strong> CI/CD CLI—packaged with Installer Studio <code>v0.5.0</code>.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="/accessibility-studio">Open Accessibility Studio &rarr;</a>
            <a class="btn btn-outline" href="${A11Y_STUDIO_WEB_SETUP_URL}">Download v1.0.0</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill status-next" style="margin-bottom: 0.55rem;">Upcoming Suite IDE • In Design</span>
            <h3>3. RaggieSoft Launcher Studio</h3>
            <p>
              <strong>Build Your Own Branded Desktop Hub.</strong> Inspired directly by our own
              <a href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a>, Launcher Studio is a visual IDE and
              manifest compiler that lets independent studios, authors, musicians, and IT teams ship a custom-branded,
              zero-account desktop app hub, offline library browser, and SHA-256 + Authenticode delta updater.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="/suite#launcher-studio">Explore Launcher Studio &rarr;</a>
          </div>
        </article>

        <article class="card">
          <div>
            <span class="status-pill status-next" style="margin-bottom: 0.55rem;">Upcoming Suite IDE • In Design</span>
            <h3>4. RaggieSoft Showcase Studio</h3>
            <p>
              <strong>Interactive Launchpads &amp; Collector's Menus.</strong> A nostalgic-meets-modern visual canvas IDE
              compiling zero-dependency Win32 C++20 interactive menus (<code>x64</code> &amp; <code>ARM64</code>) for USB
              and ISO collector's editions, multi-package suite front-ends, offline press kits, album/book companion discs,
              and accessible classroom kiosks.
            </p>
          </div>
          <div class="btn-row">
            <a class="btn btn-outline" href="/suite#showcase-studio">Explore Showcase Studio &rarr;</a>
          </div>
        </article>
      </div>
    </section>
  `;
}

/**
 * Renders the dedicated `/suite` RaggieSoft Studio Product Family page.
 */
function renderSuiteBody(): string {
  return `
    <section class="hero" aria-labelledby="suite-page-title">
      <span class="eyebrow">RaggieSoft Studio • Windows 11 x64 &amp; ARM64 Developer Tooling</span>
      <h1 id="suite-page-title">One Studio Umbrella for Packaging, Launchers &amp; Interactive Showcases</h1>
      <p class="lead">
        <strong>RaggieSoft Studio</strong> (<code>raggiesoftstudio.com</code>) is our dedicated home for developer,
        DevOps, and digital-distribution authoring tools. Every tool in the RaggieSoft Studio lineup shares the same
        non-negotiable engineering DNA: <strong>diff-friendly plain-text project files</strong>, <strong>100% WCAG 2.2 AA
        keyboard, screen-reader &amp; Dark/High-Contrast accessibility</strong>, <strong>native <code>x64</code> &amp;
        <code>ARM64</code> execution</strong>, <strong>zero telemetry</strong>, and <strong>100% white-label publisher
        ownership</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Installer Studio v0.5.0 (Shipping Today)</a>
        <a class="btn btn-outline" href="/screenshots">Installer Studio Visual Tour</a>
        <a class="btn btn-outline" href="/roadmap">Engineering Roadmap</a>
      </div>
      ${renderAzureSigningAssuranceNotice()}
    </section>

    <section id="installer-studio" class="calc-panel" aria-labelledby="prod-inst-heading">
      <span class="status-pill status-shipped">1 • Available Now in Signed Technical Preview (v0.5.0)</span>
      <h2 id="prod-inst-heading" style="margin-top: 0.5rem;">RaggieSoft Installer Studio — Install Without Limits</h2>
      <p>
        Our flagship zero-dependency static <code>/MT</code> Win32 C++20 Windows installation IDE and headless compiler
        (<code>installwithoutlimits.com</code>). Compile genuine relational <code>.msi</code> databases, <code>.msm</code>
        Merge Modules, <code>.mst</code> Transforms, <code>.msp</code> Patches, and CPU-aware Universal
        <code>Setup.exe</code> bootstrappers without <code>.NET</code>, <code>WebView2</code>, or multi-gigabyte toolchains.
      </p>
      <ul class="feature-list">
        <li><strong>10 Era-Spanning Wizard Styles</strong>: From nostalgic 1995 <strong>Microsoft ACME <code>#008080</code> Teal</strong> (<code>fullscreenteal</code>), <strong><code>#000080</code> Cobalt</strong> (<code>fullscreenblue</code>), &amp; <code>wizard95</code> 3D sheets through <code>aerowizard</code> and Windows 11 <code>fluentmica</code>.</li>
        <li><strong>Dual-Layer Public Trust Signing &amp; Smart Universal EXEs</strong>: Embeds publisher product names cleanly into Authenticode <code>SpcSpOpusInfo</code> so Windows UAC prompts show your real application name—never random cached <code>.msi</code> hex filenames.</li>
        <li><strong>Upcoming Multi-Disc, Loose Media &amp; Suite Chaining (<code>v0.6.0</code>)</strong>: Multi-volume <code>CAB1..N.cab</code> disk spanning, loose uncompressed <em>Run from Media / Network</em> layouts, <code>msiexec.exe /a</code> administrative installs, and hybrid suites pairing <code>.msi</code> apps with <code>Engine = native</code> content libraries.</li>
      </ul>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Smart Web Setup (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_OFFLINE_UNIV_URL}">Download Combined Offline EXE (x64 + ARM64)</a>
        <a class="btn btn-outline" href="/docs">Read .rsip v0.5 Documentation</a>
      </div>
    </section>

    <section id="launcher-studio" class="card" style="margin-bottom: 1.5rem;" aria-labelledby="prod-launch-heading">
      <div>
        <span class="status-pill status-next">2 • Proposed RaggieSoft Studio IDE</span>
        <h2 id="prod-launch-heading" style="margin-top: 0.5rem;">RaggieSoft Launcher Studio — Custom Desktop App Hubs Without Gatekeepers</h2>
        <p>
          Indie software studios, narrative creators, audio labels, and internal enterprise tool teams often publish half a
          dozen desktop apps and content packs—yet building a polished, accessible desktop hub and patcher from scratch takes
          months. We built <a href="https://launcher.raggiesoft.com">RaggieSoft Launcher</a> for our own ecosystem;
          <strong>RaggieSoft Launcher Studio</strong> turns that architecture into a reusable visual IDE for everyone.
        </p>
        <ul class="feature-list">
          <li><strong>Visual Catalog &amp; Branding Designer (<code>.rslp</code> Manifests)</strong>: Organize app tiles, offline book/music shelves, release notes, hero banners, and Light/Dark/High-Contrast brand palettes with live WCAG 2.2 AA contrast verification.</li>
          <li><strong>Zero-Account, Static-CDN Catalog Updates</strong>: Publish a single static JSON catalog + signed <code>.msi</code>, <code>.msp</code>, or <code>Engine = native</code> packages on any HTTPS host or S3/R2 bucket—zero database servers, zero forced user logins, and zero telemetry.</li>
          <li><strong>Cryptographic Integrity Built In</strong>: Every background download verifies build-stamped <code>SHA-256</code> digests and <code>WinVerifyTrust</code> Authenticode publisher signatures before execution.</li>
        </ul>
      </div>
    </section>

    <section id="showcase-studio" class="card" style="margin-bottom: 1.5rem;" aria-labelledby="prod-showcase-heading">
      <div>
        <span class="status-pill status-next">3 • Proposed RaggieSoft Studio IDE</span>
        <h2 id="prod-showcase-heading" style="margin-top: 0.5rem;">RaggieSoft Showcase Studio — Interactive Launchpads &amp; Collector's Edition Menus</h2>
        <p>
          In the golden age of boxed PC software and CD-ROMs, inserting a disc greeted you with a custom illustrated menu
          complete with ambient audio, lore booklets, bonus tracks, and one-click install buttons. While physical optical
          drives are rarer today, <strong>commemorative USB box sets, downloadable ISO collector's editions, multi-package
          installer front-ends, offline press kits, and museum/classroom kiosks</strong> still benefit hugely from a
          self-contained interactive menu!
        </p>
        <ul class="feature-list">
          <li><strong>Drag-and-Drop Page &amp; Hotspot Canvas (<code>.rssp</code> Projects)</strong>: Design multi-page <code>16:9</code>, <code>4:3</code> retro, or borderless desktop launchpads with custom artwork, hover/focus states, audio previews, RichEdit liner notes, and action buttons (launch <code>Setup.exe</code>, open local docs, browse folders, or switch pages).</li>
          <li><strong>Zero-Dependency Static <code>/MT</code> C++20 Runtime</strong>: Compiles down to a compact native <code>x64</code> &amp; <code>ARM64</code> executable that boots instantly off a USB drive, mounted ISO, network share, or extracted archive with zero browser runtime bloat.</li>
          <li><strong>Modern Accessibility Under Classic Nostalgia</strong>: Unlike 1990s bitmap-only autorun menus that were invisible to screen readers and keyboards, every Showcase Studio button and hotspot exposes real Win32 <code>Tab</code> focus rings, <code>Alt+Key</code> mnemonics, UI Automation labels, and <code>SPI_GETHIGHCONTRAST</code> support!</li>
        </ul>
      </div>
    </section>

    <section id="accessibility-studio" class="card" aria-labelledby="prod-a11y-heading">
      <div>
        <span class="status-pill status-shipped">4 • Shipping Now in RaggieSoft Studio (v1.0.0 Signed IDE &amp; CLI)</span>
        <h2 id="prod-a11y-heading" style="margin-top: 0.5rem;">RaggieSoft Accessibility Studio — Source-Level WCAG 2.2 AA &amp; Section 508 Engineering</h2>
        <p>
          Now unified directly under <strong>RaggieSoft Studio</strong> at <code>/accessibility-studio</code> (permanent
          <code>301</code> target of <code>a11y.raggiesoft.com</code>), <strong>RaggieSoft Accessibility Studio</strong> pairs a
          C# 13 / <code>.NET 10</code> Windows Forms + VS Code Monaco side-by-side refactor diff workstation and live Chromium
          <code>forced-colors</code> / <code>400%</code> reflow inspector with a cross-platform headless
          <strong>OASIS SARIF 2.1.0</strong> CI/CD scanner—packaged and Dual-Layer signed with Installer Studio <code>v0.5.0</code>.
        </p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/accessibility-studio">Open Accessibility Studio Portal &rarr;</a>
          <a class="btn btn-outline" href="${A11Y_STUDIO_WEB_SETUP_URL}">Download Accessibility Studio v1.0.0 (Signed EXE)</a>
        </div>
      </div>
    </section>
  `;
}

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <div class="hero-split">
        <div>
          <span class="eyebrow">RaggieSoft Studio • Flagship Installer Studio v0.5.0 Signed for x64 &amp; ARM64</span>
          <h1 id="hero-title">RaggieSoft Studio — Native Windows Packaging, Launchers &amp; Showcases.</h1>
          <p class="lead">
            Welcome to <strong>RaggieSoft Studio</strong>, our zero-bloat Windows 11 developer tooling suite for
            <code>x64</code> and <code>ARM64</code>. Download <strong>RaggieSoft Installer Studio <code>v0.5.0</code></strong>
            today—featuring a <strong>12-View Tree-First C++20 IDE</strong>, <strong>10 selectable Wizard Styles</strong>
            (from 1995 <strong>ACME <code>#008080</code> Teal</strong> &amp; <strong><code>#000080</code> Cobalt</strong>
            washes to Windows 11 <code>FluentMica</code>), <strong>Typical / Compact / Complete / Custom</strong> Setup Types,
            and <strong>WCAG 2.2 AA Auto-Contrast</strong>—and preview our upcoming <strong>Launcher Studio</strong> &amp;
            <strong>Showcase Studio</strong> IDEs below.
          </p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
            <a class="btn btn-outline" href="${DOWNLOAD_OFFLINE_UNIV_URL}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
            <a class="btn btn-outline" href="/suite">Explore Studio Suite</a>
            <a class="btn btn-outline" href="/screenshots">Visual Tour</a>
          </div>
          ${renderAzureSigningAssuranceNotice()}
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

    ${renderStudioProductFamilySection()}

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
      <span class="eyebrow">Open Engineering Plan • v0.5.0 Shipped &rarr; v1.0.0 GA Dogfood Cutover</span>
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
        <a class="btn btn-outline" href="/screenshots">Visual Tour (v0.5.0)</a>
        <a class="btn btn-outline" href="/faq">Read FAQ</a>
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
              <th scope="row"><code>v0.1.0</code> – <code>v0.5.0</code></th>
              <td>10 Wizard Styles (<code>FullScreenBlue</code> &amp; <code>FullScreenTeal</code> <code>#008080</code> ACME Callback, <code>Wizard95</code>..<code>FluentMica</code>), Classic &amp; Custom Setup Types (<code>Typical</code>/<code>Compact</code>/<code>Complete</code>/<code>Custom</code> &amp; <code>[SetupType.*]</code>), WCAG Auto-Contrast, Microsoft Azure Artifact Signing, Universal Web &amp; Offline EXEs (<code>x64 + ARM64</code>), 12-View Tree-First IDE, <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, &amp; native <code>F1</code> Help</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row"><code>v0.6.0</code></th>
              <td>Lightweight Self-Extracting <code>.EXE</code> Builder (<code>PackageKind = sfx</code>), Multi-Volume Disk Spanning (<code>CAB1..N.cab</code>), Loose Uncompressed Source Media (<em>Run from Media / Network</em> &amp; <code>msiexec.exe /a</code> Admin Installs), <code>.rswpak</code> Packs, <code>.NET 11</code> presets, &amp; Multi-Engine Suite Setup (<code>Engine = native | msi</code>)</td>
              <td><span class="status-pill status-next">Next Up</span></td>
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
              <td>Interactive Authenticode &amp; Azure Artifact Signing Studio UI, white-label <code>RsUpdate.exe</code> Auto-Updater, &amp; guided Microsoft-compliant <code>.MSP</code> servicing (<code>--plan-update</code>)</td>
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
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.5.0)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v05' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v05'">v0.5 (10 Wizard Styles • Shipped)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v06' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v06'">v0.6 (SFX EXE &amp; .rswpak • Next Up)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v07' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v07'">v0.7 (Dialog Builders)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v08' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v08'">v0.8 (.slnx &amp; VB6 .vbp)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v09' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v09'">v0.9 (Signing &amp; Updater)</button>
          <button type="button" class="btn" :class="phaseFilter === 'v10' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'v10'">v1.0 GA &amp; Post-1.0</button>
        </div>
      </section>

      <!-- Shipped Foundation -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.5.0</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>10 Selectable Wizard Styles, Classic Setup Types &amp; WCAG Auto-Contrast (<code>v0.5.0</code>)</strong>: Selectable era-spanning <code>[UI] WizardLayout</code> styles (including <code>fullscreenteal</code> 1995 ACME <code>#008080</code> Teal &amp; <code>fullscreenblue</code> <code>#000080</code> Cobalt washes, <code>wizard95</code>, <code>wizard97</code>, <code>aerowizard</code>, <code>fluentmica</code>, <code>oneclick</code>, <code>passivetoast</code>, and <code>autorun16x9</code>), classic <strong>Typical / Compact / Complete / Custom</strong> &amp; <code>[SetupType.*]</code> presets, <code>[Billboard.*]</code> slides, and one-click WCAG 2.2 AA Auto-Contrast.</li>
          <li><strong>Microsoft Azure Artifact Signing &amp; ARM64 <code>/dlib</code> Dispatch (<code>v0.4.5</code>)</strong>: Dual-layer Public Trust Authenticode signing across every inner C++20 binary, <code>.msi</code> database, and Universal <code>Setup.exe</code>—backed by automatic PE <code>Machine</code> matching for <code>Azure.CodeSigning.Dlib.dll</code> on Windows 11 <code>ARM64</code> workstations and <code>ImageRemoveCertificate</code> pre-signed template stripping.</li>
          <li><strong>Plain-English Feature Inclusion Tiers (<code>v0.4.4</code>)</strong>: Replaced cryptic numeric Windows Installer <code>InstallLevel</code> inputs with human-friendly <strong>Included In</strong> tiers (<em>Minimal / Compact</em>, <em>Typical / Express</em>, <em>Complete Only</em>, and <em>Hidden</em>) across the Visual IDE and <code>.rsip</code> grammar.</li>
          <li><strong>CPU-Aware Smart Web Stub &amp; Combined Offline Universal EXE (<code>v0.4.3</code>)</strong>: Eliminates separate <code>x64</code> vs. <code>ARM64</code> download confusion via a compact 64-bit universal outer launcher that pierces Windows 11 Prism emulation through <code>IsWow64Process2</code> to download or unpack the genuine native silicon installer with SHA-256 verification.</li>
          <li><strong>12-View Tree-First Win32 C++20 Visual IDE, Live Dark Mode &amp; Native <code>F1</code> Help (<code>v0.3.0</code>–<code>v0.4.2</code>)</strong>: Categorized sidebar tree, dedicated <strong>Features</strong> and <strong><code>RegEdit</code>-style Registry</strong> trees, custom-subclassed Dark Mode push buttons and checkboxes flipping live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code>, zero-dependency <code>RaggieSoftHelp.exe</code>, Pre-MSI <code>[Prerequisite.*]</code> runtimes, and 64-bit <code>.MSM</code> merging.</li>
        </ul>
        <div class="btn-row">
          <a class="btn btn-primary" href="/screenshots">Explore Live v0.5.0 Screenshots</a>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1.0 &rarr; v0.5.0 Changelog</a>
        </div>
      </section>

      <!-- v0.5.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v05'" aria-labelledby="phase-v05-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-shipped">Shipped in v0.5.0</span>
          <h2 id="phase-v05-heading" style="margin-top: 0.5rem;">10 Wizard Layout Variations (Incl. 1995 ACME <code>#008080</code> Teal &amp; Cobalt Washes), Classic &amp; Custom Setup Types &amp; WCAG Contrast Enforcer</h2>
          <ul class="feature-list">
            <li><strong>Eight First-Party Wizard Styles (<code>[UI] WizardLayout</code>)</strong>:
              <ul class="feature-list" style="margin-top: 0.35rem; margin-bottom: 0.35rem;">
                <li><strong><code>Wizard95</code></strong>: Classic 1995 desktop 3D beveled dialog sheet (<code>#C0C0C0</code> surface, etched dividers, <code>164&times;314</code> left bitmap rail, and beveled push buttons).</li>
                <li><strong><code>Wizard97</code></strong>: Classic enterprise header-banner layout with right-side emblem and bottom-right <code>&lt; Back</code> / <code>Next &gt;</code> / <code>Cancel</code> footer—modernized for Dark &amp; Light Mode.</li>
                <li><strong><code>AeroWizard</code></strong>: Command-bar layout featuring a vector GDI+ <code>30&times;30</code> circular <code>&larr;</code> Back glyph in the top-left command area.</li>
                <li><strong><code>FluentMica</code></strong>: Modern Windows 11 native backdrop via <code>DwmSetWindowAttribute(DWMWA_SYSTEMBACKDROP_TYPE, DWMSBT_MAINWINDOW / DWMSBT_TABBEDWINDOW)</code> with a unified borderless surface, left-hand vertical step-progress rail, and rounded <code>8px</code> cards.</li>
                <li><strong><code>OneClickSplash</code></strong>: Compact centered <code>~480&times;280</code> friction-free card with one primary <strong>Install</strong> button and a <em>"Customize installation..."</em> disclosure toggle.</li>
                <li><strong><code>PassiveToast</code></strong>: Clean non-interactive <code>/passive</code> &amp; <code>/qb</code> progress banner (centered or docked near the system tray) with UI Automation live-region percentage announcements.</li>
                <li><strong><code>FullScreenBlue</code> &amp; <code>FullScreenTeal</code></strong>: Nostalgic 1990s full-screen <code>SETUP.EXE</code> backdrop offering both the classic <strong>Cobalt-Blue (<code>#000080 &rarr; #000000</code>)</strong> gradient wash and the classic <strong>1995 Desktop Teal (<code>#008080</code>)</strong> solid setup screen—complete with a drop-shadowed serif title, floating 3D beveled dialogs, <strong>optional rotating installation billboards</strong>, and a floating <strong>3D Beveled Progress Gauge</strong> while keeping modern DPI scaling and screen-reader accessibility.</li>
                <li><strong><code>Autorun16x9</code></strong>: Widescreen <code>16:9</code> Collector's Edition &amp; digital media launcher menu.</li>
              </ul>
            </li>
            <li><strong>Classic Windows 95 &amp; Author-Defined Setup Types (<code>[SetupType.&lt;Id&gt;]</code>)</strong>: Choose built-in presets like classic Windows 95 <strong>Typical / Compact / Complete / Custom</strong> or modern <strong>Express / Compact / Custom</strong>, or define custom publisher Setup Types (such as <em>Developer Workstation</em>, <em>Minimal Portable</em>, or <em>Complete Archive</em>) with custom titles, <code>&amp;</code> keyboard mnemonics, icons, descriptions, live disk-space totals, and explicit feature mappings.</li>
            <li><strong>Non-Negotiable Windows Contrast Theme Auto-Override (<code>SPI_GETHIGHCONTRAST</code>)</strong>: Every layout automatically bypasses custom gradients, bitmaps, and Mica backdrops whenever a Windows Contrast Theme (<em>Aquatic</em>, <em>Desert</em>, <em>Dusk</em>, <em>Night Sky</em>) is active to paint strictly with semantic OS colors and <code>2px</code> solid borders.</li>
            <li><strong>Complete Publisher Branding &amp; Live WCAG 2.2 AA Contrast Enforcer (<code>[Branding]</code> &amp; <code>.rswskin</code>)</strong>: Customize Light &amp; Dark Mode brand colors, banners, sidebars, and billboards—backed by live W3C luminance ratios, a one-click <em>"Auto-Adjust Nearest Accessible Shade"</em> button in the IDE, and automated CI validation in <code>instbuild.exe --validate</code>.</li>
          </ul>
        </div>
      </section>

      <!-- v0.6.0 -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'v06'" aria-labelledby="phase-v06-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Target v0.6.0 • Next Up</span>
          <h2 id="phase-v06-heading" style="margin-top: 0.5rem;">SFX <code>.EXE</code> Builder, Multi-Volume Disk Spanning, Loose Source Media (<code>msiexec /a</code>), <code>.rswpak</code> Packs &amp; Multi-Engine Suites</h2>
          <ul class="feature-list">
            <li><strong>Lightweight Self-Extracting Archive <code>.EXE</code> Builder (<code>PackageKind = sfx</code> + Folder/ZIP-to-SFX AeroWizard)</strong>: Turn any folder or <code>.zip</code> archive into a zero-dependency, Dark-Mode-aware <code>LZMS</code> self-extracting <code>.exe</code> (zero UAC or Installed Apps registration required) that unpacks to a chosen destination folder and <strong>optionally runs a bundled <code>.exe</code> (<code>PostExtractRun</code>) or opens a bundled document (<code>PostExtractOpen</code>, such as a PDF, HTML, or ReadMe guide via the user's default Windows viewer when installed)</strong>.</li>
            <li><strong>Multi-Volume Disk Spanning, Uncompressed Loose Source Media &amp; Administrative Installs (<code>msiexec.exe /a</code>)</strong>: Split multi-gigabyte distributions across numbered external <code>CAB1.cab..CABN.cab</code> volumes (<code>Media</code> table <code>DiskId = 1..N</code> + <code>DiskPrompt</code>), publish uncompressed side-by-side source trees supporting <em>Run from Media</em> (<code>MenuCD</code>) and <em>Run from Network</em> (<code>MenuNetwork</code>), and support full <code>msiexec.exe /a</code> administrative network image extraction.</li>
            <li><strong>Granular On-Demand Feature Packs (<code>.rswpak</code>)</strong>: Building on <code>v0.4.3</code>'s CPU-aware Smart Web Stub and Combined Offline Universal EXE, split optional multi-gigabyte features (high-DPI assets, offline docs, or language packs) into external LZMS-compressed <code>.rswpak</code> blocks fetched on demand via <code>WinHTTP</code> with SHA-256 + Authenticode verification when selected in <code>SelectionTree</code>.</li>
            <li><strong>First-Class <code>.NET 11</code> (<code>net11.0</code> / <code>net11.0-windows</code>) Runtime Presets</strong>: Curated <code>DotNet11Desktop</code>, <code>DotNet11AspNet</code>, and <code>DotNet11Runtime</code> / <code>DotNet10Runtime</code> presets alongside <code>.NET 10.0 LTS</code>.</li>
            <li><strong>Native Direct Engine (<code>Engine = native | msi</code>) &amp; Multi-Engine Suite Setup (<code>PackageKind = suite</code>)</strong>: Optional zero-<code>msi.dll</code> transactional extraction backend with rollback journaling and signed <code>Uninstall.exe</code>—plus unified Suite Setup bootstrappers chaining transactional <code>.msi</code> desktop apps alongside multi-gigabyte <code>Engine = native</code> book and music libraries.</li>
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
 * Renders the `/changelog` Version History page (`v0.1.0` -> `v0.4.5`).
 */
function renderChangelogBody(): string {
  return `
    <section class="hero" aria-labelledby="chg-title">
      <span class="eyebrow">Public Engineering Log • Signed Universal x64 &amp; Native ARM64</span>
      <h1 id="chg-title">Version History &amp; Release Notes</h1>
      <p class="lead">
        Follow every milestone of <strong>RaggieSoft Installer Studio</strong> as it evolves in public as original,
        zero-dependency native Win32 C++20 software.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Latest v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_OFFLINE_UNIV_URL}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/screenshots">Inspect v0.5.0 Screenshots</a>
        <a class="btn btn-outline" href="/faq">Read FAQ</a>
      </div>
    </section>

    <section aria-labelledby="v050-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v050-heading" style="margin-top: 0.25rem;">v0.5.0 — 10 Selectable Wizard Styles (Incl. 1995 ACME #008080 Teal &amp; #000080 Cobalt Washes), Classic &amp; Custom Setup Types, Billboards &amp; WCAG Auto-Contrast</h2>
      <ul class="feature-list">
        <li><strong>10 Selectable First-Party Wizard Styles (<code>[UI] WizardLayout</code>)</strong>: Shipped <code>standard</code> (RaggieSoft Glass), <code>wizard95</code> (classic <code>#C0C0C0</code> 3D beveled sheet + <code>164px</code> left graphic rail + etched 3D push buttons), <code>wizard97</code> (enterprise top-banner sheet), <code>aerowizard</code> (command-bar header), <code>fluentmica</code> (Windows 11 <code>DWMSBT_TABBEDWINDOW</code> surface + 7-stage vertical step rail), <code>oneclick</code> (compact express splash with <code>Customize...</code> expansion), <code>passivetoast</code> (<code>/passive</code> &amp; <code>/qb</code> progress banner), <code>fullscreenblue</code> (1995 <code>#000080 &rarr; #000000</code> Cobalt-Blue wash), <strong><code>fullscreenteal</code> (1995 <code>#008080</code> Microsoft ACME Setup Engine Teal callback)</strong>, and <code>autorun16x9</code>—all yielding automatically to <code>SPI_GETHIGHCONTRAST</code> Windows Contrast Themes.</li>
        <li><strong>Classic Windows 95 &amp; Author-Defined Setup Types (<code>SetupTypePreset</code> &amp; <code>[SetupType.*]</code>) + <code>[Billboard.*]</code></strong>: Added 4-card <code>win95_classic</code> Setup Types (<strong>Typical</strong>, <strong>Compact</strong>, <strong>Complete</strong>, <strong>Custom</strong> mapping cleanly to <code>INSTALLLEVEL=100</code>, <code>20</code>, <code>1000</code>, and <code>SelectionTree</code>), custom repeatable <code>[SetupType.&lt;Id&gt;]</code> cards with explicit <code>ADDLOCAL</code> feature lists, and floating 3D <code>[Billboard.&lt;Id&gt;]</code> feature showcase cards + docked 3D sunken progress gauges on full-screen retro backdrops.</li>
        <li><strong>Live WCAG 2.2 AA Brand Contrast Enforcer (<code>RswWcagContrast.hpp</code> &amp; <code>RSW055</code>)</strong>: Added W3C relative luminance validation in <code>instbuild.exe --validate</code> (<code>RSW055</code>) plus a live contrast badge and one-click <strong>Auto-Fix WCAG</strong> button in <code>InstallerStudio.exe</code> that snaps custom brand hex colors into dual-theme accessibility (<code>&ge; 4.5:1</code> vs. <code>#FFFFFF</code> button text and <code>&ge; 3.0:1</code> vs. <code>#15203A</code> Dark Mode cards) while preserving publisher hue.</li>
      </ul>
    </section>

    <section aria-labelledby="v045-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v045-heading" style="margin-top: 0.25rem;">v0.4.5 — Microsoft Azure Artifact Signing (Public Trust Authenticode), ARM64 /dlib SignTool Dispatch &amp; Pre-Signed Template Safety</h2>
        <ul class="feature-list">
          <li><strong>100% Cryptographically Signed Release via Microsoft Azure Artifact Signing</strong>: Every inner suite executable (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code>, <code>msiprism.exe</code>, <code>RaggieSoftHelp.exe</code>), both inner <code>x64</code> &amp; <code>ARM64</code> <code>.msi</code> databases, and all four outer installers (<code>-setup.exe</code> Smart Web Stub, <code>-offline-setup.exe</code> Universal Offline EXE, <code>-x64-setup.exe</code>, and <code>-arm64-setup.exe</code>) are Dual-Layer Authenticode-signed with verified Public Trust identity and RFC 3161 SHA-256 timestamps (<code>http://timestamp.acs.microsoft.com</code>).</li>
          <li><strong>Architecture-Aware <code>/dlib</code> SignTool Dispatch on Windows 11 ARM64</strong>: Upgraded <code>LocateWindowsSdkSignTool</code> in <code>instbuild.exe</code> to inspect the PE <code>IMAGE_FILE_HEADER::Machine</code> of external <code>Azure.CodeSigning.Dlib.dll</code> plugins and automatically invoke the matching <code>x64\\signtool.exe</code> or <code>arm64\\signtool.exe</code>—eliminating <code>0x800700C1</code> (<code>ERROR_BAD_EXE_FORMAT</code>) in-process DLL load failures on ARM64 developer workstations.</li>
          <li><strong>Clean Pre-Signed Bootstrapper Resource Stamping (<code>StripExistingPeCertificates</code>)</strong>: Added <code>ImageEnumerateCertificates</code> / <code>ImageRemoveCertificate</code> (<code>imagehlp.dll</code>) cleanup prior to <code>BeginUpdateResourceW</code> so pre-signed <code>SetupWizard.exe</code> templates never leave dangling <code>IMAGE_DIRECTORY_ENTRY_SECURITY</code> offsets when stamping customer <code>Setup.exe</code> resources, alongside headless CI/CD <code>RSW_SIGN_*</code> environment-variable overrides.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v044-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v044-heading" style="margin-top: 0.25rem;">v0.4.4 — Plain-English Feature Inclusion Tiers Replacing Raw InstallLevel Jargon &amp; Public FAQ</h2>
        <ul class="feature-list">
          <li><strong>Plain-English <code>Included In</code> Feature Tiers (<code>minimal</code>, <code>typical</code>, <code>complete</code>, <code>hidden</code>)</strong>: Replaced cryptic numeric Windows Installer <code>InstallLevel</code> textboxes across <code>InstallerStudio.exe</code> (<code>Features</code> and <code>Components &amp; KeyPaths</code> views) and <code>.rsip</code> manifests with human-friendly setup tiers—compiling cleanly down to standard MSI <code>Feature.Level</code> + <code>INSTALLLEVEL</code> SQL thresholds (<code>1</code>, <code>50</code>, <code>150</code>, and <code>0</code>) while keeping 100% compatibility with explicit numeric overrides.</li>
          <li><strong>Smart Compact / Typical / Complete Runtime Tiering</strong>: Upgraded Minimal / Compact setup in <code>SetupWizard.exe</code> to <code>INSTALLLEVEL=20</code> alongside Typical / Express (<code>INSTALLLEVEL=100</code>) and Custom <code>SelectionTree</code> defaults—laying the direct foundation for customizable Windows 95-style Setup Types (<code>Typical</code>, <code>Compact</code>, <code>Complete</code>, <code>Custom</code>, &amp; <code>[SetupType.*]</code>) in <code>v0.5.0</code>.</li>
          <li><strong>New Public <code>/faq</code> Page</strong>: Added comprehensive <a href="/faq">Frequently Asked Questions</a> covering code signing, why 32-bit <code>x86</code> and <code>IA-64</code> Itanium host OS builds are skipped (and how <code>x64;1033</code> / <code>Arm64;1033</code> avoids the <code>Intel64;1033</code> trap), and how 64-bit <code>instbuild.exe</code> will still package legacy 32-bit VB6 apps.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v043-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v043-heading" style="margin-top: 0.25rem;">v0.4.3 — CPU-Aware Smart Web Stub &amp; Combined Offline Universal Single-EXE (x64 + ARM64)</h2>
        <ul class="feature-list">
          <li><strong>Smart CPU-Aware Web Stub (<code>&lt;Product&gt;-setup.exe</code>)</strong>: Everyday users never have to guess whether their Windows 11 PC has an <code>AMD64</code> (<code>x64</code>) or <code>ARM64</code> processor. Compiled as a zero-dependency static <code>/MT</code> 64-bit <code>x64</code> launcher that starts natively on Intel/AMD PCs and via Prism on Windows 11 ARM64 PCs, it calls <code>IsWow64Process2</code> in under 0.1ms to detect true native silicon, streams <strong>only</strong> the matching native installer over HTTPS (<code>WinHTTP</code>) inside an accessible Dark/Light/High-Contrast progress dialog, verifies its build-stamped <strong>SHA-256</strong> digest (<code>bcrypt.dll</code>), and launches the genuine native installer.</li>
          <li><strong>All-in-One Offline Universal EXE (<code>&lt;Product&gt;-offline-setup.exe</code>)</strong>: Bundles <strong>both</strong> <code>LZMS</code>-compressed <code>x64</code> and <code>ARM64</code> native installers inside a single self-contained portable executable for air-gapped workstations, USB drives, and archival preservation—automatically extracting and executing the host's true native architecture while forwarding all CLI flags (<code>/s</code>, <code>/qn</code>, <code>--extract-msi</code>, <code>INSTALLDIR=...</code>).</li>
          <li><strong>Visual IDE, CLI &amp; Standing Screenshot Automation</strong>: Added <code>BuildUniversal</code> and <code>UniversalDownloadBaseUrl</code> controls to <code>InstallerStudio.exe</code>, <code>--universal</code> to <code>instbuild.exe</code>, strict <code>x64;1033</code> / <code>Arm64;1033</code> <code>PID_TEMPLATE</code> verification in <code>insttests.exe</code>, and <code>export-all-screenshots.ps1</code> so 100% of website screenshots are freshly captured on every release.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v042-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Milestone • November 2026</span>
        <h2 id="v042-heading" style="margin-top: 0.25rem;">v0.4.2 — 12-View Tree-First Visual IDE, Features &amp; RegEdit Registry Trees, Categorized MSI Prism &amp; Inspector Fixes</h2>
        <ul class="feature-list">
          <li><strong>32-Bit ARGB Vector Tree Engine (<code>StudioTreeIcon</code> + <code>ApplyDarkTreeViewTheme</code>)</strong>: Replaced flat <code>LISTBOX</code> and <code>SysListView32</code> overuse across <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 20 anti-aliased premultiplied ARGB vector icons and Windows 11 <code>DarkMode_Explorer</code> / <code>Explorer</code> chevrons.</li>
          <li><strong>Categorized 12-View Sidebar &amp; New Dedicated <code>Features</code> View</strong>: Grouped IDE navigation under <em>Application Information</em>, <em>Setup Architecture</em>, <em>User Interface</em>, and <em>Deployment &amp; Source</em>, and added a dedicated <code>All Features</code> hierarchy view with <code>Move Up</code> / <code>Move Down</code> AST reordering, <code>+ New Feature</code>, <code>+ Sub-Feature</code>, <code>DisallowAbsent</code> core locks, and live <code>Feature Description</code> editing.</li>
          <li><strong>New <code>RegEdit</code>-Style <code>Registry</code> View + <code>.REG</code> File Importer</strong>: Added nested hive/subkey folder navigation across <code>HKEY_CLASSES_ROOT</code>, <code>HKEY_CURRENT_USER</code>, <code>HKEY_LOCAL_MACHINE</code>, <code>HKEY_USERS</code> (<code>HKU</code>), and <code>HKEY_USER_MACHINE_DEFAULT</code> (<code>HKMU</code>) paired with a typed right-hand values tree, per-Feature filtering, and UTF-8 / UTF-16LE <code>.reg</code> script importing.</li>
          <li><strong>Dual-Tree <code>Files &amp; Folders</code>, <code>Shortcuts</code> Tree, Live Component Inspector &amp; Categorized <code>msiprism.exe</code></strong>: Upgraded Destination Contents, Application Runtimes &amp; <code>.MSM</code>, File Associations, and Shortcuts (<code>Start Menu</code> &amp; <code>Desktop</code>) to hierarchical trees, wired live <code>TVN_SELCHANGEDW</code> Component inspection in <code>Components &amp; KeyPaths</code>, and organized <code>msiprism.exe</code> SQL tables into 5 logical schema categories.</li>
        </ul>
      </div>
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
      <span class="eyebrow">Single-Source Offline &amp; Web Manual • Schema v0.5</span>
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
            <tr x-show="!q || 'feature parent subfeature inclusion level minimal typical complete disallowabsent selectiontree'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, plain-English <code>Inclusion</code> (<code>minimal|typical|complete|hidden</code>), <code>Parent</code> hierarchy, <code>DisallowAbsent</code>, and <code>AllowAdvertise</code>.</td>
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
            <tr x-show="!q || 'ui aerowizard glass wizardlayout wizard95 fluentmica fullscreenblue fullscreenteal acme setuptype billboard msidialogpreset'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code>, <code>[SetupType.*]</code>, <code>[Billboard.*]</code> &amp; <code>[MsiDialog.*]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>10 <code>WizardLayout</code> styles (<code>standard|wizard95|wizard97|aerowizard|fluentmica|oneclick|passivetoast|fullscreenblue|fullscreenteal|autorun16x9</code>), <code>SetupTypePreset</code> (<code>express_custom|win95_classic</code>), custom <code>[SetupType.*]</code> &amp; <code>[Billboard.*]</code> cards, plus custom <code>370&times;270</code> SQL dialogs!</td>
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

/**
 * Renders the `/faq` Frequently Asked Questions page covering Microsoft Azure Artifact Signing,
 * why IA-64 and 32-bit x86 host OS builds are skipped, universal CPU-aware downloads,
 * plain-English Feature Inclusion vs. InstallLevel, Setup Types, and licensing.
 */
function renderFaqBody(): string {
  return `
    <section class="hero" aria-labelledby="faq-title">
      <span class="eyebrow">Technical &amp; Consumer Questions Answered • v0.5.0</span>
      <h1 id="faq-title">Frequently Asked Questions</h1>
      <p class="lead">
        Clear, honest answers about Dual-Layer Microsoft Azure Artifact Signing, why our universal installer targets
        64-bit <code>x64</code> and <code>ARM64</code> (skipping extinct <code>IA-64</code> and 32-bit <code>x86</code>
        host OS builds while still supporting legacy 32-bit app payloads), plain-English setup tiers, accessibility, and our
        permanent <code>Community == Premier</code> pledge.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_WEB_SETUP_URL}">Download Installer Studio v0.5.0 (Auto-Detects CPU)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_OFFLINE_UNIV_URL}">Full Offline Installer (x64 + ARM64 in One EXE)</a>
        <a class="btn btn-outline" href="/docs">Read Distributed Manual</a>
        <a class="btn btn-outline" href="/roadmap">View v1.0 Roadmap</a>
      </div>
    </section>

    <section aria-labelledby="faq-downloads-heading">
      <span class="eyebrow">Part 1 • Downloads, Authenticode Signing &amp; Supported Processors</span>
      <h2 id="faq-downloads-heading" style="margin-top: 0.25rem;">Code Signing, CPU Detection &amp; Architecture Choices</h2>
      <div class="card-grid">
        <article id="smartscreen" class="card card-highlight">
          <div>
            <h3>1. Why does Windows SmartScreen still warn on <code>v0.5.0</code> even though the downloads are cryptographically signed?</h3>
            <p>
              <strong>Every <code>v0.5.0</code> installer and inner executable is 100% Authenticode-signed via Microsoft Azure
              Artifact Signing</strong> under verified Public Trust identity (<strong>Michael Ragsdale</strong>, chaining to
              <em>Microsoft Identity Verification Root Certificate Authority 2020</em> with RFC 3161 SHA-256 timestamps from
              <code>http://timestamp.acs.microsoft.com</code> and verified via <code>signtool verify /pa</code>).
            </p>
            <p>
              <strong>Why SmartScreen still prompts temporarily:</strong> Since mid-2024, Microsoft retired automatic Day-1
              SmartScreen bypasses for all newly issued certificates (including EV and cloud HSM keys). Because our Azure
              Artifact Signing identity went live on <strong>November 25, 2026</strong>, Windows Defender SmartScreen displays
              <em>&ldquo;Windows protected your PC&rdquo;</em> until initial download reputation builds and
              <strong>Microsoft Security Intelligence (WDSI)</strong> completes its review of our submitted <code>v0.5.0</code>
              binaries (which are hash-frozen on the CDN during review).
            </p>
            <p>
              <strong>How to verify authenticity before running:</strong> Click <strong>More info</strong> on the SmartScreen
              dialog and confirm Windows displays <strong><code>Publisher: Michael Ragsdale</code></strong> (proving the signed
              binary has not been altered by a single byte) before clicking <strong>Run anyway</strong>.
            </p>
          </div>
        </article>

        <article id="which-download" class="card">
          <div>
            <h3>2. I don't know whether my Windows PC is <code>AMD64</code> (<code>x64</code>) or <code>ARM64</code>. Which file do I download?</h3>
            <p>
              Either of our two universal buttons works on <strong>both</strong> Intel/AMD <code>x64</code> and Snapdragon /
              Windows on ARM <code>ARM64</code> computers automatically:
            </p>
            <ul class="feature-list">
              <li><strong>Smart Web Setup (<code>raggiesoft-installer-studio-setup.exe</code>, ~862 KB)</strong>: Queries <code>IsWow64Process2</code> at launch (piercing Windows 11 Prism emulation in under 0.1ms), downloads <em>only</em> your processor's native signed installer over HTTPS, verifies its SHA-256 checksum, and runs it natively.</li>
              <li><strong>Full Offline Universal Installer (<code>raggiesoft-installer-studio-offline-setup.exe</code>, ~3.9 MB)</strong>: Packs <em>both</em> signed <code>x64</code> and <code>ARM64</code> native installers inside one portable file for offline or air-gapped PCs and USB drives.</li>
            </ul>
          </div>
        </article>

        <article id="why-no-ia64-x86" class="card">
          <div>
            <h3>3. Why are <code>IA-64</code> (Itanium) and 32-bit <code>x86</code> host OS builds skipped?</h3>
            <p>
              Every supported Windows desktop, laptop, and workstation in late 2026 runs a 64-bit operating system kernel
              (<code>IMAGE_FILE_MACHINE_AMD64</code> <code>0x8664</code> or <code>IMAGE_FILE_MACHINE_ARM64</code> <code>0xAA64</code>):
            </p>
            <ul class="feature-list">
              <li><strong><code>IA-64</code> (Intel Itanium) is museum hardware</strong>: Intel ended the Itanium hardware lifecycle in 2021, Microsoft ended mainstream Windows Itanium support over a decade ago, and modern MSVC / Windows 11 SDK compilers removed <code>IA64</code> backend targets completely. Better yet, skipping Itanium lets <code>instbuild.exe</code> strictly guard against one of Windows Installer's oldest traps—never emitting <code>PID_TEMPLATE = Intel64;1033</code> (which meant Itanium and causes <code>msiexec</code> on Intel Core and AMD Ryzen PCs to reject the MSI!), using strictly <code>x64;1033</code> and <code>Arm64;1033</code> instead.</li>
              <li><strong>32-bit <code>x86</code> Windows OS is retired</strong>: Windows 11 has never shipped a 32-bit operating system image, and 32-bit Windows 10 reached formal End of Support in October 2025. Using a pure 64-bit <code>x64</code> outer universal stub avoids relying on optional 32-bit <code>WOW64</code> subsystems on hardened Windows images while booting seamlessly under Windows 11 Prism on ARM64.</li>
            </ul>
          </div>
        </article>

        <article id="legacy-32bit-apps" class="card">
          <div>
            <h3>4. Can a 64-bit Installer Studio still package legacy 32-bit applications (such as classic Visual Basic 6.0 programs)?</h3>
            <p>
              <strong>Yes!</strong> Skipping 32-bit <em>host OS</em> builds for our IDE and compiler does not prevent a 64-bit
              <code>instbuild.exe</code> from packaging legacy 32-bit payload applications that run on Windows 11 <code>x64</code>
              and <code>ARM64</code> via <code>SysWOW64</code>. Our upcoming <code>v0.8.0</code> milestone includes a dedicated
              <strong>Visual Basic 6.0 (<code>.vbp</code>) Importer</strong> (built for our own pre-AI utility <em>StoreTrainer</em>)
              that emits standard 32-bit payload MSI metadata (<code>Intel;1033</code> routing to <code>Program Files (x86)</code>)
              and zero-elevation <strong>Reg-Free COM</strong> side-by-side manifests—all from the native 64-bit IDE.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="faq-authoring-heading">
      <span class="eyebrow">Part 2 • Setup Types, Inclusion Tiers &amp; Accessibility</span>
      <h2 id="faq-authoring-heading" style="margin-top: 0.25rem;">Plain-English Authoring, Dark Mode &amp; Zero Dependencies</h2>
      <div class="card-grid">
        <article id="install-level" class="card">
          <div>
            <h3>5. What is "Included In" (<code>Minimal</code>, <code>Typical</code>, <code>Complete</code>) vs. Windows Installer <code>InstallLevel</code>?</h3>
            <p>
              Raw Windows Installer databases use an obscure integer column called <code>Feature.Level</code> compared against an
              <code>INSTALLLEVEL</code> property—forcing authors to guess what numbers like <code>1</code>, <code>3</code>,
              <code>100</code>, or <code>200</code> actually do.
            </p>
            <p>
              Starting in <strong><code>v0.4.4</code></strong>, RaggieSoft Installer Studio replaces raw numbers in the IDE with
              plain-English <strong>Included In</strong> tiers: <strong>Minimal / Compact &amp; All Setups</strong>
              (<code>minimal</code>), <strong>Typical / Express &amp; Complete</strong> (<code>typical</code>),
              <strong>Complete Only / Optional in Custom</strong> (<code>complete</code>), and <strong>Hidden</strong>
              (<code>hidden</code>). And in <strong><code>v0.5.0</code></strong>, authors will also be able to pick classic
              Windows 95-style Setup Types (<strong>Typical</strong>, <strong>Compact</strong>, <strong>Complete</strong>,
              <strong>Custom</strong>) or define their own named <code>[SetupType.*]</code> presets!
            </p>
          </div>
        </article>

        <article id="zero-dependencies" class="card">
          <div>
            <h3>6. Does Installer Studio require <code>.NET</code>, <code>WebView2</code>, Java, or Electron on my PC or my users' PCs?</h3>
            <p>
              <strong>Zero.</strong> All five binaries (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>,
              <code>SetupWizard.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code>) are compiled as static
              <code>/MT</code> native Win32 C++20 executables calling only stock DLLs built into every copy of Windows 11
              (<code>msi.dll</code>, <code>cabinet.dll</code>, <code>gdiplus.dll</code>, <code>winhttp.dll</code>, and
              <code>Msftedit.dll</code>). If <em>your</em> packaged app needs <code>.NET</code>, <code>WebView2</code>, or
              <code>VC++</code>, declare a <code>[Prerequisite.*]</code> block and <code>SetupWizard.exe</code> will install it
              automatically before your MSI runs.
            </p>
          </div>
        </article>

        <article id="dark-mode-a11y" class="card">
          <div>
            <h3>7. How does Dark Mode, High Contrast, and Screen-Reader Accessibility work inside <code>Setup.exe</code>?</h3>
            <p>
              Stock Windows Installer internal dialogs still paint 1990s blinding white GDI headers even when Windows 11 is in
              Dark Mode. Our <code>SetupWizard.exe</code> external UI subclasses real Win32 push buttons, option cards, checkboxes,
              and 32-bit ARGB <code>SelectionTree</code> controls so native UI Automation roles remain intact for
              <strong>Narrator</strong>, <strong>NVDA</strong>, and <strong>JAWS</strong>, flips between Light and Dark Mode live
              in under 16ms on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code>, honors Windows Contrast Themes
              (<code>SPI_GETHIGHCONTRAST</code>), and generates HTML5 <strong>VPAT 2.5</strong> reports via <code>--emit-vpat</code>.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="faq-enterprise-heading">
      <span class="eyebrow">Part 3 • Licensing, Enterprise IT &amp; AI Coding Agents</span>
      <h2 id="faq-enterprise-heading" style="margin-top: 0.25rem;">Community == Premier Parity, Silent Deployment &amp; AI Specs</h2>
      <div class="card-grid">
        <article id="community-parity" class="card">
          <div>
            <h3>8. Does Community Edition really have 100% feature parity with Premier—with zero watermarks?</h3>
            <p>
              <strong>Yes, permanently.</strong> Community Edition unlocks every single MSI table, Pre-MSI Runtime Prerequisite,
              64-bit <code>.MSM</code> Merge Module weaver, Universal Single-EXE packager, AeroWizard, VPAT 2.5 generator, and CLI
              command with zero locked views and zero visible watermarks. Every compiled <code>Setup.exe</code> and
              <code>Product.msi</code> carries 100% your own <code>Manufacturer</code> and <code>ProductName</code> in
              <code>VERSIONINFO</code>.
            </p>
          </div>
        </article>

        <article id="enterprise-msi" class="card">
          <div>
            <h3>9. Can IT administrators deploy silently or extract the standalone <code>.msi</code> for Intune / Group Policy?</h3>
            <p>
              Yes! Every generated installer is backed by a genuine relational Windows Installer database. Run
              <code>&lt;App&gt;-setup.exe /s INSTALLDIR="C:\\Apps\\MyApp"</code> for completely silent prerequisite + MSI
              installation (with configurable <code>SilentRebootExitCode</code>), or run
              <code>&lt;App&gt;-setup.exe --extract-msi C:\\Temp\\Out</code> (works on both per-arch and Universal Offline EXEs!)
              to extract the signed <code>.msi</code> alongside <code>.mst</code> Transforms and <code>.msp</code> Patches.
            </p>
          </div>
        </article>

        <article id="ai-agents-v1" class="card">
          <div>
            <h3>10. How do AI coding agents use Installer Studio—and what defines <code>v1.0.0 GA</code>?</h3>
            <p>
              <code>.rsip</code> projects and <code>.rsis</code> suites are diff-friendly plain-text INI manifests whose comments
              and <code>@include</code> headers survive GUI saves byte-for-byte. Coding agents read our compiler-emitted
              <a href="/llms-full.txt">/llms-full.txt</a> and <a href="/SKILL.md">SKILL.md</a> specs and lint manifests in under a
              millisecond via <code>instbuild.exe --validate --diagnostics=json</code>. Version <strong><code>1.0.0 GA</code></strong>
              will ship once 100% of RaggieSoft's own Windows desktop apps, classic VB6 tools, interactive novels, and audio
              archives are packaged, signed, and updated exclusively with Installer Studio.
            </p>
          </div>
        </article>
      </div>
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
      ${renderAzureSigningAssuranceNotice()}
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
            <h3>2. Dual-Layer Authenticode &amp; Azure Artifact Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code> (or <code>RSW_SIGN_ENABLED=1</code>), <code>instbuild.exe</code> signs the inner
              <code>Product.msi</code> first, strips any template certificate table cleanly via <code>ImageRemoveCertificate</code>, embeds
              the signed database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—automatically
              matching <code>x64</code>/<code>ARM64</code> <code>signtool.exe</code> to <code>Azure.CodeSigning.Dlib.dll</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>3. Prism-Piercing OS &amp; Silicon Verification</h3>
            <p>
              Calls <code>RtlGetVersion</code> inside <code>ntdll.dll</code> (bypassing <code>GetVersionEx</code> manifest shims) and <code>IsWow64Process2</code>
              to detect true ARM64 vs. x64 silicon even under Windows 11 Prism emulation, plus SHA-256 <code>bcrypt.dll</code> payload verification.
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
    seoTitle: 'RaggieSoft Studio — Installer, Launcher & Showcase Suite',
    seoDescription:
      'Zero-dependency Windows developer suite: Installer Studio v0.5.0 (signed x64/ARM64), plus upcoming Launcher Studio and Showcase Studio IDEs.',
    renderBody: renderHomeBody
  },
  {
    path: '/suite',
    navLabel: 'Studio Suite',
    seoTitle: 'Product Suite — Installer, Launcher & Showcase | RaggieSoft',
    seoDescription:
      'Explore the RaggieSoft Studio developer family: Installer Studio v0.5.0, upcoming Launcher Studio, Showcase Studio, and Accessibility Studio.',
    renderBody: renderSuiteBody
  },
  {
    path: '/screenshots',
    navLabel: 'Visual Tour',
    seoTitle: 'Visual Tour & Screenshots | RaggieSoft Installer Studio',
    seoDescription:
      'Explore full-size Windows 11 screenshots of RaggieSoft Installer Studio v0.5.0: 10 Wizard Styles, ACME Teal & Cobalt washes, and IDE trees.',
    renderBody: renderScreenshotsBody
  },
  {
    path: '/roadmap',
    navLabel: 'Roadmap',
    seoTitle: 'Public Engineering Roadmap | RaggieSoft Installer Studio',
    seoDescription:
      'Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.5.0 through v1.0 GA across Windows 11 x64 and ARM64.',
    renderBody: renderRoadmapBody
  },
  {
    path: '/docs',
    navLabel: 'Docs & AI Spec',
    seoTitle: 'Documentation & .rsip v0.5 Spec | Installer Studio',
    seoDescription:
      'Searchable .rsip v0.5 project and .rsis suite reference covering 10 Wizard Styles, Setup Types, Features, Registry, Runtimes, and /llms.txt.',
    renderBody: renderDocsBody
  },
  {
    path: '/faq',
    navLabel: 'FAQ',
    seoTitle: 'FAQ — Azure Signing, ARM64/x64 & Setup Types | RaggieSoft',
    seoDescription:
      'Answers on Microsoft Azure Artifact Signing, why IA-64 and 32-bit x86 host builds are skipped, Setup Types, and Community == Premier parity.',
    renderBody: renderFaqBody
  },
  {
    path: '/changelog',
    navLabel: 'Version History',
    seoTitle: 'Version History & Changelog (v0.5.0) | Installer Studio',
    seoDescription:
      'Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.5.0 across Windows 11 x64 and ARM64.',
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
      'Static /MT Win32 C++20 compilation, dual-layer Azure Artifact Signing, offline CI builds, and our permanent zero-telemetry, zero-crypto pledge.',
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
            <a class="btn btn-outline" href="/faq">Browse FAQ</a>
          </div>
        </section>
      `;

      const html = `
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Studio</span>
          <span class="brand-sub">Developer &amp; Packaging Suite • Home of Installer Studio v0.5.0</span>
        </a>

        <button
          type="button"
          class="rs-mobile-header-toggle studio-mobile-toggle"
          data-rs-mobile-toggle
          data-open-label="Open RaggieSoft Studio and RaggieSoft network menu"
          data-close-label="Close RaggieSoft Studio and RaggieSoft network menu"
          aria-expanded="false"
          aria-controls="header-navigation-panel"
          aria-label="Open RaggieSoft Studio and RaggieSoft network menu"
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
              <li><a class="nav-link" href="/accessibility-studio">Accessibility Studio</a></li>
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
          <a href="/suite">Studio Suite Lineup</a>
          <a href="/accessibility-studio">Accessibility Studio (v1.0.0)</a>
          <a href="/screenshots">Visual Tour &amp; Screenshots</a>
          <a href="/roadmap">Public Roadmap</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/faq">Frequently Asked Questions</a>
          <a href="/changelog">Version History (v0.5.0)</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
          <a href="/ROADMAP.md">/ROADMAP.md</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="${GITHUB_REPO_URL}">GitHub Repository</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
          <a href="https://raggiesoft.com/about/privacy">Privacy Policy</a>
          <a href="https://raggiesoft.com/about/terms">Terms of Service</a>
          <a href="https://raggiesoft.com/about/ai-disclaimer">AI &amp; Creative Process | RaggieSoft Governance</a>
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
