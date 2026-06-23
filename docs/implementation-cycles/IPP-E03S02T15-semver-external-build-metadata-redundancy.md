---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-17T15:48:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T15 — Planning: SemVer external `+BUILD` redundancy (task_touch) (IPW)

**Host Task:** [`T15-semver-external-build-metadata-redundancy-uxr031.md`](../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md) **(E03:S02:T15)**  
**Planning for:** [UXR-031](../kanban/fbu/UXR-031-semver-plusbuild-redundancy-in-task-touch.md)  
**Status:** Complete

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Decide outward UX policy for SemVer strings in `task_touch` mode: either show core only (`MAJOR.MINOR.PATCH`) or keep `+BUILD` visible but explicitly as trace-only metadata. | Task `E03:S02:T15` Scope; UXR-031 objective |
| RF2 | Document what external consumers should use as the *ordering/precedence* signal for “which release is newer”. | Task `E03:S02:T15` AC; UXR-031 findings |
| RF3 | Produce a concrete list of follow-on delivery surfaces to update (README, versioning guidance, RW/changelog conventions, tag/release display), even if implementation is deferred. | Task `E03:S02:T15` Deliverable + AC |
| RF4 | Preserve internal forensic traceability (`RC.EPIC.STORY.TASK+BUILD`) regardless of outward display policy. | Task `E03:S02:T15` Scope; versioning policy §1.1 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | Do not break injectivity/uniqueness guarantees of `task_touch` mapping (SemVer core ownership + replay safety at tag boundary). | `semver_converter.py` finalize injectivity; FR-045; BR-061 |
| RNF2 | Avoid creating or force-moving existing release tags; any policy change must be forward-compatible with historic releases and current tagging behavior. | BR-097 referenced by IPW rules; `semver_converter.py` tag behavior |
| RNF3 | Maintain clarity across dual-version surfaces (README/GitHub releases show SemVer first; internal version remains the kanban/workflow anchor). | Versioning policy §1.1 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Internal version remains `RC.EPIC.STORY.TASK+BUILD` and remains the canonical kanban coordinate.
  - In `task_touch` mode, SemVer **core** (`MAJOR.MINOR.PATCH`) is the primary monotonic stream; `+BUILD` (if shown) is build metadata and must not be treated as the ordering signal.
  - RW tag boundary behavior remains consistent with `semver_converter.get_rw_tag_info(...)` (primary tag is core-only; internal tag preserves internal version).
- **In scope:**
  - Policy decision for outward SemVer display semantics.
  - Documentation + workflow surfaces required to reflect and reinforce that policy.
  - Optional follow-on implementation plan if surfaces need code/template changes (e.g., README updater, changelog/release template text).
- **Out of scope:**
  - Changing the allocator / release-state backend or the `task_touch` mapping algorithm itself (covered by E03:S02:T12 / FR-045 / BR-061).
  - Retagging or rewriting history for already-published releases.

---

## 2. Specification

### 2.1 Goal

Establish an explicit, non-ambiguous outward-facing SemVer UX policy for `task_touch` mode so external consumers and maintainers reliably interpret “which release is newer” using SemVer **core**, while internal `RC.EPIC.STORY.TASK+BUILD` remains the forensic coordinate and any `+BUILD` (if present) is treated as trace-only metadata.

### 2.2 Specification mapping from ascertained requirements

- RF1–RF2 are satisfied by writing a policy decision memo (task deliverable) that:
  - explicitly chooses **Option A** (core-only display) or **Option B** (keep `+BUILD` visible, explicitly trace-only),
  - explicitly states the ordering signal for external consumers: **SemVer core**.
- RF3 is satisfied by an implementation inventory listing specific affected surfaces and concrete edits/tests.
- RF4 + RNF1–RNF3 are satisfied by explicitly preserving internal tagging and traceability links in documentation and by avoiding any plan that suggests force-moving tags or changing mapping invariants.

### 2.3 Constraints

