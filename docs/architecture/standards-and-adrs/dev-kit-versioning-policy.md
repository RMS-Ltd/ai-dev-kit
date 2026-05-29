---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:36Z
expires_at: null
housekeeping_policy: keep
---

# Dev Kit Versioning Policy

**Status:** Active
**Owner:** AI Dev Kit / Book Project Lead
**Last Updated:** 2025-12-02
**Related Work:** Epic 1 (AI Dev Kit Core)

---

## 1. Purpose

This policy defines how the **AI Dev Kit** repository uses the `RC.EPIC.STORY.TASK+BUILD` versioning schema.

Goals:

- Apply the **full versioning schema and strategy** from the Numbering & Versioning framework to this repo.
- Ensure all substantive work is **Task-driven** and that versions reflect **Tasks**.
- Keep `ai-dev-kit` logically separate from any external project (e.g., Confidentia, fynd.deals) while reusing the same principles.

---

### 1.1 Mental Model: Internal vs Release Versions

The dev-kit follows the framework’s **dual-version model**:

- **Internal version (`RC.EPIC.STORY.TASK+BUILD`)**
  - Forensic coordinate and Kanban anchor.
  - Encodes Epic/Story/Task/Build and is used by RW/UKW/CMW and Kanban docs.

- **Release version (SemVer `MAJOR.MINOR.PATCH+BUILD`)**
  - External-facing version shown in README badges, GitHub releases, and package managers.
  - Always derived from the internal version using the mapping defined in Section 2.1.

In practice:

- When talking to **external consumers**, the dev-kit presents **SemVer first**, optionally followed by the internal version in parentheses, for example:
  - `v0.3.19+2 (internal: v0.6.7.101+2)`.
- When talking about **Kanban, tasks, and workflow internals**, the dev-kit uses `RC.EPIC.STORY.TASK+BUILD` directly.

## 2. Schema (Adopted)

This repo fully adopts the RC.EPIC.STORY.TASK+BUILD schema:

- **Format:** `RC.EPIC.STORY.TASK+BUILD`
- **Components:**
  - **RC:** Release Candidate (0 = development, 1+ = release candidate)
  - **EPIC:** Dev-kit Epic number (1, 2, 3, 4, …)
  - **STORY:** Story number within Epic
  - **TASK:** Task number within Story
  - **BUILD:** Build number (increments per release within a Task)

Examples (dev-kit context):

- `0.1.1.1+1` – Dev snapshot for **Epic 1**, Story 1, Task 1, first build
- `0.2.3.2+4` – Dev snapshot for **Epic 2**, Story 3, Task 2, 4th build
- `1.4.1.1+1` – Release Candidate 1 for **Epic 4**, Story 1, Task 1, first build

> **Note:** Any references to versions like `0.9.21.3+1` in framework docs are **examples from other projects**, not dev-kit releases.

---

## 2.1 SemVer Mapping for External Releases

**Status:** Implemented (v0.3.2.11+1)
**Purpose:** Generate external-facing SemVer tags (`MAJOR.MINOR.PATCH+BUILD`) alongside internal Kanban-based version tags for GitHub releases.

### Problem Statement

Internal versioning (`RC.EPIC.STORY.TASK+BUILD`) is semantically meaningful internally but can appear to regress when switching between epics/stories (e.g., `0.6.7.12+3` → `0.4.6.9+1`), which is problematic for GitHub releases and user perception.

**Solution:** Registry-based SemVer mapping using Hybrid Approach that converts internal versions to monotonic SemVer while preserving semantic meaning.

### Hybrid Approach Algorithm

**Mapping Formula:**
- **MAJOR** = RC (direct mapping: 0 → 0, 1 → 1, etc.)
- **MINOR** = First-seen Epic number (sequential based on first appearance, per RC)
- **PATCH** = First-seen Story number (sequential based on first appearance, per RC)
- **BUILD** = Preserved from internal version

**Example Conversions:**
- Internal: `0.6.7.101+24` → SemVer: `0.3.19+24` (Epic 6 first seen → MINOR=3, Story 7 in Epic 6 → PATCH=19)
- Internal: `0.4.14.2+1` → SemVer: `0.4.34+1` (Epic 4 first seen → MINOR=4, Story 14 in Epic 4 → PATCH=34)
- Internal: `0.9.1.8+10` → SemVer: `0.9.60+10` (Epic 9 first seen → MINOR=9, Story 1 in Epic 9 → PATCH=60)

### Limitations

This approach doesn't encode TASK, so multiple tasks in the same story can produce SemVer collisions (e.g., `0.6.7.101+5`, `0.6.7.102+5`, `0.6.7.103+5` all map to `0.6.52+5`).

---

### Task-Touch Derived Mapping (ADR-002)

**Status:** Implemented (v0.6.7.18+1)
**Purpose:** Provide strictly monotonic, collision-free SemVer mapping suitable for package managers.

#### Problem Statement

Registry-based mapping can cause SemVer tag collisions when multiple tasks within the same epic/story are released with the same BUILD number, violating the "1 internal → 1 SemVer" expectation.

#### Solution

Task-Touch Derived Mapping uses a global counter that increments each time a task is "touched" by a release, ensuring unique SemVer for every internal version.

#### Task-Touch Algorithm

**Mapping Formula:**
- **MAJOR** = RC (direct mapping: 0 → 0, 1 → 1, etc.)
- **MINOR** = count of epics signed off (per RC)
- **PATCH** = global task-touch counter (increments once per RW release)
- **BUILD** = Preserved from internal version

#### Example Conversions

