---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:35:00Z
expires_at: null
housekeeping_policy: archive
---

# CHANGELOG v0.4.13.8+1 — UXR-019 IN REVIEW / WAITING MoSCOW state icons

**Release Date:** 2026-06-05 14:35:00 UTC  
**Epic:** 4 | **Story:** 13 | **Task:** 8  
**SemVer:** v0.4.884+1

---

## Summary

Extended UXR-012 MoSCOW state icons with task-board **`IN REVIEW`** (A1) and **`WAITING`** (B1) statuses, alias normalization in `state_icons.py`, governance/guide updates, and kboard backfill for sign-off-queue rows (**E04:S19:T11**, **E06:S09:T16**).

---

## Attempted Changes

### Framework

- **`state_icons.py`:** `IN_REVIEW` / `WAITING` map, longest-first aliases (`WAITING FOR SIGN-OFF`, `UNDER REVIEW`, …).
- **`test_state_icons.py`:** Coverage for inject, aliases, validator fixture.

### Documentation

- [UXR-019](../../project-management/kanban/fr-br/UXR-019-kanban-task-waiting-in-review-state-icons.md), [IPP-E04S13T08](../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md).
- `kanban-board-guide.md`, `kanban-governance-policy.md`, `state-icons.md`.

### Kanban (RW Step 7)

- **kboard:** E04:S19:T11, E06:S09:T16 → `WAITING` with hourglass icon.
- **E04:S13:T08** → COMPLETE; UXR-019 AC1–AC5 reconciled.

---

## References

- [T08](../../project-management/kanban/epics/epic-04/story-13-kanban-board-moscow-prioritized-task-view/T08-kanban-task-waiting-in-review-state-icons-uxr019.md)
- [UXR-012](../../project-management/kanban/fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)
