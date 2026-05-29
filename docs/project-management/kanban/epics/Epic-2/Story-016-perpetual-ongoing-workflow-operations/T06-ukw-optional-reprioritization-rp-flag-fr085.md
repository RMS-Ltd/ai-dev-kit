---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-26T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 6: UKW optional reprioritization `--rp` flag (FR-085)

**Task ID:** E2:S16:T06  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Complex  
**Created:** 2026-04-26  
**Last updated:** 2026-04-26 (re-housed from E6:S07:T116 to canonical workflow-maintenance story)  
**Code:** E2S16T06

**Upstream:** [FR-085 - UKW optional reprioritization (`--rp`) with deep intent/dependency analysis](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
**Re-housed from:** E6:S07:T116 (legacy task doc removed after re-housing publication)

Publication Status: NOT_APPLICABLE
Publication N/A Reason: This re-housing task records governance/doc relocation and does not introduce a dedicated three-file specification/test-design/implementation-plan publication set.

---

## Input

- [FR-085](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md) requirements.
- Existing UKW baseline and ongoing ownership model in [E2:S16](../Story-016-perpetual-ongoing-workflow-operations.md).
- Current board surfaces: `kboard.md` and `fbuboard.md`.

---

## Problem statement

UKW lacks an explicit optional mode for deep reprioritization based on inferred intent, dependency chains, blocker status, and practical delivery importance. This limits systematic priority correction when project conditions drift.

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

- [ ] **AC1:** `--rp` mode is explicitly specified and default UKW behavior is unchanged when absent.
- [ ] **AC2:** Reprioritization criteria include intent inference, dependency discovery, blocker detection, and impact weighting.
- [ ] **AC3:** `kboard.md` and `fbuboard.md` updates are deterministic and stable under repeated identical runs.
- [ ] **AC4:** UKW emits per-change rationale for reordered/promoted/demoted items.
- [ ] **AC5:** FR-085 and E2:S16:T06 are bidirectionally linked and visible in active story/board tracking.

---

## References

- [FR-085](../../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)
- [Story 016](../Story-016-perpetual-ongoing-workflow-operations.md)
- [E2:S16:T03](./T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [E2:S16:T04](./T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
