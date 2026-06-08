---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-06T23:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E10:S01:T10 — Planning: Fix DocumentLifecycleValidator (IPW)

**Host Task:** [`T10-fix-document-lifecycle-validator.md`](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md) **(E10:S01:T10)**  
**Planning for:** [GAP-DOCLIFE-TEST-001](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md) · [T06 remediation R3](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md) · [E10S01 orchestration plan §9](./E10S01-orchestration-plan.md)  
**Status:** Draft — planning complete; awaiting implementation authorization (FR-083)  
**Branch:** `epic/10-doc-lifecycle-framework`

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source (FR/BR/Task) |
| -- | ----------- | ------------------- |
| RF1 | Fix `NameError: name 'yaml' is not defined` so `DocumentLifecycleValidator` completes scans without runtime crash | GAP-DOCLIFE-TEST-001; T03 D11/V3; T10 AC |
| RF2 | Enforce **all five** required metadata fields per `doc-lifecycle-metadata-spec.md`: `lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy` | GAP-DOCLIFE-TEST-001; T03 D12/V4; T10 Scope |
| RF3 | Retain existing enum/type validation for fields when present (`lifecycle`, `ttl_days`, `created_at`, `expires_at`, `housekeeping_policy`) | T03 §6 field-coverage matrix; existing validator code |
| RF4 | Documents **without** frontmatter remain acceptable (no error) — validator only enforces five fields when frontmatter exists | Existing `_validate_document_metadata` behavior; T03 observability |
| RF5 | Update pytest suite for pass/fail cases covering five-field contract | T10 AC; existing `test_document_lifecycle_validator.py` |
| RF6 | Document ownership boundary: tooling-automation `DocumentLifecycleValidator` vs doc-lifecycle package-local `validate_lifecycle_metadata.py` (T08) | T10 Scope; T08 out-of-scope boundary |
| RF7 | greenfield-install mirror parity for validator + tests (FR-110) | E10 orchestration plan §3; T04 integration |
| RF8 | Wire IPP bidirectionally; reconcile kanban surfaces on RW Step 7 | FR-042, FR-077, FR-083 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Confined to `tooling-automation` validator package — **no** edits under `packages/frameworks/doc-lifecycle/` (T08 owns package scripts) | T10 Out of scope; T03 V9 scope guard |
| RNF2 | Graceful degradation if PyYAML unavailable: emit clear issue, do not crash with `NameError` | T03 D11 root cause |
| RNF3 | RW prescription: **`RW E10:S01:T10 --art`** only (BR-097) | Orchestration plan §9.2 |
| RNF4 | Pre-commit wiring remains out of scope (optional follow-on) | T10 Out of scope |

### 1.3 Invariants and boundaries

