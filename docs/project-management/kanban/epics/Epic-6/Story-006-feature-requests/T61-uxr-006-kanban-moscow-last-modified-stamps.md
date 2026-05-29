---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-02T15:02:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 6, Task 61: UXR-006 — MoSCOW row last-modified UTC stamps

**Task ID:** E6:S06:T61  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Small  
**Created:** 2026-04-02  
**Last updated:** 2026-04-02 — **RW** v0.6.6.61+1 (SemVer **v0.4.702+1**); intent guard **T61** with `--confirmed-override` (prior `version.py` **T57**)  
**Version:** v0.6.6.61+1  
**Code:** E6S06T61

**Upstream:** [UXR-006 — Kanban MoSCOW row last-modified UTC stamp](../../../fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md)

**Registry:** [E7:S00:T06](../../Epic-7/Story-000-uxr-repo/T06-uxr-006-repository-anchor.md)

---

## Input

- [UXR-006](../../../fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md) (acceptance criteria and recommendations).
- `kboard.md`, `fbuboard.md`, `kanban-board-guide.md`.

---

## Scope

1. Ensure every **open MoSCOW** line on the task board and FR/BR/UXR board ends with  
   `| Last modified: YYYY-MM-DD HH:MM UTC` (final pipe segment).
2. Document derivation (git on first linked `.md` vs manual refresh) and UKW / RW Step 7 expectations.
3. Optional: add repeatable tooling under `scripts/` or workflow framework for drift checks (**AC-4**).

---

## Deliverable

- Board rows and guide aligned with UXR **AC-1–AC-3** and **AC-5**.  
- Optional **AC-4** tracked as follow-up in UXR checklist if not done in this task.

---

## Acceptance Criteria

- [x] **AC1:** Task board MoSCOW rows carry the `Last modified` field as specified in the guide.  
- [x] **AC2:** FR/BR/UXR board MoSCOW rows carry the same field.  
- [x] **AC3:** `kanban-board-guide.md` includes the MoSCOW `Last modified` subsection.  
- [ ] **AC4:** (Optional) Script or validator checked in and referenced from guide or UXR.  
- [x] **AC5:** Intake: UXR ↔ this task ↔ **E7:S00:T06**; story checklist and boards list **E6:S06:T61**.

---

## Dependencies

**Blocks:** None.  
**Blocked by:** None.

**Related:** [UXR-005](../../../fr-br/UXR-005-kanban-board-formatting-and-governance.md) (board governance).
