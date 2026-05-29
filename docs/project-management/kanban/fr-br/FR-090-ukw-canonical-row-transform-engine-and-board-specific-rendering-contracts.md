---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-090: UKW canonical row transform engine and board-specific rendering contracts

**Type:** Feature Request (FR)  
**ID:** FR-090  
**Submitted:** 2026-04-22  
**Submitted By:** User feedback + BR-069/T04 analysis  
**Priority:** CRITICAL  
**Severity:** HIGH  
**Status:** SUPERSEDED by [FR-092](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  

**Superseded by:** [FR-092 — Canonical RW/UKW kanban consistency program (meta)](FR-092-canonical-rw-ukw-kanban-consistency-program.md)  
**Implementing Task (current):** [E2:S15:T07](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T07-canonical-rw-ukw-kanban-consistency-program-fr092.md) (FR-092 meta)  
**Implementing Task (historical):** [E2:S15:T05](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md) (SUPERSEDED)

**Primary driver:** [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)  
**Analysis basis:** [IPP-E2S15T04](../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)

> **Supersede note (2026-04-27):** FR-090 architecture (shared canonical row transform pipeline + board-specific rendering contracts) is absorbed into FR-092 Bucket B/Wave 4. T05 Phase-4 evidence asserted AC1-AC6 satisfied, but the user-visible outcome on live `kboard.md` / `fbuboard.md` is not produced — duplicate tail tokens persist. The drift (B1-B4 in FR-092) is owned by the meta program; this FR remains authoritative for the architectural target and is closed only when FR-092 sign-off proves the canonical outcome on live boards.

---

## Summary

Redesign UKW/RW board-row mutation from append/reconcile string edits to a canonical transform engine:

1. parse row into structured components,  
2. normalize against explicit board contracts,  
3. render deterministic canonical output.

This FR closes the architecture gap exposed by BR-069: repeated FBU/task/IPP/timestamp tail segments, ordering drift between UKW and RW paths, and non-terminal timestamp append churn.

---

## Problem Statement

Current normalization is path-dependent and line-append oriented. On corrupted rows, repeated runs can preserve or amplify structural corruption:

- duplicate task-id link segments,
- duplicate or displaced `Last modified` chunks,
- inconsistent output between RW and standalone UKW ordering,
- violation of board-specific display semantics (notably `fbuboard` needing FBU-first presentation).

BR-069 captures the defect evidence. This FR captures the forward architecture needed to eliminate the defect class.

---

## Goals

- Establish one canonical row grammar and transform pipeline shared by RW and UKW.
- Enforce board-specific rendering contracts:
  - `fbuboard`: `FBU -> Task -> IPP -> Last modified`
  - `kboard`: task-led contract, deterministic and documented
- Preserve forensic timestamp integrity without appending spurious synthetic timestamps.
- Ensure idempotent repeated runs across clean and previously-corrupted rows.

---

## RW-UKW Coupling Contract

RW and UKW must remain cohesive within their own domains while staying loosely coupled through explicit contracts.

### Responsibility boundaries

- **RW owns release integrity:** version lineage, changelog, release slicing, validator gates, and release-safe scoped updates.
- **UKW owns kanban coherence:** task/story/epic/board synchronization, board hygiene, and priority-state consistency.
- **No ownership bleed:** UKW must not implicitly perform release concerns; RW must not duplicate UKW intelligence engines.

### Mandatory integration contracts

- [ ] **FR-090-C1 (Invocation context contract):** UKW execution context is explicit (`rw_step_7` vs `standalone`) with a documented operation matrix.
- [ ] **FR-090-C2 (Shared transform contract):** both workflows call the same canonical row-transform API and parser/renderer implementation.
- [ ] **FR-090-C3 (Mutation budget contract):** in `rw_step_7`, UKW may mutate only active release slice surfaces unless explicitly escalated.
- [ ] **FR-090-C4 (Audit contract):** UKW and RW emit compatible diagnostics: what changed, why it changed, and the scope touched.
- [ ] **FR-090-C5 (Failure contract):** divergence/uncertainty behavior is identical in both contexts (non-destructive forensic-safe fallback).

### Coupling quality criteria

- **Sympathetic awareness:** each workflow understands the other’s purpose and constraints without taking over the other’s responsibilities.
- **Loose coupling by interface:** behavior parity is achieved through shared contracts and APIs, not duplicated logic.
- **Deterministic cohesion:** identical fixtures yield identical canonical outputs regardless of invocation context.

---

## Requirements

### Functional Requirements

- [ ] **FR-090-F1 (Single pipeline):** RW and UKW must both call a shared `transform_moscow_row_pipeline` (or equivalent), removing ordering divergence.
- [ ] **FR-090-F2 (Parse then render):** Replace append-style token rewriting with parse-model-render canonicalization for MoSCOW rows.
- [ ] **FR-090-F3 (Board contracts):** Enforce board-specific token order contracts explicitly; `fbuboard` must always render FBU before task.
- [ ] **FR-090-F4 (Timestamp semantics):** Treat any valid row timestamp as evidence; do not append `timestamp_now` solely because an existing timestamp is non-terminal.
- [ ] **FR-090-F5 (Duplicate-link control):** Guarantee single-instance task-link and FBU-link segments after normalization.
- [ ] **FR-090-F6 (Divergence policy):** Preserve FR-089 dual-agreement/divergence forensic policy with explicit diagnostics.
- [ ] **FR-090-F7 (Migration mode):** Provide deterministic repair behavior for historically corrupted rows, with optional report-only mode.

### Non-Functional Requirements

- [ ] **FR-090-NF1 (Idempotency):** Two consecutive runs on same input produce byte-identical output.
- [ ] **FR-090-NF2 (Parity):** UKW and RW produce identical canonical row output for identical fixtures.
- [ ] **FR-090-NF3 (Auditability):** Emit high-signal metrics for repaired rows, divergence rows, and suppressed timestamp appends.
- [ ] **FR-090-NF4 (Safety):** Maintain non-destructive forensic behavior for unresolved divergence cases.

---

## Acceptance Criteria

- [ ] Shared transform path is implemented and used by both `update_kanban_board` and `enforce_terminal_timestamps_on_boards`.
- [ ] Regression tests verify:
  - `fbuboard` always renders FBU before Task,
  - no duplicate task/FBU segments after repeated runs,
  - no synthetic second `Last modified` append when valid timestamp already exists,
  - RW/UKW parity on identical fixtures.
- [ ] Existing documentary regression (`test_4_13`) is either retired or converted into preservation/pass assertions after fix.
- [ ] BR-069 residual open ACs are satisfied and bug can be closed or narrowed to residual edge cases only.

---

## Scope and Governance Split

- **BR-069** remains the defect record and closure gate for observed corruption symptoms.
- **FR-090** owns the architectural redesign and implementation program for UKW/RW row canonicalization.

---

## Related

- [BR-069](./BR-069-kboard-fbuboard-earliest-last-modified-timestamps-overwritten.md)
- [FR-089](./FR-089-ipw-board-row-footer-duplication-validation-hardening.md)
- [IPP-E2S15T04](../../../implementation-cycles/IPP-E2S15T04-br069-row-tail-normalization-and-terminal-timestamp-interaction.md)
- [T04 (E2:S15:T04)](../epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T04-investigate-earliest-last-modified-timestamp-overwrite-regression-br069.md)
