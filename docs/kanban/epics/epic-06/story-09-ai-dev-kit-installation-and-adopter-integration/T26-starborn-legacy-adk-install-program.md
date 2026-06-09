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
**Last updated:** 2026-06-09 (v0.6.9.26+1 — RW E06:S09:T26 --art; task intake + AC6 validator fix)  
**Version:** v0.6.9.26+1  
**Version Anchor:** v0.6.9.26+1  
**Code:** E06S09T26

**Predecessor (closed):** [E06:S09:T25](T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md) — UXR-025 triage + F4/F5 fixes @ **v0.6.9.25+3**

**Related:** [UXR-025](../../../fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md) · [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) · [Triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) · [Attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md)

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

---

## Deliverable

1. **Attempt 3 plan** — documented path (RW-only vs brownfield), preflight checklist, success criteria for SBL.
2. **SBL feedback loop** — structured responses linked from attempt diaries.
3. **Upstream backlog** — INSTALL/orchestrator/doc items from F9 and attempt-2 closure notes.
4. **Validator hygiene** — `validate_branch_context` lowercase `epic-{nn}` task-doc discovery.

---

### In scope

- Plan and execute **attempt 3** (and follow-ons) with explicit install flags / path (RW-only, `--kanban-mode skip` when available, FR-081 brownfield).
- Maintain forensic artifacts under `adk-install-into-sbl/attempt-NN/` and maintainer analysis copies.
- Respond to **SBL feedback** via [FR-079](../../../fr-br/FR-079-install-feedback-submission-path-and-governance.md) hygiene.
- File or implement upstream reactions (INSTALL docs, orchestrator, installer catalog F9, validator path discovery).
- Update [triage matrix](../../../../knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md) for new findings.

### Out of scope

- Replacing SBL Flutter app delivery or unrelated SBL product work.
- Forcing ADK template kanban adoption without explicit adopter decision.
- Kanban v3.2 package migration waves (tracked separately; F9 **DEFER**).

---

## Acceptance criteria

- [ ] **AC1:** Attempt 3 executed or explicitly deferred with written rationale on this task doc.
- [ ] **AC2:** SBL legacy E/S/T remains operational PM unless adopter signs off on migration.
- [ ] **AC3:** No greenfield `--mode fresh` on SBL without explicit adopter opt-in.
- [ ] **AC4:** Each attempt has diary + transcripts (+ sign-off JSON when applicable) under `adk-install-into-sbl/`.
- [ ] **AC5:** New findings added to triage matrix with disposition (fix / doc / defer).
- [x] **AC6:** `validate_branch_context --strict` finds task doc for active E06:S09:T* releases (lowercase `epic-{nn}` / `story-{nn}-*` discovery in `locate_task_doc_for_version`).

---

## Attempt log

| # | ADK pin | Outcome | Artifact |
|---|---------|---------|----------|
| 1 | `v0.4.1063` tarball | Closed — UXR-025 intake; F4/F5 failures | [Diary](../../../../knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md) |
| 2 | `main` @ `97ff2834` | **Failed intent** — orchestrator OK; wrong kanban | [Attempt 02](../../../../../../adk-install-into-sbl/attempt-02/greenfield-install-diary.md) |
| 3 | TBD | Planned | — |

---

## Notes — task doc vs version `0.6.9.25`

**E06:S09:T25** task file **exists**:

`docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md`

RW builds **+2** and **+3** on T25 were **follow-on doc releases** on the closed triage task. `validate_branch_context` warns “task document not found” because `locate_task_doc_for_version()` still searches legacy `epics/Epic-6/` paths, not `epics/epic-06/story-09-*/`. `validate_version_bump --requested` **does** find T25 via lowercase patterns.

**Future RW** for ongoing SBL install work should anchor **E06:S09:T26** (this task).

---

## Task checklist (host story)

See [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md) checklist row for E06:S09:T26.
