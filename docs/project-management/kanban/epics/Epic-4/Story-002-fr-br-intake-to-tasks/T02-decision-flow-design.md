---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# FR/BR → Task → Story → Epic Decision Flow Design

**Task:** E4:S02:T02 – Design FR/BR → Task → Story → Epic decision flow  
**Date:** 2025-12-02  
**Author:** AI Agent (Auto)  
**Status:** ✅ COMPLETE

---

## Executive Summary

This document designs a clear, actionable decision flow for converting Feature Requests (FRs) and Bug Reports (BRs) into Kanban Tasks, Stories, and Epics. The flow operationalizes the canonical rule from the Kanban governance policy and provides decision criteria, visual flowcharts, and edge case handling.

**Key Deliverables:**
- ✅ Text-based decision flow diagram
- ✅ Story matching criteria
- ✅ Epic matching/creation criteria
- ✅ Edge case handling
- ✅ Versioning integration rules

---

## 1. Decision Flow Overview

### 1.1 High-Level Flow

```
FR/BR Arrives
    ↓
Is it a Feature Request (FR) or Bug Report (BR)?
    ↓
[BR Path] → Identify affected area/component
[FR Path] → Analyze scope and requirements
    ↓
Search for existing Story that matches scope
    ↓
┌─────────────────────────────────────┐
│ Story Found?                        │
└─────────────────────────────────────┘
    │                    │
   YES                  NO
    │                    │
    ↓                    ↓
Create Task      Search for existing Epic
under Story      that matches problem domain
    │                    │
    │            ┌───────────────────────┐
    │            │ Epic Found?           │
    │            └───────────────────────┘
    │                    │
    │                   YES
    │                    │
    │                    ↓
    │            Create Story under Epic
    │            Create Task under Story
    │                    │
    │                   NO
    │                    │
    │                    ↓
    │            Create new Epic
    │            Create Story under Epic
    │            Create Task under Story
    │                    │
    └────────────────────┘
            ↓
    Assign Version (RC.EPIC.STORY.TASK+BUILD)
    Update Kanban Board
    Link FR/BR to Task
```

---

## 2. Detailed Decision Flow

### 2.1 Step-by-Step Process

#### Step 1: Receive FR/BR

**Input:** Feature Request or Bug Report  
**Actions:**
- Capture FR/BR details (title, description, priority, etc.)
- Classify as FR or BR
- Extract key information:
  - **For FR:** Desired functionality, use case, scope
  - **For BR:** Affected component, symptoms, severity


**Output:** Classified FR/BR with extracted information

---

#### Step 2: Search for Existing Story

**Criteria for Story Matching:**

A Story matches if **ALL** of the following are true:

1. **Scope Alignment:**
   - Story's goal/scope encompasses the FR/BR's requirements
   - Story addresses the same problem domain or feature area
   - Story is not marked as COMPLETE or DEFERRED

2. **Epic Alignment:**
   - Story belongs to an Epic that conceptually fits the FR/BR
   - Epic's domain matches the FR/BR's problem space

3. **Timing Alignment:**
   - Story is not blocked by dependencies that would prevent new Tasks
   - Story's status allows new Tasks (TODO, IN PROGRESS, not COMPLETE)

**Search Process:**
1. Review Epic documents for domain matches
2. Within matching Epics, review Story documents
3. Check Story goals, scope, and acceptance criteria
4. Verify Story status allows new Tasks

**Decision Point:**
- **Story Found:** Proceed to Step 3A (Create Task)
- **No Story Found:** Proceed to Step 3B (Create Story)

---

#### Step 3A: Create Task Under Existing Story

**When:** Story found that matches FR/BR scope

**Actions:**
1. Determine next Task number for the Story
2. Create Task document using Story's task structure
3. Add Task to Story's task checklist
4. Link FR/BR to Task (reference in Task document)
5. Determine version: `RC.EPIC.STORY.{NEXT_TASK}+1`
6. Update Story status if needed (TODO → IN PROGRESS)
7. Update Kanban board

**Version Calculation:**
- Use existing Epic number (from Story)
- Use existing Story number
- Use next available Task number
- Set BUILD to 1 (first build for this Task)

**Example:**
- Story: Epic 4, Story 2, currently has Tasks 1-3
- New Task: Task 4
- Version: `0.4.2.4+1`

**Output:** Task created, version assigned, Kanban updated

---

