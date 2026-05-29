---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T23:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Update Kanban Workflow (UKW) - Agent Execution Guide

**Version:** 1.1.0  
**Last Updated:** 2026-01-22  
**Enhanced:** E5:S01:T34 - Added granular control via use case flags (`-u`, `-p`, `-a`) and flexible task targeting syntax  
**Related:** Epic 2 - Workflow Management Framework, Epic 4 - Kanban Framework

---

## 📖 Overview

The **Update Kanban Workflow (UKW)** is an intelligent agent-driven workflow that synchronizes all kanban documentation to reflect the current project state. Unlike the Release Workflow (RW) which updates kanban docs as part of releasing completed work, UKW comprehensively updates kanban docs to prevent status drift.

**🧠 Critical Intelligence Requirements:**

This workflow **requires significant agentic intelligence** at every step. This is NOT a deterministic script. Agents must:

- **Synthesize intelligently:** Transform raw task/story data into coherent, meaningful narratives (tactical/strategic overviews)
- **Infer status:** Deduce completion state from evidence (commits, FR/BR/UXRs, file changes, acceptance criteria)
- **Prioritize strategically:** Classify tasks using MoSCOW methodology based on goals, dependencies, impact, deadlines, and strategic context
- **Understand context:** Grasp relationships, dependencies, goals, and strategic context across the project
- **Write narratives:** Create natural, readable summaries that capture progress and tell a coherent story
- **Validate consistency:** Detect contradictions and misalignments across the document hierarchy

**Key Principle:** Bottom-up approach - Update Tasks → Stories → Epics → Board (in that order). The MoSCOW priority list is updated LAST.

**Trigger:** User types "UKW" or "ukw" (case-insensitive), with optional flags:
- `UKW` (no flags) = **Comprehensive run** (all operations: bookkeeping + update priorities + assign priorities)
- `UKW -u` = Bookkeeping sub-workflow only (restrict scope)
- `UKW -p` = Update priorities sub-workflow only (restrict scope)
- `UKW -a <target>` = Assign priorities sub-workflow only (restrict scope)
- Flags can combine: `UKW -u -p`, `UKW -u -a <target>`, etc. (restrict to specified sub-workflows)

**Use Case Flags (limit scope when present):**
- `-u` (bookkeeping): Restrict to bookkeeping sub-workflow only
- `-p` (update priorities): Restrict to update priorities sub-workflow only
- `-a` (assign priorities): Restrict to assign priorities sub-workflow only

**Task Targeting Syntax (for `-a` flag):**
- Single task: `E09S01T01`, `e9s1t1`, `E09:S01:T01`
- Multiple tasks: `E09S01T01,E08S02T11`
- Linear range: `E09S01T01-E09S01T06`
- Story: `E09S01`, `e9s1`
- Epic: `E09`, `e9`
- All unprioritized: `all`, `*`

---

## 🎯 Purpose

**Why UKW Exists:**
- **Status Drift Prevention:** Kanban documentation can drift from actual project state
- **Comprehensive Sync:** Updates all kanban docs, not just those touched by releases
- **Recent Activity Detection:** Considers recent commits, BR/FR/UXRs that may not have triggered releases
- **Bottom-Up Accuracy:** Ensures lower-level status correctly flows up the hierarchy

**When to Use UKW:**
- **Comprehensive (`UKW` no flags):** After major project changes, periodic full sync, when kanban docs need complete refresh (recommended default)
- **Bookkeeping (`UKW -u`):** Lightweight sync—after creating new epics/stories/tasks, when board needs sorting/organization only
- **Update Priorities (`UKW -p`):** When goals/dependencies/deadlines change and MoSCOW list needs refresh (no bookkeeping)
- **Assign Priorities (`UKW -a <target>`):** When specific tasks need priorities assigned (targeted, no bookkeeping)

**Relationship to RW:**
- **RW:** Updates kanban docs as part of releasing completed work
- **UKW:** Comprehensive sync regardless of release status
- Both workflows should be used together for complete kanban accuracy

### FR-077 transition ownership contract

- UKW does not invent task lifecycle transitions without evidence.
- Task document status is authoritative for lifecycle state (`TODO`, `IN PROGRESS`, `COMPLETE`).
- UKW propagates authoritative task-doc state to board views.
- If UKW finds board/task-doc mismatch, it must reconcile board to task-doc status in the same update session.

