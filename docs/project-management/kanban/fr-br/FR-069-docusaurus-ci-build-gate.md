---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus CI Build Gate

**Type:** Feature Request (FR)  
**ID:** FR-069  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED (AC1–AC3 for merge delivery; AC2 optional manual)  
**Assigned Task:** E5:S09:T05 — [`T05-docusaurus-ci-fr-069.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T05-docusaurus-ci-fr-069.md)

---

## Summary

Add a **GitHub Actions workflow** that runs on relevant triggers (e.g. `pull_request` and `push` affecting `portal/**` or `docs/**`), executes **`npm ci`** and **`npm run build`** in `portal/`, and **fails the job** if the Docusaurus production build fails.

---

## Problem Statement

Without CI, regressions in `docs/` or `portal/` break the site silently until someone runs a local build. Adoption requires a **repeatable gate** aligned with how the team merges work.

---

## Scope (Atomic)

**In scope**

- New workflow under `.github/workflows/` (single file) with:
  - Node version **≥20** (match `portal/package.json` `engines`).
  - Working directory or `defaults.run.working-directory: portal`.
  - Cache for npm **optional** but recommended.
- Path filters if the repo prefers limiting runs (document choice in workflow comments).

**Out of scope**

- Deploy to GitHub Pages or other hosts (FR-070).
- Publishing npm packages.
- Link checking beyond what `docusaurus build` already enforces.

---

## Functional Requirements

- [x] **FR-069:R01** – Workflow runs on PRs that touch at least `portal/` or `docs/` (or broader “always run” policy—documented).
- [x] **FR-069:R02** – Failed build blocks merge per team policy (branch protection assumed out of band).
- [x] **FR-069:R03** – Workflow name and job name are clear in GitHub UI (e.g. “Docusaurus build”).

---

## Non-Functional Requirements

- [x] **FR-069:NF01** – **Fast feedback:** Prefer caching; target reasonable runtime for typical PRs.
- [x] **FR-069:NF02** – **Docs:** One sentence in `portal/README.md` pointing to the workflow file.

---

## Acceptance Criteria

- [x] AC1: Workflow file exists and is valid GitHub Actions YAML.
- [ ] AC2: Simulated failure (e.g. intentional break on a test branch) fails the job; fix restores green. *(Optional manual check.)*
- [x] AC3: Green run on `main` (or default branch) after FR-067 build is green. *(Satisfied when **Docusaurus site build** passes on `main` for release `v0.5.9.5+1`.)*

---

## Dependencies / Ordering

- **FR-067** should be complete so default branch gets a **green** first run (or workflow starts as `workflow_dispatch` only until FR-067 lands—document if so).

## Related FRs

- **FR-070** – Deployment (may reuse same build artifact later).

---

## References

- `portal/package.json` (`engines`, scripts)
- Existing `.github/workflows/*.yml` for style consistency
