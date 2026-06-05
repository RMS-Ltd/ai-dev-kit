---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:50Z
expires_at: null
housekeeping_policy: keep
---

# Story 001 – RW Agent Execution & Docs

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Completed:** N/A (story reopened for ongoing RW validation work)
**Last updated:** 2026-06-05 (v0.2.1.24+3 — **T24** / BR-097 task_touch collision guards)
**Version:** v0.2.1.24+3
**Code:** E2S01

---

## Overview

Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. This story ensures that the Release Workflow documentation is template-ready and can be easily adopted by other projects.

---

## Goal

Make RW agent execution documentation fully portable, clearly distinguishing dev-kit behaviour from external examples. Ensure that the Release Workflow accurately reflects verification requirements for fixes and other changes.

---

## Task Checklist

- [x] **E02:S01:T01 – Audit `release-workflow-agent-execution.md` for project-specific assumptions** ✅ COMPLETE (v0.2.1.1+3)
  - Task: [`T01-audit-report`](story-01-rw-agent-execution-and-docs/T01-audit-report.md)
- [x] **E02:S01:T02 – Tag Confidentia/fynd.deals examples and add dev-kit examples** ✅ COMPLETE (v0.2.1.1+4)
  - Task: [`T02-tag-confidentiafynddeals-examples-and-add-dev-kit-examples-c`](story-01-rw-agent-execution-and-docs/T02-tag-confidentiafynddeals-examples-and-add-dev-kit-examples-c.md)
- [x] **E02:S01:T03 – Align `.cursorrules` RW trigger section with dev-kit policy** ✅ COMPLETE (v0.2.1.1+5)
  - Task: [`T03-align-cursorrules-rw-trigger-section-with-dev-kit-policy-com`](story-01-rw-agent-execution-and-docs/T03-align-cursorrules-rw-trigger-section-with-dev-kit-policy-com.md)
- [x] **E02:S01:T04 – Update RW changelog step to require verification before marking fixes as "fixed"** ✅ COMPLETE (v0.2.1.1+2)
  - Task: [`T04-update-rw-changelog-step-to-require-verification-before-mark`](story-01-rw-agent-execution-and-docs/T04-update-rw-changelog-step-to-require-verification-before-mark.md)
- [x] **E02:S01:T05 – Harden RW branch safety checks to stop execution on wrong branch** ✅ COMPLETE (v0.2.1.5+1)
  - Task: [`T05-harden-rw-branch-safety-checks-to-stop-execution-on-wrong-br`](story-01-rw-agent-execution-and-docs/T05-harden-rw-branch-safety-checks-to-stop-execution-on-wrong-br.md)
- [x] **E02:S01:T06 – Fix changelog validator ordering bug** ✅ COMPLETE (v0.2.1.6+4 – Validator now supports both Keep a Changelog and Canonical formats with auto-detection)
  - Task: [`T06-validate-version-bump-story-detection-br001`](story-01-rw-agent-execution-and-docs/T06-validate-version-bump-story-detection-br001.md)
- [x] **E02:S01:T07 – Add support for update/maintenance branch patterns in branch validation** ✅ COMPLETE (v0.2.1.7+1)
  - Task: [`T07-add-support-for-updatemaintenance-branch-patterns-in-branch`](story-01-rw-agent-execution-and-docs/T07-add-support-for-updatemaintenance-branch-patterns-in-branch.md)
- [x] **E02:S01:T08 – Add Step 9 - IDE problem checking to Release Workflow** ✅ COMPLETE (v0.2.1.8+1 – FR-024 implemented: Step 9 added for IDE/linter problem checking)

