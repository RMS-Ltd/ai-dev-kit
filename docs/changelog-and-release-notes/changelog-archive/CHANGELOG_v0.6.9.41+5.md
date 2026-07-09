# Changelog — v0.6.9.41+5

**Release Date:** 2026-07-09 13:01:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 41  
**SemVer:** v0.4.1246+5  
**Task:** E06:S09:T41 — External adopter archetype corpus (FR-142)

---

## Summary

E06:S09:T41 — **Change implemented:** Wave 2 live-subject recon for external adopter archetypes A1/A2/A5 (recon-02) resumed post-T43 SBL install sign-off. Local clones only (`temp/external-recon/` gitignored); full install remains **deferred** until G1 (UXR-029 AC6).

---

## Changed

### External archetype programme

- **recon-02 (live)** for A1 (issues-only/README-PM), A2 (VitePress docs sprawl), A5 (minimal npm package) — structure maps + `install-rc-pre-score.json` under `adk-install-external/archetype-*/recon-02/`
- [adk-install-external/README.md](../../../adk-install-external/README.md) — index links synthetic + live recon
- [external-adopter-diversity-matrix.md](../../knowledge/analysis/projects/external-adopter-diversity-matrix.md) — live recon registry
- `.gitignore` — `temp/external-recon/` (clone paths not committed)

### Kanban / intake

- [T41 task doc](../../kanban/epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T41-external-adopter-archetype-corpus-fr142.md) — Wave 2 resume note; deliverable 4; evidence links
- [FR-142](../../kanban/fbu/FR-142-external-adopter-archetype-corpus-install-validation.md) — AC2 live recon evidence @ v0.6.9.41+5
- [UXR-029](../../kanban/fbu/UXR-029-adk-install-path-experiment.md) — Phase 5 Wave 2 status

---

## Verification

- `pytest tests/fixtures/adopter-corpora/test_archetype_fixture_smoke.py` — 8 passed

---

## References

- Prior release: **v0.6.9.41+4** (operator deferral sign-off)
- Next gate: UXR-029 AC6 (Arm A) → Wave 3 full install on A1 (highest signal)