Assuming 6 epics signed off for RC 0 and task-touch counter starts at 1:
- Internal: `0.6.7.101+5` → SemVer: `0.6.1+5` (first task touch)
- Internal: `0.3.2.12+2` → SemVer: `0.6.2+2` (second task touch)
- Internal: `0.2.13.7+1` → SemVer: `0.6.3+1` (third task touch)
- Internal: `0.6.7.103+5` → SemVer: `0.6.4+5` (fourth task touch)

#### Benefits

- **Zero Collisions**: Each internal version maps to exactly one SemVer
- **Strict Monotonicity**: PATCH always increases (package-manager friendly)
- **1:1 Traceability**: Direct mapping between internal and external versions
- **Deterministic**: Given repository history, mapping is reproducible

#### Configuration

Task-Touch mapping is configured via `rw-config.yaml`:

```yaml
# SemVer mapping strategy: "registry" (default) or "task_touch"
semver_mapping_strategy: registry
```

#### Migration

Existing projects can migrate by:
1. Analyzing git history to compute initial task-touch counter
2. Running migration utility to backfill counters
3. Switching configuration to `task_touch` mode
4. Verifying no collisions in test environment

---

### Registry Structure

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

### Dual Tagging in Release Workflow

**RW Step 11** creates dual tags:
- **Internal Tag:** `v0.6.7.101+24` (for internal tracking)
- **SemVer Tag:** `v0.3.19+24` (for GitHub releases)

Both tags reference the same commit. Internal tag maintains backward compatibility, SemVer tag provides monotonic versioning for external consumers.

### 1:1 mapping and tag alignment

- **One internal version → one SemVer:** The registry plus BUILD ensure that each internal version string maps to exactly one SemVer string. The converter (`semver_converter.py`) is the single source of truth for this mapping.
- **One SemVer tag → one commit:** For each release, the SemVer tag and the internal tag MUST point to the **same commit**. No SemVer tag may point to a different commit than the one that contains the corresponding internal version for that release.
- **Consequence:** If a SemVer tag already exists on the remote but points to a different commit than the current release, that is a violation; it MUST be corrected (e.g. by force-pushing the tag to the correct commit: `git push origin +vX.Y.Z+N`) before considering the release complete. An optional validator can check this before push (see Implementation below).

### README Version Display

**Outward-Facing SemVer:** The project README displays the **SemVer version** (not the internal version) as it is the outward-facing version for external consumers.

**RW Step 5** automatically:
- Generates SemVer from internal version using `semver_converter.py`
- Updates README with SemVer (e.g., `**Version:** v0.3.19+2`)
- Internal version remains in version file (`src/fynd_deals/version.py`) for internal tracking

**Rationale:** External users and package managers expect monotonically increasing SemVer versions. The internal `RC.EPIC.STORY.TASK+BUILD` format is for internal development traceability only.

### Implementation

- **Converter Script:** `packages/frameworks/workflow mgt/scripts/version/semver_converter.py` (forward and reverse conversion; 1:1 documented)
- **Migration Script:** `packages/frameworks/workflow mgt/scripts/version/build_semver_registry.py`
- **Validation Script:** `packages/frameworks/workflow mgt/scripts/validation/validate_semver_monotonic.py`
- **Tag-alignment validator (optional):** `packages/frameworks/workflow mgt/scripts/validation/validate_semver_tag_alignment.py` — checks that the SemVer tag on the remote points to the same commit as the current release (see 1:1 mapping and tag alignment).
- **Registry File:** `semver-registry.yaml` (project root)

**Related Documentation:**
- **Proposal:** `docs/architecture/standards-and-adrs/semver-mapping-proposal.md`
- **Implementation Impact:** `docs/architecture/standards-and-adrs/semver-mapping-implementation-impact.md`

**Mapping modes (dev-kit stance):**

- The underlying framework defines multiple **SemVer mapping modes**. The dev-kit itself adopts the **registry-based epic/story mapping mode (Mode A)** as its default:
  - `MAJOR = RC`
  - `MINOR` and `PATCH` assigned via the `semver-registry.yaml` registry.
- Other projects copying this policy MAY choose the **simple global PATCH mode (Mode B)** documented in the framework if they prefer a “SemVer-first, global counter” external story.

**Optional metadata pattern:**

When needed, SemVer tags MAY append metadata that embeds the internal version for machine parsing:

- Pattern: `+rc.<RC>.e<EPIC>.s<STORY>.t<TASK>.b<BUILD>`
- Example: internal `0.6.7.101+2` → SemVer tag `v0.3.19+2+rc.0.e6.s7.t101.b2`

This metadata is optional and does not affect SemVer ordering; public-facing docs SHOULD normally show the clean SemVer (`v0.3.19+2`) and reserve metadata for tooling and tag inspection.

---

## 3. Epic Ranges for AI Dev Kit

Unlike the legacy/new split in the original policy, this repo starts **clean**:

- **Epic 1+:** All dev-kit epics use the full `RC.EPIC.STORY.TASK+BUILD` schema.
- There is **no legacy range** (1–9) in this repo – we start from first principles.

Initial epics:

- **Epic 1 – AI Dev Kit Core**
- **Epic 2 – Workflow Management Framework**
- **Epic 3 – Numbering & Versioning Framework**
- **Epic 4 – Kanban Framework**

Future epics (5+) can be introduced as needed (for example, “Book Manuscript”, “Examples & Templates”, etc.).

---

## 4. Mapping Kanban to Version Components

This repo's Kanban is defined under:

- `docs/project-management/kanban/_index.md`
- `docs/project-management/kanban/epics/Epic-X/stories/Story-XXX-*.md`

Mapping rules:

- **Every Story** belongs to exactly one Epic (1–4 to start with).
- **Every Task**:
  - Lives under a Story.
  - Will eventually get a numeric **Task ID** that matches the `TASK` component in the version.
  - **MUST have a discrete Task document** (or clearly delimited section within Story document).
