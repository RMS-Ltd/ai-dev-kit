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
**Last updated:** 2026-06-08 (v0.2.16.22+1 – Kanban documentation setup)
**Version:** v0.2.16.22+1
**Code:** E2S16

---

## Tactical overview

Story 016 remains the operational home for perpetual workflow work. **T04** UKW **2026-06-08** — bookkeeping @ **v0.2.16.4+39**: post-T16 Wave 2+ / `main` merge hygiene (E08:S03 T15 CI verified, T16 @ v0.8.3.16+3, kboard metadata). Prior: **2026-06-07** @ **v0.2.16.4+37** (Epic 21 kanban-init wave). Active perpetual lanes: **T03**, **T04**, **T05**, **T10**, **T14**.

---

## Task Checklist
- [x] **E02:S16:T01 – Establish canonical perpetual ongoing tasks story (FR-088)** - COMPLETE (HIGH, scope baseline, renumbering policy, and guardrail contract published; Wave 2/3 enforcement landed under `E02:S16:T03`)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md`](story-16-perpetual-ongoing-workflow-operations/T01-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | IPP: [`IPP-E2S16T1-canonical-perpetual-ongoing-tasks-story.md`](../../../../implementation-cycles/IPP-E2S16T01-canonical-perpetual-ongoing-tasks-story.md)


- [x] **E02:S16:T02 – Inventory and classify workflow-related perpetual tasks** - ✅ COMPLETE (inventory IPP; 3B gate open for T03)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md`](story-16-perpetual-ongoing-workflow-operations/T02-inventory-and-classify-workflow-perpetual-tasks.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) | [IPP-E2S16T2](../../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)


- [ ] **E02:S16:T03 – Workflow maintenance (Perpetual)** - IN PROGRESS (HIGH, umbrella perpetual; Tranche **3B** ACTIVE_FIX complete; AC4 satisfied)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md`](story-16-perpetual-ongoing-workflow-operations/T03-rehouse-workflow-perpetual-tasks-and-harden-guardrails.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)


- [ ] **E02:S16:T04 – Ad-hoc Kanban synchronization and hygiene (Perpetual)** - 🔄 PERPETUAL (HIGH, UKW anchor; RW **v0.2.16.4+39** — UKW -u post-T16/main merge hygiene)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md`](story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)


- [ ] **E02:S16:T05 – Markdown Documentation Maintenance (Perpetual)** - IN PROGRESS (HIGH, perpetual; last RW **v0.2.16.5+6** — Wave 2 link-depth hygiene)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md`](story-16-perpetual-ongoing-workflow-operations/T05-markdown-documentation-maintenance-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)


- [x] **E02:S16:T06 – UKW optional reprioritization `--rp` flag (FR-085)** - ✅ COMPLETE (v0.2.16.6+1 — ADR-009, standalone `UKW --rp`, cheatsheet + agent SoT)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md`](story-16-perpetual-ongoing-workflow-operations/T06-ukw-optional-reprioritization-rp-flag-fr085.md) | [FR-085](../../fr-br/FR-085-ukw-optional-reprioritization-rp-flag.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T06-ukw-rp-flag-fr085.md)


- [x] **E02:S16:T07 – UKW extension for FR/BR/UXR temporal tracking and synchronization (FR-050)** - ✅ COMPLETE (**v0.2.16.7+1** — UKW YAML 6.5–6.7, agent guide, ukw-sync)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md`](story-16-perpetual-ongoing-workflow-operations/T07-ukw-extension-for-fr-br-uxr-temporal-tracking-fr050.md) | [FR-050](../../fr-br/FR-050-ukw-extension-for-fr-br-uxr-temporal-tracking-and-synchronization.md) | [IPP](../../../../implementation-cycles/IPP-E2S16T07-ukw-fbu-temporal-tracking-fr050.md)


- [x] **E02:S16:T08 – `/ukw` slash command for Claude Code (FR-093)** - COMPLETE (HIGH, add `/ukw` slash command via `.claude/commands/ukw.md` and `CLAUDE.md` plain-text routing, mirroring `/rw` pattern)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md`](story-16-perpetual-ongoing-workflow-operations/T08-ukw-slash-command-claude-code-fr093.md) | [FR-093](../../fr-br/FR-093-ukw-slash-command-claude-code.md)


- [x] **E02:S16:T09 – `/ipw` slash command for Claude Code + mandatory IPP state transition (FR-094)** ✅ COMPLETE (v0.2.16.9+1) (HIGH, add `/ipw` slash command via `.claude/commands/ipw.md` with plan-mode enforcement and four-phase gates; mandate task state reconciliation steps in every IPP; CLAUDE.md routing + PLAN_DOC_TEMPLATE.md + IPW doc amendments)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md`](story-16-perpetual-ongoing-workflow-operations/T09-ipw-slash-command-claude-code-fr094.md) | [FR-094](../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)


- [ ] **E02:S16:T10 – Ad-hoc Repository Infrastructure Maintenance (Perpetual)** - IN PROGRESS (MEDIUM, catch-all perpetual lane; last RW **v0.2.16.10+6** — post-FR-114 PR merge infrastructure: version re-anchor, epic/5 branch cleanup)
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md`](story-16-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md)


