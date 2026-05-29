---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Usage Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

This guide explains how to use AI Dev Kit frameworks after installation. It covers configuration, basic usage, integration with your project, and best practices for managing framework dependencies.

**Prerequisites:** You should have completed the [Installation Guide](framework-dependency-installation-guide.md) and have at least one framework installed.

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Post-Installation Configuration

### 1. Update Project Paths

Frameworks contain example paths that reference the source project. You need to update these for your project structure.

#### Workflow Management Framework

```bash
cd frameworks/workflow-mgmt

# Find all references to example paths
grep -r "src/confidentia" . --include="*.md" --include="*.py" --include="*.yaml"

# Replace with your project structure
# Example: if your project uses src/myproject/
find . -type f \( -name "*.md" -o -name "*.py" -o -name "*.yaml" \) \
  -exec sed -i '' 's|src/confidentia|src/myproject|g' {} \;
```

**Key files to update:**
- `rw-config.yaml` - Main configuration file
- `scripts/validation/validate_branch_context.py` - Version file path
- Documentation files - Example paths in guides

#### Kanban Framework

```bash
cd frameworks/kanban

# Update example project references
find . -type f -name "*.md" \
  -exec sed -i '' 's|docs/project-management/epics/overview/Epic 4|docs/project-management/kanban/epics/Epic-4|g' {} \;

# Update example project names
find . -type f -name "*.md" \
  -exec sed -i '' 's|Confidentia|YourProjectName|g' {} \;
```

#### Numbering & Versioning Framework

```bash
cd frameworks/numbering-versioning

# Update version file path
vim versioning-policy.md
# Update example paths to match your project structure
```

### 2. Configure Framework Settings

Each framework has configuration files that need customization.

#### Workflow Management: `rw-config.yaml`

```yaml
# Location: frameworks/workflow-mgmt/rw-config.yaml

project:
  name: "your-project-name"
  root: "."

version:
  file: "src/yourproject/version.py"
  schema: "RC.EPIC.STORY.TASK+BUILD"

branches:
  epic_pattern: "epic/{n}-{name}"
  main_branch: "main"

changelog:
  main_file: "CHANGELOG.md"
  archive_dir: "docs/changelog-and-release-notes/changelog-archive/"

kanban:
  epic_doc_pattern: "docs/project-management/kanban/epics/Epic-{epic}/Epic-{epic}.md"
  story_doc_pattern: "docs/project-management/kanban/epics/Epic-{epic}/Story-{story}-*.md"

scripts:
  scripts_path: "packages/frameworks/workflow mgt/scripts"
  kanban_update_script: "packages/frameworks/kanban/scripts/update-kanban-docs.py"

validation:
  strict_mode: true
  validate_branch_context: true
  validate_changelog_format: true
  validate_version_bump: true
```

#### Kanban Framework: Update Epic/Story Templates

```bash
cd frameworks/kanban

# Review and customize templates
ls templates/

# Update template variables for your project
vim templates/epic-template.md
vim templates/story-template.md
```

### 3. Initialize Framework Components

#### Create Version File

```bash
# Create version file based on your project structure
mkdir -p src/yourproject
cp frameworks/numbering-versioning/templates/version.py src/yourproject/version.py

# Edit version file
vim src/yourproject/version.py

# Update:
# - Project name
# - Initial version (typically 0.1.1.1+1)
# - Version schema (if different)
```

#### Initialize Kanban Structure

```bash
# Create Kanban directory structure
mkdir -p docs/project-management/kanban/epics

# Copy Kanban board template
cp frameworks/kanban/templates/kboard.md docs/project-management/kanban/kboard.md

# Create first epic
mkdir -p docs/project-management/kanban/epics/Epic-1
cp frameworks/kanban/templates/epic-template.md docs/project-management/kanban/epics/Epic-1/Epic-1.md
```

---

## Basic Usage

### Workflow Management Framework

#### Using the Release Workflow (RW)

The Release Workflow is invoked in your AI assistant (Cursor, GitHub Copilot, etc.) with **`RW` and a mandatory task id in the same message** (**FR-060**), e.g. `RW E5S01T01` or `RW E5:S01:T01`. A bare `RW` must **RW ABORTED** before any version bump.

