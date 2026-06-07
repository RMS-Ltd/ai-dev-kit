---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S17:T03 — SQLite release-state schema and migration design

**Task ID:** E02:S17:T03  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Medium  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07  
**Version Anchor:** v0.2.17.3+0  
**Code:** E02S17T03

Publication Status: NOT_APPLICABLE

---

## Scope

Design the **SQLite schema** and **migration path** from legacy MD/YAML release state. IPW required before T04 implementation.

**In scope:**

- Schema for: changelog entries (main + archive fields), semver mappings, task_touch counter, release metadata
- Import from existing `semver-registry.yaml` + changelog archive
- Export/round-trip for rollback and adopter portability
- `rw-config.yaml` hook for DB path
- Query patterns RW Steps 2–11 need (read-heavy; finalize at tag boundary)
- Migration idempotency and validation gates

**Out of scope:**

- Implementation (T04)
- Dropping legacy files (deferred until T05 parity passes)

---

## Input

- T02 baseline observations (schema stress cases)
- `semver-registry.yaml` structure
- `finalize_rw_semver_registry.py` · `semver_converter.py` contracts
- [FR-045](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) injective mapping invariant

---

## Deliverable

1. **IPP** under `docs/implementation-cycles/IPP-E02S17T03-sqlite-release-state-schema.md` (IPW gate for T04)
2. **`sqlite-schema-design.md`** — tables, indexes, finalize semantics, config keys
3. **Migration manifest** — YAML/MD → SQLite steps + validator checklist

---

## Acceptance Criteria

- [ ] AC1: Schema supports all fields required by existing validators without file-format hacks
- [ ] AC2: Import path proven on a copy of production registry + sample changelog archive
- [ ] AC3: Export reproduces validator-green legacy format (round-trip)
- [ ] AC4: IPP linked from this task doc before T04 starts

---

## Dependencies

**Blocks:** T04

**Blocked by:** T01 (scenario IDs inform schema stress cases); T02 partial (recommended, not hard)
