---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-07T23:50:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 006 – Feature Requests

**Status:** IN PROGRESS
**Priority:** MEDIUM  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-07  
**Last updated:** 2026-05-17 (v0.6.6.63+2 – T63 COMPLETE: RW Recovery Journal and Rollback Contract shipped)
**Version:** v0.6.6.63+1
**Code:** E6S06

**Note:** This story was renumbered from S05 to S06 as part of the repository story abstract space resolution (E9:S01:T08).

**Story Type:** Perpetual Maintenance  
**Completed:** N/A (Perpetual story - never completes)  
**Explanation:** This story represents ongoing feature request tracking and implementation work. New feature requests will create new tasks under this story. The story remains IN PROGRESS even when all current tasks are complete, as new feature requests may be submitted at any time.

---

## Task Checklist
- [x] **E6:S06:T01 – FR/BR/UXR Prioritization Board Implementation** - ✅ COMPLETED (HIGH priority, Create prioritization board for FRs, BRs, and UXRs with identical structure to Kanban board)
  - Task: [`T01-fr-br-uxr-prioritization-board.md`](Story-006-feature-requests/T01-fr-br-uxr-prioritization-board.md)


- [x] **E6:S06:T02 – Fix Release Workflow Micromanagement Issues** - 🔄 IN PROGRESS, BLOCKED (CRITICAL, User pain and frustration with tool discovery, pattern matching failures, and excessive manual intervention; blocking productive work. Root cause identified as Cascade whitelist security prompts.)
  - Task: [`T02-fix-release-workflow-micromanagement-issues.md`](Story-006-feature-requests/T02-fix-release-workflow-micromanagement-issues.md) | [BR-038](../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)


- [x] **E6:S06:T03 – Investigate Apple SDK License Blocking Issue** - ✅ COMPLETED (HIGH priority, Apple SDK license blocking issue prevents proper installation or usage of ai-dev-kit components on Apple platforms; needs investigation to understand root cause and implement solution)
  - Task: [`T03-apple-sdk-license-blocking-issue.md`](Story-006-feature-requests/T03-apple-sdk-license-blocking-issue.md) | [BR-040](../../fr-br/BR-040-apple-sdk-license-blocking-issue.md)


- [x] **E6:S06:T41 – Windsurf: Investigate how to leverage AGENTS.md and SKILL.md for workflows** - ✅ COMPLETED (CRITICAL, Implement AGENTS.md and SKILL.md to define specialized workflow agents and capabilities, enabling Cascade to execute workflows autonomously without manual intervention. This addresses fundamental workflow execution issues including terminal interaction problems and agent behavior inconsistencies.)
  - Task: [`T41-implementation-summary.md`](Story-006-feature-requests/T41-implementation-summary.md) | [FR-041](../../fr-br/FR-041-windsurf-investigate-agents-skills-for-workflows.md)


- [x] **E6:S06:T42 – Fix UKW Agent Board Cleanup Failure** - ✅ COMPLETED (HIGH priority, UKW Agent does not properly clean up completed tasks from MoSCOW sections, leaving completed tasks listed in active priority sections despite being marked as COMPLETE. This impairs autonomous workflow reliability and requires manual intervention.)
  - Task: [`T42-fix-ukw-agent-board-cleanup-failure.md`](Story-006-feature-requests/T42-fix-ukw-agent-board-cleanup-failure.md) | [BR-042](../../fr-br/BR-042-ukw-agent-board-cleanup-failure.md)


- [x] **E6:S06:T56 – RW Ambiguous Task Identifier Typo Risk** - ✅ COMPLETE (v0.6.6.56+4) (HIGH priority, BR-056: validate_rw_task_intent + Step 1b; live verification 2026-03-25)
  - Task: [`T56-rw-ambiguous-task-identifier-typo-risk.md`](Story-006-feature-requests/T56-rw-ambiguous-task-identifier-typo-risk.md) | [BR-056](../../fr-br/BR-056-rw-ambiguous-task-identifier-typo-risk.md)


