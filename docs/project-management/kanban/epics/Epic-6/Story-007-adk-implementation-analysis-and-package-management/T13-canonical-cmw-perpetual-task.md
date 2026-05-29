---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T23:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 13: Canonical CMW Perpetual Task

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2025-12-21 (v0.6.7.13+2 – Implementation complete, migrated from v0.6.6.13+2)  
**Started:** 2025-12-21  
**Completed:** 2025-12-21  
**Version:** v0.6.7.13+2

**Feature Request:** [FR-026](../../../fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md)  
**Code:** E6S07T13

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E6:S07:T13`

---

## Scope

Include the CMW perpetual task (T102, migrated from T12) in the canonical framework task set by updating framework templates, documentation, and RW logic. This enables projects adopting the framework to automatically have the CMW perpetual task pattern available, ensuring consistency across projects.

**Problem Statement:**
- CMW perpetual task (T102, migrated from T12) exists in ai-dev-kit but is not included in canonical framework templates
- Each project would need to create their own CMW perpetual task (inconsistency)
- No standard pattern documented for CMW maintenance versioning across projects
- RW logic does not yet detect CMW context and auto-attribute to T102 (migrated from T12)

**Solution:**
1. Update framework templates to include CMW perpetual task pattern
2. Update framework documentation to document CMW perpetual task pattern
3. Update RW logic to detect CMW context (similar to UKW context detection)
4. Update RW execution guide and versioning policy documentation

---

## Input

- **Feature Request:** [`FR-026-canonical-perpetual-task-for-changelog-maintenance.md`](../../../fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md)
  - Problem statement and proposed solution
  - Acceptance criteria
  - Implementation considerations

- **Task T102:** [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (migrated from T12)
  - Perpetual task document (reference pattern)

- **Task T101:** [`T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (migrated from T08)
  - UKW perpetual task pattern (reference implementation)

- **Framework Templates:**
  - `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
  - `packages/frameworks/kanban/templates/tasks/` (task templates)

- **RW Documentation:**
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
  - `.cursorrules` (RW trigger section)
  - `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`

- **Versioning Policy:**
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`


---

## Deliverable

**Canonical CMW Perpetual Task Integration:**

1. **Framework Templates Updated:**
   - Update `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` to include CMW perpetual task in Epic 6, Story 7 (migrated from Story 6)
   - Create/update task template for CMW perpetual task pattern
   - Ensure templates document the perpetual task pattern (similar to UKW T101, migrated from T08)

2. **Framework Documentation Updated:**
   - Document CMW perpetual task pattern in workflow framework docs
   - Add CMW context detection to RW execution guide
   - Update versioning policy to mention CMW perpetual task pattern

3. **RW Logic Updated:**
   - Update RW Step 2 to detect CMW context (user ran "CMW" then "RW")
   - Implement CMW attribution logic (similar to UKW attribution)
   - Auto-attribute CMW releases to T102 (perpetual task discovered via flag, migrated from T12)
   - Suppress build warnings for CMW perpetual task

4. **Cursor Rules Updated:**
   - Update `.cursorrules` RW trigger section with CMW context detection
   - Document CMW attribution logic pattern
   - Add examples of CMW context detection and attribution

---

## Acceptance Criteria

- [x] Framework templates updated to include CMW perpetual task pattern ✅
- [x] Task template created/updated for CMW perpetual task (similar to UKW T101 pattern, migrated from T08) ✅
- [x] `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md` includes CMW perpetual task pattern in Epic 2, Story 1 ✅
- [x] RW execution guide updated with CMW context detection and attribution logic ✅
- [x] RW Step 2 logic updated to detect CMW context and auto-attribute to T102 (migrated from T12) ✅
- [x] Versioning policy documentation updated to mention CMW perpetual task pattern ✅
- [x] `.cursorrules` RW trigger section updated with CMW context detection ✅
- [x] First CMW-triggered RW uses T102 correctly (migrated from T12) ✅
- [ ] Pattern documented for adoption across projects

---

