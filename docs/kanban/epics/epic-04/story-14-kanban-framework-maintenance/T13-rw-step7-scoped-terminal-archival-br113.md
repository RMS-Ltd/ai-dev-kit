---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S14:T13 — RW Step 7 scoped terminal archival (BR-113)

**Task ID:** E04:S14:T13  
**Status:** COMPLETE  
**Priority:** HIGH  
**Task Type:** Discrete delivery (RW Step 7 / kanban archival integration)  
**Created:** 2026-07-01  
**Last updated:** 2026-07-09 (v0.4.14.13+1 — MWF delivery)  
**Version Anchor:** v0.4.14.13+1  
**Code:** E04S14T13

**Upstream:** [BR-113 — RW Step 7 (`rw_step_7`) scoped terminal archival missing](../../../fbu/BR-113-rw-step7-scoped-terminal-archival-missing.md)  
**Source:** [GitHub issue #89](https://github.com/RMS-Ltd/ai-dev-kit/issues/89)  
**IPP:** [IPP-E04S14T13](../../../../implementation-cycles/IPP-E04S14T13-rw-step7-scoped-terminal-archival-br113.md)

Publication Status: NOT_APPLICABLE

---

## Summary

Close **residual archival debt** across prior kanban/RW programs: wire **scoped terminal archival** into RW Step 7 (`rw_step_7`) so a terminal released task is filed to the completed ledger and pruned from active `kboard.md` in the **same** RW run — without follow-on `UKW -c` and without whole-board reshuffle.

This task **does not introduce new policy**; it reconciles contradictions left open when predecessor work marked COMPLETE.

---

## Problem (consolidated)

| Prior work | Claimed outcome | Residual gap |
| ---------- | --------------- | ------------ |
| [FR-091](../../../fbu/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md) / [FR-092](../../../fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md) ([E02:S15:T07](../../epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md)) | RW Step 7 self-sufficient; no UKW dependency | Docs/validators; **no deterministic scoped archival** in RW path |
| [FR-102](../../../fbu/FR-102-ukw-archive-completed-board-rows.md) ([E04:S14:T08](T08-ukw-archive-completed-board-rows-fr102.md)) | `UKW -c` ledger-before-prune | Explicitly deferred RW Step 7; `update_kanban_docs.py` advisory-only |
| [BR-062](../../../fbu/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md) ([E02:S01:T11](../../epic-02/story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md)) | Prune COMPLETE rows from active MoSCOW | No ledger append; superseded by FR-102 UKW-only gate in code |
| [FR-134](../../../fbu/FR-134-kanban-completed-sqlite-ledger-pdf-report.md) ([E04:S14:T12](T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md)) | Ledger CLI for UKW `-c` **and** RW Step 7 | **FR-134-F6** not wired on RW release path |
| [FR-109](../../../fbu/FR-109-ukw-lean-active-board-contract.md) ([E04:S14:T09](T09-ukw-lean-active-board-contract-fr109.md)) | Lean active board via validators + `UKW -c` | RW scoped graduate-off-board not specified |
| [ADR-018](../../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) | Terminal rows → completed ledger | Adopter RW does not enforce |

**Reporter repro:** `starborn_legacy` — MWF `E01:S07:T10 delivery --art`; task doc `COMPLETE`; `kboard.md` row remained on active board with non-canonical `DONE (M)`; no completed-ledger entry.

---

## Input

- [BR-113](../../../fbu/BR-113-rw-step7-scoped-terminal-archival-missing.md)
- Helpers: [`archive_completed.py`](../../../../../packages/frameworks/workflow-mgt/scripts/kanban/archive_completed.py), [`append_kanban_completed.py`](../../../../../packages/frameworks/workflow-mgt/scripts/kanban/append_kanban_completed.py)
- RW guide: [`release-workflow-agent-execution.md`](../../../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md)
- UKW guide: [`update-kanban-workflow-agent-execution.md`](../../../../../packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- Code gate: `update_kanban_docs.py` FR-102 advisory block (lines ~1336–1343)

---

## Deliverables

1. **`scoped_archive_rw_release.py`** (or equivalent) — `--requested E:S:T` + `--internal-version`; scoped ledger upsert then kboard prune; reuse T08/T12 helpers.
2. **RW Step 7 contract** — `.cursorrules`, `release-workflow-agent-execution.md`: Part B scoped terminal archival **distinct from** `UKW -c` batch ([ADR-010](../../../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md)).
3. **FR-102 scope clarification** — batch `UKW -c` remains; RW Step 7 owns **released-task** archival only.
4. **Step 9 validator** — blocking: terminal released task absent from active `kboard.md`; present in ledger (`.adk/kanban-completed.db` and/or markdown per config).
5. **IDW / MWF guides** — align “board propagation” with scoped archive semantics ([FR-124](../../../fbu/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) chain inherits patched RW).
6. **Board row contract** — task-doc link + `✅ COMPLETE (M)` per [UXR-012](../../../fbu/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md).
7. **Tests** — scoped archival, skip rules (perpetual / WAITING / IN PROGRESS), validator gate; greenfield-install mirror ([FR-110](../../../fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)).

---

## Acceptance criteria

- [x] RW / MWF `--rw` on a terminal task removes that task from active `kboard.md` and files it to the completed ledger in the same run
- [x] Perpetual / `IN PROGRESS` / `⏳ WAITING` tasks are not auto-archived
- [x] Step 9 validator fails if terminal released task remains on active board
- [x] Agent guides and `.cursorrules` agree; FR-091 self-sufficiency + FR-102 batch path coexist without contradiction
- [x] FR-134-F6 RW integration closed with evidence
- [x] Adopter downstream update path documented (greenfield-install sync)

---

## Traceability (predecessor FBUs / tasks)

| ID | Role | Task |
| -- | ---- | ---- |
| **BR-113** | Intake / GitHub #89 | *(this task)* |
| **FR-091** | RW self-sufficient Step 7 (superseded by FR-092) | [E02:S15:T06](../../epic-02/story-15-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) → [E02:S15:T07](../../epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) |
| **FR-092** | Four-surface RW Step 7 meta | [E02:S15:T07](../../epic-02/story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) |
| **FR-038** | `rw_step_7` invocation context | Bucket-D1 predecessor (see FR-092) |
| **FR-102** | `UKW -c` batch archival | [E04:S14:T08](T08-ukw-archive-completed-board-rows-fr102.md) |
| **FR-134** | SQLite ledger + FR-134-F6 RW hook | [E04:S14:T12](T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md) |
| **FR-109** | Lean active board | [E04:S14:T09](T09-ukw-lean-active-board-contract-fr109.md) |
| **BR-062** | Active-row prune (partial) | [E02:S01:T11](../../epic-02/story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md) |
| **BR-072** | UKW completed-row removal | [E06:S01:T38](../../epic-06/story-01-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md) |
| **ADR-018** | Lean board architecture | — |
| **ADR-010** | `UKW -c` contract | — |
| **UXR-012** | Canonical state icons | — |

---

## Links

- [BR-113](../../../fbu/BR-113-rw-step7-scoped-terminal-archival-missing.md)
- [Story E04:S14](../story-14-kanban-framework-maintenance.md)
- [GitHub #89](https://github.com/RMS-Ltd/ai-dev-kit/issues/89)

---

## Notes

**IPW required before implementation** (P-IPW-GATE). Suggested: `IPW E04:S14:T13` in plan mode.

**Supersedes:** E02:S01:T32 (removed 2026-07-01 — duplicate delivery anchor; canonical home is E04:S14 under kanban archival lane).
