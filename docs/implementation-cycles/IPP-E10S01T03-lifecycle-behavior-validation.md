---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T03 — Planning: Lifecycle Behavior Validation (IPW)

**Host Task:** [`T03-validate-lifecycle-behavior-against-documented-guidance.md`](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T03-validate-lifecycle-behavior-against-documented-guidance.md) **(E10:S01:T03)**  
**Planning for:** [E10S01 orchestration plan §7.4 T03](./E10S01-orchestration-plan.md) · [IPP-E10S01T01 expectations baseline](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) (T01 — implementation dependency)  
**Status:** Implemented — companion report published; RW v0.10.1.3+1  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Validate **metadata schema compliance**: five required frontmatter fields (`lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy`), enum values, TTL defaults, `expires_at` calculation rules | T01 §Expected Lifecycle Behaviors (planned); `policies/doc-lifecycle-metadata-spec.md`; orchestration plan §7.4 T03 |
| RF2 | Validate **classification behavior**: document-type → lifecycle mapping, default-to-evergreen rule, promotion/demotion rules vs `LIFECYCLE_EXAMPLES.md` | `policies/doc-lifecycle-policy.md` §Classification; `templates/LIFECYCLE_EXAMPLES.md` |
| RF3 | Validate **TTL and expiration behavior**: `ttl_days` null for evergreen; default TTLs (90/14/30); `expires_at = created_at + ttl_days` | Metadata spec §Field Definitions; LIFECYCLE_EXAMPLES Examples 3–6 |
| RF4 | Validate **reference-aware cleanup** (documented vs observable): protection from evergreen links, changelog refs, git history; auto-upgrade `housekeeping_policy` to `archive` | Policy §Reference-Aware Cleanup; LIFECYCLE_EXAMPLES §Protection Rules |
| RF5 | Validate **agent-driven management**: `.cursorrules` Document Lifecycle section vs package policy; agent decision tree; default-to-evergreen | `.cursorrules` §Document Lifecycle Management; policy §Agent-Driven Management |
| RF6 | Validate **housekeeping automation** (documented vs observable): expiration checks, archive/delete actions, Doc Housekeeping Workflow | PACKAGE_OVERVIEW future artefacts; `integration/workflow-mgt-integration.md` |
| RF7 | Validate **`DocumentLifecycleValidator`** runtime behavior vs metadata spec (tooling-automation package) | `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`; E8:S02:T02 |
| RF8 | **Repo frontmatter sample audit**: representative `docs/` markdown files scored PASS/PARTIAL/FAIL against metadata spec | Orchestration plan §7.4 T03 inputs |
| RF9 | Document discrepancies with **severity** (Critical/High/Medium/Low) and evidence paths — feeds T05 | Story E10:S01 AC; E02:S13:T03 precedent |
| RF10 | Flesh out T03 task doc (scope, AC, inputs, references) and wire IPP bidirectionally | FR-042, FR-094; orchestration plan §7.5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Validation-only** — no package fixes, no validator remediation, no frontmatter mass-migration (deferred to T05/T06/Wave 3) | Task scope; E02:S13:T03 RNF1 |
| RNF2 | Every FAIL/PARTIAL row cites evidence (file path, command output, sample doc paths) | E02:S13 workflow-behavior-validation-report precedent |
| RNF3 | Reuse T01 expectations baseline + T02 component inventory when available; extend with executable validator checks | Orchestration plan §8.5 dependency |
| RNF4 | Companion report is evergreen; task doc holds executive summary + verification table | E02:S13:T03 housing pattern |
| RNF5 | Run on branch `epic/10-doc-lifecycle-framework`; RW prescribes `RW E10:S01:T03 --art` only (BR-097) | Orchestration plan §2.1, §8.2 |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/doc-lifecycle/`; read-only validator invocations allowed.
- **In scope:** Package policy/spec/examples behavior vs live repo (`.cursorrules`, `docs/` frontmatter samples, `DocumentLifecycleValidator`).
- **Out of scope:** Integration alignment with Kanban/RW (T04); architecture ADR drift analysis (T04); consolidated gap log (T05); implementing missing scripts/workflows (`validate_lifecycle_metadata.py`, `housekeeping_scanner.py`, `doc-housekeeping-workflow.yaml`); T01 baseline rewrite.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **lifecycle behavior validation report** proving whether the Document Lifecycle framework package **behaves as documented** across metadata schema, classification/TTL rules, reference-aware cleanup, agent rules, and observable automation — distinguishing policy-aligned documentation from runtime/cohesion gaps (missing scripts, validator field drift, `.cursorrules` subset schema) — so T05 can consolidate severity-ranked remediation without re-discovering findings.

### 2.2 Specification mapping from ascertained requirements

Seven validation domains in companion file `lifecycle-behavior-validation-report.md`:

| Domain | RF | Content |
| ------ | -- | ------- |
| 1. Metadata schema | RF1 | Five-field spec vs `.cursorrules` (2-field) vs validator required fields |
| 2. Classification & TTL | RF2, RF3 | Type→lifecycle table, defaults, `expires_at` arithmetic on samples |
| 3. Reference-aware cleanup | RF4 | Documented protection rules vs observable automation (expected PARTIAL) |
| 4. Agent rules | RF5 | `.cursorrules` vs policy; decision tree from LIFECYCLE_EXAMPLES |
| 5. Housekeeping automation | RF6 | Documented workflow/scripts vs on-disk absence (orchestration plan §3.2) |
| 6. Validator runtime | RF7 | `DocumentLifecycleValidator` smoke + field coverage matrix |
| 7. Repo sample audit | RF8 | Stratified `docs/` frontmatter sample (kanban, implementation-cycles, architecture, changelogs) |

Each row: expected behavior (T01 baseline + package policies), observed behavior (evidence), status PASS/PARTIAL/FAIL, severity.

### 2.3 Constraints

- Housing: detailed matrix in `lifecycle-behavior-validation-report.md`; executive summary + gap table in T03 task doc.
- BR-097: post-ship verification prescribes `RW E10:S01:T03 --art` only — no `--doc-policy-zero`.
- Implementation blocked until T01 expectations baseline is published (orchestration plan §8.5 Wave 2B gate).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V10 PASS; companion report published; forensic marker `✅ COMPLETE (v0.10.1.3+{N})` after `RW E10:S01:T03 --art`.
- **Atomic propagation requirement:** Task doc status, story checklist row, and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution agent (not IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion report + task summary (E02:S13:T03 pattern) |
| T2 | Reversibility | N | Doc-only artefact; one-PR revert |
| T3 | Blast radius | N | Confined to kanban story folder + implementation-cycles IPP |
| T4 | Precedent | N | Task-scoped validation; T01 baseline + package policies govern |
| T5 | Constraint trade-off | N | No architectural trade-off — documents existing drift |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends T01/T02; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | E02:S13:T03 + E03:S04:T03 + orchestration plan §7.4 |
| E3 | Reversible in one task | Y | Doc revert without migration |
| E4 | Spec elsewhere | Y | Package policies + T01 §Expected Lifecycle Behaviors |
| E5 | Documented NONE | Y | §5.3 cites T01 + package policies |

---

## 3. Test design

**`--skip-tests` justification:** T03 is a **review/documentation artefact task** with **no new executable code** deliverable. Verification is **structural inspection** of lifecycle behavior against package policies, `.cursorrules`, repo frontmatter samples, and read-only validator invocation — not pytest for new functionality. The package under review is itself a pure policy/documentation framework; missing housekeeping scripts are *documented future* artefacts (orchestration plan §3.2), validated as observability gaps rather than unit-test targets. Automated pytest would not exercise T03 acceptance criteria meaningfully beyond optional smoke of existing `DocumentLifecycleValidator`.

### 3.1 Verification checklist (V1–V10)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Metadata spec five-field rule | Manual: spec §Required Fields vs `.cursorrules` §Required Fields — scored Y/N per field |
| V2 | LIFECYCLE_EXAMPLES alignment | Examples 1–8 metadata blocks match spec defaults and enum values |
| V3 | Validator smoke | Run `DocumentLifecycleValidator` against `docs/` subset; capture issue count and required-field coverage |
| V4 | Validator vs spec gap | Compare validator `required_fields` (`lifecycle`, `created_at` only) vs spec five required |
| V5 | TTL arithmetic | Sample timeboxed/transient docs: `expires_at` equals `created_at + ttl_days` (±1 day tolerance) |
| V6 | Repo frontmatter coverage | Stratified sample: % docs under `docs/` with frontmatter; % with full five fields |
| V7 | Missing package scripts | `test -f` for `validate_lifecycle_metadata.py`, `housekeeping_scanner.py`, `doc-housekeeping-workflow.yaml` — expect MISSING |
| V8 | Reference-aware cleanup observability | Grep/code search for reference-scan or auto-upgrade logic — expect absent in package |
| V9 | Scope guard | No package functional code changes during T03 |
| V10 | Wiring | Task ↔ IPP ↔ companion links resolve |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T03` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Confirm T01 expectations baseline available (`expectations-baseline.md` or T01 task doc sections) | Input gate satisfied |
| 3 | Create `lifecycle-behavior-validation-report.md` with seven validation domains + evidence template | Companion artefact |
| 4 | Run V1–V2 manual policy/examples scoring | Report §1–2 |
| 5 | Run V3–V4 validator smoke; document field-coverage gap | Report §6 |
| 6 | Run V5–V6 repo frontmatter sample audit (≥20 stratified paths) | Report §7 |
| 7 | Run V7–V8 documented-vs-observable checks for housekeeping + reference cleanup | Report §4–5 |
| 8 | Score all dimensions PASS/PARTIAL/FAIL with severity; publish discrepancy table | Report §Summary |
| 9 | Flesh out T03: Scope, AC, Input, Deliverable, verification table, gap summary | Task doc |
| 10 | Update Story E10:S01 checklist + story AC slice “Behavioral validation notes captured” | Story doc |
| 11 | Optional cross-link from T02 `component-inventory-map.md` when available | Cross-link |
| 12 | Run V9–V10 verification checklist | Task doc verification table |
| 13 | **`RW E10:S01:T03 --art`** | Release `v0.10.1.3+1` |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T03` status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; update kboard | Task + story + board |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E10:S01:T03 --art`** only.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md` (this file)
- CREATE: `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/lifecycle-behavior-validation-report.md`
- UPDATE: `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T03-validate-lifecycle-behavior-against-documented-guidance.md`
- UPDATE: `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` (story checklist)
- UPDATE (optional): `component-inventory-map.md` (when T02 complete)
- UPDATE (RW Step 7): `docs/project-management/kanban/kboard.md`

### 4.2 Dependency order

1. **Gate:** T01 expectations baseline published (Wave 2A complete)
2. Run validator smoke + frontmatter audit → populate report
3. Task doc + story → IPP wire → RW

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Scope of change | Tied to (RF/step) |
| ------ | ---- | ------ | --------------- | ----------------- |
| D-U1 | `T03-validate-lifecycle-behavior-against-documented-guidance.md` | UPDATE | Scope, AC, summary, IPP link, verification table | RF10, Step 9 |
| D-U2 | `story-01-document-lifecycle-package-implementation-review.md` | UPDATE | Checklist + story AC slice | RF9, Step 10 |
| D-U3 | `kboard.md` | UPDATE | T03 status/version on release | Step 13 |
| D-U4 | `component-inventory-map.md` | UPDATE (optional) | Behavior report pointer | Step 11 |

### 5.2 New documents to create

| Doc ID | Proposed path | Action | Purpose | Tied to (RF/step) |
| ------ | ------------- | ------ | ------- | ----------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md` | CREATE | IPP (this file) | RF10 |
| D-C2 | `story-01-.../lifecycle-behavior-validation-report.md` | CREATE | Detailed validation matrix | RF1–RF9 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| T01 expectations baseline not yet on disk | **BLOCKER for impl** — cite IPP-E10S01T01 + planned `expectations-baseline.md`; T03 impl waits Wave 2A |
| Missing package scripts/workflows | NONE — document as expected PARTIAL/FAIL in report; fix deferred T05/T06 |
| `.cursorrules` 2-field vs spec 5-field | NONE — document as Medium discrepancy; alignment deferred T05 |
| Architecture ADR copies vs package policies | NONE — full drift analysis deferred T04 |
| ADR for validation housing | NONE — EXEMPT per §2.5; governed by package policies + T01 baseline |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T03-lifecycle-behavior-validation.md` | NOT_APPLICABLE | Planning artefact | evergreen | T03 Input/References |
| D-C2 | `story-01-.../lifecycle-behavior-validation-report.md` | NOT_APPLICABLE | Kanban companion | evergreen | T03 Deliverable; T05 Input |
| D-U1 | T03 task doc | NOT_APPLICABLE | Kanban task | evergreen | IPP host link |
| D-U2 | Story E10:S01 doc | NOT_APPLICABLE | Kanban story | evergreen | T03 checklist |

---

## 7. Success / verification criteria

- [ ] Companion report with validation matrix + evidence for all seven domains
- [ ] Task doc AC checkboxes + V1–V10 verification table populated
- [ ] Discrepancy table with severity tags suitable for T05 consolidation
- [ ] No package functional code changed (V9)
- [ ] Bidirectional T03 ↔ IPP ↔ companion links (V10)
- [ ] Story AC “Behavioral validation notes captured” satisfied on RW completion
- [ ] Forensic marker via `RW E10:S01:T03 --art` on `epic/10-doc-lifecycle-framework`

---

## References

- [T03 task doc](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T03-validate-lifecycle-behavior-against-documented-guidance.md)
- [E10S01 orchestration plan §7.4 T03](./E10S01-orchestration-plan.md)
- [IPP-E10S01T01 expectations baseline](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md)
- [IPP-E02S13T03 precedent](./IPP-E02S13T03-workflow-behavior-validation.md)
- [workflow-behavior-validation-report.md precedent](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/workflow-behavior-validation-report.md)
- [doc-lifecycle-policy.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md)
- [doc-lifecycle-metadata-spec.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md)
- [LIFECYCLE_EXAMPLES.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/templates/LIFECYCLE_EXAMPLES.md)
- [DocumentLifecycleValidator](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
