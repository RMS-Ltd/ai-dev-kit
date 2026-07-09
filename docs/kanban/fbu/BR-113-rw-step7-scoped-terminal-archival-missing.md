---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-113: RW Step 7 (`rw_step_7`) scoped terminal archival missing

**Status:** FIXED (unverified — pending operator confirmation)  
**Priority:** HIGH  
**Severity:** HIGH  
**Created:** 2026-07-01  
**Last updated:** 2026-07-09 (v0.4.14.13+1 — E04:S14:T13 MWF delivery)  
**Version:** v0.4.14.13+1

**Implementing Task:** [E04:S14:T13](../epics/epic-04/story-14-kanban-framework-maintenance/T13-rw-step7-scoped-terminal-archival-br113.md)

**Source:** [GitHub issue #89](https://github.com/RMS-Ltd/ai-dev-kit/issues/89) — `starborn_legacy` repro via MWF `E01:S07:T10 delivery --art` (RW `v0.1.7.10+1`)

---

## Problem Statement

After **ADR-018** (lean active board + completed ledger) and **FR-038** (RW Step 7 = scoped `rw_step_7`), a **Release Workflow (RW)** or **MWF `delivery --rw`** run can mark a task `COMPLETE` in task/story/epic docs and stamp the `kboard.md` row in place, but **does not file the row to the completed archive or prune it from the active board**.

Operators reasonably expect RW to be the **terminal** workflow (especially via MWF `IDW --rw`). Requiring a follow-on **`UKW -c`** for per-task hygiene is a structural contract gap, not an agent one-off.

---

## Contract conflict (prior programs)

| Source | Expected behaviour for completed tasks |
|--------|----------------------------------------|
| Legacy RW (`RW_STEP5_KANBAN_BOARD_ISSUE`) | Remove from MoSCOW → move to COMPLETE section on board |
| **ADR-018** lean board | Active `kboard.md` = MoSCOW only; terminal rows → completed ledger |
| **UKW Step 6** (`update-kanban-workflow.yaml`) | `remove_completed_before_classify: true` + `write_completed_to_archive: true` |
| **RW Step 7 / FR-038** (`rw_step_7`) | Scoped doc/board stamp sync; **conservative MoSCOW**; **no whole-board reshuffle** |
| **FR-102** (`UKW -c`) | Batch ledger-before-prune; RW Step 7 **explicitly out of scope** at intake |
| **FR-091 / FR-092** | RW Step 7 **self-sufficient** — no UKW dependency for release correctness |

FR-038 narrowed RW Step 7 to avoid full UKW, but **no scoped replacement** was added for “graduate the released task off the active board.” FR-102 then codified UKW-only archival in `update_kanban_docs.py`, contradicting FR-091/FR-092 release-atomic intent.

---

## Traceability matrix (predecessor FBUs / tasks)

| FBU / ADR | Delivery task | Status | Residual owned by T13 |
| --------- | ------------- | ------ | ----------------------- |
| [FR-091](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md) | [E02:S15:T06](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) → [E02:S15:T07](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | SUPERSEDED / COMPLETE | AC4 “RW closure without UKW follow-up” — archival slice |
| [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) | [E02:S15:T07](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | COMPLETE | Four-surface stamps; **no scoped ledger+prune** |
| [FR-038](FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md) | Bucket-D1 via FR-092 | Historical | `rw_step_7` context only |
| [FR-102](FR-102-ukw-archive-completed-board-rows.md) | [E04:S14:T08](../epics/epic-04/story-14-kanban-framework-maintenance/T08-ukw-archive-completed-board-rows-fr102.md) | COMPLETE | Batch `UKW -c` only; scope note + RW carve-out |
| [FR-134](FR-134-kanban-completed-sqlite-ledger-pdf-report.md) | [E04:S14:T12](../epics/epic-04/story-14-kanban-framework-maintenance/T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md) | COMPLETE | **FR-134-F6** RW Step 7 ledger hook |
| [FR-109](FR-109-ukw-lean-active-board-contract.md) | [E04:S14:T09](../epics/epic-04/story-14-kanban-framework-maintenance/T09-ukw-lean-active-board-contract-fr109.md) | COMPLETE | Lean board validators; RW graduate path |
| [BR-062](BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md) | [E02:S01:T11](../epics/epic-02/story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md) | COMPLETE | Prune without ledger; FR-102 advisory override |
| [BR-072](BR-072-ukw-completed-tasks-not-removed-from-kboard.md) | [E06:S01:T38](../epics/epic-06/story-01-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md) | REOPENED history | UKW batch path (related) |
| [ADR-018](../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) | — | Active | Architecture target |
| [ADR-010](../../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md) | via FR-102 T08 | Active | Distinguish batch `-c` vs RW scoped |

**Canonical delivery (this BR):** [E04:S14:T13](../epics/epic-04/story-14-kanban-framework-maintenance/T13-rw-step7-scoped-terminal-archival-br113.md)

---

## Documentation mismatch

- **IDW agent guide** — board row propagation for a release is **RW Step 7** when shipping via `--rw`.
- **UKW invocation context** — `rw_step_7` — scoped to release E/S/T; **do not re-sort the entire board**; archival **forbidden** in `rw_step_7` per ADR-010 wording.
- **`.cursorrules` RW Step 7** — task/story/epic forensic markers; **no mention** of completed ledger or row pruning.

Operators and adopters reading IDW + MWF guides will assume RW finishes board propagation; FR-038 + ADR-010 forbid UKW Step 6 behaviour in `rw_step_7` without a scoped replacement.

---

## Validator gap

RW Step 9 runs `validate_board_stamp_diff`, `validate_kanban_state_icons`, `validate_release_readiness`, etc. None enforce:

- Terminal released task (per task doc) → **absent** from active `kboard.md`
- Same task → **present** in completed ledger ([FR-134](FR-134-kanban-completed-sqlite-ledger-pdf-report.md))

RW can exit **RW COMPLETE** with an internally inconsistent board.

---

## Additional friction (archive helpers)

- `archive_completed.py` resolves the first `epics/...md` link on a board row. Rows that link **[Story]** instead of **[Task]** fail the doc-status gate even when the task doc is `COMPLETE`.
- Non-canonical stamps (e.g. `DONE (M)` vs `✅ COMPLETE (M)`) bypass UKW Step 6 `completed_statuses` matching ([UXR-012](UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)).

---

## Expected behaviour (fix target)

When the **released** task doc is terminal (`COMPLETE` / resolved; explicit skip rules for `PARTIAL`, `⏳ WAITING`, perpetual tasks):

1. Upsert one row to the completed ledger (`.adk/kanban-completed.db` per FR-134; markdown redirect stub if configured)
2. Prune that row from active `kboard.md`
3. Use release version + immutable changelog timestamp on archive row

Reuse: `archive_completed.py`, `append_kanban_completed.py`. New: `scoped_archive_rw_release.py` (or equivalent).

---

## Acceptance criteria

- [x] RW / MWF `--rw` on a terminal task removes that task from active `kboard.md` and files it to the completed ledger in the same run
- [x] Perpetual / `IN PROGRESS` / `⏳ WAITING` tasks are not auto-archived (explicit skip rules)
- [x] Step 9 validator fails if terminal released task remains on active board
- [x] Agent guides and `.cursorrules` agree; FR-091/FR-092 + FR-102 coexist without contradiction
- [x] FR-134-F6 closed with evidence
- [x] Board row for released task links **task doc**; canonical `✅ COMPLETE (M)` per UXR-012
- [x] Adopter downstream update path documented (greenfield sync / installer)

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-07-01  
**Assigned to:** [E04:S14:T13](../epics/epic-04/story-14-kanban-framework-maintenance/T13-rw-step7-scoped-terminal-archival-br113.md) — RW Step 7 scoped terminal archival (residual closure; supersedes E02:S01:T32)
