---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T06:35:13Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T10 — Planning: Kanban Transform Consolidation (+M1 config loader unification) (IPW)

**Host Task:** [`T10-kanban-transform-consolidation`](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md) **(E02:S13:T10)**  
**Planning for:** [T05 gap log](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) · [T04 integration alignment report](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md) · [FR-092](../kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)

**Status:** Draft

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Establish a single shared kanban row-transform entrypoint contract for MoSCOW row tail transforms, used consistently by RW Step 7 (invocation_context `rw_step_7`), UKW Step 6, and `update_kanban_docs.py`. | T10 scope · `apply_canonical_row_transform_pipeline` |
| RF2 | Ensure each context selects the correct `RowTransformContract` (step order) and evidence-mode semantics to avoid divergent ordering and repeated tail segments. | FR-092 · T10 scope · UXR-009/FR-092 stamp evidence |
| RF3 | Publish a boundary contract doc in the workflow-mgt KB that explains when to use each entrypoint path (agent context vs deterministic script), with explicit contract/evidence-mode expectations. | T10 AC + boundary doc requirement |
| RF4 | Preserve the FR-092 four-surface contract end-to-end: task doc + source FR/BR/UXR docs + `kboard.md` canonical rows (no duplicate tail tokens) + canonical `fbuboard` reconciliation. | FR-092 · T10 AC |
| RF5 | No regression in release-readiness gates and board stamp diffs: `validate_board_stamp_diff.py` and RW Step 7 validator suite continue to pass after refactor. | T10 AC + BR-069/FR-097/FR-092 gates |
| RF6 | Consolidate duplicated `load_rw_config` implementations into a shared `rw_config_loader` module and update all call sites to use it. | GAP-WFMGT-INTG-002 · T05 Gap 4 · M1 scope |
| RF7 | Maintain parity of config discovery and returned schema fields across all impacted scripts/validators (no breaking behavior for `rw-config.yaml` path resolution). | GAP-WFMGT-INTG-002 · T04 I10 |
| RF8 | Add/extend tests to prove (a) transform contract parity/idempotency across contexts and (b) config-loader output parity across call sites. | T10 AC · existing `test_update_kanban_docs.py` |
| RF9 | This IPP must be linked from the host task before implementation begins (FR-083 planning gate). | T10 Dependencies · FR-083 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Determinism: same inputs (board content + evidence mode + config paths) yield byte-stable transformed outputs. | FR-092-NF2 · UXR-009 |
| RNF2 | Evidence/stamp integrity: preserve row `Last modified` stamp authority semantics and avoid synthetic stamp churn when evidence is absent. | FR-097 · UXR-009 · FR-092 |
| RNF3 | Backward-safe behavior: do not change validator gate semantics; refactor is contract-preserving from an adopter’s perspective. | FR-092 · T10 out-of-scope validators |
| RNF4 | Operational safety: implementation must be validated through the existing validator suite before status reconciliation to `COMPLETE`. | FR-092-F4 · T10 AC |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Preserve FR-092 preventive/UKW corrective separation semantics (RW release correctness is self-sufficient).
  - Preserve canonical transform step ordering and evidence-mode behaviors in `apply_canonical_row_transform_pipeline`.
  - Config loader consolidation must not modify `rw-config.yaml` schema meaning or required keys.
- **In scope:**
  - Shared kanban transform contract/module extraction and invocation routing.
  - Boundary documentation in workflow-mgt KB.
  - Shared `rw_config_loader` module extraction and call-site updates.
  - Regression tests for parity, idempotency, and loader output stability.
- **Out of scope:**
  - FR-050 workflows directory reorganization (T09).
  - Changes to release-tag mutability or git publish mechanics (handled by RW).

---

## 2. Specification

### 2.1 Goal

Produce an implementation plan that removes kanban transform and `rw-config` loader fragmentation by routing all relevant paths through a single shared entrypoint contract, while preserving FR-092 four-surface invariants and validator gate semantics.

### 2.2 Specification mapping from ascertained requirements

The specification defines (1) the transform entrypoint contract as the canonical “parse-normalize-render” pipeline configuration and (2) a single shared `rw_config_loader` abstraction for schema-consistent config discovery. By enforcing consistent contract selection and evidence-mode semantics across RW Step 7, UKW Step 6, and deterministic script updates, we eliminate ordering divergence and repeated tail segments. By unifying config loading across scripts/validators, we eliminate path-resolution drift and ensure that downstream validators operate against identical config-derived inputs.

### 2.3 Constraints

