---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T05 — Planning: Gap Log and Risk Assessment (IPW)

**Host Task:** [`T05-create-gap-log-and-risk-assessment.md`](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) **(E10:S01:T05)**  
**Planning for:** [E10S01 orchestration plan §7.4 T05](./E10S01-orchestration-plan.md) · T01–T04 companions (implementation dependency) · [IPP-E02S13T05 precedent](./IPP-E02S13T05-gap-log-risk-assessment.md)  
**Status:** Implementation complete — awaiting user authorization for RW  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Consolidate T01–T04 review artefacts into one schema-conformant gap log in the **T05 task doc body** (SoT housing — E02:S13 / E03:S04 / E04:S16 pattern) | Story AC; orchestration plan §7.4 T05; gap-log-schema §1 |
| RF2 | Per-gap fields per [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md); ID prefix **`GAP-DOCLIFE-{TYPE}-NNN`** | Orchestration plan §7.4 T05; validate_gap_log.py pattern |
| RF3 | Deduplicate overlapping T02 inventory rows ↔ T03 D* ↔ T04 I* ↔ orchestration §3.2 documented-future artefacts | IPP-E02S13T05 RF3; E02 T05 consolidation map |
| RF4 | **Summary of Direct Document Lifecycle Package Gaps** — package vs external separation | gap-log-schema §1 |
| RF5 | **Risk Assessment** + RC Impact Conclusion (expect **conditional pass** or **DEFER** if HIGH structural gaps persist) | Orchestration plan §7.4 T06; E02:S13:T05 precedent |
| RF6 | Flesh T05 stub: Scope, AC, Input, Approach, Specification/Validation, Next Steps | FR-042, FR-094; FR-016 stub remediation |
| RF7 | Wire IPP bidirectionally; update Story E10:S01 checklist + AC slice | FR-077 |
| RF8 | Feed [T06](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) RC sign-off input and remediation backlog | Story pipeline; orchestration §8.7 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | **Doc-only** — no package code fixes, no validator/workflow implementation in T05 | E02:S13:T05 RNF1; orchestration Wave 2C |
| RNF2 | Every gap cites evidence path or companion report section ID | E02:S13:T05 RNF2 |
| RNF3 | Severity rollup target (post-dedup, planning estimate): **0 Critical · 3–4 High · 8–10 Medium · 2–4 Low** (~14–16 gaps) | T02/T03/T04 IPP seed rows; orchestration §9.1 |
| RNF4 | `validate_gap_log.py --path <T05-doc> --strict` exit 0 before RW | gap-log-schema §5; orchestration §8.6 |
| RNF5 | No separate companion gap-log file — **T05 task doc is authoritative SoT** | E02:S13 T05 pattern; gap-log-schema housing |

### 1.3 Invariants and boundaries

- **Invariants:** No functional edits under `packages/frameworks/doc-lifecycle/` or `greenfield-install/.../doc-lifecycle/`.
- **In scope:** Consolidation, classification, risk posture, kanban/story updates, validator path registration if needed.
- **Out of scope:** Remediation implementation; RC sign-off checklist (T06); package/README/ADR merges; mass repo frontmatter migration (Wave 3).

---

## 2. Specification

### 2.1 Goal

Produce an authoritative **gap log and risk assessment** in the T05 task doc consolidating all E10:S01 review artefacts (T01 expectations, T02 inventory, T03 behavior validation, T04 integration alignment) into deduplicated, severity-ranked `GAP-DOCLIFE-*` entries with **conditional RC posture** for T06 — mirroring the completed E02:S13:T05 pattern for workflow-mgt, adapted for a pure documentation/policy package.

### 2.2 Specification mapping — consolidation map (planning dedup)

Implementation SHALL author **`### Gap N`** entries in the T05 task doc. Planning reconnaissance maps T01–T04 signals to canonical IDs (verify counts during impl):

