---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T11:22:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 7, Task 110: UKW fbuboard scope + concurrency/temporal-drift controls

**Task ID:** E6:S07:T110  
**Status:** COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-09  
**Code:** E6S07T110

**Upstream:** [FR-076 – UKW scope expansion to fbuboard with concurrency and temporal-drift controls](../../../fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)

**Coordinates:** [E2:S16:T03](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (UKW perpetual), [FR-050](../../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md), [E6:S07:T108](T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)

---

## Input

- Current UKW behavior and documentation for FR/BR/UXR board handling.
- Recent manual cleanup procedure used to prune stale completed rows from active fbuboard MoSCOW sections.

## Deliverable

- UKW behavior and guidance updated so fbuboard receives parity treatment with deterministic stale-row pruning, concurrency-safe write flow, temporal-drift checks, and explicit reconciliation logs.

## Version Anchor

Forensic marker: RW `v0.6.7.110+1` — UKW fbuboard parity + drift/concurrency controls released.

---

## Scope

1. **fbuboard mandatory coverage:** UKW comprehensive mode includes `fbuboard.md` synchronization by default.
2. **Stale active-row pruning:** Remove active rows whose linked FR/BR/UXR doc is terminal (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`), with explicit keep-rules for unresolved product-validation exceptions.
3. **Concurrency control:** Add deterministic read-check-write order and pre-write revalidation when board file hashes/content change mid-run.
4. **Temporal drift normalization:** Align board metadata and row timestamp updates in one deterministic pass.
5. **Forensic reporting:** Emit a structured summary of audited rows, removals, exceptions, and metadata normalization.

---

## Acceptance Criteria

- [x] **AC1:** UKW comprehensive execution path includes required fbuboard sync step (documented and verifiable).
- [x] **AC2:** Regression case demonstrates stale completed rows in active fbuboard sections are auto-pruned.
- [x] **AC3:** Concurrency guard prevents stale writes when the board changes between audit and write.
- [x] **AC4:** Temporal-drift checks normalize board header and row timestamps deterministically.
- [x] **AC5:** UKW output/run notes include explicit reconciliation details for fbuboard changes.
- [x] **AC6:** FR-076 links and status remain consistent with task progress and resulting release artifacts.

---

## Evidence

- Implementation updates:
  - `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py`
  - `.cursor/skills/ukw-sync/SKILL.md`
  - `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md`
  - `.cursorrules`
  - `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py`
- Regression output:
  - `python3 "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py" --test-category 4`
  - Result: Tests 4.1, 4.2, 4.3 passed
- Dry-run verification:
  - `python3 "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --config rw-config.yaml --dry-run`
  - Result includes `fbuboard reconciliation: audited=68, removed=0, kept_exceptions=1, timestamps_normalized=68`
- Pending:
  - None

---

## References

- [FR-076](../../../fr-br/FR-076-ukw-fbuboard-scope-and-drift-concurrency-controls.md)
- [fbuboard.md](../../../fbuboard.md)
- [T101 UKW perpetual task](T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
