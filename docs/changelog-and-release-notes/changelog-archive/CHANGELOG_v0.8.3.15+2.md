# Changelog v0.8.3.15+2

**Release Date:** 2026-06-05 16:57:56 UTC  
**Epic:** 8 | **Story:** 3 | **Task:** 15 | **Build:** 2  
**SemVer:** v0.4.991+2  
**Summary:** T15 CI triage — ADK error-code doc sync, Docusaurus anchor, greenfield-install mirror

---

## Release scope

E08:S03:T15 — **Change implemented:** Perpetual Actions CI hygiene pass addressing three red workflows on `main` (Tests, Docusaurus site build, Greenfield install). SemVer **v0.4.991+2**.

---

## Changes

### CI fixes (attempted — pending Actions verification on merge)

- **Tests** — Sync troubleshooting guide ADK error-code appendix with `generate_install_error_docs.py` markers and per-code anchors (`test_install_error_docs_sync`).
- **Docusaurus site build** — Add explicit `{#install-error-codes-adk}` heading anchor for cross-page links.
- **Greenfield install** — Run `sync_greenfield_install.py` to clear `greenfield-install/packages/frameworks` drift (40 changed files).

### Generator

- `generate_install_error_docs.py` — H2 anchor `{#install-error-codes-adk}` emitted in `render_markdown()` for stable portal links.

---

## Notes

- **`--art` adoption:** Release anchor `E08:S03:T15` BUILD+2 (`art_tagged_follow_on` from `v0.8.3.15+1`).
- **Verification:** Operator should confirm [Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) green on `dev`/`main` after push.

---

## References

- [E08:S03:T15](../../project-management/kanban/epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- [FR-112](../../project-management/kanban/fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
