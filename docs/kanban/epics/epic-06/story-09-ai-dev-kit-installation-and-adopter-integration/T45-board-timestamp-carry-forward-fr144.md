---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T45 — Board timestamp carry-forward (FR-144 / K-02)

**Task ID:** E06:S09:T45  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-07-01  
**Last updated:** 2026-07-01  
**Code:** E06S09T45

**Parent intake:** [E06:S09:T43](T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)

**Upstream:** [FR-144](../../../fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md) · [FR-130](../../../fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)

**Evidence:** [FB-ADK-K02](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md)

---

## Summary

Implement **FR-144**: UKW and KMA Step 4 carry-forward of board `Last modified:` stamps from legacy corpus / semantic lineage instead of bulk session-date stamping (SBL attempt 12 / K-02).

---

## Deliverables

| # | Deliverable |
|---|-------------|
| 1 | UKW Step 6 guard: no bulk session stamp when legacy index exists |
| 2 | KMA Step 4 checklist + optional kit restoration helper port |
| 3 | `timestamp-index.json` emit on KMA ingest |
| 4 | `discover_board_gaps.py` homogeneity advisory (Part c) |
| 5 | Validator for flat-date boards post-UKW |

---

## Acceptance criteria

- [ ] **AC1:** UKW does not flatten all row stamps when legacy timestamp index non-empty.
- [ ] **AC2:** KMA execution guide documents Step 4 timestamp carry-forward gate.
- [ ] **AC3:** FR-144 requirements F1–F5 addressed or explicitly deferred with issue link.
- [ ] **AC4:** RW release anchors E06:S09:T45.

---

## RW trigger

```
RW E06:S09:T45 --art
```
