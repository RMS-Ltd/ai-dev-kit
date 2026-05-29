---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E2:S15:T05 Implementation Plan

## Phase 1: Canonical Pipeline Introduction

1. Introduce a shared canonical row-transform entrypoint in `update_kanban_docs.py`.
2. Centralize parse-model-normalize-render logic currently split across multiple helper paths.
3. Define explicit board contract selection (`kboard` vs `fbuboard`) within pipeline invocation.

## Phase 2: Integration and Ordering Unification

1. Wire both `update_kanban_board` and `enforce_terminal_timestamps_on_boards` to the same pipeline.
2. Remove ordering divergence between normalization, duplicate-footer handling, and timestamp enforcement.
3. Keep divergence-safe diagnostics and non-destructive fallback behavior aligned across invocation contexts.

## Phase 3: Regression and Parity Hardening

1. Add parity fixtures proving RW vs UKW output equivalence.
2. Extend idempotency tests for repeated runs on historically corrupted row fixtures.
3. Convert documentary BR-069 regressions into preservation/pass assertions where remediation is complete.

## Phase 4: Validation and Traceability Closure

1. Execute test suite and dry-run checks for both update modes.
2. Map each completed behavior to T05 AC1-AC6 and FR-090/BR-069 residual requirements.
3. Update task/FR/BR traceability notes to reflect closure-ready implementation evidence.

## Risk Controls

- Keep changes localized to canonical row-tail transform code paths.
- Preserve forensic-safe fallback semantics for ambiguous divergence cases.
- Use fixture-driven comparisons to detect subtle row-render drift.
- Ship in incremental commits with explicit rollback points per phase.

## Deliverable Mapping

- **AC1:** Shared pipeline invocation in RW and UKW code paths.
- **AC2:** Deterministic `fbuboard` FBU-first renderer.
- **AC3:** No synthetic second footer when valid timestamp exists.
- **AC4:** Stable idempotent output under repeated runs.
- **AC5:** Regression suite proving parity and forensic-safe divergence behavior.
- **AC6:** FR-090/BR-069 residuals traceably satisfiable via completed tests and docs.
