# Archetype A2 — recon 02 (docs sprawl brownfield, live subject)

**Archetype:** A2 · **Subject:** `subject-A2-live` · **Date:** 2026-07-01  
**Method:** Live local clone (operator `temp/external-recon/` — URL not committed)  
**Licence:** MIT  
**Task:** E06:S09:T41 · **Protocol:** [RECON-PROTOCOL.md](../../RECON-PROTOCOL.md)  
**Prior:** [recon-01](../recon-01/README.md) (synthetic fixture baseline)

---

## Selection rationale

| Criterion | Match |
| --------- | ----- |
| Multiple doc / PM surfaces | ✅ `docs/` VitePress site + 14 root-level `.md` governance files |
| No `docs/kanban/` | ✅ |
| Brownfield mature library | ✅ Node HTTP client, examples/, lib/ |
| Differs from Confidentia | ✅ Sprawl is **doc-site + root markdown**, not governance-heavy kanban |

---

## Structure map

Detail: [structure-map.md](structure-map.md)

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `docs/` | Yes | VitePress site (`docs/.vitepress/`, locales es/fr/zh) |
| `doc/` (singular) | No | Sprawl via root markdown instead |
| Root PM markdown | Yes | 14 files: AGENTS.md, CHANGELOG, CONTRIBUTING, ECOSYSTEM, etc. |
| `docs/kanban/` | No | |
| `examples/` | Yes | Parallel doc-like surface |
| `rw-config.yaml` | No | |
| CI (GHA) | Yes | 8 workflows |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **arm-a** brownfield |
| Blocking fails predicted | **8+** |
| Novel gap hypothesis | **structure-detection-vitepress-sprawl** — doc-site under `docs/` plus root governance markdown; KMA/structure detection may pick VitePress assets vs PM corpus |

**vs synthetic recon-01:** Live subject adds VitePress doc-site + CI depth; no `doc/` singular but stronger root sprawl.

---

## Full install decision

| Decision | Rationale |
| -------- | --------- |
| **Defer until G1** | Recon-only wave |
| **Recommended post-G1** | **Yes** — novel vs Confidentia governance shape |

---

## Ethics attestation

- [x] Local clone only; URL not committed
- [x] No third-party commits
- [x] Anonymized subject label

---

## Intake (provisional)

| Gap | Proposed intake |
| --- | --------------- |
| VitePress / static-site `docs/` vs PM docs | Install RC row for doc-site exclusion heuristics (BR-108 class extension) |
| Root markdown sprawl (AGENTS.md, etc.) | KMA structure map should rank PM-relevant paths — separate task post-G1 |
