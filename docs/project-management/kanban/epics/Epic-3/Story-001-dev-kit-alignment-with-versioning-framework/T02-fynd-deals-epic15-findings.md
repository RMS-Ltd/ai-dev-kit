---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Task 2 Findings: fynd.deals Epic 15 Versioning Patterns

**Task:** E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work  
**Created:** 2025-12-02  
**Status:** Complete  
**Deliverable:** Summary of reusable patterns and findings

---

## Executive Summary

This document captures reusable versioning patterns extracted from the fynd.deals Epic 15 work, as reflected in the `packages/frameworks/numbering & versioning/` framework package. The framework package already contains the refined versioning policies and strategies developed in fynd.deals Epic 15, Story 1.

**Key Finding:** The framework package (`packages/frameworks/numbering & versioning/`) **already contains** the fynd.deals Epic 15 findings, as documented in `PACKAGE_UPDATE_SUMMARY.md` which states: "Copied current `versioning-policy.md` from `docs/fynd_deals/_design/versioning/`".

---

## 1. Version Schema Pattern

### Pattern: `RC.EPIC.STORY.TASK+BUILD`

**Source:** `packages/frameworks/numbering & versioning/versioning-policy.md`

**Structure:**
- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (e.g., 9)
- **STORY:** Story number within epic (e.g., 21)
- **TASK:** Task number within story (e.g., 3)
- **BUILD:** Build number (increments per release within task)

**Key Characteristics:**
- Enables parallel epic/workstream development
- Maintains clear version tracking at task level
- Provides build-level granularity
- Supports forensic traceability

**Example Progression:**
```
0.9.21.3+1  → First release of Task 3
0.9.21.3+2  → Second release of Task 3 (BUILD increments)
0.9.21.4+1  → Moving to Task 4 (TASK increments, BUILD resets to 1)
```

**Reusability:** ✅ Fully portable - schema is project-agnostic

---

## 2. Epic Renumbering Strategy Pattern

### Pattern: Legacy vs New Format Separation

**Source:** `packages/frameworks/numbering & versioning/versioning-policy.md` (lines 204-226)

**Strategy:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start, clean version space

**Migration Approach:**
1. Complete legacy epics with old format
2. Mark legacy epics as complete
3. Start new epics (10+) with new format exclusively
4. All new work uses new format

**Benefits:**
- Clean separation between legacy and new formats
- No version collisions
- Fresh start for new epics
- Clear branch strategy (`epic/10-*`, `epic/11-*`, etc.)

**Reusability:** ⚠️ **Project-specific** - Each project must define its own epic ranges and migration strategy

**Dev-Kit Adaptation:** ✅ Already adapted - dev-kit uses Epic 1+ with new format exclusively (no legacy range)

---

## 3. Version File Pattern

### Pattern: Component-Based Version File

**Source:** `packages/frameworks/numbering & versioning/versioning-policy.md` (lines 117-135)

**Structure:**
```python
VERSION_RC = 0         # Release candidate
VERSION_EPIC = 9      # Epic number
VERSION_STORY = 21    # Story number
VERSION_TASK = 3      # Task number
VERSION_BUILD = 1     # Build number

# Composite version string
VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
```

**Key Characteristics:**
- Component-based (not single string) for easy manipulation
- Composite string built from components
- `+` character preserved in version string
- Location: `src/\{project\}/version.py` (customizable)

**Current Dev-Kit Implementation:** ✅ Matches pattern exactly (`src/fynd_deals/version.py`)

**Reusability:** ✅ Fully portable - structure is project-agnostic

---

## 4. CHANGELOG Structure Pattern

### Pattern: Two-Layer Changelog System

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 88-166)

### Layer 1: Main Summary Changelog (`CHANGELOG.md`)

**Format:**
- Short date: `DD-MM-YY` format
- Example: `### [0.9.21.3+1] - 01-12-25`
- Purpose: Shows when version was merged into `main`
- Can be updated if merge date changes

**Current Dev-Kit Implementation:** ✅ Matches pattern (`CHANGELOG.md` uses `DD-MM-YY`)

### Layer 2: Detailed Changelog Archive (`CHANGELOG_ARCHIVE/CHANGELOG_v{version}.md`)

**Format:**
- Full timestamp: `YYYY-MM-DD HH:MM:SS UTC` format
- Example: `**Release Date:** 2025-12-01 16:51:30 UTC`
- Purpose: Forensic-level precision for accountability
- **IMMUTABLE** once written

**Current Dev-Kit Implementation:** ✅ Matches pattern (`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md`)

**Reusability:** ✅ Fully portable - structure is project-agnostic

---

## 5. Version Validation Pattern

