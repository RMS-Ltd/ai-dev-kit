---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:02Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 13, Task 4: Review integrations and dependency alignment

**Task ID:** E02:S13:T04  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (v0.2.13.4+1 — integration alignment report)  
**Version:** v0.2.13.4+1
**Code:** E02S13T04

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S13:T04`

---

## Scope

Review whether the Workflow Management package (`packages/frameworks/workflow-mgt/`) **integrates as documented** with hard and soft dependencies, `rw-config.yaml`, sibling frameworks (Kanban, Numbering & Versioning), cross-workflow surfaces, and adopter packaging models.

**In scope:**

- Hard dependencies (Git, Python, PyYAML, installer venv)
- Soft dependency: Numbering & Versioning (version schema, SemVer/task-touch, validators)
- Soft dependency: Kanban (RW Step 7, UKW, intake board integration, config keys)
- Three-way stack integration (Mode C / full forensic traceability)
- `rw-config.yaml` as integration hub (modes A/B/C, path patterns)
- Cross-workflow integrations (Intake, PIR, PVW, CMW, ECC optional harness)
- External services (GitHub release, CI templates)
- Adopter packaging (copy, submodule, CLI, brownfield path mapping)
- Cohesion gaps affecting integration (E07 H3 kanban paths, M1 config loaders)

**Out of scope:** Package fixes; behavioral re-validation (T03); consolidated gap log (T05); RC sign-off (T06).

---

## Input

- [T01 expectations baseline](T01-expectations-baseline.md) — §Integration Expectations
- [T02 component inventory](component-inventory-map.md)
- [T03 behavior validation report](workflow-behavior-validation-report.md) — D9, D11
- [E07:S07:T01 code review report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md) — §Integration alignment, H3, M1
- Package integration docs: `packages/frameworks/workflow-mgt/README.md`, `config/rw-config-schema.md`, `workflows/workflow-registry.yaml`
- Live reference config: `rw-config.yaml` (project root)
- [IPP-E02S13T04](../../../../implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md)

---

## Deliverable

1. **Integration alignment report** — [`integration-alignment-report.md`](integration-alignment-report.md) (companion; detailed matrix)
2. **Task executive summary** — compliance table below

---

## Executive Summary

Integration contracts are **ALIGNED** for hard deps, versioning, kanban config keys, three-way traceability, adopter packaging, and external services. **Cohesion gaps** remain: H3 kanban update fragmentation (High), M1 config loader duplication (Medium), registry `common_components` absent (Medium), README Kanban Step 4 vs Step 7 drift (Medium). **Conditional pass** — feeds T05 gap log via report §Summary (I1–I16).

---

## Acceptance Criteria

- [x] Hard and soft dependencies reviewed against T01/README with ALIGNED/PARTIAL/GAP per domain
- [x] `rw-config.yaml` integration keys validated against schema and live ai-dev-kit config
- [x] Three-way integration traceability documented (version ↔ kanban ↔ release)
- [x] Cross-workflow integration surfaces scored (Intake, PIR, PVW, ECC optional)
- [x] E07 H3/M1 and T03 D9/D11 cross-walked into integration severity table
- [x] Companion report published; feeds T05 gap log
- [x] IPP bidirectionally linked
- [x] Forensic release via `RW E02:S13:T04 --art`

---

## Verification checklist (V1–V12)

| ID | Check | Status |
| -- | ----- | ------ |
| V1 | Hard deps documented | PASS |
| V2 | rw-config schema vs live config | PASS |
| V3 | Versioning integration smoke | PASS |
| V4 | Kanban integration keys | PASS |
| V5 | Three-way narrative trace | PASS |
| V6 | Cross-workflow registry | PARTIAL |
| V7 | Intake→Kanban | PASS |
| V8 | Config loader fragmentation (M1) | PARTIAL |
| V9 | Kanban path fragmentation (H3) | PARTIAL |
| V10 | Adopter packaging scenarios | PASS |
| V11 | ECC optional integration (FR-098) | PASS |
| V12 | Task ↔ IPP ↔ companion wiring | PASS |

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md`

---

## Kanban documentation setup

**RW -k --art --doc-policy-zero** (2026-06-05 05:35:14 UTC): Version anchor **v0.2.13.4+0**; **kboard.md** M-band row filed for workflow-mgt RC review pipeline.

---

## References

- [Story 13 — Workflow Management Package Implementation Review](../story-13-workflow-management-package-implementation-review.md)
- [Integration alignment report](integration-alignment-report.md)
- [IPP-E02S13T04](../../../../implementation-cycles/IPP-E02S13T04-integration-dependency-alignment.md)
- [framework-dependency-architecture.md](../../../../architecture/standards-and-adrs/framework-dependency-architecture.md)
- [FR-098 — ECC optional harness layer](../../../fbu/FR-098-ecc-optional-harness-layer-integration.md)
