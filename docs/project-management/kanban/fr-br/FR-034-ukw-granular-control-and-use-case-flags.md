---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: UKW Granular Control and Use Case Flags

**Type:** Feature Request (FR)  
**Submitted:** 2026-01-16  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** IMPLEMENTED ✅ (E5:S01:T34)  
**GitHub Issue:** [TBD]  
**Version:** v0.5.1.34+1 (Internal) | v0.5.39+1 (SemVer)

**Implementing Task:** [E5:S01:T34](../epics/Epic-5/Story-001-fr-repo/T34-ukw-granular-control-and-use-case-flags.md)

---

## Summary

Add granular control to UKW (Update Kanban Workflow) via use case flags and flexible task targeting syntax, enabling users to run only the operations they need (bookkeeping, priority updates, priority assignment) rather than executing the full monolithic workflow every time.

**Note (SoP Compliance):** This FR was extracted from a mixed-scope document (BR-033) following the Standard Operating Procedure for handling mixed BR/FR scope. The bug content (epic ordering disorganization) remains in BR-033. Priority assignment and granular control enhancements are documented here. See "Related Work" section for link to BR-033.

---

## Description

### What is the Feature?

A modular UKW workflow system that supports:
- **Use case flags** (`-u`, `-p`, `-a`) to run specific operations independently
- **Flexible task targeting syntax** for priority assignment operations
- **Efficient defaults** (bookkeeping only by default, priority operations opt-in)
- **Combined operations** when needed

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- `UKW` (no flags) runs bookkeeping only (lightweight, frequent)
- `UKW -u` runs bookkeeping (sorting and organization)
- `UKW -p` updates priorities of existing tasks (expensive, occasional)
- `UKW -a E09S01T01` assigns priority to specific task (targeted, efficient)
- `UKW -a E09` assigns priorities to entire epic
- `UKW -u -p -a all` runs full UKW when needed
- Users can run only the operations they need, reducing unnecessary AI processing

**Current Behavior:**
- UKW runs as a monolithic workflow
- All steps execute regardless of need
- Priority operations (expensive AI processing) run even when only bookkeeping is needed
- No way to target specific tasks/epics/stories for priority operations
- Inefficient for frequent bookkeeping operations

### What Problem Does This Solve?

**Efficiency Problem:**
- Priority operations require significant agentic intelligence (context analysis, dependency evaluation, strategic alignment, impact assessment)
- Running expensive operations on every UKW execution is wasteful when only bookkeeping is needed
- Users want to run bookkeeping frequently (lightweight) but priority operations only when needed (expensive)

**Usability Problem:**
- No way to run only specific operations
- No way to target specific tasks/epics/stories for priority assignment
- Must run full workflow even for simple operations

### Who Would Benefit from This Feature?

- **Project Managers:** Can run bookkeeping frequently without overhead
- **Developers:** Can target specific tasks for priority assignment
- **AI Agents:** Reduced processing time for frequent operations
- **All Users:** More efficient workflow execution

---

## Requirements

### Functional Requirements

- [ ] **FR-034:R01:** Support use case flag `-u` (bookkeeping - sorting and organization only)
- [ ] **FR-034:R02:** Support use case flag `-p` (update priorities of existing tasks)
- [ ] **FR-034:R03:** Support use case flag `-a` (assign priorities to tasks)
- [ ] **FR-034:R04:** Support flexible task targeting syntax:
  - Single task: `E09S01T01`, `e9s1t1`, `E09:S01:T01`
  - Multiple tasks: `E09S01T01,E08S02T11`
  - Linear range: `E09S01T01-E09S01T06`
  - Story: `E09S01`, `e9s1`
  - Epic: `E09`, `e9`
  - All unprioritized: `all`, `*`

- [ ] **FR-034:R05:** Support combined operations (`-u -p`, `-u -a`, `-u -p -a`)
- [ ] **FR-034:R06:** Default behavior: `UKW` (no flags) = `UKW -u` (bookkeeping only)
- [ ] **FR-034:R07:** Syntax parser supports canonical and compact formats
- [ ] **FR-034:R08:** Syntax parser supports case-insensitive input
- [ ] **FR-034:R09:** Syntax parser supports optional separators (`:`, `-`, none)
- [ ] **FR-034:R10:** Syntax parser validates epic/story/task numbers

