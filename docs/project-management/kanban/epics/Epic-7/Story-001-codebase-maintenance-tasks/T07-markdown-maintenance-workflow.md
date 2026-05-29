# Task: Markdown Maintenance Workflow (MMW)

**Epic:** E7 – Codebase Maintenance and Review  
**Story:** S01 – Codebase Maintenance Tasks  
**Task ID:** T07  
**Related FR:** FR-058 Markdown Maintenance Workflow  
**Priority:** HIGH

---

## Summary

Design and implement the Markdown Maintenance Workflow (MMW) that triggers when Release Workflow markdown validators fail, distinguishes regressions vs legacy debt, and provides a repeatable maintenance loop (logs, checklists, CI hook) so Release Workflow runs can proceed while perpetual markdown cleanup (E7:S01:T05) makes measurable progress.

---

## Objectives

1. Create ICW artifacts (spec/test/plan) documenting MMW phases, roles, inputs/outputs, and CI hook contract.  
2. Enhance the documentation validator to emit scoped (touched files) vs baseline (full tree) reports consumable by Release Workflow and MMW.  
3. Build checklist/log template under `docs/maintenance/logs/mmw/` for evidence capture (operator + reviewer signatures).  
4. Update Release Runbook to define the Release Workflow Step 8 decision tree (run MMW, attach evidence, resume Release Workflow).  
5. Execute the first MMW maintenance cycle, recording before/after issue counts and updating Task T05 metrics.  
6. Introduce an MMW-specific perpetual task hook (T08 placeholder) so future Release Workflow runs can log maintenance checkpoints.

---

## Deliverables

- MMW specification/test design/implementation plan (`docs/implementation-cycles/ICW-E7S01T07-*`).  
- Validator update supporting scoped/baseline outputs + CLI flags.  
- `docs/maintenance/logs/mmw/UCW-<date>.md` template populated for first cycle.  
- Release Runbook, Kanban board, and Story document updates describing MMW invocation + evidence.  
- CI hook (`mmw-verification`) ensuring baseline debt is tracked with active logs before Release Workflow completes.  
- Perpetual Task integration instructions (T05/T08) showing how maintenance cycles are recorded per Release Workflow.

---

## Acceptance Criteria

- Release Workflow terminologies/markdown validator blocks only when scoped violations exist or when baseline violations lack a corresponding MMW log entry.  
- First MMW checklist/log stored under `docs/maintenance/logs/mmw/` with signatures, diffs, and issue counts before/after.  
- Documentation (runbook, Story, Task, Kanban board) references FR-058 and describes the MMW trigger path.  
- CI hook verifies log presence + evidence references for releases proceeding despite baseline debt.  
- Perpetual markdown maintenance Task (T05) includes pointers to MMW cycle outputs for tracking.
