---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – Dev Kit Alignment with Versioning Framework

**Status:** COMPLETE
**Priority:** HIGH
**Estimated Effort:** [TBD]
**Created:** 2025-12-02
**Last updated:** 2025-12-02 (v0.3.1.6+1 – Task 6 complete: Cursorrules abstracted (removed hardcoded version numbers))
**Version:** v0.3.1.6+1
**Code:** E3S01

---

## Overview

Ensure the dev kit's own versioning policy, version file, and docs align cleanly with the generic versioning framework. This story ensures that `ai-dev-kit` serves as the **single point of truth (SoT)** for versioning policies and strategies, which other projects can copy and adapt.

---

## Goal

Make sure the dev kit's versioning implementation demonstrates best practices and serves as the canonical reference for how to adopt the `RC.EPIC.STORY.TASK+BUILD` schema in new projects.

---

## Task Checklist

- [x] **E3:S01:T01 – Review dev-kit versioning policy vs framework policy** ✅ COMPLETE (v0.3.1.1+2)
- [x] **E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work** ✅ COMPLETE (v0.3.1.2+1)
- [x] **E3:S01:T03 – Update dev-kit versioning policy as canonical SoT** ✅ COMPLETE (v0.3.1.3+1)
- [x] **E3:S01:T04 – Align dev-kit version.py and CHANGELOG with framework** ✅ COMPLETE (v0.3.1.4+1)
- [x] **E3:S01:T05 – Document consumption pattern for other projects** ✅ COMPLETE (v0.3.1.5+1)
- [x] **E3:S01:T06 – Make .cursorrules abstract (remove hardcoded version numbers)** ✅ COMPLETE (v0.3.1.6+1)

---

## Tasks

### E3:S01:T01 – Review dev-kit versioning policy vs framework policy ✅ COMPLETE

**Input:** Current dev-kit and framework versioning files  
**Deliverable:** Gap analysis report ✅ **DELIVERED**  
**Dependencies:** None  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Gap analysis documented in `T01-gap-analysis-report.md`

**Approach:**
1. ✅ Reviewed `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
2. ✅ Reviewed `packages/frameworks/numbering & versioning/versioning-policy.md`
3. ✅ Reviewed `packages/frameworks/numbering & versioning/versioning-strategy.md`
4. ✅ Compared dev-kit policy with framework policy
5. ✅ Documented gaps and inconsistencies

**Key Findings:**
- ✅ Schema definition matches perfectly
- ✅ Progression rules are correct
- ❌ Missing 6 critical sections: CHANGELOG format, canonical ordering, two-layer timestamps, traceability grid, immutability rules, validation
- ⚠️ Version file location uses legacy path (`src/fynd_deals/version.py`)
- ✅ Dev-kit correctly avoids legacy complexity (clean Epic 1+ start)

**Deliverable:** See [`T01-gap-analysis-report.md`](Story-001-dev-kit-alignment-with-versioning-framework/T01-gap-analysis-report.md) for complete gap analysis.

---

### E3:S01:T02 – Ingest versioning findings from fynd.deals Epic 15 work ✅ COMPLETE

**Input:** fynd.deals Epic 15 versioning documentation  
**Deliverable:** Summary of reusable patterns and findings ✅ **DELIVERED**  
**Dependencies:** E3:S01:T01  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Findings documented in `T02-fynd-deals-epic15-findings.md`

**Approach:**
1. ✅ Reviewed framework package versioning files (already contain fynd.deals Epic 15 findings)
2. ✅ Analyzed versioning patterns from `packages/frameworks/numbering & versioning/`
3. ✅ Extracted reusable patterns (12 key patterns identified)
4. ✅ Documented findings and recommendations
5. ✅ Created findings document: `T02-fynd-deals-epic15-findings.md`

**Key Finding:** The framework package (`packages/frameworks/numbering & versioning/`) **already contains** the fynd.deals Epic 15 findings, as documented in `PACKAGE_UPDATE_SUMMARY.md`.

**Patterns Extracted:**
- ✅ Version schema: `RC.EPIC.STORY.TASK+BUILD` format
- ✅ Epic renumbering strategy (project-specific, but pattern documented)
- ✅ Version validation: Branch context checks, changelog format validation
- ✅ CHANGELOG structure: Two-layer system (main + archive)
- ✅ Date formats: New format uses `DD-MM-YY`, old format uses `YYYY-MM-DD`
- ✅ Canonical ordering: Version numbers, not timestamps
- ✅ Forensic traceability: Multi-dimensional grid
- ✅ Immutability rules: Historical metadata preservation

**Deliverable:** See [`T02-fynd-deals-epic15-findings.md`](Story-001-dev-kit-alignment-with-versioning-framework/T02-fynd-deals-epic15-findings.md) for complete findings document.

---

### E3:S01:T03 – Update dev-kit versioning policy as canonical SoT ✅ COMPLETE

**Input:** Findings from T001 and T002  
**Deliverable:** Updated canonical versioning policy ✅ **DELIVERED**  
**Dependencies:** E3:S01:T01, E3:S01:T02  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Dev-kit versioning policy updated with all missing sections

**Approach:**
1. ✅ Enhanced `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` with:
   - CHANGELOG Format section (two-layer system)
   - Canonical Ordering Principle section
   - Two-Layer Timestamp System section
   - Forensic Traceability Grid section (5 dimensions)
   - Immutability Rules section (3 rules)
   - Version Validation section
   - Enhanced Relationship to Framework Policies section
   - Status and Maintenance section
   - Comprehensive References section

2. ✅ Documented relationship between framework policy (SoT) and dev-kit adaptations
3. ✅ Updated policy status from "Draft" to "Active"

**Key Sections Added:**
- ✅ CHANGELOG Format (Section 7) - Two-layer system documented
- ✅ Canonical Ordering Principle (Section 8) - Version numbers are canonical
- ✅ Two-Layer Timestamp System (Section 9) - Main vs detailed changelog timestamps
- ✅ Forensic Traceability Grid (Section 10) - 5 dimensions documented
- ✅ Immutability Rules (Section 11) - 3 rules documented
- ✅ Version Validation (Section 12) - Validation scripts and behavior documented

**Files Updated:**
- ✅ `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Enhanced with all missing sections
- ✅ Policy status updated to "Active"

