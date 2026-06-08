---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 4, Story 13: Kanban Board Enhancement - MoSCOW Prioritized Task View

**Status:** IN PROGRESS (T07 — UXR-012 state icons)
**Priority:** HIGH  
**Last updated:** 2025-12-17 (v0.4.13.6+2 – T06 complete: E04:S13:T06)
**Estimated Effort:** [TBD]  
**Started:** 2025-12-18  
**Completed:** 2025-12-17
**Version:** v0.4.13.6+2
**Code:** E4S13

---

## Task Checklist

- [x] **E04:S13:T01 – Design and implement MoSCOW prioritized task view in Kanban board** ✅ COMPLETE (v0.4.13.1+1)
  - Task: [`T01-kanban-board-moscow-prioritized-task-view`](story-13-kanban-board-moscow-prioritized-task-view/T01-kanban-board-moscow-prioritized-task-view.md)
  - Task: [`T01-kanban-board-moscow-prioritized-task-view.md`](story-13-kanban-board-moscow-prioritized-task-view/T01-kanban-board-moscow-prioritized-task-view.md)

- [x] **E04:S13:T02 – Update Kanban governance policy** ✅ COMPLETE (v0.4.13.2+1)
  - Task: [`T02-update-kanban-governance-policy`](story-13-kanban-board-moscow-prioritized-task-view/T02-update-kanban-governance-policy.md)
  - Task: [`T02-update-kanban-governance-policy.md`](story-13-kanban-board-moscow-prioritized-task-view/T02-update-kanban-governance-policy.md)

- [x] **E04:S13:T03 – Update Kanban board template** ✅ COMPLETE (v0.4.13.3+1)
  - Task: [`T03-update-kanban-board-template`](story-13-kanban-board-moscow-prioritized-task-view/T03-update-kanban-board-template.md)
  - Task: [`T03-update-kanban-board-template.md`](story-13-kanban-board-moscow-prioritized-task-view/T03-update-kanban-board-template.md)

- [x] **E04:S13:T04 – Assess system impacts** ✅ COMPLETE (v0.4.13.4+3)
  - Task: [`T04-assess-system-impacts`](story-13-kanban-board-moscow-prioritized-task-view/T04-assess-system-impacts.md)
  - Task: [`T04-assess-system-impacts.md`](story-13-kanban-board-moscow-prioritized-task-view/T04-assess-system-impacts.md)

- [x] **E04:S13:T05 – Update Kanban package** ✅ COMPLETE (v0.4.13.5+1)
  - Task: [`T05-update-kanban-package`](story-13-kanban-board-moscow-prioritized-task-view/T05-update-kanban-package.md)
  - Task: [`T05-update-kanban-package.md`](story-13-kanban-board-moscow-prioritized-task-view/T05-update-kanban-package.md)

- [x] **E04:S13:T06 – Update other affected packages** ✅ COMPLETE (v0.4.13.6+1)
  - Task: [`T06-update-other-affected-packages`](story-13-kanban-board-moscow-prioritized-task-view/T06-update-other-affected-packages.md)
  - Task: [`T06-update-other-affected-packages.md`](story-13-kanban-board-moscow-prioritized-task-view/T06-update-other-affected-packages.md)

- [x] **E04:S13:T07 – Kanban and FBU state icons for MoSCOW rows (UXR-012)** ✅ COMPLETE (v0.4.13.7+2) — [Task doc](story-13-kanban-board-moscow-prioritized-task-view/T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md) | [UXR-012](../../fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)

- [x] **E04:S13:T08 – Kanban task IN REVIEW / WAITING state icons (UXR-019)** ✅ COMPLETE (v0.4.13.8+1) — [Task doc](story-13-kanban-board-moscow-prioritized-task-view/T08-kanban-task-waiting-in-review-state-icons-uxr019.md) | [UXR-019](../../fr-br/UXR-019-kanban-task-waiting-in-review-state-icons.md) | [IPP](../../../implementation-cycles/IPP-E04S13T08-kanban-task-waiting-in-review-state-icons.md)

> **Format:** `E4:S13:Txx` (Epic 4, Story 13, Task with 2-digit zero padding)  
> **Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

---

## Overview

Enhance the Kanban board to be more useful by:
1. Serving as the parent document to Story docs (like how Story docs are parents of Task docs)
2. Adding MoSCOW prioritized sections of all in-progress tasks before the story checklist
3. Ordering tasks within each MoSCOW section chronologically (most recently updated at top)
4. Updating Kanban policy doc and Kanban board template
5. Assessing impact on other systems that interact with Kanban
6. After user verification, updating the Kanban package and affected packages

---

## Goals

- [ ] Enhance Kanban board structure to serve as parent doc to Story docs
- [ ] Implement MoSCOW prioritized task view (Must Have, Should Have, Could Have, Won't Have)
- [ ] Implement chronological ordering within MoSCOW sections (most recently updated first)
- [ ] Update Kanban governance policy to reflect new board structure
- [ ] Update Kanban board template in framework package
- [ ] Assess and document impact on other systems (RW, validators, etc.)
- [ ] Update Kanban package and affected packages after user verification

---

## Dependencies

**Depends On:**
- None

**Blocks:**
- None identified

**Blocked By:**
- None

**Parallel Development Candidacy:** Safe (documentation and structure changes)

---

## Related Work

**Related BR/FR Links:**
- User request for enhanced Kanban board functionality

**Related Tasks:**
- None

**Related Stories:**
- E4:S01 – Dev Kit Kanban Implementation (board structure foundation)
- E4:S04 – Kanban Structure Refactoring (previous structure changes)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.13.1+1)`)

**When Story is Complete:**
- Add forensic marker to Story document
- Add forensic marker to Epic checklist
- Update version file with story completion
- Update changelog with story completion

---

## Notes

This enhancement makes the Kanban board more functional and useful by:
- Providing a clear parent-child relationship (Board → Story → Task)
- Enabling quick prioritization view of in-progress work
- Supporting chronological task ordering for better workflow visibility

The implementation must:
- Maintain backward compatibility where possible
- Document all system impacts
- Wait for user verification before updating framework packages

---

## Completion Summary

**Story Status:** ✅ COMPLETE (v0.4.13.6+1)

**All Tasks Complete:**
- ✅ T01: Enhanced Kanban board with MoSCOW prioritized task view
- ✅ T02: Updated Kanban governance policy (canonical and local)
- ✅ T03: Created Kanban board template with MoSCOW structure
- ✅ T04: Assessed system impacts and fixed RW doc-init detection bug
- ✅ T05: Verified Kanban package updated (template and policy in place)
- ✅ T06: Verified all affected packages updated (RW package v2.1.2)

**Deliverables:**
- Enhanced Kanban board with MoSCOW prioritized task view
- Updated Kanban governance policy documents
- Kanban board template in framework package
- System impact assessment document
- RW doc-init detection bug fix (v2.1.2)
- All package updates verified and complete

---

## References

- `docs/kanban/kboard.md` - Current board structure
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Canonical policy
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Local policy
- `packages/frameworks/kanban/templates/` - Framework templates

