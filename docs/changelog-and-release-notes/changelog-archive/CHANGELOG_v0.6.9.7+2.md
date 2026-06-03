# Changelog v0.6.9.7+2

**Release Date:** 2026-06-03 20:25:00 UTC  
**Epic | Story | Task:** E06:S09:T07 (`RW --art`)  
**SemVer (task_touch):** v0.4.857+2  

## Summary

**Attempted fix (BR-078):** Ship `KANBAN_STRUCTURE_TEMPLATE.md` and fix fresh-install **PARTIAL** false alarms when `kboard.md` and `epics/` succeed.

## Change implemented

### Framework (kanban installer)

- **`packages/frameworks/kanban/templates/KANBAN_STRUCTURE_TEMPLATE.md`** — consumer `kanban-structure.md` scaffold
- **`resolve_structure_template()`**, **`assess_fresh_install_outcome()`** — log template path; **SUCCESS** when core deliverables exist
- Fresh mode: pre-install validation warnings no longer force **PARTIAL** before skeleton install

### Tests

- **`tests/kanban/test_install_structure_template.py`** — 4 tests (template exists, fresh install, dry-run, resolver)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — fresh install SUCCESS vs PARTIAL guidance
- **`packages/frameworks/kanban/README.md`** — structure template listed

## References

- [BR-078](../project-management/kanban/fr-br/BR-078-kanban-fresh-install-structure-template-missing.md)
- [IPP-E06S09T07](../implementation-cycles/IPP-E06S09T07-br078-kanban-structure-template-missing.md)
- GitHub [#10](https://github.com/RMS-Ltd/ai-dev-kit/issues/10)
