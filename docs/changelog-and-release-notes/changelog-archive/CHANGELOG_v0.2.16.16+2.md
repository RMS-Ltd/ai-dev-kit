# Detailed Changelog — v0.2.16.16+2

**Release Date:** 2026-05-30 16:18:51 UTC  
**Internal Version:** v0.2.16.16+2  
**SemVer:** v0.4.839+2  
**Epic:** 2 | **Story:** 16 | **Task:** 16

---

## Summary

Shipped **FR-102** / **ADR-010**: standalone **`UKW -c`** archive-completed contract — ledger-before-prune on `kboard.md` / `fbuboard.md`, agent SoT, cheatsheet, helpers, and Option A gating of delete-only prune in `update_kanban_docs.py`.

---

## Change implemented

- **ADR-010** — UKW `-c` standalone flag, forbidden combinations, FR-097 structure-prune notes.
- **IPP-E02S16T16** — planning package wired to **E02:S16:T16**.
- **Agent SoT:** `.cursorrules`, `ukw.md`, VWMP UKW guide, `cursorrules-ukw-trigger-section.md`, `ukw-sync` skill, workflow YAML.
- **`archive_completed.py`** — task/FBU candidate scan helpers + unit tests.
- **`update_kanban_docs.py`** — RW/UKW paths emit UKW `-c` advisory instead of delete-only kboard COMPLETE prune; fbuboard terminal removal default off.

---

## Operator note

After releases, run **`UKW -c`** then **`RW`** (perpetual UKW task **E02:S16:T04** or feature release on **T16**) to archive terminal rows into completed ledgers before active MoSCOW cleanup.
