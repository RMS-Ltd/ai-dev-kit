---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation Planning Workflow (IPW) — Agent Execution Guide

**Status:** Active  
**Purpose:** Canonical **pre-implementation** workflow: produce a **single durable plan document** (spec + test design + implementation plan) bound to a **host Kanban task**, with **mandatory bidirectional wiring**.  
**Product definition (ai-dev-kit):** `docs/project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md`  
**Template:** `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`  
**Relationship:** **IPW** subsumes the **planning** scope of the legacy **ICW** Cursor trigger; **ICW** is a **deprecated alias** — same steps, same artifacts (**FR-042** §7).

---

## Trigger

- **`/ipw [E:S:T] [--skip-tests]`** — **canonical Claude Code slash command** (`.claude/commands/ipw.md`). Self-contained execution guide; enforces plan mode and **ten-phase** gate structure. **Must be invoked from within a `/plan` session.**
- **`IPW`** — plain-text trigger (Cursor / Claude Code via `CLAUDE.md` routing). Routed to `/ipw` in Claude Code sessions.
- **`IPW E{epic}:S{story}:T{task}`** — explicit host task (formats: `E5:S01:T42`, `E5S01T42`).
- **`IPW E{epic}:S{story}:T{task} --skip-tests`** — doc/config-only tasks; test design not applicable. Justification mandatory in Phase 3.
- **`ICW` / `icw`:** **Deprecated alias** — treat as **IPW**; do not define a divergent process.

## Mode

- **Planning mode is mandatory.** IPW must run in plan mode. In Claude Code, invoke `/plan` first, then `/ipw`. If invoked outside plan mode, respond: `IPW BLOCKED: plan mode required. Type /plan to enter plan mode, then invoke /ipw again.`
- **Implementation mode blocks IPW.** IPW-style elicitation is a planning-only activity.

## Execution pattern (ANALYZE → DETERMINE → EXECUTE → VALIDATE → PROCEED)

Create a TODO list for all phases before starting. Mark each phase complete before advancing. **Phase gates are mandatory — never skip.**

| Phase | Name | Gate to proceed |
| ----- | ---- | --------------- |
| **0** | Identify host task | Task doc found at canonical path; E:S:T confirmed; status is `TODO` or `IN PROGRESS`. |
| **1** | Ascertain requirements | Functional + non-functional requirements consolidated from task, FR/BR/UXR context, and ACs; all gaps resolved with user before proceeding. |
| **2** | Define specification | Goal, F-requirements, NF-requirements, out-of-scope, constraints complete; user confirms scope before Phase 3. |
| **3** | Design tests | Test cases mapped to spec coverage — OR `--skip-tests` justification explicitly documented. |
| **4** | Plan implementation | Ordered steps, files, dependencies defined. **Step 1 must be `TODO → IN PROGRESS` transition; final step must be status reconciliation** (see IPP state transition mandate below). |
| **5.0** | ADR necessity decision | Score T1–T7 / E1–E5 per [ipw-adr-necessity-checklist.md](../../../../../../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md); record outcome in IPP §2.5; if REQUIRED, ADR row planned for §5. |
| **5** | Documentation update and creation | Inventory existing docs; classify UPDATE / CREATE / NONE; gap analysis; deliverables table complete; user confirms doc-class coverage. |
| **6** | House documentation | Every non-NONE deliverable has canonical target path, publication status (`PUBLISHED` \| `NOT_APPLICABLE`), and link intent; no TBD paths. |
| **7** | Create plan doc | Written from `PLAN_DOC_TEMPLATE.md`; Host Task header set; §1–§7 present (includes §5–§6 from Phases 5–6). |
| **8** | Wire to host task | Atomic with Phase 7 — task doc `Input` + `References` updated; publication fields when applicable (BR-066). |
| **9** | Validate | Bidirectional links confirmed; required sections present; state transition steps in §4; §2.5 ADR decision consistent with §5; §5–§6 complete. |

