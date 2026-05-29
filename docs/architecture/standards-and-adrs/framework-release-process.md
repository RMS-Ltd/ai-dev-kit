---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Release Process

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T02 - Create framework release processes  
**Related:** Framework Versioning Strategy, Package Maintenance and Release, Package Version Workflow

---

## Executive Summary

This document defines the **complete framework release process** for AI Dev Kit frameworks. Framework releases are managed through an integrated workflow that combines project versioning (`RC.EPIC.STORY.TASK+BUILD`) with framework versioning (SemVer `MAJOR.MINOR.PATCH`), ensuring consistent, traceable, and automated releases.

**Key Principles:**
- **Integrated Workflow:** Framework releases are part of the Release Workflow (RW)
- **Automatic Versioning:** Package Version Workflow (PVW) automatically manages framework versions
- **Dual Versioning:** Project and framework versions tracked independently
- **Git Tagging:** Framework releases tagged for distribution and reference
- **Validation:** Comprehensive validation at each release stage

---

## 1. Release Process Overview

### 1.1 Release Workflow Integration

**Framework releases are integrated into the Release Workflow (RW):**

```
RW Step 1: Branch Safety Check
RW Step 2: Bump Project Version
RW Step 2.5: Package Version Workflow (PVW) ← Framework versioning happens here
  ├─ Detect changed packages
  ├─ Analyze package changes
  ├─ Determine version bumps (MAJOR/MINOR/PATCH)
  ├─ Execute version updates
  ├─ Validate updates
  └─ Document and proceed
RW Step 3: Create Detailed Changelog (includes framework versions)
RW Step 4: Update Main Changelog
RW Step 5: Update README
RW Step 6: Update BR/FR Docs
RW Step 7: Auto-update Kanban Docs
RW Step 8: Stage Files
RW Step 9: Check IDE-flagged problems
RW Step 10: Run Validators
RW Step 11: Commit Changes
RW Step 12: Create Git Tag
RW Step 13: Push to Remote
```

### 1.2 Release Types

**Automatic Release (Standard):**
- Triggered by running RW after making framework changes
- PVW automatically detects changes and determines version bumps
- All release steps executed automatically
- Most common release type

**Manual Release (Exceptional):**
- For exceptional circumstances (e.g., hotfixes, emergency releases)
- Requires manual version bump and validation
- Must follow same process and validation requirements
- Not recommended for normal releases

---

## 2. Pre-Release Checklist

### 2.1 Framework Changes

**Required:**
- [ ] Framework changes completed and tested
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Integration guides updated (if applicable)
- [ ] Breaking changes documented (if MAJOR bump)

**Recommended:**
- [ ] Code review completed
- [ ] Integration tests passing
- [ ] Examples updated (if applicable)
- [ ] Migration guide created (if MAJOR bump)

### 2.2 Version Readiness

**Version Bump Determination:**
- [ ] Changes analyzed against version bump criteria
- [ ] Bump type determined (MAJOR/MINOR/PATCH)
- [ ] Version bump justified and documented
- [ ] Compatibility impact assessed

**Version Tracking:**
- [ ] Current version documented in `README.md`
- [ ] Version history in `CHANGELOG.md` up to date
- [ ] Cross-references to project version prepared

### 2.3 Documentation Readiness

**Required Documentation:**
- [ ] `README.md` updated with new features/changes
- [ ] `CHANGELOG.md` ready for new entry
- [ ] Breaking changes documented (if MAJOR)
- [ ] Migration guide available (if MAJOR)

**Optional Documentation:**
- [ ] Integration guides updated
- [ ] Examples updated
- [ ] Troubleshooting guide updated

### 2.4 Validation Readiness

**Pre-Release Validation:**
- [ ] All validation scripts passing
- [ ] Version format validation passing
- [ ] Changelog format validation passing
- [ ] Branch context validation passing
- [ ] No blocking issues

---

## 3. Release Workflow Steps

### 3.1 Step 1: Branch Safety Check

**Purpose:** Ensure release is on correct branch

**Actions:**
- Validate current branch matches epic number
- Verify branch context alignment
- Check for uncommitted changes

