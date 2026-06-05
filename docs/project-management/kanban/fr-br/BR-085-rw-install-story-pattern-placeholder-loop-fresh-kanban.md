---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T22:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-085: RW Mode C — Story Pattern Prompt Infinite Loop After Fresh Kanban

**Bug ID:** BR-085  
**Priority:** MEDIUM  
**Severity:** MEDIUM (interactive RW install blocked after fresh kanban; book T03 dry-run)  
**Status:** RESOLVED ✅ (fix **v0.6.9.14+1**; verified **v0.6.9.14+2** — ExpensesTracker T03 interactive replay 2026-06-03)  
**Related:** [BR-083](BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md) · [BR-084](BR-084-rw-install-mode-c-missing-task-doc-pattern.md) · [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) · [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)  
**Implementing Task:** [E06:S09:T14](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085.md)  
**Created:** 2026-06-03  
**Source:** ExpensesTracker T03 replay; ADK `dev` @ `7a24046`; kanban fresh → RW mode C

---

## Summary

After `install_kanban_framework.py --mode fresh`, `install_release_workflow.py --mode c` **loops forever** on the story document pattern prompt when the reader presses **Enter** to accept the fresh-layout default `epics/Epic-\{epic\}/Story-{story:03d}-*.md`.

BR-083/T12 improved detection and defaults but left two gaps that block the **interactive** greenfield path.

---

## Reproduction

1. Fresh kanban install (epics only — no `Story-*.md` files yet).
2. Run RW installer mode C; accept epic default (12 matches).
3. At story pattern, press **Enter** on default `[epics/Epic-\{epic\}/Story-{story:03d}-*.md]`.

**Observed:**

```text
Story document pattern … [epics/Epic-{epic}/Story-{story:03d}-*.md]:
  ❌ Pattern must include placeholder(s): {story}
```

Repeats indefinitely.

---

## Root causes

**File:** `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py`

1. **`validate_required_placeholders`** — substring check `"\{story\}" in value` fails for `{story:03d}` (next character after `y` is `:`, not `}`).
2. **`prompt_pattern_with_validation` + `strict_zero_match`** — fresh kanban creates epics before stories; zero-match story pattern is rejected even when the default is installer-aligned.

---

## Expected

- Enter on `FRESH_KANBAN_STORY_PATTERN` passes placeholder validation.
- Epic-only fresh tree: accept installer-aligned story default with an informational message (no infinite loop).
- ExpensesTracker T03 interactive path completes without `--config` seed workaround.

---

## Workaround (until fix ships)

- `install_release_workflow.py --mode c --config rw-config.seed.yaml` (book dry-run), **or**
- Type `epics/Epic-\{epic\}/Story-\{story\}-*.md` after adding a placeholder `Story-*.md` file.

---

## Acceptance Criteria

- [x] `{story:03d}` satisfies `\{story\}` placeholder requirement.
- [x] Epic-only fresh kanban: Enter on story default completes interactively.
- [x] Tests in `tests/test_install_release_workflow_patterns.py`.
- [x] ExpensesTracker T03 replay passes without manual `rw-config` seed.

**Verification:** ExpensesTracker T03 replay **2026-06-03** — `install_release_workflow.py --mode c` on epic-only kanban; **Enter** on story default → `Accepting installer-aligned default`; `rw-config.yaml` written; **PARTIAL** (workflow YAML only). ADK submodule **22006ee** (`v0.6.9.14+1`). Closed **v0.6.9.14+2**.

---

## Kanban Links

- **Story:** [E06:S09](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration.md)
- **Task:** [E06:S09:T14](../epics/epic-06/story-09-ai-dev-kit-installation-and-adopter-integration/T14-rw-install-story-pattern-loop-br085.md)
