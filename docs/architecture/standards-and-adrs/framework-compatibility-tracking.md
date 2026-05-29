---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework Compatibility Tracking

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-03  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 1 - Framework Version Management  
**Task:** E6:S01:T03 - Establish framework compatibility tracking  
**Related:** Framework Versioning Strategy, Framework Release Process, Framework Dependency Architecture

---

## Executive Summary

This document establishes the **comprehensive framework compatibility tracking system** for AI Dev Kit frameworks. The system tracks framework dependencies, version compatibility requirements, backward compatibility policies, and provides guidance for safe framework updates and migrations.

**Key Principles:**
- **Dependency Tracking:** Clear documentation of which frameworks depend on which
- **Version Compatibility:** Minimum version requirements for framework dependencies
- **Backward Compatibility:** Clear policies for MAJOR/MINOR/PATCH version bumps
- **Update Policies:** Guidance for safe framework updates
- **Migration Support:** Clear migration paths for breaking changes

---

## 1. Compatibility Matrix

### 1.1 Current Framework Dependencies

**Framework Dependency Graph:**
```
numbering & versioning (v2.0.0+)
  ├─ workflow mgt (v2.2.0+) [requires: numbering & versioning v2.0.0+]
  └─ kanban (v2.1.0+) [requires: numbering & versioning v2.0.0+, workflow mgt v2.0.0+]

doc-lifecycle (v1.0.0+) [standalone]
debug-path (v1.0.0+) [standalone]
```

**Detailed Compatibility Matrix:**

| Framework | Current Version | Dependencies | Minimum Dependency Versions |
|-----------|----------------|--------------|----------------------------|
| **numbering & versioning** | 2.0.0 | None (standalone) | — |
| **workflow mgt** | 2.2.0 | `numbering & versioning` | v2.0.0+ |
| **kanban** | 2.1.0 | `numbering & versioning`, `workflow mgt` | v2.0.0+, v2.0.0+ |
| **doc-lifecycle** | 1.0.0 | None (standalone) | — |
| **debug-path** | 1.0.0 | None (standalone) | — |

### 1.2 Dependency Requirements

**Numbering & Versioning Framework:**
- **Standalone:** No dependencies
- **Used By:** `workflow mgt`, `kanban`
- **Version Range:** v2.0.0+ (current: v2.0.0)

**Workflow Management Framework:**
- **Dependencies:** `numbering & versioning` v2.0.0+
- **Used By:** `kanban`
- **Version Range:** v2.0.0+ (current: v2.2.0)

**Kanban Framework:**
- **Dependencies:** `numbering & versioning` v2.0.0+, `workflow mgt` v2.0.0+
- **Used By:** None (top-level framework)
- **Version Range:** v2.0.0+ (current: v2.1.0)

**Document Lifecycle Framework:**
- **Standalone:** No dependencies
- **Used By:** None
- **Version Range:** v1.0.0+ (current: v1.0.0)

**Debug Path Framework:**
- **Standalone:** No dependencies
- **Used By:** None
- **Version Range:** v1.0.0+ (current: v1.0.0)

---

## 2. Version Compatibility Requirements

### 2.1 Minimum Version Requirements

**Framework Version Compatibility:**
- Frameworks specify minimum versions of their dependencies
- Projects must ensure all dependencies meet minimum requirements
- Compatibility validation checks version requirements

**Example Requirements:**
```yaml
# kanban framework requirements
dependencies:
  numbering-versioning: ">=2.0.0"
  workflow-mgmt: ">=2.0.0"
```

### 2.2 Version Range Support

**Supported Version Ranges:**
- **Exact Version:** `v2.0.0` (pinned to specific version)
- **Minimum Version:** `v2.0.0+` (compatible with v2.0.0 and above)
- **Version Range:** `v2.0.0 - v2.5.0` (compatible within range)
- **Latest Compatible:** `latest` (automatically uses latest compatible version)

**Version Range Examples:**
- `numbering & versioning` v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc.
- `workflow mgt` v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc.
- `kanban` v2.0.0+ → Compatible with v2.0.0, v2.1.0, v2.2.0, etc.

### 2.3 Compatibility Validation

**Validation Checks:**
- Check framework dependencies meet minimum version requirements
- Verify version ranges are compatible
- Validate backward compatibility for updates
- Check for breaking changes in dependency updates

