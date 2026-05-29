---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Task 1 Gap Analysis: Dev-Kit Versioning Policy vs Framework Policy

**Task:** E3:S01:T01 – Review dev-kit versioning policy vs framework policy  
**Created:** 2025-12-02  
**Status:** Complete  
**Deliverable:** Gap analysis report

---

## Executive Summary

This document provides a comprehensive gap analysis comparing the dev-kit versioning policy (`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`) with the framework versioning policies (`packages/frameworks/numbering & versioning/versioning-policy.md` and `versioning-strategy.md`).

**Key Finding:** The dev-kit policy is **well-aligned** with the framework but is **missing several important sections** that would make it more comprehensive and consistent with the framework's depth. The framework policies are project-specific (fynd.deals) and include legacy Epic handling, while the dev-kit policy correctly starts fresh with Epic 1+.

---

## 1. Schema Definition Comparison

### Framework Policy (`versioning-policy.md`)

**Schema:** `RC.EPIC.STORY.TASK+BUILD`

**Structure:**
- RC: Release Candidate (0 = development, 1+ = release candidate)
- EPIC: Epic number (e.g., 9)
- STORY: Story number within epic (e.g., 21)
- TASK: Task number within story (e.g., 3)
- BUILD: Build number (increments per release within task)

**Examples:** Uses fynd.deals examples (`0.9.21.3+1`)

### Dev-Kit Policy (`dev-kit-versioning-policy.md`)

**Schema:** `RC.EPIC.STORY.TASK+BUILD` ✅ **MATCHES**

**Structure:** ✅ **MATCHES** (same components)

**Examples:** Uses dev-kit examples (`0.1.1.1+1`) ✅ **CORRECT**

**Gap:** None - Schema definition is consistent

---

## 2. Epic Ranges and Legacy Handling

### Framework Policy

**Epic Ranges:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start

**Rationale:** fynd.deals had existing Epic 1-9 work using old format, needed migration strategy

### Dev-Kit Policy

**Epic Ranges:**
- **Epic 1+:** All dev-kit epics use the full `RC.EPIC.STORY.TASK+BUILD` schema
- **No legacy range** - starts from first principles ✅ **CORRECT**

**Gap:** None - Dev-kit correctly avoids legacy complexity

**Recommendation:** ✅ Dev-kit approach is cleaner and should be documented as the **recommended pattern** for new projects

---

## 3. Version File Location and Format

### Framework Policy

**Location:** `src/fynd_deals/version.py`

**Format:**
```python
VERSION_RC = 0         # Release candidate
VERSION_EPIC = 9      # Epic number
VERSION_STORY = 21    # Story number
VERSION_TASK = 3      # Task number
VERSION_BUILD = 1     # Build number

VERSION_STRING = "0.9.21.3+1"
```

### Dev-Kit Policy

**Location:** `src/fynd_deals/version.py` (temporary path; may be renamed)

**Format:** ✅ **MATCHES** (component-based structure)

**Gap:** ⚠️ **Location issue** - Dev-kit uses `src/fynd_deals/version.py` which is a legacy path from fynd.deals

**Recommendation:** Update to `src/vibe_dev_kit/version.py` or similar dev-kit-specific path

---

## 4. CHANGELOG Format

### Framework Policy

**Two-Layer System:**

1. **Main Changelog (`CHANGELOG.md`):**
   - Format: `### [0.9.21.3+1] - 01-12-25`
   - Date: `DD-MM-YY` (short date for merge-to-main)
   - Link to detailed changelog

2. **Detailed Changelog (`CHANGELOG_ARCHIVE/CHANGELOG_v{version}.md`):**
   - Format: `**Release Date:** 2025-12-01 16:51:30 UTC`
   - Full timestamp: `YYYY-MM-DD HH:MM:SS UTC` (immutable)
   - Epic/Story/Task information
   - Detailed change descriptions

### Dev-Kit Policy

**CHANGELOG Format:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ Dev-kit already uses two-layer system:
- `CHANGELOG.md` with `DD-MM-YY` format
- `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v*.md` with full timestamps

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't document CHANGELOG format requirements

**Recommendation:** Add CHANGELOG format section to dev-kit policy, referencing framework pattern

---

## 5. Canonical Ordering Principle

### Framework Policy (`versioning-strategy.md`)

