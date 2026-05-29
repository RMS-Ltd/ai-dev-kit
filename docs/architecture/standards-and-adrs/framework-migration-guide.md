---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Migration Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 2 - Framework Update and Migration  
**Task:** E6:S02:T02 - Build migration guides and tools  
**Related:** Framework Update Procedures, Framework Dependency Architecture, Framework Compatibility Tracking

---

## Executive Summary

This document provides comprehensive migration guides and tools for converting AI Dev Kit frameworks from copy-paste installations to dependency-based installations, migrating between dependency backends, and upgrading framework versions. The guide covers migration scenarios, step-by-step procedures, automated tools, and troubleshooting.

**Key Principles:**
- **Migration Scenarios:** Support for multiple migration paths (copy-paste → dependency, backend changes, version upgrades)
- **Automated Tools:** CLI tool and scripts for automated migration
- **Manual Procedures:** Step-by-step guides for manual migration
- **Safety First:** Backup, validation, and rollback procedures
- **Customization Preservation:** Methods to preserve project-specific customizations

---

## 1. Migration Scenarios

### 1.1 Copy-Paste to Dependency Migration

**Scenario:** Project has frameworks installed via manual copy-paste, wants to migrate to dependency-based installation.

**Use Cases:**
- Initial migration from copy-paste to Git submodules
- Migration to CLI tool management
- Migration to package managers (when available)

**Benefits:**
- Automatic update notifications
- Version tracking
- Consistent framework versions
- Standard dependency management

### 1.2 Backend Migration

**Scenario:** Project has frameworks installed via one backend (e.g., Git submodules), wants to migrate to another backend (e.g., Git subtrees or package managers).

**Use Cases:**
- Git submodules → Git subtrees
- Git submodules → CLI tool
- Git subtrees → Package managers
- CLI tool → Package managers

**Benefits:**
- Better integration with project workflow
- Improved update mechanisms
- Standard dependency management

### 1.3 Version Upgrade Migration

**Scenario:** Project needs to upgrade frameworks to newer versions, potentially with breaking changes.

**Use Cases:**
- PATCH version upgrades (bug fixes)
- MINOR version upgrades (new features)
- MAJOR version upgrades (breaking changes)

**Benefits:**
- Access to new features
- Bug fixes and security patches
- Improved performance

### 1.4 Multi-Framework Migration

**Scenario:** Project has multiple frameworks to migrate simultaneously.

**Use Cases:**
- Migrating all frameworks at once
- Coordinated framework updates
- Batch migration operations

**Benefits:**
- Consistent migration process
- Reduced migration time
- Unified configuration

---

## 2. Migration Assessment

### 2.1 Pre-Migration Assessment

**Assessment Checklist:**
- [ ] Identify current framework installations
- [ ] Document framework versions
- [ ] Identify customizations
- [ ] Assess migration complexity
- [ ] Plan migration strategy
- [ ] Prepare backup plan

**Assessment Tools:**

**CLI Tool Detection:**
```bash
# Detect copy-paste frameworks
ai-dev-kit migrate --detect

# Output:
# Detected frameworks:
#   - workflow-mgmt (./frameworks/workflow-mgmt)
#     Version: 2.0.0 (detected)
#     Confidence: 0.95
#   - kanban (./frameworks/kanban)
#     Version: unknown
#     Confidence: 0.85
```

**Manual Detection:**
```bash
# Find copied frameworks
find . -type d -name "workflow*" -o -name "kanban*" -o -name "numbering*"

# Check for framework files
ls -la frameworks/ 2>/dev/null || echo "No frameworks directory"

# Identify framework versions (if documented)
grep -r "version.*2\." frameworks/*/README.md 2>/dev/null
```

### 2.2 Customization Identification

**Common Customizations:**
- Path updates (project-specific paths)
- Configuration changes (rw-config.yaml, .cursorrules)
- Custom scripts or templates
- Documentation updates
- Integration code modifications

**Customization Detection:**
```bash
# Compare with original framework
diff -r frameworks/workflow-mgmt/ \
      /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/

# Or use Git to track changes
cd frameworks/workflow-mgmt
git status  # If frameworks were in Git
```

**Customization Documentation:**
Create `migration-customizations.md`:
```markdown
# Framework Customizations

## workflow-mgmt
- Modified: scripts/validation/validate_branch_context.py
  - Custom branch naming convention
- Modified: rw-config.yaml
  - Project-specific paths
- Added: custom-templates/
  - Project-specific templates

## kanban
- Modified: templates/EPIC_TEMPLATE.md
  - Custom epic structure
```

