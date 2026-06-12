---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-130: Kanban stamp immutability — ADR-029 framework defaults and workflow wiring

**Type:** Feature Request (FR)  
**ID:** FR-130  
**Submitted:** 2026-06-12  
**Submitted By:** Maintainer (SBL ADR adoption — [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md))  
**Priority:** HIGH (**Should Have** — MoSCOW **S**)  
**Status:** IMPLEMENTED (v0.2.15.14+1 — E02:S15:T14)

**Implementing Task:** [E02:S15:T14](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md)

**Related:** [ADR-029](../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) · [FR-097](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) · [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) · [ADR-009](../../architecture/standards-and-adrs/ADR-009-ukw-deep-reprioritization-rp-flag.md) · [E02:S15:T08](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) · [E06:S09:T26](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)

---

## Summary

Implement [ADR-029](../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md): elevate kanban MoSCOW row `| Last modified:` stamps to a **framework-wide invariant** — `non_substantive` as the default on all stamp entrypoints; explicit `work_authoritative` / `--stamp-substantive` only when an operation constitutes substantive task advancement.

FR-097 delivered validators, backfill, and corpus-sweep defaults; residual gap is **permissive function defaults** (`work_authoritative`) on `enforce_moscow_row_timestamps_with_stats` and `apply_canonical_row_transform_pipeline`, plus RW/UKW call sites that inherit those defaults without override.

---

## Problem statement

During SBL ADK install (attempt 06), board timestamps converged on "last script run" despite FR-097 policy. Root cause: no architectural invariant at the **default layer** — agents and scripts must remember to pass `non_substantive`; when they do not, stamps churn on meta-work (hygiene, migration, synthesis, MoSCOW reorder).

| Layer | FR-097 outcome | Residual gap (ADR-029) |
| ----- | -------------- | ---------------------- |
| Validators | `validate_board_stamp_diff.py` blocking in RW Step 9 / UKW | Must verify no advisory bypass remains |
| Corpus sweep | `run_corpus_canonical_sweep` defaults `non_substantive` | General stamp functions still default `work_authoritative` |
| Workflows | Step 7 reports show `work_authoritative` | RW/UKW must default `non_substantive`; substantive sub-step only on release-complete evidence |
| Migration | KMA / install paths | Must not fabricate `now()` row stamps |
| Policy | Board Stamp Authority in governance policy | Cross-link ADR-029; document `--stamp-substantive` ↔ `evidence_mode` mapping |

---

## Requirements

### Functional

- [x] **FR-130-F1:** `enforce_moscow_row_timestamps_with_stats` default `evidence_mode` → `non_substantive`.
- [x] **FR-130-F2:** `apply_canonical_row_transform_pipeline` default `evidence_mode` → `non_substantive`.
- [x] **FR-130-F3:** `enforce_moscow_row_timestamps` thin wrapper inherits safe default or requires explicit mode.
- [x] **FR-130-F4:** RW Step 7 and UKW board-touch paths invoke stamp operations in `non_substantive` by default; only release-scope task-complete sub-step passes `work_authoritative` with evidence manifest.
- [~] **FR-130-F5:** CLI `--stamp-substantive` deferred (no normalization entrypoint; use `evidence_mode=` API).
- [x] **FR-130-F6:** Migration / KMA / `install_kanban_framework.py` paths do not append `now()` row stamps.
- [x] **FR-130-F7:** `kanban-governance-policy.md` and workflow agent guides cross-link ADR-029 and document substantive vs meta-work invariant.

### Non-functional

- [ ] **FR-130-NF1:** `test_stamp_evidence_gate.py` extended — default-mode regression (no stamp append on hygiene fixture without explicit flag).
- [ ] **FR-130-NF2:** Greenfield install mirror synced per P-GREENFIELD-SYNC.
- [ ] **FR-130-NF3:** Adopter trickle-down verifiable — post-release, vendor pin shows `non_substantive` defaults in framework scripts.

---

## Acceptance criteria

- [x] **AC1:** Unit tests prove `enforce_moscow_row_timestamps_with_stats()` and `apply_canonical_row_transform_pipeline()` with default args preserve existing stamps and do not append on stampless hygiene rows.
- [x] **AC2:** RW Step 7 four-surface report defaults to `non_substantive`; `work_authoritative` appears only when release manifest documents substantive completion.
- [x] **AC3:** UKW comprehensive + bookkeeping runs produce zero un evidenced stamp deltas on homogenized fixture (validator green).
- [x] **AC4:** Migration/KMA install replay on SBL-style fixture: no synthetic row `now()` stamps.
- [x] **AC5:** `kanban-governance-policy.md` references ADR-029; ADR-029 compliance checklist items marked done.
- [x] **AC6:** `validate_board_stamp_diff.py` confirmed blocking (non-advisory) on all board-touching workflow validation steps.

---

## Scope analysis

**Problem domain:** Workflow management framework — kanban stamp authority defaults  
**Affected areas:**
- [x] `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- [x] RW / UKW agent execution guides and `.cursorrules` / `.claude/commands/`
- [x] `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- [x] Migration / install scripts (stamp prohibition)
- [ ] Docusaurus adopter-public (policy mirror only if packaged policy path changes)

**Estimated complexity:** Medium (1–2 weeks) — default flips + caller audit + tests + docs.

**Out of scope:** Re-backfill of historically wrong stamps (FR-097 Wave 4 / `backfill_board_row_stamps.py` remains separate).

---

## Dependencies

**Blocks:** Trustworthy staleness signal for adopters (SBL T26 closure evidence)

**Blocked by:** None (ADR-029 accepted)

**Related work:**
- [FR-097](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) — predecessor; ADR-029 supersedes permissive default edges
- [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) — RW Step 7 / UKW reconciliation
- [FR-127](FR-127-agentic-kanban-migration-agent-replace-tool-pipeline.md) — KMA migration stamp prohibition

---

## Intake decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-06-12  
**Intake By:** Intake Agent

**Decision flow:** Story match — Epic 2, Story 15 (IPW / kanban governance; successor to FR-097 T08) → Task 14

**Assigned to:**
- Epic: 2 — Workflow Management Framework
- Story: 15 — IPW Governance and Publication Contract
- Task: 14 — Kanban stamp immutability ADR-029 framework defaults (FR-130)
- Version: `0.2.15.14+1` (on first RW)

**Kanban links:**
- Epic: [`epic-02.md`](../epics/epic-02/epic-02.md)
- Story: [`story-15-ipw-governance-and-publication-contract.md`](../epics/epic-02/story-15-ipw-governance-and-publication-contract.md)
- Task: [`T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md`](../epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md)

---

## References

- [ADR-029: Kanban stamp immutability](../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md)
- [FR-097: Board stamp authority](FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)
- [update_kanban_docs.py — EVIDENCE_MODE_*](../../../packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py)
- [test_stamp_evidence_gate.py](../../../packages/frameworks/workflow-mgt/scripts/test_stamp_evidence_gate.py)
