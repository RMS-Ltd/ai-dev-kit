# Detailed Changelog — v0.2.1.17+3

**Release Date:** 2026-04-14 11:52:31 UTC  
**Version:** `v0.2.1.17+3`  
**SemVer:** `v0.4.737+3`  
**Task Anchor:** `E2:S01:T17` (`--art` adoption)

---

## Summary

Change implemented: finalized FR-077 transition-ownership hardening so IPW-derived task lifecycle transitions are explicit, task-scoped drift detection is deterministic, and board propagation rules stay atomic with task-doc authority.

---

## Changed

- Updated IPW, RW, and UKW execution guides to use a consistent ownership contract for `TODO -> IN PROGRESS -> COMPLETE`.
- Hardened `validate_ipw_status_drift.py` requested-task behavior (deterministic by default, optional broader scan).
- Improved Step 1c drift diagnostics in `validate_rw_task_complete.py` with explicit owner-aware remediation.
- Added recurrence/guardrail regression tests for requested-task determinism and drift messaging.
- Updated Kanban process guide and T17 task evidence to reflect enforced transition/propagation semantics.

---

## Verification

- `python -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_ipw_status_drift.py" "packages/frameworks/workflow mgt/scripts/validation/test_validate_rw_task_complete.py" -q`
- Result: `15 passed`.

---

## Traceability

- Epic: `2`
- Story: `1`
- Task: `17`
- FR: [FR-077](../../project-management/kanban/fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
