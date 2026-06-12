# Changelog v0.2.15.14+1

**Release Date:** 2026-06-12 09:36:32 UTC  
**Epic:** 2 | **Story:** 15 | **Task:** 14  
**SemVer:** v0.4.1151+1 (task-touch)

---

## Summary

ADR-029 / FR-130: Kanban MoSCOW row stamp pipeline defaults to `non_substantive` — meta-work (UKW, RW Step 7 structural passes, hygiene) no longer appends `now()` stamps unless caller explicitly passes `work_authoritative`.

---

## Changed

### Attempted implementation (ADR-029 compliance)

- **`enforce_moscow_row_timestamps_with_stats`** and **`apply_canonical_row_transform_pipeline`** default `evidence_mode` → `non_substantive` (was `work_authoritative`).
- **RW Step 7** `update_kanban_board` passes `non_substantive` explicitly on row transform pipeline.
- **`FourSurfaceReport`** fallback evidence mode string → `non_substantive`.
- **`kanban-governance-policy.md`:** ADR-029 cross-link; document safe-by-default invariant.
- **ADR-029** compliance checklist marked Done (CLI `--stamp-substantive` deferred — use API).
- **Tests:** `test_default_evidence_mode_is_non_substantive`, `test_apply_pipeline_default_is_non_substantive` (10/10 green).
- **Greenfield mirror** synced.

---

## References

- [FR-130](docs/kanban/fr-br/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md)
- [ADR-029](docs/architecture/standards-and-adrs/ADR-029-kanban-stamp-immutability-substantive-work-only.md)
- [IPP-E02S15T14](docs/implementation-cycles/IPP-E02S15T14-kanban-stamp-immutability-adr029-fr130.md)