- [x] **E02:S01:T09 – BR-060: RW allow `IN PROGRESS` task releases (Step 1c)** - ✅ COMPLETE (closeout pass 2026-04-07; forensic **v0.6.6.60+1** / **E06:S06:T60** at release; canonical **E02:S01:T09**) — [Task doc](story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md) | [BR-060](../../fr-br/BR-060-rw-in-progress-task-gate-blocks-build-releases.md)
- [ ] **E02:S01:T10 – UXR-006: Allow `dev` branch as accepted RW validator context (solo workflow)** - TODO — [Task doc](story-01-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | [UXR-006](../../fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md)
- [x] **E02:S01:T11 – BR-062: RW Step 7 must not leave completed tasks on in-progress kboard** - ✅ COMPLETE (v0.2.1.11+2 – scope expanded to full mode + `kanban_init`; active MoSCOW COMPLETE-row pruning + regression tests) — [Task doc](story-01-rw-agent-execution-and-docs/T11-rw-k-kanban-init-board-hygiene-for-completed-tasks-br062.md) | [BR-062](../../fr-br/BR-062-rw-k-kanban-init-does-not-prune-completed-tasks-from-kboard.md)
- [x] **E02:S01:T12 – BR-061: RW explicit task-id should not require manual pre-alignment of `version.py`** - ✅ COMPLETE (v0.2.1.12+2 – explicit-request reconciliation + guardrail-preserving tests/docs released) — [Task doc](story-01-rw-agent-execution-and-docs/T12-rw-explicit-task-id-version-alignment-br061.md) | [BR-061](../../fr-br/BR-061-rw-explicit-task-id-requires-manual-version-alignment.md)
- [x] **E02:S01:T13 – BR-063: RW -k must prevent task attribution drift vs version anchor** - ✅ COMPLETE (v0.2.1.13+2 – filing, forensic cleanup, `rw-k` guard + `--art` + tests/docs) — [Task doc](story-01-rw-agent-execution-and-docs/T13-rw-k-forensic-task-attribution-alignment-br063.md) | [BR-063](../../fr-br/BR-063-rw-k-task-attribution-drift-between-requested-task-and-version-anchor.md)
- [x] **E02:S01:T14 – FR-048: RW Trigger Extensions for Multiple Use Cases (traceability task wiring)** - ✅ COMPLETE (v0.2.1.14+1) — [Task doc](story-01-rw-agent-execution-and-docs/T14-rw-trigger-extensions-multiple-use-cases-fr048.md) | [FR-048](../../fr-br/FR-048-rw-trigger-extensions-for-multiple-use-cases.md)
- [x] **E02:S01:T15 – FR-049: Canonical RW Step List - Single Source of Truth (traceability task wiring)** - ✅ COMPLETE (v0.2.1.15+1) — [Task doc](story-01-rw-agent-execution-and-docs/T15-canonical-rw-step-list-single-source-of-truth-fr049.md) | [FR-049](../../fr-br/FR-049-canonical-rw-step-list-single-source-of-truth.md)
- [x] **E02:S01:T16 – BR-064: RW `dev` branch should not enforce epic lock** - ✅ COMPLETE (v0.2.1.16+1) — [Task doc](story-01-rw-agent-execution-and-docs/T16-rw-dev-branch-neutral-context-no-epic-lock-br064.md) | [BR-064](../../fr-br/BR-064-rw-dev-branch-should-not-enforce-epic-lock.md)
- [x] **E02:S01:T17 – FR-077: IPW-built task status transition and kboard synchronization** - ✅ COMPLETE (v0.2.1.17+3 – ownership matrix aligned across IPW/RW/UKW, deterministic requested-task drift checks, recurrence regression tests) — [Task doc](story-01-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | [FR-077](../../fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md)
- [x] **E02:S01:T18 – RW Step 8 stage-completeness guardrails (BR-070)** - ✅ COMPLETE (v0.2.1.18+1 — post-commit validator, tests, docs) — [Task doc](story-01-rw-agent-execution-and-docs/T18-rw-step-8-stage-completeness-guardrails-br070.md) | [BR-070](../../fr-br/BR-070-rw-k-stage-files-completeness-gap-allows-partial-kanban-commit.md)
- [x] **E02:S01:T19 – RW trigger routing execution regression (BR-071)** - ✅ COMPLETE (v0.2.1.19+1 — fix: CLAUDE.md + .claude/commands/rw.md; root cause: no Claude Code instruction file; BR-071 RESOLVED) — [Task doc](story-01-rw-agent-execution-and-docs/T19-rw-trigger-routing-execution-regression-br071.md) | [BR-071](../../fr-br/BR-071-rw-trigger-routing-not-executing-from-chat-session.md)
- [x] **E02:S01:T20 – SemVer task-touch collision retrospective fix (BR-073)** - ✅ COMPLETE (v0.2.1.20+1 — registry patch, BR doc, task doc, kanban updates) — [Task doc](story-01-rw-agent-execution-and-docs/T20-semver-task-touch-collision-retrospective-fix-br073.md) | [BR-073](../../fr-br/BR-073-semver-task-touch-collision-retrospective-fix.md)
- [x] **E02:S01:T21 – RW release commits test artifacts, deletes prior-build changelog, emits version typo (BR-074)** - ✅ COMPLETE (v0.2.1.21+1 — `.gitignore` exclusions, restored +1 changelog, patched +2 typo, Step 3 immutability guards, archive link validator, dual-source parity updated) — [Task doc](story-01-rw-agent-execution-and-docs/T21-rw-release-commits-test-artifacts-and-changelog-integrity-failures-br074.md) | [BR-074](../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)
- [x] **E02:S01:T22 – RW perpetual-task BUILD must persist in `version.py` (BR-075)** - ✅ COMPLETE (**v0.2.1.22+1** — perpetual BUILD validator; version-bump skill path) — [Task doc](story-01-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md) | [BR-075](../../fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md) | [IPP](../../../../implementation-cycles/IPP-E2S01T22-rw-perpetual-version-py-build-br075.md)

- [x] **E02:S01:T23 – Tool-agnostic workflow step tracking + persisted run logs** - ✅ COMPLETE (**v0.2.1.23+1**)
  - Task: [T23-tool-agnostic-workflow-step-tracking-and-runlogs.md](story-01-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md) | [IPP](../../../../implementation-cycles/IPP-E2S01T23-tool-agnostic-workflow-step-tracking-runlogs.md) | [ADR-011](../../../../architecture/standards-and-adrs/ADR-011-workflow-step-tracker-and-agent-run-log.md)

- [x] **E02:S01:T24 – RW BUILD increment enforcement and release-tag immutability (BR-097)** - ✅ COMPLETE (**v0.2.1.24+3** — task_touch registry finalize, release contract validator, strategy-aware collision recovery, `--art` cross-task BUILD) — [Task doc](story-01-rw-agent-execution-and-docs/T24-rw-build-increment-enforcement-and-tag-immutability-br097.md) | [BR-097](../../fr-br/BR-097-rw-agent-reuses-tagged-build-and-force-moves-release-tags.md) | [IPP](../../../../implementation-cycles/IPP-E02S01T24-rw-build-increment-tag-immutability.md)

---

## Acceptance Criteria

- [x] RW documentation is fully portable and template-ready ✅
- [x] Examples are clearly tagged as dev-kit vs external ✅
- [x] Changelog step requires verification before marking fixes as "Fixed" ✅
- [x] Unverified fixes are logged as "Attempted fix" until verified ✅
- [x] Verification methods (test suite, manual testing) are documented ✅
- [x] Validation checks enforce verification requirements ✅

---

## Dependencies

**Coordinates With:**
- Epic 3: Numbering & Versioning Framework (for versioning integration)
- Epic 4: Kanban Framework (for Kanban integration)

---

## References

- `packages/frameworks/workflow-mgt/docs/documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `packages/frameworks/workflow-mgt/cursorrules-rw-trigger-section.md`
- `docs/architecture/standards-and-adrs/dev-kit-versioning-policy.md`

---

_Last updated: 2026-04-02 — Story reopened; **E02:S01:T09** [BR-060](story-01-rw-agent-execution-and-docs/T09-rw-allow-in-progress-task-releases-br060.md). Prior: 2025-12-09 (v0.2.1.7+1 – Task 7 completed)._

