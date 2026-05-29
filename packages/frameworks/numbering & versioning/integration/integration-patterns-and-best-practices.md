---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T19:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Integration Patterns and Best Practices: Kanban + Versioning + Release Workflow

**Package:** Numbering & Versioning Package v2.0.0  
**Integrates With:** Kanban System Package v1.0.0, Workflow Management Package v2.0.0  
**Document Type:** Patterns and Best Practices Reference  
**Last Updated:** 2025-12-04  
**Target Audience:** External projects adopting all three frameworks

---

## Overview

This document provides **detailed integration patterns and best practices** for integrating Kanban, Versioning, and Release Workflow frameworks. It includes decision trees, anti-patterns, and versioning strategies for different workflow scenarios.

**Related Documentation:**
- **Integration Guide:** `kanban-workflow-integration.md` (comprehensive three-way integration)
- **This Document:** Patterns, best practices, decision trees, anti-patterns

---

## Integration Patterns

### Pattern 1: Sequential Task Completion

**Scenario:** Tasks completed in sequential order (T01 → T02 → T03)

**Pattern:**
```yaml
task_sequence:
  task_1:
    version: "0.4.33.1+1"
    marker: "✅ COMPLETE (v0.4.33.1+1)"
  
  task_2:
    version: "0.4.33.2+1"
    marker: "✅ COMPLETE (v0.4.33.2+1)"
    note: "New task → TASK = 2, BUILD = 1"
  
  task_3:
    version: "0.4.33.3+1"
    marker: "✅ COMPLETE (v0.4.33.3+1)"
    note: "New task → TASK = 3, BUILD = 1"
```

**Best Practice:**
- ✅ **DO:** Complete tasks sequentially when possible
- ✅ **DO:** Use new task pattern (TASK increment, BUILD reset)
- ✅ **DO:** Maintain clear task progression in Story file

**Anti-Pattern:**
- ❌ **DON'T:** Increment BUILD for new tasks (wrong: `0.4.33.1+2` for Task 2)
- ❌ **DON'T:** Skip task numbers (wrong: T01 → T03, skipping T02)

---

### Pattern 2: Same Task, Multiple Releases

**Scenario:** Multiple releases for the same task (bugfixes, refinements)

**Pattern:**
```yaml
task_1_releases:
  release_1:
    version: "0.4.33.1+1"
    marker: "✅ COMPLETE (v0.4.33.1+1)"
    reason: "Initial task completion"
  
  release_2:
    version: "0.4.33.1+2"
    marker: "✅ COMPLETE (v0.4.33.1+2)"
    reason: "Bugfix for Task 1"
    note: "Same task → BUILD increment"
  
  release_3:
    version: "0.4.33.1+3"
    marker: "✅ COMPLETE (v0.4.33.1+3)"
    reason: "Additional refinement"
    note: "Same task → BUILD increment"
```

**Best Practice:**
- ✅ **DO:** Increment BUILD for same task releases
- ✅ **DO:** Update forensic marker to latest version
- ✅ **DO:** Document reason for each release in changelog

**Anti-Pattern:**
- ❌ **DON'T:** Create new task number for bugfixes (wrong: `0.4.33.2+1` for Task 1 bugfix)
- ❌ **DON'T:** Keep old version in forensic marker (wrong: `✅ COMPLETE (v0.4.33.1+1)` when at `+3`)

---

### Pattern 3: Out-of-Order Task Completion

**Scenario:** Tasks completed out of sequential order (T06 → T05)

**Pattern:**
```yaml
out_of_order_completion:
  task_6_completed_first:
    version: "0.4.33.6+1"
    marker: "✅ COMPLETE (v0.4.33.6+1)"
    timestamp: "2025-12-04 10:00:00"
  
  task_5_completed_later:
    version: "0.4.33.5+1"
    marker: "✅ COMPLETE (v0.4.33.5+1)"
    timestamp: "2025-12-04 15:00:00"
    note: "Out-of-order → TASK = 5, BUILD = 1 (not +2 for Task 6)"

changelog_ordering:
  entry_1: "0.4.33.5+1 (Task 5, completed later)"
  entry_2: "0.4.33.6+1 (Task 6, completed earlier)"
  note: "Canonical ordering: Task 5 < Task 6, regardless of timestamp"
```

**Best Practice:**
- ✅ **DO:** Use completed task number for version (not current VERSION_TASK)
- ✅ **DO:** Set BUILD = 1 for out-of-order tasks
- ✅ **DO:** Order changelog by version number (canonical ordering)
- ✅ **DO:** Understand this enables parallel task work

