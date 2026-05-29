# Changelog v0.5.9.6+1

**Release Date:** 2026-03-30 16:11:41 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 6  
**Task doc:** [T06-docusaurus-deployment-fr-070.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070.md)  
**FR:** [FR-070](../../project-management/kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md)

## Summary

Release **E5:S09:T06**: automate Docusaurus publish to **`gh-pages`** for GitHub Pages project site `https://earlution.github.io/ai-dev-kit/`.

## Changes

- **`.github/workflows/docusaurus-deploy.yml`** — Build in `portal/` then push static output to `gh-pages`; `workflow_dispatch` + path-filtered `push` to `main`; `permissions: contents: write`.
- **`portal/README.md`** — Production hosting (FR-070): URL, Settings, triggers, token policy, rollback.
- **`README.md`** — Browsing docs link to published site.
- **`tests/test_portal_fr070_deployment.py`** — Contract tests S1–S7.

## Verification

- `pytest tests/test_portal_fr070_deployment.py`; RW validators after staging.
- **E2E:** Enable **Pages** on repo if needed; confirm **Docusaurus deploy to GitHub Pages** workflow succeeds on `main` after push.
