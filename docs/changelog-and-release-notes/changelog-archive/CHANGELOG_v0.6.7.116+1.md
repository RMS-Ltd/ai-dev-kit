# Detailed Changelog — v0.6.7.116+1

**Release date:** 20-04-26  
**Task:** E6:S07:T116  
**Mode:** RW with `--art`  
**SemVer:** v0.4.763+1

## Summary

Filed FR-085 and housed task E6:S07:T116 for optional UKW reprioritization mode (`--rp`) with deep intent/dependency/blocker/importance analysis requirements.

## Included

- New FR intake:
  - `docs/project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md`
- New implementing task:
  - `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T116-ukw-optional-reprioritization-rp-flag-fr085.md`
- Story wiring:
  - `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md`
- Board wiring:
  - `docs/project-management/kanban/fbuboard.md`
  - `docs/project-management/kanban/kboard.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E6:S07:T116" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E6:S07:T116"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E6:S07:T116" --confirmed-override` ✅
