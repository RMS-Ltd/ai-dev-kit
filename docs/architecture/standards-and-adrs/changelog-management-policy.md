---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T21:20:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: changelog-management-policy
  type: process
  domain:
    primary: changelog
    secondary: ["documentation", "maintenance"]
  audience: ["agents", "developers", "maintainers"]
  applies_to:
    documents:
      - "CHANGELOG.md"
      - "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md"
      - "docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md"
    activities:
      - "changelog-management-workflow"
      - "release-workflow"
  key_rules:
    - id: CHANGELOG-MGMT-R1
      summary: Changelog must follow "Keep a Changelog" format with newest entries first
      must_level: MUST
      when_applies: ["release-workflow", "changelog-management-workflow"]
      enforcement:
        owner: ["agents"]
        mechanisms: ["automated-validation", "pre-commit-checks"]
      validation_hints: ["check-format", "validate-ordering", "check-version-headers"]
    - id: CHANGELOG-MGMT-R2
      summary: No duplicate version entries allowed
      must_level: MUST
      when_applies: ["changelog-management-workflow", "release-workflow"]
      enforcement:
        owner: ["agents"]
        mechanisms: ["automated-detection", "cmw-removal"]
      validation_hints: ["detect-duplicates", "remove-duplicates"]
    - id: CHANGELOG-MGMT-R3
      summary: All entries must have valid version headers
      must_level: MUST
      when_applies: ["release-workflow", "changelog-management-workflow"]
      enforcement:
        owner: ["agents"]
        mechanisms: ["automated-validation"]
      validation_hints: ["validate-version-format", "check-header-presence"]
  triggers:
    - id: CHANGELOG-MGMT-T1
      event: changelog-format-violation
      required_checks: ["format", "ordering", "duplicates"]
    - id: CHANGELOG-MGMT-T2
      event: duplicate-detected
      required_checks: ["version-comparison", "content-similarity"]
  integration_points:
    - id: CHANGELOG-MGMT-I1
      component: release-workflow
      step: step-9
      behavior: validate-changelog-format-and-ordering
    - id: CHANGELOG-MGMT-I2
      component: changelog-management-workflow
      step: step-2
      behavior: validate-and-fix-format-ordering-duplicates
  related_policies:
    - "changelog-archival-policy.md"
---

# Changelog Management Policy

**Status:** Active  
**Owner:** AI Dev Kit / Framework Team  
**Last Updated:** 2025-12-21  
**Related Work:** Epic 6, Story 6, Task 11 - Changelog Management and Archival Workflow (FR-025)  
**Version:** 1.0.0

**Based on Framework:** This policy is a dev-kit specialisation of the Changelog Management Workflow (CMW) patterns defined in the Workflow Management framework. For the canonical workflow definition and agent execution guide, see:
- `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- `packages/frameworks/workflow mgt/scripts/changelog/README.md`

---

## 1. Purpose

This policy defines standards and procedures for managing the project changelog to ensure consistency, accuracy, and maintainability. The policy establishes format requirements, validation rules, and maintenance procedures to prevent common changelog issues (ordering violations, duplicates, format inconsistencies).

**Goals:**
- Maintain "Keep a Changelog" format compliance
- Prevent ordering violations (newest first requirement)
- Prevent duplicate version entries
- Ensure consistent format across all entries
- Support automated validation and maintenance

---

## 2. Format Requirements

### 2.1 "Keep a Changelog" Format

The changelog **MUST** follow the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format:

**Header:**
```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
```

**Version Entry Format:**
```markdown
## [version] - DD-MM-YY

[Summary or description]

### Added

- [Change description]
- [Change description]

### Changed

- [Change description]

### Fixed

- [Change description]

**Related:** [Link to detailed changelog](path/to/detailed/changelog.md)

---
```

### 2.2 Version Header Format

**Required Format:** `## [RC.EPIC.STORY.TASK+BUILD] - DD-MM-YY`

**Components:**
- `RC`: Release Candidate (0 = development, 1+ = release candidate)
- `EPIC`: Epic number (1-23 canonical, 24+ project-specific)
- `STORY`: Story number (3-digit padding)
- `TASK`: Task number (2-digit padding)
- `BUILD`: Build number (increments per release within task)
- `DD-MM-YY`: Short date format (day-month-year, 2-digit year)

**Examples:**
- `## [0.6.6.11+0] - 21-12-25` - Development, Epic 6, Story 6, Task 11, Build 0, Dec 21, 2025
- `## [1.2.3.4+5] - 15-01-26` - Release Candidate 1, Epic 2, Story 3, Task 4, Build 5, Jan 15, 2026

