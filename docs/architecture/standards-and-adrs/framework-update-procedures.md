---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Update Procedures

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T01 - Create framework update procedures  
**Related:** Framework Versioning Strategy, Framework Release Process, Framework Compatibility Tracking, Framework Dependency Architecture

---

## Executive Summary

This document defines the **comprehensive framework update procedures** for AI Dev Kit frameworks. The procedures cover update workflows, update methods, compatibility checking, testing processes, and rollback procedures to ensure safe and reliable framework updates across projects.

**Key Principles:**
- **Update Workflows:** Standardized processes for different update scenarios
- **Multiple Methods:** Support for Git submodules, subtrees, CLI tool, and package managers
- **Compatibility Checking:** Pre-update validation and compatibility verification
- **Testing Processes:** Update testing and validation procedures
- **Rollback Support:** Safe rollback procedures for failed updates

---

## 1. Update Workflow Overview

### 1.1 Update Workflow Types

**Automatic Updates:**
- Triggered automatically based on update policy
- PATCH versions (bug fixes, backward compatible)
- Semi-automatic for MINOR versions (with notification)

**Manual Updates:**
- User-initiated updates
- MINOR versions (new features, backward compatible)
- MAJOR versions (breaking changes, require migration)

**Scheduled Updates:**
- Periodic update checks
- Update notifications
- Batch updates for multiple frameworks

### 1.2 Update Workflow Steps

**Standard Update Workflow:**
```
1. Update Detection
   ├─ Check for available updates
   ├─ Identify update type (PATCH/MINOR/MAJOR)
   └─ Review update summary

2. Pre-Update Validation
   ├─ Check compatibility
   ├─ Review breaking changes (if MAJOR)
   ├─ Verify dependencies
   └─ Check update policy

3. Update Execution
   ├─ Backup current installation
   ├─ Execute update (method-specific)
   ├─ Update configuration files
   └─ Verify update completion

4. Post-Update Validation
   ├─ Verify framework version
   ├─ Test functionality
   ├─ Validate integration points
   └─ Check for issues

5. Rollback (if needed)
   ├─ Identify rollback trigger
   ├─ Restore previous version
   ├─ Verify rollback success
   └─ Document rollback reason
```

---

## 2. Update Detection

### 2.1 Update Notification Methods

**CLI Tool:**
```bash
# Check for updates
ai-dev-kit check

# Output:
# Framework: workflow-mgmt
#   Current: 2.0.0
#   Latest:  2.1.0
#   Update Available: ✓
#   Update Type: MINOR
#   Breaking Changes: None
```

**Manual Checking:**
- Review framework changelogs
- Check framework repository tags
- Monitor framework release announcements

**Automated Checking:**
- Scheduled update checks (daily, weekly)
- CI/CD integration
- Update notification services

### 2.2 Update Information

**Required Information:**
- Current framework version
- Available update version
- Update type (PATCH/MINOR/MAJOR)
- Breaking changes (if MAJOR)
- Migration requirements (if MAJOR)
- Changelog summary

**Update Summary:**
- What changed in the update
- New features (if MINOR)
- Bug fixes (if PATCH)
- Breaking changes (if MAJOR)
- Migration guide reference (if MAJOR)

---

## 3. Pre-Update Validation

### 3.1 Compatibility Checking

**Version Compatibility:**
- Check minimum version requirements
- Verify dependency compatibility
- Validate version ranges
- Check for version conflicts

**Dependency Compatibility:**
- Verify framework dependencies meet minimum versions
- Check for dependency conflicts
- Validate compatibility matrix
- Review dependency update requirements

**Breaking Changes:**
- Review changelog for breaking changes
- Check migration guide requirements
- Verify migration readiness
- Assess impact on project

### 3.2 Update Policy Validation

**Policy Checks:**
- Verify update policy allows update type
- Check version pinning status
- Validate auto-update settings
- Review update approval requirements

**Policy Examples:**
```yaml
# .ai-dev-kit.yaml
update_policy:
  patch: auto      # Automatic PATCH updates
  minor: notify    # Notify for MINOR updates
  major: manual    # Manual MAJOR updates

frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: false     # Allow updates
```

### 3.3 Pre-Update Checklist

**Required Checks:**
- [ ] Current framework version documented
- [ ] Update version identified
- [ ] Compatibility verified
- [ ] Breaking changes reviewed (if MAJOR)
- [ ] Migration guide reviewed (if MAJOR)
- [ ] Update policy allows update
- [ ] Backup created (recommended)
- [ ] Testing plan prepared

---

## 4. Update Execution

### 4.1 Update Methods

**Method 1: Git Submodules**

