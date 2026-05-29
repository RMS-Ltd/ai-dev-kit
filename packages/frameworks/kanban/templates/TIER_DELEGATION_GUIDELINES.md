---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-11T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Tier Delegation Guidelines

**Purpose:** This document defines the principle of tier delegation in the Kanban framework, ensuring that each tier (Epic → Story → Task) delegates detail to the tier below, avoiding duplication and maintaining a single source of truth.

---

## Core Principle

**Each tier should reference and delegate detail to the tier below, not duplicate it.**

- **Epic** → References Stories (delegates Story detail to Story documents)
- **Story** → References Tasks (delegates Task detail to Task documents)
- **Task** → Contains all detail (leaf node, no delegation below)

---

## What Belongs at Each Tier

### Epic Tier

**✅ What belongs in Epic:**
- Epic-level overview and purpose
- Epic-level goals (high-level)
- Story Checklist (references only, with status/version markers)
- Brief story summaries (1-2 sentences per story)
- Links to Story documents
- Epic-level dependencies and coordination
- Epic-level risks and mitigations
- Epic-level references

**❌ What does NOT belong in Epic:**
- Detailed story descriptions
- Story-level goals, tasks, acceptance criteria
- Task-level details
- Story implementation details
- Task checkboxes with detailed task information

**Example - Good Epic Structure:**
```markdown
## Story Checklist
- [ ] **E4:S11 – Kanban Granularity & Discrete Task Docs** - IN PROGRESS (v0.4.11.4+1)

## Stories
### Story 11: Kanban Granularity & Discrete Task Docs
**Brief Summary:** Implements 3-tier structure with discrete Task documents.

**Story Document:** [`Story-011-kanban-granularity-discrete-task-docs.md`](Story-011-kanban-granularity-discrete-task-docs.md)
```

**Example - Anti-Pattern (Bad Epic Structure):**
```markdown
## Stories
### Story 11: Kanban Granularity & Discrete Task Docs
**Status:** IN PROGRESS
**Priority:** HIGH
**Goal:** Implement 3-tier structure
**Tasks:**
- [ ] T01 – Update Kanban Policy
  - **Input:** Current policy
  - **Deliverable:** Updated policy
  - **Approach:** 1. Read policy 2. Update sections 3. Validate
**Acceptance Criteria:**
- Policy updated
- Tests pass
```
❌ **Problem:** Epic duplicates Story and Task detail. This information belongs in Story and Task documents.

---

### Story Tier

**✅ What belongs in Story:**
- Story-level overview and purpose
- Story-level goals
- Task Checklist (references only, with status/version markers)
- Brief task summaries (1 sentence per task)
- Links to Task documents (for separate file format)
- Story-level acceptance criteria (not task-level)
- Story-level dependencies and coordination
- Story-level references

**❌ What does NOT belong in Story:**
- Detailed task descriptions (unless brief summary)
- Task implementation details (Approach steps)
- Task-level acceptance criteria (these belong in Task docs)
- Task input/deliverable details (unless brief summary)
- Duplication of Task content

**Example - Good Story Structure:**
```markdown
## Task Checklist
- [ ] **E4:S11:T01 – Update Kanban Governance Policy** ✅ COMPLETE (v0.4.11.1+1)
  - Task Doc: [`Task-001-update-kanban-governance-policy.md`](Task-001-update-kanban-governance-policy.md)

## Tasks
### E4:S11:T01 – Update Kanban Governance Policy
**Brief Summary:** Updates Kanban policy to mandate 3-tier structure and discrete Task docs.

**Task Document:** [`Task-001-update-kanban-governance-policy.md`](Task-001-update-kanban-governance-policy.md)
```

**Example - Anti-Pattern (Bad Story Structure):**
```markdown
## Tasks
### E4:S11:T01 – Update Kanban Governance Policy
**Input:** Current Kanban policy document
**Deliverable:** Updated policy with 3-tier structure requirements
**Approach:**
1. Read current policy
2. Identify sections to update
3. Add 3-tier structure requirements
4. Add discrete Task doc requirements
5. Validate format
**Acceptance Criteria:**
- Policy includes 3-tier structure requirement
- Policy includes Task doc requirement
- Format validated
```
❌ **Problem:** Story duplicates Task detail. This information belongs in the Task document.

---

### Task Tier

**✅ What belongs in Task:**
- **ALL** task-level detail (Task is the leaf node)
- Task ID, Scope, Input, Deliverable
- Detailed Approach (step-by-step)
- Task-level Acceptance Criteria (measurable, testable)
- Dependencies, Blockers, Parallel Development Candidacy
- Related Work (BR/FR links, related tasks/stories)
- Version Anchor, Notes, Completion Summary
- References, Next Actions

**❌ What does NOT belong in Task:**
- Story-level information (unless contextually relevant)
- Epic-level information (unless contextually relevant)
- Duplication of information from Story/Epic (reference instead)

**Example - Good Task Structure:**
```markdown
# Epic 4, Story 11, Task 1: Update Kanban Governance Policy

## Scope
Updates the Kanban governance policy to mandate 3-tier structure (Epic → Story → Task) and require discrete Task documents.

## Input
- Current Kanban governance policy: `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- FR-016 requirements for 3-tier structure

