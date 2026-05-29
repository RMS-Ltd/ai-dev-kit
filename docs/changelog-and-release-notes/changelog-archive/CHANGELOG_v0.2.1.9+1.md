# Changelog v0.2.1.9+1

**Release Date:** 2026-04-02 17:24:57 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 9  
**Task doc:** [T09-rw-allow-in-progress-task-releases-br060.md](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md)  
**Associated BR:** [BR-060](../../../project-management/kanban/fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md) (traceability); [BR-061](../../../project-management/kanban/fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md) (filed — Step 1 / `version.py` alignment friction)

## Summary

**E2:S01:T09+1 (RW):** Kanban and docs: **BR-060** canonical implementing task under **Epic 2 / Story 001** (`T09`); **E2:S01** reopened; redirect stubs for legacy paths (**E6:S06:T60**, **E4:S19:T01**); **BR-061** filed (**CRITICAL**) — explicit `RW E:S:T` blocked when `version.py` epic ≠ branch epic until manual alignment. Internal version set to **0.2.1.9+1** on **`epic/2-harden-rw-reliability`** for branch safety validation.

## Changes

### Kanban / traceability

- Epic 2 Story 001: task **T09** doc; story reopened; Epic 2 checklist updated.
- Epic 4 Story 019: stub path for legacy **T01** filename → **E2:S01:T09**.
- Epic 6: **T60** stub; Story 006 BR-060 pointer.
- `kanban-board.md`, `kanban-structure.md`, `CHANGELOG_ARCHIVE` cross-links.
- `fr-br-uxr-board.md`: **BR-061** (CRITICAL).

### Versioning

- `src/fynd_deals/version.py`: **0.2.1.9+1** (E2:S01:T09).

## SemVer

- **Internal:** `v0.2.1.9+1`  
- **SemVer (task_touch):** `v0.4.621+1`

## Verification

- `validate_branch_context.py --strict` — pass (with task-doc path warning acceptable for non-standard Story folder layout).
- `validate_rw_task_intent.py --requested E2:S01:T09` — pass.
