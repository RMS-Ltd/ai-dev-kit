---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 14: Docusaurus CI workflow deduplication (**BR-093**)

**Task ID:** E05:S09:T14  
**Status:** TODO  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.5.9.14+0 — Kanban documentation setup)  
**Version:** v0.5.9.14+0  
**Code:** E05S09T14

**Upstream:** [BR-093 — Docusaurus CI duplicate build + deploy job waste](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [`.github/workflows/docusaurus-build.yml`](../../../../../../.github/workflows/docusaurus-build.yml)
- [`.github/workflows/docusaurus-deploy.yml`](../../../../../../.github/workflows/docusaurus-deploy.yml)
- [FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md) · [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) — fix build first; this task optimizes structure

---

## Deliverable

Eliminate duplicate **`npm ci` + `npm run build`** on `main` pushes:

- Deploy consumes successful build output (artifact or `workflow_run` / `needs:` pattern).
- Deploy skipped when build fails.
- PR build gate unchanged.

---

## Acceptance criteria

- [ ] At most **one** production build per commit on `main` (portal/docs paths).
- [ ] **`Docusaurus deploy`** does not run when build fails.
- [ ] PR **`Docusaurus site build`** still runs on path-filtered pull requests.
- [ ] Workflow topology documented in YAML comments or `portal/README.md`.

---

## References

- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [BR-052](../../../fr-br/BR-052-github-actions-workflow-optimization.md)
- [E05:S09:T05 — CI build gate](./T05-ci-build-gate-fr069.md)
- [E05:S09:T06 — Deployment](./T06-deployment-hosting-fr070.md)
