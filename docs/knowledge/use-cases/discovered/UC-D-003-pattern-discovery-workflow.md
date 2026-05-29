---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:30:00Z
expires_at: null
housekeeping_policy: keep
use_case_type: discovered
design_phase: false
discovered_during_work: true
discovery_date: 2025-12-16
discovered_in: BR-002 reopening and wiring work
status: active
---

# Use Case: Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)

**Type:** Discovered Use Case  
**ID:** UC-D-003  
**Discovered:** 2025-12-16  
**Status:** Active  
**Domain:** Knowledge Management

---

## Summary

When work reveals a reusable pattern, document it and wire it bidirectionally to the work that revealed it. This creates a discoverable knowledge base of patterns and practices.

---

## Discovery Context

**How Discovered:**
- While working on BR-002 reopening, recognized the pattern of re-opening vs creating new
- User request: "We should probably document this use case in the KB..."
- Pattern recognized: Work → Pattern Recognition → Documentation → Wiring

**Discovered During:**
- **Work:** BR-002 reopening, bidirectional wiring work
- **Date:** 2025-12-16
- **Context:** Multiple patterns discovered during same work session

**Pattern Recognition:**
- Pattern discovery is itself a pattern
- Should be documented as a workflow
- Enables systematic pattern capture

---

## Use Case Description

**Actor:** Project maintainers, developers, agents  
**Goal:** Systematically capture and document patterns discovered during work  
**Preconditions:**
- Work is being performed
- Pattern emerges from work
- Pattern is recognized as reusable

**Postconditions:**
- Pattern documented
- Pattern wired to work that revealed it
- Pattern discoverable in knowledge base

**Main Flow:**
1. **Work:** Perform work (BR/FR, Task, implementation)
2. **Pattern Recognition:** Identify reusable pattern
3. **Documentation:** Create use case or guide document
4. **Wiring:** Wire bidirectionally:
   - Work → Documentation
   - Documentation → Work
   - Related BR/FR/Tasks → Documentation
   - Documentation → Related BR/FR/Tasks
5. **Indexing:** Add to appropriate use case index
6. **Validation:** Use pattern in future work

**Alternative Flows:**
- **Flow A:** Pattern discovered → Create discovered use case → Wire
- **Flow B:** Pattern validated → Promote to canonical use case → Update indexes

---

## Discovery Rationale

**Why This Pattern Emerged:**
- Patterns discovered during work are valuable
- Need systematic way to capture patterns
- Documentation without wiring isn't discoverable
- Pattern discovery is itself a pattern

**Gap in Original Design:**
- No explicit workflow for pattern discovery
- Pattern documentation wasn't systematized
- Wiring wasn't part of pattern capture

**Lessons Learned:**
- Pattern discovery should be systematic
- Documentation must be wired to be discoverable
- Pattern discovery workflow should be documented
- Enables knowledge base growth

---

## Implementation

**Related Work:**
- **Tasks:** 
  - [E2:S01:T06 - Fix changelog validator ordering bug](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened)
  - [E2:S11:T10 - Investigate CHANGELOG Entry Removal](../../../project-management/kanban/epics/Epic-2/Story-011-intake-workflow-automation/Task-010-Investigate-CHANGELOG-Entry-Removal-and-Harden-Processes.md)
- **BR:** [BR-002: Changelog Validator Ordering Bug](../../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md)
- **Documentation:** 
  - [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md)
  - [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md)
  - [USE_CASE_METHODOLOGY.md](../../USE_CASE_METHODOLOGY.md)
- **Epic/Story:** Epic 2, Stories 1 and 11

**Wiring:**
- ✅ Work items link to documentation
- ✅ Documentation links to work items
- ✅ Use cases link to related work
- ✅ Related work links to use cases

**Implementation Status:**
- [x] Discovered
- [x] Documented
- [x] Wired to related work
- [x] Validated (used to document other patterns)
- [ ] Promoted to Canonical (under consideration)

---

## Examples

**Example 1: BR-002 Re-opening Pattern**
- **Work:** BR-002 reopening
- **Pattern:** Re-opening BRs/tasks
- **Documentation:** REOPENING_BR_AND_TASKS_GUIDE.md
- **Wiring:** BR-002 ↔ Task T06 ↔ Documentation
- **Use Case:** UC-D-001

**Example 2: Bidirectional Wiring Pattern**
- **Work:** BR-002/T06 wiring
- **Pattern:** Bidirectional wiring principle
- **Documentation:** BIDIRECTIONAL_WIRING_PRINCIPLE.md
- **Wiring:** All items bidirectionally linked
- **Use Case:** UC-D-002 (promoted to UC-050)

**Example 3: Use Case Methodology**
- **Work:** Pattern discovery work
- **Pattern:** Use case organization (canonical vs discovered)
- **Documentation:** USE_CASE_METHODOLOGY.md
- **Wiring:** Methodology ↔ Use Cases ↔ Work Items
- **Use Case:** This use case (UC-D-003)

---

## Promotion to Canonical

**Promotion Criteria:**
- [x] Widely applicable across projects
- [x] Validated through usage
- [x] Represents best practice
- [ ] Should be part of framework design (under consideration)

**Promotion Status:**
- [ ] Not yet promoted
- [x] Under consideration
- [ ] Promoted to UC-XXX

**Promotion Notes:**
- Pattern discovery workflow is essential for knowledge management
- Should be part of framework design
- Consider promoting after more validation

---

## Related Use Cases

- **Canonical:** UC-050 (Bidirectional Wiring Principle) - Related principle
- **Discovered:** UC-D-001 (Re-opening BRs/Tasks) - Example of this workflow
- **Discovered:** UC-D-002 (Bidirectional Wiring) - Example of this workflow

---

## References

- [USE_CASE_METHODOLOGY.md](../../USE_CASE_METHODOLOGY.md) - Methodology that includes this workflow
- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Related principle
- [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Example documentation created through this workflow

---

**Template Usage:**
- This use case follows the Discovered Use Case template
- Demonstrates the pattern discovery workflow itself
- Shows how patterns are captured and wired

---

_This use case is part of the Use Cases Knowledge Base. See `docs/use-cases/USE_CASE_METHODOLOGY.md` for methodology._
