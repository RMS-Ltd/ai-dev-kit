# Changelog v0.6.9.25+3

**Release Date:** 2026-06-09 10:40:32 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 25  
**SemVer:** v0.4.11+3

---

## Summary

**E06:S09:T25** — Starborn Legacy greenfield install attempt 2 closure: triage **F9** (v1 packaged kanban catalog vs Kanban v2/v3), attempt-02 forensic artifacts, install SHA-256 verification docs.

---

## Change implemented

- **Triage F9** — [starborn-legacy-install-triage-matrix.md](docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md): `--mode fresh` installs v1 `migrate_structure` epic list (attempts 1 and 2); sign-off ≠ v3.2 catalog
- **Attempt 2 artifacts** — [adk-install-into-sbl/attempt-02/](adk-install-into-sbl/attempt-02/) diary, sign-off JSON, transcripts
- **T25 addendum** — post-closure attempt 2 + F9 follow-ons on task doc
- **Install docs** — `INSTALL_IN_YOUR_PROJECT.md`, `greenfield-install/README.md`: tarball `.sha256` verify flow; pin `v0.4.1063`; GHCR tag alignment
- **ADR-021** — example tag `v0.4.1063`
- **Greenfield sync** — `sync_greenfield_install.py` README template block
- **Cleanup** — remove stray root `greenfield-install-diary.md`

---

## References

- [UXR-025](docs/kanban/fr-br/UXR-025-starborn-legacy-greenfield-install-diary.md)
- [T25](docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T25-starborn-legacy-greenfield-install-diary-triage-uxr025.md)
- [Kanban v3.2 executive summary](docs/knowledge/analysis/kanban-v2/08-executive-summary.md)
