---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-10T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Harden Kanban Docs Update in Release Workflow

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-10  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** N/A  
**Status:** IMPLEMENTED (E5:S01:T36 completed board updates) — wired as Bucket-D3 predecessor of [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md) with R07-R10 residual gap

> **Predecessor of FR-092 (2026-04-27):** FR-015 hardened RW Step 7 (mandatory + validated). Residual ACs R07-R10 remain unchecked; FR-092 (Wave 5/7) closes them through stage-completeness enforcement (BR-070) and release-readiness gates. FR-015 remains valid as historical predecessor; outstanding residuals are owned by FR-092.

---

## Summary

Harden Step 7 (Auto-update Kanban Docs) in the Release Workflow to make it mandatory, reliable, and validated. Currently, this step is optional, references a non-existent script, and has no validation, leading to Kanban documentation falling out of sync with releases.

---

## Description

### What is the Feature?

A hardened, mandatory Kanban documentation update step in the Release Workflow that:
- Automatically updates all required Kanban documentation (Story docs, Epic docs, Kanban board)
- Validates that updates were successful
- Blocks the workflow if updates fail
- Uses intelligent detection to determine which docs need updating
- Provides clear error messages and recovery guidance
- Works reliably across all projects using the framework

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Step 7 is **mandatory** and **blocking** (cannot be skipped)
- RW automatically detects which Kanban docs need updating based on:
  - Current version (Epic.Story.Task)
  - Changed files in the commit
  - Task completion status

- RW updates all required Kanban documentation:
  - Story document (version marker, task status, completion status)
  - Epic document (story status, last updated version)
  - Kanban board (epic/story status, version markers)

- RW validates that all updates were successful
- RW blocks workflow if any updates fail
- Clear error messages guide manual fixes if needed

**Current Behavior:**
- Step 7 is optional (`required: false`)
- Step 7 references a script that doesn't exist (`scripts/automation/update_kanban_docs.py`)
- Step 7 uses project-specific handler (`confidentia.kanban_update`)
- No validation that Kanban docs were actually updated
- No blocking behavior if updates fail
- Kanban docs frequently fall out of sync with releases (as observed)

### When Does It Occur?

This feature is needed:
- **Every time RW executes** - Kanban docs should always be updated
- When a task is completed (version marker update)
- When a story is completed (status update in Epic doc and board)
- When an epic is completed (status update in board)
- During any release that affects Kanban structure

### Who is Affected?

**Primary Affected:**
- Developers/agents using RW
- Framework maintainers
- Projects adopting the framework

**Secondary Affected:**
- Framework users (workflow reliability)
- Documentation consumers (accurate Kanban status)
- CI/CD systems (workflow validation)

---

## Use Cases

1. **Task Completion Release:**
   - Developer completes a task (e.g., E2:S07:T06)
   - RW executes and updates:
     - Story document: Task marked complete, version marker updated
     - Epic document: Story status updated if all tasks complete
     - Kanban board: Epic/story status updated

2. **Story Completion Release:**
   - Developer completes all tasks in a story
   - RW detects story completion and updates:
     - Story document: Status set to COMPLETE
     - Epic document: Story marked complete, last updated version set
     - Kanban board: Story status updated, epic status updated if all stories complete

3. **Epic Completion Release:**
   - Developer completes all stories in an epic
   - RW detects epic completion and updates:
     - Epic document: Status set to COMPLETE
     - Kanban board: Epic status updated

4. **Validation Failure:**
   - RW attempts to update Kanban docs
   - Update fails (e.g., file not found, permission error)
   - RW blocks workflow with clear error message
   - Developer fixes issue and re-runs RW

---

## Requirements

### Functional Requirements

- [ ] **FR-015:R01** - Step 7 must be mandatory (`required: true`) and blocking
- [ ] **FR-015:R02** - Create framework-agnostic Kanban update script/handler
- [ ] **FR-015:R03** - Auto-detect which Kanban docs need updating based on:
  - Current version (Epic.Story.Task)
  - Changed files
  - Task/story/epic completion status

- [ ] **FR-015:R04** - Update Story document with:
  - Version marker in "Last updated" field
  - Task completion status in task checklist
  - Story completion status if all tasks complete

- [ ] **FR-015:R05** - Update Epic document with:
  - Story status in story checklist
  - Last updated version
  - Epic completion status if all stories complete

- [x] **FR-015:R06** - Update Kanban board with: ✅ **IMPLEMENTED (E5:S01:T36)**
  - Epic/story status ✅
  - Last updated date and version ✅
  - Story/epic completion markers ✅
  - **Implementation Status:** Implemented in E5:S01:T36 (v0.5.1.36+1). RW Step 7 now updates Kanban board metadata and epic/story sections.

