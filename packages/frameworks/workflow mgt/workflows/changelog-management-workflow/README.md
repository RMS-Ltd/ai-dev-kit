# Changelog Management Workflow

## Overview

The Changelog Management Workflow (CMW) provides systematic changelog maintenance and archival with automated size management, ordering enforcement, and duplicate removal. It ensures changelog consistency and prevents documentation bloat.

## 🎯 Purpose

To maintain clean, organized, and properly sized changelogs through automated maintenance, archival of old entries, and enforcement of documentation standards.

## 🚨 Prerequisites

### Framework Requirements
- AI Dev Kit workflow management framework installed
- Changelog file structure established (CHANGELOG.md)
- Configuration file `.ai-dev-kit.yaml` with CMW settings
- Git repository with changelog tracking

### Setup Requirements
- Main changelog file: `CHANGELOG.md`
- Archive directory: `docs/changelog-and-release-notes/changelog-archive/`
- Changelog size threshold configured
- Version schema compliance (RC.EPIC.STORY.TASK+BUILD)

## ⚡ Quick Start

### Basic Usage
```bash
# Execute changelog management workflow
CMW

# Example with specific actions
CMW --action analyze

# Example with dry run
CMW --dry-run
```

### Expected Outcome
- Changelog analyzed for size and ordering issues
- Old entries archived if threshold exceeded
- Duplicates removed and ordering enforced
- Changelog optimized and validated

## ⚙️ Configuration

### YAML Configuration
```yaml
# .ai-dev-kit.yaml
changelog_management:
  enabled: true
  main_changelog: CHANGELOG.md
  archive_directory: docs/changelog-and-release-notes/changelog-archive/
  size_threshold: 500
  max_entries_per_version: 10
  enforce_ordering: true
  remove_duplicates: true
  auto_archive: true
```

### Configuration Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| main_changelog | string | CHANGELOG.md | Main changelog file path |
| archive_directory | string | docs/changelog-and-release-notes/changelog-archive/ | Archive directory path |
| size_threshold | number | 500 | Size threshold for archival (lines) |
| max_entries_per_version | number | 10 | Maximum entries per version |
| enforce_ordering | boolean | true | Enforce chronological ordering |
| remove_duplicates | boolean | true | Remove duplicate entries |
| auto_archive | boolean | true | Automatically archive old entries |

### Environment Variables
```bash
export CMW_SIZE_THRESHOLD="600"
export CMW_AUTO_ARCHIVE="true"
export CMW_ENFORCE_ORDERING="true"
export CMW_DRY_RUN="false"
```

## 📋 Usage Examples

### Example 1: Basic Changelog Analysis
```bash
# Execute complete CMW workflow
CMW

# Expected output:
# ✓ Changelog size analysis (current: 450 lines, threshold: 500)
# ✓ Entry count validation (current: 23 entries)
# ✓ Chronological ordering verification
# ✓ Duplicate detection and removal
# ✓ Version schema validation
# ✓ Archive eligibility assessment
# ✓ Changelog optimization complete
```

### Example 2: Changelog Archival
```bash
# Force archival when threshold exceeded
CMW --action archive --force

# Configuration:
changelog_management:
  size_threshold: 400
  archive_criteria:
    - size_exceeded
    - entries_older_than_90_days
    - versions_older_than_latest_3

# Expected output:
# ✓ Changelog size analysis (current: 520 lines, threshold: 400)
# ✓ Archive candidates identified (15 entries)
# ✓ Archive file created: v0.4.14.0-changelog.md
# ✓ Main changelog updated (size: 320 lines)
# ✓ Archive index updated
# ✓ Git commit created for archival
```

### Example 3: Changelog Validation and Repair
```bash
# Execute validation and repair
CMW --action validate --repair

# Configuration for strict validation:
changelog_management:
  validation:
    strict_version_schema: true
    require_timestamps: true
    enforce_entry_format: true
    check_link_integrity: true
    validate_cross_references: true

# Expected output:
# ✓ Version schema validation (RC.EPIC.STORY.TASK+BUILD)
# ✓ Entry format validation (title, description, changes)
# ✓ Timestamp verification and correction
# ✓ Link integrity checking
# ✓ Cross-reference validation
# ✓ Format standardization applied
# ✓ Validation report generated
```

