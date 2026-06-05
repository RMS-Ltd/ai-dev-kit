# Changelog

All notable changes to the Workflow Management package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.3.0] - 2026-04-13

**Package Version:** 2.3.0
**Project Version:** 0.7.6.18+1
**Bump Type:** MINOR

### Added

- **Interactive installer pattern validation and previewing (RW installer):**
  - Enforced required placeholders for Kanban patterns (`{epic}`, `{story}`).
  - Added pattern match previews and zero-match remediation guidance in interactive setup.
  - Clarified prompt copy that patterns are relative to selected `kanban_root`.

### Changed

- **Installation completion signaling:**
  - `install_release_workflow.py` now reports explicit final status (`SUCCESS` / `PARTIAL`) rather than implying unconditional completion.
- **Operational docs and release traceability updates:**
  - Updated packaged workflow docs and release artifacts to reflect the installer hardening release path (`E7:S06:T18`).

**Criteria Reference:** MINOR Version Bump
- ✅ New user-facing installer capability (placeholder enforcement + match preview)
- ✅ Backward compatible behavior for existing non-Kanban and configured flows

---

## [2.2.0] - 2025-12-22

**Package Version:** 2.2.0
**Project Version:** 0.2.1.8+1
**Bump Type:** MINOR

### Added

- **RW Step 9: Check for and Address IDE-Flagged Problems** (NEW STEP)
  - Checks for IDE-flagged problems (errors, warnings, infos) in order
  - Errors block workflow (mandatory, blocking)
  - Warnings are non-blocking but should be addressed
  - Info messages are non-blocking but good practice to address
  - Uses `read_lints` tool to check modified files
  - Positioned between Step 8 (Stage Files) and Step 10 (Run Validators)
  - Implements FR-024: IDE/Linter Check Before Commit

### Changed

- **Step Renumbering:**
  - Old Step 9 (Run Validators) → **New Step 10**
  - Old Step 9.5 (CMW) → **New Step 10.5**
  - Old Step 10 (Commit Changes) → **New Step 11**
  - Old Step 11 (Create Git Tag) → **New Step 12**
  - Old Step 12 (Push to Remote) → **New Step 13**
  - Old Step 13 (Post-Commit Verification) → **New Step 14**
  - Old Step 14 (Act on Verification Results) → **New Step 15**
  - Old Step 15 (Check for PIR Trigger) → **New Step 16**

- **Workflow YAML:**
  - Added Step 9 configuration (IDE problem checking)
  - Updated all step dependencies to reflect new numbering
  - Updated workflow version to 2.2.0

- **Documentation:**
  - Updated README.md with new step numbering
  - Updated agent execution guide with Step 9 documentation
  - Updated cursorrules with Step 9 in TODO list

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Step 9 adds IDE problem checking capability
- ✅ Backward compatible: Existing workflows continue to work
- ✅ Documentation updates: All RW docs updated with new step

**Related:**
- Project Version: v0.2.1.8+1
- Epic 2, Story 1, Task 8: Add Step 9 - IDE problem checking to Release Workflow
- Feature Request: FR-024 (IDE/Linter Check Before Commit)

---

## [2.1.4] - 2025-12-18

**Package Version:** 2.1.4
**Project Version:** 0.6.6.10+15
**Bump Type:** PATCH

### Changed

- **RW Step 5 (Update README):**
  - Step 5 marked as **MANDATORY** (was optional)
  - **MUST** update project version text in README (e.g., `**Version:** v{version}`)
  - Badge and latest release updates remain optional (if present)
  - Updated all RW documentation to reflect requirement
  - Updated workflow YAML: `required: false` → `required: true`
  - Added `update_version_text: true` config parameter

### Fixed

- **Documentation Clarification:**
  - Clarified that Step 5 must update project version in README
  - Added detailed version text update instructions in agent execution guide
  - Updated reference documentation with mandatory requirement

**Criteria Reference:** PATCH Version Bump
- ✅ Clarification: Makes explicit that README version should always be updated
- ✅ Enhancement: Enforces best practice (README should reflect current version)
- ✅ Backward compatible: Projects will now correctly update README version
- ✅ Documentation updates: Improved clarity in workflow instructions

**Related:**
- Project Version: v0.6.6.10+15
- Epic 6, Story 6, Task 4: Package Management Implementation Plan

---

## [2.1.3] - 2025-12-18

**Package Version:** 2.1.3
**Project Version:** 0.2.1.1+1
**Bump Type:** MINOR

### Added

- **Optional BYOB Badge Workflow for Private Repos**
  - Added `templates/github-actions/update-badges-byob.yml` - GitHub Actions workflow template for dynamic badge generation using BYOB
  - Added `templates/github-actions/README.md` - Documentation for optional GitHub Actions workflows
  - Supports version, license, status, tests, coverage, and code quality badges
  - Designed for private repositories that cannot use standard Shields.io badges
  - Includes comprehensive setup instructions and customization guidance

