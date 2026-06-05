---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S13:T04 — Planning: Integration and Dependency Alignment (IPW)

**Host Task:** [`T04-review-integrations-and-dependency-alignment.md`](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment.md) **(E02:S13:T04)**  
**Planning for:** [T01 expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md) · [T02 component inventory](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) · [T03 behavior validation](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md) · [E07:S07:T01 report](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)  
**Status:** Implemented (2026-06-05)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Review **hard dependencies** (Git, Python, PyYAML, installer venv) against README + `INSTALL_IN_YOUR_PROJECT.md` claims | T01 §Modularity; README §Dependencies |
| RF2 | Review **soft dependency: Numbering & Versioning** — version schema, `version_file`, SemVer conversion, task-touch/registry modes, `validate_version_bump.py` / `semver_converter.py` contract | T01 §Integration Expectations; `rw-config-schema.md` |
| RF3 | Review **soft dependency: Kanban** — `use_kanban`, path patterns, RW Step 7 four-surface contract, UKW bottom-up sync, intake `kanban_integration`, FR/BR board paths | T01 §Kanban; FR-092; `rw-config-schema.md` |
| RF4 | Review **three-way integration** (Kanban ↔ Versioning ↔ RW) — installer Mode C, forensic traceability chain, version markers on kanban surfaces | T01 §Complete Integration; README adoption scenarios |
| RF5 | Review **rw-config as integration hub** — required/optional keys, mode A/B/C, `scripts_path` adopter layout, semver/kanban toggles | `config/rw-config-schema.md`; E07 M1 |
| RF6 | Review **cross-workflow integration surfaces** — Intake→Kanban, PIR→RW/Kanban/Versioning, UKW→RW perpetual-task attribution, CMW Step 9.5, PVW Step 2.5, ECC harness (FR-098) | T02 inventory §3; workflow-registry; FR-098 |
| RF7 | Review **external service integration** — GitHub release (`create_github_release.py`), optional GitHub Actions templates, Notion hub URL (if documented) | T01 §GitHub; component inventory §5 |
| RF8 | Review **adopter packaging integration** — copy vs submodule vs CLI (`framework-dependency-architecture.md`), brownfield path mapping, portable excerpt install | README §Dependency Architecture; E02:S04 |
| RF9 | Document alignment status per integration domain with **severity** (Critical/High/Medium/Low) and evidence — feeds T05 gap log | Story AC; E07 §5 taxonomy; T03 pattern |
| RF10 | Flesh out T04 task doc (scope, AC, inputs, references) and wire IPP bidirectionally | FR-042, FR-094 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RNF1 | **Review-only** — no package fixes, no shared-module refactors (deferred to T05/T06) | Task scope; T03 precedent |
| RNF2 | Every PARTIAL/GAP row cites evidence (file path, config key, E07/T03 finding ID) | E07 report pattern |
| RNF3 | Reuse T01 integration baseline + T02 inventory + T03 behavioral findings; extend with **config/schema** and **doc cross-link** checks | T02/T03 companions |
| RNF4 | Companion report is evergreen; task doc holds executive summary + verification table | T03 pattern |
| RNF5 | Distinguish **documented integration contract** from **implementation cohesion** (e.g. H3 kanban paths, M1 config loaders) | E07 §Integration alignment row |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/workflow-mgt/`; read-only config/schema/doc inspection and non-mutating validator invocations allowed.
- **In scope:** Package integration and dependency alignment vs T01 + live ai-dev-kit reference repo + E07 hypotheses.
- **Out of scope:** Behavioral validation (T03 — complete); consolidated gap log (T05); remediation implementation; RC sign-off criteria (T06); T01 baseline rewrite.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **integration and dependency alignment report** proving whether the Workflow Management package **integrates as documented** with hard/soft dependencies, `rw-config.yaml`, sibling frameworks (Kanban, Versioning), cross-workflow surfaces, and adopter packaging — distinguishing **contract-aligned** integration (docs + config schema) from **cohesion gaps** (H3 kanban fragmentation, M1 config loaders, registry `common_components` drift) — so T05 can consolidate severity-ranked remediation without re-discovering integration findings.

### 2.2 Specification mapping from ascertained requirements

Nine validation domains in companion file:

1. **Hard dependencies** — README/installer claims vs actual imports and install docs  
2. **Versioning soft dependency** — schema, validators, SemVer/task-touch, packaged KB policy paths  
3. **Kanban soft dependency** — rw-config keys, Step 7/UKW/intake wiring, board paths (ADR-018)  
4. **Three-way stack** — Mode C example configs, end-to-end traceability narrative  
5. **rw-config integration hub** — schema completeness, mode definitions, adopter `scripts_path`  
6. **Cross-workflow integrations** — registry-declared deps, PIR/intake/PVW/ECC surfaces  
7. **External services** — GitHub release, CI templates  
8. **Adopter packaging** — copy/submodule/CLI, brownfield mapping, dual-source excerpts  
9. **E07/T03 crosswalk** — map H3, M1, registry gaps to integration severity rows  

Each row: expected integration (T01/README/schema), observed (evidence), status `ALIGNED` / `PARTIAL` / `GAP`, severity.

### 2.3 Constraints

- Housing: detailed matrix in `integration-alignment-report.md`; executive summary in T04 task doc.
- BR-097: post-ship verification prescribes `RW E02:S13:T04 --art` only.
- README incorrectly cites RW Step 4 for Kanban (live spec: Step 7) — record as doc drift, do not fix in T04.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** TODO
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V12 PASS; companion report published; forensic marker via RW.
- **Atomic propagation requirement:** Task doc status and kboard row update in same RW Step 7 session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion report + task summary (T03 pattern) |
| T2 | Reversibility | N | Doc-only review; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs under story-13 |
| T4 | Precedent | N | Task-scoped review; T01 §Integration Expectations governs |
| T5 | Constraint trade-off | N | No new architectural choice — documents existing contracts |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates or dependency policy |
| T7 | Supersedes | N | Extends T01/T03; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | E02:S13:T03 + E04:S16:T04 pattern |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | T01 §Integration Expectations + `rw-config-schema.md` + E07 §Integration |
| E5 | Documented NONE | Y | §5.3 cites T01 + framework-dependency-architecture |

---

## 3. Test design

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Hard deps documented | README §Dependencies + `INSTALL_IN_YOUR_PROJECT.md` venv section scored ALIGNED/PARTIAL |
| V2 | rw-config schema vs live `rw-config.yaml` | Required keys present; kanban keys when `use_kanban: true`; `fbu_board` deprecated note |
| V3 | Versioning integration | `validate_version_bump.py --strict --requested E02:S13:T04 --art` exit 0; packaged `versioning-policy.md` path exists |
| V4 | Kanban integration keys | `rw-config-schema.md` Mode C example vs ai-dev-kit `rw-config.yaml` path patterns |
| V5 | Three-way narrative | Trace one release: version.py → changelog → kboard row → task doc marker (doc inspection) |
| V6 | Cross-workflow registry | `workflow-registry.yaml` integration/dependency fields vs nested README claims |
| V7 | Intake→Kanban | `intake-workflow` YAML `kanban_integration` + `intake_*.py` board path resolution |
| V8 | Config loader fragmentation | Count `load_rw_config` implementations; map to E07 M1 |
| V9 | Kanban path fragmentation | List RW Step 7 / UKW / `update_kanban_docs.py` entrypoints; map to E07 H3 |
| V10 | Adopter packaging | README scenarios 1–3 vs `framework-dependency-architecture.md` + install modes |
| V11 | ECC optional integration | FR-098 spec + `ecc-adk-bridge.yaml.template` presence; skills/README cross-link |
| V12 | Wiring | Task ↔ IPP ↔ companion links resolve; story AC row ready for update |

**Note:** T04 is doc/config review — no new pytest suite. Executable checks are smoke validators (V3) and structural grep (V8–V9).

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E02:S13:T04` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create `integration-alignment-report.md` with nine validation domains + evidence template | Companion artefact |
| 3 | Run V1–V4 schema/config checks; capture paths and key tables | Report §Hard/Soft/Config |
| 4 | Run V5–V7 cross-workflow and three-way trace; document ALIGNED/PARTIAL/GAP per domain | Report §Integration Matrix |
| 5 | Run V8–V9 cohesion checks; cross-walk E07 H3, M1, registry `common_components` gap | Report §Cohesion Crosswalk |
| 6 | Run V10–V11 adopter packaging + ECC optional surface review | Report §Adopter Surfaces |
| 7 | Publish compliance summary + discrepancy table with severity | Report §Summary |
| 8 | Flesh out T04: Scope, AC, Input, Deliverable, verification table | Task doc |
| 9 | Update Story 13 checklist + story AC (“Integration alignment reviewed”) | Story doc |
| 10 | Add pointer in `component-inventory-map.md` (optional) | Cross-link |
| 11 | Run V12 verification checklist | Task doc verification table |
| 12 | **`RW E02:S13:T04 --art`** | Release v0.2.13.4+1 |
| **N** | **[MANDATORY] Reconcile task `E02:S13:T04` status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; update kboard | Task + story + board |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E02:S13:T04 --art`** only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md`
- CREATE: `story-13/.../integration-alignment-report.md`
- UPDATE: `T04-review-integrations-and-dependency-alignment.md`
- UPDATE: `story-13-workflow-management-package-implementation-review.md`
- UPDATE (optional): `component-inventory-map.md`
- UPDATE (RW Step 7): `kboard.md`

