---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-12T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-072: UKW not removing completed tasks from kboard

**Status:** REOPENED  
**Priority:** HIGH  
**Severity:** HIGH  
**Created:** 2026-05-12  
**Last updated:** 2026-05-16 (REOPENED — drift recurrence detected: E2:S07:T01, E2:S07:T05 showing as TODO on kboard despite COMPLETE status in story docs; UKW not catching inline status drift)  
**Version:** v0.6.1.38+3  
**Code:** BR-072

**Implementing Task:** [E6:S01:T38](../epics/Epic-6/Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md)

---

## Problem Statement

When the UKW runs, completed tasks are not removed from the MoSCOW priority sections of `kboard.md`. Instead, they remain in place with their status label updated to `COMPLETE`. The board accumulates completed tasks over time rather than maintaining an active-only view.

A secondary symptom is task duplication: a task can appear in multiple MoSCOW sections simultaneously (e.g. both "Should Have" and "Ongoing") if UKW adds it to a new section without checking whether it already exists elsewhere on the board.

---

## Expected Behavior

- Completed tasks are removed from all MoSCOW sections of `kboard.md` when UKW runs.
- Removed tasks are moved to `kanban-completed.md` as part of the same UKW execution.
- No task appears in more than one MoSCOW section at any time.

---

## Observed Behavior

- `E2:S16:T01` (COMPLETE) remains in the "Should Have" section.
- `E2:S15:T07` (COMPLETE) remains in the "Should Have" section.
- `E2:S16:T01` additionally appears in the "Ongoing" section — the same task in two sections simultaneously.
- UKW has run multiple times since these tasks completed without removing them.

---

## Reproduction

1. Mark a task as COMPLETE in its task document.
2. Run UKW.
3. Observe that the task remains in its MoSCOW section in `kboard.md` with status label updated to `COMPLETE` rather than being removed.
4. Run UKW again on a subsequent session.
5. Observe the completed task still present.

Known test fixtures currently on the board: `E2:S16:T01` and `E2:S15:T07` (intentionally retained for reproduction purposes).

**Recurrence (2026-05-16):**
- `E2:S07:T01` (COMPLETE v0.2.7.1+0) showing as `TODO` on `kboard.md` in Could Have section.
- `E2:S07:T05` (COMPLETE v0.2.7.5+1) showing as `TODO` on `kboard.md` in Could Have section.
- Both tasks confirmed COMPLETE in story doc (`Story-007-trigger-aware-release-workflow.md`) with inline status corrected from TODO → COMPLETE during drift audit.
- Root cause: UKW Step 6 reads task status from **task documents**, but `E2:S07:T01` and `E2:S07:T05` are **embedded inline in story doc** (no standalone task docs). UKW does not scan story docs for inline task status.
- **This reveals a broader gap:** UKW does not reconcile inline/embedded task statuses in story docs against kboard rows.

---

## Impact

- Board accuracy degrades over time — the MoSCOW list no longer reflects only active work.
- Completed tasks occupy prioritization attention and obscure genuinely in-progress items.
- Board duplication undermines trust in the UKW as a reliable synchronisation mechanism.
- The `kanban-completed.md` archive is not being kept current.

---

## Scope / Suspected Areas

- UKW Step 6 (board MoSCOW update) — the removal instruction exists in the cursorrules definition ("Remove completed tasks from 'In Progress' sections") but is not being executed.
- The instruction is buried within the MoSCOW classification step and may be insufficiently prominent relative to the classification work, causing the agent to focus on reclassification rather than removal.
- No explicit cross-section deduplication check exists in the UKW definition, allowing a task to accumulate in multiple sections across separate UKW runs.
- `kanban-completed.md` write step may be missing entirely from the UKW board update path.
- **UKW does not scan story docs for inline task statuses** — tasks embedded in story docs (e.g., E2:S07:T01-T08) have no standalone task doc, so UKW Step 3 (Update Task Documents) skips them entirely. This leaves kboard rows for inline tasks permanently stale unless manually corrected.

---

## Acceptance Criteria

- [x] **AC1:** Root cause identified — whether the removal instruction is being ignored, skipped, or absent from the effective UKW execution path.
- [x] **AC2:** UKW definition updated so that completed task removal from `kboard.md` is a discrete, unambiguous step — not a subordinate clause within the MoSCOW update step.
- [x] **AC3:** UKW definition includes an explicit deduplication check — a task must not appear in more than one MoSCOW section.
- [x] **AC4:** Completed tasks removed from `kboard.md` are written to `kanban-completed.md` in the same UKW run.
- [x] **AC5:** The known test fixtures (`E2:S16:T01` in Should Have, `E2:S15:T07` in Should Have, duplicate `E2:S16:T01` in Ongoing) are confirmed removed by the fixed UKW before BR-072 is closed.
- [x] **AC6:** BR-072, E6:S01:T38, Story 001 checklist, `kboard.md`, and `fbuboard.md` are bidirectionally wired.
- [ ] **AC7:** UKW detects and reconciles inline/embedded task statuses within story docs (not just standalone task docs) against kboard rows — or an explicit policy documents that inline tasks are out of scope for UKW with alternative governance.

---

## Related

- [Story 001 – BR Repo](../epics/Epic-6/Story-001-br-repo.md)
- [UKW cursorrules trigger definition](../../packages/frameworks/workflow%20mgt/cursorrules-ukw-trigger-section.md)
- [UKW workflow definition](../../packages/frameworks/workflow%20mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml)
- [BR-069](BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) — prior kboard accuracy defect
