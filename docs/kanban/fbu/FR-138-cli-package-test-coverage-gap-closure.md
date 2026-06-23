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
**Status:** CHANGE IMPLEMENTED (pending verification) — **Phase 1** @ **v0.8.3.24+2** (74.73%); **Phase 2 (Wave 4)** @ **v0.8.3.24+3** (82% aggregate, module targets met)

**Implementing Task:** [E08:S03:T24](../epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md)

**Depends on:** [UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md) (opt-in `pytest-cli-cov.ini` + `cli-coverage` CI lane — **E08:S03:T21**) · [E08:S03:T22](../epics/epic-08/story-03-automation-scripts/T22-pytest-warning-cleanup-uxr030-wave2.md) (warning cleanup)

**Related:** [FR-030](FR-030-ai-dev-kit-cli-tool.md) (CLI tool delivery — E06:S08) · [E07:S06:T08](../epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) (prior ~35% baseline) · [FR-112](FR-112-perpetual-github-ci-and-security-health-lanes.md) (CI health)

---

## Summary

Raise **`cli/`** pytest coverage from **~54%** to a **maintained ≥70% floor** (Phase 1 — shipped **v0.8.3.24+2** @ **74.73%**), then **harden high-risk modules** still at or near the floor (Phase 2 / Wave 4) without raising the global fail-under until targets are met.

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

**Risk:** Phase 1 closed the aggregate gap but several **adopter-critical paths** (migration orchestration, install backends, `install`/`remove`) remain only slightly above Wave 1 minimums; regressions in those modules may not move aggregate coverage below 70%.

---

## Phase 1 outcome (2026-06-23, post **v0.8.3.24+2**)

| Aggregate | Stmts | Miss | Cover |
| --------- | ----- | ---- | ----- |
| **TOTAL** | 2825 | 714 | **74.73%** |

`--cov-fail-under=70` enforced in `pytest-cli-cov.ini`; `cli-coverage` lane green locally.

**Residual gaps (Phase 2 — shipped @ v0.8.3.24+3):**

| Module | Phase 2 cover | Target | Met |
| ------ | ------------- | ------ | --- |
| `cli/migration.py` | 91% | ≥70% | ✅ |
| `cli/backends/git_submodule.py` | 75% | ≥75% | ✅ |
| `cli/backends/git_subtree.py` | 76% | ≥75% | ✅ |
| `cli/backends/package_manager.py` | 76% | ≥75% | ✅ |
| `cli/commands/install.py` | 87% | ≥75% | ✅ |
| `cli/commands/remove.py` | 80% | ≥75% | ✅ |
| `cli/adk_install_errors_bridge.py` | 96% | ≥85% | ✅ |
| `cli/commands/logs.py` | 81% | ≥80% | ✅ |

---

## Requirements

### Functional

- [x] **FR-138-F1:** Add pytest coverage for **Wave 1 — backends & migration** (`migration.py`, `commands/migrate.py`, `backends/git_submodule.py`, `backends/git_subtree.py`, `backends/package_manager.py`, `backends/selector.py`, `backends/base.py`) using **mocked subprocess / filesystem** patterns consistent with existing `tests/cli/` style.
- [x] **FR-138-F2:** Add pytest coverage for **Wave 2 — core commands** (`commands/check.py`, `commands/status.py`, `commands/update.py`, `adk_install_errors_bridge.py`, `exceptions.py`) including success, validation-failure, and ADK error-code paths.
- [x] **FR-138-F3:** Add pytest coverage for **Wave 3 — remaining gaps** (`commands/config.py`, `commands/install.py`, `commands/remove.py`, `commands/logs.py` uncovered branches, `config.py`, `logging.py`, `utils.py`) until aggregate **`cli/` ≥70%**.
- [x] **FR-138-F4:** Document wave plan and run instructions in `tests/README.md` and `cli/README.md` (reference `bash scripts/run_cli_pytest_coverage.sh`).
- [x] **FR-138-F5:** Add **`--cov-fail-under=70`** (or equivalent `pytest.ini` / `pytest-cli-cov.ini` setting) to the **dedicated** CLI coverage config and `cli-coverage` CI job — **not** default `pytest.ini` (preserves UXR-030 contract).

### Phase 2 — Wave 4 hardening ✅ @ v0.8.3.24+3

- [x] **FR-138-F6:** Deepen **`cli/migration.py`** coverage to **≥70%** (conversion orchestration, `detect`/`convert` paths, error branches).
- [x] **FR-138-F7:** Raise **`cli/backends/{git_submodule,git_subtree,package_manager}.py`** each to **≥75%** (subprocess failure, partial install, validation errors — mocked).
- [x] **FR-138-F8:** Raise **`cli/commands/{install,remove}.py`** each to **≥75%** (primary install/uninstall flows and failure branches).
- [x] **FR-138-F9:** Raise **`cli/adk_install_errors_bridge.py`** to **≥85%** (remaining ADK-I06 emission paths per FR-111).
- [x] **FR-138-F10:** Raise **`cli/commands/logs.py`** to **≥80%** where practical without slow integration tests.
- [x] **FR-138-F11:** Update IPP §3–§4 Wave 4 section (amend existing IPP — no new FR) before Phase 2 implementation ([FR-083](FR-083-global-ipw-gated-implementation-contract.md)).

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

### Phase 2 acceptance (Wave 4)

- [x] **AC6:** Phase 2 module targets in residual table met (`migration.py` ≥70%; backends/install/remove ≥75%; `adk_install_errors_bridge` ≥85%; `logs` ≥80% where practical).
- [x] **AC7:** Aggregate **`cli/`** remains **≥70%** (82% @ v0.8.3.24+3); no regression on modules already **≥80%** from Phase 1.
- [x] **AC8:** IPP amended with Wave 4 test design + plan before Phase 2 IDW; task reconciled on closure RW @ **v0.8.3.24+3**.

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
- Version: `v0.8.3.24+3` (Phase 2 Wave 4 @ MWF delivery); FR-138 closure on **E08:S03:T24**

**Kanban Links:**

- Story: [`story-03-automation-scripts.md`](../epics/epic-08/story-03-automation-scripts.md)
- Task: [`T24-cli-package-test-coverage-gap-closure-fr138.md`](../epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md)

---

## References

- [`pytest-cli-cov.ini`](../../pytest-cli-cov.ini)
- [`scripts/run_cli_pytest_coverage.sh`](../../scripts/run_cli_pytest_coverage.sh)
- [UXR-030](UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [E08:S03:T21](../epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md)
