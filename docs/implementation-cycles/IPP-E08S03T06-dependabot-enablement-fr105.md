---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E08:S03:T06 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T06-dependabot-enablement-fr105.md`](../kanban/epics/epic-08/story-03-automation-scripts/T06-dependabot-enablement-fr105.md) **(E08:S03:T06)**  
**Planning for:** [FR-105](../kanban/fr-br/FR-105-dependabot-dependency-security-automation.md)  
**Status:** Approved (implementation authorized)

> **IPW:** Produced for E08:S03:T06. npm remediation: safe `npm audit fix` first, then selective `--force` only if `npm run build` stays green.

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RF1 | Commit valid `.github/dependabot.yml` (pip `/`, npm `/portal`) | FR-105:R01, T06 AC1 |
| RF2 | Dependabot security updates enabled; evidence in task doc | FR-105:R02, T06 AC2 |
| RF3 | Contributor triage for Dependabot PRs documented | FR-105:R03, T06 AC4 |
| RF4 | `npm audit` before/after documented; build green after fixes | T06 AC3, FR-105:AC4 |
| RF5 | FR-105 ↔ T06 bidirectional links on delivery | T06 AC5 |

### 1.2 Non-functional requirements (ascertained)

| ID | Requirement | Source |
| -- | ----------- | ------ |
| RNF1 | Docusaurus production build remains green ([`docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)) | FR-105:NF01, FR-069 |
| RNF2 | PR noise bounded (weekly schedule, limits, Docusaurus group) | FR-105:NF02 |

### 1.3 Invariants and boundaries

- **In scope:** `.github/dependabot.yml`, portal npm audit/fix, `portal/README.md` triage, policy test, FR-105 closure.
- **Out of scope:** Python lockfile; org-wide policies; full pytest CI (BR-058); forcing all npm highs if Docusaurus breaks.

---

## 2. Specification

### 2.1 Goal

Automated, bounded dependency monitoring for Python and portal npm, with maintainer triage documentation and an initial npm remediation pass that respects the Docusaurus build gate.

### 2.2 Specification mapping

RF1 → dependabot.yml; RF2 → GitHub UI + task Evidence §; RF3 → portal README; RF4 → audit tables + build verification; RF5 → kanban FR closure.

### 2.3 Constraints

- Changelog: “Change implemented” until user verifies (RW rules).
- FR-097: do not batch-rewrite board row `Last modified` stamps on hygiene.
- UI enablement may require repo admin; document handoff if API cannot enable.

### 2.4 Status transition intent

- **Current:** TODO → **IN PROGRESS** at implementation Step 1.
- **COMPLETE:** AC1–AC5 evidenced; forensic marker on RW.
- **Owner:** Implementation execution.

### 2.5 ADR necessity decision

| ID | Trigger | Y/N | Evidence |
| -- | ------- | --- | -------- |
| T1 | Alternatives | Y | Schedules, grouping, force policy |
| T2 | Reversibility | Y | Revert yml + lockfile |
| T3 | Blast radius | Y | lockfile + ongoing PRs |
| T4 | Precedent | Y | First repo Dependabot policy |
| T5 | Trade-off | Y | Security vs Docusaurus pins |
| T6 | Governance | N | No RW/IPW gate change |
| T7 | Supersedes | N | No prior ADR |

| ID | Exemption | Pass? | Evidence |
| -- | --------- | ----- | -------- |
| E1 | Single locus | Pass | portal README + dependabot.yml |
| E2 | No new options | Pass | Plan locked in §2.1 |
| E3 | Reversible | Pass | Revert PR |
| E4 | Spec elsewhere | Pass | portal README triage section |
| E5 | Documented NONE | Pass | This IPP |

**Outcome:** `EXEMPT` — governing doc: [`portal/README.md`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/portal/README.md) (Dependency updates section).

---

## 3. Test design

