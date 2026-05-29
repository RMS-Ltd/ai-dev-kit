---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Update CLI Tool Design

**Status:** Design  
**Version:** 1.0.0  
**Last Updated:** 2025-12-06  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T04 - Build framework update CLI tool

---

## Executive Summary

This document designs the `ai-dev-kit` CLI tool for managing framework dependencies across projects. The CLI provides a unified interface for installing, updating, and managing frameworks regardless of the underlying dependency backend (Git submodules, package managers, etc.).

---

## Goals

1. **Unified Interface:** Single CLI tool for all framework management operations
2. **Backend Abstraction:** Support multiple dependency backends (Git submodules, package managers)
3. **Automated Updates:** Enable automatic framework updates
4. **Version Management:** Track and pin framework versions
5. **Easy Migration:** Support migration from copy-paste to dependency model

---

## CLI Commands

### Core Commands

#### `ai-dev-kit install <framework>[@version]`

Install a framework as a dependency.

**Examples:**
```bash
# Install latest version
ai-dev-kit install numbering-versioning

# Install specific version
ai-dev-kit install numbering-versioning@2.0.0

# Install multiple frameworks
ai-dev-kit install numbering-versioning@2.0.0 workflow-mgt@2.0.0 kanban@1.0.0
```

**Options:**
- `--backend <type>` - Specify dependency backend (git-submodule, git-subtree, npm, pip)
- `--path <path>` - Custom installation path
- `--dry-run` - Preview changes without applying

**Behavior:**
- Detects project type and suggests appropriate backend
- Creates `.ai-dev-kit.yaml` configuration file
- Installs framework using selected backend
- Updates project configuration files

---

#### `ai-dev-kit update <framework>`

Update a framework to the latest compatible version.

**Examples:**
```bash
# Update specific framework
ai-dev-kit update numbering-versioning

# Update all frameworks
ai-dev-kit update --all

# Update to specific version
ai-dev-kit update numbering-versioning@2.1.0
```

**Options:**
- `--all` - Update all installed frameworks
- `--check` - Check for updates without applying
- `--dry-run` - Preview updates without applying

**Behavior:**
- Checks for available updates
- Validates compatibility
- Updates framework using appropriate backend
- Updates `.ai-dev-kit.yaml` configuration

---

#### `ai-dev-kit check`

Check for available framework updates.

**Examples:**
```bash
# Check all frameworks
ai-dev-kit check

# Check specific framework
ai-dev-kit check numbering-versioning
```

**Output:**
```
Framework: numbering-versioning
  Current: 2.0.0
  Latest:  2.1.0
  Status:  Update available

Framework: workflow-mgt
  Current: 2.0.0
  Latest:  2.0.0
  Status:  Up to date
```

---

#### `ai-dev-kit status`

Show status of installed frameworks.

**Examples:**
```bash
# Show all frameworks
ai-dev-kit status

# Show specific framework
ai-dev-kit status numbering-versioning
```

**Output:**
```
Installed Frameworks:
  numbering-versioning: 2.0.0 (git-submodule)
  workflow-mgt:         2.0.0 (git-submodule)
  kanban:              1.0.0 (git-submodule)
```

---

#### `ai-dev-kit list`

List available frameworks.

**Examples:**
```bash
# List all frameworks
ai-dev-kit list

# List with versions
ai-dev-kit list --versions
```

**Output:**
```
Available Frameworks:
  numbering-versioning (2.0.0, 2.1.0)
  workflow-mgt (2.0.0)
  kanban (1.0.0)
  debug-path (1.0.0)
  doc-lifecycle (1.0.0)
```

---

#### `ai-dev-kit remove <framework>`

Remove a framework dependency.

**Examples:**
```bash
# Remove framework
ai-dev-kit remove numbering-versioning
```

**Options:**
- `--keep-files` - Keep framework files but remove dependency tracking

---

## Configuration File

### `.ai-dev-kit.yaml`

Configuration file for framework dependencies.

