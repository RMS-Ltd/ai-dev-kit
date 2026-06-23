---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-04T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 18: UKW lean active board contract (FR-109)

**Task ID:** E04:S14:T09
**Historical Anchor:** E02:S16:T18  
**Status:** COMPLETE  
**Priority:** HIGH  
**Task Type:** Discrete delivery (UKW / kanban enforcement)  
**Created:** 2026-06-04  
**Last updated:** 2026-06-04 (RW **v0.2.16.18+1**)  
**Version Anchor:** v0.2.16.18+1
**Code:** E04S14T09

**Upstream:** [FR-109 — UKW lean active board contract](../../../fbu/FR-109-ukw-lean-active-board-contract.md)  
**Coordinates:** [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) (UKW perpetual); [E02:S16:T16](T16-ukw-archive-completed-board-rows-fr102.md) (`UKW -c`)

Publication Status: NOT_APPLICABLE

---

## Input

- [FR-109](../../../fbu/FR-109-ukw-lean-active-board-contract.md)
- UKW lean-board hygiene (2026-06-04): pruned `kboard.md`, ledger append
- Agent SoT: `kanban-governance-policy.md`, `update-kanban-workflow-agent-execution.md`, `.cursor/skills/ukw-sync`

---

## Deliverable

Ship **`validate_active_kanban_board.py`**, pre-commit + RW Gate 11, UKW dual-source parity checklist, and slash-command alignment so active boards cannot regress to terminal rows, journal lines, or legacy fbuboard sections.

---

## Acceptance criteria

- [x] **AC1:** Validator + pytest; blocks terminal MoSCOW rows, journal lines, archive footnotes, `## Board Statistics` / `## Usage Instructions` on fbuboard.
- [x] **AC2:** `.pre-commit-config.yaml` hook `validate-active-kanban-board`; `validate_release_readiness.py` Gate 11 (default gates 1–11).
- [x] **AC3:** `ukw-dual-source-parity.md` + `.claude/commands/ukw.md` lean Step 6 / 6.5 / BR-059 narrowing.
- [x] **AC4:** [FR-109](../../../fbu/FR-109-ukw-lean-active-board-contract.md) AC4–AC5 closed at `RW E04:S14:T09` (**v0.2.16.18+1**).

---

## References

- [FR-109](../../../fbu/FR-109-ukw-lean-active-board-contract.md)
- [ukw-dual-source-parity.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages%2Fframeworks%2Fworkflow-mgt%2Fdocs%2Fukw-dual-source-parity.md)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_active_kanban_board.py`
