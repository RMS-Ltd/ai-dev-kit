---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E2:S15:T05 Specification

## Problem

`update_kanban_docs.py` currently applies row-tail mutations through multiple helper chains with path-dependent ordering between RW and UKW flows. This enables repeated task/FBU/IPP segments and duplicate `Last modified` footer behavior under some row states.

## Objectives

- Define one canonical parse-normalize-render contract shared by RW and UKW.
- Enforce board-specific ordering contracts, especially `fbuboard` FBU-first rendering.
- Preserve forensic-safe timestamp semantics while preventing synthetic second footer append.
- Guarantee idempotent repeated runs on both clean and historically corrupted rows.

## Requirements

1. **Shared Pipeline Requirement:** RW and UKW must call one shared canonical row-transform entrypoint and remove ordering divergence.
2. **Structured Row Model Requirement:** Transform behavior must operate on a parsed row model (tokens/segments/footer metadata), not append-style string mutation chains.
3. **Board Contract Requirement:** Board render contracts are explicit and deterministic:
   - `fbuboard`: `FBU -> Task -> IPP -> Last modified`
   - `kboard`: task-led contract with deterministic terminal `Last modified`.
4. **Timestamp Requirement:** If a valid row timestamp is already present, the pipeline must not append a synthetic second `Last modified` only because of prior non-terminal placement.
5. **Deduplication Requirement:** At canonical output, each semantic segment class appears at most once (task link, FBU link, IPP link, footer).
6. **Divergence Safety Requirement:** For unresolved footer divergence, behavior remains forensic-safe and non-destructive with explicit diagnostics.
7. **Parity and Idempotency Requirement:** Identical fixtures processed through RW and UKW must produce byte-identical row outputs; repeated runs are stable.

## Scope Boundaries

### In Scope

- Canonical row-tail transform architecture for MoSCOW rows in `kboard` and `fbuboard`.
- Integration points used by RW Step 7 and standalone UKW maintenance passes.
- Regression coverage proving parity, idempotency, and duplicate-segment elimination.

### Out of Scope

- Reprioritization policy changes (MoSCOW strategy changes).
- Broad rewrite of unrelated kanban governance validators.
- One-off manual board cleanup instructions outside deterministic transform behavior.

## Invariants

- Canonical row output has one deterministic terminal `Last modified` chunk.
- Canonical row output has no multiplied FBU/task/IPP segments.
- Canonical row ordering for `fbuboard` is always FBU before Task.
- Canonical output for a fixture is context-invariant (RW vs UKW).

## Traceability

- Upstream FR: `FR-090`
- Defect record: `BR-069`
- Evidence basis: `IPP-E2S15T04`
- Implementing task: `E2:S15:T05`
