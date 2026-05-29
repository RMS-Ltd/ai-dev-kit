---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S18:T02 – Upgrade Packaged Kanban Framework Board Split

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E4 – Kanban Framework  
**Story:** E4:S18 – Kanban Board Info-Only Split  

---

## Purpose

Upgrade the packaged Kanban framework (`packages/frameworks/kanban/`) to include the board split pattern (structured information only + guide document). This ensures the framework package reflects the improved board structure implemented in the dev-kit.

---

## Inputs

- Completed board split implementation (E4:S18:T01)
- Current packaged Kanban board template (`packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`)
- Current packaged Kanban governance policy
- Dev-kit implementation (`kboard.md` and `kanban-board-guide.md`)

---

## Deliverables

1. **Updated `KANBAN_BOARD_TEMPLATE.md`** - Split into two templates:
   - `KANBAN_BOARD_TEMPLATE.md` - Structured information only (tasks, epics, status, links)
   - `KANBAN_BOARD_GUIDE_TEMPLATE.md` - Rules, explanations, and how-to content (NEW)

2. **Updated template documentation** - Document the split pattern:
   - When to use board vs guide
   - How to maintain both documents
   - Cross-reference pattern

3. **Updated Kanban governance policy** (if needed) - Document the board split pattern:
   - Purpose and benefits
   - Usage guidelines
   - Maintenance requirements

4. **Updated package README** (if needed) - Reference the new board structure:
   - Document the split pattern
   - Update examples to show both documents

---

## Approach

1. **Create `KANBAN_BOARD_GUIDE_TEMPLATE.md`:**
   - Extract explanatory content from current `KANBAN_BOARD_TEMPLATE.md`
   - Organize into logical sections (Overview, MoSCOW, Structure, How-to, Reference)
   - Add cross-reference to board template

2. **Update `KANBAN_BOARD_TEMPLATE.md`:**
   - Remove Overview section (move to guide template)
   - Remove MoSCOW category definitions (move to guide template)
   - Remove parent-child relationship explanations (move to guide template)
   - Remove italicized explanatory text under section headers (move to guide template)
   - Remove "How to Add Work" section (move to guide template)
   - Remove Quick Reference section (move to guide template)
   - Keep only: MoSCOW task lists, Epic sections with status/priority/stories/links
   - Add brief header with link to guide template

3. **Update template documentation:**
   - Document when to use board vs guide
   - Explain cross-reference pattern
   - Provide usage examples

4. **Update governance policy (if needed):**
   - Document the board split pattern
   - Explain purpose and benefits
   - Provide maintenance guidelines

5. **Update package README (if needed):**
   - Reference the new board structure
   - Update examples to show both documents
   - Document the split pattern

---

## Acceptance Criteria

- [ ] `KANBAN_BOARD_TEMPLATE.md` contains ONLY structured information (no explanatory text)
- [ ] `KANBAN_BOARD_GUIDE_TEMPLATE.md` contains all rules, explanations, and how-to content
- [ ] Cross-references between templates are clear
- [ ] Template documentation updated to reflect split pattern
- [ ] Governance policy documents the split (if needed)
- [ ] Package README updated (if needed)

---

## Related Work

- **E4:S18:T01:** Implement Kanban Board Info-Only Split (completed implementation)
- **FR-036:** Kanban Board Info-Only Split

---

## Notes

- This task upgrades the framework package to match the dev-kit implementation
- Ensures consistency between dev-kit and packaged framework
- Makes the improved board structure available to all consumers of the Kanban package