**Note:** Framework policies (`packages/frameworks/numbering & versioning/`) remain the canonical SoT. Dev-kit policy now comprehensively documents how the framework is applied in dev-kit context, referencing framework for detailed explanations.

---

### E3:S01:T04 – Align dev-kit version.py and CHANGELOG with framework

**Input:** Updated versioning policy from T003
**Deliverable:** Updated dev-kit version file and CHANGELOG
**Dependencies:** E3:S01:T03
**Blocker:** None

**Status:** ✅ **COMPLETE** - Version file and CHANGELOG aligned with framework

**Approach:**
1. ✅ Enhanced `src/fynd_deals/version.py`:
   - Added comprehensive docstring explaining schema and dev-kit versioning approach
   - Added validation notes documenting requirements
   - Uses dev-kit Epic/Story/Task numbers (Epic 3, Story 1, Task 3)
   - Follows `RC.EPIC.STORY.TASK+BUILD` schema exactly
   - Documents canonical ordering principle
   - References dev-kit versioning policy and framework policy

2. ✅ Verified `CHANGELOG.md` follows framework format:
   - Uses new format: `## [version] - DD-MM-YY` ✅
   - Archive entries in `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md` ✅
   - Consistent structure and metadata ✅
   - Date format uses new format (`DD-MM-YY`) ✅

3. ✅ Aligned with framework validation scripts:
   - Version file structure matches framework pattern
   - CHANGELOG format validated by framework scripts
   - File location noted as legacy path (acceptable for now)