**Anti-Pattern:**
- ❌ **DON'T:** Increment BUILD for out-of-order tasks (wrong: `0.4.33.6+2` for Task 5)
- ❌ **DON'T:** Use current VERSION_TASK when it's higher (wrong: use Task 6 version for Task 5)
- ❌ **DON'T:** Order changelog by timestamp (wrong: Task 6 before Task 5)

---

### Pattern 4: Story Completion

**Scenario:** All tasks in a story completed

**Pattern:**
```yaml
story_completion:
  final_task:
    task: "E4:S33:T03"
    version: "0.4.33.3+1"
    marker: "✅ COMPLETE (v0.4.33.3+1)"
  
  story_marker:
    location: "Epic document, Story Checklist"
    format: "- [x] **Story 33 – Parent Inclusivity** ✅ COMPLETE (v0.4.33.3+1)"
    note: "Story marked complete when all tasks complete"
  
  epic_header:
    format: "**Last updated:** 2025-12-04 (v0.4.33.3+1 – Story 33 complete)"
```

**Best Practice:**
- ✅ **DO:** Mark story complete when all tasks are complete
- ✅ **DO:** Use final task version for story marker
- ✅ **DO:** Update Epic header with story completion

**Anti-Pattern:**
- ❌ **DON'T:** Mark story complete before all tasks done
- ❌ **DON'T:** Use intermediate task version for story marker

---

### Pattern 5: Parallel Epic Development

**Scenario:** Multiple epics developed in parallel

**Pattern:**
```yaml
parallel_epics:
  epic_4:
    version_range: "0.4.x.x+x"
    current: "0.4.33.3+1"
    status: "IN PROGRESS"
  
  epic_12:
    version_range: "0.12.x.x+x"
    current: "0.12.5.2+1"
    status: "IN PROGRESS"
  
  epic_20:
    version_range: "0.20.x.x+x"
    current: "0.20.11.14+1"
    status: "IN PROGRESS"

changelog_ordering:
  note: "Epic 4 entries appear before Epic 12, Epic 12 before Epic 20"
  example:
    - "0.4.33.3+1 (Epic 4)"
    - "0.12.5.2+1 (Epic 12)"
    - "0.20.11.14+1 (Epic 20)"
```

**Best Practice:**
- ✅ **DO:** Use separate version streams per epic
- ✅ **DO:** Order changelog by version number (canonical ordering)
- ✅ **DO:** Understand changelog order ≠ Git commit order

**Anti-Pattern:**
- ❌ **DON'T:** Expect changelog to match chronological order
- ❌ **DON'T:** Use same version stream for multiple epics

---

## Decision Trees

### Decision Tree 1: Version Bump Logic

```
START: Task completed, ready for release

Is completed task > current VERSION_TASK?
├─ YES → NEW TASK
│   ├─ Set VERSION_TASK = completed task
│   ├─ Set VERSION_BUILD = 1
│   └─ Version: RC.EPIC.STORY.{completed_task}+1
│
├─ NO → Is completed task == current VERSION_TASK?
│   ├─ YES → SAME TASK
│   │   ├─ Keep VERSION_TASK unchanged
│   │   ├─ Increment VERSION_BUILD = current + 1
│   │   └─ Version: RC.EPIC.STORY.{current_task}+{build+1}
│   │
│   └─ NO → OUT-OF-ORDER COMPLETION
│       ├─ Set VERSION_TASK = completed task
│       ├─ Set VERSION_BUILD = 1
│       └─ Version: RC.EPIC.STORY.{completed_task}+1
│
END: Version file updated
```

### Decision Tree 2: Changelog Insertion Point

```
START: New version ready for changelog entry

Parse new version: RC.EPIC.STORY.TASK+BUILD → (RC, EPIC, STORY, TASK, BUILD)

For each existing changelog entry:
  Parse existing version: RC.EPIC.STORY.TASK+BUILD → (RC, EPIC, STORY, TASK, BUILD)
  
  Compare versions:
    Compare RC first
    ├─ new.RC < existing.RC → INSERT HERE
    ├─ new.RC > existing.RC → CONTINUE
    └─ new.RC == existing.RC → Compare EPIC
        ├─ new.EPIC < existing.EPIC → INSERT HERE
        ├─ new.EPIC > existing.EPIC → CONTINUE
        └─ new.EPIC == existing.EPIC → Compare STORY
            ├─ new.STORY < existing.STORY → INSERT HERE
            ├─ new.STORY > existing.STORY → CONTINUE
            └─ new.STORY == existing.STORY → Compare TASK
                ├─ new.TASK < existing.TASK → INSERT HERE
                ├─ new.TASK > existing.TASK → CONTINUE
                └─ new.TASK == existing.TASK → Compare BUILD
                    ├─ new.BUILD < existing.BUILD → INSERT HERE
                    ├─ new.BUILD > existing.BUILD → CONTINUE
                    └─ new.BUILD == existing.BUILD → ERROR (duplicate version)

If no insertion point found → INSERT AT END

END: Changelog entry inserted at correct position
```

