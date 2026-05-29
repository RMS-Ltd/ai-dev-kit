---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-09T11:20:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: UKW scope expansion to fbuboard with concurrency and temporal-drift controls

**Type:** Feature Request (FR)  
**ID:** FR-076  
**Submitted:** 2026-04-09  
**Submitted By:** RMS (AI Dev Kit)  
**Priority:** HIGH  
**Status:** COMPLETE (`v0.6.7.110+1` — `RW E6:S07:T110 --art`) — wired as Bucket-D6 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  

**Implementing Task:** [E6:S07:T110](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T110-ukw-fbuboard-scope-and-drift-concurrency-controls.md)

> **Predecessor of FR-092 (2026-04-27):** FR-076 expanded UKW to fbuboard scope with concurrency / drift controls. FR-092 (Wave 4) shares the divergence/drift framework and corpus-level normalization model. FR-076 remains valid as historical predecessor.

**Related:** [FR-050](./FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md); [E6:S07:T108](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T108-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md); [E2:S16:T03](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)

---

## Summary

Upgrade UKW so `fbuboard.md` ("fbuboard") is first-class in scope, and enforce the same active-row integrity protections recently applied manually: stale completed-row pruning, timestamp normalization, concurrency-safe update order, and temporal-drift detection/resolution.

---

## Problem

UKW currently treats fbuboard synchronization as partial/inconsistent compared to kanban board handling. In practice, active MoSCOW sections can drift from source FR/BR/UXR statuses, especially after overlapping RW/UKW activity. This causes:

- stale completed/implemented/fixed items to remain in active sections,
- row timestamps to diverge from board metadata,
- nondeterministic outcomes when concurrent updates touch the same board files.

---

## Proposed solution

Extend UKW documentation, execution logic, and validation behavior so fbuboard receives the same integrity workflow already expected for kanban board sync:

1. Include fbuboard in UKW default scope (not best-effort only).
2. Add a deterministic stale-row audit/removal pass for active MoSCOW sections.
3. Add concurrency-safe ordering and conflict-aware reconciliation semantics.
4. Add temporal-drift checks for board-level metadata vs row-level timestamps.
5. Emit explicit resolution logs (what was removed/normalized and why).

---

## Requirements

- **FR-076:R01 (Scope):** UKW comprehensive runs must include `fbuboard.md` synchronization and cleanup as a required step.
- **FR-076:R02 (Stale Active Rows):** Remove active rows whose linked FR/BR/UXR doc status is terminal (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`), with documented exceptions where status text explicitly indicates unresolved product verification.
- **FR-076:R03 (Concurrency Guard):** UKW must use deterministic read/check/write sequencing and conflict-aware revalidation before final write when board files changed during the run.
- **FR-076:R04 (Temporal Drift Check):** Validate and normalize `Last Updated`/row timestamp consistency to avoid stale metadata after sync.
- **FR-076:R05 (Forensic Traceability):** UKW output must report audited rows, removals, exceptions kept active, and normalized timestamps.
- **FR-076:R06 (Policy/Docs):** Update UKW execution docs and workflow guidance to define fbuboard parity expectations and reconciliation rules.

---

## Acceptance criteria

- [x] UKW comprehensive run updates fbuboard in the same pass as kanban board and reports both outcomes.
- [x] At least one regression case proves stale completed fbuboard rows are removed automatically.
- [x] Concurrency revalidation prevents stale writes when file content changes mid-run.
- [x] Temporal-drift check updates metadata deterministically and reports applied normalization.
- [x] UKW docs/rules clearly state fbuboard parity and integrity checks as required behavior.

## Implementation evidence

- Script behavior implemented in `update_kanban_docs.py`:
  - deterministic terminal-status pruning in active fbuboard sections,
  - exception guard for unresolved verification contexts,
  - header + row timestamp normalization,
  - pre-write revalidation/re-apply flow when file drift is detected.
- Regression test added and passing:
  - `test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception` in `test_update_kanban_docs.py`.
- Documentation/rules updated:
  - `ukw-sync/SKILL.md`,
  - `update-kanban-workflow-agent-execution.md`,
  - `.cursorrules`.

---

## Out of scope

- Re-prioritizing all fbuboard items each run when no status drift exists.
- Rewriting historical `fbu-completed.md` entries beyond consistency fixes required by the new checks.

---

## References

- Board: [`fbuboard.md`](../fbuboard.md)
- UKW guide: [`update-kanban-workflow-agent-execution.md`](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/update-kanban-workflow-agent-execution.md)
- Governance: [`kanban-governance-policy.md`](../../rituals/policy/kanban-governance-policy.md)
