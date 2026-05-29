---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T

**Type:** Feature Request (FR)  
**Submitted:** 2025-12-11  
**Submitted By:** User (from starborn-legacy project)  
**Priority:** HIGH  
**Status:** ACCEPTED  

---

## Summary

Introduce a formal **doc-init build `+0`** for newly created Epic/Story/Task (E/S/T) documentation to harden the numbering policy and prevent the anti-pattern of "first real change shipped under a prior task version." The doc-init build establishes the canonical version anchor for the E/S/T before any functional changes land.

---

## Description

### What is the Feature?

A formal doc-init build process that:
- Creates a version anchor (`RC.EPIC.STORY.TASK+0`) when new E/S/T documentation is created
- Establishes the canonical task anchor before any functional changes
- Prevents ambiguity in forensic traceability between task introduction and implementation
- Ensures RW Step 1 selects the correct task ID when multiple tasks are open/overlapping

### What Should Happen vs. What Currently Happens?

**Expected Behavior:**
- When creating a new E/S/T doc, run RW immediately to produce `RC.EPIC.STORY.TASK+0`
- Purpose: establish the canonical task anchor before any functional changes
- RW Step 1 detects "new doc-init" state; if no prior version for the task, emit `+0` (docs only)
- Subsequent functional work for the same task starts at `+1` as today
- Doc-init build is docs-only (no code changes)
- Functional changes cannot ship on `+0`
- Changelog includes a "Doc Init" section for `+0` entries

**Current Behavior:**
- New E/S/T docs are sometimes introduced alongside functional changes
- First release of real work is versioned against a *previous* task context
- Creates ambiguity: which version introduced the task vs. which version delivered the work
- Without a doc-init anchor, RW Step 1 may select the wrong task ID when multiple tasks are open/overlapping

### When Does It Occur?

This feature is needed:
- **Every time a new E/S/T doc is created** - Should establish version anchor immediately
- When tasks are introduced outside an existing RW context
- When multiple tasks are open/overlapping and version selection is ambiguous

### Who is Affected?

**Primary Affected:**
- Developers/agents creating new E/S/T documentation
- Framework maintainers (versioning policy enforcement)
- Projects using the framework (forensic traceability)

**Secondary Affected:**
- Release Workflow (RW Step 1 logic)
- Versioning validators
- Changelog generation

---

## Problem / Anti-Pattern

- New E/S/T docs are sometimes introduced alongside functional changes, causing the first release of real work to be versioned against a *previous* task context.
- This creates ambiguity in forensic traceability: which version introduced the task vs. which version delivered the work.
- Without a doc-init anchor, RW Step 1 may select the wrong task ID when multiple tasks are open/overlapping.

---

## Requirements

### Functional Requirements

- [ ] **FR-017:R01** - RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [ ] **FR-017:R02** - Functional changes for that task require `+1` or higher
- [ ] **FR-017:R03** - RW validators fail if non-doc changes are present in a `+0` run
- [ ] **FR-017:R04** - CHANGELOG format documents "Doc Init" entries
- [ ] **FR-017:R05** - RW Step 1 detects "new doc-init" state; if no prior version for the task, emit `+0` (docs only)
- [ ] **FR-017:R06** - Versioning Policy and RW-STEP1 procedure updated to include doc-init logic

### Non-Functional Requirements

- [ ] **FR-017:NF01** - **Reliability:** Doc-init validation must be deterministic (100% confidence)
- [ ] **FR-017:NF02** - **Traceability:** Clear separation between task introduction (docs) and implementation (code)
- [ ] **FR-017:NF03** - **Consistency:** Aligns RW Step 1 with explicit task lifecycle: define → anchor → implement

---

## Scope Analysis

**Problem Domain:** Versioning Policy, Release Workflow, Kanban Documentation  
**Affected Areas:**
- [x] Backend/API (RW Step 1 logic)
- [ ] Frontend/UI
- [ ] Database/Schema
- [x] Documentation (Versioning Policy, RW procedures)
- [x] Testing (RW validators)
- [x] Other: Versioning framework

