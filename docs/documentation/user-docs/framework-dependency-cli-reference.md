---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency CLI Reference

**Status:** Active  
**Version:** 2.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 7 - ai-dev-kit CLI Tool  
**Task:** E6:S07:T12 - Documentation and usage examples

---

## Overview

This document provides a complete reference for the `ai-dev-kit` CLI tool commands. The CLI tool provides a unified interface for managing framework dependencies across all backends (Git submodules, package managers).

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

**Installation:**

```bash
# Install from source (current method)
cd /path/to/ai-dev-kit
pip install -e .

# Or install CLI tool directly
cd /path/to/ai-dev-kit/cli
pip install -e .

# Future: Install via pip (when published to PyPI)
pip install ai-dev-kit
```

**Note:** The CLI tool is currently available from source. PyPI distribution is planned for a future release.

---

## Core Commands

### `ai-dev-kit init`

Initialize ai-dev-kit in your project.

**Usage:**

```bash
ai-dev-kit init [--path <path>] [--backend <backend>]
```

**Options:**
- `--path <path>` - Project root directory (default: current directory)
- `--backend <backend>` - Default dependency backend (git-submodule, npm, pip)

**Example:**

```bash
# Initialize in current directory
ai-dev-kit init

# Initialize with specific backend
ai-dev-kit init --backend git-submodule
```

**Creates:**
- `.ai-dev-kit.yaml` - Configuration file

---

### `ai-dev-kit install`

Install a framework as a dependency.

**Usage:**

```bash
ai-dev-kit install <framework>[@version] [options]
```

**Arguments:**
- `<framework>` - Framework name (required)
- `[@version]` - Specific version (optional, defaults to latest)

**Options:**
- `--backend <type>` - Dependency backend (git-submodule, git-subtree, npm, pip)
- `--path <path>` - Custom installation path
- `--dry-run` - Preview changes without applying
- `--log-path <path>` - Override log directory for this run (see Install logging below)
- `--no-install-log` - Disable per-run install logging for this run

**Examples:**

```bash
# Install latest version
ai-dev-kit install workflow-mgmt

# Install specific version
ai-dev-kit install workflow-mgmt@2.0.0

# Install multiple frameworks
ai-dev-kit install workflow-mgmt@2.0.0 kanban@1.0.0 numbering-versioning@2.0.0

# Install with specific backend
ai-dev-kit install workflow-mgmt --backend git-submodule

# Preview installation
ai-dev-kit install workflow-mgmt --dry-run
```

**Behavior:**
- Detects project type and suggests appropriate backend
- Creates `.ai-dev-kit.yaml` if it doesn't exist
- Installs framework using selected backend
- Updates project configuration files
- Validates installation

**Install logging (FR-047):** Each run of `ai-dev-kit install` writes a timestamped log file under the project’s `logs/ai-dev-kit/install/` directory (or the path set in `.ai-dev-kit.yaml` under `install_logging.path`). The log records frameworks, backend, path, and framework-specific installer output (e.g. Kanban phase markers). Use `--log-path PATH` to override the log directory for one run, or `--no-install-log` to disable logging for one run. See the configuration guide for `install_logging` options.

**Install log validation (FR-078):** For JSON logs, run `ai-dev-kit logs validate-install-log` to verify event-contract completeness (`intent`/`action`/`result`) and correlation keys (`install_run_id`, `step_id`) before using logs for support or feedback workflows.

**Output:**

```
Installing workflow-mgmt@2.0.0...
  Backend: git-submodule
  Path: frameworks/workflow-mgmt
  Status: ✓ Installed successfully

Framework installed:
  Name: workflow-mgmt
  Version: 2.0.0
  Backend: git-submodule
  Path: frameworks/workflow-mgmt
```

---

### `ai-dev-kit update`

Update a framework to the latest compatible version.

**Usage:**

```bash
ai-dev-kit update <framework>[@version] [options]
```

**Arguments:**
- `<framework>` - Framework name (required)
- `[@version]` - Specific version to update to (optional)

**Options:**
- `--all` - Update all installed frameworks
- `--check` - Check for updates without applying
- `--dry-run` - Preview updates without applying
- `--force` - Force update even if conflicts detected
- `--pin` - Pin to specific version after update

