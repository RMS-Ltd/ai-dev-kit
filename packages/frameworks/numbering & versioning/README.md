---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:54Z
expires_at: null
housekeeping_policy: keep
---

# Numbering & Versioning Policies

**Portable Package:** This directory contains all policy documents relating to numbering and versioning strategies. These documents can be adapted for use in other projects.

**Source:** Originally developed for the Confidentia project, refined and enhanced in fynd.deals (Epic 15, Story 1).  
**Last Updated:** 2026-03-30  
**Version:** 2.0.0 (includes Epic renumbering strategy, epic branch workflow)

**📦 Dependency Architecture (Epic 6):** This framework is transitioning from copy-paste to **dependency-based installation** with automatic updates. See [Framework Dependency Architecture](../../../docs/architecture/standards-and-adrs/framework-dependency-architecture.md) for details on installing as a Git submodule, via CLI tool, or package manager.

---

This directory contains all policy documents relating to numbering and versioning strategies.

## 🧩 Modularity & Dependencies

This package is designed to be **fully modular** with maximum independence. It can be used standalone or combined with other packages.

### Standalone Usage

✅ **This package can be used completely independently** without requiring any other `ai-dev-kit` packages.

**What you get standalone:**
- Complete versioning policy and strategy documents
- Version schema definition (`RC.EPIC.STORY.TASK+BUILD`)
- Implementation guides and templates
- Epic and Story templates
- All versioning principles and best practices

**Hard dependencies (required):**
- None — this is a pure documentation package

**Independence score:** 10/10 — Pure documentation, no runtime dependencies.

### Combined Usage

**With Workflow Management Package:**
- RW uses versioning schema from this package
- Integration: RW reads version file and follows versioning policy
- Optional: RW can work with custom versioning policies
- **Consumer layout:** Validator and script paths in examples below use **ai-dev-kit** monorepo layout (`packages/frameworks/workflow mgt/...`). In your repo, paths come from **`rw-config.yaml`** (`scripts_path`, etc.) after you copy or install workflow mgt elsewhere — see [RW validators and consumer layout](../workflow%20mgt/docs/rw-validators-consumer-layout.md).

**With Kanban Package:**
- Kanban uses version markers from this package
- Integration: Kanban Story Checklist includes version markers
- Optional: Kanban can work without versioning (manual markers)

**With Both Packages:**
- Complete three-way integration (Kanban ↔ Versioning ↔ RW)
- Automated version marker updates
- Full forensic traceability

### Dependency Matrix

| Dependency Type | Package | Required? | Purpose |
|----------------|---------|-----------|---------|
| Hard | None | — | Pure documentation package |
| Soft | Workflow Management | ❌ No | Version schema usage (optional) |
| Soft | Kanban | ❌ No | Version markers (optional) |

### Package Structure

This package is designed to be **portable and customizable** for use in other projects. All documents include:
- Portable package headers
- Customization notes
- Relative cross-references
- Example paths marked for customization

**Start Here:** Read `PACKAGE_OVERVIEW.md` for complete package structure and usage scenarios.

## Contents

### Versioning Policies

1. **`versioning-policy.md`**
   - Defines the semantic versioning schema: `RC.EPIC.STORY.TASK+BUILD`
   - Explains version progression rules
   - Documents parallel development support
   - Defines version file location and CHANGELOG format
   - Includes Epic renumbering strategy (Epic 1-9 legacy, Epic 10+ new format)

2. **`versioning-strategy.md`**
   - Complete versioning strategy with forensic traceability
   - Canonical ordering principles (version numbers, not timestamps)
   - Two-layer timestamp system (short dates vs. full timestamps)
   - Immutability rules for historical metadata
   - Handling of legacy/pre-policy releases

### Numbering Policies

3. **`learning-outcome-numbering-policy.md`**
   - Policy governing numbering for learning outcomes
   - Defines how learning outcomes are numbered and structured
   - *(Domain-specific, adaptable to other numbering systems)*

