# Changelog v0.6.9.10+1

**Release Date:** 2026-06-04 17:04:05 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 10  
**SemVer:** v0.4.877+1

---

## Summary

E06:S09:T10 — **BR-081 / GitHub #13:** Replace deprecated `datetime.utcnow()` with timezone-aware `datetime.now(timezone.utc)` in `install_kanban_framework.py` (env-log timestamps and fresh-install template dates). Regression tests in `tests/kanban/test_install_kanban_logging.py`.

---

## Changed

### Attempted Fixes

- **BR-081:** Kanban installer no longer calls `datetime.utcnow()`; uses `timezone.utc` consistent with `install_receipt.py`.

### Added

- **IPP:** `docs/implementation-cycles/IPP-E06S09T10-br081-kanban-install-datetime-utcnow.md`
- **Tests:** `TestInstallNoUtcnowDeprecation` (source guard + `PYTHONWARNINGS=error::DeprecationWarning` on fresh dry-run)

### Documentation

- Task E06:S09:T10, BR-081, Story 9 checklist, `kboard` / `fbuboard` reconciliation
- `packages/frameworks/kanban/CHANGELOG.md` Unreleased note

---

## References

- [BR-081](../../project-management/kanban/fr-br/BR-081-kanban-install-datetime-utcnow-deprecated.md)
- [GitHub #13](https://github.com/RMS-Ltd/ai-dev-kit/issues/13)
- [IPP-E06S09T10](../../implementation-cycles/IPP-E06S09T10-br081-kanban-install-datetime-utcnow.md)
