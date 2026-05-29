---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T01:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Ultimate Canonical Workflow Structure

**Purpose:** Definitive specification for the canonical workflow structure  
**Status:** COMPLETE  
**Version:** 1.1.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design  
**Supersedes:** All previous workflow structure specifications

**Based on:** Comprehensive meta-analysis of 10 projects (9 client implementations + ai-dev-kit source)

**Canonical Workflows:** 7 workflows documented (RW, Intake, PVW, PIR, Migration, Refactor, Testing)

---

## Executive Summary

This document **defines the ultimate canonical workflow structure** for ADK framework implementations. This is the **definitive specification** that all projects should adopt.

**The Ultimate Canonical Workflow Structure:**

```
{project-root}/
├── workflows/                       # Project workflows (canonical)
│   ├── release-workflow.yaml
│   ├── intake-workflow.yaml
│   ├── package-version-workflow.yaml
│   ├── pir-workflow.yaml
│   ├── migration-workflow.yaml
│   ├── refactor-workflow.yaml
│   └── testing-workflow.yaml
├── rw-config.yaml                   # Release Workflow configuration (canonical)
├── intake-config.yaml               # Intake Workflow configuration (optional)
└── packages/frameworks/workflow mgt/workflows/  # Framework workflows
    ├── release-workflow.yaml
    ├── intake-workflow.yaml
    ├── package-version-workflow.yaml
    ├── pir-workflow.yaml
    ├── migration-workflow.yaml
    ├── refactor-workflow.yaml
    └── testing-workflow.yaml
```

**Canonical Workflows:**
1. **Release Workflow (RW)** - 13-step release process with agentic intelligence
2. **Intake Workflow** - 7-step FR/BR/UXR intake into Kanban
3. **Package Version Workflow (PVW)** - Package version bumping
4. **Post-Implementation Review (PIR) Workflow** - PIR review process
5. **Migration Workflow** - Data/structure migration
6. **Refactor Workflow** - Code refactoring automation
7. **Testing Workflow** - Test execution and validation

**Key Specifications:**
- **Workflow File:** `{workflow-name}-workflow.yaml`
- **Release Workflow:** 13-step RW with mandatory branch safety check and agentic intelligence
- **Intake Workflow:** 7-step automated FR/BR/UXR intake with semantic matching
- **Configuration:** Workflow-specific config files (e.g., `rw-config.yaml`, `intake-config.yaml`)
- **Execution:** Agent-driven with intelligent decision-making (ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED)
- **Agentic Intelligence:** Task-driven validation, knowledge gap analysis, documentation generation, semantic matching
- **Progress Tracking:** Cursor TODO tracking

---

## 1. Workflow File Structure Specification

### 1.1 File Naming

**CANONICAL:** `{workflow-name}-workflow.yaml` (e.g., `release-workflow.yaml`)

**Examples:**
- `release-workflow.yaml`
- `package-version-workflow.yaml`

### 1.2 File Location

**CANONICAL:** `workflows/` directory in project root OR `packages/frameworks/workflow mgt/workflows/` (framework)

**Structure:**
```
{project-root}/
├── workflows/                       # Project workflows (canonical)
│   ├── release-workflow.yaml
│   └── package-version-workflow.yaml
├── packages/frameworks/workflow mgt/workflows/  # Framework workflows
│   ├── release-workflow.yaml
│   └── package-version-workflow.yaml
└── ...
```

---

## 2. Release Workflow (RW) Specification

### 2.1 Canonical 13-Step Release Workflow

**CANONICAL:** 13-step Release Workflow with agentic intelligence

**Step Structure:**
1. **🚨 MANDATORY BLOCKING: Branch Safety Check** - CRITICAL: Prevents cross-epic contamination
2. **🤖 AGENTIC: Task-Driven Validation** - CRITICAL: Validates work is task-driven, blocks if no task
3. **Bump Version** - Update version file
4. **Create Detailed Changelog** - Generate detailed changelog
5. **Update Main Changelog** - Add summary entry
6. **Update README** - Update version badge (optional)
7. **Update BR/FR Docs** - Document fix attempts (optional)
8. **Auto-update Kanban Docs** - Update Epic/Story/Task docs with version markers
9. **🤖 AGENTIC: Update Knowledge Base** - Update existing docs, evaluate gaps, author new articles
10. **Stage Files** - Stage all modified files
11. **Run Validators** - Execute branch context and changelog format validators
12. **Commit Changes** - Create git commit with versioned message
13. **Create Git Tag** - Create annotated tag
14. **Push to Remote** - Push branch and tags