| ID | Behavior / layer | Expected check | Covers |
| -- | ---------------- | -------------- | ------ |
| T1 | Config | `.github/dependabot.yml` valid YAML; pip + npm entries | RF1 |
| T2 | Portal build | `npm ci && npm run build` in `portal/` after each fix phase | RNF1 |
| T3 | Audit evidence | Before/after counts in task doc | RF4 |
| T4 | pytest | `tests/test_dependabot_config.py` | RF1 |
| T5 | Settings | Task Evidence § (gh api or UI note) | RF2 |
| T6 | CI alignment | Same install/build path as `docusaurus-build.yml` | RNF1 |

---

## 4. Implementation plan

| Step | Action | Deliverable |
| ---- | ------ | ----------- |
| **1** | **[MANDATORY]** `E08:S03:T06` `TODO → IN PROGRESS` | Task doc |
| 2 | Enable Dependabot security updates (UI/API); record evidence | AC2 |
| 3 | Add `.github/dependabot.yml` | AC1 |
| 4 | npm audit → fix → build → selective `--force` with build gate | AC3 |
| 5 | `portal/README.md` triage section; optional `docs/guides/README.md` link | AC4 |
| 6 | `tests/test_dependabot_config.py`; run T1–T6 | Verification |
| 7 | FR-105 IMPLEMENTED; fbuboard IPP link | AC5 |
| 8 | `RW E08:S03:T06 --art` | Release v0.8.3.6+2 |
| **9** | **[MANDATORY]** Reconcile `COMPLETE` + version marker | Task doc |

### 4.1 Files to create or modify

- CREATE: `.github/dependabot.yml`, IPP (this file), `tests/test_dependabot_config.py`
- UPDATE: `portal/package-lock.json` (audit fix), `portal/README.md`, `docs/guides/README.md`, task T06, FR-105, kanban boards on RW

### 4.2 Dependency order

UI evidence ∥ dependabot.yml → npm audit/build → docs/tests → FR → RW.

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
| ------ | ---- | ------ |
| D1 | `.github/dependabot.yml` | CREATE |
| D2 | `portal/README.md` | UPDATE |
| D3 | `docs/guides/README.md` | UPDATE |
| D4 | Task T06 | UPDATE |
| D5 | FR-105 | UPDATE |
| D6 | This IPP | CREATE |
| D7 | `portal/package-lock.json` | UPDATE (controlled) |
| D8 | `tests/test_dependabot_config.py` | CREATE |

### 5.3 Gaps / NONE

| Topic | Resolution |
| ----- | ---------- |
| New ADR | NONE — portal README is governing doc |
| pip-audit in CI | Follow-up via E08:S03:T04 (note only) |

---

## 6. Documentation housing

| Doc ID | Canonical path | Publication | Lifecycle |
| ------ | -------------- | ----------- | --------- |
| D2 | `portal/README.md` | NOT_APPLICABLE (not in docs plugin) | evergreen |
| D6 | `docs/implementation-cycles/IPP-E8S3T6-*.md` | PUBLISHED | evergreen |

---

## 7. Success / verification criteria

- [x] AC1–AC5 satisfied with evidence
- [x] T1–T6 recorded
- [x] §5 deliverables implemented
- [x] IPP ↔ task bidirectional links
- [x] RW `E08:S03:T06` complete

---

## References

- [FR-105](../kanban/fr-br/FR-105-dependabot-dependency-security-automation.md)
- [FR-069](../kanban/fr-br/FR-069-docusaurus-ci-build-gate.md)
- [E07:S06:T08](../kanban/epics/epic-07/story-06-post-windsurf-project-review/T08-dependency-and-tooling-audit.md)
- [ipw-adr-necessity-checklist.md](../architecture/standards-and-adrs/ipw-adr-necessity-checklist.md)
- [`.github/workflows/docusaurus-build.yml`](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/.github/workflows/docusaurus-build.yml)
