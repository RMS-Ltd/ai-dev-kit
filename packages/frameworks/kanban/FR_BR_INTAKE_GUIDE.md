---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# FR/BR Intake Process Guide

**Version:** 1.1  
**Last Updated:** 2026-03-31  
**Framework:** Kanban Framework  
**Related:** `kanban-governance-policy.md`, `T002-decision-flow-design.md`, `FR_TEMPLATE.md`, `BR_TEMPLATE.md`, `UXR_TEMPLATE.md` (if used)

---

## Overview

This guide provides a step-by-step process for converting **Feature Requests (FRs)**, **Bug Reports (BRs)**, and **User Experience Research (UXR)** items into Kanban Tasks, Stories, and Epics. It operationalizes the decision flow design and demonstrates how to use the FR/BR/UXR templates.

**Key principles**

- All substantive work is **task-driven**.
- Every **FR / BR / UXR** MUST have **at least one** **Kanban task** with **bidirectional** links (report ↔ task).
- **Atomic intake (mandatory):** The **task document** and **wiring** are created **in the same session** as the new FR/BR/UXR file. Do **not** commit or hand off a report with **“task TODO”**.
- Place the **primary** task under the **story that matches delivery semantics** (e.g. framework bugs → Epic 6 story; docs site → Epic 5). **FR/BR/UXR number ≠ task number** is allowed; symmetric ids (e.g. FR-047 → …:T47) are **optional**, not required—see **KG-R6** in `kanban-governance-policy.md`.
- If no Story exists, create one under the appropriate Epic; if no Epic exists, create a broad epic for the new story.
- Version numbers follow `RC.EPIC.STORY.TASK+BUILD` schema (typically via **RW** / **RW -k** after intake artifacts exist).

---

## Table of Contents

