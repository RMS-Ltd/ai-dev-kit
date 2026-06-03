# Changelog v0.6.9.13+2

**Release Date:** 2026-06-03 19:55:09 UTC  
**Epic | Story | Task:** E06:S09:T13 (`RW --art`)  
**SemVer (task_touch):** v0.4.859+2  

## Summary

**Attempted fix (BR-084):** RW installer mode C emits complete kanban section in `rw-config.yaml` (`task_doc_pattern`, `fr_br_root`) and blocks zero-match epic/story persistence when kanban files exist.

## Change implemented

### Framework (RW installer)

- **`detect_kanban_supplementary_defaults()`** — task pattern + `fr_br_root` detection
- **`generate_rw_config_yaml`** — emits `task_doc_pattern`, `fr_br_root`
- **`strict_zero_match`** on mode C epic/story prompts when kanban root exists

### Tests

- **`tests/test_install_release_workflow_rw_config.py`** — 5 tests (YAML keys, detection, e2e, strict mode, INSTALL doc)

### Documentation

- **`INSTALL_IN_YOUR_PROJECT.md`** — full post-kanban kanban YAML block
- **`rw-config-schema.md`**, workflow mgt **README**

## References

- [BR-084](../project-management/kanban/fr-br/BR-084-rw-install-mode-c-missing-task-doc-pattern.md)
- [IPP-E06S09T13](../implementation-cycles/IPP-E06S09T13-br084-rw-config-generation.md)
- GitHub [#16](https://github.com/RMS-Ltd/ai-dev-kit/issues/16)
