# Archetype A1 — recon 01 (issues-only OSS)

**Archetype:** A1 · **Subject:** `subject-A1` (synthetic fixture) · **Date:** 2026-06-25  
**Method:** Synthetic fixture — [tests/fixtures/adopter-corpora/archetype-a1-issues-only](../../../../tests/fixtures/adopter-corpora/archetype-a1-issues-only/)  
**Task:** E06:S09:T41 · **Protocol:** [RECON-PROTOCOL.md](../../RECON-PROTOCOL.md)

Live subject selection pending operator pick (permissive OSS, issues-only backlog). This recon validates protocol artifacts against the committed anonymized fixture.

---

## Structure map

| Surface | Present | Notes |
| ------- | ------- | ----- |
| `docs/kanban/` | No | Primary stress — no ADK-shaped tree |
| Flat backlog | Yes | `TODO.md` with inline `E01:S01:T01` token |
| `.github/ISSUE_TEMPLATE` | No | Fixture minimal; real A1 subjects often have issues |
| `rw-config.yaml` | No | Pre-install |
| Version file | No | |
| CI | No | |

---

## Install RC pre-score

Artifact: [install-rc-pre-score.json](install-rc-pre-score.json)

| Field | Value |
| ----- | ----- |
| Adoption path hypothesis | **path-1** greenfield default at risk — operator may wrongly force Arm B KMA |
| Blocking fails predicted | **8+** (rw-config, sqlite, kanban paths, docs schema, comprehension) |
| Novel gap hypothesis | **path-selector-misfire-no-kanban** — installer assumes kanban or greenfield empty repo; issues-only backlog not mapped |

---

## Full install decision

| Decision | Rationale |
| -------- | --------- |
| **Defer until G1** | UXR-029 Phase 4 incomplete; synthetic recon sufficient for fixture + pre-score format |
| **Recommended post-G1** | Yes — high signal for path selector / FR-133 depth |

---

## Ethics attestation

- [x] Synthetic fixture only — no third-party clone in this recon
- [x] No commits to external repository
- [x] Anonymized subject label

---

## Intake (provisional)

| Gap | Proposed intake |
| --- | --------------- |
| Path selector for issues-only repos | Install RC row proposal after live recon — separate task |