**Estimated Complexity:**
- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Use Cases

**Primary Use Case:**
1. Developer creates a new Task document (e.g., E4:S06:T11)
2. RW executes immediately to produce `v0.4.6.11+0` (doc-init)
3. Changelog entry: "Doc Init: E4:S06:T11 - [Task description]"
4. Subsequent functional work for T11 starts at `+1`

**Additional Use Cases:**
- Task created outside existing RW context
- Multiple tasks open/overlapping (RW Step 1 selects correct task via doc-init anchor)
- Validation failure if code changes attempted on `+0` build

---

## Acceptance Criteria

- [ ] **AC1:** RW supports a doc-init path that emits `RC.EPIC.STORY.TASK+0` for new E/S/T docs only
- [ ] **AC2:** Functional changes for that task require `+1` or higher
- [ ] **AC3:** RW validators fail if non-doc changes are present in a `+0` run
- [ ] **AC4:** CHANGELOG format documents "Doc Init" entries
- [ ] **AC5:** Versioning Policy and RW-STEP1 procedure updated to include doc-init logic
- [ ] **AC6:** Doc-init validation is deterministic (100% confidence)
- [ ] **AC7:** Clear separation between task introduction (docs) and implementation (code)

---

## Dependencies

**Blocks:**
- Proper version anchor establishment for new tasks
- Prevention of "first real change shipped under prior task" anti-pattern
- Clear forensic traceability

**Blocked By:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) - Requires discrete task docs to anchor doc-init builds

**Related Work:**
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite)
- **FR-018:** Abstract Space for Zero-Numbered E/S/T Docs (defines abstract space concept used by doc-init `+0`)
- Versioning Policy (`docs/VERSIONING_POLICY.md`)
- RW Step 1 procedure (`docs/RW-STEP1-VERSION-BUMP-PROCEDURE.md`)
- Release Workflow agent execution guide (`docs/release-workflow-agent-execution.md`)

---

## Intake Decision

**Intake Status:** ACCEPTED  
**Intake Date:** 2025-12-11  
**Intake By:** AI Agent (Auto)

**Decision Flow Results:**
- [x] New Story Created: Epic 2, Story 10 → Task 00 (Story creation)

**Assigned To:**
- Epic: Epic 2 (Workflow Management Framework)
- Story: Story 10 (Versioning Policy Hardening — Doc-Init Build (+0) for New E/S/T)
- Task: T00-T06 (Story creation and implementation tasks)
- Version: `v0.2.10.0+0` (Story creation)

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`docs/project-management/kanban/epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md`](../epics/Epic-2/Story-010-doc-init-build-zero-for-new-est.md)
- Task: See Story 10 task checklist

**Note:** This story is blocked by FR-016 (requires discrete Task docs first). Implementation should begin after FR-016 completion.

---

## Rationale

**Why This Matters:**
- **Traceability:** Clear separation between task introduction (docs) and implementation (code)
- **Anti-Pattern Avoidance:** Prevents "first real change shipped under prior task" drift
- **Consistency:** Aligns RW Step 1 with explicit task lifecycle: define → anchor → implement

**Why This Should Be Implemented:**
- Current approach creates ambiguity in version tracking
- Without doc-init anchor, RW Step 1 may select wrong task ID
- Establishes canonical version anchor before functional changes

---

## Open Questions

- Should doc-init be mandatory for **all** new E/S/T, or only when introduced outside an existing RW?
- Should doc-init allow README/index touch-ups, or strictly E/S/T docs only?

---

## References

- **FR-016:** Kanban Granularity & Discrete Task Docs (3-Tier Structure) (prerequisite)
- **Versioning Policy:** `docs/VERSIONING_POLICY.md`
- **RW Step 1 Procedure:** `docs/RW-STEP1-VERSION-BUMP-PROCEDURE.md`
- **Release Workflow Agent Execution:** `docs/release-workflow-agent-execution.md`
- **RW Validators:** Branch context, changelog format validators

---

**Template Usage:**
This FR follows the Kanban Framework FR template.  
This feature request is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation.

