# Changelog — v0.8.3.19+1

**Release Date:** 2026-06-10 15:32:48 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 19  
**SemVer:** v0.4.1127+1

## Summary

E08:S03:T19 — **BR-103 fix:** `test_stamp_evidence_gate.py` converted to pytest `assert` / `pytest.raises` (eliminates false-green CI under `workflow-scripts-pytest`). Added `PytestReturnNotNoneWarning` error filter in workflow-scripts `pytest.ini`; validation README audit note.

## Changes

### Fixed

- **BR-103:** Seven stamp-evidence tests no longer return `(bool, str)` — pytest CI lane now enforces failures.

### Added

- `test_pytest_fails_when_non_substantive_invariant_broken` — regression probe (BR-103 AC3)
- `IPP-E08S03T19` — MWF delivery planning package

### Updated

- `validation/pytest.ini` — `filterwarnings = error::pytest.PytestReturnNotNoneWarning`
- `validation/README.md` — tuple-return audit table for non-CI script tests
- `greenfield-install/` mirror (FR-110)
