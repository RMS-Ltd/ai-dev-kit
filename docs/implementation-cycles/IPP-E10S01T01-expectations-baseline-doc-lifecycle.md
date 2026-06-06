---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T01 — Planning: Expectations Baseline for Document Lifecycle Package (IPW)

**Host Task:** [`T01-establish-expectations-baseline-for-document-lifecycle-packa.md`](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md) **(E10:S01:T01)**  
**Planning for:** [E10S01 orchestration plan](./E10S01-orchestration-plan.md) · Story E10:S01 RC readiness review  
**Status:** Draft — IPW complete; awaiting user authorization for implementation  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Extract and document **core operating principles** for `packages/frameworks/doc-lifecycle/` (modularity, copy pattern, independence score, customization boundaries) | T01 deliverable; E02:S13:T01 precedent; README §Modularity |
| RF2 | Document **expected lifecycle behaviors**: classification (evergreen/timeboxed/transient), TTL expiration, reference-aware cleanup, housekeeping (archive/delete), agent-driven metadata | README §Key Features; policies/doc-lifecycle-policy.md; policies/doc-lifecycle-metadata-spec.md |
| RF3 | Capture **integration expectations** with Kanban and Workflow Management packages (optional standalone; RW frontmatter; future Doc Housekeeping Workflow) | integration/kanban-integration.md; integration/workflow-mgt-integration.md; README §Combined Usage |
| RF4 | Map **package composition** (policies, templates, integration guides, docs/, documented-but-future scripts/workflows) with source paths | PACKAGE_OVERVIEW.md; orchestration plan §3.1; IMPLEMENTATION_GUIDE.md |
| RF5 | Cite **source references** for every major expectation section (traceability to package docs) | E02:S13:T01 AC; Story E10:S01 AC |
| RF6 | Flesh out T01 task doc: Scope, Input, Deliverable, Acceptance Criteria, References | FR-016 stub remediation; orchestration plan §8.4 |
| RF7 | Satisfy Story AC slice: **Expectations baseline documented and approved** | Story E10:S01 §Acceptance Criteria |
| RF8 | Note **adopter mirror** expectation: `greenfield-install/packages/frameworks/doc-lifecycle/` (FR-110) as parity surface for downstream tasks | README §Adopter distribution; orchestration plan §3 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Doc/review artefact only** — no package code, validator, or workflow implementation in T01 | Orchestration plan §7.4 T01 out of scope |
| RNF2 | **Structural precedent:** mirror E02:S13:T01 section taxonomy and depth; companion file preferred over inline-only stub | E02:S13:T01-expectations-baseline.md; orchestration plan §8.4 |
| RNF3 | Baseline is **evergreen** — downstream T02–T06 cite it as authoritative expectations SoT | E02:S13 T01 footnote pattern |
| RNF4 | Flag **documented-but-absent** artefacts (scripts/, workflows/) as *expected future* in composition section — do not treat as T01 gaps to fix | Orchestration plan §3.2 |
| RNF5 | Distinguish **package policies** vs **repo architecture ADRs** under `docs/architecture/standards-and-adrs/` (cross-check deferred to T04) | Orchestration plan §3.3 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Package is pure documentation/policy (10/10 independence; no runtime dependencies).
  - Metadata schema: five required frontmatter fields (`lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy`).
  - Lifecycle enum values and protection rules are non-customizable per PACKAGE_OVERVIEW adoption pattern.
- **In scope:** Package README, PACKAGE_OVERVIEW, PACKAGE_PROPOSAL, IMPLEMENTATION_GUIDE, policies/, integration/, templates/, docs/; `.cursorrules` document lifecycle section (repo-level agent rule cross-ref).
- **Out of scope:** Component inventory tables and gap severity (T02/T05); behavioral validation against repo frontmatter samples (T03); architecture ADR drift analysis (T04); RC sign-off (T06); implementing missing scripts/workflows.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **expectations baseline** for the Document Lifecycle framework package so T02–T06 RC review can compare actual package and repo state against documented intent — mirroring the completed E02:S13:T01 pattern for workflow-mgt.

### 2.2 Specification mapping from ascertained requirements

The companion artefact `expectations-baseline.md` (recommended housing) or an equivalently complete inline section in the T01 task doc SHALL contain these sections:

| Section | RF coverage | Content |
| ------- | ----------- | ------- |
| Core Operating Principles | RF1 | Purpose, modularity, copy-vs-reference, independence score, customization boundaries |
| Expected Lifecycle Behaviors | RF2 | Classification rules, TTL/expiration, reference-aware cleanup, protection rules, agent requirements, policy salience (if documented) |
| Integration Expectations | RF3 | Kanban standalone vs metadata; RW frontmatter; future Doc Housekeeping Workflow; greenfield-install parity note |
| Package Composition | RF4, RF8 | On-disk tree + documented-future entries (workflows/, scripts/) |
| Behavioral Expectations | RF2 | Agent-driven management, default-to-evergreen, audit trail preservation |
| Configuration / Adoption Expectations | RF1 | IMPLEMENTATION_GUIDE steps, template usage, optional default customization |
| Sources | RF5 | Bulleted path list to package docs read |

