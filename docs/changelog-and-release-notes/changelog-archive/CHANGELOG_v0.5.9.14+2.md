---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:23:30Z
expires_at: null
housekeeping_policy: archive
---

# Changelog v0.5.9.14+2

**Release Date:** 2026-06-05 00:23:30 UTC  
**Epic:** 5 | **Story:** 9 | **Task:** 14  
**SemVer:** v0.4.893+2

## Summary

E05:S09:T14 — **BR-093:** Change implemented — merged Docusaurus build and deploy into a single workflow with artifact handoff (ADR-017); deleted duplicate `docusaurus-deploy.yml`. Post-merge Actions verification pending.

## Change implemented

- **[ADR-017](../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)** — single workflow, `build` + `deploy` jobs, artifact contract.
- **`.github/workflows/docusaurus-build.yml`** — `upload-artifact` on build; `deploy` job with `needs:`, `workflow_dispatch`, `peaceiris/actions-gh-pages`.
- **Deleted** `.github/workflows/docusaurus-deploy.yml` — removes duplicate `main` push build.
- **`portal/README.md`** — CI / production hosting topology updated.
- **Pytest:** `tests/test_portal_br093_ci_deduplication.py` (new); `tests/test_portal_fr070_deployment.py` updated for cross-job deploy (ADR-017 supersedes FR-070 S7 same-job).

## Verification

- `pytest tests/test_portal_fr069_ci.py tests/test_portal_fr070_deployment.py tests/test_portal_br093_ci_deduplication.py` — 20 passed locally.
- Post-merge **Actions** smoke (one npm build on `main`; deploy skipped on build failure) — pending.

## Related

- [IPP-E05S09T14](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md)
- [BR-093](../../project-management/kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
