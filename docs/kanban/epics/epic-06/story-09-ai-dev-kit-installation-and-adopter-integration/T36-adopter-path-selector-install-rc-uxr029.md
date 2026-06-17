---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-15T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# E06:S09:T36 — Adopter Path Selector + Install RC (UXR-029)

**Task ID:** E06:S09:T36  
**Status:** IN PROGRESS (kit Phase 0 @ v0.6.9.36+3; AC7 SBL attempt 10 pending)  
**Priority:** HIGH  
**Created:** 2026-06-15  
**Last updated:** 2026-06-15 (v0.6.9.36+3 — INSTALL + orchestrator blind KMA alignment; AC7 pending)  
**Code:** E06S09T36  
**Version anchor:** **v0.6.9.36+3** (SemVer **v0.4.1168+3**)

**Parent program:** [E06:S09:T26](T26-starborn-legacy-adk-install-program.md) · [Issue #52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52)

**Source UXR:** [UXR-029](../../../fr-br/UXR-029-adk-install-path-experiment.md)

**Primary evidence:** [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md) · [attempt-09 index](../../../../../../adk-install-into-sbl/attempt-09/README.md)

**Related:** [ADR-030](../../../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) · [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Summary

Deliver the **Adopter Path Selector**, **layered install sequence**, and **Install RC checklist** extensions from SBL attempt 09 PRIMARY synthesis — making Arm A / Arm B / strangler coexist a documented, measurable programme (not issue-comment-only).

---

## Input

- SBL attempt 09 PRIMARY synthesis ([#52](https://github.com/RMS-Ltd/ai-dev-kit/issues/52))
- [UXR-029](../../../fr-br/UXR-029-adk-install-path-experiment.md)
- [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md)
- [ADR-003](../../../../architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) · [FR-080](../../../fr-br/FR-080-greenfield-installation-process.md) · [FR-081](../../../fr-br/FR-081-brownfield-modular-adopter-integration.md)

---

## Deliverable

- Adopter Path Selector (INSTALL + ADR-030)
- Install RC checklist (`validate_install_rc.py` + YAML + governance doc)
- `DOCUMENTATION_SCHEMA.md`
- Orchestrator Phase 0 flags (`install_greenfield_path.py`)
- `init_release_state_db.py`
- Attempt-10 / brownfield preflight guides
- Maintainer KB mirror + attempt indexes

---

## Scope

**In scope:**

- INSTALL Path Selector + layered sequence sections
- ADR-030 three-path policy
- Maintainer KB mirror + attempt-09 index
- UXR-029 formal experiment spec
- Install RC checklist rows for Arm B (document spec; orchestrator wiring Phase 0)

**Out of scope:**

- Orchestrator code changes (separate Phase 0 tasks / child FRs from #52 FB items)
- `DOCUMENTATION_SCHEMA.md` publication — ✅ [docs/governance/standards/DOCUMENTATION_SCHEMA.md](../../../../governance/standards/DOCUMENTATION_SCHEMA.md)
- SBL attempt 10 execution (operator)

---

## Deliverables

| # | Deliverable | Status |
|---|-------------|--------|
| 1 | [greenfield-brownfield-selective-adoption-sbl-attempt-09.md](../../../../knowledge/articles/greenfield-brownfield-selective-adoption-sbl-attempt-09.md) | ✅ Mirrored |
| 2 | [adk-install-into-sbl/attempt-09/README.md](../../../../../../adk-install-into-sbl/attempt-09/README.md) | ✅ Index |
| 3 | [UXR-029](../../../fr-br/UXR-029-adk-install-path-experiment.md) | ✅ Filed |
| 4 | [ADR-030](../../../../architecture/standards-and-adrs/ADR-030-selective-adoption-three-path-model.md) | ✅ Draft accepted |
| 5 | INSTALL Adopter Path Selector + layered sequence | ✅ Initial |
| 6 | Install RC checklist Arm B rows | ✅ YAML + validator + governance doc |
| 7 | Orchestrator layered sequence implementation | ✅ Phase 0 partial (sqlite, RC, adoption-path) — **follow-on:** [E06:S09:T38](T38-guided-install-orchestrator-fr135.md) / [FR-135](../../../fr-br/FR-135-guided-install-orchestrator-zero-manual-steps.md) (UKW/KMA/ledgers/comprehension in orchestrator) |

---

## Acceptance criteria

- [x] **AC1:** UXR-029 filed with bidirectional link to this task.
- [x] **AC2:** PRIMARY blog mirrored to `docs/knowledge/articles/` per ADR-026.
- [x] **AC3:** ADR-030 published; ADR-003 cross-linked.
- [x] **AC4:** INSTALL contains Adopter Path Selector (Paths 1–3) + layered sequence.
- [x] **AC5:** Install RC checklist extended with Arm B blocking rows.
- [x] **AC6:** Greenfield orchestrator implements Phase 0 layered steps (sqlite, adoption-path, Install RC gate).
- [x] **AC7:** SBL attempt 10 Arm B replay — 0 ad-hoc KMA scripts; RC PASS target. ✅ Satisfied @ attempt 10 (`v0.4.1171`); closed via [T26](T26-starborn-legacy-adk-install-program.md) @ **v0.6.9.26+4**.

---

## Phase 0 dependencies (#52 feedback)

| FB ID | T36 linkage |
|-------|-------------|
| `FB-ADK-greenfield-sqlite-before-rw` | Layered step 2; RC row |
| `FB-ADK-canonical-maintainer-documentation-schema` | Layered step 3½ |
| `FB-ADK-optimal-greenfield-install-sequence` | Layered sequence section |
| `UXR-ADK-install-path-experiment` | UXR-029 (this intake) |
| `FB-ADK-install-paths-industry-patterns` | KB article mirror |

---

## RW trigger

```
RW E06:S09:T36
```

(After AC5+ implementation waves complete.)
