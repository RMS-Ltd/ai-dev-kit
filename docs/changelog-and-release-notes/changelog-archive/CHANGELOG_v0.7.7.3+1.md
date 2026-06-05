# Changelog v0.7.7.3+1

**Release Date:** 2026-06-05 00:34:25 UTC  
**Epic | Story | Task:** E07:S07:T03  
**SemVer (task_touch):** v0.4.895+1  

## Summary

Attempted fix for **BR-091**: FR-098 validators resolve `packages/frameworks/workflow-mgt` (canonical slug first, legacy `workflow mgt` fallback). Bridge template `adk_skill_pack_path` aligned to canonical skills path. Workflow scripts pytest suite: **105 passed**.

## Attempted Fixes

- Added `workflow_mgt_package_dir()` / `workflow_mgt_package_dir_missing_hint()` in `framework_install_slug.py`
- Updated `validate_adk_ecc_skill_pack.py` and `validate_ecc_adk_bridge.py` to use shared resolver
- Fixed `ecc-adk-bridge.yaml.template` canonical `adk_skill_pack_path`
- Extended `tests/test_framework_install_slug.py` for resolver coverage
- IPP: [IPP-E07S07T03](../implementation-cycles/IPP-E07S07T03-workflow-validator-slug-path-resolution-br091.md)

## Verification

- Local: `bash packages/frameworks/workflow-mgt/scripts/validation/run_workflow_scripts_ci_pytest.sh` → 105 passed
- GitHub **Workflow scripts pytest** on `dev`/`main` — pending post-push confirmation

## References

- [BR-091](../project-management/kanban/fr-br/BR-091-workflow-validator-legacy-workflow-mgt-path-hardcoded.md)
- [T03](../project-management/kanban/epics/epic-07/story-07-code-reviews/T03-workflow-validator-slug-path-resolution-br091.md)
