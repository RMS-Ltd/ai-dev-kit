# Archetype A5 — recon 02 (minimal non-empty, live subject)

**Archetype:** A5 · **Subject:** `subject-A5-live` · **Date:** 2026-07-01  
**Method:** Live local clone (operator `temp/external-recon/` — URL not committed)  
**Licence:** MIT  
**Task:** E06:S09:T41 · **Protocol:** [RECON-PROTOCOL.md](../../RECON-PROTOCOL.md)  
**Prior:** [recon-01](../recon-01/README.md) (synthetic README+LICENSE-only fixture)

FR-080 greenfield **control** — live tiny OSS package (not empty template).

---

## Selection rationale

| Criterion | Match |
| --------- | ----- |
| Minimal footprint | ✅ ~16 top-level entries |
| No `docs/` / no kanban | ✅ |
| Non-empty vs empty template | ✅ `package.json`, source, tests present |
| Permissive licence | ✅ MIT (`license` file) |

**Note:** Live subject includes **source + tests** — stricter than synthetic fixture (README+LICENSE only). Still valid A5 control: no docs tree, no PM corpus.

---

## Structure map

Detail: [structure-map.md](structure-map.md)

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `readme.md` | Yes | Lowercase filename |
| `license` | Yes | Lowercase |
| `docs/kanban/` | No | |
| Source | Yes | `index.js`, types, tests |
| `package.json` | Yes | npm metadata |
| CI | Yes | 1 GHA workflow |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **path-1** / FR-080 greenfield |
| Blocking fails predicted | **6** |
| Novel gap hypothesis | **minimal-package-vs-empty-template** — tiny npm package with code; path selector may treat as brownfield due to `package.json` + CI |

**vs synthetic recon-01:** Live adds package manager + CI; confirms greenfield path clarity need.

---

## Full install decision

| Decision | Rationale |
| -------- | --------- |
| **Defer until G1** | Lower priority than A1/A2 for novel gaps |
| **Recommended post-G1** | **Optional** — FR-080 regression anchor |

---

## Ethics attestation

- [x] Local clone only; URL not committed
- [x] No third-party commits
- [x] Anonymized subject label

---

## Intake (provisional)

| Gap | Proposed intake |
| --- | --------------- |
| Tiny package repos vs true empty greenfield | Path selector clarity in INSTALL — doc-only unless full install proves gap |
