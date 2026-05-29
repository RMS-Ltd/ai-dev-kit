# Release v0.4.11.2+1

**Release Date:** 2025-12-11 00:00:00 UTC

**Epic / Story / Task:** Epic 4, Story 11, Task 2
**Type:** 📋 Template Creation (Phase 1)

## Summary

Created Task document template and updated Story template to support discrete Task documents. This is Phase 1 of T02, establishing the foundational templates. Phase 2 will add examples for both Task document formats.

## Changes

### Added
- **Task Document Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
  - Includes all required fields from Kanban governance policy (T01)
  - Supports separate file format (recommended approach)
  - Comprehensive structure with all mandatory fields:
    - Task ID
    - Scope
    - Input
    - Deliverable
    - Acceptance Criteria
    - Approach
    - Dependencies (Depends On, Blocks, Blocked By, Parallel Development Candidacy)
    - Related Work (BR/FR Links, Related Tasks, Related Stories)
    - Version Anchor (forensic marker format)
    - Notes
    - Completion Summary
    - References
    - Next Actions

### Updated
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
  - Added "CRITICAL: Task Document Requirements" section
  - Documented two Task document formats:
    1. **Separate Task File (Recommended):** `Task-YYY-description.md` in Story directory
    2. **Delimited Section Within Story (Alternative):** Task content within Story doc using Task ID header
  - Added guidance on when to use each format
  - Added Task documentation requirements checklist
  - Added examples for both formats
  - Updated Task section to reference Task template

## Related Work
- Epic: 4
- Story: 11
- Task: 2
- Phase: 1 (Templates created)
- Next Phase: 2 (Examples to be created)
- FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)
- E4:S11:T01: Update Kanban Governance Policy (prerequisite)
- E2:S09: Kanban Granularity & Discrete Task Docs (Workflow Management coordination)

## Notes

This release establishes the foundational templates for discrete Task documents. The Task template includes all required fields mandated by the Kanban governance policy (T01). The Story template now clearly documents both supported formats and provides guidance on when to use each.

Phase 2 of T02 will create example Task documents in both formats to demonstrate proper usage.

