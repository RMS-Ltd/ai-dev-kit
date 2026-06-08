---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T10:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 21, Story 9, Task 1: FR-006 Phase 2 header and status reconciliation

**Task ID:** E21:S09:T01  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-08 (v0.21.9.1+1 — RW E21:S09:T01 -k --art)  
**Version:** v0.21.9.1+1  
**Code:** E21S09T01

---

## Scope

Sync [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) intake header: Phase 2 implementing tasks T05–T07 COMPLETE; overall FR status **IN PROGRESS** (Phase 1 + infrastructure done; S03–S07 translation work open).

---

## Input

- Shipped Epic 21 releases S01–S02 and S08 Layer 0–1 on `epic/21-internationalisation-localisation`
- Stale [FR-006](../../../fr-br/FR-006-localization-language-selection-uk-us-english.md) Phase 2 header (T05–T07 listed TODO)
- [`kboard.md`](../../../kboard.md) missing Epic 21 backlog rows

---

## Deliverable

- FR-006 `Status` and Phase 2 task anchor line match shipped releases (through **v0.21.2.7+1**).
- `kboard.md` lists remaining Epic 21 work (admin + deferred + next story).

---

## Acceptance Criteria

- [x] Phase 2 line lists T05–T07 COMPLETE with version anchors
- [x] FR status is IN PROGRESS (not PENDING)
- [x] Epic 21 remaining work visible on active board
