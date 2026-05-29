---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Analysis Executive Summary: Proposed Canonical Framework Designs

**Purpose:** Decision-focused executive summary presenting proposed "ultimate" canonical structures for all framework dimensions  
**Analysis Date:** 2025-12-17  
**Status:** COMPLETE  
**Version:** 2.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design

**Note:** This is an **executive summary** focused on decisions and proposed canonical structures. For detailed tactical analysis, see the supporting meta-analysis documents referenced below.

---

## Executive Summary

This document synthesizes findings from **comprehensive analysis of 10 projects** (9 client implementations + ai-dev-kit source) to propose **"ultimate" canonical structures** for all ADK framework dimensions. These proposals inform concrete decisions about framework standardization and hardening.

### Key Decisions Required

1. **Adopt proposed canonical Kanban E/S/T structure** (based on 60% convergence on task naming)
2. **Adopt proposed canonical docs/documentation structure** (based on 100% convergence on `docs/` naming, 40% on 5-pillar)
3. **Adopt proposed canonical workflow structure** (based on 50% convergence on RW triggers)
4. **Adopt proposed canonical cursorrules structure** (based on 90% convergence on file naming)
5. **Fix Epic 9 mismatch in ai-dev-kit source** (CRITICAL - root cause of Epic mashup)
6. **Address source repository gaps** (missing cursorrules, legacy version path)

### Critical Discovery

**Epic 9 Mismatch:** ai-dev-kit's Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication", causing Epic mashup in 30% of client projects.

---

## 1. Proposed Ultimate Canonical Kanban Structure

### 1.1 Epic Structure

**Naming:**
- **Canonical:** `Epic-\{N\}` (hyphen, e.g., `Epic-1`, `Epic-9`)
- **Legacy Support:** `Epic \{N\}` (space), `E\{N\}` (abbreviated)
- **Rationale:** 40% convergence on hyphen format, but support legacy formats for migration

**Numbering:**
- **Canonical Range:** Epics 1-23 (framework + project-specific canonical patterns)
- **Project-Specific Range:** Epics 24+ (for project-specific work)
- **CRITICAL:** Fix Epic 9 mismatch in ai-dev-kit source (rename "Book Related Work" to Epic 24+)

**Directory Structure:**
- **Canonical:** `docs/project-management/kanban/epics/Epic-\{N\}/`
- **File:** `Epic-\{N\}.md` (epic overview document)

**Prevention:**
- Installer validation to prevent Epic mashup
- Clear separation between canonical templates and ai-dev-kit's actual Kanban
- **CRITICAL:** Fix Epic 9 mismatch in source

### 1.2 Story Structure

**Naming:**
- **Canonical:** `Story-{NNN}-\{description\}` (3-digit padding, e.g., `Story-001-project-setup.md`)
- **Legacy Support:** `Story \{N\}` (space), `S\{N\}` (abbreviated)
- **Rationale:** 30% convergence on canonical format, but support legacy for migration

**Directory Structure:**
- **Canonical:** `docs/project-management/kanban/epics/Epic-\{N\}/Story-{NNN}-\{description\}/`
- **File:** `Story-{NNN}-\{description\}.md` (story document)

**Checklist:**
- **Required:** Story checklist in Epic document (`Epic-\{N\}.md`)
- **Format:** Markdown checklist with version markers: `- [x] **E\{N\}:S{NNN} – Description** - COMPLETE ✅ (v0.N.NNN.T+B)`

### 1.3 Task Structure

**Naming:**
- **Canonical:** `E\{epic\}:S\{story\}:T\{task\}` (full context, required, e.g., `E6:S06:T01`)
- **Padding:** 2-digit (`T01`, `T02`) canonical, 3-digit (`T001`) legacy support
- **Rationale:** 60% convergence on full-context format, strong convergence indicator

**Organization:**
- **Small Tasks:** Embedded in Story document (most common, 60% of projects)
- **Large Tasks:** Separate files in `Story-{NNN}/T\{task\}-\{description\}.md`
- **Always:** Task checklist in Story document

**Structure:**
- **Required Fields:** Task ID (`E\{epic\}:S\{story\}:T\{task\}`), Status, Input, Deliverable, Acceptance Criteria
- **Optional Fields:** Dependencies, Blocker, Approach, Files, Progress Notes, Version

**File Naming (for separate files):**
- **Canonical:** `T\{task\}-\{description\}.md` (e.g., `T01-project-setup.md`)

### 1.4 Proposed Canonical E/S/T Template System

