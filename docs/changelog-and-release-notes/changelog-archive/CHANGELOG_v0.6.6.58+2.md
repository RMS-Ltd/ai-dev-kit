# Changelog: v0.6.6.58+2

**Release Date:** 2026-04-08 14:05:00 UTC
**Epic:** Epic 6 - Framework Management
**Story:** Story 6 - Feature Requests
**Task:** Task 58 - RW `--art` support for all RW modes (follow-up cleanup)
**Type:** 🔧 Tooling

## Summary

Change implemented: finalize post-release hygiene and board consistency after the all-mode `--art` rollout.

## Changes

### Kanban board cleanup

- Removed stale in-progress row for completed task `E7:S06:T04` from `kanban-board.md`.
- Updated board header release anchor to the active RW context.

### Repository hygiene

- Added `SCRATCHPAD.md` to `.gitignore` so local notes do not appear as untracked noise.

## Related Work

- **Task:** E6:S06:T58
- **Bug Report:** BR-060

## Notes

This release is a follow-up build on the same task anchor (`E6:S06:T58`) to keep docs and board state aligned with the released RW behavior.
