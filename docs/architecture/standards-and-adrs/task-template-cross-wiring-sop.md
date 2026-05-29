---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-16T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Standard Operating Procedure: Task Template Cross-Wiring

**Version:** 1.0  
**Last Updated:** 2026-01-16  
**Framework:** Kanban Framework  
**Related:** `TASK_TEMPLATE.md`, `BIDIRECTIONAL_WIRING_PRINCIPLE.md`, `FR-035-task-template-cross-wiring-section.md`

---

## Overview

This SoP defines the standard procedure for cross-wiring (interconnecting) tasks in task documentation, ensuring bidirectional traceability, clear relationship context, and maintainable links between related work items.

**Key Principle:** Every relationship between tasks must be bidirectional and contextualized. If Task A links to Task B, Task B must link back to Task A, and both should explain why they are related.

---

## Purpose

**Why This SoP Exists:**
- Ensures consistent cross-wiring patterns across all task documents
- Provides clear guidance on when and how to link related tasks
- Maintains bidirectional traceability between interconnected work items
- Prevents one-way links that create discoverability gaps
- Enables impact analysis when tasks change

**What This SoP Covers:**
- Cross-wiring section structure in task templates
- Relationship types and when to use them
- Bidirectional linking requirements
- Context guidance for task relationships
- Maintenance and review procedures

**What This SoP Does NOT Cover:**
- Task dependencies (blocking/depends-on relationships) - covered in "Dependencies" section
- BR/FR intake and assignment - covered in intake workflow
- Versioning and release procedures - covered in Release Workflow

---

## Scope

**Applies To:**
- All task documents created using the Kanban Framework
- Task template (`TASK_TEMPLATE.md`)
- Cross-wiring between tasks within same epic/story
- Cross-wiring between tasks across different epics/stories
- Cross-wiring between tasks and BR/FR documents

**Does NOT Apply To:**
- Dependencies (blocking/depends-on) - use "Dependencies" section
- Story-level relationships - use Story document structure
- Epic-level relationships - use Epic document structure

---

## Roles & Responsibilities

**Task Author:**
- Identify related/interconnected tasks
- Add cross-wiring section to task document
- Ensure bidirectional links (add links to related tasks, update related tasks to link back)
- Provide context for why tasks are related
- Use appropriate relationship types

**Task Reviewer:**
- Verify cross-wiring section is complete
- Check bidirectional links are present
- Validate relationship types are appropriate
- Ensure context is clear and meaningful

**Framework Maintainer:**
- Update task template with cross-wiring guidance
- Maintain bidirectional wiring principle documentation
- Provide examples and best practices
- Review and update SoP as needed

---

## Core Principles

### 1. Bidirectional Wiring (Mandatory)

**Rule:** Every cross-wire must be bidirectional.

**Example:**
- Task E9:S01:T08 links to Task E9:S01:T01
- Task E9:S01:T01 must link back to Task E9:S01:T08
- Both links must be present and maintained

**Rationale:**
- Enables navigation from any starting point
- Prevents discoverability gaps
- Maintains knowledge preservation
- Ensures consistency

### 2. Contextual Relationships (Required)

**Rule:** Every cross-wire must include context explaining why tasks are related.

**Example:**
- Not: "Related Task: E9:S01:T01"
- Yes: "Related Task: E9:S01:T01 (complements - both analyze RC readiness gaps)"

**Rationale:**
- Helps readers understand relationships
- Enables better decision-making
- Prevents weak or outdated links
- Improves knowledge transfer

### 3. Relationship Types (Standardized)

**Rule:** Use standardized relationship types to categorize cross-wires.

