# Changelog v0.6.9.17+1

**Release Date:** 2026-06-04 13:53:24 UTC  
**Epic | Story | Task:** E06:S09:T17  
**SemVer (task_touch):** v0.4.870+1  

## Summary

Attempted fix for **BR-087**: framework packages install under hyphenated directory slugs (`workflow-mgt`, `numbering-versioning`, `tooling-automation`) instead of legacy maintainer source names with spaces and `&`.

## Changes

### Package build and install

- **`framework_install_slug.py`** — canonical slug mapping and relocate helper
- **`build_package.py`** — tarball archive root uses install slug, not source directory name
- **`install_package_from_release.py`** — renames legacy archive root to slug on extract
- **`relocate_legacy_framework_dirs.py`** — one-shot migration for submodule/vendor trees
- **`build_packages.py`** — passes install slug into archive creation

### Tests and docs

- **`tests/test_framework_install_slug.py`** — slug normalization, archive layout, extract rename
- **`BR-087`** bug report + **E06:S09:T17** task doc
- **`INSTALL_IN_YOUR_PROJECT.md`** — Step 2b migration note for BR-087

## Verification

- `python -m pytest tests/test_framework_install_slug.py -q` — 8 passed
- Adopter verification (Expenses Tracker) and republished GitHub release tarballs remain open per BR-087 AC

## References

- [BR-087](../project-management/kanban/fr-br/BR-087-framework-install-directory-slug-mismatch.md)
- [T17](../project-management/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T17-framework-install-directory-slugs-br087.md)
