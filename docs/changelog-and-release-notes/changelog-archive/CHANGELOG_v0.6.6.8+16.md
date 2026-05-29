# Changelog: v0.6.6.8+16

**Release Date:** 2026-01-05 23:10:00 UTC  
**Epic:** 6 - Framework Management  
**Story:** 6 - ADK Implementation Analysis and Package Management  
**Task:** 8 - Update Kanban Workflow (UKW) - Perpetual Task  
**Version:** v0.6.6.8+16

---

## Summary

Enhanced MoSCOW prioritization system by adding a new "Ongoing (O)" category for perpetual maintenance tasks. This addresses the issue where perpetual tasks (like UKW and CMW) were creating noise in the "Must Have" category and implying an overblown level of importance. The new category is positioned between "Could Have (C)" and "Won't Have (W)" and clearly communicates that these tasks are tracked but don't block other work.

---

## Added

### MoSCOW "Ongoing (O)" Category

- **New Priority Category:** Added "Ongoing (O) - Perpetual Tasks" to MoSCOW prioritization
- **Position:** Between "Could Have (C)" and "Won't Have (W)"
- **Purpose:** Track perpetual maintenance tasks without blocking other work
- **Examples:** UKW (Update Kanban Workflow), CMW (Changelog Maintenance Workflow)

### Updated MoSCOW Structure

**New Structure:** M/S/C/O/W
- **M (Must Have):** Critical tasks that must be completed
- **S (Should Have):** Important tasks that should be completed
- **C (Could Have):** Nice-to-have tasks that could be completed
- **O (Ongoing):** Perpetual maintenance tasks that never complete (tracked but don't block other work)
- **W (Won't Have):** Tasks deferred or not being done at this time

---

## Changed

### Kanban Board

- **Moved Perpetual Tasks:** E6:S06:T08 (UKW) and E6:S06:T12 (CMW) moved from "Must Have" to "Ongoing"
- **Updated Section Description:** Added explanation of all MoSCOW categories including "Ongoing"
- **Clear Separation:** Perpetual tasks now clearly separated from completable work

### Framework Policy Documentation

- **Framework Policy** (`packages/frameworks/kanban/policies/kanban-governance-policy.md`)
  - Added "Ongoing (O)" as 4th category with full documentation
  - Explained that perpetual tasks are tracked but don't block other work

- **Project Policy** (`docs/project-management/rituals/policy/kanban-governance-policy.md`)
  - Added "Ongoing (O)" category with same description

- **Board Template** (`packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`)
  - Added "Ongoing (O)" section in template structure
  - Updated priority guidelines to include new category

- **UKW Documentation** (`packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`)
  - Updated MoSCOW classification guidance to include "Ongoing (O)"

- **Maintenance Framework Docs:**
  - `docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md`
  - `docs/architecture/standards-and-adrs/maintenance-kanban-integration.md`
  - Both updated to include "Ongoing (O)" category

- **Example File** (`packages/frameworks/kanban/examples/Epic-4-Example.md`)
  - Updated MoSCOW legend to include "ONGOING" category

---

## Technical Details

### Problem Solved

**Issue:** Perpetual tasks under "Must Have" created noise and implied overblown importance:
- Perpetual tasks (UKW, CMW) were in "Must Have" category
- This suggested they should be prioritized over "Should Have" tasks
- Created confusion about whether to focus on infinite maintenance rounds vs. completable work
- Implied perpetual tasks block other work

**Solution:** New "Ongoing (O)" category:
- Positioned before "Won't Have" (more active than deferred work)
- Clearly communicates perpetual maintenance nature
- Separates ongoing work from completable priorities
- Preserves visibility without inflating importance

### Benefits

1. **Reduced Noise:** Perpetual tasks no longer crowd "Must Have" category
2. **Clear Separation:** Ongoing maintenance clearly distinguished from completable work
3. **Better Prioritization:** "Must Have" and "Should Have" focus on completable work
4. **Prevents Confusion:** No implication that maintenance should block feature work
5. **Elegant Solution:** Fits naturally into MoSCOW structure (M/S/C/O/W)

---

## Files Changed

### Modified Files

- `docs/project-management/kanban/kanban-board.md` - Added "Ongoing (O)" section, moved perpetual tasks
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Added "Ongoing (O)" category
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Added "Ongoing (O)" category
- `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` - Added "Ongoing (O)" section and guidelines
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md` - Updated classification guidance
- `docs/architecture/standards-and-adrs/maintenance-task-prioritization-framework.md` - Added "Ongoing (O)" to classification
- `docs/architecture/standards-and-adrs/maintenance-kanban-integration.md` - Added "Ongoing (O)" to sections list
- `packages/frameworks/kanban/examples/Epic-4-Example.md` - Updated MoSCOW legend
- `src/fynd_deals/version.py` - Updated to v0.6.6.8+16

---

## Related Work

- **Epic:** 6 - Framework Management
- **Story:** E6:S06 - ADK Implementation Analysis and Package Management
- **Task:** E6:S06:T08 - Update Kanban Workflow (UKW) - Perpetual Task
- **Related:** E6:S06:T12 - Changelog Maintenance Workflow (CMW) - Perpetual Task

---

## Notes

This enhancement improves the clarity and usability of the MoSCOW prioritization system by properly categorizing perpetual maintenance tasks. The "Ongoing (O)" category provides a clean, elegant solution that maintains visibility of maintenance work while preventing it from interfering with prioritization of completable features.

---

**Generated by:** Release Workflow (RW)  
**Workflow Version:** 1.0.0

