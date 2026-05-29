# Detailed Changelog — v0.5.9.2+2

**Release Date:** 2026-03-30 21:45:00 UTC  
**Internal version:** `0.5.9.2+2`  
**Epic / Story / Task:** E5:S09:T02  
**SemVer (task_touch):** `0.4.669+2`

## Summary

Release **FR-066** (canonical docs path and publish scope): Docusaurus docs plugin `path: '../docs'`, changelog-archive `exclude` globs, docs `editUrl` → `tree/main/docs/`, **Publish scope** in `portal/README.md`, entry doc `docs/documentation/docusaurus-portal-index.md`, `portal/docs` scaffold cleared, `tests/test_portal_fr066_docs_path.py`, FR-065 tests aligned (`PORTAL_BUILD_STRICT` for green build / **FR-067**).

## Changes

### Added

- `tests/test_portal_fr066_docs_path.py`
- `docs/documentation/docusaurus-portal-index.md`
- `portal/docs/.gitkeep`

### Changed

- `portal/docusaurus.config.js`, `portal/README.md`, `portal/sidebars.js` (implicit via content root)
- `tests/test_portal_fr065_identity.py`, `pytest.ini`
- `docs/project-management/kanban/fr-br/FR-066-*.md` (ACs; status)

### Documentation / Kanban

- E5:S09:T02 COMPLETE; Story 009 checklist; Epic-5; board; `kanban-completed.md`.

## References

- FR-066  
- E5:S09:T02  
