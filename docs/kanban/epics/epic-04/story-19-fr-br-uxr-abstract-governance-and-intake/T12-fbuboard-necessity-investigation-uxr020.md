---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 12: `fbuboard` necessity investigation (UXR-020)

**Task ID:** E04:S19:T12  
**Status:** COMPLETE ✅  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (intake rename wave — **v0.4.19.12+5**)  
**Version:** v0.4.19.12+5  
**Version Anchor:** v0.4.19.12+5  
**Code:** E04S19T12  

**Publication Status:** NOT_APPLICABLE

**Upstream:** [UXR-020 — Is `kboard.md` still necessary after task–FBU wiring?](../../../fbu/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)  
**IPP:** [IPP-E4S19T12-single-board-consolidation-uxr020.md](../../../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)

---

## Input

- [UXR-020](../../../fbu/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md) research findings and user **R3** direction.
- Live boards `kboard.md` (2026-06-05 snapshot).
- [IPP-E4S19T12](../../../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md) phased implementation plan.
- [ADR-018](../../../../architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) (Wave 1).

---

## Scope

Investigate whether the separate **FBU prioritization board** (`kboard.md`) remains justified now that **bidirectional task ↔ FBU wiring** is mandatory (KG-R2) and both boards largely mirror each other in the Could Have backlog.

**Expanded scope (2026-06-05):** After ADR-018 single-board consolidation, **remove legacy `fr-br-uxr-*` alias files** from `docs/kanban/` root (`fr-br-uxr-board.md`, `fr-br-uxr-structure.md`, `fr-br-uxr-open-taskless-queue.md`). Canonical paths: `kboard.md`, `intake-structure.md`, `intake-open-taskless-queue.md`. Retain `kboard.md` redirect stub and `kboard.md` read-tolerance alias only.

---

## Problem statement

Operators report that keeping `kboard.md` in sync creates **unnecessary admin** because rows represent the same work via `E:S:T` ↔ FBU links. The project needs an evidence-based answer: **retain, partially consolidate, or retire** `fbuboard`.

---

## Deliverable

1. **UXR-020** research report with findings, pain points, and recommendations (✅ drafted 2026-06-05).
2. **Dependency inventory** — RW Step 7 four-surface, UKW scope, validators, `update_kanban_docs.py` (captured in UXR-020 §F4).
3. **Decision record** — user sign-off on R2 (scoped consolidation) vs R3 (single board) vs status quo.
4. **Optional follow-on IPP** — if implementation authorized: board contract change, policy update, validator anti-duplication rule.

---

## Investigation summary (2026-06-05)

| Finding | Implication |
| ------- | ----------- |
| ~28 C-band rows duplicated | Main admin pain; safe to dedupe onto `kboard` only |
| 9 M/S fbuboard-only rows (task COMPLETE, FBU OPEN) | Non-redundant verification lane — **do not mirror to kboard** |
| 6 kboard-only Epic 10 tasks (no FBU) | Task board still needed for non-FBU work |
| FR-092 mandates both surfaces today | Full retire requires meta-program / policy change |
| 2026-06-05 reverted erroneous mirror | Blind sync already tried and rolled back |

**User decision (2026-06-05):** **R3 — full single-board** (not R2 partial consolidate).

**Implementation approach (IPP):**

- Add **Verification (V)** MoSCOW band on `kboard.md` with dual-status rows (`⏳ WAITING` + task-shipped / FBU-open prose per ADR-018).
- Migrate all active `fbuboard` rows; replace `kboard.md` with redirect stub.
- Amend FR-092 to **three-surface** RW Step 7; update validators/UKW in phased waves.
- **ADR-018** required (see IPP §2.5).

---

## Acceptance criteria

- [x] **AC1:** UXR-020 filed with bidirectional link to this task.
- [x] **AC2:** Live-board overlap/divergence documented with examples.
- [x] **AC3:** Non-redundant fbuboard behaviours identified (verification-pending, taskless queue).
- [x] **AC4:** User selects **R3** (full single-board).
- [x] **AC5:** IPP linked ([IPP-E4S19T12](../../../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md)).
- [x] **AC6:** Wave 1 delivered (ADR-018, policy, board migration, fbuboard stub) via RW **v0.4.19.12+1**.
- [x] **AC7:** Wave 2 validators/scripts + tests green (**v0.4.19.12+2**).
- [x] **AC8:** Wave 3 framework templates + `rw-config` schema + adopter migration note (**v0.4.19.12+3**).
- [x] **AC9:** User verification of single-board operator workflow (2026-06-05 — lean `kboard` + V-band accepted).
- [x] **AC11:** Kanban root legacy `fr-br-uxr-*` aliases removed; `kanban/README.md` and workflow scripts no longer treat them as active corpus boards.
- [x] **AC10:** Closure RW **v0.4.19.12+4** — task COMPLETE ledger + release alias cleanup.

---

## Associated reports

- [UXR-020](../../../fbu/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)

---

## Related

- [FR-051](../../../fbu/FR-051-fr-br-uxr-prioritization-board.md)
- [FR-092](../../../fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-109](../../../fbu/FR-109-ukw-lean-active-board-contract.md)
- [E04:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) — prior FBU board governance meta-task