- **Every substantive change** that goes through Release Workflow (RW):
  - Targets **one active Task**.
  - Uses a version where `EPIC`, `STORY`, and `TASK` match that Task's E/S/T coordinates.
  - Increments `BUILD` for successive releases of the same Task.

**CRITICAL: Task Document Requirements**

Before any versioning can occur for a Task, the Task MUST have a corresponding Task document:

1. **Task Document Presence:** Every Task referenced in a Story checklist MUST have a corresponding Task document (separate file OR clearly delimited section within Story document).

2. **Task Document → Version Alignment:** The Task document's Task ID MUST align with the version's TASK component:
   - Task document: `E4:S11:T01`
   - Version: `0.4.11.1+B` (TASK = 1)
   - Alignment: Task ID `T01` matches version TASK component `1`

3. **Task Document Format:** Task documents can be:
   - **Separate File:** `kanban/epics/Epic-X/Story-XXX/Task-YYY-description.md`
   - **Delimited Section:** Within Story document using Task ID header (`### EXX:SYY:TZZ – Task Name`)

4. **Required Task Document Fields:** Task documents MUST include:
   - Task ID (`E\{epic\}:S\{story\}:T\{task\}`)
   - Scope
   - Acceptance Criteria
   - Status
   - Version Anchor (forensic marker when complete)
   - Input
   - Deliverable
   - Dependencies
   - Blocker
   - Related BR/FR Links

5. **Validation Requirements:**
   - Release Workflow Step 1 validates Task document presence
   - Release Workflow Step 1 validates Task document → Version TASK component alignment
   - Validators check Task document presence and alignment before versioning

FR/BR rule (summarised):

- FRs and BRs **must** create Tasks, which are anchored under Stories, which are anchored under Epics.
- Each Task **must** have a corresponding Task document before versioning.

See: `docs/project-management/rituals/policy/kanban-governance-policy.md`.

---

## 5. Version File for This Repo

Dev-kit version information lives in:

- `src/fynd_deals/version.py` (legacy path from fynd.deals; acceptable for now, may be renamed to `src/vibe_dev_kit/version.py` in future)

The file should expose:

```python
VERSION_RC = <int>        # Release candidate
VERSION_EPIC = <int>      # Dev-kit Epic number
VERSION_STORY = <int>     # Story number within epic
VERSION_TASK = <int>      # Task number within story
VERSION_BUILD = <int>     # Build number

VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"
```

Current values are **temporary placeholders** until we assign real Epics/Stories/Tasks for dev-kit work.

---

## 6. Progression Rules (Dev Kit)

For a given Epic, Story, Task:

- Working on **Epic 1, Story 1, Task 1**:
  - `0.1.1.1+1` – First dev build
  - `0.1.1.1+2` – Second dev build

- Moving to **Task 2** within the same Story:
  - `0.1.1.2+1` – First dev build for Task 2

Rules:

1. **TASK is stable per Task** – once you start `Task 1`, all its releases share `TASK = 1`.
2. **BUILD number rules:**
   - **Doc-Init Build (`+0`):** For first-time Task/Story/Epic document creation (docs-only)
     - Establishes canonical version anchor before functional work
     - Must be docs-only changes (no code changes)
     - Example: `0.2.10.1+0` = Doc-init build for E2:S10:T01 documentation
   - **Normal Builds (`+1` or higher):** For functional work and subsequent releases
     - Starts at 1 for first functional release (or after doc-init)
     - Increments with each subsequent release (`+2`, `+3`, etc.)
     - Example: `0.2.10.1+1` = First functional build for E2:S10:T01 (after `+0`)
   - **Relationship:** Doc-init (`+0`) → Functional work (`+1`, `+2`, ...)
3. **Moving to a new Task**:
   - `TASK` changes.
   - `BUILD` resets to `1` (or `0` if doc-init for new Task document).
4. **RC increments**:
   - When promoting a dev snapshot to a release candidate for a given Task.

### 6.1 Task Transitions

**CRITICAL:** When moving to a new Task, the version file (`src/fynd_deals/version.py`) MUST be updated:

1. **Task Document Prerequisite:**
   - **MUST:** Create Task document before updating version file
   - **MUST:** Task document must exist (separate file OR delimited section)
   - **MUST:** Task document must have correct Task ID format (`E\{epic\}:S\{story\}:T\{task\}`)
   - **MUST:** Task document must include all required fields (see Section 4)

2. **Update `VERSION_TASK`:**
   - Set `VERSION_TASK` to match the new Task number
   - Example: Moving from Task 1 to Task 2 → `VERSION_TASK = 2`
   - **CRITICAL:** `VERSION_TASK` MUST match Task ID in Task document

3. **Set `VERSION_BUILD`:**
   - **Doc-Init Path (`+0`):** For first-time Task document creation
     - Set `VERSION_BUILD = 0` (doc-init build)
     - Must be docs-only changes (no code changes)
     - Establishes canonical version anchor
     - Example: Creating E2:S10:T01 Task document → `VERSION_BUILD = 0`
   - **Normal Path (`+1`):** For functional work (Task document already exists)
     - Set `VERSION_BUILD = 1` (first functional build)
     - Can include code changes, feature implementations, bug fixes, etc.
     - Example: First functional change for E2:S10:T01 → `VERSION_BUILD = 1`
   - **Subsequent Builds:** Increment BUILD for each release (`+2`, `+3`, etc.)
   - **Relationship:** Doc-init (`+0`) → First functional build (`+1`) → Subsequent builds (`+2`, `+3`, ...)

