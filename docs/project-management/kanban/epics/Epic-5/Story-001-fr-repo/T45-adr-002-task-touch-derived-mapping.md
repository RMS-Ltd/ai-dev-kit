---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 45: ADR-002 Task-Touch Derived Mapping (Kanban → SemVer)

**Task ID:** E5:S01:T45  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-02-26  
**Last updated:** 2026-03-09 (v0.5.1.45+2 – ADR-002 Task-Touch Mapping Implementation Complete)  
**Version:** v0.5.1.45+2  
**Code:** E5S01T45

**Repository Pattern:** FR-045 = E5:S01:T45 (first build: v0.5.1.45+1)

---

## Scope

Repository anchor task for **FR-045: ADR-002 Task-Touch Derived Mapping (Kanban → SemVer)**.

This task:

- ✅ Anchors FR-045 in the FR repository story (`E5:S01`).
- ✅ Provides the canonical repository anchor for the completed ADR-002 Task-Touch Derived Mapping implementation.
- ✅ Documents the Task-Touch Derived Mapping concept and implementation status.
- ✅ References the fully implemented `task_touch` SemVer mapping in the Numbering & Versioning framework and Release Workflow.

---

## Input

- **FR-045:** [`FR-045-adr-002-task-touch-derived-mapping.md`](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)
- **Versioning Policy & Strategy:** Numbering & Versioning framework docs.

---

## Deliverable

1. This task document as the canonical repository anchor for FR-045 (`E5:S01:T45`).
2. FR-045 is created and explicitly assigned to E5:S01:T45.
3. The Task-Touch Derived Mapping implementation is documented and fully implemented with:
   - `task_touch` SemVer mapping in `semver_converter.py`
   - Configuration support in `rw-config.yaml`
   - Comprehensive test suite in `test_task_touch_mapping.py`
   - Migration utility in `migrate_to_task_touch.py`
   - Complete ADR-002 documentation with examples

---

## Acceptance Criteria

- [x] Task document exists and is linked from the FR Repo story checklist as **E5:S01:T45**.
- [x] FR-045 is created and explicitly assigned to E5:S01:T45.
- [x] The Task-Touch Derived Mapping behaviour is described clearly enough here and in FR-045 to support separate implementation tasks.

---

## Version Anchor

- **First Build:** v0.5.1.45+1 (initial documentation build) anchors FR-045 to E5:S01:T45.
- **Second Build:** v0.5.1.45+2 (implementation completion) documents the completed ADR-002 Task-Touch Derived Mapping implementation.
- ADR-002 implementation is complete and available for use with configuration `semver_mapping_strategy: task_touch`.

---

## Related Work

- **FR-045:** ADR-002 Task-Touch Derived Mapping (Kanban → SemVer) - ✅ IMPLEMENTED
- **ADR-002:** Task-Touch Derived Mapping - ✅ IMPLEMENTED (2026-03-07)
- **Implementation:** `packages/frameworks/workflow mgt/scripts/version/semver_converter.py`
- **Tests:** `packages/frameworks/workflow mgt/scripts/version/test_task_touch_mapping.py`
- **Migration:** `packages/frameworks/workflow mgt/scripts/version/migrate_to_task_touch.py`
- **Configuration:** `rw-config.yaml` supports `semver_mapping_strategy: task_touch`

---

## References

- **FR Repo Story:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
- **FR-045:** [`docs/project-management/kanban/fr-br/FR-045-adr-002-task-touch-derived-mapping.md`](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md)

---

