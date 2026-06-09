# Changelog v0.6.9.26+1

**Release Date:** 2026-06-09 12:07:51 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 26  
**SemVer:** v0.4.13+1

---

## Summary

E06:S09:T26 — **Change implemented:** Starborn Legacy ADK install program task intake (successor to closed T25/UXR-025); `validate_branch_context` task-doc discovery extended for lowercase `epic-{nn}` / descriptive `story-{nn}-*` paths (AC6).

---

## Changed

### Kanban / program

- New task doc **E06:S09:T26** — ongoing SBL install attempts, feedback loop, upstream backlog (AC1–AC5 open).
- **T25** addendum links **T26** as successor.
- Story 009 checklist, Epic 6, and `kboard.md` updated for T26 row.

### Validators

- `locate_task_doc_for_version()` in `validate_branch_context.py` — consumer kanban path discovery (`epic-06`, `story-09-*`, Task ID fallback).
- Regression tests in `test_validate_branch_context.py` (+2 cases).
- Greenfield-install mirror synced.

---

## Notes

- RW used **`--art`** adoption: `version.py` was E02:S16:T7; release anchors E06:S09:T26 @ BUILD **+1** (`art_first_build`).
- Attempt 3 planning and INSTALL/orchestrator reactions remain in scope for follow-on releases on T26.
