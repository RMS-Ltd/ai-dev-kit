---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-062 - RW Step 7 leaves completed tasks on in-progress kboard

**Status:** COMPLETE — wired as Bucket-D5 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Created:** 2026-04-07  
**Last updated:** 2026-04-27 — wired as Bucket-D5 predecessor of FR-092 (active row hygiene consolidation). Original closure: 2026-04-10 — scope expanded and fixed via `E2:S01:T11`: active kboard MoSCOW cleanup now applies to both `kanban_init` and full RW Step 7 mode; category 4 edge tests include full-mode regression.  
**Version:** v0.2.1.11+2  
**Code:** BR-062  
**Implementing Task:** [E2:S01:T11](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md)

> **Predecessor of FR-092 (2026-04-27):** BR-062 fixed completed-row leak in RW Step 7 board hygiene. FR-092 consolidates active-row hygiene under one sub-program (BR-042 / BR-062 / FR-040 / FR-076). BR-062 remains valid as historical predecessor; the consolidation supersedes BR-042 (closed as duplicate of FR-090).

---

## Problem Statement

RW Step 7 Kanban updates did not consistently enforce in-progress board hygiene for completed tasks. Originally observed in `RW -k` (`kanban_init` mode), the same failure pattern was later observed in normal full RW Step 7 runs: completed tasks remained listed under "MoSCOW Prioritized In-Progress Tasks" in `kboard.md`.

## Observed Behavior

- After `RW -k E2:S01:T09`, `E2:S01:T09` remained in `kboard.md` under "MoSCOW Prioritized In-Progress Tasks".
- After full RW runs (non-`-k`), completed tasks (for example `E2:S01:T12`, `E6:S07:T111`) also remained on active in-progress MoSCOW sections.
- The row still carried stale phrasing and formatting artifacts while the canonical docs were already closed out.
- This creates contradictory project state across Kanban docs.

## Expected Behavior

- When a task is completed, the in-progress MoSCoW board should be cleaned accordingly (remove or transition entry) during any RW Step 7 invocation.
- Neither `kanban_init` nor full RW mode should leave stale completed rows on the active in-progress board.

## Impact

- Misleading work-in-progress visibility for planning and triage.
- Reduced trust in RW/kanban automation due to cross-document inconsistency.
- Extra manual cleanup burden after release operations.

## Reproduction

1. Ensure a task is closed out in task/story/BR docs.
2. Run `RW -k <task-id>` and allow Step 7 Kanban update (`kanban_init` mode).
3. Inspect `docs/project-management/kanban/kboard.md`.
4. Observe completed task row still present in in-progress MoSCoW list.

## Suspected Root Cause

- `update_kanban_docs.py` only pruned stale completed rows in `kanban_init` mode and did not enforce active-list cleanup in full RW mode.
- This allowed COMPLETE rows to persist in active MoSCoW sections despite task/FR/BR closure.

## Proposed Resolution

1. Enforce active-list cleanup in Step 7 for all modes (`kanban_init` and full): prune COMPLETE rows from active kboard MoSCoW sections.
2. Keep existing metadata and timestamp normalization behavior intact.
3. Add regression tests for full-mode cleanup in addition to existing `kanban_init` coverage.

## Related

- `docs/project-management/kanban/kboard.md`
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py`
- `BR-060`