**Manual Update:**
```bash
# 1. Navigate to submodule
cd .ai-dev-kit

# 2. Fetch latest changes
git fetch origin

# 3. List available versions
git tag | grep workflow-mgt

# 4. Checkout new version
git checkout workflow-mgt-v2.1.0

# 5. Return to project root
cd ..

# 6. Copy updated framework
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt

# 7. Commit update
git add frameworks/
git commit -m "Update workflow-mgmt framework to v2.1.0"
```

**Automated Update Script:**
```bash
#!/bin/bash
# update-framework.sh
FRAMEWORK=$1
VERSION=$2

cd .ai-dev-kit
git fetch origin
git checkout "${FRAMEWORK}-v${VERSION}"
cd ..
cp -r ".ai-dev-kit/packages/frameworks/${FRAMEWORK}/" "./frameworks/${FRAMEWORK}/"
git add frameworks/
git commit -m "Update ${FRAMEWORK} framework to v${VERSION}"
```

**Method 2: Git Subtrees**

**Update Process:**
```bash
# 1. Pull latest changes from framework repository
git subtree pull --prefix=frameworks/workflow-mgmt \
    https://github.com/earlution/ai-dev-kit.git \
    workflow-mgt-v2.1.0 \
    --squash

# 2. Resolve conflicts if any
# 3. Commit update
git commit -m "Update workflow-mgmt framework to v2.1.0"
```

**Method 3: CLI Tool**

**Update Commands:**
```bash
# Update specific framework
ai-dev-kit update workflow-mgmt

# Update to specific version
ai-dev-kit update workflow-mgmt@2.1.0

# Update all frameworks
ai-dev-kit update --all

# Dry run (preview changes)
ai-dev-kit update workflow-mgmt --dry-run

# Update with compatibility check
ai-dev-kit update workflow-mgmt --check-compatibility
```

**CLI Update Process:**
1. Check for available updates
2. Validate compatibility
3. Backup current installation
4. Execute update
5. Update configuration files
6. Run post-update validation

**Method 4: Package Managers**

**npm:**
```bash
# Update to latest compatible version
npm update @ai-dev-kit/workflow-mgmt

# Update to specific version
npm install @ai-dev-kit/workflow-mgmt@2.1.0

# Update all frameworks
npm update
```

**pip:**
```bash
# Update to latest version
pip install --upgrade ai-dev-kit-workflow-mgmt

# Update to specific version
pip install --upgrade ai-dev-kit-workflow-mgmt==2.1.0

# Update all frameworks
pip install --upgrade -r requirements.txt
```

### 4.2 Update Execution Steps

**Standard Execution:**
1. **Backup:** Create backup of current installation (recommended)
2. **Download:** Fetch new framework version
3. **Install:** Install/update framework files
4. **Configure:** Update configuration files
5. **Verify:** Verify installation success

**Backup Process:**
```bash
# Backup current framework installation
cp -r frameworks/workflow-mgmt frameworks/workflow-mgmt.backup

# Or use Git
git commit -m "Backup before framework update"
```

**Configuration Updates:**
- Update `.ai-dev-kit.yaml` version
- Update `package.json` or `requirements.txt` (if using package managers)
- Update framework paths if changed
- Update integration references if needed

---

## 5. Post-Update Validation

### 5.1 Version Verification

**Version Checks:**
- Verify framework version updated correctly
- Check version in `README.md`
- Verify version in configuration files
- Confirm version matches expected update

**Verification Commands:**
```bash
# Check framework version
grep "Version:" frameworks/workflow-mgmt/README.md

# Check CLI tool version
ai-dev-kit status

# Check package manager version
npm list @ai-dev-kit/workflow-mgmt
pip show ai-dev-kit-workflow-mgmt
```

### 5.2 Functionality Testing

**Test Categories:**
- **Basic Functionality:** Core framework features work
- **Integration Points:** Framework integrates correctly with project
- **Configuration:** Framework configuration is valid
- **Dependencies:** Framework dependencies are compatible

**Testing Process:**
1. Run framework-specific tests
2. Test integration points
3. Verify configuration
4. Check for errors or warnings
5. Validate functionality

**Testing Commands:**
```bash
# Run framework tests (if available)
cd frameworks/workflow-mgmt
npm test  # or pytest, etc.

# Test integration
# Run project tests that use framework
npm test

# Check for errors
ai-dev-kit check
```

### 5.3 Integration Validation

**Integration Checks:**
- Framework files accessible
- Framework paths correct
- Framework imports work
- Framework configuration valid
- Framework dependencies resolved

**Validation Tools:**
- Framework-specific validation scripts
- Integration tests
- Manual testing
- CI/CD validation

---

## 6. Update Testing Processes

### 6.1 Testing Strategy

**Test Levels:**
- **Unit Tests:** Framework-specific functionality
- **Integration Tests:** Framework integration with project
- **System Tests:** End-to-end framework usage
- **Regression Tests:** Verify no regressions introduced