**Basic RW Execution:**

1. **Ensure you're on the correct branch:**
   ```bash
   git branch --show-current
   # Should show: epic/{n}-{name} or main
   ```

2. **Update version file:**
   ```bash
   # Edit src/yourproject/version.py
   # Set VERSION_TASK and VERSION_BUILD for current work
   ```

3. **Trigger RW:**
   - Send e.g. `RW E5S01T01` or `RW E5:S01:T01` (your completed task id). Optional: `RW -k …`, `RW -d …`
   - The assistant runs the Release Workflow steps defined in your `.cursorrules`

**RW Steps (automated):**
1. Validate branch context
2. Bump version (if needed)
3. Create changelog archive
4. Update main changelog
5. Update README version badge
6. Update Kanban documentation
7. Update Epic/Story documentation
8. Stage all changes
9. Run validators
10. Commit changes
11. Create Git tag
12. Push to remote
13. Verify release
14. Report completion

#### Manual RW Execution

If you need to run RW manually:

```bash
cd frameworks/workflow-mgmt

# Run RW script directly
python3 scripts/release-workflow.py

# Or use the agent execution guide
# Follow: docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md
```

### Kanban Framework

#### Creating Work Items

**Create an Epic:**

```bash
# Create epic directory
mkdir -p docs/project-management/kanban/epics/Epic-1

# Create epic document
cp frameworks/kanban/templates/epic-template.md docs/project-management/kanban/epics/Epic-1/Epic-1.md

# Edit epic document
vim docs/project-management/kanban/epics/Epic-1/Epic-1.md

# Update:
# - Epic title and description
# - Story checklist
# - Dependencies and risks
```

**Create a Story:**

```bash
# Create story document
cp frameworks/kanban/templates/story-template.md \
   docs/project-management/kanban/epics/Epic-1/Story-001-epic-title.md

# Edit story document
vim docs/project-management/kanban/epics/Epic-1/Story-001-epic-title.md

# Update:
# - Story title and description
# - Task checklist
# - Acceptance criteria
```

**Update Kanban Board:**

```bash
# Update main board view
vim docs/project-management/kanban/kboard.md

# Add new epic to board
# Update epic status
# Update story progress
```

#### Kanban Update Script

The Kanban framework includes a script to automatically update board views:

```bash
cd frameworks/kanban

# Run update script
python3 scripts/update-kanban-docs.py

# This updates:
# - kboard.md
# - _index.md (quick view)
# - Epic documents
```

### Numbering & Versioning Framework

#### Version Management

**Version Schema:** `RC.EPIC.STORY.TASK+BUILD`

- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (1, 2, 3, ...)
- **STORY:** Story number within epic
- **TASK:** Task number within story
- **BUILD:** Build number (increments per release within task)

**Update Version:**

```python
# Edit src/yourproject/version.py

VERSION_RC = 0        # Release candidate
VERSION_EPIC = 1      # Current epic
VERSION_STORY = 1     # Current story
VERSION_TASK = 1      # Current task
VERSION_BUILD = 1     # Build number (increments per RW)
```

**Version Validation:**

```bash
cd frameworks/workflow-mgmt

# Validate version matches branch
python3 scripts/validation/validate_branch_context.py

# Validate changelog format
python3 scripts/validation/validate_changelog_format.py

# Validate version bump logic
python3 scripts/validation/validate_version_bump.py
```

---

## Framework Integration

### Using Multiple Frameworks Together

Frameworks are designed to work together. The recommended combination:

1. **Kanban** - Organize work into Epics, Stories, and Tasks
2. **Numbering & Versioning** - Version your work using `RC.EPIC.STORY.TASK+BUILD`
3. **Release Workflow** - Automate releases with AI-driven workflows

#### Integration Workflow

**1. Create work in Kanban:**
```bash
# Create Epic 1
# Create Story 1
# Create Tasks
```

**2. Set version for work:**
```bash
# Update version.py to match Epic/Story/Task
VERSION_EPIC = 1
VERSION_STORY = 1
VERSION_TASK = 1
```

