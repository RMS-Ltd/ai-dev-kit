# Changelog v0.4.13.7+2

**Release Date:** 2026-05-20 23:30:00 UTC  
**Epic | Story | Task:** E4:S13:T07  
**SemVer (task_touch):** v0.4.796+2  

## Summary

Follow-up for **UXR-012 / E4:S13:T07**: RW / `update_kanban_docs` could not flip MoSCOW rows from **`IN PROGRESS` / `TODO`** to **`✅ COMPLETE`** when a **Set A** emoji sat immediately before the status word (regex alternation bound `\s*` only to the last emoji). Fixed `rewrite_todo_or_in_progress_to_complete_in_line()` grouping; `update_moscow_task` now uses that helper.

## Change implemented

- **Updated:** `state_icons.py` — `(?:(?:{alt})\s*)*` for optional leading primaries before `TODO` / `IN PROGRESS`.
- **Updated:** `update_kanban_docs.py` — unchanged call site; helper now matches iconized rows.
- **Updated:** `test_state_icons.py` — coverage for plain and icon-prefixed lines.

## Verification

- `python3 packages/frameworks/workflow mgt/scripts/test_state_icons.py`
- `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_kanban_state_icons.py" --project-root . --strict`
