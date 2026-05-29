---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-27T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E4:S19:T03 - Planning: Spec, Tests, Implementation Plan (IPP)

**Host Task:** [`T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) **(E4:S19:T03)**  
**Planning for:** [FR-087 - Investigate `E6:S07` default-housing drift, codification points, and closure decision](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)  
**Status:** Published (planning artifact; investigation execution and disposition recommendation owned by `E4:S19:T03`)

---

## 1. Requirements (ascertained baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RF1 | Reconstruct the forensic origin and lifecycle of `E6:S07` (initial charter, expansion inflection points, current usage shape) from primary repository evidence. | T03 AC1, FR-087-F1 |
| RF2 | Inventory all codification surfaces that route or bias task placement toward `E6:S07`, distinguishing hard-coded behavior (validators, scripts, templates, policies) from operator habit. | T03 AC2, FR-087-F2 |
| RF3 | Provide a deterministic semantic-fit triage rubric for the current `S07` task list (`in-scope` / `borderline` / `out-of-scope`) with anchor questions, evidence requirements, and a drift-quantification method. | T03 AC3, FR-087-F3 |
| RF4 | Define a disposition decision framework for `S07` (`close`, `keep-open-narrowed`, `split/re-house`) with criteria, transition mechanics, evidence requirements, and required follow-on tasks per option. | T03 AC4, FR-087-F4 |
| RF5 | Identify candidate guardrail follow-on tasks (validator hooks, `.cursorrules` placement guidance, template fields, intake-guide language) with brief rationale, without filing them in this IPP. | T03 AC5, FR-087-F5 |
| RF6 | Codify the re-housing protocol used for the `BR-069` precedent (atomic checklist preserving traceability) so it is reusable for any future mis-housed task. | T03 AC6, FR-087-F6 |
| RF7 | Keep all task / story / FR / board surfaces bidirectionally wired to T03 and this IPP. | FR-087 wiring requirement; consolidated IPP model |

### 1.2 Non-functional requirements

| ID | Requirement | Source |
| ---- | ---- | ---- |
| RNF1 | All findings must cite primary repository evidence (concrete file paths, git history pointers, validator regexes) rather than interpretation. | FR-087-NF1 |
| RNF2 | Recommendations must preserve backward traceability and avoid breaking existing links/history (no rewriting historical tags, release titles, or perpetual `T101+` references). | FR-087-NF2 |
| RNF3 | Governance outputs must be actionable and testable in workflow validation. | FR-087-NF3 |
| RNF4 | Scope is documentation/governance only; no runtime workflow behavior changes in this planning package. | FR-087 scope |

### 1.3 Invariants and boundaries

- **Invariants:**
  - No retroactive changes to historical perpetual `T101+` tags, changelog entries, or release titles. `T101+` references remain valid for traceability.
  - When re-housing a task, both the source-task supersede note and the target-task creation must land in the same logical change set, with all FBU `Implementing Task` rewires, kboard/fbuboard rewires, and story checklist updates atomic to that change set.
  - Codification evidence must cite primary repo paths (`packages/frameworks/...`, `.cursorrules`, intake skill files, template files).
  - Perpetual-task placement enforcement under `E2:S16` is delegated to [`IPP-E2S16T01`](./IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md); this IPP does not duplicate that scope.
- **In scope:** Forensic-investigation method contract for `S07`; codification surface inventory contract; semantic-fit triage rubric; disposition decision framework; re-housing protocol codification; guardrail follow-on identification (not filing).
- **Out of scope:** Performing the migration of `S07` tasks (that is `T03` execution work or downstream tasks); perpetual-task placement scope owned by `IPP-E2S16T01`; runtime validator/script/template changes (downstream guardrail follow-on tasks own those edits); the actual disposition recommendation content (Wave 2 of `T03` execution).

### 1.4 Referenced sources

- Host task: [`T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md)
- Upstream FR: [`FR-087`](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- Story container: [`Story-019-fr-br-uxr-abstract-governance-and-intake.md`](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- Subject under investigation: [`Story-007-adk-implementation-analysis-and-package-management.md`](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
- AC6 evidence (re-housing precedent): [`BR-069`](../project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) -> [`E2:S15:T04`](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- Adjacent governance contract (perpetual-task placement, deliberately not duplicated here): [`IPP-E2S16T01`](./IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- Adjacent governance contract (FBU meta governance shape reference): [`IPP-E4S19T06`](./IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)
- IPW execution guide: [`implementation-planning-workflow-agent-execution.md`](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)

---

## 2. Specification

### 2.1 Goal

Turn the six T03 acceptance criteria (AC6 already satisfied historically by the `BR-069` re-housing) into a deterministic forensic-investigation + governance contract that the investigator can execute against, producing an evidence-backed disposition recommendation for `S07` and a reusable re-housing protocol, without prejudging which disposition is correct.

### 2.2 Specification mapping from ascertained requirements

- **Forensic origin (RF1):** A method contract for what counts as primary evidence and how the investigator must cite it (see §2.3).
- **Codification inventory (RF2):** A category-level inventory contract with concrete `rg`/`Glob` patterns and a sufficiency rule (see §2.4).
- **Semantic-fit triage (RF3):** A triage rubric with anchor questions, evidence requirements, and quantification (see §2.5).
- **Disposition framework (RF4):** A framework that defines criteria, transition mechanics, and required follow-on tasks for each option (`close`, `narrow`, `split/re-house`); does not select an option (see §2.6).
- **Guardrail follow-on identification (RF5):** A candidate set of guardrail follow-on tasks with brief rationale (see §2.8); filing is downstream.
- **Re-housing protocol (RF6):** A codified atomic checklist derived from the `BR-069` precedent (see §2.7).
- **Bidirectional wiring (RF7):** Wave 1 of the implementation plan (§4.1) covers IPP / T03 / FR-087 / Story 019 / kboard / fbuboard wiring under the consolidated `Publication Status: NOT_APPLICABLE` model.

### 2.3 Forensic-investigation method contract

Each forensic finding produced under T03 execution must satisfy the following contract:

1. **Primary evidence requirement.** A finding cites at least one primary repository artifact (file path + line range, or git commit ref + file). Synthesized analysis is allowed as commentary on top of primary evidence, never as a substitute for it.
2. **Charter origin.** The investigation must establish the original `S07` charter from at least two independent sources (e.g. `Story-007-adk-implementation-analysis-and-package-management.md` overview/goal sections + earliest related FR/BR/UXR documents + earliest related changelog archive entry).
3. **Expansion inflection points.** The investigation must identify the discrete points at which `S07` accreted scope outside its charter, citing the FR/BR/UXR or task that introduced the new scope, the date, and the placement rationale (or the absence thereof).
4. **Current usage shape.** The investigation must enumerate the current `S07` task list (`docs/project-management/kanban/epics/Epic-6/Story-007-.../T*.md`) at the time of the report and describe the shape (count, task type mix, status mix, FBU linkage mix). The current count is **23 task documents** as of 2026-04-27 (recorded for baseline comparison; expected to drift as re-housings land).
5. **Citation form.** Findings cite `path/to/file.md:line-range` style references, plus a one-line quotation or paraphrase. No bare links without context.
6. **Quantification.** Drift is quantified (see §2.5 for the metric); narrative-only claims are insufficient.

### 2.4 Codification surface inventory contract

The investigator must inspect each of the following categories. For each category, at least one concrete instance must be cited as evidence, and the inspection method (the exact `rg`/`Glob` pattern) must be recorded so the inventory is reproducible. Sufficiency rule: one citation per category satisfies coverage; exhaustiveness within a category is not required and is explicitly out of scope for the IPP.

| Category | Sample instances | Suggested inspection patterns |
| ---- | ---- | ---- |
| Workflow validators | [`packages/frameworks/workflow mgt/scripts/validation/validate_version_bump.py`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_version_bump.py), [`validate_ipw_publication_wiring.py`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_ipw_publication_wiring.py), [`validate_plan_wiring.py`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_plan_wiring.py) | `rg -n "S07\|S007\|Story.{0,10}007\|E6:S07" "packages/frameworks/workflow mgt/scripts/validation/"` |
| Intake/IPW workflow YAML and runners | [`packages/frameworks/workflow mgt/workflows/intake-workflow/`](../../packages/frameworks/workflow%20mgt/workflows/intake-workflow/), [`packages/frameworks/workflow mgt/workflows/ipw-workflow/`](../../packages/frameworks/workflow%20mgt/workflows/ipw-workflow/) | `rg -n "S07\|S007\|Story.{0,10}007\|E6:S07\|default.{0,30}housing" "packages/frameworks/workflow mgt/workflows/"` |
| Cursor rules | [`/.cursorrules`](../../.cursorrules) | `rg -n "S07\|S006\|S007\|E6:S07\|catch.?all\|default.{0,30}housing" .cursorrules` |
| Intake skill | [`/.cursor/skills/intake-process/SKILL.md`](../../.cursor/skills/intake-process/SKILL.md) | `rg -n "Epic\|story\|placement\|default" .cursor/skills/intake-process/SKILL.md` |
| Kanban templates | [`packages/frameworks/kanban/templates/`](../../packages/frameworks/kanban/templates/) | `rg -n "S07\|S006\|S007\|default" "packages/frameworks/kanban/templates/" --type md` |
| Kanban governance policy | [`packages/frameworks/kanban/policies/kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) | `rg -n "S07\|S006\|S007\|default.{0,30}housing\|catch.?all\|placement" "packages/frameworks/kanban/policies/kanban-governance-policy.md"` |
| Intake guide | [`packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`](../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md), [`packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md`](../../packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md) | `rg -n "Epic\|Story\|placement\|default" "packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md" "packages/frameworks/kanban/FR_BR_INTAKE_AGENT_GUIDE.md"` |
| Story 007 charter document | [`Story-007-adk-implementation-analysis-and-package-management.md`](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md) | Read header (Overview, Problem Statement, Goal, Success Criteria sections) plus task-checklist diff from earliest commit. |
| Agent prompts and prior IPPs | [`docs/implementation-cycles/`](./) | `rg -n "S07\|S006\|S007\|E6:S07\|default.{0,30}housing" "docs/implementation-cycles/"` |

For each cited surface, the investigator must classify the routing as one of:

- **Hard-coded routing:** The surface programmatically (or via deterministic policy text) directs new placement to `E6:S07`.
- **Permissive default:** The surface allows `E6:S07` placement without active steering elsewhere (e.g. silence in the intake guide on default housing).
- **Operator habit / no codification:** The surface contains no relevant routing language; `E6:S07` placement is purely social/process behavior.

Findings under T03 execution must record the classification for each cited surface; this distinction drives which guardrail follow-on tasks (§2.8) are required.

### 2.5 Semantic-fit triage rubric

Each task currently filed under `E6:S07` is triaged as one of three buckets using the anchor questions below. The rubric is designed so the same investigator (or a reviewer) reaches the same classification given the same evidence.

| Bucket | Anchor question | Evidence requirement |
| ---- | ---- | ---- |
| `in-scope` | Does the task directly serve the original `S07` charter (ADK implementation analysis, package management investigation, ADK installation hardening synthesis) per the charter sources cited in §2.3? | Quote from task description + match to charter goal/success-criteria. |
| `borderline` | Does the task touch ADK adoption surfaces (install, package, distribution, framework hardening derived from analysis findings) but extend the charter rather than execute it? | Quote from task description + cited departure from charter scope. |
| `out-of-scope` | Is the task primarily about something else (workflow operations, governance/intake, board/FBU hygiene, validator runtime, perpetual operations, doc-naming policy) that has a more semantic home elsewhere? | Quote from task description + identification of the more semantic story (with epic/story candidate cited). |

**Drift quantification metric:** `drift_ratio = out_of_scope_count / total_active_S07_tasks` where active means non-COMPLETE and non-SUPERSEDED. The investigator records the metric in the report. A `drift_ratio >= 0.5` is a strong signal supporting `split/re-house`; `drift_ratio < 0.2` is a strong signal supporting `keep-open-narrowed`; intermediate values require the disposition framework (§2.6) to weigh additional criteria. This is a heuristic input to the disposition framework, not a replacement for it.

**Borderline task handling:** `borderline` tasks are not counted toward `drift_ratio`, but each one must carry a rationale recorded in the investigation report explaining why it is borderline rather than `in-scope` or `out-of-scope`.

### 2.6 Disposition decision framework

This IPP does not select a disposition. It defines the framework that the T03 investigator must apply to recommend one of `close`, `keep-open-narrowed`, or `split/re-house`. The recommendation is produced as a deliverable under T03 execution, not in this IPP.

| Option | Criteria for selection | Transition mechanics | Required follow-on tasks |
| ---- | ---- | ---- | ---- |
| `close` | All `in-scope` work has terminal acceptance criteria that are met or are owned elsewhere; charter is fulfilled; `drift_ratio` is irrelevant because no active in-scope work remains. | Mark Story 007 status `COMPLETE` (or `RETIRED`), update Epic 6 overview, freeze new task creation under `S07`, redirect any incoming intake to a new home. | Filing of redirection guardrails (validator hard-fail on new `E6:S07:T*` creation unless `Historical Anchor:` declared); Epic 6 charter amendment task. |
| `keep-open-narrowed` | `drift_ratio < 0.2`; charter still has open in-scope work; codification inventory shows the issue is mostly operator habit (§2.4 classification) rather than hard-coded routing. | Re-state the `S07` charter explicitly in the story document; add `Out of Scope` enumeration; route `out-of-scope` tasks individually using §2.7; do not change story status. | Filing of guardrail follow-on tasks per §2.8 (validator placement check, `.cursorrules` placement guidance, template `Default Housing Override Rationale:` field, intake-guide language). |
| `split/re-house` | `drift_ratio >= 0.5`, or codification inventory shows hard-coded routing toward `S07`, or the `out-of-scope` cluster has a coherent shape that justifies a new story. | Identify target stories (existing or new); apply §2.7 re-housing protocol per task; freeze new `S07` task creation during the migration window; close `S07` once all `out-of-scope` tasks are migrated and `in-scope` tasks are complete or owned elsewhere. | All re-housing tasks (one per migrated task or one per target story); guardrail follow-on tasks per §2.8; final `close` follow-on once migration completes. |

**Risk profile per option:**

- `close` risks losing in-flight context if `in-scope` work is not fully accounted for; mitigated by the criteria gate above.
- `keep-open-narrowed` risks recurrence of drift if guardrails are not implemented; mitigated by §2.8 follow-on identification being a precondition to selecting this option.
- `split/re-house` is the most operationally expensive option; mitigated by the §2.7 re-housing protocol being deterministic and atomic.

### 2.7 Re-housing protocol (codified from the `BR-069` precedent)

The protocol below is the atomic checklist the investigator (or any future operator) must follow when re-housing a single task from a source story to a target story. It is derived from the precedent already executed for `BR-069` (`E6:S07:T117` -> `E2:S15:T04`) and reinforced by the more recent `FR-085` re-housing (`E6:S07:T116` -> `E2:S16:T06`).

| Step | Action | Validation |
| ---- | ---- | ---- |
| 1 | Identify target story per disposition framework (§2.6) and confirm it has capacity for the task. | Target story document exists and is not `COMPLETE` / `RETIRED`. |
| 2 | Create the new task document under the target story using the canonical task template; copy substantive content from the source task; update task ID; preserve historical anchor reference. | New `T{n}-...md` file exists; `Historical Anchor:` line cites the source `E{e}:S{s}:T{t}` ID. |
| 3 | Mark the source task `SUPERSEDED`; add `Last updated:` note; add `Superseded by:` link to the target task; preserve content for historical traceability. | Source task status reads `SUPERSEDED`; superseded-by link resolves. |
| 4 | Rewire the upstream FR/BR/UXR `Implementing Task:` line to the target task path; record the historical implementing task as plain text or an explicit `Historical implementing task:` line. | FBU file shows new task path under `Implementing Task:`. |
| 5 | Update [`kboard.md`](../project-management/kanban/kboard.md) row(s) to reference the target task path, IPP path (if any), and updated `Last modified` timestamp. | kboard row resolves to the new task path. |
| 6 | Update [`fbuboard.md`](../project-management/kanban/fbuboard.md) FBU row to reference the target task and updated `Last modified` timestamp. | fbuboard row resolves to the new task path. |
| 7 | Update the source story checklist row (annotate as `SUPERSEDED` with successor link). | Source story checklist line carries a successor pointer. |
| 8 | Update the target story checklist row (add new entry per template). | Target story checklist line exists. |
| 9 | Run [`validate_ipw_publication_wiring.py`](../../packages/frameworks/workflow%20mgt/scripts/validation/validate_ipw_publication_wiring.py) against the new task ID. If the task uses the consolidated IPP model, declare `Publication Status: NOT_APPLICABLE` with reason. | Validator returns PASS for the new task. |
| 10 | Optionally delete the source task document only after RW publication of the re-housing has landed and the source story / FBU / boards no longer link to the source task path. | No dangling links remain (verified by `rg`). |

**Validator-driven publication declaration.** Steps 4-9 must land in the same logical change set so that no intermediate validator run sees a half-rewired graph. The consolidated IPP model (single `Publication Status: NOT_APPLICABLE` line + bolded human-readable variant) is the established pattern for tasks that do not generate three separate ICW artifacts; this pattern was used successfully for `E4:S19:T06`, `E2:S16:T06`, and `E2:S16:T01`, and should be reused for any future re-housing target.

### 2.8 Guardrail follow-on identification (candidate set)

The IPP identifies the following candidate guardrail tasks that the disposition recommendation (under T03 execution) may file. None are filed by this IPP; filing happens downstream once the disposition is selected.

| Candidate | Surface | Brief rationale | Linked to disposition |
| ---- | ---- | ---- | ---- |
| Validator extension: placement check | [`packages/frameworks/workflow mgt/scripts/validation/`](../../packages/frameworks/workflow%20mgt/scripts/validation/) | Reject new task creation under a frozen story (e.g. `E6:S07`) unless task carries an explicit override rationale; reject placement that contradicts the story charter when codification can encode the charter. | `keep-open-narrowed`, `split/re-house`, `close` |
| `.cursorrules` placement guidance | [`/.cursorrules`](../../.cursorrules) | Add explicit "do not default new tasks under `E6:S07`" guidance with a positive routing table (delivery story examples per problem domain). | `keep-open-narrowed`, `split/re-house` |
| Intake skill update | [`/.cursor/skills/intake-process/SKILL.md`](../../.cursor/skills/intake-process/SKILL.md) | Strengthen Step 2 placement language ("delivery story not repository story") with explicit anti-`E6:S07`-default note and a worked example. | `keep-open-narrowed`, `split/re-house` |
| Intake guide update | [`packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md`](../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md) | Mirror intake skill change in the human-readable guide; add a worked example showing correct placement when no obvious story exists. | `keep-open-narrowed`, `split/re-house` |
| Task template field | [`packages/frameworks/kanban/templates/`](../../packages/frameworks/kanban/templates/) | Add an optional `Default Housing Override Rationale:` field on task templates that the placement validator can detect when routing diverges from the canonical recommendation. | `keep-open-narrowed`, `split/re-house` |
| Story-level routing matrix | [`Story-007-adk-implementation-analysis-and-package-management.md`](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md) (or successor doc) | Add an explicit `In Scope` / `Out of Scope` enumeration to the story document so future intake operators have a deterministic check. | `keep-open-narrowed`, `split/re-house` |
| Historical-anchor declaration policy | [`packages/frameworks/kanban/policies/kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) | Codify the `Historical Anchor:` line convention used in re-housing (steps 2-3 of §2.7) so legacy task IDs survive as aliases without polluting active work. | All options |
| Story-charter freeze policy | [`packages/frameworks/kanban/policies/kanban-governance-policy.md`](../../packages/frameworks/kanban/policies/kanban-governance-policy.md) | Define the `RETIRED` story status and rules for redirecting new intake when a story is retired. | `close` |

The investigator must record, per recommended candidate, the surface to edit, the disposition that motivates it, and a one-line rationale.

### 2.9 Status transition intent (mandatory)

- **Current task status:** `IN PROGRESS`.
- **Transition trigger to `IN PROGRESS`:** Already satisfied at task creation (`AC6` historically `[x]`).
- **Transition trigger to `COMPLETE`:** All of the following land:
  - Forensic origin report (RF1) with primary evidence per §2.3.
  - Codification inventory (RF2) with at least one citation per category in §2.4 and routing classification per surface.
  - Triage rubric (RF3) applied with `drift_ratio` recorded.
  - Disposition recommendation (RF4) chosen with criteria evidence and required follow-on tasks identified per §2.6.
  - Guardrail follow-on candidate set (RF5) finalized per §2.8 (filing happens downstream).
  - Re-housing protocol (RF6) cited and applied at least once (already satisfied by `BR-069`; re-citation in the report suffices).
- **Atomic propagation requirement:** When T03 closes, the host task status, Story 019 row status, and any kboard/fbuboard rows must update in the same release/session.
- **Owner of write to `COMPLETE`:** RW Step 7 / standalone UKW after the host task is updated under user-triggered RW execution.
- **Decoupling clarification:** This IPP does not transition T03 to `COMPLETE` and does not require Wave 2 (forensic execution) or Wave 3 (disposition recommendation) to land for the IPP itself to be considered published.

### 2.10 Constraints

- Must align with FR-042 IPW/IPP conventions (single durable IPP; `IPP-` prefix; bidirectional wiring; `Publication Status` declared on host task).
- Must align with the dev-kit versioning policy without retroactively rewriting historical perpetual `T101+` references.
- Must not duplicate `IPP-E2S16T01` (perpetual-task placement scope); cite and defer.
- Must not introduce churn on validator or workflow runtime behavior - that is the lane of whichever guardrail follow-on tasks get filed downstream.
- Must not file the disposition recommendation; that lands under T03 execution as a deliverable.

---

## 3. Test design

This is a doc-only verification set; no runtime code is changed by this IPP.

| ID | Behavior / layer | Expected check |
| ---- | ---- | ---- |
| T1 | IPP publication | `IPP-E4S19T03-e6s07-default-housing-drift-investigation.md` exists in `docs/implementation-cycles/` and conforms to FR-042 IPP shape. |
| T2 | Host task wiring | T03 task doc links the IPP under both Input and References, and declares `Publication Status: NOT_APPLICABLE` with a reason consistent with the consolidated IPP model. |
| T3 | Upstream FR wiring | FR-087 lists T03 as Implementing Task and the IPP as a planning backlink. |
| T4 | Story checklist annotation | Story 019's T03 checklist row references the IPP path for discoverability. |
| T5 | Board wiring | kboard and fbuboard rows for `E4:S19:T03` / `FR-087` reference the IPP path (replacing the `--No IPP--` token). |
| T6 | Forensic method coverage | §2.3 specifies primary-evidence, charter-origin, expansion-inflection, current-usage-shape, citation-form, and quantification requirements. |
| T7 | Codification inventory coverage | §2.4 lists at least eight categories with sample instances and concrete inspection patterns; classification taxonomy (hard-coded / permissive / operator-habit) defined. |
| T8 | Triage rubric coverage | §2.5 defines three buckets, anchor questions, evidence requirements, and a quantitative drift metric. |
| T9 | Disposition framework completeness | §2.6 enumerates `close`, `keep-open-narrowed`, `split/re-house` with criteria, transition mechanics, follow-on tasks, and risk profile per option. |
| T10 | Re-housing protocol completeness | §2.7 specifies a 10-step atomic checklist with validation per step and a validator-driven publication declaration. |
| T11 | Guardrail candidate identification | §2.8 lists candidate guardrail follow-on tasks with surface, rationale, and linked disposition. |
| T12 | AC traceability | §4.4 maps T03 AC1-AC6 and FR-087 F1-F6/NF1-NF3 onto IPP RFs and waves. |
| T13 | Validator pass | `validate_ipw_publication_wiring.py --requested E4:S19:T03` returns PASS. |
| T14 | Link integrity | All markdown links in this IPP and in touched docs resolve to existing files on disk (no dead links). |

### 3.1 Verification method

- Manual document inspection of the IPP, T03, FR-087, Story 019, kboard, and fbuboard.
- Run `validate_ipw_publication_wiring.py --requested E4:S19:T03`.
- Run `validate_plan_wiring.py` and capture status (pre-existing unrelated failures stay out of scope).

---

## 4. Implementation plan

The plan is structured as four waves so each can be released or deferred atomically. Wave 1 is the planning publication that this IPW run produces. Waves 2-4 are owned by `T03` (or downstream guardrail tasks) and are not required for this IPP to be considered published.

### 4.1 Wave 1 - IPP publication and T03 wiring (this run)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 1.1 | Publish this IPP | `IPP-E4S19T03-e6s07-default-housing-drift-investigation.md` |
| 1.2 | Wire host task T03 (Input, References, Publication Status block) | Task doc linked to IPP and validator-clean |
| 1.3 | Wire FR-087 (IPP backlink under Implementing Task) | FR doc bidirectionally discoverable |
| 1.4 | Annotate Story 019 checklist row for T03 with IPP path | Story-level discoverability |
| 1.5 | Replace `--No IPP--` token on E4:S19:T03 / FR-087 rows in kboard.md and fbuboard.md with link to this IPP | Boards reflect planning artifact |
| 1.6 | Run `validate_ipw_publication_wiring.py --requested E4:S19:T03` | Validator PASS recorded in §5 |

### 4.2 Wave 2 - Forensic investigation execution (deferred, owned by T03)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 2.1 | Reconstruct `S07` charter origin per §2.3 | Investigation report section: charter origin (cites at least two independent primary sources). |
| 2.2 | Identify expansion inflection points per §2.3 | Investigation report section: expansion inflection points (cited per inflection). |
| 2.3 | Enumerate current `S07` task list and shape (count, type mix, status mix, FBU mix) | Investigation report section: current usage shape table. |
| 2.4 | Walk codification inventory per §2.4; classify each surface (hard-coded / permissive / operator-habit) | Investigation report section: codification inventory with classifications. |
| 2.5 | Apply triage rubric per §2.5 to current `S07` task list and record `drift_ratio` | Investigation report section: triage table with `drift_ratio`. |

Wave 2 is the substantive forensic content of T03 and is owned entirely by the T03 execution session.

### 4.3 Wave 3 - Disposition recommendation and guardrail follow-on filing (deferred, owned by T03)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 3.1 | Apply §2.6 disposition framework to Wave 2 evidence | Investigation report section: disposition recommendation with criteria evidence. |
| 3.2 | For the recommended option, finalize the guardrail follow-on candidate set per §2.8 | Investigation report section: guardrail follow-on task list (surface, rationale, disposition link). |
| 3.3 | File the recommended guardrail follow-on tasks under their owning stories using the atomic intake protocol | New task documents wired to existing FRs/BRs/UXRs (or new ones if needed). |
| 3.4 | Update T03 status transition per §2.9 once Waves 2-3 deliverables land | T03 status `IN PROGRESS -> COMPLETE` under RW. |

### 4.4 Wave 4 - Re-housing or freezing of `S07` (deferred, downstream)

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| 4.1 | If disposition is `split/re-house`, apply §2.7 re-housing protocol to each `out-of-scope` task identified in Wave 2.5 | One re-housed task per migration; each landing as its own atomic change set. |
| 4.2 | If disposition is `keep-open-narrowed`, restate `S07` charter and add explicit `In Scope` / `Out of Scope` enumerations to the story document | Story 007 charter amendment commit. |
| 4.3 | If disposition is `close`, mark Story 007 `RETIRED` (or equivalent) and freeze new task creation; update Epic 6 overview | Story 007 status flipped; Epic 6 charter amendment commit. |

Wave 4 is the operational consequence of the disposition decision and lives entirely outside this IPP's planning lane. It is recorded here to make the full lifecycle of `S07` resolution visible.

### 4.5 AC traceability matrix (T03 ACs and FR-087 ACs vs IPP RFs and waves)

| AC source | AC | Mapped IPP RF | Mapped IPP section | Resolved by Wave |
| ---- | ---- | ---- | ---- | ---- |
| T03 AC1 | Forensic timeline of `S07` intent and expansion documented | RF1 | §2.3 (method) | 1 (contract) + 2 (execution) |
| T03 AC2 | Codification inventory distinguishes hard-coded routing from operator habit | RF2 | §2.4 (contract + classification taxonomy) | 1 (contract) + 2 (execution) |
| T03 AC3 | All current `S07` tasks triaged by semantic fit with rationale | RF3 | §2.5 (rubric) | 1 (contract) + 2 (execution) |
| T03 AC4 | Recommended disposition includes migration and compatibility plan | RF4 | §2.6 (framework) | 1 (framework) + 3 (recommendation) |
| T03 AC5 | Follow-on guardrail changes specified as concrete implementation tasks | RF5 | §2.8 (candidate set) | 1 (candidates) + 3 (filing) |
| T03 AC6 | Re-housing protocol proven on a real case (`BR-069 -> E2:S15:T04`) | RF6 | §2.7 (codification of precedent) | already satisfied historically |
| FR-087-F1 | Forensic origin analysis of `E6:S07` | RF1 | §2.3 | 1 + 2 |
| FR-087-F2 | Codification points identified | RF2 | §2.4 | 1 + 2 |
| FR-087-F3 | Existing `S07` tasks classified by semantic fit; drift quantified | RF3 | §2.5 | 1 + 2 |
| FR-087-F4 | Closure decision options with impact/risk analysis | RF4 | §2.6 | 1 + 3 |
| FR-087-F5 | Enforceable placement guardrails | RF5 | §2.8 | 1 (contract) + 3 (filing) + 4 (operational change) |
| FR-087-F6 | Explicit re-housing protocol with traceability preservation | RF6 | §2.7 | 1 (codification) + already satisfied historically |
| FR-087-NF1 | Findings cite primary repository evidence | RNF1 | §2.3 (citation form) | 1 (contract) + 2 (execution) |
| FR-087-NF2 | Recommendations preserve backward traceability | RNF2 | §1.3 (invariants), §2.7 (atomic re-housing) | 1 (constraints) + 4 (execution) |
| FR-087-NF3 | Governance outputs actionable and testable | RNF3 | §2.4 (classification), §2.5 (metric), §2.6 (criteria), §2.8 (candidates) | 1 (contracts) + 3 (filing) |

### 4.6 Files touched by Wave 1

- `docs/implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md` (new - this file)
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md`
- `docs/project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md`
- `docs/project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md`
- `docs/project-management/kanban/kboard.md`
- `docs/project-management/kanban/fbuboard.md`

---

## 5. Success / verification criteria

Runnable validators (from [`packages/frameworks/workflow mgt/scripts/validation/`](../../packages/frameworks/workflow%20mgt/scripts/validation/)):

- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_ipw_publication_wiring.py" --requested E4:S19:T03` — **PASS** (2026-04-27). Output: `PASS: publication wiring OK for E4:S19:T3`. Host task carries `Publication Status: NOT_APPLICABLE` plus `Publication N/A Reason:` per the consolidated IPP model.
- [x] `python3 "packages/frameworks/workflow mgt/scripts/validation/validate_plan_wiring.py"` — only the pre-existing unrelated `E5:S01:T75: missing Host Task link` failure observed; tracked separately and out of scope for this IPP. No new wiring regressions introduced by E4:S19:T03.

Deliverable checks:

- [x] `IPP-E4S19T03-e6s07-default-housing-drift-investigation.md` exists and follows FR-042 IPP shape.
- [x] T03 task doc links this IPP under Input and References and declares `Publication Status: NOT_APPLICABLE` with a reason.
- [x] FR-087 lists T03 as Implementing Task with an IPP backlink.
- [x] Story 019 checklist row for T03 references the IPP path.
- [x] kboard and fbuboard rows for `E4:S19:T03` / `FR-087` reference the IPP path (legacy `--No IPP--` token replaced).
- [x] Forensic method, codification inventory contract, triage rubric, disposition framework, re-housing protocol, and guardrail candidate set are present in §2.3-§2.8.

---

## 6. References

- [Host task E4:S19:T03](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md)
- [FR-087 - Investigate `E6:S07` default-housing drift, codification points, and closure decision](../project-management/kanban/fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md)
- [Story 019 - FR/BR/UXR abstract governance and intake](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [Story 007 - ADK implementation analysis and package management (subject under investigation)](../project-management/kanban/epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
- [BR-069 - Last-modified timestamp overwrite (re-housing precedent)](../project-management/kanban/fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [E2:S15:T04 - BR-069 investigation (re-housing target)](../project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
- [IPP-E2S16T01 - Canonical perpetual ongoing tasks story (delegated perpetual scope)](./IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)
- [IPP-E4S19T06 - FBU meta normalization and intake governance (governance shape reference)](./IPP-E4S19T06-fbu-meta-normalization-and-intake-governance.md)
- [Kanban governance policy](../../packages/frameworks/kanban/policies/kanban-governance-policy.md)
- [FR/BR intake guide](../../packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md)
- [Intake skill](../../.cursor/skills/intake-process/SKILL.md)
- [IPW execution guide](../../packages/frameworks/workflow%20mgt/KB/Documentation/Developer_Docs/vwmp/implementation-planning-workflow-agent-execution.md)
- [FR-042 - IPW canonical workflow](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
