# Changelog v0.4.11.7+4

**Release Date:** 2026-06-05 04:15:00 UTC  
**Epic:** 4 | **Story:** 11 | **Task:** 7  
**SemVer:** v0.4.914+4

---

## Summary

Dev merge consolidation for five parallel E04 task branches (BR-005/006/007, FR-007, FR-016 IPP). SemVer primary tag **v0.4.914** after parallel-release collision recovery (BR-097).

---

## Changes

### Consolidation

- Merged `task/e4-s06-t06-br005`, `task/e4-s07-t01-br006`, `task/e4-s07-t02-fr007`, `task/e4-s09-t01-br007`, `task/e4-s11-t07-fr016` into `dev`
- Reconciled `semver-registry.yaml` mapping history for parallel releases
- Pruned stale C-band rows (T01/T02/T06/T09); **E04:S11:T07** remains **IN PROGRESS** with IPP

### SemVer

- Primary tag: **v0.4.914** (internal `v0.4.11.7+4`)

---

## References

- [IPP-E04S11T07-fr016-discrete-task-docs-migration.md](../../implementation-cycles/IPP-E04S11T07-fr016-discrete-task-docs-migration.md)
- [FR-016](../project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)
