---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# Release Workflow Reference

**Version:** 2.1.0
**Last Updated:** 2025-12-16
**Related:** Epic 2, Story 5 - Post-Implementation Review Workflow Integration

---

## 📜 Version History

**Current Version:** 2.1.0 (2025-12-16)

### Version 2.1.0 (2025-12-16) - PIR Workflow Integration
- **Added:** Step 15: Check for PIR Trigger (after Step 14)
- **Changed:** Updated workflow structure from 14 steps to 15 steps
- **Changed:** Workflow version updated from 2.0.0 to 2.1.0
- **Feature:** Auto-trigger PIR workflow when Epic/Story marked COMPLETE
- **Feature:** Deterministic check for Epic/Story COMPLETE status
- **Feature:** Story significance evaluation before PIR trigger
- **Related:** E2:S05:T08 - Integrate PIR with Release Workflow

### Version 1.4.0 (2025-12-05) - Branch Safety Hardening
- **Added:** Step 1: Branch Safety Check as mandatory blocking step
- **Changed:** Step 1 now requires `validate_branch_context.py --strict` execution
- **Changed:** Step 1 stops workflow immediately if branch/version/epic alignment fails
- **Changed:** Updated workflow structure from 13 steps to 14 steps
- **Changed:** All steps renumbered (Bump Version: 1→2, Create Detailed Changelog: 2→3, etc.)
- **Related:** E2:S01:T05 - Harden RW branch safety checks

### Version 1.3.0 (2025-12-04) - BR/FR Documentation Integration
- **Added:** Step 6: Update BR/FR Docs (before Auto-update Kanban Docs)
- **Changed:** Auto-update Kanban Docs moved from Step 5 to Step 7
- **Changed:** All subsequent steps renumbered
- **Changed:** Updated workflow structure from 13 steps to 14 steps
- **Related:** E3:S03:T06 - Add RW step to update BR/FR docs

### Version 1.2.0 (2025-12-03) - PDCA ACT Phase Integration
- **Added:** Step 13: Act on Verification Results (ACT phase)
- **Changed:** Updated workflow structure from 12 steps to 13 steps
- **Related:** E2:S02:T02 - Add ACT Phase (Step 13) to Release Workflow

### Version 1.1.0 (2025-12-02) - PDCA CHECK Phase Integration
- **Added:** Step 12: Post-Commit Verification & Reflection (CHECK phase)
- **Changed:** Updated workflow structure from 11 steps to 12 steps
- **Related:** E2:S02:T01 - Add CHECK Phase (Step 12) to Release Workflow

### Version 1.0.0 (2025-12-01) - Initial Release
- **Initial:** 11-step Release Workflow
- **Steps:** Bump Version, Create Detailed Changelog, Update Main Changelog, Update README, Auto-update Kanban Docs, Stage Files, Run Validators, Commit Changes, Create Git Tag, Push to Remote
- **Related:** Initial framework extraction from fynd.deals Epic 15, Story 1

**Policy References:**
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure and task-level versioning requirements
- **[Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)** - Forensic traceability and canonical ordering principles
- **[Versioning Policy (Schema)](../../Architecture/standards-and-adrs/versioning-policy.md)** - Version schema definition (RC.EPIC.STORY.TASK+BUILD)
- **[Cursor Rules](../../../../.cursorrules)** - Fundamental system rules ⭐

---

## 📖 Overview

This document provides a comprehensive reference for the **Release Workflow**, the automated process that implements both Kanban Governance and Versioning Strategy policies. The workflow ensures **forensic accountability**, **efficient traceability**, and **robust automation** of the complete release process.

The Release Workflow explains each step, its parameters, configuration options, and how they work together. Use this as a detailed reference after completing the [Tutorial: Building Release Workflow from Scratch](tutorial-release-workflow.md).

**The Release Workflow is the bridge between policy and practice**, automatically enforcing versioning requirements, creating changelogs with proper timestamps, updating Kanban documentation, and ensuring all validations pass before release.

**⭐ Canonical Example:** The Release Workflow serves as the **canonical example** of intelligent agent-driven workflow execution. See [Release Workflow Agent Execution Guide](release-workflow-agent-execution.md) for detailed step-by-step agent execution patterns.

**🚀 RW Trigger:** When users send **`RW <task_id>`** in one message (case-insensitive; e.g. `RW E7:S01:T10`, `RW E7S01T10`; same for `RW -d` / `RW -k`), AI assistants execute this workflow per [`.cursorrules`](../../../../.cursorrules). A parseable `E…S…T…` token is **mandatory** (FR-060). After branch safety (Step 1), agents run `validate_rw_task_complete.py` then `validate_rw_task_intent.py` before Step 2. The `--art` adoption flag is valid for all RW modes when intentional canonical anchor adoption is required, and this adoption context must be propagated into Step 9 validators (`validate_branch_context.py`, `validate_version_bump.py`). See [Release Workflow Agent Execution Guide](release-workflow-agent-execution.md).

### How This Workflow Implements Policy Requirements

**From [Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md):**
- ✅ **Task-level versioning:** Step 1 validates version TASK matches active Kanban task
- ✅ **Forensic markers:** Step 5 updates Epic/Story docs with version numbers (forensic markers)
- ✅ **Work item traceability:** Step 5 maintains links between versions, tasks, and Kanban board entries
- ✅ **Documentation sync:** Step 5 automatically updates Kanban documentation with release information

**From [Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md):**
- ✅ **Canonical ordering:** Version numbers (not timestamps) determine changelog order
- ✅ **Full timestamp:** Step 2 creates detailed changelog with `YYYY-MM-DD HH:MM:SS UTC` (immutable forensic record)
- ✅ **Short date:** Step 3 updates main changelog with `DD-MM-YY` format (merge-to-main date)
- ✅ **Forensic traceability:** Steps 2, 3, 5, 8, 9 create complete traceability grid (version ↔ epic/story/task ↔ changelogs ↔ kanban ↔ git)

**From [Versioning Policy (Schema)](../../Architecture/standards-and-adrs/versioning-policy.md):**
- ✅ **Schema enforcement:** Step 1 enforces `RC.EPIC.STORY.TASK+BUILD` format
- ✅ **Parallel development:** Supports multiple epic version streams simultaneously
- ✅ **Version progression:** Step 1 handles BUILD increments and task transitions correctly

