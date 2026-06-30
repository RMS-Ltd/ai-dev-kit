---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Pass 3 redistribution manifest — starborn_legacy

**Executed:** 2026-06-25  
**Governance:** [E04:S09:T06](../../docs/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../docs/kanban/fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md)  
**Generator:** [`tools/apply_pass3_redistribution.py`](tools/apply_pass3_redistribution.py)

## Summary

| Metric | Before (pass 2) | After pass 3 + follow-ups |
|--------|----------------:|------------------------------:|
| Unique `E:S:T` | 377 | **342** |
| Tasks in `E01:S99` | 212 | **0** (story removed) |
| Unresolved titles | 41 | **0** |
| Duplicate rows dropped | 0 | **16** |
| E36 fan-out tasks | 0 | **22** |
| E36:S06 restored tasks | 0 | **11** |
| Retired historical milestones | 0 | **1** (`E02:S02:T01`) |
| Pruned M04 context slots | 0 | **40** |

## Pass 3 steps executed

### 1. Megastory restore

| Story | Tasks | Display home |
|-------|------:|--------------|
| E34:S01 | 30 | E34 — Ship Design Data Model |
| E40:S01 | 23 | E40 — PE/H system design |
| E40:S02 | 15 | E40 — Extreme Race System |
| E40:S03 | 26 | E40 — Computational research |

### 2. Core-band contamination → domain display homes

Native tokens preserved; rows listed under semantic story sections (see [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md)).

| Task | Semantic section |
|------|------------------|
| E01:S03:T05 | E30:S04 — Navigation |
| E02:S01:T01, T04, T05; E02:S02:T02 | E30:S04 |
| E05:S02:T01; E05:S03:T01–T02 | E30:S04 |
| E03:S01:T01, T03 | E30:S08 |
| E03:S01:T02 | E34:S01 |
| E03:S05:T01–T03 | E33:S10 |
| E03:S05:T04 | E38:S04 |
| E03:S05:T05 | E34:S05 |
| E05:S01:T06 | E34:S03 |
| E35:S02:T01–T03 | E06:S02 — Repo hygiene |

E03 epic band cleared (game FR rows redistributed).

### 3. Duplicate rows dropped

| Dropped token | Canonical retained |
|---------------|-------------------|
| E38:S07:T01–T07 | E33:S07 |
| E37:S09:T01–T02 | E34:S09 |
| E33:S12:T01–T05 | E34:S12 |
| E03:S06:T01 | E34:S06:T01 |
| E06:S02:T01 | E32:S02:T01 |

### 4. M04 enrichment + placement

40 context-slot titles were applied during pass 3, then **pruned** post pass 3 when no corpus enrichment was planned (see step 8).

### 5. E01:S01 ↔ S02 native renumber

| Old token | New token | Content |
|-----------|-----------|---------|
| E01:S02:T01–T07 | **E01:S01:T01–T07** | ADK integration |
| E01:S01:T01–T06 | **E01:S02:T01–T06** | Perpetual operations |

### 6. UAT `E08` → `E41` renumber

All 26 UAT tasks renumbered to `E41:S01–S05` (same S/T indices). E41 story sections restored.

### 7. Historic bootstrap milestone retired

`E02:S02:T01` — *Arm B install completion (attempt 10)* was removed from the live TSP because the completed install event is already preserved in [`../attempt-10/`](../attempt-10/) and keeping it live consumed an E02 workflow-story slot. `E02:S02` is now free for workflow-management use.

### 8. M04 context-slot prune

All 40 pass-3 context-slot rows with no sourced titles removed from the live TSP. Empty story shells `E32:S06` and `E32:S07` dropped. See [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md).

| Range / token | Count |
| ------------- | ----: |
| E34:S01:T10–T30 | 21 |
| E30:S08:T01–T04 | 4 |
| E32:S05:T05–T09 | 5 |
| E34:S06:T04–T06 | 3 |
| E35:S02:T08–T10 | 3 |
| E32:S06:T01, E32:S07:T01, E34:S04:T07, E38:S04:T07 | 4 |

### E01:S07 archive redistribution

24 historical bug-fix rows preserved and redistributed to owning semantic display sections:

| Display section | Rows |
|-----------------|-----:|
| E03:S01 | 2 |
| E30:S04 | 1 |
| E32:S02 | 1 |
| E33:S07 | 1 |
| E33:S08 | 5 |
| E34:S05 | 1 |
| E34:S12 | 1 |
| E37:S09 | 11 |
| E38:S04 | 1 |

Native `E01:S07:T*` tokens are preserved for forensic traceability; `E01:S07` is no longer a standalone story section.

### E36 fan-out

Optional follow-up applied:

- Restored injected `E36:S06:T01–T11` scanner/sensor-report tasks.
- Added 22 generated shell fan-out tasks across `E36:S01–S05` and `E36:S07–S10`.

## Renumber chain (unchanged from pass 1)

| Legacy | Canonical |
|--------|-----------|
| E31:S03:T01 | E30:S04:T01 |
| E30:S04:T01 (legacy turn counter) | E35:S02:T11 |

## Remaining follow-up

- None for M04 context slots — pruned (no corpus enrichment planned).