### 2.2 Step 1: Branch Safety Check (MANDATORY BLOCKING)

**CANONICAL:** Mandatory, blocking branch safety check

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict
```

**Validation:**
- Current branch matches expected epic number
- Version matches branch context
- Task document exists (if applicable)

**Failure Handling:**
- **BLOCKING:** Workflow aborts if validation fails
- User must fix branch context before proceeding
- Clear error messages provided

### 2.3 Step 2: Task-Driven Validation (AGENTIC - MANDATORY BLOCKING)

**CANONICAL:** Agentic validation that work is task-driven

**Agentic Intelligence Required:**
- **ANALYZE:** Examine staged changes and current version
- **DETERMINE:** Identify if work corresponds to a Kanban task
- **VALIDATE:** Check if Task document exists for current version (E\{epic\}:S\{story\}:T\{task\})
- **DECIDE:** If no task exists → BLOCK workflow, provide feedback to user

**Implementation:**
```python
# Agent must:
1. Parse current version: VERSION_EPIC, VERSION_STORY, VERSION_TASK
2. Construct expected Task document path: docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md
3. Check if Task document exists
4. If NO TASK DOCUMENT:
   - BLOCK workflow execution
   - Provide clear feedback: "No Kanban task found for version {version}. Work must be task-driven."
   - Suggest: "Create task document or verify version matches existing task."
   - Abort workflow
5. If TASK DOCUMENT EXISTS:
   - Verify task status (should be IN PROGRESS or similar)
   - Proceed to Step 3
```

**Failure Handling:**
- **BLOCKING:** Workflow aborts if no task document found
- User must create task or correct version before proceeding
- Clear error messages with actionable guidance

### 2.4 Steps 3-8: Standard RW Steps

**Step 3: Bump Version**
- Load config from `rw-config.yaml`: `version_file`
- Increment `VERSION_BUILD`
- Update version comment

**Step 4: Create Detailed Changelog**
- Load config from `rw-config.yaml`: `changelog_dir`
- Generate: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.N.NNN.T+B.md`
- Include DO/CHECK/ACT phases

**Step 5: Update Main Changelog**
- Load config from `rw-config.yaml`: `main_changelog`
- Add summary entry to `CHANGELOG.md`
- Follow Keep a Changelog format

**Step 6: Update README**
- Load config from `rw-config.yaml`: `readme_file`
- Update version badge: `![Version](https://img.shields.io/badge/version-v0.N.NNN.T%2BB-blue.svg)`

**Step 7: Update BR/FR Docs**
- If BR/FR documents are linked, update them with fix attempts

**Step 8: Auto-update Kanban Docs**
- Load config from `rw-config.yaml`: `kanban_root`, `epic_doc_pattern`, `story_doc_pattern`, `task_doc_pattern`
- Update Epic document with version marker
- Update Story document with version marker
- Update Task document with version marker (decomposed Kanban structure)

**Step 9: Update Knowledge Base (AGENTIC)**
- **ANALYZE:** Examine changes made in this release
- **DETERMINE:** Identify which knowledge base documents may need updates
- **EVALUATE:** Agent evaluates if documentation gaps exist
- **DECIDE:** Should we create new documentation?
- **AUTHOR:** If gap identified, agent can author new knowledge base article(s)

