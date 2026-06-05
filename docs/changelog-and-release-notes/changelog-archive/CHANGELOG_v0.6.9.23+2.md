# CHANGELOG v0.6.9.23+2 — Greenfield GHCR delivery (E06:S09:T23)

**Release Date:** 2026-06-05 14:30:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.958+2

---

## Summary

**E06:S09:T23 / UXR-021:** Publish CI-validated `greenfield-install/` to `ghcr.io/rms-ltd/ai-dev-kit-greenfield` on SemVer core tags; document registry extract as alternate acquisition; dual-publish `greenfield-install-v{semver}.tar.gz` + `.sha256` (FR-110-F5). IPP + ADR-021.

---

## Change implemented

### Delivery channel (ADR-021)

- `greenfield-install/Dockerfile` — lean tree at `/opt/adk/`
- `.github/workflows/greenfield-release.yml` — drift gate → GHCR push → container smoke → Release tarball upload
- `.github/workflows/greenfield-install.yml` — `container-smoke` job on PR/push

### Planning

- [IPP-E06S09T23](../../implementation-cycles/IPP-E06S09T23-greenfield-install-github-packages-delivery-uxr021.md)
- [ADR-021](../../architecture/standards-and-adrs/ADR-021-greenfield-install-ghcr-delivery-channel.md)

### Tests

- `scripts/test_greenfield_container.py` — layout + optional docker extract smoke

### Documentation

- `INSTALL_IN_YOUR_PROJECT.md` — registry alternate path (item 3)
- `greenfield-install/README.md` — GHCR pin instructions

---

## References

- [E06:S09:T23](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T23-greenfield-install-github-packages-delivery-uxr021.md)
- [UXR-021](../../project-management/kanban/fr-br/UXR-021-greenfield-install-github-packages-delivery-channel.md)
