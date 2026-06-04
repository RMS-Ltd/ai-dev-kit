---
lifecycle: evergreen
created_at: 2026-06-04T23:00:00Z
housekeeping_policy: keep
---

# CHANGELOG v0.3.2.12+4 — Task-touch SemVer collision remediation (wave 2)

**Release Date:** 2026-06-04 23:00:00 UTC  
**Epic:** 3 | **Story:** 2 | **Task:** 12  
**SemVer:** v0.4.874+4

---

## Summary

Attempted fix for **FR-045** / **FR-046** / **BR-061** recurrence: injective PATCH and SemVer-core guards at task-touch finalize, registry audit/repair tooling, and blocking validator for `semver-registry.yaml`.

---

## Attempted Fixes

### Converter (`semver_converter.py`)

- `_assert_injective_finalize` rejects duplicate PATCH and SemVer core (`MAJOR.MINOR.PATCH`), not only full `semver+BUILD` strings.
- `_sync_task_touch_counter_to_history` after finalize.

### Registry repair

- Repaired four collision groups in `semver-registry.yaml` per [semver-registry-collision-repair-manifest.yaml](../../maintenance/semver-registry-collision-repair-manifest.yaml).
- `task_touch_counter` **870 → 873**; removed orphan `0.5.1.76+2` row.
- **Git tags not moved** — `v0.4.870` may still point at an older commit (documented in maintenance report).

### Tooling

- `audit_semver_registry_collisions.py`, `repair_semver_registry_collisions.py`, `task_touch_registry_audit.py`
- `validate_semver_registry_injective.py` (RW Step 9 when `task_touch`)

### Tests

- Extended `test_task_touch_mapping.py`; `tests/test_semver_registry_injective.py`

### Documentation

- [IPP-E03S02T12](../../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md), [repair report](../../maintenance/semver-registry-collision-repair-2026-06-04.md)
- Versioning policy, incident log wave-2 addendum, RW agent guide

---

## References

- [E03:S02:T12](../../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)
- [FR-045](../../project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../../project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md) · [BR-061](../../project-management/kanban/fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)
