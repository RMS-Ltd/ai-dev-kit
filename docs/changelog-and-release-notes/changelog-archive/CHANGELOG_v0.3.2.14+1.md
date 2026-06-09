# Changelog v0.3.2.14+1

**Release Date:** 2026-06-09 11:54:56 UTC  
**Epic:** 3 | **Story:** 2 | **Task:** 14  
**SemVer:** v0.4.12+1 (internal: v0.3.2.14+1)

---

## Summary

E03:S02:T14 / FR-120 — **Change implemented:** SemVer Allocation Authority (SAA): SQL-backed `allocate()` transaction replaces Python/YAML PATCH generation for task_touch releases; schema v2 with `semver_core` UNIQUE constraints; export-on-RW YAML audit trail.

---

## Added

- `release_state/allocate.py` — `allocate`, `lookup`, `audit` (BEGIN IMMEDIATE, lock retry)
- `release_state/migrate.py` — schema v2 migration (`semver_core`, UNIQUE indexes)
- `tests/release_state/test_allocate.py` — idempotency, parallel, performance
- [ADR-003](../../architecture/standards-and-adrs/ADR-003-semver-allocation-authority.md)
- [IPP-E03S02T14](../../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)
- `release_state_export_yaml` config key (`.adk/semver-registry-export.yaml`)

## Changed

- `finalize_rw_semver_registry.py` — SAA choke point + YAML export every RW
- `semver_converter.py` — sqlite path delegates to SAA; preview lookup-only
- `validate_semver_registry_injective.py` — DB `audit()` fast path
- [ADR-002](../../architecture/standards-and-adrs/ADR-002-task-touch-derived-mapping.md) — implementation → SAA
- [dev-kit-versioning-policy.md](../../governance/standards/dev-kit-versioning-policy.md) §2.1
- [release-state-sqlite-mode.md](../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)

## Fixed

- Schema init on legacy DBs: migrate v2 before `semver_core` indexes (RW finalize no longer fails on existing `.adk/release-state.db`)

---

**Related:** [FR-120](../../kanban/fr-br/FR-120-semver-allocation-authority-transactional-mapping-black-box.md) · [T14](../../kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T14-semver-allocation-authority-transactional-mapping-fr120.md)
