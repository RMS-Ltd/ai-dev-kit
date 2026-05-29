---
lifecycle: evergreen
ttl_days: null
created_at: 2026-05-26T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E6:S09:T04 — Planning: Spec, Tests, Implementation Plan (IPW)

**Host Task:** [`T04-ecc-harness-layer-phase0-compatibility-fr098.md`](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md) **(E6:S09:T04)**  
**Planning for:** [FR-098 — Optional ECC harness layer integration](../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)  
**Status:** Approved (implementation complete 2026-05-26)

---

## 1. Requirements (Ascertained Baseline)

### 1.1 Functional requirements

| ID | Requirement | Source |
|----|-------------|--------|
| RF1 | Phase 0 compatibility evaluation (ECC minimal/core, hooks off, single path) | FR-098-F1 |
| RF2 | Compatibility matrix with dispositions | FR-098-F2 |
| RF3 | `ecc-adk-bridge.yaml` template | FR-098-F3 |
| RF4 | Checklist A–G with evidence | T04 AC1 |
| RF5 | GO/NO-GO for Phase 1 | T04 AC4 |
| RF6 | Reproducible procedure | FR-098-F1 |
| RF7 | Follow-on T05 if GO | Checklist G4 |
| RF8 | Overt ECC MIT attribution | User / RNF3 |

### 1.2 Non-functional requirements

RNF1–RNF6 per FR-098: optional integration, ADK validators authoritative, no ECC fork, single install path, no undocumented dual install on shared branches, respectful ECC credit.

### 1.3 Invariants and boundaries

ADK owns RW/UKW/IPW, Kanban, versioning, validators. Out of scope: Phase 1 skill pack implementation, greenfield installer, ECC Pro.

---

## 2. Specification

### 2.1 Goal

Prove ADK + ECC coexistence and publish normative spec + empirical evaluation + bridge template.

### 2.4 Status transition intent

- **TODO → IN PROGRESS:** First implementation step
- **→ COMPLETE:** All T04 ACs with evidence; RW releases on E6:S09:T04

**Delivered specification:** [ecc-adk-harness-layer-integration-specification.md](../architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md)

**Delivered evaluation:** [ecc-adk-harness-layer-phase0-evaluation.md](../architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md)

---

## 3. Test design

Checklist-driven verification (V1–V10). No new pytest module. `--skip-tests` not used — verification via validators + dry-run + catalog analysis.

| ID | Check | Result |
|----|-------|--------|
| V1 | `validate_branch_context.py --strict` | PASS |
| V2 | ECC dry-run install plan | PASS (npm 1.10.0, profile `core`) |
| V3–V7 | Matrix + collisions + governance | PASS (see evaluation) |
| V10 | Attribution in §5 docs | PASS |

---

## 4. Implementation plan

| Step | Action | Status |
|------|--------|--------|
| **1** | Task `TODO → IN PROGRESS` | Done |
| 2 | Wire IPP ↔ task | Done |
| 3–7 | Spike / dry-run / checklist | Done (dry-run only) |
| 8 | CREATE formal spec D-C2 | Done |
| 9 | CREATE evaluation D-C3 | Done |
| 10 | CREATE bridge template D-C4 | Done |
| 11 | UPDATE D-U4–D-U10 | Done |
| 12 | T05 stub if GO | Done (GO) |
| 13 | FR-098 F1–F3 evidence | Done |
| **17** | Reconcile task → COMPLETE on RW | Pending RW |

---

## 5. Documentation deliverables

| Doc ID | Path | Action |
|--------|------|--------|
| D-C1 | `docs/implementation-cycles/IPP-E6S09T04-ecc-harness-layer-phase0-fr098.md` | CREATE (this file) |
| D-C2 | `docs/architecture/standards-and-adrs/ecc-adk-harness-layer-integration-specification.md` | CREATE |
| D-C3 | `docs/architecture/standards-and-adrs/ecc-adk-harness-layer-phase0-evaluation.md` | CREATE |
| D-C4 | `packages/frameworks/workflow mgt/config/ecc-adk-bridge.yaml.template` | CREATE |
| D-U1–D-U10 | Kanban + README + guides + ADR-003 | UPDATE |

---

## 6. Documentation housing

All CREATE paths under `docs/architecture/standards-and-adrs/` (spec + evaluation) and `packages/frameworks/workflow mgt/config/` (bridge). Publication: NOT_APPLICABLE (repo SoT; Docusaurus deferred per BR-066).

---

## 7. Success / verification criteria

- [x] Checklist A–G filled (T04 task doc)
- [x] Conflict documented with bridge rules (git-workflow)
- [x] Matrix covers 7 skills + rules + commands
- [x] GO memo in evaluation §1
- [x] No ECC files merged to repo (dry-run only)
- [x] IPP bidirectional links
- [x] FR-098-F1–F3 evidence linked
- [x] D-C2, D-C3, D-U4–D-U9 updated

---

## References

- [FR-098](../project-management/kanban/fr-br/FR-098-ecc-optional-harness-layer-integration.md)
- [T04](../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T04-ecc-harness-layer-phase0-compatibility-fr098.md)
- [ECC](https://github.com/affaan-m/ECC) (MIT)
- [ADR-003](../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md)
