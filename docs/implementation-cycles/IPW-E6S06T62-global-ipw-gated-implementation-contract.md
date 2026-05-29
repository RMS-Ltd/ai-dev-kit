---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T13:07:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S06:T62 - Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T62-global-ipw-gated-implementation-contract-fr083.md`](../project-management/kanban/epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md) **(E6:S06:T62)**  
**Planning for:** [FR-083 – Global IPW-gated implementation contract](../project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)  
**Status:** Draft

---

## 1. Specification

### 1.1 Goal

Codify a repository-wide execution contract that prevents intent override by blocking implementation work until the planning gate is satisfied and the user explicitly authorizes execution.

### 1.2 Functional requirements

- **F1:** Define a global "no implementation before IPW" gate.
- **F2:** Require all three preconditions before implementation:
  - task anchor exists (`E#:S#:T#`)
  - planning package exists and is linked from the task
  - explicit user execution authorization in a separate instruction
- **F3:** While gated, intake/planning requests must remain planning-only and stop on completion.
- **F4:** Missing preconditions must trigger prerequisite requests, not inferred implementation permission.

### 1.3 Non-functional requirements

- **N1:** Policy language is unambiguous and durable across sessions.
- **N2:** Rules are mirrored in both primary governance sources (`AGENTS.md` and `.cursorrules`).
- **N3:** Policy applies globally, not only to IPW-specific command paths.

### 1.4 Out of scope

- Workflow-script behavioral implementation changes.
- Validator code changes.
- Additional feature implementations unrelated to gating policy.

---

## 2. Test design

| ID | Area | What to verify |
| ---- | ------ | ---------------- |
| T1 | Governance docs | `AGENTS.md` and `.cursorrules` both contain the same mandatory gate preconditions. |
| T2 | Planning requests | Intake/planning request patterns do not include implementation actions before explicit user unlock. |
| T3 | Traceability | Bidirectional links exist among FR-083, T62, and this IPW file. |
| T4 | Scope integrity | Change set remains planning/governance-only (no implementation/script behavior changes). |

---

## 3. Implementation plan

### Phase A - IPW artifact creation

1. Create this IPW file under `docs/implementation-cycles/`.
2. Link the IPW from the host task (`T62`) and from `FR-083`.

### Phase B - Traceability hardening

1. Confirm relative paths resolve across FR/task/IPW.
2. Ensure task acceptance criteria explicitly reference planning-gate semantics.

### Phase C - Governance verification

1. Run lints for touched markdown files.
2. Review resulting diff to ensure no implementation-scope changes slipped in.

---

## 4. Success criteria

- [ ] IPW file exists with spec/test/plan sections.
- [ ] `T62` references this IPW path explicitly.
- [ ] `FR-083` references this IPW path explicitly.
- [ ] Touched markdown files pass lint checks.
- [ ] Diff remains governance/planning only.

---

## References

- [Host task E6:S06:T62](../project-management/kanban/epics/Epic-6/Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md)
- [FR-083](../project-management/kanban/fr-br/FR-083-global-ipw-gated-implementation-contract.md)
- [Global rules](../AGENTS.md)
- [Global rules mirror](../.cursorrules)
