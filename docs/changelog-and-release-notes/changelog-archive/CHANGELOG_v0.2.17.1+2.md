# Changelog v0.2.17.1+2 — T01 scenario matrix and run-log schema

**Release Date:** 2026-06-07 17:22:50 UTC  
**Internal Version:** v0.2.17.1+2  
**SemVer (task_touch):** v0.4.1038+2  
**Epic:** 2 | **Story:** 17 | **Task:** 1

---

## Summary

**Change implemented:** Delivered **E02:S17:T01** scenario catalog — 28 RW/IPW scenarios (classes A–F), run-log schema, baseline log seeded with RW-G03/G04 from prior release.

---

## Added

- [`scenario-matrix.md`](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/scenario-matrix.md) — BUILD, SemVer, volume, gate, perpetual, IPW scenarios + execution waves
- [`run-log-schema.md`](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/run-log-schema.md) — parity run log columns and artifact manifest
- [`baseline-run-log.md`](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/baseline-run-log.md) — T02 handoff with seed rows

## Changed

- [T01 task doc](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/T01-rw-ipw-scenario-matrix-and-run-log-schema.md) — deliverable links
- [version.py](../../../src/ai_dev_kit/version.py) — BUILD +2
- [semver-registry.yaml](../../../semver-registry.yaml) — task_touch finalize

## Next

- **T02:** Wave 1 baseline runs (RW-B01, B02, B03, B06, S01, S02, G03, G04)
