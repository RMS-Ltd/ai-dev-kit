---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Package Maintenance and Release

**Status:** COMPLETE  
**Version:** 1.0.0  
**Last updated:** 2025-12-18  
**Purpose:** Comprehensive guide to package maintenance, versioning, and release processes

---

## Executive Summary

This document provides a complete overview of how packages are maintained and released in the AI Dev Kit (ADK) framework. Packages use **Semantic Versioning (SemVer)** and are versioned through an **intelligent agent-driven workflow** called the Package Version Workflow (PVW), which runs as part of the Release Workflow (RW).

**Key Concepts:**
- **Dual Versioning:** Project version (`RC.EPIC.STORY.TASK+BUILD`) and package versions (SemVer `MAJOR.MINOR.PATCH`) are tracked independently
- **Agent-Driven:** PVW uses intelligent analysis, not mechanical rules
- **Automatic Detection:** PVW automatically detects changed packages and determines appropriate version bumps
- **Integrated Workflow:** PVW runs as RW Step 2.5 (after project version bump, before changelog creation)

---

## 1. Package Structure

### 1.1 Package Organization

**Location:** `packages/frameworks/`

**Current Packages:**
- `workflow mgt/` - Release Workflow implementation package
- `kanban/` - Kanban System Implementation Package
- `numbering & versioning/` - Numbering & Versioning Policy Package
- `doc-lifecycle/` - Document Lifecycle Management Package
- `debug-path/` - Debug Path Methodology Package

### 1.2 Package Contents

Each package includes:

**Required Files:**
- `README.md` - Package overview, version, last updated
- `PACKAGE_OVERVIEW.md` - Package structure and usage
- `CHANGELOG.md` - Package version history (SemVer format)

**Optional Files:**
- `IMPLEMENTATION_GUIDE.md` - Step-by-step implementation guide
- `integration/` - Integration guides with other packages
- `templates/` - Package-specific templates
- `scripts/` - Package-specific scripts
- `policies/` - Package-specific policies

### 1.3 Package Version Tracking

**Version Location:** `README.md` (frontmatter or header)

**Format:**
```markdown
**Version:** 2.1.0
**Last Updated:** 2025-12-10
```

**Example (Kanban Package):**
```yaml
package:
  name: "Kanban System Implementation Package"
  version: "2.1.0"
  last_updated: "2025-12-10"
```

---

## 2. Package Versioning (SemVer)

### 2.1 Semantic Versioning Schema

**Format:** `MAJOR.MINOR.PATCH`

- **MAJOR (X.0.0):** Breaking changes
- **MINOR (x.Y.0):** New features (backward compatible)
- **PATCH (x.y.Z):** Bug fixes, clarifications

### 2.2 Version Bump Criteria (Guidance)

**These criteria are guidance, not hard rules.** Agents use them to inform intelligent decisions.

#### MAJOR Version Bump (X.0.0)

**Typical Indicators:**
- Removing or renaming core files/directories
- Changing required file locations or names
- Removing templates or core components
- Changing package directory structure significantly
- Breaking policy changes (removing requirements, changing mandatory vs. optional)
- Breaking API changes (for script packages)

**Example:**
- Kanban package: `2.0.0` → `3.0.0` (removed deprecated template, changed epic structure)

#### MINOR Version Bump (x.Y.0)

**Typical Indicators:**
- New features, enhancements, additions (backward compatible)
- New templates, guides, or documentation
- New integration capabilities
- Significant enhancements to existing features

**Example:**
- Workflow Management: `2.0.0` → `2.1.0` (added Package Version Workflow)
- Kanban: `2.0.0` → `2.1.0` (added semantic matching, canonical adoption mode)

#### PATCH Version Bump (x.y.Z)

**Typical Indicators:**
- Bug fixes, corrections, clarifications
- Fixed broken links or typos
- Minor documentation updates
- Small improvements that don't add new functionality

