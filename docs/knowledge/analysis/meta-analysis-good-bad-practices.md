---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-17T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Meta-Analysis: Good/Bad Practice Catalog

**Purpose:** Comprehensive catalog of good and bad practices identified across 10 projects (9 client implementations + ai-dev-kit source)  
**Analysis Date:** 2025-12-17  
**Status:** COMPLETE  
**Version:** 1.0.0  
**Part of:** E6:S06:T06 – Cross-project meta-analysis and canonical framework design

**Data Sources:**
- 10 project analysis reports (9 client implementations + ai-dev-kit source)
- 7 meta-analysis documents (pattern frequency, convergence/divergence, canonical vs legacy, 4 structure-specific)
- 4 granular structure analyses (task-level Kanban, docs/documentation, workflows, cursorrules)

---

## Executive Summary

This catalog synthesizes **good practices** (what works well) and **bad practices** (what causes issues) identified across all analyzed projects, including the ai-dev-kit source repository. Practices are organized by framework dimension (Kanban, docs/documentation, workflows, cursorrules) and include frequency data, impact assessment, and examples.

**Key Findings:**
- **Perfect Convergence Practices:** 1 (KB directory naming - 100%)
- **Strong Convergence Practices:** 3 (task naming 60%, E/S/T hierarchy 100%, story checklists 90%)
- **Critical Bad Practices:** 3 (Epic mashup 30%, Epic 9 mismatch in source, missing cursorrules in source)
- **Source Repository Gaps:** 3 (missing cursorrules, missing rw-config, legacy version path)

---

## 1. Kanban Framework: Good/Bad Practices

### 1.1 Good Practices ✅

#### 1.1.1 Full-Context Task Naming (`E\{epic\}:S\{story\}:T\{task\}`)

**Frequency:** 60% (6/10 projects)  
**Impact:** HIGH - Excellent traceability and context  
**Examples:**
- `been-there`: Uses `E1:S01:T01` format consistently
- `dev-toolkit`: Uses `E6:S06:T01` format
- `agentic-ide-rules`: Uses `E1:S01:T01` format

**Why It's Good:**
- Provides full context without needing to navigate to parent documents
- Enables easy cross-referencing and traceability
- Makes task identification unambiguous
- Supports automated tooling and validation

**Reference Implementation:** ai-dev-kit source uses full-context task naming consistently

#### 1.1.2 Proper E/S/T Hierarchy

**Frequency:** 100% (10/10 projects)  
**Impact:** HIGH - Clear organization and structure  
**Examples:**
- All projects use Epic → Story → Task hierarchy
- Consistent nesting: `epics/Epic-\{N\}/Story-{NNN}/Task-{YYY}.md`
- Clear parent-child relationships

**Why It's Good:**
- Provides clear organizational structure
- Enables hierarchical navigation
- Supports automated tooling
- Makes project structure intuitive

**Reference Implementation:** ai-dev-kit source demonstrates perfect E/S/T hierarchy

#### 1.1.3 Story Checklist Pattern

**Frequency:** 90% (9/10 projects)  
**Impact:** HIGH - Excellent progress tracking  
**Examples:**
- `been-there`: Story checklists in Epic documents with version markers
- `dev-toolkit`: Story checklists with status tracking
- `agentic-ide-rules`: Story checklists with completion markers

**Why It's Good:**
- Provides quick overview of story progress
- Enables version tracking (version markers)
- Supports status tracking (TODO, IN PROGRESS, COMPLETE)
- Makes epic-level progress visible

**Reference Implementation:** ai-dev-kit source uses story checklists consistently

#### 1.1.4 Comprehensive Template System

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** HIGH - Enables consistent structure  
**Example:**
- ai-dev-kit source: 21 epic templates, 62+ story templates, 193+ task templates
- Templates properly contextualized with placeholders
- Clear distinction between core (1-8) and ancillary (9-21) epics

**Why It's Good:**
- Provides standardized starting points
- Ensures consistency across projects
- Reduces setup time
- Enables best practices from the start

**Reference Implementation:** ai-dev-kit source has comprehensive template system

#### 1.1.5 Task Organization (Hybrid Approach)

**Frequency:** 67% embedded, 33% separate files  
**Impact:** MODERATE - Flexible for different task sizes  
**Examples:**
- Small tasks: Embedded in Story document (most common)
- Large tasks: Separate files in `Story-XXX/T\{task\}-*.md`
- Always: Task checklist in Story document

