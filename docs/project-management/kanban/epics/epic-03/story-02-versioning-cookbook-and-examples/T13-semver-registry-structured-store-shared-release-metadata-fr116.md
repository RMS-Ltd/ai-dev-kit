---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:30:00Z
expires_at: null
housekeeping_policy: keep
---

# E03:S02:T13 — SemVer Registry Structured Store — Shared Release Metadata (FR-116)

**Task ID:** E03:S02:T13  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Complex  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07 (**v0.2.1.25+1** — RW umbrella co-release with T25)  
**Version Anchor:** v0.2.1.25+1  
**Code:** E03S02T13

Publication Status: NOT_APPLICABLE

---

## Scope

Add a **SemVer read model** via **async ingestion** from `semver-registry.yaml` (FR-116 operator-preferred). **RW finalize unchanged** — YAML remains git SoT; shared ingest job with [FR-115 / E02:S01:T25](../../../epic-02/story-01-rw-agent-execution-and-docs/T25-changelog-structured-store-database-backed-cmw-fr115.md). Step 9 YAML validators stay blocking in v1.

Complements **E03:S02:T12** (FR-045/046) — indexed query/audit layer, not task-touch semantic change.

---

## Input

- [IPP-E02S01T25-release-metadata-async-ingest-umbrella.md](../../../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md) — **umbrella IPW** (co-deliverable with T25)
- [FR-116](../../../fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md) — feature request, shared-store coordination, acceptance criteria
- [FR-115](../../../fr-br/FR-115-changelog-structured-store-database-backed-cmw.md) — sibling FR; shared `release_metadata` module
- [FR-045](../../../fr-br/FR-045-adr-002-task-touch-derived-mapping.md) · [FR-046](../../../fr-br/FR-046-rw-semver-tag-task-touch-mode.md)
- [T12](T12-implement-task-touch-semver-mapping-mode.md) — prior task-touch implementation (COMPLETE)
- `semver-registry.yaml` — current SoT
- `packages/frameworks/workflow-mgt/scripts/version/` — converter, finalize, validators

---

## Deliverables

1. **IPP** — `semver_*` ingest schema, shared job with T25, cron placement, Phase 2 slim-YAML notes.
2. **Ingest parser** — `semver-registry.yaml` → SQLite; idempotent hashes.
3. **Shared ingest CLI** — same entrypoint as changelog ingest (FR-115).
4. **Collision audit script** — optional maintainer report from DB indexes (non-blocking).
5. **Drift detector** — YAML row count vs DB row count alert.
6. **Tests** — ingest parity, ordering, audit script on known corpus.
7. **Docs** — `rw-config.yaml` keys; RW read path unchanged in v1.
8. **greenfield-install parity** (FR-106).

---

## Acceptance Criteria

- [x] **AC1:** IPP linked; shared infrastructure decision with FR-115 documented.
- [x] **AC2:** Historical `mapping_history` migrates without injectivity loss.
- [x] **AC3:** RW finalize unchanged; YAML Step 9 validators still blocking.
- [x] **AC4:** Ingest + optional collision audit on schedule.
- [x] **AC5:** Query demo: internal_version → SemVer from store.
- [x] **AC6:** Status reconciled at closeout (FR-094).

---

## Associated Feature Requests

- [FR-116: SemVer Registry Structured Store](../../../fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md)
- [FR-115: Changelog Structured Store](../../../fr-br/FR-115-changelog-structured-store-database-backed-cmw.md) (coordination)

---

## Approach (high level — detail in IPP)

1. **Coordinate with FR-115 IPW** — unified ingest job + `release_metadata_store` schema.
2. **Schema** — counters, maps, `mapping` rows with provenance fields.
3. **Ingest** — full + incremental from committed YAML.
4. **GHA cron** — shared schedule with changelog ingest.
5. **Audit tooling** — offline collision report from DB UNIQUE indexes.
6. **Phase 2** — slim YAML / validator read path (document only in v1 IPP).

---

## Dependencies

- E03:S02:T12 task-touch semantics (stable)
- E02:S01:T25 (FR-115) — optional shared module; not blocking IPW for FR-116 alone
- BR-097 finalize ordering — semver write before tag creation

---

## References

- [IPP-E02S01T25-release-metadata-async-ingest-umbrella.md](../../../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)
- `docs/governance/standards/dev-kit-versioning-policy.md`
- `packages/frameworks/workflow-mgt/scripts/version/finalize_rw_semver_registry.py`
- `packages/frameworks/workflow-mgt/scripts/validation/validate_semver_registry_injective.py`
