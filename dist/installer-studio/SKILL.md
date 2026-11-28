---
name: raggiesoft-installer-studio
description: Author, lint, audit VPAT 2.5 accessibility, and compile Windows 11 x64 and ARM64 .msi, .msm, .mst, .msp, and Setup.exe installers using RaggieSoft Installer Studio (instbuild.exe, InstallerStudio.exe, SetupWizard.exe, msiprism.exe, RaggieSoftHelp.exe) and plain-text .rsip projects, .rsis suites, and .rsii includes.
---

# RaggieSoft Installer Studio (`.rsip` / `.rsis`) Authoring Skill

Always read [`llms-full.txt`](llms-full.txt) in this folder for the authoritative `v0.9` `.rsip` project and `.rsis` suite grammar, AI Pre-Flight Checklist, and copy-paste blueprints emitted directly by `instbuild.exe`.

## Mandatory 4-Step Agent Workflow

1. **Author Heavily Commented `.rsip` (or `.rsis` Suite) Manifests from Scratch**:
   - Include clear `;` explanation comments above each section, use a permanent `{GUID}` for `UpgradeCode`, use 3-part `Major.Minor.Build` `Version` values (`<= 255.255.65535`), use `$(ARCH)` in multi-architecture payload paths, and include `&` keyboard mnemonics on custom UI labels (`InstallButtonText`, `FinishLaunchCheckbox`).
   - Declare `[Prerequisite.<Id>]` for any required `.NET`, `WebView2`, `VC++`, or custom runtimes so `SetupWizard.exe` runs them before `msiexec` and latches `RebootExitCodes`.
2. **Run Instant JSON Validation Before Compiling**:
   - Execute `instbuild.exe --validate --diagnostics=json <project.rsip|suite.rsis> --arch=arm64` (and `--arch=x64`) until `"ok": true` (`0` errors).
3. **Compile & Verify MSI / MSM / MST / MSP & Universal Installers**:
   - Execute `instbuild.exe <project.rsip|suite.rsis> --arch=arm64` and `--arch=x64` (or set `BuildUniversal = true` / pass `--universal` to emit `<stem>-offline-setup.exe` bundling both architectures in one EXE plus `<stem>-setup.exe` CPU-aware smart web stub, and optionally inspect SQL tables via `msiprism.exe --inspect-summary <out.msi>`).
4. **Optional Compliance Export**:
   - Execute `instbuild.exe --emit-vpat <project.rsip> <out-dir>` (or pass `--with-vpat`) when generating WCAG 2.2 AA / Revised Section 508 procurement documentation.

## Permanent Release & Website Screenshot Rule

- **Standing Rule**: Screenshots on `https://raggiesoftstudio.com/screenshots` MUST ALWAYS reflect the most recently released version of RaggieSoft Installer Studio.
- Whenever shipping a new release of `desktop-apps/installer-studio/`, ALWAYS run `powershell -NoProfile -ExecutionPolicy Bypass -File .\export-all-screenshots.ps1` after compiling so 100% of `SetupWizard.exe`, `InstallerStudio.exe`, `msiprism.exe`, and `RaggieSoftHelp.exe` PNG captures match the newly released version before building and deploying `raggiesoftstudio.com`.
