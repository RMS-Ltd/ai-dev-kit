---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.6.1.5+1

**Release Date:** 2026-01-03 16:50:00 UTC  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T05 - Create framework version tagging strategy  
**Version:** v0.6.1.5+1

---

## Summary

Framework version tagging strategy created. Comprehensive Git tagging strategy established with tag naming conventions, tag message formats, tagging workflows, and distribution mechanisms. Story 1 (Framework Version Management) is now complete.

---

## Added

### Framework Version Tagging Strategy Document

- **New Document:** `docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md`
  - Comprehensive Git tagging strategy for framework releases
  - Tag naming conventions (project, framework, monorepo tags)
  - Tag message formats with required and optional fields
  - Tagging workflow (automatic and manual)
  - Tag distribution methods (Git submodules, subtrees, package managers, GitHub Releases)
  - Tag management and best practices
  - Tag examples and usage patterns

**Key Sections:**
1. **Tag Naming Conventions** - Project tags (`v{version}`), framework tags (`{framework-name}-v{version}`), monorepo tags (`ai-dev-kit-v{version}`)
2. **Tag Message Format** - Project, framework, and monorepo tag message formats with required fields
3. **Tagging Workflow** - Automatic tagging (RW integration) and manual tagging processes
4. **Tag Distribution** - Git submodule, subtree, package manager, and GitHub Releases distribution
5. **Tag Management** - Tag lifecycle, organization, maintenance, and verification
6. **Tag Best Practices** - Tag creation, messages, distribution documentation
7. **Tag Examples** - Project, framework, and monorepo tag examples with usage patterns

---

## Technical Details

### Tag Naming Conventions

**Project Tags:**
- Format: `v{version}` (e.g., `v0.6.1.5+1`)
- Version Schema: `RC.EPIC.STORY.TASK+BUILD`
- Created automatically during RW Step 12

**Framework Tags:**
- Format: `{framework-name}-v{version}` (e.g., `kanban-v2.1.0`)
- Version Schema: `MAJOR.MINOR.PATCH` (SemVer)
- Framework name normalization (spaces → hyphens, lowercase)
- Created during framework release (RW Step 12.5 or manual)

**Monorepo Tags:**
- Format: `ai-dev-kit-v{version}` (e.g., `ai-dev-kit-v2.0.0`)
- Version Schema: `MAJOR.MINOR.PATCH` (SemVer)
- Created manually for major monorepo releases

### Tag Message Formats

**Project Tag Messages:**
```
Release v{version}: {summary}

Epic: {epic} | Story: {story} | Task: {task}
```

**Framework Tag Messages:**
```
Release {framework-name} v{version}: {summary}

Package Version: {version}
Project Version: {project-version}
Bump Type: {MAJOR|MINOR|PATCH}
```

**Monorepo Tag Messages:**
```
Release ai-dev-kit v{version}: {summary}

Frameworks:
- {framework-1}: v{version-1}
- {framework-2}: v{version-2}
...
```

### Tagging Workflow

**Automatic Tagging:**
- Project tags: Created during RW Step 12
- Framework tags: Created during framework release (RW Step 12.5 or manual)
- Integrated with Release Workflow

**Manual Tagging:**
- For framework releases outside of RW
- For retroactive tagging
- For monorepo releases

### Tag Distribution

**Distribution Methods:**
- Git submodules: Checkout specific framework tags
- Git subtrees: Merge specific framework tags
- Package managers: Use tags for version resolution (when published)
- GitHub Releases: Use tags for release identification

---

## Files Modified

1. `docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md` (new)
   - Comprehensive framework version tagging strategy document

2. `docs/project-management/kanban/epics/Epic-6/Story-001-framework-version-management.md`
   - Task checklist updated: T05 marked as COMPLETE
   - Task details updated with completion status and deliverables
   - Story status changed from IN PROGRESS to COMPLETE

3. `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
   - Story checklist updated: T05 marked as COMPLETE, Story 1 marked as COMPLETE
   - "Stories (Initial)" section updated: T05 marked as COMPLETE, Story 1 marked as COMPLETE

4. `docs/project-management/kanban/kanban-board.md`
   - Epic 6 section updated: T05 marked as COMPLETE, Story 1 marked as COMPLETE

5. `src/fynd_deals/version.py`
   - Version bumped to v0.6.1.5+1

---

## Impact

**Framework Management:**
- Clear Git tagging strategy for all framework releases
- Standardized tag naming conventions across all frameworks
- Comprehensive tag message formats for traceability
- Multiple distribution methods supported via tags

**Documentation:**
- Complete reference for framework version tagging
- Clear tag naming conventions and message formats
- Tagging workflow integration with RW
- Tag distribution examples and usage patterns

**Development Workflow:**
- Framework releases tagged systematically
- Clear tagging workflow (automatic and manual)
- Better distribution support via tags
- Improved framework maintenance practices

**Story Completion:**
- E6:S01 (Framework Version Management) is now COMPLETE
- All 5 tasks completed:
  - T01: Framework versioning strategy
  - T02: Framework release processes
  - T03: Framework compatibility tracking
  - T04: Framework dependency architecture
  - T05: Framework version tagging strategy

---

## Related Work

- **E6:S01:T01** - Define framework versioning strategy (completed at v0.6.1.1+1)
- **E6:S01:T02** - Create framework release processes (completed at v0.6.1.2+1)
- **E6:S01:T03** - Establish framework compatibility tracking (completed at v0.6.1.3+1)
- **E6:S01:T04** - Design framework dependency architecture (completed at v0.6.1.1+2)
- **E6:S01** - Framework Version Management (COMPLETE at v0.6.1.5+1)

---

## References

- Framework Version Tagging Strategy: `docs/architecture/standards-and-adrs/framework-version-tagging-strategy.md`
- Framework Versioning Strategy: `docs/architecture/standards-and-adrs/framework-versioning-strategy.md`
- Framework Release Process: `docs/architecture/standards-and-adrs/framework-release-process.md`
- Framework Compatibility Tracking: `docs/architecture/standards-and-adrs/framework-compatibility-tracking.md`
- Framework Dependency Architecture: `docs/architecture/standards-and-adrs/framework-dependency-architecture.md`

