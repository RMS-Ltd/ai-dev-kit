# Changelog v0.8.3.13+4

**Release Date:** 2026-06-06 13:02:41 UTC  
**Epic | Story | Task:** E08:S03:T13 (`RW --art`)  
**SemVer (task_touch):** v0.4.998+4  

## Summary

**Change implemented:** BR-100 wave-3 reliability burn-down — **12** Standard findings fixed (`py/use-of-exit-or-quit`: `exit(main())` → `sys.exit(main())`) across kanban installer scripts and `uninstall_package.py` in `packages/` and `greenfield-install/` mirrors. **16** `py/print-during-import` remain (T12 scope). Reliability score **Fair** @ post-wave-2 re-scan; dashboard re-scan pending post-merge.

## Changed

- `packages/frameworks/kanban/scripts/detect_existing_structure.py` — `import sys`; `sys.exit(main())`
- `packages/frameworks/kanban/scripts/migrate_structure.py` — `sys.exit(main())`
- `packages/frameworks/kanban/scripts/analyze_structure.py` — `sys.exit(main())`
- `packages/frameworks/kanban/scripts/validate_installation.py` — `sys.exit(main())`
- `packages/frameworks/kanban/scripts/install_kanban_framework.py` — `sys.exit(main())`
- `packages/frameworks/workflow-mgt/scripts/uninstall_package.py` — `sys.exit(main())`
- Same six entrypoints mirrored under `greenfield-install/packages/frameworks/`

## Verification

- `python3.11 -m pytest tests/` — **407 passed**, 2 skipped
- Local grep `exit(main())` — **0** in wave-3 file set
- Expected post-merge reliability open count: **16** (print-at-import → T12 only)

## Kanban / intake

- **E08:S03:T13** — wave-3 shipped @ **v0.8.3.13+4**; status **COMPLETE** (BR-100 waves 1–3 done)
- **BR-100** — **RESOLVED** @ v0.8.3.13+4; **16** print-at-import deferred to T12
- **kboard** — T13 row archived to `kanban-completed.md`

## References

- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [T13](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T13](../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
