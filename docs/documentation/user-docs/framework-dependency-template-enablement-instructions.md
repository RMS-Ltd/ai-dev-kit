---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# GitHub Template Enablement Instructions

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-07  
**Epic:** Epic 5 - Documentation Management and Maintenance  
**Story:** Story 4 - Framework Documentation Management  
**Task:** E05:S04:T07 - Set up ai-dev-kit repository as GitHub template

---

## Overview

This document provides step-by-step instructions for enabling the ai-dev-kit repository as a GitHub template. Once enabled, users can create new repositories from the template using the "Use this template" button.

### Scope (greenfield vs brownfield)

Repositories created from the template still follow the **installer-driven greenfield path** for framework setup documentation. Point adopters to [`INSTALL_IN_YOUR_PROJECT.md`](https://github.com/earlution/ai-dev-kit/blob/main/INSTALL_IN_YOUR_PROJECT.md), [IPW-E6S09T01](../../implementation-cycles/IPW-E6S09T01-greenfield-installation-fr080.md), [ADR-003](../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md), and brownfield boundaries in [FR-081](../../project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md).

---

## Prerequisites

- Admin access to the `earlution/ai-dev-kit` repository
- GitHub account with repository settings access
- Repository is in a clean, ready state

---

## Step-by-Step Instructions

### Step 1: Navigate to Repository Settings

1. Go to the repository: `https://github.com/earlution/ai-dev-kit`
2. Click the **"Settings"** tab (top navigation)
3. Scroll down to **"Template repository"** section (in General settings)

### Step 2: Enable Template Repository

1. Check the **"Template repository"** checkbox
2. GitHub will show a confirmation dialog
3. Click **"I understand, change repository to template"**
4. The repository is now a template

### Step 3: Add Template Description

1. In the same settings page, scroll to **"Repository details"** section
2. Click **"Edit"** next to "Description"
3. Enter template description:
   ```
   A comprehensive toolkit for AI-assisted development workflows. 
   Includes Workflow Management, Kanban, Versioning, Document Lifecycle, 
   and Debug Path frameworks. Perfect for starting new projects with 
   professional development practices.
   ```
4. Click **"Save"**

### Step 4: Add Topics/Tags

1. In repository settings, scroll to **"Topics"** section
2. Click **"Add topics"**
3. Add the following topics:
   - `ai-assisted-development`
   - `workflow-management`
   - `kanban`
   - `versioning`
   - `documentation`
   - `template`
   - `development-tools`
   - `project-management`
4. Click **"Save changes"**

### Step 5: Verify Template Status

1. Go to the repository main page: `https://github.com/earlution/ai-dev-kit`
2. Verify you see the **"Use this template"** button (green button, top right)
3. Click it to verify the template creation flow works
4. (Don't actually create a repository, just verify the button appears)

### Step 6: Test Template Creation (Optional but Recommended)

1. Click **"Use this template"** button
2. Select **"Create a new repository"**
3. Create a test repository (e.g., `test-ai-dev-kit-template`)
4. Verify all files are included:
   - All frameworks in `packages/frameworks/`
   - Complete KB structure
   - Configuration files
   - Documentation
5. Delete the test repository after verification

---

## Template Readiness Checklist

Before enabling the template, verify:

- [ ] **Repository is clean:** No sensitive information, no temporary files
- [ ] **Documentation is complete:** All user guides are present and accurate
- [ ] **Frameworks are included:** All 5 frameworks in `packages/frameworks/`
- [ ] **Structure is complete:** KB structure, config files, examples
- [ ] **Post-template guide exists:** Users have setup instructions
- [ ] **README is clear:** Template usage is documented
- [ ] **No broken links:** All documentation links work
- [ ] **Version file exists:** `src/fynd_deals/version.py` is present
- [ ] **Configuration examples:** RW config examples are present

---

## Template Description

**Recommended Description:**
```
A comprehensive toolkit for AI-assisted development workflows. 
Includes Workflow Management, Kanban, Versioning, Document Lifecycle, 
and Debug Path frameworks. Perfect for starting new projects with 
professional development practices.
```

**Recommended Topics:**
- `ai-assisted-development`
- `workflow-management`
- `kanban`
- `versioning`
- `documentation`
- `template`
- `development-tools`
- `project-management`
- `git-workflow`
- `release-management`

---

## What Users Get from Template

When users create a repository from the template, they receive:

**Complete Structure:**
- ✅ Full `docs/` directory structure
- ✅ All 5 frameworks in `packages/frameworks/`
- ✅ Configuration files and examples
- ✅ Documentation (7 user guides)
- ✅ Example workflows and templates

**Frameworks Included:**
- Workflow Management (Release Workflow automation)
- Kanban (Project management)
- Numbering & Versioning (Version management)
- Document Lifecycle (TTL-based expiration)
- Debug Path (Structured debugging)

**Documentation:**
- Installation guide
- Usage guide
- Integration guide
- Use cases guide
- Post-template setup guide
- FAQ
- CLI reference
- Troubleshooting guide

---

## Post-Enablement Tasks

After enabling the template:

1. **Update Documentation:**
   - Verify installation guide mentions template is available
   - Update README to highlight template option
   - Add template badge if desired

2. **Test Template:**
   - Create test repository from template
   - Follow post-template setup guide
   - Verify all frameworks work
   - Document any issues

3. **Monitor Usage:**
   - Track template usage (GitHub Insights)
   - Collect user feedback
   - Update documentation based on feedback

---

## Troubleshooting

### Template Button Not Appearing

**Possible Causes:**
- Template not enabled in settings
- User doesn't have view access
- Repository is private (templates work but visibility may differ)

**Solution:**
- Verify template is enabled in settings
- Check repository visibility settings
- Ensure user has appropriate access

### Template Creation Fails

**Possible Causes:**
- Repository size limits
- GitHub API issues
- Permission problems

**Solution:**
- Check repository size (GitHub has limits)
- Verify GitHub status
- Check user permissions

### Files Missing from Template

**Possible Causes:**
- Files in `.gitignore`
- Large file size limits
- Git LFS issues

**Solution:**
- Review `.gitignore` for excluded files
- Check file sizes
- Verify Git LFS configuration

---

## Related Documentation

- [Post-Template Setup Guide](framework-dependency-post-template-setup-guide.md) - Setup steps after creating from template
- [Installation Guide](framework-dependency-installation-guide.md) - Template usage instructions
- [Use Cases Guide](framework-dependency-use-cases.md) - Use Case 1: Template → All Packages

---

## Notes

- Template enablement is a one-time setup
- Template can be disabled and re-enabled as needed
- Template status is visible in repository settings
- Template repositories can still be cloned normally

