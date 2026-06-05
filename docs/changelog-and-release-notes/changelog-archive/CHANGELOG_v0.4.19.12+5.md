# Changelog v0.4.19.12+5

**Release Date:** 2026-06-05 01:54:01 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 12  
**SemVer:** v0.4.904+5  
**Summary:** Intake rename wave — delete `fbuboard`/`kanban-board`, `fbu-*` → `intake-*`, three-surface tooling

---

## Summary

`RW E04:S19:T12` intake rename wave (A+B+C): removed legacy dual-board files, renamed supporting intake ledgers, aligned validators/scripts/docs to three-surface RW Step 7, and pruned orphan `ukw-changes-summary-*.md` from kanban root.

---

## Changed

### Kanban root

- **Deleted:** `fbuboard.md`, `kanban-board.md`, five `ukw-changes-summary-*.md` orphans
- **Renamed:** `fbu-completed.md` → `intake-completed.md`, `fbu-structure.md` → `intake-structure.md`, `fbu-open-taskless-queue.md` → `intake-open-taskless-queue.md`
- **`kanban/README.md`**, **`kanban-board-guide.md`** — single-board + intake naming

### Framework / workflow

- Three-surface RW Step 7 contract (`task_doc`, `fbu_doc`, `kboard`) across `update_kanban_docs.py`, validators, UKW/RW guides
- **Deleted** `FBUBOARD_STUB_TEMPLATE.md`; fresh install emits `kboard.md` only
- `validate_active_kanban_board.py`, `stamp_authority.py`, `install_kanban_framework.py` — single-board only
- ADR-018 + adopter migration guide updated for intake naming

### Housekeeping

- `KB-INDEX.md` / `KB-INDEX.json` — removed stale `ukw-changes-summary` entries

---

## Epic | Story | Task

**E04:S19:T12** — intake rename wave build on completed single-board consolidation (UXR-020 / ADR-018).
