---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# FR/BR Intake Workflow Guide for AI Agents

**Version:** 1.0  
**Last Updated:** 2025-12-02  
**Framework:** Kanban Framework  
**Audience:** AI Assistants / Agents  
**Related:** `FR_BR_INTAKE_GUIDE.md`, `T002-decision-flow-design.md`

---

## Purpose

This guide provides AI agents with a structured, executable workflow for converting Feature Requests (FRs) and Bug Reports (BRs) into Kanban Tasks, Stories, and Epics. It is optimized for programmatic execution and decision-making.

---

## Quick Decision Tree

```
FR/BR Received
    ↓
[1] Create FR/BR Document (use template)
    ↓
[2] Extract: Problem Domain, Scope, Affected Areas
    ↓
[3] Search Stories (by scope + problem domain)
    ↓
    ┌─ Story Match? ── YES → [4a] Create Task
    │                        Assign: RC.E.S.T+1
    │                        Update: Story doc, FR/BR doc, Board
    │
    └─ NO → [4b] Search Epics (by problem domain)
            │
            └─ Epic Match? ── YES → [5a] Create Story + Task
                                    Assign: RC.E.S.1+1
                                    Update: Epic doc, Story doc, FR/BR doc, Board
                                    │
                                    └─ NO → [5b] Create Epic + Story + Task
                                            Assign: RC.E.1.1+1
                                            Update: Epic doc, Story doc, FR/BR doc, Board
```

---

## Execution Workflow

### Phase 1: Document Creation

**Step 1.1: Determine Type**
- **Input:** User request or existing FR/BR
- **Decision:** Is this a Feature Request (FR) or Bug Report (BR)?
- **Action:**
  - If FR → Use `FR_TEMPLATE.md`
  - If BR → Use `BR_TEMPLATE.md`

**Step 1.2: Create Document**
- **Location:** `docs/project-management/kanban/fr-br/FR-XXX-[title].md` or `BR-XXX-[title].md`
- **Required Fields:**
  - Summary (one sentence)
  - Description (detailed)
  - Priority/Severity
  - Scope Analysis (FR) or Affected Component (BR)
  - Acceptance Criteria

**Step 1.3: Extract Key Information**
- **For FR:**
  - Problem Domain: [e.g., User Authentication, Data Processing, UI Components]
  - Affected Areas: [Backend/API, Frontend/UI, Database/Schema, Documentation, Testing]
  - Complexity: [Simple, Medium, Complex, Very Complex]
- **For BR:**
  - Primary Component: [e.g., User Authentication, Payment Processing, UI Component]
  - Affected Areas: [Backend/API, Frontend/UI, Database/Schema, Integration/External Service]
  - Severity: [CRITICAL, HIGH, MEDIUM, LOW]

---

### Phase 2: Story Matching

**Step 2.1: Search Existing Stories**
- **Search Locations:**
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md`
- **Search Criteria:**
  - Story goal/scope encompasses FR/BR requirements
  - Story addresses same problem domain
  - Story status is NOT COMPLETE or DEFERRED
  - Story's Epic aligns with FR/BR's problem domain

**Step 2.2: Evaluate Match**
- **Match Conditions (ALL must be true):**
  1. Scope Alignment: Story's goal/scope encompasses FR/BR requirements
  2. Problem Domain: Story addresses same problem domain or feature area
  3. Status: Story is not COMPLETE or DEFERRED
  4. Epic Alignment: Story's Epic aligns with FR/BR's problem domain

**Step 2.3: Decision**
- **If Match Found:** Proceed to Phase 3a (Create Task)
- **If No Match:** Proceed to Phase 3b (Epic Matching)

---

### Phase 3a: Create Task (Story Match Found)

**Step 3a.1: Determine Task Number**
- **Action:** Read Story document's Task Checklist
- **Find:** Highest existing Task number (e.g., T01, T02, T03)
- **Calculate:** Next Task number = Highest + 1 (e.g., T04)

**Step 3a.2: Create Task Document (MANDATORY)**
- **🚨 CRITICAL:** Task document MUST be created - Release Workflow requires it
- **Choose Format:**
  - **Format 1 (Separate File):** `Task-{task}-{description}.md` in Story directory
  - **Format 2 (Delimited Section):** Section in Story file with Task ID header
- **Location (Format 1):** `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md`
- **Location (Format 2):** Within Story file, section header: `### E{epic}:S{story}:T{task} – Task Name`
- **Template:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Required Fields:**
  - Task ID: `E{epic}:S{story}:T{task}`
  - Scope: Clear description of what task accomplishes
  - Acceptance Criteria: Measurable criteria
  - Input: What is required to start this task
  - Deliverable: What is produced by this task
  - Status: TODO
  - Dependencies: [Epic, Story, Task, or external]
  - Approach: [Step-by-step approach]

