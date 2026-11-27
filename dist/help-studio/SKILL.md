---
name: raggiesoft-help-studio
description: Author, validate WCAG 2.2 AA compliance, import legacy Microsoft HTML Help (.chm, .hhp, .hhc, .hhk) and WinHelp (.hlp, .cnt, .hpj, Word .rtf) archives, emit C++/C#/VB6/TS F1 Context-ID SDKs, and compile modular .rshm.json packs, standalone C++20 <Product>Help.exe viewers, static HTML5 web portals, and VPAT 2.5 reports using RaggieSoft Help Studio (rshbuild.exe, HelpStudio.exe, RaggieSoftHelp.exe).
---

# RaggieSoft Help Studio (`.rshp`) Authoring & Legacy `.CHM` / `.HLP` Migration Skill

Always read [`llms-full.txt`](llms-full.txt) in this folder for the authoritative `v0.5.0` `.rshp` manifest grammar, CLI flags, `F1` Named Pipe IPC contract, and copy-paste blueprints emitted directly by `rshbuild.exe`.

## Mandatory 4-Step Agent Workflow

1. **Import Legacy `.CHM` / `.HLP` OR Author Commented `.rshp` Manifests**:
   - Decompile legacy archives in one command:
     `rshbuild.exe --import <Legacy.chm|Legacy.hlp|Legacy.cnt|Legacy.hhp|Legacy.hpj> --out-dir=<dir> [--format=markdown|html]`
   - Or author plain-text `.rshp` + Markdown (`.md`) / HTML5 (`.html`) topics with `;` teaching comments and `[ContextMap]` `IDH_* = 0x1040 | topic-slug#anchor` rows.
2. **Validate WCAG 2.2 AA, Links & Context IDs in JSON Mode**:
   - Run `rshbuild.exe --validate --diagnostics=json <project.rshp>` until `"ok": true` (`0` errors).
3. **Compile All Deliverables (`module.rshm.json` + Standalone `Help.exe` + Web Portal + `F1` SDK + VPAT 2.5)**:
   - Run `rshbuild.exe <project.rshp> --with-vpat`.
4. **Live Viewing / Rescue Testing**:
   - `RaggieSoftHelp.exe` opens compiled `.rshm.json` modules, standalone `LZMS`-embedded `<Product>Help.exe` binaries, AND raw `.chm`, `.hlp`, and `.cnt` files directly!