- [x] **E02:S16:T11 – IPW documentation phases: update/create + housing (FR-096)** - ✅ COMPLETE (v0.2.16.11+1) (HIGH, IPW Phases 5–6; IPP §5–§7; FR-042 aligned with `/ipw` and template)
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md`](story-16-perpetual-ongoing-workflow-operations/T11-ipw-documentation-phases-update-create-and-housing-fr096.md) | [FR-096](../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)


- [x] **E02:S16:T12 – IPW ADR necessity checklist and decision gate (FR-100)** - ✅ COMPLETE (v0.2.16.12+2) (HIGH, Phase 5.0 ADR gate; policy `ipw-adr-necessity-checklist.md`; IPP §2.5)
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md`](story-16-perpetual-ongoing-workflow-operations/T12-ipw-adr-necessity-checklist-fr100.md) | [FR-100](../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md) | [IPP](../../../../implementation-cycles/IPP-E2S16T12-ipw-adr-necessity-checklist-fr100.md)


- [x] **E02:S16:T13 – BR-059: UKW MoSCOW full open-task coverage per story** - COMPLETE (HIGH, re-housed from `E06:S07:T109`, FR-087 Wave 4)
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md`](story-16-perpetual-ongoing-workflow-operations/T13-br059-ukw-moscow-full-story-task-coverage.md) | [BR-059](../../fr-br/BR-059-ukw-moscow-incomplete-story-task-coverage.md)


- [ ] **E02:S16:T14 – UKW gap discovery — unfiled FR/BR (FR-043)** - TODO (HIGH) — [Task doc](story-16-perpetual-ongoing-workflow-operations/T14-ukw-gap-discovery-unfiled-fr-br-fr043.md) | [FR-043](../../fr-br/FR-043-ukw-gap-discovery-todo-tasks-and-unfiled-fr-br.md)


- [x] **E02:S16:T15 – Workflow initiation cheatsheet (UXR-015)** - ✅ COMPLETE (v0.2.16.15+1) (HIGH, `docs/guides/workflow-initiation-cheatsheet.md`)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md`](story-16-perpetual-ongoing-workflow-operations/T15-workflow-initiation-cheatsheet-uxr015.md) | [UXR-015](../../fr-br/UXR-015-workflow-initiation-cheatsheet.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T15-workflow-initiation-cheatsheet.md) | [Cheatsheet](../../../../guides/workflow-initiation-cheatsheet.md)


- [x] **E2:S16:T16 – UKW archive completed rows (`-c`) (FR-102)** ✅ COMPLETE (v0.2.16.16+2 functional; v0.2.16.16+3 UKW `-c` prune)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md`](story-16-perpetual-ongoing-workflow-operations/T16-ukw-archive-completed-board-rows-fr102.md) | [FR-102](../../fr-br/FR-102-ukw-archive-completed-board-rows.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T16-ukw-archive-completed-fr102.md) | [ADR-010](../../../../architecture/standards-and-adrs/ADR-010-ukw-archive-completed-c-flag.md)


- [x] **E02:S16:T17 – Agent bootstrap and task routing (FR-103)** - ✅ COMPLETE (v0.2.16.17+2) (HIGH, ADR-012, single-step AGENTS.md bootstrap)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md`](story-16-perpetual-ongoing-workflow-operations/T17-agent-bootstrap-and-task-routing-fr103.md) | [FR-103](../../fr-br/FR-103-agent-bootstrap-and-task-routing.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T17-agent-bootstrap-and-task-routing-fr103.md) | [ADR-012](../../../../architecture/standards-and-adrs/ADR-012-agent-bootstrap-and-task-routing.md)


- [x] **E02:S16:T18 – UKW lean active board contract (FR-109)** - ✅ COMPLETE (v0.2.16.18+1 — validator, Gate 11, lean boards, UKW parity)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md`](story-16-perpetual-ongoing-workflow-operations/T18-ukw-lean-active-board-contract-fr109.md) | [FR-109](../../fr-br/FR-109-ukw-lean-active-board-contract.md)


- [x] **E02:S16:T19 – RW `--dpz` short flag for doc-policy-zero (UXR-022)** - ✅ COMPLETE (**v0.2.16.19+2** — parsers, tests, cheatsheet, agent SoT)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md`](story-16-perpetual-ongoing-workflow-operations/T19-rw-dpz-short-flag-doc-policy-zero-uxr022.md) | [UXR-022](../../fr-br/UXR-022-rw-doc-policy-zero-short-flag-dpz.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T19-rw-dpz-short-flag-uxr022.md)


- [x] **E02:S16:T20 – Restore kboard IPP segment on MoSCOW rows (UXR-023)** - ✅ COMPLETE (**v0.2.16.20+3** — normalizer, validator, corpus repair + doc link hygiene)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md`](story-16-perpetual-ongoing-workflow-operations/T20-restore-kboard-ipp-segment-uxr023.md) | [UXR-023](../../fr-br/UXR-023-kboard-ipp-segment-regression.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T20-restore-kboard-ipp-segment-uxr023.md)


- [x] **E02:S16:T21 – RW local-release default — no push; operator batch push (UXR-024)** - ✅ COMPLETE (**v0.2.16.21+2** — doc policy + doc link hygiene)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md`](story-16-perpetual-ongoing-workflow-operations/T21-rw-local-release-default-no-push-uxr024.md) | [UXR-024](../../fr-br/UXR-024-rw-local-release-default-no-push-batch-operator-push.md)


- [x] **E02:S16:T22 – Implementation Delivery Workflow (IDW) — FR-118** - ✅ COMPLETE (**v0.2.16.22+1** — `/idw` + `--rw` chain; FR-118 IMPLEMENTED)  
  - Task: [`story-16-perpetual-ongoing-workflow-operations/T22-implementation-delivery-workflow-idw-fr118.md`](story-16-perpetual-ongoing-workflow-operations/T22-implementation-delivery-workflow-idw-fr118.md) | [FR-118](../../fr-br/FR-118-implementation-delivery-workflow-idw-fr118.md) | [IPP](../../../../implementation-cycles/IPP-E02S16T22-implementation-delivery-workflow-idw-fr118.md)

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
