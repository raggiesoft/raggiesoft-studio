---
name: raggiesoft-training-studio
description: Author, validate WCAG 2.2 AA compliance, emit VPAT 2.5 reports, and compile bandwidth-resilient SCORM 1.2 and SCORM 2004 4th Edition training packages using RaggieSoft Training Studio (rstbuild) and plain-text .rstp + Markdown + WebVTT projects.
---

# RaggieSoft Training Studio (`.rstp`) Authoring Skill

1. Author heavily commented `.rstp` manifests (`;` comments above each `[Section]`) paired with per-slide `.md` files and synchronized `.vtt` WebVTT captions (`<= 25 chars/sec`).
2. Validate accessibility & SCORM `suspend_data` budgets via `rstbuild validate <course.rstp> --json` until `0` errors.
3. Compile self-contained SCORM 1.2 and SCORM 2004 `.zip` packages + HTML5 VPAT 2.5 conformance reports via `rstbuild build <course.rstp> --with-vpat`.
4. Test proxy drops, `HTTP 206` byte-range stalls, and cold session bookmark recovery locally via `rstbuild serve-lms <out-dir>`.