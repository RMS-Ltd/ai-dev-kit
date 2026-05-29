# Documentation Update Scripts

Automated documentation update scripts for various trigger types.

**Part of:** Epic 5, Story 3 - Documentation Automation  
**Task:** E5:S03:T01 - Create automated documentation update scripts

---

## Overview

This package provides scripts to automate common documentation maintenance tasks based on the documentation update triggers defined in `docs/architecture/standards-and-adrs/documentation-update-triggers.md`.

---

## Scripts

### 1. `update_version_references.py`

**Purpose:** Update version references across documentation files when version changes.

**Usage:**
```bash
# Update all version references to current version
python update_version_references.py

# Update specific files
python update_version_references.py --files README.md docs/guide.md

# Dry run
python update_version_references.py --dry-run
```

**Features:**
- Automatically detects version from version file
- Updates version references in markdown files
- Supports multiple version formats (vX.Y.Z.T+B, X.Y.Z.T+B, etc.)
- Configurable via rw-config.yaml

**Integration:**
- Can be called from Release Workflow (RW) Step 5 (Update README)
- Can be integrated into CI/CD pipelines
- Can be run manually after version bumps

---

### 2. `update_cross_references.py`

**Purpose:** Update cross-references when files are moved or renamed.

**Usage:**
```bash
# Update references after file move
python update_cross_references.py \
  --old-path docs/old/path/file.md \
  --new-path docs/new/path/file.md

# Dry run
python update_cross_references.py \
  --old-path docs/old/path/file.md \
  --new-path docs/new/path/file.md \
  --dry-run
```

**Features:**
- Updates markdown links `[text](path)`
- Updates code references `` `path` ``
- Handles relative and absolute paths
- Updates all documentation files automatically

**Integration:**
- Can be called after file reorganization
- Can be integrated into git hooks
- Can be run manually after file moves

---

### 3. `update_metadata.py`

**Purpose:** Update metadata fields (last_updated, version, etc.) in documentation files.

**Usage:**
```bash
# Update last_updated field
python update_metadata.py --field last_updated --value "2026-01-06"

# Auto-update last_updated to current date
python update_metadata.py --field last_updated --value auto

# Update version field
python update_metadata.py --field version --value "v0.5.3.1+1"

# Update specific files
python update_metadata.py --field last_updated --value auto --files README.md

# Dry run
python update_metadata.py --field last_updated --value auto --dry-run
```

**Features:**
- Updates YAML frontmatter fields
- Updates markdown fields (e.g., `**Last updated:**`)
- Auto-generates dates for common fields
- Supports batch updates

**Integration:**
- Can be called from Release Workflow (RW) after updates
- Can be integrated into scheduled reviews
- Can be run manually for metadata maintenance

---

### 4. `validate_links.py`

**Purpose:** Validate internal and external links, and optionally fix broken links.

**Usage:**
```bash
# Validate all links
python validate_links.py

# Validate and fix broken links
python validate_links.py --fix

# Validate specific files
python validate_links.py --files docs/guide.md README.md

# Dry run
python validate_links.py --fix --dry-run
```

**Features:**
- Validates internal file links
- Validates anchor links (#section)
- Attempts to fix broken links automatically
- Reports all broken links with line numbers

**Integration:**
- Can be called from Release Workflow (RW) Step 9 (Run Validators)
- Can be integrated into CI/CD pipelines
- Can be run manually for link health checks

---

### 5. `sync_documentation.py`

**Purpose:** Synchronize documentation between different locations (e.g., framework docs and project docs).

**Usage:**
```bash
# Sync framework docs to project docs
python sync_documentation.py \
  --source packages/frameworks/kanban/docs \
  --target docs/frameworks/kanban

# Sync single file
python sync_documentation.py \
  --source packages/frameworks/kanban/README.md \
  --target docs/frameworks/kanban/README.md

# Exclude patterns
python sync_documentation.py \
  --source packages/frameworks/kanban \
  --target docs/frameworks/kanban \
  --exclude "*.py" "*.yaml"

# Dry run
python sync_documentation.py \
  --source packages/frameworks/kanban \
  --target docs/frameworks/kanban \
  --dry-run
```

**Features:**
- Syncs files or directories
- Supports exclude patterns
- Only updates changed files
- Preserves file metadata

**Integration:**
- Can be called after framework updates
- Can be integrated into framework release process
- Can be run manually for documentation sync

---

## Integration with Workflows

### Release Workflow (RW) Integration

**Step 5: Update README**
- Can call `update_version_references.py` to update version in README
- Can call `update_metadata.py` to update last_updated date

**Step 9: Run Validators**
- Can call `validate_links.py` to check link health
- Can call `validate_links.py --fix` to fix broken links automatically

### Update Kanban Workflow (UKW) Integration

**After Kanban Updates:**
- Can call `update_metadata.py` to update last_updated dates
- Can call `validate_links.py` to ensure link integrity

### Scheduled Reviews

**Weekly/Monthly Reviews:**
- Run `validate_links.py` to check link health
- Run `update_metadata.py` to update last_updated dates
- Run `update_version_references.py` to ensure version consistency

---

## Configuration

Scripts automatically read from `rw-config.yaml` if available:

```yaml
version_file: src/fynd_deals/version.py
readme_file: README.md
```

---

## Error Handling

All scripts:
- Provide clear error messages
- Support `--dry-run` for safe testing
- Return appropriate exit codes (0 = success, 1 = error)
- Log changes made

---

## Examples

### Example 1: Update Version After Release

```bash
# After RW completes, update all version references
python update_version_references.py
```

### Example 2: Fix Broken Links

```bash
# Validate and fix all broken links
python validate_links.py --fix
```

### Example 3: Update Metadata After Review

```bash
# Update last_updated for all reviewed docs
python update_metadata.py \
  --field last_updated \
  --value auto \
  --files docs/guide.md docs/api.md
```

### Example 4: Sync Framework Docs

```bash
# Sync kanban framework docs to project docs
python sync_documentation.py \
  --source packages/frameworks/kanban \
  --target docs/frameworks/kanban
```

---

## Related Documentation

- **Documentation Update Triggers:** `docs/architecture/standards-and-adrs/documentation-update-triggers.md`
- **Documentation Maintenance Policy:** `docs/architecture/standards-and-adrs/documentation-maintenance-policy.md`
- **Release Workflow:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`

---

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2026-01-06