**Validation:**
- Run `validate_branch_context.py --strict`
- Exit code 0 = PASS, non-zero = FAIL
- **CRITICAL:** Must pass before proceeding

**Failure Handling:**
- If validation fails, fix branch context before proceeding
- Do not proceed to Step 2 if Step 1 fails

### 3.2 Step 2: Bump Project Version

**Purpose:** Update project version for this release

**Actions:**
- Read current project version
- Identify completed task from Story file
- Determine new project version
- Update `src/fynd_deals/version.py`

**Version Schema:**
- Format: `RC.EPIC.STORY.TASK+BUILD`
- Example: `0.6.1.2+1` (Epic 6, Story 1, Task 2, Build 1)

**Validation:**
- Verify version format
- Verify task alignment
- Verify build increment

### 3.3 Step 2.5: Package Version Workflow (PVW)

**Purpose:** Automatically manage framework versions

**PVW Execution Steps:**

#### Step 2.5.1: Detect Changed Packages
- Analyze git diff to identify changed files
- Map changed files to framework packages
- Evaluate significance of changes
- Create list of packages needing version bumps

#### Step 2.5.2: Analyze Package Changes
- Read package files and structure
- Analyze git diff for each package
- Classify changes (added/removed/modified)
- Assess impact (breaking/new feature/bug fix/clarification)

#### Step 2.5.3: Determine Version Bumps
- Review version bump criteria (as guidance)
- Analyze package changes against criteria
- Consider package-specific context
- Determine bump type (MAJOR/MINOR/PATCH)
- Document reasoning and justification

#### Step 2.5.4: Execute Version Updates
- Update `README.md` version
- Update `**Last Updated:**` date
- Create/update package changelog entry
- Document justification

#### Step 2.5.5: Validate Updates
- Run validation scripts (format, increment, consistency)
- Verify changelog entry exists and is complete
- Ensure all locations updated correctly

#### Step 2.5.6: Document & Proceed
- Document PVW execution summary
- Pass package version info to RW Step 3
- Continue to RW Step 3 (changelog creation)

**See:** `package-version-workflow-agent-execution.md` for complete PVW documentation.

### 3.4 Step 3: Create Detailed Changelog

**Purpose:** Create comprehensive changelog entry

**Actions:**
- Create detailed changelog file: `CHANGELOG_v{version}.md`
- Include full timestamp (`YYYY-MM-DD HH:MM:SS UTC`)
- Document all changes (Added/Changed/Fixed/Removed)
- Include framework version information
- Cross-reference to project version

**Changelog Format:**
- Keep a Changelog format
- Full timestamp (immutable once written)
- Framework versions included
- Project version cross-reference

### 3.5 Step 4: Update Main Changelog

**Purpose:** Add summary entry to main changelog

**Actions:**
- Add new entry at top: `## [version] - DD-MM-YY`
- Include release description
- Link to detailed changelog
- Include framework version summary

**Format:**
- Short date format (`DD-MM-YY`)
- Summary of changes
- Link to detailed changelog
- Framework versions listed

### 3.6 Step 5: Update README

**Purpose:** Update project version in README

**Actions:**
- Update version text: `**Version:** v{version}`
- Update version badge (if present)
- Update latest release callout (if present)
- Update `**Last Updated:**` date

### 3.7 Step 6: Update BR/FR Docs

**Purpose:** Update Bug Reports and Feature Requests

**Actions:**
- Document fix attempts for Bug Reports
- Document implementation for Feature Requests
- Update status and verification information

### 3.8 Step 7: Auto-update Kanban Docs

**Purpose:** Update Kanban documentation with version markers

**Actions:**
- Update Epic document with version marker
- Update Story document with version marker
- Update Kanban board with version marker
- Update task checklist with completion status

### 3.9 Step 8: Stage Files

**Purpose:** Stage all modified files for commit

**Actions:**
- Run `git add -A` to stage all changes
- Verify all expected files are staged
- Check for unexpected files

### 3.10 Step 9: Check IDE-Flagged Problems

**Purpose:** Address IDE-flagged issues before commit

**Actions:**
- Check for errors (blocking)
- Check for warnings (noted)
- Check for infos (noted)
- Fix errors before proceeding
- Document warnings/infos if not fixed

