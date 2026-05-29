# Detailed Changelog — v0.6.7.113+2

**Release Date:** 2026-04-13 15:47:19 UTC  
**Version:** `v0.6.7.113+2`  
**SemVer:** `v0.4.733+2`  
**Task Anchor:** `E6:S07:T113`

---

## Summary

Change implemented: fix RW Step 12.5 parser handling for `v`-prefixed internal version inputs and add deterministic validation diagnostics with regression tests.

---

## Changed

- Updated `create_github_release.py` to normalize `--internal-version` inputs with optional leading `v` before semver strategy parsing.
- Added deterministic, argument-aware validation errors for malformed internal version values.
- Added parser regression test suite:
  - `packages/frameworks/workflow mgt/scripts/version/test_create_github_release_parsing.py`
- Updated BR-065 and T113 evidence with implementation and verification outputs.

---

## Verification

- `python -m pytest "packages/frameworks/workflow mgt/scripts/version/test_create_github_release_parsing.py" -q` -> `5 passed`
- Script run with `--internal-version "v0.6.7.113+1"` no longer raises `invalid literal for int() with base 10: 'v0'`.

---

## Traceability

- Epic: `6`
- Story: `7`
- Task: `113`
