# Changelog: v0.6.7.102+6

**Release Date:** 2026-02-19 00:00:00 UTC  
**Epic:** 6 (ADK Implementation)  
**Story:** 7 (Package Management)  
**Task:** 102 (Changelog Maintenance Workflow - Perpetual)  
**Internal Version:** 0.6.7.102+6  
**Attribution:** Perpetual docs update (E2:S16:T03)

---

## Summary

Documentation and policy updates: maintainer runbooks moved to `docs/maintenance/`, project-root convention and KB structure documented in policy and adopters doc.

---

## Added

- **`docs/maintenance/`** – New directory for maintainer runbooks (build/upload). Includes README, BUILD_PACKAGES.md, BUILD_PACKAGES_COMMANDS.md, BUILD_AND_UPLOAD.md, UPLOAD_PACKAGES.md.
- **Project root convention** – Documented in documentation-maintenance-policy (root limited to README, CHANGELOG, CONTRIBUTING, INSTALL_IN_YOUR_PROJECT, config); runbooks in `docs/maintenance/`.
- **KB structure** – `kb-structure-overview.md` §2.5 Maintenance (`docs/maintenance/`).
- **Repo structure for adopters** – New "Project root" subsection and maintainer runbooks row in summary table.

---

## Changed

- **Build/upload runbooks** – Moved from project root to `docs/maintenance/` (BUILD_PACKAGES.md, BUILD_PACKAGES_COMMANDS.md, BUILD_AND_UPLOAD.md, UPLOAD_PACKAGES.md). Cross-links and README pointer updated.
- **documentation-maintenance-policy.md** – Documentation Locations: project root limited; runbooks in `docs/maintenance/`.
- **repo-structure-for-adopters.md** – Project root subsection; maintainer runbooks in summary table.
- **environment-variables-sop.md** – Package upload and build guides now point to `docs/maintenance/`.
- **README.md** – Developer Resources: link to [Build and upload runbooks](docs/maintenance/README.md).

---

## Removed

- **From project root:** BUILD_PACKAGES.md, BUILD_PACKAGES_COMMANDS.md, BUILD_AND_UPLOAD.md, UPLOAD_PACKAGES.md (moved to docs/maintenance/).

---

## References

- **Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
- **Story:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md`
