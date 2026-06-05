---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-010: UKW standalone archive completed (`-c`)

**Status:** Accepted  
**Date:** 2026-05-30  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E02:S16:T16](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md)  
**Origin FR:** [FR-102](../../project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md)  
**Planning package:** [IPP-E02S16T16](../../implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md)

---

## Context

Active MoSCOW rows on `kboard.md` can show **COMPLETE** (or terminal FBU) work while source task/FBU docs are already closed. [FR-076](../../project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md) and `update_kanban_docs.py` hygiene could **remove** such rows without appending to [**kanban-completed.md**](../../project-management/kanban/kanban-completed.md) or [**intake-completed.md**](../../project-management/kanban/intake-completed.md) — losing the ledger-first contract operators expect.

Operators need a **fast, explicit** UKW path: “clean the boards” means **archive then remove**, not silent deletion.

---

## Decision

1. **Add optional flag `-c` (archive completed)** to UKW. Default UKW without `-c` is unchanged.

2. **`UKW -c` is standalone** — not combinable with `-u`, `-p`, `-a`, or `--rp`. Agents **MUST** reject combined flag sets.

3. **Invocation context:** `-c` runs only under **standalone** user invocation. Agents **MUST NOT** use `-c` during RW Step 7 (`rw_step_7`).

4. **Source of truth:**
   - **kboard:** linked **task document** `**Status:**` (terminal `COMPLETE` / equivalent), not row text alone.
   - **fbuboard:** linked **FR/BR/UXR** document status (terminal per FR-076 rules; keep unresolved-verification exceptions).

5. **Ledger-before-removal (mandatory):**
   - Tasks → `kanban_completed_update` / [kanban-completed-update skill](../../../.cursor/skills/kanban-completed-update/SKILL.md) before row removal.
   - FBUs → `fr_br_uxr_completed_update` / [fr-br-uxr-completed-update skill](../../../.cursor/skills/fr-br-uxr-completed-update/SKILL.md) before row removal.

6. **Step scope for `-c`:** Run Steps 1, 2 (archive scan), 6 (archive + prune), 7–9. Skip 2.5, 3–5. Step 9 **must** include `## Archive completed summary` (archived / skipped / already-in-ledger counts).

7. **Idempotency:** Re-run with unchanged inputs → no duplicate ledger entries; active rows already absent are no-ops.

8. **FR-097:** Row removal is **structure** change; document structure-prune evidence when pre-commit stamp diff runs. Do not batch-fabricate unrelated row stamps.

9. **RW / `update_kanban_docs.py` (Option A):** Deterministic board update paths **do not** delete-only prune COMPLETE active MoSCOW rows. Operators run **`UKW -c`** after releases to archive completes.

### Flag boundary

| Invocation | Role |
| ---------- | ---- |
| `UKW` / `-u` / `-p` / `-a` | Unchanged; does **not** imply `-c` |
| `UKW --rp` | Deep reprioritization only ([ADR-009](ADR-009-ukw-deep-reprioritization-rp-flag.md)) |
| `UKW -c` | **Archive completed** — ledger append then active MoSCOW removal |

---

## Consequences

- **Positive:** Clear operator command; forensic ledgers stay authoritative; fixes RW `-k` delete-only prune gap.
- **Negative:** Extra step after releases; terminal rows may linger until `-c` runs.
- **Maintainers:** Keep `.cursorrules` UKW block and `cursorrules-ukw-trigger-section.md` aligned when `-c` semantics change.

---

## References

- [FR-102](../../project-management/kanban/fr-br/FR-102-ukw-archive-completed-board-rows.md)
- [ADR-009](ADR-009-ukw-deep-reprioritization-rp-flag.md)
- [FR-076](../../project-management/kanban/fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [FR-097](../../project-management/kanban/fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [Workflow initiation cheatsheet](../../guides/workflow-initiation-cheatsheet.md)
