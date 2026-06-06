---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T05:04:11Z
expires_at: null
housekeeping_policy: keep
---

# Epic 10, Story 1, Task 2: Inventory package components and map to expectations

**Task ID:** E10:S01:T02  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-06 (v0.10.1.2+1 – component inventory map)  
**Version:** v0.10.1.2+1  
**Code:** E10S01T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E10:S01:T02`

---

## Scope

Inventory `packages/frameworks/doc-lifecycle/` and the FR-110 greenfield mirror; map components to the [T01 expectations baseline](expectations-baseline.md). Produce companion `component-inventory-map.md` with categorized tables and coverage status; summarize expected-vs-actual gaps in this task doc. **Inventory-only** — remediation deferred to T05/T06.

**Scope includes:**
- Structured walk of canonical package (13 on-disk files) and greenfield mirror parity
- Map each component to T01 baseline sections with coverage status (`Met` | `Partial` | `Gap` | `Undocumented` | `Superseded`)
- Flag documented-but-absent workflows/scripts and on-disk-but-underdocumented artefacts
- Publish gap summary table feeding T05 remediation

**Out of scope:**
- Package fixes, validator implementation, workflow YAML creation (T05/T06/Wave 3)
- Repo frontmatter behavioural validation (T03)
- Architecture ADR vs package policy drift resolution (T04)

---

## Input

- [T01 expectations baseline](expectations-baseline.md) — mapping source (T01 complete v0.10.1.1+1)
- [IPP-E10S01T01](../../../../implementation-cycles/IPP-E10S01T01-expectations-baseline-doc-lifecycle.md) — T01 planning package
- **Implementation plan (IPW):** [IPP-E10S01T02-component-inventory-map.md](../../../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md)
- Coordinator SoT: [E10S01-orchestration-plan.md](../../../../implementation-cycles/E10S01-orchestration-plan.md) — §7.4 T02, §3 Package snapshot
- Package root: `packages/frameworks/doc-lifecycle/`
- Adopter mirror (FR-110): `greenfield-install/packages/frameworks/doc-lifecycle/`
- Structural precedent: [E02:S13 component inventory map](../../epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) · [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)

---

## Deliverable

[Component inventory map](component-inventory-map.md) — detailed tables with expected vs actual coverage; gap summary below.

---

## Acceptance Criteria

- [x] Core package docs mapped to T01 expectations baseline.
- [x] Policies and templates cataloged with coverage status.
- [x] Integration guides and `docs/` extensions accounted for.
- [x] Documented-future workflows/scripts inventoried (on-disk vs expected).
- [x] Greenfield-install mirror parity documented (FR-110).
- [x] Expected vs actual gap table published (feeds T05).

---

## Gap Summary (condensed)

| Topic | Status | Notes |
| ----- | ------ | ----- |
| `workflows/doc-housekeeping-workflow.yaml` | Gap | Documented in README/PACKAGE_OVERVIEW; not on disk |
| `scripts/validate_lifecycle_metadata.py` | Gap | PACKAGE_OVERVIEW §Scripts; not on disk |
| `scripts/housekeeping_scanner.py` | Gap | PACKAGE_OVERVIEW §Scripts; not on disk |
| `docs/policy-salience-*` + salience template | Undocumented | On disk; README/PACKAGE_OVERVIEW trees omit `docs/` and POLICY_SALIENCE template |
| `PACKAGE_PROPOSAL.md` | Partial | On disk; header status still "Proposal" |
| README / PACKAGE_OVERVIEW tree accuracy | Partial | Lists future workflows/scripts; omits on-disk salience artefacts |
| Repo ADRs vs package policies | Partial | Duplicate SoT paths — T04 cross-check |
| Greenfield-install mirror (FR-110) | Met | 13/13 files; `diff -rq` identical |

Full tables: [component-inventory-map.md](component-inventory-map.md).

---

## Version Anchor

✅ COMPLETE (v0.10.1.2+1)

---

## Verification (V1–V8)

| ID | Result | Evidence |
| -- | ------ | -------- |
| V1 | PASS | Companion Summary + §1–7 cover all T01 Package Composition classes |
| V2 | PASS | Canonical 13 files; greenfield mirror 13 files; `find` + `diff -rq` match companion manifest |
| V3 | PASS | §6 lists 3 documented-future artefacts with **Gap** status and "not on disk" evidence |
| V4 | PASS | Summary table includes orchestration §3.2 rows + salience drift + mirror parity |
| V5 | PASS | Gap/Undocumented rows cite paths or "not found" |
| V6 | PASS | No edits to `packages/frameworks/doc-lifecycle/` or greenfield mirror |
| V7 | PASS | Bidirectional links task ↔ IPP ↔ companion resolve |
| V8 | PASS | Each companion section cites T01 baseline section in Notes/T01 ref column |

**Verified:** 2026-06-06 by E10:S01:T02 implementation agent.

---

## References

- [IPP-E10S01T02-component-inventory-map.md](../../../../implementation-cycles/IPP-E10S01T02-component-inventory-map.md) — IPW planning package (Sections 1–7)
- [Component inventory map](component-inventory-map.md) — detailed inventory artefact
- [E10S01-orchestration-plan.md](../../../../implementation-cycles/E10S01-orchestration-plan.md) — Wave 1 IPW brief §7.4 T02; Wave 2B implementation
- [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md) — structural IPP precedent
- [E02:S13 component inventory map](../../epic-02/story-13-workflow-management-package-implementation-review/component-inventory-map.md) — companion artefact precedent
- [T01 expectations baseline](expectations-baseline.md) — mapping source
- `packages/frameworks/doc-lifecycle/`
- `greenfield-install/packages/frameworks/doc-lifecycle/`

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/project-management/kanban/epics/epic-10/story-01-document-lifecycle-package-implementation-review.md`
