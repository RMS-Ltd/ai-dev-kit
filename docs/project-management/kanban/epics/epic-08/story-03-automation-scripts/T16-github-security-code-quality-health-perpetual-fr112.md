---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T16 — GitHub Security & Code Quality Health (Perpetual)

**Task ID:** E08:S03:T16  
**Status:** IN PROGRESS  
**Priority:** HIGH  
**Estimated Effort:** Medium (ongoing)  
**Created:** 2026-06-05  
**Last updated:** 2026-06-05 (RW E08:S03:T15 — FR-112 companion lane filed)  
**Code:** E08S03T16  
**Task Type:** Perpetual Maintenance

**Perpetual Override Rationale:** GitHub Security/Code Quality perpetual lane under Epic 8 Story 3 per FR-112; complements E02:S16 workflow perpetual lanes without conflating CI/security dashboard ownership.

**Upstream:** [FR-112 — Perpetual GitHub CI and security health lanes](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)

Publication Status: NOT_APPLICABLE

---

## Scope

Standing perpetual lane for **GitHub Advanced Security** hygiene:

- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning) (CodeQL security alerts)
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality) (maintainability, reliability, standard findings)
- [AI findings](https://github.com/RMS-Ltd/ai-dev-kit/security/quality/ai-findings) (dismiss / verify / remediate)

**Owns (representative, not exhaustive):**

- Dashboard re-scans and open-count snapshots after merges to `main`
- Routine remediation waves (autofix-safe hygiene, small targeted fixes)
- Alert dismiss / false-positive documentation with evidence
- Score regression triage (Fair → Needs Improvement, etc.)
- Post-backlog ongoing maintenance after finite burn-down tasks complete

**Source of truth:** Security tabs above — record SHA, open counts, and score at start of each hygiene RW.

---

## What this task does NOT own

- [GitHub Actions](https://github.com/RMS-Ltd/ai-dev-kit/actions) workflow failures (red CI builds) → **E08:S03:T15**
- **Active finite backlogs** while still IN PROGRESS:
  - **E08:S03:T12** (BR-099 maintainability)
  - **E08:S03:T13** (BR-100 reliability)
  - **E08:S03:T14** (BR-101 AI suggestions)
- Dependabot version/security PR policy → **E08:S03:T06**
- Novel **HIGH** severity findings that need focused IPP — file dedicated BR + task (BR-094–098 pattern), then return routine hygiene here

---

## Handoff from backlog tasks (T12–T14)

When **T12**, **T13**, and **T14** reach **COMPLETE** / terminal verification:

- **T16** becomes the **default RW anchor** for new Code Quality waves and re-scans.
- Backlog BRs (BR-099/100/101) may move to **intake-completed**; residual open findings roll into T16 perpetual scope.
- Until backlogs close, coordinate sequencing: backlog tasks own wave plans; T16 documents perpetual contract only.

| Backlog task | BR | Perpetual handoff trigger |
| ------------ | -- | ------------------------- |
| **T12** | BR-099 | Maintainability backlog COMPLETE + dashboard re-scan |
| **T13** | BR-100 | Reliability backlog COMPLETE + score acceptable or accepted residual |
| **T14** | BR-101 | AI findings verified/dismissed per BR-101 AC |

---

## RW attribution

Use **`RW E08:S03:T16`** for recurring security/Code Quality hygiene (BUILD increments on perpetual task). Prefer one wave theme per RW.

---

## Acceptance criteria

- [x] **AC1:** Task doc exists with `Task Type: Perpetual Maintenance` and security dashboard URLs as SoT.
- [x] **AC2:** Scope boundary with **E08:S03:T15** and **T12–T14** handoff table documented.
- [x] **AC3:** FR-112 bidirectional link; Story 003 checklist and `kboard.md` O-band wired.
- [ ] **AC4:** First attributed RW records baseline open counts on `main` (code scanning + code quality).

---

## References

- [FR-112](../../../fr-br/FR-112-perpetual-github-ci-and-security-health-lanes.md)
- [E08:S03:T15 — GitHub Actions CI health (Perpetual)](T15-github-actions-ci-health-perpetual-fr112.md)
- [E08:S03:T12 — BR-099 maintainability backlog](T12-code-quality-maintainability-backlog-br099.md)
- [E08:S03:T13 — BR-100 reliability backlog](T13-code-quality-reliability-backlog-br100.md)
- [E08:S03:T14 — BR-101 AI suggestions backlog](T14-code-quality-ai-suggestions-backlog-br101.md)
- [Code scanning](https://github.com/RMS-Ltd/ai-dev-kit/security/code-scanning)
- [Code Quality](https://github.com/RMS-Ltd/ai-dev-kit/security/quality)
