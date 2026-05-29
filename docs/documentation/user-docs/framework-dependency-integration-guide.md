---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T11:25:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Dependency Integration Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T05 - Create comprehensive user documentation for Epic 6 framework dependency architecture

---

## Overview

This guide explains how to integrate AI Dev Kit frameworks into existing projects, migrate from copy-paste to dependency-based installation, and integrate frameworks with CI/CD pipelines.

### Scope boundary (greenfield vs brownfield)

- This guide primarily supports **integration / migration** flows for existing repositories.
- For the canonical **greenfield first-run** sequence (FR-080 / E6:S09:T01), use:
  - [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
  - [IPW-E6S09T01 planning package](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)
- Brownfield policy anchor remains:
  - [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
  - [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md)

**Use Cases:**
- Migrating existing projects from copy-paste to dependencies
- Integrating frameworks into new projects
- Setting up CI/CD for automated framework management
- Managing multiple frameworks together

---

## Migration from copy-paste to dependencies {#migration-from-copy-paste}

### Assessment

**1. Identify Current Framework Usage:**

```bash
# Find copied frameworks
find . -type d -name "workflow*" -o -name "kanban*" -o -name "numbering*"

# Check for framework files
ls -la frameworks/ 2>/dev/null || echo "No frameworks directory"

# Identify framework versions (if documented)
grep -r "version.*2\." frameworks/*/README.md 2>/dev/null
```

**2. Document Current State:**

Create `migration-plan.md`:

```markdown
# Framework Migration Plan

## Current State
- workflow-mgmt: Copied manually, version unknown
- kanban: Copied manually, version unknown
- Location: ./frameworks/

## Target State
- workflow-mgmt: Git submodule, version 2.0.0
- kanban: Git submodule, version 1.0.0
- Location: ./frameworks/ (same)

## Migration Steps
1. Backup current frameworks
2. Remove copied frameworks
3. Install as dependencies
4. Restore customizations
5. Test functionality
```

### Migration Process

**Step 1: Backup Current Frameworks**

```bash
# Create backup
mkdir -p .backup/frameworks
cp -r frameworks/ .backup/frameworks/

# Or use Git to track changes
git add frameworks/
git commit -m "Backup frameworks before migration"
```

**Step 2: Identify Customizations**

```bash
# Find custom changes
cd frameworks/workflow-mgmt

# Check for modified files
git status  # If frameworks were in Git

# Or compare with original
diff -r .backup/frameworks/workflow-mgmt/ \
      /path/to/ai-dev-kit/packages/frameworks/workflow\ mgt/
```

**Common Customizations:**
- Path updates (src/confidentia → src/yourproject)
- Configuration changes (rw-config.yaml)
- Custom scripts or templates
- Documentation updates

**Step 3: Remove Copied Frameworks**

```bash
# Remove copied frameworks
rm -rf frameworks/workflow-mgmt
rm -rf frameworks/kanban
rm -rf frameworks/numbering-versioning

# Commit removal
git add frameworks/
git commit -m "Remove copied frameworks before migration to dependencies"
```

**Step 4: Install as Dependencies**

**Using Git Submodules:**

```bash
# Add ai-dev-kit as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git .ai-dev-kit

# Checkout framework versions
cd .ai-dev-kit
git checkout workflow-mgmt-v2.0.0
cd ..

# Copy frameworks
cp -r .ai-dev-kit/packages/frameworks/workflow\ mgt/ ./frameworks/workflow-mgmt
cp -r .ai-dev-kit/packages/frameworks/kanban/ ./frameworks/kanban
```

**Using CLI Tool:**

```bash
# Install frameworks
ai-dev-kit install workflow-mgmt@2.0.0
ai-dev-kit install kanban@1.0.0
```

**Step 5: Restore Customizations**

```bash
# Restore path customizations
cd frameworks/workflow-mgmt
find . -type f -name "*.md" -o -name "*.py" -o -name "*.yaml" | \
  xargs sed -i '' 's|src/confidentia|src/yourproject|g'

# Restore configuration
cp .backup/frameworks/workflow-mgmt/rw-config.yaml \
   frameworks/workflow-mgmt/rw-config.yaml

# Restore custom scripts (if any)
cp .backup/frameworks/workflow-mgmt/scripts/custom-*.py \
   frameworks/workflow-mgmt/scripts/ 2>/dev/null || true
```

**Step 6: Test Functionality**

```bash
# Test workflow management
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Test Release Workflow (FR-060: RW + task id in same message, e.g. RW E5S01T01)
# Verify all steps complete

# Test Kanban
cd ../kanban
python3 scripts/update-kanban-docs.py --help
```

**Step 7: Commit Migration**

```bash
# Commit migrated frameworks
git add frameworks/ .ai-dev-kit .gitmodules
git commit -m "Migrate frameworks from copy-paste to Git submodule dependencies"
```

### Migration Checklist

- [ ] Backup current frameworks
- [ ] Document customizations
- [ ] Remove copied frameworks
- [ ] Install as dependencies
- [ ] Restore customizations
- [ ] Update configuration files
- [ ] Test framework functionality
- [ ] Test Release Workflow
- [ ] Update documentation
- [ ] Commit migration

---

## New Project Integration

### Greenfield Setup

**1. Initialize Project:**

```bash
# Create new project
mkdir my-new-project
cd my-new-project
git init

# Create basic structure
mkdir -p src/myproject docs/project-management/kanban
```

**2. Install Frameworks:**

```bash
# Install all three core frameworks
ai-dev-kit install workflow-mgmt@2.0.0
ai-dev-kit install kanban@1.0.0
ai-dev-kit install numbering-versioning@2.0.0
```

**3. Configure Frameworks:**

```bash
# Configure workflow management
vim frameworks/workflow-mgmt/rw-config.yaml
# Update: project name, paths, branch patterns

# Create version file
cp frameworks/numbering-versioning/templates/version.py src/myproject/version.py
vim src/myproject/version.py
# Set initial version: 0.1.1.1+1

# Initialize Kanban
mkdir -p docs/project-management/kanban/epics
cp frameworks/kanban/templates/kboard.md docs/project-management/kanban/kboard.md
```

**4. Test Setup:**

```bash
# Test workflow management
cd frameworks/workflow-mgmt
python3 scripts/validation/validate_branch_context.py

# Create first epic
mkdir -p docs/project-management/kanban/epics/Epic-1
cp frameworks/kanban/templates/epic-template.md \
   docs/project-management/kanban/epics/Epic-1/Epic-1.md

# Test Release Workflow
git checkout -b epic/1-setup
# e.g. RW E1S01T01 or RW E1:S01:T01 in AI assistant
```

---

## CI/CD Integration

### GitHub Actions

**Check for Framework Updates:**

Create `.github/workflows/check-framework-updates.yml`:

```yaml
name: Check Framework Updates

on:
  schedule:
    - cron: '0 0 * * 1'  # Weekly on Monday
  workflow_dispatch:  # Manual trigger

jobs:
  check-updates:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Install ai-dev-kit CLI
        run: pip install ai-dev-kit
      
      - name: Check for updates
        run: ai-dev-kit check --notify
      
      - name: Create issue if updates available
        if: failure()
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Framework Updates Available',
              body: 'Framework updates are available. Run `ai-dev-kit check` for details.'
            })
```

**Automated Framework Updates (Optional):**

Create `.github/workflows/update-frameworks.yml`:

```yaml
name: Update Frameworks

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
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'
      
      - name: Install ai-dev-kit CLI
        run: pip install ai-dev-kit
      
      - name: Update framework
        run: ai-dev-kit update ${{ inputs.framework }}@${{ inputs.version }}
      
      - name: Run tests
        run: |
          cd frameworks/${{ inputs.framework }}
          python3 scripts/validation/validate_branch_context.py
      
      - name: Create PR
        uses: peter-evans/create-pull-request@v5
        with:
          commit-message: "Update ${{ inputs.framework }} to ${{ inputs.version }}"
          title: "Update ${{ inputs.framework }} to ${{ inputs.version }}"
          body: "Automated framework update"
```

### GitLab CI

**Check for Updates:**

Create `.gitlab-ci.yml`:

```yaml
check-framework-updates:
  image: python:3.10
  script:
    - pip install ai-dev-kit
    - ai-dev-kit check --notify
  only:
    - schedules
  when: manual
```

### Jenkins

**Update Check Pipeline:**

```groovy
pipeline {
    agent any
    
    triggers {
        cron('H 0 * * 1')  // Weekly
    }
    
    stages {
        stage('Check Updates') {
            steps {
                sh 'pip install ai-dev-kit'
                sh 'ai-dev-kit check --notify'
            }
        }
    }
    
    post {
        failure {
            emailext (
                subject: "Framework Updates Available",
                body: "Framework updates are available. Check logs for details.",
                to: "${env.CHANGE_AUTHOR_EMAIL}"
            )
        }
    }
}
```

---

## Multiple Framework Management

### Selective framework adoption {#selective-framework-adoption}

Adopt frameworks incrementally (existing projects or trimmed templates). See [Use Case 4](framework-dependency-use-cases.md#use-case-4-existing-project--some-packages) in the Use Cases guide.

### Monorepo integration {#monorepo-integration}

Centralize installs and updates for multiple packages. See [Use Case 6](framework-dependency-use-cases.md#use-case-6-monorepomulti-project-setup).

### Gradual adoption {#gradual-adoption}

Add frameworks over time or finish migrating from copy-paste. See [Use Case 7](framework-dependency-use-cases.md#use-case-7-gradualmigratory-adoption).

### Framework Dependencies

Some frameworks depend on others:

- **Workflow Management** → **Numbering & Versioning** (for version schema)
- **Workflow Management** → **Kanban** (for Kanban updates)

**Install Dependencies First:**

```bash
# Install dependencies first
ai-dev-kit install numbering-versioning@2.0.0
ai-dev-kit install kanban@1.0.0

# Then install dependent framework
ai-dev-kit install workflow-mgmt@2.0.0
```

**Check Dependencies:**

```bash
# List framework dependencies
ai-dev-kit deps workflow-mgmt

# Output:
# Dependencies:
#   numbering-versioning: >=2.0.0
#   kanban: >=1.0.0
```

### Framework Version Compatibility

**Check Compatibility:**

```bash
# Check if installed frameworks are compatible
ai-dev-kit check-compatibility

# Output:
# Framework Compatibility:
#   workflow-mgmt@2.0.0 ✓ Compatible
#   kanban@1.0.0 ✓ Compatible
#   numbering-versioning@2.0.0 ✓ Compatible
```

**Resolve Conflicts:**

```bash
# If conflicts found, update frameworks
ai-dev-kit update --resolve-conflicts

# Or update specific framework
ai-dev-kit update workflow-mgmt@2.1.0
```

---

## Custom Framework Integration

### Custom Scripts

**Add Custom Scripts:**

```bash
# Create custom scripts directory
mkdir -p frameworks/workflow-mgmt/scripts/custom

# Add custom script
cat > frameworks/workflow-mgmt/scripts/custom/my-custom-script.py << 'EOF'
#!/usr/bin/env python3
"""Custom script for project-specific needs."""

import sys
sys.path.insert(0, '../../..')

# Your custom logic here
EOF

chmod +x frameworks/workflow-mgmt/scripts/custom/my-custom-script.py
```

**Important:** Custom scripts should be preserved during updates. Consider:
- Storing custom scripts outside framework directory
- Using framework hooks/plugins if available
- Documenting customizations for update process

### Framework Hooks

**Pre-Update Hook:**

Create `.ai-dev-kit/hooks/pre-update.sh`:

```bash
#!/bin/bash
# Pre-update hook

echo "Backing up customizations..."
cp -r frameworks/workflow-mgmt/scripts/custom .backup/custom-scripts/

echo "Pre-update hook complete"
```

**Post-Update Hook:**

Create `.ai-dev-kit/hooks/post-update.sh`:

```bash
#!/bin/bash
# Post-update hook

echo "Restoring customizations..."
cp -r .backup/custom-scripts/* frameworks/workflow-mgmt/scripts/custom/

echo "Post-update hook complete"
```

---

## Team Collaboration

### Shared Configuration

**Version Control:**

```bash
# Commit framework configuration
git add .ai-dev-kit.yaml
git add frameworks/*/rw-config.yaml
git commit -m "Add framework configuration"

# Team members clone with submodules
git clone --recurse-submodules https://github.com/yourorg/yourproject.git
```

**Configuration Management:**

```yaml
# .ai-dev-kit.yaml (committed to repo)
version: "1.0.0"
default_backend: "git-submodule"
frameworks:
  workflow-mgmt:
    version: "2.0.0"
    pin: true  # Pin version for team consistency
```

### Update Coordination

**Update Process:**

1. **Developer checks for updates:**
   ```bash
   ai-dev-kit check
   ```

2. **Create update branch:**
   ```bash
   git checkout -b update/framework-workflow-mgmt-2.1.0
   ```

3. **Apply update:**
   ```bash
   ai-dev-kit update workflow-mgmt@2.1.0
   ```

4. **Test update:**
   ```bash
   # Run tests
   # Verify functionality
   ```

5. **Create PR:**
   ```bash
   git push origin update/framework-workflow-mgmt-2.1.0
   # Create pull request
   ```

6. **Team reviews and merges:**
   - Review changelog
   - Test in development
   - Merge to main

---

## Troubleshooting Integration

### Common Issues

**Issue: Submodule not initialized**

```bash
# Initialize submodules
git submodule update --init --recursive

# Or clone with submodules
git clone --recurse-submodules <repo-url>
```

**Issue: Framework paths incorrect**

```bash
# Update paths in configuration
vim frameworks/workflow-mgmt/rw-config.yaml

# Or use CLI tool
ai-dev-kit config update-paths
```

**Issue: Version conflicts**

```bash
# Check for conflicts
ai-dev-kit check-compatibility

# Resolve conflicts
ai-dev-kit update --resolve-conflicts
```

See the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md) for more detailed solutions.

---

## Best Practices

### Framework Management

1. **Pin versions in production:**
   ```yaml
   frameworks:
     workflow-mgmt:
       version: "2.0.0"
       pin: true
   ```

2. **Test updates in development:**
   - Create test branch
   - Apply update
   - Test thoroughly
   - Merge after validation

3. **Document customizations:**
   - Keep list of custom changes
   - Document in project README
   - Update during framework updates

### CI/CD Integration

1. **Automate update checking:**
   - Weekly scheduled checks
   - Notification on updates
   - Manual update approval

2. **Automate testing:**
   - Test after updates
   - Validate framework functionality
   - Run project tests

3. **Version control:**
   - Commit framework versions
   - Tag releases with framework versions
   - Document update history

---

## Next Steps

After integration:

1. **Set up update notifications:** Configure automatic checking
2. **Test update process:** Try updating in test branch
3. **Document customizations:** Keep track of changes
4. **Set up CI/CD:** Automate framework management

---

## References

- [Installation Guide](framework-dependency-installation-guide.md)
- [Usage Guide](framework-dependency-usage-guide.md)
- [Update Guide](framework-dependency-update-guide.md)
- [CLI Reference](framework-dependency-cli-reference.md)
- [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)

