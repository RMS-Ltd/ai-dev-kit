---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E3:S04:T01 – Establish Expectations Baseline for Numbering & Versioning Package

**Task ID:** E3:S04:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E3 – Numbering & Versioning Framework  
**Story:** E3:S04 – Numbering & Versioning Package Implementation Review  
**Version Anchor:** ✅ COMPLETE (v0.3.4.1+1)

---

## Scope

Define the implementation expectations baseline for the Numbering & Versioning framework package (`packages/frameworks/numbering & versioning/`). Extract expected behaviors, schemas, constraints, and package composition from documentation to establish a comprehensive expectations baseline for RC readiness review.

**Scope includes:**
- Extract core operating principles from package README
- Document expected versioning schema and rules
- Capture integration expectations with other frameworks
- Map package composition and structure
- Reference source documentation

---

## Inputs

- Package README: `packages/frameworks/numbering & versioning/README.md`
- Versioning Policy: `packages/frameworks/numbering & versioning/versioning-policy.md`
- Versioning Strategy: `packages/frameworks/numbering & versioning/versioning-strategy.md`
- Implementation Guide: `packages/frameworks/numbering & versioning/IMPLEMENTATION_GUIDE.md`
- Package Overview: `packages/frameworks/numbering & versioning/PACKAGE_OVERVIEW.md`
- Integration Documentation: `packages/frameworks/numbering & versioning/integration/`
- Templates: `packages/frameworks/numbering & versioning/EPIC_TEMPLATE.md`, `STORY_TEMPLATE.md`
- Kanban Governance Policy: `packages/frameworks/numbering & versioning/kanban-governance-policy.md`

---

## Deliverables

1. **Expectations baseline document** documenting:
   - Core operating principles
   - Expected versioning schema and behaviors
   - Integration expectations
   - Package composition
   - Source references

---

## Approach

1. **Read Package README** to extract core principles and features
2. **Review Versioning Policy** to understand schema definition and rules
3. **Review Versioning Strategy** to understand forensic traceability and ordering principles
4. **Analyze Integration Points** with Kanban and Workflow Management frameworks
5. **Document Package Composition** (policies, templates, guides, integration docs)
6. **Reference Source Documentation** for traceability

---

## Acceptance Criteria

- [x] Expectations baseline documented and approved ✅
- [x] Core operating principles captured ✅
- [x] Expected versioning schema documented ✅
- [x] Integration expectations mapped ✅
- [x] Package composition documented ✅
- [x] Sources referenced ✅

---

## Expectations Baseline

### Core Operating Principles

**Package Purpose:**
- Complete policy package for implementing numbering and versioning strategies
- Provides `RC.EPIC.STORY.TASK+BUILD` versioning schema
- Enables forensic traceability and parallel development
- Pure documentation package (no runtime dependencies)

**Modularity & Independence:**
- **Standalone Usage:** Package can be used completely independently without requiring any other `ai-dev-kit` packages
- **Hard Dependencies:** None — this is a pure documentation package
- **Soft Dependencies:** Workflow Management package (optional), Kanban package (optional)
- **Independence Score:** 10/10 — Pure documentation, no runtime dependencies

**Copy vs Reference Pattern:**
- **CRITICAL: Copy, Don't Reference** — Projects must copy versioning policies from `ai-dev-kit`, not link to them
- **Why Copy:** Projects need to customize Epic/Story/Task ranges, file paths, and terminology
- **Customization Boundaries:**
  - ✅ **CAN customize:** Epic ranges, file paths, project names, terminology, work item structure, CI/CD integration points
  - ❌ **MUST keep:** Schema format (`RC.EPIC.STORY.TASK+BUILD`), validation rules, core principles (canonical ordering, immutability, traceability), date formats (`DD-MM-YY` for main changelog, `YYYY-MM-DD HH:MM:SS UTC` for detailed changelog)


