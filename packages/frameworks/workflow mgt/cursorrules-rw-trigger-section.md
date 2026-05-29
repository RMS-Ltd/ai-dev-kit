---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Cursor Rules: RW Trigger Section

**Purpose:** This section should be added to your project's `.cursorrules` file to enable the "RW" trigger for Release Workflow execution.

**Location in `.cursorrules`:** Add this section in the "Version Control and Release Process" section (or equivalent).

**Last Updated:** 2026-03-30  
**Source Project:** Originally fynd.deals (Epic 15, Story 1), now maintained in ai-dev-kit as canonical SoT  
**Version:** 2.4.0 (E5:S01:T66: FR-060 todo chain parity with root `.cursorrules`; see [docs/rw-trigger-dual-source-parity.md](docs/rw-trigger-dual-source-parity.md))

---

### 🚀 RELEASE WORKFLOW (RW) TRIGGER

**When the user types any of the following triggers (case-insensitive), execute the Release Workflow as an intelligent agent:**

- **"RW"** - Full Release Workflow (all 17 steps)
- **"RW -k"** - Initial Kanban Documentation Commit (documentation setup only)
- **"RW -d"** - Documentation-Only Release (documentation updates without full release cycle)

**Trigger Processing:**

1. **Parse Trigger Type:** Determine which workflow variant to execute
2. **LOAD CONFIG FIRST (MANDATORY):** Before Step 1, load `rw-config.yaml` from project root if it exists. This is the **single source of truth** for all project-specific paths. If config exists, use its values. If not, use placeholders/examples (backward compatibility).
3. **Select Execution Path:** Choose appropriate step sequence based on trigger type
4. **Follow** the step-by-step guide for selected path
5. **🚨 MANDATORY: Start with Step 1: Branch Safety Check** - This is a **MANDATORY BLOCKING STEP** that MUST run before any file modifications
   - **CRITICAL:** Step 1 MUST run `validate_branch_context.py --strict` and check exit code
   - **CRITICAL:** If Step 1 fails (non-zero exit code), **DO NOT PROCEED** to Step 2
   - **CRITICAL:** If Step 1 fails, mark all steps as `cancelled` and stop workflow immediately
   - **CRITICAL:** Do not skip, bypass, or ignore Step 1 validation
5b. **🚨 MANDATORY: Step 1b — RW task token required (FR-060 / E5:S01:T63)** — **After Step 1 passes**, **before any file modifications**
   - Parse the **same user message** as the RW trigger for `E…S…T…` (`RW E7S5T1`, `RW E7:S06:T01`, `RW -d E7S01T10`, `RW -k E6S6T03`, etc.).
   - **If no parseable token:** **RW ABORTED**. Do not run `validate_rw_task_intent.py` without `--requested` as a substitute. User must re-send with explicit task id (e.g. `RW E7:S01:T10`).
5c. **🚨 MANDATORY: Step 1c — RW task document releasable (FR-060)** — **After Step 1b passes**, **before any file modifications**
   - Run: `python "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested "<parsed_id>"`  
   - **Full RW releasable statuses:** `IN PROGRESS`, `COMPLETE`, or perpetual maintenance task.
   - For **`RW -k`**, add **`--mode rw-k`** (task doc must exist; status releasability checks are skipped in rw-k mode).
   - **Non-zero exit:** **RW ABORTED** (same severity as Step 1).
5d. **🚨 MANDATORY: Step 1d — RW Task Intent Guard (BR-056 / E6:S06:T56)** — **After Step 1c passes**, **before any file modifications**
   - Run: `python "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py" --requested "<parsed_id>"`  
   - For **`RW -k`**, add **`--mode rw-k`**: comparison against `version.py` is skipped so explicit init target does not false-block.
   - **`--art` is valid in all RW modes** (`RW`, `RW -d`, `RW -k`) to adopt the requested task as canonical release anchor.
   - **Non-zero exit:** **RW ABORTED**. User may re-run with `--confirmed-override` on this script after explicit confirmation.
   - **Overrides** generic “never stop” until intent is resolved (documented exception).
6. **Execute steps for selected path** using the ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern (only if Steps 1, 1b, 1c, and 1d pass)
7. **Document** each step's analysis, actions, and results
8. **MUST USE Cursor TODOs:** Create and maintain a TODO list tracking the steps for the selected path

**Execution Paths by Trigger Type:**

**RW (Full Release):** Steps 1-17 (complete release with Git operations, verification, PIR)

**RW -k (Kanban Init):** Steps [1, 2, 3, 4, 7, 11, 12] - Documentation setup only
- Step 7 modified: Only update changelog, version number, and Kanban docs
- Skip: Git push, verification, PIR, housekeeping

**RW -d (Documentation Only):** Steps [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14] - Documentation updates
- Skip: Git tag, push, PIR trigger, housekeeping  
- Step 14 optional: Agent determines if verification actions needed

**🔧 Config-Driven Approach (Preferred):**

If `rw-config.yaml` exists in project root, **MUST** load it and use its values for all paths:
- `version_file` → Use for version file path
- `main_changelog` → Use for main changelog path
- `changelog_dir` → Use for changelog archive directory
- `scripts_path` → Use for validation scripts path
- `readme_file` → Use for README path
- `kanban_root` → Use for Kanban root (if `use_kanban: true`)
- `epic_doc_pattern` → Use for epic document pattern (if Kanban enabled)
- `story_doc_pattern` → Use for story document pattern (if Kanban enabled)