**Agentic Intelligence Required:**
```python
# Agent must:
1. Analyze staged changes and changelog content
2. Identify knowledge base areas affected:
   - Architecture docs (if structural changes)
   - Analysis docs (if patterns discovered)
   - Use cases (if new patterns emerged)
   - Reviews (if applicable)
3. Check for existing knowledge base docs that reference changed areas
4. Update pre-existing knowledge base docs with new information
5. EVALUATE documentation gaps:
   - Is there a pattern/insight that should be documented?
   - Would a knowledge base article be valuable?
   - Can the agent author a new article?
6. If gap identified and agent can author:
   - Create new knowledge base article in appropriate location
   - Follow canonical knowledge base structure
   - Include proper frontmatter and metadata
7. If gap identified but agent cannot author:
   - Flag for user review
   - Suggest article topic and location
```

**Step 10: Stage Files**
- Execute: `git add -A`
- Stage all modified files (including any new knowledge base articles)

**Step 11: Run Validators**
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict`
- Execute: `python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Step 12: Commit Changes**
- Execute: `git commit -m "Release v0.N.NNN.T+B: \{description\}"`

**Step 13: Create Git Tag**
- Execute: `git tag -a "v0.N.NNN.T+B" -m "Release v0.N.NNN.T+B: \{description\}"`

**Step 14: Push to Remote**
- Execute: `git push origin {branch} --tags`

---

## 3. Configuration Specification

### 3.1 Config File

**CANONICAL:** `rw-config.yaml` in project root

**Location:** `{project-root}/rw-config.yaml`

### 3.2 Config Structure

**CANONICAL FORMAT:**

```yaml
version_file: src/{project}/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelog-and-release-notes/changelog-archive
scripts_path: packages/frameworks/workflow mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story}-*.md
task_doc_pattern: epics/Epic-{epic}/Story-{story}-*/Task-{task}-*.md
knowledge_base_root: docs/knowledge
```

**Required Config:**
- `version_file`: Path to version file
- `main_changelog`: Path to main changelog
- `changelog_dir`: Path to changelog archive directory
- `scripts_path`: Path to workflow scripts

**Optional Config:**
- `readme_file`: Path to README file
- `use_kanban`: Whether to update Kanban docs
- `kanban_root`: Path to Kanban root
- `epic_doc_pattern`: Epic document pattern
- `story_doc_pattern`: Story document pattern
- `task_doc_pattern`: Task document pattern (required if use_kanban: true)
- `knowledge_base_root`: Path to knowledge base root

---

## 4. Execution Pattern Specification

### 4.1 Agent-Driven Execution with Intelligence

**CANONICAL:** ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED

**Execution Flow:**
1. **ANALYZE:** Analyze current state, requirements, and context
2. **DETERMINE:** Determine actions needed based on analysis
3. **EVALUATE:** Evaluate options, gaps, and opportunities (agentic intelligence)
4. **DECIDE:** Make intelligent decisions (e.g., task validation, documentation gaps)
5. **EXECUTE:** Execute actions with user approval
6. **VALIDATE:** Validate results
7. **PROCEED:** Proceed to next step or abort

**Agentic Intelligence Points:**
- **Step 2:** Task-driven validation (must have Kanban task)
- **Step 9:** Knowledge base gap analysis and article authoring
- **Throughout:** Intelligent decision-making based on context

### 4.2 Progress Tracking

**CANONICAL:** Cursor TODO tracking

**Format:**
```markdown
- [x] Step 1: Branch Safety Check - completed
- [x] Step 2: Bump Version - completed
- [ ] Step 3: Create Detailed Changelog - in_progress
- [ ] Step 4: Update Main Changelog - pending
```

### 4.3 Atomicity

**CANONICAL:** Complete all steps or abort

**Requirement:**
- All steps must complete successfully
- Abort on any step failure
- Rollback on failure (if applicable)
- Clear error messages

---

## 5. Validation Specification

### 5.1 Branch Context Validation

