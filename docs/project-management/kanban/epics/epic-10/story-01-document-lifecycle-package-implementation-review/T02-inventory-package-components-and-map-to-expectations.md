---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 2: Inventory package components and map to expectations

**Task ID:** E10:S01:T02  
**Status:** TODO  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.0.0.0+0 – migrated from embedded Story section)  
**Version:** v0.0.0.0+0  
**Code:** E10S01T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T02`

---

## Scope

Inventory `packages/frameworks/doc-lifecycle/` and the FR-110 greenfield mirror; map components to the [T01 expectations baseline](expectations-baseline.md). Produce companion `component-inventory-map.md` with categorized tables and coverage status; summarize expected-vs-actual gaps in this task doc. **Inventory-only** — remediation deferred to T05/T06.

---

## Input

- [T01 expectations baseline](expectations-baseline.md) *(companion — required before implementation)*
- [IPP-E10S01T01](../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) — T01 planning package
- **Implementation plan (IPW):** [IPP-E10S01T02-component-inventory-map.md](../../../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md)
- Coordinator SoT: [E10S01-orchestration-plan.md](../../../../implementation-cycles/E10S01-orchestration-plan.md) — §7.4 T02, §3 Package snapshot
- Package root: `packages/frameworks/doc-lifecycle/`
- Adopter mirror (FR-110): `greenfield-install/packages/frameworks/doc-lifecycle/`
- Structural precedent: [E02:S13 component inventory map](../../epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) · [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)

---

## Deliverable

[Component inventory map](component-inventory-map.md) — detailed tables with expected vs actual coverage; gap summary in this task doc after implementation.

---

## Acceptance Criteria

- [ ] Core package docs mapped to T01 expectations baseline.
- [ ] Policies and templates cataloged with coverage status.
- [ ] Integration guides and `docs/` extensions accounted for.
- [ ] Documented-future workflows/scripts inventoried (on-disk vs expected).
- [ ] Greenfield-install mirror parity documented (FR-110).
- [ ] Expected vs actual gap table published (feeds T05).

---

## Version Anchor

**Forensic Marker Format:** `✅ COMPLETE (vRC.E.S.T+B)`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`

---

## References

- [IPP-E10S01T02-component-inventory-map.md](../../../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md) — IPW planning package (Sections 1–7)
- [E10S01-orchestration-plan.md](../../../../implementation-cycles/E10S01-orchestration-plan.md) — Wave 1 IPW brief §7.4 T02; Wave 2B implementation
- [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md) — structural IPP precedent
- [E02:S13 component inventory map](../../epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) — companion artefact precedent
- [T01 expectations baseline](expectations-baseline.md) — mapping source (T01 must complete first)
- `packages/frameworks/doc-lifecycle/`
- `greenfield-install/packages/frameworks/doc-lifecycle/`