**Validation Tools:**
- CLI tool: `ai-dev-kit check` (validates framework compatibility)
- Manual validation: Review compatibility matrix
- Automated validation: CI/CD compatibility checks

---

## 3. Backward Compatibility Policy

### 3.1 MAJOR Version Bumps (Breaking Changes)

**Policy:**
- **Breaking Changes:** MAJOR version bumps indicate breaking changes
- **Migration Required:** Breaking changes require migration guides
- **Compatibility:** Not backward compatible with previous MAJOR version
- **Update Policy:** Manual update required (not automatic)

**Examples:**
- `numbering & versioning` v2.0.0 → v3.0.0 (breaking change)
- `workflow mgt` v2.0.0 → v3.0.0 (breaking change)
- `kanban` v2.0.0 → v3.0.0 (breaking change)

**Breaking Change Indicators:**
- Removing or renaming core files/directories
- Changing required file locations or names
- Removing templates or core components
- Changing package directory structure significantly
- Breaking policy changes (removing requirements, changing mandatory vs. optional)
- Breaking API changes (for script packages)

**Migration Requirements:**
- Migration guide provided
- Breaking changes clearly documented
- Migration path specified
- Compatibility matrix updated

### 3.2 MINOR Version Bumps (New Features)

**Policy:**
- **Backward Compatible:** MINOR version bumps are backward compatible
- **New Features:** Add new features without breaking existing usage
- **Update Policy:** Automatic or semi-automatic update recommended
- **Compatibility:** Compatible with previous MINOR version

**Examples:**
- `numbering & versioning` v2.0.0 → v2.1.0 (new feature, backward compatible)
- `workflow mgt` v2.0.0 → v2.1.0 (new feature, backward compatible)
- `kanban` v2.0.0 → v2.1.0 (new feature, backward compatible)

**New Feature Indicators:**
- Adding new templates or guides
- Adding new integration patterns
- Adding new optional features or capabilities
- Expanding existing templates with new sections
- Adding new policy options (non-breaking)

**Update Recommendations:**
- Automatic update for MINOR versions
- Review changelog for new features
- Test new features if needed
- No migration required

### 3.3 PATCH Version Bumps (Bug Fixes)

**Policy:**
- **Backward Compatible:** PATCH version bumps are backward compatible
- **Bug Fixes:** Fix bugs without changing behavior
- **Update Policy:** Automatic update recommended
- **Compatibility:** Compatible with previous PATCH version

**Examples:**
- `numbering & versioning` v2.1.0 → v2.1.1 (bug fix, backward compatible)
- `workflow mgt` v2.1.0 → v2.1.1 (bug fix, backward compatible)
- `kanban` v2.1.0 → v2.1.1 (bug fix, backward compatible)

**Bug Fix Indicators:**
- Fixing broken links or references
- Correcting incorrect examples or code snippets
- Fixing formatting or rendering issues
- Correcting typos or grammatical errors
- Clarifying ambiguous language

**Update Recommendations:**
- Automatic update for PATCH versions
- No testing required (bug fixes only)
- No migration required

---

## 4. Dependency Management

### 4.1 Version Pinning

**Pinning Strategies:**
- **Exact Pin:** Pin to specific version (e.g., `v2.0.0`)
- **Minimum Pin:** Pin to minimum version (e.g., `v2.0.0+`)
- **Range Pin:** Pin to version range (e.g., `v2.0.0 - v2.5.0`)
- **Latest Pin:** Use latest compatible version (e.g., `latest`)

**Pinning Methods:**
- **Git Submodules:** Checkout specific tags
- **Package Managers:** Specify version ranges in `package.json` or `requirements.txt`
- **CLI Tool:** Install specific versions with `--version` flag
- **Configuration:** Pin versions in `.ai-dev-kit.yaml`

**Example Pinning:**
```yaml
# .ai-dev-kit.yaml
frameworks:
  numbering-versioning:
    version: "2.0.0"  # Exact pin
    pin: true  # Prevent auto-updates
  workflow-mgmt:
    version: "2.0.0+"  # Minimum pin
    pin: false  # Allow auto-updates
```

### 4.2 Version Updates

