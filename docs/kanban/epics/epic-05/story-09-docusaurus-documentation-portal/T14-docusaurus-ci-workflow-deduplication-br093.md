---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 14: Docusaurus CI workflow deduplication (**BR-093**)

**Task ID:** E05:S09:T14  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.5.9.14+3 — Wave 2 FBU closure + BUILD collision remediation; BR-093 **FIXED**)  
**Version:** v0.5.9.14+3  
**Code:** E05S09T14

✅ COMPLETE (v0.5.9.14+3)

**Upstream:** [BR-093 — Docusaurus CI duplicate build + deploy job waste](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E5S9T14 — Docusaurus CI workflow deduplication](../../../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md) (IPW planning package)
- [ADR-017 — Docusaurus CI build/deploy topology](../../../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)
- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)
- [FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md) · [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md) — underlying build failures (orthogonal)
- [Wave 2 evidence](../../../../maintenance/docusaurus-ci-dedup-verification-evidence-E05S09T14-wave2.md)

---

## Deliverable

Eliminate duplicate **`npm ci` + `npm run build`** on `main` pushes:

- Deploy consumes successful build output (artifact or `workflow_run` / `needs:` pattern).
- Deploy skipped when build fails.
- PR build gate unchanged.

---

## Acceptance criteria

- [x] At most **one** production build per commit on `main` (portal/docs paths).
- [x] **`Docusaurus deploy`** does not run when build fails (`deploy` job `needs: build`).
- [x] PR **`Docusaurus site build`** still runs on path-filtered pull requests (deploy job `if` excludes PR).
- [x] Workflow topology documented in YAML comments and `portal/README.md` (ADR-017).

---

## References

- [IPP-E5S9T14 — Docusaurus CI workflow deduplication](../../../../implementation-cycles/IPP-E05S09T14-docusaurus-ci-workflow-deduplication.md)
- [ADR-017 — Docusaurus CI build/deploy topology](../../../../architecture/standards-and-adrs/ADR-017-docusaurus-ci-build-deploy-topology.md)
- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md)
- [BR-052](../../../fr-br/BR-052-github-actions-workflow-optimization.md)
- [E05:S09:T05 — CI build gate](T05-docusaurus-ci-fr-069.md)
- [E05:S09:T06 — Deployment](./T06-docusaurus-deployment-fr-070.md)