**Why It's Good:**
- Flexibility for different task sizes
- Maintains context for related tasks
- Supports granular documentation when needed
- Matches real-world usage patterns

### 1.2 Bad Practices ❌

#### 1.2.1 Epic Mashup (CRITICAL)

**Frequency:** 30% (3/10 projects: been-there, dev-toolkit, agentic-ide-rules)  
**Impact:** CRITICAL - Confusion about canonical vs project-specific epics  
**Root Cause:** Epic 9 mismatch in ai-dev-kit source (project-specific "Book Related Work" vs canonical "User Management and Authentication")

**Examples:**
- `been-there`: Has Epic 9 "Book Related Work" (inappropriate for mobile app project)
- `dev-toolkit`: Has Epic 9 "Book Related Work" (inappropriate for dev tools project)
- `agentic-ide-rules`: Has Epic 9 "Book Related Work" (inappropriate for IDE rules project)

**Why It's Bad:**
- Confuses canonical epics with project-specific epics
- Clutters Kanban boards with irrelevant epics
- Makes it unclear what actual project work is
- Undermines framework adoption quality
- **Root Cause:** ai-dev-kit source Epic 9 "Book Related Work" conflicts with canonical Epic 9

**Prevention Strategy:**
1. **CRITICAL:** Fix Epic 9 mismatch in ai-dev-kit source (rename to Epic 24+)
2. Add installer validation to prevent Epic mashup
3. Clearly distinguish canonical templates from ai-dev-kit's actual Kanban
4. Improve installation instructions

#### 1.2.2 Epic 9 Mismatch in Source (CRITICAL)

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** CRITICAL - Root cause of Epic mashup issue  
**Example:**
- ai-dev-kit source: Epic 9 "Book Related Work" (project-specific epic for "Vibe Coding For Dummies" book)
- Canonical template: Epic 9 "User Management and Authentication" (canonical ancillary epic)

**Why It's Bad:**
- **ROOT CAUSE** of Epic mashup issue affecting 30% of client projects
- When projects copy ai-dev-kit's actual Kanban structure, they get wrong Epic 9
- Creates internal inconsistency between ai-dev-kit's actual Kanban and canonical templates
- Propagates incorrect Epic 9 to client projects

**Required Action:**
- Rename ai-dev-kit's Epic 9 "Book Related Work" to Epic 24+ (project-specific range)
- OR: Clearly document that Epic 9 in ai-dev-kit is project-specific, not canonical
- Update all Epic 9 references in ai-dev-kit source

#### 1.2.3 Inconsistent Epic Naming

**Frequency:** 44% `Epic-\{N\}`, 22% `Epic \{N\}`, 33% `E\{N\}`  
**Impact:** MODERATE - Reduces consistency  
**Examples:**
- Mixed usage across projects
- Some projects use hyphen (`Epic-1`)
- Some projects use space (`Epic 1`)
- Some projects use abbreviated (`E1`)

**Why It's Bad:**
- Reduces consistency across projects
- Makes automated tooling harder
- Creates confusion about canonical format
- Hinders cross-project collaboration

**Prevention Strategy:**
- Promote canonical `Epic-\{N\}` format
- Support legacy formats during migration
- Document canonical format clearly

#### 1.2.4 Inconsistent Task Padding

**Frequency:** 50% 2-digit (`T01`), 50% 3-digit (`T001`)  
**Impact:** MODERATE - Reduces consistency  
**Examples:**
- Some projects use 2-digit padding (`T01`, `T02`)
- Some projects use 3-digit padding (`T001`, `T002`)

**Why It's Bad:**
- Reduces consistency across projects
- Makes automated tooling harder
- Creates confusion about canonical format

**Prevention Strategy:**
- Promote canonical 2-digit padding (`T01`)
- Support legacy 3-digit padding during migration
- Document canonical format clearly

---

## 2. docs/documentation Framework: Good/Bad Practices

### 2.1 Good Practices ✅

#### 2.1.1 Perfect KB Directory Naming (`docs/`)

**Frequency:** 100% (10/10 projects)  
**Impact:** HIGH - Perfect convergence  
**Examples:**
- All projects use `docs/` (uppercase, abbreviation)
- Consistent across all analyzed projects

**Why It's Good:**
- Perfect convergence (100% adoption)
- Universal pattern
- Clear and concise
- Easy to identify knowledge base

