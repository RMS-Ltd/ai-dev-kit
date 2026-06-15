---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 21: CLI pytest coverage dedicated target (UXR-030)

**Task ID:** E08:S03:T21  
**Status:** ✅ COMPLETE (v0.8.3.21+1)  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Created:** 2026-06-15  
**Last updated:** 2026-06-15 (v0.8.3.21+1 – RW delivery)  
**Version:** v0.8.3.21+1  
**Version Anchor:** v0.8.3.21+1  
**Code:** E08S03T21

**Upstream:** [UXR-030 — Default pytest CLI coverage misleading 0%](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)  
**Related:** [E08:S03:T04](T04-ci-test-workflow-pytest-remediation-br058.md) · [E08:S03:T19](T19-workflow-scripts-pytest-tuple-return-false-green-br103.md) · [BR-058](../../../fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Split CLI coverage out of default pytest configuration so non-CLI test runs do not report misleading **0%** on `cli/`. Add a dedicated local runner, CI job, and RW parity check — mirroring the isolated pytest pattern from **E08:S03:T19**.

---

## Problem

Default `pytest.ini` included `--cov=cli` in `addopts`. Portal/kanban/workflow-only pytest runs passed but printed **0%** coverage for every CLI module, implying untested CLI code when the run simply never imported `cli`.

---

## Input

- [UXR-030](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [`pytest.ini`](../../../../../pytest.ini) · [`pytest-cli-cov.ini`](../../../../../pytest-cli-cov.ini)
- [`.github/workflows/tests.yml`](../../../../../.github/workflows/tests.yml)

---

## Deliverable

1. Remove `--cov=cli` from default `pytest.ini`.
2. Add `pytest-cli-cov.ini` and `scripts/run_cli_pytest_coverage.sh`.
3. Add **`cli-coverage`** job to `tests.yml`; extend path filters with `cli/**`.
4. Add **`cli-coverage`** check to `validate_actions_ci_parity.py`.
5. Update `tests/README.md`, `cli/README.md`, validation README, CLI publishing guide.
6. Greenfield mirror sync for framework validation changes (FR-110).

---

## Acceptance Criteria

- [x] **AC1:** Default `pytest` does not enable CLI coverage (`pytest.ini` has no `--cov=cli`).
- [x] **AC2:** `bash scripts/run_cli_pytest_coverage.sh` uses `pytest-cli-cov.ini` and reports CLI coverage (HTML under `htmlcov/cli/`).
- [x] **AC3:** `tests.yml` has parallel `cli-coverage` job; triggers include `cli/**`.
- [x] **AC4:** RW Step 9.7 parity includes `cli-coverage` check for CLI-related paths.
- [x] **AC5:** UXR-030 marked IMPLEMENTED on delivery RW; bidirectional links verified.

---

## Associated User Experience Research

- [UXR-030 — Default pytest CLI coverage misleading 0%](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) (primary)

---

## References

- [E08:S03:T04 — CI test workflow and pytest remediation (BR-058)](T04-ci-test-workflow-pytest-remediation-br058.md)
- [E08:S03:T19 — Workflow-scripts pytest tuple-return false-green (BR-103)](T19-workflow-scripts-pytest-tuple-return-false-green-br103.md)
