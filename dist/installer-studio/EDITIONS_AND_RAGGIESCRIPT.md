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
| **Developer Edition** | `RswIdeEdition::Developer` | Commercial Tier 2 (Workstation + Commercial CI/CD Build Agent rights) | Full programmable packaging for professional software teams: **creates `.MSM` Merge Modules**, unlocks **`RaggieScript` (`.rssc`) & RaggieScript EXE (`Engine = raggiescript`)**, From-Scratch C++ & `MSI.DLL` Dialog Designers, `.slnx` / VB6 `.vbp` importers, `msiprism.exe`, `RsUpdate.exe` (shared Launcher JSON updater), and `--emit-winget`. |
| **Architect Edition** | `RswIdeEdition::Architect` | Commercial Tier 3 (Enterprise Release Engineering, Regulated Procurement & Multi-Product Suites) | Flagship enterprise & compliance edition: **Multi-Product Unified `.rsis` Suites** (`Showcase Studio` front-door + dynamic `ARPSYSTEMCOMPONENT` adoption), **`.MSP` & `.rswpatch` Binary-Delta Patches (`RsPatch.exe`, `--plan-update`) & `.MST` Transforms**, Multi-Volume Disk Spanning & `msiexec /a` Admin Images, **Automated HTML5 VPAT 2.5 Reports (`--emit-vpat`)**, and Windows Sandbox `.wsb` Setup Capture (`v1.1`). |

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

### Zero-Telemetry Offline Cryptographic `.rswlic` Licensing (`No License File == Community Edition`)

- **No `.rswlic` License File == Present `Community Edition` (`RswIdeEdition::Community`)**:
  - Neither `InstallerStudio.exe`, `instbuild.exe`, nor `RsPatch.exe` contains any menu backdoor or unverified `--edition=` CLI flag to spoof commercial tiers. Whenever no `.rswlic` license file is installed, the software automatically presents **Community Edition** (`100% Architect Parity`, zero locked views, zero watermarks).
- **Offline Asymmetric NIST P-256 ECDSA `.rswlic` Certificates (`bcrypt.dll`)**:
  - Commercial editions (**Essentials**, **Developer**, **Architect**, and All-Access **RaggieSoft Studio** Suite bundles) unlock via a human-readable `.rswlic` file (`Format = RSWLIC1`) cryptographically signed with RaggieSoft's offline NIST P-256 ECDSA private key and verified in `< 0.2ms` via stock Windows `C:\Windows\System32\bcrypt.dll` (`BCRYPT_ECDSA_P256_ALGORITHM` + `SHA-256`) against the embedded 64-byte public key (`src/common/RswLicensing.hpp`)—requiring **zero internet connection, zero activation servers, zero accounts, zero hardware/motherboard fingerprinting, and zero background license services**.
- **Ordered `.rswlic` Discovery Across Workstations, Air-Gapped IT, & Headless CI/CD**:
  - Automatically checks `--license-file=<path.rswlic>`, `RSW_LICENSE_KEY` (file path or inline/Base64 secret for GitHub Actions & Azure DevOps runners), portable `<ExeDir>\installer-studio.rswlic` / `raggiesoft-studio.rswlic`, `%LOCALAPPDATA%\RaggieSoft\Licenses\`, and `%PROGRAMDATA%\RaggieSoft\Licenses\`—plus drag-and-drop `.rswlic` activation and `Help -> Activate / Import License File (.rswlic)...` inside `InstallerStudio.exe`.
- **Permanent Zero-Activation & Zero-Phone-Home Safeguards**:
  - RaggieSoft Studio **never** contacts online activation servers and **never** fingerprints PC hardware. Instead, `.rswlic` cryptographically locks `Licensee`, `LicenseId`, `Edition`, and `Seats`—displaying `Licensed to <Licensee> (<Seats>-Seat License)` in the `InstallerStudio.exe` window caption, CLI build headers, and exported HTML5 **VPAT 2.5** provenance metadata *(never on end-user customer `SetupWizard.exe` installers!)*, enforcing workstation-vs-CI/CD scope (`RSW099` on `Essentials` in headless CI), and checking a static `constexpr` leaked-key blocklist (`kRevokedLicenseIds`) 100% offline.

---

## 2. Master Product Editions Comparison Matrix

This canonical comparison table is synchronized between `EDITIONS_AND_RAGGIESCRIPT.md`, `RswVersion.hpp`, offline `F1` documentation (`welcome-overview.html`), and the public product matrix at `https://raggiesoftstudio.com/installer-studio/editions`:

