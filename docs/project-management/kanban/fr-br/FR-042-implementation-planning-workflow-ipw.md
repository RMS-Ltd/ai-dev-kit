---
lifecycle: evergreen
ttl_days: null
created_at: 2026-02-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Implementation Planning Workflow (IPW)

**Type:** Feature Request (FR)  
**Identifier:** IPW (Implementation Planning Workflow)  
**Submitted:** 2026-02-22  
**Submitted By:** User  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** COMPLETE  
**Last updated:** 2026-05-20 — §8 ICW trio vs consolidated IPP; `dev-kit-ipw-ipp-vs-icw-artifacts.md`; RW **v0.2.16.3+6** traceability.  
**Implementation Task:** [E5:S01:T42](../epics/Epic-5/Story-001-fr-repo/T42-implementation-planning-workflow-ipw.md)

---

## Summary

Define and implement an **Implementation Planning Workflow (IPW)** – a formal workflow for creating planning documents (spec, test design, implementation plan) before task implementation. IPW ensures planning artifacts are produced consistently and integrate with the Implementation Cycle (spec + TDD). **Critical:** The task doc and plan doc **must be bidirectionally wired** – the task doc must reference the plan doc (Input, References), and the plan doc must reference the task doc (Host Task). Both links are mandatory; a plan doc is not complete without them. Planning must not be ad hoc; it must be a repeatable, traceable workflow.

**Strategic consolidation:** The former **Implementation Cycle Workflow (ICW)**—three-phase specification / test design / implementation planning under the ICW name—is **merged into IPW**. **IPW** (`IPW` or `IPW E:S:T`) is the **canonical** user-facing planning workflow. ICW-specific packaging (e.g. `implementation-cycle-workflow`, `icw_handler.py`, Cursor **`ICW`** trigger) must be **deprecated, aliased to IPW, or documented as legacy** so there is only one planning workflow to learn and maintain. **RW** remains canonical for release; **implementation** follows the Implementation Cycle (TDD, etc.) guided by IPW artifacts, not by a second parallel “planning” workflow brand.

---

## Problem Statement

**Current Situation:**

- Two overlapping concepts exist for the same intent: **ICW** (FR-040, framework workflow + handler + **`ICW`** trigger) and **IPW** (this FR)—both target structured planning before implementation, which splits documentation and cognitive load
- Planning documents (spec/test/impl plans) are created informally and inconsistently
- No defined workflow for *when* or *how* to create a plan doc
- Plan docs are often created without being wired to their host task doc
- **Fundamental failure:** Plan docs exist with no cross-reference in the task doc, and no link back – breaks traceability and discoverability
- Implementation Cycle (Step 3: Spec & Test Creation) exists but lacks a formal planning workflow that produces a durable plan document

**Root Causes:**

- No workflow or SoP for implementation planning
- No enforcement of mandatory wiring at creation time
- Planning is treated as optional or implicit rather than a first-class workflow
- Gap between "ascertain spec, create tests" (Implementation Cycle) and producing a reusable plan document

**Impact:**

- Orphaned plan docs (exist but not discoverable from task)
- Inconsistent planning quality and completeness
- Violates bidirectional wiring principle
- Weakens traceability between planning and implementation
- Implementation Cycle Step 3 lacks a clear planning artifact

---

## Proposed Solution: Implementation Planning Workflow (IPW)

### 1. IPW Definition

**IPW** is the workflow for creating an **implementation plan document** before implementation begins. It sits between Task Creation (Implementation Cycle Step 2) and Specification & Test Creation (Step 3), and produces the planning artifact that guides Step 3 and Step 4.

**IPW Trigger:** User invokes **`IPW`** (or `IPW ExxSxxTxx`). This replaces the previous ad hoc instruction:
> "Plan ExxSxxTxx: Ascertain requirements, define spec, design tests, plan impl"

It also **replaces the `ICW` trigger for planning**: users and docs should prefer **`IPW`**; **`ICW`** may remain temporarily as an alias but must not define a divergent planning process.

