---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E04:S13:T08 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T08-kanban-task-waiting-in-review-state-icons-uxr019.md`](../kanban/epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view/T08-kanban-task-waiting-in-review-state-icons-uxr019.md) **(E04:S13:T08)**  
**Planning for:** [UXR-019 — Kanban task WAITING / IN REVIEW state icons](../kanban/fbu/UXR-019-kanban-task-waiting-in-review-state-icons.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Produced by IPW for E04:S13:T08. Extends UXR-012 (E04:S13:T07) with task-board `IN REVIEW` and `WAITING` states.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `IN_REVIEW` / `WAITING` in `STATE_ICON_MAP`, token order, canonical map | UXR-019, T08 |
| RF2 | Aliases: `WAITING FOR SIGN-OFF`, `AWAITING SIGN-OFF`, `WAITING FOR APPROVAL` → `WAITING`; `UNDER REVIEW`, `PEER REVIEW` → `IN_REVIEW` | UXR-019 |
| RF3 | Parse/inject/validate paths recognize new tokens | T08 AC2 |
| RF4 | Guide + policy lifecycle rules | UXR-019 AC4 |
| RF5 | `state-icons.md` + UXR cross-links | RF6 plan |
| RF6 | Backfill E04:S19:T11, E06:S09:T16 → `WAITING` | UXR-019 AC5 |
| RF7 | UXR-019 + T08 AC closure on RW | T08 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | FR-097 stamp preservation on icon-only passes | UXR-012 |
| RNF2 | Gate 9 `--strict` pass | UXR-019 AC3 |
| RNF3 | Idempotent injection | T07 pattern |
| RNF4 | Non-terminal for FR-109 active board | Plan |

### 1.3 Invariants and boundaries

- **In scope:** `state_icons.py`, tests, governance, `kboard.md` target rows, UXR-019.
- **Out of scope:** Task doc `**Status:**` enum; FBU-only alias table; `rewrite_*_to_complete` for WAITING/IN REVIEW.

---

## 2. Specification

### 2.1 Goal

MoSCOW task rows express peer review (`IN REVIEW`, icon A1) and external queue (`WAITING`, icon B1) without conflating sign-off wait with active `IN PROGRESS`.

### 2.2 Editorial locks

| Canonical | Token | Set A | Set B |
| --------- | ----- | ----- | ----- |
| `IN_REVIEW` | `IN REVIEW` | magnifying glass | U+25CE |
| `WAITING` | `WAITING` | hourglass | U+231B |

### 2.3 Constraints

- Longest-first token order before `IN PROGRESS`.
- Boards: Set A only.

### 2.4 Status transition intent

- **Start:** TODO → IN PROGRESS at implementation Step 1.
- **Complete:** All ACs + RW → COMPLETE with version marker.
- **Atomic:** RW Step 7 four-surface sync.

### 2.5 ADR necessity decision

| ID | Y/N | Evidence |
| -- | --- | -------- |
| T1–T5, T7 | N | UXR-019 fixed icons |
| T6 | N | Extends Gate 9 table; no new RW/UKW steps |

**Outcome:** EXEMPT — UXR-012 + UXR-019; E1–E5 pass.

| E1–E5 | Pass |
| ----- | ---- |
| Single locus | §4.1 file list |
| No new options | UXR-019 |
| Reversible | Revert map + rows |
| Spec elsewhere | §2.2 |
| Documented | This IPP |

---

## 3. Test design

| ID | Behavior | Check |
| -- | -------- | ----- |
| T1 | primary/fallback | IN_REVIEW, WAITING icons |
| T2 | inject IN REVIEW / WAITING | Stamp preserved |
| T3 | alias longest-first | WAITING FOR SIGN-OFF, UNDER REVIEW |
| T4 | validator fixture | strict pass |

---

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | T08 TODO → IN PROGRESS |
| 2 | `state_icons.py` + tests |
| 3 | Governance + KB docs |
| 4 | UXR-019 AC1 lock |
| 5 | kboard T11/T16 → WAITING |
| 6 | Validators |
| **N** | RW E04:S13:T08; T08 COMPLETE |

### 4.1 Files to create or modify

- `docs/implementation-cycles/IPP-E4S13T8-*.md` (this file)
- `packages/frameworks/workflow-mgt/scripts/kanban/state_icons.py`
- `packages/frameworks/workflow-mgt/scripts/test_state_icons.py`
- `packages/frameworks/workflow-mgt/KB/.../state-icons.md`
- `docs/kanban/kanban-board-guide.md`
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- `docs/kanban/fbu/UXR-019-*.md`
- `docs/kanban/kboard.md`
- T08, Story 013 checklist, UXR-019

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | IPP-E4S13T8 | CREATE |
| D2 | T08 task | UPDATE |
| D3 | UXR-019 | UPDATE |
| D4–D7 | state_icons, tests, guides, kboard | UPDATE |

### 5.3 Gaps

| Topic | Resolution |
| ----- | ---------- |
| UKW/RW agent KB one-liners | NONE if guide/policy sufficient |

---

## 6. Documentation housing

| Doc ID | Path | Publication |
| ------ | ---- | ----------- |
| D1 | `docs/implementation-cycles/IPP-E4S13T8-*.md` | PUBLISHED |
| D2 | T08 task doc | NOT_APPLICABLE |
| D3–D7 | As §5 | PUBLISHED |

---

## 7. Success / verification criteria

- [x] `test_state_icons.py` OK
- [x] `validate_kanban_state_icons.py --strict` OK
- [x] T11/T16 rows use WAITING + hourglass
- [x] T08 COMPLETE on RW (**v0.4.13.8+1**)
- [x] UXR-019 AC1–AC5 checked

---

## References

- [UXR-019](../kanban/fbu/UXR-019-kanban-task-waiting-in-review-state-icons.md)
- [UXR-012](../kanban/fbu/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)
- [T08](../kanban/epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view/T08-kanban-task-waiting-in-review-state-icons-uxr019.md)