## Status transition ownership (FR-077)

IPW itself is planning-only and must not directly transition implementation status.

### Canonical ownership matrix

- `TODO -> IN PROGRESS`
  - **Decision owner:** implementation execution (first non-planning code/doc implementation change)
  - **Write owner:** implementation execution updates task doc status
  - **Propagation owner:** RW Step 7 ("Scoped Kanban Reconciliation, Self-Sufficient" — FR-092) propagates the row in the same session as a release-scope, self-sufficient four-surface reconciliation. Standalone UKW remains a reactive corrective workflow only and is **not** a process dependency for RW correctness.
- `IN PROGRESS -> COMPLETE`
  - **Decision owner:** implementation execution after acceptance evidence exists
  - **Write owner:** implementation execution updates task doc status and evidence notes
  - **Propagation owner:** RW Step 7 ("Scoped Kanban Reconciliation, Self-Sufficient" — FR-092) propagates the row in the same session as a release-scope, self-sufficient four-surface reconciliation. Standalone UKW remains a reactive corrective workflow only and is **not** a process dependency for RW correctness.

### IPP state transition mandate (FR-094 / ADR-004)

Every IPP produced by IPW **must** include these two prescribed steps in its Implementation Plan section, regardless of task type:

**Step 1 (always first):**
> Transition task `E{epic}:S{story}:T{task}` status from `TODO` to `IN PROGRESS` in task document. Update `Last updated` date.

**Final step (always last):**
> Reconcile task `E{epic}:S{story}:T{task}` status with actual implementation state: if all ACs satisfied with evidence → `COMPLETE` + `✅ COMPLETE (v{version})`; if implementation ongoing → confirm `IN PROGRESS`; if blocked → `BLOCKED` + documented reason. Update `Last updated` date.

These steps are **executor-prescribed** — IPW writes them into the plan; implementation execution runs them. This preserves the FR-077 ownership contract while making compliance the default for any implementer following the plan.

**The final step is a state reconciliation, not a forced `→ COMPLETE`.** A task legitimately in progress across multiple sessions ends those sessions `IN PROGRESS` until all ACs are satisfied.

See `PLAN_DOC_TEMPLATE.md` Section 4 for the canonical placeholder rows. See [ADR-004](../../../../../../docs/architecture/standards-and-adrs/ADR-004-ipp-state-transition-contract.md) for the formal decision record.

### Non-negotiable rules

- IPW outputs must explicitly declare transition intent:
  - `TODO -> IN PROGRESS` at first non-planning implementation change.
  - `IN PROGRESS -> COMPLETE` only after acceptance evidence is recorded.
- Task-doc status is authoritative for transition decisions.
- Board status is a propagated view and must not be advanced independently of task-doc status.
- Propagation must be atomic at change-set/session level (no split-brain task-doc vs board status).

## ADR necessity decision (Phase 5.0 — FR-100)

**Phase 5.0** runs **after** Phase 4 and **before** Phase 5. It applies the [IPW ADR necessity checklist](../../../../../../docs/architecture/standards-and-adrs/ipw-adr-necessity-checklist.md): positive triggers T1–T7 (any Y → ADR required in §5), narrow exemptions E1–E5 (all pass + all T = N → EXEMPT). Outcome is recorded in IPP **§2.5** and enforced in Phase 9 validation.

## Documentation phases (5–6)

**Phase 5** runs **after** Phase 5.0 and implementation planning, **before** the IPP is written. It produces the §5 **Documentation deliverables** table: which existing docs to update, which new docs to create, explicit gaps, and NONE rows with justification.

**Phase 6** maps each deliverable to the **documentation system** (canonical path + publication intent). It produces §6 **Documentation housing**. Use this ladder:

