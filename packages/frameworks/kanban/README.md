---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Kanban System Implementation Package (Complete)

```yaml
package:
  name: "Kanban System Implementation Package"
  version: "2.2.0"
  last_updated: "2026-04-13"
  source_project: "Example project (Confidentia, Epic 4)"
  compatibility:
    numbering_versioning: "v2.0.0"
    workflow_management: "v2.0.0"
  license: "See source project"
```

**📦 Dependency Architecture (Epic 6):** This framework is transitioning from copy-paste to **dependency-based installation** with automatic updates. See [Framework Dependency Architecture](../../../docs/architecture/standards-and-adrs/framework-dependency-architecture.md) for details on installing as a Git submodule, via CLI tool, or package manager.

**Consumer vs framework Kanban trees:** In a **consumer project**, your working Kanban lives at **`docs/project-management/kanban/`** at the repo root (epics, stories, board files). The framework’s own files (e.g. under `.ai-dev-kit/packages/frameworks/kanban/` or wherever the framework is installed) are the **framework’s internal** board and templates—**do not edit or use them as your project’s Kanban**. Always run the installer from your project root so that it creates/updates `docs/project-management/kanban/` in your repo.

> **Note:** All references to specific projects (for example, *Confidentia*, *Epic 4*, or concrete paths like `docs/project-management/epics/overview/Epic 4/Epic-4.md`) are **examples only**.  
> When you install this package, you should:
> - Replace project names with your own.
> - Replace file paths with your own KB structure.
> - Treat Epic/Story/Task IDs and versions as **illustrative**, not prescriptive.

---

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular** with maximum flexibility. You can use it standalone or combine it with other packages based on your needs.

### Standalone Usage

✅ **This package can be used completely independently** without requiring any other `ai-dev-kit` packages.

**What you get standalone:**
- Complete Kanban governance policy
- Epic, Story, and Task templates
- **3-tier structure requirement** (Epic → Story → Task) - **MANDATORY**
- **Discrete Task document requirement** - Every task must have explicit documentation
- Work item hierarchy (Epic → Story → Task)
- Forensic traceability patterns
- KB (Knowledge Base) documentation structure
- All operational principles and best practices

**Hard dependencies (required):**
- Git (for version control)
- Markdown (for documentation)

**Independence score:** 9/10 — Can be used standalone with minimal external dependencies.

### Combined Usage

**With Numbering & Versioning Package:**
- Kanban uses version markers from versioning schema
- Integration: Story Checklist includes version markers (`vRC.E.S.T+B`)
- Optional: Can use Kanban without versioning (manual markers)

**With Workflow Management Package:**
- RW automatically updates Kanban documentation (Step 4)
- Integration: RW adds forensic markers to Story Checklist
- Optional: Can use Kanban without RW (manual updates)

**With Both Packages:**
- Complete three-way integration (Kanban ↔ Versioning ↔ RW)
- Automated Kanban updates with version markers
- Full forensic traceability

### Dependency Matrix

| Dependency Type | Package | Required? | Purpose |
|----------------|---------|-----------|---------|
| Hard | Git | ✅ Yes | Version control for documentation |
| Hard | Markdown | ✅ Yes | Documentation format |
| Soft | Numbering & Versioning | ❌ No | Version markers (optional) |
| Soft | Workflow Management | ❌ No | Automated updates (optional) |

### Copy vs Reference Pattern

**⚠️ CRITICAL: Copy, Don't Reference**

Projects must **copy** this package into their repository, not link to it.

**Why copy?**
- Projects need to customize file paths, KB structure, and terminology
- Projects evolve independently and may need project-specific adaptations
- Copying ensures projects have full control over their Kanban implementation
- Prevents breaking changes in `ai-dev-kit` from affecting consuming projects

**What to copy:**
1. All files in `packages/frameworks/kanban/`
2. Maintain directory structure
3. Customize all file paths in policy and templates
4. Update Epic/Story numbering examples

**Customization boundaries:**
- ✅ **CAN customize:** File paths, KB structure, project names, Epic ranges, branch conventions, terminology
- ❌ **MUST keep:** Operational principles (all 9), forensic marker format, Story Checklist as SoT, governance rules

See the "Consumption Pattern for Other Projects" section below for detailed implementation steps.

---

## 📋 Package Overview

```yaml
purpose: |
  Complete implementation package for forensic, traceable Kanban system with:
  - Epic/Story/Task hierarchy
  - Forensic traceability via version markers
  - Single source of truth (Story Checklist)
  - Integration with semantic versioning
  - Integration with agent-driven workflow management
  - Comprehensive KB (Knowledge Base) documentation structure

key_features:
  - Hierarchical work item structure (Epic → Story → Task)
  - Forensic markers linking work items to code releases
  - Story Checklist as single source of truth
  - Parallel development support
  - Integration with RC.EPIC.STORY.TASK+BUILD versioning
  - Automatic updates via Release Workflow
  - Comprehensive documentation and examples
```

---

## 📦 Package Contents

```yaml
structure:
  policies/:
    - kanban-governance-policy.md        # Complete governance policy

  templates/:
    - EPIC_TEMPLATE.md                   # Epic document template
    - STORY_TEMPLATE.md                  # Story document template
    - TASK_TEMPLATE.md                   # Task document template (MANDATORY for all tasks)
    - CANONICAL_STORIES.md               # Reusable canonical story patterns
    - CANONICAL_EPICS.md                 # Canonical epic definitions
    - COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md  # Complete canonical E/S/T structure (Epics 1-23+)
    - UXR_TEMPLATE.md                    # User Experience Research template
    - FB_TEMPLATE.md                     # User Acceptance Testing (UAT) Report template (requires empirical evidence)
    - TIER_DELEGATION_GUIDELINES.md     # Guidelines for proper tier delegation (Epic → Story → Task)

  examples/:
    - Epic-4-Example.md                  # Real Epic (37 stories, 36 complete)
    - Story-33-Example.md                # Real Story (3 tasks, all complete)

  guides/:
    - portfolio-kanban-alignment-playbook.md  # Alignment guide

  integration/:
    - numbering-versioning-integration.md     # Integration with versioning
    - workflow-management-integration.md      # Integration with workflows

  scripts/:
    - detect_existing_structure.py            # Detection utility for existing structures
    - analyze_structure.py                    # Analysis utility for migration planning
    - migrate_structure.py                    # Migration utility for canonical format conversion
    - install_kanban_framework.py             # Integrated installation script with mode selection
    - generate_task_templates.py              # Procedural task template generator (hybrid system)
    - README.md                               # Scripts documentation and usage guide

  README.md                              # This file
```

---

## 🚀 Quick Start

### Prerequisites

```yaml
required:
  - Project with version control (Git)
  - Documentation directory structure
  - Python 3.6+ (for migration utilities)

recommended:
  - Numbering & Versioning package (temp/numbering & versioning/)
  - Workflow Management package (temp/workflow-mgt/)
  - Markdown-based documentation system
```

## 🚨 IMPORTANT: Use the Interactive Installer

**⚠️ DO NOT manually copy files from `docs/project-management/kanban/epics/`**

The `docs/project-management/kanban/epics/` directory contains **ai-dev-kit's actual Kanban board** (with project-specific epics like "AI Dev Kit Core"). This is **NOT** what you want to install.

**✅ USE THE INSTALLER INSTEAD:**

