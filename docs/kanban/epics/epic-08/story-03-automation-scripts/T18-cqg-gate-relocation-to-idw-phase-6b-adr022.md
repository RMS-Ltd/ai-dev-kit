---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-08T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 16, Task 23: CQG gate relocation to IDW Phase 6b — ADR-022 v0.0.2

**Task ID:** E08:S03:T18
**Historical Anchor:** E02:S16:T23  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-06-08  
**Last updated:** 2026-06-08 (RW v0.2.16.23+1)  
**Version Anchor:** v0.2.16.23+1  
**Code:** E08S03T18  

✅ COMPLETE (v0.2.16.23+1)

Publication Status: PUBLISHED  

**Upstream:** [ADR-022 v0.0.2 — Local Code Quality Gate architecture](../../../../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md) (operator directive) · [FR-113](../../../fr-br/FR-113-local-code-quality-gate-cqg.md) · [FR-118](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md) · follow-on to [E02:S16:T22](T22-implementation-delivery-workflow-idw-fr118.md) · [E08:S03:T17](../../epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)

---

## Input

- Operator directive (2026-06-08): local CodeQL (CQG) belongs at **IDW Phase 6b**, not RW Step 9 — RW owns release surfaces only.
- [ADR-022 v0.0.2](../../../../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [T22 — IDW delivery](T22-implementation-delivery-workflow-idw-fr118.md)
- [T17 — CQG engine](../../epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)

---

## Problem statement

CQG was wired to **RW Step 9** (advisory) when IDW did not exist. With IDW formalized (FR-118 / T22), implementation quality gates — including local CodeQL — should run at **implementation verify** time, not at release packaging. RW Step **9.7** Actions CI parity remains the ship gate; CQG ≠ CI (FR-112).

---

## Deliverable

- **ADR-022** revised to v0.0.2 (trigger matrix: IDW Phase 6b, not RW).
- **`validate_code_quality_gate.py`** — IDW adapter: `--strict` default, `--skip` for docs-only; missing CodeQL fails in IDW.
- **`code_quality_gate` config** — `idw_threshold` / `idw_advisory: false` in `rw-config.yaml` (legacy `rw_*` keys read for compat).
- **IDW SoT** — `.claude/commands/idw.md` Phase 6b, agent execution guide, `idw-workflow.yaml`, `idw-config.yaml`.
- **RW SoT** — CQG removed from Step 9 validator list; Step 9.7 boundary notes updated.
- **Operator / adopter docs** — cheatsheet §4b, operator guide, `rw-config-schema.md`, `rw-validators-consumer-layout.md`.
- **FR-113 / T17** trigger model rows updated.
- **greenfield-install** packaged paths mirrored.
- **Tests** — `test_code_quality_validator.py` (strict, advisory, skip, legacy keys).

---

## Acceptance criteria

- [x] **AC1:** CQG runs at IDW Phase 6b (`--strict` when Python in scope); RW does not invoke CQG.
- [x] **AC2:** `idw_advisory: false` default; `--skip` for docs-only IDW paths.
- [x] **AC3:** ADR-022 v0.0.2 + FR-113 / T17 trigger tables aligned.
- [x] **AC4:** CQG pytest suite green.
- [x] **AC5:** RW release with version anchor on this task (operator).

---

## References

- [ADR-022](../../../../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [FR-113](../../../fr-br/FR-113-local-code-quality-gate-cqg.md)
- [FR-118](../../../fr-br/FR-119-implementation-delivery-workflow-idw.md)
- [CQG operator guide](../../../../../../packages/frameworks/tooling-automation/docs/code-quality-gate-operator-guide.md)
- [Workflow initiation cheatsheet](../../../../../guides/workflow-initiation-cheatsheet.md)
