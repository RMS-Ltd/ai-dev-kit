---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Workflow Management Framework

**Version:** 2.3.0  
**Last Updated:** 2026-04-13  
**Purpose:** Complete workflow management framework with **11** YAML-defined workflows (see registry below), documentation standards, and automated validation  
**Key Features:** **11** registry workflows with full READMEs, standardized templates, style guide, validation tools, and automated quality assurance; agent methodology guides (`KB`/`vwmp`) are separate from registry rows

**📦 Dependency Architecture (Epic 6):** This framework is transitioning from copy-paste to **dependency-based installation** with automatic updates. See [Framework Dependency Architecture](../../../docs/architecture/standards-and-adrs/framework-dependency-architecture.md) for details on installing as a Git submodule, via CLI tool, or package manager.

**Canonical workflow list:** The authoritative machine-readable set is [`workflows/workflow-registry.yaml`](workflows/workflow-registry.yaml) — **11** entries under `workflows:`. Agent execution guides under `KB/Documentation/Developer_Docs/vwmp/` describe methodology and step counts; they are not additional registry workflows.

**RW trigger dual-source (maintainers):** The repo root [`.cursorrules`](../../../.cursorrules) and the portable excerpt [`cursorrules-rw-trigger-section.md`](cursorrules-rw-trigger-section.md) must stay aligned on **FR-060 / FR-038 / BR-056** guardrails. See [RW trigger dual-source parity](docs/rw-trigger-dual-source-parity.md) for the checklist and merge order.