4. **When to Update:**
   - **Option 1:** Create Task document → Update `version.py` when creating the new Task (recommended)
   - **Option 2:** Create Task document → Update `version.py` during Release Workflow Step 2 (automatic detection)
   - **CRITICAL:** Task document MUST exist before updating version file

5. **Validation:**
   - Release Workflow Step 1 validates Task document presence
   - Release Workflow Step 1 validates that `VERSION_TASK` matches the active Task number
   - Release Workflow Step 1 validates Task document → Version TASK component alignment
   - If Task document missing or misaligned, workflow stops with error message
   - Release Workflow Step 2 automatically detects Task transitions and updates `VERSION_TASK` if needed

**Example Task Transition:**

**Before (Completing Task 1):**
```python
VERSION_EPIC = 4
VERSION_STORY = 3
VERSION_TASK = 1
VERSION_BUILD = 2
# Version: 0.4.3.1+2
```

**After (Starting Task 2):**
```python
VERSION_EPIC = 4
VERSION_STORY = 3
VERSION_TASK = 2  # ← Updated to match new Task
VERSION_BUILD = 1  # ← Reset to 1 for new Task
# Version: 0.4.3.2+1
```

**Common Mistakes to Avoid:**

- ❌ **DON'T:** Keep `VERSION_TASK = 1` and increment `VERSION_BUILD` when moving to Task 2
  - Wrong: `0.4.3.1+3` for Task 2
  - Correct: `0.4.3.2+1` for Task 2

- ❌ **DON'T:** Forget to reset `VERSION_BUILD` when moving to a new Task
  - Wrong: `0.4.3.2+3` for first release of Task 2
  - Correct: `0.4.3.2+1` for first release of Task 2

---

### 6.1.1 Perpetual Tasks (Maintenance Workflows)

**CRITICAL:** Some tasks represent ongoing maintenance/synchronization work that never "completes" (e.g., UKW - Update Kanban Workflow, CMW - Changelog Management Workflow). These are **perpetual tasks** with special versioning semantics.

**Perpetual Task Characteristics:**
- **Status:** Always IN PROGRESS (never changes to COMPLETE)
- **Task Type:** Perpetual Maintenance (marked in task document with `Task Type: Perpetual Maintenance`)
- **Purpose:** Ongoing maintenance/synchronization workflows
- **Build Number Semantics:** BUILD number = workflow run count (not feature iteration)
- **Build Warning Suppression:** High BUILD numbers are expected and valid (no warnings)

**Version Pattern (current policy):**
- Perpetual tasks use canonical Story 016 2-digit task numbering (`Txx`) for active lanes.
- Version format remains `v0.\{EPIC\}.\{STORY\}.\{TASK\}+\{BUILD\}` with perpetual semantics carried by `Task Type: Perpetual Maintenance`.
- BUILD number accumulates naturally as the workflow runs.
- Example: Workflow-maintenance umbrella runs → `v0.2.16.3+1`, `v0.2.16.3+2`, `v0.2.16.3+3`, etc.
- Example: Kanban hygiene lane runs → `v0.2.16.4+1`, `v0.2.16.4+2`, etc.

**Perpetual Task Examples:**
- **Workflow maintenance umbrella:** `E2:S16:T03` - ad-hoc cross-cutting workflow maintenance and hardening
- **Kanban synchronization lane:** `E2:S16:T04` - kanban-focused operational synchronization/hygiene
- **Markdown documentation maintenance lane:** `E2:S16:T05` - markdown-only recurring maintenance
- **Legacy aliases (historical-only):** `T101`/`T102`/`T103` references remain valid for traceability but are not used for new active anchors.

**Task Number Ranges:**
- **Regular tasks:** T01-T99 (2-digit) - Standard feature/bug tasks
- **Perpetual tasks (active):** canonical Story 016 `Txx` lanes with `Task Type: Perpetual Maintenance`
- **Legacy perpetual aliases:** `T1xx` accepted only as historical anchors (`Historical Anchor:`) for prior releases/docs
- **Guardrail:** new `T1xx` task IDs are disallowed for active work unless explicitly marked historical

**RW Context Detection:**
- RW Step 2 detects perpetual task context (e.g., user ran "UKW" then "RW", or "CMW" then "RW")
- RW automatically attributes releases to the perpetual task (discovered via `Task Type: Perpetual Maintenance` flag)
- BUILD number increments for each workflow run (same task, increment BUILD)
- Build warnings are suppressed (high BUILD numbers are expected and valid)
- Placement guardrail enforcement requires perpetual tasks to be housed under `E2:S16` unless `Perpetual Override Rationale:` is present.

**T103 (RW Maintenance) - Manual Attribution:**
- No automatic context detection (unlike UKW/CMW)
- When releasing RW maintenance work (Step 7 fixes, validator updates, doc corrections), agent/user manually sets version to E2:S16:T03 and increments BUILD
- Historical `T103` labels may still appear in older changelog/release artifacts; this is expected and preserved for traceability.

**Task ID Variability:**
- Each project instance can choose different canonical perpetual anchors, but ai-dev-kit standard is Story 016 (`E2:S16:T03`/`T04`/`T05`)
- Legacy IDs from prior project phases remain as historical aliases and should include `Historical Anchor:` when used in active docs
- Pattern discovery: search for `Task Type: Perpetual Maintenance` plus Story 016 lanes

