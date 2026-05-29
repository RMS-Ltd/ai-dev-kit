---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-20T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 15, Task 8: Board stamp authority and forensic timestamp recovery (FR-097)

**Task ID:** E2:S15:T08  
**Status:** ✅ COMPLETE (v0.2.15.8+2)  
**Priority:** CRITICAL  
**Estimated Effort:** Large (multi-wave; validator + pipeline + backfill)  
**Created:** 2026-05-20  
**Last updated:** 2026-05-20 (implementation delivered; pending `RW E2:S15:T08` for version anchor)  
**Code:** E2S15T08

**Upstream:** [FR-097 — Board stamp authority, blocking validation, and forensic timestamp recovery](../../../fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md)

**Planning artifact (IPP):** [IPP-E2S15T08 — Board stamp authority and forensic timestamp recovery](../../../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)

**Reopens closure for:**

- [BR-069](../../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) — [E2:S15:T04](T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md) (historical delivery retained; forensic truth owned here)
- [UXR-009](../../../fr-br/UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md) — [E6:S07:T115](../../Epic-6/Story-007-adk-implementation-analysis-and-package-management/T115-last-modified-stamp-forensic-integrity-guardrails.md) (Wave 6 script gate retained; agentic + backfill owned here)

**Predecessor:** [E2:S15:T07](T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) / [FR-092](../../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)

---

## Input

- [IPP-E2S15T08](../../../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)

- User report: mass-identical `Last modified` on `fbuboard.md` (~61× `2026-04-20 15:52 UTC`) destroys staleness signal.
- Confirmed conflict: UKW guides mandate row temporal-drift normalization while FR-092 Wave 6 forbids synthetic stamp churn on hygiene paths.
- Confirmed script gap: `_cleanup_fbuboard_active_rows` appends stamps without evidence gate.
- User decisions: **automatic backfill**, **abort** on un evidenced stamp changes, **validator script first** (optional agent skill later).

---

## Problem statement

Forensic row stamps are a primary signal for workload and staleness. Board-hygiene and agentic UKW passes have homogenized stamps without substantive linked-record changes. FR-092 prevented *new* synthetic churn in `non_substantive` corpus sweep but did not restore truthful per-row history or block agentic/manual stamp rewrites at the write boundary.

---

## Deliverable

| Wave | Deliverable |
| ---- | ----------- |
| 1 | Policy/docs: remove row-level stamp unification; codify STRUCTURE vs CONTENT |
| 2 | `validate_board_stamp_diff.py` — blocking stamp authority gate |
| 3 | Pipeline: `_cleanup_fbuboard_active_rows` + UKW/RW paths evidence-safe |
| 4 | `backfill_board_row_stamps.py` — automatic linked-doc + git recovery |
| 5 | (Optional) `board-stamp-authority` skill stub + activation criteria |
| 6 | Re-close BR-069 + UXR-009 with live proof |

---

## Acceptance Criteria

- [x] **AC1:** UKW/RW guides and `kanban-governance-policy.md` aligned with Board Stamp Authority (no row unify on hygiene).
- [x] **AC2:** Blocking validator integrated; UKW/RW **abort** when stamp delta lacks evidence (see `board-stamp-authority.md`).
- [x] **AC3:** Fbuboard cleanup path cannot append `now()` stamps on hygiene runs (`non_substantive`; tests green).
- [x] **AC4:** Automatic backfill — 71 rows changed; [fr097-backfill-report.json](../../../../../docs/changelog-and-release-notes/changelog-archive/four-surface-reports/fr097-backfill-report.json).
- [x] **AC5:** Gate 8 homogeneity PASS post-backfill; stamp-diff validator + tests shipped.
- [x] **AC6:** BR-069 + UXR-009 CLOSED on `RW E2:S15:T08` release (v0.2.15.8+1).
- [x] **AC7 (optional):** Agent skill NONE — validator + snapshot sufficient (IPP §4.2).

---

## References

- [IPP-E2S15T04](../../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md) (historical)
- [IPP-E2S15T07](../../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md) (Wave 6 stamp gate)
