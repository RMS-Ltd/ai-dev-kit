---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T15:02:00Z
expires_at: null
housekeeping_policy: keep
---

# User Experience Research: Kanban MoSCOW Row Last-Modified UTC Stamp

**Type:** User Experience Research (UXR)  
**Submitted:** 2026-04-02  
**Submitted By:** User (request); intake filed after initial board work  
**Priority:** HIGH  
**Status:** ACCEPTED — implementation **E6:S06:T61** (registry **E7:S00:T06**); **RW** **v0.6.6.61+1** (**SemVer** **v0.4.702+1**) 2026-04-02 — wired as Bucket-D7 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) (forensic semantics owned by [UXR-009](UXR-009-last-modified-stamp-forensic-integrity-and-drift-protection.md))  
**GitHub Issue:** _TBD_  
**Repository Task:** [E7:S00:T06](../epics/Epic-7/Story-000-uxr-repo/T06-uxr-006-repository-anchor.md)

**Implementation Task:** [E6:S06:T61](../epics/Epic-6/Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md)

> **Predecessor of FR-092 (2026-04-27):** UXR-006 introduced the surface convention `| Last modified: YYYY-MM-DD HH:MM UTC` on MoSCOW rows. FR-092 (Wave 6, gating UXR-009) extends this to the **forensic semantics** layer (work-evidence gate at write boundary). UXR-006 remains valid as the surface-convention predecessor; the AC4 residual is owned by UXR-009 + FR-092 Wave 6.

---

## Summary

Prioritized rows on `kboard.md` and `fbuboard.md` lacked a consistent, human-readable **last touched** signal at the end of each MoSCOW line. That made it harder to run **drift checks** (board vs linked task/intake docs) and to plan **IPW** / workflow steps with confidence. This UXR requires a **final pipe-delimited field** on each such row: `| Last modified: YYYY-MM-DD HH:MM UTC`, documented in `kanban-board-guide.md`, with a clear rule for git-derived vs manual refresh when rows change.

---

## Research Objective

**Primary question:** How can maintain quickly see whether a MoSCOW row still matches the “freshness” of its linked markdown SoT?

**Secondary questions:**

1. Should the stamp reflect the linked doc’s **git** history, the board row edit, or both conventions?
2. What guidance do **UKW** and **RW Step 7** need so stamps stay honest after scoped updates?

---

## Methodology

Heuristic review of board structure, FR-051 parity between boards, and planning needs for IPW (implementation package workflow) ahead of workflow execution.

---

## Key Findings

1. **Drift visibility:** Without a row-level timestamp, comparing board intent to doc history requires manual git spelunking per link.
2. **Consistency:** The same trailing-field pattern on **both** boards keeps FR/BR/UXR intake and task MoSCOW comparable.
3. **Process gap:** Stamps must be **refreshed** when only the board line changes; otherwise drift checks falsely trust stale UTC.

---

## Recommendations

1. Keep the **pipe-delimited** `Last modified` field as the **last** segment on each open MoSCOW row (tasks board + FR/BR/UXR board).
2. **Prefer** UTC time from `git` on the first resolvable linked `.md`; **fallback** to explicit board refresh time when needed.
3. Document the convention in **`kanban-board-guide.md`** and short **Notes** on both boards.
4. **Optional follow-up:** Check in a small script or validator to re-derive stamps for CI drift checks.

---

## Acceptance Criteria

- [x] AC-1: MoSCOW sections on `kboard.md` include the trailing `Last modified` field on prioritized rows (per guide).
- [x] AC-2: MoSCOW sections on `fbuboard.md` include the same field on open prioritized rows.
- [x] AC-3: `kanban-board-guide.md` documents meaning, derivation, and UKW/RW Step 7 refresh behavior.
- [ ] AC-4: Optional — repo-maintained script or check to regenerate or verify stamps for drift detection.
- [x] AC-5: KG-R2 intake complete — **UXR-006** ↔ **E7:S00:T06** ↔ **E6:S06:T61** with board rows and story checklists updated.

---

## Dependencies

**Related:**

- [UXR-005](UXR-005-kanban-board-formatting-and-governance.md) (board readability / governance).
- IPW and planning artifacts that compare board state to task docs.

**Blocked by:** None.

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2026-04-02  
**Intake By:** AI Agent (Cursor) — corrects earlier session that updated boards without filing this UXR first.

**Assigned To:**

- Registry: **E7:S00:T06**  
- Implementation: **E6:S06:T61** (Epic 6 Story 6 — feature requests / board behavior)

**Kanban links:**

- UXR: [UXR-006](UXR-006-kanban-moscow-row-last-modified-utc-stamp.md)  
- Registry task: [T06](../epics/Epic-7/Story-000-uxr-repo/T06-uxr-006-repository-anchor.md)  
- Implementation task: [T61](../epics/Epic-6/Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md)  
- Story: [Story-006-feature-requests](../epics/Epic-6/Story-006-feature-requests.md) · [Story-000-uxr-repo](../epics/Epic-7/Story-000-uxr-repo.md)

---

## References

- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`
- `docs/project-management/kanban/kanban-board-guide.md`