**Related Documentation:**
- **UKW Pattern:** Epic 4 Story 3 T01 (Update Packaged RW to Handle UKW Context)
- **CMW Pattern:** Epic 2 Story 1 T05 (CMW Perpetual Task Pattern)
- **RW Maintenance Pattern:** Epic 2 Story 1 T06 (RW Maintenance Perpetual Task Pattern)
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` (Step 2)

---

### 6.2 Abstract Space Version Schema

**CRITICAL:** Zero-numbered E/S/T documentation uses `+0` build number to establish the **abstract space** for forensic traceability, serving as the canonical version anchor before any functional work is committed.

**Purpose:**
- Establish canonical version anchor for E/S/T documentation
- Begin forensic traceability arc at documentation creation
- Provide clear versioning schema for abstract spaces
- Link versioning schema to Kanban documentation lifecycle

#### Epic-Level Abstract Spaces

**Format:** `0.\{EPIC\}.0.0+0`

**Examples:**
- `0.3.0.0+0` = Epic 3's abstract space
- `0.4.0.0+0` = Epic 4's abstract space
- `0.10.0.0+0` = Epic 10's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Epic
- Created when Epic document is first committed
- Precedes all functional work for that Epic

**Usage:**
- Epic document creation → Commit with `0.\{EPIC\}.0.0+0`
- Subsequent functional work starts at `0.\{EPIC\}.1.1+1` (first Story, first Task, first build)

#### Story-Level Abstract Spaces

**Format:** `0.\{EPIC\}.\{STORY\}.0+0`

**Examples:**
- `0.2.5.0+0` = Epic 2 Story 5's abstract space
- `0.4.11.0+0` = Epic 4 Story 11's abstract space
- `0.10.3.0+0` = Epic 10 Story 3's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Story within Epic
- Created when Story document is first committed
- Precedes all functional work for that Story

**Usage:**
- Story document creation → Commit with `0.\{EPIC\}.\{STORY\}.0+0`
- Subsequent functional work starts at `0.\{EPIC\}.\{STORY\}.1+1` (first Task, first build)

#### Task-Level Abstract Spaces

**Format:** `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`

**Examples:**
- `0.10.4.6+0` = Epic 10 Story 4 Task 6's abstract space
- `0.4.11.1+0` = Epic 4 Story 11 Task 1's abstract space
- `0.2.9.3+0` = Epic 2 Story 9 Task 3's abstract space

**Purpose:**
- Establishes forensic traceability anchor for Task within Story within Epic
- Created when Task document is first committed
- Precedes all functional work for that Task

**Usage:**
- Task document creation → Commit with `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`
- Subsequent functional work starts at `0.\{EPIC\}.\{STORY\}.\{TASK\}+1` (first build)

#### Relationship Between Abstract Space and Functional Work

**Abstract Space (`+0`):**
- Documentation-only anchor
- Establishes forensic traceability
- No functional changes
- Created via doc-init path (see FR-017)

**Functional Work (`+1` and beyond):**
- Actual implementation
- Builds on abstract space anchor
- Increments BUILD for each release
- Example progression:
  - `0.4.11.1+0` = Task document created (abstract space)
  - `0.4.11.1+1` = First functional change for Task 1
  - `0.4.11.1+2` = Second functional change for Task 1

**Validation:**
- `+0` is only valid for docs-only changes (E/S/T document creation)
- `+1` and beyond require functional changes
- Abstract space must precede functional work
- Release Workflow validates abstract space usage

#### S00 Abstract Space and Repository-Anchor Transition (FR-072 Approach D)

**Format:** `0.\{EPIC\}.0.0+0` (epic/story abstract-space anchor)

**Examples:**
- `0.5.0.0+0` = Epic 5 Story 0 abstract space
- `0.6.0.0+0` = Epic 6 Story 0 abstract space
- `0.7.0.0+0` = Epic 7 Story 0 abstract space

**Purpose:**
- Establish forensic traceability for abstract-space documentation.
- Preserve compatibility with historical repository anchors where they already exist.
- Support phased migration to semantic intake placement for new FR/BR/UXR tasks.

**Transition rule (canonical):**
- New FR/BR/UXR intake should version under the selected **delivery story/task** (semantic placement), not by creating new default repository-story anchors.
- Historical repository-story IDs (for example old `E5:S01:*`, `E6:S01:*`, `E7:S00:*`) remain valid forensic coordinates and must remain linkable.

**Validator/workflow expectation:**
- Validators and workflow docs must accept legacy repository coordinates as historical-valid.
- Validators and workflow docs must not require new intake to use repository stories as default homes.

**Usage guidance:**
- Use `+0` abstract-space builds for documentation initialization.
- Use semantic host story/task versions for new intake and implementation work.
- Keep historical repository-anchor links for traceability instead of rewriting IDs.

**Related:**
- **FR-072:** Uniform Repository vs Abstract-Space Kanban Rules (Approach D migration)
- **FR-074:** Atomic intake + semantic placement
- **FR-021:** Historical repository-story baseline (superseded for new intake behavior)
- **FR-018:** Abstract space concept

**SOP for Committing Initial E/S/T Docs:**

1. **Create E/S/T document** with required structure and fields
2. **Set version to abstract space** (`+0` build):
   - Epic: `0.\{EPIC\}.0.0+0`
   - Story: `0.\{EPIC\}.\{STORY\}.0+0`
   - Task: `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`
3. **Commit via Release Workflow (RW)** with doc-init path (see FR-017)
   - RW Step 1 detects docs-only change
   - RW Step 2 sets version to `+0` (abstract space)
   - RW Step 3 creates changelog entry with "Doc Init" type
4. **Alternative:** Manual commit with explicit version annotation
   - Commit message: `📋 Doc Init (Abstract Space): E\{epic\}:S\{story\}:T\{task\} - [Description]`
   - Version: Explicitly set to abstract space (`+0`)

**Related:**
- **Kanban Governance Policy:** Abstract Spaces for Forensic Traceability (complementary section)
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (implementation)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (this feature)

---

### 6.3 Doc-Init / Abstract Space Cheat Sheet

This section summarizes how to use **doc-init / abstract space builds (`+0`)** in day-to-day work.

**When to use `+0` (abstract space):**
- Creating a **new Epic / Story / Task document** with no functional work yet.
- Typical examples:
  - Onboarding a new **FR/BR** and creating its associated Task doc (wiring + documentation only).
  - Creating initial Epic/Story docs before any implementation starts.

**Patterns:**
- **Epic doc creation:** `0.\{EPIC\}.0.0+0`
- **Story doc creation:** `0.\{EPIC\}.\{STORY\}.0+0`
- **Task doc creation:** `0.\{EPIC\}.\{STORY\}.\{TASK\}+0`

**What `+0` means:**
- Documentation-only anchor (no code / behavior changes).
- Establishes the **forensic traceability starting point** for that E/S/T.
- Must be created via the **doc-init path** (FR-017).

**After `+0` (functional work):**
- First functional release for that E/S/T uses **`+1`**:
  - Example progression for a Task:
    - `0.4.11.1+0` – Task document created (abstract space)
    - `0.4.11.1+1` – First functional change for that Task
    - `0.4.11.1+2` – Second functional change, etc.
- Moving to a **new Task**:
  - Optionally create a **Task-level abstract space** first (`+0`) for the new Task doc.
  - Then use `+1` for the first functional release on that Task.

**Practical cheat sheet:**
- **Onboard FR/BR + Task doc only:** use **`+0`** (abstract space).
- **Start actual implementation for that Task:** bump to **`+1`**.
- **Continue work on the same Task:** increment BUILD (**`+2`, `+3`, …`**).

