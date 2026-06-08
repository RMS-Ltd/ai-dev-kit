---
lifecycle: proposed
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# FR-112: Perpetual GitHub CI and security health lanes

**Type:** Feature Request (FR)  
**ID:** FR-112  
**Submitted:** 2026-06-05  
**Submitted By:** User (via agent — CI/security ownership gap)  
**Priority:** HIGH  
**Status:** IN PROGRESS (T16 Wave 3b @ **v0.8.3.16+5** — **11** standard-finding remediation shipped; operator dashboard re-verify pending)  
**Implementing Tasks:**
- **E08:S03:T15** — [GitHub Actions CI health (Perpetual)](../epics/epic-08/story-03-automation-scripts/T15-github-actions-ci-health-perpetual-fr112.md)
- **E08:S03:T16** — [GitHub Security & Code Quality health (Perpetual)](../epics/epic-08/story-03-automation-scripts/T16-github-security-code-quality-health-perpetual-fr112.md)

---

## Summary

Establish **two perpetual maintenance lanes** under Epic 8 Story 3 so recurring [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) failures and ongoing [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) / [code quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) hygiene have deterministic RW attribution after finite backlog tasks **E08:S03:T12–T14** (BR-099/100/101) complete.

---

## Problem Statement

- **Discrete BR pattern** (BR-058, BR-094–098) and **finite backlog tasks** (T12–T14) address point-in-time CI and Code Quality burn-down but leave no standing home for **ongoing** red builds, new alerts, or dashboard regressions.
- **E02:S16:T10** (repo infrastructure) is too broad and lives outside Epic 8’s automation/security delivery semantics.
- Without perpetual lanes, operators must invent new tasks or mis-attribute hygiene RWs.

---

## Requirements

### Functional

- [ ] **FR-112:F1** — Perpetual task **E08:S03:T15** owns [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow health (Wave 2 MDX fix @ v0.8.3.15+3; pending Actions verify).
- [x] **FR-112:F2** — Perpetual task **E08:S03:T16** owns [code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) and [code quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) ongoing hygiene (re-scans, routine waves, dismiss/verify). Wave 0 baseline @ v0.8.3.16+1.
- [ ] **FR-112:F3** — Both tasks carry `Task Type: Perpetual Maintenance` and explicit scope boundaries (including handoff from T12–T14).
- [x] **FR-112:F4** — Story 003 checklist and `kboard.md` **Ongoing (O)** band wired bidirectionally.

### Non-functional

- [x] **FR-112:NF1** — Scope split is unambiguous: CI lane does not own CodeQL/Code Quality dashboards; security lane does not own Actions workflow failures.
- [ ] **FR-112:NF2** — Novel **HIGH** severity CodeQL findings may still spawn dedicated BR + task; perpetual lane remains default for routine hygiene.

---

## Acceptance Criteria

- [x] **AC1:** Task docs **T15** and **T16** exist with perpetual markers and dashboard URLs as SoT.
- [x] **AC2:** Story 003 checklist lists both tasks; FR links to both implementing tasks.
- [x] **AC3:** `kboard.md` O-band includes both perpetual rows with `—No IPP—` until optional IPW.
- [x] **AC4:** T12–T14 task docs reference T15/T16 handoff for post-backlog ownership.

---

## Out of scope

- Completing BR-099/100/101 backlog waves (remain on T12–T14).
- Dependabot policy (FR-105 / E08:S03:T06).
- UKW/kanban/docs perpetual lanes (E02:S16).

---

## Related

- [E08:S03:T04 — CI test workflow (BR-058)](../epics/epic-08/story-03-automation-scripts/T04-ci-test-workflow-pytest-remediation-br058.md) — discrete CI fix (COMPLETE)
- [E08:S03:T12 — Maintainability backlog (BR-099)](../epics/epic-08/story-03-automation-scripts/T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T13 — Reliability backlog (BR-100)](../epics/epic-08/story-03-automation-scripts/T13-code-quality-reliability-backlog-br100.md)
- [E08:S03:T14 — AI suggestions backlog (BR-101)](../epics/epic-08/story-03-automation-scripts/T14-code-quality-ai-suggestions-backlog-br101.md)
- [FR-088 — Dedicated story for perpetual ongoing tasks](FR-088-dedicated-story-for-perpetual-ongoing-tasks.md) — workflow-domain perpetual home (E02:S16); this FR covers automation/security domain