### 2.3 Migration Planning

**Migration Plan Template:**
```markdown
# Framework Migration Plan

## Current State
- workflow-mgmt: Copied manually, version 2.0.0
- kanban: Copied manually, version unknown
- Location: ./frameworks/

## Target State
- workflow-mgmt: Git submodule, version 2.1.0
- kanban: Git submodule, version 1.0.0
- Location: ./frameworks/ (same)

## Migration Steps
1. Backup current frameworks
2. Remove copied frameworks
3. Install as dependencies
4. Restore customizations
5. Test functionality
6. Validate migration

## Risk Assessment
- Low risk: No customizations
- Medium risk: Minor customizations
- High risk: Extensive customizations

## Rollback Plan
- Backup location: .backup/frameworks/
- Rollback method: Restore from backup
```

---

## 3. Migration Procedures

### 3.1 Copy-Paste to Dependency Migration

**Method 1: CLI Tool (Recommended)**

**Automated Migration:**
```bash
# Step 1: Detect frameworks
ai-dev-kit migrate --detect

# Step 2: Preview migration (dry run)
ai-dev-kit migrate --convert --dry-run

# Step 3: Convert frameworks
ai-dev-kit migrate --convert --backend git-submodule

# Step 4: Complete installation
ai-dev-kit install workflow-mgmt@2.1.0
ai-dev-kit install kanban@1.0.0

# Step 5: Validate migration
ai-dev-kit migrate --validate
```

**CLI Tool Process:**
1. **Detection:** Scans project for copy-paste frameworks
2. **Backup:** Creates backup of existing frameworks
3. **Removal:** Removes copy-paste installations
4. **Configuration:** Updates `.ai-dev-kit.yaml`
5. **Installation:** Installs frameworks via selected backend
6. **Validation:** Verifies migration success

**Method 2: Manual Migration (Git Submodules)**

**Step-by-Step:**
```bash
# Step 1: Backup current frameworks
mkdir -p .backup/frameworks
cp -r frameworks/ .backup/frameworks/
git add frameworks/
git commit -m "Backup frameworks before migration"

# Step 2: Remove copied frameworks
rm -rf frameworks/workflow-mgmt
rm -rf frameworks/kanban
git add frameworks/
git commit -m "Remove copied frameworks before migration"

# Step 3: Add ai-dev-kit as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git .ai-dev-kit

# Step 4: Checkout framework versions
cd .ai-dev-kit
git fetch origin
git checkout workflow-mgmt-v2.1.0
cd ..

# Step 5: Copy frameworks to installation path
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
cp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban

# Step 6: Restore customizations (if any)
# Apply customizations from backup

# Step 7: Commit migration
git add frameworks/
git commit -m "Migrate frameworks to Git submodules"
```

**Method 3: Manual Migration (CLI Tool)**

**Step-by-Step:**
```bash
# Step 1: Initialize CLI tool
ai-dev-kit init

# Step 2: Install frameworks
ai-dev-kit install workflow-mgmt@2.1.0
ai-dev-kit install kanban@1.0.0

# Step 3: Restore customizations (if any)
# Apply customizations from backup

# Step 4: Validate installation
ai-dev-kit check
```

### 3.2 Backend Migration

**Git Submodules → Git Subtrees:**

```bash
# Step 1: Remove Git submodule
git submodule deinit -f frameworks/workflow-mgmt
git rm -f frameworks/workflow-mgmt
rm -rf .git/modules/frameworks/workflow-mgmt

# Step 2: Add as Git subtree
git subtree add --prefix=frameworks/workflow-mgmt \
    https://github.com/earlution/ai-dev-kit.git \
    workflow-mgmt-v2.1.0 \
    --squash

# Step 3: Update configuration
# Edit .ai-dev-kit.yaml to change backend to git-subtree
```

**Git Submodules → CLI Tool:**

```bash
# Step 1: Remove Git submodule
git submodule deinit -f frameworks/workflow-mgmt
git rm -f frameworks/workflow-mgmt
rm -rf .git/modules/frameworks/workflow-mgmt

# Step 2: Initialize CLI tool (if not already)
ai-dev-kit init

# Step 3: Install via CLI tool
ai-dev-kit install workflow-mgmt@2.1.0

# Step 4: Update configuration
# CLI tool automatically updates .ai-dev-kit.yaml
```

