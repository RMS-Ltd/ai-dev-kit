# Changelog — v0.2.16.18+1

**Release Date:** 2026-06-04 22:15:00 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 18  
**SemVer:** v0.4.880+1  
**Summary:** FR-109 lean active board contract — validator, Gate 11, UKW parity

---

## Summary

Change implemented: **E02:S16:T18** — enforce lean **`kboard.md`** / **`fbuboard.md`** MoSCOW (live work only) via **`validate_active_kanban_board.py`**, pre-commit hook, RW Release Readiness **Gate 11**, UKW dual-source parity doc, and aligned agent SoT. Lean board prune from UKW hygiene wave included.

---

## Added

- **`validate_active_kanban_board.py`** — blocks terminal MoSCOW rows, journal lines, archive footnotes, legacy fbuboard sections
- **`tests/test_validate_active_kanban_board.py`**
- **[FR-109](../../project-management/kanban/fr-br/FR-109-ukw-lean-active-board-contract.md)** and **[E02:S16:T18](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md)**
- **`ukw-dual-source-parity.md`** — maintainer checklist (FR-109 / BR-059 narrowing)

---

## Changed

- **`.pre-commit-config.yaml`** — `validate-active-kanban-board` hook
- **`validate_release_readiness.py`** — Gate 11 (blocking); default gates 1–11; Gate 10 wired in runner
- **`.cursorrules`**, **`.claude/commands/ukw.md`**, governance policy, VWMP guides — lean contract + validators
- **`kboard.md`** / **`fbuboard.md`** — lean active MoSCOW (~55 / ~67 lines); contract headers
- **`kanban-completed.md`** / **`fbu-completed.md`** — archived **E06:S09:T10**, **E02:S16:T02**, **BR-081**

---

## RW Step 7 — four-surface reconciliation

| Surface | Action |
| ------- | ------ |
| Task **E02:S16:T18** | Version **v0.2.16.18+1**; IN PROGRESS → release marker |
| **FR-109** | IN PROGRESS; AC1–AC3 satisfied at release |
| `kboard.md` | Lean live rows; **E06:S09:T16** Should Have |
| `fbuboard.md` | Open FBU rows only; no statistics boilerplate |
