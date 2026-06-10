# Changelog v0.6.9.27+1

**Release Date:** 2026-06-10 17:24:23 UTC

**Epic:** 6 | **Story:** 9 | **Task:** 27

## Summary

**E06:S09:T27** — Kanban v3.2 package rewrite for greenfield installer (F9/F17). `--mode fresh` now ships v3.2 Small-tier catalog (E01–E10); FR/BR/UXR at E04:S02–S04; E05 Project Architecture. Unblocks Starborn Legacy attempt 05.

## Changes

### Added

- `kanban_v32_catalog.py` — v3.2 fresh epic/story SoT and fingerprint assertion
- `validate_kanban_v32_fingerprint.py` — post-install v3.2 catalog gate
- v3.2 primary epic templates (`epic-05-Project-Architecture`, etc.)
- E04:S02–S04 story templates (FR/BR/UXR Implementation)
- `tests/kanban/test_kanban_v32_fresh_install.py`

### Changed

- `migrate_structure._install_canonical_epics()` — v3.2 epic list E01–E10 (not v1 18/22/23)
- `install_canonical_epics_only` — installs v3.2 core stories on fresh
- Removed v1 primary templates (`epic-05-FR-Implementation`, etc.)
- `greenfield-install/` mirror synced
- `INSTALL_IN_YOUR_PROJECT.md` — v3.2 fresh-install contract

### Attempted Fixes

- **F9/F17 (BLOCKER):** Installer no longer deploys v1 `Epic 5: FR Implementation` on `--mode fresh` — pending adopter verification on attempt 05

## References

- [IPP-E06S09T27](../../implementation-cycles/IPP-E06S09T27-kanban-v32-package-rewrite-installer-f9-f17.md)
- [T27 task doc](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md)
- [T26 Attempt 05 gate](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)
