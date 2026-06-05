---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E02:S15:T01 - IPW Docusaurus filing contract and backfill (BR-066)

**Task ID:** E02:S15:T01  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-04-14  
**Last updated:** 2026-06-03 (v0.2.15.1+3 — Phase 3: audit-inventory 0 unwired, BR-066 RESOLVED)  
**Version:** v0.2.15.1+3  
**Version Anchor:** v0.2.15.1+3  
**Code:** E02S15T01

---

## Summary

Investigate and harden IPW behavior so planning/spec artifacts expected to be discoverable in Docusaurus are deterministically filed (or explicitly marked N/A), and backfill missing historical filings.

---

## Input

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [IPP E02:S15:T01 Phase 2 (BR-066 backfill)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [IPP E02:S15:T01 Phase 3 (BR-066 corpus tail)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- `docs/implementation-cycles/`
- `portal/` documentation surfaces and navigation wiring

---

## Deliverable

1. Explicit ownership contract for Docusaurus filing in IPW lifecycle.
2. Deterministic check(s) for "durable artifact exists but Docusaurus filing missing".
3. Recovery inventory and backfill plan for previously missed artifacts.
4. Updated docs and regression checks to prevent recurrence.

---

## Acceptance Criteria

- [x] Ownership and timing for Docusaurus filing are unambiguous across IPW/RW/docs.
- [x] At least one deterministic validation or audit path detects missing filing when applicable.
- [x] Backlog inventory identifies historical IPW artifacts that should be filed.
- [x] Guidance includes explicit "not applicable" path where filing is intentionally skipped.
- [x] Phase 2: bulk `--audit-inventory` mode, expanded tests, and inventory backlog wired from host task docs.
- [x] Phase 3: `--audit-inventory` → **0** unwired; BR-066 **RESOLVED** (**v0.2.15.1+3**).

---

## Planning artifacts (publication)

- [IPP E02:S15:T01 Phase 3 (BR-066 corpus tail)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [IPP E02:S15:T01 Phase 2 (BR-066 backfill)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [ICW E02:S15:T01 specification](../../../../../implementation-cycles/ICW-E2S15T01-test-design.md)
- [ICW E02:S15:T01 test design](../../../../../implementation-cycles/ICW-E2S15T01-test-design.md)
- [ICW E02:S15:T01 implementation plan](../../../../../implementation-cycles/ICW-E2S15T01-test-design.md)
- [IPW publication backfill inventory](../../../../../implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md)

---

## Documentation Publication

Publication Status: PUBLISHED  
Publication N/A Reason: N/A

## Links

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [Story E2:S15](../story-15-ipw-governance-and-publication-contract.md)
- [IPP E02:S15:T01 Phase 3 (BR-066 corpus tail)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [IPP E02:S15:T01 Phase 2 (BR-066)](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md)
- [IPW publication backfill inventory](../../../../../implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md)

## Verification Evidence

- Phase 1: `validate_ipw_publication_wiring.py` + `test_validate_ipw_publication_wiring.py` (4 tests).
- Phase 2 (2026-06-02):
  - Validator: `--audit-inventory`, disk-aware required kinds, `IPP-*` as implementation-plan.
  - Tests: 9 passing (`test_validate_ipw_publication_wiring.py`).
  - `python ".../validate_ipw_publication_wiring.py" --requested E02:S15:T01` → **PASS**
  - `python ".../validate_ipw_publication_wiring.py" --audit-inventory` → see inventory doc for post-backfill unwired count.
  - Targeted backfill: 16 historical inventory rows wired from host task docs / story anchors (see [IPW-PUBLICATION-BACKFILL-INVENTORY.md](../../../../../implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md)).
- Phase 3 (2026-06-03):
  - `--audit-inventory` → **0** unwired (114 scanned); relative-path repair on kanban host links.
  - [IPP Phase 3](../../../../../implementation-cycles/IPP-E02S15T01-br066-corpus-tail-phase3.md); BR-066 **RESOLVED**.
