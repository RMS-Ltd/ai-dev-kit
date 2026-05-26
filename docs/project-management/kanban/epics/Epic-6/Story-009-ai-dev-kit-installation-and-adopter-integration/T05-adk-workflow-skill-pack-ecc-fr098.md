---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 5: ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)

**Task ID:** E6:S09:T05  
**Status:** IN PROGRESS (intermediate doc release — FR-098 SemVer strategy encoded; skill pack implementation pending IPW)  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.6.9.5+1** — intermediate doc release; SemVer strategy `--art`)  
**Code:** E6S09T05

## Version Anchor

**Version:** v0.6.9.5+1

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Prerequisite:** [E6:S09:T04 — Phase 0 evaluation](./T04-ecc-harness-layer-phase0-compatibility-fr098.md) (**GO**)

---

## Summary

Publish ADK governance workflow skills in ECC-compatible `SKILL.md` format (`adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, `adk-intake-fr-br-uxr`, `adk-version-bump`) under `packages/frameworks/workflow mgt/skills/`. Full skill pack requires IPW; this task's **v0.6.9.5+1** release ships **SemVer strategy documentation** only (intermediate).

---

## Scope

### In scope (v0.6.9.5+1 — shipped)

- Encode FR-098 **SemVer / release strategy** in FR-098, integration spec, Story 009, and this task doc
- PATCH-only SemVer per FR-098 phase; MINOR at Epic 6 sign-off

### In scope (follow-on — pending IPW)

- ECC-format `SKILL.md` files under `packages/frameworks/workflow mgt/skills/`
- Bridge template `adk_skill_pack_path` validation

### Out of scope

- ECC installer orchestration (Phase 2), hooks (Phase 3), AgentShield bridge (Phase 4)

---

## Deliverable

1. **SemVer strategy docs** — FR-098-NF5, integration spec §9, task/story cross-links (**v0.6.9.5+1**)
2. **ADK workflow skill pack** (Phase 1) — pending IPW and implementation RW

---

## Input

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
- [ ] At least `adk-release-workflow` skill published with ECC frontmatter (`name`, `description`, `origin: ai-dev-kit`)
- [ ] Skills link to canonical agent execution guides; do not duplicate full `.cursorrules` prose
- [ ] IPP linked from this task before skill pack implementation
- [ ] Bridge template `adk_skill_pack_path` validated

---

## References

- [FR-098 Phase 1](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04 Phase 0](./T04-ecc-harness-layer-phase0-compatibility-fr098.md)
