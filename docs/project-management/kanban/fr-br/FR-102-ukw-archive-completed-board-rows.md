---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-102: UKW archive-completed use case (`-c`) — kboard + fbuboard → completed ledgers

**Type:** Feature Request (FR)  
**ID:** FR-102  
**Submitted:** 2026-05-30  
**Submitted By:** User (FR intake)  
**Priority:** HIGH  
**Status:** ACCEPTED  
**Version:** v0.2.16.16+1 (Internal) | v0.4.838+1 (SemVer)  
**GitHub Issue:** [TBD]

**Implementing Task:** [E02:S16:T16](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md)

---

## Summary

Add a dedicated **UKW** sub-workflow, invoked as **`UKW -c`** (archive completed), that removes **COMPLETE** (and equivalent terminal) rows from active **MoSCOW** sections on **`kboard.md`** and **`fbuboard.md`** only **after** appending canonical entries to **`kanban-completed.md`** and **`fbu-completed.md`** respectively — without running full bookkeeping, gap discovery, or reprioritization.

---

## Problem statement

Active boards still carry rows whose **source-of-truth** status is terminal (for example task docs marked **COMPLETE**, or FR/BR/UXR docs **COMPLETE** / **IMPLEMENTED** / **RESOLVED**), while the same items already have closure evidence in version anchors or release notes. Examples on **`kboard.md`** today include **E02:S16:T15** and **E02:S16:T06** in **Should Have** despite **COMPLETE** task status.

**Current gaps:**

| Area | Today | Gap |
| ---- | ----- | --- |
| **kboard** | Comprehensive UKW and RW Step 7 may reconcile status text on rows | No **lightweight, explicit** operator command whose **only** job is “archive completes → remove from active MoSCOW” |
| **fbuboard** | [FR-076](FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) stale-row **prune** | Prune can drop active rows without a mandated **`fbu-completed.md`** append + recent-dashboard update in the same run |
| **Completed ledgers** | [`kanban-completed.md`](../kanban-completed.md), [`fbu-completed.md`](../fbu-completed.md) | Archival must use **Documentation Agent** skills (`kanban_completed_update`, `fr_br_uxr_completed_update`) — not delete-only hygiene |
| **Historical fix** | [E06:S06:T42](../epics/Epic-6/Story-006-feature-requests/T42-fix-ukw-agent-board-cleanup-failure.md) (BR-042) | Addressed general cleanup; did not define a **standalone UKW flag** or dual-board contract |

Operators need a **fast, safe, repeatable** UKW use case: “clean the boards” means **move** completed work to the completed ledgers, not silent deletion.

---

## Proposed solution

### Invocation

| Command | Meaning |
| ------- | ------- |
| **`UKW -c`** / **`ukw -c`** | **Archive completed** — dual-board archival sub-workflow only |

**Constraints (align with [FR-085](FR-085-ukw-optional-reprioritization-rp-flag.md) / [ADR-009](../../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) pattern):**

- **Standalone only** — do not combine `-c` with `-u`, `-p`, `-a`, or `--rp`.
- **Does not** run UKW Step 2.5 (gap discovery), MoSCOW reprioritization, or story/epic narrative synthesis unless a row’s removal exposes a blocking inconsistency (document in run summary).
- Typical handoff: **`UKW -c`** then **`RW`** on perpetual UKW task (**E02:S16:T04**) or the last task touched by archival evidence.

### kboard (`kanban-completed.md`)

For each active MoSCOW row on **`kboard.md`**:

1. Resolve linked **task document** (or infer from row token).
2. If task status is **COMPLETE** (and not perpetual / not explicitly “keep on board” — see exceptions):
   - Append or update via **`kanban_completed_update`** with **version anchor**, **ISO 8601** completion timestamp (from task doc / last RW — not fabricated batch UTC per [FR-097](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)).
   - Remove row from active MoSCOW (preserve sort order for remaining rows).
3. Emit audit lines: `archived`, `skipped (reason)`, `already in ledger`.

### fbuboard (`fbu-completed.md`)

For each active MoSCOW row on **`fbuboard.md`**:

1. Resolve linked **FR / BR / UXR** doc.
2. If source status is terminal (**COMPLETE**, **COMPLETED**, **IMPLEMENTED**, **FIXED**, **RESOLVED**) with same **unresolved-verification** exceptions as FR-076:
   - Append or update via **`fr_br_uxr_completed_update`**.
   - Remove from active MoSCOW.
3. Keep **bidirectional wiring**: if kboard row removed for a task linked to an FBU, ensure fbuboard row is handled in the same run (and vice versa).

### Agent / package deliverables

