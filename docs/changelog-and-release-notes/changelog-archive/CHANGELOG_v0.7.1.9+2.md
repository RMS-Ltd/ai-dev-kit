# Detailed Changelog: v0.7.1.9+2

**Release Date:** 2026-03-31 13:30:24 UTC  
**Internal version:** 0.7.1.9+2  
**SemVer (task_touch):** 0.4.632+2  
**Epic / Story / Task:** E7:S01:T09 (`RW -k`)

## Summary

**`validate_branch_context.py`** now discovers task markdown the same way as **`validate_version_bump.py`**: extra `T**` glob variants, canonical **`E{epic:02d}S{story:02d}T{task:02d}-*.md`** filenames, and **`Epic-{n}`**-wide **`rglob`** fallback for descriptive **`Story-*`** folders (e.g. **`Story-001-codebase-maintenance-tasks`**). Removes false **“Task document not found”** warnings for **0.7.1.9+1**-style releases.

## Changed

- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py` — **`locate_task_doc_for_version`** parity + resolved **`kanban_root`** relative to project root

## Notes

- **`RW -k`** used because **E7:S01:T09** remains **TODO** (full FR-060 releasable check would block).
