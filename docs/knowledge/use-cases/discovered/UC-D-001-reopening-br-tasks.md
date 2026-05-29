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
discovered_in: BR-002 reopening work, Task E2:S01:T06
status: active
---

# Use Case: Re-opening BRs/Tasks Instead of Creating New

**Type:** Discovered Use Case  
**ID:** UC-D-001  
**Discovered:** 2025-12-16  
**Status:** Active  
**Domain:** Kanban Management

---

## Summary

When a bug persists despite a previous fix attempt, re-open the existing BR and task rather than creating new ones. This approach reduces noise, maintains continuity, and preserves context.

---

## Discovery Context

**How Discovered:**
- While re-opening BR-002 and Task E2:S01:T06, recognized this as a reusable pattern
- User feedback: "New BR adds noise. Re-open BR-02. If BR-02 had a task, re-open that too with the new context."
- Pattern recognized: Re-opening is better than creating duplicates

**Discovered During:**
- **Work:** BR-002 reopening, Task E2:S01:T06 reopening
- **Date:** 2025-12-16
- **Context:** Bug persisted despite previous fix attempt (v0.2.1.6+2)

**Pattern Recognition:**
- Re-opening maintains continuity of bug history
- Avoids duplicate BR/task proliferation
- Preserves context and lessons learned
- Reduces administrative overhead

---

## Use Case Description

**Actor:** Project maintainers, developers, agents handling bug fixes  
**Goal:** Maintain bug history continuity while addressing persistent bugs  
**Preconditions:** 
- Bug report exists
- Previous fix attempt exists
- Bug persists despite fix

**Postconditions:**
- BR re-opened with new context
- Task re-opened with new context
- History preserved
- New context documented

**Main Flow:**
1. Identify bug persists despite previous fix
2. Re-open existing BR (don't create new)
3. Add reopening context and evidence
4. Re-open related task (if exists)
5. Update task with reopening context
6. Document the pattern (if not already documented)
7. Wire everything bidirectionally

**Alternative Flows:**
- **Flow A:** No previous task exists → Create new task, link to re-opened BR
- **Flow B:** Multiple related bugs → Re-open all related BRs/tasks together

---

## Discovery Rationale

**Why This Pattern Emerged:**
- Creating new BRs for same bug creates noise
- Duplicate BRs/tasks make tracking difficult
- Re-opening preserves valuable history
- Context continuity is important

**Gap in Original Design:**
- Original design didn't explicitly address bug persistence scenarios
- No guidance on re-opening vs creating new
- Pattern wasn't documented

**Lessons Learned:**
- Re-opening is cleaner than creating duplicates
- History preservation is valuable
- Pattern should be documented for reuse
- Administrative overhead should be minimized

---

## Implementation

**Related Work:**
- **Task:** [E2:S01:T06 - Fix changelog validator ordering bug](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened)
- **BR:** [BR-002: Changelog Validator Ordering Bug](../../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md)
- **Documentation:** [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md)
- **Epic/Story:** Epic 2, Story 1

**Wiring:**
- ✅ BR-002 links to Task T06
- ✅ Task T06 links to BR-002
- ✅ Documentation links to BR-002 and Task T06
- ✅ BR-002 and Task T06 link to documentation

**Implementation Status:**
- [x] Discovered
- [x] Documented
- [x] Wired to related work
- [x] Validated (used successfully)
- [ ] Promoted to Canonical (under consideration)

---

## Examples

**Example 1: BR-002 Re-opening**
- **BR:** BR-002 (Changelog Validator Ordering Bug)
- **Previous Fix:** E2:S01:T06 (v0.2.1.6+2) - marked complete
- **Reopening:** BR-002 and Task T06 re-opened with new context
- **Result:** Clean history, preserved context, documented pattern

**Example 2: Pattern Documentation**
- **Work:** BR-002 reopening work
- **Pattern:** Re-opening BRs/tasks
- **Documentation:** REOPENING_BR_AND_TASKS_GUIDE.md created
- **Wiring:** All items bidirectionally linked

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
- Pattern is widely applicable
- Represents best practice for bug management
- Should be part of Kanban framework governance
- Consider promoting after more validation

---

## Related Use Cases

- **Canonical:** UC-030 (3-Tier Kanban Structure) - Related to Kanban organization
- **Discovered:** UC-D-002 (Bidirectional Wiring) - Related wiring pattern
- **Discovered:** UC-D-003 (Pattern Discovery Workflow) - How this pattern was discovered

---

## References

- [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Complete guide for this pattern
- [BR-002: Changelog Validator Ordering Bug](../../../project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md) - Example BR
- [Task E2:S01:T06](../../../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened) - Example task

---

**Template Usage:**
- This use case follows the Discovered Use Case template
- Demonstrates pattern discovery and documentation
- Shows bidirectional wiring

---

_This use case is part of the Use Cases Knowledge Base. See `docs/use-cases/USE_CASE_METHODOLOGY.md` for methodology._
