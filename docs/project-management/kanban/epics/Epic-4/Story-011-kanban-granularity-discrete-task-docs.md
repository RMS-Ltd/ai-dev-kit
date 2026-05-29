---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 11: Kanban Granularity & Discrete Task Docs (Kanban Framework)

**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Last updated:** 2025-12-18 (v0.4.11.7+0 – T07 added: Migration plan for embedded tasks to discrete Task documents)  
**Estimated Effort:** 1 week (T01-T06) + 6-8 weeks (T07 migration)  
**Started:** [TBD]  
**Completed:** [TBD]  
**Version:** v0.4.11.7+0  
**Code:** E4S11

---

## Task Checklist

- [x] **E4:S11:T00 – Story Creation and Task Decomposition** ✅ COMPLETE (v0.4.11.0+0)
- [x] **E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure** ✅ COMPLETE (v0.4.11.1+0)
- [x] **E4:S11:T02 – Create Task Document Template and Update Story Template** ✅ COMPLETE (v0.4.11.2+2)
- [x] **E4:S11:T03 – Update Versioning Policy with Task Doc Requirements (Kanban-related sections)** ✅ COMPLETE (v0.4.11.3+1)
- [x] **E4:S11:T04 – Define Abstract Space for Zero-Numbered E/S/T Docs (FR-018)** ✅ COMPLETE (v0.4.11.4+1)
- [x] **E4:S11:T05 – Dependency Wiring Cross-References** ✅ COMPLETE (v0.4.11.5+0)
- [x] **E4:S11:T06 – Review and Optimize Template Structure for Tier Delegation** ✅ COMPLETE (v0.4.11.6+2 – All phases complete: templates optimized, guidelines created, compliance audit complete, migration guide created)
- [ ] **E4:S11:T07 – Migrate Embedded Tasks to Discrete Task Documents** - TODO (v0.4.11.7+0 – Migration plan and implementation)
  - Task: [`T07-planning-spec-tests-impl.md`](Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md)


> **Format:** `E4:S11:Txx` (Epic 4, Story 11, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)  
> **Coordination:** This story coordinates with E2:S09 (Workflow Management) for RW integration

---

## Overview

Implement Kanban-specific components of FR-016: Kanban Granularity & Discrete Task Docs. This story focuses on Kanban policy updates, template creation, and versioning policy updates related to Kanban governance. RW-specific work (Step 1 updates, validators, agent execution guide) is handled in E2:S09.

---

## Goals

- [ ] Update Kanban governance policy to mandate 3-tier structure and discrete Task docs
- [ ] Create Task document template and update Story template
- [ ] Update versioning policy with Task doc requirements (Kanban-related sections)
- [ ] Coordinate with E2:S09 for RW integration

---

## Tasks

### E4:S11:T00 – Story Creation and Task Decomposition

**Input:** FR-016 requirements, E2:S09 coordination plan  
**Deliverable:** Story document created, Kanban-specific tasks defined  
**Dependencies:** E2:S09:T00 (coordination established)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Review FR-016 requirements
2. Identify Kanban-specific vs. RW-specific work
3. Create Story 11 under Epic 4
4. Define Kanban-specific tasks (T01-T03)
5. Cross-reference E2:S09 for coordination

**Status:** ✅ COMPLETE (v0.4.11.0+0)

---

### E4:S11:T01 – Update Kanban Governance Policy to Mandate 3-Tier Structure

**Input:** Current Kanban governance policy documents  
**Deliverable:** Updated Kanban governance policy mandating 3-tier structure and discrete Task docs  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Review current Kanban governance policy documents:
   - `packages/frameworks/kanban/policies/kanban-governance-policy.md` (canonical SoT)
   - `docs/project-management/rituals/policy/kanban-governance-policy.md` (dev-kit local)
   - `packages/frameworks/numbering & versioning/kanban-governance-policy.md` (framework)
