# Starborn Legacy — ADK install attempt 12 (maintainer index)

**Session:** `20260630-attempt-12`  
**ADK pin:** `v0.4.1237`  
**Arm:** **B** — greenfield shell + **guided KMA** (issue #3 TSP)  
**FR-079 status:** **final** — adopter install sign-off 2026-07-01; maintainer intake via GitHub Issue

**SBL evidence:** `dev` @ `a9c7c179` · programme [KMA-ATTEMPT-12](https://github.com/RMS-Ltd/starborn-legacy/blob/dev/docs/kanban/KMA-ATTEMPT-12.md) · **Intake [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)**

---

## Outcome

| Result | Detail |
|--------|--------|
| Greenfield install RC strict | **PASS** (post adopter recovery — 21 install issues) |
| KMA ingest + proposal | Complete |
| Canonical TSP | **Issue #3** — 342 tasks, 100% titled |
| **Adopter install sign-off** | **Accepted** 2026-07-01 |
| KMA Step 4 synthesise | **Deferred** — adopter timeline |
| Feedback items | **K-01** – **K-04** (`final`) |
| Ad-hoc KMA scripts | **0** |

---

## vs attempt 11 ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85))

| Metric | 11 | 12 |
|--------|----|----|
| TSP | 377-task in-repo tree | **Issue #3** — 342 tasks |
| Synthesise | 93.99% score | Pending sign-off |
| Lineage | In-place `dev` | Fresh `dev` from `pre-adk-install` |
| New feedback | 5 FBs (final) | **4 FBs (final)** K-01–K-04 |

---

## Canonical feedback package (FR-079 mirror)

| Artifact | Path |
| -------- | ---- |
| Cover | [feedback-package/SUBMISSION.md](feedback-package/SUBMISSION.md) |
| Payload | [feedback-package/feedback-payload.json](feedback-package/feedback-payload.json) |
| Install RC | [feedback-package/install-rc-report-final.json](feedback-package/install-rc-report-final.json) |
| K-01 E02 / workflow-registry | [feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md](feedback-package/FB-ADK-K01-issue3-e02-workflow-story-collapse.md) |
| K-02 board timestamps | [feedback-package/FB-ADK-K02-board-timestamp-loss.md](feedback-package/FB-ADK-K02-board-timestamp-loss.md) |
| K-03 SemVer `+BUILD` | [feedback-package/FB-ADK-K03-semver-build-suffix-redundant.md](feedback-package/FB-ADK-K03-semver-build-suffix-redundant.md) |
| K-04 CI parity / Docusaurus | [feedback-package/FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md](feedback-package/FB-ADK-K04-actions-ci-parity-docusaurus-defaults.md) |
| Thin pointer | [docs/adk-feedback/attempt-12/README.md](../../docs/adk-feedback/attempt-12/README.md) |

---

## Maintainer intake

**Task:** [E06:S09:T43](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) · **GitHub:** [#88](https://github.com/RMS-Ltd/ai-dev-kit/issues/88)

| FB item | Routing |
| ------- | ------- |
| K-01 E02 workflow collapse | [FR-143](../../docs/kanban/fbu/FR-143-tsp-workflow-story-parity-guided-kma-preflight.md) / [T44](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T44-tsp-workflow-story-parity-fr143.md) |
| K-02 timestamp loss | [FR-144](../../docs/kanban/fbu/FR-144-board-timestamp-carry-forward-ukw-kma.md) / [T45](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T45-board-timestamp-carry-forward-fr144.md) |
| K-03 SemVer `+BUILD` | [BR-111](../../docs/kanban/fbu/BR-111-semver-public-surface-build-metadata-leak.md) / E03:S02:T16 |
| K-04 CI parity / Docusaurus | [FR-141](../../docs/kanban/fbu/FR-141-adopter-documentation-profile-greenfield-default.md) / E02:S16:T05 |

---

## References

- [attempt-11 README](../attempt-11/README.md) — guided KMA baseline (final)
- [starborn-legacy#3](https://github.com/RMS-Ltd/starborn-legacy/issues/3) — canonical TSP sign-off