**From [Cursor Rules](../../../../.cursorrules):**
- ✅ **RW Trigger:** `RW <task_id>` required in the same message; then agent-driven execution (FR-060 + BR-056 guard steps before version bump)
- ✅ **Mandatory checklist:** Steps 1-10 implement the complete commit checklist
- ✅ **Validation enforcement:** Step 7 runs validators that block invalid releases
- ✅ **Branch isolation:** Step 7 validates branch/version alignment
- ✅ **Agent execution pattern:** Rules mandate ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern for each step

---

## 📋 Workflow Structure

The Release Workflow consists of **14 steps** organized into 3 phases. Each step implements specific requirements from the **Kanban Governance Policy**, **Versioning Strategy**, and **PDCA Integration**:

### Phase 1: Version & Documentation Updates

**Implements:** Versioning Strategy (canonical ordering, timestamp system) + Kanban Governance (task-level versioning, documentation updates)

- **Step 1:** 🚨 **MANDATORY BLOCKING: Branch Safety Check**
  - **CRITICAL:** Runs `validate_branch_context.py --strict` before any file modifications
  - **BLOCKING:** Stops workflow immediately if branch/version/epic alignment fails
  - **MANDATORY:** Cannot be skipped, bypassed, or ignored
  - Prevents cross-epic contamination by validating branch context before proceeding
  - See [Release Workflow Agent Execution Guide](release-workflow-agent-execution.md) for detailed Step 1 execution pattern

- **Step 2:** Bump Version
  - Enforces `RC.EPIC.STORY.TASK+BUILD` schema from [Versioning Policy](../../Architecture/standards-and-adrs/versioning-policy.md)
  - Validates task-level versioning alignment per [Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)
  - **Depends on:** Step 1 (Branch Safety Check) must pass first

- **Step 3:** Create Detailed Changelog
  - Implements full timestamp requirement (`YYYY-MM-DD HH:MM:SS UTC`) from [Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)
  - Creates forensic traceability record with immutable timestamp

- **Step 4:** Update Main Changelog
  - Implements short date format (`DD-MM-YY`) for summary changelog per [Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)
  - Maintains canonical ordering by version number (not commit time)

- **Step 5:** Update README
  - Updates version badge and latest release information

- **Step 6:** Update BR/FR Docs
  - Documents flaws and fix attempts in Bug Reports and Feature Requests
  - Maintains fix attempt history for knowledge transfer between builds

