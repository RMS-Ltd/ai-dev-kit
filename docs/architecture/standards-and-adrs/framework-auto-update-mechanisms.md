---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Auto-Update Mechanisms

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T05 - Create auto-update mechanisms  
**Related:** Framework Update Procedures, Framework Migration Guide, Framework Dependency Architecture

---

## Executive Summary

This document defines the **auto-update mechanisms** for AI Dev Kit frameworks. The mechanisms support automatic and semi-automatic updates for Git submodules, Git subtrees, CLI tool, and package managers, with configurable update policies, version pinning, and automated testing workflows.

**Key Principles:**
- **Update Policies:** Configurable automatic, semi-automatic, and manual update policies
- **Multiple Backends:** Support for Git submodules, subtrees, CLI tool, and package managers
- **Version Pinning:** Flexible version pinning and update control
- **Automated Testing:** Automated update testing workflows
- **Safety First:** Backup, validation, and rollback procedures

---

## 1. Auto-Update Overview

### 1.1 Update Policy Types

**Automatic Updates:**
- Triggered automatically based on update policy
- PATCH versions (bug fixes, backward compatible)
- Semi-automatic for MINOR versions (with notification)
- No user intervention required

**Semi-Automatic Updates:**
- Update detection and notification
- User approval required
- MINOR versions (new features, backward compatible)
- User-initiated update execution

**Manual Updates:**
- User-initiated updates
- MAJOR versions (breaking changes, require migration)
- Full user control

### 1.2 Update Policy Configuration

**Policy Configuration:**
```yaml
# .ai-dev-kit.yaml
update_policy:
  patch: auto      # Automatic PATCH updates
  minor: notify    # Notify for MINOR updates
  major: manual    # Manual MAJOR updates

auto_check:
  enabled: true
  interval: daily  # daily, weekly, monthly
  time: "02:00"    # UTC time for scheduled checks

frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: false     # Allow updates
    auto_update: true  # Enable auto-updates
```

**Policy Options:**
- `auto`: Automatic updates without user intervention
- `notify`: Notify user of available updates
- `manual`: Require manual user approval

---

## 2. Git Submodule Auto-Update

### 2.1 Automated Update Script

**Update Script:**
```bash
#!/bin/bash
# scripts/auto-update-frameworks.sh
set -e

FRAMEWORK=$1
UPDATE_TYPE=${2:-patch}  # patch, minor, major

if [ -z "$FRAMEWORK" ]; then
    echo "Usage: $0 <framework> [update_type]"
    echo "Example: $0 workflow-mgmt patch"
    exit 1
fi

# Navigate to submodule
cd .ai-dev-kit

# Fetch latest changes
git fetch origin

# Get current version
CURRENT_VERSION=$(git describe --tags --abbrev=0 2>/dev/null || echo "unknown")

# Get available versions
AVAILABLE_VERSIONS=$(git tag | grep "${FRAMEWORK}-v" | sort -V)

# Determine target version based on update type
if [ "$UPDATE_TYPE" = "patch" ]; then
    # Get latest patch version for current minor
    TARGET_VERSION=$(echo "$AVAILABLE_VERSIONS" | grep "^${FRAMEWORK}-v${CURRENT_VERSION%.*}" | tail -1)
elif [ "$UPDATE_TYPE" = "minor" ]; then
    # Get latest minor version for current major
    TARGET_VERSION=$(echo "$AVAILABLE_VERSIONS" | grep "^${FRAMEWORK}-v${CURRENT_VERSION%%.*}" | tail -1)
else
    # Get latest version
    TARGET_VERSION=$(echo "$AVAILABLE_VERSIONS" | tail -1)
fi

if [ -z "$TARGET_VERSION" ] || [ "$TARGET_VERSION" = "$CURRENT_VERSION" ]; then
    echo "No updates available for $FRAMEWORK"
    exit 0
fi

# Checkout target version
git checkout "$TARGET_VERSION"

# Return to project root
cd ..

# Copy updated framework
FRAMEWORK_DIR=$(echo "$FRAMEWORK" | sed 's/-mgmt/-mgt/' | sed 's/-/_/g')
cp -r ".ai-dev-kit/packages/frameworks/${FRAMEWORK_DIR}/" "./frameworks/${FRAMEWORK}/"

# Commit update
git add frameworks/
git commit -m "Auto-update ${FRAMEWORK} framework to ${TARGET_VERSION}"

echo "✓ Updated ${FRAMEWORK} to ${TARGET_VERSION}"
```