**Relationship Types:**
- **Complements:** Tasks that work together to achieve a goal
- **Coordinates With:** Tasks that need to be synchronized
- **Informs:** Tasks that provide context or information
- **Follows:** Tasks that logically come after (non-blocking)
- **Precedes:** Tasks that logically come before (non-blocking)
- **Related To:** General relationship (use when specific type doesn't fit)

**Rationale:**
- Provides semantic meaning to relationships
- Enables better filtering and grouping
- Improves understanding of task connections
- Supports automation and tooling

---

## Procedure

### Step 1: Identify Related Tasks

**When:** During task creation or when task scope changes

**How:**
1. Review task scope and deliverables
2. Identify tasks that:
   - Work together to achieve a goal
   - Need coordination or synchronization
   - Provide context or information
   - Are logically related (follow/precede)
   - Modify same documents or systems
3. Consider tasks in:
   - Same story
   - Same epic (different stories)
   - Different epics
   - Related BR/FR documents

**Output:** List of related task IDs with relationship types

---

### Step 2: Add Cross-Wiring Section

**When:** After identifying related tasks

**How:**
1. Add "Cross-Wiring" section to task document (after "Dependencies" section, before "Version Anchor")
2. Use standardized format (see Template Structure below)
3. For each related task:
   - Include full task ID (E\{epic\}:S\{story\}:T\{task\})
   - Include task title
   - Include relationship type
   - Include context (why related)
   - Include link to task document

**Template Structure:**
```markdown
## Cross-Wiring

**Related Tasks:**

- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]

**Related BR/FR Documents:**

- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]

- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]
```

**Output:** Cross-wiring section added to task document

---

### Step 3: Ensure Bidirectional Links

**When:** After adding cross-wiring section

**How:**
1. For each related task listed:
   - Open related task document
   - Check if it links back to current task
   - If not, add bidirectional link to related task's cross-wiring section
   - Use same relationship type and context (or complementary context)
2. For each BR/FR document listed:
   - Open BR/FR document
   - Check if it links to current task
   - If not, add link in BR/FR's "Related Work" or "Kanban Links" section

**Output:** All cross-wires are bidirectional

---

### Step 4: Provide Context

**When:** When adding each cross-wire

**How:**
1. For each relationship, explain:
   - Why tasks are related
   - How they work together
   - What information or context is shared
   - Any coordination requirements
2. Use clear, concise language
3. Avoid generic statements (e.g., "related task")
4. Be specific about the relationship

**Example Context:**
- "Complements - Both tasks analyze RC readiness gaps from different perspectives"
- "Coordinates With - Both tasks modify the same versioning policy document"
- "Informs - This task provides analysis that informs the other task's design decisions"

**Output:** Context provided for all cross-wires

---

### Step 5: Review and Validate

**When:** Before task completion or during review

**How:**
1. Review cross-wiring section:
   - All related tasks identified?
   - All links bidirectional?
   - Context clear and meaningful?
   - Relationship types appropriate?
2. Validate links:
   - All task IDs correct?
   - All links resolve to valid documents?
   - All BR/FR links present?
3. Check for stale links:
   - Related tasks still exist?
   - Task IDs haven't changed?
   - Documents haven't moved?

**Output:** Cross-wiring section validated and complete

---

## Template Structure

### Enhanced Task Template Section

**Location:** After "Dependencies" section, before "Version Anchor" section

**Format:**
```markdown
## Cross-Wiring

> **Bidirectional Wiring Required:** Every cross-wire must be bidirectional. If Task A links to Task B, Task B must link back to Task A.
> 
> **Context Required:** Every cross-wire must include context explaining why tasks are related.
> 
> **See:** [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) for complete guidance.

**Related Tasks:**

- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]

**Related BR/FR Documents:**

- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]

- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]

**Cross-Wiring Notes:**

[Additional notes about cross-wiring, coordination requirements, or relationship context]
```

---

## Relationship Types

### Complements

**Definition:** Tasks that work together to achieve a goal.

**When to Use:**
- Tasks that are part of the same solution
- Tasks that address different aspects of the same problem
- Tasks that combine to deliver a complete feature

**Example:**
- Task E9:S01:T01 (Current State Inventory) complements Task E9:S01:T03 (Gap Analysis)
- Both work together to understand RC readiness gaps

---

### Coordinates With

**Definition:** Tasks that need to be synchronized.

**When to Use:**
- Tasks that modify the same documents or systems
- Tasks that need to be executed in coordination
- Tasks that share resources or dependencies

**Example:**
- Task E9:S01:T08 (Repository Story Analysis) coordinates with Task E9:S01:T07 (Roadmap)
- Both modify versioning and Kanban policies

---

### Informs

**Definition:** Tasks that provide context or information.

**When to Use:**
- Tasks that provide analysis or research
- Tasks that inform design decisions
- Tasks that provide context for other tasks

**Example:**
- Task E9:S01:T02 (RC=1 Criteria Definition) informs Task E9:S01:T03 (Gap Analysis)
- Criteria definition provides context for gap analysis

---

### Follows

**Definition:** Tasks that logically come after (non-blocking).

**When to Use:**
- Tasks that build on previous work
- Tasks that use outputs from previous tasks
- Sequential tasks that don't block each other

**Example:**
- Task E9:S01:T07 (Roadmap) follows Task E9:S01:T06 (Checklist Creation)
- Roadmap uses checklist as input

---

### Precedes

**Definition:** Tasks that logically come before (non-blocking).

**When to Use:**
- Tasks that provide inputs for later tasks
- Tasks that set up context for later work
- Sequential tasks that don't block each other

**Example:**
- Task E9:S01:T01 (Current State Inventory) precedes Task E9:S01:T03 (Gap Analysis)
- Inventory provides input for gap analysis

---

### Related To

**Definition:** General relationship (use when specific type doesn't fit).

**When to Use:**
- Tasks that are related but don't fit other categories
- Tasks with complex or multi-faceted relationships
- Tasks that share themes or domains

**Example:**
- Task E9:S01:T08 (Repository Story Analysis) related to Task E9:S05 (Canonical E/S/T Review)
- Both address structural issues but in different contexts

---

## Best Practices

### 1. Keep Cross-Wiring Focused

**Guideline:** Only include tasks that are directly related. Avoid weak or tangential relationships.

**Rationale:**
- Prevents clutter and cognitive overload
- Maintains meaningful relationships
- Easier to maintain and review

**Example:**
- ✅ Include: Tasks that work together on same problem
- ❌ Exclude: Tasks that are vaguely related or share only themes

---

### 2. Use Consistent Format

**Guideline:** Always use full task ID format (E\{epic\}:S\{story\}:T\{task\}) and include task title.

**Rationale:**
- Enables parsing and automation
- Improves readability
- Prevents ambiguity

**Example:**
- ✅ Good: `[E9:S01:T08: Repository Story Abstract Space Contradiction](path/to/task.md)`
- ❌ Bad: `T08` or `Repository Story Analysis`

---

### 3. Maintain Links Actively

**Guideline:** When tasks change, update cross-wiring sections in related tasks.

**Rationale:**
- Prevents stale links
- Maintains accuracy
- Ensures discoverability

**Example:**
- If Task E9:S01:T08 is renumbered to T09, update all tasks that link to it

---

### 4. Provide Meaningful Context

**Guideline:** Context should be specific and actionable, not generic.

**Rationale:**
- Helps readers understand relationships
- Enables better decision-making
- Prevents weak links

**Example:**
- ✅ Good: "Complements - Both tasks analyze RC readiness gaps from different perspectives"
- ❌ Bad: "Related task"

---

### 5. Review Periodically

**Guideline:** Review cross-wiring sections during task reviews and updates.

**Rationale:**
- Catches stale links
- Identifies missing relationships
- Maintains accuracy

**Example:**
- Review cross-wiring when task status changes
- Review cross-wiring when task scope changes
- Review cross-wiring during epic/story reviews

---

## Tools & Resources

**Required:**
- Task Template: `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- Bidirectional Wiring Principle: `docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md`
- This SoP: `docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md`

**Recommended:**
- Link validation tools (if available)
- Cross-reference checking scripts
- Dependency graph visualization

---

## Revision History

**Version 1.0 (2026-01-16):**
- Initial SoP created based on web research and best practices
- Defines cross-wiring procedure and relationship types
- Establishes bidirectional wiring requirements
- Provides template structure and examples

---

## Review Schedule

**Review Frequency:** Quarterly or when task template changes

**Review Process:**
1. Review cross-wiring usage across recent tasks
2. Identify patterns or issues
3. Update SoP if needed
4. Update task template if needed
5. Communicate changes to framework users

**Next Review Due:** 2026-04-16

---

## Validation

**SoP Compliance Checklist:**
- [ ] Cross-wiring section present in task document
- [ ] All related tasks identified
- [ ] All links bidirectional
- [ ] Context provided for all relationships
- [ ] Relationship types appropriate
- [ ] Links resolve to valid documents
- [ ] No stale or broken links

**Enforcement:**
- Task reviewers should verify cross-wiring compliance
- Framework maintainers should provide guidance
- Automated tools (if available) should validate links

---

## References

- **FR-035:** [`FR-035-task-template-cross-wiring-section.md`](../../project-management/kanban/fr-br/FR-035-task-template-cross-wiring-section.md)
- **Bidirectional Wiring Principle:** [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md)
- **Task Template:** `packages/frameworks/kanban/templates/TASK_TEMPLATE.md`
- **Kanban Policy:** `packages/frameworks/kanban/policies/kanban-governance-policy.md`

---

## Appendix: Research Sources

**Web Research Sources:**
- SOP Template Best Practices (Asana, ClickUp, Smartsheet, Scribe, etc.)
- Task Relationship Documentation Patterns
- Bidirectional Linking Best Practices
- Cross-Reference Maintenance Procedures

**Key Findings:**
- Most SOP templates include "Related Work" or "Related Documents" sections
- Bidirectional linking is critical for traceability
- Relationship types improve semantic meaning
- Context is essential for understanding relationships
- Regular review prevents stale links

---

_This SoP is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._

