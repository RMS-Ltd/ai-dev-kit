---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ai-dev-kit CLI Usage Examples

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 7 - ai-dev-kit CLI Tool  
**Task:** E6:S07:T12 - Documentation and usage examples

---

## Overview

This document provides comprehensive usage examples for the `ai-dev-kit` CLI tool, covering common scenarios and workflows.

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Quick Start

### First-Time Setup

```bash
# 1. Initialize ai-dev-kit in your project
ai-dev-kit init

# 2. Install your first framework
ai-dev-kit install workflow-mgmt

# 3. Check status
ai-dev-kit status

# 4. Verify installation
ai-dev-kit list
```

---

## Common Workflows

### Installing Frameworks

#### Install Latest Version

```bash
# Install latest version using default backend
ai-dev-kit install workflow-mgmt

# Install with specific backend
ai-dev-kit install workflow-mgmt --backend git-submodule
```

#### Install Specific Version

```bash
# Install specific version
ai-dev-kit install workflow-mgmt@2.0.0

# Install with custom path
ai-dev-kit install workflow-mgmt --path frameworks/workflow
```

#### Install Multiple Frameworks

```bash
# Install multiple frameworks in one command
ai-dev-kit install workflow-mgmt kanban numbering-versioning
```

#### Preview Installation

```bash
# Preview installation without applying
ai-dev-kit install workflow-mgmt --dry-run
```

---

### Updating Frameworks

#### Update Single Framework

```bash
# Update to latest compatible version
ai-dev-kit update workflow-mgmt

# Update to specific version
ai-dev-kit update workflow-mgmt@2.1.0

# Preview update
ai-dev-kit update workflow-mgmt --dry-run
```

#### Update All Frameworks

```bash
# Update all installed frameworks
ai-dev-kit update --all

# Check for updates without applying
ai-dev-kit update --all --check
```

#### Force Update

```bash
# Force update even if conflicts detected
ai-dev-kit update workflow-mgmt --force
```

---

### Checking Status

#### Check All Frameworks

```bash
# Show status of all frameworks
ai-dev-kit status

# Verbose output
ai-dev-kit status --verbose

# JSON output
ai-dev-kit status --json
```

#### Check Specific Framework

```bash
# Show status of specific framework
ai-dev-kit status workflow-mgmt
```

#### Check for Updates

```bash
# Check all frameworks for updates
ai-dev-kit check

# Check specific framework
ai-dev-kit check workflow-mgmt

# JSON output
ai-dev-kit check --json
```

---

### Configuration Management

#### View Configuration

```bash
# List all configuration
ai-dev-kit config list

# List with JSON output
ai-dev-kit config list --json

# Get specific value
ai-dev-kit config get default_backend
ai-dev-kit config get frameworks.workflow-mgmt.version
```

#### Modify Configuration

```bash
# Set default backend
ai-dev-kit config set default_backend git-submodule

# Enable auto-check
ai-dev-kit config set auto_check true

# Set check interval
ai-dev-kit config set check_interval daily

# Set nested value
ai-dev-kit config set frameworks.workflow-mgmt.version "2.0.0"
```

#### Validate Configuration

```bash
# Validate configuration
ai-dev-kit config validate

# Validate and auto-fix
ai-dev-kit config validate --fix
```

#### Reset Configuration

```bash
# Reset to defaults (requires --force)
ai-dev-kit config reset --force
```

---

### Migration from Copy-Paste

#### Detect Existing Frameworks

```bash
# Detect copy-paste frameworks
ai-dev-kit migrate --detect
```

**Example Output:**

```
Detecting copy-paste frameworks...

Found 2 framework(s):

  • workflow-mgmt
    Path: packages/frameworks/workflow mgt
    Type: workflow-mgmt
    Confidence: 95% (version: 2.0.0)

  • kanban
    Path: packages/frameworks/kanban
    Type: kanban
    Confidence: 90% (version: 1.0.0)

To convert these frameworks to dependencies, run:
  ai-dev-kit migrate --convert
```

#### Convert Frameworks

```bash
# Convert all detected frameworks
ai-dev-kit migrate --convert

# Convert specific framework
ai-dev-kit migrate --convert --framework workflow-mgmt

# Convert with specific backend
ai-dev-kit migrate --convert --backend git-subtree

# Preview conversion
ai-dev-kit migrate --convert --dry-run
```

#### Validate Migration

```bash
# Validate migration was successful
ai-dev-kit migrate --validate
```

---

### Removing Frameworks

#### Remove Framework

