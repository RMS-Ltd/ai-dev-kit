---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-20T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 016 – Perpetual Ongoing Operations

**Status:** IN PROGRESS
**Priority:** HIGH  
**Created:** 2026-04-20  
**Last updated:** 2026-06-15 (v0.2.16.6+12 – Wave 7 Code Quality hygiene)
**Version:** v0.2.16.6+12
**Code:** E2S16

---

## Tactical overview

**E02:S16 is the single canonical home for all perpetual maintenance tasks** in ai-dev-kit. Finite delivery work was evacuated to semantic owning stories on 2026-06-08 ([IPP-E02S16T24](../../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md)).

Active perpetual lanes: **T01** workflow umbrella · **T02** UKW/kanban hygiene · **T03** ad-hoc documentation maintenance · **T04** repo infrastructure · **T05** GitHub Actions CI · **T06** security/code quality.

---

## Task Checklist

- [ ] **E02:S16:T01 – Workflow maintenance (Perpetual)** - 🔄 PERPETUAL (**v0.2.16.1+1** — portal js-yaml 4.2.0) — [Task](story-16-perpetual-ongoing-workflow-operations/T01-workflow-maintenance-perpetual.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [ ] **E02:S16:T02 – Ad-hoc Kanban synchronization and hygiene (Perpetual)** - 🔄 PERPETUAL (**v0.2.16.2+11** — E08:S03:T12 terminal prune; UKW -c drift repair) — [Task](story-16-perpetual-ongoing-workflow-operations/T02-ad-hoc-kanban-synchronization-and-hygiene-perpetual.md) | [FR-023](../../fr-br/FR-023-update-kanban-workflow-ukw.md)

- [ ] **E02:S16:T03 – Ad-hoc Documentation Maintenance (Perpetual)** - 🔄 PERPETUAL (**v0.2.16.3+8**) — [Task](story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | [FR-125](../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md) · [FR-058](../../fr-br/FR-058-markdown-maintenance-workflow.md) (historical) · [FR-124](../../fr-br/FR-124-meta-workflow-orchestration-composite-workflow-chains.md) (MWF docs wave)

- [ ] **E02:S16:T04 – Ad-hoc Repository Infrastructure Maintenance (Perpetual)** - IN PROGRESS — [Task](story-16-perpetual-ongoing-workflow-operations/T04-ad-hoc-repository-infrastructure-maintenance-perpetual.md)

- [ ] **E02:S16:T05 – GitHub Actions CI health (Perpetual)** - 🔄 PERPETUAL — [Task](story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) | [FR-112](../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

- [ ] **E02:S16:T06 – GitHub Security & Code Quality health (Perpetual)** - 🔄 PERPETUAL — [Task](story-16-perpetual-ongoing-workflow-operations/T06-github-security-code-quality-health-perpetual.md) | [FR-112](../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

- [x] **E02:S16:T07 – Ad-hoc Documentation Maintenance (Perpetual)** - ⏭️ SUPERSEDED (merged into **E02:S16:T03** per [FR-125](../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md), 2026-06-10) — [redirect](story-16-perpetual-ongoing-workflow-operations/T07-ad-hoc-documentation-maintenance-perpetual.md) → [T03](story-16-perpetual-ongoing-workflow-operations/T03-ad-hoc-documentation-maintenance-perpetual.md) | prior finite UKW work → E04:S14:T06

- [x] **E02:S16:T24 – S16 perpetual-only consolidation (semantic scatter)** - ✅ COMPLETE (**v0.2.16.24+1**) — [Task](story-16-perpetual-ongoing-workflow-operations/T24-s16-perpetual-only-consolidation-semantic-scatter.md) | [IPP](../../../implementation-cycles/IPP-E02S16T24-s16-perpetual-only-semantic-scatter.md)

---

## Overview

Story 016 is the **only** story for perpetual maintenance tasks across all domains (workflow, kanban, docs, infrastructure, CI, security). Historical finite tasks formerly filed here were re-housed to owning stories; see IPP-E02S16T24 §3.

---

## In scope

- Perpetual maintenance lanes (operational, recurring, no terminal COMPLETE).
- RW/UKW attribution targets for hygiene and standing operational work.

## Out of scope

- Finite FR/BR/UXR delivery (file in owning epic/story).
- IPP planning tasks and one-off migrations (use delivery stories).

## Evacuated work (historical index)

| Prior S16 ID | Canonical new home |
| ------------ | ------------------ |
| T01–T02 | E02:S15:T09–T10 |
| T06, T13–T14, T16, T18, T20 | E04:S14:T05–T11 |
| T07 (finite UKW extension, pre-2026-06-09) | E04:S14:T06 |
| T07 (perpetual doc lane, 2026-06-09 – 2026-06-10) | **E02:S16:T03** — merged per [FR-125](../../fr-br/FR-125-consolidate-e02s16t03-t07-documentation-maintenance-lanes.md) |
| T08, T22 | E02:S03:T07–T08 |
| T09, T11–T12 | E02:S15:T11–T13 |
| T15, T17, T19, T21 | E02:S01:T26–T29 |
| T23 | E08:S03:T18 |

Redirect stubs remain under `story-16-perpetual-ongoing-workflow-operations/` for forensic traceability.
