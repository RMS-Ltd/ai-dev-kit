---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T17:21:05Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.6.4.1+1

**Release Date:** 2025-12-07 17:21:05 UTC  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 4 - Bug Reports  
**Task:** E6:S04:T01 - Fix RW installer template path bug  
**Version:** 0.6.4.1+1

---

## Summary

Fixed a critical bug in the RW installer script where it was looking for the `cursorrules-rw-trigger-section.md` template file in the wrong location. The script now correctly resolves paths to framework files, enabling users to successfully run the installer without manual workarounds.

---

## Changes

### Bug Fixes

#### RW Installer Template Path Bug Fix
- **File:** `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`
- **Issue:** Script was using `PACKAGE_ROOT` (pointing to `packages/frameworks/`) instead of the framework root directory (`packages/frameworks/workflow mgt/`)
- **Fix:**
  - Added `FRAMEWORK_ROOT = SCRIPT_DIR.parent` to correctly point to the framework directory
  - Updated `CURSORRULES_TEMPLATE` path to use `FRAMEWORK_ROOT` instead of `PACKAGE_ROOT`
  - Updated `SCHEMA_DOC` path to use `FRAMEWORK_ROOT` for consistency
- **Impact:** Users can now run the installer successfully without encountering `FileNotFoundError`

### Framework Management

#### Bug Reports Story Created
- **File:** `docs/project-management/kanban/epics/Epic-6/Story-004-bug-reports.md`
- **Purpose:** Track all bug reports and bug fixes related to framework management
- **Status:** IN PROGRESS
- **First Task:** E6:S04:T01 - Fix RW installer template path bug (COMPLETE)

#### Feature Requests Story Created
- **File:** `docs/project-management/kanban/epics/Epic-6/Story-005-feature-requests.md`
- **Purpose:** Track all feature requests related to framework management
- **Status:** TODO
- **Ready for:** Future feature requests to be converted to tasks

### Kanban Updates

#### Epic 6 Structure Updates
- **File:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Changes:**
  - Added Story 4: Bug Reports (IN PROGRESS)
  - Added Story 5: Feature Requests (TODO)
  - Updated Epic status from COMPLETE to IN PROGRESS
  - Updated last updated timestamp

#### Story 2 Cleanup
- **File:** `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`
- **Changes:**
  - Removed bug fix task (E6:S02:T06) - moved to Story 4
  - Cleaned up task checklist

---

## Problem Addressed

**Issue:** The RW installer script (`install_release_workflow.py`) was failing with a `FileNotFoundError` when users tried to run it. The script couldn't find the `cursorrules-rw-trigger-section.md` template file because it was looking in the wrong directory.

**Root Cause:**
- Script path calculation: `PACKAGE_ROOT = SCRIPT_DIR.parent.parent` = `packages/frameworks/`
- Actual template location: `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- Script was looking for: `packages/frameworks/cursorrules-rw-trigger-section.md` (incorrect)

**Solution:** Introduced `FRAMEWORK_ROOT` variable pointing to the correct framework directory and updated all template/schema paths to use it.

**User Impact:**
- **Before:** Installer failed, requiring manual workaround
- **After:** Installer works correctly, users can set up RW trigger automatically

---

## Technical Details

### Files Modified
- `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`
- `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`

### Files Created
- `docs/project-management/kanban/epics/Epic-6/Story-004-bug-reports.md`
- `docs/project-management/kanban/epics/Epic-6/Story-005-feature-requests.md`

### Code Changes
```python
# Before:
PACKAGE_ROOT = SCRIPT_DIR.parent.parent
CURSORRULES_TEMPLATE = PACKAGE_ROOT / "cursorrules-rw-trigger-section.md"
SCHEMA_DOC = PACKAGE_ROOT / "config" / "rw-config-schema.md"

# After:
PACKAGE_ROOT = SCRIPT_DIR.parent.parent
FRAMEWORK_ROOT = SCRIPT_DIR.parent  # New variable
CURSORRULES_TEMPLATE = FRAMEWORK_ROOT / "cursorrules-rw-trigger-section.md"
SCHEMA_DOC = FRAMEWORK_ROOT / "config" / "rw-config-schema.md"
```

---

## Verification

- ✅ Template file exists at correct path: `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
- ✅ Schema file exists at correct path: `packages/frameworks/workflow mgt/config/rw-config-schema.md`
- ✅ Path calculation correctly resolves to framework root directory
- ✅ Installer script tested with path resolution
- ✅ Bug Reports and Feature Requests stories created and properly structured

---

## Related Work

- **Epic:** Epic 6 - Framework Management and Maintenance
- **Story:** Story 4 - Bug Reports
- **Task:** E6:S04:T01 - Fix RW installer template path bug
- **Related:**
  - E05:S04:T08 - Document `.cursorrules` setup for RW trigger (documentation references installer)
  - E2:S04 - RW Installer & Plug-and-Play Adoption (original installer implementation)

---

## Next Steps

Users installing the Workflow Management framework should:
1. Run the RW installer: `python frameworks/workflow-mgmt/scripts/install_release_workflow.py`
2. Verify `.cursorrules` file is created/updated correctly
3. Test the "RW" trigger in Cursor

Future bug reports related to framework management will be tracked in Story 4 (Bug Reports).

---

**Release Notes End**

