---
lifecycle: proposed
ttl_days: null
created_at: 2026-07-01T19:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-144: Board timestamp carry-forward — UKW and KMA Step 4

**Type:** Feature Request (FR)  
**ID:** FR-144  
**Submitted:** 2026-07-01  
**Submitted By:** Maintainer (SBL attempt 12 intake / [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88))  
**Priority:** MEDIUM (Could Have — MoSCOW **C** until synthesise wave)  
**Status:** IMPLEMENTED @ v0.6.9.45+1 — **verified** 2026-07-01 (operator; K-02 fixture pytest + validators)

**Implementing Task:** [E06:S09:T45](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T45-board-timestamp-carry-forward-fr144.md) @ **v0.6.9.45+1**

**Related:** [FR-130](FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) · [ADR-029](../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) · [E02:S15:T14](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md) · [E06:S09:T43](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md)

**Evidence:** [FB-ADK-K02](../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md) · SBL `restore_board_timestamps.py` workaround

---

## Summary

After greenfield install, **UKW** bulk-stamped `Last modified:` with session date on all `kboard.md` rows, flattening forensic ordering before KMA Step 4. Kit should **carry forward** temporal metadata from legacy corpus (or semantic lineage map) instead of defaulting to session UTC.

---

## Problem statement

Attempt 12 UKW populated MoSCOW rows correctly but stamped **2026-06-30** on 19/20 rows. Legacy open rows lacked `Last modified:`; ~739 timestamp signals in story headers and changelog archive were unused. ID namespace remap (legacy E15 → v4 E01/E02) blocks naive token equality lookup.

---

## Requirements

### Functional

- [x] **FR-144-F1:** UKW Step 6 — forbid bulk `Last modified:` = session date when legacy root or timestamp index exists; run restoration report first.
- [x] **FR-144-F2:** KMA Step 4 — invoke timestamp restoration (or kit equivalent) before `kboard.md` rebuild.
- [x] **FR-144-F3:** `discover_board_gaps.py` optional Part (c): flag rows where all dates are identical (homogeneity advisory).
- [x] **FR-144-F4:** KMA ingest emits `timestamp-index.json` alongside `kma-ingest.json`.
- [x] **FR-144-F5:** Step 4 validation gate: flat-date board fails or warns when legacy corpus available.

### Non-functional

- [x] **FR-144-NF1:** Align with FR-130 / ADR-029 — substantive work only; no batch round-hour buckets.
- [x] **FR-144-NF2:** Semantic lineage map contract for bootstrap `E:S:T` → legacy predecessor (adopter-supplied YAML).

---

## Acceptance criteria

- [x] **AC1:** UKW on brownfield/guided path does not flatten all row stamps to session date when legacy index non-empty.
- [x] **AC2:** KMA Step 4 guide mandates timestamp carry-forward checklist row.
- [x] **AC3:** Validator or scorer flags boards with ≥3 identical `Last modified:` stamps post-UKW (extends FR-097 hygiene).
- [x] **AC4:** SBL attempt 12 K-02 cross-linked; reference SBL tool pattern documented for kit port.

---

## Out of scope (v1)

- Full automated semantic lineage inference (adopter supplies bootstrap map)
- Retroactive repair of already-synthesised boards (adopter tooling only)
