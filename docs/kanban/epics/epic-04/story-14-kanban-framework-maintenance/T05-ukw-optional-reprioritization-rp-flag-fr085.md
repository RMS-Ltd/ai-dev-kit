---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 6: UKW optional reprioritization `--rp` flag (FR-085)

**Task ID:** E04:S14:T05
**Historical Anchor:** E02:S16:T06  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Complex  
**Created:** 2026-04-26  
**Last updated:** 2026-05-30  
**Version Anchor:** v0.2.16.6+1  
**Code:** E04S14T05

✅ COMPLETE (v0.2.16.6+1)

**Upstream:** [FR-085 - UKW optional reprioritization (`--rp`) with deep intent/dependency analysis](../../../fbu/FR-085-ukw-optional-reprioritization-rp-flag.md)
**Re-housed from:** E06:S07:T116 (legacy task doc removed after re-housing publication)

**Planning package:** [`IPP-E2S16T6-ukw-rp-flag-fr085.md`](../../../../implementation-cycles/IPP-E04S14T05-ukw-rp-flag-fr085.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Consolidated IPP per [FR-042](../../../fbu/FR-042-implementation-planning-workflow-ipw.md) — [`IPP-E2S16T6`](../../../../implementation-cycles/IPP-E04S14T05-ukw-rp-flag-fr085.md); ICW trio not used.

---

## Input

- [FR-085](../../../fbu/FR-085-ukw-optional-reprioritization-rp-flag.md) requirements.
- [IPP-E2S16T6](../../../../implementation-cycles/IPP-E04S14T05-ukw-rp-flag-fr085.md) — IPW planning package (standalone `UKW --rp` contract).
- [ADR-009](../../../../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) — governance contract.
- Existing UKW baseline and ongoing ownership model in [E2:S16](../story-16-perpetual-ongoing-workflow-operations.md).
- [Workflow initiation cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md).

---

## Problem statement

UKW lacked an explicit optional mode for deep reprioritization based on inferred intent, dependency chains, blocker status, and practical delivery importance. This limited systematic priority correction when project conditions drift.

---

## Deliverable

- Optional UKW flag contract for `--rp` (`RePrioritise`).
- Deterministic reprioritization behavior and rationale reporting for changed priorities.
- Clear dependency/blocker-aware prioritization criteria across task + FR/BR/UXR surfaces.

---

## Scope

1. Define `--rp` activation contract and default-off behavior.
2. Define analysis model for intent/dependencies/blockers/importance.
3. Define deterministic priority movement + idempotency expectations.
4. Define audit output format for reprioritization rationale.

---

## Acceptance criteria

- [x] **AC1:** `--rp` mode is explicitly specified and default UKW behavior is unchanged when absent.
- [x] **AC2:** Reprioritization criteria include intent inference, dependency discovery, blocker detection, and impact weighting.
- [x] **AC3:** `kboard.md` updates are deterministic and stable under repeated identical runs (contract in ADR-009; operational idempotency verified on first `UKW --rp` run by operator).
- [x] **AC4:** UKW emits per-change rationale for reordered/promoted/demoted items (Step 9 template in agent SoT).
- [x] **AC5:** FR-085 and E04:S14:T05 are bidirectionally linked and visible in active story/board tracking.

---

## References

- [IPP-E2S16T6](../../../../implementation-cycles/IPP-E04S14T05-ukw-rp-flag-fr085.md)
- [ADR-009](../../../../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md)
- [FR-085](../../../fbu/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [Story 016](../story-16-perpetual-ongoing-workflow-operations.md)
- [E02:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [E02:S16:T04](T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