**IPW Output:** A plan document containing:

- **Specification** – Functional and non-functional requirements, scope, boundaries
- **Test Design** – Test categories, test cases, test data strategy
- **Implementation Plan** – Phases, steps, dependency order, files to create/modify

### 2. Formalized IPW Steps (Ordered)

| Step | Name | Description |
| ---- | ---- | ----------- |
| **0** | Identify Host Task | Resolve E:S:T from user input or context; confirm task doc exists |
| **1** | Ascertain Requirements | Consolidate and confirm **functional** and **non-functional** requirement statements/invariants from task, FR/BR context, and acceptance criteria before drafting specification |
| **2** | Define Spec | Populate Spec section: Goal, Functional Requirements, Non-Functional (if applicable), Out of Scope |
| **3** | Design Tests | Populate Test Design: categories, test cases (TC/Name/Behavior), test data strategy |
| **4** | Plan Implementation | Populate Impl Plan: phases, steps, dependency order, files to create/modify |
| **5** | Documentation Update and Creation | Inventory existing docs; classify UPDATE / CREATE / NONE; gap analysis; deliverables table from requirements, spec, tests, and impl plan |
| **6** | House Documentation | Map each deliverable to canonical path in the documentation system; set publication status (`PUBLISHED` \| `NOT_APPLICABLE`); resolve housing conflicts |
| **7** | Create Plan Doc | Write IPP using template (§1–§7); include header with Task ID, Host Task link |
| **8** | Wire to Host Task | Add plan doc to task doc Input and References; add Host Task in plan doc header; publication fields when applicable (BR-066) |
| **9** | Validate | Confirm bidirectional wiring; confirm required sections present (including §5–§6) |

#### Mandatory Bidirectional Wiring

**Both directions MUST be wired – neither is optional.**

| Direction | Where | What to add |
| --------- | ----- | ----------- |
| **Task doc → Plan doc** | Task doc **Input** | Link to plan doc (e.g. `[T07-planning-spec-tests-impl.md](T07-planning-spec-tests-impl.md)`) |
| **Task doc → Plan doc** | Task doc **References** | Same link |
| **Plan doc → Task doc** | Plan doc header | `**Host Task:** [T07-planning-spec-tests-impl.md](T07-planning-spec-tests-impl.md) (E4:S11:T07)` |

- **Task doc must link to plan doc** – Otherwise the plan is orphaned; developers cannot discover it from the task.
- **Plan doc must link to task doc** – Otherwise the plan lacks context; the host task cannot be identified.
- Wiring is **atomic**: both directions are completed in the same session. A plan doc is **not complete** until both links exist.

### 3. Plan Doc Template (Proposed)

**Header (required):**

- Task title (`E{epic}:S{story}:T{task}` – Planning: Spec, Tests, Implementation Plan)
- **Host Task:** relative path to the host task doc (`E{epic}:S{story}:T{task}`) — link to the task markdown file (bidirectional wiring)
- Status
- Planning doc created date

**Sections (required):**

1. **Requirements (Ascertained Baseline)** – Functional and non-functional requirements, invariants, scope
2. **Specification** – Goal, mapping from requirements, constraints, status transition intent
3. **Test Design** – Test cases (or `--skip-tests` justification)
4. **Implementation Plan** – Phases (table: Step/Action/Deliverable), dependency order, files to create/modify
5. **Documentation Deliverables** – UPDATE / CREATE / NONE inventory and gap analysis (IPW Phase 5)
6. **Documentation Housing** – Canonical paths, publication status, lifecycle, inbound links (IPW Phase 6)
7. **Success/Verification Criteria** – Includes doc deliverable verification where applicable

### 4. Analysis of Past Planning Docs

**Examples analyzed:** T07-planning-spec-tests-impl.md, T01-planning-spec-tests-impl.md, PIR-workflow-planning.md, migration-plan-embedded-to-discrete-tasks.md

**Good practice (T07, T01):**

