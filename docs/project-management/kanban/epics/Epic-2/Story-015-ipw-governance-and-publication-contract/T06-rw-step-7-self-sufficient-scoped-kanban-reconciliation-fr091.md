---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 6: RW Step 7 self-sufficient scoped kanban reconciliation (FR-091)

**Task ID:** E2:S15:T06  
**Status:** SUPERSEDED -> [E2:S15:T07](T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-27  
**Last updated:** 2026-04-27 (superseded by FR-092 meta-task on day of intake; ownership transferred to E2:S15:T07 Wave 2)  
**Code:** E2S15T06

**Upstream (historical):** [FR-091 — RW Step 7 self-sufficient scoped kanban reconciliation without UKW dependency](../../../fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)  
**Current owner:** [E2:S15:T07 — Canonical RW/UKW kanban consistency program (FR-092 meta)](T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)  
**Current IPP:** [IPP-E2S15T07](../../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

> **Supersede note (2026-04-27):** RW Step 7 self-sufficiency contract (FR-091) is absorbed into FR-092 (Bucket A1-A5 + Wave 2). All open ACs below remain authoritative for traceability; execution has moved to T07. Do not run RW against T06 — release this scope under T07 instead.

---

## Input

- Architecture guidance from user discussion: RW should not rely on UKW; UKW is reactive drift cleanup only.
- Existing contracts to align: FR-038, FR-090, FR-084.
- Current RW Step 7 wording in `.cursorrules` and RW execution docs.
- Hardening scope includes design/specification/policy/documentation updates across both RW and UKW.

---

## Problem statement

RW Step 7 wording currently references UKW mode in a way that can be read as a process dependency. This creates confusion between release-scope preventive reconciliation and board-wide reactive maintenance.

The task establishes an explicit contract:

- RW must finish release-scope kanban reconciliation autonomously.
- UKW remains optional corrective maintenance for cumulative drift.
- No RW correctness criterion can require a subsequent UKW run.

This task also documents the intent behind that contract: UKW exists because canonical workflows are imperfect in practice, and that is an acceptable and expected operational reality. The desired direction is to continuously reduce drift creation in RW and related workflows so UKW becomes a smaller, purely corrective safety net.

---

## Deliverable

- Updated RW/UKW policy language with strict responsibility boundaries.
- Release-scope Step 7 checklist for deterministic reconciliation.
- Cross-document alignment proving non-dependency semantics.
- Hardened design/specification/policy/documentation narrative describing what each workflow does, why this split exists, and how it supports long-term workflow quality.

---

## Scope

1. Replace dependency-suggesting wording in RW Step 7 with self-sufficient reconciliation language.
2. Align UKW docs to define global drift-repair role and optionality relative to RW.
3. Update design/specification/policy artifacts to codify preventive vs corrective ownership as architecture.
4. Add guidance/examples showing release completion without UKW follow-up.
5. Add explicit rationale language that UKW acknowledges canonical workflow imperfection while remaining a desirable fallback state.
6. Update FR/board references for traceability.

---

## Acceptance Criteria

- [ ] **AC1:** RW Step 7 contract language states release-scope self-sufficiency and no UKW dependency.
- [ ] **AC2:** UKW documentation states reactive drift-repair role and non-blocking relationship to RW.
- [ ] **AC3:** Release-scope reconciliation checklist is documented and referenced from RW docs.
- [ ] **AC4:** At least one narrative example demonstrates RW closure without UKW follow-up.
- [ ] **AC5:** Design/specification/policy/documentation all include consistent "what/why" narrative for RW vs UKW responsibilities.
- [ ] **AC6:** FR-091 and story/board references are fully wired.

---

## References

- [FR-091](../../../fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)
- [FR-038](../../../fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-090](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-084](../../../fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md)
