---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 34: UKW Granular Control and Use Case Flags

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-01-22 (v0.5.1.34+1 – Implementation complete: UKW granular control via flags and syntax parser)  
**Started:** 2026-01-22  
**Completed:** 2026-01-22  
**Version:** v0.5.1.34+1  
**Code:** E5S01T34

---

## Task ID

**Format:** `E\{epic\}:S\{story\}:T\{task\}`

**Full Task ID:** `E5:S01:T34`

**Repository Pattern:** FR-034 = E5:S01:T34 (abstract space: v0.5.1.34+0, completed: v0.5.1.34+1)

---

## Scope

Add granular control to UKW (Update Kanban Workflow) via use case flags and flexible task targeting syntax, enabling users to run only the operations they need (bookkeeping, priority updates, priority assignment) rather than executing the full monolithic workflow every time.

**Problem Statement:**
- UKW currently runs as a monolithic workflow that attempts to do everything at once
- Priority operations require significant agentic intelligence and are computationally expensive
- Running expensive operations on every UKW execution is wasteful when only bookkeeping is needed
- No way to run only specific operations or target specific tasks/epics/stories

**Solution:**
- Implement use case flags (`-u`, `-p`, `-a`) for granular control
- Add flexible task targeting syntax for priority assignment operations
- Make bookkeeping the default (lightweight, frequent)
- Make priority operations opt-in (expensive, occasional)
- Support combined operations when needed

---

## Input