| Planned ID | Category | Severity (est.) | Primary source | Dedup notes |
| ---------- | -------- | ----------------- | -------------- | ----------- |
| GAP-DOCLIFE-STRUCT-001 | Structural | HIGH | T02 §6; orchestration §3.2 | `workflows/doc-housekeeping-workflow.yaml` absent |
| GAP-DOCLIFE-STRUCT-002 | Structural | HIGH | T02 §6; PACKAGE_OVERVIEW | `scripts/validate_lifecycle_metadata.py` absent |
| GAP-DOCLIFE-STRUCT-003 | Structural | HIGH | T02 §6; PACKAGE_OVERVIEW | `scripts/housekeeping_scanner.py` absent |
| GAP-DOCLIFE-INTG-001 | Integration | HIGH | T04 domain 5; orchestration §3.3 | Package `policies/` ↔ architecture ADR drift |
| GAP-DOCLIFE-INTG-002 | Integration | MEDIUM | T03 V1/V4; T04 domain 4 | `.cursorrules` mandates 2 fields vs spec 5 required |
| GAP-DOCLIFE-INTG-003 | Integration | MEDIUM | T04 domain 3 | RW agent guide lacks lifecycle mapping table from `workflow-mgt-integration.md` |
| GAP-DOCLIFE-TEST-001 | Operational | MEDIUM | T03 V3–V4 | `DocumentLifecycleValidator` requires only `lifecycle` + `created_at` |
| GAP-DOCLIFE-BEHV-001 | Behavioral | MEDIUM | T03 domain 4 | Reference-aware cleanup documented; no observable automation |
| GAP-DOCLIFE-BEHV-002 | Behavioral | MEDIUM | T03 V5–V6 | Repo `docs/` frontmatter partial compliance vs five-field spec |
| GAP-DOCLIFE-DOC-001 | Documentation | MEDIUM | T02 §7 | README §Package Structure omits `docs/` + `POLICY_SALIENCE_TEMPLATE.md` |
| GAP-DOCLIFE-DOC-002 | Documentation | MEDIUM | T02 §1 | `PACKAGE_PROPOSAL.md` on disk but status still "Proposal" |
| GAP-DOCLIFE-DOC-003 | Documentation | MEDIUM | T04 domain 7 | Template propagation gaps (PLAN_DOC_TEMPLATE / kanban samples spot-check) |
| GAP-DOCLIFE-DOC-004 | Process | MEDIUM | T03/T04 | T01 baseline may lag T02–T04 findings until optional refresh |
| GAP-DOCLIFE-OPS-001 | Operational | LOW | T03 V7 | Policy salience docs on disk but underdocumented in README tree |
| GAP-DOCLIFE-OPS-002 | Operational | LOW | T04 domain 6 | greenfield-install parity **Met** — record as informational closure or omit gap row |

**Excluded from gap log (not package gaps):** Kanban/workflow-mgt framework defects outside doc-lifecycle scope; adopter-only misconfiguration.

**greenfield-install (FR-110):** T02 IPP records 13/13 file parity — **no GAP** unless T04 impl finds drift.

### 2.3 Constraints

- BR-097: post-ship verification prescribes **`RW E10:S01:T05 --art`** only — no `--doc-policy-zero`.
- Gap ID regex: `GAP-DOCLIFE-{TYPE}-NNN` (validator: `validate_gap_log.py`).
- Implementation **hard-depends** on T02–T04 companion reports (Wave 2B complete per orchestration §8.6).

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; V1–V7 PASS; `validate_gap_log.py --strict` pass; forensic marker via `RW E10:S01:T05 --art` → `v0.10.1.5+1`.
- **Atomic propagation requirement:** Task doc status and `kboard.md` row update in same RW Step 7 session.
- **Owner:** Implementation execution agent (not IPW planning session).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single approach: consolidate into T05 task doc per gap-log-schema (E02:S13:T05) |
| T2 | Reversibility | N | Doc-only; one-PR revert |
| T3 | Blast radius | N | Confined to kanban/docs under story-01 |
| T4 | Precedent | N | E02:S13:T05 / E03:S04:T05 / E04:S16:T05 pattern |
| T5 | Constraint trade-off | N | Documents existing findings; no new architectural choice |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates |
| T7 | Supersedes | N | Extends T01–T04; records ADR drift without superseding ADRs |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | T05 task doc + IPP per §4.1 |
| E2 | No new options | Y | gap-log-schema + E02 taxonomy |
| E3 | Reversible in one task | Y | Doc revert |
| E4 | Spec elsewhere | Y | gap-log-schema.md governs structure |
| E5 | Documented NONE | Y | §5.3 cites gap-log-schema |

