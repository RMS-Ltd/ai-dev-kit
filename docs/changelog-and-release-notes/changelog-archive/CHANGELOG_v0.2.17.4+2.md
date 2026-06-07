# Changelog v0.2.17.4+2 — T04 COMPLETE (AC1/AC2 sqlite-mode RW)

**Release Date:** 2026-06-07 18:01:33 UTC  
**Internal Version:** v0.2.17.4+2  
**SemVer (task_touch):** v0.4.1045+2  
**Epic:** 2 | **Story:** 17 | **Task:** 4

---

## Summary

**Change implemented:** T04 **COMPLETE** — sqlite-mode RW (AC1: no legacy YAML writes), validator suite (AC2), cwd-first config root, RW guide. T05 parity seed. **49 pytest pass.**

---

## Added

- `tests/release_state/test_sqlite_mode_rw_ac.py` — AC1/AC2 integration
- `tests/rw_scenarios/test_t05_parity_seed.py` — RW-S01 sqlite parity seed
- `packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md`

## Changed

- `validate_semver_registry_injective.py` — sqlite backend via `load_semver_registry()`
- `validate_task_touch_release_contract.py` — staged DB check in sqlite mode
- `semver_converter.py` — `_rw_config_root()` cwd-first for worktrees
- `finalize_rw_semver_registry.py` — sqlite `registry_path` in payload
- T04 → COMPLETE; T05 on `kboard.md`; T04 ledger in `kanban-completed.md`

## Next

- T05 full scenario matrix parity replay on sqlite backend
