# CHANGELOG_v0.2.16.5+6

**Release Date:** 2026-06-05 10:37:00 UTC

## Release Summary

`RW E02:S16:T05 --art` publishes Wave 2 markdown link-depth hygiene: **36** documentation files corrected for relative path depth (kanban task docs, implementation-cycle IPPs, ADR-020, FR/BR surfaces). No workflow or script behavior changes.

## Internal and SemVer

- Internal version: `0.2.16.5+6`
- SemVer (`task_touch`): `0.4.956+6`

## Included Changes

### Markdown link hygiene (path-only)

- Kanban task docs under E01, E02 (S01, S11, S13, S14), E04, E05
- Implementation-cycle IPPs: `IPP-E02S13T03`, `IPP-E02S13T04`, `IPP-E02S14T01`, `IPP-E04S11T07`
- ADR-020 related-links slug correction
- FR/BR: `BR-052`, `FR-044`

### Kanban reconciliation

- `kboard.md` metadata and T05 perpetual row
- Story 016 and T05 task doc progress / version anchors

## Verification

- `pytest tests/test_portal_br068_monorepo_links.py` — 2 passed (BR-068 monorepo link guard)
- `validate_branch_context.py --strict --requested E02:S16:T05 --art`
- `validate_version_bump.py --strict --requested E02:S16:T05 --art`
