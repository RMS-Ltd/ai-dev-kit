# Changelog v0.8.3.16+7

**Release Date:** 2026-06-08 13:35:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 7  
**SemVer:** v0.4.11+7  
**Summary:** T16 Wave 3d — local CQG warning burn-down (7 → 0)

---

## Release scope

E08:S03:T16 — **Change implemented:** Wave 3d — remediate **7** local CodeQL `security-and-quality` warnings surfaced by CQG pre-push scan; local gate **0 warnings** (Reliability **Excellent**, Maintainability **Excellent**). SemVer **v0.4.11+7**.

---

## Changes

- `cli/logging.py` — explanatory comment on install log stream-close `except` (`py/empty-except`).
- `apply_kanban_root_migration_fr118.py` — remove unused `List` import (packages + greenfield mirror).
- `validate_task_touch_release_contract.py` — module-only `semver_converter` import (`py/import-of-mutable-attribute`, `py/import-and-import-from`; packages + mirror).
- `finalize_rw_semver_registry.py` — same module-only import pattern (packages + mirror).

---

## Verification

- `run_cqg.py --strict --threshold warnings` — **0** findings (716 Python + 8 Actions files).
- Operator dashboard re-verify pending after merge.