### Decision Tree 3: Kanban Update Scope

```
START: RW Step 6 - Update Kanban Docs

Read Story file (authoritative source)
Identify completed task: E{epic}:S{story}:T{task}

Search Epic document for ALL references to this story/task:
  ├─ Epic header "Last updated" field → UPDATE
  ├─ Story Checklist entry → UPDATE
  ├─ Detailed story section "Status" → UPDATE
  ├─ Detailed story section "Last updated" → UPDATE
  ├─ Detailed story section task checkboxes → UPDATE
  └─ Any other references → UPDATE

For each section found:
  Update to match Story file state
  Add/update forensic markers with version

Validate consistency:
  ├─ Epic header matches Story Checklist → ✓
  ├─ Story Checklist matches detailed sections → ✓
  └─ All task markers match Story file → ✓

END: ALL sections updated and validated
```

---

## Best Practices by Integration Point

### Kanban → Versioning Integration

**✅ DO:**
- Use consistent task naming: `E{epic}:S{story}:T{task}`
- Map tasks directly to version TASK component
- Use forensic markers: `✅ COMPLETE (v{version})`
- Keep task numbers sequential within story

**❌ DON'T:**
- Use standalone task numbers (wrong: `T01` instead of `E4:S33:T01`)
- Skip task numbers (wrong: T01 → T03, skipping T02)
- Use inconsistent naming formats

---

### Versioning → Release Workflow Integration

**✅ DO:**
- Read Story file to identify completed task
- Compare completed task vs. current VERSION_TASK
- Handle all three cases: new task, same task, out-of-order
- Always use completed task number (not current VERSION_TASK)
- Validate version bump logic before committing

**❌ DON'T:**
- Skip Story file read
- Assume same task without comparison
- Treat out-of-order completion as error
- Use current VERSION_TASK when it's higher than completed task

---

### Release Workflow → Kanban Integration

**✅ DO:**
- Read Story file as authoritative source
- Update ALL sections (not just checklist)
- Use systematic process: ANALYZE → DETERMINE → EXECUTE → VALIDATE
- Validate consistency after updates
- Follow "ALL sections" requirement

**❌ DON'T:**
- Update only Story Checklist
- Skip detailed story sections
- Use Epic document as source of truth (use Story file)
- Create duplicate progress sections

---

## Anti-Patterns and Pitfalls

### Anti-Pattern 1: BUILD Increment for New Task

**Symptom:** Version shows `0.4.33.1+2` for Task 2

**Root Cause:** Incremented BUILD instead of TASK

**Correct Pattern:**
- Task 1: `0.4.33.1+1`
- Task 2: `0.4.33.2+1` (TASK = 2, BUILD = 1)

**Prevention:**
- Always compare completed task vs. current VERSION_TASK
- Use RW Step 2 logic: new task → TASK = completed, BUILD = 1

---

### Anti-Pattern 2: Chronological Changelog Ordering

**Symptom:** Changelog entries ordered by commit time, not version number

**Root Cause:** Inserting entries at top (chronological) instead of using canonical ordering

**Correct Pattern:**
- Order by version number: `RC.EPIC.STORY.TASK+BUILD`
- `0.2.4.9+3` appears before `0.3.2.4+1` (Epic 2 < Epic 3)
- `0.3.2.5+1` appears before `0.3.2.6+1` (Task 5 < Task 6)

**Prevention:**
- Use version number comparison in RW Step 4
- Run `validate_changelog_format.py` to verify ordering

---

### Anti-Pattern 3: Partial Kanban Updates

**Symptom:** Only Story Checklist updated, detailed sections unchanged

**Root Cause:** Not following "ALL sections" requirement

**Correct Pattern:**
- Update Epic header
- Update Story Checklist
- Update detailed story sections (Status, Last updated, tasks)
- Validate all sections consistent

**Prevention:**
- Follow systematic process: search for ALL references
- Validate consistency after updates
- Use Story file as authoritative source

---

### Anti-Pattern 4: Out-of-Order Versioning Error

**Symptom:** Task 5 versioned as `0.4.33.6+2` when Task 6 already at `+1`

**Root Cause:** Treated out-of-order completion as BUILD increment

**Correct Pattern:**
- Task 6: `0.4.33.6+1`
- Task 5: `0.4.33.5+1` (TASK = 5, BUILD = 1, not Task 6 BUILD increment)

**Prevention:**
- Use completed task number for version
- Understand out-of-order completion is valid
- Follow RW Step 2 logic for out-of-order case

---

### Anti-Pattern 5: Inconsistent Forensic Markers

