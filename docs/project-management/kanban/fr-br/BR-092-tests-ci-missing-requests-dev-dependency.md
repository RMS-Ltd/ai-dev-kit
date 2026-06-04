---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-092: `Tests` CI workflow missing `requests` — pytest collection error

**Bug ID:** BR-092  
**Priority:** HIGH  
**Severity:** MEDIUM — **`Tests`** workflow fails at collection on pushes to `dev`/`main` (~6 failures since May 2026); local devs with `requirements.txt` pre-installed may not reproduce.  
**Status:** OPEN  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.8.3.7+0 — Kanban documentation setup)  
**Version:** v0.8.3.7+0  
**Implementing Task:** [E08:S03:T07](../epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md)  
**Related:** [BR-058](./BR-058-ci-test-workflow-missing-and-pytest-failures.md) (original Tests workflow — **RESOLVED**; this is a **regression / gap** in dev extras) · [E08:S03:T04](../epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md)

---

## Summary

GitHub Actions **`Tests`** runs `pip install -e ".[dev]"` then `pytest tests/`. Collection fails because **`requests`** is not declared in `setup.py` **`[dev]`** extras, yet `tests/test_framework_install_slug.py` imports `install_package_from_release`, which imports **`requests`**.

---

## Problem Description

### Observed behavior (GitHub Actions, 2026-06-04)

```
ERROR collecting tests/test_framework_install_slug.py
ModuleNotFoundError: No module named 'requests'
```

338 items collected / 1 error → exit code **2**.

### Root cause

| Location | `requests` declared? |
|----------|------------------------|
| `requirements.txt` | ✅ `requests>=2.28.0` |
| `setup.py` `install_requires` | ❌ |
| `setup.py` `extras_require["dev"]` | ❌ |
| `.github/workflows/tests.yml` install step | `pip install -e ".[dev]"` only |

Scripts under `packages/frameworks/workflow-mgt/scripts/` (`install_package_from_release.py`, `create_github_release.py`, etc.) depend on **`requests`**.

### Impact

- **`Tests`** workflow red on routine pushes to **`dev`** and **`main`**.
- CI gives false-negative signal; contributors may see green locally if `requirements.txt` was installed separately.
- Contributes to repo-wide **~84% GitHub Actions job failure rate** (maintainer report, 2026-06-05).

---

## Expected behavior

- **`Tests`** workflow completes with **`pytest tests/`** collection and execution green on CI.
- Dev install path (`pip install -e ".[dev]"`) includes all dependencies required by the test suite.

---

## Proposed fix

**Preferred:** Add **`requests>=2.28.0`** to `setup.py` **`extras_require["dev"]`** (align with `requirements.txt`).

**Alternative:** Change **`.github/workflows/tests.yml`** to also install `requirements.txt` or add a dedicated `tests/requirements.txt`.

---

## Acceptance criteria

- [ ] Fresh CI-style env: `pip install -e ".[dev]"` + `pytest tests/` — **no collection errors**.
- [ ] **`Tests`** workflow passes on `dev` and `main` push.
- [ ] Dependency declaration documented if split between `setup.py` and `requirements.txt`.

---

## Steps to reproduce

1. Clean Python 3.11 venv.
2. `pip install -e ".[dev]"` (only — do not install `requirements.txt`).
3. `python -m pytest tests/test_framework_install_slug.py --collect-only`
4. Observe **`ModuleNotFoundError: No module named 'requests'`**.

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-05  
**Assigned to:** Epic 8, Story 3, Task 7 — [T07](../epics/epic-08/story-03-automation-scripts/T07-tests-ci-requests-dependency-br092.md)
