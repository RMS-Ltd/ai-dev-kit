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
**Last updated:** 2025-12-17 (v0.4.13.6+2 – T06 complete: E4:S13:T06)
**Estimated Effort:** [TBD]  
**Started:** 2025-12-18  
**Completed:** 2025-12-17
**Version:** v0.4.13.6+2
**Code:** E4S13

---

## Task Checklist

- [x] **E4:S13:T01 – Design and implement MoSCOW prioritized task view in Kanban board** ✅ COMPLETE (v0.4.13.1+1)
  - Task: [`T01-kanban-board-moscow-prioritized-task-view.md`](Story-013-kanban-board-moscow-prioritized-task-view/T01-kanban-board-moscow-prioritized-task-view.md)

- [x] **E4:S13:T02 – Update Kanban governance policy** ✅ COMPLETE (v0.4.13.2+1)
  - Task: [`T02-update-kanban-governance-policy.md`](Story-013-kanban-board-moscow-prioritized-task-view/T02-update-kanban-governance-policy.md)

- [x] **E4:S13:T03 – Update Kanban board template** ✅ COMPLETE (v0.4.13.3+1)
  - Task: [`T03-update-kanban-board-template.md`](Story-013-kanban-board-moscow-prioritized-task-view/T03-update-kanban-board-template.md)

- [x] **E4:S13:T04 – Assess system impacts** ✅ COMPLETE (v0.4.13.4+3)
  - Task: [`T04-assess-system-impacts.md`](Story-013-kanban-board-moscow-prioritized-task-view/T04-assess-system-impacts.md)

- [x] **E4:S13:T05 – Update Kanban package** ✅ COMPLETE (v0.4.13.5+1)
  - Task: [`T05-update-kanban-package.md`](Story-013-kanban-board-moscow-prioritized-task-view/T05-update-kanban-package.md)

- [x] **E4:S13:T06 – Update other affected packages** ✅ COMPLETE (v0.4.13.6+1)
  - Task: [`T06-update-other-affected-packages.md`](Story-013-kanban-board-moscow-prioritized-task-view/T06-update-other-affected-packages.md)

- [ ] **E4:S13:T07 – Kanban and FBU state icons for MoSCOW rows (UXR-012)** - TODO (HIGH, canonical state→icon mapping; editorial pick among Sets A–D; kboard + fbuboard + UKW/RW) — [Task doc](Story-013-kanban-board-moscow-prioritized-task-view/T07-kanban-fbu-state-icons-for-moscow-rows-uxr012.md) | [UXR-012](../../../fr-br/UXR-012-kanban-fbu-state-icons-for-moscow-rows.md)

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

## Tasks

### E4:S13:T01 – Design and implement MoSCOW prioritized task view in Kanban board

**Input:** Current Kanban board structure, Kanban governance policy, user requirements  
**Deliverable:** Enhanced Kanban board with MoSCOW prioritized task view, updated policy and template, impact assessment document  
**Dependencies:** None  
**Blocker:** None  
**Parallel Development Candidacy:** Safe (documentation and structure changes)

**Status:** ✅ COMPLETE

**Task Document:** [`T01-kanban-board-moscow-prioritized-task-view.md`](Story-013-kanban-board-moscow-prioritized-task-view/T01-kanban-board-moscow-prioritized-task-view.md)

**Approach:**
1. Analyze current Kanban board structure (`kboard.md`)
2. Design new structure with MoSCOW sections before story checklist
3. Implement chronological ordering logic (most recently updated at top)
4. Update Kanban board document with new structure

---

### E4:S13:T02 – Update Kanban governance policy

**Input:** Enhanced Kanban board structure (T01), current Kanban governance policy  
**Deliverable:** Updated Kanban governance policy documents (canonical and local)  
**Dependencies:** T01  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Status:** ✅ COMPLETE

**Task Document:** [`T02-update-kanban-governance-policy.md`](Story-013-kanban-board-moscow-prioritized-task-view/T02-update-kanban-governance-policy.md)

**Approach:**
1. Review enhanced board structure from T01
2. Update canonical Kanban governance policy
3. Update local Kanban governance policy
4. Document MoSCOW priority levels and chronological ordering rules

---

### E4:S13:T03 – Update Kanban board template

**Input:** Enhanced Kanban board structure (T01), updated Kanban governance policy (T02)  
**Deliverable:** Updated Kanban board template in framework package  
**Dependencies:** T01, T02  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01 and T02)

**Status:** ✅ COMPLETE

**Task Document:** [`T03-update-kanban-board-template.md`](Story-013-kanban-board-moscow-prioritized-task-view/T03-update-kanban-board-template.md)

**Approach:**
1. Locate or create Kanban board template in framework package
2. Update template to include MoSCOW section structure
3. Include example format and usage instructions
4. Reference updated Kanban governance policy

---

### E4:S13:T04 – Assess system impacts

**Input:** Enhanced Kanban board structure (T01)  
**Deliverable:** System impact assessment document, RW doc-init detection bug fix  
**Dependencies:** T01  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on T01)

**Status:** ✅ COMPLETE

**Task Document:** [`T04-assess-system-impacts.md`](Story-013-kanban-board-moscow-prioritized-task-view/T04-assess-system-impacts.md)

**Approach:**
1. Identify all systems that interact with Kanban
2. Analyze impact for each system (RW, validators, installers, etc.)
3. Document required updates for each affected system
4. Create impact assessment document
5. **NEW:** Identified and fixed RW doc-init detection bug (story + task docs created together scenario)

---

### E4:S13:T05 – Update Kanban package

**Input:** All previous task deliverables, user verification  
**Deliverable:** Updated Kanban package with new board structure  
**Dependencies:** T01, T02, T03, T04, **User verification**  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on all previous tasks and user verification)

**Status:** ✅ COMPLETE

**Task Document:** [`T05-update-kanban-package.md`](Story-013-kanban-board-moscow-prioritized-task-view/T05-update-kanban-package.md)

**Approach:**
1. Verify user verification obtained
2. Update Kanban board template in package (from T03)
3. Update Kanban governance policy in package (from T02)
4. Update package documentation
5. Verify package consistency

---

### E4:S13:T06 – Update other affected packages

**Input:** System impact assessment (T04), user verification  
**Deliverable:** Updated affected packages (RW, validators, installers, etc.)  
**Dependencies:** T01, T02, T03, T04, T05, **User verification**  
**Blocker:** None  
**Parallel Development Candidacy:** Blocked (depends on all previous tasks and user verification)

**Status:** ✅ COMPLETE

**Task Document:** [`T06-update-other-affected-packages.md`](Story-013-kanban-board-moscow-prioritized-task-view/T06-update-other-affected-packages.md)

**Approach:**
1. Review system impact assessment from T04
2. Update each affected package according to impact assessment
3. Update package documentation if needed
4. Verify all required updates are complete

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

- `docs/project-management/kanban/kboard.md` - Current board structure
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` - Canonical policy
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - Local policy
- `packages/frameworks/kanban/templates/` - Framework templates

