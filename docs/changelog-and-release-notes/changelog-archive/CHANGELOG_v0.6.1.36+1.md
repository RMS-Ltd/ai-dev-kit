# Changelog: v0.6.1.36+1

**Release Date:** 2026-01-22 16:11:29 UTC  
**Epic:** Epic 6: Framework Management and Maintenance  
**Story:** Story 1: BR Repo (PERPETUAL)  
**Task:** Task 36: RW Step 7 Board Update Bugs  
**Type:** Bug Report Documentation

---

## Summary

This release documents the bug report (BR-036) and associated task (E6:S01:T36) for RW Step 7 board update bugs. The bugs were discovered and fixed in v0.5.1.34+2, and this release creates the formal bug report and task documentation to track the issues and their resolution.

---

## Changes

### Bug Report Created

- **BR-036:** Created bug report documenting three critical bugs in RW Step 7 (Auto-update Kanban Docs):
  1. Story document path resolution failing (glob pattern issue)
  2. Board path resolution failing (path construction issue)
  3. MoSCOW section updates missing (missing functionality)

### Task Documentation Created

- **E6:S01:T36:** Created task document for RW Step 7 Board Update Bugs
  - Documents the problem statement, solution approach, and acceptance criteria
  - Links to BR-036 and related work (FR-036, E5:S01:T36)
  - Marks task as COMPLETE (bugs were fixed in v0.5.1.34+2)

### Documentation Updates

- **E6:S01 Story:** Added T36 to task checklist
- **Epic 6:** Updated story checklist entry and last updated field
- **BR-036:** Marked as FIXED ✅ (v0.5.1.34+2)

---

## Bug Details

### Bugs Fixed (in v0.5.1.34+2)

1. **Story Document Path Resolution:**
   - **Issue:** Script failed to find story documents using glob patterns
   - **Error:** "Story doc not found for Epic {epic}, Story {story}"
   - **Root Cause:** Incorrect path construction for absolute kanban_root in glob patterns
   - **Fix:** Corrected glob pattern to use parent directory and filename separately

2. **Board Path Resolution:**
   - **Issue:** Board path was not being resolved correctly
   - **Error:** "Kanban board path not found in resolved paths"
   - **Root Cause:** Path existence check failing due to path construction issues
   - **Fix:** Improved path construction and existence checking with proper absolute path resolution

3. **MoSCOW Section Updates:**
   - **Issue:** Completed tasks remained as TODO/IN PROGRESS in MoSCOW sections
   - **Root Cause:** MoSCOW update logic was not implemented (deferred to UKW)
   - **Fix:** Added MoSCOW section update functionality with correct regex patterns

---

## Related Work

- **BR-036:** [`BR-036-rw-step-7-board-update-bugs.md`](../../project-management/kanban/fr-br/BR-036-rw-step-7-board-update-bugs.md)
- **E6:S01:T36:** [`T36-rw-step-7-board-update-bugs.md`](../../project-management/kanban/epics/Epic-6/Story-001-br-repo/T36-rw-step-7-board-update-bugs.md)
- **FR-036:** [`FR-036-rw-update-kanban-board-on-task-completion.md`](../../project-management/kanban/fr-br/FR-036-rw-update-kanban-board-on-task-completion.md) (related feature)
- **E5:S01:T36:** [`T36-rw-update-kanban-board-on-task-completion.md`](../../project-management/kanban/epics/Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md) (original implementation)
- **Fix Version:** v0.5.1.34+2 (bug fixes applied)

---

## Impact

- **Documentation:** Bug report and task documentation created for tracking and reference
- **Traceability:** Complete traceability from bug discovery to fix to documentation
- **Knowledge Base:** Formal documentation of bugs and their resolution for future reference

---

## Notes

- This release documents bugs that were already fixed in v0.5.1.34+2
- The bug report (BR-036) is marked as FIXED ✅ with reference to the fix version
- The task (E6:S01:T36) is marked as COMPLETE with reference to the fix version
- This release follows the repository pattern: BR-036 = E6:S01:T36 (abstract space: v0.6.1.36+0, fixed: v0.5.1.34+2)

---

_This changelog follows the Keep a Changelog format. See [CHANGELOG.md](../../CHANGELOG.md) for the main changelog._
