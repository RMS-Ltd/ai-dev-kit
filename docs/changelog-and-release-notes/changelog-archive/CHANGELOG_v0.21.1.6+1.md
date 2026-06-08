# Changelog v0.21.1.6+1

**Release Date:** 2026-06-07 10:57:19 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 06  
**SemVer:** v0.4.1073+1

---

## Summary

E21:S01:T06 — **Change implemented:** Wire RW installer scaffolds and kanban intake templates to locale manifest via `render_locale_text` and `resolve_kanban_intake_template`.

---

## Changed

### Localisation consumption (T06)

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py` — `render_locale_text`, `resolve_kanban_intake_template`, `KANBAN_INTAKE_TEMPLATE_KEYS`
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` — locale-aware changelog stub and decline-help strings
- `cli/localisation.py` — re-export new APIs
- `greenfield-install/` — mirror sync for workflow-mgt scripts and locale README

### Tests

- `tests/test_content_generation_locale_wiring.py` — T1–T10
- `tests/test_install_release_workflow_changelog_scaffold.py` — updated `render_changelog_stub` signature

### Documentation

- `docs/implementation-cycles/IPP-E21S01T06-content-generation-locale-wiring.md`
- `packages/frameworks/kanban/FR_BR_INTAKE_GUIDE.md` — locale-aware template resolution
- Locale READMEs updated (workflow-mgt + kanban)

---

## References

- [T06](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T06-update-content-generation-to-use-language-preference-rw-temp.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
