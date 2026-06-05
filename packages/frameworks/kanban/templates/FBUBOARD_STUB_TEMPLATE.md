---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# {Project Name} – FBU Prioritization Board (deprecated)

**Status:** **DEPRECATED** as active MoSCOW board — **{Date}** ([ADR-018 single-board consolidation](https://github.com/RMS-Ltd/ai-dev-kit/blob/dev/docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md))

**Last Updated:** {Date} (fresh install — single-board default)

---

## Redirect

All **active MoSCOW prioritization** now lives on **[`kboard.md`](kboard.md)**:

- **Verification (V)** band — task shipped, FBU verification pending (formerly fbuboard-only M/S rows)
- **Could Have / Ongoing / Won't** — in-flight and backlog tasks (with FBU links where wired)

**Do not** add MoSCOW rows to this file. UKW/RW **must not** maintain active rows here.

---

## Related surfaces (unchanged)

| Surface | Role |
| ------- | ---- |
| [`kboard.md`](kboard.md) | **Active** MoSCOW (sole board) |
| [`fbu-completed.md`](fbu-completed.md) | Terminal FBU history |
| [`fbu-structure.md`](fbu-structure.md) | Full FBU inventory by type |
| [`fr-br/`](fr-br/) | FBU source documents |

**Brownfield migration:** See `packages/frameworks/kanban/guides/single-board-migration-adopter-note.md`.
