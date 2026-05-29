---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Analysis: Pattern Frequency Tables

**Purpose:** Extract and count pattern frequencies across all projects to identify convergence and divergence  
**Analysis Date:** 2025-12-17  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design

---

## Executive Summary

This document provides **pattern frequency tables** extracted from all granular analyses (task-level Kanban, knowledge/documentation, workflows, cursorrules). Patterns are counted across all 10 analyzed projects (9 client implementations + 1 source repository) to identify:
- **Most common patterns** (convergence indicators)
- **Rare patterns** (divergence indicators)
- **Pattern adoption rates** (how widely patterns are used)

**Data Sources:**
- Task-level Kanban structure analysis
- Knowledge/documentation structure analysis
- Workflow structure analysis
- Cursorrules structure analysis
- 10 project analysis reports (9 client implementations + ai-dev-kit source)

---

## 1. Kanban Naming Pattern Frequencies

### 1.1 Epic Naming Formats

| Format | Projects Using | Frequency | Examples |
|--------|---------------|-----------|----------|
| `Epic-\{N\}` (hyphen) | been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit | 4/10 (40%) | `Epic-9`, `Epic-20` |
| `Epic \{N\}` (space) | confidentia, starborn_legacy | 2/10 (20%) | `Epic 9`, `Epic 20` |
| `Epic-\{NN\}` (zero-padded) | starborn_legacy | 1/10 (10%) | `Epic-09`, `Epic-20` |
| `E\{N\}` (abbreviated) | free-party-promoter, vwmp, qa-kb | 3/10 (30%) | `E01`, `E10` |
| `Epic \{NN\}` (zero-padded space) | confidentia (some) | 1/10 (10%) | `Epic 09` |

**Convergence:** `Epic-\{N\}` (hyphen) is most common in ADK projects (4/10), but `E\{N\}` is also common in newer projects (3/10).

### 1.2 Story Naming Formats

| Format | Projects Using | Frequency | Examples |
|--------|---------------|-----------|----------|
| `Story-{NNN}-\{description\}` | ai-dev-kit, been-there, dev-toolkit | 3/10 (30%) | `Story-006-adk-implementation-analysis.md` |
| `Story \{N\}` (space) | confidentia, starborn_legacy | 2/10 (20%) | `Story 1`, `Story 2` |
| `S\{N\}` (abbreviated) | free-party-promoter, vwmp, qa-kb | 3/10 (30%) | `S01`, `S10` |
| `Story-\{N\}-\{description\}` | agentic-ide-rules | 1/10 (10%) | `Story-1-framework-version.md` |

**Convergence:** Mixed patterns. `Story-{NNN}-\{description\}` is ADK canonical (3/10), but abbreviated `S\{N\}` is also common (3/10).

### 1.3 Task Naming Formats

| Format | Projects Using | Frequency | Examples |
|--------|---------------|-----------|----------|
| `E\{epic\}:S\{story\}:T\{task\}` (full context) | been-there, confidentia, fynd.deals, starborn_legacy, dev-toolkit, ai-dev-kit | 6/10 (60%) | `E20:S08:T01`, `E16:S01:T001` |
| `T\{task\}` (standalone) | fynd.deals (mixed) | 1/10 (10%) | `T001`, `T002` |
| `E\{epic\}S\{story\}:T\{task\}` (no separators) | free-party-promoter, vwmp | 2/10 (20%) | `E01S1:T01` |

**Convergence:** `E\{epic\}:S\{story\}:T\{task\}` (full context) is most common (6/10 = 60%), indicating strong convergence on full context requirement.

### 1.4 Task Number Padding

| Padding | Projects Using | Frequency | Examples |
|---------|---------------|-----------|----------|
| 2-digit (`T01`, `T02`) | been-there, confidentia, ai-dev-kit | 3/10 (30%) | `T01`, `T20` |
| 3-digit (`T001`, `T002`) | fynd.deals, starborn_legacy, dev-toolkit | 3/10 (30%) | `T001`, `T063` |
| Mixed | free-party-promoter, vwmp, qa-kb | 3/10 (30%) | Various |

**Convergence:** No clear convergence. 2-digit and 3-digit are equally common (3/10 each). ADK policy recommends 2-digit.

---

## 2. docs/documentation Directory Naming Frequencies

### 2.1 Root Directory Naming

| Directory Name | Projects Using | Frequency | Notes |
|---------------|----------------|-----------|-------|
| `docs/` (uppercase) | been-there, dev-toolkit, agentic-ide-rules, confidentia, starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit | 10/10 (100%) | Universal convergence |
| `knowledge/` (lowercase) | fynd.deals, confidentia (branch 21) | 2/10 (20%) | Pre-ADK legacy |
| `docs/` (lowercase) | starborn_legacy, fynd.deals, qa-kb | 3/10 (30%) | Supplementary docs |

