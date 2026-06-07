# Changelog v0.21.1.3+1

**Release Date:** 2026-06-07 10:43:33 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 03  
**SemVer:** v0.4.1070+1

---

## Summary

E21:S01:T03 — **Change implemented:** UK/US language selection as first step in `install_release_workflow.py`; persists to `ai-dev-kit-config.yaml` with installer `--language` / `--non-interactive` / `--force` flags.

---

## Changed

### RW installer

- `packages/frameworks/workflow-mgt/scripts/localisation_config.py` — canonical localisation helpers (prompt, write, `ensure_localisation_config`)
- `packages/frameworks/workflow-mgt/scripts/install_release_workflow.py` — language-first step before RW config collection; new CLI flags

### CLI

- `cli/localisation.py` — delegates to shared `localisation_config` module

### Tests

- `tests/test_install_release_workflow_localisation.py` — T1–T9 installer localisation coverage

### Documentation

- `packages/frameworks/workflow-mgt/KB/Documentation/Developer_Docs/vwmp/rw-installer-quickstart-guide.md` — language-first step
- `INSTALL_IN_YOUR_PROJECT.md` — RW installer language flags
- `docs/implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md` — IPP
- `greenfield-install/` synced via `sync_greenfield_install.py`

---

## References

- [T03](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T03-add-language-selection-prompt-to-rw-installer-install-releas.md)
- [IPP-E21S01T03](../implementation-cycles/IPP-E21S01T03-rw-installer-language-selection.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
