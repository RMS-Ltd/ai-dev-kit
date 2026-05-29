---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T23:10:00Z
expires_at: null
housekeeping_policy: keep
---

# Cursor Rules: UKW Trigger Section

**Purpose:** This section should be added to your project's `.cursorrules` file to enable the "UKW" trigger for Update Kanban Workflow execution.

**Location in `.cursorrules`:** Add this section in the "Version Control and Release Process" section (or equivalent), after the RW trigger section.

**Last Updated:** 2025-12-17  
**Source Project:** ai-dev-kit  
**Version:** 1.0.0

---

### 🔄 UPDATE KANBAN WORKFLOW (UKW) TRIGGER

**When the user types "UKW" or "ukw" (case-insensitive), execute the Update Kanban Workflow as an intelligent agent:**

1. **DO NOT** run any deterministic scripts
2. **DO** execute the Update Kanban Workflow using the **intelligent agent-driven execution pattern**
3. **🧠 AGENTIC INTELLIGENCE REQUIRED:** This workflow requires significant intelligent reasoning:
   - **Synthesis:** Analyze multiple data points and create coherent tactical/strategic summaries
   - **Narrative Updates:** Write natural, meaningful summaries that capture progress and context
   - **Prioritization:** Determine MoSCOW priorities based on project goals, dependencies, and impact
   - **Status Inference:** Intelligently infer task/story status from commits, FR/BR/UXRs, and file changes
   - **Consistency Analysis:** Detect contradictions and align status across hierarchy
   - **Context Understanding:** Understand project state, goals, and relationships between work items
4. **LOAD CONFIG FIRST (MANDATORY):** Before Step 1, load `rw-config.yaml` from project root if it exists and `use_kanban: true`. Use config values for kanban paths. If config doesn't exist, use default paths.
5. **Follow** the step-by-step guide below using **BOTTOM-UP APPROACH**
6. **Execute all steps** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern with **intelligent reasoning at each step**
7. **Document** each step's analysis, reasoning, decisions, actions, and results
8. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking all 9 steps

**🔧 Config-Driven Approach (Preferred):**

If `rw-config.yaml` exists in project root and `use_kanban: true`, **MUST** load it and use its values:
- `kanban_root` → Use for Kanban root directory
- `epic_doc_pattern` → Use for epic document pattern
- `story_doc_pattern` → Use for story document pattern
- `kanban_board` → Use for kanban board file path
- `fr_br_root` → Use for FR/BR root (if specified)

**Default Paths (if config not available):**
- `kanban_root`: `docs/project-management/kanban`
- `epic_doc_pattern`: `epics/Epic-{epic}/Epic-{epic}.md`
- `story_doc_pattern`: `epics/Epic-{epic}/Story-{story}-*.md`
- `task_doc_pattern`: `epics/Epic-{epic}/Story-{story}/T{task}-*.md`
- `kanban_board`: `kboard.md`
- `fr_br_root`: `fr-br`

**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for all 9 UKW steps:

1. **At Workflow Start:** Create TODO list with all 8 steps as `pending`
2. **Before Each Step:** Mark step as `in_progress`
3. **After Each Step:** Mark step as `completed` and mark next step as `in_progress`
4. **On Completion:** All steps marked as `completed`

**Agent Execution Pattern:**

For each step, follow this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

**The 8 Steps (Bottom-Up Approach):**

1. **Analyze Recent Activity** - **MANDATORY FIRST STEP:**
   - **ANALYZE:**
     - Check git commit history for last 7 days (or configured days)
     - Scan FR/BR/UXR directory for recent files
     - Identify file changes in kanban directories
     - Map commits to Epic/Story/Task identifiers
   - **DETERMINE:**
     - Which tasks may have been completed
     - Which stories may need status updates
     - Which epics may need status updates
     - Recent BR/FR/UXRs that may affect task status
   - **EXECUTE:**
     - Run `git log --since="7 days ago" --oneline` (or configured days)
     - List recent FR/BR/UXR files by modification date
     - Identify changed kanban documents
   - **VALIDATE:**
     - Activity analysis complete
     - Relevant changes identified
   - **PROCEED:**
     - Document findings
     - Move to Step 2

