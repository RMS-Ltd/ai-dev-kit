---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Adopter note: Single-board migration (ADR-018)

**Audience:** Brownfield projects with dual active boards (`kboard.md` + `fbuboard.md`)  
**Authority:** [ADR-018](../../../docs/architecture/standards-and-adrs/ADR-018-single-kanban-board-consolidation.md) · [UXR-020](../../../docs/project-management/kanban/fr-br/UXR-020-fbuboard-necessity-after-task-fbu-wiring.md)

---

## Greenfield (fresh install)

`install_kanban_framework.py --mode fresh` emits:

| File | Role |
| ---- | ---- |
| `kboard.md` | Active MoSCOW board (includes **Verification (V)** band scaffold) |
| `fbuboard.md` | **Deprecated redirect stub** from `templates/FBUBOARD_STUB_TEMPLATE.md` |
| `kanban-structure.md`, `kanban-board-guide.md` | Unchanged roles |

No dual-board maintenance is required on new installs.

---

## Brownfield migration checklist

1. **Read ADR-018** — MoSCOW order is M → S → **V** → C → O → W.

2. **Migrate verification rows** — Copy fbuboard M/S rows where task is COMPLETE and FBU is OPEN into `kboard.md` **Verification (V)** band. Use `⏳ WAITING` status.

3. **Deduplicate Could Have** — Remove duplicate `E:S:T` rows from `fbuboard.md` that already exist on `kboard.md`.

4. **Replace `fbuboard.md`** — Swap active MoSCOW content for the redirect stub (`templates/FBUBOARD_STUB_TEMPLATE.md`). Preserve `fbu-completed.md` and `fbu-structure.md`.

5. **Update `rw-config.yaml` (optional legacy key)** — If present, remove or comment `fbu_board:` / `fbuboard:` keys. Active board is `kanban_board: kboard.md` only.

6. **Run validators** — `validate_active_kanban_board.py --strict` on `kboard.md`; deprecated stub is exempt from MoSCOW scan.

7. **Release** — Run `RW E:S:T` on your epic branch to version the migration.

---

## RW Step 7 contract (three-surface)

Release-scope reconciliation surfaces:

1. Task doc  
2. Source FR/BR/UXR doc(s)  
3. `kboard.md` (including V-band when applicable)

`fbuboard.md` is **not** maintained by RW/UKW after migration.

---

## References

- Kanban governance policy § active board contract  
- `stamp_authority.is_fbuboard_deprecated()` — tooling skip helper  
- [INSTALL_IN_YOUR_PROJECT.md](../../../../INSTALL_IN_YOUR_PROJECT.md) — brownfield adoption
