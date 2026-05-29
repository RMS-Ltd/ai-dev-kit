# Changelog v0.2.2.7+2

**Release Date:** 2025-12-03 16:10:00 UTC
**Epic:** Epic 2 - Workflow Management Framework
**Story:** Story 2 - PDCA Integration into Release Workflow
**Task:** Task 7 - Implement Task naming change (Txxx → Txx)
**Type:** 🧰 Tooling

## PLAN Phase

### Objectives
- Update all examples in Kanban framework to use Txx format
- Update templates to use Txx format
- Update RW execution guide examples
- Update any code/scripts that parse Task IDs
- Create migration guide

### Expected Outcomes
- All examples updated to Txx format
- Templates updated to Txx format
- RW guide examples updated
- Code/scripts updated if needed
- Migration guide created

### Verification Plan
- Review all updated files for consistency
- Verify examples use Txx format
- Verify templates use Txx format
- Check for any remaining Txxx references

## Summary
🧰 Tooling: Task 7 complete - Implemented Task naming change from Txxx to Txx format

## Changes

### Added
- Migration guide: `docs/architecture/standards-and-adrs/task-naming-migration-guide.md`

### Changed
- Updated Kanban templates to use Txx format:
  - `STORY_TEMPLATE.md`: T001 → T01, T002 → T02
  - `EPIC_TEMPLATE.md`: T001 → T01, T002 → T02
- Updated Kanban examples to use Txx format:
  - `Story-33-Example.md`: E4:S33:T001 → E4:S33:T01
  - `Epic-4-Example.md`: E4:S34:T001 → E4:S34:T01
  - `numbering-versioning-integration.md`: All examples updated
  - `README.md`: All examples updated
  - `FR_BR_INTAKE_AGENT_GUIDE.md`: T001 → T01
  - `FR_BR_INTAKE_GUIDE.md`: T001 → T01
- Updated RW documentation examples:
  - `release-workflow-agent-execution.md`: E4:S03:T002 → E4:S03:T02
  - `action-workflow-template.md`: E2:S02:T007 → E2:S02:T07
  - `release-workflow-reference.md`: E21S3T001 → E21S3T01
  - `versioning-strategy.md`: E20:S11:T014 → E20:S11:T14
- Updated Kanban guides:
  - `portfolio-kanban-alignment-playbook.md`: E19:S08:T001 → E19:S08:T01
- Updated policy examples:
  - `kanban-governance-policy.md`: E20:S11:T016 → E20:S11:T16, E4:S33:T001 → E4:S33:T01

## Related Tasks
- E2:S02:T07 – Implement Task naming change (Txxx → Txx)

## Technical Details
- Format change: `Exx:Sxx:Txxx` → `Exx:Sxx:Txx`
- Example change: `E20:S07:T010` → `E20:S07:T10`
- All templates updated to use Txx format
- All examples updated to use Txx format
- No scripts found that parse Task IDs with Txxx format
- Migration guide created with backward compatibility notes

## Migration Notes
- Existing tasks can keep their current format (backward compatible)
- New tasks should use Txx format
- Task file naming: `T01-*.md` instead of `T001-*.md`
- Version numbers unaffected (numeric Task component remains the same)