### 2.2 Scheduled Update Script

**Cron Job Setup:**
```bash
# Add to crontab (crontab -e)
# Daily update check at 2 AM UTC
0 2 * * * /path/to/project/scripts/auto-update-frameworks.sh workflow-mgmt patch >> /var/log/framework-updates.log 2>&1
```

**Scheduled Update Script:**
```bash
#!/bin/bash
# scripts/scheduled-update-check.sh
set -e

CONFIG_FILE=".ai-dev-kit.yaml"

# Load update policy from config
if [ -f "$CONFIG_FILE" ]; then
    PATCH_POLICY=$(yq eval '.update_policy.patch' "$CONFIG_FILE" 2>/dev/null || echo "notify")
    MINOR_POLICY=$(yq eval '.update_policy.minor' "$CONFIG_FILE" 2>/dev/null || echo "notify")
    MAJOR_POLICY=$(yq eval '.update_policy.major' "$CONFIG_FILE" 2>/dev/null || echo "manual")
else
    PATCH_POLICY="notify"
    MINOR_POLICY="notify"
    MAJOR_POLICY="manual"
fi

# Check for updates
cd .ai-dev-kit
git fetch origin

# Check each framework
for framework in workflow-mgmt kanban numbering-versioning; do
    # Check for updates
    CURRENT=$(git describe --tags --abbrev=0 2>/dev/null || echo "unknown")
    LATEST=$(git tag | grep "${framework}-v" | sort -V | tail -1)
    
    if [ "$CURRENT" != "$LATEST" ]; then
        # Determine update type
        UPDATE_TYPE=$(determine_update_type "$CURRENT" "$LATEST")
        
        # Apply update policy
        case "$UPDATE_TYPE" in
            patch)
                if [ "$PATCH_POLICY" = "auto" ]; then
                    /path/to/scripts/auto-update-frameworks.sh "$framework" patch
                elif [ "$PATCH_POLICY" = "notify" ]; then
                    notify_update_available "$framework" "$CURRENT" "$LATEST" "$UPDATE_TYPE"
                fi
                ;;
            minor)
                if [ "$MINOR_POLICY" = "auto" ]; then
                    /path/to/scripts/auto-update-frameworks.sh "$framework" minor
                elif [ "$MINOR_POLICY" = "notify" ]; then
                    notify_update_available "$framework" "$CURRENT" "$LATEST" "$UPDATE_TYPE"
                fi
                ;;
            major)
                if [ "$MAJOR_POLICY" = "auto" ]; then
                    /path/to/scripts/auto-update-frameworks.sh "$framework" major
                elif [ "$MAJOR_POLICY" = "notify" ]; then
                    notify_update_available "$framework" "$CURRENT" "$LATEST" "$UPDATE_TYPE"
                fi
                ;;
        esac
    fi
done
```

### 2.3 Update Notification

**Notification Script:**
```bash
#!/bin/bash
# scripts/notify-update-available.sh
FRAMEWORK=$1
CURRENT=$2
LATEST=$3
UPDATE_TYPE=$4

# Send notification (email, Slack, etc.)
echo "Framework update available: $FRAMEWORK"
echo "Current: $CURRENT"
echo "Latest: $LATEST"
echo "Type: $UPDATE_TYPE"

# Example: Send email
# mail -s "Framework Update Available: $FRAMEWORK" user@example.com << EOF
# Framework: $FRAMEWORK
# Current Version: $CURRENT
# Latest Version: $LATEST
# Update Type: $UPDATE_TYPE
# 
# To update, run:
# ./scripts/auto-update-frameworks.sh $FRAMEWORK $UPDATE_TYPE
# EOF
```

---

## 3. Git Subtree Auto-Update

### 3.1 Automated Update Script