**Reference Implementation:** ai-dev-kit source uses `docs/` directory naming

#### 2.1.2 Perfect 5-Pillar KB Structure

**Frequency:** 40% (4/10 projects)  
**Impact:** HIGH - Excellent organization  
**Examples:**
- ai-dev-kit source: Perfect 5-pillar structure (Architecture, Changelog, PM, Guides, Documentation)
- `been-there`: 5-pillar structure
- `dev-toolkit`: 5-pillar structure

**Why It's Good:**
- Clear separation of concerns
- Standardized organization
- Easy navigation
- Supports automated tooling

**Reference Implementation:** ai-dev-kit source demonstrates perfect 5-pillar canonical structure

#### 2.1.3 Document Frontmatter Usage

**Frequency:** 90% (9/10 projects)  
**Impact:** HIGH - Essential for metadata-driven management  
**Examples:**
- Most projects use YAML frontmatter
- Consistent metadata structure
- Lifecycle metadata present

**Why It's Good:**
- Enables metadata-driven document management
- Supports automated lifecycle management
- Provides document classification
- Enables tooling and automation

**Reference Implementation:** ai-dev-kit source uses frontmatter consistently

#### 2.1.4 Hierarchical README Navigation

**Frequency:** 78% (7/9 projects with KB)  
**Impact:** MODERATE - Good navigation  
**Examples:**
- Root `docs/README.md` for top-level navigation
- Section `README.md` files for each pillar
- Directory-level `README.md` files

**Why It's Good:**
- Provides clear navigation structure
- Enables hierarchical browsing
- Standard markdown format
- Easy to maintain

**Reference Implementation:** ai-dev-kit source uses hierarchical READMEs

#### 2.1.5 Lifecycle Metadata Usage

**Frequency:** 60% (6/10 projects)  
**Impact:** MODERATE - Enables automated management  
**Examples:**
- Projects use `lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy`
- Supports automated document expiration
- Enables document persistence classification

**Why It's Good:**
- Enables automated document lifecycle management
- Supports document expiration
- Provides document persistence classification
- Reduces manual maintenance

**Reference Implementation:** ai-dev-kit source uses lifecycle metadata

### 2.2 Bad Practices ❌

#### 2.2.1 Missing Lifecycle Metadata

**Frequency:** 40% (4/10 projects)  
**Impact:** MODERATE - No automated document management  
**Examples:**
- Some projects don't use lifecycle metadata
- Documents don't have expiration dates
- Manual document cleanup required

**Why It's Bad:**
- No automated document lifecycle management
- Manual cleanup required
- Documents may become stale
- Reduces documentation quality over time

**Prevention Strategy:**
- Promote lifecycle metadata usage
- Make lifecycle metadata required
- Provide templates with lifecycle metadata
- Document benefits of automated management

#### 2.2.2 Inconsistent KB Organization

**Frequency:** 40% 5-pillar, 10% multi-pillar, 40% hybrid, 10% other  
**Impact:** MODERATE - Reduces consistency  
**Examples:**
- Some projects use 5-pillar structure
- Some projects use multi-pillar (15+ pillars)
- Some projects use hybrid (`docs/` + `docs/`)
- Some projects use legacy structures

**Why It's Bad:**
- Reduces consistency across projects
- Makes automated tooling harder
- Creates confusion about canonical format
- Hinders cross-project collaboration

**Prevention Strategy:**
- Promote canonical 5-pillar structure
- Support multi-pillar for enterprise projects
- Support hybrid during migration
- Document when to use which pattern

#### 2.2.3 Missing Obsidian Support

**Frequency:** 78% use `README.md`, 22% use `_index.md`  
**Impact:** LOW - Limits Obsidian compatibility  
**Examples:**
- Most projects use `README.md` only
- Some Obsidian projects need `_index.md`
- Missing Obsidian links (`[[Link]]`)

**Why It's Bad:**
- Limits Obsidian compatibility
- Reduces cross-referencing capabilities
- Hinders Obsidian-based workflows

**Prevention Strategy:**
- Support both `README.md` and `_index.md`
- Support Obsidian links (`[[Link]]`) for Obsidian projects
- Document Obsidian compatibility

---

## 3. Workflow Framework: Good/Bad Practices

### 3.1 Good Practices ✅