**Optional ECC harness layer (FR-098):** ADK may coexist with upstream [ECC](https://github.com/affaan-m/ECC) (MIT). Normative spec: [ecc-adk-harness-layer-integration-specification.md](../../../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md). Bridge template: [`config/ecc-adk-bridge.yaml.template`](config/ecc-adk-bridge.yaml.template). Phase 0 evaluation: [ecc-adk-harness-layer-phase0-evaluation.md](../../../docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md).

**Consumers (vendored copy of this folder):** Configure `rw-config.yaml` paths for **your** tree and run RW validators from **`scripts_path`** — see [RW validators and consumer layout](docs/rw-validators-consumer-layout.md).

---

## 📋 What's Included

This package contains a comprehensive workflow management framework with **11** YAML-defined workflows (per [`workflow-registry.yaml`](workflows/workflow-registry.yaml)), standardized templates, and automated validation tools. The framework enables AI assistants to execute various workflows using intelligent agent-driven execution with support for multiple workflow types:

### Core Workflows (4)
- **Testing Workflow (TESTING)** - Quality assurance and coverage analysis
- **Refactor Workflow (REFACTOR)** - Code refactoring with validation
- **Migration Workflow (MIGRATION)** - Data/code migration with rollback support
- **Release Workflow (RW)** - Release management and deployment

### Management Workflows (3)
- **Changelog Management Workflow (CMW)** - Documentation maintenance
- **Update Kanban Workflow (UKW)** - Project tracking and status management
- **Post-Implementation Review (PIR)** - Implementation evaluation

### Specialized Workflows (4)
- **Intake Workflow** - FR/BR/UXR automation and processing
- **Package Version Workflow (PKG-VERSION)** - Version management and updates
- **Framework Health Monitoring Workflow (FHM)** - System health monitoring
- **Implementation Cycle Workflow (ICW)** - Structured implementation process

_Documentation quality_ (templates, style guide, per-workflow READMEs) is governed by the [Workflow Documentation Style Guide](docs/workflow-documentation-style-guide.md) and the **Documentation Standards** subsection later in this README; there is no separate “Documentation Workflow” in the registry.

### Core Methodology Documents
- `docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md` - General methodology for agent-driven workflow execution
- `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - Step-by-step guide for executing the 13-step Release Workflow
- `docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md` - Complete workflow reference
- `docs/documentation/Developer_Docs/vwmp/portable-workflow-implementation-guide.md` - Detailed implementation guide
- `docs/documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md` - Step-by-step guide for executing the 7-step Intake Workflow (FR/BR/UXR automation)
- `docs/documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` - Step-by-step guide for executing the 8-step Update Kanban Workflow (UKW - kanban sync)

### Versioning Policy Documents
- `docs/architecture/standards-and-adrs/versioning-policy.md` - Version schema definition (RC.EPIC.STORY.TASK+BUILD)
- `docs/architecture/standards-and-adrs/versioning-strategy.md` - Complete versioning strategy with forensic traceability

### 🚀 Workflow Overview

The AI Dev Kit workflow management framework provides **11** YAML-defined workflows (see [`workflows/workflow-registry.yaml`](workflows/workflow-registry.yaml)) for systematic development operations. Each registry workflow follows consistent documentation standards and includes comprehensive usage instructions.

#### 📋 Available Workflows

| Workflow | Abbreviation | Purpose | Documentation |
|-----------|--------------|---------|----------------|
| **Release Workflow** | RW | Complete release process with version management | [README](workflows/release-workflow/README.md) |
| **Implementation Cycle Workflow** | ICW | Structured three-phase implementation workflow | [README](workflows/implementation-cycle-workflow/README.md) |
| **Changelog Management Workflow** | CMW | Manage changelog size and organization | [README](workflows/changelog-management-workflow/README.md) |
| **Update Kanban Workflow** | UKW | Update Kanban board documentation | [README](workflows/update-kanban-workflow/README.md) |
| **Post-Implementation Review** | PIR | Review implementation after release | [README](workflows/post-implementation-review/README.md) |
| **Intake Workflow** | INTAKE | FR/BR/UXR automation and intake process | [README](workflows/intake-workflow/README.md) |
| **Migration Workflow** | MIGRATION | Migration and data transfer tasks | [README](workflows/migration-workflow/README.md) |
| **Refactor Workflow** | REFACTOR | Code refactoring and improvement tasks | [README](workflows/refactor-workflow/README.md) |
| **Testing Workflow** | TESTING | Testing and quality assurance tasks | [README](workflows/testing-workflow/README.md) |
| **Package Version Workflow** | PKG-VERSION | Package version management and updates | [README](workflows/package-version-workflow/README.md) |
| **Framework Health Monitoring** | FHM | Framework health monitoring and maintenance | [README](workflows/framework-health-monitoring-workflow/README.md) |

#### 🎯 Quick Workflow Selection

- **For Releases**: Use **Release Workflow (RW)** for version management and distribution
- **For Implementation**: Use **Implementation Cycle Workflow (ICW)** for structured development
- **For Kanban Updates**: Use **Update Kanban Workflow (UKW)** for board synchronization
- **For Quality**: Use **Testing Workflow (TESTING)** for comprehensive testing
- **For Maintenance**: Use **Changelog Management (CMW)** for documentation upkeep

#### 📚 Documentation Standards

All workflows follow the **AI Dev Kit Documentation Standards** with:
- ✅ **Comprehensive README files** with consistent structure
- ✅ **Usage examples** and troubleshooting guides
- ✅ **Configuration documentation** with YAML examples
- ✅ **Integration guidance** and best practices
- ✅ **Automated validation** and quality assurance

For detailed documentation standards, see: [Workflow Documentation Style Guide](docs/workflow-documentation-style-guide.md)

### Workflow Definitions
- `workflows/release-workflow/release-workflow.yaml` - YAML definition of the Release Workflow structure
- `workflows/intake-workflow/intake-workflow.yaml` - YAML definition of the Intake Workflow structure (FR/BR/UXR automation)
- `workflows/update-kanban-workflow/update-kanban-workflow.yaml` - YAML definition of the Update Kanban Workflow structure (UKW - kanban sync)
- `workflows/changelog-management-workflow/changelog-management-workflow.yaml` - YAML definition of the Changelog Management Workflow structure (CMW - changelog maintenance and archival)
- `workflows/post-implementation-review/pir-workflow.yaml` - YAML definition of the Post-Implementation Review structure (PIR)
- `workflows/migration-workflow/migration-workflow.yaml` - YAML definition of the Migration Workflow structure
- `workflows/refactor-workflow/refactor-workflow.yaml` - YAML definition of the Refactor Workflow structure
- `workflows/testing-workflow/testing-workflow.yaml` - YAML definition of the Testing Workflow structure
- `workflows/implementation-cycle-workflow/icw-workflow.yaml` - YAML definition of the Implementation Cycle Workflow structure (ICW - systematic implementation workflow)
- `workflows/package-version-workflow/package-version-workflow.yaml` - YAML definition of the Package Version Workflow structure
- `workflows/framework-health-monitoring-workflow/framework-health-monitoring-workflow.yaml` - YAML definition of the Framework Health Monitoring Workflow structure
- `workflows/workflow-registry.yaml` - Registry of all workflows with metadata

### Optional GitHub Actions Workflows (Private Repos)
- `templates/github-actions/update-badges-byob.yml` - BYOB badge workflow template for private repositories
- `templates/github-actions/README.md` - Documentation for optional GitHub Actions workflows

### Validation Scripts
- `scripts/validation/validate_branch_context.py` - Validates branch/version/epic alignment (supports multi-digit epics)
- `scripts/validation/validate_changelog_format.py` - Validates changelog format (supports both old and new format)
- `scripts/validation/validate_version_bump.py` - Validates version bump logic (new task, same task, out-of-order)
- `scripts/validation/check_changelog_size.py` - Checks changelog size and triggers CMW if threshold exceeded

### Changelog Management Scripts
- `scripts/changelog/cmw.py` - Main CMW script (deterministic changelog maintenance workflow)
- `scripts/changelog/analyze_changelog_state.py` - Analyzes changelog state (size, entry count, ordering, duplicates)
- `scripts/changelog/check_changelog_size.py` - Checks changelog size against threshold
- `scripts/changelog/remove_duplicates.py` - Detects and removes duplicate changelog entries
- `scripts/changelog/identify_archival_entries.py` - Identifies entries eligible for archival
- `scripts/changelog/archive_entries.py` - Archives old entries to archive file
- `scripts/changelog/changelog_utils.py` - Utility functions for changelog operations
- `scripts/changelog/cron-cmw-example.sh` - Example cron script for automated CMW execution
- `scripts/changelog/README.md` - Complete CMW documentation and usage guide

### Reference Documents
- `docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all discovered RW flaws
- `docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` - Versioning-specific error reference (WF-002)

### Cursor Rules Sections
- `cursorrules-rw-trigger-section.md` - Section to add to your `.cursorrules` file for RW trigger (includes "ALL sections" requirement, atomicity, blocked protocol)
- `cursorrules-ukw-trigger-section.md` - Section to add to your `.cursorrules` file for UKW trigger (Update Kanban Workflow)

---

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular** with maximum flexibility. You can use it standalone or combine it with other packages based on your needs.

### Standalone Usage

✅ **This package can be used completely independently** without requiring any other `ai-dev-kit` packages.

**What you get standalone:**
- Complete Release Workflow (RW) trigger and execution methodology
- Agent-driven workflow execution patterns
- Workflow validation scripts
- Cursor rules integration
- Versioning policy documents (included for RW to work)

**Hard dependencies (required):**
- Git (for version control)
- Python 3 (for validation scripts)
- AI Assistant (for agent-driven execution)

**Independence score:** 9/10 — Can be used standalone with minimal external dependencies.

### Combined Usage

**With Numbering & Versioning Package:**
- RW uses the version schema from Numbering & Versioning
- Optional: Can swap in your own versioning policy if preferred
- Integration: RW reads version file and follows versioning schema

**With Kanban Package:**
- RW automatically updates Kanban documentation (Step 4)
- Integration: RW adds forensic markers to Kanban Story Checklist
- Optional: Can use RW without Kanban (skip Step 4)

**With Both Packages:**
- Complete three-way integration (Kanban ↔ Versioning ↔ RW)
- Automated Kanban updates with version markers
- Full forensic traceability

### Dependency Matrix

| Dependency Type | Package | Required? | Purpose |
|----------------|---------|-----------|---------|
| Hard | Git | ✅ Yes | Version control operations |
| Hard | Python 3 | ✅ Yes | Validation scripts |
| Hard | AI Assistant | ✅ Yes | Agent-driven execution |
| Soft | Numbering & Versioning | ❌ No | Version schema (can swap) |
| Soft | Kanban | ❌ No | Documentation updates (optional) |

### Copy vs Reference Pattern

**⚠️ CRITICAL: Copy, Don't Reference**

Projects must **copy** this package into their repository, not link to it.

**Why copy?**
- Projects need to customize file paths, project names, and terminology
- Projects evolve independently and may need project-specific adaptations
- Copying ensures projects have full control over their workflow implementation
- Prevents breaking changes in `ai-dev-kit` from affecting consuming projects

**What to copy:**
1. All files in `packages/frameworks/workflow mgt/`
2. Maintain directory structure
3. Customize all file paths in documentation
4. Update `.cursorrules` section with your project paths

**Customization boundaries:**
- ✅ **CAN customize:** File paths, project names, branch naming conventions, version file location
- ❌ **MUST keep:** Workflow steps (1-13), validation logic, agent execution pattern, atomicity requirements, PDCA integration

### Usage Scenarios

**Scenario 1: Standalone Workflow Management**
- Copy only this package
- Use RW for automated releases
- Swap in your own versioning policy if needed
- Skip Kanban integration (manual updates)

**Scenario 2: Workflow + Versioning**
- Copy this package and Numbering & Versioning package
- RW uses versioning schema automatically
- Full versioning integration

**Scenario 3: Complete Integration**

- Copy all three packages (Workflow, Versioning, Kanban)
- Full three-way integration
- Automated Kanban updates with version markers

See `docs/project-management/kanban/epics/Epic-1/Story-002-package-and-repo-architecture/T004-consumption-patterns.md` for detailed step-by-step guides for each scenario.

---

## 🚀 RW Quickstart (Using Installer)

**🎯 Fastest Path:** Use the RW Installer CLI to automate setup. Reduces manual configuration from 13-17 file edits to answering a few questions.

### Option 1: Quick Install (Recommended)

```bash
# 1. Copy workflow package to your project
cp -r /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/* /path/to/your/project/

# 2. Run installer (interactive)
cd /path/to/your/project
python scripts/install_release_workflow.py

# 3. Answer prompts (or use --mode for preset)
# Mode A: Simple RW (no Kanban)
# Mode B: RW + Dev-Kit Versioning
# Mode C: Full Stack (RW + Versioning + Kanban)

# 4. Test RW (FR-060: task id in same message as RW)
git checkout -b epic/1-test
# e.g. RW E1S01T01 or RW E1:S01:T01 in your AI assistant
```

**That's it!** The installer generates `rw-config.yaml`, updates `.cursorrules`, and patches workflow files automatically.

### Option 2: Preset Mode Installation

```bash
# Full Stack (recommended for new projects)
python scripts/install_release_workflow.py --mode c

# Or preview changes first
python scripts/install_release_workflow.py --mode c --dry-run
```

### What the Installer Does

1. **Generates `rw-config.yaml`** - Single source of truth for all paths
2. **Updates `.cursorrules`** - Adds RW trigger section with correct paths
3. **Patches `workflows/release-workflow/release-workflow.yaml`** - Uses config values instead of hardcoded paths
4. **Validates paths** - Ensures all paths match your project structure

### Next Steps After Installation

1. **Review `rw-config.yaml`** - Verify paths are correct
2. **Create version file** - At the path specified in config
3. **Copy validation scripts** - If not already present
4. **Test RW** - On an epic branch, send e.g. `RW E1S01T01` or `RW E1:S01:T01` (same message; **FR-060**)

### 📖 Detailed Guides

- **Quickstart Guide:** [`docs/documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md`](docs/documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md) - Complete examples for greenfield and brownfield projects
- **Installer CLI Docs:** [`scripts/README-rw-installer.md`](scripts/README-rw-installer.md) - Full installer documentation
- **Config Schema:** [`config/rw-config-schema.md`](config/rw-config-schema.md) - Complete config reference

---

## 🔧 Manual Installation (Legacy)

**Note:** Manual installation is still supported but requires 13-17 manual file edits. Use the installer (above) for a much faster setup.

### Step 1: Copy Files to Your Project

Copy all files maintaining the directory structure:

```bash
# Copy to your project root
cp -r temp/workflow\ mgt/* /path/to/your/project/
```

Or manually copy:
- `docs/` → Your documentation directory
- `workflows/` → Your workflows directory (or create it)
- `scripts/validation/` → Your scripts directory (or create it)

### Step 2: Customize File Paths

**Critical:** You must update file paths in all documents to match your project structure.

**Search and Replace:**
1. **Version File:**
   - Search: `src/fynd_deals/version.py`
   - Replace: `src/yourproject/version.py` (or your actual path)

2. **Changelog Directory:**
   - Search: `CHANGELOG_ARCHIVE/`
   - Replace: Your changelog archive directory path

3. **Main Changelog:**
   - Search: `CHANGELOG.md`
   - Replace: Your main changelog file path

4. **Kanban Documentation:**
   - Search: `knowledge/fynd_deals/Kanban/`
   - Replace: Your Kanban doc structure (if using Kanban)

5. **Documentation References:**
   - Update all `docs/documentation/Developer_Docs/vwmp/` references to match your doc structure

**Files to Update:**
- All `.md` files in `docs/documentation/Developer_Docs/vwmp/`
- `workflows/release-workflow.yaml`
- `scripts/validation/validate_branch_context.py`
- `scripts/validation/validate_changelog_format.py`
- `cursorrules-rw-trigger-section.md` (before adding to `.cursorrules`)

### Step 3: Add RW Trigger to `.cursorrules`

1. Open `cursorrules-rw-trigger-section.md`
2. Copy the entire section (from `### 🚀 RELEASE WORKFLOW (RW) TRIGGER` to the end)
3. Paste into your `.cursorrules` file in an appropriate location (e.g., "Version Control and Release Process" section)
4. Update all file path references in the section to match your project

### Step 4: Customize Version Schema (if needed)

The default schema is `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.15.1.4+2`). If you need a different schema:

