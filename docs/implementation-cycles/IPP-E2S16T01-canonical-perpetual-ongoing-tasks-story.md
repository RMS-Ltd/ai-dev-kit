---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E2:S16:T01 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) **(E2:S16:T01)**  
**Planning for:** [FR-088 - Dedicated story for perpetual ongoing tasks](../project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)  
**Status:** Published (planning artifact; downstream waves owned by `E2:S16:T03`)

---

## 1. Requirements (ascertained baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RF1 | Establish `E2:S16` as the single canonical home for perpetual ongoing workflow tasks. | T01 AC1, FR-088-F1 |
| RF2 | Document explicit inclusion/exclusion criteria for what qualifies as a perpetual task vs a delivery task. | T01 AC2, FR-088-F2 |
| RF3 | Document a deterministic disposition policy for currently mis-housed perpetual anchors and a renumbering policy that retires the legacy `T101+` numbering convention. | T01 AC3, T01 AC4, FR-088-F3 |
| RF4 | Identify the canonical follow-on tasks within Story 016 that own execution of inventory, hardening, and operational lanes. | T01 AC5 |
| RF5 | Provide a guardrail contract (validator/policy hooks) that prevents new perpetual tasks from being filed outside Story 016 without explicit override rationale. | FR-088-F5 |
| RF6 | Keep all task / story / FR / board surfaces bidirectionally wired to T01 and this IPP. | FR-088-F4 |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RNF1 | Preserve historical traceability for legacy perpetual task IDs (`T101`, `T102`, `T103`) and their release/changelog history. | FR-088-NF1 |
| RNF2 | Transition steps must be deterministic and reversible where practical. | FR-088-NF2 |
| RNF3 | Governance language must be unambiguous and operationally testable by validators. | FR-088-NF3 |
| RNF4 | Scope is documentation/governance only; no runtime workflow behavior changes in this planning package. | FR-088 scope |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Perpetual tasks remain `IN PROGRESS` indefinitely by design; they never transition to `COMPLETE` (per dev-kit versioning policy §6.1.1).
  - Perpetual task documents must carry the canonical `Task Type: Perpetual Maintenance` marker so the existing validator pattern (`validate_version_bump.py:78`) can detect them.
  - Existing perpetual `BUILD` history is preserved across any renumbering; legacy IDs survive only as historical aliases, not active anchors.
- **In scope:** Story 016 ownership policy, perpetual-task inclusion criteria, legacy `T101+` renumbering map, ratification of follow-on tasks, guardrail contract for downstream enforcement, bidirectional wiring contract.
- **Out of scope:** Executing the inventory and disposition (owned by [`E2:S16:T02`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)), executing migrations and validator/policy implementation (owned by [`E2:S16:T03`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)), routing-away-from-`E6:S07` enforcement (owned by [FR-087](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) / `E4:S19:T03`).

### 1.4 Referenced sources

- Host task: [`T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)
- Upstream FR: [`FR-088`](../project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)
- Story container: [`Story-016-perpetual-ongoing-workflow-operations.md`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md)
- Versioning policy §6.1.1: [`dev-kit-versioning-policy.md`](../architecture/standards-and-adrs/dev-kit-versioning-policy.md)
- IPW execution guide: [`implementation-planning-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)
- Related FRs: [`FR-041`](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md) (RW maintenance), [`FR-026`](../project-management/kanban/fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md) (CMW), [`FR-087`](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) (E6:S07 default-housing drift)

---

## 2. Specification

### 2.1 Goal

Codify a single canonical home for perpetual ongoing workflow tasks under `E2:S16` with explicit inclusion criteria, a renumbering policy that retires `T101+` legacy numbering, and a guardrail contract that downstream tasks (`T02` inventory, `T03` hardening) can implement deterministically.

### 2.2 Specification mapping from ascertained requirements

