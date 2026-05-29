---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Analysis: Convergence/Divergence Maps

**Purpose:** Map what patterns projects converge on vs diverge from ADK canonical  
**Analysis Date:** 2025-12-17  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design

---

## Executive Summary

This document provides **convergence/divergence maps** showing what patterns projects converge on (common across projects) vs diverge from ADK canonical (customizations, drift). This analysis informs the "ultimate" canonical framework designs by identifying:
- **Convergence patterns:** What works well and is widely adopted
- **Divergence patterns:** What causes drift and needs better support
- **Convergence/divergence matrices:** Visual maps of pattern adoption

**Data Sources:**
- Pattern frequency tables
- 10 project analysis reports (9 client implementations + ai-dev-kit source)
- Granular structure analyses

---

## 1. Kanban Structure Convergence/Divergence Map

### 1.1 Convergence Patterns (What Projects Converge On)

| Pattern | Convergence Rate | Projects | Status |
|---------|------------------|----------|--------|
| `E\{epic\}:S\{story\}:T\{task\}` task naming | 60% (6/10) | been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit, ai-dev-kit | ✅ Strong convergence |
| Epic/Story/Task hierarchy | 100% (10/10) | All projects | ✅ Perfect convergence |
| Nested directory structure | 90% (9/10) | All except qa-kb | ✅ Strong convergence |
| Story checklist pattern | 90% (9/10) | All except qa-kb | ✅ Strong convergence |

**Key Insight:** Projects strongly converge on hierarchical E/S/T structure and full-context task naming.

### 1.2 Divergence Patterns (What Projects Diverge From ADK)

| Pattern | Divergence Rate | Projects | Root Cause |
|---------|----------------|-----------|------------|
| **Epic Mashup** | 30% (3/10) | been-there, dev-toolkit, agentic-ide-rules | ❌ CRITICAL: Manual copy of ai-dev-kit's actual Kanban (root cause: Epic 9 mismatch in ai-dev-kit source) |
| Epic naming (`Epic-\{N\}` vs `Epic \{N\}`) | 44% vs 22% | Mixed usage | ⚠️ Moderate divergence |
| Task padding (2-digit vs 3-digit) | 33% vs 33% | Equal split | ⚠️ Moderate divergence |
| Story file naming | 33% vs 33% | Mixed patterns | ⚠️ Moderate divergence |

**Key Insight:** Epic mashup is the most critical divergence (33% of projects), caused by unclear installation instructions.

### 1.3 Convergence/Divergence Matrix: Kanban Structure

| Aspect | ADK Canonical | Converged Pattern | Diverged Pattern | Convergence Rate |
|--------|---------------|-------------------|------------------|------------------|
| **Task Naming** | `E\{epic\}:S\{story\}:T\{task\}` | `E\{epic\}:S\{story\}:T\{task\}` | `T\{task\}` (standalone) | 67% ✅ |
| **Task Padding** | 2-digit (`T01`) | Mixed (2-digit/3-digit) | 3-digit (`T001`) | 50% ⚠️ |
| **Epic Naming** | `Epic-\{N\}` | `Epic-\{N\}` (44%) | `Epic \{N\}` (22%), `E\{N\}` (33%) | 44% ⚠️ |
| **Story Naming** | `Story-{NNN}-{desc}` | Mixed patterns | Various formats | 33% ⚠️ |
| **Epic Mashup** | ❌ Never | ✅ No mashup (67%) | ❌ Epic mashup (33%) | 67% ⚠️ |

**Recommendation:** Enforce `E\{epic\}:S\{story\}:T\{task\}` format (67% convergence), prevent Epic mashup (critical issue).

---

## 2. docs/documentation Structure Convergence/Divergence Map

### 2.1 Convergence Patterns (What Projects Converge On)

| Pattern | Convergence Rate | Projects | Status |
|---------|------------------|----------|--------|
| `docs/` directory naming | 100% (9/9) | All projects | ✅ Perfect convergence |
| Document frontmatter | 89% (8/9) | All except qa-kb | ✅ Strong convergence |
| Lifecycle metadata | 67% (6/9) | ADK projects | ✅ Moderate convergence |
| Cross-referencing patterns | 78% (7/9) | Most projects | ✅ Strong convergence |