1. Update `docs/architecture/standards-and-adrs/versioning-policy.md` with your schema
2. Update `scripts/validation/validate_branch_context.py` to parse your schema
3. Update `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` Step 1 to handle your schema
4. Update the version schema section in your `.cursorrules`

### Step 5: Customize Branch Mapping (if needed)

If using different branch naming conventions:

1. Update `scripts/validation/validate_branch_context.py` to parse your branch pattern (currently uses regex `epic/(\d+)`)
2. Update branch mapping section in your `.cursorrules`
3. Update any documentation that references branch patterns

**Current Implementation:**
- Supports multi-digit epic numbers (e.g., `epic/10-fastapi-migration`, `epic/15-documentation`)
- Uses regex pattern `epic/(\d+)` to extract epic number from branch name
- Validates that version epic matches branch epic

### Step 6: Test the Workflow

1. Ensure you have a version file (e.g., `src/yourproject/version.py` with `VERSION_STRING = "0.1.1.1+1"`)
2. Create an epic branch (e.g., `git checkout -b epic/1-first-epic`)
3. In your AI assistant (Cursor), send **`RW` with a task id** in the same message, e.g. `RW E1S01T01` or `RW E1:S01:T01` (**FR-060**)
4. Verify the workflow steps execute correctly for your `.cursorrules` path:
   - Step 1: Branch Safety Check
   - Step 2: Version bumped
   - Step 3: CHANGELOG + archive updated
   - Step 4: Main CHANGELOG updated
   - Step 5: README updated (if applicable)
   - Step 6: Kanban docs auto-updated
   - Step 7: Files staged
   - Step 8: IDE problem checking (errors, warnings, infos)
   - Step 9: Validators run
   - Step 9.5: Changelog Management Workflow (CMW) if needed (optional)
   - Step 10: Commit created
   - Step 11: Tag created
   - Step 12: Branch and tag pushed (or manual instructions provided)
   - Step 13: Post-Commit Verification, Housekeeping & Reflection (optional but recommended)
   - Step 14: Act on Verification Results (optional but recommended)