- [x] **E6:S06:T57 – BR-039: Cascade whitelist / security prompt usability (vendor)** - ✅ COMPLETE (**`RW -k`** v0.6.6.57+5 **v0.4.704+5** — Option B SemVer; **[BR-039](../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)** **IN PROGRESS** for **product**)
  - Task: [`T57-br039-cascade-whitelist-security-prompt-blocker.md`](Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) | [BR-039](../../fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md)


- [x] **E6:S06:T58 - RW `--art` flag should work in all RW modes** - ✅ COMPLETE (v0.6.6.58+2) (HIGH priority, BR-060: all-mode support implemented; follow-up cleanup release for board consistency and repo hygiene)
  - Task: [`T58-rw-art-flag-all-modes-support.md`](Story-006-feature-requests/T58-rw-art-flag-all-modes-support.md) | [BR-060](../../fr-br/BR-060-rw-art-flag-should-work-in-all-rw-modes.md)


- [ ] **E6:S06:T61 – UXR-006: MoSCOW row last-modified UTC stamps** - 🔄 IN PROGRESS (v0.6.6.61+1 — **RW**; HIGH — drift / IPW; optional **AC-4** tooling open)
  - Task: [`T61-uxr-006-kanban-moscow-last-modified-stamps.md`](Story-006-feature-requests/T61-uxr-006-kanban-moscow-last-modified-stamps.md) | [UXR-006](../../fr-br/UXR-006-kanban-moscow-row-last-modified-utc-stamp.md)


- [x] **E6:S06:T62 – Global IPW-gated implementation contract (FR-083)** - ✅ COMPLETE (v0.6.6.62+2, policy gate enforced in `AGENTS.md` + `.cursorrules`, IPW housed and linked)
  - Task: [`T62-global-ipw-gated-implementation-contract-fr083.md`](Story-006-feature-requests/T62-global-ipw-gated-implementation-contract-fr083.md) | [FR-083](../../fr-br/FR-083-global-ipw-gated-implementation-contract.md)


- [x] **E6:S06:T63 – RW recovery journal and rollback contract (BR-038 follow-on)** - ✅ COMPLETE (v0.6.6.63+2) (HIGH, deterministic per-run journaling, structured recovery reporting, and rollback/compensation contract for RW failures)
  - Task: [`T63-rw-recovery-journal-and-rollback-contract-br038.md`](Story-006-feature-requests/T63-rw-recovery-journal-and-rollback-contract-br038.md) | [BR-038](../../fr-br/BR-038-release-workflow-micromanagement-and-tool-discovery-issues.md)


- [x] **E6:S06:T999 – Board Cleanup Test Task** - ✅ COMPLETED (LOW priority, Dummy task for testing UKW Agent board cleanup functionality. This task will be marked as COMPLETE to trigger board cleanup and verify removal from active sections.)
  - Task: [`T999-board-cleanup-test.md`](Story-006-feature-requests/T999-board-cleanup-test.md)
  - Status: ✅ COMPLETED - Board implemented with MoSCOW structure, all 69 items tracked
  - Completed: 2026-03-09

---

## Overview

This story tracks all feature requests related to framework management, installation tools, update mechanisms, and related framework management processes. Feature requests are converted into tasks following the FR/BR → Task → Story → Epic flow defined in the Kanban governance policy.

**Perpetual Story:** This is a perpetual maintenance story that never completes. New feature requests will create new tasks under this story. The story remains IN PROGRESS even when all current tasks are complete, as feature request tracking is an ongoing activity.

---

## Goal

Systematically track, prioritize, and implement feature requests for framework packages, installation tools, update mechanisms, and related framework management processes.

---

## Dependencies

**Blocks:**

- None

**Blocked By:**

- None

**Coordinates With:**

- Epic 5 (Documentation Management) - Features may require documentation updates
- Epic 2 (Workflow Management Framework) - Features for workflow framework tools
- Epic 7 (Examples & Adoption) - Features for framework adoption and examples

---

## References

- `docs/project-management/kanban/epics/Epic-6/Epic-6.md`
- `docs/project-management/rituals/policy/kanban-governance-policy.md` - FR/BR → Task → Story → Epic flow

