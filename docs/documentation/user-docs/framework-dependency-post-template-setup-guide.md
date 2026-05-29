---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Post-Template Setup Guide

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T07 - Set up ai-dev-kit repository as GitHub template

---

## Overview

This guide walks you through the essential setup steps after creating a new project from the ai-dev-kit template. Follow these steps to customize the template for your project and get started with all frameworks.

For the locked greenfield-first sequence and verification gates, pair this guide with:

- [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md)
- [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md)

**When to Use This Guide:**
- You just created a repository from the ai-dev-kit template
- You want to customize the template for your project
- You're setting up Use Case 1: Template → All Packages

---

## Quick Start Checklist

- [ ] Update project name and branding
- [ ] Configure version file
- [ ] Reset/initialize changelog
- [ ] Customize Kanban board
- [ ] Update configuration files
- [ ] Verify framework installation
- [ ] Test Release Workflow (RW)
- [ ] Push to your repository

---

## Step-by-Step Setup

### Step 1: Update Project Name and Branding

**1.1 Update README.md:**

```bash
# Edit README.md
# Replace "AI Dev Kit" with your project name
# Update project description
# Update badges and links
# Update contact information
```

**1.2 Search and Replace Project References:**

```bash
# Find all references to "ai-dev-kit" or "AI Dev Kit"
grep -r "ai-dev-kit" . --exclude-dir=.git
grep -r "AI Dev Kit" . --exclude-dir=.git

# Replace with your project name (example: "my-project")
find . -type f -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.py" | \
  xargs sed -i '' 's/ai-dev-kit/my-project/g'
find . -type f -name "*.md" -o -name "*.yaml" -o -name "*.yml" -o -name "*.py" | \
  xargs sed -i '' 's/AI Dev Kit/My Project/g'
```

**1.3 Update GitHub URLs:**

```bash
# Update repository URLs in documentation
# Search for: https://github.com/earlution/ai-dev-kit
# Replace with: https://github.com/yourusername/your-project
```

---

### Step 2: Configure Version File

**2.1 Update `src/fynd_deals/version.py`:**

The version file contains ai-dev-kit specific references. Update it for your project:

```python
# Change file header comment
"""
My Project Version File

This file defines the version for the my-project repository...
"""

# Update Epic description
VERSION_EPIC = 1      # Epic number (Epic 1: My Project Core)

# Update validation notes if needed
```

**2.2 Update Package Path (if different):**

If your project structure differs from `src/fynd_deals/`, update the path:

```bash
# If your project uses a different structure, update:
# - Version file location
# - Import paths in validation scripts
# - Framework configuration paths
```

---

### Step 3: Reset/Initialize Changelog

**3.1 Option A: Start Fresh Changelog (Recommended for New Projects):**

```bash
# Backup the existing changelog (optional, for reference)
cp CHANGELOG.md CHANGELOG-template-backup.md

# Create new changelog
cat > CHANGELOG.md << 'EOF'
# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by **Keep a Changelog** and this project adheres to the **`RC.EPIC.STORY.TASK+BUILD`** versioning scheme.

---

## [Unreleased]

### Planned
- Initial project setup
- Framework integration
- Project-specific features

---
EOF
```

**3.2 Option B: Keep Template Changelog (For Reference):**

If you want to keep the template's changelog for reference:

```bash
# Rename existing changelog
mv CHANGELOG.md CHANGELOG-template-reference.md

# Create new changelog (as in Option A)
```

**3.3 Archive Template Changelog (Optional):**

```bash
# Move template changelog to archive
mkdir -p docs/changelog-and-release-notes/Template_Reference
mv CHANGELOG-template-backup.md docs/changelog-and-release-notes/Template_Reference/
```

---

### Step 4: Customize Kanban Board

**🚨 IMPORTANT: Use the Kanban Installer (REQUIRED)**

**⚠️ DO NOT manually copy epics from `docs/project-management/kanban/epics/`**

The template includes ai-dev-kit's **actual Kanban board** (with project-specific epics). This is **NOT** what you want. You need **canonical epic templates** that are contextualized for your project.

**✅ USE THE INSTALLER INSTEAD:**

**4.1 Run Kanban Framework Installer:**

```bash
# The installer is the ONLY supported method for setting up your Kanban board
# It installs canonical epic templates (not ai-dev-kit's actual epics)
python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh
```

**What the installer does:**
- ✅ Installs **canonical epic templates** from `packages/frameworks/kanban/templates/epics/`
- ✅ Contextualizes Epic 1 with your project name (e.g., "MyProject Core", not "AI Dev Kit Core")
- ✅ Only installs canonical core epics (1-8, 10, 18, 22, 23)
- ✅ Excludes ai-dev-kit project-specific epics
- ✅ Creates properly structured epic directories ready for stories and tasks