- **Invariants:**
  - Canonical five-field contract: [`doc-lifecycle-metadata-spec.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md) §Required Fields.
  - Validator path: `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`.
  - Gap ID: `GAP-DOCLIFE-TEST-001` (T05 Gap 5, T06 R3).
- **In scope:** Runtime import fix; five-field required enforcement; pytest updates; framework README boundary note; greenfield mirror sync; kanban/doc updates via RW.
- **Out of scope:** Package-local `validate_lifecycle_metadata.py` creation (T08); pre-commit hook wiring; mass repo frontmatter migration (GAP-DOCLIFE-BEHV-002); `.cursorrules` five-field alignment (GAP-DOCLIFE-INTG-002).

---

## 2. Specification

### 2.1 Goal

Restore and align the cross-package **`DocumentLifecycleValidator`** in tooling-automation so it **runs without crashing** and **enforces the Document Lifecycle package's five-field metadata contract**, closing **GAP-DOCLIFE-TEST-001** (T06 remediation package R3). This enables Wave 3 remediation verification of doc-lifecycle enforcement without waiting for T08's package-local validator.

### 2.2 Specification mapping from ascertained requirements

| RF | Implementation target |
| -- | --------------------- |
| RF1 | Add `import yaml` (or `try/except ImportError` with module-level flag); replace `if not yaml:` guard that references undefined name |
| RF2 | Set `required_fields = ['lifecycle', 'ttl_days', 'created_at', 'expires_at', 'housekeeping_policy']`; emit per-field missing errors |
| RF3 | Keep enum/type validators unchanged below required-field check |
| RF4 | Early return when `content` does not start with `---` (unchanged) |
| RF5 | Extend `test_document_lifecycle_validator.py`: valid five-field fixture; parametric or dedicated tests per missing field |
| RF6 | Update `validators/framework/README.md` §DocumentLifecycleValidator with five-field list + boundary table vs T08 script |
| RF7 | Mirror changes to `greenfield-install/packages/frameworks/tooling-automation/validators/` tree |

### 2.3 Constraints

- **Hard dependency:** T03 behaviour report and T05 gap log published (Wave 2 complete).
- **Soft dependency:** T08 may land later — boundary doc must clarify complementary roles, not duplicate implementation.
- BR-097: post-ship verification prescribes `RW E10:S01:T10 --art` only; target version `v0.10.1.10+1` (first BUILD on new task).
- Existing two-field test fixtures **must** be updated to five-field compliant YAML or tests will fail after RF2.

### 2.4 Status transition intent (mandatory for IPW-derived implementation tasks)

- **Current task status:** `TODO`
- **Transition trigger to IN PROGRESS:** First non-planning implementation change (Step 1 of §4).
- **Transition trigger to COMPLETE:** All AC satisfied; pytest green; validator smoke on story folder passes; forensic marker via `RW E10:S01:T10 --art` → `v0.10.1.10+1`.
- **Atomic propagation requirement:** Task doc status, `kboard.md` row, and T05 gap `Tracking` closure note update in same RW Step 7 session.
- **Owner:** Implementation execution step (not planning-only IPW creation).

### 2.5 ADR necessity decision (mandatory — IPW Phase 5.0)

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | N | Single fix path: align existing validator to published spec |
| T2 | Reversibility | N | One-file revert in tooling-automation; no adopter migration |
| T3 | Blast radius | N | Confined to §4.1 file list; no framework API contract change |
| T4 | Precedent | N | Implements existing `doc-lifecycle-metadata-spec.md`; no new canonical pattern |
| T5 | Constraint trade-off | N | Bug fix + spec alignment; no security/performance trade-off |
| T6 | Governance contract | N | Does not alter RW/IPW/UKW gates; validator not yet pre-commit wired |
| T7 | Supersedes | N | Aligns with spec; does not contradict ADRs |

**Outcome:** `EXEMPT`

| ID | Exemption (only if all T = N) | Pass? | Evidence |
| -- | --------------------------- | ----- | -------- |
| E1 | Single locus | Y | Files in §4.1 only |
| E2 | No new options | Y | Implements [`doc-lifecycle-metadata-spec.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md) §Required Fields |
| E3 | Reversible in one task | Y | Validator revert without migration |
| E4 | Spec elsewhere | Y | Package metadata spec + T03 §6 evidence |
| E5 | Documented NONE | Y | §5.3 cites metadata spec + T03 report |

---

## 3. Test design

**`--skip-tests`:** **Not used.** T10 delivers executable validator code with explicit pytest acceptance criteria (T10 AC: "pytest coverage for validator pass/fail cases"). Verification combines **pytest** (automated) and **manual smoke** (V1–V5). This is a script fix with test-suite updates, not a doc-only artefact task.

### 3.1 Pytest test cases (TC1–TC8)

| ID | Behavior / layer | Expected check | RF |
| -- | ---------------- | -------------- | -- |
| TC1 | Valid five-field evergreen metadata | `result.is_pass()` — no issues | RF2, RF5 |
| TC2 | Missing `created_at` (and each of other four fields individually) | `result.is_fail()`; message contains `missing required lifecycle field: {field}` | RF2, RF5 |
| TC3 | Invalid `lifecycle` enum | `result.is_fail()`; `Invalid lifecycle value` | RF3 |
| TC4 | Invalid `housekeeping_policy` enum | `result.is_fail()` when field present with bad value | RF3 |
| TC5 | Invalid `ttl_days` (negative or non-integer) | `result.is_fail()` | RF3 |
| TC6 | Document without frontmatter | `result.is_pass()` (no frontmatter = acceptable) | RF4 |
| TC7 | Malformed frontmatter (unclosed `---`) | `result.is_fail()`; `Frontmatter not properly closed` | RF3 |
| TC8 | Validator `run()` completes without `NameError` | Import + execute on temp docs dir exits normally | RF1 |

### 3.2 Manual verification checklist (V1–V5)

