---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Versioning Strategy

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T01 - Define framework versioning strategy  
**Related:** Framework Dependency Architecture, Package Maintenance and Release, Package Versioning Criteria

---

## Executive Summary

This document defines the **comprehensive versioning strategy for AI Dev Kit frameworks**. Frameworks are versioned independently from the project using **Semantic Versioning (SemVer)** (`MAJOR.MINOR.PATCH`), enabling clear communication of changes, compatibility tracking, and dependency management.

**Key Principles:**
- **Dual Versioning:** Project version (`RC.EPIC.STORY.TASK+BUILD`) and framework versions (SemVer) are tracked independently
- **Semantic Versioning:** Frameworks use `MAJOR.MINOR.PATCH` for compatibility with package managers and clear change communication
- **Independent Evolution:** Each framework evolves independently with its own version stream
- **Automatic Management:** Framework versions are managed through the Package Version Workflow (PVW)

---

## 1. Purpose and Scope

### 1.1 Purpose

This strategy establishes:
- **Version numbering conventions** for framework packages
- **Version bump criteria** and decision-making guidance
- **Version tracking mechanisms** and file locations
- **Release processes** and tagging strategies
- **Compatibility policies** and dependency management

### 1.2 Scope

**Applies To:**
- All framework packages in `packages/frameworks/`
- Framework releases and updates
- Framework dependency management
- Framework compatibility tracking

**Does Not Apply To:**
- Project versioning (`RC.EPIC.STORY.TASK+BUILD` - see dev-kit-versioning-policy.md)
- Internal development versioning (handled by Release Workflow)
- Legacy or deprecated frameworks (grandfathered versions)

---

## 2. Current Framework Versioning Practices

### 2.1 Framework Packages

**Current Frameworks:**
- **workflow mgt** - Release Workflow implementation package (v2.2.0)
- **kanban** - Kanban System Implementation Package (v2.1.0)
- **numbering & versioning** - Numbering & Versioning Policy Package (v2.0.0)
- **doc-lifecycle** - Document Lifecycle Management Package (v1.0.0)
- **debug-path** - Debug Path Methodology Package (v1.0.0)

### 2.2 Current Practices

**Version Format:**
- Semantic Versioning (SemVer): `MAJOR.MINOR.PATCH`
- Examples: `2.2.0`, `2.1.0`, `1.0.0`

**Version Location:**
- Primary: `README.md` (frontmatter or header)
- Secondary: `CHANGELOG.md` (package changelog)
- Optional: `VERSION` file (for script-based access)

**Version Tracking:**
- Version updated in `README.md` with `**Version:**` field
- `**Last Updated:**` date tracked alongside version
- Package changelog entries reference both package version and project version

**Release Process:**
- Package Version Workflow (PVW) automatically manages version bumps
- Git tags created for framework releases (e.g., `numbering-versioning-v2.0.0`)
- Changelog entries created automatically during PVW execution

---

## 3. Framework Versioning Strategy

### 3.1 Semantic Versioning Schema

**Format:** `MAJOR.MINOR.PATCH`

**Components:**
- **MAJOR (X.0.0):** Breaking changes, incompatible API changes, structural changes
- **MINOR (x.Y.0):** New features, enhancements, additions (backward compatible)
- **PATCH (x.y.Z):** Bug fixes, corrections, clarifications (no new functionality)

**Examples:**
- `2.0.0` → `3.0.0` (MAJOR - breaking change)
- `2.1.0` → `2.2.0` (MINOR - new feature)
- `2.1.0` → `2.1.1` (PATCH - bug fix)

### 3.2 Version Numbering Conventions

#### MAJOR Version (X.0.0)

**When to Increment:**
- Breaking changes that require migration
- Removing or renaming core files/directories
- Changing required file locations or names
- Removing templates or core components
- Changing package directory structure significantly
- Breaking policy changes (removing requirements, changing mandatory vs. optional)
- Breaking API changes (for script packages)

**Examples:**
- Removing `EPIC_TEMPLATE.md` (breaking - consumers depend on it)
- Changing `version_file` location requirement (breaking - breaks existing configs)
- Removing support for old version format (breaking - breaks existing projects)
- Changing required integration pattern (breaking - breaks existing setups)

#### MINOR Version (x.Y.0)

**When to Increment:**
- New features, enhancements, additions (backward compatible)
- New templates, guides, or documentation
- New integration capabilities
- Significant enhancements to existing features
- New optional features or capabilities
- Expanding existing templates with new sections
- Adding new policy options (non-breaking)

