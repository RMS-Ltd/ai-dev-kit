---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 14: RW install story pattern prompt loop (BR-085)

**Task ID:** E06:S09:T14  
**Status:** COMPLETE  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Last updated:** 2026-06-03 (v0.6.9.14+2 – BR-085/083/084 ExpensesTracker T03 verification closure)  
**Completed:** 2026-06-03  
**Version:** v0.6.9.14+2  
**Code:** E06S09T14

**Upstream:** [BR-085](../../../fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)  
**Related:** [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [BR-084](../../../fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [T12](T12-rw-install-pattern-defaults-br083.md) · [T13](T13-rw-install-mode-c-rw-config-generation-br084.md)

---

## Input

- [BR-085](../../../fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)
- ExpensesTracker T03 interactive replay (story pattern Enter loops)
- `install_release_workflow.py` — placeholder validation and strict zero-match paths

---

## Scope

Fix interactive RW mode C story-pattern prompt after fresh kanban install:

1. Recognise formatted placeholders (`{story:03d}`) as satisfying `{story}`.
2. Accept installer-aligned story default when epic files exist but no story files yet.

---

## Deliverable

- `placeholder_names_in_pattern()` + updated `validate_required_placeholders()`
- Epic-only fresh tree escape in `prompt_pattern_with_validation()`
- Regression tests in `tests/test_install_release_workflow_patterns.py`

---

## Acceptance Criteria

- [x] Enter on `FRESH_KANBAN_STORY_PATTERN` passes validation (no `{story}` false negative).
- [x] Epic-only kanban tree: story default accepted under `strict_zero_match`.
- [x] ExpensesTracker T03 interactive install completes without `--config` seed (user replay).

---

## Version Anchor

✅ COMPLETE (v0.6.9.14+2)

---

## Completion Summary

Released **v0.6.9.14+1** (`RW --art E06:S09:T14`): format-aware placeholder validation and epic-only fresh kanban story-default acceptance in `install_release_workflow.py`; regression tests added.

**v0.6.9.14+2:** ExpensesTracker T03 interactive replay verified — epic-only kanban, RW `--mode c`, **Enter** on story default (no `--config` seed); `Accepting installer-aligned default`; `rw-config.yaml` written. Closes **BR-085**; confirms **BR-083** / **BR-084** book-path verification (GitHub #15 / #16).

---

## Related Work

- **[BR-085](../../../fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)** — **Complements** — verification failure on BR-083/084 follow-on from ExpensesTracker replay.