#### Step 3B: Search for Existing Epic

**When:** No matching Story found

**Criteria for Epic Matching:**

An Epic matches if **ALL** of the following are true:

1. **Domain Alignment:**
   - Epic's problem domain matches the FR/BR's problem space
   - Epic's goals encompass the FR/BR's requirements
   - Epic is not marked as COMPLETE or DEFERRED

2. **Conceptual Fit:**
   - FR/BR fits within Epic's conceptual boundaries
   - Epic's scope is broad enough to include this work
   - Epic's purpose aligns with FR/BR's intent

**Search Process:**
1. Review all Epic documents
2. Check Epic goals, overview, and problem domain
3. Verify Epic status allows new Stories
4. Consider Epic's current Stories for context

**Decision Point:**
- **Epic Found:** Proceed to Step 4A (Create Story under Epic)
- **No Epic Found:** Proceed to Step 4B (Create Epic)

---

#### Step 4A: Create Story Under Existing Epic

**When:** Epic found that matches problem domain, but no Story exists

**Actions:**
1. Determine next Story number for the Epic
2. Create Story document using Epic's Story template
3. Add Story to Epic's story checklist
4. Create Story directory: `epics/Epic-X/stories/Story-XXX-*.md`
5. Create initial Task under new Story (Step 3A process)
6. Determine version: `RC.EPIC.{NEXT_STORY}.1+1`
7. Update Epic status if needed
8. Update Kanban board

**Version Calculation:**
- Use existing Epic number
- Use next available Story number
- Set TASK to 1 (first task in new Story)
- Set BUILD to 1 (first build for this Task)

**Example:**
- Epic: Epic 4, currently has Stories 1-2
- New Story: Story 3
- New Task: Task 1
- Version: `0.4.3.1+1`

**Output:** Story and Task created, version assigned, Kanban updated

---

#### Step 4B: Create New Epic

**When:** No matching Epic found

**Actions:**
1. Determine next Epic number (check existing Epics)
2. Create Epic document using Epic template
3. Create Epic directory: `epics/Epic-X/`
4. Create `stories/` subdirectory
5. Create Story under new Epic (Step 4A process)
6. Create Task under new Story (Step 3A process)
7. Determine version: `RC.{NEXT_EPIC}.1.1+1`
8. Update Kanban board

**Epic Creation Guidelines:**
- **Broad and Abstract:** Epic should be conceptually broad enough to host multiple Stories
- **Problem Domain:** Epic should represent a coherent problem domain or feature area
- **Future-Proof:** Epic should be able to accommodate future related work
- **Naming:** Use descriptive, domain-focused names (e.g., "User Authentication", "Data Processing", "API Integration")

**Version Calculation:**
- Use next available Epic number
- Set STORY to 1 (first story in new Epic)
- Set TASK to 1 (first task in new Story)
- Set BUILD to 1 (first build for this Task)

**Example:**
- Existing Epics: 1, 2, 3, 4
- New Epic: Epic 5
- New Story: Story 1
- New Task: Task 1
- Version: `0.5.1.1+1`

**Output:** Epic, Story, and Task created, version assigned, Kanban updated

---

## 3. Decision Criteria

### 3.1 Story Matching Criteria

**Primary Criteria (ALL must match):**

1. **Scope Match:**
   - Story's goal encompasses FR/BR requirements
   - Story addresses same problem/feature area
   - Story's acceptance criteria align with FR/BR

2. **Epic Alignment:**
   - Story belongs to Epic that fits FR/BR domain
   - Epic's purpose aligns with FR/BR intent

3. **Status Compatibility:**
   - Story is not COMPLETE
   - Story is not DEFERRED
   - Story can accept new Tasks

**Secondary Criteria (Consider):**

- Story's current Tasks (are they related?)
- Story's timeline (does it fit?)
- Story's dependencies (are they blocking?)

**Decision Rule:**
- If **ALL** primary criteria match → Use existing Story
- If **ANY** primary criteria don't match → Create new Story

---

### 3.2 Epic Matching Criteria

**Primary Criteria (ALL must match):**

1. **Domain Match:**
   - Epic's problem domain matches FR/BR problem space
   - Epic's goals encompass FR/BR requirements
   - Epic's conceptual boundaries include FR/BR scope

2. **Status Compatibility:**
   - Epic is not COMPLETE
   - Epic is not DEFERRED
   - Epic can accept new Stories

