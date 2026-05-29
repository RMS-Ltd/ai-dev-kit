---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-059: UKW MoSCOW Update Omits In-Progress Story Tasks (Incomplete Coverage)

**Bug ID:** BR-059  
**Task ID:** [E6:S07:T109](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md)  
**Priority:** HIGH  
**Severity:** MEDIUM (board SoT diverges from story checklist; planners lose visibility)  
**Status:** OPEN  
**Created:** 2026-03-30  
**Last updated:** 2026-03-31 — Implementing task **E6:S07:T109** filed  
**Classification:** UKW + Kanban board accuracy

---

## Bug Summary

A **comprehensive UKW** run promoted **E5:S09:T01** to the MoSCOW **Should** section but **did not add E5:S09:T02–T07**, even though **Story 009** lists all seven tasks as **TODO / IN PROGRESS** in its task checklist. Treating “one representative task per story” as sufficient is a **workflow failure**: the kanban board is expected to reflect **all active tasks** for an in-progress story unless explicitly deferred.

---

## Problem Description

### Observed behavior

- Story: [`Story-009-docusaurus-documentation-portal.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal.md) — checklist shows **E5:S09:T01–T07** (FR-065–FR-071), all still open.
- After UKW (2026-03-30), [`kboard.md`](../kboard.md) **Should** listed **only T01**.
- Stakeholder expectation: **every** E5:S09 task that is not complete should appear on the board (or be explicitly moved to **Won’t** / documented deferral with rationale).

### Expected behavior

- UKW Step 6 (MoSCOW) should either:
  1. **Enumerate all non-complete tasks** from the story’s task checklist for stories marked IN PROGRESS, **or**
  2. **Fail loudly** (agent summary + optional validator) when a story has N>1 open tasks but the board lists fewer than N without a documented exception.

### Concrete example

| Task    | FR     | On board after UKW (before fix) |
|---------|--------|----------------------------------|
| E5:S09:T01 | FR-065 | Yes |
| E5:S09:T02 | FR-066 | No |
| E5:S09:T03 | FR-067 | No |
| E5:S09:T04 | FR-068 | No |
| E5:S09:T05 | FR-069 | No |
| E5:S09:T06 | FR-070 | No |
| E5:S09:T07 | FR-071 | No |

---

## Impact

- **Planning:** Teams assume the MoSCOW board is complete; missing rows hide parallelizable work (e.g. docs path, CI, deploy).
- **UKW trust:** Partial updates read as “success” while coverage is incomplete (related pattern: [BR-042](BR-042-ukw-agent-board-cleanup-failure.md)).
- **Forensics:** Harder to correlate FR chain **FR-065–071** with visible board work.

---

## Proposed direction (investigation)

1. **Cursor rules / UKW guide:** State explicitly that for IN PROGRESS stories, **all open tasks** from the story checklist must appear in MoSCOW (or **Won’t** with reason), not a single “lead” task.
2. **Agent procedure:** UKW Step 6: diff story task checklist ↔ board rows for current epic/story scope; add missing rows in order **T01…T07**.
3. **Optional:** Lightweight script or checklist item: “Story S09 open task count == board Should rows for E5:S09 (± deferrals).”
4. **Regression:** Re-run UKW after fix on a story with multiple open tasks and confirm full enumeration.

---

## Related work

- **Implementing task:** [E6:S07:T109](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T109-br059-ukw-moscow-full-story-task-coverage.md)
- **Story:** [E5:S09 – Docusaurus Documentation Portal](../epics/Epic-5/Story-009-docusaurus-documentation-portal.md)  
- **Related BR:** [BR-042](BR-042-ukw-agent-board-cleanup-failure.md) (completed tasks left on board — opposite failure mode)  
- **Related BR:** [BR-034](BR-034-ukw-moscow-prioritization-missing.md)  
- **Perpetual UKW task:** [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)  

---

## Resolution / current status

- **OPEN** — Board manually corrected to list **E5:S09:T01–T07**; root cause (UKW agent/rules) still to be addressed under this BR.
