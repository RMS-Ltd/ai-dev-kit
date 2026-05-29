# Changelog: v0.6.7.101+31

**Release Date:** 2026-02-22 11:46:56 UTC  
**Epic:** Epic 6 (Framework Management)  
**Story:** Story 7 (ADK Implementation Analysis)  
**Task:** Task 101 (Update Kanban Workflow - Perpetual Task)  
**Build:** 31

---

## Summary

UKW (Update Kanban Workflow) execution: MoSCOW Prioritized In-Progress Tasks section updated in kanban board. Four completed tasks removed from Should Have section (E4:S16:T05, E4:S16:T06, E5:S01:T34, E5:S01:T37). Current IN PROGRESS/TODO tasks retained and ordered.

---

## Changes

### ✅ MoSCOW Section Update

- **Should Have (S) section updated:**
  - Removed completed tasks:
    - E4:S16:T05 – Create Gap Log and Risk Assessment - ✅ COMPLETE
    - E4:S16:T06 – Define RC sign-off criteria and remediation tasks - ✅ COMPLETE
    - E5:S01:T34 – UKW Granular Control and Use Case Flags - ✅ COMPLETE
    - E5:S01:T37 – Kanban Policy Task Prioritisation and Queue/Stack - ✅ COMPLETE
  - Remaining Should Have tasks (in-progress/TODO only):
    - E4:S14:T01, E4:S11:T07, E1:S06:T01, E8:S04:T01, E10:S01:T01, E11:S01:T01

### 📝 Kanban Board Updates

- **kanban-board.md:**
  - MoSCOW Should Have section: completed tasks removed
  - Last Updated: 2026-02-20 (UKW bookkeeping + MoSCOW update)
  - sort_kanban_board.py executed (13 epics sorted)

---

## Impact

- **Kanban Board:** MoSCOW Should Have section now lists only in-progress/TODO tasks
- **Visibility:** Completed tasks removed; current priorities clearly visible
- **UKW Workflow:** Step 6 MoSCOW prioritization (UKW -p) successfully executed

---

## Related

- **Perpetual Task:** [E2:S16:T03](../../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- **Previous Release:** [v0.6.7.101+30](CHANGELOG_v0.6.7.101+30.md)
- **UKW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