#### 3.1.1 Config-Driven Approach (`rw-config.yaml`)

**Frequency:** 30% (3/10 projects)  
**Impact:** HIGH - Best practice  
**Examples:**
- `agentic-ide-rules`: Uses `rw-config.yaml` for workflow configuration
- `dev-toolkit`: Uses config-driven approach
- Config file defines version file, changelog paths, scripts path

**Why It's Good:**
- Provides flexibility and maintainability
- Reduces hardcoded paths
- Enables easy customization
- Supports project-specific configuration

**Prevention Strategy:**
- Promote config-driven approach
- Make config part of installation
- Document config benefits
- Provide migration guide from hardcoded paths

#### 3.1.2 Comprehensive 12-Step Release Workflow

**Frequency:** 20% (2/10 projects)  
**Impact:** HIGH - Best practice  
**Examples:**
- `agentic-ide-rules`: Comprehensive 12-step RW trigger
- ai-dev-kit source: Comprehensive 12-step workflow YAML definitions

**Why It's Good:**
- Provides complete release workflow
- Includes mandatory branch safety check
- Supports all standard RW steps
- Enables standardized release process

**Reference Implementation:** ai-dev-kit source has comprehensive 12-step workflow YAML definitions

#### 3.1.3 Mandatory Branch Safety Check

**Frequency:** 40% (4/10 projects)  
**Impact:** CRITICAL - Prevents branch contamination  
**Examples:**
- Projects with branch safety check prevent accidental commits to wrong branches
- Validates branch context before proceeding
- Blocks workflow if branch mismatch detected

**Why It's Good:**
- **CRITICAL:** Prevents cross-epic contamination
- Validates branch context before proceeding
- Blocks workflow if branch mismatch detected
- Reduces risk of versioning errors

**Prevention Strategy:**
- Enforce branch safety check in RW (mandatory, blocking)
- Document benefits and risks
- Provide examples of contamination prevention
- Make branch safety check part of installation

#### 3.1.4 Agent-Driven Execution Pattern

**Frequency:** 56% (5/9 projects with workflows)  
**Impact:** HIGH - User visibility and control  
**Examples:**
- Projects use agent-driven execution (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)
- Cursor TODO tracking for progress visibility
- User approval at each step

**Why It's Good:**
- Provides user visibility and control
- Enables intelligent execution
- Supports progress tracking
- Reduces risk of errors

**Prevention Strategy:**
- Promote agent-driven execution
- Document benefits
- Provide examples
- Make agent-driven execution part of installation

#### 3.1.5 Cursor TODO Progress Tracking

**Frequency:** 50% (5/10 projects)  
**Impact:** HIGH - User visibility  
**Examples:**
- Projects use Cursor TODOs for workflow progress tracking
- Provides visibility into workflow execution
- Enables user monitoring

**Why It's Good:**
- Provides user visibility into workflow execution
- Enables progress monitoring
- Supports user control
- Reduces uncertainty

**Prevention Strategy:**
- Promote Cursor TODO tracking
- Document benefits
- Provide examples
- Make progress tracking part of installation

### 3.2 Bad Practices ❌

#### 3.2.1 Missing RW Trigger (CRITICAL)

**Frequency:** 40% (4/10 projects)  
**Impact:** HIGH - No standardized release workflow  
**Examples:**
- Projects without RW trigger have no standardized release process
- Manual release process
- Inconsistent release practices

**Why It's Bad:**
- No standardized release workflow
- Manual release process prone to errors
- Inconsistent release practices
- Reduces framework adoption quality

**Prevention Strategy:**
- Make RW trigger part of installation
- Document RW trigger benefits
- Provide examples and templates
- Show standardized release process

#### 3.2.2 Missing Config File (HIGH)

**Frequency:** 70% (7/10 projects)  
**Impact:** HIGH - Hardcoded paths reduce flexibility  
**Examples:**
- Projects without `rw-config.yaml` use hardcoded paths in `.cursorrules`
- Hardcoded version file paths
- Hardcoded changelog paths

**Why It's Bad:**
- Hardcoded paths reduce flexibility
- Difficult to maintain and update
- Inconsistent configuration patterns
- Reduces framework adoption quality

**Prevention Strategy:**
- Promote config-driven approach
- Make config part of installation
- Document config benefits
- Provide migration guide from hardcoded paths

#### 3.2.3 Missing Branch Safety Check (CRITICAL)

