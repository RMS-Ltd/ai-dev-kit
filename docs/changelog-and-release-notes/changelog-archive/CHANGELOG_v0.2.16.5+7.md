# CHANGELOG_v0.2.16.5+7

**Release Date:** 2026-06-14 18:55:00 UTC

## Release Summary

`RW E02:S16:T05 --art` — Wave 5 GitHub Actions CI hygiene: restore **Tests** workflow green on `dev` after v4 fresh-install default dropped v3.5 stdout parity. `install_v4_catalog.py` now emits padded epic destination logs (`installed from template`, dry-run `Would install Epic N`) matching existing pytest contract.

## Internal and SemVer

- Internal version: `0.2.16.5+7`
- SemVer (`task_touch`): `0.4.1165+7`

## Included Changes

### Attempted fix — v4 fresh install stdout parity (Tests CI)

- `packages/frameworks/kanban/scripts/install_v4_catalog.py` — Core-tier epic install/dry-run logging aligned with `migrate_structure` v3.5 format
- `greenfield-install/` mirror sync (FR-110)

### Root cause (identified)

- FR-132 changed fresh install default `--catalog` to `v4`; v4 installer created epics silently while pytest asserts on stdout tokens (`installed from template`, `epics/epic-01/epic-01.md`, dry-run epic hints)

## Verification

- Local: `pytest tests/kanban/test_install_epic_22_23_templates.py tests/kanban/test_migrate_structure_log_epic_padding.py` — 6 passed
- Post-push: re-check [GitHub Actions Tests on dev](https://github.com/RMS-Ltd/ai-dev-kit/actions)

## Kanban

- E02:S16:T05 perpetual CI health lane (FR-112)