### Invocation context (FR-038 / RW Step 7)

UKW behaviour depends on **how** it is invoked. Use this conceptual flag when reasoning about scope (there is no separate CLI flag yet; context is implicit).

| Context | When | Scope and behaviour |
|--------|------|---------------------|
| **`rw_step_7`** | Release Workflow **Step 7 — Scoped Kanban Sync (UKW Mode)** (agent-driven) | **Scoped** to the release’s Epic/Story/Task and directly related docs/board lines. **Conservative** MoSCOW: only **new or newly significant** tasks get priority churn; do **not** re-sort the entire board. Bottom-up: Task → Story → Epic → board for that slice. |
| **`standalone`** | User types **`UKW`** / **`ukw`** with optional **`-u`**, **`-p`**, **`-a`** (see [.cursorrules](../../../../../../.cursorrules) UKW section) | **Full** UKW: bookkeeping, narrative synthesis, and MoSCOW as defined for the chosen flags — may touch the whole board and all relevant docs. |

**FR-038:R04:** In `rw_step_7`, treat MoSCOW and board-wide prioritisation as **narrow**; reserve whole-board reprioritisation for `standalone` **`-p`** / comprehensive runs.

**Cross-reference:** RW Step 7 specification: [Release Workflow Agent Execution — Step 7](release-workflow-agent-execution.md#step-7-scoped-kanban-sync-ukw-mode).

**🔄 UKW → RW Integration (Wiring):**

After completing UKW, users typically run RW to commit the kanban documentation updates. The relationship between UKW and the perpetual task is established through wiring:

- **Wiring Established in UKW Step 1:** UKW discovers and wires itself to the project's perpetual UKW task
  - UKW Step 1 searches for task with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
  - UKW extracts the task's Epic/Story/Task ID (e.g., E6:S06:T08, E4:S03:T05, etc.)
  - **Wiring:** UKW establishes relationship to this task ID for this project instance
- **RW Uses Wired Task:** When RW runs after UKW:
  - **UKW Context Detection:** RW Step 2 detects UKW context (user ran "UKW" then "RW")
  - **Uses Wired Task ID:** RW uses the perpetual task ID that UKW wired in Step 1
  - **Same Relationship, Different ID per Project:** Each project instance wires UKW to its own perpetual task (different E/S/T ID)
- **Version Pattern:** UKW releases use the wired perpetual task's version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = UKW run count
- **Build Warning Suppression:** Perpetual tasks have `perpetual_task: true` flag, so high BUILD numbers are expected and valid

**Wiring Example (ai-dev-kit):**
- UKW Step 1: Searches tasks → Finds E6:S06:T08 with `perpetual_task: true`
- UKW wires itself to E6:S06:T08
- When RW runs after UKW, it uses the wired task ID (E6:S06:T08)
- Version: `v0.6.6.8+{N}`

**Wiring Example (other project):**
- UKW Step 1: Searches tasks → Finds E4:S03:T05 with `perpetual_task: true`
- UKW wires itself to E4:S03:T05
- When RW runs after UKW, it uses the wired task ID (E4:S03:T05)
- Version: `v0.4.3.5+{N}`

**Perpetual Task Pattern:**
- Projects should create a perpetual UKW task for UKW release attribution
- **Wiring Required:** Task must have `perpetual_task: true` or `Task Type: Perpetual Maintenance` in task document (UKW uses this to wire)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (wired in UKW Step 1)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as UKW runs (expected and valid)

---

## 📋 Workflow Steps

**Step Execution Based on Flags:**
- **Comprehensive (no flags):** All steps including Step 2.5 (gap discovery: TODO tasks not on board, open FRs/BRs without tasks)
- **Bookkeeping (`-u` only):** Steps 1-5, 7-9 (skip Step 2.5, skip Step 6 MoSCOW prioritization)
- **Update Priorities (`-p` only):** Step 6 only (update MoSCOW priorities)
- **Assign Priorities (`-a <target>` only):** Step 6 only (assign priorities to targets)
- **Combined flags:** Run specified sub-workflows only (Step 2.5 runs only when comprehensive)

**Flag Parsing (Before Step 1):**
1. Parse user command for flags (`-u`, `-p`, `-a`)
2. Parse target specification if `-a` flag present (use `ukw_syntax_parser.py` or equivalent logic)
3. Determine which steps to execute based on flags
4. Document execution plan: "UKW executing with flags: {flags}, operations: {operations}"

### Step 1: Identify Perpetual UKW Task (Wiring Step)

**Purpose:** Discover and wire UKW to the project's perpetual UKW task. This establishes the relationship between the UKW workflow instance and the task that will receive UKW release attributions.

**Agent Execution:**

1. **ANALYZE:**
   - Load config: Read `rw-config.yaml` if exists and `use_kanban: true`
   - Determine task document pattern from config or defaults
   - Understand that each project instance has its own perpetual UKW task with its own E/S/T ID
   - Need to find the task that has the perpetual UKW responsibility

2. **DETERMINE:**
   - Search strategy: Iterate through all task documents looking for perpetual task flag
   - Criteria: Task document must have `perpetual_task: true` or `Task Type: Perpetual Maintenance`
   - May also check task name/description for "UKW" or "Update Kanban Workflow"
   - Extract Epic/Story/Task ID from discovered task document

3. **EXECUTE:**
   - Search all task documents using pattern: `{kanban_root}/{task_doc_pattern}`
   - Read each task document looking for:
     - `perpetual_task: true` in frontmatter or metadata
     - `Task Type: Perpetual Maintenance` in document
     - Task name/description mentioning "UKW" or "Update Kanban Workflow"
   - When found, extract task's Epic/Story/Task ID from document path or Task ID field
   - **Establish Wiring:** Store task ID as the perpetual UKW task for this project instance
   - Document wiring: "UKW wired to perpetual task E{X}:S{Y}:T{Z}"

4. **VALIDATE:**
   - Perpetual UKW task found
   - Task ID extracted correctly
   - Wiring established and documented

5. **PROCEED:**
   - Document discovered perpetual task ID
   - Store task ID for RW attribution (when user runs RW after UKW)
   - Move to Step 2

**Output:** Perpetual UKW task ID (e.g., E6:S06:T08, E4:S03:T05) - this is the task that RW will use when UKW context is detected.

**Important:** The task ID discovered here is project-specific. Each project instance wires UKW to its own perpetual task. The wiring is established each time UKW runs, ensuring UKW is always aware of which task to use for release attribution.

---

### Step 2: Analyze Recent Activity

**Purpose:** Identify recent changes that may affect kanban status

**Agent Execution:**

1. **ANALYZE:**
   - Load config: Read `rw-config.yaml` if exists and `use_kanban: true`
   - Determine git history window: Default 7 days, or from config
   - Identify kanban directory structure
   - **Recent Commits:**
     - Run `git log --since="7 days ago" --oneline --all`
     - Parse commit messages for Epic/Story/Task identifiers (E4:S13:T06, etc.)
     - Map commits to kanban documents
   - **Recent FR/BR/UXRs:**
     - List files in `{kanban_root}/fr-br/` sorted by modification date
     - Check last 7 days (or configured window)
     - Extract Epic/Story/Task links from FR/BR/UXR files
   - **File Changes:**
     - Check `git status` for modified kanban files
     - Identify which documents changed outside of RW

2. **DETERMINE:**
   - Which tasks may have been completed (based on commit patterns)
   - Which stories may need status updates (based on task completion)
   - Which epics may need status updates (based on story completion)
   - Recent BR/FR/UXRs that may indicate task completion
   - Files changed that need review

3. **EXECUTE:**
   - Collect commit history
   - Collect FR/BR/UXR file list
   - Map commits/FRs/BRs to kanban documents
   - Create activity summary

4. **VALIDATE:**
   - Activity analysis complete
   - Relevant changes identified
   - No critical information missed

5. **PROCEED:**
   - Document findings
   - Pass activity summary to Step 2

**Output:** Activity summary with:
- List of potentially completed tasks
- List of stories needing review
- List of epics needing review
- Recent FR/BR/UXRs affecting kanban

---

### Step 2.5: Discover Board Gaps (Comprehensive Run Only)

**Purpose:** Identify (a) TODO/IN PROGRESS tasks missing from the Kanban board, and (b) open FRs/BRs without linked tasks. Add missing tasks to the board; for FRs/BRs without tasks, present a formatted list and seek user intention.

**Runs:** Only when UKW is invoked with **no flags** (comprehensive run). Skipped for `-u`, `-p`, `-a` only.

**Agent Execution:**

**Part (a) – TODO Tasks Not on Board:**

1. **ANALYZE:**
   - Scan all task documents for tasks with status TODO or IN PROGRESS
   - Extract task IDs (E{X}:S{Y}:T{Z}) and metadata (priority, summary)
   - Read Kanban board MoSCOW section and epic sections
   - Build list of all task IDs currently on the board

2. **DETERMINE:**
   - Which TODO/IN PROGRESS tasks are NOT in the board list
   - Appropriate MoSCOW category and priority for each missing task

3. **EXECUTE:**
   - Add each missing task to the Kanban board (MoSCOW section with appropriate M/S/C/O classification)
   - If task has linked FR/BR, include reference

4. **OUTPUT:** Document which tasks were added

**Part (b) – Open FRs/BRs Without Tasks:**

1. **ANALYZE:**
   - Scan `{kanban_root}/fr-br/` for FR and BR documents
   - Extract Status (OPEN, PENDING, REOPENED, Proposed, IN PROGRESS, INTAKE)
   - Cross-reference with Kanban board and story task checklists
   - Identify FRs/BRs that have no linked task (no E{X}:S{Y}:T{Z} in board or story checklists)

2. **DETERMINE:**
   - List of open FRs/BRs without tasks

3. **EXECUTE – Present Formatted List:**
   - Output a table to the user, for example:

   | Item | Status | On board? |
   |------|--------|-----------|
   | FR-042 (IPW) | OPEN | ❌ No task |
   | FR-038 (RW Step 7 scoped) | PENDING | ❌ No reference |
   | BR-002 (Changelog validator) | REOPENED | ❌ E2:S01:T06 exists but not in MoSCOW |
   | ... | ... | ... |

4. **SEEK USER INTENTION:**
   - Ask: "Leave as is, or file tasks for any of these? If filing, specify which items."
   - Pause for user response
   - If user says "leave as is": Document decision, proceed
   - If user specifies items to file: Create tasks per Kanban governance (create task docs, add to story checklists, wire bidirectional FR/BR ↔ task, add to board)

5. **PROCEED:**
   - Document outcome (tasks added, user decision on FRs/BRs)
   - Pass to Step 3

**Output:** (a) List of tasks added to board; (b) formatted FR/BR gap list presented to user; user intention captured; tasks filed if requested.

---

### Step 3: Update Task Documents

**Purpose:** Update all task documents to reflect current state

**Agent Execution:**

1. **ANALYZE:**
   - **For each task document:**
     - Read task document from pattern: `{kanban_root}/{task_doc_pattern}`
     - Read current task status
     - Check recent commits mentioning this task
     - Check related BR/FR/UXR status
     - Review task acceptance criteria
     - Compare with recent file changes

2. **DETERMINE:**
   - **Status Updates:**
     - TODO → IN PROGRESS: If work started (commits, file changes)
     - IN PROGRESS → COMPLETE: If acceptance criteria met
     - COMPLETE → (no change): Already complete
   - **Date Updates:**
     - Update "Last updated" date if status changed
   - **Forensic Markers:**
     - Add forensic marker if task completed (check version file for current version)
   - **Description Updates:**
     - Update task description if acceptance criteria changed or met

3. **EXECUTE:**
   - Update task status fields
   - Update "Last updated" dates
   - Add forensic markers for completed tasks (format: `✅ COMPLETE (vRC.E.S.T+B)`)
   - Update task descriptions if needed

4. **VALIDATE:**
   - Task status aligns with recent activity
   - Task documents reflect current state
   - Forensic markers accurate

5. **PROCEED:**
   - Document updated tasks
   - Pass task status summary to Step 3

**Key Rules:**
- Only update if there's evidence of change (commits, FR/BR updates, file changes)
- Don't mark tasks complete without evidence
- Forensic markers must use current version from version file
- Preserve existing forensic markers

---

### Step 4: Update Story Documents

**Purpose:** Synthesize task data intelligently and update story documents

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - **For each story document:**
     - Read story document from pattern: `{kanban_root}/{story_doc_pattern}`
     - Read all task documents in this story
     - **Intelligently analyze task completion patterns:**
       - Identify themes and accomplishments across completed tasks
       - Recognize progress toward story goals (not just task count)
       - Understand blockers or issues from task context
       - Assess overall story trajectory
     - **Infer story-level status:** Determine status based on task completion AND story acceptance criteria/goals
       - Not just counting tasks - requires understanding story purpose
     - Check story acceptance criteria and assess if truly met
     - Review tactical overview section for context
     - Understand story relationship to epic goals

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
   - **Story Status (requires intelligent assessment):**
     - TODO → IN PROGRESS: If work has meaningfully started (not just one task touched)
     - IN PROGRESS → COMPLETE: If story goals met AND all tasks complete AND acceptance criteria satisfied
     - COMPLETE → (no change): Already complete
     - Requires reasoning about story purpose, not just task checkboxes
   - **Task Checklist Updates:**
     - Update task checklist with completion markers from Step 2
     - Ensure all tasks listed
   - **Tactical Overview (requires intelligent synthesis):**
     - Transform task completion data into meaningful narrative
     - Highlight key accomplishments that matter to story goals
     - Note blockers or issues in context
     - Capture progress trajectory
     - Tell a coherent story of progress
   - **Date Updates:**
     - Update "Last updated" date
   - **Forensic Markers:**
     - Add forensic marker if story completed

3. **EXECUTE:**
   - Update story status field
   - Update task checklist (mark completed tasks)
   - **Sort task checklist numerically:** After updating task checklist, run sorting utility to ensure tasks are sorted numerically (T01, T02, T03, ...)
     - Run: `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py" --document-path "{story_path}"`
     - This ensures task checklist maintains numerical order
   - **Write tactical overview (🧠 REQUIRES INTELLIGENT WRITING):**
     - Create natural, readable narrative that synthesizes task progress
     - Example: "Story has made significant progress with three core tasks completed: authentication framework implemented, user roles defined, and access control tested. Current work focuses on integration testing and edge case handling. One blocker identified: third-party API rate limits require coordination with vendor."
     - NOT just: "Tasks T01, T02, T03 complete. T04, T05 in progress."
     - Capture what was accomplished, why it matters, current focus, and challenges
   - Update "Last updated" date
   - Add forensic markers for completed stories

4. **VALIDATE:**
   - Story status matches task completion state AND story goals
   - Task checklist accurate and complete
   - Tactical overview is meaningful narrative (not just task list)
   - Overview captures progress and context intelligently
   - No contradictions between story status and task status

5. **PROCEED:**
   - Document updated stories
   - Pass story status summary to Step 4

**Key Rules:**
- **Synthesize intelligently** - Transform raw task data into coherent narrative
- Tactical overview must be meaningful summary, not detailed task list
- Story status requires understanding story purpose, not just counting tasks
- Preserve existing forensic markers
- Write naturally - overview should read like a progress report, not a checklist

---

### Step 5: Update Epic Documents

**Purpose:** Synthesize story data intelligently and update epic documents

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - **For each epic document:**
     - Read epic document from pattern: `{kanban_root}/{epic_doc_pattern}`
     - Read all story documents in this epic
     - **Intelligently analyze story completion patterns:**
       - Identify strategic achievements and themes across completed stories
       - Recognize progress toward epic goals (not just story count)
       - Understand epic-level blockers or strategic challenges
       - Assess overall epic trajectory and strategic value
     - **Infer epic-level status:** Determine status based on story completion AND epic goals
       - Not just counting stories - requires understanding epic strategic purpose
     - Check epic goals/acceptance criteria and assess progress
     - Review strategic overview section for context
     - Understand epic relationship to project vision

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
   - **Epic Status (requires intelligent assessment):**
     - TODO → IN PROGRESS: If strategic work has meaningfully started
     - IN PROGRESS → COMPLETE: If epic goals met AND all stories complete AND strategic objectives achieved
     - COMPLETE → (no change): Already complete
     - Requires reasoning about epic strategic purpose, not just story checkboxes
   - **Story Checklist Updates:**
     - Update story checklist with completion markers from Step 3
     - Ensure all stories listed
   - **Strategic Overview (requires intelligent synthesis):**
     - Transform story completion data into high-level strategic narrative
     - Highlight key strategic achievements
     - Note strategic blockers or opportunities
     - Capture strategic progress trajectory
     - Tell a coherent story of strategic progress
   - **Date Updates:**
     - Update "Last updated" date

3. **EXECUTE:**
   - Update epic status field
   - Update story checklist (mark completed stories)
   - **Write strategic overview (🧠 REQUIRES INTELLIGENT WRITING):**
     - Create natural, readable narrative that synthesizes story progress at strategic level
     - Example: "Epic has achieved major milestones with authentication and authorization frameworks fully implemented across three completed stories. The foundational security infrastructure is now in place, enabling the next phase of user management features. Strategic focus shifting to integration and scalability concerns. One strategic blocker: pending vendor security audit may require architectural adjustments."
     - NOT just: "Stories S01, S02, S03 complete. S04, S05 in progress."
     - Capture what was strategically accomplished, why it matters, current strategic focus, and challenges
   - Update "Last updated" date

4. **VALIDATE:**
   - Epic status matches story completion state AND epic goals
   - Story checklist accurate and complete
   - Strategic overview is meaningful narrative (not just story list)
   - Overview captures strategic progress and context intelligently
   - No contradictions between epic status and story status

5. **PROCEED:**
   - Document updated epics
   - Pass epic status summary to Step 5

**Key Rules:**
- **Synthesize intelligently** - Transform raw story data into coherent strategic narrative
- Strategic overview must be high-level strategic summary, not detailed story list
- Epic status requires understanding epic strategic purpose, not just counting stories
- Write naturally - overview should read like a strategic progress report, not a checklist
- Focus on strategic value, not tactical details

---

### Step 6: Update Kanban Board

**Purpose:** Update the main kanban board, with MoSCOW list LAST (requires intelligent prioritization)

**Agent Execution:**

1. **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
   - Read kanban board: `{kanban_root}/{kanban_board}`
   - Compare with updated Epic/Story/Task documents from Steps 2-4
   - Identify MoSCOW priority sections
   - Check epic summaries in board
   - Review "Last updated" date
   - **Understand prioritization context:**
     - Project goals and strategic objectives
     - Task dependencies and blocking relationships
     - Deadlines and time constraints
     - Impact and value delivery potential
     - Resource constraints and availability
     - Risk factors and mitigation needs
     - Strategic alignment with epic/project goals

2. **DETERMINE (🧠 INTELLIGENCE REQUIRED - PRIORITIZATION):**
   - **MoSCOW Priority Classification (UPDATE LAST):**
     - Identify all in-progress tasks (status: IN PROGRESS or TODO)
     - **Intelligently classify each task into MoSCOW category:**
       - **Must Have (M):** Critical for project success, blocks other work, required for release, core functionality
       - **Should Have (S):** Important but not critical, high value, should be included if possible
       - **Could Have (C):** Nice to have, lower priority, can be deferred
       - **Ongoing (O):** Perpetual maintenance tasks that never complete (e.g., workflow maintenance, changelog management). Tracked but don't block other work.
       - **Won't Have (W):** Explicitly deferred, out of scope for current cycle
     - **Prioritization requires analysis of:**
       - Which tasks block other work (dependencies)
       - Which tasks deliver highest value/impact
       - Which tasks are time-sensitive (deadlines)
       - Which tasks align with current strategic focus
       - Risk assessment (what happens if not done)
     - **For MUST HAVE (M):** Apply stack/queue ordering per Kanban governance policy: bug-based/breaking tasks → add to top (stack, work top-first); all other M tasks → add to end (queue, work front-first). Classify each M task as bug-based/breaking or other and place accordingly.
     - **For S/C/O/W:** Order within each section chronologically (most recently updated first)
     - Remove completed tasks from "In Progress" sections
     - Add new in-progress tasks to appropriate sections
   - **Epic Status Sections:**
     - Update epic status in board
     - Update epic story lists
     - Update epic progress counts
   - **Board Metadata:**
     - Update "Last updated" date
     - Update version (if needed)

3. **EXECUTE:**
   - **FIRST: Update Epic Sections (WITH NUMERICAL SORTING):**
     - **CRITICAL: Sort epics numerically** (E1, E2, E3, ... E21, E24) before writing to board
       - **Use sorting utility:** Run `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py"` to automatically sort epics
       - **Manual sorting:** If utility unavailable, sort epics manually: canonical (1-23) first, then project-specific (24+)
     - **CRITICAL: Sort stories numerically** within each epic section (S01, S02, S03, ...)
     - **CRITICAL: Sort tasks numerically** within each story section (T01, T02, T03, ...)
     - Update epic status indicators
     - Update epic story lists with completion markers (sorted numerically)
     - Update epic progress counts
   - **THEN: Update MoSCOW Priority List (LAST - 🧠 REQUIRES INTELLIGENT PRIORITIZATION):**
     - **For each in-progress task, intelligently classify:**
       - Analyze task context, dependencies, impact, deadlines
       - Assign to appropriate MoSCOW category
       - Don't just copy existing priority - reassess based on current state
     - Rebuild Must Have (M) section with tasks classified as critical; order using stack/queue: bug-based/breaking tasks at top (stack), other M tasks at end (queue). See Kanban governance policy "Task prioritisation and MUST HAVE ordering".
     - Rebuild Should Have (S) section with tasks classified as important
     - Rebuild Could Have (C) section with tasks classified as nice-to-have
     - Rebuild Won't Have (W) section with explicitly deferred tasks
     - Order M section by stack/queue; order S/C/O/W chronologically within each section (most recent first)
   - Update board "Last updated" date
   - Update board version if needed

4. **VALIDATE:**
   - MoSCOW classifications are strategically sound and consistent
   - Priorities align with project goals and strategic context
   - MoSCOW list matches current in-progress tasks
   - Epic summaries match epic documents
   - All links valid
   - Tasks ordered correctly (most recent first)

5. **PROCEED:**
   - Document board updates and prioritization rationale
   - Pass to Step 6

### Step 6.5: fbuboard Reconciliation and Drift Guard

**Purpose:** Keep `fbuboard.md` aligned with FR/BR/UXR source-of-truth docs using deterministic cleanup and safe writes.

**Agent Execution:**

1. **ANALYZE:**
   - Read active MoSCOW sections (`Must`, `Should`, `Could`, `Ongoing`) in fbuboard.
   - Resolve each row's linked `fr-br/*.md` source document.
   - Parse source `**Status:**` for terminal vs non-terminal state.

2. **DETERMINE:**
   - **Prune rule:** remove active rows whose linked source status is terminal (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`).
   - **Exception rule:** keep row active if status explicitly indicates unresolved verification context (e.g., includes `IN PROGRESS`, `UNVERIFIED`, `PENDING VERIFICATION`).
   - **Board Stamp Authority (FR-097):** preserve existing row `| Last modified: … UTC` on hygiene (STRUCTURE-only). Align board `Last Updated` metadata only. Snapshot at UKW start; run `validate_board_stamp_diff.py` before stage — abort on un evidenced stamp deltas.
   - **MoSCOW state icons (UXR-012):** preserve icons on hygiene-only passes; add or change icons only when the row’s **status token** changes. Corpus enforcement: `validate_kanban_state_icons.py` (Release Readiness Gate 9). See [`state-icons.md`](state-icons.md).

3. **EXECUTE:**
   - Apply deterministic row cleanup and timestamp normalization.
   - Perform pre-write concurrency revalidation:
     - If file changed since initial read, re-read latest content and re-apply cleanup/transforms before writing.

4. **VALIDATE:**
   - No stale terminal-status rows remain in active sections.
   - Exception rows that are intentionally unresolved remain active.
   - Header/row timestamps are consistent.

5. **PROCEED:**
   - Report reconciliation stats: audited rows, rows removed, exceptions kept, timestamps normalized, and whether concurrency revalidation was triggered.

**Key Rules:**
- **CRITICAL: MoSCOW list is updated LAST** (after all other board updates)
- **CRITICAL: Numerical Sorting Required** - Epics, stories, and tasks must be sorted numerically:
  - Epics: E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E21, E24 (canonical 1-23, then project-specific 24+)
  - Stories: S01, S02, S03, ... (within each epic)
  - Tasks: T01, T02, T03, ... (within each story)
- **Sorting Utilities:**
  - **Kanban Board Sorting:** Use `packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py` to automatically sort epics and stories in the kanban board
    - Run after updating epic sections: `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_board.py"`
    - Script automatically detects board path from `rw-config.yaml` or uses default
    - Use `--dry-run` to preview sorting without making changes
  - **Document Checklist Sorting:** Use `packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py` to sort checklists in story/epic documents
    - Run after updating task checklists in story documents: `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py" --document-path "{story_path}"`
    - Run after updating story checklists in epic documents: `python "packages/frameworks/workflow mgt/scripts/kanban/sort_kanban_document_checklists.py" --document-path "{epic_path}"`
    - Use `--dry-run` to preview sorting without making changes
- **Prioritization requires intelligence** - analyze context, not just copy existing
- **MUST HAVE ordering:** Use stack (bug-based/breaking at top) and queue (other M tasks at end) per Kanban governance policy; ordering is agent-defined when UKW runs
- Only include tasks with status IN PROGRESS or TODO
- Order M section by stack/queue; order S/C/O/W chronologically within MoSCOW sections
- Remove completed tasks from "In Progress" sections
- Epic summaries must match epic documents exactly
- MoSCOW classification must be strategically sound

---

### Step 7: Validate Consistency

**Purpose:** Ensure all kanban documents are consistent

**Agent Execution:**

1. **ANALYZE:**
   - Cross-reference task status → story status → epic status
   - Check version marker consistency
   - Verify link integrity
   - Check for contradictions

2. **DETERMINE:**
   - Status alignment issues
   - Version inconsistencies
   - Broken links
   - Contradictions

3. **EXECUTE:**
   - Check task status matches story task checklist
   - Check story status matches epic story checklist
   - Verify version markers consistent across documents
   - Check all internal links resolve correctly
   - Identify any contradictions

4. **VALIDATE:**
   - All documents consistent
   - No contradictions found
   - Links valid

5. **PROCEED:**
   - Document validation results
   - Report any issues found
   - Move to Step 7

**Key Checks:**
- Task marked complete in story checklist → Task document shows COMPLETE
- Story marked complete in epic checklist → Story document shows COMPLETE
- Epic status matches story completion state
- Version markers align across documents
- All links resolve

---

### Step 8: Stage Files

**Purpose:** Stage all modified kanban files for commit

**Agent Execution:**

1. **ANALYZE:**
   - Identify all modified kanban files
   - Check git status

2. **DETERMINE:**
   - Files to stage (all kanban files)

3. **EXECUTE:**
   - Run `git add {kanban_root}/**/*.md`
   - Verify files staged

4. **VALIDATE:**
   - Files staged successfully
   - No errors

5. **PROCEED:**
   - Document staged files
   - Move to Step 8

---

### Step 9: Document Changes

**Purpose:** Create summary of all changes made

**Agent Execution:**

1. **ANALYZE:**
   - Review all changes from Steps 2-5
   - Collect summary statistics

2. **DETERMINE:**
   - Summary format
   - Key changes to highlight

3. **EXECUTE:**
   - Create summary:
     - Number of tasks updated
     - Number of stories updated
     - Number of epics updated
     - Key status changes
     - MoSCOW list updates
   - List updated documents

4. **VALIDATE:**
   - Summary complete
   - All key changes documented

5. **PROCEED:**
   - Present summary to user
   - Workflow complete
   - **Note:** After UKW, user typically runs RW to commit kanban documentation updates. RW will detect UKW context and auto-attribute to perpetual UKW task (see "UKW → RW Integration" section above).

---

## 🔑 Key Principles

1. **Bottom-Up Approach:** Always update Tasks → Stories → Epics → Board
2. **MoSCOW List Last:** The MoSCOW priority list in kanban board is updated LAST
3. **🧠 Intelligent Synthesis:** Story/Epic updates require intelligent synthesis of lower-level data into meaningful narratives (NOT just copying or listing)
4. **🧠 Intelligent Status Inference:** Status updates require reasoning about completion state and goals, not just counting checkboxes
5. **🧠 Strategic Prioritization:** MoSCOW classification requires understanding goals, dependencies, impact, deadlines, and strategic context
6. **Meaningful Narratives:** Tactical/strategic overviews must be natural, readable summaries that capture progress and context
7. **Status Consistency:** Ensure status flows correctly up the hierarchy with intelligent validation
8. **Evidence-Based:** Only update status if there's evidence (commits, FR/BR, file changes)
9. **Preserve Markers:** Don't remove existing forensic markers
10. **Chronological Ordering:** Order tasks within MoSCOW sections by last updated date

**🧠 Intelligence is Not Optional:**

This workflow fundamentally requires agentic intelligence. Each step involves:
- **Analysis:** Understanding context, relationships, and goals
- **Synthesis:** Transforming raw data into coherent narratives
- **Inference:** Deducing status from evidence
- **Prioritization:** Making strategic decisions about importance
- **Writing:** Creating natural, meaningful summaries

Without intelligent reasoning, this workflow cannot produce meaningful results.

---

## 📚 Related Documentation

- **Workflow Definition:** `workflows/update-kanban-workflow.yaml`
- **Cursor Rules:** `cursorrules-ukw-trigger-section.md`
- **Release Workflow:** `release-workflow-agent-execution.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This workflow ensures kanban documentation accurately reflects project state, preventing status drift._