- Must remain compatible with `rw-config.yaml` `semver_mapping_strategy: task_touch`.
- Must remain compatible with `semver_converter.get_rw_tag_info(...)` semantics:
  - primary tag uses **SemVer core** (`vMAJOR.MINOR.PATCH`),
  - internal tag uses `v{internal_version}` for traceability,
  - `semver_full` retains `+BUILD` internally for trace usage.
- Must not introduce any requirement for `--doc-policy-zero` in post-ship / follow-on verification waves (BR-097 rule).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** INTAKE
- **Transition trigger to IN PROGRESS:** First delivery change-set begins (implementation via `IDW E03:S02:T15`).
- **Transition trigger to COMPLETE:** Policy decision memo exists, all required docs are updated, and verification evidence is recorded (see §7).
- **Atomic propagation requirement:** Task doc status and any kanban board row status must update in the same change set/session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Task explicitly presents Option A vs Option B (different outward UX semantics). |
| T2 | Reversibility | N | Display-policy change is reversible via doc/code updates without migrations. |
| T3 | Blast radius | Y | Affects multiple surfaces (README, RW messaging, docs; potentially adopters consuming guidance). |
| T4 | Precedent | Y | Sets “how we communicate SemVer externally” going forward in `task_touch` mode. |
| T5 | Constraint trade-off | Y | Trade-off between trace visibility vs user comprehension (ordering semantics clarity). |
| T6 | Governance contract | Y | Impacts versioning policy + release workflow guidance surfaces. |
| T7 | Supersedes | Possible | May supersede implicit guidance that README displays SemVer including `+BUILD` without clarifying ordering. |

**Outcome:** `REQUIRED` (create or update ADR under `docs/architecture/standards-and-adrs/`)

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| T1 | Documentation coherence | README + versioning policy explicitly state the ordering signal (SemVer core) and clarify `+BUILD` meaning for `task_touch`. |
| T2 | Workflow coherence | RW documentation (or README release section if used) matches `semver_converter.get_rw_tag_info(...)` semantics: primary tag core-only; internal tag for traceability. |
| T3 | Regression safety (if code changes) | If README/changelog emission code is changed, add/adjust tests to ensure the outward display follows the chosen policy and is stable across repeated converter reads (no finalize side effects outside tag boundary). |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E03:S02:T15` status `TODO → IN PROGRESS`** in task doc. *(If status is still `INTAKE`, first transition `INTAKE → TODO`, then `TODO → IN PROGRESS` in the same change set.)* Update `Last updated` date. | Task doc status updated |
| 2 | Create policy decision memo under the Story (or extend the Task doc) stating **Option A vs Option B** and the ordering signal statement. | Policy memo exists and is linked from task |
| 3 | Update `docs/governance/standards/dev-kit-versioning-policy.md` to clarify outward SemVer semantics in `task_touch` mode, explicitly documenting `+BUILD` as trace-only (if retained) and that ordering is SemVer core. | Updated policy section(s) |
| 4 | Update `README.md` outward version display guidance to match the chosen policy (core-only display or explicitly trace-only `+BUILD`). | README reflects policy |
| 5 | Update workflow-facing guidance as needed (release workflow docs / semver converter documentation / relevant KB pages) so RW output, tags, and README guidance are consistent. | Docs updated; no contradictory guidance |
| 6 | Create/update ADR capturing the architectural decision about external SemVer display (including rationale, alternatives, consequences, and the interaction with `task_touch` + tagging). | ADR file created/updated |
| 7 | Add/adjust any tests/checks required by doc publication surfaces (if any deliverables land under adopter-public paths) and run unit tests if code changed. | Tests pass |
| 8 | Release the changes via **`RW E03:S02:T15 --art`** (BUILD +1) with changelog language that avoids false “fixed” claims (policy/doc change). | Tagged local release |
| **N** | **[MANDATORY] Reconcile task `E03:S02:T15` status** to actual implementation state: `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; `IN PROGRESS` if ongoing; `BLOCKED` + reason if blocked. Update `Last updated`. | Task status reconciled |

