---
name: raggiesoft-training-studio
description: Author, migrate PowerPoint (.pptx) & legacy SCORM decks, validate WCAG 2.2 AA compliance, emit VPAT 2.5 reports, and compile bandwidth-resilient SCORM 1.2, SCORM 2004 4th Edition, xAPI (Tin Can), and cmi5 training packages using RaggieSoft Training Studio (TrainingStudio.exe & rstbuild v0.7.0) and plain-text .rstp + Markdown + WebVTT + RaggieScript projects.
---

# RaggieSoft Training Studio (`.rstp` v0.7.0) Authoring Skill

1. Author heavily commented `.rstp` manifests (`;` comments above each `[Section]`, optional `[Track.<Id>]`, `[QuestionBank.<Id>]`, and `RaggieScriptSource`) paired with per-slide `.md` files and synchronized `.vtt` WebVTT captions (`<= 25 chars/sec`), or migrate an existing `.pptx` deck via `rstbuild import-pptx <deck.pptx> <out-dir>`.
2. Validate accessibility, `RaggieScript` (`use training;`), question banks, & SCORM `suspend_data` budgets via `rstbuild validate <course.rstp> --json` until `0` errors.
3. Compile self-contained SCORM 1.2, SCORM 2004, xAPI, and cmi5 `.zip` packages (`< 50 KB` learner runtime) + HTML5 VPAT 2.5 conformance reports via `rstbuild build <course.rstp> --scorm=all --with-vpat`.
4. Test proxy drops, `HTTP 206` byte-range stalls, and cold session bookmark recovery locally via `rstbuild serve-lms <out-dir>` or inside `TrainingStudio.exe` (`F5`).