## Approach

### Phase 1: Framework Templates Update

1. **Update Comprehensive Structure:**
   - Add CMW perpetual task (T102, migrated from T12) to Epic 6, Story 7 (migrated from Story 6) in `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
   - Document perpetual task pattern and usage

2. **Create/Update Task Template:**
   - Review UKW perpetual task template (if exists) or T101 document (migrated from T08)
   - Create task template for CMW perpetual task pattern
   - Include metadata: `Task Type: Perpetual Maintenance`, `Build Warning Suppression: true`

### Phase 2: Framework Documentation Update

1. **Workflow Framework Docs:**
   - Update workflow framework documentation to include CMW perpetual task pattern
   - Document how projects should create their CMW perpetual task

2. **Versioning Policy:**
   - Update versioning policy to document CMW perpetual task versioning pattern
   - Reference UKW perpetual task pattern for consistency

### Phase 3: RW Logic Update

1. **CMW Context Detection:**
   - Update RW Step 2 to detect CMW context (similar to UKW context detection)
   - Pattern: User ran "CMW" then "RW" → CMW context detected
   - Agent must track context between workflow executions

2. **CMW Attribution Logic:**
   - If CMW context detected → Auto-attribute to perpetual task T102 (migrated from T12)
   - Pattern: Search for task document with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag (for CMW)
   - Use task number from perpetual task, increment BUILD
   - Skip normal task identification when CMW context detected

3. **Build Warning Suppression:**
   - Verify perpetual task flag detection works for CMW
   - Ensure build warnings are suppressed for CMW perpetual task
   - Document that high BUILD numbers are expected and valid

### Phase 4: Cursor Rules Update

1. **Update RW Trigger Section:**
   - Add CMW context detection to Step 2 logic
   - Document CMW attribution pattern (similar to UKW)
   - Add examples of CMW context detection and attribution

2. **Documentation:**
   - Ensure CMW perpetual task pattern is clearly documented
   - Reference UKW pattern for consistency

---

## Dependencies

**Depends On:**
- E2:S16:T03 - Changelog Maintenance Workflow (CMW) - Perpetual Task (migrated from T12, must exist first)
- E6:S07:T11 - Changelog Management and Archival Workflow (CMW implementation)

**Blocks:**
- Projects adopting framework templates with CMW perpetual task
- Consistent CMW maintenance versioning across projects

**Blocked By:**
- None (T102 already exists, migrated from T12)

**Parallel Development Candidacy:** Safe - can proceed independently of other tasks

---

## Related Work

**Related Tasks:**
- E2:S16:T03 - Update Kanban Workflow (UKW) - Perpetual Task (pattern reference, migrated from T08)
- E6:S07:T11 - Changelog Management and Archival Workflow (CMW implementation, COMPLETE)
- E2:S16:T03 - Changelog Maintenance Workflow (CMW) - Perpetual Task (this task references it, migrated from T12)

**Related Feature Requests:**
- [FR-026](../../../fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md) - Canonical Perpetual Task for Changelog Maintenance

**Related Stories:**
- E6:S07 - ADK Implementation Analysis and Package Management (parent story, migrated from S06)

**Related Epics:**
- Epic 6 - Framework Management and Maintenance (parent epic)

---

## References

- **CMW Workflow:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **UKW Perpetual Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md` (migrated from T08, Story 6→Story 7)
- **CMW Perpetual Task:** `docs/project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md` (migrated from T12, Story 6→Story 7)
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Comprehensive Structure:** `packages/frameworks/kanban/templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.6.7.13+1)`)

**Current Status:** ✅ COMPLETE
- Task created: v0.6.7.13+0 (migrated from v0.6.6.13+0)
- Implementation: Complete (v0.6.7.13+2, migrated from v0.6.6.13+2)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

**Last Updated:** 2025-12-21 (v0.6.7.13+2 – Implementation complete, migrated from v0.6.6.13+2)  
**Version:** v0.6.7.13+2  
**Status:** ✅ COMPLETE

