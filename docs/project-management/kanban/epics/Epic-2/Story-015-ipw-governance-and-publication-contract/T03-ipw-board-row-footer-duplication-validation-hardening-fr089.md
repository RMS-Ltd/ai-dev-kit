---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-21T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 3: IPW board-row traceability-churn hardening (FR-089)

**Task ID:** E2:S15:T03  
**Status:** ✅ COMPLETE  
**Priority:** CRITICAL  
**Estimated Effort:** Medium  
**Created:** 2026-04-21  
**Completed:** 2026-04-21  
**Last updated:** 2026-04-21 (v0.2.15.3+2 — governance alignment RW; FR-089 IMPLEMENTED)  
**Code:** E2S15T03

**Upstream:** [FR-089 - IPW board-row traceability-churn hardening](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
**IPP:** [IPP-E2S15T03](../../../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

---

## Input

- User report and evidence of repeated appended row footers on `kboard.md` and `fbuboard.md`.
- Existing IPW governance baseline in Story 015 (`T01`, `T02`) and FR-084 ownership contract.
- Current board mutation/validation surfaces in workflow scripts.

---

## Problem statement

IPW governance currently does not explicitly validate row-tail uniqueness, allowing both duplicated footer segments (`| ... | Last modified ...`) and task-ID multiplication (`| [E#:S#:T#] | ...`) to accumulate on rows and degrade board integrity.

---

## Deliverable

- IPW governance/spec update that defines canonical row-tail grammar and traceability-churn prohibition (duplicate footers + task-ID multiplication).
- Validation contract updates for detecting duplicated appended footer segments and repeated task-ID link segments.
- Documentation updates that make this check mandatory in IPW governance verification.

---

## Scope

1. Define canonical row-tail grammar for both `kboard` and `fbuboard`.
2. Define duplicate-footer and task-ID multiplication detection rules plus reporting contract.
3. Define reconciliation expectations for already-corrupted rows, including dual-agreement divergence behavior.
4. Wire FR/task/story/board references.

---

## Acceptance criteria

- [x] **AC1:** Story 015 governance docs include explicit duplicate-footer prohibition.
- [x] **AC2:** Validation contract for duplicated footer segments is documented and testable.
- [x] **AC3:** Output/reporting fields for duplicate-footer detection are specified.
- [x] **AC3b:** Task-ID multiplication anti-pattern detection and single-instance task-ID invariants are documented and testable.
- [x] **AC4:** FR-089 and E2:S15:T03 are wired in Story 015 and active boards.

---

## References

- [FR-089](../../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [Story 015](../Story-015-ipw-governance-and-publication-contract.md)
- [T02](T02-ipp-post-run-governance-reconciliation-ownership-fr084.md)
- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [IPP-E2S15T03](../../../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)
