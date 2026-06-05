---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 13: Docusaurus `@docusaurus/faster` and package.json 3.10.1 alignment (**BR-090**)

**Task ID:** E05:S09:T13  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (v0.5.9.13+1 — RW E05:S09:T13)  
**Version:** v0.5.9.13+1  
**Code:** E05S09T13

✅ COMPLETE (v0.5.9.13+1)

**Upstream:** [BR-090 — Docusaurus 3.10 build fails: missing `@docusaurus/faster` and lockfile drift](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E05S09T13 — Docusaurus `@docusaurus/faster` + 3.10.1 alignment](../../../../../../docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md) (IPW planning package)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [`portal/docusaurus.config.js`](../../../../../../portal/docusaurus.config.js) — `future.v4: true`
- [`portal/package.json`](../../../../../../portal/package.json) / [`portal/package-lock.json`](../../../../../../portal/package-lock.json)
- [`.github/workflows/docusaurus-build.yml`](../../../../../../.github/workflows/docusaurus-build.yml)

---

## Deliverable

Restore green Docusaurus production build on CI after Dependabot Docusaurus 3.10 bump:

1. Add **`@docusaurus/faster`** to portal dependencies (compatible with 3.10.x).
2. Align **`portal/package.json`** Docusaurus package pins with **`package-lock.json`** (**3.10.1**).
3. Verify **`npm ci && npm run build`** locally and in CI.

**Maintainer decision (BR-090):** Add `@docusaurus/faster` + align package.json — do **not** remove `future.v4` as the primary fix.

---

## Acceptance criteria

- [x] **`@docusaurus/faster`** present in `portal/package.json` and lockfile.
- [x] All `@docusaurus/*` portal deps pinned consistently at **3.10.1** (or current lockfile version).
- [ ] **`Docusaurus site build`** workflow green on `main` for portal/docs changes — pending post-merge Actions verification.
- [x] **`portal/README.md`** updated if install/build steps change.

---

## References

- [IPP-E05S09T13 — Docusaurus `@docusaurus/faster` + 3.10.1 alignment](../../../../../../docs/implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [E05:S09:T05 — CI build gate (FR-069)](./T05-ci-build-gate-fr069.md)
- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) — separate CI efficiency fix