**Examples:**

```bash
# Update to latest compatible version
ai-dev-kit update workflow-mgmt

# Update to specific version
ai-dev-kit update workflow-mgmt@2.1.0

# Update all frameworks
ai-dev-kit update --all

# Check for updates without applying
ai-dev-kit update workflow-mgmt --check

# Preview update
ai-dev-kit update workflow-mgmt --dry-run

# Force update
ai-dev-kit update workflow-mgmt --force
```

**Behavior:**
- Checks for available updates
- Validates compatibility
- Updates framework using appropriate backend
- Updates `.ai-dev-kit.yaml` configuration
- Runs post-update validation

**Output:**

```
Updating workflow-mgmt...
  Current: 2.0.0
  Latest:  2.1.0
  Type:    MINOR
  Status:  ✓ Updated successfully

Framework updated:
  Name: workflow-mgmt
  Version: 2.0.0 → 2.1.0
  Backend: git-submodule
  Path: frameworks/workflow-mgmt
```

---

### `ai-dev-kit check`

Check for available framework updates.

**Usage:**

```bash
ai-dev-kit check [<framework>] [options]
```

**Arguments:**
- `<framework>` - Specific framework to check (optional, checks all if omitted)

**Options:**
- `--notify` - Show notification-style output
- `--compatibility` - Check compatibility information
- `--json` - Output in JSON format

**Examples:**

```bash
# Check all frameworks
ai-dev-kit check

# Check specific framework
ai-dev-kit check workflow-mgmt

# Check with notifications
ai-dev-kit check --notify

# Check compatibility
ai-dev-kit check --compatibility

# JSON output
ai-dev-kit check --json
```

**Output:**

```
Framework: workflow-mgmt
  Current: 2.0.0
  Latest:  2.1.0
  Type:    MINOR
  Status:  Update available
  Breaking: None

Framework: kanban
  Current: 1.0.0
  Latest:  1.0.0
  Status:  Up to date
```

---

### `ai-dev-kit status`

Show status of installed frameworks.

**Usage:**

```bash
ai-dev-kit status [<framework>] [options]
```

**Arguments:**
- `<framework>` - Specific framework to show (optional, shows all if omitted)

**Options:**
- `--json` - Output in JSON format
- `--verbose` - Show detailed information

**Examples:**

```bash
# Show all frameworks
ai-dev-kit status

# Show specific framework
ai-dev-kit status workflow-mgmt

# JSON output
ai-dev-kit status --json

# Verbose output
ai-dev-kit status --verbose
```

**Output:**

```
Installed Frameworks:
  workflow-mgmt:
    Version: 2.0.0
    Backend: git-submodule
    Path: frameworks/workflow-mgmt
    Status: Update available (2.1.0)
  
  kanban:
    Version: 1.0.0
    Backend: git-submodule
    Path: frameworks/kanban
    Status: Up to date
```

---

### `ai-dev-kit list`

List available frameworks.

**Usage:**

```bash
ai-dev-kit list [options]
```

**Options:**
- `--versions` - Show available versions
- `--json` - Output in JSON format

**Examples:**

```bash
# List all frameworks
ai-dev-kit list

# List with versions
ai-dev-kit list --versions

# JSON output
ai-dev-kit list --json
```

**Output:**

```
Available Frameworks:
  workflow-mgmt:
    Versions: 2.0.0, 2.1.0
    Description: AI-driven release and workflow automation
  
  kanban:
    Versions: 1.0.0
    Description: Kanban system implementation
  
  numbering-versioning:
    Versions: 2.0.0, 2.1.0
    Description: Numbering and versioning framework
```

---

### `ai-dev-kit remove`

Remove a framework dependency.

**Usage:**

```bash
ai-dev-kit remove <framework> [options]
```

**Arguments:**
- `<framework>` - Framework name (required)

**Options:**
- `--keep-files` - Keep framework files but remove dependency tracking
- `--force` - Force removal without confirmation
- `--dry-run` - Preview removal without applying

**Examples:**

