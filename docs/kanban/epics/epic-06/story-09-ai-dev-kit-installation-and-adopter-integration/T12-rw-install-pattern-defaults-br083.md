---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:45:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 12: RW install rw-config pattern defaults (BR-083)

**Task ID:** E06:S09:T12  
**Status:** COMPLETE (pending user verification on book replay)  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Code:** E06S09T12

**Upstream:** [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [GitHub #15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15)  
**IPW:** [IPP-E6S9T12-br083-rw-install-pattern-defaults.md](../../../../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md) — **Publication Status: PUBLISHED**

## Version Anchor

**Version:** v0.6.9.12+2 (RW --art)

---

## Scope

Align RW installer default epic/story `rw-config` patterns with fresh kanban install directory layout.

---

## Input

- [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
- Post-kanban-install directory layout from fresh mode

---

## Deliverable

- Mode C defaults or detection for `Epic-\{epic\}/Epic-\{epic\}.md` and `Story-{story:03d}-*.md`
- Install doc snippet for post-kanban RW install

---

## Acceptance Criteria

- [x] Mode C suggests or defaults to `Epic-\{epic\}/Epic-\{epic\}.md` and `Story-{story:03d}-*.md` when detected.
- [x] Post-kanban-install snippet in install docs.

## Implementation notes (2026-06-03)

- `detect_kanban_doc_patterns()`, `detect_kanban_board_default()` in `install_release_workflow.py`
- Tests: `tests/test_install_release_workflow_patterns.py`

---

## Links

- [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
- [IPP-E6S9T12](../../../../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
