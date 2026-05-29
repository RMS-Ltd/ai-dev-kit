---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T16:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 2: Canonical supporting Kanban/FBU doc naming and `FBU` collective terminology (FR-086)

**Task ID:** E4:S19:T02  
**Status:** SUPERSEDED  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-04-26 (superseded by E4:S19:T06 meta-task; historical task retained)  
**Code:** E4S19T02

**Upstream:** [FR-086 - Canonical supporting Kanban/FBU doc naming and `FBU` collective terminology](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
**IPP (historical):** [`IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md`](../../../../../implementation-cycles/IPP-E4S19T02-canonical-supporting-kanban-fbu-doc-naming-and-terminology.md)
**Superseded by:** [E4:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) · [IPP-E4S19T06](../../../../../implementation-cycles/IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)

---

## Input

- [FR-086](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) requirements.
- Existing canonical board naming baseline from [E6:S07:T114](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md).
- Existing collective-reference usage across Kanban/FBU docs.

---

## Problem statement

Naming and terminology are partially canonicalized (`kboard`/`fbuboard`) but supporting docs and collective references remain inconsistent. This task standardizes supporting doc naming and collective `FBU` terminology while preserving individual FR/BR/UXR issue identities.

---

## Deliverable

- Canonical naming map for supporting Kanban/FBU docs.
- Documented and applied `FBU` collective terminology standard.
- Preserved individual issue naming (`FR-`, `BR-`, `UXR-`) with explicit guardrail.
- Link-safe migration with aliases and validation strategy.

---

## Scope

1. Define canonical supporting doc naming targets and compatibility aliases.
2. Define and apply `FBU` collective terminology rules.
3. Preserve individual issue identity and filename conventions.
4. Wire FR/task/story/boards for deterministic traceability.

---

## Acceptance criteria

- [ ] **AC1:** Supporting Kanban/FBU docs have a canonical naming scheme and migration plan.
- [ ] **AC2:** Collective references use `FBU` in scoped docs.
- [ ] **AC3:** Individual issue docs remain `FR-*`, `BR-*`, `UXR-*` (no prefix migration).
- [ ] **AC4:** Renamed/aliased docs maintain valid links across touched documentation.
- [ ] **AC5:** FR-086 and E4:S19:T02 are bidirectionally linked and visible in story/boards.

---

## References

- [FR-086](../../../fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [E6:S07:T114](../../../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
