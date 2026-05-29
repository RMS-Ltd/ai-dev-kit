---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Version Tagging Strategy

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T05 - Create framework version tagging strategy  
**Related:** Framework Versioning Strategy, Framework Release Process, Framework Compatibility Tracking

---

## Executive Summary

This document defines the **comprehensive Git tagging strategy** for AI Dev Kit framework releases. The strategy establishes tag naming conventions, tag message formats, tagging workflows, and distribution mechanisms to enable precise version pinning, dependency management, and framework distribution.

**Key Principles:**
- **Dual Tagging:** Project tags (`v{version}`) and framework tags (`{framework-name}-v{version}`)
- **Consistent Naming:** Standardized tag format across all frameworks
- **Rich Metadata:** Tag messages include framework name, version, and release summary
- **Distribution Support:** Tags enable Git submodule, subtree, and package manager distribution
- **Traceability:** Tags link framework versions to project versions

---

## 1. Tag Naming Conventions

### 1.1 Project Tags

**Format:** `v{version}`

**Version Schema:** `RC.EPIC.STORY.TASK+BUILD`

**Examples:**
- `v0.6.1.1+1` - Project release for Epic 6, Story 1, Task 1, Build 1
- `v0.6.1.2+1` - Project release for Epic 6, Story 1, Task 2, Build 1
- `v0.6.1.3+1` - Project release for Epic 6, Story 1, Task 3, Build 1

**Purpose:**
- Tag project releases (includes all framework changes)
- Reference point for project version history
- Used in project changelog and documentation

**Creation:**
- Created automatically during RW Step 12
- Tagged on the commit that includes all release changes
- Pushed to remote repository

### 1.2 Framework Tags

**Format:** `{framework-name}-v{version}`

**Version Schema:** `MAJOR.MINOR.PATCH` (SemVer)

**Framework Name Normalization:**
- Spaces replaced with hyphens: `workflow mgt` → `workflow-mgt`
- Special characters removed or replaced
- Lowercase for consistency
- Hyphens for word separation

**Examples:**
- `kanban-v2.1.0` - Kanban framework v2.1.0
- `workflow-mgt-v2.2.0` - Workflow Management framework v2.2.0
- `numbering-versioning-v2.0.0` - Numbering & Versioning framework v2.0.0
- `doc-lifecycle-v1.0.0` - Document Lifecycle framework v1.0.0
- `debug-path-v1.0.0` - Debug Path framework v1.0.0

**Purpose:**
- Tag individual framework releases
- Enable precise version pinning for dependencies
- Support Git submodule and subtree distribution
- Enable package manager distribution (when published)

**Creation:**
- Created during framework release (RW Step 12.5 or manual)
- Tagged on the commit that includes framework changes
- Pushed to remote repository

### 1.3 Monorepo Tags

**Format:** `ai-dev-kit-v{version}`

**Version Schema:** `MAJOR.MINOR.PATCH` (SemVer)

**Examples:**
- `ai-dev-kit-v2.0.0` - Complete ai-dev-kit monorepo release v2.0.0
- `ai-dev-kit-v2.1.0` - Complete ai-dev-kit monorepo release v2.1.0

**Purpose:**
- Tag complete monorepo releases (all frameworks)
- Reference point for monorepo version history
- Used for complete framework suite distribution

**Creation:**
- Created manually for major monorepo releases
- Tagged on the commit that includes all framework changes
- Pushed to remote repository

---

## 2. Tag Message Format

### 2.1 Project Tag Messages

**Format:**
```
Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}
```

**Example:**
```
Release v0.6.1.3+1: Framework compatibility tracking system

Epic: 6 | Story: 1 | Task: 3
```

**Required Fields:**
- Release version (project version)
- Release summary (brief description)
- Epic, Story, Task numbers

**Optional Fields:**
- Framework versions included in release
- Breaking changes notice
- Migration guide reference

