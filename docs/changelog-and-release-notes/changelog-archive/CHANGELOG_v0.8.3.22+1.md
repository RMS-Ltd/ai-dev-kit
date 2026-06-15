# Changelog v0.8.3.22+1

**Release Date:** 2026-06-15 19:44:31 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 22  
**SemVer:** v0.4.1176+1

---

## Summary

E08:S03:T22 — Pytest warning cleanup (UXR-030 Wave 2): timezone-aware UTC in `cli/logging.py`; assert-based `tests/test_rw_performance.py`.

---

## Change implemented

### CLI logging

- Replaced deprecated `datetime.utcnow()` with `datetime.now(timezone.utc)` helpers in [`cli/logging.py`](../../cli/logging.py) (BR-081 pattern).

### Tests

- Refactored [`tests/test_rw_performance.py`](../../tests/test_rw_performance.py) to pytest-native `assert` (BR-103 pattern); use `sys.executable` for subprocess portability; updated brittle kanban_init assertions.

### Intake / Kanban

- UXR-030 Wave 2; IPP-E08S03T22; E08:S03:T22 delivery via MWF.

---

## Related

- [UXR-030 Wave 2](../../kanban/fr-br/UXR-030-default-pytest-cli-coverage-misleading-zero-percent.md)
- [E08:S03:T21](../../kanban/epics/epic-08/story-03-automation-scripts/T21-cli-pytest-coverage-dedicated-target-uxr030.md)
- [BR-081](../../kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- [BR-103](../../kanban/fr-br/BR-103-workflow-scripts-pytest-tuple-return-false-green.md)
