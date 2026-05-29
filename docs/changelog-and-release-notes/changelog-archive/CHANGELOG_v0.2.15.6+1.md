# Detailed Changelog — v0.2.15.6+1

**Release date:** 27-04-26  
**Task:** E2:S15:T06  
**Mode:** RW with `--art`  
**SemVer:** v0.4.765+1

## Summary

Published the FR-091 intake package and task activation to formalize the RW/UKW responsibility philosophy: RW must close release-scope kanban reconciliation autonomously, while UKW remains reactive drift cleanup and not a dependency for release correctness.

## Included

- Added new intake and delivery anchor:
  - `docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md`
- Wired story and boards for discoverability:
  - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md`
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/fbuboard.md`
- Updated release metadata:
  - `src/fynd_deals/version.py`
  - `README.md`
  - `CHANGELOG.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E2:S15:T06" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S15:T06"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S15:T06" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested "E2:S15:T06" --art` ✅
