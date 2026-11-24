/**
 * ============================================================================
 * FILE: src/routes.ts
 * PROPERTY: https://raggiesoftstudio.com (301 target of installwithoutlimits.com)
 * STACK: Alpine.js 3 + TypeScript + Vite Static SSG
 * LICENSE: MIT License (Copyright (c) 2026 Michael P. Ragsdale / RaggieSoft)
 * ============================================================================
 * PLAIN-ENGLISH OVERVIEW FOR 100-LEVEL READERS:
 *   What is this file?
 *     This TypeScript module defines all pre-rendered commercial B2B storefront
 *     routes for **RaggieSoft Installer Studio** (`https://raggiesoftstudio.com`):
 *       1. `/`              — Hero + 3-Mode Split Preview + Zero-Bloat Matrix + Suite Spotlight + TCO Calculator
 *       2. `/vpat`          — Accessibility & Compliance Center (WCAG 2.2 AA, ADA Title II & Section 508 + Live VPAT 2.5)
 *       3. `/accessibility` — Canonical alias view for procurement teams linking `/accessibility`
 *       4. `/pricing`       — Transparent 3-Tier Pricing ($0 / $249 / $2,499) + W-9 / Net-30 Procurement Ready-Box
 *       5. `/docs`          — Searchable `.rsip`/`.rsis` schema reference, exit codes, & Intune/GitHub Actions YAML
 *       6. `/security`      — Static `/MT` SBOM posture, Dual-Layer Authenticode signing, & Zero-Telemetry pledge
 *
 *   How Alpine.js works with Static SSG (`x-data`):
 *     Every section below emits 100% complete semantic HTML5 at build time so
 *     enterprise firewalls, curl/crawlers, and screen readers read everything
 *     with zero JavaScript delay—and once Alpine.js loads in the browser,
 *     `x-data` powers the interactive UI mode toggle, TCO calculator, and live
 *     schema search bar!
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
const LIVE_VPAT_URL = '/vpat/raggiesoft-installer-studio-vpat-2.5.html';

const FICTITIOUS_DISCLAIMER =
  'Fictitious Persons & Entities Disclaimer: All sample narrative characters, bands (including The Stardust Engine), biographies, universities (including Commonwealth Polytechnic Institute / CPI, Virginia Dominion University / VDU, The Forgers, and The Crucible), corporations (including OmniCorp, Apex Records, Prairie Coachworks, and Sainte-Claire), transit agencies (BRT and CVTA), in-universe legal filings, and events referenced in RaggieSoft sample content packs are works of fiction. In real life, RaggieSoft, RaggieSoft Media, Engine Room Records, Ocean View Archives, and RaggieSoft Story Crossroads are unincorporated creative imprints of Michael P. Ragsdale.';

/**
 * Renders the interactive 3-Year Enterprise TCO Calculator powered by Alpine.js `x-data`.
 */
function renderTcoCalculatorSection(): string {
  return `
    <section class="calc-panel" aria-labelledby="tco-heading" x-data="{ seats: 5, runners: 8 }">
      <span class="eyebrow">3-Year Total Cost of Ownership</span>
      <h2 id="tco-heading" style="margin-top: 0.25rem;">Interactive Enterprise Packaging TCO Calculator</h2>
      <p>
        Legacy installer vendors charge multi-thousand-dollar node-locked seat subscriptions and upcharge for dynamic CI/CD build runners.
        Adjust your team size and CI runner count below to compare 3-year licensing costs:
      </p>
      <div class="calc-controls">
        <div class="field-group">
          <label for="tco-seats">Developer Packaging Seats: <span x-text="seats">5</span></label>
          <input id="tco-seats" type="range" min="1" max="20" step="1" x-model.number="seats" />
        </div>
        <div class="field-group">
          <label for="tco-runners">Ephemeral CI/CD Build Runners: <span x-text="runners">8</span></label>
          <input id="tco-runners" type="range" min="1" max="50" step="1" x-model.number="runners" />
        </div>
      </div>
      <div class="tco-summary" role="region" aria-live="polite" aria-label="Calculated Three-Year Cost Comparison">
        <div class="tco-stat">
          <span>Legacy Per-Seat + CI Server Suite (3 Yrs)</span>
          <strong x-text="'$' + ((seats * 7795) + (runners > 1 ? runners * 1200 : 0)).toLocaleString()">$48,575</strong>
        </div>
        <div class="tco-stat">
          <span>RaggieSoft Installer Studio (Perpetual)</span>
          <strong x-text="seats <= 2 && runners <= 2 ? '$249 (Indie/Pro)' : '$2,499 (Enterprise Team)'">$2,499 (Enterprise Team)</strong>
        </div>
        <div class="tco-stat">
          <span>Estimated 3-Year Procurement Savings</span>
          <strong class="savings-positive" x-text="'$' + (((seats * 7795) + (runners > 1 ? runners * 1200 : 0)) - (seats <= 2 && runners <= 2 ? 249 : 2499)).toLocaleString()">$46,076</strong>
        </div>
      </div>
    </section>
  `;
}