### 4.2 Dependency order

1. T03 behavior report + E07 §Integration rows (inputs)  
2. Run V1–V11 checks → populate companion report  
3. Task doc + story → IPP wire → RW  

### 4.3 Documentation implementation steps (optional)

1. Companion report (full matrix) before task executive summary  
2. Story AC checkbox after task AC satisfied  
3. Optional inventory cross-link last  

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/impl step) |
| ------ | ---- | --------------- | ------------------------ |
| D-U1 | `T04-review-integrations-and-dependency-alignment.md` | Scope, AC, summary, links | RF10, Step 8 |
| D-U2 | `story-13-workflow-management-package-implementation-review.md` | Checklist + story AC | RF9, Step 9 |
| D-U3 | `kboard.md` | T04 status/version on release | Step 12 |
| D-U4 | `component-inventory-map.md` | Integration report pointer | Step 10 |

### 5.2 New documents to create

| Doc ID | Proposed path (draft) | Purpose | Tied to (RF/T/impl step) |
| ------ | --------------------- | ------- | ------------------------ |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md` | IPP | RF10 |
| D-C2 | `story-13/.../integration-alignment-report.md` | Detailed integration matrix | RF1–RF9 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution (CREATE row above, or NONE + reason) |
| ----------- | ----------------------------------------------- |
| README Kanban Step 4 vs Step 7 | NONE — record as PARTIAL in report; README fix deferred T05 |
| Shared `rw_config_loader` module | NONE — E07 E1 remediation deferred T05/T06 |
| Kanban transform consolidation (H3) | NONE — deferred T05; cited in report crosswalk |
| Registry `common_components` dirs | NONE — inventory gap; deferred T05 |
| New ADR for integration housing | NONE — EXEMPT per §2.5; governed by T01 + `framework-dependency-architecture.md` |
| Package README dependency matrix refresh | NONE — alignment report notes drift; README edit deferred T05 |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason (if N/A) | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ------------------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md` | NOT_APPLICABLE | Planning artefact | evergreen | T04 Input/References |
| D-C2 | `story-13/.../integration-alignment-report.md` | NOT_APPLICABLE | Kanban companion | evergreen | T04 Deliverable; T05 Input |
| D-U1 | T04 task doc | NOT_APPLICABLE | Kanban task | evergreen | IPP host link |
| D-U2 | Story 13 doc | NOT_APPLICABLE | Kanban story | evergreen | T04 checklist |