- Do not re-implement validator gates or change their core semantics; refactor must be contract-preserving.
- Do not alter FR-050 scope or run any FR-050-driven directory reorg here.
- Preserve stamp evidence integrity and avoid synthetic `Last modified` stamp churn.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (module extraction + call-site routing or loader unification begins).
- **Transition trigger to COMPLETE:** Acceptance evidence is recorded (tests/verification notes linked) and validator suite passes.
- **Atomic propagation requirement:** Task doc status and any linked kboard row status must update in the same change set/session during implementation (executor-owned).
- **Owner:** Implementation execution step (not planning-only IPW artifact creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Multiple valid approaches exist (doc-only boundary vs module extraction; shared contract location patterns; loader consolidation via shared helper vs wrapper compatibility layers). |
| T2 | Reversibility | Y | Undo impacts multiple scripts/validators and documentation, and requires adopter-facing re-alignment. |
| T3 | Blast radius | Y | Touches multiple framework scripts and validators (`update_kanban_docs`, kanban transforms, validations, versioning/documentation scripts) plus KB docs. |
| T4 | Precedent | Y | The chosen entrypoint and loader consolidation becomes a canonical pattern for future kanban/update work. |
| T5 | Constraint trade-off | Y | Trade between deduplication and backward-safe parity; trade between evidence-stamp integrity and minimal mutation. |
| T6 | Governance contract | Y | Updates RW/UKW boundary guidance (governance/contract doc) and affects how adopters/agents should invoke the shared pipeline. |
| T7 | Supersedes | N | No single existing ADR/policy explicitly covers this combined entrypoint contract + loader unification choice as the canonical “how we do X here.” |

**Outcome:** `REQUIRED`

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| TD1 | Transform contract parity across contexts | For a representative fixture set, RW Step 7, UKW Step 6, and deterministic `update_kanban_docs.py` paths produce the same canonical row tail transforms (no ordering divergence). |
| TD2 | Idempotency under repeated application | Re-running the unified pipeline does not re-multiply row tail segments; diagnostics report duplicate/footer reconciliation counts as zero. |
| TD3 | Evidence/stamp integrity | With evidence_mode variants (as applicable), the pipeline appends/suppresses/enforces stamps according to the existing evidence gating semantics without synthetic churn. |
| TD4 | Regression on board stamp diff validators | `validate_board_stamp_diff.py` and Step 7 validator suite continue to pass on known fixtures after refactor. |
| TD5 | Config loader output parity | Using a canonical `rw-config.yaml` fixture, the shared loader module returns the same schema-derived values that prior per-file `load_rw_config` implementations produced (key-by-key parity). |
| TD6 | Call-site integration smoke | Each impacted script/validator that consumed `load_rw_config` continues to operate successfully (no schema key resolution regressions). |
| TD7 | Full validator smoke for this task | Run `validate_branch_context.py --strict --requested E02:S13:T10 --art` and key validators impacted by config/kanban update wiring to ensure no breakage. |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S13:T10` status `TODO → IN PROGRESS`** in the host task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Extract or centralize the transform entrypoint contract so RW Step 7, UKW Step 6 logic, and `update_kanban_docs.py` route through the same shared contract selection and pipeline invocation. | Shared transform entrypoint module + updated call sites |
| 3 | Update `update_kanban_docs.py` and UKW-related invocation paths to use the shared transform contract and preserve evidence-mode/stamp authority semantics. | Contract-consistent behavior |
| 4 | Extend/adjust tests, reusing existing `test_update_kanban_docs.py` patterns, to prove parity and idempotency across contexts. | New/updated tests |
| 5 | Create/update workflow-mgt KB boundary contract doc describing when to use each entrypoint path and what contract/evidence-mode assumptions apply. | Boundary KB doc published |
| 6 | Create the shared `rw_config_loader` module and migrate all `load_rw_config` call sites to use it (remove duplication). | Unified loader + updated scripts/validators |
| 7 | Add parity tests and integration smoke checks for config loader behavior across impacted scripts/validators. | Loader parity test coverage |
| 8 | Run the validator suite impacted by this refactor and confirm no gate semantic regressions (strict runs). | Validation pass evidence |
| 9 | Reconcile task status based on evidence and update the task doc (and kboard row status) atomically. | Task status `COMPLETE` (or `IN PROGRESS/BLOCKED` as appropriate) |
| **N** | **[MANDATORY] Reconcile task `E02:S13:T10` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Any post-ship verification or FBU-closure step must prescribe `RW E02:S13:T10 --art` only (BUILD +1).

### 4.1 Files to create or modify

- `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- `packages/frameworks/workflow-mgt/scripts/kanban/*` (transform contract extraction / invocation routing as needed)
- `packages/frameworks/workflow-mgt/scripts/**/validate_*.py` and `packages/frameworks/workflow-mgt/scripts/**/version/*.py` (config-loader call-site migration)
- `packages/frameworks/workflow-mgt/scripts/test_update_kanban_docs.py` and/or new targeted test modules for loader parity
- Workflow-mgt KB boundary documentation doc(s)
- New shared module(s) for:
  - transform entrypoint contract
  - `rw_config_loader`

### 4.2 Dependency order

1. Refactor transform contract without changing pipeline semantics (tests first/parallel where possible).
2. Migrate `update_kanban_docs.py` and invocation routing to the shared contract.
3. Add/confirm parity and idempotency tests for transform path.
4. Migrate `load_rw_config` call sites to the shared loader (preserve output parity).
5. Add loader parity tests and run validator suite in strict mode.
6. Publish boundary docs and reconcile status.

### 4.3 Documentation implementation steps (optional)

- Update boundary contract doc before running final strict validator suite, so any documentation-driven parameter assumptions are validated alongside code.

---

## 5. Documentation deliverables

*Populated in IPW Phase 5 — after implementation planning, before housing.*

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md` | Update Scope/Deliverables/AC to reflect M1 (GAP-WFMGT-INTG-002) inclusion and add explicit acceptance checks for loader unification. | RF6–RF8 · Phase 8 wiring |
| D-U2 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` | Minor cross-reference update to clarify that the shared transform entrypoint contract is the boundary for Step 7 vs other paths. | RF3–RF4 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md` | Record the canonical choice of shared transform entrypoint contract + `rw_config_loader` consolidation. | §2.5 (ADR REQUIRED) · RF1–RF8 |
| D-C2 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md` | Boundary contract doc: when to use each entrypoint path and required contract/evidence-mode semantics. | RF3 · Phase 5 |
| D-C3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md` | Document unified loader module behavior, expected config keys, and parity guarantees. | RF6–RF8 · Phase 6–7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Missing explicit “entrypoint boundary” contract for kanban row transforms across RW vs UKW vs deterministic script. | CREATE as D-C2. |
| Missing explicit documentation for unified `rw_config_loader` module behavior across adopters/scripts. | CREATE as D-C3. |
| Do not update FR-050 workflow directory structure in this task. | NONE: out of scope (handled by T09). |
| Do not modify git tag/release mechanics; keep governance to RW. | NONE: mechanics are in RW and enforced by existing policies (BR-097/ADR-019). |

---

## 6. Documentation housing

*Populated in IPW Phase 6 — canonical paths and publication intent.*

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | `docs/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md` | PUBLISHED | Repo-level doc | evergreen | This IPP under “Input” and “References”; update task to include scope note |
| D-U2 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md` | PUBLISHED | Repo-level KB | evergreen | Add cross-reference mention from Step 7 boundary section |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-020-kanban-transform-entrypoint-contract-and-rw-config-loader-unification.md` | PUBLISHED | Repo-level ADR | evergreen | Link from this IPP §2.5 and §5 deliverables |
| D-C2 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/kanban-transform-entrypoint-boundary.md` | PUBLISHED | Repo-level KB | evergreen | Link from T10 task and boundary references from Step 7 guide |
| D-C3 | `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-config-loader-entrypoint-boundary.md` | PUBLISHED | Repo-level KB | evergreen | Link from T10 task and any unified-loader reference section |

---

## 7. Success / verification criteria

- [ ] IPP doc exists at the canonical path and contains all required sections (§1–§7).
- [ ] §2.4 includes the mandatory status transition intent and executor ownership statements.
- [ ] §2.5 includes a fully scored ADR necessity matrix with outcome `REQUIRED`.
- [ ] §5 lists an ADR deliverable row (`D-C1`) when outcome is REQUIRED.
- [ ] §5.1–§5.3 includes all documentation gaps resolved via explicit CREATE/UPDATE/NONE entries.
- [ ] §6 assigns canonical paths and publication status for every non-NONE deliverable.
- [ ] Bidirectional wiring is completed during Phase 8: host task links this IPP under both “Input” and “References”.

---

## References

- [T10-kanban-transform-consolidation](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T10-kanban-transform-consolidation.md)
- [T05-create-gap-log-and-risk-assessment (GAP-WFMGT-INTG-001/002)](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [T04 integration alignment report](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)
- [FR-092 canonical RW/UKW kanban consistency program](../kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [`apply_canonical_row_transform_pipeline` implementation](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py)

