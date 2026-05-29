---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-17T11:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: RW Task Argument Requirement

**Type:** Feature Request (FR)  
**Submitted:** 2026-03-17  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** N/A  
**Status:** IMPLEMENTED (v0.5.1.63+1)  
**Assigned Task:** E5:S01:T63 — [Task document](../epics/Epic-5/Story-001-fr-repo/T63-rw-task-argument-requirement.md)

---

## Summary

Release Workflow (RW) invocations must require an explicit task argument to specify which completed task is being released, preventing context inference errors and ensuring clear audit trails.

---

## Description

### What is the Feature?

Enhance RW to require a mandatory task argument in the format `RW <task_id>` where task_id can be either `E<Epic>:S<Story>:T<Task>` or `E<Epic>S<Story>T<Task>` format.

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- RW commands must include task argument: `RW E7:S01:T10` or `RW E7S01T10`
- RW validates task exists and is in COMPLETE status
- RW uses specified task for version schema (RC.EPIC.STORY.TASK+BUILD)
- Clear error message if task argument missing or invalid

**Current Behavior:**
- RW attempts to infer task context from repository state
- Version bumps may be incorrect (e.g., v0.7.1.13+1 instead of v0.7.1.10+1 for E7:S01:T10)
- No validation of task context before release execution
- Potential for release errors due to incorrect context inference

### When Does It Occur?

This feature is needed:
- **Every RW invocation** - Task context must be explicit
- When releasing completed tasks
- When maintaining audit trails and version accuracy
- When preventing inference errors in automated workflows

---

## Requirements

### Functional Requirements

- [x] **FR-060:R01** - RW must accept task argument in format `RW <task_id>`
- [x] **FR-060:R02** - Support both colon-separated `E<Epic>:S<Story>:T<Task>` and concatenated `E<Epic>S<Story>T<Task>` formats
- [x] **FR-060:R03** - Validate task exists and is in COMPLETE status before proceeding
- [x] **FR-060:R04** - Use specified task for version schema generation (RC.EPIC.STORY.TASK+BUILD)
- [x] **FR-060:R05** - Provide clear error message for missing/invalid task arguments
- [x] **FR-060:R06** - Update RW documentation with new argument requirement
- [x] **FR-060:R07** - Update workflow scripts to enforce task argument requirement

### Non-Functional Requirements

- [ ] **FR-060:NF01** - **Reliability:** Eliminates task context inference errors
- [ ] **FR-060:NF02** - **Usability:** Clear error messages guide correct usage
- [ ] **FR-060:NF03** - **Backward Compatibility:** Existing RW functionality preserved except for argument requirement
- [ ] **FR-060:NF04** - **Auditability:** Explicit task specification improves traceability

---

## Acceptance Criteria

- [ ] **AC1:** RW rejects invocations without task argument
- [ ] **AC2:** RW accepts both `RW E7:S01:T10` and `RW E7S01T10` formats
- [ ] **AC3:** RW validates task exists and is COMPLETE before proceeding
- [ ] **AC4:** Version schema correctly follows specified task (e.g., E7:S01:T10 → v0.7.1.10+1)
- [ ] **AC5:** Clear error messages for invalid task arguments
- [ ] **AC6:** Documentation updated with new requirement
- [ ] **AC7:** Works across all workflow execution contexts

---

## Rationale

**Why This Matters:**
- Prevents version schema errors (e.g., releasing E7:S01:T10 as v0.7.1.13+1)
- Ensures audit trails are accurate and traceable
- Eliminates context inference reliability concerns
- Improves workflow predictability and safety

**Why This Should Be Implemented:**
- Current inference-based approach has proven unreliable
- Explicit arguments follow principle of least surprise
- Critical for maintaining version accuracy in RC.EPIC.STORY.TASK+BUILD schema
- Essential for production workflow reliability

---

## Implementation Notes

**Key Considerations:**
1. **Argument Parsing:** Support flexible task ID formats
2. **Validation:** Check task document exists and status is COMPLETE
3. **Error Handling:** Graceful failure with helpful messages
4. **Documentation:** Update all RW references with new syntax

**Implementation Approach:**
- Modify RW entry point to require task argument
- Add task validation functions to workflow scripts
- Update RW documentation and examples
- Maintain backward compatibility for existing functionality

---

## References

- **Versioning Policy:** `packages/frameworks/workflow mgt/KB/Architecture/Standards_and_ADRs/versioning-policy.md`
- **Release Workflow Reference:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-reference.md`
- **FR-023:** `FR-023-update-kanban-workflow-ukw.md` (related workflow enhancement)

---

## Template Usage

This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.