**Example:**
- Workflow Management: `2.1.0` → `2.1.1` (fixed branch validation for maintenance branches)

### 2.3 Agent Decision Process

**Agent Analysis Pattern:**
1. **ANALYZE** - Review actual changes (what files changed? what was added/removed?)
2. **DETERMINE** - Assess impact (breaking? new feature? bug fix?)
3. **DECIDE** - Choose bump type using criteria as guidance
4. **DOCUMENT** - Record reasoning and justification

**Key Principle:** Agents make intelligent decisions based on context, not mechanical rule application.

---

## 3. Package Version Workflow (PVW)

### 3.1 Overview

**Workflow:** Package Version Workflow (PVW)  
**Type:** `package_version`  
**Steps:** 6 steps (all required)  
**Trigger:** RW Step 2.5 (after project version bump, before changelog creation)  
**Execution:** Agent-driven (intelligent analysis, not deterministic scripts)

### 3.2 PVW Steps

#### Step 1: Detect Changed Packages
- Analyze git diff to identify changed files
- Map changed files to packages
- Evaluate significance of changes
- Create list of packages needing version bumps

#### Step 2: Analyze Package Changes
- Read package files and structure
- Analyze git diff for each package
- Classify changes (added/removed/modified)
- Assess impact (breaking/new feature/bug fix/clarification)

#### Step 3: Determine Version Bumps
- Review version bump criteria (as guidance)
- Analyze package changes against criteria
- Consider package-specific context
- Determine bump type (MAJOR/MINOR/PATCH)
- Document reasoning and justification

#### Step 4: Execute Version Updates
- Update README.md version
- Update `**Last Updated:**` date
- Create/update package changelog entry
- Document justification

#### Step 5: Validate Updates
- Run validation scripts (format, increment, consistency)
- Verify changelog entry exists and is complete
- Ensure all locations updated correctly

#### Step 6: Document & Proceed
- Document PVW execution summary
- Pass package version info to RW Step 3
- Continue to RW Step 3 (changelog creation)

### 3.3 PVW Integration with RW

**Execution Flow:**
```
RW Step 1: Branch Safety Check
RW Step 2: Bump Project Version
RW Step 2.5: Package Version Workflow (PVW) ← Executes here
  ├─ Step 1: Detect Changed Packages
  ├─ Step 2: Analyze Package Changes
  ├─ Step 3: Determine Version Bumps
  ├─ Step 4: Execute Version Updates
  ├─ Step 5: Validate Updates
  └─ Step 6: Document & Proceed
RW Step 3: Create Detailed Changelog (includes package versions)
RW Step 4: Update Main Changelog
...
```

**PVW Trigger:**
- Automatic: Runs as part of RW execution (Step 2.5)
- Manual: Can be triggered independently for testing/debugging

**PVW Execution Context:**
- Project version already bumped (RW Step 2 complete)
- Git changes available for analysis
- Package changes detected or specified

### 3.4 TODO Tracking (Mandatory)

**REQUIRED:** Agents **MUST** use `todo_write` to track all 6 PVW steps.

**Why TODOs are Required:**
- User visibility of real-time progress
- Agent organization across sequential steps
- Error recovery (clear visibility into where execution stopped)
- Status management (automatic status updates)
- Agentic drift prevention (checkpoints to ensure all steps completed)

**Implementation Pattern:**
1. **At Workflow Start:** Create TODO list with all 6 steps as `pending`
2. **Before Each Step:** Mark step as `in_progress`
3. **After Each Step:** Mark step as `completed`, mark next as `in_progress`
4. **On Completion:** All steps marked as `completed`

---

## 4. Package Changelogs

### 4.1 Changelog Format

**Location:** `packages/frameworks/{package}/CHANGELOG.md`

**Format:** Keep a Changelog format with SemVer

