---

## lifecycle: evergreen

ttl_days: null
created_at: 2025-12-04T12:02:50Z
expires_at: null
housekeeping_policy: keep

# AI Dev Kit – Kanban Board

**Last Updated:** 2026-05-26 (RW -d: E6:S09:T06 IPP doc sync)
**Version:** v0.6.9.6+0

**Note:** Epics 1, 3, 7, 8, 10, 11 are COMPLETE. Epics 2, 4, 5, 6 are IN PROGRESS. Epics 21 are TODO. **MoSCOW lists tasks only (not stories)**—story-level rows hide real progress. *(Epic 24 book work lives in private `RMS-Ltd/hf-ai-dev-kit` — FR-099 / ADR-006.)*
**Intake migration note (FR-072 / Approach D):** Dedicated FR/BR/UXR repository stories are historical registries only; new intake tasks should be created in semantic delivery stories.

> **For Epic/Story/Task structure, see:** `[kanban-structure.md](kanban-structure.md)`  
> **For rules and explanations, see:** `[kanban-board-guide.md](kanban-board-guide.md)`  
> **For completed tasks, see:** `[kanban-completed.md](kanban-completed.md)`  
> **For FR/BR/UXR prioritization, see:** `[fbuboard.md](fbuboard.md)`

---

## MoSCOW Prioritized In-Progress Tasks

### Must Have (M) - Critical Tasks

*(No active Must Have tasks — E6:S09:T06 archived to [kanban-completed.md](kanban-completed.md).)*

### Should Have (S) - Important Tasks

- **E4:S19:T03** – FR-087: investigate why `E6:S07` became default housing and decide closure/scope - 🔄 IN PROGRESS (HIGH, forensic analysis of origin/codification plus close/split/narrow recommendation and guardrails; canonical IPP published) | Last modified: 2026-05-14 11:06 UTC

### Could Have (C) - Nice-to-Have Tasks

