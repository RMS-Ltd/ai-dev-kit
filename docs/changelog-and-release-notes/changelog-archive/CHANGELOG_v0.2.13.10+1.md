# Changelog v0.2.13.10+1

**Release Date:** 2026-06-05 07:38:22 UTC  
**Epic:** 2 | **Story:** 13 | **Task:** 10  
**SemVer:** v0.4.944+1

---

## Summary

E02:S13:T10 — **Kanban transform consolidation + `rw_config_loader` unification:** standardized canonical transform-entrypoint boundaries across RW/UKW/script paths and consolidated duplicated `rw-config.yaml` loader logic into a shared module with parity tests.

---

## Changed

### Workflow package (`packages/frameworks/workflow-mgt/`)

- Added shared loader module `scripts/rw_config_loader.py`
- Migrated workflow-mgt scripts/validators from local `load_rw_config` implementations to shared loader imports/wrappers
- Updated `update_kanban_docs.py` to use shared loader behavior and maintain canonical transform diagnostics expectations
- Added loader parity test coverage: `tests/test_rw_config_loader.py`

### Documentation / governance

- Added ADR: `docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md`
- Added KB boundary docs:
  - `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md`
  - `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md`
- Updated RW Step 7 execution guide cross-references to the new boundary docs

---

## Verification

- `pytest -q tests/test_rw_config_loader.py`: PASS
- `python packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py --test-category all`: PASS (26 passed, 0 failed)
- `python packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_state_icons.py --strict`: PASS
- `python packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py --strict`: PASS

---

## References

- [IPP-E02S13T10](../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md)
- [ADR-020](../../architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md)
- [T10 host task](../../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md)
