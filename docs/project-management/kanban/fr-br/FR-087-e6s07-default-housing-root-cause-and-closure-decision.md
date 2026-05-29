---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:20:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-087: Investigate `E6:S07` default-housing drift, codification points, and closure decision

**Type:** Feature Request (FR)  
**ID:** FR-087  
**Submitted:** 2026-04-20  
**Submitted By:** User forensic governance request  
**Priority:** HIGH  
**Severity:** HIGH  
**Status:** OPEN

**Implementing Task:** [E4:S19:T03](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md)  
**IPP:** [`IPP-E4S19T03-e6s07-default-housing-drift-investigation.md`](../../../implementation-cycles/IPP-E4S19T03-e6s07-default-housing-drift-investigation.md)

---

## Summary

Investigate why `E6:S07` keeps being used as a default home for unrelated tasks, identify where this behavior is codified (if anywhere), recover the original intended scope of `S07`, and produce a closure/partition decision with enforceable governance guardrails.

---

## Problem Statement

`E6:S07` has accumulated heterogeneous work far beyond its original charter, and intake/placement behavior is repeatedly drifting toward `S07` as a catch-all destination. This degrades semantic traceability, overloads one story, and obscures accountability for governance and delivery ownership.

The project needs an evidence-backed explanation of:

- Why `S07` became a go-to default.
- Whether this is hard-coded in tooling, policy, templates, or habitual operator behavior.
- What `S07` originally existed to do.
- Whether `S07` should be closed, split, or narrowed with explicit routing rules.

---

## Requirements

### Functional Requirements

- [ ] **FR-087-F1:** Produce a forensic origin analysis of `E6:S07` (initial charter, historical evolution, inflection points).
- [ ] **FR-087-F2:** Identify all codification points (scripts, validators, templates, policies, workflow docs, rules, prompts) that bias or permit `S07` as default housing.
- [ ] **FR-087-F3:** Classify existing `S07` tasks by semantic fit (`in-scope`, `borderline`, `out-of-scope`) and quantify drift.
- [ ] **FR-087-F4:** Provide closure decision options for `S07` (`close`, `keep-open-narrowed`, `split/re-house`) with impact/risk analysis.
- [ ] **FR-087-F5:** Define enforceable placement guardrails to prevent future default-housing drift.
- [ ] **FR-087-F6:** Define and enforce explicit re-housing protocol for misfiled tasks (including required board/story/FBU rewiring and rationale capture) so Story 007 cannot silently re-accumulate catch-all work.

### Non-Functional Requirements

- [ ] **FR-087-NF1:** Findings must cite primary repository evidence (docs/policy/script locations) for each conclusion.
- [ ] **FR-087-NF2:** Recommendations must preserve backward traceability and avoid breaking existing links/history.
- [ ] **FR-087-NF3:** Governance outputs must be actionable and testable in workflow validation.

---

## Acceptance Criteria

- [ ] Investigation report traces `S07` intent from story charter to current usage pattern.
- [ ] Codification inventory explicitly distinguishes hard-coded behavior vs social/process habit.
- [ ] A disposition is chosen for `S07` with clear success criteria and transition plan.
- [ ] Guardrails are documented as concrete policy/validator changes for follow-up implementation.
- [ ] At least one mis-housed task is re-housed using the protocol to verify practical enforcement and traceability preservation.
- [ ] FR/task/story/boards are fully cross-wired for deterministic traceability.

---

## Scope Analysis

**Problem Domain:** Intake/governance drift and semantic task placement  
**Affected Areas:**

- [x] Story charter and task-placement governance
- [x] Workflow/policy/template/validator routing surfaces
- [x] Kanban/FBU traceability quality and maintenance burden
- [ ] Runtime feature implementation behavior (out of scope for this intake)

**Estimated Complexity:**

- [ ] Simple (1-3 days)
- [ ] Medium (1 week)
- [x] Complex (2+ weeks)
- [ ] Very Complex (1+ month)

---

## Related

- [FR-086](./FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
- [FR-084](./FR-084-ipp-post-run-governance-reconciliation-ownership.md)
- [FR-041](./FR-041-perpetual-task-for-release-workflow-maintenance.md)
- [Story 007](../epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management.md)
- [Story 019](../epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake.md)
- [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
