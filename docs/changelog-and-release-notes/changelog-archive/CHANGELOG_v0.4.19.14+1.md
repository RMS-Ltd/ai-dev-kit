# Changelog v0.4.19.14+1

**Release Date:** 2026-06-23 13:10:45 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 14  
**SemVer:** v0.4.1211+1

---

## Summary

E04:S19:T14 — **Change implemented:** Rename kanban intake directory `docs/kanban/fr-br/` → `docs/kanban/fbu/`; migrate `rw-config` key to `fbu_root`; framework read-compat, ADR-032, migration guide, greenfield sync, and strict directory validator (UXR-032).

---

## Added

- `docs/architecture/standards-and-adrs/ADR-032-fbu-intake-directory-convention.md`
- `docs/architecture/standards-and-adrs/fbu-directory-migration-guide.md`
- `docs/implementation-cycles/IPP-E04S19T14-fr-br-directory-rename-to-fbu.md`
- `packages/frameworks/kanban/scripts/rename_fbu_directory.py` — brownfield migration helper
- `packages/frameworks/workflow-mgt/scripts/validation/validate_fbu_directory.py` — post-migration guard
- `packages/frameworks/kanban/scripts/kanban_paths.py` — `resolve_fbu_root_path()` / `resolve_fbu_root_config_relative()`

## Changed

- Physical move: `docs/kanban/fr-br/` → `docs/kanban/fbu/` (~254 intake reports; filenames unchanged)
- `rw-config.yaml`: `fbu_root: docs/kanban/fbu`
- `install_release_workflow.py`: `detect_fbu_root()`, emits `fbu_root`; deprecated `detect_fr_br_root` alias
- Framework scripts, workflow YAML, intake guides, active-doc link sweep
- `greenfield-install/` mirror synced

## Kanban

- E04:S19:T14 → **COMPLETE** @ v0.4.19.14+1
- UXR-032 → **COMPLETE** @ v0.4.19.14+1