## Deliverable
- Updated Kanban governance policy with 3-tier structure requirements
- Updated local Kanban policy (if applicable)

## Approach
1. Read current Kanban governance policy
2. Identify sections requiring updates
3. Add explicit requirement for 3-tier structure
4. Add requirement for discrete Task documents
5. Update FR/BR → Task → Story → Epic flow documentation
6. Validate format and consistency

## Acceptance Criteria
- [ ] Policy explicitly requires 3-tier structure
- [ ] Policy mandates discrete Task documents
- [ ] Format validated
- [ ] Local policy updated (if applicable)
```

---

## Delegation Patterns

### Pattern 1: Reference with Link (Recommended)

**Epic → Story:**
```markdown
### Story 11: Kanban Granularity & Discrete Task Docs
**Brief Summary:** Implements 3-tier structure with discrete Task documents.

**Story Document:** [`Story-011-kanban-granularity-discrete-task-docs.md`](Story-011-kanban-granularity-discrete-task-docs.md)
```

**Story → Task:**
```markdown
### E4:S11:T01 – Update Kanban Governance Policy
**Brief Summary:** Updates Kanban policy to mandate 3-tier structure.

**Task Document:** [`Task-001-update-kanban-governance-policy.md`](Task-001-update-kanban-governance-policy.md)
```

### Pattern 2: Delimited Section (Alternative)

**Story → Task (Delimited Section):**
```markdown
### E4:S11:T01 – Update Kanban Governance Policy

> **Note:** This task is documented as a delimited section within this Story document. All Task-level detail lives in this section.

**Scope:** Updates Kanban policy to mandate 3-tier structure.

**Input:** Current Kanban governance policy

**Deliverable:** Updated policy with 3-tier structure requirements

**Approach:**
1. Read current policy
2. Update sections
3. Validate

**Acceptance Criteria:**
- [ ] Policy updated
- [ ] Format validated
```

> **Note:** Even when using delimited sections, the Task content should be self-contained and complete. The Story document serves as a container, but the Task section contains all Task-level detail.

---

## Best Practices

1. **Always reference, never duplicate:** Use links and brief summaries, not full content.
2. **Checklist as single source of truth:** Task/Story checklists in Epic/Story documents should match the lower-tier documents exactly.
3. **Brief summaries only:** Epic/Story summaries should be 1-2 sentences, not detailed descriptions.
4. **Link to detail:** Always provide links to lower-tier documents for full detail.
5. **Validate consistency:** After updates, verify that Epic → Story → Task references are consistent.

---

## Anti-Patterns to Avoid

### ❌ Anti-Pattern 1: Epic Contains Story Detail
```markdown
## Stories
### Story 11: Kanban Granularity
**Status:** IN PROGRESS
**Priority:** HIGH
**Goal:** Implement 3-tier structure
**Tasks:**
- [ ] T01 – Update Policy
  - **Input:** Policy doc
  - **Approach:** 1. Read 2. Update 3. Validate
```
**Problem:** Epic duplicates Story and Task detail.

### ❌ Anti-Pattern 2: Story Contains Task Detail
```markdown
## Tasks
### E4:S11:T01 – Update Policy
**Input:** Policy document
**Deliverable:** Updated policy
**Approach:**
1. Read policy
2. Update sections
3. Validate
```
**Problem:** Story duplicates Task detail. Should reference Task document instead.

### ❌ Anti-Pattern 3: Inconsistent References
```markdown
## Story Checklist
- [ ] **E4:S11 – Kanban Granularity** - IN PROGRESS

## Stories
### Story 11: Kanban Granularity & Discrete Task Docs
**Status:** TODO
```
**Problem:** Checklist and detailed section don't match. Checklist says IN PROGRESS, detailed section says TODO.

---

## Migration Guide

> **See also:** `DELEGATION_COMPLIANCE_AUDIT.md` for detailed audit findings and migration progress tracking.

When updating existing Epic/Story documents to follow tier delegation:

1. **Identify duplicated detail:**
   - Epic documents: Remove detailed Story information (Status, Goals, Tasks, Acceptance Criteria)
   - Story documents: Remove detailed Task information (Input, Deliverable, Approach, Acceptance Criteria)

2. **Replace with references:**
   - Epic: Replace detailed Story sections with brief summaries and links
   - Story: Replace detailed Task sections with brief summaries and links

3. **Update checklists:**
   - Ensure checklists match lower-tier document status
   - Use version markers consistently

4. **Validate consistency:**
   - Verify all references are correct
   - Ensure links work
   - Check that status matches across tiers

**For detailed migration steps, examples, and compliance audit, see:** `packages/frameworks/kanban/templates/DELEGATION_COMPLIANCE_AUDIT.md`

---

## References

- **Kanban Governance Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`
- **Epic Template:** `packages/frameworks/kanban/templates/EPIC_TEMPLATE.md`
- **Story Template:** `packages/frameworks/kanban/templates/STORY_TEMPLATE.md`
- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **FR-016:** Kanban Granularity & Discrete Task Docs

---

**Last Updated:** 2025-12-11  
**Version:** v0.4.11.6+0

