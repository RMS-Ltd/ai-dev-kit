---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-04T12:01:51Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2: Workflow Management Framework

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-02  
**Last updated:** 2026-06-12 (v0.2.16.2+10 – Kanban documentation setup)
**Branch:** `epic/2-workflow-management-framework`  
**Version Schema:** `0.2.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [ ] **E2:S01 – RW Agent Execution & Docs** - IN PROGRESS (reopened 2026-04-02; **E02:S01:T24** ✅ **v0.2.1.24+3** — BR-097 task_touch collision guards)
  - Story: [`story-01-rw-agent-execution-and-docs.md`](story-01-rw-agent-execution-and-docs.md)
  - Tasks: T01–T21 with T21 ✅ COMPLETE (v0.2.1.21+1) — [BR-074](../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)

- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1 – All tasks complete: PDCA phases integrated into RW, docs, templates, and examples)
  - Story: [`story-02-pdca-integration-into-release-workflow.md`](story-02-pdca-integration-into-release-workflow.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE

- [x] **E2:S03 – RW Deterministic vs Agentic Execution** - COMPLETE ✅ (v0.2.3.6+1 – All tasks complete: deterministic vs agentic RW implementation, docs, and validation)
  - Story: [`story-03-additional-workflows-and-examples.md`](story-03-additional-workflows-and-examples.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE

- [x] **E2:S04 – RW Step 8 Hardening** - COMPLETE ✅ (v0.2.4.9+3 – All tasks complete: validation improvements, error handling, and docs)
  - Story: [`story-04-rw-installer-and-plug-and-play-adoption.md`](story-04-rw-installer-and-plug-and-play-adoption.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE, T009 ✅ COMPLETE

- [x] **E2:S05 – Post-Implementation Review (PIR) Workflow** - COMPLETE ✅ (v0.2.5.15+1 – All tasks complete: PIR workflow implementation, templates, integration, testing, and documentation)
  - Story: [`story-05-post-implementation-review-workflow.md`](story-05-post-implementation-review-workflow.md)
  - Tasks: T01 ✅ COMPLETE, T02 ✅ COMPLETE, T03 ✅ COMPLETE, T04 ✅ COMPLETE, T05 ✅ COMPLETE, T06 ✅ COMPLETE, T07 ✅ COMPLETE, T08 ✅ COMPLETE, T09 ✅ COMPLETE, T10 ✅ COMPLETE, T11 ✅ COMPLETE, T12 ✅ COMPLETE, T13 ✅ COMPLETE, T14 ✅ COMPLETE, T15 ✅ COMPLETE

- [x] **E2:S06 – RW Step 10 Hardening** - COMPLETE ✅ (v0.2.6.3+1 – All tasks complete: tagging behaviour, guardrails, and docs)
  - Story: [`story-06-package-uninstall-and-recovery.md`](story-06-package-uninstall-and-recovery.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE

- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.8+1 – All tasks complete: trigger registry, deliverable processor, workflow executor, integration, docs, and tests)
  - Story: [`story-07-trigger-aware-release-workflow.md`](story-07-trigger-aware-release-workflow.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE

- [x] **E2:S08 – Harden Release Workflow Reliability** - COMPLETE ✅ (v0.2.8.8+3 — T00–T08 including FR-059 forensic logging closure)
  - Story: [`story-08-harden-release-workflow-reliability.md`](story-08-harden-release-workflow-reliability.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE, T02 ✅ COMPLETE, T03 ✅ COMPLETE, T04 ✅ COMPLETE, T05 ✅ COMPLETE, T06 ✅ COMPLETE, T07 ✅ COMPLETE (FR-015: Harden Kanban docs update step in RW)

- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1 – RW integration; E04:S11:T07 structural migration COMPLETE)
  - Story: [`story-09-kanban-granularity-discrete-task-docs.md`](story-09-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00–T06 ✅ COMPLETE (FR-016 RW Step 1, validators, agent guide, docs, wiring)
  - **Coordination:** E4:S11 Kanban policy/templates/migration — **COMPLETE** (v0.4.11.7+16)

- [x] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - COMPLETE ✅ (v0.2.10.7+1 – All tasks complete: Doc-init policy, RW, validators, docs, migration guide)
  - Story: [`story-10-doc-init-build-zero-for-new-est.md`](story-10-doc-init-build-zero-for-new-est.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.2.10.1+0), T02 ✅ COMPLETE (v0.2.10.2+1), T03 ✅ COMPLETE (v0.2.10.3+1), T04 ✅ COMPLETE (v0.2.10.4+1), T05 ✅ COMPLETE (v0.2.10.5+1), T06 ✅ COMPLETE (v0.2.10.6+1), T07 ✅ COMPLETE (v0.2.10.7+1)
  - **Dependency:** Unblocked (FR-016 complete via E2:S09)

- [x] **E2:S11 – Intake Workflow Automation** - COMPLETE ✅ (v0.2.11.14+2 – T00–T14 complete including BR-051/BR-052/BR-053 hardening)
  - Story: [`story-11-intake-workflow-automation.md`](story-11-intake-workflow-automation.md)
  - Tasks: T00–T14 ✅ COMPLETE (T12 workaround v0.2.11.12+2; T13 BR-051; T14 BR-052)

- [x] **E2:S12 – RW Step 17: Housekeeping** - ✅ COMPLETE (v0.2.12.1+1 – All tasks complete: Step 17 added to RW)
  - Story: [`story-12-rw-step-17-housekeeping.md`](story-12-rw-step-17-housekeeping.md)
  - Tasks: T01 ✅ COMPLETE (v0.2.12.1+1 – Step 17 added: workflow YAML, documentation, and cursor rules updated)

- [x] **E2:S13 – Workflow Management Package Implementation Review** - COMPLETE ✅ (v0.2.13.10+1 — T01–T10 complete; remediation package closed)
  - Story: [`story-13-workflow-management-package-implementation-review.md`](story-13-workflow-management-package-implementation-review.md)
  - Tasks: T01 ✅ COMPLETE (v0.2.13.1+2)

- [ ] **E2:S14 – Workflow Management Package Installation Evaluation** - IN PROGRESS (v0.2.1.9+2)
  - Story: [`story-14-workflow-management-package-installation-evaluation.md`](story-14-workflow-management-package-installation-evaluation.md)

- [x] **E2:S15 – IPW Governance and Publication Contract** - COMPLETE ✅ (v0.2.15.14+1 — T14 ADR-029 stamp immutability defaults)
  - Story: [`story-15-ipw-governance-and-publication-contract.md`](story-15-ipw-governance-and-publication-contract.md)
  - Tasks: T01, T03, T04, T07, T08, T14 ✅ COMPLETE; T02/T05/T06 superseded → T07

- [ ] **E2:S16 – Perpetual Ongoing Operations** - IN PROGRESS (v0.2.16.2+10)
  - Story: [`story-16-perpetual-ongoing-workflow-operations.md`](story-16-perpetual-ongoing-workflow-operations.md)
  - Perpetual lanes: T01–T06 — [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | [IPP-E02S16T24](../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md)

- [ ] **E2:S17 – RW SemVer Characterization & Release State SQLite** - IN PROGRESS (v0.2.17.2+3 — T02 Wave 3 ✅)
  - Story: [`story-17-rw-semver-characterization-and-release-state-sqlite.md`](story-17-rw-semver-characterization-and-release-state-sqlite.md)
  - Tasks: T01 IN PROGRESS (scenario matrix); T02–T06 TODO

---

## Overview

Epic 2 owns the **Workflow Management framework** living under `packages/frameworks/workflow-mgt/`.

It defines how Release Workflow (RW) and other workflows are:

- Documented (agent execution guides, references)
- Integrated with `.cursorrules` and Cursor behaviour
- Used as **portable templates** in other projects

---

... (rest of epic content unchanged)
