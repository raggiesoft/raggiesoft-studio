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
 *     public **Project Announcement & Open Technical Preview (`v0.2.0`)**:
 *       1. `/`              — Vision Announcement, Preview Downloads, 3-Tab Split
 *                             Preview, Zero-Bloat Matrix, & Open Roadmap
 *       2. `/vpat`          — Accessibility & Compliance Center (WCAG 2.2 AA,
 *                             ADA Title II & Section 508 + Live VPAT 2.5 HTML5)
 *       3. `/accessibility` — Canonical alias view for `/vpat`
 *       4. `/docs`          — Searchable `.rsip` v0.3 / `.rsis` / `.rsii` schema
 *                             reference (Components, KeyPaths, FileAssoc, Dialogs)
 *       5. `/security`      — Static `/MT` SBOM posture, Dual-Layer Authenticode
 *                             signing, & Permanent Zero-Telemetry / Zero-Crypto pledge
 *
 *   Note: Commercial pricing tiers are intentionally omitted while RaggieSoft
 *   Installer Studio is in active Technical Preview & dogfood validation.
 * ============================================================================
 */

export interface StudioRoute {
  readonly path: string;
  readonly navLabel?: string;
  readonly seoTitle: string;       // Strictly <= 60 characters
  readonly seoDescription: string; // Strictly <= 155 characters
  readonly renderBody: () => string;
}

const DOWNLOAD_X64_URL =
  'https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-x64-setup.exe';
const DOWNLOAD_ARM64_URL =
  'https://assets.raggiesoft.com/desktop-apps/windows/apps/installer-studio/raggiesoft-installer-studio-arm64-setup.exe';
const GITHUB_REPO_URL = 'https://github.com/raggiesoft/installer-studio';
const LIVE_VPAT_URL = '/vpat/raggiesoft-installer-studio-vpat-2.5.html';

const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

/**
 * Renders the honest Engineering Vision & Active Technical Preview Roadmap section.
 */
