---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Kanban Granularity & Discrete Task Docs (3-Tier Structure)

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-11  
**Submitted By:** User (from starborn-legacy project)  
**Priority:** HIGH  
**Status:** ACCEPTED  

---

## Summary

Harden Kanban governance to require **3-tier granularity** (Epic → Story → Task) with **discrete Task documents**, supporting the doc-init versioning change (see FR-017). This ensures every task has a canonical, traceable document anchor and prevents anti-patterns where tasks are bundled or introduced implicitly.

---

## Description

### What is the Feature?

A hardened Kanban governance system that:
- Enforces explicit 3-tier structure (Epic → Story → Task)
- Requires discrete Task documents (or clearly delimited sections using Task ID)
- Supports doc-init versioning (`+0`) per FR-017
- Ensures every task has a canonical, traceable document anchor
- Prevents tasks from being bundled or introduced implicitly

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- Epic → Story → Task must be explicit (no implicit/inline tasks)
- Each Task gets its own doc (or clearly delimited section using the Task ID), created before implementation
- Task docs tied to doc-init (`…+0`) per FR-017
- Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- RW Step 1 locates the most recently completed Task doc in the relevant Story
- Validators ensure Epic/Story/Task alignment and presence of the Task doc

**Current Behavior:**
- Tasks are sometimes embedded in story text or bundled, making it unclear what the "most recently completed task" is for RW Step 1
- Lack of per-task docs weakens validation and version alignment (task ID vs. version)
- Scope drift and mis-versioning arise when tasks are not explicitly documented at the task tier

### When Does It Occur?

This feature is needed:
- **Every time a new Task is created** - Should have discrete doc before implementation
- When tasks are bundled or embedded in story text
- When RW Step 1 needs to locate the most recently completed task
- When validators need to check Epic/Story/Task alignment

### Who is Affected?

**Primary Affected:**
- Developers/agents creating tasks
- Framework maintainers (Kanban governance enforcement)
- Projects using the framework (traceability and validation)

**Secondary Affected:**
- Release Workflow (RW Step 1 task location)
- Versioning validators
- Kanban documentation structure

---

## Problem / Anti-Pattern

- Tasks are sometimes embedded in story text or bundled, making it unclear what the "most recently completed task" is for RW Step 1
- Lack of per-task docs weakens validation and version alignment (task ID vs. version)
- Scope drift and mis-versioning arise when tasks are not explicitly documented at the task tier

---

## Requirements

### Functional Requirements

- [ ] **FR-016:R01** - Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **FR-016:R02** - Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **FR-016:R03** - RW Step 1 and validators enforce presence of Task doc and alignment of Epic/Story/Task with version
- [ ] **FR-016:R04** - Doc-init (`+0`) path is supported and required for new Task docs (see FR-017)
- [ ] **FR-016:R05** - No implicit/inline tasks allowed (must be explicit at task tier)
- [ ] **FR-016:R06** - Task docs created before implementation (tied to doc-init)

### Non-Functional Requirements

- [ ] **FR-016:NF01** - **Traceability:** Clear, auditable mapping from task to version
- [ ] **FR-016:NF02** - **Validation:** Enables automated checks for Epic/Story/Task alignment
- [ ] **FR-016:NF03** - **Governance:** Reduces scope drift and mis-versioning by forcing explicit task definitions

---

## Scope Analysis

**Problem Domain:** Kanban Governance, Release Workflow, Versioning Policy  
**Affected Areas:**
- [x] Backend/API (RW Step 1 logic, validators)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Kanban policy docs, RW procedures)
- [x] Testing (validation, alignment checks)
- [x] Other: Kanban framework, versioning framework

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Developer creates a new Task (e.g., E4:S06:T11)
2. Task doc is created with all required fields (ID, scope, acceptance criteria, etc.)
3. Doc-init (`+0`) establishes version anchor
4. RW Step 1 can locate the task doc and determine correct version
5. Validators check Epic/Story/Task alignment

**Additional Use Cases:**
- Task bundling prevention (each task must be discrete)
- Version alignment validation (task ID matches version)
- Scope drift prevention (explicit task definitions)

---

## Acceptance Criteria

- [ ] **AC1:** Kanban policy updated to mandate 3-tier structure and discrete Task docs
- [ ] **AC2:** Task docs include: ID, scope, acceptance criteria, status, version anchor, completion date, related BR/FR
- [ ] **AC3:** RW Step 1 and validators enforce presence of Task doc and alignment of Epic/Story/Task with version
- [ ] **AC4:** Doc-init (`+0`) path is supported and required for new Task docs (see FR-017)
- [ ] **AC5:** No implicit/inline tasks allowed (must be explicit at task tier)
- [ ] **AC6:** Task docs created before implementation (tied to doc-init)
- [ ] **AC7:** Clear, auditable mapping from task to version
- [ ] **AC8:** Automated checks for Epic/Story/Task alignment enabled

---

## Dependencies

**Blocks:**
- Proper task traceability and version alignment
- Prevention of scope drift and mis-versioning
- Clear task lifecycle: define → anchor → implement

**Blocked By:**
- None (can be implemented independently; FR-017 and FR-018 depend on this)

**Related Work:**
- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T (depends on this FR)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (depends on this FR)
- **Versioning Policy:** `docs/VERSIONING_POLICY.md`
- **RW Step 1 Procedure:** `docs/RW-STEP1-VERSION-BUMP-PROCEDURE.md`
- **Kanban Policy Docs:** Kanban governance policy documents
- **RW Validators:** Epic/Story/Task alignment validators

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (Auto)

**Decision Flow Results:**
- [x] New Story Created: Epic 2, Story 9 → Task 00 (Story creation)

**Assigned To:**
- Epic: Epic 2 (Workflow Management Framework)
- Story: Story 9 (Kanban Granularity & Discrete Task Docs)
- Task: T00-T07 (Story creation and implementation tasks)
- Version: `v0.2.9.0+0` (Story creation)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`docs/project-management/kanban/epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md`](../epics/Epic-2/Story-009-kanban-granularity-discrete-task-docs.md)
- Task: See Story 9 task checklist

---

## Rationale

**Why This Matters:**
- **Traceability:** Clear, auditable mapping from task to version
- **Validation:** Enables automated checks for Epic/Story/Task alignment
- **Governance:** Reduces scope drift and mis-versioning by forcing explicit task definitions

**Why This Should Be Implemented:**
- Current approach allows tasks to be bundled or embedded, creating ambiguity
- Lack of discrete task docs weakens validation and version alignment
- Explicit task definitions prevent scope drift and mis-versioning

---

## Implementation Notes

**Key Considerations:**
1. Task docs can be either:
   - Separate files (e.g., `Task-011-*.md`)
   - Clearly delimited sections within Story docs (using Task ID as header)
2. Doc-init (`+0`) must be supported for new Task docs (see FR-017)
3. Validators must check:
   - Presence of Task doc
   - Epic/Story/Task alignment
   - Version anchor presence
4. Potential tooling updates to auto-generate Task doc templates and enforce checks

---

## References

- **FR-017:** Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T
- **Versioning Policy:** `docs/VERSIONING_POLICY.md`
- **RW Step 1 Procedure:** `docs/RW-STEP1-VERSION-BUMP-PROCEDURE.md`
- **Kanban Policy Docs:** Kanban governance policy documents
- **RW Validators:** Epic/Story/Task alignment validators

---

**Template Usage:**
This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

