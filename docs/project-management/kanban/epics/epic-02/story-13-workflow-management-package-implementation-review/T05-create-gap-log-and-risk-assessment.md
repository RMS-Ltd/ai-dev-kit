---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:02Z
expires_at: null
housekeeping_policy: keep
---

# T05 – Create Gap Log and Risk Assessment

**Task ID:** E02:S13:T05  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.2.13.5+1 — gap log and risk assessment complete)  
**Version:** v0.2.13.5+1  
**Code:** E02S13T05

---

## Specification and Validation

This deliverable conforms to the **Gap Log and Risk Assessment Schema**:

- **Spec:** [docs/architecture/standards-and-adrs/gap-log-schema.md](../../../../../architecture/standards-and-adrs/gap-log-schema.md)
- **Validator:** `python packages/frameworks/workflow-mgt/scripts/validation/validate_gap_log.py --path <this-file> --strict`
- **IPP:** [IPP-E02S13T05-gap-log-risk-assessment.md](../../../../../implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md)

---

## Scope

Consolidate all findings from **T01–T04** and **[E07:S07:T01](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md) §5–§7** into a single **gap log and risk assessment** for the Workflow Management framework package (`packages/frameworks/workflow-mgt/`).

This includes:

- Enumerating structural, behavioral, integration, documentation, test, and operational gaps discovered during the implementation review.
- Classifying each gap by **severity**, **likelihood**, and **RC impact**.
- Distinguishing **Workflow Management package implementation gaps** from any external/adopter-environment issues.
- Documenting overall **conditional RC posture** for T06 sign-off criteria.

**Out of scope:** Remediation implementation; RC sign-off checklist (T06); package code or README fixes.

---

## Input

