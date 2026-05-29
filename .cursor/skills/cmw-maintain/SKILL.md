---
name: cmw-maintain
description: Maintain changelog ordering and archival
---

## Changelog Management Workflow Execution

### Primary Responsibilities

- Maintain changelog ordering and archival
- Validate changelog format and structure
- Ensure changelog consistency across versions
- Archive old changelog entries properly

### Step Sequence

**Step 1: Chelog Validation**
- Validate changelog format compliance
- Check for proper version schema
- Ensure consistent structure across entries
- Verify cross-references and links

**Step 2: Ordering Maintenance**
- Maintain proper chronological ordering
- Ensure version sequence consistency
- Validate build number progression
- Check for duplicate or missing entries

**Step 3: Archival Process**
- Archive old changelog entries to archive directory
- Maintain archive organization and structure
- Ensure archive entries remain accessible
- Update archive index if needed

**Step 4: Consistency Checks**
- Validate consistency between main changelog and archives
- Ensure version references are accurate
- Check for broken links or references
- Verify changelog completeness

### Integration Points

- Works with Documentation Agent for changelog updates
- Supports RW Agent during release changelog generation
- Provides changelog validation services
- Maintains changelog archive organization

### Changelog Schema

**Format:** `CHANGELOG_v{version}.md`
**Archive Location:** `docs/changelog-and-release-notes/changelog-archive/`
**Main Changelog:** `CHANGELOG.md` (root)

### Validation Rules

- Version follows RC.EPIC.STORY.TASK+BUILD schema
- Entries are in chronological order
- Archive entries are properly organized
- Cross-references are accurate and functional
