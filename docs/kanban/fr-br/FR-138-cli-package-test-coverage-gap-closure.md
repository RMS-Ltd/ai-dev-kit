---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-23T10:14:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-138: CLI package test coverage gap closure

**Type:** Feature Request (FR)  
**ID:** FR-138  
**Submitted:** 2026-06-23  
**Submitted By:** Operator — `cli-coverage` CI report (Python 3.14.6, **54%** aggregate)  
**Priority:** MEDIUM  
**Status:** CHANGE IMPLEMENTED (pending downstream verification) @ **v0.8.3.24+2**

**Implementing Task:** [E08:S03:T24](../epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md)

**Depends on:** [UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) (opt-in `pytest-cli-cov.ini` + `cli-coverage` CI lane — **E08:S03:T21**) · [E08:S03:T22](../epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md) (warning cleanup)

**Related:** [FR-030](FR-030-ai-dev-kit-cli-tool.md) (CLI tool delivery — E06:S08) · [E07:S06:T08](../epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) (prior ~35% baseline) · [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md) (CI health)

---

## Summary

Raise **`cli/`** pytest coverage from the current **~54%** aggregate to a **maintained floor (≥70%)** by adding targeted unit and integration tests for the lowest-covered modules — especially install backends, migration paths, and thin command wrappers — and enforcing the floor in the dedicated `cli-coverage` lane.

---

## Problem Statement

[UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) / **E08:S03:T21** delivered accurate, opt-in CLI coverage measurement (`pytest-cli-cov.ini`, `scripts/run_cli_pytest_coverage.sh`, `tests.yml` **`cli-coverage`** job). The lane now reports **real** gaps instead of misleading 0% on unrelated runs.

**Baseline (2026-06-23, `cli-coverage` / Python 3.14.6):**

| Aggregate | Stmts | Miss | Cover |
| --------- | ----- | ---- | ----- |
| **TOTAL** | 2825 | 1298 | **54%** |

**Lowest-covered modules (priority targets):**

| Module | Cover | Gap class |
| ------ | ----- | --------- |
| `cli/migration.py` | 12% | Migration orchestration |
| `cli/commands/migrate.py` | 17% | User-facing migrate command |
| `cli/backends/git_subtree.py` | 19% | Install backend |
| `cli/backends/git_submodule.py` | 21% | Install backend |
| `cli/adk_install_errors_bridge.py` | 24% | FR-111 error surface |
| `cli/backends/package_manager.py` | 26% | Install backend |
| `cli/commands/check.py` | 27% | Core command |
| `cli/commands/status.py` | 26% | Core command |
| `cli/commands/update.py` | 28% | Core command |
| `cli/exceptions.py` | 47% | Error taxonomy / formatting |
| `cli/commands/config.py` | 59% | Config subcommands |
| `cli/commands/install.py` | 65% | Core command |

Modules already **≥80%** (`localisation.py`, `main.py`, `init.py`, `validation.py`, etc.) need only regression guards when adjacent code changes.

**Risk:** Install/migrate/backend paths are high-impact for adopters but lightly exercised in tests; regressions can ship while `cli-coverage` stays green at 54%.

---

## Requirements

### Functional

