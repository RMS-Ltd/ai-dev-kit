# Changelog — v0.7.1.15+1

**Release Date:** 2026-06-24 12:30:00 UTC  
**Epic:** 7 | **Story:** 1 | **Task:** 15  
**SemVer:** v0.4.1219+1  
**Task:** [E07:S01:T15](../../kanban/epics/epic-07/story-01-codebase-maintenance-tasks/T15-repository-information-architecture-steady-state-governance-fr140.md)  
**FR:** [FR-140](../../kanban/fbu/FR-140-repository-information-architecture-steady-state-governance.md)

---

## Summary

E07:S01:T15 — **Change implemented (FR-140):** Repository information-architecture steady-state governance program delivered — ADR-033 layered model, constitutional IA policy, machine-generated path manifest, top-level creation gate, advisory manifest drift validator, mover-wave checklist, and program wiring (AGENTS.md, governance index, T13/T14/FR-039 coordination).

---

## Added

### E07:S01:T15 — FR-140 steady-state IA governance

- [ADR-033](../../architecture/standards-and-adrs/ADR-033-repository-information-architecture-layered-governance.md) — L0–L4 layered IA model; JSON committed manifest; enforcement phasing
- [repository-information-architecture-policy.md](../../governance/standards/repository-information-architecture-policy.md) — purpose classes, cartography program, tiered READMEs, aggregation map
- [repository-path-manifest.json](../maintenance/repository-path-manifest.json) — 86 directory entries (depth ≤ 2)
- [repository-ia-mover-wave-checklist.md](../maintenance/repository-ia-mover-wave-checklist.md) — pre-mover gate template (FR-140-F12)
- `generate_repository_path_manifest.py`, `repository_ia_exclusions.py` — manifest generator + shared T13 §0 exclusions
- `validate_repository_top_level_directories.py` — blocking top-level allowlist gate
- `validate_repository_path_manifest.py` — advisory drift detection (default)
- `tests/workflow_mgt/test_repository_ia_manifest.py` — generator/validator unit tests
- `AGENTS.md` — `P-REPO-IA` binding rule; `rw-config.yaml` `repository_ia:` block
- Pre-commit hook — top-level directory validator alongside board stamp guard

---

## References

- [IPP-E07S01T15](../../implementation-cycles/IPP-E07S01T15-repository-information-architecture-steady-state-governance.md)
- [REPOSITORY-DIRECTORY-AUDIT.md](../maintenance/REPOSITORY-DIRECTORY-AUDIT.md) · [REPOSITORY-FILE-AUDIT.md](../maintenance/REPOSITORY-FILE-AUDIT.md)
