# Detailed Changelog — v0.3.2.12+2

**Release Date:** 2026-04-10 10:21:46 UTC  
**Version:** `v0.3.2.12+2`  
**SemVer:** `v0.4.727+2`  
**Task Anchor:** `E3:S02:T12` (`--art` adoption)

---

## Summary

Change implemented: BR-061 hardening for task-touch SemVer conversion by separating read-only derivation from explicit finalization, preventing high-frequency PATCH inflation from repeated conversion calls.

---

## Changed

- Refactored `semver_converter.py` task-touch path to support:
  - read-only derive (default)
  - explicit finalize (`--finalize` / `finalize=True`) for single mutation boundary
- Added mapping-history-backed idempotency per internal version in task-touch mode.
- Updated RW tag helper behavior so release-tag creation finalizes task-touch mapping once.
- Added CLI converter flags for strategy override and finalization.
- Expanded regression tests for BR-061 and FR-046 scenarios:
  - read-only non-mutation
  - finalize idempotency
  - collision prevention under task-touch tagging
- Added and wired IPW artifact for T12 and explicit cross-task interaction allowance with E5:S01:T46.

---

## Verification

- `pytest packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py packages/frameworks/workflow mgt/scripts/version/test_fr046_rw_tagging.py packages/frameworks/workflow mgt/scripts/version/test_fr046_comprehensive.py -q` -> 21 passed

---

## Traceability

- Epic: `3`
- Story: `2`
- Task: `12`
- BR: [BR-061](../../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)
