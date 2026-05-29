# Release v0.3.2.5+3

**Release Date:** 2025-12-04 18:15:00 UTC

**Epic / Story / Task:** Epic 3, Story 2, Task 5
**Type:** 🔧 Process Improvement

## Summary

🔧 Process Improvement: Hardened RW with automated version bump validation

## Changes

### Process Improvement
- Created `validate_version_bump.py` validation script to enforce RW Step 2 logic
- Validates completed task vs. current VERSION_TASK comparison
- Validates new task detection (VERSION_TASK = completed, BUILD = 1)
- Validates same task detection (VERSION_TASK unchanged, BUILD incremented)
- Validates out-of-order completion (VERSION_TASK = completed, BUILD = 1)
- Updated RW Step 8 to include version bump validation

### Files Added
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py` - New validation script

### Files Modified
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - Updated Step 8 to include version bump validator

### Validation Logic
- Reads version file to extract current version components
- Finds Story file automatically based on Epic/Story from version
- Identifies completed task from Story file
- Compares completed task vs. current VERSION_TASK
- Validates version bump follows correct logic:
  - New task: `completed > current` → `VERSION_TASK = completed`, `BUILD = 1`
  - Same task: `completed == current` → `VERSION_TASK` unchanged, `BUILD` incremented
  - Out-of-order: `completed < current` → `VERSION_TASK = completed`, `BUILD = 1`
- Reports specific errors if validation fails

## Related Work

- Epic: 3
- Story: 2
- Task: 5 (E3:S02:T05)

## Verification

- ✅ Validation script created and tested
- ✅ RW Step 8 updated to include version bump validator
- ✅ Validator correctly validates current state (Task 5, Build 2 → Build 3)
- ✅ Prevents out-of-order completion versioning errors

