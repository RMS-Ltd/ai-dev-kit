---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 016 – Perpetual Ongoing Workflow Operations

**Status:** IN PROGRESS
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-04-20  
**Last updated:** 2026-05-20 (T11 RW v0.2.16.11+1: IPW Phases 5–6; FR-096; IPP §5–§7)  
**Version:** v0.2.16.4+10
**Code:** E2S16

---

## Tactical overview

Story 016 remains the operational home for perpetual workflow work. Recent delivery closed **E2:S16:T11** (FR-096: IPW Phases 5–6 and IPP §5–§7) at **v0.2.16.11+1**, building on **T09** (`/ipw` + IPP state transitions). Active lanes: **T02** (perpetual inventory), **T03** (workflow maintenance umbrella), **T04** (UKW/kanban hygiene — this UKW run), **T05** (markdown maintenance), **T06** (FR-085 `--rp`), **T07** (FR-050 FBU temporal extension, TODO), **T10** (repo infrastructure perpetual). Four discrete workflow tasks are now **COMPLETE** (T01, T08, T09, T11).

---

## Task Checklist

- [x] **E2:S16:T01 – Establish canonical perpetual ongoing tasks story (FR-088)** - COMPLETE (HIGH, scope baseline, renumbering policy, and guardrail contract published; Wave 2/3 enforcement landed under `E2:S16:T03`)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`](Story-016-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | IPP: [`IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)

- [ ] **E2:S16:T02 – Inventory and classify workflow-related perpetual tasks** - IN PROGRESS (HIGH, produce exhaustive inventory and migration disposition for all workflow perpetual anchors and references)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md`](Story-016-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual anchor; Wave 2/3 COMPLETE; RW v0.2.16.3+6: IPP vs ICW packaging SoT + gate/policy alignment; AC4 PARTIAL pending T02 inventory)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](Story-016-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T04 – Ad-hoc Kanban synchronization and hygiene (Perpetual)** - IN PROGRESS (HIGH, UKW attribution anchor; last run 2026-05-20 UKW post T11/FR-096)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`](Story-016-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T05 – Markdown Documentation Maintenance (Perpetual)** - IN PROGRESS (HIGH, dedicated perpetual lane for recurring markdown-only documentation upkeep outside workflow-maintenance umbrella and kanban synchronization lanes)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md`](Story-016-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E2:S16:T06 – UKW optional reprioritization `--rp` flag (FR-085)** - IN PROGRESS (HIGH, semantic re-house from `E6:S07:T116`; optional deep reprioritization based on intent/dependencies/blockers/impact across task + FBU surfaces)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md`](Story-016-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) | [FR-085](../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md)

- [ ] **E2:S16:T07 – UKW extension for FR/BR/UXR temporal tracking and synchronization (FR-050)** - TODO (LOW, re-housed from `E6:S07:T108`; extend UKW with explicit FBU board cleanup, `fbu-completed.md` temporal dashboard, and cross-doc consistency check)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md`](Story-016-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | [FR-050](../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md)

- [x] **E2:S16:T08 – `/ukw` slash command for Claude Code (FR-093)** - COMPLETE (HIGH, add `/ukw` slash command via `.claude/commands/ukw.md` and `CLAUDE.md` plain-text routing, mirroring `/rw` pattern)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md`](Story-016-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md) | [FR-093](../../fr-br/FR-093-ukw-slash-command-claude-code.md)

- [x] **E2:S16:T09 – `/ipw` slash command for Claude Code + mandatory IPP state transition (FR-094)** ✅ COMPLETE (v0.2.16.9+1) (HIGH, add `/ipw` slash command via `.claude/commands/ipw.md` with plan-mode enforcement and four-phase gates; mandate task state reconciliation steps in every IPP; CLAUDE.md routing + PLAN_DOC_TEMPLATE.md + IPW doc amendments)  
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md`](Story-016-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md) | [FR-094](../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)

- [ ] **E2:S16:T10 – Ad-hoc Repository Infrastructure Maintenance (Perpetual)** - IN PROGRESS (MEDIUM, catch-all perpetual lane for minor repo tooling, env wiring, script fallbacks, and other ad-hoc infrastructure patches not warranting a dedicated feature task; v0.2.16.10+1: FR-095 auto-detect GitHub remote in release script)
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md`](Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md)

- [x] **E2:S16:T11 – IPW documentation phases: update/create + housing (FR-096)** - ✅ COMPLETE (v0.2.16.11+1) (HIGH, IPW Phases 5–6; IPP §5–§7; FR-042 aligned with `/ipw` and template)
  - Task: [`Story-016-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md`](Story-016-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md) | [FR-096](../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)

---

## Overview

This story is the canonical Epic 2 home for perpetual ongoing workflow tasks (for example UKW/CMW/RW maintenance streams), separating continuous operational ownership from feature-specific delivery stories.

---

## In scope

- Perpetual workflow operations ownership model.
- Guardrails for semantic placement of new perpetual tasks.
- Migration planning for currently mis-housed perpetual tasks.
- Governance updates and traceability wiring for the above.

## Out of scope

- Implementing unrelated feature work.
- Rewriting historical release versions or tags.
- Non-workflow domain perpetual work owned by other epics.
