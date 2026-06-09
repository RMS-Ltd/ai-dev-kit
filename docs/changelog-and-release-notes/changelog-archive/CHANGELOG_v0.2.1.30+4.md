# Changelog v0.2.1.30+4

**Release Date:** 2026-06-09 21:00:00 UTC

**Epic:** E02 | **Story:** S01 | **Task:** T30 | **FR-122**

## Summary

E02:S01:T30 — **Change implemented:** FR-122 Wave 3 — Step 11 tag authority hard gate (`validate_rw_tag_authority.py` pre/post; `create_rw_tags()` only). SemVer **v0.4.1099+4**.

## Changes

### Added

- `validate_rw_tag_authority.py` — Step 11 pre/post gates; blocks raw lightweight `git tag`
- `test_validate_rw_tag_authority.py` — unit tests

### Updated

- `rw-config.yaml` — `rw_tag_authority.enabled: true`
- `.cursorrules`, `.claude/commands/rw.md`, `canonical-rw-steps.yaml` — Step 11 blocking parity
- `rw-trigger-dual-source-parity.md` — Wave 3 checklist + delta log
- Gap matrix / contract — C-F9 → MET
- Greenfield mirror synced
