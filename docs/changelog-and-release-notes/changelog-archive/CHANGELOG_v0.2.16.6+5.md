# Changelog v0.2.16.6+5

**Release Date:** 2026-06-10 14:30:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6 | **Build:** 5  
**SemVer:** v0.4.1122+5  
**Summary:** T06 Wave 5 — maintainability manifest (8/Fair) + manual CodeQL burn-down

---

## Release scope

E02:S16:T06 — **Change implemented:** Wave 5a manifest @ `main` `f458a215a` (**8** maintainability / **Fair**; TC24 partial 10→8). Wave 5b — manual burn-down: `py/multiple-definition`, `py/cyclic-import` (`time_util.py`), `py/unused-global-variable`, `py/unused-local-variable`; greenfield mirror synced. SemVer **v0.4.1122+5**.

---

## Changes

- **IPP:** Wave 5 revision — RF30–33, TC25–29, §8 Wave 5a/5b tables.
- **Chunk A:** Remove dead assignments in `apply_s16_perpetual_consolidation.py`.
- **Chunk B:** Drop unused `_MANIFEST` / `_STEPS` in `validate_rw_contract_manifest.py`.
- **Chunk C:** Extract `release_state/time_util.py`; break `db.py` ↔ `migrate.py` cycle.
- **Chunk D:** Fix unused `dt` in `test_locale_cultural_formatting.py`.
- **Mirror:** `sync_greenfield_install.py` — 1795 framework files in sync.

---

## Verification

- `pytest tests/test_locale_cultural_formatting.py tests/release_state/` — **33 passed**.
- CQG local run — maintainability findings cleared on `packages/` tree (non-strict).
- Operator dashboard TC25 verify **pending** post-merge.
