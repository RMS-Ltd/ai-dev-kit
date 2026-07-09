# Archetype A1 — recon 02 (issues-only OSS, live subject)

**Archetype:** A1 · **Subject:** `subject-A1-live` · **Date:** 2026-07-01  
**Method:** Live local clone (operator `temp/external-recon/` — URL not committed)  
**Licence:** MIT (permissive OSS)  
**Task:** E06:S09:T41 · **Protocol:** [RECON-PROTOCOL.md](../../RECON-PROTOCOL.md)  
**Prior:** [recon-01](../recon-01/README.md) (synthetic fixture baseline)

Resumed post [T43](https://github.com/RMS-Ltd/ai-dev-kit/blob/main/docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T43-starborn-legacy-attempt-12-intake-programme-wind-down.md) SBL install sign-off — recon-only; **G1** still open for full install.

---

## Selection rationale

| Criterion | Match |
| --------- | ----- |
| No `docs/kanban/` | ✅ |
| Issues/GitHub-centric PM | ✅ `.github/ISSUE_TEMPLATE.md`, CONTRIBUTING workflow |
| No cooperative adopter | ✅ subject-only |
| Permissive licence | ✅ MIT |
| Differs from SBL/fynd/Confidentia | ✅ README-as-primary-PM (curated list), not governance kanban |

---

## Structure map

Detail: [structure-map.md](structure-map.md)

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `docs/kanban/` | No | Primary stress |
| `docs/` tree | No | README is sole doc surface |
| Flat `TODO.md` | No | Issues + CONTRIBUTING instead |
| `.github/ISSUE_TEMPLATE` | Yes | Single template file |
| `rw-config.yaml` | No | |
| Version file (Python) | No | Node/scripts only |
| CI (GHA) | Yes | 3 workflows |
| README as PM | Yes | Large curated index — not ADK-shaped backlog |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **path-1** greenfield at risk — agent may force Arm B KMA on README-only repo |
| Blocking fails predicted | **9+** |
| Novel gap hypothesis | **path-selector-misfire-readme-pm** — README-centric OSS with issues workflow; no kanban tree; path selector may not offer issues-only arm |

**vs synthetic recon-01:** Live subject confirms hypothesis; adds GitHub issues template + CI (not in fixture).

---

## Full install decision

| Decision | Rationale |
| -------- | --------- |
| **Defer until G1** | Operator deferral intact; live recon strengthens install case |
| **Recommended post-G1** | **Yes** — high signal for path selector / issues-only adoption |

---

## Ethics attestation

- [x] Local clone only — path under `temp/external-recon/`; URL not in kit
- [x] No commits to external repository
- [x] Anonymized subject label (`subject-A1-live`)

---

## Intake (provisional)

| Gap | Proposed intake |
| --- | --------------- |
| Path selector for issues-only / README-PM repos | Install RC row + path-selector doc — file after G1 full install confirms |
| CI present on issues-only subject | Cross-check `actions_ci_parity` greenfield defaults (see K-04 / FR-141) |
