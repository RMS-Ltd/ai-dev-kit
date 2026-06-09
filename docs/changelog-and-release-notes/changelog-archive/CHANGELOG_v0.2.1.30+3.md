# Changelog v0.2.1.30+3

**Release Date:** 2026-06-09 20:00:00 UTC

**Epic:** E02 | **Story:** S01 | **Task:** T30 | **FR-122**

## Summary

E02:S01:T30 — **Change implemented:** FR-122 Wave 2 — `validate_release_coherence.py` cross-surface gate (README ↔ SAA DB ↔ `version.py`); Step 9 wiring; gap matrix C-F2/C-F10 → MET. SemVer **v0.4.1098+3**.

## Changes

### Added

- `packages/frameworks/workflow-mgt/scripts/validation/validate_release_coherence.py` — blocking Step 9 gate when `release_coherence.enabled` in `rw-config.yaml`
- `packages/frameworks/workflow-mgt/scripts/validation/test_validate_release_coherence.py` — unit tests

### Updated

- `rw-config.yaml` — `release_coherence.enabled: true`
- `.cursorrules`, `.claude/commands/rw.md`, `canonical-rw-steps.yaml` — Step 9 parity
- `docs/knowledge/analysis/rw-contract-gap-matrix.md` — C-F2, C-F10 → MET
- `packages/frameworks/workflow-mgt/docs/rw-architectural-contract.md` — Wave 2 status
- Greenfield install mirror synced

### Attempted Fixes

- Split-brain detection before commit/tag (FR-122 F10) — not yet operator-verified across 10-run streak
