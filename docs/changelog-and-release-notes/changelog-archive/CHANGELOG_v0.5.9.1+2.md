# Detailed Changelog — v0.5.9.1+2

**Release Date:** 2026-03-30 20:30:00 UTC  
**Internal version:** `0.5.9.1+2`  
**Epic / Story / Task:** E5:S09:T01  
**SemVer (task_touch):** `0.4.668+2`

## Summary

Release **FR-065** (Docusaurus site identity): `portal/docusaurus.config.js` and `portal/README.md` aligned to **AI Dev Kit** / `earlution/ai-dev-kit`; GitHub Pages `url`/`baseUrl`; `editUrl` for `portal/docs/` and `portal/blog/`; navbar/footer cleanup; regression tests `tests/test_portal_fr065_identity.py` and `portal_build` pytest marker in `pytest.ini`.

## Changes

### Added

- `tests/test_portal_fr065_identity.py` — executable spec S1–S8; S9 via `PORTAL_BUILD=1`.

### Changed

- `portal/docusaurus.config.js` — identity, URLs, edit links, theme nav/footer.
- `portal/README.md` — AI Dev Kit purpose; link to repository root `README.md`.
- `pytest.ini` — `portal_build` marker.

### Documentation / Kanban

- E5:S09:T01 task specification and ✅ COMPLETE; Story 009 checklist T01 complete.

## References

- FR-065  
- E5:S09:T01  
