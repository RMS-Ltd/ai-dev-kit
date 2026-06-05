---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-093: Docusaurus CI runs duplicate build + deploy jobs — doubles wasted minutes on same failure

**Bug ID:** BR-093  
**Priority:** MEDIUM  
**Severity:** MEDIUM — Every qualifying push to **`main`** triggers **two** independent workflows that each run **`npm ci`** + **`npm run build`**; when build is broken, both fail (~91 deploy + ~97 build failures since May 2026).  
**Status:** OPEN — fix attempted (**v0.5.9.14+2**); pending post-merge Actions verification on `main`  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.5.9.14+2 — workflow merge per ADR-017)  
**Version:** v0.5.9.14+2  
**Implementing Task:** [E05:S09:T14](../epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md) ✅ COMPLETE  
**Planning:** [IPP-E05S09T14](../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md) · [ADR-017](../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)  
**Related:** [BR-052](./BR-052-github-actions-workflow-optimization.md) (general GHA optimization) · [BR-090](./BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) (underlying build failure — fix separately first) · [FR-069](./FR-069-docusaurus-ci-build-gate.md) · [FR-070](./FR-070-docusaurus-deployment-and-hosting.md)

---

## Summary

**`.github/workflows/docusaurus-build.yml`** and **`.github/workflows/docusaurus-deploy.yml`** use the same path filters on `main` and each performs a full **`npm ci`** + **`npm run build`**. On build failure (e.g. [BR-090](./BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)), GitHub Actions burns **two jobs** and **~2× wall time** for the same error — a major contributor to **~303 wasted minutes** at **~84% failure rate**.

---

## Problem Description

### Observed behavior

On push to **`main`** touching `portal/**` or `docs/**`:

1. **`Docusaurus site build`** — checkout → `npm ci` → `npm run build` → **fail**
2. **`Docusaurus deploy to GitHub Pages`** — checkout → `npm ci` → `npm run build` → deploy step never reached → **fail**

Both workflows triggered by the same commit (e.g. `Merge branch 'dev' into main`, 2026-06-04).

### Root cause

- Independent workflows with overlapping triggers and **duplicated build steps**.
- No `workflow_run` dependency, reusable workflow artifact, or `needs:` gate tying deploy to a successful build job.
- Deploy workflow intentionally builds in-job (FR-070 / S7 — avoid stale publish) but duplicates work already done by the build gate.

### Impact

- **~2× CI minutes** per failed portal/docs push to `main`.
- Duplicate failure notifications and noisy Actions metrics.
- Even after [BR-090](./BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) is fixed, structural duplication wastes minutes on every green run too.

---

## Expected behavior

- **One** production build per commit on `main` (or deploy consumes build artifact from build workflow).
- Deploy runs **only** when build succeeds.
- PR **`pull_request`** path still runs build gate without deploy (unchanged intent of FR-069 vs FR-070).

---

## Proposed fix options

1. **Reusable workflow** — `docusaurus-build.yml` produces `portal/build` artifact; `docusaurus-deploy.yml` triggered via `workflow_run` after successful build on `main`, downloads artifact, deploys only.
2. **Single workflow, two jobs** — `build` job + `deploy` job with `needs: build` on `main` pushes; PRs run `build` only.
3. **workflow_run gate** — deploy workflow `on: workflow_run` of successful **`Docusaurus site build`** on `main` (minimal YAML churn).

Maintainer preference: optimize for **fail-fast** (one build) and **FR-070** stale-publish guard.

---

## Acceptance criteria

- [ ] Push to **`main`** (portal/docs paths) runs **at most one** `npm run build` before deploy.
- [ ] Deploy **does not run** when build fails.
- [ ] PR **`Docusaurus site build`** gate unchanged (still blocks merge on build failure).
- [ ] Document workflow topology in `portal/README.md` or `.github/workflows/` comment block.

---

## Steps to reproduce

1. Push to **`main`** a change under `portal/` or `docs/`.
2. Open GitHub Actions — observe **two** workflows start for the same SHA.
3. When build is broken, both fail after independent `npm ci` + `npm run build`.

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-05  
**Assigned to:** Epic 5, Story 9, Task 14 — [T14](../epics/epic-05/story-09-docusaurus-documentation-portal/T14-docusaurus-ci-workflow-deduplication-br093.md)