- **`.cursorrules`** / **`update-kanban-workflow-agent-execution.md`** — step matrix row for `-c`.
- **`docs/guides/workflow-initiation-cheatsheet.md`** — flag table + decision tree row (“I want to clear completed rows from the boards”).
- **UKW YAML** (if applicable) — optional sub-workflow id `archive_completed`.
- **Skills:** extend or document **`ukw-sync`** / **`board_cleanup`** coordination with completed-update skills (no duplicate ledger formats).

---

## Requirements

### Functional

- [ ] **FR-102-F1:** `UKW -c` runs archive-completed sub-workflow only when `-c` is present.
- [ ] **FR-102-F2:** Every archived **task** row produces a **`kanban-completed.md`** entry before removal from **`kboard.md`**.
- [ ] **FR-102-F3:** Every archived **FBU** row produces a **`fbu-completed.md`** entry before removal from **`fbuboard.md`**.
- [ ] **FR-102-F4:** Run output lists archived / skipped / already-present counts per board and ledger.
- [ ] **FR-102-F5:** Idempotent re-run: rows already in completed ledgers are not duplicated; active rows already absent are no-ops.
- [ ] **FR-102-F6:** Document flag in cheatsheet + Claude **`/ukw`** command mirror when [FR-093](FR-093-ukw-slash-command-claude-code.md) is updated for new flags.

### Non-functional

- [ ] **FR-102-NF1:** **FR-097** stamp rules — no batch fake `Last modified` on unrelated rows; board metadata `Last Updated` may change with evidence.
- [ ] **FR-102-NF2:** Pre-write snapshot + `validate_board_stamp_diff.py` where UKW policy requires (STRUCTURE vs EVIDENCE manifest documented in run log).
- [ ] **FR-102-NF3:** Default UKW / `UKW -u` behavior unchanged when `-c` absent.

### Exceptions (keep on active board)

- **Perpetual** tasks (`perpetual_task: true` / **Perpetual Maintenance**) — never archived by `-c` unless explicit future flag (out of scope).
- **COMPLETE** row with explicit “keep on board until verification” banner on task or FBU doc (same class as FR-076 unresolved-verification keep).
- Row with **no resolvable** task/FBU doc — **skip** and report; do not delete.

---

## Acceptance criteria

- [ ] Operator can run **`UKW -c`** and active MoSCOW on **`kboard.md`** contains no tasks whose task docs are **COMPLETE** (except documented exceptions).
- [ ] Same run clears matching terminal **FBU** rows on **`fbuboard.md`** into **`fbu-completed.md`**.
- [ ] **`kanban-completed.md`** / **`fbu-completed.md`** gain entries with consistent timestamps and version/traceability fields.
- [ ] Cheatsheet and agent SoT document `-c` and forbid flag combinations that conflict with `--rp`.
- [ ] At least one recorded UKW run summary (task doc or IPP) demonstrates dual-board archival stats.

---

## Scope analysis

**Problem domain:** UKW operator ergonomics and board hygiene  
**Affected areas:**

- [x] UKW flags and agent execution guide
- [x] `kboard.md` / `kanban-completed.md`
- [x] `fbuboard.md` / `fbu-completed.md`
- [x] Cursor skills (`kanban-completed-update`, `fr-br-uxr-completed-update`, `ukw-sync`)
- [ ] RW Step 7 (out of scope unless explicitly requested — RW already does scoped reconciliation on release)

**Estimated complexity:** Medium (1 week)

---

## Related work

- [FR-034](FR-034-ukw-granular-control-and-use-case-flags.md) — UKW flag pattern (`-u`, `-p`, `-a`)
- [FR-076](FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) — fbuboard terminal prune (predecessor; `-c` adds ledger append mandate)
- [FR-049](FR-049-enhanced-kanban-completed-with-timestamps-and-recent-tasks.md) — completed ledger format
- [FR-050](FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) — FBU temporal sync
- [FR-086](FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md) — canonical `kanban-completed` / `fbu-completed` naming
- [BR-042](../fr-br/BR-042-ukw-agent-board-cleanup-failure.md) / [E06:S06:T42](../epics/Epic-6/Story-006-feature-requests/T42-fix-ukw-agent-board-cleanup-failure.md)
- [E02:S16:T04](../epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) — UKW perpetual attribution
- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)

---

## Out of scope

- Reprioritization (`--rp`), gap discovery (Step 2.5), or full comprehensive UKW in the same invocation as `-c`.
- Changing RW Step 7 scoped reconciliation semantics ([FR-091](FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)).
- Automated scheduling / CI — manual agent invocation only unless a follow-up FR requests it.
