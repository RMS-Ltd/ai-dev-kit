---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-090: Docusaurus 3.10 build fails — missing `@docusaurus/faster` and package.json / lockfile drift

**Bug ID:** BR-090  
**Priority:** HIGH  
**Severity:** HIGH — **`Docusaurus site build`** and **`Docusaurus deploy to GitHub Pages`** fail on every qualifying push to `main`; ~97+ failed build jobs since May 2026.  
**Status:** IN PROGRESS — Wave 2 fix attempted **v0.5.9.13+2** (local `npm run build` green; pytest T8–T11 green); **post-merge Actions verification pending** on `main`
**Created:** 2026-06-05
**Last updated:** 2026-06-05 (RW E05:S09:T13 Wave 2)
**Version:** v0.5.9.13+3  
**Implementing Task:** [E05:S09:T13](../epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md)  
**Related:** [FR-069](FR-069-docusaurus-ci-build-gate.md) · [FR-070](FR-070-docusaurus-deployment-and-hosting.md) · [BR-068](BR-068-docusaurus-monorepo-markdown-links-break-strict-production-build.md) (prior build class; distinct from this regression)

---

## Summary

Dependabot merged Docusaurus **3.10.1** on `main` (`portal/package-lock.json`), while `portal/package.json` on `dev` still pins **3.9.2**. With `future.v4: true` in `portal/docusaurus.config.js`, Docusaurus 3.10 requires **`@docusaurus/faster`**, which is not installed — CI **`npm run build`** exits immediately with `ERR_MODULE_NOT_FOUND`.

---

## Problem Description

### Observed behavior (GitHub Actions, `main`, 2026-06-04)

Workflow **`Docusaurus site build`** fails at **Production build**:

```
To enable Docusaurus Faster options, your site must add the @docusaurus/faster package
Cannot find package '@docusaurus/faster' imported from .../node_modules/@docusaurus/bundler/lib/importFaster.js
```

Representative run: merge `dev` → `main` (`Merge branch 'dev' into main`).

### Root cause

| Factor | Detail |
|--------|--------|
| Config | `portal/docusaurus.config.js` sets `future: { v4: true }` |
| Lockfile (`main`) | `@docusaurus/core` **3.10.1** (Dependabot) |
| `package.json` (`dev`) | Still pins **3.9.2** — drift vs lockfile on `main` |
| Missing dep | `@docusaurus/faster` not in `portal/package.json` dependencies |

### Impact

- **`Docusaurus site build`** — chronic failure (~97 runs since May 2026).
- **`Docusaurus deploy to GitHub Pages`** — same build step fails first (~91 runs).
- GitHub Actions metrics: **~84% job failure rate**, **~303 wasted minutes** (maintainer report, 2026-06-05).
- Docs site cannot be republished from `main` until resolved.

---

## Expected behavior

- `cd portal && npm ci && npm run build` succeeds on CI and locally after dependency alignment.
- `portal/package.json`, `portal/package-lock.json`, and Docusaurus config are consistent across branches.
- **`Docusaurus site build`** and **`Docusaurus deploy`** workflows pass on `main` for portal/docs changes.

---

## Proposed fix (maintainer decision)

**Preferred approach:** Add **`@docusaurus/faster`** as a portal dependency and **align `package.json` with the 3.10.1 lockfile** on `main` (pin `@docusaurus/core`, `@docusaurus/preset-classic`, and type packages to **3.10.1**). Run `npm ci` and verify green build.

**Alternative (not preferred):** Remove `future.v4: true` until the faster path is intentionally adopted.

---

## Acceptance criteria

- [x] **`@docusaurus/faster`** added to `portal/package.json` (version compatible with Docusaurus 3.10.x) — Wave 1 **v0.5.9.13+1**.
- [x] **`portal/package.json`** Docusaurus packages aligned with **`portal/package-lock.json`** (3.10.1) — Wave 1.
- [x] **`cd portal && npm ci && npm run build`** exits **0** locally — Wave 2 **v0.5.9.13+2** (BR-068 Strategy A link remediation).
- [ ] **`docusaurus-build.yml`** green on **`main`** (build + deploy) — pending post-merge verification.
- [x] Contributor note in `portal/README.md` if faster / v4 future flag has new install requirements — Wave 1.

---

## Steps to reproduce

1. Check out `main` (or branch with Dependabot Docusaurus 3.10 lockfile).
2. `cd portal && npm ci && npm run build`.
3. Observe immediate failure: missing `@docusaurus/faster`.

---

## Related work

- [E05:S09:T05](../epics/epic-05/story-09-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069.md) — original CI build gate (**COMPLETE**).
- [E05:S09:T06](../epics/epic-05/story-09-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070.md) — deploy workflow (**COMPLETE**).
- [BR-093](BR-093-docusaurus-ci-duplicate-build-deploy-job-waste.md) — duplicate CI job waste (separate fix set).

---

## Intake decision

**Intake status:** ACCEPTED  
**Intake date:** 2026-06-05  
**Assigned to:** Epic 5, Story 9, Task 13 — [T13](../epics/epic-05/story-09-docusaurus-documentation-portal/T13-docusaurus-faster-package-alignment-br090.md)