```bash
# Remove framework (with confirmation)
ai-dev-kit remove workflow-mgmt

# Remove but keep files
ai-dev-kit remove workflow-mgmt --keep-files

# Force removal without confirmation
ai-dev-kit remove workflow-mgmt --force

# Preview removal
ai-dev-kit remove workflow-mgmt --dry-run
```

**Behavior:**
- Removes framework from `.ai-dev-kit.yaml`
- Removes framework files (unless `--keep-files`)
- Removes backend-specific tracking (e.g., Git submodule entries)
- Updates project configuration
- Prompts for confirmation (unless `--force`)

**Backend-Specific Behavior:**
- **Git submodule:** Deinitializes submodule, removes from `.gitmodules` and `.git/config`, removes `.git/modules` entry
- **Git subtree:** Removes subtree merge history
- **npm/pip:** Uninstalls package from node_modules or site-packages

---

### `ai-dev-kit logs`

Inspect install logs and validate JSON install-log event contracts.

**Usage:**

```bash
ai-dev-kit logs <subcommand> [options]
```

**Subcommands:**
- `install-history` - Show summary of recent install runs
- `validate-install-log` - Validate JSON install logs against required event contract fields
- `prepare-feedback-payload` - Build deterministic feedback payload from install telemetry
- `validate-feedback-payload` - Validate feedback payload structure/readiness
- `submit-feedback-payload` - Evaluate payload outcomes and write local submission receipt

**Examples:**

```bash
# Show recent install runs
ai-dev-kit logs install-history --limit 10

# Validate latest install JSON log
ai-dev-kit logs validate-install-log

# Validate latest 5 install logs
ai-dev-kit logs validate-install-log --limit 5

# Validate a specific log file
ai-dev-kit logs validate-install-log --file logs/ai-dev-kit/install/install-20260409-120000.log

# Build feedback payload from latest install log
ai-dev-kit logs prepare-feedback-payload

# Validate generated payload
ai-dev-kit logs validate-feedback-payload --file logs/ai-dev-kit/feedback/payload-run-123.json

# Submit payload through deterministic local submission path
ai-dev-kit logs submit-feedback-payload --file logs/ai-dev-kit/feedback/payload-run-123.json
```

**Validation checks (`validate-install-log`):**
- JSON line parseability
- `install_run_id`
- `step_id`
- `event_contract.intent.summary`
- `event_contract.action.summary`
- `event_contract.result.status`
- `event_contract.result.details`

**Feedback payload outcomes (`submit-feedback-payload`):**
- `accepted` - payload is valid, redacted, and has enough context for maintainer triage
- `needs-redaction` - sensitive-pattern checks failed; payload must be scrubbed before submit
- `needs-more-context` - payload is valid but missing required troubleshooting context
- `rejected` - schema-invalid payload; run `validate-feedback-payload` and fix errors

---

## Configuration Commands

### `ai-dev-kit config`

Manage CLI configuration.

**Usage:**

```bash
ai-dev-kit config <command> [options]
```

**Commands:**
- `get <key>` - Get configuration value (supports dot notation)
- `set <key> <value>` - Set configuration value (supports dot notation, YAML parsing)
- `list` - List all configuration
- `reset` - Reset to defaults (requires `--force`)
- `validate` - Validate configuration against schema (with optional `--fix`)

**Examples:**

```bash
# Get configuration value
ai-dev-kit config get default_backend
ai-dev-kit config get frameworks.workflow-mgmt.version

# Get with JSON output
ai-dev-kit config get default_backend --json

# Set configuration value (supports YAML types)
ai-dev-kit config set default_backend git-submodule
ai-dev-kit config set auto_check true
ai-dev-kit config set check_interval daily
ai-dev-kit config set frameworks.workflow-mgmt.version "2.0.0"

# List all configuration
ai-dev-kit config list
ai-dev-kit config list --json

# Validate configuration
ai-dev-kit config validate

# Validate and auto-fix issues
ai-dev-kit config validate --fix

# Reset to defaults (requires confirmation bypass)
ai-dev-kit config reset --force
```

