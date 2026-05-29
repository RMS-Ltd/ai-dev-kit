# Release v0.4.11.3+1

**Release Date:** 2025-12-11 00:00:00 UTC

**Epic / Story / Task:** Epic 4, Story 11, Task 3
**Type:** 📋 Policy Update

## Summary

Updated versioning policy documents (dev-kit and framework) to require Task document presence and alignment before versioning. This completes the Kanban-related versioning policy updates for FR-016.

## Changes

### Updated

- **Dev-Kit Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`
  - **Section 4 (Mapping Kanban to Version Components):**
    - Added "CRITICAL: Task Document Requirements" subsection
    - Added Task document presence requirement
    - Added Task document → Version TASK component alignment requirement
    - Added Task document format options (separate file vs. delimited section)
    - Added required Task document fields list
    - Added validation requirements
  - **Section 6.1 (Task Transitions):**
    - Added Task document prerequisite (MUST create Task document before updating version file)
    - Added Task document → Version TASK component alignment requirement
    - Updated validation requirements to include Task document checks
    - Referenced FR-017 for doc-init (`+0`) support

- **Framework Versioning Policy:** `packages/frameworks/numbering & versioning/versioning-policy.md`
  - **TASK Section:**
    - Added CRITICAL notes about Task document requirements
    - Added Task document → Version TASK component alignment requirement
  - **New Section: "Task Document Requirements (Kanban Integration)":**
    - Added Task document prerequisites (presence, alignment, required fields)
    - Added Task transition rules requiring Task document
    - Added validation requirements
    - Added doc-init support reference (FR-017)
    - Added references to Kanban Governance Policy and Task Template

## Related Work
- Epic: 4
- Story: 11
- Task: 3
- FR-016: Kanban Granularity & Discrete Task Docs (3-Tier Structure)
- FR-017: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
- E4:S11:T01: Update Kanban Governance Policy (prerequisite)
- E4:S11:T02: Create Task Document Template (prerequisite)
- E2:S09: Kanban Granularity & Discrete Task Docs (Workflow Management coordination)
- E2:S09:T03: Enhance Validators for Task Doc Presence and Alignment (RW-related updates)

## Notes

This release completes the versioning policy updates for Task document requirements. Both the dev-kit local policy and the framework policy now consistently require:

1. Task document presence before versioning
2. Task document → Version TASK component alignment
3. Task document must include all required fields
4. Validation of Task document presence and alignment

The policies now align with the Kanban governance policy updates (T01) and support the Task template structure (T02). This enables the Release Workflow (E2:S09) to validate Task documents before versioning.

