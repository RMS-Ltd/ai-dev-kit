# Detailed Changelog — v0.2.15.2+2

**Release date:** 20-04-26  
**Task:** E2:S15:T02  
**Mode:** RW with `--art`  
**SemVer:** v0.4.762+2

## Summary

Standardized FR-084/T02 governance wording to `IPP` and renamed the FR/task filenames from `...-ipw-...` to `...-ipp-...` while preserving traceability links and story/board wiring.

## Included

- FR/task filename and wording normalization:
  - `docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md` (new)
  - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md` (new)
  - removed legacy filenames:
    - `docs/project-management/kanban/fr-br/FR-084-ipw-post-run-governance-reconciliation-ownership.md`
    - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T02-ipw-post-run-governance-reconciliation-ownership-fr084.md`
- Link/reference updates:
  - `docs/project-management/kanban/fbuboard.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md`
  - `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.15.2+1.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E2:S15:T02" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S15:T02"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S15:T02" --confirmed-override` ✅
