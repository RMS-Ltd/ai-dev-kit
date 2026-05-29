---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:02:07Z
expires_at: null
housekeeping_policy: keep
---

# Portable Workflow Implementation Guide

**Version:** 1.0.0
**Last Updated:** 2025-12-01
**Purpose:** Guide for implementing the Release Workflow (RW) and agent-driven execution pattern in other projects

---

## 📋 Overview

This document lists all files needed to implement the Release Workflow (RW) trigger and agent-driven workflow execution pattern in a new project. Files are organized by category with customization notes.

---

## 🎯 Essential Documents (Copy & Customize)

### 1. Core Methodology Documents

**Location:** `docs/documentation/Developer_Docs/vwmp/`

These define the **reusable methodology** and are project-agnostic:

- ✅ **`agent-driven-workflow-execution.md`**
  - **Purpose:** General methodology for intelligent agent-driven workflow execution
  - **Customization:** Minimal - only update project-specific examples
  - **Reusable:** Yes - core methodology is universal

- ✅ **`release-workflow-agent-execution.md`**
  - **Purpose:** Step-by-step guide for executing the 10-step Release Workflow
  - **Customization:** Update file paths, version schema references, and project-specific examples
  - **Reusable:** Yes - execution pattern is universal, but paths need updating

- ✅ **`release-workflow-reference.md`**
  - **Purpose:** Complete reference for the Release Workflow structure and implementation
  - **Customization:** Update file paths, version schema, and project-specific policy references
  - **Reusable:** Yes - workflow structure is universal

---

### 2. Versioning Policy Documents

**Location:** `docs/architecture/standards-and-adrs/`

These define the **versioning schema and strategy**:

- ✅ **`versioning-policy.md`**
  - **Purpose:** Defines the versioning schema (RC.EPIC.STORY.TASK+BUILD)
  - **Customization:**
    - Update project name references
    - Adjust schema if needed (though the schema is designed to be universal)
    - Update related work references
  - **Reusable:** Yes - schema is designed for portability

- ✅ **`versioning-strategy.md`**
  - **Purpose:** Complete versioning strategy with forensic traceability principles
  - **Customization:**
    - Update project name references
    - Update file path references (e.g., `src/confidentia/version.py` → `src/yourproject/version.py`)
    - Update changelog directory paths
    - Update Kanban doc paths
  - **Reusable:** Yes - strategy principles are universal

---

### 3. Cursor Rules Section

**Location:** `.cursorrules` (in project root)

**Section to Copy:** The "🚀 RELEASE WORKFLOW (RW) TRIGGER" section

**Customization Required:**
- Update file paths in references:
  - `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
  - `docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
  - `docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md`
- Update version file path: `src/confidentia/version.py` → `src/yourproject/version.py`
- Update changelog paths if different
- Update branch mapping if using different branch naming conventions

