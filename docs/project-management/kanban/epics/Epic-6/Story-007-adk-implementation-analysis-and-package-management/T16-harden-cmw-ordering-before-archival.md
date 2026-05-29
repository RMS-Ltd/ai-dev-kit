---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-05T21:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 16: Harden CMW Ordering Before Archival

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-01-05 (v0.6.7.16+1 – All phases complete: Step 3.5 added to CMW, ordering fixed before archival, migrated from v0.6.6.16+1)  
**Started:** 2026-01-05  
**Completed:** 2026-01-05  
**Version:** v0.6.7.16+1

**Task Type:** Bug Fix / Hardening  
**Build Warning Suppression:** false  
**Code:** E6S07T16

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`  
**Value:** `E6:S07:T16`

---

## Overview

Harden the Changelog Management Workflow (CMW) to fix changelog ordering **before** archival. Currently, CMW archives entries without first ensuring the changelog is properly sorted, causing:

1. **Archive corruption**: Archived entries are unsorted
2. **Incorrect archival selection**: Wrong entries may be archived (newer entries appearing earlier in unsorted list)
3. **Remaining violations**: Main changelog still has ordering violations after archival
4. **Data integrity risk**: Historical record becomes unreliable

---

## Problem Statement

**Issue:** CMW archives entries before fixing changelog ordering.

**Current Flow:**
```
Step 1: Analyze changelog state
Step 2: Validate format and ordering (DETECTS violations, doesn't fix)
Step 3: Remove duplicates
Step 4: Identify entries for archival (works on UNSORTED data) ❌
Step 5: Archive entries (archives UNSORTED entries) ❌
Step 6: Validate remaining changelog (still has violations)
```

**Root Cause:**
- No step exists to **FIX** ordering violations before archival
- Step 2 validates but only reports violations
- Step 4 (`identify_archival_entries`) operates on unsorted entries
- Step 5 (`archive_entries`) archives unsorted entries, preserving incorrect order

**Impact:**
- **HIGH**: Archive corruption (entries in wrong order)
- **HIGH**: Incorrect archival selection (wrong entries archived)
- **MEDIUM**: Remaining violations (main changelog still unsorted)
- **MEDIUM**: Data integrity risk (historical record unreliable)

---

## Solution

### Add Step 3.5: Fix Ordering

**Insert between Step 3 (Remove Duplicates) and Step 4 (Identify Archival)**

**New Flow:**
```
Step 1: Analyze changelog state
Step 2: Validate format and ordering (detect violations)
Step 3: Remove duplicates
Step 3.5: Fix Ordering (NEW - sort by canonical version number) ✅
Step 4: Identify entries for archival (now works on SORTED data) ✅
Step 5: Archive entries (archives SORTED entries) ✅
Step 6: Validate remaining changelog (should be clean)
```

---

## Approach

### Phase 1: Create Fix Ordering Script

**File:** `packages/frameworks/workflow mgt/scripts/changelog/fix_ordering.py`

**Functionality:**
- Extract all changelog entries
- Detect changelog format (canonical vs Keep a Changelog)
- Sort entries by canonical version number (RC.EPIC.STORY.TASK+BUILD)
- Reconstruct changelog with sorted entries
- Preserve all entry content exactly
- Preserve changelog header/metadata

**Algorithm:**
```python
def fix_changelog_ordering(content: str, format_type: str = None) -> str:
    """
    Fix changelog ordering by sorting entries by version number.
    
    Args:
        content: Changelog content
        format_type: 'canonical' or 'keep_a_changelog' (auto-detected if None)
    
    Returns:
        Reordered changelog content
    """
    # 1. Extract header/metadata (before first entry)
    # 2. Extract all entries
    # 3. Sort entries by version_components (canonical ordering)
    # 4. Reconstruct changelog with sorted entries
    # 5. Return fixed content
```

**Dependencies:**
- `changelog_utils.py` (extract_changelog_entries, compare_versions, parse_version)
- `validation/validate_changelog_format.py` (detect_changelog_format)

### Phase 2: Update CMW Workflow YAML

**File:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`

**Add Step 3.5:**
```yaml
- id: step-3.5
  name: Fix Ordering
  type: ordering_fix
  handler: changelog.fix_ordering
  required: true
  mandatory: true
  blocking: false
  dependencies:
    - step-3
  config:
    main_changelog: ${config.main_changelog}
    detect_format: true
    preserve_content: true
    validate_after_fix: true

```

**Update Step 4 dependencies:**
```yaml
- id: step-4
  dependencies:
    - step-3.5  # Changed from step-3

```

### Phase 3: Update CMW Main Script

**File:** `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`

**Add Step 3.5 execution:**
```python
# Step 3.5: Fix ordering
print("\n🔧 Step 3.5: Fixing changelog ordering...")
if not args.dry_run:
    from changelog.fix_ordering import fix_changelog_ordering
    from validation.validate_changelog_format import detect_changelog_format
    
    format_type = detect_changelog_format(main_content)
    fixed_content = fix_changelog_ordering(main_content, format_type)
    
    if fixed_content != main_content:
        main_changelog_path.write_text(fixed_content, encoding='utf-8')
        main_content = fixed_content
        print("  ✅ Fixed changelog ordering")
    else:
        print("  ✅ Changelog already correctly ordered")
else:
    print("  🔍 DRY RUN: Would fix ordering")
```

### Phase 4: Fix Archive Function Sorting

**File:** `packages/frameworks/workflow mgt/scripts/changelog/archive_entries.py`

**Fix sorting logic (Line 90-93):**
```python
# OLD (WRONG): Sort by position in unsorted list
sorted_entries_to_archive = sorted(
    entries_to_archive,
    key=lambda e: main_entries.index(e) if e in main_entries else -1
)

# NEW (CORRECT): Sort by version number (canonical)
from changelog.changelog_utils import compare_versions
sorted_entries_to_archive = sorted(
    entries_to_archive,
    key=lambda e: e.version_components,
    reverse=True  # Newest first for archive (if Keep a Changelog format)
)
```

### Phase 5: Update Documentation

**Files to Update:**
- `packages/frameworks/workflow mgt/scripts/changelog/README.md` - Document Step 3.5
- `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml` - Update description
- `docs/analysis/cmw-ordering-flaw-analysis.md` - Reference this task

---

## Deliverables

1. **`packages/frameworks/workflow mgt/scripts/changelog/fix_ordering.py`**
   - Script to fix changelog ordering
   - Unit tests included

2. **Updated `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`**
   - Step 3.5 added
   - Dependencies updated

3. **Updated `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`**
   - Step 3.5 execution added

4. **Updated `packages/frameworks/workflow mgt/scripts/changelog/archive_entries.py`**
   - Sorting logic fixed (sort by version, not position)

5. **Updated Documentation:**
   - CMW README updated
   - Workflow YAML description updated

---

## Acceptance Criteria

- [x] `fix_ordering.py` script created and tested ✅
- [x] Script correctly sorts entries by canonical version number ✅
- [x] Script preserves all entry content exactly ✅
- [x] Script preserves changelog header/metadata ✅
- [x] Step 3.5 added to workflow YAML ✅
- [x] Step 3.5 integrated into CMW main script ✅
- [x] Archive function sorting logic fixed ✅
- [x] CMW workflow updated (Step 4 depends on Step 3.5) ✅
- [x] Documentation updated ✅
- [ ] Tested on current changelog (with known violations) - Pending RW
- [ ] Verified ordering fixed before archival - Pending RW
- [ ] Verified archive contains sorted entries - Pending RW
- [ ] Verified main changelog clean after archival - Pending RW

---

## Testing Strategy

### Test Cases

1. **Unsorted Changelog:**
   - Input: Changelog with 10 entries in random order
   - Expected: All entries sorted by version number
   - Verify: No ordering violations after Step 3.5

2. **Archival with Unsorted Input:**
   - Input: Unsorted changelog, archive oldest 5 entries
   - Expected: Correct 5 oldest entries archived (by version number, not position)
   - Verify: Archive contains correct entries in sorted order

3. **Mixed Format Detection:**
   - Input: Changelog with both old and new format entries
   - Expected: Format detected correctly, entries sorted appropriately
   - Verify: Format-specific sorting applied

4. **Edge Cases:**
   - Empty changelog
   - Single entry
   - All entries same version (duplicates already removed)
   - Very large changelog (1000+ entries)

5. **Integration Test:**
   - Run full CMW on current changelog (with known violations)
   - Verify Step 3.5 fixes ordering
   - Verify Step 4 selects correct entries for archival
   - Verify Step 5 archives sorted entries
   - Verify Step 6 shows no violations

---

## Related Work

- **Story:** E6:S07 - ADK Implementation Analysis and Package Management
- **Related Task:** E6:S07:T11 - Changelog Management and Archival Workflow (CMW implementation)
- **Related Task:** E2:S16:T03 - Changelog Maintenance Workflow (CMW) - Perpetual Task (migrated from T12)
- **Analysis Document:** `docs/analysis/cmw-ordering-flaw-analysis.md`

---

## References

- **CMW Workflow:** `packages/frameworks/workflow mgt/workflows/changelog-management-workflow.yaml`
- **CMW Scripts:** `packages/frameworks/workflow mgt/scripts/changelog/`
- **CMW Main Script:** `packages/frameworks/workflow mgt/scripts/changelog/cmw.py`
- **Archive Function:** `packages/frameworks/workflow mgt/scripts/changelog/archive_entries.py`
- **Validation Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`
- **Changelog Utils:** `packages/frameworks/workflow mgt/scripts/changelog/changelog_utils.py`
- **Analysis Document:** `docs/analysis/cmw-ordering-flaw-analysis.md`

---

**Last Updated:** 2026-01-05 (v0.6.7.16+1 – All phases complete: Step 3.5 added to CMW, ordering fixed before archival, migrated from v0.6.6.16+1)  
**Version:** v0.6.7.16+1  
**Status:** ✅ COMPLETE