**Housing rules:** One authoritative doc per topic; companion report is SoT for integration matrix; T05 consumes discrepancy IDs from report §Summary.

---

## 7. Success / verification criteria

- [x] Companion report with integration matrix + evidence for all nine domains
- [x] Task doc AC checkboxes + V1–V12 verification table
- [x] E07 H3/M1 and T03 D11/D9 crosswalk incorporated
- [x] No package functional code changed
- [x] Bidirectional T04 ↔ IPP ↔ companion links
- [x] Story AC “Integration alignment reviewed and documented” satisfied on RW completion
- [x] Forensic marker via `RW E02:S13:T04 --art`
- [x] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [x] All §6 paths exist and are linked from task doc

---

## References

- [T04 task doc](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T04-review-integrations-and-dependency-alignment.md)
- [T01 expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- [T02 component inventory](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [T03 behavior validation report](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md)
- [E07:S07:T01 report](../project-management/kanban/epics/epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [rw-config-schema.md](../../packages/frameworks/workflow-mgt/config/rw-config-schema.md)
- [framework-dependency-architecture.md](../architecture/standards-and-adrs/framework-dependency-architecture.md)
- [FR-098 ECC harness](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [FR-092 RW Step 7 kanban contract](../../project-management/kanban/fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md)
- [FR-042](../../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