**Convergence:** `docs/` is universal (10/10 = 100%), indicating perfect convergence on ADK canonical naming.

### 2.2 KB Organization Patterns

| Pattern | Projects Using | Frequency | Structure |
|---------|---------------|-----------|-----------|
| ADK Canonical (5 pillars) | been-there, dev-toolkit, agentic-ide-rules, ai-dev-kit | 4/10 (40%) | Architecture, Changelog, PM, Guides, Documentation |
| Complex Multi-Pillar (15+) | confidentia (branch 03) | 1/10 (10%) | 15+ pillars (Architecture, Customer Enablement, Data, Engineering, etc.) |
| Pre-ADK Custom | fynd.deals | 1/10 (10%) | `knowledge/fynd_deals/Kanban/` structure |
| Hybrid (KB + docs) | starborn_legacy, free-party-promoter, vwmp, qa-kb | 4/10 (40%) | `docs/` + `docs/` dual structure |

**Convergence:** ADK Canonical (5 pillars) is most common (4/10 = 40%), but Hybrid pattern is equally common (4/10 = 40%).

---

## 3. Workflow Pattern Frequencies

### 3.1 Workflow File Naming

| Pattern | Projects Using | Frequency | Examples |
|---------|---------------|-----------|----------|
| `\{name\}-workflow.yaml` | ai-dev-kit, been-there, dev-toolkit | 3/10 (30%) | `release-workflow.yaml` |
| `\{name\}.yaml` | starborn_legacy, confidentia | 2/10 (20%) | `release.yaml` |
| Script-based (`.py`/`.sh`) | starborn_legacy, confidentia | 2/10 (20%) | `release_workflow.py` |
| Embedded in `.cursorrules` | All projects (except ai-dev-kit) | 9/10 (90%) | RW trigger section |

**Convergence:** Embedded RW trigger in `.cursorrules` is nearly universal (9/10 = 90%). Note: ai-dev-kit (source) doesn't have `.cursorrules` file. YAML workflow files are common (5/10 = 50% combined).

### 3.2 Release Workflow Step Counts

| Step Count | Projects Using | Frequency | Examples |
|------------|----------------|-----------|----------|
| 10-step RW | starborn_legacy | 1/10 (10%) | Custom 10-step workflow |
| 11-step RW | been-there, dev-toolkit, confidentia | 3/10 (30%) | ADK 11-step (before Step 6 added) |
| 12-step RW | ai-dev-kit, agentic-ide-rules | 2/10 (20%) | ADK canonical 12-step |
| 13-step RW | agentic-ide-rules (extended) | 1/10 (10%) | Extended with PDCA |
| Custom (non-standard) | fynd.deals, free-party-promoter, vwmp, qa-kb | 4/10 (40%) | No explicit RW |

**Convergence:** 11-step and 12-step are most common (5/10 = 50% combined). ADK canonical is 12-step.

### 3.3 Workflow Configuration Patterns

| Pattern | Projects Using | Frequency | Examples |
|---------|---------------|-----------|----------|
| `rw-config.yaml` | been-there, dev-toolkit, agentic-ide-rules | 3/10 (30%) | Config-driven approach |
| Hardcoded paths | fynd.deals, confidentia (some) | 2/10 (20%) | Paths in `.cursorrules` |
| No config | starborn_legacy, free-party-promoter, vwmp, qa-kb, ai-dev-kit | 5/10 (50%) | No explicit config (ai-dev-kit has example only) |

**Convergence:** Config-driven (`rw-config.yaml`) is ADK pattern (3/10 = 30%), but many projects have no config (5/10 = 50%). Note: ai-dev-kit has example config but not in project root.

---

## 4. Cursorrules Pattern Frequencies

### 4.1 File Naming

| Pattern | Projects Using | Frequency | Location |
|---------|---------------|-----------|----------|
| `.cursorrules` (root) | All projects (except ai-dev-kit) | 9/10 (90%) | Project root |
| `.cursorrules` (branch) | confidentia | 1/10 (10%) | `{branch}/.cursorrules` |
| No `.cursorrules` | ai-dev-kit | 1/10 (10%) | Source repository (RW executed manually/by convention) |

**Convergence:** `.cursorrules` in project root is nearly universal (9/10 = 90%). Note: ai-dev-kit (source) doesn't have `.cursorrules` file.

### 4.2 Section Organization

