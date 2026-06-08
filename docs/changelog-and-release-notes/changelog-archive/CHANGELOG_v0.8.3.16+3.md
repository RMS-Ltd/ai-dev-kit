# Changelog v0.8.3.16+3

**Release Date:** 2026-06-08 10:37:48 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 3  
**SemVer:** v0.4.1057+3  
**Summary:** T16 Wave 2b — autofix `py/unused-import` hygiene

---

## Release scope

E08:S03:T16 — **Change implemented:** Wave 2b themed remediation — **17** autofix-safe `py/unused-import` removals in `release_metadata/` (packages + greenfield mirror), `scripts/`, and `tests/` (E02:S17 landing residuals). SemVer **v0.4.1057+3**.

---

## Changes

### Code quality

- Remove unused imports in `packages/frameworks/workflow-mgt/scripts/release_metadata/` (5 files).
- Mirror parity in `greenfield-install/packages/frameworks/workflow-mgt/scripts/release_metadata/`.
- Ancillary `F401` fixes in `scripts/` and `tests/`.

### Verification

- `ruff check --select F401` — **0** remaining in scoped trees.
- `sync_greenfield_install.py --check` — in sync.
- `pytest` — `release_metadata` + `tests/release_state/` **14 passed**.
- CQG local monitor — advisory threshold (non-strict); operator dashboard verify pending.

---

## Documentation

- T16 task doc — Wave 2b remediation table; AC7 complete.