**Examples:**
- Adding new `MIGRATION_GUIDE.md` (new feature)
- Adding new template variant (new feature)
- Adding new integration pattern (new feature)
- Expanding existing guide with new sections (enhancement)

#### PATCH Version (x.y.Z)

**When to Increment:**
- Bug fixes, corrections, clarifications
- Fixing broken links or references
- Correcting incorrect examples or code snippets
- Fixing formatting or rendering issues
- Correcting typos or grammatical errors
- Clarifying ambiguous language
- Minor improvements (no new functionality)

**Examples:**
- Fixing broken link to external resource
- Correcting typo in template
- Clarifying ambiguous policy statement
- Fixing code example syntax error

### 3.3 Version Bump Decision Process

**Agent-Driven Analysis:**
1. **ANALYZE** - Review actual changes (what files changed? what was added/removed?)
2. **DETERMINE** - Assess impact (breaking? new feature? bug fix?)
3. **DECIDE** - Choose bump type using criteria as guidance
4. **DOCUMENT** - Record reasoning and justification

**Key Principle:** Version bump criteria are **guidance, not hard rules**. Agents make intelligent decisions based on context, not mechanical rule application.

**See:** `package-versioning-criteria.md` for detailed criteria and examples.

---

## 4. Version Tracking and Management

### 4.1 Version File Locations

**Primary Location:** `README.md`
```markdown
**Version:** 2.1.0
**Last Updated:** 2025-12-10
```

**Secondary Location:** `CHANGELOG.md`
```markdown
## [2.1.0] - 2025-12-10

**Package Version:** 2.1.0
**Project Version:** 0.4.8.6+1
**Bump Type:** MINOR
```

**Optional Location:** `VERSION` file (for script-based access)
```python
FRAMEWORK_NAME = "kanban"
FRAMEWORK_VERSION = "2.1.0"
FRAMEWORK_SEMVER = "2.1.0"
```

### 4.2 Version Update Process

**Automatic Updates (PVW):**
1. PVW detects changed packages via git diff
2. PVW analyzes changes and determines bump type
3. PVW updates `README.md` version and `Last Updated` date
4. PVW creates/updates package changelog entry
5. PVW validates updates and documents reasoning

**Manual Updates (Not Recommended):**
- Only for exceptional circumstances
- Must follow same versioning conventions
- Must update all version locations
- Must create changelog entry

### 4.3 Version Synchronization

**Dual Versioning:**
- **Project Version:** `RC.EPIC.STORY.TASK+BUILD` (internal development)
- **Framework Version:** `MAJOR.MINOR.PATCH` (package releases)

**Cross-Reference:**
- Package changelog entries include both versions
- Project changelog entries reference package versions
- Version mapping documented in changelog entries

**See:** `dual-versioning-package-managers.md` for detailed dual-versioning guidance.

---

## 5. Framework Release Processes

### 5.1 Release Workflow

**Integrated with Release Workflow (RW):**
- PVW runs automatically as RW Step 2.5
- Executes after project version bump (RW Step 2)
- Executes before changelog creation (RW Step 3)

**PVW Execution:**
1. Detect changed packages
2. Analyze package changes
3. Determine version bumps
4. Execute version updates
5. Validate updates
6. Document and proceed

**See:** `package-maintenance-and-release.md` for complete PVW documentation.

### 5.2 Git Tagging Strategy

**Framework Release Tags:**
```bash
# Tag individual framework release
git tag -a numbering-versioning-v2.0.0 -m "Release numbering-versioning v2.0.0"
git push origin numbering-versioning-v2.0.0

# Tag all frameworks in monorepo
git tag -a ai-dev-kit-v2.0.0 -m "Release ai-dev-kit v2.0.0"
```

**Tag Format:**
- Individual framework: `{framework-name}-v{version}` (e.g., `kanban-v2.1.0`)
- Monorepo release: `ai-dev-kit-v{version}` (e.g., `ai-dev-kit-v2.0.0`)

**Tag Message:**
- Include framework name and version
- Include release summary
- Reference project version if applicable

### 5.3 Release Criteria

**Release Readiness:**
- All tests passing
- Documentation complete and accurate
- Changelog entries created
- Version numbers updated
- Git tags created
- Validation scripts passing

**Release Gates:**
- No blocking issues
- All dependencies compatible
- Integration tests passing
- Documentation reviewed

