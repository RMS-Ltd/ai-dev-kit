# Changelog v0.2.16.23+1

**Release Date:** 2026-06-08 13:29:00 UTC

**Epic:** 2 | **Story:** 16 | **Task:** 23

---

## Summary

E02:S16:T23 — **Change implemented:** CQG gate relocation to IDW Phase 6b (ADR-022 v0.0.2) — canonical task anchor, story wiring, ADR implementing-task cross-ref. Implementation surfaces (validator, `idw_*` config, IDW/RW SoT) shipped @ **v0.2.16.22+1** with IDW delivery; this release attributes policy to **T23**. SemVer **v0.4.1064+1**.

---

## Details

### Added

- E02:S16:T23 task doc — CQG → IDW Phase 6b operator directive and acceptance criteria

### Changed

- Story 016 checklist — T23 row
- ADR-022 — implementing-task link to E02:S16:T23

### Notes

- CQG runs at **IDW Phase 6b** (`validate_code_quality_gate.py --strict`); **RW** does not run CodeQL (Step 9.7 Actions CI parity unchanged).

### References

- [T23](../../project-management/kanban/epics/epic-02/story-16-perpetual-ongoing-workflow-operations/T23-cqg-gate-relocation-to-idw-phase-6b-adr022.md)
- [ADR-022](../../architecture/standards-and-adrs/ADR-022-local-code-quality-gate-architecture.md)
- [FR-113](../../project-management/kanban/fr-br/FR-113-local-code-quality-gate-cqg.md)
