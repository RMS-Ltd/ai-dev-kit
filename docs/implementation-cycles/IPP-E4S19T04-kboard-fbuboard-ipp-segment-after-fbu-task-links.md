---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T22:05:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T04 — Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md) **(E4:S19:T04)**  
**Planning for:** [UXR-010 — kboard/fbuboard add `IPP` segment after FBU and task links](../project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)  
**Status:** Published

> **IPW (Implementation Planning Workflow):** This document was produced by IPW for E4:S19:T04. Bidirectional wiring to the host task `Input` and `References` is confirmed.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | `kboard.md` and `fbuboard.md` rows must include an `IPP` segment after FBU and task link segments | UXR-010 / AC1 |
| RF2 | FBU segment token text: `BR/BR/UXR-xxx` as a markdown link | UXR-010 / AC3 |
| RF3 | Task segment token text: `Exx:Sxx:Txx` as a markdown link | UXR-010 / AC3 |
| RF4 | IPP segment (present): `—IPP—` as a markdown link to the planning artifact | UXR-010 / AC4 |
| RF5 | IPP segment (absent): `—No IPP—` as plain text (not a link) | UXR-010 / AC2 |
| RF6 | Required segment order: `... \| [FBU token] \| [Task token] \| [IPP token or —No IPP—] \| ...` | UXR-010 / AC1 |
| RF7 | IPP artifact resolution: canonical `IPP-*` first → optional legacy `IPW-*` fallback → `—No IPP—` | UXR-010 / AC5 |
| RF8 | Normalization must be non-destructive for rows already compliant | UXR-010 / AC5 |
| RF9 | `update_kanban_docs.py` must deterministically enforce the row format | UXR-010 / AC6 |
| RF10 | UXR-010 and E4:S19:T04 must remain bidirectionally wired to the IPP artifact and active boards | UXR-010 / AC7 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Normalization is deterministic and idempotent | UXR-010 |
| RNF2 | No broken markdown links for missing planning artifacts | UXR-010 |
| RNF3 | Existing timestamp and row-pruning behavior in `update_kanban_docs.py` preserved | UXR-010 |
| RNF4 | Formatting output is machine-checkable by tests | UXR-010 |

### 1.3 Invariants and boundaries

- **Invariants:** Token text is fixed; segment order is canonical; normalization is idempotent.
- **In scope:** `kboard.md` and `fbuboard.md` row formatting; `update_kanban_docs.py` formatter/resolver; test coverage for new behavior.
- **Out of scope:** MoSCOW re-prioritization; board ownership semantics; global migration of unrelated row formats.

---

## 2. Specification

### 2.1 Goal

Implement deterministic row-level traceability formatting in `kboard.md` and `fbuboard.md` such that each governed row exposes FBU token, task token, and IPP token in a stable, canonical order with explicit fallback behavior when no planning artifact exists. The formatter is normative, non-destructive, and enforced by `update_kanban_docs.py`.

### 2.2 Specification mapping from ascertained requirements

The normative row contract (RF1–RF6) defines exact token text and segment order. The artifact resolution policy (RF7) ensures `IPP-*` is preferred with `IPW-*` legacy fallback to avoid breaking rows from prior naming conventions. Non-destructive idempotency (RF8, RNF1) guarantees existing compliant rows are not mutated. Formatter integration (RF9) ensures enforcement is automated rather than manual.

### 2.3 Constraints

- Token text values are exact and non-negotiable; no abbreviations or variants permitted.
- Never emit a broken markdown link: absent artifact → plain-text `—No IPP—`.
- `update_kanban_docs.py` timestamp and cleanup behavior must not regress.

### 2.4 Status transition intent

