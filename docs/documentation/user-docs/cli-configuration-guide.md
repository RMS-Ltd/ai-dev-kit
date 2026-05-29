---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ai-dev-kit CLI Configuration Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 7 - ai-dev-kit CLI Tool  
**Task:** E6:S07:T12 - Documentation and usage examples

---

## Overview

This guide explains the `.ai-dev-kit.yaml` configuration file format and how to manage configuration using the CLI tool.

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Configuration File Location

The configuration file is located at the project root:

```
/path/to/your/project/.ai-dev-kit.yaml
```

The CLI tool automatically detects the project root by searching for:
1. `.ai-dev-kit.yaml` file
2. `.git` directory
3. `package.json` or `pyproject.toml` file

---

## Configuration File Format

### Basic Structure

```yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
```

### Complete Example

```yaml
version: "1.0.0"
default_backend: "git-submodule"

# Update policies
update_policy:
  patch: auto      # auto, notify, manual
  minor: notify
  major: manual

# Automatic update checking
auto_check: true
check_interval: daily  # daily, weekly, manual

# Notification settings
notification_channel: console  # console, email, slack

# Install logging (per-run logs under logs/ai-dev-kit/install/)
install_logging:
  enabled: true
  path: "logs/ai-dev-kit/install"
  keep: 10

# Installed frameworks
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/workflow-mgmt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgmt-v2.0.0"
    pin: false
  
  kanban:
    version: "1.0.0"
    backend: "git-subtree"
    path: "frameworks/kanban"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "kanban-v1.0.0"
    pin: true
```

---

## Configuration Fields

### Top-Level Fields

#### `version` (required)

Configuration file version.

- **Type:** String
- **Default:** `"1.0.0"`
- **Example:** `version: "1.0.0"`

#### `default_backend` (required)

Default dependency backend to use when installing frameworks.

- **Type:** String
- **Default:** `"git-submodule"`
- **Valid Values:** `git-submodule`, `git-subtree`, `npm`, `pip`
- **Example:** `default_backend: "git-submodule"`

#### `update_policy` (optional)

Update policies for different version types.

- **Type:** Object
- **Default:**
  ```yaml
  update_policy:
    patch: auto
    minor: notify
    major: manual
  ```
- **Fields:**
  - `patch`: Policy for patch updates (auto, notify, manual)
  - `minor`: Policy for minor updates (auto, notify, manual)
  - `major`: Policy for major updates (auto, notify, manual)

#### `auto_check` (optional)

Enable automatic update checking.

- **Type:** Boolean
- **Default:** `true`
- **Example:** `auto_check: true`

#### `check_interval` (optional)

Update check frequency.

- **Type:** String
- **Default:** `"daily"`
- **Valid Values:** `daily`, `weekly`, `manual`
- **Example:** `check_interval: daily`

#### `notification_channel` (optional)

Notification channel for update notifications.

- **Type:** String
- **Default:** `"console"`
- **Valid Values:** `console`, `email`, `slack`
- **Example:** `notification_channel: console`

#### `install_logging` (optional)

Per-run install logging (FR-047). When enabled, each `ai-dev-kit install` run writes a timestamped log file for debugging and forensic analysis.

- **Type:** Object (or set `install_logging.enabled`, `install_logging.path`, `install_logging.keep` via dot notation)
- **Defaults:** Logging enabled; path `logs/ai-dev-kit/install`; no retention limit
- **Fields:**
  - `enabled` (boolean) – Enable or disable install logging (default: true)
  - `path` (string) – Project-relative directory for log files (default: `logs/ai-dev-kit/install`)
  - `keep` (integer) – Keep only the N most recent log files; older files are removed at the end of each run (optional; omit for no rotation)
- **Example:**
  ```yaml
  install_logging:
    enabled: true
    path: "logs/ai-dev-kit/install"
    keep: 10
  ```
- **CLI overrides:** Use `--log-path PATH` to override the log directory for a single run, or `--no-install-log` to disable logging for a single run.

#### `frameworks` (required)

Dictionary of installed frameworks.

- **Type:** Object
- **Default:** `{}`
- **Structure:** See Framework Configuration below

---

### Framework Configuration

Each framework in the `frameworks` dictionary has the following structure:

```yaml
frameworks:
  <framework-name>:
    version: "<version>"
    backend: "<backend>"
    path: "<path>"
    source: "<url>"      # For Git backends
    tag: "<tag>"         # For Git backends
    pin: <boolean>       # Optional
```

#### Framework Fields

##### `version` (required)

Framework version.

- **Type:** String
- **Example:** `version: "2.0.0"`

##### `backend` (required)

Backend used to install the framework.

- **Type:** String
- **Valid Values:** `git-submodule`, `git-subtree`, `npm`, `pip`
- **Example:** `backend: "git-submodule"`

