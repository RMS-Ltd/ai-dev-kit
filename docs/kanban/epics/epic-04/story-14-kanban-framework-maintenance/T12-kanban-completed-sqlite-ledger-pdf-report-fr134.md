---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S14:T12 — SQLite kanban-completed ledger + UKW PDF report (FR-134)

**Task ID:** E04:S14:T12  
**Status:** TODO  
**Priority:** MEDIUM  
**Task Type:** Discrete delivery  
**Created:** 2026-06-15  
**Last updated:** 2026-06-15 (v0.4.14.12+1 — RW -k kanban init FR-134 / E04:S14:T12)  
**Version Anchor:** v0.4.14.12+1  
**Code:** E04S14T12

**Upstream:** [FR-134 — SQLite completed-task ledger with UKW-generated PDF report](../../../fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Replace **`kanban-completed.md`** as the completed-task ledger with **`.adk/kanban-completed.db`** (SQLite, committed). Provide deterministic upsert CLI for **UKW `-c`** / **RW Step 7**, brownfield import from legacy markdown, and **UKW-triggered PDF export** (`docs/kanban/kanban-completed.pdf`, overwritten each UKW run) as the human skim surface.

---

## Input

- [FR-134](../../../fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)
- Legacy ledger: [`kanban-completed.md`](../../../kanban-completed.md)
- Archival helpers: [`archive_completed.py`](../../../../../packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py)
- Precedent: [release-state SQLite mode](../../../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)
- Supersedes (format): [FR-049](../../../fr-br/FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) markdown-era ledger

**IPW planning artifact (when used):** Link `IPP-E04S14T12-*.md` here when created.

---

## Deliverable

1. SQLite schema + init/migrate scripts under `packages/frameworks/workflow-mgt/scripts/kanban/`
2. `append_kanban_completed.py` (upsert) + `export_kanban_completed_report.py` (`--pdf`)
3. Brownfield `import_kanban_completed_md.py`
4. UKW / RW agent contract updates (ledger CLI, PDF export at UKW end)
5. `rw-config.yaml` keys + greenfield-install mirror (FR-106)
6. Redirect stub replacing `kanban-completed.md` body as SoT
7. Tests: import parity, upsert idempotency, export smoke

---

## Acceptance Criteria

- [ ] **AC1:** FR-134 functional requirements F1–F8 satisfied.
- [ ] **AC2:** FR-134 acceptance criteria AC1–AC5 satisfied at release RW.
- [ ] **AC3:** No agent/skill path writes markdown ledger body post-cutover.
- [ ] **AC4:** UKW comprehensive + `UKW -c` regenerate PDF; documented in cheatsheet + UKW guide.

---

## References

- [FR-134](../../../fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)
- [FR-102](../../../fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [FR-109](../../../fr-br/FR-109-ukw-lean-active-board-contract.md)
- [T08 — UKW archive completed `-c`](T08-ukw-archive-completed-board-rows-fr102.md)
