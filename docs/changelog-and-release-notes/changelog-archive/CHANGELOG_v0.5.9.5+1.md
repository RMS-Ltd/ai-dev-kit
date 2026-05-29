# Changelog v0.5.9.5+1

**Release Date:** 2026-03-30 15:52:14 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 5  
**Task doc:** [T05-docusaurus-ci-fr-069.md](../../project-management/kanban/epics/Epic-5/Story-009-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069.md)  
**FR:** [FR-069](../../project-management/kanban/fr-br/FR-069-docusaurus-ci-build-gate.md)

## Summary

Release **E5:S09:T05**: **FR-069** CI gate — production Docusaurus build in GitHub Actions for `portal/` + `docs/` changes.

## Changes

### CI

- **`.github/workflows/docusaurus-build.yml`** — Workflow name **Docusaurus site build**; job **`build`**; quoted **`"on":`** for YAML parsers; `pull_request` + `push` (`main` only) with paths `portal/**`, `docs/**`, workflow file; `defaults.run.working-directory: portal`; `actions/setup-node@v4` (Node 20, npm cache, `portal/package-lock.json`); `npm ci`; `npm run build`.

### Tests and docs

- **`tests/test_portal_fr069_ci.py`** — Contract tests S1–S7 vs workflow + README.
- **`portal/README.md`** — CI (FR-069) sentence linking to workflow.

### Kanban / FR

- **T05** complete; **FR-069** R/NF/AC1 and **AC3** (green run on default branch after this push) updated in task/FR docs; **AC2** optional.

## Verification

- `pytest tests/test_portal_fr069_ci.py`; `validate_branch_context.py --strict`, changelog + version validators (post-staging).
- **GitHub Actions:** confirm **Docusaurus site build** succeeds on `main` for this commit (FR-069 AC3).
