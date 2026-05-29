---

## lifecycle: evergreen

ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-05-29 (RW -d: E4:S19:T03 — FR-087 Wave 4 re-housing docs)
**Version:** v0.4.19.3+0

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress. *(Epic 24 book work lives in private `RMS-Ltd/ai-dev-kit-book` — FR-099 / ADR-006.)*
**Intake migration note (FR-072 / Approach D):** Dedicated FR/BR/UXR repository stories are historical registries only; new intake tasks should be created in semantic delivery stories.

> **For Epic/Story/Task structure, see:** `[kanban-structure.md](kanban-structure.md)`  
> **For rules and explanations, see:** `[kanban-board-guide.md](kanban-board-guide.md)`  
> **For completed tasks, see:** `[kanban-completed.md](kanban-completed.md)`  
> **For FR/BR/UXR prioritization, see:** `[fbuboard.md](fbuboard.md)`

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(E1:S04:T03–T07 archived — [kanban-completed.md](kanban-completed.md). FR-099 Phases 0–4 complete; public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) bootstrapped 2026-05-28. **E6:S09** installation story ✅ complete — FR-080/081/082/098; latest **E6:S09:T02** FR-081 brownfield INSTALL chapter **v0.6.9.2+2**.)*

### Should Have (S) - Important Tasks

- **E2:S16:T13** – BR-059: UKW MoSCOW full open-task coverage per in-progress story - 📋 TODO (HIGH, re-housed from `E6:S07:T109`, FR-087 Wave 4) | [Task](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | Last modified: 2026-05-29 17:00 UTC
- **E2:S01:T23** – Tool-agnostic workflow step tracking + persisted run logs - 📋 TODO (HIGH, re-housed from `E6:S07:T18`, FR-087 Wave 4) | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md) | Last modified: 2026-05-29 17:00 UTC
- **E6:S07:T107** – IDE command whitelist optimization - 📋 TODO (HIGH, in-scope ADK agent friction; charter freeze applies to new S07 tasks) | [Task](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md) | Last modified: 2026-05-29 17:00 UTC

### Could Have (C) - Nice-to-Have Tasks

*(E4:S06:T01 archived — FR-005 closure **v0.4.6.1+1**; [kanban-completed.md](kanban-completed.md).)*

### Ongoing (O) - Perpetual Tasks

- **E2:S16:T02** – Inventory and classify workflow-related perpetual tasks - 🔄 IN PROGRESS (legacy perpetual anchor discovery + disposition mapping) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T02](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | —No IPP— | Last modified: 2026-04-20 18:20 UTC
- **E2:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (umbrella: IPP vs ICW artifact packaging SoT; AGENTS / policy / FR-042 §8 / `.cursorrules`; `[IPP-E2S16T03](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)`; `[dev-kit-ipw-ipp-vs-icw-artifacts](../../governance/standards/dev-kit-ipw-ipp-vs-icw-artifacts.md)`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-05-20 UTC | [IPP-E2S16T03](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | [E2:S16:T03](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-05-20 18:30 UTC
- **E2:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (UKW attribution anchor; last run: 2026-05-29 RW **v0.2.16.4+14** — closed T31/T08/T06 off Could; FR-031/024/057 terminal) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T04](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-29 15:19 UTC
- **E2:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+4** — project root hygiene: remove junk media/logs/snapshots; relocate low-value root files; `.gitignore`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T10](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-05-29 10:59 UTC
- **E7:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2, Last updated: 2026-03-07) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | [E7:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S01:T01-T07** – Internationalization Infrastructure - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S02:T01-T07** – Translation and Localization - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S03:T01-T07** – Cultural Adaptation - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md) | Last modified: 2025-12-09 00:00 UTC

---

