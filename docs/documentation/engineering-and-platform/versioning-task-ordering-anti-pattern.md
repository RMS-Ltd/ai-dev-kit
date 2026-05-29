---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Avoiding Task-Ordering Drift in RC.EPIC.STORY.TASK+BUILD

## Overview
Our numbering policy requires `RC.EPIC.STORY.TASK+BUILD` to map to the actual work item being released. When tasks under the same story are processed out of numeric order (e.g., T10 before T09), it is easy to let the version stick to the higher task number and only bump `BUILD`. This creates policy drift: the released version no longer points to the task actually shipped.

## What happened (concrete evidence)
**Story:** E4:S06 – Comprehensive Canonical E/S/T Template System  
- **T10 (BR-004)**: Epic contamination fix landed first at `v0.4.6.10+1`.  
- **T09 (BR-009)**: Installer discoverability landed later, but was initially recorded at `v0.4.6.10+2` (kept TASK=10, bumped BUILD).  
Result: TASK in the version string did not match the actual task (T09). We corrected it to `v0.4.6.9+2` (TASK=9, BUILD=2), and kept T10 at `v0.4.6.10+1`.

## Root cause
- RW and policy checks did **not** prevent “task index regression” (releasing a lower-numbered task after a higher-numbered one).  
- Default behavior allowed keeping the higher TASK and using BUILD to sequence, causing drift.

## Proposed hardening (RW + policy guardrails)
1) **RW validation: task regression check**
   - Compare the new `TASK` against the last released `TASK` for the same EPIC/STORY.
   - If new `TASK` < last released `TASK`, require an explicit `--allow-task-regression` (with rationale), otherwise fail fast.
2) **Version assignment rule**
   - Always set `TASK` to the actual task being released.
   - Use `BUILD` for multiple releases of the same task (additional builds, hotfixes).
3) **Option for strict monotonic TASKs (alternative)**
   - If teams want strictly increasing TASK numbers, late work on an earlier task can be modeled as a new higher-numbered task (e.g., T11) instead of reusing T09; this preserves monotonicity but changes the task ID. Default remains policy-aligned (TASK reflects the actual task).
4) **Changelog note**
   - When `--allow-task-regression` is used, annotate the changelog entry with the rationale.

## Why this should work
- It enforces that the version string stays aligned to the actual task ID, preventing semantic drift.
- It makes out-of-order task releases an explicit, auditable decision.
- BUILD remains scoped to “additional releases of the same task,” keeping the meaning clear.

## Implementation sketch
- In RW step before version bump:
  - Load last released `TASK` for the EPIC/STORY (from tags or changelog).
  - If `new_task < last_task` and no `--allow-task-regression`, fail with guidance.
  - If allowed, proceed but log rationale; set `TASK=new_task`, increment `BUILD` for this task.
- Update docs/policy to codify the above and add examples (E4:S06 T09/T10 incident).

## Takeaways
- Out-of-order task processing is a real edge case; the guardrail keeps numbering policy intact.
- Explicit overrides make exceptional cases visible and auditable, avoiding silent drift.