---

## 📖 How It Works

### The RW Trigger

When a user sends an RW trigger **with a mandatory task id** in the **same message** (case-insensitive; FR-060):

- **`RW <task_id>`** — e.g. `RW E7:S01:T10`, `RW E7S01T10` — Full Release Workflow (all 17 steps)
- **`RW -k <task_id>`** — Kanban Documentation Commit (short path; use `--mode rw-k` on validators)
- **`RW -d <task_id>`** — Documentation-Only Release (short path)

Without a parseable `E…S…T…` token, the agent must **abort** (RW ABORTED) before version bump.

The AI assistant:

1. **AI Assistant Recognizes Trigger:** The `.cursorrules` file instructs the AI to parse the trigger variant **and** task id, then run `validate_rw_task_complete.py` and `validate_rw_task_intent.py` after branch safety (Step 1)
2. **Parse Trigger Type:** Determines which workflow variant to execute based on the trigger
3. **Select Execution Path:** Chooses appropriate step sequence based on trigger type
4. **Intelligent Execution:** The AI follows the step-by-step guide for the selected path, analyzing each step before executing
5. **Progress Tracking:** The AI creates and maintains a TODO list tracking the steps for the selected execution path
6. **Validation:** Each step is validated before proceeding to the next
7. **Documentation:** All actions are documented with analysis and results
8. **Atomicity:** The workflow either completes all steps for the selected path or stops with a clear "RW BLOCKED" message

