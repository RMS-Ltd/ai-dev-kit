---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 015 – IPW Governance and Publication Contract

**Status:** ✅ COMPLETE (T14 FR-130 shipped **v0.2.15.14+1**)  
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-04-14  
**Completed:** 2026-06-03 (T08 FR-097 shipped **v0.2.15.8+3**; FR-092 program complete)  
**Last updated:** 2026-06-12 (T14 COMPLETE — ADR-029 stamp immutability defaults **v0.2.15.14+1**)
**Version:** v0.2.15.8+3
**Code:** E2S15

---

## Overview

Define and harden IPW governance for planning artifact publication so durable spec/test/plan outputs are either deterministically filed into Docusaurus surfaces or explicitly marked as not applicable.

---

## Goal

Eliminate IPW documentation publication drift by making ownership, filing targets, validation behavior, and backfill expectations explicit and enforceable.

---

## Task Checklist

- [x] **E02:S15:T01 – BR-066: IPW Docusaurus filing contract and backfill** - COMPLETE (v0.2.15.1+3) (HIGH, Phases 1–3; `--audit-inventory` **0** unwired; BR-066 **RESOLVED**) — [Task doc](story-15-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) | [BR-066](../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)

- [~] **E02:S15:T02 – IPP post-run governance reconciliation ownership (FR-084)** - SUPERSEDED -> **E02:S15:T07** (FR-084 four-surface contract absorbed into FR-092 Bucket A4 + Wave 3) — [Task doc](story-15-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md) | [FR-084 (superseded)](../../fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md) | [IPP (historical)](../../../implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md)

- [x] **E02:S15:T03 – IPW board-row traceability-churn hardening (FR-089)** - COMPLETE (v0.2.15.3+2, duplicate-footer dual-agreement + traceability churn governance; FR-089 IMPLEMENTED) | **NOTE:** FR-089 is wired as Bucket-D8 predecessor of FR-092 with B2 outcome drift owned by Wave 4 — [Task doc](story-15-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md) | [FR-089](../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md) | [IPP](../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

- [x] **E02:S15:T04 – Investigate earliest `Last modified` timestamp overwrite regression (BR-069)** - COMPLETE (`v0.2.15.4+4`, Phase A-D delivered: harness + remediation + diagnostics + governance sign-off; BR narrowed with residual corpus-level canonicalization tracked via FR-090) | **NOTE:** BR-069 final closure is now gated on FR-092 Wave 4 corpus sweep — [Task doc](story-15-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md) | [BR-069 (gated)](../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) | [IPP](../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)

- [~] **E02:S15:T05 – Implement UKW/RW canonical row transform engine (FR-090)** - SUPERSEDED -> **E02:S15:T07** (Phase 1-4 evidence retained as predecessor; B1 outcome drift owned by FR-092 Wave 4) — [Task doc](story-15-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md) | [FR-090 (superseded)](../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) | [IPP (historical)](../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)

- [~] **E02:S15:T06 – RW Step 7 self-sufficient scoped kanban reconciliation (FR-091)** - SUPERSEDED -> **E02:S15:T07** (FR-091 contract absorbed into FR-092 Bucket A1-A5 + Wave 2) — [Task doc](story-15-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) | [FR-091 (superseded)](../../fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)

- [x] **E02:S15:T07 – Canonical RW/UKW kanban consistency program (FR-092 META)** - ✅ COMPLETE (v0.2.15.7+1, CRITICAL, supersedes T02/T05/T06; gates BR-069/BR-070/UXR-009 closure; consolidates 16 atomic issues across 4 buckets; corpus-level retroactive sweep + preventive release-readiness gate delivered) — [Task doc](story-15-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | [FR-092](../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) | [IPP](../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

- [x] **E02:S15:T08 – Board stamp authority and forensic timestamp recovery (FR-097)** - ✅ COMPLETE (v0.2.15.8+3 — pre-commit, threshold 3, backfill, git-exempt Gate 8) — [Task doc](story-15-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) | [FR-097](../../fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) | [IPP](../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)

- [x] **E02:S15:T09 – Establish canonical perpetual ongoing tasks story (FR-088)** — ✅ COMPLETE (re-housed from E02:S16:T01) — [Task](story-15-ipw-governance-and-publication-contract/T09-establish-canonical-perpetual-ongoing-tasks-story-fr088.md) | [FR-088](../../fr-br/FR-088-dedicated-story-for-perpetual-ongoing-tasks.md)

- [x] **E02:S15:T10 – Inventory and classify workflow-related perpetual tasks** — ✅ COMPLETE (re-housed from E02:S16:T02) — [Task](story-15-ipw-governance-and-publication-contract/T10-inventory-and-classify-workflow-perpetual-tasks.md) | [IPP](../../../implementation-cycles/IPP-E2S16T02-perpetual-task-inventory.md)

- [x] **E02:S15:T11 – `/ipw` slash command for Claude Code (FR-094)** — ✅ COMPLETE (re-housed from E02:S16:T09) — [Task](story-15-ipw-governance-and-publication-contract/T11-ipw-slash-command-claude-code-fr094.md) | [FR-094](../../fr-br/FR-094-ipw-slash-command-and-task-state-transition-mandate.md)

- [x] **E02:S15:T12 – IPW documentation phases (FR-096)** — ✅ COMPLETE (re-housed from E02:S16:T11) — [Task](story-15-ipw-governance-and-publication-contract/T12-ipw-documentation-phases-update-create-and-housing-fr096.md) | [FR-096](../../fr-br/FR-096-ipw-documentation-phases-update-create-and-housing.md)

- [x] **E02:S15:T13 – IPW ADR necessity checklist (FR-100)** — ✅ COMPLETE (re-housed from E02:S16:T12) — [Task](story-15-ipw-governance-and-publication-contract/T13-ipw-adr-necessity-checklist-fr100.md) | [FR-100](../../fr-br/FR-100-ipw-adr-necessity-checklist-and-decision-gate.md)

- [x] **E02:S15:T14 – Kanban stamp immutability ADR-029 framework defaults (FR-130)** — ✅ COMPLETE (**v0.2.15.14+1** — MWF delivery) — [Task](story-15-ipw-governance-and-publication-contract/T14-kanban-stamp-immutability-adr029-framework-defaults-fr130.md) | [FR-130](../../fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) | [ADR-029](../../architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md) | [IPP](../../../implementation-cycles/IPP-E02S15T14-kanban-stamp-immutability-adr029-fr130.md)

---
