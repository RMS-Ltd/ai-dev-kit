# Changelog — v0.8.3.24+2

**Release Date:** 2026-06-23 11:03:54 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 24  
**SemVer:** v0.4.1204  
**Task:** E08:S03:T24 — CLI package test coverage gap closure (FR-138)

---

## Summary

Change implemented for FR-138 to close the CLI test coverage gap from a 54% baseline to a sustained floor above 70% in the dedicated `cli-coverage` lane.

---

## Added

- `tests/cli/test_backends.py` — backend and selector coverage for git submodule/subtree and package managers with mocked subprocess behavior.
- `tests/cli/test_migration.py` — migration orchestration and migrate command coverage.
- `tests/cli/test_check_command.py` — command path coverage for check flows.
- `tests/cli/test_status_command.py` — command path coverage for status flows.
- `tests/cli/test_update_command.py` — command path coverage for update flows.
- `tests/cli/test_errors_bridge.py` — error bridge behavior and merge semantics coverage.
- `tests/cli/test_config_command.py` — config command action coverage.
- `tests/cli/test_config_module.py` — configuration module behavior coverage.
- `tests/cli/test_logging_module.py` — install log contract and logger lifecycle coverage.
- `tests/cli/test_utils.py` — utility function branch coverage.
- `tests/cli/test_exceptions.py` — exception hierarchy and formatting coverage.

## Changed

- `tests/cli/test_remove_command.py` — added keep-files branch coverage.
- `tests/cli/test_logs_command.py` — added missing log directory handling coverage.
- `pytest-cli-cov.ini` — enforced `--cov-fail-under=70` for dedicated CLI coverage runs.
- `tests/README.md` and `cli/README.md` — documented FR-138 wave plan and run guidance.
- `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` — IDW implementation status and acceptance tracking updated.
- `docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md` — FR progress and acceptance checklist updated to match implementation status.

## Verification

- `bash scripts/run_cli_pytest_coverage.sh` reports `cli/` aggregate coverage above the 70% gate.
- Local CodeQL CQG rerun completed; remaining maintainability warnings are pre-existing repository-wide findings outside this task scope.

## Related

- [FR-138](docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md)
- [IPP E08:S03:T24](docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)
