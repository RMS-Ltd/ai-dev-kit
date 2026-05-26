---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 12: IPW ADR necessity checklist and decision gate (FR-100)

**Task ID:** E2:S16:T12  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (v0.2.16.12+1 — RW -k kanban documentation setup; FR-100 intake)  
**Version Anchor:** v0.2.16.12+1  
**Code:** E2S16T12

**Upstream:** [FR-100 — IPW ADR necessity checklist and measurable decision gate](../../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Workflow governance and architecture policy only; no new Docusaurus user-facing surface beyond existing standards tree.

---

## Scope

Implement [FR-100](../../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md): a **hybrid ADR decision gate** for IPW (positive triggers T1–T7, narrow exemptions E1–E5), persisted in the IPP and enforced at Phase 9 validation. Replaces subjective “ADR if needed” with measurable criteria and explicit REQUIRED vs EXEMPT outcomes.

**Delivery story:** E2:S16 (perpetual workflow operations) — same housing as FR-096 / T11 IPW documentation phases.

---

## Input

- [FR-100](../../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)
- [FR-096](../../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md) — Phases 5–6 baseline (COMPLETE)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- `.claude/commands/ipw.md`, `PLAN_DOC_TEMPLATE.md`, `implementation-planning-workflow-agent-execution.md`
- [ADR-004](../../../../architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md) — reference pattern for governance-class ADRs

---

## Deliverable

- `docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md` — canonical T1–T7 / E1–E5 tables and artifact-type ladder
- `.claude/commands/ipw.md` — Phase 5.0 ADR necessity decision + gates
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` — §2.5 (or equivalent) + §5 linkage
- `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md` — formal step alignment
- `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` — cross-link
- `docs/architecture/standards-and-adrs/code-review-checklist-templates.md` — checklist pointer

---

## Acceptance Criteria

- [ ] **AC1:** Policy doc published with measurable triggers and exemption rules per FR-100.
- [ ] **AC2:** `/ipw` Phase 5.0 gate documented; cannot complete Phase 5 without ADR decision recorded.
- [ ] **AC3:** IPP template includes ADR decision section and §5 ADR row expectation when REQUIRED.
- [ ] **AC4:** Phase 9 validation checklist updated in `ipw.md` and agent execution guide.
- [ ] **AC5:** FR-042 aligned; FR-100 marked RESOLVED with version when shipped.
- [ ] **AC6:** Bidirectional FR-100 ↔ this task links verified.
- [ ] **AC7:** Implementation preceded by **IPW** for this task (IPP linked below before code/doc edits).

---

## Dependencies

**Depends On:** FR-096 (COMPLETE — documentation phases)  
**Blocks:** None  
**Related:** FR-042, FR-094, ADR-004

---

## References

- [FR-100](../../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- [FR-096](../../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)
