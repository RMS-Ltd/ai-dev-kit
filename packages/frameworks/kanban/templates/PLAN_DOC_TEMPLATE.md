---
lifecycle: evergreen
ttl_days: null
created_at: YYYY-MM-DDTHH:MM:SSZ
expires_at: null
housekeeping_policy: keep
---

# E{epic}:S{story}:T{task} — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T{task}-[slug].md`](T{task}-[slug].md) **(E{epic}:S{story}:T{task})**  
**Planning for:** [FR-XXX](../../../fr-br/FR-XXX-*.md) *(if applicable)*  
**Status:** Draft | Review | Approved

> **IPW (Implementation Planning Workflow):** Use this template when running **IPW** / **IPW E:S:T**. The **Host Task** link and bidirectional wiring to the task doc **Input** and **References** are **mandatory** before the plan is complete (see project **FR-042** — *Implementation Planning Workflow* in `docs/project-management/kanban/fr-br/`).

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | … | … |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | … | … |

### 1.3 Invariants and boundaries

- **Invariants:** …
- **In scope:** …
- **Out of scope:** …

---

## 2. Specification

### 2.1 Goal

[One paragraph: what outcome this plan enables.]

### 2.2 Specification mapping from ascertained requirements

Describe how the specification formalizes the requirements baseline above.

### 2.3 Constraints

- …

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO | IN PROGRESS | COMPLETE
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands.
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded (tests/verification notes linked).
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | … | … |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E{epic}:S{story}:T{task}` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| … | … | … |
| **N** | **[MANDATORY] Reconcile task `E{epic}:S{story}:T{task}` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- …

### 4.2 Dependency order

1. …

### 4.3 Documentation implementation steps (optional)

Ordered doc work during implementation (derived from §5–§6), e.g. update KB guide before user docs.

---

## 5. Documentation deliverables

*Populated in IPW Phase 5 — after implementation planning, before housing.*

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | … | … | … |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | … | … | … |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| … | … |

---

## 6. Documentation housing

*Populated in IPW Phase 6 — canonical paths and publication intent.*

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | … | PUBLISHED \| NOT_APPLICABLE | … | evergreen \| … | … |

**Housing rules:** One authoritative doc per topic; prefer updating an existing doc over creating a duplicate; IPP lives under `docs/implementation-cycles/`; Docusaurus surfaces per BR-066.

---

## 7. Success / verification criteria

- [ ] …
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] All §6 `PUBLISHED` paths exist and are linked from task doc (or validator passes)

---

## References

- …
