# Changelog v0.5.1.76+2

**Release Date:** 2026-06-04 14:35:00 UTC  
**Epic | Story | Task:** E05:S01:T76  
**SemVer (task_touch):** v0.4.869+2  

## Summary

**UXR-018 / E05:S01:T76:** Consolidated changelog documentation under single pillar `docs/changelog-and-release-notes/`. Retired `docs/changelog/` and `docs/knowledge/changelog-and-release-notes/`; moved unique archive files; repaired active index links; removed legacy Docusaurus sidebar; added pytest guard and maintenance manifest.

## Change implemented

- **IPP:** [IPP-E05S01T76](../../implementation-cycles/IPP-E05S01T76-changelog-directory-consolidation.md)
- **Manifest:** [changelog-directory-consolidation-manifest.md](../../maintenance/changelog-directory-consolidation-manifest.md)
- **Tests:** `tests/test_changelog_directory_layout.py` (5 cases)
- **Portal:** `portal/sidebars.js`, `portal/README.md` — legacy `changelog/` category removed
- **Archive:** `CHANGELOG_v0.4.14.4+1.md` (+ mirror-only versions moved from knowledge tree)

## Verification

- `pytest tests/test_changelog_directory_layout.py` — PASS
- `rw-config.yaml` `changelog_dir` unchanged

## References

- [UXR-018](../../project-management/kanban/fr-br/UXR-018-changelog-directory-consolidation.md)
- [T76](../../project-management/kanban/epics/epic-05/story-01-fr-repo/T76-changelog-directory-consolidation-uxr018.md)