**Secondary Criteria (Consider):**

- Epic's current Stories (are they related?)
- Epic's scope (is it too narrow or too broad?)
- Epic's purpose (does it align?)

**Decision Rule:**
- If **ALL** primary criteria match → Use existing Epic
- If **ANY** primary criteria don't match → Create new Epic

---

### 3.3 Epic Creation Guidelines

**When Creating a New Epic:**

1. **Broad and Abstract:**
   - Epic should represent a coherent problem domain
   - Epic should be broad enough for multiple Stories
   - Epic should be conceptually abstract (not too specific)

2. **Examples of Good Epic Concepts:**
   - "User Authentication & Authorization"
   - "Data Processing & Analytics"
   - "API Integration & External Services"
   - "UI/UX Framework & Components"
   - "Testing Infrastructure & Tools"

3. **Examples of Poor Epic Concepts:**
   - "Add login button" (too specific, should be a Task)
   - "Fix bug in payment" (too specific, should be a Task)
   - "Everything" (too broad, no clear domain)

4. **Naming Convention:**
   - Use descriptive, domain-focused names
   - Use title case
   - Be specific enough to distinguish from other Epics
   - Be abstract enough to host multiple Stories

---

## 4. Edge Cases and Exceptions

### 4.1 Complex FR Requiring Multiple Tasks

**Scenario:** FR requires work across multiple Stories or Epics

**Handling:**
1. **Analyze FR scope:**
   - Break down FR into logical components
   - Identify which components belong to which Stories/Epics

2. **Create Tasks:**
   - Create one Task per Story/Epic component
   - Link all Tasks to the original FR
   - Ensure each Task has clear scope

3. **Versioning:**
   - Each Task gets its own version
   - Versions may span multiple Stories/Epics
   - Document cross-Task dependencies

**Example:**
- FR: "Add user authentication with OAuth"
- Components:
  - Backend API (Epic 2, Story 1) → Task 5
  - Frontend UI (Epic 3, Story 2) → Task 3
  - Documentation (Epic 1, Story 3) → Task 2

- Versions: `0.2.1.5+1`, `0.3.2.3+1`, `0.1.3.2+1`

---

### 4.2 Ambiguous Scope

**Scenario:** FR/BR scope is unclear or could fit multiple Stories/Epics

**Handling:**
1. **Clarify scope:**
   - Ask for clarification from FR/BR submitter
   - Review related Stories/Epics for context
   - Consider FR/BR's intent and use case

2. **Decision:**
   - If scope can be clarified → Proceed with matching
   - If scope remains ambiguous → Create new Story (can be refined later)
   - Document ambiguity in Story/Task notes

3. **Best Practice:**
   - When in doubt, create new Story (can be merged/refined later)
   - Document decision rationale
   - Review during Story grooming

---

### 4.3 BR Affecting Multiple Components

**Scenario:** Bug affects multiple components/areas

**Handling:**
1. **Identify root cause:**
   - Determine primary affected component
   - Identify secondary affected components

2. **Create Tasks:**
   - Primary fix: Create Task in primary component's Story
   - Secondary fixes: Create Tasks in affected components' Stories
   - Link all Tasks to the original BR

3. **Versioning:**
   - Each fix gets its own version
   - Document dependencies between fixes

**Example:**
- BR: "Payment fails when user has special characters in name"
- Root cause: Backend validation (Epic 2, Story 1) → Task 6
- Secondary: Frontend validation (Epic 3, Story 2) → Task 4
- Versions: `0.2.1.6+1`, `0.3.2.4+1`

---

### 4.4 FR/BR That Spans Multiple Epics

**Scenario:** FR/BR requires work across multiple Epics

**Handling:**
1. **Analyze requirements:**
   - Break down FR/BR into Epic-specific components
   - Identify which components belong to which Epics

2. **Create Tasks:**
   - Create one Task per Epic component
   - Link all Tasks to the original FR/BR
   - Document cross-Epic dependencies

3. **Coordination:**
   - Document dependencies in each Task
   - Consider Epic coordination during planning
   - May require Epic owners to coordinate

**Example:**
- FR: "Add analytics dashboard"
- Components:
  - Data processing (Epic 5) → Task 1
  - UI components (Epic 6) → Task 1
  - API endpoints (Epic 2) → Task 8

- Versions: `0.5.1.1+1`, `0.6.1.1+1`, `0.2.1.8+1`

---

