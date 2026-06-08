---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T00:25:00Z
expires_at: null
housekeeping_policy: keep
---

# ADR-017: Docusaurus CI build/deploy topology (single workflow, artifact handoff)

### Version 0.0.1

| Version | Change |
| ------- | ------ |
| 0.0.1 | Initial decision — Option 2 from BR-093; merged build + deploy jobs. |

**Status:** Accepted  
**Date:** 2026-06-05  
**Deciders:** User (Ruari Mears)  
**Implementing task:** [E05:S09:T14](../../kanban/epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md)  
**Planning package:** [IPP-E5S9T14](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md)  
**Related:** [BR-093](../../kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md), [FR-069](../../kanban/fr-br/FR-069-docusaurus-ci-build-gate.md), [FR-070](../../kanban/fr-br/FR-070-docusaurus-deployment-and-hosting.md)

---

## Context

[BR-093](../../kanban/fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) — two independent workflows each run `npm ci` + `npm run build` on every qualifying `main` push, doubling CI minutes and failure noise.

Prior layout:

| Workflow | File | Build |
| -------- | ---- | ----- |
| **Docusaurus site build** | `.github/workflows/docusaurus-build.yml` | `npm ci` + `npm run build` |
| **Docusaurus deploy to GitHub Pages** | `.github/workflows/docusaurus-deploy.yml` | `npm ci` + `npm run build` + publish |

---

## Decision

Adopt **Option 2** from BR-093 — extend [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml) with:

1. **`build` job** — unchanged FR-069 contract; adds `actions/upload-artifact@v4` for `portal/build`.
2. **`deploy` job** — `needs: build`; `if:` for `main` push or `workflow_dispatch`; downloads artifact; `peaceiris/actions-gh-pages@v4` to `gh-pages`; **no** `npm ci` or `npm run build`.
3. **Delete** `.github/workflows/docusaurus-deploy.yml` to remove duplicate `push` trigger.

**Supersedes:** FR-070 executable spec **S7** (“publish step after build in the same job”) — freshness is preserved because deploy consumes the artifact from the **same workflow run**, not a prior commit.

---

## Consequences

- One production build per `main` commit (portal/docs paths).
- Deploy automatically skipped when build fails (`needs:`).
- PR gate unchanged (deploy job `if` excludes pull requests).
- `test_portal_fr070_deployment.py` S3/S7 assertions updated for cross-job topology.
- Workflow display name remains **Docusaurus site build** (branch protection / Dependabot references).

---

## Alternatives rejected

- **Option 1 (reusable workflow + workflow_run):** Extra workflow file and `workflow_run` latency; more moving parts.
- **Option 3 (workflow_run gate only):** Keeps two workflow files; harder to reason about dispatch and permissions.
