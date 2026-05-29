---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-21T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Cursor IDE Performance Considerations

**Status:** Active  
**Version:** 1.0.0  
**Last Updated:** 2025-12-21  
**Epic:** Epic 6 - Framework Management and Maintenance  
**Story:** Story 6 - ADK Implementation Analysis and Package Management

---

## Overview

This document outlines performance considerations and best practices for Cursor IDE when working with projects that have large file counts, bulk operations, and pre-commit hooks. These considerations are based on real-world investigation and resolution of IDE crashes in large projects.

**Reference:** Investigation conducted in Confidentia project (Epic 20, Story 5, Task 16) - See external investigation reports for detailed analysis.

---

## Problem Statement

Cursor IDE can become unresponsive or crash when:

1. **Pre-commit hooks process too many files** (e.g., all changelog archive files on every commit)
2. **Large file counts** require extensive file watching/indexing
3. **Bulk file operations** trigger many file watcher events simultaneously
4. **File watching/indexing overhead** overwhelms IDE resources

### Impact

- **Productivity Loss:** Work lost when IDE crashes mid-operation
- **Workflow Disruption:** Release Workflow (RW) cannot complete reliably
- **Developer Experience:** Frequent crashes make development frustrating
- **Data Risk:** Potential for lost work if files are modified but not saved

---

## Root Causes

### 1. Pre-commit Hooks Processing Too Many Files

**Problem Pattern:**
```yaml
# ❌ PROBLEMATIC: Processes ALL matching files on every commit
- id: validate-changelog-format
  entry: python3 scripts/validation/validate_changelog_format.py --strict
  pass_filenames: false  # ❌ Processes ALL files
  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\.md$
```

**Impact:**
- Processes 200+ changelog files on every commit
- High memory usage (500 MB-1 GB during commits)
- Slow commit process (5-10+ seconds)
- IDE resource exhaustion leading to crashes

**Solution:**
```yaml
# ✅ CORRECT: Processes only changed files
- id: validate-changelog-format
  entry: python3 scripts/validation/validate_changelog_format.py
  pass_filenames: true  # ✅ Processes only changed files
  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\.md$
```

### 2. Large File Count

**Current ai-dev-kit Statistics:**
- **Total markdown files:** ~1,021
- **Changelog archive files:** ~266 (growing)
- **Kanban files:** ~181

**Impact:**
- IDE needs to index/watch all files
- High memory usage for file watching
- Slow indexing on startup
- Re-indexing triggered by bulk file operations

**Mitigation:**
- Exclude large directories from file watching (`.cursorignore`)
- Use incremental processing when possible
- Archive old files to reduce active file count

### 3. Bulk File Operations

**Problem Pattern:**
```python
# ❌ PROBLEMATIC: Updates files one-by-one, triggering many file watcher events
for file in files:
    update_file(file)  # Triggers file watcher for each file
```

**Impact:**
- 50+ file watcher events in quick succession
- 50+ re-indexing operations
- Memory usage spikes
- IDE becomes unresponsive

**Solution:**
```python
# ✅ CORRECT: Batch file operations to reduce file watcher events
updates = []
for file in files:
    updates.append((file, new_content))

# Apply all at once
for file, content in updates:
    file.write_text(content)  # Fewer file watcher events
```

### 4. File Watching/Indexing Overhead

**Problem:**
- IDE watches all files for changes
- Bulk operations trigger many file watcher events
- Events queue up faster than they can be processed
- Memory usage increases

**Mitigation:**
- Exclude large directories from file watching
- Batch file operations
- Use incremental processing

---

## Best Practices

### Pre-commit Hooks

**✅ DO:**
- Use `pass_filenames: true` when possible
- Process only changed files by default
- Provide `--all` flag for full validation when needed
- Keep hooks fast (&lt;2 seconds ideally)

**❌ DON'T:**
- Use `pass_filenames: false` unless absolutely necessary
- Process all files on every commit
- Run heavy operations in pre-commit hooks
- Block commits for non-critical validations

**Example Configuration:**
```yaml
repos:
  - repo: local
    hooks:
      - id: validate-branch-context
        name: Validate Branch Context
        entry: python scripts/validation/validate_branch_context.py
        language: system
        pass_filenames: true  # ✅ Process only changed files
        files: ^(src/.*/version\.py|CHANGELOG\.md)$

      - id: validate-changelog-format
        name: Validate Changelog Format
        entry: python scripts/validation/validate_changelog_format.py
        language: system
        pass_filenames: true  # ✅ Process only changed files
        files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\.md$
```

### File Operations

**✅ DO:**
- Batch file writes when updating many files
- Add progress indicators for long operations
- Use `--dry-run` mode to preview changes
- Process incrementally when possible

**❌ DON'T:**
- Update files one-by-one in loops
- Trigger file watcher events unnecessarily
- Process all files when only some changed
- Block operations without progress feedback

