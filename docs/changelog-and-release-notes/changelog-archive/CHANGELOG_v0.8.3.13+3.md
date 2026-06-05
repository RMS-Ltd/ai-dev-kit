# Changelog v0.8.3.13+3

**Release Date:** 2026-06-05 17:09:45 UTC  
**Epic | Story | Task:** E08:S03:T13 (`RW --art`)  
**SemVer (task_touch):** v0.4.992+3  

## Summary

**Change implemented:** BR-100 wave-2 reliability burn-down — **6** Standard findings fixed (`py/mixed-returns` ×4, `py/call/wrong-arguments` ×2) across workflow scripts and `greenfield-install/` mirrors. **28** findings deferred (16 print-at-import → T12, 12 exit/quit → wave 3 IPP). Dashboard re-scan pending post-merge.

## Changed

- `packages/frameworks/workflow-mgt/scripts/kanban/state_icons.py` — explicit `return None` in `normalize_status_token`
- `packages/frameworks/workflow-mgt/scripts/icw/icw_handler.py` — unified returns in `get_available_tasks`
- `packages/frameworks/build_packages.py` — correct manifest hash flow (`generate_manifest_json` + `add_manifest_to_archive`)
- Same three fixes mirrored under `greenfield-install/packages/frameworks/`

## Verification

- `python3.11 -m pytest tests/` — **406 passed**, 2 skipped
- Workflow-scripts pytest gate — **119 passed**
- Expected post-merge reliability open count: **28** (deferred rules only)

## Kanban / intake

- **E08:S03:T13** — wave-2 shipped @ **v0.8.3.13+3**; status **IN PROGRESS** (Fair+ blocked; wave 3 exit/quit deferred)
- **BR-100** — wave-2 fix-attempt narrative updated; final closure pending dashboard re-scan
- **kboard** — T13 row updated

## References

- [BR-100](../project-management/kanban/fr-br/BR-100-code-quality-reliability-backlog.md)
- [T13](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [IPP-E08S03T13](../implementation-cycles/IPP-E08S03T13-code-quality-reliability-backlog-br100.md)
- [Code Quality dashboard](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