3. **Update Task Documents** - **BOTTOM-UP STEP 1:**
   - **ANALYZE:**
     - For each task document in kanban structure:
       - Read current task status
       - Compare with recent commits (task completion indicators)
       - Check related BR/FR/UXR status
       - Review task acceptance criteria vs recent changes
   - **DETERMINE:**
     - Which tasks should be marked COMPLETE
     - Which tasks need status updates (TODO → IN PROGRESS, etc.)
     - Which tasks need "Last updated" date updates
     - Which tasks need forensic markers added
   - **EXECUTE:**
     - Update task document status fields
     - Update "Last updated" dates
     - Add forensic markers if tasks completed
     - Update task descriptions if acceptance criteria met
   - **VALIDATE:**
     - Task status aligns with recent activity
     - Task documents reflect current state
   - **PROCEED:**
     - Document updated tasks
     - Move to Step 3

4. **Update Story Documents** - **BOTTOM-UP STEP 2:**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - For each story document:
       - Read all task documents in story
       - **Synthesize intelligently:** Analyze task completion patterns, identify key accomplishments, understand blockers, recognize progress themes
       - **Infer story status:** Determine story-level status based on task completion state AND story goals (not just counting tasks)
       - Check story acceptance criteria and assess if met
       - Understand story context and relationship to epic goals
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - Story status (TODO → IN PROGRESS → COMPLETE) - requires intelligent assessment, not just task counting
     - Task checklist updates needed
     - **Tactical overview updates:** Create meaningful narrative that synthesizes task progress into coherent story progression (NOT just listing tasks)
     - Story "Last updated" date
   - **EXECUTE:**
     - Update story status field
     - Update task checklist with completion markers
     - **Write tactical overview:** Create natural, readable summary that captures:
       - Key accomplishments from completed tasks
       - Current work in progress
       - Blockers or issues identified
       - Progress toward story goals
       - Strategic context within epic
     - Update "Last updated" date
     - Add forensic markers if story completed
   - **VALIDATE:**
     - Story status matches task completion state AND story goals
     - Task checklist accurate
     - Tactical overview is meaningful narrative, not just task list
     - Overview reflects current progress and context
   - **PROCEED:**
     - Document updated stories
     - Move to Step 4

5. **Update Epic Documents** - **BOTTOM-UP STEP 3:**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - For each epic document:
       - Read all story documents in epic
       - **Synthesize intelligently:** Analyze story completion patterns, identify strategic achievements, understand epic-level blockers, recognize thematic progress
       - **Infer epic status:** Determine epic-level status based on story completion AND epic goals (not just counting stories)
       - Check epic goals/acceptance criteria and assess progress
       - Understand epic strategic context within project
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - Epic status (TODO → IN PROGRESS → COMPLETE) - requires intelligent assessment of strategic progress
     - Story checklist updates needed
     - **Strategic overview updates:** Create high-level narrative that synthesizes story progress into coherent epic progression (NOT just listing stories)
     - Epic "Last updated" date
   - **EXECUTE:**
     - Update epic status field
     - Update story checklist with completion markers
     - **Write strategic overview:** Create natural, readable summary that captures:
       - Key strategic achievements from completed stories
       - Current strategic initiatives in progress
       - Epic-level blockers or strategic challenges
       - Progress toward epic goals
       - Strategic context within project vision
     - Update "Last updated" date
   - **VALIDATE:**
     - Epic status matches story completion state AND epic goals
     - Story checklist accurate
     - Strategic overview is meaningful narrative, not just story list
     - Overview reflects strategic progress and context
   - **PROCEED:**
     - Document updated epics
     - Move to Step 5

