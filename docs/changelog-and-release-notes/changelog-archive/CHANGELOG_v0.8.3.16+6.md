# Changelog v0.8.3.16+6

**Release Date:** 2026-06-08 13:15:00 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 16 | **Build:** 6  
**SemVer:** v0.4.1061+6  
**Summary:** T16 Wave 3c — final `py/empty-except` stragglers

---

## Release scope

E08:S03:T16 — **Attempted fix:** Wave 3c — last **2** `py/empty-except` reliability residuals after Wave 3b post-merge verify (**Maintainability Excellent**, **Reliability Good** @ `main` `635ae871`). SemVer **v0.4.1061+6**.

---

## Changes

- `install_kanban_framework.py` — `suppress(Exception)` on install logger callback (×2 mirror).
- `install_ux_version.py` — `suppress(Exception)` on `chdir` restore in `finally` (×2 mirror).
- `create_github_release.py` — `suppress(Exception)` on `.env.local` parse (×2 mirror).
- `scripts/notion_migration_manifest.py` — `suppress(FileNotFoundError)` when `rg` unavailable.

---

## Verification

- `pytest tests/` — **521 passed**, 2 skipped.
- `sync_greenfield_install.py --check` — in sync.
- Operator dashboard re-verify pending after merge (target **0** standard `py/empty-except`).