```bash
# Remove framework (with confirmation)
ai-dev-kit remove workflow-mgmt

# Remove without confirmation
ai-dev-kit remove workflow-mgmt --force

# Remove but keep files
ai-dev-kit remove workflow-mgmt --keep-files

# Preview removal
ai-dev-kit remove workflow-mgmt --dry-run
```

---

## Advanced Scenarios

### Multi-Backend Setup

```bash
# Install different frameworks with different backends
ai-dev-kit install workflow-mgmt --backend git-submodule
ai-dev-kit install kanban --backend git-subtree
ai-dev-kit install numbering-versioning --backend npm
```

### Version Pinning

```bash
# Install and pin to specific version
ai-dev-kit install workflow-mgmt@2.0.0
ai-dev-kit config set frameworks.workflow-mgmt.pin true

# Unpin framework
ai-dev-kit config set frameworks.workflow-mgmt.pin false
```

### Custom Installation Paths

```bash
# Install to custom path
ai-dev-kit install workflow-mgmt --path custom/frameworks/workflow

# Verify path
ai-dev-kit status workflow-mgmt
```

### Batch Operations

```bash
# Install multiple frameworks
ai-dev-kit install workflow-mgmt kanban numbering-versioning

# Update all frameworks
ai-dev-kit update --all

# Check all frameworks
ai-dev-kit check
```

---

## Integration Examples

### CI/CD Pipeline

```bash
#!/bin/bash
# CI/CD script for checking framework updates

# Check for updates
ai-dev-kit check --json > updates.json

# Parse updates
if [ -s updates.json ]; then
    echo "Framework updates available"
    # Create GitHub issue or send notification
    # ...
fi
```

### Pre-Commit Hook

```bash
#!/bin/bash
# Pre-commit hook to validate configuration

# Validate configuration
if ! ai-dev-kit config validate; then
    echo "Configuration validation failed"
    exit 1
fi
```

### Automated Update Script

```bash
#!/bin/bash
# Automated update script

# Check for updates
ai-dev-kit check

# Update all frameworks (patch and minor only)
ai-dev-kit update --all

# Verify updates
ai-dev-kit status
```

---

## Error Handling

### Check Exit Codes

```bash
# Check if command succeeded
if ai-dev-kit install workflow-mgmt; then
    echo "Installation successful"
else
    echo "Installation failed with exit code: $?"
fi
```

### Handle Specific Errors

```bash
#!/bin/bash
# Error handling example

ai-dev-kit install workflow-mgmt
exit_code=$?

case $exit_code in
    0)
        echo "Success"
        ;;
    1)
        echo "General error"
        ;;
    2)
        echo "Framework not found"
        ;;
    3)
        echo "Version not found"
        ;;
    4)
        echo "Backend not available"
        ;;
    *)
        echo "Unknown error: $exit_code"
        ;;
esac
```

---

## Best Practices

### 1. Initialize Before Installing

```bash
# Always initialize first
ai-dev-kit init

# Then install frameworks
ai-dev-kit install workflow-mgmt
```

### 2. Use Dry-Run for Preview

```bash
# Preview before making changes
ai-dev-kit install workflow-mgmt --dry-run
ai-dev-kit update workflow-mgmt --dry-run
ai-dev-kit remove workflow-mgmt --dry-run
```

### 3. Validate Configuration

```bash
# Validate configuration regularly
ai-dev-kit config validate

# Auto-fix common issues
ai-dev-kit config validate --fix
```

### 4. Check Status Regularly

```bash
# Check status before operations
ai-dev-kit status

# Check for updates
ai-dev-kit check
```

### 5. Use Version Pinning for Production

```bash
# Pin frameworks in production
ai-dev-kit install workflow-mgmt@2.0.0
ai-dev-kit config set frameworks.workflow-mgmt.pin true
```

---

## Troubleshooting Examples

### Framework Not Found

```bash
# Check if framework is installed
ai-dev-kit list

# Verify framework name
ai-dev-kit status workflow-mgmt
```

### Backend Not Available

```bash
# Check available backends
ai-dev-kit config get default_backend

# Use different backend
ai-dev-kit install workflow-mgmt --backend git-submodule
```

### Configuration Issues

```bash
# Validate configuration
ai-dev-kit config validate

# View current configuration
ai-dev-kit config list

# Reset if needed
ai-dev-kit config reset --force
```

---

## References

- [CLI Reference](framework-dependency-cli-reference.md) - Complete command reference
- [Installation Guide](framework-dependency-installation-guide.md) - Installation instructions
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) - Troubleshooting help

