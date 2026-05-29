---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 5: ADK workflow skill pack for ECC harness layer (FR-098 Phase 1)

**Task ID:** E6:S09:T05  
**Status:** TODO  
**Priority:** MEDIUM  
**Estimated Effort:** Medium  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (stub — Phase 0 GO)  
**Code:** E6S09T05

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Prerequisite:** [E6:S09:T04 — Phase 0 evaluation](./T04-ecc-harness-layer-phase0-compatibility-fr098.md) (**GO**)

---

## Summary

Publish ADK governance workflow skills in ECC-compatible `SKILL.md` format (`adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, `adk-intake-fr-br-uxr`, `adk-version-bump`) under `packages/frameworks/workflow mgt/skills/`. Requires IPW before implementation.

---

## Input

- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)

---

## Acceptance criteria (draft)

- [ ] At least `adk-release-workflow` skill published with ECC frontmatter (`name`, `description`, `origin: ai-dev-kit`)
- [ ] Skills link to canonical agent execution guides; do not duplicate full `.cursorrules` prose
- [ ] IPP linked from this task before implementation
- [ ] Bridge template `adk_skill_pack_path` validated

---

## References

- [FR-098 Phase 1](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04 Phase 0](./T04-ecc-harness-layer-phase0-compatibility-fr098.md)
