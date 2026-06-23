---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-09T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-003: SemVer Allocation Authority (SAA)

**Status:** Implemented  
**Date:** 2026-06-09  
**Related:** FR-120, ADR-002, E02:S17, E03:S02:T14

---

## Context

[ADR-002](ADR-002-task-touch-derived-mapping.md) defines task-touch **semantics** (global monotonic PATCH). E02:S17 moved registry **storage** to SQLite (`.adk/release-state.db`), but PATCH generation still ran in Python (`semver_converter.py`) with a full-dict round-trip — preserving collision classes ([BR-061](../kanban/fbu/BR-061-semver-task-touch-counter-increments-too-often.md), [BR-073](../kanban/fbu/BR-073-semver-task-touch-collision-retrospective-fix.md)).

---

## Decision

Introduce **SemVer Allocation Authority (SAA)** — the only production path that **generates and assigns** SemVer for task_touch releases.

### Black-box contract

```python
allocate(db_path, internal_version) -> AllocateResult  # idempotent
lookup(db_path, internal_version) -> AllocateResult | None
audit(db_path) -> injectivity report
```

### Rules

1. **Single transaction:** `BEGIN IMMEDIATE` → lookup → increment counter → INSERT mapping → COMMIT.
2. **UNIQUE constraints:** `(rc, internal_version)`, `(rc, patch)`, `(rc, semver_core)`, `(rc, semver_full)`.
3. **Preview:** lookup-only for unknown internals — no speculative PATCH (`PreviewNotAllowed`).
4. **RW choke point:** `finalize_rw_semver_registry.py` calls `allocate()` only.
5. **YAML export:** generated audit trail after each allocate (`release_state_export_yaml` in `rw-config.yaml`).

### Mapping semantics

Unchanged from ADR-002: MAJOR=RC, MINOR=epic_count, PATCH=global sequence, BUILD from internal.

---

## Implementation

| Component | Path |
| --------- | ---- |
| Allocator | `packages/frameworks/workflow-mgt/scripts/release_state/allocate.py` |
| Schema v2 | `release_state/schema.sql`, `release_state/migrate.py` |
| RW Step 2.5 | `finalize_rw_semver_registry.py` |
| Facade | `semver_converter.py` delegates when `release_state_backend: sqlite` |

---

## Consequences

### Benefits

- Generation and persistence are atomic — no Python/YAML counter drift.
- DB enforces injectivity at write time.
- Internal `E.S.T` may decrease; SemVer core still increases on new releases.

### Trade-offs

- SQLite file is live SoT (gitignored); YAML is export-only.
- Legacy `release_state_backend: legacy` retains Python+YAML path for adopters not yet migrated.

---

## References

- [FR-120](../../kanban/fbu/FR-120-semver-allocation-authority-transactional-mapping-black-box.md)
- [IPP-E03S02T14](../../implementation-cycles/IPP-E03S02T14-semver-allocation-authority.md)
- [release-state-sqlite-mode.md](../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)