**3. Execute Release Workflow:**
```bash
# e.g. RW E1S01T01 or RW E1:S01:T01 in AI assistant (FR-060; same message as task id)
# RW automatically:
# - Updates Kanban docs
# - Updates version
# - Creates changelog entry
# - Commits and tags
```

### Framework Dependencies

Some frameworks depend on others:

- **Workflow Management** depends on **Numbering & Versioning** (for version schema)
- **Workflow Management** depends on **Kanban** (for Kanban updates)
- **Kanban** can work standalone

**Check Dependencies:**

```bash
# Review framework README for dependencies
cat frameworks/workflow-mgmt/README.md | grep -A 10 "Dependencies"

# Check framework compatibility
cat frameworks/kanban/README.md | grep -A 5 "compatibility"
```

---

## Configuration Management

### Framework Configuration Files

Each framework has configuration files that control behavior:

#### `.ai-dev-kit.yaml` (if using CLI tool)

```yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/workflow-mgmt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgmt-v2.0.0"
```

#### `rw-config.yaml` (Workflow Management)

Controls Release Workflow behavior. See configuration section above.

### Environment Variables

Some frameworks support environment variables:

```bash
# Set in .env or shell
export VIBE_DEV_KIT_STRICT_MODE=true
export VIBE_DEV_KIT_AUTO_UPDATE=false
```

---

## Best Practices

### Version Management

1. **Always update version before RW:**
   - Set `VERSION_TASK` to current task
   - Set `VERSION_BUILD` to 1 for new tasks, increment for same task

2. **Use version validation:**
   - Run validators before committing
   - Fix version mismatches immediately

3. **Version consistency:**
   - Version in `version.py` must match branch context
   - Version in changelog must match `version.py`

### Kanban Management

1. **Keep Kanban docs updated:**
   - Update status when work progresses
   - Run update script regularly
   - Keep board view synchronized

2. **Use templates:**
   - Always start from templates
   - Maintain consistent structure
   - Follow naming conventions

3. **Track dependencies:**
   - Document epic/story dependencies
   - Update dependency status
   - Resolve blockers promptly

### Framework Updates

1. **Test updates before applying:**
   ```bash
   # Check for updates
   ai-dev-kit check
   
   # Review changelog
   # Test in development branch
   # Apply to main after testing
   ```

2. **Pin versions for stability:**
   ```yaml
   # In .ai-dev-kit.yaml
   frameworks:
     workflow-mgmt:
       version: "2.0.0"  # Pin to specific version
   ```

3. **Review breaking changes:**
   - Check framework changelog
   - Review migration guides
   - Update configuration if needed

---

## Troubleshooting

### Common Issues

**Issue: RW fails validation**

```bash
# Check branch context
python3 frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py

# Check changelog format
python3 frameworks/workflow-mgmt/scripts/validation/validate_changelog_format.py

# Fix issues and retry
```

**Issue: Kanban docs out of sync**

```bash
# Run update script
python3 frameworks/kanban/scripts/update-kanban-docs.py

# Manually update if needed
vim docs/project-management/kanban/kboard.md
```

**Issue: Version mismatch**

```bash
# Check current version
python3 -c "import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)"

# Check branch
git branch --show-current

# Update version.py to match branch context
```

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for more detailed solutions.

---

## Next Steps

After configuring and using frameworks:

1. **Read framework-specific guides:**
   - Workflow Management: `frameworks/workflow-mgmt/IMPLEMENTATION_GUIDE.md`
   - Kanban: `frameworks/kanban/IMPLEMENTATION_GUIDE.md`
   - Numbering & Versioning: `frameworks/numbering-versioning/IMPLEMENTATION_GUIDE.md`

2. **Set up update notifications:**
   - See [Update Guide](framework-dependency-update-guide.md)

3. **Integrate with CI/CD:**
   - See [Integration Guide](framework-dependency-integration-guide.md)

---

## References

- [Installation Guide](framework-dependency-installation-guide.md)
- [Update Guide](framework-dependency-update-guide.md)
- [Integration Guide](framework-dependency-integration-guide.md)
- [CLI Reference](framework-dependency-cli-reference.md)
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)