**Core Principle:** Version numbers are canonical (not timestamps)

**Key Points:**
- Version ordering is independent of wall-clock time
- Parallel epic development fully supported
- Changelog orders by version number, not Git commit time
- Enables true parallel development

### Dev-Kit Policy

**Canonical Ordering:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ Dev-kit CHANGELOG orders by version number

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't explain canonical ordering principle

**Recommendation:** Add section explaining canonical ordering principle

---

## 6. Two-Layer Timestamp System

### Framework Policy (`versioning-strategy.md`)

**Layer 1: Main Summary Changelog**
- Format: `DD-MM-YY` (short date)
- Purpose: Shows when version was merged into `main`
- Can be updated if merge date changes

**Layer 2: Detailed Changelog Archive**
- Format: `YYYY-MM-DD HH:MM:SS UTC` (full timestamp)
- Purpose: Forensic-level precision
- **IMMUTABLE** once written

### Dev-Kit Policy

**Two-Layer Timestamp System:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ Dev-kit uses both layers correctly

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't explain two-layer timestamp system

**Recommendation:** Add section explaining two-layer timestamp system and immutability rules

---

## 7. Forensic Traceability Grid

### Framework Policy (`versioning-strategy.md`)

**Five Dimensions:**
1. Version ↔ Epic/Story/Task (version number encodes hierarchy)
2. Version ↔ Detailed Changelog (one file per version)
3. Version ↔ Main Summary Changelog (summary entry)
4. Version ↔ Kanban Forensic Markers (Epic/Story documents)
5. Version ↔ Git History (version in commit messages)

### Dev-Kit Policy

**Forensic Traceability:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ All dimensions implemented in dev-kit

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't document traceability grid

**Recommendation:** Add section documenting forensic traceability grid

---

## 8. Immutability Rules

### Framework Policy (`versioning-strategy.md`)

**Three Rules:**
1. **Detailed Changelog Timestamps Are Immutable** - Never edit `**Release Date:**` in existing files
2. **Version Ordering Is Immutable** - Position in changelog fixed by version number
3. **Historical Files Are Preserved As-Is** - Grandfathered files remain unchanged

### Dev-Kit Policy

**Immutability Rules:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ Dev-kit follows immutability rules in practice

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't document immutability rules

**Recommendation:** Add section documenting immutability rules

---

## 9. Version Validation

### Framework Policy

**Validation Scripts:**
- `scripts/validation/validate_branch_context.py` - Validates version matches branch/epic
- `scripts/validation/validate_changelog_format.py` - Validates changelog format

**Validation Behavior:**
- Grandfathered files (old format) pass validation (warnings only)
- New files (TASK+BUILD format) require strict enforcement
- Pre-commit hooks enforce format before commit
- CI/CD validates in continuous integration

### Dev-Kit Policy

**Version Validation:** ❌ **NOT DOCUMENTED**

**Current Implementation:** ✅ Dev-kit uses validation scripts in Release Workflow

**Gap:** ⚠️ **Missing documentation** - Dev-kit policy doesn't document validation requirements

**Recommendation:** Add section documenting validation scripts and requirements

---

## 10. Progression Rules

### Framework Policy

**Progression Examples:**
- Working on Epic 9, Story 21, Task 3: `0.9.21.3+1`, `0.9.21.3+2`, `0.9.21.3+3`
- Moving to Task 4: `0.9.21.4+1`, `0.9.21.4+2`

**Rules:**
- TASK is stable per Task
- BUILD increments for each release on the same Task
- Moving to a new Task: TASK changes, BUILD resets to 1
- RC increments when promoting to release candidate

### Dev-Kit Policy

**Progression Rules:** ✅ **DOCUMENTED** (Section 6)

**Examples:** Uses dev-kit examples (`0.1.1.1+1`, `0.1.1.2+1`)

**Gap:** None - Progression rules are well-documented

---

## 11. Relationship to Framework Policies

### Framework Policy

**References:**
- Links to `versioning-strategy.md`
- Links to Kanban Governance Policy
- Links to implementation files

### Dev-Kit Policy

**Relationship:** ✅ **DOCUMENTED** (Section 7)

**References:**
- Links to framework policies
- Explains specialization relationship

**Gap:** None - Relationship is well-documented

---

## 12. Project-Specific Content

