# Changelog v0.4.19.12+3

**Release Date:** 2026-06-05 01:31:09 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 12  
**SemVer:** v0.4.902+3  
**Summary:** Single-board Wave 3 — framework install templates + adopter migration

---

## Summary

`RW E04:S19:T12 --art` Wave 3: framework pack emits single-board defaults for greenfield installs — `kboard.md` with **Verification (V)** band scaffold, `fbuboard.md` redirect stub, brownfield migration guide, and deprecated `fbu_board` `rw-config` key documented.

---

## Changed

### Framework templates

- `templates/KANBAN_BOARD_TEMPLATE.md` — Verification (V) band (v2.1.0)
- `templates/KANBAN_BOARD_GUIDE_TEMPLATE.md` — V-band + single-board notes (v2.1.0)
- `templates/FBUBOARD_STUB_TEMPLATE.md` — new redirect stub for fresh installs

### Installer

- `install_kanban_framework.py` — `create_consumer_board_skeleton()` writes `fbuboard.md` stub alongside `kboard.md`

### Adopter docs

- `guides/single-board-migration-adopter-note.md` — brownfield migration checklist
- `INSTALL_IN_YOUR_PROJECT.md` — fresh install layout + dual-board migration pointer
- `rw-config-schema.md` — `kanban_board: kboard.md`; deprecated optional `fbu_board`
- `ADR-018` — Wave 3 compliance section

### Tests

- `tests/kanban/test_install_kanban_fresh_stub.py` — fresh install stub coverage

---

## Deferred

- Task **COMPLETE** pending user verification of single-board operator workflow (IPP step N)
