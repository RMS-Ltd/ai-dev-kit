---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T09 — Planning: Sync Architecture ADR Dual SoT (IPW)

**Host Task:** [`T09-sync-architecture-adr-dual-sot.md`](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md) **(E10:S01:T09)**  
**Planning for:** [GAP-DOCLIFE-INTG-001](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) · [T04 integration alignment §5](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md) · [T06 remediation R2](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)  
**Status:** Approved (planning complete — awaiting implementation authorization)  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Document **canonical SoT vs mirror** assignment for each doc-lifecycle policy topic (`metadata-spec`, `lifecycle-policy`, `policy-salience-schema`) | T09 Scope; T05 Gap 4; T04 §5 D6/D7 |
| RF2 | **Content-align** package `policies/` and architecture ADR copies for the metadata-spec + lifecycle-policy pair, or guard drift with explicit mirror banners and maintainer checklist | T09 Deliverable; T04 diff summary (substantive content already equivalent) |
| RF3 | **House `policy-salience-schema.md`** in the correct canonical location with bidirectional cross-links from package salience docs and architecture tree | T09 AC; T04 D7; package `docs/policy-salience-*.md` currently link to architecture-only path |
| RF4 | **Fix relative-link path drift** between package and architecture surfaces (`./file.md` vs bare `file.md`; broken `kb-structure-overview.md` reference) | T04 §5; T05 Gap 15 (kb-structure-overview) |
| RF5 | **greenfield-install mirror parity** (FR-110): canonical package tree byte-synced after policy changes | T09 Scope; T04 §6 (currently ALIGNED) |
| RF6 | **Re-validate T04 integration domains 5–6** (Architecture ADR dual SoT, greenfield parity) with evidence recorded on T09 task doc | T09 AC |
| RF7 | Wire IPP bidirectionally; satisfy FR-083 gate before implementation | T09 AC; FR-083 |
| RF8 | Close **GAP-DOCLIFE-INTG-001** tracking on T05 with remediation evidence | T06 R2; T05 Gap 4 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Follow repo-wide **framework SoT / dev-kit mirror** pattern (`packages/frameworks/*` portable; `docs/architecture/standards-and-adrs/*` repo navigation mirror) | [repo-structure-for-adopters.md](../documentation/user-docs/repo-structure-for-adopters.md); [ai-dev-kit-project-review.md §2](../architecture/standards-and-adrs/ai-dev-kit-project-review.md) |
| RNF2 | **No functional code** in T09 — documentation, cross-links, optional lightweight drift-check script only (validator fix is T10; housekeeping workflow is T08) | T09 Out of scope |
| RNF3 | Maintainer-facing **dual-source parity checklist** (RW `rw-trigger-dual-source-parity.md` precedent) for future edits | workflow-mgt dual-source pattern |
| RNF4 | RW prescription: **`RW E10:S01:T09 --art`** only (BR-097) | `.cursorrules`; BR-097 |
| RNF5 | Preserve **adopter portability** — architecture paths must not be required inside portable package prose except as optional “dev-kit instance” notes | T01 expectations; FR-110 |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Gap ID **GAP-DOCLIFE-INTG-001** closes when SoT policy is documented, surfaces synchronized, and T04 domains 5–6 re-score **ALIGNED** or **PARTIAL** with documented residual (none expected).
  - Package independence score (10/10) unchanged — no new hard dependencies.
  - greenfield-install must remain `diff -rq` clean vs canonical after implementation.
- **In scope:** Policy pair sync, salience schema housing, cross-links, mirror banners, maintainer parity doc, architecture ADR, T04 re-validation notes, T05 gap tracking update.
- **Out of scope:** Doc housekeeping workflow/scripts ([E10:S01:T08](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md)); `DocumentLifecycleValidator` fix ([E10:S01:T10](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md)); `.cursorrules` five-field alignment (T06 R4); `DOCUMENT_TEMPLATE` fenced-block fix (T06 R7).

---

## 2. Specification

### 2.1 Goal

Establish a **single authoritative surface per policy topic** for the Document Lifecycle framework package, synchronize the dev-kit architecture ADR mirrors, add the missing **`policy-salience-schema.md`** to the portable package tree, and eliminate relative-link drift — resolving **GAP-DOCLIFE-INTG-001** so adopters and repo agents share one clear SoT/mirror contract.

### 2.2 Specification mapping from ascertained requirements

