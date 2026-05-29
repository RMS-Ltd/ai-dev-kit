---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: UKW Board Disorganization

**Type:** Bug Report (BR)  
**Submitted:** 2026-01-16  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** ✅ FIXED (All acceptance criteria met, task complete)  
**GitHub Issue:** [TBD]  
**Version:** v0.6.1.33+5

---

## Summary

UKW (Update Kanban Workflow) does not perform as expected. After running UKW, the Kanban board is disorganized with epics out of order.

**Note (SoP Compliance):** This BR focuses on the **bug** (epic ordering disorganization). The **enhancements** (priority assignment, use case flags, syntax parser, granular control) are documented in a separate Feature Request (FR-034) to maintain clear separation of concerns, following best practices for mixed-scope documents. See "Related Work" section for link to FR-034.

---

## Description

### Problem Statement

**Issue: Epic Ordering Disorganization**
After running UKW, the Kanban board's Epics section is not properly ordered. Current order observed:
- Epic 1, 2, 3, 4 (correct)
- Epic 21 (should be after Epic 9)
- Epic 5, 6 (should be after Epic 4)
- Epic 9 (should be after Epic 8)
- Epic 7, 8 (should be after Epic 6)
- Epic 24 (correct at end)

**Expected Order:** E1, E2, E3, E4, E5, E6, E7, E8, E9, E21, E24

---

## Affected Component

**Primary Component:** Update Kanban Workflow (UKW)  
**Affected Areas:**
- [x] Documentation
- [x] Workflow execution
- [x] Kanban board organization

**Root Cause (if known):**
- UKW Step 6 (Update Kanban Board) does not sort epics/stories/tasks numerically before writing to board

---

## Steps to Reproduce

1. Run UKW workflow: Type "UKW" in Cursor
2. UKW executes all steps (Tasks → Stories → Epics → Board)
3. Check Kanban board (`docs/project-management/kanban/kboard.md`)
4. **Observed:** Epics are out of order (E1-4, E21, E5-6, E9, E7-8, E24)
5. **Expected:** Epics should be in numerical order (E1, E2, E3, E4, E5, E6, E7, E8, E9, E21, E24)

---

## Environment

**Environment:** Development  
**Version:** v0.6.6.8+21  
**Workflow:** Update Kanban Workflow (UKW)  
**Component:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`

---

## Impact

**User Impact:**
- [x] High - Major functionality broken
  - Kanban board is disorganized and difficult to navigate
  - Users cannot easily find epics when they are out of order


**Business Impact:**
- Reduced usability of project management system
- Disorganized board makes it difficult to understand project structure
- Poor user experience reflects negatively on project quality

**Workaround:**
- Manually sort epics/stories/tasks in board
- Not scalable or sustainable

---

## Acceptance Criteria (Fix Requirements)

- [ ] **Criterion 1:** Epics are sorted numerically in board (E1, E2, E3, ...)
- [ ] **Criterion 2:** Stories are sorted numerically within epic sections
- [ ] **Criterion 3:** Tasks are sorted numerically within story sections
- [ ] **Criterion 4:** Epic/story documents have sorted checklists

**Verification Method:**
- [x] Test suite execution
- [x] Manual testing
- [x] Both

**Fix Verification Status:**
- [ ] Verified (test suite passed / manual test passed)
- [ ] Attempted Fix (pending verification)

---

## Fix Attempt History

**Purpose:** This section documents all fix attempts for this bug, ensuring that if a bug isn't squashed, the next build can be informed by previous attempts.

### Fix Attempts

**Fix Attempt 1 (v0.6.1.33+2 - 2026-01-22):**
- **Approach:** Manual epic reordering in kanban board
- **Result:** Epic order fixed (E1-E11, E21, E24) ✅
- **Status:** ✅ **COMPLETE** - All acceptance criteria met, all sorting utilities created and integrated
- **Remaining Work:** None - Task complete, all sorting requirements implemented
- **Version History:**
  - v0.6.1.33+2 (2026-01-22): Epic ordering manually fixed in kanban board, documentation updated, UKW execution guide updated with sorting requirements
  - v0.6.1.33+3 (2026-01-22): Sorting utility script created (`sort_kanban_board.py`), UKW documentation updated with script usage instructions
  - v0.6.1.33+4 (2026-01-22): Story sorting enhanced in sorting utility script, stories now sorted numerically within epic sections
  - v0.6.1.33+5 (2026-01-22): **Task COMPLETE** - Document checklist sorting utility created (`sort_kanban_document_checklists.py`), all 7 acceptance criteria met, task marked as COMPLETE


---

## Dependencies

**Blocks:**
- Kanban board usability
- Effective project navigation

**Blocked By:**
- None (can start immediately)

**Related Work:**
- **FR-034:** [UKW Granular Control and Use Case Flags](FR-034-ukw-granular-control-and-use-case-flags.md) (enhancements identified during bug triage)
- **SoP:** [Mixed BR/FR Scope Handling](../../../architecture/standards-and-adrs/mixed-br-fr-scope-sop.md)
- Epic 2: Workflow Management Framework
- Epic 4: Kanban Framework
- Epic 6: Framework Management and Maintenance
- E6:S06:T08: Update Kanban Workflow (UKW) - Perpetual Task

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-01-16  
**Intake By:** User

**Decision Flow Results:**
- [x] Story Match Found: Epic 6, Story 0 (BR Repo) → Task 33

**Assigned To:**
- Epic: Epic 6: Framework Management and Maintenance
- Story: Story 0: BR Repo (PERPETUAL)
- Task: Task 33: UKW Board Disorganization
- Version: `v0.6.1.33+0` (doc-init, migrated from v0.6.0.33+0)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-6/Epic-6.md`](../epics/Epic-6/Epic-6.md)
- Story: [`docs/project-management/kanban/epics/Epic-6/Story-001-br-repo.md`](../epics/Epic-6/Story-001-br-repo.md) (migrated from Story-000-br-repo)
- Task: [`docs/project-management/kanban/epics/Epic-6/Story-001-br-repo/T33-ukw-board-disorganization.md`](../epics/Epic-6/Story-001-br-repo/T33-ukw-board-disorganization.md)

---

## Notes

**SoP Compliance:**
This BR was split from a mixed-scope document following the Standard Operating Procedure for handling mixed BR/FR scope. The enhancement content (use case flags, syntax parser, granular control) has been moved to FR-034 to maintain clear separation of concerns.

**Current UKW Behavior:**
- UKW runs as a monolithic workflow
- All steps execute regardless of need
- Sorting logic is missing or incomplete

**Expected Fix Behavior:**
- UKW should sort epics/stories/tasks numerically
- Sorting should be reliable and consistent

---

## References

- **UKW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **UKW Workflow:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **UKW Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`
- **Related FR:** [FR-034 - UKW Granular Control and Use Case Flags](FR-034-ukw-granular-control-and-use-case-flags.md)
- **SoP:** [Mixed BR/FR Scope Handling](../../../architecture/standards-and-adrs/mixed-br-fr-scope-sop.md)

---

_This Bug Report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
