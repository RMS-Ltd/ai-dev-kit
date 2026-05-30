---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 16: UKW archive completed rows (`-c`) — FR-102

**Task ID:** E02:S16:T16  
**Status:** TODO  
**Priority:** HIGH  
**Task Type:** Discrete delivery (UKW sub-capability)  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (**RW -k** **v0.2.16.16+1** — FR-102 kanban init)  
**Version Anchor:** v0.2.16.16+1  
**Code:** E02S16T16

**Upstream:** [FR-102 — UKW archive-completed use case](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)  
**Coordinates:** [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) (UKW perpetual); [E02:S16:T07](T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) (FBU completed ledger)

Publication Status: NOT_APPLICABLE

---

## Input

- [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)
- Completed-ledger skills: `.cursor/skills/kanban-completed-update`, `.cursor/skills/fr-br-uxr-completed-update`
- Agent SoT: `.cursorrules` UKW section; `update-kanban-workflow-agent-execution.md`

---

## Deliverable

Implement and document **`UKW -c`** (archive completed): for terminal task/FBU status, append to **`kanban-completed.md`** / **`fbu-completed.md`** via standard Documentation Agent interfaces, then remove rows from active **`kboard.md`** / **`fbuboard.md`** MoSCOW sections; emit dual-board audit summary.

---

## Acceptance criteria

- [ ] **AC1:** `-c` documented in agent SoT, UKW execution guide, and [workflow initiation cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md); forbidden combinations with `-u`/`-p`/`-a`/`--rp` stated.
- [ ] **AC2:** One successful agent run archives at least one stale **COMPLETE** kboard row (e.g. post-release tasks) with ledger entry before removal.
- [ ] **AC3:** Same run applies parallel **fbuboard** → **fbu-completed.md** handling for terminal FBUs; bidirectional task/FBU pairs stay consistent.
- [ ] **AC4:** Run log includes archived / skipped / idempotent-no-op counts; FR-097 stamp policy respected (no batch fabricated row stamps).
- [ ] **AC5:** [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md) acceptance criteria satisfied; task status reconciled on release.

---

## References

- [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [FR-076](../../../fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [FR-034](../../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- [kanban-completed.md](../../../kanban-completed.md) · [fbu-completed.md](../../../fbu-completed.md)
