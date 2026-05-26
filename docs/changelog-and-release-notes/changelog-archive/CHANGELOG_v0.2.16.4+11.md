# Changelog v0.2.16.4+11

**Release Date:** 2026-05-26 13:41:01 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 4  
**SemVer:** v0.4.803+11  
**Trigger:** `RW E2:S16:T04 --art` (UKW follow-up)

---

## Summary

UKW comprehensive kanban synchronization release under perpetual UKW anchor **E2:S16:T04** (`--art` adoption from `dev` after cross-epic block on `epic/6`).

---

## Change implemented

### Kanban synchronization (UKW scope)

- **kboard.md** — board metadata aligned; E2:S16:T04 last-run summary updated; retained dev **E2:S16:T12** (FR-100) MoSCOW row from merged `dev` head.
- **fbuboard.md** — board header version context refreshed.
- **kanban-completed.md** — archived **E6:S09:T04** (FR-098 Phase 0) and **E6:S09:T05** (FR-098 Phase 1, **v0.6.9.5+3** context from epic/6 branch work).
- **Story 009** — T02/T03 checklist drift corrected to **IN PROGRESS** (matching task docs and kboard).
- **E2:S16:T04 task doc** — UKW bookkeeping note.

### SemVer registry alignment

- Synced `semver-registry.yaml` mapping history for epic/6 releases (**800**–**802**) and reassigned this release to patch **803** (`0.4.803+11`) to avoid primary-tag collision with existing **v0.4.799** (FR-100).

---

## Version

- **Internal:** `0.2.16.4+11`
- **SemVer:** `0.4.803+11`
- **Primary tag:** `v0.4.803`
- **Internal traceability tag:** `v0.2.16.4+11`

---

## References

- Perpetual UKW task: `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`
- Prior epic/6 delivery: E6:S09:T05 (`v0.6.9.5+3` / SemVer `v0.4.802+3`)