### 2.2 Framework Tag Messages

**Format:**
```
Release {framework-name} v{version}: {summary}

Package Version: {version}
Project Version: {project-version}
Bump Type: {MAJOR|MINOR|PATCH}
```

**Example:**
```
Release kanban v2.1.0: Added semantic matching capabilities

Package Version: 2.1.0
Project Version: 0.4.8.6+1
Bump Type: MINOR
```

**Required Fields:**
- Framework name and version
- Release summary (brief description)
- Package version (SemVer)
- Project version (RC.EPIC.STORY.TASK+BUILD)
- Bump type (MAJOR/MINOR/PATCH)

**Optional Fields:**
- Breaking changes notice
- Migration guide reference
- Dependency updates
- Compatibility notes

### 2.3 Monorepo Tag Messages

**Format:**
```
Release ai-dev-kit v{version}: {summary}

Frameworks:
- {framework-1}: v{version-1}
- {framework-2}: v{version-2}
...
```

**Example:**
```
Release ai-dev-kit v2.0.0: Complete framework suite release

Frameworks:
- kanban: v2.1.0
- workflow-mgt: v2.2.0
- numbering-versioning: v2.0.0
- doc-lifecycle: v1.0.0
- debug-path: v1.0.0
```

**Required Fields:**
- Monorepo name and version
- Release summary
- List of frameworks and versions

**Optional Fields:**
- Breaking changes notice
- Migration guide reference
- Compatibility matrix updates

---

## 3. Tagging Workflow

### 3.1 Automatic Tagging (Release Workflow)

**Project Tags:**
- Created automatically during RW Step 12
- Tagged on the commit that includes all release changes
- Format: `v{version}` (project version)
- Message: Includes epic, story, task information

**Framework Tags:**
- Created during framework release (if framework changed)
- Tagged on the commit that includes framework changes
- Format: `{framework-name}-v{version}` (framework version)
- Message: Includes package version, project version, bump type

**Workflow Integration:**
```
RW Step 11: Commit Changes
RW Step 12: Create Git Tag (project tag)
RW Step 12.5: Create Framework Tags (if frameworks changed) ← Optional
RW Step 13: Push to Remote (project tag + framework tags)
```

### 3.2 Manual Tagging

**When to Use:**
- Framework releases outside of RW
- Retroactive tagging for historical releases
- Monorepo releases
- Special releases (hotfixes, emergency releases)

**Manual Tagging Process:**
1. Identify framework version from `README.md`
2. Identify project version from `version.py`
3. Create annotated tag with appropriate message
4. Push tag to remote repository
5. Verify tag created successfully

**Manual Tagging Commands:**
```bash
# Create framework tag
git tag -a kanban-v2.1.0 -m "Release kanban v2.1.0: Added semantic matching

Package Version: 2.1.0
Project Version: 0.4.8.6+1
Bump Type: MINOR"

# Push tag
git push origin kanban-v2.1.0
```

### 3.3 Tag Validation

**Validation Checks:**
- Tag format matches naming convention
- Tag message includes required fields
- Tag points to correct commit
- Tag version matches framework version
- Tag doesn't already exist

**Validation Tools:**
- Manual validation: Review tag format and message
- Automated validation: Tag validation scripts (future)
- Git validation: `git tag -l` to list tags

---

## 4. Tag Distribution

### 4.1 Git Submodule Distribution

**Tag Usage:**
- Projects checkout specific framework tags
- Enables precise version pinning
- Supports dependency management

**Example:**
```bash
# Add framework as submodule
git submodule add https://github.com/earlution/ai-dev-kit.git frameworks/ai-dev-kit

# Checkout specific framework tag
cd frameworks/ai-dev-kit
git checkout kanban-v2.1.0
cd ../..
git add frameworks/ai-dev-kit
git commit -m "Pin kanban framework to v2.1.0"
```