**4.2 Contextualize Templates (Optional - Advanced):**

If you want to customize templates beyond the installer's automatic contextualization:

```bash
# Review the contextualization guide
cat packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md

# The guide explains:
# - Placeholder replacement ({PROJECT_NAME}, {DOMAIN}, etc.)
# - Scalability guidance (tiny, small, medium, ambitious projects)
# - Customization guidelines (Epic, Story, Task levels)
# - Examples for different project types
```

**4.3 Update Kanban Board Views:**

After installation, update the board views:

```bash
# Update docs/project-management/kanban/_index.md
# Update docs/project-management/kanban/kboard.md
# Add your project epics to the board views
```

**4.4 Verify Installation:**

```bash
# Check that canonical epics are installed (not ai-dev-kit's epics)
ls docs/project-management/kanban/epics/

# Should show: Epic-1, Epic-2, Epic-3, Epic-4, Epic-5, Epic-6, Epic-7, Epic-8, Epic-10, Epic-18, Epic-22, Epic-23
# Should NOT show: Epic-24 (ai-dev-kit specific)

# Verify Epic 1 is contextualized with your project name
grep "Epic 1:" docs/project-management/kanban/epics/Epic-1/Epic-1.md
# Should show your project name, not "AI Dev Kit"
```

**Related Documentation:**
- **Contextualization Guide:** `packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md` - Complete guide for customizing templates
- **Contextualization Examples:** `packages/frameworks/kanban/templates/examples/contextualized/` - Examples for tiny, small, and ambitious projects
- **Kanban Installer:** `packages/frameworks/kanban/scripts/install_kanban_framework.py` - Interactive installer script

---

### Step 5: Update Configuration Files

**5.1 Update Release Workflow Configuration:**

```bash
# Edit packages/frameworks/workflow mgt/config/examples/rw-config-ai-dev-kit.yaml
# Or create your own: rw-config-my-project.yaml

# Update:
# - project_name: "my-project"
# - project_paths: Update to match your structure
# - epic names and descriptions
```

**5.2 Update Framework Paths:**

```bash
# Search for example paths
grep -r "src/confidentia" packages/frameworks/
grep -r "src/fynd_deals" packages/frameworks/

# Replace with your project paths
find packages/frameworks/ -type f -exec sed -i '' 's/src\/fynd_deals/src\/yourproject/g' {} \;
```

**5.3 Update Framework READMEs (Optional):**

Framework READMEs may contain ai-dev-kit references. Update if needed:

```bash
# Search for references
grep -r "ai-dev-kit" packages/frameworks/*/README.md

# Update if you want to customize framework documentation
```

---

### Step 6: Verify Framework Installation

**6.1 Check Framework Structure:**

```bash
# Verify all frameworks are present
ls packages/frameworks/
# Should show: debug-path, doc-lifecycle, kanban, numbering & versioning, workflow mgt
```

**6.2 Test Framework Scripts:**

```bash
# Test version validation
python3 packages/frameworks/workflow\ mgt/scripts/validation/validate_branch_context.py

# Test changelog validation
python3 packages/frameworks/workflow\ mgt/scripts/validation/validate_changelog_format.py

# Should run without errors (may show warnings if not configured)
```

**6.3 Verify Git Integration:**

```bash
# Check Git repository
git status

# Verify frameworks are tracked (if using Git submodules)
git submodule status
```

---

### Step 7: Test Release Workflow (RW)

**7.1 Configure Release Workflow:**

```bash
# Create or update RW configuration
# Copy example config
cp packages/frameworks/workflow\ mgt/config/examples/rw-config-ai-dev-kit.yaml \
   packages/frameworks/workflow\ mgt/config/rw-config-my-project.yaml

# Edit with your project details
```

**7.2 Test RW Execution:**

```bash
# Make a small change (e.g., update README)
echo "# Test" >> test.txt
git add test.txt

# Run RW (via AI assistant: e.g. RW E5S01T01 / RW E5:S01:T01 — FR-060)
# Or manually:
# 1. Bump version
# 2. Update changelog
# 3. Commit and tag
# 4. Update Kanban
```

**7.3 Verify RW Output:**

```bash
# Check version was bumped
python3 -c "import sys; sys.path.insert(0, 'src'); from fynd_deals import version; print(version.VERSION_STRING)"

# Check changelog was updated
head -20 CHANGELOG.md

# Check Kanban was updated
ls -la docs/project-management/kanban/epics/
```

---

### Step 8: Push to Your Repository

**8.1 Initial Commit:**

```bash
# Stage all changes
git add -A

# Create initial commit
git commit -m "Initial commit: Project setup from ai-dev-kit template

- Updated project name and branding
- Configured version file
- Initialized changelog
- Customized Kanban board
- Updated configuration files
- Verified framework installation"
```

