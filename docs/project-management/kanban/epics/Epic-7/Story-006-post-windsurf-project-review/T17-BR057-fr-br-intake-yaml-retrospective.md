---
lifecycle: evergreen
ttl_days: null
created_at: 2026-03-20T12:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 7, Story 6, Task 17: Retrospective BR-057 — fr-br-intake workflow YAML

**Status:** COMPLETE  
**Priority:** MEDIUM  
**Last updated:** 2026-03-20 (v0.7.6.17+1 – RW)  
**Completed:** 2026-03-20  
**Version:** v0.7.6.17+1  
**Code:** E7S06T17

---

## Task ID

**Full Task ID:** `E7:S06:T17`

---

## Scope

Retrospective traceability for the **fr-br-intake** GitHub Actions workflow YAML repair (invalid `script: |` block scalar), including **BR-057**, kanban updates, and any supporting framework script fixes required for RW validation on `epic/7-codebase-maintenance`.

---

## Input

- GitHub “Invalid workflow file” on `.github/workflows/fr-br-intake.yml` (~line 131).  
- Prior analysis: dedented continuation lines inside `actions/github-script` `script: |`.  
- Branch: `epic/7-codebase-maintenance`; version context E7:S06 prior to T17 bump.

---

## Deliverable

1. [BR-057](../../../fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md) (retrospective BR, COMPLETE).  
2. Corrected `.github/workflows/fr-br-intake.yml` indentation inside the `body` template literal.  
3. Story-006 / Epic-7 / kanban-board markers for this release.  
4. `validate_rw_task_intent.py` available on branch for RW Step 1b; `ukw_syntax_parser.py` free of duplicate `normalize_task_id` stub (if blocking validation).

---

## Acceptance Criteria

- [x] BR-057 filed with root cause and resolution documented.  
- [x] Workflow YAML parses (e.g. PyYAML / GitHub Actions) with no block-scalar break at issue comment step.  
- [x] Task document satisfies kanban task template and links BR + workflow path.  
- [x] Story checklist and Epic 7 Story 6 section include T17 with forensic marker `v0.7.6.17+1`.

---

## Related Work

**Related BR/FR Links:**

- [BR-057: fr-br-intake workflow YAML block scalar](../../../fr-br/BR-057-fr-br-intake-workflow-yaml-block-scalar-indentation.md)

---

## Version Anchor

**Forensic marker:** ✅ COMPLETE (v0.7.6.17+1)  
**SemVer (display):** v0.4.619+1

---

## Completion Summary

- Re-indented multiline strings under `script: |` in `fr-br-intake.yml` so YAML no longer interprets markdown bullets as top-level list items.  
- Filed retrospective BR-057; aligned Epic 7 / Story 6 / board with E7:S06:T17.  
- Repaired duplicate empty `normalize_task_id` definition in `ukw_syntax_parser.py` that broke imports for `validate_rw_task_intent.py`.  
- Added `validate_rw_task_intent.py` from framework lineage for RW Step 1b on this branch.

---

## References

- `.github/workflows/fr-br-intake.yml`  
- `packages/frameworks/workflow mgt/scripts/validation/validate_rw_task_intent.py`
