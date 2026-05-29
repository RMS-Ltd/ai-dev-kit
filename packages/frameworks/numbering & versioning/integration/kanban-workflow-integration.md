---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Framework-Level Integration: Kanban + Versioning + Release Workflow

**Package:** Numbering & Versioning Package v2.0.0  
**Integrates With:** Kanban System Package v1.0.0, Workflow Management Package v2.0.0  
**Integration Type:** Three-way complementary integration  
**Last Updated:** 2025-12-04  
**Target Audience:** External projects adopting all three frameworks

---

## Overview

This guide provides **framework-level integration documentation** for integrating the Numbering & Versioning framework with the Kanban and Workflow Management frameworks. This is **portable, template-ready documentation** designed for external projects, distinct from dev-kit-specific implementation validation.

**Key Distinction:**
- **This Guide:** Framework-level patterns, portable examples, external project focused
- **Dev-Kit Guide:** Dev-kit specific paths, validation results, implementation details

---

## Prerequisites

```yaml
required_packages:
  - Kanban System Package v1.0.0+
  - Numbering & Versioning Package v2.0.0+
  - Workflow Management Package v2.0.0+

required_configuration:
  - Version schema: RC.EPIC.STORY.TASK+BUILD
  - Version file: src/{yourproject}/version.py (or configurable path)
  - Kanban structure: {kanban_root}/epics/Epic-{N}.md
  - Story structure: {kanban_root}/epics/Epic-{N}/stories/Story-{N}-*.md
  - .cursorrules configured with RW trigger section
  - Epic and Story documents following templates
```

---

## Three-Way Integration Architecture

### Framework Relationships

```yaml
kanban_framework:
  role: "Work item tracking and organization"
  provides:
    - "Epic/Story/Task hierarchy"
    - "Work item structure"
    - "Forensic marker locations"
  location: "{kanban_root}/"

versioning_framework:
  role: "Version tracking and forensic traceability"
  provides:
    - "RC.EPIC.STORY.TASK+BUILD schema"
    - "Version file structure"
    - "Canonical ordering principles"
  location: "src/{yourproject}/version.py"

workflow_framework:
  role: "Automation and orchestration"
  provides:
    - "Release Workflow (RW) automation"
    - "Version bumping logic"
    - "Kanban documentation updates"
  location: "{workflow_root}/"
```

### Integration Flow

```yaml
end_to_end_flow:
  1_work_completion:
    action: "Developer completes Task (code changes)"
    kanban_state: "Task ready for release"
    version_state: "Current version in version.py"

  2_workflow_trigger:
    action: "Developer types 'RW' in AI assistant"
    workflow_state: "RW execution begins"

  3_version_bump:
    action: "RW Step 2: Bump Version"
    reads: "version.py (current version)"
    reads: "Story file (completed task)"
    updates: "version.py (new version)"
    logic: "Task transition detection, BUILD increment"

  4_changelog_creation:
    action: "RW Step 3-4: Create/Update Changelog"
    creates: "Detailed changelog archive"
    updates: "Main CHANGELOG.md (canonical ordering)"

  5_kanban_update:
    action: "RW Step 6: Auto-update Kanban Docs"
    reads: "Story file (authoritative state)"
    updates: "Epic header (Last updated field)"
    updates: "Story Checklist (status + version marker)"
    updates: "Detailed story sections (ALL sections)"
    requirement: "ALL sections must be updated"

  6_validation:
    action: "RW Step 8: Run Validators"
    validates: "Branch context alignment"
    validates: "Changelog format and ordering"
    validates: "Version bump logic"

  7_git_operations:
    action: "RW Step 9-11: Commit, Tag, Push"
    commits: "All changes with versioned message"
    tags: "Git tag with version"
    pushes: "Branch and tags to remote"
```

---

## Integration Points

### 1. Kanban → Versioning Integration

**How They Connect:**
- Kanban Tasks map to version `TASK` component
- Kanban Stories map to version `STORY` component
- Kanban Epics map to version `EPIC` component
- Forensic markers link completed work items to versions

**Framework-Level Pattern:**
```yaml
kanban_task: "E{epic}:S{story}:T{task}"
version: "RC.EPIC.STORY.TASK+BUILD"
forensic_marker: "✅ COMPLETE (vRC.EPIC.STORY.TASK+BUILD)"

example:
  kanban: "E4:S33:T01"
  version: "0.4.33.1+1"
  marker: "✅ COMPLETE (v0.4.33.1+1)"
```

