# CHANGELOG v0.6.9.23+7 — CI green gate + greenfield sync (E06:S09:T23)

**Release Date:** 2026-06-05 11:15:12 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 23  
**SemVer (task_touch):** v0.4.963+7

---

## Summary

**E06:S09:T23 post-ship:** Restore Tests pytest contract (`setup.py` cache path); reinstate `fr-br-intake.yml.DISABLED` BR-052 template; fix T23 task-doc link depth (BR-068); sync `greenfield-install/` after `semver_converter.py` change.

### Changed

- `tests/test_gha_workflow_br052.py` — pip cache expects `setup.py`
- `.github/workflows/fr-br-intake.yml.DISABLED` — restored from archive (BR-052 future template)
- `T23-greenfield-install-github-packages-delivery-uxr021.md` — `../../../../../` links (within `docs/`)
- `greenfield-install/` — synced `semver_converter.py` from sources
