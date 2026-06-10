# Changelog: v0.2.1.31+1

**Release Date:** 2026-06-10 19:15:00 UTC  
**Epic:** 2 | **Story:** 1 | **Task:** 31  
**SemVer:** v0.4.1134+1  
**Summary:** GitHub Actions run title external SemVer (UXR-027)

---

## Release Description

RW Step 10 release commits now use **external SemVer in the subject line** so GitHub Actions workflow run titles match README and GitHub Release versioning. Internal `RC.EPIC.STORY.TASK+BUILD` traceability moves to the commit body.

---

## Changes Implemented

### RW commit message (UXR-027)

- Added `build_rw_commit_message.py` — deterministic SemVer subject + `Internal:` body builder
- Updated Step 10 templates: `.cursorrules`, portable excerpt, `.claude/commands/rw.md`, `release-workflow.yaml`, commit-message guidelines
- Added pytest coverage in `test_build_rw_commit_message.py`
- Greenfield install mirror synced

### Planning / intake

- UXR-027 filed and accepted; IPP-E02S01T31; task E02:S01:T31

---

## Acceptance Criteria Status

- [x] AC1: Commit subject uses `Release v{semver}:` (evidenced by this release commit)
- [x] AC2: Body contains `Internal: v0.2.1.31+1`
- [x] AC3: Dual-source parity on Step 10 docs
- [x] AC4: Pytest green for new helper tests

---

## References

- [UXR-027](../../kanban/fr-br/UXR-027-github-actions-run-title-external-semver.md)
- [IPP-E02S01T31](../../implementation-cycles/IPP-E02S01T31-github-actions-run-title-external-semver.md)
- [E02:S01:T31](../../kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T31-github-actions-run-title-external-semver-uxr027.md)
