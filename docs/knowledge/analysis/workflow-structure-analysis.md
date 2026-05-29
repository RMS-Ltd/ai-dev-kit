---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Structure Analysis

**Purpose:** Comprehensive workflow structure analysis across all projects to inform the "ultimate" canonical workflow structure  
**Analysis Date:** 2025-12-17  
**Status:** IN PROGRESS  
**Version:** 1.0.0

---

## Executive Summary

This document provides **detailed workflow structure analysis** of workflow patterns across all analyzed projects. Without this granular data, we cannot determine the "ultimate" canonical workflow structure.

**Key Questions Addressed:**
1. What workflow naming conventions exist across projects?
2. How are workflows organized (YAML files, scripts, embedded)?
3. What workflow structure details exist (steps, configuration, dependencies)?
4. What patterns emerge for workflow execution, integration, and customization?
5. What is the "ultimate" canonical workflow structure based on real-world usage?

---

## 1. Workflow File Naming Conventions

### 1.1 Workflow File Naming Patterns

**Pattern 1: YAML Workflow Files (Standard)**
- **Format:** `{workflow-name}-workflow.yaml` or `{workflow-name}.yaml`
- **Examples:**
  - `release-workflow.yaml` (most common)
  - `intake-workflow.yaml`
  - `testing-workflow.yaml`
  - `migration-workflow.yaml`
  - `refactor-workflow.yaml`
- **Projects Using:** ai-dev-kit, been-there, dev-toolkit, starborn_legacy, confidentia
- **Frequency:** Most common pattern
- **Location:** `workflows/` directory or `packages/frameworks/workflow mgt/workflows/`

**Pattern 2: Script-Based Workflows**
- **Format:** `{workflow-name}.py` or `{workflow-name}.sh`
- **Examples:**
  - `release_workflow.py`
  - `release_workflow.sh`
- **Projects Using:** starborn_legacy, confidentia (some workflows)
- **Frequency:** Less common, legacy pattern
- **Location:** `scripts/` directory

**Pattern 3: Embedded Workflows**
- **Format:** Workflow definitions embedded in `.cursorrules` or documentation
- **Examples:** RW trigger sections in `.cursorrules`
- **Projects Using:** All projects (RW trigger in `.cursorrules`)
- **Frequency:** Universal for RW trigger
- **Location:** `.cursorrules` file

### 1.2 Workflow File Organization

**Pattern 1: Framework Package Structure**
```
packages/frameworks/workflow mgt/workflows/
├── release-workflow.yaml
├── intake-workflow.yaml
├── testing-workflow.yaml
├── migration-workflow.yaml
└── refactor-workflow.yaml
```

**Projects Using:** ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules
**Frequency:** ADK framework pattern

**Pattern 2: Project Root Structure**
```
workflows/
├── release-workflow.yaml
└── kanban-review-workflow.yaml
```

**Projects Using:** starborn_legacy, confidentia (some branches)
**Frequency:** Project-specific pattern

**Pattern 3: Multi-Location Structure**
```
workflows/
├── release-workflow.yaml
└── workflows/
    ├── {uuid}-Kanban_Review_Workflow.yaml
    └── {uuid}-Release_Workflow.yaml
```

**Projects Using:** confidentia (branch 03)
**Frequency:** Complex pattern (1/9 projects)

### 1.3 Workflow Naming Summary

| Pattern | Projects Using | Frequency | Recommendation |
|---------|----------------|-----------|----------------|
| YAML files (`*-workflow.yaml`) | ai-dev-kit, been-there, dev-toolkit, starborn_legacy, confidentia | High (5/9) | ✅ Recommended |
| Script files (`*.py`, `*.sh`) | starborn_legacy, confidentia | Low (2/9) | ⚠️ Legacy pattern |
| Embedded in `.cursorrules` | All projects | Universal | ✅ Standard for triggers |

**Recommendation:** Use YAML files (`\{name\}-workflow.yaml`) in `workflows/` directory as canonical format.

---

## 2. Workflow YAML Structure Patterns

### 2.1 Standard YAML Structure

**Pattern 1: ADK Canonical Structure**
```yaml
name: Release Workflow
version: 2.1.0
type: release
description: Automated release workflow with PDCA integration

config:
  version_file: src/confidentia/version.py
  changelog_dir: docs/changelog-and-release-notes/changelog-archive
  main_changelog: CHANGELOG.md

steps:
  - id: step-1
    name: Branch Safety Check
    type: branch_safety_check
    handler: release.branch_safety_check
    required: true
    mandatory: true
    blocking: true
    dependencies: []
    config:
      use_validator: true
      strict_mode: true
```

