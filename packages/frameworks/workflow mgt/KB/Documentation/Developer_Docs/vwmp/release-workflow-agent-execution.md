---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Release Workflow: Agent Execution Guide

**Version:** 1.8.0
**Last Updated:** 2025-12-16
**Related:** [Example: Confidentia - Epic 4 - User Workflows & Use Case Modeling, Release Workflow] | [Example: ai-dev-kit - Epic 2 - Workflow Management Framework, Release Workflow]

---

## 📜 Version History

**Current Version:** 1.10.0 (2026-01-20)

### Version 1.10.0 (2026-01-20) - GitHub Release Step
- **Added:** Step 12.5: Create/Update GitHub Release (after Step 13: Push to Remote)
- **Changed:** Updated workflow structure to include GitHub release creation
- **Feature:** Automated GitHub release creation using SemVer tags
- **Feature:** Non-blocking step - gracefully skips if GITHUB_TOKEN not available
- **Feature:** Clear error handling and user instructions for manual execution
- **Related:** E3:S02:T11 - Implement SemVer Mapping for Release Workflow

### Version 1.9.0 (2026-01-05) - Housekeeping Step
- **Added:** Step 17: Housekeeping (after Step 16)
- **Changed:** Updated workflow structure from 16 steps to 17 steps
- **Changed:** Step 17 clears IDE todo list at end of workflow
- **Feature:** Clean IDE state after RW completion
- **Future:** May include additional cleanup tasks (temp files, etc.)

### Version 1.8.0 (2025-12-16) - PIR Workflow Integration
- **Added:** Step 15: Check for PIR Trigger (after Step 12)
- **Changed:** Updated workflow structure from 14 steps to 15 steps
- **Changed:** Step 15 performs deterministic check for Epic/Story COMPLETE status
- **Changed:** Step 15 triggers PIR workflow automatically (non-blocking)
- **Feature:** Auto-trigger PIR when Epic/Story marked COMPLETE
- **Feature:** Story significance evaluation before PIR trigger
- **Related:** E2:S05:T08 - Integrate PIR with Release Workflow

### Version 1.7.0 (2025-12-12) - Doc-Init Examples and Documentation
- **Added:** Doc-init scenarios and examples to Step 2 "B. IDENTIFY COMPLETED TASK" section
- **Added:** New "B.2. DOC-INIT SCENARIOS AND EXAMPLES" section with three comprehensive examples
- **Added:** Doc-init documentation notes in Task document location section (B.1.2.3)
- **Added:** Cross-references to FR-016, FR-017, and FR-018 in CRITICAL REMINDERS section
- **Enhanced:** Step 2 procedure documentation with doc-init vs normal build distinctions
- **Related:** E2:S10:T05 - Update RW Step 1 Procedure Documentation (FR-017)

### Version 1.7.0 (2025-12-15) - Step 7 Hardening (FR-015)
- **Added:** Comprehensive Step 7 documentation with framework-agnostic script details
- **Added:** Mandatory and blocking behavior documentation
- **Added:** Validation details (Steps 12-14 from T01 analysis)
- **Added:** Error handling and recovery guidance documentation
- **Added:** Override mechanism documentation
- **Changed:** Step 7 handler updated to `framework.kanban_update` (framework-agnostic)
- **Changed:** Step 7 is now mandatory (`required: true`, `mandatory: true`) and blocking (`blocking: true`)
- **Changed:** Step 7 execution now uses framework script instead of manual updates
- **Related:** E2:S08:T01-T05 - Harden Release Workflow Reliability (FR-015)

### Version 1.6.0 (2025-12-12) - Doc-Init Build (+0) Support
- **Added:** Doc-init detection logic in Step 2 (A.1: Detect Doc-Init State)
- **Added:** Doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- **Added:** Docs-only verification for doc-init builds
- **Added:** Integration with Task document presence detection (E2:S09:T02)
- **Changed:** Step 2 procedure updated from 6-step (A-F) to 7-step (A-G) to include doc-init detection
- **Changed:** Version bump logic (C) now checks doc-init state before normal version bump
- **Changed:** Validation logic (D, F) includes doc-init validation
- **Changed:** Version file update logic (E) includes doc-init path with `+0` build
- **Related:** E2:S10:T01 - Update RW Step 1 to Support Doc-Init Path (FR-017)

### Version 1.5.0 (2025-12-11) - Task Document Requirements Documentation
- **Added:** Comprehensive "Task Document Requirements" section documenting 3-tier structure, discrete Task doc requirement, Task doc formats, required fields, validation process, and examples
- **Added:** Cross-references to Kanban Governance Policy and Versioning Policy
- **Added:** Examples for both Task document formats (separate file and delimited section)
- **Added:** Error handling guidance for Task document validation failures
- **Related:** E2:S09:T04 - Update RW Agent Execution Guide with Task doc requirements

### Version 1.4.0 (2025-12-05) - Branch Safety Hardening
- **Added:** Step 1: Branch Safety Check as mandatory blocking step
- **Changed:** Step 1 now requires `validate_branch_context.py --strict` execution before any file modifications
- **Changed:** Step 1 stops workflow immediately if validator returns non-zero exit code
- **Changed:** All remaining steps marked as `cancelled` if Step 1 fails
- **Changed:** Updated from 13 steps to 14 steps (Step 1 added, all others renumbered)
- **Related:** E2:S01:T05 - Harden RW branch safety checks

### Version 1.3.0 (2025-12-04) - BR/FR Documentation Integration
- **Added:** Step 6: Update BR/FR Docs (before Auto-update Kanban Docs)
- **Changed:** Auto-update Kanban Docs moved from Step 5 to Step 7
- **Changed:** All subsequent steps renumbered (Stage Files: 6→8, Run Validators: 7→9, etc.)
- **Changed:** Updated from 13 steps to 14 steps
- **Related:** E3:S03:T06 - Add RW step to update BR/FR docs with fix attempt history

### Version 1.2.0 (2025-12-03) - PDCA ACT Phase Integration
- **Added:** Step 13: Act on Verification Results (ACT phase)
- **Changed:** Updated from 12 steps to 13 steps
- **Related:** E2:S02:T02 - Add ACT Phase (Step 13) to Release Workflow

### Version 1.1.0 (2025-12-02) - PDCA CHECK Phase Integration
- **Added:** Step 12: Post-Commit Verification & Reflection (CHECK phase)
- **Changed:** Updated from 11 steps to 12 steps
- **Related:** E2:S02:T01 - Add CHECK Phase (Step 12) to Release Workflow

### Version 1.0.0 (2025-12-01) - Initial Release
- **Initial:** 11-step Release Workflow
- **Steps:** Bump Version, Create Detailed Changelog, Update Main Changelog, Update README, Auto-update Kanban Docs, Stage Files, Run Validators, Commit Changes, Create Git Tag, Push to Remote
- **Related:** Initial framework extraction from fynd.deals Epic 15, Story 1

---

## 📖 Overview

This document provides a **step-by-step agent execution guide** for the Release Workflow. The Release Workflow serves as the **canonical example** of intelligent agent-driven workflow execution.

**This guide shows exactly how an AI agent should analyze, determine, execute, validate, and proceed through each of the 15 Release Workflow steps (Steps 1-12 are required, Steps 13-14 are optional but recommended for PDCA CHECK and ACT phases, Step 15 is optional but recommended for PIR integration).**

> **Note on Examples:** This document includes examples from multiple projects:
> - **[Example: Confidentia/fynd.deals]** - Examples from the original source project
> - **[Example: ai-dev-kit]** - Examples from the dev-kit project
> 
> When adopting this workflow in your own project, replace all examples with your project-specific paths, versions, and structures.

---

## 🔒 RW Hardening Principles (Summary)

This Release Workflow follows the shared *Workflow Hardening Guide for Agent‑Driven Release Processes* (`docs/architecture/standards-and-adrs/workflow-hardening-guide.md`). In practice, this means:

- **Atomic RW per invocation:** One RW run attempts all steps for a single version or clearly stops in a `RW BLOCKED at Step X` state.
- **Minimal, predictable tools:** RW uses a small, stable set of tools (file read/write, git/validators, TODO tracking) and avoids experimental or irrelevant tools during execution.
- **Single sources of truth per step:** For each step, there is one authoritative artifact (version file, changelog entry, story file, etc.), and related files are normalized to it.
- **TODOs as a state machine:** RW step TODOs (`rw-step-1` … `rw-step-N`) move monotonically from `pending` → `in_progress` → `completed` (or `cancelled`), with at most one step `in_progress` at a time.
- **Honest blocked states:** When RW cannot proceed (missing user input, branch policy, no network for push), it reports a clear `RW BLOCKED` status with exact follow‑up actions, instead of silently stalling.

These principles are part of the RW contract for agents and humans in this project and should be preserved when this workflow is copied into other repos.

---

## 🎯 Execution Context

### Workflow Definition

**Workflow:** Release Workflow  
**Type:** `release`  
**Steps:** 16 steps organized into 4 phases (Steps 1-13: required, Steps 14-15: optional CHECK and ACT phases, Step 16: optional PIR integration)  
**Canonical Example:** Yes - this workflow demonstrates the agent-driven execution pattern  
**Version model:** Dual-version (internal `RC.EPIC.STORY.TASK+BUILD` + external SemVer `MAJOR.MINOR.PATCH+BUILD`)

### Agent Execution Pattern

For each step, the agent follows this pattern:
1. **ANALYZE** - Understand step requirements and context
2. **DETERMINE** - Decide what actions to take
3. **EXECUTE** - Perform the actions
4. **VALIDATE** - Verify execution succeeded
5. **PROCEED** - Document and move to next step

### 🚨 MANDATORY: Progress Tracking with Cursor TODOs

**REQUIRED:** Agents **MUST** use `todo_write` to create and maintain a TODO list tracking all 11 Release Workflow steps. This is **NOT OPTIONAL** - it is a mandatory requirement for Release Workflow execution.

**Why TODOs are Required:**
- ✅ **User Visibility:** User can see real-time progress through all 13 steps
- ✅ **Agent Organization:** Helps agent stay organized across 11 sequential steps
- ✅ **Error Recovery:** Clear visibility into where execution stopped if interrupted
- ✅ **User Transparency:** User can verify all steps completed successfully
- ✅ **Status Management:** Automatic status updates provide clear execution state
- ✅ **Accountability:** Provides audit trail of workflow execution

**Required Implementation Pattern:**

1. **At Workflow Start (MANDATORY):** Create TODO list with all 15 steps as `pending`
   ```python
   todo_write(merge=False, todos=[
       {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check - Analyze work and ensure it aligns with current branch'},
       {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version - Analyze current version and determine next version'},
       {'id': 'rw-step-3', 'status': 'pending', 'content': 'Step 3: Create Detailed Changelog - Generate CHANGELOG with full timestamp'},
       {'id': 'rw-step-4', 'status': 'pending', 'content': 'Step 4: Update Main Changelog - Add summary entry'},
       {'id': 'rw-step-5', 'status': 'pending', 'content': 'Step 5: Update README - Update version badge and latest release'},
       {'id': 'rw-step-6', 'status': 'pending', 'content': 'Step 6: Update BR/FR Docs - Document flaws and fix attempts in Bug Reports and Feature Requests'},
       {'id': 'rw-step-7', 'status': 'pending', 'content': 'Step 7: Scoped Kanban Reconciliation (Self-Sufficient) - Four-surface release-scope reconciliation (task + FBU + kboard + fbuboard); no UKW dependency (FR-092)'},
      {'id': 'rw-step-8', 'status': 'pending', 'content': 'Step 8: Stage Files - Stage all modified files'},
      {'id': 'rw-step-9', 'status': 'pending', 'content': 'Step 9: Check for and Address IDE-Flagged Problems - Check errors, warnings, infos in order'},
      {'id': 'rw-step-10', 'status': 'pending', 'content': 'Step 10: Run Validators - Execute branch context, changelog format, and changelog size validators'},
      {'id': 'rw-step-10.5', 'status': 'pending', 'content': 'Step 10.5: Changelog Management Workflow (CMW) - Trigger CMW if changelog size exceeds threshold (optional, non-blocking)'},
      {'id': 'rw-step-11', 'status': 'pending', 'content': 'Step 11: Commit Changes - Create git commit with versioned message'},
      {'id': 'rw-step-12', 'status': 'pending', 'content': 'Step 12: Create Git Tag - Create annotated tag'},
      {'id': 'rw-step-13', 'status': 'pending', 'content': 'Step 13: Push to Remote - Push branch and tags'},
      {'id': 'rw-step-14', 'status': 'pending', 'content': 'Step 14: Post-Commit Verification & Reflection - Verify changes and reflect on results (optional but recommended)'},
      {'id': 'rw-step-15', 'status': 'pending', 'content': 'Step 15: Act on Verification Results - Update changelog, create follow-ups, document improvements (optional but recommended)'},
      {'id': 'rw-step-16', 'status': 'pending', 'content': 'Step 16: Check for PIR Trigger - Check Epic/Story COMPLETE status and trigger PIR workflow (optional but recommended)'},
      {'id': 'rw-step-17', 'status': 'pending', 'content': 'Step 17: Housekeeping - Clear IDE todo list (optional but recommended)'},
   ])
   ```

2. **Before Each Step (MANDATORY):** Mark step as `in_progress`
   ```python
   todo_write(merge=True, todos=[{'id': 'rw-step-1', 'status': 'in_progress'}])
   ```

3. **After Each Step (MANDATORY):** Mark step as `completed` and mark next step as `in_progress`
   ```python
   todo_write(merge=True, todos=[
       {'id': 'rw-step-1', 'status': 'completed'},
       {'id': 'rw-step-2', 'status': 'in_progress'}
   ])
   ```

4. **On Completion (MANDATORY):** All steps marked as `completed`
   ```python
   todo_write(merge=True, todos=[{'id': 'rw-step-11', 'status': 'completed'}])
   ```

**Enforcement:**
- ❌ **DO NOT** execute Release Workflow without creating TODO list first
- ❌ **DO NOT** skip TODO updates between steps
- ✅ **MUST** create TODO list before Step 1 execution
- ✅ **MUST** update TODO status before and after each step
- ✅ **MUST** mark all steps as completed on successful completion

**Note:** The markdown checklist below (lines 480-512) serves as a reference, but Cursor TODOs are the **REQUIRED** mechanism for real-time progress tracking and user visibility.

---

### SemVer vs Internal Version in RW

RW works with **two related versions**:

- The **internal version** (`RC.EPIC.STORY.TASK+BUILD`) from the version file (e.g., `src/fynd_deals/version.py`).
- The **release version (SemVer)** (`MAJOR.MINOR.PATCH+BUILD`) derived from the internal version using the mapping defined in the numbering & versioning framework and the dev-kit policy.

Rules:

- For **external surfaces** (README, GitHub releases, badges, package manifests), RW treats **SemVer as the primary version**.
- For **internal coordination** (Kanban markers, detailed changelogs, validators), RW treats the internal version as the **forensic coordinate**.
- RW MUST always generate SemVer **from** the internal version; the internal version remains the single source of truth for Kanban alignment.

RW consults project configuration (for example, `rw-config.yaml`) to determine:

- Which **SemVer mapping mode** to use (e.g. `registry_epic_story` vs `global_patch`).
- Whether to include **optional SemVer metadata** (e.g. `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`) in tags.

## 🔒 Critical Requirement: Fix Verification

**CRITICAL:** Before marking any bug fix as "Fixed" in changelogs, the fix MUST be verified through testing.

### Verification Requirements

**For Bug Fixes:**
- **Verified Fixes:** Must have evidence of successful testing:
  - Test suite execution (automated tests pass)
  - Manual testing (documented test results)
- **Unverified Fixes:** Must be logged as "Attempted Fix (Pending Verification)" until verification is complete
- **DO NOT** claim a fix is "Fixed" until verification evidence exists

### Verification Methods

1. **Test Suite Execution:**
   - Automated test suite must pass
   - Test results must be documented
   - Evidence: Test output, CI/CD results, test logs

2. **Manual Testing:**
   - Manual test steps must be documented
   - Test results must be recorded
   - Evidence: Test documentation, screenshots, test logs

### Changelog Format for Fixes

**Verified Fixes:**
```markdown
### Fixed
- Fixed issue description
  - **Verification Status:** Verified
  - **Verification Method:** Test Suite / Manual Testing
  - **Verification Evidence:** [Link to test results or documentation]
```

**Unverified Fixes:**
```markdown
### Attempted Fixes (Pending Verification)
- Attempted fix for issue description
  - **Verification Status:** Attempted Fix (Pending Verification)
  - **Verification Method:** [To be determined]
  - **Next Steps:** Run test suite / Perform manual testing
```

### Enforcement

- **Step 3 (Create Detailed Changelog):** Must check verification status before creating changelog
- **Step 4 (Update Main Changelog):** Must check verification status before updating main changelog
- **Validation:** If any fix is marked as "Fixed" without verification evidence, workflow MUST STOP

---

## 📋 Step-by-Step Agent Execution

### 🔧 Config Loading (Before Step 1)

**MANDATORY:** Before executing any RW steps, load `rw-config.yaml` from project root if it exists. This is the **single source of truth** for all project-specific paths.

**Config Loading Pattern:**
```python
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

# Extract paths from config or use fallbacks
version_file = config['version_file'] if config and 'version_file' in config else 'src/{project}/version.py'
main_changelog = config['main_changelog'] if config and 'main_changelog' in config else 'CHANGELOG.md'
changelog_dir = config['changelog_dir'] if config and 'changelog_dir' in config else 'docs/changelogs'
scripts_path = config['scripts_path'] if config and 'scripts_path' in config else 'scripts/validation'
readme_file = config['readme_file'] if config and 'readme_file' in config else 'README.md'
kanban_root = config.get('kanban_root') if config and config.get('use_kanban') else None
epic_doc_pattern = config.get('epic_doc_pattern') if config and config.get('use_kanban') else None
story_doc_pattern = config.get('story_doc_pattern') if config and config.get('use_kanban') else None
```

**Philosophy:**
- **Config-driven (preferred):** If `rw-config.yaml` exists, use its values as the single source of truth
- **Backward compatible:** If config doesn't exist, use placeholder patterns (ensures RW works in projects that haven't run the installer)
- **Consistent:** All steps use the same config values loaded at the start

**Note:** Validation scripts (`validate_branch_context.py`, `validate_changelog_format.py`) automatically load `rw-config.yaml` if available, so they will use the same paths.

---

### Step 1: Branch Safety Check

**🚨 MANDATORY BLOCKING STEP - DO NOT BYPASS**

**Step Definition:**
```yaml
- id: step-1
  name: Branch Safety Check
  handler: release.branch_safety_check
  dependencies: []
  mandatory: true  # MANDATORY: Cannot be skipped
  blocking: true   # BLOCKING: Stops workflow on failure
  config:
    check_modified_files: true
    check_version_alignment: true
    check_changelog_alignment: true
    use_validator: true  # MANDATORY: Must use validate_branch_context.py
    strict_mode: true     # MANDATORY: Validator must run in strict mode
```

**CRITICAL REQUIREMENTS:**
- ✅ **MANDATORY:** This step MUST run before ANY file modifications
- ✅ **BLOCKING:** If this step fails, the workflow MUST STOP immediately
- ✅ **NON-OPTIONAL:** This step cannot be skipped, bypassed, or ignored
- ✅ **VALIDATOR REQUIRED:** Must run `validate_branch_context.py` with `--strict` flag
- ✅ **EXIT CODE CHECK:** Must check validator exit code and stop on non-zero
- ❌ **DO NOT PROCEED:** If Step 1 fails, DO NOT proceed to Step 2 or any subsequent step

**Agent Execution:**

1. **ANALYZE:**
   - **Load config first:** Load `rw-config.yaml` if it exists (see Config Loading section above)
   - Get current Git branch name (e.g., `epic/4` [Example: Confidentia], `epic/2` [Example: ai-dev-kit], `main`, `dev`)
   - **MANDATORY:** Determine validator script path:
     - From config: `scripts_path` + `/validate_branch_context.py`
     - Fallback: `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py` [Example: ai-dev-kit]
     - Or: `scripts/validation/validate_branch_context.py` [Example: Confidentia]
   - Verify validator script exists (if not found, this is a critical error - workflow must stop)
   - If branch is `dev`, ensure `rw-config.yaml` defines `dev_branch_epic` (integer) so strict epic/version enforcement can run

