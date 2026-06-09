# Changelog v0.2.1.30+5

**Release Date:** 2026-06-09 22:00:00 UTC

**Epic:** E02 | **Story:** S01 | **Task:** T30 | **FR-122**

## Summary

E02:S01:T30 — **Change implemented:** FR-122 Wave 4 — `rw-contract.yaml` machine manifest + `validate_rw_contract_manifest.py`; `canonical-rw-steps.yaml` v2.2.0 contract link. SemVer **v0.4.1102+5**.

## Changes

### Added

- `packages/frameworks/workflow-mgt/rw-contract.yaml` — gate manifest (phases, invariants, clauses)
- `validate_rw_contract_manifest.py` + tests

### Updated

- `canonical-rw-steps.yaml` — v2.2.0, `contract_manifest` metadata
- `rw-architectural-contract.md` — manifest link
- Gap matrix — C-NF1 → MET
- SAA counter synced to git tag namespace floor (I3) before release

---

## Wave 5 — thin orchestrator (same release tag `v0.2.1.30+5`)

**Shipped:** 2026-06-09 (RW E02:S01:T30 --art)

E02:S01:T30 — **Change implemented:** FR-122 Wave 5 — `rw_orchestrator.py` thin shell (PREFLIGHT / VALIDATE / PUBLISH from `rw-contract.yaml`); agent retains MUTATE. SemVer **v0.4.1103+5**.

### Added (Wave 5)

- `packages/frameworks/workflow-mgt/scripts/rw_orchestrator.py`
- `packages/frameworks/workflow-mgt/scripts/validation/test_rw_orchestrator.py`

### Updated (Wave 5)

- `rw-contract.yaml` — `orchestrator` path; C-NF2 → MET wave 5
- `rw-architectural-contract.md` — orchestrator usage section
- Gap matrix — C-NF2 → MET
- `test_semver_registry_injective.py` — legacy backend fixture guard (production DB safety)