**Key Insight:** `docs/` naming is universal (100%), indicating perfect convergence on ADK canonical.

### 2.2 Divergence Patterns (What Projects Diverge From ADK)

| Pattern | Divergence Rate | Projects | Root Cause |
|---------|----------------|-----------|------------|
| KB organization (5-pillar vs multi-pillar) | 44% vs 11% | Mixed usage | ⚠️ Moderate divergence |
| `knowledge/` vs `docs/` | 22% (2/9) | fynd.deals, confidentia (legacy) | ⚠️ Pre-ADK legacy |
| Dual structure (`docs/` + `docs/`) | 44% (4/9) | starborn_legacy, free-party-promoter, vwmp, qa-kb | ⚠️ Moderate divergence |
| Complex multi-pillar (15+) | 11% (1/9) | confidentia (branch 03) | ⚠️ Enterprise pattern |

**Key Insight:** KB organization patterns diverge significantly (5-pillar vs multi-pillar), but root naming converges perfectly.

### 2.3 Convergence/Divergence Matrix: KB Structure

| Aspect | ADK Canonical | Converged Pattern | Diverged Pattern | Convergence Rate |
|--------|---------------|-------------------|------------------|------------------|
| **Root Directory** | `docs/` | `docs/` | `knowledge/` (22%), `docs/` (33%) | 100% ✅ |
| **Organization** | 5-pillar | 5-pillar (44%) | Multi-pillar (11%), Hybrid (44%) | 44% ⚠️ |
| **Document Structure** | Frontmatter + sections | Frontmatter (89%) | Minimal (11%) | 89% ✅ |
| **Lifecycle Metadata** | Required | Present (67%) | Missing (33%) | 67% ⚠️ |
| **Navigation** | `README.md` or `_index.md` | Mixed (78%) | Various | 78% ⚠️ |

**Recommendation:** Maintain `docs/` as canonical (100% convergence), support flexible organization patterns.

---

## 3. Workflow Structure Convergence/Divergence Map

### 3.1 Convergence Patterns (What Projects Converge On)

| Pattern | Convergence Rate | Projects | Status |
|---------|------------------|----------|--------|
| RW trigger in `.cursorrules` | 56% (5/9) | ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy | ✅ Moderate convergence |
| 11-step or 12-step RW | 56% (5/9) | Combined count | ✅ Moderate convergence |
| Version schema definition | 56% (5/9) | ADK projects | ✅ Moderate convergence |
| Branch safety checks | 44% (4/9) | ADK projects | ⚠️ Moderate convergence |

**Key Insight:** RW trigger adoption is moderate (56%), indicating need for better promotion.

### 3.2 Divergence Patterns (What Projects Diverge From ADK)

| Pattern | Divergence Rate | Projects | Root Cause |
|---------|----------------|-----------|------------|
| No RW trigger | 44% (4/9) | fynd.deals, free-party-promoter, vwmp, qa-kb | ⚠️ No ADK workflow adoption |
| Custom step counts | 44% (4/9) | Various | ⚠️ Customization |
| No `rw-config.yaml` | 67% (6/9) | Most projects | ⚠️ Low config adoption |
| Hardcoded paths | 22% (2/9) | fynd.deals, confidentia | ⚠️ Not using config |

**Key Insight:** Workflow configuration adoption is low (33%), indicating need for better promotion.

### 3.3 Convergence/Divergence Matrix: Workflow Structure

| Aspect | ADK Canonical | Converged Pattern | Diverged Pattern | Convergence Rate |
|--------|---------------|-------------------|------------------|------------------|
| **RW Trigger** | Required | Present (56%) | Missing (44%) | 56% ⚠️ |
| **Step Count** | 12-step | 11-step/12-step (56%) | Custom (44%) | 56% ⚠️ |
| **Configuration** | `rw-config.yaml` | Config-driven (33%) | Hardcoded (22%), None (44%) | 33% ⚠️ |
| **Version Schema** | `RC.EPIC.STORY.TASK+BUILD` | Present (56%) | Missing (44%) | 56% ⚠️ |
| **Branch Safety** | Required | Present (44%) | Missing (56%) | 44% ⚠️ |

