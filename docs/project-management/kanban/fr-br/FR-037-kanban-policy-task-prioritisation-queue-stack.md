---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Kanban Policy – Task Prioritisation and Queue/Stack Approaches

**Type:** Feature Request (FR)  
**Submitted:** 2026-01-22  
**Submitted By:** User  
**Priority:** HIGH  
**Status:** PENDING  
**Assigned Task:** E5:S01:T37  
**GitHub Issue:** [TBD]  
**Source:** Adapted from Starborn Legacy Kanban Governance Policy (2025-12-01)

---

## Summary

Update the ai-dev-kit Kanban governance policy to incorporate explicit guidance on **how to prioritise tasks** and **queue vs stack semantics** for the MUST HAVE section: treat MUST HAVE as a **stack** for bug-based (breaking) tasks (add to top; do first) and a **queue** for all other MUST HAVE tasks (add to end). Optionally incorporate a **universal definition of COMPLETE** (implemented and signed off).

---

## Description

### What is the Feature?

Extend the framework Kanban governance policy so that adopters have clear, reusable rules for:

1. **Task prioritisation** – When to place tasks in M / S / C / O / W (with project-agnostic criteria and examples).
2. **MUST HAVE ordering** – Two distinct behaviours within MUST HAVE:
   - **Stack (LIFO)** for **bug-based / breaking** tasks: new items added to **top**; work in **first-in, first-done** order (urgent bugs get done first).
   - **Queue (FIFO)** for **all other** MUST HAVE tasks: new items added to **end**; work in **first-in, first-done** order (planned work stays in sequence).
3. **Definition of COMPLETE (optional but recommended)** – COMPLETE means the task is **fully implemented** (work done, delivered, released) **and** **signed off** (validated, accepted). Tasks move from a MoSCOW column into COMPLETE only when both conditions are met.

### What Problem Does This Solve?

- **Current state:** The framework policy describes MoSCOW categories and chronological ordering but does not define how to **order within MUST HAVE** or how to treat **bugs vs regular work**.
- **Gap:** Adopters (e.g. Starborn Legacy) already use queue/stack semantics; the framework policy does not document this pattern, so each project reinvents or keeps it in local docs only.
- **Benefit:** One canonical, portable policy that supports both “urgent bugs first” (stack) and “planned work in order” (queue) within MUST HAVE.

### What is the Use Case?

- **Primary:** A project uses MoSCOW and wants MUST HAVE to behave as: (1) a stack for breaking-bug tasks so the latest critical bug is done first, and (2) a queue for other MUST HAVE work so order is preserved.
- **Secondary:** Same project wants a single, clear definition of COMPLETE (implemented + signed off) referenced by board, guide, and scripts.

---

## Requirements

### Functional Requirements

- [x] **FR-037:R01** – Governance policy includes a **“Task prioritisation”** (or equivalent) section that explains:
  - When to assign M / S / C / O / W (project-agnostic criteria; projects may add domain-specific rules).
  - That all new tasks must be placed in a MoSCOW category first; no task is added directly to COMPLETE.

- [x] **FR-037:R02** – Governance policy defines **MUST HAVE ordering**:
  - **Stack (for bug-based / breaking tasks):** Add to **top** of MUST HAVE; work **top-first** (e.g. “do first” = most recently added).
  - **Queue (for all other MUST HAVE tasks):** Add to **end** of MUST HAVE; work **front-first** (e.g. “do first” = first in list).
  - Clear rule: classify each new MUST HAVE task as either “bug-based/breaking” (stack) or “other” (queue) and add accordingly.

- [x] **FR-037:R03** – Policy states that **scripts and processes** that update the MoSCOW section (e.g. UKW, RW) must respect stack vs queue when inserting or ordering tasks (or document that ordering is manual / agent-defined).
- [x] **FR-037:R04** – (Optional) Policy includes a **universal definition of COMPLETE**: task is COMPLETE only when **fully implemented** (work done, code/docs delivered, released in a version) **and** **signed off** (validated, accepted by the responsible party). Tasks move from a MoSCOW column into COMPLETE only when both conditions are met.
- [x] **FR-037:R05** – Kanban board guide template (or guide section in policy) is updated so that “how to prioritise” and “queue/stack for MUST HAVE” are discoverable (e.g. referenced from the board guide or governance policy).

### Non-Functional Requirements

- [x] **FR-037:NF01** – **Portability:** Wording is framework- and project-agnostic; projects may specialise (e.g. “gameplay-critical = M” for a game) without changing the core queue/stack rule.
- [x] **FR-037:NF02** – **Consistency:** Policy aligns with existing MoSCOW section structure (M/S/C/O/W) and with FR-036 (board/guide split).
- [x] **FR-037:NF03** – **Clarity:** Definitions are short and actionable so adopters and agents can apply them without ambiguity.

---

## Scope Analysis