**CLI Tool → Package Managers:**

```bash
# Step 1: Remove CLI-managed framework
ai-dev-kit remove workflow-mgmt

# Step 2: Install via package manager
npm install @ai-dev-kit/workflow-mgmt@2.1.0
# or
pip install ai-dev-kit-workflow-mgmt==2.1.0

# Step 3: Update configuration
# Edit .ai-dev-kit.yaml to change backend to npm or pip
```

### 3.3 Version Upgrade Migration

**PATCH Version Upgrade:**

```bash
# Automatic upgrade (if update policy allows)
ai-dev-kit update workflow-mgmt

# Or manual
ai-dev-kit update workflow-mgmt@2.0.1
```

**MINOR Version Upgrade:**

```bash
# Step 1: Check for updates
ai-dev-kit check

# Step 2: Review changelog
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 2.1.0

# Step 3: Update framework
ai-dev-kit update workflow-mgmt@2.1.0

# Step 4: Test functionality
# Run project tests
```

**MAJOR Version Upgrade:**

```bash
# Step 1: Review breaking changes
ai-dev-kit changelog workflow-mgmt --from 2.0.0 --to 3.0.0 --breaking

# Step 2: Review migration guide
cat frameworks/workflow-mgmt/MIGRATION_GUIDE.md

# Step 3: Plan migration
# Document required changes

# Step 4: Backup current installation
ai-dev-kit backup workflow-mgmt

# Step 5: Update framework
ai-dev-kit update workflow-mgmt@3.0.0

# Step 6: Apply migration steps
# Follow migration guide

# Step 7: Test thoroughly
# Run comprehensive tests
```

### 3.4 Multi-Framework Migration

**Batch Migration:**

```bash
# Step 1: Detect all frameworks
ai-dev-kit migrate --detect

# Step 2: Convert all frameworks
ai-dev-kit migrate --convert --backend git-submodule

# Step 3: Install all frameworks
ai-dev-kit install workflow-mgmt@2.1.0 kanban@1.0.0 numbering-versioning@2.0.0

# Step 4: Validate all migrations
ai-dev-kit migrate --validate
```

**Sequential Migration:**

```bash
# Migrate one framework at a time
for framework in workflow-mgmt kanban numbering-versioning; do
    echo "Migrating $framework..."
    ai-dev-kit migrate --convert --framework $framework
    ai-dev-kit install $framework@latest
    ai-dev-kit migrate --validate
done
```

---

## 4. Migration Tools

### 4.1 CLI Tool Migration Commands

**Detect Frameworks:**
```bash
ai-dev-kit migrate --detect
```

**Convert Frameworks:**
```bash
ai-dev-kit migrate --convert [--framework <name>] [--backend <type>] [--dry-run]
```

**Validate Migration:**
```bash
ai-dev-kit migrate --validate
```

**Full Migration Workflow:**
```bash
# Detect → Convert → Install → Validate
ai-dev-kit migrate --detect
ai-dev-kit migrate --convert --backend git-submodule
ai-dev-kit install workflow-mgmt@latest
ai-dev-kit migrate --validate
```

### 4.2 Migration Scripts

**Automated Migration Script:**

Create `scripts/migrate-frameworks.sh`:
```bash
#!/bin/bash
set -e

# Configuration
BACKEND="${1:-git-submodule}"
FRAMEWORKS="${@:2}"

echo "🔍 Detecting frameworks..."
ai-dev-kit migrate --detect

echo "🔄 Converting frameworks to $BACKEND..."
if [ -z "$FRAMEWORKS" ]; then
    ai-dev-kit migrate --convert --backend "$BACKEND"
else
    for framework in $FRAMEWORKS; do
        ai-dev-kit migrate --convert --framework "$framework" --backend "$BACKEND"
    done
fi

echo "📦 Installing frameworks..."
# Install detected frameworks
ai-dev-kit install --all

echo "✅ Validating migration..."
ai-dev-kit migrate --validate

echo "✓ Migration complete!"
```

**Usage:**
```bash
chmod +x scripts/migrate-frameworks.sh
./scripts/migrate-frameworks.sh git-submodule
./scripts/migrate-frameworks.sh git-submodule workflow-mgmt kanban
```

**Backup Script:**

