---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 8: FR-072 Approach D — phases D2–D4 migration and doc sweep

**Task ID:** E04:S19:T08  
**Status:** ✅ COMPLETE (v0.4.19.8+2)  
**Priority:** HIGH  
**Created:** 2026-05-29  
**Last updated:** 2026-06-01 (RW -d **v0.4.19.8+3** — Step 9 readiness artifacts for **+2** closure)  
**Version Anchor:** v0.4.19.8+2 (functional); **v0.4.19.8+3** (docs-only forensics)  
**Code:** E04S19T08

**Upstream:** [FR-072 — Uniform repository vs abstract-space kanban rules](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)  
**Historical registry:** [E05:S01:T72](../../Epic-5/Story-001-fr-repo/T72-uniform-repository-abstract-space-kanban-rules.md)  
**Coordinates:** [E04:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md), [E04:S19:T07](T07-fr021-repository-pattern-supersession-fr072-reconciliation.md) (**merged into T08**), [E04:S19:T10](T10-e7-s00-detasking-abstract-space-enforcement-br076.md) ([BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md))

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Consolidated IPP — [`IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md`](../../../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)

---

## Input

- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md); batch open-FBU semantic wiring (2026-05-29 **v0.4.19.8+1**).
- [IPP-E04S19T08](../../../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md) (includes merged **T07** / FR-021 supersession).

---

## Deliverable

Complete **FR-072** phases **D2–D4**: migrate remaining primary-task pointers from repository stories to semantic hosts; sweep active docs (intake guide, `.cursorrules`, validators) for E5:S01/E6:S01/E7:S00 default-housing language. **Merged:** FR-021 supersession (former **E04:S19:T07**).

**E7 closure slice:** [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md) / [E04:S19:T10](T10-e7-s00-detasking-abstract-space-enforcement-br076.md) — E7:S00 hollowed to abstract-only; do not duplicate that work in T08.

## Acceptance criteria

- [x] **AC1:** Decision memo + ADR/governance entry published — [ADR-014](../../../../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md); FR-072 decision memo retained.
- [x] **AC2:** Open FBUs on **fbuboard** show semantic `E:S:T` links (audit 2026-06-01: active rows OK).
- [x] **AC3:** **FR-072** status → COMPLETE when D2–D4 verified; registry tasks marked historical-only.

## References

- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [FR-021](../../../fr-br/FR-021-fr-br-uxr-repository-stories.md) (superseded for new intake)
- [ADR-014](../../../../architecture/standards-and-adrs/ADR-014-repository-abstract-space-fr072-approach-d.md)
- [IPP-E04S19T08](../../../../implementation-cycles/IPP-E04S19T08-fr072-approach-d-d2-d4-migration-and-doc-sweep.md)
