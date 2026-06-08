# Changelog — v0.21.9.3+1

**Release Date:** 2026-06-08 14:47:09 UTC  
**Epic:** 21 | **Story:** 9 | **Task:** 3  
**SemVer:** v0.4.11+1

## Summary

E21:S09:T03 — PR #47 merge hygiene, CI parity fixes, and adopter-public documentation prevention gates (BR-068 / FR-114 / FR-110). SemVer **v0.4.11+1** (`--art` adoption from post-`dev` merge version surface).

## Changes

### Merged

- **`origin/dev` → `epic/21-internationalisation-localisation`** — kanban path promotion to `docs/kanban/`; Epic 21 story renumber preserved; semver legacy registry merged with Epic 21 task_touch rows.

### Attempted fixes (CI / portal)

- **Portal link guard** — GitHub blob URLs in Epic 21 user-docs (`contributing-translations.md`, `translation-management-tools.md`, CLI/post-template guides).
- **greenfield-install** — synced locale trees and translation scripts from `packages/frameworks/` (167 files).
- **RW installer** — `ensure_localisation_config` non-interactive on `--dry-run` (EOFError in CI).

### Governance / prevention

- **`docs/governance/standards/adopter-public-documentation-authoring.md`** — canonical BR-068 / FR-114 / FR-110 authoring contract.
- **Pre-commit** — `validate-portal-publish-scope` + `validate-greenfield-install-sync` (path-triggered).
- **IPW / IPP template** — mandatory portal pytest + greenfield sync ACs.
- **`AGENTS.md` / manifest** — `adopter-docs` track; **P-PORTAL-LINKS**, **P-GREENFIELD-SYNC**.
- **`validate_actions_ci_parity.py`** — fast portal pytest before Docusaurus build.

### Kanban

- **E21:S09:T03** filed — PR merge CI parity and adopter-public doc gates.

## References

- [T03 task doc](../../kanban/epics/epic-21/story-09-epic-housekeeping/T03-pr-merge-ci-and-adopter-public-doc-gates.md)
- [adopter-public-documentation-authoring.md](../../governance/standards/adopter-public-documentation-authoring.md)
- [PR #47](https://github.com/RMS-Ltd/ai-dev-kit/pull/47)
