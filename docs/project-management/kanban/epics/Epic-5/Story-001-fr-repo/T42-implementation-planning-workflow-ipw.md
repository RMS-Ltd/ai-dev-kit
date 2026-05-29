---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-31T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 42: Implementation Planning Workflow (IPW) — ICW consolidation

**Task ID:** E5:S01:T42  
**Status:** ✅ COMPLETE (v0.5.1.42+5)  
**Priority:** HIGH  
**Estimated Effort:** Medium (documentation + framework alignment; optional handler/registry follow-up)  
**Created:** 2026-03-31  
**Last updated:** 2026-04-22 (post v0.5.1.42+5 release alignment — FR-042 reopen follow-up completed, IPP published/wired, and traceability surfaces synchronized).  
**Version:** v0.5.1.42+5  
**Code:** E5S01T42

**Repository Pattern:** FR-042 = E5:S01:T42 (first implementation build when delivered: e.g. v0.5.1.42+1)

---

## Scope

Repository anchor and **implementation home** for **FR-042: Implementation Planning Workflow (IPW)**.

This task covers:

1. **Canonical planning workflow** — IPW delivers the single, repeatable process for spec + test design + implementation plan **as durable docs**, with **mandatory bidirectional wiring** between host task doc and plan doc (FR-042 §2–§3, §7).
2. **ICW merge** — The **Implementation Cycle Workflow (ICW)** brand and parallel planning path (FR-040, **`ICW`** Cursor trigger, `implementation-cycle-workflow` package, `icw_handler.py`) are **consolidated into IPW**: **`IPW` / `IPW E:S:T`** is canonical; **`ICW`** is deprecated or alias-only per FR-042 R10–R11 and AC10–AC11.
3. **Non-goals** — Does **not** replace **RW** (release) or **Implementation Cycle** execution discipline (TDD, etc.); IPW feeds those steps with artifacts.

---

## Deliverables

- [x] **IPW SoP / workflow doc** and **plan doc template** per FR-042 R01–R02, AC1–AC2, AC8
- [x] **.cursorrules** (and any adopter-facing rule copies): **IPW** canonical; **ICW** section aligned to FR-042 §7 (AC9–AC10)
- [x] **workflow-registry / framework README:** ICW entry notes IPW consolidation (AC11)
- [x] **Cross-references:** FR-040, FR-048, E5:S01:T40, E5:S01:T48 updated so planning expectations point at **IPW** where they previously implied a separate ICW planning pipeline (FR-042 R12, AC12)
- [x] **Optional (FR-042 R13):** Technical migration — `icw_handler.py` module docstring + package README legacy consolidation notice (full handler path cleanup deferred)

---

## Input

- **IPW planning artifact (spec / test design / impl plan):** [IPW-E5S01T42-ipw-icw-consolidation.md](IPW-E5S01T42-ipw-icw-consolidation.md)
- **IPP closure artifact (R14/AC13):** [IPP-E5S01T42-ascertain-requirements-sequence-closure.md](../../../../../implementation-cycles/IPP-E5S01T42-ascertain-requirements-sequence-closure.md)
- [FR-042 — IPW + ICW consolidation](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`
- **Prior ICW work (historical):** [FR-040](../../../fr-br/FR-040-implementation-cycle-workflow-icw.md), [E5:S01:T40](T40-implementation-cycle-workflow-icw.md), [FR-048](../../../fr-br/FR-048-icw-task-identifier-argument.md), [E5:S01:T48](T48-icw-task-identifier-argument.md)

---

## Acceptance Criteria

Aligned with **FR-042** acceptance criteria (AC1–AC13).

- **AC5/AC7 complete:** historical plan docs wired; validator script implemented and passing.
- **R14/AC13 follow-up complete:** canonical IPW sequence now encodes **Ascertain Requirements** before specification in both the IPW execution guide and plan template.

---

## Dependencies

- None blocking initial doc/RW alignment work
- **Coordinates with:** Epic 2/6 workflow maintainers if registry or `icw_handler` code paths change (R13)

---

## References

- **Plan doc (bidirectional):** [IPW-E5S01T42-ipw-icw-consolidation.md](IPW-E5S01T42-ipw-icw-consolidation.md)
- **IPP closure artifact:** [IPP-E5S01T42-ascertain-requirements-sequence-closure.md](../../../../../implementation-cycles/IPP-E5S01T42-ascertain-requirements-sequence-closure.md)
- Implementation Cycle Workflow package (legacy ICW): `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/`
