---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-091: Workflow validators hardcode legacy `workflow mgt` path — CI pytest gate fails

**Bug ID:** BR-091  
**Priority:** HIGH  
**Severity:** HIGH — **`Workflow scripts pytest`** fails on every push to `dev`/`main` that touches `packages/frameworks/workflow-mgt/**` (~16 failures since May 2026).  
**Status:** FIXED ✅  
**Created:** 2026-06-05
**Last updated:** 2026-06-05 — verification closure **v0.7.7.3+1** (CI pytest green `dev` + `main`; local 105/105). See [evidence](../../maintenance/v-band-verification-scan-2026-06-05.md).
**Version:** v0.7.7.3+1  
**Implementing Task:** [E07:S07:T03](../epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md)  
**Related:** [BR-087](./BR-087-framework-install-directory-slug-mismatch.md) (install slug migration) · [E07:S07:T02](../epics/epic-07/story-07-code-reviews/T02-ci-pytest-gate-for-workflow-scripts.md) (gate that exposes this defect)

---

## Summary

FR-098 validators `validate_adk_ecc_skill_pack.py` and `validate_ecc_adk_bridge.py` resolve the workflow framework directory as `packages/frameworks/workflow mgt` (legacy name with space). The ai-dev-kit monorepo uses **`packages/frameworks/workflow-mgt`**. CI reports **4 failing tests** and validators exit code **2** instead of expected **0**/**1**.

---

## Problem Description

### Observed behavior (GitHub Actions, 2026-06-04)

Workflow **`Workflow scripts pytest`** fails:

```
FAILED test_validate_adk_ecc_skill_pack.py::test_validator_passes_on_ai_dev_kit_repo
ERROR: workflow framework directory not found: .../packages/frameworks/workflow mgt

FAILED test_validate_ecc_adk_bridge.py::test_validator_passes_on_template
ERROR: workflow mgt not found under .../ai-dev-kit
```

101 other tests pass; **4 fail** consistently.

### Root cause

```python
def workflow_mgt_dir(project_root: Path) -> Path:
    return project_root / "packages" / "frameworks" / "workflow mgt"
```

Hardcoded in:

- `packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py`

Canonical on-disk slug is **`workflow-mgt`** (see `framework_install_slug.py` **`LEGACY_SOURCE_DIR_TO_SLUG`**).

### Impact

- **`Workflow scripts pytest`** gate red on routine workflow-mgt changes.
- Validators unusable against the monorepo layout without manual symlinks or renames.
- Contributes to repo-wide **~84% GitHub Actions job failure rate** (maintainer report, 2026-06-05).

---

## Expected behavior

- Validators resolve **`workflow-mgt`** first; optionally fall back to legacy **`workflow mgt`** for adopter trees that have not migrated.
- `bash packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh` exits **0** on CI.
- `validate_adk_ecc_skill_pack.py` and `validate_ecc_adk_bridge.py` exit **0** against repo root without path errors.

---

## Proposed fix

- Introduce shared path resolution (e.g. reuse or mirror `framework_install_slug.py` / detect slug then legacy).
- Update **`workflow_mgt_dir()`** in both validators to prefer **`workflow-mgt`**.
- Ensure temp-dir fixtures in tests remain valid (tests already use `workflow-mgt` paths).

---

## Acceptance criteria

- [ ] **`workflow_mgt_dir()`** resolves `packages/frameworks/workflow-mgt` in ai-dev-kit monorepo.
- [ ] Legacy **`workflow mgt`** directory still supported when present (adopter backward compatibility).
- [ ] **`run_workflow_scripts_ci_pytest.sh`** — all tests pass locally and in **`.github/workflows/workflow-scripts-pytest.yml`**.
- [ ] No regression to canonical path strings (`packages/frameworks/workflow-mgt/skills/`) in bridge template checks.

---

## Steps to reproduce

1. Clone ai-dev-kit; `cd` repo root.
2. `python packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py`
3. Observe: `ERROR: workflow framework directory not found: .../workflow mgt`
4. Or: push any change under `packages/frameworks/workflow-mgt/**` and watch **`Workflow scripts pytest`** fail.

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-05  
**Assigned to:** Epic 7, Story 7, Task 3 — [T03](../epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md)
