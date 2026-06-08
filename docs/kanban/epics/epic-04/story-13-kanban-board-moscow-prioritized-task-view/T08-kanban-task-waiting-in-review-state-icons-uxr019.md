---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 13, Task 8: Kanban task `IN REVIEW` and `WAITING` state icons (UXR-019)

**Task ID:** E04:S13:T08  
**Status:** ✅ COMPLETE (v0.4.13.8+1)  
**Priority:** MEDIUM  
**Estimated Effort:** Small–medium  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Version:** v0.4.13.8+1 (SemVer v0.4.884+1)  
**Code:** E04S13T08  

**Upstream:** [UXR-019 — Kanban task WAITING / IN REVIEW state icons](../../../fr-br/UXR-019-kanban-task-waiting-in-review-state-icons.md)  
**Planning package:** [IPP-E4S13T8](../../../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md)

**Related:** [UXR-012](../../../fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md) / [E04:S13:T07](T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md) (base Set A map)

---

## Input

- [IPP-E4S13T8](../../../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md)

---

## Scope

Extend UXR-012 MoSCOW state icons with:

1. **`IN REVIEW`** — **🔍** (Set A) / **◎** (Set B fallback) — **editorial locked (A1)**
2. **`WAITING`** — **⏳** / **⌛** — **locked (B1)** per IPP

Update `state_icons.py`, governance/guide, Gate 9 validator, UKW/RW notes; backfill mislabeled active task rows (e.g. sign-off queue).

---

## Deliverable

- Canonical mapping in `state_icons.py` + longest-first status tokens
- Guide/policy alias table
- Validator allowlist
- Board backfill for agreed rows (T11, T16 when WAITING confirmed)

---

## Acceptance Criteria

- [x] **AC1:** UXR-019 AC1 satisfied (**IN REVIEW** locked; **WAITING** icon confirmed).
- [x] **AC2:** Governance + `state_icons.py` + validator (UXR AC2–AC3).
- [x] **AC3:** UKW/RW usage rules documented (UXR AC4).
- [x] **AC4:** Target kboard rows updated on implementing RW (UXR AC5).

---

## Dependencies

- **Blocked by:** IPW + explicit implementation authorization (P-IPW-GATE).
- **Coordinates with:** [E04:S19:T11](../story-19-fr-br-uxr-abstract-governance-and-intake/T11-kanban-epic-story-path-lowercase-naming-uxr017.md) (candidate **⏳ WAITING** row).

---

## Links

- [IPP-E4S13T8](../../../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md)
- [UXR-019](../../../fr-br/UXR-019-kanban-task-waiting-in-review-state-icons.md)
- [Story 013](../story-13-kanban-board-moscow-prioritized-task-view.md)
- [state-icons.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/state-icons.md)