**Key Section (Lines ~64-161 in Confidentia's `.cursorrules`):**
```markdown
### 🚀 RELEASE WORKFLOW (RW) TRIGGER
[Complete section with all 10 steps]
```

---

### 4. Workflow Definition File

**Location:** `workflows/release-workflow.yaml`

**Purpose:** YAML definition of the Release Workflow structure

**Customization Required:**
- Update `version_file` path: `src/confidentia/version.py` → `src/yourproject/version.py`
- Update `changelog_dir` path if different
- Update `main_changelog` path if different
- Update `kanban_update_script` path if different
- Update `epic_doc_pattern` if using different Kanban structure
- Update handler references if using different plugin system

**Reusable:** Yes - structure is universal, paths need customization

---

### 5. Validation Scripts

**Location:** `scripts/validation/`

**Essential Scripts:**
- ✅ **`validate_branch_context.py`**
  - **Purpose:** Validates branch/version/epic alignment
  - **Customization:**
    - Update branch mapping dictionary (Epic → branch name patterns)
    - Update version file path
    - Update version schema parsing if using different schema
  - **Reusable:** Yes - logic is universal, configuration needs updating

- ✅ **`validate_changelog_format.py`**
  - **Purpose:** Validates changelog format (full timestamp requirement)
  - **Customization:**
    - Update changelog directory path
    - Update timestamp format if different
    - Update epic threshold for "grandfathered" files if needed
  - **Reusable:** Yes - validation logic is universal

**Optional (Project-Specific):**
- `validate_kanban_board.py` - Only if using Kanban structure
- Other validation scripts are project-specific

---

## 🔧 Project-Specific Customization Checklist

### File Paths to Update

1. **Version File:**
   - Search: `src/confidentia/version.py`
   - Replace: `src/yourproject/version.py` (or your actual path)

2. **Changelog Directory:**
   - Search: `docs/changelog-and-release-notes/changelog-archive`
   - Replace: Your changelog directory path

3. **Main Changelog:**
   - Search: `CHANGELOG.md`
   - Replace: Your main changelog file path

4. **Kanban Documentation:**
   - Search: `docs/project-management/epics/overview/Epic {epic}/Epic-{epic}.md`
   - Replace: Your Kanban doc structure

5. **Documentation References:**
   - Update all `docs/documentation/Developer_Docs/vwmp/` references to match your doc structure

### Version Schema Customization

If you need a different version schema:
1. Update `versioning-policy.md` with your schema
2. Update `validate_branch_context.py` to parse your schema
3. Update `release-workflow-agent-execution.md` Step 1 to handle your schema
4. Update `.cursorrules` version schema section

### Branch Mapping Customization

If using different branch naming:
1. Update `validate_branch_context.py` branch mapping dictionary
2. Update `.cursorrules` branch mapping section
3. Update any documentation that references branch patterns

---

## 📦 Minimal Implementation Package

**For a minimal implementation, copy these files:**

### Required Files:
1. `docs/documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md`
2. `docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
3. `docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md`
4. `docs/architecture/standards-and-adrs/versioning-policy.md`
5. `docs/architecture/standards-and-adrs/versioning-strategy.md`
6. `workflows/release-workflow.yaml`
7. `scripts/validation/validate_branch_context.py`
8. `scripts/validation/validate_changelog_format.py`
9. `.cursorrules` (RW trigger section only)

### Optional Files (if using Kanban):
10. `docs/project-management/rituals/policy/kanban-governance-policy.md` (for context)

---

## 🚀 Implementation Steps

1. **Copy Core Documents:**
   - Copy all files from "Required Files" list above
   - Place in appropriate directories in your project

2. **Customize File Paths:**
   - Run search/replace for all file paths
   - Update version file location
   - Update changelog directory
   - Update Kanban doc paths (if applicable)

3. **Customize Version Schema (if needed):**
   - Update `versioning-policy.md` with your schema
   - Update validation scripts to parse your schema

4. **Add RW Trigger to `.cursorrules`:**
   - Copy the "🚀 RELEASE WORKFLOW (RW) TRIGGER" section
   - Update all file path references
   - Update version schema references

5. **Test the Workflow:**
   - Create a test version file
   - Send e.g. `RW E1S01T01` or `RW E1:S01:T01` in your AI assistant (**FR-060**)
   - Verify the configured steps execute correctly

6. **Set Up Pre-commit Hooks (optional):**
   - Add validators to pre-commit hooks
   - Test that validation blocks invalid commits

---

## 📚 Additional Context Documents

**These provide context but aren't strictly required:**

- `docs/documentation/Developer_Docs/vwmp/release-workflow-usage.md` - Usage guide (VWMP-specific)
- `docs/documentation/Developer_Docs/vwmp/best-practices.md` - Best practices
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Kanban policy (if using Kanban)

---

## ✅ Verification Checklist

After implementation, verify:

- [ ] RW trigger responds to "RW" or "rw" in AI assistant
- [ ] All 10 steps execute in correct order
- [ ] Version file updates correctly
- [ ] Changelogs created with full timestamps
- [ ] Validators run and pass
- [ ] Git commit includes version number
- [ ] Git tag created with correct format
- [ ] Branch and tag pushed to remote
- [ ] All file paths are correct for your project
- [ ] Version schema matches your project's needs

---

## 🔗 Cross-References

All documents reference each other. After copying, ensure:
- All internal links work
- All file path references are updated
- All version schema references match
- All branch mapping references match

---

## 💡 Tips

1. **Start Minimal:** Copy only the required files first, test, then add optional components
2. **Version Schema:** The `RC.EPIC.STORY.TASK+BUILD` schema is designed to be universal, but you can customize if needed
3. **File Structure:** You don't need the exact `docs/` structure - adjust paths to match your project
4. **Validation:** The validators are the most project-specific - customize these carefully
5. **Testing:** Test the RW trigger on a feature branch before using in production

---

**Last Updated:** 2025-12-01
**Maintained By:** Engineering Team
