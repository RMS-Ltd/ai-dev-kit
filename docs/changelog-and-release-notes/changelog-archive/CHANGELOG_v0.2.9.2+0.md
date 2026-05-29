# Changelog: v0.2.9.2+0

**Release Date:** 2025-12-11T13:30:00Z  
**Epic:** Epic 2 - Workflow Management Framework  
**Story:** Story 9 - Kanban Granularity & Discrete Task Docs (RW Integration)  
**Task:** Task 2 - Update RW Step 1 to Require Task Doc Presence

## Summary

Updated RW Step 1 (B. IDENTIFY COMPLETED TASK) to require Task document presence and validation. RW now enforces the Kanban policy requirement that every Task must have a discrete Task document.

## Changes

### RW Step 1 Enhanced
- ✅ Added B.1 section: LOCATE AND VALIDATE TASK DOCUMENT
- ✅ Implemented Task doc location logic:
  - Separate file format: `{kanban_root}/epics/Epic-{epic}/Story-{story}/Task-{task}-*.md` or `T{task}-*.md`
  - Delimited section format: Within Story file, header matching `### E{epic}:S{story}:T{task} –`
- ✅ Added validation for required fields:
  - Task ID (must match `E{epic}:S{story}:T{task}` format)
  - Scope, Acceptance Criteria, Status, Version Anchor, Input, Deliverable
- ✅ Added Task ID alignment verification:
  - Epic number must match `VERSION_EPIC`
  - Story number must match `VERSION_STORY`
  - Task number must match completed task number
- ✅ Added error handling:
  - RW stops if Task doc not found
  - RW stops if Task doc missing required fields
  - RW stops if Task ID alignment fails
  - Error messages provide guidance for creating/fixing Task docs

### Documentation Updated
- ✅ `release-workflow-agent-execution.md`: Added B.1 section with detailed Task doc location and validation procedures
- ✅ `cursorrules-rw-trigger-section.md`: Added B.1 section with Task doc requirements

## Related Work

- **Story:** E2:S09 - Kanban Granularity & Discrete Task Docs (RW Integration)
- **E4:S11:** Kanban Granularity & Discrete Task Docs (Kanban Framework) - COMPLETE ✅
- **FR-016:** Kanban Granularity & Discrete Task Docs
- **Kanban Governance Policy:** Requires discrete Task documents for all tasks

## Next Steps

- **E2:S09:T03:** Enhance Validators for Task Doc Presence and Alignment (now unblocked)
- **E2:S09:T04:** Update RW Agent Execution Guide
- **E2:S09:T05:** Documentation and Testing