**Version Schema:**
- Default schema: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.15.1.4+2`)
- Designed to be universal but customizable
- Provides forensic traceability, parallel development, task-level granularity
- Supports epic renumbering strategy (Epic 1-9 legacy, Epic 10+ new format)

**Epic Branch Workflow:**
- **ALWAYS work on epic branches** (`epic/\{n\}-\{description\}`)
- **NEVER commit directly to `main`** during development
- **ONLY merge to `main`** when ready to deploy (prevents unnecessary auto-deployments)

---

### Expected Versioning Schema

#### Schema Format

**Format:** `RC.EPIC.STORY.TASK+BUILD`

**Components:**
- **RC:** Release Candidate (0 = development, 1+ = release candidate)
- **EPIC:** Epic number (e.g., 15)
- **STORY:** Story number within epic (e.g., 1)
- **TASK:** Task number within story (e.g., 4)
- **BUILD:** Build number (increments per release within task)

**Examples:**
- `0.15.1.4+1` = Development, Epic 15, Story 1, Task 4, Build 1
- `0.15.1.4+2` = Development, Epic 15, Story 1, Task 4, Build 2 (same task, increment BUILD)
- `0.15.1.5+1` = Development, Epic 15, Story 1, Task 5, Build 1 (new task, reset BUILD)
- `1.15.1.4+1` = Release Candidate 1, Epic 15, Story 1, Task 4, Build 1

#### Schema Calculation Rules

**Version Progression:**
- Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)
- Same Task: Increment BUILD → `0.N.S.T+{B+1}`
- New Task: Reset BUILD → `0.N.S.{T+1}+1`
- New Story: Reset TASK and BUILD → `0.N.{S+1}.1+1`
- New Epic: Reset STORY, TASK, BUILD → `0.{N+1}.1.1+1`

**Doc-Init Build (+0):**
- `BUILD = 0` valid for first-time E/S/T document creation (docs-only)
- `BUILD >= 1` required for functional changes
- Validator recognizes `+0` as valid (FR-020)

#### Epic Renumbering Strategy

**Problem:** Having both old (`RC.EPIC.STORY.PATCH`) and new (`RC.EPIC.STORY.TASK+BUILD`) version formats within the same epic creates confusion and version collisions.

**Solution:** Complete legacy epics with old format, then start new epics with new format exclusively.

**Epic Ranges:**
- **Epic 1-9:** Legacy format (`RC.EPIC.STORY.PATCH`) - Grandfathered, immutable
- **Epic 10+:** New format (`RC.EPIC.STORY.TASK+BUILD`) - Fresh start, clean version space

**Benefits:**
- Clean separation between legacy and new formats
- No version collisions
- Fresh start for new epics
- Clear branch strategy (`epic/10-*`, `epic/11-*`, etc.)

---

### SemVer Mapping for External Releases

**Status:** Implemented (v0.3.2.11+1)  
**Purpose:** Generate external-facing SemVer tags (`MAJOR.MINOR.PATCH+BUILD`) alongside internal Kanban-based version tags for GitHub releases and package managers.

**Problem Statement:**
Internal versioning (`RC.EPIC.STORY.TASK+BUILD`) is semantically meaningful internally but can appear to regress when switching between epics/stories (e.g., `0.6.7.12+3` → `0.4.6.9+1`), which is problematic for GitHub releases, package managers, and user perception.

**Solution:** Registry-based SemVer mapping using Hybrid Approach that converts internal versions to monotonic SemVer while preserving semantic meaning.

**Hybrid Approach Algorithm:**
- **MAJOR** = RC (direct mapping: 0 → 0, 1 → 1, etc.)
- **MINOR** = First-seen Epic number (sequential based on first appearance, per RC)
- **PATCH** = First-seen Story number (sequential based on first appearance, per RC)
- **BUILD** = Preserved from internal version

**Example Conversions:**
- Internal: `0.6.7.101+24` → SemVer: `0.3.19+24` (Epic 6 first seen → MINOR=3, Story 7 in Epic 6 → PATCH=19)
- Internal: `0.4.14.2+1` → SemVer: `0.4.34+1` (Epic 4 first seen → MINOR=4, Story 14 in Epic 4 → PATCH=34)

**Registry Structure:**
SemVer mappings are stored in `semver-registry.yaml` (project root):
```yaml
rc_0:
  epic_to_minor:
    3: 1    # Epic 3 → MINOR 1 (first appearance)
    6: 2    # Epic 6 → MINOR 2 (second appearance)
  story_to_patch:
    (3, 2): 1    # Epic 3, Story 2 → PATCH 1
    (6, 7): 19   # Epic 6, Story 7 → PATCH 19
