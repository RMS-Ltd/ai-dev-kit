# Changelog v0.2.15.5+11

**Release Date:** 2026-04-22 17:10:00 UTC  
**Internal Version:** 0.2.15.5+11  
**Epic / Story / Task:** E2 | S15 | T05

## Summary

`RW E2:S15:T05 --art` publishes IPP Phase 3 by hardening parity, deduplication, and repeated-run idempotency regression coverage for the canonical row-transform engine.

## Change implemented

- Incremented internal build to `v0.2.15.5+11`
- Updated SemVer-facing release metadata to `v0.4.764+11`
- Added Phase 3 regression matrix test coverage (parity + ordering + timestamp + dedup + idempotency)
- Fixed traceability token normalization for repeated-run byte stability
- Kept unified contract ordering and terminal-footer safety behavior intact

## References

- **Task:** [T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md](docs/project-management/kanban/epics/Epic-2/Story-015-ipw-governance-and-publication-contract/T05-implement-ukw-rw-canonical-row-transform-engine-fr090.md)
- **FR:** [FR-090](docs/project-management/kanban/fr-br/FR-090-ukw-canonical-row-transform-engine-and-board-specific-rendering-contracts.md)
- **IPP:** [IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md](docs/implementation-cycles/IPP-E2S15T05-ukw-rw-canonical-row-transform-engine-fr090.md)
