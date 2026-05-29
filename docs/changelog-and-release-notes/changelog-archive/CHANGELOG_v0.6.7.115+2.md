# Detailed Changelog — v0.6.7.115+2

**Release date:** 20-04-26  
**Task:** E6:S07:T115  
**Mode:** RW with `--art`  
**SemVer:** v0.4.761+2

## Summary

Fixed timestamp forensic drift by preventing touch-only UKW/RW board reconciliation from rewriting existing MoSCOW row `Last modified` stamps.

## Included

- Script behavior hardening:
  - `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
  - preserve existing row timestamps in `enforce_moscow_row_timestamps`
  - preserve existing fbuboard row timestamps in `_cleanup_fbuboard_active_rows`
  - keep adding timestamp only when missing
  - reconciliation stats changed to `timestamps_added_missing`
- Regression coverage:
  - `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py`
  - updated fbuboard reconciliation test expectations
  - added `test_4_5_touch_only_run_preserves_unique_moscow_timestamps`

## Verification

- `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4` ✅ (5/5 passed)
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py" --strict --requested "E6:S07:T115" --art` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "E6:S07:T115"` ✅
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "E6:S07:T115" --confirmed-override` ✅
