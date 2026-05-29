# Changelog v0.2.15.5+9

**Release Date:** 2026-04-22 16:30:00 UTC  
**Internal Version:** 0.2.15.5+9  
**Epic / Story / Task:** E2 | S15 | T05

## Summary

`RW E2:S15:T05 --art` publishes IPP Phase 1 by introducing a shared canonical row-transform entrypoint and contract-based pipeline wiring while preserving current per-context transform order.

## Change implemented

- Incremented internal build to `v0.2.15.5+9`
- Updated SemVer-facing release metadata to `v0.4.764+9`
- Added shared row-transform entrypoint `apply_canonical_row_transform_pipeline(...)` in `update_kanban_docs.py`
- Introduced explicit contracts for RW Step 7 and standalone execution paths
- Added regression coverage for Phase 1 contract-selected step ordering (`Test 4.14`)

## References

- **Task:** [T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md](docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md)
- **FR:** [FR-090](docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- **IPP:** [IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md](docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)