The interactive installer (`install_kanban_framework.py`) is the **ONLY** supported installation method. It will:
- Install **canonical epic templates** (not ai-dev-kit's actual epics)
- Contextualize Epic 1 with your project name
- Only install canonical core epics (1-8, 10, 18, 22, 23)
- Exclude ai-dev-kit project-specific content

### Installation Method

**🎯 PRIMARY METHOD: Interactive Installation (REQUIRED)**

```bash
# 1. Copy Kanban framework package to your project
cp -r packages/frameworks/kanban/* /path/to/your/project/

# 2. Run interactive installation script (THIS IS THE ONLY SUPPORTED METHOD)
cd /path/to/your/project
python3 scripts/install_kanban_framework.py
```

**What the installer does:**
- Detects existing Kanban structures (if any)
- Analyzes and generates migration plan
- Prompts for installation mode selection
- **Installs canonical epic templates** from `templates/epics/` (NOT from ai-dev-kit's actual epics)
- Contextualizes Epic 1 with your project name
- Only installs canonical core epics (1-8, 10, 18, 22, 23)
- Excludes ai-dev-kit project-specific epics

**Installation Modes:**
- **Fresh** - Clean install (no existing structure) - **Recommended for new projects**
- **Migration** - Migrate existing structure to canonical format
- **Update** - Update existing framework installation
- **Hybrid** - Preserve project epics, install framework epics (recommended when conflicts detected)
- **Canonical Adoption** - Adopt canonical structure with intelligent task mapping (recommended when semantic matches found)

**Expected Results After Installation:**

After running the installer, you should see:
- ✅ Canonical epic templates installed in `docs/project-management/kanban/epics/Epic-{N}/`
- ✅ Epic 1 contextualized with your project name (e.g., "MyProject Core", not "AI Dev Kit Core")
- ✅ Only canonical core epics (1-8, 10, 18, 22, 23) installed
- ✅ No ai-dev-kit project-specific epics (5-9 from ai-dev-kit)
- ✅ Empty epic directories ready for you to create stories and tasks

**Example Installation Output:**
```
🔍 Step 1: Detecting existing Kanban structure...
📊 Step 2: Analyzing structure and generating migration plan...
🔧 Installing canonical core epics from templates...
  ✅ Epic 1 installed from template: Epic-1-Project-Core.md
  ✅ Epic 2 installed from template: Epic-2-Workflow-Management.md
  ✅ Epic 3 installed from template: Epic-3-Versioning.md
  ...
✅ Installation complete!
```

### ⚠️ What NOT to Do

**❌ DO NOT manually copy epics:**
```bash
# ❌ WRONG - This copies ai-dev-kit's actual Kanban, not templates!
cp -r packages/frameworks/ai-dev-kit/docs/project-management/kanban/epics/* docs/project-management/kanban/epics/
```

**Why this is wrong:**
- You'll get ai-dev-kit's project-specific epics (Epic 1: "AI Dev Kit Core", etc.)
- You'll get ai-dev-kit's actual stories and tasks with their specific content
- Epic 1 won't be contextualized with your project name
- You'll receive project-specific epics (like Epic 24 "Book Related Work") that are specific to ai-dev-kit
- **CRITICAL: Epic Mashup Risk** - You may get Epic 9 "Book Related Work" instead of canonical Epic 9 "User Management and Authentication"

**✅ CORRECT - Use the installer:**
```bash
# ✅ CORRECT - Use the interactive installer
python3 scripts/install_kanban_framework.py
```

The installer will:
- ✅ Install from canonical templates (`templates/epics/`)
- ✅ Validate Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific)
- ✅ Prevent Epic mashup by detecting conflicts
- ✅ Warn if it detects copying of ai-dev-kit's actual Kanban
- ✅ Provide clear error messages if issues are detected

## 🔄 Hybrid Task Template System

The Kanban framework uses a **hybrid task template system** that combines high-quality concrete templates with procedural generation capabilities.

### What is the Hybrid System?

The hybrid system provides:
- **Concrete Templates:** Pre-generated, high-quality task templates for all canonical tasks
- **Procedural Generator:** Script that can regenerate templates from the canonical structure document
- **Best of Both Worlds:** Immediate availability of complete templates + easy maintenance

### Why Hybrid?

**Benefits:**
- **Storage Efficiency:** Generator reduces storage from ~1.6MB to ~60KB (source + generator)
- **Maintenance Efficiency:** Structural changes can be propagated in minutes instead of hours
- **Quality:** Concrete templates provide high-quality, contextual content
- **Flexibility:** Generator enables on-demand template generation for new tasks

**Trade-offs:**
- Initial investment in creating concrete templates
- Generator may produce more generic content than hand-crafted templates
- Requires validation to ensure generator output matches concrete templates

### Using the Generator

**For Framework Maintainers:**

```bash
# Generate all missing task templates (procedural)
python3 scripts/generate_task_templates.py

# Generate with agentic intelligence (richer content)
python3 scripts/generate_task_templates.py --agentic --agentic-provider openai

# Regenerate templates after structure changes (with overwrite)
python3 scripts/generate_task_templates.py --overwrite

# Dry run to preview changes
python3 scripts/generate_task_templates.py --dry-run

# Validate generated templates
python3 scripts/generate_task_templates.py --validate
```

**Agentic Generation (Optional):**

The generator can optionally use AI/LLM to generate richer, more contextual templates:

```bash
# Generate with OpenAI
python3 scripts/generate_task_templates.py --agentic --agentic-provider openai --agentic-model gpt-4

# Generate with Anthropic
python3 scripts/generate_task_templates.py --agentic --agentic-provider anthropic --agentic-model claude-3-opus

# Generate Epic/Story/Task templates with agentic intelligence
python3 scripts/agentic_template_generator.py --type all --provider openai
```

**Benefits of Agentic Generation:**
- **Richer Content:** AI generates contextual, detailed content
- **Better Quality:** More nuanced and specific than procedural generation
- **Context-Aware:** Uses Epic/Story/Task hierarchy for better understanding
- **Fallback:** Automatically falls back to procedural if LLM unavailable

**For Adopting Projects:**

You have two options:

1. **Use Pre-Generated Templates (Recommended):**
   - Templates are included in the framework package
   - Ready to use immediately
   - No generation required

2. **Generate Templates Locally:**
   ```bash
   # Generate templates from canonical structure
   python3 scripts/generate_task_templates.py \
     --structure-file templates/COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md \
     --output-dir templates/tasks/
   ```

**When to Regenerate:**
- After updating `COMPREHENSIVE_CANONICAL_EST_STRUCTURE.md`
- When adding new canonical tasks
- After structural changes to `TASK_TEMPLATE.md`
- To validate template consistency

**Related Documentation:**
- ADR: `docs/architecture/standards-and-adrs/task-template-system-hybrid-adr.md`
- Design: `docs/architecture/standards-and-adrs/task-template-generator-design.md`
- Agentic Design: `docs/architecture/standards-and-adrs/agentic-template-generator-design.md`
- FR-029: Procedural Task Template Generation (Hybrid Strategy)
- Script Documentation: `scripts/README.md` (see `generate_task_templates.py` and `agentic_template_generator.py`)

---

### Understanding Canonical Templates vs. ai-dev-kit's Actual Kanban

**Canonical Epic Templates** (`templates/epics/`):
- ✅ Generic templates with placeholders (e.g., `{PROJECT_NAME}`)
- ✅ Designed to be contextualized for your project
- ✅ These are what the installer uses
- ✅ Located in: `packages/frameworks/kanban/templates/epics/Epic-{N}-*.md`
- ✅ Epic 1-23 are canonical (standard framework epics)
- ✅ Epic 9 is "User Management and Authentication" (canonical)

**ai-dev-kit's Actual Kanban** (`docs/project-management/kanban/epics/`):
- ❌ ai-dev-kit's project-specific epics (e.g., "AI Dev Kit Core")
- ❌ ai-dev-kit's actual stories and tasks
- ❌ Contains Epic 24 "Book Related Work" (project-specific, not canonical)
- ❌ Example/reference only - **DO NOT COPY**
- ❌ Located in: `docs/project-management/kanban/epics/Epic-{N}/`
- ⚠️ **Epic Mashup Risk**: Contains project-specific content in Epic 24+ range

**The installer automatically:**
- Copies from `templates/epics/` (canonical templates)
- Contextualizes placeholders with your project name
- Does NOT copy from `docs/project-management/kanban/epics/` (ai-dev-kit's actual Kanban)
- Validates Epic numbering to prevent Epic mashup
- Detects and warns about copying ai-dev-kit's actual Kanban

### 🚨 Epic Mashup Prevention

**What is Epic Mashup?**

Epic mashup occurs when a project incorrectly gets canonical Epic content mixed with project-specific content, causing confusion about which epics are canonical vs project-specific.

**Common Epic Mashup Scenarios:**

1. **Epic 9 Mismatch (CRITICAL):**
   - ❌ **WRONG**: Epic 9 contains "Book Related Work" (project-specific content from ai-dev-kit)
   - ✅ **CORRECT**: Epic 9 is "User Management and Authentication" (canonical)
   - **Root Cause**: Copying ai-dev-kit's actual Kanban instead of using templates
   - **Impact**: Affects 30% of client projects - causes confusion and incorrect epic structure

2. **Project-Specific Epics in Canonical Range:**
   - ❌ **WRONG**: Epic 9-23 contain project-specific content
   - ✅ **CORRECT**: Epic 1-23 are canonical, Epic 24+ are project-specific

**How the Installer Prevents Epic Mashup:**

The installer includes validation that:
- ✅ Validates Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific)
- ✅ Detects Epic 9 "Book Related Work" in canonical range → ERROR
- ✅ Warns if Epic 24 "Book Related Work" detected (suggests copying ai-dev-kit's Kanban)
- ✅ Blocks installation if Epic conflicts detected (unless `--force` used)
- ✅ Provides clear error messages explaining the issue and how to fix it

**Installation Validation:**

The installer runs validation automatically:
- **Pre-installation validation** (Step 3.5) - Before migration to catch issues early
- **Post-installation validation** (Step 5) - After migration to confirm success

To run validation manually:
```bash
python3 scripts/validate_installation.py --kanban-path docs/project-management/kanban
```

**What Happens if Epic Mashup is Detected:**

The installer will:
1. Report errors with clear explanations
2. Block installation (unless `--force` used)
3. Provide guidance on how to fix the issue
4. Show which epics are causing conflicts

Example error output:
```
❌ ERRORS (must be fixed before installation):
  ❌ CRITICAL: Epic 9 contains 'Book Related Work' but canonical Epic 9 is 
    'User Management and Authentication'. This is the root cause of Epic mashup. 
    Rename Epic 9 to Epic 24+ (project-specific range).
```

**Best Practices to Avoid Epic Mashup:**

1. ✅ **Always use the installer** - Don't manually copy epics
2. ✅ **Use canonical templates** - Installer uses `templates/epics/`, not `docs/.../epics/`
3. ✅ **Follow Epic numbering** - Epic 1-23 canonical, Epic 24+ project-specific
4. ✅ **Run validation** - Use `validate_installation.py` to check your structure
5. ✅ **Review Epic content** - Ensure Epic 1-23 match canonical templates
6. ❌ **Never copy ai-dev-kit's actual Kanban** - Use templates instead

### Alternative: Manual Installation (Advanced - Not Recommended)

**⚠️ Only use if you understand the distinction between templates and actual Kanban**

**For advanced users who want manual control:**

```yaml
step_1:
  action: "Copy package files"
  command: "cp -r temp/kanban-complete/* /path/to/your/project/docs/kanban/"

step_2:
  action: "Customize file paths"
  files_to_update:
    - policies/kanban-governance-policy.md
    - integration/*.md
  update_references:
    - Epic document paths
    - Story document paths
    - Template paths

step_3:
  action: "Create first Epic"
  template: "templates/EPIC_TEMPLATE.md"
  naming: "Epic-{N}-{Name}.md"
  example: "Epic-1-User-Authentication.md"

step_4:
  action: "Create first Story"
  template: "templates/STORY_TEMPLATE.md"
  naming: "Story-{N}-{Name}.md"
  example: "Story-1-Login-System.md"

step_5:
  action: "Integrate with versioning"
  required_if: "Using semantic versioning"
  see: "integration/numbering-versioning-integration.md"

step_6:
  action: "Integrate with workflow management"
  required_if: "Using Release Workflow"
  see: "integration/workflow-management-integration.md"
```

### Migration Support

If you have an existing Kanban structure (from another system or older framework version), the framework provides migration utilities:

**Migration Workflow:**

1. **Detect existing structure:**
   ```bash
   python3 scripts/detect_existing_structure.py --kanban-path docs/project-management/kanban
   ```

2. **Analyze structure:**
   ```bash
   python3 scripts/analyze_structure.py --detection-report detection_report.json
   ```

3. **Review migration plan:**
   - Check `analysis_report.json` for conflicts, gaps, and recommended mode
   - Review epic/story/task mappings

4. **Migrate structure:**
   ```bash
   python3 scripts/migrate_structure.py --analysis-report analysis_report.json --mode migration
   ```

**Or use the integrated installer:**
```bash
python3 scripts/install_kanban_framework.py --mode migration
```

See [`scripts/README.md`](scripts/README.md) for detailed migration documentation.

---

## 📖 Core Concepts

### Work Item Hierarchy

**🚨 CRITICAL: 3-Tier Structure Requirement**

All work MUST follow the explicit **3-tier structure**: Epic → Story → Task. This structure is **mandatory** and **non-negotiable**.

- **Epic** contains Stories (high-level scope)
- **Story** contains Tasks (releasable slices)
- **Task** is the atomic work unit (implementation detail)

**No implicit or inline tasks are permitted.** Every task MUST be explicitly documented at the Task tier with a discrete Task document (or clearly delimited section within the Story document).

```yaml
hierarchy:
  epic:
    definition: "Major initiative or theme of work"
    duration: "Months (typically 3-6 months)"
    contains: "3-15 stories (typical)"
    version_tracking: "Version range (e.g., 0.4.x.x+x)"
    example: "Epic 4: User Workflows & Use Case Modeling"
    requirement: "Must delegate Story detail to Story documents"

  story:
    definition: "User-facing feature or capability"
    duration: "1-2 sprints (2-4 weeks)"
    contains: "1-5 tasks (typical)"
    version_tracking: "Specific version (e.g., v0.4.33.3+1)"
    example: "Story 33: Parent Inclusivity and Accessibility"
    requirement: "Must delegate Task detail to Task documents"

  task:
    definition: "Concrete implementation unit (atomic work)"
    duration: "1-3 days"
    contains: "Atomic work unit (leaf node - no delegation below)"
    version_tracking: "Specific version (e.g., v0.4.33.1+1)"
    example: "E4:S33:T01: Audit parent templates for WCAG 2.2 AA compliance"
    requirement: "MUST have discrete Task document (separate file OR delimited section)"
    required_fields: "Task ID, Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable"
```

**Task Document Formats:**
- **Separate File (Recommended):** `Task-{task}-*.md` or `T{task}-*.md` in Story directory
- **Delimited Section (Alternative):** Section within Story file using Task ID header (`### E{epic}:S{story}:T{task} –`)

**See:** `policies/kanban-governance-policy.md` - Section 3.3: Tasks for complete requirements.

### Board Structure (Info-Only Split)

The Kanban board uses a **split pattern** to optimize for quick scanning:

**Two Documents:**
- **`kboard.md`** - Structured information only (tasks, epics, status, links)
- **`kanban-board-guide.md`** - Rules, explanations, and how-to content

**Benefits:**
- Reduced cognitive load when skimming the board
- Faster information retrieval (no explanatory text to filter)
- Rules/explanations remain accessible when needed

**Templates:**
- `templates/KANBAN_BOARD_TEMPLATE.md` - Board template (structured info only)
- `templates/KANBAN_BOARD_GUIDE_TEMPLATE.md` - Guide template (rules/explanations)

**Usage:**
- Use `kboard.md` for quick scanning of active tasks and epic status
- Reference `kanban-board-guide.md` when you need rules, explanations, or how-to content
- Both documents cross-reference each other

### Forensic Traceability

```yaml
forensic_markers:
  purpose: "Link work items to specific code releases"
  format: "vRC.EPIC.STORY.TASK+BUILD"
  location: "Story Checklist in Epic document"

  examples:
    completed_story: "- [x] **Story 33** ✅ COMPLETE (v0.4.33.3+1)"
    in_progress_story: "- [ ] **Story 35** ⏳ IN PROGRESS (v0.4.35.2+2, Tasks 1-2 complete)"
    incomplete_story: "- [ ] **Story 14** (not started)"

  benefits:
    - Audit trail of work completion
    - Impact analysis (what changed in this version?)
    - Traceability (which code implements this story?)
    - Accountability (when was this completed?)
```

### Single Source of Truth

```yaml
single_source_principle:
  rule: "Story Checklist is the ONLY place for forensic markers"

  prohibited:
    - "Progress Summary sections"
    - "Story Completion Summary sections"
    - "Duplicate status tracking"

  rationale:
    - Reduces maintenance burden
    - Prevents inconsistencies
    - Simplifies updates
    - Clear ownership of information

  enforcement:
    - Templates do not include duplicate sections
    - Policy explicitly prohibits duplicates
    - Release Workflow updates Story Checklist only
```

---

## 🔧 Implementation Guide

### Phase 1: Setup (Day 1)

```yaml
tasks:
  - action: "Copy package files to project"
    time: "10 minutes"

  - action: "Customize file paths in policy"
    time: "15 minutes"
    files:
      - policies/kanban-governance-policy.md

  - action: "Review templates and examples"
    time: "30 minutes"
    files:
      - templates/EPIC_TEMPLATE.md
      - templates/STORY_TEMPLATE.md
      - examples/Epic-4-Example.md
      - examples/Story-33-Example.md
```

### Phase 2: First Epic (Day 1-2)

```yaml
tasks:
  - action: "Create Epic document"
    template: "templates/EPIC_TEMPLATE.md"
    steps:
      1: "Copy template"
      2: "Rename to Epic-{N}-{Name}.md"
      3: "Fill in metadata (status, priority, dates)"
      4: "Write overview and goals"
      5: "List all stories in Story Checklist"
      6: "Write detailed story sections"
      7: "Document dependencies and risks"
    time: "2-4 hours"

  - action: "Create Story documents"
    template: "templates/STORY_TEMPLATE.md"
    steps:
      1: "For each story, copy template"
      2: "Rename to Story-{N}-{Name}.md"
      3: "Fill in metadata"
      4: "Write user story statement"
      5: "List all tasks in Task Checklist"
      6: "Write detailed task descriptions"
      7: "Define acceptance criteria"
      8: "Document dependencies"
    time: "1-2 hours per story"
```

### Phase 3: Integration (Day 2-3)

```yaml
numbering_versioning_integration:
  required_if: "Using semantic versioning"
  prerequisite: "Install Numbering & Versioning package"
  steps:
    1:
      action: "Adopt version schema"
      schema: "RC.EPIC.STORY.TASK+BUILD"
      example: "0.4.33.1+1"
    2:
      action: "Add version markers to Story Checklist"
      format: "✅ COMPLETE (v0.4.33.3+1)"
    3:
      action: "Update Epic header with version range"
      format: "Last updated: 2025-12-02 (v0.4.33.3+1)"
  see: "integration/numbering-versioning-integration.md"

workflow_management_integration:
  required_if: "Using Release Workflow (RW)"
  prerequisite: "Install Workflow Management package"
  steps:
    1:
      action: "Configure RW Step 4"
      purpose: "Automatically update Kanban docs"
      updates:
        - "Epic header metadata"
        - "Story Checklist"
        - "Detailed story sections (ALL sections)"
    2:
      action: "Configure RW Step 5"
      purpose: "Update Kanban board (if exists)"
    3:
      action: "Test RW execution"
      trigger: "RW with task id in same message (FR-060), e.g. RW E1S01T01"
      verify: "Kanban docs update automatically"
  see: "integration/workflow-management-integration.md"
```

### Phase 4: Team Adoption (Week 1-2)

```yaml
tasks:
  - action: "Train team on Kanban system"
    topics:
      - Epic/Story/Task hierarchy
      - How to create Epics and Stories
      - How to use templates
      - How to update Story Checklist
      - How to add forensic markers
    time: "1-2 hours"

  - action: "Establish rituals"
    rituals:
      - Daily: Update task status
      - Weekly: Update Story Checklist
      - Sprint end: Review Epic progress
      - Release: Add forensic markers

  - action: "Monitor adoption"
    metrics:
      - Epics created
      - Stories completed
      - Forensic markers added
      - Documentation consistency
```

---

## 🏗️ KB (Knowledge Base) Structure

### Recommended Directory Structure

```yaml
project_root/
  docs/:                                    # Knowledge Base root
    project-management/:                    # Project Management
      epics/:
        overview/:                        # Epic documents
          Epic 1/:
            Epic-1.md
          Epic 2/:
            Epic-2.md
        templates/:
          EPIC_TEMPLATE.md

      kanban/:                            # Story documents (detailed)
        Epic 1/:
          Story-1-Feature-Name.md
          Story-2-Feature-Name.md
        Epic 2/:
          Story-1-Feature-Name.md

      stories/:
        templates/:
          STORY_TEMPLATE.md

      rituals/:
        policy/:
          kanban-governance-policy.md
        how-to/:
          portfolio-kanban-alignment-playbook.md
```

### Alternative Structures

```yaml
flat_structure:
  description: "All Epics and Stories in single directory"
  structure: |
    docs/kanban/
      Epic-1-Name.md
      Epic-2-Name.md
      Story-1-Name.md
      Story-2-Name.md
  pros:
    - Simple
    - Easy to navigate
  cons:
    - Can become cluttered with many stories

hierarchical_structure:
  description: "Epics contain Stories (nested)"
  structure: |
    docs/epics/
      Epic-1-Name/
        Epic-1.md
        Story-1-Name.md
        Story-2-Name.md
      Epic-2-Name/
        Epic-2.md
        Story-1-Name.md
  pros:
    - Clear Epic-Story relationship
    - Organized by Epic
  cons:
    - Deeper nesting
    - Cross-epic navigation harder

hybrid_structure:
  description: "Epics in one directory, Stories in another (Confidentia approach)"
  structure: |
    docs/project-management/
      epics/overview/Epic 1/Epic-1.md
      kanban/Epic 1/Story-1-Name.md
  pros:
    - Clear separation of concerns
    - Epic overviews separate from detailed stories
    - Scales well
  cons:
    - Requires understanding of structure
```

### KB Document Types

```yaml
document_types:
  epic_overview:
    location: "docs/project-management/epics/overview/Epic {N}/"
    purpose: "High-level Epic overview with Story Checklist"
    audience: "Product owners, stakeholders, developers"
    update_frequency: "Every release (via RW Step 4)"

  story_detail:
    location: "docs/project-management/kanban/Epic {N}/"
    purpose: "Detailed story with tasks and acceptance criteria"
    audience: "Developers, QA, product owners"
    update_frequency: "Throughout story lifecycle"

  policy:
    location: "docs/project-management/rituals/policy/"
    purpose: "Governance rules and standards"
    audience: "All team members"
    update_frequency: "Rarely (only when rules change)"

  guides:
    location: "docs/project-management/rituals/how-to/"
    purpose: "Practical how-to guides"
    audience: "Team members learning the system"
    update_frequency: "As needed (process improvements)"
```

---

## 🔗 Integration: Numbering & Versioning

### Overview

```yaml
integration_type: "Complementary"
relationship: "Kanban tracks work items, Versioning tracks releases"
required_together: true
compatibility: "v2.0.0"
```

### Version Schema

```yaml
schema:
  format: "RC.EPIC.STORY.TASK+BUILD"
  components:
    RC: "Release Candidate (0 = development, 1+ = release candidate)"
    EPIC: "Epic number"
    STORY: "Story number within epic"
    TASK: "Task number within story"
    BUILD: "Build number (increments per release within task)"

  examples:
    - version: "0.4.33.1+1"
      meaning: "RC 0, Epic 4, Story 33, Task 1, Build 1"
    - version: "0.4.33.3+2"
      meaning: "RC 0, Epic 4, Story 33, Task 3, Build 2"
```

### Integration Steps

```yaml
step_1:
  action: "Install Numbering & Versioning package"
  location: "temp/numbering & versioning/"

step_2:
  action: "Adopt version schema"
  schema: "RC.EPIC.STORY.TASK+BUILD"
  version_file: "src/yourproject/version.py"

step_3:
  action: "Add forensic markers to Story Checklist"
  format: "- [x] **Story 33** ✅ COMPLETE (v0.4.33.3+1)"
  location: "Epic document, Story Checklist section"

step_4:
  action: "Add forensic markers to Task Checklist"
  format: "- [x] **E4:S33:T01** ✅ COMPLETE (v0.4.33.1+1)"
  location: "Story document, Task Checklist section"

step_5:
  action: "Update Epic header with version"
  format: "**Last updated:** 2025-12-02 (v0.4.33.3+1 – Story 33 complete)"
  location: "Epic document, header metadata"
```

### Forensic Marker Patterns

```yaml
patterns:
  completed_story:
    markdown: "- [x] **Story 33 – Parent Inclusivity** ✅ COMPLETE (v0.4.33.3+1)"
    components:
      checkbox: "[x]"
      story_name: "**Story 33 – Parent Inclusivity**"
      status: "✅ COMPLETE"
      version: "(v0.4.33.3+1)"

  in_progress_story:
    markdown: "- [ ] **Story 35 – System Accessibility** ⏳ IN PROGRESS (v0.4.35.2+2, Tasks 1-2 complete)"
    components:
      checkbox: "[ ]"
      story_name: "**Story 35 – System Accessibility**"
      status: "⏳ IN PROGRESS"
      version: "(v0.4.35.2+2, Tasks 1-2 complete)"

  completed_task:
    markdown: "- [x] **E4:S33:T01 – Audit parent templates** ✅ COMPLETE (v0.4.33.1+1)"
    components:
      checkbox: "[x]"
      task_id: "**E4:S33:T01**"
      task_name: "– Audit parent templates"
      status: "✅ COMPLETE"
      version: "(v0.4.33.1+1)"
```

### Benefits of Integration

```yaml
benefits:
  traceability:
    description: "Every work item links to specific code release"
    use_cases:
      - "What work was completed in v0.4.33.3+1?"
      - "When was Story 33 completed?"
      - "Which version implements parent accessibility?"

  impact_analysis:
    description: "Understand scope of changes in a release"
    use_cases:
      - "What features are in this release?"
      - "Which stories are affected by this bug?"
      - "What work items need regression testing?"

  parallel_development:
    description: "Multiple epics can develop simultaneously"
    use_cases:
      - "Epic 4 (v0.4.x.x+x) and Epic 12 (v0.12.x.x+x) in parallel"
      - "Clear version streams per epic"
      - "No version conflicts"
```

---

## 🤖 Integration: Agent-Driven Workflow Management

### Overview

```yaml
integration_type: "Dependent"
relationship: "Workflow Management automates Kanban updates"
required_together: "Recommended (for automation)"
compatibility: "v2.0.0"
```

### Release Workflow Integration

```yaml
release_workflow:
  trigger: "User sends RW/rw with mandatory E…S…T… in same message (FR-060)"

  step_4:
    name: "Update KB Epic Docs"
    purpose: "Automatically update Kanban documentation"
    updates:
      - location: "Epic header metadata"
        field: "Last updated"
        format: "2025-12-02 (v0.4.33.3+1 – Story 33 complete)"

      - location: "Story Checklist"
        field: "Story status and version"
        format: "- [x] **Story 33** ✅ COMPLETE (v0.4.33.3+1)"

      - location: "Detailed story sections"
        field: "Status, Last updated, task checkboxes"
        requirement: "ALL sections must be updated (not just checklist)"

    systematic_process:
      1: "Read FULL Epic-{epic}.md file"
      2: "Read authoritative Story-{N}-{Name}.md file"
      3: "Find ALL sections referencing story/task (grep/search)"
      4: "Update ALL of them to match Story file state"
      5: "Validate consistency across all sections"

  step_5:
    name: "Update README"
    purpose: "Update version badge and latest release"
    optional: true
```

### Integration Steps

```yaml
step_1:
  action: "Install Workflow Management package"
  location: "temp/workflow-mgt/"

step_2:
  action: "Configure .cursorrules with RW trigger"
  file: ".cursorrules"
  section: "🚀 RELEASE WORKFLOW (RW) TRIGGER"

step_3:
  action: "Configure RW Step 4 file paths"
  paths_to_configure:
    epic_docs: "docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md"
    story_docs: "docs/project-management/kanban/Epic {epic}/Story-{N}-{Name}.md"

step_4:
  action: "Test RW execution"
  test_steps:
    1: "Make code changes"
    2: "Type 'RW' in AI assistant"
    3: "Verify all 10 steps execute"
    4: "Verify Kanban docs updated (header, checklist, detailed sections)"
    5: "Verify forensic markers added"
```

### "ALL Sections" Requirement

```yaml
all_sections_requirement:
  introduced_in: "VWMP v2.0.0"
  purpose: "Prevent documentation inconsistencies"

  requirement: |
    When RW Step 4 updates Epic docs, it MUST update:
    - Header metadata (Last updated field)
    - Story Checklist (status and version marker)
    - Detailed story sections (Status, Last updated, task checkboxes)
    - Any other references to the story/task

  systematic_process:
    1: "Read the FULL Epic-{epic}.md file"
    2: "Read the authoritative Story-{N}-{Name}.md file"
    3: "Find ALL sections referencing the story/task (grep/search)"
    4: "Update ALL of them to match Story file's state"
    5: "Validate consistency: header, checklist, and detailed sections must all match"

  enforcement:
    - ".cursorrules explicitly requires 'ALL sections'"
    - "Release Workflow documentation emphasizes systematic process"
    - "Agents must follow ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern"
```

### Atomicity & Blocked Protocol

```yaml
atomicity:
  requirement: "RW must complete all 10 steps OR stop with clear 'RW BLOCKED' message"
  accessibility_critical: true

  agent_must:
    - "Complete all 10 steps for the target version"
    - "OR stop at specific step with clear explanation"
    - "State step number and name (e.g., 'Step 7: Run Validators')"
    - "State reason blocked (e.g., wrong branch, missing tool)"
    - "State exact actions user must take to unblock"
    - "State that RW is NOT complete until actions taken"

  agent_must_not:
    - "Silently stop mid-workflow after modifying files"
    - "Start new RW while previous RW TODOs are pending/in_progress"

  if_abandoned:
    - "Mark remaining rw-step-* TODOs as cancelled"
    - "Output short 'RW ABORTED' summary"
    - "State current state and next steps"
```

---

## 📚 Usage Scenarios

### Scenario 1: Starting New Epic

```yaml
scenario: "Create and track a new Epic"
steps:
  1:
    action: "Create Epic document"
    template: "templates/EPIC_TEMPLATE.md"
    output: "Epic-8-Mobile-App.md"  # Note: Canonical epics are 1-7, so new epics start at 8

  2:
    action: "Define stories"
    count: "5-10 stories (initial)"
    add_to: "Story Checklist"
    format: "- [ ] **Story 1 – User Login**"

  3:
    action: "Create Story documents"
    template: "templates/STORY_TEMPLATE.md"
    output: "Story-1-User-Login.md, Story-2-User-Profile.md, ..."

  4:
    action: "Track progress"
    method: "Update Story Checklist as stories complete"
    add_markers: "✅ COMPLETE (v0.5.1.3+1)"
```

### Scenario 2: Completing a Story

```yaml
scenario: "Mark story as complete with forensic marker"
steps:
  1:
    action: "Complete all tasks"
    location: "Story document"
    format: "- [x] **E4:S33:T01** ✅ COMPLETE (v0.4.33.1+1)"

  2:
    action: "Update Story status"
    location: "Story document header"
    fields:
      status: "COMPLETE"
      completed_date: "2025-12-02"
      version: "v0.4.33.3+1"

  3:
    action: "Update Epic Story Checklist"
    location: "Epic document, Story Checklist section"
    format: "- [x] **Story 33** ✅ COMPLETE (v0.4.33.3+1)"

  4:
    action: "Update Epic header"
    location: "Epic document, header metadata"
    format: "**Last updated:** 2025-12-02 (v0.4.33.3+1 – Story 33 complete)"

  5_automated:
    action: "Use Release Workflow"
    trigger: "RW <task_id> in same message (FR-060)"
    result: "Steps 3-4 happen automatically (ALL sections updated)"
```

### Scenario 3: Tracking In-Progress Work

```yaml
scenario: "Show story with partial completion"
formats:
  multiple_tasks_complete:
    markdown: "- [ ] **Story 33** ⏳ IN PROGRESS (v0.4.33.2+1, Tasks 1-2 complete)"
    use_when: "Some tasks complete, more remaining"

  specific_task_pending:
    markdown: "- [ ] **Story 35** ⏳ IN PROGRESS (v0.4.35.2+2, Tasks 1-2 complete, Task 3 pending)"
    use_when: "Need to specify which task is pending"

  just_started:
    markdown: "- [ ] **Story 14** ⏳ IN PROGRESS (Task 1 started)"
    use_when: "Story just started, no versions yet"
```

---

## 🎯 Best Practices

### Epic Management

```yaml
best_practices:
  scope:
    rule: "Keep Epics focused"
    typical_size: "3-15 stories"
    rationale: "Too large = hard to manage, too small = overhead"

  goals:
    rule: "Define clear success criteria"
    format: "SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)"

  dependencies:
    rule: "Document cross-epic dependencies"
    location: "Epic document, Dependencies section"

  updates:
    rule: "Update 'Last updated' field frequently"
    frequency: "Every release (via RW) or manual update"

  story_checklist:
    rule: "Keep Story Checklist current"
    frequency: "Every story completion"
    format: "Single source of truth - no duplicates"
```

### Story Management

```yaml
best_practices:
  user_centric:
    rule: "Write from user perspective"
    format: "As a [role], I want [feature], so that [benefit]"
    example: "As a parent, I want to view my child's progress, so that I can support their learning"

  acceptance_criteria:
    rule: "Define 'done' explicitly"
    format: "Testable, specific criteria"
    example: "- [ ] Parents can view overall progress with RAG status"

  task_breakdown:
    rule: "Break into concrete tasks"
    typical_size: "1-5 tasks per story"
    task_size: "1-3 days of work each"

  version_markers:
    rule: "Add version to completed tasks"
    format: "- [x] **E4:S33:T01** ✅ COMPLETE (v0.4.33.1+1)"
    timing: "Immediately after task completion (via RW)"

  dependencies:
    rule: "Document task-level dependencies"
    location: "Story document, Parallel Development Dependencies section"
```

### Task Management

```yaml
best_practices:
  atomic:
    rule: "Each task independently completable"
    rationale: "Enables parallel work and clear progress tracking"

  concrete:
    rule: "Clear deliverables"
    format: "Specific, actionable description"
    example: "Audit parent templates for WCAG 2.2 AA compliance"

  estimable:
    rule: "1-3 days of work (typical)"
    rationale: "Larger tasks should be broken down"

  testable:
    rule: "Can verify completion objectively"
    format: "Acceptance criteria or definition of done"

  versioned:
    rule: "Track completion with version marker"
    format: "✅ COMPLETE (v0.4.33.1+1)"
    timing: "Via Release Workflow"
```

### Documentation Consistency

```yaml
best_practices:
  single_source:
    rule: "Story Checklist is single source of truth"
    prohibited:
      - "Progress Summary sections"
      - "Story Completion Summary sections"
      - "Duplicate status tracking"
    rationale: "Reduces maintenance, prevents inconsistencies"

  all_sections:
    rule: "Update ALL sections when using RW"
    sections:
      - "Header metadata"
      - "Story Checklist"
      - "Detailed story sections"
    systematic_process:
      1: "Read full Epic file"
      2: "Read authoritative Story file"
      3: "Find ALL references"
      4: "Update ALL of them"
      5: "Validate consistency"

  forensic_markers:
    rule: "Always include version markers on completed work"
    format: "✅ COMPLETE (v0.4.33.3+1)"
    location: "Story Checklist and Task Checklist"
```

---

## 🔍 Customization Guide

### Adjust Work Item Hierarchy

```yaml
customization:
  scenario: "Different terminology"

  example_1:
    current: ["Epic", "Story", "Task"]
    new: ["Feature", "User Story", "Subtask"]
    steps:
      1: "Find/replace in all templates"
      2: "Update policy document"
      3: "Update examples"
      4: "Update README"

  example_2:
    current: ["Epic", "Story", "Task"]
    new: ["Theme", "Epic", "Story"]
    steps:
      1: "Add Theme level above Epic"
      2: "Keep Epic/Story structure"
      3: "Update version schema if needed"
      4: "Update templates and policy"
```

### Adjust Version Schema

```yaml
customization:
  scenario: "Different version format"

  option_1:
    schema: "RC.EPIC.STORY+BUILD (no tasks)"
    format: "0.4.33+1"
    steps:
      1: "Update policy to reflect schema"
      2: "Update templates"
      3: "Update forensic marker examples"
      4: "Update integration guide"

  option_2:
    schema: "MAJOR.MINOR.PATCH (SemVer)"
    format: "1.4.33"
    mapping:
      epics: "MINOR versions"
      stories: "PATCH versions"
    steps:
      1: "Update policy"
      2: "Update templates"
      3: "Map Kanban to SemVer"
```

### Adjust Documentation Structure

```yaml
customization:
  scenario: "Different KB structure"

  flat_structure:
    structure: "All docs in single directory"
    steps:
      1: "Update policy with new paths"
      2: "Update RW Step 4 paths"
      3: "Update templates with new paths"

  custom_structure:
    structure: "Your own directory organization"
    steps:
      1: "Document your structure"
      2: "Update all path references"
      3: "Update RW configuration"
      4: "Test RW updates docs correctly"
```

---

## ✅ Verification Checklist

```yaml
after_installation:
  - item: "Kanban governance policy copied and customized"
    verify: "File exists and paths are correct"

  - item: "Epic template copied and customized"
    verify: "Template matches your terminology"

  - item: "Story template copied and customized"
    verify: "Template matches your structure"

  - item: "Examples reviewed"
    verify: "Understand Epic and Story structure"

  - item: "First Epic created"
    verify: "Epic document exists with Story Checklist"

  - item: "First Story created"
    verify: "Story document exists with Task Checklist"

  - item: "Story Checklist is single source"
    verify: "No duplicate progress sections"

  - item: "Forensic markers used"
    verify: "Completed stories have version markers"

  - item: "Integration with versioning (if applicable)"
    verify: "Version markers follow RC.EPIC.STORY.TASK+BUILD schema"

  - item: "Integration with workflow (if applicable)"
    verify: "RW Step 4 updates Kanban docs automatically"
```

---

## 🆘 Troubleshooting

### Issue: I Manually Copied Epics and Got ai-dev-kit's Actual Kanban

**Problem:** You manually copied epics from `docs/project-management/kanban/epics/` and received ai-dev-kit's project-specific epics instead of canonical templates.

**Symptoms:**
- Epic 1 is named "AI Dev Kit Core" instead of your project name
- You have ai-dev-kit's project-specific epics (5-9)
- Epics contain ai-dev-kit's actual stories and tasks

**Solution:**
```bash
# 1. Remove the incorrectly copied epics
rm -rf docs/project-management/kanban/epics/Epic-*

# 2. Run the installer (the correct method)
python3 scripts/install_kanban_framework.py --mode fresh

# The installer will:
# - Install canonical epic templates (not ai-dev-kit's actual epics)
# - Contextualize Epic 1 with your project name
# - Only install canonical core epics (1-8, 10, 18, 22, 23)
# - Exclude ai-dev-kit project-specific epics
```

**Prevention:**
- ✅ Always use `install_kanban_framework.py` - it's the ONLY supported installation method
- ❌ Never manually copy from `docs/project-management/kanban/epics/`
- ✅ The installer automatically uses templates from `templates/epics/`

### Story Checklist Out of Sync

```yaml
problem: "Story Checklist shows different status than detailed story section"
cause: "Manual updates not applied to all sections"
solution:
  manual:
    1: "Identify authoritative source (usually Story file)"
    2: "Update ALL sections in Epic file to match"
    3: "Verify header, checklist, and detailed sections all match"
  automated:
    1: "Use Release Workflow Step 4"
    2: "RW automatically updates ALL sections"
    3: "Follows systematic process"
```

### Missing Forensic Markers

```yaml
problem: "Completed stories lack version markers"
cause: "Manual completion without RW, or RW not adding markers"
solution:
  1: "Review Story file for completion version"
  2: "Add version marker to Story Checklist"
  3: "Format: '✅ COMPLETE (v0.4.33.3+1)'"
  4: "Use RW for future completions (automatic markers)"
```

### Duplicate Progress Sections

```yaml
problem: "Epic has both Story Checklist and 'Progress Summary'"
cause: "Old template or manual addition"
solution:
  1: "Remove 'Progress Summary' section"
  2: "Keep only Story Checklist"
  3: "Update templates to prevent reintroduction"
  4: "Update policy to prohibit duplicates"
```

---

## 🔄 Consumption Pattern for Other Projects

**CRITICAL:** This framework follows a **copy, don't reference** pattern. Projects must copy the framework files into their own repository and customize them, rather than referencing or linking to `ai-dev-kit`.

### Why Copy, Don't Reference?

```yaml
reasons:
  independence:
    - "Your project needs its own version of policies and templates"
    - "You can customize paths, names, and project-specific details"
    - "You're not dependent on ai-dev-kit repository structure"
  
  customization:
    - "Each project has different KB structures and paths"
    - "Epic/Story/Task numbering may differ"
    - "Terminology may vary (Epic vs Theme, etc.)"
  
  ownership:
    - "Your project owns its Kanban implementation"
    - "You can evolve it independently"
    - "You maintain control over your documentation"
```

### What to Copy

**Required Files:**
```bash
# Core policy (MUST copy)
policies/kanban-governance-policy.md

# Templates (MUST copy)
templates/EPIC_TEMPLATE.md
templates/STORY_TEMPLATE.md
templates/KANBAN_BOARD_TEMPLATE.md
templates/KANBAN_BOARD_GUIDE_TEMPLATE.md

# Integration guides (RECOMMENDED)
integration/numbering-versioning-integration.md
integration/workflow-management-integration.md
```

**Optional Files:**
```bash
# Examples (helpful for reference)
examples/Epic-4-Example.md
examples/Story-33-Example.md

# Guides (helpful for alignment)
guides/portfolio-kanban-alignment-playbook.md
```

### Customization Boundaries

**✅ CAN Customize:**
- **File paths:** Update all path references to match your KB structure
  - Example: `docs/project-management/kanban/epics/Epic-X/Epic-X.md` → `docs/projects/epics/Epic-X/Epic-X.md`
- **Project names:** Replace "Confidentia", "ai-dev-kit", etc. with your project name
- **Terminology:** Adjust work item names (Epic/Story/Task vs Theme/Epic/Story)
- **Epic ranges:** Define your own Epic numbering strategy
- **Branch conventions:** Use your own branch naming (e.g., `epic/X-slug` vs `feature/X`)
- **Board structure:** Adapt columns and workflow to your needs

**❌ MUST NOT Customize:**
- **Operational Principles:** All 9 principles must remain intact:
  - Atomic Release Workflow Behaviour
  - "ALL Sections" Update Requirement
  - Accessibility Constraints
  - Forensic Marker Standardization
  - Consistency Requirements
  - Review Schedules
  - Maintenance Responsibilities
  - Escalation Procedures
  - Mandatory TODO Tracking
- **Forensic Marker Format:** Must use `✅ COMPLETE (vRC.E.S.T+B)` format
- **Story Checklist as SoT:** Story Checklist must remain single source of truth
- **Governance Rules:** Core governance rules (traceability, gate conditions, numbering discipline)
- **Version Schema:** If using `RC.EPIC.STORY.TASK+BUILD`, schema structure must match

### Update Process

**When to Update:**
- Framework adds new operational principles
- Framework enhances governance policy
- Framework updates templates with new requirements
- Framework fixes critical issues

**How to Update:**

```yaml
update_workflow:
  step_1:
    action: "Review changes in ai-dev-kit"
    command: |
      git clone https://github.com/earlution/ai-dev-kit.git
      cd ai-dev-kit
      git log --oneline packages/frameworks/kanban/
  
  step_2:
    action: "Compare with your copied policies"
    command: |
      diff -u your-project/docs/kanban/policies/kanban-governance-policy.md \
               ai-dev-kit/packages/frameworks/kanban/policies/kanban-governance-policy.md
  
  step_3:
    action: "Selectively merge relevant changes"
    notes:
      - "Review each change carefully"
      - "Preserve your customizations (paths, names, Epic ranges)"
      - "Merge new operational principles"
      - "Update templates if framework templates changed"
      - "Document what you merged and why"
  
  step_4:
    action: "Test your updated implementation"
    checks:
      - "Verify templates still work with your structure"
      - "Verify integration guides still apply"
      - "Verify governance principles are intact"
```

**Manual Merge Process:**
1. Read the framework change carefully
2. Identify if it's a customization (paths, names) or a principle (governance, operational rules)
3. If it's a principle, merge it into your policy
4. If it's a customization, adapt it to your project structure
5. Document the merge in your policy's change history

### Single Source of Truth Relationship

**`ai-dev-kit` is the canonical source of truth (SoT) for:**
- Kanban governance policy (all 9 operational principles)
- Epic and Story templates (structure and requirements)
- Integration patterns (with versioning and workflows)
- Best practices and patterns
- Operational principles (atomicity, "ALL sections", accessibility, etc.)

**Your project's copied policies are:**
- **Adaptations** of the framework for your specific context
- **Customized** with your paths, names, Epic ranges, and terminology
- **Independent** - can evolve separately from framework
- **Aligned** - should reference framework as source of truth

**Documentation Pattern:**
```markdown
# Your Project Kanban Governance Policy

**Based on:** ai-dev-kit `packages/frameworks/kanban/policies/kanban-governance-policy.md`  
**Last Synced:** 2025-12-02  
**Customizations:** 
  - Epic paths: `docs/projects/epics/` (vs `docs/project-management/kanban/epics/`)
  - Epic numbering: Starts at Epic 1 (no legacy range)
  - Branch convention: `feature/epic-X` (vs `epic/X-slug`)

[Your customized content here]
```

### Implementation Steps

1. **Copy Framework Files:**
   ```bash
   # Create your Kanban directory
   mkdir -p your-project/docs/kanban/{policies,templates,integration}
   
   # Copy core files
   cp ai-dev-kit/packages/frameworks/kanban/policies/kanban-governance-policy.md \
      your-project/docs/kanban/policies/
   cp ai-dev-kit/packages/frameworks/kanban/templates/*.md \
      your-project/docs/kanban/templates/
   cp ai-dev-kit/packages/frameworks/kanban/integration/*.md \
      your-project/docs/kanban/integration/
   ```

2. **Customize for Your Project:**
   - Update all file paths in `kanban-governance-policy.md`
   - Update project names and terminology
   - Update Epic/Story/Task numbering examples
   - Update branch conventions
   - Update board structure if different

3. **Create Your First Epic:**
   - Use `templates/EPIC_TEMPLATE.md` as starting point
   - Follow your project's naming convention
   - Place in your KB structure

4. **Create Your First Story:**
   - Use `templates/STORY_TEMPLATE.md` as starting point
   - Follow your project's naming convention
   - Link to Epic document

5. **Integrate with Versioning (if using):**
   - Follow `integration/numbering-versioning-integration.md`
   - Ensure version schema matches your project
   - Set up forensic markers

6. **Integrate with Workflow Management (if using):**
   - Follow `integration/workflow-management-integration.md`
   - Configure Release Workflow Step 4 paths
   - Test automatic Kanban updates

7. **Document Your Customizations:**
   - Create a "Customizations" section in your policy
   - Document what you changed and why
   - Reference framework as source of truth
   - Include last sync date

### Example: New Project Setup

**Scenario:** Setting up Kanban for a new project called "myapp"

1. **Copy framework:**
   ```bash
   mkdir -p myapp/docs/kanban/{policies,templates,integration}
   cp -r ai-dev-kit/packages/frameworks/kanban/* myapp/docs/kanban/
   ```

2. **Customize `kanban-governance-policy.md`:**
   - Change paths: `docs/project-management/kanban/` → `docs/kanban/`
   - Change Epic paths: `epics/Epic-X/Epic-X.md` → `epics/Epic-X/Epic-X.md` (if same structure)
   - Change branch convention: `epic/X-slug` → `feature/epic-X`
   - Change examples: Use `E1:S1:T1` instead of `E20:S11:T15`

3. **Customize templates:**
   - Update path references in template notes
   - Update examples to match your structure
   - Keep all operational principle reminders intact

4. **Create first Epic:**
   ```bash
   cp myapp/docs/kanban/templates/EPIC_TEMPLATE.md \
      myapp/docs/kanban/epics/Epic-1/Epic-1.md
   # Edit Epic-1.md with your project details
   ```

5. **Create first Story:**
   ```bash
   mkdir -p myapp/docs/kanban/epics/Epic-1
   cp myapp/docs/kanban/templates/STORY_TEMPLATE.md \
      myapp/docs/kanban/epics/Epic-1/Story-001.md
   # Edit Story-001.md with your project details
   ```

6. **Document customizations:**
   ```markdown
   # MyApp Kanban Governance Policy
   
   **Based on:** ai-dev-kit `packages/frameworks/kanban/policies/kanban-governance-policy.md`  
   **Last Synced:** 2025-12-02  
   **Customizations:**
     - Paths: `docs/kanban/` (vs `docs/project-management/kanban/`)
     - Branch: `feature/epic-X` (vs `epic/X-slug`)
     - Epic numbering: Starts at Epic 1
   ```

### Key Principles

1. **Copy, Don't Reference:** Always copy files into your project, never link to `ai-dev-kit`
2. **Preserve Principles:** Keep all operational principles intact, customize only paths/names
3. **Document Customizations:** Always document what you changed and why
4. **Reference SoT:** Always reference `ai-dev-kit` as the canonical source of truth
5. **Regular Sync:** Periodically review framework updates and merge relevant changes

---

## 📞 Support and Resources

### Documentation

```yaml
included_docs:
  - file: "policies/kanban-governance-policy.md"
    purpose: "Complete governance rules"

  - file: "templates/EPIC_TEMPLATE.md"
    purpose: "Epic document template"

  - file: "templates/STORY_TEMPLATE.md"
    purpose: "Story document template"

  - file: "templates/KANBAN_BOARD_TEMPLATE.md"
    purpose: "Kanban board template (structured information only)"
  - file: "templates/KANBAN_BOARD_GUIDE_TEMPLATE.md"
    purpose: "Kanban board guide template (rules, explanations, and how-to content)"

  - file: "templates/CANONICAL_STORIES.md"
    purpose: "Reusable canonical story patterns (Bug Reports, Feature Requests)"
  - file: "templates/CANONICAL_EPICS.md"
    purpose: "Canonical epic definitions (Epics 1-7: Core, Workflow, Versioning, Kanban, FR Implementation, BR Implementation, UXR)"
  - file: "templates/CANONICAL_STORIES_FR_BR.md"
    purpose: "Canonical story patterns for Epic 5 (FR Implementation) and Epic 6 (BR Implementation)"
  - file: "templates/UXR_TEMPLATE.md"
    purpose: "User Experience Research (UXR) template for UX research reports"

  - file: "examples/Epic-4-Example.md"
    purpose: "Real Epic with 37 stories"

  - file: "examples/Story-33-Example.md"
    purpose: "Real Story with 3 tasks"

  - file: "examples/Epic-5-FR-Implementation-Example.md"
    purpose: "Example Epic 5 (FR Implementation) demonstrating canonical epic structure"

  - file: "examples/Epic-6-BR-Implementation-Example.md"
    purpose: "Example Epic 6 (BR Implementation) demonstrating canonical epic structure"

  - file: "examples/Epic-7-Codebase-Maintenance-Example.md"
    purpose: "Example Epic 7 (UXR - User Experience Research) demonstrating canonical epic structure (Note: Epic 7 is now UXR, Codebase Maintenance moved to Epic 8)"

  - file: "guides/portfolio-kanban-alignment-playbook.md"
    purpose: "Alignment guide"
  - file: "FR_BR_UXR_FB_GITHUB_SUBMISSION_GUIDE.md"
    purpose: "Guide for submitting FR, BR, UXR, and UAT Reports via GitHub Issues (UAT requires empirical evidence)"

  - file: "integration/numbering-versioning-integration.md"
    purpose: "Version integration guide"

  - file: "integration/workflow-management-integration.md"
    purpose: "Workflow integration guide"
```

### Related Packages

```yaml
related_packages:
  numbering_versioning:
    location: "temp/numbering & versioning/"
    relationship: "Complementary - provides version schema"
    required: "Yes (for forensic traceability)"

  workflow_management:
    location: "temp/workflow-mgt/"
    relationship: "Dependent - automates Kanban updates"
    required: "Recommended (for automation)"
```

---

## 🔄 Version History

```yaml
versions:
  v1.0.0:
    date: "2025-12-02"
    changes:
      - "Initial package release"
      - "Kanban governance policy"
      - "Epic and Story templates"
      - "Real-world examples (Epic 4, Story 33)"
      - "Integration with Numbering & Versioning v2.0.0"
      - "Integration with Workflow Management v2.0.0"
      - "Single source of truth principle"
      - "Comprehensive machine-readable README"
```

---

## 📦 Package Metadata

```yaml
metadata:
  package_name: "Kanban System Implementation Package (Complete)"
  version: "2.2.0"
  last_updated: "2026-04-13"
  source_project: "Confidentia (Epic 4)"

  compatibility:
    numbering_versioning: "v2.0.0"
    workflow_management: "v2.0.0"

  license: "See source project license"

  files_included: 11
  total_lines: "~2500 lines"

  components:
    policies: 1
    templates: 2
    examples: 2
    guides: 1
    integration_docs: 2
    readme: 1
```

---

**Ready to implement a complete, forensic, traceable Kanban system with full KB documentation structure!** 🚀

**For complete workflow automation, use all three packages together:**
1. **Kanban Package** (`temp/kanban-complete/`) - Work item tracking
2. **Numbering & Versioning Package** (`temp/numbering & versioning/`) - Version schema
3. **Workflow Management Package** (`temp/workflow-mgt/`) - Automated workflows
