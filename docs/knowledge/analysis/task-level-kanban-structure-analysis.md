---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task-Level Kanban Structure Analysis

**Purpose:** Comprehensive task-level analysis across all projects to inform the "ultimate" canonical Epic/Story/Task structure  
**Analysis Date:** 2025-12-17  
**Status:** IN PROGRESS  
**Version:** 1.0.0

---

## Executive Summary

This document provides **detailed task-level analysis** of Kanban structures across all analyzed projects. Without this granular data, we cannot determine the "ultimate" canonical E/S/T structure.

**Key Questions Addressed:**
1. What task naming conventions exist across projects?
2. How are tasks organized (separate files vs embedded)?
3. What task structure details exist (fields, sections, metadata)?
4. What patterns emerge for task checklists, status tracking, and dependencies?
5. What is the "ultimate" canonical structure based on real-world usage?

---

## 1. Task Naming Conventions Analysis

### 1.1 Naming Format Patterns

**Pattern 1: Full Context Format (Most Common)**
- **Format:** `E\{epic\}:S\{story\}:T\{task\}`
- **Examples:**
  - `E20:S08:T01` (been-there - 2-digit task)
  - `E20:S04:T20` (confidentia - 2-digit task)
  - `E16:S01:T001` (fynd.deals - 3-digit task)
  - `E15:S02:T063` (starborn_legacy - 3-digit task)
- **Projects Using:** been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit
- **Frequency:** Most common pattern

**Pattern 2: Standalone Task Format (Less Common)**
- **Format:** `T\{task\}` or `T\{task\}-\{description\}`
- **Examples:**
  - `T001`, `T002` (fynd.deals - in some contexts)
  - `T01`, `T02` (standalone references)
- **Projects Using:** fynd.deals (mixed usage)
- **Frequency:** Less common, often in checklist contexts

**Pattern 3: File Naming Format**
- **Format:** `Task-\{task\}-\{description\}.md` or `T\{task\}-\{description\}.md`
- **Examples:**
  - `Task-001-update-kanban-policy.md` (ADK templates)
  - `T01-Define-Project-Structure.md` (ADK templates)
- **Projects Using:** ADK templates (recommended format)
- **Frequency:** Template format, not always used in practice

### 1.2 Task Number Padding

**2-Digit Padding:**
- **Format:** `T01`, `T02`, `T10`, `T20`
- **Projects Using:** been-there, confidentia, ai-dev-kit (current policy)
- **Examples:**
  - `E20:S08:T01` (been-there)
  - `E20:S04:T20` (confidentia)
- **Frequency:** Common in newer projects

**3-Digit Padding:**
- **Format:** `T001`, `T002`, `T010`, `T063`
- **Projects Using:** fynd.deals, starborn_legacy, dev-toolkit
- **Examples:**
  - `E16:S01:T001` (fynd.deals)
  - `E15:S02:T063` (starborn_legacy)
- **Frequency:** Common in older projects

**No Padding:**
- **Format:** `T1`, `T2`, `T10`
- **Projects Using:** None found (not recommended)
- **Frequency:** Rare/not found

### 1.3 Task ID Context Requirements

**Full Context Required (ADK Policy):**
- **Format:** `E\{epic\}:S\{story\}:T\{task\}` (always include Epic and Story)
- **Policy:** Tasks are NEVER referenced as standalone `Txxx` or `Txx`
- **Rationale:** Ensures traceability and prevents ambiguity
- **Projects Following:** ai-dev-kit (policy), been-there (mostly), confidentia (mostly)

**Standalone Allowed:**
- **Format:** `T\{task\}` (within Story context)
- **Usage:** In checklists within Story documents
- **Projects Using:** fynd.deals (mixed), starborn_legacy (in some contexts)
- **Rationale:** Shorter format when context is clear

### 1.4 Naming Convention Summary