| Pattern | Projects Using | Frequency | Structure |
|---------|---------------|-----------|-----------|
| Workflow-First | been-there, dev-toolkit | 2/9 (22%) | RW trigger → PVW → Document lifecycle → Project rules |
| Project Overview First | fynd.deals, confidentia | 2/9 (22%) | Project overview → Version control → Code style → Testing |
| Minimal RW Only | starborn_legacy, free-party-promoter, vwmp, qa-kb | 4/9 (44%) | RW trigger only, minimal other sections |
| No `.cursorrules` | ai-dev-kit | 1/10 (10%) | Source repository (no cursorrules file) |

**Convergence:** Minimal RW Only is most common (4/9 = 44%), but Workflow-First is ADK pattern (2/9 = 22%). Note: ai-dev-kit doesn't have `.cursorrules` file.

### 4.3 RW Trigger Patterns

| Pattern | Projects Using | Frequency | Steps |
|---------|---------------|-----------|-------|
| Comprehensive RW (12-step) | ai-dev-kit, agentic-ide-rules | 2/10 (20%) | Full 12-step with all sections (ai-dev-kit has workflow YAML, no cursorrules) |
| Standard RW (11-step) | been-there, dev-toolkit | 2/10 (20%) | 11-step (before Step 6) |
| Extended RW (13-step) | agentic-ide-rules (variant) | 1/10 (10%) | 13-step with PDCA |
| Custom RW (10-step) | starborn_legacy, confidentia | 2/10 (20%) | Custom 10-step workflows |
| No RW Trigger | fynd.deals, free-party-promoter, vwmp, qa-kb | 4/10 (40%) | No explicit RW trigger |

**Convergence:** Comprehensive RW (12-step) is ADK canonical (2/10 = 20%), but many projects have no RW trigger (4/10 = 40%). Note: ai-dev-kit has workflow YAML but no `.cursorrules` file.

### 4.4 Version Schema Definitions

| Pattern | Projects Using | Frequency | Schema |
|---------|---------------|-----------|--------|
| `RC.EPIC.STORY.TASK+BUILD` | ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy | 5/10 (50%) | ADK canonical schema |
| `RC.MAJOR.MINOR.PATCH+BUILD` | free-party-promoter | 1/10 (10%) | Similar but different naming |
| `RC.EPIC.STORY.PATCH` (legacy) | fynd.deals | 1/10 (10%) | Grandfathered format |
| No explicit schema | confidentia, vwmp, qa-kb | 3/10 (30%) | No schema definition |

**Convergence:** `RC.EPIC.STORY.TASK+BUILD` is most common (5/10 = 50%), indicating strong convergence on ADK canonical schema.

---

## 5. Version Schema Pattern Frequencies

### 5.1 Version Schema Formats

| Schema | Projects Using | Frequency | Format |
|--------|---------------|-----------|--------|
| `RC.EPIC.STORY.TASK+BUILD` | ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules, starborn_legacy | 5/10 (50%) | ADK canonical |
| `RC.MAJOR.MINOR.PATCH+BUILD` | free-party-promoter | 1/10 (10%) | Similar structure, different naming |
| `RC.EPIC.STORY.PATCH` | fynd.deals | 1/10 (10%) | Legacy format |
| `0.0.0+BUILD` | vwmp | 1/10 (10%) | Simple format |
| Custom/No schema | confidentia, qa-kb | 2/10 (20%) | No explicit schema |

**Convergence:** `RC.EPIC.STORY.TASK+BUILD` is most common (5/10 = 50%), indicating strong convergence on ADK canonical schema.

### 5.2 Version File Locations

| Location | Projects Using | Frequency | Examples |
|----------|----------------|-----------|----------|
| `src/\{project\}/version.py` | been-there, dev-toolkit, agentic-ide-rules | 3/10 (30%) | Standard ADK pattern |
| `src/fynd_deals/version.py` (legacy) | ai-dev-kit, dev-toolkit (incorrect) | 2/10 (20%) | Legacy path (ai-dev-kit source), copy-paste error (dev-toolkit) |
| `VERSION` (file) | vwmp | 1/10 (10%) | Simple file |
| No version file | confidentia, starborn_legacy, free-party-promoter, qa-kb | 4/10 (40%) | No explicit version file |

**Convergence:** `src/\{project\}/version.py` is ADK pattern (3/10 = 30%), but many projects have no version file (4/10 = 40%). Note: ai-dev-kit uses legacy path `src/fynd_deals/version.py`.

---

## 6. Branch Mapping Pattern Frequencies

### 6.1 Branch Naming Patterns

