# Changelog — v0.6.7.110+1

**Release Date:** 2026-04-09 11:42:11 UTC  
**Version:** `v0.6.7.110+1`  
**Task Anchor:** `E6:S07:T110`  
**SemVer:** `v0.4.704+1`

## Summary

Change implemented: UKW now treats `fr-br-uxr-board.md` as first-class reconciliation scope with deterministic active-row pruning, temporal-drift normalization, and concurrency-safe pre-write revalidation.

## Changes Implemented

### UKW Script Behavior

- Added fbuboard reconciliation logic in `update_kanban_docs.py`:
  - prunes active rows linked to terminal FR/BR/UXR statuses (`COMPLETE`, `COMPLETED`, `IMPLEMENTED`, `FIXED`, `RESOLVED`),
  - preserves explicit unresolved-verification exceptions (`IN PROGRESS`, `UNVERIFIED`, `PENDING VERIFICATION`),
  - normalizes active row terminal timestamps and board `Last Updated` metadata,
  - revalidates file content before write and reapplies transforms if concurrent drift is detected.
- Added reconciliation telemetry output:
  - audited rows, removed rows, kept exceptions, normalized timestamps, and concurrency revalidation events.

### UKW Documentation and Rules

- Updated UKW skill guidance in `.cursor/skills/ukw-sync/SKILL.md` for mandatory fbuboard parity behavior.
- Updated UKW execution reference in `update-kanban-workflow-agent-execution.md` with explicit fbuboard reconciliation and drift guard step.
- Updated `.cursorrules` UKW trigger section to require deterministic fbuboard reconciliation and pre-write revalidation.

### Regression Coverage

- Added `test_4_3_fbuboard_reconciliation_prunes_and_keeps_exception` in `test_update_kanban_docs.py`.
- Verified edge-case suite passes:
  - dry-run behavior,
  - stale completed-row pruning,
  - exception preservation,
  - timestamp normalization path.

## Validation Notes

- Step 1/1b/1c/1d guards passed for `RW E6:S07:T110 --art`.
- UKW dry-run output confirms reconciliation metrics and no stale-row regressions.
