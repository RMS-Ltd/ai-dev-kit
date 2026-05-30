---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 9: Two-digit E/S/T identifier default formatting (UXR-014)

**Task ID:** E4:S19:T09  
**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-05-30  
**Last updated:** 2026-05-30 (**RW -k** **v0.4.19.9+1** — UXR-014 kanban init)  
**Version Anchor:** v0.4.19.9+1  
**Code:** E4S19T09  

Publication Status: NOT_APPLICABLE

**Upstream:** [UXR-014 — Two-digit default formatting for E/S/T identifiers](../../../fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)

---

## Input

- [UXR-014](../../../fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) findings and recommendations.
- Current mixed inline notation on `kboard.md`, `fbuboard.md`, and story checklists.
- Existing **`Exx:Sxx:Txx`** policy language in kanban governance and templates.
- Parser tolerance patterns in workflow validators.

---

## Problem statement

Inline `E#:S#:T#` references use inconsistent zero padding for Epic, Story, and Task components when numeric values are less than 10. The user requires **two-digit defaults everywhere** (`E02:S01:T04`), while the corpus and agents still emit unpadded variants (`E2:S1:T4`), harming scan consistency and encouraging copy-paste drift.

---

## Deliverable

- Normative **write-default** rule: two-digit zero padding for E, S, and T when value `<10`.
- Updated governance/guide text with examples and read-tolerance note.
- Normalized active board rows and high-traffic agent rule examples.
- Bidirectional UXR ↔ task wiring and story checklist entry.

---

## Scope

1. Policy/guide updates (`kanban-governance-policy.md`, `kanban-board-guide.md` or equivalent).
2. Active `kboard.md` / `fbuboard.md` normalization for `<10` components.
3. Agent/workflow guidance (`.cursorrules` excerpt, intake skill, RW/UKW Step 7 notes) — **default padded output**.
4. Document parser tolerance (accept unpadded legacy; do not require mass historical rewrites outside active surfaces).

**Out of scope:**

- Renaming task **files** (covered by UXR-011 / `validate_kanban_naming.py`).
- Changing perpetual task range semantics (T101+).
- Mandatory CI strict mode (optional follow-on FR).

---

## Acceptance criteria

- [ ] **AC1:** Governance policy explicitly requires two-digit default for **E, S, and T** in inline notation with `<10` examples.
- [ ] **AC2:** Board guide documents write-default vs read-tolerance.
- [ ] **AC3:** Active kboard/fbuboard rows use padded E/S/T for components `<10`.
- [ ] **AC4:** Agent/intake/RW/UKW guidance defaults to padded form on new writes.
- [ ] **AC5:** UXR-014 status moves to ACCEPTED when AC1–AC4 are satisfied; task reconciled to actual state.

---

## Dependencies

**Coordinates with:** UXR-005 (template maintenance), UXR-010 (row token contract), UXR-011 (file naming), FR-072 doc sweep.

**Blocked by:** None at intake.

---

## References

- [UXR-014](../../../fr-br/UXR-014-two-digit-est-identifier-default-formatting.md)
- [Story 019](../Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [kboard](../../../kboard.md)
- [fbuboard](../../../fbuboard.md)
