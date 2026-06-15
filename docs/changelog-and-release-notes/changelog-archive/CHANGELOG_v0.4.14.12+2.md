# Changelog v0.4.14.12+2

**Release Date:** 2026-06-15 20:04:56 UTC

## Summary

**FR-134** delivery: SQLite completed-task ledger (`.adk/kanban-completed.db`) replaces markdown SoT; UKW regenerates `kanban-completed.pdf`.

## Changes

### Attempted implementation

- **`kanban_completed` module:** schema, upsert, markdown import, stdlib PDF export
- **CLIs:** `init_kanban_completed_db.py`, `append_kanban_completed.py`, `import_kanban_completed_md.py`, `export_kanban_completed_report.py`
- **`validate_kanban_completed.py`** — ledger + PDF gate
- **`rw-config.yaml`** `kanban_completed` keys; greenfield-install mirror synced
- **Brownfield:** 245 legacy rows imported; `kanban-completed.md` → redirect stub
- **Tests:** `tests/kanban/test_kanban_completed_ledger.py` (3 passing)
- **Docs:** workflow cheatsheet UKW `-c` row; skill updated

### Kanban

- **E04:S14:T12** COMPLETE; **FR-134** IMPLEMENTED