### Pattern: Branch Context + Changelog Format Validation

**Source:** `packages/frameworks/workflow mgt/scripts/validation/`

**Components:**

1. **Branch Context Validator** (`validate_branch_context.py`)
   - Validates version matches branch/epic
   - Checks version format (old vs new)
   - Validates CHANGELOG entries match branch

2. **Changelog Format Validator** (`validate_changelog_format.py`)
   - Validates version format in CHANGELOG.md
   - Checks date format (old: `YYYY-MM-DD`, new: `DD-MM-YY`)
   - Validates build number >= 1
   - Grandfathers old format (warnings only)

**Key Characteristics:**
- Grandfathered files (old format) pass validation (preserved as-is)
- New files (TASK+BUILD format) require strict enforcement
- Pre-commit hooks enforce format before commit
- CI/CD validates in continuous integration

**Current Dev-Kit Implementation:** ✅ Validators exist and are used in RW

**Reusability:** ✅ Fully portable - scripts are project-agnostic

---

## 6. Canonical Ordering Principle

### Pattern: Version Numbers Are Canonical (Not Timestamps)

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 28-61)

**Fundamental Rule:**
- Version numbers (`RC.EPIC.STORY.TASK+BUILD`) are the canonical ordering metric
- Version ordering is independent of wall-clock time
- Parallel epic development is fully supported
- Changelog orders by version number, not Git commit time

**Example:**
- If `0.9.21.3+2` was committed on 2025-12-01 at 15:30:00 UTC
- And `0.9.20.5+1` was committed on 2025-12-02 at 10:00:00 UTC
- The changelog still orders them as: `0.9.20.5+1` first, then `0.9.21.3+2`
- **The version number determines order, not the actual commit timestamp**

**Current Dev-Kit Implementation:** ✅ CHANGELOG.md orders by version number

**Reusability:** ✅ Fully portable - principle is project-agnostic

---

## 7. Forensic Traceability Grid

### Pattern: Multi-Dimensional Traceability

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 169-290)

**Dimensions:**
1. **Version ↔ Epic/Story/Task** - Version number encodes work hierarchy
2. **Version ↔ Detailed Changelog** - One file per version with full timestamp
3. **Version ↔ Main Summary Changelog** - Summary entry with short date
4. **Version ↔ Kanban Forensic Markers** - Epic/Story documents reference versions
5. **Version ↔ Git History** - Version in commit messages and tags

**Key Characteristics:**
- Complete accountability across all dimensions
- Efficient traceability regardless of commit timing
- Immutability rules preserve historical accuracy

**Current Dev-Kit Implementation:** ✅ All dimensions implemented:
- Version numbers encode Epic/Story/Task
- Detailed changelogs in archive
- Main changelog with summaries
- Kanban docs reference versions
- Git commits include version in messages

**Reusability:** ✅ Fully portable - grid structure is project-agnostic

---

## 8. Immutability Rules Pattern

### Pattern: Historical Metadata Preservation

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 294-338)

**Rules:**
1. **Detailed Changelog Timestamps Are Immutable** - Never edit `**Release Date:**` in existing files
2. **Version Ordering Is Immutable** - Position in changelog fixed by version number
3. **Historical Files Are Preserved As-Is** - Grandfathered files remain unchanged

**Rationale:**
- Preserves forensic record integrity
- Maintains historical accuracy
- Enables reliable traceability

**Current Dev-Kit Implementation:** ✅ Follows immutability rules

**Reusability:** ✅ Fully portable - rules are project-agnostic

---

## 9. Date Format Patterns

### Pattern: Two-Layer Date System

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 88-166)

**Layer 1: Main Changelog**
- Format: `DD-MM-YY` (e.g., `01-12-25`)
- Purpose: Quick reference for merge-to-main date
- Can be updated if merge date changes

**Layer 2: Detailed Changelog**
- Format: `YYYY-MM-DD HH:MM:SS UTC` (e.g., `2025-12-01 16:51:30 UTC`)
- Purpose: Forensic-level precision
- **IMMUTABLE** once written

**Migration Note:**
- Old format used `YYYY-MM-DD` in main changelog
- New format uses `DD-MM-YY` in main changelog
- Old format files are grandfathered

**Current Dev-Kit Implementation:** ✅ Uses new format (`DD-MM-YY` in main, full timestamp in archive)

**Reusability:** ✅ Fully portable - format is project-agnostic

---

## 10. Grandfathering Strategy Pattern

### Pattern: Legacy Format Preservation

**Source:** `packages/frameworks/numbering & versioning/versioning-strategy.md` (lines 341-393)