**Projects Using:** ai-dev-kit, been-there, dev-toolkit
**Frequency:** ADK canonical pattern

**Required Fields:**
- `name`: Workflow name
- `version`: Workflow version
- `type`: Workflow type (release, intake, testing, etc.)
- `description`: Workflow description
- `config`: Workflow-level configuration
- `steps`: Array of workflow steps

**Step Required Fields:**
- `id`: Step identifier (`step-{number}`)
- `name`: Step name
- `type`: Step type
- `handler`: Handler function/script
- `required`: Boolean (required step)
- `dependencies`: Array of step dependencies

**Step Optional Fields:**
- `mandatory`: Boolean (mandatory blocking step)
- `blocking`: Boolean (blocks workflow if fails)
- `enabled`: Boolean (step enabled/disabled)
- `config`: Step-specific configuration

### 2.2 Workflow Type Patterns

**Common Workflow Types:**
- **`release`:** Release Workflow (RW) - version bump, changelog, commit, tag, push
- **`intake`:** Intake Workflow - FR/BR/UXR intake into Kanban
- **`testing`:** Testing Workflow - test execution, coverage, validation
- **`migration`:** Migration Workflow - data/structure migration
- **`refactor`:** Refactor Workflow - code refactoring automation
- **`package_version`:** Package Version Workflow (PVW) - package version bumping

**Projects Using:**
- **Release:** All projects (universal)
- **Intake:** ai-dev-kit, been-there, dev-toolkit
- **Testing:** ai-dev-kit, been-there, dev-toolkit
- **Migration:** ai-dev-kit, been-there, dev-toolkit
- **Refactor:** ai-dev-kit, been-there, dev-toolkit
- **Package Version:** ai-dev-kit (PVW)

### 2.3 Step Type Patterns

**Common Step Types:**
- **`branch_safety_check`:** Branch context validation
- **`version_bump`:** Version file update
- **`changelog_create`:** Detailed changelog creation
- **`changelog_update`:** Main changelog update
- **`readme_update`:** README version badge update
- **`kanban_update`:** Kanban documentation update
- **`git_stage`:** Git staging
- **`validation`:** Validation script execution
- **`git_commit`:** Git commit creation
- **`git_tag`:** Git tag creation
- **`git_push`:** Git push to remote
- **`document_load`:** Document loading/parsing
- **`decision_flow`:** Decision flow analysis
- **`kanban_task_creation`:** Kanban task creation

**Step Type Distribution:**
- **Git Operations:** `git_stage`, `git_commit`, `git_tag`, `git_push`
- **Versioning:** `version_bump`, `package_version`
- **Documentation:** `changelog_create`, `changelog_update`, `readme_update`, `kanban_update`
- **Validation:** `branch_safety_check`, `validation`
- **Intake:** `document_load`, `decision_flow`, `kanban_task_creation`

---

## 3. Workflow Step Patterns

### 3.1 Step Dependency Patterns

**Pattern 1: Sequential Dependencies**
```yaml
steps:
  - id: step-1
    dependencies: []
  - id: step-2
    dependencies: [step-1]
  - id: step-3
    dependencies: [step-2]
```

**Projects Using:** All projects
**Frequency:** Universal pattern

**Pattern 2: Parallel Dependencies**
```yaml
steps:
  - id: step-2
    dependencies: [step-1]
  - id: step-5
    dependencies: [step-2]
  - id: step-6
    dependencies: [step-2]
```

**Projects Using:** ai-dev-kit (RW Step 5 and 6 both depend on Step 2)
**Frequency:** Common pattern

**Pattern 3: Multiple Dependencies**
```yaml
steps:
  - id: step-4
    dependencies: [step-2, step-3]
```

**Projects Using:** ai-dev-kit (Intake Workflow)
**Frequency:** Less common pattern

### 3.2 Step Configuration Patterns

**Pattern 1: Config Variable Substitution**
```yaml
config:
  version_file: src/confidentia/version.py
steps:
  - id: step-2
    config:
      version_file: ${config.version_file}
```

**Projects Using:** ai-dev-kit, been-there, dev-toolkit
**Frequency:** ADK pattern

