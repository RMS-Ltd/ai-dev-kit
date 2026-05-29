---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Update Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

This guide explains how to update AI Dev Kit frameworks when new versions are available. It covers update mechanisms, notification systems, version compatibility, and how to respond to update notifications.

**Key Feature:** When frameworks are updated in the ai-dev-kit repository, you receive notifications about available updates and can update your project's framework dependencies automatically or manually.

### Scope (greenfield vs brownfield)

- **Greenfield / new-template first run (FR-080):** [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md) · [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- **Policy:** [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · Brownfield track: [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Update Mechanisms

### Automatic Updates

Automatic updates apply framework updates without manual intervention, based on your update policy.

#### Update Policies

**Auto-Update Policy (Recommended for PATCH updates):**

```yaml
# In .ai-dev-kit.yaml
update_policy:
  patch: auto      # Auto-update patch versions (2.0.0 → 2.0.1)
  minor: notify    # Notify for minor updates (2.0.0 → 2.1.0)
  major: manual    # Require manual approval for major updates (2.0.0 → 3.0.0)
```

**Manual Update Policy (Recommended for production):**

```yaml
update_policy:
  patch: notify    # Notify but don't auto-update
  minor: notify
  major: notify
```

#### Automatic Update Process

**1. Update Detection:**

The system checks for updates periodically (daily, weekly, or on-demand):

```bash
# CLI tool checks for updates
ai-dev-kit check

# Or configure automatic checking
ai-dev-kit config set auto_check true
ai-dev-kit config set check_interval daily
```

**2. Update Application:**

If auto-update is enabled for the update type:

```bash
# Automatic update happens in background
# Or triggered by:
ai-dev-kit update --auto
```

**3. Update Notification:**

You receive notification about the update:

```
Framework Update Applied:
  workflow-mgmt: 2.0.0 → 2.0.1 (PATCH)
  Changes: Bug fixes and performance improvements
  Status: Applied successfully
  Review: frameworks/workflow-mgmt/CHANGELOG.md
```

### Manual Updates

Manual updates require explicit approval before applying.

#### Manual Update Process

**1. Check for Updates:**

```bash
# Check all frameworks
ai-dev-kit check

# Output:
# Framework: workflow-mgmt
#   Current: 2.0.0
#   Latest:  2.1.0
#   Type:    MINOR
#   Status:  Update available
```

**2. Review Update:**

```bash
# View changelog
cat frameworks/workflow-mgmt/CHANGELOG.md

# Or view specific version changes
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0
```

**3. Apply Update:**

```bash
# Update specific framework
ai-dev-kit update workflow-mgmt

# Update to specific version
ai-dev-kit update workflow-mgmt@2.1.0

# Update all frameworks
ai-dev-kit update --all
```

**4. Verify Update:**

```bash
# Check updated version
ai-dev-kit status workflow-mgmt

# Test framework functionality
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py
```

---

## Update Notifications

### Notification Methods

#### CLI Notifications

**Check Command Output:**

```bash
$ ai-dev-kit check

Available Updates:
  ⚠️  workflow-mgmt: 2.0.0 → 2.1.0 (MINOR)
      Changes: New features, improved performance
      Breaking: None
      Action: Run 'ai-dev-kit update workflow-mgmt' to update

  ✓ kanban: 1.0.0 (up to date)
  ✓ numbering-versioning: 2.0.0 (up to date)
```

**Status Command:**

```bash
$ ai-dev-kit status

Installed Frameworks:
  workflow-mgmt: 2.0.0 (update available: 2.1.0)
  kanban: 1.0.0 (up to date)
  numbering-versioning: 2.0.0 (up to date)
```

#### Git Submodule Notifications

**Check Submodule Status:**

```bash
# Navigate to submodule
cd .ai-dev-kit

# Fetch latest tags
git fetch origin

# List new tags
git tag | grep workflow-mgmt | sort -V

# Compare current vs latest
git describe --tags
# Current: workflow-mgmt-v2.0.0

git tag | grep workflow-mgmt | tail -1
# Latest: workflow-mgmt-v2.1.0
```

**Update Notification Script:**

Create `scripts/check-framework-updates.sh`:

```bash
#!/bin/bash
# Check for framework updates

cd .ai-dev-kit
git fetch origin

echo "Checking for framework updates..."

for framework in workflow-mgmt kanban numbering-versioning; do
  current=$(git describe --tags --match "${framework}-*" 2>/dev/null | cut -d- -f3)
  latest=$(git tag | grep "^${framework}-" | sort -V | tail -1 | cut -d- -f3)
  
  if [ "$current" != "$latest" ]; then
    echo "⚠️  ${framework}: ${current} → ${latest} (update available)"
  else
    echo "✓ ${framework}: ${current} (up to date)"
  fi
done
```

#### Package Manager Notifications

**npm:**

```bash
# Check for outdated packages
npm outdated

# Output:
# Package                    Current  Wanted  Latest
# @ai-dev-kit/workflow-mgmt  2.0.0   2.0.1   2.1.0
```

**pip:**

```bash
# Check for outdated packages
pip list --outdated

# Output:
# Package                    Version  Latest
# ai-dev-kit-workflow-mgmt  2.0.0    2.1.0
```

### Notification Configuration

#### Configure Notification Frequency

```bash
# Check daily
ai-dev-kit config set check_interval daily

# Check weekly
ai-dev-kit config set check_interval weekly

# Check on-demand only
ai-dev-kit config set check_interval manual
```

#### Configure Notification Channels

```bash
# Console output (default)
ai-dev-kit config set notification_channel console

# Email notifications (future)
ai-dev-kit config set notification_channel email
ai-dev-kit config set email your@email.com

# Slack notifications (future)
ai-dev-kit config set notification_channel slack
ai-dev-kit config set slack_webhook https://hooks.slack.com/...
```

---

## Version Compatibility

### Semantic Versioning

Frameworks use Semantic Versioning (SemVer): `MAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes (2.0.0 → 3.0.0)
- **MINOR:** New features, backward compatible (2.0.0 → 2.1.0)
- **PATCH:** Bug fixes, backward compatible (2.0.0 → 2.0.1)

### Compatibility Checking

**Check Compatibility Before Update:**

```bash
# Check if update is compatible
ai-dev-kit check --compatibility

# Output:
# Framework: workflow-mgmt
#   Current: 2.0.0
#   Latest:  2.1.0
#   Compatibility: ✓ Compatible (MINOR update, backward compatible)
#   Breaking Changes: None
```

**Check Breaking Changes:**

```bash
# View breaking changes
ai-dev-kit changelog workflow-mgmt --breaking

# Or check specific version range
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 3.0.0 --breaking
```

### Version Pinning

**Pin to Specific Version:**

```yaml
# In .ai-dev-kit.yaml
frameworks:
  workflow-mgmt:
    version: "2.0.0"  # Pinned version
    pin: true         # Prevent automatic updates
```

**Update Pinned Version:**

```bash
# Update pin manually
ai-dev-kit update workflow-mgmt@2.1.0 --pin

# Or edit .ai-dev-kit.yaml directly
vim .ai-dev-kit.yaml
```

---

## Update Procedures by Backend

### Git Submodules

#### Manual Update

```bash
# 1. Navigate to submodule
cd .ai-dev-kit

# 2. Fetch latest changes
git fetch origin

# 3. List available versions
git tag | grep workflow-mgmt

# 4. Checkout new version
git checkout workflow-mgmt-v2.1.0

# 5. Return to project root
cd ..

# 6. Copy updated framework
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt

# 7. Commit update
git add frameworks/
git commit -m "Update workflow-mgmt framework to v2.1.0"
```

#### Automated Update Script

Create `scripts/update-frameworks.sh`:

```bash
#!/bin/bash
set -e

FRAMEWORK=$1
VERSION=$2

if [ -z "$FRAMEWORK" ] || [ -z "$VERSION" ]; then
  echo "Usage: $0 <framework> <version>"
  echo "Example: $0 workflow-mgmt 2.1.0"
  exit 1
fi

# Navigate to submodule
cd .ai-dev-kit

# Fetch and checkout version
git fetch origin
git checkout "${FRAMEWORK}-v${VERSION}"

# Return to project root
cd ..

# Copy updated framework
FRAMEWORK_DIR=$(echo "$FRAMEWORK" | sed 's/-mgmt/-mgt/' | sed 's/-/_/g')
cp -r ".ai-dev-kit/packages/frameworks/${FRAMEWORK_DIR}/" "./frameworks/${FRAMEWORK}/"

echo "✓ Updated ${FRAMEWORK} to v${VERSION}"
echo "Review changes and commit:"
echo "  git add frameworks/"
echo "  git commit -m 'Update ${FRAMEWORK} framework to v${VERSION}'"
```

### CLI Tool

#### Update Commands

```bash
# Update specific framework
ai-dev-kit update workflow-mgmt

# Update to specific version
ai-dev-kit update workflow-mgmt@2.1.0

# Update all frameworks
ai-dev-kit update --all

# Dry run (preview changes)
ai-dev-kit update workflow-mgmt --dry-run
```

#### Update Process

The CLI tool handles:
1. Checking for updates
2. Validating compatibility
3. Updating framework files
4. Updating configuration
5. Running post-update validation

### Package Managers

#### npm

```bash
# Update to latest compatible version
npm update @ai-dev-kit/workflow-mgmt

# Update to specific version
npm install @ai-dev-kit/workflow-mgmt@2.1.0

# Update all frameworks
npm update
```

#### pip

```bash
# Update to latest version
pip install --upgrade ai-dev-kit-workflow-mgmt

# Update to specific version
pip install --upgrade ai-dev-kit-workflow-mgmt==2.1.0

# Update all frameworks
pip install --upgrade -r requirements.txt
```

---

## Responding to Update Notifications

### When to Update

**Update Immediately:**
- PATCH updates (bug fixes, security patches)
- Critical security vulnerabilities
- Critical bug fixes affecting your usage

**Update Soon:**
- MINOR updates (new features, improvements)
- Performance improvements
- New features you need

**Update When Ready:**
- MAJOR updates (breaking changes)
- Major feature additions
- Architectural changes

### Update Workflow

**1. Receive Notification:**

```
⚠️  Framework Update Available:
    workflow-mgmt: 2.0.0 → 2.1.0 (MINOR)
    Changes: New validation features, improved error messages
    Breaking: None
```

**2. Review Changes:**

```bash
# View changelog
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0

# Or read framework changelog
cat frameworks/workflow-mgmt/CHANGELOG.md
```

**3. Check Compatibility:**

```bash
# Verify compatibility
ai-dev-kit check --compatibility workflow-mgmt
```

**4. Test Update (Recommended):**

```bash
# Create test branch
git checkout -b test/framework-update

# Apply update
ai-dev-kit update workflow-mgmt@2.1.0

# Test framework
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Run your project tests
# ...

# If tests pass, merge to main
git checkout main
git merge test/framework-update
```

**5. Apply Update:**

```bash
# Update framework
ai-dev-kit update workflow-mgmt

# Or update manually (Git submodules)
./scripts/update-frameworks.sh workflow-mgmt 2.1.0
```

**6. Verify Update:**

```bash
# Check version
ai-dev-kit status workflow-mgmt

# Test functionality
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py
```

---

## Rollback Procedures

### Rollback to Previous Version

**CLI Tool:**

```bash
# Rollback to previous version
ai-dev-kit update workflow-mgmt@2.0.0

# Or use rollback command (if available)
ai-dev-kit rollback workflow-mgmt
```

**Git Submodules:**

```bash
# Navigate to submodule
cd .ai-dev-kit

# Checkout previous version
git checkout workflow-mgmt-v2.0.0

# Return to project root
cd ..

# Copy previous version
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt

# Commit rollback
git add frameworks/
git commit -m "Rollback workflow-mgmt to v2.0.0"
```

**Package Managers:**

```bash
# npm
npm install @ai-dev-kit/workflow-mgmt@2.0.0

# pip
pip install --upgrade ai-dev-kit-workflow-mgmt==2.0.0
```

### Rollback After Issues

**1. Identify Issue:**

```bash
# Check framework logs
cat frameworks/workflow-mgmt/logs/error.log

# Test framework
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py
```

**2. Rollback:**

```bash
# Rollback to previous version
ai-dev-kit update workflow-mgmt@2.0.0
```

**3. Report Issue:**

```bash
# Create issue report
ai-dev-kit report-issue workflow-mgmt \
  --version 2.1.0 \
  --description "Validation script fails after update"
```

---

## Update Testing

### Pre-Update Testing

**1. Create Test Branch:**

```bash
git checkout -b test/framework-update-workflow-mgmt-2.1.0
```

**2. Apply Update:**

```bash
ai-dev-kit update workflow-mgmt@2.1.0 --dry-run
# Review changes

ai-dev-kit update workflow-mgmt@2.1.0
```

**3. Run Tests:**

```bash
# Framework validation
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py
python3 scripts/validation/validate_changelog_format.py

# Project tests
# Run your project's test suite
```

**4. Test RW:**

```bash
# Test Release Workflow (FR-060: same message must include E…S…T…, e.g. RW E5S01T01)
# Verify all steps complete successfully
```

### Post-Update Validation

**1. Verify Version:**

```bash
ai-dev-kit status workflow-mgmt
# Should show: 2.1.0
```

**2. Verify Functionality:**

```bash
# Test framework commands
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py --help
```

**3. Check Configuration:**

```bash
# Verify configuration still valid
cat frameworks/workflow-mgmt/rw-config.yaml
# Check for any deprecated settings
```

---

## Update Best Practices

### Regular Update Schedule

**Recommended Schedule:**
- **PATCH updates:** Apply immediately or weekly
- **MINOR updates:** Review monthly, apply quarterly
- **MAJOR updates:** Review quarterly, plan migration

**Automated Checking:**

```bash
# Set up daily checks
ai-dev-kit config set check_interval daily

# Or add to CI/CD
# .github/workflows/check-framework-updates.yml
```

### Version Pinning Strategy

**Development:**
- Pin to specific versions for stability
- Update regularly for new features

**Production:**
- Pin to stable versions
- Test updates in development first
- Apply updates during maintenance windows

### Update Documentation

**Document Updates:**

```bash
# After updating, document in project changelog
vim CHANGELOG.md

# Add entry:
# ## [Unreleased]
# - Updated workflow-mgmt framework to v2.1.0
#   - New validation features
#   - Improved error messages
```

---

## Troubleshooting Updates

### Update Fails

**Issue: Update command fails**

```bash
# Check for conflicts
ai-dev-kit status

# Check Git status
git status

# Resolve conflicts manually
# Then retry update
```

### Version Mismatch

**Issue: Version not updating**

```bash
# Check current version
ai-dev-kit status workflow-mgmt

# Force update
ai-dev-kit update workflow-mgmt --force

# Or manually update
./scripts/update-frameworks.sh workflow-mgmt 2.1.0
```

### Configuration Conflicts

**Issue: Configuration conflicts after update**

```bash
# Check for deprecated settings
ai-dev-kit validate-config

# Review configuration changes
ai-dev-kit changelog workflow-mgmt --config

# Update configuration
vim frameworks/workflow-mgmt/rw-config.yaml
```

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for more detailed solutions.

---

## Uninstalling Frameworks

### When to Uninstall

You may need to uninstall a framework in these scenarios:

- **Framework no longer needed:** Project no longer uses the framework
- **Switching backends:** Moving from Git submodule to npm, or vice versa
- **Recovering from errors:** Failed installation left project in broken state
- **Handling breaking changes:** Update introduced breaking changes, need to rollback
- **Cleaning up:** Removing unused frameworks to reduce project size

### Uninstall Methods

#### Method 1: Using Uninstall Script (Recommended)

**Standard Uninstall:**
```bash
# Auto-detect backend and uninstall
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt

# Specify backend
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt --backend git-submodule

# Preview changes first (dry run)
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt --dry-run
```

**Recovery Mode:**
```bash
# Clean up failed installation
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt --recover
```

**Rollback Mode:**
```bash
# Restore from backup or remove entirely
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt --rollback
```

#### Method 2: Manual Uninstall

**Git Submodule:**
```bash
# Remove submodule
git submodule deinit -f packages/frameworks/workflow-mgmt
git rm -f packages/frameworks/workflow-mgmt
rm -rf .git/modules/packages/frameworks/workflow-mgmt

# Update .gitmodules
vim .gitmodules  # Remove submodule entry
git add .gitmodules
git commit -m "Remove workflow-mgmt submodule"
```

**npm Package:**
```bash
npm uninstall @ai-dev-kit/workflow-mgmt
```

**pip Package:**
```bash
pip uninstall ai-dev-kit-workflow-mgmt
```

### Uninstall Safety Features

The uninstall script includes several safety features:

1. **Backup Creation:** Creates timestamped backup before removal
2. **Dependency Validation:** Checks for dependencies before removal
3. **Confirmation Prompts:** Asks for confirmation before removing files
4. **Dry-Run Mode:** Preview changes without modifying files
5. **Verification:** Verifies cleanup after uninstall

### Restoring from Backup

If you need to restore a package from backup:

```bash
# List available backups
ls -la .backup-workflow-mgmt-*

# Restore from backup
cp -r .backup-workflow-mgmt-20251210-120000/* packages/frameworks/

# Or use rollback mode
python3 packages/frameworks/workflow\ mgt/scripts/uninstall_package.py workflow-mgmt --rollback
```

---

## Next Steps

After understanding update mechanisms:

1. **Configure update notifications:** Set up automatic checking
2. **Set update policy:** Choose auto/manual update strategy
3. **Test update process:** Try updating in a test branch
4. **Set up CI/CD:** Automate update checking

---

## References

- [Installation Guide](framework-dependency-installation-guide.md)
- [Usage Guide](framework-dependency-usage-guide.md)
- [Integration Guide](framework-dependency-integration-guide.md)
- [CLI Reference](framework-dependency-cli-reference.md)
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)