| Project | Format | Padding | Context Required | Notes |
|---------|--------|---------|------------------|-------|
| been-there | `E20:S08:T01` | 2-digit | Mostly | Follows ADK policy |
| confidentia | `E20:S04:T20` | 2-digit | Mostly | Follows ADK policy |
| fynd.deals | `E16:S01:T001` | 3-digit | Mixed | Sometimes standalone `T001` |
| starborn_legacy | `E15:S02:T063` | 3-digit | Mostly | High task numbers (T063) |
| dev-toolkit | `E1:S05:T01` | 2-digit | Yes | Follows ADK policy |
| ai-dev-kit | `E4:S11:T01` | 2-digit | Yes | Policy: always full context |

**Recommendation:** Use 2-digit padding with full context (`E\{epic\}:S\{story\}:T\{task\}`) as canonical format.

---

## 2. Task Organization Patterns

### 2.1 Separate File Organization

**Pattern: Tasks as Separate Files**
- **Location:** `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md` or `TYYY-description.md`
- **Structure:** Each task has its own markdown file
- **Projects Using:** ADK templates (recommended), some tasks in ai-dev-kit
- **Example:** `packages/frameworks/kanban/templates/tasks/Epic-1/Story-1/T01-Define-Project-Structure.md`
- **Frequency:** Recommended but not always used in practice

**Advantages:**
- Clear separation of concerns
- Easy to reference individual tasks
- Better for large tasks with extensive documentation
- Supports task-level versioning

**Disadvantages:**
- More files to manage
- Can fragment related work
- Requires consistent file organization

### 2.2 Embedded Task Organization

**Pattern: Tasks Embedded in Story Documents**
- **Location:** Within Story markdown file, using Task ID as header
- **Structure:** `### E\{epic\}:S\{story\}:T\{task\} – Task Name` followed by task content
- **Projects Using:** been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit (most common)
- **Example:** Tasks listed in Story document with detailed sections
- **Frequency:** Most common pattern in practice

**Advantages:**
- All story context in one place
- Easier to see story-level progress
- Less file management overhead
- Natural grouping of related tasks

**Disadvantages:**
- Can make Story documents very long
- Harder to reference individual tasks
- Less granular versioning
- Can become unwieldy with many tasks

### 2.3 Checklist-Only Organization

**Pattern: Tasks as Checklist Items Only**
- **Location:** Task checklist in Epic or Story document
- **Structure:** `- [x] E20:S08:T01 – Description ✅ COMPLETE (v0.20.8.1+1)`
- **Projects Using:** All projects (for high-level tracking)
- **Example:** Epic-level task checklists
- **Frequency:** Universal (used alongside other patterns)

**Advantages:**
- Quick overview of task status
- Easy to scan progress
- Lightweight tracking

**Disadvantages:**
- No detailed task documentation
- Limited task-level information
- Not suitable for complex tasks

### 2.4 Hybrid Organization

**Pattern: Checklist + Embedded Details**
- **Location:** Task checklist in Story document, with detailed sections below
- **Structure:** Checklist at top, detailed task sections below
- **Projects Using:** confidentia, fynd.deals, starborn_legacy
- **Example:** `Story-4-Test-Coverage-and-Quality-Improvements.md` (confidentia)
- **Frequency:** Common pattern

**Advantages:**
- Best of both worlds
- Quick overview + detailed documentation
- Flexible for different task sizes

**Disadvantages:**
- Can become very long documents
- Requires discipline to maintain structure

### 2.5 Organization Pattern Summary

| Pattern | Projects Using | Frequency | Recommendation |
|---------|----------------|-----------|----------------|
| Separate Files | ADK templates | Low (recommended but not used) | ✅ Recommended for large/complex tasks |
| Embedded in Story | All projects | High (most common) | ✅ Acceptable for most tasks |
| Checklist Only | All projects | Universal | ✅ For high-level tracking |
| Hybrid | confidentia, fynd.deals, starborn_legacy | Medium | ✅ Best practice for complex stories |

