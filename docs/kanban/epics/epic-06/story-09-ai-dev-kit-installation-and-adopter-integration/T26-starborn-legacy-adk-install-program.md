---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 26: Starborn Legacy ADK install program

**Task ID:** E06:S09:T26  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Created:** 2026-06-09  
**Last updated:** 2026-06-10 (attempt 05 FB intake — F17 **RESOLVED** @ `v0.6.9.27+2`; F18/F19/F21 → BR-105/106/107)  
**Version:** v0.6.9.26+2  
**Version Anchor:** v0.6.9.26+2  
**Code:** E06S09T26

**Predecessor (closed):** [E06:S09:T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) — UXR-025 triage + F4/F5 fixes @ **v0.6.9.25+3**

**Related:** [UXR-025](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) · [Triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) · [Maintainer index](../../../../../../adk-install-into-sbl/README.md) · SBL FB roots: `starborn_legacy/logs/ai-dev-kit/install/attempt-{03,04,05}/`

---

## Summary

**Ongoing maintainer task** to manage AI Dev Kit installation into **Starborn Legacy (SBL)**: run and record install attempts, ingest adopter feedback, drive upstream ADK fixes/docs, and converge on a viable integration path (RW-only greenfield, brownfield per FR-081, or hybrid) without replacing SBL’s legacy **E/S/T** PM unless explicitly decided.

---

## Input

- [T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) closure @ **v0.6.9.25+3** and [attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) (failed adopter intent)
- [Triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) findings **F8**, **F9**
- [UXR-025](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) (resolved; ongoing SBL install feedback)
- SBL legacy **E/S/T** PM model (`KB/PM_and_Portfolio/`) — operational source of truth unless adopter opts into migration

---

## Scope

**Scope:** Ongoing Starborn Legacy ADK install program — attempt 3+ planning, SBL feedback loop, upstream installer/docs improvements, validator hygiene for consumer kanban paths.

---

## Problem statement

Attempts **1** and **2** proved installer contracts (sign-off ALL READY) but **failed SBL adopter intent**:

| Issue | Detail |
|-------|--------|
| Wrong PM model | Greenfield `--mode fresh` installed ADK **v1** template kanban; SBL requires legacy `KB/PM_and_Portfolio/` E/S/T |
| Wrong catalog generation | **F9** — same v1 `migrate_structure` epic list both attempts; not Kanban v3.2 |
| Scope not enforced | Diary noted legacy E/S/T; orchestrator still ran Kanban fresh |

[T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) closed **UXR-025** triage (F4/F5). **This task** owns **attempt 3+** and sustained SBL ↔ ADK feedback loop.

### Why v1 Kanban keeps shipping (root cause — not a regression)

**This is not the same class of bug as F4/F5.** Attempts 1–4 prove the installer **works as coded**; the code path was never rewritten.

| Layer | What shipped | What did **not** ship |
|-------|--------------|------------------------|
| **T25 fixes (F4/F5)** | `install_greenfield_path.py` — `--non-interactive`, `--vendor-root`, `resolve_frameworks_base()` | — |
| **Attempt 03/04 improvements** | BR-084 READY; UXR-017 lowercase paths READY; RW mode a baseline; dual-tree 4-step sequence | Kanban **template package** v3.2 rewrite |
| **F9/F17 (BLOCKER)** | `migrate_structure._install_canonical_epics()` still copies epics **1–8, 10, 18, 22, 23** from `packages/frameworks/kanban/templates/` | [v3.2 package migration blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) Waves 1–4 — **gated:** “Do not execute until Phase 5 operator sign-off” |

**Mechanism:** `install_kanban_framework.py --mode fresh` → `migrate_structure._install_canonical_epics()` → template dir still contains v1 layout (`epic-05` title **“Epic 5: FR Implementation”**). [Kanban v3.2 executive summary](../../../../knowledge/analysis/kanban-v2/08-executive-summary.md) ratified FR/BR/UXR as **E04:S02–S04** stories — that remap exists in **analysis docs only**, not in installer templates or `greenfield-install/` mirror.

**Implication:** Releasing `v0.4.1131` (or any ADK build) **without executing the package rewrite** will **always** reproduce F17. Sign-off ALL READY (BR-083–086) validates **path casing and config patterns**, not catalog generation. Fixing F17 requires a **product delivery** (template waves + `migrate_structure` epic list), not another orchestrator patch.

---

## Deliverable

1. **Attempt 3 plan** — documented path (RW-only vs brownfield), preflight checklist, success criteria for SBL.
2. **SBL feedback loop** — structured responses linked from attempt diaries.
3. **Upstream backlog** — INSTALL/orchestrator/doc items from F9 and attempt-2 closure notes.
4. **Validator hygiene** — `validate_branch_context` lowercase `epic-{nn}` task-doc discovery.

