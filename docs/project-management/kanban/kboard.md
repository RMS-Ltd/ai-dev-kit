---

## lifecycle: evergreen

ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-05-30 (RW: E02:S16:T04 — UKW `-c` kboard prune release)
**Version:** v0.2.16.4+21

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress. **Bidirectional wiring:** task rows with FBU links must have matching rows on [`fbuboard.md`](fbuboard.md) (and vice versa for M/S/active C/O). *(Epic 24 book work lives in private `RMS-Ltd/ai-dev-kit-book` — FR-099 / ADR-006.)*
**Intake migration note (FR-072 / Approach D):** Dedicated FR/BR/UXR repository stories are historical registries only; new intake tasks should be created in semantic delivery stories.

> **For Epic/Story/Task structure, see:** `[kanban-structure.md](kanban-structure.md)`  
> **For rules and explanations, see:** `[kanban-board-guide.md](kanban-board-guide.md)`  
> **For completed tasks, see:** `[kanban-completed.md](kanban-completed.md)`  
> **For FR/BR/UXR prioritization, see:** `[fbuboard.md](fbuboard.md)`

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(No Must Have tasks — 2026-05-30 value audit deferral.)*

*(E01:S04:T03–T07 archived — [kanban-completed.md](kanban-completed.md). FR-099 Phases 0–4 complete; public [`RMS-Ltd/ai-dev-kit`](https://github.com/RMS-Ltd/ai-dev-kit) bootstrapped 2026-05-28. **E6:S09** installation story ✅ complete — FR-080/081/082/098; latest **E06:S09:T02** FR-081 brownfield INSTALL chapter **v0.6.9.2+2**.)*

### Should Have (S) - Important Tasks

- **E02:S16:T13** – BR-059: UKW MoSCOW full open-task coverage per in-progress story - 📋 TODO (HIGH, re-housed from `E06:S07:T109`, FR-087 Wave 4) | [Task](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) | [BR-059](fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md) | Last modified: 2026-05-30 13:32 UTC
- **E02:S01:T23** – Tool-agnostic workflow step tracking + persisted run logs - 📋 TODO (HIGH, re-housed from `E06:S07:T18`, FR-087 Wave 4) | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T23-tool-agnostic-workflow-step-tracking-and-runlogs.md) | Last modified: 2026-05-30 13:33 UTC
- **E06:S07:T107** – IDE command whitelist optimization - 📋 TODO (HIGH, in-scope ADK agent friction; charter freeze applies to new S07 tasks) | [Task](epics/Epic-6/Story-007-adk-implementation-analysis-and-package-management/T107-ide-command-whitelist-optimization.md) | Last modified: 2026-05-30 13:34 UTC
- **E07:S01:T09** – UXR-005: Kanban template governance & MoSCOW spacing rule - 📋 TODO (HIGH, sole implementing task for UXR-005) | [Task](epics/Epic-7/Story-001-codebase-maintenance-tasks/E07S01T09-kanban-template-governance.md) | [UXR-005](fr-br/UXR-005-kanban-board-formatting-and-governance.md) | Last modified: 2026-05-30 14:00 UTC
- **E04:S19:T08** – FR-072: Uniform repository abstract-space kanban rules - 🔄 IN PROGRESS (HIGH, Approach D batch wiring) | [Task](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T08-fr072-approach-d-phase-d2-d4-migration-and-doc-sweep.md) | [FR-072](fr-br/FR-072-uniform-repository-abstract-space-kanban-rules.md) | Last modified: 2026-05-30 14:19 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E08:S03:T04** – BR-058: CI test workflow missing and pytest failures - 🟢 OPEN (LOW) | [Task](epics/Epic-8/Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) | [BR-058](fr-br/BR-058-ci-test-workflow-missing-and-pytest-failures.md) | Last modified: 2026-05-30 13:35 UTC

*(E04:S06:T01 archived — FR-005 closure **v0.4.6.1+1**; [kanban-completed.md](kanban-completed.md). **E02:S16:T16** / **FR-102** archived **v0.2.16.16+3** — [kanban-completed.md](kanban-completed.md), [fbu-completed.md](fbu-completed.md). **E05:S01:T46**, **E04:S08:T07**, **E05:S01:T74** pruned prior UKW — [kanban-completed.md](kanban-completed.md). FR-031 / FR-024 / FR-057 retired off active board — [fbu-completed.md](fbu-completed.md).)*

### Ongoing (O) - Perpetual Tasks

- **E02:S16:T02** – Inventory and classify workflow-related perpetual tasks - 🔄 IN PROGRESS (legacy perpetual anchor discovery + disposition mapping) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E02:S16:T02](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | —No IPP— | Last modified: 2026-04-20 18:20 UTC
- **E02:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (Tranche 2 **v0.2.16.3+0**: BR-067 policy table + RW `--doc-policy-zero` docs; AC4 PARTIAL pending T02) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [BR-067](fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md) | [E02:S16:T03](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-05-30 16:26 UTC
- **E02:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (UKW `-c` kboard prune **E02:S16:T16**; RW **v0.2.16.4+21**) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [FR-023](fr-br/FR-023-update-kanban-workflow-ukw.md) | [E02:S16:T04](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-30 16:53 UTC
- **E02:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (last RW **v0.2.16.10+4** — project root hygiene: remove junk media/logs/snapshots; relocate low-value root files; `.gitignore`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E02:S16:T10](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-05-29 10:59 UTC
- **E02:S16:T14** – UKW gap discovery: TODO tasks and unfiled FR/BR (**FR-043**) - 📋 TODO (HIGH, perpetual UKW intake hygiene) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md) | [E02:S16:T14](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | —No IPP— | Last modified: 2026-05-30 13:36 UTC
- **E07:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2; **FR-058** proposed workflow) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | [FR-058](fr-br/FR-058-markdown-maintenance-workflow.md) | [E07:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks

**2026-05-30 value audit (no-value):** Shipped, vendor-only, or registry anchors — deferred from M/S/C; see linked FBUs on [`fbuboard.md`](fbuboard.md) Won't Have.

- **E06:S06:T57** – BR-039: Cascade whitelist security prompt (vendor/product; repo **COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-6/Story-006-feature-requests/T57-br039-cascade-whitelist-security-prompt-blocker.md) | [BR-039](fr-br/BR-039-cascade-whitelist-security-prompt-usability-blocker.md) | Last modified: 2026-04-02 00:00 UTC
- **E02:S01:T17** – FR-077: IPW task status transition + kboard sync (validators/docs **shipped**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T17-ipw-built-task-status-transition-and-kboard-sync-fr077.md) | [FR-077](fr-br/FR-077-ipw-built-task-status-transition-and-kboard-sync.md) | Last modified: 2026-04-14 00:00 UTC
- **E04:S19:T03** – FR-087: `E6:S07` default-housing investigation (investigation **COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T03-e6s07-default-housing-drift-investigation-and-closure-decision-fr087.md) | [FR-087](fr-br/FR-087-e6s07-default-housing-root-cause-and-closure-decision.md) | Last modified: 2026-05-30 13:37 UTC
- **E02:S01:T10** – UXR-006: Single `dev` branch + RW validators (**shipped**; UXR closure only) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T10-dev-branch-support-in-rw-validators.md) | [UXR-006](fr-br/UXR-006-dev-branch-and-rw-validator-relaxation.md) | Last modified: 2026-04-07 00:00 UTC
- **E07:S05:T01** – UXR-001 migration UX (synthesis **COMPLETE**; historical anchor [S00:T01](epics/Epic-7/Story-000-uxr-repo/T01-uxr-001-repository-anchor.md)) - ⏸️ **WON'T HAVE** | [UXR-001](fr-br/UXR-001-migration-user-experience-research.md) | [E07:S05:T01](epics/Epic-7/Story-005-migration-uxr-research.md) | —No IPP— | Last modified: 2026-05-30 13:30 UTC
- **E07:S05:T02** – UXR-002 migration UAT utilities (synthesis **COMPLETE**; historical anchor [S00:T02](epics/Epic-7/Story-000-uxr-repo/T02-uxr-002-repository-anchor.md)) - ⏸️ **WON'T HAVE** | [UXR-002](fr-br/UXR-002-comprehensive-uat-migration-utilities.md) | [E07:S05:T02](epics/Epic-7/Story-005-migration-uxr-research.md) | —No IPP— | Last modified: 2026-05-30 13:31 UTC
- **E04:S19:T09** – UXR-014: Two-digit E/S/T formatting - ✅ COMPLETE (**v0.4.19.9+2**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T09-two-digit-est-identifier-default-formatting-uxr014.md) | [UXR-014](fr-br/UXR-014-two-digit-est-identifier-default-formatting.md) | Last modified: 2026-05-30 10:30 UTC
- **E05:S01:T48** – FR-048: ICW task identifier (**COMPLETE**; superseded by **FR-042** IPW) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-5/Story-001-fr-repo/T48-icw-task-identifier-argument.md) | [FR-048](fr-br/FR-048-icw-task-identifier-argument.md) | Last modified: 2026-03-11 00:00 UTC
- **E05:S02:T06** – FR-063: CMW Epic 5 execution context (**COMPLETE**) - ⏸️ **WON'T HAVE** | [Task](epics/Epic-5/Story-002/T06-cmw-epic-5-execution-context-fr-063.md) | [FR-063](fr-br/FR-063-cmw-epic-5-execution-context.md) | Last modified: 2026-03-25 00:00 UTC

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S01:T01-T07** – Internationalization Infrastructure - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S02:T01-T07** – Translation and Localization - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S03:T01-T07** – Cultural Adaptation - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md) | Last modified: 2025-12-09 00:00 UTC

---

