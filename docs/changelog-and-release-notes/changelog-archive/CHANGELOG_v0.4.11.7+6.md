# Changelog v0.4.11.7+6

**Release Date:** 2026-06-05 03:52:50 UTC  
**Epic:** 4 | **Story:** 11 | **Task:** 7  
**SemVer:** v0.4.921+6

---

## Summary

IPP Wave 1 — migration tooling for FR-016 embedded-to-discrete Task documents. Four CLI scripts plus unit tests T1–T8.

---

## Changes

### Tooling (Wave 1)

- **`extract_embedded_tasks.py`** — parse `### E:S:T` sections and `**Label:**` fields from Story docs
- **`generate_task_doc.py`** — emit `T{nn}-{slug}.md` discrete Task documents
- **`update_story_refs.py`** — replace embedded bodies with `## Task Checklist` links
- **`validate_migration.py`** — scan for remaining embedded sections and broken task links
- **`test_migrate_embedded_tasks.py`** — 10 tests (IPP T1–T8 + validation smoke)

---

## References

- [IPP-E04S11T07-fr016-discrete-task-docs-migration.md](../../implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md)
- [T07-planning-spec-tests-impl.md](../../project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)
