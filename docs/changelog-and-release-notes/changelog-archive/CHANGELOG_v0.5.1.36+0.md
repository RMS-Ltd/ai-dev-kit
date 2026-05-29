# Changelog: v0.5.1.36+0

**Release Date:** 2026-01-22 15:00:00 UTC  
**Epic:** Epic 5 (Documentation Management and Maintenance)  
**Story:** Story 1 (FR Repo)  
**Task:** Task 36 (RW Update Kanban Board on Task Completion)  
**Build:** 0 (Doc-init)

---

## Summary

FR-036 and task E5:S01:T36 created to address missing Kanban board updates in RW Step 7. This is documentation work (doc-init) establishing the feature request and task for implementing automatic Kanban board updates when tasks are completed.

---

## Changes

### 📋 Documentation Created

- **FR-036:** Feature Request created for RW to update Kanban board on task completion
  - Location: `docs/project-management/kanban/fr-br/FR-036-rw-update-kanban-board-on-task-completion.md`
  - Status: PENDING
  - Priority: HIGH
  - Identifies gap: RW Step 7 updates Story/Epic docs but not Kanban board

- **Task E5:S01:T36:** Implementation task created
  - Location: `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md`
  - Status: TODO
  - Priority: HIGH
  - Traceability: FR-036 = E5:S01:T36

### 📝 Documentation Updates

- **FR-015 Updated:** Status updated to note Kanban board updates (FR-015:R06) are NOT implemented
- **Story E5:S01 Updated:** Task checklist updated with T36 entry
- **Story E5:S01 Updated:** Last updated and version fields updated

---

## Problem Statement

**Current State:**
- RW Step 7 (Auto-update Kanban Docs) updates Story and Epic documents ✅
- RW Step 7 does NOT update the main Kanban board (`kanban-board.md`) ❌
- The `update_kanban_docs.py` script resolves Kanban board path but does not update it
- Kanban board remains out of sync until UKW is run manually

**Impact:**
- Task completion status not reflected on board immediately after release
- Requires manual UKW runs to keep board in sync
- Reduces workflow reliability and user experience

---

## Solution (To Be Implemented in T36)

Enhance RW Step 7 to automatically update the Kanban board:
- Update epic/story status in board sections
- Update "Last updated" date and version in board metadata
- Update task completion markers in epic/story listings
- Detect story/epic completion and update status on board
- Add validation for board updates

---

## Related

- **FR-015:** Harden Kanban Docs Update in Release Workflow (partially implemented - board updates missing)
- **FR-036:** RW Update Kanban Board on Task Completion (this FR)
- **Task:** [E5:S01:T36](../../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md)
- **Story:** [E5:S01: FR Repo](../../project-management/kanban/epics/Epic-5/Story-001-fr-repo.md)
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