**Loading Config Pattern:**
```python
# Load rw-config.yaml if it exists
from pathlib import Path
import yaml

config = None
config_path = Path("rw-config.yaml")
if config_path.exists():
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
    except Exception:
        pass  # Fall back to placeholders

# Use config values or fallback to defaults
version_file = config['version_file'] if config and 'version_file' in config else 'src/{project}/version.py'
main_changelog = config['main_changelog'] if config and 'main_changelog' in config else 'CHANGELOG.md'
changelog_dir = config['changelog_dir'] if config and 'changelog_dir' in config else 'docs/changelogs'
scripts_path = config['scripts_path'] if config and 'scripts_path' in config else 'scripts/validation'
readme_file = config['readme_file'] if config and 'readme_file' in config else 'README.md'
kanban_root = config.get('kanban_root', 'docs/project-management/kanban') if config and config.get('use_kanban') else None
```

**Backward Compatibility:**
- If `rw-config.yaml` doesn't exist, use placeholder patterns (`{project}`, `{kanban_path}`, etc.)
- This ensures RW works in projects that haven't run the installer yet

**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list for the steps in the selected execution path:

**Trigger-Specific Step Lists:**

**For "RW" (Full Release - 17 steps):**
```python
todo_write(merge=False, todos=[
    {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - MANDATORY: Run validate_branch_context.py --strict, stop if fails'},
    {'id': 'rw-step-1b', 'status': 'pending', 'content': 'Step 1b: Parse mandatory RW task token (FR-060 / E5:S01:T63) from user message; if absent, RW ABORTED'},
    {'id': 'rw-step-1c', 'status': 'pending', 'content': 'Step 1c: validate_rw_task_complete.py --requested "<parsed_id>" (add --mode rw-k only for RW -k trigger); stop if fails'},
    {'id': 'rw-step-1d', 'status': 'pending', 'content': 'Step 1d: validate_rw_task_intent.py --requested "<parsed_id>" (add --mode rw-k only for RW -k trigger); stop if fails'},
    {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Read Story file, identify completed task number, compare to current VERSION_TASK, determine if new task or same task, update version file, validate'},
    {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG with full timestamp'},
    {'id': 'rw-step-4', 'status': 'pending', 'content': 'Step 4: Update Main Changelog - Add summary entry'},
    {'id': 'rw-step-5', 'status': 'pending', 'content': 'Step 5: Update README - Update version badge and latest release'},
    {'id': 'rw-step-6', 'status': 'pending', 'content': 'Step 6: Update BR/FR Docs - Fix history, FR intake decisions, linked items'},
    {'id': 'rw-step-7', 'status': 'pending', 'content': 'Step 7: Scoped Kanban Sync (UKW Mode) - Task/Story/Epic/board for release E/S/T; UKW invocation_context rw_step_7 (FR-038)'},
    {'id': 'rw-step-8', 'status': 'pending', 'content': 'Step 8: Stage Files - git add -A'},
    {'id': 'rw-step-9', 'status': 'pending', 'content': 'Step 9: Run Validators - branch, changelog, version bump, RW task complete, etc.'},
    {'id': 'rw-step-9.5', 'status': 'pending', 'content': 'Step 9.5: Changelog Management Workflow (CMW) - Trigger CMW if changelog size exceeds threshold (optional, non-blocking)'},
    {'id': 'rw-step-9.6', 'status': 'pending', 'content': 'Step 9.6: Check IDE-Flagged Problems - errors, warnings, infos in modified files (recommended, non-blocking)'},
    {'id': 'rw-step-10', 'status': 'pending', 'content': 'Step 10: Commit Changes - Create git commit with versioned message'},
    {'id': 'rw-step-11', 'status': 'pending', 'content': 'Step 11: Create Git Tag - Internal + SemVer annotated tags'},
    {'id': 'rw-step-12', 'status': 'pending', 'content': 'Step 12: Push to Remote - Push branch and tags (with network permissions)'},
    {'id': 'rw-step-12.5', 'status': 'pending', 'content': 'Step 12.5: Create/Update GitHub Release (SemVer tag)'},
    {'id': 'rw-step-13', 'status': 'pending', 'content': 'Step 13: Post-Commit Verification, Housekeeping & Reflection - Verify release, perform housekeeping tasks, and reflect on process'},
    {'id': 'rw-step-14', 'status': 'pending', 'content': 'Step 14: Act on Verification Results - Address any issues found during verification'},
    {'id': 'rw-step-15', 'status': 'pending', 'content': 'Step 15: Check for PIR Trigger - Determine if Post-Implementation Review is needed'},
    {'id': 'rw-step-16', 'status': 'pending', 'content': 'Step 16: Housekeeping - Clean up temporary files and IDE todos'},
    {'id': 'rw-step-17', 'status': 'pending', 'content': 'Step 17: Complete - Final verification and cleanup'},
])
```

**For "RW -k" (Kanban Init - 7 steps):**
```python
todo_write(merge=False, todos=[
    {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - MANDATORY: Run validate_branch_context.py --strict, stop if fails'},
    {'id': 'rw-step-1b', 'status': 'pending', 'content': 'Step 1b: Parse mandatory RW task token (FR-060) from user message; if absent, RW ABORTED'},
    {'id': 'rw-step-1c', 'status': 'pending', 'content': 'Step 1c: validate_rw_task_complete.py --requested "<parsed_id>" --mode rw-k; stop if fails'},
    {'id': 'rw-step-1d', 'status': 'pending', 'content': 'Step 1d: validate_rw_task_intent.py --requested "<parsed_id>" --mode rw-k; stop if fails'},
    {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Update version file for Kanban documentation setup'},
    {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG for Kanban init'},
    {'id': 'rw-step-4', 'status': 'pending', 'content': 'Step 4: Update Main Changelog - Add summary entry for Kanban init'},
    {'id': 'rw-step-7', 'status': 'pending', 'content': 'Step 7: Scoped Kanban Sync (UKW Mode) / Kanban init - Update changelog, version number, and Kanban docs only'},
    {'id': 'rw-step-11', 'status': 'pending', 'content': 'Step 11: Commit Changes - Create git commit for Kanban documentation setup'},
    {'id': 'rw-step-12', 'status': 'pending', 'content': 'Step 12: Create Git Tag - Create tag for Kanban documentation setup'},
])
```

