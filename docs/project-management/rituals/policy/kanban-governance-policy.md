---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep
---

# AI Dev Kit – Kanban Governance Policy

**Owner:** AI Dev Kit / Book Project Lead  
**Last Updated:** 2026-03-31  
**Applies To:** All work tracked in the `ai-dev-kit` repo  
**Based On:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` (project-agnostic framework - **CANONICAL SOURCE OF TRUTH**)

---

## 1. Purpose

This policy defines **how the AI Dev Kit repo runs Kanban** for:

- Work on the **AI Dev Kit** frameworks themselves (workflow mgt, numbering & versioning, kanban, etc.)
- Work on the **Vibe Coding For Dummies** book project that lives in this repo

This policy adopts the **full versioning schema and strategy** from the Numbering & Versioning package:

- **Version schema:** `RC.EPIC.STORY.TASK+BUILD`
- **All substantive work is Task-driven** (Feature Requests and Bug Reports become Tasks)

The implementation in this repo starts simple:

- Uses **Stories and Tasks** as the primary work items (Epics will be added as the work grows)
- Uses a **simple board view** in `docs/project-management/kanban/_index.md`
- Can be evolved later to add Epics, swimlanes, WIP limits, etc.

### 1.1 RW Step 7 vs standalone UKW (FR-038)

- **Per-release kanban sync:** [Release Workflow](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md) **Step 7 — Scoped Kanban Sync (UKW Mode)** aligns Task/Story/Epic docs and related board lines for the **current release** in a **scoped** manner (conservative MoSCOW; no whole-board reshuffle).
- **Board-wide kanban sync:** [Update Kanban Workflow (UKW)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md) in **standalone** mode handles full-board housekeeping, prioritisation, and narrative updates per UKW flags.

### 1.2 FR / BR / UXR intake (**KG-R2**, **KG-R6**)

Normative detail lives in the **framework** policy (single SoT): [`kanban-governance-policy.md` (framework package)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/policies/kanban-governance-policy.md) — **key_rules** **KG-R2** and **KG-R6**.

**In short (this repo):**

- **Atomic intake:** New `fr-br/*.md` **MUST** ship in the **same change set** as its **task document** and **bidirectional** links (`Implementing Task:` ↔ task body). No “file FR now, task later.”
- **≥1 task per report:** Every **FR**, **BR**, and **UXR** resolves to at least one Kanban task (shared task allowed if explicitly cited by every report).
- **Story semantics over id symmetry:** The **primary** task SHOULD live under the story that matches **delivery**. Matching FR-047 to E5:S01:T47 is **optional**, not required.

**Approach D transition rule (FR-072):**

- **New intake cutover:** New FR/BR/UXR intake MUST create the primary task in the most appropriate delivery story; do **not** create net-new intake tasks in dedicated FR/BR/UXR repository stories.
- **Historical anchors preserved:** Existing repository-story tasks remain valid for forensic traceability and cross-links; treat those stories as historical registries during migration/closure.

Operational guide: [`FR_BR_INTAKE_GUIDE.md` (framework package)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md). Agent skill: [`intake-process` skill](https://github.com/earlution/ai-dev-kit/blob/main/.cursor/skills/intake-process/SKILL.md).

### 1.3 RW task-intent adoption flag (`--art`)

- RW Step 1d task-intent validation supports `--art` in all RW trigger modes (`RW`, `RW -d`, `RW -k`) for explicit canonical release-anchor adoption.
- Use `--art` only for intentional anchor adoption, not as a substitute for missing task token or missing task document checks (Steps 1b/1c remain mandatory and blocking).
- Source behavior is defined by `.cursorrules` + `validate_rw_task_intent.py`; packaged parity must remain aligned.

---

## 2. Board Structure (This Repo)

### 2.1 Location

**Single Kanban Directory:** All Kanban documentation lives under `docs/project-management/kanban/`:

- **Board files:**
  - `docs/project-management/kanban/_index.md` (quick board view)
  - `docs/project-management/kanban/kboard.md` (MoSCOW prioritized tasks)
  - `docs/project-management/kanban/kanban-structure.md` (Epic/Story/Task structure)
  - `docs/project-management/kanban/kanban-board-guide.md` (rules and explanations)
  - `docs/project-management/kanban/README.md` (structure overview)

- **Epic files:**
  - `docs/project-management/kanban/epics/Epic-X.md` (Epic overview document)

- **Story files:**
  - `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md` (Story documents and associated files)

### 2.2 Board Structure

The board serves as the **parent document** to Story documents, similar to how Story documents are parents of Task documents:

- **Board → Story:** The board links to and tracks all Story documents
- **Story → Task:** Story documents link to and track all Task documents
- This creates a clear hierarchy: **Board (parent) → Story (child) → Task (grandchild)**

#### 2.2.1 MoSCOW Prioritized Task View

The board includes a **MoSCOW Prioritized In-Progress Tasks** section that shows all in-progress tasks (status: IN PROGRESS or TODO) organized by priority and ordered chronologically.

**MoSCOW Priority Levels:**

1. **Must Have (M) – Critical Tasks**
   - Critical in-progress tasks that must be completed
   - Highest priority items requiring immediate attention
   - Tasks that block other work or are on critical path

2. **Should Have (S) – Important Tasks**
   - Important in-progress tasks that should be completed
   - High-value items that contribute significantly to goals
   - Tasks that are important but not blocking

3. **Could Have (C) – Nice-to-Have Tasks**
   - Nice-to-have in-progress tasks that could be completed
   - Lower priority items that add value but are not essential
   - Tasks that can be deferred if needed

4. **Ongoing (O) – Perpetual Tasks**
   - Ongoing maintenance tasks that never complete
   - Perpetual tasks that are tracked but don't block other work
   - Tasks that require continuous attention (e.g., workflow maintenance, changelog management)
   - These tasks are visible but don't interfere with prioritization of completable work

5. **Won't Have (W) – Deferred Tasks**
   - Tasks that are deferred or not being actively worked on
   - Items explicitly marked as out of scope for current cycle
   - Tasks that may be revisited in future iterations

**Chronological Ordering:**

- Tasks within each MoSCOW section are ordered **chronologically** (most recently updated first)
- This ensures the most active work is visible at the top of each section
- Ordering is based on the task document's `Last updated` field

**Task Entry Format:**

Each task entry in the MoSCOW sections includes:
- **Task ID:** `E\{epic\}:S\{story\}:T\{task\}` format (e.g., `E4:S13:T02`)
- **Task Description:** Brief description of the task
- **Last Updated:** Date when task was last updated
- **Links:** Links to Task document and parent Story document

#### 2.2.2 Story Checklist

After the MoSCOW sections, the board includes a **Story Checklist** section that lists all stories in a compact format (one line per story):

- **Format:** One line per story with status indicator
- **Purpose:** Provides quick overview of all stories and their completion status
- **Forensic Markers:** Includes version markers for completed stories (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

#### 2.2.3 Traditional Column Structure (Optional)

Projects may also use a traditional column-based board structure with three columns:

1. **Backlog** – Defined stories not yet started  
2. **In Progress** – Stories currently being worked on  
3. **Done** – Completed stories (implemented, documented, and—if relevant—released)

You can represent these as:

- A column in the board table (e.g., `Status` = `Backlog` / `In Progress` / `Done`), and/or
- Separate sections in `_index.md` if the board grows more complex.

**Note:** The MoSCOW prioritized task view can be used alongside or instead of the traditional column structure, depending on project needs.

---

## 3. Work Items (This Repo)

### 3.1 Epics

Epics represent broad, conceptual areas of work (for example, “Kanban Framework”, “Workflow Framework”, “Book Manuscript”).

- **Location:** `docs/project-management/kanban/epics/Epic-X/Epic-X.md` (Epic overview document)
- **Directory:** `docs/project-management/kanban/epics/Epic-X/` (contains all Epic files)
- **Template:** Use `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md` as starting point

**Structure:**
```
kanban/epics/
├── Epic-1/                # Epic 1 directory (all files here)
│   ├── Epic-1.md          # Epic 1 overview
│   ├── Story-001-*.md     # Story files
│   └── [other story files]
├── Epic-2/                # Epic 2 directory
│   ├── Epic-2.md
│   └── Story-XXX-*.md
```

**Every Story must belong to an Epic.** When creating a new Story, ensure its Epic exists (create Epic doc and directory if needed).

### 3.2 Stories

Stories are the **primary unit of planning** in this repo.

- **Location:** `docs/project-management/kanban/epics/Epic-X/Story-XXX-short-slug.md`
- **ID:** `XXX` (numeric string, e.g. `001`, `002`)
- **Directory:** Each Story lives in its Epic's directory, allowing for associated files (diagrams, notes, etc.) in Story subdirectories
- **Examples:**
  - `docs/project-management/kanban/epics/Epic-1/Story-001-ai-dev-kit-kanban-and-versioning.md`

**Each Story file should include:**

- Status (`TODO` / `In Progress` / `Done`)
- Owner
- Repo (usually `ai-dev-kit`)
- A brief overview of the goal
- A task checklist

### 3.3 Tasks

Tasks are **checklist items** inside a Story and are the **atomic unit of work**.

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
   - Location: `docs/project-management/kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md` or `docs/project-management/kanban/epics/Epic-X/Story-XXX/TYYY-description.md`
   - Example: `docs/project-management/kanban/epics/Epic-4/Story-011/Task-001-update-kanban-policy.md`

2. **Delimited Section Format (Alternative):**
   - Location: Within the Story document, using Task ID as a clear header
   - Format: `### E\{epic\}:S\{story\}:T\{task\} – Task Name` followed by task content
   - Example: `### E4:S11:T01 – Update Kanban Governance Policy`

**Required Task Document Fields:**

Every Task document MUST include the following fields:

- **Task ID:** `E\{epic\}:S\{story\}:T\{task\}` (e.g., `E4:S11:T01`)
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

- **Numbering:** `Exx:Sxx:Txx` (Epic, Story, Task with 2-digit zero padding)
- **Format:** `E\{epic\}:S\{story\}:T\{task\}` where task is 2-digit (01-99)
- **Example:** `E4:S11:T01` = Epic 4, Story 11, Task 1
- **Example:** `E1:S01:T01` = Epic 1, Story 1, Task 1
- **Tracked:** Git commits reference task ID
- **Version Mapping:** The active Task maps to the `TASK` component in the version number (`RC.EPIC.STORY.TASK+BUILD`)

**Size Guidelines:**

- Each Task should be small enough to complete in **1–3 days**.
- Tasks should be atomic and independently completable.

**Validation Requirements:**

The following validations MUST be enforced:

1. **Task Document Presence:** Every task referenced in a Story checklist MUST have a corresponding Task document
2. **Task ID Alignment:** Task ID in document MUST match Task ID in Story checklist
3. **Epic/Story/Task Alignment:** Task document MUST be located under the correct Epic and Story
4. **Required Fields:** Task document MUST contain all required fields listed above
5. **Version Alignment:** When task is complete, version TASK component MUST match Task number

**FR/BR Rule (This Repo - Updated):**

Every **Feature Request (FR)** and **Bug Report (BR)** MUST:

1. **Check for existing Story** that matches the FR/BR scope:
   - If found → create a **new Task document** under that Story
2. **If no suitable Story exists:**
   - Create a new Story under the **appropriate Epic**
   - Then create the **Task document** under that Story
3. **If no suitable Epic exists:**
   - Create or identify a broad, abstract Epic to host the new Story
   - Then create the Story under that Epic
   - Then create the **Task document** under that Story

**CRITICAL:** No FR/BR should exist without a corresponding **Task document** anchored to a Story (and, once epics are in use, an Epic). This ensures that all work flowing into the dev kit is **Task / FR-driven** and anchored in the Kanban system.

---

## 4. Board Usage Rules

1. **Single Source of Truth:**  
   - The board at `docs/project-management/kanban/_index.md` is the **canonical quick view** of active stories for this repo.
   - The detailed board at `docs/project-management/kanban/kboard.md` provides full context.
   - Each row in the board must map to exactly one Story file in `kanban/epics/Epic-X/stories/`.

2. **Status Field:**  
   - Use `TODO`, `In Progress`, or `Done` in the board’s `Status` column.
   - Keep the Story file’s internal `Status` field in sync with the board.

3. **Story Creation Flow:**
   1. **Ensure Epic exists:**
      - If Epic doesn't exist, create `docs/project-management/kanban/epics/Epic-X.md` and `Epic-X/` directory
      - Create `Epic-X/stories/` subdirectory
   2. **Create Story file:**
      - `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-short-slug.md`
      - Story directory allows for associated files (diagrams, notes, etc.) as needed
   3. **Update Epic doc:**
      - Add Story reference to Epic's Story Checklist
   4. **Update board views:**
      - Add row to `_index.md` (quick view)
      - Update `kboard.md` (detailed view) with Story details

4. **Updates:**
   - When you change a Story’s status or owner, update **both**:
     - The Story file, and
     - The board row in `_index.md`.

---

## 5. Relationship to the Kanban Framework Package

**CRITICAL:** The framework policy (`packages/frameworks/kanban/policies/kanban-governance-policy.md`) is the **CANONICAL SOURCE OF TRUTH** for all Kanban governance principles, operational patterns, and requirements.

This dev-kit policy is a **project-specific adaptation** that:
- References the framework policy as the authoritative source
- Documents dev-kit-specific structure and paths
- Clarifies how the framework applies to this repo

**Framework Policy Sections (Canonical SoT):**
- The Harmonious Cycle (Task → Version → RW → Kanban Update)
- FR/BR → Task → Story → Epic flow
- Board Structure
- Work Items (Epics, Stories, Tasks)
- Versioning (RC.EPIC.STORY.TASK+BUILD schema)
- Task-Level Requirements
- Release Workflow
- **Operational Principles** (NEW - added in v0.4.1.1+3):
  - Atomic Release Workflow Behaviour
  - "ALL Sections" Update Requirement
  - Accessibility Constraints
  - Forensic Marker Standardization
  - Consistency Requirements
  - Review Schedules
  - Maintenance Responsibilities
  - Escalation Procedures
  - Mandatory TODO Tracking
- Documentation requirements
- Rules (traceability, SoT, gate conditions, numbering, WIP)
- Templates & References

**This Repo's Implementation:**
- Uses **full Kanban + Versioning + Workflow stack**
- Story + Task checklists as primary work items
- Canonical board in `docs/project-management/kanban/_index.md`
- All substantive work is Task/FR-driven
- Epics for major areas of the dev kit
- `E\{epic\}:S\{story\}:T\{task\}` numbering for Tasks (e.g., `E1:S01:T01`, `E2:S04:T05`)
- Full `RC.EPIC.STORY.TASK+BUILD` alignment between Kanban and versioning

**Framework References:**
- **Canonical Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` ⭐
- **Integration Guides:**
  - `packages/frameworks/kanban/integration/numbering-versioning-integration.md`
  - `packages/frameworks/kanban/integration/workflow-management-integration.md`
- **Templates:**
  - `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
  - `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

---

## 5.5. Abstract Spaces for Forensic Traceability

**CRITICAL:** Zero-numbered E/S/T documentation establishes the **abstract space** for forensic traceability, serving as the canonical anchor before any functional work is committed.

**Purpose:**
- Establish canonical version anchor for E/S/T documentation
- Begin forensic traceability arc at documentation creation
- Provide clear SOP for committing initial E/S/T docs
- Link Kanban documentation lifecycle to versioning schema

### Zero-Numbered E/S/T Documentation

Abstract spaces use `+0` build number to indicate documentation-only anchor:

**Epic-Level Abstract Space:**
- Format: `0.\{EPIC\}.0.0+0`
- Example: `0.3.0.0+0` = Epic 3's abstract space
- Purpose: Establishes forensic traceability anchor for Epic 3
- When: Created when Epic document is first committed

**Story-Level Abstract Space:**
- Format: `0.\{EPIC\}.\{STORY\}.0+0`
- Example: `0.2.5.0+0` = Epic 2 Story 5's abstract space
- Purpose: Establishes forensic traceability anchor for Story 5 within Epic 2
- When: Created when Story document is first committed

**Task-Level Abstract Space:**
- Format: `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`
- Example: `0.10.4.6+0` = Epic 10 Story 4 Task 6's abstract space
- Purpose: Establishes forensic traceability anchor for Task 6 within Story 4 within Epic 10
- When: Created when Task document is first committed

**Relationship to Functional Work:**
- Abstract space (`+0`) = Documentation-only anchor (establishes traceability)
- Functional work (`+1` and beyond) = Actual implementation (builds on anchor)
- Example progression:
  - `0.4.11.1+0` = Task document created (abstract space)
  - `0.4.11.1+1` = First functional change for Task 1
  - `0.4.11.1+2` = Second functional change for Task 1

**See:** Dev-Kit Versioning Policy section "Abstract Space Version Schema" for complementary versioning schema details.

### SOP for Committing Initial E/S/T Docs

**When to Commit Abstract Space:**
- **Before any functional work** on the E/S/T
- **When creating new Epic/Story/Task documentation**
- **As part of documentation setup phase**

**Where to Commit:**
- **Epic:** `docs/project-management/kanban/epics/Epic-X/Epic-X.md`
- **Story:** `docs/project-management/kanban/epics/Epic-X/Story-XXX-*.md`
- **Task:** `docs/project-management/kanban/epics/Epic-X/Story-XXX/Task-YYY-*.md` OR delimited section within Story

**How to Commit:**
1. **Create E/S/T document** with required structure and fields
2. **Set version to abstract space** (`+0` build):
   - Epic: `0.\{EPIC\}.0.0+0`
   - Story: `0.\{EPIC\}.\{STORY\}.0+0`
   - Task: `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`
3. **Commit via Release Workflow (RW)** with doc-init path (see FR-017)
   - RW Step 1 detects docs-only change
   - RW Step 2 sets version to `+0` (abstract space)
   - RW Step 3 creates changelog entry with "Doc Init" type
4. **Alternative:** Manual commit with explicit version annotation
   - Commit message: `📋 Doc Init (Abstract Space): E\{epic\}:S\{story\}:T\{task\} - [Description]`
   - Version: Explicitly set to abstract space (`+0`)

**Validation:**
- Release Workflow validates abstract space version format
- Validators check that `+0` is only used for docs-only changes
- Validators ensure abstract space precedes functional work

**Related:**
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (implementation)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (this feature)
- **Dev-Kit Versioning Policy:** Abstract Space Version Schema (complementary section)

---

## 6. Versioning (This Repo)

This repo adopts the **RC.EPIC.STORY.TASK+BUILD** schema from the Numbering & Versioning framework, but with a dev-kit–specific interpretation to be finalised in `dev-kit-versioning-policy.md`:

- All releases are expressed as `RC.EPIC.STORY.TASK+BUILD`.
- Over time, each Task in Kanban will map to the `TASK` component of the version.
- Feature Requests and Bug Reports feed into Tasks, which then feed into versions (via Release Workflow) and documentation (via Kanban + RW integration).

Story 001 (“Set Up Kanban and Versioning for AI Dev Kit”) owns the work of:

- Defining the dev-kit epic/story/task ranges.
- Documenting the mapping between Kanban items and version components.
- Updating this policy once that mapping is locked in.

---

## 7. Next Steps

1. Finish **Story 001 – Set Up Kanban and Versioning for AI Dev Kit**:
   - Decide on a dev-kit versioning schema.
   - Document it under `docs/architecture/standards-and-adrs/`.
   - Update this policy to align with that schema.

2. As work grows:
   - Consider introducing Epics for major areas (e.g., “Kanban Framework”, “Workflow Framework”, “Book Manuscript”).
   - Use the templates in `packages/frameworks/kanban/templates/` as starting points.