**Update Script:**
```bash
#!/bin/bash
# scripts/auto-update-subtree.sh
set -e

FRAMEWORK=$1
VERSION=$2

if [ -z "$FRAMEWORK" ] || [ -z "$VERSION" ]; then
    echo "Usage: $0 <framework> <version>"
    echo "Example: $0 workflow-mgmt v2.1.0"
    exit 1
fi

# Pull latest version
git subtree pull --prefix=frameworks/$FRAMEWORK \
    https://github.com/earlution/ai-dev-kit.git \
    ${FRAMEWORK}-${VERSION} \
    --squash

# Commit update
git commit -m "Auto-update ${FRAMEWORK} framework to ${VERSION}"

echo "✓ Updated ${FRAMEWORK} to ${VERSION}"
```

### 3.2 Scheduled Update

**Scheduled Update Script:**
```bash
#!/bin/bash
# scripts/scheduled-subtree-update.sh
set -e

# Check for updates
git fetch https://github.com/earlution/ai-dev-kit.git

# Check each framework
for framework in workflow-mgmt kanban numbering-versioning; do
    CURRENT=$(git log -1 --pretty=format:"%s" -- frameworks/$framework | grep -oP "${framework}-v\K[0-9.]+" || echo "unknown")
    LATEST=$(git ls-remote --tags https://github.com/earlution/ai-dev-kit.git | grep "${framework}-v" | sort -V | tail -1 | sed 's/.*refs\/tags\///')
    
    if [ "$CURRENT" != "$LATEST" ]; then
        # Apply update policy
        UPDATE_TYPE=$(determine_update_type "$CURRENT" "$LATEST")
        
        if should_auto_update "$UPDATE_TYPE"; then
            ./scripts/auto-update-subtree.sh "$framework" "$LATEST"
        else
            notify_update_available "$framework" "$CURRENT" "$LATEST" "$UPDATE_TYPE"
        fi
    fi
done
```

---

## 4. CLI Tool Auto-Update

### 4.1 CLI Tool Update Commands

**Automatic Update:**
```bash
# Update specific framework
ai-dev-kit update workflow-mgmt

# Update all frameworks
ai-dev-kit update --all

# Update with policy
ai-dev-kit update workflow-mgmt --policy auto
```

**Scheduled Update Check:**
```bash
# Check for updates
ai-dev-kit check

# Configure automatic checking
ai-dev-kit config set auto_check true
ai-dev-kit config set check_interval daily
```

### 4.2 CLI Tool Update Script

**Update Script:**
```bash
#!/bin/bash
# scripts/cli-auto-update.sh
set -e

# Load update policy from config
CONFIG_FILE=".ai-dev-kit.yaml"
PATCH_POLICY=$(yq eval '.update_policy.patch' "$CONFIG_FILE" 2>/dev/null || echo "notify")
MINOR_POLICY=$(yq eval '.update_policy.minor' "$CONFIG_FILE" 2>/dev/null || echo "notify")
MAJOR_POLICY=$(yq eval '.update_policy.major' "$CONFIG_FILE" 2>/dev/null || echo "manual")

# Check for updates
UPDATES=$(ai-dev-kit check --json)

# Process each update
echo "$UPDATES" | jq -r '.frameworks[] | select(.update_available == true) | "\(.name) \(.current) \(.latest) \(.update_type)"' | while read -r name current latest type; do
    # Apply update policy
    case "$type" in
        patch)
            if [ "$PATCH_POLICY" = "auto" ]; then
                ai-dev-kit update "$name"
            elif [ "$PATCH_POLICY" = "notify" ]; then
                notify_update_available "$name" "$current" "$latest" "$type"
            fi
            ;;
        minor)
            if [ "$MINOR_POLICY" = "auto" ]; then
                ai-dev-kit update "$name"
            elif [ "$MINOR_POLICY" = "notify" ]; then
                notify_update_available "$name" "$current" "$latest" "$type"
            fi
            ;;
        major)
            if [ "$MAJOR_POLICY" = "auto" ]; then
                ai-dev-kit update "$name"
            elif [ "$MAJOR_POLICY" = "notify" ]; then
                notify_update_available "$name" "$current" "$latest" "$type"
            fi
            ;;
    esac
done
```

### 4.3 CLI Tool Scheduled Updates

**Cron Job Setup:**
```bash
# Add to crontab (crontab -e)
# Daily update check at 2 AM UTC
0 2 * * * /path/to/project/scripts/cli-auto-update.sh >> /var/log/framework-updates.log 2>&1
```

---

## 5. Package Manager Auto-Update

### 5.1 npm Auto-Update