```

**Dual Tagging:**
- **Internal Tag:** `v0.6.7.101+24` (for internal tracking)
- **SemVer Tag:** `v0.3.19+24` (for GitHub releases)
- Both tags reference the same commit

---

### Versioning Strategy Principles

#### Canonical Ordering

**Core Principle:** Version numbers (`RC.EPIC.STORY.TASK+BUILD`) are the canonical ordering metric for all releases and changelog entries.

**Key Behaviors:**
- Version ordering is independent of wall-clock time
- Parallel epic development is fully supported
- Changelog orders by version number, not by Git commit time
- Enables true parallel development (multiple epics can work simultaneously)

**Why This Matters:**
- Enables merging parallel epic branches cleanly
- Maintains accurate historical ordering when work happens out of sequence
- Provides reliable traceability when commits span multiple days/weeks
- Supports the `RC.EPIC.STORY.TASK+BUILD` schema effectively

#### Two-Layer Timestamp System

**Layer 1: Main Summary Changelog (`CHANGELOG.md`)**
- Format: `## [version] - DD-MM-YY` (short date format)
- Purpose: Quick reference, merge-to-main dates
- Format: Keep a Changelog standard (newest first)

**Layer 2: Detailed Changelog Archive (`CHANGELOG_v{version}.md`)**
- Format: `**Release Date:** YYYY-MM-DD HH:MM:SS UTC` (full timestamp)
- Purpose: Complete forensic record, immutable historical metadata
- **CRITICAL:** Timestamp is IMMUTABLE once written - never edit the `**Release Date:**` field

#### Forensic Traceability Grid

**Complete Accountability:**
- Version ↔ Epic/Story/Task ↔ Changelogs ↔ Kanban ↔ Git
- Every version maps to a specific task
- Every task maps to a version marker in Kanban
- Every version has a changelog entry
- Every version has a Git tag

**Traceability Requirements:**
- Task document MUST exist before versioning
- Task ID in document MUST match version TASK component
- Epic/Story/Task alignment MUST be verified before version bump
- Version markers in Kanban documents (`✅ COMPLETE (vRC.E.S.T+B)`)

#### Immutability Rules

**Historical Metadata:**
- Detailed changelog timestamps are immutable once written
- Version numbers are immutable (never change after release)
- Task document version anchors are immutable (never edit after completion)
- Changelog entries are immutable (never delete or reorder by timestamp)

**Handling Legacy/Pre-Policy Releases:**
- Legacy versions are grandfathered (preserved as-is)
- Pre-policy releases documented with "Pre-policy" marker
- No retroactive version assignment

---

### Integration Expectations

#### With Workflow Management Package

**Integration Points:**
- RW uses versioning schema from this package
- RW reads version file and follows versioning policy
- RW Step 2 (Bump Version) implements schema calculation rules
- RW Step 3 (Create Detailed Changelog) uses full timestamp format
- RW Step 4 (Update Main Changelog) uses short date format
- RW Step 11 (Create Git Tag) creates dual tags (internal + SemVer)
- RW Step 12.5 (Create/Update GitHub Release) uses SemVer tag

**Optional Integration:**
- RW can work with custom versioning policies
- RW can be customized for different schema formats
- Validation scripts can be adapted for project-specific rules

