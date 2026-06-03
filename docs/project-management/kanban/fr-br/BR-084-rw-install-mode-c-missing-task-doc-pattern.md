---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T20:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-084: RW Mode C — Missing task_doc_pattern and Wrong Patterns Persisted

**Bug ID:** BR-084  
**Priority:** MEDIUM  
**Severity:** MEDIUM (broken `rw-config.yaml` after fresh kanban + RW install)  
**Status:** RESOLVED ✅ (fix **v0.6.9.13+2** + **BR-085** **v0.6.9.14+1**; verified **v0.6.9.14+2** — ExpensesTracker T03 replay 2026-06-03)  
**GitHub Issue:** [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)  
**Related:** [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15) (BR-083 — prompt defaults) · [BR-085](BR-085-rw-install-story-pattern-placeholder-loop-fresh-kanban.md) (story prompt infinite loop)  
**Implementing Task:** [E06:S09:T13](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T13-rw-install-mode-c-rw-config-generation-br084.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run (ExpensesTracker); ADK `dev` @ `84efa7b`; kanban fresh → RW mode C

---

## Summary

After `install_kanban_framework.py --mode fresh`, `install_release_workflow.py --mode c` can write a **broken** kanban section in `rw-config.yaml`: epic/story patterns that do not match installed files, and **no** `task_doc_pattern` (required by RW validators and full-stack adopters).

---

## On disk after fresh kanban

```text
docs/project-management/kanban/
  kboard.md
  epics/Epic-1/Epic-1.md
  epics/Epic-2/Epic-2.md
  …
```

No `epics/Epic-1/stories/` directory.

## Actual generated kanban section (reader run)

```yaml
use_kanban: true
kanban_root: docs/project-management/kanban
epic_doc_pattern: epics/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/stories/Story-{story}-*.md
kanban_board: kboard.md
```

Missing: `task_doc_pattern`, `fr_br_root`.

## Root causes (code)

**File:** `packages/frameworks/workflow mgt/scripts/install_release_workflow.py`

1. **`collect_config_interactive` (mode C)** — defaults/suggestions omit `epics/Epic-{epic}/Epic-{epic}.md`.
2. **`prompt_pattern_with_validation`** — user can answer **y** to “Use this pattern anyway?” with 0 matches; invalid pattern is **persisted**.
3. **`generate_rw_config_yaml`** — omits `task_doc_pattern` (and optionally `fr_br_root`) when `use_kanban: true`.

## Expected

- Detect `epics/Epic-*/Epic-*.md` after fresh kanban and pre-fill aligned patterns.
- Emit `task_doc_pattern: epics/Epic-{epic}/Story-{story}/T{task}-*.md` (or installer-aligned variant).
- Do not silently persist 0-match patterns without loud warning or block.

## Workaround

Manual edit `rw-config.yaml` after install (ai-dev-kit-book T03 Step 4.1).

## Acceptance Criteria

- [x] Fresh kanban → RW mode C → epic pattern matches `epics/Epic-1/Epic-1.md` without manual edit (T12 + T13).
- [x] Generated config includes `task_doc_pattern` (+ `fr_br_root` when `fr-br/` exists).
- [x] Integration test: `tests/test_install_release_workflow_rw_config.py`.

**Verification:** ExpensesTracker T03 replay **2026-06-03** — generated `rw-config.yaml` includes `task_doc_pattern` and aligned epic/story patterns. Closed **v0.6.9.14+2** (GitHub #16).
