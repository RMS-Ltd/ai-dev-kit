---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.4.18.2+1

**Release Date:** 2026-01-20 15:43:38 UTC  
**Epic:** E4 – Kanban Framework  
**Story:** E4:S18 – Kanban Board Info-Only Split  
**Task:** E4:S18:T02 – Upgrade Packaged Kanban Framework Board Split

---

## Summary

Upgraded the packaged Kanban framework to include the board split pattern (structured information only + guide document). The framework package now reflects the improved board structure implemented in the dev-kit.

---

## Changes

### Kanban Framework Package

- **Created `KANBAN_BOARD_GUIDE_TEMPLATE.md`** - New guide template containing all rules, explanations, and how-to content:
  - Overview and structure explanations
  - MoSCOW category definitions
  - Parent-child relationship documentation
  - "How to Add Work" section
  - Quick Reference section
  - Usage instructions (MoSCOW guidelines, chronological ordering, task entry format, story checklist format)

- **Updated `KANBAN_BOARD_TEMPLATE.md`** - Stripped to structured information only:
  - Removed Overview section (moved to guide template)
  - Removed MoSCOW category definitions (moved to guide template)
  - Removed parent-child relationship explanations (moved to guide template)
  - Removed italicized explanatory text under section headers (moved to guide template)
  - Removed "Usage Instructions" section (moved to guide template)
  - Removed "References" section (moved to guide template)
  - Kept only: MoSCOW task lists, Epic sections with status/priority/stories/links
  - Added brief header with link to guide template
  - Updated template version to 2.0.0

- **Updated package README** - Documented the board split pattern:
  - Added board structure section explaining the split pattern
  - Updated templates list to include both board and guide templates
  - Documented benefits and usage guidelines

---

## Related Work

- **E4:S18:T01:** Implement Kanban Board Info-Only Split (completed dev-kit implementation)
- **FR-036:** Kanban Board Info-Only Split

---

## Impact

- **Consistency:** Packaged framework now matches dev-kit implementation
- **Usability:** Framework consumers get the improved board structure
- **Maintainability:** Split pattern makes board easier to scan and maintain

---

## Notes

- Framework package templates now reflect the board split pattern
- Consumers upgrading will get both board and guide templates
- Pattern improves usability by reducing cognitive load when scanning the board