**Integration Requirements:**
- Version file must use `RC.EPIC.STORY.TASK+BUILD` schema
- Task naming must follow `E{epic}:S{story}:T{task}` format
- Forensic markers must use version format: `(vRC.EPIC.STORY.TASK+BUILD)`

**Reference:** See `packages/frameworks/kanban/integration/numbering-versioning-integration.md` for detailed Kanban ↔ Versioning integration guide.

---

### 2. Versioning → Release Workflow Integration

**How They Connect:**
- RW Step 2 reads version from version file
- RW Step 2 updates `VERSION_TASK` and `VERSION_BUILD` based on completed task
- RW Step 2 detects Task transitions and resets BUILD to 1
- Validation scripts verify version format and branch alignment

**Framework-Level Pattern:**
```yaml
version_file_structure:
  location: "src/{yourproject}/version.py"
  format: |
    VERSION_RC = 0
    VERSION_EPIC = {epic}
    VERSION_STORY = {story}
    VERSION_TASK = {task}
    VERSION_BUILD = {build}
    VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

rw_step_2_logic:
  reads: "version.py (current version components)"
  reads: "Story file (completed task number)"
  compares: "completed task vs. current VERSION_TASK"
  decisions:
    - "If completed > current: NEW TASK → VERSION_TASK = completed, BUILD = 1"
    - "If completed == current: SAME TASK → BUILD = current + 1"
    - "If completed < current: OUT-OF-ORDER → VERSION_TASK = completed, BUILD = 1"
  updates: "version.py with new version"
```

**Integration Requirements:**
- Version file must be readable by Python (import or parse)
- Version file must follow standard structure
- RW Step 2 must read Story file to identify completed task
- Version bump logic must handle task transitions correctly

**Reference:** See `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` for detailed RW Step 2 logic.

---

### 3. Release Workflow → Kanban Integration

**How They Connect:**
- RW Step 6 automatically updates Kanban documentation
- RW reads Story file as authoritative source
- RW updates ALL sections referencing the story/task
- RW adds forensic markers with version numbers

**Framework-Level Pattern:**
```yaml
rw_step_6_updates:
  epic_header:
    location: "{kanban_root}/epics/Epic-{epic}.md"
    field: "Last updated"
    format: "**Last updated:** {date} (v{version} – {description})"

  story_checklist:
    location: "{kanban_root}/epics/Epic-{epic}.md"
    section: "Story Checklist"
    format: "- [x] **Story {N} – {Name}** ✅ COMPLETE (v{version})"

  detailed_story_sections:
    location: "{kanban_root}/epics/Epic-{epic}.md"
    sections: "ALL sections referencing the story/task"
    updates:
      - "Status field"
      - "Last updated field"
      - "Task checkboxes with forensic markers"
    requirement: "ALL sections must be updated (not just checklist)"

  task_checklist:
    location: "{kanban_root}/epics/Epic-{epic}/stories/Story-{N}-*.md"
    format: "- [x] **E{epic}:S{story}:T{task} – {Name}** ✅ COMPLETE (v{version})"
```

**Integration Requirements:**
- Kanban structure must follow standard patterns
- Story file must be authoritative source of truth
- RW must update ALL sections (not just checklist)
- Forensic markers must use consistent format

**Reference:** See `packages/frameworks/kanban/integration/workflow-management-integration.md` for detailed RW → Kanban integration guide.

---

## Complete Integration Example

### Scenario: Completing a Task