**Execution Path Details:**
- **RW (Full Release):** Steps 1-17 (complete release with Git operations, verification, PIR)
- **RW -k (Kanban Init):** Steps [1, 2, 3, 4, 7, 11, 12] - Documentation setup only, Step 7 modified for Kanban init mode
- **RW -d (Documentation Only):** Steps [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14] - Documentation updates, skips Git tag, push, PIR trigger, housekeeping

### The 13 Steps (Plus Optional Steps)

**Phase 1: Version & Documentation Updates (Steps 1-6)**
1. **Branch Safety Check** - Verify work aligns with branch context
2. **Bump Version** - Increment version number based on schema (BUILD for same task, or TASK+BUILD=1 for new task)
3. **Create Detailed Changelog** - Create detailed changelog archive with full timestamp and PLAN section
4. **Update Main Changelog** - Add summary entry with short date (DD-MM-YY)
5. **Update README** - Update version references if present (optional)
6. **Auto-update Kanban Docs** - Update **ALL sections** (header, checklist, detailed story sections) to match authoritative Story file

**Phase 2: Git Operations & Validation (Steps 7-12)**
7. **Stage Files** - Stage all modified files
8. **Check for IDE-Flagged Problems** - Check errors (blocking), warnings/infos (non-blocking) in order
9. **Run Validators** - Execute branch context, changelog format, version bump, and changelog size validators
9.5. **Changelog Management Workflow (CMW)** - Optional: Archive entries if changelog exceeds threshold
10. **Commit Changes** - Create git commit with versioned message
11. **Create Git Tag** - Create annotated tag
12. **Push to Remote** - Push epic branch and tags to remote repository (DO NOT push to main unless ready to deploy)

**Phase 3: PDCA CHECK & ACT (Steps 12-13, optional but recommended)**
12. **Post-Commit Verification & Reflection** - Verify changes worked as expected, evaluate against objectives, reflect on results
13. **Act on Verification Results** - Update changelog based on verification, standardize practices, create follow-up tasks if needed

### Agent-Driven Execution

Unlike deterministic scripts, the AI agent:
- **Analyzes** each step's requirements before executing
- **Determines** appropriate actions based on context
- **Executes** the actions intelligently
- **Validates** results before proceeding
- **Documents** all decisions and actions

This ensures the workflow adapts to your project's specific context and handles edge cases intelligently.

### Key Enhancements (v2.0.0)

**"ALL Sections" Requirement:**
- Step 4 now explicitly requires updating ALL sections of epic documentation:
  - Header metadata
  - Story Checklist
  - Detailed Story sections
  - Any other references
- Includes systematic process: read full file → find all references → update all → validate consistency

**Atomicity & Blocked Protocol:**
- RW must complete all 10 steps OR stop with clear "RW BLOCKED" message
- Cannot silently stop mid-workflow
- Cannot start new RW while previous RW TODOs are pending/in_progress
- If aborted, must mark remaining TODOs as cancelled and output "RW ABORTED" summary

**Epic Branch Workflow:**
- ALWAYS work on epic branches (`epic/{n}-...`)
- NEVER commit directly to `main` during development
- ONLY merge to `main` when ready to deploy
- Prevents unnecessary auto-deployments during development

---

## 📥 Intake Workflow

### Overview

The **Intake Workflow** automates the process of converting Feature Requests (FRs), Bug Reports (BRs), and User Experience Research (UXR) documents into structured Kanban tasks. It integrates with the Release Workflow's trigger-aware system to automatically execute when FR/BR/UXR commits are detected.

**Governance alignment:** Intake MUST satisfy **KG-R2** (every FR/BR/UXR resolves to ≥1 task **in the same session**) and **KG-R6** (task under semantically appropriate story; FR/BR/UXR id ↔ task number symmetry optional). See `packages/frameworks/kanban/policies/kanban-governance-policy.md`.

