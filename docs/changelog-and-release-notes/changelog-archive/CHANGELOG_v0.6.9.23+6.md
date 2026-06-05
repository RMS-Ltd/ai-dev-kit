# CHANGELOG v0.6.9.23+6 — CI workflow fixes (Tests + workflow-scripts pytest) (E06:S09:T23)

**Release Date:** 2026-06-05 11:09:57 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.962+6

---

## Summary

**E06:S09:T23 post-ship CI:** Fix **Tests** workflow pip cache path (`setup.py` replaces missing `pyproject.toml`); restore `load_rw_config()` in `semver_converter.py` so workflow-scripts pytest collects cleanly.

### Changed

- `.github/workflows/tests.yml` — `cache-dependency-path: setup.py`
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` — backward-compatible `load_rw_config()` alias