**CANONICAL:** `validate_branch_context.py --strict`

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py --strict
```

**Validation:**
- Current branch matches expected epic number
- Version matches branch context
- Task document exists (if applicable)

### 5.2 Task-Driven Validation (Agentic)

**CANONICAL:** Agent validates work is task-driven before proceeding

**Implementation:**
- Agent analyzes current version (E\{epic\}:S\{story\}:T\{task\})
- Agent constructs expected Task document path using `task_doc_pattern`
- Agent checks if Task document exists
- If no task: BLOCK workflow, provide feedback
- If task exists: Proceed to version bump

**Validation:**
- Task document must exist for current version
- Task must be in appropriate status (IN PROGRESS, etc.)
- Work must be traceable to Kanban task

### 5.3 Changelog Format Validation

**CANONICAL:** `validate_changelog_format.py`

**Implementation:**
```bash
python packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py
```

**Validation:**
- Changelog format matches Keep a Changelog standard
- Version ordering (newest first)
- Entry format correctness

---

## 6. Workflow YAML Structure Specification

### 6.1 YAML Format

**CANONICAL FORMAT:**

```yaml
workflow:
  name: release-workflow
  description: Canonical 12-step Release Workflow
  steps:
    - step: 1
      name: Branch Safety Check
      handler: validate_branch_context
      blocking: true
      mandatory: true
    - step: 2
      name: Task-Driven Validation
      handler: validate_task_driven
      blocking: true
      mandatory: true
      agentic: true
    - step: 3
      name: Bump Version
      handler: bump_version
      blocking: true
      mandatory: true
    # ... additional steps
    - step: 9
      name: Update Knowledge Base
      handler: update_knowledge_base
      blocking: false
      mandatory: false
      agentic: true
```

**Required Fields:**
- `step`: Step number
- `name`: Step name
- `handler`: Handler function/script
- `blocking`: Whether step blocks workflow
- `mandatory`: Whether step is mandatory

**Optional Fields:**
- `agentic`: Whether step requires agentic intelligence (default: false)

---

## 7. Canonical Workflows Inventory

### 7.1 Release Workflow (RW)

**Purpose:** Automated release process with version bumping, changelog generation, and Git operations  
**Type:** `release`  
**Steps:** 13 steps (with agentic intelligence)  
**Trigger:** User types "RW" or "Release Workflow"  
**Config:** `rw-config.yaml`

**Key Features:**
- Task-driven validation (MANDATORY BLOCKING)
- Knowledge base gap analysis
- Decomposed Kanban structure support (Epic/Story/Task)

**See Section 2 for complete specification.**

---

### 7.2 Intake Workflow

**Purpose:** Automated FR/BR/UXR intake into Kanban system  
**Type:** `intake`  
**Steps:** 7 steps  
**Trigger:** User types "Intake" or FR/BR/UXR commit detected  
**Config:** `intake-config.yaml` (optional, can use defaults)

**Canonical 7-Step Intake Workflow:**

1. **Load & Parse FR/BR/UXR Document** - Load and parse FR/BR/UXR document
2. **Decision Flow Analysis (AGENTIC)** - Analyze and determine Epic/Story/Task assignment
3. **Create/Update Kanban Tasks** - Create or update Kanban tasks
4. **Update FR/BR/UXR Documentation** - Update intake documentation with status
5. **Wire Dependencies** - Wire dependencies and references
6. **Assign Version Marker** - Assign version marker (doc-init build +0)
7. **Validate & Commit** - Validate intake and commit changes

**Agentic Intelligence:**
- **Step 2:** Semantic matching for Epic/Story assignment (uses E4:S08 intelligent epic matching)
- **Step 3:** Agentic task creation (uses E4:S10 agentic task creation)
- **Step 5:** Intelligent dependency wiring

**Configuration:**
```yaml
fr_br_dir: docs/project-management/kanban/fr-br
kanban_dir: docs/project-management/kanban/epics
version_file: src/{project}/version.py
semantic_matching:
  enabled: true
  threshold: 0.7
  use_e4s08: true
task_creation:
  use_e4s10: true
  template_path: packages/frameworks/kanban/templates