**Update Script:**
```bash
#!/bin/bash
# scripts/npm-auto-update.sh
set -e

# Update to latest compatible version
npm update @ai-dev-kit/workflow-mgmt

# Or update to specific version
npm install @ai-dev-kit/workflow-mgmt@latest

# Update all frameworks
npm update
```

**Scheduled Update:**
```bash
# Add to package.json
{
  "scripts": {
    "update-frameworks": "npm update @ai-dev-kit/workflow-mgmt @ai-dev-kit/kanban"
  }
}

# Run scheduled update
npm run update-frameworks
```

### 5.2 pip Auto-Update

**Update Script:**
```bash
#!/bin/bash
# scripts/pip-auto-update.sh
set -e

# Update to latest version
pip install --upgrade ai-dev-kit-workflow-mgmt

# Update all frameworks
pip install --upgrade -r requirements.txt
```

**Scheduled Update:**
```bash
# Add to requirements.txt
ai-dev-kit-workflow-mgmt>=2.0.0
ai-dev-kit-kanban>=1.0.0

# Update all
pip install --upgrade -r requirements.txt
```

---

## 6. Version Pinning and Update Policies

### 6.1 Version Pinning

**Pin to Specific Version:**
```yaml
# .ai-dev-kit.yaml
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: true     # Prevent automatic updates
```

**Pin Configuration:**
- `pin: true` - Prevent all automatic updates
- `pin: false` - Allow automatic updates (default)
- `pin: patch` - Allow PATCH updates only
- `pin: minor` - Allow PATCH and MINOR updates

### 6.2 Update Policies

**Policy Configuration:**
```yaml
# .ai-dev-kit.yaml
update_policy:
  patch: auto      # Automatic PATCH updates
  minor: notify    # Notify for MINOR updates
  major: manual    # Manual MAJOR updates

frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: false
    auto_update: true
    update_policy:
      patch: auto
      minor: notify
      major: manual
```

**Policy Options:**
- `auto`: Automatic updates without user intervention
- `notify`: Notify user of available updates
- `manual`: Require manual user approval

### 6.3 Update Policy Examples

**Development Environment:**
```yaml
update_policy:
  patch: auto      # Auto-update bug fixes
  minor: auto      # Auto-update new features
  major: notify     # Notify for breaking changes
```

**Production Environment:**
```yaml
update_policy:
  patch: notify    # Notify for bug fixes
  minor: notify    # Notify for new features
  major: manual     # Manual approval for breaking changes
```

**Staging Environment:**
```yaml
update_policy:
  patch: auto      # Auto-update bug fixes
  minor: notify    # Notify for new features
  major: notify     # Notify for breaking changes
```

---

## 7. Automated Update Testing

### 7.1 Pre-Update Testing

**Testing Script:**
```bash
#!/bin/bash
# scripts/test-before-update.sh
set -e

FRAMEWORK=$1
VERSION=$2

echo "Testing before update: $FRAMEWORK to $VERSION"

# Run current tests
npm test

# Check for breaking changes
ai-dev-kit changelog "$FRAMEWORK" --from current --to "$VERSION" --breaking

# Validate compatibility
ai-dev-kit check --compatibility
```

### 7.2 Post-Update Testing

**Testing Script:**
```bash
#!/bin/bash
# scripts/test-after-update.sh
set -e

FRAMEWORK=$1
VERSION=$2

echo "Testing after update: $FRAMEWORK to $VERSION"

# Run tests
npm test

# Validate functionality
ai-dev-kit check

# Check for issues
ai-dev-kit status
```

### 7.3 Automated Testing Workflow

**CI/CD Integration:**
```yaml
# .github/workflows/auto-update-test.yml
name: Auto-Update Test
on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:

jobs:
  test-update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check for updates
        run: ai-dev-kit check
      - name: Test updates
        run: |
          for framework in workflow-mgmt kanban; do
            ai-dev-kit update $framework --dry-run
            ./scripts/test-before-update.sh $framework latest
          done
```

---

## 8. Update Notification Systems

### 8.1 Notification Methods

**Email Notifications:**
```bash
# Send email notification
mail -s "Framework Update Available" user@example.com << EOF
Framework: workflow-mgmt
Current: 2.0.0
Latest: 2.1.0
Update Type: MINOR

To update, run:
ai-dev-kit update workflow-mgmt
EOF
```