- **FR-034:** [`FR-034-ukw-granular-control-and-use-case-flags.md`](../../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- **BR-033:** [`BR-033-ukw-board-disorganization.md`](../../../fr-br/BR-033-ukw-board-disorganization.md) (related bug report)
- **UKW Documentation:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
- **UKW Workflow:** `packages/frameworks/workflow mgt/workflows/update-kanban-workflow.yaml`
- **Kanban Board:** `docs/project-management/kanban/kboard.md`
- **UKW Task:** `docs/project-management/kanban/epics/Epic-6/Story-006-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`
- **SoP:** `docs/architecture/standards-and-adrs/mixed-br-fr-scope-sop.md`

---

## Deliverable

**Modular UKW Workflow System** that supports:

1. **Use Case Flags:**
   - `-u` (bookkeeping): Sorting and organization only (lightweight, default)
   - `-p` (update priorities): Update priorities of existing tasks (expensive, occasional)
   - `-a` (assign priorities): Assign priorities to tasks (expensive, occasional)

2. **Flexible Task Targeting Syntax:**
   - Single task: `E09S01T01`, `e9s1t1`, `E09:S01:T01`
   - Multiple tasks: `E09S01T01,E08S02T11`
   - Linear range: `E09S01T01-E09S01T06`
   - Story: `E09S01`, `e9s1`
   - Epic: `E09`, `e9`
   - All unprioritized: `all`, `*`

3. **Combined Operations:**
   - `UKW -u -p`: Bookkeeping + update priorities
   - `UKW -u -a E09`: Bookkeeping + assign priorities to Epic 9
   - `UKW -u -p -a all`: Full UKW (all operations)

4. **Efficient Defaults:**
   - `UKW` (no flags) = `UKW -u` (bookkeeping only)
   - Priority operations are opt-in (explicit flags required)

5. **Updated Documentation:**
   - UKW workflow documentation updated to reflect new flags and syntax
   - Command-line interface documentation
   - Use case examples and best practices

---

## Acceptance Criteria

- [x] **Criterion 1:** `UKW -u` runs bookkeeping only (sorting, no priority changes) ✅
- [x] **Criterion 2:** `UKW -p` updates priorities only (no sorting) ✅
- [x] **Criterion 3:** `UKW -a E09S01T01` assigns priority to single task ✅
- [x] **Criterion 4:** `UKW -a E09S01T01,E08S02T11` assigns priorities to multiple tasks ✅
- [x] **Criterion 5:** `UKW -a E09S01T01-E09S01T06` assigns priorities to range ✅
- [x] **Criterion 6:** `UKW -a E09S01` assigns priorities to story ✅
- [x] **Criterion 7:** `UKW -a E09` assigns priorities to epic ✅
- [x] **Criterion 8:** `UKW -a all` assigns priorities to all unprioritized tasks ✅
- [x] **Criterion 9:** Canonical format supported (`E09S01T01`) ✅
- [x] **Criterion 10:** Compact format supported (`E9S1T1`) ✅
- [x] **Criterion 11:** Case-insensitive input supported ✅
- [x] **Criterion 12:** Optional separators supported (`:`, `-`, none) ✅
- [x] **Criterion 13:** Range syntax supported ✅
- [x] **Criterion 14:** Multiple task syntax supported ✅
- [x] **Criterion 15:** `UKW -u -p` runs both bookkeeping and priority updates ✅
- [x] **Criterion 16:** `UKW -u -a E09` runs bookkeeping and assigns priorities to Epic 9 ✅
- [x] **Criterion 17:** `UKW -u -p -a all` runs full UKW (all operations) ✅
- [x] **Criterion 18:** `UKW` (no flags) runs bookkeeping only (efficient default) ✅
- [x] **Criterion 19:** Clear error messages for invalid syntax ✅ (via syntax parser)
- [x] **Criterion 20:** Documentation updated to reflect new default behavior ✅

---

## Approach

1. **Phase 1: Extract Sorting Logic**
   - Extract sorting logic into modular function
   - Make sorting part of bookkeeping operation (UC1)
   - Ensure sorting is lightweight and fast

2. **Phase 2: Extract Priority Operations**
   - Extract priority update logic into separate function (UC2)
   - Extract priority assignment logic into separate function (UC3)
   - Make priority operations modular and independent

3. **Phase 3: Implement Syntax Parser**
   - Create task ID parser (canonical and compact formats)
   - Create range parser (linear ranges)
   - Create multiple task parser (comma-separated lists)
   - Support case-insensitive input and optional separators

4. **Phase 4: Add Command-Line Interface**
   - Parse flags (`-u`, `-p`, `-a`)
   - Parse target specification (for `-a` flag)
   - Route to appropriate use case handlers
   - Support combined operations

5. **Phase 5: Integrate with Workflow**
   - Update UKW workflow YAML
   - Add conditional step execution based on flags
   - Maintain backward compatibility (default = bookkeeping only)

6. **Phase 6: Update Documentation**
   - Update UKW agent execution guide
   - Document new flags and syntax
   - Provide use case examples
   - Update default behavior documentation

---

## Dependencies

**Depends On:**
- UKW workflow infrastructure (E6:S06:T08)
- BR-033 fix (sorting logic) - can be done in parallel
- Kanban board structure
- Task priority system

**Blocks:**
- Workflow efficiency improvements
- User experience improvements
- Resource optimization

**Blocked By:**
- None (can start immediately, can work in parallel with BR-033)

**Parallel Development Candidacy:** Safe because this is an enhancement that adds new functionality without modifying core workflow logic. Can be developed in parallel with BR-033.

---

## Related Work

**Related BR/FR Links:**
- [FR-034: UKW Granular Control and Use Case Flags](../../../fr-br/FR-034-ukw-granular-control-and-use-case-flags.md)
- [BR-033: UKW Board Disorganization](../../../fr-br/BR-033-ukw-board-disorganization.md) (related bug report)

**Related Tasks:**
- [E6:S00:T33: UKW Board Disorganization](../../Epic-6/Story-000-br-repo/T33-ukw-board-disorganization.md) - Related bug fix
- [E2:S16:T03: Update Kanban Workflow (UKW)](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) - Perpetual task

**Related Stories:**
- [E5:S01: FR Repo](../Story-001-fr-repo.md) - Repository story
- [E6:S06: ADK Implementation Analysis and Package Management](../../Epic-6/Story-006-adk-implementation-analysis-and-package-management.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.5.1.34+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update `Last updated` field
- Update `Completed` field
- Update `Status` to `COMPLETE`
- Update `Version` to final version
- Update FR-034 with completion status
- Update `kboard.md` with completion status and version

---

## Notes

**SoP Compliance:**
This task was created from FR-034, which was extracted from a mixed-scope document (BR-033) following the Standard Operating Procedure for handling mixed BR/FR scope. The bug content (epic ordering disorganization) remains in BR-033. All priority-related functionality (assignment, updates, granular control) is documented here.

**Efficiency Rationale:**
Priority operations (UC2/UC3) require significant agentic intelligence and are computationally expensive. Running them on every UKW execution is wasteful when only bookkeeping is needed. This feature enables users to run only the operations they need, reducing unnecessary AI processing and improving response times.

**Syntax Philosophy:**
- **Flexibility:** Support multiple input formats for user convenience
- **Normalization:** Convert to canonical format internally
- **Validation:** Strict validation with clear error messages
- **Consistency:** Maintain consistent output format regardless of input format

**Implementation Strategy:**
- Start with bookkeeping operation (UC1) - lightweight, most frequent
- Add priority operations (UC2/UC3) - expensive, occasional
- Implement syntax parser - flexible, user-friendly
- Integrate with workflow - seamless, backward compatible

---

## Implementation Progress

### Phase 1: Syntax Parser Implementation (v0.5.1.34+1)

**Date:** 2026-01-22

**Completed:**
1. ✅ **Syntax Parser Created:** `ukw_syntax_parser.py` with full task targeting support
   - Single task parsing (canonical, compact, case-insensitive)
   - Multiple task parsing (comma-separated)
   - Range parsing (linear ranges)
   - Story parsing (all tasks in story)
   - Epic parsing (all tasks in epic)
   - "all" / "*" parsing (all unprioritized tasks)
   - Validation and error handling

2. ✅ **Command-Line Flag Support:** Updated `.cursorrules` UKW trigger section
   - Flag parsing (`-u`, `-p`, `-a`)
   - Conditional step execution based on flags
   - Default behavior: `UKW` = `UKW -u` (bookkeeping only)
   - Combined operations support

3. ✅ **Workflow Modularization:** Updated UKW execution guide
   - Step execution matrix based on flags
   - Bookkeeping operations (Steps 1-5, 7-9, skip Step 6 MoSCOW)
   - Priority update operations (Step 6 only)
   - Priority assignment operations (Step 6 only with target parsing)
   - Combined operations support

4. ✅ **Documentation Updates:**
   - Updated UKW agent execution guide with flag documentation
   - Updated `.cursorrules` UKW trigger section
   - Added use case examples and syntax documentation
   - Documented default behavior change

**Key Features:**
- **Efficient Default:** `UKW` (no flags) = bookkeeping only (lightweight, frequent)
- **Targeted Operations:** `-a <target>` enables precise priority assignment
- **Flexible Syntax:** Multiple input formats supported for user convenience
- **Conditional Execution:** Steps execute only when needed based on flags
- **Backward Compatible:** Existing UKW usage patterns still work (default = bookkeeping)

**Implementation Notes:**
- Syntax parser is framework-agnostic and reusable
- Flag parsing happens at agent level (not script level) since UKW is agent-driven
- MoSCOW prioritization deferred to `-p` or `-a` flags (expensive operations opt-in)
- Bookkeeping operations remain fast and lightweight (default behavior)

---

_This Task is part of Epic 5, Story 1: FR Repo. See [`Story-001-fr-repo.md`](../Story-001-fr-repo.md) for repository context._