Task doc holds executive summary + links; companion holds full baseline body (E02:S13:T02 housing pattern inverted — T01 precedent used inline in task doc; orchestration recommends companion for ai-dev-kit E10).

### 2.3 Constraints

- No edits to `packages/frameworks/doc-lifecycle/` functional content during T01 (baseline extraction only).
- Do not prescribe `--doc-policy-zero` for release (BR-097).
- RW must run on branch `epic/10-doc-lifecycle-framework` (orchestration plan §2.1).

### 2.4 Status transition intent (mandatory)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All acceptance criteria satisfied; V1–V8 verification checklist passed; forensic marker `✅ COMPLETE (v0.10.1.1+{N})` after `RW E10:S01:T01 --art`.
- **Atomic propagation requirement:** Task doc status, story checklist row, and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution agent (not IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: extract baseline from existing package docs (E02:S13:T01 precedent) |
| T2 | Reversibility | N | Doc-only artefact; one-PR revert |
| T3 | Blast radius | N | Confined to kanban story folder + implementation-cycles IPP |
| T4 | Precedent | N | Follows established package review pattern; not a new canonical architecture choice |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | N | Documents existing package policies; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files listed in §4.1 only |
| E2 | No new options | Y | Implements E02:S13:T01 + orchestration plan §7.4 |
| E3 | Reversible in one task | Y | Doc revert without migration |
| E4 | Spec elsewhere | Y | Package policies are sources; baseline is derived inventory |
| E5 | Documented NONE | Y | §5.3 cites E02:S13:T01 + orchestration plan |

---

## 3. Test design

**`--skip-tests` justification:** T01 is a **review/documentation artefact task** with **no executable code** deliverable. The package under review is itself a pure policy/documentation framework. Verification is **structural inspection** of the expectations baseline against source package docs and the E02:S13:T01 precedent — not pytest or script execution. Automated tests would not exercise T01 acceptance criteria meaningfully.

### 3.1 Verification checklist (V1–V8)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Core principles | Section covers purpose, modularity, copy pattern, independence 10/10, customization boundaries |
| V2 | Lifecycle behaviors | All three lifecycle types + TTL + reference-aware cleanup + protection rules documented |
| V3 | Integration | Kanban + Workflow Mgt integration expectations present with optional/standalone notes |
| V4 | Package composition | On-disk paths match orchestration plan §3.1; future scripts/workflows noted as documented-not-present |
| V5 | Sources | Every major section has ≥1 cited package path |
| V6 | Task doc completeness | Scope, Input, Deliverable, AC (all checkboxes), References populated |
| V7 | Wiring | Bidirectional links: task ↔ IPP ↔ companion baseline |
| V8 | Scope guard | No inventory gap tables (T02), no repo frontmatter audit (T03), no package file edits |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T01` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Read package sources: README, PACKAGE_OVERVIEW, PACKAGE_PROPOSAL, IMPLEMENTATION_GUIDE, policies/, integration/, templates/, docs/ | Reading notes (internal) |
| 3 | Create companion `expectations-baseline.md` under story folder with sections per §2.2 | Companion artefact |
| 4 | Extract core operating principles (RF1) into companion §Core Operating Principles | Baseline section |
| 5 | Document expected lifecycle behaviors (RF2): classification, TTL, cleanup, agent rules, protection | Baseline section |
| 6 | Capture integration expectations (RF3): Kanban, Workflow Mgt, RW frontmatter, future housekeeping | Baseline section |
| 7 | Map package composition (RF4): on-disk inventory + documented-future entries | Baseline section |
| 8 | Add Sources section (RF5) with full path list | Baseline section |
| 9 | Flesh out T01 task doc: Scope, Input, Deliverable, Acceptance Criteria, References; link companion | Task doc |
| 10 | Update story checklist row for T01 (still open until COMPLETE) | Story doc |
| 11 | Run verification checklist V1–V8; record pass notes in task doc or companion footer | Verification evidence |
| 12 | **`RW E10:S01:T01 --art`** — full 12-step RW on `epic/10-doc-lifecycle-framework`; Step 7 four-surface kanban reconciliation | Release `v0.10.1.1+1` (first BUILD) |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T01` status** to actual state: if V1–V8 pass → `COMPLETE` + `✅ COMPLETE (v0.10.1.1+1)`; if incomplete → remain `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. Sync story checklist + `kboard.md`. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Prescribe **`RW E10:S01:T01 --art`** only. Do **not** use `--doc-policy-zero` for follow-on verification waves.

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md` |
| UPDATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md` |
| UPDATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` (checklist narrative) |
| UPDATE (RW Step 7) | `docs/project-management/kanban/kboard.md` — T01 row status/version |
| EXISTS | `docs/implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md` (this file) |

### 4.2 Dependency order

1. Read package docs → draft companion baseline sections
2. Update T01 task doc (Scope/AC/References) → link companion
3. V1–V8 verification → RW → status reconciliation

### 4.3 Documentation implementation steps

1. Companion baseline first (authoritative body)
2. Task doc executive summary + AC checkboxes second
3. Story/kboard sync via RW Step 7 last

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/step) |
| ------ | ---- | --------------- | --------------------- |
| D-U1 | `T01-establish-expectations-baseline-for-document-lifecycle-packa.md` | Scope, Input, Deliverable, AC, References, IPP link, status transitions | RF6; Step 1, 9, N |
| D-U2 | `story-01-document-lifecycle-package-implementation-review.md` | T01 checklist row version marker on COMPLETE | RF7; Step N |
| D-U3 | `kboard.md` | T01 row: status, version, MoSCOW hygiene if promoted | RW Step 7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/step) |
| ------ | ------------- | ------- | ------------------- |
| D-C1 | `story-01-.../expectations-baseline.md` | Authoritative expectations baseline body | RF1–RF5; Steps 3–8 |
| D-C2 | `docs/implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md` | This IPP (planning package) | IPW Phase 7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| T01 task doc FR-016 stub | **UPDATE** D-U1 during implementation (Step 9) |
| Missing `workflows/`, `scripts/` on disk | **NONE in T01** — note as documented-future in baseline composition; T02 inventories gaps |
| Repo ADRs vs package policies drift | **NONE in T01** — T04 integration alignment |
| Policy salience schema (`policy_salience` frontmatter) | **INCLUDE in baseline** if covered in package `docs/policy-salience-*`; deep validation in T03 |
| Docusaurus portal surfacing | **NOT_APPLICABLE** — kanban/companion artefacts not portal-published (BR-066) |
| ADR for baseline approach | **NONE** — §2.5 EXEMPT; governed by E02:S13 precedent + orchestration plan |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C2 | `docs/implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md` | NOT_APPLICABLE | Internal planning artefact | evergreen | T01 Input/References |
| D-C1 | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md` | NOT_APPLICABLE | Kanban story artefact | evergreen | T01 Deliverable/References; T02 Input |
| D-U1 | `.../T01-establish-expectations-baseline-for-document-lifecycle-packa.md` | NOT_APPLICABLE | Kanban task doc | evergreen | Story checklist; kboard |
| D-U2 | `.../story-01-document-lifecycle-package-implementation-review.md` | NOT_APPLICABLE | Story doc | evergreen | Epic-10.md |
| D-U3 | `docs/project-management/kanban/kboard.md` | NOT_APPLICABLE | Active board | evergreen | — |

**Housing rules:** One authoritative baseline per package review (companion D-C1). IPP remains under `docs/implementation-cycles/`. T02+ cite D-C1 as expectations SoT.

---

## 7. Success / verification criteria

- [ ] Companion `expectations-baseline.md` exists with all §2.2 sections populated
- [ ] T01 task doc Scope, Input, Deliverable, Acceptance Criteria, References complete
- [ ] All six story-level AC bullets for T01 slice checked (core principles, behaviors, integration, composition, sources, baseline approved)
- [ ] V1–V8 verification checklist passed with evidence noted
- [ ] `RW E10:S01:T01 --art` complete → `v0.10.1.1+1`
- [ ] Task status reconciled to `COMPLETE` with forensic marker (or documented `BLOCKED`/`IN PROGRESS` with reason)
- [ ] All §5 UPDATE/CREATE items implemented
- [ ] Bidirectional links: task ↔ IPP ↔ companion resolve

---

## References

- [E10S01 orchestration plan](./E10S01-orchestration-plan.md)
- [T01 task doc](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T01-establish-expectations-baseline-for-document-lifecycle-packa.md)
- [Story E10:S01](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md)
- [E02:S13:T01 precedent — expectations baseline](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T01-expectations-baseline.md)
- Package root: `packages/frameworks/doc-lifecycle/`
- Adopter mirror: `greenfield-install/packages/frameworks/doc-lifecycle/`
- [FR-042 — IPW](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-094 — IPW task state mandate](../project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [FR-100 — ADR necessity checklist](../project-management/kanban/fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [dev-kit-ipw-ipp-vs-icw-artifacts.md](../governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)
- `.claude/commands/ipw.md`