**Priority Order:**
1. Errors (must fix)
2. Warnings (should fix)
3. Infos (may fix)

### 3.11 Step 10: Run Validators

**Purpose:** Validate release before commit

**Validators:**
- `validate_branch_context.py` - Branch context validation
- `validate_changelog_format.py` - Changelog format validation
- `validate_version_bump.py` - Version bump validation
- `check_changelog_size.py` - Changelog size check (non-blocking)

**Expected Warnings:**
- Changelog ordering violations (known issue - date-ordered vs version-ordered)
- Task document warnings (expected for delimited tasks)

**Failure Handling:**
- Fix blocking validation errors
- Document expected warnings
- Proceed if only expected warnings present

### 3.12 Step 11: Commit Changes

**Purpose:** Create release commit

**Actions:**
- Create commit with release message
- Include version, epic, story, task in message
- Include release summary

**Commit Message Format:**
```
Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}
```

**Example:**
```
Release v0.6.1.2+1: Framework release process documentation

Epic: 6 | Story: 1 | Task: 2
```

### 3.13 Step 12: Create Git Tag

**Purpose:** Tag framework release for distribution

**Actions:**
- Create annotated tag: `v{version}`
- Include release message
- Include epic, story, task information

**Tag Format:**
- Project tag: `v{version}` (e.g., `v0.6.1.2+1`)
- Framework tag: `{framework-name}-v{version}` (e.g., `kanban-v2.1.0`)

**Tag Message Format:**
```
Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}
```

### 3.14 Step 13: Push to Remote

**Purpose:** Push release to remote repository

**Actions:**
- Push branch to origin
- Push tag to origin
- Verify push succeeded

**Commands:**
```bash
git push origin main
git push origin v{version}
```

**Note:** Do not push to main unless ready to deploy (triggers auto-deployment)

---

## 4. Framework-Specific Release Steps

### 4.1 Git Tagging for Frameworks

**Individual Framework Tags:**
```bash
# Tag individual framework release
git tag -a kanban-v2.1.0 -m "Release kanban v2.1.0"
git push origin kanban-v2.1.0
```

**Tag Format:**
- Individual framework: `{framework-name}-v{version}`
- Examples: `kanban-v2.1.0`, `workflow-mgt-v2.2.0`, `numbering-versioning-v2.0.0`

**Tag Message:**
- Include framework name and version
- Include release summary
- Reference project version if applicable

### 4.2 Framework Changelog Updates

**Package Changelog Entry:**
```markdown
## [2.1.0] - 2025-12-10

**Package Version:** 2.1.0
**Project Version:** 0.6.1.2+1
**Bump Type:** MINOR

### Added
- New integration guide for Workflow Management package
- New integration pattern examples

### Changed
- Migration process now supports intelligent semantic matching

**Criteria Reference:** MINOR Version Bump
- ✅ New feature: Semantic epic matching with similarity scoring
- ✅ Backward compatible: Existing migration modes still supported
```

### 4.3 Framework Distribution

**Distribution Methods:**
- Git submodules (checkout specific tags)
- Git subtrees (merge specific tags)
- Package managers (npm, pip, pub.dev - when published)
- GitHub Releases (tar.gz packages)

**Distribution Tags:**
- Framework-specific tags enable precise version pinning
- Projects can checkout specific framework versions
- Enables dependency management and updates

---

## 5. Release Validation

### 5.1 Pre-Release Validation

**Validation Checks:**
- [ ] Branch context validation passing
- [ ] Version format validation passing
- [ ] Changelog format validation passing
- [ ] Version bump validation passing
- [ ] IDE-flagged problems addressed
- [ ] All tests passing
- [ ] Documentation complete

### 5.2 Post-Release Validation

**Validation Checks:**
- [ ] Git tag created successfully
- [ ] Git tag pushed successfully
- [ ] Commit pushed successfully
- [ ] Changelog entries created
- [ ] Version numbers updated correctly
- [ ] Kanban docs updated correctly

### 5.3 Release Verification

