---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T21:15:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: New RW Trigger for FR/BR Commits

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** N/A  
**Status:** PENDING  

**Implementing Task:** [E2:S07:T05](../epics/Epic-2/Story-007-trigger-aware-release-workflow.md)

---

## Summary

New RW trigger. If the RW is being tasked to commit either a BR, FR, or UXR, then the new workflow delivered by FR-012 is triggered.

---

## Description

### What is the Feature?

A new Release Workflow (RW) trigger that detects when a commit includes a Bug Report (BR), Feature Request (FR), or User Experience Research (UXR), and automatically triggers the agentic Kanban task creation workflow (FR-012).

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- RW detects that commit includes BR, FR, or UXR (via commit message patterns like `FR\d+`, `BR\d+`, `UXR\d+` - supports both with and without dash, e.g., FR012 or FR-012)
- RW automatically triggers the agentic Kanban task creation workflow (FR-012)
- Workflow creates Kanban tasks from the BR/FR/UXR
- RW processes the created tasks as deliverables
- RW continues with normal release process, incorporating the tasks

**Current Behavior:**
- No automatic trigger for FR/BR commits
- Manual intervention required to create tasks from FRs/BRs
- No integration between FR/BR commits and task creation workflow

### When Does It Occur?

This feature is needed whenever:
- A commit includes a BR (bug report)
- A commit includes a FR (feature request)
- A commit includes a UXR (user experience research)
- RW is executing and detects FR/BR/UXR in the commit

### Who is Affected?

**Primary Affected:**
- Developers/agents committing FRs/BRs
- Workflow automation users
- Framework maintainers

**Secondary Affected:**
- Framework users (workflow capabilities)
- CI/CD systems (workflow integration)

---

## Use Cases

1. **FR Commit Trigger:**
   - Developer commits code with FR in commit message or files (e.g., `FR012` or `FR-012`)
   - RW detects FR in commit using pattern `FR\d+`
   - RW triggers agentic Kanban task creation workflow (FR-012)
   - Workflow creates Kanban tasks from FR
   - RW processes tasks and continues with release

2. **BR Commit Trigger:**
   - Developer commits code with BR in commit message or files (e.g., `BR007` or `BR-007`)
   - RW detects BR in commit using pattern `BR\d+`
   - RW triggers agentic Kanban task creation workflow (FR-012)
   - Workflow creates Kanban tasks from BR
   - RW processes tasks and continues with release

3. **UXR Commit Trigger:**
   - Developer commits code with UXR in commit message or files (e.g., `UXR001` or `UXR-001`)
   - RW detects UXR in commit using pattern `UXR\d+`
   - RW triggers agentic Kanban task creation workflow (FR-012)
   - Workflow creates Kanban tasks from UXR
   - RW processes tasks and continues with release

4. **Multiple FR/BR/UXR Commit:**
   - Commit includes multiple FRs/BRs/UXRs
   - RW detects all FRs/BRs/UXRs
   - RW triggers workflow for each FR/BR/UXR
   - Workflow creates tasks for all FRs/BRs/UXRs
   - RW processes all tasks and continues with release

---

## Requirements

### Functional Requirements

1. **FR/BR/UXR Detection:**
   - Detect FR in commit using pattern `FR\d+` (supports both `FR012` and `FR-012`)
   - Detect BR in commit using pattern `BR\d+` (supports both `BR007` and `BR-007`)
   - Detect UXR in commit using pattern `UXR\d+` (supports both `UXR001` and `UXR-001`)
   - Support multiple detection methods (commit message, file patterns, etc.)
   - Handle edge cases (partial matches, variations, etc.)

2. **Trigger Activation:**
   - Activate trigger when FR/BR/UXR detected
   - Support trigger conditions and logic
   - Handle multiple FRs/BRs/UXRs in single commit

3. **Workflow Triggering:**
   - Trigger agentic Kanban task creation workflow (FR-012)
   - Pass FR/BR information to workflow
   - Handle workflow execution and errors

4. **Deliverable Processing:**
   - Process created Kanban tasks as deliverables
   - Integrate tasks into release process
   - Update versioning, changelog, documentation as needed

### Non-Functional Requirements

1. **Reliability:**
   - Must handle detection errors gracefully
   - Must handle workflow execution failures
   - Must provide rollback capabilities

2. **Performance:**
   - Must not significantly slow down RW execution
   - Must handle multiple FRs/BRs efficiently

3. **Extensibility:**
   - Must support custom detection patterns
   - Must allow for trigger customization

---

## Problems Solved

1. **Manual Task Creation:** Eliminates need for manual task creation after FR/BR commits
2. **Workflow Integration:** Integrates FR/BR commits with task creation workflow
3. **Automation:** Automates the complete FR/BR → Task workflow
4. **Consistency:** Ensures consistent task creation from FRs/BRs

---

## Dependencies

**Blocks:**
- Automatic task creation from FR/BR commits
- Workflow trigger system
- FR/BR commit detection

**Blocked By:**
- FR-012: Agentic Kanban Task Creation from FR/BR (workflow to trigger)
- FR-013: Trigger-Aware Release Workflow (trigger system foundation)

**Coordinates With:**
- Epic 2: Workflow Management Framework (workflow execution)
- Epic 4: Kanban Framework (Kanban integration)
- FR-012: Agentic Kanban Task Creation (workflow to trigger)
- FR-013: Trigger-Aware Release Workflow (trigger system)

---

## Related Work

- **FR-012:** Agentic Kanban Task Creation from FR/BR
- **FR-013:** Trigger-Aware Release Workflow
- **Epic 2:** Workflow Management Framework
- **Epic 4:** Kanban Framework

---

## Acceptance Criteria

1. ✅ RW can detect FR in commit (pattern `FR\d+` supports both `FR012` and `FR-012`)
2. ✅ RW can detect BR in commit (pattern `BR\d+` supports both `BR007` and `BR-007`)
3. ✅ RW can detect UXR in commit (pattern `UXR\d+` supports both `UXR001` and `UXR-001`)
4. ✅ RW triggers agentic Kanban task creation workflow when FR/BR/UXR detected
5. ✅ RW processes created tasks as deliverables
6. ✅ RW integrates tasks into release process
7. ✅ RW handles multiple FRs/BRs/UXRs in single commit
8. ✅ RW handles detection and workflow errors gracefully

---

## Notes

This feature depends on:
- FR-012: Agentic Kanban Task Creation from FR/BR (the workflow to trigger)
- FR-013: Trigger-Aware Release Workflow (the trigger system)

The trigger detection could use:
- Commit message patterns (e.g., "FR\d+", "BR\d+", "UXR\d+", "[FR]", "[BR]", "[UXR]") - supports both with and without dash (FR012 or FR-012)
- File patterns (e.g., files in `fr-br/` directory)
- Git tags or labels
- Manual trigger flags

---

## References

- FR-012: Agentic Kanban Task Creation from FR/BR
- FR-013: Trigger-Aware Release Workflow
- Epic 2: Workflow Management Framework
- Epic 4: Kanban Framework

