---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Use Case Methodology: Canonical vs Discovered Use Cases

**Purpose:** This document defines the methodology for organizing, categorizing, and managing use cases in the Knowledge Base, distinguishing between canonical (design-phase) and discovered (implementation-phase) use cases.

**Audience:** Project maintainers, designers, developers, and anyone documenting or discovering use cases

---

## Overview

Use cases in the Knowledge Base fall into two categories:

1. **Canonical Use Cases:** Planned, designed use cases identified during the design phase before implementation
2. **Discovered Use Cases:** Patterns, practices, or scenarios discovered during actual work/implementation

Both are valuable and should be documented, but they serve different purposes and have different characteristics.

---

## Use Case Categories

### Canonical Use Cases

**Definition:** Use cases identified and documented during the design/planning phase, before implementation begins.

**Characteristics:**
- ✅ Planned and intentional
- ✅ Part of original design/architecture
- ✅ Documented before implementation
- ✅ Represent intended usage patterns
- ✅ Stable and well-defined
- ✅ Part of framework/product design

**Examples:**
- Framework adoption patterns (Template → All Packages, Existing → Some Packages)
- Workflow execution patterns (Release Workflow, Intake Workflow)
- Versioning patterns (Canonical ordering, Doc-init builds)
- Kanban organization patterns (3-tier structure, discrete task docs)

**Location:** `docs/architecture/use-cases/canonical/`

**Naming Convention:** `UC-XXX-[descriptive-title].md` (UC implies canonical)

**Metadata:**
```yaml
use_case_type: canonical
design_phase: true
discovered_during_work: false
status: active|deprecated|superseded
```

---

### Discovered Use Cases

**Definition:** Use cases, patterns, or practices discovered during actual work, implementation, or problem-solving.

**Characteristics:**
- ✅ Emergent from real work
- ✅ Discovered during implementation
- ✅ Represent actual patterns that emerged
- ✅ May reveal gaps in original design
- ✅ Often documented after the fact
- ✅ Can inform future canonical design

**Examples:**
- Re-opening BRs/tasks instead of creating new ones
- Bidirectional wiring between BR/FR, Tasks, and documentation
- Pattern discovery during work → documentation → wiring
- Workaround patterns that became best practices

**Location:** `docs/knowledge/use-cases/discovered/`

**Naming Convention:** `UC-D-XXX-[descriptive-title].md`

**Metadata:**
```yaml
use_case_type: discovered
design_phase: false
discovered_during_work: true
discovery_date: YYYY-MM-DD
discovered_in: [Task/BR/FR reference]
status: active|deprecated|promoted_to_canonical
```

---

## Use Case Lifecycle

### Canonical Use Cases

```
Design Phase → Document → Implement → Validate → Maintain
```

**Stages:**
1. **Design:** Identified during design/planning
2. **Documented:** Written up before implementation
3. **Implemented:** Built according to use case
4. **Validated:** Verified through usage
5. **Maintained:** Updated as needed

### Discovered Use Cases

```
Work → Pattern Recognition → Document → Wire → Validate → (Optional) Promote to Canonical
```

**Stages:**
1. **Work:** Actual work reveals pattern
2. **Recognition:** Pattern identified and recognized
3. **Documentation:** Pattern documented
4. **Wiring:** Linked to related BR/FR, Tasks, documentation
5. **Validation:** Verified through usage
6. **Promotion (Optional):** May become canonical if widely applicable

---

## Use Case Template

### Canonical Use Case Template

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
use_case_type: canonical
design_phase: true
discovered_during_work: false
status: active
---

# Use Case: [Title]

**Type:** Canonical Use Case  
**ID:** UC-XXX  
**Created:** [YYYY-MM-DD] (Design Phase)  
**Status:** Active  
**Domain:** [Framework/Component/Pattern]

---

## Summary

[One sentence description of the use case]

---

## Context

**When to Use:**
- [Scenario 1]
- [Scenario 2]

**When NOT to Use:**
- [Anti-scenario 1]
- [Anti-scenario 2]

---

## Use Case Description

**Actor:** [Who/what uses this]  
**Goal:** [What they want to achieve]  
**Preconditions:** [What must be true before]  
**Postconditions:** [What is true after]

**Main Flow:**
1. Step 1
2. Step 2
3. Step 3

**Alternative Flows:**
- Flow A: [Description]
- Flow B: [Description]

---

## Design Rationale

**Why This Use Case:**
- [Reason 1]
- [Reason 2]

**Design Decisions:**
- [Decision 1]
- [Decision 2]

---

## Implementation

**Related Work:**
- **Epic:** [Epic X]
- **Story:** [Story Y]
- **Tasks:** [Task references]
- **FR/BR:** [Related FR/BR]

**Implementation Status:**
- [ ] Designed
- [ ] Implemented
- [ ] Validated
- [ ] Documented

