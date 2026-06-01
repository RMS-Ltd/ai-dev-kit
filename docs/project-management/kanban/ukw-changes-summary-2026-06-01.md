# UKW Changes Summary — 2026-06-01

**UKW Run:** 2026-06-01 (`UKW -u` bookkeeping only)  
**Perpetual UKW Task:** E02:S16:T04 (FR-023)  
**Version context:** v0.4.19.8+2 (**SemVer** v0.4.844+2) — post **RW E04:S19:T08**

---

## Summary

Bookkeeping sub-workflow: synchronized board metadata to the current release anchor, archived terminal FBUs from active MoSCOW, and refreshed Epic 4 / Story 019 / perpetual T04 forensic markers. **No MoSCOW reprioritization** (`-u` scope). **No row `Last modified` batch rewrites** (FR-097).

---

## Key changes

### Boards (metadata + FBU hygiene)

| Surface | Action |
| -------- | ------ |
| `kboard.md` | Board **Last Updated** / **Version** → **v0.4.19.8+2** (was stale **v0.6.7.107+3**) |
| `fbuboard.md` | Same metadata; removed active rows **FR-072** (COMPLETE), **FR-021** (SUPERSEDED) |
| `fbu-completed.md` | Ledger entries for **FR-072**, **FR-021**; dashboard + header version |

### Hierarchy (bottom-up bookkeeping)

- **E04:S19** — tactical overview + goals checkboxes (T08/FR-072 closure)
- **Epic 4** — Story 019 checklist note (T07–T10 ✅, T01 open)
- **E02:S16:T04** — perpetual UKW task last-updated note

---

## Reconciliation stats

- **FBU rows removed (active):** 2 (**FR-072**, **FR-021**)
- **FBU rows added (completed ledger):** 2
- **kboard task rows changed:** 0 (structure/metadata only)
- **Row stamp deltas:** none (removals only; board-level metadata updated)

---

## Next step

Run **`RW E02:S16:T04`** to commit kanban bookkeeping (per project git policy).