- **Step 7:** Scoped Kanban Sync (UKW Mode) (FR-038; formerly “Auto-update Kanban Docs”)
  - Scoped, UKW-style agentic kanban update for the **release E/S/T**; not a full standalone UKW run. See [UKW agent guide — Invocation context](update-kanban-workflow-agent-execution.md#invocation-context-fr-038--rw-step-7).
  - Implements [Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md) requirement for forensic markers
  - Updates Epic/Story documentation with version numbers and task completion status
  - Maintains traceability grid (version ↔ epic/story/task ↔ changelogs ↔ kanban markers)

### Phase 2: Git Operations & Validation

**Implements:** Validation requirements from all policies + Git operations for forensic accountability

- **Step 8:** Stage Files
  - Stages all modified files (code + version + changelogs + docs)

- **Step 9:** Run Validators
  - Executes `validate_branch_context.py` (enforces branch/version/epic alignment)
  - Executes `validate_changelog_format.py` (enforces full timestamp for Epic 20+)
  - Blocks release if validations fail (enforces policy compliance)

- **Step 10:** Commit Changes
  - Creates commit with version number in message (forensic marker)
  - Ensures version is traceable in Git history

- **Step 11:** Create Git Tag
  - Creates annotated tag with version (forensic marker)
  - Enables version-based navigation in Git history

- **Step 12:** Push to Remote
  - Pushes branch and tags to remote repository
  - Completes forensic traceability chain

### Phase 3: PDCA CHECK & ACT (Steps 13-14)

**Implements:** PDCA Integration (continuous improvement, verification, reflection)

- **Step 13:** Post-Commit Verification & Reflection
  - Verifies changes worked as expected
  - Evaluates against objectives from PLAN phase
  - Documents verification results
  - Reflects on what worked and what didn't

- **Step 14:** Act on Verification Results
  - Updates changelog based on verification results
  - Standardizes successful practices
  - Creates follow-up tasks if needed
  - Documents lessons learned

---

## 🔧 Workflow-Level Configuration

Before diving into individual steps, let's understand the workflow-level configuration that applies to all steps.

### Configuration Variables

These variables are defined at the workflow level and can be referenced in any step:

```yaml
config:
  version_file: src/confidentia/version.py
  changelog_dir: docs/changelog-and-release-notes/changelog-archive
  main_changelog: CHANGELOG.md
```

**Usage in steps:**
- Reference these variables using `${config.variable_name}`
- Example: `${config.version_file}` resolves to `src/confidentia/version.py`
- This allows easy reconfiguration without changing individual step configs

---

## 📝 Step-by-Step Reference

### Step 1: 🚨 MANDATORY BLOCKING: Branch Safety Check

**Handler:** `release.branch_safety_check`
**Category:** Validation
**Icon:** 🔒
**Required:** ✅ Yes (MANDATORY BLOCKING)
**Default Dependencies:** None (first step)
**Blocking:** ✅ Yes (stops workflow on failure)

#### Purpose

**CRITICAL:** Validates that the current branch aligns with the work being released before any file modifications occur. This step prevents cross-epic contamination by ensuring branch/version/epic alignment.

**MANDATORY REQUIREMENTS:**
- ✅ Must run `validate_branch_context.py --strict` before any file modifications
- ✅ Must check exit code (0 = PASS, non-zero = FAIL)
- ✅ If exit code is non-zero, workflow MUST STOP immediately
- ✅ All remaining steps marked as `cancelled` on failure
- ❌ Cannot be skipped, bypassed, or ignored

#### Execution Flow

1. Determines validator script path (from config or fallback)
2. Executes `python {validator_path} --strict`
3. Captures exit code and output
4. **If exit code 0:** Proceeds to Step 2
5. **If exit code non-zero:** Stops workflow, marks all steps as `cancelled`, outputs error message

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `use_validator` | boolean | Yes | `true` | Must use `validate_branch_context.py` |
| `strict_mode` | boolean | Yes | `true` | Validator must run in strict mode |
| `scripts_path` | string | No | `scripts/validation` | Path to validation scripts directory |

#### Error Handling

If validation fails:
- Workflow stops immediately
- Clear error message displayed with actionable guidance
- All remaining steps marked as `cancelled`
- No file modifications occur

See [Release Workflow Agent Execution Guide](release-workflow-agent-execution.md) for detailed Step 1 execution pattern with code examples.

---

### Step 2: Bump Version

**Handler:** `release.version_bump`
**Category:** Version
**Icon:** 🔢
**Required:** ✅ Yes
**Default Dependencies:** Step 1 (Branch Safety Check)

#### Purpose

Increments the version number in the version file. This step runs after Step 1 (Branch Safety Check) passes, ensuring branch alignment before version changes.

#### Execution Flow

1. Reads current version from `version_file`
2. Increments version based on `increment_type`
3. Updates `version_file` with new version
4. Outputs `new_version` and `old_version` for use by other steps

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `version_file` | string | ✅ Yes | - | Path to version file relative to workspace root (e.g., `src/confidentia/version.py`) |
| `increment_type` | enum | ❌ No | `patch` | How to increment the version |

#### `increment_type` Options

| Value | Description | Example |
|-------|-------------|---------|
| `patch` | Increment patch version (fourth number) | `0.21.0.1` → `0.21.0.2` |
| `minor` | Increment minor version (third number) | `0.21.0.1` → `0.21.1.0` |
| `major` | Increment major version (first number) | `0.21.0.1` → `1.0.0.0` |
| `feature` | Increment feature version (third number) | `0.21.0.1` → `0.21.1.0` |
| `feature_set` | Increment feature set version (second number) | `0.21.0.1` → `0.22.0.0` |

#### Configuration Example

```yaml
config:
  version_file: ${config.version_file}  # Uses workflow config variable
  increment_type: patch                  # Increment patch version
```

#### Step Outputs

After execution, this step outputs:

```json
{
  "new_version": "0.21.0.2",
  "old_version": "0.21.0.1"
}
```

**Accessing outputs in other steps:**
- `step-1.output.new_version` - The new version number
- `step-1.output.old_version` - The previous version number

#### Example Usage in Other Steps

Step 2 (Create Detailed Changelog) accesses the version via:
```python
version = context.step_outputs.get("step-1", {}).get("output", {}).get("new_version")
```

#### Error Handling

- **Version file not found:** Step fails with error message
- **Invalid version format:** Step fails with error message
- **File write error:** Step fails with error message

---

### Step 2: Create Detailed Changelog

**Handler:** `release.changelog_create`
**Category:** Changelog
**Icon:** 📝
**Required:** ✅ Yes
**Default Dependencies:** `step-1` (needs new version)

#### Purpose

Creates a detailed changelog file with full timestamp, release summary, and detailed changes. This file is stored in the changelog archive directory.

#### Execution Flow

1. Retrieves new version from Step 1 output
2. Extracts release details from workflow parameters
3. Extracts Epic/Story information from Git branch name
4. Generates full timestamp (`YYYY-MM-DD HH:MM:SS UTC`)
5. Creates changelog file at `{changelog_dir}/CHANGELOG_v{version}.md`
6. Writes changelog content with all release information

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `changelog_dir` | string | ❌ No | `docs/changelog-and-release-notes/changelog-archive` | Directory where detailed changelog files are stored |
| `format` | enum | ❌ No | `full_timestamp` | Timestamp format for release date |

#### `format` Options

| Value | Description | Example |
|-------|-------------|---------|
| `full_timestamp` | Full timestamp with date and time | `2025-11-21 15:42:58 UTC` |

#### Configuration Example

```yaml
config:
  changelog_dir: ${config.changelog_dir}  # Uses workflow config variable
  format: full_timestamp                  # Use full timestamp format
```

#### Generated Changelog Format

The step generates a changelog file with the following format:

```markdown
# Changelog v0.21.0.2

**Release Date:** 2025-11-21 15:42:58 UTC
**Epic:** Epic 21 - Visual Workflow Management Platform
**Story:** Story 3 - Implement Workflows in VWMP
**Type:** 🐞 Fix

## Summary
🐞 Fix: VWMP designer renders Release Workflow

## Changes

See commit history for detailed changes.

## Related Tasks
- E21S3T01 – Implement Release Workflow in VWMP
```

#### Data Sources

The step uses data from multiple sources:

1. **Version:** From Step 1 output (`step-1.output.new_version`)
2. **Summary:** From workflow parameter `summary`
3. **Change Type:** From workflow parameter `change_type`
4. **Detailed Changes:** From workflow parameter `detailed_changes` (optional)
5. **Epic/Story:** Extracted from Git branch name (e.g., `epic/21-workflow-platform`)
6. **Timestamp:** Generated at execution time using `get_full_timestamp()`

#### Step Outputs

After execution, this step outputs:

```json
{
  "changelog_file": "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.21.0.2.md",
  "version": "0.21.0.2"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 1 output is not available
- **Directory creation failed:** Step fails if changelog directory cannot be created
- **File write error:** Step fails if changelog file cannot be written

---

### Step 3: Update Main Changelog

**Handler:** `release.changelog_update`
**Category:** Changelog
**Icon:** 📋
**Required:** ✅ Yes
**Default Dependencies:** `step-2` (needs changelog to be created first)

#### Purpose

Adds a summary entry to the main CHANGELOG.md file. This provides a quick reference for recent releases without needing to open individual detailed changelog files.

#### Execution Flow

1. Retrieves version from Step 1 output
2. Retrieves release details from workflow parameters
3. Generates summary date using `date_format`
4. Creates summary entry with link to detailed changelog
5. Inserts entry into main CHANGELOG.md after "## Recent Releases" header
6. If "## Recent Releases" header doesn't exist, creates it at the top

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `main_changelog` | string | ❌ No | `CHANGELOG.md` | Path to main changelog file |
| `date_format` | string | ❌ No | `DD-MM-YY` | Date format for summary entries |

#### `date_format` Options

| Value | Description | Example |
|-------|-------------|---------|
| `DD-MM-YY` | Day-Month-Year (short) | `21-11-25` |
| `YYYY-MM-DD` | Year-Month-Day (ISO) | `2025-11-21` |
| Custom format | Any strftime format | `%d/%m/%Y` → `21/11/2025` |

#### Configuration Example

```yaml
config:
  main_changelog: ${config.main_changelog}  # Uses workflow config variable
  date_format: DD-MM-YY                     # Use short date format
```

#### Generated Summary Entry Format

The step adds an entry to CHANGELOG.md like this:

```markdown
### [0.21.0.2] - 21-11-25
🐞 Fix: VWMP designer renders Release Workflow
- See [CHANGELOG_v0.21.0.2.md](docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.21.0.2.md)
```

#### Data Sources

1. **Version:** From Step 1 output (`step-1.output.new_version`)
2. **Summary:** From workflow parameter `summary`
3. **Change Type:** From workflow parameter `change_type` (used for emoji)
4. **Date:** Generated at execution time using `get_summary_date()`

#### Step Outputs

After execution, this step outputs:

```json
{
  "main_changelog": "CHANGELOG.md",
  "version": "0.21.0.2"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 1 output is not available
- **Main changelog not found:** Step fails if CHANGELOG.md doesn't exist
- **File write error:** Step fails if CHANGELOG.md cannot be written

---

### Step 5: Update README

**Handler:** `release.readme_update`
**Category:** Documentation
**Icon:** 📖
**Required:** ✅ Yes (mandatory step)
**Default Dependencies:** `step-2` (needs new version from Step 2)

#### Purpose

**MANDATORY:** Updates the README.md file with the new project version. Updates version text (required), version badge (if present), and latest release information (if present). This keeps the README current and accurate for users viewing the project.

#### Execution Flow

1. Retrieves version from Step 2 output
2. Retrieves release details from workflow parameters
3. **MANDATORY:** Updates version text in README (e.g., `**Version:** v{version}`)
4. **Optional:** Updates version badge (if `update_badge: true` and badge exists)
5. **Optional:** Updates "Latest Release" callout (if `update_latest_release: true` and callout exists)
6. Writes updated README.md

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `readme_file` | string | ❌ No | `README.md` | Path to README.md file |
| `update_version_text` | boolean | ✅ Yes | `true` | **MANDATORY:** Update project version text in README |
| `update_badge` | boolean | ❌ No | `true` | Optional: Whether to update version badge (if present) |
| `update_latest_release` | boolean | ❌ No | `true` | Optional: Whether to update latest release callout (if present) |

#### Configuration Example

```yaml
config:
  readme_file: README.md
  update_version_text: true  # MANDATORY: Update project version in README
  update_badge: true         # Optional: Update version badge if present
  update_latest_release: true # Optional: Update latest release callout if present
```

#### Updates Performed

1. **Version Text Update (MANDATORY):**
   - Finds version text pattern: `**Version:** v{version}`, `Version: {version}`, or similar
   - Replaces with: `**Version:** v{new_version}` (e.g., `**Version:** v0.6.6.10+14`)
   - **MANDATORY:** This update is required - README must always reflect current project version

2. **Version Badge Update (Optional):**
   - Finds badge pattern: `[![Version]...badge/version-...-blue](.../releases)`
   - Replaces with: `[![Version](https://img.shields.io/badge/version-{new_version}-blue)](https://github.com/owner/repo/releases)`
   - Only updates if badge is present in README

3. **Latest Release Update (Optional):**
   - Finds pattern: `**🎉 Latest Release: v...**`
   - Replaces with: `**🎉 Latest Release: v{new_version}** - {summary}`
   - Only updates if latest release callout is present in README

#### Data Sources

1. **Version:** From Step 2 output (`step-2.output.new_version`)
2. **Summary:** From workflow parameter `summary`
3. **Change Type:** From workflow parameter `change_type` (used for emoji)

#### Step Outputs

After execution, this step outputs:

```json
{
  "readme_file": "README.md",
  "version": "0.6.6.10+14"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 2 output is not available
- **README.md not found:** Step fails if README.md doesn't exist (mandatory step)
- **Version text not found:** Step fails if version text pattern cannot be found in README
- **File write error:** Step fails if README.md cannot be written
- **Note:** Badge and latest release updates are optional - missing these patterns does not cause failure

---

### Step 5: Auto-update Kanban Docs

**Handler:** `confidentia.kanban_update`
**Category:** Documentation
**Icon:** 📊
**Required:** ❌ No (optional step)
**Default Dependencies:** `step-1` (needs version for task updates)

#### Purpose

Automatically updates Kanban documentation (Epic and Story markdown files) with task completion status and release versions. This keeps project documentation synchronized with releases.

#### Execution Flow

1. Retrieves version from Step 1 output
2. Extracts Epic/Story information from Git branch name
3. Extracts task IDs from workflow parameters (if provided)
4. Runs `update_kanban_docs.py` script to update documentation:
   - Marks tasks as complete in Epic/Story docs
   - Updates story status if all tasks complete
   - Updates Epic status if all stories complete
   - Adds release version to completed tasks

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `epic_doc_pattern` | string | ❌ No | `docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md` | Pattern for locating Epic documentation files |
| `kanban_board` | string | ❌ No | `docs/project-management/epics/overview/_index.md` | Path to main Kanban board index file |

#### Configuration Example

```yaml
config:
  epic_doc_pattern: docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md
  kanban_board: docs/project-management/epics/overview/_index.md
```

#### Pattern Variables

The `epic_doc_pattern` supports variable substitution:
- `{epic}` - Replaced with Epic number extracted from Git branch name

**Example:**
- Branch: `epic/21-workflow-platform`
- Epic extracted: `21`
- Pattern: `docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md`
- Resolved: `docs/project-management/epics/overview/Epic 21/Epic-21.md`

#### What Gets Updated

The script updates the following in Kanban docs:

1. **Task Checkboxes:**
   - Changes `- [ ] E21:S01:T01` to `- [x] E21:S01:T01 (v0.21.0.2)`
   - Marks tasks as complete with version number

2. **Story Status:**
   - Updates story status to `COMPLETE` if all tasks are marked complete
   - Adds completion date and version

3. **Epic Status:**
   - Updates Epic status to `COMPLETE` if all stories are marked complete
   - Adds completion date and version

#### Data Sources

1. **Version:** From Step 1 output (`step-1.output.new_version`)
2. **Epic/Story:** Extracted from Git branch name
3. **Task IDs:** Extracted from workflow parameters (if provided) or from release summary/changelog

#### Step Outputs

After execution, this step outputs:

```json
{
  "epic_doc": "docs/project-management/epics/overview/Epic 21/Epic-21.md",
  "tasks_updated": 1,
  "version": "0.21.0.2"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 1 output is not available
- **Epic/Story extraction failed:** Step fails if branch name cannot be parsed
- **Script execution failed:** Step fails if `update_kanban_docs.py` returns non-zero exit code

---

### Step 6: Stage Files

**Handler:** `git.stage_all`
**Category:** Git
**Icon:** 📦
**Required:** ✅ Yes
**Default Dependencies:** `step-1`, `step-2`, `step-3`, `step-4`, `step-5` (wait for all file changes)

#### Purpose

Stages all changed files using `git add`. This prepares files for committing after all documentation updates are complete.

#### Execution Flow

1. Collects file paths from `paths` configuration
2. If `paths` contains `"*"`, executes `git add -A` (stage all files)
3. Otherwise, executes `git add <paths>` for each specified path
4. Verifies files were staged successfully

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `paths` | array | ❌ No | `["*"]` | Array of file paths to stage. Use `["*"]` for all files |

#### Configuration Example

```yaml
config:
  paths:
    - "*"  # Stage all files (equivalent to git add -A)
```

**Alternative: Stage specific files:**
```yaml
config:
  paths:
    - "README.md"
    - "CHANGELOG.md"
    - "src/confidentia/version.py"
```

#### Why Multiple Dependencies?

This step depends on **all previous file-modifying steps** to ensure:
- Version file is updated (Step 1)
- Detailed changelog is created (Step 2)
- Main changelog is updated (Step 3)
- README is updated (Step 4)
- Kanban docs are updated (Step 5)

**All changes are staged together** before committing, ensuring atomic commits.

#### Step Outputs

After execution, this step outputs:

```json
{
  "paths_staged": ["*"]
}
```

#### Error Handling

- **Git command failed:** Step fails if `git add` returns non-zero exit code
- **File not found:** Step fails if a specified path doesn't exist (only if using specific paths)

---

### Step 7: Run Validators

**Handler:** `confidentia.run_validators`
**Category:** Validation
**Icon:** ✅
**Required:** ✅ Yes
**Default Dependencies:** `step-6` (run validators after files are staged)

#### Purpose

Executes validation scripts to ensure the release meets quality standards. This catches issues before committing.

#### Execution Flow

1. Iterates through each validator script in `validators` array
2. Executes each validator script with Python
3. If `strict_mode: true`, passes `--strict` flag to validators
4. Collects output and error messages from each validator
5. If any validator fails, the step fails and stops execution
6. If all validators pass, the step succeeds

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `validators` | array | ✅ Yes | - | Array of validator script paths (relative to workspace root) |
| `strict_mode` | boolean | ❌ No | `true` | Whether to run validators in strict mode |

#### Configuration Example

```yaml
config:
  validators:
    - scripts/validation/validate_branch_context.py
    - scripts/validation/validate_changelog_format.py
  strict_mode: true
```

#### What Do These Validators Check?

1. **`validate_branch_context.py`:**
   - Current Git branch matches version schema (e.g., Epic 21 = `0.21.x.x`)
   - CHANGELOG entries match branch (no cross-epic contamination)
   - Version file matches branch schema
   - No forbidden files modified for this branch

2. **`validate_changelog_format.py`:**
   - Detailed changelog files have full timestamp format (`YYYY-MM-DD HH:MM:SS UTC`)
   - Required fields are present (Release Date, Epic, Story, Type, Summary)
   - Changelog format is valid

#### Strict Mode

When `strict_mode: true`:
- Validators receive `--strict` flag
- Any warning or error causes validator to fail
- Workflow stops if any validator fails

When `strict_mode: false`:
- Validators may issue warnings without failing
- Workflow continues even with warnings (use with caution)

#### Step Outputs

After execution, this step outputs:

```json
{
  "validators_run": 2
}
```

#### Error Handling

- **Validator script not found:** Step fails if a validator script doesn't exist
- **Validator execution failed:** Step fails if a validator returns non-zero exit code
- **Strict mode violation:** Step fails if any validator issues an error in strict mode

#### Example Validator Output

If validators pass:
```
✅ scripts/validation/validate_branch_context.py passed
✅ scripts/validation/validate_changelog_format.py passed
```

If a validator fails:
```
❌ scripts/validation/validate_branch_context.py failed
Error: Version 0.21.0.2 does not match branch schema for epic/21-workflow-platform
Expected: 0.21.x.x
Actual: 0.21.0.2
```

---

### Step 8: Commit Changes

**Handler:** `git.commit`
**Category:** Git
**Icon:** 💾
**Required:** ✅ Yes
**Default Dependencies:** `step-7` (commit only after validators pass)

#### Purpose

Creates a git commit with the version and summary in the commit message. This permanently records the release changes.

#### Execution Flow

1. Retrieves version from Step 1 output
2. Retrieves summary from workflow parameters
3. Builds commit message from `message_template`
4. Executes `git commit -m "<message>"`
5. Extracts commit hash from output (if available)

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `message_template` | string | ❌ No | `"{version} - {summary}"` | Commit message template |

#### Message Template Variables

The `message_template` supports variable substitution:
- `{version}` - Replaced with new version from Step 1 output
- `{summary}` - Replaced with release summary from workflow parameters

#### Configuration Example

```yaml
config:
  message_template: "{version} - {summary}"
```

**Example commit message:**
```
0.21.0.2 - 🐞 Fix: VWMP designer renders Release Workflow
```

**Custom template example:**
```yaml
config:
  message_template: "Release v{version}: {summary}"
```
**Result:**
```
Release v0.21.0.2: 🐞 Fix: VWMP designer renders Release Workflow
```

#### Data Sources

1. **Version:** From Step 1 output (`step-1.output.new_version`)
2. **Summary:** From workflow parameter `summary`

#### Step Outputs

After execution, this step outputs:

```json
{
  "commit_message": "0.21.0.2 - 🐞 Fix: VWMP designer renders Release Workflow",
  "commit_hash": "ac28a1e"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 1 output is not available
- **Git commit failed:** Step fails if `git commit` returns non-zero exit code
- **No changes to commit:** Step fails if there are no staged changes

---

### Step 9: Create Git Tag

**Handler:** `git.create_tag`
**Category:** Git
**Icon:** 🏷️
**Required:** ❌ No (optional step)
**Default Dependencies:** `step-8` (tag after commit)

#### Purpose

Creates an annotated git tag for the release. This provides a permanent reference point for the release version.

#### Execution Flow

1. Retrieves version from Step 1 output
2. Retrieves summary from workflow parameters
3. Builds tag name from `tag_template`
4. Builds tag message from `message_template`
5. Creates annotated tag (if `annotated: true`) or lightweight tag
6. Verifies tag was created successfully

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `tag_template` | string | ❌ No | `"v{version}"` | Tag name template |
| `message_template` | string | ❌ No | `"Release {tag}: {summary}"` | Tag message template |
| `annotated` | boolean | ❌ No | `true` | Whether to create an annotated tag |

#### Template Variables

**`tag_template` supports:**
- `{version}` - Replaced with new version from Step 1 output

**`message_template` supports:**
- `{tag}` - Replaced with tag name (e.g., `v0.21.0.2`)
- `{summary}` - Replaced with release summary from workflow parameters

#### Configuration Example

```yaml
config:
  tag_template: v{version}
  message_template: "Release {tag}: {summary}"
  annotated: true
```

**Example tag:**
- **Tag name:** `v0.21.0.2`
- **Tag message:** `Release v0.21.0.2: 🐞 Fix: VWMP designer renders Release Workflow`

#### Annotated vs Lightweight Tags

**Annotated tags** (`annotated: true`):
- Store additional metadata (author, date, message)
- Recommended for releases
- Can be signed with GPG
- Created with `git tag -a -m "<message>"`

**Lightweight tags** (`annotated: false`):
- Simple pointer to a commit
- No metadata
- Created with `git tag`

#### Data Sources

1. **Version:** From Step 1 output (`step-1.output.new_version`)
2. **Summary:** From workflow parameter `summary`

#### Step Outputs

After execution, this step outputs:

```json
{
  "tag_name": "v0.21.0.2",
  "tag_message": "Release v0.21.0.2: 🐞 Fix: VWMP designer renders Release Workflow"
}
```

#### Error Handling

- **Version not found:** Step fails if Step 1 output is not available
- **Git tag failed:** Step fails if `git tag` returns non-zero exit code
- **Tag already exists:** Step fails if tag with same name already exists

---

### Step 11: Push to Remote

**Handler:** `git.push`
**Category:** Git
**Icon:** 📤
**Required:** ❌ No (optional step)
**Default Dependencies:** `step-8`, `step-9` (push after commit and tag)

#### Purpose

Pushes the branch and tags to the remote repository. This makes the release available to others.

#### Execution Flow

1. Retrieves current Git branch name
2. Pushes branch to remote using `git push <remote> <branch>`
3. If `push_tags: true`, pushes tags using `git push <remote> --tags`
4. Verifies push was successful

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `push_tags` | boolean | ❌ No | `true` | Whether to push tags along with branch |
| `remote` | string | ❌ No | `origin` | Git remote name |

#### Configuration Example

```yaml
config:
  push_tags: true
  remote: origin
```

**Executed commands:**
```bash
git push origin epic/21-workflow-platform  # Push branch
git push origin --tags                      # Push tags (if push_tags: true)
```

#### Why Two Dependencies?

This step depends on both Step 9 (commit) and Step 10 (tag) because:
- **Step 9 dependency:** Ensures commit exists before pushing branch
- **Step 10 dependency:** Ensures tag exists before pushing tags (if `push_tags: true`)

**Note:** If Step 10 is skipped (tag not created), Step 11 will still execute (pushing branch only, skipping tag push).

#### Step Outputs

After execution, this step outputs:

```json
{
  "remote": "origin",
  "branch": "epic/21-workflow-platform",
  "tags_pushed": ["v0.21.0.2"]
}
```

#### Error Handling

- **Git push failed:** Step fails if `git push` returns non-zero exit code
- **Remote not accessible:** Step fails if remote repository is not accessible
- **Authentication failed:** Step fails if Git credentials are invalid

---

### Step 12: Post-Commit Verification & Reflection

**Handler:** `release.verification_reflection`
**Category:** PDCA (CHECK)
**Icon:** ✅
**Required:** ❌ No (optional but recommended)
**Default Dependencies:** `step-11` (verify after push)

#### Purpose

Implements the CHECK phase of the PDCA cycle. Verifies that changes worked as expected, evaluates against objectives from PLAN phase, and reflects on results.

#### Execution Flow

1. Retrieves objectives from PLAN phase (Step 3 changelog)
2. Verifies each objective was met
3. Documents verification results
4. Reflects on what worked and what didn't
5. Documents lessons learned

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `verification_prompt` | boolean | ❌ No | `true` | Whether to prompt for verification |
| `reflection_questions` | boolean | ❌ No | `true` | Whether to include reflection questions |
| `changelog_update` | boolean | ❌ No | `true` | Whether to update changelog with verification results |

#### Verification Methods

- **Test Suite Execution:** Automated tests pass
- **Manual Testing:** Documented manual test results
- **Documentation Review:** Review completeness and accuracy
- **Code Review:** Review code changes
- **Observation:** Observe behavior over time

#### Reflection Questions

1. Did the change work as expected?
2. Did it solve the problem?
3. Are there any side effects?
4. What did we learn?
5. What should be adjusted?

#### Step Outputs

After execution, this step outputs:

```json
{
  "verification_status": "verified",
  "verification_method": "test_suite",
  "verification_date": "2025-12-03 16:30:00 UTC",
  "objectives_met": true,
  "reflection_completed": true
}
```

#### Error Handling

- **Verification failed:** Step documents failure and creates follow-up task
- **Objectives not met:** Step documents which objectives were not met
- **Reflection incomplete:** Step prompts for completion

#### Integration with PDCA

- **PLAN Phase (Step 3):** Objectives and verification plan defined
- **CHECK Phase (Step 12):** Objectives verified, results evaluated
- **ACT Phase (Step 13):** Actions taken based on verification results

---

### Step 13: Act on Verification Results

**Handler:** `release.act_on_results`
**Category:** PDCA (ACT)
**Icon:** 🎯
**Required:** ❌ No (optional but recommended)
**Default Dependencies:** `step-12` (act after verification)

#### Purpose

Implements the ACT phase of the PDCA cycle. Acts on verification results by updating changelog, standardizing successful practices, and creating follow-up tasks if needed.

#### Execution Flow

1. Retrieves verification results from Step 12
2. Updates changelog based on verification status
3. Standardizes successful practices
4. Creates follow-up tasks if verification failed
5. Documents lessons learned and process improvements

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `changelog_update` | boolean | ❌ No | `true` | Whether to update changelog with verification results |
| `follow_up_tasks` | boolean | ❌ No | `true` | Whether to create follow-up tasks for failed verification |
| `process_improvement` | boolean | ❌ No | `true` | Whether to document process improvements |

#### Action Workflows

**Verified Fix:**
- Update changelog: "Attempted fix" → "Fixed"
- Standardize successful practices
- Document what worked

**Failed Fix:**
- Document failure in changelog
- Create follow-up task
- Document root causes and lessons learned

**Deferred Verification:**
- Document verification plan
- Schedule verification
- Create reminder task

#### Step Outputs

After execution, this step outputs:

```json
{
  "actions_taken": ["changelog_updated", "practices_standardized"],
  "follow_up_tasks": [],
  "process_improvements": ["added_verification_step"]
}
```

#### Error Handling

- **Changelog update failed:** Step documents error and continues
- **Follow-up task creation failed:** Step documents error and continues
- **Process improvement documentation failed:** Step documents error and continues

#### Integration with PDCA

- **CHECK Phase (Step 12):** Verification results provided
- **ACT Phase (Step 13):** Actions taken based on results
- **Next PLAN Phase:** Lessons learned inform next cycle

---

### Step 15: Check for PIR Trigger

**Handler:** `pir.check_trigger`
**Category:** Integration
**Icon:** 🔍
**Required:** ❌ No (optional but recommended)
**Blocking:** ❌ No (non-blocking - RW completes even if PIR trigger fails)
**Default Dependencies:** `step-12` (check after push to remote)

#### Purpose

Automatically triggers Post-Implementation Review (PIR) workflow when Epic or Story is marked COMPLETE. This step performs a deterministic check to detect COMPLETE status and conditionally triggers the PIR workflow.

#### Execution Flow

1. **Read Epic/Story Status:**
   - Determine current Epic/Story from version (RC.EPIC.STORY.TASK+BUILD)
   - Read Epic/Story document from Kanban structure
   - Extract status field

2. **Check COMPLETE Status:**
   - Verify status is "COMPLETE" or "COMPLETE ✅"
   - If not COMPLETE, skip PIR trigger

3. **Evaluate Review Level:**
   - **Epic-level:** If Epic is COMPLETE, always trigger PIR
   - **Story-level:** If Story is COMPLETE, evaluate significance first

4. **Story Significance Evaluation (Story-level only):**
   - Apply significance criteria from config
   - Determine if Story warrants PIR
   - If not significant, skip PIR trigger

5. **Trigger PIR Workflow:**
   - Invoke PIR workflow with context (Epic/Story ID, version)
   - Pass review level (epic/story)
   - PIR executes as separate workflow (non-blocking)

#### Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `epic_pir_always` | boolean | ❌ No | `true` | Always trigger PIR for completed Epics |
| `story_pir_significance_criteria` | array | ❌ No | `[...]` | Criteria for Story significance evaluation |
| `pir_workflow_path` | string | ❌ No | `packages/frameworks/workflow mgt/workflows/pir-workflow.yaml` | Path to PIR workflow YAML |
| `kanban_root` | string | ❌ No | `docs/project-management/kanban` | Root path to Kanban documents |
| `epic_doc_pattern` | string | ❌ No | `docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md` | Pattern for Epic document paths |
| `story_doc_pattern` | string | ❌ No | `docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md` | Pattern for Story document paths |

#### Deterministic Check Logic

**Epic-Level Check:**
```python
# Read Epic document
epic_doc = read_file(f"docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md")
status = extract_status(epic_doc)

# Check COMPLETE status
if status in ["COMPLETE", "COMPLETE ✅"]:
    trigger_pir(level="epic", epic=epic, version=version)
```

**Story-Level Check:**
```python
# Read Story document
story_doc = read_file(f"docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md")
status = extract_status(story_doc)

# Check COMPLETE status
if status in ["COMPLETE", "COMPLETE ✅"]:
    # Evaluate significance
    significance = evaluate_significance(story_doc, criteria)
    if significance in ["High", "Medium"]:  # Configurable
        trigger_pir(level="story", epic=epic, story=story, version=version)
```

#### Story Significance Criteria

**High Significance (Mandatory PIR):**
- Introduces new architectural patterns
- Affects multiple systems/components
- Includes significant technical debt/refactoring
- High business impact/user visibility
- Complex integration/migration work
- Duration > threshold (e.g., >2 weeks)
- Multiple dependencies/blockers

**Medium Significance (Optional PIR):**
- Introduces new tools/frameworks
- Documentation/process changes
- Moderate complexity/scope
- Cross-team coordination

**Low Significance (No PIR):**
- Simple bug fixes/minor enhancements
- Routine maintenance tasks
- Documentation-only changes
- Small, isolated features

#### Step Outputs

After execution, this step outputs:

```json
{
  "pir_triggered": true,
  "review_level": "epic",
  "epic": 2,
  "story": null,
  "version": "0.2.11.9+3",
  "significance": null,
  "pir_workflow_status": "triggered"
}
```

Or for Story-level:

```json
{
  "pir_triggered": true,
  "review_level": "story",
  "epic": 2,
  "story": 5,
  "version": "0.2.5.11+1",
  "significance": "High",
  "pir_workflow_status": "triggered"
}
```

Or if skipped:

```json
{
  "pir_triggered": false,
  "review_level": "story",
  "epic": 2,
  "story": 5,
  "version": "0.2.5.11+1",
  "significance": "Low",
  "skip_reason": "Story not significant enough for PIR"
}
```

#### Error Handling

- **Epic/Story document not found:** Log warning, skip PIR trigger
- **Status field missing:** Log warning, skip PIR trigger
- **PIR workflow invocation fails:** Log warning, RW continues (non-blocking)
- **Significance evaluation fails:** Default to Medium Significance, proceed with PIR

#### Integration Points

- **RW Step 12:** Depends on Push to Remote (Step 12) completion
- **PIR Workflow:** Triggers PIR workflow as separate execution
- **Kanban Documents:** Reads Epic/Story status from Kanban documents
- **Version Context:** Uses current version to identify Epic/Story

#### Non-Blocking Behavior

**Critical:** This step is **non-blocking**. If PIR trigger fails:
- RW workflow completes successfully
- Warning is logged
- PIR can be triggered manually later
- No impact on release process

---

## 📋 Workflow Parameters

The Release Workflow accepts the following parameters when executing:

### Parameter 1: Summary

**Type:** `string`
**Required:** ✅ Yes
**Label:** Release Summary
**Description:** Brief description of the release

**Example:**
```
🐞 Fix: VWMP designer renders Release Workflow
```

---

### Parameter 2: Change Type

**Type:** `enum`
**Required:** ✅ Yes
**Default:** `tooling`
**Label:** Release Type
**Description:** Type of release

**Options:**
| Value | Label | Emoji |
|-------|-------|-------|
| `feature` | Feature 🚀 | 🚀 |
| `fix` | Fix 🐞 | 🐞 |
| `infrastructure` | Infrastructure 🔧 | 🔧 |
| `security` | Security 🔒 | 🔒 |
| `cleanup` | Cleanup 🧹 | 🧹 |
| `refactor` | Refactor 🔄 | 🔄 |
| `documentation` | Documentation 📚 | 📚 |
| `tooling` | Tooling 🧰 | 🧰 |
| `maintenance` | Maintenance 🚧 | 🚧 |

**Usage:**
- Used in changelog entries for categorization
- Used in commit messages and tags
- Determines emoji in changelog and README updates

---

### Parameter 3: Detailed Changes

**Type:** `textarea`
**Required:** ❌ No
**Label:** Detailed Changes
**Description:** Optional detailed list of changes

**Example:**
```markdown
- Fixed React Flow component access from CDN
- Added server-side workflow data loading
- Converted WorkflowParameter objects to dictionaries for JSON serialization
- Fixed node labels to use strings instead of JSX objects
```

**Usage:**
- Included in detailed changelog file
- Provides context for users reviewing the release

---

### Parameter 4: Skip README

**Type:** `boolean`
**Required:** ❌ No
**Default:** `false`
**Label:** Skip README Update

**Usage:**
- If `true`, Step 4 (Update README) is skipped
- Useful if README.md is manually maintained or not needed

---

### Parameter 5: KB Docs OK

**Type:** `boolean`
**Required:** ✅ Yes
**Default:** `false`
**Label:** KB Documentation Updated
**Description:** Confirm all required KB documentation is updated

**Usage:**
- Safety check to ensure documentation is up to date before releasing
- Must be explicitly set to `true` to proceed
- Prevents accidental releases with outdated documentation

---

## 🔄 Execution Flow

### Dependency Graph

```
Step 1 (Branch Safety Check)
  └─→ Step 2 (Bump Version)
        ├─→ Step 3 (Create Detailed Changelog)
        │     └─→ Step 4 (Update Main Changelog)
        ├─→ Step 5 (Update README)
        ├─→ Step 6 (Auto-update Kanban Docs)
        └─→ Step 7 (Stage Files) ← depends on 2,3,4,5,6
              └─→ Step 8 (Run Validators)
                    └─→ Step 9 (Commit Changes)
                          ├─→ Step 10 (Create Git Tag)
                          └─→ Step 11 (Push to Remote) ← depends on 9,10
                                ├─→ Step 12 (Post-Commit Verification & Reflection)
                                │     └─→ Step 13 (Act on Verification Results)
                                │           └─→ Step 14 (Act on Verification Results)
                                └─→ Step 15 (Check for PIR Trigger) ← depends on 11
```

### Execution Phases

**Phase 1: Version & Documentation Updates** (Steps 1-6)
- Step 1: Branch Safety Check (first step)
- Step 2: Bump Version (depends on Step 1)
- Steps 3, 5, 6 run in parallel after Step 2 completes
- Step 4 runs after Step 3 completes

**Phase 2: Git Operations & Validation** (Steps 7-11)
- Step 7 waits for all Phase 1 steps to complete
- Steps 8, 9, 10, 11 run sequentially
- Step 11 waits for both Step 9 and Step 10

**Phase 3: PDCA CHECK & ACT** (Steps 12-14, optional but recommended)
- Step 12 runs after Step 11 completes
- Step 13 runs after Step 12 completes
- Step 14 runs after Step 13 completes
- Steps 12-14 are optional but recommended for continuous improvement

**Phase 4: PIR Integration** (Step 15, optional but recommended)
- Step 15 runs after Step 12 completes (Push to Remote)
- Checks for Epic/Story COMPLETE status
- Triggers PIR workflow if applicable
- Non-blocking (RW completes even if PIR trigger fails)

### Parallel Execution

Steps that can run in parallel (after dependencies are met):
- **Steps 3, 5, 6:** All depend on Step 2, but don't depend on each other
- **Steps 10, 11:** Step 11 depends on Step 9 (which doesn't depend on Step 10)

---

## 📚 Related Documentation

**Policy Documents (This workflow implements these policies):**
- **[Kanban Governance Policy](../../project-management/rituals/policy/kanban-governance-policy.md)** - Work item structure, task-level versioning, and release workflow requirements
- **[Versioning Strategy](../../Architecture/standards-and-adrs/versioning-strategy.md)** - Forensic traceability, canonical ordering, and timestamp requirements
- **[Versioning Policy (Schema)](../../Architecture/standards-and-adrs/versioning-policy.md)** - Version schema definition (RC.EPIC.STORY.TASK+BUILD)
- **[Cursor Rules](../../../../.cursorrules)** - Fundamental system rules that enforce all policies ⭐

**Workflow Documentation:**
- **[Tutorial: Building Release Workflow from Scratch](tutorial-release-workflow.md)** - Step-by-step tutorial
- **[Release Workflow Usage](release-workflow-usage.md)** - How to use the Release Workflow
- **[Release Workflow Agent Execution Guide](release-workflow-agent-execution.md)** - ⭐ **Canonical Example:** Step-by-step agent execution patterns
- **[Agent-Driven Workflow Execution](agent-driven-workflow-execution.md)** - General agent execution methodology
- **[Visual Designer Guide](visual-designer-guide.md)** - Using the visual designer
- **[Workflow Execution Guide](execution-guide.md)** - Running and monitoring workflows

---

**Last Updated:** 2025-12-05
**Reference Version:** 1.4.0