```yaml
initial_state:
  version_file: "0.4.33.1+1"
  kanban_task: "E4:S33:T01 - Audit parent templates"
  task_status: "IN PROGRESS"

work_completion:
  developer: "Completes code changes for Task 1"
  tests: "All tests passing"
  ready: "Ready for release"

workflow_execution:
  trigger: "Developer types 'RW'"
  
  step_2_version_bump:
    reads_version: "0.4.33.1+1"
    reads_story: "Task 1 completed"
    compares: "completed (1) == current (1)"
    decision: "SAME TASK → BUILD increment"
    new_version: "0.4.33.1+2"
    updates: "version.py → 0.4.33.1+2"
  
  step_3_4_changelog:
    creates: "CHANGELOG_v0.4.33.1+2.md"
    updates: "CHANGELOG.md (canonical ordering)"
  
  step_6_kanban_update:
    reads_story: "Story-33-*.md (authoritative)"
    updates_epic_header: "Last updated: 2025-12-04 (v0.4.33.1+2 – E4:S33:T01 complete)"
    updates_story_checklist: "No change (story still IN PROGRESS)"
    updates_task_checklist: "- [x] **E4:S33:T01** ✅ COMPLETE (v0.4.33.1+2)"
    updates_detailed_sections: "Status, Last updated, task checkboxes"
  
  step_8_validation:
    validates: "Branch context ✓"
    validates: "Changelog format ✓"
    validates: "Version bump logic ✓"
  
  step_9_11_git:
    commits: "All changes with versioned message"
    tags: "v0.4.33.1+2"
    pushes: "Branch and tags to remote"

final_state:
  version_file: "0.4.33.1+2"
  kanban_task: "E4:S33:T01 ✅ COMPLETE (v0.4.33.1+2)"
  changelog: "Entry for v0.4.33.1+2"
  git_tag: "v0.4.33.1+2"
```

---

## Integration Patterns

### Pattern 1: New Task (Task Transition)

```yaml
scenario: "Moving from Task 1 to Task 2"

current_state:
  version: "0.4.33.1+3"
  completed_task: "Task 1"

work_completion:
  completed_task: "Task 2"

rw_step_2_logic:
  compares: "completed (2) > current (1)"
  decision: "NEW TASK → VERSION_TASK = 2, BUILD = 1"
  new_version: "0.4.33.2+1"

kanban_updates:
  task_1: "✅ COMPLETE (v0.4.33.1+3)"
  task_2: "✅ COMPLETE (v0.4.33.2+1)"
```

### Pattern 2: Same Task (Build Increment)

```yaml
scenario: "Second release for same task"

current_state:
  version: "0.4.33.1+1"
  completed_task: "Task 1"

work_completion:
  completed_task: "Task 1 (additional changes)"

rw_step_2_logic:
  compares: "completed (1) == current (1)"
  decision: "SAME TASK → BUILD increment"
  new_version: "0.4.33.1+2"

kanban_updates:
  task_1: "✅ COMPLETE (v0.4.33.1+2)" (updated marker)
```

### Pattern 3: Out-of-Order Task Completion

```yaml
scenario: "Task 5 completed after Task 6"

current_state:
  version: "0.4.33.6+1"
  completed_task: "Task 6 (already released)"

work_completion:
  completed_task: "Task 5"

rw_step_2_logic:
  compares: "completed (5) < current (6)"
  decision: "OUT-OF-ORDER → VERSION_TASK = 5, BUILD = 1"
  new_version: "0.4.33.5+1"

kanban_updates:
  task_5: "✅ COMPLETE (v0.4.33.5+1)"
  task_6: "✅ COMPLETE (v0.4.33.6+1)"

changelog_ordering:
  note: "0.4.33.5+1 appears before 0.4.33.6+1 (canonical ordering)"
```

---

## Configuration Requirements

### Version File Configuration

```yaml
location: "src/{yourproject}/version.py"
structure: |
  VERSION_RC = 0
  VERSION_EPIC = {epic}
  VERSION_STORY = {story}
  VERSION_TASK = {task}
  VERSION_BUILD = {build}
  VERSION_STRING = f"{VERSION_RC}.{VERSION_EPIC}.{VERSION_STORY}.{VERSION_TASK}+{VERSION_BUILD}"

configurable_via:
  - "rw-config.yaml (version_file path)"
  - "Default fallback: src/{yourproject}/version.py"
```

### Kanban Structure Configuration

```yaml
epic_docs:
  pattern: "{kanban_root}/epics/Epic-{epic}/Epic-{epic}.md"
  configurable_via: "rw-config.yaml (kanban_root, epic_doc_pattern)"

story_docs:
  pattern: "{kanban_root}/epics/Epic-{epic}/Story-{N}-*.md"
  configurable_via: "rw-config.yaml (kanban_root, story_doc_pattern)"
```

### Workflow Configuration