**Update Policies:**
- **Automatic Updates:** PATCH and MINOR versions (if not pinned)
- **Semi-Automatic Updates:** MINOR versions with notification
- **Manual Updates:** MAJOR versions (breaking changes)

**Update Methods:**
- **Git Submodules:** `git submodule update --remote`
- **Package Managers:** `npm update` or `pip install --upgrade`
- **CLI Tool:** `ai-dev-kit update <framework>`
- **Manual:** Checkout new tags or install new versions

**Update Notifications:**
- Changelog entries for framework updates
- Version compatibility warnings
- Breaking change notifications
- Migration guide links

### 4.3 Dependency Resolution

**Resolution Strategy:**
1. Check minimum version requirements
2. Resolve version conflicts
3. Select compatible versions
4. Validate compatibility
5. Install or update frameworks

**Conflict Resolution:**
- If frameworks require different versions of same dependency, use highest compatible version
- If versions are incompatible, report conflict and require manual resolution
- Provide guidance for resolving conflicts

---

## 5. Compatibility Documentation

### 5.1 Framework README Documentation

**Required Compatibility Information:**
- Dependencies list with minimum versions
- Compatibility matrix
- Backward compatibility policy
- Update recommendations

**Example README Section:**
```markdown
## Dependencies

**Required:**
- `numbering & versioning` v2.0.0+
- `workflow mgt` v2.0.0+

**Compatibility:**
- Backward compatible with v2.0.0+
- MAJOR version bumps may require migration
- See [Compatibility Tracking](../../../docs/architecture/standards-and-adrs/framework-compatibility-tracking.md) for details
```

### 5.2 Package Changelog Documentation

**Required Compatibility Information:**
- Breaking changes clearly marked
- Migration guides for MAJOR bumps
- Dependency version updates
- Compatibility notes

**Example Changelog Entry:**
```markdown
## [3.0.0] - 2025-12-15

**BREAKING CHANGE:** Requires `numbering & versioning` v3.0.0+

### Changed
- Updated to use `numbering & versioning` v3.0.0 API
- Migration guide: [Migration Guide](MIGRATION_GUIDE.md)
```

### 5.3 Compatibility Matrix Updates

**Update Requirements:**
- Update compatibility matrix when dependencies change
- Document breaking changes in compatibility matrix
- Update version ranges when new versions released
- Maintain historical compatibility information

---

## 6. Compatibility Validation

### 6.1 Pre-Update Validation

**Validation Checks:**
- Check current framework versions
- Verify minimum version requirements
- Check for breaking changes
- Validate dependency compatibility
- Review migration requirements

**Validation Tools:**
- CLI tool: `ai-dev-kit check` (validates compatibility)
- Manual validation: Review compatibility matrix
- Automated validation: CI/CD compatibility checks

### 6.2 Post-Update Validation

**Validation Checks:**
- Verify frameworks updated correctly
- Check version compatibility
- Validate functionality
- Test integration points
- Verify migration completed (if applicable)

**Validation Tools:**
- Framework-specific tests
- Integration tests
- Compatibility validation scripts
- Manual testing

### 6.3 Continuous Compatibility Monitoring

**Monitoring Strategy:**
- Track framework versions across projects
- Monitor compatibility matrix updates
- Alert on breaking changes
- Provide update recommendations
- Maintain compatibility history

**Monitoring Tools:**
- Version tracking in projects
- Compatibility matrix updates
- Changelog monitoring
- Automated compatibility checks

---

## 7. Update Policies

### 7.1 Automatic Updates

**Policy:**
- **PATCH Versions:** Automatic updates recommended
- **MINOR Versions:** Automatic or semi-automatic updates recommended
- **MAJOR Versions:** Manual updates required (breaking changes)

**Automatic Update Configuration:**
```yaml
# .ai-dev-kit.yaml
update_policy:
  patch: auto  # Automatic PATCH updates
  minor: notify  # Notify for MINOR updates
  major: manual  # Manual MAJOR updates
```

### 7.2 Semi-Automatic Updates

**Policy:**
- **MINOR Versions:** Notify user of available updates
- **User Decision:** User decides whether to update
- **Update Process:** User triggers update when ready

**Semi-Automatic Update Flow:**
1. Framework releases MINOR version
2. User notified of available update
3. User reviews changelog
4. User decides to update or defer
5. Update executed if user approves

