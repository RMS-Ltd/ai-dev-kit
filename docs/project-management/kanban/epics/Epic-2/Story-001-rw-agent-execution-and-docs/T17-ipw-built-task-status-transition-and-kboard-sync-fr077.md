---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S01:T17 - IPW-built task status transition and kboard synchronization (FR-077)

**Task ID:** E2:S01:T17  
**Status:** IN PROGRESS  
**Version Anchor:** v0.2.1.17+3  
**Priority:** HIGH  
**Created:** 2026-04-09  
**Last updated:** 2026-04-14 (v0.2.1.17+3 — FR-077 ownership/validator/test hardening released)  
**Code:** E2S01T17

---

## Summary

Define and implement canonical status-transition ownership so IPW-built tasks do not remain stale (`TODO`) after implementation starts or completes, and ensure atomic sync between task docs and kboard.

## Incident evidence (2026-04-10)

- `E3:S02:T12` was implemented from IPW artifacts, but remained `TODO`.
- `RW E3:S02:T12 --art` failed at Step 1c until task status was manually updated to releasable state.
- This validates FR-077 requirement for deterministic TODO -> IN PROGRESS/COMPLETE transitions plus atomic kboard propagation.

## Implementation decisions and evidence

- Added mandatory status-transition intent guidance in:
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
  - `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`
- Added RW-side transition drift audit guidance in:
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- Implemented drift validator:
  - `packages/frameworks/workflow mgt/scripts/validation/validate_ipw_status_drift.py`
- Added tests:
  - `packages/frameworks/workflow mgt/scripts/validation/test_validate_ipw_status_drift.py`
- Follow-up hardening (same defect path):
  - `validate_ipw_status_drift.py` now supports `--requested E:S:T` for task-scoped detection.
  - `validate_rw_task_complete.py` now runs FR-077 drift detection at Step 1c TODO gate and emits explicit remediation guidance when implementation evidence is present.
  - `test_validate_rw_task_complete.py` and `test_validate_ipw_status_drift.py` expanded to cover requested-task drift and Step 1c drift diagnostics.
- Latest recurrence context (2026-04-13):
  - `RW E7:S06:T18 --art` blocked at Step 1c due to host task still marked `TODO`.
  - Confirms validator behavior is working as intended, but transition-ownership adoption remains inconsistent in execution flow.

---

## Input

- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`
- [ICW-E2S01T17-specification](../../../../../implementation-cycles/ICW-E2S01T17-specification.md)
- [ICW-E2S01T17-test-design](../../../../../implementation-cycles/ICW-E2S01T17-test-design.md)
- [ICW-E2S01T17-implementation-plan](../../../../../implementation-cycles/ICW-E2S01T17-implementation-plan.md)

---

## Deliverable

1. Canonical status transition rules (`TODO -> IN PROGRESS -> COMPLETE`) for IPW-derived tasks.
2. Explicit workflow ownership for when task-doc and kboard status updates must occur.
3. Validation/audit mechanism to detect stale task status drift after implementation evidence exists.

---

## Acceptance Criteria

- [x] Transition points for `TODO`, `IN PROGRESS`, `COMPLETE` are explicitly documented and enforceable.
- [x] IPW output or guidance includes status-transition intent/checklist for downstream execution.
- [x] Task-doc and kboard sync is defined as atomic for status changes.
- [x] At least one regression/audit check detects implemented-but-TODO drift.

---

## Dependencies

- Related: FR-042, FR-075, FR-076.
- Depends on: Story E2:S01 workflow governance surface and validator/docs update paths.

---

## Links

- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [Story E2:S01](../Story-001-rw-agent-execution-and-docs.md)
- [ICW-E2S01T17-specification](../../../../../implementation-cycles/ICW-E2S01T17-specification.md)
- [ICW-E2S01T17-test-design](../../../../../implementation-cycles/ICW-E2S01T17-test-design.md)
- [ICW-E2S01T17-implementation-plan](../../../../../implementation-cycles/ICW-E2S01T17-implementation-plan.md)

---

## Verification Evidence (2026-04-14 hardening pass)

- Ownership contract normalized across workflow docs:
  - `implementation-planning-workflow-agent-execution.md` (canonical ownership matrix)
  - `release-workflow-agent-execution.md` (Step 1.4 ownership reminder)
  - `update-kanban-workflow-agent-execution.md` (UKW propagation contract)
  - `kanban-board-guide.md` (process-facing ownership + atomicity rule)
- Validator hardening:
  - `validate_ipw_status_drift.py` now supports deterministic requested-task mode by default, with optional `--scan-all-with-requested`.
  - Requested-task drift failures now emit explicit remediation tied to FR-077 ownership.
  - `validate_rw_task_complete.py` drift diagnostics now include owner-aware remediation.
- Regression tests:
  - Added requested-task determinism and opt-in full-scan cases in `test_validate_ipw_status_drift.py`.
  - Expanded Step 1.4 drift diagnostic assertion in `test_validate_rw_task_complete.py`.
- Command evidence:
  - `python -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_ipw_status_drift.py" "packages/frameworks/workflow mgt/scripts/validation/test_validate_rw_task_complete.py" -q`
  - Result: `15 passed`.


## Documentation Publication

Publication Status: PUBLISHED
Publication N/A Reason: N/A

## Planning Artifact Links

- [ICW E2:S01:T17 specification](../../../../../implementation-cycles/ICW-E2S01T17-specification.md)
- [ICW E2:S01:T17 test design](../../../../../implementation-cycles/ICW-E2S01T17-test-design.md)
- [ICW E2:S01:T17 implementation plan](../../../../../implementation-cycles/ICW-E2S01T17-implementation-plan.md)