##### `path` (required)

Installation path relative to project root.

- **Type:** String
- **Example:** `path: "frameworks/workflow-mgmt"`

##### `source` (optional, Git backends)

Source repository URL for Git backends.

- **Type:** String
- **Example:** `source: "https://github.com/earlution/ai-dev-kit.git"`

##### `tag` (optional, Git backends)

Git tag or branch for Git backends.

- **Type:** String
- **Example:** `tag: "workflow-mgmt-v2.0.0"`

##### `pin` (optional)

Pin framework to current version (prevent auto-updates).

- **Type:** Boolean
- **Default:** `false`
- **Example:** `pin: true`

---

## Managing Configuration

### View Configuration

```bash
# List all configuration
ai-dev-kit config list

# List with JSON output
ai-dev-kit config list --json

# Get specific value
ai-dev-kit config get default_backend

# Get nested value (dot notation)
ai-dev-kit config get frameworks.workflow-mgmt.version
```

### Modify Configuration

```bash
# Set top-level value
ai-dev-kit config set default_backend git-submodule

# Set boolean value
ai-dev-kit config set auto_check true

# Set nested value (dot notation)
ai-dev-kit config set frameworks.workflow-mgmt.version "2.0.0"

# Set complex value (YAML parsing)
ai-dev-kit config set update_policy.patch auto
```

### Validate Configuration

```bash
# Validate configuration
ai-dev-kit config validate

# Validate and auto-fix
ai-dev-kit config validate --fix
```

### Reset Configuration

```bash
# Reset to defaults (requires --force)
ai-dev-kit config reset --force
```

---

## Configuration Examples

### Minimal Configuration

```yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks: {}
```

### Git Submodule Setup

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

### Multi-Backend Setup

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
  
  kanban:
    version: "1.0.0"
    backend: "git-subtree"
    path: "frameworks/kanban"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "kanban-v1.0.0"
```

### Production Setup (Pinned Versions)

```yaml
version: "1.0.0"
default_backend: "git-submodule"
update_policy:
  patch: notify
  minor: manual
  major: manual
auto_check: true
check_interval: weekly
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/workflow-mgmt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgmt-v2.0.0"
    pin: true
```

---

## Configuration Validation

### Schema Validation

The CLI tool validates configuration against a schema:

- **Required fields:** `version`, `default_backend`, `frameworks`
- **Valid backends:** `git-submodule`, `git-subtree`, `npm`, `pip`
- **Valid intervals:** `daily`, `weekly`, `manual`
- **Valid channels:** `console`, `email`, `slack`
- **Valid policies:** `auto`, `notify`, `manual`

### Common Validation Errors

**Missing required field:**
```yaml
# Error: Missing 'version' field
default_backend: "git-submodule"
frameworks: {}
```

**Invalid backend:**
```yaml
# Error: Invalid backend 'invalid-backend'
default_backend: "invalid-backend"
```

**Invalid framework structure:**
```yaml
# Error: Framework must have 'version', 'backend', 'path'
frameworks:
  workflow-mgmt:
    version: "2.0.0"
```

---

## Best Practices

### 1. Version Control

Commit `.ai-dev-kit.yaml` to version control:

```bash
git add .ai-dev-kit.yaml
git commit -m "Add ai-dev-kit configuration"
```

### 2. Environment-Specific Configuration

Use different configurations for different environments:

```bash
# Development
ai-dev-kit config set auto_check true
ai-dev-kit config set check_interval daily

# Production
ai-dev-kit config set auto_check false
ai-dev-kit config set check_interval manual
```

### 3. Pin Production Versions

Pin frameworks in production:

```bash
ai-dev-kit config set frameworks.workflow-mgmt.pin true
```

### 4. Regular Validation

Validate configuration regularly:

```bash
# In CI/CD pipeline
ai-dev-kit config validate
```

### 5. Backup Configuration

Backup configuration before major changes:

```bash
cp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup
```

---

## Advanced Configuration

### Dot Notation

Access nested values using dot notation:

```bash
# Get nested value
ai-dev-kit config get frameworks.workflow-mgmt.version

# Set nested value
ai-dev-kit config set frameworks.workflow-mgmt.pin true
```

### YAML Type Parsing

The CLI tool automatically parses YAML types:

```bash
# String
ai-dev-kit config set default_backend "git-submodule"

# Boolean
ai-dev-kit config set auto_check true

# Number
ai-dev-kit config set some_number 42

# List (future)
ai-dev-kit config set some_list "[item1, item2]"

# Dictionary (future)
ai-dev-kit config set some_dict "{key: value}"
```

---

## References

- [CLI Reference](framework-dependency-cli-reference.md)
- [Usage Examples](cli-usage-examples.md)
- [Troubleshooting Guide](cli-troubleshooting-guide.md)

