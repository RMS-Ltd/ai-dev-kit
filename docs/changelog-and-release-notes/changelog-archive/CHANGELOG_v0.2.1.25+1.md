# Changelog v0.2.1.25+1

**Release Date:** 2026-06-07 17:16:34 UTC  
**Epic | Story | Task:** E02:S01:T25 (`RW --art`; co-delivered **E03:S02:T13**)  
**SemVer (task_touch):** v0.4.1037+1  

## Summary

**Change implemented:** FR-115 + FR-116 v1 — async release-metadata ingest read model (SQLite). Git markdown/YAML remain SoT; RW Steps 3–4 unchanged. Umbrella delivery closes **T25** (changelog ingest) and **T13** (semver ingest).

## Added

- `packages/frameworks/workflow-mgt/scripts/release_metadata/` — schema, store, semver/changelog ingest, query/audit CLIs
- `validate_ingest_freshness.py` — advisory DB lag check
- `.github/workflows/release-metadata-ingest.yml` — daily 03:00 UTC + `workflow_dispatch`
- [ADR-025](../../architecture/standards-and-adrs/ADR-025-release-metadata-async-ingest-read-model.md) — async ingest architecture
- [IPP-E02S01T25](../../implementation-cycles/IPP-E02S01T25-release-metadata-async-ingest-umbrella.md) — umbrella implementation plan
- `rw-config.yaml` — `release_metadata_store` + `ingest` blocks; `.gitignore` — `.data/`
- `greenfield-install/` mirror + adopter guide

## Changed

- `docs/governance/standards/changelog-archival-policy.md` — cross-link to release-metadata ingest
- `run_workflow_scripts_ci_pytest.sh` — ingest test in CI matrix
- `semver-registry.yaml` — `0.2.1.25+1` → `0.4.1037+1` mapping

## Verification

- `pytest` release_metadata ingest tests: **5 passed** (local)
- Full corpus ingest: semver **301** unique IVs; changelog **146** main + **970** archive rows
- `audit_release_metadata.py`: **OK** (injectivity + drift)
- GHA scheduled ingest: **pending** operator verification on next run

## Notes

- Phase 2 (out of v1): CMW DB metrics, slim YAML, RW write-path DB
- FR-115 / FR-116: **IMPLEMENTED (pending operator verification)** — not intake-completed until sign-off

## Kanban / intake

- **E02:S01:T25** — COMPLETE @ **v0.2.1.25+1**
- **E03:S02:T13** — COMPLETE @ **v0.2.1.25+1** (umbrella co-release)
- **FR-115** / **FR-116** — IMPLEMENTED (pending verification)

## References

- [T25](../../project-management/kanban/epics/epic-02/story-01-rw-agent-execution-and-docs/T25-changelog-structured-store-database-backed-cmw-fr115.md)
- [T13](../../project-management/kanban/epics/epic-03/story-02-versioning-cookbook-and-examples/T13-semver-registry-structured-store-shared-release-metadata-fr116.md)
- [FR-115](../../project-management/kanban/fr-br/FR-115-changelog-structured-store-database-backed-cmw.md)
- [FR-116](../../project-management/kanban/fr-br/FR-116-semver-registry-structured-store-shared-release-metadata.md)
