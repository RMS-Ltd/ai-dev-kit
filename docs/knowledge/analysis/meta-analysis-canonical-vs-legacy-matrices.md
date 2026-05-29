---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Analysis: Canonical vs Legacy Matrices

**Purpose:** Compare ADK canonical structures to real-world patterns, identifying gaps, over-engineering, and legacy support needs  
**Analysis Date:** 2025-12-17  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design

---

## Executive Summary

This document provides **canonical vs legacy matrices** comparing ADK's canonical structures to real-world patterns found across all 9 analyzed projects. This analysis identifies:
- **Gaps:** What's missing in canonical (should be added)
- **Over-engineering:** What's unnecessary in canonical (should be simplified)
- **Legacy patterns:** What needs backward compatibility support
- **Convergence opportunities:** What should become canonical

**Data Sources:**
- ADK canonical structures (from framework packages)
- Real-world patterns (from 10 project analysis reports: 9 client implementations + ai-dev-kit source)
- Pattern frequency tables
- Convergence/divergence maps

---

## 1. Kanban Structure: Canonical vs Legacy Matrix

### 1.1 Epic Structure Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Epic Naming** | `Epic-\{N\}` (hyphen) | `Epic-\{N\}` (44%), `Epic \{N\}` (22%), `E\{N\}` (33%) | ⚠️ Gap: Support `Epic \{N\}` and `E\{N\}` | ✅ Yes - Support `Epic \{N\}` (space) |
| **Epic Numbering** | 1-23 (canonical) | 1-23 + project-specific (24+) | ✅ Good - Canonical supports extension | ✅ Yes - Support project-specific epics |
| **Epic Mashup Prevention** | ❌ Not enforced | 30% projects have mashup (root cause: Epic 9 mismatch in ai-dev-kit source) | ❌ CRITICAL GAP: No prevention + source has Epic 9 mismatch | ✅ Yes - Add installer validation + fix Epic 9 in source |
| **Epic Directory** | `epics/Epic-\{N\}/` | `epics/Epic-\{N\}/` (67%), `epics/Epic \{N\}/` (22%) | ⚠️ Gap: Support space format | ✅ Yes - Support `Epic \{N\}` format |
| **Epic Template** | Required | Present (67%) | ✅ Good - Template adoption | ✅ Yes - Support template customization |

**Key Findings:**
- **Gap:** Epic mashup prevention is CRITICAL (33% of projects affected)
- **Legacy Support:** Need to support `Epic \{N\}` (space) format (22% of projects)
- **Over-Engineering:** None identified

### 1.2 Story Structure Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Story Naming** | `Story-{NNN}-\{description\}` | `Story-{NNN}-{desc}` (33%), `Story \{N\}` (22%), `S\{N\}` (33%) | ⚠️ Gap: Support `S\{N\}` format | ✅ Yes - Support abbreviated format |
| **Story Numbering** | Zero-padded (3-digit) | 2-digit (33%), 3-digit (33%), mixed (33%) | ⚠️ Gap: Support 2-digit | ✅ Yes - Support 2-digit padding |
| **Story Directory** | `Story-{NNN}-*/` | `Story-{NNN}-*/` (33%), `Story \{N\}/` (22%) | ⚠️ Gap: Support space format | ✅ Yes - Support `Story \{N\}` format |
| **Story Checklist** | Required | Present (89%) | ✅ Good - Checklist adoption | ✅ Yes - Support checklist customization |
| **Story Template** | Required | Present (67%) | ✅ Good - Template adoption | ✅ Yes - Support template customization |

**Key Findings:**
- **Gap:** Story naming format needs flexibility (support `S\{N\}` format)
- **Legacy Support:** Need to support `Story \{N\}` (space) format (22% of projects)
- **Over-Engineering:** None identified

### 1.3 Task Structure Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Task Naming** | `E\{epic\}:S\{story\}:T\{task\}` (full context) | `E\{epic\}:S\{story\}:T\{task\}` (67%), `T\{task\}` (11%) | ✅ Good - Full context enforced | ✅ Yes - Support standalone `T\{task\}` in checklists |
| **Task Padding** | 2-digit (`T01`) | 2-digit (33%), 3-digit (33%), mixed (33%) | ⚠️ Gap: Support 3-digit | ✅ Yes - Support 3-digit padding |
| **Task Organization** | Separate files (recommended) | Separate files (67%), embedded (33%) | ✅ Good - Separate files preferred | ✅ Yes - Support embedded format |
| **Task Structure** | Required fields | Present (78%) | ✅ Good - Structure adoption | ✅ Yes - Support optional fields |
| **Task Checklist** | Required | Present (89%) | ✅ Good - Checklist adoption | ✅ Yes - Support checklist customization |