#### With Kanban Package

**Integration Points:**
- Kanban uses version markers from this package
- Kanban Story Checklist includes version markers (`✅ COMPLETE (vRC.E.S.T+B)`)
- Kanban Task documents include version anchors
- Kanban Epic/Story documents track version ranges

**Optional Integration:**
- Kanban can work without versioning (manual markers)
- Version markers can be added manually if workflow package not used
- Kanban governance policy includes versioning requirements

#### Three-Way Integration (Kanban ↔ Versioning ↔ RW)

**Complete Integration:**
- Automated version marker updates in Kanban documents
- Full forensic traceability across all three frameworks
- Version file ↔ Kanban documents ↔ Changelogs ↔ Git tags
- RW Step 7 (Auto-update Kanban Docs) updates version markers

**Integration Flow:**
1. Task completed → RW triggered
2. RW Step 2: Bump version (uses versioning schema)
3. RW Step 3-4: Create changelogs (uses versioning format)
4. RW Step 7: Update Kanban docs (adds version markers)
5. RW Step 11: Create tags (internal + SemVer)
6. Complete traceability grid maintained

---

### Package Composition

#### Core Documents

1. **`README.md`** - Overview and quick reference
   - Package purpose and modularity
   - Standalone usage capabilities
   - Copy vs reference pattern
   - Consumption pattern for other projects

2. **`PACKAGE_OVERVIEW.md`** - Package structure and usage
   - Package contents overview
   - Modularity and dependencies
   - Quick start guide
   - Key features

3. **`IMPLEMENTATION_GUIDE.md`** - Step-by-step implementation guide
   - Implementation steps for other projects
   - Customization instructions
   - Testing and validation strategies
   - CI/CD integration patterns

#### Versioning Policies

4. **`versioning-policy.md`** - Semantic versioning schema
   - Schema definition (`RC.EPIC.STORY.TASK+BUILD`)
   - Version progression rules
   - Parallel development support
   - Epic renumbering strategy
   - SemVer mapping for external releases
   - Task document requirements

5. **`versioning-strategy.md`** - Complete versioning strategy
   - Canonical ordering principles
   - Two-layer timestamp system
   - Forensic traceability grid
   - Immutability rules
   - Handling of legacy/pre-policy releases

#### Numbering Policies

6. **`learning-outcome-numbering-policy.md`** - Domain-specific numbering schema
   - Policy governing numbering for learning outcomes
   - Adaptable to other numbering systems

7. **`set2-numbering-schema.md`** - Reference to migrated schema
   - Specific implementation details for SET2 system
   - Reference example, adaptable

#### Governance

8. **`kanban-governance-policy.md`** - Kanban governance with versioning integration
   - Work item structure (Epic → Story → Task)
   - Version marker requirements
   - Task document requirements
   - Links versioning to Kanban workflow

#### Templates

9. **`EPIC_TEMPLATE.md`** - Template for epic documents
   - Includes version schema fields (`RC.X.S.T+B`)
   - Includes task numbering format (`EXX:SYY:T001`)
   - Ready to customize for your project

10. **`STORY_TEMPLATE.md`** - Template for story documents
    - Includes version fields and task checklists
    - Includes version markers for completed tasks
    - Ready to customize for your project

#### Integration Documentation

11. **`integration/kanban-workflow-integration.md`** - Framework-level integration guide
    - Three-way integration (Kanban ↔ Versioning ↔ RW)
    - Integration patterns and best practices
    - Portable, template-ready documentation

12. **`integration/integration-patterns-and-best-practices.md`** - Patterns and best practices
    - Decision trees
    - Anti-patterns
    - Versioning strategies for different workflow scenarios

13. **`integration/integration-examples-external-projects.md`** - External project examples
    - Real-world integration examples
    - Adaptation patterns

14. **`integration/integration-troubleshooting-guide.md`** - Troubleshooting guide
    - Common integration issues
    - Solutions and workarounds

---

