# Changelog: v0.4.11.7+12

**Release Date:** 2026-06-05 05:01:36 UTC
**Epic:** 4 | **Story:** 11 | **Task:** 7
**SemVer:** v0.4.928+12

## Summary

E04:S11:T07 — **Wave 3 Epics 7 & 8:** FR-016 discrete task migration for Epic 7 (Codebase Maintenance, 5 stories) and Epic 8 (Tooling & Automation, 5 stories); 38 new task docs, 13 reused; 0 embedded remaining in both epics.

## Attempted Changes

### Wave 3 — Epic 7 (Codebase Maintenance)

- Migrated stories S01–S04 and S06 via `migrate_story.py` (S00, S05, S07 checklist-only).
- 17 new discrete task docs; 13 reused (S06 had pre-existing task docs).

### Wave 3 — Epic 8 (Tooling & Automation)

- Migrated stories S01–S05 via `migrate_story.py`.
- 21 new discrete task docs under `epics/epic-08/story-*/`.

- Migration plan §6.3 Epic 7 and Epic 8 migrate/validate checked off.
- 14/14 `test_migrate_embedded_tasks.py`; 0 broken links repo-wide for E07/E08.

## References

- [IPP E04:S11:T07](docs/implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md)
- [Migration plan](docs/project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md)
