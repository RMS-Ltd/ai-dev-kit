# Changelog v0.2.16.4+41

**Release Date:** 2026-06-08 15:14:49 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 4 | **Build:** 41  
**SemVer:** v0.4.12+41  
**Summary:** FR-109 enforcement fix — prune kboard archive prose; block *(…)* footnotes

---

## Release scope

E02:S16:T04 — **Change implemented:** Fix `validate_active_kanban_board.py` so `*(…)*` completion/archive footnotes in MoSCOW sections are **blocking** (previously skipped as “placeholders”). Pruned seven archive footnotes from `kboard.md` M/S/V/C/W bands; completed history remains in `kanban-completed.md` / `intake-completed.md`. SemVer **v0.4.12+41**.

---

## Changes

### Validator (FR-109)

- **`validate_active_kanban_board.py`** — `*(…)*` lines in MoSCOW now fail strict validation instead of `continue`.
- **`tests/test_validate_active_kanban_board.py`** — regression test for archive footnote placeholder lines.
- **Greenfield-install** — validator parity sync.

### Kanban

- **`kboard.md`** — removed all inline `*(COMPLETE / IMPLEMENTED / No rows…)*` archive prose from active MoSCOW bands.

---

## Verification

- `validate_active_kanban_board.py --strict` — PASS on cleaned board.
- `pytest tests/test_validate_active_kanban_board.py` — PASS.
