---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ai-dev-kit CLI Troubleshooting Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 7 - ai-dev-kit CLI Tool  
**Task:** E6:S07:T12 - Documentation and usage examples

---

## Overview

This guide helps you troubleshoot common issues when using the `ai-dev-kit` CLI tool.

### Scope (greenfield vs brownfield)

Framework **installation** boundaries (distinct from CLI-only issues): [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md) · [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Installation Issues

### Command Not Found

**Problem:** `ai-dev-kit` command is not found after installation.

**Solutions:**

```bash
# Check if CLI tool is installed
pip show ai-dev-kit

# Reinstall from source
cd /path/to/ai-dev-kit
pip install -e .

# Or install CLI tool directly
cd /path/to/ai-dev-kit/cli
pip install -e .

# Verify installation
which ai-dev-kit
ai-dev-kit --version
```

**Check Python PATH:**

```bash
# Check if pip install location is in PATH
python -m site --user-base

# Add to PATH if needed (add to ~/.bashrc or ~/.zshrc)
export PATH="$HOME/.local/bin:$PATH"
```

---

### Python Version Issues

**Problem:** CLI tool requires Python 3.8+ but older version is installed.

**Solutions:**

```bash
# Check Python version
python --version
python3 --version

# Use python3 explicitly
python3 -m pip install -e .

# Or use virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -e .
```

---

## Configuration Issues

### Configuration File Not Found

**Problem:** `ai-dev-kit init` or other commands fail with "No project root detected" or "Configuration not found".

**Solutions:**

```bash
# Initialize project first
ai-dev-kit init

# Verify configuration file exists
ls -la .ai-dev-kit.yaml

# Check current directory
pwd

# Navigate to project root
cd /path/to/your/project
ai-dev-kit init
```

---

### Invalid Configuration

**Problem:** Configuration validation fails or configuration file has errors.

**Solutions:**

```bash
# Validate configuration
ai-dev-kit config validate

# Auto-fix common issues
ai-dev-kit config validate --fix

# View current configuration
ai-dev-kit config list

# Reset to defaults (if needed)
ai-dev-kit config reset --force

# Manually edit configuration
# Edit .ai-dev-kit.yaml file
```

**Common Configuration Errors:**

- Missing `version` field → Add `version: "1.0.0"`
- Invalid `default_backend` → Use one of: `git-submodule`, `git-subtree`, `npm`, `pip`
- Invalid `frameworks` structure → Ensure it's a dictionary/object

---

## Framework Installation Issues

### Framework Not Found

**Problem:** `ai-dev-kit install <framework>` fails with "Framework not found".

**Solutions:**

```bash
# List available frameworks
ai-dev-kit list

# Check framework name spelling
ai-dev-kit list | grep <framework>

# Verify framework is available
# (Frameworks must be published or available in source repository)
```

**Note:** If frameworks are not yet published to npm/PyPI, use Git backends:

```bash
# Use Git submodule backend
ai-dev-kit install workflow-mgmt --backend git-submodule

# Or Git subtree backend
ai-dev-kit install workflow-mgmt --backend git-subtree
```

---

### Backend Not Available

**Problem:** Installation fails with "Backend not available".

**Solutions:**

```bash
# Check which backends are available
ai-dev-kit config get default_backend

# Verify Git is installed (for Git backends)
git --version

# Verify npm is installed (for npm backend)
npm --version

# Verify pip is installed (for pip backend)
pip --version

# Use different backend
ai-dev-kit install workflow-mgmt --backend git-submodule
```

**Git Backend Issues:**

```bash
# Ensure Git repository is initialized
git init

# Check Git configuration
git config --list

# Verify Git is in PATH
which git
```

**npm Backend Issues:**

```bash
# Ensure Node.js is installed
node --version

# Ensure npm is installed
npm --version

# Initialize npm project if needed
npm init -y
```

**pip Backend Issues:**

```bash
# Ensure Python is installed
python --version

# Ensure pip is installed
pip --version

# Upgrade pip if needed
pip install --upgrade pip
```

---

### Installation Path Issues

**Problem:** Installation fails due to path permissions or invalid path.

**Solutions:**

```bash
# Check write permissions
ls -ld /path/to/installation/dir

# Use absolute path
ai-dev-kit install workflow-mgmt --path /absolute/path/to/frameworks

# Check disk space
df -h

# Verify path doesn't exist (or remove if needed)
rm -rf /path/to/existing/dir
ai-dev-kit install workflow-mgmt --path /path/to/existing/dir
```

---

### Version Not Found

**Problem:** Installation fails with "Version not found" when specifying a version.

**Solutions:**

```bash
# List available versions
ai-dev-kit list --versions

# Install latest version (omit version)
ai-dev-kit install workflow-mgmt

# Check version format
# For Git backends: use tag name (e.g., v2.0.0)
# For npm/pip: use semantic version (e.g., 2.0.0)
```

---

## Update Issues

### Update Fails

**Problem:** `ai-dev-kit update` fails or doesn't find updates.

**Solutions:**

```bash
# Check current status
ai-dev-kit status

# Check for updates
ai-dev-kit check

# Update specific framework
ai-dev-kit update workflow-mgmt

# Force update
ai-dev-kit update workflow-mgmt --force

# Preview update
ai-dev-kit update workflow-mgmt --dry-run
```

**Git Backend Update Issues:**

```bash
# Ensure Git repository is accessible
cd frameworks/workflow-mgmt
git fetch origin
git status
cd ../..

# Check for remote updates
ai-dev-kit check workflow-mgmt
```

---

### Update Conflicts

**Problem:** Update fails due to conflicts or local modifications.

**Solutions:**

```bash
# Check for local modifications
ai-dev-kit status workflow-mgmt

# Force update (overwrites local changes)
ai-dev-kit update workflow-mgmt --force

# Or manually resolve conflicts
cd frameworks/workflow-mgmt
git status
# Resolve conflicts manually
cd ../..
```

---

## Migration Issues

### Migration Detection Fails

**Problem:** `ai-dev-kit migrate --detect` doesn't find frameworks.

**Solutions:**

```bash
# Check if frameworks exist
ls -la packages/frameworks/
ls -la frameworks/

# Verify framework signature files exist
find . -name "*.framework-signature" -o -name "FRAMEWORK_VERSION"

# Check project structure
# Frameworks should be in common locations:
# - packages/frameworks/
# - frameworks/
# - lib/frameworks/
```

---

### Migration Conversion Fails

**Problem:** `ai-dev-kit migrate --convert` fails.

**Solutions:**

```bash
# Preview migration first
ai-dev-kit migrate --convert --dry-run

# Convert specific framework
ai-dev-kit migrate --convert --framework workflow-mgmt

# Use different backend
ai-dev-kit migrate --convert --backend git-subtree

# Check for errors in output
ai-dev-kit migrate --convert 2>&1 | tee migration.log
```

---

## Removal Issues

### Removal Fails

**Problem:** `ai-dev-kit remove` fails or doesn't complete.

**Solutions:**

```bash
# Preview removal
ai-dev-kit remove workflow-mgmt --dry-run

# Force removal
ai-dev-kit remove workflow-mgmt --force

# Keep files but remove tracking
ai-dev-kit remove workflow-mgmt --keep-files

# Manual cleanup (if needed)
# Remove from .ai-dev-kit.yaml
# Remove Git submodule entries
# Remove framework files
```

**Git Submodule Removal Issues:**

```bash
# Manual Git submodule cleanup
git submodule deinit -f frameworks/workflow-mgmt
git rm -f frameworks/workflow-mgmt
rm -rf .git/modules/frameworks/workflow-mgmt
```

---

## Status and Check Issues

### Status Command Fails

**Problem:** `ai-dev-kit status` fails or shows incorrect information.

**Solutions:**

```bash
# Check configuration
ai-dev-kit config validate

# Verify frameworks are installed
ls -la frameworks/

# Check individual framework
ai-dev-kit status workflow-mgmt

# Use JSON output for debugging
ai-dev-kit status --json
```

---

### Check Command Shows No Updates

**Problem:** `ai-dev-kit check` doesn't show available updates.

**Solutions:**

```bash
# Check specific framework
ai-dev-kit check workflow-mgmt

# Use verbose output
ai-dev-kit check --verbose

# Check Git backend directly
cd frameworks/workflow-mgmt
git fetch origin
git log HEAD..origin/main
cd ../..
```

---

## Configuration Command Issues

### Config Get/Set Fails

**Problem:** `ai-dev-kit config get` or `config set` fails.

**Solutions:**

```bash
# Verify key exists
ai-dev-kit config list

# Use dot notation for nested keys
ai-dev-kit config get frameworks.workflow-mgmt.version

# Set value with proper YAML format
ai-dev-kit config set default_backend git-submodule
ai-dev-kit config set auto_check true

# Check configuration after setting
ai-dev-kit config get default_backend
```

---

## General Issues

### Permission Denied

**Problem:** Commands fail with "Permission denied" errors.

**Solutions:**

```bash
# Check file permissions
ls -la .ai-dev-kit.yaml
ls -la frameworks/

# Fix permissions if needed
chmod 644 .ai-dev-kit.yaml
chmod -R 755 frameworks/

# Check directory permissions
ls -ld .

# Use sudo if necessary (not recommended)
# sudo ai-dev-kit install workflow-mgmt
```

---

### Network/Connection Issues

**Problem:** Installation or updates fail due to network issues.

**Solutions:**

```bash
# Check network connectivity
ping github.com

# Check Git remote access
git ls-remote https://github.com/earlution/ai-dev-kit.git

# Use SSH instead of HTTPS (if configured)
git remote set-url origin git@github.com:earlution/ai-dev-kit.git

# Check proxy settings
echo $HTTP_PROXY
echo $HTTPS_PROXY
```

---

### Debugging

**Enable Verbose Output:**

```bash
# Most commands don't have --verbose yet, but check help
ai-dev-kit --help
ai-dev-kit install --help

# Check configuration for debugging
ai-dev-kit config list --json
```

**Check Logs:**

```bash
# Check for error messages in output
ai-dev-kit install workflow-mgmt 2>&1 | tee install.log

# Review configuration
cat .ai-dev-kit.yaml

# Check Git status
git status
```

---

## Getting Help

### Resources

- **CLI Reference:** [framework-dependency-cli-reference.md](framework-dependency-cli-reference.md)
- **Usage Examples:** [cli-usage-examples.md](cli-usage-examples.md)
- **Installation Guide:** [framework-dependency-installation-guide.md](framework-dependency-installation-guide.md)

### Reporting Issues

If you encounter an issue not covered in this guide:

1. **Check existing issues:** [GitHub Issues](https://github.com/earlution/ai-dev-kit/issues)
2. **Create new issue:** Include:
   - Command that failed
   - Error message
   - Configuration file (redacted if sensitive)
   - System information (OS, Python version, etc.)
   - Steps to reproduce

---

## Common Error Messages

### "No project root detected"

**Solution:** Run `ai-dev-kit init` in your project directory.

### "Framework not found"

**Solution:** Check framework name with `ai-dev-kit list` or use Git backend.

### "Backend not available"

**Solution:** Install required tools (Git, npm, pip) or use different backend.

### "Configuration validation failed"

**Solution:** Run `ai-dev-kit config validate --fix` to auto-fix issues.

### "Version not found"

**Solution:** Use `ai-dev-kit list --versions` to see available versions, or install latest.

---

## Best Practices

1. **Always initialize first:** Run `ai-dev-kit init` before installing frameworks
2. **Use dry-run:** Preview changes with `--dry-run` before applying
3. **Validate configuration:** Regularly run `ai-dev-kit config validate`
4. **Check status:** Use `ai-dev-kit status` to verify installations
5. **Keep backups:** Backup `.ai-dev-kit.yaml` before major changes

---

## References

- [CLI Reference](framework-dependency-cli-reference.md)
- [Usage Examples](cli-usage-examples.md)
- [Installation Guide](framework-dependency-installation-guide.md)