- [T01 – Expectations baseline](T01-expectations-baseline.md)
- [T02 – Component inventory map](component-inventory-map.md)
- [T03 – Behavioral validation report](workflow-behavior-validation-report.md)
- [T04 – Integration alignment report](integration-alignment-report.md)
- [E07:S07:T01 – Workflow machinery code review report §5–§7](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [FR-050 – Workflows directory reorganization](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- [IPP-E02S13T05](../../../../../implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md)

---

## Deliverable

A **gap log and risk assessment** (this document) listing all identified gaps with required schema fields and an overall RC risk posture summary.

---

## Acceptance Criteria

- [x] All relevant findings from **T01–T04** and **E07** distilled into a single gap log
- [x] Each gap classified with **severity**, **likelihood**, and **RC impact**
- [x] Package vs external gaps explicitly separated in Summary section
- [x] Overall RC risk posture documented (conditional pass; no BLOCKER gaps)
- [x] `validate_gap_log.py --strict` passes
- [x] IPP bidirectionally linked
- [x] Forensic release via `RW E02:S13:T05 --art`

---

## Approach

1. **Synthesize inputs** from T01–T04 companion reports and E07 severity backlog.
2. **Deduplicate** overlapping E07 H/M/L, T03 D*, T04 I*, and inventory rows into canonical gap IDs.
3. **Classify** each gap with severity, likelihood, RC impact, ownership, and tracking.
4. **Summarize** direct package gaps and overall RC risk posture.
5. **Validate** against `validate_gap_log.py --strict`.
6. **Wire** T06 input and story checklist; release via RW.

---

## Gap Log

### Gap 1 – Flat Workflow YAML Duplicates Nested SoT

- **ID:** GAP-WFMGT-STRUCT-001
- **Category:** Structural
- **Description:** Six non-deprecated flat workflow YAML files at `workflows/*.yaml` duplicate nested workflow SoT directories, creating adopter confusion about which file is authoritative. RW flat stub is deprecated; intake, UKW, CMW, and other flat copies remain active duplicates.
- **Source:** E07 H2; T03 D10; T02 inventory summary; [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- **Ownership:** Workflow Management package
- **Severity:** HIGH
- **Likelihood:** HIGH (adopters may edit wrong YAML)
- **RC Impact:** NON-BLOCKING (remediation scheduled; doc-aligned adopters use nested dirs)
- **Tracking:** [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md); [E02:S13:T09](T09-fr050-workflows-directory-reorganization.md) (filed)

---

### Gap 2 – Kanban Update Path Fragmentation

- **ID:** GAP-WFMGT-INTG-001
- **Category:** Integration
- **Description:** RW Step 7 agent guidance, UKW Step 6, and `update_kanban_docs.py` share overlapping row-transform logic (`apply_canonical_row_transform_pipeline` and related paths) with risk of divergent behavior across release and sync workflows.
- **Source:** E07 H3; T03 D11; T04 I11; E07 §6 priority 3
- **Ownership:** Workflow Management package
- **Severity:** HIGH
- **Likelihood:** MEDIUM (drift on partial updates)
- **RC Impact:** NON-BLOCKING (contracts align; cohesion remediation deferred)
- **Tracking:** [E02:S13:T10](T10-kanban-transform-consolidation.md) (filed); E07 E1/E5 consolidation proposals

---

### Gap 3 – CI Pytest Gate (Mitigated)

- **ID:** GAP-WFMGT-CI-001
- **Category:** Operational
- **Description:** E07 H1 originally flagged absence of CI pytest for the workflow script corpus. T03 D12 confirms `.github/workflows/workflow-scripts-pytest.yml` now runs isolated validation pytest. Residual risk: co-located tests outside root `pytest.ini` testpaths (see Gap 8).
- **Source:** E07 H1; T03 D12; `.github/workflows/workflow-scripts-pytest.yml`
- **Ownership:** Workflow Management package + repo CI
- **Severity:** MEDIUM
- **Likelihood:** LOW (mitigated by dedicated CI workflow)
- **RC Impact:** NON-BLOCKING
- **Status:** MITIGATED (CI workflow present; coverage expansion optional)
- **Tracking:** E07:S07:T02 optional; Gap 8 for residual test-path documentation

---

### Gap 4 – Duplicate `load_rw_config` Implementations

- **ID:** GAP-WFMGT-INTG-002
- **Category:** Integration
- **Description:** 22+ independent `load_rw_config` implementations across changelog, kanban, validation, and root scripts increase path-resolution bugs and adopter integration drift. No shared `rw_config_loader` module exists.
- **Source:** E07 M1; T03 D9; T04 I10; E07 E1
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** HIGH (reproducible duplication)
- **RC Impact:** NON-BLOCKING
- **Tracking:** E02:S13:T06; E07 E1 shared module proposal

---

### Gap 5 – README `check_changelog_size` Wrong Path

- **ID:** GAP-WFMGT-DOC-001
- **Category:** Behavioral / Documentation
- **Description:** Package README lists `scripts/validation/check_changelog_size.py` which does not exist. Actual path is `scripts/changelog/check_changelog_size.py`. T01 baseline repeats the wrong path.
- **Source:** E07 M2; T03 D6; T02 inventory summary
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** HIGH (adopters follow README)
- **RC Impact:** NON-BLOCKING
- **Tracking:** E07 E3; doc fix backlog → T06

---

### Gap 6 – T01 Baseline Staleness

- **ID:** GAP-WFMGT-DOC-002
- **Category:** Process / Documentation
- **Description:** T01 expectations baseline lags live package: UKW listed as 8 steps (live: 9 + Step 2.5); validator count understated (4 in T01 vs 25+ in `validation/`); `version_registry.py` superseded by task-touch tooling; perpetual-task ID examples stale.
- **Source:** E07 M3; T03 D4/D13; T02 inventory
- **Ownership:** Workflow Management package (review artefacts)
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING (T02/T03/T04 supersede for RC evidence)
- **Tracking:** E07 §6 priority 5; optional T01 refresh in T06

---

### Gap 7 – Legacy `confidentia` KB Examples

- **ID:** GAP-WFMGT-DOC-003
- **Category:** Documentation
- **Description:** 15+ `confidentia` project references remain in vwmp KB guides and versioning-policy examples instead of `{project}` / rw-config placeholders, reducing adopter UX clarity.
- **Source:** E07 M4; T02 inventory; E07 E6
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** E07 E6 KB sweep; E05 or T06 doc backlog

---

### Gap 8 – Co-located Tests Outside `pytest.ini` Testpaths

- **ID:** GAP-WFMGT-TEST-001
- **Category:** Operational
- **Description:** 36+ co-located `scripts/**/test_*.py` modules are not in root `pytest.ini` testpaths. Isolated runner (`run_isolated_pytest.sh`) and CI workflow mitigate but adoption path is underdocumented.
- **Source:** E07 M5; T03 D12 context
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** E07 E4; document in T06 remediation list

---

### Gap 9 – `validate_release_readiness.py` Layout Inconsistency

- **ID:** GAP-WFMGT-STRUCT-002
- **Category:** Structural
- **Description:** `validate_release_readiness.py` lives at `scripts/` root while peer validators sit under `scripts/validation/`. Relationship to `validate_rw_step7_*` completeness checks is underdocumented (E07 E8).
- **Source:** E07 M6; T02 inventory; E07 E8
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** LOW
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 optional; E07 E8 consolidation doc

---

### Gap 10 – Registry `common_components` Directories Absent

- **ID:** GAP-WFMGT-STRUCT-003
- **Category:** Structural
- **Description:** `workflow-registry.yaml` cites `common/templates/`, `common/schemas/`, and `common/utilities/` but those directories are absent from the package tree, causing registry drift for adopters reading the registry as inventory SoT.
- **Source:** T02 inventory; T04 I12
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** T06 registry/doc fix backlog

---

### Gap 11 – README Kanban Step 4 vs Step 7 Drift

- **ID:** GAP-WFMGT-DOC-004
- **Category:** Documentation
- **Description:** Package README cites Kanban updates at RW **Step 4**; live agent spec and `.cursorrules` place scoped kanban reconciliation at **Step 7** (FR-092). Adopters following README alone may mis-order RW operations.
- **Source:** T04 I4; integration-alignment-report §Summary
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** README fix backlog → T06

---

### Gap 12 – README vwmp Path Alias Drift

- **ID:** GAP-WFMGT-DOC-005
- **Category:** Documentation
- **Description:** README references `docs/documentation/Developer_Docs/vwmp/` but actual package path is `KB/Documentation/Developer_Docs/vwmp/`, breaking links for copy-only adopters.
- **Source:** T02 inventory summary
- **Ownership:** Workflow Management package
- **Severity:** LOW
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** README fix backlog → T06

---

### Gap 13 – Empty `scripts/install/` Directory

- **ID:** GAP-WFMGT-STRUCT-004
- **Category:** Structural
- **Description:** `scripts/install/` exists with zero files — placeholder directory with no documented purpose or planned content.
- **Source:** E07 L1; T02 inventory
- **Ownership:** Workflow Management package
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** INFORMATIONAL
- **Tracking:** Remove or populate in T06 optional backlog

---

### Gap 14 – Packaging Script Audit Needed

- **ID:** GAP-WFMGT-OPS-001
- **Category:** Operational
- **Description:** Six root-level `build_*` / `upload_*` packaging scripts with overlapping names; unclear in README whether adopter-facing or maintainer-only (E07 E7).
- **Source:** E07 L2; E07 E7; T02 inventory
- **Ownership:** Workflow Management package
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** INFORMATIONAL
- **Tracking:** E07:S07:T04 optional; T06 backlog

---

### Gap 15 – CMW and Journal Test Coverage Gaps

- **ID:** GAP-WFMGT-TEST-002
- **Category:** Operational
- **Description:** `scripts/changelog/` has no co-located tests (CMW is deterministic); journal module (8 prod files) has zero co-located tests in isolated pytest config (E07 L3/L4).
- **Source:** E07 L3/L4
- **Ownership:** Workflow Management package
- **Severity:** LOW
- **Likelihood:** LOW
- **RC Impact:** INFORMATIONAL
- **Tracking:** Optional coverage tasks in T06

---

### Gap 16 – Intake Step Model vs T01 Baseline

- **ID:** GAP-WFMGT-DOC-006
- **Category:** Behavioral / Documentation
- **Description:** T01 lists 7-step intake model; nested intake YAML defines 8 steps (adds repository assignment as step 2). Script chain (`intake_*.py`) is present and functional; discrepancy is documentation alignment only.
- **Source:** T03 D8; T01 §Expected workflows
- **Ownership:** Workflow Management package
- **Severity:** MEDIUM
- **Likelihood:** MEDIUM
- **RC Impact:** NON-BLOCKING
- **Tracking:** T01/README alignment → T06

---

### Summary of Direct Workflow Management Package Gaps

From **T01–T04** and **E07:S07:T01**:

| Severity | Count | RC-blocking |
| -------- | ----- | ----------- |
| Critical | 0 | — |
| High | 2 | 0 |
| Medium | 10 | 0 |
| Low | 4 | 0 |
| **Total** | **16** | **0** |

**T01 (Expectations):** Baseline is directionally correct but stale on UKW step count, validator inventory, and script paths (Gap 6).

**T02 (Component inventory):** All major components mapped; structural gaps include flat YAML (Gap 1), registry drift (Gap 10), empty install dir (Gap 13).

**T03 (Behavioral validation):** RW doc/live parity **PASS** post-T08; cohesion gaps H2/H3 and doc drift items consolidated above.

**T04 (Integration alignment):** Soft-dependency contracts **ALIGNED**; cohesion gaps M1/H3 and README drift consolidated above.

**E07 (Code review):** **0 Critical, 3 High → 2 High + 1 mitigated (CI), 6 Medium, 4 Low** after deduplication and H1 mitigation.

**Package vs external:**

All 16 gaps are **Workflow Management package implementation or documentation gaps**. No gaps are attributed to external frameworks (Kanban, Versioning) or adopter-only environment configuration. UKW/RW behavior issues cited in other epics are out of scope for this package RC review.

**Conclusion:** No **direct Workflow Management package gaps block RC sign-off**. Two **High** cohesion gaps (flat YAML, kanban path fragmentation) and a **Medium** documentation/cohesion backlog must be **scheduled in T06** remediation tasks. Aligns with E07 §7 **conditional RC** recommendation.

---

## Risk Assessment

### Overall RC Risk Posture (Workflow Management Package)

- **Structural Risk:** MEDIUM
  - Flat YAML duplication and registry `common_components` drift increase adopter structural confusion; mitigated by nested SoT and T08 doc parity.

- **Behavioral Risk:** LOW
  - RW gates, validators, and doc/live parity pass (T03). Remaining issues are cohesion and documentation drift, not broken Step 1/9 behavior.

- **Integration Risk:** MEDIUM
  - Soft-dependency contracts align (T04). Kanban path fragmentation (Gap 2) and config loader duplication (Gap 4) increase integration maintenance cost.

- **Operational Risk:** LOW (mitigated)
  - CI pytest workflow addresses E07 H1; residual test-path documentation gap (Gap 8) is non-blocking.

**RC Impact Conclusion:**

- There are **no RC-blocking gaps** for the **Workflow Management framework package** implementation.
- **Conditional pass:** RC may proceed for doc-aligned adopters when remediation backlog for **Gap 1** (flat YAML / FR-050) and **Gap 2** (kanban transform consolidation) is **accepted and scheduled** in [E02:S13:T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md).
- All 16 gaps are **NON-BLOCKING** or **INFORMATIONAL**; none require package code changes before RC sign-off criteria definition.

**Severity rollup:** 0 Critical · 2 High · 10 Medium · 4 Low

---

## Next Steps

- **For this task (E02:S13:T05):**
  - [x] Run `validate_gap_log.py --strict` and fix any schema violations
  - [x] Wire IPP and story checklist; mark AC satisfied
  - [x] Release via `RW E02:S13:T05 --art`

- **For follow-on (E02:S13:T06):**
  - [x] Define RC sign-off criteria from this gap log → [T06](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
  - [x] File remediation tasks for Gap 1 → [T09](T09-fr050-workflows-directory-reorganization.md) + [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
  - [x] File remediation task for Gap 2 → [T10](T10-kanban-transform-consolidation.md)
  - [x] Schedule doc-fix backlog (Gaps 5, 7, 11, 12, 16) → T06 remediation R4
  - [ ] Gap 4 (shared config loader) → T06 remediation R3 (proposed host)

---

## References

- [T01 expectations baseline](T01-expectations-baseline.md)
- [T02 component inventory](component-inventory-map.md)
- [T03 behavior validation report](workflow-behavior-validation-report.md)
- [T04 integration alignment report](integration-alignment-report.md)
- [E07:S07:T01 code review report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [T06 RC sign-off task](T06-define-rc-sign-off-criteria-and-remediation-tasks.md)
- [IPP-E02S13T05](../../../../../implementation-cycles/IPP-E02S13T05-gap-log-risk-assessment.md)
- [gap-log-schema.md](../../../../../architecture/standards-and-adrs/gap-log-schema.md)
- [FR-050](../../../fr-br/FR-050-workflows-directory-structure-reorganization.md)
- [FR-107](../../../fr-br/FR-107-comprehensive-workflow-machinery-code-review.md)

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`
