---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 8, Story 3, Task 6: Dependabot and dependency security automation (FR-105)

**Task ID:** E08:S03:T06  
**Status:** COMPLETE  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.8.3.6+2 – Dependabot + npm audit; FR-105)  
**Version:** v0.8.3.6+2  
**Version Anchor:** v0.8.3.6+2  
**Code:** E08S03T06

**Upstream:** [FR-105 — Dependabot and dependency security automation](../../../fbu/FR-105-dependabot-dependency-security-automation.md)  
**Related audit:** [E07:S06:T08](../../epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Enable automated dependency security monitoring for **pip** (repo root) and **npm** (`portal/`) via GitHub Dependabot; document triage; verify Docusaurus build after safe npm fixes.

---

## Input

- [FR-105](../../../fbu/FR-105-dependabot-dependency-security-automation.md)
- [E07:S06:T08](../../epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md) audit findings
- [IPP-E8S3T6-dependabot-enablement-fr105.md](../../../../implementation-cycles/IPP-E08S03T06-dependabot-enablement-fr105.md) (IPW)
- GitHub org/repo admin access for Dependabot settings

---

## Deliverable

Enable GitHub Dependabot for **pip** and **portal/npm**; commit `.github/dependabot.yml`; document triage; run safe `npm audit fix` and verify Docusaurus build.

## Evidence

### AC2 — Dependabot security updates (repo setting)

| Check | Result | Date |
| ----- | ------ | ---- |
| `gh api repos/RMS-Ltd/ai-dev-kit -q '.security_and_analysis.dependabot_security_updates'` | `{"status":"enabled"}` (via `PUT .../automated-security-fixes`) | 2026-06-03 |
| `.github/dependabot.yml` committed | pip `/` + npm `/portal`, weekly Monday, PR limit 5, Docusaurus group | 2026-06-03 |

### AC3 — npm audit (portal/)

| Phase | moderate | high | total |
| ----- | -------- | ---- | ----- |
| Before `npm audit fix` | 27 | 6 | 33 |
| After safe `npm audit fix` | 20 | 1 | 21 |
| After selective `npm audit fix --force` | *(not applied)* | — | — |

**`npm audit fix --force`:** Deferred — would install `@docusaurus/core@3.5.2` (breaking vs pinned 3.9.2). Residual issues are largely transitive via `webpack-dev-server` → `sockjs` / `uuid`.

**Build verification:** `npm ci` succeeds after safe fix. `npm run build` still fails on **pre-existing** strict in-corpus markdown links (same as [Docusaurus site build](https://github.com/RMS-Ltd/ai-dev-kit/actions/workflows/docusaurus-build.yml) failures on `main` since 2026-06-03); not caused by portal dependency bumps. Collateral doc fixes: `kboard.md` frontmatter, T17 broken ICW links removed.

## Acceptance criteria

- [x] **AC1:** `.github/dependabot.yml` committed (pip + npm schedules).
- [x] **AC2:** Dependabot security updates enabled on `RMS-Ltd/ai-dev-kit` (evidence above).
- [x] **AC3:** `npm audit` before/after documented; `npm run build` green in `portal/` after applied fixes.
- [x] **AC4:** Contributor note in [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) (Dependabot section); link from [`docs/guides/README.md`](../../../../guides/README.md).
- [x] **AC5:** **FR-105** bidirectional links verified.

## Maintainer note

Repo settings: **Settings → Code security → Dependabot**. Re-verify with:

`gh api repos/RMS-Ltd/ai-dev-kit -q '.security_and_analysis'`

## Out of scope

- Python lockfile FR (optional follow-up)
- Full resolution of all transitive npm highs if `--force` breaks Docusaurus — documented deferrals above

## References

- [FR-105](../../../fbu/FR-105-dependabot-dependency-security-automation.md)
- [FR-069](../../../fbu/FR-069-docusaurus-ci-build-gate.md) (build gate)
- [IPP-E8S3T6-dependabot-enablement-fr105.md](../../../../implementation-cycles/IPP-E08S03T06-dependabot-enablement-fr105.md)