- **Canonical home (RF1, RF6):** Story 016 is documented as the canonical perpetual-tasks home; all perpetual workflow tasks must point at it as the implementing-story anchor.
- **Inclusion criteria (RF2):** Perpetual qualification is defined by a deterministic checklist (see §2.3); failing the checklist routes work to the appropriate delivery story instead.
- **Renumbering policy (RF3):** Legacy `T101` (UKW), `T102` (CMW), `T103` (RW maintenance) all map to the existing `E2:S16:T03` workflow-maintenance umbrella; new perpetual lanes use standard 2-digit `Txx` task numbering (see §2.4).
- **Follow-on tasks (RF4):** The existing Story 016 task set (`T02`-`T06`) is ratified as the canonical follow-on set (see §2.5).
- **Guardrails (RF5):** Validator and policy hooks identified for `T03` to implement (see §2.6).

### 2.3 Inclusion / exclusion criteria for perpetual tasks

A task qualifies as **perpetual** if and only if **all** of the following hold:

1. The work is **operational and recurring** — it has no terminal definition of "done" and re-fires on a cadence (per workflow run, per release cycle, per board sync, etc.).
2. The cadence is **driven by a workflow** (UKW, CMW, RW maintenance, kanban hygiene, markdown hygiene) rather than by a specific feature or bug.
3. The work is **cross-cutting** — it does not naturally belong to any single delivery task.
4. The task document carries `Task Type: Perpetual Maintenance` so validators can detect it.

A task is **not** perpetual (and must be filed in a delivery story instead) when **any** of the following hold:

- It has a concrete acceptance contract that can complete (`COMPLETE`) when criteria are met.
- It is scoped to a specific feature, bug, or one-off migration.
- It is a planning artifact (IPP) or governance artifact (FR/BR/UXR/meta-task) — those land in their domain stories under their owning epic.

**Override:** A perpetual task may live outside Story 016 only with an explicit `Perpetual Override Rationale:` line in its task document and an explicit reference from Story 016 acknowledging the override; otherwise validators may reject the placement (downstream enforcement under T03).

### 2.4 Renumbering policy and legacy `T101+` mapping

