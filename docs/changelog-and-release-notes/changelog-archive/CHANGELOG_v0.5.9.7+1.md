# Changelog v0.5.9.7+1

**Release Date:** 2026-03-30 16:59:05 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 7  
**Task doc:** [T07-docusaurus-search-fr-071.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T07-docusaurus-search-fr-071.md)  
**FR:** [FR-071](../../project-management/kanban/fr-br/FR-071-docusaurus-site-search.md)

## Summary

Release **E5:S09:T07**: **FR-071** — offline **site search** for the Docusaurus portal via `@easyops-cn/docusaurus-search-local` (index at build time; no third-party search API).

## Changes

- **`portal/docusaurus.config.js`** — `themes` entry for local search (`hashed`, `language: ['en']`); `createRequire` for ESM.
- **`portal/package.json`** / lockfile — dependency `@easyops-cn/docusaurus-search-local`.
- **`portal/README.md`** — Site search (FR-071): provider, privacy, build-time note, smoke-test queries.
- **`tests/test_portal_fr071_search.py`** — Contract tests S1–S6.
- **Kanban / FR-071** — Status and forensic markers aligned with this release.

## Verification

- `pytest tests/test_portal_fr071_search.py tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py`.
- **E2E:** After deploy to GitHub Pages, run smoke queries on the canonical doc URL (see `portal/README.md`).
