# Changelog — v0.6.9.33+2

**Release Date:** 2026-06-11 11:36:29 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 33  
**SemVer:** v0.4.1146+2  
**Task:** E06:S09:T33 — ADK package update mechanism (FR-129)

---

## Summary

Change implemented: fix task-touch **SemVer tag resolution** in `update_adk_packages.py` — `--target-tag v0.4.1145+1` now resolves to git tag `v0.4.1145` (and internal tags when applicable).

---

## Fixed

- **`update_adk_packages.py`** — `semver_core_tag()`, `git_checkout_candidates()`, `tags_match_target()`; manifest stores `pinned_semver` (core) and `pinned_internal` (full display SemVer).
- **`test_update_adk_packages.py`** — coverage for core-tag stripping and checkout candidate list.

---

## Related

- SBL bootstrap replay (operator): vendor bump `v0.4.1142` → `v0.4.1145` validated with patched script.
- [FR-129](../kanban/fr-br/FR-129-adk-package-update-mechanism.md)