- Consistent 3-section structure (Spec, Test Design, Impl Plan)
- Functional requirements table with IDs and sources
- Test cases table with TC, Name, Behavior
- Implementation phases with step/action/deliverable
- Dependency order diagram
- Out of scope explicitly stated
- Script interfaces (T07), Files to create/modify

**Bad practice / gaps:**

- T01 initially lacked Host Task link (unwired)
- PIR-workflow-planning uses different structure (Executive Summary, Workflow Scope) – more design doc than spec/test/impl
- Migration-plan has TBD placeholders; analysis sections not aligned with spec/test/impl pattern
- No standard template enforced; structure varies

**Proposed canonical structure:** Adopt T07/T01 pattern as baseline; add mandatory Host Task in header; require Verification/Success Criteria section.

### 5. IPW Integration with Implementation Cycle

| Implementation Cycle Step | IPW Relationship |
| ------------------------- | ---------------- |
| Step 2: Task Creation | Host task must exist before IPW |
| Step 3a: Ascertain Requirements | Plan doc requirement baseline captures functional and non-functional requirements |
| Step 3b: Ascertain Specification | Plan doc Spec section formalizes the ascertained requirement baseline |
| Step 3c: Create Tests | Plan doc Test Design guides this |
| Step 4: Implementation | Plan doc Impl Plan (including documentation deliverables) guides this |
| Step 5: RW | Unchanged |

IPW produces the plan document that formalizes and persists the output of requirement ascertainment (functional + non-functional), specification ascertainment, and then guides test creation and implementation.

### 6. IPW Deliverables

- **IPW SoP or Workflow Doc** – Step-by-step workflow with checklist
- **Plan Doc Template** – Required structure (Spec, Test Design, Impl Plan, Host Task)
- **Wiring Rules** – Mandatory bidirectional wiring, validation
- **Integration** – Reference from Implementation Cycle SoP, .cursorrules, create-rule/create-skill
- **ICW deprecation / alias package** – See §7

### 7. Consolidation with ICW (Implementation Cycle Workflow)

| Aspect | Before | After (target state) |
| ------ | ------ | -------------------- |
| **Canonical planning brand** | ICW + IPW (overlapping) | **IPW only** |
| **User / agent trigger** | `ICW` and informal “plan task X” | **`IPW` / `IPW E:S:T`** (required); `ICW` = deprecated or thin alias |
| **Artifacts** | ICW templates / `docs/implementation-cycles/*` ad hoc + IPW plan doc | **One durable plan doc** per host task, bidirectionally wired (IPW); legacy ICW paths may redirect or merge |
| **Task binding** | FR-048 / `icw_handler` task-id rules | Same **mandatory E:S:T binding** applies to **IPW** sessions |
| **Framework package** | `implementation-cycle-workflow`, `icw_handler.py`, registry **ICW** | Document as **legacy or adapter**; eventually fold useful mechanics into IPW tooling **or** stub with “use IPW” guidance |
| **Release / implementation** | RW + Implementation Cycle | **Unchanged** — IPW does not replace RW or TDD |

**Rationale:** One planning workflow reduces cognitive load and duplicate docs. ICW’s *planning* responsibilities (spec → test design → impl plan, planning-mode agent guidance) are the same scope as IPW; ICW as a **separate** product is redundant.

### 8. Artifact packaging: ICW trio vs consolidated IPP

Durable planning output may appear in either form under `docs/implementation-cycles/`, provided the **host task** links to it and the artifact links back (**FR-042:R04–R05**):

| Form | Files | Notes |
|------|-------|--------|
| **IPP** | Single `IPP-E{epic}S{story}T{task}-{slug}.md` | Canonical for **ai-dev-kit** runs that follow `.claude/commands/ipw.md` Phase 7 (`PLAN_DOC_TEMPLATE.md`). Sections 1–7 carry requirements, specification, test design, implementation plan, documentation deliverables, documentation housing, and success criteria (optional §8 for perpetual rolling backlog). |
| **ICW trio** | `ICW-*-specification.md`, `-test-design.md`, `-implementation-plan.md` | Valid for retrospective splits, multi-file review, or legacy packages. May be **superseded** by a later IPP that consolidates content (cite superseded paths in the IPP). |

