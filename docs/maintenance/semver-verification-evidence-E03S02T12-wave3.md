---
lifecycle: evergreen
created_at: 2026-06-05T02:01:33Z
housekeeping_policy: keep
---

# SemVer verification evidence — E03:S02:T12 wave 3

**Task:** E03:S02:T12 · **FR-045** / **FR-046** / **BR-061  
**IPP:** [IPP-E3S2T12](../implementation-cycles/IPP-E03S02T12-task-touch-semver-collision-hardening.md) §8.2  
**Run at:** 2026-06-05 02:01:33 UTC  
**Git:** `dev` @ `70b7242`

## Summary

| Check | Result |
| ----- | ------ |
| V1 Live registry injective | **PASS** (exit 0) |
| V2 Collision audit | **PASS** (exit 0) |
| V3 Read-only counter stability | **PASS** (903 → 903) |
| V4 RW tag boundary | **PASS** (unit test coverage) |
| V5 Regression pytest | **PASS** (17/17) |

**Overall:** Wave 3 verification **PASS** — registry injective on live `dev` HEAD. FBU closure (FR-045/046/BR-061 terminal status, V-band prune) **deferred pending maintainer sign-off**.

## V1 — `validate_semver_registry_injective.py`

```
rc_0 task_touch audit:
  entries: 173
  counter: 903 max_patch: 903
  OK: no PATCH or core collisions
OK: semver registry task_touch mapping is injective
```

Exit code: **0**

## V2 — `audit_semver_registry_collisions.py`

```
rc_0 task_touch audit:
  entries: 173
  counter: 903 max_patch: 903
  OK: no PATCH or core collisions
```

Exit code: **0**

## V3 — Read-only convert counter stability

Five consecutive read-only `convert_version_string("0.4.19.12+5", strategy="task_touch", finalize=False)` calls.

- `task_touch_counter` before: **903**
- `task_touch_counter` after: **903**

Result: **PASS** (no counter mutation on read-only path)

## V4 — RW tag boundary

Covered by regression test `test_create_rw_tags_fails_on_primary_tag_collision_without_internal_tag` in `test_task_touch_mapping.py` — expects `RuntimeError` matching `SemVer tag collision at RW boundary`.

**Residual (documented, not retagged):** Remote `v0.4.870` may still point at commit `d6053e5` while canonical internal `0.6.9.17+1` maps to `0.4.870+1` per [repair doc](semver-registry-collision-repair-2026-06-04.md). Registry is SoT; tag-alignment accepted per IPP §8.4 unless separately authorized.

## V5 — pytest

```
pytest packages/frameworks/workflow-mgt/scripts/version/test_task_touch_mapping.py \
       tests/test_semver_registry_injective.py -q
```

Result: **17 passed** in 0.68s. Exit code: **0**

## Maintainer sign-off

- [x] FR-045 recurrence resolved — **IMPLEMENTED** (`RW E03:S02:T12 --art` **v0.3.2.12+5**)
- [x] FR-046 RW tag boundary — **IMPLEMENTED** (same release)
- [x] BR-061 counter behaviour — **FIXED** (same release)
- [x] Tag misalignment (`v0.4.870`) — accepted documented state per IPP §8.4

Closed: 2026-06-05 via `RW E03:S02:T12 --art` — V-band pruned, `intake-completed.md` updated.
