---
name: raggiesoft-installer-studio
description: Author, lint, audit VPAT 2.5 accessibility, and compile Windows 11 x64 and ARM64 .msi, .msm, .mst, .msp, and Setup.exe installers using RaggieSoft Installer Studio (instbuild.exe, InstallerStudio.exe, SetupWizard.exe, msiprism.exe) and plain-text .rsip projects, .rsis suites, and .rsii includes.
---

# RaggieSoft Installer Studio (`.rsip` / `.rsis`) Authoring Skill

Always read [`llms-full.txt`](llms-full.txt) in this folder for the authoritative `v0.2` `.rsip` project and `.rsis` suite grammar emitted directly by `instbuild.exe`.

## Mandatory 4-Step Agent Workflow

1. **Author Heavily Commented `.rsip` (or `.rsis` Suite) Manifests**:
   - Include clear `;` explanation comments above each section, use a permanent `{GUID}` for `UpgradeCode`, use 3-part `Major.Minor.Build` `Version` values (`<= 255.255.65535`), and include `&` keyboard mnemonics on custom UI labels (`InstallButtonText`, `FinishLaunchCheckbox`).
2. **Run Instant JSON Validation Before Compiling**:
   - Execute `instbuild.exe --validate --diagnostics=json <project.rsip|suite.rsis> --arch=arm64` (and `--arch=x64`) until `"ok": true`.
3. **Compile & Verify MSI / MSM / MST / MSP Integrity**:
   - Execute `instbuild.exe <project.rsip|suite.rsis> --arch=arm64` and `--arch=x64` (and optionally inspect SQL tables via `msiprism.exe --inspect-summary <out.msi>`).
4. **Optional Compliance Export**:
   - Execute `instbuild.exe --emit-vpat <project.rsip> <out-dir>` when generating WCAG 2.2 AA / Revised Section 508 procurement documentation.