2. **DETERMINE:**
   - **MANDATORY ACTION:** Run `validate_branch_context.py` with `--strict` flag
   - **Command (default):** `python {validator_path} --strict`
   - **Command (explicit task-id trigger):** `python {validator_path} --strict --requested "<token>"`
   - **Command (explicit task-id + adoption):** `python {validator_path} --strict --requested "<token>" --art`
   - **Expected Behavior:**
     - Exit code 0 = PASS (branch and work align)
     - Exit code 1 = FAIL (branch and work do not align)
   - **CRITICAL:** If validator script is missing or cannot be executed, workflow MUST STOP

3. **EXECUTE:**
   - **MANDATORY:** Execute validator script with the same trigger context used by the user:
     ```bash
     python {validator_path} --strict
     ```
   - If user supplied explicit `E:S:T`, include `--requested "<token>"` so Step 1 can evaluate explicit-task reconciliation safely before Step 2.
   - If user supplied `--art`, pass `--art` to Step 1 validator as well.
   - **Capture exit code:** Store the exit code from validator execution
   - **Capture output:** Store validator output for error messages
   - **DO NOT MODIFY FILES:** This step runs BEFORE any file modifications

4. **VALIDATE:**
   - **Check exit code:**
     - ✅ **PASS (exit code 0):** Branch and work align correctly
     - ❌ **FAIL (exit code 1 or non-zero):** Branch and work do not align
   - **CRITICAL RULE:** If exit code is non-zero, workflow MUST STOP immediately
   - **NO EXCEPTIONS:** Do not proceed to Step 2 if validation fails

5. **PROCEED:**
   - **If PASS (exit code 0):**
     - Document: "✅ Branch safety check passed - work aligns with current branch"
     - Mark Step 1 TODO as `completed`
     - Move to **Steps 1.3–1.5** (mandatory task token → `validate_rw_task_complete.py` → `validate_rw_task_intent.py`), then Step 2
   
   - **If FAIL (exit code 1 or non-zero):**
     - **MANDATORY ACTIONS:**
       1. Document: "🚨 RW BLOCKED: Branch Safety Check Failed"
       2. Output clear error message using validator output:
          ```
          🚨 RELEASE WORKFLOW BLOCKED
          
          Step 1: Branch Safety Check - FAILED
          
          Reason: Current branch '{branch}' does not align with the work being released.
          
          Details:
          - Current branch: {branch}
          - Expected branch: epic/{expected_epic}
          - Version file shows: {version}
          - Detected epic from work: {detected_epic}
          
          Validator Output:
          {validator_output}
          
          Action Required:
          1. Switch to the correct branch: git checkout epic/{correct_epic}
          2. Verify your changes align with the branch: git status
          3. Then run RW again
          
          RW is NOT complete. Workflow stopped at Step 1.
          All subsequent steps have been cancelled.
          ```
       3. Mark Step 1 TODO as `cancelled`
       4. Mark ALL remaining steps (2-14) as `cancelled`:
          ```python
          todo_write(merge=True, todos=[
              {'id': 'rw-step-1', 'status': 'cancelled'},
              {'id': 'rw-step-2', 'status': 'cancelled'},
              {'id': 'rw-step-3', 'status': 'cancelled'},
              # ... mark all remaining steps as cancelled
          ])
          ```
       5. **STOP WORKFLOW:** Do not execute any further steps
       6. **DO NOT PROCEED:** Do not attempt Step 2 or any subsequent step
       7. **DO NOT MODIFY FILES:** No file modifications should occur after Step 1 failure

**Example Alignment Checks:**

- **On `epic/4` branch [Example: Confidentia]:**
  - ✅ Version file shows `0.4.x.x+x` → PASS
  - ✅ Modified files in `Epic-4/` directory → PASS
  - ✅ Changelog entry references Epic 4 [Example: Confidentia] → PASS
  - ❌ Version file shows `0.5.x.x+x` → FAIL (mismatch)
  - ❌ Modified files in `Epic-5/` directory → FAIL (mismatch)

- **On `epic/2` branch [Example: ai-dev-kit]:**
  - ✅ Version file shows `0.2.x.x+x` → PASS
  - ✅ Modified files in `Epic-2/` directory → PASS
  - ✅ Changelog entry references Epic 2 → PASS
  - ❌ Version file shows `0.3.x.x+x` → FAIL (mismatch)
  - ❌ Modified files in `Epic-3/` directory → FAIL (mismatch)

- **On `main` branch:**
  - ✅ Any epic number allowed (main can have any epic)
  - ⚠️ Warning: Consider if RW should run on main (usually run on epic branch first)

- **On `dev` branch (strict-equal-epic mode):**
  - ✅ `rw-config.yaml` contains `dev_branch_epic` and version epic matches that value → PASS
  - ❌ `dev_branch_epic` is missing/invalid → FAIL (blocking)
  - ❌ Version epic differs from `dev_branch_epic` → FAIL (blocking)

**CRITICAL: Task/Version Alignment Check**

**MANDATORY:** Before proceeding, verify that `VERSION_TASK` in the version file matches the active Task number from the Story document.

**Process:**
1. **Identify Active Task:**
   - Read the Story document to identify which Task is being completed
   - Extract Task number (e.g., `E4:S03:T02` → Task 2)
   - Note: This is the Task that was just completed and is being released

2. **Check Version File:**
   - Read `VERSION_TASK` from version file
   - Compare with active Task number from Story document

3. **Validation:**
   - ✅ If `VERSION_TASK` matches active Task number → PASS
   - ❌ If `VERSION_TASK` does NOT match active Task number → FAIL

**If Validation Fails:**
```
❌ TASK/VERSION MISMATCH DETECTED

Current VERSION_TASK: {current_task}
Active Task from Story: {active_task}

Action Required:
1. Update version.py: Set VERSION_TASK = {active_task}
2. If this is a new Task, also reset VERSION_BUILD = 1
3. Then run RW again

RW is NOT complete. Workflow stopped at Step 1.
```
- Mark Step 1 TODO as `cancelled`
- Mark all remaining steps as `cancelled`
- **DO NOT PROCEED** to Step 2

**Example Task Alignment Checks:**

- **Completing Task 2 in Story 3:**
  - ✅ `VERSION_TASK = 2` → PASS
  - ❌ `VERSION_TASK = 1` → FAIL (should be 2)
  - ❌ `VERSION_TASK = 3` → FAIL (should be 2)

- **Completing Task 1 in Story 1:**
  - ✅ `VERSION_TASK = 1` → PASS
  - ❌ `VERSION_TASK = 2` → FAIL (should be 1)

WARNING: This step prevents accidental cross-epic contamination while allowing explicit-task pre-Step-2 reconciliation for stale `version.py` contexts. If this check fails, DO NOT proceed with the workflow. Fix branch/intent alignment first.

---

### Step 1.3: Mandatory RW task token (FR-060 / E5:S01:T63)

**🚨 MANDATORY BLOCKING STEP — DO NOT BYPASS**

**Purpose:** Require an explicit `E…S…T…` in the **same user message** as the RW trigger so the agent never proceeds with ambiguous release attribution.

**When:** Run **immediately after Step 1 passes**, **before any file modifications** (before Step 2).

**Agent execution:**

1. **Parse** the user message for a task token: `E{epic}S{story}T{task}` or `E{epic}:S{story}:T{task}` (same flexibility as UKW).
2. **If no parseable token:** **RW ABORTED** — print usage, e.g. `RW E7:S01:T10`, `RW E7S01T10`, `RW -d E7S01T10`, `RW -k E6S6T56`. Do **not** infer task from Story checklist for permission to continue.
3. **If token present:** Proceed to Step 1.4.

---

### Step 1.4: RW task document releasable (FR-060)

**🚨 MANDATORY BLOCKING STEP — DO NOT BYPASS**

**Purpose:** Ensure the task markdown exists under `kanban_root` and is releasable for the selected mode.
For full RW / `RW -d`, releasable statuses are **IN PROGRESS**, **COMPLETE**, or **perpetual maintenance**.  
`TODO` is non-releasable.

**Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py` (also: `{scripts_path}/validation/validate_rw_task_complete.py` when config exists)

**Agent execution:**

1. Use the token from Step 1.3.
2. Full RW / **RW -d:**  
   `python {validator_path} --requested "<token>"`
3. **RW -k:**  
   `python {validator_path} --requested "<token>" --mode rw-k`  
   (document must exist; COMPLETE check skipped for kanban-init style targets.)
4. **Exit codes:** `0` = proceed; `1` = **RW ABORTED**; `2` = invalid args — blocking.

**FR-077 hardening (pre-gate drift detection):**

- Step 1.4 now also detects "implemented but TODO" drift for IPW/ICW-derived tasks before proceeding.
- The validator uses task-scoped drift checks (requested E:S:T) so failures are explicit and actionable.
- If drift is detected, Step 1.4 fails with guidance to transition task status to `IN PROGRESS` or `COMPLETE` before RW continues.

- Publication wiring reminder (BR-066): if task requires planning artifact publication, ensure host task doc links to `docs/implementation-cycles/` artifacts (spec/test/implementation-plan) or declares `Publication Status: NOT_APPLICABLE` with reason before release closure.
- Ownership reminder:
  - Implementation execution owns the status decision and task-doc write (`TODO -> IN PROGRESS -> COMPLETE`).
  - RW Step 7 (Scoped Kanban Reconciliation, self-sufficient per FR-092) owns four-surface propagation for the release slice (task + FBU + kboard + fbuboard).
  - Task-doc status is authoritative; board status must not be advanced independently.

---

### Step 1.5: RW Task Intent Guard (BR-056 / E6:S06:T56)

**🚨 MANDATORY BLOCKING STEP — DO NOT BYPASS**

**Purpose:** Prevent silent wrong attribution when the user types a shorthand task id (e.g. `RW E7S5T1` meaning Story 5) while `version.py` still reflects Story 6 — a one-character typo in story number.

**When:** Run **after Step 1.4 passes**, **before any file modifications** (before Step 2).

**Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py` (also: `{scripts_path}/validation/validate_rw_task_intent.py` when config exists)

**Agent execution:**

1. Use the token from Step 1.3 (mandatory after FR-060).
2. Full RW / RW -d:  
   `python {validator_path} --requested "<token>"`
3. **RW -k:**  
   `python {validator_path} --requested "<token>" --mode rw-k`  
   (skips comparison to `version.py` so kanban-init targets do not false-block.)
4. **Explicit adoption (`--art`) in any RW mode:**  
   `python {validator_path} --requested "<token>" --art`  
   `python {validator_path} --requested "<token>" --mode rw-k --art` (RW -k variant)  
   Use this when the user intentionally wants the requested task adopted as canonical release anchor.
5. **Exit codes:** `0` = proceed; `1` = **RW ABORTED** (print script output; no version/changelog/kanban edits); `2` = invalid parse/path — treat as blocking.
6. **Override:** Only after the user **explicitly confirms** the mismatched intent, re-run RW and invoke the script with **`--confirmed-override`**.

**Relation to FR-060:** Step 1.3–1.4 enforce **mandatory token** and **task doc releasability**; Step 1.5 adds **context comparison to `version.py`** and **story-typo detection** (BR-056).

**Verification scenarios (manual):**

| Scenario | Expected |
|----------|----------|
| User sends `RW` with no `E…S…T…` | RW ABORTED at Step 1.3 |
| Task doc `IN PROGRESS` (not perpetual), full RW | Exit 0 at Step 1.4 |
| Task doc `TODO` + IPW implementation evidence, full RW | Exit 1 at Step 1.4 with FR-077 drift reason |
| `version.py` = `E7:S06:T01`, user `RW E7S5T1` | Exit 1 at Step 1.5, RW ABORTED |
| Same story, new completed task `T2`, version file still `T1`, user `RW E7S6T2` | Exit 0 at Step 1.5 if `T2` is highest ✅ COMPLETE in Story checklist |
| `RW -k E6S6T56` while `version.py` differs | Exit 0 at Step 1.5 (`--mode rw-k`) |
| `RW E5:S01:T72 --art` while `version.py` differs | Exit 0 at Step 1.5 (explicit canonical adoption) |

---

### Step 2: Bump Version

**Step Definition:**
```yaml
- id: step-2
  name: Bump Version
  handler: release.version_bump
  dependencies: [step-1, step-1.3, step-1.4, step-1.5]
  config:
    version_file: src/confidentia/version.py  # [Example: Confidentia] Use {version_file_path} template placeholder
    # [Example: ai-dev-kit] version_file: src/fynd_deals/version.py
    increment_type: patch
```

**Agent Execution:**

**🚨 MANDATORY: Follow this 8-step procedure (A-H) exactly. Do not skip any step.**

**A. CHECK UKW CONTEXT (BEFORE READING VERSION):**
1. **ANALYZE:**
   - **CRITICAL:** Check if this RW was triggered immediately after UKW execution
   - **UKW Context Detection:** User ran "UKW" then "RW" → This is kanban synchronization work
   - **Context Indicators:**
     - Recent UKW execution (user ran UKW command)
     - Git status shows kanban doc changes (epic/story/task docs modified)
     - No specific task completion identified in recent commits
   - **Decision Point:**
     - ✅ **IF UKW context detected:** Skip to UKW Attribution Logic (A.1)
     - ❌ **IF NOT UKW context:** Proceed with normal version bump path (A.2)

**A.1. UKW ATTRIBUTION LOGIC (IF UKW CONTEXT DETECTED):**
1.1. **ANALYZE:**
   - **Dynamic Task Discovery:** Search for task document with `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
   - **Load config:** Use `kanban_root` and `task_doc_pattern` from config or fallback
   - **Search Pattern:** Iterate through all task documents looking for perpetual task flag
   - **Task ID Extraction:** Extract Epic/Story/Task ID from discovered perpetual task document
   - **Task ID is Project-Specific:** Perpetual UKW task ID varies by project:
     - ai-dev-kit: E6:S06:T08 (example)
     - Other projects: May be E4:S03:T05, E2:S01:T10, etc. (depends on project structure)

1.2. **DETERMINE:**
   - **Wiring Established:** UKW Step 1 already wired itself to the perpetual task (when user ran UKW)
   - **RW Uses Wired Task:** RW uses the perpetual task ID that UKW discovered and wired
   - **Version Decision:**
     - Use discovered perpetual task's Epic/Story/Task numbers
     - Keep `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK` from perpetual task
     - Increment `VERSION_BUILD` by 1 (same task, new build)

1.3. **EXECUTE:**
   - Search all task documents using pattern: `{kanban_root}/{task_doc_pattern}`
   - Read task documents looking for `perpetual_task: true` or `Task Type: Perpetual Maintenance`
   - When found, extract task's Epic/Story/Task ID (e.g., E6:S06:T08, E4:S03:T05)
   - Read current version file to get current `VERSION_BUILD`
   - Calculate new version: `v{VERSION_RC}.{PERPETUAL_EPIC}.{PERPETUAL_STORY}.{PERPETUAL_TASK}+{VERSION_BUILD+1}`

1.4. **VALIDATE:**
   - Perpetual UKW task found
   - Task ID extracted correctly
   - Current BUILD number retrieved
   - New BUILD = current BUILD + 1

1.5. **PROCEED:**
   - **Skip normal task identification:** Do not read Story file for task identification
   - **Skip normal version bump logic:** Do not compare task numbers (this is perpetual task)
   - **Document:** "UKW context detected. Found perpetual UKW task E{X}:S{Y}:T{Z} (via flag). Attributing release. BUILD increment: +{N}"
   - **Build Warning Suppression:** Perpetual tasks have flag, so high BUILD numbers are expected and valid
   - Move directly to Step 2.E (UPDATE VERSION FILE) or Step 3 (Create Detailed Changelog)

**A.1.5. CHECK CMW CONTEXT (AFTER UKW CHECK, BEFORE READING VERSION):**
1.5.1. **ANALYZE:**
   - **CRITICAL:** Check if this RW was triggered immediately after CMW execution (only if UKW context NOT detected)
   - **CMW Context Detection:** User ran "CMW" then "RW" → This is changelog maintenance work
   - **Context Indicators:**
     - Recent CMW execution (user ran CMW command manually)
     - Git status shows changelog changes (`CHANGELOG.md`, `CHANGELOG_ARCHIVE.md` modified)
     - No specific task completion identified in recent commits
     - Note: CMW can also run automatically via RW Step 9.5, but that doesn't trigger separate RW context
   - **Decision Point:**
     - ✅ **IF CMW context detected:** Skip to CMW Attribution Logic (A.1.5.1)
     - ❌ **IF NOT CMW context:** Proceed with normal version bump path (A.2)

**A.1.5.1. CMW ATTRIBUTION LOGIC (IF CMW CONTEXT DETECTED):**
1.5.1.1. **ANALYZE:**
   - **Dynamic Task Discovery:** Search for task document with `Task Type: Perpetual Maintenance` flag (for CMW)
   - **Load config:** Use `kanban_root` and `task_doc_pattern` from config or fallback
   - **Search Pattern:** Iterate through all task documents looking for perpetual task flag
   - **CMW Identification:** Look for task name/description containing "CMW" or "Changelog Maintenance Workflow"
   - **Task ID Extraction:** Extract Epic/Story/Task ID from discovered CMW perpetual task document
   - **Task ID is Project-Specific:** Perpetual CMW task ID varies by project:
     - ai-dev-kit: E6:S06:T12 (example)
     - Other projects: May be E4:S03:T06, E2:S01:T11, etc. (depends on project structure)

1.5.1.2. **DETERMINE:**
   - **Version Decision:**
     - Use discovered perpetual task's Epic/Story/Task numbers
     - Keep `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK` from perpetual task
     - Increment `VERSION_BUILD` by 1 (same task, new build)

1.5.1.3. **EXECUTE:**
   - Search all task documents using pattern: `{kanban_root}/{task_doc_pattern}`
   - Read task documents looking for `Task Type: Perpetual Maintenance` and CMW-related names
   - When found, extract task's Epic/Story/Task ID (e.g., E6:S06:T12, E4:S03:T06)
   - Read current version file to get current `VERSION_BUILD`
   - Calculate new version: `v{VERSION_RC}.{PERPETUAL_EPIC}.{PERPETUAL_STORY}.{PERPETUAL_TASK}+{VERSION_BUILD+1}`

1.5.1.4. **VALIDATE:**
   - Perpetual CMW task found
   - Task ID extracted correctly
   - Current BUILD number retrieved
   - New BUILD = current BUILD + 1

1.5.1.5. **PROCEED:**
   - **Skip normal task identification:** Do not read Story file for task identification
   - **Skip normal version bump logic:** Do not compare task numbers (this is perpetual task)
   - **Document:** "CMW context detected. Found perpetual CMW task E{X}:S{Y}:T{Z} (via flag). Attributing release. BUILD increment: +{N}"
   - **Build Warning Suppression:** Perpetual tasks have flag, so high BUILD numbers are expected and valid
   - Move directly to Step 2.E (UPDATE VERSION FILE) or Step 3 (Create Detailed Changelog)

**A.2. READ CURRENT VERSION (ONLY IF NOT UKW OR CMW CONTEXT):**
1. **ANALYZE:**
   - **Use config path:** Read current version from version file (from config `version_file` or fallback):
     - [Example: Confidentia] `src/confidentia/version.py` (or from `rw-config.yaml` if present)
     - [Example: ai-dev-kit] `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)
   - Extract current `VERSION_EPIC`, `VERSION_STORY`, `VERSION_TASK`, `VERSION_BUILD`
   - Document current version: `RC.EPIC.STORY.TASK+BUILD`
   - Understand version schema: `RC.EPIC.STORY.TASK+BUILD`
   - Check current Git branch to determine Epic number (already validated in Step 1)
   - Verify version matches branch schema (already checked in Step 1, but double-check)

