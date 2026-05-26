---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-19T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 009 – AI Dev Kit installation and adopter integration

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-04-19  
**Last updated:** 2026-05-26 (v0.6.9.5+4 – T05 Phase 1 consolidated on dev)
**Version:** v0.6.9.5+4
**Code:** E6S09

---

## Task Checklist

- [x] **E6:S09:T01 – Greenfield installation process (FR-080)** - COMPLETE (HIGH — **FR-080** IMPLEMENTED **v0.6.9.1+8**; Waves 1–5 + evidence)
  - Task: [`T01-greenfield-installation-process-fr080.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T01-greenfield-installation-process-fr080.md) | [FR-080](../../fr-br/FR-080-greenfield-installation-process.md)
  - IPW: [`IPW-E6S09T01-greenfield-installation-fr080.md`](../../../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

- [ ] **E6:S09:T02 – Brownfield modular adopter integration (FR-081)** - IN PROGRESS (MEDIUM — operationalize ADR-003: modular surfaces, matrices, respectful host architecture; RW `--art` **v0.6.9.2+1**)
  - Task: [`T02-brownfield-modular-adopter-integration-fr081.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | [FR-081](../../fr-br/FR-081-brownfield-modular-adopter-integration.md)

- [ ] **E6:S09:T03 – Installation canonical repository alignment (FR-082)** - IN PROGRESS (MEDIUM — defaults and docs aligned to canonical `earlution/ai-dev-kit` coordinates; RW `--art` **v0.6.9.3+1**)
  - Task: [`T03-installation-canonical-repo-alignment-fr082.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | [FR-082](../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md)

- [x] **E6:S09:T04 – ECC harness layer Phase 0 compatibility evaluation (FR-098)** - COMPLETE (MEDIUM — Phase 0 spec, evaluation, bridge template; Phase 1 GO)
  - Task: [`T04-ecc-harness-layer-phase0-compatibility-fr098.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md) | [FR-098](../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
  - IPP: [`IPP-E6S09T04`](../../../../implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md)

- [x] **E6:S09:T05 – ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)** — ✅ COMPLETE (MEDIUM — **v0.6.9.5+4** dev consolidation; skill pack **v0.6.9.5+2**)
  - Task: [`T05-adk-workflow-skill-pack-ecc-fr098.md`](Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md) | [FR-098](../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
  - IPP: [`IPP-E6S09T05`](../../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)

---

## Overview

This story owns **design and delivery** of how AI Dev Kit is installed and integrated into **recipient** repositories: a **complete greenfield** first-run path (FR-080), **brownfield** modular adoption aligned with [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) (FR-081), and **tooling/doc accuracy** for canonical distribution coordinates (FR-082).

Work is tracked in **Epic 6** because this is **framework distribution and adoption mechanics**, not documentation-only maintenance.

---

## Goal

- **Greenfield:** Opinionated, reproducible install → configure → verify for new or template projects.  
- **Brownfield:** Contract-first, optional surfaces; host project owns architecture.  
- **Hygiene:** Install scripts and docs reference the correct public GitHub repository by default.
- **Optional harness layer (FR-098):** ECC integration ships in phases; each phase releases via RW with **PATCH-only** SemVer under `task_touch`. **MINOR** advances at **Epic 6 sign-off** (`epic_count`), not per ECC phase — see [FR-098 SemVer strategy](../../fr-br/FR-098-ecc-optional-harness-layer-integration.md#release--semver-strategy-maintainer-decision--2026-05-26).

---

## Related

- [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
- [FR-080](../../fr-br/FR-080-greenfield-installation-process.md) · [FR-081](../../fr-br/FR-081-brownfield-modular-adopter-integration.md) · [FR-082](../../fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) · [FR-098](../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [INSTALL_IN_YOUR_PROJECT.md](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
