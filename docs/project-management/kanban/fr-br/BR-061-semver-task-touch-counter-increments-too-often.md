---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-061 — Task-touch SemVer PATCH bumps on every converter run

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Severity:** HIGH  
**Created:** 2026-04-02  
**Last updated:** 2026-04-13 — recurrence observed: SemVer tag collisions still possible in RW/tag boundary handling; reopened for regression hardening under **E3:S02:T12**.  
**Version:** v0.3.2.12+3  
**Code:** BR-061  
**Implementing Task:** [E3:S02:T12](../epics/Epic-3/Story-002-versioning-cookbook-and-examples/T12-implement-task-touch-semver-mapping-mode.md)

**Scope note:** This tracks **versioning / `semver_converter.py` / RW usage**, not FR/BR intake mechanics.

---

## Problem Statement

With `semver_mapping_strategy: task_touch` in `rw-config.yaml`, the outward **SemVer PATCH** (backed by `task_touch_counter` in `semver-registry.yaml`) appears to advance **far too often**. Maintainers see **rapid PATCH inflation**, **repeated SemVer strings** competing with **Git tags** on `origin`, and fragile workarounds (extra internal `+BUILD` bumps until an unused `v{semver}` exists).

The failure mode smells like **“the converter mutates registry state every time it runs”**, not **“once per completed release.”**

## Current Fault (hypothesis tied to code)

In `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`, **`convert_internal_to_semver_task_touch`** sets PATCH by calling **`increment_task_touch_counter(rc)`**, which **loads the registry, increments `task_touch_counter`, and saves** — i.e. a **persistent side effect on every conversion**.

The module docstring for that path says PATCH increments **once per RW release**, but the implementation couples **“compute SemVer for this internal version”** with **“increase the global counter”** on **every** call to `convert_version_string(..., task_touch)`.

Therefore **any** extra invocation burns a PATCH level, for example:

- Running `semver_converter.py <internal>` more than once for the same release (README step + tag step + agent check + CI).
- Preview or validation code paths that call `convert_version_string` without meaning “this release is finalized.”
- Retries after a failed push (same internal version → new PATCH → new tag name → mismatch with docs from the first attempt).

## Expected Behavior

- **Idempotency (per release):** For a given **intended release** (internal `RC.EPIC.STORY.TASK+BUILD` that is committed as the version of record), deriving SemVer should yield the **same** SemVer until the release boundary changes — or increments should be **explicitly** tied to a single RW “finalize” step, not to every read/convert.
- **Registry mutations** should not occur from **read-only** “what is SemVer for X?” calls.
- Alignment with **Git tags:** PUSH of `v{semver}` should not routinely fail because PATCH leaped ahead due to duplicate converter runs.

## Impact

- **Operator confusion:** SemVer drifts ahead of intuitive “one bump per release.”
- **Tag collisions / ambiguity:** Multiple SemVer tags or failed pushes when names already exist on `origin`.
- **Erosion of trust** in `task_touch` as a stable mapping for automation and GitHub Releases.

## Reproduction (conceptual)

1. Set `semver_mapping_strategy: task_touch` and note current `task_touch_counter` in `semver-registry.yaml`.
2. Run `python semver_converter.py 0.6.6.57+1` (same internal version) **twice** without changing `version.py`.
3. Observe `task_touch_counter` increased **twice**; PATCH in output advances each time.

(Exact numbers depend on repo state; the structural bug is **side effect on convert**.)

## Root Cause Hypothesis

**Primary:** **`convert_version_string` / task-touch path incorrectly uses “increment counter” as part of pure conversion** instead of a **release-finalization** or **idempotent map (internal → semver)** operation.

**Secondary:** Call sites (RW agent steps, README, `create_github_release.py`, tests) may invoke the converter **multiple times per release**, amplifying the bug.

## Proposed Resolution (investigation → fix)

1. **Confirm** frequency of `convert_version_string(..., task_touch)` calls in a single RW and in CI.
2. **Design** one of:
   - **Idempotent mapping:** PATCH derived from stable inputs (e.g. counter advances only when internal `(RC,EPIC,STORY,TASK)` or full internal version **first** appears in registry history), **or**
   - **Explicit increment:** Only bump `task_touch_counter` from a dedicated RW step after version file is final (single call site), with all other paths **read-only**.
3. **Add tests** that running conversion **N times** for the **same** release does **not** advance PATCH `N` times.
4. **Document** task_touch semantics in versioning policy / RW guide: when registry mutates vs when it only reads.

## Related

- `semver_converter.py` — `convert_internal_to_semver_task_touch`, `increment_task_touch_counter`
- `semver-registry.yaml`
- `rw-config.yaml` → `semver_mapping_strategy: task_touch`
- [FR-045](FR-045-adr-002-task-touch-derived-mapping.md) (ADR-002 mapping intent)
- [FR-046](FR-046-rw-semver-tag-task-touch-mode.md) (RW SemVer tag behaviour)

## Recurrence context (2026-04-13)

Although the original converter mutation bug was fixed, a new collision pattern was observed in live RW runs:

- distinct internal releases can still converge on already-existing SemVer tags at RW tag/release boundaries;
- RW Step 11 currently tolerates existing SemVer tags in some paths instead of hard-failing with collision diagnostics;
- Step 12.5 may then update an existing GitHub release for that reused SemVer tag.

This reopens BR-061 as a regression-hardening effort focused on injective SemVer mapping + boundary enforcement.

### Collision invariants (reconfirmed)

- Finalized internal release key (`RC.EPIC.STORY.TASK+BUILD`) is mapped once and remains idempotent on replay.
- SemVer release tag core (`vMAJOR.MINOR.PATCH`) must not be reused by a different internal release lineage at RW boundary.
- RW must hard-fail with deterministic diagnostics when SemVer ownership is ambiguous or already occupied by a different lineage.

## Resolution note

Implemented in `E3:S02:T12` and released as `v0.3.2.12+2`:

- task-touch conversion is read-only by default;
- state mutation moved to explicit finalize semantics;
- mapping-history idempotency prevents repeated conversion calls from burning PATCH values;
- regression tests cover read-only non-mutation, finalize idempotency, and FR-046 collision scenarios.

## Regression hardening outcome (2026-04-13)

Attempted fix implemented and released as `v0.3.2.12+3` (SemVer `v0.4.733+3`):

- finalize now enforces injective ownership (`semver -> internal_version`) and rejects collisions deterministically;
- RW Step 11 boundary now hard-fails when SemVer primary tag exists without matching internal-tag lineage;
- Step 12.5 release creation now rejects explicit `--semver-tag` overrides that disagree with canonical mapping for the internal version.
