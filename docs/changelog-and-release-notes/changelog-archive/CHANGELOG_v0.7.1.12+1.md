# Changelog v0.7.1.12+1

**Release Date:** 2026-06-08 12:31:16 UTC  
**Epic:** 7 | **Story:** 1 | **Task:** 12  
**SemVer:** v0.4.12+1

---

## Summary

Kanban-init (`RW -k`) release for **FR-118** intake: promote Kanban to `docs/kanban/` and retire `project-management/` shell. Filed FR + governing task **E07:S01:T12** with phased inventory-first execution plan (IPW before implementation).

---

## Change implemented

### E07:S01:T12 — FR-118 intake (kanban documentation setup)

- **FR-118:** [`FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md`](../project-management/kanban/fr-br/FR-118-promote-kanban-to-docs-kanban-retire-project-management-shell.md)
- **Task:** [`T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md`](../project-management/kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T12-promote-kanban-to-docs-kanban-retire-project-management-fr118.md)
- Kanban wiring: story checklist, `kboard.md` (Should Have), `intake-structure.md`
- **Note:** Trigger included `--dpz`; resolver rejected (cross-task adoption from `0.2.17.7+2`) — used `art_first_build` **+1** per BR-097.

---

## Next steps

1. `IPW E07:S01:T12` — inventory + phased implementation plan  
2. Implementation waves per FR-118 (rituals removal → `git mv` → rewire)
