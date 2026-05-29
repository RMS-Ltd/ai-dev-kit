# Detailed Changelog — v0.3.2.12+3

**Release Date:** 2026-04-13 16:19:00 UTC  
**Version:** `v0.3.2.12+3`  
**SemVer:** `v0.4.733+3`  
**Task Anchor:** `E3:S02:T12` (`--art` adoption)

---

## Summary

Change implemented: regression-hardening for recurring SemVer collisions by enforcing injective finalize mapping and deterministic RW boundary collision failures.

---

## Attempted Fixes

- Hardened `semver_converter.py` finalize path with explicit collision guard so a computed SemVer cannot be assigned to a different internal release key.
- Added RW Step 11 defense-in-depth in `create_rw_tags` to fail when a SemVer primary tag already exists without matching internal-tag lineage.
- Hardened Step 12.5 release orchestration in `create_github_release.py` to reject explicit `--semver-tag` values that do not match canonical mapping for the provided internal version.
- Added regression coverage for:
  - finalize-time collision rejection,
  - RW tag-boundary collision rejection,
  - release tag canonical mismatch rejection.

---

## Verification

- `pytest -q "packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py"` -> `13 passed`
- `pytest -q "packages/frameworks/workflow mgt/scripts/version/test_create_github_release_parsing.py"` -> `7 passed`

---

## Traceability

- Epic: `3`
- Story: `2`
- Task: `12`
- BR: [BR-061](../../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)
- Related FR: [FR-046](../../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