**For "RW -d" (Documentation Only - 13 steps):**
```python
todo_write(merge=False, todos=[
    {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - MANDATORY: Run validate_branch_context.py --strict, stop if fails'},
    {'id': 'rw-step-1b', 'status': 'pending', 'content': 'Step 1b: Parse mandatory RW task token (FR-060) from user message; if absent, RW ABORTED'},
    {'id': 'rw-step-1c', 'status': 'pending', 'content': 'Step 1c: validate_rw_task_complete.py --requested "<parsed_id>" (full mode for RW -d); stop if fails'},
    {'id': 'rw-step-1d', 'status': 'pending', 'content': 'Step 1d: validate_rw_task_intent.py --requested "<parsed_id>" (full mode for RW -d); stop if fails'},
    {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Update version file for documentation release'},
    {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG for documentation updates'},
    {'id': 'rw-step-4', 'status': 'pending', 'content': 'Step 4: Update Main Changelog - Add summary entry for documentation release'},
    {'id': 'rw-step-5', 'status': 'pending', 'content': 'Step 5: Update README - Update version badge and latest release'},
    {'id': 'rw-step-6', 'status': 'pending', 'content': 'Step 6: Update BR/FR Docs (if applicable)'},
    {'id': 'rw-step-7', 'status': 'pending', 'content': 'Step 7: Scoped Kanban Sync (UKW Mode) - Kanban docs for this release'},
    {'id': 'rw-step-8', 'status': 'pending', 'content': 'Step 8: Stage Files - Stage all modified files'},
    {'id': 'rw-step-9', 'status': 'pending', 'content': 'Step 9: Run Validators - Execute branch context and changelog format validators'},
    {'id': 'rw-step-9.6', 'status': 'pending', 'content': 'Step 9.6: Check IDE-Flagged Problems (recommended, non-blocking)'},
    {'id': 'rw-step-10', 'status': 'pending', 'content': 'Step 10: Commit Changes - Create git commit with versioned message'},
    {'id': 'rw-step-11', 'status': 'pending', 'content': 'Step 11: Post-Commit Verification & Reflection - Verify documentation release'},
    {'id': 'rw-step-14', 'status': 'pending', 'content': 'Step 14: Act on Verification Results - Address any issues found (optional, agent-determined)'},
])
```

