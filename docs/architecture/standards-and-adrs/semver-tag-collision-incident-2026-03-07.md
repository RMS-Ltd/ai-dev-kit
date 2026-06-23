---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# SemVer Tag Collision Incident Log (2026-03-07)

## Context

A SemVer tag collision occurred during a RW maintenance release attributed to internal version `0.6.7.103+5`.

This incident log captures the current state so that the reasoning, constraints, and remediation plan are preserved as durable repo knowledge.

---

## Observed Collision

- Existing SemVer tag:
  - `v0.6.52+5`
  - Points to commit tagged as internal `v0.6.7.102+5` (CMW perpetual task)

- New internal release:
  - `v0.6.7.103+5` (RW perpetual task)
  - Attempted SemVer tag: `v0.6.52+5`
  - Result: tag creation blocked because the SemVer tag already exists

---

## Root Cause

The currently implemented SemVer mapping (`packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`) uses the **registry epic/story mapping mode**:

- `MAJOR = RC`
- `MINOR = epic_to_minor[EPIC]`
- `PATCH = story_to_patch[(EPIC, STORY)]`
- `BUILD = internal BUILD`

This mapping **does not encode TASK**.

Therefore, all internal versions that share the same `(RC, EPIC, STORY, BUILD)` map to the same SemVer.

In particular, the following internal versions all map to the same SemVer:

- `0.6.7.101+5` → `0.6.52+5`
- `0.6.7.102+5` → `0.6.52+5`
- `0.6.7.103+5` → `0.6.52+5`

This makes SemVer tag collisions inevitable for perpetual tasks within the same epic/story.

---

## Policy / Design Implication

The dev-kit versioning policy documents a "1 internal → 1 SemVer" expectation for tagging alignment, but the currently implemented mapping mode cannot satisfy this invariant when BUILD resets per task and TASK is not encoded.

---

## Current Repo State (as of this incident)

- Internal tag created:
  - `v0.6.7.103+5`

- SemVer tag was not created for `0.6.7.103+5` due to collision.

- Existing SemVer tag `v0.6.52+5` remains attached to the earlier CMW release (`v0.6.7.102+5`).

---

## Agreed Remediation Plan

Implement ADR-002 / task-touch mapping and RW SemVer tagging behavior:

- **FR-045 (ADR-002 Task-Touch Derived Mapping)**
  - Implement a `task_touch` SemVer mapping mode that increments a global task-touch counter so SemVer never collides across tasks.

- **FR-046 (RW uses SemVer tag when task_touch enabled)**
  - Update RW tagging behavior to create and use SemVer tags derived from the selected mapping mode.

These are currently tracked as FR-repo anchor tasks:

- `E5:S01:T45` (FR-045 anchor)
- `E5:S01:T46` (FR-046 anchor)

Dedicated implementation tasks will be filed under the appropriate framework epics/stories.

---

## Wave 2 recurrence (2026-06-04)

Under `task_touch`, finalize guards initially checked only full `semver+BUILD` strings, not **PATCH integer** or **SemVer core**. Live `semver-registry.yaml` had four collision groups (e.g. PATCH **870** shared by `0.5.9.12+3` and `0.6.9.17+1`).

**Remediation (E03:S02:T12):** Injective finalize in `semver_converter.py`; audit/repair scripts; registry repair per [semver-registry-collision-repair-2026-06-04.md](../../maintenance/semver-registry-collision-repair-2026-06-04.md). **Git tags not moved** — `v0.4.870` may remain on an older commit until manually addressed.

---

## References

- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `packages/frameworks/numbering-versioning/versioning-policy.md`
- `docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`
- `docs/kanban/fbu/FR-045-adr-002-task-touch-derived-mapping.md`
- `docs/kanban/fbu/FR-046-rw-semver-tag-task-touch-mode.md`
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py`
- `semver-registry.yaml`
