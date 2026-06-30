---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-25T15:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Target E/S/T aliases — starborn_legacy

Map legacy tokens, renumbering, and semantic display homes.

**Governance:** [E04:S09:T06](../../docs/kanban/epics/epic-04/story-09-bug-fixes-and-agentic-intelligence.md) / [FR-010](../../docs/kanban/fbu/FR-010-implement-actual-agentic-intelligence-task-mapping.md)  
**Pass 3:** [PASS-3-REDISTRIBUTION.md](PASS-3-REDISTRIBUTION.md)

---

## E01 story swap renumber (pass 3 — executed)

| Legacy token | Canonical token | Content |
| ------------ | --------------- | ------- |
| E01:S02:T01–T07 | **E01:S01:T01–T07** | ADK integration |
| E01:S01:T01–T06 | **E01:S02:T01–T06** | Perpetual operations |

---

## UAT renumber (pass 3 — executed)

| Legacy token | Canonical token |
| ------------ | --------------- |
| E08:S*s*:T* | **E41:S*s*:T*** (same story/task indices) |

---

## Semantic placement renumber (pass 1)

| Legacy token | Canonical token | Home |
| ------------ | --------------- | ---- |
| E30:S04:T01 (turn counter) | **E35:S02:T11** | E35 |
| E31:S03:T01 (movement path) | **E30:S04:T01** | E30 |

---

## Retired live-tree milestones (post pass 3)

| Token | Status | Evidence |
| ----- | ------ | -------- |
| E02:S02:T01 | Retired from live TSP; completed historic Arm B install milestone | [`../attempt-10/`](../attempt-10/) |

---

## Pruned M04 context slots (post pass 3 — no corpus enrichment)

40 pass-3 context-slot rows removed from the live TSP (no sourced titles; operator decision — no corpus influx planned).

| Range / token | Story context |
| ------------- | ------------- |
| E30:S08:T01–T04 | Galaxy & Map Features |
| E32:S05:T05–T09 | Resource Transfer System |
| E32:S06:T01 | Save/Load Localized Storage |
| E32:S07:T01 | Localized Migration Tests |
| E34:S01:T10–T30 | Hull Parameter Specifications |
| E34:S04:T07 | Ship Construction Integration |
| E34:S06:T04–T06 | AI Visibility in Player UI |
| E35:S02:T08–T10 | AI Full Gameplay Implementation |
| E38:S04:T07 | Rich Ship Screen |

Empty story shells removed from live tree: `E32:S06`, `E32:S07`.

---

## Semantic display homes (pass 3)

Native token unchanged; row listed under semantic story section in [TARGET-EST-TREE.md](TARGET-EST-TREE.md).

| Token | Display section |
| ----- | --------------- |
| E01:S03:T05 | E30:S04 |
| E02:S01:T01, T04, T05; E02:S02:T02 | E30:S04 |
| E05:S02:T01; E05:S03:T01–T02 | E30:S04 |
| E03:S01:T01, T03 | E30:S08 |
| E03:S01:T02 | E34:S01 |
| E03:S05:T01–T03 | E33:S10 |
| E03:S05:T04 | E38:S04 |
| E03:S05:T05 | E34:S05 |
| E05:S01:T06 | E34:S03 |
| E35:S02:T01–T03 | E06:S02 |

---

## E01:S07 archive redistribution (optional follow-up — executed)

Native token unchanged; row listed under owning semantic display section.

| Token | Display section |
| ----- | --------------- |
| E01:S07:T01 | E30:S04 |
| E01:S07:T02–T03, T06–T09, T13–T14, T18, T20–T21 | E37:S09 |
| E01:S07:T04 | E34:S05 |
| E01:S07:T05, T23 | E03:S01 |
| E01:S07:T10–T11, T16, T19, T22 | E33:S08 |
| E01:S07:T12 | E32:S02 |
| E01:S07:T15 | E38:S04 |
| E01:S07:T17 | E34:S12 |
| E01:S07:T24 | E33:S07 |

---

## E36 generated fan-out (optional follow-up — executed)

| Range | Purpose |
| ----- | ------- |
| E36:S01:T01–T03 | Sensor visibility requirements / rules |
| E36:S02:T01–T03 | Sensor range calculation |
| E36:S03:T01–T03 | Ship visibility states |
| E36:S04:T01–T03 | Sensor overlay rendering |
| E36:S05:T01–T02 | HUD overlay toggle |
| E36:S06:T01–T11 | Restored scanner/sensor-report body-injected tasks |
| E36:S07:T01–T02 | Alliance relationship design |
| E36:S08:T01–T02 | Alliance data model |
| E36:S09:T01–T02 | Allied intel sharing |
| E36:S10:T01–T02 | Alliance management UI |

---

## Dropped duplicates (pass 3)

| Token | Canonical retained |
| ----- | ------------------- |
| E38:S07:T01–T07 | E33:S07 |
| E37:S09:T01–T02 | E34:S09 |
| E33:S12:T01–T05 | E34:S12 |
| E03:S06:T01 | E34:S06:T01 |
| E06:S02:T01 | E32:S02:T01 |

---

## Temporary holding (superseded)

`E01:S99` was used in pass 1–2 only. **Cleared in pass 3** — see [HOMELESS-TASK-AUDIT.md](HOMELESS-TASK-AUDIT.md) (historical).

---

## Unpadded legacy forms

| Alias | Canonical |
| ----- | --------- |
| E1:S1:T1 | E01:S02:T01 (post pass 3 perpetual) |
| E1:S99 | *(removed — pass 3 complete)* |
