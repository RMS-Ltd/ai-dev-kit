---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T21:15:00Z
expires_at: null
housekeeping_policy: keep
policy_salience:
  policy_id: changelog-archival-policy
  type: process
  domain:
    primary: changelog
    secondary: ["maintenance", "documentation"]
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
    - id: CHANGELOG-ARCH-R1
      summary: Main changelog must not exceed 1,000 lines
      must_level: SHOULD
      when_applies: ["changelog-management-workflow", "release-workflow-step-9.5"]
      enforcement:
        owner: ["agents", "maintainers"]
        mechanisms: ["automated-cmw", "rw-integration"]
      validation_hints: ["check-line-count", "trigger-archival"]
    - id: CHANGELOG-ARCH-R2
      summary: Entries older than 2 months should be archived
      must_level: SHOULD
      when_applies: ["changelog-management-workflow"]
      enforcement:
        owner: ["agents"]
        mechanisms: ["automated-cmw"]
      validation_hints: ["parse-version-dates", "calculate-age"]
    - id: CHANGELOG-ARCH-R3
      summary: Keep last 100 releases in main changelog
      must_level: SHOULD
      when_applies: ["changelog-management-workflow"]
      enforcement:
        owner: ["agents"]
        mechanisms: ["automated-cmw"]
      validation_hints: ["count-version-entries", "archive-oldest"]
  triggers:
    - id: CHANGELOG-ARCH-T1
      event: changelog-exceeds-threshold
      required_checks: ["line-count", "version-count"]
  integration_points:
    - id: CHANGELOG-ARCH-I1
      component: release-workflow
      step: step-9.5
      behavior: check-changelog-size-and-trigger-cmw
  related_policies:
    - "changelog-management-policy.md"
---

# Changelog Archival Policy

**Status:** Active  
**Owner:** AI Dev Kit / Framework Team  
**Last Updated:** 2025-12-21  
**Related Work:** Epic 6, Story 6, Task 11 - Changelog Management and Archival Workflow (FR-025)  
**Version:** 1.0.0

**Based on Framework:** This policy is a dev-kit specialisation of the Changelog Management Workflow (CMW) archival patterns defined in the Workflow Management framework. For the canonical workflow definition and archival implementation, see:
- `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- `packages/frameworks/workflow mgt/scripts/changelog/archive_entries.py`

---

## 1. Purpose

This policy defines criteria and procedures for archiving changelog entries to maintain a sustainable, navigable changelog as the project grows. The policy ensures that the main `CHANGELOG.md` remains manageable while preserving complete historical records in an archive file.

**Goals:**
- Keep main changelog under 1,000 lines for optimal usability
- Preserve complete historical changelog entries in archive
- Maintain "Keep a Changelog" format compliance
- Enable efficient navigation of recent vs. historical changes
- Support automated archival via Changelog Management Workflow (CMW)

---

## 2. Archive Structure

### 2.1 File Organization

**Main Changelog (Rolling Landing Page):**
- Location: `CHANGELOG.md` (project root)
- Purpose: Human-friendly landing page for **current work**:
  - `Unreleased` section (pending changes)
  - The **most recent concrete release**
- Default Pattern (frameworks): Rolling window of recent releases
- **AI Dev Kit Pattern:** "Latest-only" – keep only the newest release entry  
  (Unreleased + latest release), archive all older releases

**Archive File:**
- Location: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_ARCHIVE.md`
- Purpose: Historical entries, archived releases
- Format: Same "Keep a Changelog" format as main changelog
- Content: Entries moved from main changelog based on archival criteria

**Detailed Changelogs:**
- Location: `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`
- Purpose: Granular release documentation (unchanged by archival)
- Status: Individual files remain in archive directory, not affected by archival process

### 2.2 Archive File Format

The archive file follows the same format as the main changelog:

```markdown
# Changelog Archive

This file contains historical changelog entries archived from `CHANGELOG.md`.

For recent changes, see [CHANGELOG.md](../../CHANGELOG.md).

---

## [version] - DD-MM-YY

[archived entry content]
```

---

## 3. Archival Criteria

The policy uses a **hybrid approach** combining multiple criteria for flexible and intelligent archival decisions.

### 3.1 Mode A: Hybrid (Size/Time/Version-Based)

This is the **framework default mode** for adopters who want a rolling
history of recent releases in `CHANGELOG.md`.

**Primary Criteria (Size-Based)**

- **Trigger:** When `CHANGELOG.md` exceeds **1,000 lines**
- **Action:** Archive oldest entries until changelog is reduced to **750 lines**
  (25% buffer below threshold)

**Rationale:**
- Prevents changelog from becoming unmanageable
- Provides clear threshold for automated triggering
- Maintains buffer to avoid frequent archival operations

**Secondary Criteria (Time-Based)**

- **Trigger:** Entries older than **2 months** from current date
- **Action:** Archive entries that are older than 2 months