**A.1. DETECT DOC-INIT STATE (NEW REQUIREMENT - FR-017):**
1.1. **ANALYZE (Doc-Init Detection):**
   - **MANDATORY:** Before proceeding with version bump, detect if this is a "doc-init" state
   - **Doc-Init Conditions (ALL must be true):**
     1. **New E/S/T Document Created:**
        - Detect if a new Epic/Story/Task document was created in this commit
        - Check git diff for new files matching E/S/T doc patterns:
          - Epic: `{kanban_root}/epics/Epic-{epic}/Epic-{epic}.md` OR `{kanban_root}/epics/Epic-{epic}.md`
          - Story: `{kanban_root}/epics/Epic-{epic}/Story-{story}-*.md`
          - Task: `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md` OR delimited section in Story file
        - **OR** detect if a new Task section was added to an existing Story file (delimited section format)
     2. **No Prior Version Exists:**
        - Check git history for prior versions of this E/S/T
        - Query changelog for prior entries matching `RC.EPIC.STORY.TASK+*`
        - If no prior version found → doc-init candidate
     3. **Docs-Only Changes:**
        - Verify ALL changed files are documentation only:
          - E/S/T doc files (Epic, Story, Task docs)
          - README/index updates (if allowed per policy)
          - Changelog entries (expected for doc-init)
          - No code files changed (`.py`, `.js`, `.ts`, `.java`, `.go`, `.rs`, etc.)
          - No test files changed (unless test files are part of Task doc structure)
        - Use `git diff --name-only` to list all changed files
        - Filter out documentation patterns, fail if code patterns detected
   - **Doc-Init Detection Result:**
     - ✅ **Doc-Init Detected:** If ALL three conditions are true → proceed to doc-init path (emit `+0`)
     - ❌ **Not Doc-Init:** If any condition is false → proceed to normal version bump path (emit `+1` or increment BUILD)
   - **CRITICAL:** Doc-init detection MUST happen BEFORE version bump logic
   - **CRITICAL:** If doc-init detected but non-doc changes found → FAIL validation (see Step 2 validation)

**B. IDENTIFY COMPLETED TASK (MANDATORY - ONLY IF NOT UKW CONTEXT):**
2. **ANALYZE (continued):**
   - **MANDATORY:** Read the Story file to identify completed task. **Use config paths:** If `rw-config.yaml` exists and `use_kanban: true`, use `kanban_root` and `story_doc_pattern` from config. Otherwise, use fallback patterns:
     - [Example: Confidentia] `docs/project-management/epics/overview/Epic {epic}/Story-{story}-*.md` (or from `rw-config.yaml` if present)
     - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md` (or from `rw-config.yaml` if present)
   - Find the MOST RECENTLY COMPLETED task in the Task Checklist (marked `✅ COMPLETE`)
   - Extract the task number from the task identifier: `E{epic}:S{story}:T{task}` (e.g., `E2:S02:T08` → task number is `8`)
   - **CRITICAL:** If no task is marked complete, or you cannot identify which task was just completed, **STOP** and ask the user which task was completed
   - **CRITICAL:** Document the completed task number for comparison
   
   **Doc-Init Scenarios:**
   - **Doc-Init Task Completion:** If doc-init was detected in A.1, the completed task is the NEW task whose document was just created
     - Example: Doc-init detected for `E2:S10:T01` → Completed task is `T01`
     - The Task document was just created (docs-only), establishing the version anchor
     - Version will be set to `RC.EPIC.STORY.TASK+0` (doc-init build)
   - **Normal Task Completion:** If doc-init was NOT detected, the completed task follows normal versioning rules
     - Example: Task `E2:S10:T02` completed with functional changes → Version will be `RC.EPIC.STORY.TASK+1` or increment BUILD
   - **Relationship:** Doc-init (`+0`) establishes the version anchor; subsequent functional work starts at `+1`
     - Doc-init: `0.2.10.1+0` = Task document created (docs-only)
     - First functional build: `0.2.10.1+1` = First functional change for that task
     - Subsequent builds: `0.2.10.1+2`, `0.2.10.1+3`, etc.

**B.1. LOCATE AND VALIDATE TASK DOCUMENT (MANDATORY):**
2.1. **ANALYZE (Task Document Location):**
   - **MANDATORY:** After identifying the completed task, you MUST locate and validate the Task document.
   - **Task Document Formats (per Kanban Governance Policy):**
     1. **Separate File Format (Preferred):**
        - Location patterns:
          - `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md`
          - `{kanban_root}/epics/Epic-{epic}/Story-{story}/T{task}-*.md`
        - [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-*.md` or `T001-*.md`
     2. **Delimited Section Format (Alternative):**
        - Location: Within the Story file itself
        - Pattern: Section header matching `### E{epic}:S{story}:T{task} –` or `### E{epic}:S{story}:T{task} –`
        - [Example] `### E4:S11:T01 – Update Kanban Governance Policy`
   - **MANDATORY:** Search for Task document in both formats:
     1. First, try separate file format (check Story directory for Task files)
     2. If not found, search Story file for delimited section with Task ID header
   - **CRITICAL:** If Task document is NOT found in either format, **STOP** and report error:
     - Error message: `❌ TASK DOCUMENT NOT FOUND: Task E{epic}:S{story}:T{task} does not have a Task document.`
     - Guidance: `Create Task document at: {kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-description.md OR add delimited section to Story file with header: ### E{epic}:S{story}:T{task} – Task Title`
     - **DO NOT PROCEED** until Task document exists

2.2. **VALIDATE (Task Document Requirements):**
   - **MANDATORY:** Validate Task document contains required fields (per Kanban Governance Policy):
     - ✅ **Task ID:** Must match `E{epic}:S{story}:T{task}` format
     - ✅ **Scope:** Clear description of what task accomplishes
     - ✅ **Acceptance Criteria:** Measurable criteria for task completion
     - ✅ **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
     - ✅ **Version Anchor:** Forensic marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
     - ✅ **Input:** What is required to start this task
     - ✅ **Deliverable:** What is produced by this task
   - **MANDATORY:** Verify Task ID alignment:
     - Task ID in document must match version components: `E{epic}:S{story}:T{task}`
     - Epic number must match `VERSION_EPIC`
     - Story number must match `VERSION_STORY`
     - Task number must match completed task number
   - **CRITICAL:** If Task document is missing required fields, **STOP** and report error:
     - Error message: `❌ TASK DOCUMENT INCOMPLETE: Task E{epic}:S{story}:T{task} document is missing required fields.`
     - Guidance: `Required fields: Task ID, Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable. See: packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
     - **DO NOT PROCEED** until Task document is complete
   - **CRITICAL:** If Task ID alignment fails, **STOP** and report error:
     - Error message: `❌ TASK ID MISMATCH: Task document Task ID does not match version components.`
     - Guidance: `Task ID in document: {found_id}, Expected: E{epic}:S{story}:T{task}`
     - **DO NOT PROCEED** until Task ID is corrected

2.3. **DOCUMENT (Task Document Location):**
   - Document Task document location (separate file path OR "delimited section in Story file")
   - Document Task document format (separate file OR delimited section)
   - Document validation results (required fields present, Task ID aligned)
   - **If Doc-Init Detected:** Document that this is a doc-init build (`+0`)
     - Note: Task document was just created (docs-only)
     - Note: This establishes the canonical version anchor
     - Note: Subsequent functional work will start at `+1`
   - **If Not Doc-Init:** Document normal versioning path
     - Note: Task document already exists (created previously or in doc-init)
     - Note: This is a functional build (`+1` or higher)

**B.2. CHECK PERPETUAL TASK FLAG (IF NOT UKW CONTEXT):**
   - **ANALYZE:**
     - Read task document for `perpetual_task: true` or `Task Type: Perpetual Maintenance`
     - Check if this is a perpetual maintenance task
   - **DETERMINE:**
     - **IF perpetual task:** Note for build warning suppression (high BUILD numbers expected and valid)
     - **IF not perpetual:** Normal task handling applies
   - **EXECUTE:**
     - Search task document metadata/frontmatter for perpetual task flag
     - Check task document content for "Perpetual Maintenance" type designation
   - **VALIDATE:**
     - Flag detected correctly
     - Build warning suppression noted if perpetual
   - **PROCEED:**
     - Document perpetual task status
     - Move to Step 2.C (DETERMINE VERSION BUMP)

**B.3. DOC-INIT SCENARIOS AND EXAMPLES:**

**Example 1: Doc-Init Build (First-Time Task Document Creation)**
- **Scenario:** Creating Task document for `E2:S10:T01` for the first time
- **Detection (A.1):**
  - ✅ New Task document created: `docs/project-management/kanban/epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md` (delimited section)
  - ✅ No prior version exists: No `0.2.10.1+*` in git history or changelog
  - ✅ Docs-only changes: Only `.md` files changed, no code files
- **Task Identification (B):**
  - Completed task: `E2:S10:T01` (Task document just created)
  - Task document: Found in delimited section within Story file
  - Task document validation: All required fields present, Task ID aligned
- **Version Decision (C):**
  - Doc-init detected → `VERSION_TASK = 1`, `VERSION_BUILD = 0`
  - New version: `0.2.10.1+0` (doc-init build)
- **Result:** Version anchor established. Next functional build will be `0.2.10.1+1`

**Example 2: Normal Build After Doc-Init (First Functional Change)**
- **Scenario:** First functional change for `E2:S10:T01` (after doc-init `+0`)
- **Detection (A.1):**
  - ❌ Not doc-init: Task document already exists (created in `+0` build)
  - ❌ Code changes present: `.py` files modified
- **Task Identification (B):**
  - Completed task: `E2:S10:T01` (same task as doc-init)
  - Task document: Already exists (from doc-init build)
  - Current version: `0.2.10.1+0` (from doc-init)
- **Version Decision (C):**
  - Same task, but first functional build → `VERSION_TASK = 1`, `VERSION_BUILD = 1`
  - New version: `0.2.10.1+1` (first functional build)
- **Result:** Functional work begins. Subsequent builds: `+2`, `+3`, etc.

**Example 3: Normal Build (New Task, No Doc-Init)**
- **Scenario:** Completing `E2:S10:T02` with functional changes (Task document created earlier, not in this commit)
- **Detection (A.1):**
  - ❌ Not doc-init: Task document already exists (created previously)
  - ❌ Code changes present: `.py` files modified
- **Task Identification (B):**
  - Completed task: `E2:S10:T02` (new task)
  - Task document: Already exists (created earlier)
  - Current version: `0.2.10.1+1` (previous task)
- **Version Decision (C):**
  - New task → `VERSION_TASK = 2`, `VERSION_BUILD = 1`
  - New version: `0.2.10.2+1` (new task, first build)
- **Result:** New task versioned. Note: If Task document was created in this commit with code changes, it would NOT be doc-init (fails docs-only requirement).

**Example 4: Normal Build (Story + Task Docs Created Together - Bug Fix)**
- **Scenario:** Story + all task docs created together in story's abstract space (v0.E.S.0+0). When first task implementation work is done, RW runs.
- **Detection (A.1):**
  - ❌ Not doc-init: Task document already exists (created in story's abstract space commit, not in this commit)
  - ❌ Code changes present: `.py` files modified
  - ✅ **CRITICAL FIX:** Function checks if task document already exists (even if not created in this commit)
  - ✅ If task doc exists → NOT doc-init → BUILD=1 (not 0)
- **Task Identification (B):**
  - Completed task: `E4:S13:T01` (first task from story)
  - Task document: Already exists (created in story's abstract space)
  - Current version: `0.4.13.0+0` (from story creation)
- **Version Decision (C):**
  - New task, but task doc exists → `VERSION_TASK = 1`, `VERSION_BUILD = 1` (NOT 0)
  - New version: `0.4.13.1+1` (first functional build, NOT doc-init)
- **Result:** First functional work correctly gets BUILD=1. Bug fixed: Previously would incorrectly get BUILD=0 because no task-level S.T+0 commit existed.

**Key Distinctions:**
- **Doc-Init (`+0`):** Task document created NOW (in this commit), docs-only, no prior version → `+0`
- **Normal Build (`+1` or higher):** Task document already exists OR code changes present → `+1` or increment BUILD
- **Relationship:** Doc-init establishes anchor; functional work builds on it
- **CRITICAL FIX:** If task document already exists (even if not created in this commit), it's NOT doc-init. This fixes the bug where story + task docs created together causes first implementation work to incorrectly get BUILD=0.

**C. DETERMINE VERSION BUMP (MANDATORY LOGIC - ONLY IF NOT UKW CONTEXT):**
3. **DETERMINE:**
   - **MANDATORY:** Compare completed task number to current `VERSION_TASK`:
     - **IF completed task number > current VERSION_TASK:** This is a NEW TASK (forward progression)
       - Set `VERSION_TASK` = completed task number
       - Set `VERSION_BUILD` = 1 (reset to 1 for new task)
       - Example: Current `0.2.2.3+5`, completed T008 → New version: `0.2.2.8+1`
       - [Example: ai-dev-kit] If completing Task 2, and `VERSION_TASK = 1`:
         - Update: `VERSION_TASK = 2`, `VERSION_BUILD = 1`
         - Next version: `0.4.3.2+1` (Task 2, Build 1)
     - **IF completed task number == current VERSION_TASK:** This is SAME TASK, new build
       - Keep `VERSION_TASK` unchanged
       - Increment `VERSION_BUILD` by 1
       - Example: Current `0.2.2.3+1`, completed T003 → New version: `0.2.2.3+2`
       - [Example: Confidentia] If current is `0.4.3.2+8`, next is `0.4.3.2+9`
       - [Example: ai-dev-kit] If current is `0.2.1.1+2`, next is `0.2.1.1+3`
     - **IF completed task number < current VERSION_TASK:** This is OUT-OF-ORDER TASK COMPLETION
       - **This is VALID** - Tasks can be completed out of sequential order
       - Set `VERSION_TASK` = completed task number (use completed task, not current)
       - Set `VERSION_BUILD` = 1 (reset to 1 for the completed task)
       - Example: Current `0.3.2.6+1`, completed T005 → New version: `0.3.2.5+1`
       - **CRITICAL:** Version reflects completed task, not current VERSION_TASK
       - **CRITICAL:** Changelog entry will appear before higher task numbers (canonical ordering)
       - **Note:** This enables parallel task work and out-of-order completion
   - Validate version matches branch:
     - [Example: Confidentia] Epic 4 = `0.4.x.x+x`
     - [Example: ai-dev-kit] Epic 2 = `0.2.x.x+x`

**D. VALIDATE BEFORE UPDATING:**
4. **VALIDATE (before update):**
   - **If Doc-Init Detected:**
     - Verify: `VERSION_BUILD` = 0 (doc-init must be `+0`)
     - Verify: All changes are docs-only (re-verify from A.1)
     - Verify: New E/S/T doc exists (re-verify from A.1)
     - Verify: No prior version exists (re-verify from A.1)
     - **CRITICAL:** If non-doc changes detected → FAIL validation (doc-init must be docs-only)
     - Document decision: "Doc-init detected for Task {completed_task}. New E/S/T doc created, docs-only changes verified, no prior version exists. Decision: doc_init → TASK={new_task}, BUILD=0"
   - **If Not Doc-Init (Normal Version Bump):**
     - Verify: New `VERSION_TASK` matches completed task number (always use completed task, not current)
     - Verify: If new task or out-of-order task, `VERSION_BUILD` = 1; if same task, `VERSION_BUILD` = current + 1
     - Document decision: "Task {completed_task} completed. Current TASK={current_task}, BUILD={current_build}. Decision: {new_task/out_of_order/same_task} → TASK={new_task}, BUILD={new_build}"

**E. UPDATE VERSION FILE:**
5. **EXECUTE:**
   - **If Doc-Init Detected:**
     - Update `VERSION_TASK` to match completed Task number (from Task document)
     - Update `VERSION_BUILD` to 0 (doc-init build `+0`)
     - **Use config path:** Update version file (from config `version_file` or fallback):
       - [Example: Confidentia] `src/confidentia/version.py` (or from `rw-config.yaml` if present)
       - [Example: ai-dev-kit] `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)
       - Use `search_replace` tool to update both `VERSION_TASK` and `VERSION_BUILD`
     - Update `VERSION_STRING` to reflect new version (e.g., `0.2.10.1+0`)
     - Update `VERSION_INFO["description"]` if present (e.g., "Doc-init: E2:S10:T01 document created")
   - **If Task Transition (New Task or Out-of-Order Task):**
     - Update `VERSION_TASK` to match completed Task number (always use completed task, not current)
     - Update `VERSION_BUILD` to 1
     - **Use config path:** Update version file (from config `version_file` or fallback):
       - [Example: Confidentia] `src/confidentia/version.py` (or from `rw-config.yaml` if present)
       - [Example: ai-dev-kit] `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)
       - Use `search_replace` tool to update both `VERSION_TASK` and `VERSION_BUILD`
   - **If Same Task (BUILD Increment):**
     - Update `VERSION_BUILD` only (increment by 1)
     - **Use config path:** Update version file (from config `version_file` or fallback):
       - [Example: Confidentia] `src/confidentia/version.py` (or from `rw-config.yaml` if present)
       - [Example: ai-dev-kit] `src/fynd_deals/version.py` (or from `rw-config.yaml` if present)
       - Use `search_replace` tool to update `VERSION_BUILD`
   - Update `VERSION_STRING` to reflect new version
   - Update `VERSION_INFO["description"]` if present

**F. VALIDATE AFTER UPDATING:**
6. **VALIDATE (after update):**
   - Re-read version file to confirm update
   - Verify version format is valid: `RC.EPIC.STORY.TASK+BUILD`
   - Check version matches branch schema
   - **If Doc-Init Detected:**
     - **CRITICAL:** Verify `VERSION_BUILD = 0` (doc-init must be `+0`)
     - **CRITICAL:** Verify `VERSION_TASK` matches completed task number from Task document
     - **CRITICAL:** Re-verify all changes are docs-only (final validation before proceeding)
   - **If Not Doc-Init (Normal Version Bump):**
     - **CRITICAL:** Verify `VERSION_TASK` matches completed task number from Story (always use completed task)
     - **CRITICAL:** If Task transition (new or out-of-order), verify `VERSION_BUILD = 1`
     - **CRITICAL:** If same Task, verify `VERSION_BUILD` incremented correctly (current + 1)

**G. PROCEED:**
7. **PROCEED:**
   - Document version bump with decision rationale:
     - **If Doc-Init Detected:**
       - [Example: ai-dev-kit] "Version bumped: Doc-init detected. Task E2:S10:T01 document created. New E/S/T doc detected, docs-only changes verified, no prior version exists. Decision: doc_init → TASK=1, BUILD=0. New version: 0.2.10.1+0"
       - **Note:** Doc-init establishes canonical version anchor before functional changes
     - **If Task Transition:**
       - [Example: ai-dev-kit] "Version bumped: Task transition detected. Task E2:S02:T08 completed. Current TASK=3, BUILD=5. Decision: new_task → TASK=8, BUILD=1. New version: 0.2.2.8+1"
     - **If Same Task:**
       - [Example: Confidentia] "Version bumped: Task E4:S03:T02 completed. Current TASK=2, BUILD=8. Decision: new_build → TASK=2, BUILD=9. New version: 0.4.3.2+9"
       - [Example: ai-dev-kit] "Version bumped: Task E2:S01:T01 completed. Current TASK=1, BUILD=2. Decision: new_build → TASK=1, BUILD=3. New version: 0.2.1.1+3"
   - Pass `new_version` to Step 3
   - **If Doc-Init:** Note that changelog entry should include "Doc Init" section (see Step 3)
   - Move to Step 3

**🚨 CRITICAL REMINDERS:**
- **NEVER skip reading the Story file** - It's the source of truth for completed tasks
- **NEVER assume same task** - Always compare completed task number to current VERSION_TASK
- **ALWAYS check for doc-init state FIRST** - Doc-init detection (A.1) must happen before version bump logic
- **ALWAYS validate docs-only for doc-init** - Doc-init builds (`+0`) MUST be docs-only (no code changes)
- **NEVER emit `+0` for functional changes** - Functional changes require `+1` or higher
- **ALWAYS validate before and after** - Catch errors before they propagate
- **ALWAYS document your decision** - Show your work for traceability
- See `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` for error prevention reference
- See `docs/project-management/kanban/fr-br/FR-017-versioning-policy-hardening-doc-init-build.md` for doc-init requirements (FR-017)
- See `docs/project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md` for Task document requirements (FR-016)
- See `docs/project-management/kanban/fr-br/FR-018-abstract-space-for-zero-numbered-est-docs.md` for abstract space concept (FR-018)

---

## Task Document Requirements

**CRITICAL:** This section documents the mandatory Task document requirements that must be satisfied before Release Workflow can proceed. These requirements are enforced in Step 2 (B.1: Locate and Validate Task Document) and are based on the Kanban Governance Policy and Versioning Policy.

### 3-Tier Structure Requirement

All work MUST follow the explicit **3-tier structure**: Epic → Story → Task. This structure is **mandatory** and **non-negotiable**.

- **Epic** contains Stories (high-level scope)
- **Story** contains Tasks (releasable slices)
- **Task** is the atomic work unit (implementation detail)

**No implicit or inline tasks are permitted.** Every task MUST be explicitly documented at the Task tier.

**Policy Reference:**
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Section 3.3: Tasks
- **Kanban Governance Policy (Dev-Kit):** `docs/project-management/rituals/policy/kanban-governance-policy.md` - Section 3.3: Tasks

### Discrete Task Document Requirement

Every Task MUST have a discrete Task document (or clearly delimited section within the Story document using the Task ID as a header). Tasks cannot be implicit, bundled, or introduced inline.

**Policy Reference:**
- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Section 3.3: Task Document Requirements
- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Task doc requirements

### Task Document Formats

Tasks can be documented in one of two formats:

#### Format 1: Separate Task File (Recommended)

**Location Patterns:**
- `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md`
- `{kanban_root}/epics/Epic-{epic}/Story-{story}/T{task}-*.md`

**Examples:**
- [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-update-kanban-policy.md`
- [Example: ai-dev-kit] `docs/project-management/kanban/epics/Epic-4/Story-11/T001-update-kanban-policy.md`