---

### In scope

- Plan and execute **attempt 3** (and follow-ons) with explicit install flags / path (RW-only, `--kanban-mode skip` when available, FR-081 brownfield).
- Maintain **maintainer indexes** under `adk-install-into-sbl/`; canonical FB/diary/transcripts remain in **SBL** per [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) (`starborn_legacy/logs/ai-dev-kit/install/attempt-NN/`).
- Respond to **SBL feedback** via [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) hygiene.
- File or implement upstream reactions (INSTALL docs, orchestrator, installer catalog F9, validator path discovery).
- Update [triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) for new findings.

### Out of scope

- Replacing SBL Flutter app delivery or unrelated SBL product work.
- Forcing ADK template kanban adoption without explicit adopter decision.
- Kanban v3.2 package migration waves (tracked separately; **F9/F17 BLOCKER** — no installer path until package rewrite ships).

---

## Acceptance criteria

- [x] **AC1:** Attempt 3 executed — dual-tree test bed built; migration blocked on v1 catalog ([attempt 03](../../../../../../adk-install-into-sbl/attempt-03/README.md)).
- [x] **AC2:** SBL legacy E/S/T remains operational PM — `KB/PM_and_Portfolio/` restored and unchanged alongside ADK target tree.
- [x] **AC3:** Kanban fresh ran only as **explicit** migration-test-bed step (phase 3b), not via orchestrator surprise.
- [x] **AC4:** Attempt 03 maintainer index + SBL FB path linked ([attempt-03](../../../../../../adk-install-into-sbl/attempt-03/README.md), SBL `…/attempt-03/feedback-package/SUBMISSION.md`).
- [x] **AC5:** Findings **F10–F17** merged into [triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md); **F9** upgraded to **BLOCKER**.
- [x] **AC6:** `validate_branch_context --strict` finds task doc for active E06:S09:T* releases (lowercase `epic-{nn}` / `story-{nn}-*` discovery in `locate_task_doc_for_version`).
- [x] **AC7:** Attempt 04 FB ingested; **F17 fourth proof** + **F18–F20** in triage matrix; upstream P0 = v3.2 package ([T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md)).
- [x] **AC8:** v3.2 package shipped — `--mode fresh` deploys v3.2 catalog @ **v0.6.9.27+2** (attempt 05 fingerprint PASS).
- [x] **AC9:** Attempt 05 executed on pin **`v0.4.1133+2`** (`main` @ `0d278366`); F17 **RESOLVED**; residual F18/F19/F21 filed as [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) / [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) / [T30](T30-kanban-installer-log-epic-path-padding-br107.md).

---

## Attempt log

| # | ADK pin | Outcome | Artifact |
|---|---------|---------|----------|
| 1 | `v0.4.1063` tarball | Closed — UXR-025 intake; F4/F5 failures | [Diary](../../../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md) |
| 2 | `main` @ `97ff2834` | **Failed intent** — orchestrator OK; wrong kanban | [Attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) |
| 3 | `v0.4.13` (`0.4.1098+1`) | **Partial** — dual kanban OK; **F17** v1 catalog blocks v3.2 migration test | [Attempt 03](../../../../../../adk-install-into-sbl/attempt-03/README.md) · SBL `…/attempt-03/` |
| 4 | `v0.4.1131` tarball | **BLOCKER unchanged** — F17 **fourth proof**; RW baseline + dual-kanban PASS; BR-086 NOT READY; F18–F20 new | SBL `…/attempt-04/feedback-package/SUBMISSION.md` |
| 5 | `main` @ `0d278366` (`v0.4.1133+2`) | **F17 RESOLVED** — v3.2 kanban PASS; dual-tree PASS; sign-off 7 READY / 1 SKIP / 1 NOT READY (F18); F19 workaround; F21 log cosmetic | SBL `starborn_legacy/logs/ai-dev-kit/install/attempt-05/` |

> **Path convention:** `starborn_legacy/logs/ai-dev-kit/install/attempt-NN/` — see [adk-install-into-sbl/README.md](../../../../../../adk-install-into-sbl/README.md).

---

## Attempt 05 intake (2026-06-10)

**FR-079 package accepted** — canonical root: `starborn_legacy/logs/ai-dev-kit/install/attempt-05/` (not copied into `ai-dev-kit`).

### Outcome

