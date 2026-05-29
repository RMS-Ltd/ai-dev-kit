---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Kanban Governance Policy

**Owner:** Product Ops
**Last Updated:** 2025-11-26
**Applies To:** All work streams
**Portable Package:** This document is part of a portable numbering & versioning policy package

**Note:** This document contains references to Confidentia-specific paths and structures. When implementing in other projects, customize file paths, project names, and work item terminology. See `IMPLEMENTATION_GUIDE.md` for detailed customization instructions.

---

## Purpose

A single, authoritative policy describing how to run Kanban with versioning integration.

**Key Components:**
- Defines work-item types (Epic → Story → Task) and how they map to Git artifacts
- Establishes documentation, numbering, and versioning requirements
- Links rituals (board usage, stand-ups, release workflow) to documentation
- Integrates versioning schema with work item structure

**Foundation:** This policy is underpinned by project-specific rules (e.g., `.cursorrules` in Confidentia), which are fundamental to the entire system. When implementing in other projects, adapt this to your project's rule system.

---

## The Harmonious Cycle

Work flows in perfect harmony:

```
Task (Kanban)
  → defines what to do
    → Version (RC.EPIC.STORY.TASK+BUILD)
      → tracks the work
        → Release Workflow
          → implements both policies
            → Kanban Update
              → records the version (forensic marker)
                → Repeat
```

**Principle:** All substantive work MUST be task-driven.
If work doesn't map to a task, the Kanban needs updating.

---

## Board Structure

Five columns, left to right:

1. **Backlog** – Groomed but unscheduled
2. **Ready** – Fully specified, awaiting prioritisation
3. **In Progress** – Active work with branch
4. **Verify** – Done, awaiting validation
5. **Done** – Released, tagged, validated

**Rules:**
- Move strictly left → right (no skipping)
- WIP limits per swimlane
- Every card links to KB doc and branch/tag

---

## Work Items

### Epics

Governing artifact for a feature set or maintenance theme.

- **Location:** `docs/epics/Epic-XX.md` or `docs/project-management/epics/overview/Epic XX/Epic-XX.md` *(customize path)*
- **Branch:** `epic/<number>-<slug>`
- **Version:** `RC.EPIC.STORY.TASK+BUILD` (where EPIC = epic number)
- **Template:** `EPIC_TEMPLATE.md` *(in this package)* or `docs/templates/EPIC_TEMPLATE.md` *(customize path)*

### Stories

Decompose epic scope into releasable slices.

- **Location:** `docs/stories/Story-N-Title.md` or `docs/project-management/stories/overview/Epic XX/Story-N-Title.md` *(customize path)*
- **Numbering:** `E<epic>S<story>` (e.g., `E20S7`)
- **Template:** `STORY_TEMPLATE.md` *(in this package)* or `docs/templates/STORY_TEMPLATE.md` *(customize path)*

### Tasks

Atomic units inside a story.

**CRITICAL: 3-Tier Structure Requirement**

All work MUST follow the explicit **3-tier structure**: Epic → Story → Task. This structure is **mandatory** and **non-negotiable**.

- **Epic** contains Stories (high-level scope)
- **Story** contains Tasks (releasable slices)
- **Task** is the atomic work unit (implementation detail)

**No implicit or inline tasks are permitted.** Every task MUST be explicitly documented at the Task tier.

**Task Document Requirements**

Every Task MUST have a discrete Task document (or clearly delimited section within the Story document using the Task ID as a header). Tasks cannot be implicit, bundled, or introduced inline.

**Task Document Formats:**

1. **Separate File Format (Recommended):**
   - Location: `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md` or `kanban/epics/Epic-X/Story-XXX/TYYY-description.md`
   - Example: `kanban/epics/Epic-4/Story-011/Task-001-update-kanban-policy.md`

2. **Delimited Section Format (Alternative):**
   - Location: Within the Story document, using Task ID as a clear header
   - Format: `### E{epic}:S{story}:T{task} – Task Name` followed by task content
   - Example: `### E4:S11:T01 – Update Kanban Governance Policy`

