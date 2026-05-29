---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-14T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Story 015 – IPW Governance and Publication Contract

**Status:** IN PROGRESS (T08 — FR-097 board stamp authority; BR-069 / UXR-009 reopened)
**Priority:** HIGH  
**Estimated Effort:** [TBD]  
**Created:** 2026-04-14  
**Completed:** 2026-04-27 (T01–T07); reopened 2026-05-20 for stamp forensic recovery  
**Last updated:** 2026-05-20 (FR-097 intake — E2:S15:T08)
**Version:** v0.2.15.7+9
**Code:** E2S15

---

## Overview

Define and harden IPW governance for planning artifact publication so durable spec/test/plan outputs are either deterministically filed into Docusaurus surfaces or explicitly marked as not applicable.

---

## Goal

Eliminate IPW documentation publication drift by making ownership, filing targets, validation behavior, and backfill expectations explicit and enforceable.

---

## Task Checklist

- [x] **E2:S15:T01 – BR-066: IPW Docusaurus filing contract and backfill** - COMPLETE (v0.2.15.1+2) (HIGH, contract + validation + historical recovery inventory; FR-042 Step 5 documentation deliverables added) — [Task doc](Story-015-ipw-governance-and-publication-contract/T01-ipw-docusaurus-filing-contract-and-backfill-br066.md) | [BR-066](../../fr-br/BR-066-ipw-missing-docusaurus-filing-for-planning-artifacts.md)

- [~] **E2:S15:T02 – IPP post-run governance reconciliation ownership (FR-084)** - SUPERSEDED -> **E2:S15:T07** (FR-084 four-surface contract absorbed into FR-092 Bucket A4 + Wave 3) — [Task doc](Story-015-ipw-governance-and-publication-contract/T02-ipp-post-run-governance-reconciliation-ownership-fr084.md) | [FR-084 (superseded)](../../fr-br/FR-084-ipp-post-run-governance-reconciliation-ownership.md) | [IPP (historical)](../../../../implementation-cycles/IPP-E2S15T02-ipp-post-run-governance-reconciliation-ownership.md)

- [x] **E2:S15:T03 – IPW board-row traceability-churn hardening (FR-089)** - COMPLETE (v0.2.15.3+2, duplicate-footer dual-agreement + traceability churn governance; FR-089 IMPLEMENTED) | **NOTE:** FR-089 is wired as Bucket-D8 predecessor of FR-092 with B2 outcome drift owned by Wave 4 — [Task doc](Story-015-ipw-governance-and-publication-contract/T03-ipw-board-row-footer-duplication-validation-hardening-fr089.md) | [FR-089](../../fr-br/FR-089-ipw-board-row-footer-duplication-validation-hardening.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T03-duplicate-footer-validation-hardening-and-timestamp-divergence-guardrails.md)

- [x] **E2:S15:T04 – Investigate earliest `Last modified` timestamp overwrite regression (BR-069)** - COMPLETE (`v0.2.15.4+4`, Phase A-D delivered: harness + remediation + diagnostics + governance sign-off; BR narrowed with residual corpus-level canonicalization tracked via FR-090) | **NOTE:** BR-069 final closure is now gated on FR-092 Wave 4 corpus sweep — [Task doc](Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md) | [BR-069 (gated)](../../fr-br/BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)

- [~] **E2:S15:T05 – Implement UKW/RW canonical row transform engine (FR-090)** - SUPERSEDED -> **E2:S15:T07** (Phase 1-4 evidence retained as predecessor; B1 outcome drift owned by FR-092 Wave 4) — [Task doc](Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md) | [FR-090 (superseded)](../../fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md) | [IPP (historical)](../../../../implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)

- [~] **E2:S15:T06 – RW Step 7 self-sufficient scoped kanban reconciliation (FR-091)** - SUPERSEDED -> **E2:S15:T07** (FR-091 contract absorbed into FR-092 Bucket A1-A5 + Wave 2) — [Task doc](Story-015-ipw-governance-and-publication-contract/T06-rw-step-7-self-sufficient-scoped-kanban-reconciliation-fr091.md) | [FR-091 (superseded)](../../fr-br/FR-091-rw-step-7-self-sufficient-scoped-kanban-reconciliation-without-ukw-dependency.md)

- [x] **E2:S15:T07 – Canonical RW/UKW kanban consistency program (FR-092 META)** - ✅ COMPLETE (v0.2.15.7+1, CRITICAL, supersedes T02/T05/T06; gates BR-069/BR-070/UXR-009 closure; consolidates 16 atomic issues across 4 buckets; corpus-level retroactive sweep + preventive release-readiness gate delivered) — [Task doc](Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) | [FR-092](../../fr-br/FR-092-canonical-rw-ukw-kanban-consistency-program.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T07-canonical-rw-ukw-kanban-consistency-program.md)

- [x] **E2:S15:T08 – Board stamp authority and forensic timestamp recovery (FR-097)** - ✅ COMPLETE (v0.2.15.8+2, CRITICAL, validator + backfill + Gate 8; BR-069 / UXR-009 re-closed) — [Task doc](Story-015-ipw-governance-and-publication-contract/T08-board-stamp-authority-forensic-timestamp-recovery-fr097.md) | [FR-097](../../fr-br/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md) | [IPP](../../../../implementation-cycles/IPP-E2S15T08-board-stamp-authority-forensic-timestamp-recovery.md)

---
