---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T04 — Planning: Integration and Dependency Alignment (IPW)

**Host Task:** [`T04-review-integrations-and-dependency-alignment.md`](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T04-review-integrations-and-dependency-alignment.md) **(E10:S01:T04)**  
**Planning for:** [E10S01 orchestration plan §7.4 T04](./E10S01-orchestration-plan.md) · [IPP-E10S01T01 expectations baseline](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) · T02 inventory · T03 behavior validation (when available)  
**Status:** Implemented — companion report shipped v0.10.1.4+1  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Confirm **zero hard dependencies** — pure documentation/policy package (10/10 independence) vs README and PACKAGE_OVERVIEW claims | README §Modularity; orchestration plan §3.4; T01 RF1 |
| RF2 | Review **Kanban soft dependency** — optional standalone vs lifecycle metadata on Epics/Stories/Tasks; default `evergreen`; timeboxed exception; template propagation; reference-aware protection | `integration/kanban-integration.md`; README §Combined Usage |
| RF3 | Review **Workflow Management soft dependency** — RW sets lifecycle frontmatter when creating KB docs; document-type → lifecycle mapping table; future Doc Housekeeping Workflow hook | `integration/workflow-mgt-integration.md`; README §Combined Usage |
| RF4 | Review **repo-level agent rules** — `.cursorrules` Document Lifecycle Management section vs package `doc-lifecycle-metadata-spec.md` (field completeness, defaults, enforcement) | `.cursorrules` §Document Lifecycle; orchestration plan §3.3 |
| RF5 | Review **architecture ADR dual SoT** — package `policies/` vs `docs/architecture/standards-and-adrs/` copies (`doc-lifecycle-metadata-spec.md`, `doc-lifecycle-policy.md`, `policy-salience-schema.md`) for content drift | Orchestration plan §3.3; E10S01 §7.4 T04 focus |
| RF6 | Review **greenfield-install adopter mirror** (FR-110) — `greenfield-install/packages/frameworks/doc-lifecycle/` parity with canonical package root | FR-110; README §Adopter distribution; orchestration plan §3 |
| RF7 | Review **template and cross-package link integrity** — `DOCUMENT_TEMPLATE.md`, `PLAN_DOC_TEMPLATE.md`, kanban task/epic templates with lifecycle frontmatter; integration guide outbound links resolve | T02 inventory (when available); kanban templates |
| RF8 | Review **documented-but-future integration artefacts** — `workflows/doc-housekeeping-workflow.yaml`, `scripts/validate_lifecycle_metadata.py`, `scripts/housekeeping_scanner.py` — alignment status as integration contract vs implementation gap | PACKAGE_OVERVIEW; orchestration plan §3.2 |
| RF9 | Document alignment status per integration domain with **severity** (Critical/High/Medium/Low) and evidence — feeds T05 gap log (`GAP-DOCLIFE-*` prefix) | Story AC; E02:S13:T04 pattern; gap-log-schema |
| RF10 | Flesh out T04 task doc (scope, AC, inputs, references) and wire IPP bidirectionally | FR-042, FR-094; orchestration plan §8.5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Review-only** — no package fixes, no ADR merges, no RW/workflow implementation (deferred to T05/T06/Wave 3) | E02:S13:T04 precedent; orchestration plan |
| RNF2 | Every PARTIAL/GAP row cites evidence (file path, diff summary, template sample, T03 finding ID when available) | E02 integration-alignment-report pattern |
| RNF3 | Reuse T01 integration expectations + T02 inventory + T03 behavioral findings as inputs; extend with **config/schema**, **ADR drift**, and **adopter parity** checks | Orchestration plan §7.4 T04 |
| RNF4 | Companion report is evergreen; task doc holds executive summary + verification table | E02:S13:T04 housing |
| RNF5 | Distinguish **documented integration contract** from **implementation cohesion** (e.g. RW agent guide silent on lifecycle mapping table; dual SoT drift) | E02 I4/I10 pattern |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/doc-lifecycle/` or sibling packages during T04; read-only inspection, `diff`, and non-mutating link checks only.
- **In scope:** Package integration guides, policies, templates; repo ADRs; `.cursorrules`; greenfield-install mirror; kanban/workflow-mgt cross-references; live repo frontmatter samples (spot-check, not full T03 re-run).
- **Out of scope:** Full behavioral validation (T03); consolidated gap log authoring (T05); remediation implementation; RC sign-off (T06); merging package policies into architecture ADRs.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **integration and dependency alignment report** for the Document Lifecycle framework package proving whether doc-lifecycle **integrates as documented** with zero hard dependencies, optional Kanban and Workflow Management soft dependencies, repo-level agent rules, architecture ADR dual SoT, and FR-110 adopter mirror — distinguishing **contract-aligned** integration (integration guides + policies) from **cohesion gaps** (ADR drift, incomplete RW agent wiring, absent future workflow/scripts) — so T05 can consolidate severity-ranked `GAP-DOCLIFE-*` entries without re-discovering integration findings.

### 2.2 Specification mapping from ascertained requirements

Nine validation domains in companion file `integration-alignment-report.md`:

| Domain | RF | Content |
| ------ | -- | ------- |
| 1. Independence / hard dependencies | RF1 | README 10/10 claim; no runtime imports; installer does not require doc-lifecycle |
| 2. Kanban soft dependency | RF2 | Standalone vs metadata modes; epic/story/task template frontmatter; protection rules |
| 3. Workflow Management soft dependency | RF3 | RW doc-creation lifecycle rules; mapping table vs live RW KB outputs; future housekeeping hook |
| 4. Repo agent rules (`.cursorrules`) | RF4 | Required vs optional fields; enforcement vs package spec (5 required fields) |
| 5. Architecture ADR dual SoT | RF5 | `diff` package `policies/` ↔ `docs/architecture/standards-and-adrs/`; policy-salience paths |
| 6. greenfield-install parity | RF6 | `diff -rq` canonical vs mirror; FR-110 README alignment |
| 7. Template propagation | RF7 | DOCUMENT_TEMPLATE, PLAN_DOC_TEMPLATE, kanban templates; link integrity |
| 8. Future integration artefacts | RF8 | Documented workflows/scripts absent on disk — contract vs gap classification |
| 9. Cross-package doc crosswalk | RF2–RF3 | integration/*.md inbound/outbound links; workflow-mgt + kanban README reciprocal refs |

Each row: expected integration (T01/README/integration guide), observed (evidence), status `ALIGNED` / `PARTIAL` / `GAP`, severity.

**Known pre-review signals (planning reconnaissance — verify during impl):**

- `doc-lifecycle-metadata-spec.md` and `doc-lifecycle-policy.md` **differ** between package `policies/` and `docs/architecture/standards-and-adrs/` (expect **PARTIAL** on domain 5).
- `.cursorrules` mandates only `lifecycle` + `created_at` as required; package spec requires five fields (expect **PARTIAL** on domain 4).
- `workflow-mgt-integration.md` states RW agents **MUST** set lifecycle metadata on KB doc creation; `release-workflow-agent-execution.md` does not embed the mapping table (expect **PARTIAL** on domain 3).
- Doc Housekeeping Workflow and validator scripts documented in PACKAGE_OVERVIEW but absent on disk (expect **GAP** or **PARTIAL** on domain 8 — classify per T01 “documented-future” vs integration contract).

### 2.3 Constraints

- Housing: detailed matrix in `story-01-.../integration-alignment-report.md`; executive summary in T04 task doc.
- BR-097: post-ship verification prescribes `RW E10:S01:T04 --art` only.
- Gap ID prefix for T05 consumption: `GAP-DOCLIFE-{TYPE}-NNN` per orchestration plan §7.4 T05.
- Branch: `epic/10-doc-lifecycle-framework`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change lands (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V10 PASS; companion report published; forensic marker via `RW E10:S01:T04 --art` → `v0.10.1.4+1`.
- **Atomic propagation requirement:** Task doc status, story checklist, and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion report + task summary (E02:S13:T04 precedent) |
| T2 | Reversibility | N | Doc-only review; one-PR revert |
| T3 | Blast radius | N | Confined to kanban story folder + implementation-cycles IPP |
| T4 | Precedent | N | Task-scoped review; T01 integration expectations govern |
| T5 | Constraint trade-off | N | No new architectural choice — documents existing contracts and drift |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates or dependency policy |
| T7 | Supersedes | N | Extends T01; records ADR drift without superseding ADRs |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | E02:S13:T04 + E10S01 §7.4 pattern |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | T01 §Integration Expectations + integration/*.md + package policies |
| E5 | Documented NONE | Y | §5.3 cites T01 + integration guides + orchestration plan |

---

## 3. Test design

**`--skip-tests` justification:** T04 is a **review/documentation artefact task** with **no executable code** deliverable. The package under review is pure policy/documentation (10/10 independence). Verification is **structural inspection** — `diff` of policy trees, link resolution, template frontmatter sampling, and integration guide cross-reference against live repo samples — not pytest or new validator scripts. The package’s own future `validate_lifecycle_metadata.py` is documented-but-absent (domain 8); T04 must not block on implementing it. Automated tests would not exercise T04 acceptance criteria meaningfully.

### 3.1 Verification checklist (V1–V10)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Hard dependencies | README + PACKAGE_OVERVIEW score **ALIGNED** — zero runtime deps |
| V2 | Kanban integration contract | `kanban-integration.md` modes, metadata examples, protection rules vs kanban template samples |
| V3 | Workflow-mgt integration contract | `workflow-mgt-integration.md` RW mapping table vs sample RW-created KB docs (e.g. changelog archive, IPP frontmatter) |
| V4 | `.cursorrules` vs package spec | Field requirement parity; note partial enforcement if cursorrules subset |
| V5 | ADR dual SoT drift | `diff` package policies ↔ architecture ADRs; severity per file |
| V6 | greenfield-install parity | `diff -rq` canonical vs mirror; **ALIGNED** or list divergent paths |
| V7 | Template propagation | DOCUMENT_TEMPLATE + PLAN_DOC_TEMPLATE + ≥3 kanban templates include lifecycle frontmatter |
| V8 | Future artefacts | PACKAGE_OVERVIEW future entries classified ALIGNED (documented-future) vs GAP (integration promise) |
| V9 | Discrepancy table | All domains have status + severity; IDs ready for T05 `GAP-DOCLIFE-*` |
| V10 | Wiring | Task ↔ IPP ↔ companion links resolve; story AC slice ready |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T04` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Confirm T01 companion baseline + T02 inventory + T03 behavior report available (or use IPP-E10S01T01 + orchestration plan as fallback) | Input readiness note |
| 3 | Create `integration-alignment-report.md` with nine validation domains + evidence template (mirror E02:S13 structure) | Companion artefact |
| 4 | Run V1–V2: independence + Kanban integration checks | Report §1–§2 |
| 5 | Run V3–V4: workflow-mgt + `.cursorrules` checks | Report §3–§4 |
| 6 | Run V5–V6: ADR dual SoT `diff` + greenfield-install parity | Report §5–§6 |
| 7 | Run V7–V8: templates + future artefacts classification | Report §7–§8 |
| 8 | Run V9: executive summary + discrepancy table with severity; map rows to T05 gap ID prefix | Report §Summary |
| 9 | Flesh out T04: Scope, AC, Input, Deliverable, verification table V1–V10 | Task doc |
| 10 | Update Story E10:S01 checklist + story AC (“Integration alignment reviewed”) | Story doc |
| 11 | Optional cross-link in T02 `component-inventory-map.md` when it exists | Inventory pointer |
| 12 | Run V10 wiring verification | Task doc verification table |
| 13 | **`RW E10:S01:T04 --art`** | Release `v0.10.1.4+1` |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T04` status** to `COMPLETE` + `✅ COMPLETE (v0.10.1.4+1)` if all ACs satisfied; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated`. Sync story + kboard. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E10:S01:T04 --art`** only. Do **not** prescribe `--doc-policy-zero`.

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `docs/implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md` (this file) |
| CREATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md` |
| UPDATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T04-review-integrations-and-dependency-alignment.md` |
| UPDATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` |
| UPDATE (optional) | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md` (when T02 complete) |
| UPDATE (RW Step 7) | `docs/kanban/kboard.md` |

### 4.2 Dependency order

1. **Preferred:** T01 expectations baseline companion + T02 inventory + T03 behavior report (Wave 2A T01 gate, then parallel T02–T04 impl).  
2. **Minimum:** IPP-E10S01T01 + orchestration plan §3 + package integration/*.md + architecture ADRs.  
3. Run V1–V10 → populate companion report → task doc → RW.

### 4.3 Documentation implementation steps

1. Companion report (full matrix) before task executive summary  
2. Story AC checkbox after task AC satisfied  
3. Optional T02 inventory cross-link last  

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/step) |
| ------ | ---- | --------------- | --------------------- |
| D-U1 | `T04-review-integrations-and-dependency-alignment.md` | Scope, AC, Input, References, IPP link, verification table | RF10; Steps 1, 9, N |
| D-U2 | `story-01-document-lifecycle-package-implementation-review.md` | Checklist + story AC integration slice | RF9; Step 10 |
| D-U3 | `kboard.md` | T04 status/version on release | Step 13 |
| D-U4 | `component-inventory-map.md` (optional) | Integration report pointer | Step 11 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/step) |
| ------ | ------------- | ------- | ------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md` | This IPP | RF10 |
| D-C2 | `story-01-.../integration-alignment-report.md` | Detailed integration matrix | RF1–RF9 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| ADR dual SoT drift (package vs architecture) | **NONE in T04** — record as PARTIAL/GAP rows; merge policy deferred T05/T06 |
| RW agent guide missing lifecycle mapping table | **NONE** — record in report §3; workflow-mgt doc update deferred T05 |
| Doc Housekeeping Workflow + scripts absent | **NONE** — classify in domain 8; implementation deferred Wave 3 / future epic |
| `.cursorrules` partial field mandate | **NONE** — record PARTIAL in domain 4; cursorrules update deferred T05 |
| Package README refresh | **NONE** — alignment report notes drift; README edit deferred T05 |
| New ADR for integration housing | **NONE** — §2.5 EXEMPT; governed by T01 + integration guides |
| Docusaurus portal surfacing | **NOT_APPLICABLE** — kanban companion not portal-published (BR-066) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T04-integration-dependency-alignment.md` | NOT_APPLICABLE | Planning artefact | evergreen | T04 Input/References |
| D-C2 | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md` | NOT_APPLICABLE | Kanban companion | evergreen | T04 Deliverable; T05 Input |
| D-U1 | `.../T04-review-integrations-and-dependency-alignment.md` | NOT_APPLICABLE | Kanban task | evergreen | Story checklist; IPP host |
| D-U2 | `.../story-01-document-lifecycle-package-implementation-review.md` | NOT_APPLICABLE | Story doc | evergreen | Epic-10.md |

