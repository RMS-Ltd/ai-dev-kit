---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Kanban Board Info-Only Split

**Type:** Feature Request (FR)  
**Submitted:** 2026-01-20  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** ACCEPTED  
**GitHub Issue:** [TBD]  
**Version:** v0.4.18.1+0

---

## Summary

Split the Kanban board (`kboard.md`) into two documents:
1. **`kboard.md`** - Structured information only (tasks, epics, status, links)
2. **`kanban-board-guide.md`** - Rules, explanations, how-to sections, and all non-informational content

**Goal:** Reduce cognitive load when skimming the board. Users should see structured data only, with all explanatory text moved to a sister document.

---

## Description

### What is the Feature?

A document split that separates **structured information** from **explanatory content**:

**Current State:**
- `kboard.md` contains both structured data (tasks, epics, status) AND explanatory text (rules, how-to sections, MoSCOW category definitions, parent-child relationship explanations)

**Desired State:**
- `kboard.md` contains ONLY structured information:
  - MoSCOW prioritized task lists (M/S/C/O/W sections with task entries)
  - Epic sections with status, priority, stories, links
  - No explanatory text, rules, or how-to content

- `kanban-board-guide.md` (new sister document) contains:
  - Overview and structure explanations
  - MoSCOW category definitions
  - Parent-child relationship documentation
  - How-to sections (how to add work, etc.)
  - Quick reference links
  - All rules and explanatory content


### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Opening `kboard.md` shows pure structured data - tasks, epics, status, links
- No explanatory text interrupts the information flow
- All rules/explanations are in `kanban-board-guide.md` for reference when needed
- Board is optimized for quick scanning and information retrieval

**Current Behavior:**
- `kboard.md` mixes structured data with explanatory text
- Users must skip over rules/explanations to find information
- Cognitive effort required to filter out non-informational content
- Slower information retrieval due to noise

---

## Requirements

### Functional Requirements

- [ ] **FR-036:R01** - Create `kanban-board-guide.md` sister document
- [ ] **FR-036:R02** - Move all explanatory content from `kboard.md` to `kanban-board-guide.md`:
  - Overview section with structure explanations
  - MoSCOW category definitions
  - Parent-child relationship documentation
  - "How to Add Work" section
  - Quick Reference section
  - All italicized explanatory text under sections

- [ ] **FR-036:R03** - Strip `kboard.md` to structured information only:
  - Keep: MoSCOW task lists (task entries only, no category explanations)
  - Keep: Epic sections (status, priority, stories, links)
  - Remove: All explanatory text, rules, how-to sections
  - Remove: Italicized descriptions under section headers

- [ ] **FR-036:R04** - Add cross-reference between documents:
  - `kboard.md` links to `kanban-board-guide.md` for rules/explanations
  - `kanban-board-guide.md` links to `kboard.md` for structured data

- [ ] **FR-036:R05** - Update `_index.md` to reference both documents
- [ ] **FR-036:R06** - Update Kanban board template in framework package
- [ ] **FR-036:R07** - Update Kanban governance policy to document the split

### Non-Functional Requirements

- [ ] **FR-036:NF01** - **Usability:** Board is optimized for quick scanning (information only)
- [ ] **FR-036:NF02** - **Maintainability:** Rules/explanations centralized in guide doc
- [ ] **FR-036:NF03** - **Consistency:** Split pattern can be applied to other board views

---

## Scope Analysis

**Problem Domain:** Kanban Board Structure, Information Architecture  
**Affected Areas:**
- Kanban Framework
- Board templates
- Governance policy
- UKW workflow (may need to update both documents)

**Estimated Complexity:**
- Medium (1-2 days) - Document split, template updates, policy updates

---

## Use Cases

**Primary Use Case:**
User opens `kboard.md` to quickly scan active tasks and epic status. Sees only structured information (task IDs, descriptions, status, links) without explanatory text interrupting the flow. Can reference `kanban-board-guide.md` when needed for rules/explanations.

**Additional Use Cases:**
- Quick task lookup: User scans MoSCOW sections for specific task without reading category definitions
- Epic status check: User reviews epic sections for status without reading parent-child relationship explanations
- Reference lookup: User opens `kanban-board-guide.md` when they need to understand MoSCOW categories or how to add work

---

## Acceptance Criteria

- [ ] `kboard.md` contains ONLY structured information (tasks, epics, status, links)
- [ ] `kanban-board-guide.md` contains all rules, explanations, and how-to content
- [ ] No explanatory text remains in `kboard.md`
- [ ] Cross-references between documents are clear and bidirectional
- [ ] `_index.md` updated to reference both documents
- [ ] Kanban board template updated to reflect split pattern
- [ ] Kanban governance policy documents the split
- [ ] UKW workflow updated to maintain both documents (if needed)

---

## Dependencies

**Blocks:**
- Improved board usability (faster information retrieval)

**Blocked By:**
- None

**Related Work:**
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View (board structure foundation)
- **E2:S16:T03:** Update Kanban Workflow (UKW) - May need to update to maintain both documents

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-01-20  
**Intake By:** User

**Decision Flow Results:**
- [x] New Story Created: Epic 4 (Kanban Framework), Story 18 → Task 1

**Assigned To:**
- Epic: Epic 4 - Kanban Framework
- Story: E4:S18 - Kanban Board Info-Only Split
- Task: E4:S18:T01 - Implement Kanban Board Info-Only Split
- Version: `0.4.18.1+0`

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-4/Epic-4.md`](../epics/Epic-4/Epic-4.md)
- Story: [`docs/project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split.md`](../epics/Epic-4/Story-018-kanban-board-info-only-split.md)
- Task: [`docs/project-management/kanban/epics/Epic-4/Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md`](../epics/Epic-4/Story-018-kanban-board-info-only-split/T1-implement-kanban-board-info-only-split.md)

---

## Implementation Details

**Document Split:**
- Create `kanban-board-guide.md` with all explanatory content
- Strip `kboard.md` to structured information only
- Add cross-references between documents

**Key Files:**
- `docs/project-management/kanban/kboard.md` - Structured information only
- `docs/project-management/kanban/kanban-board-guide.md` - Rules and explanations (NEW)
- `docs/project-management/kanban/_index.md` - Updated to reference both
- `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md` - Updated template

**Content Migration:**
- Overview section → `kanban-board-guide.md`
- MoSCOW category definitions → `kanban-board-guide.md`
- Parent-child relationship explanations → `kanban-board-guide.md`
- "How to Add Work" section → `kanban-board-guide.md`
- Quick Reference section → `kanban-board-guide.md`
- Italicized explanatory text → `kanban-board-guide.md`

---

## Notes

- This split improves board usability by reducing cognitive load
- Users can quickly scan structured information without filtering out explanatory text
- Rules/explanations remain accessible in the guide document when needed
- Pattern can be applied to other board views if beneficial

---

## References

- **Current Board:** `docs/project-management/kanban/kboard.md`
- **Kanban Governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Board Template:** `packages/frameworks/kanban/templates/KANBAN_BOARD_TEMPLATE.md`
- **Related Story:** [`docs/project-management/kanban/epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md`](../epics/Epic-4/Story-013-kanban-board-moscow-prioritized-task-view.md)

---

_This Feature Request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
