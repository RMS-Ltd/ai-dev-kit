---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T16:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.5.1.34+2

**Release Date:** 2026-01-22 16:10:00 UTC  
**Epic:** Epic 5: Documentation Management and Maintenance  
**Story:** Story 1: FR Repo  
**Task:** Task 34: UKW Granular Control and Use Case Flags  
**Version:** v0.5.1.34+2 (Internal) | v0.5.40+2 (SemVer)  
**Type:** Bug Fix

---

## Summary

Fixed critical bugs in RW Step 7 (Auto-update Kanban Docs) that prevented the Kanban board from being updated automatically. The script now correctly resolves story document and board paths, and properly updates MoSCOW sections when tasks are completed.

---

## Changes

### Fixed

- **RW Step 7 Story Document Path Resolution:**
  - Fixed glob pattern matching for story documents
  - Corrected path resolution logic to handle absolute paths properly
  - Story documents are now found correctly for all epic/story combinations

- **RW Step 7 Kanban Board Path Resolution:**
  - Fixed board path resolution to check multiple locations correctly
  - Corrected absolute/relative path handling
  - Board path is now resolved reliably

- **RW Step 7 MoSCOW Section Updates:**
  - Added MoSCOW section update logic to mark completed tasks as COMPLETE
  - Fixed regex pattern to match board task format correctly
  - Tasks in MoSCOW sections now update from TODO/IN PROGRESS to COMPLETE automatically
  - Updates "Last updated" date and adds version marker

### Changed

- **RW Step 7 Script (`update_kanban_docs.py`):**
  - Enhanced path resolution to handle edge cases
  - Improved error handling and debugging output
  - MoSCOW section updates now work correctly

---

## Technical Details

### Bugs Fixed

1. **Story Document Not Found:**
   - **Issue:** Script failed to find story documents using glob patterns
   - **Root Cause:** Incorrect path construction for absolute kanban_root
   - **Fix:** Corrected glob pattern to use parent directory and filename separately

2. **Board Path Not Resolved:**
   - **Issue:** Board path was not being found in resolved paths
   - **Root Cause:** Path existence check was failing due to path construction issues
   - **Fix:** Improved path resolution with proper absolute path handling

3. **MoSCOW Section Not Updated:**
   - **Issue:** Completed tasks remained as TODO/IN PROGRESS in MoSCOW sections
   - **Root Cause:** Regex pattern didn't match board format, update code wasn't being called
   - **Fix:** Added MoSCOW update logic with corrected pattern matching

### Files Modified

- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
  - Fixed `resolve_kanban_paths()` function
  - Enhanced `update_kanban_board()` function with MoSCOW updates
  - Improved error handling and path resolution

---

## Impact

**Before Fix:**
- RW Step 7 failed to find story documents
- Board path was not resolved
- MoSCOW sections were not updated
- Manual board updates required after every release

**After Fix:**
- Story documents found correctly
- Board path resolved reliably
- MoSCOW sections update automatically
- Complete automation of board updates in RW

---

## Related Work

- **E5:S01:T34:** UKW Granular Control and Use Case Flags (original task)
- **E5:S01:T36:** RW Update Kanban Board on Task Completion (related enhancement)
- **FR-036:** RW Update Kanban Board on Task Completion (feature request)

---

## Testing

**Verified:**
- ✅ Story document path resolution works correctly
- ✅ Board path resolution works correctly
- ✅ MoSCOW section updates work correctly
- ✅ Board metadata updates work correctly
- ✅ Script runs successfully end-to-end

---

**Forensic Marker:** ✅ COMPLETE (v0.5.1.34+2)
