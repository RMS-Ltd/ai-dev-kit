# Changelog v0.6.1.38+3

**Release Date:** 2026-05-17
**Internal Version:** 0.6.1.38+3
**SemVer:** 0.4.787+3
**Epic:** E6 — AI Dev Kit Implementation Analysis and Package Management
**Story:** S01 — BR/FR/UXR Repository
**Task:** T38 — UKW completed tasks not removed from kboard (BR-072)

---

## Summary

BR-072 reopened: E2:S07:T01 and E2:S07:T05 found showing as TODO on kboard despite COMPLETE inline status in story doc. Root cause identified: UKW does not scan story documents for embedded task statuses, leaving inline tasks permanently stale on the board.

---

## Changes

### BR-072 — UKW Completed Tasks Not Removed from Kboard (REOPENED)

- **Status:** RESOLVED → REOPENED (2026-05-16)
- **Recurrence:** E2:S07:T01 (COMPLETE v0.2.7.1+0) and E2:S07:T05 (COMPLETE v0.2.7.5+1) showing as TODO on kboard in Could Have section
- **Root Cause:** UKW Step 3 only processes standalone task documents (`T{task}-*.md` pattern); tasks embedded inline in story docs (e.g., E2:S07:T01-T08) are invisible to UKW
- **New AC7 added:** UKW must either detect inline task statuses in story docs or explicit policy must document them as out-of-scope with alternative governance

### Kanban Board (kboard.md)

- Removed E2:S07:T01 and E2:S07:T05 from Could Have section
- Board Last Updated → 2026-05-16
- Version → v0.2.16.4+8

### FBU Board (fbuboard.md)

- Added BR-072 to Must Have section (REOPENED, HIGH priority)
- Board Last Updated → 2026-05-16
- Version Context → v0.2.16.4+8 (SemVer v0.4.786+2)

### Task Doc (E6:S01:T38)

- No changes — task remains COMPLETE at v0.6.1.38+2

### Story Doc (E2:S16)

- Last updated and version bumped to reflect BR-072 reopening

---

## Verification

- [x] E2:S07:T01 removed from kboard Could Have
- [x] E2:S07:T05 removed from kboard Could Have
- [x] BR-072 added to fbuboard Must Have
- [x] BR-072 status updated to REOPENED with recurrence details

---

## References

- Task: [E6:S01:T38](../../../project-management/kanban/epics/Epic-6/Story-001-br-repo/T38-ukw-completed-tasks-not-removed-from-kboard-br072.md)
- BR-072: [BR-072](../../../project-management/kanban/fr-br/BR-072-ukw-completed-tasks-not-removed-from-kboard.md)
- Perpetual task: [E2:S16:T04](../../../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