**Step 3a.3: Add Task to Story Checklist**
- **Location:** Story document (`docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md`)
- **Format (Separate File):**
  ```markdown
  - [ ] **EXX:SYY:TXXX – [Task Title]** - TODO
    - Task Doc: [`Task-XXX-task-title.md`](Task-XXX-task-title.md)
  ```
- **Format (Delimited Section):**
  ```markdown
  - [ ] **EXX:SYY:TXXX – [Task Title]** - TODO
    - Task Doc: See section below
  ```

**Step 3a.4: Assign Version**
- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **Values:**
  - RC: 0 (development) or 1+ (release candidate)
  - EPIC: Epic number from Story
  - STORY: Story number
  - TASK: Task number (from Step 3a.1)
  - BUILD: 1 (incremented by RW)
- **Note:** Version will be assigned when task is completed via Release Workflow
- **Validation:** Release Workflow Step 2 (B.1) validates Task document exists before versioning

**Step 3a.5: Update Documents**
- **Story Document:**
  - Add Task to Task Checklist
  - Add Task details in Tasks section
  - Add FR/BR reference in Task's References section
- **FR/BR Document:**
  - Set Intake Status: ACCEPTED
  - Mark "Story Match Found" in Decision Flow Results
  - Record Epic, Story, Task, and Version
  - Add Kanban links
- **Version File:**
  - Update `src/[project]/version.py` (or project-specific)
  - Set VERSION_EPIC, VERSION_STORY, VERSION_TASK, VERSION_BUILD

**Step 3a.6: Update Kanban Board**
- **Files:**
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/_index.md`
- **Actions:**
  - Update Story status if needed
  - Update Story's Task count
  - Ensure consistency with Story document

**Step 3a.7: Complete**
- **Status:** Task created under existing Story
- **Next:** Work on Task or proceed to next FR/BR

---

### Phase 3b: Epic Matching (No Story Match)

**Step 3b.1: Search Existing Epics**
- **Search Locations:**
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/epics/Epic-X.md`
- **Search Criteria:**
  - Epic's problem domain matches FR/BR's problem domain
  - Epic status is NOT COMPLETE or DEFERRED
  - Epic's scope is broad enough to encompass FR/BR

**Step 3b.2: Evaluate Match**
- **Match Conditions (ALL must be true):**
  1. Domain Alignment: Epic's problem domain matches FR/BR's problem domain
  2. Status: Epic is not COMPLETE or DEFERRED
  3. Scope: Epic's scope is broad enough to encompass FR/BR

**Step 3b.3: Decision**
- **If Match Found:** Proceed to Phase 4a (Create Story + Task)
- **If No Match:** Proceed to Phase 4b (Create Epic + Story + Task)

---

### Phase 4a: Create Story + Task (Epic Match Found)

**Step 4a.1: Determine Story Number**
- **Action:** Read Epic document's Story Checklist
- **Find:** Highest existing Story number (e.g., S01, S02, S03)
- **Calculate:** Next Story number = Highest + 1 (e.g., S04)

**Step 4a.2: Create Story**
- **Location:** `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-[title].md`
- **Template:** Use `STORY_TEMPLATE.md`
- **Required Fields:**
  - Status: TODO or IN PROGRESS
  - Goal: [Single sentence based on FR/BR]
  - Overview: [One sentence description]
  - Tasks: [Will add Task 1]