### 2.3 Date Format

**Format:** `DD-MM-YY` (short date format for merge-to-main)

**Rationale:**
- Compact format for main changelog entries
- Detailed changelogs use full timestamp format (`YYYY-MM-DD HH:MM:SS UTC`)
- Maintains readability while saving space

---

## 3. Ordering Requirements

### 3.1 Newest First Rule

**MANDATORY:** Entries **MUST** be ordered newest first (most recent version at top)

**Rationale:**
- "Keep a Changelog" standard requires newest first
- Users typically care about recent changes
- Enables quick scanning of latest releases

**Validation:**
- Compare version numbers (canonical ordering by version, not timestamp)
- Ensure higher versions appear before lower versions
- Detect and report ordering violations

### 3.2 Canonical Version Ordering

**Ordering Logic:**
1. Compare RC component (higher RC = newer)
2. If RC equal, compare EPIC component (higher EPIC = newer)
3. If EPIC equal, compare STORY component (higher STORY = newer)
4. If STORY equal, compare TASK component (higher TASK = newer)
5. If TASK equal, compare BUILD component (higher BUILD = newer)

**Examples:**
- `0.6.6.11+5` appears before `0.6.6.11+4` (higher BUILD = newer)
- `0.6.7.1+1` appears before `0.6.6.11+99` (higher STORY = newer)
- `1.6.6.11+1` appears before `0.6.6.11+99` (higher RC = newer)

**Special Cases:**
- Epic 9 entries (e.g., `0.9.21.3+2`) appear before Epic 6 entries (e.g., `0.6.6.7+5`)
- Epic 4 entries (e.g., `0.4.13.6+5`) appear after Epic 9 entries but before Epic 6 entries if STORY number is lower

### 3.3 Entry Separation

**Separator:** Each entry ends with `---` (horizontal rule)

**Purpose:**
- Clear visual separation between entries
- Facilitates parsing and editing
- Maintains consistent formatting

---

## 4. Duplicate Prevention

### 4.1 No Duplicate Versions

**MANDATORY:** No duplicate version entries allowed

**Definition:** Two or more entries with identical version numbers in the same changelog file

**Detection:**
- Parse all version headers
- Compare version strings (exact match)
- Report duplicates with line numbers

**Removal:**
- Keep first occurrence (topmost entry)
- Remove subsequent duplicate entries
- Validate remaining entries

### 4.2 Duplicate Detection Logic

**Comparison:**
- Exact version string match: `[0.6.6.11+0]` = `[0.6.6.11+0]`
- Case-insensitive comparison not applicable (versions are numeric)
- Ignore whitespace differences in version header (normalize before comparison)

**Reporting:**
- List all duplicate versions found
- Report line numbers for each duplicate
- Suggest which entry to keep (first occurrence)

---

## 5. Validation Requirements

### 5.1 Format Validation

**Required Checks:**
- Version header format compliance (`## [version] - DD-MM-YY`)
- Date format compliance (`DD-MM-YY`)
- Section headers (Added/Changed/Fixed) use proper markdown
- Separator presence (`---` between entries)
- Link format compliance (if present)

**Validation Tools:**
- `validate_changelog_format.py` - Automated format validation
- CMW Step 2 - Format validation during maintenance
- RW Step 9 - Format validation during release

### 5.2 Ordering Validation

**Required Checks:**
- Entries ordered newest first (canonical version ordering)
- No ordering violations detected
- All entries have valid version numbers for comparison

**Validation Logic:**
- Parse all version headers
- Extract version components (RC, EPIC, STORY, TASK, BUILD)
- Compare adjacent entries (entry N should be >= entry N+1 in version order)
- Report violations with line numbers

### 5.3 Duplicate Validation

**Required Checks:**
- No duplicate version entries
- All versions unique within file
- No orphaned entries (version header without content)

**Validation Logic:**
- Parse all version headers
- Build set of version strings
- Detect duplicates (versions appearing multiple times)
- Report duplicates with line numbers

---

## 6. Maintenance Procedures

### 6.1 Automated Maintenance (CMW)

**Changelog Management Workflow (CMW)** performs automated maintenance:

**Step 2: Validate Format and Ordering**
- Validate changelog format compliance
- Detect ordering violations
- Detect duplicate entries
- Report issues

**Step 3: Fix Issues**
- Fix ordering violations (reorder entries)
- Remove duplicate entries (keep first occurrence)
- Fix format issues (if possible)

**Step 4: Validate Results**
- Re-validate after fixes
- Ensure all issues resolved
- Report summary of fixes

