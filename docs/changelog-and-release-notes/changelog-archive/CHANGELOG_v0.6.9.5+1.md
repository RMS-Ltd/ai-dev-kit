# Changelog v0.6.9.5+1

**Release Date:** 2026-05-26 12:26:07 UTC  
**Epic | Story | Task:** E6:S09:T05 (`--art`)  
**SemVer (task_touch):** v0.4.797+1  

## Summary

**Intermediate doc release** for **FR-098** (ECC optional harness layer): encode maintainer **SemVer strategy** — PATCH-only per FR-098 phase via normal RW; **MINOR** reserved for Epic 6 sign-off (`epic_count`), not per ECC integration phase. Skill pack implementation remains gated on IPW.

## Change implemented

### SemVer policy (FR-098-NF5)

- **[FR-098](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)** — `Release / SemVer strategy` section + **FR-098-NF5** non-functional requirement
- **[Integration specification](../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)** — §9 Release and SemVer (`task_touch` discipline)
- **[E6:S09:T05](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md)** — release guidance + acceptance criterion; status **IN PROGRESS**
- **[Story 009](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration.md)** — goal bullet linking SemVer strategy

### Versioning outcome

- Internal: `0.6.9.5+1` (adopted from `0.1.4.3+1` via `--art`)
- SemVer: **`0.4.797+1`** — **PATCH +1 only** (`796` → `797`); **MINOR unchanged** at `4` (`epic_count`)

## Out of scope (this release)

- ECC `SKILL.md` skill pack files (Phase 1 implementation — requires IPW)
- `ecc-adk-bridge.yaml` installer step (Phase 2)
- Epic 6 sign-off / `epic_count` MINOR bump

## References

- [FR-098 SemVer strategy](../../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md#release--semver-strategy-maintainer-decision--2026-05-26)
- [dev-kit-versioning-policy](../../architecture/standards-and-adrs/dev-kit-versioning-policy.md) (task_touch / ADR-002)
