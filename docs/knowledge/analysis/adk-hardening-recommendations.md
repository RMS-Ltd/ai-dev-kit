---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADK Framework Hardening Recommendations

**Purpose:** Comprehensive hardening recommendations based on ADK implementation analysis findings  
**Analysis Date:** 2025-12-18  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T01 – Comprehensive ADK implementation analysis across all projects

**Data Sources:**
- 10 project analysis reports (9 client implementations + ai-dev-kit source)
- Meta-analysis: Executive Summary
- Meta-analysis: Good/Bad Practice Catalog
- Drift analysis, mashup issues, pattern identification

---

## Executive Summary

This document provides **hardening recommendations** to improve ADK framework robustness, prevent implementation issues, and reduce framework drift. Recommendations are prioritized by severity and impact, with immediate actions addressing critical issues identified in the analysis.

**Key Recommendations:**
- **CRITICAL:** Fix Epic 9 mismatch in ai-dev-kit source (root cause of Epic mashup)
- **CRITICAL:** Add installer validation to prevent Epic mashup
- **HIGH:** Add source repository frameworks (`.cursorrules`, `rw-config.yaml`)
- **HIGH:** Improve installation instructions
- **MEDIUM:** Promote config-driven approach, lifecycle metadata

---

## 1. Immediate Actions (CRITICAL)

### 1.1 Fix Epic 9 Mismatch in ai-dev-kit Source

**Priority:** CRITICAL  
**Impact:** Root cause of Epic mashup affecting 30% of client projects  
**Effort:** Medium (requires Epic renumbering and reference updates)

**Problem:**
- ai-dev-kit's Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication"
- Projects copying ai-dev-kit's actual Kanban get wrong Epic 9
- Causes Epic mashup in 30% of client projects

**Required Actions:**
1. Rename ai-dev-kit's Epic 9 "Book Related Work" to Epic 24+ (project-specific range)
2. Update all Epic 9 references in ai-dev-kit source:
   - Epic document: `Epic-9.md` → `Epic-24.md` (or appropriate number)
   - Story documents: Update all Story references
   - Task documents: Update all Task references
   - Kanban board: Update Epic 9 entry
   - Any cross-references
3. Document Epic 24+ as project-specific range (not canonical)
4. Update installation instructions to clarify project-specific epics start at Epic 24+

**Success Criteria:**
- Epic 9 in ai-dev-kit source renamed to Epic 24+
- All references updated
- No Epic 9 "Book Related Work" in source
- Installation instructions updated

**Dependencies:** None (can start immediately)

---

### 1.2 Add Installer Validation

**Priority:** CRITICAL  
**Impact:** Prevents Epic mashup and framework drift  
**Effort:** Medium (requires installer script updates)

**Problem:**
- No validation to prevent Epic mashup during installation
- No checks for canonical vs project-specific epic conflicts
- Projects can install incorrect structures

**Required Actions:**
1. Add Epic numbering validation to installer:
   - Check for Epic 9 "Book Related Work" in non-book projects
   - Validate Epic 1-23 are canonical, Epic 24+ are project-specific
   - Warn if copying ai-dev-kit's actual Kanban
   - Prevent installation if Epic conflicts detected
2. Add validation for canonical vs project-specific epic conflicts
3. Add validation for version file path
4. Add validation for KB structure

**Success Criteria:**
- Installer validates Epic numbering
- Installer prevents Epic mashup
- Installer warns about copying actual Kanban
- Validation catches conflicts before installation

**Dependencies:** None (can start immediately)

---

### 1.3 Add Source Repository Frameworks

**Priority:** HIGH  
**Impact:** Source can serve as reference implementation  
**Effort:** Small (add missing files)

**Problem:**
- ai-dev-kit source missing `.cursorrules` file
- ai-dev-kit source missing `rw-config.yaml` in project root
- ai-dev-kit source uses legacy version file path
- Source cannot demonstrate own frameworks

**Required Actions:**
1. **Add `.cursorrules` File:**
   - Create `.cursorrules` file in project root
   - Include comprehensive 12-step RW trigger section
   - Include PVW trigger section (optional)
   - Include document lifecycle management section
   - Include Git workflow restrictions section
   - Serve as reference implementation

2. **Add `rw-config.yaml` to Project Root:**
   - Create `rw-config.yaml` in project root (not just example)
   - Configure for ai-dev-kit project structure
   - Use canonical paths
   - Serve as reference implementation

3. **Migrate Version File Path:**
   - Move `src/fynd_deals/version.py` to `src/ai_dev_kit/version.py`
   - Update all references
   - Update workflows and scripts

**Success Criteria:**
- `.cursorrules` file exists in project root
- `rw-config.yaml` exists in project root
- Version file at canonical path
- Source serves as reference implementation

**Dependencies:** None (can start immediately)

---

## 2. Short-Term Actions (HIGH)

### 2.1 Improve Installation Instructions

**Priority:** HIGH  
**Impact:** Reduces installation confusion and Epic mashup  
**Effort:** Medium (documentation updates)

**Problem:**
- Unclear distinction between canonical templates and ai-dev-kit's actual Kanban
- No clear guidance on which to use
- Installation examples may show ai-dev-kit's actual Kanban

**Required Actions:**
1. **Clearly Distinguish Templates from Actual Kanban:**
   - Document canonical templates location
   - Document ai-dev-kit's actual Kanban location
   - Explain difference clearly
   - Warn against copying actual Kanban

2. **Document Epic Mashup Prevention:**
   - Explain Epic mashup issue
   - Document prevention steps
   - Provide examples of correct installation
   - Provide examples of incorrect installation (what to avoid)

