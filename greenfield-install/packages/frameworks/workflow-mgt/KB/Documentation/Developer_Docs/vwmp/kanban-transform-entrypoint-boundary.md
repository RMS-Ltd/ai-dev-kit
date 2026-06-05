---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T07:30:00Z
expires_at: null
housekeeping_policy: keep
---

# Kanban transform entrypoint boundary (RW vs UKW vs deterministic script)

This document defines the **entrypoint boundary** for canonical MoSCOW row “tail” transforms across:
1. **RW Step 7** (agentic execution context: `invocation_context: rw_step_7`)
2. **UKW Step 6** (agentic execution context: board-update hygiene)
3. **Deterministic script** (`update_kanban_docs.py`), including corpus-canonical sweeps

## Canonical shared entrypoint

The shared “parse-normalize-render” pipeline is implemented by:

- `packages/frameworks/workflow-mgt/scripts/update_kanban_docs.py`
- `apply_canonical_row_transform_pipeline(...)`
- contract selection via:
  - `ROW_TRANSFORM_CONTRACT_RW_STEP7`
  - `ROW_TRANSFORM_CONTRACT_STANDALONE`

## Contract + evidence-mode expectations

### RW Step 7 (agentic)

Use:
- Contract: `ROW_TRANSFORM_CONTRACT_RW_STEP7`
- Evidence mode: `work_authoritative`

Expected behavior:
- Canonical non-cosmetic steps enforce:
  - traceability normalization
  - duplicate-footer reconciliation
  - timestamp enforcement (stamp missing rows, preserve existing stamps)
- Cosmetic state-icon injection is best-effort and is not part of the executed-step diagnostics contract.

### UKW Step 6 (agentic board hygiene)

Use:
- Contract: `ROW_TRANSFORM_CONTRACT_STANDALONE`
- Evidence mode: `non_substantive`

Expected behavior:
- Avoid introducing synthetic `Last modified` stamps when the run is hygiene-only.
- Preserve existing stamps; treat missing stamps as “do not mint” under `non_substantive`.

### Deterministic `update_kanban_docs.py` (script entrypoint)

Use the contract that matches the invocation context:
- corpus/standalone sweep: `ROW_TRANSFORM_CONTRACT_STANDALONE` + `non_substantive`
- RW Step 7 emulation/testing: `ROW_TRANSFORM_CONTRACT_RW_STEP7` + `work_authoritative`

## Diagnostics contract (what “executed_steps” means)

`apply_canonical_row_transform_pipeline(..., contract=...)` returns diagnostics including:

- `executed_steps`: canonical non-cosmetic transform steps only
- `dup_report`: duplicate-footer reconciliation stats
- `timestamp_report`: timestamp enforcement stats (including stamps suppressed/skipped)

Do not use state-icon injection as a signal for canonical executed-step parity.

## Practical rules for adopters

- Do not route row tail transforms through ad-hoc pipelines.
- When implementing alternate entrypoints, always delegate to `apply_canonical_row_transform_pipeline(...)` with the correct contract and evidence-mode.
- If your change only concerns cosmetic icons, run icon injection utilities; do not alter the executed-step transform contract surface.