2. **Before Each Step:** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'rw-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step:** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'rw-step-1', 'status': 'completed'},
       {'id': 'rw-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion:** All steps marked as `completed`

5. **🚨 CRITICAL: Step 1 Branch Safety Enforcement:**
   - **MANDATORY:** Step 1 MUST run `validate_branch_context.py --strict`
   - **MANDATORY:** If Step 1 fails (non-zero exit code), workflow MUST STOP immediately
   - **MANDATORY:** If Step 1 fails, mark ALL remaining steps as `cancelled`
   - **MANDATORY:** Do not modify any files if Step 1 fails
   - **MANDATORY:** Do not proceed to Step 2 if Step 1 fails
   - **Anti-Pattern:** Never skip, bypass, or ignore Step 1 validation
   - **Anti-Pattern:** Never proceed to Step 2 if validator returns non-zero exit code

6. **Atomicity & Blocking Behaviour (Accessibility-Critical):**

   - When the user types **`RW`**, the agent MUST either:
     - Run **all 14 steps (1–14)** to completion for the target version, OR
     - Stop at a **specific step** and clearly state:
       - The **step number and name** (e.g. "Step 1: Branch Safety Check" or "Step 8: Run Validators")
       - The **reason** it is blocked (e.g. wrong branch, missing tool, sandbox limitation)
       - The **exact action/commands** the user must run to unblock it
       - That **RW is NOT complete** until those actions are taken and the agent resumes

   - The agent MUST NOT:
     - Silently stop mid‑workflow after modifying files
     - Start a new RW while a previous RW's TODO items are still `pending` or `in_progress`

   - If RW is abandoned or cannot be completed, the agent MUST:
     - Mark remaining `rw-step-*` TODOs as `cancelled`
     - Output a short **"RW ABORTED"** summary with current state and next steps

**Agent Execution Pattern:**

For each step, follow this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

**The 14 Steps:**

1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - **CRITICAL:** This step MUST run `validate_branch_context.py --strict` and check exit code. **DO NOT PROCEED** if exit code is non-zero. This is a **MANDATORY BLOCKING STEP** that prevents cross-epic contamination:
   - **MANDATORY:** Run `python {validator_path} --strict` before any file modifications
   - **MANDATORY:** Check exit code (0 = PASS, non-zero = FAIL)
   - **IF FAIL:** Mark all steps as `cancelled`, output error message, STOP workflow immediately
   - **IF PASS:** Proceed to Step 2
   - **DO NOT SKIP:** This step cannot be bypassed or ignored
   - **DO NOT PROCEED:** If Step 1 fails, DO NOT attempt Step 2 or any subsequent step
2. **Bump Version** - **MANDATORY STEP-BY-STEP PROCESS (DO NOT SKIP ANY STEP):**
   - **A. CHECK UKW CONTEXT (BEFORE READING VERSION):** **CRITICAL:** Check if this RW was triggered immediately after UKW:
     - **IF UKW was just executed:** This is UKW work → Skip to UKW Attribution Logic (see below)
     - **IF NOT UKW context:** Proceed with normal task identification
   - **A.1. UKW ATTRIBUTION LOGIC (IF UKW CONTEXT DETECTED):**
     - **UKW Context:** User ran "UKW" then "RW" → This is kanban synchronization work
     - **Dynamic Task Discovery:** Search for task document with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
     - **Task ID is Project-Specific:** Perpetual UKW task ID varies by project:
       - ai-dev-kit: E6:S06:T08 (example)
       - Other projects: May be E4:S03:T05, E2:S01:T10, etc. (depends on project structure)
     - **Auto-Attribute to Perpetual Task:** Use discovered perpetual task's Epic/Story/Task numbers, increment `VERSION_BUILD`
     - **Build Warning Suppression:** Perpetual tasks have flag, so high BUILD numbers are expected and valid
     - **Skip Normal Task Identification:** Do not read Story file for normal task identification when UKW context detected
     - **Example (ai-dev-kit):** If current is `v0.6.6.8+3`, UKW release becomes `v0.6.6.8+4`
     - **Example (other project):** If perpetual task is E4:S03:T05 and current is `v0.4.3.5+2`, UKW release becomes `v0.4.3.5+3`
     - **Document:** "UKW context detected. Found perpetual UKW task E{X}:S{Y}:T{Z} (via flag). Attributing release. BUILD increment: +{N}"
   - **A. READ CURRENT VERSION:**
   - **Load config first:** If `rw-config.yaml` exists, read `version_file` from config. Otherwise, use `src/{project}/version.py` as fallback.
   - Read the version file (from config or fallback) to get current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
   - Document current version: `RC.EPIC.STORY.TASK+BUILD`
   - [Example: ai-dev-kit] Read `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)

   **B. IDENTIFY COMPLETED TASK (MANDATORY - ONLY IF NOT UKW):**
   - **Load config first:** If `rw-config.yaml` exists and `use_kanban: true`, read `kanban_root` and `story_doc_pattern` from config. Otherwise, use `{kanban_path}/epics/Epic-{epic}/Story-{story}-*.md` as fallback.
   - Read the Story file using config values or fallback pattern
   - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md` (or from `rw-config.yaml` if present)
   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)
   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)
   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed

   **B.1. LOCATE AND VALIDATE TASK DOCUMENT (MANDATORY):**
   - **MANDATORY:** After identifying completed task, locate Task document in one of two formats:
     1. **Separate File:** `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md` or `T{task}-*.md`
     2. **Delimited Section:** Within Story file, header matching `### E{epic}:S{story}:T{task} –`
   - **MANDATORY:** Validate Task document contains required fields:
     - Task ID (matches `E{epic}:S{story}:T{task}`), Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable
   - **MANDATORY:** Verify Task ID alignment with version components
   - **CRITICAL:** If Task document not found or incomplete, **STOP** and report error with guidance
   - **DO NOT PROCEED** until Task document exists and is validated
   - **B.2. CHECK PERPETUAL TASK FLAG:** Read task document for `perpetual_task: true` or `Task Type: Perpetual Maintenance`:
     - **IF perpetual task:** Note for build warning suppression (high BUILD numbers expected and valid)
     - **IF not perpetual:** Normal task handling applies

   **C. DETERMINE VERSION BUMP (MANDATORY LOGIC):**
   - Compare completed task number to current `VERSION_TASK`:
     - **IF completed task number > current VERSION_TASK:** This is a NEW TASK
       - Set `VERSION_TASK` = completed task number
       - Set `VERSION_BUILD` = 1 (reset to 1 for new task)
       - Example: Current `0.2.2.3+5`, completed T008 → New version: `0.2.2.8+1`
     - **IF completed task number == current VERSION_TASK:** This is SAME TASK, new build
       - Keep `VERSION_TASK` unchanged
       - Increment `VERSION_BUILD` by 1
       - Example: Current `0.2.2.3+1`, completed T003 → New version: `0.2.2.3+2`
     - **IF completed task number < current VERSION_TASK:** This is OUT-OF-ORDER TASK COMPLETION
       - **This is VALID** - Tasks can be completed out of sequential order
       - Set `VERSION_TASK` = completed task number (use completed task, not current)
       - Set `VERSION_BUILD` = 1 (reset to 1 for the completed task)
       - Example: Current `0.3.2.6+1`, completed T005 → New version: `0.3.2.5+1`
       - **CRITICAL:** Version reflects completed task, not current VERSION_TASK
       - **CRITICAL:** Changelog entry will appear before higher task numbers (canonical ordering)

   **D. VALIDATE BEFORE UPDATING:**
   - Verify: New `VERSION_TASK` matches completed task number (unless UKW context)
   - Verify: If new task, `VERSION_BUILD` = 1; if same task, `VERSION_BUILD` = current + 1
   - Document decision: "Task {completed_task} completed. Current TASK={current_task}, BUILD={current_build}. Decision: {new_task/new_build} → TASK={new_task}, BUILD={new_build}"

   **E. UPDATE VERSION FILE:**
   - **Use config path:** Update `VERSION_TASK` and `VERSION_BUILD` in the version file path from config (or `src/{project}/version.py` as fallback)
   - Update `VERSION_STRING` to reflect new version
   - Update `VERSION_INFO["description"]` if present
   - [Example: ai-dev-kit] Update `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)

   **F. VALIDATE AFTER UPDATING:**
   - Re-read `version.py` and verify the new version matches your decision
   - Confirm: `VERSION_TASK` = completed task number
   - Confirm: `VERSION_BUILD` = 1 (if new task) or current+1 (if same task)

   **Use format:** `RC.EPIC.STORY.TASK+BUILD`

      **🚨 CRITICAL: Step 2 Version Bump Requirements:**
   - **MUST** check for UKW context before reading version (Step 2.A)
   - **MUST** read Story file to identify completed task number (only if NOT UKW context)
   - **MUST** compare completed task number to current VERSION_TASK (only if NOT UKW context)
   - **MUST** validate TASK number matches completed task before updating (unless UKW context)
   - **MUST** validate TASK number matches completed task after updating (unless UKW context)
   - **MUST** document decision: "Task {N} completed. Current TASK={X}, BUILD={Y}. Decision: {new_task/new_build} → TASK={Z}, BUILD={W}" (or UKW context documentation)
   - See `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` for error prevention reference
   - See `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 2 for complete procedure

