---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 2: Brownfield modular adopter integration (FR-081)

**Task ID:** E6:S09:T02  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-04-19  
**Last updated:** 2026-05-29 (implementation — FR-081 brownfield INSTALL chapter; pending RW **v0.6.9.2+2**)  
**Version:** v0.6.9.2+2  
**Code:** E6S09T02

**Upstream:** [FR-081 - Brownfield modular adopter integration](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Task ID

**Full Task ID:** `E6:S09:T02`

---

## Input

- **FR-081** scope (modular adoption, contract-first wiring).
- **IPP:** [`IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md`](../../../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)
- [ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) and greenfield delivery (**FR-080** / **E6:S09:T01**) for cross-links only.
- [`rw-validators-consumer-layout.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/docs/rw-validators-consumer-layout.md) and user-docs installation guides.
- **Brownfield SoT:** [`INSTALL_IN_YOUR_PROJECT.md`](../../../../../../INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories)

---

## Problem statement

[ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) states that brownfield projects own their architecture. Adopters need **actionable** guidance: required vs optional integration surfaces, contract-first wiring, and respect for host trees—without conflating with the greenfield happy path (FR-080 / **E6:S09:T01**).

---

## Deliverable

- **Brownfield adoption** documentation and any **targeted** installer or messaging changes required by FR-081.
- **Per-surface matrices** (required / optional / recommended) for partial adoption.
- **Tradeoff log** for decisions explicitly deferred (so context is not lost).

---

## Scope

1. Author or extend **brownfield** section(s) in `framework-dependency-installation-guide.md` and `INSTALL_IN_YOUR_PROJECT.md` (exact split per implementation).
2. Add **worked example** of partial adoption (hypothetical or anonymized).
3. Audit framework READMEs for **imposed-tree** language; align with **modular, contract-first** messaging.
4. File follow-up tasks for any large sub-efforts uncovered (do not silently expand scope without Kanban intake).

---

## Acceptance criteria

- [x] **AC1:** FR-081 requirements satisfied or deferred with documented rationale ([FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md) implementation evidence; [IPP §8](../../../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)).
- [x] **AC2:** Brownfield readers can determine **minimum wiring** for RW-only vs fuller stack paths ([INSTALL brownfield matrices](../../../../../../INSTALL_IN_YOUR_PROJECT.md#per-surface-adoption-matrix)).
- [x] **AC3:** ADR-003 referenced from installation docs as policy anchor for brownfield ([INSTALL §Brownfield](../../../../../../INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories)).

## Delivery notes (2026-05-29)

- Canonical brownfield SoT: [`INSTALL_IN_YOUR_PROJECT.md`](../../../../../../INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories).
- Planning: [IPP-E6S09T02](../../../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md).
- Structural test: `tests/test_install_brownfield_docs.py`.

## Version Anchor

**Forensic markers:** `✅ COMPLETE (v0.6.9.2+2)` — FR-081 brownfield modular adoption (INSTALL chapter + satellite docs + installer messaging).

---

## Dependencies / coordination

- **E6:S09:T01:** Greenfield docs must remain clearly separated from brownfield content.

---

## References

- [IPP-E6S09T02](../../../../implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md)
- [INSTALL_IN_YOUR_PROJECT.md — Brownfield adoption](../../../../../../INSTALL_IN_YOUR_PROJECT.md#brownfield-adoption-existing-repositories)
- [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md)
- [ADR-003](../../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [IPW-E6S09T01](../../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md) (greenfield counterpart)
