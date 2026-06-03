# Changelog v0.6.9.12+2

**Release Date:** 2026-06-03 19:50:30 UTC  
**Epic | Story | Task:** E06:S09:T12 (`RW --art`)  
**SemVer (task_touch):** v0.4.859+2  

## Summary

**Attempted fix (BR-083):** RW installer mode C detects fresh kanban layout and pre-fills epic/story `rw-config` patterns that match `install_kanban_framework.py` output.

## Change implemented

### Framework (RW installer)

- **`detect_kanban_doc_patterns()`** — score fresh vs legacy patterns; prefer `epics/Epic-{epic}/Epic-{epic}.md` and `Story-{story:03d}-*.md`
- **`detect_kanban_board_default()`** — prefer `kboard.md` when present
- Mode C prompts use detected defaults and reordered suggestions

### Tests

- **`tests/test_install_release_workflow_patterns.py`** — fresh layout detection + board default (4 tests)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — post-kanban RW install snippet
- **`packages/frameworks/workflow mgt/README.md`** — mode C detection note
- **`IPP-E06S09T12-br083-rw-install-pattern-defaults.md`**

## References

- [BR-083](../project-management/kanban/fr-br/BR-083-rw-install-default-patterns-mismatch-fresh-kanban-layout.md)
- [IPP-E06S09T12](../implementation-cycles/IPP-E06S09T12-br083-rw-install-pattern-defaults.md)
- GitHub [#15](https://github.com/RMS-Ltd/ai-dev-kit/issues/15)