**When to Use:**
- Tasks with significant complexity or multiple phases
- Tasks that may have associated files (diagrams, notes, etc.)
- Tasks that benefit from standalone documentation
- Projects requiring maximum traceability

**Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`

**Example:** `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`

#### Format 2: Delimited Section Within Story (Alternative)

**Location:** Within the Story document itself

**Format:** Section header matching `### E{epic}:S{story}:T{task} – Task Name` followed by task content

**Example:**
```markdown
### E4:S11:T01 – Update Kanban Governance Policy

**Input:** Current Kanban governance policy documents
**Deliverable:** Updated Kanban governance policy mandating 3-tier structure
**Status:** ✅ COMPLETE (v0.4.11.1+0)
...
```

**When to Use:**
- Simple, straightforward tasks
- Tasks with minimal documentation needs
- Projects with tight documentation requirements
- Tasks that are tightly coupled to the Story

**Example:** `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

### Required Task Document Fields

Every Task document MUST include the following fields (regardless of format):

- ✅ **Task ID:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)
- ✅ **Scope:** Clear description of what the task accomplishes
- ✅ **Acceptance Criteria:** Measurable criteria for task completion
- ✅ **Status:** Current status (TODO, IN PROGRESS, COMPLETE)
- ✅ **Version Anchor:** Forensic marker when task is complete (e.g., `✅ COMPLETE (v0.4.11.1+1)`)
- ✅ **Input:** What is required to start this task
- ✅ **Deliverable:** What is produced by this task
- ✅ **Dependencies:** Other tasks or work items this task depends on
- ✅ **Related BR/FR Links:** Links to related Bug Reports or Feature Requests (if applicable)

**Template Reference:**
- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md` (for delimited section format)

### Task Document Validation in Release Workflow

**Step 2 (B.1) Enforcement:**

The Release Workflow enforces Task document requirements in Step 2 (B. IDENTIFY COMPLETED TASK), subsection B.1 (LOCATE AND VALIDATE TASK DOCUMENT):

1. **Location:** Agent MUST locate Task document in either format (separate file OR delimited section)
2. **Presence:** If Task document is NOT found, workflow STOPS with error
3. **Fields:** Agent MUST validate all required fields are present
4. **Alignment:** Agent MUST verify Task ID matches version components (Epic/Story/Task)

**Error Handling:**

If Task document validation fails, the workflow:
- ❌ **STOPS immediately** (does not proceed to version bump)
- 📋 **Reports clear error message** with guidance on creating/fixing Task document
- 🔗 **Provides links** to templates and examples
- ⚠️ **Marks workflow as BLOCKED** until Task document is created/fixed

**Example Error Messages:**

```
❌ TASK DOCUMENT NOT FOUND: Task E4:S11:T01 does not have a Task document.

Action Required:
1. Create Task document at: docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-description.md
   OR
2. Add delimited section to Story file with header: ### E4:S11:T01 – Task Title

See: packages/frameworks/kanban/templates/TASK_TEMPLATE.md
```

```
❌ TASK DOCUMENT INCOMPLETE: Task E4:S11:T01 document is missing required fields.

Missing Fields: Input, Deliverable

Required fields: Task ID, Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable
See: packages/frameworks/kanban/templates/TASK_TEMPLATE.md
```

```
❌ TASK ID MISMATCH: Task document Task ID does not match version components.

Task ID in document: E4:S11:T02
Expected: E4:S11:T01
Version components: Epic=4, Story=11, Task=1

Action Required: Update Task document Task ID to match version components.
```

### Versioning Policy Integration

**Task Document → Version Alignment:**

The Versioning Policy requires that:
- Task document MUST exist before versioning (enforced in RW Step 2)
- Task ID in document MUST match version TASK component
- Epic/Story/Task alignment MUST be verified before version bump

**Policy References:**
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Task doc requirements
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md` - Kanban-related sections

### Examples

#### Example 1: Separate Task File Format

**Task:** E4:S11:T01 – Update Kanban Governance Policy

**Location:** `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-update-kanban-policy.md`

**Task Checklist Entry (in Story file):**
```markdown
- [x] **E4:S11:T01 – Update Kanban Governance Policy** ✅ COMPLETE (v0.4.11.1+0)
  - Task Doc: [`Task-001-update-kanban-policy.md`](Task-001-update-kanban-policy.md)
```

**RW Step 2 Behavior:**
1. Identifies completed task: E4:S11:T01
2. Locates Task document: `docs/project-management/kanban/epics/Epic-4/Story-11/Task-001-update-kanban-policy.md`
3. Validates required fields: ✅ All present
4. Verifies Task ID alignment: ✅ E4:S11:T01 matches version components
5. Proceeds to version bump

#### Example 2: Delimited Section Format

**Task:** E4:S11:T02 – Create Task Document Template

**Location:** Delimited section within Story file: `docs/project-management/kanban/epics/Epic-4/Story-11/Story-011-kanban-granularity-discrete-task-docs.md`

**Task Section in Story file:**
```markdown
### E4:S11:T02 – Create Task Document Template and Update Story Template

**Input:** Current Story template
**Deliverable:** Task document template and updated Story template
**Status:** ✅ COMPLETE (v0.4.11.2+2)
...
```

**RW Step 2 Behavior:**
1. Identifies completed task: E4:S11:T02
2. Searches Story file for delimited section: `### E4:S11:T02 –`
3. Locates Task document: "delimited section in Story file"
4. Validates required fields: ✅ All present
5. Verifies Task ID alignment: ✅ E4:S11:T02 matches version components
6. Proceeds to version bump

### Related Documentation

**Policy Documents:**
- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Kanban Governance Policy (Dev-Kit):** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Versioning Policy (Dev-Kit):** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **Versioning Policy (Framework):** `packages/frameworks/numbering & versioning/versioning-policy.md`

**Templates:**
- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`

**Examples:**
- **Separate File Format:** `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md`
- **Delimited Section Format:** `packages/frameworks/kanban/examples/Story-Example-With-Delimited-Tasks.md`

**Related Stories:**
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) - Policy and template work
- **E2:S09:** Kanban Granularity & Discrete Task Docs (Workflow Management) - RW integration

---

### Step 3: Create Detailed Changelog

**Step Definition:**
```yaml
- id: step-3
  name: Create Detailed Changelog
  handler: release.changelog_create
  dependencies: [step-2]
  config:
    changelog_dir: docs/changelog-and-release-notes/changelog-archive
    format: full_timestamp
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2 output:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.1.1+3"`
   - Get release summary from workflow parameters
   - Get change type from workflow parameters
   - Extract Epic/Story from Git branch name:
     - [Example: Confidentia] `epic/4` → Epic 4
     - [Example: ai-dev-kit] `epic/2` → Epic 2
   - Understand timestamp format: `YYYY-MM-DD HH:MM:SS UTC`
   - Check changelog directory exists

2. **DETERMINE:**
   - Generate full timestamp: `date -u +"%Y-%m-%d %H:%M:%S UTC"`
   - Determine Epic number from branch:
     - [Example: Confidentia] `epic/4` → Epic 4
     - [Example: ai-dev-kit] `epic/2` → Epic 2
   - Determine Story number from version:
     - [Example: Confidentia] `0.4.3.2+9` → Story 3
     - [Example: ai-dev-kit] `0.2.1.1+3` → Story 1
   - **Use config path:** Create changelog file path (from config `changelog_dir` or fallback):
     - [Example: Confidentia] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+9.md` (or from `rw-config.yaml` if present)
     - [Example: ai-dev-kit] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.1.1+3.md` (or from `rw-config.yaml` if present)
   - Review previous changelog format for consistency

3. **EXECUTE:**
   - Generate timestamp using system command
   - **PLAN Phase - Create PLAN Section:**
     - **Objectives:** Document what this release aims to achieve
       - List specific objectives for this release
       - Be clear and measurable
       - Example: "Add Step 12 to Release Workflow", "Fix changelog verification issue"
     - **Expected Outcomes:** Document what success looks like
       - Describe what should be achieved
       - Define success criteria
       - Example: "Step 12 added and documented", "Changelog verification working"
     - **Verification Plan:** Document how success will be verified
       - Define verification methods (test suite, manual testing, observation)
       - Specify what evidence will be collected
       - Link to Step 12 (CHECK phase) verification
       - Example: "Run test suite", "Manual testing of Step 12", "Review documentation"
   - **CRITICAL - Verification Check for Fixes:**
     - If this release includes bug fixes, check verification status:
       - **Verified fixes:** Must have evidence of testing (test suite pass or documented manual test results)
       - **Unverified fixes:** Must be logged as "Attempted Fix (Pending Verification)" until verified
     - **DO NOT** mark fixes as "Fixed" in changelog until verification is complete
   - Create changelog file with proper format:
     - Release Date (full timestamp)
     - Epic and Story information
     - Type (with emoji)
     - Summary
     - **PLAN Phase section (NEW):**
       - Objectives
       - Expected Outcomes
       - Verification Plan
     - Changes section:
       - **Fixed** section: Only verified fixes (with verification evidence)
       - **Attempted Fixes** section: Unverified fixes (pending verification)
       - Verification Status field for each fix entry
     - Related Tasks section
   - **Changelog immutability guards (BR-074):**
     - **Before creating:** Check if `CHANGELOG_v{version}.md` already exists in `changelog_dir`. If it exists, **STOP** — this indicates a same-task BUILD > 1 release where the prior-build changelog was incorrectly deleted or overwritten. Do **not** overwrite; create a new file with the incremented BUILD only.
     - **Use the post-bump version** from Step 2 for the `Internal Version:` header line. Do **not** use the pre-bump version.

4. **VALIDATE:**
   - Verify file was created
   - Check timestamp format is correct (`YYYY-MM-DD HH:MM:SS UTC`)
   - Verify all required fields are present
   - **CRITICAL - Verification Validation:**
     - If changelog contains "Fixed" entries, verify each has:
       - Verification status: `Verified` or `Attempted Fix (Pending Verification)`
       - Verification method: `Test Suite` or `Manual Testing`
       - Verification evidence: Test results or manual test documentation
     - If any fix is marked as "Fixed" without verification evidence, **STOP** and require verification
   - **CRITICAL - BR-074 Changelog Immutability Validation:**
     - Verify the file path uses the **post-bump version** (from Step 2), not the pre-bump version
     - Verify the `Internal Version:` header inside the file matches the post-bump version
     - Verify no existing `CHANGELOG_v{version}.md` was overwritten (file mtime should be new)
   - Check file is readable

5. **PROCEED:**
   - Document changelog creation:
     - [Example: Confidentia] "Created detailed changelog: CHANGELOG_v0.4.3.2+9.md"
     - [Example: ai-dev-kit] "Created detailed changelog: CHANGELOG_v0.2.1.1+3.md"
   - Pass `changelog_file` path to Step 4
   - Move to Step 4

---

### Step 4: Update Main Changelog

**Step Definition:**
```yaml
- id: step-4
  name: Update Main Changelog
  handler: release.changelog_update
  dependencies: [step-3]
  config:
    main_changelog: CHANGELOG.md
    date_format: DD-MM-YY
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.1.1+3"`
   - Get summary and change type from parameters
   - **Use config path:** Read main changelog (from config `main_changelog` or fallback `CHANGELOG.md`) to find "## Recent Releases" section
   - **CRITICAL - Entry Preservation:** Read ENTIRE existing CHANGELOG.md content - DO NOT truncate or skip any entries
   - **CRITICAL - Backup Before Write:** Create backup of CHANGELOG.md: `CHANGELOG.md.backup` (or `CHANGELOG.md.{timestamp}.backup`)
   - Count existing entries: Extract all `## [version]` headers and count total entries
   - **CRITICAL - Canonical Ordering:** Read ALL existing changelog entries and extract version numbers
   - Parse existing version numbers: Extract `## [version]` headers and parse `RC.EPIC.STORY.TASK+BUILD` format
   - Understand canonical ordering: Versions must be ordered by version number (RC → EPIC → STORY → TASK → BUILD), NOT by insertion time
   - Understand date format: `DD-MM-YY` (e.g., `01-12-25`)

2. **DETERMINE:**
   - Generate summary date: Current date in `DD-MM-YY` format
   - Determine entry format: `### [version] - date`
   - **CRITICAL - Find Correct Insertion Point:**
     - Parse new version: `RC.EPIC.STORY.TASK+BUILD` → (RC, EPIC, STORY, TASK, BUILD)
     - For each existing entry:
       - Parse existing version: `RC.EPIC.STORY.TASK+BUILD` → (RC, EPIC, STORY, TASK, BUILD)
       - Compare versions using canonical ordering:
         - Compare RC first (if equal, continue)
         - Compare EPIC second (if equal, continue)
         - Compare STORY third (if equal, continue)
         - Compare TASK fourth (if equal, continue)
         - Compare BUILD last
       - If new version < existing version: Insert before this entry
       - If new version > existing version: Continue to next entry
     - If no existing entry is greater: Insert at end
   - **NEVER assume "top" or "newest"** - Always use version number comparison
   - Create summary entry with link to detailed changelog

3. **EXECUTE:**
   - Insert new entry at correct position based on canonical ordering (NOT at top)
   - Format examples:
     - [Example: Confidentia] `### [0.4.3.2+9] - 01-12-25`
     - [Example: ai-dev-kit] `### [0.2.1.1+3] - 02-12-25`
   - Include summary with emoji
   - **CRITICAL - Verification Check for Fixes:**
     - If this release includes bug fixes, check verification status from detailed changelog:
       - **Verified fixes:** Include in "Fixed" subsection
       - **Unverified fixes:** Include in "Attempted Fixes" subsection (not in "Fixed")
     - **DO NOT** list unverified fixes under "Fixed" section
   - Add link to detailed changelog file

4. **VALIDATE:**
   - **CRITICAL - Entry Preservation Validation:**
     - Re-read entire CHANGELOG.md after write
     - Count entries: New count should equal old count + 1
     - Verify ALL existing entries are still present (compare version lists)
     - If any existing entry is missing: **RESTORE from backup, STOP, report error**
   - Verify entry was inserted correctly
   - Check date format is `DD-MM-YY`
   - Verify link to detailed changelog is correct
   - **CRITICAL - Canonical Ordering Validation:**
     - Verify entry is in correct canonical order (by version number, NOT by insertion time)
     - Re-read changelog entries and verify all versions are in canonical order
     - Check that new version appears after all smaller versions and before all larger versions
     - If ordering violation detected: **RESTORE from backup, STOP, report error**
   - **CRITICAL - Version Continuity Check:**
     - Verify no version gaps introduced
     - If gaps detected: **RESTORE from backup, STOP, report error**
   - **CRITICAL - Verification Validation:**
     - If entry includes "Fixed" subsection, verify all listed fixes have verification evidence in detailed changelog
     - If any fix in "Fixed" section lacks verification evidence, **STOP** and require verification
     - Verify "Attempted Fixes" section exists if there are unverified fixes
   - **CRITICAL - Large Deletion Detection:**
     - Calculate line count difference: If >100 lines removed, **RESTORE from backup, STOP, report error**
     - This prevents accidental file overwrites

5. **PROCEED:**
   - **CRITICAL - Cleanup Backup:**
     - Only remove backup file if all validations passed
     - If any validation failed, backup remains for manual recovery
   - Document: "Updated main changelog with summary entry"
   - Document: "Backup created and validated: All entries preserved"
   - Move to Step 5 (can run in parallel with Steps 5-6)

---

### Step 5: Update README

**Step Definition:**
```yaml
- id: step-5
  name: Update README
  handler: release.readme_update
  dependencies: [step-2]
  config:
    readme_file: README.md
    update_version_text: true
    update_badge: true
    update_latest_release: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Get internal `new_version` from Step 2 (e.g. `"0.6.6.10+14"`).
   - Use `semver_converter.py` (and project config, such as `semver_mode`) to derive the **SemVer release version** from `new_version`.
   - Get summary and change type from parameters.
   - **Use config path:** Read README file (from config `readme_file` or fallback `README.md`).
   - **MANDATORY:** Find and identify version text pattern in README:
     - Common formats: `**Version:** v{semver}`, `Version: {semver}`, `version: {semver}`.
     - May be in header section, near badges, or in About section.
   - **Optional:** Find version badge format: `[![Version](...badge/version-{semver}-blue)...]`.
   - **Optional:** Find latest release format: `**🎉 Latest Release: v{semver}** - {summary}`.

2. **DETERMINE:**
   - **MANDATORY:** Update version text to use the **SemVer release version as the primary external-facing value**.
   - **Optional:** Update version badge - Replace version in badge URL (if present).
   - **Optional:** Update latest release - Replace version and summary (if present).
   - Optionally include the internal version in supporting text (for example, “internal: v{RC.EPIC.STORY.TASK+BUILD}”), but not as the main displayed version.
   - Find exact patterns in README to replace.

3. **EXECUTE:**
   - **MANDATORY:** Update version text using `search_replace` (e.g., `**Version:** v{old_semver}` → `**Version:** v{new_semver}`).
   - **Optional:** Update version badge using `search_replace` (if present).
   - **Optional:** Update latest release callout using `search_replace` (if present).

4. **VALIDATE:**
   - **MANDATORY:** Verify version text contains the new SemVer release version.
   - **Optional:** Verify badge URL contains new SemVer version (if badge exists).
   - **Optional:** Verify latest release callout has new SemVer version and summary (if present).
   - Check README is still valid Markdown.

5. **PROCEED:**
   - Document: "Updated README SemVer project version, badge, and latest release (internal version remains in version file and detailed changelog)."
   - Move to Step 6 (can run in parallel with Steps 4-6)

---

### Step 6: Update BR/FR Docs

**Step Definition:**
```yaml
- id: step-6
  name: Update BR/FR Docs
  handler: release.br_fr_update
  dependencies: [step-2]
  config:
    fr_br_root: docs/project-management/kanban/fr-br  # Default location for FR/BR files
    br_pattern: BR-*.md
    fr_pattern: FR-*.md
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: ai-dev-kit] `"0.2.1.1+3"`
   - Get completed task identifier from Step 2:
     - [Example: ai-dev-kit] `E2:S01:T01`
   - Get release summary from workflow parameters
   - Extract Epic/Story/Task from completed task identifier
   - **Use config paths:** Find FR/BR root directory (from config `fr_br_root` or fallback):
     - [Example: ai-dev-kit] `docs/project-management/kanban/fr-br` (or from `rw-config.yaml` if present)
   - Understand BR/FR linking pattern:
     - BRs/FRs are linked to Tasks via "Intake Decision" section
     - Search for BR/FR files that reference the completed task
   - Understand fix attempt documentation requirements:
     - Document flaw description
     - Document attempted fix
     - Document verification status
     - Document lessons learned (if fix failed)