**Rationale:**
- Recent changes (last 2 months) are most relevant to users
- Keeps main changelog focused on very recent development
- Historical changes (older than 2 months) are still accessible in archive
- Prevents changelog from growing too large before archival triggers

**Tertiary Criteria (Version Count)**

- **Trigger:** More than **100 version entries** in main changelog
- **Action:** Keep last 100 releases, archive older entries

**Rationale:**
- Provides consistent version-based archival boundary
- Ensures recent releases (last ~100) remain in main changelog
- Prevents version count from growing indefinitely

**Hybrid Logic**

**Archival Decision:** Archive entries if **ANY** of the following conditions are met:
1. Main changelog exceeds 1,000 lines (size-based)
2. Entry is older than 2 months (time-based)
3. More than 100 version entries exist (version-based)

**Priority Order:**
1. **Size-based** takes precedence if threshold exceeded (immediate archival required)
2. **Time-based** and **Version-based** applied in parallel for ongoing maintenance

### 3.2 Mode B: Latest-Only (AI Dev Kit Pattern)

This mode is optimized for projects (like **AI Dev Kit**) that maintain:

- **Immutable per-release changelog files** (`CHANGELOG_v{version}.md`)
- Strong versioning and forensic traceability elsewhere

**Definition:**

- `CHANGELOG.md` contains:
  - `Unreleased`
  - The **single most recent concrete release** (newest version entry)
- **All older release entries are archived** to the archive file.

**Archival Decision (latest_only mode):**

1. Keep `entries[0]` (newest release) in `CHANGELOG.md`
2. Archive all other concrete release entries (`entries[1:]`)

**Rationale:**

- Reduces maintenance overhead and validator friction for very long-lived projects
- Keeps the main file small and easy to scan
- Delegates full history to:
  - `CHANGELOG_ARCHIVE.md` (aggregated history)
  - Per-release `CHANGELOG_v{version}.md` files (detailed history)

---

## 4. Archival Process

### 4.1 Automated Archival (CMW)

The Changelog Management Workflow (CMW) performs automated archival:

**Step 1: Analysis**
- Analyze current changelog state (line count, entry count, entry ages)
- Identify entries eligible for archival based on criteria

**Step 2: Selection**
- Select entries to archive (oldest entries first)
- Ensure at least 50 recent entries remain in main changelog (minimum retention)

**Step 3: Archive**
- Move selected entries to `CHANGELOG_ARCHIVE.md`
- Preserve entry format and content exactly
- Maintain version ordering (newest first) in archive

**Step 4: Validation**
- Validate main changelog format and ordering
- Verify archive file format and ordering
- Check for duplicates or ordering violations

**Step 5: Commit**
- Stage changes (CHANGELOG.md, CHANGELOG_ARCHIVE.md)
- Commit with message: "Changelog archival: Archive entries older than &lbrace;criteria&rbrace;"

### 4.2 Manual Archival

Manual archival can be performed if needed:
1. Review changelog entries eligible for archival
2. Copy entries to `CHANGELOG_ARCHIVE.md` (oldest first)
3. Remove archived entries from `CHANGELOG.md`
4. Validate format and ordering
5. Commit changes

**Note:** Automated archival (CMW) is preferred. Manual archival should only be used for exceptional cases.

---

## 5. Entry Preservation

### 5.1 Content Preservation

**All entry content must be preserved exactly:**
- Version header format: `## [version] - DD-MM-YY`
- Entry content (summary, sections, links)
- Related links to detailed changelogs
- All markdown formatting

**No modifications allowed:**
- Do not edit or summarize archived entries
- Do not remove sections or content
- Do not change dates or version numbers
- Do not modify links (even if paths change, preserve original)

### 5.2 Ordering Preservation

**Archive file ordering:**
- Maintain "Keep a Changelog" format (newest first)
- Archive file entries ordered newest to oldest
- Each entry maintains its original position relative to other entries

**Main changelog ordering:**
- After archival, main changelog remains newest first
- No gaps or orphaned entries
- Consistent format throughout

### 5.3 Link Preservation

**Detailed changelog links:**
- Links to detailed changelogs (`CHANGELOG_v{version}.md`) preserved
- Links remain functional (detailed changelogs not moved)
- Archive entries reference same detailed changelog paths as original

**Cross-references:**
- Cross-references within entries preserved
- Links to other documentation preserved
- No link updates required (paths relative to project root)

---

## 6. Validation Requirements

### 6.1 Pre-Archival Validation

Before archival, validate:
- Main changelog format compliance ("Keep a Changelog" format)
- Version ordering (newest first)
- No duplicate version entries
- All entries have valid version headers

### 6.2 Post-Archival Validation

After archival, validate:
- Main changelog format compliance
- Archive file format compliance
- No duplicate version entries (across both files)
- Entry content preserved exactly
- Version ordering maintained in both files
- Main changelog size within target range (500-1,000 lines)