**Frequency:** 60% (6/10 projects)  
**Impact:** CRITICAL - Risk of branch contamination  
**Examples:**
- Projects without branch safety check risk accidental commits to wrong branches
- No validation of branch context
- Risk of versioning errors

**Why It's Bad:**
- **CRITICAL:** Risk of cross-epic contamination
- No validation of branch context
- Risk of versioning errors
- Reduces framework adoption quality

**Prevention Strategy:**
- Enforce branch safety check in RW (mandatory, blocking)
- Document benefits and risks
- Provide examples of contamination prevention
- Make branch safety check part of installation

#### 3.2.4 Missing Progress Tracking

**Frequency:** 50% (5/10 projects)  
**Impact:** MODERATE - No user visibility  
**Examples:**
- Projects without Cursor TODO tracking have no workflow progress visibility
- No user monitoring
- Uncertainty about workflow execution

**Why It's Bad:**
- No user visibility into workflow execution
- No progress monitoring
- Uncertainty about workflow execution
- Reduces user confidence

**Prevention Strategy:**
- Promote Cursor TODO tracking
- Document benefits
- Provide examples
- Make progress tracking part of installation

#### 3.2.5 Missing Workflow YAML Files (in Source)

**Frequency:** 1 project (ai-dev-kit source has YAML but no `.cursorrules`)  
**Impact:** HIGH - Source doesn't demonstrate own framework  
**Example:**
- ai-dev-kit source: Has comprehensive workflow YAML definitions but no `.cursorrules` file
- Cannot demonstrate RW trigger to client projects

**Why It's Bad:**
- Source repository doesn't demonstrate own framework
- Cannot show RW trigger to client projects
- Undermines framework credibility
- Reduces framework adoption quality

**Required Action:**
- Add `.cursorrules` file to ai-dev-kit source
- Include comprehensive RW trigger section
- Demonstrate own framework

---

## 4. Cursorrules Framework: Good/Bad Practices

### 4.1 Good Practices ✅

#### 4.1.1 Standard `.cursorrules` File Naming

**Frequency:** 90% (9/10 projects)  
**Impact:** HIGH - Perfect convergence  
**Examples:**
- All projects with cursorrules use `.cursorrules` (dot-prefixed, lowercase)
- Standard Cursor IDE convention
- Universal pattern

**Why It's Good:**
- Perfect convergence (90% adoption)
- Standard Cursor IDE convention
- Universal pattern
- Easy to identify

**Note:** ai-dev-kit source missing `.cursorrules` file (gap)

#### 4.1.2 Comprehensive RW Trigger Section

**Frequency:** 20% (2/10 projects)  
**Impact:** HIGH - Best practice  
**Examples:**
- `agentic-ide-rules`: Comprehensive 12-step RW trigger
- All 12 steps defined with detailed descriptions
- Mandatory branch safety check (Step 1)

**Why It's Good:**
- Provides complete release workflow
- Includes mandatory branch safety check
- Supports all standard RW steps
- Enables standardized release process

**Prevention Strategy:**
- Promote comprehensive RW trigger
- Document benefits
- Provide examples and templates
- Make comprehensive trigger part of installation

#### 4.1.3 Config-Driven Approach in Cursorrules

**Frequency:** 30% (3/10 projects)  
**Impact:** HIGH - Best practice  
**Examples:**
- Projects use `rw-config.yaml` for workflow configuration
- Load config in `.cursorrules` RW trigger
- No hardcoded paths

**Why It's Good:**
- Provides flexibility and maintainability
- Reduces hardcoded paths
- Enables easy customization
- Supports project-specific configuration

**Prevention Strategy:**
- Promote config-driven approach
- Make config part of installation
- Document config benefits
- Provide migration guide from hardcoded paths

#### 4.1.4 Document Lifecycle Management Section

**Frequency:** 30% (3/10 projects)  
**Impact:** MODERATE - Automated document management  
**Examples:**
- Projects use document lifecycle management based on frontmatter metadata
- Automated expiration and housekeeping
- Policy salience parsing

**Why It's Good:**
- Enables automated document lifecycle management
- Supports document expiration
- Provides document persistence classification
- Reduces manual maintenance

**Prevention Strategy:**
- Promote document lifecycle management
- Document benefits
- Provide examples
- Make lifecycle management part of installation

#### 4.1.5 Git Workflow Restrictions Section

