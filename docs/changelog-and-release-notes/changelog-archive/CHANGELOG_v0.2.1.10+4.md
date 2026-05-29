# Detailed Changelog - v0.2.1.10+4

**Release Date:** 2026-04-07 14:03:23 UTC  
**Version:** v0.2.1.10+4  
**SemVer:** v0.4.630+4  
**Epic:** 2  
**Story:** 1  
**Task:** 10  
**Task Code:** E2:S01:T10

---

## Summary

Change implemented: hardened `kanban_init` board hygiene so stale completed task rows are pruned from the in-progress MoSCOW list, with matching regression coverage.

## Changes Implemented

### Kanban updater behavior

- Updated `update_kanban_docs.py` to prune stale target-task rows already marked `✅ COMPLETE` during `kanban_init` board updates.
- Preserved existing `kanban_init` metadata updates (board version/last-updated) and row timestamp normalization.

### Test coverage

- Updated `test_update_kanban_docs.py` with targeted regression `test_4_2_kanban_init_prunes_stale_completed_row`.
- Fixed test harness pathing so category-4 dry-run test executes correctly in temp fixtures.

### Documentation and traceability

- Updated `E2:S01:T11` task evidence and acceptance progress.
- Updated `BR-062` status context and implementation note.

## Verification Notes

- Validators passed:
  - `validate_branch_context.py --strict`
  - `validate_changelog_format.py --format keep_a_changelog`
  - `validate_version_bump.py`
  - `validate_kanban_governance_policy.py`
- Test suite:
  - `test_update_kanban_docs.py --test-category 4` (both tests passing)
