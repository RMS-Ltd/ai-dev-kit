---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# T12 – Implement ADR-002 Task-Touch SemVer Mapping Mode

**Task ID:** E3:S02:T12  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-07  
**Last updated:** 2026-04-13 — regression hardening reopened after observed SemVer collision recurrence at RW tag/release boundaries.

**Associated BR:** [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md)
**Version Anchor:** v0.3.2.12+2

---

## Scope

Implement **ADR-002 / task-touch derived SemVer mapping** so external-facing SemVer is **strictly monotonic and 1:1** with internal `RC.EPIC.STORY.TASK+BUILD` releases.

This task is prompted by a real SemVer tag collision incident (see incident log), demonstrating that the current registry epic/story mapping mode cannot guarantee unique SemVer across tasks within the same Epic/Story.

---

## Inputs

- **BR-061:** [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) — registry counter / PATCH over-increment + tag pressure (**implementation bug**, not intake)
- FR-045: `docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md`
- FR repo anchor task: `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T45-adr-002-task-touch-derived-mapping.md`
- FR-046 anchor interaction target: [E5:S01:T46](../../Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)
- Incident log: `docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md`
- Existing converter (Mode A): `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
- Existing registry: `semver-registry.yaml`
- Existing config: `rw-config.yaml`
- Planning artifact (IPW): [IPW-E3S02T12-task-touch-semver-collision-hardening](../../../../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md)

---

## Deliverable

- A new mapping mode selectable via configuration (e.g. `semver_mapping_strategy: task_touch` or equivalent) that:
  - **MAJOR = RC**
  - **MINOR = count of epics signed off (per RC)** (as per ADR-002)
  - **PATCH = global task-touch counter** (increments **once per finalized release**, not on every read/convert — see **BR-061**)
  - Optional `+BUILD` mirroring internal BUILD for traceability

- Canonical storage for task-touch counter and mapping history (file-based, version controlled)
- Converter implementation and tests demonstrating:
  - Strictly monotonic external SemVer
  - No collisions across tasks or perpetual tasks
  - Deterministic mapping for a given repository history

---

## Acceptance Criteria

- [x] Task-touch SemVer mapping mode is implemented and documented.
- [x] Mapping is configurable via `rw-config.yaml` (or documented equivalent).
- [x] Mapping is monotonic and collision-free for real dev-kit sequences (including perpetual tasks).
- [x] **BR-061:** PATCH / `task_touch_counter` does **not** advance on repeated **read-only** SemVer derivation for the same release; behaviour covered by tests (idempotent convert or single explicit increment site).
- [x] Converter tests include scenarios that previously collide under registry epic/story mapping.
- [ ] Backfill/migration guidance exists for initializing counters from existing tag history.

---

## Related Work

- [BR-061](../../../fr-br/BR-061-semver-task-touch-counter-increments-too-often.md) (PATCH over-increment / usage of `semver_converter.py`)
- FR-046 (RW uses SemVer tag when task_touch enabled)
- `docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`
- [IPW-E3S02T12-task-touch-semver-collision-hardening](../../../../../implementation-cycles/IPW-E3S02T12-task-touch-semver-collision-hardening.md)

## Implementation note

Implemented converter hardening for BR-061 by splitting task-touch behavior into read-only derivation and explicit finalization, with idempotent mapping history per internal version. Regression tests now cover read-only non-mutation, finalize idempotency, and FR-046 collision scenarios.

## Regression reopening note (2026-04-13)

Task reopened to enforce collision-invariant SemVer mapping at release boundaries:

- add explicit injective guard (`semver -> internal_version`) during finalize;
- hard-fail RW tag creation when SemVer primary tag already exists but does not match the current internal release lineage;
- add deterministic diagnostics + regression tests for boundary collision paths.
