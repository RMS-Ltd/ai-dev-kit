---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 6, Story 9, Task 13: RW install Mode C — rw-config generation (BR-084)

**Task ID:** E06:S09:T13  
**Status:** COMPLETE (pending user verification on book replay)  
**Priority:** MEDIUM  
**Created:** 2026-06-03  
**Code:** E06S09T13

**Upstream:** [BR-084](../../../fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [GitHub #16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)  
**Related:** [BR-083](../../../fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) (E06:S09:T12)

## Version Anchor

**Version:** v0.6.9.13+2 (RW --art)

---

## Scope

Fix `install_release_workflow.py` mode C so generated `rw-config.yaml` includes `task_doc_pattern`, detects fresh-kanban layout, and does not persist zero-match patterns without guardrails.

---

## Input

- [BR-084](../../../fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md)
- [GitHub #16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)
- **IPW:** [IPP-E6S9T13-br084-rw-config-generation.md](../../../../../implementation-cycles/IPP-E06S09T13-br084-rw-config-generation.md) — **Publication Status: PUBLISHED**
- `generate_rw_config_yaml`, `collect_config_interactive`, `prompt_pattern_with_validation`

---

## Deliverable

- `generate_rw_config_yaml` emits `task_doc_pattern` (+ optional `fr_br_root`) for kanban installs
- Layout detection or safe defaults aligned with fresh kanban output
- Guardrails when pattern match count is 0

---

## Acceptance Criteria

- [x] Mode C after fresh kanban: epic pattern matches `epics/epic-01/epic-01.md` without manual edit (T12 detection + strict zero-match).
- [x] Generated config includes `task_doc_pattern` and `fr_br_root` when `fr-br/` exists.
- [x] Integration test: temp repo fresh layout + `generate_rw_config_yaml` (epic glob ≥1).

## Implementation notes (2026-06-03)

- `detect_kanban_supplementary_defaults()`, `generate_rw_config_yaml` kanban keys, `strict_zero_match` on mode C prompts.
- Tests: `tests/test_install_release_workflow_rw_config.py`.

---

## Links

- [BR-084](../../../fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md)
- [IPP-E6S9T13](../../../../../implementation-cycles/IPP-E06S09T13-br084-rw-config-generation.md)
- [Story 009](../story-09-ai-dev-kit-installation-and-adopter-integration.md)
