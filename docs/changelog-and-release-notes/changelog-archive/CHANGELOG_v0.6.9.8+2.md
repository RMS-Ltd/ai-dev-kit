# Changelog v0.6.9.8+2

**Release Date:** 2026-06-03 19:42:21 UTC  
**Epic | Story | Task:** E06:S09:T08 (`RW --art`)  
**SemVer (task_touch):** v0.4.858+2  

## Summary

**Attempted fix (BR-079):** Fresh kanban install resolves Epic **22** and **23** from `templates/Epic-{n}/Epic-{n}.md` instead of placeholder stubs.

## Change implemented

### Framework (kanban installer)

- **`migrate_structure.py`** — `_get_epic_template_file()` search order: `templates/epics/Epic-{n}-*.md` then `templates/Epic-{n}/Epic-{n}.md`
- Clearer success/placeholder/dry-run logging with template path

### Tests

- **`tests/kanban/test_install_epic_22_23_templates.py`** — resolver, full fresh install, dry-run logs (3 tests)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — Epic 22/23 template layout note
- **`packages/frameworks/kanban/README.md`** — dual template path documented

## References

- [BR-079](../project-management/kanban/fr-br/BR-079-kanban-fresh-install-epic-22-23-placeholder-only.md)
- [IPP-E06S09T08](../implementation-cycles/IPP-E06S09T08-br079-epic-22-23-install-templates.md)
- GitHub [#11](https://github.com/RMS-Ltd/ai-dev-kit/issues/11)
