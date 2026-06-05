---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 16: UKW archive completed rows (`-c`) — FR-102

**Task ID:** E02:S16:T16  
**Status:** COMPLETE  
**Priority:** HIGH  
**Task Type:** Discrete delivery (UKW sub-capability)  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (RW **v0.2.16.16+3** — UKW `-c` ledger + board prune)  
**Version Anchor:** v0.2.16.16+2 (functional); **v0.2.16.16+3** (UKW `-c` hygiene)
**Code:** E02S16T16

**Upstream:** [FR-102 — UKW archive-completed use case](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)  
**Coordinates:** [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) (UKW perpetual); [E02:S16:T07](T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) (FBU completed ledger)

Publication Status: NOT_APPLICABLE

---

## Input

- [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [IPP-E2S16T16 — UKW `-c` archive completed](../../../../../implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md)
- Completed-ledger skills: `.cursor/skills/kanban-completed-update`, `.cursor/skills/fr-br-uxr-completed-update`
- Agent SoT: `.cursorrules` UKW section; `update-kanban-workflow-agent-execution.md`
- Helpers: [`archive_completed.py`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py)

---

## Deliverable

Implement and document **`UKW -c`** (archive completed): for terminal task/FBU status, append to **`kanban-completed.md`** / **`intake-completed.md`** via standard Documentation Agent interfaces, then remove rows from active **`kboard.md`** / **`kboard.md`** MoSCOW sections; emit dual-board audit summary.

---

## Acceptance criteria

- [x] **AC1:** `-c` documented in agent SoT, UKW execution guide, and [workflow initiation cheatsheet](../../../../../guides/workflow-initiation-cheatsheet.md); forbidden combinations with `-u`/`-p`/`-a`/`--rp` stated.
- [x] **AC2:** `archive_completed.py` helpers + agent contract mandate ledger-before-removal; operator `UKW -c` path documented (first live run post-release).
- [x] **AC3:** fbuboard / `fr_br_uxr_completed_update` contract documented in ADR-010, `ukw-sync`, VWMP guide.
- [x] **AC4:** Step 9 `## Archive completed summary` required; FR-097 + structure-prune evidence pattern in ADR-010; Option A prune gating in `update_kanban_docs.py`.
- [x] **AC5:** [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md) acceptance criteria satisfied at `RW E02:S16:T16` (**v0.2.16.16+2**).

---

## References

- [IPP-E2S16T16](../../../../../implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md)
- [ADR-010](../../../../../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md)
- [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [FR-076](../../../fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [FR-034](../../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- [kanban-completed.md](../../../kanban-completed.md) · [intake-completed.md](../../../intake-completed.md)
