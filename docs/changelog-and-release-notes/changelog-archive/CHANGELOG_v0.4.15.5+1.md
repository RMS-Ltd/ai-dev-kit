# Changelog: v0.4.15.5+1

**Release Date:** 2026-06-05 18:45:00 UTC  
**Version:** v0.4.15.5+1  
**Epic:** E4 (Kanban Framework)  
**Story:** S15 (Procedural Task Template Generation and Hybrid Strategy)  
**Task:** T05 (Document hybrid strategy and usage for maintainers and clients)  
**Build:** +1

---

## Summary

Change implemented for **FR-029** hybrid task template system: generator path resolution aligned to lowercase on-disk layouts, maintainer/adopter guide published, installer `--generate-task-templates` flag wired, and four-surface kanban reconciliation for E04:S15:T05.

---

## Changes

### Generator path fix

- `kanban_paths.resolve_template_task_file` — canonical lowercase `epic-NN/story-NN/` resolution
- `generate_task_templates.py` — write paths match on-disk template layout
- Validation: **378/378** templates, 0 structure invalid

### Documentation and installer

- `packages/frameworks/kanban/docs/hybrid-task-template-guide.md` — maintainer and adopter usage
- `install_kanban_framework.py` — `--generate-task-templates` / `--generate-task-templates-overwrite`
- Package README and scripts README updated

### Tests

- `packages/frameworks/kanban/scripts/test_generate_task_templates.py` — path resolution and CLI coverage

### Kanban / planning

- IPP: `docs/implementation-cycles/IPP-E04S15T05-hybrid-strategy-docs-and-generator-integration.md`
- Task doc, FR-029, story checklist, `kboard.md` prune, completion ledgers reconciled

---

## Related

- [FR-029](../../project-management/kanban/fr-br/FR-029-procedural-task-template-generation-hybrid-strategy.md)
- [IPP-E04S15T05](../implementation-cycles/IPP-E04S15T05-hybrid-strategy-docs-and-generator-integration.md)
