---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T14:48:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-084: IPP post-run governance reconciliation ownership

**Type:** Feature Request (FR)  
**ID:** FR-084  
**Submitted:** 2026-04-20  
**Submitted By:** User feedback / workflow governance hardening  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** SUPERSEDED by [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)

**Superseded by:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Implementing Task (current):** [E2:S15:T07](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) (FR-092 meta)  
**Implementing Task (historical):** [E2:S15:T02](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md) (SUPERSEDED)
**IPP (historical):** [`IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md`](../../../implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md)
**IPP (current):** [IPP-E2S15T07](../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

> **Supersede note (2026-04-27):** FR-084 four-surface (task + FR/BR/UXR + kboard + fbuboard) IPP post-run reconciliation contract is absorbed into FR-092 Bucket A (A4) and Wave 3. All open ACs remain authoritative; ownership and execution have moved to E2:S15:T07.

---

## Summary

The IPW workflow must own post-run governance reconciliation through IPP by updating all required traceability surfaces at completion time: host task doc, source FR/BR/UXR doc, `kboard.md`, and `fbuboard.md`.

---

## Problem Statement

IPW planning runs can leave governance artifacts out of sync even when planning content exists. Without explicit post-run ownership, task/FR status and board visibility drift, creating stale or contradictory state and requiring manual cleanup.

---

## Requirements

### Functional Requirements

- [ ] **FR-084-F1:** Define explicit IPP post-run responsibility to reconcile host task doc state and planning links.
- [ ] **FR-084-F2:** Define explicit IPP post-run responsibility to reconcile source FR/BR/UXR document status/links.
- [ ] **FR-084-F3:** Define explicit IPP post-run responsibility to reconcile `kboard.md` task row presence/state.
- [ ] **FR-084-F4:** Define explicit IPP post-run responsibility to reconcile `fbuboard.md` FR/BR/UXR row presence/state.
- [ ] **FR-084-F5:** Require deterministic reconciliation order and idempotent behavior on repeat runs.

### Non-Functional Requirements

- [ ] **FR-084-NF1:** Reconciliation behavior must be auditable with clear per-surface action reporting.
- [ ] **FR-084-NF2:** Behavior must not silently overwrite state when evidence is ambiguous; emit explicit warnings.

---

## Acceptance Criteria

- [ ] IPP documentation/spec clearly states post-run ownership for all four surfaces (task, FR/BR/UXR, `kboard`, `fbuboard`).
- [ ] Task and FR are bidirectionally linked and housed under semantic IPW-governance story.
- [ ] Boards include linked entries for FR-084 and E2:S15:T02.
- [ ] Re-run expectations are explicitly defined (idempotent reconciliation, no duplicate rows).

---

## Scope Analysis

**Problem Domain:** IPP governance contract, workflow closeout integrity  
**Affected Areas:**

- [x] IPW governance story/task docs
- [x] FR intake and task wiring docs
- [x] `kboard.md` and `fbuboard.md` tracking surfaces
- [ ] Runtime workflow scripts (implementation follow-up)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [FR-042](./FR-042-implementation-planning-workflow-ipw.md)
- [FR-075](./FR-075-icw-durable-planning-artifacts-documentation-system.md)
- [FR-083](./FR-083-global-ipw-gated-implementation-contract.md)
- [BR-066](./BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
