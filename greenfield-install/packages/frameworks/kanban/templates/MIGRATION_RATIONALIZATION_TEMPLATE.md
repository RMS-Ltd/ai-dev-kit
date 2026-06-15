---
lifecycle: evergreen
created_at: 2026-06-15T20:00:00Z
housekeeping_policy: keep
---

# Migration rationalization proposal (L2 / L3 opt-in)

**Use when:** Operator opts into a **second pass** after L1 ship (Install RC already PASS).  
**Not required** for Install RC or first RW.  
**Depth guide:** [KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md](../guides/KANBAN_MIGRATION_DEPTH_AND_RATIONALIZATION.md)

---

## Proposal metadata

| Field | Value |
| ----- | ----- |
| **Target depth** | L2 (hygiene) / L3 (rationalize) |
| **Prior depth** | L1 (assumed) |
| **Date** | YYYY-MM-DD |
| **Operator request** | Brief reason for second pass |

---

## Scope

### L2 hygiene (check all that apply)

- [ ] Filename collision resolution (`story-*-legacy-*`)
- [ ] Board redirect stubs / active-row hygiene
- [ ] Validator fixes (non-semantic)

### L3 rationalize (check all that apply)

- [ ] Megastory split → per-task docs
- [ ] E/S/T renumbering to v4 catalog
- [ ] Structural scorecard targets

---

## Work items

| ID | Item | Rationale | Risk |
| -- | ---- | --------- | ---- |
| R1 | | | |

---

## Operator sign-off (BLOCKING)

- [ ] I approve this L2/L3 rationalization pass (separate from L1 KMA sign-off)

**Operator:** _______________ **Date:** _______________

---

## Post-pass

- [ ] Update `COMPREHENSION.md` — move items from **not performed** to **performed**
- [ ] Set `depth_achieved` to L2 or L3
- [ ] Optional: `RW` for rationalization delivery task
