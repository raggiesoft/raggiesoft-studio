# RaggieSoft Installer Studio — Public Engineering Roadmap

**Product:** RaggieSoft Installer Studio (*Install Without Limits*)  
**Official Portal:** [https://raggiesoftstudio.com](https://raggiesoftstudio.com) • **Visual Tour:** [https://raggiesoftstudio.com/screenshots](https://raggiesoftstudio.com/screenshots) • **Web Roadmap:** [https://raggiesoftstudio.com/roadmap](https://raggiesoftstudio.com/roadmap)  
**License:** MIT License (Open-Source Technical Preview)

---

## Core Engineering Charter & `v1.0.0 GA` North Star

1. **The `v1.0.0 GA` Dogfood North Star**: Version `1.0.0` is defined by a concrete real-world bar—reaching the exact milestone where **100% of RaggieSoft's own Windows desktop applications, classic VB6 utilities (*StoreTrainer*), interactive novels, and supporter audio archives** are packaged, signed, updated, and distributed exclusively with **RaggieSoft Installer Studio**.
2. **Zero Third-Party Runtime Dependencies**: Every binary in the suite (`InstallerStudio.exe`, `instbuild.exe`, `SetupWizard.exe`, `msiprism.exe`, and `RaggieSoftHelp.exe`) is compiled as static `/MT` native Win32 C++20 for both **`x64`** and **`ARM64`**—relying solely on stock Windows 11 `System32` libraries (`msi.dll`, `cabinet.dll`, `gdiplus.dll`, and `Msftedit.dll`).
3. **100% WCAG 2.2 Level AA & Live OS Theme Support**: Full keyboard navigation, native Windows UI Automation semantics (`Narrator`, `NVDA`, `JAWS`), Windows Contrast Themes (`SPI_GETHIGHCONTRAST`), custom-subclassed Dark Mode controls, 32-bit ARGB vector `SysTreeView32` hierarchies, live `WM_SETTINGCHANGE(ImmersiveColorSet)` Light/Dark hot-swapping, enforced WCAG contrast checks on custom publisher branding, and compiler-generated HTML5 **VPAT 2.5** conformance reports (`--emit-vpat`).
4. **First-Class AI Coding Agent Support**: Plain-text, comment-preserving `.rsip` projects, `.rsis` suites, and `.rsii` includes paired with compiler-emitted `/llms.txt`, `/llms-full.txt`, and `SKILL.md` specifications (`--emit-ai-spec`) so AI agents can author and validate installers from scratch.
5. **Community == 100% Premier Parity**: Community Edition permanently maintains **100% technical feature parity with Premier Edition**, with zero watermarks and 100% publisher-owned `VERSIONINFO` metadata.
6. **Original Engineering Identity**: Built cleanly from first principles on documented Microsoft Windows APIs—standing strictly on its own merits with zero telemetry and zero cryptocurrency/blockchain bloat.

---

## Milestone Overview (`v0.1.0` → `v1.0.0 GA` & Post-1.0)

| Milestone | Focus Area | Status |
| :--- | :--- | :--- |
| **`v0.1.0` – `v0.4.2`** | **Core C++20 Toolchain, 12-View Tree-First IDE (`Features` & `RegEdit` `Registry` Trees), `SelectionTree`, Pre-MSI Runtimes, `.MSM`, Native `F1` Help & Live Dark Mode** | **Shipped (Technical Preview)** |
| **`v0.5.0`** | **8 Wizard Styles (`Wizard95`..`FluentMica`..`FullScreenBlue`), Complete Publisher Branding (`.rswskin` + Billboards) & Live WCAG 2.2 AA Contrast Enforcer** | **Next Up** |
| **`v0.6.0`** | **Single-Download CPU-Aware Web Installer (`.rswpak` On-Demand Feature Packs), All-in-One Offline Universal Single-EXE, `.NET 11` Presets & `Engine = native`** | Planned |
| **`v0.7.0`** | **From-Scratch Dual Dialog Builders (C++ `SetupWizard.exe` + Raw `370x270` `MSI.DLL`) & `RsDialog` (`Rs*()`) Scripting** | Planned |
| **`v0.8.0`** | **Project Importers (Visual Studio `.slnx`/`.csproj`, VB6 `.vbp` Reg-Free COM & `.msi` Decompiler) + Windows Restart Manager (`Rstrtmgr.dll`)** | Planned |
| **`v0.9.0`** | **Authenticode & Azure Artifact Signing Studio, White-Label `RsUpdate.exe` Auto-Updater & Guided `.MSP` Servicing (`--plan-update`)** | Planned |
| **`v1.0.0 GA`** | **Turnkey CI/CD Actions, `winget` Export & 100% RaggieSoft Production Dogfood Cutover** | Planned |
| **`v1.1+` (Post-1.0)** | **Disposable Windows Sandbox (`.wsb`) Setup Capture, Visual Studio `.vsix`, Windows Services/Firewall/Config Patchers, `.MSIXBUNDLE`, 20-Lang `I18N` & `--emit-sbom`** | Post-1.0 Expansion |

---

## Shipped Milestones (`v0.1.0` – `v0.4.2`)

- **`v0.4.2` — 12-View Tree-First Visual IDE Overhaul, Dedicated `Features` & `RegEdit` `Registry` Trees, Categorized `MSI Prism` Schema & Inspector Fixes**:
  - Replaced flat `LISTBOX` and `SysListView32` overuse across `InstallerStudio.exe`, `msiprism.exe`, and `RaggieSoftHelp.exe` with **20 anti-aliased 32-bit premultiplied ARGB vector tree icons (`StudioTreeIcon`)** and `ApplyDarkTreeViewTheme` (`DarkMode_Explorer` / `Explorer` chevrons, connector lines, and 24px accessible row height).
  - Upgraded the left IDE sidebar into a categorized `SysTreeView32` (`Application Information`, `Setup Architecture`, `User Interface`, and `Deployment & Source`) spanning **12 dedicated views**:
    - **New Dedicated `Features` View**: `All Features` hierarchical tree with live `Move Up` / `Move Down` `SelectionTree` AST reordering, `+ New Feature`, `+ Sub-Feature`, `Core Required (DisallowAbsent)` toggle, and a bottom `Feature Description` inspector.
    - **New `RegEdit`-Style `Registry` View**: Left hive/key hierarchy (`HKEY_CLASSES_ROOT`, `HKEY_CURRENT_USER`, `HKEY_LOCAL_MACHINE`, `HKEY_USERS` `HKU`, and `HKEY_USER_MACHINE_DEFAULT` `HKMU` with nested subkey folders), right-hand typed values tree (`REG_SZ`, `REG_EXPAND_SZ`, `REG_DWORD`), `Filter Keys by Feature`, and a UTF-8 / UTF-16LE `.REG` file importer.
    - **Dual-Tree `Files & Folders`**, **Hierarchical `Application Runtimes & .MSM`**, **`File Associations` (`.ext -> ProgId -> Verbs`)**, and **`Shortcuts` (`Start Menu` & `Desktop`)** views, plus fixed `TVN_SELCHANGEDW` click-to-inspect and empty-field clearing in `Components & KeyPaths`.
  - Upgraded `msiprism.exe` into a 5-category SQL schema tree (`Metadata & Streams`, `Core Packaging Tables`, `Registry, Shortcuts & Classes`, `Dialogs & UI Controls`, and `Sequences, Locators & Actions`).
- **`v0.4.1` — Dark-Mode Push Button Subclassing & Live `ImmersiveColorSet` Palette Hot-Swapping**:
  - Added `AttachAccessiblePushButtonSubclass` (`SetWindowSubclass` + GDI+ on genuine `BS_PUSHBUTTON` / `BS_DEFPUSHBUTTON` controls with `BCM_SETSHIELD` UAC shield rendering, Royal Cobalt primary fills, Slate-Navy secondary fills, and `SPI_GETHIGHCONTRAST` fallback) plus `ApplyDarkComboBoxTheme` (`DarkMode_CFD`) across `SetupWizard.exe`, `InstallerStudio.exe`, `msiprism.exe`, and `RaggieSoftHelp.exe`.
  - Wired `IsLiveThemeBroadcast` (`WM_SETTINGCHANGE` `lParam == L"ImmersiveColorSet"`, `SPI_SETHIGHCONTRAST`, `WM_SYSCOLORCHANGE`, and `WM_THEMECHANGED`) across all four GUI executables so toggling Windows 11 (or automatic day/night schedulers like Auto Dark Mode) flips every open window live in `< 16ms` without restarting.
- **`v0.4.0` — Native C++20 Help Viewer, Dark-Mode Control Polish, Screenshot Exporter & Standalone Identity**:
  - Added **`RaggieSoftHelp.exe`**, a static `/MT` native Win32 C++20 offline documentation viewer (`x64` & `ARM64`, zero `.NET` and zero `WebView2` dependencies) supporting pluggable `module.rshm.json` manifests, Contents / Index / Search navigation, in-process HTML5-to-RTF typography (`Msftedit.dll`), and instant single-instance `F1` Named Pipe IPC.
  - Authored the 8-chapter `raggiesoft.installer-studio` offline HTML5 help module (mirrored 1:1 to `/docs/*` on the web) and added shared Dark Mode checkbox and `SysListView32` column-header subclasses plus `--export-screenshots`.
- **`v0.3.0` — Editions (`Community == Premier`), LZMS Solid Compression, Pre-MSI Runtimes, `.MSM` & `SelectionTree`**:
  - Introduced `Community`, `Express`, `Professional`, and `Premier` edition badges (`Community == 100% Premier` capability), Windows `COMPRESS_ALGORITHM_LZMS` (`Cabinet.lib`) solid compression, the unlimited Pre-MSI `[Prerequisite.<Id>]` runtime broker with custom `RebootExitCodes`, native 64-bit `[MergeModule.<Id>]` (`.msm`) SQL + CAB merging, and the authentic 32-bit ARGB Windows Installer `SelectionTree`.
- **`v0.2.0` & `v0.2.1` — AeroWizard IDE, Microsoft Component Rules & UAC Broker**:
  - Added the Destination Computer folder tree, `ICE18`/`ICE38`/`ICE64`/`ICE80` Component validation, File Associations, Dual C++ & `370x270` `MSI.DLL` Dialog Designers, 5 native Win32 AeroWizards, `Signature`/`AppSearch` SQL tables, and the `--elevated-msi-worker` UAC broker.
- **`v0.1.0` — Initial Native C++20 Vertical Slice**:
  - Shipped `instbuild.exe`, `SetupWizard.exe`, `InstallerStudio.exe`, `msiprism.exe`, and `insttests.exe` with deterministic SHA-1 UUIDv5 Component GUIDs, `RtlGetVersion` + `IsWow64Process2` silicon detection, `--emit-ai-spec`, and `--emit-vpat`.

---

## Focused Milestones to `v1.0.0 GA` (Shipping RaggieSoft's Own Software)

### `v0.5.0` — 8 Wizard Layout Variations, White-Label Branding Studio & Enforced WCAG 2.2 AA Contrast Guardrails
1. **Eight First-Party Wizard Layout Variations (`[UI] WizardLayout`) Spanning Every Era of Windows UX**:
   - **`Wizard95` (`wizard95`)**: Classic 1995 desktop 3D beveled dialog geometry (`#C0C0C0` surface, sunken etched dividers, `164x314` left vertical bitmap rail, and classic 3D beveled `< Back` / `Next >` / `Cancel` push buttons).
   - **`Wizard97` (`wizard97` / `standard`)**: Classic enterprise header-banner wizard with top banner + right-side emblem, crisp workspace sheet, and bottom-right `< Back` / `Next >` / `Cancel` footer—modernized for Dark Mode and Light Mode.
   - **`AeroWizard` (`aerowizard`)**: Command-bar layout with a vector GDI+ `30x30` circular `<-` Back glyph in the top-left command area (or author-selected bottom-right `< Back`).
   - **`FluentMica` (`fluentmica`)**: Modern Windows 11 native backdrop in zero-dependency Win32 C++20 via `DwmSetWindowAttribute(DWMWA_SYSTEMBACKDROP_TYPE, DWMSBT_MAINWINDOW / DWMSBT_TABBEDWINDOW)` with a unified borderless surface, left-hand vertical step-progress rail (`Welcome -> License -> Options -> Install -> Finish`), and rounded `8px` cards.
   - **`OneClickSplash` (`oneclick`)**: Friction-free single-card express installer (`~480x280`) with one primary **Install** button, live progress bar, and a *"Customize installation..."* disclosure button that expands into the full Custom Setup (`SelectionTree` + folder picker) flow on demand.
   - **`PassiveToast` (`passivetoast`)**: Clean non-interactive `/passive` & `/qb` progress surface (centered or docked near the bottom-right system tray) with UI Automation live-region percentage announcements.
   - **`FullScreenBlue` (`fullscreenblue`)**: Nostalgic 1990s cobalt-blue (`#000080 -> #000000`) full-screen `SETUP.EXE` backdrop wash with a drop-shadowed serif product title in the top-left corner, floating 3D beveled setup dialogs, **optional rotating installation billboards**, and a floating **3D Beveled Progress Gauge** (centered or docked at the bottom-center / bottom-right beneath billboards—ideal for retro tools like *StoreTrainer*) while keeping modern DPI scaling, keyboard navigation, and UI Automation accessibility under the hood.
   - **`Autorun16x9` (`autorun16x9`)**: Widescreen `16:9` Collector's Edition & digital media launcher menu.
   - **Non-Negotiable Windows Contrast Theme Auto-Override (`SPI_GETHIGHCONTRAST`)**: Across every `WizardLayout` and custom brand skin, whenever a Windows Contrast Theme (*Aquatic*, *Desert*, *Dusk*, *Night Sky*) is active, `SetupWizard.exe` automatically bypasses custom gradients, bitmaps, and Mica backdrops and paints strictly with semantic OS colors (`COLOR_WINDOW`, `COLOR_WINDOWTEXT`, `COLOR_HIGHLIGHT`, `COLOR_BTNTEXT`) and `2px` solid borders.
2. **Complete Publisher Branding & Live WCAG 2.2 AA Contrast Enforcer (`[Branding]` & `.rswskin`)**:
   - Customize Light & Dark Mode color palettes, header banners, `164x314` wizard sidebars, product badges, background washes, and rotating install billboards.
   - Every color picker in `InstallerStudio.exe` computes live W3C relative luminance contrast ratios across both Light and Dark palettes (`>= 4.5:1` AA normal text, `>= 3.0:1` large text & UI borders), displays live AA/AAA badges, and offers a one-click *"Auto-Adjust Nearest Accessible Shade"* button preserving brand hue—enforced identically in CI via `instbuild.exe --validate` and `--emit-vpat`.

### `v0.6.0` — Single-Download Universal Web & Offline Installers (`.rswpak`), `.NET 11` Presets & Native Direct Engine
1. **CPU-Aware Universal Web Installer via On-Demand Feature Packs (`.rswpak`)**:
   - Eliminate separate `x64` vs. `ARM64` download links on product websites. Ship **one** compact `Setup.exe` web bootstrapper that queries `IsWow64Process2` at launch (piercing Windows 11 Prism emulation) to detect true host silicon (`ARM64` vs. `x64`) and downloads **only** the matching CPU edition's LZMS-compressed `.rswpak` pack (plus selected optional feature packs) over `WinHTTP` with SHA-256 + Authenticode verification.
2. **All-in-One Offline Universal Single-EXE (`Architecture = universal`, `Distribution = offline`)**:
   - Alongside the lightweight `.rswpak` Web Installer, emit **one self-contained Offline `Setup.exe`** packing **both** `x64` and `ARM64` LZMS solid payloads and prerequisites inside a single portable file for air-gapped PCs, USB media, and archival preservation.
3. **First-Class `.NET 11` (`net11.0` / `net11.0-windows`) Runtime Presets & Detection**:
   - Curated `DotNet11Desktop`, `DotNet11AspNet`, and `DotNet11Runtime` / `DotNet10Runtime` presets alongside `.NET 10.0 LTS`, `.NET 9.0`, and `.NET 8.0 LTS`, probing native `arm64` and `x64`-on-ARM64 installations in `< 1ms`.
4. **Native Direct Engine (`Engine = native | msi`)**:
   - Optional zero-`msi.dll` direct extraction backend with an atomic transactional rollback journal, `HKLM`/`HKCU` `Uninstall` registration, and a signed native `Uninstall.exe`—eliminating `Global\_MSIExecute` mutex collisions and installing multi-hundred-file interactive book and supporter audio packs in milliseconds.

### `v0.7.0` — From-Scratch Dual Dialog Builders (C++ `SetupWizard.exe` + Raw `MSI.DLL`) & `RsDialog` Scripting
1. **From-Scratch Native C++ Dialog Builder (`[Dialog.<Id>]` + `[Control.<DialogId>.<CtrlId>]`)**:
   - Blank-canvas WYSIWYG designer in `InstallerStudio.exe` for building custom wizard pages in `SetupWizard.exe` (headings, rich text, text/masked inputs, folder & file pickers, checkboxes, radio card groups, combo boxes, trees, Tab-order editor, live property binding, and conditional visibility).
2. **From-Scratch Raw `MSI.DLL` Dialog Builder (`[MsiDialog.<Id>]` + `[MsiControl.<DialogId>.<CtrlId>]`)**:
   - Full `370x270` DLU visual canvas compiling directly into relational `Dialog`, `Control`, `ControlEvent`, `ControlCondition`, `RadioButton`, `ComboBox`, `ListBox`, and `Binary` SQL tables inside `Product.msi`.
3. **`RsDialog` Standard Library + `.rssc` Event Scripting**:
   - Event hooks (`OnBegin`, `OnPrerequisitesComplete`, `OnFeatureSelected`, `OnBeforeInstall`, `OnAfterInstall`), `wizard { step }` state-machine control, `RsShowDialog("<CustomId>")`, and our procedural **`RsDialog`** library (`RsWelcome()`, `RsLicense()`, `RsSetupType()`, `RsFeatureTree()`, `RsAskDestPath()`, `RsAskText()`, `RsAskOptions()`, `RsStartCopy()`, `RsFinish()`, `RsFinishReboot()`).

### `v0.8.0` — Solution & Legacy Project Importers (`.slnx`, VB6 `.vbp` Reg-Free COM & `.msi`) + Windows Restart Manager
1. **Visual Studio `.slnx` / `.sln` / `.csproj` / `.vcxproj` / `CMakeLists.txt` Importer**:
   - Auto-detect `.NET 11` / `.NET 10 LTS` / `VC++` / `WebView2` runtime prerequisites, `x64` + `ARM64` publish outputs, `.ico` assets, and PE versions in one click.
2. **Visual Basic 6.0 (`.vbp`) Importer with Windows 11 WRP & Reg-Free COM Modes (Built for *StoreTrainer*!)**:
   - Parse `ExeName32`, `Reference=`, and `Object=*.ocx` entries directly from `.vbp` projects; respect Windows 11 Resource Protection on built-in `SysWOW64` runtimes (`msvbvm60.dll`, `oleaut32.dll`, `stdole2.tlb`); and offer either **(a) Classic Local `.MSM` Merge Module Mode** or **(b) Modern Zero-Elevation Reg-Free COM Mode** (`<App>.exe.manifest` `<comClass>` / `<typelib>` side-by-side manifests with zero `SysWOW64` clutter).
3. **Existing `.msi` / `.msm` Decompiler & Windows Restart Manager (`Rstrtmgr.dll`)**:
   - Decompile existing `.msi`/`.msm` databases into editable `.rsip` projects, and integrate `RmStartSession` / `RmGetList` into `SetupWizard.exe` so upgrades gracefully close running app processes without unnecessary OS reboots.

### `v0.9.0` — Authenticode Signing Studio, White-Label `RsUpdate.exe` Auto-Updater & Guided `.MSP` Servicing
1. **First-Class Authenticode & Azure Artifact Signing Studio**:
   - Interactive Windows Certificate Store picker (`CryptUIDlgSelectCertificateFromStore`), `.pfx` / hardware token configuration, Azure Artifact Signing (`dlib` + `MetadataJson`) profile tester, and one-click Dual-Layer `WinVerifyTrust` verifier on both inner `Product.msi` and outer `Setup.exe`.
2. **Royalty-Free White-Label Auto-Updater (`RsUpdate.exe` / `[AutoUpdate]`)**:
   - Zero-dependency `/MT` Win32 C++20 auto-updater (`x64` & `ARM64`, unlocked across all editions including Community!) stamped with the publisher's own `.ico`, `ProductName`, and `CompanyName`, verifying SHA-256 + `WinVerifyTrust` signatures over HTTPS to apply `.msp` patches, `.msi` Major Upgrades, or Native Engine updates.
3. **Guided Microsoft-Compliant `.MSP` & Major Upgrade Servicing (`--plan-update`)**:
   - Diff against a shipped baseline `.msi`, enforce official Windows Installer Component servicing rules automatically, emit binary-delta `.msp` Minor Updates when eligible, or guide one-click Major Upgrade `ProductCode` transitions in plain English.

### `v1.0.0 GA` — Turnkey CI/CD Automation, `winget` Export & 100% RaggieSoft Dogfood Cutover
1. **CI/CD & Package Manager Automation**:
   - First-party GitHub Action (`raggiesoft/setup-installer-studio`), Azure Pipelines task, and `instbuild.exe --emit-winget` (`winget-pkgs` multi-file YAML generator).
2. **100% RaggieSoft Production Cutover Gate**:
   - Complete signed build, clean install, upgrade, repair, silent deploy (`/s`), and uninstall validation across every RaggieSoft desktop application (*RaggieSoft Launcher*, *Accessibility Studio*, *Installer Studio*, *Help Viewer*, and *StoreTrainer*), interactive Story Crossroads book, and Engine Room Records supporter archive on clean Windows 11 `x64` and `ARM64` hardware.

---

## Post-`1.0` Enterprise & Ecosystem Expansion (`v1.1+`)

Once `v1.0.0 GA` is actively powering 100% of RaggieSoft's own software distributions, post-`1.0` releases expand into third-party IT enterprise repackaging and store formats:

1. **Snapshot-Diff Setup Capture ("Repackager") & One-Click Disposable Windows 11 Pro Sandbox (`.wsb`) Mode**: Capture legacy installers inside a throwaway Windows Sandbox VM and emit clean `.rsip` + `.mst` packages without touching the host workstation.
2. **Visual Studio Extension (`.vsix`)**: Syntax highlighting, schema hover tooltips, and right-click packaging inside Visual Studio.
3. **Enterprise System Primitives & Config Patchers**: Declarative `[Service.*]`, safe `[Environment.*]` `PATH` updates, `[FirewallRule.*]`, `[ScheduledTask.*]`, and `[JsonPatch.*]` / `[XmlConfig.*]` / `[IniFile.*]` config stampers.
4. **In-Process `.MSIX` / `.MSIXBUNDLE` (`AppxPackaging.dll`), `I18N` + RTL & Procurement SBOMs (`--emit-sbom`)**: Native dual-arch `.msixbundle` generation, Sparse Package Identity, 20+ language `.rslang` tables with `WS_EX_LAYOUTRTL` mirroring, and SPDX 2.3 / CycloneDX JSON SBOMs alongside HTML5 VPAT 2.5 reports.
