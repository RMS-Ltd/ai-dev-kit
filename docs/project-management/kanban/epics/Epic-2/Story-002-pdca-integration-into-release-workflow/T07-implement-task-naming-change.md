---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Task 007 – Implement Task Naming Change (Txxx → Txx)

**Task:** E2:S02:T07  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2025-12-03  
**Story:** Story 002 – PDCA Integration into Release Workflow

---

## Overview

Implement the change to Kanban Task naming policy from 3-digit format (Txxx) to 2-digit format (Txx). This standardizes Task numbering to match the Story numbering format (Sxx) and simplifies the naming convention.

---

## Input

- Current Kanban policy documents specifying Txxx format
- Task naming policy: `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- Task naming policy: `packages/frameworks/numbering & versioning/kanban-governance-policy.md`
- Task naming policy: `docs/project-management/rituals/policy/kanban-governance-policy.md`

---

## Deliverable

- Updated Kanban policy documents with Txx format
- Updated all examples in policy documents
- Updated any code/scripts that parse Task IDs
- Updated any validators that check Task ID format
- Migration notes for existing tasks

---

## Approach

1. **Update Policy Documents:**
   - Update `packages/frameworks/kanban/policies/kanban-governance-policy.md`
   - Update `packages/frameworks/numbering & versioning/kanban-governance-policy.md`
   - Update `docs/project-management/rituals/policy/kanban-governance-policy.md`
   - Change format from `Exx:Sxx:Txxx` to `Exx:Sxx:Txx`
   - Update examples from `E20:S07:T10` to `E20:S07:T10`

2. **Update Code/Scripts:**
   - Find any scripts that parse Task IDs
   - Update regex patterns from `T\d{3}` to `T\d{2}`
   - Update any validators that check Task format
   - Test updated scripts

3. **Update Examples:**
   - Update all examples in documentation
   - Update template files if they reference Task format
   - Update any guides or quick references

4. **Document Migration:**
   - Note that existing tasks can keep their current format (backward compatible)
   - New tasks should use Txx format
   - Document transition period if needed

---

## Acceptance Criteria

- [ ] Policy documents updated to Txx format
- [ ] All examples updated to Txx format
- [ ] Code/scripts updated to parse Txx format
- [ ] Validators updated to check Txx format
- [ ] Migration notes documented
- [ ] Backward compatibility considered

---

## Related Tasks

- E2:S02:T08 – Update Kanban docs to Txx standard (follow-up task)

---

## References

- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Versioning Policy:** `packages/frameworks/numbering & versioning/kanban-governance-policy.md`
- **Dev-Kit Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`

