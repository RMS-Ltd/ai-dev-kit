---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 24: Acquisition-layer ADK error codes (FR-111)

**Task ID:** E06:S09:T24  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW E06:S09:T24 — FR-111 doc link hygiene)  
**Version:** v0.6.9.24+3  
**Code:** E06S09T24

**Planning package:** [IPP-E06S09T24](../../../../../implementation-cycles/IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md)

**Upstream:** [FR-111](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)

**Related:** [FR-108](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md) · [E06:S09:T20](T20-install-setup-error-code-registry-fr108.md) · [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [ADR-016](../../../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) · [ADR-021](../../../../../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

---

## Summary

Extend the FR-108 **`ADK-*` registry** with acquisition process **I05** and CLI process **I06**, and close install error **documentation hygiene** gaps for the lean `greenfield-install/` vendor path and GHCR channel.

---

## Input

- [IPP-E06S09T24](../../../../../implementation-cycles/IPP-E06S09T24-acquisition-layer-adk-error-codes-fr111.md)
- [FR-111](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) — requirements and seed code catalog
- [ADR-016](../../../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) — taxonomy (amend process table)
- [E06:S09:T20](T20-install-setup-error-code-registry-fr108.md) — FR-108 baseline registry v1.0.0
- [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) · [E06:S09:T23](T23-greenfield-install-github-packages-delivery-uxr021.md) — acquisition paths

---

## Deliverables

- [x] `install-error-codes.yaml` registry **1.1.0** + ADR-016 process table update
- [x] Acquisition preflight emitter (`verify_vendor_tree.py`) + tests
- [x] Troubleshooting appendix regenerated + CI guard (`test_install_error_docs_sync.py`)
- [x] INSTALL + `greenfield-install/README.md` acquisition reporting guidance
- [x] CLI `ADK-I06.*` wiring + tests
- [x] Linked IPP under `docs/implementation-cycles/`

---

## Acceptance Criteria

- [x] **AC1:** Registry 1.1.0 includes I05 and I06 with seed codes (FR-111 AC1).
- [x] **AC2:** At least two `ADK-I05.*` failure paths covered in tests (FR-111 AC2).
- [x] **AC3:** Lean README + INSTALL document SemVer + ADK reporting (FR-111 AC3).
- [x] **AC4:** Troubleshooting § matches generator output; CI enforced (FR-111 AC4).
- [x] **AC5:** CLI emits `ADK-I06.*` in tests (FR-111 AC5).
- [x] **AC6:** FR-111 status → IMPLEMENTED on RW delivery (**v0.6.9.24+2**).

---

## Associated Feature Request

**FR-111:** [Acquisition-layer ADK error codes and install error documentation hygiene](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)

---

## Version Anchor

✅ COMPLETE (**v0.6.9.24+2** — RW E06:S09:T24 `--art`, FR-111 registry 1.1.0)