### 4.5 Duplicate FR/BR

**Scenario:** FR/BR is duplicate of existing work

**Handling:**
1. **Check for existing Tasks:**
   - Search Kanban board for similar Tasks
   - Review Story documents for related work
   - Check if work is already in progress

2. **Decision:**
   - If duplicate found → Link FR/BR to existing Task
   - If similar but different → Create new Task, document relationship
   - If unclear → Create new Task, review during grooming

3. **Documentation:**
   - Document duplicate status in Task notes
   - Link related Tasks/FRs/BRs
   - Close duplicate FR/BR with reference to original

---

## 5. Versioning Integration

### 5.1 Version Assignment Rules

**Rule 1: Task Under Existing Story**
- Version: `RC.EPIC.STORY.{NEXT_TASK}+1`
- Example: Story has Tasks 1-3 → New Task 4 → `0.4.2.4+1`

**Rule 2: Task Under New Story (Existing Epic)**
- Version: `RC.EPIC.{NEXT_STORY}.1+1`
- Example: Epic has Stories 1-2 → New Story 3, Task 1 → `0.4.3.1+1`

**Rule 3: Task Under New Story (New Epic)**
- Version: `RC.{NEXT_EPIC}.1.1+1`
- Example: New Epic 5, Story 1, Task 1 → `0.5.1.1+1`

**Rule 4: Multiple Tasks from Single FR/BR**
- Each Task gets its own version
- Versions may span multiple Stories/Epics
- Document relationship in Task notes

---

### 5.2 Version Validation

**Before Assigning Version:**
1. Verify Epic number exists and is valid
2. Verify Story number is next in sequence for Epic
3. Verify Task number is next in sequence for Story
4. Verify BUILD starts at 1 for new Task
5. Check for version conflicts (parallel development)

**Version Format:**
- Must follow `RC.EPIC.STORY.TASK+BUILD` schema
- RC: 0 for development, 1+ for release candidates
- EPIC: Must match existing Epic or be next in sequence
- STORY: Must match existing Story or be next in sequence
- TASK: Must be next in sequence for Story
- BUILD: Always starts at 1 for new Task

---

## 6. Kanban Board Integration

### 6.1 Board Update Rules

**When Creating Task:**
1. Update Story's task checklist
2. Update Story status if needed (TODO → IN PROGRESS)
3. Update Epic's story checklist if new Story
4. Update Epic status if needed
5. Update Kanban board (`_index.md` and `kboard.md`)

**When Creating Story:**
1. Add Story to Epic's story checklist
2. Create Story document in `epics/Epic-X/stories/`
3. Update Epic status if needed
4. Update Kanban board

**When Creating Epic:**
1. Create Epic document in `epics/Epic-X.md`
2. Create Epic directory structure
3. Add Epic to Kanban board
4. Update board summary

---

## 7. Visual Decision Flow Diagram

### 7.1 Text-Based Flowchart

```
START: FR/BR Arrives
│
├─→ Classify: FR or BR?
│   │
│   ├─→ [FR] Extract: Functionality, use case, scope
│   └─→ [BR] Extract: Affected component, symptoms, severity
│
├─→ Search for existing Story matching scope
│   │
│   ├─→ [Story Found]
│   │   │
│   │   ├─→ Verify Story status allows new Tasks
│   │   │   │
│   │   ├─→ [Status OK]
│   │   │   │
│   │   │   ├─→ Determine next Task number
│   │   │   ├─→ Create Task under Story
│   │   │   ├─→ Assign version: RC.EPIC.STORY.{NEXT_TASK}+1
│   │   │   ├─→ Update Story task checklist
│   │   │   ├─→ Update Kanban board
│   │   │   └─→ END: Task created
│   │   │
│   │   └─→ [Status Blocked]
│   │       │
│   │       └─→ Create new Story (proceed to Story creation)
│   │
│   └─→ [No Story Found]
│       │
│       ├─→ Search for existing Epic matching problem domain
│       │   │
│       │   ├─→ [Epic Found]
│       │   │   │
│       │   │   ├─→ Verify Epic status allows new Stories
│       │   │   │   │
│       │   │   ├─→ [Status OK]
│       │   │   │   │
│       │   │   │   ├─→ Determine next Story number
│       │   │   │   ├─→ Create Story under Epic
│       │   │   │   ├─→ Create Task under Story (Task 1)
│       │   │   │   ├─→ Assign version: RC.EPIC.{NEXT_STORY}.1+1
│       │   │   │   ├─→ Update Epic story checklist
│       │   │   │   ├─→ Update Kanban board
│       │   │   │   └─→ END: Story and Task created
│       │   │   │
│       │   │   └─→ [Status Blocked]
│       │   │       │
│       │   │       └─→ Create new Epic (proceed to Epic creation)
│       │   │
│       │   └─→ [No Epic Found]
│       │       │
│       │       ├─→ Determine next Epic number
│       │       ├─→ Create new Epic (broad, abstract concept)
│       │       ├─→ Create Story under Epic (Story 1)
│       │       ├─→ Create Task under Story (Task 1)
│       │       ├─→ Assign version: RC.{NEXT_EPIC}.1.1+1
│       │       ├─→ Update Kanban board
│       │       └─→ END: Epic, Story, and Task created
│
└─→ END: FR/BR converted to Task(s)
```