| Legacy anchor | Workflow | Canonical Story 016 anchor | Disposition |
| ---- | ---- | ---- | ---- |
| `T101` | UKW (Update Kanban Workflow) | [`E2:S16:T03`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) (workflow-maintenance umbrella) | Map to `T03`; legacy ID retained as historical alias only |
| `T102` | CMW (Changelog Management Workflow) | [`E2:S16:T03`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | Map to `T03`; legacy ID retained as historical alias only |
| `T103` | RW maintenance | [`E2:S16:T03`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | Map to `T03`; legacy ID retained as historical alias only |
| `T1xx` (any future 3-digit perpetual id) | n/a | n/a | Disallowed for new tasks (see policy below) |

**Renumbering policy:**

- Perpetual tasks created from this IPP onwards use **standard 2-digit task numbering** (`Txx`) under Story 016. Examples already in place: `T03` (workflow-maintenance umbrella), `T04` (kanban hygiene), `T05` (markdown hygiene).
- The legacy `T101+` (3-digit) convention documented in [`dev-kit-versioning-policy.md` §6.1.1](../architecture/standards-and-adrs/dev-kit-versioning-policy.md) is treated as **legacy migration-only**. Existing changelog entries, version anchors, and historical task documents that reference `T101`/`T102`/`T103` remain valid for traceability; no rewrites of historical tags or release titles are required.
- Build history (`+BUILD`) attached to legacy IDs is preserved; downstream RW attribution flows to the canonical `T03` umbrella going forward.
- **Deferred decision (recorded for reversibility):** Splitting `T03` into per-workflow lanes (separate `T03` UKW, `Tnn` CMW, `Tnn` RW maintenance) remains an option if the umbrella becomes too coarse in operation. This IPP records that option without selecting it; revisiting requires a new task under `T03`'s hardening lane and does not invalidate the renumbering policy above.

### 2.5 Ratified canonical follow-on task set

The following Story 016 tasks are ratified as the canonical implementation lanes for FR-088:

| Task | Role | Owns |
| ---- | ---- | ---- |
| [`E2:S16:T01`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) (this task) | Canonical policy + IPP | Inclusion criteria, renumbering policy, follow-on ratification, guardrail contract |
| [`E2:S16:T02`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | Inventory and classification | Exhaustive perpetual-task inventory and disposition (`migrate_to_S16` / `retain_with_rationale` / `deprecate_or_redirect`) and reference map |
| [`E2:S16:T03`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | Workflow-maintenance umbrella + hardening | Migration execution, validator/policy enforcement, perpetual-task marker hardening |
| [`E2:S16:T04`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | Kanban hygiene lane | Ad-hoc kanban synchronization/hygiene attribution under the umbrella |
| [`E2:S16:T05`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | Markdown hygiene lane | Markdown-only documentation upkeep attribution under the umbrella |
| [`E2:S16:T06`](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) | FR-085 governance task (re-housed) | UKW `--rp` deep reprioritization governance and follow-on |

No new follow-on tasks are proposed by this IPP. If gaps surface during `T02` inventory, those are recorded under `T02`/`T03` rather than expanded here.

### 2.6 Guardrail contract (for `T03` hardening to implement)

This IPP does not change validator behavior. It records the **contract** that `T03` is expected to implement:

- **Placement guardrail:** A validator (or extension to an existing validator) should reject a task carrying `Task Type: Perpetual Maintenance` outside `E2:S16` unless the task document includes a `Perpetual Override Rationale:` line. Candidate hosts: a new `validate_perpetual_placement.py` under [`packages/frameworks/workflow mgt/scripts/validation/`](../../packages/frameworks/workflow%20mgt/scripts/validation/), or an extension of `validate_version_bump.py` (which already centralises perpetual detection at [`is_perpetual_task`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_version_bump.py)).
- **Numbering guardrail:** New perpetual task documents must use `Txx` (2-digit). `T1xx` (3-digit) anchors created after this IPP's publication should produce a hard validation failure unless they are explicitly historical aliases (declared via a `Historical Anchor:` line).
- **Marker guardrail:** The validator should warn when a task in Story 016 lacks the `Task Type: Perpetual Maintenance` marker, except for `T01` and `T02` (which are governance/inventory tasks, not perpetual lanes themselves).
- **RW attribution guardrail:** RW Step 2 perpetual context detection (currently UKW/CMW automatic, RW maintenance manual) continues to attribute to `E2:S16:T03` as the canonical umbrella. No automatic change to RW logic is required by T01; T03 may extend Step 2 if multi-lane attribution is later split out.
- **Workflow registry alignment:** [`workflow-registry.yaml`](../../packages/frameworks/workflow%20mgt/workflows/workflow-registry.yaml) remains the source of truth for workflow abbreviations and trigger phrases; perpetual lane attribution is not encoded there and does not need to be.

### 2.7 Constraints

- Must align with FR-042 IPW/IPP conventions (single durable IPP; `IPP-` prefix; bidirectional wiring; `Publication Status` declared).
- Must align with the dev-kit versioning policy without retroactively rewriting historical perpetual `T101+` references.
- Must not introduce churn on validator or workflow runtime behavior — that is `T03`'s lane.

### 2.8 Status transition intent (mandatory)

- **Current task status:** `IN PROGRESS`.
- **Transition trigger to `IN PROGRESS`:** Already satisfied at task creation.
- **Transition trigger to `COMPLETE`:** Acceptance evidence recorded for AC1-AC5 of T01, including: this IPP published; Story 016 / FR-088 / T01 wired bidirectionally; renumbering policy and follow-on ratification table present.
- **Atomic propagation requirement:** Task doc status and Story 016 row status must update in the same release/session.
- **Owner of write to `COMPLETE`:** RW Step 7 / standalone UKW after the host task is updated under user-triggered RW execution.
- **Perpetual children clarification:** The downstream perpetual lanes (`T03`, `T04`, `T05`) remain `IN PROGRESS` indefinitely by design and never transition to `COMPLETE`; this is a property of the lanes themselves, not a side-effect of T01 closure.

---

## 3. Test design

This is a doc-only verification set; no code is changed by this IPP.

| ID | Behavior / layer | Expected check |
| ---- | ---- | ---- |
| T1 | IPP publication | `IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md` exists in `docs/implementation-cycles/` and conforms to FR-042 IPP shape. |
| T2 | Host task wiring | T01 task doc links the IPP under both Input and References, and declares `Publication Status: NOT_APPLICABLE` with a reason consistent with the consolidated IPP model. |
| T3 | Upstream FR wiring | FR-088 lists T01 as Implementing Task and the IPP as a planning backlink. |
| T4 | Story checklist annotation | Story 016's T01 checklist row references the IPP for discoverability. |
| T5 | Inclusion-criteria coverage | §2.3 lists at least one positive checklist (qualifies as perpetual) and one negative checklist (must not be perpetual). |
| T6 | Renumbering map completeness | §2.4 includes legacy anchors `T101`, `T102`, `T103` and policy that retires `T1xx` for new tasks. |
| T7 | Follow-on ratification coverage | §2.5 lists T01-T06 with explicit roles. |
| T8 | Guardrail contract scope | §2.6 enumerates placement, numbering, marker, and RW attribution guardrails with downstream owner identified (`T03`). |
| T9 | Validator pass | `validate_ipw_publication_wiring.py --requested E2:S16:T01` returns PASS. |
| T10 | Link integrity | All markdown links in this IPP resolve to existing files on disk (no dead links in touched docs). |

### 3.1 Verification method

- Manual document inspection of the IPP, T01, FR-088, and Story 016 docs.
- Run `validate_ipw_publication_wiring.py --requested E2:S16:T01`.
- Run `validate_plan_wiring.py` and capture status (pre-existing unrelated failures stay out of scope).

---

## 4. Implementation plan

The plan is structured as three waves so each can be released or deferred atomically. Wave 1 is the planning publication that this IPW run produces; Waves 2 and 3 are owned by `T03` and are not required for T01 to close.

### 4.1 Wave 1 - IPP publication and T01 wiring (this run)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1.1 | Publish this IPP | `IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md` |
| 1.2 | Wire host task T01 (Input, References, Publication Status block) | Task doc linked to IPP and validator-clean |
| 1.3 | Wire FR-088 (IPP backlink under Implementing Task) | FR doc bidirectionally discoverable |
| 1.4 | Annotate Story 016 checklist row for T01 with IPP path | Story-level discoverability |
| 1.5 | Run `validate_ipw_publication_wiring.py --requested E2:S16:T01` | Validator PASS recorded in §5 |

### 4.2 Wave 2 - Optional discoverability uplift (implemented under `T03`)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 2.1 | Cite this IPP from `T03` / `T04` / `T05` task docs as the canonical policy | ✅ Implemented (2026-04-27): cross-link parity within Story 016 |
| 2.2 | Add `Task Type: Perpetual Maintenance` marker to perpetual lane task docs (`T03`, `T04`, `T05`) where missing | ✅ Implemented (2026-04-27): marker consistency for all three lanes |

Wave 2 was delivered as a low-risk doc-only follow-up and does not change T01 closure semantics.

### 4.3 Wave 3 - Guardrail enforcement (implemented under `T03` hardening)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 3.1 | Implement placement guardrail (validator or extension) per §2.6 | ✅ Implemented (2026-04-27) in `validate_version_bump.py` (`validate_perpetual_guardrails`) |
| 3.2 | Implement numbering guardrail (T1xx hard-fail unless declared historical alias) | ✅ Implemented (2026-04-27) in `validate_version_bump.py` |
| 3.3 | Implement marker warn-on-missing for Story 016 perpetual lanes | ✅ Implemented (2026-04-27) in `validate_version_bump.py` warning path |
| 3.4 | Update [`dev-kit-versioning-policy.md` §6.1.1](../architecture/standards-and-adrs/dev-kit-versioning-policy.md) to reflect renumbering policy and link this IPP as the source of truth | ✅ Implemented (2026-04-27): policy wording updated for Story 016 `Txx` canonical lanes and legacy `T1xx` historical-only rule |

Wave 3 landed under `T03` as the substantive guardrail enforcement layer. T01 remained valid before and after this implementation.

### 4.4 AC traceability matrix (T01 ACs and FR-088 ACs vs IPP RFs and waves)

| AC source | AC | Mapped IPP RF | Mapped IPP section | Resolved by Wave |
| ---- | ---- | ---- | ---- | ---- |
| T01 AC1 | Story 16 established as canonical perpetual home | RF1 | §2.1, §2.5 | 1 |
| T01 AC2 | Scope and boundaries documented and linked | RF2 | §2.3 | 1 |
| T01 AC3 | Complete inventory of workflow perpetual tasks documented | RF3 | §2.4 + delegated to `T02` for inventory execution | 1 (policy) + downstream |
| T01 AC4 | Renumbering plan documented and approved (`T101+` legacy -> Story 016 standard) | RF3 | §2.4 | 1 |
| T01 AC5 | Follow-on tasks identified for policy/validator enforcement | RF4, RF5 | §2.5, §2.6 | 1 (identified) + 3 (enforced) |
| FR-088-F1 | Dedicated story exists | RF1 | §2.1, §2.5 | 1 |
| FR-088-F2 | Inclusion criteria defined | RF2 | §2.3 | 1 |
| FR-088-F3 | Migration policy for existing perpetuals defined | RF3 | §2.4 | 1 |
| FR-088-F4 | Story / task / FR / boards wired | RF6 | §4.1 wiring steps | 1 |
| FR-088-F5 | Guardrails to prevent perpetuals filed outside dedicated story | RF5 | §2.6 | 1 (contract) + 3 (enforcement) |

### 4.5 Files touched by Wave 1

- `docs/implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md` (new — this file)
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`
- `docs/project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md`
- `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md`

### 4.6 Additional files touched by Wave 2 and Wave 3

- Wave 2:
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`
  - `docs/project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md`
- Wave 3:
  - `packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`
  - `packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py`
  - `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

## 5. Success / verification criteria

Runnable validators (from [`packages/frameworks/workflow mgt/scripts/validation/`](../../packages/frameworks/workflow%20mgt/scripts/validation/)):

- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E2:S16:T01` — **PASS** (2026-04-27). Output: `PASS: publication wiring OK for E2:S16:T1`. Host task carries `Publication Status: NOT_APPLICABLE` plus `Publication N/A Reason:` per the consolidated IPP model.
- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py"` — only pre-existing unrelated failure observed (`E5:S01:T75: missing Host Task link`), out of scope for this IPP and tracked separately. No new wiring regressions introduced by T01.
- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested E2:S16:T03`  
  `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested E2:S16:T04`  
  `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_complete.py" --requested E2:S16:T05` — **PASS** (2026-04-27) after Wave 2 marker/discoverability uplift.
- [x] `python3 -m pytest "packages/frameworks/workflow mgt/scripts/validation/test_validate_version_bump.py" -k "perpetual_guardrails"` — **PASS** (2026-04-27) for Wave 3 guardrail tests.
- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py" --strict --requested E2:S16:T03 --art` — **PASS** (2026-04-27) with guardrail logic active.

Deliverable checks:

- [x] `IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md` exists and follows FR-042 IPP shape.
- [x] T01 task doc links this IPP under Input and References and declares `Publication Status: NOT_APPLICABLE` with a reason.
- [x] FR-088 lists T01 as Implementing Task with an IPP backlink.
- [x] Story 016 checklist row for T01 references the IPP for discoverability.
- [x] Inclusion criteria, renumbering policy, follow-on task ratification, and guardrail contract are present in §2.3-§2.6.

---

## 6. References

- [Host task E2:S16:T01](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md)
- [FR-088 - Dedicated story for perpetual ongoing tasks](../project-management/kanban/fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)
- [Story 016 - Perpetual ongoing workflow operations](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md)
- [E2:S16:T02 - Inventory and classify workflow perpetual tasks](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md)
- [E2:S16:T03 - Workflow maintenance perpetual umbrella](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md)
- [E2:S16:T04 - Ad-hoc kanban synchronization and hygiene perpetual](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md)
- [E2:S16:T05 - Markdown documentation maintenance perpetual](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md)
- [E2:S16:T06 - UKW optional reprioritization `--rp` flag (FR-085)](../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md)
- [Dev-kit versioning policy §6.1.1 - Perpetual tasks](../architecture/standards-and-adrs/dev-kit-versioning-policy.md)
- [IPW execution guide](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)
- [FR-042 - IPW canonical workflow](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-041 - Perpetual task for RW maintenance](../project-management/kanban/fr-br/FR-041-perpetual-task-for-release-workflow-maintenance.md)
- [FR-026 - Canonical perpetual task for changelog maintenance](../project-management/kanban/fr-br/FR-026-canonical-perpetual-task-for-changelog-maintenance.md)
- [FR-087 - E6:S07 default-housing drift investigation](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
