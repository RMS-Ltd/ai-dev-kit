---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S18:T01 – Implement Kanban Board Info-Only Split

**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Epic:** E4 – Kanban Framework  
**Story:** E4:S18 – Kanban Board Info-Only Split  

---

## Purpose

Split the Kanban board into two documents:
1. **`kboard.md`** - Structured information only (tasks, epics, status, links)
2. **`kanban-board-guide.md`** - Rules, explanations, how-to sections, and all non-informational content

**Goal:** Reduce cognitive load when skimming the board. Users should see structured data only, with all explanatory text moved to a sister document.

---

## Inputs

- Current `kboard.md` (457 lines with mixed content)
- FR-036 requirements
- Kanban board template
- Kanban governance policy

---

## Deliverables

1. **`kanban-board-guide.md`** (new) - Contains all explanatory content:
   - Overview and structure explanations
   - MoSCOW category definitions
   - Parent-child relationship documentation
   - "How to Add Work" section
   - Quick Reference section
   - All rules and explanatory content

2. **`kboard.md`** (updated) - Structured information only:
   - MoSCOW prioritized task lists (task entries only, no category explanations)
   - Epic sections (status, priority, stories, links)
   - No explanatory text, rules, or how-to content
   - No italicized descriptions under section headers

3. **Cross-references** - Links between documents

4. **Updated templates** - Kanban board template reflects split pattern

5. **Updated policy** - Governance policy documents the split

---

## Approach

1. **Create `kanban-board-guide.md`:**
   - Extract all explanatory content from `kboard.md`
   - Organize into logical sections (Overview, MoSCOW, Structure, How-to, Reference)
   - Add cross-reference to `kboard.md`

2. **Strip `kboard.md`:**
   - Remove Overview section (move to guide)
   - Remove MoSCOW category definitions (move to guide)
   - Remove parent-child relationship explanations (move to guide)
   - Remove italicized explanatory text under section headers (move to guide)
   - Remove "How to Add Work" section (move to guide)
   - Remove Quick Reference section (move to guide)
   - Keep only: MoSCOW task lists, Epic sections with status/priority/stories/links
   - Add brief header with link to guide doc

3. **Update references:**
   - Update `_index.md` to reference both documents
   - Update README.md if needed
   - Update any other references to board structure

4. **Update templates:**
   - Update `KANBAN_BOARD_TEMPLATE.md` to reflect split pattern
   - Document when to use board vs guide

5. **Update policy:**
   - Update Kanban governance policy to document the split
   - Explain purpose and usage pattern

---

## Acceptance Criteria

- [ ] `kboard.md` contains ONLY structured information (no explanatory text)
- [ ] `kanban-board-guide.md` contains all rules, explanations, and how-to content
- [ ] No explanatory text remains in `kboard.md`
- [ ] Cross-references between documents are clear and bidirectional
- [ ] `_index.md` updated to reference both documents
- [ ] Kanban board template updated to reflect split pattern
- [ ] Kanban governance policy documents the split

---

## Related Work

- **FR-036:** Kanban Board Info-Only Split
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View

---

## Notes

- This split improves board usability by reducing cognitive load
- Users can quickly scan structured information without filtering out explanatory text
- Rules/explanations remain accessible in the guide document when needed
- Pattern can be applied to other board views if beneficial