4. **`set2-numbering-schema.md`**
   - Numbering schema decisions for SET2 learning outcomes
   - Specific implementation details for SET2 system
   - *(Reference example, adaptable)*

### Related Governance

5. **`kanban-governance-policy.md`**
   - Kanban governance policy that includes versioning requirements
   - Defines work-item types (Epic → Story → Task) and how they map to version schema
   - Links versioning to Kanban workflow and release process

### Templates

6. **`EPIC_TEMPLATE.md`**
   - Template for creating epic documents
   - Includes version schema fields (`RC.X.S.T+B`)
   - Includes task numbering format (`EXX:SYY:T001`)
   - Ready to customize for your project

7. **`STORY_TEMPLATE.md`**
   - Template for creating story documents
   - Includes version fields and task checklists
   - Includes version markers for completed tasks
   - Ready to customize for your project

### Implementation Guide

8. **`IMPLEMENTATION_GUIDE.md`**
   - Step-by-step guide for implementing these strategies in a different project
   - Customization instructions
   - Testing and validation strategies
   - CI/CD integration patterns
   - **⚠️ Package Manager Compatibility:** Projects using package managers (npm, pub.dev, PyPI) that require SemVer should see the dual-versioning guide

## Core Versioning Schema

**Format:** `RC.EPIC.STORY.TASK+BUILD`

- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (e.g., 15)
- **STORY:** Story number within epic (e.g., 1)
- **TASK:** Task number within story (e.g., 4)
- **BUILD:** Build number (increments per release within task)

**Example:** `0.15.1.4+2` = Development, Epic 15, Story 1, Task 4, Build 2

### Task Document Requirements

**🚨 CRITICAL: Task Document Must Exist Before Versioning**

The versioning policy requires that:
- **Task document MUST exist** before a version can be created for that task
- **Task ID in document MUST match** version TASK component
- **Epic/Story/Task alignment MUST be verified** before version bump

**Task Document Formats:**
- **Separate File:** `Task-{task}-*.md` or `T{task}-*.md` in Story directory
- **Delimited Section:** Section within Story file using Task ID header (`### E{epic}:S{story}:T{task} –`)

**Required Task Document Fields:**
- Task ID (`E{epic}:S{story}:T{task}`)
- Scope
- Acceptance Criteria
- Status
- Version Anchor (forensic marker format)
- Input
- Deliverable

**Validation:**
- Release Workflow Step 2 (B.1) validates Task document presence and alignment
- Version validators check Task doc → version component alignment
- Workflow fails if Task document is missing or misaligned

**See:** `kanban-governance-policy.md` - Section 3.3: Tasks for complete Task document requirements.

## Epic Renumbering Strategy

**Problem:** Having both old (`RC.EPIC.STORY.PATCH`) and new (`RC.EPIC.STORY.TASK+BUILD`) version formats within the same epic creates confusion and version collisions.

**Solution:** Complete legacy epics with old format, then start new epics with new format exclusively.

**Epic Ranges:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start, clean version space

**Benefits:**
- Clean separation between legacy and new formats
- No version collisions
- Fresh start for new epics
- Clear branch strategy (`epic/10-*`, `epic/11-*`, etc.)

## Key Principles

1. **Version numbers are canonical** - They determine ordering, not timestamps
2. **Parallel epic development** - Each epic maintains its own version stream
3. **Forensic traceability** - Complete accountability through version ↔ epic/story/task ↔ changelogs ↔ kanban markers
4. **Immutability** - Historical metadata is preserved as-is
5. **Epic branch workflow** - Always work on epic branches (`epic/{n}-...`), never directly on `main`

## Related Documentation

