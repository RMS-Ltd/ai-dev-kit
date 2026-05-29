---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADK Framework Drift Analysis

**Purpose:** Comprehensive analysis of framework drift across all ADK implementations  
**Analysis Date:** 2025-12-18  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T01 – Comprehensive ADK implementation analysis across all projects

**Data Sources:**
- 10 project analysis reports (9 client implementations + ai-dev-kit source)
- Meta-analysis: Convergence/Divergence Maps
- Meta-analysis: Canonical vs Legacy Matrices
- Pattern frequency tables

---

## Executive Summary

This document analyzes **framework drift** - the divergence of client project implementations from ADK canonical structures. Drift occurs when projects customize frameworks, work around issues, or copy incorrect structures. This analysis identifies drift patterns, severity levels, root causes, and prevention strategies.

**Key Findings:**
- **None/Minor Drift:** 67% of projects (7/10)
- **Major Drift:** 30% of projects (3/10) - Epic mashup
- **Critical Drift:** 3% (1 project) - ai-dev-kit source Epic 9 mismatch
- **Root Cause:** Epic 9 mismatch in ai-dev-kit source is primary cause of major drift

---

## 1. Drift Severity Classification

### 1.1 None/Minor Drift (67% - 7/10 projects)

**Projects:**
- `confidentia`
- `fynd-deals`
- `starborn-legacy`
- `free-party-promoter`
- `qa-kb`
- `vwmp`
- `ai-dev-kit` (source, except Epic 9 issue)

**Characteristics:**
- Using canonical structures correctly
- Minor customizations that don't break compatibility
- Proper E/S/T hierarchy
- Correct KB structure
- Proper workflow usage

**Examples:**
- Custom epic names but correct numbering
- Minor task structure variations
- Custom workflow steps but correct structure

---

### 1.2 Major Drift (30% - 3/10 projects)

**Projects:**
- `been-there`
- `dev-toolkit`
- `agentic-ide-rules`

