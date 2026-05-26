---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 5: ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)

**Task ID:** E6:S09:T05  
**Status:** COMPLETE (**v0.6.9.5+4** — `dev` consolidation; Phase 1 skill pack **v0.6.9.5+2** on `main`)
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.6.9.5+4** — consolidate Phase 1 from `main` onto `dev`)
**Code:** E6S09T05

## Version Anchor

**Version:** v0.6.9.5+4

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Prerequisite:** [E6:S09:T04 — Phase 0 evaluation](./T04-ecc-harness-layer-phase0-compatibility-fr098.md) (**GO**)

---

## Summary

Shipped ADK governance workflow skills in ECC-compatible `SKILL.md` format (`adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, `adk-intake-fr-br-uxr`, `adk-version-bump`) under `packages/frameworks/workflow mgt/skills/`, plus `validate_adk_ecc_skill_pack.py`, pytest tests, and [`IPP-E6S09T05`](../../../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md).

---

## Scope

### In scope (v0.6.9.5+2 — shipped)

- Five ECC-format `SKILL.md` skills + `skills/README.md` under `packages/frameworks/workflow mgt/skills/`
- `validate_adk_ecc_skill_pack.py` + `test_validate_adk_ecc_skill_pack.py`
- IPP + Kanban/FR/spec/fbuboard reconciliation for Phase 1
- Bridge template `adk_skill_pack_path` validated by script

### Prior (v0.6.9.5+1)

- SemVer strategy docs (PATCH per ECC phase; MINOR at Epic 6 sign-off only)

### Out of scope

- ECC installer orchestration (Phase 2), hooks (Phase 3), AgentShield bridge (Phase 4)

---

## Deliverable

1. **Phase 1 skill pack** — five `adk-*` skills, validator, pytest, IPP (**v0.6.9.5+2**)
2. **SemVer strategy docs** — retained from **v0.6.9.5+1**

---

## Input

- [IPP (planning package)](../../../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)

- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)

---

## Release / SemVer (inherits FR-098)

Ship this task via **`RW E6:S09:T05`** when implementation is complete. Under `task_touch` mode:

- Expect **PATCH-only** SemVer advance (e.g. `0.4.797+1` → next PATCH on tag finalize).
- **Do not** request or plan a MINOR bump for Phase 1 skill pack alone.
- **MINOR** (`epic_count` bump) is reserved for **Epic 6 sign-off** after Story 9 integration work is complete.

See [FR-098 SemVer strategy](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md#release--semver-strategy-maintainer-decision--2026-05-26) and [integration spec §9](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md).

---

## Acceptance Criteria

- [x] SemVer strategy documented (FR-098-NF5, integration spec §9, Story 009) — **v0.6.9.5+1**
- [x] Release uses PATCH-only SemVer per FR-098-NF5 (no ad-hoc MINOR for ECC phase)
- [x] At least `adk-release-workflow` skill published with ECC frontmatter (`name`, `description`, `origin: ai-dev-kit`)
- [x] Skills link to canonical agent execution guides; do not duplicate full `.cursorrules` prose
- [x] IPP linked from this task before skill pack implementation
- [x] Bridge template `adk_skill_pack_path` validated

---

## References

- [FR-098 Phase 1](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04 Phase 0](./T04-ecc-harness-layer-phase0-compatibility-fr098.md)
