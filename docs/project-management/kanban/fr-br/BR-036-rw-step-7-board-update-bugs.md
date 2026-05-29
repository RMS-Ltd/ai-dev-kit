---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T16:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: RW Step 7 Board Update Bugs

**Type:** Bug Report (BR)  
**Submitted:** 2026-01-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** FIXED (v0.5.1.34+2) — wired as Bucket-D4 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**GitHub Issue:** [TBD]  
**Version:** v0.5.1.34+2

> **Predecessor of FR-092 (2026-04-27):** BR-036 fixed RW Step 7 board update script bugs. FR-092 (Wave 4-5) extends the same area with corpus-canonical row transform invocation + Step-8 stage completeness enforcement. BR-036 remains valid as historical predecessor.

---

## Summary

RW Step 7 (Auto-update Kanban Docs) has critical bugs preventing the Kanban board from being updated automatically. The script fails to find story documents and board paths, and MoSCOW section updates are not implemented, causing the board to remain out of sync with task completion status.

---

## Description

### Problem Statement

**Issue: RW Step 7 Board Updates Don't Work**

Despite FR-040/E5:S01:T36 implementing board update functionality, the implementation has critical bugs that prevent it from working:

1. **Story Document Path Resolution Fails:**
   - Script fails to find story documents using glob patterns
   - Error: "Story doc not found for Epic \{epic\}, Story \{story\}"
   - Root cause: Incorrect path construction for absolute kanban_root in glob patterns

2. **Board Path Resolution Fails:**
   - Board path is not being resolved correctly
   - Script reports "Kanban board path not found in resolved paths"
   - Root cause: Path existence check failing due to path construction issues

3. **MoSCOW Section Updates Missing:**
   - Completed tasks remain as TODO/IN PROGRESS in MoSCOW sections
   - Board shows outdated task status even after releases
   - Root cause: MoSCOW update logic was not implemented (deferred to UKW)

**Expected Behavior:**
- RW Step 7 should find story documents correctly
- RW Step 7 should resolve board path correctly
- RW Step 7 should update MoSCOW sections when tasks are completed
- Board should automatically reflect task completion status after every release

**Observed Behavior:**
- Script fails with "Story doc not found" error
- Board path is not resolved
- MoSCOW sections are not updated
- Board remains out of sync, requiring manual updates

### When Does It Occur?

This bug occurs:
- **Every time RW executes** - Script fails to find story/board paths
- **When tasks are completed** - Board doesn't update to show COMPLETE status
- **After releases** - Board shows outdated TODO/IN PROGRESS status

### Who is Affected?

**Primary Affected:**
- Developers/agents using RW
- Project managers viewing Kanban board
- Framework maintainers

**Secondary Affected:**
- Framework users (workflow reliability)
- Documentation consumers (accurate Kanban status)
- CI/CD systems (workflow validation)

---

## Affected Component

**Component:** Release Workflow (RW) Step 7 - Auto-update Kanban Docs  
**Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`  
**Function:** `resolve_kanban_paths()`, `update_kanban_board()`

---

## Steps to Reproduce

1. Complete a task (e.g., E5:S01:T34)
2. Run Release Workflow (RW)
3. Observe RW Step 7 execution
4. Script fails with "Story doc not found" error
5. Board path is not resolved
6. Board is not updated
7. Check kboard.md - task still shows as TODO/IN PROGRESS

---

## Evidence

**Error Messages:**
```
🔍 Updating Kanban docs for v0.5.1.34+1 (E5:S1:T34)
❌ Story doc not found for Epic 5, Story 1
⚠️  Kanban board path not found in resolved paths (paths: ['story_doc'])
```

**Board State:**
- Line 30 in kboard.md shows: `**E5:S01:T34** – UKW Granular Control and Use Case Flags - TODO (HIGH priority, Last updated: 2026-01-16)`
- Task is actually COMPLETE (v0.5.1.34+1) but board shows TODO

---

## Root Cause Analysis

1. **Path Resolution Bug:**
   - `resolve_kanban_paths()` constructs absolute paths but glob() doesn't work with absolute paths
   - Pattern construction: `kanban_root / pattern` creates absolute path, but glob needs relative pattern
   - Fix: Use parent directory and filename separately for glob

2. **Board Path Resolution Bug:**
   - Path existence check fails due to incorrect path construction
   - Absolute/relative path handling inconsistent
   - Fix: Properly resolve paths to absolute before checking existence

3. **MoSCOW Updates Missing:**
   - `update_kanban_board()` explicitly defers MoSCOW updates to UKW
   - No code to update MoSCOW sections when tasks complete
   - Fix: Add MoSCOW section update logic with correct regex patterns

---

## Fix Attempts

### Fix Attempt 1 (v0.5.1.34+2)

**Date:** 2026-01-22  
**Status:** FIXED ✅

**Changes Made:**
1. Fixed story document path resolution in `resolve_kanban_paths()`
   - Corrected glob pattern to use parent directory and filename separately
   - Fixed absolute/relative path handling

2. Fixed board path resolution
   - Improved path construction and existence checking
   - Added proper absolute path resolution

3. Added MoSCOW section update functionality
   - Implemented MoSCOW task pattern matching
   - Added status update logic (TODO/IN PROGRESS → COMPLETE)
   - Added version marker insertion

**Result:** ✅ FIXED - All bugs resolved in v0.5.1.34+2

---

## Acceptance Criteria

- [x] **AC1:** Story document path resolution works correctly ✅
- [x] **AC2:** Board path resolution works correctly ✅
- [x] **AC3:** MoSCOW section updates work correctly ✅
- [x] **AC4:** Board updates automatically on every RW execution ✅
- [x] **AC5:** Completed tasks show as COMPLETE in MoSCOW sections ✅
- [x] **AC6:** Board metadata (Last Updated, Version) updates correctly ✅
- [x] **AC7:** Script runs successfully end-to-end ✅

---

## Dependencies

**Blocks:**
- Accurate Kanban board status synchronization
- Automated board updates in RW

**Blocked By:**
- None

**Related Work:**
- **FR-040:** RW Update Kanban Board on Task Completion (feature that introduced this functionality)
- **E5:S01:T36:** RW Update Kanban Board on Task Completion (implementation task)
- **E5:S01:T34:** UKW Granular Control and Use Case Flags (task that exposed the bugs)

---

## References

- **FR-040:** [`FR-040-rw-update-kanban-board-on-task-completion.md`](FR-040-rw-update-kanban-board-on-task-completion.md)
- **E5:S01:T36:** [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md`](../epics/Epic-5/Story-001-fr-repo/T36-rw-update-kanban-board-on-task-completion.md)
- **RW Step 7 Script:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`

---

## Template Usage

This BR follows the Kanban Framework BR template.  
This bug report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.
