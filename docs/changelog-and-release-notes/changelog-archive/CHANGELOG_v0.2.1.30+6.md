# Changelog v0.2.1.30+6

**Release Date:** 2026-06-09 19:43:11 UTC

**Epic:** E02 | **Story:** S01 | **Task:** T30 | **FR-122**

## Summary

E02:S01:T30 — **Change implemented:** FR-122 Wave 8 — `validate_rw_split_brain_streak.py` split-brain streak auditor (README ↔ `version.py` ↔ SAA DB at tag commit); `split_brain_streak` config; contract + `rw.md` wiring. SemVer **v0.4.1104+6**. Current streak **3/10** @ dev after release.

## Changes

### Added

- `packages/frameworks/workflow-mgt/scripts/validation/validate_rw_split_brain_streak.py`
- `packages/frameworks/workflow-mgt/scripts/validation/test_validate_rw_split_brain_streak.py`

### Updated

- `rw-config.yaml` — `split_brain_streak` block (`min_streak: 10`, `limit: 15`)
- `rw-contract.yaml` — advisory `step_13_streak` gate (HOUSEKEEPING)
- `rw-architectural-contract.md` — Wave 8 streak auditor section
- `.claude/commands/rw.md` — Step 13 streak + orchestrator helpers
- Gap matrix — Wave 8 row
- FR-122 / T30 task doc — Wave 8 status (2/10 → tooling shipped)
- Greenfield mirror sync