## 7. CHANGELOG Format

This repo uses a **two-layer changelog system** aligned with the framework pattern:

### Main Summary Changelog (`CHANGELOG.md`)

**Format:**
```markdown
## [0.3.1.1+2] - 02-12-25

📚 Documentation: Task 1 complete - Gap analysis comparing dev-kit versioning policy with framework

### Added
- Created gap analysis report...

### Notes
- See `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.3.1.1+2.md` for full details
```

**Doc-Init Build Format (`+0` builds):**
```markdown
## [0.2.10.1+0] - 12-12-25

📋 Doc Init: E2:S10:T01 - RW Step 2 Doc-Init Support

### Summary
**Doc-Init Build (`+0`):** [Description of documentation-only changes]

### Doc Init
**New E/S/T Documentation:**
- ✅ [List of documentation changes]

### Notes
- See `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.2.10.1+0.md` for full details
- **This is a doc-init build (`+0`).** No functional changes are included.
```

**Key Characteristics:**
- Version: `[RC.EPIC.STORY.TASK+BUILD]`
- Date: `DD-MM-YY` (short date format for merge-to-main)
- **Doc-Init builds (`+0`):** Use `📋 Doc Init: E\{epic\}:S\{story\}:T\{task\} - [Description]` format
- **Normal builds (`+1` or higher):** Use standard emoji prefixes (🚀 Feature, 🐞 Fix, 📚 Documentation, etc.)
- Link to detailed changelog archive
- Can be updated if merge date changes

### Detailed Changelog Archive (`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`)

**Format (Normal Builds):**
```markdown
# Changelog: v0.3.1.1+2

**Release Date:** 2025-12-02 00:00:00 UTC
**Epic:** Epic 3 - [Epic Name]
**Story:** Story 1 - [Story Name]
**Task:** Task 1 - [Task Name]
**Type:** 📚 Documentation

## Summary
📚 Documentation: [Brief description of changes]

## Changes
- [Detailed change 1]
- [Detailed change 2]

## Related Work
- **Story:** E3:S01 - [Story Name]
- **Epic:** Epic 3 - [Epic Name]
```

**Format (Doc-Init Builds - `+0`):**
```markdown
# Changelog: v0.2.10.1+0

**Release Date:** 2025-12-12 14:00:00 UTC
**Epic:** Epic 2 - Workflow Management
**Story:** Story 10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
**Task:** Task 1 - Update RW Step 2 to Support Doc-Init Path
**Build Type:** Doc-Init (`+0`)
**Type:** 📋 Doc Init

## Summary

**Doc-Init Build:** [Description of documentation-only changes]

## Doc Init

**New E/S/T Documentation:**
- ✅ [List of documentation changes]

**Changes (Docs-Only):**
- [Detailed documentation changes]

## Related Work
- **Story:** E2:S10 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
- **Epic:** Epic 2 - Workflow Management
- **Feature Request:** FR-017 - Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T

## Notes

**Doc-Init Build Characteristics:**
- Build number: `+0` (not `+1`)
- Changes: Docs-only (no code changes)
- Purpose: Establish canonical version anchor before functional changes
- Subsequent builds: Start at `+1` for functional work

**This is a doc-init build (`+0`).** No functional changes are included. The next build for this task will be `+1` when functional work begins.
```

**Key Characteristics:**
- Full timestamp: `YYYY-MM-DD HH:MM:SS UTC` (immutable)
- Epic/Story/Task information
- **Doc-Init builds:** Include `**Build Type:** Doc-Init (`+0`)` and `**Type:** 📋 Doc Init`
- **Normal builds:** Include standard `**Type:**` field (🚀 Feature, 🐞 Fix, 📚 Documentation, etc.)
- Detailed change descriptions
- **IMMUTABLE** once written (never edit `**Release Date:**`)

> **Reference:** See `packages/frameworks/numbering & versioning/versioning-strategy.md` for complete two-layer timestamp system documentation.

---

## 8. Canonical Ordering Principle

**Release version numbers (SemVer `MAJOR.MINOR.PATCH`) are the canonical ordering metric for all releases and changelog entries.**

This means:

