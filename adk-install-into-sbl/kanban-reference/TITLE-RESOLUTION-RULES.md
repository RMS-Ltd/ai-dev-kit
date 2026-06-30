---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T15:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Title resolution rules — starborn_legacy

Ordered resolver for KMA **M04** title enrichment. Canonical semantic placement: [E04:S09:T06](../../docs/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md).

---

## Resolution order

1. Direct `E:S:T` match in legacy story body (`####` header or checklist line).
2. Legacy epic remap (same S/T) via [LEGACY-EPIC-REMAP.yaml](LEGACY-EPIC-REMAP.yaml).
3. Fuzzy story-title match within mapped legacy epic.
4. Unique `(S,T)` disambiguation within story file.
5. Emit `(unresolved — story context: …)` when no named title found.

---

## Classification

| Class | Rule |
| ----- | ---- |
| **Named** | Non-empty title not matching `unresolved`, `TBD`, `placeholder`. |
| **Unresolved** | Empty or marker-only — penalized in `title_coverage` scorer dimension. |
| **Conflict** | Longest named title wins when duplicate `E:S:T` rows exist in source. |

---

## M04 pass log (2026-06-25 pass 3)

40 context-slot titles were applied during pass 3, then **pruned** when no corpus enrichment was planned. See [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md) step 8 and [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md).

**Prune rule:** Unsourced pass-3 context slots are not kept as live TSP rows. Re-file with operator-sourced titles only when scope is known.

## M04 pass log (2026-06-25 pass 1)

| Task | Result | Notes |
| ---- | ------ | ----- |
| E30:S08:T01 | Unresolved | No legacy title in operator corpus (`OPERATOR-REWORKED-EST-TREE`, `temp/sbl-operator-kanban-est-tree-*`). |
| E30:S08:T02 | Unresolved | Same |
| E30:S08:T03 | Unresolved | Same |
| E30:S08:T04 | Unresolved | Same |

**Action:** Remain in **E30:S08** pending operator or legacy-archive enrichment. Do not invent titles.

---

## Overlay-applied renumbering (executed 2026-06-25)

| Legacy token | Canonical token | Title |
| ------------ | --------------- | ----- |
| E30:S04:T01 | **E35:S02:T11** | Implement turn counter |
| E31:S03:T01 | **E30:S04:T01** | Clear movement path visualization |
