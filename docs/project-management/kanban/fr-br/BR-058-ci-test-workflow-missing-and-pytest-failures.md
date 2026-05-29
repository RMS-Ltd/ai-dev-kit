---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-058: Missing `Tests` CI Workflow and Stale Pytest Failures

**Bug ID:** BR-058  
**Task ID:** E7:S06:T08 (audit finding)  
**Priority:** MEDIUM  
**Severity:** MEDIUM (CI integration dead; local test signal degraded)  
**Status:** OPEN  
**Created:** 2026-03-25  
**Classification:** CI/CD + test maintenance

---

## Bug Summary

**Update (2026-03-30, E5:S01:T69 / FR-064):** `update-badges.yml` was **removed** from this repo (BYOB / orphan `shields` branch retirement). The former **`workflow_run: ["Tests"]`** dead trigger is therefore **moot**; only disabled intake reference files remain under `.github/workflows/` aside from any future workflows.

Separately, **`pytest`** at repo root reports **7 failing tests** (85 passed, 92 collected after fixing import drift in `tests/test_validation.py`). Failures indicate outdated tests relative to current CLI/backend APIs and environment-specific path expectations.

---

## Problem Description

### Observed Behavior

- `workflow_run.workflows: ["Tests"]` in `update-badges.yml` has no matching workflow file.
- `python3 -m pytest tests/` (2026-03-25): 7 failures:
  - `tests/test_backends.py` — `PackageManagerBackend` is abstract; tests instantiate it directly (3 failures).
  - `tests/test_integration.py` — `MockBackend()` missing required `name` argument.
  - `tests/test_utils.py` — `get_project_root` resolves via `/private/var/...` on macOS while tests compare to `/var/...` (2 failures).
  - `tests/workflow-mgmt/test_implementation_cycle_workflow.py` — `test_icw_workflow_customization` expects merged YAML to retain `phases` key; merge result differs.

### Impact

- No automated pytest on push/PR for this repo.
- Badge updates tied to `Tests` completion are effectively **dead code** until a `Tests` workflow exists or the trigger is removed/retargeted.
- Contributors cannot rely on a green `pytest` run without addressing the above.

---

## Proposed Solutions

1. **Add** `.github/workflows/tests.yml` (or rename existing) with `name: Tests` running `pip install -e ".[dev]"` / `tests/requirements.txt` and `pytest`, on `pull_request` and `push` to main/epic branches; **or** remove/rewrite the `workflow_run` block in `update-badges.yml` if tests are intentionally not automated yet.
2. **Update** failing tests to match current APIs (`NpmBackend`/`PipBackend` vs abstract base, `MockBackend` signature, `Path.resolve()` in assertions, ICW YAML merge expectations).

---

## Related Work

- **Audit:** [T08-dependency-and-tooling-audit.md](../epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)  
  
- **Workflow:** `update-badges.yml` was **removed** from this repo (see **Bug Summary**); historical file: [update-badges.yml (last known commit search)](https://github.com/earlution/ai-dev-kit/commits/main/.github/workflows)
