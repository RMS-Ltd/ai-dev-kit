# Starborn Legacy — ADK install attempt 09 (maintainer index)

**Session:** `20260614-attempt-09`  
**ADK pin:** `v0.4.1164`  
**SBL branch / HEAD:** `dev` @ `7a08a906`  
**Arm:** **B** — greenfield shell + selective migration (KMA)  
**Maintainer task:** [E06:S09:T26](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T26-starborn-legacy-adk-install-program.md) · [E06:S09:T36](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)

**GitHub:** [ai-dev-kit #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) · [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) (attempt 08 lineage)

**FR-079 status:** Package submitted 2026-06-15 — maintainer intake accepted (`pending_kit_deconfound`)

---

## Outcome

| Result | Detail |
|--------|--------|
| Vendor preflight | **PASS** |
| Greenfield orchestrator | **PARTIAL** (`ADK-I03.E90`) — sqlite, UKW, docs schema not orchestrated |
| Sign-off contract | **7 READY / 0 NOT READY** |
| KMA (manual v4, E30–E40) | **PASS** — operator tree + synthesise; megastories dismantled |
| Install RC checklist | **~50% FAIL** — Phase 0 target |
| Release authority | **LEGACY YAML** — 4 RWs to `v0.9.4` (sqlite gap post-hoc) |
| Custom KMA scripts | **6** — evidence for kit-owned orchestration |

---

## PRIMARY synthesis (committed mirror)

**Blog-format report** — industry research + attempts 07–09 + Adopter Path Selector proposal:

- [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../docs/knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md)
- Thin pointer: [docs/adk-feedback/attempt-09/README.md](../../docs/adk-feedback/attempt-09/README.md)

**Formal UXR:** [UXR-029](../../docs/kanban/fr-br/UXR-029-adk-install-path-experiment.md)  
**Policy:** [ADR-030](../../docs/architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md)

---

## Canonical feedback package (FR-079)

**SBL-owned path** (not duplicated in `ai-dev-kit`):

| Artifact | Path (Starborn Legacy repo) |
|----------|----------------------------|
| Root | `starborn_legacy/logs/attempt-09/` |
| Package | `…/feedback-package/` |
| PRIMARY (source) | `…/feedback-package/FB-ADK-install-paths-industry-patterns.md` |
| Payload | `…/feedback-package/feedback-payload.json` |
| Diary | `…/greenfield-install-diary.md` |
| Operator tree | `…/TARGET-ES-TREE-E30-RATIONALISED.md` |

---

## Attempt lineage (07 → 09)

| # | Path | Outcome | Issue |
|---|------|---------|-------|
| 07 | Greenfield install | Partial PASS | — |
| 08 | In-place legacy + agent mapping | **FAIL** — abandoned | [#51](https://github.com/RMS-Ltd/ai-dev-kit/issues/51) |
| 09 | Arm B shell + KMA | KMA PASS; Install RC FAIL | [#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52) |

---

## Maintainer next steps

1. Phase 0 kit fixes — **landed in ai-dev-kit** (Install RC, docs schema, orchestrator flags) — [T36](../../docs/kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T36-adopter-path-selector-install-rc-uxr029.md)
2. SBL attempt 10 — [attempt-10/README.md](../attempt-10/README.md) (Arm B validation replay)
3. fynd.deals + Confidentia Arm A recon — [adopter-install-attempt-preflight.md](../../docs/guides/adopter-install-attempt-preflight.md)
