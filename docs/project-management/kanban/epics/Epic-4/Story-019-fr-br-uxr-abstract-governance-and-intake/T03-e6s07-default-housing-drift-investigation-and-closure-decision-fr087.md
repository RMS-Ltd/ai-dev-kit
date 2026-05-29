---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 3: `E6:S07` default-housing drift investigation and closure decision (FR-087)

**Task ID:** E4:S19:T03  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-20  
**Last updated:** 2026-04-27 (IPW E4:S19:T03 published canonical IPP for `E6:S07` default-housing drift forensic-investigation contract, codification inventory, triage rubric, disposition framework, re-housing protocol, and guardrail follow-on candidate set)  
**Code:** E4S19T03

**Upstream:** [FR-087 - Investigate `E6:S07` default-housing drift, codification points, and closure decision](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)

Publication Status: NOT_APPLICABLE
Publication N/A Reason: Single durable IPP per FR-042 §7 consolidated planning model; planning published as one IPP artifact rather than three separate specification/test-design/implementation-plan files.

**Publication Status:** NOT_APPLICABLE (single consolidated IPP — see [`IPP-E4S19T03-e6s07-default-housing-drift-investigation.md`](../../../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md))

---

## Input

- [FR-087](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) requirements.
- Current `E6:S07` charter and task inventory.
- Governance/policy/rules/templates/validator/workflow sources affecting task placement.
- Canonical IPP: [`IPP-E4S19T03-e6s07-default-housing-drift-investigation.md`](../../../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md)

---

## Problem statement

`E6:S07` appears to be operating as a catch-all destination beyond its original charter. Without a forensic root-cause analysis and explicit closure/partition policy, semantic placement drift will continue and undermine traceability integrity.

---

## Deliverable

- Evidence-backed investigation report:
  - Original intent of `E6:S07`.
  - Why and how `S07` became a default destination.
  - Exact codification points vs process habits.
  - Closure/split/narrow recommendation with migration guardrails.
- Actionable policy + validator backlog for enforcement.
- Executed re-housing precedent package for a misfiled task (`BR-069`: `E6:S07:T117` → `E2:S15:T04`) with full traceability rewiring.

---

## Scope

1. Reconstruct `S07` charter and lifecycle from source documents/changelog history.
2. Inventory and evaluate codification surfaces that route or bias task placement.
3. Perform semantic fit audit of `S07` task list.
4. Propose and justify story disposition options with transition strategy.
5. Define and verify re-housing protocol by applying it to at least one concrete mis-housed task.

---

## Acceptance criteria

- [ ] **AC1:** Forensic timeline of `S07` intent and expansion is documented.
- [ ] **AC2:** Codification inventory distinguishes hard-coded routing from human/operator habit.
- [ ] **AC3:** All current `S07` tasks are triaged by semantic fit with rationale.
- [ ] **AC4:** Recommended disposition (`close`/`narrow`/`split`) includes migration and compatibility plan.
- [ ] **AC5:** Follow-on guardrail changes are specified as concrete implementation tasks.
- [x] **AC6:** Re-housing protocol is proven on one real case (`BR-069` moved to `E2:S15:T04`) with Story/FBU/board rewiring.

---

## References

- [Canonical IPP: `IPP-E4S19T03-e6s07-default-housing-drift-investigation.md`](../../../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md)
- [FR-087](../../../fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [Story 007](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [E2:S15:T04](../../../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- [IPP-E2S16T01 - Canonical perpetual ongoing tasks story (delegated perpetual-task placement scope)](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
