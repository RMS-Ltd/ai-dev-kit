---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 24: Acquisition-layer ADK error codes (FR-111)

**Task ID:** E06:S09:T24  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.6.9.24+1 — kanban init)  
**Version:** v0.6.9.24+1  
**Code:** E06S09T24

**Upstream:** [FR-111](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)

**Related:** [FR-108](../../../fr-br/FR-108-install-setup-error-code-registry-and-emission.md) · [E06:S09:T20](T20-install-setup-error-code-registry-fr108.md) · [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [ADR-016](../../../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) · [ADR-021](../../../../../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)

---

## Summary

Extend the FR-108 **`ADK-*` registry** with acquisition process **I05** and CLI process **I06**, and close install error **documentation hygiene** gaps for the lean `greenfield-install/` vendor path and GHCR channel.

---

## Input

- [FR-111](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md) — requirements and seed code catalog
- [ADR-016](../../../../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md) — taxonomy (amend process table)
- [E06:S09:T20](T20-install-setup-error-code-registry-fr108.md) — FR-108 baseline registry v1.0.0
- [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) · [E06:S09:T23](T23-greenfield-install-github-packages-delivery-uxr021.md) — acquisition paths

---

## Scope

### In scope

1. **Registry 1.1.0** — processes I05 (acquisition) and I06 (CLI); seed sub-codes per FR-111.
2. **Acquisition preflight** — adopter-runnable check emitting `ADK-I05.*`.
3. **Doc hygiene** — regenerate troubleshooting §; `greenfield-install/README.md` + INSTALL callouts; CI appendix drift guard.
4. **CLI codes** — replace coarse `ADK-I02.E01` mapping with `ADK-I06.*`.
5. **Brownfield INSTALL note** — codes apply to RW/Kanban installer failures on brownfield paths.

### Out of scope

- `ADK-V*` post-install validation catalog
- `ADK-R*` RW runtime catalog
- `adk doctor --explain`

---

## Deliverables

- [ ] `install-error-codes.yaml` registry **1.1.0** + ADR-016 process table update
- [ ] Acquisition preflight emitter (Python) + tests
- [ ] Troubleshooting appendix regenerated + CI guard
- [ ] INSTALL + `greenfield-install/README.md` acquisition reporting guidance
- [ ] CLI `ADK-I06.*` wiring + tests
- [ ] Linked IPP under `docs/implementation-cycles/` (IPW gate before implementation)

---

## Acceptance Criteria

- [ ] **AC1:** Registry 1.1.0 includes I05 and I06 with seed codes (FR-111 AC1).
- [ ] **AC2:** At least two `ADK-I05.*` failure paths covered in tests (FR-111 AC2).
- [ ] **AC3:** Lean README + INSTALL document SemVer + ADK reporting (FR-111 AC3).
- [ ] **AC4:** Troubleshooting § matches generator output; CI enforced (FR-111 AC4).
- [ ] **AC5:** CLI emits `ADK-I06.*` in tests (FR-111 AC5).
- [ ] **AC6:** FR-111 status → IMPLEMENTED on RW delivery of implementation work.

---

## Implementation gate

Per [FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md):

1. Run **IPW** for E06:S09:T24 → linked **IPP** under `docs/implementation-cycles/`.
2. Obtain explicit user authorization (`implement` or `RW E06:S09:T24`) before code changes.

**This RW -k release:** Kanban documentation setup + FR-111 intake wiring only (no implementation).

---

## Associated Feature Request

**FR-111:** [Acquisition-layer ADK error codes and install error documentation hygiene](../../../fr-br/FR-111-acquisition-layer-adk-error-codes-and-install-error-doc-hygiene.md)

---

## Version Anchor

📋 TODO — Kanban documentation setup (**v0.6.9.24+1**, RW -k E06:S09:T24 `--art`). Implementation gated on IPW.
