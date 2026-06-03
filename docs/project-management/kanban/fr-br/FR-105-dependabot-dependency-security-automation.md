---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-03T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: Dependabot and Dependency Security Automation

**Type:** Feature Request (FR)  
**ID:** FR-105  
**Submitted:** 2026-06-03  
**Submitted By:** User (via agent — dependency audit follow-up)  
**Priority:** HIGH (Must Have — MoSCOW **M**)  
**Status:** OPEN (kanban init **v0.8.3.6+1** — **E08:S03:T06**)  
**Assigned Task:** E08:S03:T06 — [`T06-dependabot-enablement-fr105.md`](../epics/Epic-8/Story-003-automation-scripts/T06-dependabot-enablement-fr105.md)

---

## Summary

Enable **GitHub Dependabot** (security updates + version updates) for **pip** (repo root / `setup.py` ecosystem) and **npm** (`portal/`), add **`.github/dependabot.yml`**, and document triage expectations for Docusaurus/React pins.

---

## Problem Statement

- Repo settings (2026-06-03): **`dependabot_security_updates`: disabled**; no **`.github/dependabot.yml`**.
- **0** open Dependabot alerts via API — reflects disabled automation, not verified absence of issues.
- Local **`npm audit`** in `portal/` reports **33** vulnerabilities (6 high, 27 moderate), largely transitive (`webpack-dev-server` → `sockjs`/`uuid`, `ws`).
- Python deps are **unpinned** (`requirements.txt`, `setup.py` lower bounds only); no lockfile.
- Audit context: [E07:S06:T08](../epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md).

---

## Scope (Atomic)

**In scope**

- Enable **Dependabot security updates** in GitHub repository settings (document steps for maintainer if agent cannot change org settings).
- Add [`.github/dependabot.yml`](../../../../.github/dependabot.yml) with:
  - **pip** — directory `/` (or documented alternative if monorepo layout requires)
  - **npm** — directory `/portal`
  - Weekly schedule (or team-agreed interval)
  - Sensible `open-pull-requests-limit` and grouping if needed
- Run initial **`npm audit fix`** (non-`--force` first) in `portal/`; verify **`npm run build`** (Docusaurus gate).
- Document in **`portal/README.md`** or contributor doc: how to handle Dependabot PRs, when to defer Docusaurus major bumps.
- Optional: add **`pip-audit`** or **`pip install -r requirements.txt && pip audit`** to future Tests workflow ([E08:S03:T04](../epics/Epic-8/Story-003-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md)) — note as follow-up, not blocking AC.

**Out of scope**

- Full Python lockfile (`requirements.lock` / Poetry) — optional follow-up FR.
- Resolving all 33 npm issues in one shot if `npm audit fix --force` breaks Docusaurus 3.9.2 / React 19 — document residual risk and open issues.
- Org-wide Dependabot policies outside this repo.

---

## Functional Requirements

- [ ] **FR-105:R01** – Dependabot config file committed and valid.
- [ ] **FR-105:R02** – Security updates enabled at repo level (verified in GitHub UI or API).
- [ ] **FR-105:R03** – At least one documented triage path for dependency PRs (merge, ignore with reason, or group).

---

## Non-Functional Requirements

- [ ] **FR-105:NF01** – Docusaurus production build remains green after automated/low-risk fixes.
- [ ] **FR-105:NF02** – PR noise bounded (limits/grouping documented).

---

## Acceptance Criteria

- [ ] **AC1:** `.github/dependabot.yml` exists; covers **pip** + **npm** (`portal`).
- [ ] **AC2:** Dependabot security updates **enabled** (API/UI confirmation recorded in task doc).
- [ ] **AC3:** Post-enablement: maintainer can see Dependabot PRs or security tab activity within one weekly cycle (or manual `dependabot version` trigger if used).
- [ ] **AC4:** `npm audit` re-run documented in task (before/after counts); breaking fixes not forced without build verification.
- [ ] **AC5:** FR-105 ↔ E08:S03:T06 bidirectional links.

---

## Dependencies / Ordering

- **FR-104** — independent; Tests CI may combine pip audit later.
- **FR-069** — Docusaurus build gate must stay green when applying npm fixes.
- **E08:S03:T04** — optional integration of `pip audit` in CI.

---

## Related

- [FR-069](FR-069-docusaurus-ci-build-gate.md) (portal build gate)
- [BR-058](BR-058-ci-test-workflow-missing-and-pytest-failures.md) (Tests workflow)
- [T08 audit](../epics/Epic-7/Story-006-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)