**Required Task Document Fields:**

Every Task document MUST include the following fields:

- **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)
- **Scope:** Clear description of what the task accomplishes
- **Acceptance Criteria:** Measurable criteria for task completion
- **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
- **Version Anchor:** Version marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
- **Completion Date:** Date when task was completed (if applicable)
- **Related BR/FR Links:** Links to related Bug Reports or Feature Requests
- **Input:** What is required to start this task
- **Deliverable:** What is produced by this task
- **Dependencies:** Other tasks or work items this task depends on
- **Blocker:** Tasks or work items that block this task
- **Parallel Development Candidacy:** Whether this task can be worked on in parallel

**Prohibited Patterns:**

The following patterns are **explicitly prohibited**:

- ❌ **Implicit Tasks:** Tasks mentioned in Story text but not explicitly documented
- ❌ **Inline Tasks:** Tasks embedded in Story descriptions without Task ID
- ❌ **Bundled Tasks:** Multiple tasks described together without individual Task documents
- ❌ **Undocumented Tasks:** Tasks referenced in checklists without corresponding Task documents

**Task Numbering and Format:**

- **Numbering:** `Exx:Sxx:Txx` (Epic, Story, Task with zero padding)
- **Format:** `E{epic}:S{story}:T{task}` where task is 2-digit (01-99)
- **Example:** `E20:S07:T10` = Epic 20, Story 7, Task 10
- **Example:** `E1:S01:T01` = Epic 1, Story 1, Task 1
- **Tracked:** Git commits reference task ID

**Validation Requirements:**

The following validations MUST be enforced:

1. **Task Document Presence:** Every task referenced in a Story checklist MUST have a corresponding Task document
2. **Task ID Alignment:** Task ID in document MUST match Task ID in Story checklist
3. **Epic/Story/Task Alignment:** Task document MUST be located under the correct Epic and Story
4. **Required Fields:** Task document MUST contain all required fields listed above
5. **Version Alignment:** When task is complete, version TASK component MUST match Task number

---

## Versioning

### Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number
- **STORY:** Story number within epic
- **TASK:** Task number within story
- **BUILD:** Build number (increments per release within task)

**Example:** `0.20.11.15+1` = Development, Epic 20, Story 11, Task 15, Build 1

**Related Documentation:**
- **[Versioning Policy (Schema)](versioning-policy.md)** - Complete schema definition
- **[Versioning Strategy](versioning-strategy.md)** - Forensic traceability and canonical ordering principles
- **[Implementation Guide](IMPLEMENTATION_GUIDE.md)** - Step-by-step guide for implementing in other projects

### Task-Level Requirements

**CRITICAL:** All substantive work MUST be task-driven.

**Version TASK number must match active task.**

**Requirements:**
1. Version TASK reflects the active task
   - Working on `E20:S11:T16` → version `0.20.11.16+B`
   - TASK component aligns with Kanban task

2. Task transitions use `--task` parameter
   - New task: `--task N` in release workflow
   - Resets BUILD to 1, sets TASK to N

3. BUILD resets to 1 with new task
   - BUILD increments within same task
   - BUILD does NOT carry over between tasks

4. Validation enforces alignment
   - Release workflow validates task exists
   - Validators check task/version alignment
   - Pre-commit hooks enforce alignment

**Example:** See implementation guide for example story documents *(customize path structure)*

---

## Release Workflow

The process that implements both policies (Kanban Governance and Versioning Strategy).

**Reference:** See `IMPLEMENTATION_GUIDE.md` for release workflow integration details

**Documents:**
1. Version File (`src/confidentia/version.py`)
2. Detailed Changelog (`CHANGELOG_vRC.EPIC.STORY.TASK+BUILD.md`)
3. Main Changelog (`CHANGELOG.md`)
4. README (`README.md`)
5. Epic Doc (auto-updated)
6. Story Docs (auto-updated)
7. Kanban Board (auto-updated)
8. Branch Context Validator
9. Changelog Format Validator
10. Kanban Update Module