These policies are part of a larger system of interconnected documents:
- **[Versioning Quick Reference](../../../docs/architecture/standards-and-adrs/versioning-quick-reference.md)** - 1-2 page summary for quick lookup ⚡ *(Dev-kit specific)*
- **[Dual-Versioning Guide](../../../docs/architecture/standards-and-adrs/dual-versioning-package-managers.md)** - Managing `RC.EPIC.STORY.TASK+BUILD` + SemVer for package managers ⚠️ *(Dev-kit specific)*
- **Cursor Rules** (`.cursorrules`) - Fundamental system rules that enforce versioning requirements *(Project-specific)*
- **Release Workflow Reference** - Automated implementation of versioning schema *(see workflow mgt package)*
- **Release Workflow Agent Execution Guide** - Step-by-step agent execution patterns *(see workflow mgt package)*

**Note:** Some references point to project-specific files. When implementing in other projects, see `IMPLEMENTATION_GUIDE.md` for customization instructions.

**⚠️ Package Manager Compatibility:** If your project uses package managers (npm, pub.dev, PyPI, etc.) that require Semantic Versioning (`MAJOR.MINOR.PATCH`), see the [Dual-Versioning Guide](../../../docs/architecture/standards-and-adrs/dual-versioning-package-managers.md) for mapping strategies and implementation patterns.

## Usage

These documents should be referenced when:
- Creating new epics, stories, or tasks
- Determining version numbers for releases
- Understanding version progression rules
- Implementing versioning in other projects
- Setting up numbering systems for learning outcomes or other domain objects
- Planning epic renumbering strategies

---

## Consumption Pattern for Other Projects

### ⚠️ CRITICAL: Copy, Don't Reference

**Projects MUST copy versioning policies from `ai-dev-kit`, not link to them.**

**Why Copy?**
- Projects need to customize Epic/Story/Task ranges, file paths, and terminology
- Projects evolve independently and may need project-specific adaptations
- Copying ensures projects have full control over their versioning policies
- Prevents breaking changes in `ai-dev-kit` from affecting consuming projects

**What to Copy:**
1. **Core Policy Documents:**
   - `versioning-policy.md` - Copy and customize Epic ranges, file paths
   - `versioning-strategy.md` - Copy as-is (concepts are universal)
   - `IMPLEMENTATION_GUIDE.md` - Copy and customize for your project

2. **Templates:**
   - `EPIC_TEMPLATE.md` - Copy to your templates directory
   - `STORY_TEMPLATE.md` - Copy to your templates directory

3. **Validation Scripts** (if using workflow package):
   - `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
   - `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

### Customization Boundaries

**✅ What You CAN Customize:**
- Epic ranges (e.g., Epic 1-9 legacy, Epic 10+ new format)
- File paths (version file location, changelog directories)
- Project names and terminology
- Work item structure (if different from Epic/Story/Task)
- CI/CD integration points
- Validation script locations

**❌ What You MUST Keep:**
- **Schema format:** `RC.EPIC.STORY.TASK+BUILD` structure
- **Validation rules:** Version format validation, changelog format requirements
- **Core principles:** Canonical ordering, immutability rules, traceability grid
- **Date formats:** `DD-MM-YY` for main changelog, `YYYY-MM-DD HH:MM:SS UTC` for detailed changelog

### Update Process

**How to Stay Aligned with Framework Updates:**

1. **Monitor `ai-dev-kit` for updates:**
   - Watch for new versions of framework packages
   - Review changelog for versioning framework changes

2. **Review updates:**
   - Compare updated framework policies with your copied policies
   - Identify new patterns, principles, or best practices
   - Assess relevance to your project

3. **Selectively adopt:**
   - Copy new sections that are relevant
   - Adapt new patterns to your project context
   - Update your policy documents incrementally

4. **Maintain your customizations:**
   - Preserve project-specific Epic ranges
   - Keep your file paths and terminology
   - Maintain your project-specific adaptations

**Example Update Workflow:**
```bash
# 1. Review changes in ai-dev-kit
git clone https://github.com/earlution/ai-dev-kit.git
cd ai-dev-kit
git log --oneline packages/frameworks/numbering\ \&\ versioning/

# 2. Compare with your copied policies
diff -u your-project/docs/versioning/versioning-policy.md \
         ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/versioning-policy.md

# 3. Selectively merge relevant changes
# (Manual process - review each change)
```