- **Release ordering is independent of wall-clock time**
  - If `0.3.1.2+1` was committed on 2025-12-02 at 10:00:00 UTC
  - And `0.3.1.1+2` was committed on 2025-12-02 at 15:30:00 UTC
  - The changelog still orders them as: `0.3.1.1+2` first, then `0.3.1.2+1`
  - **The release version number determines order, not the actual commit timestamp**

**Parallel epic development remains fully supported**: multiple epics can work simultaneously and each epic maintains its own internal version stream, while releases are ordered by SemVer in the changelog.

**The internal version continues to encode the work hierarchy (Epic → Story → Task → Build).** The release version provides the canonical ordering for external consumers; the internal version provides the canonical forensic coordinate for tracing work through Kanban, changelogs, and Git history.

> **Reference:** See `packages/frameworks/numbering & versioning/versioning-strategy.md` (Section: Core Principle: Version Numbers Are Canonical) for complete documentation.

---

## 9. Two-Layer Timestamp System

The versioning strategy uses **two distinct timestamp layers** with **different purposes**:

### Layer 1: Main Summary Changelog (`CHANGELOG.md`)

**Format:** Short date in `DD-MM-YY` format
**Example:** `## [0.3.1.1+2] - 02-12-25`

**Purpose:**
- Shows **when this version was merged into `main`**
- Provides a quick reference for "when did this hit production"
- Uses short format for readability in the summary view

**Key Characteristics:**
- **Not used for ordering** (version number is canonical)
- **Reflects merge-to-main date**, not commit date
- **Can be updated** if a version is merged on a different day than initially recorded
- **Format:** `DD-MM-YY` (e.g., `02-12-25` for December 2, 2025)

### Layer 2: Detailed Changelog Archive (`docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`)

**Format:** Full timestamp in `YYYY-MM-DD HH:MM:SS UTC` format
**Example:** `**Release Date:** 2025-12-02 00:00:00 UTC`

**Purpose:**
- Captures **when this detailed changelog entry was authored/recorded**
- Provides forensic-level precision for accountability
- Enables exact traceability to the moment of release documentation

**Key Characteristics:**
- **IMMUTABLE once written** - **NEVER edit this timestamp retroactively**
- **Reflects the actual time the changelog was created**, not when code was committed
- **Full precision** (date + time + timezone) for complete accountability
- **Format:** `YYYY-MM-DD HH:MM:SS UTC` (e.g., `2025-12-02 00:00:00 UTC`)

### Why Two Layers?

1. **Different purposes:**
   - Main changelog: Quick reference for "when did this merge to main"
   - Detailed changelog: Forensic record of "when was this release documented"

2. **Different audiences:**
   - Main changelog: Developers scanning recent releases
   - Detailed changelog: Forensic analysis, audit trails, accountability

3. **Different update rules:**
   - Main changelog: Can be updated if merge date changes
   - Detailed changelog: **IMMUTABLE** - historical record must be preserved

4. **Enables parallel development:**
   - Versions are ordered by number, not by timestamp
   - Timestamps provide context, not ordering

> **Reference:** See `packages/frameworks/numbering & versioning/versioning-strategy.md` (Section: Two-Layer Timestamp System) for complete documentation.

---

## 10. Forensic Traceability Grid

The versioning strategy provides **complete traceability** through a multi-dimensional grid:

### Dimension 1: Version ↔ Epic/Story/Task

**Encoding:** The version number itself (`RC.EPIC.STORY.TASK+BUILD`)

**Traceability Path:**
- `0.3.1.1+2` → Epic 3, Story 1, Task 1, Build 2
- Direct mapping from version to work hierarchy
- No lookup required - the version number IS the identifier

### Dimension 2: Version ↔ Detailed Changelog

**Mapping:** One detailed changelog file per version

**File Location:** `docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v{version}.md`

**Traceability Path:**
- Version number → File path (deterministic)
- File contains: Full timestamp, epic/story/task info, detailed changes
- **Full timestamp provides forensic-level accountability**

### Dimension 3: Version ↔ Main Summary Changelog

**Mapping:** One summary entry per version in `CHANGELOG.md`

**Traceability Path:**
- Version number → Summary entry (ordered by version, not time)
- Entry contains: Short date (merge-to-main), summary, link to detailed changelog
- **Short date shows when version merged to main**

### Dimension 4: Version ↔ Kanban Forensic Markers

**Mapping:** Epic/Story documents and Kanban rituals include explicit version references

**Traceability Path:**
- Version number → Epic/Story/Task documents
- Documents contain: Version references, commit hashes, workflow run IDs
- **Kanban markers provide work context and decision history**

**Example:**
- Version: `0.3.1.1+2`
- Epic 3 document: `docs/project-management/kanban/epics/Epic-3/Epic-3.md`
- Story 1 markers: Version references, commit hashes, workflow runs

### Dimension 5: Version ↔ Git History

**Mapping:** Version number in commit messages and tags

**Traceability Path:**
- Version number → Git commits (via commit messages)
- Git commits → Commit hashes, author, timestamp
- **Git history provides code-level traceability**

**Example:**
- Version: `0.3.1.1+2`
- Commit message: "Release v0.3.1.1+2: Task 1 complete..."
- Git commit: Contains code changes, author, commit timestamp

**This grid provides complete accountability and efficient traceability.**

> **Reference:** See `packages/frameworks/numbering & versioning/versioning-strategy.md` (Section: Forensic Traceability Grid) for complete documentation.

---

## 11. Immutability Rules

### Rule 1: Detailed Changelog Timestamps Are Immutable

**Once a detailed changelog file is created with a `**Release Date:**` timestamp, that timestamp MUST NEVER be edited.**

**Rationale:**
- The timestamp captures **when the changelog entry was authored**
- Editing it would corrupt the forensic record
- Historical accuracy requires preserving original timestamps

