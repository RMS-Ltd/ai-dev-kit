---
lifecycle: evergreen
ttl_days: null
created_at: 2026-01-20T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# T05 – Create Gap Log and Risk Assessment

**Task ID:** E4:S16:T05  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-01-20  
**Last updated:** 2026-01-22 (gap log and risk assessment complete; all acceptance criteria met; ready for version anchor via RW)  
**Completed:** 2026-01-22  
**Version:** (to be set by Release Workflow)  
**Code:** E4S16T05

---

## Specification and Validation

This deliverable conforms to the **Gap Log and Risk Assessment Schema**:
- **Spec:** [docs/architecture/standards-and-adrs/gap-log-schema.md](../../../../../architecture/standards-and-adrs/gap-log-schema.md)
- **Validator:** `python packages/frameworks/workflow mgt/scripts/validation/validate_gap_log.py --path <path> --strict`

---

## Scope

Consolidate all findings from **T01–T04** into a single **gap log and risk assessment** for the Kanban framework implementation.  
This includes:

- Enumerating any structural, behavioral, or integration gaps discovered during the Kanban package implementation review.
- Classifying each gap by **severity**, **likelihood**, and **RC impact**.
- Explicitly distinguishing between:
  - **Kanban framework implementation gaps**, and
  - **External workflow behavior gaps** (e.g., UKW behavior) that are tracked elsewhere.


---

## Input

- **E4:S16:T01 – Expectations baseline for Kanban package**
- **E4:S16:T02 – Component inventory and mapping to expectations**
- **E4:S16:T03 – Behavioral validation report**
- **E4:S16:T04 – Integration and dependency alignment report**
- **Known BRs/FRs related to Kanban workflows:**
  - `BR-034-ukw-moscow-prioritization-missing` (UKW MoSCOW behavior)
  - `BR-035-rw-housekeeping-step-not-working` (RW housekeeping, now fixed)


---

## Deliverable

A **gap log and risk assessment** that:

- Lists all identified gaps with:
  - Description
  - Category (Structural / Behavioral / Integration / Process)
  - Severity (LOW / MEDIUM / HIGH)
  - Likelihood (LOW / MEDIUM / HIGH)
  - RC Impact (BLOCKER / NON-BLOCKING / INFORMATIONAL)
  - Ownership (Kanban package vs external workflow)
  - Tracking reference (BR/FR/Task)

- Summarises overall RC risk posture for the **Kanban framework package**.

---

## Acceptance Criteria

- [x] All relevant findings from **T01–T04** are reviewed and distilled into a single gap log. ✅  
- [x] Each gap is classified with **severity**, **likelihood**, and **RC impact**. ✅  
- [x] Gaps that belong to **external workflows (e.g., UKW, RW)** are clearly separated from **Kanban package implementation gaps**. ✅  
- [x] Overall RC risk posture for the Kanban package is documented (e.g., “No RC-blocking gaps”, "RC-blocking gaps exist"). ✅  
- [x] References to BR/FR/Task IDs are included for each gap. ✅  

---

## Approach

1. **Synthesize Inputs from T01–T04**
   - Review expectations baseline (T01) and component inventory (T02).
   - Cross-check behavioral validation (T03) and integration alignment (T04).
2. **Identify Gaps**
   - Note any discrepancies, missing coverage, or process weaknesses.
   - Include both direct Kanban-package issues and closely-related workflow issues.
3. **Classify and Assess Risk**
   - Assign severity, likelihood, and RC impact per gap.
   - Distinguish Kanban-package issues from external workflow issues.
4. **Summarize RC Readiness**
   - Provide a clear statement on whether any identified gaps **block RC sign-off** for the Kanban framework.

---

## Gap Log

### Gap 1 – UKW MoSCOW Prioritization Behavior

- **ID:** GAP-KANBAN-UKW-001  
- **Category:** Behavioral (Workflow behavior, not Kanban package)  
- **Description:**  
  - UKW does not always maintain the **MoSCOW Prioritized In-Progress Tasks** section of the Kanban board in the way described by governance and board documentation.  
  - Newly added or recently updated tasks are not consistently surfaced or re-prioritized in the MoSCOW sections after UKW runs.

- **Source:**  
  - `BR-034-ukw-moscow-prioritization-missing.md`  
  - E6:S01:T34 – UKW MoSCOW prioritization missing  
  - Observations during UKW execution and Kanban board review.

- **Ownership:**  
  - **Workflow Management / UKW behavior**, **not** the Kanban framework package itself.

- **Severity:** MEDIUM  
- **Likelihood:** HIGH (reproducible with current UKW implementation)  
- **RC Impact:** NON-BLOCKING for Kanban package RC  
  - Reason: Kanban governance, structure, and integration points are compliant; the gap is in how UKW chooses to prioritize tasks, not in Kanban’s ability to represent them.

- **Tracking:**  
  - BR: `BR-034`  
  - Task: `E6:S01:T34` ✅ COMPLETE (v0.6.1.34+2)  