**Structure:**
```yaml
version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  numbering-versioning:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/numbering & versioning"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "numbering-versioning-v2.0.0"
  workflow-mgt:
    version: "2.0.0"
    backend: "git-submodule"
    path: "frameworks/ai-dev-kit/packages/frameworks/workflow mgt"
    source: "https://github.com/earlution/ai-dev-kit.git"
    tag: "workflow-mgt-v2.0.0"
```

---

## Backend Implementations

### Git Submodule Backend

**Implementation:** `cli/backends/git_submodule.py`

**Operations:**
- `install()` - Add Git submodule
- `update()` - Update submodule to new version
- `check()` - Check for updates
- `status()` - Show submodule status

**Example:**
```python
backend = GitSubmoduleBackend()
backend.install(
    framework="numbering-versioning",
    version="2.0.0",
    path="frameworks/ai-dev-kit",
    source="https://github.com/earlution/ai-dev-kit.git"
)
```

---

### Git Subtree Backend

**Implementation:** `cli/backends/git_subtree.py`

**Operations:**
- `install()` - Add Git subtree
- `update()` - Update subtree to new version
- `check()` - Check for updates
- `status()` - Show subtree status

---

### Package Manager Backends

**Implementation:** `cli/backends/package_manager.py`

**Supported:**
- npm (`@ai-dev-kit/numbering-versioning`)
- pip (`ai-dev-kit-numbering-versioning`)

**Operations:**
- `install()` - Install via package manager
- `update()` - Update via package manager
- `check()` - Check for updates
- `status()` - Show package status

---

## Tool Structure

```
ai-dev-kit/
├── cli/
│   ├── __init__.py
│   ├── main.py                 # CLI entry point
│   ├── commands/
│   │   ├── __init__.py
│   │   ├── install.py
│   │   ├── update.py
│   │   ├── check.py
│   │   ├── status.py
│   │   ├── list.py
│   │   └── remove.py
│   ├── backends/
│   │   ├── __init__.py
│   │   ├── base.py             # Base backend interface
│   │   ├── git_submodule.py
│   │   ├── git_subtree.py
│   │   └── package_manager.py
│   ├── config.py               # Configuration management
│   └── utils.py                # Utility functions
├── setup.py
├── README.md
└── requirements.txt
```

---

## Installation

### As Python Package

```bash
pip install ai-dev-kit
```

### From Source

```bash
git clone https://github.com/earlution/ai-dev-kit.git
cd ai-dev-kit/cli
pip install -e .
```

---

## Usage Examples

### Greenfield Project

```bash
# Install all three core frameworks
ai-dev-kit install numbering-versioning@2.0.0 \
                   workflow-mgt@2.0.0 \
                   kanban@1.0.0

# Check for updates
ai-dev-kit check

# Update to latest versions
ai-dev-kit update --all
```

### Migration from Copy-Paste

```bash
# Detect existing frameworks
ai-dev-kit migrate --detect

# Convert to dependencies
ai-dev-kit migrate --convert
```

---

## Error Handling

### Common Errors

**Framework Not Found:**
```
Error: Framework 'invalid-framework' not found.
Available frameworks: numbering-versioning, workflow-mgt, kanban
```

**Version Not Found:**
```
Error: Version '3.0.0' not found for framework 'numbering-versioning'.
Available versions: 2.0.0, 2.1.0
```

**Backend Not Available:**
```
Error: Backend 'npm' not available. Install Node.js to use npm backend.
Available backends: git-submodule, git-subtree
```

---

## Future Enhancements

1. **Migration Tool:** Automated migration from copy-paste to dependencies
2. **Update Policies:** Configurable update policies (auto, manual, scheduled)
3. **Dependency Resolution:** Automatic dependency resolution
4. **Conflict Resolution:** Handle merge conflicts in updates
5. **Rollback:** Rollback to previous framework versions

---

## References

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
- **Epic 6:** `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- **Story 2:** `docs/project-management/kanban/epics/Epic-6/Story-002-framework-update-and-migration.md`

---

## Decision Record

**Decision:** Build `ai-dev-kit` CLI tool for framework management.

**Rationale:**
- Provides unified interface for all dependency backends
- Enables automated updates
- Simplifies framework management
- Supports migration from copy-paste model

**Status:** Design approved, ready for implementation in Epic 6, Story 2.

