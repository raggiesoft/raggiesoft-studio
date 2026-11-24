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
 *     public **Project Announcement & Open Technical Preview (`v0.4.1`)**:
 *       1. `/`              — Vision Announcement, Preview Downloads, Live Win32
 *                             Screenshot Gallery, 3-Tab Split Preview, 5-Binary
 *                             Suite Spotlight, & Open Engineering Summary
 *       2. `/roadmap`       — Full Human-Readable Public Engineering Roadmap
 *                             (`v0.1.0` -> `v1.0.0 GA`, Phases B through G)
 *       3. `/docs`          — Searchable `.rsip` v0.4 / `.rsis` / `.rsii` schema
 *                             reference & AI coding agent workflow (`/llms.txt`)
 *       4. `/changelog`     — Public Version History (`v0.1.0` -> `v0.4.1`)
 *       5. `/vpat`          — Accessibility & Compliance Center (WCAG 2.2 AA,
 *                             ADA Title II & Section 508 + Live VPAT 2.5 HTML5)
 *       6. `/accessibility` — Canonical alias view for `/vpat`
 *       7. `/security`      — Static `/MT` SBOM posture, Dual-Layer Authenticode
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

const ASSET_BASE =
  'https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio';
const DOWNLOAD_X64_URL = `${ASSET_BASE}/raggiesoft-installer-studio-x64-setup.exe`;
const DOWNLOAD_ARM64_URL = `${ASSET_BASE}/raggiesoft-installer-studio-arm64-setup.exe`;
const SHOT_BASE = `${ASSET_BASE}/screenshots`;
const GITHUB_REPO_URL = 'https://github.com/raggiesoft/installer-studio';
const LIVE_VPAT_URL = '/vpat/raggiesoft-installer-studio-vpat-2.5.html';

const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

/**
 * Renders the live native Win32 C++20 screenshot showcase captured directly from the `v0.4.0` binaries.
 */
function renderLiveScreenshotShowcase(): string {
  return `
    <section aria-labelledby="screenshots-heading">
      <span class="eyebrow">Real Native Win32 C++20 Captures • Windows 11 Dark &amp; Light Mode</span>
      <h2 id="screenshots-heading">See RaggieSoft Installer Studio v0.4.1 in Action</h2>
      <p>
        Every window below is rendered natively at runtime by static <code>/MT</code> Win32 C++20 executables using stock Windows 11
        system libraries (<code>gdiplus.dll</code>, <code>comctl32.dll</code>, <code>Msftedit.dll</code>, and <code>msi.dll</code>)—with
        custom Dark Mode push-button, checkbox, and <code>SysListView32</code> column-header subclasses plus live
        <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Light &harr; Dark hot-swapping.
      </p>
      <div class="shot-grid">
        <!-- Screenshot 1: Visual IDE Destination Computer Tree & Dark-Header ListView -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/ide-destination-folders.png"
            alt="RaggieSoft Installer Studio Visual IDE showing the hierarchical Destination Computer folder tree on the left and Dark Mode payload component grid on the right."
            loading="lazy"
          />
          <figcaption>
            <strong>1. Visual IDE — Destination Computer &amp; Components</strong>
            Map payloads to 9 standard Windows Installer folder roots with automatic deterministic SHA-1 UUIDv5 Component GUIDs and dark-themed report headers.
          </figcaption>
        </figure>

        <!-- Screenshot 2: Visual IDE Pre-MSI Runtimes & .MSM Merge Modules -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/ide-runtimes-msm.png"
            alt="RaggieSoft Installer Studio View 4 showing Pre-MSI Runtime Prerequisites, delivery mode selector, custom reboot exit codes, and 64-bit Merge Module controls."
            loading="lazy"
          />
          <figcaption>
            <strong>2. Visual IDE — Pre-MSI Runtimes &amp; .MSM Merge Modules</strong>
            Stage unlimited <code>.NET</code>, <code>WebView2</code>, <code>VC++</code>, or custom runtimes (<code>WinHTTP</code> download, <code>LZMS</code> embed, or <code>Redist\\</code>) plus 64-bit <code>.msm</code> modules.
          </figcaption>
        </figure>

        <!-- Screenshot 3: Visual IDE Live GDI+ Wizard Designer -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/ide-wizard-designer.png"
            alt="RaggieSoft Installer Studio C++ Wizard Designer previewing the Windows Installer SelectionTree step live on a GDI+ canvas."
            loading="lazy"
          />
          <figcaption>
            <strong>3. Visual IDE — Live GDI+ C++ Wizard Designer</strong>
            Customize accent palettes, icons, and <code>aerowizard</code>, <code>standard</code> Glass, or <code>autorun16x9</code> layouts with instant live preview.
          </figcaption>
        </figure>

        <!-- Screenshot 4: SetupWizard.exe Accessible Option Cards & Dark Push Buttons -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/setupwizard-setup-type.png"
            alt="SetupWizard.exe in Windows 11 Dark Mode displaying Express, Compact, and Custom Setup option cards alongside slate-navy Back and Cancel buttons and a Royal Cobalt Next button."
            loading="lazy"
          />
          <figcaption>
            <strong>4. SetupWizard.exe — Dark Mode Cards &amp; Custom-Subclassed Buttons</strong>
            Genuine <code>BS_AUTORADIOBUTTON</code> cards and dark-themed <code>&lt; Back</code> / Royal Cobalt <code>Next &gt;</code> / <code>Cancel</code> buttons with full UI Automation support.
          </figcaption>
        </figure>

        <!-- Screenshot 5: Live OS Light Mode Hot-Swap via WM_SETTINGCHANGE(ImmersiveColorSet) -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/setupwizard-setup-type-light.png"
            alt="The exact same open SetupWizard.exe window after receiving WM_SETTINGCHANGE ImmmersiveColorSet, dynamically flipped into crisp Windows 11 Light Mode without restarting."
            loading="lazy"
          />
          <figcaption>
            <strong>5. Live OS Theme Hot-Swap (<code>ImmersiveColorSet</code>)</strong>
            Toggle Windows 11 between Dark Mode, Light Mode, or High Contrast mid-install and the open wizard flips palettes live in <code>&lt; 16ms</code> without restarting.
          </figcaption>
        </figure>

        <!-- Screenshot 6: SetupWizard.exe Authentic MSI SelectionTree -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/setupwizard-selection-tree.png"
            alt="SetupWizard.exe Custom Features page showing the Windows Installer SelectionTree with 32-bit ARGB drive state icons and live disk space cost card."
            loading="lazy"
          />
          <figcaption>
            <strong>6. SetupWizard.exe — Authentic MSI SelectionTree</strong>
            Reads embedded <code>Feature</code> tables directly from <code>Product.msi</code>, rendering 32-bit ARGB split-dropdown state icons and live per-feature byte costs.
          </figcaption>
        </figure>

        <!-- Screenshot 7: Native C++20 RaggieSoftHelp.exe Offline Viewer -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/helpviewer-search.png"
            alt="RaggieSoftHelp.exe native C++20 offline Help Viewer showing full-text search results, dark-mode checkbox, dark buttons, and formatted documentation reader."
            loading="lazy"
          />
          <figcaption>
            <strong>7. RaggieSoftHelp.exe — Zero-Dependency C++20 Help Viewer</strong>
            Press <code>F1</code> in any IDE view to jump straight to offline HTML5 topics via Named Pipe IPC—with zero <code>.NET</code> or <code>WebView2</code> dependencies.
          </figcaption>
        </figure>

        <!-- Screenshot 8: RaggieSoft MSI Prism 64-Bit SQL Inspector -->
        <figure class="shot-card">
          <img
            src="${SHOT_BASE}/msiprism-sql-inspector.png"
            alt="RaggieSoft MSI Prism opening raggiesoft-installer-studio-arm64.msi and displaying all 44 SQL tables alongside Feature rows in Dark Mode."
            loading="lazy"
          />
          <figcaption>
            <strong>8. msiprism.exe — Native 64-Bit Dark Mode SQL Inspector</strong>
            Inspect relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> packages, run ICE80 audits, and diff transforms or patches.
          </figcaption>
        </figure>
      </div>
    </section>
  `;
}