2. **DETERMINE:**
   - **Search for linked BR/FR files:**
     - Search Story file for references to BR/FR files
     - Search Epic file for references to BR/FR files
     - Search task description for BR/FR links
     - Search "Intake Decision" sections in BR/FR files for task references
   - **For Bug Reports (BR):**
     - If BR is linked to completed task:
       - Add new entry to "Fix Attempt History" section
       - Document flaw description (from BR or task description)
       - Document attempted fix (from changelog or task description)
       - Document verification status (from Step 3 changelog or task)
       - Document lessons learned if fix failed
   - **For Feature Requests (FR):**
     - If FR is linked to completed task:
       - Update "Intake Decision" section with implementation status
       - Document implementation details (from changelog or task description)
       - Document verification status (from Step 3 changelog or task)
   - **If no BR/FR linked:**
     - Skip this step (no BR/FR to update)
     - Document: "No BR/FR linked to this task"

3. **EXECUTE:**
   - **For Bug Reports:**
     - Read BR file
     - Add new entry to "Fix Attempt History" section:
       ```markdown
       #### Attempt N: [Version] - [Date]
       
       **Fix Description:**
       [Describe what was attempted to fix this bug]
       
       **Changes Made:**
       - [List specific changes from changelog or task description]
       
       **Verification Status:**
       - [ ] Verified (test suite passed / manual test passed)
       - [ ] Attempted Fix (pending verification)
       - [ ] Fix Failed (bug still present)
       
       **Verification Method:**
       - [ ] Test suite execution
       - [ ] Manual testing
       - [ ] Both
       
       **Verification Evidence:**
       [Link to test results, CI/CD output, or documentation]
       
       **Result:**
       - [ ] Bug Fixed
       - [ ] Bug Partially Fixed (describe partial fix)
       - [ ] Bug Not Fixed (describe why fix didn't work)
       
       **Lessons Learned:**
       [What was learned from this attempt? What should be tried differently next time?]
       
       **Next Steps:**
       [What should be attempted in the next fix attempt?]
       ```
     - Update BR file with fix attempt entry
   - **For Feature Requests:**
     - Read FR file
     - Update "Intake Decision" section:
       - Add implementation status: `**Implementation Status:** IMPLEMENTED (v{version})`
       - Add implementation date: `**Implementation Date:** {date}`
       - Add verification status: `**Verification Status:** {Verified/Attempted Fix (pending verification)}`
     - Update FR file with implementation status

4. **VALIDATE:**
   - Verify BR file was updated with fix attempt entry (if BR linked)
   - Verify FR file was updated with implementation status (if FR linked)
   - Verify fix attempt entry includes all required fields:
     - Fix Description
     - Changes Made
     - Verification Status
     - Result
   - Verify version number is correct in fix attempt entry
   - Verify date is correct in fix attempt entry
   - Check that lessons learned are documented (if fix failed)

5. **PROCEED:**
   - Document: "Updated BR/FR docs with fix attempt information"
   - Move to Step 7 (can run in parallel with Steps 4-7)

---

### Step 7: Scoped Kanban Reconciliation (Self-Sufficient)

**Canonical name (FR-092 / FR-091, supersedes FR-038 framing):** Step 7 is **Scoped Kanban Reconciliation (Self-Sufficient)** — RW owns release-scope kanban consistency end-to-end and does **not** depend on a follow-up UKW run for release correctness. Step 7 invokes the shared kanban intelligence model with `invocation_context: rw_step_7`; **UKW remains a reactive, optional drift-repair workflow** for cumulative cross-cutting board hygiene and is **not a process dependency** for RW completion. (See [`FR-092`](../../../../../../docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) and [`FR-091`](../../../../../../docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md). FR-038 is wired as Bucket-D1 historical predecessor.)

**RW preventive vs UKW corrective separation (architecture, not just operational guidance):**

- **RW is preventive and release-atomic.** Release-scope reconciliation must complete without requiring a subsequent UKW run.
- **UKW is corrective and drift-oriented.** It exists because canonical workflows are imperfect in practice; the desired direction is to continuously reduce drift creation in RW so UKW becomes a smaller corrective safety net.
- **No handoff debt.** Deferring release-scope inconsistencies to UKW is prohibited.

**Minimum release-scope reconciliation outputs (four-surface contract):**

1. **Task doc** — version anchor + status + last-updated + checklist sync (host task and any directly affected child tasks).
2. **Source FR/BR/UXR doc(s)** — status sync + linked-task references + closure/gating banners where applicable.
3. **`kboard.md`** — canonical row(s) for the release-scope task(s); active-row hygiene for completed rows; no duplicate tail tokens.
4. **`fbuboard.md`** — canonical row(s) for the release-scope FBU(s); supersede / gating / closure markers; no duplicate tail tokens.

The four surfaces must converge as: idempotent (repeated runs produce no changes), deterministic (identical input + commit produces identical output), and ordered (host task → source FBU → kboard → fbuboard).

**🚨 MANDATORY BLOCKING STEP - DO NOT BYPASS**

**Step Definition:**
```yaml
- id: step-7
  name: Scoped Kanban Reconciliation (Self-Sufficient)
  handler: framework.kanban_update  # Framework-agnostic handler
  required: true
  mandatory: true
  blocking: true
  automatic: true
  dependencies: [step-2]
  config:
    kanban_update_script: packages/frameworks/workflow mgt/scripts/update_kanban_docs.py
    epic_doc_pattern: docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md
    kanban_board: docs/project-management/kanban/kboard.md
    use_rw_config: true
```

