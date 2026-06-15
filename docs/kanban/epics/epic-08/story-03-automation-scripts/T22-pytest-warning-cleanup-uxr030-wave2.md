---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T19:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 22: Pytest warning cleanup (UXR-030 Wave 2)

**Task ID:** E08:S03:T22  
**Status:** ✅ COMPLETE (v0.8.3.22+2)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Created:** 2026-06-15  
**Last updated:** 2026-06-15 (v0.8.3.22+2 – MWF follow-on BUILD)  
**Version:** v0.8.3.22+2  
**Version Anchor:** v0.8.3.22+2  
**Code:** E08S03T22

**Upstream:** [UXR-030 Wave 2 — Pytest warning noise](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md#wave-2--pytest-warning-noise-2026-06-15)  
**Planning:** [IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md](../../../../implementation-cycles/IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md)  
**Related:** [E08:S03:T21](T21-cli-pytest-coverage-dedicated-target-uxr030.md) · [BR-081](../../../fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md) · [BR-103](../../../fr-br/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Eliminate pytest warning noise from a green full-suite run: `datetime.utcnow()` deprecation in `cli/logging.py`, `PytestReturnNotNoneWarning` from `tests/test_rw_performance.py`, and the remaining `utcnow` DeprecationWarning from `update_kanban_docs.py`.

---

## Input

- [UXR-030 Wave 2](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [IPP-E08S03T22](../../../../implementation-cycles/IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md)
- [`cli/logging.py`](../../../../../cli/logging.py)
- [`tests/test_rw_performance.py`](../../../../../tests/test_rw_performance.py)
- [`packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`](../../../../../packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py)

---

## Deliverable

1. Replace `datetime.utcnow()` with timezone-aware UTC in `cli/logging.py` (BR-081 pattern).
2. Refactor `tests/test_rw_performance.py` to pytest-native `assert` (BR-103 pattern); preserve `main()` for manual runs.
3. Replace `datetime.utcnow()` in `update_kanban_docs.py` board/report stamps (BR-081 pattern); greenfield sync.
4. Verify targeted pytest runs show zero warnings from these sources.

---

## Acceptance Criteria

- [x] **AC1:** No `utcnow` DeprecationWarnings from `cli/logging.py` on Python 3.12+.
- [x] **AC2:** Zero `PytestReturnNotNoneWarning` from `tests/test_rw_performance.py`.
- [x] **AC3:** Existing install-logging and RW performance tests still pass.
- [x] **AC4:** UXR-030 Wave 2 marked complete; bidirectional links verified.
- [x] **AC5:** Zero `utcnow` DeprecationWarnings from `update_kanban_docs.py` on full suite.

---

## Associated User Experience Research

- [UXR-030 — Default pytest CLI coverage misleading 0% (Wave 2)](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)

---

## References

- [E08:S03:T21 — CLI pytest coverage dedicated target](T21-cli-pytest-coverage-dedicated-target-uxr030.md)
- [BR-081 — Kanban install utcnow deprecation](../../../fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- [BR-103 — Workflow-scripts pytest false-green](../../../fr-br/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)