Create `scripts/backup-frameworks.sh`:
```bash
#!/bin/bash
set -e

BACKUP_DIR=".backup/frameworks-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Backing up frameworks to $BACKUP_DIR..."

# Backup frameworks directory
if [ -d "frameworks" ]; then
    cp -r frameworks/ "$BACKUP_DIR/"
fi

# Backup configuration
if [ -f ".ai-dev-kit.yaml" ]; then
    cp .ai-dev-kit.yaml "$BACKUP_DIR/"
fi

echo "✓ Backup complete: $BACKUP_DIR"
```

### 4.3 Migration Validation Tools

**CLI Validation:**
```bash
ai-dev-kit migrate --validate
```

**Manual Validation Checklist:**
- [ ] Framework files exist at expected paths
- [ ] Framework versions match expected versions
- [ ] Configuration files updated correctly
- [ ] Framework functionality works
- [ ] Integration points functional
- [ ] No errors or warnings

**Validation Script:**

Create `scripts/validate-migration.sh`:
```bash
#!/bin/bash
set -e

echo "🔍 Validating framework migration..."

# Check CLI tool validation
if command -v ai-dev-kit &> /dev/null; then
    ai-dev-kit migrate --validate
fi

# Check framework files
for framework in frameworks/*/; do
    if [ -d "$framework" ]; then
        echo "Checking $framework..."
        if [ ! -f "$framework/README.md" ]; then
            echo "⚠️  Warning: $framework missing README.md"
        fi
    fi
done

echo "✓ Validation complete"
```

---

## 5. Customization Preservation

### 5.1 Customization Types

**Configuration Customizations:**
- `rw-config.yaml` - Project-specific paths
- `.cursorrules` - Project-specific rules
- Framework configuration files

**Code Customizations:**
- Modified framework scripts
- Custom templates
- Integration code

**Documentation Customizations:**
- Project-specific documentation
- Custom examples
- Modified guides

### 5.2 Preservation Methods

**Method 1: Configuration Override**

```yaml
# .ai-dev-kit.yaml
frameworks:
  workflow-mgmt:
    version: "2.1.0"
    backend: "git-submodule"
    config_overrides:
      rw_config:
        version_file: "src/myproject/version.py"
        main_changelog: "CHANGELOG.md"
```

**Method 2: Customization Patches**

```bash
# Create patch file
diff -u frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \
      .backup/frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \
      > patches/workflow-mgmt-branch-validation.patch

# Apply patch after migration
patch -p1 < patches/workflow-mgmt-branch-validation.patch
```

**Method 3: Customization Directory**

```bash
# Store customizations separately
mkdir -p customizations/workflow-mgmt

# Copy custom files
cp .backup/frameworks/workflow-mgmt/custom-script.sh \
   customizations/workflow-mgmt/

# Integrate customizations
# Link or copy customizations to framework
```

**Method 4: Framework Fork**

```bash
# Fork framework repository
git clone https://github.com/earlution/ai-dev-kit.git
cd ai-dev-kit
git checkout workflow-mgmt-v2.1.0

# Apply customizations
# Commit customizations

# Use fork as dependency
git submodule add /path/to/fork .ai-dev-kit
```

### 5.3 Customization Migration Workflow

**Step 1: Document Customizations**
```bash
# Create customization inventory
cat > migration-customizations.md << EOF
# Framework Customizations

## workflow-mgmt
- Modified: scripts/validation/validate_branch_context.py
  - Custom branch naming
- Modified: rw-config.yaml
  - Project paths
EOF
```

**Step 2: Backup Customizations**
```bash
# Backup custom files
mkdir -p .backup/customizations
cp frameworks/workflow-mgmt/scripts/validation/validate_branch_context.py \
   .backup/customizations/
```

**Step 3: Migrate Framework**
```bash
# Perform migration
ai-dev-kit migrate --convert --framework workflow-mgmt
```

**Step 4: Restore Customizations**
```bash
# Apply customizations
cp .backup/customizations/validate_branch_context.py \
   frameworks/workflow-mgmt/scripts/validation/
```

**Step 5: Test Customizations**
```bash
# Verify customizations work
# Run tests
```

---

## 6. Migration Troubleshooting

### 6.1 Common Issues

**Issue: Framework Not Detected**

**Symptoms:**
- `ai-dev-kit migrate --detect` returns no results
- Framework exists but not recognized

