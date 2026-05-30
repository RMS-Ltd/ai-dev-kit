---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-30T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T23 — Planning: Tool-agnostic workflow step tracking + persisted run logs (IPW)

**Host Task:** [`T23-tool-agnostic-workflow-step-tracking-and-runlogs.md`](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md) **(E02:S01:T23)**  
**Status:** Approved — implementation landed 2026-05-30

> **IPW (Implementation Planning Workflow):** Consolidated planning package for E02:S01:T23. Supersedes missing `ICW-E06S07T18-specification.md` under legacy E06:S07:T18 housing.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Governance docs must not require Cursor `todo_write` specifically | T23 AC1 |
| RF2 | Define canonical **Workflow Step Tracker** semantics (states, lifecycle, step IDs) | T23 AC2 |
| RF3 | Windsurf/Cascade guidance mapping to `todo_list` | T23 AC3 |
| RF4 | Spec-only persisted agent run log (workflow, route, current step, blocking reason, timestamps) | T23 AC4; user scope: spec-only v1 |
| RF5 | RW docs reference run log spec; housekeeping updated for tool-agnostic cleanup | T23 AC5 |
| RF6 | Dual-source parity (`.cursorrules` ↔ portable RW/UKW excerpts) | FR-060 / rw-trigger-dual-source-parity |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | No overlap with ADR-008 forensic journals — explicit boundary cross-links | ADR-008 §Decision item 6; IPP-E2S08T08 |
| RNF2 | Adopter-facing patterns remain project-agnostic where possible | workflow-hardening-guide |
| RNF3 | Doc changes verifiable by automated governance tests | FR-100 / IPW Phase 3 |

### 1.3 Invariants and boundaries

- **Invariants:** Workflow Step Tracker states map 1:1 to prior todo semantics; forensic journal schema unchanged.
- **In scope:** Governance/KB docs, ADR-011, JSON schema + example, doc lint tests, task wiring.
- **Out of scope:** `rw_journal.py` changes; FR-044; reference Python run-log writer; Windsurf `.windsurf/` artifact revival.

---

## 2. Specification

### 2.1 Goal

Enable portable agent-managed workflow execution across Cursor, Windsurf/Cascade, and tool-less environments by replacing IDE-specific TODO mandates with a **Workflow Step Tracker contract**, a **spec-only agent run log v1**, and a governance doc sweep—without duplicating ADR-008 forensic recovery.

### 2.2 Specification mapping from ascertained requirements

| Requirement | Specification artifact |
| ----------- | --------------------- |
| RF1–RF2 | [workflow-step-tracker-contract.md](../../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/workflow-step-tracker-contract.md) |
| RF3 | Contract §Windsurf / Cascade appendix |
| RF4 | [workflow-agent-run-log-v1.schema.json](../architecture/standards-and-adrs/schemas/workflow-agent-run-log-v1.schema.json) + example |
| RF5 | RW agent guide Step 17 + agent run log references |
| RF6 | Updated portable excerpts + parity checklist |
| RNF1 | [ADR-011](../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md) boundary table |

### 2.3 Constraints

- Spec-only v1 for agent run log (no runtime module).
- Implementation commits via RW E02:S01:T23 per project git policy.
- Changelog language: “Change implemented” until user verifies.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** COMPLETE (implementation 2026-05-30; pending RW for version anchor)
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (§4 Step 1).
- **Transition trigger to COMPLETE:** All AC satisfied; pytest TC1–TC6 green; evidence linked.
- **Atomic propagation requirement:** Task doc, story checklist, kboard row update together on closure RW.
- **Owner:** Implementation execution §4 final step.

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

Criteria: [`ipw-adr-necessity-checklist.md`](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md) (FR-100).

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | todo_write vs todo_list vs file-only tracker |
| T2 | Reversibility | N | Doc/schema revert in one PR |
| T3 | Blast radius | Y | `.cursorrules`, all workflow agent guides, portable excerpts |
| T4 | Precedent | Y | Canonical pattern for all future agent workflows |
| T5 | Constraint trade-off | Y | Portability vs IDE-native ergonomics |
| T6 | Governance contract | Y | Changes RW/UKW/IPW/PVW mandatory agent behavior |
| T7 | Supersedes | N | Coordinates with ADR-008; does not contradict |

