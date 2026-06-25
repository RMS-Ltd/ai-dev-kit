# Archetype A2 — recon 01 (docs sprawl brownfield)

**Archetype:** A2 · **Subject:** `subject-A2` (synthetic fixture) · **Date:** 2026-06-25  
**Method:** Synthetic fixture — [tests/fixtures/adopter-corpora/archetype-a2-docs-sprawl](../../../../tests/fixtures/adopter-corpora/archetype-a2-docs-sprawl/)  
**Task:** E06:S09:T41

---

## Structure map

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `docs/` | Yes | `docs/ROADMAP.md` |
| `doc/` (singular) | Yes | Alternate root — detection stress |
| Root PM files | Yes | `PROJECT.md` |
| `docs/kanban/` | No | Sprawl without ADK layout |
| `rw-config.yaml` | No | |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **arm-a** brownfield |
| Blocking fails predicted | **7+** |
| Novel gap hypothesis | **structure-detection-sprawl** — BR-108-class heuristics may pick wrong doc root or duplicate PM surfaces |

---

## Full install decision

Defer until G1; fixture captures sprawl pattern for CI. Live brownfield subject should differ from Confidentia governance-heavy shape.

---

## Ethics attestation

- [x] Synthetic fixture only
- [x] No third-party commits
