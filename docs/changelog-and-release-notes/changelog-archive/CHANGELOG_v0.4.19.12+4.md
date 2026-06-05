# Changelog v0.4.19.12+4

**Release Date:** 2026-06-05 01:42:57 UTC  
**Epic:** 4 | **Story:** 19 | **Task:** 12  
**SemVer:** v0.4.903+4  
**Summary:** Single-board Wave 4 closure — kanban-root legacy alias removal + T12 COMPLETE

---

## Summary

`RW E04:S19:T12 --art` Wave 4 closure: removed legacy `fr-br-uxr-*` alias files from kanban root, updated `kanban/README.md` and `fbu-structure.md` for single-board model, dropped alias paths from corpus-board validators/scripts, and reconciled **E04:S19:T12** / **UXR-020** to **COMPLETE**.

---

## Changed

### Kanban root hygiene

- **Deleted:** `fr-br-uxr-board.md`, `fr-br-uxr-structure.md`, `fr-br-uxr-open-taskless-queue.md`
- **Retained:** `fbuboard.md` (deprecated redirect stub), `kanban-board.md` (read-tolerance alias → `kboard.md`)
- **`kanban/README.md`** — single active board; documents alias removal
- **`fbu-structure.md`** — MoSCOW pointers → `kboard.md` + `fbu-open-taskless-queue.md`

### Workflow scripts

- `update_kanban_docs.py` — corpus boards no longer include `fr-br-uxr-board.md`
- `validate_release_readiness.py` — same
- `validate_kanban_governance_policy.py` — same
- `validate_rw_step7_completeness.py` — surface classifier simplified

### Kanban reconciliation

- **E04:S19:T12** — **COMPLETE** (AC10 closure)
- **UXR-020** — resolved through **v0.4.19.12+4**
- **`kanban-completed.md`** — T12 ledger entry updated to Wave 4
- **Story 19** checklist — T12 marked complete

### Prior uncommitted closure edits (included)

- `kboard.md`, `kanban-board-guide.md`, `kanban-completed.md`, `INSTALL_IN_YOUR_PROJECT.md`, `.claude/commands/ukw.md`
