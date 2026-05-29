---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bidirectional Wiring Principle: BR/FR ↔ Task ↔ Documentation

**Purpose:** This document defines the principle of bidirectional wiring between Bug Reports (BR), Feature Requests (FR), Tasks, and documentation, ensuring traceability and discoverability across the knowledge base.

**Audience:** Project maintainers, developers, agents, and anyone creating or linking work items

---

## Overview

**Bidirectional wiring** means that every link between work items goes both ways:
- If BR-002 links to Task E2:S01:T06, then Task E2:S01:T06 must link back to BR-002
- If Task references documentation, documentation should reference the Task
- If documentation references a BR/FR, the BR/FR should reference the documentation

This principle ensures:
- ✅ **Traceability:** Can navigate from any work item to related items
- ✅ **Discoverability:** Can find related work from any starting point
- ✅ **Consistency:** Links stay synchronized and accurate
- ✅ **Knowledge Preservation:** Relationships are preserved over time

---

## Core Principle

**Every relationship must be bidirectional:**

```
BR/FR ←→ Task ←→ Documentation
```

**Not:**
```
BR/FR → Task (one-way only)
```

---

## Wiring Patterns

### Pattern 1: BR/FR → Task

**BR/FR Side (BR_TEMPLATE.md / FR_TEMPLATE.md):**
```markdown
## Intake Decision

**Kanban Links:**
- Epic: [`docs/.../Epic-X.md`](../epics/Epic-X/Epic-X.md)
- Story: [`docs/.../Story-XXX.md`](../epics/Epic-X/Story-XXX.md)
- Task: [E2:S01:T06 - Task Title](../epics/Epic-X/Story-XXX.md#e2s01t06--task-title) (with anchor link)
```

**Task Side (Story document):**
```markdown
### E2:S01:T06 – Task Title

**Input:**  
- **Bug Report:** [BR-002: Bug Title](../../fr-br/BR-002-bug-title.md) (or Feature Request: FR-XXX)

**Related:**
- **Bug Report:** [BR-002: Bug Title](../../fr-br/BR-002-bug-title.md)
- **Documentation:** [Guide Title](../../guides/guide-title.md)
```

---

### Pattern 2: Task → Documentation

**Task Side:**
```markdown
**Related:**
- **Documentation:** [Guide Title](../../guides/guide-title.md) - Explains the pattern
- **Use Case:** [Use Case Title](../../use-cases/use-case-title.md) - Documents the pattern
```

**Documentation Side:**
```markdown
## Related Work

- **Task:** [E2:S01:T06 - Task Title](../../epics/Epic-X/Story-XXX.md#e2s01t06--task-title) - Implements this pattern
- **Bug Report:** [BR-002: Bug Title](../fr-br/BR-002-bug-title.md) - Discovered this pattern
```

---

### Pattern 3: BR/FR → Documentation

**BR/FR Side:**
```markdown
## References

- [Guide Title](../../guides/guide-title.md) - Documents the pattern discovered
- [Use Case Title](../../use-cases/use-case-title.md) - Use case that prompted this BR
```

**Documentation Side:**
```markdown
## Examples

- **BR-002:** [Changelog Validator Ordering Bug](../fr-br/BR-002-changelog-validator-ordering-bug.md) - Example of this pattern
- **Task:** [E2:S01:T06](../../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened) - Implements this pattern
```

---

## Use Case Discovery Pattern

### When Work Reveals a Pattern

**Scenario:** While working on a task, you discover a pattern, use case, or best practice that should be documented.

**Process:**

1. **Recognize the Pattern:**
   - Identify that the work reveals a reusable pattern
   - Determine if it's a use case, best practice, or anti-pattern
   - Assess if it should be documented

2. **Create Documentation:**
   - Create guide, use case doc, or pattern document
   - Document the pattern clearly with examples
   - Reference the work that revealed it

3. **Wire Everything Together:**
   - **BR/FR → Documentation:** Add documentation to BR/FR References section
   - **Task → Documentation:** Add documentation to Task Related section
   - **Documentation → BR/FR:** Add BR/FR to documentation Examples/Related Work
   - **Documentation → Task:** Add Task to documentation Examples/Related Work

**Example Flow:**

```
Work on Task → Discover Pattern → Create Documentation → Wire All Links
```

