---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Default pytest CLI coverage reports misleading 0%

**Type:** User Experience Research (UXR)  
**ID:** UXR-030  
**Submitted:** 2026-06-15  
**Submitted By:** User / maintainer  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Status:** IMPLEMENTED (v0.8.3.21+1 — E08:S03:T21); **Wave 2:** IMPLEMENTED (v0.8.3.22+2 — E08:S03:T22)  
**Version:** v0.8.3.21+1 (Wave 1)  
**Implementing Task:** [E08:S03:T21](../epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md) (Wave 1) · [E08:S03:T22](../epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md) (Wave 2)

**Related:** [E08:S03:T04](../epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) · [E08:S03:T19](../epics/epic-08/story-03-automation-scripts/T19-workflow-scripts-pytest-tuple-return-false-green-br103.md) · [BR-058](BR-058-ci-test-workflow-missing-and-pytest-failures.md) · [BR-081](BR-081-kanban-install-datetime-utcnow-deprecated.md) · [BR-103](BR-103-workflow-scripts-pytest-tuple-return-false-green.md)

---

## Summary

Root [`pytest.ini`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/pytest.ini) enabled `--cov=cli` in default `addopts`. Running **non-CLI** tests (portal, kanban, workflow-only suites) still emitted a full CLI coverage table showing **0% on every `cli/` module**, even when tests passed. Operators interpreted this as “the CLI has no test coverage,” when the run simply never imported CLI code.

---

## Research Objective

**Primary question:** Does the default local/CI pytest experience give operators an accurate CLI coverage signal without false alarms?

**Context:** Maintainer ran pytest and saw `TOTAL … 0%` across all `cli/` files while investigating test health.

---

## Methodology

**Research method:** Maintainer spot-check — compare `pytest.ini` addopts, test import paths, and coverage output for CLI vs non-CLI test subsets.

**Artifacts reviewed:**

| Surface | Behavior |
|--------|----------|
| `pytest.ini` | `--cov=cli` in default `addopts` |
| `tests/test_portal_*.py` | Pass; CLI coverage **0%** (no `cli` imports) |
| `tests/cli/`, `tests/test_commands.py` | Pass; CLI coverage **~42–51%** when CLI code executes |
| `.github/workflows/tests.yml` | Single job; no dedicated CLI coverage lane |

---

## Key Findings

### Finding 1: False “zero coverage” signal (Severity: Medium)

Any pytest invocation inherits `--cov=cli`. Non-CLI runs measure the package but execute zero lines → **literal 0%** on all modules. The report looks like a coverage crisis when tests are healthy.

### Finding 2: Pattern exists elsewhere (Severity: Low)

Workflow-scripts pytest uses an **isolated** `pytest.ini` without root coverage ([E08:S03:T19 / BR-103](BR-103-workflow-scripts-pytest-tuple-return-false-green.md)). Root suite lacked an equivalent opt-in CLI coverage target.

### Finding 3: CI path filter omitted `cli/**` (Severity: Low)

[`tests.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/tests.yml) did not trigger on `cli/**` changes — CLI-only edits could skip the Tests workflow.

---

## User Pain Points

- Operators waste time investigating “0% CLI coverage” on unrelated test runs.
- Hard to distinguish “no CLI tests” from “CLI tests not in this run.”
- Encourages ignoring coverage output entirely.

---

## Recommendations

1. **Remove `--cov=cli` from default `pytest.ini`.**
2. **Add opt-in config** `pytest-cli-cov.ini` + `scripts/run_cli_pytest_coverage.sh`.
3. **Add dedicated `cli-coverage` CI job** parallel to the main pytest job.
4. **Extend RW Step 9.7 parity** with a `cli-coverage` check when CLI paths change.
5. **Document** the split in `tests/README.md`, `cli/README.md`, and validation README.

---

## Acceptance Criteria (delivery task)

- [x] Default `pytest` / `pytest tests/…` does not emit CLI coverage unless opt-in config is used.
- [x] `bash scripts/run_cli_pytest_coverage.sh` reports non-zero CLI coverage when CLI tests run.
- [x] `tests.yml` includes `cli-coverage` job and `cli/**` path filters.
- [x] UXR-030 ↔ E08:S03:T21 bidirectional links; board row updated on RW.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-15  
**Decision:** Follow-on to **E08:S03** (Tests / CI ergonomics lane) — new task **E08:S03:T21**.

**Assigned To:**

- Epic: E08 — Tooling & Automation
- Story: E08:S03 — Automation Scripts
- Task: E08:S03:T21 — CLI pytest coverage dedicated target (UXR-030)

**Wave 2 intake (2026-06-15):** Task **E08:S03:T22** — pytest warning cleanup.

---

## Wave 2 — Pytest warning noise (2026-06-15)

**Follow-on task:** [E08:S03:T22](../epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md)  
**Planning:** [IPP-E08S03T22](../../implementation-cycles/IPP-E08S03T22-pytest-warning-cleanup-uxr030-wave2.md)

After Wave 1, a full-suite run (`921 passed, 8 skipped, 46 warnings`) still produces warning clutter that erodes operator trust.

### Finding 4: `cli/logging.py` uses deprecated `datetime.utcnow()` (Severity: Medium)

~43 DeprecationWarnings on Python 3.14 during install-logging tests. Same class as [BR-081](BR-081-kanban-install-datetime-utcnow-deprecated.md).

### Finding 5: `tests/test_rw_performance.py` script-style returns (Severity: Medium)

Three `test_*` functions return `tuple`/`bool` → `PytestReturnNotNoneWarning`. Same anti-pattern as [BR-103](BR-103-workflow-scripts-pytest-tuple-return-false-green.md).

### Finding 6: `update_kanban_docs.py` board stamp uses `utcnow()` (Severity: Low)

One DeprecationWarning per full suite from four-surface report / board stamp paths (L1737, L2473). Same class as [BR-081](BR-081-kanban-install-datetime-utcnow-deprecated.md). Addressed in T22 follow-on BUILD.

### Wave 2 acceptance criteria (E08:S03:T22)

- [x] Zero `utcnow` DeprecationWarnings from `cli/logging.py` on full suite.
- [x] Zero `PytestReturnNotNoneWarning` from `tests/test_rw_performance.py`.
- [x] Zero `utcnow` DeprecationWarnings from `update_kanban_docs.py` on full suite.
- [x] UXR-030 ↔ E08:S03:T22 bidirectional links; board row on RW.

---

## References

- [`pytest.ini`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/pytest.ini)
- [E08:S03:T04 — CI test workflow (BR-058)](../epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md)
- [BR-103 — Workflow-scripts pytest false-green](../fbu/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)
