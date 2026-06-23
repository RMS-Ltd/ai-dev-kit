# Changelog — v0.6.9.38+1

**Release Date:** 2026-06-17 15:22:52 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 38  
**SemVer:** v0.4.1197+1  
**Task:** E06:S09:T38 — Guided install orchestrator (FR-135)

---

## Summary

**Change implemented:** Guided install orchestrator v2 — install profile schema, phases A–F in `install_greenfield_path.py`, RW installer emission of sqlite/kanban_completed keys, UKW cursorrules bundle, Install RC extensions, ADK-I01.S04–S07, and INSTALL one-command happy path.

---

## Added

- `packages/frameworks/workflow-mgt/scripts/install_profile.py` — profile load/validate and interactive menus
- `packages/frameworks/workflow-mgt/scripts/install_cursorrules_bundle.py` — UKW + delivery stub append
- `packages/frameworks/workflow-mgt/config/install-profile.example.yaml`
- `packages/frameworks/workflow-mgt/cursorrules-delivery-trigger-section.md`
- `docs/implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md`
- `tests/workflow_mgt/test_install_profile.py`
- Install RC checks: `sqlite_kanban_completed`, `file_contains` UKW marker
- ADK-I01.S04–S07 error codes

## Changed

- `install_greenfield_path.py` — guided v2 path; phase summary replaces manual-steps banner
- `install_release_workflow.py` — emits `release_state_*`, `kanban_completed`, `install_trigger_bundle`
- `validate_install_rc.py` — new check types
- `INSTALL_IN_YOUR_PROJECT.md` — one-command profile install
- `greenfield-install/` mirror sync (FR-110)

## Related

- [FR-135](docs/kanban/fr-br/FR-135-guided-install-orchestrator-zero-manual-steps.md) · [IPP-E06S09T38](docs/implementation-cycles/IPP-E06S09T38-guided-install-orchestrator-fr135.md)
