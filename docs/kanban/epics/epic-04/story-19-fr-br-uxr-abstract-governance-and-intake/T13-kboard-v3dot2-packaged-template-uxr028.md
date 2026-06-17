---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-11T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S19:T13 — kboard v3.2 packaged template (UXR-028)

**Task ID:** E04:S19:T13  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-11  
**Last updated:** 2026-06-11 (v0.4.19.13+1 — template v2.2.0 shipped; AC3/AC4 deferred)  
**Version:** v0.4.19.13+1  
**Version Anchor:** v0.4.19.13+1  
**Code:** E04S19T13

**Upstream:** [UXR-028](../../../fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md)  
**SBL evidence:** `adk-install-into-sbl/attempt-06/feedback-package/kboard-template-v3dot2.md` · `kboard-populated-example.md`

---

## Input

- [UXR-028](../../../fr-br/UXR-028-kboard-v3dot2-packaged-template-alignment.md) findings R1–R5
- SBL attempt 06 FR-079 package (adopter sign-off final)

---

## Scope

Align `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` with SBL-validated v3.2 lean-board layout; sync greenfield-install mirror.

---

## Deliverable

1. `KANBAN_BOARD_TEMPLATE.md` v2.2.0 (generalised from SBL template).
2. `greenfield-install/` mirror via `sync_greenfield_install.py`.
3. Framework README template section update if needed.

---

## Acceptance criteria

- [x] **AC1:** Template v2.2.0 — single-line rows, V band, split Ongoing, no epic rollup, header links (UXR-028 R1–R4).
- [x] **AC2:** Greenfield mirror synced via `sync_greenfield_install.py` ([FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)).
- [ ] **AC3:** Fresh install spot-check or test documents expected board shape.
- [ ] **AC4:** Optional populated example in templates package (UXR-028 R6).
