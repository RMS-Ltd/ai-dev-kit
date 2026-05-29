---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 21: FR/BR/UXR Repository Stories (S01 Pattern)

**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-03-31 (**RW -k** — **v0.5.1.21+0** release; reconcile legacy FR-021 reqs with **E7:S00** via **FR-072** / **T72**)  
**Version:** v0.5.1.21+0  
**Code:** E5S01T21

---

## Task ID

**Full Task ID:** `E5:S01:T21`

**Repository pattern:** FR-021 → E5:S01:T21 (abstract space **v0.5.1.21+0**)

---

## Scope

Track **FR-021** — formal **FR / BR / UXR repository story** pattern: PERPETUAL repo stories, 1:1 traceability from report number to **E#:S01:Txx** (or **E7:S00:Txx** for UXR in this repo), intake before implementation assignment, and board omission rules. Close remaining requirement gaps (notably **E7** UXR housing) and align docs with **current** Kanban governance (**KG-R2**, **KG-R6**) and **T72**.

---

## Input

- [FR-021](../../../fr-br/FR-021-fr-br-uxr-repository-stories.md)  
- [FR-072](../../../fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) · [E5:S01:T72](T72-uniform-repository-abstract-space-kanban-rules.md)  
- [Story-001-fr-repo.md](../Story-001-fr-repo.md) · [Story-000-uxr-repo](../../Epic-7/Story-000-uxr-repo.md)

---

## Deliverable

- Up-to-date task narrative + checklist alignment for FR-021 acceptance criteria still open (**R03** / **R06** or superseded-by policy documented).  
- Bidirectional links FR-021 ↔ this task; board / structure listings cite **E5:S01:T21** where FR-021 appears.

---

## Acceptance Criteria

- [x] **AC1:** FR-021 header lists **Implementing Task** → this document.  
- [ ] **AC2:** Story-001 checklist row for **T21** stays in sync with FR-021 status.  
- [ ] **AC3:** Conflicts between FR-021 (historical S01-only wording) and **E7:S00** UXR pattern are explicitly resolved in task notes or FR amendment (via **T72** decision).

---

## Dependencies

**Related:** E5:S01:T72 (uniform repository vs abstract-space rules), Epic 7 Story 000 (UXR repository pattern).

---

## Approach

1. Inventory open FR-021 requirements vs current repo layout.  
2. Record decisions in FR-021 or linked ADR-style note; update MoSCOW / board lines.  
3. Run **`RW` / `RW -k`** on `epic/5-documentation-management` when changing **version.py** for this task.

---

**Feature Request:** [FR-021](../../../fr-br/FR-021-fr-br-uxr-repository-stories.md)
