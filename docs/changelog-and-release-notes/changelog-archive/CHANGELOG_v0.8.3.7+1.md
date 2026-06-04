# Changelog v0.8.3.7+1

**Release Date:** 2026-06-04 23:51:26 UTC  
**Epic | Story | Task:** E08:S03:T07  
**SemVer (task_touch):** v0.4.890+1  

## Summary

**Change implemented:** Add **`requests>=2.28.0`** to `setup.py` **`extras_require["dev"]`** and **`tests/requirements.txt`** so CI **`pip install -e ".[dev]"`** satisfies root test collection (fixes **BR-092** `ModuleNotFoundError` on `tests/test_framework_install_slug.py`).

## Changes

- **`setup.py`** — `requests>=2.28.0` in `[dev]` extras (aligns with `requirements.txt`)
- **`tests/requirements.txt`** — parity pin for alternate contributor install path
- **IPP** — [IPP-E08S03T07-tests-ci-requests-dependency-br092.md](../implementation-cycles/IPP-E08S03T07-tests-ci-requests-dependency-br092.md)

## Verification

- Local (clean Python 3.11 venv, `pip install -e ".[dev]"` only): `pytest tests/test_framework_install_slug.py --collect-only` ✅; full `pytest tests/` — **348 passed**, 1 skipped
- CI: **Tests** workflow pending post-push verification

## References

- [BR-092](../project-management/kanban/fr-br/BR-092-tests-ci-missing-requests-dev-dependency.md)
- [T07](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md)
