---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T16:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E5:S01:T42 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [T42-implementation-planning-workflow-ipw.md](T42-implementation-planning-workflow-ipw.md) **(E5:S01:T42)**  
**Planning for:** [FR-042 — Implementation Planning Workflow (IPW)](../../../fr-br/FR-042-implementation-planning-workflow-ipw.md)  
**Status:** Planning artifact (implementation tracked in host task deliverables)

---

## 1. Specification

### 1.1 Goal

Deliver **FR-042**: a single canonical **Implementation Planning Workflow (IPW)** with file-backed artifacts and **mandatory bidirectional wiring** (task doc ↔ plan doc), and **merge ICW’s planning responsibilities into IPW** per FR-042 §7. **RW** and **Implementation Cycle** (TDD) remain unchanged as separate concerns.

### 1.2 Functional requirements

| ID | Requirement | FR-042 |
|----|-------------|--------|
| S1 | Publish IPW SoP or workflow doc (steps + checklist) | R01, AC1 |
| S2 | Publish `PLAN_DOC_TEMPLATE.md` with Spec / Test Design / Impl Plan + Host Task | R02, AC2, AC8 |
| S3 | Task template guidance: when a plan exists, link from Input + References | AC3, AC3a |
| S4 | Implementation Cycle SoP references IPW before Step 3 | R06, AC4 |
| S5 | `.cursorrules`: **IPW** canonical; **ICW** = deprecated alias only | R08–R10, AC6, AC9–AC10 |
| S6 | `workflow-registry.yaml` + `implementation-cycle-workflow/README.md`: ICW→IPW consolidation | R11, AC11 |
| S7 | FR-040, FR-048, T40, T48: planning language points at **IPW** | R12, AC12 |
| S8 | Optional R13: legacy notice / thin wrap for `icw_handler` — no second user-facing workflow | R13 |

### 1.3 Non-functional requirements

| ID | Requirement |
|----|-------------|
| NF01 | Traceability: plan doc discoverable from task and vice versa |
| NF02 | Consistency with bidirectional wiring policy |
| NF03 | Repeatable IPW steps |
| NF04 | Single planning mental model (**IPW** only) |

### 1.4 Out of scope

- Full rewrite of ICW into a new CLI product.
- Changes to RW / UKW / CMW / PVW triggers (beyond cross-references if needed).

### 1.5 Constraints

- Ship via **RW** on `epic/5-documentation-management`.
- Changelog: no false “Fixed” for behavior not user-verified.

---

## 2. Test design

| ID | Layer | What to verify | Approach |
|----|--------|----------------|----------|
| T1 | Doc wiring | Plan ↔ T42 links resolve | Manual; repo-relative paths |
| T2 | Rules | IPW section exists; ICW explicitly alias/deprecated | **Manual +** optional grep during review; small pytest deferred (low ROI for single `.cursorrules`) |
| T3 | Template | `PLAN_DOC_TEMPLATE.md` has required headings | **Manual** first RW; optional `validate_plan_template.py` in follow-up |
| T4 | Unwired plans | No orphans without Host Task / back-link | **Future** (FR-042 R07 / AC7) |
| T5 | Release | Branch + task intent validators pass on T42 RW | `validate_branch_context.py --strict`, `validate_rw_task_intent.py` |

**Phase 1 decision:** T1–T2 manual; T3 manual checklist after template lands; T4 deferred; T5 on each RW.

---

## 3. Implementation plan

| Phase | Actions | Outputs |
|-------|---------|---------|
| **1** | Add `PLAN_DOC_TEMPLATE.md`; add IPW agent execution doc in vwmp KB | Template + `implementation-planning-workflow-agent-execution.md` |
| **2** | `.cursorrules`: IPW trigger; ICW → deprecated alias (same phases as IPW) | Updated rules |
| **3** | `implementation-cycle-sop.md`: IPW before Step 3; `TASK_TEMPLATE.md`: plan link hint | Updated SoP + template |
| **4** | FR-040, FR-048, T40, T48: IPW successor / planning wording | Kanban + FR markdown |
| **5** | R13: `implementation-cycle-workflow/README.md` + `icw_handler.py` legacy banner | Package README + code comment |
| **Close** | Check off T42 deliverables; RW | Version + changelog |

```mermaid
flowchart LR
  P1[Phase1_Template_IPW_doc]
  P2[Phase2_CursorRules]
  P3[Phase3_SoP_TaskTpl]
  P4[Phase4_CrossRefs]
  P5[Phase5_LegacyPkg]
  P1 --> P2 --> P3 --> P4 --> P5
```

---

## 4. Success criteria (FR-042 AC mapping)

| AC | Criterion | Verified by |
|----|-----------|-------------|
| AC1 | IPW workflow documented | Phase 1 doc |
| AC2 | Plan template sections + Host Task | Phase 1 template |
| AC3 / AC3a | Task template + bidirectional wiring in SoP/template | Phase 3 |
| AC4 | Implementation Cycle SoP references IPW | Phase 3 |
| AC5 | Retroactive unwired plans | **Out of band** (separate grooming) |
| AC6 / AC9 | Cursor rules reference IPW | Phase 2 |
| AC7 | Validator for unwired plans | **Deferred** (T4) |
| AC8 | `PLAN_DOC_TEMPLATE.md` path | Phase 1 |
| AC10 | ICW deprecated/alias in `.cursorrules` | Phase 2 |
| AC11 | Registry + ICW README consolidation | Phase 5 + registry note |
| AC12 | FR-040 notes IPW planning successor | Phase 4 |

---

## References

- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/implementation-cycle-sop.md`
- `packages/frameworks/kanban/templates/PLAN_DOC_TEMPLATE.md`


## 5. AC5/AC7 closure addendum

### AC5 target list (retro wiring)

- `docs/project-management/kanban/epics/Epic-4/Story-014-kanban-framework-maintenance/T01-planning-spec-tests-impl.md`
  - Add `Host Task` header link to `T01-planning-spec-tests-impl.md`.
  - Ensure host task has plan link in both `## Input` and `## References`.
- `docs/project-management/kanban/epics/Epic-4/Story-011-kanban-granularity-discrete-task-docs/T07-planning-spec-tests-impl.md`
  - Verify existing bidirectional wiring remains valid.

### AC7 validator specification

- Script path: `packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py`
- Inputs:
  - Scan planning artifacts in `docs/project-management/kanban/epics/**` matching `*planning*.md` and `IPW-*.md`.
- Checks:
  1. Plan doc has `Host Task` markdown link.
  2. Host task file exists.
  3. Host task `## Input` section contains link to the plan doc.
  4. Host task `## References` section contains link to the plan doc.
- Output:
  - PASS/FAIL summary with concrete file paths and missing requirement(s).

### Definition of done (AC5/AC7)

- AC5: All identified historical plan docs are bidirectionally wired.
- AC7: Validator script exists, runs, and reports PASS on current repository state.


### Validator result (AC7)

- `python "packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py"`
- Result: `PASS: all planning docs are bidirectionally wired`