**Pattern 2: Direct Configuration**
```yaml
steps:
  - id: step-1
    config:
      version_file: lib/core/version.dart
```

**Projects Using:** starborn_legacy
**Frequency:** Project-specific pattern

**Pattern 3: Nested Configuration**
```yaml
steps:
  - id: step-2
    config:
      semantic_matching:
        enabled: true
        threshold: 0.7
        use_e4s08: true
```

**Projects Using:** ai-dev-kit (Intake Workflow)
**Frequency:** Complex workflow pattern

### 3.3 Step Mandatory/Blocking Patterns

**Pattern 1: Mandatory Blocking Steps**
```yaml
steps:
  - id: step-1
    mandatory: true
    blocking: true
    required: true
```

**Projects Using:** ai-dev-kit (RW Step 1: Branch Safety Check)
**Frequency:** Critical validation steps

**Pattern 2: Required Non-Blocking Steps**
```yaml
steps:
  - id: step-2
    required: true
    mandatory: false
    blocking: false
```

**Projects Using:** All projects (most steps)
**Frequency:** Standard pattern

**Pattern 3: Optional Steps**
```yaml
steps:
  - id: step-5
    required: false
    enabled: true
```

**Projects Using:** All projects (optional steps)
**Frequency:** Common pattern

---

## 4. Workflow Configuration Patterns

### 4.1 RW Config File Patterns

**Pattern 1: Standard RW Config (`rw-config.yaml`)**
```yaml
# RW Config - Generated by install_release_workflow.py
# Project: been-there

# Required keys (all modes)
version_file: src/fynd_deals/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md

# Kanban integration
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
kanban_board: _index.md

versioning_schema: RC.EPIC.STORY.TASK+BUILD

project_name: been-there
```

**Projects Using:** been-there, dev-toolkit
**Frequency:** ADK config pattern (2/9 projects)

**Required Fields:**
- `version_file`: Path to version file
- `main_changelog`: Path to main changelog
- `changelog_dir`: Path to changelog archive directory
- `scripts_path`: Path to validation scripts
- `readme_file`: Path to README file

**Optional Fields:**
- `use_kanban`: Boolean (enable Kanban integration)
- `kanban_root`: Path to Kanban root
- `epic_doc_pattern`: Epic document pattern
- `story_doc_pattern`: Story document pattern
- `kanban_board`: Kanban board file name
- `versioning_schema`: Version schema format
- `project_name`: Project name

**Pattern 2: Project-Specific Config**
```yaml
# RW Config - Generated by install_release_workflow.py
# Project: dev-toolkit

version_file: src/fynd_deals/version.py  # NOTE: Incorrect path (should be src/dev_toolkit/version.py)
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md

use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
kanban_board: _index.md

versioning_schema: RC.EPIC.STORY.TASK+BUILD

project_name: dev-toolkit
```

**Projects Using:** dev-toolkit (with path errors)
**Frequency:** Config-driven pattern (with issues)

**Pattern 3: No Config File**
- **Projects Using:** fynd.deals, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb
- **Frequency:** No config pattern (6/9 projects)
- **Rationale:** Paths hardcoded in `.cursorrules` or workflow YAML

### 4.2 Configuration Loading Patterns

**Pattern 1: Config-Driven Approach (Preferred)**
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
version_file = config['version_file'] if config and 'version_file' in config else 'src/fynd_deals/version.py'
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)

**Pattern 2: Hardcoded Paths**
```yaml
config:
  version_file: lib/core/version.dart
  changelog_dir: docs/changelog_archive
```

**Projects Using:** starborn_legacy, confidentia
**Frequency:** Project-specific pattern (2/9 projects)

**Pattern 3: Embedded in `.cursorrules`**
- Paths defined in `.cursorrules` RW trigger section
- **Projects Using:** fynd.deals, agentic-ide-rules
- **Frequency:** Pre-config pattern (2/9 projects)

---

## 5. Workflow Execution Patterns

### 5.1 Agent-Driven Execution Pattern

