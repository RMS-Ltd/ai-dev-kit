---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-29T16:28:21Z
expires_at: null
housekeeping_policy: keep
---

# Changelog: v0.2.16.10+4

**Version:** v0.2.16.10+4  
**Release Date:** 2026-05-29 16:28:21 UTC  
**Epic:** 2 | **Story:** 16 | **Task:** 10 (perpetual)  
**SemVer:** v0.4.818+4

---

## Summary

Project root hygiene: removed no-value artifacts (~61 MB screen recordings, `.DS_Store`, install logs, egg-info, snapshots) and low-value clutter (relocated or deleted one-off docs/scripts; tightened `.gitignore`).

---

## Change implemented

### Removed (no value)

- `.DS_Store`, `tmp-kanban-install.log`, `ai_dev_kit.egg-info/`
- Screen recordings (BR-038/BR-039 evidence; references updated)
- `.kanban-snapshots/` (65+ FR-097 runtime copies removed from git)
- `logs/` install traces

### Removed / relocated (low value)

- Deleted: `COMMIT_MESSAGE.txt`, `PACKAGE_DOCUMENTATION_UPDATES.md`, `missing_commits_analysis.md`, Apple SDK investigation scripts, `commit_work.py`, `emergency_commit_recovery.py`
- Relocated: `kanban_naming_inventory.*` → `scripts/cleanup/output/`; ADR-openclaw → `docs/architecture/standards-and-adrs/`; `GITHUB_RELEASE_v0.4.14.4+1.md` → changelog archive; `test_rw_performance.py` → `tests/`

### `.gitignore`

- `*.egg-info/`, `.pytest_cache/`, `htmlcov/`, `tmp-*.log`, `.kanban-snapshots/`, `logs/`

---

## References

- [E2:S16:T10](../../project-management/kanban/epics/Epic-2/Story-016-perpetual-ongoing-workflow-operations/T10-ad-hoc-repository-infrastructure-maintenance-perpetual.md)
- [UXR-013](../../project-management/kanban/fr-br/UXR-013-project-root-hygiene-and-legacy-docs-rationalization.md)