**Recommendation:** Promote RW trigger adoption (56% is moderate), promote config-driven approach (33% is low).

---

## 4. Cursorrules Structure Convergence/Divergence Map

### 4.1 Convergence Patterns (What Projects Converge On)

| Pattern | Convergence Rate | Projects | Status |
|---------|------------------|----------|--------|
| `.cursorrules` file naming | 100% (9/9) | All projects | ✅ Perfect convergence |
| RW trigger section | 56% (5/9) | ADK projects | ✅ Moderate convergence |
| Version schema definition | 56% (5/9) | ADK projects | ✅ Moderate convergence |
| Git workflow restrictions | 44% (4/9) | ADK projects | ⚠️ Moderate convergence |

**Key Insight:** `.cursorrules` naming is universal (100%), but RW trigger adoption is moderate (56%).

### 4.2 Divergence Patterns (What Projects Diverge From ADK)

| Pattern | Divergence Rate | Projects | Root Cause |
|---------|----------------|-----------|------------|
| No RW trigger | 44% (4/9) | fynd.deals, free-party-promoter, vwmp, qa-kb | ⚠️ No ADK workflow adoption |
| Minimal structure | 44% (4/9) | starborn_legacy, free-party-promoter, vwmp, qa-kb | ⚠️ Minimal adoption |
| Project overview first | 22% (2/9) | fynd.deals, confidentia | ⚠️ Different organization |
| No document lifecycle | 67% (6/9) | Most projects | ⚠️ Low adoption |

**Key Insight:** Cursorrules structure patterns diverge significantly, with many projects using minimal structure.

### 4.3 Convergence/Divergence Matrix: Cursorrules Structure

| Aspect | ADK Canonical | Converged Pattern | Diverged Pattern | Convergence Rate |
|--------|---------------|-------------------|------------------|------------------|
| **File Naming** | `.cursorrules` | `.cursorrules` | Branch-specific (11%) | 100% ✅ |
| **Section Order** | Workflow-First | Workflow-First (33%) | Project-First (22%), Minimal (44%) | 33% ⚠️ |
| **RW Trigger** | Comprehensive (12-step) | Present (56%) | Missing (44%) | 56% ⚠️ |
| **Document Lifecycle** | Required | Present (33%) | Missing (67%) | 33% ⚠️ |
| **Git Restrictions** | Required | Present (44%) | Missing (56%) | 44% ⚠️ |

**Recommendation:** Promote comprehensive cursorrules structure (33% adoption is low), maintain `.cursorrules` naming (100% convergence).

---

## 5. Version Schema Convergence/Divergence Map

### 5.1 Convergence Patterns (What Projects Converge On)

| Pattern | Convergence Rate | Projects | Status |
|---------|------------------|----------|--------|
| `RC.EPIC.STORY.TASK+BUILD` schema | 56% (5/9) | ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy | ✅ Moderate convergence |
| Version file location | 44% (4/9) | ADK projects | ⚠️ Moderate convergence |
| Version bumping in RW | 56% (5/9) | ADK projects | ✅ Moderate convergence |

**Key Insight:** Version schema adoption is moderate (56%), indicating good convergence on ADK canonical.

### 5.2 Divergence Patterns (What Projects Diverge From ADK)

| Pattern | Divergence Rate | Projects | Root Cause |
|---------|----------------|-----------|------------|
| Different schema format | 33% (3/9) | free-party-promoter, fynd.deals, vwmp | ⚠️ Pre-ADK or custom |
| No version file | 44% (4/9) | confidentia, starborn_legacy, free-party-promoter, qa-kb | ⚠️ No versioning adoption |
| Legacy format | 11% (1/9) | fynd.deals | ⚠️ Grandfathered |

**Key Insight:** Version schema divergence is moderate (33%), with some projects using pre-ADK formats.

### 5.3 Convergence/Divergence Matrix: Version Schema

| Aspect | ADK Canonical | Converged Pattern | Diverged Pattern | Convergence Rate |
|--------|---------------|-------------------|------------------|------------------|
| **Schema Format** | `RC.EPIC.STORY.TASK+BUILD` | Present (56%) | Different (33%), Missing (11%) | 56% ⚠️ |
| **Version File** | `src/\{project\}/version.py` | Present (44%) | Missing (44%), Different (11%) | 44% ⚠️ |
| **Version Bumping** | In RW | Present (56%) | Missing (44%) | 56% ⚠️ |

