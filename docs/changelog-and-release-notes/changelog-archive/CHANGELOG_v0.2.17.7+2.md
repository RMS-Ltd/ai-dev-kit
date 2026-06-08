# Changelog v0.2.17.7+2

**Release Date:** 2026-06-08 12:16:43 UTC  
**Epic:** 2 | **Story:** 17 | **Task:** 7  
**SemVer:** v0.4.11+2

---

## Summary

Post-push reconciliation after SQLite cutover merge to `dev`: stash hygiene, epic S17 kanban sync, RW-V04 registry path fix retained from merge commits.

---

## Change implemented

### E02:S17:T07 — Post-merge reconciliation (BUILD +2)

- Merged `origin/dev` (T16 Wave 3b/3c) with cutover tip retained (`v0.2.17.7+1`)
- `test_RW_V04_registry_yaml_load_benchmark`: resolves archived YAML via `rw-config` ingest path post-cutover
- Epic 2 checklist: E2:S17 marked COMPLETE (T01–T07)
- Dropped stale `pre-merge wip` stash; CI parity green on `dev`

---

## Related

- Prior cutover: [CHANGELOG_v0.2.17.7+1.md](CHANGELOG_v0.2.17.7+1.md)
- Task: [T07-production-sqlite-semver-registry-cutover.md](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/T07-production-sqlite-semver-registry-cutover.md)