| Pattern | Projects Using | Frequency | Examples |
|---------|---------------|-----------|----------|
| `epic/\{N\}-\{description\}` | ai-dev-kit, been-there, dev-toolkit, agentic-ide-rules | 4/10 (40%) | `epic/4-kanban-framework` |
| `epic/\{N\}` | ai-dev-kit (some) | 1/10 (10%) | `epic/4` |
| `{branch}` (numeric) | confidentia | 1/10 (10%) | `03`, `04`, `19`, `20`, `21` |
| No explicit mapping | starborn_legacy, free-party-promoter, vwmp, qa-kb, fynd.deals | 5/10 (50%) | No explicit branch mapping |

**Convergence:** `epic/\{N\}-\{description\}` is ADK pattern (4/10 = 40%), but many projects have no explicit branch mapping (5/10 = 50%).

---

## 7. Summary: Pattern Convergence Analysis

### 7.1 High Convergence Patterns (≥67% adoption)

| Pattern | Frequency | Status |
|---------|-----------|--------|
| `docs/` directory naming | 10/10 (100%) | ✅ Perfect convergence |
| `.cursorrules` file naming | 9/10 (90%) | ⚠️ Near-perfect (ai-dev-kit source has no cursorrules) |
| `RC.EPIC.STORY.TASK+BUILD` version schema | 5/10 (50%) | ⚠️ Moderate convergence |
| `E\{epic\}:S\{story\}:T\{task\}` task naming | 6/10 (60%) | ✅ Strong convergence |

### 7.2 Moderate Convergence Patterns (33-66% adoption)

| Pattern | Frequency | Status |
|---------|-----------|--------|
| ADK Canonical KB structure (5 pillars) | 4/10 (40%) | ⚠️ Moderate convergence |
| `epic/\{N\}-\{description\}` branch naming | 4/10 (40%) | ⚠️ Moderate convergence |
| `src/\{project\}/version.py` version file | 3/10 (30%) | ⚠️ Low convergence (ai-dev-kit uses legacy path) |
| 11-step or 12-step RW | 5/10 (50%) | ⚠️ Moderate convergence |

### 7.3 Low Convergence Patterns (&lt;33% adoption)

| Pattern | Frequency | Status |
|---------|-----------|--------|
| `rw-config.yaml` configuration | 3/10 (30%) | ⚠️ Low convergence (ai-dev-kit has example only) |
| Workflow-First cursorrules structure | 2/9 (22%) | ⚠️ Low convergence (ai-dev-kit has no cursorrules) |
| Comprehensive RW trigger (12-step) | 2/10 (20%) | ⚠️ Low convergence |

---

## 8. Key Insights

### 8.1 Perfect Convergence
- **`docs/` directory naming:** Universal (10/10 = 100%)

### 8.2 Near-Perfect Convergence
- **`.cursorrules` file naming:** Nearly universal (9/10 = 90%, ai-dev-kit source has no cursorrules)

### 8.3 Strong Convergence
- **Task naming (`E\{epic\}:S\{story\}:T\{task\}`):** 6/10 (60%)
- **Version schema (`RC.EPIC.STORY.TASK+BUILD`):** 5/10 (50%)

### 8.4 Areas Needing Improvement
- **Workflow configuration:** Only 3/10 (30%) use `rw-config.yaml` (ai-dev-kit has example only)
- **RW trigger adoption:** Only 6/10 (60%) have explicit RW triggers (ai-dev-kit has workflow YAML but no cursorrules)
- **Version file adoption:** Only 3/10 (30%) have canonical version files (ai-dev-kit uses legacy path)

### 8.4 Recommendations

1. **Enforce `docs/` naming:** Already universal, maintain as canonical
2. **Promote `E\{epic\}:S\{story\}:T\{task\}` format:** Strong convergence (67%), make canonical
3. **Promote `rw-config.yaml`:** Low adoption (33%), needs promotion
4. **Promote comprehensive RW trigger:** Low adoption (22%), needs promotion
5. **Support version schema flexibility:** 56% adoption is good, but support legacy formats

---

## 9. Next Steps

This pattern frequency analysis informs:
- **Convergence/Divergence Maps** (next document)
- **Canonical vs Legacy Matrices** (next document)
- **Ultimate Canonical Framework Designs** (final deliverables)

**See Also:**
- `meta-analysis-convergence-divergence-maps.md` - Convergence/divergence analysis
- `meta-analysis-canonical-vs-legacy-matrices.md` - Canonical vs legacy comparison
- `task-level-kanban-structure-analysis.md` - Source data for Kanban patterns
- `knowledge-documentation-structure-analysis.md` - Source data for KB patterns
- `workflow-structure-analysis.md` - Source data for workflow patterns
- `cursorrules-structure-analysis.md` - Source data for cursorrules patterns

---

**Last Updated:** 2025-12-17  
**Version:** 1.0.0  
**Status:** COMPLETE