**Housing rules:** One authoritative integration matrix (D-C2). T05 consumes discrepancy IDs from report §Summary. Precedent: [E02:S13 integration-alignment-report.md](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md).

---

## 7. Success / verification criteria

- [ ] Companion `integration-alignment-report.md` with nine domains + evidence for each
- [ ] T04 task doc Scope, Input, Deliverable, Acceptance Criteria, References complete
- [ ] V1–V10 verification checklist passed with evidence noted
- [ ] Discrepancy table with severity ready for T05 `GAP-DOCLIFE-*` mapping
- [ ] No package functional code changed
- [ ] Bidirectional T04 ↔ IPP ↔ companion links resolve
- [ ] Story AC “Integration alignment reviewed and documented” satisfied on RW completion
- [ ] `RW E10:S01:T04 --art` → `v0.10.1.4+1`
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason
- [ ] Task status reconciled per Step N

---

## References

- [E10S01 orchestration plan §7.4 T04](./E10S01-orchestration-plan.md)
- [T04 task doc](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T04-review-integrations-and-dependency-alignment.md)
- [IPP-E10S01T01 — expectations baseline](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md)
- [E02:S13:T04 precedent IPP](./IPP-E02S13T04-integration-dependency-alignment.md)
- [E02:S13 integration-alignment-report](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/integration-alignment-report.md)
- Package integration: `packages/frameworks/doc-lifecycle/integration/kanban-integration.md`, `workflow-mgt-integration.md`
- Architecture ADRs: `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md`, `doc-lifecycle-policy.md`, `policy-salience-schema.md`
- [FR-110 — greenfield-install](../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md)
- [FR-042 — IPW](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)
- [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- `.claude/commands/ipw.md`
