---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-09T15:15:00Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – FBU Prioritization Board (deprecated)

**Status:** **DEPRECATED** as active MoSCOW board — **2026-06-05** ([ADR-018](../../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md), **v0.4.19.12+1**, [UXR-020](fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md))

**Last Updated:** 2026-06-05 (RW **E04:S19:T12** — single-board Wave 1)

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

**Implementation:** [E04:S19:T12](epics/epic-04/story-19-fr-br-uxr-abstract-governance-and-intake/T12-fbuboard-necessity-investigation-uxr020.md) · [IPP-E04S19T12](../../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)