**Concrete Example (BR-002 Re-opening):**

1. **Work:** Re-opening BR-002 and Task T06
2. **Pattern Discovered:** Re-opening BRs/tasks instead of creating new ones
3. **Documentation Created:** `REOPENING_BR_AND_TASKS_GUIDE.md`
4. **Wiring:**
   - BR-002 → References → REOPENING_BR_AND_TASKS_GUIDE.md
   - Task T06 → Related → REOPENING_BR_AND_TASKS_GUIDE.md
   - REOPENING_BR_AND_TASKS_GUIDE.md → Examples → BR-002, Task T06
   - REOPENING_BR_AND_TASKS_GUIDE.md → References → BR-002, Task T06

---

## Wiring Checklist

When creating or updating work items, ensure bidirectional wiring:

### For BR/FR:
- [ ] BR/FR has "Kanban Links" section linking to Task
- [ ] Task has "Input" or "Related" section linking back to BR/FR
- [ ] If documentation exists, BR/FR references it
- [ ] Documentation references BR/FR

### For Task:
- [ ] Task has "Input" section linking to BR/FR
- [ ] BR/FR has "Kanban Links" section linking to Task
- [ ] If documentation exists, Task references it
- [ ] Documentation references Task

### For Documentation:
- [ ] Documentation references related BR/FR in Examples/Related Work
- [ ] Documentation references related Tasks in Examples/Related Work
- [ ] BR/FR references documentation in References
- [ ] Tasks reference documentation in Related section

---

## Link Format Standards

### Anchor Links for Tasks

Use anchor links for tasks in story documents:

```markdown
- Task: [E2:S01:T06 - Task Title](../epics/Epic-X/Story-XXX.md#e2s01t06--task-title)
```

**Anchor Format:** Convert task title to lowercase, replace spaces with hyphens, remove special characters.

**Example:**
- Task: `E2:S01:T06 – Fix changelog validator ordering bug`
- Anchor: `#e2s01t06--fix-changelog-validator-ordering-bug`

### Relative Paths

Use relative paths from the document location:

```markdown
- From `docs/project-management/kanban/fr-br/BR-002.md`:
  - To Epic: `../epics/Epic-2/Epic-2.md`
  - To Story: `../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`
  - To Task: `../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug`


- From `docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`:
  - To BR: `../../fr-br/BR-002-changelog-validator-ordering-bug.md`
  - To Documentation: `../../fr-br/REOPENING_BR_AND_TASKS_GUIDE.md`

```

---

## Examples

### Example 1: BR-002 and Task T06

**BR-002 (`docs/project-management/kanban/fr-br/BR-002-changelog-validator-ordering-bug.md`):**
```markdown
## Intake Decision

**Kanban Links:**
- Epic: [`docs/project-management/kanban/epics/Epic-2/Epic-2.md`](../epics/Epic-2/Epic-2.md)
- Story: [`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md)
- Task: [E2:S01:T06 - Fix changelog validator ordering bug](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06--fix-changelog-validator-ordering-bug--reopened) (🔄 REOPENED)

## References

- [REOPENING_BR_AND_TASKS_GUIDE.md](REOPENING_BR_AND_TASKS_GUIDE.md) - Guide for reopening BRs/tasks (this BR is an example)
```

**Task T06 (`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`):**
```markdown
### E2:S01:T06 – Fix changelog validator ordering bug 🔄 REOPENED

**Input:**  
- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)