- [x] **FR-138-F1:** Add pytest coverage for **Wave 1 — backends & migration** (`migration.py`, `commands/migrate.py`, `backends/git_submodule.py`, `backends/git_subtree.py`, `backends/package_manager.py`, `backends/selector.py`, `backends/base.py`) using **mocked subprocess / filesystem** patterns consistent with existing `tests/cli/` style.
- [x] **FR-138-F2:** Add pytest coverage for **Wave 2 — core commands** (`commands/check.py`, `commands/status.py`, `commands/update.py`, `adk_install_errors_bridge.py`, `exceptions.py`) including success, validation-failure, and ADK error-code paths.
- [x] **FR-138-F3:** Add pytest coverage for **Wave 3 — remaining gaps** (`commands/config.py`, `commands/install.py`, `commands/remove.py`, `commands/logs.py` uncovered branches, `config.py`, `logging.py`, `utils.py`) until aggregate **`cli/` ≥70%**.
- [x] **FR-138-F4:** Document wave plan and run instructions in `tests/README.md` and `cli/README.md` (reference `bash scripts/run_cli_pytest_coverage.sh`).
- [x] **FR-138-F5:** Add **`--cov-fail-under=70`** (or equivalent `pytest.ini` / `pytest-cli-cov.ini` setting) to the **dedicated** CLI coverage config and `cli-coverage` CI job — **not** default `pytest.ini` (preserves UXR-030 contract).

### Non-functional

- [x] **FR-138-NF1:** Prefer **fast unit tests** with mocks over live git/npm/pip invocations; mark unavoidable slow integration tests with `@pytest.mark.slow` / `integration`.
- [x] **FR-138-NF2:** No reduction of existing coverage on modules already ≥80%.
- [x] **FR-138-NF3:** RW Step 9.7 `cli-coverage` parity remains green when `cli/**` or `tests/**` CLI tests change.
- [x] **FR-138-NF4:** Tests remain compatible with **Python 3.11+** policy ([FR-104](FR-104-python-minimum-version-policy-alignment.md)).

---

## Scope Analysis

**Problem Domain:** ai-dev-kit CLI — test automation and quality gates  
**Affected Areas:**

- [x] Testing (`tests/cli/`, `tests/test_commands.py`, new focused modules as needed)
- [x] CI (`.github/workflows/tests.yml` `cli-coverage` job)
- [x] Tooling (`pytest-cli-cov.ini`, `scripts/run_cli_pytest_coverage.sh`)
- [x] Documentation (`tests/README.md`, `cli/README.md`)
- [ ] Application behaviour changes (out of scope unless tests expose bugs — file follow-up BR)

**Estimated Complexity:** Complex (2+ weeks — phased waves; large backend surface)

---

## Acceptance Criteria

- [x] **AC1:** `bash scripts/run_cli_pytest_coverage.sh` reports **`cli/` aggregate ≥70%** on CI Python version matrix (3.11+).
- [x] **AC2:** Wave 1 modules each **≥50%**; Wave 2 command modules each **≥60%**; no module in the FR baseline table remains **&lt;40%** after closure.
- [x] **AC3:** `pytest-cli-cov.ini` (or runner) enforces **`--cov-fail-under=70`**; `cli-coverage` job fails when floor regresses.
- [x] **AC4:** FR-138 ↔ E08:S03:T24 bidirectional links; story checklist and board row updated.
- [x] **AC5:** IPW produces linked IPP before implementation ([FR-083](FR-083-global-ipw-gated-implementation-contract.md)).

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-23  
**Intake By:** Agent (Cursor — FR intake)

**Decision Flow Results:**

- [x] Story Match Found: **Epic 8, Story 3 (Automation Scripts)** — continues UXR-030 / T21–T22 CLI test lane → **Task T24**

**Assigned To:**

- Epic: **8** — Automation Scripts / repository CI
- Story: **E08:S03** — Automation Scripts
- Task: **E08:S03:T24** — CLI package test coverage gap closure (FR-138)
- Version: `v0.8.3.24+1` (kanban-init @ RW -k E08:S03:T24 --art)

**Kanban Links:**

- Story: [`story-03-automation-scripts.md`](../epics/epic-08/story-03-automation-scripts.md)
- Task: [`T24-cli-package-test-coverage-gap-closure-fr138.md`](../epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md)

---

## References

- [`pytest-cli-cov.ini`](../../pytest-cli-cov.ini)
- [`scripts/run_cli_pytest_coverage.sh`](../../scripts/run_cli_pytest_coverage.sh)
- [UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [E08:S03:T21](../epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md)