function renderHomeBody(): string {
  return `
    <section class="hero" aria-labelledby="hero-title" x-data="{ previewTab: 'mica' }">
      <span class="eyebrow">Native Win32 C++20 Packaging Suite • x64 &amp; ARM64</span>
      <h1 id="hero-title">RaggieSoft Installer Studio — Install Without Limits.</h1>
      <p class="lead">
        Zero-dependency native Win32 C++20 Windows packaging for x64 and ARM64. Compile one plain-text
        <code>.rsip</code> manifest (or multi-project <code>.rsis</code> suite) into an Intune-ready
        <code>.msi</code> database and a WCAG 2.2 AA accessible <code>Setup.exe</code> bootstrapper—with
        zero runtime bloat, zero crypto gimmicks, and zero revenue-cap licensing.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${DOWNLOAD_X64_URL}">Download Community Edition (x64)</a>
        <a class="btn btn-outline" href="${DOWNLOAD_ARM64_URL}">Download Native ARM64 Edition</a>
        <a class="btn btn-outline" href="/pricing#procurement">Request Enterprise Quote / VPAT Package</a>
      </div>

      <!-- Interactive 3-Tab Split Preview Toggle (Mica UI / Classic Wizard 97 / Plain-Text .rsip) -->
      <div style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
        <div class="btn-row" role="tablist" aria-label="Installer Output and Source Preview">
          <button type="button" class="btn" :class="previewTab === 'mica' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'mica')" @click="previewTab = 'mica'">
            1. Modern Win32 Dark Mode / Mica UI
          </button>
          <button type="button" class="btn" :class="previewTab === 'wiz97' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'wiz97')" @click="previewTab = 'wiz97'">
            2. Built-In MSI Wizard 97 Fallback
          </button>
          <button type="button" class="btn" :class="previewTab === 'rsip' ? 'btn-primary' : 'btn-outline'"
                  role="tab" :aria-selected="String(previewTab === 'rsip')" @click="previewTab = 'rsip'">
            3. Plain-Text .rsip Manifest Source
          </button>
        </div>

        <div x-show="previewTab === 'mica'" style="margin-top: 1rem;">
          <pre aria-label="Modern Win32 Dark Mode Mica SetupWizard.exe Preview">+--------------------------------------------------------------------------+
|  Acme Workstation IDE Setup                                  [ - ][ x ]  |
|  Fast, Accessible Enterprise Engineering Tools                           |
+==========================================================================+
|  Choose Setup Mode (Full Keyboard Tab, Arrow &amp; Screen-Reader Support)    |
|                                                                          |
|  (o) Express Setup (Recommended)                                         |
|      One-click install to C:\\Program Files\\Acme\\IDE with Start Menu link |
|  ( ) Compact Setup                                                       |
|      Core binaries only with minimal disk footprint                      |
|  ( ) Custom Setup                                                        |
|      Choose destination folder, feature tree, and shortcut options       |
|                                                                          |
|  [Publisher: Acme Corp — Zero 3rd-Party Watermarks]  [ &lt; Back ] [Install]|
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'wiz97'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Classic Windows 2000 Wizard 97 Embedded MSI UI Preview">+--------------------------------------------------------------------------+
|  Acme Workstation IDE Setup (Embedded Product.msi — msiexec.exe)         |
+--------------------------------------------------------------------------+
|  Welcome to the Acme Workstation IDE Setup Wizard                        |
|                                                                          |
|  Every compiled .msi includes standard Windows Installer relational UI   |
|  tables (InstallUISequence + InstallExecuteSequence) so IT admins can    |
|  extract Product.msi (--extract-msi) for interactive msiexec, Microsoft  |
|  Intune Win32/LOB deployment, or silent Group Policy (/qn) rollouts.     |
|                                                                          |
|                                         [ &lt; Back ] [ Next &gt; ] [ Cancel ] |
+--------------------------------------------------------------------------+</pre>
        </div>

        <div x-show="previewTab === 'rsip'" style="margin-top: 1rem; display: none;">
          <pre aria-label="Plain-Text .rsip Project Manifest Example">; Single-file .rsip project (or group dozens inside an .rsis Suite like .slnx!)
@include "../shared/company-signing.rsii"

[Package]
Name              = Acme Workstation IDE
Version           = 2.4.0
Manufacturer      = Acme Corporation
UpgradeCode       = {8F4E20A1-7C93-4D62-9B44-1029384756AB} ; Stable across upgrades
Architecture      = $(ARCH)
Scope             = machine
BuildBootstrapper = true

[Install]
DefaultSubdir     = Acme\Workstation IDE
MainExecutable    = AcmeIde.exe

[UI]
WizardLayout      = standard
AccentPrimaryHex  = #2563EB
LicenseRtf        = License.rtf
InstallButtonText = &amp;Install

[Payload.App]
Source            = ..\publish\win-$(ARCH)</pre>
        </div>
      </div>
    </section>

    <section aria-labelledby="matrix-heading">
      <span class="eyebrow">Built for DevOps, CISO &amp; Cloud Architecture Reviews</span>
      <h2 id="matrix-heading">The "Zero-Bloat" Architecture Matrix</h2>
      <div class="table-wrap">
        <table>
          <caption>Technical &amp; Security Architecture Specifications for RaggieSoft Installer Studio</caption>
          <thead>
            <tr>
              <th scope="col">Engineering Spec</th>
              <th scope="col">RaggieSoft Installer Studio</th>
              <th scope="col">Why DevOps &amp; Security Care</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Toolchain Footprint</th>
              <td><strong>Less than 15 MB</strong> (<code>InstallerStudio.exe</code>, <code>instbuild.exe</code>, <code>SetupWizard.exe</code> &amp; <code>msiprism.exe</code>)</td>
              <td>Caches in milliseconds on ephemeral GitHub Actions, Azure DevOps, and GitLab Windows runners instead of pulling multi-gigabyte container layers.</td>
            </tr>
            <tr>
              <th scope="row">Runtime Dependencies</th>
              <td><strong>Zero third-party DLLs</strong> (<code>System32\msi.dll</code> &amp; <code>cabinet.dll</code> only)</td>
              <td>Near-zero SBOM / CVE surface area; runs cold on bare-metal Windows 11 (x64 &amp; native ARM64) with no .NET or VC++ redistributable chicken-and-egg traps.</td>
            </tr>
            <tr>
              <th scope="row">Enterprise Fleet Output</th>
              <td><strong>ICE-Validated <code>.msi</code> + <code>.msm</code> + <code>.mst</code> + <code>.msp</code></strong></td>
              <td>Native per-machine (<code>ALLUSERS=1</code>) silent deployment for Microsoft Intune, SCCM/MECM, and Active Directory GPO with deterministic SHA-1 UUIDv5 component GUIDs.</td>
            </tr>
            <tr>
              <th scope="row">Binary Ownership</th>
              <td><strong>100% White-Label <code>VERSIONINFO</code></strong></td>
              <td>Your organization's copyright, icons, and Authenticode signature own Windows Explorer's Properties &rarr; Details tab across all tiers—zero vendor watermarks.</td>
            </tr>
            <tr>
              <th scope="row">Offline &amp; Air-Gap Ready</th>
              <td><strong>Zero Telemetry / Zero Cloud Check-Ins</strong></td>
              <td>Compiles inside classified, air-gapped, or firewall-locked corporate networks without MAC-address license servers or blockchain/crypto SDKs.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="suite-heading">
      <span class="eyebrow">End-to-End Windows Packaging Workbench</span>
      <h2 id="suite-heading">Suite Spotlight: Visual IDE, AI-Native CLI &amp; MSI Prism</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3><code>InstallerStudio.exe</code> — 7-View C++20 Visual IDE</h3>
            <p>
              Author standalone <code>.rsip</code> projects or multi-project <code>.rsis</code> suites (just like Visual Studio <code>.slnx</code>)
              with a real-time GDI Wizard Preview Canvas, PE version harvesting, and a lossless AST that preserves 100% of developer comments in <code>git diff</code>.
            </p>
          </div>
          <a class="btn btn-outline" href="/docs">Explore .rsip &amp; .rsis Format</a>
        </article>

        <article class="card card-highlight">
          <div>
            <h3><code>instbuild.exe</code> — Headless CI &amp; AI Spec Compiler</h3>
            <p>
              Sub-millisecond <code>--validate --diagnostics=json</code> dry runs, automated <code>--emit-vpat</code> WCAG 2.2 AA conformance reports,
              and first-party <code>--emit-ai-spec</code> generation (<code>llms.txt</code>, <code>llms-full.txt</code>, <code>SKILL.md</code>) so coding agents write valid manifests on pass one.
            </p>
          </div>
          <a class="btn btn-primary" href="/llms.txt">View Live /llms.txt Spec</a>
        </article>

        <article class="card">
          <div>
            <h3><code>msiprism.exe</code> — Native 64-Bit MSI &amp; MST Inspector</h3>
            <p>
              The modern, blazing-fast 64-bit (<code>x64</code> &amp; <code>ARM64</code>) Dark Mode replacement for Microsoft's aging 1999 32-bit <code>Orca.exe</code>.
              Inspect SQL tables, verify ICE80 64-bit component flags, and diff <code>.mst</code> transforms or <code>.msp</code> patches effortlessly.
            </p>
          </div>
          <a class="btn btn-outline" href="/security">Review Security &amp; SBOM</a>
        </article>
      </div>
    </section>

    ${renderTcoCalculatorSection()}
  `;
}