**Slack Notifications:**
```bash
# Send Slack notification
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"Framework update available: workflow-mgmt (2.0.0 → 2.1.0)"}' \
  https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

**GitHub Issues:**
```bash
# Create GitHub issue for update
gh issue create \
  --title "Framework Update Available: workflow-mgmt" \
  --body "Update from 2.0.0 to 2.1.0 (MINOR update)"
```

### 8.2 Notification Configuration

**Configuration:**
```yaml
# .ai-dev-kit.yaml
notifications:
  enabled: true
  methods:
    - email
    - slack
  email:
    to: user@example.com
  slack:
    webhook_url: https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

---

## 9. Update Rollback Procedures

### 9.1 Automatic Rollback

**Rollback Script:**
```bash
#!/bin/bash
# scripts/auto-rollback.sh
set -e

FRAMEWORK=$1
PREVIOUS_VERSION=$2

echo "Rolling back $FRAMEWORK to $PREVIOUS_VERSION"

# Restore previous version
ai-dev-kit update "$FRAMEWORK@$PREVIOUS_VERSION"

# Or restore from backup
if [ -d ".backup/frameworks/$FRAMEWORK" ]; then
    cp -r ".backup/frameworks/$FRAMEWORK" "./frameworks/$FRAMEWORK"
fi

# Test rollback
npm test

echo "✓ Rolled back $FRAMEWORK to $PREVIOUS_VERSION"
```

### 9.2 Rollback Triggers

**Automatic Rollback Conditions:**
- Update causes test failures
- Update breaks functionality
- Update causes integration errors
- Update fails validation

**Rollback Configuration:**
```yaml
# .ai-dev-kit.yaml
auto_rollback:
  enabled: true
  triggers:
    - test_failure
    - validation_error
    - integration_error
```

---

## 10. Best Practices

### 10.1 Update Policy Best Practices

**Development:**
- Enable automatic PATCH and MINOR updates
- Notify for MAJOR updates
- Test updates in development first

**Staging:**
- Enable automatic PATCH updates
- Notify for MINOR and MAJOR updates
- Validate updates in staging

**Production:**
- Notify for all updates
- Manual approval for all updates
- Test thoroughly before production deployment

### 10.2 Update Scheduling Best Practices

**Scheduling:**
- Schedule updates during low-activity periods
- Use daily checks for development
- Use weekly checks for production
- Monitor update logs

**Timing:**
- Avoid updates during critical periods
- Schedule updates during maintenance windows
- Coordinate updates across teams

### 10.3 Update Testing Best Practices

**Testing:**
- Always test updates before applying
- Run comprehensive test suites
- Test integration points
- Validate functionality

**Validation:**
- Verify version updates
- Check for breaking changes
- Validate compatibility
- Monitor for issues

---

## 11. Related Documentation

### 11.1 Core Documents

- **Framework Update Procedures:** `framework-update-procedures.md`
  - Update workflows and methods
  - Manual update procedures

- **Framework Migration Guide:** `framework-migration-guide.md`
  - Migration procedures
  - Migration tools

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Dependency installation methods
  - Backend selection

### 11.2 Supporting Documents

- **Framework Dependency Update Guide:** `docs/documentation/user-docs/framework-dependency-update-guide.md`
  - User-facing update guide
  - Update examples

- **CLI Tool Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
  - CLI tool commands
  - Update command reference

---

## 12. Summary

### 12.1 Key Principles

1. **Update Policies:** Configurable automatic, semi-automatic, and manual update policies
2. **Multiple Backends:** Support for Git submodules, subtrees, CLI tool, and package managers
3. **Version Pinning:** Flexible version pinning and update control
4. **Automated Testing:** Automated update testing workflows
5. **Safety First:** Backup, validation, and rollback procedures

### 12.2 Auto-Update Workflow

```
Update Detection → Policy Check → Update Execution → Testing → Validation → Completion (or Rollback)
```

### 12.3 Update Methods

- **Git Submodules:** Automated update scripts and scheduled checks
- **Git Subtrees:** Automated pull and merge procedures
- **CLI Tool:** Unified interface for all update operations
- **Package Managers:** Standard npm/pip update workflows

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S02:T05 - Create auto-update mechanisms