| Document class | Canonical location |
| -------------- | ------------------ |
| Planning package (IPP) | `docs/implementation-cycles/IPP-E{epic}S{story}T{task}-{slug}.md` |
| Kanban | `docs/project-management/kanban/` |
| FR / BR / UXR | `docs/project-management/kanban/fr-br/` |
| Architecture / ADR / policy | `docs/architecture/standards-and-adrs/` |
| Workflow KB | `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/` |
| User docs | `docs/documentation/user-docs/` |
| Docusaurus-published | `docs/` source + `portal/` (BR-066) |

See [specification-and-planning-artifacts-policy.md](../../../../../../docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md).

## Publication filing contract (BR-066 / E2:S15:T01)

Phase 6 records publication intent; Phase 8 wiring and implementation execution apply it. For tasks where planning artifacts are expected to be discoverable in project docs:

- Task docs must declare publication outcome as either:
  - `Publication Status: PUBLISHED`, or
  - `Publication Status: NOT_APPLICABLE` plus `Publication N/A Reason:`.
- For `PUBLISHED`, task docs must link the task package artifacts in `docs/implementation-cycles/`:
  - specification,
  - test-design,
  - implementation-plan.
- `docs/implementation-cycles/` is the canonical Docusaurus-autogenerated path; do not keep publication links only in local editor plan folders.
- Validate wiring with:
  - `python "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E{epic}:S{story}:T{task}`

## Post-run reconciliation contract (FR-092 / FR-084)

When IPW or implementation execution mutates substantive task fields (status, AC progression, evidence notes, version anchors), the **same session** must reconcile all four canonical surfaces before commit:

1. **Task doc** — host task plus directly affected child tasks.
2. **Source FR / BR / UXR doc(s)** — bidirectional links and status mirroring.
3. **`kboard.md`** — canonical row(s) for the release-scope task(s); active-row hygiene; canonical row tail grammar (no duplicate tokens).
4. **`fbuboard.md`** — canonical row(s) for the release-scope FBU(s); supersede / gating / closure markers; canonical row tail grammar (no duplicate tokens).

**Properties (FR-092):**

- **Idempotent.** Re-running reconciliation on already-clean surfaces is a no-op.
- **Deterministic.** Output is fully determined by input state (no nondeterministic ordering).
- **Ordered.** Host task -> source FBU -> `kboard.md` -> `fbuboard.md`.
- **Atomic at session level.** No split-brain task-doc vs board status.
- **Auditable.** A "touched surfaces + why" report is emitted by RW Step 7 covering the release slice.

**RW Step 7 (Scoped Kanban Reconciliation, Self-Sufficient) is the canonical post-run reconciliation surface for release-scope work.** Its correctness is self-contained: no follow-up UKW run is required for release-scope consistency. Out-of-scope corpus drift may be addressed by UKW (reactive, optional, not a process dependency).

See [`FR-092` — Canonical RW/UKW kanban consistency program (meta)](../../../../../../docs/project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) (absorbing [`FR-084`](../../../../../../docs/project-management/kanban/fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md), [`FR-091`](../../../../../../docs/project-management/kanban/fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)).

## Outputs

- One markdown plan doc per IPW run (typically co-located with the host task story folder or under `docs/implementation-cycles/` per project convention).
- Updated task doc with **Input** + **References** pointing to the plan.
- Explicit status-transition intent section in the plan artifact (required for IPW-derived tasks).

## Integration

- **Implementation Cycle (TDD):** After IPW, follow [implementation-cycle-sop.md](implementation-cycle-sop.md): Step 3 uses the plan’s spec/test sections to create **failing tests**, then implementation.
- **RW:** Release workflow is unchanged; run **RW** after shippable work with the required task token. RW Step 7 owns release-scope four-surface reconciliation (FR-092 / FR-091, absorbing FR-084's post-run reconciliation contract).

## References

- [Implementation Cycle SoP](implementation-cycle-sop.md)
- Framework package (legacy name `implementation-cycle-workflow`): still contains `icw_handler.py` / templates — see package README for **ICW → IPW** consolidation note.
