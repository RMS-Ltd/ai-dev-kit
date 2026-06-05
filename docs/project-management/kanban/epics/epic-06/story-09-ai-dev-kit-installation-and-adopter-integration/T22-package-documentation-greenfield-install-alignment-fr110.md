---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 22: Package documentation greenfield-install alignment (FR-110)

**Task ID:** E06:S09:T22  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Version:** v0.6.9.22+1  
**Code:** E06S09T22

**Upstream:** [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)

**Related:** [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110)

---

## Summary

Align **all framework package READMEs and install-facing docs** so adopters understand resources are delivered via the **lean vendor tree** (`greenfield-install/packages/frameworks/` or interim `packages/frameworks/` sparse-checkout) — not the full maintainer repository or repo-root `scripts/`.

---

## Input

- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — lean adopter distribution model (accepted 2026-06-05)
- [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) — entry docs (`INSTALL_IN_YOUR_PROJECT.md`, root `README.md`) shipped in v0.6.9.21+3
- Framework packages under `packages/frameworks/` with existing README/install guides

---

## Scope

### In scope

- `packages/frameworks/*/README.md` — kanban, workflow-mgt, numbering-versioning, doc-lifecycle, debug-path
- `packages/frameworks/workflow-mgt/docs/PACKAGE_INSTALLATION_GUIDE.md`
- `packages/frameworks/kanban/scripts/README.md`
- `packages/frameworks/workflow-mgt/docs/rw-validators-consumer-layout.md` (consumer path preamble)
- Cross-package references in `tooling-automation/validators/framework/README.md` where install paths are implied

### Out of scope

- Creating `greenfield-install/` directory (T21)
- Published Docusaurus site regen
- `docs/documentation/user-docs/` bulk rewrite (INSTALL + README already updated in T21 +3)

---

## Deliverable

- Shared **Adopter distribution (FR-110)** callout in each framework package README
- `PACKAGE_INSTALLATION_GUIDE` lean-vendor section
- Kanban consumer-path wording updated (`vendor/.../packages/frameworks/kanban/`)
- RW release with version anchor — **v0.6.9.22+1**

---

## Acceptance Criteria

- [x] **AC1:** Every framework package under `packages/frameworks/` with a top-level README states FR-110 lean vendor delivery.
- [x] **AC2:** Install guides reference `INSTALL_IN_YOUR_PROJECT.md` lean section, not full-repo submodule copy as default.
- [x] **AC3:** Docs distinguish package `scripts/` vs maintainer repo-root `scripts/`.
- [x] **AC4:** Task + FR-110 bidirectional links; story checklist row present.

---

## References

- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
