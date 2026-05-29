---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S01:T38 – UKW completed tasks not removed from kboard (BR-072)

**Task ID:** E6:S01:T38  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small–Medium  
**Created:** 2026-05-12  
**Last updated:** 2026-05-12 (AC5 confirmed — first live UKW execution removed E2:S16:T01 ×2 + E2:S15:T07 from kboard, archived to kanban-completed.md; all 7 ACs satisfied; task COMPLETE)  
**Code:** E6S01T38  
**Version Anchor:** v0.6.1.38+2

**Bug Report:** [BR-072 – UKW completed tasks not removed from kboard](../../../fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)  
**Publication Status:** NOT_APPLICABLE (single consolidated IPP — see [`IPP-E6S01T38-ukw-completed-task-removal-defect.md`](../../../../../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md))

---

## Input

- [BR-072](../../../fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md) — bug report with observed behaviour, reproduction steps, and acceptance criteria
- [IPP-E6S01T38](../../../../../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md) — consolidated planning artifact (specification, test design, implementation plan)
- UKW definition files: `cursorrules-ukw-trigger-section.md`, `update-kanban-workflow.yaml`, `agents/ukw/AGENTS.md`
- Known test fixtures on `kboard.md`: `E2:S16:T01` (COMPLETE × 2 sections), `E2:S15:T07` (COMPLETE × 1 section)

---

## Problem Statement

When UKW runs, completed tasks are not removed from `kboard.md`. They remain in MoSCOW sections with status updated to `COMPLETE` in place. A secondary issue allows the same task to appear in multiple sections simultaneously. The `kanban-completed.md` archive is not being written as part of the UKW board update path.

The UKW cursorrules definition does include "Remove completed tasks from 'In Progress' sections" at Step 6, but this instruction is subordinate to the MoSCOW classification step and is not being acted on.

---

## Deliverable

- Root cause identified and documented.
- UKW definition (cursorrules and/or workflow yaml) updated to make completed task removal an explicit, unambiguous step.
- Deduplication guard added to prevent a task appearing in more than one MoSCOW section.
- Confirmed that completed tasks are written to `kanban-completed.md` during UKW board update.

---

## Investigation Scope

1. Trace the UKW Step 6 execution path — determine whether the removal clause is being reached and ignored, or not reached at all.
2. Assess whether the removal instruction needs to be elevated to its own discrete step (rather than a sub-clause of MoSCOW classification).
3. Check whether `kanban-completed.md` is referenced anywhere in the UKW definition as a write target — if absent, that is a definition gap.
4. Assess the newly created `agents/ukw/AGENTS.md` — it should reflect any definition changes made here.

---

## Acceptance Criteria

- [x] **AC1:** Root cause identified and documented in this task.
- [x] **AC2:** UKW definition updated so completed task removal is a discrete, unambiguous step — not a sub-clause.
- [x] **AC3:** Explicit deduplication check added — a task must not appear in more than one MoSCOW section.
- [x] **AC4:** Completed tasks removed from `kboard.md` are written to `kanban-completed.md` in the same UKW run.
- [x] **AC5:** Known test fixtures (`E2:S16:T01` in Should Have, `E2:S15:T07` in Should Have, duplicate `E2:S16:T01` in Ongoing) confirmed removed by the fixed UKW (2026-05-12 first live execution).
- [x] **AC6:** `agents/ukw/AGENTS.md` reflects any definition changes.
- [x] **AC7:** BR-072, this task, Story 001 checklist, `kboard.md`, and `fbuboard.md` are bidirectionally wired.

---

## References

- [BR-072](../../../fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)
- [Story 001 – BR Repo](../Story-001-br-repo.md)
- [IPP-E6S01T38 – UKW completed task removal defect](../../../../../docs/implementation-cycles/IPP-E6S01T38-ukw-completed-task-removal-defect.md)
- [UKW cursorrules trigger definition](../../../../../packages/frameworks/workflow%20mgt/cursorrules-ukw-trigger-section.md)
- [UKW agents definition](../../../../../packages/frameworks/workflow%20mgt/agents/ukw/AGENTS.md)