| ID | Behavior / layer | Expected check |
| -- | ---------------- | -------------- |
| V1 | PyYAML import | `python -c "import yaml"` succeeds in project venv; validator does not raise `NameError` |
| V2 | Five-field enforcement | Temp doc missing `ttl_days` → issue emitted |
| V3 | Story-folder smoke | Run validator on `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/` — completes scan (may report issues on non-compliant samples; must not crash) |
| V4 | greenfield mirror parity | `diff` primary vs `greenfield-install/.../document_lifecycle_validator.py` — identical logic |
| V5 | Boundary documentation | README §DocumentLifecycleValidator lists five required fields and references T08 package-local validator |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY] Transition task `E10:S01:T10` status `TODO → IN PROGRESS`** in task doc. Update `Last updated` date. | Task doc `Status` = `IN PROGRESS` |
| 2 | Fix PyYAML import in `document_lifecycle_validator.py` — `import yaml` with `ImportError` fallback that appends a single clear ERROR issue instead of `NameError` | RF1, RNF2 |
| 3 | Expand `required_fields` to five spec fields; preserve enum/type validators | RF2, RF3 |
| 4 | Update `test_document_lifecycle_validator.py`: five-field valid fixture; tests for each missing required field; retain enum failure tests | RF5, TC1–TC8 |
| 5 | Sync `greenfield-install/packages/frameworks/tooling-automation/validators/` mirror (validator + tests) | RF7, V4 |
| 6 | Update `packages/frameworks/tooling-automation/validators/framework/README.md` §DocumentLifecycleValidator: five required fields; boundary table vs [T08](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md) `validate_lifecycle_metadata.py` | RF6, V5 |
| 7 | Run pytest: `pytest packages/frameworks/tooling-automation/validators/tests/test_document_lifecycle_validator.py -v` | TC1–TC8 |
| 8 | Run V1–V3 manual smoke; record evidence in task doc verification table | V1–V3 |
| 9 | Flesh T10 task doc: verification table, AC checkboxes, gap closure note for GAP-DOCLIFE-TEST-001 | RF8 |
| 10 | Update T05 gap Tracking for GAP-DOCLIFE-TEST-001 with remediation evidence link | T06 pattern |
| 11 | **`RW E10:S01:T10 --art`** — version `v0.10.1.10+1`; Step 7 four-surface kanban reconciliation | Release |
| **N** | **[MANDATORY] Reconcile task `E10:S01:T10` status** to `COMPLETE` + `✅ COMPLETE (v{version})` if all ACs satisfied; update `kboard.md` row; update `Last updated`. | Task + board |

**RW verification / FBU wave rule (BR-097):** Post-ship verification prescribes **`RW E10:S01:T10 --art`** only. Do **not** prescribe `--doc-policy-zero`.

### 4.1 Files to create or modify

- CREATE: `docs/implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md` (this file)
- UPDATE: `packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`
- UPDATE: `packages/frameworks/tooling-automation/validators/tests/test_document_lifecycle_validator.py`
- UPDATE: `greenfield-install/packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py`
- UPDATE: `greenfield-install/packages/frameworks/tooling-automation/validators/tests/test_document_lifecycle_validator.py`
- UPDATE: `packages/frameworks/tooling-automation/validators/framework/README.md`
- UPDATE: `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md`
- UPDATE (RW Step 7): `docs/kanban/kboard.md`
- UPDATE (optional): `T05-create-gap-log-and-risk-assessment.md` — GAP-DOCLIFE-TEST-001 tracking closure

### 4.2 Dependency order

1. **Gate:** T05 gap log + T06 remediation filing complete (Wave 2D done).
2. Validator code fix (Steps 2–3) before test updates (Step 4).
3. Mirror sync (Step 5) after primary tree green.
4. Documentation + RW (Steps 6–11).

### 4.3 Documentation implementation steps

1. Update framework README boundary note (Step 6) before RW so Step 7 kanban references accurate doc state.
2. Record T08 vs T10 ownership table in T10 task doc Deliverable section during Step 9.

---

## 5. Documentation deliverables

### 5.1 Existing documents to update

