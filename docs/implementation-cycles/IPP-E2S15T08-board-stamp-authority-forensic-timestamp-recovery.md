---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S15:T08 — Planning: Board Stamp Authority and Forensic Timestamp Recovery (IPW)

**Host Task:** [T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) **(E2:S15:T08)**  
**Planning for:** [FR-097](../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)  
**Status:** Approved (implementation delivered 2026-05-20)

---

## 1. Requirements (Ascertained Baseline)

See attached IPW plan: RF1–RF8, RNF1–RNF4. User locked: automatic backfill, blocking abort, validator-first steward.

## 2. Specification

**Goal:** Restore trustworthy per-row `Last modified` semantics with blocking write-boundary validation and automatic recovery of homogenized stamps (~61× `2026-04-20 15:52 UTC` on fbuboard).

**Constraints:** STRUCTURE vs CONTENT edit classes; `non_substantive` default on UKW hygiene; Gate 8 homogeneity threshold 10.

### 2.4 Status transition intent

- **Current:** IN PROGRESS → COMPLETE on `RW E2:S15:T08` with verification evidence.
- **Atomic propagation:** Task doc + kboard row in same RW Step 7 scope.

## 3. Test design

| ID | Check |
| -- | ----- |
| T1–T6 | `test_stamp_authority.py` |
| T7–T8 | `backfill_board_row_stamps.py` + report |
| T9 | `enforce_terminal_timestamps_on_boards` non_substantive |
| T10 | `gate_8_stamp_homogeneity` |
| T11 | `test_stamp_evidence_gate.py` (existing, green) |

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Transition E2:S15:T08 `TODO → IN PROGRESS` |
| 2–10 | Delivered: `stamp_authority.py`, `validate_board_stamp_diff.py`, `backfill_board_row_stamps.py`, `snapshot_kanban_boards.py`, pipeline fixes, Gate 8, policy/docs, backfill run (71 rows) |
| **N** | Reconcile status on RW; re-close BR-069 / UXR-009 |

### 4.1 Files created

- `packages/frameworks/workflow mgt/scripts/kanban/stamp_authority.py`
- `packages/frameworks/workflow mgt/scripts/validation/validate_board_stamp_diff.py`
- `packages/frameworks/workflow mgt/scripts/kanban/backfill_board_row_stamps.py`
- `packages/frameworks/workflow mgt/scripts/kanban/snapshot_kanban_boards.py`
- `packages/frameworks/workflow mgt/scripts/test_stamp_authority.py`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/board-stamp-authority.md`

### 4.2 Agent skill (AC7)

**NONE** — snapshot + `validate_board_stamp_diff.py` covers agentic path when guides are followed. Skill stub deferred unless manual bypass recurs.

## 5. Documentation deliverables

| Doc | Action | Status |
| --- | ------ | ------ |
| kanban-governance-policy.md | UPDATE Board Stamp Authority | Done |
| update-kanban-workflow-agent-execution.md | UPDATE Step 6.5 | Done |
| release-workflow-agent-execution.md | UPDATE Step 7 snapshot, Step 10 validators | Done |
| .cursorrules, ukw.md | UPDATE | Done |
| board-stamp-authority.md | CREATE | Done |
| FR-097, BR-069, UXR-009, T08 | UPDATE | Done |

## 6. Documentation housing

| Artifact | Path | Publication |
| -------- | ---- | ----------- |
| IPP | This file | PUBLISHED |
| Operator guide | `board-stamp-authority.md` | PUBLISHED |

## 7. Success / verification criteria

- [x] AC1: Policy/docs aligned (no row unify on hygiene)
- [x] AC2: `validate_board_stamp_diff.py` + workflow integration documented
- [x] AC3: Pipeline `non_substantive` on fbuboard cleanup / enforce_terminal
- [x] AC4: Backfill report [`fr097-backfill-report.json`](../changelog-and-release-notes/changelog-archive/four-surface-reports/fr097-backfill-report.json) — 71 rows changed
- [x] AC5: Gate 8 homogeneity PASS post-backfill
- [x] AC6: BR-069 / UXR-009 CLOSED on RW release (**v0.2.15.8+1**)
- [x] AC7: Skill NONE with documented rationale

## References

- [FR-097](../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [IPP-E2S15T07](IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)
- [IPP-E2S15T04](IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