### Non-Functional Requirements

- [ ] **Performance:** Bookkeeping operations should be fast (minimal AI processing)
- [ ] **Usability:** Command syntax should be intuitive and flexible
- [ ] **Backward Compatibility:** Existing UKW documentation should be updated to reflect new default
- [ ] **Error Handling:** Clear error messages for invalid syntax or missing targets

---

## Scope Analysis

**Problem Domain:** Workflow Management, Kanban Synchronization  
**Affected Areas:**
- [x] Workflow execution
- [x] Command-line interface
- [x] Documentation
- [x] Syntax parsing

**Estimated Complexity:**
- [x] Complex (2+ weeks)
  - Command-line argument parsing
  - Syntax parser implementation
  - Workflow modularization
  - Documentation updates


---

## Use Cases

### UC1: Bookkeeping (Sorting and Organization)
**Description:** Run only sorting and organization operations without priority changes.

**Command:** `UKW -u` or `UKW` (default)

**When to Use:**
- After creating new epics/stories/tasks (frequent)
- When board becomes disorganized (frequent)
- Periodic maintenance (frequent)
- Before important planning sessions (frequent)

**Benefits:**
- Fast execution (lightweight)
- No expensive AI processing
- Can run frequently without overhead

### UC2: Update Priorities
**Description:** Update priorities of existing tasks without sorting.

**Command:** `UKW -p`

**When to Use:**
- After project goals change (occasional)
- When dependencies shift (occasional)
- When deadlines change (occasional)
- After strategic planning sessions (occasional)

**Benefits:**
- Focused operation (no sorting overhead)
- Intelligent priority reassessment
- Run only when needed

### UC3: Assign Priorities
**Description:** Assign priorities to specified/all tasks without priority.

**Command Examples:**
- `UKW -a E09S01T01` (single task)
- `UKW -a E09S01T01,E08S02T11` (multiple tasks)
- `UKW -a E09S01T01-E09S01T06` (linear range)
- `UKW -a E09S01` (entire story)
- `UKW -a E09` (entire epic)
- `UKW -a all` (all unprioritized)

**When to Use:**
- After creating new tasks (occasional, targeted)
- When tasks are missing priorities (occasional, targeted)
- When bulk priority assignment is needed (rare, full analysis)