| RF | Specification outcome |
| -- | --------------------- |
| RF1 | ADR + parity checklist table: per-file SoT locus and mirror path (§5 D-ADR, D-PAR) |
| RF2 | Metadata-spec + lifecycle-policy: package `policies/` = SoT; architecture copies = mirrors with top-of-file banner + content sync |
| RF3 | `policy-salience-schema.md` canonical in package `policies/`; architecture file becomes mirror; package salience docs use package-relative links |
| RF4 | Normalize link conventions; resolve or remove broken `kb-structure-overview.md` reference (NONE stub or CREATE pointer — see §5.3) |
| RF5 | Copy/sync canonical → `greenfield-install/packages/frameworks/doc-lifecycle/` after edits |
| RF6 | T09 verification table re-runs T04 V5/V6 checks |
| RF7–RF8 | IPP wiring + T05 Gap 4 tracking closure on RW |

### 2.3 Constraints

- **Selected SoT model (T1 decision):** Package `packages/frameworks/doc-lifecycle/policies/` is **framework SoT** for all three policy artefacts; `docs/architecture/standards-and-adrs/` holds **maintained mirrors** for dev-kit repo navigation (matches numbering-versioning / kanban / repo-structure-for-adopters pattern).
- **Rejected alternatives:** (a) architecture-only SoT with package stubs — breaks FR-110 portable adoption; (b) duplicate independent SoT with manual sync only — preserves drift risk (current state).
- Architecture mirrors MUST include a standard banner block citing package SoT path (no silent duplication).
- Link convention: **package policies** use `./`-prefixed sibling links; **architecture mirrors** use bare sibling links within `standards-and-adrs/`.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (§4 Step 1).
- **Transition trigger to COMPLETE:** All T09 AC satisfied; T04 domains 5–6 re-validated; forensic marker via `RW E10:S01:T09 --art`.
- **Atomic propagation requirement:** Task doc status, T05 Gap 4 tracking, and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | **Y** | Three viable SoT models evaluated (§2.3); package-SoT + architecture-mirror selected |
| T2 | Reversibility | N | Doc-only revert; no migration or API |
| T3 | Blast radius | **Y** | Touches framework package, greenfield-install, architecture ADRs, cross-package salience links |
| T4 | Precedent | **Y** | Establishes canonical doc-lifecycle packaging policy cited by future maintenance |
| T5 | Constraint trade-off | N | Applies existing repo framework/mirror pattern without new trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Clarifies T01 “separate surface” note; does not contradict existing ADRs |

**Outcome:** `REQUIRED` — create focused ADR documenting SoT/mirror contract.

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1–E5 | — | — | Not applicable (REQUIRED outcome) |

---

## 3. Test design

Doc/config-only task — verification is **structural inspection and diff-based**, not pytest. No executable package code changes.

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| T1 | SoT/mirror policy documented | ADR exists; parity checklist lists all three policy files with SoT + mirror paths | RF1 |
| T2 | Metadata-spec content parity | `diff` package SoT vs architecture mirror: body equivalent except banner + path-normalized links | RF2 |
| T3 | Lifecycle-policy content parity | Same as T2 for `doc-lifecycle-policy.md` | RF2 |
| T4 | Salience schema housed in package | `ls packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md` exists; architecture mirror present with banner | RF3 |
| T5 | Salience cross-links resolve | Grep package `docs/` + `templates/POLICY_SALIENCE_TEMPLATE.md` — links target package SoT (or architecture mirror), no dangling paths | RF3, RF4 |
| T6 | greenfield-install parity | `diff -rq packages/frameworks/doc-lifecycle greenfield-install/packages/frameworks/doc-lifecycle` exit 0 | RF5 |
| T7 | T04 domain 5 re-score | Integration report domains 5–6 notes updated or T09 verification table shows V5/V6 **PASS** | RF6 |
| T8 | kb-structure-overview reference | Broken link removed or replaced with valid target (see §5.3) | RF4 |
| T9 | Gap closure | T05 Gap 4 tracking shows COMPLETE with version anchor | RF8 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T09` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Create ADR **`docs/architecture/standards-and-adrs/ADR-0XX-doc-lifecycle-package-architecture-dual-sot.md`** (assign next free ADR number at implementation time) documenting SoT/mirror table per §2.3 | ADR published |
| 3 | Add standard **mirror banner** template to architecture copies of `doc-lifecycle-metadata-spec.md` and `doc-lifecycle-policy.md`; sync body content from package SoT | Architecture mirrors bannered + aligned |
| 4 | **COPY** `policy-salience-schema.md` from architecture to **`packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md`** (package SoT); add mirror banner to architecture copy; ensure 5-field frontmatter on both | Salience schema dual-surface complete |
| 5 | Update package **`docs/policy-salience-guide.md`**, **`docs/policy-salience-agent-parser.md`**, **`templates/POLICY_SALIENCE_TEMPLATE.md`** links: primary → `./../policies/policy-salience-schema.md`; optional dev-kit note → architecture mirror | Cross-links normalized |
| 6 | Fix **`kb-structure-overview.md`** broken reference in metadata-spec + lifecycle-policy (remove link or add NONE note pointing to `ultimate-canonical-kb-structure.md` if appropriate) | Gap 15 resolved |
| 7 | Create **`packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md`** maintainer checklist (mirror `rw-trigger-dual-source-parity.md` pattern): merge order, diff commands, greenfield sync step | Parity checklist |
| 8 | Update **`packages/frameworks/doc-lifecycle/README.md`** §Package Structure — list `policies/policy-salience-schema.md`; add SoT/mirror note + link to ADR and parity doc | README accurate |
| 9 | Update **`PACKAGE_PROPOSAL.md`** Related links to package `policies/` SoT (partial Gap 11 fix in-scope) | Proposal links corrected |
| 10 | Sync **`greenfield-install/packages/frameworks/doc-lifecycle/`** from canonical (`cp -R` or documented parity step) | FR-110 parity |
| 11 | Re-run T04 V5/V6 evidence commands; record results in T09 **Verification** section | Domain 5–6 PASS |
| 12 | Update **T05 Gap 4** tracking field with COMPLETE + version; update T06 R2 status if checklist present | Gap closed |
| 13 | **`RW E10:S01:T09 --art`** — version, changelog, kanban Step 7, commit, tag (local; no push unless operator adds `--push`) | Release `v0.10.1.9+1` (expected first BUILD) |
| **14** | **[MANDATORY] Reconcile task `E10:S01:T09` status** to actual state: if all ACs satisfied → `COMPLETE` + `✅ COMPLETE (v{version})`; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated`. | Task doc status reflects evidence |