```yaml
rw_trigger:
  location: ".cursorrules"
  section: "RW Trigger Section"
  configurable: "Yes (project-specific paths)"

validation_scripts:
  - "validate_branch_context.py"
  - "validate_changelog_format.py"
  - "validate_version_bump.py"
  configurable_via: "rw-config.yaml (scripts_path)"
```

---

## Best Practices

### ✅ DO

- **Always use full task format:** `E{epic}:S{story}:T{task}` (never standalone `T{task}`)
- **Read Story file first:** Story file is authoritative source of truth
- **Update ALL sections:** Not just checklist, but ALL sections referencing story/task
- **Use canonical ordering:** Changelog entries ordered by version number, not timestamp
- **Validate before committing:** Run all validators in RW Step 8
- **Handle out-of-order completion:** Tasks can be completed out of sequential order

### ❌ DON'T

- **Never skip Story file read:** Always read Story file to identify completed task
- **Never assume same task:** Always compare completed task vs. current VERSION_TASK
- **Never update only checklist:** Must update ALL sections (header, checklist, detailed sections)
- **Never use chronological ordering:** Use canonical ordering (by version number)
- **Never skip validators:** All validators must pass before committing

---

## Troubleshooting

### Issue: Version Bump Logic Error

**Symptom:** Version doesn't match completed task

**Solution:**
- Verify RW Step 2 reads Story file correctly
- Verify completed task number extraction
- Check version bump logic (new task vs. same task vs. out-of-order)
- Run `validate_version_bump.py` to diagnose

### Issue: Kanban Docs Not Updated

**Symptom:** Forensic markers missing or inconsistent

**Solution:**
- Verify RW Step 6 reads Story file as authoritative source
- Check that ALL sections are updated (not just checklist)
- Verify Kanban structure matches expected patterns
- Check file paths in rw-config.yaml

### Issue: Changelog Ordering Violation

**Symptom:** Changelog entries in wrong order

**Solution:**
- Verify RW Step 4 uses canonical ordering (version number comparison)
- Run `validate_changelog_format.py` to identify violations
- Reorder entries by version number (RC.EPIC.STORY.TASK+BUILD)

---

## Related Documentation

### Framework Integration Guides

- **Kanban ↔ Versioning:** `packages/frameworks/kanban/integration/numbering-versioning-integration.md`
- **Kanban ↔ Workflow:** `packages/frameworks/kanban/integration/workflow-management-integration.md`
- **This Guide:** Three-way integration (all frameworks together)

### Framework Documentation

- **Kanban Framework:** `packages/frameworks/kanban/README.md`
- **Versioning Framework:** `packages/frameworks/numbering & versioning/README.md`
- **Workflow Framework:** `packages/frameworks/workflow mgt/README.md`

### Reference Documentation

- **Workflow Flaws Reference:** `../../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all discovered RW flaws
- **Versioning Error Reference:** `../../docs/architecture/standards-and-adrs/versioning-error-reference-guide.md` - Versioning-specific error reference

### Dev-Kit Specific (Reference Only)

- **Dev-Kit Integration Guide:** `docs/architecture/standards-and-adrs/dev-kit-kanban-versioning-rw-integration.md`
- **Dev-Kit Validation:** `docs/project-management/kanban/epics/Epic-4/Story-003-kanban-versioning-rw-integration.md`

---

## Quick Reference

### Version Schema

```
RC.EPIC.STORY.TASK+BUILD

Example: 0.4.33.1+2
- RC: 0 (development)
- EPIC: 4 (Epic 4)
- STORY: 33 (Story 33)
- TASK: 1 (Task 1)
- BUILD: 2 (Build 2)
```

### Task Naming

```
E{epic}:S{story}:T{task}

Example: E4:S33:T01
- E4: Epic 4
- S33: Story 33
- T01: Task 1
```

### Forensic Marker Format

```
✅ COMPLETE (v{version})

Example: ✅ COMPLETE (v0.4.33.1+2)
```

### RW Step 2 Logic

```
IF completed > current: NEW TASK → TASK = completed, BUILD = 1
IF completed == current: SAME TASK → BUILD = current + 1
IF completed < current: OUT-OF-ORDER → TASK = completed, BUILD = 1
```

---

**Framework Integration Complete!** All three frameworks work together seamlessly for end-to-end traceability from work items to code releases! 🚀

