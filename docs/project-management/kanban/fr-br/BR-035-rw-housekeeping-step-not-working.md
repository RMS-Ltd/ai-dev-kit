---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T15:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report: RW Housekeeping Step Not Working

**Type:** Bug Report (BR)  
**Submitted:** 2026-01-17  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** FIXED  
**GitHub Issue:** [TBD]  
**Version:** v0.9.1.8+8

---

## Summary

The final housekeeping step (Step 13/17) of the Release Workflow (RW) is not working correctly. The TODO list still shows all `rw-step-*` todos as completed instead of being cleared/removed from the IDE todo list.

---

## Description

### Problem Statement

**Issue: Housekeeping Step Doesn't Clear TODO List**

After completing RW, Step 13 (Housekeeping) should clear all `rw-step-*` todos from the IDE todo list. However, the todos remain visible in the list, still showing as "12 of 12 complete" instead of being removed.

**Expected Behavior:**
- Step 13 (Housekeeping) should clear/remove all `rw-step-*` todos from the IDE todo list
- After RW completes, the IDE todo list should be clean with no `rw-step-*` todos remaining
- The workflow should end with a clean state, ready for the next workflow

**Observed Behavior:**
- Step 13 executes but doesn't actually clear the todos
- All `rw-step-*` todos remain in the IDE todo list
- Todos are marked as `completed` but not removed
- The list still shows "12 of 12 complete" after RW finishes

---

## Affected Component

**Primary Component:** Release Workflow (RW) Step 13: Housekeeping
**Affected Areas:**
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 17: Housekeeping)
- `.cursorrules` (Step 13: Housekeeping reference)
- Agent execution of RW Step 13

---

## Reproduction Steps

1. Run the Release Workflow (RW) for any version
2. Complete all 12 steps (Steps 1-12)
3. Observe Step 13 (Housekeeping) execution
4. Check the IDE todo list after RW completes
5. Observe that all `rw-step-*` todos are still present (marked as completed but not removed)

---

## Impact

- **IDE Clutter:** TODO list accumulates `rw-step-*` todos from multiple RW runs
- **Reduced Visibility:** Important todos may be hidden among completed RW todos
- **Workflow Incomplete:** RW doesn't fully clean up after itself
- **User Confusion:** Users expect a clean state after workflow completion

---

## Root Cause Analysis

**Likely Cause:**
The current implementation in Step 13 marks todos as `completed` but doesn't actually remove them from the IDE todo list. The `todo_write` tool with `merge: true` and `status: 'completed'` updates the status but doesn't delete the todos.

**Documentation Reference:**
From `release-workflow-agent-execution.md` Step 17:
```python
# Clear all RW todos
todo_write(
    merge=True,
    todos=[
        {'id': 'rw-step-1', 'status': 'completed'},
        {'id': 'rw-step-2', 'status': 'completed'},
        # ... all RW steps
    ]
)
```

This pattern marks todos as completed but doesn't remove them.

---

## Proposed Solution

**Solution Implemented:**
- **Approach:** Mark all `rw-step-*` todos as `cancelled` instead of `completed`
- **Rationale:** `todo_write` tool doesn't support deletion. `cancelled` status hides todos from active list
- **Implementation:** `todo_write(merge=True, todos=[{'id': 'rw-step-*', 'status': 'cancelled'}, ...])`
- **Limitation:** Todos are marked as cancelled, not deleted. If Cursor adds deletion support, this can be updated.

**Implementation Notes:**
- ✅ Works with Cursor's `todo_write` tool
- ✅ Handles cases where todos don't exist (idempotent)
- ✅ Does not affect other todos in the list (only `rw-step-*`)
- ⚠️ **Tool Limitation:** `todo_write` doesn't support deletion, so `cancelled` status is used as workaround

---

## Acceptance Criteria

- [x] Step 13 (Housekeeping) successfully marks all `rw-step-*` todos as `cancelled` (hides them from active list) - ✅ FIXED (E6:S01:T35)
- [x] After RW completes, `rw-step-*` todos are marked as `cancelled` (hidden from active view) - ✅ FIXED (E6:S01:T35)
- [x] The IDE todo list is clean and ready for the next workflow - ✅ FIXED (E6:S01:T35)
- [x] Other todos (non-RW) are not affected by the cleanup - ✅ FIXED (E6:S01:T35)
- [x] The solution is idempotent (safe to run multiple times) - ✅ FIXED (E6:S01:T35)

---

## Dependencies

**Related Work:**
- RW Step 13: Housekeeping implementation
- Cursor `todo_write` tool capabilities
- Workflow cleanup patterns

---

## Assigned To

**Story:** Story 1: BR Repo (PERPETUAL)  
**Task:** Task 35 (E6:S01:T35)

---

## Kanban Links

- Story: [E6:S01: BR Repo (PERPETUAL)](../epics/Epic-6/Story-001-br-repo.md)
- Task: [E6:S01:T35: RW Housekeeping Step Not Working](../epics/Epic-6/Story-001-br-repo/T35-rw-housekeeping-step-not-working.md)

---

## References

- **RW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 17: Housekeeping)
- **Cursor Rules:** `.cursorrules` (Step 13: Housekeeping reference)

---

## Version History

- **v0.6.1.35+0** (2026-01-17): Bug report created
- **v0.6.1.35+1** (2026-01-17): Fixed - Updated RW Step 13 to mark todos as `cancelled` instead of `completed`. Implementation complete (E6:S01:T35).

---

_This Bug Report is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

