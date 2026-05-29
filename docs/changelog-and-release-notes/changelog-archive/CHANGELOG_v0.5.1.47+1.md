---
title: "Changelog: v0.5.1.47+1"
---

# Changelog: v0.5.1.47+1

**Release Date:** 2026-02-27 00:00:00 UTC  
**Epic:** Epic 5 – Documentation Management and Maintenance  
**Story:** Story 1 – FR Repo (PERPETUAL)  
**Task:** Task 47 – Install Logging for Framework Dependencies  
**Type:** 🔧 Framework Behaviour / 📚 Documentation

---

## Summary

🔧 Framework/Installer Hardening: E5:S01:T47 – Install Logging for Framework Dependencies – add repository anchors for FR-047 and harden Kanban fresh-install behaviour so new consumer projects get a clean canonical board/epic structure instead of ai-dev-kit’s live backlog.

---

## Changes

- Added **FR-047 – Install Logging for Framework Dependencies**:
  - `docs/project-management/kanban/fr-br/FR-047-install-logging-for-framework-dependencies.md`
- Added repository anchor task **E5:S01:T47** to the FR Repo story:
  - Updated `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo.md`.
  - Created task document: `docs/project-management/kanban/epics/Epic-5/Story-001-fr-repo/T47-install-logging-for-framework-dependencies.md`.
- Updated **Kanban installer behaviour** so fresh installs for consumer projects:
  - Use canonical templates to install core Epics from `packages/frameworks/kanban/templates/epics/`.
  - Generate a clean consumer `kanban-board.md` and `kanban-board-guide.md` from templates (no ai-dev-kit backlog).
  - Keep validation checks that detect copies of ai-dev-kit’s own Kanban (Epic 24 “Book Related Work”).
  - Files touched:
    - `packages/frameworks/kanban/scripts/install_kanban_framework.py`
    - `packages/frameworks/kanban/scripts/migrate_structure.py`
- Surfaced E5:S01:T45, T46, and T47 as critical install/versioning work on the main Kanban board:
  - Updated `docs/project-management/kanban/kanban-board.md` (MoSCOW **Must Have** section).

---

## Related Work

- **FR-047:** Install Logging for Framework Dependencies.  
- **BR-037:** Kanban Install Delivers Mixed Dev Kit Backlog and Templates into Consumer Boards.  
- **FR-045 / FR-046:** ADR-002 Task-Touch Derived Mapping and RW SemVer tagging when `task_touch` is enabled.  
- **E6:S07:** ai-dev-kit CLI Tool.

---

## Notes

- This release **changes installer behaviour** (Kanban fresh install) and adds repository anchors for future install logging work.  
- Actual CLI-level install logging for `ai-dev-kit install` will be implemented in follow-up tasks under Epic 6, using FR-047 / E5:S01:T47 as the canonical requirement.