**Pattern: ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED**
```
1. ANALYZE
   ├─ Read step definition and requirements
   ├─ Understand step purpose and dependencies
   ├─ Gather context (project state, previous step outputs)
   └─ Identify what needs to be done

2. DETERMINE
   ├─ Determine specific actions required
   ├─ Calculate values (e.g., next version number)
   ├─ Validate prerequisites are met
   └─ Plan execution approach

3. EXECUTE
   ├─ Perform the required actions
   ├─ Update files, run commands, create resources
   └─ Capture results and outputs

4. VALIDATE
   ├─ Verify execution succeeded
   ├─ Check outputs match expectations
   ├─ Validate against requirements
   └─ Handle errors if validation fails

5. PROCEED
   ├─ Document what was done
   ├─ Pass outputs to next steps
   └─ Move to next step in workflow
```

**Projects Using:** All projects (universal for RW)
**Frequency:** Universal pattern
**Rationale:** Intelligent execution, context-aware, handles edge cases

### 5.2 Script-Based Execution Pattern

**Pattern: Deterministic Script Execution**
```bash
#!/bin/bash
# Deterministic release workflow script
python scripts/release_workflow.py
```

**Projects Using:** starborn_legacy (has script, but prefers agent-driven)
**Frequency:** Legacy pattern (rarely used)
**Rationale:** Deterministic, but limited flexibility

### 5.3 Hybrid Execution Pattern

**Pattern: Agent-Driven with Script Tools**
- Agent executes workflow intelligently
- Uses validation scripts as tools
- Scripts provide data/validation, not decisions

**Projects Using:** All projects (agent-driven RW uses validation scripts)
**Frequency:** Universal pattern
**Rationale:** Best of both worlds - intelligence + validation

---

## 6. Workflow Integration Patterns

### 6.1 RW Integration Patterns

**Pattern 1: RW Trigger in `.cursorrules`**
- User types "RW" → Agent executes Release Workflow
- Workflow defined in `.cursorrules` RW trigger section
- **Projects Using:** All projects (universal)
- **Frequency:** Universal pattern

**Pattern 2: RW Config Integration**
- RW loads `rw-config.yaml` for project-specific paths
- Config-driven approach for customization
- **Projects Using:** been-there, dev-toolkit, ai-dev-kit
- **Frequency:** ADK pattern (3/9 projects)

**Pattern 3: RW YAML Integration**
- RW workflow defined in YAML file
- `.cursorrules` references YAML file
- **Projects Using:** agentic-ide-rules (references config file)
- **Frequency:** Less common pattern

### 6.2 PVW Integration Patterns

**Pattern 1: PVW as RW Sub-Workflow**
- PVW executes as RW Step 2.5
- Triggered automatically during RW
- **Projects Using:** ai-dev-kit
- **Frequency:** ADK pattern (1/9 projects)

**Pattern 2: PVW Standalone Trigger**
- User types "PVW" → Agent executes Package Version Workflow
- Workflow defined in `.cursorrules` PVW trigger section
- **Projects Using:** ai-dev-kit
- **Frequency:** ADK pattern (1/9 projects)

### 6.3 Intake Workflow Integration

**Pattern 1: Intake as Standalone Workflow**
- Manual invocation: `python intake_workflow.py --fr FR-019.md`
- **Projects Using:** ai-dev-kit
- **Frequency:** ADK pattern (1/9 projects)

**Pattern 2: Intake as RW Sub-Workflow**
- RW detects FR/BR commit trigger
- RW triggers Intake Workflow automatically
- **Projects Using:** ai-dev-kit (planned)
- **Frequency:** Future pattern

---

## 7. Workflow Step Count Patterns

### 7.1 Release Workflow Step Counts

**Pattern 1: 10-Step RW**
- **Projects Using:** fynd.deals, starborn_legacy
- **Steps:** Version bump, changelog, Kanban update, README, stage, validators, commit, tag, push
- **Frequency:** Standard pattern (2/9 projects)

**Pattern 2: 11-Step RW**
- **Projects Using:** confidentia (branch 03)
- **Steps:** Consider work, bump version, update Kanban, update KB, update CL, update README, stage, validators, commit, tag, push
- **Frequency:** Custom pattern (1/9 projects)

**Pattern 3: 12-Step RW**
- **Projects Using:** been-there, dev-toolkit, ai-dev-kit
- **Steps:** Branch safety check, version bump, detailed changelog, main changelog, README, BR/FR docs, Kanban docs, stage, validators, commit, tag, push
- **Frequency:** ADK canonical pattern (3/9 projects)

**Pattern 4: 13-Step RW**
- **Projects Using:** agentic-ide-rules
- **Steps:** 12-step RW + PDCA verification + PDCA action items + summary
- **Frequency:** Extended pattern (1/9 projects)