### Framework Policy

**Project-Specific:**
- References "fynd.deals" throughout
- Uses Epic 9, Story 21 examples
- Includes Epic 1-9 legacy handling
- References fynd.deals Kanban structure

### Dev-Kit Policy

**Project-Specific:**
- References "AI Dev Kit" ✅
- Uses Epic 1-4 examples ✅
- No legacy handling (clean start) ✅
- References dev-kit Kanban structure ✅

**Gap:** None - Dev-kit correctly adapts framework to its context

---

## Summary of Gaps

### Critical Gaps (Must Address)

1. ❌ **CHANGELOG Format** - Not documented in dev-kit policy
2. ❌ **Canonical Ordering Principle** - Not documented
3. ❌ **Two-Layer Timestamp System** - Not documented
4. ❌ **Forensic Traceability Grid** - Not documented
5. ❌ **Immutability Rules** - Not documented
6. ❌ **Version Validation** - Not documented

### Minor Gaps (Should Address)

1. ⚠️ **Version File Location** - Uses legacy `src/fynd_deals/version.py` path
2. ⚠️ **Missing Strategy Document** - Dev-kit doesn't have a separate strategy document (could reference framework)

### Strengths

1. ✅ **Clean Epic Range** - No legacy complexity
2. ✅ **Correct Schema** - Matches framework exactly
3. ✅ **Good Progression Examples** - Uses dev-kit-specific examples
4. ✅ **Clear Relationship** - Documents specialization relationship

---

## Recommendations

### High Priority

1. **Add CHANGELOG Format Section** to dev-kit policy
   - Document two-layer system
   - Reference framework pattern
   - Include dev-kit-specific examples

2. **Add Canonical Ordering Section** to dev-kit policy
   - Explain version numbers are canonical
   - Document parallel development support
   - Reference framework strategy document

3. **Add Two-Layer Timestamp System Section** to dev-kit policy
   - Document main changelog (short date)
   - Document detailed changelog (full timestamp)
   - Explain immutability rules

4. **Add Forensic Traceability Grid Section** to dev-kit policy
   - Document five dimensions
   - Reference framework strategy document
   - Include dev-kit-specific examples

5. **Add Immutability Rules Section** to dev-kit policy
   - Document three rules
   - Reference framework strategy document
   - Explain rationale

6. **Add Version Validation Section** to dev-kit policy
   - Document validation scripts
   - Explain validation behavior
   - Reference framework scripts

### Medium Priority

1. **Update Version File Location** in dev-kit policy
   - Change from `src/fynd_deals/version.py` to `src/vibe_dev_kit/version.py`
   - Update actual file location
   - Update all references

2. **Consider Strategy Document** for dev-kit
   - Could create `dev-kit-versioning-strategy.md` referencing framework
   - Or enhance dev-kit policy to include strategy content
   - Or simply reference framework strategy document

### Low Priority

1. **Enhance Examples** in dev-kit policy
   - Add more progression examples
   - Add parallel epic examples
   - Add release candidate examples

---

## Alignment Assessment

### Overall Alignment: **GOOD** ✅

**Strengths:**
- Schema definition matches perfectly
- Progression rules are correct
- Relationship to framework is clear
- No legacy complexity

**Areas for Improvement:**
- Missing several important sections from framework
- Version file location needs update
- Could benefit from more comprehensive documentation

**Recommendation:** Dev-kit policy should be **enhanced** to include all framework patterns while maintaining its clean, project-specific approach. The framework policies serve as the **canonical source of truth**, and the dev-kit policy should reference and align with them while documenting dev-kit-specific adaptations.

---

## Next Steps

1. ✅ **T001 Complete** - Gap analysis documented
2. **T003** - Update dev-kit versioning policy as canonical SoT (using this gap analysis)
3. **T004** - Align dev-kit version.py and CHANGELOG with framework (update file location)
4. **T005** - Document consumption pattern for other projects

---

## References

- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- `packages/frameworks/numbering & versioning/versioning-policy.md`
- `packages/frameworks/numbering & versioning/versioning-strategy.md`
- `packages/frameworks/numbering & versioning/README.md`
- `src/fynd_deals/version.py`
- `CHANGELOG.md`
- `docs/changelog-and-release-notes/changelog-archive/`

---

_Last updated: 2025-12-02_

