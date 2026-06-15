# Changelog v0.8.3.21+1

**Release Date:** 2026-06-15 19:22:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 21  
**SemVer:** v0.4.1175+1

---

## Summary

E08:S03:T21 — Split CLI pytest coverage into an opt-in dedicated target (UXR-030); default pytest no longer reports misleading 0% CLI coverage on non-CLI runs.

---

## Change implemented

### Test configuration

- Removed `--cov=cli` from default `pytest.ini` `addopts`.
- Added `pytest-cli-cov.ini` and `scripts/run_cli_pytest_coverage.sh` for opt-in CLI coverage (HTML report under `htmlcov/cli/`).

### CI / parity

- Added parallel **`cli-coverage`** job to `.github/workflows/tests.yml`; extended path filters with `cli/**`.
- Added **`cli-coverage`** check to `validate_actions_ci_parity.py` (RW Step 9.7).

### Documentation

- Updated `tests/README.md`, `cli/README.md`, validation README, and CLI publishing guide.

### Intake / Kanban

- Filed **UXR-030** and **E08:S03:T21**; UXR marked IMPLEMENTED on this release.

---

## Related

- [UXR-030](../../kanban/fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [E08:S03:T04](../../kanban/epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md)
- [E08:S03:T19](../../kanban/epics/epic-08/story-03-automation-scripts/T19-workflow-scripts-pytest-tuple-return-false-green-br103.md)
