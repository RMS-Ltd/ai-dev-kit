---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T14:25:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S09:T05 — Planning: ADK ECC workflow skill pack (FR-098 Phase 1)

**Host Task:** [`T05-adk-workflow-skill-pack-ecc-fr098.md`](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T05-adk-workflow-skill-pack-ecc-fr098.md) **(E6:S09:T05)**  
**Planning for:** [FR-098 — Optional ECC harness layer integration](../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Status:** Approved (implementation complete targeting v0.6.9.5+2)

---

## 1. Requirements

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | Publish five ADK governance skills (`adk-*`) in ECC `SKILL.md` shape | FR-098-F4, T05 |
| RF2 | Document `adk_skill_pack_path` in bridge README + validate against template | T05 acceptance |
| RF3 | Each skill links vwmp agent execution guides; avoids duplicating `.cursorrules` | T05 acceptance |
| RF4 | Pack validator + regression tests (`pytest`) | Maintainer gate |
| RF5 | Git policy surface forbids non-RW commits/pushes in skill prose | Integration spec §4 |

Non-functional: optional integration unchanged; ADK validators remain authoritative.

---

## 2. Specification

**Goal.** Ship a reproducible skill pack adoptable alongside ECC minimal profile guidance, with deterministic validation for frontmatter, guide links, RW-only git wording, README path disclosure, and bridge `adk_skill_pack_path` alignment.

**Skill set.** `adk-release-workflow`, `adk-kanban-sync`, `adk-implementation-planning`, `adk-intake-fr-br-uxr`, `adk-version-bump` under `packages/frameworks/workflow mgt/skills/<slug>/SKILL.md`.

**Validator.** `packages/frameworks/workflow mgt/scripts/validation/validate_adk_ecc_skill_pack.py`.

---

## 3. Test design

| ID | Check | Evidence |
|----|-------|---------|
| T1 | Validator PASS on canonical tree | CLI exit 0 |
| T2 | pytest regression | Missing skill + bad origin negatives |

---

## 4. Implementation plan

| Step | Action | Status |
|------|--------|--------|
| **1** | Task TODO → IN PROGRESS | Done |
| 2 | Create skills + README | Done |
| 3 | Add validator | Done |
| 4 | Add pytest module | Done |
| 5 | Refresh FR/spec/fbuboard/Task/Story/Epic | Done |
| **6** | Status reconciliation (`COMPLETE`) | Done |

---

## 5. Documentation deliverables

| Doc | Path | Action |
|-----|------|--------|
| IPP | `docs/implementation-cycles/IPP-E6S09T05-adk-ecc-workflow-skill-pack-fr098.md` | CREATE |
| Validator/tests | `packages/frameworks/workflow mgt/scripts/validation/*adk_ecc*` | CREATE |
| Skills/README | `packages/frameworks/workflow mgt/skills/**` | CREATE |

---

## 6. Documentation housing

Repository SoT paths; ECC upstream stays reference-install only.

---

## 7. Success criteria

- [x] Five `adk-*` skills shipped with required frontmatter
- [x] Validator + pytest green
- [x] Task ↔ FR-098 ↔ spec ↔ fbuboard consistent

---

## References

- [FR-098](../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [Integration specification](../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)

