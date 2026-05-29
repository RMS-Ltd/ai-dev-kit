---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-07T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S13:T07 – RW Uses SemVer Tag When `task_touch` Enabled

**Task ID:** E2:S13:T07  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-03-07  
**Last updated:** 2026-03-07  

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

- [ ] RW detects `task_touch` mapping mode via configuration.
- [ ] RW creates SemVer tag `v\{semver\}` when enabled.
- [ ] RW still supports default behavior when `task_touch` is not enabled.
- [ ] Documentation updated to reflect behavior.
- [ ] Collision/misalignment behavior is defined (block with guidance vs automated correction).

---

## Dependencies

- Blocked by FR-045 implementation (task-touch SemVer mapping mode).

---

## Related Work

- `docs/architecture/standards-and-adrs/semver-implementation-followup-spec.md`