**Tag Requirements:**
- Framework tags must exist for version pinning
- Tags must be pushed to remote repository
- Tags must point to stable commits

### 4.2 Git Subtree Distribution

**Tag Usage:**
- Projects merge specific framework tags
- Framework files become part of main repository
- Supports dependency management

**Example:**
```bash
# Add framework as subtree
git subtree add --prefix=frameworks/kanban \
    https://github.com/earlution/ai-dev-kit.git \
    kanban-v2.1.0 \
    --squash

# Update framework
git subtree pull --prefix=frameworks/kanban \
    https://github.com/earlution/ai-dev-kit.git \
    kanban-v2.2.0 \
    --squash
```

**Tag Requirements:**
- Framework tags must exist for version pinning
- Tags must be pushed to remote repository
- Tags must point to stable commits

### 4.3 Package Manager Distribution

**Tag Usage:**
- Package managers use tags for version resolution
- Tags enable semantic versioning for packages
- Supports npm, pip, pub.dev distribution (when published)

**Example (npm):**
```json
{
  "dependencies": {
    "@ai-dev-kit/kanban": "2.1.0"
  }
}
```

**Tag Requirements:**
- Framework tags must match package versions
- Tags must follow SemVer format
- Tags must be pushed to remote repository

### 4.4 GitHub Releases Distribution

**Tag Usage:**
- GitHub Releases use tags for release identification
- Tags enable release distribution via GitHub
- Supports tar.gz package distribution

**Example:**
- Tag: `kanban-v2.1.0`
- GitHub Release: `kanban v2.1.0`
- Release Assets: `kanban-v2.1.0.tar.gz`, `kanban-v2.1.0.sha256`

**Tag Requirements:**
- Framework tags must exist for releases
- Tags must be pushed to remote repository
- Tags must point to stable commits

---

## 5. Tag Management

### 5.1 Tag Lifecycle

**Tag Creation:**
- Created during framework release
- Tagged on stable commits only
- Never tag on work-in-progress commits

**Tag Updates:**
- Tags are immutable (never updated)
- New versions get new tags
- Old tags remain for historical reference

**Tag Deletion:**
- Tags should not be deleted (immutable)
- If tag created incorrectly, create new tag with corrected version
- Document tag corrections in changelog

### 5.2 Tag Organization

**Tag Categories:**
- **Project Tags:** `v{version}` (project releases)
- **Framework Tags:** `{framework-name}-v{version}` (framework releases)
- **Monorepo Tags:** `ai-dev-kit-v{version}` (monorepo releases)

**Tag Filtering:**
```bash
# List all project tags
git tag -l "v*"

# List all framework tags
git tag -l "*-v*"

# List tags for specific framework
git tag -l "kanban-v*"

# List monorepo tags
git tag -l "ai-dev-kit-v*"
```

### 5.3 Tag Maintenance

**Regular Maintenance:**
- Verify tags exist for all framework releases
- Verify tag messages are complete and accurate
- Verify tags point to correct commits
- Clean up any incorrectly created tags (create new tags)

**Tag Verification:**
```bash
# Verify tag exists
git tag -l "kanban-v2.1.0"

# Verify tag message
git tag -l -n1 "kanban-v2.1.0"

# Verify tag commit
git show kanban-v2.1.0
```

---

## 6. Tag Best Practices

### 6.1 Tag Creation

**Best Practices:**
- Always create annotated tags (not lightweight tags)
- Include comprehensive tag messages
- Verify tag format before pushing
- Test tag checkout/merge before distribution

**Annotated Tags:**
```bash
# Good: Annotated tag with message
git tag -a kanban-v2.1.0 -m "Release kanban v2.1.0: ..."

# Avoid: Lightweight tag (no message)
git tag kanban-v2.1.0
```

### 6.2 Tag Messages

**Best Practices:**
- Include all required fields
- Use consistent message format
- Reference project version for traceability
- Include breaking changes notice if applicable