3. **Provide Clear Installation Examples:**
   - Step-by-step installation guide
   - Example projects (tiny, small, ambitious)
   - Common mistakes and how to avoid them

**Success Criteria:**
- Installation instructions clearly distinguish templates from actual Kanban
- Epic mashup prevention documented
- Clear installation examples provided
- Common mistakes documented

**Dependencies:** 1.1 (Fix Epic 9 mismatch) - should be done first

---

### 2.2 Promote Config-Driven Approach

**Priority:** HIGH  
**Impact:** Reduces hardcoded paths, improves customization  
**Effort:** Medium (documentation and examples)

**Problem:**
- Only 30% of projects use `rw-config.yaml`
- 50% of projects use hardcoded paths in `.cursorrules`
- Cannot customize without editing `.cursorrules`

**Required Actions:**
1. **Better Documentation:**
   - Document `rw-config.yaml` structure
   - Document config-driven benefits
   - Provide config examples
   - Document migration from hardcoded paths

2. **Simpler Examples:**
   - Minimal `rw-config.yaml` example
   - Common configuration patterns
   - Project-specific customization examples

3. **Clearer Benefits:**
   - Explain why config-driven is better
   - Show customization without code changes
   - Demonstrate flexibility

**Success Criteria:**
- `rw-config.yaml` documentation comprehensive
- Simple examples provided
- Benefits clearly explained
- Adoption increases from 30% to 100%

**Dependencies:** 1.3 (Add rw-config.yaml to source) - should be done first

---

## 3. Long-Term Actions (MEDIUM)

### 3.1 Promote Lifecycle Metadata

**Priority:** MEDIUM  
**Impact:** Improves document management  
**Effort:** Small (documentation and templates)

**Problem:**
- Only 60% of projects use lifecycle metadata
- 40% of projects missing document expiration tracking
- No automated housekeeping

**Required Actions:**
1. **Make Lifecycle Metadata Required:**
   - Update templates to include lifecycle metadata
   - Document lifecycle metadata as required
   - Provide lifecycle metadata examples

2. **Demonstrate Benefits:**
   - Show automated expiration
   - Show housekeeping automation
   - Show document management benefits

3. **Provide Templates:**
   - Lifecycle metadata template
   - Document structure template with lifecycle
   - Examples of lifecycle usage

**Success Criteria:**
- Lifecycle metadata required in templates
- Benefits demonstrated
- Adoption increases from 60% to 100%

**Dependencies:** None

---

### 3.2 Support Legacy Patterns

**Priority:** MEDIUM  
**Impact:** Enables migration, reduces friction  
**Effort:** Medium (documentation and tools)

**Problem:**
- Projects using legacy patterns (space in Epic names, 3-digit task padding, etc.)
- No migration paths documented
- No conversion tools

**Required Actions:**
1. **Document Migration Paths:**
   - Document legacy patterns
   - Document canonical patterns
   - Provide migration guides
   - Document backward compatibility

2. **Provide Conversion Tools:**
   - Scripts to convert legacy to canonical
   - Epic naming conversion
   - Task padding conversion
   - Directory structure conversion

3. **Support During Transition:**
   - Support both legacy and canonical during migration
   - Gradual migration approach
   - Validation for both formats

**Success Criteria:**
- Migration paths documented
- Conversion tools provided
- Legacy patterns supported during transition

**Dependencies:** None

---

## 4. Hardening Priority Matrix

| Action | Priority | Impact | Effort | Dependencies |
|--------|----------|--------|--------|---------------|
| Fix Epic 9 mismatch | CRITICAL | CRITICAL | Medium | None |
| Add installer validation | CRITICAL | CRITICAL | Medium | 1.1 |
| Add source frameworks | HIGH | HIGH | Small | None |
| Improve installation instructions | HIGH | HIGH | Medium | 1.1 |
| Promote config-driven | HIGH | HIGH | Medium | 1.3 |
| Promote lifecycle metadata | MEDIUM | MEDIUM | Small | None |
| Support legacy patterns | MEDIUM | MEDIUM | Medium | None |

---

## 5. Implementation Plan

### Phase 1: Critical Fixes (Week 1)

1. Fix Epic 9 mismatch in ai-dev-kit source
2. Add installer validation
3. Add source repository frameworks

### Phase 2: Documentation Improvements (Week 2)

4. Improve installation instructions
5. Promote config-driven approach

### Phase 3: Framework Enhancements (Week 3-4)

6. Promote lifecycle metadata
7. Support legacy patterns

---

## 6. Success Metrics

### 6.1 Epic Mashup Reduction

**Current:** 30% of projects (3/10)  
**Target:** 0% of new installations  
**Metric:** Track Epic mashup in new installations

### 6.2 Config-Driven Adoption

**Current:** 30% of projects (3/10)  
**Target:** 100% of new installations  
**Metric:** Track `rw-config.yaml` usage

### 6.3 Lifecycle Metadata Adoption

**Current:** 60% of projects (6/10)  
**Target:** 100% of new installations  
**Metric:** Track lifecycle metadata usage

---

## 7. Related Documentation

- **Executive Summary:** `meta-analysis-executive-summary.md`
- **Good/Bad Practices:** `meta-analysis-good-bad-practices.md`
- **Drift Analysis:** `adk-drift-analysis.md`
- **Mashup Issues:** `adk-mashup-issues.md`
- **Implementation Patterns:** `adk-implementation-patterns.md`

---

**Last Updated:** 2025-12-18T00:00:00Z  
**Version:** 1.0.0  
**Status:** COMPLETE

