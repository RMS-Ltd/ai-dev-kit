# Changelog v0.2.16.6+4

**Release Date:** 2026-06-10 13:15:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 6 | **Build:** 4  
**SemVer:** v0.4.1114+4  
**Summary:** T06 Wave 4b — maintainability autofix (~10 dashboard targets)

---

## Release scope

E02:S16:T06 — **Attempted fix:** Wave 4b — maintainability burn-down: **24** `ruff` autofixes (`F401`, `I001`) + manual `F841` / `py/unused-local-variable` in `localisation_config.py` and `validate_rw_split_brain_streak.py`; `greenfield-install/` mirror synced. SemVer **v0.4.1114+4**.

---

## Changes

- **Autofix:** `py/unused-import` and import hygiene across `packages/frameworks/`, `tests/`, `scripts/`.
- **Manual:** Remove dead `config_path` assignment in `switch_locale`; fix unused `parsed` branch in `validate_rw_split_brain_streak.py`.
- **Mirror:** `sync_greenfield_install.py` — 1791 framework files in sync.

---

## Verification

- `pytest tests/` — **843 passed**, 5 skipped.
- CQG — advisory threshold (non-strict); cyclic-import / unused-global residuals documented for future wave.
- Operator dashboard TC24 verify **pending** post-merge.
