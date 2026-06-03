---
lifecycle: evergreen
ttl_days: null
created_at: 2026-06-03T17:40:00Z
expires_at: null
housekeeping_policy: keep
---

# Bug Report BR-083: RW Install Default Epic/Story Patterns Mismatch Fresh Kanban Layout

**Bug ID:** BR-083  
**Priority:** MEDIUM  
**Severity:** MEDIUM (wrong rw-config defaults after fresh kanban install)  
**Status:** OPEN (INTAKE)  
**GitHub Issue:** [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15)  
**Related:** [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16) → [BR-084](BR-084-rw-install-mode-c-missing-task-doc-pattern.md) / **E06:S09:T13** (persisted YAML + `task_doc_pattern`)  
**Implementing Task:** [E06:S09:T12](../epics/Epic-6/Story-009-ai-dev-kit-installation-and-adopter-integration/T12-rw-install-pattern-defaults-br083.md)  
**Created:** 2026-06-03  
**Source:** Book dry-run T03 after `install_kanban_framework.py --mode fresh`; ADK `dev` @ `84efa7b`

---

## Summary

RW installer mode C defaults (`epics/Epic-{epic}.md`, `epics/Epic-{epic}/stories/Story-{story}-*.md`) do not match fresh kanban install output (`Epic-{epic}/Epic-{epic}.md`, `Story-{story:03d}-*.md` under epic folder).

---

## Actual layout after fresh install

- `docs/project-management/kanban/epics/Epic-1/Epic-1.md`
- `docs/project-management/kanban/kboard.md`
- (no `stories/` subfolder)

## RW installer defaults (mode C)

- Epic: `epics/Epic-{epic}.md` — **no match**
- Story: `epics/Epic-{epic}/stories/Story-{story}-*.md` — **no match**

## Expected

- Detect fresh-install layout and suggest matching patterns, **or**
- Cross-link kanban CONTEXTUALIZATION / post-install `rw-config` snippet.

## Workaround (book packet)

```yaml
epic_doc_pattern: epics/Epic-{epic}/Epic-{epic}.md
story_doc_pattern: epics/Epic-{epic}/Story-{story:03d}-*.md
```

## Acceptance Criteria

- [ ] RW installer detects or defaults to kanban-installer layout.
- [ ] Fresh-install docs include copy-paste `rw-config.yaml` kanban keys.
- [ ] No silent wrong defaults requiring manual `y` to incorrect paths.