**Symptom:** Different marker formats across documents

**Root Cause:** Manual updates or inconsistent automation

**Correct Pattern:**
- Standard format: `✅ COMPLETE (v{version})`
- Always include version number
- Use consistent format across all documents

**Prevention:**
- Use RW automation (Step 6)
- Validate marker format consistency
- Use templates for manual updates

---

## Versioning Strategies

### Strategy 1: Sequential Development

**Use Case:** Linear story development, tasks completed in order

**Versioning Approach:**
- Tasks: T01 → T02 → T03 (sequential)
- Versions: `0.4.33.1+1` → `0.4.33.2+1` → `0.4.33.3+1`
- Pattern: New task → TASK increment, BUILD = 1

**Best For:**
- Single developer or small team
- Linear story progression
- Clear task dependencies

---

### Strategy 2: Parallel Task Development

**Use Case:** Multiple tasks developed in parallel, completed out of order

**Versioning Approach:**
- Tasks: T06 → T05 → T04 (out of order)
- Versions: `0.4.33.6+1` → `0.4.33.5+1` → `0.4.33.4+1`
- Pattern: Out-of-order → TASK = completed, BUILD = 1
- Changelog: Ordered by version number (Task 4 < Task 5 < Task 6)

**Best For:**
- Multiple developers
- Independent tasks
- Agile/iterative development

---

### Strategy 3: Iterative Refinement

**Use Case:** Same task refined multiple times (bugfixes, improvements)

**Versioning Approach:**
- Task: T01 (multiple releases)
- Versions: `0.4.33.1+1` → `0.4.33.1+2` → `0.4.33.1+3`
- Pattern: Same task → BUILD increment

**Best For:**
- Bugfixes within task
- Iterative improvements
- Testing and refinement cycles

---

### Strategy 4: Parallel Epic Development

**Use Case:** Multiple epics developed simultaneously

**Versioning Approach:**
- Epic 4: `0.4.x.x+x`
- Epic 12: `0.12.x.x+x`
- Epic 20: `0.20.x.x+x`
- Pattern: Separate version streams per epic

**Best For:**
- Large projects
- Multiple feature streams
- Independent release schedules

---

## Integration Checklist

### Initial Setup

- [ ] Install all three framework packages
- [ ] Configure version file with `RC.EPIC.STORY.TASK+BUILD` schema
- [ ] Set up Kanban structure (Epic/Story/Task documents)
- [ ] Configure RW trigger in `.cursorrules`
- [ ] Test version file reading and parsing
- [ ] Test Kanban document structure
- [ ] Test RW execution (dry run)

### Ongoing Integration

- [ ] Always read Story file before version bump
- [ ] Always compare completed task vs. current VERSION_TASK
- [ ] Always update ALL Kanban sections (not just checklist)
- [ ] Always use canonical ordering for changelog
- [ ] Always run validators before committing
- [ ] Always validate consistency after updates

### Validation

- [ ] Branch context validator passes
- [ ] Changelog format validator passes
- [ ] Version bump logic validator passes
- [ ] Kanban sections consistent
- [ ] Forensic markers present and correct

---

## Quick Reference: Common Scenarios

### Scenario: New Task in Story

```yaml
current: "0.4.33.1+3"
completed: "Task 2"
action: "NEW TASK → TASK = 2, BUILD = 1"
result: "0.4.33.2+1"
```

### Scenario: Same Task, Bugfix

```yaml
current: "0.4.33.1+3"
completed: "Task 1 (bugfix)"
action: "SAME TASK → BUILD = 4"
result: "0.4.33.1+4"
```

### Scenario: Out-of-Order Completion

```yaml
current: "0.4.33.6+1"
completed: "Task 5"
action: "OUT-OF-ORDER → TASK = 5, BUILD = 1"
result: "0.4.33.5+1"
changelog: "0.4.33.5+1 before 0.4.33.6+1"
```

---

## Related Documentation

- **Integration Guide:** `kanban-workflow-integration.md`
- **Kanban ↔ Versioning:** `../kanban/integration/numbering-versioning-integration.md`
- **Kanban ↔ Workflow:** `../kanban/integration/workflow-management-integration.md`
- **Versioning Cookbook:** `../../docs/architecture/standards-and-adrs/dev-kit-versioning-cookbook.md`
- **Versioning Quick Reference:** `../../docs/architecture/standards-and-adrs/versioning-quick-reference.md`
- **Workflow Flaws Reference:** `../../docs/architecture/standards-and-adrs/workflow-flaws-reference-guide.md` - Comprehensive reference for all discovered RW flaws

---

**Patterns and Best Practices Complete!** Use these patterns and practices to ensure successful integration of all three frameworks! 🎯

