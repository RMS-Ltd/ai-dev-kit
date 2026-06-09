# Changelog v0.6.9.25+2

**Release Date:** 2026-06-09 09:11:54 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 25  
**SemVer:** v0.4.12+2

---

## Summary

**E06:S09:T25** — React to Starborn Legacy greenfield install diary ([UXR-025](docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)): triage matrix, orchestrator vendor-path + non-interactive fixes (F4/F5), install doc updates.

---

## Change implemented

- **`install_greenfield_path.py`** — `resolve_frameworks_base()`; forward `--non-interactive` and `--config` to RW; absolute paths under vendor when project has no `packages/frameworks/`
- **Tests** — `tests/workflow_mgt/test_install_greenfield_path.py`
- **Docs** — `INSTALL_IN_YOUR_PROJECT.md`, `greenfield-install/README.md` (tarball-first, lean RW partial, FR-081 scope note)
- **Analysis** — [starborn-legacy-install-triage-matrix.md](docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)
- **IPP** — [IPP-E06S09T25](docs/implementation-cycles/IPP-E06S09T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)
- **Greenfield sync** — `sync_greenfield_install.py`

---

## References

- [UXR-025](docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)
- [T25](docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)
- [Diary](docs/knowledge/analysis/projects/starborn-legacy-greenfield-install-diary.md)
