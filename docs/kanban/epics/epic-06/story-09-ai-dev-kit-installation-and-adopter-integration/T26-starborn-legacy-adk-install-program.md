---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 26: Starborn Legacy ADK install program

**Task ID:** E06:S09:T26  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-09  
**Last updated:** 2026-06-24 (attempt **11** guided KMA PASS — AC21 intake @ maintainer mirror)  
**Version:** v0.6.9.26+4  
**Version Anchor:** v0.6.9.26+4  
**Code:** E06S09T26

**Predecessor (closed):** [E06:S09:T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) — UXR-025 triage + F4/F5 fixes @ **v0.6.9.25+3**

**Related:** [UXR-025](../../../fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) · [FR-081](../../../fbu/FR-081-brownfield-modular-adopter-integration.md) · [FR-080](../../../fbu/FR-080-greenfield-installation-process.md) · [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) · [FR-132](../../../fbu/FR-132-kanban-v4-three-tier-catalogue.md) · [FR-133](../../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) · [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [Issue #51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) · [Issue #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) · [Issue #85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [SBL attempt 09 replay](../../../../knowledge/analysis/projects/sbl-attempt-09-kanban-v4-replay.md) · [T36](T36-adopter-path-selector-install-rc-uxr029.md) · [attempt-10 index](../../../../../../adk-install-into-sbl/attempt-10/README.md) · [attempt-11 / TSP](../../../../../../adk-install-into-sbl/attempt-11/README.md)

---

## Summary

**Ongoing maintainer task** to manage AI Dev Kit installation into **Starborn Legacy (SBL)**: run and record install attempts, ingest adopter feedback, drive upstream ADK fixes/docs, and converge on a viable integration path (RW-only greenfield, brownfield per FR-081, or hybrid) without replacing SBL’s legacy **E/S/T** PM unless explicitly decided.

**Programme closure (2026-06-16):** Ten attempts validated the install path. **Arm B** selective adoption (attempts **9–10**) is the adopted SBL model: greenfield shell + kit-owned KMA + Install RC PASS + SQLite + first domain RW. SBL proceeds with **domain development** on `dev`; maintainer programme **Phase 2** = Arm A recon (fynd.deals, Confidentia). See [attempt-10 index](../../../../../../adk-install-into-sbl/attempt-10/README.md).

**Attempt 06 status (2026-06-11):** SBL **attempt 06** FR-079 package **accepted** with **adopter sign-off final** (`package_status: final`, `final_signoff` @ `20260611T094319Z` — **7 READY / 1 SKIP / 0 NOT READY**). Pin **`v0.4.1140+2`** (`256259fb2`). **AC13–AC15 PASS**; full ADK greenfield + agentic migration (72 stories). Intake filed: **[FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)** / [T31](T31-agentic-kanban-migration-agent-fr127.md) (**F22**) · **[BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md)** / [T32](T32-detect-structure-zero-padded-epic-br108.md) (**F23**).

---

## Input

- [T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) closure @ **v0.6.9.25+3** and [attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) (failed adopter intent)
- [Triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) findings **F8**, **F9**
- [UXR-025](../../../fbu/UXR-025-starborn-legacy-greenfield-install-diary.md) (resolved; ongoing SBL install feedback)
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
- Maintain **maintainer indexes and mirrored packages** under `adk-install-into-sbl/` per [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) and [ADR-026](../../../../architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md) (SBL `dev` reverts to `pre-adk-install` — [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)).
- Respond to **SBL feedback** via [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) hygiene.
- File or implement upstream reactions (INSTALL docs, orchestrator, installer catalog F9, validator path discovery).
- Update [triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) for new findings.

### Out of scope

- Replacing SBL Flutter app delivery or unrelated SBL product work.
- Forcing ADK template kanban adoption without explicit adopter decision.
- Re-implementing fixes already delivered under [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) / [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) / [T30](T30-kanban-installer-log-epic-path-padding-br107.md) (sign-off padding, non-interactive CHANGELOG scaffold, kanban log padding).

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
- [x] **AC9:** Attempt 05 executed on pin **`v0.4.1133+2`** (`main` @ `0d278366`); F17 **RESOLVED**; F18/F19/F21 filed as [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) / [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) / [T30](T30-kanban-installer-log-epic-path-padding-br107.md).
- [x] **AC10:** [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) **COMPLETE** @ **v0.6.9.28+2** — BR-105 / **F18** sign-off contract accepts `{story:02d}` / `T{task}` on v3.2 fresh install.
- [x] **AC11:** [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) **COMPLETE** @ **v0.6.9.29+2** — BR-106 / **F19** non-interactive CHANGELOG scaffold (no EOF under `--non-interactive`).
- [x] **AC12:** [T30](T30-kanban-installer-log-epic-path-padding-br107.md) **COMPLETE** @ **v0.6.9.30+2** — BR-107 / **F21** install log lines use padded epic paths matching on-disk layout.
- [x] **AC13:** SBL **attempt 06** replay on ADK **`v0.4.1140+2`** (`256259fb2`) confirms attempt-05 findings closed in adopter environment — sign-off **ALL READY**; F19 non-interactive RW clean; F21 padded kanban logs @ **2026-06-11**.
- [x] **AC14:** Full ADK greenfield install on SBL — workflows, frameworks, `rw-config.yaml`, `src/starborn_legacy/version.py`, Obsidian + Docusaurus surfaces @ attempt 06.
- [x] **AC15:** Legacy E/S/T → ADK v3.2 migration exercise — 19 legacy epics → 10 canonical + 8 domain epics; 72 stories migrated; legacy `KB/PM_and_Portfolio/` preserved @ attempt 06 (agentic method; migration tools **F22** inadequate).
- [x] **AC16:** FR-079 attempt 06 package **accepted** — adopter sign-off final @ 2026-06-11; F22/F23 filed as FR-127/T31 and BR-108/T32.
- [x] **AC17:** Attempt 09 ingested — PRIMARY synthesis → [T36](T36-adopter-path-selector-install-rc-uxr029.md) / [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) / [ADR-030](../../../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md); Install RC ~50% FAIL documented.
- [x] **AC18:** Attempt 10 Arm B replay — Install RC strict **PASS**; **0** ad-hoc KMA scripts; SQLite before first RW @ pin **`v0.4.1171`** (`448a79e1`).
- [x] **AC19:** FR-079 attempt 10 package **accepted** — adopter sign-off final @ 2026-06-15; [attempt-10 index](../../../../../../adk-install-into-sbl/attempt-10/README.md).
- [x] **AC20:** SBL operational — first domain RW (`E02:S02:T01` · `v0.2.2.1+1`) + post-install UKW (`E02:S16:T02` · `v0.2.16.2+1`) on SBL `dev`.
- [x] **AC21:** FR-079 attempt 11 package **accepted** — adopter sign-off final @ 2026-06-24; guided KMA **93.99%**; [attempt-11 index](../../../../../../adk-install-into-sbl/attempt-11/README.md); filed [BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md)/[T16](../../../epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md), [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md)/[T08](../../../epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md), [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)/[T40](T40-greenfield-orchestrator-install-rc-gaps-br112.md); [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md) adopter replay validated.

---

## Attempt log

| # | ADK pin | Outcome | Artifact |
|---|---------|---------|----------|
| 1 | `v0.4.1063` tarball | Closed — UXR-025 intake; F4/F5 failures | [Diary](../../../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md) |
| 2 | `main` @ `97ff2834` | **Failed intent** — orchestrator OK; wrong kanban | [Attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) |
| 3 | `v0.4.13` (`0.4.1098+1`) | **Partial** — dual kanban OK; **F17** v1 catalog blocks v3.2 migration test | [Attempt 03](../../../../../../adk-install-into-sbl/attempt-03/README.md) |
| 4 | `v0.4.1131` tarball | **BLOCKER unchanged** — F17 **fourth proof**; RW baseline + dual-kanban PASS; BR-086 NOT READY; F18–F20 new | [attempt-04 synopsis](../../../../../../adk-install-into-sbl/README.md) |
| 5 | `main` @ `0d278366` (`v0.4.1133+2`) | **SUCCESS (upstream pending → closed)** — v3.2 kanban PASS; dual-tree PASS; F18–F21 upstream **shipped** T28–T30 @ **v0.6.9.28+2**–**v0.6.9.30+2** | [Attempt 05](../../../../../../adk-install-into-sbl/attempt-05/feedback-package/README.md) |
| 6 | `v0.4.1140+2` → `256259fb2` | **SUCCESS** — adopter sign-off final; AC13–AC16; FR-079 accepted; F22→[FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md)/[T31](T31-agentic-kanban-migration-agent-fr127.md); F23→[BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md)/[T32](T32-detect-structure-zero-padded-epic-br108.md) | [Attempt 06 index](../../../../../../adk-install-into-sbl/attempt-06/README.md) |
| 7 | `v0.4.1161` | **Partial PASS** — greenfield install; sign-off friction | Not git-mirrored |
| 8 | `0d0e5ab3` | **FAIL** — in-place legacy migration abandoned | [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) |
| 9 | `v0.4.1164` @ `7a08a906` | **Arm B** — KMA PASS; Install RC ~50% FAIL; PRIMARY synthesis → [T36](T36-adopter-path-selector-install-rc-uxr029.md) | [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) · [Attempt 09 index](../../../../../../adk-install-into-sbl/attempt-09/README.md) · [Synthesis article](../../../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md) |
| 10 | `v0.4.1171` @ `448a79e1` | **Arm B PASS** — Install RC strict PASS; 0 ad-hoc KMA; first domain RW + UKW; FR-079 **final**; programme **Phase 1** closed | [Attempt 10 index](../../../../../../adk-install-into-sbl/attempt-10/README.md) |
| 11 | `v0.4.1171` @ `37a607a3` | **Arm B guided KMA PASS** — 93.99% structural score; Install RC strict PASS (recovery); FR-079 **final**; bootstrap E02:S02 complete | [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) · [Attempt 11 index](../../../../../../adk-install-into-sbl/attempt-11/README.md) |

> **Path convention:** `adk-install-into-sbl/attempt-{NN}/` — see [adk-install-into-sbl/README.md](../../../../../../adk-install-into-sbl/README.md).

---

## Attempt 05 intake (2026-06-10)

**FR-079 package accepted** — ADK mirror: [attempt-05/feedback-package/](../../../../../../adk-install-into-sbl/attempt-05/feedback-package/README.md).

### Outcome

| Result | Detail |
|--------|--------|
| **F17 (was BLOCKER)** | **RESOLVED** — Epic 5 on disk is **Project Architecture** (v3.2); no standalone FR Implementation epic |
| **Dual kanban test bed** | **PASS** — legacy `KB/PM_and_Portfolio/` + ADK `docs/kanban/` coexist; rollback retained `KB/` + `logs/` |
| **Sign-off** | **PASS** @ **v0.6.9.28+2** — F18/BR-105 contract alignment shipped |
| **F19** | **CLOSED** @ **v0.6.9.29+2** — [BR-106](../../../fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) / [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) |
| **F20** | Mitigated with workaround (pre-created `version_file` + config) |
| **F21** | **CLOSED** @ **v0.6.9.30+2** — [BR-107](../../../fbu/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) / [T30](T30-kanban-installer-log-epic-path-padding-br107.md) |

### Upstream filed → closed (ai-dev-kit)

| Finding | BR | Task | Release | Status |
|---------|-----|------|---------|--------|
| F18 | [BR-105](../../../fbu/BR-105-v32-fresh-install-signoff-story-padding-mismatch.md) | [E06:S09:T28](T28-v32-fresh-install-signoff-story-padding-br105.md) | **v0.6.9.28+2** / SemVer **v0.4.1138+2** | ✅ COMPLETE |
| F19 | [BR-106](../../../fbu/BR-106-rw-install-non-interactive-changelog-prompt-eof.md) | [E06:S09:T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) | **v0.6.9.29+2** / SemVer **v0.4.1139+2** | ✅ COMPLETE |
| F21 | [BR-107](../../../fbu/BR-107-kanban-installer-log-epic-path-padding-mismatch.md) | [E06:S09:T30](T30-kanban-installer-log-epic-path-padding-br107.md) | **v0.6.9.30+2** / SemVer **v0.4.1140+2** | ✅ COMPLETE |

**Recommended adopter pin for attempt 06 replay:** **`v0.4.1140+2`** (includes all three fixes).

---

## Upstream closure wave — T28–T30 (2026-06-10)

Child tasks under this program closed the attempt-05 residual backlog:

| Task | Finding | What shipped |
|------|---------|--------------|
| [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) | **F18** / BR-105 | Sign-off contract aligned with UXR-014 `{story:02d}` / `T{task}` on v3.2 fresh install; BR-086 READY in automated replay |
| [T29](T29-rw-install-non-interactive-changelog-prompt-br106.md) | **F19** / BR-106 | `install_release_workflow.py` respects `--non-interactive` for CHANGELOG scaffold (extends T19 `version_file` path) |
| [T30](T30-kanban-installer-log-epic-path-padding-br107.md) | **F21** / BR-107 | `migrate_structure.py` success/dry-run logs use `kanban_paths` padded segments (`epic-01` not `epic-1`) |

**Verification gap:** Automated tests pass in ai-dev-kit; **SBL attempt 06** is the adopter-side confirmation gate (AC13).

---

## Attempt 06 intake (2026-06-11)

**FR-079 package accepted** — canonical root: `adk-install-into-sbl/attempt-06/` ([maintainer index](../../../../../../adk-install-into-sbl/attempt-06/README.md)). **Adopter sign-off:** `package_status: final` · `finalized_at: 2026-06-11T09:40:00Z` · final sign-off transcript `20260611T094319Z-final-signoff.txt` (**7 READY / 1 SKIP / 0 NOT READY**).

### Outcome

| Result | Detail |
|--------|--------|
| **AC13 (F17/F18/F19/F21)** | **ALL PASS** — v3.2 catalog; sign-off **7 READY / 1 SKIP / 0 NOT READY**; `--non-interactive` RW without EOF; kanban logs show `epic-01` matching disk |
| **Dual kanban** | **PASS** — `KB/PM_and_Portfolio/` (107 files) preserved alongside `docs/kanban/` |
| **Full ADK install** | **PASS** — 15 workflow YAMLs, workflow-mgt + kanban + numbering-versioning + doc-lifecycle + debug-path + code-quality scripts |
| **Doc surfaces** | Obsidian personal profile (`docs/maintainer/OBSIDIAN-QUICKSTART.md`); Docusaurus `portal/` built OK |
| **Versioning** | `src/starborn_legacy/version.py` + `semver-registry.yaml` + `rw-config.yaml` |
| **Legacy migration** | **PASS (agentic)** — 19 legacy epics → 10 canonical (E01–E10) + 8 domain (E21–E28); **72 stories** migrated |
| **Migration tools** | **FAIL** — `detect→analyze→migrate` detected **0/80+** stories; semantic matcher useless for domain projects → **F22** |
| **F23** | `detect_existing_structure.py` — `Epic-01.md` zero-padding bug (`int('01')` → epic-1 mismatch) |

### New findings (attempt 06)

| ID | Finding | Disposition |
|----|---------|-------------|
| F22 | Kanban migration tool pipeline inadequate for domain-specific adopters; agentic approach migrated 72 stories vs 0 | **FILED** → [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) / [T31](T31-agentic-kanban-migration-agent-fr127.md) |
| F23 | Zero-padded legacy epic filenames not recognised by `detect_existing_structure.py` | **FILED** → [BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) / [T32](T32-detect-structure-zero-padded-epic-br108.md) |

See [kanban-migration-experiment-report](../../../../../../adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md) for full comparison.

### Key artifacts (attempt 06)

| Artifact | Path |
|----------|------|
| FB cover | [SUBMISSION.md](../../../../../../adk-install-into-sbl/attempt-06/feedback-package/README.md) |
| Migration report | [kanban-migration-experiment-report.md](../../../../../../adk-install-into-sbl/attempt-06/feedback-package/kanban-migration-experiment-report.md) |
| Kboard template | [kboard-template-v3dot2.md](../../../../../../adk-install-into-sbl/attempt-06/feedback-package/kboard-template-v3dot2.md) |
| Kboard example | [kboard-populated-example.md](../../../../../../adk-install-into-sbl/attempt-06/feedback-package/kboard-populated-example.md) |

---

## Attempt 11 intake (2026-06-24)

**FR-079 package accepted** — ADK mirror: [attempt-11/](../../../../../../adk-install-into-sbl/attempt-11/README.md). **Adopter sign-off:** `package_status: final` · `final_signoff_at_utc: 2026-06-24T20:00:00Z` · SBL `dev` @ `37a607a3` · `main` @ `eb5f3f52`.

### Outcome

| Result | Detail |
|--------|--------|
| **Guided KMA** | **93.99%** structural score (377 tasks); blind ~62% → guided delta validated [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md) |
| **Install RC strict** | **PASS** (post adopter recovery); orchestrator exit **1** → [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) |
| **Bootstrap E02:S02** | **COMPLETE** (T02–T07); RW mode C wired |
| **Sign-off** | **7 READY** |

### New findings filed (maintainer intake)

| FB | Disposition | Task |
|----|-------------|------|
| SemVer BUILD on public surface | [BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md) | [E03:S02:T16](../../../epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) |
| Docs profile Docusaurus default | [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md) | [E05:S08:T08](../../../epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md) |
| Orchestrator / Install RC gaps | [BR-112](../../../fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md) | [E06:S09:T40](T40-greenfield-orchestrator-install-rc-gaps-br112.md) |
| Guided KMA + TSP | [FR-136](../../../fbu/FR-136-guided-kma-target-structure-pack.md) (shipped) | [T39](T39-guided-kma-target-structure-pack-fr136.md) — adopter replay ✅ |

---

## Program status & next steps

| Priority | Item | Owner | Notes |
|----------|------|-------|-------|
| — | ~~SBL install program (T26)~~ | — | ✅ **COMPLETE** @ **v0.6.9.26+4** — attempt 10 Arm B PASS |
| **P0** | **BR-112** — orchestrator Install RC false failure | [T40](T40-greenfield-orchestrator-install-rc-gaps-br112.md) | Blocks FR-135 AC2/AC3 |
| **P1** | **BR-111** — SemVer public BUILD leak | [E03:S02:T16](../../../epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) | ADR-031 Option A gap |
| **P1** | **FR-141** — adopter docs profile default | [E05:S08:T08](../../../epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md) | FR-121 wave 4 |
| **P1** | Programme **Phase 2** — fynd.deals / Confidentia Arm A recon | Maintainer | Per [adopter-install-attempt-preflight](../../../../guides/adopter-install-attempt-preflight.md) |
| **P1** | **F22** — agentic migration agent | [T31](T31-agentic-kanban-migration-agent-fr127.md) | [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) |
| **P1** | **F23** — zero-padded epic detection | [T32](T32-detect-structure-zero-padded-epic-br108.md) | [BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) |
| **P2** | **F10** / **F20** — orchestrator ergonomics | Future installer task | Workarounds documented; not SBL blockers |
| **P2** | SBL domain development + normal RW/UKW | Adopter | Operational on `dev` post attempt 10; optional L2/L3 per [FR-133](../../../fbu/FR-133-kanban-migration-depth-rationalization-adopter-guide.md) |

**Programme milestone:** Attempt **10** closes the **SBL ADK install program** — Arm B validated end-to-end (RC PASS, kit-owned KMA, SQLite, first RW). Ten attempts total: v3.2 catalog arc (1–6), abandoned in-place migration (8), selective adoption proof (9–10). Maintainer focus shifts to **Arm A** control repos; SBL continues as operational adopter.

---

## Attempt 04 intake (2026-06-10)

**FR-079 package accepted** ([attempt-04/feedback-package/](../../../../../../adk-install-into-sbl/README.md) — SBL-local synopsis). Adopter re-tested on **`v0.4.1131`** expecting F17 resolution. **It did not resolve.**

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
- [x] Attempt-05 upstream residuals **F18–F21** closed via [T28](T28-v32-fresh-install-signoff-story-padding-br105.md)–[T30](T30-kanban-installer-log-epic-path-padding-br107.md) @ **v0.6.9.28+2**–**v0.6.9.30+2**
- [x] Adopter **attempt 06** replay on **`v0.4.1140+2`** (AC13) @ 2026-06-11

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
| P1 | F22 | ✅ **FILED** → [FR-127](../../../fbu/FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) / [T31](T31-agentic-kanban-migration-agent-fr127.md) |
| P1 | — | ✅ **FILED** (attempt 06 stamp churn) → [ADR-029](../../../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) / [FR-130](../../../fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) / [E02:S15:T14](../../epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md) |
| P1 | F23 | ✅ **FILED** → [BR-108](../../../fbu/BR-108-detect-existing-structure-zero-padded-epic-names.md) / [T32](T32-detect-structure-zero-padded-epic-br108.md) |
| P2 | F11/F16 | Post-install deferred-Kanban hint; clarify consumer layout vs v3.2 spec |
| P2 | BR-086 | ✅ **CLOSED** via [T28](T28-v32-fresh-install-signoff-story-padding-br105.md) **v0.6.9.28+2** (F18 contract alignment) |

---

## Notes — task doc vs version `0.6.9.25`

**E06:S09:T25** task file **exists**:

`docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md`

RW builds **+2** and **+3** on T25 were **follow-on doc releases** on the closed triage task. `validate_branch_context` warns “task document not found” because `locate_task_doc_for_version()` still searches legacy `epics/Epic-6/` paths, not `epics/epic-06/story-09-*/`. `validate_version_bump --requested` **does** find T25 via lowercase patterns.

**Future RW** for ongoing SBL install work should anchor **E06:S09:T26** (this task).

---

## Task checklist (host story)

See [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md) checklist row for E06:S09:T26.