| Doc ID | Path | Action | Scope of change | Tied to (RF/step) |
| ------ | ---- | ------ | --------------- | ----------------- |
| D-U1 | `packages/frameworks/tooling-automation/validators/framework/README.md` | UPDATE | §DocumentLifecycleValidator: five required fields; T08 boundary table | RF6, Step 6 |
| D-U2 | `T10-fix-document-lifecycle-validator.md` | UPDATE | IPP link, verification table, AC, gap closure | RF8, Steps 9, N |
| D-U3 | `T05-create-gap-log-and-risk-assessment.md` | UPDATE | GAP-DOCLIFE-TEST-001 Tracking → remediated via T10 | Step 10 |
| D-U4 | `kboard.md` | UPDATE | T10 row: status, version, IPP link | Step 11, RW Step 7 |

### 5.2 New documents to create

| Doc ID | Proposed path | Action | Purpose | Tied to |
| ------ | ------------- | ------ | ------- | ------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md` | CREATE | This IPP | IPW Phase 7 |

### 5.3 Documentation gaps and explicit non-changes

| Gap / topic | Resolution |
| ----------- | ---------- |
| Package-local validator docs (T08) | **NONE** — T08 owns `validate_lifecycle_metadata.py` README; T10 only documents boundary in tooling-automation README |
| `doc-lifecycle-metadata-spec.md` | **NONE** — spec is authoritative; validator aligns to it |
| `.cursorrules` two-field schema (GAP-DOCLIFE-INTG-002) | **NONE** — separate remediation (R4) |
| Pre-commit wiring guide | **NONE** — optional follow-on per T10 out-of-scope |
| New ADR for validator contract | **NONE** — EXEMPT per §2.5; governed by existing metadata spec |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication status | Publication N/A reason | Lifecycle | Inbound links to add |
| ------ | -------------- | ------------------ | ---------------------- | --------- | -------------------- |
| D-C1 | `docs/implementation-cycles/IPP-E10S01T10-fix-document-lifecycle-validator.md` | NOT_APPLICABLE | Implementation-cycle artefact; not Docusaurus-navigated | evergreen | T10 Input + References |
| D-U1 | `packages/frameworks/tooling-automation/validators/framework/README.md` | NOT_APPLICABLE | Framework package internal KB | evergreen | T10 References (Step 9) |
| D-U2 | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md` | NOT_APPLICABLE | Kanban task doc | evergreen | kboard row |
| D-U3 | `docs/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md` | NOT_APPLICABLE | Kanban gap log | evergreen | T10 gap closure cross-link |
| D-U4 | `docs/kanban/kboard.md` | NOT_APPLICABLE | Active kanban board | evergreen | RW Step 7 |

**Housing rules:** IPP under `docs/implementation-cycles/`; validator code under `packages/frameworks/tooling-automation/`; no duplicate spec in package `doc-lifecycle/` (T08 scope).

---

## 7. Success / verification criteria

- [ ] `DocumentLifecycleValidator.run()` completes without `NameError` on sample docs tree (V1, V3, TC8)
- [ ] All five required fields enforced when frontmatter present (TC2, V2)
- [ ] `pytest packages/frameworks/tooling-automation/validators/tests/test_document_lifecycle_validator.py` passes (TC1–TC8)
- [ ] greenfield-install mirror matches primary validator logic (V4, RF7)
- [ ] Ownership boundary vs T08 documented in framework README (V5, RF6)
- [ ] GAP-DOCLIFE-TEST-001 tracking updated with T10 remediation evidence
- [ ] IPP ↔ T10 bidirectional links resolve
- [ ] `RW E10:S01:T10 --art` complete → `v0.10.1.10+1`
- [ ] All §5 UPDATE items implemented or explicitly deferred with reason
- [ ] Task status reconciled to `COMPLETE` with forensic marker if all ACs met

---

## References

- [T10 task doc](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T10-fix-document-lifecycle-validator.md)
- [T05 gap log — GAP-DOCLIFE-TEST-001](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T05-create-gap-log-and-risk-assessment.md)
- [T06 remediation R3](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [T03 lifecycle-behavior-validation-report §6](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/lifecycle-behavior-validation-report.md)
- [T08 package-local validator task](../kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review/T08-implement-doc-housekeeping-workflow-and-scripts.md)
- [doc-lifecycle-metadata-spec.md](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/doc-lifecycle/policies/doc-lifecycle-metadata-spec.md)
- [DocumentLifecycleValidator source](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/packages/frameworks/tooling-automation/validators/framework/document_lifecycle_validator.py)
- [E10S01 orchestration plan §9 — Wave 3 remediation](./E10S01-orchestration-plan.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