### 7.3 Manual Updates

**Policy:**
- **MAJOR Versions:** Manual updates required
- **Breaking Changes:** Review migration guide before updating
- **Testing:** Test thoroughly after updating
- **Migration:** Follow migration guide if provided

**Manual Update Process:**
1. Review changelog for breaking changes
2. Review migration guide
3. Plan migration strategy
4. Execute update
5. Test functionality
6. Complete migration if needed

---

## 8. Migration Support

### 8.1 Migration Guides

**Migration Guide Requirements:**
- Clear description of breaking changes
- Step-by-step migration instructions
- Before/after examples
- Common issues and solutions
- Rollback procedures

**Migration Guide Location:**
- Framework `MIGRATION_GUIDE.md`
- Package changelog entries
- Compatibility tracking document
- Framework README

### 8.2 Migration Tools

**Migration Support:**
- CLI tool migration utilities
- Automated migration scripts (when possible)
- Manual migration instructions
- Migration validation tools

**Migration Process:**
1. Review migration guide
2. Backup current installation
3. Execute migration steps
4. Validate migration
5. Test functionality
6. Rollback if needed

### 8.3 Rollback Procedures

**Rollback Support:**
- Git submodules: Checkout previous tag
- Package managers: Install previous version
- CLI tool: Install previous version
- Manual: Restore from backup

**Rollback Process:**
1. Identify previous compatible version
2. Restore previous version
3. Validate functionality
4. Document rollback reason

---

## 9. Compatibility Best Practices

### 9.1 Framework Development

**Best Practices:**
- Maintain backward compatibility for MINOR/PATCH versions
- Clearly document breaking changes for MAJOR versions
- Provide migration guides for breaking changes
- Update compatibility matrix when dependencies change
- Test compatibility before releasing

### 9.2 Framework Consumption

**Best Practices:**
- Pin framework versions in production
- Test updates in development first
- Review changelog before updating
- Follow migration guides for MAJOR updates
- Monitor compatibility matrix updates

### 9.3 Compatibility Maintenance

**Best Practices:**
- Keep compatibility matrix up to date
- Document breaking changes clearly
- Provide migration guides promptly
- Monitor framework versions across projects
- Maintain compatibility history

---

## 10. Related Documentation

### 10.1 Core Documents

- **Framework Versioning Strategy:** `framework-versioning-strategy.md`
  - Framework versioning schema and conventions
  - Version bump criteria and decision-making

- **Framework Release Process:** `framework-release-process.md`
  - Complete framework release workflow
  - Release validation and procedures

- **Framework Dependency Architecture:** `framework-dependency-architecture.md`
  - Framework installation and dependency management
  - Dependency management strategies

### 10.2 Supporting Documents

- **Package Maintenance and Release:** `package-maintenance-and-release.md`
  - Complete package maintenance guide
  - PVW execution and integration

- **Package Versioning Criteria:** `package-versioning-criteria.md`
  - Detailed version bump criteria (guidance)
  - Agent decision-making process

---

## 11. Summary

### 11.1 Key Principles

1. **Dependency Tracking:** Clear documentation of framework dependencies
2. **Version Compatibility:** Minimum version requirements for dependencies
3. **Backward Compatibility:** Clear policies for MAJOR/MINOR/PATCH version bumps
4. **Update Policies:** Guidance for safe framework updates
5. **Migration Support:** Clear migration paths for breaking changes

### 11.2 Compatibility Matrix

**Current Framework Dependencies:**
- `numbering & versioning`: Standalone (v2.0.0+)
- `workflow mgt`: Requires `numbering & versioning` v2.0.0+ (v2.2.0+)
- `kanban`: Requires `numbering & versioning` v2.0.0+, `workflow mgt` v2.0.0+ (v2.1.0+)
- `doc-lifecycle`: Standalone (v1.0.0+)
- `debug-path`: Standalone (v1.0.0+)

### 11.3 Update Policies

- **PATCH Versions:** Automatic updates recommended
- **MINOR Versions:** Automatic or semi-automatic updates recommended
- **MAJOR Versions:** Manual updates required (breaking changes)

---

**Last Updated:** 2026-01-03  
**Document Version:** 1.0.0  
**Related Task:** E6:S01:T03 - Establish framework compatibility tracking