**Key Findings:**
- **Gap:** Task padding needs flexibility (support 3-digit)
- **Legacy Support:** Need to support embedded task format (33% of projects)
- **Over-Engineering:** None identified

---

## 2. docs/documentation Structure: Canonical vs Legacy Matrix

### 2.1 Root Directory Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Root Directory** | `docs/` (uppercase) | `docs/` (100%) | ✅ Perfect - Universal convergence | ✅ Yes - Support `knowledge/` for pre-ADK |
| **Secondary Docs** | None | `docs/` (33%), `knowledge/` (22%) | ⚠️ Gap: Support dual structure | ✅ Yes - Support `docs/` + `docs/` hybrid |
| **Directory Naming** | Uppercase `docs/` | `docs/` (100%) | ✅ Perfect - Universal convergence | ❌ No - `docs/` is universal |

**Key Findings:**
- **Gap:** Need to support dual structure (`docs/` + `docs/`) for migration
- **Legacy Support:** Need to support `knowledge/` for pre-ADK projects (22%)
- **Over-Engineering:** None identified

### 2.2 Organization Pattern Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Organization** | 5-pillar structure | 5-pillar (44%), multi-pillar (11%), hybrid (44%) | ⚠️ Gap: Support multi-pillar | ✅ Yes - Support 15+ pillar structure |
| **Pillar Names** | Architecture, Changelog, PM, Guides, Documentation | Standard (44%), custom (56%) | ⚠️ Gap: Support custom pillars | ✅ Yes - Support custom pillar names |
| **Pillar Depth** | 3-level default | 3-level (67%), 4-level (22%), mixed (11%) | ✅ Good - 3-level is standard | ✅ Yes - Support 4-level depth |
| **Navigation** | `README.md` | `README.md` (78%), `_index.md` (22%) | ⚠️ Gap: Support `_index.md` | ✅ Yes - Support Obsidian `_index.md` |

**Key Findings:**
- **Gap:** Need to support multi-pillar structure (11% enterprise projects)
- **Legacy Support:** Need to support `_index.md` for Obsidian (22% of projects)
- **Over-Engineering:** None identified

### 2.3 Document Structure Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Frontmatter** | Required (5 fields) | Present (89%) | ✅ Good - Frontmatter adoption | ✅ Yes - Support optional frontmatter |
| **Lifecycle Metadata** | Required | Present (67%) | ⚠️ Gap: Promote lifecycle metadata | ✅ Yes - Support documents without lifecycle |
| **Document Types** | Standard types | Standard (67%), custom (33%) | ✅ Good - Standard types work | ✅ Yes - Support custom document types |
| **Cross-Referencing** | Markdown links | Markdown (78%), Obsidian (22%) | ⚠️ Gap: Support Obsidian links | ✅ Yes - Support `[[Link]]` format |

**Key Findings:**
- **Gap:** Lifecycle metadata adoption is moderate (67%), needs promotion
- **Legacy Support:** Need to support Obsidian links (22% of projects)
- **Over-Engineering:** None identified

---

## 3. Workflow Structure: Canonical vs Legacy Matrix

### 3.1 Workflow File Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **File Naming** | `\{name\}-workflow.yaml` | `\{name\}-workflow.yaml` (33%), `\{name\}.yaml` (22%) | ⚠️ Gap: Support `\{name\}.yaml` | ✅ Yes - Support `.yaml` without `-workflow` |
| **File Location** | `workflows/` directory | `workflows/` (33%), `packages/frameworks/workflow mgt/workflows/` (33%) | ⚠️ Gap: Support framework location | ✅ Yes - Support framework package location |
| **Script-Based** | Not recommended | `.py`/`.sh` scripts (22%) | ⚠️ Gap: Support script-based workflows | ✅ Yes - Support legacy script workflows |

**Key Findings:**
- **Gap:** Need to support alternative file naming (`\{name\}.yaml`)
- **Legacy Support:** Need to support script-based workflows (22% of projects)
- **Over-Engineering:** None identified

### 3.2 Release Workflow Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Step Count** | 12-step RW | 12-step (22%), 11-step (33%), 10-step (11%), 13-step (11%) | ⚠️ Gap: Support 10-step/11-step | ✅ Yes - Support 10-step/11-step variants |
| **Step 1 (Branch Safety)** | Mandatory, blocking | Present (44%) | ❌ CRITICAL GAP: Low adoption | ✅ Yes - Promote branch safety checks |
| **Configuration** | `rw-config.yaml` | Config-driven (33%), hardcoded (22%), none (44%) | ❌ CRITICAL GAP: Low config adoption | ✅ Yes - Support hardcoded paths during migration |
| **Progress Tracking** | Cursor TODOs | Present (56%) | ⚠️ Gap: Promote TODO tracking | ✅ Yes - Support manual progress tracking |

