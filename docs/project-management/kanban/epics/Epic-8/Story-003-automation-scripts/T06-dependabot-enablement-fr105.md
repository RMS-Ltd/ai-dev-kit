---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 6: Dependabot and dependency security automation (FR-105)

**Task ID:** E08:S03:T06  
**Status:** TODO  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (UKW — Must Have / HIGH)  
**Code:** E08S03T06

**Upstream:** [FR-105 — Dependabot and dependency security automation](../../../fr-br/FR-105-dependabot-dependency-security-automation.md)  
**Related audit:** [E07:S06:T08](../../Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)

Publication Status: NOT_APPLICABLE

---

## Deliverable

Enable GitHub Dependabot for **pip** and **portal/npm**; commit `.github/dependabot.yml`; document triage; run safe `npm audit fix` and verify Docusaurus build.

## Acceptance criteria

- [ ] **AC1:** `.github/dependabot.yml` committed (pip + npm schedules).
- [ ] **AC2:** Dependabot security updates enabled on `RMS-Ltd/ai-dev-kit` (record evidence in task).
- [ ] **AC3:** `npm audit` before/after documented; `npm run build` green in `portal/` after applied fixes.
- [ ] **AC4:** Contributor note for handling Dependabot PRs (portal README or docs/guides).
- [ ] **AC5:** **FR-105** bidirectional links verified.

## Maintainer note

Repo settings change may require org admin in GitHub UI: **Settings → Code security → Dependabot**.

## Out of scope

- Python lockfile FR (optional follow-up)
- Full resolution of all transitive npm highs if `--force` breaks Docusaurus — document deferrals

## References

- [FR-105](../../../fr-br/FR-105-dependabot-dependency-security-automation.md)
- [FR-069](../../../fr-br/FR-069-docusaurus-ci-build-gate.md) (build gate)