**Approach:**
- Old format (`RC.EPIC.STORY.PATCH`) automatically grandfathered
- Grandfathered files pass validation (warnings only)
- New files (Epic 10+) require strict enforcement
- Historical files preserved as artifacts

**Cutoff Criteria:**
- Version format: Old schema automatically grandfathered
- Date-based cutoff: Any release before policy introduction date
- Version number: Versions before new format introduction

**Current Dev-Kit Implementation:** ✅ No legacy format (dev-kit started with new format)

**Reusability:** ⚠️ **Project-specific** - Each project must define its own grandfathering cutoff

---

## 11. Validation Script Patterns

### Pattern: Automated Format Enforcement

**Source:** `packages/frameworks/workflow mgt/scripts/validation/`

**Scripts:**
1. `validate_branch_context.py`
   - Validates version matches branch/epic
   - Checks version format (old vs new)
   - Validates CHANGELOG entries match branch

2. `validate_changelog_format.py`
   - Validates version format in CHANGELOG.md
   - Checks date format (old: `YYYY-MM-DD`, new: `DD-MM-YY`)
   - Validates build number >= 1
   - Grandfathers old format (warnings only)

**Integration:**
- Pre-commit hooks enforce format before commit
- CI/CD validates in continuous integration
- Release Workflow runs validators before commit

**Current Dev-Kit Implementation:** ✅ Scripts exist and are integrated into RW

**Reusability:** ✅ Fully portable - scripts are project-agnostic

---

## 12. Version File Location Pattern

### Pattern: Standardized Location

**Source:** `packages/frameworks/numbering & versioning/versioning-policy.md` (line 119)

**Standard Location:** `src/\{project\}/version.py`

**Examples:**
- fynd.deals: `src/fynd_deals/version.py`
- ai-dev-kit: `src/fynd_deals/version.py` (currently - should be `src/vibe_dev_kit/version.py`)

**Note:** Dev-kit currently uses `src/fynd_deals/version.py` which is a legacy path from when it was copied. Should be updated to `src/vibe_dev_kit/version.py` or similar.

**Reusability:** ✅ Portable - path is customizable per project

---

## Summary of Reusable Patterns

### ✅ Fully Portable (Project-Agnostic)

1. **Version Schema:** `RC.EPIC.STORY.TASK+BUILD` format
2. **Version File Structure:** Component-based with composite string
3. **CHANGELOG Structure:** Two-layer system (main + archive)
4. **Canonical Ordering:** Version numbers, not timestamps
5. **Forensic Traceability Grid:** Multi-dimensional traceability
6. **Immutability Rules:** Historical metadata preservation
7. **Date Format Patterns:** Two-layer date system
8. **Validation Scripts:** Automated format enforcement

### ⚠️ Project-Specific (Requires Customization)

1. **Epic Renumbering Strategy:** Each project defines its own epic ranges
2. **Grandfathering Strategy:** Each project defines its own cutoff criteria
3. **Version File Location:** `src/\{project\}/version.py` (customizable path)

---

## Recommendations for Dev-Kit

### 1. Version File Location

**Current:** `src/fynd_deals/version.py`  
**Recommended:** `src/vibe_dev_kit/version.py` or `src/vibe_dev_kit/version.py`

**Action:** Update version file location to reflect dev-kit project name (not fynd.deals)

### 2. Framework Package Completeness

**Status:** ✅ Framework package already contains fynd.deals Epic 15 findings

**Evidence:**
- `packages/frameworks/numbering & versioning/versioning-policy.md` - Complete schema and Epic renumbering strategy
- `packages/frameworks/numbering & versioning/versioning-strategy.md` - Complete forensic traceability system
- `PACKAGE_UPDATE_SUMMARY.md` documents that files were copied from fynd.deals

### 3. Dev-Kit Policy Alignment

**Status:** ✅ Dev-kit versioning policy (`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`) aligns with framework

**Note:** Dev-kit uses Epic 1+ with new format exclusively (no legacy range), which is cleaner than fynd.deals' Epic 1-9 legacy range.

### 4. Validation Scripts

**Status:** ✅ Validators exist and are integrated into Release Workflow

**Location:** `packages/frameworks/workflow mgt/scripts/validation/`

---

## Next Steps

1. ✅ **T002 Complete** - Findings documented
2. **T003** - Update dev-kit versioning policy as canonical SoT (use these findings)
3. **T004** - Align dev-kit version.py and CHANGELOG with framework (update file location)
4. **T005** - Document consumption pattern for other projects (reference these patterns)

---

## References

- `packages/frameworks/numbering & versioning/versioning-policy.md`
- `packages/frameworks/numbering & versioning/versioning-strategy.md`
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `src/fynd_deals/version.py` (current dev-kit version file)

---

_Last updated: 2025-12-02_

