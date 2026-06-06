# Changelog — v0.8.3.17+2

**Release Date:** 2026-06-06 15:30:00 UTC

**Epic:** 8 | **Story:** 3 | **Task:** 17

## Summary

E08:S03:T17 — **Change implemented:** Local Code Quality Gate (CQG) per FR-113 — CodeQL engine, RW Step 9 advisory validator, 6 h monitor, ADR-022, operator guide, tests. SemVer **v0.4.1002+2**.

## Changes

### Added

- `packages/frameworks/tooling-automation/validators/code_quality/` — CQG engine (SARIF ingest, GitHub ratings, thresholds)
- `run_cqg.py`, `validate_code_quality_gate.py`, `cqg_monitor.py` entrypoints
- `code_quality_gate:` block in `rw-config.yaml` and schema
- [ADR-022](../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [IPP-E08S03T17](../../implementation-cycles/IPP-E08S03T17-local-code-quality-gate-cqg-fr113.md)
- Operator guide and parity template; 16 pytest cases
- FR-106 mirror under `greenfield-install/`

### Documentation

- RW Step 9 validator list updated (advisory CQG)
- `rw-validators-consumer-layout.md` §6 CQG adoption

## References

- [FR-113](../../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg-fr113.md)
- [T17](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T17-local-code-quality-gate-cqg-fr113.md)