**Verification Steps:**
1. Check Git tag exists: `git tag -l v{version}`
2. Check commit exists: `git log --oneline -1`
3. Check changelog entry: `grep -A 10 "\[{version}\]" CHANGELOG.md`
4. Check framework version: `grep "Version:" packages/frameworks/{framework}/README.md`
5. Check Kanban markers: `grep "v{version}" docs/project-management/kanban/`

---

## 6. Release Best Practices

### 6.1 Version Bump Guidelines

**MAJOR Version Bump:**
- Breaking changes that require migration
- Removing features or templates
- Significant structural changes
- Breaking policy changes

**MINOR Version Bump:**
- New features, templates, or guides
- Significant enhancements (backward compatible)
- New integration capabilities
- New optional features

**PATCH Version Bump:**
- Bug fixes and corrections
- Minor documentation updates
- Small improvements (no new functionality)
- Clarifications and corrections

### 6.2 Changelog Best Practices

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

### 6.3 Release Communication

**Release Announcements:**
- Document in changelog
- Update README with new version
- Update Kanban board with version marker
- Cross-reference to project version

**Breaking Changes:**
- Clearly document in changelog
- Provide migration guide
- Update compatibility matrix
- Notify dependent projects

---

## 7. Troubleshooting

### 7.1 Common Issues

**Issue: PVW doesn't detect changes**
- **Solution:** Check git diff, verify files are in framework package directory
- **Solution:** Manually trigger PVW if needed

**Issue: Version bump validation fails**
- **Solution:** Check version format, verify task alignment
- **Solution:** Review version bump logic in RW Step 2

**Issue: Changelog ordering violations**
- **Solution:** Known issue (date-ordered vs version-ordered)
- **Solution:** Document as expected warning, proceed with release

**Issue: Git tag already exists**
- **Solution:** Tag may have been created in previous release
- **Solution:** Verify tag points to correct commit, proceed with push

### 7.2 Release Rollback

**Rollback Process:**
1. Identify release to rollback
2. Create new release with rollback changes
3. Document rollback in changelog
4. Update version numbers
5. Create new Git tag
6. Push rollback release

**Rollback Considerations:**
- Rollback is a new release (not reverting)
- Version number increments (doesn't decrement)
- Changelog documents rollback reason
- Git tags remain (don't delete)

---

## 8. Related Documentation

### 8.1 Core Documents

- **Framework Versioning Strategy:** `framework-versioning-strategy.md`
  - Framework versioning schema and conventions
  - Version bump criteria and decision-making

- **Package Maintenance and Release:** `package-maintenance-and-release.md`
  - Complete package maintenance guide
  - PVW execution and integration

- **Package Version Workflow:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/package-version-workflow-agent-execution.md`
  - Complete PVW step-by-step guide
  - Agent execution patterns

### 8.2 Supporting Documents

- **Release Workflow Reference:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md`
  - Complete RW reference
  - All 13 steps documented

- **Package Versioning Criteria:** `package-versioning-criteria.md`
  - Detailed version bump criteria (guidance)
  - Agent decision-making process

- **Dual-Versioning Guide:** `dual-versioning-package-managers.md`
  - Managing project version + framework versions
  - Package manager compatibility

---

## 9. Summary

### 9.1 Key Principles

1. **Integrated Workflow:** Framework releases integrated into RW
2. **Automatic Versioning:** PVW automatically manages framework versions
3. **Dual Versioning:** Project and framework versions tracked independently
4. **Git Tagging:** Framework releases tagged for distribution
5. **Validation:** Comprehensive validation at each stage

### 9.2 Release Workflow

```
Make Changes → Run RW → PVW Detects → PVW Analyzes → 
PVW Determines Bumps → PVW Updates → PVW Validates → 
RW Continues → Changelog Created → Git Tagged → Pushed
```

### 9.3 Release Checklist

**Pre-Release:**
- [ ] Framework changes completed
- [ ] Tests passing
- [ ] Documentation updated
- [ ] Version bump determined
- [ ] Validation passing

**Release:**
- [ ] RW executed successfully
- [ ] PVW executed successfully
- [ ] Changelog entries created
- [ ] Git tag created
- [ ] Pushed to remote

**Post-Release:**
- [ ] Release verified
- [ ] Documentation updated
- [ ] Kanban board updated
- [ ] Distribution tags created

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S01:T02 - Create framework release processes