**Recommendation:** Support both patterns:
- **Small/Simple Tasks:** Embedded in Story document
- **Large/Complex Tasks:** Separate files
- **Always:** Task checklist for quick overview

---

## 3. Task Structure Details

### 3.1 Required Task Fields

**ADK Policy Required Fields:**
1. **Task ID:** `E\{epic\}:S\{story\}:T\{task\}` (e.g., `E4:S11:T01`)
2. **Scope:** Clear description of what the task accomplishes
3. **Acceptance Criteria:** Measurable criteria for task completion
4. **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
5. **Version Anchor:** Version marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
6. **Completion Date:** Date when task was completed (if applicable)
7. **Related BR/FR Links:** Links to related Bug Reports or Feature Requests
8. **Input:** What is required to start this task
9. **Deliverable:** What is produced by this task

**Real-World Usage Analysis:**

**been-there Pattern:**
```markdown
### E20:S08:T01 – Configure Firebase for been-there app

**Input:** Firebase project (needs to be created or configured)  
**Deliverable:** `lib/firebase_options.dart` file with Firebase configuration  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe

**Approach:**
1. Check if Firebase project exists or needs to be created
2. Install FlutterFire CLI if not already installed
3. Run `flutterfire configure` to generate `firebase_options.dart`
4. Verify Firebase initialization in `main.dart` works correctly
5. Test Firebase connection (optional: verify analytics/crashlytics)

**Acceptance Criteria:**
- [ ] `lib/firebase_options.dart` file exists
- [ ] Firebase initializes without errors in `main.dart`
- [ ] App can start without Firebase-related crashes
- [ ] Firebase configuration is properly gitignored (if contains secrets)
```

**confidentia Pattern:**
```markdown
- [x] **E20:S04:T01 – Identify gaps in test coverage** ✅ COMPLETE (v0.20.11.16)
  - **Input:** Current test suite, coverage reports, codebase analysis
  - **Deliverable:** Report identifying test coverage gaps, critical paths without tests, and areas needing improvement
  - **Dependencies:** None
  - **Blocker:** None
  - **Parallel Development Candidacy:** Safe – analysis task, read-only
  - **Completed:** Coverage gap analysis complete (2025-11-25). Overall coverage: 3.11%...
```

**fynd.deals Pattern:**
```markdown
### E16:S01:T001 – Create template usage guidelines and enforcement

**Input:** Existing templates and documentation  
**Deliverable:** Template usage guidelines document  
**Dependencies:** Epic 15 (templates exist)  
**Blocker:** Epic 15 must be complete  
**Parallel Development Candidacy:** Can work independently

**Approach:**
1. Document template usage guidelines:
   - When to use templates (always for new docs)
   - Which template to use for each doc type
   - How to use templates (copy template, fill in placeholders)
   - What NOT to do (don't copy from existing docs)
2. Create enforcement mechanisms:
   - Code review checklist items
   - Pre-commit hooks (if applicable)
   - Documentation review process
3. Document anti-patterns:
   - Copying from existing docs (causes drift)
   - Modifying templates in place
   - Skipping template sections

**Files to Create/Modify:**
- `docs/fynd_deals/_design/documentation/TEMPLATE-USAGE-GUIDELINES.md` – Template usage guidelines
- `docs/fynd_deals/_design/documentation/TEMPLATE-ENFORCEMENT.md` – Enforcement mechanisms
```

### 3.2 Common Task Fields Across Projects

**Always Present:**
- Task ID/Name
- Status (TODO, IN PROGRESS, COMPLETE)
- Description/Scope

