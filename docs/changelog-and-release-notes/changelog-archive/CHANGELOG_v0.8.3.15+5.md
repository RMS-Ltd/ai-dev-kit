# Changelog v0.8.3.15+5

**Release Date:** 2026-06-08 11:19:10 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 15 | **Build:** 5  
**SemVer:** v0.4.1057+5  
**Summary:** T15 — pytest-django isolation for Step 9.7 tests parity

---

## Release scope

E08:S03:T15 — **Change implemented:** Step 9.7 `run_tests_ci_parity.sh` mirrors `tests.yml` and blocks operator-global **pytest-django** (`confidentia_django.settings`) from hijacking collection. SemVer **v0.4.1057+5**.

---

## Changes

### CI parity (Step 9.7)

- **`run_tests_ci_parity.sh`** — `PYTEST_DISABLE_PLUGIN_AUTOLOAD=1`, `-p no:pytest_django`, Python 3.11+ picker; optional `pip install -e ".[dev]"` when pytest missing.
- **`validate_actions_ci_parity.py`** — tests check delegates to shell wrapper (GH Actions parity).
- Greenfield mirror synced.

---

## Notes

- **`--art` adoption:** `E08:S03:T15` BUILD+5 (`same_task_build_plus_one`).
- **Operator:** Re-run `validate_actions_ci_parity.py --strict --all` before batch push; remote tags `v0.8.3.15+4` / `v0.4.1056` pre-exist — push **new** tags only.
