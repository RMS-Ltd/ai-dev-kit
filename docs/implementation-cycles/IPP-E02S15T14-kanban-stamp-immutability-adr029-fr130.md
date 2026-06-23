---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-12T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S15:T14 — Planning: Kanban Stamp Immutability ADR-029 (IPW)

**Host Task:** [T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md](../kanban/epics/epic-02/story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md) **(E02:S15:T14)**  
**Planning for:** [FR-130](../kanban/fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) · [ADR-029](../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md)  
**Status:** Approved (MWF Leg 1)

---

## 1. Requirements

ADR-029 mandates `non_substantive` as the framework default on all MoSCOW row stamp entrypoints; explicit `work_authoritative` / `--stamp-substantive` only for substantive task advancement. FR-130 implements ADR compliance checklist; predecessor FR-097 delivered validators and corpus-sweep defaults but left permissive function defaults.

## 2. Specification

**Goal:** Safe-by-default stamp pipeline — meta-work cannot append `now()` stamps unless caller opts in.

**In scope:** `update_kanban_docs.py` defaults, RW Step 7 `update_kanban_board` pipeline (`non_substantive`), report fallback strings, governance policy ADR-029 cross-link, regression tests, greenfield mirror.

**Out of scope:** Historical stamp re-backfill; new `normalize_board_row_timestamps.py` restoration.

### 2.4 Status transition intent

- **Start:** `TODO → IN PROGRESS` at IDW Step 1.
- **End:** `IN PROGRESS → COMPLETE` on RW release with AC evidence.

## 3. Test design

| ID | Check |
| -- | ----- |
| T1 | `test_default_evidence_mode_is_non_substantive` — default-args `enforce_moscow_row_timestamps_with_stats` skips append |
| T2 | `test_apply_pipeline_default_is_non_substantive` — default-args pipeline skips append |
| T3 | Existing `test_stamp_evidence_gate.py` suite remains green (explicit `work_authoritative` cases unchanged) |
| T4 | `python test_stamp_evidence_gate.py` standalone + CI pytest path |

## 4. Implementation plan

| Step | Action |
| ---- | ------ |
| **1** | Transition E02:S15:T14 `TODO → IN PROGRESS` |
| 2 | Flip defaults: `enforce_moscow_row_timestamps_with_stats`, `apply_canonical_row_transform_pipeline` → `EVIDENCE_MODE_NON_SUBSTANTIVE` |
| 3 | Update docstrings + `FourSurfaceReport` fallback default string |
| 4 | RW Step 7 `update_kanban_board`: pass `evidence_mode=NON_SUBSTANTIVE` explicitly (document contract) |
| 5 | Add T1–T2 tests; run test suite |
| 6 | Update `kanban-governance-policy.md` (ADR-029, default semantics) |
| 7 | Update ADR-029 compliance table → Done |
| 8 | `sync_greenfield_install.py` + commit mirror |
| **N** | Reconcile task/FR/kboard status on RW; mark COMPLETE |

## 5. Documentation deliverables

| Doc | Action |
| --- | ------ |
| kanban-governance-policy.md | UPDATE ADR-029 + default invariant |
| ADR-029 compliance table | UPDATE |
| board-stamp-authority.md | UPDATE default layer note (if present) |
| FR-130, T14, kboard | UPDATE on RW Step 7 |

## 6. Documentation housing

| Artifact | Path | Publication |
| -------- | ---- | ----------- |
| IPP | This file | PUBLISHED (maintainer) |
| Policy | `packages/frameworks/kanban/policies/kanban-governance-policy.md` | Packaged framework |

## 7. Success / verification criteria

- [x] AC1–AC6 per FR-130 and T14 task doc
- [x] `test_stamp_evidence_gate.py` green (10/10)
- [x] ADR-029 compliance checklist all **Done**

## References

- [FR-130](../kanban/fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)
- [ADR-029](../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md)
- [IPP-E02S15T08](IPP-E02S15T08-board-stamp-authority-forensic-timestamp-recovery.md)
