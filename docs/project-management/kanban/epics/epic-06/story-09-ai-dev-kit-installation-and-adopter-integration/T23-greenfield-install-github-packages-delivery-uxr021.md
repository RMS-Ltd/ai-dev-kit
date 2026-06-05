---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 23: Greenfield lean tree GitHub Packages delivery (UXR-021)

**Task ID:** E06:S09:T23  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.6.9.23+1 — RW -k kanban documentation setup)  
**Version:** v0.6.9.23+1  
**Code:** E06S09T23

**Upstream:** [UXR-021](../../../fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md)

**Related:** [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) · [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) · [FR-062](../../../fr-br/FR-062-github-release-installation-experience.md) · [INSTALL_IN_YOUR_PROJECT.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md#lean-vendor-install-greenfield-install--fr-110)

---

## Summary

Add **GitHub Packages** (`ghcr.io`) as an **alternate delivery channel** for the lean adopter tree — publish the same `greenfield-install/` bytes validated by existing CI, document extract-to-`vendor/` UX, and optionally dual-publish a Release tarball (FR-110-F5).

---

## Input

- [UXR-021](../../../fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md) — research findings, recommendations, acceptance criteria
- [FR-110](../../../fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) — lean tree contract; optional F5 tarball
- [E06:S09:T21](T21-lean-adopter-distribution-footprint-fr110.md) — `greenfield-install/` tree + `sync_greenfield_install.py` + drift CI
- [`.github/workflows/greenfield-install.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/greenfield-install.yml)

---

## Scope

### In scope

1. **Container image** — `ghcr.io/rms-ltd/ai-dev-kit-greenfield` (or project-standard name) with `greenfield-install/` at fixed path (e.g. `/opt/adk/`).
2. **Publish workflow** — on release tag: drift check → build image → push to `ghcr.io`; tag with external SemVer.
3. **Optional dual-publish** — `greenfield-install-v{semver}.tar.gz` + `.sha256` to GitHub Releases (FR-110-F5) from same build inputs.
4. **Adopter docs** — `INSTALL_IN_YOUR_PROJECT.md` + `greenfield-install/README.md`: registry extract flow as **alternate** acquisition (submodule/copy remain default).
5. **CI smoke** — post-build extract + `install_greenfield_path.py --dry-run` from extracted tree.

### Out of scope

- Replacing sparse submodule as primary documented path
- npm package wrapper (unless trivial follow-on; UXR-021 ranks container first)
- PyPI / `pip install ai-dev-kit` lean bundle
- Changing `greenfield-install/` contents or sync manifest semantics

---

## Deliverable

- `Dockerfile` (or inline workflow build) copying CI-validated `greenfield-install/`
- GitHub Actions job with `packages: write` / `GHCR` publish on release tags
- Documented adopter commands: `docker pull` → `docker cp` → `vendor/ai-dev-kit/`
- Optional Release asset for unified lean tarball
- Tests or workflow step proving dry-run from extracted artifact

---

## Acceptance Criteria

- [ ] **AC1:** Tagged release publishes `ghcr.io` image with lean tree layout (UXR-021 AC1).
- [ ] **AC2:** Documented extract + `install_greenfield_path.py --dry-run` passes (UXR-021 AC2).
- [ ] **AC3:** Image tag aligns with external SemVer in install docs (UXR-021 AC3).
- [ ] **AC4:** Publish blocked when `sync_greenfield_install.py --check` fails (UXR-021 AC4).
- [ ] **AC5:** Install docs list registry path as alternate; submodule/copy remain primary (UXR-021 AC5).

---

## Dependencies

**Blocked by:** None (T21 lean tree + CI guard complete).

**Blocks:** None.

---

## Notes

- **IPW required** before implementation ([FR-083](../../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)).
- Publish permissions: `GITHUB_TOKEN` with `packages: write` on tag workflow; document any org-level `ghcr.io` visibility defaults for public adopters.
