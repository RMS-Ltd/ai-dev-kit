---
version: 0.6.9.14+1
semver: 0.4.863+1
date: 2026-06-03
epic: 6
story: 9
task: 14
build: 1
type: functional
art: true
---

# CHANGELOG v0.6.9.14+1 — RW Install Story Pattern Prompt Loop (BR-085)

**Release Date:** 2026-06-03 23:00:21 UTC  
**Epic:** E06 (ADK Installation and Adopter Integration)  
**Story:** S09 (Installation and adopter integration)  
**Task:** T14 (RW install story pattern prompt loop — BR-085)  
**Build:** 1  
**Adopt Requested Task:** `--art` (E06:S09:T14)

---

## Summary

Attempted fix for interactive RW mode C **infinite loop** on the story document pattern prompt after fresh kanban install (ExpensesTracker T03 replay). Formatted placeholders (`{story:03d}`) now satisfy `{story}` validation; epic-only fresh trees accept the installer-aligned story default.

---

## Changes

### Framework — RW installer

- **`install_release_workflow.py`**
  - Added `placeholder_names_in_pattern()` for format-aware placeholder checks
  - Updated `validate_required_placeholders()` — `{story:03d}` no longer false-fails `{story}` requirement
  - `prompt_pattern_with_validation()` — accepts aligned default when no story files exist yet (normal after fresh kanban)

### Tests

- **`tests/test_install_release_workflow_patterns.py`**
  - Regression tests for formatted story token and epic-only fresh tree prompt acceptance

### Kanban / governance

- **BR-085** filed; **E06:S09:T14** task doc
- **BR-083 / BR-084** — verification failure noted (ExpensesTracker replay); follow-on to T14

---

## Acceptance Criteria

- [x] Enter on `FRESH_KANBAN_STORY_PATTERN` passes validation
- [x] Epic-only fresh kanban: story default accepted under strict mode
- [x] Unit tests pass
- [ ] ExpensesTracker T03 interactive replay without `--config` seed (user verification)

---

## References

- [BR-085](../../project-management/kanban/fr-br/BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md)
- [E06:S09:T14](../../project-management/kanban/epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085.md)