---

## Examples

**Example 1:** [Description]
- [Link to example]

**Example 2:** [Description]
- [Link to example]

---

## Related Use Cases

- [Related canonical use case]
- [Related discovered use case]

---

## References

- [Design documents]
- [Implementation docs]
- [Related documentation]
```

---

### Discovered Use Case Template

```markdown
---
lifecycle: evergreen
ttl_days: null
created_at: [YYYY-MM-DD]
expires_at: null
housekeeping_policy: keep
use_case_type: discovered
design_phase: false
discovered_during_work: true
discovery_date: [YYYY-MM-DD]
discovered_in: [Task/BR/FR reference]
status: active
---

# Use Case: [Title]

**Type:** Discovered Use Case  
**ID:** UC-D-XXX  
**Discovered:** [YYYY-MM-DD]  
**Status:** Active  
**Domain:** [Framework/Component/Pattern]

---

## Summary

[One sentence description of the discovered use case]

---

## Discovery Context

**How Discovered:**
- [What work revealed this]
- [What problem it solved]
- [What pattern emerged]

**Discovered During:**
- **Work:** [Task/BR/FR reference]
- **Date:** [YYYY-MM-DD]
- **Context:** [What was being worked on]

**Pattern Recognition:**
- [What pattern was recognized]
- [Why it's valuable]
- [How it differs from original design]

---

## Use Case Description

**Actor:** [Who/what uses this]  
**Goal:** [What they want to achieve]  
**Preconditions:** [What must be true before]  
**Postconditions:** [What is true after]

**Main Flow:**
1. Step 1
2. Step 2
3. Step 3

**Alternative Flows:**
- Flow A: [Description]
- Flow B: [Description]

---

## Discovery Rationale

**Why This Pattern Emerged:**
- [Reason 1]
- [Reason 2]

**Gap in Original Design:**
- [What wasn't covered]
- [What this fills]

**Lessons Learned:**
- [Lesson 1]
- [Lesson 2]

---

## Implementation

**Related Work:**
- **Task:** [Task that discovered it]
- **BR/FR:** [Related BR/FR]
- **Documentation:** [Documentation created]
- **Epic/Story:** [Related Epic/Story]

**Wiring:**
- [Links to related BR/FR, Tasks, documentation]

**Implementation Status:**
- [x] Discovered
- [x] Documented
- [x] Wired to related work
- [ ] Validated
- [ ] Promoted to Canonical (if applicable)

---

## Examples

**Example 1:** [Description]
- [Link to example]

**Example 2:** [Description]
- [Link to example]

---

## Promotion to Canonical

**Promotion Criteria:**
- [ ] Widely applicable across projects
- [ ] Validated through multiple uses
- [ ] Represents best practice
- [ ] Should be part of framework design

**Promotion Status:**
- [ ] Not yet promoted
- [ ] Under consideration
- [ ] Promoted to UC-XXX

---

## Related Use Cases

- [Related canonical use case]
- [Related discovered use case]

---

## References

- [Work that discovered it]
- [Documentation created]
- [Related BR/FR]
```

---

## Directory Structure

```
docs/use-cases/
├── README.md                          # Use case index and navigation
├── USE_CASE_METHODOLOGY.md            # This document
├── Canonical/
│   ├── README.md                      # Canonical use cases index
│   ├── UC-001-framework-adoption-patterns.md
│   ├── UC-002-workflow-execution-patterns.md
│   ├── UC-003-versioning-patterns.md
│   └── ...
├── Discovered/
│   ├── README.md                      # Discovered use cases index
│   ├── UC-D-001-reopening-br-tasks.md
│   ├── UC-D-002-bidirectional-wiring.md
│   ├── UC-D-003-pattern-discovery-workflow.md
│   └── ...
└── Templates/
    ├── CANONICAL_USE_CASE_TEMPLATE.md
    └── DISCOVERED_USE_CASE_TEMPLATE.md
```

---

## Use Case Identification Process

### For Canonical Use Cases

1. **Design Phase:**
   - Identify use cases during design/planning
   - Document before implementation
   - Include in design documents

2. **Documentation:**
   - Create use case document
   - Link to design documents
   - Reference in Epic/Story planning

3. **Implementation:**
   - Implement according to use case
   - Validate against use case
   - Update use case with findings

### For Discovered Use Cases

1. **Recognition:**
   - Identify pattern during work
   - Recognize it's a reusable use case
   - Assess if it should be documented

2. **Documentation:**
   - Create discovered use case document
   - Document discovery context
   - Link to work that revealed it

3. **Wiring:**
   - Wire to related BR/FR
   - Wire to related Tasks
   - Wire to related documentation
   - Ensure bidirectional links

4. **Validation:**
   - Use in multiple contexts
   - Validate pattern holds
   - Document examples

5. **Promotion (Optional):**
   - Assess if should be canonical
   - Promote if widely applicable
   - Update canonical use cases

---

## Use Case Indexing

### Canonical Use Case Index

**Purpose:** Quick reference to all canonical use cases

**Structure:**
```markdown
# Canonical Use Cases Index

## By Domain

### Framework Adoption
- UC-001: Framework Adoption Patterns
- UC-002: Template Usage Patterns

### Workflow Management
- UC-010: Release Workflow Execution
- UC-011: Intake Workflow Execution

### Versioning
- UC-020: Canonical Versioning
- UC-021: Doc-Init Build Patterns

## By Status

### Active
- [List active canonical use cases]

### Deprecated
- [List deprecated canonical use cases]
```

### Discovered Use Case Index

**Purpose:** Quick reference to all discovered use cases

**Structure:**
```markdown
# Discovered Use Cases Index

## By Discovery Date

### 2025-12
- UC-D-001: Re-opening BRs/Tasks (2025-12-16)
- UC-D-002: Bidirectional Wiring (2025-12-16)

## By Domain

### Kanban Management
- UC-D-001: Re-opening BRs/Tasks
- UC-D-002: Bidirectional Wiring

## By Promotion Status

### Active (Not Promoted)
- [List active discovered use cases]

### Promoted to Canonical
- UC-D-002 → UC-050 (Bidirectional Wiring)
```

---

## Promotion Process

### When to Promote Discovered → Canonical

**Criteria:**
- ✅ Use case is widely applicable across projects
- ✅ Pattern validated through multiple uses
- ✅ Represents best practice
- ✅ Should be part of framework design
- ✅ Stable and well-understood

**Process:**
1. **Assessment:**
   - Review discovered use case
   - Evaluate against promotion criteria
   - Get consensus on promotion

2. **Promotion:**
   - Create canonical use case document
   - Reference original discovered use case
   - Update canonical index
   - Mark discovered use case as "Promoted"

3. **Integration:**
   - Include in framework design docs
   - Update templates if needed
   - Update documentation references

**Example:**
- Discovered: UC-D-002 (Bidirectional Wiring)
- Promoted to: UC-050 (Bidirectional Wiring Principle)
- Original discovered use case marked as promoted

---

## Wiring Use Cases

### Use Case → BR/FR/Task/Documentation

**Use Case Document:**
```markdown
## Related Work

**Implementation:**
- **Task:** [E2:S01:T06](../../epics/Epic-2/Story-001-rw-agent-execution-and-docs.md#e2s01t06)
- **BR/FR:** [BR-002](../../fr-br/BR-002-changelog-validator-ordering-bug.md)
- **Documentation:** [Guide Title](../../guides/guide-title.md)
```

**BR/FR/Task/Documentation:**
```markdown
## Related Use Cases

- **Canonical:** [UC-XXX](../../use-cases/canonical/UC-XXX.md)
- **Discovered:** [UC-D-XXX](../../use-cases/discovered/UC-D-XXX.md)
```

---

## Best Practices

1. **Document Early:**
   - Canonical: Document during design phase
   - Discovered: Document when pattern recognized

2. **Wire Bidirectionally:**
   - Use case links to related work
   - Related work links to use case

3. **Maintain Indexes:**
   - Keep canonical index updated
   - Keep discovered index updated
   - Cross-reference between indexes

4. **Promote When Appropriate:**
   - Don't promote prematurely
   - Validate before promotion
   - Update all references

5. **Use Consistent Naming:**
   - Follow naming conventions
   - Use descriptive titles
   - Include domain in title

---

## Examples

### Example 1: Canonical Use Case

**UC-001: Framework Adoption Patterns**
- Created during design phase
- Documents intended adoption patterns
- Part of framework design
- Stable and well-defined

### Example 2: Discovered Use Case

**UC-D-001: Re-opening BRs/Tasks**
- Discovered during BR-002 reopening work
- Pattern recognized: re-open vs create new
- Documented after discovery
- Wired to BR-002, Task T06, documentation

### Example 3: Promotion

**UC-D-002: Bidirectional Wiring**
- Discovered during BR-002/T06 wiring work
- Pattern validated through usage
- Promoted to UC-050
- Now part of framework design

---

## Related Documentation

- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Example of discovered use case
- [REOPENING_BR_AND_TASKS_GUIDE.md](../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Example of discovered use case
- [FR_BR_INTAKE_GUIDE.md (source)](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) - Intake process (includes use case references)

---

**Template Usage:**
- Use canonical template for design-phase use cases
- Use discovered template for implementation-phase use cases
- Follow wiring principles for all use cases
- Maintain indexes for discoverability

---

_This methodology is part of the Kanban Framework. See `packages/frameworks/kanban/` for complete framework documentation._
