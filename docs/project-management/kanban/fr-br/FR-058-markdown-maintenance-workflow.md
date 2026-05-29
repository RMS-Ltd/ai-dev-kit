---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-15T17:55:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Markdown Maintenance Workflow (MMW)

**Type:** Feature Request (FR)  
**Submitted:** 2026-03-15  
**Submitted By:** AI Assistant (per user directive)  
**Priority:** HIGH  
**Status:** PROPOSED

---

## Summary

Establish a **Markdown Maintenance Workflow (MMW)** that automatically engages whenever Release Workflow (RW) validations fail due to markdownlint or terminology issues. MMW provides a deterministic path to triage, batch, and resolve documentation lint debt without derailing active releases, while ensuring new regressions are blocked immediately.

---

## Problem Statement

- RW validators currently scan the entire repository and report ~2,300 legacy markdown/terminology issues, even when the current change set is compliant.  
- Without a structured maintenance workflow, each release devolves into ad-hoc cleanup attempts, or the validator is disabled entirely—both outcomes erode governance.  
- The existing perpetual markdown maintenance task (E7:S01:T05) lacks an execution framework, making it hard to demonstrate progress or provide auditable evidence.  
- RW step owners have no clear decision tree for differentiating “regression introduced now” vs “legacy debt,” so releases stall indefinitely.

---

## Goals / Responsibilities

MMW must:

1. **Trigger Reliably**  
   - Automatically start when RW validators flag markdown-related failures (terminology, markdownlint, doc-style).  
   - Permit manual invocation when a backlog sweep is scheduled (perpetual maintenance cycles).

2. **Classify Debt vs Regression**  
   - Compare validator findings against the git diff for the current release.  
   - If new files introduced violations, block RW until fixed.  
   - If failures stem from untouched files, hand off to MMW backlog execution while allowing RW to resume (with evidence attached).

3. **Produce Auditable Evidence**  
   - Checklist template stored under `docs/maintenance/logs/mmw/`.  
   - Capture validator output, impacted files, remediation choice (fix now vs defer), owners, and completion timestamps.  
   - Feed results back into RW step logs and Kanban narrative.

4. **Coordinate with Perpetual Tasks**  
   - Convert legacy batches into scoped subtasks under E7:S01:T05 (Markdown Maintenance).  
   - Provide progress metrics (issues resolved vs remaining) for each cycle.  
   - Update Documentation Policy references so lifecycle metadata stays consistent.

5. **Integrate with CI / Tooling**  
   - Extend documentation validator to run in "scoped" mode (touched files) and "baseline" mode (full tree).  
   - MMW manages baseline failures, ensuring RW only blocks when scoped mode fails or when MMW evidence is missing.

---

## Proposed Scope

- Author ICW-style artifacts (spec, test design, implementation plan) for MMW under `docs/implementation-cycles/`.  
- Create checklist + log template in `docs/maintenance/logs/mmw/`.  
- Enhance validator script to emit separate scoped/baseline sections consumable by RW + MMW.  
- Update Release Runbook to describe when/how MMW is invoked (e.g., RW Step 8 failure path).  
- File Story Task **E7:S01:T07 – Markdown Maintenance Workflow** covering implementation + integration work.  
- Provide CI hook (read-only) that verifies MMW evidence for releases that proceed while legacy debt remains.

---

## Acceptance Criteria

1. RW validator distinguishes between scoped regressions and legacy baseline issues.  
2. When baseline issues exist, RW run logs reference the corresponding MMW checklist entry ID.  
3. At least one MMW maintenance cycle is documented (log + diff) demonstrating backlog reduction.  
4. Release Runbook and Documentation Policy cite MMW as the escalation path for markdown debt.  
5. Kanban Story E7:S01 includes Task T07 with clear deliverables tied to FR-058.  
6. CI hook fails RW if scoped violations exist or if baseline violations lack an active MMW log entry.

---

## Dependencies & References

- **FR-057 / T06 (UCW)** – Ensures changelog governance; MMW complements UCW by covering broader markdown hygiene.  
- **E7:S01:T05** – Perpetual markdown maintenance task that receives structured cycles via MMW.  
- **Documentation Policy Framework** – Defines taxonomy, lifecycle metadata, and lint expectations that MMW enforces.  
- **Release Workflow** – Step 8 validators and run logs integrate MMW evidence.

---

## Next Steps

1. Approve FR-058 and assign to Documentation + RW Agents.  
2. Create Task E7:S01:T07 with ICW artifacts and implementation plan.  
3. Update validator tooling + runbook to support scoped/baseline reporting and MMW hooks.  
4. Execute first MMW cycle targeting a manageable subset of backlog files.