---

## 6. Framework Compatibility Tracking

### 6.1 Compatibility Matrix

**Framework Dependencies:**
- **kanban** requires: `numbering & versioning` v2.0.0+, `workflow mgt` v2.0.0+
- **workflow mgt** requires: `numbering & versioning` v2.0.0+
- **numbering & versioning**: Standalone (no dependencies)

**Compatibility Tracking:**
- Documented in package `README.md`
- Tracked in package changelog entries
- Validated during PVW execution

### 6.2 Backward Compatibility Policy

**MAJOR Version Bumps:**
- Indicate breaking changes
- Require migration guides
- Document breaking changes clearly
- Provide migration paths

**MINOR Version Bumps:**
- Backward compatible
- New features don't break existing usage
- Existing integrations continue to work

**PATCH Version Bumps:**
- Backward compatible
- Bug fixes don't change behavior
- Corrections don't affect functionality

### 6.3 Dependency Management

**Version Pinning:**
- Projects can pin to specific framework versions
- Git submodules: Checkout specific tags
- Package managers: Specify version ranges
- CLI tool: Install specific versions

**Version Updates:**
- Automatic updates via PVW
- Manual updates via CLI tool
- Update notifications in changelog

---

## 7. Versioning Policies

### 7.1 Version Number Assignment

**Initial Version:**
- New frameworks start at `1.0.0`
- Indicates stable, complete initial release
- All core features implemented

**Pre-Release Versions:**
- Use `0.x.x` for pre-release versions
- Indicates development/experimental status
- Not recommended for stable frameworks

**Version Progression:**
- Increment based on change type (MAJOR/MINOR/PATCH)
- Never skip versions (e.g., `2.0.0` → `2.2.0` is invalid)
- Always increment from current version

### 7.2 Version Documentation Requirements

**Required Documentation:**
- Version number in `README.md`
- `Last Updated` date in `README.md`
- Changelog entry for each version bump
- Justification for version bump type
- Cross-reference to project version

**Changelog Requirements:**
- Keep a Changelog format
- Include Added/Changed/Fixed/Removed sections
- Document breaking changes clearly
- Provide migration guidance for MAJOR bumps

### 7.3 Version Validation

**Validation Checks:**
- Version format validation (SemVer format)
- Version increment validation (no skipping)
- Version location consistency (all locations match)
- Changelog entry validation (entry exists and is complete)

**Validation Tools:**
- PVW validation scripts
- Manual validation during review
- CI/CD validation in pipeline

---

## 8. Framework Versioning Best Practices

### 8.1 Version Bump Guidelines

**When to Bump MAJOR:**
- Breaking changes that require migration
- Removing features or templates
- Significant structural changes
- Breaking policy changes

**When to Bump MINOR:**
- New features, templates, or guides
- Significant enhancements (backward compatible)
- New integration capabilities
- New optional features

**When to Bump PATCH:**
- Bug fixes and corrections
- Minor documentation updates
- Small improvements (no new functionality)
- Clarifications and corrections

### 8.2 Changelog Best Practices

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

### 8.3 Package Maintenance

**Regular Maintenance:**
- Keep package versions up to date
- Maintain accurate changelogs
- Update integration guides when dependencies change
- Review and update package documentation

**Version Tracking:**
- Always update version in `README.md`
- Always update `Last Updated` date
- Always create changelog entry for version bumps
- Always validate version updates

---

## 9. Integration with Package Version Workflow (PVW)

### 9.1 PVW Execution

**Automatic Execution:**
- PVW runs as RW Step 2.5
- Detects changed packages automatically
- Analyzes changes intelligently
- Determines version bumps using criteria as guidance
- Updates versions and changelogs automatically

**Manual Execution:**
- Can trigger PVW independently for testing/debugging
- Same execution pattern as automatic execution
- Useful for validating version bump decisions

### 9.2 PVW Integration Points

**Input:**
- Git diff (changed files)
- Package structure (package files and directories)
- Current package versions (from README.md)

**Output:**
- Updated package versions (in README.md)
- Updated `Last Updated` dates
- Package changelog entries
- Version bump justifications

**Validation:**
- Version format validation
- Version increment validation
- Changelog entry validation
- Consistency validation

**See:** `package-maintenance-and-release.md` for complete PVW documentation.

---

## 10. Framework Versioning Examples

### 10.1 MAJOR Version Bump Example