## 🔧 Advanced Usage

### Custom Archival Criteria
```yaml
changelog_management:
  archival:
    enabled: true
    criteria:
      size_threshold: 500
      age_threshold_days: 90
      version_threshold: 3
      entry_count_threshold: 50
    preserve_entries:
      - latest_release
      - critical_security_fixes
      - major_feature_announcements
```

### Entry Format Standards
```yaml
changelog_management:
  entry_format:
    title_required: true
    description_required: true
    changes_required: true
    timestamp_format: "YYYY-MM-DDTHH:mm:ssZ"
    version_prefix: "v"
    bullet_points: true
    max_description_length: 200
```

### Integration with Other Workflows
- **Release Workflow (RW)**: Changelog validation before releases
- **Update Kanban Workflow (UKW)**: Changelog updates for task completion
- **Implementation Cycle Workflow (ICW)**: Changelog maintenance during implementation

## 🐛 Troubleshooting

### Common Issues

#### Issue: Changelog Size Threshold Exceeded
**Symptoms:** CMW reports changelog size exceeds threshold
**Causes:** Too many entries or verbose descriptions
**Solutions:**
```bash
# Check current size
CMW --action analyze --verbose

# Force archival
CMW --action archive --force

# Adjust threshold
CMW --size-threshold 600 --dry-run
```

#### Issue: Version Schema Validation Failures
**Symptoms:** Version format doesn't match RC.EPIC.STORY.TASK+BUILD schema
**Causes:** Incorrect version formatting or manual edits
**Solutions:**
```bash
# Validate version schema
CMW --action validate --schema-only

# Auto-fix version format
CMW --action repair --fix-versions

# Check specific version
CMW --validate-version v0.4.14.3+2
```

#### Issue: Duplicate Entries Detected
**Symptoms:** Duplicate changelog entries found
**Causes:** Manual edits or merge conflicts
**Solutions:**
```bash
# Check for duplicates
CMW --action analyze --check-duplicates

# Remove duplicates
CMW --action repair --remove-duplicates

# Review duplicates before removal
CMW --action analyze --duplicates --verbose
```

### Debug Mode
```bash
# Enable debug output
CMW --debug

# Verbose analysis
CMW --verbose --action analyze

# Dry run mode
CMW --dry-run --action archive
```

### Log Analysis
CMW logs include:
- Changelog analysis results
- Archival decisions and actions
- Validation errors and fixes
- Entry format corrections
- Git commit information

## ❓ FAQ

### Q: How do I customize the archival criteria?
**A:** Configure custom archival criteria:
```yaml
changelog_management:
  archival:
    criteria:
      size_threshold: 600
      age_threshold_days: 120
      version_threshold: 5
    preserve_patterns:
      - "*security*"
      - "*breaking*"
```

### Q: Can I prevent archival of specific entries?
**A:** Yes, use preserve configuration:
```yaml
changelog_management:
  preserve_entries:
    - latest_release
    - security_fixes
    - breaking_changes
    - custom_pattern: "*critical*"
```

### Q: How do I handle multiple changelog files?
**A:** Configure multiple changelog sources:
```yaml
changelog_management:
  changelogs:
    main: CHANGELOG.md
    framework: packages/framework/CHANGELOG.md
    components:
      - path: docs/component-changelogs/
        pattern: "*.md"
```

## 🔗 Integration

### Workflow Dependencies
- **Required:** None (standalone workflow)
- **Optional:** Release Workflow (pre-release validation)
- **Enhanced by:** Update Kanban Workflow (automatic updates)

### Data Flow
```
Changelog Analysis → Size Check → Ordering Validation → Duplicate Removal → Archival → Git Commit
```

