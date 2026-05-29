# Changelog: v0.6.6.10+17

**Release Date:** 2025-12-18 15:09:29 UTC  
**Epic:** 6 - Framework Management and Maintenance  
**Story:** 6 - ADK Implementation Analysis and Package Management  
**Task:** 4 - Create Package Management Implementation Plan  
**Version:** v0.6.6.10+17

---

## Summary

Feature Request FR-024 created: IDE/Linter Check Before Commit in Release Workflow. Documents the requirement for a new validation step that checks for IDE-flagged problems (errors, warnings, info) before committing changes, with proper prioritization and blocking behavior.

---

## Added

- **Feature Request:**
  - **FR-024:** IDE/Linter Check Before Commit in Release Workflow
  - Document: `docs/project-management/kanban/fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow.md`
  - **Requirements:**
    - New step (Step 9.5) to check IDE-flagged problems before commit
    - Priority handling: Errors (block commit) → Warnings (flag/optionally block) → Info (display)
    - Integration with IDE diagnostics API and project-specific linter tools
    - Configurable (strict mode, auto-fix, which linters to run)
    - Performance optimization (check staged files only)

---

## Feature Request Details

**FR-024:** IDE/Linter Check Before Commit in Release Workflow

**Problem:**
Release Workflow (RW) currently only runs workflow-specific validators (branch context, changelog format, version bump) in Step 9. There is no step that checks for general code quality issues (linter errors, warnings, type errors) before committing changes.

**Solution:**
Add a new validation step (Step 9.5) between Step 9 and Step 10 that:
- Checks for IDE-flagged problems on staged files
- Prioritizes issues: Errors → Warnings → Info
- Blocks commit if errors found
- Flags warnings for attention (optionally blocks if configured)
- Displays info messages for awareness

**Priority Handling:**
1. **Errors:** Always block commit (step fails, workflow stops)
2. **Warnings:** Flag for attention (block if `warn_on_warnings: true`, otherwise display and allow)
3. **Info:** Display for awareness (always allow commit)

**Integration:**
- Primary: IDE diagnostics API (e.g., `read_lints` tool in Cursor)
- Fallback: Project-specific linter tools (configurable per project type)

**Configuration:**
- Configurable strict mode (block on errors)
- Configurable warning handling (block or flag)
- Configurable auto-fix options
- Project-specific linter tool selection
- Performance optimization (staged files only)

**Status:** PENDING - Ready for intake and assignment to Epic/Story/Task

---

## Files Modified

- `docs/project-management/kanban/fr-br/FR-024-ide-linter-check-before-commit-in-release-workflow.md` - Feature request document created

---

**Related:**
- Task: E6:S06:T04 - Create Package Management Implementation Plan
- Story: E6:S06 - ADK Implementation Analysis and Package Management
- Epic: E6 - Framework Management and Maintenance
- Feature Request: FR-024