**RW verification / FBU wave rule (BR-097):** Step 13 prescribes **`RW E10:S01:T09 --art`** only.

### 4.1 Files to create or modify

**CREATE:**

- `docs/architecture/standards-and-adrs/ADR-0XX-doc-lifecycle-package-architecture-dual-sot.md`
- `packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md`
- `packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md`

**UPDATE:**

- `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md` (mirror banner + sync)
- `docs/architecture/standards-and-adrs/doc-lifecycle-policy.md` (mirror banner + sync)
- `docs/architecture/standards-and-adrs/policy-salience-schema.md` (mirror banner)
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md` (kb-structure link fix)
- `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md` (kb-structure link fix)
- `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md`
- `packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md`
- `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md`
- `packages/frameworks/doc-lifecycle/README.md`
- `packages/frameworks/doc-lifecycle/PACKAGE_PROPOSAL.md`
- `greenfield-install/packages/frameworks/doc-lifecycle/` (full tree sync)
- `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md`
- `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md` (Gap 4 tracking)

### 4.2 Dependency order

1. ADR (Step 2) — defines contract before edits.
2. Package SoT files (Steps 3–6) — content authority first.
3. Architecture mirrors (Steps 3–4) — derive from package.
4. Cross-link updates (Step 5) — after SoT paths stable.
5. README / PACKAGE_PROPOSAL / parity doc (Steps 7–9).
6. greenfield sync (Step 10) — after canonical stable.
7. Verification + gap tracking (Steps 11–12).
8. RW (Step 13) — last.

### 4.3 Documentation implementation steps

1. ADR + parity checklist before mirror banners (maintainers need contract first).
2. Package `policies/` edits before architecture mirrors.
3. Salience doc link updates after schema file exists in package.
4. greenfield-install sync as penultimate doc step.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to |
| ------ | ---- | --------------- | ------- |
| D-U1 | `docs/architecture/standards-and-adrs/doc-lifecycle-metadata-spec.md` | Add mirror banner; sync from package SoT; architecture-relative links | RF2, Step 3 |
| D-U2 | `docs/architecture/standards-and-adrs/doc-lifecycle-policy.md` | Same as D-U1 | RF2, Step 3 |
| D-U3 | `docs/architecture/standards-and-adrs/policy-salience-schema.md` | Add mirror banner pointing to package SoT | RF3, Step 4 |
| D-U4 | `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md` | Fix kb-structure link; confirm SoT banner/footer | RF4, Step 6 |
| D-U5 | `packages/frameworks/doc-lifecycle/policies/doc-lifecycle-policy.md` | Same as D-U4 | RF4, Step 6 |
| D-U6 | `packages/frameworks/doc-lifecycle/docs/policy-salience-guide.md` | Primary link → package policies path | RF3, Step 5 |
| D-U7 | `packages/frameworks/doc-lifecycle/docs/policy-salience-agent-parser.md` | Same as D-U6 | RF3, Step 5 |
| D-U8 | `packages/frameworks/doc-lifecycle/templates/POLICY_SALIENCE_TEMPLATE.md` | Same as D-U6 | RF3, Step 5 |
| D-U9 | `packages/frameworks/doc-lifecycle/README.md` | Package tree + SoT/mirror note | RF1, Step 8 |
| D-U10 | `packages/frameworks/doc-lifecycle/PACKAGE_PROPOSAL.md` | Related links → package policies | RF1, Step 9 |
| D-U11 | `greenfield-install/packages/frameworks/doc-lifecycle/**` | Full mirror sync | RF5, Step 10 |
| D-U12 | T09 task doc | Verification table, AC checkboxes, status | RF6–RF7 |
| D-U13 | T05 gap log Gap 4 | Tracking → COMPLETE with version | RF8, Step 12 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to |
| ------ | ------------- | ------- | ------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-0XX-doc-lifecycle-package-architecture-dual-sot.md` | Canonical SoT/mirror decision record | §2.5 REQUIRED; Step 2 |
| D-C2 | `packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md` | Portable SoT for salience schema | RF3, Step 4 |
| D-C3 | `packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md` | Maintainer dual-source parity checklist | RNF3, Step 7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| `kb-structure-overview.md` missing from package | **NONE** — remove broken link from metadata-spec + lifecycle-policy; optional one-line pointer to `docs/architecture/standards-and-adrs/ultimate-canonical-kb-structure.md` in Related Documents (out of package tree) |
| T04 `integration-alignment-report.md` companion | **UPDATE optional** — add footnote that T09 re-validated domains 5–6; primary evidence lives on T09 verification table |
| `.cursorrules` Document Lifecycle section | **NONE** — GAP-DOCLIFE-INTG-002 / T06 R4 |
| `DOCUMENT_TEMPLATE.md` fenced frontmatter | **NONE** — GAP-DOCLIFE-DOC-003 / T06 R7 |
| Automated drift validator script | **NONE for v1** — manual `diff` in parity checklist; optional follow-up FR if drift recurs |
| Docusaurus portal surfacing | **NONE** — architecture ADRs already indexed; no new public portal nav required |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/architecture/standards-and-adrs/ADR-0XX-doc-lifecycle-package-architecture-dual-sot.md` | PUBLISHED | — | evergreen | T09 References; package README; parity doc |
| D-C2 | `packages/frameworks/doc-lifecycle/policies/policy-salience-schema.md` | PUBLISHED | — | evergreen | Salience guide, template, ADR |
| D-C3 | `packages/frameworks/doc-lifecycle/docs/adr-dual-sot-parity.md` | PUBLISHED | — | evergreen | Package README; ADR |
| D-U1–D-U3 | Architecture mirror paths | PUBLISHED | — | evergreen | ADR §Mirrors |
| D-U4–D-U10 | Package paths | PUBLISHED | — | evergreen | README, IPP §References |
| D-U11 | greenfield-install mirror | PUBLISHED | — | evergreen | FR-110; parity doc Step 4 |
| D-U12–D-U13 | Kanban task docs | NOT_APPLICABLE | Internal kanban artefacts | evergreen | IPP Host Task link |
| IPP (this doc) | `docs/implementation-cycles/IPP-E10S01T09-sync-architecture-adr-dual-sot.md` | NOT_APPLICABLE | Planning artefact per spec-and-planning policy | evergreen | T09 Input + References |

**Housing rules:** One authoritative doc per topic — package `policies/` for portable SoT; architecture ADRs for dev-kit mirrors only.

---

## 7. Success / verification criteria

- [ ] ADR documents SoT/mirror table for metadata-spec, lifecycle-policy, and policy-salience-schema
- [ ] Package `policies/` contains all three policy artefacts; architecture copies carry mirror banners
- [ ] `diff` confirms metadata-spec + lifecycle-policy body parity (banner/link normalization only)
- [ ] Package salience docs link to package SoT path without dangling references
- [ ] `diff -rq` canonical vs greenfield-install doc-lifecycle tree — exit 0
- [ ] T09 verification table records T04 V5/V6 **PASS**
- [ ] T05 Gap 4 (GAP-DOCLIFE-INTG-001) tracking updated to COMPLETE with version
- [ ] All §5 UPDATE/CREATE items implemented or explicitly deferred with reason in task doc
- [ ] IPP bidirectionally linked from T09 task doc
- [ ] **`RW E10:S01:T09 --art`** completes with forensic marker on task doc

---

## References

- [T09 task doc](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T09-sync-architecture-adr-dual-sot.md)
- [T05 gap log — Gap 4 GAP-DOCLIFE-INTG-001](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [T04 integration alignment report §5](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/integration-alignment-report.md)
- [T06 remediation R2](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T02 component inventory §7](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/component-inventory-map.md)
- [expectations-baseline.md](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/expectations-baseline.md)
- [repo-structure-for-adopters.md](../documentation/user-docs/repo-structure-for-adopters.md)
- [rw-trigger-dual-source-parity.md](../../packages/frameworks/workflow-mgt/docs/rw-trigger-dual-source-parity.md) (precedent)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [specification-and-planning-artifacts-policy.md](../governance/standards/specification-and-planning-artifacts-policy.md)