### 6.2 Manual Maintenance

**When to perform:**
- After detecting violations via validators
- Before committing changelog changes
- During periodic reviews

**Steps:**
1. Run validators to identify issues
2. Fix ordering violations (move entries to correct positions)
3. Remove duplicate entries (keep first occurrence, remove others)
4. Fix format issues (correct headers, dates, separators)
5. Re-validate to confirm fixes
6. Commit changes

---

## 7. Integration with Release Workflow (RW)

### 7.1 RW Step 4: Update Main Changelog

**Action:** Add new entry to top of changelog

**Requirements:**
- New entry added at top (newest first)
- Entry follows format requirements
- Entry has valid version header
- Entry separated with `---`

**Validation:**
- Format validation after adding entry
- Ordering validation (new entry should be first)
- No duplicate detection (new version should be unique)

### 7.2 RW Step 9: Run Validators

**Action:** Run changelog format validation

**Validators:**
- `validate_changelog_format.py` - Format, ordering, duplicate validation

**Requirements:**
- Format compliance checked
- Ordering compliance checked
- Duplicate detection performed

**On Failure:**
- Report violations
- Suggest fixes
- Non-blocking (warnings only, RW continues)

### 7.3 Pre-Commit Validation

**Pre-commit hook:**
- Validate changelog format before commit
- Detect ordering violations
- Detect duplicate entries
- Warn if issues found (informational, non-blocking)

---

## 8. Common Issues and Solutions

### 8.1 Ordering Violations

**Issue:** Entries not ordered newest first

**Example:** `0.6.6.7+5` appears before `0.9.21.3+2`

**Solution:**
- Reorder entries (move newer entries to top)
- Use canonical version ordering logic
- Validate after reordering

### 8.2 Duplicate Entries

**Issue:** Same version appears multiple times

**Example:** `0.6.6.11+0` appears twice in changelog

**Solution:**
- Keep first occurrence (topmost entry)
- Remove subsequent duplicates
- Validate after removal

### 8.3 Format Inconsistencies

**Issue:** Entry format doesn't match requirements

**Examples:**
- Missing date: `## [0.6.6.11+0]`
- Wrong date format: `## [0.6.6.11+0] - 2025-12-21`
- Missing separator: No `---` between entries

**Solution:**
- Fix format to match requirements
- Validate after fixes

### 8.4 Orphaned Entries

**Issue:** Content without version header or version header without content

**Solution:**
- Add missing version header or remove orphaned content
- Ensure all entries have complete structure

---

## 9. Best Practices

### 9.1 Entry Writing

**Guidelines:**
- Write clear, concise change descriptions
- Use proper markdown formatting
- Include links to detailed changelogs when available
- Group related changes under appropriate sections (Added/Changed/Fixed)

### 9.2 Entry Maintenance

**Guidelines:**
- Keep entries concise (main changelog should be scannable)
- Use detailed changelogs for comprehensive documentation
- Update entries if errors discovered (but preserve original intent)

### 9.3 Validation Frequency

**Recommended:**
- Validate during RW (automatic)
- Validate during CMW (automatic)
- Validate before commits (pre-commit hook)
- Periodic manual validation (monthly reviews)

---

## 10. Compliance and Enforcement

### 10.1 Automated Enforcement

**Validation Tools:**
- `validate_changelog_format.py` - Automated validation
- CMW - Automated maintenance and fixes
- Pre-commit hooks - Pre-commit validation

**RW Integration:**
- RW Step 9 validates changelog format
- RW Step 4 ensures new entries follow format
- Non-blocking warnings (informational)

### 10.2 Manual Compliance

**Developer Responsibility:**
- Follow format requirements when adding entries
- Run validators before committing
- Fix violations when detected

**Maintainer Responsibility:**
- Monitor changelog compliance
- Run CMW for maintenance
- Review and approve changelog changes

---

## 11. Related Documentation

**Related Policies:**
- `changelog-archival-policy.md` - Archival criteria and procedures
- `dev-kit-versioning-policy.md` - Versioning schema and policies

**Related Workflows:**
- Changelog Management Workflow (CMW) - Automated maintenance
- Release Workflow (RW) - Integration point for validation

**Related Documentation:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/changelog-management-workflow-agent-execution.md` - CMW execution guide
- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) - Format specification

---

## 12. Version History

- **v1.0.0** (2025-12-21): Initial policy definition (E6:S06:T11 - FR-025)

---

**Policy Owner:** AI Dev Kit / Framework Team  
**Last Reviewed:** 2025-12-21  
**Next Review:** As needed (policy updates)