/**
 * Renders the honest Engineering Vision & Active Technical Preview Roadmap section.
 */
function renderVisionAndRoadmapSection(): string {
  return `
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">Why I'm Building This • Open Engineering Roadmap</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">What RaggieSoft Installer Studio Aims to Solve</h2>
      <p>
        Every Windows installer ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code> on every copy of Windows.
        Yet developers are routinely forced to choose between multi-gigabyte legacy toolchains, steep XML boilerplate,
        unlabeled non-accessible wizard forms, or opaque project files that fight Git version control and AI coding agents.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> is an active, open-source MIT engineering effort to build an original,
        zero-dependency native Win32 C++20 packaging suite from the ground up—combining visual convenience with clean plain-text
        <code>.rsip</code> manifests, first-class AI specifications, and 100% WCAG 2.2 AA accessibility.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.4.1</code>)</h3>
            <ul class="feature-list">
              <li><strong>100% Dark-Mode-Complete Win32 UI + Live OS Theme Hot-Swapping</strong>: Custom-subclassed push buttons, checkboxes, <code>SysListView32</code> headers, and RichEdit panels that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> without restarting</li>
              <li><strong>10-View Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong> with 5 native <strong>AeroWizards</strong>—with <strong>Community Edition maintaining 100% feature parity with Premier</strong></li>
              <li><strong>Zero-Dependency Native C++20 Help System (<code>RaggieSoftHelp.exe</code>)</strong>: Pluggable <code>module.rshm.json</code> offline documentation viewer with Contents, Index, Search, and instant Named Pipe <code>F1</code> navigation</li>
              <li><strong>Authentic MSI <code>SelectionTree</code> &amp; Pre-MSI Runtime Engine</strong>: 32-bit ARGB split-icon feature tree in <code>Setup.exe</code>, unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching, and 64-bit <code>.MSM</code> Merge Module merging</li>
              <li><strong>Windows <code>LZMS</code> Solid Compression + <code>msiprism.exe</code></strong> 64-bit Dark Mode SQL inspector + <code>instbuild.exe --emit-ai-spec</code> &amp; <code>--emit-vpat</code></li>
            </ul>
          </div>
          <a class="btn btn-outline" href="/changelog">Read Full v0.1 &rarr; v0.4.1 Version History</a>
        </article>
        <article class="card">
          <div>
            <h3>Next Milestones on the Workbench (Phases B–G)</h3>
            <ul class="feature-list">
              <li><strong>Authenticode Signing UX, <code>.NET 11</code> Presets &amp; Universal Single-EXE</strong>: Windows Cert Store / Azure Artifact Signing tester, curated <code>.NET 11</code> + <code>.NET 10 LTS</code> detection, dual-arch <code>universal</code> <code>Setup.exe</code>, and optional <code>Engine = native</code> direct extraction</li>
              <li><strong>Skinning (<code>.rswskin</code>, <code>Wizard95</code> &amp; True <code>AeroWizard</code>), Custom Dialogs &amp; <code>RsDialog</code> Scripting</strong>: WYSIWYG custom dialogs paired with procedural <code>Rs*()</code> functions and <code>.rswpak</code> Web Media Blocks</li>
              <li><strong>Setup Capture ("Repackager") + Disposable Windows Sandbox (<code>.wsb</code>)</strong>: Snapshot-diff legacy <code>.exe</code> installers into clean <code>.rsip</code> + <code>.msi</code> + <code>.mst</code> packages inside Windows 11 Pro Sandbox</li>
              <li><strong>Open-Format Import Wizard (Including VB6 <code>.vbp</code> Reg-Free COM!) &amp; VS <code>.vsix</code></strong>: Import from <code>.msi</code>/<code>.msm</code>, Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code>, and XML/INI manifests—followed by White-Label <code>RsUpdate.exe</code> Auto-Updater, native <code>.MSIX</code>/<code>.MSIXBUNDLE</code>, and SPDX/CycloneDX <code>--emit-sbom</code></li>
            </ul>
          </div>
          <a class="btn btn-primary" href="/roadmap">Read Full Public Roadmap (Phases B–G)</a>
        </article>
      </div>
    </section>
  `;
}

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.4.1) • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        An original, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
        Design projects visually with modern <strong>AeroWizards</strong>, Destination Computer folder trees, Dual C++ &amp;
        <code>MSI.DLL</code> Dialog Designers, and a built-in native C++ <code>F1</code> Help Viewer—or let coding agents author
        comment-preserving <code>.rsip</code> manifests from scratch into real <code>.msi</code>, <code>.msm</code>,
        <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA <code>Setup.exe</code> installers.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Technical Preview v0.4.1 (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Native ARM64 Preview</a>
        <a class="btn btn-outline" href="/roadmap">Explore Public Roadmap</a>
        <a class="btn btn-outline" href="/changelog">Version History (v0.4.1)</a>
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

    ${renderLiveScreenshotShowcase()}

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
            <h3><code>InstallerStudio.exe</code> — 10-View C++20 Visual IDE</h3>
            <p>
              Features 5 guided Win32 <strong>AeroWizards</strong>, a hierarchical Destination Computer folder tree,
              Setup Design (Features &rarr; Components &rarr; KeyPaths), Pre-MSI Runtimes &amp; <code>.MSM</code> modules,
              Dual Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip v0.4 Schema</a>
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
              Inspect relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> databases in 64-bit Dark Mode
              with <strong>MSI Prism</strong>, and browse searchable offline HTML5 documentation in under 5ms via Named Pipe <code>F1</code> IPC
              inside <strong>RaggieSoft Help Viewer</strong>.
            </p>
          </div>
          <a class="btn btn-outline" href="/changelog">Inspect v0.4.1 Release Notes</a>
        </article>
      </div>
    </section>
  `;
}

/**
 * Renders the `/roadmap` Public Engineering Roadmap page (`v0.1.0` -> `v1.0.0 GA`).
 * 100-Level Progressive Enhancement Lesson:
 *   All 7 milestone sections are pre-rendered into semantic static HTML5 so search engines,
 *   screen readers, and visitors with JavaScript disabled can read 100% of the roadmap.
 *   When Alpine.js hydrates in the browser, `phaseFilter` lets readers focus on a single
 *   engineering phase (`shipped`, `b`, `c`, `d`, `e`, `f`, or `g`) with zero page reloads!
 */
function renderRoadmapBody(): string {
  return `
    <section class="hero" aria-labelledby="roadmap-page-title">
      <span class="eyebrow">Open Engineering Plan • v0.4.1 Shipped &rarr; v1.0.0 GA</span>
      <h1 id="roadmap-page-title">Public Engineering Roadmap</h1>
      <p class="lead">
        <strong>RaggieSoft Installer Studio</strong> is built in the open as original, zero-dependency native Win32 C++20
        software for Windows 11 <code>x64</code> and <code>ARM64</code>. Below is our complete human-readable roadmap—from
        what ships today in <code>v0.4.1</code> through General Availability (<code>v1.0.0 GA</code>)—guided by a permanent
        pledge that <strong>Community Edition maintains 100% technical feature parity with Premier Edition</strong>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${GITHUB_REPO_URL}/blob/main/ROADMAP.md">View ROADMAP.md on GitHub</a>
        <a class="btn btn-outline" href="/ROADMAP.md">Open Raw /ROADMAP.md</a>
        <a class="btn btn-outline" href="/changelog">View Shipped Changelog (v0.4.1)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_X64_URL}">Download v0.4.1 Preview</a>
      </div>
    </section>

    <section aria-labelledby="roadmap-matrix-heading">
      <span class="eyebrow">At-a-Glance Schedule</span>
      <h2 id="roadmap-matrix-heading">Milestone Overview Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>RaggieSoft Installer Studio Milestones from Technical Preview to v1.0.0 GA</caption>
          <thead>
            <tr>
              <th scope="col">Phase / Target</th>
              <th scope="col">Primary Focus</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>v0.1.0</code> – <code>v0.4.1</code></th>
              <td>Core C++20 compiler, 10-View Visual IDE, MSI <code>SelectionTree</code>, Pre-MSI Runtimes, 64-bit <code>.MSM</code>, native <code>F1</code> Help Viewer, Dark Mode push buttons, &amp; live <code>ImmersiveColorSet</code> hot-swapping</td>
              <td><span class="status-pill status-shipped">Shipped</span></td>
            </tr>
            <tr>
              <th scope="row">Phase B (<code>v0.5.0</code>)</th>
              <td>Authenticode Signing Studio, <code>.rswskin</code> skinning (<code>Wizard95</code> &amp; circular <code>AeroWizard</code>), Custom Dialogs + <code>RsDialog</code> (<code>Rs*()</code>) scripting, <code>.rswpak</code> Web Media Blocks, <code>.NET 11</code> presets, &amp; Universal Single-EXE</td>
              <td><span class="status-pill status-next">Next Up</span></td>
            </tr>
            <tr>
              <th scope="row">Phase C (<code>v0.6.0</code>)</th>
              <td>Snapshot-Diff Setup Capture ("Repackager") &amp; one-click disposable Windows 11 Pro Sandbox (<code>.wsb</code>) capture</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase D (<code>v0.7.0</code>)</th>
              <td>Open-Format Import Wizard (<code>.msi</code>/<code>.msm</code>, Visual Studio <code>.slnx</code>/<code>.csproj</code>, VB6 <code>.vbp</code> Reg-Free COM, XML/INI) &amp; Visual Studio <code>.vsix</code> extension</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase E (<code>v0.8.0</code>)</th>
              <td>Windows Services, safe <code>PATH</code> / Firewall / Scheduled Tasks, JSON/XML/INI Config Patchers, &amp; Windows Restart Manager (<code>Rstrtmgr.dll</code>)</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase F (<code>v0.9.0</code>)</th>
              <td>White-label <code>RsUpdate.exe</code> Auto-Updater, guided <code>.MSP</code> servicing (<code>--plan-update</code>), native <code>.MSIX</code>/<code>.MSIXBUNDLE</code>, <code>I18N</code> + RTL, &amp; SPDX/CycloneDX <code>--emit-sbom</code></td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
            <tr>
              <th scope="row">Phase G (<code>v1.0.0 GA</code>)</th>
              <td>Turnkey GitHub Actions &amp; Azure DevOps tasks + 100% RaggieSoft production cutover across all apps, interactive books, and supporter audio archives</td>
              <td><span class="status-pill">Planned</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <div x-data="{ phaseFilter: 'all' }">
      <section aria-label="Filter Roadmap Phases" style="margin-bottom: 1.5rem;">
        <div class="btn-row" role="group" aria-label="Show all phases or focus on one milestone">
          <button type="button" class="btn" :class="phaseFilter === 'all' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'all'">All Phases</button>
          <button type="button" class="btn" :class="phaseFilter === 'shipped' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'shipped'">Shipped (v0.1–v0.4.1)</button>
          <button type="button" class="btn" :class="phaseFilter === 'b' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'b'">Phase B (v0.5)</button>
          <button type="button" class="btn" :class="phaseFilter === 'c' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'c'">Phase C (v0.6)</button>
          <button type="button" class="btn" :class="phaseFilter === 'd' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'd'">Phase D (v0.7)</button>
          <button type="button" class="btn" :class="phaseFilter === 'e' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'e'">Phase E (v0.8)</button>
          <button type="button" class="btn" :class="phaseFilter === 'f' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'f'">Phase F (v0.9)</button>
          <button type="button" class="btn" :class="phaseFilter === 'g' ? 'btn-primary' : 'btn-outline'" @click="phaseFilter = 'g'">Phase G (v1.0 GA)</button>
        </div>
      </section>

      <!-- Shipped Foundation -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'shipped'" aria-labelledby="phase-shipped-heading" class="calc-panel">
        <span class="status-pill status-shipped">Shipped Today • v0.1.0 – v0.4.1</span>
        <h2 id="phase-shipped-heading" style="margin-top: 0.5rem;">Foundation Shipped in Technical Preview</h2>
        <ul class="feature-list">
          <li><strong>Five Native Static <code>/MT</code> C++20 Executables (<code>x64</code> &amp; <code>ARM64</code>)</strong>: <code>InstallerStudio.exe</code> (10-view visual IDE + 5 guided AeroWizards), <code>instbuild.exe</code> (headless CLI compiler, JSON linter, AI spec &amp; VPAT 2.5 generator), <code>SetupWizard.exe</code> (accessible runtime bootstrapper), <code>msiprism.exe</code> (64-bit Dark Mode SQL inspector), and <code>RaggieSoftHelp.exe</code> (offline HTML5 documentation viewer with Named Pipe <code>F1</code> IPC).</li>
          <li><strong>Complete Win32 Dark Mode &amp; Live OS Palette Hot-Swapping (<code>v0.4.1</code>)</strong>: Custom-subclassed push buttons (<code>&lt; Back</code>, Royal Cobalt <code>Next &gt;</code>, <code>Cancel</code>), checkboxes, <code>SysListView32</code> headers, and ComboBoxes that flip live on <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> (including automatic day/night schedulers like Auto Dark Mode) without restarting.</li>
          <li><strong>Pre-MSI Runtimes, 64-Bit <code>.MSM</code> Merging &amp; Authentic <code>SelectionTree</code> (<code>v0.3.0</code>)</strong>: Unlimited <code>[Prerequisite.*]</code> runtimes with custom reboot-code latching before <code>msiexec</code>, pure 64-bit <code>.msm</code> SQL + CAB merging, <code>COMPRESS_ALGORITHM_LZMS</code> solid compression, and 32-bit ARGB split-dropdown feature trees.</li>
        </ul>
        <a class="btn btn-outline" href="/changelog">Read Detailed v0.1.0 &rarr; v0.4.1 Release Notes</a>
      </section>

      <!-- Phase B -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'b'" aria-labelledby="phase-b-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill status-next">Phase B • Target v0.5.0 (Next Up)</span>
          <h2 id="phase-b-heading" style="margin-top: 0.5rem;">Signing Studio, Skinning (<code>Wizard95</code> &amp; True <code>AeroWizard</code>), Custom Dialogs, <code>RsDialog</code> Scripting, <code>.NET 11</code> &amp; Universal Single-EXE</h2>
          <ul class="feature-list">
            <li><strong>First-Class Authenticode Signing UX</strong>: Interactive Windows Certificate Store picker (<code>CryptUIDlgSelectCertificateFromStore</code>), local <code>.pfx</code> / hardware token configuration, Azure Artifact Signing (<code>dlib</code> + <code>MetadataJson</code>) tester, and one-click Dual-Layer Signature Verifier (<code>WinVerifyTrust</code> on both inner <code>Product.msi</code> and outer <code>Setup.exe</code>).</li>
            <li><strong>Installer Skinning Engine (<code>.rswskin</code>) + <code>Wizard95</code> &amp; Circular <code>AeroWizard</code></strong>: Custom palettes with live WCAG contrast checks, a retro Windows 95 / NT 4.0 3D beveled mode (<code>WizardLayout = wizard95</code> with <code>164&times;314</code> left bitmap rail), and a pixel-perfect vector <code>30&times;30</code> circular <code>&larr;</code> AeroWizard command-bar button.</li>
            <li><strong>WYSIWYG Custom Dialog Designer &amp; <code>RsDialog</code> (<code>Rs*()</code>) Scripting</strong>: Visual drag-and-drop canvas for arbitrary <code>[Dialog.&lt;Id&gt;]</code> wizard pages paired with <code>.rssc</code> event hooks and our procedural <strong><code>RsDialog</code></strong> standard library (<code>RsWelcome()</code>, <code>RsLicense()</code>, <code>RsSetupType()</code>, <code>RsFeatureTree()</code>, <code>RsAskDestPath()</code>, <code>RsAskText()</code>, <code>RsAskOptions()</code>, <code>RsStartCopy()</code>, <code>RsFinish()</code>, <code>RsFinishReboot()</code>).</li>
            <li><strong>Optional Web Media Blocks (<code>.rswpak</code>)</strong>: Split multi-gigabyte optional features into external LZMS-compressed <code>.rswpak</code> blocks downloaded on demand via <code>WinHTTP</code> with SHA-256 verification.</li>
            <li><strong>First-Class <code>.NET 11</code> (<code>net11.0</code> / <code>net11.0-windows</code>) Runtime Presets</strong>: Curated <code>DotNet11Desktop</code>, <code>DotNet11AspNet</code>, and <code>DotNet11Runtime</code> / <code>DotNet10Runtime</code> presets alongside <code>.NET 10.0 LTS</code>, verifying native <code>arm64</code> and <code>x64</code>-on-ARM64 runtimes in <code>&lt; 1ms</code>.</li>
            <li><strong>Universal Dual-Architecture (<code>x64</code> + <code>ARM64</code>) Single-EXE &amp; Native Direct Engine (<code>Engine = native</code>)</strong>: Ship one unified <code>Setup.exe</code> that auto-selects native <code>ARM64</code> or <code>x64</code> silicon via <code>IsWow64Process2</code> with zero CPU jargon—plus an optional zero-<code>msi.dll</code> transactional extraction backend with rollback journaling and signed <code>Uninstall.exe</code>.</li>
          </ul>
        </div>
      </section>

      <!-- Phase C -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'c'" aria-labelledby="phase-c-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase C • Target v0.6.0</span>
          <h2 id="phase-c-heading" style="margin-top: 0.5rem;">Setup Capture ("Repackager") &amp; Disposable Windows Sandbox (<code>.wsb</code>) Mode</h2>
          <ul class="feature-list">
            <li><strong>Snapshot-Diff Repackager (<code>Legacy Setup.exe &rarr; .rsip &rarr; .msi + .mst</code>)</strong>: Capture fast pre/post filesystem and <code>HKLM</code>/<code>HKCU</code>/<code>HKCR</code> registry baselines while tracking child sub-installers inside a Win32 Job Object (<code>CreateJobObjectW</code>), filter OS background noise, tokenize paths into <code>[ProgramFiles64Folder]</code>, harvest <code>.lnk</code> shortcuts and Windows Services, and emit editable <code>.rsip</code> projects plus enterprise <code>.mst</code> transforms.</li>
            <li><strong>One-Click Disposable Windows Sandbox (<code>.wsb</code>) Capture</strong>: Detect Windows 11 Pro, Enterprise, and Education hosts via <code>GetProductInfo</code>, spin up a pristine throwaway Windows Sandbox VM automatically, run the legacy installer + capture agent in isolation, and return the clean <code>.rsip</code> + captured files without touching the developer's PC.</li>
          </ul>
        </div>
      </section>

      <!-- Phase D -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'd'" aria-labelledby="phase-d-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase D • Target v0.7.0</span>
          <h2 id="phase-d-heading" style="margin-top: 0.5rem;">Open-Format Setup Conversion Wizard (Including VB6 <code>.vbp</code>!) &amp; Visual Studio Extension (<code>.vsix</code>)</h2>
          <ul class="feature-list">
            <li><strong><code>.msi</code> / <code>.msm</code> &amp; Visual Studio <code>.slnx</code> / <code>.csproj</code> / <code>.vcxproj</code> / <code>CMakeLists.txt</code> Importers</strong>: Decompile existing Windows Installer databases via <code>msiprism</code> SQL + FDI CAB extraction, or inspect Visual Studio solutions in one click to auto-configure <code>.NET 11</code> / <code>.NET 10 LTS</code> / <code>VC++</code> / <code>WebView2</code> prerequisites and <code>x64</code> + <code>ARM64</code> outputs.</li>
            <li><strong>Visual Basic 6.0 (<code>.vbp</code>) Importer with Windows 11 WRP &amp; Reg-Free COM Modes</strong>: Parse <code>ExeName32</code>, <code>Reference=</code>, and <code>Object=*.ocx</code> entries directly from <code>.vbp</code> projects; respect Windows 11 Resource Protection on built-in <code>SysWOW64</code> runtimes (<code>msvbvm60.dll</code>); and offer either classic local SP6 <code>.MSM</code> consumption or modern zero-elevation <strong>Reg-Free COM</strong> (<code>&lt;comClass&gt;</code> / <code>&lt;typelib&gt;</code> side-by-side manifests).</li>
            <li><strong>Open XML &amp; INI Script Importers + Visual Studio <code>.vsix</code> Extension</strong>: Convert structured XML/INI installer manifests into <code>.rsip</code> (flagging custom procedural blocks for AI translation into <code>.rssc</code> + <code>RsDialog</code>), and add <code>.rsip</code>/<code>.rsis</code> templates, syntax highlighting, and right-click packaging directly inside Visual Studio.</li>
          </ul>
        </div>
      </section>

      <!-- Phase E -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'e'" aria-labelledby="phase-e-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase E • Target v0.8.0</span>
          <h2 id="phase-e-heading" style="margin-top: 0.5rem;">Enterprise System Primitives, Config Patchers &amp; Windows Restart Manager</h2>
          <ul class="feature-list">
            <li><strong>Windows Services, Safe <code>PATH</code>, Firewall Rules &amp; Scheduled Tasks</strong>: Declarative <code>[Service.*]</code> (<code>ServiceInstall</code>/<code>ServiceControl</code> + SCM recovery), non-destructive <code>[Environment.*]</code> <code>PATH</code> updates (<code>[~]</code> semantics), <code>[FirewallRule.*]</code> (<code>INetFwPolicy2</code>), and <code>[ScheduledTask.*]</code> with automatic rollback and uninstall cleanup.</li>
            <li><strong>Declarative Config Patchers (<code>[JsonPatch.*]</code>, <code>[XmlConfig.*]</code>, <code>[IniFile.*]</code>)</strong>: Stamp install-time wizard properties cleanly into <code>appsettings.json</code>, <code>.xml</code>/<code>.config</code>, and <code>.ini</code> files while preserving user customizations across upgrades.</li>
            <li><strong>Windows Restart Manager (<code>Rstrtmgr.dll</code>) Integration</strong>: Detect running processes locking target files via <code>RmStartSession</code> / <code>RmGetList</code> and guide users through a WCAG-accessible <em>"Close Running Applications &amp; Continue"</em> flow to avoid unnecessary reboots.</li>
          </ul>
        </div>
      </section>

      <!-- Phase F -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'f'" aria-labelledby="phase-f-heading" class="card" style="margin-bottom: 1.5rem;">
        <div>
          <span class="status-pill">Phase F • Target v0.9.0</span>
          <h2 id="phase-f-heading" style="margin-top: 0.5rem;">White-Label Auto-Updater, Guided <code>.MSP</code> Patching, Native <code>.MSIX</code> &amp; Global <code>I18N</code> / SBOM</h2>
          <ul class="feature-list">
            <li><strong>Royalty-Free White-Label Auto-Updater (<code>RsUpdate.exe</code> / <code>[AutoUpdate]</code>)</strong>: Unlocked across all editions (including Community!), stamped with your own <code>.ico</code>, <code>ProductName</code>, and <code>CompanyName</code>, verifying SHA-256 + <code>WinVerifyTrust</code> signatures over HTTPS to apply <code>.msp</code> patches, <code>.msi</code> Major Upgrades, or Native Engine updates.</li>
            <li><strong>Guided Microsoft-Compliant Update &amp; <code>.MSP</code> Servicing (<code>--plan-update</code>)</strong>: Diff against a shipped baseline <code>.msi</code>, enforce official Windows Installer Component rules automatically, emit binary-delta <code>.msp</code> Minor Updates when eligible, or guide one-click Major Upgrade transitions in plain English.</li>
            <li><strong>In-Process <code>.MSIX</code> / <code>.MSIXBUNDLE</code> Compiler (<code>AppxPackaging.dll</code>) &amp; <code>--emit-winget</code></strong>: Emit single-arch <code>.msix</code>, unified <code>x64 + ARM64</code> <code>.msixbundle</code> packages, optional Windows 11 Sparse Package Identity, and <code>winget-pkgs</code> YAML manifests directly from C++20 with zero external SDK downloads.</li>
            <li><strong>Multi-Language Localization (<code>I18N</code> + RTL) &amp; Procurement SBOMs (<code>--emit-sbom</code>)</strong>: UTF-8 <code>.rslang</code> tables for 20+ languages (including <code>WS_EX_LAYOUTRTL</code> right-to-left mirroring) plus <strong>SPDX 2.3 / CycloneDX JSON SBOM</strong> generation alongside HTML5 <strong>VPAT 2.5</strong> reports.</li>
          </ul>
        </div>
      </section>

      <!-- Phase G -->
      <section x-show="phaseFilter === 'all' || phaseFilter === 'g'" aria-labelledby="phase-g-heading" class="card">
        <div>
          <span class="status-pill">Phase G • Target v1.0.0 GA</span>
          <h2 id="phase-g-heading" style="margin-top: 0.5rem;">Turnkey CI/CD Actions &amp; 100% Production Cutover Gate</h2>
          <ul class="feature-list">
            <li><strong>First-Party CI/CD Tasks (<code>GitHub Actions</code> &amp; <code>Azure DevOps</code>)</strong>: Turnkey <code>raggiesoft/setup-installer-studio</code> workflows supporting headless JSON linting, matrix <code>x64</code> + <code>ARM64</code> + <code>universal</code> builds, Azure Artifact Signing, <code>--emit-vpat</code>, <code>--emit-sbom</code>, and <code>--emit-winget</code>.</li>
            <li><strong>Production Validation Gate</strong>: Complete build, Authenticode signing, clean install, upgrade, repair, silent deploy (<code>/s</code>), and uninstall verification across every RaggieSoft desktop application, interactive book, and supporter audio archive on clean Windows 11 <code>x64</code> and <code>ARM64</code> hardware.</li>
          </ul>
        </div>
      </section>
    </div>
  `;
}

/**
 * Renders the `/changelog` Version History page (`v0.1.0` -> `v0.4.1`).
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
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Latest v0.4.1 (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Latest v0.4.1 (ARM64)</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">View Commits on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="v041-heading" class="calc-panel">
      <span class="release-badge">Latest Release • November 2026</span>
      <h2 id="v041-heading" style="margin-top: 0.25rem;">v0.4.1 — Dark-Mode Push Buttons &amp; Live OS Theme Hot-Swapping</h2>
      <ul class="feature-list">
        <li><strong>Dark-Mode-Aware Accessible Push Buttons (<code>AttachAccessiblePushButtonSubclass</code>)</strong>: Replaced stock <code>ComCtl32 v6</code> light-mode white push buttons across <code>SetupWizard.exe</code> (<code>&lt; Back</code>, <code>Next &gt;</code>, <code>Cancel</code>), <code>InstallerStudio.exe</code>, <code>msiprism.exe</code>, and <code>RaggieSoftHelp.exe</code> with 100% public-API <code>SetWindowSubclass</code> + GDI+ vector buttons (Royal Cobalt primary CTA fills, Slate-Navy secondary fills, inline UAC shield icons via <code>BCM_SETSHIELD</code>, and <code>SPI_GETHIGHCONTRAST</code> system-brush fallback) while keeping native UI Automation <code>Button</code> roles and <code>Alt+Key</code> mnemonics intact.</li>
        <li><strong>Live <code>WM_SETTINGCHANGE(ImmersiveColorSet)</code> Palette Hot-Swapping</strong>: All four Win32 GUI binaries now listen for live Windows 11 Light &harr; Dark Mode and Contrast Theme broadcasts, flipping DWM frames, cards, buttons, checkboxes, ListView headers, dropdowns, and RichEdit typography in <code>&lt; 16ms</code> without restarting.</li>
      </ul>
    </section>

    <section aria-labelledby="v040-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
      <span class="release-badge">Milestone • November 2026</span>
      <h2 id="v040-heading" style="margin-top: 0.25rem;">v0.4.0 — Native C++20 Help System, Dark-Mode UI Subclasses &amp; AI Blueprints</h2>
      <ul class="feature-list">
        <li><strong>New <code>RaggieSoftHelp.exe</code> Native C++20 Help Viewer</strong>: Converted RaggieSoft's modular <code>.rshm.json</code> documentation viewer into a 100% static <code>/MT</code> Win32 C++20 binary (zero <code>.NET</code> and zero <code>WebView2</code> dependencies!) featuring Contents, Index, full-text Search, in-process HTML5-to-RTF typography (<code>Msftedit.dll</code>), and single-instance Named Pipe <code>F1</code> IPC.</li>
        <li><strong>Bundled <code>raggiesoft.installer-studio</code> Offline Help Module</strong>: Shipped 8 comprehensive offline HTML5 chapters wired directly to <code>F1</code> across all 10 views of <code>InstallerStudio.exe</code>.</li>
        <li><strong>Global Win32 Dark Mode Checkbox &amp; ListView Header Subclasses</strong>: Added <code>AttachAccessibleCheckboxSubclass</code> and <code>AttachDarkAwareListViewSubclass</code> in <code>RswGlassRenderer.hpp</code> so checkboxes and <code>SysListView32</code> column headers maintain <code>&ge; 15.8:1</code> WCAG AAA contrast across Dark, Light, and High Contrast modes.</li>
        <li><strong>Expanded From-Scratch AI Agent Blueprints</strong>: Upgraded <code>instbuild.exe --emit-ai-spec</code> (<code>/llms.txt</code>, <code>/llms-full.txt</code>, <code>/SKILL.md</code>) with an AI Pre-Flight Checklist and complete enterprise <code>.rsip</code> blueprint.</li>
        <li><strong>Automated WIC Window Screenshot Exporter</strong>: Added <code>--export-screenshots</code> across GUI tools for reproducible visual QA.</li>
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
          <li><strong>Unlimited Pre-MSI <code>[Prerequisite.*]</code> Runtime Broker</strong>: Added curated (<code>.NET 8/9/10</code>, <code>WebView2</code>, <code>VC++</code>) and custom runtime execution before <code>msiexec</code> via <code>WinHTTP</code> download, <code>LZMS</code> offline embed, or <code>Redist\\</code>—capturing standardized and custom <code>RebootExitCodes</code> (<code>3010, 1641, 23, ...</code>) under one UAC prompt.</li>
          <li><strong>Native 64-Bit <code>[MergeModule.*]</code> (<code>.MSM</code>) Merger</strong>: Built a pure 64-bit SQL + <code>Cabinet.lib</code> FDI Merge Module consumer with zero 32-bit COM dependencies.</li>
          <li><strong>Authentic Windows Installer <code>SelectionTree</code> &amp; Clean Status Formatting</strong>: Added 32-bit ARGB split-dropdown feature icons, live byte-cost cards, <code>DisallowAbsent</code> core locks, and <code>MsiFormatRecordW</code> formatting so status text never prints unexpanded <code>[1]</code> tokens.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v021-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Bugfix &amp; Polish • November 2026</span>
        <h2 id="v021-heading" style="margin-top: 0.25rem;">v0.2.1 — Real-World Setup Fixes, Dark Mode Checkboxes &amp; UAC Elevation Broker</h2>
        <ul class="feature-list">
          <li><strong>Dark Mode Checkbox Subclassing in <code>SetupWizard.exe</code></strong>: Eliminated <code>ComCtl32 v6</code> black-on-black checkbox labels on Dark Mode wizard pages.</li>
          <li><strong>Consistent Footer Navigation</strong>: Placed <code>&lt; &amp;Back</code> in the bottom-right footer bar alongside <code>Next &gt;</code> and <code>Cancel</code> and streamlined the AeroWizard command header.</li>
          <li><strong>Windows Installer Engine &amp; UAC Fixes</strong>: Added persistent <code>Signature</code> / <code>AppSearch</code> locator SQL tables (fixing MSI Error 2228), Type 35 <code>STARTMENUFOLDER</code> directory formatting, unshimmed OS build properties, and seamless <code>asInvoker</code> &rarr; <code>--elevated-msi-worker</code> UAC elevation.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="v020-heading" class="card" style="margin-bottom: 1.5rem;">
      <div>
        <span class="release-badge">Feature Milestone • November 2026</span>
        <h2 id="v020-heading" style="margin-top: 0.25rem;">v0.2.0 — Destination Computer Tree, Component Rules &amp; Dual Dialog Designers</h2>
        <ul class="feature-list">
          <li>Added the Destination Computer folder tree, Setup Design view enforcing Microsoft Component Rules (<code>ICE18</code>, <code>ICE38</code>, <code>ICE64</code>, <code>ICE80</code>), File Associations &amp; Shell Verbs, guided Win32 AeroWizards, and the <code>370&times;270</code> <code>MSI.DLL</code> SQL Dialog Designer.</li>
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
            <h3>Dark-Mode Checkboxes &amp; <code>SysListView32</code> Headers</h3>
            <p>
              Shared Win32 subclasses override stock <code>ComCtl32 v6</code> black-on-dark checkbox labels and white
              <code>SysHeader32</code> bars so every checkbox, report column header, and focus ring holds <code>&ge; 12.6:1</code> to
              <code>17.4:1</code> contrast.
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
              <th scope="row">Dark Mode Surface &amp; Checkbox Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
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
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference (Schema v0.4)</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; AI Authoring</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects from scratch, reuse dialog and signing blocks via
        <code>@include "preset.rsii"</code>, or orchestrate multi-package workspaces inside an <code>.rsis</code> Suite.
        Point coding agents directly at <a href="/llms-full.txt">raggiesoftstudio.com/llms-full.txt</a> or press <code>F1</code>
        inside <code>InstallerStudio.exe</code> to open <code>RaggieSoftHelp.exe</code> offline!
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="/SKILL.md">Download AI SKILL.md</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.4 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Prerequisite, MergeModule, Component, KeyPath, MsiDialog..."
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
    navLabel: 'Preview & Gallery',
    seoTitle: 'RaggieSoft Installer Studio — v0.4.1 Technical Preview',
    seoDescription:
      'Zero-dependency Win32 C++20 Windows installer IDE, MSI compiler, SelectionTree wizard, and offline Help Viewer for x64 and ARM64.',
    renderBody: renderHomeBody
  },
  {
    path: '/roadmap',
    navLabel: 'Roadmap',
    seoTitle: 'Public Engineering Roadmap | RaggieSoft Installer Studio',
    seoDescription:
      'Human-readable engineering roadmap for RaggieSoft Installer Studio from v0.4.1 through v1.0 GA across Windows 11 x64 and ARM64.',
    renderBody: renderRoadmapBody
  },
  {
    path: '/docs',
    navLabel: 'Docs & AI Spec',
    seoTitle: 'Documentation & .rsip v0.4 Spec | Installer Studio',
    seoDescription:
      'Searchable .rsip v0.4 project and .rsis suite reference covering Prerequisites, Merge Modules, Components, SelectionTree, and AI /llms.txt specs.',
    renderBody: renderDocsBody
  },
  {
    path: '/changelog',
    navLabel: 'Version History',
    seoTitle: 'Version History & Changelog (v0.4.1) | Installer Studio',
    seoDescription:
      'Release notes and engineering changelog for RaggieSoft Installer Studio from v0.1.0 through v0.4.1 across Windows 11 x64 and ARM64.',
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
export function renderStudioPage(routePath: string): { html: string } {
  const match = STUDIO_ROUTES.find((r) => r.path === routePath);
  const navItems = STUDIO_ROUTES.filter((r) => Boolean(r.navLabel))
    .map((r) => {
      const current = r.path === routePath ? ' aria-current="page"' : '';
      return `<li><a class="nav-link" href="${r.path}"${current}>${r.navLabel}</a></li>`;
    })
    .join('');

  const mainInner = match
    ? match.renderBody()
    : `
      <section class="hero" aria-labelledby="err-title">
        <span class="eyebrow">HTTP 404 • Route Not Found</span>
        <h1 id="err-title">Page Not Found</h1>
        <p class="lead">The requested RaggieSoft Installer Studio documentation or preview route could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to Project Announcement</a>
          <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
        </div>
      </section>
    `;

  const html = `
    <header class="site-header" data-theme="dark">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.4.1)</span>
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
          <a href="/">Preview &amp; Gallery</a>
          <a href="/roadmap">Public Roadmap</a>
          <a href="/docs">Docs &amp; AI Spec</a>
          <a href="/changelog">Version History (v0.4.1)</a>
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