**🔄 UKW → RW Integration (Wiring):**

**Important:** After completing UKW, users typically run RW to commit the kanban documentation updates. The relationship between UKW and the perpetual task is established through wiring:

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
- **RW Maintenance (T103):** Manual attribution only—when releasing RW maintenance work (Step 7 fixes, validator updates, doc corrections), set version to E2:S16:T03 and increment BUILD. See Epic 2 Story 1 T06 (RW Maintenance Perpetual Task Pattern).
3. **Create Detailed Changelog** - Create detailed changelog in changelog archive directory. **Use config:** If `rw-config.yaml` exists, read `changelog_dir` from config. Otherwise, use `{changelog_archive_path}/CHANGELOG_v{version}.md` as fallback. Full timestamp (`YYYY-MM-DD HH:MM:SS UTC`). **CRITICAL:** Timestamp is IMMUTABLE once written - never edit the `**Release Date:**` field.
   - **BR-074 immutability guard:** Never overwrite or delete an existing `CHANGELOG_v{version}.md`; always create a new file. Use the post-bump version (just written to `version.py`) for the `Internal Version` header.
   - [Example: ai-dev-kit] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md` (or from `rw-config.yaml` if present)
4. **Update Main Changelog** - Add new entry at top: `## [version] - DD-MM-YY` (short date format for merge-to-main) with release description and link to detailed changelog. **Use config:** If `rw-config.yaml` exists, read `main_changelog` from config. Otherwise, use `CHANGELOG.md` as fallback. Follow [Keep a Changelog](https://github.com/olivierlacan/keep-a-changelog) format. **Note:** Main changelog date can be updated if merge date changes, but detailed changelog timestamp is immutable.
5. **Update README** - **MANDATORY:** Update project version in README. **MUST update:** Version text (e.g., `**Version:** v{version}`), version badge (if present), and latest release callout (if present). **Use config:** If `rw-config.yaml` exists, read `readme_file` from config. Otherwise, use `README.md` as fallback.
6. **Update BR/FR Docs** - Update Bug Reports and Feature Requests with fix attempt information. **Use config:** If `rw-config.yaml` exists, read `fr_br_root` from config. Otherwise, use `docs/project-management/kanban/fr-br` as fallback. **Purpose:** Document flaws, attempted fixes, and verification status so that if a bug isn't squashed, the next build can be informed by previous attempts.
   - **For Bug Reports (BR):**
     - Search for BR files linked to the completed task (via Story file, Epic file, or BR "Intake Decision" section)
     - If BR is linked, add new entry to "Fix Attempt History" section:
       - Document flaw description (from BR or task description)
       - Document attempted fix (from changelog or task description)
       - Document verification status (from Step 3 changelog or task)
       - Document lessons learned if fix failed
       - Document next steps for future attempts
   - **For Feature Requests (FR):**
     - Search for FR files linked to the completed task (via Story file, Epic file, or FR "Intake Decision" section)
     - If FR is linked, update "Intake Decision" section:
       - Add implementation status: `**Implementation Status:** IMPLEMENTED (v{version})`
       - Add implementation date: `**Implementation Date:** {date}`
       - Add verification status: `**Verification Status:** {Verified/Attempted Fix (pending verification)}`
   - **If no BR/FR linked:** Skip this step (no BR/FR to update)
   - **See:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 6 for complete procedure
