---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-09T16:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Systematic Canonical Epics/Stories/Tasks Template System

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-09  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** PENDING

**Implementing Task:** [E4:S06:T01](../epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)

---

## Summary

Create a systematic, comprehensive template system for canonical epics, stories, and tasks that can be contextualized into concrete epics/stories/tasks for projects implementing ai-dev-kit as a template. This addresses the ad-hoc approach to canonical epic additions and enables proper framework installation/initialization.

---

## Description

**What functionality is desired?**
A complete, systematic template system that defines abstract canonical epics, stories, and tasks. These templates should:
- Be abstract and generic (not project-specific)
- Include placeholders for contextualization (e.g., `\{PROJECT_NAME\}`, `\{DOMAIN\}`)
- Cover all canonical epics (1-7) with their typical stories and tasks
- Provide a clear structure for projects to adopt and customize
- Enable automated or guided installation/initialization

**What problem does this solve?**
1. **Ad-hoc Canonical Epic Management:** Current approach to adding canonical epics has been ad-hoc, without a systematic process
2. **Template Contamination:** Projects copying ai-dev-kit template receive project-specific content mixed with framework content (see BR-004)
3. **Lack of Contextualization:** No clear mechanism to convert abstract canonical templates into project-specific concrete epics/stories/tasks
4. **Incomplete Template Coverage:** While canonical epics are documented, stories and tasks are not systematically defined
5. **Installation Complexity:** New projects must manually extract and customize framework content

**What is the use case?**
- **Primary Use Case:** A new project uses ai-dev-kit as a template and needs to initialize its Kanban structure with canonical epics/stories/tasks that are contextualized to the project's domain
- **Secondary Use Case:** An existing project wants to adopt ai-dev-kit's Kanban framework and needs to understand what canonical structure to adopt
- **Tertiary Use Case:** Framework maintainers need a systematic process for adding new canonical epics/stories/tasks

**Who would benefit from this feature?**
- New projects adopting ai-dev-kit as a template
- Projects migrating to ai-dev-kit Kanban framework
- Framework maintainers adding canonical patterns
- Developers setting up Kanban structure for the first time

---

## Requirements

### Functional Requirements

- [ ] **FR-005-R1:** Complete template set for all canonical epics (1-7)
  - Each epic template includes: purpose, scope, key characteristics, typical stories
  - Templates use placeholders for contextualization (e.g., `\{PROJECT_NAME\} Core`)
  - Templates stored in `packages/frameworks/kanban/templates/epics/`


- [ ] **FR-005-R2:** Complete template set for canonical stories
  - Stories defined for each canonical epic
  - Story templates include: purpose, typical tasks, key deliverables, integration points
  - Templates use placeholders for contextualization
  - Templates stored in `packages/frameworks/kanban/templates/stories/`


- [ ] **FR-005-R3:** Complete template set for canonical tasks
  - Tasks defined for each canonical story
  - Task templates include: input, deliverable, approach, acceptance criteria
  - Templates use placeholders for contextualization
  - Templates stored in `packages/frameworks/kanban/templates/tasks/`


- [ ] **FR-005-R4:** Contextualization mechanism
  - Clear process for converting abstract templates to concrete project epics/stories/tasks
  - Placeholder replacement guide (what to replace, how to customize)
  - Examples of contextualized templates


- [ ] **FR-005-R5:** Systematic canonical addition process
  - Defined process for adding new canonical epics/stories/tasks
  - Criteria for what qualifies as "canonical" (reusable across projects)
  - Review and approval process for canonical additions


- [ ] **FR-005-R6:** Template documentation and usage guide
  - Comprehensive guide on using canonical templates
  - Examples of template → contextualized conversion
  - Best practices for customization


### Non-Functional Requirements

- [ ] **Performance considerations:** Template system should enable fast project setup (minutes, not hours)
- [ ] **Usability considerations:** Templates should be clear, well-documented, and easy to customize
- [ ] **Maintainability considerations:** Template structure should be easy to maintain and update
- [ ] **Compatibility considerations:** Templates should work with existing Kanban framework structure

---

## Scope Analysis

**Problem Domain:** Kanban Framework Installation and Initialization  
**Affected Areas:**
- [ ] Backend/API
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation
- [ ] Testing
- [x] Other: Framework template system, installation/initialization process

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

**Rationale:** This requires:
- Creating comprehensive templates for 7 epics × multiple stories × multiple tasks
- Defining contextualization process
- Documenting systematic addition process
- Creating usage guides and examples
- Integration with installation/initialization (may trigger follow-up work)

---

## Use Cases

**Primary Use Case: New Project Initialization**

A developer starts a new project using ai-dev-kit as a template:
1. Copies ai-dev-kit template repository
2. Runs Kanban initialization process (or follows manual guide)
3. System provides canonical epic/story/task templates
4. Developer contextualizes templates (replaces `\{PROJECT_NAME\}` with actual project name, customizes domain-specific content)
5. Project has clean, properly structured Kanban board with canonical epics/stories/tasks contextualized to the project

**Additional Use Cases:**

- **Use Case 2: Existing Project Adoption**
  - Existing project wants to adopt ai-dev-kit Kanban framework
  - Uses canonical templates to understand what structure to adopt
  - Contextualizes templates to match existing project structure


- **Use Case 3: Framework Maintainer Adding Canonical Pattern**
  - Maintainer identifies a pattern that appears in multiple projects
  - Uses systematic process to add new canonical epic/story/task
  - Follows defined criteria and review process