### Key Features

- **Automated Decision Flow:** Analyzes FR/BR/UXR content to determine appropriate Epic/Story/Task assignment
- **Intelligent Task Creation:** Leverages E4:S10 (Agentic Kanban Task Creation) for automated task generation
- **Documentation Updates:** Automatically updates source FR/BR/UXR documents with intake decisions and version markers
- **Dependency Wiring:** Extracts and wires dependencies (Blocked By, Blocks, Related Work) from content
- **Version Assignment:** Assigns canonical version markers following RC.EPIC.STORY.TASK+BUILD schema
- **Trigger Integration:** Automatically executes when FR/BR/UXR commits are detected by RW

### The 7 Steps

**Phase 1: Analysis & Decision (Steps 1-2)**
1. **Load & Parse FR/BR/UXR Document** - Load and validate the intake document
2. **Decision Flow Analysis** - Analyze content to determine Epic/Story/Task assignment using semantic matching

**Phase 2: Task Creation & Documentation (Steps 3-4)**
3. **Create/Update Kanban Tasks** - Generate Kanban tasks using agentic task creation framework
4. **Update FR/BR/UXR Documentation** - Update source document with intake decision, status, and Kanban links

**Phase 3: Integration & Validation (Steps 5-7)**
5. **Wire Dependencies** - Extract and wire dependencies (Blocked By, Blocks, Related Work)
6. **Assign Version Marker** - Assign canonical version marker to created/updated Kanban items
7. **Validate & Report Results** - Validate all steps completed successfully and generate intake report

### Trigger-Aware Execution

The Intake Workflow integrates with the Trigger-Aware Release Workflow (E2:S07):

- **Automatic Detection:** When RW detects FR/BR/UXR commits, the intake workflow automatically executes
- **Sub-Workflow Execution:** Intake workflow runs as a sub-workflow of RW
- **Version Integration:** Uses RW's versioning logic for consistent version assignment
- **Documentation Integration:** Updates Kanban documents using RW's documentation update mechanisms

**Example:**
```bash
# Commit message: "Add FR-019: Intake Workflow Automation"
# Changed files: ["docs/project-management/kanban/fr-br/FR-019.md"]
# → RW detects trigger → Intake workflow executes automatically
```

### Documentation

- **Agent Execution Guide:** `docs/documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md` - Complete step-by-step guide for AI agents
- **Workflow Definition:** `workflows/intake-workflow.yaml` - YAML definition of the Intake Workflow structure
- **Trigger Integration:** See `docs/trigger-aware-rw-documentation.md` for trigger system details

### Integration Points

- **E4:S08 (Semantic Matching):** Used for intelligent content mapping in decision flow
- **E4:S10 (Agentic Task Creation):** Used for automated Kanban task generation
- **E2:S07 (Trigger-Aware RW):** Enables automatic execution on FR/BR/UXR commits
- **Release Workflow:** Shares versioning and documentation update mechanisms

---

## 📋 Changelog Management Workflow (CMW)

### Overview

The **Changelog Management Workflow (CMW)** is a **deterministic workflow** for automated changelog maintenance. Unlike agent-driven workflows (like RW or UKW), CMW uses rule-based scripts to maintain changelog health through validation, duplicate detection, ordering fixes, and archival.

### Key Features

- **Automated Validation:** Analyzes changelog state (size, entry count, ordering, duplicates)
- **Duplicate Detection:** Identifies and removes duplicate changelog entries
- **Ordering Fixes:** Corrects changelog ordering violations (version-ordered, not date-ordered)
- **Archival Support:** Archives old entries based on size-based, time-based, or hybrid policies
- **Deterministic Execution:** Rule-based scripts (no agentic intelligence required)
- **Multiple Triggers:** Automatic (RW Step 9.5), manual ("CMW" command), or cron automation

### Integration with Release Workflow

CMW integrates seamlessly with the Release Workflow:

- **Automatic Trigger (RW Step 9.5):** When `check_changelog_size.py` (run in RW Step 9) indicates the changelog exceeds the size threshold, CMW automatically executes to archive entries, remove duplicates, and fix ordering
- **Non-Blocking:** CMW failures are non-blocking (workflow continues even if CMW encounters issues)
- **Version-Aware:** CMW respects version ordering (canonical version numbers, not timestamps)

### Manual Execution

CMW can be triggered manually by typing "CMW" or "cmw" (case-insensitive) in your AI assistant:

```bash
# In your AI assistant (Cursor)
CMW
```

The AI assistant will execute the CMW script with appropriate parameters based on your project's changelog state.

### Cron Automation

CMW can be automated via cron for regular maintenance (recommended: weekly execution):

1. **Copy example script:**
   ```bash
   cp scripts/changelog/cron-cmw-example.sh ~/scripts/cmw-cron.sh
   chmod +x ~/scripts/cmw-cron.sh
   ```

2. **Edit script to set PROJECT_ROOT and paths:**
   ```bash
   nano ~/scripts/cmw-cron.sh
   ```

3. **Add to crontab (weekly, Sunday at 2:00 AM):**
   ```cron
   0 2 * * 0 /path/to/scripts/cmw-cron.sh
   ```

