# Changelog v0.2.17.7+1

**Release Date:** 2026-06-08 13:05:00 UTC  
**Epic:** 2 | **Story:** 17 | **Task:** 7  
**SemVer:** v0.4.1059+1

---

## Summary

Production cutover of task_touch SemVer registry from root `semver-registry.yaml` to SQLite (`.adk/release-state.db`). Legacy YAML archived; RW finalize writes DB only.

---

## Change implemented

### E02:S17:T07 — SQLite semver-registry cutover

- Imported production registry into `.adk/release-state.db` (`import_legacy.py --validate`: counter=1058, mappings=323)
- Archived legacy YAML: `docs/changelog-and-release-notes/changelog-archive/semver-registry-legacy-final.yaml` (sha256 `647d9fcc46304c08e7a014dfc2d128248cdd48d902d50732326b4ea98b622e5d`)
- Set `release_state_backend: sqlite` in `rw-config.yaml`
- Removed root `semver-registry.yaml` from git
- `.gitignore`: track `!.adk/release-state.db` for RW Step 8 staging
- Repo hygiene: removed RW scratch artifacts (`.rw-step7-*`, `.rw-t14-release.sh`, kanban `.rw-step7-evidence-*.json`), dropped root ADR stub (FR-103 → ADR-012)

### Rollback

1. `release_state_backend: legacy` in `rw-config.yaml`
2. Restore root YAML from archive or `export_legacy.py`
3. Re-RW with new BUILD (no tag force-push per BR-097)

---

## References

- [T07 task doc](../../project-management/kanban/epics/epic-02/story-17-rw-semver-characterization-and-release-state-sqlite/T07-production-sqlite-semver-registry-cutover.md)
- [IPP-E02S17T07](../../implementation-cycles/IPP-E02S17T07-sqlite-semver-registry-cutover.md)
- [release-state-sqlite-mode.md](../../../packages/frameworks/workflow-mgt/docs/release-state-sqlite-mode.md)
