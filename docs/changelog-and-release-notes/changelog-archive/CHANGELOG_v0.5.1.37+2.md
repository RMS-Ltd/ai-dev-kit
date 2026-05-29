# Changelog v0.5.1.37+2

**Release Date:** 2026-02-12 11:31:55 UTC  
**Epic:** Epic 5 - Documentation Management and Maintenance (FR Repo)  
**Story:** Story 1 - FR Repo (PERPETUAL)  
**Task:** Task 37 - Kanban Policy Task Prioritisation and Queue/Stack  
**Build:** 2

---

## Summary

Documented the **doc-init / abstract space (`+0`) usage** more clearly in the dev-kit versioning policy and wired a quick reference into the Numbering & Versioning package implementation review story. This release clarifies how `+0` builds are used for documentation-only anchors (e.g., onboarding FR/BR + Task docs) and how functional work (`+1+`) builds on top of those anchors.

---

## Changes

### Versioning Policy – Doc-Init / Abstract Space Cheat Sheet

- **Dev Kit Versioning Policy (`docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`)**
  - Added a **“Doc-Init / Abstract Space Cheat Sheet”** section summarizing:
    - When to use `+0` (Epic/Story/Task doc creation, documentation-only commits).
    - Abstract space patterns:
      - Epic: `0.{EPIC}.0.0+0`
      - Story: `0.{EPIC}.{STORY}.0+0`
      - Task: `0.{EPIC}.{STORY}.{TASK}+0`
    - Relationship between doc-init (`+0`) and functional builds (`+1`, `+2`, …).
  - Clarified that:
    - **Onboarding FR/BR + Task doc only:** use `+0` (abstract space).
    - **First functional work for that Task:** use `+1`.
    - **Subsequent releases:** increment BUILD (`+2`, `+3`, …).

### Numbering & Versioning Package Implementation Review – Quick Reference

- **Story E3:S04 – Numbering & Versioning Package Implementation Review**  
  (`docs/project-management/kanban/epics/Epic-3/Story-004-numbering-versioning-package-implementation-review.md`)
  - Added a **“Doc-Init / Abstract Space Quick Reference”** section that:
    - Summarizes doc-init usage for this story.
    - Notes that abstract spaces are established via `+0` builds.
    - Clarifies that T01–T06 evaluate **functional behavior and integrations** built on those anchors, not the anchors themselves.

---

## References

- **Versioning Policy:** `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`  
- **Story E3:S04:** `docs/project-management/kanban/epics/Epic-3/Story-004-numbering-versioning-package-implementation-review.md`  
- **Task:** E5:S01:T37 – Kanban Policy Task Prioritisation and Queue/Stack (FR-037)

