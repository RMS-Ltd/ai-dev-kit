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
**Last updated:** 2026-06-05 (v0.5.9.13+3 — CI verified on `main`)  
**Version:** v0.5.9.13+3  
**Code:** E05S09T13

✅ COMPLETE (v0.5.9.13+3)

**Wave 2 (2026-06-05):** Full build triage + BR-068 Strategy A link remediation; local + CI `npm run build` green; pytest T8–T11 green. **Main** Actions **26992999149** (build + deploy) after PR #26 merge.

**Upstream:** [BR-090 — Docusaurus 3.10 build fails: missing `@docusaurus/faster` and lockfile drift](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)

Publication Status: NOT_APPLICABLE

---

## Input

- [IPP-E05S09T13 — Docusaurus `@docusaurus/faster` + 3.10.1 alignment](../../../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md) (IPW planning package — **§8 Wave 2**)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [`portal/docusaurus.config.js`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/docusaurus.config.js) — `future.v4: true`
- [`portal/package.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package.json) / [`portal/package-lock.json`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/package-lock.json)
- [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)
- [docusaurus-corpus-triage-fr-067.md](../../../../maintenance/docusaurus-corpus-triage-fr-067.md) — Wave 2 manifest

---

## Deliverable

Restore green Docusaurus production build on CI after Dependabot Docusaurus 3.10 bump:

1. Add **`@docusaurus/faster`** to portal dependencies (compatible with 3.10.x). — **Wave 1 done**
2. Align **`portal/package.json`** Docusaurus package pins with **`package-lock.json`** (**3.10.1**). — **Wave 1 done**
3. **Wave 2:** Full build triage; BR-068 Strategy A link remediation; pytest T8–T11; verify **`npm ci && npm run build`** locally and in CI.

**Maintainer decision (BR-090):** Add `@docusaurus/faster` + align package.json — do **not** remove `future.v4` as the primary fix.

---

## Acceptance criteria

- [x] **`@docusaurus/faster`** present in `portal/package.json` and lockfile.
- [x] All `@docusaurus/*` portal deps pinned consistently at **3.10.1** (or current lockfile version).
- [x] **`Docusaurus site build`** workflow green on `main` — Actions **26992999149** (PR #26).
- [x] **`portal/README.md`** updated if install/build steps change.
- [x] **`npm run build`** exit 0 locally with strict link/anchor checks (Wave 2).
- [x] Pytest **T8–T11** green (`test_portal_br090_faster_alignment.py`).

---

## References

- [IPP-E05S09T13 — §8 Wave 2](../../../../implementation-cycles/IPP-E05S09T13-docusaurus-faster-package-alignment.md#8-wave-2--mdx-link-remediation--ci-verification-br-090-build-closure)
- [BR-090](../../../fr-br/BR-090-docusaurus-faster-missing-dependabot-310-lockfile-drift.md)
- [E05:S09:T05 — CI build gate (FR-069)](T05-docusaurus-ci-fr-069.md)
- [E05:S09:T11 — BR-068 monorepo links](T11-docusaurus-monorepo-markdown-link-resolution-br068.md)
- [BR-093](../../../fr-br/BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) — separate CI efficiency fix
