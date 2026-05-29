---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Task 008 – Update Kanban Docs to Txx Standard

**Task:** E2:S02:T08  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2025-12-03  
**Story:** Story 002 – PDCA Integration into Release Workflow

---

## Overview

Update all Kanban documentation throughout the repository to use the new Txx (2-digit) Task naming standard instead of Txxx (3-digit). This ensures consistency across all documentation and examples.

---

## Input

- Updated Kanban policy documents (from T007)
- Current Kanban documentation files
- Task file naming conventions
- Examples in documentation

---

## Deliverable

- All Kanban documentation updated to Txx format
- All examples updated to Txx format
- Task file naming conventions updated
- Story templates updated if needed
- Quick reference guides updated
- Migration guide created

---

## Approach

1. **Update Documentation Files:**
   - Search for all instances of Txxx format in documentation
   - Update to Txx format
   - Update examples: `E20:S07:T10` → `E20:S07:T10`
   - Update task references: `T001` → `T01`, `T010` → `T10`, etc.

2. **Update Task File Naming:**
   - Review task file naming convention
   - Update if needed: `T001-*.md` → `T01-*.md` format
   - Consider backward compatibility for existing files

3. **Update Templates:**
   - Update STORY_TEMPLATE.md if it references Task format
   - Update any other templates
   - Update example task references

4. **Update Quick References:**
   - Update FR_BR_INTAKE_QUICK_REFERENCE.md
   - Update any other quick reference guides
   - Update examples in guides

5. **Create Migration Guide:**
   - Document the change
   - Note backward compatibility
   - Provide examples of old vs new format
   - Document transition period if needed

---

## Acceptance Criteria

- [ ] All documentation files updated to Txx format
- [ ] All examples updated to Txx format
- [ ] Task file naming conventions updated
- [ ] Templates updated if needed
- [ ] Quick reference guides updated
- [ ] Migration guide created
- [ ] Consistency verified across all docs

---

## Related Tasks

- E2:S02:T07 – Implement Task naming change (prerequisite)

---

## References

- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **FR/BR Intake Guide:** `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`
- **Quick Reference:** `packages/frameworks/kanban/FR_BR_INTAKE_QUICK_REFERENCE.md`

---

## Notes

- Existing task files can keep their current names (backward compatible)
- New tasks should use Txx format
- Task IDs in commits and references should use Txx format going forward
- Consider a transition period where both formats are acceptable

