# Changelog: v0.4.12.4+0

**Release Date:** 2026-01-05 18:26:00 UTC  
**Epic:** 4 - Kanban Framework  
**Story:** 12 - FR/BR/UXR Repository Stories (S00 Pattern)  
**Task:** 4 - Update Kanban Policy with PERPETUAL State Definition  
**Version:** v0.4.12.4+0

---

## Summary

Updated Kanban governance policy to define PERPETUAL state for repository stories. This formalizes the behavior of repository stories (E5:S00, E6:S00, E7:S00) as containers that never complete.

---

## Changes

### Kanban Governance Policy Updates

- **PERPETUAL State Definition:** Added section to Kanban governance policy
  - Location: `packages/frameworks/kanban/policies/kanban-governance-policy.md`
  - Defines PERPETUAL state characteristics:
    - Repository stories never complete
    - Excluded from completion analytics
    - Omitted from board displays (UX optimization)
    - Still tracked internally in Epic documents
    - Abstract space versioning (v0.5.0.0+0, v0.6.0.0+0, v0.7.0.0+0)

- **Repository Story Pattern (S00):** Documented S00 pattern
  - Epic 5, Story 0: "FR Repo" - canonical home for all Feature Requests
  - Epic 6, Story 0: "BR Repo" - canonical home for all Bug Reports
  - Epic 7, Story 0: "UXR Repo" - canonical home for all User Experience Research reports

- **Traceability Pattern:** Documented traceability mapping
  - FR-001 = E5:S00:T01 (abstract space: v0.5.0.1+0)
  - BR-001 = E6:S00:T01 (abstract space: v0.6.0.1+0)
  - UXR-001 = E7:S00:T01 (abstract space: v0.7.0.1+0)

- **Board Display Rules:** Documented board display omission rules
  - Epic Story Checklists in board views: S00 stories omitted
  - Epic documents: S00 stories included in internal Story Checklist
  - Rationale: Reduce clutter (100+ tasks in S00)

- **Task Status Field:** Updated to include PERPETUAL state
  - Status values: TODO, IN PROGRESS, COMPLETE, or IN PROGRESS (PERPETUAL)

### E4:S12 Story Document Updates

- **Task Checklist:** Marked T04 as ✅ COMPLETE (v0.4.12.4+0)
  - PERPETUAL state defined in Kanban policy

---

## Technical Details

- **Version Schema:** RC.EPIC.STORY.TASK+BUILD (0.4.12.4+0)
- **Task Attribution:** E4:S12:T04
- **Build Number:** +0 (abstract space - policy documentation)

---

## Related Work

- **E4:S12:** FR/BR/UXR Repository Stories (S00 Pattern)
- **FR-021:** FR/BR/UXR Repository Stories (S00 Pattern) - Feature request
- **E4:S12:T01-T03:** Repository stories created (E5:S00, E6:S00, E7:S00)

---

## Notes

This update formalizes the PERPETUAL state concept in the Kanban governance policy, providing clear guidance on how repository stories behave and how they should be displayed in board views.

