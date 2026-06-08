---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T04:50:02Z
expires_at: null
housekeeping_policy: keep
---

# Epic 2, Story 13, Task 3: Validate workflow behavior against documented guidance

**Task ID:** E02:S13:T03  
**Status:** ✅ COMPLETE  
**Priority:** HIGH  
**Last updated:** 2026-06-05 (v0.2.13.3+1 — behavior validation report)  
**Version:** v0.2.13.3+1  
**Code:** E02S13T03

---

## Task ID

**Format:** `E{epic}:S{story}:T{task}`

**Full Task ID:** `E02:S13:T03`

---

## Scope

Validate that `packages/frameworks/workflow-mgt/` **runtime and documented behavior** matches the [T01 expectations baseline](T01-expectations-baseline.md) and live ai-dev-kit execution spec (`.cursorrules`, `.claude/commands/`, vwmp guides, validators). Produce a companion validation report with PASS/PARTIAL/FAIL matrix and severity-tagged discrepancies for T05.

**Scope includes:**
- RW gates, step model, validator smoke tests, doc/live parity (post-T08)
- UKW step model, flags, bottom-up order, stamp rules
- CMW deterministic execution and script paths
- Intake script chain and YAML step model
- Config loading cohesion and versioning validator behavior

**Out of scope:** Package fixes (T05/T06); integration alignment (T04); T01 baseline rewrite.

---

## Input

- [T01 expectations baseline](T01-expectations-baseline.md)
- [T02 component inventory](component-inventory-map.md)
- [T08 sync task](T08-sync-packaged-workflows-with-live-repo-implementation.md)
- [E07:S07:T01 machinery review report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [IPP-E02S13T03](../../../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md)
- Live spec: `.cursorrules`, `.claude/commands/rw.md`, `packages/frameworks/workflow-mgt/`

---

## Deliverable

[Workflow behavior validation report](workflow-behavior-validation-report.md) — detailed validation matrix, evidence, E07 crosswalk, and compliance summary.

---

## Acceptance Criteria

- [x] RW behavioral expectations validated (steps, gates, blocking, context, BR-097)
- [x] UKW behavioral expectations validated (step model, flags, bottom-up, stamps)
- [x] CMW behavioral expectations validated (deterministic, non-blocking, script paths)
- [x] Intake behavior validated against scripts/YAML
- [x] Config-driven path behavior assessed (`rw-config.yaml` loading)
- [x] Versioning validator behavior validated (schema, doc-init, semver)
- [x] Doc/live parity re-verified post-T08 (portable excerpts + canonical steps)
- [x] Discrepancies documented with severity levels
- [x] Compliance assessment published in companion report

---

## Gap Summary (condensed)

| Topic | Status | Severity |
| ----- | ------ | -------- |
| RW doc/live + validators | PASS | — |
| UKW live behavior | PASS | — |
| T01 UKW 8-step doc lag | PARTIAL | Low |
| CMW README `validation/` path | PARTIAL | Medium (M2) |
| Intake 7 vs 8 YAML steps | PARTIAL | Medium |
| Flat YAML adopter hazard | PARTIAL | High (H2) |
| Kanban update fragmentation | PARTIAL | High (H3) |
| Config loader duplication | PARTIAL | Medium (M1) |
| CI pytest gate | PASS | H1 partially remediated |

Full matrix: [workflow-behavior-validation-report.md](workflow-behavior-validation-report.md).

---

## Verification (V1–V10)

| ID | Result | Evidence |
| -- | ------ | -------- |
| V1 | PASS | `validate_canonical_steps.py` exit 0 |
| V2 | PASS | Dual-source parity checklist aligned (1b/1c/1d, Step 9) |
| V3 | PASS | branch_context, version_bump --art, resolve_rw_build smoke |
| V4 | PARTIAL | `changelog/check_changelog_size.py` runs; README lists missing `validation/` path |
| V5 | PASS/PARTIAL | Registry 9+2.5 steps PASS; T01 8-step claim PARTIAL |
| V6 | PASS | 113 pytest passed; `workflow-scripts-pytest.yml` CI gate |
| V7 | PARTIAL | 20+ independent `load_rw_config` implementations |
| V8 | PARTIAL | 6 non-deprecated flat workflow YAML copies |
| V9 | PASS | No package functional code changes |
| V10 | PASS | Bidirectional links task ↔ IPP ↔ companion |

---

## Version Anchor

✅ COMPLETE (v0.2.13.3+1)

---

## References

- [IPP-E02S13T03](../../../../implementation-cycles/IPP-E02S13T03-workflow-behavior-validation.md)
- [Workflow behavior validation report](workflow-behavior-validation-report.md)
- [T01 expectations baseline](T01-expectations-baseline.md)
- [T02 component inventory](component-inventory-map.md)
- [E07:S07:T01 report](../../epic-07/story-07-code-reviews/T01-workflow-machinery-code-review-report.md)
- [Story 13](../story-13-workflow-management-package-implementation-review.md)

---

## Migration Notes

Migrated from embedded Story section via `generate_task_doc.py` (FR-016 Wave 1 tooling).

**Source Story:** `docs/kanban/epics/epic-02/story-13-workflow-management-package-implementation-review.md`

---

## Kanban documentation setup

**RW -k --art --doc-policy-zero** (2026-06-05 05:34:28 UTC): Version anchor **v0.2.13.3+0**; **kboard.md** M-band row filed for workflow-mgt RC review pipeline.
