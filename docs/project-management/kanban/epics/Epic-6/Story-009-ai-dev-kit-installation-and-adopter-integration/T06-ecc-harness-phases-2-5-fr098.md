---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 6: ECC harness phases 2–5 (installer, hooks, AgentShield, positioning)

**Task ID:** E6:S09:T06  
**Status:** TODO  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.6.9.6+1** — Kanban documentation setup, RW -k `--art`)  
**Code:** E6S09T06

## Version Anchor

**Version:** v0.6.9.6+1

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Prerequisites:**

- [E6:S09:T04 — Phase 0 evaluation](./T04-ecc-harness-layer-phase0-compatibility-fr098.md) (**GO**)
- [E6:S09:T05 — Phase 1 skill pack](./T05-adk-workflow-skill-pack-ecc-fr098.md) (**shipped** v0.6.9.5+4)

---

## Summary

Deliver FR-098 **phases 2–5**: optional ECC installer/bridge adoption path (greenfield + brownfield docs), hook alignment with ADK governance boundaries, optional AgentShield bridge as an RW Step 9 add-on (non-blocking), and adopter-facing positioning (layered architecture + book sidebar). Single task with **ordered implementation waves**; ship via **`RW E6:S09:T06`** per wave or at phase completion.

---

## Scope

### In scope (by sub-phase)

| Sub-phase | Deliverable | FR trace |
|-----------|-------------|----------|
| **2** | Optional greenfield/brownfield ECC install step; `ecc-adk-bridge.yaml` workflow; bridge validator | **FR-098-F5** |
| **3** | Hook profile defaults (`minimal` / hooks-off); `disabled_hooks`; SessionStart + pre-RW advisory gate docs | Roadmap §10 |
| **4** | AgentShield optional RW Step 9 add-on (documented; does not replace ADK validators) | Roadmap §10 |
| **5** | Layered architecture user-docs (**FR-098-F6**); book/public positioning sidebar | **FR-098-F6** |

### Out of scope

- Re-shipping Phase 1 `adk-*` skills (owned by **T05**)
- ECC Pro / paid upstream products
- Mandatory ECC for ADK correctness
- Replacing RW Step 9 blocking validators with AgentShield

---

## Deliverable

1. Installer/bridge adoption path (script or documented procedure + validation)
2. Hook alignment contract and bridge field population guidance
3. AgentShield bridge specification and RW integration notes
4. Updated cheatsheet, install docs, integration spec §10 task anchors
5. IPP implementation evidence (validators + pytest where applicable)

---

## Input

- [IPP (planning package)](../../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [ECC + ADK cheatsheet](../../../../../documentation/user-docs/ecc-adk-integration-cheatsheet.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)
- [IPP-E6S09T05 (Phase 1)](../../../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)
- [T01 greenfield install (FR-080)](./T01-greenfield-installation-process-fr080.md)

---

## Release / SemVer (inherits FR-098)

Ship via **`RW E6:S09:T06`** (`--art` on first release). Under `task_touch` mode:

- **PATCH-only** SemVer per FR-098 phase (no MINOR for ECC phases alone).
- **MINOR** reserved for Epic 6 sign-off after Story 9 integration work is complete.

See [FR-098 SemVer strategy](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md#release--semver-strategy-maintainer-decision--2026-05-26).

---

## Acceptance Criteria

### Phase 2 — Installer + bridge

- [ ] Optional ECC install step documented in greenfield path (FR-080) and brownfield guidance (FR-081 cross-link); ADK-only path unchanged
- [ ] Adopter can copy `ecc-adk-bridge.yaml.template` → project-root `ecc-adk-bridge.yaml` with documented pins (`ecc_version_pin`, profile naming)
- [ ] `validate_ecc_adk_bridge.py` (or extended pack validator) PASS on canonical template + pytest negatives
- [ ] **FR-098-F5** closable when install docs merged

### Phase 3 — Hooks

- [ ] Default `hook_profile: minimal` and hooks-off install discipline documented in cheatsheet + spec
- [ ] `disabled_hooks` list populated from Phase 0 conflict-resolve table (RW/git surfaces)
- [ ] Pre-RW advisory hook contract documented (non-blocking; ADK Step 9 validators remain authoritative)

### Phase 4 — AgentShield bridge

- [ ] Optional AgentShield integration documented as RW Step 9 **add-on** (complements validators; non-blocking on failure)
- [ ] No duplicate RW/UKW/IPW triggers introduced by default ECC install

### Phase 5 — Positioning + architecture docs

- [ ] **FR-098-F6** layered architecture (ADK = project OS; ECC = harness OS) in user-docs with vision cross-links
- [ ] Book/public positioning sidebar copy (Head First AI-Assisted Development) stub or section linked from cheatsheet

### Cross-cutting

- [ ] IPP linked from this task (bidirectional) before implementation
- [ ] Integration spec §10 lists **E6:S09:T06** for phases 2–5
- [ ] Dogfood checklist on disposable branch recorded in IPP §7 or task notes

---

## References

- [IPP-E6S09T06 (planning package)](../../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
- [FR-098](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04 Phase 0](./T04-ecc-harness-layer-phase0-compatibility-fr098.md)
- [T05 Phase 1](./T05-adk-workflow-skill-pack-ecc-fr098.md)
- [ADR-003 greenfield vs brownfield](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
