---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-10T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 3, Task 9: IPW full delivery chain (`--rw`) — FR-123

**Task ID:** E02:S03:T09  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Created:** 2026-06-10  
**Last updated:** 2026-06-10 (v0.2.3.9+1 — FR-123 intake banked)  
**Version:** v0.2.3.9+1  
**Code:** E02S03T09  

**Upstream:** [FR-123 — IPW optional full delivery chain](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md)

---

## Scope

Implement optional **`IPW E:S:T --rw`** meta-workflow: after **`IPW COMPLETE`**, chain **IDW** then **local-complete RW** for the same host task.

---

## Input

- [FR-123](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md)
- [FR-119](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md) (IDW `--rw` chain pattern)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md) (IPW baseline)

---

## Deliverable

- `ipw.md` chain contract; cheatsheet + agent routing updates; KB documentation; RW release anchor.

---

## Associated Feature Request

- [FR-123](../../../fr-br/FR-123-ipw-full-delivery-chain-idf-rw.md)

---

## Acceptance Criteria

- [ ] **AC1:** `IPW E:S:T --rw` documented; plan-mode and tool gates preserved.
- [ ] **AC2:** Verified chain: IPW → IDW → RW; RW flags forwarded; default IPW still isolated.
- [ ] **AC3:** Cheatsheet distinguishes IPW `--rw` (full pipeline) vs IDW `--rw` (impl + release).
- [ ] **AC4:** Abort semantics documented; no commit/tag on chain abort.
- [ ] **AC5:** FR-123 ↔ T09 ↔ IPP bidirectional links; RW version anchor.
