---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T16:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 1, Task 36: RW Step 7 Board Update Bugs

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-01-22 (v0.6.1.36+1 – Bug report and task documentation release)  
**Started:** 2026-01-22  
**Completed:** 2026-01-22  
**Version:** v0.6.1.36+1  
**Code:** E6S01T36

**Repository Pattern:** BR-036 = E6:S01:T36 (abstract space: v0.6.1.36+0, fixed: v0.5.1.34+2)

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S01:T36`

---

## Scope

Fix critical bugs in RW Step 7 (Auto-update Kanban Docs) that prevent the Kanban board from being updated automatically. The bugs include story document path resolution failures, board path resolution failures, and missing MoSCOW section update functionality.

**Problem Statement:**
- RW Step 7 fails to find story documents (glob pattern issue)
- RW Step 7 fails to resolve board path (path construction issue)
- MoSCOW sections are not updated when tasks complete (missing functionality)
- Board remains out of sync with task completion status

**Solution:**
- Fix story document path resolution in `resolve_kanban_paths()`
- Fix board path resolution with proper absolute path handling
- Add MoSCOW section update functionality to `update_kanban_board()`
- Ensure all path resolution works correctly for all epic/story combinations

---

## Input

- **BR-036:** [`BR-036-rw-step-7-board-update-bugs.md`](../../../fr-br/BR-036-rw-step-7-board-update-bugs.md)
- **FR-040:** [`FR-040-rw-update-kanban-board-on-task-completion.md`](../../../fr-br/FR-040-rw-update-kanban-board-on-task-completion.md) (related feature)
- **E5:S01:T36:** [`../Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md`](../../Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md) (original implementation)
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`

---

## Deliverable

**Fixed RW Step 7 Script** that:
1. Correctly finds story documents using glob patterns
2. Correctly resolves board path
3. Updates MoSCOW sections when tasks are completed
4. Works reliably across all projects using the framework

---

## Acceptance Criteria

- [x] **Criterion 1:** Story document path resolution works correctly ✅
- [x] **Criterion 2:** Board path resolution works correctly ✅
- [x] **Criterion 3:** MoSCOW section updates work correctly ✅
- [x] **Criterion 4:** Completed tasks show as COMPLETE in MoSCOW sections ✅
- [x] **Criterion 5:** Board metadata (Last Updated, Version) updates correctly ✅
- [x] **Criterion 6:** Script runs successfully end-to-end ✅
- [x] **Criterion 7:** All bugs from BR-036 are fixed ✅

---

## Approach

### Step 1: Fix Story Document Path Resolution
- Analyze glob pattern construction issue
- Fix path resolution to use parent directory and filename separately
- Test with various epic/story combinations

### Step 2: Fix Board Path Resolution
- Analyze path construction and existence checking
- Fix absolute/relative path handling
- Ensure board path is resolved correctly

### Step 3: Add MoSCOW Section Updates
- Implement MoSCOW task pattern matching
- Add status update logic (TODO/IN PROGRESS → COMPLETE)
- Add version marker insertion
- Test with completed tasks

### Step 4: Validate Fixes
- Test script with various scenarios
- Verify all path resolutions work
- Verify MoSCOW updates work correctly
- Verify board updates are complete

---

## Dependencies

**Depends On:**
- FR-036/E5:S01:T36 implementation (original feature)
- RW Step 7 script infrastructure

**Blocks:**
- Accurate Kanban board status synchronization
- Automated board updates in RW

**Blocked By:**
- None

**Related Work:**
- **BR-036:** RW Step 7 Board Update Bugs (this bug report)
- **FR-040:** RW Update Kanban Board on Task Completion (original feature)
- **E5:S01:T36:** RW Update Kanban Board on Task Completion (original implementation)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.34+2)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update BR-036 with fix status

---

## Implementation Progress

### Bug Fix Complete (v0.5.1.34+2)

**Date:** 2026-01-22

**Completed:**
1. ✅ **Fixed Story Document Path Resolution:**
   - Corrected glob pattern to use parent directory and filename separately
   - Fixed absolute/relative path handling in `resolve_kanban_paths()`
   - Story documents now found correctly

2. ✅ **Fixed Board Path Resolution:**
   - Improved path construction and existence checking
   - Added proper absolute path resolution
   - Board path now resolved correctly

3. ✅ **Added MoSCOW Section Updates:**
   - Implemented MoSCOW task pattern matching with correct regex
   - Added status update logic (TODO/IN PROGRESS → COMPLETE)
   - Added version marker insertion
   - MoSCOW sections now update automatically

**Key Fixes:**
- Path resolution now works correctly for all epic/story combinations
- Board updates work automatically on every RW execution
- MoSCOW sections reflect task completion status immediately
- All bugs from BR-036 are resolved

---

## Notes

**Bug Discovery:**
- Bugs were discovered when RW was run after completing E5:S01:T34
- Board showed task as TODO even though it was COMPLETE
- Investigation revealed path resolution and MoSCOW update bugs

**Fix Strategy:**
- Fixed path resolution bugs first (blocking issues)
- Added MoSCOW update functionality (missing feature)
- Tested with actual RW execution to verify fixes

**Related:**
- This bug fix is part of the same release as the original feature (E5:S01:T34)
- Fixes ensure FR-036/E5:S01:T36 functionality works as intended

---

_This Task is part of Epic 6, Story 1: BR Repo. See [`Story-001-br-repo.md`](../Story-001-br-repo.md) for repository context._