**Message Quality:**
- Clear and descriptive
- Includes version information
- Includes release summary
- Includes traceability information

### 6.3 Tag Distribution

**Best Practices:**
- Push tags immediately after creation
- Verify tags are accessible remotely
- Document tag usage in framework documentation
- Provide examples for tag-based distribution

**Distribution Documentation:**
- Include tag examples in installation guides
- Document tag-based distribution methods
- Provide tag filtering examples
- Document tag verification procedures

---

## 7. Tag Examples

### 7.1 Project Tag Example

**Tag:** `v0.6.1.3+1`

**Message:**
```
Release v0.6.1.3+1: Framework compatibility tracking system

Epic: 6 | Story: 1 | Task: 3
```

**Usage:**
- Reference point for project release
- Used in project changelog
- Links to framework releases

### 7.2 Framework Tag Example

**Tag:** `kanban-v2.1.0`

**Message:**
```
Release kanban v2.1.0: Added semantic matching capabilities

Package Version: 2.1.0
Project Version: 0.4.8.6+1
Bump Type: MINOR
```

**Usage:**
- Git submodule: `git checkout kanban-v2.1.0`
- Git subtree: Merge `kanban-v2.1.0` tag
- Package manager: `@ai-dev-kit/kanban@2.1.0`
- GitHub Release: Release `kanban-v2.1.0`

### 7.3 Monorepo Tag Example

**Tag:** `ai-dev-kit-v2.0.0`

**Message:**
```
Release ai-dev-kit v2.0.0: Complete framework suite release

Frameworks:
- kanban: v2.1.0
- workflow-mgt: v2.2.0
- numbering-versioning: v2.0.0
- doc-lifecycle: v1.0.0
- debug-path: v1.0.0
```

**Usage:**
- Reference point for complete monorepo release
- Used for complete framework suite distribution
- Links to all framework releases

---

## 8. Related Documentation

### 8.1 Core Documents

- **Framework Versioning Strategy:** `framework-versioning-strategy.md`
  - Framework versioning schema and conventions
  - Version bump criteria and decision-making

- **Framework Release Process:** `framework-release-process.md`
  - Complete framework release workflow
  - Tagging integration with RW

- **Framework Compatibility Tracking:** `framework-compatibility-tracking.md`
  - Framework compatibility matrix
  - Version compatibility requirements

### 8.2 Supporting Documents

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Framework installation and dependency management
  - Tag-based distribution methods

- **Package Maintenance and Release:** `package-maintenance-and-release.md`
  - Complete package maintenance guide
  - PVW execution and integration

---

## 9. Summary

### 9.1 Key Principles

1. **Dual Tagging:** Project tags and framework tags tracked independently
2. **Consistent Naming:** Standardized tag format across all frameworks
3. **Rich Metadata:** Tag messages include comprehensive release information
4. **Distribution Support:** Tags enable multiple distribution methods
5. **Traceability:** Tags link framework versions to project versions

### 9.2 Tag Formats

**Project Tags:**
- Format: `v{version}` (e.g., `v0.6.1.3+1`)
- Version Schema: `RC.EPIC.STORY.TASK+BUILD`

**Framework Tags:**
- Format: `{framework-name}-v{version}` (e.g., `kanban-v2.1.0`)
- Version Schema: `MAJOR.MINOR.PATCH` (SemVer)

**Monorepo Tags:**
- Format: `ai-dev-kit-v{version}` (e.g., `ai-dev-kit-v2.0.0`)
- Version Schema: `MAJOR.MINOR.PATCH` (SemVer)

### 9.3 Tagging Workflow

**Automatic Tagging:**
- Project tags: Created during RW Step 12
- Framework tags: Created during framework release (RW Step 12.5 or manual)

**Manual Tagging:**
- For framework releases outside of RW
- For retroactive tagging
- For monorepo releases

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S01:T05 - Create framework version tagging strategy

