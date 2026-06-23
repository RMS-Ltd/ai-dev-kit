---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Adopter note: Single-board migration (ADR-018)

**Audience:** Brownfield projects with legacy dual boards (`kboard.md` + `fbuboard.md`) or `kanban-board.md` alias  
**Authority:** [ADR-018](../../../docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) · [UXR-020](../../../docs/kanban/fbu/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)

---

## Greenfield (fresh install)

`install_kanban_framework.py --mode fresh` emits:

| File | Role |
| ---- | ---- |
| `kboard.md` | Sole active MoSCOW board (includes **Verification (V)** band scaffold) |
| `kanban-structure.md`, `kanban-board-guide.md` | Structure and guide |
| `intake-structure.md`, `intake-completed.md`, `intake-open-taskless-queue.md` | Intake inventory and ledgers |

No dual-board maintenance is required on new installs.

---

## Brownfield migration checklist

1. **Read ADR-018** — MoSCOW order is M → S → **V** → C → O → W.

2. **Migrate verification rows** — Copy `fbuboard.md` M/S rows where task is COMPLETE and FBU is OPEN into `kboard.md` **Verification (V)** band. Use `⏳ WAITING` status.

3. **Deduplicate Could Have** — Remove duplicate `E:S:T` rows from `fbuboard.md` that already exist on `kboard.md`.

4. **Delete legacy board files** — Remove `fbuboard.md` and `kanban-board.md`. Rename `fbu-*.md` → `intake-*.md` if still using legacy filenames.

5. **Update `rw-config.yaml`** — `kanban_board: kboard.md` is the sole active board. Remove deprecated `fbu_board` / `fbuboard` keys.

6. **Run validators** — `validate_active_kanban_board.py --strict` on `kboard.md`.

7. **Release** — Run `RW E:S:T` on your epic branch to version the migration.

---

## RW Step 7 contract (three-surface)

Release-scope reconciliation surfaces:

1. Task doc (host + affected children)
2. Source FR/BR/UXR doc(s)
3. `kboard.md` canonical row(s)

No `fbuboard` surface.