**Step 4a.3: Create Task Document (MANDATORY)**
- **🚨 CRITICAL:** Task document MUST be created - Release Workflow requires it
- **Task Number:** 1 (first Task in new Story)
- **Choose Format:**
  - **Format 1 (Separate File):** `Task-001-{description}.md` in Story directory
  - **Format 2 (Delimited Section):** Section in Story file with Task ID header
- **Template:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Required Fields:**
  - Task ID: `E{epic}:S{story}:T01`
  - Scope: Clear description based on FR/BR
  - Acceptance Criteria: Measurable criteria
  - Input: What is required to start this task
  - Deliverable: What is produced by this task
  - Status: TODO
  - Dependencies: [Epic, Story, Task, or external]
  - Approach: [Step-by-step approach]

**Step 4a.4: Add Task to Story Checklist**
- **Location:** Story document
- **Format (Separate File):**
  ```markdown
  - [ ] **EXX:SYY:T01 – [Task Title]** - TODO
    - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)
  ```
- **Format (Delimited Section):**
  ```markdown
  - [ ] **EXX:SYY:T01 – [Task Title]** - TODO
    - Task Doc: See section below
  ```

**Step 4a.5: Assign Version**
- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **Values:**
  - EPIC: Epic number
  - STORY: Story number (from Step 4a.1)
  - TASK: 1
  - BUILD: 1

**Step 4a.6: Update Documents**
- **Epic Document:**
  - Add Story to Epic's Story Checklist
  - Add Story details in Epic's Stories section
  - Update Epic status if needed
- **Story Document:**
  - Add Task to Task Checklist
  - Add Task details in Tasks section
  - Add FR/BR reference in Task's References section
- **FR/BR Document:**
  - Set Intake Status: ACCEPTED
  - Mark "New Story Created" in Decision Flow Results
  - Record Epic, Story, Task, and Version
  - Add Kanban links
- **Version File:**
  - Update `src/[project]/version.py`
  - Set VERSION_EPIC, VERSION_STORY, VERSION_TASK, VERSION_BUILD

**Step 4a.7: Update Kanban Board**
- **Files:**
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/_index.md`
- **Actions:**
  - Add new Story to board
  - Update Epic's Story count
  - Ensure consistency with Epic/Story documents

**Step 4a.7: Complete**
- **Status:** Story and Task created under existing Epic
- **Next:** Work on Task or proceed to next FR/BR

---

### Phase 4b: Create Epic + Story + Task (No Epic Match)

**Step 4b.1: Determine Epic Number**
- **Action:** Read `docs/project-management/kanban/_index.md` or `kboard.md`
- **Find:** Highest existing Epic number (e.g., Epic 1, Epic 2, Epic 3, Epic 4, Epic 5, Epic 6, Epic 7)
- **Calculate:** Next Epic number = Highest + 1 (e.g., Epic 8)
- **Note:** Canonical epics are 1-7 (see `CANONICAL_EPICS.md`), so new project-specific epics start at Epic 8

**Step 4b.2: Create Epic**
- **Location:** `docs/project-management/kanban/epics/Epic-X.md`
- **Template:** Use `EPIC_TEMPLATE.md`
- **CRITICAL:** Epic must be **broad and abstract** in concept
- **Required Fields:**
  - Status: TODO or IN PROGRESS
  - Overview: [One paragraph describing Epic's purpose, scope, and motivation]
  - Problem Domain: [Broad domain that encompasses FR/BR]
  - Goals: [2-3 high-level goals]

**Step 4b.3: Create Story**
- **Location:** `docs/project-management/kanban/epics/Epic-X/stories/Story-001-[title].md`
- **Template:** Use `STORY_TEMPLATE.md`
- **Story Number:** 1 (first Story in new Epic)
- **Required Fields:**
  - Status: TODO or IN PROGRESS
  - Goal: [Single sentence based on FR/BR]
  - Overview: [One sentence description]

**Step 4b.4: Create Task Document (MANDATORY)**
- **🚨 CRITICAL:** Task document MUST be created - Release Workflow requires it
- **Task Number:** 1 (first Task in new Story)
- **Choose Format:**
  - **Format 1 (Separate File):** `Task-001-{description}.md` in Story directory
  - **Format 2 (Delimited Section):** Section in Story file with Task ID header
- **Template:** Use `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Required Fields:**
  - Task ID: `E{epic}:S01:T01`
  - Scope: Clear description based on FR/BR
  - Acceptance Criteria: Measurable criteria
  - Input: What is required to start this task
  - Deliverable: What is produced by this task
  - Status: TODO
  - Dependencies: [Epic, Story, Task, or external]
  - Approach: [Step-by-step approach]

