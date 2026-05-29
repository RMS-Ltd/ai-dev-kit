---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 5: Markdown Documentation Maintenance (Perpetual)

**Task ID:** E2:S16:T05  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-22  
**Last updated:** 2026-04-27 (Wave 2 discoverability uplift: IPP cross-link parity and perpetual marker alignment)  
**Code:** E2S16T05
**Task Type:** Perpetual Maintenance

**Upstream:** [FR-088 - Dedicated story for perpetual ongoing tasks](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Input

- [FR-088](../../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) requirements.
- Story-level perpetual ownership model in [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md).
- Canonical policy IPP: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md).

---

## Problem statement

Recurring markdown-only documentation maintenance is a distinct operational stream and should not be overloaded onto broader workflow-maintenance or kanban-synchronization perpetual lanes.

---

## Deliverable

- Canonical perpetual anchor for recurring markdown documentation maintenance.
- Explicit routing boundary: this task covers markdown-only documentation upkeep and excludes workflow behavior changes and kanban synchronization operations.
- Cross-linked story/task wiring so releases and hygiene runs can attribute markdown maintenance consistently.

---

## Scope

### In scope

- Markdown formatting and lint hygiene.
- Wording clarity, structure consistency, and section normalization in `.md` docs.
- Internal markdown link hygiene and metadata/frontmatter cleanup.

### Out of scope

- RW/UKW/CMW behavior or script logic changes.
- Kanban synchronization operations (owned by `E2:S16:T04`).
- Broader workflow-maintenance operational changes (umbrella in `E2:S16:T03`).

---

## Acceptance criteria

- [ ] **AC1:** Task naming and scope clearly communicate markdown documentation maintenance purpose.
- [ ] **AC2:** Story 016 checklist includes this task as an active perpetual lane.
- [ ] **AC3:** Scope boundaries with `E2:S16:T03` and `E2:S16:T04` are explicitly documented and unambiguous.
- [ ] **AC4:** References are stable and suitable for ongoing attribution of markdown-only maintenance work.

---

## References

- [Canonical policy IPP: `IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- [E2:S16:T01 - Establish canonical perpetual ongoing tasks story (FR-088)](./T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)
- [E2:S16:T03 - Workflow maintenance (Perpetual)](./T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [E2:S16:T04 - Ad-hoc Kanban synchronization and hygiene (Perpetual)](./T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
