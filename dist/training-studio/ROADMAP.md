# RaggieSoft Training Studio — Product & Engineering Roadmap

- **Product Portal:** [https://raggiesoftstudio.com/training-studio](https://raggiesoftstudio.com/training-studio)
- **Developer & Open-Source Hub:** [https://raggiesoft.dev](https://raggiesoft.dev)
- **Current Release:** **`v0.7.0`** (`TrainingStudio.exe` Native Windows 11 `x64` & `ARM64` Visual IDE + `rstbuild` Cross-Platform CLI + `49.80 KB` Zero-Dependency Learner Runtime)
- **License:** MIT License (Compiler, IDE, and Runtime Code) • CC BY-SA 4.0 (Sample Compliance Fixtures)

---

## Why RaggieSoft Training Studio Exists

Legacy eLearning authoring suites routinely export static compliance slide decks into `400+ MB` progressive `.mp4` videos wrapped inside non-semantic `<canvas>` shells—triggering enterprise WAN `HTTP 206` byte-range timeouts, lost `LMSCommit()` watch time on Oracle Taleo and Workday, and DOJ ADA Title II / Section 508 accessibility failures.

**RaggieSoft Training Studio** treats compliance courseware as deterministic, Git-diffable software engineering: plain-text `.rstp` manifests, semantic Markdown slides, verified WebVTT captions, lightweight `48 kbps` Opus / `64 kbps` AAC voiceovers, atomic Write-Ahead Log (`WAL`) bookmarking, and an uncompromising **Compile-Time WCAG 2.2 Level AA Gate** that emits an HTML5 **VPAT 2.5 Conformance Report** beside every build.

---

## Shipped Milestones

### `v0.1.0` — Core Compiler, `< 50 KB` SCORM Runtime, WAL & Compile-Time WCAG Gate
- Comment-preserving `.rstp` AST parser (`[Course]`, `[Compliance]`, `[Branding]`, `[Slide.<Id>]`, `@include`).
- Semantic Markdown slide compiler (`:::cue`, `:::question`, `:::attestation`, mandatory explicit image `alt` or `{decorative=true}`).
- Zero-dependency `< 50 KB` Vanilla ES2022 + `@layer` CSS3 learner runtime supporting **SCORM 1.2** and **SCORM 2004 (4th Edition)** (`prefers-color-scheme`, `prefers-reduced-motion`, `forced-colors: active`).
- Proxy-proof sub-slide `LMSCommit()` checkpoints backed by a `localStorage` + `IndexedDB` Write-Ahead Log (`WAL`), exponential-backoff `HTTP 206` media recovery, and forward-locked compliance scrubber with unlocked rewind and `1.0x–2.0x` variable speed.
- Compile-Time WCAG 2.2 AA & Section 508 Gate powered by `AccessibilityStudio.Core` + automatic HTML5 **VPAT 2.5** emitter + Kestrel **Hostile Enterprise LMS** fault-injection harness.

### `v0.5.0` — Native Windows 11 `x64` & `ARM64` Visual Courseware IDE (`TrainingStudio.exe`)
- Multi-pane `.NET` WinForms + `WebView2` workstation IDE with full Dark/Light & Windows High-Contrast theme compliance.
- Lossless AST writer (`RstpDocumentWriter`) preserving 100% of `;` comments and `@include` directives during visual property and slide-reordering edits.
- Guided **New Compliance Course Wizard** (`Ctrl+N`), embedded **Hostile Enterprise LMS Simulator** tab (`F5`), live **Auto-VPAT 2.5** preview tab, **Legacy Third-Party SCORM `.zip` Auditor** (`LEG001`–`LEG006`), and zero-dependency native C++20 offline `F1` manual (`RaggieSoftHelp.exe`).

### `v0.7.0` *(Current)* — PowerPoint Migration, Split Live Preview, Question Banks, Role Branching, `RaggieScript` & xAPI / cmi5
- **Turnkey PowerPoint (`.pptx`) & Legacy SCORM Migration Importer (`Ctrl+I` / `rstbuild import-pptx` / `import-scorm`)**: Zero-dependency OpenXML `.pptx` parser that extracts slide ordering, headings, bullets, `cNvPr/@descr` image alt-text, media, and speaker notes—automatically formatting speaker notes into verified `<= 22 CPS` WebVTT `.vtt` closed captions and playable `.wav` timing tracks.
- **Side-by-Side Split Live Slide & Caption CPS Preview**: Real-time preview card beside the source editor rendering Markdown prose, timed `:::cue` reveals, quiz branch targets, attestation sign-offs, and live WebVTT Characters-Per-Second (`CPS`) reading speeds as you type.
- **Randomized Question Banks (`[QuestionBank.<Id>]`)**: Pooled Markdown assessment banks (`DrawCount`, `ShuffleChoices`, `RST026` validation) using a deterministic Mulberry32 PRNG seed persisted inside `cmi.suspend_data` (`state.sd`) so learners keep their exact drawn question subset across cold LMS restarts without exceeding SCORM 1.2's `4,096`-byte ceiling.
- **Role-Based Scenario Tracks (`[Track.<Id>]`) & Choice Remediation Branching**: Accessible role selector (`Tracks = frontline, supervisor`) dynamically tailoring required slide counts, paired with `- [ ] a -> target-slide | Choice` remediation routing on missed checks.
- **In-Process `RaggieScript` (`use training;`) CSP-Safe ES2022 Transpilation**: Compiles custom mastery/scoring modules (`RaggieScriptSource`) via `RaggieScript.Core` into deterministic, `eval()`-free ES2022 functions (`RST030`).
- **4-Standard LMS Packaging (`< 50 KB` Budget Preserved at `49.80 KB`)**: One-click `F6` / `--scorm=all` output for **SCORM 1.2** (`imsmanifest.xml`), **SCORM 2004 4th Ed.** (`imsmanifest.xml`), **xAPI / Tin Can** (`tincan.xml` + LRS Statement outbox), and **cmi5** (`cmi5.xml`Assignable Unit lifecycle).

---

## Upcoming Roadmap (`v0.8.0` -> `v1.0.0 GA`)

### `v0.8.0` — Visual Audio Waveform, Built-In Voiceover Recorder & One-Click Cue Stamper
- **In-IDE WASAPI Voiceover Recorder**: Record crisp per-slide narration directly inside `TrainingStudio.exe` with automatic silence trimming, loudness normalization (`-16 LUFS`), and one-click `48 kbps` Opus + `64 kbps` AAC packaging.
- **Interactive Waveform Timeline & Spacebar Timestamp Stamper**: Scrub visual audio waveforms inside Tab 1 and press a single hotkey while listening to stamp exact `MM:SS.mmm` timestamps into `.vtt` caption cues and `:::cue` DOM callout blocks—zero manual stopwatch math.
- **Automated Caption Alignment Assist**: Flag drift between spoken syllable bursts and `.vtt` cue boundaries before running the `RST019` (`<= 25 CPS`) compile gate.

### `v0.9.0` — Multi-Language Track Switcher & Printable SHA-256 Completion Receipt
- **Zero-Reload Multi-Language Learner Switcher (`en-US` / `es-US` / `fr-CA` / Custom)**: Bundle multiple localized slide Markdown files, `.vtt` closed-caption tracks, and voiceover audio tracks inside a single `< 50 KB` learner runtime shell so employees can switch languages mid-slide without losing watch progress.
- **Employee-Downloadable Completion Receipt with SHA-256 Proof Digest**: Generate a clean, screen-reader-accessible printable HTML5 Completion Receipt upon `attestation-signed` / `passed` state containing learner ID, course version, UTC completion timestamp, and a deterministic verification hash—giving workers independent proof of training completion even when an enterprise LMS drops a session callback.

### `v1.0.0 GA` — Tagged `PDF/UA-1` VPAT Packets, `XLIFF 2.1` Localization Sync & Unified Studio 1.0
- **`RaggieSoft Document Studio` Integration (`PDF/UA-1` VPAT 2.5)**: Emit Matterhorn-verified Tagged `PDF/UA-1` VPAT 2.5 procurement packets alongside HTML5 VPAT reports during `rstbuild build --with-vpat`.
- **`RaggieSoft Localization Studio` Integration (`XLIFF 2.1`)**: Round-trip `.rstp` slide prose and `.vtt` captions through `XLIFF 2.1` translation bundles with automatic CPS reading-speed expansion checks for Spanish, French, and German tracks.
- **Unified RaggieSoft Studio Suite `v1.0`**: Seamless single-installer orchestration across all 8 RaggieSoft Studio engineering tools with permanent **100% Community == Architect feature parity**.

---

## Fictitious Persons & Entities Disclaimer

While **RaggieSoft Training Studio** is real open-source engineering software created by **Michael P. Ragsdale**, all sample municipal, university, corporate, and transit agency names referenced in demonstration courses and documentation (including *City of Ocean View*, *Commonwealth Polytechnic Institute (CPI)*, *VDU*, *OmniCorp*, *BRT*, and *CVTA*) are fictitious works of world-building. Any resemblance to actual organizations, living or deceased persons, or events is purely coincidental.