**Process:**
1. Version Bump
   - `--task N` sets task (resets BUILD to 1)
   - `--story N` sets story (resets TASK and BUILD to 1)
   - Otherwise increments BUILD on current task
   - Validates task exists and version TASK matches

2. Changelog Creation
   - Detailed changelog with full timestamp
   - Main CHANGELOG.md with summary

3. Kanban Auto-Update
   - Updates epic/story docs with version and summary
   - Updates completed tasks with version numbers
   - Updates Kanban board entry
   - Validates forensic markers were added

4. Validation
   - Branch context (epic ↔ version ↔ changelog, task/version alignment)
   - Changelog format (timestamp)
   - Task exists in story doc
   - Version TASK matches provided task

5. Git Operations
   - Stage all files
   - Commit with version in message
   - Create annotated tag
   - Push to remote

---

## Documentation

**Epics** reference:
- Branch name, version schema, story checklist, dependencies, risks

**Stories** include:
- Task index aligning with E#S#T# numbering
- Goals and acceptance criteria
- Completion summary before release

**Tasks** capture:
- Cross-team impacts (Parallel Development Candidacy)
- Staging plan if spanning multiple PRs

**Templates:**
- New epic/story from templates
- Deviations need Product Ops approval

---

## Rules

1. **Traceability:** Every board card links to KB doc, branch/tag, changelog entry
2. **Single Source of Truth:** KB docs are canonical
3. **Gate Conditions:**
   - Ready → In Progress: Story doc complete, blockers resolved, branch created
   - In Progress → Verify: Tasks checked, summary drafted, dry-run done
   - Verify → Done: Release workflow executed, tag pushed, KB doc accepted
4. **Numbering Discipline:** No duplicate IDs; IDs never reused
5. **WIP & Ownership:** Each story has named DRI; pause >48h moves back to Ready

---

## Templates & References

**Templates (in this package):**
- Epic: `EPIC_TEMPLATE.md` - Template for epic documents with versioning integration
- Story: `STORY_TEMPLATE.md` - Template for story documents with versioning integration

**Customization:** Copy these templates to your project's template directory (e.g., `docs/templates/`) and customize paths and terminology.

**Release Workflow:**
- Script: `scripts/automation/release_workflow.py`
- Module: `scripts/automation/update_kanban_docs.py`
- Makefile: `make release`, `make release-check`

**Validation:**
- Branch Context: `scripts/validation/validate_branch_context.py` *(create based on implementation guide)*
- Changelog Format: `scripts/validation/validate_changelog_format.py` *(create based on implementation guide)*

**Policy Documents:**
**Core Policy Documents (in this package):**
- **[Versioning Strategy](versioning-strategy.md)** - Complete versioning strategy with forensic traceability system
- **[Versioning Policy (Schema)](versioning-policy.md)** - Versioning schema definition (RC.EPIC.STORY.TASK+BUILD)
- **[Implementation Guide](IMPLEMENTATION_GUIDE.md)** - Step-by-step guide for implementing in other projects

**External References (Confidentia-specific):**
- Release Workflow - Automated implementation *(see implementation guide)*
- Kanban Board - Board structure and usage *(project-specific)*
- System Architecture - Architecture documentation *(project-specific)*
- Template Philosophy - Template design principles *(project-specific)*

**Foundation:**
- **Project Rules:** `.cursorrules` or equivalent *(project-specific)* - Fundamental system rules that underpin all policies

---

## Change History

- **2025-11-26:** Refined to poetic elegance, task-level versioning requirements (Epic 20, Story 11, Task 011)
- **2025-11-26:** Updated to reference RC.EPIC.STORY.TASK+BUILD schema, defined all Release Workflow documents (Epic 20, Story 11, Task 015)
- **2025-11-20:** Initial policy authored (Epic 20 Story 6/7 follow-up)
