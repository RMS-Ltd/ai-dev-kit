# Changelog v0.4.19.12+2

**Release Date:** 2026-06-05 22:00:00 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 12  
**SemVer:** v0.4.900+2  
**Summary:** Single-board Wave 2 — tooling skips deprecated fbuboard

---

## Summary

`RW E04:S19:T12` Wave 2: workflow scripts and validators honour **ADR-018** — deprecated `fbuboard.md` redirect stub is skipped by UKW/RW board maintenance; three-surface Step 7 report contract; UKW Step 6.5 skip documented.

---

## Changed

### Tooling

- `stamp_authority.is_fbuboard_deprecated()` — detect ADR-018 redirect stub
- `validate_active_kanban_board.py` — skip MoSCOW scan on deprecated fbuboard
- `update_kanban_docs.py` — skip fbuboard transforms; three-surface report notes for deprecated stub
- `tests/test_validate_active_kanban_board.py` — deprecated stub test

### Workflow docs

- `.cursorrules` RW Step 7 — three-surface + fbuboard deprecated
- `.claude/commands/ukw.md` — Step 6.5 skip when fbuboard deprecated
- `FR-092` — ADR-018 supersession note

---

## Deferred

- Wave 3: framework install templates (IPP step 14–16)
