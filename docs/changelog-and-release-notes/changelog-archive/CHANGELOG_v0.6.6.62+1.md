# Detailed Changelog — v0.6.6.62+1

**Release date:** 20-04-26  
**Task:** E6:S06:T62  
**Mode:** RW with `--art`  
**SemVer:** v0.4.757+1

## Summary

Established and released a repository-wide implementation gate that requires IPW completion plus explicit user execution authorization before any implementation work.

## Included

- Governance contract added to core rule sources:
  - `AGENTS.md`
  - `.cursorrules`
- Intake and task wiring for the new contract:
  - `docs/project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md`
  - `docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md`
  - `docs/project-management/kanban/epics/Epic-6/Story-006-feature-requests.md`
- Board visibility updates:
  - `docs/project-management/kanban/fbuboard.md`
  - `docs/project-management/kanban/kboard.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E6:S06:T62" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E6:S06:T62"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E6:S06:T62" --confirmed-override` ✅