**Solutions:**
- Check framework signature files exist
- Verify framework directory structure
- Use manual detection methods
- Check framework name variations

**Issue: Migration Fails**

**Symptoms:**
- Migration command fails
- Framework files not migrated
- Configuration not updated

**Solutions:**
- Check error messages
- Verify backup exists
- Check file permissions
- Review migration logs
- Try manual migration

**Issue: Customizations Lost**

**Symptoms:**
- Custom files missing after migration
- Configuration not preserved
- Functionality broken

**Solutions:**
- Restore from backup
- Reapply customizations
- Check customization preservation methods
- Verify customization paths

**Issue: Version Conflicts**

**Symptoms:**
- Framework version mismatch
- Dependency conflicts
- Compatibility issues

**Solutions:**
- Check version requirements
- Review compatibility matrix
- Update dependencies
- Resolve conflicts manually

### 6.2 Rollback Procedures

**Rollback from CLI Tool Migration:**

```bash
# Step 1: Remove migrated framework
ai-dev-kit remove workflow-mgmt

# Step 2: Restore from backup
cp -r .ai-dev-kit-migration-backup/workflow-mgmt ./frameworks/

# Step 3: Restore configuration
# Edit .ai-dev-kit.yaml to remove framework entry
```

**Rollback from Git Submodule Migration:**

```bash
# Step 1: Remove Git submodule
git submodule deinit -f frameworks/workflow-mgmt
git rm -f frameworks/workflow-mgmt

# Step 2: Restore from backup
cp -r .backup/frameworks/workflow-mgmt ./frameworks/

# Step 3: Commit rollback
git add frameworks/
git commit -m "Rollback framework migration"
```

**Rollback from Version Upgrade:**

```bash
# Step 1: Checkout previous version
ai-dev-kit update workflow-mgmt@2.0.0

# Or restore from backup
cp -r .backup/frameworks/workflow-mgmt ./frameworks/

# Step 2: Test rollback
# Verify functionality
```

---

## 7. Migration Best Practices

### 7.1 Pre-Migration

**Best Practices:**
- Document current state
- Identify all customizations
- Create comprehensive backup
- Plan migration strategy
- Test in development first

### 7.2 During Migration

**Best Practices:**
- Follow migration procedures step-by-step
- Monitor migration process
- Verify each step completion
- Document any issues
- Test immediately after migration

### 7.3 Post-Migration

**Best Practices:**
- Validate migration success
- Test all functionality
- Verify customizations preserved
- Update documentation
- Monitor for issues

### 7.4 Migration Documentation

**Documentation Requirements:**
- Migration date and method
- Framework versions migrated
- Customizations preserved
- Issues encountered
- Rollback procedures used (if any)

---

## 8. Related Documentation

### 8.1 Core Documents

- **Framework Update Procedures:** `framework-update-procedures.md`
  - Update workflows and methods
  - Version upgrade procedures

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Dependency installation methods
  - Backend selection guidance

- **Framework Compatibility Tracking:** `framework-compatibility-tracking.md`
  - Compatibility requirements
  - Version compatibility matrix

### 8.2 Supporting Documents

- **Framework Dependency Integration Guide:** `docs/documentation/user-docs/framework-dependency-integration-guide.md`
  - Integration procedures
  - CI/CD setup

- **Framework Dependency Update Guide:** `docs/documentation/user-docs/framework-dependency-update-guide.md`
  - Update procedures
  - Update workflows

- **CLI Tool Reference:** `docs/documentation/user-docs/framework-dependency-cli-reference.md`
  - CLI tool commands
  - Migration command reference

---

## 9. Summary

### 9.1 Key Principles

1. **Multiple Scenarios:** Support for copy-paste → dependency, backend changes, version upgrades
2. **Automated Tools:** CLI tool and scripts for automated migration
3. **Manual Procedures:** Step-by-step guides for manual migration
4. **Safety First:** Backup, validation, and rollback procedures
5. **Customization Preservation:** Methods to preserve project-specific customizations

### 9.2 Migration Workflow

```
Assessment → Planning → Backup → Migration → Validation → Testing → Documentation
```

### 9.3 Migration Methods

- **CLI Tool:** Automated migration with `ai-dev-kit migrate`
- **Git Submodules:** Manual migration using Git submodules
- **Git Subtrees:** Manual migration using Git subtrees
- **Package Managers:** Migration to npm/pip (when available)

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S02:T02 - Build migration guides and tools