**Benefits:**
- Targeted execution (focus on specific tasks)
- Flexible syntax (user convenience)
- Efficient processing (only analyze what's needed)

### UC4: Combined Operations
**Description:** Run multiple operations in a single UKW execution.

**Command Examples:**
- `UKW -u -p` (bookkeeping + update priorities)
- `UKW -u -a E09` (bookkeeping + assign priorities to Epic 9)
- `UKW -u -p -a all` (full UKW - all operations)

**When to Use:**
- When multiple operations are needed
- After major project changes
- Comprehensive kanban synchronization

**Benefits:**
- Single command for multiple operations
- Efficient execution (no redundant processing)
- Flexible combination of operations

---

## Acceptance Criteria

- [ ] **Criterion 1:** `UKW -u` runs bookkeeping only (sorting, no priority changes)
- [ ] **Criterion 2:** `UKW -p` updates priorities only (no sorting)
- [ ] **Criterion 3:** `UKW -a E09S01T01` assigns priority to single task
- [ ] **Criterion 4:** `UKW -a E09S01T01,E08S02T11` assigns priorities to multiple tasks
- [ ] **Criterion 5:** `UKW -a E09S01T01-E09S01T06` assigns priorities to range
- [ ] **Criterion 6:** `UKW -a E09S01` assigns priorities to story
- [ ] **Criterion 7:** `UKW -a E09` assigns priorities to epic
- [ ] **Criterion 8:** `UKW -a all` assigns priorities to all unprioritized tasks
- [ ] **Criterion 9:** Canonical format supported (`E09S01T01`)
- [ ] **Criterion 10:** Compact format supported (`E9S1T1`)
- [ ] **Criterion 11:** Case-insensitive input supported
- [ ] **Criterion 12:** Optional separators supported (`:`, `-`, none)
- [ ] **Criterion 13:** Range syntax supported
- [ ] **Criterion 14:** Multiple task syntax supported
- [ ] **Criterion 15:** `UKW -u -p` runs both bookkeeping and priority updates
- [ ] **Criterion 16:** `UKW -u -a E09` runs bookkeeping and assigns priorities to Epic 9
- [ ] **Criterion 17:** `UKW -u -p -a all` runs full UKW (all operations)
- [ ] **Criterion 18:** `UKW` (no flags) runs bookkeeping only (efficient default)
- [ ] **Criterion 19:** Clear error messages for invalid syntax
- [ ] **Criterion 20:** Documentation updated to reflect new default behavior

---

## Dependencies

**Blocks:**
- Workflow efficiency improvements
- User experience improvements
- Resource optimization

**Blocked By:**
- None (can start immediately)

**Related Work:**
- **BR-033:** [UKW Board Disorganization](BR-033-ukw-board-disorganization.md) (bugs identified during triage)
- **SoP:** [Mixed BR/FR Scope Handling](../../../architecture/standards-and-adrs/mixed-br-fr-scope-sop.md)
- Epic 2: Workflow Management Framework
- Epic 4: Kanban Framework
- Epic 6: Framework Management and Maintenance
- E6:S06:T08: Update Kanban Workflow (UKW) - Perpetual Task

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-01-16  
**Intake By:** User

**Decision Flow Results:**
- [x] Story Match Found: Epic 5, Story 0 (FR Repo) → Task 34

**Assigned To:**
- Epic: Epic 5: Documentation Management
- Story: Story 0: FR Repo (PERPETUAL)
- Task: Task 34: UKW Granular Control and Use Case Flags
- Version: `v0.5.1.34+0` (doc-init, migrated from v0.5.0.34+0)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-5/Epic-5.md`](../epics/Epic-5/Epic-5.md)
- Story: [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`](../epics/Epic-5/Story-001-fr-repo.md) (migrated from Story-000-fr-repo)
- Task: [`docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T34-ukw-granular-control-and-use-case-flags.md`](../epics/Epic-5/Story-001-fr-repo/T34-ukw-granular-control-and-use-case-flags.md)

---

## Notes

**SoP Compliance:**
This FR was extracted from a mixed-scope document (BR-033) following the Standard Operating Procedure for handling mixed BR/FR scope. The bug content (epic ordering disorganization) remains in BR-033. All priority-related functionality (assignment, updates, granular control) is documented here to maintain clear separation of concerns.

**Efficiency Rationale:**
Priority operations (UC2/UC3) require significant agentic intelligence and are computationally expensive. Running them on every UKW execution is wasteful when only bookkeeping is needed. This feature enables users to run only the operations they need, reducing unnecessary AI processing and improving response times.

**Syntax Philosophy:**
- **Flexibility:** Support multiple input formats for user convenience
- **Normalization:** Convert to canonical format internally
- **Validation:** Strict validation with clear error messages
- **Consistency:** Maintain consistent output format regardless of input format

**Implementation Approach:**
1. **Phase 1:** Extract sorting logic into modular function
2. **Phase 2:** Extract priority operations into modular functions
3. **Phase 3:** Implement syntax parser for flexible task targeting
4. **Phase 4:** Add command-line argument parsing
5. **Phase 5:** Integrate with workflow YAML
6. **Phase 6:** Update documentation

---

## References

- **UKW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **UKW Workflow:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **UKW Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`
- **Related BR:** [BR-033 - UKW Board Disorganization](BR-033-ukw-board-disorganization.md)
- **SoP:** [Mixed BR/FR Scope Handling](../../../architecture/standards-and-adrs/mixed-br-fr-scope-sop.md)

---

_This Feature Request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

