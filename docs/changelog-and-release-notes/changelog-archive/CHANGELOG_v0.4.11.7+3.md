# Changelog v0.4.11.7+3

**Version:** 0.4.11.7+3  
**Release Date:** 2026-06-05 03:39:03 UTC  
**Epic:** Epic 4 — Kanban Framework  
**Story:** Story 11 — Kanban Granularity & Discrete Task Docs  
**Task:** E04:S11:T07 — Migrate Embedded Tasks to Discrete Task Documents (FR-016)  
**SemVer:** v0.4.911+3

---

## Summary

IPW consolidated IPP for FR-016 embedded-to-discrete Task document migration (~784 tasks). Change implemented: phased hybrid migration plan, test design (T1–T12), ADR necessity matrix, and bidirectional task-doc wiring. Migration implementation remains pending.

---

## Added

### Planning artifacts

- **`IPP-E04S11T07-fr016-discrete-task-docs-migration.md`** — consolidated IPW package (§1–§7): requirements, specification, test design, phased implementation waves 0–5, documentation deliverables, housing, success criteria
- ADR necessity decision: **REQUIRED** — UPDATE `migration-plan-embedded-to-discrete-tasks.md` (operational architecture record)
- References folded retrospective `ICW-E4S11T07-specification.md` per dev-kit-ipw-ipp-vs-icw-artifacts matrix

### Task doc updates

- **`T07-planning-spec-tests-impl.md`** — Input/References wired to IPP; status `IN PROGRESS`; version anchor `v0.4.11.7+3`

---

## Changed

- Four-surface kanban reconciliation: task doc, FR-016, `kboard.md` row (E04:S11:T07 → IN PROGRESS + IPP link)
- Story 11 checklist: T07 status reflects planning release

---

## Notes

- Orphan archive changelogs `CHANGELOG_v0.4.11.7+0/+1/+2` exist without git tags; this release uses **BUILD +3** as first tagged anchor for T07 IPP delivery.
- Migration tooling (`extract_embedded_tasks.py`, etc.) not yet implemented — deferred to implementation waves per IPP §4.

---

## References

- [IPP-E04S11T07](IPP-E04S11T07-fr016-discrete-task-docs-migration.md)
- [FR-016](../../project-management/kanban/fr-br/FR-016-kanban-granularity-discrete-task-docs.md)
- [Migration plan](../../project-management/kanban/epics/epic-04/story-11-kanban-granularity-discrete-task-docs/migration-plan-embedded-to-discrete-tasks.md)
