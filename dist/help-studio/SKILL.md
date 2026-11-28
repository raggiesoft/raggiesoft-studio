---
name: raggiesoft-help-studio
description: Author, validate WCAG 2.2 AA compliance, script conditional topics and search aliases with RaggieScript (use help;), import legacy Microsoft HTML Help (.chm, .hhp, .hhc, .hhk) and WinHelp (.hlp, .cnt, .hpj, Word .rtf) archives, emit C++/C#/VB6/TS F1 Context-ID SDKs, and compile modular .rshm.json packs, standalone C++20 <Product>Help.exe viewers, three-column RaggieSoft Reference Portals, and VPAT 2.5 reports using RaggieSoft Help Studio v0.7.0 (rshbuild.exe, HelpStudio.exe, RaggieSoftHelp.exe).
---

# RaggieSoft Help Studio v0.7.0 (`.rshp` + `use help;`) Authoring, RaggieSoft Reference Portals & Legacy `.CHM` / `.HLP` Migration Skill

Always read [`llms-full.txt`](llms-full.txt) in this folder for the authoritative `v0.7.0` `.rshp` manifest grammar, CLI flags (`--license-file=`, `--license-status`, `--oem-filter=`), `RaggieScript v1.3.0` `use help;` sandbox hooks, `F1` Named Pipe IPC contract, Cross-Suite Federated Search, **RaggieSoft Reference Portal** export options (`CanonicalSiteUrl`, `CompanionUrl`), and copy-paste blueprints emitted directly by `rshbuild.exe`.

## Mandatory 4-Step Agent Workflow

1. **Import Legacy `.CHM` / `.HLP` OR Author Commented `.rshp` Manifests (+ Optional `use help;` `.rssc` Hooks)**:
   - Decompile legacy archives in one command:
     `rshbuild.exe --import <Legacy.chm|Legacy.hlp|Legacy.cnt|Legacy.hhp|Legacy.hpj> --out-dir=<dir> [--format=markdown|html]`
   - Or author plain-text `.rshp` + Markdown (`.md`) / HTML5 (`.html`) topics with `;` teaching comments, `[ContextMap]` `IDH_* = 0x1040 | topic-slug#anchor` rows, and optional `[Build] RaggieScript = scripts/help-rules.rssc` (`use help;`).
2. **Validate WCAG 2.2 AA, Links, Context IDs & `RaggieScript` (`RSW700`–`RSW715`) in JSON Mode**:
   - Run `rshbuild.exe --validate --diagnostics=json <project.rshp>` until `"ok": true` (`0` errors).
3. **Compile All Deliverables (`module.rshm.json` + Standalone `Help.exe` + RaggieSoft Reference Portal + `F1` SDK + VPAT 2.5)**:
   - Run `rshbuild.exe <project.rshp> --with-vpat`.
4. **Live Viewing, Cross-Suite Federated Search & Legacy Rescue**:
   - `RaggieSoftHelp.exe` auto-discovers all sibling `HKLM\Software\RaggieSoft\HelpModules` packs for federated cross-suite search, opens standalone `LZMS`-embedded `<Product>Help.exe` binaries, AND opens raw `.chm`, `.hlp`, and `.cnt` files directly!
