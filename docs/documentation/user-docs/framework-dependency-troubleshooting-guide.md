---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:35:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Troubleshooting Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

This guide provides solutions to common issues when installing, updating, and using AI Dev Kit frameworks as dependencies. Each issue includes symptoms, causes, and step-by-step solutions.

**Quick Navigation:**
- [Installation Issues](#installation-issues)
- [Update Issues](#update-issues)
- [Uninstall Issues](#uninstall-issues)
- [Configuration Issues](#configuration-issues)
- [Path Issues](#path-issues)
- [Version Issues](#version-issues)
- [Git Submodule Issues](#git-submodule-issues)
- [CLI Tool Issues](#cli-tool-issues)
- [Framework Functionality Issues](#framework-functionality-issues)

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Installation Issues

### Issue: Framework Installation Fails

**Symptoms:**
- `ai-dev-kit install` command fails
- Error message about framework not found
- Installation completes but framework files missing

**Causes:**
- Framework name incorrect
- Version not available
- Network issues
- Permission problems
- Backend not available

**Solutions:**

**1. Verify Framework Name:**

```bash
# List available frameworks
ai-dev-kit list

# Check exact framework name
ai-dev-kit list --versions | grep workflow
```

**2. Check Version Availability:**

```bash
# List available versions
ai-dev-kit list --versions workflow-mgmt

# Use available version
ai-dev-kit install workflow-mgmt@2.0.0
```

**3. Check Network Connection:**

```bash
# Test repository access
git ls-remote https://github.com/earlution/ai-dev-kit.git

# If fails, check network/firewall
```

**4. Check Permissions:**

```bash
# Verify write permissions
ls -la frameworks/

# Fix permissions if needed
chmod -R u+w frameworks/
```

**5. Check Backend Availability:**

```bash
# Check available backends
ai-dev-kit list --backends

# Use different backend
ai-dev-kit install workflow-mgmt --backend git-submodule
```

---

### Issue: Git Submodule Not Initialized

**Symptoms:**
- Framework directory exists but is empty
- `git submodule status` shows uninitialized submodule
- Framework files not accessible

**Causes:**
- Submodule not initialized after clone
- Submodule update not run
- Submodule configuration missing

**Solutions:**

**1. Initialize Submodules:**

```bash
# Initialize all submodules
git submodule update --init --recursive

# Or initialize specific submodule
git submodule update --init .ai-dev-kit
```

**2. Clone with Submodules:**

```bash
# Clone repository with submodules
git clone --recurse-submodules <repo-url>

# Or after clone
git submodule update --init --recursive
```

**3. Check Submodule Configuration:**

```bash
# Verify .gitmodules file exists
cat .gitmodules

# Should contain:
# [submodule ".ai-dev-kit"]
#   path = .ai-dev-kit
#   url = https://github.com/earlution/ai-dev-kit.git
```

---

### Issue: Framework Files in Wrong Location

**Symptoms:**
- Framework installed but files in unexpected location
- Scripts can't find framework files
- Configuration paths incorrect

**Causes:**
- Custom installation path specified
- Default path configuration incorrect
- Framework copied to wrong directory

**Solutions:**

**1. Check Installation Path:**

```bash
# Check where framework was installed
ai-dev-kit status workflow-mgmt

# Verify path in configuration
cat .ai-dev-kit.yaml | grep -A 5 workflow-mgmt
```

**2. Reinstall to Correct Location:**

```bash
# Remove incorrectly installed framework
ai-dev-kit remove workflow-mgmt

# Reinstall to default location
ai-dev-kit install workflow-mgmt

# Or specify correct path
ai-dev-kit install workflow-mgmt --path frameworks/workflow-mgmt
```

**3. Update Configuration:**

```bash
# Edit configuration file
vim .ai-dev-kit.yaml

# Update path:
# frameworks:
#   workflow-mgmt:
#     path: "frameworks/workflow-mgmt"  # Correct path
```

---

## Update Issues

### Issue: Update Command Fails

**Symptoms:**
- `ai-dev-kit update` fails with error
- Update partially applied
- Framework in inconsistent state

**Causes:**
- Version not available
- Compatibility issues
- Git conflicts
- Permission problems
- Network issues

**Solutions:**

**1. Check Version Availability:**

```bash
# Verify version exists
ai-dev-kit list --versions workflow-mgmt

# Use available version
ai-dev-kit update workflow-mgmt@2.1.0
```

**2. Check Compatibility:**

```bash
# Check compatibility before update
ai-dev-kit check --compatibility

# Review breaking changes
ai-dev-kit changelog workflow-mgmt --breaking --from 2.0.0 --to 2.1.0
```

**3. Resolve Git Conflicts:**

```bash
# Check for uncommitted changes
git status

# Commit or stash changes
git add -A
git commit -m "Save work before framework update"

# Or stash
git stash

# Retry update
ai-dev-kit update workflow-mgmt
```

**4. Force Update:**

```bash
# Force update (use with caution)
ai-dev-kit update workflow-mgmt --force

# Verify after force update
ai-dev-kit status workflow-mgmt
```

---

### Issue: Update Not Detected

**Symptoms:**
- Framework has newer version available but not detected
- `ai-dev-kit check` shows up to date when update exists
- Manual check shows different version

**Causes:**
- Cache not refreshed
- Git tags not fetched
- Version detection logic issue
- Configuration incorrect

**Solutions:**

**1. Refresh Cache:**

```bash
# Clear cache and recheck
ai-dev-kit check --refresh

# Or manually fetch tags
cd .ai-dev-kit
git fetch origin --tags
cd ..
ai-dev-kit check
```

**2. Verify Git Tags:**

```bash
# Check available tags
cd .ai-dev-kit
git fetch origin --tags
git tag | grep workflow-mgmt | sort -V

# Should show latest version
```

**3. Check Configuration:**

```bash
# Verify framework version in config
cat .ai-dev-kit.yaml | grep -A 3 workflow-mgmt

# Check if version is pinned
# If pin: true, updates won't be detected
```

---

### Issue: Update Breaks Functionality

**Symptoms:**
- Framework works before update
- After update, validation fails
- Scripts produce errors
- Configuration incompatible

**Causes:**
- Breaking changes in update
- Configuration format changed
- Path changes
- Dependency version mismatch

**Solutions:**

**1. Rollback Update:**

```bash
# Rollback to previous version
ai-dev-kit update workflow-mgmt@2.0.0

# Or use rollback command
ai-dev-kit rollback workflow-mgmt
```

**2. Review Changelog:**

```bash
# Check what changed
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0

# Look for breaking changes
ai-dev-kit changelog workflow-mgmt --breaking
```

**3. Update Configuration:**

```bash
# Check for deprecated settings
ai-dev-kit validate-config

# Fix configuration issues
ai-dev-kit validate-config --fix

# Or manually update
vim frameworks/workflow-mgmt/rw-config.yaml
```

**4. Check Dependencies:**

```bash
# Verify dependency versions
ai-dev-kit check-compatibility

# Update dependencies if needed
ai-dev-kit update numbering-versioning
```

---

## Uninstall Issues {#uninstall-issues}

Commands, safety flags (`--recover`, `--rollback`, `--dry-run`), and cleanup patterns for removing frameworks live in the Installation guide: [Uninstalling frameworks](framework-dependency-installation-guide.md#uninstalling-frameworks).

If uninstall fails after a partial run, retry with `--recover` or use `--dry-run` first to preview changes (see Installation guide).

---

## Configuration Issues

### Issue: Configuration Not Found

**Symptoms:**
- CLI commands fail with "configuration not found"
- `.ai-dev-kit.yaml` missing
- Default configuration not working

**Causes:**
- Configuration file not created
- Configuration file in wrong location
- Configuration file corrupted
- Permissions issue

**Solutions:**

**1. Initialize Configuration:**

```bash
# Create configuration file
ai-dev-kit init

# Verify file created
ls -la .ai-dev-kit.yaml
```

**2. Check File Location:**

```bash
# Configuration should be in project root
pwd
ls -la .ai-dev-kit.yaml

# If not found, create it
ai-dev-kit init --path .
```

**3. Verify File Format:**

```bash
# Check YAML syntax
cat .ai-dev-kit.yaml

# Validate configuration
ai-dev-kit validate-config

# Fix if needed
ai-dev-kit validate-config --fix
```

---

### Issue: Configuration Invalid

**Symptoms:**
- Configuration file exists but CLI reports errors
- Commands fail with configuration errors
- Settings not applied

**Causes:**
- YAML syntax errors
- Invalid field values
- Missing required fields
- Version mismatch

**Solutions:**

**1. Validate Configuration:**

```bash
# Check for errors
ai-dev-kit validate-config

# Auto-fix if possible
ai-dev-kit validate-config --fix
```

**2. Check YAML Syntax:**

```bash
# Validate YAML syntax
python3 -c "import yaml; yaml.safe_load(open('.ai-dev-kit.yaml'))"

# Or use yamllint
yamllint .ai-dev-kit.yaml
```

**3. Review Configuration Schema:**

```bash
# Check expected structure
ai-dev-kit config list

# Compare with example
cat .ai-dev-kit.yaml
# Should match expected structure
```

**4. Reset Configuration:**

```bash
# Backup current config
cp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup

# Reset to defaults
ai-dev-kit config reset

# Restore frameworks
ai-dev-kit install workflow-mgmt@2.0.0
```

---

## Path Issues

### Issue: Framework Scripts Can't Find Files

**Symptoms:**
- Validation scripts fail with "file not found"
- Path errors in framework execution
- Configuration paths incorrect

**Causes:**
- Paths not updated after installation
- Project structure different from expected
- Configuration paths incorrect
- Relative vs absolute path issues

**Solutions:**

**1. Update Paths in Configuration:**

```bash
# Edit configuration
vim frameworks/workflow-mgmt/rw-config.yaml

# Update paths:
# project:
#   root: "."  # Current directory
# version:
#   file: "src/yourproject/version.py"  # Your actual path
```

**2. Update Paths in Scripts:**

```bash
# Find path references
cd frameworks/workflow-mgmt
grep -r "src/confidentia" .

# Replace with your paths
find . -type f \( -name "*.py" -o -name "*.yaml" \) \
  -exec sed -i '' 's|src/confidentia|src/yourproject|g' {} \;
```

**3. Use Absolute Paths:**

```bash
# In configuration, use absolute paths if relative paths fail
vim frameworks/workflow-mgmt/rw-config.yaml

# Change:
# version:
#   file: "src/yourproject/version.py"
# To:
# version:
#   file: "/absolute/path/to/project/src/yourproject/version.py"
```

**4. Verify Paths:**

```bash
# Test path resolution
cd frameworks/workflow-mgmt
python3 -c "
import os
config_path = 'rw-config.yaml'
if os.path.exists(config_path):
    print('✓ Config file found')
else:
    print('✗ Config file not found')
"
```

---

### Issue: Relative Paths Not Working

**Symptoms:**
- Scripts fail when run from different directories
- Path resolution incorrect
- Framework can't find project files

**Causes:**
- Scripts use relative paths incorrectly
- Working directory not set correctly
- Path resolution logic issue

**Solutions:**

**1. Run from Project Root:**

```bash
# Always run from project root
cd /path/to/project
ai-dev-kit status

# Or use absolute paths in scripts
```

**2. Set Working Directory:**

```bash
# In scripts, set working directory
cd "$(dirname "$0")/../.."  # Go to project root

# Or use absolute paths
PROJECT_ROOT="/path/to/project"
cd "$PROJECT_ROOT"
```

**3. Update Script Paths:**

```bash
# Make paths relative to project root
vim frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py

# Update path resolution:
# import os
# PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
# VERSION_FILE = os.path.join(PROJECT_ROOT, 'src/yourproject/version.py')
```

---

## Version Issues

### Issue: Version Mismatch

**Symptoms:**
- Version in `version.py` doesn't match branch
- Validation fails with version mismatch
- Changelog version incorrect

**Causes:**
- Version not updated before RW
- Branch context incorrect
- Version file out of sync
- Manual version edit

**Solutions:**

**1. Check Current Version:**

```bash
# Check version file
python3 -c "import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)"

# Check branch
git branch --show-current
```

**2. Update Version:**

```bash
# Edit version file
vim src/yourproject/version.py

# Update to match current work:
# VERSION_EPIC = 1
# VERSION_STORY = 1
# VERSION_TASK = 1
# VERSION_BUILD = 1
```

**3. Validate Version:**

```bash
# Run validation
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Fix any issues reported
```

---

### Issue: Version Not Incrementing

**Symptoms:**
- BUILD number not incrementing
- Version stays same after RW
- Multiple releases with same version

**Causes:**
- BUILD not incremented in version file
- RW not bumping version correctly
- Version file not updated

**Solutions:**

**1. Manually Increment BUILD:**

```bash
# Edit version file
vim src/yourproject/version.py

# Increment BUILD:
# VERSION_BUILD = 2  # Was 1, now 2
```

**2. Check RW Version Bump:**

```bash
# RW should increment BUILD automatically
# If not, check RW configuration
cat frameworks/workflow-mgmt/rw-config.yaml | grep -A 5 version
```

**3. Verify Version Update:**

```bash
# After RW, check version
python3 -c "import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)"

# Should show incremented BUILD
```

---

## Git Submodule Issues

### Issue: Submodule Points to Wrong Commit

**Symptoms:**
- Framework files outdated
- Submodule shows different commit than expected
- Framework version incorrect

**Causes:**
- Submodule not updated after tag checkout
- Wrong tag checked out
- Submodule commit out of sync

**Solutions:**

**1. Check Submodule Status:**

```bash
# Check submodule commit
cd .ai-dev-kit
git log -1 --oneline

# Check current tag
git describe --tags
```

**2. Checkout Correct Tag:**

```bash
# List available tags
git tag | grep workflow-mgmt

# Checkout correct tag
git checkout workflow-mgmt-v2.0.0

# Return to project root
cd ..

# Copy updated framework
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
```

**3. Update Submodule Reference:**

```bash
# Update submodule to latest
cd .ai-dev-kit
git fetch origin
git checkout workflow-mgmt-v2.1.0
cd ..

# Commit submodule update
git add .ai-dev-kit
git commit -m "Update submodule to workflow-mgmt-v2.1.0"
```

---

### Issue: Submodule Update Conflicts

**Symptoms:**
- `git submodule update` fails
- Merge conflicts in submodule
- Submodule in detached HEAD state

**Causes:**
- Local changes in submodule
- Submodule commit conflicts
- Submodule branch issues

**Solutions:**

**1. Reset Submodule:**

```bash
# Navigate to submodule
cd .ai-dev-kit

# Reset to remote state
git fetch origin
git reset --hard origin/main

# Or checkout specific tag
git checkout workflow-mgmt-v2.0.0
```

**2. Remove and Re-add Submodule:**

```bash
# Remove submodule
git submodule deinit .ai-dev-kit
git rm .ai-dev-kit
rm -rf .git/modules/.ai-dev-kit

# Re-add submodule
git submodule add https://github.com/earlution/ai-dev-kit.git .ai-dev-kit
cd .ai-dev-kit
git checkout workflow-mgmt-v2.0.0
cd ..
```

---

## CLI Tool Issues

### Issue: Command Not Found

**Symptoms:**
- `ai-dev-kit` command not found
- "command not found" error
- CLI tool not in PATH

**Causes:**
- CLI tool not installed
- Not in Python PATH
- Virtual environment not activated
- Installation incomplete

**Solutions:**

**1. Check Installation:**

```bash
# Check if installed
pip show ai-dev-kit

# If not installed, install it
pip install ai-dev-kit
```

**2. Check Python PATH:**

```bash
# Check Python path
python3 -m site --user-base

# Add to PATH if needed
export PATH="$HOME/.local/bin:$PATH"
```

**3. Use Python Module:**

```bash
# Run as Python module
python3 -m vibe_dev_kit install workflow-mgmt

# Or use full path
~/.local/bin/ai-dev-kit install workflow-mgmt
```

---

### Issue: CLI Configuration Errors

**Symptoms:**
- CLI commands fail with config errors
- Configuration not recognized
- Settings not applied

**Causes:**
- Configuration file format incorrect
- Configuration file missing
- Configuration version mismatch
- Permissions issue

**Solutions:**

**1. Validate Configuration:**

```bash
# Check configuration
ai-dev-kit validate-config

# Fix issues
ai-dev-kit validate-config --fix
```

**2. Reinitialize Configuration:**

```bash
# Backup current config
cp .ai-dev-kit.yaml .ai-dev-kit.yaml.backup

# Reinitialize
ai-dev-kit init

# Restore frameworks
ai-dev-kit install workflow-mgmt@2.0.0
```

---

## Framework Functionality Issues

### Issue: RW Trigger Not Working

**Symptoms:**
- Invoking Release Workflow fails, or the agent stops with **RW ABORTED** / no version bump
- Agent doesn't act on the RW trigger section
- **FR-060:** Sending only `RW` with no `E…S…T…` token in the **same** message always aborts before Step 2 — this is expected, not a broken trigger

**Causes:**
- `.cursorrules` file doesn't exist
- RW trigger section not added to `.cursorrules`
- `.cursorrules` file not properly formatted
- Cursor hasn't reloaded `.cursorrules`
- File paths in `.cursorrules` are incorrect

**Solutions:**

**1. Check if `.cursorrules` exists:**

```bash
# Check if file exists
ls -la .cursorrules

# If it doesn't exist, create it
touch .cursorrules
```

**2. Check if RW trigger section is present:**

```bash
# Search for RW trigger section
grep -i "RELEASE WORKFLOW" .cursorrules

# If not found, add the section (see installation guide)
```

**3. Add RW trigger section:**

**Option A: Use RW Installer (Recommended):**
```bash
# Run the installer to automatically add the section
python frameworks/workflow-mgmt/scripts/install_release_workflow.py
```

**Option B: Manual Setup:**
```bash
# Copy the template section
cat frameworks/workflow-mgmt/cursorrules-rw-trigger-section.md

# Add to .cursorrules (copy from "### 🚀 RELEASE WORKFLOW (RW) TRIGGER" to end)
# Update file paths in the section to match your project
```

**4. Verify file paths in `.cursorrules`:**

```bash
# Check that paths match your project structure
grep -E "version_file|changelog|kanban" .cursorrules

# Update paths if they don't match:
# - version_file: Should point to your version.py location
# - main_changelog: Should point to your CHANGELOG.md
# - kanban_root: Should point to your Kanban directory (if using Kanban)
```

**5. Reload Cursor:**

- **Restart Cursor** to reload `.cursorrules` file
- The `.cursorrules` file is loaded when Cursor starts
- Changes won't take effect until Cursor is restarted

**6. Test the trigger:**

```bash
# In Cursor chat, use FR-060 form (task id in same message as RW), e.g.:
# RW E5S01T01
# RW E5:S01:T01

# The agent should recognize the trigger and proceed past Step 1b (not RW ABORTED for missing token)
```

**7. Check for syntax errors:**

```bash
# Verify .cursorrules is valid
cat .cursorrules

# Check for:
# - Proper markdown formatting
# - Complete RW trigger section
# - No broken syntax
```

**Prevention:**
- Always run the RW installer after installing Workflow Management framework
- Verify `.cursorrules` exists and contains RW trigger section
- After installation, test with `RW <your_completed_task_id>` (not bare `RW`)
- Document `.cursorrules` setup and FR-060 in project README

---

## Framework Functionality Issues (Other)

### Issue: Release Workflow Fails

**Symptoms:**
- RW command fails
- Validation errors during RW
- RW steps incomplete

**Causes:**
- Branch context mismatch
- Version issues
- Changelog format errors
- Git issues
- Configuration problems

**Solutions:**

**1. Check Branch Context:**

```bash
# Verify branch matches version
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Fix branch or version
```

**2. Check Version:**

```bash
# Verify version file
python3 -c "import sys; sys.path.insert(0, 'src'); from yourproject import version; print(version.VERSION_STRING)"

# Update if needed
vim src/yourproject/version.py
```

**3. Check Changelog:**

```bash
# Validate changelog format
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_changelog_format.py

# Fix any format issues
```

**4. Check Git Status:**

```bash
# Ensure clean working directory
git status

# Commit or stash changes
git add -A
git commit -m "Save work"
```

---

### Issue: Kanban Update Script Fails

**Symptoms:**
- Kanban board not updating
- Update script errors
- Epic/Story docs out of sync

**Causes:**
- Script path incorrect
- File permissions
- Missing dependencies
- Configuration issues

**Solutions:**

**1. Check Script Path:**

```bash
# Verify script exists
ls -la frameworks/kanban/scripts/update-kanban-docs.py

# Check script permissions
chmod +x frameworks/kanban/scripts/update-kanban-docs.py
```

**2. Run Script Manually:**

```bash
# Run script directly
cd frameworks/kanban
python3 scripts/update-kanban-docs.py

# Check for errors
python3 scripts/update-kanban-docs.py --verbose
```

**3. Check Dependencies:**

```bash
# Verify Python dependencies
python3 -c "import yaml; print('yaml OK')"
python3 -c "import json; print('json OK')"

# Install missing dependencies
pip install pyyaml
```

---

## Getting Help

### Diagnostic Information

**Collect Diagnostic Info:**

```bash
# System information
uname -a
python3 --version
git --version

# CLI information
ai-dev-kit --version
ai-dev-kit status --verbose

# Configuration
cat .ai-dev-kit.yaml

# Framework status
ai-dev-kit status
ls -la frameworks/
```

### Reporting Issues

**Create Issue Report:**

```bash
# Use CLI to report issue
ai-dev-kit report-issue \
  --framework workflow-mgmt \
  --version 2.0.0 \
  --description "Update fails with error X"

# Or create GitHub issue with:
# - Framework name and version
# - Error message
# - Steps to reproduce
# - Diagnostic information
```

---

## References

- [Installation Guide](framework-dependency-installation-guide.md)
- [Usage Guide](framework-dependency-usage-guide.md)
- [Update Guide](framework-dependency-update-guide.md)
- [Integration Guide](framework-dependency-integration-guide.md)
- [CLI Reference](framework-dependency-cli-reference.md)

