# Changelog — v0.6.9.39+1

**Release Date:** 2026-06-17 21:30:00 UTC  
**Epic:** 6 | **Story:** 9 | **Task:** 39  
**SemVer:** v0.4.1196+1  
**Task:** E06:S09:T39 — Guided KMA Target Structure Pack (FR-136)

---

## Summary

**Change implemented:** Guided KMA modes (`blind` | `guided` | `score`) with Target Structure Pack (TSP) contract, deterministic structural scorer (M08), collision detector (M02), dedup inventory (M03), framework reference templates, and pytest fixture replay (≥0.85 weighted on minimal fixture; TSP self-test ≥0.98).

---

## Added

- `packages/frameworks/kanban/scripts/score_kma_structure.py` — six-dimension rubric scorer; `--self-test` for CI
- `packages/frameworks/kanban/scripts/kma_collision_detect.py` — per-epic story basename collision scan
- `packages/frameworks/kanban/scripts/build_target_est_tree.py` — optional TSP builder from operator est-tree MD
- `packages/frameworks/kanban/reference/` — TSP contract README + generic companion templates
- `tests/fixtures/kma-guided-tsp-minimal/` + pytest modules (`test_score_kma_structure.py`, `test_kma_guided_modes.py`, `test_kma_collision_detect.py`, `test_kma_dedup_inventory.py`)
- ADR-028 § Guided mode and Target Structure Pack

## Changed

- `kma-agent-guardrails.yaml` v1.1 — `kma_mode`, guided/score invariants
- `kanban-migration-agent-execution.md` v1.1 — mode matrix, helper CLI, scorer Step 5
- `.claude/commands/kma.md` — guided/score flags and TSP load order
- `MIGRATION_PROPOSAL_TEMPLATE.md` — Guided mode section (dedup count, collisions, lazy fan-out)
- `kma_ingest.py` — `--dedup` unique E:S:T inventory (M03)
- `greenfield-install/` mirror sync (FR-110)

## Related

- [FR-136](docs/kanban/fr-br/FR-136-guided-kma-target-structure-pack.md) · [IPP-E06S09T39](docs/implementation-cycles/IPP-E06S09T39-guided-kma-target-structure-pack-fr136.md)
- SBL exemplar (not vendored): `adk-install-into-sbl/kanban-reference/`
