---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
---

# Epic 1, Story 1, Task 6: Configure code quality tools (linters, formatters)

> **Example:** See `packages/frameworks/kanban/examples/Task-001-Example-Separate-File.md` for a complete example of this template in use.

**Status:** [TODO/IN PROGRESS/COMPLETE]  
**Priority:** [HIGH/MEDIUM/LOW]  
**Last updated:** [YYYY-MM-DD] (v0.1.1.6+0 – [summary])  
**Started:** [YYYY-MM-DD]  
**Completed:** [YYYY-MM-DD]  
**Version:** v0.1.1.6+0  
**Code:** E01S01T06

---

## Task ID

**Format:** `E01:S01:T06` (e.g., `E04:S11:T01`)

**Full Task ID:** `E01:S01:T06`

---

## Scope

Configure code quality tools (linters, formatters) for the {PROJECT_NAME} project.

---

## Input

- Requirements and specifications
- configure code quality tools (linters, formatters) requirements
- {PROJECT_NAME} project context

**IPW planning artifact (when used):** If you ran **IPW** / **IPW E:S:T** for this task, link the plan doc here (and under **References**) using the **same relative path** in both places. The plan doc must link back to this task in its **Host Task** header (**FR-042**).

---

## Deliverable

- configure code quality tools (linters, formatters) completed
- Documentation and artifacts
- Verification and validation

---

## Acceptance Criteria

- [ ] Configure code quality tools (linters, formatters) completed successfully
- [ ] Documentation and artifacts created
- [ ] Verification and validation completed

---

## Approach

1. Analyze requirements for configure code quality tools (linters, formatters)
2. Design approach and plan
3. Implement configure code quality tools (linters, formatters)
4. Test and validate
5. Document and deliver

---

## Dependencies

**Depends On:**
- E01:S01:T05

**Blocks:**
- E01:S01:T07

**Blocked By:**
- [What blocks this task]

**Parallel Development Candidacy:** [Safe / Blocked] because [reason]

---

## Cross-Wiring

> **Bidirectional Wiring Required:** Every cross-wire must be bidirectional. If Task A links to Task B, Task B must link back to Task A. See [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) for complete guidance.
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

- **[E01:S01:T06: Task Title](path/to/task.md)** - **Relationship Type:** [Complements/Coordinates With/Informs/Follows/Precedes/Related To] - **Context:** [Why tasks are related]

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
| **Examples** | "Blocked by: E02:S01:T01" | "Informs: E02:S01:T03 — provides analysis for design" |

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

> **Bidirectional Wiring Reminder:** Every link in this section must be bidirectional. If you link to a BR/FR, task, or story, that item must link back to this task. See [`BIDIRECTIONAL_WIRING_PRINCIPLE.md`](../../../docs/governance/principles/bidirectional-wiring-principle.md) for guidance. For task-to-task relationships with relationship types, use the **Cross-Wiring** section above.

**Related BR/FR Links:**
- [BR-XXX: Bug Report Title](path/to/BR-XXX.md) — *Bidirectional: BR must link back to this task in its Kanban Links section*
- [FR-XXX: Feature Request Title](path/to/FR-XXX.md) — *Bidirectional: FR must link back to this task in its Kanban Links section*

**Related Tasks:**
- [E01:S01:T06: Related Task Title](path/to/task.md) — *Bidirectional: task must link back to this task*

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