function renderVpatBody(): string {
  return `
    <section class="hero" aria-labelledby="vpat-title">
      <span class="eyebrow">WCAG 2.2 Level AA • ADA Title II • Revised Section 508</span>
      <h1 id="vpat-title">Accessibility &amp; Compliance Center</h1>
      <p class="lead">
        State agencies, public universities, healthcare systems, and federal contractors require an Accessibility Conformance Report (VPAT 2.5)
        covering the entire software lifecycle—including the Windows installer. RaggieSoft Installer Studio is the first native Win32 C++20
        packaging suite engineered for screen-reader, keyboard, and High Contrast compliance from frame one.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${LIVE_VPAT_URL}">Open Live VPAT 2.5 Conformance Report (HTML5)</a>
        <a class="btn btn-outline" href="/pricing#procurement">Request Signed Enterprise ACR Bundle</a>
      </div>
    </section>

    <section aria-labelledby="proof-heading">
      <h2 id="proof-heading">Concrete Win32 Assistive Technology &amp; UI Proof</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>Screen-Reader Live Progress (NVDA, JAWS &amp; Narrator)</h3>
            <p>
              Uses native Win32 Common Controls v6 (<code>BUTTON</code>, <code>EDIT</code>, <code>MSFTEDIT_CLASS</code>, <code>PROGRESS_CLASSW</code>)
              and fires <code>NotifyWinEvent(EVENT_OBJECT_NAMECHANGE)</code> on step transitions while driving real-time progress via <code>MsiSetExternalUIRecord</code>.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>100% Keyboard Tab Order &amp; Enforced Mnemonics</h3>
            <p>
              Clears <code>UISF_HIDEFOCUS</code> and <code>UISF_HIDEACCEL</code> immediately on <code>WM_CREATE</code> so focus rings and <code>Alt</code>
              access-key underlines are always visible—backed by static <code>instbuild --validate</code> checks flagging any missing <code>&amp;</code> mnemonic.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>Windows Contrast Themes &amp; Per-Monitor V2 DPI</h3>
            <p>
              Honors <code>SPI_GETHIGHCONTRAST</code> using system <code>GetSysColor</code> tokens, scales crisply from <code>100%</code> to <code>300%+</code> DPI,
              and multiplies typography by Windows 11's <code>TextScaleFactor</code> accessibility slider.
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
              <td>Switches custom gradients to <code>COLOR_WINDOW</code> / <code>COLOR_WINDOWTEXT</code> / <code>COLOR_HIGHLIGHT</code></td>
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

function renderPricingBody(): string {
  return `
    <section class="hero" aria-labelledby="pricing-title">
      <span class="eyebrow">Zero "Contact Sales" Walls • Perpetual &amp; CI-Friendly</span>
      <h1 id="pricing-title">Transparent Pricing &amp; Enterprise Procurement</h1>
      <p class="lead">
        Every tier ships the exact same uncrippled <code>x64</code> + <code>ARM64</code> compiler, Visual IDE, MSI Prism inspector,
        and 100% white-label <code>VERSIONINFO</code>—with zero forced online logins and zero telemetry.
      </p>
    </section>

    <section aria-label="Three-Tier Licensing Lineup">
      <div class="card-grid">
        <article class="card">
          <div>
            <span class="eyebrow">Students &amp; Open Source</span>
            <h2 style="margin-top: 0.2rem;">Community Edition</h2>
            <div class="price-tag">$0</div>
            <div class="price-note">Free forever • No registration wall</div>
            <ul class="feature-list">
              <li>Students, academic coursework, classroom labs, personal non-commercial projects, and OSI-approved open source</li>
              <li>Full <code>x64</code> + <code>ARM64</code> <code>.msi</code>, <code>.msm</code>, <code>Setup.exe</code>, &amp; <code>msiprism.exe</code></li>
              <li>100% white-label <code>VERSIONINFO</code> &amp; zero UI watermarks</li>
              <li>Zero account sign-in &amp; zero telemetry</li>
            </ul>
          </div>
          <a class="btn btn-outline" href="${DOWNLOAD_X64_URL}">Download Community (x64 / ARM64)</a>
        </article>

        <article class="card card-highlight">
          <div>
            <span class="eyebrow">Solo ISVs &amp; Micro-Studios</span>
            <h2 style="margin-top: 0.2rem;">Indie / Professional</h2>
            <div class="price-tag">$249</div>
            <div class="price-note">Perpetual license (1–2 developer seats)</div>
            <ul class="feature-list">
              <li>Full commercial closed-source software redistribution rights</li>
              <li>100% offline perpetual license key (builds on airplanes &amp; air-gapped VMs)</li>
              <li>Dual-layer Authenticode &amp; Azure Artifact Signing integration</li>
              <li>Automated <code>--emit-vpat</code> HTML5 accessibility report generator</li>
            </ul>
          </div>
          <a class="btn btn-primary" href="mailto:enterprise@raggiesoftstudio.com?subject=Indie%20Professional%20Perpetual%20License%20Inquiry">Purchase Indie / Pro ($249)</a>
        </article>

        <article class="card">
          <div>
            <span class="eyebrow">Teams, Universities &amp; Government</span>
            <h2 style="margin-top: 0.2rem;">Enterprise &amp; Compliance</h2>
            <div class="price-tag">$2,499</div>
            <div class="price-note">Flat Team License (up to 10 seats + unlimited CI runners)</div>
            <ul class="feature-list">
              <li><strong>Unlimited ephemeral CI/CD build runners</strong> (GitHub Actions, Azure DevOps, GitLab) with zero license-server check-ins</li>
              <li>Signed VPAT 2.5 (WCAG 2.2 AA, Section 508 &amp; ADA Title II) compliance bundle &amp; SBOM attestation</li>
              <li>Enterprise GPO <code>.mst</code> Transform &amp; <code>.msp</code> Patch fleet tooling</li>
              <li>White-label C++20 bootstrapper source/templates, priority SLA, &amp; Net-30 PO invoicing</li>
            </ul>
          </div>
          <a class="btn btn-outline" href="mailto:enterprise@raggiesoftstudio.com?subject=Enterprise%20Team%20Quote%20%26%20VPAT%20Procurement%20Package">Request Enterprise Quote / PO</a>
        </article>
      </div>

      <div id="procurement" class="hero" style="margin-top: 1.5rem;">
        <span class="eyebrow">Institutional Procurement Ready</span>
        <h2 style="margin-top: 0.25rem;">Vendor Onboarding &amp; Purchase Orders</h2>
        <p style="margin-bottom: 0;">
          <strong>Vendor onboarding ready:</strong> W-9, standard Commercial EULA, VPAT 2.5 ACR, SBOM attestation, and
          Net-30 Purchase Orders supported via <a href="mailto:enterprise@raggiesoftstudio.com">enterprise@raggiesoftstudio.com</a>.
          Pair with <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio (a11y.raggiesoft.com)</a> for complete web and desktop accessibility engineering.
        </p>
      </div>
    </section>

    ${renderTcoCalculatorSection()}
  `;
}

function renderDocsBody(): string {
  return `
    <section class="hero" aria-labelledby="docs-title">
      <span class="eyebrow">Human &amp; AI-Agent Technical Reference</span>
      <h1 id="docs-title">Documentation, .rsip / .rsis Reference &amp; CI Quickstarts</h1>
      <p class="lead">
        Author single-file <code>.rsip</code> projects like Inno Setup, or group multi-package fleets inside an <code>.rsis</code>
        Suite like Visual Studio <code>.slnx</code>. Point Cursor, Claude Code, or Antigravity at
        <a href="/llms.txt">raggiesoftstudio.com/llms.txt</a> for zero-hallucination schema support.
      </p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/llms.txt">Open /llms.txt</a>
        <a class="btn btn-outline" href="/llms-full.txt">Open Complete /llms-full.txt</a>
        <a class="btn btn-outline" href="https://github.com/raggiesoft/installer-studio">View Source on GitHub</a>
      </div>
    </section>

    <section aria-labelledby="search-schema-heading" x-data="{ q: '' }">
      <h2 id="search-schema-heading">Interactive .rsip &amp; .rsis Section Filter</h2>
      <div class="field-group" style="max-width: 32rem; margin-bottom: 1rem;">
        <label for="schema-filter">Filter manifest sections &amp; CLI flags:</label>
        <input id="schema-filter" type="search" placeholder="Type Package, Payload, Suite, mst, vpat..."
               x-model="q" style="width: 100%; padding: 0.6rem 0.8rem; border-radius: 0.5rem; border: 1px solid var(--border); background: var(--surface); color: var(--text);" />
      </div>

      <div class="table-wrap">
        <table>
          <caption>Core .rsip Project, .rsis Suite &amp; .rsii Include Sections</caption>
          <thead>
            <tr>
              <th scope="col">Section / Directive</th>
              <th scope="col">File Type</th>
              <th scope="col">Key Fields &amp; Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr x-show="!q || 'include rsii shared'.includes(q.toLowerCase())">
              <th scope="row"><code>@include "file.rsii"</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td>Inherits shared <code>[Requirements]</code>, <code>[Signing]</code>, or publisher defaults without losing comments on IDE save.</td>
            </tr>
            <tr x-show="!q || 'package name version upgradecode msi msm'.includes(q.toLowerCase())">
              <th scope="row"><code>[Package]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>Name</code>, <code>Version</code> (3-part <code>Major.Minor.Build</code>), <code>Manufacturer</code>, <code>UpgradeCode</code>, <code>Architecture</code> (<code>x64|arm64</code>), <code>Scope</code> (<code>machine|user</code>), <code>PackageKind</code> (<code>msi|msm</code>).</td>
            </tr>
            <tr x-show="!q || 'install defaultsubdir mainexecutable'.includes(q.toLowerCase())">
              <th scope="row"><code>[Install]</code></th>
              <td><code>.rsip</code> (Required)</td>
              <td><code>DefaultSubdir</code> (under <code>ProgramFiles64Folder</code> or <code>LocalAppDataFolder</code>), <code>StartMenuFolder</code>, <code>MainExecutable</code>.</td>
            </tr>
            <tr x-show="!q || 'ui wizardlayout autorun16x9 accent vpat'.includes(q.toLowerCase())">
              <th scope="row"><code>[UI]</code></th>
              <td><code>.rsip</code> (Optional)</td>
              <td><code>WizardLayout</code> (<code>standard|autorun16x9</code>), <code>AccentPrimaryHex</code>, <code>LicenseRtf</code>, <code>IconFile</code>, <code>ArtworkPng</code>, <code>InstallButtonText</code> (with <code>&amp;</code> mnemonic).</td>
            </tr>
            <tr x-show="!q || 'payload source targetsubdir cab'.includes(q.toLowerCase())">
              <th scope="row"><code>[Payload.&lt;Id&gt;]</code></th>
              <td><code>.rsip</code> (1+ Required)</td>
              <td><code>Source</code> (supports <code>$(ARCH)</code>), <code>TargetSubdir</code>, <code>Recursive</code>, <code>Feature</code> — compressed into <code>#payload.cab</code> with deterministic UUIDv5 GUIDs.</td>
            </tr>
            <tr x-show="!q || 'signing authenticode azure signtool'.includes(q.toLowerCase())">
              <th scope="row"><code>[Signing]</code></th>
              <td><code>.rsip</code> / <code>.rsii</code></td>
              <td><code>Enabled</code>, <code>Thumbprint</code>, <code>TimestampUrl</code>, <code>DlibPath</code>, <code>MetadataJson</code> — signs inner <code>.msi</code> first, then outer <code>Setup.exe</code>.</td>
            </tr>
            <tr x-show="!q || 'suite project buildorder rsis slnx'.includes(q.toLowerCase())">
              <th scope="row"><code>[Suite]</code> &amp; <code>[Project.&lt;Id&gt;]</code></th>
              <td><code>.rsis</code> Suite</td>
              <td>Groups multiple <code>.rsip</code> projects with <code>[Variable]</code> tokens, <code>Category</code> tags, and ascending <code>BuildOrder</code> (e.g., <code>.msm</code> = 10 &rarr; <code>.msi</code> = 20).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section aria-labelledby="ci-heading">
      <h2 id="ci-heading">GitHub Actions &amp; Microsoft Intune Quickstart</h2>
      <pre aria-label="GitHub Actions x64 and ARM64 Packaging Workflow">name: Package Windows x64 &amp; ARM64 Installers
on: [push]
jobs:
  package:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Lint .rsis Suite (Sub-Millisecond JSON Diagnostics)
        run: .\bin\x64\instbuild.exe .\AcmeSuite.rsis --validate --diagnostics=json
      - name: Compile Enterprise .MSI, Setup.exe &amp; VPAT 2.5 ACR
        run: .\bin\x64\instbuild.exe .\AcmeSuite.rsis --with-vpat</pre>

      <div class="table-wrap">
        <table>
          <caption>instbuild.exe &amp; SetupWizard.exe Standard Exit Codes</caption>
          <thead>
            <tr>
              <th scope="col">Exit Code</th>
              <th scope="col">Meaning</th>
              <th scope="col">CI/CD or Intune Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>0</code></th>
              <td><code>ERROR_SUCCESS</code> — Validation, compilation, or silent install succeeded</td>
              <td>Promote <code>.msi</code>, <code>-setup.exe</code>, and VPAT 2.5 report to release artifacts.</td>
            </tr>
            <tr>
              <th scope="row"><code>1</code></th>
              <td>Schema validation error, missing payload file, or post-build ICE80 check failure</td>
              <td>Parse <code>--diagnostics=json</code> line numbers in CI logs.</td>
            </tr>
            <tr>
              <th scope="row"><code>2</code></th>
              <td>Invalid command-line arguments or missing input path</td>
              <td>Verify CLI syntax against <code>instbuild.exe --help</code>.</td>
            </tr>
            <tr>
              <th scope="row"><code>3010</code></th>
              <td><code>ERROR_SUCCESS_REBOOT_REQUIRED</code> (Runtime <code>SetupWizard.exe /qn</code>)</td>
              <td>Standard Windows Installer soft-reboot return code recognized natively by Microsoft Intune &amp; SCCM.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderSecurityBody(): string {
  return `
    <section class="hero" aria-labelledby="sec-title">
      <span class="eyebrow">InfoSec, SBOM &amp; Air-Gap Architecture</span>
      <h1 id="sec-title">Security, Dual-Signing &amp; Zero-Telemetry Pledge</h1>
      <p class="lead">
        RaggieSoft Installer Studio is compiled strictly from first-party C++20 source with <code>cl.exe /MT</code> and the stock
        Windows 11 SDK—linking only OS-resident <code>System32</code> libraries with zero third-party packages, zero outbound network
        telemetry, and zero cryptocurrency/blockchain dependencies.
      </p>
    </section>

    <section aria-labelledby="sec-pillars">
      <h2 id="sec-pillars">Four Pillars of Supply-Chain Trust</h2>
      <div class="card-grid">
        <article class="card">
          <div>
            <h3>1. Static <code>/MT</code> Compilation &amp; Minimal SBOM</h3>
            <p>
              No NuGet graph, no npm runtime, no Electron Chromium bundle, and no external DLLs. Both the build tools and
              <code>SetupWizard.exe</code> call Microsoft's OS-serviced <code>msi.dll</code>, <code>cabinet.dll</code>, and <code>bcrypt.dll</code> directly.
            </p>
          </div>
        </article>
        <article class="card">
          <div>
            <h3>2. Dual-Layer Authenticode Code Signing</h3>
            <p>
              When <code>[Signing] Enabled = true</code>, <code>instbuild.exe</code> signs the inner <code>Product.msi</code> first, embeds the signed
              database into <code>Setup.exe</code> via <code>UpdateResourceW</code>, and signs the outer executable—supporting both local HSM thumbprints and Azure Artifact Signing.
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
              socket, phones home to a license server, or bundles cryptocurrency payment code.
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
    seoTitle: 'RaggieSoft Installer Studio — Install Without Limits',
    seoDescription:
      'Zero-dependency Win32 C++20 Windows packaging for x64 and ARM64. Compile .rsip manifests into Intune-ready .msi and WCAG 2.2 AA Setup.exe packages.',
    renderBody: renderHomeBody
  },
  {
    path: '/vpat',
    navLabel: 'VPAT & Accessibility',
    seoTitle: 'VPAT 2.5 & WCAG 2.2 AA Compliance | Installer Studio',
    seoDescription:
      'Download our WCAG 2.2 AA, ADA Title II, and Revised Section 508 VPAT 2.5 Conformance Report and inspect Win32 screen-reader and contrast telemetry.',
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
    path: '/pricing',
    navLabel: 'Pricing & POs',
    seoTitle: 'Transparent Pricing & Net-30 POs | Installer Studio',
    seoDescription:
      'Uncrippled Community ($0), Indie/Pro ($249 perpetual), and Enterprise ($2,499 team + unlimited CI runners, VPAT 2.5 & Net-30 POs) Windows packaging.',
    renderBody: renderPricingBody
  },
  {
    path: '/docs',
    navLabel: 'Docs & CLI',
    seoTitle: 'Documentation, .rsip Schema & CI YAML | Installer Studio',
    seoDescription:
      'Searchable .rsip project and .rsis suite reference, instbuild.exe exit codes, Intune silent flags, GitHub Actions YAML, and AI /llms.txt endpoints.',
    renderBody: renderDocsBody
  },
  {
    path: '/security',
    navLabel: 'Security & SBOM',
    seoTitle: 'Security, Static /MT SBOM & Signing | Installer Studio',
    seoDescription:
      'Static /MT Win32 C++20 compilation, dual-layer Azure Authenticode signing, air-gapped CI builds, and our zero-telemetry, zero-crypto pledge.',
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
        <p class="lead">The requested RaggieSoft Installer Studio documentation or storefront route could not be found.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="/">Return to Storefront Overview</a>
          <a class="btn btn-outline" href="/docs">Browse .rsip &amp; CLI Documentation</a>
        </div>
      </section>
    `;

  const html = `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand-link" href="/">
          <span class="brand-title">RaggieSoft Installer Studio</span>
          <span class="brand-sub">Install Without Limits • Native Win32 C++20 Packaging</span>
        </a>
        <nav aria-label="Primary Storefront Navigation">
          <ul class="nav-list">
            ${navItems}
            <li><a class="nav-link" href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a></li>
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
          <a href="/">Overview</a>
          <a href="/vpat">VPAT 2.5 &amp; Accessibility</a>
          <a href="/pricing">Pricing &amp; Net-30 POs</a>
          <a href="/docs">Docs &amp; CLI</a>
          <a href="/security">Security &amp; SBOM</a>
          <a href="/llms.txt">/llms.txt</a>
          <a href="/llms-full.txt">/llms-full.txt</a>
          <a href="https://a11y.raggiesoft.com">RaggieSoft Accessibility Studio</a>
          <a href="https://raggiesoft.dev">Engineered by RaggieSoft (raggiesoft.dev)</a>
        </div>
        <p>
          Copyright &copy; 2026 Michael P. Ragsdale / RaggieSoft. Core compiler &amp; runtime source licensed under the MIT License.
          Enterprise &amp; PO inquiries: <a href="mailto:enterprise@raggiesoftstudio.com">enterprise@raggiesoftstudio.com</a>.
        </p>
        <p class="disclaimer-box">${FICTITIOUS_DISCLAIMER}</p>
      </div>
    </footer>
  `;

  return { html };
}
