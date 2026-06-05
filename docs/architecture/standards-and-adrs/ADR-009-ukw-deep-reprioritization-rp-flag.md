---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T22:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-009: UKW standalone deep reprioritization (`--rp`)

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E02:S16:T06](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md)  
**Origin FR:** [FR-085](../../project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)  
**Planning package:** [IPP-E2S16T6](../../implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md)

---

## Context

UKW supports MoSCOW maintenance via comprehensive runs, `-p` (update priorities), and `-a` (assign to targets). None of these provide an explicit **deep reprioritization** mode that systematically reorders `kboard.md` from evidence across intent, dependencies, blockers, and delivery impact, with an audit trail.

[FR-038](../../project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md) reserves **narrow** MoSCOW for RW Step 7 (`rw_step_7`). Whole-board priority realignment belongs in **standalone** UKW, not release-scope sync.

---

## Decision

1. **Add optional flag `--rp` (`RePrioritise`)** to UKW. Default UKW invocations without `--rp` are unchanged.

2. **`UKW --rp` is standalone** — not combinable as an augment to `-u`, `-p`, or `-a`. Operators run `UKW --rp` explicitly when deep realignment is needed.

3. **Invocation context:** `--rp` runs only under **`standalone`** user invocation. Agents **MUST NOT** use `--rp` during RW Step 7 (`rw_step_7`).

4. **Step scope for `--rp`:**
   - Run: Step 1 (perpetual wiring), Step 2 (evidence scan), Step 6 (deep MoSCOW on `kboard.md` + `kboard.md`), Step 6.5 (fbuboard terminal prune per FR-076), Step 7–9.
   - Skip: Step 2.5, Steps 3–5 (unless status mismatch blocks reprioritization — fix and document in Step 9).

5. **Evidence categories** (mandatory in rationale for each moved row): **intent**, **dependencies**, **blockers**, **impact**.

6. **Idempotency:** Identical inputs → zero MoSCOW moves on repeat run; Step 9 reports `No priority changes.`

7. **FR-097:** Reprioritization may reorder MoSCOW rows only; **no** batch rewrite of row `Last modified` stamps.

### Flag boundary (vs existing UKW flags)

| Invocation | Role |
| ---------- | ---- |
| `UKW` / `-u` / `-p` / `-a` | Unchanged; does **not** imply `--rp` |
| `UKW -p` | MoSCOW **update** sub-workflow |
| `UKW --rp` | **Deep RePrioritise** — standalone whole-board evidence-based reorder + rationale |

---

## Consequences

- **Positive:** Explicit operator path for priority drift correction; auditable rationale; default-off safety.
- **Negative:** Another flag to learn; risk of confusion with `-p` — mitigated by cheatsheet disambiguation and ADR-009 as precedent.
- **Maintainers:** Keep root `.cursorrules` UKW block and `cursorrules-ukw-trigger-section.md` aligned when `--rp` semantics change.

---

## References

- [FR-085](../../project-management/kanban/fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [FR-038](../../project-management/kanban/fr-br/FR-038-rw-step-7-scoped-kanban-sync-ukw-mode.md)
- [FR-097](../../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)