---

### Gap 2 – RW Housekeeping (Historical, Fixed)

- **ID:** GAP-KANBAN-RW-001  
- **Category:** Process / Workflow Behavior  
- **Description:**  
  - Historical gap where RW’s housekeeping step did not correctly clear `rw-step-*` TODOs in the IDE, leaving visual noise after RW completion.

- **Source:**  
  - `BR-035-rw-housekeeping-step-not-working.md`  
  - E6:S01:T35 – RW housekeeping step not working.

- **Ownership:**  
  - **Workflow Management / RW behavior**, not Kanban package implementation.

- **Severity:** LOW (usability / hygiene issue)  
- **Likelihood:** LOW (fixed)  
- **RC Impact:** INFORMATIONAL  
  - Reason: Fix implemented and documented; no ongoing RC risk for Kanban package.

- **Status:** ✅ FIXED (as of v0.6.1.35+1)  
- **Tracking:**  
  - BR: `BR-035`  
  - Task: `E6:S01:T35` ✅ COMPLETE  


---

### Gap 3 – Env Var Setup Friction (Environment / Operational)

- **ID:** GAP-KANBAN-ENV-001  
- **Category:** Operational / Environment Configuration  
- **Description:**  
  - Environment variables required for release workflows (e.g., `GITHUB_TOKEN`, `GITHUB_REPOSITORY`) were not governed by a consistent SOP.  
  - This caused friction and transient failures (e.g., missing `GITHUB_TOKEN` during RW Step 12.5 or package upload workflows).

- **Source:**  
  - Recent issues encountered when creating GitHub releases via `create_github_release.py`.  
  - Need for explicit SOP and `.env.local` pattern identified during SemVer + GitHub release work.

- **Ownership:**  
  - **Operational / Workflow tooling**, adjacent to Workflow Management and Release Workflow; not a Kanban framework defect.

- **Severity:** LOW (operational friction, not correctness)  
- **Likelihood:** MEDIUM (until SOP and `.env` pattern are fully adopted)  
- **RC Impact:** NON-BLOCKING for Kanban package RC  
  - Reason: Affects automation convenience and reliability of release workflows, but not Kanban package correctness or governance behavior.

- **Status:** MITIGATED (SOP + `.env.local` pattern introduced)  
- **Tracking:**  
  - SOP: `environment-variables-sop.md`  
  - `.env.local` pattern and `.gitignore` updated.


---

### Summary of Direct Kanban Package Gaps

From **T01–T04**:

- **T01 (Expectations Baseline):** No missing expectations detected relative to current Kanban README + governance policy.
- **T02 (Component Inventory):** All major components mapped; no structural coverage gaps identified.
- **T03 (Behavioral Validation):** All validation points marked **FULLY COMPLIANT**; no governance or behavior discrepancies identified for the Kanban package itself.
- **T04 (Integration & Dependency Alignment):** Integration and dependency alignment assessed as **COMPLIANT / RC-READY**, with UKW MoSCOW behavior gap explicitly scoped as workflow behavior.

**Conclusion:**  
No **direct Kanban framework implementation gaps** were identified that would block RC sign-off. All listed gaps are:

- Either **workflow behavior issues** (UKW, RW), or  
- **Operational environment issues** (env-var setup),  
and are **tracked and/or mitigated outside the Kanban package**.

---

## Risk Assessment

### Overall RC Risk Posture (Kanban Framework Package)

- **Structural Risk:** LOW  
  - Package structure, templates, and governance policy are aligned with expectations.

- **Behavioral Risk:** LOW  
  - Behavioral validation (T03) found no discrepancies in Kanban’s own behavior.

- **Integration Risk:** LOW  
  - Integrations with Numbering & Versioning and Workflow Management (RW + UKW wiring) are aligned; UKW behavior gap is external.

- **Operational Risk (Env/Tooling):** LOW–MEDIUM (mitigated)  
  - Environment variable SOP and `.env.local` pattern reduce likelihood and impact.


**RC Impact Conclusion:**  
- There are **no RC-blocking risks** attributable to the **Kanban framework package** implementation.  
- Remaining risks (UKW MoSCOW behavior, environment configuration friction) are **tracked and mitigated** outside this story and do **not** require changes to the Kanban package itself for RC sign-off.

---

## Next Steps

- **For this Task (E4:S16:T05):**
  - [x] Confirm that all relevant BR/FR/operational findings have been captured in the gap log. ✅  
  - [x] Validate that no Kanban-package-specific issues are missing from the log. ✅  
  - [x] Update Story 016 acceptance criteria to reflect completion of the gap log. ✅  
  - [x] Mark task as COMPLETE and anchor version via RW when this analysis is finalized. ✅ (Ready for RW)  


- **For Follow-On Work (Outside This Task):**
  - Continue remediation for UKW MoSCOW behavior under existing BR/Task (BR-034 / E6:S01:T34).  
  - Continue to harden env-var SOP and `.env` usage as part of workflow/operational improvements.  