See `scripts/changelog/README.md` for complete cron setup instructions and configuration options.

### CMW Capabilities

**Validation:**
- Changelog format validation
- Version ordering validation
- Entry count and size analysis

**Maintenance:**
- Duplicate entry detection and removal
- Ordering violation fixes (ensures version-ordered entries)
- Archival policy enforcement (size-based, time-based, hybrid)

**Archival:**
- Identifies entries eligible for archival based on policy
- Archives entries to archive file with proper formatting
- Maintains changelog size within threshold

### Documentation

- **CMW Scripts Documentation:** `scripts/changelog/README.md` - Complete CMW documentation, usage guide, and cron setup instructions
- **Workflow Definition:** `workflows/changelog-management-workflow.yaml` - YAML definition of the CMW structure
- **CMW Scripts:** All scripts in `scripts/changelog/` directory

### Characteristics

- **Deterministic:** CMW is rule-based and script-driven (no agent execution guide needed)
- **Non-Blocking:** CMW failures do not block the Release Workflow
- **Automatic:** CMW automatically executes when changelog threshold is exceeded (RW Step 9.5)
- **Manual:** CMW can be triggered manually via "CMW" command
- **Automated:** CMW can be scheduled via cron for regular maintenance

---

## 🔧 Customization Guide

### File Paths

**Most Important:** Update these paths in ALL files:
- Version file location
- Changelog directory
- Main changelog file
- Kanban documentation paths (if using)
- Documentation directory structure

**Quick Find/Replace:**
```bash
# Find all occurrences (customize these paths for your project)
grep -r "src/{project}/version.py" .  # Replace {project} with your project name
grep -r "{changelog_archive_path}" .  # Replace with your changelog archive path
grep -r "{kanban_path}" .              # Replace with your Kanban documentation path
grep -r "{scripts_path}" .            # Replace with your scripts directory path
```

**Note:** The `cursorrules-rw-trigger-section.md` file has been abstracted to use template placeholders (`{project}`, `{changelog_archive_path}`, etc.) instead of hardcoded paths. Update these placeholders when copying to your project.

### Version Schema

The default schema `RC.EPIC.STORY.TASK+BUILD` is designed to be universal, but you can customize:

**Example:** `0.{epic}.{story}.{task}+{build}` (e.g., `0.3.1.5+1`)
- `0` = Release Candidate (0 = development, 1+ = release candidate)
- `{epic}` = Epic number (e.g., 3)
- `{story}` = Story number within epic (e.g., 1)
- `{task}` = Task number within story (e.g., 5)
- `{build}` = Build number (increments per release within task, e.g., 1)

**Schema Calculation:**
- Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)
- Same Task: Increment BUILD → `0.N.S.T+{B+1}`
- New Task: Reset BUILD → `0.N.S.{T+1}+1`
- New Story: Reset TASK and BUILD → `0.N.{S+1}.1+1`
- New Epic: Reset STORY, TASK, BUILD → `0.{N+1}.1.1+1`

**To Customize:**
1. Update `versioning-policy.md` with your schema
2. Update validation scripts to parse your schema
3. Update workflow execution guide Step 1

### Branch Mapping

If using different branch naming (e.g., `feature/epic-{n}` instead of `epic/{n}`):

1. Update `validate_branch_context.py`:
   ```python
   def parse_branch_epic(branch: str) -> Optional[int]:
       # Match your pattern (e.g., feature/epic-4 -> 4)
       # Current default pattern: epic/{n} or epic/{n}-{description}
       match = re.match(r"^epic/(\d+)", branch)  # Default pattern
       # Or customize: match = re.match(r"^feature/epic-(\d+)", branch)
       if match:
           return int(match.group(1))
       return None
   ```

2. Update `.cursorrules` branch mapping section to reflect your naming convention
3. Update branch examples in documentation to use generic patterns

### Optional Steps

Steps 4 (Update README) and 5 (Update KB Epic Docs) can be adapted:
- If you don't have a README with version badge, skip Step 5
- If you don't use Kanban structure, skip Step 4 (but note: Step 4 is critical for Kanban-based projects)

---

## ✅ Verification Checklist

After implementation, verify:

- [ ] All file paths updated in all documents
- [ ] RW trigger section added to `.cursorrules`
- [ ] Version file exists and is accessible
- [ ] Changelog directory exists
- [ ] Validation scripts are executable
- [ ] Full RW runs when the message includes `RW`/`rw` **and** a parseable `E…S…T…` token (e.g. `RW E7S01T10`, `RW E7:S01:T10`)—**FR-060**
- [ ] `RW -k` / `rw -k` with task id behaves as configured (short path)
- [ ] `RW -d` / `rw -d` with task id behaves as configured (doc-only path)
- [ ] All steps execute in correct order for each trigger type
- [ ] Version file updates correctly
- [ ] Changelogs created with full timestamps
- [ ] Epic docs updated in ALL sections (header, checklist, detailed story sections)
- [ ] Validators run and pass
- [ ] Git commit includes version number
- [ ] Git tag created with correct format
- [ ] Branch and tag pushed to remote (or manual instructions provided)
- [ ] TODO list tracks all steps for selected execution path (visible in AI assistant)
- [ ] RW completes atomically or stops with clear "RW BLOCKED" message
- [ ] Kanban init mode (RW -k) only updates documentation fields
- [ ] Documentation-only mode (RW -d) skips Git tag, push, PIR trigger, housekeeping
- [ ] PDCA CHECK and ACT phases executed (Steps 12-13)

