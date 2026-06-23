---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T02 — Planning: Inventory Package Components and Map to Expectations (IPW)

**Host Task:** [`T02-inventory-package-components-and-map-to-expectations.md`](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md) **(E10:S01:T02)**  
**Planning for:** [T01 expectations baseline](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md) *(planned companion — see Blockers)* · [E10S01 orchestration plan](./E10S01-orchestration-plan.md) §7.4 T02  
**Status:** Implemented — companion + task doc published; RW v0.10.1.2+1  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Categorized component inventory of `packages/frameworks/doc-lifecycle/` covering all T01 composition classes (core docs, policies, templates, integration, docs/, documented-future workflows/scripts) | T01 IPP §2.2 Package Composition; orchestration plan §3.1; Story AC |
| RF2 | Map each component to T01 expectations with coverage status: `Met` \| `Partial` \| `Gap` \| `Undocumented` \| `Superseded` | Task deliverable; E02:S13:T02 precedent; E02 companion legend |
| RF3 | Expected vs actual gap summary table for T05 remediation input | E02:S13:T02 RF3; orchestration plan §3.2 |
| RF4 | **Greenfield-install mirror parity** (FR-110): file-level inventory of `greenfield-install/packages/frameworks/doc-lifecycle/` vs canonical package | README §Adopter distribution; orchestration plan §3; T01 IPP RF8 |
| RF5 | Flag **documented-but-absent** artefacts (`workflows/doc-housekeeping-workflow.yaml`, `scripts/validate_lifecycle_metadata.py`, `scripts/housekeeping_scanner.py`) with evidence | Orchestration plan §3.2; PACKAGE_OVERVIEW §Workflows/Scripts |
| RF6 | Flag **on-disk-but-underdocumented** artefacts (`docs/policy-salience-*`, `templates/POLICY_SALIENCE_TEMPLATE.md`, `PACKAGE_PROPOSAL.md`) vs README/PACKAGE_OVERVIEW tree | On-disk walk 2026-06-06; README §Package Structure omits `docs/` and salience template |
| RF7 | Update T02 task doc: Scope, Input, Deliverable, Acceptance Criteria, gap summary, IPP wiring | FR-016 stub remediation; FR-042, FR-094 |
| RF8 | Satisfy Story AC slice: **Component inventory mapped to expectations** | Story E10:S01 §Acceptance Criteria |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Inventory-only** — document gaps; no package fixes, validator implementation, or workflow YAML creation (T05/T06/Wave 3) | E02:S13:T02 RNF1; orchestration plan §7.4 T02 |
| RNF2 | Every gap row cites evidence (path, T01 ref, orchestration §3.2 note, or "not found") | E02:S13:T02 RNF2 |
| RNF3 | Companion file `component-inventory-map.md` is evergreen; task doc holds executive gap summary | E02:S13 housing pattern |
| RNF4 | **Structural precedent:** mirror E02:S13:T02 companion taxonomy adapted to doc-lifecycle (pure policy package — no script-area counts like workflow-mgt) | IPP-E02S13T02; orchestration plan §4 |
| RNF5 | Repo architecture ADRs under `docs/architecture/standards-and-adrs/` noted as **cross-check deferred to T04** — inventory may flag path duplication, not resolve drift | Orchestration plan §3.3; T01 IPP RNF5 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Package is pure documentation/policy (10/10 independence; no runtime dependencies).
  - Canonical + greenfield mirror each contain **13 files** on disk (2026-06-06 `diff -rq` — identical trees).
  - Coverage legend matches E02:S13 companion.
- **In scope:** Package tree walk; greenfield mirror parity; T01 composition mapping; companion + task summary.
- **Out of scope:** Behavioral validation against repo frontmatter (T03); architecture ADR drift resolution (T04); gap severity scoring (T05); RC sign-off (T06); implementing missing scripts/workflows; README/PACKAGE_OVERVIEW content fixes.

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **component inventory map** showing what the Document Lifecycle package actually contains versus the T01 expectations baseline, enabling T03–T06 RC review from evidence — mirroring the completed E02:S13:T02 pattern for workflow-mgt.

### 2.2 Specification mapping from ascertained requirements