2. Add explicit requirement for 3-tier structure (Epic → Story → Task)
3. Mandate discrete Task documents (or clearly delimited sections using Task ID)
4. Define required Task doc fields:
   - Task ID (`E\{epic\}:S\{story\}:T\{task\}`)
   - Scope
   - Acceptance criteria
   - Status
   - Version anchor (for doc-init support, see FR-017)
   - Completion date
   - Related BR/FR links
5. Prohibit implicit/inline tasks (must be explicit at task tier)
6. Update FR/BR → Task → Story → Epic flow documentation
7. Add validation requirements for Task doc presence

**Acceptance Criteria:**
- [x] Kanban governance policy explicitly mandates 3-tier structure
- [x] Policy requires discrete Task docs (or clearly delimited sections)
- [x] Required Task doc fields are documented
- [x] Implicit/inline tasks are prohibited
- [x] All three policy documents updated consistently

**Coordination:**
- E2:S09:T04 depends on this task (RW Step 1 needs policy requirements)

**Status:** ✅ COMPLETE (v0.4.11.1+0)

---

### E4:S11:T02 – Create Task Document Template and Update Story Template

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
- [x] Examples provided for both formats
- [x] Template documentation updated

**Coordination:**
- E2:S09:T04 depends on this task (RW Step 1 needs template structure)

**Status:** ✅ COMPLETE (v0.4.11.2+2)

---

### E4:S11:T03 – Update Versioning Policy with Task Doc Requirements (Kanban-related sections)

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
- [x] Versioning policy requires Task doc presence before versioning (Kanban sections)
- [x] Task doc → Version TASK component alignment documented
- [x] Task transition rules updated
- [x] Validation requirements documented
- [x] All versioning policy documents updated consistently

**Coordination:**
- E2:S09:T03 handles RW-related versioning policy updates
- This task focuses on Kanban governance aspects

**Status:** ✅ COMPLETE (v0.4.11.3+1)

---

### E4:S11:T04 – Define Abstract Space for Zero-Numbered E/S/T Docs (FR-018)

**Input:** FR-018 requirements, Kanban and Numbering policy documents  
**Deliverable:** Abstract space concept defined in Kanban Policy, complementary section in Numbering Policy, SOP for committing initial E/S/T docs  
**Dependencies:** T01-T03 (FR-016 policy and template work must be complete)  
**Blocker:** FR-016 (requires discrete Task docs and 3-tier structure first)  
**Parallel Development Candidacy:** Blocked (depends on FR-016 completion)

**Approach:**
1. Review FR-018 requirements:
   - Abstract space concept for zero-numbered E/S/T docs
   - Examples: `0.3.0.0+0` (Epic), `0.2.5.0+0` (Story), `0.10.4.6+0` (Task)
   - SOP for committing initial E/S/T docs
2. Add section to Kanban Governance Policy:
   - Section: "Abstract Spaces for Forensic Traceability"
   - Subsection: "Zero-Numbered E/S/T Documentation"
   - Define Epic-level (`0.\{EPIC\}.0.0+0`), Story-level (`0.\{EPIC\}.\{STORY\}.0+0`), Task-level (`0.\{EPIC\}.\{STORY\}.\{TASK\}+0`) abstract spaces
   - Subsection: "SOP for Committing Initial E/S/T Docs"
   - Specify when, where, and how to commit initial E/S/T documentation
   - Cross-reference to Numbering Policy
3. Coordinate with Epic 3 (Numbering & Versioning Framework) for Numbering Policy section:
   - Section: "Abstract Space Version Schema"
   - Subsection: "Epic-Level Abstract Spaces"
   - Subsection: "Story-Level Abstract Spaces"
   - Subsection: "Task-Level Abstract Spaces"
   - Cross-reference to Kanban Policy
4. Ensure both policies align:
   - Consistent terminology and examples
   - Clear relationship between abstract space (`+0`) and functional work (`+1`)
   - Link to FR-017 (doc-init build `+0`) implementation