**Frequency:** 30% (3/10 projects)  
**Impact:** HIGH - Workflow enforcement  
**Examples:**
- Projects use strict git restrictions (commits only via RW, push only via RW)
- Branch isolation enforced
- Pre-commit validation

**Why It's Good:**
- Enforces workflow compliance
- Prevents manual git operations
- Reduces risk of errors
- Maintains workflow integrity

**Prevention Strategy:**
- Promote git workflow restrictions
- Document benefits
- Provide examples
- Make git restrictions part of installation

### 4.2 Bad Practices ❌

#### 4.2.1 Missing `.cursorrules` File (CRITICAL - in Source)

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** CRITICAL - Source doesn't demonstrate own framework  
**Example:**
- ai-dev-kit source: No `.cursorrules` file
- Cannot demonstrate RW trigger to client projects
- Source repository doesn't use own framework

**Why It's Bad:**
- **CRITICAL:** Source repository doesn't demonstrate own framework
- Cannot show RW trigger to client projects
- Undermines framework credibility
- Reduces framework adoption quality

**Required Action:**
- Add `.cursorrules` file to ai-dev-kit source
- Include comprehensive RW trigger section
- Demonstrate own framework

#### 4.2.2 Missing RW Trigger Section

**Frequency:** 40% (4/10 projects)  
**Impact:** HIGH - No standardized release workflow  
**Examples:**
- Projects without RW trigger have no standardized release process
- Manual release process
- Inconsistent release practices

**Why It's Bad:**
- No standardized release workflow
- Manual release process prone to errors
- Inconsistent release practices
- Reduces framework adoption quality

**Prevention Strategy:**
- Make RW trigger part of installation
- Document RW trigger benefits
- Provide examples and templates
- Show standardized release process

#### 4.2.3 Hardcoded Paths in Cursorrules

**Frequency:** 20% (2/10 projects)  
**Impact:** MODERATE - Reduced flexibility  
**Examples:**
- Projects use hardcoded paths in `.cursorrules` instead of config
- Hardcoded version file paths
- Hardcoded changelog paths

**Why It's Bad:**
- Hardcoded paths reduce flexibility
- Difficult to maintain and update
- Inconsistent configuration patterns
- Reduces framework adoption quality

**Prevention Strategy:**
- Promote config-driven approach
- Make config part of installation
- Document config benefits
- Provide migration guide from hardcoded paths

#### 4.2.4 Missing Document Lifecycle Management

**Frequency:** 70% (7/10 projects)  
**Impact:** MODERATE - No automated document management  
**Examples:**
- Projects without document lifecycle management have no automated document cleanup
- Manual document cleanup required
- Documents may become stale

**Why It's Bad:**
- No automated document lifecycle management
- Manual cleanup required
- Documents may become stale
- Reduces documentation quality over time

**Prevention Strategy:**
- Promote document lifecycle management
- Document benefits
- Provide examples
- Make lifecycle management part of installation

#### 4.2.5 Missing Git Workflow Restrictions

**Frequency:** 70% (7/10 projects)  
**Impact:** MODERATE - No workflow enforcement  
**Examples:**
- Projects without git restrictions allow manual git operations
- Risk of workflow violations
- Inconsistent git practices

**Why It's Bad:**
- No workflow enforcement
- Risk of workflow violations
- Inconsistent git practices
- Reduces framework adoption quality

**Prevention Strategy:**
- Promote git workflow restrictions
- Document benefits
- Provide examples
- Make git restrictions part of installation

---

## 5. Cross-Cutting Good/Bad Practices

### 5.1 Good Practices ✅

#### 5.1.1 Source Repository as Reference Implementation

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** HIGH - Demonstrates best practices  
**Example:**
- ai-dev-kit source: Perfect 5-pillar KB structure, comprehensive workflow YAML definitions

**Why It's Good:**
- Provides reference implementation
- Demonstrates best practices
- Shows canonical structures
- Enables learning from source

**Gap:** ai-dev-kit source missing `.cursorrules` file (should be added)

#### 5.1.2 Proper Versioning Integration

**Frequency:** 50% (5/10 projects)  
**Impact:** HIGH - Enables traceability  
**Examples:**
- Projects integrate versioning with Kanban (Epic/Story/Task numbers in version string)
- Version bumping integrated with Release Workflow
- Version markers in Kanban documents