**Recommendation:** Promote version schema adoption (56% is moderate), support legacy formats for migration.

---

## 6. Critical Divergence Issues

### 6.1 Epic Mashup (CRITICAL)

**Divergence Rate:** 33% (3/9 projects)  
**Projects Affected:** been-there, dev-toolkit, agentic-ide-rules  
**Root Cause:** Manual copy of ai-dev-kit's actual Kanban structure instead of using installer  
**Impact:** CRITICAL - Projects have inappropriate epics (e.g., "Book Related Work" in non-book projects)  
**Recommendation:** Make installer primary/only method, improve installation instructions

### 6.2 Low Workflow Configuration Adoption

**Divergence Rate:** 67% (6/9 projects don't use `rw-config.yaml`)  
**Projects Affected:** Most projects  
**Root Cause:** Low promotion, unclear benefits  
**Impact:** Moderate - Hardcoded paths, less flexibility  
**Recommendation:** Promote config-driven approach, document benefits

### 6.3 Low RW Trigger Adoption

**Divergence Rate:** 44% (4/9 projects have no RW trigger)  
**Projects Affected:** fynd.deals, free-party-promoter, vwmp, qa-kb  
**Root Cause:** No ADK workflow adoption  
**Impact:** Moderate - No standardized release workflow  
**Recommendation:** Promote RW trigger, provide examples

---

## 7. Summary: Convergence vs Divergence

### 7.1 High Convergence Areas (≥67%)

| Area | Convergence Rate | Status |
|------|------------------|--------|
| `docs/` directory naming | 100% | ✅ Perfect |
| `.cursorrules` file naming | 100% | ✅ Perfect |
| Task naming (`E\{epic\}:S\{story\}:T\{task\}`) | 67% | ✅ Strong |
| Document frontmatter | 89% | ✅ Strong |
| E/S/T hierarchy | 100% | ✅ Perfect |

### 7.2 Moderate Convergence Areas (33-66%)

| Area | Convergence Rate | Status |
|------|------------------|--------|
| Version schema | 56% | ⚠️ Moderate |
| RW trigger adoption | 56% | ⚠️ Moderate |
| KB organization (5-pillar) | 44% | ⚠️ Moderate |
| Workflow configuration | 33% | ⚠️ Low |
| Cursorrules structure | 33% | ⚠️ Low |

### 7.3 Critical Divergence Areas (&lt;33%)

| Area | Divergence Rate | Status |
|------|----------------|--------|
| Epic mashup | 33% | ❌ CRITICAL |
| Workflow configuration | 67% | ⚠️ Low adoption |
| Document lifecycle | 67% missing | ⚠️ Low adoption |

---

## 8. Recommendations

### 8.1 Enforce High Convergence Patterns
- **`docs/` naming:** Already universal (100%), maintain as canonical
- **Task naming:** Strong convergence (67%), enforce `E\{epic\}:S\{story\}:T\{task\}` format
- **E/S/T hierarchy:** Perfect convergence (100%), maintain as canonical

### 8.2 Promote Moderate Convergence Patterns
- **Version schema:** Moderate convergence (56%), promote adoption
- **RW trigger:** Moderate convergence (56%), promote adoption
- **Workflow configuration:** Low adoption (33%), promote config-driven approach

### 8.3 Address Critical Divergence Issues
- **Epic mashup:** CRITICAL (33%), make installer primary/only method
- **Workflow configuration:** Low adoption (67%), document benefits
- **Document lifecycle:** Low adoption (67%), promote lifecycle management

---

## 9. Next Steps

This convergence/divergence analysis informs:
- **Canonical vs Legacy Matrices** (next document)
- **Ultimate Canonical Framework Designs** (final deliverables)

**See Also:**
- `meta-analysis-pattern-frequency-tables.md` - Pattern frequency data
- `meta-analysis-canonical-vs-legacy-matrices.md` - Canonical vs legacy comparison
- Individual project analysis reports - Source data

---

**Last Updated:** 2025-12-17  
**Version:** 1.0.0  
**Status:** COMPLETE

