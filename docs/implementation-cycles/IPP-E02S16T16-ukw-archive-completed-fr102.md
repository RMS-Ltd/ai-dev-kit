---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S16:T16 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T16-ukw-archive-completed-board-rows-fr102.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md) **(E02:S16:T16)**  
**Planning for:** [FR-102 — UKW archive-completed (`-c`)](../project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md)  
**Status:** Published

> **IPW:** Produced for E02:S16:T16. Bidirectional wiring to host task **Input** / **References** confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `UKW -c` runs archive-completed **only** when `-c` present; default UKW unchanged | FR-102-F1, NF3 |
| RF2 | **Standalone** `-c`; forbidden with `-u`, `-p`, `-a`, `--rp` | FR-102, T16 AC1 |
| RF3 | **Task-doc SoT** for kboard archival (not row-text-only) | FR-102, ADR-010 |
| RF4 | Append **kanban-completed.md** before kboard row removal | FR-102-F2 |
| RF5 | **FBU-doc SoT** for fbuboard; FR-076 terminal rules + verification keep | FR-102-F3 |
| RF6 | Append **fbu-completed.md** before fbuboard row removal | FR-102-F3 |
| RF7 | Step 9 `## Archive completed summary` with counts | FR-102-F4 |
| RF8 | Idempotent re-run | FR-102-F5 |
| RF9 | Cheatsheet + agent SoT + `/ukw` + skill | FR-102-F6 |
| RF10 | Skip perpetual, keep-on-board banners, unresolvable links | FR-102 exceptions |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | FR-097 stamp discipline | FR-102-NF1 |
| RNF2 | Snapshots + structure-prune evidence JSON when rows removed | FR-102-NF2 |
| RNF3 | Agent-driven UKW (no monolithic runner) | FR-023 |

### 1.3 Boundaries

- **In scope:** `-c` contract; ADR-010; agent docs; `archive_completed.py` helpers; Option A prune gating in `update_kanban_docs.py`.
- **Out of scope:** RW Step 7 semantic change; `--rp`; Step 2.5; CI scheduling.

---

## 2. Specification

### 2.1 Goal

Operators run **`UKW -c`** to move terminal tasks and FBUs from active MoSCOW into [**kanban-completed.md**](../project-management/kanban/kanban-completed.md) and [**fbu-completed.md**](../project-management/kanban/fbu-completed.md) before row removal — without full UKW bookkeeping or reprioritization.

### 2.2 UKW step matrix — `UKW -c` (standalone)

| Step | Action |
| ---- | ------ |
| 1 | Perpetual UKW wiring — **run** |
| 2 | Archive scan (candidates from boards + linked docs) — **run** |
| 2.5 | Gap discovery — **skip** |
| 3–5 | Task/Story/Epic narrative — **skip** |
| 6 | Ledger append then MoSCOW removal (kboard + fbuboard) — **run** |
| 7 | Consistency / bidirectional pairs — **run** |
| 8 | Stage kanban + completed ledgers — **run** |
| 9 | `## Archive completed summary` — **run** |

**Handoff:** `RW E02:S16:T04` (UKW perpetual) or `RW E02:S16:T16` on feature completion.

### 2.3 RW / `update_kanban_docs.py` (Option A)

- **`update_kanban_board`:** no longer removes COMPLETE rows; emits advisory when rows would qualify for `UKW -c`.
- **`enforce_terminal_timestamps_on_boards`:** `prune_terminal_active_rows=False` by default; fbuboard terminal **removal** only when explicitly requested (tests) or via **`UKW -c`**.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1.
- **COMPLETE:** when AC1–AC5 evidenced at `RW E02:S16:T16`.

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1 | Y | Standalone `-c` vs extend `-u` vs RW-only fix |
| T2 | N | Revertible in one PR |
| T3 | N | UKW/kanban scope only |
| T4 | Y | Precedent for board hygiene |
| T5 | N | — |
| T6 | Y | UKW governance + `.cursorrules` |
| T7 | N | Complements ADR-009 |

**Outcome:** **REQUIRED** — [ADR-010](../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md)

### 2.6 Forbidden flag combinations

| Valid | Invalid |
| ----- | ------- |
| `UKW -c` | `UKW -c -u`, `UKW -c -p`, `UKW -c -a`, `UKW -c --rp`, `UKW -u -c`, etc. |

---

## 3. Test design

| ID | Type | Covers |
| -- | ---- | ------ |
| V1 | Manual / doc | RF1–RF2 flag matrix in SoT |
| V2 | Manual + helper | RF3–RF4 ledger-before-removal |
| V3 | Manual | RF5–RF6 fbu-completed |
| V4 | Manual | RF7–RF8 idempotent summary |
| V5 | Manual | RNF1–RNF2 stamp / pre-commit |
| V6 | pytest | `archive_completed.py` — perpetual skip, terminal task, ledger idempotency hints |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** T16 `TODO` → `IN PROGRESS` | Task doc |
| 2 | Publish IPP; wire task ↔ IPP | This file |
| 3 | **ADR-010** | ADR |
| 4 | Agent SoT: `.cursorrules`, excerpt, `ukw.md`, VWMP guide | Dual-source UKW |
| 5 | Cheatsheet + `ukw-sync` + YAML | Human + skill |
| 6 | `archive_completed.py` + pytest | Helpers |
| 7 | Option A in `update_kanban_docs.py` | No delete-only prune |
| 8 | Run V1–V6; record proof in §7 | Verification |
| 9 | `RW E02:S16:T16` | Release |
| **10** | **[MANDATORY]** Reconcile T16 + FR-102 status | Forensic marker |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md` | CREATE |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md` | CREATE |
| D-U1–D-U7 | `.cursorrules`, excerpt, `ukw.md`, VWMP, YAML, skill, cheatsheet | UPDATE |
| D-U8 | `update_kanban_docs.py`, `archive_completed.py` | UPDATE / CREATE |
| D-U9 | T16, FR-102 | UPDATE |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md` | PUBLISHED |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md` | PUBLISHED |
| Skills / cursorrules | `.cursor/skills/*`, `.cursorrules` | NOT_APPLICABLE (repo agent config) |

---

## 7. Success / verification criteria

- [x] IPP §1–§7 complete; ADR-010 created
- [x] Bidirectional T16 ↔ IPP links
- [ ] V2: `UKW -c` run or helper-backed archival demo (post-release operator pass)
- [ ] V4–V5 manual idempotency on first operator `UKW -c`
- [x] V6 pytest for `archive_completed` helpers
- [ ] T16 AC1–AC5 at `RW E02:S16:T16`

---

## References

- [FR-102](../project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [ADR-009](../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md)
- [ADR-010](../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md)
- [ADR-009](../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) (flag pattern)
- [FR-076](../project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [FR-097](../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [Workflow initiation cheatsheet](../guides/workflow-initiation-cheatsheet.md)
- [archive_completed.py](../packages/frameworks/workflow%20mgt/scripts/kanban/archive_completed.py)
