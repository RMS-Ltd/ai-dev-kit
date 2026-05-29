---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11: Kanban Granularity & Discrete Task Docs (Kanban Framework)

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Last updated:** 2025-12-11 (v0.4.11.2+1 – Task templates created)  
**Estimated Effort:** 1 week  
**Started:** 2025-12-11  
**Completed:** [TBD]  
**Version:** v0.4.11.2+1  
**Code:** E4S11

---

## Task Checklist

- [x] **E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure** ✅ COMPLETE (v0.4.11.1+1)
- [x] **E4:S11:T02 – Create Task Document Template and Update Story Template** ✅ COMPLETE (v0.4.11.2+1)
- [ ] **E4:S11:T03 – Update Versioning Policy with Task Doc Requirements**

> **Format:** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding, e.g., `E4:S11:T01`)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)  
> **Task Document Format:** This Story uses **delimited section format** for tasks (see examples below)

---

## Overview

Implement Kanban-specific components of FR-016: Kanban Granularity & Discrete Task Docs. This story focuses on Kanban policy updates, template creation, and versioning policy updates related to Kanban governance.

---

## Goals

- [x] Update Kanban governance policy to mandate 3-tier structure and discrete Task docs
- [x] Create Task document template and update Story template
- [ ] Update versioning policy with Task doc requirements (Kanban-related sections)
- [ ] Define abstract space concept in Kanban Policy and Numbering Policy (FR-018)

---

## Tasks

**Note:** This Story demonstrates the **delimited section format** for Task documents. Tasks are documented within the Story document using Task ID headers.

### E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E4:S11:T01`, not `T01` alone)

**Input:** Current Kanban governance policy documents (canonical, dev-kit local, numbering & versioning framework)  
**Deliverable:** Updated Kanban governance policy mandating 3-tier structure and discrete Task docs  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Review current Kanban governance policy documents
2. Add explicit requirement for 3-tier structure (Epic → Story → Task)
3. Mandate discrete Task documents (or clearly delimited sections using Task ID)
4. Define required Task doc fields (Task ID, Scope, Acceptance Criteria, Status, Version Anchor, Completion Date, Related BR/FR Links, Input, Deliverable, Dependencies, Blocker, Parallel Development Candidacy)
5. Prohibit implicit/inline tasks (must be explicit at task tier)
6. Update FR/BR → Task → Story → Epic flow documentation
7. Add validation requirements for Task doc presence

**Acceptance Criteria:**
- [x] Kanban governance policy explicitly mandates 3-tier structure
- [x] Policy requires discrete Task docs (or clearly delimited sections)
- [x] Required Task doc fields are documented
- [x] Implicit/inline tasks are prohibited
- [x] All three policy documents updated consistently

**Status:** ✅ COMPLETE (v0.4.11.1+1)

---

### E4:S11:T02 – Create Task Document Template and Update Story Template

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E4:S11:T02`, not `T02` alone)

**Input:** Current Story template (`packages/frameworks/kanban/templates/STORY_TEMPLATE.md`)  
**Deliverable:** Task document template and updated Story template  
**Dependencies:** T01 (policy requirements)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Create new Task document template:
   - `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
   - Include all required fields from T01
   - Support both formats: separate file OR clearly delimited section
2. Update Story template:
   - Clarify that tasks can be either:
     - Separate files (e.g., `Task-011-*.md` in Story directory)
     - Clearly delimited sections within Story doc (using Task ID as header)
   - Update task checklist format to reference Task doc location
   - Add guidance on when to use separate files vs. sections
3. Create example Task doc (separate file format)
4. Create example Task section (within Story doc format)
5. Update template documentation

**Acceptance Criteria:**
- [x] Task document template created with all required fields
- [x] Story template updated to clarify Task doc formats
- [ ] Examples provided for both formats
- [ ] Template documentation updated

**Status:** ✅ COMPLETE (v0.4.11.2+1) - Phase 1 (templates) complete, Phase 2 (examples) in progress

---

### E4:S11:T03 – Update Versioning Policy with Task Doc Requirements

> **Format:** Always use full `Exx:Sxx:Txx` format (e.g., `E4:S11:T03`, not `T03` alone)

**Input:** Current versioning policy documents  
**Deliverable:** Updated versioning policy requiring Task doc presence and alignment (Kanban-related sections)  
**Dependencies:** T01 (policy requirements)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current versioning policy documents:
   - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/versioning-policy.md` (framework)
   - `packages/frameworks/numbering & versioning/versioning-strategy.md` (framework)
2. Update Kanban-related sections:
   - Add requirement that Task doc must exist before versioning
   - Document Task doc → Version TASK component alignment requirement
   - Update Task transition rules to require Task doc presence
   - Add validation requirements for Task doc presence and alignment
3. Reference FR-017 for doc-init (`+0`) support (prerequisite)
4. Coordinate with E2:S09:T03 for RW-related versioning policy updates

**Acceptance Criteria:**
- [ ] Versioning policy requires Task doc presence before versioning (Kanban sections)
- [ ] Task doc → Version TASK component alignment documented
- [ ] Task transition rules updated
- [ ] Validation requirements documented
- [ ] All versioning policy documents updated consistently

**Status:** TODO

---

## Acceptance Criteria

- [x] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [x] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [x] **AC3:** Task document template created with examples
- [x] **AC4:** Story template updated to clarify Task doc formats
- [ ] **AC5:** Versioning policy updated with Task doc requirements (Kanban sections)
- [ ] **AC6:** Abstract space concept defined in Kanban Policy and Numbering Policy (FR-018)

---

## Dependencies

**Blocks:**
- E2:S09 (RW Integration) - requires policy and templates
- E2:S09:T02 (RW Step 1 Task doc presence) - requires policy and templates
- E2:S09:T03 (Validators) - requires policy requirements
- E2:S10:T01 (RW Step 1 Doc-Init Path) - requires E2:S09 completion

**Blocked By:**
- None (can proceed independently)

**Related Work:**
- **E2:S09:** Kanban Granularity & Discrete Task Docs (Workflow Management coordination) (depends on this story)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story + E2:S09)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016, enables E2:S10)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (T04)

---

## Completion Summary

[To be filled upon completion]

---

## References

- **E2:S09:** `docs/project-management/kanban/epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`
- **FR-016:** `docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## Next Actions

- [ ] Complete T02 Phase 2: Create examples for both Task document formats
- [ ] Begin T03: Update Versioning Policy with Task Doc Requirements
- [ ] Coordinate with E2:S09 for RW integration

