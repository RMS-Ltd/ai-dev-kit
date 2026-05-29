---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:07:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 6, Task 62: Global IPW-gated implementation contract (FR-083)

**Task ID:** E6:S06:T62  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-04-20  
**Last updated:** 2026-04-20 (RW v0.6.6.62+2 --art: IPW housing and governance traceability reconciled)  
**Code:** E6S06T62

**Upstream:** [FR-083 - Global IPW-gated implementation contract](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)
**IPW:** [IPW-E6S06T62-global-ipw-gated-implementation-contract](../../../../../implementation-cycles/IPW-E6S06T62-global-ipw-gated-implementation-contract.md)

---

## Task ID

**Full Task ID:** `E6:S06:T62`

---

## Input

- [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md) requirements.
- Existing governance/rules baseline in `AGENTS.md` and `.cursorrules`.

---

## Problem statement

Implementation can begin prematurely when a user requested only intake/planning artifacts. The repository needs a hard, explicit contract that blocks all implementation until IPW and explicit execution permission are in place.

---

## Deliverable

- Explicit global implementation gate policy in `AGENTS.md` and `.cursorrules`.
- Clear preconditions for implementation unlock (task anchor, linked IPW package, explicit user authorization).
- Intake wiring updates (FR/task/story/boards) for traceability.

---

## Scope

1. Add or update repository-level rules to codify global gate behavior.
2. Ensure blocked behavior and missing-precondition handling are explicit.
3. Wire FR-083 and this task into Story 006 checklist and active boards.

---

## Acceptance criteria

- [x] **AC1:** `AGENTS.md` contains a global IPW gate section that blocks implementation without preconditions.
- [x] **AC2:** `.cursorrules` contains matching contract language and mandatory behavior while gated.
- [x] **AC3:** Preconditions include task anchor, linked IPW package, and explicit user execution authorization.
- [x] **AC4:** FR-083 and E6:S06:T62 are linked bidirectionally and visible in active intake/task boards.

---

## References

- [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-074](../../../fr-br/FR-074-kanban-intake-atomic-kg-r2-kg-r6-governance.md)
