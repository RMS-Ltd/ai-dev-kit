---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T17:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 6: ECC harness phases 2–5 (installer, hooks, AgentShield, positioning)

**Task ID:** E6:S09:T06  
**Status:** ✅ COMPLETE (**v0.6.9.6+3** — phases 2–5 + dogfood T8)  
**Priority:** HIGH  
**Estimated Effort:** Large  
**Created:** 2026-05-26  
**Last updated:** 2026-05-26 (**v0.6.9.6+5** — IPP Wave E public-repo validation plan; functional **v0.6.9.6+3**)  
**Code:** E6S09T06

## Version Anchor

**Version:** v0.6.9.6+3

**Upstream:** [FR-098 - Optional ECC harness layer integration](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Prerequisites:**

- [E6:S09:T04 — Phase 0 evaluation](./T04-ecc-harness-layer-phase0-compatibility-fr098.md) (**GO**)
- [E6:S09:T05 — Phase 1 skill pack](./T05-adk-workflow-skill-pack-ecc-fr098.md) (**shipped** v0.6.9.5+4)

---

## Summary

Delivered FR-098 **phases 2–5**: optional ECC installer/bridge path, hook alignment docs, AgentShield RW add-on spec, and adopter positioning (cheatsheet §11, INSTALL optional step). Validators and install helper ship under `packages/frameworks/workflow mgt/`.

---

## Scope

### In scope (by sub-phase)

| Sub-phase | Deliverable | FR trace |
|-----------|-------------|----------|
| **2** | Optional greenfield/brownfield ECC install step; `ecc-adk-bridge.yaml` workflow; bridge validator | **FR-098-F5** |
| **3** | Hook profile defaults (`minimal` / hooks-off); `disabled_hooks`; SessionStart + pre-RW advisory gate docs | Roadmap §10 |
| **4** | AgentShield optional RW Step 10 add-on (documented; does not replace ADK validators) | Roadmap §10 |
| **5** | Layered architecture user-docs (**FR-098-F6**); book/public positioning sidebar | **FR-098-F6** |

### Out of scope

- Re-shipping Phase 1 `adk-*` skills (owned by **T05**)
- ECC Pro / paid upstream products
- Mandatory ECC for ADK correctness
- Replacing RW Step 10 blocking validators with AgentShield

---

## Deliverable

1. `validate_ecc_adk_bridge.py` + pytest; `install_ecc_harness_optional.sh` (`--dry-run` default)
2. Bridge template `disabled_hooks` examples + cheatsheet hook guidance
3. `ecc-agentshield-rw-step9-bridge.md` + release-workflow cross-link
4. INSTALL + cheatsheet + integration spec §11 updates
5. IPP implementation evidence (validators PASS)

---

## Input

- [IPP (planning package — §7 closed; §8 Wave E plan **v0.6.9.6+5**)](../../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
- [Integration specification](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)
- [Phase 0 evaluation](../../../../../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)
- [ECC + ADK cheatsheet](../../../../../documentation/user-docs/ecc-adk-integration-cheatsheet.md)
- [Bridge template](../../../../../packages/frameworks/workflow%20mgt/config/ecc-adk-bridge.yaml.template)
- [IPP-E6S09T05 (Phase 1)](../../../../../implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md)
- [T01 greenfield install (FR-080)](./T01-greenfield-installation-process-fr080.md)

---

## Implementation notes

### Dogfood checklist (T8 — branch `throwaway/ecc-dogfood-e6s09t06`, 2026-05-26)

**Canonical E2E steps:** [ECC + ADK cheatsheet §3 Throwaway branch playbook](../../../../../documentation/user-docs/ecc-adk-integration-cheatsheet.md#throwaway-branch-playbook-end-to-end) (**v0.6.9.6+4**).

- [x] Phase 0 dry-run: `npx -p ecc-universal ecc-install --target cursor --profile core --without baseline:hooks --dry-run` — **342** planned ops; **note:** hook scripts + `hooks.json` still listed despite `baseline:hooks` excluded (review before `--execute`)
- [x] `install_ecc_harness_optional.sh --copy-bridge` — bridge copied; validators PASS
- [x] `validate_ecc_adk_bridge.py --bridge ecc-adk-bridge.yaml` — PASS
- [x] `validate_adk_ecc_skill_pack.py` — PASS (ADK-only skill pack unchanged)
- [x] **Do not** run `--execute` on canonical ai-dev-kit repo (dry-run only); ADK RW/git policy preserved without ECC overlay

### Shipped paths

- `packages/frameworks/workflow mgt/scripts/validation/validate_ecc_adk_bridge.py`
- `packages/frameworks/workflow mgt/scripts/validation/test_validate_ecc_adk_bridge.py`
- `packages/frameworks/workflow mgt/scripts/install/install_ecc_harness_optional.sh`
- `packages/frameworks/workflow mgt/KB/Documentation/Developer_Docs/vwmp/ecc-agentshield-rw-step9-bridge.md`

---

## Release / SemVer (inherits FR-098)

Ship via **`RW E6:S09:T06`** when ready to release implementation (`--art`).

---

## Acceptance Criteria

### Phase 2 — Installer + bridge

- [x] Optional ECC install step documented in greenfield path (FR-080) and brownfield guidance (FR-081 cross-link); ADK-only path unchanged
- [x] Adopter can copy `ecc-adk-bridge.yaml.template` → project-root `ecc-adk-bridge.yaml` with documented pins (`ecc_version_pin`, profile naming)
- [x] `validate_ecc_adk_bridge.py` PASS on canonical template + pytest negatives
- [x] **FR-098-F5** closable when install docs merged

### Phase 3 — Hooks

- [x] Default `hook_profile: minimal` and hooks-off install discipline documented in cheatsheet + spec
- [x] `disabled_hooks` list populated from Phase 0 conflict-resolve table (RW/git surfaces)
- [x] Pre-RW advisory hook contract documented (non-blocking; ADK Step 10 validators remain authoritative)

### Phase 4 — AgentShield bridge

- [x] Optional AgentShield integration documented as RW Step 10 **add-on** (complements validators; non-blocking on failure)
- [x] No duplicate RW/UKW/IPW triggers introduced by default ECC install

### Phase 5 — Positioning + architecture docs

- [x] **FR-098-F6** layered architecture (ADK = project OS; ECC = harness OS) in user-docs with vision cross-links
- [x] Book/public positioning sidebar copy (Head First AI-Assisted Development) stub or section linked from cheatsheet

### Cross-cutting

- [x] IPP linked from this task (bidirectional) before implementation
- [x] Integration spec §10–§11 lists **E6:S09:T06** for phases 2–5
- [x] Dogfood checklist recorded (T8 — see Implementation notes; dry-run on `throwaway/ecc-dogfood-e6s09t06`)

---

## References

- [IPP-E6S09T06 (planning package)](../../../../../implementation-cycles/IPP-E6S09T06-ecc-harness-phases-2-5-fr098.md)
- [FR-098](../../../fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04 Phase 0](./T04-ecc-harness-layer-phase0-compatibility-fr098.md)
- [T05 Phase 1](./T05-adk-workflow-skill-pack-ecc-fr098.md)
- [ADR-003 greenfield vs brownfield](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
