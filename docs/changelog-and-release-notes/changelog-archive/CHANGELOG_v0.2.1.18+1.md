---
version: 0.2.1.18+1
semver: 0.4.778+1
date: 2026-05-15
epic: 2
story: 1
task: 18
build: 1
type: full
art: true
---

# CHANGELOG v0.2.1.18+1 — RW Step 8 stage-completeness guardrails (BR-070 AC4)

**Release Date:** 2026-05-15  
**Epic:** E2 (Workflow Management)  
**Story:** S01 (RW Agent Execution and Docs)  
**Task:** T18 (RW Step 8 stage-completeness guardrails — BR-070)  
**Build:** 1  
**Type:** Full  
**Adopt Requested Task:** `--art` (adopted E2:S01:T18 as canonical anchor)

---

## Summary

Closed BR-070 AC4 by implementing a post-commit verification validator (`validate_rw_step7_post_commit.py`) that proves the release commit contains every Step-7 output declared in the four-surface report. Finalized T18 by updating all ACs to match BR-070 reality, marking the task COMPLETE, and updating BR-070 with AC4 closure.

---

## Changes

### New Validators

- **packages/frameworks/workflow mgt/scripts/validate_rw_step7_post_commit.py**
  - Post-commit verification validator (BR-070 AC4, FR-092 Wave 8)
  - Compares release commit tree against four-surface report from Step 7
  - Verifies every `touched=True` path is in the commit and not dirty in working tree
  - CLI: `--auto`, `--four-surface-report`, `--touched-files`, `--commit-ref`
  - Exit 0 = PASS, Exit 1 = BLOCK (missing/dirty), Exit 2 = invalid invocation
  - Emits JSON+MD report to `four-surface-reports/`
  - Reuses shared helpers from `validate_rw_step7_completeness.py` via importlib

### New Tests

- **packages/frameworks/workflow mgt/scripts/test_validate_rw_step7_post_commit.py**
  - 8 test cases covering: all committed, idempotent, untracked, modified-unstaged, missing, explicit mode, invalid invocation, commit-ref override
  - Isolated git worktree pattern (mirrors existing test suite)
  - All 8 tests pass

### Documentation Updates

- **packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md**
  - Added `### Step 11.5: Post-Commit Verification (BR-070 AC4)` subsection
  - Documents purpose, invocation, exit codes, blocking semantics, recovery steps

- **packages/frameworks/workflow mgt/workflows/release-workflow.yaml**
  - Added `step-10.5` (Post-Commit Stage Completeness Verification) between Commit and Tag
  - Updated Tag (step-11) and Push (step-12) dependencies to include step-10.5

- **packages/frameworks/workflow mgt/workflows/release-workflow/release-workflow.yaml**
  - Added `step-11.5` between Commit (step-11) and Tag (step-12)
  - Updated Push (step-13) dependencies to include step-11.5

### Task & Bug Report Finalization

- **docs/project-management/kanban/epics/Epic-2/Story-001-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md**
  - Marked AC1–AC5 as complete
  - Status changed to COMPLETE
  - Added forensic marker `✅ COMPLETE (v0.2.1.18+1)`
  - Updated completion evidence and deliverables

- **docs/project-management/kanban/fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md**
  - Marked AC4 as complete
  - Status changed to CLOSED
  - Added AC4 closure note (2026-05-15)
  - All BR-070 ACs now closed

### Version

- **src/fynd_deals/version.py**
  - Bumped: `0.24.1.6+1` → `0.2.1.18+1`
  - Adopted T18 as canonical anchor via `--art`

---

## Acceptance Criteria

- [x] AC1: Pre-commit validator enforces stage-set completeness (existing, verified)
- [x] AC2: `RW -k` task-slice must-include checks for touched Kanban docs (existing, verified)
- [x] AC3: Error output names missing files and remediation action (existing, verified)
- [x] AC4: Post-commit verification asserts staged/committed files cover Step-7 output set (implemented)
- [x] AC5: BR-070 and Story E2:S01 wiring is bidirectionally consistent (updated)

---

## Notes

- No regression in existing `test_validate_rw_step7_completeness.py` (9 tests still pass)
- Release-readiness tests show 3 pre-existing failures (Gate 4 corpus canonical state) unrelated to this change