**Why It's Good:**
- Enables forensic traceability
- Integrates versioning with Kanban
- Supports automated version bumping
- Provides version context

### 5.2 Bad Practices ❌

#### 5.2.1 Source Repository Not Using Own Frameworks (CRITICAL)

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** CRITICAL - Undermines framework credibility  
**Examples:**
- ai-dev-kit source: Missing `.cursorrules` file
- ai-dev-kit source: Missing `rw-config.yaml` in project root (only example exists)
- ai-dev-kit source: Legacy version file path (`src/fynd_deals/version.py`)

**Why It's Bad:**
- **CRITICAL:** Source repository doesn't use own frameworks
- Cannot demonstrate frameworks to client projects
- Undermines framework credibility
- Reduces framework adoption quality

**Required Action:**
- Add `.cursorrules` file to ai-dev-kit source
- Add `rw-config.yaml` to project root
- Migrate version file path to canonical location

#### 5.2.2 Legacy Version File Path (in Source)

**Frequency:** 1 project (ai-dev-kit source)  
**Impact:** MODERATE - Inconsistency  
**Example:**
- ai-dev-kit source: `src/fynd_deals/version.py` (legacy path from previous project)
- Should be: `src/ai_dev_kit/version.py` (canonical path)

**Why It's Bad:**
- Inconsistency in source repository
- Legacy path from previous project
- Doesn't match canonical structure
- Creates confusion

**Required Action:**
- Migrate version file path to `src/ai_dev_kit/version.py`
- Update all references
- Align with canonical structure

---

## 6. Summary: Practice Adoption Rates

### 6.1 Good Practices Adoption

| Practice | Adoption Rate | Status |
|----------|---------------|--------|
| KB directory naming (`docs/`) | 100% | ✅ Perfect |
| E/S/T hierarchy | 100% | ✅ Perfect |
| Story checklist pattern | 90% | ✅ Strong |
| Document frontmatter | 90% | ✅ Strong |
| Full-context task naming | 60% | ⚠️ Moderate |
| Lifecycle metadata | 60% | ⚠️ Moderate |
| Config-driven approach | 30% | ❌ Low |
| Comprehensive RW trigger | 20% | ❌ Low |
| Document lifecycle management | 30% | ❌ Low |
| Git workflow restrictions | 30% | ❌ Low |

### 6.2 Bad Practices Frequency

| Practice | Frequency | Severity |
|----------|-----------|----------|
| Epic mashup | 30% | 🔴 CRITICAL |
| Missing RW trigger | 40% | 🔴 CRITICAL |
| Missing branch safety check | 60% | 🔴 CRITICAL |
| Missing config file | 70% | 🟠 HIGH |
| Missing document lifecycle | 70% | 🟠 HIGH |
| Missing git restrictions | 70% | 🟠 HIGH |
| Missing progress tracking | 50% | 🟡 MODERATE |
| Inconsistent epic naming | 44% | 🟡 MODERATE |
| Inconsistent task padding | 50% | 🟡 MODERATE |

---

## 7. Recommendations

### 7.1 Immediate Actions (CRITICAL)

1. **Fix Epic 9 Mismatch in ai-dev-kit Source**
   - Rename Epic 9 "Book Related Work" to Epic 24+
   - Update all references
   - Add installer validation

2. **Add `.cursorrules` File to ai-dev-kit Source**
   - Include comprehensive RW trigger section
   - Demonstrate own framework
   - Add config-driven approach

3. **Add `rw-config.yaml` to ai-dev-kit Source**
   - Create active config file in project root
   - Configure for ai-dev-kit
   - Demonstrate config-driven approach

### 7.2 Short-Term Actions (HIGH)

4. **Promote Config-Driven Approach**
   - Make config part of installation
   - Document config benefits
   - Provide migration guide

5. **Enforce Branch Safety Check**
   - Make mandatory and blocking
   - Document benefits and risks
   - Provide examples

6. **Promote Comprehensive RW Trigger**
   - Make part of installation
   - Document benefits
   - Provide examples and templates

### 7.3 Long-Term Actions (MEDIUM)

7. **Promote Lifecycle Metadata**
   - Make required
   - Document benefits
   - Provide templates

8. **Support Legacy Patterns**
   - Document migration paths
   - Provide conversion tools
   - Support during transition

---

**Last Updated:** 2025-12-17  
**Version:** 1.0.0  
**Status:** COMPLETE