| Result | Detail |
|--------|--------|
| **F17 (was BLOCKER)** | **RESOLVED** — Epic 5 on disk is **Project Architecture** (v3.2); no standalone FR Implementation epic |
| **Dual kanban test bed** | **PASS** — legacy `KB/PM_and_Portfolio/` + ADK `docs/kanban/` coexist; rollback retained `KB/` + `logs/` |
| **Sign-off** | **PASS** @ **v0.6.9.28+2** — F18/BR-105 contract alignment shipped |
| **F19** | **CLOSED** @ **v0.6.9.29+2** — [BR-106](../../../fr-br/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) / [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) |
| **F20** | Mitigated with workaround (pre-created `version_file` + config) |
| **F21** | **CLOSED** @ **v0.6.9.30+2** — [BR-107](../../../fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) / [T30](T30-kanban-installer-log-epic-path-padding-br107.md) |

### Upstream filed (ai-dev-kit — derived from FB, not a copy)

| Finding | BR | Task |
|---------|-----|------|
| F18 | [BR-105](../../../fr-br/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) | [E06:S09:T28](T28-v32-fresh-install-signoff-story-padding-br105.md) |
| F19 | [BR-106](../../../fr-br/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) | [E06:S09:T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) |
| F21 | [BR-107](../../../fr-br/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) | [E06:S09:T30](T30-kanban-installer-log-epic-path-padding-br107.md) |

### Key SBL artifacts (reference paths)

| Artifact | Path |
|----------|------|
| FB cover | `…/attempt-05/feedback-package/SUBMISSION.md` |
| Payload | `…/attempt-05/feedback-package/feedback-payload.json` |
| Diary | `…/attempt-05/greenfield-install-diary.md` |
| Kanban v3.2 transcript | `…/attempt-05/transcripts/20260610T183509Z-phase3c-kanban-v3dot2.txt` |
| Sign-off transcript | `…/attempt-05/transcripts/20260610T183541Z-phase4-signoff.txt` |
| RW bootstrap transcript | `…/attempt-05/transcripts/20260610T183451Z-phase3a-rw-bootstrap.txt` |

---

## Attempt 04 intake (2026-06-10)

**FR-079 package accepted** (SBL `starborn_legacy/logs/ai-dev-kit/install/attempt-04/feedback-package/SUBMISSION.md`). Adopter re-tested on **`v0.4.1131`** expecting F17 resolution. **It did not resolve.**

### Outcome

| Result | Detail |
|--------|--------|
| **F17 (BLOCKER)** | **Fourth independent proof** — `docs/kanban/epics/epic-05/epic-05.md` title still **“# Epic 5: FR Implementation”**; identical v1 fingerprint to attempts 1–3 |
| **F10** | Orchestrator still has no `--skip-kanban`; workaround unchanged (RW mode a → legacy restore → kanban fresh → RW mode C) |
| **BR-086** | NOT READY — contract expects `{story:03d}` / `t{task`; fresh install produces `{story:02d}` / `T{task}` (**F18**) |
| **PASS** | Dual-kanban test bed; BR-084 READY; UXR-017 path casing READY |
| **BLOCKED** | SBL legacy E/S/T → ADK v3.2 migration test cannot proceed |

### New findings (F18–F20)

| ID | Finding | Disposition |
|----|---------|-------------|
| F18 | BR-086 contract vs fresh-install reality (`03d`/`t` vs `02d`/`T`) | **CODE** — align contract or installer padding |
| F19 | `--non-interactive` EOFError on `version_file` prompt | **CODE** — `prompt_yes_no` must respect non-interactive |
| F20 | Mode a default `version_file: src/myproject/version.py` | **CODE** — project-aware path |

### Maintainer response (required — not optional doc tweak)

1. **Stop conflating installer fixes with catalog delivery.** F4/F5/T25 closure ≠ F9/F17 closure. Attempt 04 on `v0.4.1131` is expected until [07-package-migration-blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) Waves 1–4 execute.
2. **P0 product gate:** Either ship v3.2 templates into `packages/frameworks/kanban/templates/` + `greenfield-install/` + update `_install_canonical_epics` epic list, **or** block/warn `--mode fresh` as v1-only (INSTALL + sign-off v1 fingerprint) so adopters are not told to retry expecting v3.2.
3. **P1 code:** F10 (`--skip-kanban`), F18–F20 (RW installer UX).
4. **Attempt 05:** **Must install Kanban v3.2** (latest ratified framework) — not another v1 tarball retry. See **Attempt 05 gate** below.

---

## Attempt 05 gate — install latest framework (operator intent)

**Goal:** Next SBL install attempt uses an ADK release whose `greenfield-install/` bundle ships **Kanban v3.2.0** templates, not the v1 catalog.

### ADK must ship before adopter runs attempt 05

