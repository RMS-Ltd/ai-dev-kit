---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-063 — RW `-k` task attribution drift (requested task vs version anchor)

**Status:** COMPLETE  
**Priority:** CRITICAL  
**Severity:** CRITICAL — **forensic integrity blocker:** release records can claim one task while version/tag lineage anchors a different task.  
**Created:** 2026-04-07  
**Last updated:** 2026-04-07 — `E2:S01:T13+2` released runtime hardening to `dev` (`RW -k` mismatch guard, `--art`, `validate_version_bump` alignment, tests, dual-source docs).  
**Version:** v0.2.1.13+2  
**Code:** BR-063  
**Implementing Task:** [E2:S01:T13](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063.md)

---

## Problem Statement

`RW -k` accepts an explicit requested task id for intent context, but release attribution can still follow the existing `version.py` task lineage. This can produce split accountability:

- commit/changelog narrative references requested task (example: `T12`)
- internal version/tag lineage remains a different task (example: `T10+6`)

This breaks forensic traceability and creates ambiguous responsibility for what was actually released.

---

## Expected Behavior

For a single release, task attribution must be single-source and consistent across:

1. `version.py` (`RC.EPIC.STORY.TASK+BUILD`)
2. commit footer (`Epic | Story | Task`)
3. internal/semver release tags
4. main and detailed changelog entries
5. BR implementing-task linkage where applicable

If requested task and computed version task differ, RW must hard-fail unless an explicit reconciliation mode is chosen.

---

## Reproduction

1. Run `RW -k E2:S01:T12`.
2. Observe version lineage increments on `T10` (`0.2.1.10+6`).
3. Observe release/changelog text attributed to `T12`.
4. Result: release artifacts disagree on accountable task.

---

## Proposed Resolution

- Add explicit `RW -k` attribution guard that compares requested task id with computed version task anchor.
- If mismatch, abort by default and require an explicit operator choice:
  - adopt requested task as canonical release anchor, or
  - keep computed anchor and rewrite all release metadata accordingly.
- Add regression coverage for mismatch scenario.

---

## Implementation Outcome

- Implemented `--art` on `validate_rw_task_intent.py` for `rw-k` intentional mismatch adoption.
- Changed `rw-k` default to forensic-strict mismatch fail (instead of unconditional pass).
- Added `--art` alignment enforcement in `validate_version_bump.py` via `--requested`.
- Extended tests:
  - `test_validate_rw_task_intent.py` (new) for mismatch/pass scenarios.
  - `test_validate_version_bump.py` for ART alignment checks.
  - `test_rw_triggers.py` for parsing RW inputs that include task ids/flags.
- Updated RW rules/docs to document `--art` operator guidance and propagation requirements.

---

## Related

- [BR-061](BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
