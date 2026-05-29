---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 37: Kanban Policy – Task Prioritisation and Queue/Stack

**Task ID:** E5:S01:T37  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-01-22  
**Last updated:** 2026-01-22 (v0.5.1.37+1 – Task created: FR-037 repository task)  
**Version:** v0.5.1.37+1  
**Code:** E5S01T37

**Repository Pattern:** FR-037 = E5:S01:T37 (abstract space: v0.5.1.37+0)

---

## Scope

Anchor task for FR-037: update the framework Kanban governance policy to incorporate task prioritisation guidance and MUST HAVE ordering (queue for regular tasks, stack for bug-based/breaking tasks). Implementation will be performed under an Epic 4 (or other) implementation task when assigned by intake.

**Problem Statement:**
- Framework Kanban governance policy does not define how to order MUST HAVE tasks or how to prioritise (queue vs stack).
- Adopters (e.g. Starborn Legacy) use stack-for-bugs, queue-for-others; framework does not document this pattern.

**Solution:**
- Add "Task prioritisation" (or equivalent) section to governance policy.
- Define MUST HAVE ordering: stack (add to top; do first) for bug-based/breaking tasks; queue (add to end) for other MUST HAVE tasks.
- Optionally add universal COMPLETE definition (implemented + signed off).
- Update board guide template so prioritisation and queue/stack are discoverable.

---

## Input

- **FR-037:** [`FR-037-kanban-policy-task-prioritisation-queue-stack.md`](../../../fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)
- **Governance policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Board guide template:** `packages/frameworks/kanban/templates/KANBAN_BOARD_GUIDE_TEMPLATE.md`
- **Source:** Starborn Legacy Kanban Governance Policy (2025-12-01) – MoSCOW prioritisation and COMPLETE, queue/stack

---

## Specification (FR-037 R01–R05, NF01–NF03)

Concrete governance policy changes required to satisfy FR-037:

| Req | Governance policy change |
|-----|--------------------------|
| **R01** | Add section heading "Task prioritisation" (or equivalent); explain when to assign M/S/C/O/W (project-agnostic criteria); state that all new tasks go into a MoSCOW category first; no task is added directly to COMPLETE |
| **R02** | Define MUST HAVE ordering: Stack (bug-based/breaking) → add to top, work top-first; Queue (other) → add to end, work front-first; classify each new MUST HAVE as bug-based/breaking (stack) or other (queue) |
| **R03** | State that scripts/processes (UKW, RW) that update MoSCOW either respect stack vs queue when inserting/ordering, or document that ordering is manual/agent-defined |
| **R04** | (Optional) Include universal COMPLETE: task is COMPLETE only when fully implemented (delivered, released) AND signed off (validated, accepted); tasks move from MoSCOW to COMPLETE only when both hold |
| **R05** | Reference board guide for prioritisation and queue/stack (or inline short summary with link); ensure discoverability |
| **NF01** | Wording project-agnostic; projects may add domain rules |
| **NF02** | Align with existing MoSCOW structure (M/S/C/O/W) and FR-036 |
| **NF03** | Definitions short and actionable |

**Validation:** `validate_kanban_governance_policy.py` checks R01–R05 assertions against policy content.

---

## Deliverable

1. **This task document** – Repository anchor for FR-037 (E5:S01:T37).
2. **FR-037 assigned** to E5:S01:T37 in FR document.
3. **Implementation** (when assigned): Governance policy and optionally board guide template updated per FR-037 requirements (R01–R05).

---

## Acceptance Criteria

- [x] Task document created and linked from E5 Story 01 checklist
- [x] FR-037 assigned to E5:S01:T37 in FR document
- [x] Repository pattern documented (FR-037 = E5:S01:T37)
- [x] Release completed with version v0.5.1.37+1

---

## Version Anchor

**Forensic Marker:** ✅ COMPLETE (v0.5.1.37+1 – Task created: FR-037 repository task)

---

## Related Work

- **FR-037:** Kanban Policy – Task Prioritisation and Queue/Stack (this task)
- **FR-036:** Kanban Board Info-Only Split (board/guide split; guide can host prioritisation and queue/stack)
- **E4:S13:** Kanban Board MoSCOW Prioritized Task View (policy updates)
- **Starborn Legacy:** Kanban Governance Policy (2025-12-01) – source of queue/stack and COMPLETE definition

---

## References

- **FR-037:** [`docs/project-management/kanban/fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md`](../../../fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)
- **Epic 5 Story 01:** [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