**CRITICAL REQUIREMENTS:**
- ✅ **MANDATORY:** This step MUST run and cannot be skipped (`required: true`, `mandatory: true`)
- ✅ **BLOCKING:** If this step fails, the workflow MUST STOP immediately (`blocking: true`)
- ✅ **SELF-SUFFICIENT (FR-092 / FR-091):** RW Step 7 must converge release-scope four-surface consistency without depending on a follow-up UKW run.
- ✅ **FRAMEWORK-AGNOSTIC:** Uses framework script that works across all projects
- ✅ **KANBAN POLICY:** Updates align with Kanban governance policy (FR-037: task prioritisation, stack/queue for MUST HAVE). In **scoped** mode, prefer **limited** MoSCOW/board edits for the active release; full-board MoSCOW reshuffles belong in **standalone UKW** (`UKW`, `-p`, `-a`, etc.).
- ✅ **AGENTIC RESPONSIBILITIES (FR-038:R03 + FR-092):** Task-level updates (status, version markers, narrative where needed); Story/Epic checklist and overview consistency; Kanban board updates for the active epic/story; **limited** prioritisation of new or newly significant tasks only; FBU/BR/UXR doc reconciliation; canonical row enforcement on `kboard.md` and `fbuboard.md`.
- ✅ **UKW RELATIONSHIP (FR-091):** UKW is **reactive and optional** with respect to RW. UKW agent guide: [Update Kanban Workflow — invocation context](update-kanban-workflow-agent-execution.md#invocation-context-fr-038--rw-step-7).
- ✅ **AUDIT (FR-092-NF1):** Step 7 emits a "touched surfaces + why" report (Wave 5/7 deliverable under FR-092) sufficient to reconstruct release-scope reconciliation outcomes.
- ✅ **VALIDATION:** Comprehensive validation runs automatically after updates
- ✅ **ERROR HANDLING:** Recovery guidance provided for all error types
- ❌ **DO NOT PROCEED:** If Step 7 fails, DO NOT proceed to Step 8 or any subsequent step

**Board Stamp Authority (FR-097):** At the **start** of Step 7, snapshot `kboard.md` and `fbuboard.md`:

```bash
python "packages/frameworks/workflow mgt/scripts/kanban/snapshot_kanban_boards.py"
```

Record the snapshot directory path for Step 10 stamp-diff validation.

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.1.1+3"`
   - Extract Epic number from branch:
     - [Example: Confidentia] `epic/4` → Epic 4 (already validated in Step 1)
     - [Example: ai-dev-kit] `epic/2` → Epic 2 (already validated in Step 1)
   - Extract Story number from version:
     - [Example: Confidentia] `0.4.3.2+9` → Story 3
     - [Example: ai-dev-kit] `0.2.1.1+3` → Story 1
   - Extract Task number from version:
     - [Example: Confidentia] `0.4.3.2+9` → Task 2
     - [Example: ai-dev-kit] `0.2.1.1+3` → Task 1
   - **MANDATORY:** Determine framework script path:
     - Framework script: `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
     - Verify script exists (if not found, this is a critical error - workflow must stop)
   - **Use config paths:** Script automatically loads `rw-config.yaml` if available
   - Understand script uses deterministic pipeline (Steps 1-7, 9-10, 12-15 from T01 analysis)

2. **DETERMINE:**
   - **MANDATORY ACTION:** Run framework-agnostic Kanban update script
   - **Command:** `python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
   - **Expected Behavior:**
     - Script extracts version components from version file
     - Script resolves Kanban paths using config + canonical defaults
     - Script updates Story doc (header, Task Checklist, completion status)
     - Script updates Epic doc (Story Checklist, header)
     - Script updates Kanban board (metadata, epic/story status, version markers)
     - Script validates updates (Steps 12-14: comprehensive validation)
     - Exit code 0 = SUCCESS (all updates applied and validated)
     - Exit code 1 = FAILURE (validation failed or update error)
   - **CRITICAL:** If script is missing or cannot be executed, workflow MUST STOP
   - **Dry-run option:** Use `--dry-run` flag to preview changes without modifying files

3. **EXECUTE:**
   - **MANDATORY:** Execute framework script:
     ```bash
     python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py
     ```
   - **Capture exit code:** Store the exit code from script execution
   - **Capture output:** Store script output for error messages and recovery guidance
   - **DO NOT MODIFY FILES MANUALLY:** Script handles all updates deterministically

4. **VALIDATE:**
   - **Check exit code:**
     - ✅ **PASS (exit code 0):** Kanban docs updated successfully, validation passed
     - ❌ **FAIL (exit code 1):** Kanban docs update failed or validation failed
   - **If script fails:**
     - **CRITICAL:** Workflow MUST STOP immediately (blocking step)
     - **Review error messages:** Script provides detailed error messages with file paths
     - **Review recovery guidance:** Script provides step-by-step recovery instructions for each error type
     - **Error types:** 12 distinct error types with specific recovery playbooks
     - **Override mechanism:** `--allow-override` flag available for recoverable errors only (use with caution)
   - **If script succeeds:**
     - Verify Story doc was updated (header, Task Checklist, version markers)
     - Verify Epic doc was updated (Story Checklist, header, version markers)
     - Verify Kanban board was updated (metadata, epic/story status, version markers)
     - Verify validation passed (all consistency checks passed)

5. **PROCEED:**
   - **If script succeeds:**
     - Document: "Updated Kanban docs with version markers (framework script)"
     - Document: "Updated Story doc, Epic doc, and Kanban board"
     - Document: "Validation passed: All Kanban docs updates verified"
     - Move to Step 8 (waits for Steps 2-7 to complete)
   - **If script fails:**
     - **CRITICAL:** Workflow BLOCKED at Step 7
     - Document: "RW BLOCKED at Step 7: Kanban docs update validation failed"
     - Provide recovery guidance from script output
     - **DO NOT PROCEED** to Step 8 or any subsequent step
     - User must fix errors and retry Release Workflow

**Framework Script Details:**

**Script Location:**
- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`

**Script Features:**
- **Framework-agnostic:** Works across all projects using the framework
- **Config-driven:** Uses `rw-config.yaml` for path resolution (if available)
- **Deterministic pipeline:** Implements Steps 1-7, 9-10, 12-15 from T01 analysis
- **Comprehensive validation:** Steps 12-14 validation (internal consistency, policy compliance, version drift detection)
- **Error handling:** 12 recovery playbooks with actionable guidance
- **Override mechanism:** `--allow-override` flag for edge cases (use with caution)

**Script Execution Flow:**
1. **Load config:** Reads `rw-config.yaml` if available (config-driven path resolution)
2. **Extract version:** Reads version components from version file
3. **Resolve paths:** Determines Story/Epic doc paths using config + canonical defaults
4. **Parse Story:** Reads Story doc, parses Task Checklist and header
5. **Compute state:** Derives completion state and target state for updates
6. **Update Story:** Applies structured text transforms to Story doc
7. **Update Epic:** Applies structured text transforms to Epic doc
8. **Validate:** Comprehensive validation (Steps 12-14) with blocking behavior
9. **Report:** Provides clear success/failure messages with recovery guidance

**Validation Checks (Steps 12-14):**

**Step 12: Internal Consistency Checks:**
- Version consistency across header, checklists, and completion summaries
- Status consistency (COMPLETE stories must have Completed date)
- Task Checklist entry validation
- Epic Story Checklist entry validation

**Step 13: Policy & FR Validation:**
- Required fields present (Status, Last updated, Version)
- Version string format validation (vRC.EPIC.STORY.TASK+BUILD)
- Kanban governance policy compliance (see `validate_kanban_governance_policy.py` for FR-037: task prioritisation, stack/queue for MUST HAVE)
- IPW status-drift guard (see `validate_ipw_status_drift.py`): flags tasks with implementation evidence still marked `TODO`

**Step 14: Cross-check with Version File:**
- Version components match between version string and parsed components
- Detect drift between Kanban docs and version file

**Step 14.5: IPW Transition Drift Audit (FR-077)**
- Run `python packages/frameworks/workflow mgt/scripts/validation/validate_ipw_status_drift.py`
- Purpose: detect "implemented but TODO" drift for IPW-derived tasks before release commit/tag.
- Recommended behavior: treat findings as blocking for IPW-derived implementation releases; otherwise document explicit waiver rationale.

**Error Handling:**

**Error Types (12 distinct types):**
- REQUIRED_DOC_MISSING
- FILE_READ_ERROR
- PERMISSION_ERROR
- VERSION_MISMATCH
- VERSION_MISSING_IN_LAST_UPDATED
- STATUS_INCONSISTENCY
- TASK_CHECKLIST_MISSING
- TASK_CHECKLIST_VERSION_MISMATCH
- EPIC_VERSION_MISSING
- REQUIRED_FIELD_MISSING
- VERSION_FORMAT_INVALID
- VERSION_COMPONENT_MISMATCH

**Recovery Guidance:**
- Each error type has a recovery playbook with step-by-step instructions
- Recovery guidance includes file paths, expected vs found values, and actionable steps
- Override mechanism available for recoverable errors only (not recommended)

**Override Mechanism:**
- `--allow-override` flag allows proceeding despite validation errors
- Only works for errors marked as overrideable in recovery playbooks
- Strict warnings and logging when override is used
- Override not available for critical errors (prevents masking issues)

**Examples:**

**Example 1: Successful Update**
```bash
$ python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py
🔍 Updating Kanban docs for v0.2.8.5+1 (E2:S8:T5)
📄 Story doc: /path/to/Story-008-harden-release-workflow-reliability.md
✅ Story doc updated: Updated Status: IN PROGRESS, Updated Last updated: 2025-12-15 (v0.2.8.5+1 – T05 complete: Task), Updated Version: v0.2.8.5+1
✅ Epic doc updated: Updated Epic Last updated: 2025-12-15 (v0.2.8.5+1 – Story 8 Task 5 complete)
✅ Validation passed: All Kanban docs updates verified
✅ Kanban docs update complete for v0.2.8.5+1
```

**Example 2: Validation Failure (RW BLOCKED)**
```bash
$ python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py
🔍 Updating Kanban docs for v0.2.8.5+1 (E2:S8:T5)
📄 Story doc: /path/to/Story-008-harden-release-workflow-reliability.md
✅ Story doc updated: Updated Status: IN PROGRESS, Updated Last updated: 2025-12-15 (v0.2.8.5+1 – T05 complete: Task), Updated Version: v0.2.8.5+1

❌ VALIDATION FAILED: Kanban docs update validation errors detected
================================================================================
❌ VERSION MISMATCH: Story header version mismatch
   Expected: v0.2.8.5+1
   Found: v0.2.8.4+1
   File: /path/to/Story-008-harden-release-workflow-reliability.md
================================================================================

📋 RECOVERY GUIDANCE:
================================================================================
📋 RECOVERY GUIDANCE: Version mismatch between expected and found values
📄 Affected file: /path/to/Story-008-harden-release-workflow-reliability.md

🔧 Recovery Steps:
   1. Verify version file has correct version components
   2. Check if Story doc header was manually edited (should be auto-updated)
   3. Restore Story doc header from git: `git checkout HEAD -- <story_path>`
   4. Re-run Release Workflow to auto-update header
   5. Do not manually edit version markers in Kanban docs

💡 Note: This error may be auto-repairable by restoring from git and re-running RW.

🚫 Override not available: This error must be fixed before proceeding.
================================================================================

🚫 RW BLOCKED at Step 7: Kanban docs update validation failed
   Fix the errors above and retry the Release Workflow.
```

**Example 3: Dry-Run Mode**
```bash
$ python packages/frameworks/workflow mgt/scripts/update_kanban_docs.py --dry-run
🔍 Updating Kanban docs for v0.2.8.5+1 (E2:S8:T5)
📄 Story doc: /path/to/Story-008-harden-release-workflow-reliability.md
✅ Story doc updated: Updated Status: IN PROGRESS, Updated Last updated: 2025-12-15 (v0.2.8.5+1 – T05 complete: Task), Updated Version: v0.2.8.5+1
✅ Epic doc updated: Updated Epic Last updated: 2025-12-15 (v0.2.8.5+1 – Story 8 Task 5 complete)
✅ Kanban docs update complete for v0.2.8.5+1
```

**Related Documentation:**
- **FR-015:** Harden Kanban Docs Update in Release Workflow
- **E2:S08:** Harden Release Workflow Reliability
- **T01 Analysis:** `packages/frameworks/workflow mgt/docs/Analysis/T01-kanban-docs-update-deterministic-vs-agentic-analysis.md`
- **Script Source:** `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`

---

### Step 8: Stage Files

**Stage-set completeness invariant (BR-070 / FR-092 Wave 5):** Step 8 must stage **every** file that Step 7 mutated. Partial staging is forbidden. The
`validate_rw_step7_completeness.py` validator (Wave 5 deliverable under FR-092) is the canonical enforcement gate for this invariant: it cross-references the four-surface report emitted by Step 7 against `git status` and blocks RW if any Step-7 output is modified-unstaged or untracked.

**Step Definition:**
```yaml
- id: step-8
  name: Stage Files
  handler: git.stage_all
  dependencies: [step-2, step-3, step-4, step-5, step-6, step-7]
  config:
    paths: ["*"]
    stage_set_completeness:
      enforce: true
      validator: packages/frameworks/workflow mgt/scripts/validate_rw_step7_completeness.py
      contract: BR-070 / FR-092 Wave 5
      blocking: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Understand all files modified in Steps 2-7:
     - Version file
     - Detailed changelog (new file)
     - Main changelog
     - README
     - Kanban docs (four-surface set: task doc + FR/BR/UXR doc(s) + `kboard.md` + `fbuboard.md` + auxiliary Story/Epic docs)
   - Check current Git status
   - Understand `git add -A` stages all changes
   - Locate the four-surface report emitted by Step 7 under `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/` (this is the authoritative source for "what Step 7 touched")

2. **DETERMINE:**
   - Stage all modified files
   - Use `git add -A` to stage everything
   - Plan to invoke `validate_rw_step7_completeness.py --auto` after staging to enforce the BR-070 invariant

3. **EXECUTE:**
   - Run `git add -A`
   - Verify files are staged
   - Run the stage-set completeness validator:
     ```bash
     python packages/frameworks/workflow\ mgt/scripts/validate_rw_step7_completeness.py --auto
     ```
   - Capture exit code and the persisted `rw-step7-stage-completeness-*.{json,md}` artefacts

4. **VALIDATE:**
   - Check `git status --short` to verify files are staged
   - Ensure all expected files are in staging area
   - **MANDATORY (BR-070):** Stage-set completeness validator must exit 0
     - ✅ **PASS (exit 0):** Every Step-7 touched path is staged or unchanged; safe to advance
     - ❌ **FAIL (exit 1):** Step 7 mutated paths that Step 8 did not stage (BR-070 violation) — **RW MUST BLOCK**
     - ❌ **INVALID (exit 2):** Validator could not locate four-surface report; investigate Step 7 emission path before retrying

5. **PROCEED:**
   - **If validator passes:**
     - Document: "Staged all modified files"
     - Document: "BR-070 stage-set completeness gate: PASS (verdict written to `four-surface-reports/rw-step7-stage-completeness-*`)"
     - Move to Step 9
   - **If validator fails:**
     - **CRITICAL:** RW BLOCKED at Step 8
     - Stage missing files (`git add <path>` for each violation row in the report) and re-run the validator
     - Do **not** advance to Step 9 until the validator returns exit 0

---

### Step 9: Check for and Address IDE-Flagged Problems

**Step Definition:**
```yaml
- id: step-9
  name: Check for and Address IDE-Flagged Problems
  handler: ide.lint_check
  dependencies: [step-8]
  config:
    check_order: [errors, warnings, infos]
    blocking: true  # Errors block workflow, warnings/infos are non-blocking but should be addressed
```

**Agent Execution:**

1. **ANALYZE:**
   - Understand IDE-flagged problems: Errors, warnings, and informational messages from the IDE/linter
   - Understand check order: Check errors first, then warnings, then infos
   - Understand blocking behavior: Errors block workflow, warnings/infos should be addressed but are non-blocking
   - Identify files modified in Steps 2-7:
     - Version file
     - Detailed changelog
     - Main changelog
     - README
     - Kanban docs
     - Any other modified files

2. **DETERMINE:**
   - Check for IDE-flagged problems in modified files
   - Address problems in order: errors first, then warnings, then infos
   - Determine if problems are blocking (errors) or non-blocking (warnings/infos)

3. **EXECUTE:**
   - **Check for errors:**
     - Use `read_lints` tool to check for linter errors in modified files
     - If errors found: Address each error before proceeding
   - **Check for warnings:**
     - Review linter warnings
     - Address warnings if possible (non-blocking, but should be fixed)
   - **Check for infos:**
     - Review informational messages
     - Address infos if relevant (non-blocking, but good practice to address)

4. **VALIDATE:**
   - Verify no blocking errors remain
   - Document any warnings/infos that were not addressed (with justification)
   - Ensure all critical errors are resolved before proceeding

5. **PROCEED:**
   - If no errors: Document "IDE check passed: no errors, {N} warnings, {M} infos"
   - If errors addressed: Document "IDE check: resolved {N} errors, {W} warnings, {I} infos"
   - If errors remain: Abort workflow, report errors, do not proceed
   - Move to Step 10

**Key Points:**
- Step 9 is **mandatory** (required: true) and **blocking** (blocking: true) for errors
- Errors **MUST** be resolved before proceeding to Step 10
- Warnings and infos are non-blocking but should be addressed when possible
- Check order: errors → warnings → infos

**Optional add-on (FR-098 / ECC adopters):** [ECC AgentShield RW Step 10 bridge](./ecc-agentshield-rw-step9-bridge.md) — supplementary security scan skills may run before or after Step 10; **non-blocking**; ADK validators below remain authoritative.

---

### Step 10: Run Validators

**Release-readiness gate (FR-092 Wave 7 + FR-097 Gate 8 + UXR-012 Gate 9):** Step 10 is the canonical pre-commit gate. Run per-domain validators plus **`validate_board_stamp_diff.py`** (FR-097: `--before` Step 7 snapshot, `--after` live boards — **blocking**). Invoke `validate_release_readiness.py` Gates **1–9** (Gate 8 = stamp homogeneity; Gate 9 = MoSCOW state icons). Any blocking failure aborts RW before Step 11 commit.

**Step Definition:**
```yaml
- id: step-10
  name: Run Validators
  handler: confidentia.run_validators  # [Example: Confidentia] Use {project}.run_validators or validation.run_validators
  # [Example: ai-dev-kit] handler: ai-dev-kit.run_validators (if implemented)
  dependencies: [step-9]
  config:
      validators:
        - scripts/validation/validate_branch_context.py  # Use {validation_scripts_path}/validate_branch_context.py
        - scripts/validation/validate_changelog_format.py  # Use {validation_scripts_path}/validate_changelog_format.py
        - scripts/validation/validate_version_bump.py  # Use {validation_scripts_path}/validate_version_bump.py
        - scripts/changelog/check_changelog_size.py  # Check if changelog exceeds size threshold
      release_readiness_gate:
        enforce: true
        validator: packages/frameworks/workflow mgt/scripts/validate_release_readiness.py
        contract: FR-092 Wave 7 (Gates 1-7 release-readiness)
        require_four_surface_report: true
        blocking: true
    strict_mode: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Understand validators to run:
     - `validate_branch_context.py` - Checks branch/version/epic alignment
     - `validate_changelog_format.py` - Checks changelog format (including canonical ordering)
     - `validate_version_bump.py` - Checks version bump logic (task transitions, out-of-order completion)
     - `check_changelog_size.py` - Checks if changelog exceeds size threshold (triggers CMW in Step 9.5)
   - Understand strict mode: Failures block workflow
   - Check validators exist and are executable
   - **CRITICAL - Changelog Ordering:** `validate_changelog_format.py` now validates canonical ordering
   - **CRITICAL - Version Bump Logic:** `validate_version_bump.py` validates RW Step 2 logic is followed correctly. Supports perpetual tasks (T101+, `perpetual_task` or `Task Type: Perpetual Maintenance` flag).
   - **CRITICAL - Changelog Size:** `check_changelog_size.py` checks if changelog exceeds threshold (non-blocking, triggers CMW)

2. **DETERMINE:**
   - Run each validator with `--strict` flag
   - Collect output from each validator
   - Determine if validators passed or failed
   - **Note:** `check_changelog_size.py` exit code 1 = threshold exceeded (non-blocking, triggers Step 9.5)

3. **EXECUTE:**
   - **Use config path:** Run validators (from config `scripts_path` or fallback `scripts/validation/`):
     - `python {scripts_path}/validation/validate_branch_context.py --strict` (default)
     - `python {scripts_path}/validation/validate_branch_context.py --strict --requested "<token>" --art` (if RW trigger used `--art`)
     - `python {scripts_path}/validation/validate_changelog_format.py --strict` (script automatically reads `rw-config.yaml` if available)
     - `python {scripts_path}/validation/validate_version_bump.py --strict` (default)
     - `python {scripts_path}/validation/validate_version_bump.py --strict --requested "<token>" --art` (if RW trigger used `--art`)
     - `python {scripts_path}/changelog/check_changelog_size.py` (script automatically reads `rw-config.yaml` if available)
     - `python {scripts_path}/validation/validate_changelog_archive_links.py` (non-blocking; reports dangling links in `CHANGELOG_ARCHIVE.md` with line numbers)
     - `python {scripts_path}/validation/validate_board_stamp_diff.py --before <snapshot_dir>/kboard.md --after <kanban_root>/kboard.md --strict` (repeat for `fbuboard.md`; FR-097)
     - `python {scripts_path}/validation/validate_kanban_state_icons.py --project-root <repo-root> --strict` (UXR-012 / Gate 9)
   - **Release-readiness gate (FR-092 Wave 7 + FR-097 Gate 8):**
     ```bash
     python "packages/frameworks/workflow mgt/scripts/validate_release_readiness.py" --auto --require-report
     ```
     - Exit 0 = all blocking Gates 1-7 passed; RW MAY proceed to Step 10.5/11.
     - Exit 1 = one or more blocking gates failed; RW MUST ABORT (do not commit).
     - Exit 2 = invalid invocation (no four-surface report, missing project root, etc.); resolve and retry.
     - Persisted artefacts: `rw-step9-release-readiness-{version}-{est}.json` and `.md` under
       `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/`.
   - Capture exit codes and output
   - **Note:** `check_changelog_size.py` exit code 1 is expected if threshold exceeded (non-blocking)

4. **VALIDATE:**
   - Check exit codes: 0 = success, non-zero = failure
   - **Exception:** `check_changelog_size.py` exit code 1 is non-blocking (triggers Step 9.5)
   - If any blocking validator fails in strict mode, workflow must abort
   - Analyze error messages if validators fail
   - **CRITICAL:** `validate_version_bump.py` validates:
     - Completed task vs. current VERSION_TASK comparison
     - New task detection (VERSION_TASK = completed, BUILD = 1)
     - Same task detection (VERSION_TASK unchanged, BUILD incremented)
     - Out-of-order completion (VERSION_TASK = completed, BUILD = 1)
   - **Changelog Size Check:** If `check_changelog_size.py` returns exit code 1, note that Step 9.5 will be triggered

5. **PROCEED:**
   - If validators pass and the release-readiness gate exits 0: Document "Validators passed: branch context ✓, changelog format ✓, changelog ordering ✓, version bump logic ✓, FR-092 Wave 7 release-readiness gate ✓ (Gates 1-7)"
   - If changelog size exceeds threshold: Document "Changelog size check: threshold exceeded, Step 10.5 will trigger CMW"
   - If any per-domain validator fails: Abort workflow, report errors, do not proceed
   - If `validate_release_readiness.py` exits non-zero: **ABORT — RW MUST NOT commit.** Cite the per-gate findings from the persisted readiness report.
   - Move to Step 10.5 (or Step 11 if Step 10.5 not needed)

---

### Step 10.5: Changelog Management Workflow (CMW)

**Step Definition:**
```yaml
- id: step-10.5
  name: Changelog Management Workflow (CMW)
  handler: changelog.cmw
  required: false
  enabled: true
  blocking: false
  dependencies: [step-10]
  config:
    cmw_script: packages/frameworks/workflow mgt/scripts/changelog/cmw.py
    trigger_condition: size_threshold_exceeded
    auto_trigger: true
    dry_run: false
    use_rw_config: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Check if Step 10's `check_changelog_size.py` indicated threshold exceeded (exit code 1)
   - Understand CMW script location: `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`
   - Understand trigger condition: `size_threshold_exceeded` (from Step 10)
   - Understand auto_trigger: If threshold exceeded, automatically run CMW
   - Understand dry_run: Set to `false` for actual execution (use `true` for testing)
   - Check CMW script exists and is executable
   - **CRITICAL:** CMW is deterministic (rule-based, no agentic intelligence required)
   - **CRITICAL:** CMW will archive entries, remove duplicates, fix ordering

2. **DETERMINE:**
   - If Step 10 indicated threshold exceeded: Run CMW
   - If Step 10 indicated threshold not exceeded: Skip Step 10.5
   - Determine CMW execution mode: `--no-git` (CMW will stage files, but RW Step 8 already staged)
   - **Note:** CMW may stage additional files (archive file), which is OK

3. **EXECUTE:**
   - **If threshold exceeded:**
     - Run CMW script: `python packages/frameworks/workflow mgt/scripts/changelog/cmw.py --no-git`
     - CMW will:
       - Analyze changelog state
       - Validate format and ordering
       - Remove duplicates
       - Identify entries for archival
       - Archive entries to `CHANGELOG_ARCHIVE.md`
       - Validate remaining changelog
       - Report summary
   - **If threshold not exceeded:**
     - Skip CMW execution
     - Document: "Changelog size OK, CMW not needed"

4. **VALIDATE:**
   - If CMW ran: Check exit code (0 = success, non-zero = failure)
   - Verify changelog size reduced (if archival occurred)
   - Verify archive file created/updated (if archival occurred)
   - Verify changelog format still valid after CMW
   - **Note:** CMW failures are non-blocking (workflow continues, but warning issued)

5. **PROCEED:**
   - If CMW ran successfully: Document "CMW executed: archived {N} entries, removed {M} duplicates"
   - If CMW skipped: Document "CMW skipped: changelog size OK"
   - If CMW failed: Document "CMW execution failed (non-blocking): {error}", continue workflow
   - Move to Step 11

**Key Points:**
- Step 10.5 is **optional** (required: false) and **non-blocking** (blocking: false)
- CMW is **deterministic** (rule-based, no agentic intelligence required)
- CMW runs automatically if changelog size exceeds threshold
- CMW failures are non-blocking (workflow continues)
- CMW may stage additional files (archive file), which is OK

**See Also:**
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **CMW Workflow Definition:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **Changelog Archival Policy:** `docs/architecture/standards-and-adrs/changelog-archival-policy.md`

---

### Step 11: Commit Changes

**Step Definition:**
```yaml
- id: step-11
  name: Commit Changes
  handler: git.commit
  dependencies: [step-10, step-10.5]
  config:
    message_template: "{version} - {summary}"
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.2.4+1"`
   - Get summary from parameters
   - Read detailed changelog from Step 3 to understand:
     - What was actually done (DO phase)
     - Verification status (if fixes included)
     - PLAN phase objectives (if included)
   - Understand commit message template: `"{version} - {summary}"`
   - Verify files are still staged
   - **CRITICAL - Language Alignment:**
     - Check changelog for verification status
     - If changelog contains "Attempted Fixes", commit message MUST use unverified language
     - If changelog contains "Fixed" (verified), commit message can use verified language
     - Commit message language MUST match changelog verification status

2. **DETERMINE:**
   - Build commit message:
     - [Example: Confidentia] `"0.4.3.2+9 - 📚 Documentation: Tighten Epic 4 [Example: Confidentia] Kanban docs..."`
     - [Example: ai-dev-kit] `"0.2.2.4+1 - 🧰 Tooling: Task 4 complete - Enhanced DO Phase..."`
   - **Language Pattern Selection:**
     - **If verified fixes:** Use verified language ("Fixed", "Resolved", "Corrected")
     - **If unverified fixes:** Use unverified language ("Attempted fix", "Addressed", "Modified")
     - **If documentation/feature:** Use appropriate language ("Added", "Updated", "Created")
   - Ensure message follows project conventions
   - Ensure message accurately reflects what was done (DO phase)
   - Ensure message aligns with changelog intent (PLAN phase)

3. **EXECUTE:**
   - Run `git commit -m "{message}"`
   - Capture commit hash if available
   - **Document Execution:**
     - Record what was actually done
     - Note any deviations from PLAN phase
     - Document execution details if needed

4. **VALIDATE:**
   - Verify commit was created (check exit code)
   - Verify commit message is correct
   - **CRITICAL - Language Validation:**
     - Verify commit message language matches changelog verification status
     - If changelog says "Attempted Fix", commit message MUST NOT say "Fixed"
     - If changelog says "Fixed" (verified), commit message can say "Fixed"
     - Verify commit message accurately reflects what was done
   - Check commit hash if available

5. **PROCEED:**
   - Document: "Created commit {hash} with message: {message}"
   - Document execution details (what was actually done)
   - Pass commit hash to Step 10 (if needed)
   - Move to Step 10

**Key Points:**
- This step implements the **DO phase** of PDCA cycle
- Commit message MUST match changelog verification status
- Commit message MUST accurately reflect what was done
- Commit message MUST align with changelog intent (PLAN phase)
- Language patterns must match verification status

**Language Pattern Guidelines:**

**Verified Fixes (use these words):**
- "Fixed", "Resolved", "Corrected", "Repaired"
- Only use if verification evidence exists in changelog

**Unverified Fixes (use these words):**
- "Attempted fix", "Addressed", "Modified", "Updated", "Changed"
- Use when changelog shows "Attempted Fix (Pending Verification)"

**Documentation/Features (use these words):**
- "Added", "Created", "Updated", "Enhanced", "Improved"
- Use for documentation, features, tooling changes

**DO NOT:**
- ❌ Say "Fixed" if changelog says "Attempted Fix"
- ❌ Use overly confident language for unverified changes
- ❌ Misrepresent what was actually done
- ❌ Deviate from changelog intent without documenting why

**Examples:**

**Example 1: Verified Fix (Good)**
- Changelog: "Fixed changelog verification issue" (with verification evidence)
- Commit: "Release v0.2.2.4+1: Fixed changelog verification issue"
- ✅ Language matches verification status

**Example 2: Unverified Fix (Good)**
- Changelog: "Attempted fix for changelog verification issue" (pending verification)
- Commit: "Release v0.2.2.4+1: Attempted fix for changelog verification issue"
- ✅ Language matches verification status

**Example 3: Unverified Fix (Bad)**
- Changelog: "Attempted fix for changelog verification issue" (pending verification)
- Commit: "Release v0.2.2.4+1: Fixed changelog verification issue"
- ❌ Language doesn't match - too confident for unverified fix

**Example 4: Documentation (Good)**
- Changelog: "Added execution documentation template"
- Commit: "Release v0.2.2.4+1: Added execution documentation template"
- ✅ Appropriate language for documentation

**See Also:**
- **Commit Message Language Guidelines:** `packages/frameworks/workflow mgt/docs/documentation/templates/commit-message-language-guidelines.md`
- **Execution Documentation Template:** `packages/frameworks/workflow mgt/docs/documentation/templates/execution-documentation-template.md`
- **Changelog Language Analysis:** `docs/architecture/standards-and-adrs/rw-changelog-commit-language-analysis.md`

---

### Step 11.5: Post-Commit Verification (BR-070 AC4)

**Step Definition:**
```yaml
- id: step-11.5
  name: Post-Commit Stage Completeness Verification
  handler: validation.post_commit
  dependencies: [step-11]
  config:
    validator_script: packages/frameworks/workflow mgt/scripts/validate_rw_step7_post_commit.py
    arguments: --auto
    strict_mode: true
```

**Agent Execution:**

1. **ANALYZE:**
   - The release commit has just been created (Step 11). Before tagging or pushing, verify that the commit actually contains every Step-7 output declared in the four-surface report.
   - This is a belt-and-suspenders check (BR-070 AC4): the pre-commit gate (Step 8/10) may have passed, but we need post-commit proof that Step-7 outputs are in the commit tree.
   - The validator cross-references the four-surface report against `git ls-tree`, `git show --name-only`, and `git diff` for the release commit.

2. **DETERMINE:**
   - Invoke `validate_rw_step7_post_commit.py --auto` to auto-discover the most recent four-surface report and verify against `HEAD`.
   - If a specific commit ref is needed (e.g., auditing an older release), use `--commit-ref <ref>`.

3. **EXECUTE:**
   ```bash
   python packages/frameworks/workflow\ mgt/scripts/validate_rw_step7_post_commit.py --auto
   ```
   - The validator emits a JSON+MD report to `docs/changelog-and-release-notes/changelog-archive/four-surface-reports/`.

4. **VALIDATE:**
   - **Exit 0:** All Step-7 touched paths are accounted for in the commit. Safe to proceed to tag/push.
   - **Exit 1 (BLOCK):** One or more touched paths are missing from the commit tree or have uncommitted working-tree modifications. RW MUST NOT tag or push.
     - Recovery: amend the commit (`git commit --amend --no-edit` after staging missing files) or revert and retry.
   - **Exit 2:** Invalid invocation — investigate before retrying.

5. **PROCEED:**
   - Document: "BR-070 AC4 post-commit verification: PASS (report written to four-surface-reports/rw-step7-post-commit-verification-*)."
   - Move to Step 12 (Create Git Tag).
   - If BLOCK: "RW BLOCKED at Step 11.5: Post-commit verification failed. Do not tag or push."

**Key Points:**
- This step is **blocking** (`strict_mode: true`). Any violation aborts RW before tagging.
- It is the canonical BR-070 AC4 enforcement gate.
- The validator is additive — it does not replace the pre-commit gate (`validate_rw_step7_completeness.py`); it complements it.
- `--commit-ref` enables auditing historical commits, but the default (`HEAD`) is the primary RW use case.

**See Also:**
- **Validator:** `packages/frameworks/workflow mgt/scripts/validate_rw_step7_post_commit.py`
- **Tests:** `packages/frameworks/workflow mgt/scripts/test_validate_rw_step7_post_commit.py`
- **Pre-commit gate:** Step 8 (`validate_rw_step7_completeness.py`)
- **BR-070:** `docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md`

---

### Step 12: Create Git Tag

**Step Definition:**
```yaml
- id: step-12
  name: Create Git Tag
  handler: git.create_tag
  dependencies: [step-11]
  config:
    tag_template: v{version}
    message_template: "Release {tag}: {summary}"
    annotated: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2.
   - Get summary from parameters.
   - Resolve tag strategy using `semver_converter.get_rw_tag_info(new_version, finalize=True)` as the canonical decision source.
   - Strategy outcomes:
     - `registry`: primary tag is `v{internal_version}`.
     - `task_touch`: primary tag is `vX.Y.Z` (SemVer core; no `+BUILD` in tag name), with optional internal traceability tag `v{internal_version}`.

2. **DETERMINE:**
   - Determine primary tag and optional internal tag from canonical tag info.
   - Build annotated tag messages from the selected tag(s).
   - Check if each tag already exists (idempotent behavior expected in reruns).

3. **EXECUTE:**
   - Create primary annotated tag.
   - In `task_touch` mode, create internal traceability tag when enabled.
   - Verify created tags point to the current release commit.

4. **VALIDATE:**
   - Verify primary tag exists and is annotated.
   - If internal tag is created, verify it exists and points to the same commit as primary tag.
   - For `task_touch`, verify primary tag format is SemVer core (`vX.Y.Z`) with no `+BUILD`.

5. **PROCEED:**
   - Document tag creation with strategy and tag names.
   - Move to Step 13.

---

### Step 13: Push to Remote

**Step Definition:**
```yaml
- id: step-13
  name: Push to Remote
  handler: git.push
  dependencies: [step-11, step-12]
  config:
    push_tags: true
    remote: origin
```

**Agent Execution:**

1. **ANALYZE:**
   - Get current branch name:
     - [Example: Confidentia] `epic/4` (already validated in Step 1)
     - [Example: ai-dev-kit] `epic/2` or `main` (already validated in Step 1)
   - Get tag name from Step 12:
     - [Example: Confidentia] `v0.4.3.2+9`
     - [Example: ai-dev-kit] `v0.2.1.1+3`
   - Understand remote: `origin`
   - **CRITICAL:** Must use `required_permissions: ['network']` for git push commands
   - This enables network access in Cursor's sandbox environment
   - See: `docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md`

2. **DETERMINE:**
   - Push branch:
     - [Example: Confidentia] `git push origin epic/4`
     - [Example: ai-dev-kit] `git push origin main` (or `epic/2`)
   - Push tag:
     - [Example: Confidentia] `git push origin v0.4.3.2+9`
     - [Example: ai-dev-kit] `git push origin v0.2.1.1+3`
   - **Use network permissions:** Always use `required_permissions: ['network']` for git push
   - **Prepare fallback:** If push still fails (shouldn't happen), provide clear user instructions

3. **EXECUTE:**
   - **CRITICAL: Use `required_permissions: ['network']` for git push commands**
   - **Attempt push with network permissions:**
     ```python
     # ✅ CORRECT - With network permissions
     run_terminal_cmd(
         command=f"git push origin {branch_name} --tags",
         required_permissions=['network']  # Enable network access for git push
     )
     print("✅ Successfully pushed branch and tags to remote")
     ```
   - **If push fails (fallback):**
     ```python
     try:
         run_terminal_cmd(
             command=f"git push origin {branch_name} --tags",
             required_permissions=['network']
         )
     except Exception as e:
         # Handle push failures gracefully (should not happen with network permissions)
         print("⚠️  Push failed - see manual push instructions below")
         print("\n📋 Manual Push Required:")
         print(f"   git push origin {branch_name} --tags")
         # Don't fail the workflow - provide instructions instead
     ```
   - **If push fails:**
     - Provide clear user instructions
     - Show exact command to run
     - Link to network access limitations document
     - Mark workflow as "complete pending push"

4. **VALIDATE:**
   - **If push succeeds:**
     - ✅ Verify branch push succeeded
     - ✅ Verify tag push succeeded
     - ✅ Check for any errors or warnings
   - **If push fails:**
     - ✅ Verify user instructions were provided
     - ✅ Verify workflow marked as complete (pending push)
     - ✅ Don't fail the entire workflow

5. **PROCEED:**
   - **If push succeeded:**
     - Document: "Pushed branch and tag to origin"
     - Move to Step 13 (if enabled)
   - **If push failed:**
     - Document: "Push failed due to network restrictions - manual push required"
     - Provide user instructions:
       ```markdown
       📋 Manual Push Required:
       
       Due to sandbox environment network restrictions, please run:
       
       ```bash
       git push origin main --tags
       ```
       
       See: docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md
       ```
     - Mark workflow as "complete pending push"
     - Move to Step 13 (if enabled) - workflow is still considered successful

**Error Handling:**

**CRITICAL: Use Network Permissions:**
- **ALWAYS use `required_permissions: ['network']`** for git push commands
- This enables network access in Cursor's sandbox environment
- Without this, push will fail with "Could not resolve host" errors

**Example Implementation (Correct):**
```python
# ✅ CORRECT - Use required_permissions for network access
run_terminal_cmd(
    command=f"git push origin {branch_name} --tags",
    required_permissions=['network']  # Enable network access
)
print("✅ Successfully pushed to remote")
```

**Example Error Handling (Fallback - Should Not Be Needed):**
```python
try:
    run_terminal_cmd(
        command=f"git push origin {branch_name} --tags",
        required_permissions=['network']
    )
    print("✅ Successfully pushed to remote")
except Exception as e:
    # Fallback: Should not happen if network permissions are used correctly
    print("⚠️  Push failed unexpectedly")
    print("\n📋 Manual Push Required:")
    print(f"   git push origin {branch_name} --tags")
    print("\n   See: docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md")
    # Don't fail the workflow - mark as complete pending push
    return "complete_pending_push"
```

**Related Documentation:**
- **Network Access Limitations:** `docs/architecture/standards-and-adrs/agent-network-access-and-git-push-limitations.md` - Complete guide on this issue and solutions

---

### Step 12.5: Create/Update GitHub Release

**Step Definition:**
```yaml
- id: step-12-5
  name: Create/Update GitHub Release
  handler: github.create_release
  dependencies: [step-12, step-13]
  config:
    use_semver_tag: true
    skip_if_no_token: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `semver_tag` from Step 11 (SemVer tag created):
     - [Example: ai-dev-kit] `v0.4.36+1` (SemVer for internal `v0.4.16.4+1`)
   - Get `internal_version` from Step 2:
     - [Example: ai-dev-kit] `v0.4.16.4+1`
   - Get summary, epic, story, task from parameters
   - Get repository from `GITHUB_REPOSITORY` env var or default to `earlution/ai-dev-kit`
   - **CRITICAL:** Check for `GITHUB_TOKEN` environment variable
   - Understand this step creates/updates GitHub release using SemVer tag
   - Understand this step is **non-blocking** if token is missing

2. **DETERMINE:**
   - **If `GITHUB_TOKEN` is available:**
     - Check if release already exists for SemVer tag
     - If exists: Update existing release
     - If not exists: Create new release
     - Use SemVer tag for release name and tag reference
     - Include both SemVer and internal version in release body
   - **If `GITHUB_TOKEN` is NOT available:**
     - Skip this step with a clear warning message
     - Provide user instructions to run manually
     - Mark step as "skipped" (not "completed")
     - **DO NOT** mark workflow as failed - this is non-blocking

3. **EXECUTE:**
   - **Check for GitHub Token:**
     ```python
     github_token = os.environ.get('GITHUB_TOKEN')
     if not github_token:
         print("⚠️  Warning: GITHUB_TOKEN not set. Skipping GitHub release creation.")
         print("\n📋 To create GitHub release manually, run:")
         print(f"   python \"packages/frameworks/workflow mgt/scripts/create_github_release.py\" \\")
         print(f"     --semver-tag \"{semver_tag}\" \\")
         print(f"     --internal-version \"{internal_version}\" \\")
         print(f"     --summary \"{summary}\" \\")
         print(f"     --epic \"{epic}\" --story \"{story}\" --task \"{task}\" \\")
         print(f"     --repo \"{repo}\"")
         return "skipped"  # Mark as skipped, not failed
     ```
   
   - **If token available, run script:**
     ```python
     result = run_terminal_cmd(
         command=f'python "packages/frameworks/workflow mgt/scripts/create_github_release.py" '
                 f'--semver-tag "{semver_tag}" '
                 f'--internal-version "{internal_version}" '
                 f'--summary "{summary}" '
                 f'--epic "{epic}" --story "{story}" --task "{task}" '
                 f'--repo "{repo}"',
         required_permissions=['network']
     )
     ```
   
   - **Handle script failures gracefully:**
     - If script returns exit code 1 (token missing): Skip with warning
     - If script returns exit code 1 (API error): Log error, provide instructions
     - If script returns exit code 0: Success

4. **VALIDATE:**
   - **If token missing:**
     - ✅ Verify warning message was displayed
     - ✅ Verify user instructions were provided
     - ✅ Verify step marked as "skipped" (not "completed")
     - ✅ Verify workflow continues (non-blocking)
   - **If token available and script succeeded:**
     - ✅ Verify release was created/updated on GitHub
     - ✅ Verify release uses SemVer tag
     - ✅ Verify release body includes both versions
   - **If token available but script failed:**
     - ✅ Verify error message was logged
     - ✅ Verify user instructions were provided
     - ✅ Verify step marked as "skipped" or "failed" (not "completed")
     - ✅ Verify workflow continues (non-blocking)

5. **PROCEED:**
   - **If release created/updated successfully:**
     - Document: "GitHub release created/updated for SemVer tag {semver_tag}"
     - Move to Step 14 (if enabled)
   - **If skipped (no token):**
     - Document: "GitHub release step skipped - GITHUB_TOKEN not set (non-blocking)"
     - Provide user instructions for manual execution
     - Move to Step 14 (if enabled) - workflow is still considered successful
   - **If failed (API error):**
     - Document: "GitHub release creation failed - see error message (non-blocking)"
     - Provide user instructions for manual execution
     - Move to Step 14 (if enabled) - workflow is still considered successful

**Key Points:**
- This step is **non-blocking** - RW completes successfully even if this step fails or is skipped
- **CRITICAL:** Script automatically loads `.env.local` - no need to check before running
- **CRITICAL:** If token is missing, skip with warning and instructions (do NOT mark as "completed")
- **CRITICAL:** If script fails, provide clear error message and instructions (do NOT mark as "completed")
- Release uses SemVer tag for external-facing display
- Release body includes both SemVer and internal version for traceability
- This step depends on Step 13 (Push to Remote) - tags must exist on GitHub before creating release

**Error Handling:**

**Missing Token (Expected in Agent Sandbox):**
```python
# ✅ CORRECT - Check token before running script
# Script automatically loads .env.local - just run it
# If GITHUB_TOKEN is missing, script will provide clear error message with setup instructions
    return "skipped"  # Mark as skipped, not failed
```

**API Errors (500, 401, etc.):**
```python
# ✅ CORRECT - Handle API errors gracefully
result = run_terminal_cmd(...)
if result.exit_code != 0:
    print("⚠️  Warning: GitHub release creation failed.")
    print("   Common causes:")
    print("   - Tag doesn't exist on GitHub yet (push tags first)")
    print("   - Invalid/expired GitHub token (regenerate token)")
    print("   - Missing 'repo' scope on token (check token permissions)")
    print("\n📋 To create GitHub release manually, run:")
    print(f"   python \"packages/frameworks/workflow mgt/scripts/create_github_release.py\" ...")
    return "skipped"  # Mark as skipped, not failed
```

**Common Issues:**

1. **500 Error (Tag Not Found):**
   - **Cause:** Tag doesn't exist on GitHub yet (push failed or not completed)
   - **Solution:** User must push tags first: `git push origin main --tags`
   - **Then:** Retry release creation manually

2. **401 Error (Bad Credentials):**
   - **Cause:** Invalid/expired token or missing `repo` scope
   - **Solution:** Regenerate GitHub Personal Access Token with `repo` scope
   - **Then:** Set `GITHUB_TOKEN` environment variable and retry

3. **Token Not Set (Agent Sandbox):**
   - **Cause:** `GITHUB_TOKEN` not found in `.env.local` or environment (script checks both automatically)
   - **Solution:** This is expected - user must run release creation manually
   - **Note:** This is non-blocking - workflow completes successfully

**Examples:**

**Example 1: Token Available - Release Created**
- SemVer tag: `v0.4.36+1`
- Internal version: `v0.4.16.4+1`
- Step 12.5 executes: Creates GitHub release for `v0.4.36+1`
- Release name: `v0.4.36+1` (SemVer)
- Release body: Includes both SemVer and internal version
- Result: Release created successfully, workflow continues

**Example 2: Token Missing - Step Skipped**
- SemVer tag: `v0.4.36+1`
- Internal version: `v0.4.16.4+1`
- Step 12.5 executes: Script loads `.env.local` automatically → `GITHUB_TOKEN` found
- Step 12.5 action: Creates GitHub release successfully
- Step 12.5 status: Marked as "skipped" (not "completed")
- Result: Workflow completes successfully, user runs release creation manually

**Example 3: API Error - Step Skipped**
- SemVer tag: `v0.4.36+1`
- Token available, script runs
- GitHub API returns 500 (tag not found on remote)
- Step 12.5 action: Logs error, provides instructions
- Step 12.5 status: Marked as "skipped" (not "completed")
- Result: Workflow completes successfully, user pushes tags then retries manually

**Related Documentation:**
- **GitHub Release Script:** `packages/frameworks/workflow mgt/scripts/create_github_release.py`
- **SemVer Mapping:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` (Section 2.5)
- **GitHub Token Setup:** Add `GITHUB_TOKEN=your_token_here` to `.env.local` file (script loads automatically)

---

### Step 14: Post-Commit Verification & Reflection

**Step Definition:**
```yaml
- id: step-14
  name: Post-Commit Verification & Reflection
  handler: release.verification_reflection
  dependencies: [step-10]
  config:
    verification_prompt: true
    reflection_questions: true
    changelog_update: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.2.1+1"`
   - Read detailed changelog from Step 3:
     - [Example: Confidentia] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+9.md`
     - [Example: ai-dev-kit] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.2.1+1.md`
   - Understand this is the **CHECK phase** of PDCA cycle
   - Check if release includes bug fixes or changes requiring verification
   - Review changelog for "Attempted Fixes" entries

2. **DETERMINE:**
   - **If release includes fixes or changes:**
     - Prompt for verification status: "Has this change been verified?"
     - Options: Verified / Unverified / Deferred
     - If verified: Collect verification evidence
     - If unverified: Document as "Attempted Fix (Pending Verification)"
     - If deferred: Document verification plan
   - **If release is documentation/feature (no fixes):**
     - Prompt for reflection: "Does this change work as expected?"
     - Document reflection results
   - Determine verification method:
     - Test suite execution (automated)
     - Manual testing (documented)
     - Observation period (for behavior changes)
     - Defer verification (explicit decision)

3. **EXECUTE:**
   - **Verification Prompt:**
     ```
     🔍 POST-COMMIT VERIFICATION (CHECK Phase)
     
     Release: v{version}
     Changes: {summary}
     
     Has this change been verified?
     - [ ] Verified (with evidence)
     - [ ] Unverified (pending verification)
     - [ ] Deferred (verification planned)
     
     If verified, provide:
     - Verification method: [Test Suite / Manual Testing / Observation]
     - Verification evidence: [Link or description]
     - Verification date: [YYYY-MM-DD HH:MM:SS UTC]
     ```
   
   - **Reflection Questions:**
     ```
     📝 REFLECTION QUESTIONS
     
     1. Did the change work as expected?
        - [ ] Yes
        - [ ] Partially
        - [ ] No
        - [ ] Unknown (needs verification)
     
     2. Did it solve the problem?
        - [ ] Yes
        - [ ] Partially
        - [ ] No
        - [ ] Unknown (needs verification)
     
     3. Are there any side effects?
        - [ ] None observed
        - [ ] Minor side effects (document)
        - [ ] Significant side effects (document)
        - [ ] Unknown (needs observation)
     
     4. What did we learn?
        - [Document lessons learned]
     ```
   
   - **Document Verification Results:**
     - If verified: Update changelog with verification status
     - If unverified: Ensure changelog shows "Attempted Fix (Pending Verification)"
     - If deferred: Document verification plan
     - Create verification documentation file if needed

4. **VALIDATE:**
   - Verify verification status is documented
   - Verify reflection questions are answered (if applicable)
   - Verify changelog accurately reflects verification status
   - **CRITICAL:** If fix is marked as "Fixed" without verification evidence, **STOP** and require verification
   - Verify verification evidence exists (if verified)

5. **PROCEED:**
   - Document verification and reflection results
   - Pass verification status to Step 13 (if enabled)
   - If verification deferred: Create reminder task or schedule verification
   - Move to Step 13 (if enabled) or mark workflow complete

**Key Points:**
- This step implements the **CHECK phase** of PDCA cycle
- Enables explicit verification after commit
- Prevents "Attempted Fixes" from remaining unverified indefinitely
- Creates learning loop through reflection questions
- Integrates with existing fix verification requirements

**Integration with Fix Verification:**
- If changelog contains "Attempted Fixes", this step prompts for verification
- If verification succeeds, changelog can be updated to "Fixed" (in Step 13)
- If verification fails, document what didn't work (in Step 13)
- If verification deferred, document plan and schedule

**Examples:**

**Example 1: Verified Fix**
- Release: `v0.2.2.1+1` (bugfix)
- Changelog contains: "Attempted fix for changelog verification requirement"
- Step 12 prompts: "Has this change been verified?"
- Response: Verified
- Verification method: Test suite execution
- Verification evidence: All tests pass (15/15)
- Result: Verification documented, ready for Step 13 to update changelog

**Example 2: Unverified Fix**
- Release: `v0.2.2.1+1` (bugfix)
- Changelog contains: "Attempted fix for changelog verification requirement"
- Step 12 prompts: "Has this change been verified?"
- Response: Unverified
- Verification plan: Run test suite after deployment
- Result: Remains in "Attempted Fixes" section, verification plan documented

**Example 3: Deferred Verification**
- Release: `v0.2.2.1+1` (bugfix)
- Changelog contains: "Attempted fix for changelog verification requirement"
- Step 12 prompts: "Has this change been verified?"
- Response: Deferred
- Reason: Requires production deployment
- Verification plan: Verify after next deployment (scheduled 2025-12-05)
- Result: Verification deferred, plan documented, reminder created

**Example 4: Documentation Release (No Fixes)**
- Release: `v0.2.2.1+1` (documentation)
- Changelog contains: "Added Step 12 execution guide"
- Step 12 prompts: "Does this change work as expected?"
- Reflection: Documentation complete, examples added, templates created
- Result: Reflection documented, no verification needed

---

### Step 15: Act on Verification Results

**Step Definition:**
```yaml
- id: step-15
  name: Act on Verification Results
  handler: release.act_on_results
  dependencies: [step-12]
  config:
    changelog_update: true
    follow_up_tasks: true
    process_improvement: true
```

**Agent Execution:**

1. **ANALYZE:**
   - Get verification status from Step 14:
     - Verified / Unverified / Deferred
     - Verification evidence (if verified)
     - Reflection results (if available)
   - Get `new_version` from Step 2:
     - [Example: Confidentia] `"0.4.3.2+9"`
     - [Example: ai-dev-kit] `"0.2.2.2+1"`
   - Read detailed changelog from Step 3:
     - [Example: Confidentia] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.4.3.2+9.md`
     - [Example: ai-dev-kit] `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.2.2+1.md`
   - Understand this is the **ACT phase** of PDCA cycle
   - Check if Step 12 was executed (optional step)
   - Review changelog for "Attempted Fixes" entries

2. **DETERMINE:**
   - **If verification status is Verified:**
     - Determine action: Update changelog to move from "Attempted Fixes" to "Fixed"
     - Standardize successful practices
     - Document verification evidence
     - Create new release if needed (or update existing changelog)
   - **If verification status is Failed:**
     - Determine action: Document what didn't work
     - Identify root causes
     - Create follow-up task
     - Plan next iteration
   - **If verification status is Deferred:**
     - Determine action: Document verification plan
     - Schedule verification
     - Create reminder task
   - **If no verification needed (documentation/feature):**
     - Determine action: Document process improvements
     - Capture lessons learned
     - Update RW documentation if needed

3. **EXECUTE:**
   - **If Verified Fix:**
     - Update detailed changelog: Move entry from "Attempted Fixes" to "Fixed" section
     - Add verification evidence to changelog entry
     - Update main changelog: Move entry from "Attempted Fixes" to "Fixed" subsection
     - Document successful practices
     - **Option A:** Create new release with updated changelog (recommended)
     - **Option B:** Update existing changelog file (requires manual edit)
   
   - **If Failed Fix:**
     - Document what didn't work in changelog
     - Add "Failed Fixes" section if needed
     - Identify root causes
     - Create follow-up task in Kanban
     - Plan next iteration
   
   - **If Deferred Verification:**
     - Document verification plan in changelog
     - Add "Deferred Verification" section if needed
     - Schedule verification (create reminder task)
     - Document next steps
   
   - **Process Improvement:**
     - Reflect on RW process itself
     - Identify improvements
     - Document lessons learned
     - Update RW documentation if needed
     - Create process improvement task if needed

4. **VALIDATE:**
   - Verify changelog updates are accurate
   - Verify verification evidence is documented (if verified)
   - Verify follow-up tasks are created (if needed)
   - Verify process improvements are documented (if any)
   - **CRITICAL:** If creating new release, verify version is incremented correctly

5. **PROCEED:**
   - Document actions taken
   - If new release created: Pass to next RW cycle
   - If changelog updated: Document update
   - If follow-up tasks created: Document tasks
   - **Workflow Complete!** (or ready for next iteration)

**Key Points:**
- This step implements the **ACT phase** of PDCA cycle
- Enables acting on verification results from Step 12
- Updates changelogs based on verification status
- Creates follow-up tasks when needed
- Captures process improvements
- Completes the Document-Commit-Reflect pattern

**Integration with Step 14:**
- Step 15 depends on Step 14 (CHECK phase)
- Uses verification status from Step 13
- Acts on reflection results from Step 12
- Completes the PDCA cycle

**Changelog Update Options:**

**Option A: Create New Release (Recommended)**
- Increment BUILD number
- Create new changelog entry
- Move "Attempted Fix" to "Fixed" section
- Include verification evidence
- Full traceability maintained

**Option B: Update Existing Release**
- Update existing changelog file
- Move "Attempted Fix" to "Fixed" section
- Add verification evidence
- Note: Requires manual file edit (not automated)

**Examples:**

**Example 1: Verified Fix - Create New Release**
- Step 12 result: Verified (test suite pass)
- Step 13 action: Create new release `v0.2.2.2+1`
- Changelog update: Move "Attempted fix" to "Fixed" section
- Verification evidence: Added to changelog
- Result: Full traceability, verification documented

**Example 2: Failed Fix - Document and Create Follow-Up**
- Step 12 result: Failed (tests fail)
- Step 13 action: Document failure, create follow-up task
- Changelog update: Add "Failed Fixes" section
- Follow-up task: E2:S02:T07 – Fix Step 12 verification issue
- Result: Failure documented, next iteration planned

**Example 3: Deferred Verification - Document Plan**
- Step 12 result: Deferred (requires production deployment)
- Step 13 action: Document verification plan, schedule reminder
- Changelog update: Add "Deferred Verification" section
- Reminder task: Verify after deployment (2025-12-05)
- Result: Plan documented, verification scheduled

**Example 4: Process Improvement**
- Step 12 reflection: RW process could be improved
- Step 13 action: Document process improvement
- Documentation update: Update RW execution guide
- Process improvement: Add validation for Step 12
- Result: Process improved, documentation updated

---

### Step 16: Check for PIR Trigger

**Step Definition:**
```yaml
- id: step-16
  name: Check for PIR Trigger
  handler: pir.check_trigger
  dependencies: [step-12]
  config:
    epic_pir_always: true
    story_pir_significance_criteria: [...]
    pir_workflow_path: packages/frameworks/workflow mgt/workflows/pir-workflow.yaml
```

**Agent Execution:**

1. **ANALYZE:**
   - Get `new_version` from Step 2:
     - [Example: ai-dev-kit] `"0.2.11.9+3"`
   - Extract Epic and Story from version (RC.EPIC.STORY.TASK+BUILD)
   - Determine Epic/Story document paths from Kanban structure
   - Understand this step triggers PIR workflow if Epic/Story is COMPLETE
   - Check if PIR workflow is enabled (config)

2. **DETERMINE:**
   - **For Epic-Level:**
     - Read Epic document status
     - If COMPLETE, trigger Epic PIR workflow
     - Always trigger if `epic_pir_always: true`
   - **For Story-Level:**
     - Read Story document status
     - If COMPLETE, evaluate significance
     - If significant, trigger Story PIR workflow
     - If not significant, skip PIR trigger
   - **If not COMPLETE:**
     - Skip PIR trigger
     - Log status for reference

3. **EXECUTE:**
   - **Read Epic/Story Document:**
     ```bash
     # Epic-level
     Epic: docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md
     
     # Story-level
     Story: docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md
     ```
   
   - **Extract Status:**
     - Read status field from document
     - Check if status is "COMPLETE" or "COMPLETE ✅"
   
   - **For Epic-Level (if COMPLETE):**
     - Trigger Epic PIR workflow
     - Pass context: Epic number, version range
     - PIR executes as separate workflow (non-blocking)
   
   - **For Story-Level (if COMPLETE):**
     - Evaluate significance against criteria
     - If High/Medium Significance: Trigger Story PIR workflow
     - If Low Significance: Skip PIR trigger, log reason
     - Pass context: Epic number, Story number, version
   
   - **Log Results:**
     - Document PIR trigger decision
     - Log Epic/Story, version, significance (if Story)
     - Log trigger status (triggered/skipped)

4. **VALIDATE:**
   - Verify Epic/Story document was read successfully
   - Verify status extraction was correct
   - Verify PIR trigger decision was made correctly
   - **Non-blocking:** If PIR trigger fails, log warning and continue
   - **RW continues:** RW workflow completes successfully regardless of PIR trigger result

5. **PROCEED:**
   - Document PIR trigger decision
   - If triggered: Note PIR workflow execution started
   - If skipped: Note skip reason
   - **Workflow Complete!** (RW finishes, PIR runs separately)

**Key Points:**
- This step is **non-blocking** - RW completes even if PIR trigger fails
- Epic-level: Always triggers PIR if COMPLETE
- Story-level: Only triggers PIR if significant
- PIR executes as separate workflow (doesn't block RW)
- Deterministic check ensures reliable triggering

**Integration with PIR Workflow:**
- Step 15 triggers PIR workflow automatically
- PIR workflow executes independently
- RW workflow completes successfully
- PIR results are separate from RW results

**Examples:**

**Example 1: Epic COMPLETE - Trigger Epic PIR**
- Version: `0.2.11.9+3` (Epic 2, Story 11, Task 9)
- Epic 2 status: COMPLETE ✅
- Step 15 action: Trigger Epic PIR workflow
- PIR context: Epic 2, version range `0.2.11.1+1` to `0.2.11.9+3`
- Result: Epic PIR workflow triggered, RW completes

**Example 2: Story COMPLETE (High Significance) - Trigger Story PIR**
- Version: `0.2.5.11+1` (Epic 2, Story 5, Task 11)
- Story 5 status: COMPLETE ✅
- Significance evaluation: High (introduces new patterns, multiple tasks)
- Step 15 action: Trigger Story PIR workflow
- PIR context: Epic 2, Story 5, version `0.2.5.11+1`
- Result: Story PIR workflow triggered, RW completes

**Example 3: Story COMPLETE (Low Significance) - Skip PIR**
- Version: `0.2.1.6+4` (Epic 2, Story 1, Task 6)
- Story 1 status: COMPLETE ✅
- Significance evaluation: Low (simple bug fix)
- Step 15 action: Skip PIR trigger
- Skip reason: "Story not significant enough for PIR"
- Result: PIR skipped, RW completes

**Example 4: Story Not COMPLETE - Skip PIR**
- Version: `0.2.5.5+1` (Epic 2, Story 5, Task 5)
- Story 5 status: IN PROGRESS
- Step 16 action: Skip PIR trigger
- Skip reason: "Story not COMPLETE"
- Result: PIR skipped, RW completes

---

### Step 17: Housekeeping

**Step Definition:**
```yaml
- id: step-17
  name: Housekeeping
  handler: ide.housekeeping
  dependencies: [step-16]
  config:
    clear_ide_todos: true
    cleanup_temp_files: false
```

**Agent Execution:**

1. **ANALYZE:**
   - Understand this is a housekeeping step that runs at the end of the Release Workflow
   - Purpose: Clean up IDE state and temporary artifacts
   - Current implementation: Clear IDE todo list
   - Future: May include cleanup of temporary files, reset IDE state, etc.

2. **DETERMINE:**
   - **If `clear_ide_todos: true`:**
     - Clear all RW-related todos from the IDE todo list
     - This includes all `rw-step-*` todos created during workflow execution
   - **If `cleanup_temp_files: true` (future):**
     - Remove temporary files created during workflow execution
     - Clean up any staging artifacts

3. **EXECUTE:**
   - **Clear IDE Todo List:**
     - Use `todo_write` tool with `merge: true` to mark all `rw-step-*` todos as `cancelled`
     - Pattern: Find all todos with `id` matching `rw-step-*` and mark as `cancelled`
     - **Note:** The `todo_write` tool does not support deletion. Marking as `cancelled` is the best available approach to hide/clear these todos from the active list.
     - Example:
       ```python
       # Clear all RW todos by marking as cancelled
       # Note: todo_write doesn't support deletion, so cancelled status is used to hide them
       todo_write(
           merge=True,
           todos=[
               {'id': 'rw-step-1', 'status': 'cancelled'},
               {'id': 'rw-step-2', 'status': 'cancelled'},
               {'id': 'rw-step-3', 'status': 'cancelled'},
               {'id': 'rw-step-4', 'status': 'cancelled'},
               {'id': 'rw-step-5', 'status': 'cancelled'},
               {'id': 'rw-step-6', 'status': 'cancelled'},
               {'id': 'rw-step-7', 'status': 'cancelled'},
               {'id': 'rw-step-8', 'status': 'cancelled'},
               {'id': 'rw-step-9', 'status': 'cancelled'},
               {'id': 'rw-step-10', 'status': 'cancelled'},
               {'id': 'rw-step-11', 'status': 'cancelled'},
               {'id': 'rw-step-12', 'status': 'cancelled'},
           ]
       )
       ```
   - **Future: Cleanup Temp Files (if enabled):**
     - Remove temporary files from workflow execution
     - Clean up staging directories if needed

4. **VALIDATE:**
   - Verify IDE todo list is cleared (no `rw-step-*` todos remain)
   - Verify no errors occurred during cleanup

5. **PROCEED:**
   - Document: "Housekeeping complete - IDE todo list cleared"
   - Mark workflow as complete
   - No further steps

**Key Points:**
- This step runs at the very end of the Release Workflow
- It's optional but recommended for clean IDE state
- Current implementation marks todos as `cancelled` to hide them (tool limitation: `todo_write` doesn't support deletion)
- If Cursor adds deletion support to `todo_write`, this can be updated to actually remove todos
- Future enhancements may include additional cleanup tasks

**Configuration:**
- `clear_ide_todos: true` - Clear all RW-related todos from IDE (default: true)
- `cleanup_temp_files: false` - Clean up temporary files (default: false, future feature)

**Examples:**

**Example 1: Clear IDE Todos**
- RW completes all 16 steps
- Step 17 executes: Clears all `rw-step-*` todos
- Result: IDE todo list is clean, ready for next workflow

**Example 2: Future - Cleanup Temp Files**
- RW creates temporary files during execution
- Step 17 executes: Clears todos and removes temp files
- Result: Clean workspace, no artifacts left behind

**Reference:**
- See `.cursorrules` Step 13: Housekeeping for cursor rules reference
- This step is documented as Step 13 in cursor rules (referring to the 12-step core workflow + housekeeping)

---

## ✅ Agent Execution Checklist

**Note:** This markdown checklist serves as a reference. **Agents MUST use Cursor TODOs** (see "🚨 MANDATORY: Progress Tracking with Cursor TODOs" section above) for real-time progress tracking. TODOs are **REQUIRED**, not optional.

When executing Release Workflow as an agent, ensure:

### Pre-Execution
- [ ] **MANDATORY:** Created TODO list with all 17 steps (using `todo_write`) - Note: Steps 12-16 are optional but recommended for PDCA/PIR, Step 17 is optional but recommended for housekeeping
- [ ] Loaded workflow definition from YAML
- [ ] Parsed all 17 steps and dependencies
- [ ] Gathered workflow parameters (summary, change_type, etc.)
- [ ] Checked current Git branch
- [ ] Verified workspace context

### Step Execution
- [ ] **Step 1:** Analyzed work and branch alignment, validated branch safety
- [ ] **Step 2:** Analyzed version, determined next version, updated file, validated
- [ ] **Step 3:** Analyzed requirements, generated timestamp, created changelog, validated
- [ ] **Step 4:** Analyzed format, determined date, updated CHANGELOG.md, validated
- [ ] **Step 5:** Analyzed README, updated badge and callout, validated
- [ ] **Step 6:** Analyzed BR/FR docs, updated fix attempt history, validated
- [ ] **Step 7:** Analyzed Kanban docs, updated Epic/Story docs, validated
- [ ] **Step 8:** Analyzed modified files, staged all files, validated
- [ ] **Step 9:** Checked for IDE-flagged problems (errors, warnings, infos), addressed in order, validated
- [ ] **Step 10:** Analyzed validators, ran all validators (including changelog size check), validated results
- [ ] **Step 10.5:** Checked if CMW needed, executed CMW if threshold exceeded, validated results (optional)
- [ ] **Step 11:** Analyzed template, built message, created commit, validated
- [ ] **Step 12:** Analyzed tag format, created annotated tag (internal + SemVer), validated
- [ ] **Step 13:** Analyzed remote, pushed branch and tags, validated
- [ ] **Step 12.5:** Checked for GITHUB_TOKEN, created/updated GitHub release (or skipped with instructions), validated (non-blocking)
- [ ] **Step 14:** Analyzed changes, prompted for verification, documented reflection, validated (optional but recommended)
- [ ] **Step 15:** Analyzed verification results, acted on results, updated changelog, created follow-ups, validated (optional but recommended)
- [ ] **Step 16:** Analyzed Epic/Story status, checked COMPLETE, evaluated significance, triggered PIR if applicable, validated (optional but recommended)
- [ ] **Step 17:** Housekeeping - Cleared IDE todo list, validated (optional but recommended)

### Post-Execution
- [ ] **MANDATORY:** All steps marked as completed in TODO list
- [ ] All steps completed successfully
- [ ] Version file updated correctly
- [ ] Changelogs created/updated correctly
- [ ] README updated correctly
- [ ] Kanban docs updated correctly
- [ ] Files committed with correct message
- [ ] Tags created (internal + SemVer) and pushed
- [ ] Branch pushed to remote
- [ ] GitHub release created/updated (or skipped with instructions if token missing)
- [ ] Verification and reflection documented (if Step 14 executed)
- [ ] Actions taken and follow-ups created (if Step 15 executed)
- [ ] PIR trigger checked and executed if applicable (if Step 16 executed)
- [ ] Housekeeping complete - IDE todo list cleared (if Step 17 executed)
- [ ] Execution documented

---

## 🚫 Common Agent Mistakes

### ❌ Don't: Blindly Run Scripts

**Bad:**
```python
# Agent just runs the script
run_terminal_cmd("python scripts/automation/release_workflow.py --auto-go")
```

**Good:**
```python
# Agent analyzes and executes each step intelligently
# Step 1: Analyze work and branch alignment, validate branch safety
# Step 2: Analyze version, determine next version, update file
# Step 3: Analyze changelog requirements, create file
# etc.
```

### ❌ Don't: Skip Analysis

**Bad:**
- Agent updates version without checking branch context
- Agent creates changelog without understanding format requirements
- Agent commits without validating

**Good:**
- Agent checks branch safety before any modifications (Step 1)
- Agent analyzes branch context before version bump
- Agent understands changelog format requirements
- Agent validates before committing

### ❌ Don't: Ignore Dependencies

**Bad:**
- Agent tries to create changelog before version is bumped
- Agent tries to commit before files are staged
- Agent tries to push before commit exists

**Good:**
- Agent completes Step 1 (branch safety) before any modifications
- Agent waits for Step 2 to complete before Step 3
- Agent waits for Step 8 to complete before Step 9
- Agent respects dependency order

---

## 🔄 UKW → RW Integration (Wiring)

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

**Perpetual Task Pattern (UKW):**
- Projects should create a perpetual UKW task for UKW release attribution
- **Wiring Required:** Task must have `perpetual_task: true` or `Task Type: Perpetual Maintenance` in task document (UKW uses this to wire)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (wired in UKW Step 1)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as UKW runs (expected and valid)

**Perpetual Task Pattern (CMW):**
- Projects should create a perpetual CMW task for CMW maintenance release attribution
- **Wiring Required:** Task must have `Task Type: Perpetual Maintenance` in task document (RW uses this to discover CMW perpetual task)
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (discovered via flag search)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as CMW runs (expected and valid)
- **CMW Context Detection:** RW Step 2 detects CMW context (user ran "CMW" then "RW")
- **Version Pattern:** CMW releases use the perpetual task's version pattern: `v0.{EPIC}.{STORY}.{PERPETUAL_TASK}+{BUILD}` where BUILD = CMW run count
- **See:** Epic 2 Story 1 T05 (CMW Perpetual Task Pattern template) for detailed pattern documentation

**Perpetual Task Pattern (RW Maintenance - T103):**
- Projects should create a perpetual RW maintenance task for workflow framework maintenance release attribution
- **Wiring Required:** Task must have `Task Type: Perpetual Maintenance` in task document
- **Task ID Varies:** Each project instance has its own perpetual task with its own E/S/T ID (e.g., E2:S16:T03 in ai-dev-kit)
- Task status: IN PROGRESS (Perpetual - never completes)
- BUILD number accumulates naturally as RW maintenance releases (expected and valid)
- **No Context Detection:** Unlike UKW/CMW, attribution is manual—when releasing RW maintenance work (Step 7 fixes, validator updates, doc corrections), agent/user manually sets version to E2:S16:T03 and increments BUILD
- **See:** Epic 2 Story 1 T06 (RW Maintenance Perpetual Task Pattern template) for detailed pattern documentation

---

## 📚 Related Documentation

**Workflow Documentation:**
- **[Agent-Driven Workflow Execution](agent-driven-workflow-execution.md)** - General agent execution methodology
- **[Release Workflow Reference](release-workflow-reference.md)** - Complete workflow reference
- **[Release Workflow Usage](release-workflow-usage.md)** - How to use the workflow

**Policy Documentation:**
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure
- **[Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)** - Versioning requirements
- **[Versioning Policy](../../Architecture/standards-and-adrs/versioning-policy.md)** - Version schema

**Reference Documentation:**
- **[Workflow Flaws Reference Guide](../../Architecture/standards-and-adrs/workflow-flaws-reference-guide.md)** - Comprehensive reference for all discovered RW flaws
- **[Versioning Error Reference Guide](../../Architecture/standards-and-adrs/versioning-error-reference-guide.md)** - Versioning-specific error reference (WF-002)

**Cursor Rules Integration:**

### RW Trigger Definition

The `.cursorrules` file defines a **case-insensitive "RW" trigger** that mandates intelligent agent-driven Release Workflow execution:

**Trigger:** User types "RW" or "rw" (case-insensitive)

**Required Behavior (from `.cursorrules`):**
1. **DO NOT** run `scripts/automation/release_workflow.py` (deterministic script)
2. **DO** execute Release Workflow using intelligent agent-driven execution
3. **Follow** this guide (`release-workflow-agent-execution.md`) step-by-step
4. **Start with Step 1: Branch Safety Check** - Analyze work and ensure it aligns with current branch before proceeding
5. **Use** ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern for each step
6. **Document** analysis, actions, and results at each step

**Cursor Rules Enforcement:**
- ✅ **Explicit Pattern:** Rules mandate agent-driven execution for "RW" trigger
- ✅ **Documentation Links:** Rules reference this guide and agent execution methodology
- ✅ **Anti-Pattern Prevention:** Rules explicitly prohibit blind script execution
- ✅ **Integration:** Rules connect to versioning, changelog, and validation requirements

**How This Works:**
1. User types "RW" in chat
2. `.cursorrules` instructs AI assistant to use agent-driven execution
3. AI assistant loads this guide and executes each step intelligently
4. AI assistant follows `.cursorrules` guardrails (branch checks, validators, versioning)
5. AI assistant analyzes, determines, executes, validates, and documents at each step
6. Process is transparent, traceable, and intelligent

**See:** `.cursorrules` - "🚀 RELEASE WORKFLOW (RW) TRIGGER" section

---

**Last Updated:** 2025-12-16
**Document Version:** 1.8.0
