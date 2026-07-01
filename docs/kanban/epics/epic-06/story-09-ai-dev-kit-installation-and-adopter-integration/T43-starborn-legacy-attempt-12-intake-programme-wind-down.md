---
lifecycle: evergreen
ttl_days: null
created_at: 2026-07-01T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T43 — Starborn Legacy attempt 12 intake and programme wind-down

**Task ID:** E06:S09:T43  
**Status:** COMPLETE  
**Priority:** HIGH  
**Created:** 2026-07-01  
**Last updated:** 2026-07-01 (verification closure — UKW -c)  
**Version:** v0.6.9.43+1  
**Version Anchor:** v0.6.9.43+1  
**Code:** E06S09T43

**Parent programme:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) (attempts 1–11 closed) · [E06:S09:T42](T42-sbl-kanban-tsp-operator-overlay-freeze.md) (issue #3 TSP freeze)

**Intake:** [GitHub #88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88) · **Predecessor:** [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) (attempt 11)

**Related:** [FR-079](../../../fbu/FR-079-install-feedback-submission-path-and-governance.md) · [FR-142](../../../fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) · [UXR-029](../../../fbu/UXR-029-adk-install-path-experiment.md) · [SBL TSP #3](https://github.com/RMS-Ltd/starborn-legacy/issues/3)

**Evidence:** [attempt-12 index](../../../../../../adk-install-into-sbl/attempt-12/README.md) · [SUBMISSION (`final`)](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/SUBMISSION.md) · [signoff-report.json](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/signoff-report.json) · [SBL KMA-ATTEMPT-12](https://github.com/RMS-Ltd/starborn-legacy/blob/dev/docs/kanban/KMA-ATTEMPT-12.md)

---

## Summary

**Maintainer intake task** for Starborn Legacy **attempt 12** FR-079 package (`package_status: final`, adopter install sign-off **2026-07-01**). Accept install baseline acceptance, triage feedback **K-01** – **K-04** into kit delivery lanes, close the SBL install feedback loop, and **shift programme focus** to other adopter repositories per adopter request. KMA Step 4 domain synthesise remains **adopter-owned** (not blocking this intake).

---

## Input

- Adopter declaration: attempt 12 accepted as production workflow/kanban baseline — not perfect, **totally usable**
- [attempt-12 feedback package](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/SUBMISSION.md) — K-01 – K-04 (`final`)
- [T42](T42-sbl-kanban-tsp-operator-overlay-freeze.md) — issue #3 pass 3 overlay (**342** tasks) published for sign-off
- Maintainer mirror: `adk-install-into-sbl/attempt-12/`

---

## Scope

### In scope

- Record attempt 12 outcome in programme lineage (attempt log, triage matrix pointer)
- Accept FR-079 install sign-off; document programme wind-down on SBL install/KMA for maintainers
- Triage **K-01** – **K-04** — wire each to an implementing task or file FBU + child task where missing
- Close [GitHub #88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88) when intake AC met
- Elevate **FR-142** / external adopter corpus as primary install-validation lane (Phase 2)

### Out of scope

- SBL KMA Step 4 domain synthesise (adopter timeline)
- SBL Flutter product delivery
- Re-opening attempt 11 scope (guided KMA synthesise complete @ 93.99%)

---

## Attempt 12 outcome

| Gate | Result |
|------|--------|
| Install RC strict | **PASS** (post adopter recovery — 21 install issues) |
| KMA ingest + propose | **Complete** |
| TSP authority | **Issue #3** — 342 tasks |
| **Adopter install sign-off** | **Accepted** 2026-07-01 |
| KMA Step 4 synthesise | **Deferred** (adopter) |
| RW on SBL `dev` | Through `v0.9.609` |
| Ad-hoc KMA scripts | **0** |

### vs attempt 11 ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85))

| Metric | 11 | 12 |
|--------|----|----|
| ADK pin | v0.4.1171 | **v0.4.1237** |
| TSP tasks | 377 | **342** (issue #3 pass 3) |
| Branch lineage | In-place `dev` | Fresh `dev` from `pre-adk-install` |
| Sign-off scope | Install + KMA synthesise complete | **Install acceptance only** |

---

## Feedback triage (K-01 – K-04)

| ID | Severity | Topic | Evidence | Routing |
|----|----------|-------|----------|---------|
| **K-01** | major | E02 RW-only vs 13 workflow-registry stories | [FB-ADK-K01](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md) | [FR-143](../../../fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md) / [T44](T44-tsp-workflow-story-parity-fr143.md) |
| **K-02** | medium | UKW bulk-stamped board `Last modified:` | [FB-ADK-K02](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K02-board-timestamp-loss.md) | [FR-144](../../../fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md) / [T45](T45-board-timestamp-carry-forward-fr144.md) · [FR-130](../../../fbu/FR-130-kanban-stamp-immutability-adr029-framework-defaults.md) |
| **K-03** | medium | Task-touch SemVer `+BUILD` on public vernum | [FB-ADK-K03](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K03-semver-build-suffix-redundant.md) | [BR-111](../../../fbu/BR-111-semver-public-surface-build-metadata-leak.md) / [E03:S02:T16](../../epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) |
| **K-04** | high | Actions CI parity leaks Docusaurus / monorepo defaults | [FB-ADK-K04](../../../../../../adk-install-into-sbl/attempt-12/feedback-package/FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md) | [FR-141](../../../fbu/FR-141-adopter-documentation-profile-greenfield-default.md) / [E05:S08:T08](../../epic-05/story-08-knowledge-base/T08-adopter-documentation-profile-greenfield-default-fr141.md) · [E02:S16:T05](../../epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) (FR-112) |

**Adopter workarounds on SBL `dev`:** `E02-WORKFLOW-STORY-MAP.md`, `restore_board_timestamps.py`, `ADR-SBL-001`, `rw-config.yaml` `actions_ci_parity` (Flutter).

---

## Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | Kanban task **E06:S09:T43** (this doc) + story checklist + `kboard.md` row | ✅ |
| 2 | Maintainer index updated — attempt 12 `final`, T43 routing | ✅ |
| 3 | K-01 – K-04 each wired to implementing task or FBU filed | ✅ |
| 4 | Programme wind-down note — SBL install maintenance-only; **FR-142** Phase 2 primary | ✅ |
| 5 | Close [GitHub #88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88) with task link | ✅ |
| 6 | RW release documenting intake acceptance | ✅ |

---

## Acceptance criteria

- [x] **AC1:** Attempt 12 recorded in programme lineage; [attempt-12 README](../../../../../../adk-install-into-sbl/attempt-12/README.md) references T43 (not draft routing).
- [x] **AC2:** FR-079 attempt 12 install sign-off **accepted** in maintainer docs; adopter request to shift focus documented.
- [x] **AC3:** **K-01** – **K-04** each have implementing task or FBU + task filed (no orphan FB items).
- [x] **AC4:** [GitHub #88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88) closed with link to T43 and child routing table.
- [x] **AC5:** Maintainer programme next lane explicit — [E06:S09:T41](T41-external-adopter-archetype-corpus-fr142.md) / external repos (not SBL install iterations).
- [x] **AC6:** RW release (local-complete) anchors E06:S09:T43 when intake closes.

---

## Programme wind-down (maintainer)

| Lane | Action |
|------|--------|
| **SBL install** | **Maintenance-only** — no further install attempt waves unless adopter re-opens |
| **SBL KMA Step 4** | Adopter-owned on SBL timeline |
| **Primary validation** | [FR-142](T41-external-adopter-archetype-corpus-fr142.md) external archetype corpus + fynd.deals / Confidentia Arm A recon |
| **Kit backlog** | [T44](T44-tsp-workflow-story-parity-fr143.md) (K-01), [T45](T45-board-timestamp-carry-forward-fr144.md) (K-02), [E03:S02:T16](../../epic-03/story-02-versioning-cookbook-and-examples/T16-semver-public-surface-build-leak-br111.md) (K-03), [E02:S16:T05](../../epic-02/story-16-perpetual-ongoing-workflow-operations/T05-github-actions-ci-health-perpetual.md) (K-04) |

---

## RW trigger

```
RW E06:S09:T43 --art
```

Use `--art` when releasing from `dev` or when `version.py` does not already anchor E06:S09:T43.

---

## Task checklist

- [x] Create T43 + story/kboard wiring
- [x] Accept sign-off; update attempt-12 maintainer index
- [x] Route K-01 – K-04 (FR-143/T44, FR-144/T45, BR-111, FR-141)
- [x] Close GitHub #88
- [x] RW release @ E06:S09:T43 @ **v0.6.9.43+1**

---

## Verification closure

**Verification closure (2026-07-01):** Attempt 12 intake AC1–AC6 met; [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88) closed; K-01–K-04 routed; child fixes T44/T45 verified. Programme wind-down to FR-142 confirmed. V-band row archived @ `UKW -c`.