### Changed

- Updated README to include optional GitHub Actions workflow templates section
- Updated package version to 2.1.3

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Optional BYOB badge workflow for private repos
- ✅ Backward compatible: Optional feature, doesn't affect existing functionality
- ✅ Adds value for users with private repositories

**Related:**
- Epic 1, Story 6: Repository CI/CD Setup
- BYOB Repository: https://github.com/RubbaBoy/BYOB

---

## [2.1.2] - 2025-12-18

**Package Version:** 2.1.2
**Project Version:** 0.4.13.4+2
**Bump Type:** PATCH

### Fixed

- **BR-010:** Fixed RW doc-init detection bug (Story + Task docs batch creation scenario)
  - **Bug:** RW incorrectly set BUILD=0 instead of BUILD=1 when Story + all Task docs created together in story's abstract space (v0.E.S.0+0), then first implementation work begins
  - **Root Cause:** `detect_first_time_est_doc` function didn't check if task document already exists (even if not created in current commit)
  - **Fix:** Added task document existence check before determining doc-init state
  - **Impact:** Ensures correct versioning (BUILD=1) for batch creation workflow
  - **Use Case:** Valid workflow (Story + Task docs batch creation) now correctly supported

### Changed

- Updated `validate_version_bump.py` to check task document existence before determining doc-init
- Updated RW execution guide with Example 4 (Story + Task docs batch creation scenario)
- Enhanced doc-init detection logic to handle batch creation workflows

**Criteria Reference:** PATCH Version Bump
- ✅ Bug fix: Resolves BR-010 (incorrect BUILD=0 for batch creation workflow)
- ✅ Backward compatible: No breaking changes
- ✅ Improves versioning accuracy for valid batch creation workflows

**Related:**
- Bug Report: BR-010 – RW Doc-Init Detection Bug
- Use Case: UC-D-004 – Story + Task Docs Batch Creation
- Abstract Anti-Pattern: Use Case Exposed Design Flaw

---

## [2.1.1] - 2025-12-09

**Package Version:** 2.1.1
**Project Version:** 0.2.1.7+1
**Bump Type:** PATCH

### Fixed
- **BR-003:** Added support for `update/*`, `maintenance/*`, and `upgrade/*` branch patterns in branch validation
  - Maintenance/update branches now skip epic/version validation (similar to `main` branch)
  - Eliminates false warnings when running RW on framework update branches
  - Added `is_maintenance_branch()` function to detect maintenance branch patterns

### Changed
- Updated `validate_branch_context.py` to recognize maintenance branch patterns
- Maintenance branches no longer trigger "Branch not in known mapping" warnings

**Criteria Reference:** PATCH Version Bump
- ✅ Bug fix: Resolves BR-003 (false warnings for valid update branches)
- ✅ Backward compatible: No breaking changes
- ✅ Improves validator behavior for framework update workflows

---

## [2.1.0] - 2025-12-08

**Package Version:** 2.1.0
**Project Version:** 0.3.2.9+1
**Bump Type:** MINOR

### Justification
Added Package Version Workflow (PVW) - a complete new workflow for intelligent agent-driven package versioning. This is a new feature that is backward compatible.

**Changes:**
- Added `workflows/package-version-workflow.yaml` - PVW workflow definition
- Added `docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md` - Complete agent execution guide
- Added `scripts/validation/package/` - Validation scripts as tools (format, increment, consistency, change analysis)
- Updated `workflows/release-workflow.yaml` - Integrated PVW as Step 2.5
- Updated `cursorrules-rw-trigger-section.md` - Added PVW trigger section with comprehensive TODO tracking

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Complete new workflow (PVW)
- ✅ Enhancement: Integrated with Release Workflow
- ✅ Backward compatible: No breaking changes

**Impact Assessment:** None - backward compatible addition. Existing RW functionality unchanged.

### Added
- **Package Version Workflow (PVW):** Complete workflow for intelligent agent-driven package versioning
  - Workflow definition (`package-version-workflow.yaml`)
  - Agent execution guide (`package-version-workflow-agent-execution.md`)
  - Validation scripts as tools (`scripts/validation/package/`)
- **PVW Integration:** PVW executes as RW Step 2.5 (after project version bump, before changelog)
- **Cursor Rules:** PVW trigger section with comprehensive TODO tracking requirements
- **Version Bump Criteria:** Documentation of MAJOR/MINOR/PATCH criteria as guidance

---

## [2.0.0] - 2025-12-06

**Package Version:** 2.0.0
**Project Version:** 0.2.1.5+3

### Added
- "ALL sections" requirement for Kanban updates
- Atomicity and blocked protocol
- Epic branch workflow support

### Changed
- Workflow YAML schema updated
- Enhanced validation and error handling

---