**Acceptance Criteria:**
- [x] Kanban Policy includes section defining abstract spaces for zero-numbered E/S/T docs
- [x] Kanban Policy specifies SOP for committing initial E/S/T docs
- [x] Numbering Policy includes complementary section explaining abstract space version schema
- [x] Both policies cross-reference each other
- [x] Abstract space examples provided for Epic, Story, and Task levels
- [x] Policy explains relationship between abstract space (`+0`) and functional work (`+1`)
- [x] Policy aligns with FR-016 (discrete Task docs) and FR-017 (doc-init build `+0`)

**Coordination:**
- Requires coordination with Epic 3 (Numbering & Versioning Framework) for Numbering Policy updates
- Depends on FR-016 completion (T01-T03)
- Supports FR-017 implementation (doc-init build `+0`)

**Status:** ✅ COMPLETE (v0.4.11.4+1)

---

### E4:S11:T05 – Dependency Wiring Cross-References

**Input:** E2:S10:T06 dependency chain, FR-020 requirements  
**Deliverable:** Cross-references wired to show E4:S11 blocks E2:S10:T06  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation only)

**Approach:**
1. Update Blocks section to include E2:S10:T06
2. Update Related Work section to include FR-020 and E2:S10:T06
3. Document that E4:S11 blocks E2:S10:T06 via dependency chain
4. Add cross-references to show dependency relationship

**Acceptance Criteria:**
- [ ] Blocks section updated with E2:S10:T06
- [ ] Related Work section updated with FR-020 and E2:S10:T06
- [ ] Dependency relationship documented
- [ ] Cross-references wired

**Status:** ✅ COMPLETE (v0.4.11.5+0)

---

### E4:S11:T06 – Review and Optimize Template Structure for Tier Delegation

**Status:** ✅ COMPLETE (v0.4.11.6+2 – All phases complete)  
**Input:** Epic, Story, and Task templates (from E4:S06 and E4:S11:T02), current template structure  
**Deliverable:** Optimized templates with proper tier delegation, delegation guidelines documented  
**Dependencies:** E4:S11:T02 (Task template created), E4:S06:T01-T04 (Epic/Story/Task templates created)  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (depends on templates being created)

**Progress:**
- ✅ Phase 1: Epic template optimized to delegate Story detail (removed detailed Story sections, added delegation guidance)
- ✅ Phase 2: Story template optimized to delegate Task detail (added delegation guidance, clarified delimited section format)
- ✅ Phase 3: Task template reviewed (confirmed as leaf node - no changes needed)
- ✅ Phase 4: Delegation guidelines document created (`TIER_DELEGATION_GUIDELINES.md`)
- ✅ Phase 5: Review existing Epic/Story/Task docs for compliance (audit complete: Epic-4.md and Epic-2.md violations documented)
- ✅ Phase 6: Create migration guide for updating existing docs (comprehensive migration guide added to guidelines, compliance audit document created)

**Approach:**
1. Review Epic template structure:
   - Identify sections that duplicate Story-level detail
   - Ensure Epic template delegates Story details to Story docs
   - Epic should contain: purpose, scope, key characteristics, story checklist (references only)
   - Epic should NOT contain: detailed story descriptions, task-level details
2. Review Story template structure:
   - Identify sections that duplicate Task-level detail
   - Ensure Story template delegates Task details to Task docs
   - Story should contain: overview, goals, task checklist (references only), acceptance criteria (story-level)
   - Story should NOT contain: detailed task descriptions, task implementation details
3. Review Task template structure:
   - Ensure Task template contains all necessary detail (no delegation below)
   - Task should contain: input, deliverable, approach, acceptance criteria, dependencies, blockers
   - Task is the leaf node - all detail lives here
4. Create delegation guidelines:
   - Document what belongs at each tier
   - Document what should be referenced vs. duplicated
   - Create anti-pattern examples (what NOT to do)
   - Create best practice examples
