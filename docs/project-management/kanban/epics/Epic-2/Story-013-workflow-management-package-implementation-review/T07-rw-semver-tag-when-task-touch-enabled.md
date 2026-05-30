---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T07 – RW Uses SemVer Tag When `task_touch` Enabled

**Task ID:** E02:S13:T07  
**Status:** SUPERSEDED  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-07  
**Last updated:** 2026-05-29  

---

## Supersession (2026-05-29)

**This task is SUPERSEDED by [E05:S01:T46](../../Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md).**

FR-046 implementation and closure were delivered under the FR repository anchor task E05:S01:T46 (builds +2 through +7). Scope overlap included RW SemVer primary tagging, dual⇒task_touch validation, GitHub release alignment, and documentation.

**Do not implement separately.** Track verification and release history on T46 and [FR-046](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md).

Closure evidence: [`IPP-E05S01T46-fr046-closure-wave.md`](../../../../implementation-cycles/IPP-E05S01T46-fr046-closure-wave.md).

---

## Scope

Update Release Workflow (RW) tagging behavior so when ADR-002 / `task_touch` SemVer mapping is enabled via configuration:

- RW creates and uses **SemVer tags** as the primary external tag for release commits.
- RW may still create an internal tag (`vRC.EPIC.STORY.TASK+BUILD`) on the same commit for traceability.

This work is motivated by the SemVer tag collision incident and is dependent on the `task_touch` converter implementation.

---

## Inputs

- FR-046: `docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md`
- FR repo anchor task: `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md`
- Incident log: `docs/architecture/standards-and-adrs/semver-tag-collision-incident-2026-03-07.md`
- RW config: `rw-config.yaml`
- SemVer converter: `packages/frameworks/workflow mgt/scripts/version/semver_converter.py` (to be extended for task_touch)
- RW execution docs: `.cursorrules` and RW execution guides

---

## Deliverable

- Configuration-driven RW tagging behavior:
  - Detect `task_touch` mapping mode (via `rw-config.yaml` or equivalent)
  - Compute SemVer via task-touch converter
  - Create tag `v\{semver\}` for the release commit
  - Ensure tag alignment (SemVer tag and internal tag point to same commit)

- Documentation updates describing this behavior
- Validation improvements (optional/desired): detect and block or remediate SemVer tag collisions/misalignments before push

---

## Acceptance Criteria

- [x] ~~RW detects `task_touch` mapping mode via configuration.~~ → Delivered via E05:S01:T46
- [x] ~~RW creates SemVer tag `v\{semver\}` when enabled.~~ → Delivered via E05:S01:T46
- [x] ~~RW still supports default behavior when `task_touch` is not enabled.~~ → Delivered via E05:S01:T46
- [x] ~~Documentation updated to reflect behavior.~~ → Delivered via E05:S01:T46
- [x] ~~Collision/misalignment behavior is defined (block with guidance vs automated correction).~~ → Delivered via E05:S01:T46 + E03:S02:T12

---

## Dependencies

- Blocked by FR-045 implementation (task-touch SemVer mapping mode).

---

## Related Work

- `docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`
- **Canonical implementation:** [E05:S01:T46](../../Epic-5/Story-001-fr-repo/T46-rw-semver-tag-task-touch-mode.md)
