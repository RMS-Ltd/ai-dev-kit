---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T15:11:00Z
expires_at: null
housekeeping_policy: keep
---

# Starborn Legacy — Optimised Kanban Structure Overlay

**Project:** `starborn_legacy`  
**Role:** Operator-approved overlay on the SBL Target Structure Pack (TSP)  
**Base TSP:** [`TARGET-EST-TREE.md`](TARGET-EST-TREE.md)  
**Pass 3 manifest:** [`PASS-3-REDISTRIBUTION.md`](PASS-3-REDISTRIBUTION.md)  
**Canonical semantic-mapping reference:** [E04:S09:T06](../../docs/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../docs/kanban/fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md)  
**Status:** **PASS 3 + OPTIONAL FOLLOW-UPS APPLIED** (2026-06-25) — `E01:S99` cleared; 342 unique tasks; 40 M04 slots pruned.

---

## Current metrics

| Metric | Value |
|--------|------:|
| Unique tasks (`E:S:T`) | **342** |
| Named titles | 342 (100%) |
| M04 pass-3 context slots | **0** (40 pruned) |
| Epic bands | 19 |
| `E01:S99` | **cleared** |

Band parity: [BAND-PARITY.md](BAND-PARITY.md).

---

## What is applied

1. **E01 story swap** — ADK integration is `E01:S01`; perpetual operations is `E01:S02` (native renumber executed).
2. **E30/E31 renumber** — movement path visualization is `E30:S04:T01`; turn counter is `E35:S02:T11`; E31 remains reserved.
3. **S99 lifecycle** — pass 2 consolidated homeless/improper rows; pass 3 cleared `E01:S99`.
4. **Megastory restore** — `E34:S01`, `E40:S01`, `E40:S02`, `E40:S03` restored to domain epics.
5. **Duplicate drop** — 16 cross-epic duplicate rows removed with canonical copies retained.
6. **UAT renumber** — `E08:S*` UAT rows now canonical `E41:S*`.
7. **Optional follow-ups** — E36 shell fan-out complete, E36:S06 restored, E01:S07 archive redistributed by semantic display home.
8. **Historic bootstrap milestone retired** — `E02:S02:T01` removed from the live TSP and retained as attempt-10 archive evidence; `E02:S02` is free for workflow-management use.
9. **M04 context slots pruned** — 40 unsourced pass-3 placeholder rows removed; empty `E32:S06`/`E32:S07` story shells dropped.

---

## E01 structure

| Story | Name | Tasks |
|-------|------|------:|
| E01:S01 | AI Dev Kit Integration | 7 |
| E01:S02 | Perpetual Operations | 6 |
| E01:S03 | Release Versioning Hardening | 4 |

`E01:S07` is no longer an archive story. Its 24 rows are preserved under owning feature/display sections (navigation, session setup, colony/economy, ship UI, etc.).

---

## Follow-up status

| Item | Status |
| ---- | ------ |
| E36:S01–S05,S07–S10 fan-out | **Done** — 22 generated shell tasks |
| Restore E36:S06 injected body tasks | **Done** — 11 tasks restored |
| E01:S07 archive → owning feature homes | **Done** — 24 rows redistributed |
| Replace M04 context slots with sourced titles | **Pruned** — 40 unsourced slots removed; no corpus enrichment planned |
| E31 fleet-command story reopen | Future work when tasks are filed |

---

## Companion files

| File | Role |
|------|------|
| [TARGET-EST-TREE.md](TARGET-EST-TREE.md) | Canonical TSP (342 tasks) |
| [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md) | Pass 3 + follow-up manifest |
| [TARGET-EST-ALIASES.md](TARGET-EST-ALIASES.md) | Renumber + display-home map |
| [BAND-PARITY.md](BAND-PARITY.md) | Scorer epic counts |
| [tools/apply_pass3_redistribution.py](tools/apply_pass3_redistribution.py) | Regenerator script |
