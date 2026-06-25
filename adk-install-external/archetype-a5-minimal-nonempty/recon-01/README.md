# Archetype A5 — recon 01 (minimal non-empty)

**Archetype:** A5 · **Subject:** `subject-A5` (synthetic fixture) · **Date:** 2026-06-25  
**Method:** Synthetic fixture — [tests/fixtures/adopter-corpora/archetype-a5-minimal-nonempty](../../../../tests/fixtures/adopter-corpora/archetype-a5-minimal-nonempty/)  
**Task:** E06:S09:T41

FR-080 greenfield happy-path **control** — README + LICENSE only. Contrasts with operator repos that always carry docs/kanban context.

---

## Structure map

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `README.md` | Yes | |
| `LICENSE` | Yes | MIT text (synthetic) |
| `docs/` | No | |
| `docs/kanban/` | No | |
| Source code | No | Minimal non-empty, not empty template |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **path-1** / FR-080 greenfield |
| Blocking fails predicted | **6+** (post-orchestrator baseline) |
| Novel gap hypothesis | **minimal-nonempty-vs-empty-template** — installer may treat as brownfield if README exists; path selector clarity |

---

## Full install decision

Lower priority than A1/A2 for novel gaps; useful FR-080 regression anchor. Defer full install until G1 unless operator prioritizes greenfield control.

---

## Ethics attestation

- [x] Synthetic fixture only
- [x] No third-party commits