**Scenario:** Removing deprecated template

**Change:**
- Removed `EPIC_TEMPLATE_LEGACY.md`
- Updated documentation to reference new template only

**Analysis:**
- Breaking change: Consumers may depend on legacy template
- Impact: Requires migration to new template
- Context: No migration path provided

**Decision:** MAJOR bump (`2.1.0` → `3.0.0`)

**Changelog Entry:**
```markdown
## [3.0.0] - 2025-12-15

**Package Version:** 3.0.0
**Project Version:** 0.4.8.6+1
**Bump Type:** MAJOR

### Removed
- Removed `EPIC_TEMPLATE_LEGACY.md` (breaking change)
  - Consumers must migrate to new `EPIC_TEMPLATE.md`
  - See migration guide: `MIGRATION_GUIDE.md`

### Changed
- Updated documentation to reference new template only
```

### 10.2 MINOR Version Bump Example

**Scenario:** Adding new integration guide

**Change:**
- Added `integration/workflow-management-integration.md`
- Added new integration pattern examples

**Analysis:**
- New feature: New integration guide
- Compatibility: Backward compatible
- Significance: Substantial new documentation

**Decision:** MINOR bump (`2.1.0` → `2.2.0`)

**Changelog Entry:**
```markdown
## [2.2.0] - 2025-12-10

**Package Version:** 2.2.0
**Project Version:** 0.4.8.6+1
**Bump Type:** MINOR

### Added
- New integration guide for Workflow Management package
- New integration pattern examples
- Expanded integration documentation section

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: New integration guide
- ✅ Enhancement: Expanded documentation
- ✅ Backward compatible: No breaking changes
```

### 10.3 PATCH Version Bump Example

**Scenario:** Fixing broken link

**Change:**
- Fixed broken link to external resource in README.md
- Corrected typo in template

**Analysis:**
- Bug fix: Broken link fixed
- Impact: No new functionality
- Scope: Minor correction

**Decision:** PATCH bump (`2.1.0` → `2.1.1`)

**Changelog Entry:**
```markdown
## [2.1.1] - 2025-12-08

**Package Version:** 2.1.1
**Project Version:** 0.4.8.6+1
**Bump Type:** PATCH

### Fixed
- Fixed broken link to external resource in README.md
- Corrected typo in template

**Criteria Reference:** PATCH Version Bump
- ✅ Bug fix: Broken link fixed
- ✅ Correction: Typo corrected
- ✅ No new functionality: Minor fixes only
```

---

## 11. Related Documentation

### 11.1 Core Documents

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Framework installation and dependency management
  - Framework versioning in dependency context

- **Package Maintenance and Release:** `package-maintenance-and-release.md`
  - Complete package maintenance guide
  - PVW execution and integration

- **Package Versioning Criteria:** `package-versioning-criteria.md`
  - Detailed version bump criteria (guidance)
  - Agent decision-making process

### 11.2 Supporting Documents

- **Dual-Versioning Guide:** `dual-versioning-package-managers.md`
  - Managing project version + framework versions
  - Package manager compatibility

- **Dev Kit Versioning Policy:** `dev-kit-versioning-policy.md`
  - Project versioning (`RC.EPIC.STORY.TASK+BUILD`)
  - Internal development versioning

- **Package Version Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md`
  - Complete PVW step-by-step guide
  - Agent execution patterns

---

## 12. Summary

### 12.1 Key Principles

1. **Semantic Versioning:** Frameworks use `MAJOR.MINOR.PATCH` for clear change communication
2. **Dual Versioning:** Project version and framework versions tracked independently
3. **Agent-Driven:** PVW uses intelligent analysis, not mechanical rules
4. **Automatic Management:** Framework versions managed through PVW
5. **Criteria as Guidance:** Version bump criteria inform decisions, not dictate them

### 12.2 Versioning Workflow

```
Make Changes → Run RW → PVW Detects Changes → PVW Analyzes → 
PVW Determines Bumps → PVW Updates Versions → PVW Validates → 
PVW Documents → RW Continues → Changelog Includes Package Versions
```

### 12.3 Version Tracking

- **Location:** `README.md` (version and last updated)
- **Format:** SemVer (`MAJOR.MINOR.PATCH`)
- **Changelog:** `CHANGELOG.md` (Keep a Changelog format)
- **Cross-Reference:** Package version linked to project version in changelog

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S01:T01 - Define framework versioning strategy

