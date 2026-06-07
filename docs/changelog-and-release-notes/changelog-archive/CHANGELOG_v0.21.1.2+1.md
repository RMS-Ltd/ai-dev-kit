# Changelog v0.21.1.2+1

**Release Date:** 2026-06-07 10:33:49 UTC  
**Epic:** 21 | **Story:** 01 | **Task:** 02  
**SemVer:** v0.4.1069+1

---

## Summary

E21:S01:T02 — **Change implemented:** UK/US language selection as first step in `ai-dev-kit init`; persists to `ai-dev-kit-config.yaml` with `--language` / `--non-interactive` flags.

---

## Changed

### CLI

- `cli/localisation.py` — prompt, flag resolution, `ai-dev-kit-config.yaml` writer (seed for E21:S01:T05)
- `cli/commands/init.py` — language-first flow; `--language`, `--non-interactive`; `--force` covers both config files

### Tests

- `tests/test_commands.py` — T1–T8 init/localisation coverage
- `tests/test_integration.py` — init workflow updated for new flags

### Documentation

- `docs/documentation/user-docs/framework-dependency-cli-reference.md` — `init` section
- `docs/documentation/user-docs/framework-dependency-post-template-setup-guide.md` — CLI cross-ref
- `docs/implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md` — IPP

---

## References

- [T02](../project-management/kanban/epics/epic-21/story-01-language-selection-at-setup/T02-add-language-selection-prompt-to-cli-tool-ai-dev-kit-init.md)
- [IPP-E21S01T02](../implementation-cycles/IPP-E21S01T02-cli-init-language-selection.md)
- [FR-006](../project-management/kanban/fr-br/FR-006-localization-language-selection-uk-us-english.md)
