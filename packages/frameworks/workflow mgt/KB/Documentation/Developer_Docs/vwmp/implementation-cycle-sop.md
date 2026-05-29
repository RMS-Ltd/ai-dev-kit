---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-23T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation Cycle Standard Operating Procedure (SoP)

**Status:** Active  
**Purpose:** Adoptable workflow for task implementation to ensure TDD compliance and prevent missing tests.  
**Audience:** Projects that adopt the Implementation Cycle pattern (see .cursorrules).

---

## Overview

This SoP defines a **mandatory** implementation cycle when a project adopts the pattern. Every step must be completed before proceeding to the next. Step 3 (Specification & Test Creation) is **BLOCKING**: implementation cannot start until tests exist and are failing (Red phase).

---

## Step 1: Requirement Documentation

**Purpose:** Ensure requirements are documented before implementation begins.

**Actions:**

- If a Bug Report (BR) or Feature Request (FR) exists: create or update as needed
- If no BR/FR: document the requirement in the task description or proceed only if the requirement is clear from context

**Validation:**

- Requirement is documented (BR/FR or task description)
- Requirement is clear and testable where applicable

**Output:** Documented requirement

---

## Step 2: Task Creation

**Purpose:** Create a trackable task unit with clear deliverables and acceptance criteria.

**Actions:**

- Create the task in the appropriate Epic/Story
- Use project task format (e.g. `E{epic}:S{story}:T{task} – [Title]`)
- Include: Deliverables, Acceptance Criteria, Dependencies, link to BR/FR if applicable
- Add the task to the Story file's Task Checklist

**Validation:**

- Task exists in the Story file
- Task has clear deliverables and acceptance criteria
- Task links to BR/FR when applicable

**Output:** Created task in Kanban structure

**Reference:** Kanban Governance Policy (task creation requirements)

---

## Step 2.5: Implementation Planning Workflow (IPW) — Recommended

**Purpose:** For non-trivial work, produce a **single durable plan document** (spec + test design + implementation plan) **before** Step 3, with **mandatory bidirectional wiring** between the plan doc and the host task doc (**FR-042**).

**When to use:** Tasks where discovery, test strategy, or sequencing benefits from a written plan; required when **IPW** is invoked for an `E:S:T`.

**Actions:**

- Trigger **`IPW`** or **`IPW E:S:T`** (see project `.cursorrules`).
- Follow [implementation-planning-workflow-agent-execution.md](implementation-planning-workflow-agent-execution.md).
- Template: `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`.
- Wire plan doc **Host Task** ↔ task doc **Input** and **References**.

**Validation:** Plan doc and host task cross-link.

**Output:** Wired IPW plan feeding Step 3a/3b/3c.

**Note:** **IPW** is canonical for planning; legacy **ICW** is an alias (**FR-042** §7).

---

## Step 3: Requirements, Specification & Test Creation (TDD) — BLOCKING

**Purpose:** Ascertain requirements and specification, then create tests **before** implementation (TDD).

**CRITICAL:** This step is **MANDATORY** and **BLOCKING**. Step 4 (Implementation) **cannot** proceed without tests.

### Step 3a: Ascertain Requirements

**Actions:**

- Read task requirements, BR/FR context, acceptance criteria, and **IPW plan doc** if present
- Consolidate **functional requirements** (behaviors/capabilities) into a testable baseline
- Consolidate **non-functional requirements** (constraints/quality attributes such as performance, safety, reliability, auditability, idempotency) into explicit criteria
- Confirm explicit in-scope vs out-of-scope boundaries
- Identify invariant expectations (ordering, idempotency, traceability, or domain-specific constraints)

**Validation:**

- Functional requirement baseline is explicit and testable
- Non-functional requirement baseline is explicit and testable
- Invariants and boundaries are clear

**Output:** Confirmed functional and non-functional requirement baseline that drives specification

### Step 3b: Ascertain Specification

**Actions:**

- Read task requirements, BR/FR, acceptance criteria, and **IPW plan doc** if present
- Identify all testable behaviors: success paths, failure paths, edge cases, error conditions
- Document the specification in the task description if unclear
- Consider UAT scenarios if applicable

**Validation:**

- Specification is clear and testable
- All testable behaviors identified

**Output:** Clear specification of what needs to be tested

### Step 3c: Create Tests

**Actions:**

- Create or update the test file per project conventions
- Write **failing tests** for each testable behavior
- Follow project testing principles (e.g. atomic tests, clear descriptions; avoid unnecessary mocking)
- Ensure tests compile but fail (Red phase of TDD)

**Validation:**

- Test file exists
- Tests cover identified behaviors
- Tests compile but fail (Red phase)
- Tests follow project conventions

**Output:** Test file with failing tests

---

## Step 4: Implementation (Red-Green-Refactor)

**Purpose:** Implement minimal code to pass tests, then refactor for quality.

**Actions:**

- **Green phase:** Implement minimal code to make tests pass (one method/issue at a time)
- **Test iteration:** Run tests after each change; fix or proceed accordingly
- **Refactor phase:** Improve code quality while keeping tests green
- Continue until all tests pass

**Validation:**

- All tests pass
- Code follows project conventions
- Implementation matches specification

**Output:** Implemented code with passing tests

---

## Step 5: Release Workflow (RW)

**Purpose:** Version, document, commit, tag, and push changes.

**Actions:**

- Run the Release Workflow (trigger: e.g. `RW E5S01T01` / `RW E5:S01:T01` in the same message — **FR-060**)
- RW handles: version bump, changelog creation/update, README/Kanban updates, staging, validation, commit, tag, push (per project RW definition)

**Validation:**

- RW completes successfully
- Version and changelog updated
- Kanban docs updated when applicable
- Changes committed and pushed

**Output:** Versioned release with documentation

**Reference:** Release Workflow Agent Execution Guide

---

## Pre-Implementation Checklist

Before starting Step 4, verify:

- [ ] Step 1: Requirement documented
- [ ] Step 2: Task created in Epic/Story
- [ ] Step 2.5 (if used): IPW plan doc created and bidirectionally wired to task doc
- [ ] Step 3a: Requirements ascertained
- [ ] Step 3b: Specification ascertained
- [ ] Step 3c: Tests created and failing (Red phase)
- [ ] Tests compile
- [ ] Tests follow project conventions

---

## Exceptions

- **Retroactive test addition:** If a task was implemented without tests, add tests for existing behavior, ensure they pass, then run RW. Document in changelog. This is remediation, not the standard path.
- **Test-first not applicable:** For documentation-only, UI-only, or non-code work, document why tests are not applicable and proceed; consider manual/UAT validation.
- **Gap log deliverables:** For implementation review gap log tasks (e.g. E4:S16:T05), use `validate_gap_log.py` to verify conformance to the gap-log schema. See `docs/architecture/standards-and-adrs/gap-log-schema.md`.

---

## Integration

- **Kanban:** Task creation and status align with Kanban Governance Policy; RW updates Kanban docs.
- **IPW:** Step 2.5; [implementation-planning-workflow-agent-execution.md](implementation-planning-workflow-agent-execution.md) (**FR-042**).
- **Release Workflow:** Step 5 invokes the project's RW; see Release Workflow Agent Execution Guide.
- **.cursorrules:** Reference this SoP, **IPW** for planning, and enforce Step 3 as blocking.
