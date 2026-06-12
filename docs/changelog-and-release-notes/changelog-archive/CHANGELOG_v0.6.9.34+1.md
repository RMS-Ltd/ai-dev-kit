# Changelog — v0.6.9.34+1

**Release Date:** 2026-06-12 17:31:44 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 34  
**SemVer:** v0.4.1159+1  
**Task:** E06:S09:T34 — Kanban v3.5 packaged catalog (Small tier)

---

## Summary

Change implemented: ship **Kanban v3.5.0** packaged fresh-install catalog for the **Small tier (E01–E08)** — bootstrap/scaffold stories, perpetual + finite task docs on install, `_install_core_tasks` installer wiring, fingerprint validator, and greenfield mirror sync.

---

## Added

- **`kanban_v35_catalog.py`** — 15 fresh-install stories, 36 task docs; `V35_FRESH_TASK_STORIES`; `assert_v35_fingerprint()`.
- **Installer** — `migrate_structure._install_core_tasks()`; `install_canonical_epics_only` installs stories + tasks; v33/v34 shims delegate to v35.
- **Templates** — E01:S01 perpetual tasks (T01–T06); E01:S02/S03 versioning + test harness tasks; E04–E08:S01 bootstrap/scaffold stories; E08:S02 review & upkeep.
- **Tests** — `test_kanban_v33_fresh_install.py`, `test_kanban_v34_fresh_install.py`, `test_kanban_v35_fresh_install.py`.
- **Analysis** — v3.3/v3.4/v3.5 delta docs under `docs/knowledge/analysis/kanban-v2/`.

---

## Changed

- **E05:S01** — T04 AGENTS.md bootstrap / T05 docs tree (order swap).
- **E08** — S01 Code Quality Scaffold (CodeQL); S02 Review & upkeep (renumbered from legacy S01).
- **Legacy cleanup** — v1 FR/BR story templates moved to `templates/deprecated/`.
- **Greenfield mirror** — `greenfield-install/packages/frameworks/kanban/` synced.

---

## Related

- [12-v35-catalog-delta-bootstrap-stories.md](../../knowledge/analysis/kanban-v2/12-v35-catalog-delta-bootstrap-stories.md)
- Predecessor: E06:S09:T27 (v3.2)
