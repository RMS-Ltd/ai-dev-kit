---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:02Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 13, Task 2: Inventory package components and map to expectations

**Task ID:** E02:S13:T02  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-06-05 (v0.2.13.2+1 — component inventory map)  
**Version:** v0.2.13.2+1  
**Code:** E02S13T02

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S13:T02`

---

## Scope

Inventory `packages/frameworks/workflow-mgt/` components and map them to the [T01 expectations baseline](T01-expectations-baseline.md). Produce a companion artefact with categorized tables and coverage status; summarize expected-vs-actual gaps in this task doc. **Inventory-only** — remediation deferred to T05/T06.

---

## Input

- [T01 expectations baseline](T01-expectations-baseline.md)
- [E07:S07:T01 code review report §1–2](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- Package root: `packages/frameworks/workflow-mgt/`
- [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)

---

## Deliverable

[Component inventory map](component-inventory-map.md) — detailed tables with expected vs actual coverage; gap summary below.

---

## Acceptance Criteria

- [x] Core documentation mapped to expectations baseline.
- [x] KB / methodology guides cataloged with coverage status.
- [x] Workflows (registry, nested, flat legacy) mapped to T01.
- [x] Scripts cataloged by area with purpose and T01 alignment.
- [x] Config, install, and adopter surfaces accounted for.
- [x] Expected vs actual gap table published (feeds T05).

---

## Gap Summary (condensed)

| Topic | Status | Notes |
| ----- | ------ | ----- |
| Validator expansion (4 → 29+) | Partial | README/T01 list subset only |
| `check_changelog_size.py` path | Gap | Docs say `validation/`; lives in `changelog/` |
| `version_registry.py` | Superseded | `build_semver_registry.py` / task-touch tooling |
| UKW 8 vs 9+2.5 steps | Partial | T01 doc lag |
| Journal, task_split, IPW validators | Undocumented | Post-T01 additions |
| Registry `common_components` dirs | Gap | Paths in registry; not on disk |
| 7 flat workflow YAML copies | Gap | FR-050; RW flat deprecated only |
| README vwmp path alias | Gap | `docs/documentation/` vs `KB/Documentation/` |

Full tables: [component-inventory-map.md](component-inventory-map.md).

---

## Version Anchor

✅ COMPLETE (v0.2.13.2+1)

---

## References

- [IPP-E02S13T02](../../../../implementation-cycles/IPP-E02S13T02-inventory-package-components-map.md)
- [Component inventory map](component-inventory-map.md)
- [T01 expectations baseline](T01-expectations-baseline.md)
- [Story 13](../story-13-workflow-management-package-implementation-review.md)
- [E07:S07:T01 report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md`

---

## Kanban documentation setup

**RW -k --art --doc-policy-zero** (2026-06-05 05:32:44 UTC): Version anchor **v0.2.13.2+0**; **kboard.md** M-band row filed for workflow-mgt RC review pipeline.

---

## Verification (V1–V7)

| ID | Result | Evidence |
| -- | ------ | -------- |
| V1 | PASS | Companion §1–7 cover all T01 composition classes |
| V2 | PASS | Script counts: validation 29, kanban 20, changelog 8, version 8, journal 10, root 57 |
| V3 | PASS | 11 registry workflows + flat/nested matrix in companion §3 |
| V4 | PASS | E07 §2 rows in companion Summary + §7 |
| V5 | PASS | Gap rows cite paths or "not found" |
| V6 | PASS | No `packages/frameworks/workflow-mgt/` functional edits |
| V7 | PASS | Bidirectional links task ↔ IPP ↔ companion |
