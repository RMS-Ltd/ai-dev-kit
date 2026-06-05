---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 7, Task 3: Workflow validator slug path resolution (**BR-091**)

**Task ID:** E07:S07:T03  
**Status:** ✅ COMPLETE  
**Version Anchor:** ✅ COMPLETE (v0.7.7.3+1)  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.7.7.3+1 — BR-091 fix attempted; pytest 105/105)  
**Version:** v0.7.7.3+1  
**Code:** E07S07T03

**Upstream:** [BR-091 — Workflow validators hardcode legacy `workflow mgt` path](../../../fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E07S07T03 — Workflow validator slug path resolution](../../../../../../implementation-cycles/IPP-E07S07T03-workflow-validator-slug-path-resolution-br091.md)
- [BR-091](../../../fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)
- [`validate_adk_ecc_skill_pack.py`](../../../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_adk_ecc_skill_pack.py)
- [`validate_ecc_adk_bridge.py`](../../../../../../packages/frameworks/workflow-mgt/scripts/validation/validate_ecc_adk_bridge.py)
- [`framework_install_slug.py`](../../../../../../packages/frameworks/workflow-mgt/scripts/framework_install_slug.py)
- [E07:S07:T02 — CI pytest gate](./T02-ci-pytest-gate-for-workflow-scripts.md)

---

## Deliverable

Fix **`workflow_mgt_dir()`** resolution in FR-098 validators to use canonical **`workflow-mgt`** slug with legacy fallback.

---

## Acceptance criteria

- [x] Validators resolve `packages/frameworks/workflow-mgt` in ai-dev-kit monorepo.
- [x] Legacy `packages/frameworks/workflow mgt` still supported when present (`workflow_mgt_package_dir` + unit tests).
- [x] **`run_workflow_scripts_ci_pytest.sh`** — 105 tests pass (0 failures) — verified locally 2026-06-05.
- [ ] **`.github/workflows/workflow-scripts-pytest.yml`** green on `dev`/`main` — pending post-push CI confirmation.

---

## References

- [IPP-E07S07T03](../../../../../../implementation-cycles/IPP-E07S07T03-workflow-validator-slug-path-resolution-br091.md)
- [BR-091](../../../fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)
- [BR-087](../../../fr-br/BR-087-framework-install-directory-slug-mismatch.md)
