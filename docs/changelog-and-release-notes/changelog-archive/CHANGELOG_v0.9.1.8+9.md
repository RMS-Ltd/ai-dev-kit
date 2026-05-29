# Changelog: v0.9.1.8+9

**Release Date:** 2026-01-17 15:45:00 UTC  
**Epic:** 9 (Release Candidate Readiness)  
**Story:** 1 (RC Readiness Gap Analysis)  
**Task:** 8 (Repository Story Abstract Space Contradiction)  
**Build:** 9

---

## Summary

Created Bug Report BR-035 documenting that RW Step 13 (Housekeeping) is not working correctly - it marks todos as completed but doesn't remove them from the IDE todo list.

---

## Added

### Bug Reports

- **BR-035: RW Housekeeping Step Not Working** (`docs/project-management/kanban/fr-br/BR-035-rw-housekeeping-step-not-working.md`)
  - Documents that RW Step 13 (Housekeeping) doesn't clear `rw-step-*` todos from IDE todo list
  - Todos remain visible as "12 of 12 complete" instead of being removed
  - Created task E6:S01:T35 to implement the fix

---

## Changed

### Kanban Documentation

- **E6:S01: BR Repo** (`docs/project-management/kanban/epics/Epic-6/Story-001-br-repo.md`)
  - Added E6:S01:T35 to task checklist
  - Updated version to v0.6.1.35+0

---

## Technical Details

### Bug Report Details

**Issue:** RW Step 13 (Housekeeping) marks all `rw-step-*` todos as `completed` but doesn't actually remove them from the IDE todo list.

**Impact:**
- IDE todo list accumulates completed RW todos from multiple workflow runs
- Reduced visibility for important todos
- Workflow doesn't fully clean up after itself

**Root Cause:** Current implementation uses `todo_write(merge=True, todos=[...])` to mark todos as completed, but this doesn't remove them from the list.

**Solution:** Task E6:S01:T35 will investigate `todo_write` tool capabilities and implement proper todo removal.

---

## Related Work

- **BR-035:** RW Housekeeping Step Not Working
- **E6:S01:T35:** RW Housekeeping Step Not Working (implementation task)
- **E9:S01:T08:** Repository Story Abstract Space Contradiction (ongoing)

---

## Files Modified

- `docs/project-management/kanban/fr-br/BR-035-rw-housekeeping-step-not-working.md` (new)
- `docs/project-management/kanban/epics/Epic-6/Story-001-br-repo/T35-rw-housekeeping-step-not-working.md` (new)
- `docs/project-management/kanban/epics/Epic-6/Story-001-br-repo.md`
- `src/fynd_deals/version.py`

---

## Validation

- ✅ Branch context validation passed
- ✅ Version format validated

---

_This changelog entry is part of the Release Workflow (RW). See `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` for workflow documentation._

