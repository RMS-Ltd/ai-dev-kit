# IPP-E04S14:T13 — RW Step 7 scoped terminal archival (BR-113)

**Host Task:** [E04:S14:T13](../kanban/epics/epic-04/story-14-kanban-framework-maintenance/T13-rw-step7-scoped-terminal-archival-br113.md)  
**BR:** [BR-113](../kanban/fbu/BR-113-rw-step7-scoped-terminal-archival-missing.md) · [GitHub #89](https://github.com/RMS-Ltd/ai-dev-kit/issues/89)

---

## 1. Specification

Wire **scoped terminal archival** into RW Step 7 (`rw_step_7`): when the **released** task doc is terminal, upsert the completed ledger (FR-134 SQLite) and prune that task's row from active `kboard.md` in the same RW run. Distinct from batch `UKW -c` (FR-102). Resolves FR-091/092 self-sufficiency vs FR-102 UKW-only code gate.

**Skip:** perpetual, `IN PROGRESS`, `⏳ WAITING` / verification-shipped without terminal doc status.

## 2. Test design

- `test_scoped_archive_rw_release.py`: terminal COMPLETE archives+prunes; perpetual/WAITING/IN PROGRESS skip; dry-run
- `test_validate_rw_scoped_terminal_archival.py`: blocking when terminal task still on kboard; pass when ledger+pruned
- Extend `test_update_kanban_docs.py` if RW board path calls scoped archival

## 3. Implementation plan

1. Transition **E04:S14:T13 TODO → IN PROGRESS**
2. Add `kanban/scoped_archive_rw_release.py` + `validation/validate_rw_scoped_terminal_archival.py`
3. Integrate into `update_kanban_docs.py` (replace FR-102 advisory-only for released E:S:T)
4. RW Step 9 gate + agent docs (`.cursorrules` excerpt, release/UKW/IDW guides)
5. `sync_greenfield_install.py` mirror
6. Reconcile task → **COMPLETE**; RW `E04:S14:T13 --art`

## 4. Documentation

- BR-113, FR-102 scope note, FR-134-F6 closure, task/story/kboard

## 5. Acceptance mapping

Maps to BR-113 and T13 acceptance criteria AC1–AC6.

## 6. Risks

- Cross-epic RW on `dev` requires `--art` (MWF preflight satisfied)
- Verification (V) band rows with SHIPPED doc status must not auto-archive

## 7. Verification

- `pytest packages/frameworks/workflow-mgt/scripts/kanban/test_scoped_archive_rw_release.py`
- `validate_rw_scoped_terminal_archival.py --strict --requested E04:S14:T13`
- Full RW Step 9 parity on release diff