**What This Means:**
- ❌ **NEVER** edit `**Release Date:**` in existing changelog files
- ❌ **NEVER** "fix" old timestamps to satisfy new validation rules
- ❌ **NEVER** update timestamps for cosmetic reasons
- ✅ **ONLY** create new changelog files with correct timestamps going forward

### Rule 2: Version Ordering Is Immutable

**Once a version is assigned and documented, its position in the changelog ordering is fixed by the version number.**

**Rationale:**
- Version numbers encode the work hierarchy
- Ordering by version number ensures consistent, logical progression
- Changing order would break traceability

**What This Means:**
- Versions are ordered by `RC.EPIC.STORY.TASK+BUILD` structure
- `0.3.1.1+2` always comes before `0.3.1.2+1` in changelogs
- Even if `0.3.1.2+1` was committed first

### Rule 3: Historical Files Are Preserved As-Is

**Changelog files created before the full-timestamp policy are preserved exactly as they were created.**

**Rationale:**
- Historical files are artifacts of their time
- They reflect the practices and tools available when they were created
- Preserving them maintains the complete historical record

> **Reference:** See `packages/frameworks/numbering & versioning/versioning-strategy.md` (Section: Immutability Rules) for complete documentation.

---

## 12. Version Validation

### Validation Scripts

The dev-kit uses validation scripts from the workflow management framework:

- **`packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`**
  - Validates version matches branch/epic
  - Checks version format (old vs new)
  - Validates CHANGELOG entries match branch

- **`packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`**
  - Validates version format in CHANGELOG.md
  - Checks date format (old: `YYYY-MM-DD`, new: `DD-MM-YY`)
  - Validates build number >= 1
  - Grandfathers old format (warnings only)

- **`packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`**
  - Validates requested RW task intent before Step 2 file edits
  - Supports `--mode rw-k` for RW -k comparison behavior
  - Supports `--art` in all RW modes (`RW`, `RW -d`, `RW -k`) for explicit canonical anchor adoption

### Validation Behavior

- **New files (TASK+BUILD format):** Require strict enforcement
- **Pre-commit hooks:** Enforce format before commit (when configured)
- **Release Workflow:** Validators run automatically before commit
- **CI/CD:** Can validate in continuous integration (when configured)

### Manual Review Checklist

**Before committing:**
1. Verify version number matches branch/epic/story/task
2. Verify detailed changelog has full timestamp (new format)
3. Verify main changelog has short date (`DD-MM-YY`)
4. Verify version in commit message
5. Verify Kanban markers updated

**After merging:**
1. Verify changelog ordering (by version, not time)
2. Verify traceability grid is complete
3. Verify historical files preserved

> **Reference:** See `packages/frameworks/workflow mgt/scripts/validation/` for validation script implementations.

---

## 13. Relationship to Framework Policies

This policy is a **specialisation** of the general framework policies:

- **Base schema & strategy:**
  - `packages/frameworks/numbering & versioning/versioning-policy.md` (primary SoT)
  - `packages/frameworks/numbering & versioning/versioning-strategy.md` (comprehensive strategy)
- **Kanban integration:**
  - `packages/frameworks/kanban/policies/kanban-governance-policy.md`
  - `docs/project-management/rituals/policy/kanban-governance-policy.md` (dev-kit local)

The dev-kit policy:

- **Fixes the EPIC space (1–4+) for this repo**
- **Clarifies that all work in this repo** using the version file is speaking about dev-kit Epics/Stories/Tasks, not any external project
- **References framework policies** as the canonical source of truth for detailed patterns and strategies
- **Documents dev-kit-specific adaptations** while maintaining alignment with framework principles

**Key Principle:** The framework policies (`packages/frameworks/numbering & versioning/`) serve as the **canonical source of truth**. This dev-kit policy documents how the framework is applied in the dev-kit context, referencing the framework for detailed explanations.

---

## 14. Status and Maintenance

**Status:** Active
**Owner:** AI Dev Kit Lead
**Last Updated:** 2025-12-02
**Related Work:** Epic 3, Story 1 (Dev Kit Alignment with Versioning Framework)

**Maintenance:**
- This policy should be reviewed when framework policies are updated
- Gaps identified in gap analysis (T001) have been addressed
- Policy aligns with framework patterns while maintaining dev-kit-specific context

---

## 15. References

**Framework Policies (Canonical SoT):**
- `packages/frameworks/numbering & versioning/versioning-policy.md`
- `packages/frameworks/numbering & versioning/versioning-strategy.md`
- `packages/frameworks/numbering & versioning/README.md`

**Dev-Kit Implementation:**
- `src/fynd_deals/version.py` (version file - to be renamed to dev-kit-specific path)
- `CHANGELOG.md` (main summary changelog)
- `docs/changelog-and-release-notes/changelog-archive/` (detailed changelog archive)
- `docs/project-management/kanban/` (Kanban board and Epic/Story docs)

**Validation Scripts:**
- `packages/frameworks/workflow mgt/scripts/validation/validate_branch_context.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_changelog_format.py`

**Related Documentation:**
- **[Versioning Quick Reference](versioning-quick-reference.md)** - 1-2 page summary for quick lookup ⚡
- **[Dual-Versioning Guide](dual-versioning-package-managers.md)** - Managing `RC.EPIC.STORY.TASK+BUILD` + SemVer for package managers ⚠️
- `docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md` - Practical worked examples
- `docs/project-management/kanban/epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework/T001-gap-analysis-report.md` (gap analysis)
- `docs/project-management/kanban/epics/Epic-3/Story-001-dev-kit-alignment-with-versioning-framework/T002-fynd-deals-epic15-findings.md` (findings)
