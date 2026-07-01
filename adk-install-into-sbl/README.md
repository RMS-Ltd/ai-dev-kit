# Starborn Legacy — ADK install attempts (maintainer index)

**Program task:** [E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)  
**Triage matrix:** [starborn-legacy-install-triage-matrix.md](../docs/knowledge/analysis/projects/starborn-legacy-install-triage-matrix.md)

---

## Artifact ownership ([FR-079](../docs/kanban/fbu/FR-079-install-feedback-submission-path-and-governance.md))

**Maintainer mirror on ADK** — feedback packages and kanban reference packs for SBL install attempts are mirrored under this tree. SBL `dev` reverts to `pre-adk-install` ([#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85)); **do not** link `github.com/RMS-Ltd/starborn-legacy` paths for attempt evidence.

| Attempt | ADK canonical root |
|---------|-------------------|
| 03–06 | [attempt-{NN}/feedback-package/](attempt-03/README.md) — attempts 03–05 were SBL-local gitignored logs; maintainer synopses where full package unavailable |
| 09–11 | [attempt-{NN}/feedback-package/](attempt-09/README.md) — full git mirrors recovered pre-revert |
| Kanban TSP | [kanban-reference/](kanban-reference/TARGET-EST-TREE.md) — TARGET-EST-TREE, KMA-METHODS, SCORING-RUBRIC |

Each attempt folder typically contains:

- `feedback-package/` — `SUBMISSION.md`, `feedback-payload.json`, triage addendum
- `README.md` — outcome summary + relative links

**This tree** holds **maintainer indexes + mirrored packages** per [ADR-026](../docs/architecture/standards-and-adrs/ADR-026-git-internal-maintainer-kb-fr121.md).

---

## Maintainer indexes

| Attempt | Index | ADK pin |
|---------|-------|---------|
| 02 | [attempt-02/greenfield-install-diary.md](attempt-02/greenfield-install-diary.md) (copy in knowledge analysis) | `main` @ `97ff2834` |
| 03 | [attempt-03/README.md](attempt-03/README.md) | `v0.4.13` (`0.4.1098+1`) |
| 04 | — (synopsis via triage matrix) | `v0.4.1131` |
| 05 | [attempt-05/feedback-package/README.md](attempt-05/feedback-package/README.md) | `main` @ `0d278366` (`v0.6.9.27+2` / SemVer `v0.4.1133+2`) |
| 06 | [attempt-06/README.md](attempt-06/README.md) · [preflight checklist](attempt-06-preflight-checklist.md) | `v0.4.1140+2` → `256259fb2` — FR-079 **accepted**; adopter sign-off final; FR-127/BR-108 filed |
| 07–08 | SBL `logs/` only (not git-mirrored) | Attempt 08 → [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) (migration abandoned) |
| 09 | [attempt-09/README.md](attempt-09/README.md) | `v0.4.1164` @ `7a08a906` — Arm B; [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52); PRIMARY synthesis mirrored |
| 10 | [attempt-10/README.md](attempt-10/README.md) | `v0.4.1171` @ `448a79e1` — Arm B **PASS**; FR-079 **final**; T26 programme **Phase 1 closed** ([#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)) |
| 11 | [attempt-11/README.md](attempt-11/README.md) · [preflight](attempt-11-preflight-checklist.md) | `v0.4.1171` — guided KMA / TSP; [#85](https://github.com/RMS-Ltd/ai-dev-kit/issues/85) — Phase A done, Phase B pending; kit: [FR-135](../docs/kanban/fbu/FR-135-guided-install-orchestrator-zero-manual-steps.md) / [T38](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T38-guided-install-orchestrator-fr135.md) |
| 12 | [attempt-12/README.md](attempt-12/README.md) | `v0.4.1237` — greenfield + guided KMA (issue #3 TSP); **final** — adopter install sign-off 2026-07-01; K-01–K-04 |

**Programme status:** SBL install program ([E06:S09:T26](../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md)) **COMPLETE** @ **v0.6.9.26+4** — ten attempts; attempt 11 TSP tracked via #85. Maintainer **Phase 2** = Arm A recon (fynd.deals, Confidentia).
