---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T13:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 10: E7:S00 detasking — abstract space enforcement (BR-076)

**Task ID:** E04:S19:T10  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (✅ COMPLETE **v0.4.19.10+2**; RW -d **v0.4.19.10+3** BR-076 forensic alignment)  
**Version Anchor:** v0.4.19.10+2 (implementation); RW -d trace **v0.4.19.10+3**  
**Code:** E04S19T10

**Upstream:** [BR-076 — E7:S00 must not host concrete tasks](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)  
**Related:** [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md), [E04:S19:T08](T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md), [E07:S00 Story-000-uxr-repo](../../Epic-7/Story-000-uxr-repo.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Consolidated IPP is planning SoT — [`IPP-E04S19T10-e7-s00-detasking-br076.md`](../../../../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md)

---

## Input

- [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)
- [IPP-E04S19T10](../../../../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md)
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) (Approach A — E7 conforms to E5 S00 model)
- [dev-kit-versioning-policy.md](../../../../../governance/standards/dev-kit-versioning-policy.md) — S00 Abstract Space and Repository-Anchor Transition
- [E5:S00 abstract-only reference](../../Epic-5/Story-000-fr-repo.md)

---

## Problem statement

`E07:S00` still hosted concrete “registry anchor” tasks, forcing duplicate E:S:T coordinates and later re-housing. Maintainer rule: **all `S00` stories are abstract-only** — never temporary task housing.

---

## Deliverable

1. Detask **E07:S00** to match **E05:S00** (abstract-only story doc; historical task paths redirect).
2. Resolve **UXR-005** split (**T05** vs **T09**) as the template exemplar.
3. Update intake/governance docs: **no new tasks under any `S00`**.
4. Coordinate closure with **E04:S19:T08** / **FR-072**.

---

## Migration table (AC4)

| Legacy E07:S00 | UXR | Primary implementing task | Historical anchor |
| -------------- | --- | ------------------------- | ----------------- |
| T01 | UXR-001 | E07:S05:T01 | [T01](../../Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md) |
| T02 | UXR-002 | E07:S05:T02 | [T02](../../Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md) |
| T03 | UXR-003 | E07:S05:T03 | [T03](../../Epic-7/Story-000-uxr-repo/T03-uxr-003-repository-anchor.md) |
| T04 | UXR-004 | E07:S05:T04 | [T04](../../Epic-7/Story-000-uxr-repo/T04-uxr-004-repository-anchor.md) |
| T05 | UXR-005 | **E07:S01:T09** | [T05](../../Epic-7/Story-000-uxr-repo/T05-uxr-005-repository-anchor.md) |
| T06 | UXR-006 | E06:S06:T61 | [T06](../../Epic-7/Story-000-uxr-repo/T06-uxr-006-repository-anchor.md) |

---

## Acceptance criteria

- [x] **AC1:** BR-076 AC1 — `Story-000-uxr-repo.md` abstract-only; no active S00 checklist tasks.
- [x] **AC2:** BR-076 AC2 — T01–T06 historical banners + semantic host links.
- [x] **AC3:** BR-076 AC3 — UXR-005 / boards: single implementing path **E07:S01:T09**.
- [x] **AC4:** Migration table (above).
- [x] **AC5:** Intake skill, FR_BR_INTAKE_GUIDE, KG-R2 updated; T08 coordination note added.

---

## References

- [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)
- [IPP-E04S19T10](../../../../../implementation-cycles/IPP-E04S19T10-e7-s00-detasking-br076.md)
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [E04:S19:T08](T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