**Outcome:** `REQUIRED` — [ADR-011](../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1–E5 | — | — | Not evaluated (REQUIRED) |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| TC1 | RF1 — no bare Cursor-only mandates | `tests/docs/test_workflow_step_tracker_governance.py`: governance files must reference Workflow Step Tracker contract when mentioning progress tracking |
| TC2 | RF2 — contract completeness | Contract doc contains required states + lifecycle rules |
| TC3 | RF4 — schema validity | Example JSON validates against schema |
| TC4 | RNF1 — ADR boundary | ADR-011 and ADR-008 cross-link boundary language |
| TC5 | RF3 — Windsurf appendix | Contract contains `todo_list` mapping table |
| TC6 | RF6 — dual-source parity | Parity checklist includes tracker template row |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition E02:S01:T23 `TODO → IN PROGRESS`** in task doc | Task doc status |
| 2 | Create ADR-011, schema, example, tracker contract | Architecture + KB artifacts |
| 3 | Rewrite agent-driven-workflow progress section | KB canonical SoT |
| 4 | Sweep workflow agent execution guides + `.cursorrules` + portable excerpts | Governance alignment |
| 5 | Update workflow-hardening-guide, forensic recovery guide, ADR-008 Related | Boundary docs |
| 6 | Add pytest governance tests TC1–TC6 | `tests/docs/` |
| 7 | Wire IPP to T23; fix T18 broken ICW link | Bidirectional links |
| **N** | **[MANDATORY] Reconcile status** — if all AC satisfied → `COMPLETE` + forensic marker | Task doc reflects actual state |

### 4.1 Files to create or modify

- CREATE: IPP (this file), ADR-011, schema, example, tracker contract, tests
- UPDATE: agent-driven-workflow-execution.md, release-workflow-agent-execution.md, 7 other workflow guides, .cursorrules, cursorrules-rw/ukw excerpts, workflow-hardening-guide, workflow-forensic-recovery-guide, ADR-008 Related, rw-trigger-dual-source-parity, T23/T18 task docs

### 4.2 Dependency order

1. ADR-011 + contract + schema (decisions first)
2. agent-driven-workflow (canonical reference)
3. Per-workflow guides + root governance
4. Tests (verify sweep)
5. Task wiring + status reconciliation

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope | Tied to |
| ------ | ---- | ----- | ------- |
| D-U1 | `agent-driven-workflow-execution.md` | Replace Cursor TODO section | RF1–RF2 |
| D-U2 | `release-workflow-agent-execution.md` | Tracker + run log + Step 17 | RF4–RF5 |
| D-U3 | Other `*-workflow-agent-execution.md` (7) | Tracker contract reference | RF1 |
| D-U4 | `.cursorrules` | RW/UKW/PVW tracker sections | RF6 |
| D-U5 | `cursorrules-rw-trigger-section.md` | Tracker templates | RF6 |
| D-U6 | `cursorrules-ukw-trigger-section.md` | Tracker section | RF6 |
| D-U7 | `workflow-hardening-guide.md` | Progress tracking § | RF2 |
| D-U8 | `workflow-forensic-recovery-guide.md` | ADR-011 boundary | RNF1 |
| D-U9 | `ADR-008-*.md` | Related → ADR-011 | RNF1 |
| D-U10 | `rw-trigger-dual-source-parity.md` | Tracker checklist row | RF6 |
| D-U11 | T23 + T18 task docs | IPP links; fix broken ICW | Phase 8 |

### 5.2 New documents to create

| Doc ID | Path | Purpose | Tied to |
| ------ | ---- | ------- | ------- |
| D-C1 | `IPP-E2S01T23-*.md` | This plan | IPW |
| D-C2 | `ADR-011-*.md` | Architecture decision | T6 |
| D-C3 | `workflow-step-tracker-contract.md` | Tracker SoT | RF2 |
| D-C4 | `workflow-agent-run-log-v1.schema.json` | Run log spec | RF4 |
| D-C5 | `workflow-agent-run-log-v1.example.json` | Example | RF4 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Forensic command records | NONE — ADR-008 owns |
| Reference run-log Python module | NONE — spec-only v1 per user decision |
| Historical changelogs | NONE — grandfathered |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle | Inbound links |
| ------ | -------------- | ----------- | --------- | ------------- |
| D-C1 | `docs/implementation-cycles/IPP-E2S01T23-*.md` | NOT_APPLICABLE | evergreen | T23 Input/References |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-011-*.md` | PUBLISHED | evergreen | ADR-008, contract |
| D-C3 | `packages/frameworks/workflow mgt/KB/.../vwmp/workflow-step-tracker-contract.md` | PUBLISHED | evergreen | All workflow guides |
| D-C4–D-C5 | `docs/architecture/standards-and-adrs/{schemas,examples}/` | PUBLISHED | evergreen | ADR-011, RW guide |

---

## 7. Success / verification criteria

- [ ] AC1: No governance file mandates Cursor `todo_write` without Workflow Step Tracker contract reference
- [ ] AC2: Tracker contract defines states, lifecycle, step IDs
- [ ] AC3: Windsurf/Cascade `todo_list` appendix present
- [ ] AC4: Run log schema + example exist; RW docs reference them
- [ ] AC5: RW Step 17 housekeeping is tool-agnostic
- [ ] TC1–TC6 pytest green
- [ ] Bidirectional T23 ↔ IPP links
- [ ] ADR-011 ↔ ADR-008 boundary documented

---

## References

- [E02:S01:T23 task doc](../project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md)
- [E06:S07:T18 superseded task](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T18-tool-agnostic-workflow-step-tracking-and-runlogs.md)
- [ADR-011](../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)
- [ADR-008](../architecture/standards-and-adrs/ADR-008-workflow-forensic-logging-and-checkpoints.md)
- [IPP-E2S08T08](IPP-E2S08T08-forensic-logging-rollback-fr059.md)
- [E04:S19:T03 investigation report](E04S19T03-e6s07-default-housing-investigation-report.md)
