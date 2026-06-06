# Changelog v0.8.3.12+6

**Release Date:** 2026-06-06 12:56:29 UTC  
**Epic | Story | Task:** E08:S03:T12 (`RW --art`)  
**SemVer (task_touch):** v0.4.997+6  

## Summary

**Change implemented:** BR-099 wave-4 maintainability — T13-deferred **16** `py/print-during-import` findings remediated by replacing import-time `print` with `logging.warning` in **7** workflow intake modules (**14** files including `greenfield-install/` mirror). Local import-time print proxy **0**. Dashboard **Good+** re-scan still pending.

## Changed

- `packages/frameworks/workflow-mgt/scripts/git_tag_handler.py`
- `packages/frameworks/workflow-mgt/scripts/intake_decision_flow.py`
- `packages/frameworks/workflow-mgt/scripts/intake_dependency_wiring.py`
- `packages/frameworks/workflow-mgt/scripts/intake_documentation_update.py`
- `packages/frameworks/workflow-mgt/scripts/intake_task_creation.py`
- `packages/frameworks/workflow-mgt/scripts/intake_version_assignment.py`
- `packages/frameworks/workflow-mgt/scripts/intake_workflow_trigger_handler.py`
- Same seven files mirrored under `greenfield-install/packages/frameworks/workflow-mgt/scripts/`

## Verification

- Local import-time `print` proxy — **0** remaining
- `python3.11 -m pytest tests/` — **407 passed**, 2 skipped
- Workflow-scripts pytest gate — **119 passed**
- Expected dashboard delta: **16** `py/print-during-import` cleared post-merge

## Kanban / intake

- **E08:S03:T12** — wave-4 shipped @ **v0.8.3.12+6**; status **IN PROGRESS** (**Good+** hard gate pending)
- **BR-099** — wave-4 fix-attempt narrative updated
- **IPP-E08S03T12** — §4.3 steps 31–37 **DONE**; step 38 RW **DONE**

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [T12](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T12](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
- [T13 handoff](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