**Step 4b.5: Add Task to Story Checklist**
- **Location:** Story document
- **Format (Separate File):**
  ```markdown
  - [ ] **EXX:S01:T01 – [Task Title]** - TODO
    - Task Doc: [`Task-001-task-title.md`](Task-001-task-title.md)
  ```
- **Format (Delimited Section):**
  ```markdown
  - [ ] **EXX:S01:T01 – [Task Title]** - TODO
    - Task Doc: See section below
  ```

**Step 4b.6: Assign Version**
- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **Values:**
  - EPIC: Epic number (from Step 4b.1)
  - STORY: 1
  - TASK: 1
  - BUILD: 1

**Step 4b.7: Update Documents**
- **Epic Document:**
  - Add Story 1 to Epic's Story Checklist
  - Add Story details in Epic's Stories section
- **Story Document:**
  - Add Task 1 to Task Checklist
  - Add Task details in Tasks section
  - Add FR/BR reference in Task's References section
- **FR/BR Document:**
  - Set Intake Status: ACCEPTED
  - Mark "New Epic Created" in Decision Flow Results
  - Record Epic, Story, Task, and Version
  - Add Kanban links
- **Version File:**
  - Update `src/[project]/version.py`
  - Set VERSION_EPIC, VERSION_STORY, VERSION_TASK, VERSION_BUILD

**Step 4b.8: Update Kanban Board**
- **Files:**
  - `docs/project-management/kanban/kboard.md`
  - `docs/project-management/kanban/_index.md`
- **Actions:**
  - Add new Epic to board
  - Add new Story to board
  - Update Epic/Story counts
  - Ensure consistency with Epic/Story documents

**Step 4b.9: Complete**
- **Status:** Epic, Story, and Task created
- **Next:** Work on Task or proceed to next FR/BR

---

## Validation Checklist

After completing intake, verify:

- [ ] FR/BR document created with all required fields
- [ ] Task/Story/Epic created using correct templates
- [ ] Version number assigned (format: `RC.EPIC.STORY.TASK+BUILD`)
- [ ] Version file updated (`src/[project]/version.py`)
- [ ] Kanban board updated (`kboard.md`, `_index.md`)
- [ ] All documents linked (FR/BR → Task → Story → Epic)
- [ ] Status fields synchronized across documents
- [ ] Intake Decision section completed in FR/BR document

---

## Error Handling

### No Story Match Found
- **Action:** Proceed to Epic matching (Phase 3b)
- **Check:** Ensure search criteria are correct (scope, domain, status)

### No Epic Match Found
- **Action:** Create new Epic (Phase 4b)
- **Check:** Ensure Epic is broad and abstract (not too specific)

### Version Number Conflict
- **Action:** Verify EPIC, STORY, TASK numbers match assigned Epic/Story/Task
- **Check:** BUILD should start at 1 for new Tasks

### Document Inconsistency
- **Action:** Verify all documents are updated (Epic, Story, Board, FR/BR)
- **Check:** Status fields must match across all documents

---

## Quick Reference

### Version Format
- **Schema:** `RC.EPIC.STORY.TASK+BUILD`
- **Example:** `0.3.2.4+1` = Development, Epic 3, Story 2, Task 4, Build 1

### Template Locations
- **FR Template:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **BR Template:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
- **Epic Template:** `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

### Key Documents
- **Intake Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- **Decision Flow:** `T002-decision-flow-design.md`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **Kanban Index:** `docs/project-management/kanban/_index.md`

---

## Next Steps

After intake completion:
1. **Work on Task:** Follow normal Task workflow
2. **Complete Task:** Use Release Workflow (RW) when Task is done
3. **Verify Fixes:** For BRs, ensure fixes are verified before marking as "Fixed"
4. **Update Status:** Keep Kanban board and documents synchronized

---

_This guide is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