```

---

### 7.3 Package Version Workflow (PVW)

**Purpose:** Intelligent package version bumping  
**Type:** `package_version`  
**Steps:** 6 steps  
**Trigger:** User types "PVW" or triggered by RW Step 2.5  
**Config:** Package-specific config

**Canonical 6-Step PVW:**

1. **Detect Changed Packages** - Analyze git diff to identify changed packages
2. **Analyze Package Changes** - Read package files, identify what changed
3. **Determine Version Bumps (AGENTIC)** - Analyze changes against criteria, determine bump type intelligently
4. **Execute Version Updates** - Update README, create changelog, document justification
5. **Validate Updates** - Run validation scripts as tools, verify format/consistency
6. **Document & Proceed** - Document changes, pass to RW Step 3

**Agentic Intelligence:**
- **Step 3:** Intelligent version bump determination (not deterministic)
- Uses version bump criteria as guidance, not hard rules
- Documents reasoning and justification

---

### 7.4 Post-Implementation Review (PIR) Workflow

**Purpose:** Automated PIR review process  
**Type:** `pir`  
**Steps:** Variable (Epic-level and Story-level PIRs)  
**Trigger:** User types "PIR" or completion milestone  
**Config:** PIR-specific config

**PIR Types:**
- **Epic-Level PIR:** Review entire epic completion
- **Story-Level PIR:** Review story completion

**Common Steps:**
1. **Load Epic/Story Context** - Load Epic or Story document
2. **Analyze Completion Status** - Analyze task completion and deliverables
3. **Generate PIR Report** - Generate PIR report using template
4. **Review & Validate** - Review findings and validate
5. **Update Documentation** - Update Epic/Story with PIR findings
6. **Archive PIR** - Archive PIR to knowledge base

---

### 7.5 Migration Workflow

**Purpose:** Data/structure migration automation  
**Type:** `migration`  
**Steps:** Variable (migration-specific)  
**Trigger:** User types "Migration" or migration milestone  
**Config:** Migration-specific config

**Common Steps:**
1. **Analyze Source State** - Analyze current state
2. **Plan Migration Strategy** - Plan migration approach
3. **Execute Migration Steps** - Execute migration
4. **Validate Migration** - Validate migration results
5. **Rollback Plan** - Prepare rollback if needed

---

### 7.6 Refactor Workflow

**Purpose:** Code refactoring automation  
**Type:** `refactor`  
**Steps:** Variable (refactor-specific)  
**Trigger:** User types "Refactor" or refactor milestone  
**Config:** Refactor-specific config

**Common Steps:**
1. **Analyze Current Code** - Analyze code to refactor
2. **Plan Refactoring** - Plan refactoring approach
3. **Execute Refactoring** - Execute refactoring changes
4. **Validate Changes** - Validate refactored code
5. **Update Documentation** - Update documentation

---

### 7.7 Testing Workflow

**Purpose:** Test execution and validation  
**Type:** `testing`  
**Steps:** Variable (test-specific)  
**Trigger:** User types "Test" or test milestone  
**Config:** Test-specific config

**Common Steps:**
1. **Analyze Test Requirements** - Analyze what to test
2. **Prepare Test Environment** - Set up test environment
3. **Execute Tests** - Run test suite
4. **Validate Results** - Validate test results
5. **Report Findings** - Generate test report

---

## 8. Complete Structure Example

**CANONICAL STRUCTURE:**

```
{project-root}/
├── workflows/                       # Project workflows (canonical)
│   ├── release-workflow.yaml
│   ├── intake-workflow.yaml
│   ├── package-version-workflow.yaml
│   ├── pir-workflow.yaml
│   ├── migration-workflow.yaml
│   ├── refactor-workflow.yaml
│   └── testing-workflow.yaml
├── rw-config.yaml                   # Release Workflow config
├── intake-config.yaml               # Intake Workflow config (optional)
├── packages/frameworks/workflow mgt/
│   └── workflows/                  # Framework workflows
│       ├── release-workflow.yaml
│       ├── intake-workflow.yaml
│       ├── package-version-workflow.yaml
│       ├── pir-workflow.yaml
│       ├── migration-workflow.yaml
│       ├── refactor-workflow.yaml
│       └── testing-workflow.yaml
└── ...
```

---

## 9. Validation Rules

### 9.1 Workflow File Validation

**Required:**
- Workflow file naming: `{workflow-name}-workflow.yaml`
- Workflow file location: `workflows/` or framework location
- YAML structure is valid
- Step definitions are complete

### 9.2 Execution Validation

**Required:**
- Branch safety check passes (Step 1)
- Task-driven validation passes (Step 2) - CRITICAL: Work must be task-driven
- All mandatory steps complete successfully
- Validators pass (Step 11)
- No blocking errors
- Knowledge base updates complete (Step 9)

---

## 10. Implementation

### 10.1 Installation

**CANONICAL METHOD:** Create workflow files and config following this specification

**Installation Steps:**
1. Create `workflows/` directory in project root
2. Install canonical workflows:
   - `release-workflow.yaml` (required)
   - `intake-workflow.yaml` (recommended)
   - `package-version-workflow.yaml` (if using packages)
   - Other workflows as needed
3. Create workflow config files:
   - `rw-config.yaml` (required for RW)
   - `intake-config.yaml` (optional, can use defaults)
4. Configure workflow handlers and scripts

### 9.2 Execution

**CANONICAL METHOD:** Agent-driven execution via `.cursorrules` RW trigger

**Execution Process (All Workflows):**

**Release Workflow (RW):**
1. User types "RW" or "Release Workflow"
2. Agent analyzes current state and context
3. Agent validates branch safety (Step 1)
4. **Agent validates task-driven work (Step 2)** - CRITICAL: Blocks if no task
5. Agent determines actions needed for each step
6. Agent executes steps with user approval
7. **Agent evaluates knowledge base gaps (Step 9)** - Can author new articles
8. Agent validates results
9. Agent proceeds to next step or aborts

**Intake Workflow:**
1. User types "Intake" or FR/BR/UXR commit detected
2. Agent loads and parses FR/BR/UXR document
3. **Agent performs decision flow analysis (Step 2)** - Semantic matching for Epic/Story
4. Agent creates/updates Kanban tasks
5. Agent updates FR/BR/UXR documentation
6. Agent wires dependencies
7. Agent assigns version marker
8. Agent validates and commits

**Package Version Workflow (PVW):**
1. User types "PVW" or triggered by RW
2. Agent detects changed packages
3. Agent analyzes package changes
4. **Agent determines version bumps intelligently (Step 3)** - Not deterministic
5. Agent executes version updates
6. Agent validates and documents

**Other Workflows:**
- Follow similar agent-driven execution pattern
- Use ANALYZE → DETERMINE → EVALUATE → DECIDE → EXECUTE → VALIDATE → PROCEED

**Agentic Intelligence Highlights:**
- **RW Step 2:** Must validate work is task-driven before proceeding
- **RW Step 9:** Evaluates documentation gaps and can author new knowledge base articles
- **Intake Step 2:** Semantic matching for Epic/Story assignment
- **Intake Step 3:** Agentic task creation
- **PVW Step 3:** Intelligent version bump determination
- **Throughout:** Intelligent decision-making based on context and analysis

---

---

## 11. Workflow Summary Table

| Workflow | Type | Steps | Agentic Steps | Config File | Trigger |
|----------|------|-------|---------------|-------------|---------|
| **Release Workflow (RW)** | `release` | 13 | Step 2, Step 9 | `rw-config.yaml` | "RW" or "Release Workflow" |
| **Intake Workflow** | `intake` | 7 | Step 2, Step 3 | `intake-config.yaml` (optional) | "Intake" or FR/BR/UXR commit |
| **Package Version Workflow (PVW)** | `package_version` | 6 | Step 3 | Package config | "PVW" or RW Step 2.5 |
| **PIR Workflow** | `pir` | Variable | Step 2 | PIR config | "PIR" or milestone |
| **Migration Workflow** | `migration` | Variable | Step 2 | Migration config | "Migration" or milestone |
| **Refactor Workflow** | `refactor` | Variable | Step 2 | Refactor config | "Refactor" or milestone |
| **Testing Workflow** | `testing` | Variable | Step 1 | Test config | "Test" or milestone |

**Legend:**
- **Agentic Steps:** Steps requiring agentic intelligence (not deterministic)
- **Config File:** Configuration file for workflow (required or optional)
- **Trigger:** How workflow is invoked

---

**Last Updated:** 2025-12-18  
**Version:** 1.1.0  
**Status:** COMPLETE