**RW verification / FBU wave rule (BR-097):** any follow-on verification or correction wave should prescribe `RW E03:S02:T15 --art` only (BUILD +1). Do not prescribe `--doc-policy-zero`.

### 4.1 Files to create or modify

- Create:
  - `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/` *(policy memo file OR incorporate into task doc)*  
  - `docs/architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md` *(proposed new ADR number; confirm numbering at implementation time)*  
- Update:
  - `docs/governance/standards/dev-kit-versioning-policy.md`
  - `README.md`
  - `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md`

### 4.2 Dependency order

1. Policy decision memo (locks Option A/B).
2. Versioning policy update + README update (primary outward surfaces).
3. ADR creation/update (records the decision + rationale).
4. Any workflow/KB doc alignment.
5. RW to ship the doc/policy changes with traceability.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md` | Link policy memo + ADR + ensure follow-on surfaces list exists; status updates during delivery. | RF1–RF4; Steps 1–8 |
| D-U2 | `docs/governance/standards/dev-kit-versioning-policy.md` | Clarify outward SemVer semantics in `task_touch`; ordering signal; `+BUILD` meaning. | RF1–RF2; Step 3 |
| D-U3 | `README.md` | Align outward “Version” line/display guidance with chosen policy. | RF1–RF2; Step 4 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/semver-external-display-policy-decision.md` | Human-readable decision memo (Option A/B + ordering semantics + impact checklist). | RF1–RF3; Step 2 |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md` | Architectural record of the decision and its consequences/alternatives. | RNF1–RNF3; Step 6 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| Workflow documentation references that imply `+BUILD` is the external progression signal | UPDATE D-U2/D-U3 and any discovered workflow doc pages during implementation; ensure no contradictory statements remain. |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-U1 | `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T15-semver-external-build-metadata-redundancy-uxr031.md` | NOT_APPLICABLE | Kanban maintainer surface (not adopter-public). | evergreen | Link to D-C1 + D-C2 + this IPP |
| D-U2 | `docs/governance/standards/dev-kit-versioning-policy.md` | NOT_APPLICABLE | Governance surface (not adopter-public). | evergreen | Link to D-C2 |
| D-U3 | `README.md` | PUBLISHED |  | evergreen | Link to D-U2 or a stable published guidance section (if available) |
| D-C1 | `docs/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/semver-external-display-policy-decision.md` | NOT_APPLICABLE | Kanban story deliverable (maintainer). | evergreen | Link to D-U2 + D-C2 |
| D-C2 | `docs/architecture/standards-and-adrs/ADR-031-external-semver-build-metadata-display-policy.md` | NOT_APPLICABLE | Architecture ADR surface (maintainer). | evergreen | Link to D-U2 + D-C1 |

---

## 7. Success / verification criteria

- [ ] A single explicit outward SemVer UX decision (Option A or B) is documented in D-C1 (or task doc) and linked from the task.
- [ ] D-U2 (versioning policy) and D-U3 (README) reflect the same semantics and explicitly state the ordering/precedence signal is SemVer core.
- [ ] ADR D-C2 exists and captures alternatives + rationale + consequences.
- [ ] RW is executed as `RW E03:S02:T15 --art` and the release surfaces reflect documentation/policy change (no false “fixed” claims).
- [ ] Bidirectional wiring exists: Task ↔ IPP; Task ↔ UXR-031; Task ↔ policy memo; Task ↔ ADR.

---

## References

- `rw-config.yaml` (`semver_mapping_strategy: task_touch`)
- `packages/frameworks/workflow-mgt/scripts/version/semver_converter.py` (task_touch mapping; `get_rw_tag_info` primary tag core-only)
- UXR-031: `docs/kanban/fbu/UXR-031-semver-plusbuild-redundancy-in-task-touch.md`
- FR-045: `docs/kanban/fbu/FR-045-adr-002-task-touch-derived-mapping.md`
- BR-061: `docs/kanban/fbu/BR-061-semver-task-touch-counter-increments-too-often.md`
- Versioning policy: `docs/governance/standards/dev-kit-versioning-policy.md`

