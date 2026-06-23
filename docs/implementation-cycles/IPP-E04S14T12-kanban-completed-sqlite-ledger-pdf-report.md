# IPP-E04S14T12 — SQLite kanban-completed ledger + UKW PDF report

**Host Task:** [E04:S14:T12](../kanban/epics/epic-04/story-14-kanban-framework-maintenance/T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md)  
**FR:** [FR-134](../kanban/fbu/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)

---

## 1. Specification

Replace `kanban-completed.md` with `.adk/kanban-completed.db` (PK on E:S:T). UKW ends with PDF export to `docs/kanban/kanban-completed.pdf`. Writes via `append_kanban_completed.py` only.

## 2. Test design

- Upsert idempotency
- Markdown import parser smoke
- PDF export produces valid `%PDF` header
- `validate_kanban_completed.py --strict` after export

## 3. Implementation plan

1. Transition task **TODO → IN PROGRESS**
2. Add `kanban_completed` module + CLIs + `rw-config` keys
3. Brownfield import + markdown redirect stub
4. UKW/RW agent doc hooks + greenfield sync
5. Reconcile task **→ COMPLETE**; RW release

## 4. Documentation

- FR-134, task doc, kanban governance cross-links
- Retire markdown skill path in `kanban-completed-update` skill

## 5. Acceptance mapping

Maps to FR-134 AC1–AC5 and task AC1–AC4.

## 6. Risks

- PDF layout minimal (stdlib); sufficient for v1 skim surface
- `intake-completed.md` out of scope

## 7. Verification

- `pytest tests/kanban/test_kanban_completed_ledger.py`
- `validate_kanban_completed.py --strict` with DB + PDF present