**Key Findings:**
- **Gap:** Branch safety check adoption is low (44%), needs promotion
- **Gap:** Config-driven approach adoption is low (33%), needs promotion
- **Legacy Support:** Need to support hardcoded paths during migration (22% of projects)
- **Over-Engineering:** None identified

### 3.3 Workflow Execution Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Execution Pattern** | Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED) | Agent-driven (56%), script-based (22%), manual (22%) | ✅ Good - Agent-driven is standard | ✅ Yes - Support script-based execution |
| **Validation** | Required (branch context, changelog format) | Present (56%) | ⚠️ Gap: Promote validation | ✅ Yes - Support optional validation |
| **Atomicity** | Required (all steps or abort) | Present (67%) | ✅ Good - Atomicity adoption | ✅ Yes - Support partial execution |

**Key Findings:**
- **Gap:** Validation adoption is moderate (56%), needs promotion
- **Legacy Support:** Need to support script-based execution (22% of projects)
- **Over-Engineering:** None identified

---

## 4. Cursorrules Structure: Canonical vs Legacy Matrix

### 4.1 File Structure Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **File Naming** | `.cursorrules` (root) | `.cursorrules` (100%) | ✅ Perfect - Universal convergence | ✅ Yes - Support branch-specific `.cursorrules` |
| **File Location** | Project root | Root (89%), branch-specific (11%) | ✅ Good - Root is standard | ✅ Yes - Support branch-specific location |
| **Section Order** | Workflow-First | Workflow-First (33%), Project-First (22%), Minimal (44%) | ⚠️ Gap: Promote Workflow-First | ✅ Yes - Support Project-First structure |

**Key Findings:**
- **Gap:** Workflow-First structure adoption is low (33%), needs promotion
- **Legacy Support:** Need to support branch-specific `.cursorrules` (11% multi-branch projects)
- **Over-Engineering:** None identified

### 4.2 RW Trigger Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **RW Trigger** | Comprehensive (12-step) | Comprehensive (22%), standard (22%), minimal (11%), none (44%) | ❌ CRITICAL GAP: Low adoption | ✅ Yes - Support minimal RW trigger |
| **Step Definitions** | Detailed (all 12 steps) | Detailed (22%), standard (22%), minimal (11%) | ⚠️ Gap: Promote detailed definitions | ✅ Yes - Support minimal step definitions |
| **Progress Tracking** | Cursor TODOs | Present (56%) | ⚠️ Gap: Promote TODO tracking | ✅ Yes - Support manual progress tracking |