| Capability / Feature | **Community** *(Free — Hobbyist, Solo, EDU & OSS)* | **Essentials** *(Commercial Tier 1)* | **Developer** *(Commercial Tier 2)* | **Architect** *(Commercial Tier 3)* |
| :--- | :---: | :---: | :---: | :---: |
| **100% Publisher-Owned `VERSIONINFO` (Zero Watermarks)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Native `x64`, `ARM64` & CPU-Aware Universal `Setup.exe`** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Relational `.MSI` Compiler + `ICE18`/`38`/`64`/`80` Validator** | **Yes** | **Yes** | **Yes** | **Yes** |
| **WCAG 2.2 AA Runtime UI, Dark/Light Mode & Contrast Themes** | **Yes** | **Yes** | **Yes** | **Yes** |
| **8 Guided AeroWizards & All 11 Built-In Wizard Styles** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Built-In Setup Types (`Express/Custom` & `Typical/Compact/Complete`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Host-Aware Add-On / Content Pack Installers (`PackageKind = addon` + `[HostApp]`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Basic Folder / `.ZIP` Self-Extractor (`PackageKind = sfx` + `%TEMP%` Wrapper)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Standalone Self-Extractor Desktop Utility (`rswsfx.exe`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Pre-MSI Runtime Prerequisites (`.NET 11 / 10`, `WebView2`, `VC++`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Dual-Layer Authenticode & Microsoft Azure Artifact Signing** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Consume Existing `.MSM` Merge Modules (`[MergeModule.*]`)** | **Yes** | **Yes** | **Yes** | **Yes** |
| **Application Version Servicing (`1.0.0` → `1.0.1`)** | Major Upgrade + `.MSP` Delta | **Major Upgrade Only** *(Fresh `ProductCode`)* | **Major Upgrade Only** *(Fresh `ProductCode`)* | **Major Upgrade + `.MSP` Binary-Delta Patches** |
| **Create / Compile New `.MSM` Merge Modules (`PackageKind = msm`)** | **Yes** | — | **Yes** | **Yes** |
| **`RaggieScript` (`.rssc`) & `RaggieScript EXE` (`Engine = raggiescript`)** | **Yes** | — | **Yes** | **Yes** |
| **From-Scratch C++ (`[Dialog.*]`) & `370×270` `MSI.DLL` Dialog Designers** | **Yes** | — | **Yes** | **Yes** |
| **Custom Author-Defined `[SetupType.<Id>]` Cards & `@include` `.rsii` Libraries** | **Yes** | — | **Yes** | **Yes** |
| **Solution & Legacy Importers (`.slnx`, `.csproj`, VB6 `.vbp` Reg-Free COM, `.msi`)** | **Yes** | — | **Yes** | **Yes** |
| **`msiprism.exe` Read/Write SQL Table Editor (Bundled & Standalone), `RsUpdate.exe` & `--emit-winget`** | **Yes** | — | **Yes** | **Yes** |
| **Commercial CI/CD Build Server Agents (GitHub Actions / Azure DevOps)** | OSS / Personal Repos | Workstation CLI (`1` Seat) | **Yes** | **Yes** |
| **Multi-Product Unified `.rsis` Suites + `Showcase Studio` Front-Door** | **Yes** | — | — | **Yes** |
| **`.MSP` Binary-Delta Patches (`RsPatch.exe`, `--plan-update`) & `.MST` Transforms** | **Yes** | — | — | **Yes** |
| **Multi-Volume Disk Spanning (`CAB1..N.cab`), Loose Media & `msiexec /a`** | **Yes** | — | — | **Yes** |
| **Granular On-Demand CDN Feature Packs (`.rswpak`)** | **Yes** | — | — | **Yes** |
| **Automated HTML5 VPAT 2.5 Conformance Report Generator (`--emit-vpat`)** | **Yes** | — | — | **Yes** |
| **Windows 11 Pro Sandbox (`.wsb`) Setup Capture & `--emit-sbom` (`v1.1+`)** | **Yes** | — | — | **Yes** |

---

## 3. Standalone Folder / `.ZIP` Self-Extractor Utility (`RaggieSoft Self-Extractor` — `rswsfx.exe`)

Alongside the integrated `PackageKind = sfx` workflow inside `InstallerStudio.exe` and `instbuild.exe`, **RaggieSoft Self-Extractor (`rswsfx.exe`)** ships both inside every edition of Installer Studio and as its own standalone desktop & CLI utility (`projects/apps/self-extractor/self-extractor.rsip`, `rswsfx.exe --pack <folder-or-zip> <output.exe>`):

1. **Two Focused Delivery Modes**:
   - **Mode A — Standard Folder / Archive Extractor**: Compresses any directory or `.zip` archive with Windows `COMPRESS_ALGORITHM_LZMS` (`Cabinet.lib`) into a single native `.exe` with Dark/Light/High-Contrast UI, destination folder picker, `DefaultExtractSubdir`, overwrite prompt policy, and optional `PostExtractRun` or `PostExtractOpen` (`ShellExecuteExW` document launch).
   - **Mode B — Software Installation `%TEMP%` Wrapper**: Unpacks a multi-file setup payload silently or with a clean progress bar into an isolated `%TEMP%\rsw-sfx-<Slug>-<PID>` directory, launches the inner setup executable (`PostExtractRun`), waits until the entire installation finishes, and automatically deletes the temporary staging folder (`CleanupTempAfterRun = true`).
2. **Legacy & Multi-Process Setup Completion Detection (`WaitMode` + `WaitForProcess`)**:
   - Classic 1990s/2000s bootstrapper stubs frequently exit immediately after spawning a child engine or defer final file cleanup to a companion helper binary (most famously **`_ISDEL.EXE`**, `_INST32I.EX_`, `SETUP.INS`, and `_INS*._MP`).
   - When `WaitMode = auto` (default), `SetupWizard.exe` attaches a Win32 Job Object (`CreateJobObjectW`) to track the entire spawned process tree **and** automatically enables companion process watching (`_ISDEL.EXE`, `_INS*._MP`) whenever those classic markers are detected in the archive—or waits for any user-specified semicolon-delimited `WaitForProcess` names across a configurable spawn grace window (`WaitSpawnGraceMs = 4000`) before scrubbing `%TEMP%`.
3. **Full UAC & Signing Control**:
   - Selectable `RequestedExecutionLevel` (`asInvoker`, `highestAvailable`, or `requireAdministrator`), custom `.ico` and publisher `VERSIONINFO`, and optional Dual-Layer Authenticode / Azure Artifact Signing.

---

## 4. `RaggieScript` (`.rssc` — Style A) Zero-MSI Native Scripting & Micro-App Engine

### 4.1 Design Origin & C++20 "Mini-Roslyn" Bytecode Architecture (`RswRaggieScript.hpp` + `RswRaggieScriptVm.hpp`)

In the RaggieSoft narrative universe (`/books/aubrie`), Zoë designs **Fin# (*Finance Sharp*)** by building a compiler pipeline where financial transactions enforce double-entry invariants at compile time rather than failing mid-settlement at runtime.

For **RaggieSoft Installer Studio**, shipping a 60–90 MB managed compiler inside customer installers would violate our **Zero-Dependency Static `/MT` Win32 C++20** charter—yet untyped macro scripts suffer from stateful 32/64-bit mode bugs, missing `<` version operators, and broken rollback. **`RaggieScript` (`.rssc`)** implements a **zero-dependency static `/MT` C++20 compiler, `RSWBC1` bytecode codec, and 15-namespace Win32 VM** (`src/common/RswRaggieScript.hpp`, `src/common/RswRaggieScriptVm.hpp`, and `src/script/RswScriptMain.cpp` -> `raggiescript.exe`):

1. **Stage 1 — Preprocessor (`include` / `import` / `#if` / `#elif` / `#else`) & Rich Lexer (`RswRaggieScript.hpp`)**:
   - Supports idempotent `include "raggiesoft-requirements.rssc";`, `#if` / `#elif` / `#else` / `#endif` conditional compilation, raw string literals (`r"SOFTWARE\RaggieSoft\Book Reader"` with zero double-backslash noise!), `${...}` string interpolation, and first-class 4-part semantic version literals (`v"10.0.22000"` and `1.2.0`) supporting `<, <=, ==, !=, >=, >` directly!
2. **Stage 2 — Compile-Time Phase Isolation (`RSW701`) & Capability Sandbox (`RSW702`)**:
   - **`RSW701` (Wizard Phase Isolation)**: Statically rejects any mutating host call (`fs.write*`, `fs.extract`, `reg.write*`, `ini.write`, `shortcut.create`, `env.*`, `svc.*`, etc.) inside `wizard { ... }`—**including transitive calls through user-defined `fn` helper functions**—before a single byte executes!
   - **`RSW702` (Capability Sandbox)**: Blocks filesystem, registry, network, service, and process APIs when compiling sandboxed profiles such as `use training;` for SCORM courseware.
3. **Stage 3 — `RSWBC1` SHA-256 Bytecode, Atomic `.rsw-rollback.jnl` Ledger & `raggiescript.exe`**:
   - Serializes AST/IR into a compact `RSWBC1` binary container protected by a 32-byte `bcrypt.dll` `SHA-256` digest (`kResIdScriptBytecode = 225`), paired with solid `LZMS` `RSWPAK1` payloads & `_support\` staging (`#220`).
   - Every mutating call in `install { ... }` records inverse undo entries in `.rsw-rollback.jnl` + `.rswbak` file backups for LIFO rollback on error/cancel, and writes `<InstallDir>\Uninstall.exe` + `<InstallDir>\Uninstall.rswm` on commit!

### 4.2 Three Execution & Packaging Workflows (`instbuild.exe` & `raggiescript.exe`)

- **Workflow 1 — Direct `.rssc` Installer Compilation (`instbuild.exe setup.rssc --arch=x64` or `--universal`)**: Compiles `.rssc` into `RSWBC1` (`#225`), packs `payload` + `supportDir` files into `RSWPAK1` (`#220`), and stamps `SetupWizard.exe` with publisher `VERSIONINFO`, `.ico`, and UAC `RequestedExecutionLevel`.
- **Workflow 2 — Standalone Zero-Dependency Windows Micro-Apps (`raggiescript.exe pack-exe app.rssc Tool.exe`)**: Packs any `app` or `showcase` `.rssc` script (plus optional `--support-dir=./_support`) into a self-contained single-file Windows `.exe` (`x64` or `ARM64`), alongside `raggiescript.exe check [--diagnostics=json]`, `compile`, `disasm`, and `run`.
- **Workflow 3 — Dual CLI Parameter Governance (`KEY=VALUE` vs. `KEY:VALUE`)**: Supports mutable CLI overrides (`Setup.exe /s installDir="D:\Tools"`) **and** IT-locked immutable policy overrides (`Setup.exe /s installDir:"C:\Program Files\Approved"`), plus structured UTF-8 logging via `/l=<path>`.

### 4.3 Complete 16-Namespace Win32 Standard Library, Deferred UAC & Editor Tooling

- **Commit-Time Deferred UAC Broker (`Uac.Deferred` / `--elevated-rssc-worker`)**:
  - Because `RSW701` statically proves `wizard { ... }` cannot mutate the system, stamping `uac: Uac.Deferred` writes `<requestedExecutionLevel level="asInvoker" />` into the Win32 PE manifest so the wizard opens immediately with **zero upfront UAC prompt**.
  - When `wizard { ... }` completes and the user clicks **Install**, `RaggieScriptVm` serializes user-chosen variables and feature selections (`ExportWizardStateJson`) and launches `--elevated-rssc-worker` via `ShellExecuteExW(L"runas")`—prompting for UAC at the exact moment of installation (matching `MsiSetExternalUIRecord` installers!).
- **Standalone & Bundled Read/Write SQL Editor (`RaggieSoft MSI Prism` — `msiprism.exe`)**:
  - Packaged both inside **Installer Studio** (`Community`, `Developer`, `Architect`) and as its own standalone desktop utility (`projects/apps/msi-prism/msi-prism.rsip`), `msiprism.exe` provides full read/write Windows Installer relational SQL table editing (`New .MSI`, `Save As`, `+ Add Row`, `Edit Row` modal with `SummaryInformation` & `Binary` stream import, `Delete Row`, `Export JSON`, interactive `MSI SQL:` DDL/DML bar, and headless `--exec-sql` / `--export-table-json` CLI flags).
- **Syntax Highlighting Everywhere (`editors/` + Integrated Win32 RichEdit 5.0 IDE)**:
  - **Integrated IDE Editor (`InstallerStudio.exe`)**: Native `Msftedit.dll` RichEdit 5.0 `.rssc`/`.rsip`/`.rsis` code editor (`src/ide/RswSyntaxHighlighter.hpp`) with Dark/Light/High-Contrast token palettes, synchronized line-number gutter, `F7` `RSW701`/`RSW702` lint, and `F5` compile.
  - **VS Code Extension (`editors/vscode-raggiescript` + `.vsix`)**: TextMate `.tmLanguage.json` for `.rssc` and `.rsip`/`.rsis`, snippets, and live `raggiescript.exe check --diagnostics=json` diagnostics.
  - **Additional Editors**: Notepad++ Light & Dark UDL XML (`editors/notepadplusplus/`), Sublime Text (`editors/sublime-text/`), Vim/Neovim (`editors/vim/`), KDE Kate (`editors/kate/`), and GitHub Linguist (`.gitattributes`).

| Namespace | Core Built-In Capabilities |
| :--- | :--- |
| **`std` (Globals) & `compile.*`** | `str()`, `int()`, `float()`, `bool()`, `path()`, `ver()`, `len()`, `typeof()`, `print()`, `assert()`, `sleep()`, `coalesce()` / `??`, `def()`, `range()`, `#define`/`#ifndef`, `compile.json()`, `compile.text()`, plus `Scope`, `Uac` (`AsInvoker`, `Deferred`, `HighestAvailable`, `RequireAdministrator`), `Token`, `RegView`, `Icon`, and canonical exit constants. |
| **`sys.*`** | `arch()`, `isArm64()`, `isX64()`, `isEmulatedUnderPrism()` (`IsWow64Process2`), `osBuild()`, `osVersion()` (`ntdll!RtlGetVersion`), `isWindows11()`, `isServer()`, `isAdmin()`, `uacEnabled()`, `isSilent()`, `cliArg()`, `hasSwitch()`, `ramMB()`, `cpuCores()`, `freeDiskMB()`, `dpi()`, `isDarkMode()`, `isHighContrast()`, `editionId()`, `machineGuid()`, `newGuid()`, `uuid5()`, `folder()`, `rebootAndResume()`, `getResumeState()`, `clearResumeState()`, and known folder properties (`programFiles`, `programFilesX86`, `localAppData`, `programData`, `system32Dir`, `sysWow64Dir`, `supportDir`, etc.). |
| **`fs.*`** | `exists`, `isDir`, `isFile`, `isLocked` (exclusive handle lock probe), `size`, `fileVersion` (`VS_FIXEDFILEINFO` -> `SemVer`), `findFiles`, `readText`, `writeText`, `appendText`, `readJson`, `writeJson`, `mkdir`, `copy`, `copyTree`, `move`, `remove`, `removeDir`, `removeTreeIfExists`, `setAttributes`, `setNtfsCompression` (`FSCTL_SET_COMPRESSION`), and `extract` (`RSWPAK1` `#220`). |
| **`reg.*`** | **Stateless `view` (`RegView.Native64` \| `RegView.Wow32` \| `RegView.Both`)** across `exists`, `read`, `write`, `readString`, `readDword`, `listSubkeys`, `listValues`, `writeString`, `writeExpandString`, `writeDword`, `deleteValue`, and `deleteKeyTree` (100% rollback-journaled). |
| **`ini.*` / `xml.*` / `json.*`** | `ini.{read,write,deleteKey,sections}`; `xml.{readText,readAttr,replaceAttr,setElementText}`; `json.{parse,stringify}`. |
| **`str.*` / `regex.*`** | `str.{len,lower,upper,trim,contains,startsWith,endsWith,indexOf,replace,split,join,slice}`; `regex.{isMatch,match,replace}`. |
| **`archive.*` / `crypto.*`** | `archive.{extractZip,createPak,extractPak,downloadPak}`; `crypto.{sha256File,sha256Text,crc32Text,verifyAuthenticode}` (`WinVerifyTrust`). |
| **`net.*` / `log.*`** | `net.download(url, dest, sha256?)` & `net.getText(url)` via TLS 1.2/1.3 `WinHTTP`; `log.{info,warn,error}` (`/l=<path>`). |
| **`proc.*` & `ffi.*`** | `isRunning`, `listRunning`, `terminate`, `open`, **Windows Restart Manager (`Rstrtmgr.dll`)** (`getLockingProcesses`, `restartManagerShutdown`, `restartManagerRestart`), **64-bit Native DLL FFI (`ffi.call`)**, and **3-token `proc.run(..., token: Token.Current \| Token.Elevated \| Token.Desktop)`** (`Token.Desktop` duplicates `explorer.exe`'s medium-IL shell token via `CreateProcessWithTokenW` so Finish-launched apps never run elevated!). |
| **`msi.*` / `feature.*` / `prereq.*`** | **Direct Relational MSI SQL & External-UI Engine**: `msi.{createDatabase,listTables,query,execSql,getProperty,setProperty,getSummary,setSummary,importStream,exportStream,generateTransform,isUpgradeInstalled,isProductInstalled,isNativeInstalled,install,repair,configureFeature,uninstall,applyPatch,runLegacyUninstaller}`; `feature.{isSelected,select,list}`; `prereq.{isDotNetDesktopInstalled,isAspNetInstalled,isWebView2Installed,isVcRedist2022Installed,installPreset}`. |
| **`shortcut.*` / `shell.*` / `env.*` / `arp.*`** | `shortcut.{create,remove}`; `shell.{registerFileType,registerProtocol,refresh}`; `env.{get,set,remove,appendPath}` (idempotent non-clobbering `;` append + `WM_SETTINGCHANGE`); `arp.{register,setSystemComponent,unregister}`. |
| **`svc.*` / `task.*` / `firewall.*` / `acl.*`** | `svc.{exists,status,install,configureFailureReset,start,stop,remove}`; `task.{exists,createWeekly,remove}`; `firewall.{allowProgram,removeRule}`; `acl.grantModify`. |
| **`ui.*` / `wizard.*` / `RsDialog` / `showcase.*`** | Turnkey **`RsDialog` Wizard Suite** (`RsWelcome`, `RsLicense`, `RsReadme`, `RsUserInfo`, `RsSelectDestDir`, `RsSetupType`, `RsFeatureTree`, `RsAskOptions`, `RsAskText`, `RsReadyToInstall`, `RsFinish`, `RsFinishReboot` + `DialogResult.{Next,Back,Cancel}` with automatic `< Back` step rewinding!), zero-`MessageBox` native `comctl32.dll` **`ui.taskDialog`** (Command Links, UAC shield icons, collapsible `detailsBody`, `verifyText` checkbox, `ref` out-bindings, & silent auto-bypass), `ui.{info,warn,error,confirm,pickFolder,pickFile,progress}`, `wizard.{next,back,cancel}`, and `showcase.{navigate,setHotspotEnabled,setHotspotBadge,playAudio,stopAudio}`. |

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

## 5. Suite-Wide Four-Edition Architecture Across All 8 RaggieSoft Studio Tools & All-Access Bundles

Every single application in the **8-tool RaggieSoft Studio ecosystem** adopts the exact same four-edition structure (**`Community` • `Essentials` • `Developer` • `Architect`**) AND can be licensed either standalone or through matching **All-Access RaggieSoft Studio Suite** editions (**Studio Community** `[Free — 100% Studio Architect Parity]`, **Studio Essentials**, **Studio Developer**, and **Studio Architect**).

### 5.1 `RaggieScript` (`.rssc`) Across All 8 Studio Products (Unified Language, Host-Specific Subsets)

Rather than forcing teams to learn a different macro syntax for installers, autorun launchpads, launchers, and training courses, **`RaggieScript` (`.rssc`)** serves as the **single unified scripting & automation language across all 8 RaggieSoft Studio products** (unlocked in **Community**, **Developer**, and **Architect** editions across every tool):

- **Win32 C++20 Static `/MT` Bytecode Host (`RSWBC1` VM + Standalone `raggiescript.exe`)**:
  - **General-Purpose Windows Micro-Apps & Automation (`std.*`)**: Lightweight `< 200 KB` zero-prerequisite (`0 MB` runtime) capability-gated scripting for single-EXE Windows utilities, patchers, diagnostics, JSON/INI/file/registry tasks, and build automation—complementing C#/.NET rather than replacing heavy application frameworks.
  - **Installer Studio (`installer.*`)**: Zero-MSI standalone `.rssc` projects & hybrid `.rsip` hooks (`wizard`, `install`, `uninstall`, automatic rollback journal).
  - **Showcase Studio (`showcase.*` + Optional `installer.*` in `Community` & `Architect`)**: Event-driven interactive `.BMP` & `FluentMica` collector/suite menus (`onShow`, `onClick`, live `msi.isInstalled` *"Install" ↔ "Launch"* button state switching, dynamic drawers, and compile-time WCAG `.vtt` caption enforcement)—AND in **Community** and **Architect** editions, **Bespoke Full-Canvas Self-Extracting Installers** featuring an embedded `_support\` staging directory (`SupportDir`), full `fs.*` (`fs.copy` / `fs.extract`), `reg.*` (`HKLM`/`HKCU`), `shortcut.create`, selectable UAC (`asInvoker` | `highestAvailable` | `requireAdministrator`), and transactional rollback journaling!
  - **Help Studio (`help.*`)**: Conditional topic/role filtering and context-routing hooks.
- **`.NET 11` Managed AST & Bytecode Host**:
  - **Launcher Studio (`launcher.*`)**: Pre-launch hardware/GPU checks, custom shelf filters, and channel rules.
  - **Document Studio (`document.*`)**: Programmatic JSON/CSV batch data-merge expressions and calculated form fields for Tagged `PDF/UA-1` generation.
  - **Localization Studio (`localization.*`)**: Custom token validators, pluralization rules, and terminology transforms.
  - **Accessibility Studio (`a11y.*`)**: Organization-specific custom WCAG / design-system lint rules emitting SARIF 2.1.0 diagnostics.
- **Safe Sandboxed ES2022 Transpiler Target (`Zero eval()`)**:
  - **Training Studio (`training.*`)**: Compiles branching interactive courseware scenarios, adaptive remediation paths, and custom weighted quiz rubrics into deterministic `< 50 KB` browser-safe ES2022 JavaScript inside SCORM 1.2 & SCORM 2004 packages!

### 5.2 Complete 8-Tool RaggieSoft Studio Edition Matrix

*(Across all 8 tools, **Community Edition** is free for hobbyists, solo creators, students, educators, non-profits, and open source with **100% `Architect` parity** and zero watermarks; runtime accessibility and code signing are never paywalled in any tier.)*

| Studio Product | **Essentials** *(Tier 1: Guided 1-Seat Workstation)* | **Developer** *(Tier 2: `RaggieScript`, Importers & CI/CD)* | **Architect** *(Tier 3: Suites, Scale & Auto-VPAT 2.5)* |
| :--- | :--- | :--- | :--- |
| **1. Installer Studio** | `.MSI` + `Setup.exe`, `sfx`, consume `.MSM`, Major Upgrades | + Compile `.MSM`, **`RaggieScript`**, Custom Dialogs, `.slnx`/`.vbp` Importers, `msiprism`, CI/CD | + `.rsis` Suites, `.MSP`/`.MST` deltas, Spanning/`msiexec /a`, `.rswpak`, **Auto-VPAT 2.5**, `.wsb` Capture |
| **2. Showcase Studio** | Visual `.rssp` `.BMP` & `FluentMica` menus, declarative actions, 4-way focus | + **`RaggieScript`** reactive menus (`msi.isInstalled`), custom templates, CI/CD | + **Bespoke Full-Canvas Self-Extracting Installers** (`_support\` staging, `fs.*`, `reg.*`, `shortcut.*`, UAC `asInvoker`/`highestAvailable`/`requireAdministrator`, rollback), `.rsis` Suite front-door, **Kiosk Mode**, **Auto-VPAT 2.5** |
| **3. Launcher Studio** | Guided `.rslp` single-channel app/media hub + static `catalog.json` | + **`RaggieScript`** pre-launch/hardware hooks, `stable`/`beta` rings, `RsPatch` deltas, CI/CD | + Air-gapped Intranet/UNC mirror mode, GPO policy templates, multi-brand hubs, **Auto-VPAT 2.5** |
| **4. Help Studio** | Visual `.rshp` Markdown/HTML5 -> `.rshm` module + branded `Help.exe` + web docs | + **Legacy `.CHM` / `.hhp` Decompiler & Importer**, `RaggieScript` filters, C++/C#/VB6 `F1` SDK, CI/CD | + **Cross-Suite Federated Help Search** (merging N products), conditional OEM tags, **Auto-VPAT 2.5** |
| **5. Training Studio** | Visual `.rstp` + Markdown + `.vtt` -> `< 50 KB` SCORM 1.2 & 2004 `.zip` | + **`RaggieScript`** branching scenarios & custom quiz rubrics, Hostile LMS Simulator, CI/CD | + **`audit-scorm` Legacy Third-Party SCORM `.zip` Auditor**, multi-course curricula, **Auto-VPAT 2.5** |
| **6. Document Studio** | Visual `.rsdp` + Markdown -> verified Tagged `PDF/UA-1` + HTML5 | + **Accessible Fillable AcroForm Builder**, `RaggieScript` JSON/CSV batch data-merge, CI/CD | + Full Matterhorn Audit Certificate, `PDF/A-2a + PDF/UA-1` archival dual-stamp, **Auto-VPAT 2.5** |
| **7. Localization Studio** | Side-by-side `.RESX`, `XLIFF 2.1`, `.rsip`, `.rstp` & `.vtt` editor + token lock | + Automated Win32 `&` mnemonic clash solver, `<= 22 CPS` `.vtt` gate, `RaggieScript` rules, CI/CD | + **Cross-Suite Shared Translation Memory & Glossary** across apps/help/SCORM + Multilingual VPAT |
| **8. Accessibility Studio** | Desktop IDE (`AccessibilityStudio.exe`) single-project source audit & Guided Fix diffs | + **`RaggieScript`** custom org rules, headless `a11y-studio-cli` **CI/CD gates** & **SARIF 2.1.0** | + **Executive HTML5 VPAT 2.5 Generator**, multi-repo portfolio rollups, & Enterprise GPO MSI |

---

## 6. Unified Suite Project Type (`PackageKind = suite` / `.rsis`) & Monotonic Dual-Bar Progress Rule

Because **RaggieSoft Studio** (including **RaggieSoft Studio Community Edition**) ships as an 8-tool unified Suite installer built by Installer Studio itself, our Suite engine enforces strict UX and accessibility rules:

1. **Two Authoring Paths for Unified Suites**:
   - **Standalone Suite Manifest (`PackageKind = suite` in `.rsip`)**: Explicitly lists `[SuitePackage.<Id>]` entries (`.msi` and/or `Engine = native` child setups), supporting single-arch or `BuildUniversal = true` (`x64 + ARM64` combined EXE + Smart Web Stub).
   - **One-Command `.rsis` Workspace Suite Compilation (`[Suite] BuildSuiteInstaller = true`)**: Compiles every member `.rsip` project in deterministic `BuildOrder` (`10 -> 20 -> ...`) and then automatically packages all non-`.msm` member outputs into one unified `<SuiteOutputName>-setup.exe` chainer!
2. **Permanent Ban on Single-Bar Sawtooth Resets (`Monotonic Dual-Bar Progress + Overall Taskbar`)**:
   - Legacy suite chainers that reuse a single progress bar—jumping `0% → 100%`, snapping back to `0%`, and repeating 8 times—mislead sighted users, confuse screen-reader percentage announcements, and violate Microsoft's Windows Taskbar UX Guidelines.
   - Every RaggieSoft Unified Suite Setup renders **two distinct, clearly labeled progress bars**:
     - **Primary Bar — `Overall Suite Progress` (`0%–100%`, Strictly Monotonic)**: Weighted by each selected child package's uncompressed byte size ($\max(256\text{ KB}, \text{bytes}_k)$) and guarded by a high-water-mark clamp so overall progress advances smoothly from `0%` to `100%` across the entire Suite and **never resets or drops backward** between components.
     - **Windows 11 Taskbar Progress (`ITaskbarList3`)**: Synchronized **1:1 with `Overall Suite Progress`** (`TBPF_NORMAL` green monotonic fill, `TBPF_PAUSED` amber if politely waiting on `Global\_MSIExecute`, `TBPF_ERROR` red on fault).
     - **Secondary Bar — `Current Component` (`0%–100%`, Optional via `[UI] ShowComponentProgressBar = true`)**: Streams live intra-package progress (`MsiSetExternalUIRecord` `INSTALLMESSAGE_PROGRESS` ticks for `.msi` children and `RSW_CHILD_PROGRESS_FILE` IPC for `Engine = native` children) for whichever component is currently installing (`"Component 5 of 8: RaggieSoft Showcase Studio — 64%"`).

---

## Fictitious Persons & Entities Disclaimer

All narrative characters (including *Zoë* and her in-universe language *Fin#*), bands (including *The Stardust Engine*), biographies, universities (including *Commonwealth Polytechnic Institute / CPI*, *Virginia Dominion University / VDU*, *The Forgers*, and *The Crucible*), corporations (including *OmniCorp*, *Apex Records*, *Prairie Coachworks*, and *Sainte-Claire*), transit agencies (*BRT* and *CVTA*), in-universe legal filings, and events referenced across RaggieSoft works and sample content packs are works of fiction. In real life, **RaggieSoft**, **RaggieSoft Media**, **Engine Room Records**, **Ocean View Archives**, and **RaggieSoft Story Crossroads** are unincorporated creative imprints of Michael P. Ragsdale.
