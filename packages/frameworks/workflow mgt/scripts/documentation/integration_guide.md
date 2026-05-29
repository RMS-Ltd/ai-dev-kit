# Documentation Update Scripts - Workflow Integration Guide

**Part of:** Epic 5, Story 3 - Documentation Automation  
**Task:** E5:S03:T01 - Create automated documentation update scripts

---

## Overview

This guide explains how to integrate the documentation update scripts into existing workflows (Release Workflow, Update Kanban Workflow, CI/CD pipelines).

---

## Release Workflow (RW) Integration

### Step 5: Update README

**Current Behavior:**
- Updates version in README
- Updates last_updated date

**Enhanced with Documentation Scripts:**
```yaml
step-5:
  name: Update README
  handler: release.readme_update
  config:
    readme_file: README.md
    update_version_text: true
    # NEW: Use documentation update scripts
    use_documentation_scripts: true
    scripts:
      - update_version_references.py  # Update all version references
      - update_metadata.py            # Update last_updated metadata
```

**Implementation:**
After updating README, call:
```bash
python scripts/documentation/update_version_references.py
python scripts/documentation/update_metadata.py --field last_updated --value auto --files README.md
```

### Step 9: Run Validators

**Current Behavior:**
- Runs validation scripts
- Checks changelog size

**Enhanced with Documentation Scripts:**
```yaml
step-9:
  name: Run Validators
  handler: release.run_validators
  config:
    validators:
      - validate_branch_context.py
      - validate_changelog_format.py
      - validate_version_bump.py
      - check_changelog_size.py
      # NEW: Documentation validators
      - validate_links.py  # Check link health
```

**Implementation:**
Add to validator execution:
```bash
python scripts/documentation/validate_links.py
```

---

## Update Kanban Workflow (UKW) Integration

### After Kanban Updates

**Use Case:** After UKW updates kanban docs, update metadata and validate links.

**Implementation:**
```bash
# After UKW completes
python scripts/documentation/update_metadata.py \
  --field last_updated \
  --value auto \
  --files docs/project-management/kanban/**/*.md

python scripts/documentation/validate_links.py
```

---

## CI/CD Integration

### Pre-Commit Hook

**Use Case:** Validate links before commits.

**Implementation:**
```bash
#!/bin/bash
# .git/hooks/pre-commit

# Validate links in changed markdown files
git diff --cached --name-only --diff-filter=ACM | grep '\.md$' | while read file; do
  python scripts/documentation/validate_links.py --files "$file"
done
```

### Post-Commit Hook

**Use Case:** Update metadata after commits.

**Implementation:**
```bash
#!/bin/bash
# .git/hooks/post-commit

# Update last_updated for changed docs
git diff HEAD~1 --name-only --diff-filter=ACM | grep '\.md$' | while read file; do
  python scripts/documentation/update_metadata.py \
    --field last_updated \
    --value auto \
    --files "$file"
done
```

---

## Scheduled Reviews

### Weekly Documentation Review

**Use Case:** Weekly link validation and metadata updates.

**Implementation:**
```bash
#!/bin/bash
# scripts/documentation/weekly_review.sh

# Validate all links
python scripts/documentation/validate_links.py --fix

# Update last_updated for reviewed docs
python scripts/documentation/update_metadata.py \
  --field last_updated \
  --value auto
```

### Monthly Comprehensive Review

**Use Case:** Monthly comprehensive documentation health check.

**Implementation:**
```bash
#!/bin/bash
# scripts/documentation/monthly_review.sh

# Validate links
python scripts/documentation/validate_links.py --fix

# Update version references
python scripts/documentation/update_version_references.py

# Update metadata
python scripts/documentation/update_metadata.py \
  --field last_updated \
  --value auto
```

---

## File Move/Rename Integration

### Git Hook for File Moves

**Use Case:** Automatically update cross-references when files are moved.

**Implementation:**
```bash
#!/bin/bash
# .git/hooks/post-merge

# Detect file moves from git
git diff --name-status HEAD@{1} HEAD | grep '^R' | while read status old new; do
  python scripts/documentation/update_cross_references.py \
    --old-path "$old" \
    --new-path "$new"
done
```

---

## Framework Documentation Sync

### After Framework Updates

**Use Case:** Sync framework docs to project docs after framework package updates.

**Implementation:**
```bash
# After framework package update
python scripts/documentation/sync_documentation.py \
  --source packages/frameworks/kanban \
  --target docs/frameworks/kanban
```

---

## Configuration

All scripts support configuration via `rw-config.yaml`:

```yaml
documentation:
  scripts_path: packages/frameworks/workflow mgt/scripts/documentation
  auto_update_metadata: true
  auto_validate_links: true
  link_validation:
    fix_automatically: false
    check_external: false
  metadata:
    auto_update_last_updated: true
    date_format: "%Y-%m-%d"
```

---

## Error Handling

**Integration Points:**
- Scripts return exit code 0 on success, 1 on error
- Workflows should handle script failures gracefully
- Non-critical scripts (e.g., link validation) should not block workflows

**Example:**
```python
# In workflow handler
result = subprocess.run(['python', 'scripts/documentation/validate_links.py'])
if result.returncode != 0:
    # Log warning but don't block workflow
    logger.warning("Link validation found issues (non-blocking)")
```

---

## Best Practices

1. **Use Dry-Run First:** Always test with `--dry-run` before actual updates
2. **Version Control:** Commit changes before running update scripts
3. **Incremental Updates:** Update specific files when possible, not entire directories
4. **Validation:** Run validators after updates to verify changes
5. **Documentation:** Document any custom integration patterns

---

## Related Documentation

- **Documentation Update Triggers:** `docs/architecture/standards-and-adrs/documentation-update-triggers.md`
- **Release Workflow:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **Script README:** `packages/frameworks/workflow mgt/scripts/documentation/README.md`

---

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-06

