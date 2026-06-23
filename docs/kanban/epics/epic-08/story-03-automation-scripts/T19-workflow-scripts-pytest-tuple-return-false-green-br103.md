---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 19: Workflow-scripts pytest tuple-return false-green (BR-103)

**Task ID:** E08:S03:T19  
**Status:** ✅ COMPLETE (v0.8.3.19+1)  
**Version Anchor:** v0.8.3.19+1  
**Priority:** HIGH  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (MWF delivery — IDW implementation)  
**Code:** E08S03T19  

**Upstream:** [BR-103 — workflow-scripts-pytest tuple-return false-green](../../../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)  
**Planning:** [IPP-E08S03T19](../../../../implementation-cycles/IPP-E08S03T19-workflow-scripts-pytest-tuple-return-br103.md)  
**Related:** [E07:S07:T02 — CI pytest gate for workflow scripts](../../epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts.md) · [FR-097](../../../fbu/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) · [UXR-009](../../../fbu/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md)

---

## Scope

Fix **false-green CI** in the workflow-scripts pytest gate: convert `test_stamp_evidence_gate.py` from tuple-return script tests to pytest-native `assert` tests, and optionally harden `pytest.ini` against `PytestReturnNotNoneWarning` recurrence.

---

## Input

- [BR-103](../../../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)
- [`test_stamp_evidence_gate.py`](../../../../../packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py)
- [`run_workflow_scripts_ci_pytest.sh`](../../../../../packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh)
- [`pytest.ini`](../../../../../packages/frameworks/workflow-mgt/scripts/validation/pytest.ini)
- [`.github/workflows/workflow-scripts-pytest.yml`](../../../../../.github/workflows/workflow-scripts-pytest.yml)

---

## Deliverable

1. Refactor seven stamp-evidence tests to pytest `assert` / `pytest.raises`.
2. Verify `run_workflow_scripts_ci_pytest.sh` — zero `PytestReturnNotNoneWarning` for that module.
3. Optional: `filterwarnings` error in workflow-scripts `pytest.ini`.
4. Brief audit note for other tuple-return script tests outside CI corpus.
5. Greenfield mirror sync (FR-110).

---

## Associated Bug Reports

- [BR-103 — workflow-scripts-pytest tuple-return false-green](../../../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md) (primary)

---

## Acceptance Criteria

- [x] **AC1:** All seven `test_stamp_evidence_gate.py` cases use pytest asserts; no tuple return from `test_*`.
- [x] **AC2:** CI script green with zero `PytestReturnNotNoneWarning` for that file.
- [x] **AC3:** `test_pytest_fails_when_non_substantive_invariant_broken` proves pytest fails on violation.
- [x] **AC4:** `filterwarnings = error::pytest.PytestReturnNotNoneWarning` in workflow-scripts `pytest.ini`.
- [x] **AC5:** BR-103 ↔ T19 links bidirectional; board row updated on fix release (RW Step 7).

---

## Approach

1. Replace `return False, msg` with `assert condition, msg` (or split helpers).
2. Use `pytest.raises(ValueError)` for invalid evidence mode test.
3. Retain `main()` only if needed — delegate to pytest or call shared non-test helpers.
4. Run `run_workflow_scripts_ci_pytest.sh` + `validate_actions_ci_parity.py --strict`.
5. Update BR-103 / UXR-009 citations if wording claims CI enforcement.

---

## Dependencies

**Depends On:**

- None (intake-only)

**Blocks:**

- Trustworthy stamp-evidence regression signal in CI / Actions parity gate

**Parallel Development Candidacy:** Safe — isolated test refactor.

---

## References

- [BR-103](../../../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)
- [packages/frameworks/workflow-mgt/scripts/validation/README.md](../../../../../packages/frameworks/workflow-mgt/scripts/validation/README.md)
