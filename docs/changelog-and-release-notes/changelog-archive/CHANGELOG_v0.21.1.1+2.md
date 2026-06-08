# Changelog v0.21.1.1+2

**Release Date:** 2026-06-07 10:28:27 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 01  
**SemVer:** v0.4.1068+2

---

## Summary

E21:S01:T01 — **Change implemented:** Docs-first UK/US language selection for GitHub-template setup (Step 0 in post-template guide + `ai-dev-kit-config.example.yaml`). Installer automation deferred to E21:S01:T05.

---

## Changed

### Documentation

- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` — Step 0 language variant selection before project customization
- `docs/documentation/user-docs/framework-dependency-installation-guide.md` — template section links to Step 0
- `docs/documentation/user-docs/framework-dependency-template-enablement-instructions.md` — first-setup callout
- `INSTALL_IN_YOUR_PROJECT.md` — greenfield language-first callout (FR-006 Phase 1)

### Configuration example

- `packages/frameworks/workflow-mgt/config/examples/ai-dev-kit-config.example.yaml` — canonical `localisation` block (en-GB default, en-US documented)

### Planning / kanban

- `docs/implementation-cycles/IPP-E21S01T01-template-language-selection-github.md` — IPP (IPW package)
- T01 task doc — scope, deliverables, V1–V6 verification, IPP wiring

### Adopter mirror

- `greenfield-install/` synced via `sync_greenfield_install.py`

---

## References

- [T01](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T01-add-language-selection-prompt-to-template-setup-github-templ.md)
- [IPP-E21S01T01](../implementation-cycles/IPP-E21S01T01-template-language-selection-github.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