**Configuration Keys:**
- `version` - Configuration file version (default: "1.0.0")
- `default_backend` - Default dependency backend (git-submodule, git-subtree, npm, pip)
- `auto_check` - Enable automatic update checking (true/false)
- `check_interval` - Update check interval (daily/weekly/manual)
- `notification_channel` - Notification channel (console/email/slack)
- `update_policy.patch` - Patch update policy (auto/notify/manual)
- `update_policy.minor` - Minor update policy (auto/notify/manual)
- `update_policy.major` - Major update policy (auto/notify/manual)
- `frameworks.<name>.version` - Framework version
- `frameworks.<name>.backend` - Framework backend
- `frameworks.<name>.path` - Framework installation path
- `frameworks.<name>.source` - Source repository URL (for Git backends)
- `frameworks.<name>.tag` - Git tag/branch (for Git backends)
- `frameworks.<name>.pin` - Pin to version (prevent auto-updates)

---

## Backend Support

The CLI tool supports multiple dependency backends:

### Git Submodule Backend

**Backend Name:** `git-submodule`

**Requirements:**
- Git installed and in PATH
- Git repository initialized in project

**Usage:**

```bash
ai-dev-kit install workflow-mgmt --backend git-submodule
```

**Behavior:**
- Adds framework as Git submodule
- Tracks framework version via Git tags/branches
- Updates via `git submodule update`

### Git Subtree Backend

**Backend Name:** `git-subtree`

**Requirements:**
- Git installed and in PATH
- Git repository initialized in project

**Usage:**

```bash
ai-dev-kit install workflow-mgmt --backend git-subtree
```

**Behavior:**
- Merges framework into project as subtree
- Framework files are part of main repository
- Updates via `git subtree pull`

### npm Backend

**Backend Name:** `npm`

**Requirements:**
- Node.js and npm installed
- Framework published to npm registry

**Usage:**

```bash
ai-dev-kit install workflow-mgmt --backend npm
```

**Behavior:**
- Installs framework via `npm install`
- Manages version via `package.json`
- Updates via `npm update`

**Note:** Currently, frameworks are not yet published to npm. The backend will provide helpful messages if packages are not found.

### pip Backend

**Backend Name:** `pip`

**Requirements:**
- Python and pip installed
- Framework published to PyPI

**Usage:**

```bash
ai-dev-kit install workflow-mgmt --backend pip
```

**Behavior:**
- Installs framework via `pip install`
- Manages version via `requirements.txt` or `pyproject.toml`
- Updates via `pip install --upgrade`

**Note:** Currently, frameworks are not yet published to PyPI. The backend will provide helpful messages if packages are not found.

---

### `ai-dev-kit migrate`

Migrate copy-paste frameworks to dependency-based installations.

**Usage:**

```bash
ai-dev-kit migrate [--detect] [--convert] [--validate] [options]
```

**Options:**
- `--detect` - Detect copy-paste frameworks in the project
- `--convert` - Convert detected frameworks to dependencies
- `--validate` - Validate that migration was successful
- `--framework <name>` - Specific framework to convert (by name or path)
- `--backend <type>` - Backend to use for dependency installation (default: git-submodule)
- `--dry-run` - Preview migration without applying changes

**Examples:**

```bash
# Detect existing copy-paste frameworks
ai-dev-kit migrate --detect

# Convert all detected frameworks
ai-dev-kit migrate --convert

# Convert specific framework
ai-dev-kit migrate --convert --framework workflow-mgmt

# Convert with specific backend
ai-dev-kit migrate --convert --backend git-subtree

# Preview migration
ai-dev-kit migrate --convert --dry-run

# Validate migration
ai-dev-kit migrate --validate
```

**Behavior:**
- **Detect:** Scans project for frameworks installed via copy-paste (signature file matching)
- **Convert:** Converts detected frameworks to dependency-managed installations
- **Validate:** Verifies that migrated frameworks are properly configured

**Migration Process:**
1. Detects frameworks using signature files and version detection
2. Backs up existing framework files
3. Removes copy-paste installation
4. Installs framework via selected backend
5. Updates `.ai-dev-kit.yaml` configuration
6. Validates installation

---

## Global Options

All commands support these global options:

- `--help` or `-h` - Show command help
- `--version` - Show CLI version

**Examples:**

