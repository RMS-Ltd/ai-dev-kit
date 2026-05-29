---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADK Mashup Issues Catalog

**Purpose:** Comprehensive catalog of mashup issues identified across ADK implementations  
**Analysis Date:** 2025-12-18  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T01 – Comprehensive ADK implementation analysis across all projects

**Data Sources:**
- 10 project analysis reports (9 client implementations + ai-dev-kit source)
- Meta-analysis: Convergence/Divergence Maps
- Meta-analysis: Good/Bad Practice Catalog
- Pattern/anti-pattern identification

---

## Executive Summary

This document catalogs **mashup issues** - problems caused by mixing or incorrectly combining ADK canonical structures with project-specific or incorrect structures. The primary mashup issue is **Epic mashup**, affecting 30% of client projects.

**Key Findings:**
- **Epic Mashup:** 30% of projects (3/10) - CRITICAL issue
- **Root Cause:** Epic 9 mismatch in ai-dev-kit source ("Book Related Work" vs canonical "User Management and Authentication")
- **Impact:** Projects have inappropriate epics, Epic numbering conflicts, framework drift
- **Prevention:** Fix Epic 9 mismatch in source, add installer validation, improve installation instructions

---

## 1. Epic Mashup Issue

### 1.1 Problem Description

**Issue:** Projects copying ai-dev-kit's actual Kanban structure instead of using canonical templates, resulting in Epic mashup.

**Frequency:** 30% (3/10 projects)

**Affected Projects:**
1. `been-there`
2. `dev-toolkit`
3. `agentic-ide-rules`

**Symptoms:**
- Projects have Epic 9 "Book Related Work" instead of canonical Epic 9 "User Management and Authentication"
- Epic numbering conflicts with canonical structure
- Projects have inappropriate epics for their domain
- Cannot use canonical templates

---

### 1.2 Root Cause Analysis

**Primary Root Cause: Epic 9 Mismatch in ai-dev-kit Source**

**Problem:**
- ai-dev-kit's Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication"
- When projects copy ai-dev-kit's actual Kanban structure, they get wrong Epic 9
- No clear distinction between canonical templates and ai-dev-kit's actual Kanban

**Evidence:**
- All 3 affected projects have Epic 9 "Book Related Work"
- All 3 projects manually copied ai-dev-kit's actual Kanban
- ai-dev-kit source has Epic 9 "Book Related Work" (project-specific, not canonical)

**Impact Chain:**
1. ai-dev-kit source has Epic 9 "Book Related Work" (project-specific)
2. Projects copy ai-dev-kit's actual Kanban structure
3. Projects get Epic 9 "Book Related Work" instead of canonical Epic 9
4. Epic mashup occurs (30% of projects affected)

---

### 1.3 Contributing Factors

**Factor 1: Unclear Installation Instructions**
- Projects don't understand difference between canonical templates and ai-dev-kit's actual Kanban
- No clear guidance on which to use
- Installation examples may show ai-dev-kit's actual Kanban

**Factor 2: Missing Installer Validation**
- No validation to prevent Epic mashup during installation
- No checks for canonical vs project-specific epic conflicts
- Installer doesn't warn about copying actual Kanban

**Factor 3: Source Repository Structure**
- ai-dev-kit's actual Kanban is in same location as templates
- No clear separation between canonical and project-specific
- Projects may accidentally copy actual Kanban

---

### 1.4 Impact Assessment

**Severity:** CRITICAL

**Impact on Projects:**
- Projects have inappropriate epics (e.g., "Book Related Work" in non-book projects)
- Epic numbering conflicts with canonical structure
- Framework drift and confusion
- Cannot use canonical templates
- Projects must manually fix Epic structure

**Impact on ADK:**
- Framework credibility affected
- Installation confusion
- Support burden increased
- Framework drift accumulates

---

### 1.5 Prevention Strategy

**Immediate Actions (CRITICAL):**
1. **Fix Epic 9 Mismatch in ai-dev-kit Source**
   - Rename Epic 9 "Book Related Work" to Epic 24+ (project-specific range)
   - Update all Epic 9 references in ai-dev-kit source
   - Document as project-specific, not canonical

2. **Add Installer Validation**
   - Validate Epic numbering during installation
   - Check for Epic mashup (Epic 9 "Book Related Work" in non-book projects)
   - Warn if copying ai-dev-kit's actual Kanban
   - Prevent installation if Epic conflicts detected

**Short-Term Actions (HIGH):**
3. **Improve Installation Instructions**
   - Clearly distinguish canonical templates from ai-dev-kit's actual Kanban
   - Document Epic mashup prevention
   - Provide clear installation examples using templates
   - Warn against copying ai-dev-kit's actual Kanban

4. **Separate Canonical from Project-Specific**
   - Move ai-dev-kit's actual Kanban to separate location
   - Clearly mark project-specific epics (Epic 24+)
   - Make canonical templates more prominent

---

## 2. Other Mashup Issues

### 2.1 Template vs Actual Structure Confusion

**Issue:** Projects confusing canonical templates with ai-dev-kit's actual Kanban structure.

**Frequency:** 30% (3/10 projects) - same as Epic mashup

**Impact:** Projects get project-specific structures instead of canonical templates

**Prevention:**
- Clear separation between templates and actual Kanban
- Better documentation
- Installer validation

---

### 2.2 Version File Path Mashup

**Issue:** Projects using legacy version file path (`src/fynd_deals/version.py`) instead of canonical path.

**Frequency:** 1 project (ai-dev-kit source)

**Impact:** Source doesn't demonstrate canonical version file path

**Prevention:**
- Migrate ai-dev-kit source to canonical version file path
- Document canonical path in templates
- Installer validation for version file path

---

## 3. Mashup Issue Summary

### 3.1 Critical Mashup Issues

| Issue | Frequency | Severity | Root Cause | Prevention |
|-------|----------|----------|------------|------------|
| Epic Mashup | 30% (3/10) | CRITICAL | Epic 9 mismatch in source | Fix Epic 9, add validation |
| Template vs Actual Confusion | 30% (3/10) | CRITICAL | Unclear instructions | Better documentation |
| Version File Path | 1 project | HIGH | Legacy path in source | Migrate source |

### 3.2 Mashup Prevention Checklist

**For New Installations:**
- [ ] Use canonical templates, not ai-dev-kit's actual Kanban
- [ ] Validate Epic numbering (Epic 1-23 canonical, Epic 24+ project-specific)
- [ ] Check for Epic mashup (Epic 9 "Book Related Work" in non-book projects)
- [ ] Use canonical version file path
- [ ] Follow installation instructions carefully

**For Source Repository:**
- [ ] Fix Epic 9 mismatch (rename to Epic 24+)
- [ ] Separate canonical templates from actual Kanban
- [ ] Migrate version file path to canonical location
- [ ] Add installer validation

---

## 4. Related Documentation

- **Drift Analysis:** `adk-drift-analysis.md`
- **Implementation Patterns:** `adk-implementation-patterns.md`
- **Hardening Recommendations:** `adk-hardening-recommendations.md`
- **Project Analysis Reports:** `projects/*-adk-analysis.md` (especially been-there, dev-toolkit, agentic-ide-rules)

---

**Last Updated:** 2025-12-18T00:00:00Z  
**Version:** 1.0.0  
**Status:** COMPLETE