**Pattern 5: 14-Step RW**
- **Projects Using:** ai-dev-kit (documented in `.cursorrules`)
- **Steps:** 12-step RW + optional steps (13-14)
- **Frequency:** Documented pattern (1/9 projects)

### 7.2 Step Count Summary

| Step Count | Projects Using | Frequency | Notes |
|------------|----------------|-----------|-------|
| 10 steps | fynd.deals, starborn_legacy | Medium (2/9) | Standard pattern |
| 11 steps | confidentia | Low (1/9) | Custom pattern |
| 12 steps | been-there, dev-toolkit, ai-dev-kit | High (3/9) | ADK canonical |
| 13 steps | agentic-ide-rules | Low (1/9) | Extended with PDCA |
| 14 steps | ai-dev-kit (documented) | Low (1/9) | Documented pattern |

**Recommendation:** Use 12-step RW as canonical (with optional steps 13-14).

---

## 8. Workflow Customization Patterns

### 8.1 Customization Methods

**Method 1: Config-Driven Customization**
- Use `rw-config.yaml` for project-specific paths
- Workflow structure remains standard
- **Projects Using:** been-there, dev-toolkit, ai-dev-kit
- **Frequency:** ADK pattern (3/9 projects)

**Method 2: YAML Customization**
- Edit workflow YAML file directly
- Customize steps, dependencies, configuration
- **Projects Using:** starborn_legacy, confidentia
- **Frequency:** Project-specific pattern (2/9 projects)

**Method 3: `.cursorrules` Customization**
- Customize RW trigger section in `.cursorrules`
- Modify step definitions, paths, logic
- **Projects Using:** fynd.deals, agentic-ide-rules
- **Frequency:** Pre-config pattern (2/9 projects)

### 8.2 Customization Examples

**Example 1: Custom Step Addition**
```yaml
steps:
  - id: step-11
    name: PDCA Verification
    type: pdca_verification
    handler: pdca.verify
    required: false
    dependencies: [step-10]
```

**Projects Using:** agentic-ide-rules (PDCA integration)
**Frequency:** Extension pattern

**Example 2: Custom Step Removal**
- Remove optional steps (e.g., README update, BR/FR docs)
- **Projects Using:** fynd.deals (10-step RW)
- **Frequency:** Simplification pattern

**Example 3: Custom Step Reordering**
- Reorder steps based on project needs
- **Projects Using:** confidentia (11-step RW with different order)
- **Frequency:** Customization pattern

---

## 9. Workflow Validation Patterns

### 9.1 Validation Step Patterns

**Pattern 1: Branch Safety Check (Step 1)**
```yaml
steps:
  - id: step-1
    name: Branch Safety Check
    type: branch_safety_check
    handler: release.branch_safety_check
    mandatory: true
    blocking: true
    config:
      use_validator: true
      strict_mode: true
```

**Projects Using:** been-there, dev-toolkit, ai-dev-kit
**Frequency:** ADK pattern (3/9 projects)
**Rationale:** Prevents cross-epic contamination

**Pattern 2: Validation Step (Later in Workflow)**
```yaml
steps:
  - id: step-8
    name: Run Validators
    type: validation
    handler: release.run_validators
    required: true
    config:
      validators:
        - validate_branch_context.py
        - validate_changelog_format.py
```

**Projects Using:** All projects
**Frequency:** Universal pattern

**Pattern 3: Pre-Commit Validation**
- Pre-commit hooks run validators automatically
- **Projects Using:** confidentia
- **Frequency:** Advanced pattern (1/9 projects)

### 9.2 Validation Script Patterns

**Common Validation Scripts:**
- `validate_branch_context.py` - Branch/version/epic alignment
- `validate_changelog_format.py` - Changelog format validation
- `validate_version_bump.py` - Version bump logic validation
- `validate_drift.py` - Framework drift detection

**Projects Using:**
- **Branch Context:** All projects (universal)
- **Changelog Format:** All projects (universal)
- **Version Bump:** ai-dev-kit, been-there, dev-toolkit
- **Drift Detection:** fynd.deals

---

## 10. Workflow Progress Tracking Patterns

### 10.1 TODO Tracking Patterns

