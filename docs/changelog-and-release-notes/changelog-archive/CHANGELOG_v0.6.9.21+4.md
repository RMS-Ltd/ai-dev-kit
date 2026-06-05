# CHANGELOG v0.6.9.21+4 — Lean adopter distribution footprint (E06:S09:T21)

**Release Date:** 2026-06-05 10:00:22 UTC
**Epic:** 6 | **Story:** 9 | **Task:** 21
**Internal version:** v0.6.9.21+4 | **SemVer:** v0.4.952+4

---

## Summary

Ship repo-root **`greenfield-install/`** lean adopter tree (~8 MiB), maintainer sync tooling, CI drift guard, and install smoke tests per **FR-110**.

---

## Changes

### Added

- **`greenfield-install/`** — curated `packages/frameworks/` copy + adopter `README.md` + `FOOTPRINT.md`
- **`scripts/sync_greenfield_install.py`** + **`scripts/greenfield-install-manifest.yaml`** — idempotent sync and `--check` drift guard
- **`scripts/test_sync_greenfield_install.py`** — footprint, layout, and dry-run guards
- **`.github/workflows/greenfield-install.yml`** — CI drift check + orchestrator dry-run smoke

### Updated

- **`INSTALL_IN_YOUR_PROJECT.md`** — live `greenfield-install/` sparse/copy/update flows (interim path removed)
- **`README.md`** — lean vendor quick install uses sparse `greenfield-install/`
- **E06:S09:T21** — phases 0–3 complete; AC1–AC5 satisfied

---

## References

- [FR-110](../../project-management/kanban/fr-br/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [E06:S09:T21](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T21-lean-adopter-distribution-footprint-fr110.md)
