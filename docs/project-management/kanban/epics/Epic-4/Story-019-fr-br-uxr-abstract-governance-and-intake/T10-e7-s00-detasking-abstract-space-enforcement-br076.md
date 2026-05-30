---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T13:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 10: E7:S00 detasking — abstract space enforcement (BR-076)

**Task ID:** E04:S19:T10  
**Status:** TODO (kanban documentation initialized)  
**Priority:** HIGH  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (**RW -k --art** **v0.4.19.10+1** — kanban init)  
**Version Marker:** v0.4.19.10+1  
**Code:** E04S19T10

**Upstream:** [BR-076 — E7:S00 must not host concrete tasks](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)  
**Related:** [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md), [E04:S19:T08](T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md), [E07:S00 Story-000-uxr-repo](../../Epic-7/Story-000-uxr-repo.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Delivery tracked via BR-076 and FR-072; IPP if implementation scope warrants.

---

## Input

- [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) (Approach A — E7 conforms to E5 S00 model)
- [dev-kit-versioning-policy.md](../../../../../governance/standards/dev-kit-versioning-policy.md) — S00 Abstract Space and Repository-Anchor Transition
- [E5:S00 abstract-only reference](../../Epic-5/Story-000-fr-repo.md)

---

## Problem statement

`E07:S00` still hosts concrete “registry anchor” tasks, forcing duplicate E:S:T coordinates and later re-housing. Maintainer rule: **all `S00` stories are abstract-only** — never temporary task housing.

---

## Deliverable

1. Detask **E07:S00** to match **E05:S00** (abstract-only story doc; historical task paths redirect).
2. Resolve **UXR-005** split (**T05** vs **T09**) as the template exemplar.
3. Update intake/governance docs: **no new tasks under any `S00`**.
4. Coordinate closure with **E04:S19:T08** / **FR-072**.

---

## Acceptance criteria

- [ ] **AC1:** BR-076 AC1–AC5 satisfied (see BR doc).
- [ ] **AC2:** `kboard` / `fbuboard` show single implementing paths for affected UXRs (no registry **S00** work rows).
- [ ] **AC3:** Intake skill / FR_BR_INTAKE_GUIDE / kanban governance KG-R2 updated with S00 prohibition.
- [ ] **AC4:** Evidence note in this task doc (migration table: old `E07:S00:Txx` → semantic host).

---

## References

- [BR-076](../../../fr-br/BR-076-e7-s00-must-not-host-concrete-tasks.md)
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md)
- [E04:S19:T08](T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