**Frequently Present:**
- Input (what's needed to start)
- Deliverable (what's produced)
- Dependencies (other tasks/epics)
- Acceptance Criteria
- Version Anchor (when complete)
- Approach/Method (how to do it)

**Occasionally Present:**
- Blocker (what's blocking this)
- Parallel Development Candidacy (can this be done in parallel?)
- Files to Create/Modify
- Progress Notes
- Completion Date
- Related BR/FR Links

### 3.3 Task Structure Patterns

**Pattern 1: Minimal (Checklist Only)**
- Task ID + Description + Status
- Used for: Simple tasks, high-level tracking
- Example: `- [x] E20:S08:T01 – Configure Firebase ✅ COMPLETE (v0.20.8.1+1)`

**Pattern 2: Standard (Common Fields)**
- Task ID + Description + Status
- Input + Deliverable
- Dependencies
- Acceptance Criteria
- Used for: Most tasks
- Example: been-there pattern

**Pattern 3: Comprehensive (All Fields)**
- All standard fields
- Approach/Method
- Blocker
- Parallel Development Candidacy
- Files to Create/Modify
- Progress Notes
- Used for: Complex tasks, critical work
- Example: fynd.deals pattern

### 3.4 Task Structure Summary

**Recommended Canonical Task Structure:**

```markdown
### E{epic}:S{story}:T{task} – Task Name

**Status:** [TODO | IN PROGRESS | COMPLETE]  
**Version:** [vRC.E.S.T+B when complete]

**Input:** What is required to start this task  
**Deliverable:** What is produced by this task  
**Dependencies:** [List of dependencies, if any]  
**Blocker:** [What's blocking this, if anything]  
**Parallel Development Candidacy:** [Safe | Requires Coordination | Blocked]

**Approach:**
1. Step 1
2. Step 2
3. Step 3

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

**Files to Create/Modify:**
- `path/to/file1.md`
- `path/to/file2.md`

**Progress Notes:**
[Optional: Progress updates, findings, decisions]
```

---

## 4. Task Checklist Patterns

### 4.1 Checklist Location

**In Epic Document:**
- High-level task tracking
- Shows all tasks across stories
- Example: `Epic-20.md` (been-there)

**In Story Document:**
- Story-level task tracking
- Most common location
- Example: All projects

**In Separate Task Board:**
- Centralized task tracking
- Less common
- Example: None found

### 4.2 Checklist Format Patterns

**Pattern 1: Simple Checklist**
```markdown
- [ ] E20:S08:T01 – Configure Firebase
- [ ] E20:S08:T02 – Install iOS Simulator runtime
- [x] E20:S08:T03 – Install Android SDK ✅ COMPLETE
```

**Pattern 2: Checklist with Status**
```markdown
- [x] **E20:S08:T01 – Configure Firebase** ✅ COMPLETE (v0.20.8.1+1)
- [ ] **E20:S08:T02 – Install iOS Simulator runtime**
- [ ] **E20:S08:T03 – Install Android SDK**
```

**Pattern 3: Detailed Checklist**
```markdown
- [x] **E20:S04:T01 – Identify gaps in test coverage** ✅ COMPLETE (v0.20.11.16)
- [x] **E20:S04:T02 – Add missing unit tests for critical paths** ✅ COMPLETE (v0.19.11.8+1)
- [x] **E20:S04:T03 – Improve test quality and maintainability** ✅ COMPLETE (v0.20.11.16)
```

### 4.3 Checklist Metadata

**Version Anchors:**
- Format: `✅ COMPLETE (vRC.E.S.T+B)`
- Purpose: Forensic traceability
- Usage: Universal when tasks are complete

**Status Indicators:**
- `✅ COMPLETE` - Task done
- `🔄 IN PROGRESS` - Task active
- `⏸️ PENDING` - Task blocked
- `[ ]` - Task not started

**Task Counts:**
- Format: `(1/4 tasks complete)`
- Purpose: Progress tracking
- Usage: Common in Epic/Story summaries

---

## 5. Task Status Tracking Patterns

### 5.1 Status Values

**Common Status Values:**
- `TODO` / `[ ]` - Not started
- `IN PROGRESS` / `🔄` - Active work
- `COMPLETE` / `✅` - Done
- `PENDING` / `⏸️` - Blocked
- `BLOCKED` - Cannot proceed

### 5.2 Status Tracking Methods

**Method 1: Checklist Checkbox**
- `[ ]` = TODO
- `[x]` = COMPLETE
- Most common method

**Method 2: Status Field**
- Explicit status field in task section
- More detailed status tracking
- Example: `**Status:** IN PROGRESS`

**Method 3: Version Anchor**
- Status implied by version presence
- `✅ COMPLETE (v0.20.8.1+1)` = Done
- No version = Not done

### 5.3 Status Update Patterns

**Pattern 1: Single Status Update**
- Status updated once when complete
- Simple tracking
- Common for small tasks

**Pattern 2: Progressive Status Updates**
- Status updated multiple times
- Progress notes added
- Common for complex tasks

**Pattern 3: Status with Progress Notes**
- Status + detailed progress notes
- Shows evolution of work
- Common in confidentia, fynd.deals

---

## 6. Task Dependency Patterns

### 6.1 Dependency Types

**Task Dependencies:**
- Format: `E20:S04:T01` (another task)
- Purpose: Task must complete before this one
- Usage: Common

**Story Dependencies:**
- Format: `E20:S04` (another story)
- Purpose: Story must complete before this task
- Usage: Less common

**Epic Dependencies:**
- Format: `Epic 15` (another epic)
- Purpose: Epic must complete before this task
- Usage: Rare

### 6.2 Dependency Representation

**Explicit Dependencies Field:**
```markdown
**Dependencies:** E20:S04:T01 ✅
```

**Implicit Dependencies:**
- Tasks listed in order
- Dependencies implied by sequence
- Common in simple stories

**Blocked By Field:**
```markdown
**Blocker:** E20:S04:T01 (must complete first)
```

### 6.3 Dependency Patterns Summary

**Most Common:**
- Task → Task dependencies
- Explicit dependencies field
- Dependencies marked complete when done

**Less Common:**
- Story → Task dependencies
- Epic → Task dependencies
- Implicit dependencies

---

## 7. Task Versioning Integration

### 7.1 Version Anchor Patterns

**Format 1: Full Version**
```markdown
✅ COMPLETE (v0.20.8.1+1)
```

**Format 2: Version in Status**
```markdown
**Status:** ✅ COMPLETE (v0.20.8.1+1)
```

**Format 3: Version in Checklist**
```markdown
- [x] E20:S08:T01 ✅ COMPLETE (v0.20.8.1+1)
```

### 7.2 Version Tracking Patterns

**Pattern 1: Single Version**
- One version when task completes
- Simple tracking
- Most common

**Pattern 2: Multiple Versions**
- Version updated as work progresses
- Shows incremental completion
- Less common

**Pattern 3: Version Range**
- Version range for task duration
- Shows when task started/ended
- Rare

### 7.3 Version Integration Summary

**Universal Pattern:**
- Version anchor when task completes
- Format: `✅ COMPLETE (vRC.E.S.T+B)`
- Purpose: Forensic traceability

**Variations:**
- Some projects include version in status field
- Some projects include version in checklist
- All projects use version anchors for completed tasks

---

## 8. Task Documentation Patterns

### 8.1 Documentation Depth

**Minimal Documentation:**
- Task ID + Description + Status
- Used for: Simple tasks
- Example: Checklist-only tasks

**Standard Documentation:**
- Task ID + Description + Status
- Input + Deliverable
- Dependencies + Acceptance Criteria
- Used for: Most tasks
- Example: been-there pattern

**Comprehensive Documentation:**
- All standard fields
- Approach/Method
- Progress Notes
- Files to Create/Modify
- Used for: Complex tasks
- Example: fynd.deals, confidentia patterns

### 8.2 Documentation Location

**In Story Document:**
- Tasks documented within Story file
- Most common pattern
- Easier to maintain context

**In Separate Task Files:**
- Each task has its own file
- Less common in practice
- Better for large tasks

**In Epic Document:**
- High-level task documentation
- Less common
- Used for epic-level tasks

---

## 9. Recommendations for "Ultimate" Canonical Structure

### 9.1 Task Naming Convention

**Recommended:**
- Format: `E\{epic\}:S\{story\}:T\{task\}` (always full context)
- Padding: 2-digit (`T01`, `T02`, `T10`, `T20`)
- Rationale: Ensures traceability, prevents ambiguity, supports up to 99 tasks per story

**File Naming:**
- Format: `T\{task\}-\{description\}.md` (for separate files)
- Example: `T01-Configure-Firebase.md`
- Rationale: Shorter file names, task number first for sorting

### 9.2 Task Organization

**Recommended: Hybrid Approach**
- **Small/Simple Tasks:** Embedded in Story document
- **Large/Complex Tasks:** Separate files in `Story-XXX/T\{task\}-*.md`
- **Always:** Task checklist in Story document for quick overview

**Rationale:**
- Flexibility for different task sizes
- Maintains context for related tasks
- Supports granular documentation when needed

### 9.3 Task Structure

**Recommended: Standard Task Structure**
```markdown
### E{epic}:S{story}:T{task} – Task Name

**Status:** [TODO | IN PROGRESS | COMPLETE]  
**Version:** [vRC.E.S.T+B when complete]

**Input:** What is required to start this task  
**Deliverable:** What is produced by this task  
**Dependencies:** [List of dependencies, if any]  
**Blocker:** [What's blocking this, if anything]  
**Parallel Development Candidacy:** [Safe | Requires Coordination | Blocked]

**Approach:**
1. Step 1
2. Step 2

**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Files to Create/Modify:**
- `path/to/file.md`

**Progress Notes:**
[Optional: Progress updates]
```

**Required Fields:**
- Task ID
- Status
- Input
- Deliverable
- Acceptance Criteria

**Optional Fields:**
- Dependencies
- Blocker
- Parallel Development Candidacy
- Approach
- Files to Create/Modify
- Progress Notes

### 9.4 Task Checklist

**Recommended: Story-Level Checklist**
```markdown
## Task Checklist

- [x] **E{epic}:S{story}:T{task} – Task Name** ✅ COMPLETE (vRC.E.S.T+B)
- [ ] **E{epic}:S{story}:T{task} – Task Name**
```

**Format:**
- Full task ID in checklist
- Status indicator
- Version anchor when complete
- Links to detailed task section

### 9.5 Task Status Tracking

**Recommended:**
- Checklist checkbox for quick status
- Status field in task section for detailed status
- Version anchor for completion tracking

**Status Values:**
- `TODO` / `[ ]` - Not started
- `IN PROGRESS` / `🔄` - Active
- `COMPLETE` / `✅` - Done
- `PENDING` / `⏸️` - Blocked

### 9.6 Task Versioning

**Recommended:**
- Version anchor when task completes
- Format: `✅ COMPLETE (vRC.E.S.T+B)`
- Required for forensic traceability
- Links task completion to specific version

---

## 10. Summary: "Ultimate" Canonical Task Structure

### 10.1 Naming Convention
- **Format:** `E\{epic\}:S\{story\}:T\{task\}` (always full context, 2-digit padding)
- **File Naming:** `T\{task\}-\{description\}.md` (for separate files)

### 10.2 Organization
- **Small Tasks:** Embedded in Story document
- **Large Tasks:** Separate files in `Story-XXX/T\{task\}-*.md`
- **Always:** Task checklist in Story document

### 10.3 Structure
- **Required Fields:** Task ID, Status, Input, Deliverable, Acceptance Criteria
- **Optional Fields:** Dependencies, Blocker, Parallel Development Candidacy, Approach, Files, Progress Notes

### 10.4 Status Tracking
- Checklist checkbox + Status field + Version anchor

### 10.5 Versioning
- Version anchor when complete: `✅ COMPLETE (vRC.E.S.T+B)`

---

**Analysis Completed:** 2025-12-17  
**Next Steps:** Use this analysis to finalize canonical E/S/T structure in ADK frameworks

