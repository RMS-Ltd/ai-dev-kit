# Changelog v0.4.19.5+7

**Release Date:** 2026-04-26 12:35:00 UTC  
**Internal Version:** 0.4.19.5+7  
**Epic / Story / Task:** E4 | S19 | T05

## Summary

`RW E4:S19:T05 --art` publishes a corrective data-integrity release for completed FBU tracking. Canonical `fbu-completed.md` is restored to include full historical completion records, explicit backfill coverage for missing intake items marked COMPLETE is added, and the legacy `fr-br-uxr-completed.md` file is removed.

## Changes

- Restored full historical completion sections in `docs/project-management/kanban/fbu-completed.md`
- Added explicit backfilled coverage entries for missing COMPLETE intake IDs:
  - `BR-060`, `BR-061`, `BR-062`, `BR-064`
  - `FR-047`, `FR-076`, `FR-079`
- Removed legacy `docs/project-management/kanban/fr-br-uxr-completed.md`
- Verified canonical coverage against intake docs with header `Status: COMPLETE` (no missing IDs)

## References

- Task: `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md`
- Canonical completed ledger: `docs/project-management/kanban/fbu-completed.md`
