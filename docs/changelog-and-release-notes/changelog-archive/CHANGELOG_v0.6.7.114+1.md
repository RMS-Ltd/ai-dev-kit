# Detailed Changelog — v0.6.7.114+1

**Release date:** 20-04-26  
**Task:** E6:S07:T114  
**Mode:** RW with `--art`  
**SemVer:** v0.4.757+1

## Summary

Released canonical board filename migration with governance-complete backfill artifacts.

## Included

- Canonical board defaults operationalized:
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/fbuboard.md`
- Legacy board aliases retained:
  - `docs/project-management/kanban/kanban-board.md`
  - `docs/project-management/kanban/fr-br-uxr-board.md`
- UXR/task/ICW traceability backfill:
  - `UXR-008` implementing task set to `E6:S07:T114`
  - `T114` task created and story checklist wired
  - ICW package created:
    - `ICW-E6S07T114-specification.md`
    - `ICW-E6S07T114-test-design.md`
    - `ICW-E6S07T114-implementation-plan.md`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4` ✅
- `npm run build` from `portal/` ✅
