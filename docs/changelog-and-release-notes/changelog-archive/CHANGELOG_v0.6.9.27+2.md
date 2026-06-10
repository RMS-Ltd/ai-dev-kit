# Changelog v0.6.9.27+2

**Release Date:** 2026-06-10 18:10:39 UTC

**Epic:** 6 | **Story:** 9 | **Task:** 27

## Summary

**E06:S09:T27** follow-on — fix `validate_kanban_v32_fingerprint.py` repo-root path (`parents[5]`) so `kanban_v32_catalog` imports correctly in adopter projects.

## Changes

### Fixed

- `validate_kanban_v32_fingerprint.py` — `ModuleNotFoundError: kanban_v32_catalog` (wrong `parents[4]` → `parents[5]` for repo root)
- `greenfield-install/` mirror synced

## References

- [T27 task doc](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T27-kanban-v32-package-rewrite-installer-f9-f17.md)