**Example Pattern:**
```python
# Batch file updates
def update_many_files(files_and_content):
    """Update multiple files efficiently."""
    updates = []
    for file_path, content in files_and_content:
        updates.append((Path(file_path), content))
    
    # Apply all updates
    for file_path, content in updates:
        file_path.write_text(content)
    
    # Single file watcher event batch
```

### IDE Configuration

**✅ DO:**
- Exclude large directories from file watching (`.cursorignore`)
- Use `.gitignore` patterns for exclusions
- Monitor memory usage during bulk operations
- Configure file watcher limits if available

**❌ DON'T:**
- Watch archive directories unnecessarily
- Watch generated files
- Watch large static content directories
- Ignore performance warnings

**Example `.cursorignore`:**
```
# Exclude large directories from file watching
docs/changelog-and-release-notes/changelog-archive/
docs/project-management/kanban/epics/Epic-*/Story-*/T*-*.md
*.pyc
__pycache__/
```

---

## Validation Script Updates

### Required Changes for `pass_filenames: true`

**Scripts must accept file paths as arguments:**

```python
# validate_changelog_format.py
import sys
from pathlib import Path

def validate_changelog_format(file_paths=None, strict=False):
    """Validate changelog format.
    
    Args:
        file_paths: List of file paths to validate (None = all files)
        strict: If True, fail on format violations
    """
    if file_paths is None:
        # Process all files (for --all flag)
        archive_dir = Path("docs/changelog-and-release-notes/changelog-archive")
        file_paths = list(archive_dir.glob("CHANGELOG_v*.md"))
    
    for file_path in file_paths:
        # Validate each file
        validate_file(file_path, strict=strict)

if __name__ == "__main__":
    if "--all" in sys.argv:
        file_paths = None
    else:
        # Get file paths from pre-commit hook
        file_paths = sys.argv[1:] if len(sys.argv) > 1 else None
    
    validate_changelog_format(file_paths, strict="--strict" in sys.argv)
```

---

## Monitoring and Detection

### Warning Signs

Watch for these indicators of performance issues:

1. **Commit Time:**
   - Normal: &lt;2 seconds
   - Warning: 2-5 seconds
   - Critical: >5 seconds

2. **Memory Usage:**
   - Normal: &lt;200 MB during commits
   - Warning: 200-500 MB
   - Critical: >500 MB

3. **File Count:**
   - Normal: &lt;500 markdown files
   - Warning: 500-1,000 files
   - Critical: >1,000 files

4. **Crash Frequency:**
   - Normal: Rare/never
   - Warning: Occasional during bulk operations
   - Critical: Frequent during normal operations

### Measurement Commands

```bash
# Count markdown files
find . -name "*.md" | wc -l

# Count changelog archive files
find docs/changelog-and-release-notes/changelog-archive -name "*.md" | wc -l

# Count Kanban files
find docs/project-management/kanban -name "*.md" | wc -l

# Monitor memory usage during commit
# (Use Activity Monitor on macOS, Task Manager on Windows)
```

---

## Framework Documentation Updates

### Pre-commit Hook Examples

**Update framework documentation to show best practices:**

```yaml
# ✅ RECOMMENDED: Use pass_filenames: true
- id: validate-changelog-format
  pass_filenames: true  # ✅ Process only changed files
  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\.md$

# ❌ AVOID: Use pass_filenames: false unless absolutely necessary
- id: validate-changelog-format
  pass_filenames: false  # ❌ Processes ALL files (performance issue)
  files: ^docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v.*\.md$
```

---

## Related Documentation

- **External Investigation:** Confidentia project - Epic 20, Story 5, Task 16
  - Bug Report: `KB/PM_and_Portfolio/kanban/Epic 20/Story-5-BR-Cursor-IDE-Crashes.md`
  - Investigation Report: `KB/Documentation/Developer_Docs/cursor-crash-investigation.md`
  - Article: `KB/Documentation/Developer_Docs/cursor-crash-investigation-article.md`
- **Framework Documentation:** `packages/frameworks/workflow mgt/IMPLEMENTATION_GUIDE.md`
- **Validation Scripts:** `packages/frameworks/workflow mgt/scripts/validation/`

---

## Action Items

### For ai-dev-kit

- [ ] Monitor file count growth (currently ~1,021 markdown files)
- [ ] Consider `.cursorignore` for changelog archive (266 files)
- [ ] Update framework documentation examples to use `pass_filenames: true`
- [ ] Document best practices in framework guides

### For Adopting Projects

- [ ] Configure pre-commit hooks with `pass_filenames: true`
- [ ] Update validation scripts to accept file paths
- [ ] Add `.cursorignore` for large directories
- [ ] Monitor file count and performance metrics
- [ ] Batch file operations in scripts

---

**Status:** Active awareness document  
**Last Updated:** 2025-12-21  
**Next Review:** When file count exceeds 1,500 markdown files or performance issues arise