**Characteristics:**
- Epic mashup (copying ai-dev-kit's actual Kanban)
- Epic 9 "Book Related Work" instead of canonical Epic 9 "User Management and Authentication"
- Epic numbering conflicts
- Framework structure conflicts

**Root Cause:**
- Manual copy of ai-dev-kit's actual Kanban structure
- Epic 9 mismatch in ai-dev-kit source
- Unclear installation instructions
- No installer validation

**Impact:**
- Projects have inappropriate epics
- Epic numbering conflicts
- Framework drift and confusion
- Cannot use canonical templates

---

### 1.3 Critical Drift (3% - 1 project)

**Project:**
- `ai-dev-kit` (source repository)

**Characteristics:**
- Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication"
- Missing `.cursorrules` file
- Missing `rw-config.yaml` in project root
- Legacy version file path

**Impact:**
- Root cause of Epic mashup in 30% of client projects
- Cannot serve as reference implementation
- Source doesn't use own frameworks

---

## 2. Drift Patterns by Framework Dimension

### 2.1 Kanban Structure Drift

**Epic Naming Drift:**
- **Canonical:** `Epic-\{N\}` (hyphen)
- **Drift:** `Epic \{N\}` (space) - 22%, `E\{N\}` (abbreviated) - 33%
- **Severity:** Minor (legacy support needed)

**Epic Mashup Drift:**
- **Canonical:** Use canonical templates
- **Drift:** Copy ai-dev-kit's actual Kanban - 30%
- **Severity:** Major (CRITICAL issue)
- **Root Cause:** Epic 9 mismatch in source

**Task Naming Drift:**
- **Canonical:** `E\{epic\}:S\{story\}:T\{task\}` (full context)
- **Drift:** `T\{task\}` (standalone) - 11%
- **Severity:** Minor (acceptable in checklists)

**Task Padding Drift:**
- **Canonical:** 2-digit (`T01`)
- **Drift:** 3-digit (`T001`) - 33%, mixed - 33%
- **Severity:** Minor (legacy support needed)

---

### 2.2 docs/documentation Structure Drift

**KB Directory Naming:**
- **Canonical:** `docs/`
- **Drift:** None (100% convergence)
- **Severity:** None (perfect convergence)

**KB Organization Drift:**
- **Canonical:** 5-pillar structure
- **Drift:** Multi-pillar (15+) - 10%, hybrid - 40%
- **Severity:** Minor (legacy support needed)

**Document Frontmatter Drift:**
- **Canonical:** YAML frontmatter with lifecycle metadata
- **Drift:** Missing frontmatter - 10%, missing lifecycle - 40%
- **Severity:** Minor (promote to required)

---

### 2.3 Workflow Structure Drift

**Config Usage Drift:**
- **Canonical:** `rw-config.yaml` (config-driven)
- **Drift:** Hardcoded paths - 50%
- **Severity:** Moderate (promote config-driven)

**Workflow Step Count Drift:**
- **Canonical:** 12-step RW
- **Drift:** 10-step - 20%, 11-step - 30%, 13-step - 10%
- **Severity:** Minor (legacy support needed)

**Validation Drift:**
- **Canonical:** Mandatory branch safety check
- **Drift:** Skipping validation - 20%
- **Severity:** Moderate (enforce validation)

---

### 2.4 Cursorrules Structure Drift

**File Presence Drift:**
- **Canonical:** `.cursorrules` file in project root
- **Drift:** Missing file - 10% (ai-dev-kit source)
- **Severity:** Critical (source repository gap)

**RW Trigger Drift:**
- **Canonical:** Comprehensive 12-step RW trigger
- **Drift:** Minimal trigger - 30%, missing trigger - 10%
- **Severity:** Moderate (promote comprehensive trigger)

---

## 3. Root Causes of Drift

### 3.1 Epic 9 Mismatch in Source (CRITICAL)

**Problem:**
- ai-dev-kit's Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication"
- Projects copying ai-dev-kit's actual Kanban get wrong Epic 9

**Impact:**
- 30% of client projects affected (Epic mashup)
- Framework drift and confusion
- Cannot use canonical templates

**Solution:**
- Rename ai-dev-kit's Epic 9 to Epic 24+ (project-specific range)
- Update all Epic 9 references
- Document as project-specific, not canonical

---

### 3.2 Unclear Installation Instructions

**Problem:**
- Projects don't understand difference between canonical templates and ai-dev-kit's actual Kanban
- No clear guidance on which to use

**Impact:**
- Projects copying wrong structure
- Epic mashup
- Framework drift

**Solution:**
- Clearly distinguish templates from actual Kanban
- Provide clear installation examples
- Document Epic mashup prevention

---

### 3.3 Missing Installer Validation

**Problem:**
- No validation to prevent Epic mashup during installation
- No checks for canonical vs project-specific epic conflicts

**Impact:**
- Epic mashup not prevented
- Framework drift not caught early

**Solution:**
- Add installer validation
- Check for Epic numbering conflicts
- Validate canonical vs project-specific epics

---

### 3.4 Framework Customization

**Problem:**
- Projects customizing frameworks to work around issues
- Each customization creates drift from source

**Impact:**
- Framework drift accumulates
- Continued development increases divergence

**Solution:**
- Better framework design (fewer issues to work around)
- Clear customization guidelines
- Support for legitimate customizations

---

### 3.5 Source Repository Gaps

**Problem:**
- ai-dev-kit source doesn't use own frameworks
- Missing `.cursorrules` file
- Missing `rw-config.yaml` in project root
- Legacy version file path

**Impact:**
- Cannot serve as reference implementation
- Source doesn't demonstrate frameworks
- Projects can't learn from source

**Solution:**
- Add `.cursorrules` file to source
- Add `rw-config.yaml` to project root
- Migrate version file path to canonical location

---

## 4. Drift Prevention Strategies

### 4.1 Immediate Actions (CRITICAL)

1. **Fix Epic 9 Mismatch in Source**
   - Rename Epic 9 to Epic 24+
   - Update all references
   - Document as project-specific

2. **Add Installer Validation**
   - Validate Epic numbering
   - Prevent Epic mashup
   - Check canonical vs project-specific conflicts

3. **Add Source Repository Frameworks**
   - Add `.cursorrules` file
   - Add `rw-config.yaml` to root
   - Migrate version file path

---

### 4.2 Short-Term Actions (HIGH)

4. **Improve Installation Instructions**
   - Clearly distinguish templates from actual Kanban
   - Document Epic mashup prevention
   - Provide clear examples

5. **Promote Config-Driven Approach**
   - Better documentation
   - Simpler examples
   - Clearer benefits

---

### 4.3 Long-Term Actions (MEDIUM)

6. **Support Legacy Patterns**
   - Document migration paths
   - Provide conversion tools
   - Support during transition

7. **Framework Hardening**
   - Reduce issues requiring workarounds
   - Better framework design
   - Clear customization guidelines

---

## 5. Drift Metrics

### 5.1 Overall Drift Distribution

| Severity | Count | Percentage | Projects |
|----------|-------|------------|----------|
| None/Minor | 7 | 67% | confidentia, fynd-deals, starborn-legacy, free-party-promoter, qa-kb, vwmp, ai-dev-kit (partial) |
| Major | 3 | 30% | been-there, dev-toolkit, agentic-ide-rules |
| Critical | 1 | 3% | ai-dev-kit (Epic 9) |

### 5.2 Drift by Framework Dimension

| Dimension | None/Minor | Major | Critical |
|-----------|------------|-------|----------|
| Kanban | 67% | 30% (Epic mashup) | 3% (Epic 9 mismatch) |
| docs/documentation | 90% | 0% | 0% |
| Workflows | 70% | 0% | 0% |
| Cursorrules | 90% | 0% | 10% (missing in source) |

---

## 6. Related Documentation

- **Convergence/Divergence Maps:** `meta-analysis-convergence-divergence-maps.md`
- **Canonical vs Legacy Matrices:** `meta-analysis-canonical-vs-legacy-matrices.md`
- **Project Analysis Reports:** `projects/*-adk-analysis.md`
- **Mashup Issues:** `adk-mashup-issues.md`

---

**Last Updated:** 2025-12-18T00:00:00Z  
**Version:** 1.0.0  
**Status:** COMPLETE