**8.2 Push to Remote:**

```bash
# Push to your repository
git push -u origin main

# Verify remote is correct
git remote -v
# Should show your repository, not ai-dev-kit
```

---

## Post-Setup Verification

### Checklist

- [ ] Project name updated throughout codebase
- [ ] Version file configured for your project
- [ ] Changelog initialized/reset
- [ ] Kanban board customized
- [ ] Configuration files updated
- [ ] Framework paths updated
- [ ] Release Workflow tested
- [ ] All changes committed
- [ ] Pushed to your repository
- [ ] Remote URL points to your repository (not ai-dev-kit)

### Quick Verification Commands

```bash
# Check project name consistency
grep -r "ai-dev-kit" . --exclude-dir=.git | wc -l
# Should be 0 or only in framework documentation

# Check version file
python3 -c "import sys; sys.path.insert(0, 'src'); from fynd_deals import version; print(version.VERSION_STRING)"
# Should show your project's version

# Check Git remote
git remote -v
# Should show your repository URL

# Test RW
python3 packages/frameworks/workflow\ mgt/scripts/validation/validate_branch_context.py
# Should pass validation
```

---

## Common Issues and Solutions

### Issue: Git remote still points to ai-dev-kit

**Solution:**
```bash
# Remove old remote
git remote remove origin

# Add your remote
git remote add origin https://github.com/yourusername/your-project.git

# Verify
git remote -v
```

### Issue: Framework scripts can't find version file

**Solution:**
```bash
# Check version file location
ls src/fynd_deals/version.py

# If your structure is different, update framework configs
# Or create symlink: ln -s src/yourproject/version.py src/fynd_deals/version.py
```

### Issue: Changelog validation fails

**Solution:**
```bash
# If you started fresh, ensure changelog has proper format
# See: packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md

# Or temporarily disable validation for initial setup
```

### Issue: Kanban board shows template epics

**⚠️ IMPORTANT:** Do NOT manually copy epics from `docs/project-management/kanban/epics/`. These are ai-dev-kit's actual epics, not canonical templates.

**Solution:**
```bash
# Use the interactive installer instead (RECOMMENDED)
python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh

# The installer will:
# - Install canonical epic templates (not ai-dev-kit's actual epics)
# - Contextualize Epic 1 with your project name
# - Only install canonical core epics (1-8, 10, 18, 22, 23)
# - Exclude ai-dev-kit project-specific epics

# If you already manually copied (WRONG approach), remove them first:
rm -rf docs/project-management/kanban/epics/Epic-*

# Then run the installer:
python3 packages/frameworks/kanban/scripts/install_kanban_framework.py --mode fresh

# Update board views
# Edit docs/project-management/kanban/_index.md
# Edit docs/project-management/kanban/kboard.md
```

---

## Next Steps

After completing setup:

1. **Create Your First Epic:** Use the Kanban framework to plan your work
2. **Configure Frameworks:** Customize framework settings for your project
3. **Start Development:** Begin working on your project using the frameworks
4. **Run Release Workflow:** Use RW to manage versions and releases

**Related Documentation:**
- [Use Cases Guide](framework-dependency-use-cases.md) - All adoption patterns
- [Installation Guide](framework-dependency-installation-guide.md) - Framework installation
- [Usage Guide](framework-dependency-usage-guide.md) - Using installed frameworks
- [Integration Guide](framework-dependency-integration-guide.md) - Integrating frameworks
- [Contextualization Guide (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/CONTEXTUALIZATION_GUIDE.md) - Customizing canonical templates for your project
- [Contextualization Examples (source)](https://github.com/earlution/ai-dev-kit/tree/main/packages/frameworks/kanban/templates/examples/contextualized) - Example projects (tiny, small, ambitious)

---

## Template-Specific Files Reference

**Files You Should Customize:**
- `README.md` - Project overview
- `src/fynd_deals/version.py` - Version configuration
- `CHANGELOG.md` - Project changelog
- `docs/project-management/kanban/` - Kanban board
- `packages/frameworks/workflow mgt/config/` - RW configuration

**Files You Can Keep (Framework Documentation):**
- `packages/frameworks/*/README.md` - Framework documentation
- `docs/documentation/user-docs/` - User guides (reference)
- `docs/architecture/` - Architecture docs (reference)

**Files You Can Remove:**
- `docs/project-management/kanban/epics/Epic-*` - Template epics (after creating your own)
- `docs/changelog-and-release-notes/changelog-archive/` - Template changelog archives (optional)

---

## Support

If you encounter issues during setup:
- Check the [Troubleshooting Guide](framework-dependency-troubleshooting-guide.md)
- Review the [FAQ](framework-dependency-faq.md)
- Open an issue on [GitHub](https://github.com/earlution/ai-dev-kit/issues)

