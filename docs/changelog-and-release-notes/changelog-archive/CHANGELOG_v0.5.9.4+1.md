# Changelog v0.5.9.4+1

**Release Date:** 2026-03-30 15:27:28 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 4  
**Task doc:** [T04-docusaurus-navigation-fr-068.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T04-docusaurus-navigation-fr-068.md)  
**FR:** [FR-068](../../project-management/kanban/fr-br/FR-068-docusaurus-navigation-sidebar-and-landing.md)

## Summary

Release **E5:S09:T04**: portal **navigation** and **landing** per **FR-068** — `docsSidebar` categories, navbar wiring, homepage content, automated checks, and documented **build workaround** (`--no-minify`).

## Changes

### Portal

- **`portal/sidebars.js`** — `docsSidebar` with pillar/extension categories and autogen per FR-068.
- **`portal/docusaurus.config.js`** — `sidebarId: 'docsSidebar'`.
- **`portal/src/pages/index.js`** / **`HomepageFeatures`** — ADK-focused hero and links; no tutorial-first CTA.
- **`portal/README.md`** — FR-068 label → `docs/` mapping table; build note for `--no-minify`.
- **`portal/package.json`** — `build` script: `docusaurus build --no-minify` (workaround for Terser client minify error).

### Tests & docs

- **`tests/test_portal_fr068_navigation.py`** — navigation / sidebar / landing checks (S1–S5, S7 per task spec).
- **`docs/documentation/docusaurus-portal-index.md`** — copy aligned with FR-068 sidebar wording.

### Kanban / traceability

- Task **T04**, **Story 009**, **Epic 5**, board — version markers for **`v0.5.9.4+1`**.

## Verification

- `validate_branch_context.py --strict` (Step 8); changelog and version validators after staging.
- **S6** (strict production build): existing **`test_fr065_s9_portal_production_build`** with **`PORTAL_BUILD_STRICT=1`** per task spec.
