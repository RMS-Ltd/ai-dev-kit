# Changelog v0.6.9.46+1

**Release Date:** 2026-07-13 16:07:28 UTC  
**Epic | Story | Task:** E06:S09:T46 (`RW --art`)  
**SemVer (task_touch):** v0.4.1251+1  

## Summary

**Change implemented:** BR-115 empty/placeholder `packages/frameworks/` vendor fallthrough; lean FR-110 missing workflow YAML reports SUCCESS + `ADK-I03.E90:W01` advisory (not PARTIAL). Fynd.deals FB (#90) triage F2–F4 deferred. Operator fynd replay verification still welcome.

## Attempted Fixes

- **BR-115:** `is_usable_frameworks_tree` + `resolve_frameworks_base` warn-and-fallthrough when project `packages/frameworks/` lacks installer entrypoints.
- **Lean PARTIAL→SUCCESS:** `is_intentional_lean_missing_workflow` in `install_release_workflow.py`.

## Tests

- `tests/workflow_mgt/test_install_greenfield_path.py` (empty / `.gitkeep` fallthrough)
- `tests/workflow_mgt/test_install_release_lean_workflow.py`

## Documentation

- ADR-003 §4–§5; `INSTALL_IN_YOUR_PROJECT.md` precedence + lean SUCCESS; install-error-codes E90/W01

## References

- [BR-115](../../kanban/fbu/BR-115-empty-packages-frameworks-placeholder-blocks-vendor.md)
- [T46](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T46-fynd-deals-greenfield-kma-l1-fb-intake.md)
- [IPP-E06S09T46](../../implementation-cycles/IPP-E06S09T46-fynd-deals-fb-br115-lean-partial.md)
- [#90](https://github.com/RMS-Ltd/ai-dev-kit/issues/90)