| # | Delivery item | Verify |
|---|---------------|--------|
| 1 | Execute [07-package-migration-blueprint](../../../../knowledge/analysis/kanban-v2/07-package-migration-blueprint.md) Waves 1–4 in `packages/frameworks/kanban/templates/` | `generate_task_templates.py --validate` passes |
| 2 | Update `migrate_structure._install_canonical_epics()` epic list to v3.2 catalog (no standalone E05/E06/E07 FR/BR/UXR epics) | Unit/integration test or dry-run manifest |
| 3 | Run `sync_greenfield_install.py` — mirror into `greenfield-install/` | Tarball contains v3.2 templates |
| 4 | Sign-off v3.2 fingerprint gate — **fail** if `epic-05` title is still "FR Implementation" | `validate_*` or install sign-off rule |
| 5 | Publish new framework release (SemVer + greenfield tarball) | Adopter pins **new** tag, not `v0.4.1131` |
| 6 | (P1) F10 `--skip-kanban`, F18–F20 RW installer UX | Improves attempt 05 ergonomics; not substitute for #1–5 |

**Operator sign-off:** Four failed v1 installs (attempts 1–4) lift the blueprint gate — package rewrite execution is **authorized**; track implementation under a dedicated task (proposed **E06:S09:T27** — Kanban v3.2 package rewrite for installer).

### Attempt 05 success fingerprint (on disk after `--mode fresh`)

| Signal | v1 (FAIL — do not ship) | v3.2 (PASS) |
|--------|-------------------------|-------------|
| Epic 5 | Standalone `# Epic 5: FR Implementation` | **Absent** — FR intake is **E04:S02** story |
| Epic 6–7 | Standalone BR / UXR epics | **E04:S03–S04** stories |
| E01 title | Project Core | Repository Infrastructure & Maintenance |
| E05 semantics | FR Implementation | Project Architecture |

### Attempt 05 is **not** authorized until

- [x] New ADK release published with v3.2 templates in tarball — **[E06:S09:T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md)** @ **v0.6.9.27+2** / SemVer **v0.4.1133+2**
- [x] Maintainer confirms fingerprint PASS on clean dry-run install (`tests/kanban/test_kanban_v32_fresh_install.py`)
- [x] Adopter ran attempt 05 on **`v0.4.1133+2`** (`main` @ `0d278366`)

---

## Attempt 03 intake (2026-06-09)

**FR-079 package accepted.** Key outcomes:

1. **F9/F17 (BLOCKER):** Third proof that `--mode fresh` deploys v1 catalog (`E05 FR Implementation` on disk); no v3.2 installer on `v0.4.13` / `main`.
2. **F10–F14 (DOC + CODE backlog):** Migration-test-bed sequence, orchestrator `--skip-kanban` / `use_kanban: false`, legacy `KB/` vs `docs/kanban/` terminology.
3. **Positive:** Option A + manual 4-step sequence achieved dual-tree without orchestrator overwriting legacy PM.

### Upstream backlog (prioritized)

| Priority | ID | Action |
|----------|-----|--------|
| P0 | F9/F17 | ✅ **CLOSED** @ [T27](T27-kanban-v32-package-rewrite-installer-f9-f17.md) **v0.6.9.27+2** — attempt 05 fingerprint PASS |
| P1 | F10 | `install_greenfield_path.py`: `--skip-kanban` or honor `use_kanban: false` |
| P1 | F18 | ✅ **CLOSED** @ [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) **v0.6.9.28+2** |
| P1 | F19 | ✅ **CLOSED** @ [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) **v0.6.9.29+2** |
| P2 | F21 | ✅ **CLOSED** @ [T30](T30-kanban-installer-log-epic-path-padding-br107.md) **v0.6.9.30+2** |
| P1 | F20 | Project-aware `version_file` default (open; workaround exists) |
| P1 | F12–F14 | Document migration-test-bed profile (RW defer → legacy restore → kanban → RW mode C) |
| P2 | F11/F16 | Post-install deferred-Kanban hint; clarify consumer layout vs v3.2 spec |
| P2 | BR-086 | Sign-off pattern padding (attempts 03–04: NOT READY — see F18) |

---

## Notes — task doc vs version `0.6.9.25`

**E06:S09:T25** task file **exists**:

`docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md`

RW builds **+2** and **+3** on T25 were **follow-on doc releases** on the closed triage task. `validate_branch_context` warns “task document not found” because `locate_task_doc_for_version()` still searches legacy `epics/Epic-6/` paths, not `epics/epic-06/story-09-*/`. `validate_version_bump --requested` **does** find T25 via lowercase patterns.

**Future RW** for ongoing SBL install work should anchor **E06:S09:T26** (this task).

---

## Task checklist (host story)

See [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md) checklist row for E06:S09:T26.
