# Changelog v0.8.3.15+4

**Release Date:** 2026-06-07 19:01:12 UTC  
**Epic | Story | Task:** E08:S03:T15 (`RW --art`)  
**SemVer (task_touch):** v0.4.1043+4  

## Summary

**Change implemented:** **E08:S03:T15** Wave 3 — GitHub Actions CI hygiene after `dev`→`main` merge: fix Tests legacy-path guard false positive, restore greenfield-install parity (CQG cron scripts + release-metadata mirror).

## Attempted Fixes

### Tests (`test_changelog_directory_layout`)

- **Root cause:** `CHANGELOG_ARCHIVE.md` historical UXR-018 narrative contained literal `docs/changelog/` substring — tripped active-index guard.
- **Fix:** Reword archive line to describe legacy directory without forbidden substring.

### Greenfield install / release packages

- **Root cause:** `sync_greenfield_install.py --check` drift — untracked greenfield copies of `cqg_monitor_cron.sh` and `install_cqg_cron.sh`; stale release-metadata mirror files.
- **Fix:** Full mirror sync; git-track greenfield copies.

## Changed

- `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md` — legacy-path wording (Tests guard)
- `greenfield-install/` — CQG cron scripts + release-metadata ingest guide + pytest CI script parity

## Verification

- `pytest tests/test_changelog_directory_layout.py` — **5 passed** (local)
- `python scripts/sync_greenfield_install.py --check` — **in sync** (local)
- GitHub Actions re-verify — **pending** operator check on `dev`/`main` after push

## References

- [T15](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions)
