---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T18:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T20 — Planning: Restore kboard IPP segment (UXR-023)

**Host Task:** [`T20-restore-kboard-ipp-segment-uxr023.md`](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md) **(E02:S16:T20)**  
**Planning for:** [UXR-023 — kboard IPP segment regression](../project-management/kanban/fr-br/UXR-023-kboard-ipp-segment-regression.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** Produced by IPW for E02:S16:T20. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | 100% active `kboard.md` MoSCOW rows include IPP segment before `Last modified:` | T20 AC1 / UXR-023 |
| RF2 | Artifact present → `[—IPP—](…)`; absent → plain `—No IPP—` | T20 AC2 / UXR-010 |
| RF3 | UKW comprehensive/bookkeeping + RW Step 7 auto-emit IPP via script pipeline | T20 AC3 / UXR-023 R2 |
| RF4 | `--strict` validator blocks rows missing IPP on `kboard.md` | T20 AC4 / UXR-023 R3 |
| RF5 | Template, board guide, intake/ukw skills show IPP in wired row examples | T20 deliverable 4 / UXR-023 R4–R5 |
| RF6 | Corpus restore uses evidence-backed stamps only (FR-097) | T20 scope |
| RF7 | UXR-023 ↔ T20 bidirectional links maintained | T20 AC5 |

### 1.2 Non-functional requirements

| ID | Requirement |
| -- | ----------- |
| RNF1 | Idempotent normalizer — re-run is no-op on compliant rows |
| RNF2 | No batch stamp churn on hygiene passes (FR-097) |
| RNF3 | Greenfield mirror parity |

### 1.3 Out of scope

Reopening UXR-010; changing IPP token text; fbuboard (deprecated); migrating `[Task]` labels to `[E:S:T]`.

---

## 2. Specification

### 2.1 Goal

Close the UXR-010 regression on the sole active board by extending the FR-090 normalizer to recognize live `kboard.md` row grammar (`[Task](url)`), restoring IPP on all active rows, and blocking future drift with a strict validator.

### 2.2 Normalizer extension

Third path in `_normalize_traceability_segments_for_row()`: bold `E#:S#:T#` + `[Task](url)` or `[Task Doc](url)` → append IPP before `Last modified:` footer; preserve existing links and stamps.

### 2.4 Status transition intent

- **Current:** IN PROGRESS (intake **v0.2.16.20+1**)
- **Complete when:** AC1–AC5 satisfied → `COMPLETE` + forensic marker on implementation RW

### 2.5 ADR necessity — EXEMPT

Governing docs: UXR-010, FR-090, IPP-E4S19T04. Restores existing contract; no new architectural fork.

---

## 3. Test design

| ID | Test | Covers |
| -- | ---- | ------ |
| T1 | Live-format row (`[Task]` + `[BR-099]`) → `—No IPP—` | RF1–RF3 |
| T2 | Task with IPP on disk → linked `[—IPP—](…)` | RF2 |
| T3 | Compliant row → idempotent | RNF1 |
| T4 | Full board normalization → 100% IPP coverage | RF1 |
| T5 | `validate_active_kanban_board --strict` fail/pass | RF4 |
| T6 | RW vs standalone pipeline parity on IPP row | FR-090 |
| T7 | Existing tests 4.8–4.13 remain green | regression |

**Run:** `pytest packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py tests/test_validate_active_kanban_board.py -q`

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Confirm T20 IN PROGRESS; update `Last updated` |
| 2 | Write this IPP; wire task ↔ IPP |
| 3 | Extend `_normalize_traceability_segments_for_row()` kboard `[Task]` path |
| 4 | Pytest T1–T7 |
| 5 | Corpus restore on `kboard.md`; stamp evidence JSON if pre-commit requires |
| 6 | Extend `validate_active_kanban_board.py`; wire RW Step 9 / ukw parity |
| 7 | Template, board guide, intake/ukw skills |
| 8 | Mirror `greenfield-install/`; `sync_greenfield_install.py --check` |
| 9 | `RW E02:S16:T20 --art` (BUILD +2) |
| **10** | Reconcile T20 → COMPLETE; UXR-023 AC; kboard hygiene |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T20-restore-kboard-ipp-segment-uxr023.md` | CREATE |
| D-U1 | `update_kanban_docs.py` | UPDATE |
| D-U2 | `validate_active_kanban_board.py` | UPDATE |
| D-U3 | `kboard.md` | UPDATE |
| D-U4 | Template, kanban-board-guide, intake/ukw skills | UPDATE |
| D-U5 | `greenfield-install/` mirrors | UPDATE |

---

## 6. Success / verification criteria

- [x] All active `kboard.md` MoSCOW rows show IPP before stamp
- [x] Pytest T1–T7 green
- [x] `validate_active_kanban_board.py --strict` PASS
- [x] `sync_greenfield_install.py --check` PASS
- [x] RW `v0.2.16.20+2` ships implementation

---

## References

- [UXR-023](../project-management/kanban/fr-br/UXR-023-kboard-ipp-segment-regression.md)
- [UXR-010](../project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [IPP-E4S19T04](IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md)
- [T20 task doc](../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md)