**Global Implementation Gate** ([`AGENTS.md`](../../../../AGENTS.md)) treats **either** form as satisfying precondition “IPW package” when linked from the task. Full matrix: [`dev-kit-ipw-ipp-vs-icw-artifacts.md`](../../../../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md).

---

## Use Cases

1. **Planning for E4:S11:T07:** User requests plan → Agent runs IPW → Creates `T07-planning-spec-tests-impl.md` with spec, tests, impl → Wires to T07 task doc (Input, References) and adds Host Task in plan → Plan discoverable from task and vice versa
2. **Starting implementation:** Developer opens task doc → Sees plan doc in Input/References → Navigates to spec, test design, impl plan → Follows plan for Step 3 and 4
3. **Validating planning completeness:** Automated or manual check ensures no plan doc exists without task doc reference, and wiring is bidirectional
4. **Cursor/Agent trigger:** User types **`IPW`** or **`IPW E:S:T`** → Agent executes IPW workflow (replaces "Plan ExxSxxTxx: Define spec, design tests, plan impl" and supersedes **`ICW`** for that purpose)
5. **Migrating from ICW:** Maintainer renames or aliases **`ICW`** in `.cursorrules` to IPW, updates workflow-registry/README lines for ICW to point at IPW consolidation, and aligns FR-040 / FR-048 text to “planning via IPW” where appropriate

---

## Requirements

### Functional Requirements

- [x] **FR-042:R01** - IPW workflow documented (SoP, workflow doc, or equivalent)
- [x] **FR-042:R02** - Plan doc template defined with required sections (Spec, Test Design, Impl Plan, Host Task)
- [x] **FR-042:R03** - Plan docs MUST include "Host Task" link to host task document in header
- [x] **FR-042:R04** - Host task doc MUST reference plan doc in Input and References upon plan doc creation
- [x] **FR-042:R05** - Plan doc MUST reference host task doc in header (Host Task link) – **bidirectional wiring is mandatory; both directions required**
- [x] **FR-042:R05a** - Wiring is atomic: plan doc creation and task doc update happen in same IPW session
- [x] **FR-042:R06** - IPW integrated with Implementation Cycle (reference from implementation-cycle-sop, .cursorrules)
- [x] **FR-042:R07** - Validation mechanism or checklist to detect unwired plan docs
- [x] **FR-042:R08** - Cursor rules/skills or documentation reference IPW for plan doc creation
- [x] **FR-042:R14** - Canonical IPW planning sequence includes an explicit **Ascertain Requirements** step before **Define Spec**
- [x] **FR-042:R09** - Instruction **`IPW`** (or `IPW ExxSxxTxx`) replaces "Plan ExxSxxTxx: Ascertain requirements, define spec, design tests, plan impl" as the canonical trigger
- [x] **FR-042:R10** - **`ICW`** is **not** a parallel planning workflow: `.cursorrules` (and adopter equivalents) state **IPW canonical**; **`ICW`** is removed, folded into IPW wording, or documented as **deprecated alias** only (same steps as IPW)
- [x] **FR-042:R11** - Packaged workflow docs (`workflow-registry.yaml`, `implementation-cycle-workflow/README.md` or successor) explain **ICW → IPW** consolidation and point maintainers to IPW
- [x] **FR-042:R12** - **FR-040 / E5:S01:T40** and **FR-048 / E5:S01:T48** cross-reference IPW: task-ID and artifact expectations for planning apply to **IPW**; ICW-specific phrasing updated where it implied a second planning pipeline
- [x] **FR-042:R13** - Optional: **technical follow-up** — repoint or retire `icw_handler.py` / ICW YAML **or** wrap as thin IPW helper (config-driven output dir, no duplicate user-facing workflow brand)

### Non-Functional Requirements

