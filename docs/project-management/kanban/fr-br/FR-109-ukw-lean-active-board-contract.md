---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-109: UKW lean active board contract and enforcement

**Type:** Feature Request (FR)  
**ID:** FR-109  
**Submitted:** 2026-06-04  
**Submitted By:** Maintainer (UKW lean-board hygiene follow-up)  
**Priority:** HIGH  
**Severity:** MEDIUM  
**Status:** IMPLEMENTED (pending verification)  

**Implementing Task:** [E02:S16:T18](../epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md)

---

## Summary

Codify and enforce that **`kboard.md`** and **`kboard.md`** list **live work only** in MoSCOW sections. Terminal tasks/FBUs, journal lines, archive footnotes, and legacy fbuboard boilerplate belong in **`kanban-completed.md`** / **`intake-completed.md`** or task/FR docs — not on active boards.

---

## Problem Statement

UKW **BR-059** coverage and bidirectional FBU mirroring inflated active boards (~185 / ~273 lines) with **journal lines**, **archive footnotes**, and **terminal rows** left on active MoSCOW. An over-aggressive “lean” pass (2026-06-04) also removed ~37 legitimate **Could Have** `TODO`/`OPEN` backlog rows — corrected by restoring live C-band rows from `9b4765f` while keeping bloat removed. **`UKW -c`** and validators target **terminal + prose**, not the filed C-band queue.

---

## Proposed solution

1. **Policy + agent SoT** — Active board contract in kanban governance, UKW execution guide, `ukw-sync` skill, board guide headers (delivered in UKW hygiene wave).
2. **Validator** — `validate_active_kanban_board.py` (strict): terminal MoSCOW statuses, journal lines, archive footnotes, forbidden fbuboard sections.
3. **Enforcement** — Pre-commit on `kboard.md`; RW Step 9 **Release Readiness Gate 11** (blocking); UKW Step 6.5 optional strict run after prune.

---

## Acceptance criteria

- [x] **AC1:** Policy and UKW agent docs describe lean contract and narrowed BR-059 (no bulk TODO mirror on active board).  
- [x] **AC2:** `validate_active_kanban_board.py` with pytest coverage.
- [x] **AC3:** Pre-commit hook and Release Readiness Gate 11 wired.
- [x] **AC4:** Dual-source parity doc + `.claude/commands/ukw.md` aligned with `.cursorrules` UKW Step 6 lean rules.
- [x] **AC5:** Forensic release via `RW E02:S16:T18` (**v0.2.16.18+1**) with four-surface Step 7 reconciliation.

---

## References

- [FR-102](FR-102-ukw-archive-completed-board-rows.md) (`UKW -c`)
- [BR-059](BR-059-ukw-moscow-incomplete-story-task-coverage.md)
- [FR-076](FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [kanban-board-guide.md](../kanban-board-guide.md)
