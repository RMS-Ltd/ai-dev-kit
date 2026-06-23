---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-05T14:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Task E04:S08:T05 — Migration Plan Presentation (FR-009)

**Task ID:** E04:S08:T05  
**Status:** COMPLETE  
**Priority:** LOW  
**Feature Request:** [FR-009](../../../fbu/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md)

**Planning artifact (IPP):** [IPP-E04S08T05-migration-plan-presentation-fr009.md](../../../../implementation-cycles/IPP-E04S08T05-migration-plan-presentation-fr009.md)

Publication Status: NOT_APPLICABLE  
Publication N/A Reason: Framework installer UX; no Docusaurus user-doc surface required.

---

## Scope

Deliver test-covered migration plan presentation in the Kanban installer: semantic match bands, conflict summary, recommended mode, mode trade-offs, and planned steps — closing FR-009 AC-10 and fixing the `medium_matches` NameError in `present_migration_plan()`.

---

## Input

- Analysis report JSON from `analyze_structure.py`.
- [FR-009](../../../fbu/FR-009-intelligent-epic-matching-ai-assisted-canonical-adoption.md) AC-10.
- [IPP-E04S08T05](../../../../implementation-cycles/IPP-E04S08T05-migration-plan-presentation-fr009.md)

---

## Deliverable

- `migration_plan_presenter.py` with `format_migration_plan_preview()`.
- Refactored `present_migration_plan()` in `install_kanban_framework.py`.
- `tests/kanban/test_migration_plan_presentation.py` (T1–T7).

---

## Acceptance Criteria

- [x] FR-009 AC-10: migration plan clearly presents recommendations and trade-offs before mode selection.
- [x] No NameError when `semantic_matches` is non-empty.
- [x] pytest T1–T7 pass.
- [x] kboard/story/FR surfaces reconciled on release.

**Version anchor:** v0.4.8.5+1

---

## References

- [Story 8](../story-08-intelligent-epic-matching-canonical-adoption.md)
- `packages/frameworks/kanban/scripts/migration_plan_presenter.py`