**Files Updated:**
- ✅ `src/fynd_deals/version.py` - Enhanced with documentation and validation notes
- ✅ `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Updated version file location note

**Key Alignments:**
- ✅ Version schema matches framework exactly
- ✅ Validation notes match framework requirements
- ✅ CHANGELOG format matches framework conventions
- ✅ Date format uses new format (`DD-MM-YY`)
- ✅ Version file documents dev-kit versioning approach
- ⚠️ File location uses legacy path (acceptable, documented for future consideration)

---

### E3:S01:T05 – Document consumption pattern for other projects ✅ COMPLETE

**Input:** Updated policies and version file from T003-T004  
**Deliverable:** Consumption documentation ✅ **DELIVERED**  
**Dependencies:** E3:S01:T03, E3:S01:T04  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Consumption pattern documented in README and IMPLEMENTATION_GUIDE

**Approach:**
1. ✅ Enhanced `packages/frameworks/numbering & versioning/README.md`:
   - Added comprehensive "Consumption Pattern for Other Projects" section
   - Documented copy vs reference pattern (CRITICAL: copy, don't reference)
   - Explained customization boundaries (what can be customized vs what must stay)
   - Documented update process (how to stay aligned with framework updates)
   - Added example setup workflow
   - Clarified SoT relationship (ai-dev-kit is canonical source)

2. ✅ Enhanced `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md`:
   - Added "CRITICAL: Copy, Don't Reference" section at top
   - Added comprehensive "Consumption Pattern for Other Projects" section
   - Documented copy vs reference pattern with examples
   - Explained why copying is required (independence, customization, control, stability)
   - Documented customization process step-by-step
   - Added example complete setup workflow
   - Clarified framework as single source of truth

**Key Documentation Points:**
- ✅ **Copy, don't reference:** Projects must copy files, not link to `ai-dev-kit`
- ✅ **Customization boundaries:** What can be customized (Epic ranges, paths) vs what must stay (schema, validation)
- ✅ **Update process:** How to pull framework updates into projects (monitor, review, selectively adopt)
- ✅ **SoT relationship:** `ai-dev-kit` is the canonical source, projects adapt for their context

**Files Updated:**
- ✅ `packages/frameworks/numbering & versioning/README.md` - Added consumption section
- ✅ `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md` - Enhanced with consumption pattern

---

### E3:S01:T06 – Make .cursorrules abstract (remove hardcoded version numbers) ✅ COMPLETE

**Input:** Findings from T002 (versioning pattern analysis)  
**Deliverable:** Updated `.cursorrules` template without hardcoded versions ✅ **DELIVERED**  
**Dependencies:** E3:S01:T02  
**Blocker:** None

**Status:** ✅ **COMPLETE** - Cursorrules RW trigger section abstracted with template placeholders

**Approach:**
1. ✅ Analyzed `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`
2. ✅ Identified hardcoded version numbers and project-specific paths:
   - Hardcoded paths: `src/fynd_deals/version.py`, `knowledge/fynd_deals/Kanban/`
   - Hardcoded examples: `0.15.1.4+2`, `epic/15`, `epic/10-fastapi-migration`
3. ✅ Replaced with abstract templates:
   - File paths: `src/\{project\}/version.py`, `\{kanban_path\}/epics/Epic-\{epic\}.md`
   - Generic examples: `0.\{epic\}.\{story\}.\{task\}+\{build\}`, `epic/\{n\}`
   - Schema calculation examples showing pattern (Epic N → `0.N.S.T+1`)
4. ✅ Added version calculation examples section
5. ✅ Added reference documentation section pointing to canonical policies
6. ✅ Updated README.md with abstracted examples

**Problem Solved:**
- ✅ Hardcoded version numbers removed (replaced with schema calculation examples)
- ✅ Project-specific paths replaced with template placeholders
- ✅ Examples now teach the pattern rather than listing stale instances
- ✅ References canonical policy documents instead of duplicating schema

**Files Updated:**
- ✅ `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md` - Abstracted all hardcoded references
- ✅ `packages/frameworks/workflow mgt/README.md` - Updated with abstracted examples

**Key Changes:**
- ✅ File paths use template placeholders (`\{project\}`, `\{kanban_path\}`, `{scripts_path}`)
- ✅ Version examples use generic schema calculation (`0.\{epic\}.\{story\}.\{task\}+\{build\}`)
- ✅ Branch examples use generic patterns (`epic/\{n\}`, `epic/\{n\}-\{description\}`)
- ✅ Added version calculation examples showing pattern (Epic N → `0.N.S.T+1`)
- ✅ References canonical policy documents (`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`)
- ✅ Added customization instructions for projects copying the template

**Validation:**
- ✅ No project-specific version numbers remain (verified with grep)
- ✅ Examples are generic and teach the pattern
- ✅ Schema explanations reference canonical policy documents
- ✅ File remains useful without requiring updates as work progresses

---

## Acceptance Criteria

- [x] Dev-kit versioning policy is the canonical SoT ✅
- [x] Policies capture complete version schema and validation rules ✅
- [x] Dev-kit version.py and CHANGELOG align with framework ✅
- [x] Consumption pattern is clearly documented ✅
- [x] Framework and project implementations are clearly distinguished ✅

---

## Dependencies

**Coordinates With:**
- Epic 4: Kanban Framework (for Kanban + versioning integration)
- Epic 2: Workflow Management Framework (for RW + versioning integration)
- Epic 1: AI Dev Kit Core (for dev-kit versioning decisions)

---

## References

- `packages/frameworks/numbering & versioning/README.md`
- `packages/frameworks/numbering & versioning/versioning-policy.md`
- `packages/frameworks/numbering & versioning/versioning-strategy.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
- **T001 Gap Analysis:** [`T01-gap-analysis-report.md`](Story-001-dev-kit-alignment-with-versioning-framework/T01-gap-analysis-report.md)
- **T002 Findings:** [`T02-fynd-deals-epic15-findings.md`](Story-001-dev-kit-alignment-with-versioning-framework/T02-fynd-deals-epic15-findings.md)
- Source: `fynd.deals/docs/fynd_deals/_design/versioning/versioning-*.md` (findings already ingested into framework package)

---

_Last updated: 2025-12-02 (v0.3.1.2+1 – Task 2 complete)_