function renderVisionAndRoadmapSection(): string {
  return `
    <section class="calc-panel" aria-labelledby="roadmap-heading">
      <span class="eyebrow">Why I'm Building This • Open Engineering Roadmap</span>
      <h2 id="roadmap-heading" style="margin-top: 0.25rem;">What RaggieSoft Installer Studio Aims to Solve</h2>
      <p>
        Every major Windows installer suite ultimately marshals calls down into the exact same <code>msi.dll</code> and
        <code>cabinet.dll</code> libraries Microsoft already ships inside <code>C:\\Windows\\System32</code> on every copy of Windows.
        Yet developers are routinely forced to choose between multi-thousand-dollar legacy tools, steep XML learning curves,
        unlabeled non-accessible wizard forms, or opaque binary project files that fight Git version control and AI coding agents.
      </p>
      <p>
        <strong>RaggieSoft Installer Studio</strong> is an active, open-source MIT engineering effort to build a modern,
        zero-dependency native Win32 C++20 packaging suite from the ground up—combining visual convenience with clean plain-text
        <code>.rsip</code> manifests and 100% WCAG 2.2 AA accessibility.
      </p>
      <div class="card-grid" style="margin-top: 1.25rem;">
        <article class="card">
          <div>
            <h3>Shipping Today in Technical Preview (<code>v0.2.0</code>)</h3>
            <ul class="feature-list">
              <li><strong>9-View Win32 C++20 IDE (<code>InstallerStudio.exe</code>)</strong> with 4 native <strong>AeroWizards</strong> (Project Assistant, Component &amp; KeyPath, File Associations, and Release / <code>.MST</code> / <code>.MSP</code>)</li>
              <li><strong>Destination Computer Tree &amp; Setup Design</strong> enforcing Microsoft's Official Component Rules (Single-Directory Rule, File KeyPaths, ICE38 <code>HKCU</code> Registry KeyPaths, &amp; ICE18 <code>CreateFolder</code>)</li>
              <li><strong>Dual Dialog Designer</strong> authoring both C++20 Glass / AeroWizard <code>SetupWizard.exe</code> screens AND native <code>370&times;270</code> <code>MSI.DLL</code> <code>Dialog</code> SQL tables (Express / Compact / Custom workflow)</li>
              <li><strong>First-Class File Associations</strong> supporting both zero-popup <code>HKMU\\Software\\Classes</code> registration and native MSI <code>ProgId</code> / <code>Extension</code> / <code>Verb</code> / <code>MIME</code> tables</li>
              <li><strong><code>msiprism.exe</code></strong> 64-bit Dark Mode SQL table inspector + <code>instbuild.exe --emit-ai-spec</code> &amp; <code>--emit-vpat</code></li>
            </ul>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Next Milestones on the Workbench</h3>
            <ul class="feature-list">
              <li><strong>Full Dogfood Rollout</strong>: Validating real-world upgrades, repairs, and uninstalls across all 77 RaggieSoft Windows apps, interactive novels, and audio archives</li>
              <li><strong>System Services &amp; Environment Tables</strong>: Visual &amp; declarative authoring for Windows Services (<code>ServiceInstall</code> / <code>ServiceControl</code>) and <code>PATH</code> environment variables</li>
              <li><strong>Custom Actions &amp; Prerequisite Checks</strong>: Guided AeroWizards for safe deferred system actions and runtime detection</li>
              <li><strong>Community Feedback First</strong>: Free, open-source MIT previews with zero registration walls while the architecture matures in public</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'aero' }">
      <span class="eyebrow">Project Announcement &amp; Technical Preview (v0.2.0) • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        An in-development, zero-dependency native Win32 C++20 Windows packaging suite for <code>x64</code> and <code>ARM64</code>.
        Design projects visually with modern <strong>AeroWizards</strong>, Destination Computer folder trees, and a Dual C++ &amp;
        <code>MSI.DLL</code> Dialog Designer—or let coding agents author plain-text, comment-preserving <code>.rsip</code> manifests
        that compile straight into real <code>.msi</code>, <code>.msm</code>, <code>.mst</code>, <code>.msp</code>, and WCAG 2.2 AA
        <code>Setup.exe</code> installers.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Technical Preview (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Native ARM64 Preview</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">Explore Source &amp; Roadmap on GitHub</a>
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
            3. Plain-Text .rsip v0.3 Manifest
          </button>
        </div>

        <div x-show="previewTab === 'aero'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 AeroWizard and RaggieSoft Glass SetupWizard.exe Preview">+--------------------------------------------------------------------------+
| (&lt;-) Sample Studio App Setup                                  [ - ][ x ] |
|  Choose how you would like to install Sample Studio App                  |
+--------------------------------------------------------------------------+
|  [48x48 Bolt]    (o) Express Setup (Recommended)                         |
|                      One-click setup into default folder &amp; shortcuts     |
|  [48x48 Cube]    ( ) Compact Core Setup                                  |
|                      Essential core feature files with minimal footprint |
|  [48x48 Sliders] ( ) Custom Setup (Choose Folder, Features &amp; Shortcuts)  |
|                      Pick destination path, Start Menu &amp; file extensions |
|                                                                          |
|  [Sample Studio • 100% WCAG 2.2 AA Accessible]     [ &amp;Next &gt; ] [ Cancel ]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Native MSI.DLL Express vs Custom Dialog Table Preview">+--------------------------------------------------------------------------+
|  Sample Studio App Setup — Native MSI.DLL Dialog Table (370x270 DLU)     |
+--------------------------------------------------------------------------+
|  Choose Setup Mode (SetupTypeDlg -> CustomizeDlg / VerifyReadyDlg)       |
|                                                                          |
|  Every compiled .msi also carries the full Express / Compact / Custom +  |
|  SelectionTree + BrowseDlg + Office-style Quick Repair (pecms) vs Full   |
|  Reinstall (vomus) workflow directly in relational MSI SQL tables—plus   |
|  custom [MsiDialog.*] &amp; [MsiControl.*] forms designed in the IDE!        |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip v0.3 Project Manifest Example">; Comment-preserving .rsip v0.3 manifest — survives GUI edits byte-for-byte!
@include "templates/dialogs/express-vs-custom-workflow.rsii"

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
MsiDialogPreset   = express_custom

[Component.CoreBin]
Feature           = Main
TargetRoot        = INSTALLDIR
KeyPathKind       = file
KeyPathTarget     = SampleIde.exe

[Payload.App]
Source            = ..\publish\win-$(ARCH)\SampleIde.exe
Component         = CoreBin

[FileAssociation.ProjectFile]
Extension         = .sproj
ProgId            = SampleStudio.IDE.Project
Description       = Sample Studio Project
TargetFile        = SampleIde.exe
Verbs             = open:&amp;Open:"%1"</pre>
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
              <td><strong>Under 3 MB per architecture</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code> &amp; <code>msiprism.exe</code>)</td>
              <td>Instant startup on local developer workstations and CI runners without multi-gigabyte framework installs.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32\\msi.dll</code>, <code>cabinet.dll</code>, &amp; <code>gdiplus.dll</code> only)</td>
              <td>Runs cold on stock Windows 11 (<code>x64</code> &amp; native <code>ARM64</code>) with no .NET or VC++ redistributable prerequisites.</td>
            </tr>
            <tr>
              <th scope="row">Microsoft MSI Rules</th>
              <td><strong>ICE18, ICE38, ICE64 &amp; ICE80 Enforced</strong></td>
              <td>Validates Single-Directory Component rules, <code>HKCU</code> user-profile KeyPaths, <code>CreateFolder</code>, and 64-bit component attributes before <code>msi.dll</code> runs.</td>
            </tr>
            <tr>
              <th scope="row">White-Label Output</th>
              <td><strong>100% Author-Owned <code>VERSIONINFO</code></strong></td>
              <td>Compiled <code>Setup.exe</code> and <code>.msi</code> packages display your publisher name, icon, and copyright—zero third-party watermarks.</td>
            </tr>
            <tr>
              <th scope="row">Offline &amp; Privacy First</th>
              <td><strong>Zero Telemetry / Zero Crypto Gimmicks</strong></td>
              <td>No mandatory cloud accounts, no background network calls, and no cryptocurrency/blockchain bundles.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">Four Native Binaries in One Cohesive Toolkit</span>
      <h2 id="suite-heading">Suite Spotlight: AeroWizard IDE, CLI Compiler &amp; MSI Prism</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 9-View C++20 Visual IDE</h3>
            <p>
              Features 4 guided Win32 <strong>AeroWizards</strong>, an InstallShield-style Destination Computer folder tree,
              Setup Design (Features &rarr; Components &rarr; KeyPaths), File Associations, Dual C++ &amp; <code>MSI.DLL</code>
              Dialog Designers, and a 100% comment-preserving <code>.rsip</code> AST!
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip v0.3 Schema</a>
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
          <a class="btn btn-primary" href="/llms.txt">View Live /llms.txt Spec</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> — Native 64-Bit MSI &amp; MST Inspector</h3>
            <p>
              A clean, modern 64-bit (<code>x64</code> &amp; <code>ARM64</code>) Dark Mode replacement for Microsoft's 1999 32-bit
              <code>Orca.exe</code>—inspecting relational SQL tables across <code>.msi</code>, <code>.msm</code>, and <code>.msp</code> databases.
            </p>
          </div>
          <a class="btn btn-outline" href="/security">Review Security Architecture</a>
        </article>
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
        and Revised Section 508 conformance directly into <code>SetupWizard.exe</code> and <code>instbuild.exe</code>.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${LIVE_VPAT_URL}">Open Sample Live VPAT 2.5 Report (HTML5)</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">Inspect C++20 Accessibility Source</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">How SetupWizard.exe Fixes Legacy Installer Accessibility Gaps</h2>
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
            <h3>High-Contrast Focus Rings &amp; Enforced Mnemonics</h3>
            <p>
              Draws unmistakable <code>2.5px</code> keyboard focus rings (<code>12.6:1</code> in Dark Mode, <code>7.8:1</code> in Light Mode,
              exceeding WCAG 2.4.11/2.4.13) and statically verifies <code>&amp;</code> keyboard mnemonics via <code>instbuild --validate</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using pure OS <code>GetSysColor</code> tokens, themes RichEdit license text for
              <code>&ge; 15:1</code> contrast in Dark &amp; Light Mode, and scales cleanly with Windows 11's <code>TextScaleFactor</code>.
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
              <th scope="row">Header Banner Typography (<code>#F8FAFC</code> on <code>#0B132B</code>)</th>
              <td>17.4:1 relative luminance ratio</td>
              <td>WCAG 2.2 SC 1.4.3 / 1.4.6</td>
              <td><strong>Supports (AAA)</strong></td>
            </tr>
            <tr>
              <th scope="row">Dark Mode Surface Text (<code>#F8FAFC</code> on <code>#0D1426</code>)</th>
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
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference (Schema v0.3)</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; CI Quickstarts</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects, reuse dialog and signing blocks via <code>@include "preset.rsii"</code>,
        or orchestrate multi-package workspaces inside an <code>.rsis</code> Suite. Point coding agents at
        <a href="/llms.txt">raggiesoftstudio.com/llms.txt</a> for zero-hallucination schema support.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="${GITHUB_REPO_URL}">View Source on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip v0.3 &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; capabilities:</label>
        <input id="schema-filter" type="search" placeholder="Type Component, KeyPath, FileAssociation, MsiDialog, Suite..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Complete .rsip v0.3 Project, .rsis Suite &amp; .rsii Include Sections</caption>
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
            <tr x-show="!q || 'feature parent subfeature level'.includes(q.toLowerCase())">
              <th scope="row"><code>[Feature.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>Title</code>, <code>Description</code>, <code>Level</code> (<code>1</code> = Compact/Core, <code>2+</code> = Express/Custom), and optional <code>Parent</code> sub-feature hierarchy.</td>
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
      <h2 id="ci-heading">GitHub Actions CI Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite &amp; Microsoft Component Rules (JSON)
        run: .\\bin\\x64\\instbuild.exe .\\MySuite.rsis --validate --diagnostics=json
      - name: Compile .MSI, AeroWizard/Glass Setup.exe &amp; VPAT 2.5 ACR
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
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound network
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
              No NuGet dependency graph, no npm runtime, no Electron Chromium bundle, and no external DLLs. Both the IDE/compiler
              and <code>SetupWizard.exe</code> call Microsoft's OS-serviced <code>msi.dll</code>, <code>cabinet.dll</code>, and <code>bcrypt.dll</code> directly.
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
              Neither <code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>msiprism.exe</code>, nor <code>SetupWizard.exe</code> opens a network
              socket, phones home to a license server, or bundles cryptocurrency payment SDKs.
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
    navLabel: 'Announcement & Preview',
    seoTitle: 'RaggieSoft Installer Studio — Technical Preview',
    seoDescription:
      'Open-source Win32 C++20 Windows installer IDE and MSI compiler for x64 and ARM64 with AeroWizards, Dual Dialog Designer, and WCAG 2.2 AA accessibility.',
    renderBody: renderHomeBody
  },
  {
    path: '/docs',
    navLabel: 'Docs & .rsip Spec',
    seoTitle: 'Documentation & .rsip v0.3 Spec | Installer Studio',
    seoDescription:
      'Searchable .rsip v0.3 project and .rsis suite reference covering Components, KeyPaths, File Associations, MSI Dialogs, and AI /llms.txt endpoints.',
    renderBody: renderDocsBody
  },
  {
    path: '/vpat',
    navLabel: 'Accessibility & VPAT',
    seoTitle: 'WCAG 2.2 AA & VPAT 2.5 Engineering | Installer Studio',
    seoDescription:
      'Inspect how SetupWizard.exe and instbuild.exe deliver native Win32 UI Automation, High Contrast support, and automated HTML5 VPAT 2.5 reports.',
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
    navLabel: 'Security & Architecture',
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
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Technical Preview (v0.2.0)</span>
        </a>
        <nav aria-label="Primary Project Navigation">
          <ul class="nav-list">
            ${navItems}
            <li><a class="nav-link" href="${GITHUB_REPO_URL}">GitHub</a></li>
            <li><a class="nav-link" href="https://raggiesoft.dev">raggiesoft.dev</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main-content" class="container" tabindex="-1">
      ${mainInner}
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-links">
          <a href="/">Announcement &amp; Preview</a>
          <a href="/docs">Docs &amp; .rsip Spec</a>
          <a href="/vpat">Accessibility &amp; VPAT 2.5</a>
          <a href="/security">Security &amp; Architecture</a>
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