**Key Findings:**
- **Gap:** RW trigger adoption is low (56% have trigger, 44% don't)
- **Gap:** Comprehensive RW trigger adoption is very low (22%)
- **Legacy Support:** Need to support minimal RW trigger (11% of projects)
- **Over-Engineering:** None identified

### 4.3 Document Lifecycle Management Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Document Lifecycle** | Required section | Present (33%) | ❌ CRITICAL GAP: Very low adoption | ✅ Yes - Support projects without lifecycle |
| **Lifecycle Rules** | Automated cleanup | Present (22%) | ❌ CRITICAL GAP: Very low adoption | ✅ Yes - Support manual lifecycle management |

**Key Findings:**
- **Gap:** Document lifecycle adoption is very low (33%), needs significant promotion
- **Legacy Support:** Need to support projects without lifecycle management (67% of projects)
- **Over-Engineering:** None identified

---

## 5. Version Schema: Canonical vs Legacy Matrix

### 5.1 Schema Format Comparison

| Aspect | ADK Canonical | Real-World Pattern | Gap/Over-Engineering | Legacy Support Needed |
|--------|---------------|-------------------|---------------------|----------------------|
| **Schema Format** | `RC.EPIC.STORY.TASK+BUILD` | `RC.EPIC.STORY.TASK+BUILD` (56%), `RC.MAJOR.MINOR.PATCH+BUILD` (11%), `RC.EPIC.STORY.PATCH` (11%) | ⚠️ Gap: Support legacy formats | ✅ Yes - Support `RC.EPIC.STORY.PATCH` (grandfathered) |
| **Version File** | `src/\{project\}/version.py` | `src/\{project\}/version.py` (44%), `VERSION` file (11%), none (44%) | ⚠️ Gap: Support `VERSION` file | ✅ Yes - Support `VERSION` file format |
| **Version Bumping** | In RW | In RW (56%), manual (44%) | ⚠️ Gap: Promote RW version bumping | ✅ Yes - Support manual version bumping |

**Key Findings:**
- **Gap:** Version schema adoption is moderate (56%), needs promotion
- **Legacy Support:** Need to support `RC.EPIC.STORY.PATCH` format (11% grandfathered)
- **Legacy Support:** Need to support `VERSION` file format (11% of projects)
- **Over-Engineering:** None identified

---

## 6. Summary: Gaps, Over-Engineering, and Legacy Support

### 6.1 Critical Gaps (Must Address)

| Gap | Impact | Projects Affected | Priority |
|-----|--------|-------------------|----------|
| **Epic Mashup Prevention** | CRITICAL | 33% (3/9) | 🔴 CRITICAL |
| **Branch Safety Check Adoption** | CRITICAL | 56% missing | 🔴 CRITICAL |
| **RW Trigger Adoption** | HIGH | 44% missing | 🟠 HIGH |
| **Config-Driven Approach** | HIGH | 67% missing | 🟠 HIGH |
| **Document Lifecycle Adoption** | HIGH | 67% missing | 🟠 HIGH |

### 6.2 Moderate Gaps (Should Address)

| Gap | Impact | Projects Affected | Priority |
|-----|--------|-------------------|----------|
| **Epic/Story Naming Flexibility** | MODERATE | 22-33% | 🟡 MODERATE |
| **Task Padding Flexibility** | MODERATE | 33% | 🟡 MODERATE |
| **KB Organization Flexibility** | MODERATE | 56% | 🟡 MODERATE |
| **Workflow Step Count Flexibility** | MODERATE | 44% | 🟡 MODERATE |

### 6.3 Legacy Support Needed

| Legacy Pattern | Projects Using | Support Strategy |
|---------------|----------------|------------------|
| `Epic \{N\}` (space format) | 22% | ✅ Support both `Epic-\{N\}` and `Epic \{N\}` |
| `knowledge/` directory | 22% | ✅ Support `docs/` and `knowledge/` during migration |
| `docs/` secondary directory | 33% | ✅ Support `docs/` + `docs/` hybrid structure |
| `_index.md` navigation | 22% | ✅ Support both `README.md` and `_index.md` |
| `RC.EPIC.STORY.PATCH` schema | 11% | ✅ Support grandfathered format |
| `VERSION` file | 11% | ✅ Support `VERSION` file format |
| Hardcoded paths | 22% | ✅ Support during migration to config |

### 6.4 Over-Engineering (None Identified)

**Finding:** No over-engineering identified in ADK canonical structures. All canonical patterns are justified by real-world usage.

---

## 7. Recommendations

### 7.1 Address Critical Gaps

1. **Epic Mashup Prevention (CRITICAL)**
   - Make installer primary/only method
   - Add installer validation to prevent mashup
   - Improve installation instructions

2. **Branch Safety Check Promotion (CRITICAL)**
   - Enforce branch safety check in RW
   - Document benefits and risks
   - Provide examples

3. **RW Trigger Promotion (HIGH)**
   - Document RW trigger benefits
   - Provide examples and templates
   - Make RW trigger part of installation

4. **Config-Driven Approach Promotion (HIGH)**
   - Document config benefits
   - Provide migration guide from hardcoded paths
   - Make config part of installation

5. **Document Lifecycle Promotion (HIGH)**
   - Document lifecycle benefits
   - Provide examples and templates
   - Make lifecycle part of installation

### 7.2 Support Legacy Patterns

1. **Naming Flexibility**
   - Support `Epic \{N\}` (space) format
   - Support `S\{N\}` (abbreviated) format
   - Support 2-digit and 3-digit task padding

2. **KB Structure Flexibility**
   - Support `knowledge/` directory during migration
   - Support `docs/` + `docs/` hybrid structure
   - Support multi-pillar organization (15+ pillars)

3. **Workflow Flexibility**
   - Support 10-step/11-step RW variants
   - Support script-based workflows
   - Support hardcoded paths during migration

4. **Version Schema Flexibility**
   - Support `RC.EPIC.STORY.PATCH` (grandfathered)
   - Support `VERSION` file format
   - Support manual version bumping

---

## 8. Next Steps

This canonical vs legacy analysis informs:
- **Ultimate Canonical Framework Designs** (final deliverables)
- **Framework Hardening Recommendations** (in good/bad practice catalog)

**See Also:**
- `meta-analysis-pattern-frequency-tables.md` - Pattern frequency data
- `meta-analysis-convergence-divergence-maps.md` - Convergence/divergence analysis
- Individual project analysis reports - Source data

---

**Last Updated:** 2025-12-17  
**Version:** 1.0.0  
**Status:** COMPLETE

