# Changelog Entry — v0.2.16.10+1

**Internal Version:** 0.2.16.10+1
**SemVer:** v0.4.789+1
**Release Date:** 2026-05-19
**Epic:** E2 — Workflow Management Frameworks
**Story:** S16 — Perpetual Ongoing Workflow Operations
**Task:** T10 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)

---

## Summary

FR-095 implementation: auto-detect GitHub remote repository in `create_github_release.py`.

## Changes

### `packages/frameworks/workflow mgt/scripts/create_github_release.py`

- **Auto-detect `--repo` default** via new `get_default_repo()` function:
  - Runs `git remote get-url origin`
  - Parses HTTPS (`https://github.com/owner/repo.git`) and SSH (`git@github.com:owner/repo.git`) remote URL formats
  - Extracts `owner/repo` and uses it as the `--repo` default
  - Silent fallback to `earlution/ai-dev-kit` if detection fails (backward compatible)
- **`AI_DEV_KIT_PAT` env-var fallback** alongside existing `GITHUB_TOKEN` support
- Updated `--repo` help text to: "Repository name (default: auto-detected from git remote origin)"

### Kanban

- **FR-095** status updated to `COMPLETE`
- **T10 task doc** version/last_updated updated
- **Story-016** T10 checklist updated to `IN PROGRESS`
- **kboard.md** version/last_updated updated

## Acceptance Criteria

- [x] `create_github_release.py` auto-detects the repo from `git remote get-url origin`
- [x] Both HTTPS and SSH remote URL formats are supported
- [x] Fallback to `earlution/ai-dev-kit` if detection fails (backward compatibility)
- [x] `--repo` CLI argument still overrides auto-detection
- [x] Help text updated to reflect auto-detection behaviour

## Related

- FR-095: Auto-detect GitHub remote repository in `create_github_release.py`
- E2:S16:T10 — Ad-hoc Repository Infrastructure Maintenance (Perpetual)
