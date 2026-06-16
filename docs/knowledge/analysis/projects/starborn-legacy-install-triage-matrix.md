---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Starborn Legacy greenfield install — triage matrix

**Source diary:** [starborn-legacy-greenfield-install-diary.md](starborn-legacy-greenfield-install-diary.md)  
**UXR:** [UXR-025](../../../kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)  
**Task:** [E06:S09:T25](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)  
**IPP:** [IPP-E06S09T25](../../../implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)

**ADK pin:** Attempt 1 — `v0.4.1063` tarball · Attempt 2 — `main` @ `97ff2834` sparse clone · Attempt 3 — `v0.4.13` tarball (internal `0.4.1098+1`) · **Project:** Starborn Legacy (`starborn_legacy`)

**Task (attempt 3+):** [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

**Attempt artifacts:** [Maintainer index](../../../../adk-install-into-sbl/README.md) · [attempt-02 diary](starborn-legacy-greenfield-install-diary.md) · [attempt-03 index](../../../../adk-install-into-sbl/attempt-03/README.md)

**SBL-owned FB roots ([FR-079](../../../kanban/fr-br/FR-079-install-feedback-submission-path-and-governance.md)):** `starborn_legacy/logs/ai-dev-kit/install/attempt-{03,04,05,06}/` — diaries, `feedback-package/`, `transcripts/`, `session.log`. **Not** duplicated in `ai-dev-kit`.

---

## Disposition summary

| ID | Finding | Severity | Disposition | Outcome (E06:S09:T25) |
|----|---------|----------|-------------|------------------------|
| F1 | Submodule add failed — `.gitmodules` absent after index wipe | LOW | **DOC** | INSTALL: clean working tree before submodule add |
| F2 | Sparse clone failed — disk full (~116 MiB free) | MEDIUM | **DOC** | INSTALL: prefer release tarball when disk-constrained |
| F3 | Release tarball + `verify_vendor_tree` succeeded | — | **RECORD** | Positive signal; keep tarball path prominent |
| F4 | Orchestrator `--non-interactive` → RW hung on `Project name` (`ADK-I01.S01`) | HIGH | **CODE** | `install_greenfield_path.py`: forward `--non-interactive` + `--config` to RW |
| F5 | `--vendor-root` only affected preflight; subprocesses used project-root `packages/` | HIGH | **CODE** | `resolve_frameworks_base()` + absolute installer paths under vendor |
| F6 | RW mode C partial — no local `workflows/` (expected lean) | LOW | **DOC** | INSTALL: lean RW expectation documented |
| F7 | Kanban fresh + sign-off ALL READY | — | **RECORD** | Installer contract only (BR-083–086, UXR-017 path casing) — see **F9** for catalog generation |
| F8 | Adopter retains legacy E/S/T kanban — scope closure | INFO | **DOC** | FR-081 brownfield deferral; not a greenfield defect |
| F9 | `--mode fresh` installed **v1** catalog (attempts 1–4); v3.2 path required for SBL migration test | **CRITICAL** | **PRODUCT** | **RESOLVED** @ [T27](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md) — attempt 05 confirms v3.2 on disk |
| F10 | Option A only obvious path — orchestrator cannot skip Kanban; RW-only misread as “no ADK kanban ever” | HIGH | **DOC + CODE** | Document migration-test-bed sequence; orchestrator `--skip-kanban` or honor `use_kanban: false` |
| F11 | `use_kanban: false` post-install — no `docs/` dir; deferred vs excluded confusion | HIGH | **DOC + UX** | Post-install hint when Kanban deferred |
| F12 | Legacy `KB/` vs ADK `docs/kanban/` not explained at install time | MEDIUM | **DOC** | FR-081 / INSTALL: source vs target roots (Starborn example) |
| F13 | Agent restored legacy only when adopter needed ADK target tree | MEDIUM | **DOC** | Playbook: dual-tree requirement before migration |
| F14 | Dual kanban test bed required manual 4-step sequence (3a→restore→3b→3c) | MEDIUM | **DOC + CODE** | Documented profile or orchestrator phases |
| F15 | Migration not started — `KB/` → `docs/kanban` detector pending | INFO | **RECORD** | Next SBL session |
| F16 | Fresh install = v1 catalog; adopter diary labels “ADK v3 Kanban” (consumer layout ≠ v3.2 spec) | MEDIUM | **DOC** | Terminology: `docs/kanban/` layout vs Kanban v3.2 package rewrite |
| F17 | Attempts 03–04 installed v1 again — `E05 FR Implementation` on disk; blocks SBL → v3.2 migration test | **CRITICAL** | **PRODUCT** | **RESOLVED** @ attempt 05 / [T27](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md) **v0.6.9.27+2** |
| F18 | BR-086 expects `{story:03d}` / `t{task}`; v3.2 fresh install produces `{story:02d}` / `T{task}` | MEDIUM | **RESOLVED** @ v0.6.9.28+2; **SBL replay confirmed** attempt 06 | [BR-105](../../../kanban/fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) → [T28](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) |
| F19 | `--non-interactive` EOFError on CHANGELOG (and historically `version_file`) scaffold prompts | HIGH | **RESOLVED** @ v0.6.9.29+2; **SBL replay confirmed** attempt 06 | [BR-106](../../../kanban/fr-br/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) → [T29](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md) |
| F20 | Mode a default `version_file: src/myproject/version.py` — not project-aware | MEDIUM | **CODE** | Derive from project name / layout (workaround in attempt 05/06) |
| F21 | Kanban v3.2 install logs unpadded `epic-N` paths; disk uses `epic-0N` | LOW | **RESOLVED** @ v0.6.9.30+2; **SBL replay confirmed** attempt 06 | [BR-107](../../../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) → [T30](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) |
| F22 | Kanban migration tool pipeline (`detect→analyze→migrate`) detected 0/80+ SBL stories; agentic migration migrated 72 | HIGH | **FILED** | [FR-127](../../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) → [T31](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) |
| F23 | `detect_existing_structure.py` — zero-padded `Epic-01.md` not matched (`int('01')` → epic-1) | MEDIUM | **FILED** | [BR-108](../../../kanban/fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md) → [T32](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) |

---

## Evidence links

| ID | Diary section | Error / signal |
|----|---------------|----------------|
| F1 | Phase 1a | `fatal: please make sure that the .gitmodules file is in the working tree` |
| F2 | Phase 1b | `No space left on device` |
| F3 | Phase 1c | `verify_vendor_tree` → Vendor tree OK |
| F4 | Phase 4 | `ADK-I01.S01` after `--non-interactive` orchestrator |
| F5 | Phase 3–4 | Manual `ln -sf vendor/ai-dev-kit/packages packages` workaround |
| F6 | Phase 5 | Missing `workflows/release-workflow/release-workflow.yaml` locally |
| F7 | Phase 6 (attempt 1); attempt 2 orchestrator transcript | `signoff-report.json` ALL READY |
| F8 | Phase 8 (attempt 1); attempt 2 Phase 6 | Legacy `KB/PM_and_Portfolio/` retained; ADK kanban exercise only |
| F9 | Phase 6 (attempt 1); attempt 2 Phase 6; attempt 3 phase3b + `migrate_structure._install_canonical_epics` | Same 12 epics all runs; v1 templates not [v3.2 executive summary](../kanban-v2/08-executive-summary.md) |
| F10 | Attempt 3 `phase3-rw-only` transcript | Orchestrator bypassed; Option A chosen to avoid Kanban fresh |
| F11 | Attempt 3 phase 3a exit — no `docs/kanban/epics` | Adopter: “there's no docs/ dir” |
| F12 | Attempt 3 `restore-legacy-kanban` transcript | `KB/PM_and_Portfolio/` vs `docs/kanban/` |
| F13 | Adopter correction after legacy-only restore | Needed both trees for migration test |
| F14 | Attempt 3 phase3b + phase3c transcripts | Manual RW defer → restore → kanban → RW mode C |
| F15 | Attempt 3 diary Phase 5 | Migration exercise not started |
| F16 | Attempt 3 diary “ADK v3 Kanban fresh” wording | Consumer path label vs v3.2 catalog spec |
| F17 | SBL `…/attempt-03/feedback-package/evidence/…/epic-05.md`; attempt 05 phase3c transcript | v1: “Epic 5: FR Implementation”; v3.2 PASS: Epic 5 = **Project Architecture** |
| F18 | SBL `…/attempt-05/transcripts/20260610T183541Z-phase4-signoff.txt` | BR-086 NOT READY on `{story:03d}` / `t{task}` vs `{story:02d}` / `T{task}` |
| F19 | SBL `…/attempt-05/transcripts/20260610T183451Z-phase3a-rw-bootstrap.txt` | CHANGELOG prompt EOF under `--non-interactive` |
| F21 | SBL `…/attempt-05/transcripts/20260610T183509Z-phase3c-kanban-v3dot2.txt` | Log `epic-1/` vs disk `epic-01/` |

---

## Attempt 2 addendum (2026-06-09)

| Topic | Result |
|-------|--------|
| UXR-025 fixes (F4/F5) | Verified on `main` @ `97ff2834` |
| Adopter intent | **Failed** — Kanban fresh still ran despite legacy E/S/T scope notes |
| Catalog generation (F9) | Unchanged — still v1 packaged templates, not v2/v3 |

---

## Attempt 3 addendum (2026-06-09) — [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.13` greenfield tarball (SemVer release; internal **`0.4.1098+1`**) |
| Orchestrator | **Not invoked** — adopter used Option A (RW-only) then manual dual-tree sequence |
| Dual kanban test bed | **PASS** — `KB/PM_and_Portfolio/` (legacy source) + `docs/kanban/` (ADK target) coexist |
| Catalog generation (F9/F17) | **BLOCKER** — v1 packaged templates again; SBL → v3.2 migration test **cannot proceed** |
| Sign-off (post 3c) | 6 READY, 1 SKIP, 1 NOT READY (BR-086 pattern padding) |
| FB package | SBL `starborn_legacy/logs/ai-dev-kit/install/attempt-03/feedback-package/` — FR-079 intake **accepted** |

### F17 — v1 vs v3.2 fingerprint (on disk)

| Signal | Installed (v1) | Expected (v3.2 Scenario A) |
|--------|----------------|----------------------------|
| Epic 5 | Standalone **FR Implementation** | FR intake is **E04:S02** story, not epic 5 |
| Epic 6–7 | BR, UXR standalone epics | **E04:S03–S04** stories |
| Catalog | 1–8, 10, 18, 22, 23 from `_install_canonical_epics` | v3.2 remap per [07-package-migration-blueprint](../kanban-v2/07-package-migration-blueprint.md) |

**Requested maintainer actions:** INSTALL v1-only warning; orchestrator skip-Kanban (F10); migration-test-bed recipe (F12–F14); optional sign-off v1 fingerprint gate.

---

## Attempt 4 addendum (2026-06-10) — [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.1131` greenfield tarball (sha256 verified) |
| Adopter expectation | Re-test whether F17 resolved in newer ADK release |
| Catalog generation (F9/F17) | **BLOCKER — unchanged** — epic-05 title still **“Epic 5: FR Implementation”**; **fourth** independent v1 proof |
| Root cause (confirmed) | `migrate_structure._install_canonical_epics()` + v1 `packages/frameworks/kanban/templates/` — [v3.2 package blueprint](../kanban-v2/07-package-migration-blueprint.md) Waves 1–4 **not executed** (gated on Phase 5 sign-off) |
| Orchestrator (F10) | **Not addressed** — no `--skip-kanban` |
| Dual kanban test bed | **PASS** — 4-step sequence reliable |
| BR-084 / UXR-017 | **READY** — improvements since attempt 03 |
| BR-086 | **NOT READY** — F18 contract vs reality mismatch |
| New findings | **F18–F20** — padding, non-interactive EOF, default version path |
| FB package | SBL `starborn_legacy/logs/ai-dev-kit/install/attempt-04/feedback-package/` — FR-079 intake **accepted** |

### Why attempt 04 still got v1 (not a failed fix)

| What improved in ADK | What did **not** change |
|----------------------|-------------------------|
| F4/F5 orchestrator (T25) | Kanban template tree |
| BR-084 task_doc_pattern | `_install_canonical_epics` epic list (1–8, 10, 18, 22, 23) |
| UXR-017 lowercase path validators | v3.2 remap (FR → E04:S02, etc.) |

**Conclusion:** Any ADK release that ships the current `greenfield-install/` kanban templates will reproduce F17 until the v3.2 **package rewrite** lands or INSTALL explicitly documents v1-only `--mode fresh`.

---

## Attempt 5 addendum (2026-06-10) — [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

| Topic | Result |
|-------|--------|
| ADK pin | `main` @ `0d278366` (internal **`v0.6.9.27+2`** / SemVer **`v0.4.1133+2`**) |
| Catalog generation (F9/F17) | **RESOLVED** — v3.2 templates on disk; Epic 5 = **Project Architecture**; no standalone FR/BR/UXR epics |
| Dual kanban test bed | **PASS** — legacy `KB/PM_and_Portfolio/` + ADK `docs/kanban/`; rollback kept `KB/` + `logs/` |
| Sign-off | **7 READY, 1 SKIP, 1 NOT READY** — BR-086 / **F18** padding mismatch on v3.2 fresh install |
| F19 | **RESOLVED** @ v0.6.9.29+2 — `scaffold_interactive` wiring; SBL replay pending |
| F21 | **NEW (LOW)** — install stdout logs `epic-1/`; disk has `epic-01/` |
| FB package | SBL `starborn_legacy/logs/ai-dev-kit/install/attempt-05/feedback-package/` — FR-079 intake **accepted** |
| Upstream filed | [BR-105](../../../kanban/fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) / [T28](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T28-v32-fresh-install-signoff-story-padding-br105.md) · [BR-106](../../../kanban/fr-br/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) / [T29](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T29-rw-install-non-interactive-changelog-prompt-br106.md) · [BR-107](../../../kanban/fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) / [T30](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T30-kanban-installer-log-epic-path-padding-br107.md) |

### F17 resolution fingerprint (attempt 05)

| Signal | v1 (attempts 1–4) | v3.2 (attempt 05 — PASS) |
|--------|---------------------|--------------------------|
| Epic 5 | Standalone **FR Implementation** | **Project Architecture** |
| Epic 6–7 | BR, UXR standalone epics | Absent — intake at **E04:S02–S04** |
| FR intake | Epic-level | **E04:S02** story |

---

## Attempt 6 addendum (2026-06-11) — [E06:S09:T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.1140+2` minimum → deployed at `256259fb2` (`v0.4.1142+3`) |
| AC13 verification | **PASS** — F17/F18/F19/F21 all confirmed in SBL environment |
| Sign-off | **7 READY, 1 SKIP, 0 NOT READY** — BR-086 ALL READY (F18) |
| Dual kanban | **PASS** — legacy `KB/PM_and_Portfolio/` preserved + ADK `docs/kanban/` |
| Full ADK install | **PASS** — 15 workflows, 6 frameworks, versioning, Obsidian + Docusaurus |
| Legacy migration | **PASS (agentic)** — 72 stories → E01–E10 + E21–E28; tool pipeline **0 stories** |
| New findings | **F22–F23** → [FR-127](../../../kanban/fr-br/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)/[T31](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T31-agentic-kanban-migration-agent-fr127.md) · [BR-108](../../../kanban/fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md)/[T32](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md) |
| Adopter artifacts | `kboard-template-v3dot2.md`, `kboard-populated-example.md` in feedback-package |
| FB package | SBL `…/attempt-06/feedback-package/` — FR-079 **accepted**; adopter sign-off **final** @ `20260611T094319Z` |
| Maintainer index | [attempt-06/README.md](../../../../adk-install-into-sbl/attempt-06/README.md) |

### F18/F19/F21 SBL replay confirmation (attempt 06)

| Finding | Attempt 05 | Attempt 06 |
|---------|------------|------------|
| F18 sign-off | 1 NOT READY (BR-086) | **ALL READY** |
| F19 non-interactive | EOF workaround | **No EOF** — clean `--non-interactive` |
| F21 log padding | `epic-1` in stdout | **`epic-01`** matches disk |

---

## Adopter decision (not upstream defects)

Starborn Legacy **closed** install attempts 1 and 2 without adopting ADK template kanban (v1 or v3). Attempts 3–4 built a **dual-tree migration test bed** but were **blocked** on v1 catalog (**F9/F17**). Attempt 5 confirmed **v3.2** on disk; attempt 6 **adopter sign-off final** — full ADK install + agentic migration; FR-079 accepted; **F22/F23** filed as FR-127/T31 and BR-108/T32. Attempts **7–8** explored in-place migration (abandoned @ 8). Attempts **9–10** validated **Arm B** selective adoption: attempt 10 Install RC strict **PASS**, **0** ad-hoc KMA scripts, SQLite, first domain RW — programme **Phase 1** closed @ [T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) **v0.6.9.26+4**.

---

## Attempt 9 addendum (2026-06-15) — Arm B

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.1164` @ `7a08a906` |
| Arm | **B** — greenfield shell + selective KMA |
| KMA | **PASS** (manual; 6 ad-hoc scripts) |
| Install RC | **~50% FAIL** — Phase 0 kit gaps (sqlite, UKW, docs schema) |
| Synthesis | PRIMARY → [T36](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md) / [UXR-029](../../../kanban/fr-br/UXR-029-adk-install-path-experiment.md) / [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) |

---

## Attempt 10 addendum (2026-06-15) — Arm B closure

| Topic | Result |
|-------|--------|
| ADK pin | `v0.4.1171` @ `448a79e1` |
| Install RC (strict) | **PASS** — 10 blocking / 1 skip |
| KMA | **PASS** — kit-owned; **0** ad-hoc scripts |
| Release authority | **SQLite** — `.adk/release-state.db` |
| Operational | First domain RW + post-install UKW on SBL `dev` |
| Programme | [T26](../../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) **COMPLETE** @ **v0.6.9.26+4** |
| Index | [attempt-10/README.md](../../../../adk-install-into-sbl/attempt-10/README.md) |