**Required Fields:**
- Package Version (SemVer)
- Project Version (RC.EPIC.STORY.TASK+BUILD)
- Bump Type (MAJOR/MINOR/PATCH)
- Date
- Justification
- Changes (Added/Changed/Fixed/Removed)

**Example Entry:**
```markdown
## [2.1.0] - 2025-12-10

**Package Version:** 2.1.0
**Project Version:** 0.4.8.6+1
**Bump Type:** MINOR

### Added
- New integration guide for Kanban package
- Semantic matching capabilities

### Changed
- Migration process now supports intelligent semantic matching

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Semantic epic matching with similarity scoring
- ✅ Backward compatible: Existing migration modes still supported
```

### 4.2 Changelog Maintenance

**When Created:**
- Automatically created/updated by PVW Step 4
- Each package version bump generates a new changelog entry

**What's Included:**
- Package version and project version cross-reference
- Bump type and justification
- Detailed list of changes (Added/Changed/Fixed/Removed)
- Criteria reference (why this bump type was chosen)

---

## 5. Current Package Status

### 5.1 Package Versions

| Package | Current Version | Last Updated | Status |
|---------|----------------|--------------|--------|
| **workflow mgt** | 2.1.1 | 2025-12-09 | Active |
| **kanban** | 2.1.0 | 2025-12-10 | Active |
| **numbering & versioning** | 2.0.0 | 2025-12-02 | Active |
| **doc-lifecycle** | 1.0.0 | TBD | Active |
| **debug-path** | 1.0.0 | TBD | Active |

### 5.2 Package Dependencies

**Compatibility Matrix:**
- **kanban** requires: `numbering & versioning` v2.0.0+, `workflow mgt` v2.0.0+
- **workflow mgt** requires: `numbering & versioning` v2.0.0+
- **numbering & versioning**: Standalone (no dependencies)

---

## 6. Package Update Process

### 6.1 When Packages Are Updated

**Automatic Updates:**
- PVW runs automatically during RW execution (Step 2.5)
- Detects changed packages via git diff
- Determines version bumps intelligently
- Updates versions and changelogs automatically

**Manual Updates:**
- Can trigger PVW independently for testing/debugging
- Can manually update package versions if needed (not recommended)

### 6.2 Update Workflow

1. **Make Changes** - Modify package files (templates, scripts, documentation)
2. **Run RW** - Release Workflow automatically triggers PVW
3. **PVW Executes** - Detects changes, analyzes, determines bumps, updates versions
4. **Validation** - Validation scripts verify updates are correct
5. **Changelog** - Package changelog updated with new version entry
6. **Project Changelog** - Project changelog includes package version info

### 6.3 Update Documentation

**PACKAGE_UPDATE_SUMMARY.md:**
- Located in `packages/frameworks/PACKAGE_UPDATE_SUMMARY.md`
- Documents major package updates and enhancements
- Provides migration guidance for other projects

---

## 7. Package Release Best Practices

### 7.1 Version Bump Guidelines

**When to Bump MAJOR:**
- Breaking changes that require migration
- Removing features or templates
- Significant structural changes

**When to Bump MINOR:**
- New features, templates, or guides
- Significant enhancements (backward compatible)
- New integration capabilities

**When to Bump PATCH:**
- Bug fixes and corrections
- Minor documentation updates
- Small improvements (no new functionality)

### 7.2 Changelog Best Practices

**Required Information:**
- Clear description of changes
- Justification for bump type
- Criteria reference (why this bump type)
- Cross-reference to project version

**Format:**
- Use Keep a Changelog format
- Include Added/Changed/Fixed/Removed sections
- Document breaking changes clearly
- Provide migration guidance for MAJOR bumps

### 7.3 Package Maintenance

**Regular Maintenance:**
- Keep package versions up to date
- Maintain accurate changelogs
- Update integration guides when dependencies change
- Review and update package documentation

**Version Tracking:**
- Always update version in README.md
- Always update `**Last Updated:**` date
- Always create changelog entry for version bumps

---

