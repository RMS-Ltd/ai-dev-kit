---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-15T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-073: SemVer task-touch collision — two internal versions mapped to identical SemVer

**Status:** OPEN (registry patched retroactively; tag hygiene pending)  
**Priority:** MEDIUM  
**Severity:** MEDIUM  
**Created:** 2026-05-15  
**Last updated:** 2026-05-15  
**Version:** v0.2.1.20+1  
**Code:** BR-073

**Implementing Task:** [E2:S01:T20](../epics/Epic-2/Story-001-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073.md)

---

## Problem Statement

Two distinct internal versions — `0.24.1.6+1` (E24:S01:T06) and `0.2.1.18+1` (E2:S01:T18) — both resolved to the same SemVer `0.4.778+1`. This violates the uniqueness invariant of the `task_touch` conversion strategy, where each finalized release must receive a unique PATCH increment.

The collision was discovered during a README diff review that showed `v0.4.778+1` appearing in consecutive release commits for two different internal versions.

---

## Root Cause

The `task_touch` strategy in `semver_converter.py` only increments `task_touch_counter` and records a mapping when called with `finalize=True`. The RW's `create_rw_tags` helper calls the converter with `finalize=True`, but if a release is cut manually (e.g., direct `git tag -a` without running `create_rw_tags`), the registry is never updated. Both `0.24.1.6+1` and `0.2.1.18+1` were converted with `finalize=False`, so each read the stale `task_touch_counter: 777` and computed `PATCH = 777 + 1 = 778`.

Additionally, the `v0.4.778+1` git tag was created on commit `963ad934f` (`v0.24.1.5+1`) instead of `2d8af696e` (`v0.24.1.6+1`), indicating the tag creation step also ran against the wrong commit.

---

## Impact

- **Registry drift:** `mapping_history` did not reflect two real releases, causing future conversions to reuse PATCH values.
- **Tag misplacement:** The `v0.4.778+1` tag points to `963ad934f` (`v0.24.1.5+1`) rather than the commit that actually claimed that SemVer.
- **Consumer confusion:** READMEs for two different releases advertised the same SemVer string.
- **Future collision risk:** Any further `finalize=False` conversion would continue to produce `0.4.778+1`.

---

## Expected Behavior

1. Every finalized internal version maps to a unique SemVer PATCH value under the `task_touch` strategy.
2. The `v{semver}` tag is created on the release commit that bumped the version, not on its parent.
3. Registry state is updated atomically with tag creation.

---

## Actual Behavior

1. `0.24.1.6+1` and `0.2.1.18+1` both mapped to `0.4.778+1`.
2. `v0.4.778+1` tag points to `963ad934f` (parent of the `0.24.1.6+1` release).
3. Neither mapping appears in `mapping_history` prior to the retroactive fix.

---

## Reproduction

```bash
# Both commands returned 0.4.778+1 before the registry patch
python "packages/frameworks/workflow mgt/scripts/version/semver_converter.py" "0.24.1.6+1"
python "packages/frameworks/workflow mgt/scripts/version/semver_converter.py" "0.2.1.18+1"

# Verify tag placement
git rev-parse v0.4.778+1^{commit}
# → 963ad934f (Release v0.24.1.5+1)
```

---

## Acceptance Criteria

- [x] **AC1:** Retroactively add `0.24.1.6+1` → `0.4.778+1` to `semver-registry.yaml` mapping_history and increment `task_touch_counter` to 778.
- [x] **AC2:** Retroactively add `0.2.1.18+1` → `0.4.779+1` to `semver-registry.yaml` mapping_history and increment `task_touch_counter` to 779.
- [x] **AC3:** Update current README version line to reflect corrected SemVer `v0.4.779+1` for internal `v0.2.1.18+1`.
- [ ] **AC4:** Ensure RW Step 11 (`create_rw_tags`) always calls `convert_internal_to_semver(..., finalize=True)` so future releases increment the counter.
- [ ] **AC5:** Document the collision and fix in semver converter documentation or ADR.
- [ ] **AC6:** Decide whether to move or recreate the `v0.4.778+1` tag on the correct commit (`2d8af696e`) and execute if approved.

---

## References

- `semver-registry.yaml` — canonical SemVer mapping registry
- `packages/frameworks/workflow mgt/scripts/version/semver_converter.py` — converter logic
- `packages/frameworks/workflow mgt/scripts/version/create_rw_tags.py` — tag creation helper (should finalize)
- `README.md` — version badge line
- Commit `2d8af696e` — Release v0.24.1.6+1 (first claimant of `0.4.778+1`)
- Commit `d4e165248` — Release v0.2.1.18+1 (should have received `0.4.779+1`)
- Commit `963ad934f` — Release v0.24.1.5+1 (erroneously hosts `v0.4.778+1` tag)
