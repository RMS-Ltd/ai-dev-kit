---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Release v0.7.6.8+1

**Release Date:** 2026-03-25 15:00:00 UTC  
**Epic:** Epic 7 - Codebase Maintenance and Review  
**Story:** Story 6 - Post-Windsurf Project Review  
**Task:** Task 08 - Dependency and tooling audit  
**Build:** 1

---

## Summary

E7:S06:T08: Audited `setup.py`, `requirements.txt`, `tests/requirements.txt` (no root `pyproject.toml`); documented dependency drift between published CLI and repo tooling deps. Ran `pytest`: 92 tests collected, 85 passed, 7 failed (pre-existing drift); **change implemented:** rewrote `tests/test_validation.py` to match current `cli.validation` API. Reviewed GitHub Actions (`fr-br-intake`, `update-badges`); confirmed no workflow named `Tests` despite `workflow_run` reference. Spot-reviewed `build_all_packages.sh` and `UPLOAD_COMMANDS.sh`. Filed **BR-058**; expanded T08 task doc.

---

## Changes

### Added

- **`docs/project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md`** — CI/test tracking

### Changed

- **`tests/test_validation.py`** — Aligned with `validate_framework_spec`, `validate_backend`, `validate_version_string`, `is_valid_version`, exception-based API
- **T08 task doc** — Full audit report, Version Anchor
- **Story-006, Epic-7, kanban-board, kanban-completed** — T08 closure

---

## Related Work

**Task:** [T08-dependency-and-tooling-audit.md](../../project-management/kanban/epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)  
**BR:** [BR-058](../../project-management/kanban/fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md)
