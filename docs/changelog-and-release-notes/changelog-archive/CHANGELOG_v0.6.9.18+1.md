---
lifecycle: evergreen
created_at: 2026-06-05T14:30:00Z
housekeeping_policy: keep
---

# CHANGELOG v0.6.9.18+1 — BR-087 framework slug install closure (wave 2)

**Release Date:** 2026-06-05 14:30:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 18  
**SemVer:** v0.4.875+1

---

## Summary

Attempted closure for **BR-087**: maintainer `packages/frameworks/` directories renamed to install slugs (`workflow-mgt`, `numbering-versioning`, `tooling-automation`), mechanical path sweep, install-time legacy-dir detection/warnings (UXR-016 A1/A2), and republish checklist for GitHub release assets.

---

## Attempted Fixes

### Maintainer source tree (wave B)

- `git mv` legacy framework directories to hyphenated slugs under `packages/frameworks/`.
- Updated `rw-config.yaml`, CI workflows, tests, CLI path probes, and install docs to `workflow-mgt/` paths.
- `build_packages.py` framework keys use slug directory names; `find_framework_directory` resolves legacy names to slugs.

### Install/update automation (wave A)

- `detect_legacy_framework_dir_names`, `ensure_frameworks_slug_layout`, `format_legacy_framework_dirs_warning` in `framework_install_slug.py`.
- `install_package_from_release.py` relocates legacy dirs after extract; `install_ux_version.py` / CLI warn when legacy layout detected.
- [`docs/maintenance/br087-framework-release-republish-checklist.md`](../../maintenance/br087-framework-release-republish-checklist.md) for maintainer tarball republish.

### Tests

- Extended `tests/test_framework_install_slug.py` (11 tests).

---

## Related

- [BR-087](../../project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md) — OPEN pending adopter verification
- [E06:S09:T18](../../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T18-br087-framework-slug-install-closure.md)
- [IPP-E06S09T18](../../implementation-cycles/IPP-E06S09T18-br087-framework-slug-install-closure.md)
