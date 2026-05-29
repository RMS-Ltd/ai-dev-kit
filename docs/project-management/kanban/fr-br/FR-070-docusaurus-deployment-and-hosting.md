---
lifecycle: proposed
ttl_days: null
created_at: 2026-03-30T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Docusaurus Deployment and Hosting

**Type:** Feature Request (FR)  
**ID:** FR-070  
**Submitted:** 2026-03-30  
**Submitted By:** User (via agent)  
**Priority:** MEDIUM  
**Status:** IMPLEMENTED (**live URL verified** — v0.5.9.9+2 / **E5:S09:T09**; canonical site **200**; see Follow-up)  
**Assigned Task:** E5:S09:T06 — [`T06-docusaurus-deployment-fr-070.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T06-docusaurus-deployment-fr-070.md); go-live closure **E5:S09:T09** — [`T09-github-pages-go-live-verification.md`](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T09-github-pages-go-live-verification.md)

---

## Summary

Select and implement **production hosting** for the Docusaurus site (e.g. **GitHub Pages**, Netlify, or Cloudflare Pages), including correct **`baseUrl` / `url`**, optional **custom domain**, and an automated **deploy workflow** (or documented manual step if automation is deferred with justification). Update **root `README.md`** with a “Documentation site” link to the live URL **when available**.

---

## Problem Statement

A green local build does not help adopters if no public URL exists. `baseUrl` for GitHub project pages (`/ai-dev-kit/`) differs from root hosting; misconfiguration causes broken assets and links.

---

## Scope (Atomic)

**In scope**

- Decision record (short section in `portal/README.md` or ADR): chosen host, `url`, `baseUrl`, branch/trigger for deploy.
- Implementation: e.g. `docusaurus deploy`, GitHub Actions `peaceiris/actions-gh-pages`, or provider-specific config committed to repo.
- Secrets/documentation placeholders for org policies (no secret values in git).

**Out of scope**

- Staging environment (unless zero-cost add-on to same FR).
- **FR-071** search provider setup.

---

## Functional Requirements

- [x] **FR-070:R01** – Public URL documented and reachable for the deployed scope.
- [x] **FR-070:R02** – `docusaurus.config.js` `url` and `baseUrl` match deployment path **exactly**.
- [x] **FR-070:R03** – Deploy process is **repeatable** (script or workflow); not only “works on one laptop.”
- [x] **FR-070:R04** – Root `README.md` links to the live site (or to “coming soon” with issue link—only if deploy is blocked; otherwise live link required).

---

## Non-Functional Requirements

- [x] **FR-070:NF01** – **Security:** Tokens via GitHub Secrets or provider OIDC—no PATs in source.
- [x] **FR-070:NF02** – **Rollback:** Document how to redeploy previous tag or commit.

---

## Acceptance Criteria

- [x] AC1: One canonical production URL for the ADK doc site.
- [x] AC2: Fresh deploy from default branch succeeds without manual FTP-style steps (unless explicitly accepted as interim with ticket reference). *(Confirm green **Docusaurus deploy to GitHub Pages** on `main` after release.)*
- [x] AC3: README discovery path updated.

---

## Dependencies / Ordering

- **FR-065**–**FR-067** (correct config + green build); **FR-069** strongly recommended before or with deploy to avoid broken releases.

## Follow-up work

- **E5:S09:T09** — **COMPLETE** (v0.5.9.9+2): [GitHub Pages go-live verification](../epics/Epic-5/Story-009-docusaurus-documentation-portal/T09-github-pages-go-live-verification.md) — **`main`** merged, Actions **23796236180** green, Pages legacy source **`gh-pages`/`/`**, canonical **200**, [portal README (repository)](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) go-live notes.

## Related FRs

- **FR-069** – CI build gate.
- **FR-071** – Search.

---

## References

- [Docusaurus deployment](https://docusaurus.io/docs/deployment)
- `portal/docusaurus.config.js`
