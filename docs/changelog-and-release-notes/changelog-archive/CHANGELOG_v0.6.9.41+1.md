# Changelog — v0.6.9.41+1

**Release Date:** 2026-06-25 13:16:51 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 41  
**SemVer:** v0.4.1230+1  
**Task:** E06:S09:T41 — External adopter archetype corpus (FR-142)

---

## Summary

E06:S09:T41 — **Change implemented:** IDW Wave 1 — external adopter archetype programme scaffold (`--art` anchor adoption from E06:S09:T26). Diversity matrix, `adk-install-external/` index + recon protocol, three synthetic recon reports (A1/A2/A5) with Install RC pre-score JSON, anonymized CI fixtures + pytest, UXR-029 coverage synthesis, preflight §8 extension. Full install remains **BLOCKED** on G1 (UXR-029 Phase 4).

---

## Added

- [external-adopter-diversity-matrix.md](../../knowledge/analysis/projects/external-adopter-diversity-matrix.md) — archetype dimensions and v1 selection (A1, A2, A5)
- [adk-install-external/](../../../adk-install-external/README.md) — programme index, ethics, recon protocol, three `recon-01` reports
- [IPP-E06S09T41](../../implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md) — implementation planning package
- `tests/fixtures/adopter-corpora/` — anonymized archetype fixtures + `test_archetype_fixture_smoke.py`

---

## Changed

- [T41 task doc](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) — `IN PROGRESS`; deliverable evidence; G1 gate table
- [FR-142](../../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) — requirement checkboxes (F1–F5, F7, AC1/2/4/5)
- [UXR-029](../../kanban/fbu/UXR-029-adk-install-path-experiment.md) — operator vs external archetype coverage table
- [adopter-install-attempt-preflight.md](../../guides/adopter-install-attempt-preflight.md) — §8 recon protocol pointer
- [repository-path-manifest.json](../../maintenance/repository-path-manifest.json) — register `adk-install-external`

---

## Deferred (G1)

- Live subject recon (replace synthetic fixture method)
- ≥1 full install attempt (FR-142 AC3)
- Install RC row / FR-142-F6 intake from confirmed gaps

---

## References

- [IPP-E06S09T41](../../implementation-cycles/IPP-E06S09T41-external-adopter-archetype-corpus-fr142.md)
- [FR-142](../../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md)
- Prior kanban init: **v0.6.9.41+0**
