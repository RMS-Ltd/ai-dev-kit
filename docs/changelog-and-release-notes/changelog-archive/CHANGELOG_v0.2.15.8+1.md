# Changelog v0.2.15.8+1

**Release Date:** 2026-05-20 18:30:00 UTC  
**Epic:** 2 | **Story:** 15 | **Task:** 8  
**SemVer:** v0.4.796+1

---

## Summary

`RW E2:S15:T08 --art` delivers **FR-097 Board Stamp Authority**: blocking `validate_board_stamp_diff.py`, automatic forensic backfill of homogenized MoSCOW row stamps, pipeline `non_substantive` defaults on UKW hygiene, release-readiness **Gate 8** homogeneity, and re-closure of **BR-069** / **UXR-009**.

## Added

- `packages/frameworks/workflow mgt/scripts/kanban/stamp_authority.py` — shared parse/evidence/backfill core
- `packages/frameworks/workflow mgt/scripts/validation/validate_board_stamp_diff.py` — blocking write-boundary validator
- `packages/frameworks/workflow mgt/scripts/kanban/backfill_board_row_stamps.py` — automatic stamp recovery
- `packages/frameworks/workflow mgt/scripts/kanban/snapshot_kanban_boards.py` — UKW/RW before snapshots
- `packages/frameworks/workflow mgt/scripts/test_stamp_authority.py`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/board-stamp-authority.md`
- `docs/implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md`

## Changed

- `update_kanban_docs.py` — `_cleanup_fbuboard_active_rows` uses `non_substantive`; `enforce_terminal_timestamps_on_boards` evidence modes
- `validate_release_readiness.py` — Gate 8 stamp homogeneity
- `kanban-governance-policy.md`, `.cursorrules`, `ukw.md`, UKW/RW execution guides — removed row-level stamp unify; Board Stamp Authority

## Attempted Fixes

- **BR-069** / **UXR-009**: homogenized corpus (~71 rows) backfilled from linked doc/git; Gate 8 PASS post-backfill ([fr097-backfill-report.json](four-surface-reports/fr097-backfill-report.json))