**Epic Templates:**
- 21 canonical epic templates (Epics 1-21)
- Project-specific epics start at Epic 24+
- Epic 1: `\{PROJECT_NAME\} Core` (generic placeholder, not "AI Dev Kit Core")

**Story Templates:**
- 62+ story templates organized by epic
- Standard story patterns for each epic

**Task Templates:**
- 193+ task templates organized by epic/story
- Standard task patterns for each story

**Reference Implementation:** ai-dev-kit source has comprehensive template system (21 epics, 62+ stories, 193+ tasks)

---

## 2. Proposed Ultimate Canonical docs/documentation Structure

### 2.1 Root Directory

**Naming:**
- **Canonical:** `docs/` (uppercase, abbreviation)
- **Rationale:** 100% convergence (10/10 projects) - perfect convergence
- **Legacy Support:** `knowledge/` (pre-ADK), `docs/` + `docs/` (hybrid during migration)

### 2.2 Directory Organization

**Canonical Structure: 5-Pillar Organization**
- **Architecture/** - Technical standards, ADRs, integration docs
- **changelog-and-release-notes/** - Release documentation, changelog archive
- **project-management/** - Project management, Kanban, governance
- **Guides/** - User-facing documentation, how-to guides
- **Documentation/** - Developer documentation, vision, purpose (optional)

**Rationale:** 40% convergence on 5-pillar structure, ai-dev-kit source demonstrates perfect implementation

**Reference Implementation:** ai-dev-kit source repository demonstrates perfect 5-pillar canonical structure

**Legacy Support:**
- Multi-pillar (15+) for enterprise projects
- Hybrid (`docs/` + `docs/`) during migration
- Pre-ADK `knowledge/` structure

### 2.3 Document Structure

**Frontmatter:**
- **Required:** YAML frontmatter with lifecycle metadata
- **Rationale:** 90% adoption (9/10 projects)

**Lifecycle Metadata:**
- **Required Fields:** `lifecycle`, `created_at`
- **Optional Fields:** `ttl_days`, `expires_at`, `housekeeping_policy`
- **Rationale:** 60% adoption, promote to 100%

**Document Types:**
- Standard types: ADR, Policy, Guide, Template, Analysis, Changelog
- Custom types: Support project-specific document types

### 2.4 Navigation

**Index Files:**
- **Canonical:** `README.md` (standard markdown)
- **Obsidian Support:** `_index.md` (for Obsidian projects)
- **Rationale:** Support both formats (78% use README.md, 22% use _index.md)

**Structure:**
- Root `docs/README.md` for top-level navigation
- Section `README.md` files for each pillar
- Directory-level `README.md` files for major subdirectories

### 2.5 Cross-Referencing

**Format:**
- **Canonical:** Standard markdown links `[Link Text](path/to/file.md)`
- **Obsidian Support:** Obsidian links `[[Link Text]]` (for Obsidian projects)
- **Rationale:** Support both formats (78% use markdown, 22% use Obsidian)

---

## 3. Proposed Ultimate Canonical Workflow Structure

### 3.1 File Structure

**Naming:**
- **Canonical:** `{workflow-name}-workflow.yaml` (e.g., `release-workflow.yaml`)
- **Location:** `packages/frameworks/workflow mgt/workflows/` (framework) or `workflows/` (project root)
- **Legacy Support:** `\{name\}.yaml`, script-based workflows (`.py`/`.sh`)

**Rationale:** 30% convergence on canonical format, but support legacy for migration

### 3.2 Release Workflow (RW)

**Step Count:**
- **Canonical:** 12 steps (comprehensive RW)
- **Legacy Support:** 10-step, 11-step, 13-step variants

**Step Structure:**
1. **Step 1: Branch Safety Check** (mandatory, blocking) - CRITICAL
2. **Steps 2-12:** Standard RW steps (version bump, changelog, commit, tag, push, etc.)

**Reference Implementation:** ai-dev-kit source has comprehensive 12-step workflow YAML definitions

### 3.3 Configuration

**Config File:**
- **Canonical:** `rw-config.yaml` (config-driven approach)
- **Location:** Project root
- **Required Config:** Version file path, changelog paths, scripts path
- **Optional Config:** Kanban integration, custom patterns

**Rationale:** 30% adoption, but config-driven approach is best practice

**Legacy Support:** Hardcoded paths in `.cursorrules` during migration

### 3.4 Execution

**Pattern:**
- **Canonical:** Agent-driven (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- **Progress Tracking:** Cursor TODOs (required)
- **Atomicity:** Complete all steps or abort (required)

**Rationale:** Agent-driven execution provides intelligent execution and user visibility

**Legacy Support:** Script-based, manual execution during migration

### 3.5 Validation

**Required Validators:**
- Branch context validation (`validate_branch_context.py --strict`)
- Changelog format validation (`validate_changelog_format.py`)

**Rationale:** Validation prevents invalid releases and maintains quality

**Legacy Support:** Optional validation during migration

---

## 4. Proposed Ultimate Canonical Cursorrules Structure

### 4.1 File Structure

**Naming:**
- **Canonical:** `.cursorrules` (project root)
- **Rationale:** 90% convergence (9/10 projects, ai-dev-kit source missing)

**CRITICAL:** ai-dev-kit source should add `.cursorrules` file to demonstrate own framework

### 4.2 Section Organization

**Canonical Order (Workflow-First):**
1. **RW Trigger Section** (Release Workflow trigger)
2. **PVW Trigger Section** (Package Version Workflow trigger, optional)
3. **Document Lifecycle Management Section** (optional but recommended)
4. **Git Workflow Restrictions Section** (optional but recommended)
5. **Project-Specific Rules Section** (custom rules)

**Rationale:** Workflow-first organization prioritizes framework usage

### 4.3 RW Trigger Section

**Canonical: Comprehensive 12-Step RW Trigger**
- All 12 steps defined with detailed descriptions
- Mandatory branch safety check (Step 1)
- Progress tracking with Cursor TODOs
- Config-driven approach (loads `rw-config.yaml`)

**Rationale:** 20% adoption, but comprehensive trigger is best practice

**Reference Implementation:** agentic-ide-rules demonstrates comprehensive 12-step RW trigger

**Legacy Support:** Standard 11-step, minimal RW trigger during migration

### 4.4 Document Lifecycle Management

**Canonical: Lifecycle Metadata Rules**
- Document lifecycle management based on frontmatter metadata
- Automated expiration and housekeeping
- Policy salience parsing

**Rationale:** 30% adoption, but lifecycle management is recommended

**Legacy Support:** Projects without lifecycle management

### 4.5 Git Workflow Restrictions

**Canonical: Strict Git Restrictions**
- Commits only via RW
- Push only via RW
- Branch isolation enforced
- Pre-commit validation

**Rationale:** 30% adoption, but git restrictions enforce workflow

**Legacy Support:** Projects without git restrictions

---

## 5. Critical Issues Requiring Immediate Action

### 5.1 Epic 9 Mismatch (CRITICAL)

**Problem:** ai-dev-kit's Epic 9 "Book Related Work" conflicts with canonical Epic 9 "User Management and Authentication"

**Impact:** 30% of client projects (been-there, dev-toolkit, agentic-ide-rules) have Epic mashup

**Root Cause:** Projects copying ai-dev-kit's actual Kanban structure instead of using canonical templates

**Required Action:**
1. **CRITICAL:** Rename ai-dev-kit's Epic 9 "Book Related Work" to Epic 24+ (project-specific range)
2. **OR:** Clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical
3. Update all Epic 9 references in ai-dev-kit source
4. Add installer validation to prevent Epic mashup

### 5.2 Source Repository Gaps (HIGH)

**Problem:** ai-dev-kit source repository doesn't use its own frameworks

**Gaps:**
1. **Missing `.cursorrules` file** - Should demonstrate own cursorrules framework
2. **Missing `rw-config.yaml` in project root** - Only example exists, not actual config
3. **Legacy version file path** - `src/fynd_deals/version.py` instead of `src/ai_dev_kit/version.py`

**Impact:** Cannot demonstrate frameworks to client projects, source doesn't serve as reference implementation

**Required Action:**
1. Add `.cursorrules` file with comprehensive RW trigger section
2. Add `rw-config.yaml` to project root
3. Migrate version file path to canonical location

---

## 6. Key Decisions Summary

### 6.1 Decisions to Adopt Proposed Canonical Structures

| Framework Dimension | Proposed Canonical Structure | Convergence Basis | Decision Required |
|---------------------|------------------------------|-------------------|-------------------|
| **Kanban E/S/T** | `Epic-\{N\}/Story-{NNN}/E\{N\}:S{NNN}:T\{NN\}` | 60% task naming, 100% hierarchy | ✅ **ADOPT** |
| **docs/documentation** | 5-pillar `docs/` structure | 100% naming, 40% organization | ✅ **ADOPT** |
| **Workflows** | 12-step RW, `rw-config.yaml` | 50% RW trigger, 30% config | ✅ **ADOPT** |
| **Cursorrules** | Comprehensive 12-step RW trigger | 90% file naming, 20% comprehensive | ✅ **ADOPT** |

### 6.2 Decisions on Legacy Support

| Pattern | Canonical | Legacy Support | Rationale |
|---------|-----------|----------------|-----------|
| Epic naming | `Epic-\{N\}` | `Epic \{N\}`, `E\{N\}` | 22% use space, 30% use abbreviated |
| Story naming | `Story-{NNN}` | `Story \{N\}`, `S\{N\}` | 20% use space, 30% use abbreviated |
| Task padding | 2-digit (`T01`) | 3-digit (`T001`) | 30% use 3-digit |
| KB organization | 5-pillar | Multi-pillar, hybrid | 10% multi-pillar, 40% hybrid |
| Workflow config | `rw-config.yaml` | Hardcoded paths | 50% don't use config |

**Decision:** Support legacy patterns during migration, but promote canonical as standard

### 6.3 Critical Fix Decisions

| Issue | Severity | Required Action | Priority |
|-------|----------|-----------------|----------|
| Epic 9 mismatch | CRITICAL | Rename to Epic 24+ or document as project-specific | **IMMEDIATE** |
| Missing cursorrules | HIGH | Add `.cursorrules` file to ai-dev-kit source | **HIGH** |
| Missing rw-config | HIGH | Add `rw-config.yaml` to ai-dev-kit project root | **HIGH** |
| Legacy version path | MEDIUM | Migrate to `src/ai_dev_kit/version.py` | **MEDIUM** |

---

## 7. Framework Hardening Priorities

### 7.1 Immediate Actions (CRITICAL)

1. **Fix Epic 9 Mismatch**
   - Rename ai-dev-kit's Epic 9 to Epic 24+
   - Update all references
   - Add installer validation

2. **Add Source Repository Frameworks**
   - Add `.cursorrules` file
   - Add `rw-config.yaml` to project root
   - Migrate version file path

### 7.2 Short-Term Actions (HIGH)

3. **Improve Installation Instructions**
   - Clearly distinguish canonical templates from ai-dev-kit's actual Kanban
   - Document Epic mashup prevention
   - Provide clear installation examples

4. **Promote Config-Driven Approach**
   - Better documentation
   - Simpler examples
   - Clearer benefits

### 7.3 Long-Term Actions (MEDIUM)

5. **Promote Lifecycle Metadata**
   - Make required
   - Demonstrate benefits
   - Provide templates

6. **Support Legacy Patterns**
   - Document migration paths
   - Provide conversion tools
   - Support during transition

---

## 8. Supporting Documentation

**Detailed Tactical Analysis:**
- `meta-analysis-pattern-frequency-tables.md` - Pattern frequency data and convergence rates
- `meta-analysis-convergence-divergence-maps.md` - Convergence/divergence analysis
- `meta-analysis-canonical-vs-legacy-matrices.md` - Canonical vs legacy comparison matrices
- `meta-analysis-kanban-structure.md` - Detailed Kanban structure analysis and recommendations
- `meta-analysis-documentation-knowledge-structure.md` - Detailed docs/documentation structure analysis
- `meta-analysis-workflows.md` - Detailed workflow structure analysis and recommendations
- `meta-analysis-cursorrules-use-misuse.md` - Detailed cursorrules use/mis-use analysis

**Project Analysis Reports:**
- `projects/ai-dev-kit-adk-analysis.md` - ai-dev-kit source repository analysis
- `projects/been-there-adk-analysis.md` - been-there project analysis
- `projects/dev-toolkit-adk-analysis.md` - dev-toolkit project analysis
- (7 additional project reports)

---

## 9. Next Steps

1. **Review and Approve Proposed Canonical Structures**
   - Kanban E/S/T structure
   - docs/documentation structure
   - Workflow structure
   - Cursorrules structure

2. **Implement Critical Fixes**
   - Fix Epic 9 mismatch in ai-dev-kit source
   - Add source repository frameworks (cursorrules, rw-config)

3. **Create Ultimate Canonical Framework Design Documents**
   - `ultimate-canonical-kanban-structure.md`
   - `ultimate-canonical-kb-structure.md`
   - `ultimate-canonical-workflow-structure.md`
   - `ultimate-canonical-cursorrules-structure.md`

4. **Begin Framework Hardening**
   - Implement installer validation
   - Improve installation instructions
   - Promote canonical structures

---

**Last Updated:** 2025-12-17  
**Version:** 2.0.0  
**Status:** COMPLETE
