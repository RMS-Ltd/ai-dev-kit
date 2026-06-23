---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-01T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E07:S01:T09 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`E07S01T09-kanban-template-governance.md`](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md) **(E07:S01:T09)**  
**Planning for:** [UXR-005](../kanban/fbu/UXR-005-kanban-board-formatting-and-governance.md)  
**Status:** Approved

> **IPW (Implementation Planning Workflow):** Consolidated IPP for UXR-005 — MoSCOW spacing rule, validator, RW/UKW hooks.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | One blank line between adjacent **multi-line** MoSCOW bullets on in-scope boards/docs | UXR-005, task scope |
| RF2 | Guide/templates document rule + UXR ownership | UXR AC-2, AC-3 |
| RF3 | Programmatic validator; resolve TODO in doc-consistency script | Task §2, UXR AC-4 |
| RF4 | RW docs reference E07:S01:T09 + validator command | Task §3 |
| RF5 | UKW/MMW escalation guidance for formatting drift | Task §3 |
| RF6 | Evidence package (diff + validator log + runbook) | Task §4 |
| RF7 | Task ↔ kboard status sync (FR-077) | FR-077 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | FR-097: no batch row stamp rewrites | FR-097 |
| RNF2 | Idempotent validate/fix | Task |
| RNF3 | Violations report file:line + bullet token | Task |

### 1.3 Invariants and boundaries

- **Invariants:** MoSCOW state icons (UXR-012) unchanged unless status changes.
- **In scope:** kboard, fbuboard, guide, structure, index, framework kanban templates, validator, policy, RW/UKW guides.
- **Out of scope:** UKW `--rp` / `-c`; new E07:S00 intake; blocking RW gate in v1.

**Spec decisions (user-gate defaults):**

- **Multi-line bullet:** Source line length **> 100** characters after `- ` (same as `MULTILINE_THRESHOLD` in validator), OR explicit continuation line (indented, not a new bullet/header).
- **Validator home:** `packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py` + delegate from `scripts/documentation/validate-documentation-consistency.py`.
- **RW integration:** **Non-blocking** advisory in Step 9 (report-only); promotion to blocking gate deferred.

---

## 2. Specification

### 2.1 Goal

Make UXR-005’s MoSCOW spacing rule durable: documented, machine-checked, and referenced by RW/UKW so Kanban boards stay scannable without ad-hoc fixes.

### 2.2 Specification mapping

RF1 → spacing module + corpus pass. RF2–RF5 → policy and agent guides. RF3 → pytest + CLI. RF6 → task doc evidence section. RF7 → status transitions with kboard row.

### 2.3 Constraints

- Validator runs on MoSCOW sections only (`## MoSCOW` … next `##` not a band header).
- `--fix` inserts at most one blank line per gap (idempotent).

### 2.4 Status transition intent

- **Current task status:** TODO
- **Transition to IN PROGRESS:** Step 1 of §4 (first implementation commit)
- **Transition to COMPLETE:** All task + UXR ACs evidenced; FR-077 kboard sync
- **Atomic propagation:** Task doc + kboard in same session on status change

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: length heuristic + optional fix |
| T2 | Reversibility | N | Revert validator + doc edits in one PR |
| T3 | Blast radius | N | Kanban docs + one validator; no package API |
| T4 | Precedent | N | Extends existing guide § Formatting Governance |
| T5 | Constraint trade-off | N | No security/perf trade-off |
| T6 | Governance contract | N | v1 non-blocking only; no new Gate |
| T7 | Supersedes | N | Aligns with UXR-005 |

**Outcome:** `EXEMPT` — governing docs: [kanban-board-guide.md](../kanban/kanban-board-guide.md) § Formatting Governance, [UXR-005](../kanban/fbu/UXR-005-kanban-board-formatting-and-governance.md)