5. Update all templates:
   - Remove duplicated detail from Epic templates (delegate to Story)
   - Remove duplicated detail from Story templates (delegate to Task)
   - Add clear references/links to lower-tier docs
   - Add guidance comments in templates explaining delegation
6. Review existing Epic/Story/Task docs for compliance:
   - Identify violations of delegation principle
   - Create migration guide for updating existing docs
   - Document examples of proper vs. improper delegation

**Acceptance Criteria:**
- [x] Epic templates delegate Story detail to Story docs (no duplication) ✅ Phase 1
- [x] Story templates delegate Task detail to Task docs (no duplication) ✅ Phase 2
- [x] Task templates contain all necessary detail (leaf node) ✅ Phase 3
- [x] Delegation guidelines documented with examples ✅ Phase 4
- [x] All templates updated with proper delegation ✅ Phase 1-2
- [x] Template guidance comments added explaining delegation ✅ Phase 1-2
- [x] Migration guide created for updating existing docs ✅ Phase 6 (comprehensive guide in TIER_DELEGATION_GUIDELINES.md, compliance audit in DELEGATION_COMPLIANCE_AUDIT.md)
- [x] Examples of proper vs. improper delegation documented ✅ Phase 4

**Coordination:**
- This task should be performed after E4:S06:T03-T04 (Story/Task templates created)
- This task optimizes the templates created in E4:S11:T02 and E4:S06
- Results inform E4:S06:T05 (Contextualization guide) - delegation is part of contextualization

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **AC3:** Task document template created with examples
- [ ] **AC4:** Story template updated to clarify Task doc formats
- [ ] **AC5:** Versioning policy updated with Task doc requirements (Kanban sections)
- [ ] **AC6:** Abstract space concept defined in Kanban Policy and Numbering Policy (FR-018)
- [ ] **AC7:** Template structure optimized for proper tier delegation (Epic → Story → Task)

---

## Dependencies

**Blocks:**
- E2:S09 (RW Integration) - requires policy and templates
- E2:S09:T02 (RW Step 1 Task doc presence) - requires policy and templates
- E2:S09:T03 (Validators) - requires policy requirements
- E2:S10:T01 (RW Step 1 Doc-Init Path) - requires E2:S09 completion
- E2:S10:T02 (Doc-Init Validation) - requires T01 completion
- E2:S10:T06 (Version Validator Abstract Space Awareness) - requires T02 completion

**Blocked By:**
- None (can proceed independently)

**Related Work:**
- **E2:S09:** Kanban Granularity & Discrete Task Docs (Workflow Management coordination) (depends on this story)
- **E4:S06:** Comprehensive Canonical E/S/T Template System (creates Epic/Story/Task templates that T06 optimizes)
- **E4:S06:T03:** Create story template files (T06 reviews and optimizes)
- **E4:S06:T04:** Create task template files (T06 reviews and optimizes)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (this story + E2:S09)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on FR-016, enables E2:S10)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (T04)
- **FR-020:** Version Validator Abstract Space Awareness (depends on E2:S10:T02, which depends on E2:S09, which depends on this story)
- **E2:S10:** Doc-Init Build (+0) for New E/S/T (depends on E2:S09)
- **E2:S10:T06:** Update Version Validator for Abstract Space Awareness (depends on E2:S10:T02, which depends on E2:S09)

---

## Completion Summary

[To be filled upon completion]

---

## References

- **E2:S09:** `docs/project-management/kanban/epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`
- **FR-016:** `docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md`
- **FR-017:** `docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md`
- **FR-018:** `docs/project-management/kanban/fr-br/FR-018-abstract-space-zero-numbered-est-docs.md`
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## Next Actions

- [ ] Begin T01: Update Kanban Governance Policy
- [ ] Create Task document template (T02)
- [ ] Update versioning policy (T03)
- [ ] After FR-016 completion: Define abstract space concept (T04 - FR-018)
- [ ] After E4:S06:T03-T04: Review and optimize template structure for tier delegation (T06)
- [ ] Coordinate with E2:S09 for RW integration