---

## 8. Decision Criteria Summary Table

| Decision Point | Criteria | Action if Match | Action if No Match |
|----------------|----------|-----------------|-------------------|
| **Story Match** | Scope aligns, Epic aligns, Status allows | Create Task under Story | Search for Epic |
| **Epic Match** | Domain aligns, Status allows | Create Story under Epic | Create new Epic |
| **Status Check** | Story/Epic not COMPLETE/DEFERRED | Proceed with creation | Create new (Story/Epic) |

---

## 9. Examples

### Example 1: Simple FR → Existing Story

**FR:** "Add dark mode toggle to settings page"  
**Existing Story:** Epic 3, Story 2 - "UI Theme & Styling"  
**Decision:** Story matches (scope: UI theming)  
**Action:** Create Task 4 under Story 2  
**Version:** `0.3.2.4+1`

---

### Example 2: FR → New Story (Existing Epic)

**FR:** "Add user profile picture upload"  
**Existing Epic:** Epic 2 - "User Management"  
**Existing Stories:** Story 1 (Login), Story 2 (Registration)  
**Decision:** No matching Story, but Epic matches (user management)  
**Action:** Create Story 3 "User Profile" under Epic 2, Task 1  
**Version:** `0.2.3.1+1`

---

### Example 3: FR → New Epic

**FR:** "Add real-time collaboration features"  
**Existing Epics:** 1-4 (Core, Workflow, Versioning, Kanban)  
**Decision:** No matching Epic (new problem domain)  
**Action:** Create Epic 5 "Real-Time Collaboration", Story 1, Task 1  
**Version:** `0.5.1.1+1`

---

### Example 4: Complex FR → Multiple Tasks

**FR:** "Add OAuth authentication with Google and GitHub"  
**Analysis:** Requires backend (Epic 2), frontend (Epic 3), docs (Epic 1)  
**Decision:** Create Tasks in multiple Stories  
**Actions:**
- Epic 2, Story 1, Task 5: Backend OAuth implementation → `0.2.1.5+1`
- Epic 3, Story 2, Task 3: Frontend OAuth UI → `0.3.2.3+1`
- Epic 1, Story 3, Task 2: OAuth documentation → `0.1.3.2+1`

---

## 10. Integration Points

### 10.1 Kanban Integration

- Tasks created using Kanban Task structure
- Stories created using Kanban Story template
- Epics created using Kanban Epic template
- Board updated with new items
- Status fields synchronized

### 10.2 Versioning Integration

- Versions follow `RC.EPIC.STORY.TASK+BUILD` schema
- Version numbers assigned at Task creation
- Version file updated when Task is active
- Changelog entries reference version

### 10.3 Release Workflow Integration

- Tasks are compatible with RW
- Version numbers align with RW expectations
- Kanban docs updated by RW Step 6
- Forensic markers added by RW

---

## 11. Next Steps

This decision flow design provides the foundation for:
- **Task 3:** Creating FR/BR intake templates
- **Task 4:** Documenting the intake process with examples
- **Task 5:** Creating agent/user guides

---

## 12. References

- `packages/frameworks/kanban/policies/kanban-governance-policy.md` (FR/BR rules)
- `docs/project-management/rituals/policy/kanban-governance-policy.md` (dev-kit implementation)
- `docs/project-management/kanban/Story-002-fr-br-intake-to-tasks/T01-intake-analysis-report.md` (analysis)
- `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

_End of Decision Flow Design Document_

