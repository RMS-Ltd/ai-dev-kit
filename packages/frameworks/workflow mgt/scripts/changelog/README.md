# Changelog Management Workflow (CMW) Scripts

**Status:** Implementation Pending  
**Type:** Deterministic (rule-based, script-driven)  
**Execution:** Cron automation (weekly), RW Step 9.5 trigger, or manual

---

## Overview

The Changelog Management Workflow (CMW) is a **deterministic workflow** for automated changelog maintenance. Unlike agent-driven workflows (like UKW), CMW uses rule-based scripts to:

- Analyze changelog state (size, entry count, ordering, duplicates)
- Validate changelog format and ordering
- Detect and remove duplicate entries
- Identify entries eligible for archival (based on archival policy)
- Archive old entries to archive file
- Validate remaining changelog
- Stage and commit changes
- Report summary of maintenance actions

**No agentic intelligence required** - all operations are deterministic and rule-based.

---

## Cron Automation

### Default Frequency: Weekly

CMW is configured to run **weekly** by default via cron. Frequency can be adjusted to biweekly or daily if needed based on project activity.

### Cron Setup

1. **Install cron script:**
   ```bash
   # Copy example script
   cp cron-cmw-example.sh ~/scripts/cmw-cron.sh
   chmod +x ~/scripts/cmw-cron.sh
   
   # Edit script to set PROJECT_ROOT and paths
   nano ~/scripts/cmw-cron.sh
   ```

2. **Add to crontab:**
   ```bash
   crontab -e
   ```

3. **Add weekly schedule (Sunday at 2:00 AM):**
   ```cron
   0 2 * * 0 /path/to/cmw-cron.sh
   ```

4. **Alternative schedules:**
   ```cron
   # Biweekly (every other Sunday at 2:00 AM)
   0 2 */14 * 0 /path/to/cmw-cron.sh
   
   # Daily (every day at 2:00 AM)
   0 2 * * * /path/to/cmw-cron.sh
   ```

### Cron Script Configuration

Edit `cron-cmw-example.sh` (or your copy) to configure:

- `PROJECT_ROOT`: Path to your project root
- `CMW_SCRIPT_PATH`: Path to CMW Python script
- `LOG_DIR`: Directory for log files
- `LOG_FILE`: Log file path

---

## Manual Execution

### Command: CMW

Manual execution via command:

```bash
# Run CMW manually
python3 packages/frameworks/workflow\ mgt/scripts/changelog/cmw.py
```

Or via workflow trigger (if integrated with `.cursorrules`):

```
CMW
```

---

## Integration with Release Workflow (RW)

### RW Step 9.5: Automatic Trigger

CMW automatically triggers during RW execution if changelog size exceeds threshold:

- **Trigger:** `CHANGELOG.md` exceeds 1,000 lines
- **Action:** CMW runs archival process
- **Non-blocking:** RW continues even if CMW fails (logs error)

---

## Scripts (Implementation Pending)

### Core Scripts

1. **`cmw.py`** - Main CMW orchestration script
   - Coordinates all CMW steps
   - Handles error handling and logging
   - Executes archival process

2. **`analyze_changelog_state.py`** - Changelog state analysis
   - Analyzes changelog size, entry count, version list
   - Calculates entry ages
   - Detects format compliance issues

3. **`validate_changelog_format.py`** - Format validation
   - Validates "Keep a Changelog" format compliance
   - Checks version ordering (newest first)
   - Detects duplicate entries

4. **`remove_duplicates.py`** - Duplicate removal
   - Detects duplicate version entries
   - Removes duplicates (keeps first occurrence)
   - Validates results

5. **`identify_archival_entries.py`** - Archival candidate identification
   - Applies archival criteria (size, time, version count)
   - Identifies entries eligible for archival
   - Preserves minimum retention

6. **`archive_entries.py`** - Entry archival
   - Moves entries to archive file
   - Preserves content, ordering, and links
   - Maintains "Keep a Changelog" format

7. **`validate_remaining.py`** - Post-archival validation
   - Validates main changelog after archival
   - Validates archive file format
   - Checks for duplicates across both files

### Utility Scripts

- **`cron-cmw-example.sh`** - Cron job example script
- **Configuration helpers** - Config loading and validation

---

## Configuration

CMW configuration is defined in `rw-config.yaml`:

```yaml
changelog_archival:
  enabled: true
  # Mode controls how much history stays in CHANGELOG.md.
  #
  # - hybrid (framework default):
  #     * Enforce size/age/version-count thresholds
  #     * Keep a rolling window of recent releases (see policy defaults)
  # - latest_only (ai-dev-kit pattern):
  #     * Keep only the newest concrete release entry in CHANGELOG.md
  #       (plus the Unreleased section)
  #     * Archive all older releases to the archive file
  #
  # For ai-dev-kit, we set mode: latest_only.
  mode: latest_only
  size_threshold_lines: 1000
  target_size_lines: 750
  time_threshold_months: 2
  version_count_threshold: 100
  minimum_retention_entries: 50
```

---

## Logging

CMW logs execution details to:

- **Cron execution:** `${LOG_DIR}/cmw-cron.log`
- **Manual execution:** Console output + optional log file
- **RW integration:** RW execution logs

---

## Error Handling

CMW handles errors gracefully:

- **Validation failures:** Logs warnings, continues with caution
- **Archival failures:** Logs errors, aborts archival, preserves original files
- **Git operations:** Validates git state before committing

---

## Related Documentation

- **Archival Policy:** `docs/architecture/standards-and-adrs/changelog-archival-policy.md`
- **Management Policy:** `docs/architecture/standards-and-adrs/changelog-management-policy.md`
- **Workflow Definition:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **Task Document:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T11-changelog-management-and-archival-workflow.md`

---

**Last Updated:** 2025-12-21  
**Version:** 1.0.0

