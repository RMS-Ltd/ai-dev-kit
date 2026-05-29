---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:13Z
expires_at: null
housekeeping_policy: keep
---

# RW Installer CLI

**Purpose:** Install Release Workflow (RW) into a target project with minimal manual configuration.

**Script:** `install_release_workflow.py`

---

## Quick Start

```bash
# Interactive installation (recommended)
python install_release_workflow.py

# Preview changes without modifying files
python install_release_workflow.py --dry-run

# Use existing config file
python install_release_workflow.py --config rw-config.yaml

# Preset mode (a=Simple RW, b=RW+Versioning, c=Full Stack)
python install_release_workflow.py --mode c
```

---

## What It Does

The installer automates the RW adoption process by:

1. **Collects Configuration** - Asks questions (or reads from `--config`) about:
   - Version file location
   - Changelog paths
   - Scripts directory
   - Kanban integration (optional)
   - Versioning schema
   - Versioning mode + SemVer strategy defaults

2. **Generates `rw-config.yaml`** - Creates a single source of truth for all project-specific paths

3. **Updates `.cursorrules`** - Generates/updates the RW trigger section with correct paths substituted

4. **Patches `workflows/release-workflow.yaml`** - Updates workflow config to use values from `rw-config.yaml`

---

## Installation Modes

### Mode A: Simple RW
- RW-only, no Kanban integration
- Any versioning scheme
- Minimal configuration

### Mode B: RW + Dev-Kit Versioning
- RW with `RC.EPIC.STORY.TASK+BUILD` schema
- No Kanban integration
- Standard dev-kit versioning
- Defaults `versioning_mode: dual` and `semver_mapping_strategy: task_touch`

### Mode C: Full Stack
- RW + Dev-Kit Versioning + Kanban
- Complete integration
- Requires Kanban paths
- Defaults `versioning_mode: dual` and `semver_mapping_strategy: task_touch`

---

## Requirements

- Python 3.7+
- PyYAML (`pip install pyyaml`)

---

## Usage Examples

### Interactive Installation

```bash
python install_release_workflow.py
```

The installer will prompt for:
- Project name
- Version file path
- Changelog paths
- Scripts directory
- Installation mode
- Kanban paths (if Mode C)

### Dry Run (Preview Changes)

```bash
python install_release_workflow.py --dry-run
```

Shows what would be generated without writing files.

### Using Existing Config

```bash
# First, create rw-config.yaml manually or from example
cp config/examples/rw-config-mode-c-full-stack.yaml rw-config.yaml
# Edit paths as needed

# Then run installer
python install_release_workflow.py --config rw-config.yaml
```

### Preset Mode

```bash
# Full Stack installation
python install_release_workflow.py --mode c
```

---

## Generated Files

### `rw-config.yaml`
Single source of truth for all project-specific paths. Example:

```yaml
version_file: src/myproject/version.py
main_changelog: CHANGELOG.md
changelog_dir: docs/changelogs
scripts_path: tools/workflow_mgt/scripts
readme_file: README.md
use_kanban: true
kanban_root: docs/project-management/kanban
versioning_mode: dual
semver_mapping_strategy: task_touch
# ... etc
```

### `.cursorrules` RW Trigger Section
Updated RW trigger section with paths substituted from config.

### `workflows/release-workflow/release-workflow.yaml`
Patched to use config values instead of hardcoded paths.

---

## Validation Scripts

The validation scripts (`validate_branch_context.py`, `validate_changelog_format.py`) have been updated to:
- Read from `rw-config.yaml` if available
- Fall back to hardcoded defaults for backward compatibility
- Support both config-driven and legacy projects

FR-046 policy enforcement:
- If `versioning_mode: dual`, validator enforces `semver_mapping_strategy: task_touch`
- Misconfigured dual mode fails validation before RW mutation steps

---

## Troubleshooting

### "PyYAML is required"
```bash
pip install pyyaml
```

### "Template not found"
Ensure you're running from the workflow mgt package directory, or adjust paths.

### ".cursorrules already contains RW trigger section"
The installer skips updating `.cursorrules` if it already contains the RW trigger. Manually review and update if needed.

### "Workflow file not found"
Copy `workflows/release-workflow/release-workflow.yaml` to your project, or create it from a template.

---

## Next Steps After Installation

1. **Review `rw-config.yaml`** - Verify all paths are correct
2. **Review `.cursorrules`** - Check RW trigger section
3. **Copy Validation Scripts** - Ensure scripts are in your `scripts_path`
4. **Test RW** - e.g. `RW E5S01T01` or `RW E5:S01:T01` in your AI assistant (**FR-060**)

---

## See Also

- **Schema Specification:** `config/rw-config-schema.md`
- **Example Configs:** `config/examples/`
- **RW Execution Guide:** `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