## 8. Integration with Release Workflow

### 8.1 RW Step 2.5: Package Version Workflow

**Execution:**
- Runs automatically after RW Step 2 (project version bump)
- Before RW Step 3 (changelog creation)
- Non-blocking (RW continues even if PVW skips)

**Configuration:**
```yaml
# rw-config.yaml
steps:
  - step: 2.5
    name: Package Version Workflow (PVW)
    handler: package.version_bump
    blocking: false
    mandatory: false
    agentic: true
    config:
      packages_dir: packages/frameworks
      auto_detect_changes: true
```

### 8.2 Package Version Info in Changelog

**Project Changelog Includes:**
- Package version updates in changelog entry
- Cross-reference to package changelogs
- Summary of package changes

**Example:**
```markdown
## [0.4.8.6+1] - 10-12-25

### Package Updates
- **Kanban:** 2.0.0 → 2.1.0 (MINOR) - Added semantic matching
- **Workflow Management:** 2.1.0 → 2.1.1 (PATCH) - Fixed branch validation
```

---

## 9. Troubleshooting

### 9.1 No Packages Changed

**Agent Response:**
- Skip PVW execution
- Document: "No package changes detected, skipping PVW"
- Mark all PVW steps as `cancelled`
- Continue to RW Step 3

### 9.2 Validation Failure

**Agent Response:**
- Analyze validation error
- Determine fix (format, increment, consistency)
- Re-execute update if needed
- Re-validate until all checks pass

### 9.3 Ambiguous Bump Type

**Agent Response:**
- Analyze changes more deeply
- Consider context and impact
- Make intelligent decision based on criteria guidance
- Document reasoning clearly

### 9.4 Agentic Drift

**Prevention:**
- ✅ **MANDATORY:** Create TODO list at workflow start
- ✅ **MANDATORY:** Update TODO status before each step
- ✅ **MANDATORY:** Update TODO status after each step
- ✅ Use TODOs as checkpoints to prevent drift

**Recovery:**
- Check current TODO status to see where execution stopped
- Resume from the last `in_progress` or `pending` step
- Do not skip steps - complete all 6 steps in order

---

## 10. Related Documents

- [Package Version Workflow: Agent Execution (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md) - Complete step-by-step PVW guide
- [Package Versioning Criteria](./package-versioning-criteria.md) - Version bump criteria (guidance)
- [Release Workflow Structure](ultimate-canonical-workflow-structure.md) - RW integration
- [Dual Versioning Guide](./dual-versioning-package-managers.md) - Project vs. package versioning

---

## 11. Summary

### Key Principles

1. **Dual Versioning** - Project version (`RC.EPIC.STORY.TASK+BUILD`) and package versions (SemVer) tracked independently
2. **Agent-Driven** - PVW uses intelligent analysis, not mechanical rules
3. **Automatic Detection** - PVW automatically detects changed packages
4. **Integrated Workflow** - PVW runs as RW Step 2.5
5. **Criteria as Guidance** - Version bump criteria inform decisions, not dictate them

### Package Maintenance Workflow

```
Make Changes → Run RW → PVW Detects Changes → PVW Analyzes → 
PVW Determines Bumps → PVW Updates Versions → PVW Validates → 
PVW Documents → RW Continues → Changelog Includes Package Versions
```

### Package Version Tracking

- **Location:** `README.md` (version and last updated)
- **Format:** SemVer (`MAJOR.MINOR.PATCH`)
- **Changelog:** `CHANGELOG.md` (Keep a Changelog format)
- **Cross-Reference:** Package version linked to project version in changelog

---

**Related:**
- [Ultimate Canonical Workflow Structure](ultimate-canonical-workflow-structure.md)
- [Package Version Workflow YAML (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/workflows/package-version-workflow.yaml)
- [Package Update Summary (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/PACKAGE_UPDATE_SUMMARY.md)

---
_Last updated: 2025-12-18T00:00:00Z_