The companion artefact `component-inventory-map.md` under the story folder SHALL contain these taxonomy sections (adapted from E02:S13:T02 for a pure doc/policy package):

| Section | RF coverage | Content |
| ------- | ----------- | ------- |
| **Summary — Expected vs Actual Gap Table** | RF2, RF3, RF5 | Top-level gap rows feeding T05 |
| **1. Core Package Docs** | RF1 | README, PACKAGE_OVERVIEW, PACKAGE_PROPOSAL, IMPLEMENTATION_GUIDE |
| **2. Policies** | RF1 | `policies/doc-lifecycle-metadata-spec.md`, `policies/doc-lifecycle-policy.md` |
| **3. Templates** | RF1, RF6 | DOCUMENT_TEMPLATE, LIFECYCLE_EXAMPLES, POLICY_SALIENCE_TEMPLATE |
| **4. Integration Guides** | RF1 | kanban-integration, workflow-mgt-integration |
| **5. docs/ Extensions** | RF1, RF6 | policy-salience-guide, policy-salience-agent-parser |
| **6. Workflows & Scripts (Documented Future)** | RF5 | Expected paths from README/PACKAGE_OVERVIEW; on-disk status |
| **7. Adopter Mirror & Cross-Cutting Drift** | RF4, RNF5 | greenfield-install parity; README tree vs actual; repo ADR duplicates; PACKAGE_PROPOSAL "Proposal" status |

Each inventory row: **Component path**, **Purpose**, **T01 ref**, **Status**, **Notes**.

Task doc holds condensed gap summary + AC checkboxes; companion holds detailed tables (E02:S13 pattern).

### 2.3 Constraints

- Housing: detailed tables in companion; gap summary in T02 task doc.
- No modifications to `packages/frameworks/doc-lifecycle/` or `greenfield-install/.../doc-lifecycle/` during T02.
- Implementation **hard-depends** on T01 companion `expectations-baseline.md` (or equivalent complete T01 baseline body) for T01 ref column — see Blockers.
- RW: **`RW E10:S01:T02 --art`** only (BR-097); target version `v0.10.1.2+1` per orchestration plan §8.5.