---

## 📚 Documentation Structure

The included documentation follows this structure:

```
docs/
├── Documentation/
│   └── Developer_Docs/
│       └── vwmp/
│           ├── agent-driven-workflow-execution.md
│           ├── release-workflow-agent-execution.md
│           ├── release-workflow-reference.md
│           └── portable-workflow-implementation-guide.md
└── Architecture/
    └── standards-and-adrs/
        ├── versioning-policy.md
        └── versioning-strategy.md
```

**You can adjust this structure** to match your project's documentation organization. Just update all cross-references in the files.

---

## 🆘 Troubleshooting

### RW Trigger Not Responding

1. **Check `.cursorrules`:** Ensure the RW trigger section is properly added
2. **FR-060:** Bare `RW` without a task id aborts before version bump—use e.g. `RW E5S01T67` in one message
3. **Check File Paths:** Verify all file path references in `.cursorrules` are correct
4. **Check Documentation:** Ensure referenced documentation files exist at specified paths

### Validation Failures

1. **Branch Context:** Check that your branch name matches the version schema (e.g., `epic/15` for version `0.15.x.x.x+x`)
2. **Changelog Format:** Ensure changelog has correct format (new: `DD-MM-YY`, old: `YYYY-MM-DD`)
3. **Version Schema:** Verify version matches expected format (`RC.EPIC.STORY.TASK+BUILD`)

### Step Failures

1. **Check Dependencies:** Ensure previous steps completed successfully
2. **Check File Permissions:** Ensure files are writable
3. **Check Git State:** Ensure you're on a valid epic branch with no uncommitted conflicts

### "ALL Sections" Not Updated

1. **Check Step 4:** Ensure systematic process is followed:
   - Read FULL Epic-{epic}.md file
   - Read authoritative Story-{N}-{Name}.md file
   - Find ALL sections referencing story/task (use grep/search)
   - Update ALL of them
   - Validate consistency

---

## 🔗 Key Concepts

### Agent-Driven Execution

The workflow uses **intelligent agent-driven execution**, not deterministic scripts. This means:
- The AI analyzes each step before executing
- The AI makes context-aware decisions
- The AI validates results before proceeding
- The AI documents all actions

### Mandatory TODOs

**Cursor TODOs are MANDATORY** for the Release Workflow. The AI must:
- Create a TODO list with all 10 steps at workflow start
- Update TODO status before and after each step
- Mark all steps as completed on success
- Mark remaining steps as cancelled on abort

This provides:
- Real-time progress visibility
- Error recovery capability
- Execution transparency
- Accessibility support (critical for users with cognitive constraints)

### Version Schema

The `RC.EPIC.STORY.TASK+BUILD` schema provides:
- **Forensic Traceability:** Every version links to specific work items
- **Parallel Development:** Multiple epics can develop simultaneously
- **Task-Level Granularity:** Versions track work at the task level
- **Build Increments:** Multiple releases within a task are tracked

### Epic Branch Workflow

**Critical:** Always work on epic branches, never directly on `main`:
- Prevents unnecessary auto-deployments
- Maintains clean version streams per epic
- Enables parallel development
- Only merge to `main` when ready to deploy

---

## 📝 Next Steps

1. **Review Documentation:** Read through the included guides to understand the methodology
2. **Customize Paths:** Update all file paths to match your project
3. **Test Workflow:** Run a test release on a feature/epic branch
4. **Set Up Pre-commit Hooks:** Add validators to pre-commit hooks (optional but recommended)
5. **Train Your Team:** Share the documentation with your team

---

## 💡 Tips

1. **Start Small:** Test the workflow on a feature branch before using in production
2. **Version Schema:** The default schema is designed to be universal - only customize if necessary
3. **File Structure:** You don't need the exact `docs/` structure - adjust to match your project
4. **Validation:** The validators are the most project-specific - customize these carefully
5. **Documentation:** Keep documentation updated as you customize the workflow
6. **"ALL Sections":** Always follow the systematic process for Step 4 to prevent inconsistencies
7. **Atomicity:** Ensure RW always ends in "RW COMPLETE" or "RW BLOCKED" state - never ambiguous

---

## 📞 Support

For questions or issues:
1. Review `docs/documentation/Developer_Docs/vwmp/portable-workflow-implementation-guide.md` for detailed customization instructions
2. Check the step-by-step execution guide for specific step issues
3. Review the versioning policy documents for schema questions
4. Check `.cursorrules` for the complete RW trigger section with all requirements

---

**Last Updated:** 2026-04-13  
**Package Version:** 2.3.0  
**Source Project:** fynd.deals (Epic 15, Story 1)  
**Key Features:** "ALL sections" requirement, atomicity, blocked protocol, epic branch workflow