7. **Scoped Kanban Sync (UKW Mode)** (FR-038) — A **scoped UKW-style** agentic kanban update for the **current release E/S/T**, not a full standalone UKW run. Treat UKW **`invocation_context` = `rw_step_7`**: update Task/Story/Epic docs and related board lines; **conservative MoSCOW** (new or newly significant items only); do **not** reshuffle the whole board. See [`update-kanban-workflow-agent-execution.md`](KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md#invocation-context-fr-038--rw-step-7). **Use config:** If `rw-config.yaml` exists and `use_kanban: true`, read `kanban_root`, `epic_doc_pattern`, and `story_doc_pattern` from config. Otherwise, use `{kanban_path}/epics/Epic-{epic}/Epic-{epic}.md` and `{kanban_path}/epics/Epic-{epic}/Story-{story}-*.md` as fallback. **CRITICAL: Check Story file existence, create from template if missing, then update:**
   - **MANDATORY: Check Story file existence:**
     - Read Epic file Story Checklist to verify Story is referenced
     - Check if Story file exists at expected path
     - **If Story file doesn't exist but is referenced in Epic:**
       - Create Story file from template: `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
       - Extract Story name from Epic file reference (Story Checklist entry)
       - Substitute template placeholders (Epic number, Story number, Story name, status, priority)
       - Create file with proper naming: `Story-{story:03d}-{name-slug}.md`
       - Document: "Created Story file from template: {file_path}"
     - **If Story file doesn't exist and NOT referenced in Epic:**
       - RW BLOCKED: Story file not found and not referenced in Epic
       - Error message: "Story file not found for Epic {epic}, Story {story}. Story must be referenced in Epic file Story Checklist."
   - **CRITICAL: Update Story file FIRST, then Epic file to match:**
   - **FIRST: Update the Story file (`Story-{N}-{Name}.md`) task checklist:**
     - Add forensic marker `(v{version})` to the completed task in the Task Checklist
     - Example: `✅ COMPLETE (v0.11.5.2+1)`
     - Update Story doc header "Last updated" and "Version" fields
     - Update Story doc detailed Task sections with forensic markers
   - **THEN: Update Epic-{epic}.md to match the updated Story file:**
     - Header metadata (Last updated, Version)
     - Story Checklist at top (status, task counts, version)
     - **Detailed Story sections** (Status, Last updated, task checkboxes with forensic markers)
     - Any other references to the story/task being released
   - **Systematic Process:**
     1. Read the FULL Epic-{epic}.md file
     2. **Check Story file existence:**
        - If exists: Read the authoritative Story-{story}-{name}.md file to get correct state
        - If not exists but referenced in Epic: Create Story file from template first
     3. **FIRST: Update the Story file's Task Checklist with forensic marker for completed task**
     4. **THEN: Find ALL sections in Epic file referencing the story/task (grep/search the file)**
     5. **Update ALL Epic sections to match the updated Story file's state**
     6. Validate consistency: Story file, Epic header, Epic checklist, and Epic detailed sections must all match
8. **Stage Files** - Run `git add -A` to stage all modified files
9. **Run Validators** - Execute validation scripts. **Use config:** If `rw-config.yaml` exists, read `scripts_path` from config. Otherwise, use `{scripts_path}/validation/` as fallback. Run `validate_branch_context.py`, `validate_changelog_format.py`, `validate_version_bump.py`, and `validate_changelog_archive_links.py` (all scripts automatically read from `rw-config.yaml` if available). **If RW was triggered with `--art`, propagate adoption context in Step 9** by passing `--requested "<parsed_id>" --art` to `validate_branch_context.py` and `validate_version_bump.py`. **Note:** `validate_version_bump` supports perpetual tasks (T101+, `perpetual_task` or `Task Type: Perpetual Maintenance` flag).
   - **IMPORTANT:** Validators should confirm you're on an epic branch, not `main`
   - If on `main`, warn user and suggest switching to epic branch
   - Validators check version format, branch context alignment, changelog format, and version bump logic
   - **BR-074:** `validate_changelog_archive_links.py` reports dangling links in `CHANGELOG_ARCHIVE.md` but is non-blocking
10. **Commit Changes** - Create commit with message: `Release v{version}: {summary}\n\nEpic: {epic} | Story: {story} | Task: {task}`
11. **Create Git Tag** - Create tags via canonical strategy decision:
   - **Canonical source**: Resolve tags with `semver_converter.get_rw_tag_info(internal_version, finalize=True)`.
   - **Default (Registry mode)**: Create primary annotated tag `v{version}`.
   - **Task-touch mode**: Create primary SemVer-core tag `vX.Y.Z` (no `+BUILD` in tag name); create internal traceability tag `v{version}` on same commit unless explicitly disabled.
   - **Configuration**: Strategy detected from `rw-config.yaml` → `semver_mapping_strategy`.
   - **Examples**:
     - Registry mode: `v0.6.7.18+2` (internal version tag)
     - Task-touch mode: `v0.9.5` (SemVer core tag, internal traceability tag: `v0.6.7.18+2`)
12. **Push to Remote** - Push epic branch and tag to origin (DO NOT push to main unless ready to deploy)
    - **CRITICAL: Use `required_permissions: ['network']` for git push commands**
    - Example: `run_terminal_cmd(command="git push origin {branch} --tags", required_permissions=['network'])`
    - This enables network access in Cursor's sandbox environment
    - See: `docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md`

**Key Principles:**
- ✅ **Intelligent Analysis:** Understand each step's requirements before executing
- ✅ **Context-Aware:** Use branch context, version schema, and project state to make decisions
- ✅ **Validation:** Verify each step succeeded before proceeding
- ✅ **Documentation:** Document decisions and actions at each step
- ✅ **Progress Tracking:** MUST use Cursor TODOs to track all 12 steps (Steps 1-12 required, Steps 13-14 optional)
- ✅ **Branch Safety First:** Step 1 validates branch alignment before any modifications
- ✅ **Canonical Ordering:** Version numbers (not timestamps) determine changelog ordering - versions are the canonical ordering metric
- ✅ **Forensic Traceability:** Maintain complete traceability grid (version ↔ epic/story/task ↔ changelogs ↔ kanban ↔ git)
- ✅ **Immutability:** Detailed changelog timestamps are immutable once written - never edit `**Release Date:**` field
- ✅ **Mandatory Task Identification:** Step 2 MUST read Story file to identify completed task number
- ✅ **Version Validation:** Step 2 MUST validate TASK number matches completed task before and after updating
- ❌ **Never Blind Execution:** Don't just run scripts without understanding what they do
- ❌ **Never Leave RW Ambiguous:** Always end in either **RW COMPLETE** or **RW ABORTED (with reason)** state
- ❌ **Never Skip Task Identification:** Always read Story file to find completed task number
- ❌ **Never Assume Same Task:** Always compare completed task number to current VERSION_TASK

**File Paths (Customize for Your Project):**
- Version file: `src/{project}/version.py` (e.g., `src/myproject/version.py`)
  - [Example: ai-dev-kit] `src/fynd_deals/version.py` (legacy path, acceptable for now)
- Changelog: `CHANGELOG.md`
- Changelog Archive: `{changelog_archive_path}/CHANGELOG_v{version}.md`
  - [Example: ai-dev-kit] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`
- Kanban Board: `{kanban_path}/kboard.md` or `{kanban_path}/_index.md` (customize path)
  - [Example: ai-dev-kit] `docs/project-management/kanban/_index.md` or `docs/project-management/kanban/kboard.md`
- Epic Docs: `{kanban_path}/epics/Epic-{epic}/Epic-{epic}.md` (customize path)
  - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md`
- Story Docs: `{kanban_path}/epics/Epic-{epic}/Story-{story}-*.md` (customize path)
  - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md`
- Validators: `{scripts_path}/validation/validate_branch_context.py`, `{scripts_path}/validation/validate_changelog_format.py`
  - [Example: ai-dev-kit] `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`, `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Version Schema:**
- Format: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.{epic}.{story}.{task}+{build}`)
- **Schema Calculation:** Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)
- **Build Increment:** Same Epic/Story/Task → Increment BUILD (e.g., `0.N.S.T+1` → `0.N.S.T+2`)
- **New Task:** Different Task → Reset BUILD to 1 (e.g., `0.N.S.T+5` → `0.N.S.{T+1}+1`)
- **New Story:** Different Story → Reset TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.N.{S+1}.1+1`)
- **New Epic:** Different Epic → Reset STORY to 1, TASK to 1, BUILD to 1 (e.g., `0.N.S.T+B` → `0.{N+1}.1.1+1`)
- **Epic Alignment:** Epic number should match current branch (if on `epic/{n}`, version should be `0.{n}.S.T+B`)
- **Epic Ranges:**
  - [Example: ai-dev-kit] Epic 1-4+ (Epic 1: AI Dev Kit Core, Epic 2: Workflow Management Framework, Epic 3: Numbering & Versioning Framework, Epic 4: Kanban Framework)
  - No legacy range in dev-kit - starts from Epic 1 with full schema
- **Reference:** See `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (or your project's versioning policy) for complete schema definition

**Branch Mapping (Customize for Your Project):**
- `main` - **PRODUCTION BRANCH** - Only merge when ready to deploy. Auto-deploys trigger on every push!
- `epic/{n}` - **DEVELOPMENT BRANCH** - All epic work should be done here. Should have version `0.{n}.S.T+B`
- Other branches - Validate against known patterns

**🚨 CRITICAL: Epic Branch Workflow**
- **ALWAYS work on epic branches** (`epic/{n}-{description}`, e.g., `epic/1-core`, `epic/3-versioning`, etc.)
- **NEVER commit directly to `main`** during epic development
- **ONLY merge to `main`** when ready to deploy (triggers auto-deployment)
- **Release Workflow (RW)** should be run on epic branch, then merge to main
- This prevents unnecessary deployments during development

**Version Calculation Examples:**
- Working on Epic 1, Story 1, Task 1: `0.1.1.1+1` (first build) → `0.1.1.1+2` (second build)
  - [Example: ai-dev-kit] Epic 1 (AI Dev Kit Core), Story 1, Task 1: `0.1.1.1+1` → `0.1.1.1+2`
- Moving to Task 2 in same Story: `0.1.1.2+1` (new task, BUILD resets to 1)
  - [Example: ai-dev-kit] Epic 2 (Workflow Management Framework), Story 1, Task 2: `0.2.1.2+1`
- Moving to Story 2 in same Epic: `0.1.2.1+1` (new story, TASK and BUILD reset)
  - [Example: ai-dev-kit] Epic 3 (Numbering & Versioning Framework), Story 2: `0.3.2.1+1`
- Moving to Epic 2: `0.2.1.1+1` (new epic, STORY, TASK, and BUILD reset)
  - [Example: ai-dev-kit] Epic 4 (Kanban Framework), Story 1, Task 1: `0.4.1.1+1`

**Reference Documentation:**
- Versioning Policy: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (or your project's equivalent)
  - [Example: ai-dev-kit] `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (canonical SoT for dev-kit)
- Versioning Strategy: `packages/frameworks/numbering & versioning/versioning-strategy.md` (framework reference)
- Release Workflow Guide: `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- Kanban Governance: `docs/project-management/rituals/policy/kanban-governance-policy.md` (or your project's equivalent)
  - [Example: ai-dev-kit] `docs/project-management/rituals/policy/kanban-governance-policy.md` (references framework as SoT)
- **Workflow Flaws Reference:** `docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all discovered RW flaws
- **Versioning Error Reference:** `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` - Versioning-specific error reference (WF-002)

---

### 📦 PACKAGE VERSION WORKFLOW (PVW) TRIGGER

**When the user types "PVW" or "pvw" (case-insensitive), or when RW Step 2.5 executes, run the Package Version Workflow as an intelligent agent:**

1. **DO NOT** run deterministic scripts to determine bump types
2. **DO** execute PVW using the **intelligent agent-driven execution pattern**
3. **Follow** the agent execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
4. **Use** validation scripts as tools, not determiners
5. **Apply** version bump criteria as guidance, not hard rules
6. **Document** reasoning and justification for each bump

**PVW Execution Steps:**
1. **Step 1: Detect Changed Packages** - Analyze git diff to identify changed packages
2. **Step 2: Analyze Package Changes** - Read package files, identify what changed
3. **Step 3: Determine Version Bumps** - Analyze changes against criteria, determine bump type intelligently
4. **Step 4: Execute Version Updates** - Update README, create changelog, document justification
5. **Step 5: Validate Updates** - Run validation scripts as tools, verify format/consistency
6. **Step 6: Document & Proceed** - Document changes, pass to RW Step 3

**Key Principles:**
- ✅ **Agent-Driven:** Intelligent analysis and decision-making, not deterministic scripts
- ✅ **Context-Aware:** Understand actual changes and impact
- ✅ **Validation as Tools:** Scripts provide checks and data, not decisions
- ✅ **Criteria as Guidance:** Criteria inform decisions, not dictate them
- ✅ **Clear Documentation:** Explain decisions and reasoning

**🚨 MANDATORY: Progress Tracking with Cursor TODOs**

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 6 PVW steps. This is **NOT OPTIONAL** - it is a mandatory requirement for PVW execution.

**Why TODOs are Required:**
- ✅ **User Visibility:** User can see real-time progress through all 6 steps
- ✅ **Agent Organization:** Helps agent stay organized across sequential steps
- ✅ **Error Recovery:** Clear visibility into where execution stopped if interrupted
- ✅ **User Transparency:** User can verify all steps completed successfully
- ✅ **Status Management:** Automatic status updates provide clear execution state
- ✅ **Accountability:** Provides audit trail of workflow execution
- ✅ **Agentic Drift Prevention:** TODOs serve as checkpoints to prevent workflow drift and ensure all steps are completed

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 6 steps as `pending`
   ```python
   todo_write(merge=False, todos=[
       {'id': 'pvw-step-1', 'status': 'pending', 'content': 'Step 1: Detect Changed Packages - Analyze git diff to identify changed packages'},
       {'id': 'pvw-step-2', 'status': 'pending', 'content': 'Step 2: Analyze Package Changes - Read package files, identify what changed'},
       {'id': 'pvw-step-3', 'status': 'pending', 'content': 'Step 3: Determine Version Bumps - Analyze changes against criteria, determine bump type'},
       {'id': 'pvw-step-4', 'status': 'pending', 'content': 'Step 4: Execute Version Updates - Update README, create changelog, document justification'},
       {'id': 'pvw-step-5', 'status': 'pending', 'content': 'Step 5: Validate Updates - Run validation scripts as tools, verify format/consistency'},
       {'id': 'pvw-step-6', 'status': 'pending', 'content': 'Step 6: Document & Proceed - Document changes, pass to RW Step 3'},
   ])
   ```

2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'pvw-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'pvw-step-1', 'status': 'completed'},
       {'id': 'pvw-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion (MANDATORY):** All steps marked as `completed`
   ```python
   todo_write(merge=True, todos=[{'id': 'pvw-step-6', 'status': 'completed'}])
   ```

**Enforcement:**
- ❌ **DO NOT** execute PVW without creating TODO list first
- ❌ **DO NOT** skip TODO updates between steps
- ✅ **MUST** create TODO list before Step 1 execution
- ✅ **MUST** update TODO status before and after each step
- ✅ **MUST** mark all steps as completed on successful completion
- ✅ **MUST** use TODOs as checkpoints to prevent agentic drift

**Agent Execution Guide:**
- See `docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md` for detailed step-by-step guide
- Follow ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern for each step
- Use validation scripts as tools: `scripts/validation/package/validate_package_version_format.py`, `validate_package_version_increment.py`, `validate_package_version_consistency.py`, `get_package_changes.py`

**Version Bump Criteria (Guidance, Not Rules):**
- **MAJOR (X.0.0):** Breaking changes (removing files, changing structure, breaking API)
- **MINOR (x.Y.0):** New features, enhancements, additions (backward compatible)
- **PATCH (x.y.Z):** Bug fixes, corrections, clarifications (no new functionality)

**Agent applies criteria intelligently based on context, not mechanically.**

**Integration with RW:**
- PVW executes as RW Step 2.5 (after project version bump, before changelog creation)
- PVW can also be triggered manually with "PVW" command
- Package versions are included in RW Step 3 (changelog creation)

---

**⚠️ IMPORTANT: Customization Required**

After copying this section to your `.cursorrules`, you MUST:
1. **Update all file paths** to match your project structure
2. **Update version file location** (currently shows `src/{project}/version.py` as template)
   - [Example: ai-dev-kit] `src/fynd_deals/version.py` (legacy path, acceptable for now)
3. **Update Kanban paths** (currently shows `{kanban_path}/...` as templates)
   - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md`
4. **Update validator script paths** (currently shows `{scripts_path}/...` as templates)
   - [Example: ai-dev-kit] `packages/frameworks/workflow mgt/scripts/validation/...`
5. **Reference your project's versioning policy** instead of dev-kit policy
   - [Example: ai-dev-kit] Uses `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` as canonical SoT
6. **Customize branch naming** if your project uses different conventions (e.g., `feature/epic-{n}` instead of `epic/{n}`)
7. **Customize epic ranges** if your project uses different epic numbering (e.g., legacy range 1-9, new range 10+)
   - [Example: ai-dev-kit] Epic 1-4+ (no legacy range, starts from Epic 1 with full schema)

**For ai-dev-kit Usage:**
When using this section in the ai-dev-kit repository itself:
- Version file: `src/fynd_deals/version.py`
- Changelog Archive: `docs/changelog-and-release-notes/changelog-archive/`
- Kanban: `docs/project-management/kanban/`
- Validators: `packages/frameworks/workflow mgt/scripts/validation/`
- Versioning Policy: `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (canonical SoT)
