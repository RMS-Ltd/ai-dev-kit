# Starborn Legacy — ADK attempt 12 (guided KMA / issue #3 TSP)

**Session:** `20260630-attempt-12`  
**SBL repo:** [RMS-Ltd/starborn_legacy](https://github.com/RMS-Ltd/starborn_legacy)  
**TSP authority:** [starborn-legacy#3](https://github.com/RMS-Ltd/starborn-legacy/issues/3) (pass 3 · **342 tasks**)  
**ADK pin:** `v0.4.1237`  
**Arm:** **B** — greenfield shell + guided KMA  
**Package status:** **`final`** · **Adopter sign-off:** 2026-07-01  
**Last sync:** 2026-07-01

---

## Outcomes

| Gate | Result |
|------|--------|
| Greenfield install RC strict | ✅ PASS (after adopter fixes — 21 install issues) |
| KMA ingest + proposal | ✅ Complete |
| TSP authority | ✅ Issue #3 adopted |
| **Adopter install sign-off** | ✅ **Accepted** — production baseline; kit may shift focus |
| KMA Step 4 synthesise | ⏸ Deferred — adopter timeline (not blocking install acceptance) |
| RW on `dev` | ✅ Through `v0.1.1.2+5` / `v0.9.609` |
| Ad-hoc KMA scripts | **0** |

---

## Primary feedback (K-01 – K-04)

| ID | Severity | Topic | Evidence |
|----|----------|-------|----------|
| **K-01** | major | Issue #3 E02 RW-only vs 13 workflow-registry entries | [FB-ADK-K01-issue3-e02-workflow-story-collapse.md](FB-ADK-K01-issue3-e02-workflow-story-collapse.md) |
| **K-02** | medium | UKW bulk-stamped board `Last modified:` dates | [FB-ADK-K02-board-timestamp-loss.md](FB-ADK-K02-board-timestamp-loss.md) |
| **K-03** | medium | Task-touch SemVer `+BUILD` on public vernum | [FB-ADK-K03-semver-build-suffix-redundant.md](FB-ADK-K03-semver-build-suffix-redundant.md) |
| **K-04** | high | Actions CI parity defaults leak Docusaurus / monorepo checks | [FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md](FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md) |

**Payload:** [feedback-payload.json](feedback-payload.json)  
**Install RC:** [install-rc-report-final.json](install-rc-report-final.json)  
**Sign-off:** [signoff-report.json](signoff-report.json)  
**SBL programme:** [KMA-ATTEMPT-12.md](https://github.com/RMS-Ltd/starborn-legacy/blob/dev/docs/kanban/KMA-ATTEMPT-12.md)

---

## Adopter sign-off (2026-07-01)

Attempt 12 is **accepted** as the starborn_legacy ADK install baseline. Known kit gaps (K-01–K-04) are documented with adopter workarounds. Install is **not perfect but totally usable**.

**Request to maintainers:** Close the SBL install feedback loop; **shift programme focus to other adopter repositories**. SBL will continue KMA domain synthesise and game delivery on its own timeline.

---

## vs attempt 11 ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85))

| Metric | 11 | 12 |
|--------|----|----|
| ADK pin | v0.4.1171 | **v0.4.1237** |
| TSP tasks | 377 | **342** (issue #3 pass 3) |
| Branch lineage | In-place `dev` | Fresh `dev` from `pre-adk-install` |
| KMA synthesise @ sign-off | Complete (93.99%) | **Deferred** (install-only acceptance) |
