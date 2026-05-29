---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E2:S15:T01 - IPW Docusaurus filing contract and backfill (BR-066)

**Task ID:** E2:S15:T01  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-04-14  
**Last updated:** 2026-05-16 (v0.2.15.1+2 – FR-042 Step 5 documentation deliverables added to IPW sequence)  
**Version:** v0.2.15.1+1  
**Version Anchor:** v0.2.15.1+1  
**Code:** E2S15T01

---

## Summary

Investigate and harden IPW behavior so planning/spec artifacts expected to be discoverable in Docusaurus are deterministically filed (or explicitly marked N/A), and backfill missing historical filings.

---

## Input

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [FR-042](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-077](../../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
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

---

## Documentation Publication

Publication Status: PUBLISHED
Publication N/A Reason: N/A

## Links

- [BR-066](../../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)
- [Story E2:S15](../Story-015-ipw-governance-and-publication-contract.md)
- [ICW E2:S15:T01 specification](../../../../../implementation-cycles/ICW-E2S15T01-specification.md)
- [ICW E2:S15:T01 test design](../../../../../implementation-cycles/ICW-E2S15T01-test-design.md)
- [ICW E2:S15:T01 implementation plan](../../../../../implementation-cycles/ICW-E2S15T01-implementation-plan.md)
- [IPW publication backfill inventory](../../../../../implementation-cycles/IPW-PUBLICATION-BACKFILL-INVENTORY.md)


## Verification Evidence

- Added validator: `packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py`.
- Added tests: `packages/frameworks/workflow mgt/scripts/validation/test_validate_ipw_publication_wiring.py`.
- Wired this task to `docs/implementation-cycles/ICW-E2S15T01-*` planning package.
