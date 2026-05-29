---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S13:T01 – Establish Expectations Baseline for Workflow Management Package

**Task ID:** E2:S13:T01  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E2 – Workflow Management Framework  
**Story:** E2:S13 – Workflow Management Package Implementation Review  
**Version Anchor:** ✅ COMPLETE (v0.2.13.1+1)

---

## Scope

Define the implementation expectations baseline for the Workflow Management framework package (`packages/frameworks/workflow mgt/`). Extract expected features, workflows, integration behaviors, and package composition from documentation to establish a comprehensive expectations baseline for RC readiness review.

**Scope includes:**
- Extract core operating principles from package README
- Document expected workflows and their behaviors
- Capture integration expectations with other frameworks
- Map package composition and structure
- Reference source documentation

---

## Inputs

- Package README: `packages/frameworks/workflow mgt/README.md`
- Implementation guides: `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/`
- Workflow definitions: `packages/frameworks/workflow mgt/workflows/`
- Versioning policy documents: `packages/frameworks/workflow mgt/KB/Architecture/Standards_and_ADRs/`
- Cursor rules sections: `packages/frameworks/workflow mgt/cursorrules-*.md`

---

## Deliverables

1. **Expectations baseline document** documenting:
   - Core operating principles
   - Expected workflows and behaviors
   - Integration expectations
   - Package composition
   - Source references

---

## Approach

1. **Read Package README** to extract core principles and features
2. **Review Workflow Definitions** to understand expected workflow behaviors
3. **Analyze Integration Points** with Kanban and Versioning frameworks
4. **Document Package Composition** (scripts, templates, docs, workflows)
5. **Reference Source Documentation** for traceability

---

## Acceptance Criteria

- [x] Expectations baseline documented and approved ✅
- [x] Core operating principles captured ✅
- [x] Expected workflows documented ✅
- [x] Integration expectations mapped ✅
- [x] Package composition documented ✅
- [x] Sources referenced ✅

---

## Expectations Baseline

### Core Operating Principles

**Package Purpose:**
- Complete package for implementing Release Workflow (RW) trigger and agent-driven workflow execution pattern
- Enables AI assistants to execute complete release process (version bump, changelog generation, Git operations)
- Provides intelligent agent-driven execution (not deterministic scripts)

**Modularity & Independence:**
- **Standalone Usage:** Package can be used completely independently without requiring other `ai-dev-kit` packages
- **Hard Dependencies:** Git, Python 3, AI Assistant (required)
- **Soft Dependencies:** Numbering & Versioning package (optional), Kanban package (optional)
- **Independence Score:** 9/10 — Can be used standalone with minimal external dependencies

**Copy vs Reference Pattern:**
- **CRITICAL: Copy, Don't Reference** — Projects must copy this package into their repository, not link to it
- **Why Copy:** Projects need to customize file paths, project names, and terminology
- **Customization Boundaries:**
  - ✅ **CAN customize:** File paths, project names, branch naming conventions, version file location
  - ❌ **MUST keep:** Workflow steps (1-13), validation logic, agent execution pattern, atomicity requirements, PDCA integration


