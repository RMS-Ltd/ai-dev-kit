# Detailed Changelog - v0.2.1.10+2

**Release Date:** 2026-04-07 12:42:54 UTC  
**Version:** v0.2.1.10+2  
**SemVer:** v0.4.628+2  
**Epic:** 2  
**Story:** 1  
**Task:** 10  
**Task Code:** E2:S01:T10

---

## Summary

Change implemented: strict-equal-epic support for `dev` branch in RW Step 1 branch validation.

## Changes Implemented

### Validator behavior

- `validate_branch_context.py` now recognizes `dev` using config-mapped epic context via `dev_branch_epic`.
- `dev` branch mode enforces the same blocking epic/version alignment checks as `epic/{n}`.
- Missing or invalid `dev_branch_epic` now triggers a blocking validation error on `dev`.

### Documentation and governance

- Updated RW Step 1 execution documentation to clarify strict `dev` behavior.
- Updated `.cursorrules` branch mapping guidance to include `dev` strict-equal-epic mode.
- Updated task and UXR traceability docs with implementation evidence.

## Verification Notes

- Validators executed successfully:
  - `validate_branch_context.py --strict`
  - `validate_version_bump.py`
  - `validate_changelog_format.py --format keep_a_changelog`
