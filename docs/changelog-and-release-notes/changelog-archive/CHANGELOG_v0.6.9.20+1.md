# CHANGELOG v0.6.9.20+1 — Install/setup error code registry (FR-108)

**Release Date:** 2026-06-04 20:30:00 UTC
**Epic:** 6 | **Story:** 9 | **Task:** 20
**Internal version:** v0.6.9.20+1 | **SemVer:** v0.4.879+1

---

## Summary

Attempted implementation of hierarchical **ADK-*** install/setup error codes for alpha triage and book-linked troubleshooting (FR-108 / ADR-016).

---

## Changes

### Added

- `packages/frameworks/workflow-mgt/config/install-error-codes.yaml` — versioned registry (processes I01–I04, seed codes).
- `packages/frameworks/workflow-mgt/scripts/adk_install_errors.py` — stderr banners and FR-078 result extras.
- `docs/architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md`.
- `docs/implementation-cycles/IPP-E06S09T20-install-setup-error-code-registry-fr108.md`.
- `packages/frameworks/workflow-mgt/scripts/generate_install_error_docs.py`.
- Pytest coverage under `tests/workflow_mgt/`, `tests/kanban/`, `tests/cli/`.

### Changed

- RW, greenfield, kanban, and sign-off installers emit `ERROR [ADK-…]` on failure paths.
- CLI install JSON events and feedback contract **1.1.0** include `adk_error_code` / `primary_adk_error_codes`.
- `INSTALL_IN_YOUR_PROJECT.md`, troubleshooting guide, GitHub issue templates (SemVer + ADK code fields).

---

## References

- [FR-108](../../project-management/kanban/fr-br/FR-108-install-setup-error-code-registry-and-emission.md)
- [E06:S09:T20](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T20-install-setup-error-code-registry-fr108.md)
- [ADR-016](../../architecture/standards-and-adrs/ADR-016-install-setup-error-code-taxonomy.md)