### Single Source of Truth Relationship

**`ai-dev-kit` is the canonical source of truth (SoT) for:**
- Versioning schema definition (`RC.EPIC.STORY.TASK+BUILD`)
- Core versioning principles (canonical ordering, immutability, traceability)
- Best practices and patterns
- Validation requirements

**Your project's copied policies are:**
- **Adaptations** of the framework for your specific context
- **Customized** with your Epic ranges, paths, and terminology
- **Independent** - can evolve separately from framework
- **Aligned** - should reference framework as source of truth

**Documentation Pattern:**
```markdown
# Your Project Versioning Policy

**Based on:** ai-dev-kit `packages/frameworks/numbering & versioning/versioning-policy.md`  
**Last Synced:** 2025-12-02  
**Customizations:** Epic 1-9 legacy range, custom file paths

[Your customized content here]
```

### Implementation Steps

1. **Copy Framework Files:**
   ```bash
   # Copy core policies
   cp ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/versioning-policy.md your-project/docs/versioning/
   cp ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/versioning-strategy.md your-project/docs/versioning/
   cp ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/IMPLEMENTATION_GUIDE.md your-project/docs/versioning/
   ```

2. **Customize for Your Project:**
   - Update Epic ranges (if different from 1-9 legacy, 10+ new)
   - Update file paths (version file, changelog directories)
   - Update project names and terminology
   - Update work item structure (if different)

3. **Set Up Version File:**
   - Create `src/{your-project}/version.py`
   - Follow framework pattern (component-based structure)
   - Use your project's Epic/Story/Task numbers

4. **Set Up Changelog Structure:**
   - Create `CHANGELOG.md` (main summary)
   - Create `CHANGELOG_ARCHIVE/` directory (detailed changelogs)
   - Follow framework format (`DD-MM-YY` for main, full timestamp for archive)

5. **Create Validation Scripts:**
   - Copy validation scripts from workflow package (if using)
   - Customize paths for your project
   - Integrate with your CI/CD pipeline

6. **Document Your Customizations:**
   - Create a "Customizations" section in your policy
   - Document what you changed and why
   - Reference framework as source of truth

### Example: New Project Setup

**Scenario:** Setting up versioning for a new project called "myapp"

1. **Copy framework:**
   ```bash
   mkdir -p myapp/docs/versioning
   cp ai-dev-kit/packages/frameworks/numbering\ \&\ versioning/*.md myapp/docs/versioning/
   ```

2. **Customize `versioning-policy.md`:**
   - Change Epic ranges: "Epic 1+ uses new format" (no legacy range)
   - Change file paths: `src/myapp/version.py`
   - Change examples: Use `0.1.1.1+1` instead of `0.9.21.3+1`

3. **Create version file:**
   ```python
   # src/myapp/version.py
   VERSION_RC = 0
   VERSION_EPIC = 1
   VERSION_STORY = 1
   VERSION_TASK = 1
   VERSION_BUILD = 1
   VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
   ```

4. **Set up changelog:**
   ```bash
   mkdir -p myapp/CHANGELOG_ARCHIVE
   touch myapp/CHANGELOG.md
   ```

5. **Document customizations:**
   ```markdown
   # MyApp Versioning Policy

   **Based on:** ai-dev-kit versioning framework  
   **Customizations:**
   - Epic 1+ uses new format (no legacy range)
   - Version file: `src/myapp/version.py`
   - Changelog archive: `CHANGELOG_ARCHIVE/`
   ```

---

**Last Updated:** 2025-12-02  
**Source Location:** `docs/fynd_deals/_design/versioning/` (fynd.deals)  
**Package Version:** 2.0.0  
**Canonical SoT:** `ai-dev-kit` - Projects should copy and customize, not reference
