---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T45 — Board timestamp carry-forward (FR-144 / K-02)

**Task ID:** E06:S09:T45  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-07-01  
**Last updated:** 2026-07-01 (verification closure — UKW -c)  
**Version:** v0.6.9.45+1  
**Version Anchor:** v0.6.9.45+1  
**Code:** E06S09T45

**Planning:** [IPP-E06S09T45](../../../implementation-cycles/IPP-E06S09T45-board-timestamp-carry-forward-fr144.md)

**Parent intake:** [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)

**Upstream:** [FR-144](../../../fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md) · [FR-130](../../../fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)

**Evidence:** [FB-ADK-K02](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md)

---

## Summary

Implement **FR-144**: UKW and KMA Step 4 carry-forward of board `Last modified:` stamps from legacy corpus / semantic lineage map instead of bulk session-date stamping (SBL attempt 12 / K-02).

---

## Scope

Prevent UKW/KMA from flattening board `Last modified:` stamps to session UTC when a legacy timestamp index exists.

---

## Input

- [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) routing K-02 → FR-144
- [FB-ADK-K02](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md)
- [FR-130](../../../fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)
- [IPP-E06S09T45](../../../implementation-cycles/IPP-E06S09T45-board-timestamp-carry-forward-fr144.md)

---

## Deliverable

| # | Artifact |
|---|----------|
| 1 | `timestamp_index.py` + `restore_board_timestamps.py` |
| 2 | `kma_ingest.py --timestamp-index-out` |
| 3 | `discover_board_gaps.py` Part (c) homogeneity advisory |
| 4 | `validate_flat_date_board.py` |
| 5 | UKW Step 6 + KMA Step 4 documentation updates |

---

## Acceptance Criteria

- [x] **AC1:** UKW does not flatten all row stamps when legacy timestamp index non-empty.
- [x] **AC2:** KMA execution guide documents Step 4 timestamp carry-forward gate.
- [x] **AC3:** FR-144 requirements F1–F5 addressed or explicitly deferred with issue link.
- [x] **AC4:** RW release anchors E06:S09:T45.

---

## RW trigger

```
RW E06:S09:T45 --art
```

---

## Verification closure

**Verification closure (2026-07-01):** `pytest tests/kanban/test_timestamp_carry_forward_fr144.py` green. Timestamp index build (3 entries), `apply-board --dry-run` (3 changes), `validate_flat_date_board.py --strict` blocks flat fixture when index non-empty (expected). FR-144 **verified** on fixture path. V-band row archived @ `UKW -c`.