**Related:**
- **Bug Report:** [BR-002: Changelog Validator Ordering Bug](../../fr-br/BR-002-changelog-validator-ordering-bug.md) (REOPENED)
- **Documentation:** [REOPENING_BR_AND_TASKS_GUIDE.md](../../fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Guide for reopening BRs/tasks
```

**Documentation (`docs/project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md`):**
```markdown
## Example: BR-002 Re-opening

See [`BR-002-changelog-validator-ordering-bug.md`](BR-002-changelog-validator-ordering-bug.md) for a complete example

## Example: Task Re-opening

See [`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) Task T06 for an example

## Related Documentation

- [`BR-002-changelog-validator-ordering-bug.md`](BR-002-changelog-validator-ordering-bug.md) - Example reopened BR
- [`docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs.md`](../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) - Example reopened task
```

---

## Use Case: Work → Pattern Discovery → Documentation → Wiring

### Scenario

While working on re-opening BR-002 and Task T06, you discover:
1. **Pattern:** Re-opening BRs/tasks is better than creating new ones
2. **Use Case:** When bugs persist despite fix attempts
3. **Best Practice:** Document the pattern for future use

### Process

1. **Work Phase:**
   - Re-open BR-002
   - Re-open Task T06
   - Add context and evidence

2. **Pattern Recognition:**
   - Recognize this is a reusable pattern
   - Identify it should be documented

3. **Documentation Creation:**
   - Create `REOPENING_BR_AND_TASKS_GUIDE.md`
   - Document the pattern, process, examples

4. **Wiring Phase:**
   - **BR-002 → Documentation:** Add to References section
   - **Task T06 → Documentation:** Add to Related section
   - **Documentation → BR-002:** Add to Examples section
   - **Documentation → Task T06:** Add to Examples section
   - **BR-002 ↔ Task T06:** Ensure bidirectional links exist

### Result

All work items are now bidirectionally wired:
- BR-002 ↔ Task T06 ↔ Documentation
- Can navigate from any starting point to related items
- Pattern is discoverable and reusable

---

## Best Practices

1. **Always Wire Bidirectionally:**
   - If A links to B, B must link back to A
   - Use consistent link formats
   - Verify links work (test anchor links)

2. **Wire During Creation:**
   - Don't defer wiring - do it immediately
   - Include wiring in task completion checklist
   - Verify wiring before marking complete

3. **Wire When Discovering Patterns:**
   - When work reveals a pattern, document it
   - Wire the documentation to the work
   - Wire the work to the documentation

4. **Maintain Wiring:**
   - Update links when moving/renaming files
   - Verify links during reviews
   - Fix broken links immediately

5. **Use Consistent Formats:**
   - Follow link format standards
   - Use relative paths consistently
   - Use anchor links for tasks

---

## Anti-Patterns to Avoid

❌ **One-Way Links:** BR links to Task but Task doesn't link back  
❌ **Missing Documentation Links:** Pattern documented but not linked from work  
❌ **Broken Links:** Links that don't resolve (wrong paths, missing anchors)  
❌ **Deferred Wiring:** "I'll add links later" (they get forgotten)  
❌ **Inconsistent Formats:** Different link formats in different places  

---

## Validation

### Manual Validation Checklist

- [ ] Every BR/FR has links to its Task
- [ ] Every Task has links back to its BR/FR
- [ ] Documentation references related BR/FR/Tasks
- [ ] BR/FR/Tasks reference related documentation
- [ ] All links resolve correctly
- [ ] Anchor links work (for tasks)

### Automated Validation (Future)

Consider creating a validation script that:
- Checks for bidirectional links
- Validates link paths
- Reports missing links
- Suggests link additions

---

## Related Documentation

- [REOPENING_BR_AND_TASKS_GUIDE.md](REOPENING_BR_AND_TASKS_GUIDE.md) - Example of pattern discovery and wiring
- [USE_CASE_METHODOLOGY.md](../../../knowledge/USE_CASE_METHODOLOGY.md) - Use case methodology (includes wiring)
- [UC-D-002: Bidirectional Wiring](../../../knowledge/use-cases/discovered/UC-D-002-bidirectional-wiring.md) - Discovered use case (promoted to canonical)
- [FR_BR_INTAKE_GUIDE.md (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) - Intake process (includes linking)
- [BR_TEMPLATE.md (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/BR_TEMPLATE.md) - BR template (includes Kanban Links section)
- [FR_TEMPLATE.md (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/templates/FR_TEMPLATE.md) - FR template (includes Kanban Links section)

---

## Examples in Codebase

**Good Examples:**
- BR-002 ↔ Task E2:S01:T06 ↔ REOPENING_BR_AND_TASKS_GUIDE.md (fully wired)
- BR-003 ↔ Task E2:S01:T07 (BR references task, task references BR)

**Pattern to Follow:**
- Always ensure bidirectional links
- Document patterns discovered during work
- Wire documentation to the work that revealed it

---

**Template Usage:**
- This principle applies to all BR/FR, Tasks, and documentation
- Use this guide when creating or updating work items
- Verify bidirectional wiring before marking work complete

---

_This document is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
