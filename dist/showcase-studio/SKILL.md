---
name: raggiesoft-showcase-studio
description: Author, validate WCAG 2.2 AA compliance, and compile zero-dependency static /MT Win32 C++20 1990s .BMP CD-ROM collector menus, modern Windows 11 FluentMica 16:9 launchpads, Unified Suite front-doors, Kiosk displays, and Bespoke _support\ Self-Extracting Installers using RaggieSoft Showcase Studio (rssbuild.exe, ShowcaseStudio.exe, ShowcaseStub.exe) and plain-text .rssp + RaggieScript (.rssc) projects.
---

# RaggieSoft Showcase Studio (`.rssp` + `.rssc`) Authoring Skill

Always read [`llms-full.txt`](llms-full.txt) in this folder for the authoritative `v0.5.0` `.rssp` project grammar, WCAG 2.2 AA diagnostic codes (`RSS001`–`RSS095`), CLI flags, and copy-paste blueprints emitted by `rssbuild.exe`.

## Mandatory 4-Step Agent Workflow

1. **Author Heavily Commented `.rssp` Manifests (and Optional `.rssc` Scripts)**:
   - Include `;` plain-English teaching comments above each section, set `AutoPlayAudio = false` (WCAG 1.4.2), give every `[Hotspot.<Id>]` a clear `Label` with an `&` `Alt+Key` mnemonic and `Description`, provide `AltText` on every `[Slide.<Id>]`, and attach `.vtt` files (`CaptionsVtt`) to spoken audio tracks.
2. **Validate WCAG 2.2 AA, 4-Way Focus Links, & Edition Rules in JSON Mode**:
   - Run `rssbuild.exe --validate --diagnostics=json <project.rssp>` until `"ok": true` (`0` errors).
3. **Compile Zero-Dependency `x64` & `ARM64` Outputs**:
   - Single Self-Contained `.EXE`: `rssbuild.exe <project.rssp> --arch=arm64` and `--arch=x64` (`MediaLayout = single_exe`).
   - Collector ISO / USB Folder (`+ autorun.inf`): `rssbuild.exe <project.rssp> --layout=disc_folder`.
4. **Emit VPAT 2.5 Conformance Documentation**:
   - Pass `--with-vpat` (or `rssbuild.exe --emit-vpat <project.rssp> <out.html>`) in `Community` or `Architect` editions.