- [ ] **FR-015:R07** - Validate that all required updates were successful
- [ ] **FR-015:R08** - Block workflow if validation fails
- [ ] **FR-015:R09** - Provide clear error messages with recovery guidance
- [ ] **FR-015:R10** - Support override mechanism with explicit confirmation (for edge cases)

### Non-Functional Requirements

- [ ] **FR-015:NF01** - **Reliability:** Close to 100% confidence in deterministic steps, agentic intelligence for complex steps
- [ ] **FR-015:NF02** - **Performance:** Updates should complete in < 5 seconds for typical projects
- [ ] **FR-015:NF03** - **Usability:** Clear error messages guide manual fixes when needed
- [ ] **FR-015:NF04** - **Compatibility:** Works across all projects using the framework
- [ ] **FR-015:NF05** - **Maintainability:** Framework-agnostic implementation (not project-specific)

---

## Scope Analysis

**Problem Domain:** Release Workflow, Kanban Documentation, Workflow Automation  
**Affected Areas:**
- [x] Backend/API (workflow execution)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Kanban docs, RW docs)
- [x] Testing (validation, error handling)
- [x] Other: Workflow framework

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks) - Requires careful analysis of deterministic vs agentic approaches
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
Every RW execution should automatically and reliably update all relevant Kanban documentation, ensuring documentation stays in sync with releases.

**Additional Use Cases:**
- Validation failure recovery
- Edge case handling (missing files, permission errors)
- Multi-epic releases
- Cross-epic dependencies

---

## Acceptance Criteria

- [ ] **AC1:** Step 7 is mandatory and blocking (cannot be skipped)
- [ ] **AC2:** Framework-agnostic Kanban update script/handler exists and works
- [x] **AC3:** All required Kanban docs are updated automatically:
  - Story document updated with version marker and task status ✅ (IMPLEMENTED)
  - Epic document updated with story status and version ✅ (IMPLEMENTED)
  - Kanban board updated with epic/story status and version ✅ (IMPLEMENTED - E5:S01:T36)

- [ ] **AC4:** Validation confirms all updates were successful
- [ ] **AC5:** Workflow blocks if validation fails
- [ ] **AC6:** Clear error messages provided with recovery guidance
- [ ] **AC7:** Works reliably across all projects using the framework
- [ ] **AC8:** Performance acceptable (< 5 seconds for typical projects)
- [ ] **AC9:** Deterministic steps achieve close to 100% reliability
- [ ] **AC10:** Agentic intelligence used only where necessary for reliability

---

## Dependencies

**Blocks:**
- Reliable Kanban documentation synchronization
- Workflow hardening and reliability improvements

**Blocked By:**
- None

**Related Work:**
- **Epic 2 Story 7:** Trigger-Aware Release Workflow (completed)
- **Epic 2:** Workflow Management Framework
- **Epic 4:** Kanban Framework
- **RW Step 7:** Auto-update Kanban Docs (current implementation)

---

## Rationale

**Why This Matters:**
- Kanban documentation is the single source of truth for project status
- Out-of-sync documentation creates confusion and reduces trust
- Manual updates are error-prone and frequently forgotten
- Automated updates ensure consistency and reliability

**Why This Should Be Implemented:**
- Current implementation is unreliable (optional, no validation)
- Framework users expect automatic documentation updates
- Hardening improves overall workflow reliability
- Reduces cognitive load on developers/agents

---

## Implementation Notes

**Key Considerations:**
1. **Reliability is the primary metric** - Use deterministic approaches where close to 100% confidence is achievable
2. **Agentic intelligence required for:**
   - Detecting which docs need updating (complex logic)
   - Handling edge cases and ambiguous situations
   - Providing intelligent error recovery guidance
3. **Deterministic approaches appropriate for:**
   - File path resolution (if structure is known)
   - Version marker insertion (if format is standardized)
   - Status field updates (if status values are known)
4. **Careful analysis required** to identify where each approach is most appropriate

**Implementation Approach:**
- Create framework-agnostic Kanban update script
- Implement hybrid approach: deterministic for known patterns, agentic for complex cases
- Add validation step after updates
- Make step mandatory and blocking
- Provide clear error handling and recovery guidance

---

## References

- **Release Workflow Reference:** `packages/frameworks/workflow mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-reference.md`
- **Release Workflow YAML:** `packages/frameworks/workflow mgt/workflows/release-workflow.yaml`
- **Kanban Governance Policy:** `docs/project-management/rituals/policy/kanban-governance-policy.md`
- **Epic 2 Story 7:** `docs/project-management/kanban/epics/Epic-2/Story-007-trigger-aware-release-workflow.md`

---

## Template Usage

This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

