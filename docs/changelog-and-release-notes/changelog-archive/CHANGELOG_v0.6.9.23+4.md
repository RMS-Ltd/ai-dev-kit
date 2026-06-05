# CHANGELOG v0.6.9.23+4 — Greenfield workflow CI fixes (E06:S09:T23)

**Release Date:** 2026-06-05 12:20:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.960+4

---

## Summary

**E06:S09:T23 post-ship:** Fix `greenfield-install.yml` pytest invocation (override root `pytest.ini` cov addopts); narrow `greenfield-release.yml` tag filter to SemVer core pattern and remove invalid job `if` expression.

---

## Change implemented

- `.github/workflows/greenfield-install.yml` — `-o addopts=` for script-scoped pytest runs.
- `.github/workflows/greenfield-release.yml` — tag filter `v[0-9]+.[0-9]+.[0-9]+` only (excludes internal `v0.6.9.23+*` tags).