| ID | Exemption | Pass? | Evidence |
| -- | -------- | ----- | -------- |
| E1 | Single locus | Y | §4.1 file list |
| E2 | No new options | Y | Implements UXR-005 |
| E3 | Reversible | Y | Git revert |
| E4 | Spec elsewhere | Y | IPP §2 + UXR-005 |
| E5 | Documented NONE | Y | §5.3 — no new ADR |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Valid pair (short bullets, no blank) | PASS |
| T2 | Two long bullets without blank | FAIL with line refs |
| T3 | Long bullets with blank | PASS |
| T4 | `--fix` idempotency | Second run unchanged |
| T5 | CLI `--strict` exit codes | 0 pass / 1 fail |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E07:S01:T09 `TODO → IN PROGRESS`**; sync kboard row (FR-077) | Task + kboard |
| 2 | Implement `kanban_moscow_spacing.py` + CLI validator | RF3 |
| 3 | Pytest suite | §3 |
| 4 | Delegate from `validate-documentation-consistency.py` | RF3 |
| 5 | Corpus validate/fix in-scope markdown | RF1 |
| 6 | Evidence log + task doc links | RF6 |
| 7 | Policy + RW/UKW guides + README | RF2, RF4, RF5 |
| 8 | Wire non-blocking Step 9 hook in release readiness | RF4 |
| 9 | Reconcile kanban-completed stale T09 row | Data hygiene |
| 10 | Check UXR-005 + task ACs | RF7 |
| **N** | **[MANDATORY] Reconcile status → COMPLETE** with version marker if ACs met; kboard | Task closure |

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/kanban/kanban_moscow_spacing.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/validation/validate_kanban_moscow_spacing.py` (CREATE)
- `packages/frameworks/workflow-mgt/scripts/test_kanban_moscow_spacing.py` (CREATE)
- `scripts/documentation/validate-documentation-consistency.py` (UPDATE)
- `packages/frameworks/kanban/policies/kanban-governance-policy.md` (UPDATE)
- RW/UKW agent execution guides (UPDATE)
- Kanban boards/docs per RF1 (UPDATE as needed)
- Host task, UXR-005, fbuboard IPP segment (UPDATE)

### 4.2 Dependency order

1. Validator module → tests → corpus fix → docs → AC closure

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | Host task | IPP wire, evidence, status | Step 1, N |
| D-U2 | UXR-005 | AC checkboxes | Step 10 |
| D-U3 | kanban-board-guide.md | Example if needed | RF2 |
| D-U4 | kanban-governance-policy.md | Spacing subsection | RF2 |
| D-U5 | RW/UKW agent guides | Validator command | RF4, RF5 |
| D-U6 | kanban README | Cross-link | RF2 |
| D-U7 | kboard.md, kboard.md | IPP segment; spacing | RF1, RF7 |
| D-U8 | validate-documentation-consistency.py | Delegate | RF3 |

### 5.2 New documents to create

| Doc ID | Path | Purpose |
| ------ | ---- | ------- |
| D-C1 | This IPP | IPW package |
| D-C2 | `docs/maintenance/logs/uxr-005-spacing-20260601.md` | Evidence log |

### 5.3 Documentation gaps and explicit non-changes

| Topic | Resolution |
| ----- | ---------- |
| New ADR | NONE — EXEMPT per §2.5 |
| `.cursorrules` Step 9 table | NONE in v1 — agent guide sufficient |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D-C1 | `docs/implementation-cycles/IPP-E7S1T9-*.md` | NOT_APPLICABLE | evergreen |
| D-C2 | `docs/maintenance/logs/` | NOT_APPLICABLE | transient |
| Validator | `packages/frameworks/workflow-mgt/scripts/validation/` | N/A | — |

---

## 7. Success / verification criteria

- [x] `pytest` spacing tests pass
- [x] `validate_kanban_moscow_spacing.py --strict` PASS on repo
- [x] UXR-005 AC-1–AC-4 and task AC-1–AC-5 checked
- [x] `validate_ipw_publication_wiring.py --requested E07:S01:T09` PASS
- [x] FR-097: board edits limited to spacing blanks + UXR-005 prune (fbuboard/kboard row removal); no batch stamp rewrites

---

## References

- [UXR-005](../kanban/fbu/UXR-005-kanban-board-formatting-and-governance.md)
- [E07:S01:T09 task](../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md)
- [BR-076](../kanban/fbu/BR-076-e7-s00-must-not-host-concrete-tasks.md) (detasking context)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [kanban-board-guide.md](../kanban/kanban-board-guide.md) § Formatting Governance
