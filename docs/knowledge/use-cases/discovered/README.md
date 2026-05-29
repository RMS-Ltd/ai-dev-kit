---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-16T14:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Discovered Use Cases Index

**Purpose:** Index of all discovered (implementation-phase) use cases

**Last Updated:** 2025-12-16

---

## Overview

Discovered use cases are patterns, practices, or scenarios discovered during actual work, implementation, or problem-solving. They represent emergent patterns that may reveal gaps in original design and can inform future canonical design.

---

## Use Cases by Domain

### Kanban Management

- **UC-D-001:** Re-opening BRs/Tasks Instead of Creating New
  - **Status:** Active
  - **Discovered:** 2025-12-16
  - **Discovered In:** BR-002 reopening work, Task E2:S01:T06
  - **Location:** [UC-D-001-reopening-br-tasks.md](UC-D-001-reopening-br-tasks.md)
  - **Related:** [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md), BR-002, Task E2:S01:T06

- **UC-D-002:** Bidirectional Wiring Between BR/FR, Tasks, and Documentation
  - **Status:** Active (Promoted to Canonical)
  - **Discovered:** 2025-12-16
  - **Discovered In:** BR-002/T06 wiring work
  - **Location:** [UC-D-002-bidirectional-wiring.md](UC-D-002-bidirectional-wiring.md)
  - **Related:** [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md), BR-002, Task E2:S01:T06
  - **Promoted To:** UC-050 (Bidirectional Wiring Principle)

### Pattern Discovery

- **UC-D-003:** Pattern Discovery Workflow (Work → Pattern → Documentation → Wiring)
  - **Status:** Active
  - **Discovered:** 2025-12-16
  - **Discovered In:** BR-002 reopening and wiring work
  - **Location:** [UC-D-003-pattern-discovery-workflow.md](UC-D-003-pattern-discovery-workflow.md)
  - **Related:** BIDIRECTIONAL_WIRING_PRINCIPLE.md, REOPENING_BR_AND_TASKS_GUIDE.md

### Workflow Patterns

- **UC-D-004:** Story + Task Docs Batch Creation
  - **Status:** Active
  - **Discovered:** 2025-12-18
  - **Discovered In:** E4:S13:T04 – Assess system impacts (RW doc-init detection bug)
  - **Location:** [UC-D-004-story-task-docs-batch-creation.md](UC-D-004-story-task-docs-batch-creation.md)
  - **Related:** [Abstract Anti-Pattern: Use Case Exposed Design Flaw](../../analysis/abstract-anti-patterns-use-case-exposed-design-flaw.md), E4:S13:T04
  - **Pattern Type:** Abstract Anti-Pattern (Use Case Exposed Design Flaw)

---

## Use Cases by Discovery Date

### 2025-12-16

- UC-D-001: Re-opening BRs/Tasks Instead of Creating New
- UC-D-002: Bidirectional Wiring Between BR/FR, Tasks, and Documentation
- UC-D-003: Pattern Discovery Workflow

### 2025-12-18

- UC-D-004: Story + Task Docs Batch Creation (Abstract Anti-Pattern)

---

## Use Cases by Promotion Status

### Active (Not Promoted)

- UC-D-001: Re-opening BRs/Tasks Instead of Creating New
- UC-D-003: Pattern Discovery Workflow
- UC-D-004: Story + Task Docs Batch Creation (Abstract Anti-Pattern)

### Promoted to Canonical

- UC-D-002 → UC-050: Bidirectional Wiring Principle
  - **Promotion Date:** 2025-12-16
  - **Rationale:** Widely applicable, represents best practice, should be part of framework design

---

## Use Cases by Status

### Active

- UC-D-001: Re-opening BRs/Tasks Instead of Creating New
- UC-D-002: Bidirectional Wiring (Promoted)
- UC-D-003: Pattern Discovery Workflow
- UC-D-004: Story + Task Docs Batch Creation (Abstract Anti-Pattern)

### Deprecated

_None yet_

---

## Related Documentation

- [USE_CASE_METHODOLOGY.md](../../USE_CASE_METHODOLOGY.md) - Methodology guide
- [Discovered Use Case Template](../templates/DISCOVERED_USE_CASE_TEMPLATE.md) - Template for creating discovered use cases
- [BIDIRECTIONAL_WIRING_PRINCIPLE.md](../../../project-management/kanban/fr-br/BIDIRECTIONAL_WIRING_PRINCIPLE.md) - Example discovered use case (promoted)
- [REOPENING_BR_AND_TASKS_GUIDE.md](../../../project-management/kanban/fr-br/REOPENING_BR_AND_TASKS_GUIDE.md) - Example discovered use case

---

_This index is part of the Use Cases Knowledge Base. See `docs/use-cases/README.md` for overview._