**Testing Workflow:**
```
1. Pre-Update Testing
   ├─ Run current test suite
   ├─ Document baseline behavior
   └─ Identify test coverage

2. Update Execution
   ├─ Execute update
   └─ Verify update completion

3. Post-Update Testing
   ├─ Run test suite
   ├─ Compare with baseline
   ├─ Identify new issues
   └─ Validate fixes

4. Integration Testing
   ├─ Test framework integration
   ├─ Verify configuration
   └─ Check dependencies
```

### 6.2 Test Environments

**Testing Environments:**
- **Development:** Test updates in development first
- **Staging:** Validate updates in staging environment
- **Production:** Deploy updates to production after validation

**Environment Strategy:**
1. Test update in development
2. Validate in staging
3. Deploy to production
4. Monitor for issues

### 6.3 Test Automation

**Automated Testing:**
- CI/CD integration for update testing
- Automated compatibility checks
- Automated functionality tests
- Automated regression tests

**CI/CD Integration:**
```yaml
# .github/workflows/framework-update-test.yml
name: Framework Update Test
on:
  workflow_dispatch:
    inputs:
      framework:
        description: 'Framework to update'
        required: true
      version:
        description: 'Version to update to'
        required: true

jobs:
  test-update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update framework
        run: ai-dev-kit update ${{ inputs.framework }}@${{ inputs.version }}
      - name: Run tests
        run: npm test
```

---

## 7. Rollback Procedures

### 7.1 Rollback Triggers

**When to Rollback:**
- Update causes functionality breakage
- Update introduces critical bugs
- Update breaks integration points
- Update causes configuration errors
- Update fails validation

**Rollback Decision:**
- Assess severity of issue
- Determine if rollback is necessary
- Consider alternative fixes
- Document rollback reason

### 7.2 Rollback Methods

**Method 1: Git Submodules**

**Rollback Process:**
```bash
# 1. Navigate to submodule
cd .ai-dev-kit

# 2. Checkout previous version
git checkout workflow-mgt-v2.0.0

# 3. Return to project root
cd ..

# 4. Copy previous framework version
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt

# 5. Commit rollback
git add frameworks/
git commit -m "Rollback workflow-mgmt framework to v2.0.0 (reason: breaking change)"
```

**Method 2: Git Subtrees**

**Rollback Process:**
```bash
# 1. Pull previous version
git subtree pull --prefix=frameworks/workflow-mgmt \
    https://github.com/earlution/ai-dev-kit.git \
    workflow-mgt-v2.0.0 \
    --squash

# 2. Commit rollback
git commit -m "Rollback workflow-mgmt framework to v2.0.0"
```

**Method 3: CLI Tool**

**Rollback Commands:**
```bash
# Rollback to previous version
ai-dev-kit update workflow-mgmt@2.0.0

# Or restore from backup
ai-dev-kit restore workflow-mgmt --backup
```

**Method 4: Package Managers**

**npm:**
```bash
# Install previous version
npm install @ai-dev-kit/workflow-mgmt@2.0.0
```

**pip:**
```bash
# Install previous version
pip install ai-dev-kit-workflow-mgmt==2.0.0
```

**Method 5: Backup Restoration**

**Restore from Backup:**
```bash
# Restore from backup directory
cp -r frameworks/workflow-mgmt.backup frameworks/workflow-mgmt

# Or restore from Git commit
git checkout HEAD~1 -- frameworks/workflow-mgmt
```

### 7.3 Rollback Validation

**Post-Rollback Checks:**
- Verify previous version restored
- Test functionality
- Validate integration
- Check for rollback issues
- Document rollback completion

**Rollback Documentation:**
- Document rollback reason
- Record previous and rolled-back versions
- Note any issues encountered
- Update compatibility tracking

---

## 8. Update Procedures by Update Type

### 8.1 PATCH Version Updates

**Update Type:** Bug fixes, corrections (backward compatible)

**Update Process:**
1. **Detection:** Automatic or manual check
2. **Validation:** Quick compatibility check
3. **Execution:** Automatic or manual update
4. **Validation:** Basic functionality test
5. **Completion:** Update documented

**Update Policy:**
- Automatic updates recommended
- Minimal testing required
- Low risk of issues
- Quick rollback if needed

**Example:**
```bash
# Automatic PATCH update
ai-dev-kit update workflow-mgmt  # Updates 2.0.0 → 2.0.1

# Or manual
git checkout workflow-mgt-v2.0.1
```

### 8.2 MINOR Version Updates

**Update Type:** New features, enhancements (backward compatible)

**Update Process:**
1. **Detection:** Notification or manual check
2. **Validation:** Compatibility check, review changelog
3. **Execution:** Manual or semi-automatic update
4. **Validation:** Functionality and integration testing
5. **Completion:** Update documented, new features tested