6. **Update Kanban Board** - **BOTTOM-UP STEP 4 (FINAL):**
   - **ANALYZE (🧠 INTELLIGENCE REQUIRED):**
     - Read current kanban board
     - Compare with updated Epic/Story/Task documents
     - Identify MoSCOW priority sections
     - Check epic summaries
     - **Understand prioritization context:** Analyze project goals, dependencies, deadlines, impact, and strategic importance
   - **DETERMINE (🧠 INTELLIGENCE REQUIRED):**
     - **MoSCOW priority classification:** Intelligently determine Must Have (M), Should Have (S), Could Have (C), Ongoing (O), Won't Have (W) based on:
       - Project goals and strategic importance
       - Dependencies and blocking relationships
       - Deadlines and time constraints
       - Impact and value delivery
       - Resource constraints
       - Risk assessment
     - Epic status updates
     - Story summaries in epic sections
     - "Last updated" date for board
   - **EXECUTE — Part A: Remove and archive completed tasks (MANDATORY — runs before classification):**
     1. Scan every MoSCOW section in `kboard.md` for tasks whose status is `COMPLETE` or `DONE`
     2. For each completed task found (process all instances across all sections):
        - Remove its entry line from `kboard.md`
        - Write one archive entry to `kanban-completed.md` — do not write duplicate entries if the same task ID appeared in multiple sections
        - Archive entry format: `**[E#:S#:T##](path/to/task.md)** — [FR/BR ref] [description]; **[FR/BR link](fr-br/...)** STATUS.  **Completed:** \`YYYY-MM-DDTHH:MM:SSZ\` | **Version:** \`vX.X.X.X+N\` | **Agent:** \`UKW\``
     3. Deduplication pass: scan all remaining MoSCOW sections for any task ID that still appears more than once; retain the entry in the highest-priority section (Must Have > Should Have > Could Have > Ongoing > Won't Have) and remove the others
     4. Update `kanban-completed.md` "Last Updated" header with current timestamp and completed task reference(s)
   - **EXECUTE — Part B: Update MoSCOW priority list (🧠 REQUIRES INTELLIGENT PRIORITIZATION — runs after Part A):**
     - **Classify tasks intelligently:** Assign each remaining in-progress task to appropriate MoSCOW category based on strategic analysis (not just copying from existing)
     - Add new in-progress tasks to appropriate MoSCOW sections
     - Order tasks within each section chronologically (most recently updated first)
     - Update epic status sections
     - Update epic story lists
     - Update board "Last updated" date and version
   - **VALIDATE:**
     - `kboard.md` contains no tasks with status `COMPLETE` or `DONE`
     - No task ID appears in more than one MoSCOW section
     - `kanban-completed.md` has been updated with entries for all removed tasks
     - MoSCOW classifications are strategically sound and consistent
     - MoSCOW list matches current in-progress tasks only
     - Epic summaries match epic documents
     - All links valid
   - **PROCEED:**
     - Document board updates and prioritization rationale
     - Move to Step 6

7. **Validate Consistency** - **MANDATORY VALIDATION STEP:**
   - **ANALYZE:**
     - Compare status across all kanban documents
     - Check version consistency
     - Verify link integrity
   - **DETERMINE:**
     - Status alignment issues
     - Version inconsistencies
     - Broken links
   - **EXECUTE:**
     - Cross-reference task status → story status → epic status
     - Verify version markers consistency
     - Check all internal links
   - **VALIDATE:**
     - All documents consistent
     - No contradictions
   - **PROCEED:**
     - Document validation results
     - Move to Step 7

8. **Stage Files** - **GIT OPERATION:**
   - **ANALYZE:**
     - Identify all modified kanban files
   - **DETERMINE:**
     - Files to stage
   - **EXECUTE:**
     - Run `git add` for all kanban files
   - **VALIDATE:**
     - Files staged successfully
   - **PROCEED:**
     - Document staged files
     - Move to Step 8

9. **Document Changes** - **FINAL STEP:**
   - **ANALYZE:**
     - Review all changes made
   - **DETERMINE:**
     - Summary of updates
   - **EXECUTE:**
     - Create summary of updated documents
     - List key status changes
   - **VALIDATE:**
     - Summary complete
   - **PROCEED:**
     - Present summary to user
     - Workflow complete
     - **Note:** After UKW, user typically runs RW to commit kanban documentation updates. RW will detect UKW context and auto-attribute to perpetual UKW task.

**🔄 UKW → RW Integration (Wiring):**

**Important:** After completing UKW, the user typically runs RW to commit the kanban documentation updates. The relationship between UKW and the perpetual task is established through wiring:

- **Wiring Established in UKW Step 1:** UKW discovers and wires itself to the project's perpetual UKW task
  - UKW Step 1 searches for task with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
  - UKW extracts the task's Epic/Story/Task ID (e.g., E6:S06:T08, E4:S03:T05, etc.)
  - **Wiring:** UKW establishes relationship to this task ID for this project instance
- **RW Uses Wired Task:** When RW runs after UKW:
  - **UKW Context Detection:** RW Step 2 detects UKW context (user ran "UKW" then "RW")
  - **Uses Wired Task ID:** RW uses the perpetual task ID that UKW wired in Step 1
  - **Same Relationship, Different ID per Project:** Each project instance wires UKW to its own perpetual task (different E/S/T ID)
- **Version Pattern:** UKW releases use the wired perpetual task's version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = UKW run count
- **Build Warning Suppression:** Perpetual tasks have `perpetual_task: true` flag, so high BUILD numbers are expected and valid (no warnings)

**Wiring Example (ai-dev-kit):**
1. UKW Step 1: Searches tasks → Finds E6:S06:T08 with `perpetual_task: true`
2. UKW wires itself to E6:S06:T08
3. User runs "RW" → RW detects UKW context
4. RW uses wired task ID (E6:S06:T08) → Version: `v0.6.6.8+{N}`

**Wiring Example (other project):**
1. UKW Step 1: Searches tasks → Finds E4:S03:T05 with `perpetual_task: true`
2. UKW wires itself to E4:S03:T05
3. User runs "RW" → RW detects UKW context
4. RW uses wired task ID (E4:S03:T05) → Version: `v0.4.3.5+{N}`

**Perpetual Task Pattern:**
- Projects should create a perpetual UKW task for UKW release attribution
- **Wiring Required:** Task must have `perpetual_task: true` or `Task Type: Perpetual Maintenance` in task document (UKW uses this to wire)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (wired in UKW Step 1)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as UKW runs (expected and valid)

**🔑 Key Principles:**

1. **Bottom-Up Approach:** Always update Tasks → Stories → Epics → Board (in that order)
2. **MoSCOW List Last:** The MoSCOW priority list in the kanban board is the LAST thing to update
3. **Synthesize Intelligently, Don't Duplicate:** Story/Epic updates require intelligent synthesis of lower-level data into meaningful narratives, not just copying task/story lists
4. **Intelligent Status Inference:** Status updates require reasoning about completion state, not just counting checkboxes
5. **Strategic Prioritization:** MoSCOW classification requires understanding of goals, dependencies, impact, and strategic context
6. **Meaningful Narratives:** Tactical/strategic overviews must be natural, readable summaries that capture progress and context
7. **Status Consistency:** Ensure status flows correctly up the hierarchy with intelligent validation
8. **Consider Recent Activity:** Always check recent commits and FR/BR/UXRs to detect status changes

**🧠 Intelligence Requirements:**

- **Synthesis:** Transform raw task/story data into coherent, meaningful narratives
- **Inference:** Deduce status from evidence (commits, FR/BR/UXRs, file changes, acceptance criteria)
- **Prioritization:** Classify tasks by strategic importance, not just existing labels
- **Context Understanding:** Understand relationships, dependencies, goals, and strategic context
- **Narrative Writing:** Create natural, readable summaries that capture progress and tell a story
- **Consistency Analysis:** Detect contradictions and misalignments across documents

**📋 Workflow YAML:**

The workflow definition is located at:
- `packages/frameworks/workflow mgt/workflows/update-kanban-workflow/update-kanban-workflow.yaml`

**📚 Related Documentation:**

- Release Workflow (RW): Updates kanban docs as part of release process
- UKW: Standalone workflow for comprehensive kanban sync
- Kanban Governance Policy: `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

_This trigger enables comprehensive kanban documentation synchronization to prevent status drift between kanban docs and actual project state._

