# Detailed Changelog — v0.2.15.2+1

**Release date:** 20-04-26  
**Task:** E2:S15:T02  
**Mode:** RW with `--art`  
**SemVer:** v0.4.760+1

## Summary

Filed FR-084 and anchored E2:S15:T02 to make IPW explicitly responsible for post-run governance reconciliation across host task docs, source FR/BR/UXR docs, `kboard`, and `fbuboard`.

## Included

- New FR intake:
- `docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md`
- New implementing task:
- `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md`
- Story wiring:
  - `docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract.md`
- Board wiring:
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/fbuboard.md`
- Related closeout reconciliation carried in same release set:
  - `docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md`
  - `docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md`
  - `docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E2:S15:T02" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S15:T02"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S15:T02" --confirmed-override` ✅
