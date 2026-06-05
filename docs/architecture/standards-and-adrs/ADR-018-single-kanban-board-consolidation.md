---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T21:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-018: Single kanban board consolidation (retire active `fbuboard`)

**Status:** Accepted  
**Date:** 2026-06-05  
**Deciders:** Maintainer (via E04:S19:T12 / UXR-020 R3)  
**Related:** [UXR-020](../../project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md), [IPP-E04S19T12](../../implementation-cycles/IPP-E04S19T12-single-board-consolidation-uxr020.md), [FR-051](../../project-management/kanban/fr-br/FR-051-fr-br-uxr-prioritization-board.md), [FR-092](../../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md), [ADR-015](ADR-015-kanban-epic-story-path-lowercase-convention.md)

---

## Context

Bidirectional **task ↔ FBU** wiring (KG-R2) made `kboard.md` and `fbuboard.md` **near-duplicates** in the Could Have backlog, doubling UKW/RW maintenance. `fbuboard` still held **verification-pending** rows (task COMPLETE, FBU OPEN) that `kboard` deliberately omitted. User selected **R3**: one active board with an explicit verification lane.

---

## Decision

1. **`kboard.md` is the sole active MoSCOW board** for tasks and wired FBUs.

2. **New MoSCOW band — Verification (V):** Between Should Have and Could Have. Rows use **`⏳ WAITING`** status (UXR-019: external verification gate) with prose noting task shipped + FBU open, e.g. `(HIGH, task **v…** · FBU verification pending)`.

3. **MoSCOW order:** M → S → **V** → C → O → W.

4. **`fbuboard.md` deprecated:** Replaced by a **redirect stub** (no active MoSCOW). Terminal FBU history remains in `fbu-completed.md`; inventory in `fbu-structure.md`.

5. **RW Step 7 three-surface contract** (supersedes four-surface for active boards):
   - Task doc
   - Source FR/BR/UXR doc(s)
   - `kboard.md` canonical row(s)

6. **Row link order** unchanged (UXR-010): task/FBU links → IPP segment → `Last modified` stamp.

7. **Phased tooling:** Wave 1 (this ADR + live boards + policy); Wave 2 (validators, `update_kanban_docs`, UKW/RW guides); Wave 3 (framework install templates).

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| R2 — partial consolidate (C-band on kboard only) | User chose R3; still two active surfaces |
| Status quo — dual boards | Duplicate admin; user pain |
| `COMPLETE` in V-band status token | FR-109 blocks terminal statuses on active MoSCOW |

---

## Consequences

- **Positive:** One board to edit; verification queue visible on `kboard` V-band.
- **Negative:** Validators and UKW must be updated (Wave 2); adopters with dual-board installs need migration note (Wave 3).
- **FR-092:** Four-surface narrative amended to three-surface for active reconciliation; `fbu-completed.md` ledger unchanged.

---

## Compliance

- Kanban governance policy § active board contract
- `validate_active_kanban_board.py` — fbuboard stub exempt from MoSCOW scan when no MoSCOW section present
- Release: **v0.4.19.12+1** (`RW E04:S19:T12 --art`)
