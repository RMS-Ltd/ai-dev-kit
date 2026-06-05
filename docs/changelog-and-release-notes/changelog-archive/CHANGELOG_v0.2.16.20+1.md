# Changelog v0.2.16.20+1

**Release Date:** 2026-06-05 15:18:20 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 20  
**SemVer:** v0.4.977+1

---

## Summary

E02:S16:T20 (UXR-023) — Atomic intake release: kboard IPP segment regression UXR filed with implementing task, story checklist, and `kboard.md` row (`—No IPP—` on intake row). Documents UXR-010 contract drift on live board; implementation pending.

---

## Added

- `docs/project-management/kanban/fr-br/UXR-023-kboard-ipp-segment-regression.md` — UXR reporting missing IPP segment on active `kboard.md` rows
- `docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md` — implementing task (corpus restore + workflow hardening + validator)

---

## Changed

- `docs/project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations.md` — T20 checklist entry (IN PROGRESS)
- `docs/project-management/kanban/kboard.md` — E02:S16:T20 Could Have row with `—No IPP—` segment
- `docs/project-management/kanban/epics/epic-02/epic-02.md` — version marker

---

## Notes

- Regression scope: UXR-010 IPP segment (`—IPP—` / `—No IPP—`) absent on most live rows; T20 row demonstrates correct tail format
- Run `IPW E02:S16:T20` before implementation