---

## Acceptance Criteria

- [ ] **Criterion 1:** All canonical epics (1-7) have complete template files in `packages/frameworks/kanban/templates/epics/`
- [ ] **Criterion 2:** Each canonical epic template includes at least 2-3 typical stories with complete story templates
- [ ] **Criterion 3:** Each canonical story template includes at least 3-5 typical tasks with complete task templates
- [ ] **Criterion 4:** All templates use placeholders (e.g., `\{PROJECT_NAME\}`, `\{DOMAIN\}`) for contextualization
- [ ] **Criterion 5:** Contextualization guide created with clear process and examples
- [ ] **Criterion 6:** Systematic canonical addition process documented with criteria and review process
- [ ] **Criterion 7:** Template usage guide created with examples of template → contextualized conversion
- [ ] **Criterion 8:** All templates follow consistent structure and format
- [ ] **Criterion 9:** Templates integrate with existing Kanban framework documentation
- [ ] **Criterion 10:** Examples provided showing contextualized templates for at least 2 different project types

---

## Dependencies

**Blocks:**
- Proper Kanban framework installation/initialization (addresses BR-004)
- Systematic approach to canonical pattern management
- Framework adoption experience

**Blocked By:**
- None (can proceed independently)

**Related Work:**
- **BR-004:** Kanban Installation Includes Project-Specific Epics from Template (this FR addresses broader scope identified while fixing BR-004)
- **E4:S05:** Canonical Epics for Kanban Framework (created canonical epics documentation, but not systematic templates)
- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Existing canonical epics documentation
- `packages/frameworks/kanban/templates/CANONICAL_STORIES.md` - Partial canonical stories documentation
- `packages/frameworks/kanban/templates/CANONICAL_STORIES_FR_BR.md` - FR/BR canonical stories

---

## Proposed Approach

### Phase 1: Template Structure Definition
1. **Define Template Schema:**
   - Standard structure for epic templates
   - Standard structure for story templates
   - Standard structure for task templates
   - Placeholder system for contextualization

2. **Inventory Current State:**
   - Review existing canonical epics documentation
   - Identify gaps in story/task templates
   - Document what exists vs. what's needed

### Phase 2: Template Creation
3. **Create Epic Templates:**
   - Template for each canonical epic (1-7)
   - Include typical stories reference
   - Use placeholders for project-specific content

4. **Create Story Templates:**
   - Template for each typical story per epic
   - Include typical tasks reference
   - Use placeholders for contextualization

5. **Create Task Templates:**
   - Template for each typical task per story
   - Include input, deliverable, approach
   - Use placeholders for contextualization

### Phase 3: Contextualization System
6. **Define Contextualization Process:**
   - Placeholder replacement guide
   - Customization guidelines
   - Examples of contextualized templates

7. **Create Usage Documentation:**
   - Template usage guide
   - Contextualization examples
   - Best practices

### Phase 4: Systematic Process
8. **Define Canonical Addition Process:**
   - Criteria for canonical patterns
   - Review and approval process
   - Template update process

9. **Document Process:**
   - Systematic addition guide
   - Integration with existing framework

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-09  
**Intake By:** User

**Decision Flow Results:**
- [ ] Story Match Found: [Epic X, Story Y] → Task [T]
- [x] New Story Created: Epic 4, Story 6 → Task 0 (Story creation and documentation)
- [ ] New Epic Created: [Epic X, Story 1, Task 1]

**Assigned To:**
- Epic: Epic 4 - Kanban Framework
- Story: Story 6 - Comprehensive Canonical Epics/Stories/Tasks Template System
- Task: Task 0 - Story creation and comprehensive structure documentation
- Version: `v0.4.6.0+1`

**Kanban Links:**
- Epic: [`Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`Story-006-comprehensive-canonical-est-template-system.md`](../epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md)
- Task: Task 0 in Story 6 document

---

## Notes

- **Triggered by:** Broader scope identified while addressing BR-004 (epic contamination bug)
- **Relationship to BR-004:** BR-004 fixes the immediate bug (epic contamination). This FR addresses the systematic template system needed for proper framework installation
- **Ad-hoc Problem:** Current canonical epic additions have been ad-hoc (e.g., Epic 7 added without systematic process). This FR establishes a systematic approach
- **Template Coverage:** Currently have:
  - Canonical epics documented (CANONICAL_EPICS.md)
  - Some canonical stories documented (CANONICAL_STORIES.md, CANONICAL_STORIES_FR_BR.md)
  - Missing: Complete story templates, task templates, contextualization system

- **Future Work:** This FR may trigger follow-up work on:
  - Automated installer/initializer (separate FR/Task)
  - Template separation infrastructure (separate FR/Task)
  - Integration with RW installer (separate FR/Task)


---

## References

- `packages/frameworks/kanban/templates/CANONICAL_EPICS.md` - Existing canonical epics documentation
- `packages/frameworks/kanban/templates/CANONICAL_STORIES.md` - Partial canonical stories
- `packages/frameworks/kanban/templates/CANONICAL_STORIES_FR_BR.md` - FR/BR canonical stories
- `docs/project-management/kanban/fr-br/BR-004-kanban-installation-includes-project-specific-epics.md` - Related bug report
- `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md` - Epic template structure
- `packages/frameworks/kanban/templates/STORY_TEMPLATE.md` - Story template structure
- `docs/project-management/kanban/epics/Epic-4/Story-005-canonical-epics-for-kanban-framework.md` - Previous canonical epic work

---

_This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

