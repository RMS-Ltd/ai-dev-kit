# Changelog v0.2.17.4+1 — T04 SQLite release-state backend (phase 1)

**Release Date:** 2026-06-07 17:48:56 UTC  
**Internal Version:** v0.2.17.4+1  
**SemVer (task_touch):** v0.4.1044+1  
**Epic:** 2 | **Story:** 17 | **Task:** 4

---

## Summary

**Change implemented:** SQLite release-state module — schema, import/export CLIs, dual-backend wiring in `semver_converter.py`, pytest coverage (45 pass). Default backend remains `legacy`.

---

## Added

- `packages/frameworks/workflow-mgt/scripts/release_state/` — schema, db, store, import/export
- `tests/release_state/` — round-trip, finalize-on-SQLite, production import (`@slow`)
- `tests/fixtures/semver-registry-mini.yaml`
- `rw-config.yaml` keys: `release_state_backend`, `release_state_db`
- `.gitignore`: `.adk/`

## Changed

- `semver_converter.py` — `load_semver_registry` / `save_semver_registry` SQLite path
- `tests/rw_scenarios/test_wave4_baseline.py` — RW-V04 SQLite benchmark; post-IPW scenario updates
- Kanban: T04 `--art` adoption; T03 AC2 partial

## Next

- AC1/AC2: full RW + validators in `release_state_backend: sqlite` mode
- T05 parity replay