### 2.4 Status transition intent (mandatory)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** V1–V8 verification checklist passed; companion + task doc published; forensic marker `✅ COMPLETE (v0.10.1.2+1)` after `RW E10:S01:T02 --art`.
- **Atomic propagation requirement:** Task doc status, story checklist row, and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution agent (not IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: companion inventory + task summary (E02:S13:T02 precedent) |
| T2 | Reversibility | N | Doc-only artefact; one-PR revert |
| T3 | Blast radius | N | Confined to kanban story folder + implementation-cycles IPP |
| T4 | Precedent | N | Follows established package review inventory pattern |
| T5 | Constraint trade-off | N | No security/performance/versioning trade-off |
| T6 | Governance contract | N | Does not alter RW, IPW, UKW, or validator gates |
| T7 | Supersedes | N | Extends T01 baseline; no ADR contradiction |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files listed in §4.1 only |
| E2 | No new options | Y | Implements E02:S13:T02 + orchestration plan §7.4 T02 |
| E3 | Reversible in one task | Y | Doc revert without migration |
| E4 | Spec elsewhere | Y | T01 baseline + E02 companion pattern govern structure |
| E5 | Documented NONE | Y | §5.3 cites E02:S13:T02 + orchestration plan |

---

## 3. Test design

**`--skip-tests` justification:** T02 is a **review/documentation artefact task** with **no executable code** deliverable. The package under review is a pure policy/documentation framework. Verification is **structural inspection** of the inventory map against T01 expectations, on-disk package walk, and greenfield mirror parity — not pytest or script execution. Automated tests would not exercise T02 acceptance criteria meaningfully (same rationale as orchestration plan §7.1 `--skip-tests` for all E10:S01 tasks).

### 3.1 Verification checklist (V1–V8)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | T01 composition categories | Every T01 Package Composition class has companion section with ≥1 row |
| V2 | On-disk file count | Canonical package: 13 files; greenfield mirror: 13 files; paths listed match `find` output |
| V3 | Documented-future gaps | `workflows/` and `scripts/` expected entries present in §6 with **Gap** or **Undocumented** status |
| V4 | Gap summary | Summary table includes orchestration §3.2 rows + salience/docs drift + mirror parity |
| V5 | Path evidence | Gap/Undocumented rows include path or "not found" |
| V6 | Scope guard | No edits to `packages/frameworks/doc-lifecycle/` or greenfield mirror |
| V7 | Wiring | Bidirectional links: task ↔ IPP ↔ companion resolve |
| V8 | T01 linkage | Each major section cites T01 baseline section (blocked if T01 companion missing — record partial pass with note) |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T02` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Confirm T01 companion `expectations-baseline.md` exists and is linked; if missing, **stop** and complete T01 implementation first | Prerequisite gate |
| 3 | Run structured inventory: `find` on canonical + greenfield paths; record 13-file parity | Inventory notes |
| 4 | Create companion `component-inventory-map.md` with §2.2 taxonomy (Summary + sections 1–7) | Companion artefact |
| 5 | Map each row to T01 baseline section + coverage status | Mapped tables |
| 6 | Populate Summary gap table: missing workflows/scripts, README tree omissions, PACKAGE_PROPOSAL status, salience docs, repo ADR duplication note | Gap tables |
| 7 | Flesh out T02 task doc: Scope, Input, Deliverable, AC, condensed gap summary, References | Task doc |
| 8 | Optional: add T01 footnote → companion inventory (E02 pattern) | T01 cross-ref |
| 9 | Run verification checklist V1–V8; record pass notes in task doc | Verification evidence |
| 10 | **`RW E10:S01:T02 --art`** — full RW on `epic/10-doc-lifecycle-framework`; Step 7 four-surface kanban reconciliation | Release `v0.10.1.2+1` |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T02` status** to actual state: if V1–V8 pass → `COMPLETE` + `✅ COMPLETE (v0.10.1.2+1)`; if incomplete → remain `IN PROGRESS`; if blocked → `BLOCKED` + reason. Update `Last updated`. Sync story checklist + `kboard.md`. | Task doc status reflects actual state |

**RW verification rule (BR-097):** Prescribe **`RW E10:S01:T02 --art`** only. Do **not** use `--doc-policy-zero` for follow-on verification waves.

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md` |
| UPDATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md` |
| UPDATE | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` (checklist on COMPLETE) |
| UPDATE (optional) | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md` — inventory pointer footnote |
| UPDATE (RW Step 7) | `docs/kanban/kboard.md` — T02 row status/version |
| EXISTS | `docs/implementation-cycles/IPP-E10S01T02-component-inventory-map.md` (this file) |

### 4.2 Dependency order

1. **T01 companion baseline** must exist (Wave 2A before Wave 2B per orchestration plan §8.4–8.5)
2. Companion inventory → task doc gap summary → optional T01 footnote
3. V1–V8 verification → RW → status reconciliation

### 4.3 Expected gap rows (seed for implementation — not pre-emptive fixes)

| Topic | Expected status | Evidence |
| ----- | --------------- | -------- |
| `workflows/doc-housekeeping-workflow.yaml` | Gap | PACKAGE_OVERVIEW §Workflows; not on disk |
| `scripts/validate_lifecycle_metadata.py` | Gap | PACKAGE_OVERVIEW §Scripts; not on disk |
| `scripts/housekeeping_scanner.py` | Gap | PACKAGE_OVERVIEW §Scripts; not on disk |
| `docs/policy-salience-*` + POLICY_SALIENCE template | Undocumented in README tree | On disk; README §Package Structure omits `docs/` |
| `PACKAGE_PROPOSAL.md` | Partial | On disk; status still "Proposal" |
| Repo ADRs vs package policies | Partial (T04) | Duplicate SoT paths in orchestration §3.3 |
| greenfield-install parity | Met | 13/13 identical files (2026-06-06) |

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/T/step) |
| ------ | ---- | --------------- | --------------------- |
| D-U1 | `T02-inventory-package-components-and-map-to-expectations.md` | Scope, Input, Deliverable, AC, gap summary, IPP link, status | RF7; Steps 1, 7, N |
| D-U2 | `story-01-document-lifecycle-package-implementation-review.md` | T02 checklist row version on COMPLETE | RF8; Step N |
| D-U3 | `kboard.md` | T02 row: status, version | RW Step 7 |
| D-U4 (optional) | `expectations-baseline.md` | Footnote → companion inventory | Step 8 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/T/step) |
| ------ | ------------- | ------- | ------------------- |
| D-C1 | `story-01-.../component-inventory-map.md` | Detailed inventory tables | RF1–RF6; Steps 4–6 |
| D-C2 | `docs/implementation-cycles/IPP-E10S01T02-component-inventory-map.md` | This IPP | IPW Phase 7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| T02 task doc FR-016 stub | **UPDATE** D-U1 during implementation (Step 7) |
| Missing workflows/scripts | **Gap rows in companion** — fix deferred T05/T06/Wave 3 |
| Repo ADR vs package policy drift | **NONE in T02** — note in §7 cross-cutting; T04 owns resolution |
| README/PACKAGE_OVERVIEW tree accuracy | **Gap row** — fix deferred T05 |
| Policy salience deep validation | **Inventory row only** — T03 behavior validation |
| Docusaurus portal | **NOT_APPLICABLE** — kanban/companion artefacts (BR-066) |
| ADR for inventory housing | **NONE** — §2.5 EXEMPT |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C2 | `docs/implementation-cycles/IPP-E10S01T02-component-inventory-map.md` | NOT_APPLICABLE | Internal planning artefact | evergreen | T02 Input/References |
| D-C1 | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md` | NOT_APPLICABLE | Kanban story artefact | evergreen | T02 Deliverable; T05 Input |
| D-U1 | `.../T02-inventory-package-components-and-map-to-expectations.md` | NOT_APPLICABLE | Kanban task doc | evergreen | Story checklist; kboard |
| D-U2 | `.../story-01-document-lifecycle-package-implementation-review.md` | NOT_APPLICABLE | Story doc | evergreen | Epic-10.md |
| D-U3 | `docs/kanban/kboard.md` | NOT_APPLICABLE | Active board | evergreen | — |

**Housing rules:** One authoritative inventory per package review (companion D-C1). IPP under `docs/implementation-cycles/`. T05 cites D-C1 gap summary as remediation input.

---

## 7. Success / verification criteria

- [ ] T01 companion `expectations-baseline.md` exists (prerequisite)
- [ ] Companion `component-inventory-map.md` exists with Summary + sections 1–7
- [ ] T02 task doc Scope, Input, Deliverable, Acceptance Criteria, gap summary complete
- [ ] Greenfield mirror parity documented (13/13 files)
- [ ] Documented-future workflows/scripts flagged as gaps with path evidence
- [ ] V1–V8 verification checklist passed with evidence noted
- [ ] `RW E10:S01:T02 --art` complete → `v0.10.1.2+1`
- [ ] Task status reconciled to `COMPLETE` with forensic marker (or documented `BLOCKED`/`IN PROGRESS` with reason)
- [ ] All §5 UPDATE/CREATE items implemented
- [ ] Bidirectional links: task ↔ IPP ↔ companion resolve

---

## References

- [E10S01 orchestration plan](./E10S01-orchestration-plan.md) — §3 Package snapshot, §7.4 T02, §8.5 Wave 2B
- [T02 task doc](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T02-inventory-package-components-and-map-to-expectations.md)
- [T01 IPP](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) — expectations SoT (companion pending)
- [E02:S13:T02 IPP precedent](./IPP-E02S13T02-inventory-package-components-map.md)
- [E02:S13 component inventory map precedent](../kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md)
- [Story E10:S01](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md)
- Package root: `packages/frameworks/doc-lifecycle/`
- Adopter mirror: `greenfield-install/packages/frameworks/doc-lifecycle/`
- [FR-042 — IPW](../kanban/fbu/FR-042-implementation-planning-workflow-ipw.md)
- [FR-094 — IPW task state mandate](../kanban/fbu/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [FR-110 — greenfield-install adopter mirror](../kanban/fbu/FR-110-lean-adopter-distribution-footprint-and-vendor-bundle.md) *(if filed)*
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- `.claude/commands/ipw.md`
