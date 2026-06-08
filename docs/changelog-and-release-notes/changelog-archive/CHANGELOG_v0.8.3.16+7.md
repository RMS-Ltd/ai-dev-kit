# Changelog v0.8.3.16+7

**Release Date:** 2026-06-08 14:30:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 7  
**SemVer:** v0.4.1062+7  
**Summary:** T16 Wave 3d — last `py/empty-except` in cli/logging.py

---

## Release scope

E08:S03:T16 — **Attempted fix:** Wave 3d — final `py/empty-except` in `cli/logging.py` (`close_install_logger` retention + close). SemVer **v0.4.1062+7**.

---

## Changes

- `cli/logging.py` — replace bare `except Exception: pass` with `contextlib.suppress` (log retention + file close).

---

## Verification

- `pytest tests/cli/` — **39 passed**.
- Repo-wide grep: **0** `except …: pass` patterns in `*.py`.