**Version Schema:**
- Default schema: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.15.1.4+2`)
- Designed to be universal but customizable
- Provides forensic traceability, parallel development, task-level granularity

**Epic Branch Workflow:**
- **ALWAYS work on epic branches** (`epic/\{n\}-\{description\}`)
- **NEVER commit directly to `main`** during development
- **ONLY merge to `main`** when ready to deploy (prevents unnecessary auto-deployments)

---

### Expected Workflows

#### 1. Release Workflow (RW)

**Purpose:** Complete 13-step release process for versioning, changelog generation, Git operations, and documentation updates.

**Key Features:**
- Agent-driven execution (intelligent, not deterministic)
- Mandatory TODO tracking (all 13 steps)
- Atomicity requirement (completes all steps OR stops with "RW BLOCKED")
- Branch safety check (mandatory blocking Step 1)
- Kanban integration (auto-updates Kanban docs in Step 7)
- PDCA integration (CHECK and ACT phases)

**The 13 Steps:**
1. **Branch Safety Check** - Verify work aligns with branch context (MANDATORY BLOCKING)
2. **Bump Version** - Increment version based on schema (with UKW/CMW context detection)
3. **Create Detailed Changelog** - Create detailed changelog archive with full timestamp
4. **Update Main Changelog** - Add summary entry with short date (DD-MM-YY)
5. **Update README** - Update version references (SemVer display)
6. **Update BR/FR Docs** - Update Bug Reports and Feature Requests with fix attempt information
7. **Auto-update Kanban Docs** - Update ALL sections (header, checklist, detailed story sections)
8. **Stage Files** - Stage all modified files
9. **Run Validators** - Execute branch context, changelog format, version bump, changelog size validators
9.5. **Changelog Management Workflow (CMW)** - Optional: Archive entries if changelog exceeds threshold
10. **Commit Changes** - Create git commit with versioned message
11. **Create Git Tag** - Create dual tags (internal + SemVer)
12. **Push to Remote** - Push epic branch and tags to remote
12.5. **Create/Update GitHub Release** - Create or update GitHub release using SemVer tag
13. **Housekeeping** - Clean up IDE state and temporary artifacts

**Trigger:** User types "RW" or "rw" (case-insensitive) in AI assistant

**Context Detection:**
- **UKW Context:** User ran "UKW" then "RW" → Attributes to perpetual UKW task (E2:S16:T03)
- **CMW Context:** User ran "CMW" then "RW" → Attributes to perpetual CMW task (E2:S16:T03)
- **Normal Context:** Reads Story file to identify completed task

**Agent Execution Pattern:**
- ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED for each step
- Intelligent analysis before execution
- Context-aware decisions
- Validation before proceeding
- Documentation of all actions

---

#### 2. Update Kanban Workflow (UKW)

**Purpose:** Comprehensive kanban documentation synchronization using bottom-up approach.

**Key Features:**
- Agent-driven execution (requires intelligent reasoning)
- Bottom-up approach (Tasks → Stories → Epics → Board)
- Perpetual task attribution (E2:S16:T03)
- MoSCOW prioritization (updated LAST)

**The 8 Steps:**
1. **Identify Perpetual UKW Task** - Discover and wire UKW to project's perpetual UKW task
2. **Analyze Recent Activity** - Check git commits, FR/BR/UXR directory, file changes
3. **Update Task Documents** - Update task status, dates, forensic markers
4. **Update Story Documents** - Synthesize task data into tactical overviews
5. **Update Epic Documents** - Synthesize story data into strategic overviews
6. **Update Kanban Board** - Update MoSCOW priority list (LAST)
7. **Validate Consistency** - Cross-reference status across all kanban documents
8. **Stage Files** - Stage all kanban files
9. **Document Changes** - Create summary of updated documents

**Trigger:** User types "UKW" or "ukw" (case-insensitive) in AI assistant

**Intelligence Required:**
- Synthesis of multiple data points
- Narrative updates (natural, meaningful summaries)
- Prioritization (MoSCOW based on goals, dependencies, impact)
- Status inference from commits, FR/BR/UXR, file changes
- Consistency analysis across hierarchy

---

#### 3. Changelog Management Workflow (CMW)

**Purpose:** Deterministic workflow for automated changelog maintenance (archive entries, remove duplicates, fix ordering).

**Key Features:**
- **Deterministic** (rule-based scripts, no agentic intelligence required)
- **Non-blocking** (failures don't block Release Workflow)
- **Automatic** (triggers via RW Step 9.5 when threshold exceeded)
- **Manual** (can be triggered via "CMW" command)
- **Automated** (can be scheduled via cron)

**CMW Capabilities:**
- **Validation:** Changelog format, version ordering, entry count, size analysis
- **Maintenance:** Duplicate detection/removal, ordering violation fixes
- **Archival:** Size-based, time-based, or hybrid archival policies

**Trigger:** 
- Automatic: RW Step 9.5 (when changelog size threshold exceeded)
- Manual: User types "CMW" or "cmw" (case-insensitive)
- Cron: Scheduled execution (recommended: weekly)

**Perpetual Task Attribution:** E2:S16:T03

---

#### 4. Intake Workflow

**Purpose:** Automates conversion of FR/BR/UXR documents into structured Kanban tasks.

**Key Features:**
- Automated decision flow (analyzes content for Epic/Story/Task assignment)
- Intelligent task creation (uses E4:S10 agentic framework)
- Documentation updates (updates source FR/BR/UXR with intake decisions)
- Dependency wiring (extracts and wires dependencies)
- Trigger integration (automatically executes when FR/BR/UXR commits detected)

**The 7 Steps:**
1. **Load & Parse FR/BR/UXR Document** - Load and validate intake document
2. **Decision Flow Analysis** - Analyze content for Epic/Story/Task assignment
3. **Create/Update Kanban Tasks** - Generate Kanban tasks using agentic framework
4. **Update FR/BR/UXR Documentation** - Update source document with intake decision
5. **Wire Dependencies** - Extract and wire dependencies
6. **Assign Version Marker** - Assign canonical version marker
7. **Validate & Report Results** - Validate steps and generate intake report

**Integration:** Trigger-aware execution via RW (E2:S07)

---

### Integration Expectations

#### With Numbering & Versioning Package

**Integration Points:**
- RW uses version schema from Numbering & Versioning package
- Optional: Can swap in own versioning policy if preferred
- RW reads version file and follows versioning schema
- SemVer conversion for external-facing releases

**Dependency:** Soft (optional)

---

#### With Kanban Package

**Integration Points:**
- RW automatically updates Kanban documentation (Step 7)
- RW adds forensic markers to Kanban Story Checklist
- UKW synchronizes kanban docs bottom-up
- Version markers link Kanban work items to releases

**Dependency:** Soft (optional, but Step 7 can be skipped if not using Kanban)

---

#### With Both Packages (Complete Integration)

**Integration Points:**
- Complete three-way integration (Kanban ↔ Versioning ↔ RW)
- Automated Kanban updates with version markers
- Full forensic traceability
- Version-aware kanban synchronization

**Dependency:** Soft (both packages optional)

---

### Package Composition

#### Core Methodology Documents

- `KB/Documentation/Developer_Docs/vwmp/agent-driven-workflow-execution.md` - General methodology
- `KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` - RW step-by-step guide
- `KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md` - Complete workflow reference
- `KB/Documentation/Developer_Docs/vwmp/portable-workflow-implementation-guide.md` - Implementation guide
- `KB/Documentation/Developer_Docs/vwmp/intake-workflow-agent-execution.md` - Intake workflow guide
- `KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` - UKW step-by-step guide

#### Versioning Policy Documents

- `KB/Architecture/Standards_and_ADRs/versioning-policy.md` - Version schema definition
- `KB/Architecture/Standards_and_ADRs/versioning-strategy.md` - Complete versioning strategy

#### Workflow Definitions (YAML)

- `workflows/release-workflow.yaml` - Release Workflow structure
- `workflows/intake-workflow.yaml` - Intake Workflow structure
- `workflows/update-kanban-workflow.yaml` - UKW structure
- `workflows/changelog-management-workflow.yaml` - CMW structure
- `workflows/package-version-workflow.yaml` - PVW structure
- `workflows/pir-workflow.yaml` - PIR Workflow structure
- `workflows/migration-workflow.yaml` - Migration Workflow structure
- `workflows/testing-workflow.yaml` - Testing Workflow structure
- `workflows/refactor-workflow.yaml` - Refactor Workflow structure
- `workflows/framework-health-monitoring-workflow.yaml` - Health monitoring structure

#### Validation Scripts

- `scripts/validation/validate_branch_context.py` - Branch/version/epic alignment validation
- `scripts/validation/validate_changelog_format.py` - Changelog format validation
- `scripts/validation/validate_version_bump.py` - Version bump logic validation
- `scripts/validation/check_changelog_size.py` - Changelog size check (triggers CMW)

#### Changelog Management Scripts

- `scripts/changelog/cmw.py` - Main CMW script (deterministic)
- `scripts/changelog/analyze_changelog_state.py` - Changelog state analysis
- `scripts/changelog/remove_duplicates.py` - Duplicate detection/removal
- `scripts/changelog/identify_archival_entries.py` - Archival entry identification
- `scripts/changelog/archive_entries.py` - Entry archival
- `scripts/changelog/changelog_utils.py` - Utility functions
- `scripts/changelog/cron-cmw-example.sh` - Cron automation example

#### Version Management Scripts

- `scripts/version/semver_converter.py` - SemVer conversion (internal → external)
- `scripts/version/version_registry.py` - Version registry management

#### GitHub Integration Scripts

- `scripts/create_github_release.py` - GitHub release creation/update

#### Cursor Rules Sections

- `cursorrules-rw-trigger-section.md` - RW trigger section for `.cursorrules`
- `cursorrules-ukw-trigger-section.md` - UKW trigger section for `.cursorrules`

#### Configuration

- `config/rw-config-schema.md` - Config schema documentation
- `config/examples/rw-config-ai-dev-kit.yaml` - ai-dev-kit example config
- `config/examples/rw-config-mode-a-simple.yaml` - Mode A (simple) example
- `config/examples/rw-config-mode-b-versioning.yaml` - Mode B (versioning) example
- `config/examples/rw-config-mode-c-full-stack.yaml` - Mode C (full stack) example

#### Installation Scripts

- `scripts/install_release_workflow.py` - RW installer CLI (interactive/preset modes)
- `scripts/README-rw-installer.md` - Installer documentation

#### Reference Documents

- `KB/Architecture/Standards_and_ADRs/workflow-flaws-reference-guide.md` - RW flaws reference
- `KB/Architecture/Standards_and_ADRs/versioning-error-reference-guide.md` - Versioning error reference

#### Optional GitHub Actions

- `templates/github-actions/update-badges-byob.yml` - BYOB badge workflow (private repos)
- `templates/github-actions/README.md` - GitHub Actions documentation

---

### Installation Expectations

#### Installer Support

**RW Installer CLI:**
- **Quick Install:** Interactive mode with prompts
- **Preset Modes:**
  - Mode A: Simple RW (no Kanban)
  - Mode B: RW + Dev-Kit Versioning
  - Mode C: Full Stack (RW + Versioning + Kanban)

- **Dry-Run Support:** Preview changes before applying
- **Config Generation:** Creates `rw-config.yaml` automatically
- **Cursor Rules Update:** Adds RW trigger section automatically
- **Workflow Patching:** Updates workflow YAML with config values

**What Installer Does:**
1. Generates `rw-config.yaml` (single source of truth for paths)
2. Updates `.cursorrules` (adds RW trigger section with correct paths)
3. Patches `workflows/release-workflow.yaml` (uses config values)
4. Validates paths (ensures all paths match project structure)

#### Manual Installation (Legacy)

**Still Supported:** Requires 13-17 manual file edits
- Copy files maintaining directory structure
- Customize file paths in all documents
- Add RW trigger to `.cursorrules`
- Customize version schema (if needed)
- Customize branch mapping (if needed)
- Test workflow

---

### Behavioral Expectations

#### Agent-Driven Execution

**Key Characteristics:**
- **Intelligent Analysis:** AI analyzes each step before executing
- **Context-Aware Decisions:** Makes decisions based on project context
- **Validation Before Proceeding:** Validates results before moving to next step
- **Documentation:** Documents all actions and decisions
- **Adaptability:** Adapts to project-specific context and handles edge cases

**Not Deterministic:**
- Unlike deterministic scripts, AI agent makes intelligent decisions
- Handles edge cases and project-specific variations
- Provides clear error messages and recovery guidance

---

#### Atomicity & Blocking Behavior

**Atomicity Requirement:**
- RW must complete all 13 steps OR stop with clear "RW BLOCKED" message
- Cannot silently stop mid-workflow
- Cannot start new RW while previous RW TODOs are pending/in_progress
- If aborted, must mark remaining TODOs as cancelled and output "RW ABORTED" summary

**Blocking Steps:**
- Step 1: Branch Safety Check (MANDATORY BLOCKING)
- Step 9: Run Validators (blocking if validators fail)

**Non-Blocking Steps:**
- Step 9.5: CMW (non-blocking, failures don't stop workflow)
- Step 12.5: GitHub Release (non-blocking, skips if GITHUB_TOKEN not set)

---

#### Mandatory TODO Tracking

**Cursor TODOs are MANDATORY:**
- AI must create TODO list with all 13 steps at workflow start
- AI must update TODO status before and after each step
- AI must mark all steps as completed on success
- AI must mark remaining steps as cancelled on abort

**Purpose:**
- Real-time progress visibility
- Error recovery capability
- Execution transparency
- Accessibility support (critical for users with cognitive constraints)

---

#### "ALL Sections" Requirement

**Step 7 (Auto-update Kanban Docs) Must Update ALL Sections:**
- Epic document header metadata
- Epic document Story Checklist
- Epic document detailed Story sections
- Any other references to story/task

**Systematic Process:**
1. Read FULL Epic-\{epic\}.md file
2. Read authoritative `Story-\{N\}-\{Name\}.md` file
3. Find ALL sections referencing story/task (use grep/search)
4. Update ALL of them
5. Validate consistency

---

### Perpetual Task Pattern

#### UKW Perpetual Task

**Pattern:**
- Projects create perpetual UKW task for UKW release attribution
- Task must have `perpetual_task: true` or `Task Type: Perpetual Maintenance` flag
- Task ID varies by project (e.g., E2:S16:T03 in ai-dev-kit)
- BUILD number = UKW run count (high BUILD numbers expected and valid)
- RW detects UKW context and auto-attributes to perpetual task

**Version Pattern:** `v0.\{EPIC\}.\{STORY\}.\{PERPETUAL_TASK\}+\{BUILD\}` where BUILD = UKW run count

---

#### CMW Perpetual Task

**Pattern:**
- Projects create perpetual CMW task for CMW maintenance release attribution
- Task must have `Task Type: Perpetual Maintenance` flag
- Task ID varies by project (e.g., E2:S16:T03 in ai-dev-kit)
- BUILD number = CMW run count (high BUILD numbers expected and valid)
- RW detects CMW context and auto-attributes to perpetual task

**Version Pattern:** `v0.\{EPIC\}.\{STORY\}.\{PERPETUAL_TASK\}+\{BUILD\}` where BUILD = CMW run count

---

### Configuration Expectations

#### rw-config.yaml

**Single Source of Truth:**
- All project-specific paths defined in `rw-config.yaml`
- Config-driven approach preferred for all workflows
- Config schema documented in `config/rw-config-schema.md`

**Required Fields:**
- `version_file` - Path to version file
- `main_changelog` - Path to main changelog
- `changelog_dir` - Path to changelog archive directory
- `scripts_path` - Path to validation scripts
- `readme_file` - Path to README

**Optional Fields:**
- `use_kanban` - Enable Kanban integration (boolean)
- `kanban_root` - Kanban root directory (if `use_kanban: true`)
- `epic_doc_pattern` - Epic document pattern (if Kanban enabled)
- `story_doc_pattern` - Story document pattern (if Kanban enabled)
- `task_doc_pattern` - Task document pattern (if Kanban enabled)
- `kanban_board` - Kanban board file (if Kanban enabled)
- `fr_br_root` - FR/BR root directory (if Kanban enabled)

---

### Versioning Expectations

#### Version Schema

**Default Schema:** `RC.EPIC.STORY.TASK+BUILD`
- `RC`: Release Candidate (0 = development, 1+ = release candidate)
- `EPIC`: Epic number
- `STORY`: Story number within epic
- `TASK`: Task number within story
- `BUILD`: Build number (increments per release within task)

**Schema Calculation:**
- Epic N, Story S, Task T → Version: `0.N.S.T+1` (first build)
- Same Task: Increment BUILD → `0.N.S.T+{B+1}`
- New Task: Reset BUILD → `0.N.S.{T+1}+1`
- New Story: Reset TASK and BUILD → `0.N.{S+1}.1+1`
- New Epic: Reset STORY, TASK, BUILD → `0.{N+1}.1.1+1`

**Doc-Init Build (+0):**
- `BUILD = 0` valid for first-time E/S/T document creation (docs-only)
- `BUILD >= 1` required for functional changes
- Validator recognizes `+0` as valid (FR-020)

---

#### SemVer Mapping

**External-Facing Version:**
- Internal version: `RC.EPIC.STORY.TASK+BUILD` (e.g., `0.6.7.101+26`)
- SemVer: `MAJOR.MINOR.PATCH+BUILD` (e.g., `0.6.52+26`)
- Conversion via `semver_converter.py`
- README displays SemVer for external consumers
- GitHub releases use SemVer tags

**Dual Tagging:**
- Internal tag: `v\{internal_version\}` (e.g., `v0.6.7.101+26`)
- SemVer tag: `v\{semver\}` (e.g., `v0.6.52+26`)
- Both tags reference same commit
- Internal tag for tracking, SemVer tag for GitHub releases

---

### Error Handling Expectations

#### Validation Failures

**Branch Context Validation:**
- Step 1 (Branch Safety Check) is MANDATORY BLOCKING
- If validator returns non-zero exit code, workflow STOPS immediately
- All remaining steps marked as `cancelled`
- Clear error message provided

**Changelog Format Validation:**
- Validates Keep a Changelog format (newest first)
- Detects ordering violations
- CMW can fix ordering violations (non-blocking)

**Version Bump Validation:**
- Validates version bump logic (new task vs same task vs out-of-order)
- Checks task document existence
- Validates version format

---

#### Graceful Degradation

**GitHub Release Creation:**
- Step 12.5 gracefully skips if `GITHUB_TOKEN` not set
- Provides clear warning message
- Workflow continues (non-blocking)

**CMW Execution:**
- Step 9.5 failures are non-blocking
- Workflow continues even if CMW encounters issues
- Errors logged but don't stop workflow

---

### Documentation Expectations

#### Agent Execution Guides

**Required Documentation:**
- Step-by-step execution guide for each workflow
- ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED pattern documented
- Examples and edge cases covered
- Error handling and recovery guidance

**Workflow References:**
- Complete workflow reference with all steps
- Workflow YAML definitions
- Trigger documentation

---

#### Policy Documentation

**Versioning Policy:**
- Version schema definition
- Versioning strategy with forensic traceability
- Versioning error reference guide

**Workflow Flaws Reference:**
- Comprehensive reference for all discovered RW flaws
- Remediation guidance
- Prevention strategies

---

## Sources

- **Package README:** `packages/frameworks/workflow mgt/README.md`
- **RW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **UKW Execution Guide:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **Workflow Definitions:** `packages/frameworks/workflow mgt/workflows/`
- **Versioning Policy:** `packages/frameworks/workflow mgt/KB/Architecture/Standards_and_ADRs/versioning-policy.md`
- **Config Schema:** `packages/frameworks/workflow mgt/config/rw-config-schema.md`
- **Cursor Rules:** `packages/frameworks/workflow mgt/cursorrules-rw-trigger-section.md`, `cursorrules-ukw-trigger-section.md`

---

## Related Work

- **E4:S16:** Kanban Package Implementation Review (completed, similar pattern)
- **E2:S01:** RW Agent Execution & Docs (RW implementation)
- **E2:S07:** Trigger-Aware Release Workflow (trigger system)
- **E2:S08:** Harden Release Workflow Reliability (Step 7 hardening)
- **E2:S09:** Kanban Granularity & Discrete Task Docs (RW integration)
- **E2:S10:** Versioning Policy Hardening (doc-init build support)
- **E2:S11:** Intake Workflow Automation (FR/BR/UXR automation)

---

## Notes

- Expectations baseline extracted from package README and documentation
- Pattern follows E4:S16:T01 (Kanban package expectations baseline)
- Baseline will be used for component inventory (T02) and behavior validation (T03)
- RC readiness review will compare actual implementation against this baseline
