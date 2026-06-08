---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T15:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-025: Release Metadata Async Ingest Read Model

**Status:** Accepted  
**Date:** 2026-06-07  
**Deciders:** Operator + implementation planning (IPP-E02S01T25)  
**Related:** [FR-115](../../kanban/fr-br/FR-115-changelog-structured-store-database-backed-cmw.md), [FR-116](../../kanban/fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md), [ADR-002](ADR-002-task-touch-derived-mapping.md)

---

## Context

`CHANGELOG.md`, changelog archives, and `semver-registry.yaml` grow without bound. Line-threshold CMW and O(n) YAML scans for SemVer injectivity are clunky at ~1k+ mapping rows. Moving RW write path to SQLite increases release-path risk (FR-115/116 scope constraint).

---

## Decision

1. **Git markdown/YAML remain canonical SoT.** RW Steps 3–4 and `finalize_rw_semver_registry.py` are unchanged in v1.
2. **SQLite read model** at `release_metadata_store.path` (default `.data/adk-release-metadata.sqlite`, **gitignored**).
3. **Async ingest** via `ingest_release_metadata.py` — daily GHA schedule (03:00 UTC) + manual `--full`.
4. **Indexed tables** for semver mappings and changelog releases; join hub `release.internal_version`.
5. **Blocking validators** remain on YAML/markdown at RW Step 9; DB provides query + offline audit only.

---

## Consequences

**Positive**

- RW/IPW scope minimal; adopters without cron still work.
- Regenerable DB (`--full` ingest).
- O(log n) lookups and collision audits via indexes.

**Negative**

- Eventual consistency (cron lag).
- Parser maintenance when changelog/YAML formats drift.

---

## Phase 2 (not v1)

- CMW metrics from DB instead of 1000-line threshold.
- Slim `semver-registry.yaml` (counters only).
- Optional validator read path from store.

---

## References

- [IPP-E02S01T25](../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)
- `packages/frameworks/workflow-mgt/docs/release-metadata-ingest-guide.md`
