---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-22T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW E2:S15:T05 Test Design

## Test Strategy

Use fixture-first tests around canonical MoSCOW row tails, then run both RW and UKW transform entrypoints over the same fixtures to prove parity. Preserve forensic divergence behavior where required, while proving duplication and synthetic-footer regressions are blocked.

## Coverage Matrix

1. **Pipeline Parity (AC1, AC5):**
   - Same fixture through RW path and UKW path yields identical canonical row output.
   - Include cases with pre-existing duplicated footer/task/FBU segments.
2. **fbuboard Ordering Contract (AC2):**
   - `fbuboard` rows always render `FBU -> Task -> IPP -> Last modified`.
   - Contract holds across repeated runs and after corrupted-input repair.
3. **Timestamp Safety (AC3):**
   - Existing valid row timestamp does not cause synthetic second `Last modified` append.
   - Non-terminal legacy timestamp is normalized into canonical terminal representation.
4. **Idempotency and Deduplication (AC4):**
   - Running pipeline repeatedly does not add new task/FBU/IPP/footer segments.
   - Byte-identical output after second run for stable fixtures.
5. **Divergence Policy (AC5):**
   - Footer divergence is surfaced with diagnostics.
   - Divergence path remains non-destructive and forensic-safe.
6. **Traceability Closure Readiness (AC6):**
   - Tests map directly to FR-090 functional/non-functional requirements and BR-069 residual ACs.

## Test Additions / Updates

- Extend or refactor tests in:
  - `packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py`
- Preserve and evolve documentary regressions:
  - `test_4_13_br069_pipeline_order_divergence_and_non_terminal_footer_append`
- Add explicit parity fixtures for RW/UKW shared pipeline assertions.
- Add fixture set covering corrupted rows with multiplied task/FBU/IPP/footer segments.

## Verification Commands

- `pytest "packages/frameworks/workflow mgt/scripts/test_update_kanban_docs.py"`
- `python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode full --dry-run`
- `python "packages/frameworks/workflow mgt/scripts/update_kanban_docs.py" --mode kanban_init --dry-run`

## Pass Criteria

- All new/updated tests pass.
- No parity drift between RW/UKW transform outputs on shared fixtures.
- No synthetic second footer or segment multiplication regressions remain in covered paths.
