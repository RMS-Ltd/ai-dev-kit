# Changelog v0.8.3.12+4

**Release Date:** 2026-06-05 16:36:03 UTC  
**Epic | Story | Task:** E08:S03:T12  
**SemVer (task_touch):** v0.4.988+4  

## Summary

Wave-2 maintainability remediation (BR-099): `ruff` F541 + hygiene autofix on `packages/frameworks/`, `tests/`, `scripts/`, `cli/`; `run_kb_migration_mcp.py` print-at-import moved to `main()` guard.

## Attempted Fixes

- **169** ruff autofixes (F541 f-string placeholders, F401/F841/I001 hygiene) across **52** files in wave-2 scope
- **1** module-level `print()` → `if __name__ == "__main__"` guard in `scripts/run_kb_migration_mcp.py`
- Wave-2 scope local ruff proxy: **0** remaining (F401, F841, I001, F811, F823, F541)
- **~146** F541 findings in `greenfield-install/` mirror **deferred** to BR-099 wave 3

## Verification

- `pytest tests/` — 405 passed, 1 failed (pre-existing `test_install_error_docs_sync`), 2 skipped
- `workflow-scripts-pytest` CI script — **118 passed**
- Dashboard re-scan pending post-merge to `main`

## Kanban / intake

- **E08:S03:T12** — wave-2 pre/post manifests + triage sheet; status **IN PROGRESS** (Good score still open)
- **BR-099** — wave-2 fix-attempt narrative updated
- **IPP-E08S03T12** — wave-2 success criteria partially checked

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [T12](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T12](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
