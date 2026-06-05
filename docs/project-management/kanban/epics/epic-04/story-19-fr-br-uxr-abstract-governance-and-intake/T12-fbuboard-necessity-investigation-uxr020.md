---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 19, Task 12: `fbuboard` necessity investigation (UXR-020)

**Task ID:** E04:S19:T12  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium (research complete; implementation path TBD)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05  
**Code:** E04S19T12  

**Publication Status:** NOT_APPLICABLE

**Upstream:** [UXR-020 — Is `fbuboard.md` still necessary after task–FBU wiring?](../../../fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)

---

## Scope

Investigate whether the separate **FBU prioritization board** (`fbuboard.md`) remains justified now that **bidirectional task ↔ FBU wiring** is mandatory (KG-R2) and both boards largely mirror each other in the Could Have backlog.

**Out of scope (until user authorizes + IPW):** Actually deleting or merging boards, validator rewrites, or FR-092 contract amendments.

---

## Problem statement

Operators report that keeping `kboard.md` and `fbuboard.md` in sync creates **unnecessary admin** because rows represent the same work via `E:S:T` ↔ FBU links. The project needs an evidence-based answer: **retain, partially consolidate, or retire** `fbuboard`.

---

## Deliverables

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

**Provisional recommendation:** **Scoped consolidation (UXR-020 R2)** — not full retirement.

---

## Acceptance criteria

- [x] **AC1:** UXR-020 filed with bidirectional link to this task.
- [x] **AC2:** Live-board overlap/divergence documented with examples.
- [x] **AC3:** Non-redundant fbuboard behaviours identified (verification-pending, taskless queue).
- [ ] **AC4:** User/stakeholder selects direction (R2 / R3 / status quo).
- [ ] **AC5:** If implementation chosen: IPP linked; board/policy changes released via RW on epic branch.

---

## Associated reports

- [UXR-020](../../../fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)

---

## Related

- [FR-051](../../../fr-br/FR-051-fr-br-uxr-prioritization-board.md)
- [FR-092](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-109](../../../fr-br/FR-109-ukw-lean-active-board-contract.md)
- [E04:S19:T06](T06-fbu-meta-normalization-and-intake-governance-uxr008-fr086-fr073.md) — prior FBU board governance meta-task
