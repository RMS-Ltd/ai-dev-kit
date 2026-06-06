# Changelog v0.8.3.12+7

**Release Date:** 2026-06-06 13:51:11 UTC  
**Epic | Story | Task:** E08:S03:T12 (`RW --art`)  
**SemVer (task_touch):** v0.4.1001+7  

## Summary

**Change implemented:** BR-099 wave-5 maintainability — closed ruff/CodeQL proxy gap across **~88** Python files: removed dead `yaml` try/except blocks, dead module-level constants, import consolidation; `greenfield-install/` mirror synced (**1499** files). Local ruff proxy (`F401,F841,I001,F811,F541`) **0**. Dashboard **Good+** re-scan still pending.

## Changed

- `packages/frameworks/**/*.py` — dead yaml blocks, unused globals, import hygiene (~22+ modules)
- `greenfield-install/packages/frameworks/**/*.py` — mirror sync via `scripts/sync_greenfield_install.py`
- `scripts/**/*.py`, `cli/config.py`, `setup.py`, `tests/**/*.py` — wave-5 hygiene
- Governance: T12 task doc, IPP-E08S03T12, BR-099 wave-5 narrative

## Verification

- `ruff check --select F401,F841,I001,F811,F541` — **0** on `packages/`, `greenfield-install/`, `scripts/`
- `python3 -m pytest tests/` — **407 passed**, 2 skipped
- Workflow-scripts pytest gate — **119 passed**
- `sync_greenfield_install.py --check` — in sync
- Expected dashboard delta: material reduction of mirror-duplicated unused-import / unused-global findings post-merge

## Kanban / intake

- **E08:S03:T12** — wave-5 shipped @ **v0.8.3.12+7**; status **IN PROGRESS** (**Good+** hard gate pending)
- **BR-099** — wave-5 fix-attempt narrative updated
- **IPP-E08S03T12** — §4.5 steps 39–48 **DONE**; step 49 RW **DONE**

## References

- [BR-099](../project-management/kanban/fr-br/BR-099-code-quality-maintainability-backlog.md)
- [T12](../project-management/kanban/epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [IPP-E08S03T12](../../implementation-cycles/IPP-E08S03T12-code-quality-maintainability-backlog-br099.md)
