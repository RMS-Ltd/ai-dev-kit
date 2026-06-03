# Changelog v0.6.9.9+2

**Release Date:** 2026-06-03 19:15:00 UTC  
**Epic | Story | Task:** E06:S09:T09 (`RW --art`)  
**SemVer (task_touch):** v0.4.855+2  

## Summary

**Attempted fix (BR-080):** Greenfield `install_kanban_framework.py --mode fresh` no longer aborts on missing `epics/` before install — skeleton directories are created pre-validation; dry-run uses relaxed check; non-fresh errors cite `--mode fresh`.

## Change implemented

### Framework (kanban installer)

- **`ensure_fresh_install_skeleton()`** in `install_kanban_framework.py` — creates Kanban root + `epics/` before Step 3.5 validation in fresh mode
- **`validate_installation.py`** — `allow_missing_empty_skeleton` for dry-run fresh; actionable `--mode fresh` hint on missing `epics/`

### Tests

- **`tests/kanban/test_install_fresh_validation.py`** — 4 tests (empty-repo fresh without `--force`, migration strict, dry-run warning, no raw epics error)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — empty repo: `--force` not required for directory validation
- **IPP publication** — `IPP-E06S09T07/T08/T09/T11` wired to host tasks (planning artifacts; implementation this release: **T09** only)
- **Kanban** — T09 **COMPLETE**, BR-080 attempted-fix note

## References

- [BR-080](../project-management/kanban/fr-br/BR-080-kanban-fresh-mode-validation-requires-force-on-empty-repo.md)
- [IPP-E06S09T09](../implementation-cycles/IPP-E06S09T09-br080-fresh-mode-empty-repo-validation.md)
- GitHub [#12](https://github.com/RMS-Ltd/ai-dev-kit/issues/12)