```bash
# Show help
ai-dev-kit --help
ai-dev-kit install --help

# Show version
ai-dev-kit --version
```

---

## Configuration File

### `.ai-dev-kit.yaml`

Configuration file for framework dependencies.

**Location:** Project root directory

**Structure:**

```yaml
version: "1.0.0"
default_backend: "git-submodule"

update_policy:
  patch: auto      # auto, notify, manual
  minor: notify
  major: manual

auto_check: true
check_interval: daily  # daily, weekly, manual

notification_channel: console  # console, email, slack

frameworks:
  workflow-mgmt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/workflow-mgmt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgmt-v2.0.0"
    pin: false
```

**Fields:**
- `version` - Configuration file version
- `default_backend` - Default dependency backend
- `update_policy` - Update policies by version type
- `auto_check` - Enable automatic update checking
- `check_interval` - Update check frequency
- `notification_channel` - Notification method
- `frameworks` - Installed frameworks configuration
  - `version` - Framework version
  - `backend` - Dependency backend used
  - `path` - Installation path
  - `source` - Source repository URL
  - `tag` - Git tag (for Git backends)
  - `pin` - Pin to version (prevent auto-updates)

---

## Error Codes

CLI commands return exit codes:

- `0` - Success
- `1` - General error
- `2` - Framework not found
- `3` - Version not found
- `4` - Backend not available
- `5` - Configuration error
- `6` - Update conflict
- `7` - Validation error

**Example Error Handling:**

```bash
if ai-dev-kit install workflow-mgmt; then
  echo "Installation successful"
else
  exit_code=$?
  case $exit_code in
    2) echo "Framework not found" ;;
    3) echo "Version not found" ;;
    4) echo "Backend not available" ;;
    *) echo "Installation failed" ;;
  esac
fi
```

---

## Examples

### Complete Workflow

```bash
# Initialize project
ai-dev-kit init

# Install frameworks
ai-dev-kit install workflow-mgmt@2.0.0
ai-dev-kit install kanban@1.0.0

# Check status
ai-dev-kit status

# Check for updates
ai-dev-kit check

# Update framework
ai-dev-kit update workflow-mgmt@2.1.0

# Verify update
ai-dev-kit status workflow-mgmt
```

### CI/CD Integration

```bash
# In CI/CD pipeline
ai-dev-kit check --notify

# If updates available, create issue
if [ $? -ne 0 ]; then
  # Create GitHub issue or send notification
fi
```

### Migration from Copy-Paste

```bash
# Detect existing copy-paste frameworks
ai-dev-kit migrate --detect

# Preview migration
ai-dev-kit migrate --convert --dry-run

# Execute migration
ai-dev-kit migrate --convert

# Validate migration
ai-dev-kit migrate --validate
```

### Configuration Management

```bash
# View current configuration
ai-dev-kit config list

# Get specific value
ai-dev-kit config get default_backend

# Set configuration
ai-dev-kit config set default_backend git-submodule
ai-dev-kit config set auto_check true

# Validate configuration
ai-dev-kit config validate --fix
```

### Framework Removal

```bash
# Remove framework (with confirmation)
ai-dev-kit remove workflow-mgmt

# Remove but keep files
ai-dev-kit remove workflow-mgmt --keep-files

# Force removal
ai-dev-kit remove workflow-mgmt --force
```

---

## Troubleshooting

### Common Issues

**Command not found:**

```bash
# Check installation
pip show ai-dev-kit

# Reinstall if needed
pip install --upgrade ai-dev-kit
```

**Configuration not found:**

```bash
# Initialize project
ai-dev-kit init

# Or specify config file
ai-dev-kit status --config /path/to/config.yaml
```

**Backend not available:**

```bash
# Check available backends
ai-dev-kit list --backends

# Use different backend
ai-dev-kit install workflow-mgmt --backend git-submodule
```

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for more detailed solutions.

---

## References

- [Installation Guide](framework-dependency-installation-guide.md)
- [Usage Guide](framework-dependency-usage-guide.md)
- [Update Guide](framework-dependency-update-guide.md)
- [Integration Guide](framework-dependency-integration-guide.md)
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)
