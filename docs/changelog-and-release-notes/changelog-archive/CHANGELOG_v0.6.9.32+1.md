# Changelog v0.6.9.32+1

**Release Date:** 2026-06-12 07:52:33 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 32  
**SemVer:** v0.4.1149+1  
**Task:** [E06:S09:T32](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T32-detect-structure-zero-padded-epic-br108.md)  
**BR:** [BR-108](../../kanban/fr-br/BR-108-detect-existing-structure-zero-padded-epic-names.md)

---

## Summary

Change implemented: `detect_existing_structure.py` now recognises zero-padded legacy epic documents (`Epic-01.md` … `Epic-09.md`) discovered during Starborn Legacy install attempt 06 (F23).

---

## Changes

### Attempted Fixes

- **`_find_epic_document`:** Try unpadded and two-digit zero-padded glob patterns; regex fallback normalises `Epic-0*N` filenames to canonical epic integer (BR-108).
- **Tests:** Added `test_detect_existing_structure.py` with SBL-style legacy fixture and unpadded regression case.
- **Greenfield:** Synced `greenfield-install/packages/frameworks/kanban/scripts/detect_existing_structure.py` mirror.
- **Planning:** IPP-E06S09T32 filed via MWF delivery pipeline.

---

## Verification

- `pytest packages/frameworks/kanban/scripts/test_detect_existing_structure.py` — PASS (2 tests).
- Operator SBL re-run pending for end-to-end migration experiment confirmation.