### API Integration
```python
# Programmatic CMW execution
from ai_dev_kit.workflows import ChangelogManagementWorkflow

workflow = ChangelogManagementWorkflow()
result = workflow.execute(
    action="analyze",
    dry_run=False,
    force_archive=False
)
```

## 📚 Reference

### CLI Commands
```bash
# Main command
CMW [options]

# Subcommands
CMW --action <analyze|archive|validate|repair>
CMW --dry-run
CMW --force
CMW --size-threshold <number>

# Help
CMW --help
```

### Configuration Reference
#### Core Configuration
```yaml
changelog_management:
  enabled: true
  main_changelog: CHANGELOG.md
  archive_directory: docs/changelog-and-release-notes/changelog-archive/
  size_threshold: 500
  max_entries_per_version: 10
```

#### Advanced Configuration
```yaml
changelog_management:
  enforce_ordering: true
  remove_duplicates: true
  auto_archive: true
  validation:
    strict_version_schema: true
    require_timestamps: true
    enforce_entry_format: true
  archival:
    criteria:
      size_threshold: 500
      age_threshold_days: 90
      version_threshold: 3
```

### Step-by-Step Execution
1. **Step 1**: Changelog Analysis
   - Analyze changelog size and structure
   - Count entries and versions
   - Check for ordering issues

2. **Step 2**: Validation
   - Validate version schema compliance
   - Check entry format standards
   - Verify link integrity

3. **Step 3**: Duplicate Detection
   - Scan for duplicate entries
   - Identify potential merges
   - Mark duplicates for removal

4. **Step 4**: Ordering Enforcement
   - Verify chronological ordering
   - Sort entries by date/version
   - Update section ordering

5. **Step 5**: Size Management
   - Check size against threshold
   - Identify archival candidates
   - Assess archival necessity

6. **Step 6**: Archival Process
   - Create archive file for old entries
   - Update main changelog
   - Update archive index

7. **Step 7**: Repair and Optimization
   - Apply format corrections
   - Standardize entry structure
   - Optimize changelog organization

8. **Step 8**: Git Integration
   - Stage changelog changes
   - Create descriptive commit
   - Update git history

### Output Formats
- **Analysis Reports**: Markdown summary, JSON data
- **Validation Results**: Error reports, fix summaries
- **Archive Files**: Version-specific changelog archives
- **Git Commits**: Automated changelog maintenance commits

## 🎯 Best Practices

### Do's
- ✅ Run CMW regularly to maintain changelog health
- ✅ Configure appropriate size thresholds for your project
- ✅ Review archival decisions before automatic execution
- ✅ Maintain consistent version schema formatting
- ✅ Keep changelog entries concise and informative

### Don'ts
- ❌ Ignore changelog size warnings
- ❌ Manually edit changelog without validation
- ❌ Skip version schema compliance
- ❌ Archive critical security entries
- ❌ Let changelog grow without maintenance

## 🔄 Version Compatibility

| Workflow Version | Framework Version | Notes |
|------------------|-------------------|-------|
| 1.0.0 | v0.4.14.3+ | Initial release with basic maintenance |
| 1.1.0 | v0.5.0.0+ | Enhanced archival and validation features |
| 1.2.0 | v0.5.1.0+ | Advanced duplicate detection and repair |

## 📞 Support

### Getting Help
- **Community**: [AI Dev Kit Discussions](https://github.com/earlution/ai-dev-kit/discussions)

### Contributing
- **CMW Enhancements**: Submit new archival criteria or validation rules
- **Bug Reports**: File issues with changelog samples and configuration
- **Feature Requests**: Propose new changelog management capabilities

---

## 📊 Workflow Metadata

- **Type**: changelog-management
- **Abbreviation**: CMW
- **Triggers**: ["CMW"]
- **Steps**: 8
- **Dependencies**: None
- **Configuration**: `.ai-dev-kit.yaml` changelog_management section

**Last Updated**: 2026-03-12  
**Framework Version**: v0.4.14.3+2  
**Maintainer**: AI Dev Kit Team
