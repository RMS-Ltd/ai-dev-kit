---
lifecycle: evergreen
ttl_days: null
created_at: 2025-12-18T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 014 – Kanban Framework Maintenance

**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2025-12-18  
**Last updated:** 2026-06-15 (v0.4.14.12+1 — T12 kanban init FR-134)  
**Version:** v0.4.14.12+1  
**Code:** E4S14

---

## Task Checklist

- [x] **E04:S14:T01 – Update packaged RW to handle UKW context and perpetual tasks** ✅ COMPLETE (v0.4.14.1+1)
  - Task: [`T01-planning-spec-tests-impl`](story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md)
  - Task: [`T01-planning-spec-tests-impl.md`](story-14-kanban-framework-maintenance/T01-planning-spec-tests-impl.md)

- [x] **E04:S14:T02 – Restore RC review planning artifacts** ✅ COMPLETE (v0.4.14.2+1)
  - Task: [`T02-restore-rc-review-artifacts`](story-14-kanban-framework-maintenance/T02-restore-rc-review-artifacts.md)
  - Task: [`T02-restore-rc-review-artifacts.md`](story-14-kanban-framework-maintenance/T02-restore-rc-review-artifacts.md)

- [x] **E04:S14:T03 – Add Missing Implementation Cycle Workflow (ICW)** ✅ COMPLETE (v0.4.14.3+1)
  - Task: [`T03-add-missing-implementation-cycle-workflow-icw.md`](story-14-kanban-framework-maintenance/T03-add-missing-implementation-cycle-workflow-icw.md)
  - BR Reference: [BR-055](../../fr-br/BR-055-missing-implementation-cycle-workflow-icw.md)
  - GitHub Issue: #22

- [x] **E04:S14:T04 – Kanban policy task prioritisation queue/stack (FR-037)** ✅ COMPLETE (semantic home; delivery **E05:S01:T37**)
  - Task: [`T04-kanban-policy-task-prioritisation-queue-stack-fr037.md`](story-14-kanban-framework-maintenance/T04-kanban-policy-task-prioritisation-queue-stack-fr037.md) | [FR-037](../../fr-br/FR-037-kanban-policy-task-prioritisation-queue-stack.md)

- [x] **E04:S14:T05 – UKW optional reprioritization `--rp` flag (FR-085)** — ✅ COMPLETE (re-housed from E02:S16:T06) — [Task](story-14-kanban-framework-maintenance/T05-ukw-optional-reprioritization-rp-flag-fr085.md) | [FR-085](../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)

- [x] **E04:S14:T06 – UKW extension for FR/BR/UXR temporal tracking (FR-050)** — ✅ COMPLETE (re-housed from E02:S16:T07) — [Task](story-14-kanban-framework-maintenance/T06-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | [FR-050](../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)

- [x] **E04:S14:T07 – BR-059: UKW MoSCOW full open-task coverage** — ✅ COMPLETE (re-housed from E02:S16:T13) — [Task](story-14-kanban-framework-maintenance/T07-br059-ukw-moscow-full-story-task-coverage.md) | [BR-059](../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)

- [x] **E04:S14:T08 – UKW archive completed rows `-c` (FR-102)** — ✅ COMPLETE (re-housed from E02:S16:T16) — [Task](story-14-kanban-framework-maintenance/T08-ukw-archive-completed-board-rows-fr102.md) | [FR-102](../../fr-br/FR-102-ukw-archive-completed-board-rows.md)

- [x] **E04:S14:T09 – UKW lean active board contract (FR-109)** — ✅ COMPLETE (re-housed from E02:S16:T18) — [Task](story-14-kanban-framework-maintenance/T09-ukw-lean-active-board-contract-fr109.md) | [FR-109](../../fr-br/FR-109-ukw-lean-active-board-contract.md)

- [x] **E04:S14:T10 – Restore kboard IPP segment on MoSCOW rows (UXR-023)** — ✅ COMPLETE (re-housed from E02:S16:T20) — [Task](story-14-kanban-framework-maintenance/T10-restore-kboard-ipp-segment-uxr023.md) | [UXR-023](../../fr-br/UXR-023-kboard-ipp-segment-regression.md)

- [ ] **E04:S14:T11 – UKW gap discovery — unfiled FR/BR (FR-043)** — 📋 TODO (re-housed from E02:S16:T14) — [Task](story-14-kanban-framework-maintenance/T11-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](../../fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)

- [ ] **E04:S14:T12 – SQLite kanban-completed ledger + UKW PDF report (FR-134)** — 📋 TODO (**v0.4.14.12+1** kanban init) — [Task](story-14-kanban-framework-maintenance/T12-kanban-completed-sqlite-ledger-pdf-report-fr134.md) | [FR-134](../../fr-br/FR-134-kanban-completed-sqlite-ledger-pdf-report.md)

---

## Overview

This story tracks ongoing maintenance and updates to the Kanban Framework package. Maintenance tasks include framework updates, bug fixes, documentation improvements, and integration with other frameworks (e.g., RW integration with UKW and perpetual task support).

---

## Goal

Ensure the Kanban Framework package remains current, well-maintained, and properly integrated with other ADK frameworks. Address maintenance issues, update documentation, and implement framework improvements as needed.

---

## Dependencies

**Blocks:**
- None

**Blocked By:**
- None

**Coordinates With:**
- Epic 6, Story 6, Task 8 (UKW perpetual task - source of pattern)
- Epic 2 (Workflow Management Framework - RW package owner)

---

## References

- **RW Package:** `packages/frameworks/workflow-mgt/`
- **RW Execution Guide:** `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- **RW Workflow YAML:** `packages/frameworks/workflow-mgt/workflows/release-workflow.yaml`
- **UKW Task:** `docs/kanban/epics/epic-06/story-06-adk-implementation-analysis-and-package-management/T08-update-kanban-workflow-ukw.md`
- **UKW Analysis:** `docs/analysis/ukw-versioning-reasoning-analysis.md`

---

**Last Updated:** 2026-01-19 (v0.4.14.2+1 – T02 complete: RC review artifacts restored)  
**Version:** v0.4.14.2+1  
**Status:** IN PROGRESS

