# Detailed Changelog — v0.2.16.1+3

**Release date:** 27-04-26  
**Task:** E2:S16:T01  
**Mode:** RW with `--art`  
**SemVer:** v0.4.764+3

## Summary

Published the canonical planning artifact for Story 016 perpetual-task governance and completed deterministic wiring from task/FR/story/board surfaces to the IPP, including validator-compatible publication-status semantics.

## Included

- Published canonical IPP artifact:
  - `docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`
- Updated host task and story wiring:
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md`
- Updated source FR wiring:
  - `docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md`
- Updated board discoverability rows:
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/fbuboard.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E2:S16:T01" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S16:T01"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S16:T01" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E2:S16:T01` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested "E2:S16:T01" --art` ✅
