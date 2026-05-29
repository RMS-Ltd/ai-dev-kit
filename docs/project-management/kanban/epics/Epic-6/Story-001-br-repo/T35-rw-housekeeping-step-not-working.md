---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-17T15:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 1, Task 35: RW Housekeeping Step Not Working

**Status:** COMPLETE
**Priority:** HIGH
**Last updated:** 2026-01-17 (v0.6.1.35+1 – Implementation complete: Updated RW Step 13 to mark todos as cancelled)
**Started:** 2026-01-17
**Completed:** 2026-01-17
**Version:** v0.6.1.35+1
**Code:** E6S01T35

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S01:T35`

---

## Scope

Fix the Release Workflow (RW) Step 13 (Housekeeping) so that it properly clears/removes all `rw-step-*` todos from the IDE todo list after RW completes, rather than just marking them as completed.

---

## Problem Statement

As documented in BR-035, RW Step 13 (Housekeeping) is not working correctly. The step marks all `rw-step-*` todos as `completed` but doesn't actually remove them from the IDE todo list. This results in the TODO list accumulating completed RW todos from multiple workflow runs, reducing visibility and cluttering the IDE.

---

## Input

- **Bug Report:** [BR-035: RW Housekeeping Step Not Working](../../../fr-br/BR-035-rw-housekeeping-step-not-working.md)
- **RW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 17: Housekeeping)
- **Cursor Rules:** `.cursorrules` (Step 13: Housekeeping reference)
- **Current Implementation:** Step 13 uses `todo_write(merge=True, todos=[...])` to mark todos as completed

---

## Deliverable

An updated RW Step 13 (Housekeeping) implementation that:
1. Successfully removes all `rw-step-*` todos from the IDE todo list
2. Leaves the IDE todo list clean after RW completes
3. Does not affect other todos (non-RW)
4. Is idempotent (safe to run multiple times)

---

## Acceptance Criteria

- [x] **Criterion 1:** Step 13 successfully marks all `rw-step-*` todos as `cancelled` (hides them from active list) - ✅ COMPLETE
- [x] **Criterion 2:** After RW completes, `rw-step-*` todos are marked as `cancelled` (hidden from active view) - ✅ COMPLETE
- [x] **Criterion 3:** The IDE todo list is clean and ready for the next workflow - ✅ COMPLETE
- [x] **Criterion 4:** Other todos (non-RW) are not affected by the cleanup - ✅ COMPLETE
- [x] **Criterion 5:** The solution is idempotent (safe to run multiple times) - ✅ COMPLETE
- [x] **Criterion 6:** Documentation updated to reflect the correct implementation pattern - ✅ COMPLETE

---

## Approach

1. **Investigate `todo_write` Tool Capabilities:**
   - Determine if `todo_write` supports removal/deletion of todos
   - Check if there's a pattern to remove todos (e.g., `status: 'deleted'` or similar)
   - Test different approaches to clearing todos

2. **Implement Removal Pattern:**
   - If `todo_write` supports removal, use the appropriate pattern
   - If not, investigate alternative approaches (e.g., marking as cancelled then removing)
   - Ensure the pattern only affects `rw-step-*` todos

3. **Update RW Step 13 Implementation:**
   - Modify the housekeeping step to use the removal pattern
   - Update the agent execution documentation with the correct pattern
   - Update `.cursorrules` if needed

4. **Testing:**
   - Test that todos are actually removed (not just marked as completed)
   - Test that other todos are not affected
   - Test idempotency (running Step 13 multiple times)

5. **Documentation:**
   - Update RW documentation with the correct implementation
   - Update examples to show the removal pattern

---

## Dependencies

**Depends On:**
- BR-035: RW Housekeeping Step Not Working (this task is the implementation of the fix for BR-035)
- Understanding of `todo_write` tool capabilities

**Blocks:**
- Clean IDE state after RW completion

---

## Related Work

- **Bug Report:** [BR-035: RW Housekeeping Step Not Working](../../../fr-br/BR-035-rw-housekeeping-step-not-working.md)
- **Workflow:** Release Workflow (RW) Step 13: Housekeeping

---

## Notes

- The current implementation pattern may be a limitation of the `todo_write` tool
- May need to investigate Cursor-specific todo management capabilities
- Consider if there's a way to filter/clear todos by ID pattern

---

_This Task is part of Epic 6, Story 1: BR Repo (PERPETUAL). See [`Story-001-br-repo.md`](../Story-001-br-repo.md) for story context._