---

## 3. Test design

**`--skip-tests` justification:** T05 is a **review/documentation artefact task** with **no executable code** deliverable. The package under review is pure policy/documentation (10/10 independence). Verification is **structural inspection** of gap log content against [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md) via `validate_gap_log.py --strict` and manual crosswalk to T01–T04 companions — not pytest for new functionality. Optional pytest extension (`test_e10_s01_t05_passes`) is deferred unless validator default-path registration is required during implementation (E02:S13 added this in impl wave).

### 3.1 Verification checklist (V1–V7)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | Gap log schema | `python packages/frameworks/workflow-mgt/scripts/validation/validate_gap_log.py --path <T05-doc> --strict` exit 0 |
| V2 | Severity rollup | Documented table: 0 Critical; 3–4 High; 8–10 Medium; 2–4 Low (adjust after dedup) |
| V3 | T02 traceability | Inventory gap rows mapped to `GAP-DOCLIFE-STRUCT-*` / `GAP-DOCLIFE-DOC-*` |
| V4 | T03/T04 crosswalk | Behavior D* and integration I* rows appear in gap Source fields |
| V5 | Package vs external | Summary: all gaps package-owned; no external RC blockers |
| V6 | Bidirectional links | T05 ↔ IPP ↔ Story ↔ T06 Input resolve |
| V7 | Scope guard | No package functional code changed |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T05` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc |
| 2 | Confirm T01–T04 companions exist and are linked (see Blockers) | Input gate |
| 3 | Flesh T05 header: Scope, Input, Deliverable, Specification/Validation, Approach | Task doc |
| 4 | Write ~14–16 `### Gap N` entries with `GAP-DOCLIFE-*` IDs per §2.2 map | Task doc **Gap Log** section |
| 5 | Write **Summary of Direct Document Lifecycle Package Gaps** with severity rollup table | Task doc |
| 6 | Write **Risk Assessment** + RC Impact Conclusion (expect conditional pass / DEFER for T06) | Task doc |
| 7 | Write **Next Steps** → T06 remediation backlog | Task doc |
| 8 | Run `validate_gap_log.py --path <T05-doc> --strict`; fix schema violations | PASS |
| 9 | Optional: extend `validate_gap_log.py` default paths + pytest for E10:S01 T05 | V1 hardening |
| 10 | Wire IPP ↔ T05; cross-link T01–T04 companions + T06 Input | Bidirectional links |
| 11 | Update Story E10:S01 checklist + story AC slice | Story doc |
| 12 | **`RW E10:S01:T05 --art`** | Release `v0.10.1.5+1` |
| **N** | **[MANDATORY] Reconcile task status** to `COMPLETE` + `✅ COMPLETE (v0.10.1.5+1)` if all ACs satisfied; else `IN PROGRESS` or `BLOCKED` + reason. Update `Last updated`. Sync story + kboard. | Task doc status reflects actual state |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E10:S01:T05 --art`** only.

### 4.1 Files to create or modify

| Action | Path |
| ------ | ---- |
| CREATE | `docs/implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md` (this file) |
| UPDATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md` (gap log SoT) |
| UPDATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md` (checklist on COMPLETE) |
| UPDATE (cross-link) | T01–T04 companions when present — outbound pointer to T05 gap log |
| UPDATE | `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md` (Input → T05) |
| UPDATE (optional) | `packages/frameworks/workflow-mgt/scripts/validation/validate_gap_log.py`, `tests/test_validate_gap_log.py` |
| UPDATE (RW Step 7) | `docs/project-management/kanban/kboard.md`, changelog, version, README |

### 4.2 Dependency order

1. **Gate:** T02 `component-inventory-map.md`, T03 `lifecycle-behavior-validation-report.md`, T04 `integration-alignment-report.md` (+ T01 `expectations-baseline.md`) published (Wave 2A + 2B per orchestration §8.4–8.6).
2. Read companions → deduplicate → write gap entries in T05 task doc.
3. `validate_gap_log.py --strict` → story/IPP/T06 wiring → `RW E10:S01:T05 --art`.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Scope of change | Tied to (RF/step) |
| ------ | ---- | --------------- | ----------------- |
| D-U1 | `T05-create-gap-log-and-risk-assessment.md` | Full gap log + risk assessment (SoT) | RF1–RF6; Steps 3–7 |
| D-U2 | `story-01-document-lifecycle-package-implementation-review.md` | Checklist + story AC | RF7; Step 11 |
| D-U3 | T01–T04 companions | T05 output pointer in References/Summary | Step 10 |
| D-U4 | `T06-define-rc-sign-off-criteria-and-remediation-tasks.md` | Input link to T05 gap log | RF8 |
| D-U5 | `kboard.md` | T05 row status/version on release | Step 12 |

### 5.2 New documents to create

| Doc ID | Proposed path | Purpose | Tied to (RF/step) |
| ------ | ------------- | ------- | ----------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md` | IPP (this file) | RF6 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Remediation implementation | **NONE** — deferred T06 / Wave 3 per FR-083 |
| Package script/workflow fixes | **NONE** — tracked as HIGH gaps; fix in future E10 tasks |
| ADR merge (dual SoT) | **NONE** — gap row only; merge policy deferred T06 |
| Separate companion gap-log file | **NONE** — SoT is T05 task doc per E02/E03/E04 pattern |
| New ADR | **NONE** — EXEMPT per §2.5 |
| Docusaurus portal | **NOT_APPLICABLE** — kanban gap log (BR-066) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T05-gap-log-risk-assessment.md` | NOT_APPLICABLE | Planning artefact | evergreen | T05 Input/References |
| D-U1 | `.../T05-create-gap-log-and-risk-assessment.md` | NOT_APPLICABLE | Gap log SoT | evergreen | IPP host; T06 Input |
| D-U2 | `.../story-01-document-lifecycle-package-implementation-review.md` | NOT_APPLICABLE | Story doc | evergreen | T05 checklist |

**Housing rules:** One authoritative gap log per package review — **T05 task doc body** (not a separate companion file). T06 consumes `GAP-DOCLIFE-*` IDs from T05 Summary + Risk Assessment.

---

## 7. Success / verification criteria

- [ ] ~14–16 gap entries with full schema fields and `GAP-DOCLIFE-*` IDs
- [ ] Summary + Risk Assessment with conditional RC conclusion (no RC-blocking gaps expected; HIGH backlog scheduled in T06)
- [ ] `validate_gap_log.py --strict` passes against T05 task doc
- [ ] Bidirectional T05 ↔ IPP ↔ Story ↔ T06 links
- [ ] Story AC "Gap log created with severity levels" ready for RW
- [ ] No package functional code changed
- [ ] Forensic release via `RW E10:S01:T05 --art` → `v0.10.1.5+1`

---

## References

- [T05 task doc](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [E10S01 orchestration plan §7.4 T05](./E10S01-orchestration-plan.md)
- [gap-log-schema.md](../architecture/standards-and-adrs/gap-log-schema.md)
- [IPP-E02S13T05 precedent](./IPP-E02S13T05-gap-log-risk-assessment.md)
- [E02:S13 T05 gap log](../project-management/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [IPP-E10S01T01](./IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) · [IPP-E10S01T02](./IPP-E10S01T02-component-inventory-map.md) · [IPP-E10S01T03](./IPP-E10S01T03-lifecycle-behavior-validation.md) · [IPP-E10S01T04](./IPP-E10S01T04-integration-dependency-alignment.md)
- [T06 RC sign-off task](../project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [FR-042](../project-management/kanban/fr-br/FR-042-implementation-planning-workflow-ipw.md)
- [FR-094](../project-management/kanban/fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- Package root: `packages/frameworks/doc-lifecycle/`
