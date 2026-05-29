# Changelog v0.4.19.3+0

**Release Date:** 2026-05-29 17:00:00 UTC  
**Internal Version:** 0.4.19.3+0  
**Epic / Story / Task:** E4 | S19 | T03 (`RW -d`, `--art`, `--doc-policy-zero`)  
**SemVer (task_touch):** v0.4.820+0

## Summary

`RW -d E4:S19:T03 --art --doc-policy-zero` publishes **FR-087 Wave 4** documentation: active re-housing of misfiled `E6:S07` tasks, Story 007 In/Out of Scope charter, and investigation report §8 execution log. Functional delivery remains on **v0.4.19.3+2**.

## Changes

### Wave 4 — Re-housing and charter

- `E6:S07:T109` → **`E2:S16:T13`** (BR-059 UKW MoSCOW coverage); source task **SUPERSEDED**
- `E6:S07:T18` → **`E2:S01:T23`** (tool-agnostic workflow step tracking); source task **SUPERSEDED**
- **Story 007** — explicit In scope / Out of scope + freeze on new catch-all intake under `E6:S07`
- **T107** story checklist corrected (TODO / IDE whitelist; was mislabeled COMPLETE)
- **BR-059**, **fbuboard**, **kboard**, Story 016/001 checklists, **T73** queue table — rewired to canonical homes
- **Investigation report** §8 Wave 4 execution log updated

### Versioning

- **BUILD +0** per **BR-067** / `--doc-policy-zero` (docs-only on existing **E4:S19:T03** anchor)

## References

- Report: `docs/implementation-cycles/E4S19T03-e6s07-default-housing-investigation-report.md`
- Prior functional release: `CHANGELOG_v0.4.19.3+2.md`
- [BR-067](docs/project-management/kanban/fr-br/BR-067-rw-first-doc-only-release-defaults-to-build-plus-one-not-plus-zero.md)
