---
name: kanban-completed-update
description: Upsert completed tasks in SQLite ledger and export PDF report (FR-134)
---

> **FR-134:** Markdown ledger retired. Use CLIs; UKW regenerates PDF.

# kanban_completed_update Skill

**Skill ID:** kanban-completed-update  
**Agent:** Documentation Agent

## Purpose

Upsert rows in **`.adk/kanban-completed.db`** via `append_kanban_completed.py`. After UKW archival steps, run `export_kanban_completed_report.py` to refresh **`docs/kanban/kanban-completed.pdf`**.

## CLI (mandatory)

```bash
python packages/frameworks/workflow-mgt/scripts/kanban/append_kanban_completed.py \
  --task E04:S14:T12 --version v0.4.14.12+1 \
  --timestamp 2026-06-15T20:00:00Z --agent "UKW -c" --summary "Task summary"

python packages/frameworks/workflow-mgt/scripts/kanban/export_kanban_completed_report.py
```

## UKW integration

- **`UKW -c` / comprehensive UKW:** ledger upsert before kboard prune; PDF export at Step 9.
- Do **not** edit `kanban-completed.md` body (redirect stub only).

## References

- [FR-134](docs/kanban/fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)
- [IPP-E04S14T12](docs/implementation-cycles/IPP-E04S14T12-kanban-completed-sqlite-ledger-pdf-report.md)