**Pattern 1: Cursor TODO Tracking (Standard)**
```python
todo_write(merge=False, todos=[
    {'id': 'rw-step-1', 'status': 'pending', 'content': 'Step 1: Branch Safety Check'},
    {'id': 'rw-step-2', 'status': 'pending', 'content': 'Step 2: Bump Version'},
    # ... all steps
])
```

**Projects Using:** All projects (universal)
**Frequency:** Universal pattern
**Rationale:** User visibility, agent organization, error recovery

**Pattern 2: State Machine Pattern**
- Only one step `in_progress` at a time
- All others `pending`/`completed`/`cancelled`
- **Projects Using:** fynd.deals, ai-dev-kit
- **Frequency:** Advanced pattern (2/9 projects)

**Pattern 3: Atomicity Enforcement**
- RW must complete all steps or explicitly abort
- Cannot start new RW while previous RW TODOs exist
- **Projects Using:** All projects (universal)
- **Frequency:** Universal pattern

---

## 11. Recommendations for "Ultimate" Canonical Structure

### 11.1 Workflow File Structure

**Recommended: YAML Workflow Files**
- **Format:** `{workflow-name}-workflow.yaml`
- **Location:** `workflows/` directory (project root) or `packages/frameworks/workflow mgt/workflows/` (framework)
- **Structure:** Standard YAML with `name`, `version`, `type`, `description`, `config`, `steps`

### 11.2 Workflow YAML Structure

**Recommended: ADK Canonical Structure**
```yaml
name: [Workflow Name]
version: [Version]
type: [workflow_type]
description: [Description]

config:
  # Workflow-level configuration

steps:
  - id: step-{number}
    name: [Step Name]
    type: [step_type]
    handler: [handler_function]
    required: true
    mandatory: false  # true for blocking steps
    blocking: false  # true for blocking steps
    enabled: true
    dependencies: []
    config:
      # Step-specific configuration
```

### 11.3 Workflow Configuration

**Recommended: Config-Driven Approach**
- **Config File:** `rw-config.yaml` in project root
- **Required Fields:** `version_file`, `main_changelog`, `changelog_dir`, `scripts_path`, `readme_file`
- **Optional Fields:** `use_kanban`, `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`, `versioning_schema`, `project_name`

### 11.4 Workflow Execution

**Recommended: Agent-Driven Execution with Intelligence**
- **Pattern:** ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED
- **Agentic Intelligence:** Task-driven validation, knowledge gap analysis, documentation generation
- **Progress Tracking:** Cursor TODOs for all steps
- **Atomicity:** Complete all steps or explicitly abort
- **Intelligent Steps:**
  - Task-driven validation (blocks if no task)
  - Knowledge base gap analysis and article authoring
  - Context-aware decision-making throughout

### 11.5 Release Workflow Steps

**Recommended: 12-Step RW (Canonical)**
1. Branch Safety Check (mandatory, blocking)
2. Bump Version
3. Create Detailed Changelog
4. Update Main Changelog
5. Update README (optional)
6. Update BR/FR Docs (optional)
7. Auto-update Kanban Docs
8. Stage Files
9. Run Validators
10. Commit Changes
11. Create Git Tag
12. Push to Remote

**Optional Steps:**
13. PDCA Verification (optional)
14. Summary (optional)

---

## 12. Summary: "Ultimate" Canonical Workflow Structure

### 12.1 File Structure
- **Format:** `{workflow-name}-workflow.yaml`
- **Location:** `workflows/` directory

### 12.2 YAML Structure
- **Required Fields:** `name`, `version`, `type`, `description`, `config`, `steps`
- **Step Fields:** `id`, `name`, `type`, `handler`, `required`, `dependencies`, `config`
- **Optional Step Fields:** `mandatory`, `blocking`, `enabled`

### 12.3 Configuration
- **Config File:** `rw-config.yaml` (config-driven approach)
- **Required Config:** `version_file`, `main_changelog`, `changelog_dir`, `scripts_path`, `readme_file`

### 12.4 Execution
- **Pattern:** Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- **Progress Tracking:** Cursor TODOs
- **Atomicity:** Complete all steps or abort

### 12.5 Release Workflow
- **Step Count:** 12 steps (canonical) + 2 optional steps
- **Step 1:** Branch Safety Check (mandatory, blocking)
- **Steps 2-12:** Standard RW steps

---

**Analysis Completed:** 2025-12-17  
**Next Steps:** Use this analysis to finalize canonical workflow structure in ADK frameworks

