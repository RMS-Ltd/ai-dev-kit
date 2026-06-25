# Changelog v0.3.2.16+1

**Release Date:** 2026-06-25 14:05:30 UTC  
**Epic:** 3 | **Story:** 2 | **Task:** 16  
**SemVer:** 0.4.1234  
**Internal:** 0.3.2.16+1

---

## Summary

**Change implemented:** Close BR-111 implementation gap — public SemVer surfaces enforce ADR-031 core-only display; coherence gate rejects `+BUILD` on README/CHANGELOG; `finalize_rw_semver_registry` JSON emits `semver_core` / `semver_display`.

---

## Changes

### Attempted Fixes

- **`validate_release_coherence.py`:** Compare against `semver_core`; fail when `+BUILD` appears on public SemVer lines (ADR-031 / BR-111).
- **`validate_rw_split_brain_streak.py`:** Same core-only public SemVer guard for streak audits.
- **`finalize_rw_semver_registry.py`:** JSON payload adds `semver_core` and `semver_display` alongside trace-only `semver_full`.
- **Tests:** SBL attempt-11 regression (`0.2.16.2+2` → public `0.0.5`); BUILD-suffix rejection test.
- **`.cursor/skills/readme-update`:** Document core-only SemVer for task_touch README updates.

---

## Related

- [BR-111](../../kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md)
- [ADR-031](../../architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md)
- [IPP-E03S02T16](../../implementation-cycles/IPP-E03S02T16-semver-public-surface-build-leak-br111.md)
