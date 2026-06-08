---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Directory

All Kanban documentation for `ai-dev-kit`: task management, FR/BR/UXR intake, and epic/story/task hierarchy.

## Structure

```text
kanban/
├── _index.md                      # Quick board view (obligatory)
├── README.md                      # This file (obligatory)
├── kboard.md                      # Sole active MoSCOW board (ADR-018)
├── kanban-structure.md            # Epic/Story/Task structure
├── kanban-board-guide.md          # Rules and explanations
├── kanban-completed.md            # Completed tasks ledger
├── intake-structure.md            # FR/BR/UXR inventory by type
├── intake-completed.md            # Completed FR/BR/UXR ledger
├── intake-open-taskless-queue.md  # Open ∧ taskless intake working queue
├── fr-br/                         # Individual FR/BR/UXR documents
└── epics/                         # Epic → Story → Task docs
```

**Removed (intake rename wave):** `fbuboard.md`, `kanban-board.md`, `fr-br-uxr-*` root aliases, and `fbu-*` filenames (→ `intake-*`).

## Active surfaces

| Surface | Role |
| ------- | ---- |
| `kboard.md` | Sole MoSCOW board (tasks + wired FBUs + Verification band) |
| `intake-structure.md` | Full FR/BR/UXR inventory |
| `intake-open-taskless-queue.md` | Open ∧ taskless intake queue |
| `intake-completed.md` | Terminal FBU ledger |
| `kanban-completed.md` | Terminal task ledger |
| `fr-br/*.md` | Per-report SoT |

## Workflow (summary)

1. File FR/BR/UXR under `fr-br/` and create implementing task same session (KG-R2).
2. Add MoSCOW row on `kboard.md`; update `intake-structure.md` / queue as needed.
3. On completion, move to `intake-completed.md` / `kanban-completed.md` and prune active rows.

See [kanban-board-guide.md](kanban-board-guide.md) and [ADR-018](../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md).
