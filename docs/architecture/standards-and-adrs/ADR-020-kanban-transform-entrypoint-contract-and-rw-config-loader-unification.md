---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T07:30:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-020: Kanban row-transform entrypoint contract + `rw_config_loader` unification

**Status:** Accepted  
**Date:** 2026-06-05  
**Deciders:** Maintainer (via E02:S13:T10 / IPP)  
**Related:** [RF-092](../../kanban/fbu/FR-092-canonical-rw-ukw-kanban-consistency-program.md), [FR-097](../../kanban/fbu/FR-097-board-stamp-authority-and-forensic-timestamp-recovery.md), [IPP-E02S13T10](../../implementation-cycles/IPP-E02S13T10-kanban-transform-consolidation-and-config-loader-unification.md)

---

## Context

RW release correctness requires that MoSCOW row “tail” transforms be applied with:
1. a consistent contract (traceability normalization, duplicate-footer reconciliation, timestamp enforcement, and cosmetic state icon injection), and
2. consistent config discovery behavior from `rw-config.yaml` across scripts/validators.

Historically, this project had fragmentation risks in both areas:
- Row tail transforms could be routed through different pipelines or contract/evidence defaults.
- Multiple scripts/validators implemented independent `load_rw_config` functions, creating the risk of drift in path resolution or return-shape semantics.

---

## Decision

### 1) Canonical kanban row-transform entrypoint contract

Use `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py` as the canonical implementation of the shared row-transform entrypoint:

- `apply_canonical_row_transform_pipeline(...)` is the single “parse-normalize-render” entrypoint.
- `ROW_TRANSFORM_CONTRACT_RW_STEP7` is used for RW Step 7 (`invocation_context: rw_step_7`).
- `ROW_TRANSFORM_CONTRACT_STANDALONE` is used for deterministic/standalone contexts (e.g. explicit corpus-canonical sweeps and standalone invocations).

Evidence-mode semantics:
- RW Step 7 uses `evidence_mode = work_authoritative` (caller asserts the invocation is substantive work).
- Standalone/board-hygiene contexts use `evidence_mode = non_substantive` (must not mint synthetic stamps).
- Both contracts preserve existing `Last modified` timestamps; touch-only updates are stamp-neutral.

Diagnostics contract detail:
- Diagnostics `executed_steps` intentionally reports only the canonical non-cosmetic steps (traceability, duplicate-footer reconciliation, timestamp enforcement). Cosmetic state-icon injection may change in-order but is not part of the executed-step contract surface.

### 2) Canonical `rw_config_loader` for `rw-config.yaml`

Introduce and standardize on:

`packages/frameworks/workflow-mgt/scripts/rw_config_loader.py`

Call sites must use the shared loader behavior rather than per-file `load_rw_config` implementations.

Shared loader return-shape conventions:
- `load_rw_config(project_root=...)` returns `dict` on success; returns `None` on missing/unreadable/invalid-YAML.
- `load_rw_config_from_path(config_path=...)` loads from an explicit file path; returns `None` on missing/unreadable/invalid-YAML.
- `load_rw_config_or_empty(...)` never returns `None` (missing => `{}`).

This consolidation prevents schema/return-shape drift and keeps all downstream validators operating on identical config-derived inputs.

---

## Consequences

- Pros
  - Contract and evidence-mode semantics become consistent between RW agentic execution and deterministic script execution paths.
  - Config discovery becomes stable and parity-testable; validators no longer risk subtle config-return-shape differences.
- Trade-offs
  - Some scripts keep backward-compatible wrappers for legacy imports, but the YAML parsing and missing-file conventions are centralized.

---

## Alternatives considered

| Option | Rejected because |
| ------ | ---------------- |
| Keep independent per-script `load_rw_config` implementations | Drift risk: return-shape/path-resolution inconsistencies and untestable parity |
| Route row tail transforms through multiple ad-hoc pipelines | Drift risk: contract/evidence-mode differences cause repeated segments or ordering divergence |