### 6.3 Continuous Validation

During CMW execution:
- Validate format before archival
- Validate format after archival
- Report any violations or issues
- Abort archival if critical violations detected

---

## 7. Integration with Release Workflow (RW)

### 7.1 RW Step 9.5: Changelog Size Check

**New RW Step:** Step 9.5 (after Step 9: Run Validators)

**Purpose:** Check changelog size and trigger CMW if threshold exceeded

**Logic:**
1. Check `CHANGELOG.md` line count
2. If line count > 1,000 lines:
   - Log warning: "Changelog exceeds 1,000 lines, triggering CMW archival"
   - Trigger CMW (Changelog Management Workflow)
   - CMW performs archival
   - Validate results
3. If line count ≤ 1,000 lines:
   - Continue to RW Step 10 (Commit Changes)

**Non-Blocking:** CMW archival is non-blocking. RW continues even if archival fails (but logs error).

### 7.2 Pre-Commit Validation

**Pre-commit hook validation:**
- Validate changelog format before commit
- Detect ordering violations
- Detect duplicate entries
- Warn if changelog size approaching threshold (>900 lines)

**Action:** If violations detected, warn user. Do not block commit (informational only).

---

## 8. Configuration

### 8.1 Policy Configuration (Default Values)

Default archival thresholds (configurable via `rw-config.yaml`):

```yaml
changelog_archival:
  enabled: true
  size_threshold_lines: 1000
  target_size_lines: 750
  time_threshold_months: 2
  version_count_threshold: 100
  minimum_retention_entries: 50
```

### 8.2 Project-Specific Configuration

Projects can override default values in `rw-config.yaml`:

```yaml
changelog_archival:
  size_threshold_lines: 800      # Lower threshold for smaller projects
  time_threshold_months: 2       # Shorter retention (default: 2 months)
  version_count_threshold: 50    # Fewer versions for smaller projects
```

---

## 9. Best Practices

### 9.1 Archival Frequency

**Recommended:** Automated scheduled execution (cron) - **Weekly** (default). Can be adjusted to biweekly or daily if higher frequency needed.

**Alternative:** Triggered archival when threshold exceeded (via RW Step 9.5)

**Manual:** On-demand execution via "CMW" command (for testing/debugging)

**Avoid:** Frequent small archival operations (inefficient)

**Scheduled Automation:**
- CMW is deterministic and suitable for cron automation
- No agentic intelligence required - all operations are rule-based
- Can run unattended on a schedule (default: weekly, can be adjusted to biweekly or daily)
- Automated execution ensures consistent maintenance without manual intervention

### 9.2 Entry Retention

**Minimum:** Always retain last 50 entries in main changelog (even if archival criteria met)

**Rationale:** Ensures recent context remains accessible without consulting archive

### 9.3 Archive Maintenance

**Archive file management:**
- Archive file grows over time (expected behavior)
- No need to split archive file (markdown handles large files well)
- Archive file remains searchable and navigable

**Archive file size:** No hard limit on archive file size (can grow to 10,000+ lines)

### 9.4 Search and Navigation

**Finding entries:**
- Recent entries: Check `CHANGELOG.md`
- Historical entries: Check `CHANGELOG_ARCHIVE.md`
- Detailed entries: Check `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`

**Search strategies:**
- Use text search within files
- Use version numbers to locate entries
- Use dates to locate entries by time period

---

## 10. Compliance and Enforcement

### 10.1 Automated Enforcement

**CMW Enforcement:**
- CMW automatically enforces archival criteria
- Triggers archival when thresholds exceeded
- Validates results after archival

**RW Integration:**
- RW Step 9.5 checks changelog size
- Automatically triggers CMW if needed
- Non-blocking (continues even if archival fails)

### 10.2 Manual Compliance

**Developer responsibility:**
- Do not manually edit archived entries
- Do not remove entries from archive
- Follow archival policy when making manual changes

**Maintainer responsibility:**
- Monitor changelog size
- Trigger CMW if threshold exceeded
- Review archival results for compliance

---

## 11. Related Documentation

**Related Policies:**
- `changelog-management-policy.md` - Overall changelog management policy
- `dev-kit-versioning-policy.md` - Versioning schema and policies

**Related Workflows:**
- Changelog Management Workflow (CMW) - Automated archival workflow
- Release Workflow (RW) - Integration point for archival triggers

**Related Documentation:**
- `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/changelog-management-workflow-agent-execution.md` - CMW execution guide

---

## 12. Version History

- **v1.0.0** (2025-12-21): Initial policy definition (E6:S06:T11 - FR-025)

---

**Policy Owner:** AI Dev Kit / Framework Team  
**Last Reviewed:** 2025-12-21  
**Next Review:** As needed (policy updates)