- [x] **FR-042:NF01** - **Traceability:** Plan doc always discoverable from task doc and vice versa
- [x] **FR-042:NF02** - **Consistency:** Aligns with bidirectional wiring principle
- [x] **FR-042:NF03** - **Repeatability:** IPW is a clear, actionable, repeatable workflow
- [x] **FR-042:NF04** - **Single planning mental model:** Adopters can rely on one named workflow (**IPW**) for pre-implementation artifacts

---

## Acceptance Criteria

- [x] **AC1:** IPW workflow documented (SoP or workflow doc with steps and checklist)
- [x] **AC2:** Plan doc template includes required sections (Spec, Test Design, Impl Plan) and mandatory Host Task link
- [x] **AC3:** Task doc template or guidance updated to include plan doc in Input/References when plan exists
- [x] **AC3a:** Bidirectional wiring requirement (task↔plan) documented clearly in IPW SoP and plan doc template
- [x] **AC4:** Implementation Cycle SoP references IPW for plan doc creation
- [x] **AC5:** Existing unwired plan docs (e.g., T07-planning-spec-tests-impl.md) retroactively wired
- [x] **AC6:** Cursor rules, create-rule skill, or equivalent references IPW
- [x] **AC7:** Validation checklist or script detects unwired plan docs
- [x] **AC8:** Plan doc template created at `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` (or equivalent) following proposed structure
- [x] **AC9:** IPW instruction `IPW` documented as canonical trigger in .cursorrules or create-rule skill
- [x] **AC10:** `.cursorrules` (ICW section) updated: **IPW** canonical for planning; **ICW** deprecated or alias-only, consistent with §7
- [x] **AC11:** Framework workflow registry / ICW package README state consolidation; no contradictory “use ICW for planning” without IPW equivalence
- [x] **AC12:** **FR-040** header or notes reference IPW as successor scope for **planning** (implementation delivery history of T40 may remain historical)
- [x] **AC13:** IPW docs/SOP language explicitly encode **Ascertain Requirements** as the first planning step before specification

---

## Scope Analysis

**Problem Domain:** Implementation Planning, Task Documentation, Workflow Design, Bidirectional Wiring  
**Affected Areas:**

- [x] Documentation (IPW workflow, plan doc template)
- [x] Implementation Cycle SoP (integration)
- [x] Task Template (References/Input guidance)
- [x] Plan Doc Template (new or enhanced)
- [x] Validation (optional script)
- [x] Other: Cursor rules, create-rule/create-skill

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [x] Medium (1 week)
- [ ] Complex (2+ weeks)

---

## Dependencies

**Blocks:**

- Reliable plan doc discoverability
- Formal planning before implementation
- Bidirectional wiring for planning artifacts

**Blocked By:**

- None

**Related Work:**

- **Implementation Cycle SoP:** `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`
- **FR-035:** Task Template Cross-Wiring Section (bidirectional wiring)
- **FR-016:** Kanban Granularity & Discrete Task Docs (3-tier structure)
- **E4:S11:T07:** Incident that triggered this FR (plan doc created without wiring)
- **create-rule / create-skill:** May extend to include IPW
- **FR-040 / E5:S01:T40:** Implementation Cycle Workflow (ICW) — **planning scope merged into IPW**; legacy implementation remains historical
- **FR-048 / E5:S01:T48:** ICW task identifier — binding applies to **IPW** planning sessions
- **BR-055 / E4:S14:T03:** ICW presence in framework package (historical); consolidation docs should not reintroduce “two planning workflows”
- **E5:S01:T42:** Repository anchor task for this FR (implementation + doc alignment)

---

## References

- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md` – IPW agent execution
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md` – Plan doc template
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](../../../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md) – ICW trio vs consolidated IPP (artifact packaging)
- `packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py` – AC7 validator
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md` – Implementation Cycle
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md` – Example plan doc (unwired)
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md` – Host task for T07
- `docs/project-management/kanban/epics/Epic-4/Story-014-kanban-framework-maintenance/T01-planning-spec-tests-impl.md` – Example plan doc
- `packages/frameworks/kanban/templates/TASK_TEMPLATE.md` – Task template
- FR-035: Task Template Cross-Wiring Section
