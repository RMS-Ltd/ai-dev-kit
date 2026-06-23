---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T10:14:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T24 — CLI package test coverage gap closure (FR-138)

**Task ID:** E08:S03:T24  
**Status:** 📋 TODO  
**Priority:** MEDIUM (Could Have — MoSCOW **C**)  
**Created:** 2026-06-23  
**Last updated:** 2026-06-23 (v0.8.3.24+1 – Kanban documentation setup)  
**Version:** v0.8.3.24+1  
**Version Anchor:** v0.8.3.24+1  
**Code:** E08S03T24

**Upstream:** [FR-138 — CLI package test coverage gap closure](../../../fr-br/FR-138-cli-package-test-coverage-gap-closure.md)  
**Related:** [E08:S03:T21](T21-cli-pytest-coverage-dedicated-target-uxr030.md) · [E08:S03:T22](T22-pytest-warning-cleanup-uxr030-wave2.md) · [UXR-030](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) · [FR-030](../../../fr-br/FR-030-ai-dev-kit-cli-tool.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Close the measured **`cli/`** pytest coverage gap (**54%** aggregate baseline, 2026-06-23) by adding phased tests for backends, migration, and command modules, then enforce a **≥70%** floor in the dedicated `cli-coverage` lane ([UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) / **T21**).

---

## Problem

Opt-in CLI coverage (T21) accurately reports real gaps. Lowest modules are install backends (**19–26%**), migration (**12–17%**), and thin wrappers for `check` / `status` / `update` (**26–28%**). CI does not fail on low aggregate coverage today.

---

## Input

- [FR-138](../../../fr-br/FR-138-cli-package-test-coverage-gap-closure.md) (baseline table + wave plan)
- Operator `cli-coverage` report — **54%** total, 2026-06-23
- [`pytest-cli-cov.ini`](../../../../../pytest-cli-cov.ini) · [`scripts/run_cli_pytest_coverage.sh`](../../../../../scripts/run_cli_pytest_coverage.sh)
- Existing suite: `tests/cli/`, `tests/test_commands.py`

---

## Deliverable (phased)

### Wave 1 — Backends & migration

- Tests for `cli/migration.py`, `cli/commands/migrate.py`
- Tests for `cli/backends/{git_submodule,git_subtree,package_manager,selector,base}.py` (mocked git/npm/pip)
- Target: each Wave 1 file **≥50%**

### Wave 2 — Core commands & errors

- Tests for `cli/commands/{check,status,update}.py`, `cli/adk_install_errors_bridge.py`, `cli/exceptions.py`
- Target: each Wave 2 file **≥60%**

### Wave 3 — Remaining gaps & floor

- Branch coverage for `config`, `install`, `remove`, `logs`, `config.py`, `logging.py`, `utils.py`
- Add **`--cov-fail-under=70`** to `pytest-cli-cov.ini` / `cli-coverage` CI job
- Update `tests/README.md` and `cli/README.md`

---

## Acceptance Criteria

- [ ] **AC1:** `bash scripts/run_cli_pytest_coverage.sh` → **`cli/` aggregate ≥70%**.
- [ ] **AC2:** No module from FR-138 baseline table remains **&lt;40%**; Wave 1/2 per-file targets met.
- [ ] **AC3:** `cli-coverage` CI job fails on coverage regression below floor.
- [ ] **AC4:** FR-138 ↔ T24 bidirectional links; RW version anchor on ship. _(Version anchor **v0.8.3.24+1** @ kanban-init.)_
- [ ] **AC5:** Linked IPP under `docs/implementation-cycles/` before implementation (`IPW E08:S03:T24`).

---

## Associated Feature Request

- [FR-138 — CLI package test coverage gap closure](../../../fr-br/FR-138-cli-package-test-coverage-gap-closure.md) (primary)

---

## Implementation Notes

- **IPW required** before code changes ([FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)).
- Reuse existing CLI test fixtures and subprocess mocks; avoid live network or mutating git state in default suite.
- Default `pytest.ini` must **not** gain `--cov=cli` (UXR-030 contract).
- Coordinate with **E02:S16:T05** if `cli-coverage` workflow changes affect Actions CI parity.

---

## References

- [E08:S03:T21 — CLI pytest coverage dedicated target (UXR-030)](T21-cli-pytest-coverage-dedicated-target-uxr030.md)
- [E08:S03:T22 — Pytest warning cleanup (UXR-030 Wave 2)](T22-pytest-warning-cleanup-uxr030-wave2.md)
- [UXR-030 — Default pytest CLI coverage misleading 0%](../../../fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
