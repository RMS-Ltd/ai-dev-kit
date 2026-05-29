---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# Epic X, Story Y, Task Z: [Task Title]

> **Example:** See `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md` for a complete example of this template in use.

**Status:** [TODO/IN PROGRESS/COMPLETE]  
**Priority:** [HIGH/MEDIUM/LOW]  
**Last updated:** [YYYY-MM-DD] (vX.Y.Z.T+B – [summary])  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** vX.Y.Z.T+B  
**Code:** EXXSYYTZZ

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}` (e.g., `E4:S11:T01`)

**Full Task ID:** `EXX:SYY:TZZ`

---

## Scope

[Clear description of what this task accomplishes. What problem does it solve? What value does it deliver?]

---

## Input

[What is required to start this task? Dependencies, prerequisites, inputs from other tasks or external sources.]

**IPW planning artifact (when used):** If you ran **IPW** / **IPW E:S:T** for this task, link the plan doc here (and under **References**) using the **same relative path** in both places. The plan doc must link back to this task in its **Host Task** header (**FR-042**).

---

## Deliverable

[What is produced by this task? Specific artifacts, documents, code, or outcomes.]

---

## Acceptance Criteria

- [ ] Criterion one (measurable, testable)
- [ ] Criterion two (measurable, testable)
- [ ] Criterion three (measurable, testable)

---

## Approach

1. Step one
2. Step two
3. Step three

---

## Dependencies

**Depends On:**
- [Epic, Story, Task, or external dependency]
- [Another dependency]

**Blocks:**
- [What this task blocks]

**Blocked By:**
- [What blocks this task]

**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

---

## Cross-Wiring

> **Bidirectional Wiring Required:** Every cross-wire must be bidirectional. If Task A links to Task B, Task B must link back to Task A. See [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) for complete guidance.
>
> **Context Required:** Every cross-wire must include context explaining *why* tasks are related. Generic links (e.g., "related task") are prohibited.
>
> **See:** [`task-template-cross-wiring-sop.md`](../../../docs/architecture/standards-and-adrs/task-template-cross-wiring-sop.md) for the Standard Operating Procedure.

**Relationship Types:**

- **Complements** — Tasks that work together to achieve a goal
- **Coordinates With** — Tasks that need to be synchronized
- **Informs** — Tasks that provide context or information
- **Follows** — Tasks that logically come after (non-blocking)
- **Precedes** — Tasks that logically come before (non-blocking)
- **Related To** — General relationship (use when specific type doesn't fit)

**Related Tasks:**

- **[EXX:SYY:TZZ: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]

**Related BR/FR Documents:**

- **[BR-XXX: Bug Report Title](path/to/BR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]
- **[FR-XXX: Feature Request Title](path/to/FR-XXX.md)** - **Relationship Type:** [Relationship Type] - **Context:** [Why related]

**Cross-Wiring Notes:**

[Additional notes about cross-wiring, coordination requirements, or relationship context]

### Dependencies vs Cross-Wiring

| Aspect | Dependencies | Cross-Wiring |
|--------|-------------|--------------|
| **Nature** | Blocking / sequential | Contextual / informational |
| **Direction** | `Depends On` / `Blocks` | Bidirectional (always both ways) |
| **Usage** | Task cannot start until dependency resolves | Tasks can proceed independently but share context |
| **Examples** | "Blocked by: E2:S01:T01" | "Informs: E2:S01:T03 — provides analysis for design" |

### Cross-Wiring Examples

**Example 1: Complements**
```markdown
- **[E9:S01:T01: Current State Inventory](../../Epic-9/Story-001/T01-current-state-inventory.md)** - **Relationship Type:** Complements - **Context:** Both tasks analyze RC readiness gaps from different perspectives; inventory provides input for gap analysis
```

**Example 2: Coordinates With**
```markdown
- **[E9:S01:T07: Roadmap Planning](../../Epic-9/Story-001/T07-roadmap-planning.md)** - **Relationship Type:** Coordinates With - **Context:** Both tasks modify the same versioning policy document; changes must be synchronized
```

**Example 3: Informs**
```markdown
- **[E2:S01:T02: RC=1 Criteria Definition](../../Epic-2/Story-001/T02-rc1-criteria-definition.md)** - **Relationship Type:** Informs - **Context:** Criteria definition provides context and constraints for this task's design decisions
```

---

## Related Work

> **Bidirectional Wiring Reminder:** Every link in this section must be bidirectional. If you link to a BR/FR, task, or story, that item must link back to this task. See [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) for guidance. For task-to-task relationships with relationship types, use the **Cross-Wiring** section above.

**Related BR/FR Links:**
- [BR-XXX: Bug Report Title](path/to/BR-XXX.md) — *Bidirectional: BR must link back to this task in its Kanban Links section*
- [FR-XXX: Feature Request Title](path/to/FR-XXX.md) — *Bidirectional: FR must link back to this task in its Kanban Links section*

**Related Tasks:**
- [EXX:SYY:TZZ: Related Task Title](path/to/task.md) — *Bidirectional: task must link back to this task*

**Related Stories:**
- [EXX:SYY: Related Story Title](path/to/story.md) — *Bidirectional: story must reference this task*

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)` (e.g., `✅ COMPLETE (v0.4.11.1+1)`)

**When Task is Complete:**
- Add forensic marker to Task document
- Add forensic marker to Story checklist
- Update version file with task completion
- Update changelog with task completion

---

## Notes

[Additional notes, context, or considerations for this task.]

---

## Completion Summary

[To be filled when task is complete. What was delivered? Lessons learned? Metrics achieved?]

---

## References

- [Related docs, PRs, commits, diagrams]
- [External resources, documentation, standards]

---

## Next Actions

- [ ] Action one (if task is blocked or requires follow-up)
- [ ] Action two
