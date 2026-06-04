# Changelog — v0.5.1.46+7

**Release Date:** 2026-05-30 08:55:34 UTC  
**Epic:** 5 | **Story:** 1 | **Task:** 46  
**SemVer:** v0.4.823+7  
**Summary:** FR-046 closure wave — audit PASS, IPP, doc parity, T07 supersession, kanban four-surface sync

---

## Summary

Attempted resolution of FR-046 (Dual-Version Mode Requires Task-Touch SemVer in RW) via closure wave: requirement-to-evidence matrix, automated test re-run (38 tests), live dual-config tag smoke on commit `c01aa83`, FR-046 implementation guide dual-mandatory policy update, E2:S13:T07 superseded by E5:S01:T46.

---

## Added

- `docs/implementation-cycles/IPP-E5S01T46-fr046-closure-wave.md` — consolidated closure IPP (§1–§7) with audit matrix

## Changed

- **E5:S01:T46** — ✅ COMPLETE (v0.5.1.46+7); verification evidence + IPP wiring
- **FR-046** — IMPLEMENTED; R01–R05, AC1–AC4 checked; closure evidence linked
- **E2:S13:T07** — SUPERSEDED by E5:S01:T46
- `FR-046-implementation-guide.md` — dual mode requires task_touch; remove stale registry-default wording for dual repos
- `kboard.md` / `fbuboard.md` — T46/FR-046 closure rows
- `story-01-fr-repo.md` — T46 checklist COMPLETE

## Verification

- T1–T5 automated suites: all PASS (see IPP §7.3)
- Live smoke: `v0.4.822` + `v0.2.16.4+16` on same commit `c01aa83` (prior dual-config RW)

---

**Task:** [E5:S01:T46](docs/project-management/kanban/epics/epic-05/story-01-fr-repo/T46-rw-semver-tag-task-touch-mode.md)  
**FR:** [FR-046](docs/project-management/kanban/fr-br/FR-046-rw-semver-tag-task-touch-mode.md)  
**IPP:** [IPP-E5S01T46](docs/implementation-cycles/IPP-E5S01T46-fr046-closure-wave.md)
