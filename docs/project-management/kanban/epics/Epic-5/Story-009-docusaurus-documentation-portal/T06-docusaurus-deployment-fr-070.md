---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-30T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 9, Task 06: Docusaurus deployment and hosting (FR-070)

**Task ID:** E5:S09:T06  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-03-30  
**Last updated:** 2026-03-30 (v0.5.9.6+1 — FR-070 GitHub Pages deploy workflow + docs)  
**Code:** E5S09T06

**Feature Request:** [FR-070 – Deployment and hosting](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)

---

## Summary

Implement **FR-070**: GitHub Pages hosting aligned with `url` / `baseUrl`, automated deploy via Actions, root README link, rollback/secrets documentation.

---

## Input

- [FR-070](../../../fr-br/FR-070-docusaurus-deployment-and-hosting.md)
- **E5:S09:T03**–**T05** outcomes

---

## Deliverable

- Hosting decision in `portal/README.md` (Production hosting section)
- [`.github/workflows/docusaurus-deploy.yml`](https://github.com/earlution/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml)
- Live URL in root [`README.md`](https://github.com/earlution/ai-dev-kit/blob/main/README.md)
- Secrets via `GITHUB_TOKEN` only (no tokens in source)

---

## Acceptance Criteria

- Per FR-070 ACs; **AC2** E2E: green **Docusaurus deploy to GitHub Pages** on `main` after release; **AC1** URL reachable once Pages is enabled.

---

## Specification (executable — FR-070)

| ID | Source | Statement |
|----|--------|------------|
| **S1** | R01 / AC1 | Canonical URL `https://earlution.github.io/ai-dev-kit/` documented in [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md). |
| **S2** | R02 | [`portal/docusaurus.config.js`](https://github.com/earlution/ai-dev-kit/blob/main/portal/docusaurus.config.js) `url` + `baseUrl` match GitHub Pages project site. |
| **S3** | R03 / AC2 | [`.github/workflows/docusaurus-deploy.yml`](https://github.com/earlution/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml): `npm ci`, `npm run build`, publish `portal/build` to `gh-pages`. |
| **S4** | R04 / AC3 | Root [`README.md`](https://github.com/earlution/ai-dev-kit/blob/main/README.md) links to live site. |
| **S5** | NF01 | Workflow uses `${{ secrets.GITHUB_TOKEN }}` only; README names permissions—no PAT in git. |
| **S6** | NF02 | **Rollback** subsection in `portal/README.md`. |
| **S7** | Integration | Build steps run before `peaceiris/actions-gh-pages` in the same job. |

**Tests:** [`tests/test_portal_fr070_deployment.py`](https://github.com/earlution/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py)

---

## Version Anchor

**Forensic marker:** `✅ COMPLETE (v0.5.9.6+1)` — **RW E5:S09:T06**.

---

## Evidence

- [`.github/workflows/docusaurus-deploy.yml`](https://github.com/earlution/ai-dev-kit/blob/main/.github/workflows/docusaurus-deploy.yml)
- [`portal/README.md`](https://github.com/earlution/ai-dev-kit/blob/main/portal/README.md) — hosting, secrets, rollback
- [`tests/test_portal_fr070_deployment.py`](https://github.com/earlution/ai-dev-kit/blob/main/tests/test_portal_fr070_deployment.py)

---

## Dependencies

- **E5:S09:T03**–**T05** strongly recommended (green build + CI).
