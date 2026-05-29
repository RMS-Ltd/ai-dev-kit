# Release v0.4.11.1+1

**Release Date:** 2025-12-11 00:00:00 UTC

**Epic / Story / Task:** Epic 4, Story 11, Task 1
**Type:** 📋 Policy Update

## Summary

Updated all three Kanban governance policy documents to mandate 3-tier structure (Epic → Story → Task) and require discrete Task documents. This implements the first part of FR-016: Kanban Granularity & Discrete Task Docs.

## Changes

### Updated

- **Kanban Governance Policy (Canonical):** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
  - Added explicit requirement for 3-tier structure (Epic → Story → Task)
  - Mandated discrete Task documents (or clearly delimited sections using Task ID)
  - Defined required Task document fields:
    - Task ID (`E{epic}:S{story}:T{task}`)
    - Scope
    - Acceptance Criteria
    - Status
    - Version Anchor (for doc-init support, see FR-017)
    - Completion Date
    - Related BR/FR Links
    - Input
    - Deliverable
    - Dependencies
    - Blocker
    - Parallel Development Candidacy
  - Prohibited implicit/inline tasks (must be explicit at task tier)
  - Updated FR/BR → Task → Story → Epic flow to reference Task documents
  - Added validation requirements for Task doc presence

- **Kanban Governance Policy (Dev-Kit Local):** `docs/project-management/rituals/policy/kanban-governance-policy.md`
  - Added 3-tier structure requirement
  - Added Task document requirements (separate file or delimited section)
  - Added required Task document fields
  - Prohibited implicit/inline/bundled/undocumented tasks
  - Updated FR/BR rule to reference Task documents
  - Added validation requirements

- **Kanban Governance Policy (Numbering & Versioning Framework):** `packages/frameworks/numbering & versioning/kanban-governance-policy.md`
  - Added 3-tier structure requirement
  - Added Task document requirements
  - Added required Task document fields
  - Prohibited implicit/inline/bundled/undocumented tasks
  - Added validation requirements

## Related Work
- Epic: 4
- Story: 11
- Task: 1
- FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)
- E2:S09: Kanban Granularity & Discrete Task Docs (Workflow Management coordination)
- E4:S11:T02: Create Task Document Template and Update Story Template (next task)

## Notes

This release implements the policy foundation for FR-016. All three policy documents now consistently mandate:
- Explicit 3-tier structure (Epic → Story → Task)
- Discrete Task documents (or clearly delimited sections)
- Required Task document fields
- Prohibition of implicit/inline tasks
- Validation requirements for Task doc presence

The next task (T02) will create the Task document template and update the Story template to support these requirements.

