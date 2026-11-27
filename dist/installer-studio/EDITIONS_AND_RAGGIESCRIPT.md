# RaggieSoft Installer Studio — Official Editions Matrix, Standalone Self-Extractor & `RaggieScript` (`.rssc`) Architecture

**Product:** RaggieSoft Installer Studio (*Install Without Limits* — Flagship Pillar of **RaggieSoft Studio**)  
**Official Product Portal:** [https://raggiesoftstudio.com/installer-studio](https://raggiesoftstudio.com/installer-studio)  
**Web Product Matrix:** [https://raggiesoftstudio.com/installer-studio/editions](https://raggiesoftstudio.com/installer-studio/editions)  
**Open-Source & AI Hub:** [https://raggiesoft.dev](https://raggiesoft.dev)  
**License:** MIT License (Toolchain Source) • CC BY-SA 4.0 (Specifications & Documentation)

---

## 1. Official Four-Edition Lineup (`Community` • `Essentials` • `Developer` • `Architect`)

**RaggieSoft Installer Studio** replaces generic placeholder tier labels with four clearly scoped product editions designed around real-world software engineering workflows:

| Edition | Enum (`RswIdeEdition`) | Audience & Licensing Scope | Core Positioning |
| :--- | :--- | :--- | :--- |
| **Community Edition** | `RswIdeEdition::Community` | Free for hobbyists, solo independent creators, open-source maintainers, students, educators, and non-profit community organizations | **100% technical feature parity with Architect Edition (`Community == Architect`)** — every compiler engine, `RaggieScript`, visual designer, `.MSM` builder, `.MSP` patcher, `.rsis` Suite chainer, and VPAT 2.5 generator unlocked with **zero watermarks**. |
| **Essentials Edition** | `RswIdeEdition::Essentials` | Commercial Tier 1 (`1` developer workstation license; commercial CI/CD build server agents start in **Developer**) | Guided, no-code Windows packaging for commercial startups, small businesses, and internal IT tools: `.MSI` + `Setup.exe` (`x64`, `ARM64`, Universal), Basic `.ZIP`/Folder Self-Extractor, Pre-MSI Runtimes, `.MSM` consumption, and Major Upgrades. |
| **Developer Edition** | `RswIdeEdition::Developer` | Commercial Tier 2 (Workstation + Commercial CI/CD Build Agent rights) | Full programmable packaging for professional software teams: **creates `.MSM` Merge Modules**, unlocks **`RaggieScript` (`.rssc`)** zero-MSI native scripting & full `Engine = native`, From-Scratch C++ & `MSI.DLL` Dialog Designers, `.slnx` / VB6 `.vbp` importers, `msiprism.exe`, `RsUpdate.exe`, and `--emit-winget`. |
| **Architect Edition** | `RswIdeEdition::Architect` | Commercial Tier 3 (Enterprise Release Engineering, Regulated Procurement & Multi-Product Suites) | Flagship enterprise & compliance edition: **Multi-Product Unified `.rsis` Suites** (`Showcase Studio` front-door + dynamic `ARPSYSTEMCOMPONENT` adoption), **`.MSP` Binary-Delta Patches (`RsPatch.exe`) & `.MST` Transforms**, Multi-Volume Disk Spanning & `msiexec /a` Admin Images, **Automated HTML5 VPAT 2.5 Reports (`--emit-vpat`)**, and Windows Sandbox `.wsb` Setup Capture (`v1.1`). |

### Five Permanent Architectural & Ethical Guardrails Across Every Edition

1. **`Community == 100% Architect` Feature Parity (Forever)**:
   - Hobbyists, independent solo makers, students, educators, and open-source maintainers receive the complete **Architect Edition** capability set at zero cost—with zero locked IDE views, zero disabled CLI flags, zero mandatory online accounts, and **100% publisher-owned `VERSIONINFO` metadata** (no visible third-party watermarks on customer wizard dialogs or `Setup.exe` properties).
2. **Runtime Accessibility (`WCAG 2.2 Level AA`) Is NEVER Paywalled**:
   - Every installer compiled by **any** edition—including **Essentials**—ships with full keyboard navigation, `&` mnemonics, screen-reader UI Automation roles (`Narrator`, `NVDA`, `JAWS`), automatic OS Dark Mode and Light Mode (`WM_SETTINGCHANGE`), Windows Contrast Theme overrides (`SPI_GETHIGHCONTRAST`), and compile-time `RSW055` WCAG contrast verification. Accessibility for end users is a baseline human right, never an enterprise upsell.
3. **Cryptographic Code Signing Is NEVER Paywalled**:
   - Dual-Layer Authenticode and **Microsoft Azure Artifact Signing** (`signtool.exe` + RFC 3161 SHA-256 timestamping across inner binaries, `.msi` databases, and outer `Setup.exe` stubs) are included in **every** edition, including **Essentials**.
4. **`.MSM` Merge Modules in `Essentials` (Consume = Yes • Create = No)**:
   - **Essentials Edition** **can consume** existing 32-bit and 64-bit `.MSM` Merge Modules (`[MergeModule.<Id>]`) so commercial teams can bundle vendor runtimes and shared redistributables into `Product.msi`. Authoring and compiling *new* `.MSM` Merge Modules (`PackageKind = msm` / `--emit-msm`) starts in **Developer Edition** (and **Community**).
5. **Version Servicing in `Essentials` (`Major Upgrades Only` — Zero `.MSP` Complexity)**:
   - **Essentials Edition** does **not** generate `.MSP` binary-delta patch files or `.MST` transforms. Shipping an update from `1.0.0` to `1.0.1` in **Essentials** automatically performs a clean Windows Installer **Major Upgrade** (minting a fresh `ProductCode` under your permanent `UpgradeCode` so `MSI.DLL`'s `Upgrade` table and `RemoveExistingProducts` action replace `1.0.0` atomically in a single transaction). Binary-delta `.MSP` patch generation (`RsPatch.exe` + `--plan-update`) and `.MST` GPO transforms belong to **Architect Edition** (and **Community**).

---

## 2. Master Product Editions Comparison Matrix

This canonical comparison table is synchronized between `EDITIONS_AND_RAGGIESCRIPT.md`, `RswVersion.hpp`, offline `F1` documentation (`welcome-overview.html`), and the public product matrix at `https://raggiesoftstudio.com/installer-studio/editions`:

| Capability / Feature | **Community** *(Free — Hobbyist, Solo, EDU & OSS)* | **Essentials** *(Commercial Tier 1)* | **Developer** *(Commercial Tier 2)* | **Architect** *(Commercial Tier 3)* |
| :--- | :---: | :---: | :---: | :---: |
| **100% Publisher-Owned `VERSIONINFO` (Zero Watermarks)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Native `x64`, `ARM64` & CPU-Aware Universal `Setup.exe`** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Relational `.MSI` Compiler + `ICE18`/`38`/`64`/`80` Validator** | **Yes** | **Yes** | **Yes** | **Yes** |
| **WCAG 2.2 AA Runtime UI, Dark/Light Mode & Contrast Themes** | **Yes** | **Yes** | **Yes** | **Yes** |
| **6 Guided AeroWizards & All 11 Built-In Wizard Styles** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Built-In Setup Types (`Express/Custom` & `Typical/Compact/Complete`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Basic Folder / `.ZIP` Self-Extractor (`PackageKind = sfx` + `%TEMP%` Wrapper)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Standalone Self-Extractor Desktop Utility (`rswsfx.exe`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Pre-MSI Runtime Prerequisites (`.NET 11 / 10`, `WebView2`, `VC++`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Dual-Layer Authenticode & Microsoft Azure Artifact Signing** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Consume Existing `.MSM` Merge Modules (`[MergeModule.*]`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Application Version Servicing (`1.0.0` → `1.0.1`)** | Major Upgrade + `.MSP` Delta | **Major Upgrade Only** *(Fresh `ProductCode`)* | **Major Upgrade Only** *(Fresh `ProductCode`)* | **Major Upgrade + `.MSP` Binary-Delta Patches** |
| **Create / Compile New `.MSM` Merge Modules (`PackageKind = msm`)** | **Yes** | — | **Yes** | **Yes** |
| **`RaggieScript` (`.rssc`) Zero-MSI Native Scripting & `Engine = native`** | **Yes** | — | **Yes** | **Yes** |
| **From-Scratch C++ (`[Dialog.*]`) & `370×270` `MSI.DLL` Dialog Designers** | **Yes** | — | **Yes** | **Yes** |
| **Custom Author-Defined `[SetupType.<Id>]` Cards & `@include` `.rsii` Libraries** | **Yes** | — | **Yes** | **Yes** |
| **Solution & Legacy Importers (`.slnx`, `.csproj`, VB6 `.vbp` Reg-Free COM, `.msi`)** | **Yes** | — | **Yes** | **Yes** |
| **`msiprism.exe` 64-Bit SQL Inspector, `RsUpdate.exe` & `--emit-winget`** | **Yes** | — | **Yes** | **Yes** |
| **Commercial CI/CD Build Server Agents (GitHub Actions / Azure DevOps)** | OSS / Personal Repos | Workstation CLI (`1` Seat) | **Yes** | **Yes** |
| **Multi-Product Unified `.rsis` Suites + `Showcase Studio` Front-Door** | **Yes** | — | — | **Yes** |
| **`.MSP` Binary-Delta Patches (`RsPatch.exe`, `--plan-update`) & `.MST` Transforms** | **Yes** | — | — | **Yes** |
| **Multi-Volume Disk Spanning (`CAB1..N.cab`), Loose Media & `msiexec /a`** | **Yes** | — | — | **Yes** |
| **Granular On-Demand CDN Feature Packs (`.rswpak`)** | **Yes** | — | — | **Yes** |
| **Automated HTML5 VPAT 2.5 Conformance Report Generator (`--emit-vpat`)** | **Yes** | — | — | **Yes** |
| **Windows 11 Pro Sandbox (`.wsb`) Setup Capture & `--emit-sbom` (`v1.1+`)** | **Yes** | — | — | **Yes** |

---

## 3. Standalone Folder / `.ZIP` Self-Extractor Utility (`RaggieSoft Self-Extractor`)

Alongside the integrated `PackageKind = sfx` workflow inside `InstallerStudio.exe` and `instbuild.exe`, **RaggieSoft Self-Extractor** is also offered as a dedicated, single-purpose standalone utility (inspired by classic late-1990s web-delivery self-extractor tools):

1. **Two Focused Delivery Modes**:
   - **Mode A — Standard Folder / Archive Extractor**: Compresses any directory or `.zip` archive with Windows `COMPRESS_ALGORITHM_LZMS` (`Cabinet.lib`) into a single native `.exe` with Dark/Light/High-Contrast UI, destination folder picker, `DefaultExtractSubdir`, overwrite prompt policy, and optional `PostExtractRun` or `PostExtractOpen` (`ShellExecuteExW` document launch).
   - **Mode B — Software Installation `%TEMP%` Wrapper**: Unpacks a multi-file setup payload silently or with a clean progress bar into an isolated `%TEMP%\rsw-sfx-<Slug>-<PID>` directory, launches the inner setup executable (`PostExtractRun`), waits until the entire installation finishes, and automatically deletes the temporary staging folder (`CleanupTempAfterRun = true`).
2. **Legacy & Multi-Process Setup Completion Detection (`WaitMode` + `WaitForProcess`)**:
   - Classic 1990s/2000s bootstrapper stubs frequently exit immediately after spawning a child engine or defer final file cleanup to a companion helper binary (most famously **`_ISDEL.EXE`**, `_INST32I.EX_`, `SETUP.INS`, and `_INS*._MP`).
   - When `WaitMode = auto` (default), `SetupWizard.exe` attaches a Win32 Job Object (`CreateJobObjectW`) to track the entire spawned process tree **and** automatically enables companion process watching (`_ISDEL.EXE`, `_INS*._MP`) whenever those classic markers are detected in the archive—or waits for any user-specified semicolon-delimited `WaitForProcess` names across a configurable spawn grace window (`WaitSpawnGraceMs = 4000`) before scrubbing `%TEMP%`.
3. **Full UAC & Signing Control**:
   - Selectable `RequestedExecutionLevel` (`asInvoker`, `highestAvailable`, or `requireAdministrator`), custom `.ico` and publisher `VERSIONINFO`, and optional Dual-Layer Authenticode / Azure Artifact Signing.

---

## 4. `RaggieScript` (`.rssc` — Style A) Zero-MSI Native Scripting Engine (`v0.7.0`)

### 4.1 Design Origin & Why We Built a Custom C++20 "Mini-Roslyn" Bytecode Compiler

In the RaggieSoft narrative universe (`/books/aubrie`), Zoë designs **Fin# (*Finance Sharp*)** by forking a managed compiler pipeline so financial transactions enforce double-entry invariants at compile time rather than failing mid-settlement at runtime.

For **RaggieSoft Installer Studio**, shipping an actual `.NET` compiler runtime (`60–90 MB`) inside customer installers would violate our core **Zero-Dependency Static `/MT` Win32 C++20** charter—yet classic string-concatenated macro languages lack type safety, IDE diagnostics, and automatic rollback. **`RaggieScript` (`.rssc`)** takes the exact architectural lesson of *Fin#* and implements a **purpose-built, ~2,500-LOC C++20 "Mini-Roslyn" compiler and `< 50 KB` stack bytecode VM**:

1. **Stage 1 — Lossless UTF-8 Lexer & Trivia-Preserving AST (`RswScriptAst.hpp`)**:
   - Every token records exact `1-based` `(line, column, length)` source spans and leading/trailing comment trivia, powering `instbuild.exe --validate --diagnostics=json` for AI coding agents and live squiggles inside `InstallerStudio.exe`.
2. **Stage 2 — Static Type & Phase-Isolation Binder (`RswScriptBinder.hpp`)**:
   - Statically checks types (`string`, `bool`, `int`, `version`, `path`, `enum`) and enforces **compile-time phase isolation** between `wizard { ... }`, `install { ... }`, and `uninstall { ... }`:
     - **`wizard { ... }` is strictly read-only / side-effect-free**: Can inspect OS state (`sys.*`, `reg.read`, `fs.exists`, `net.probe`) and present accessible wizard steps (`step <Id> { ... } when (...)`), while the VM automatically records a step-navigation stack so clicking **`← Back`** rewinds cleanly without spaghetti `goto` labels. Attempting to call mutating operations (`fs.extract`, `reg.write`, `shortcut.create`, `exec.run`) inside `wizard` raises compile-time error **`RSW701`**.
     - **`install { ... }` is an atomic double-entry ledger**: Every mutating operation (`fs.extract`, `fs.writeText`, `reg.write`, `shortcut.create`, `fileAssoc.register`, `env.appendPath`, `exec.run`) automatically logs its exact inverse undo entry to `.rsw-rollback.jnl` (moving overwritten files to `.rswbak` until commit) for instant mid-install cancellation rollback **and** appends clean uninstallation records to `Uninstall.rswm` for signed native `Uninstall.exe`!
3. **Stage 3 — `RSWBC1` Compact Bytecode Resource & Zero-MSI Execution (`RswScriptVm.hpp`)**:
   - Compiles down to a deterministic binary `RSWBC1` bytecode stream embedded as Win32 `RT_RCDATA` (`kResIdScriptBytecode = 225`) inside `<Product>-setup.exe`.
   - `SetupWizard.exe` links `msi.dll` with `/DELAYLOAD:msi.dll`. When executing a standalone `.rssc` or `Engine = native` installer, **`msi.dll` is never even loaded into process memory** and **`Global\_MSIExecute` is never acquired**—installing thousands of files in milliseconds with zero Windows Installer dependency!

### 4.2 Dual Authoring Modes: Standalone `.rssc` OR Hybrid `.rsip` + `.rssc`

Developers in **Community**, **Developer**, and **Architect** editions can use `RaggieScript` in two ways:

- **Mode 1 — 100% Standalone `.rssc` Project (`instbuild.exe setup.rssc --arch=x64`)**: Author a complete zero-MSI native installer in a single modern curly-brace `.rssc` source file with no `.rsip` manifest required.
- **Mode 2 — Hybrid `.rsip` Manifest + `ScriptFile = setup.rssc`**: Keep declarative `.rsip` trees for files, features, or `.msi` tables while attaching a `.rssc` script for custom wizard steps, endpoint/license validation, and lifecycle hooks (`onBeforeInstall`, `onAfterInstall`).

### 4.3 Canonical Style A `RaggieScript` (`.rssc`) Syntax Blueprint

```csharp
// ============================================================================
// FILE: setup.rssc — Standalone RaggieScript (Style A) Native Installer
// Compiles directly via: instbuild.exe setup.rssc --arch=x64 --universal
// Zero msi.dll dependency • Automatic Rollback Journal • WCAG 2.2 AA Runtime
// ============================================================================

package "Sample Studio CLI & Workbench" {
  id:           "{9B4E20A1-7C93-4D62-9B44-524147474950}";
  version:      1.2.0;
  publisher:    "Sample Studio";
  arch:         targetArch();          // "x64" | "arm64"
  scope:        Scope.Machine;         // Scope.Machine | Scope.User | Scope.DualChoice
  uac:          Uac.AsInvoker;         // Elevates worker just-in-time on Install
  style:        WizardStyle.AeroWizard;
  accent:       "#2563EB";
}

// Command-line & silent-install parameters (auto-parsed from `Setup.exe PORT=9090 /s`)
param installDir: path   = sys.programFiles / "Sample Studio" / "Workbench";
param addToPath:  bool   = true;
param createDesk: bool   = false;
param serverUrl:  string = "https://raggiesoftstudio.com";

// Solid LZMS payload groups packed into RSWPAK1 resource #220 at compile time
payload CoreFiles {
  from "..\\publish\\win-${arch}\\*" -> installDir;
}

payload OfflineDocs {
  from "..\\docs\\help\\*" -> installDir / "Help";
}

// ----------------------------------------------------------------------------
// PHASE 1: WIZARD UI & READ-ONLY PRE-FLIGHT (Side-effect-free; auto `<- Back`!)
// ----------------------------------------------------------------------------
wizard {
  if (sys.windowsBuild < 22000) {
    ui.abort("Sample Studio Workbench requires Windows 11 (Build 22000 or newer).");
  }

  step Welcome {
    ui.welcome(
      title:    "Welcome to Sample Studio Workbench",
      subtitle: "Fast, accessible native tooling for Windows 11 x64 and ARM64."
    );
  }

  step License {
    ui.license(rtfFile: "License.rtf");
  }

  step Destination {
    ui.folderPicker(
      label:    "Install &location:",
      bind:     ref installDir,
      minFreeMB: 120
    );
    ui.checkbox(text: "Add Workbench CLI to system &PATH", bind: ref addToPath);
    ui.checkbox(text: "Create &Desktop shortcut",          bind: ref createDesk);
  }

  step Endpoint when (!sys.isSilent) {
    ui.heading("Default Studio Endpoint");
    ui.textBox(
      label: "&Server URL:",
      bind:  ref serverUrl,
      validate: (val) => str.startsWith(val, "https://")
        ? Validation.ok()
        : Validation.error("Please enter an HTTPS endpoint starting with https://.")
    );
  }

  step Ready {
    ui.readySummary(installButton: "&Install");
  }
}

// ----------------------------------------------------------------------------
// PHASE 2: ATOMIC DOUBLE-ENTRY INSTALL LEDGER (Auto-journaled & auto-uninstalled!)
// ----------------------------------------------------------------------------
install {
  fs.extract(CoreFiles);
  fs.extract(OfflineDocs);

  fs.writeJson(installDir / "config.json", {
    endpoint: serverUrl,
    channel:  "stable"
  });

  reg.writeString(Hive.HKLM, "Software\\SampleStudio\\Workbench", "InstallDir", str(installDir));

  shortcut.create(
    location: ShortcutLocation.StartMenu,
    name:     "Sample Studio Workbench",
    target:   installDir / "Workbench.exe"
  );

  if (createDesk) {
    shortcut.create(
      location: ShortcutLocation.Desktop,
      name:     "Sample Studio Workbench",
      target:   installDir / "Workbench.exe"
    );
  }

  if (addToPath) {
    env.appendPath(Scope.Machine, installDir / "bin");
  }
}

// ----------------------------------------------------------------------------
// PHASE 3: OPTIONAL CUSTOM UNINSTALL CLEANUP (Core files/reg/shortcuts undo automatically!)
// ----------------------------------------------------------------------------
uninstall (bool purgeUserData) {
  if (purgeUserData) {
    fs.removeTreeIfExists(sys.localAppData / "SampleStudio" / "Workbench" / "Cache");
  }
}
```

---

## Fictitious Persons & Entities Disclaimer

All narrative characters (including *Zoë* and her in-universe language *Fin#*), bands (including *The Stardust Engine*), biographies, universities (including *Commonwealth Polytechnic Institute / CPI*, *Virginia Dominion University / VDU*, *The Forgers*, and *The Crucible*), corporations (including *OmniCorp*, *Apex Records*, *Prairie Coachworks*, and *Sainte-Claire*), transit agencies (*BRT* and *CVTA*), in-universe legal filings, and events referenced across RaggieSoft works and sample content packs are works of fiction. In real life, **RaggieSoft**, **RaggieSoft Media**, **Engine Room Records**, **Ocean View Archives**, and **RaggieSoft Story Crossroads** are unincorporated creative imprints of Michael P. Ragsdale.