- **E4:S08:T07** – FR-011: Task splitting across multiple canonical epics - 🔄 IN PROGRESS (MEDIUM priority semantic migration enhancement) - [Task Document](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) | [Story](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption.md) | [E4:S08:T07](epics/Epic-4/Story-008-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) | —No IPP— | Last modified: 2026-04-09 00:00 UTC
- **E5:S01:T31** – Multi-agent coordination feasibility investigation (FR-031) - 📋 TODO (C priority architecture exploration) - [Task Document](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T31](epics/Epic-5/Story-001-fr-repo/T31-multi-agent-coordination-feasibility-investigation.md) | —No IPP— | Last modified: 2026-01-14 00:00 UTC
- **E2:S01:T22** – RW perpetual-task BUILD must persist in `version.py` (BR-075) - 📋 TODO (LOW, validator + Step 2-before-7 for perpetual `RW` / `RW -k`) - [Task Document](epics/Epic-2/Story-001-rw-agent-execution-and-docs/T22-rw-perpetual-task-version-py-build-increment-br075.md) | [Story](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | [BR-075](fr-br/BR-075-rw-perpetual-task-build-not-reflected-in-version-py.md) | —No IPP— | Last modified: 2026-05-26 14:29 UTC
- **E2:S01:T08** – IDE linter check before RW commit (FR-024) - 📋 TODO (LOW workflow hygiene) - [Story](epics/Epic-2/Story-001-rw-agent-execution-and-docs.md) | Last modified: 2026-05-17 00:00 UTC
- **E4:S06:T01** – Canonical EST template system completion (FR-005) - 📋 TODO (LOW template completeness) - [Story](epics/Epic-4/Story-006-comprehensive-canonical-est-template-system.md) | Last modified: 2025-12-22 00:00 UTC
- **E5:S01:T62** – Improve GitHub release installation experience (FR-062) - 💡 PROPOSED (LOW release UX) - [Task Document](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | [Story](epics/Epic-5/Story-001-fr-repo.md) | [E5:S01:T62](epics/Epic-5/Story-001-fr-repo/T62-github-release-installation-experience.md) | —No IPP— | Last modified: 2026-05-15 00:00 UTC
- **E6:S09:T02** – Brownfield modular adopter integration (FR-081) - 🔄 IN PROGRESS (MEDIUM, operationalize ADR-003 matrices and contract-first wiring for existing repo adoption) - [Task Document](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | [Story](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md) | Last modified: 2026-05-13 | [FR-081](fr-br/FR-081-brownfield-modular-adopter-integration.md) | [E6:S09:T02](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T02-brownfield-modular-adopter-integration-fr081.md) | —No IPP— | Last modified: 2026-05-14 11:06 UTC
- **E6:S09:T03** – Installation canonical repository alignment (FR-082) - 🔄 IN PROGRESS (MEDIUM, align installation path with canonical repo structure) - [Task Document](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | [Story](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md) | Last modified: 2026-05-13 | [FR-082](fr-br/FR-082-installation-distribution-canonical-repo-alignment.md) | [E6:S09:T03](epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T03-installation-canonical-repo-alignment-fr082.md) | —No IPP— | Last modified: 2026-05-14 11:06 UTC
- **E2:S16:T07** – Extend UKW for FR/BR/UXR temporal tracking and synchronization (FR-050) - 📋 TODO (LOW, re-housed from E6:S07:T108) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-05-13 | [FR-050](fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) | [E2:S16:T07](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | —No IPP— | Last modified: 2026-05-14 11:06 UTC
- **E7:S01:T06** – Update changelog workflow maintenance flow (FR-057) - 💡 PROPOSED (LOW maintenance workflow quality) - [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | Last modified: 2026-03-31 00:00 UTC

### Ongoing (O) - Perpetual Tasks

- **E2:S16:T02** – Inventory and classify workflow-related perpetual tasks - 🔄 IN PROGRESS (legacy perpetual anchor discovery + disposition mapping) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T02](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | —No IPP— | Last modified: 2026-04-20 18:20 UTC
- **E2:S16:T03** – Workflow maintenance (Perpetual) - 🔄 PERPETUAL (umbrella: IPP vs ICW artifact packaging SoT; AGENTS / policy / FR-042 §8 / `.cursorrules`; `[IPP-E2S16T03](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md)`; `[dev-kit-ipw-ipp-vs-icw-artifacts](../../architecture/standards-and-adrs/dev-kit-ipw-ipp-vs-icw-artifacts.md)`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-05-20 UTC | [IPP-E2S16T03](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | [E2:S16:T03](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [—IPP—](../../implementation-cycles/IPP-E2S16T03-rehouse-workflow-perpetual-tasks.md) | Last modified: 2026-05-20 18:30 UTC
- **E2:S16:T04** – Ad-hoc Kanban synchronization and hygiene (Perpetual) - 🔄 PERPETUAL (UKW attribution anchor; last run: 2026-05-26 RW **v0.2.16.4+12** — FR-098 Must Have top; ECC cheatsheet links) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | [E2:S16:T04](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | —No IPP— | Last modified: 2026-05-20 08:45 UTC
- **E2:S16:T10** – Ad-hoc Repository Infrastructure Maintenance (Perpetual) - 🔄 PERPETUAL (catch-all for minor repo tooling, env wiring, script fallbacks, and other ad-hoc infrastructure patches not warranting a dedicated feature task; e.g. `AI_DEV_KIT_PAT` fallback + FR-095 auto-detect GitHub remote in `create_github_release.py`) - [Task Document](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | [Story](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations.md) | Last modified: 2026-05-19 UTC | [E2:S16:T10](epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md) | —No IPP— | Last modified: 2026-05-26 13:19 UTC
- **E7:S01:T05** – Markdown Maintenance (Perpetual Task) - 🔄 PERPETUAL (v0.7.1.5+2, Last updated: 2026-03-07) - [Task Document](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | [Story](epics/Epic-7/Story-001-codebase-maintenance-tasks.md) | [E7:S01:T05](epics/Epic-7/Story-001-codebase-maintenance-tasks/T05-markdown-maintenance-perpetual-task.md) | —No IPP— | Last modified: 2026-03-07 00:00 UTC

### Won't Have (W) - Deferred Tasks

- **E21:S00:T01-T07** – Language Selection at Setup (UK/US English) - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-000-language-selection-at-setup.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S01:T01-T07** – Internationalization Infrastructure - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-001-internationalization-infrastructure.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S02:T01-T07** – Translation and Localization - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-002-translation-and-localization.md) | Last modified: 2025-12-09 00:00 UTC
- **E21:S03:T01-T07** – Cultural Adaptation - 📋 TODO (MEDIUM priority epic) - [Story](epics/Epic-21/Story-003-cultural-adaptation.md) | Last modified: 2025-12-09 00:00 UTC

---

