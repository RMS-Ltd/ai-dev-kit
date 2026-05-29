---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-091: RW Step 7 self-sufficient scoped kanban reconciliation without UKW dependency

**Type:** Feature Request (FR)  
**ID:** FR-091  
**Submitted:** 2026-04-27  
**Submitted By:** User architecture guidance  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** SUPERSEDED by [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  

**Superseded by:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Implementing Task (current):** [E2:S15:T07](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) (FR-092 meta)  
**Implementing Task (historical):** [E2:S15:T06](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) (SUPERSEDED)

> **Supersede note (2026-04-27):** Scope of FR-091 (RW Step 7 self-sufficient scoped kanban reconciliation; UKW reactive-only role; release-scope minimum outputs; cross-doc consistency) is absorbed into FR-092 Bucket A (A1-A5). All open ACs below remain authoritative; ownership and execution have moved to E2:S15:T07.

---

## Summary

Codify the governance boundary that RW Step 7 must be self-sufficient for release-scope kanban consistency, while UKW remains a reactive drift-repair workflow and not a dependency for release correctness. This FR also hardens design/specification/policy/documentation across RW and UKW to explain what each workflow does, why the separation exists, and why requiring UKW for release correctness is an anti-pattern.

---

## Problem Statement

Current wording around "Scoped Kanban Sync (UKW Mode)" can be interpreted as RW depending on UKW. This creates architectural ambiguity and risks normalizing release-time gaps that are deferred to UKW cleanup.

The intended architecture is:

- RW is preventive and release-atomic.
- UKW is corrective and drift-oriented.
- No workflow should require UKW to complete release-scope correctness.

Without explicit contract language and validation, the boundary can drift, and ownership can blur across release and maintenance workflows.

The desired steady state is that canonical workflows are precise enough that UKW becomes less necessary over time. UKW is intentionally retained as a safety net for real-world process imperfection and historical drift, not as a hidden prerequisite for releasing work.

---

## Requirements

### Functional Requirements

- [ ] **FR-091-F1 (Contract clarity):** Rewrite RW Step 7 contract language to define it as "Scoped Kanban Reconciliation" owned by RW, without naming UKW as a dependency.
- [ ] **FR-091-F2 (Separation model):** Document UKW as optional global maintenance for cumulative drift, explicitly non-blocking for RW completion.
- [ ] **FR-091-F3 (Release-scope completeness):** Define minimum release-scope reconciliation outputs for RW (task/story/FBU row and metadata parity where in-scope).
- [ ] **FR-091-F4 (No handoff debt):** Prohibit deferring release-scope inconsistencies to UKW and describe acceptable out-of-scope boundaries.
- [ ] **FR-091-F5 (Cross-doc consistency):** Align `.cursorrules`, RW execution guide, and board governance notes to the same non-dependency model.
- [ ] **FR-091-F6 (Design/spec hardening):** Add explicit RW/UKW responsibility model language to design/spec artifacts so the philosophy is documented as architecture, not only operational guidance.
- [ ] **FR-091-F7 (Why statement):** Document rationale for UKW existence: it acknowledges canonical workflow imperfection and serves as reactive drift repair, while RW remains preventive and release-atomic.

### Non-Functional Requirements

- [ ] **FR-091-NF1 (Determinism):** RW outcomes must be reproducible without requiring a follow-up UKW pass.
- [ ] **FR-091-NF2 (Auditability):** RW output should explain exactly which kanban surfaces were reconciled and why.
- [ ] **FR-091-NF3 (Layering):** Preventive workflow responsibilities (RW) and corrective workflow responsibilities (UKW) must remain explicitly separated.
- [ ] **FR-091-NF4 (Pedagogical clarity):** Documentation must make the RW/UKW relationship understandable to maintainers without relying on historical context.

---

## Acceptance Criteria

- [ ] RW docs no longer imply UKW as a required dependency for Step 7 completion.
- [ ] UKW docs explicitly describe UKW as reactive/global maintenance and optional with respect to RW.
- [ ] A release-scope checklist exists for Step 7 and is enforceable by wording and validation guidance.
- [ ] At least one end-to-end example shows RW closing scope without requiring UKW cleanup.
- [ ] Design/spec/policy/documentation artifacts include a consistent "what/why" explanation of RW preventive ownership and UKW reactive ownership.

---

## Related

- [FR-038 - RW Step 7 scoped kanban sync](./FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-090 - canonical RW/UKW row transform parity](./FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- [FR-084 - IPP post-run reconciliation ownership](./FR-084-ipp-post-run-governance-reconciliation-ownership.md)