1. [Intake Process Overview](#intake-process-overview)
2. [Step-by-Step Intake Process](#step-by-step-intake-process)
3. [Worked Examples](#worked-examples)
4. [Integration Points](#integration-points)
5. [Troubleshooting](#troubleshooting)
6. [Quick Reference](#quick-reference)

---

## Intake Process Overview

### High-Level Flow (**atomic intake**)

```
FR / BR / UXR arrives
    ↓
1. Capture report (template) — single new markdown file
    ↓
2. Analyze scope, impact, priority (Feature / Bug / Research)
    ↓
3. Find or Create Epic → Story that fits **delivery** (not only “repo” story)
    ↓
4. Create **Task document** under that story (same session)
    ↓
5. **Wire now:** report `Implementing Task:` (or equivalent) ↔ task “Associated …” section
    ↓
6. Add story checklist row (or explicit follow-up with owner—exceptional)
    ↓
7. Update prioritization / kanban boards as needed
    ↓
8. Run **RW -k** / **RW** on appropriate epic branch to version when ready
```

**Anti-pattern:** Steps 1–3 without Step 4–5 in the **same** change set → orphan reports and board drift (forbidden by **KG-R2**).

---

## Step-by-Step Intake Process

### Step 1: Receive and Capture FR / BR / UXR

**Action:** Create a new report document using the appropriate template (same session will add the task—do not stop here).

**For Feature Requests:**
- Use `FR_TEMPLATE.md`
- Location: `docs/project-management/kanban/fr-br/FR-XXX-[title].md` (or project-specific location)

**For Bug Reports:**
- Use `BR_TEMPLATE.md`
- Location: `docs/project-management/kanban/fr-br/BR-XXX-[title].md` (or project-specific location)

**For UXR (where used):**
- Location: `docs/project-management/kanban/fr-br/UXR-XXX-[title].md` (or project-specific location)

**Required Information:**
- Summary (one sentence)
- Description (detailed)
- Priority/Severity
- Scope Analysis (for FR) or Affected Component (for BR)
- Acceptance Criteria

**Before leaving this intake:** populate **`Implementing Task:`** (or project equivalent) with a **real** task path—may be stub text until Step 4–5 completes in the same session.

---

### Step 2: Classify and Extract Key Information

**For Feature Requests:**
- Extract: Desired functionality, use case, scope, problem domain
- Identify: Affected areas (Backend, Frontend, Database, etc.)
- Estimate: Complexity (Simple, Medium, Complex, Very Complex)

**For Bug Reports:**
- Extract: Affected component, symptoms, severity, steps to reproduce
- Identify: Root cause (if known)
- Assess: User impact and business impact

---

### Step 3: Search for Existing Story

**Search Criteria:**
1. **Scope Alignment:** Story's goal/scope encompasses FR/BR requirements
2. **Problem Domain:** Story addresses the same problem domain or feature area
3. **Status Check:** Story is not COMPLETE or DEFERRED
4. **Epic Alignment:** Story's Epic aligns with FR/BR's problem domain

**Search Locations:**
- Kanban Board (`docs/project-management/kanban/kboard.md`)
- Epic documents (`docs/project-management/kanban/epics/Epic-X.md`)
- Story documents (`docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md`)

**Decision:** If Story matches **ALL** criteria → Proceed to Step 4a. Otherwise → Proceed to Step 4b.

---

### Step 4a: Story Match Found - Create Task

**Action:** Create a new Task under the existing Story.

**Process:**
1. Open the Story document
2. Add new Task to the Task Checklist
3. Add Task details in the Tasks section
4. Assign version number: `RC.EPIC.STORY.TASK+BUILD`
   - RC: Current release candidate (usually 0 for development)
   - EPIC: Epic number from Story
   - STORY: Story number
   - TASK: Next available Task number
   - BUILD: 1 (incremented by RW)

**Example:** If Story is Epic 3, Story 2, and it has Tasks 1-3, create Task 4 → Version: `0.3.2.4+1`

**Update FR/BR Document:**
- Set Intake Status: ACCEPTED
- Mark "Story Match Found" in Decision Flow Results
- Record Epic, Story, Task, and Version
- Add Kanban links

**Update Kanban Board:**
- Ensure Story status reflects new Task
- Update Story's Task count if needed

---

### Step 4b: No Story Match - Search for Epic

**Search Criteria:**
1. **Domain Alignment:** Epic's problem domain matches FR/BR's problem domain
2. **Status Check:** Epic is not COMPLETE or DEFERRED
3. **Scope Check:** Epic's scope is broad enough to encompass FR/BR

**Search Locations:**
- Kanban Board (`docs/project-management/kanban/kboard.md`)
- Epic documents (`docs/project-management/kanban/epics/Epic-X.md`)

**Decision:** If Epic matches **ALL** criteria → Proceed to Step 5a. Otherwise → Proceed to Step 5b.

---

### Step 5a: Epic Match Found - Create Story and Task

**Action:** Create a new Story under the existing Epic, then create Task 1 under the new Story.

**Process:**
1. **Create Story:**
   - Use `STORY_TEMPLATE.md`
   - Location: `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-[title].md`
   - Set Story number to next available number in Epic
   - Set Status: TODO or IN PROGRESS
   - Define Story goal/scope based on FR/BR

2. **Create Task:**
   - Add Task 1 to Story's Task Checklist
   - Add Task details in Story's Tasks section
   - Assign version number: `RC.EPIC.STORY.TASK+BUILD`
     - EPIC: Epic number
     - STORY: New Story number
     - TASK: 1
     - BUILD: 1

**Example:** If Epic 2 has Stories 1-2, create Story 3 → Task 1 → Version: `0.2.3.1+1`

1. **Update Epic Document:**
   - Add Story to Epic's Story Checklist
   - Add Story details in Epic's Stories section
   - Update Epic status if needed

2. **Update FR/BR Document:**
   - Set Intake Status: ACCEPTED
   - Mark "New Story Created" in Decision Flow Results
   - Record Epic, Story, Task, and Version
   - Add Kanban links

3. **Update Kanban Board:**
   - Add new Story to board
   - Update Epic's Story count

---

### Step 5b: No Epic Match - Create Epic, Story, and Task

**Action:** Create a new Epic, then Story 1, then Task 1.

**Process:**
1. **Create Epic:**
   - Use `EPIC_TEMPLATE.md`
   - Location: `docs/project-management/kanban/epics/Epic-X.md`
   - Set Epic number to next available number
   - **CRITICAL:** Epic must be **broad and abstract** in concept
   - Define Epic's problem domain and scope
   - Set Status: TODO or IN PROGRESS

2. **Create Story:**
   - Use `STORY_TEMPLATE.md`
   - Location: `docs/project-management/kanban/epics/Epic-X/stories/Story-001-[title].md`
   - Set Story number to 1
   - Set Status: TODO or IN PROGRESS
   - Define Story goal/scope based on FR/BR

3. **Create Task:**
   - Add Task 1 to Story's Task Checklist
   - Add Task details in Story's Tasks section
   - Assign version number: `RC.EPIC.STORY.TASK+BUILD`
     - EPIC: New Epic number
     - STORY: 1
     - TASK: 1
     - BUILD: 1

**Example:** If current Epics are 1-7, create Epic 8 → Story 1 → Task 1 → Version: `0.8.1.1+1`

4. **Update Epic Document:**
   - Add Story 1 to Epic's Story Checklist
   - Add Story 1 details in Epic's Stories section
   - Set Epic status: IN PROGRESS

5. **Update Story Document:**
   - Set Story status: IN PROGRESS
   - Add Task 1 to Story's Task Checklist
   - Add Task 1 details in Story's Tasks section

6. **Update Kanban Board:**
   - Add new Epic to board
   - Add new Story to board

7. **Update FR/BR Document:**
   - Set Intake Status: ACCEPTED
   - Mark "New Epic Created" in Decision Flow Results
   - Record Epic, Story, Task, and Version
   - Add Kanban links

---

### Step 6: Assign Version Number

**Version Schema:**
```yaml
version: RC.EPIC.STORY.TASK+BUILD
components:
  RC: Release Candidate (0 = development, 1+ = release candidate)
  EPIC: Epic number (matches assigned Epic)
  STORY: Story number (matches assigned Story)
  TASK: Task number (matches assigned Task)
  BUILD: Build number (starts at 1, incremented by Release Workflow)
```
**Update Version File:**
- **CRITICAL:** Update `src/[project]/version.py` (or project-specific version file)
- Set `VERSION_EPIC` to match assigned Epic number
- Set `VERSION_STORY` to match assigned Story number
- **CRITICAL:** Set `VERSION_TASK` to match assigned Task number
- **CRITICAL:** Set `VERSION_BUILD = 1` (new Tasks always start at BUILD 1)
- **Validation:** Verify `VERSION_TASK` matches the Task number you just created

**Example Update:**
```python
# Creating Task 2 in Epic 4, Story 3
VERSION_EPIC = 4
VERSION_STORY = 3
VERSION_TASK = 2  # ← Must match new Task number
VERSION_BUILD = 1  # ← Always 1 for new Tasks
```

**Note:** Version numbers are assigned at Task creation. The Release Workflow (RW) will:
- Validate that `VERSION_TASK` matches the active Task number (Step 1)
- Automatically detect Task transitions and update `VERSION_TASK` if needed (Step 2)
- Increment `VERSION_BUILD` when work is completed and released (Step 2, same Task only)

---

### Step 7: Update Kanban Board

**Actions:**
1. Update `docs/project-management/kanban/kboard.md`, `kanban-structure.md`, and `_index.md`:
   - Add new Epic (if created)
   - Add new Story (if created)
   - Update Story status (if Task added)
   - Update Epic status (if Story added)

2. Update `docs/project-management/kanban/_index.md`:
   - Update Epic/Story counts
   - Update status summaries

**Consistency Check:**
- Ensure board matches Epic/Story documents
- Ensure status fields are synchronized

---

### Step 8: Link FR/BR to Task

**Actions:**
1. **In FR/BR Document:**
   - Complete "Intake Decision" section
   - Add Kanban links (Epic, Story, Task)
   - Set Intake Status: ACCEPTED

2. **In Story Document:**
   - Add reference to FR/BR in Task's "References" section
   - Link to FR/BR document

3. **In Epic Document (if needed):**
   - Add reference to FR/BR in Story's "References" section

**Traceability:**
- FR/BR → Task link: FR/BR document's "Intake Decision" section
- Task → FR/BR link: Story document's Task "References" section

---

## Worked Examples

### Example 1: FR Matching Existing Story

**Scenario:** Feature Request for "Add dark mode toggle to settings page"

**Step 1: Create FR Document**
- Use `FR_TEMPLATE.md`
- Summary: "Add dark mode toggle to settings page"
- Problem Domain: UI Theme & Styling
- Affected Areas: Frontend/UI

**Step 2: Search for Story**
- Search Kanban board for Stories related to "UI Theme" or "Styling"
- Find: Epic 3, Story 2 - "UI Theme & Styling"
- Check: Story status is IN PROGRESS (not COMPLETE)
- Check: Story's scope encompasses "dark mode toggle"
- **Decision:** Story matches ✅

**Step 3: Create Task**
- Open Story document: `docs/project-management/kanban/epics/Epic-3/Story-002-ui-theme-and-styling.md`
- Check existing Tasks: T01, T02, T03
- Create Task 4: "Add dark mode toggle to settings page"
- Assign version: `0.3.2.4+1`

**Step 4: Update Documents**
- FR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: Story Match Found (Epic 3, Story 2) → Task 4
  - Version: `0.3.2.4+1`
  - Kanban Links: Epic 3, Story 2, Task 4
- Story Document:
  - Add Task 4 to Task Checklist
  - Add Task 4 details in Tasks section
  - Add FR reference in Task 4's References section

**Result:** FR converted to Task 4 under existing Story 2 in Epic 3.

---

### Example 2: FR Requiring New Story (Existing Epic)

**Scenario:** Feature Request for "Add user profile picture upload"

**Step 1: Create FR Document**
- Use `FR_TEMPLATE.md`
- Summary: "Add user profile picture upload"
- Problem Domain: User Management
- Affected Areas: Backend/API, Frontend/UI, Database/Schema

**Step 2: Search for Story**
- Search Kanban board for Stories related to "User Profile" or "User Management"
- Find: Epic 2 - "User Management" has Stories:
  - Story 1: "User Authentication" (COMPLETE)
  - Story 2: "User Registration" (COMPLETE)
- Check: No Story matches "profile picture upload" scope
- **Decision:** No Story match ❌

**Step 3: Search for Epic**
- Check Epic 2: "User Management"
- Check: Epic's problem domain matches "User Management"
- Check: Epic status is IN PROGRESS (not COMPLETE)
- Check: Epic's scope encompasses "user profile features"
- **Decision:** Epic matches ✅

**Step 4: Create Story and Task**
- Create Story 3: "User Profile Management"
  - Location: `docs/project-management/kanban/epics/Epic-2/Story-003-user-profile-management.md`
  - Status: TODO
  - Goal: "Implement user profile management features including profile picture upload"
- Create Task 1: "Add user profile picture upload"
  - Add to Story's Task Checklist
  - Assign version: `0.2.3.1+1`

**Step 5: Update Documents**
- Epic 2 Document:
  - Add Story 3 to Story Checklist
  - Add Story 3 details in Stories section
- FR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: New Story Created (Epic 2, Story 3) → Task 1
  - Version: `0.2.3.1+1`
  - Kanban Links: Epic 2, Story 3, Task 1

**Result:** FR converted to new Story 3 under existing Epic 2, with Task 1.

---

### Example 3: FR Requiring New Epic

**Scenario:** Feature Request for "Add real-time collaboration features"

**Step 1: Create FR Document**
- Use `FR_TEMPLATE.md`
- Summary: "Add real-time collaboration features"
- Problem Domain: Real-Time Collaboration
- Affected Areas: Backend/API, Frontend/UI, Integration/External Service

**Step 2: Search for Story**
- Search Kanban board for Stories related to "collaboration" or "real-time"
- Find: No matching Stories
- **Decision:** No Story match ❌

**Step 3: Search for Epic**
- Check existing Epics: 1-6
  - Epic 1: AI Dev Kit Core
  - Epic 2: Workflow Management Framework
  - Epic 3: Numbering & Versioning Framework
  - Epic 4: Kanban Framework
  - Epic 5: FR Implementation
  - Epic 6: BR Implementation
  - Epic 7: Codebase Maintenance and Review
- Check: None match "Real-Time Collaboration" problem domain
- **Decision:** No Epic match ❌

**Step 4: Create Epic, Story, and Task**
- Create Epic 8: "Real-Time Collaboration"
  - Location: `docs/project-management/kanban/epics/Epic-7/Epic-7.md`
  - Status: TODO
  - **CRITICAL:** Epic is broad and abstract: "Framework for real-time collaboration features"
  - Problem Domain: Real-Time Collaboration
  - **Note:** Epic 8 because canonical epics are 1-7 (see `CANONICAL_EPICS.md`)
- Create Story 1: "Real-Time Collaboration Foundation"
  - Location: `docs/project-management/kanban/epics/Epic-7/Story-001-real-time-collaboration-foundation.md`
  - Status: TODO
  - Goal: "Establish foundation for real-time collaboration features"
- Create Task 1: "Add real-time collaboration features"
  - Add to Story's Task Checklist
  - Assign version: `0.8.1.1+1`

**Step 5: Update Documents**
- Kanban Board:
  - Add Epic 8
  - Add Story 1 under Epic 8
- FR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: New Epic Created (Epic 8, Story 1) → Task 1
  - Version: `0.8.1.1+1`
  - Kanban Links: Epic 8, Story 1, Task 1

**Result:** FR converted to new Epic 8, Story 1, Task 1.

---

### Example 4: BR Matching Existing Story

**Scenario:** Bug Report for "Dark mode toggle not persisting across page refreshes"

**Step 1: Create BR Document**
- Use `BR_TEMPLATE.md`
- Summary: "Dark mode toggle not persisting across page refreshes"
- Affected Component: UI Theme & Styling
- Affected Areas: Frontend/UI, Backend/API (if persistence needed)

**Step 2: Search for Story**
- Search Kanban board for Stories related to "dark mode" or "UI Theme"
- Find: Epic 3, Story 2 - "UI Theme & Styling"
- Check: Story status is IN PROGRESS (not COMPLETE)
- Check: Story's scope encompasses "dark mode toggle"
- **Decision:** Story matches ✅

**Step 3: Create Task**
- Open Story document: `docs/project-management/kanban/epics/Epic-3/Story-002-ui-theme-and-styling.md`
- Check existing Tasks: T01, T02, T03, T04 (from Example 1)
- Create Task 5: "Fix dark mode toggle persistence"
- Assign version: `0.3.2.5+1`

**Step 4: Update Documents**
- BR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: Story Match Found (Epic 3, Story 2) → Task 5
  - Version: `0.3.2.5+1`
  - Fix Verification Status: Attempted Fix (pending verification)
  - Kanban Links: Epic 3, Story 2, Task 5
- Story Document:
  - Add Task 5 to Task Checklist
  - Add Task 5 details in Tasks section
  - Add BR reference in Task 5's References section

**Result:** BR converted to Task 5 under existing Story 2 in Epic 3.

**Note:** When Task 5 is completed, the fix must be verified through testing before being marked as "Fixed" in changelogs. Until verification, it should be logged as "Attempted Fix".

---

### Example 5: BR Requiring New Story

**Scenario:** Bug Report for "User profile picture upload fails for files larger than 5MB"

**Step 1: Create BR Document**
- Use `BR_TEMPLATE.md`
- Summary: "User profile picture upload fails for files larger than 5MB"
- Affected Component: User Profile Management
- Affected Areas: Backend/API, Frontend/UI

**Step 2: Search for Story**
- Search Kanban board for Stories related to "user profile" or "profile picture"
- Find: Epic 2 - "User Management" has Stories:
  - Story 1: "User Authentication" (COMPLETE)
  - Story 2: "User Registration" (COMPLETE)
  - Story 3: "User Profile Management" (from Example 2, but may not exist yet)
- Check: If Story 3 exists, check if it matches "profile picture upload" scope
- **Decision:** No Story match (or Story 3 doesn't match this specific bug) ❌

**Step 3: Search for Epic**
- Check Epic 2: "User Management"
- Check: Epic's problem domain matches "User Management"
- Check: Epic status is IN PROGRESS (not COMPLETE)
- Check: Epic's scope encompasses "user profile features"
- **Decision:** Epic matches ✅

**Step 4: Create Story and Task**
- Create Story 3 (or Story 4 if Story 3 exists): "User Profile Management"
  - Location: `docs/project-management/kanban/epics/Epic-2/Story-003-user-profile-management.md`
  - Status: TODO
  - Goal: "Implement and maintain user profile management features"
- Create Task 1: "Fix profile picture upload file size limit"
  - Add to Story's Task Checklist
  - Assign version: `0.2.3.1+1` (or `0.2.4.1+1` if Story 4)

**Step 5: Update Documents**
- Epic 2 Document:
  - Add Story 3 to Story Checklist
  - Add Story 3 details in Stories section
- BR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: New Story Created (Epic 2, Story 3) → Task 1
  - Version: `0.2.3.1+1`
  - Fix Verification Status: Attempted Fix (pending verification)
  - Kanban Links: Epic 2, Story 3, Task 1

**Result:** BR converted to new Story 3 under existing Epic 2, with Task 1.

---

### Example 6: Complex FR Requiring Multiple Tasks

**Scenario:** Feature Request for "Add OAuth authentication with Google and GitHub"

**Step 1: Create FR Document**
- Use `FR_TEMPLATE.md`
- Summary: "Add OAuth authentication with Google and GitHub"
- Problem Domain: Multiple (Authentication, UI, Documentation)
- Affected Areas: Backend/API, Frontend/UI, Documentation

**Step 2: Analyze Scope**
- This FR requires work across multiple Epics:
  - Backend OAuth implementation (Epic 2: Workflow Management or new Epic)
  - Frontend OAuth UI (Epic 3: Numbering & Versioning or UI Epic)
  - OAuth documentation (Epic 1: AI Dev Kit Core)

**Step 3: Create Multiple Tasks**

**Task 1: Backend OAuth Implementation**
- Epic 2, Story 1 (or appropriate Story)
- Create Task 5 (or next available): "Implement OAuth backend for Google and GitHub"
- Version: `0.2.1.5+1`

**Task 2: Frontend OAuth UI**
- Epic 3, Story 2 (or appropriate Story)
- Create Task 3 (or next available): "Implement OAuth UI for Google and GitHub"
- Version: `0.3.2.3+1`

**Task 3: OAuth Documentation**
- Epic 1, Story 3 (or appropriate Story)
- Create Task 2 (or next available): "Document OAuth authentication setup"
- Version: `0.1.3.2+1`

**Step 4: Update Documents**
- FR Document:
  - Intake Status: ACCEPTED
  - Decision Flow: Multiple Tasks Created
    - Epic 2, Story 1, Task 5 → `0.2.1.5+1`
    - Epic 3, Story 2, Task 3 → `0.3.2.3+1`
    - Epic 1, Story 3, Task 2 → `0.1.3.2+1`
  - Kanban Links: All three Tasks

**Result:** FR converted to three Tasks across three different Epics/Stories.

**Note:** Complex FRs may require coordination between multiple Tasks. Ensure dependencies are documented in each Task's "Dependencies" section.

---

## Integration Points

### Kanban Integration

- **Templates:** Use EPIC_TEMPLATE, STORY_TEMPLATE for new items
- **Board Updates:** Always update `kboard.md`, `kanban-structure.md`, and `_index.md`
- **Status Synchronization:** Ensure Epic, Story, and Task status fields match
- **Forensic Markers:** RW will add version markers when Tasks are completed

### Versioning Integration

- **Version Schema:** `RC.EPIC.STORY.TASK+BUILD`
- **Version Assignment:** Assigned at Task creation
- **Version File:** Update `src/[project]/version.py` (or project-specific)
- **Canonical Ordering:** Version numbers provide canonical ordering (not timestamps)

### Release Workflow Integration

- **Task Completion:** When Task is completed, RW increments BUILD
- **Changelog Updates:** RW creates detailed and summary changelog entries
- **Kanban Updates:** RW Step 6 updates Epic/Story documents with version markers
- **Fix Verification:** BR fixes must be verified before being marked as "Fixed"

---

## Troubleshooting

### Issue: Can't find matching Story or Epic

**Solution:**
1. Review existing Epics/Stories more broadly
2. Consider if FR/BR scope is too narrow or too broad
3. Check if Epic/Story status allows new work (not COMPLETE/DEFERRED)
4. If truly no match, create new Epic/Story as needed

### Issue: FR/BR spans multiple problem domains

**Solution:**
1. Break FR/BR into multiple Tasks (see Example 6)
2. Create Tasks under appropriate Stories/Epics
3. Document dependencies between Tasks
4. Coordinate work across Tasks

### Issue: Unsure about Epic scope

**Solution:**
1. Review Epic creation guidelines: Epics must be **broad and abstract**
2. If Epic is too specific, it may need to be a Story under a broader Epic
3. Consult Kanban governance policy for Epic creation criteria

### Issue: Version number conflicts

**Solution:**
1. Ensure version follows `RC.EPIC.STORY.TASK+BUILD` schema
2. Check that EPIC, STORY, TASK numbers match assigned Epic/Story/Task
3. BUILD starts at 1 for new Tasks
4. RW increments BUILD when Task is completed

---

## Quick Reference

### Decision Flow Quick Reference

```
FR/BR → Search Story
    ├─ Match → Create Task (RC.E.S.T+1)
    └─ No Match → Search Epic
            ├─ Match → Create Story, Task (RC.E.S.1+1)
            └─ No Match → Create Epic, Story, Task (RC.E.1.1+1)
```

### Version Number Quick Reference

- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **RC:** 0 (development) or 1+ (release candidate)
- **EPIC:** Epic number (1, 2, 3, ...)
- **STORY:** Story number within Epic (1, 2, 3, ...)
- **TASK:** Task number within Story (1, 2, 3, ...)
- **BUILD:** Build number (starts at 1, incremented by RW)

### Template Quick Reference

- **FR Template:** `packages/frameworks/kanban/templates/FR_TEMPLATE.md`
- **BR Template:** `packages/frameworks/kanban/templates/BR_TEMPLATE.md`
- **Epic Template:** `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

### Key Documents Quick Reference

- **Decision Flow Design:** `T002-decision-flow-design.md`
- **Intake Analysis:** `T001-intake-analysis-report.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

## Next Steps

After completing intake:
1. **Work on Task:** Follow normal Task workflow
2. **Complete Task:** Use Release Workflow (RW) when Task is done
3. **Verify Fixes:** For BRs, ensure fixes are verified before marking as "Fixed"
4. **Update Status:** Keep Kanban board and documents synchronized

---

## References

- `packages/frameworks/kanban/templates/FR_TEMPLATE.md` (Feature Request template)
- `packages/frameworks/kanban/templates/BR_TEMPLATE.md` (Bug Report template)
- `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md` (Epic template)
- `packages/frameworks/kanban/templates/STORY_TEMPLATE.md` (Story template)
- `docs/project-management/kanban/epics/Epic-4/Story-002-fr-br-intake-to-tasks/T002-decision-flow-design.md` (Decision flow design)
- `docs/project-management/kanban/epics/Epic-4/Story-002-fr-br-intake-to-tasks/T001-intake-analysis-report.md` (Intake analysis)
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` (Kanban governance)
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (Versioning policy)

---

_This guide is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