- **Current task status:** COMPLETE
- **Transition trigger to IN PROGRESS:** Transitioned prior to this plan doc creation.
- **Transition trigger to COMPLETE:** All acceptance criteria satisfied with verifiable evidence (board rows normalized, spec defined, governance docs bidirectionally wired).
- **Atomic propagation requirement:** Task doc status and kboard row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------- |
| T1 | Token grammar | FBU/task/IPP tokens match exact text forms and segment order | RF2, RF3, RF4, RF6 |
| T2 | IPP present | Rows with resolvable `IPP-*` artifact render linked `—IPP—` | RF4, RF7 |
| T3 | IPP absent | Rows without artifact render plain-text `—No IPP—` (not a link) | RF5, RF7 |
| T4 | Legacy fallback | `IPW-*` fallback resolves to linked `—IPP—` when canonical `IPP-*` missing | RF7 |
| T5 | Idempotency | Re-running formatter does not mutate already-compliant rows | RF8, RNF1 |
| T6 | No regression | Existing timestamp and cleanup behavior in `update_kanban_docs.py` stays intact | RNF3 |
| T7 | Link integrity | Updated board links resolve; no broken references introduced | RNF2 |

**Planned test updates:** Extend `test_update_kanban_docs.py` with focused cases for T1–T7 covering token/ordering verification, IPP-present/absent formatting, legacy fallback, idempotency, and no-regression assertions.

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** Task E4:S19:T04 is already `IN PROGRESS` — confirm and update `Last updated` date. | Task doc `Last updated` current |
| 2 | Add deterministic formatter/resolver for board row segments in `update_kanban_docs.py`. Encode canonical token text and ordering rules. Implement IPP resolution: `IPP-*` primary, optional `IPW-*` fallback. | Formatter present in script |
| 3 | Apply formatter in both `kboard` and `fbuboard` reconciliation paths. Non-destructive for compliant rows; emit plain `—No IPP—` for absent-artifact rows. | Board rows normalized |
| 4 | Add/extend test cases in `test_update_kanban_docs.py` covering T1–T7. | Tests green |
| 5 | Run test suite. Validate lint and link integrity for touched governance docs. | All checks pass |
| 6 | Confirm bidirectional links: host task doc ↔ this IPP doc. | Links valid |
| **7** | **[MANDATORY]** Reconcile task E4:S19:T04 status: if all ACs satisfied with evidence → `COMPLETE` + `✅ COMPLETE (v{version})`; if ongoing → `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. | Task doc status reflects actual state |

### 4.1 Files to create or modify

- `packages/frameworks/workflow mgt/scripts/update_kanban_docs.py` — add formatter/resolver
- `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py` — add T1–T7 test cases
- `docs/project-management/kanban/kboard.md` — normalize rows as needed
- `docs/project-management/kanban/fbuboard.md` — normalize rows as needed

### 4.2 Dependency order

1. Formatter (Step 2) before board integration (Step 3)
2. Board integration (Step 3) before test coverage (Step 4)
3. Tests (Step 4) before verification (Step 5)
4. Verification (Steps 5–6) before reconciliation (Step 7)

---

## 5. Success / verification criteria

- [ ] Board rows render exact token text and segment order per Section 1.3 contract.
- [ ] `—No IPP—` is plain non-link text when no planning artifact exists.
- [ ] `—IPP—` resolves as a valid link when a planning artifact exists.
- [ ] Test suite passes for all T1–T7 behaviors.
- [ ] Lint and link checks pass for touched governance docs.
- [ ] Bidirectional links confirmed: task doc ↔ IPP doc.
- [ ] Task E4:S19:T04 status reconciled to correct state with evidence.

---

## References

- [Host task E4:S19:T04](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T04-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links-uxr010.md)
- [UXR-010](../project-management/kanban/fr-br/UXR-010-kboard-fbuboard-add-ipp-column-after-fbu-and-task-links.md)
- [kboard](../project-management/kanban/kboard.md)
- [fbuboard](../project-management/kanban/fbuboard.md)
- [update_kanban_docs.py](../../packages/frameworks/workflow%20mgt/scripts/update_kanban_docs.py)
- [test_update_kanban_docs.py](../../packages/frameworks/workflow%20mgt/scripts/test_update_kanban_docs.py)
- [PLAN_DOC_TEMPLATE.md](../../packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md)
