---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 20: Restore kboard IPP segment on MoSCOW rows (UXR-023)

**Task ID:** E02:S16:T20  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (UXR-023 intake)  
**Code:** E02S16T20  

**Upstream:** [UXR-023 — kboard IPP segment regression](../../../fr-br/UXR-023-kboard-ipp-segment-regression.md)

---

## Input

- [UXR-023](../../../fr-br/UXR-023-kboard-ipp-segment-regression.md) findings (F1–F3) and recommendations (R1–R5).
- [UXR-010](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) — canonical IPP segment contract (RESOLVED; regression target).
- [IPP-E4S19T04](../../../../../implementation-cycles/IPP-E4S19T04-kboard-fbuboard-ipp-segment-after-fbu-task-links.md) — original implementation plan.
- Live [`kboard.md`](../../../kboard.md) — all active bands missing IPP segment (2026-06-05).
- [FR-090](../../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) / [FR-092](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) — row emission and four-surface reconciliation context.

---

## Problem statement

[UXR-010](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md) required every wired `kboard.md` row to expose an IPP segment (`—IPP—` link or `—No IPP—` fallback) after FBU and task links. The live active board no longer renders that segment, breaking planning traceability for maintainers.

---

## Deliverable

1. **Corpus restore** — All active `kboard.md` rows normalized with correct IPP segment per task-doc IPP links.
2. **Workflow fix** — UKW Step 6 and/or RW Step 7 row writers re-include IPP segment on create/update.
3. **Validator** — Strict gate blocking rows without IPP segment on `kboard.md`.
4. **Documentation parity** — Board guide, template, and intake examples aligned with UXR-010 token forms.

---

## Scope

1. Root-cause trace: identify which workflow path dropped IPP (git history / row-transform scripts / agent skills).
2. Restore IPP on all active rows (evidence-backed stamps only per FR-097).
3. Harden UKW / RW Step 7 emission paths.
4. Add or extend validator (prefer extending existing board row grammar checks).
5. Update intake-process / ukw-sync skill examples to require IPP at row filing.

**Out of scope:** Reopening UXR-010 as OPEN (stays RESOLVED; UXR-023 tracks regression); changing IPP token text forms; fbuboard (deprecated — sole board is `kboard.md`).

---

## Acceptance criteria

- [ ] **AC1:** 100% of active `kboard.md` MoSCOW rows include IPP segment before `Last modified:`.
- [ ] **AC2:** IPP present → linked `—IPP—`; absent → plain `—No IPP—` (UXR-010 token forms).
- [ ] **AC3:** UKW comprehensive/bookkeeping and RW Step 7 emit IPP segment without manual follow-up.
- [ ] **AC4:** Validator `--strict` on `kboard.md` fails when any row lacks IPP segment.
- [ ] **AC5:** UXR-023 and T20 remain bidirectionally linked; task status reconciled after implementation.

---

## Planning artifacts

*(None yet — run `IPW E02:S16:T20` before implementation.)*

---

## References

- [UXR-023](../../../fr-br/UXR-023-kboard-ipp-segment-regression.md)
- [UXR-010](../../../fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [Story 016](../story-16-perpetual-ongoing-workflow-operations.md)
