---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-07T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E02:S01:T25 — Changelog Structured Store — Database-Backed CMW (FR-115)

**Task ID:** E02:S01:T25  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Complex  
**Created:** 2026-06-07  
**Last updated:** 2026-06-07 (**v0.2.1.25+1** — RW umbrella release; v1 async ingest delivered)  
**Version Anchor:** v0.2.1.25+1  
**Code:** E02S01T25

Publication Status: NOT_APPLICABLE

---

## Scope

Implement a **changelog read model** (SQLite default) fed by **async ingestion** from RW-produced markdown (FR-115 operator-preferred). **RW Steps 3–4 unchanged** — git markdown remains SoT; background cron/GHA parses into DB for query/analytics. Phase 2 may tie CMW metrics to DB; v1 does not require RW hot-path changes.

**Evolves (does not immediately replace):** threshold-centric CMW triggers and markdown-only query patterns from FR-025 era.

---

## Input

- [IPP-E02S01T25-release-metadata-async-ingest-umbrella.md](../../../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md) — **umbrella IPW** (FR-115 + FR-116 / T25 + T13)
- [FR-115](../../../fbu/FR-115-changelog-structured-store-database-backed-cmw.md) — feature request, options analysis, acceptance criteria
- [FR-025](../../../fbu/FR-025-changelog-management-and-archival-workflow.md) — prior CMW implementation (markdown SoT)
- [BR-074](../../../fbu/BR-074-rw-release-commits-test-artifacts-and-changelog-integrity-failures.md) — immutability and archive integrity lessons
- `packages/frameworks/workflow-mgt/scripts/changelog/` — current CMW script suite
- `docs/governance/standards/changelog-archival-policy.md`
- `rw-config.yaml` — path configuration SoT

---

## Deliverables

1. **IPP** — ingest schema, cron placement (GHA schedule + manual CLI), shared architecture with T13, rollback (re-ingest).
2. **Ingest module** — parse `CHANGELOG.md` + archive tree → SQLite; idempotent `content_hash` / cursor.
3. **Scheduled job** — GHA cron (default) + `ingest_release_metadata.py --full` for manual replay.
4. **Query tooling** — maintainer CLI for E:S:T / date filters (optional v1).
5. **Optional drift check** — non-blocking freshness validator (DB lag vs HEAD).
6. **Docs** — adopter guide (optional cron, gitignored DB); Phase 2 notes for CMW/threshold.
7. **Tests** — ingest round-trip, ordering, parser parity with existing changelog format.
8. **greenfield-install parity** (FR-106).

---

## Acceptance Criteria

- [x] **AC1:** IPP linked from this task and FR-115; IPW gate satisfied before implementation.
- [x] **AC2:** RW Steps 3–4 unchanged; markdown remains git SoT.
- [x] **AC3:** ai-dev-kit historical archive ingests with preserved ordering and release dates.
- [x] **AC4:** Scheduled ingest operational; manual `--full` replay documented.
- [x] **AC5:** Query tooling demonstrates E:S:T lookup from store.
- [x] **AC6:** Adopter docs: optional cron, gitignored DB, markdown-only fallback.
- [x] **AC7:** Status reconciled to actual state at task closeout (FR-094 mandate).

---

## Associated Feature Request

- [FR-115: Changelog Structured Store — Database-Backed CMW](../../../fbu/FR-115-changelog-structured-store-database-backed-cmw.md)

---

## Approach (high level — detail in IPP)

1. **IPW** — cron cadence, shared ingest with T13, parser reuse vs new module.
2. **Schema + ingest API** — `release`, `section`, `item`, `ingest_cursor`.
3. **Full ingest** — one-time + incremental from git markdown corpus.
4. **GHA schedule** — daily/weekly ingest workflow (non-blocking).
5. **Query CLI** — maintainer-facing lookups.
6. **Phase 2 backlog** — CMW reads DB metrics; slim changelog generation (out of v1 scope).

---

## Dependencies

- RW Step 3/4 agent execution docs (E02:S01)
- CMW perpetual task pattern (E06:S06 / E02:S16 — operational runs post-cutover)
- FR-110 lean footprint — SQLite single-file constraint
- [FR-116 / E03:S02:T13](../../epic-03/story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md) — coordinate shared `release_metadata_store` schema in IPW

---

## References

- [IPP-E02S01T25-release-metadata-async-ingest-umbrella.md](../../../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md)
- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/release-workflow-agent-execution.md`
- `packages/frameworks/workflow-mgt/workflows/changelog-management-workflow.yaml`
- `.cursor/skills/cmw-maintain/SKILL.md`