**Problem Domain:** Kanban governance, prioritisation, MoSCOW ordering  
**Affected Areas:**
- `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- Optionally: `packages/frameworks/kanban/templates/KANBAN_BOARD_GUIDE_TEMPLATE.md` (or equivalent) for “how to prioritise” and queue/stack
- UKW / RW documentation if they reference “how MUST HAVE is ordered”

**Estimated Complexity:** Medium (policy and template edits; optional doc/script references).

---

## Use Cases

**Primary Use Case:**  
Product lead adds a critical bug to MUST HAVE and expects it to appear at the **top** (stack) so it’s done first; when adding a new feature task to MUST HAVE, they expect it at the **end** (queue) so planned order is preserved.

**Additional Use Cases:**
- New adopter reads the framework policy and sees a single, clear rule for “bugs vs regular work” in MUST HAVE.
- Script/agent that regenerates MoSCOW sections uses stack/queue rules to order tasks correctly.
- Team marks a task COMPLETE only after implementation and sign-off, using the policy’s definition.

---

## Acceptance Criteria

- [x] Governance policy contains an explicit “Task prioritisation” (or equivalent) section.
- [x] MUST HAVE is defined as: stack for bug-based/breaking tasks (add to top), queue for other MUST HAVE tasks (add to end).
- [x] Policy (or linked guide) states that all tasks are initially placed in a MoSCOW category; none are added directly to COMPLETE.
- [x] Optional: Universal definition of COMPLETE (implemented + signed off) is in the policy and referenced where COMPLETE is used.
- [x] Framework board/guide template or policy points adopters to “how to prioritise” and queue/stack behaviour.
- [x] No breaking change to existing MoSCOW section structure (M/S/C/O/W); only additive guidance.

---

## Dependencies

**Blocks:**  
- Consistent, portable behaviour for MUST HAVE ordering across adopting projects  
- Clear COMPLETE semantics (if R04 is implemented)

**Blocked By:**  
- None

**Related Work:**
- **FR-036:** Kanban Board Info-Only Split (board vs guide; guide can host “how to prioritise” and queue/stack details)
- **E4:S13:** Kanban Board Enhancement - MoSCOW Prioritized Task View
- **Starborn Legacy:** Kanban Governance Policy (2025-12-01) – source of queue/stack and COMPLETE definition

---

## Source Material (Starborn Legacy)

The following wording is adapted from the Starborn Legacy Kanban Governance Policy (2025-12-01):

**MoSCOW prioritisation and COMPLETE:**
- MoSCOW (Must, Should, Could, **O**ngoing, Won't); second **O** = **ONGOING**.
- **Prioritisation principle:** Essential/critical work = MUST HAVE; clearly non-essential = SHOULD HAVE or lower (project-specific criteria can be added).
- **MUST HAVE ordering:** Treat MUST HAVE as a **stack** for breaking-bug tasks (add to top; do first) and a **queue** for all other MUST HAVE tasks (add to end).
- **Rule:** All tasks must initially be prioritised under MoSCOW; no task is added directly to COMPLETE.
- **Definition of COMPLETE (universal):** Task is COMPLETE when **fully implemented** (work done, delivered, released) **and** **signed off** (validated, accepted). Only then does a task move from a MoSCOW column into COMPLETE.

**Board and guide (two-file split):**  
Starborn also uses a board (structured info only) + guide (rules and explanations); this aligns with FR-036. The queue/stack and COMPLETE rules belong in the guide or governance policy so they are authoritative and portable.

---

## Manual UAT Checklist (Post-Implementation)

- [ ] Policy wording is project-agnostic
- [ ] Board guide and governance policy agree on prioritisation and queue/stack
- [ ] UKW/RW docs either implement stack/queue or document manual/agent-defined ordering
- [ ] `validate_kanban_governance_policy.py` exits 0 when run from project root

---

## Implementation Notes

- Add a new section to `kanban-governance-policy.md` (e.g. **“Task prioritisation and MUST HAVE ordering”**) containing the queue/stack rule and optional COMPLETE definition.
- Optionally add a short “Prioritisation” subsection to the board guide template (or policy) that references the governance policy and summarises stack vs queue.
- Keep wording project-agnostic; allow projects to define “bug-based” / “breaking” and “other” in their own guide (e.g. “For this project, bug-based = any BR-linked task” or “breaking = P0 bugs only”).

---

## References

- **Framework Kanban governance:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Board guide template:** `packages/frameworks/kanban/templates/KANBAN_BOARD_GUIDE_TEMPLATE.md`
- **FR-036:** Kanban Board Info-Only Split
- **Source:** Starborn Legacy – Kanban Governance Policy (2025-12-01), “MoSCOW Prioritisation and COMPLETE” and “Board and Guide (Two-File Split)”

---

## Release History

- **v0.5.1.37+3** (2026-02-12): Policy alignment with Starborn Legacy patterns. Delivered: policy comparison proposal (Starborn vs ai-dev-kit), Implementation Cycle (spec + TDD) as adoptable pattern with framework SoP, changelog language reminder, Step 9.6 IDE check, git reminder, perpetual-task document update requirement in Kanban Governance. See [CHANGELOG_v0.5.1.37+3 (source)](https://github.com/earlution/ai-dev-kit/blob/main/docs/changelog-and-release-notes/changelog-archive/CHANGELOG_v0.5.1.37+3.md).

---

_This Feature Request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
