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
**Last updated:** 2026-05-26 (v0.2.16.4+12 – Story 16 Task 4 complete)
**Branch:** `epic/2-workflow-management-framework`  
**Version Schema:** `0.2.S.T+B`  
**Production URL:** [N/A for this repo]

---

## Story Checklist

- [ ] **E2:S01 – RW Agent Execution & Docs** - IN PROGRESS (reopened 2026-04-02; latest: **E2:S01:T21** completed at v0.2.1.21+1 for BR-074 artifact hygiene / changelog immutability)
  - Story: [`Story-001-rw-agent-execution-and-docs.md`](Story-001-rw-agent-execution-and-docs.md)
  - Tasks: T01–T21 with T21 ✅ COMPLETE (v0.2.1.21+1) — [BR-074](../../fr-br/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md)

- [x] **E2:S02 – PDCA Integration into Release Workflow** - COMPLETE ✅ (v0.2.2.8+1 – All tasks complete: PDCA phases integrated into RW, docs, templates, and examples)
  - Story: [`Story-002-pdca-integration-into-release-workflow.md`](Story-002-pdca-integration-into-release-workflow.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE

- [x] **E2:S03 – RW Deterministic vs Agentic Execution** - COMPLETE ✅ (v0.2.3.6+1 – All tasks complete: deterministic vs agentic RW implementation, docs, and validation)
  - Story: [`Story-003-additional-workflows-and-examples.md`](Story-003-additional-workflows-and-examples.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE

- [x] **E2:S04 – RW Step 8 Hardening** - COMPLETE ✅ (v0.2.4.9+3 – All tasks complete: validation improvements, error handling, and docs)
  - Story: [`Story-004-rw-installer-and-plug-and-play-adoption.md`](Story-004-rw-installer-and-plug-and-play-adoption.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE, T009 ✅ COMPLETE

- [x] **E2:S05 – Post-Implementation Review (PIR) Workflow** - COMPLETE ✅ (v0.2.5.15+1 – All tasks complete: PIR workflow implementation, templates, integration, testing, and documentation)
  - Story: [`Story-005-post-implementation-review-workflow.md`](Story-005-post-implementation-review-workflow.md)
  - Tasks: T01 ✅ COMPLETE, T02 ✅ COMPLETE, T03 ✅ COMPLETE, T04 ✅ COMPLETE, T05 ✅ COMPLETE, T06 ✅ COMPLETE, T07 ✅ COMPLETE, T08 ✅ COMPLETE, T09 ✅ COMPLETE, T10 ✅ COMPLETE, T11 ✅ COMPLETE, T12 ✅ COMPLETE, T13 ✅ COMPLETE, T14 ✅ COMPLETE, T15 ✅ COMPLETE

- [x] **E2:S06 – RW Step 10 Hardening** - COMPLETE ✅ (v0.2.6.3+1 – All tasks complete: tagging behaviour, guardrails, and docs)
  - Story: [`Story-006-package-uninstall-and-recovery.md`](Story-006-package-uninstall-and-recovery.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE

- [x] **E2:S07 – Trigger-Aware Release Workflow** - COMPLETE ✅ (v0.2.7.8+1 – All tasks complete: trigger registry, deliverable processor, workflow executor, integration, docs, and tests)
  - Story: [`Story-007-trigger-aware-release-workflow.md`](Story-007-trigger-aware-release-workflow.md)
  - Tasks: T001 ✅ COMPLETE, T002 ✅ COMPLETE, T003 ✅ COMPLETE, T004 ✅ COMPLETE, T005 ✅ COMPLETE, T006 ✅ COMPLETE, T007 ✅ COMPLETE, T008 ✅ COMPLETE

- [x] **E2:S08 – Harden Release Workflow Reliability** - COMPLETE ✅ (v0.2.8.7+1 – All tasks complete: Step 7 hardening validated and production-ready)
  - Story: [`Story-008-harden-release-workflow-reliability.md`](Story-008-harden-release-workflow-reliability.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE, T02 ✅ COMPLETE, T03 ✅ COMPLETE, T04 ✅ COMPLETE, T05 ✅ COMPLETE, T06 ✅ COMPLETE, T07 ✅ COMPLETE (FR-015: Harden Kanban docs update step in RW)

- [x] **E2:S09 – Kanban Granularity & Discrete Task Docs (RW Integration)** - COMPLETE ✅ (v0.2.9.6+1 – Story complete: All tasks finished, RW integration complete)
  - Story: [`Story-009-kanban-granularity-discrete-task-docs.md`](Story-009-kanban-granularity-discrete-task-docs.md)
  - Tasks: T00-T06 ✅ COMPLETE (FR-016: RW Step 1, validators, agent execution guide, documentation, dependency wiring)
  - **Coordination:** Coordinates with E4:S11 (Kanban policy and templates)

- [x] **E2:S10 – Versioning Policy Hardening — Doc-Init Build (+0)** - COMPLETE ✅ (v0.2.10.7+1 – All tasks complete: Doc-init policy, RW, validators, docs, migration guide)
  - Story: [`Story-010-doc-init-build-zero-for-new-est.md`](Story-010-doc-init-build-zero-for-new-est.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.2.10.1+0), T02 ✅ COMPLETE (v0.2.10.2+1), T03 ✅ COMPLETE (v0.2.10.3+1), T04 ✅ COMPLETE (v0.2.10.4+1), T05 ✅ COMPLETE (v0.2.10.5+1), T06 ✅ COMPLETE (v0.2.10.6+1), T07 ✅ COMPLETE (v0.2.10.7+1)
  - **Dependency:** Unblocked (FR-016 complete via E2:S09)

- [x] **E2:S11 – Intake Workflow Automation** - COMPLETE ✅ (v0.2.11.11+1 – All tasks complete: Intake workflow automation, CHANGELOG protection, and ordering fixes)
  - Story: [`Story-011-intake-workflow-automation.md`](Story-011-intake-workflow-automation.md)
  - Tasks: T00 ✅ COMPLETE, T01 ✅ COMPLETE (v0.2.11.1+2), T02 ✅ COMPLETE (v0.2.11.2+1), T03 ✅ COMPLETE (v0.2.11.3+1), T04 ✅ COMPLETE (v0.2.11.4+1), T05 ✅ COMPLETE (v0.2.11.5+1), T06 ✅ COMPLETE (v0.2.11.6+1), T07 ✅ COMPLETE (v0.2.11.7+1), T08 ✅ COMPLETE (v0.2.11.8+1), T09 ✅ COMPLETE (v0.2.11.9+3), T10 ✅ COMPLETE (v0.2.11.10+1), T11 ✅ COMPLETE (v0.2.11.11+1 – CHANGELOG ordering violations fixed), T12 🔄 IN PROGRESS (v0.2.11.12+0 – GitHub Actions platform bug resolution)

- [x] **E2:S12 – RW Step 17: Housekeeping** - ✅ COMPLETE (v0.2.12.1+1 – All tasks complete: Step 17 added to RW)
  - Story: [`Story-012-rw-step-17-housekeeping.md`](Story-012-rw-step-17-housekeeping.md)
  - Tasks: T01 ✅ COMPLETE (v0.2.12.1+1 – Step 17 added: workflow YAML, documentation, and cursor rules updated)

- [ ] **E2:S13 – Workflow Management Package Implementation Review** - IN PROGRESS (v0.2.1.9+2)
  - Story: [`Story-013-workflow-management-package-implementation-review.md`](Story-013-workflow-management-package-implementation-review.md)
  - Tasks: T01 ✅ COMPLETE (v0.2.13.1+2)

- [ ] **E2:S14 – Workflow Management Package Installation Evaluation** - IN PROGRESS (v0.2.1.9+2)
  - Story: [`Story-014-workflow-management-package-installation-evaluation.md`](Story-014-workflow-management-package-installation-evaluation.md)

- [ ] **E2:S15 – IPW Governance and Publication Contract** - IN PROGRESS (v0.2.15.7+1)
  - Story: [`Story-015-ipw-governance-and-publication-contract.md`](Story-015-ipw-governance-and-publication-contract.md)
  - Tasks: T01 ✅ COMPLETE — [BR-066](../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)

- [ ] **E2:S16 – Perpetual Ongoing Workflow Operations** - IN PROGRESS (v0.2.16.4+12)
  - Story: [`Story-016-perpetual-ongoing-workflow-operations.md`](Story-016-perpetual-ongoing-workflow-operations.md)
  - Tasks: T01 ✅ COMPLETE; T11 ✅ COMPLETE (FR-096) — [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

---

## Overview

Epic 2 owns the **Workflow Management framework** living under `packages/frameworks/workflow mgt/`.

It defines how Release Workflow (RW) and other workflows are:

- Documented (agent execution guides, references)
- Integrated with `.cursorrules` and Cursor behaviour
- Used as **portable templates** in other projects

---

... (rest of epic content unchanged)