### Expected Behaviors

#### Version File Structure

**Location:** `src/\{project\}/version.py` (configurable)

**Structure:**
```python
VERSION_RC = 0        # Release candidate (0 = development, 1+ = release candidate)
VERSION_EPIC = 6      # Epic number
VERSION_STORY = 7     # Story number within epic
VERSION_TASK = 101    # Task number within story
VERSION_BUILD = 28    # Build number (increments per release within task)

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
```

**Validation:**
- VERSION_RC must be >= 0
- VERSION_EPIC must match active epic
- VERSION_STORY must match active story within epic
- VERSION_TASK must match active task within story
- VERSION_BUILD must be >= 0 (0 = doc-init, 1+ = normal builds)

#### Changelog Format

**Main Changelog (`CHANGELOG.md`):**
- Format: `## [version] - DD-MM-YY` (short date format)
- Ordering: Newest first (Keep a Changelog format)
- Sections: Added, Changed, Deprecated, Removed, Fixed, Security

**Detailed Changelog Archive (`CHANGELOG_v{version}.md`):**
- Format: `**Release Date:** YYYY-MM-DD HH:MM:SS UTC` (full timestamp)
- Immutability: Timestamp is IMMUTABLE once written
- Content: Complete release details, related work, impact, notes

#### Task Document Requirements

**CRITICAL: Task Document Must Exist Before Versioning**

**Requirements:**
- Task document MUST exist before a version can be created for that task
- Task ID in document MUST match version TASK component
- Epic/Story/Task alignment MUST be verified before version bump

**Task Document Formats:**
- **Separate File:** `Task-\{task\}-*.md` or `T\{task\}-*.md` in Story directory
- **Delimited Section:** Section within Story file using Task ID header (`### E\{epic\}:S\{story\}:T\{task\} –`)

**Required Task Document Fields:**
- Task ID (`E\{epic\}:S\{story\}:T\{task\}`)
- Scope
- Acceptance Criteria
- Status
- Version Anchor (forensic marker format: `✅ COMPLETE (vRC.E.S.T+B)`)
- Input
- Deliverable

**Validation:**
- Release Workflow Step 2 (B.1) validates Task document presence and alignment
- Version validators check Task doc → version component alignment
- Workflow fails if Task document is missing or misaligned

---

### Sources

**Package Location:** `packages/frameworks/numbering & versioning/`

**Core Documentation:**
- `README.md` - Package overview and quick reference
- `PACKAGE_OVERVIEW.md` - Package structure and usage
- `IMPLEMENTATION_GUIDE.md` - Step-by-step implementation guide

**Policy Documents:**
- `versioning-policy.md` - Semantic versioning schema definition
- `versioning-strategy.md` - Complete versioning strategy with forensic traceability
- `kanban-governance-policy.md` - Kanban governance with versioning integration

**Templates:**
- `EPIC_TEMPLATE.md` - Epic document template
- `STORY_TEMPLATE.md` - Story document template

**Integration Documentation:**
- `integration/kanban-workflow-integration.md` - Framework-level integration guide
- `integration/integration-patterns-and-best-practices.md` - Patterns and best practices
- `integration/integration-examples-external-projects.md` - External project examples
- `integration/integration-troubleshooting-guide.md` - Troubleshooting guide

**Domain-Specific (Adaptable):**
- `learning-outcome-numbering-policy.md` - Domain-specific numbering schema
- `set2-numbering-schema.md` - Reference to migrated schema

**Related Documentation (Dev-Kit Specific):**
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md` - Dev-kit specific policy
- `docs/architecture/standards-and-adrs/dual-versioning-package-managers.md` - Dual-versioning guide
- `docs/architecture/standards-and-adrs/versioning-quick-reference.md` - Quick reference

---

**Last Updated:** 2026-01-21 (v0.3.4.1+1 – Expectations baseline established)  
**Version:** v0.3.4.1+1  
**Status:** ✅ COMPLETE
