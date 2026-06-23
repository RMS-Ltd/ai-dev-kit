# Changelog — v0.8.3.24+3

**Release Date:** 2026-06-23 12:17:44 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 24  
**SemVer:** v0.4.1207  
**Task:** E08:S03:T24 — CLI package test coverage gap closure (FR-138) Phase 2

---

## Summary

Change implemented for FR-138 Phase 2 (Wave 4): hardened per-module CLI test coverage on the same task — aggregate **82%**, all Phase 2 module targets met while retaining the **70%** `cli-coverage` floor.

---

## Added

- `tests/cli/test_wave4_hardening.py` — Wave 4 tests for migration conversion/validation, backend error paths, install/remove failure branches, logs feedback/history helpers, and `adk_install_errors_bridge` caching.

## Changed

- `docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md` — Wave 4 amendment (§8) and Phase 2 closure status.
- `docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md` — Phase 2 COMPLETE; module target table updated post-ship.
- `docs/kanban/epics/epic-08/story-03-automation-scripts/T24-cli-package-test-coverage-gap-closure-fr138.md` — AC6–AC8 complete @ **v0.8.3.24+3**.
- `docs/kanban/epics/epic-08/story-03-automation-scripts.md` — T24 checklist COMPLETE.
- `docs/kanban/kboard.md` — T24 row terminal hygiene.

## Verification

- `bash scripts/run_cli_pytest_coverage.sh` — **TOTAL 82%** (floor 70% enforced); Phase 2 modules: `migration` 91%, `git_submodule` 75%, `git_subtree` 76%, `package_manager` 76%, `install` 87%, `remove` 80%, `adk_install_errors_bridge` 96%, `logs` 81%.

## Related

- [FR-138](docs/kanban/fr-br/FR-138-cli-package-test-coverage-gap-closure.md)
- [IPP E08:S03:T24](docs/implementation-cycles/IPP-E08S03T24-cli-package-test-coverage-gap-closure-fr138.md)
