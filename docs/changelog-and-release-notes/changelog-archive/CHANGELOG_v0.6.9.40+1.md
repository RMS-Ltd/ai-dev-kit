# Release v0.6.9.40+1 — Greenfield orchestrator Install RC gaps (BR-112)

**Release Date:** 2026-06-24 17:14:59 UTC  
**Internal Version:** v0.6.9.40+1  
**SemVer:** v0.4.1224+1  
**Epic:** 6 | **Story:** 9 | **Task:** 40

---

## Summary

E06:S09:T40 — **Attempted fix (BR-112):** Install RC path resolution, checklist CLI alignment, venv-aware command checks, and legacy orchestrator wiring for conventional RW input, sqlite backend, and COMPREHENSION scaffold.

---

## Attempted Fixes

### Install RC path and orchestrator (BR-112 / E06:S09:T40)

- `validate_install_rc.py` — `WORKFLOW_ROOT` now resolves `workflow-mgt/` (not `scripts/`); command rows use `sys.executable` when checklist says `python`.
- `install-rc-checklist.yaml` — removed invalid `--project-root` from v4 template validator invocation.
- `install_greenfield_path.py` — auto-load `config/greenfield-rw-install-input.yaml`; patch `release_state_backend: sqlite` when `--init-sqlite`; scaffold `COMPREHENSION.md` on legacy arm-b before Install RC.
- Tests: `test_validate_install_rc.py`, `test_install_greenfield_path.py` regressions.
- Greenfield mirror synced.

---

## References

- [BR-112](../../kanban/fbu/BR-112-greenfield-orchestrator-install-rc-gaps.md)
- [IPP-E06S09T40](../../implementation-cycles/IPP-E06S09T40-greenfield-orchestrator-install-rc-gaps-br112.md)
