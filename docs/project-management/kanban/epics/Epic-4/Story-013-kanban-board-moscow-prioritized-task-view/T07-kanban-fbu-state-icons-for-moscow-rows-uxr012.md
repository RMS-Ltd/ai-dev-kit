---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 13, Task 7: Kanban and FBU state icons for MoSCOW rows (UXR-012)

**Task ID:** E4:S13:T07  
**Status:** ✅ COMPLETE (v0.4.13.7+2)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-05-20  
**Last updated:** 2026-05-20 (BUILD+2: RW MoSCOW COMPLETE + emoji rows)  
**Code:** E4S13T07

**Upstream:** [UXR-012 — Kanban and FBU state icons for MoSCOW rows](../../../fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)

**Planning artifact:** [IPP-E4S13T07 — Kanban and FBU state icons](../../../../../implementation-cycles/IPP-E4S13T07-kanban-fbu-state-icons-moscow-rows.md)

---

## Input

- User validated `✅` prefix on COMPLETE task rows improves scanability.
- Requirement: **all** task and FBU states on `kboard.md` / `fbuboard.md` get a canonical icon.
- **Editorial decision (2026-05-20):** **Set A (emoji) on boards**; **Set B (Unicode) fallback** where emoji unsupported (see UXR-012 primary → fallback table).

---

## Deliverable

1. Record editorial choice (mapping table in guide + policy).
2. Update row templates and agent guides (UKW/RW, `.cursorrules`).
3. Corpus backfill of active MoSCOW rows.
4. Optional validator for icon presence / known mapping.

---

## Acceptance Criteria

- [x] **AC1:** Signed-off icon mapping published (per UXR-012 AC1).
- [x] **AC2:** Governance docs updated (UXR AC2).
- [x] **AC3:** Active MoSCOW rows on both boards fully iconized (UXR AC3).
- [x] **AC4:** UKW/RW deterministic application (UXR AC4).
- [x] **AC5:** Validator shipped (`validate_kanban_state_icons.py`) + Gate 9 (UXR AC5).

---

## References

- [UXR-012](../../../fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)
- [IPP-E4S13T07](../../../../../implementation-cycles/IPP-E4S13T07-kanban-fbu-state-icons-moscow-rows.md)
- [kanban-board-guide.md](../../../kanban-board-guide.md)
- [Story 013](../Story-013-kanban-board-moscow-prioritized-task-view.md)