**Update Policy:**
- Automatic or semi-automatic updates
- Moderate testing required
- Low to moderate risk
- Review new features

**Example:**
```bash
# MINOR update with notification
ai-dev-kit check  # Notifies: 2.0.0 → 2.1.0 available
ai-dev-kit update workflow-mgmt  # User approves update
```

### 8.3 MAJOR Version Updates

**Update Type:** Breaking changes, incompatible changes

**Update Process:**
1. **Detection:** Manual check or notification
2. **Validation:** Review breaking changes, migration guide
3. **Planning:** Plan migration strategy
4. **Execution:** Manual update with migration
5. **Validation:** Comprehensive testing, migration verification
6. **Completion:** Migration documented, update verified

**Update Policy:**
- Manual updates required
- Comprehensive testing required
- High risk (breaking changes)
- Migration guide required

**Example:**
```bash
# MAJOR update with migration
# 1. Review migration guide
cat frameworks/workflow-mgmt/MIGRATION_GUIDE.md

# 2. Plan migration
# 3. Execute update
ai-dev-kit update workflow-mgmt@3.0.0

# 4. Complete migration steps
# 5. Test thoroughly
```

---

## 9. Update Best Practices

### 9.1 Update Timing

**Best Practices:**
- Update PATCH versions immediately (bug fixes)
- Update MINOR versions when new features are needed
- Update MAJOR versions when ready for migration
- Test updates in development first
- Schedule updates during low-activity periods

### 9.2 Update Preparation

**Preparation Steps:**
- Review changelog before updating
- Check compatibility requirements
- Prepare testing plan
- Create backup (recommended)
- Schedule update window

### 9.3 Update Execution

**Execution Best Practices:**
- Follow update procedures step-by-step
- Monitor update process
- Verify each step completion
- Document any issues encountered
- Test immediately after update

### 9.4 Update Documentation

**Documentation Requirements:**
- Document update version
- Record update date and method
- Note any issues or workarounds
- Update compatibility tracking
- Document rollback if needed

---

## 10. Update Troubleshooting

### 10.1 Common Issues

**Issue: Update Fails**

**Symptoms:**
- Update command fails
- Framework files not updated
- Version not changed

**Solutions:**
- Check update method compatibility
- Verify framework version exists
- Check network connectivity
- Review error messages
- Try alternative update method

**Issue: Compatibility Conflicts**

**Symptoms:**
- Dependency version conflicts
- Framework incompatibility
- Integration breakage

**Solutions:**
- Review compatibility matrix
- Update dependencies first
- Check version requirements
- Resolve conflicts manually
- Consider delaying update

**Issue: Functionality Breakage**

**Symptoms:**
- Framework features not working
- Integration errors
- Configuration issues

**Solutions:**
- Review changelog for changes
- Check migration guide
- Verify configuration
- Test integration points
- Consider rollback

### 10.2 Update Recovery

**Recovery Process:**
1. Identify issue
2. Assess severity
3. Determine recovery method
4. Execute recovery (rollback or fix)
5. Validate recovery
6. Document issue and recovery

---

## 11. Related Documentation

### 11.1 Core Documents

- **Framework Versioning Strategy:** `framework-versioning-strategy.md`
  - Framework versioning schema and conventions
  - Version bump criteria

- **Framework Release Process:** `framework-release-process.md`
  - Framework release workflow
  - Release validation procedures

- **Framework Compatibility Tracking:** `framework-compatibility-tracking.md`
  - Compatibility matrix
  - Backward compatibility policies

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Framework installation methods
  - Dependency management strategies

### 11.2 Supporting Documents

- **Framework Dependency Update Guide:** `docs/documentation/user-docs/framework-dependency-update-guide.md`
  - User-facing update guide
  - Update examples and workflows

- **Package Maintenance and Release:** `package-maintenance-and-release.md`
  - Package maintenance guide
  - PVW execution

---

## 12. Summary

### 12.1 Key Principles

1. **Standardized Workflows:** Consistent update processes across all methods
2. **Multiple Methods:** Support for Git submodules, subtrees, CLI tool, package managers
3. **Compatibility Checking:** Pre-update validation and compatibility verification
4. **Testing Processes:** Comprehensive update testing and validation
5. **Rollback Support:** Safe rollback procedures for failed updates

### 12.2 Update Workflow

```
Update Detection → Pre-Update Validation → Update Execution → 
Post-Update Validation → Testing → Completion (or Rollback)
```

### 12.3 Update Methods

- **Git Submodules:** Manual or automated checkout of framework tags
- **Git Subtrees:** Merge framework tags into project
- **CLI Tool:** Unified interface for all update operations
- **Package Managers:** Standard npm/pip update workflows

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S02:T01 - Create framework update procedures

