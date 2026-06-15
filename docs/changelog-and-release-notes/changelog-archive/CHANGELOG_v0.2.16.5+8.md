# CHANGELOG_v0.2.16.5+8

**Release Date:** 2026-06-15 13:45:02 UTC

## Release Summary

`RW E02:S16:T05 --art` — Wave 6 GitHub Actions CI hygiene: restore **Docusaurus site build** green on `dev` after [run 27550217005](https://github.com/RMS-Ltd/ai-dev-kit/actions/runs/27550217005). BR-068 blob URLs for `adk-feedback` maintainer pointers; MDX-safe backticks for `<path>` placeholder in install troubleshooting guide.

## Internal and SemVer

- Internal version: `0.2.16.5+8`
- SemVer (`task_touch`): `0.4.1169+8`

## Included Changes

### Attempted fix — Docusaurus production build (CI)

- `docs/adk-feedback/attempt-09/README.md` — replace relative links to excluded maintainer trees (`kanban/`, `knowledge/`, repo-root `adk-install-into-sbl/`) with GitHub blob URLs (BR-068)
- `docs/documentation/user-docs/framework-dependency-troubleshooting-guide.md` — wrap `validate_install_rc.py --profile <path>` in backticks so MDX does not parse `<path>` as a JSX tag

### Root cause (identified)

| Workflow | Failure | Fix |
| -------- | ------- | --- |
| Docusaurus site build | Broken markdown link `../../kanban/fr-br/FR-079-…` from published `docs/adk-feedback/attempt-09/README.md` | GitHub blob URL |
| Docusaurus site build | MDX `end-tag-mismatch` on `<path>` at troubleshooting guide line 1228 | Inline code backticks |

## Verification

- Local: `cd portal && npm run build` — exit 0
- Local: `pytest tests/test_portal_br068_monorepo_links.py tests/test_portal_fr114_allowlist.py` — 9 passed
- Post-push: re-check [GitHub Actions Docusaurus site build on dev](https://github.com/RMS-Ltd/ai-dev-kit/actions)

## Kanban

- E02:S16:T05 perpetual CI health lane (FR-112)
