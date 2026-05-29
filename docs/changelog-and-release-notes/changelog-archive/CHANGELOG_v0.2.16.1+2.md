# Detailed Changelog — v0.2.16.1+2

**Release date:** 20-04-26  
**Task:** E2:S16:T01  
**Mode:** RW -d with `--art`  
**SemVer:** v0.4.764+2

## Summary

Expanded Story 016 planning to explicitly retire legacy perpetual `T101+` numbering and require renumbered non-`T101+` task IDs during migration.

## Included

- Updated planning task:
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`
- Supporting planning/task docs updated in same change set:
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --requested "E2:S16:T01" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E2:S16:T01"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E2:S16:T01" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested "E2:S16:T01" --art` ✅
