---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-060 - RW incorrectly blocks IN PROGRESS tasks

**Status:** COMPLETE  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Created:** 2026-04-02  
**Last updated:** 2026-04-07 — closeout: behavior verified in audit and aligned docs/task wiring for canonical home **E2:S01:T09** (implementation forensic: **RW E6:S06:T60** **v0.6.6.60+1**, SemVer **v0.4.698+1**).  
**Version:** v0.6.6.60+1  
**Code:** BR-060  
**Implementing Task:** [E2:S01:T09](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md) (superseded stubs: [E4:S19:T01](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T01-rw-allow-in-progress-task-releases-br060.md), [E6:S06:T60](../epics/Epic-6/Story-006-feature-requests/T60-rw-allow-in-progress-task-releases.md))

---

## Problem Statement

Release Workflow (RW) currently blocks full releases when the requested task is `IN PROGRESS`, even when the release is intended as an incremental `+BUILD` update within the same task. This prevents valid iterative releases and conflicts with the intended meaning of `RC.EPIC.STORY.TASK+BUILD`.

## Current Fault

- `validate_rw_task_complete.py` in `full` mode rejects non-perpetual `IN PROGRESS` task status.
- RW Step 1c therefore aborts before Step 2+ for active tasks that legitimately need additional builds.
- Users are forced toward workaround modes rather than normal RW execution for iterative releases.

## Expected Behavior

- RW should allow releases against `IN PROGRESS` tasks when task identity is explicit and validated (Step 1b/1d), and version bump logic applies `+BUILD` progression correctly.
- Guardrails should still prevent accidental wrong-task releases (intent validation remains mandatory).
- Status semantics should support iterative delivery and evidence refresh before final completion.

## Impact

- Blocks normal release cadence for active work items.
- Creates policy confusion and workflow friction.
- Encourages mode-based workarounds over the standard RW path.

## Reproduction

1. Set current branch to an epic branch matching requested task epic.
2. Ensure requested task doc status is `IN PROGRESS`.
3. Run `RW E6:S06:T57` (or equivalent valid E:S:T task).
4. Observe Step 1c failure from `validate_rw_task_complete.py` with reason similar to "status still in progress".

## Root Cause Hypothesis

- FR-060 Step 1c validator currently couples "releasable" to completion state in `full` mode.
- This coupling conflicts with internal versioning intent where repeated releases on the same task are represented by `+BUILD`.

## Proposed Resolution

1. Adjust Step 1c criteria to permit `IN PROGRESS` tasks in full RW mode when task intent validation passes.
2. Keep strong typo/intent protections (`validate_rw_task_intent.py`) as the primary safety mechanism.
3. Update FR-060 and RW execution docs to explicitly define status-vs-build behavior.
4. Add regression tests covering:
   - full RW with `IN PROGRESS` status (should pass),
   - full RW with TODO status (policy decision required),
   - full RW with task-id mismatch (must fail).

## Implementation Notes

- `validate_rw_task_complete.py` full mode now treats `IN PROGRESS` as releasable.
- `test_validate_rw_task_complete.py` now verifies:
  - `IN PROGRESS` passes in full mode,
  - `COMPLETE` passes in full mode,
  - `TODO` fails in full mode,
  - perpetual in-progress passes,
  - missing task docs fail.

## Related

- `validate_rw_task_complete.py`
- `validate_rw_task_intent.py`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `BR-056` (task intent guardrail)
