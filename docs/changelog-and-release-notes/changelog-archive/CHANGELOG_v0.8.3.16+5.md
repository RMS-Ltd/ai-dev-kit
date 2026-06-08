# Changelog v0.8.3.16+5

**Release Date:** 2026-06-08 12:45:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 5  
**SemVer:** v0.4.1060+5  
**Summary:** T16 Wave 3b — reliability-first remediation (11 standard-finding targets)

---

## Release scope

E08:S03:T16 — **Attempted fix:** Wave 3b — burn-down of **11** post–Wave 2b standard findings (**8** reliability + **3** maintainability): `py/empty-except`, `py/tarslip`, `py/ineffectual-statement`, `py/unused-local-variable` across installer scripts + mirrors. SemVer **v0.4.1060+5**.

---

## Changes

### Reliability (8)

- `install_kanban_framework.py` — replace bare `except Exception: pass` with `contextlib.suppress` (×2; mirror synced).
- `install_package_from_release.py` — `py/tarslip`: per-member `tar.extract` after path validation; `ImportError` → `suppress` (×2 mirror).

### Maintainability (3)

- `ukw_syntax_parser.py` — remove ineffectual `story_path / "T*-*.md"` expression (×2 mirror).
- `import_legacy.py` — unused `build` → `_build` (×2 mirror).
- `run_notion_mcp_import.py` — remove unused `batch` load.

### Tooling

- `sync_greenfield_install.py` — mirror in sync (`--check` OK).

---

## Verification

- `pytest tests/` — **521 passed**, 2 skipped.
- `validate_code_quality_gate.py` — exit 0 (advisory threshold; non-strict).
- Operator post-merge [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) re-verify pending (TC18 / AC9).
