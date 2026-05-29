# Detailed Changelog — v0.6.9.2+2

**Release Date:** 2026-05-29 12:30:00 UTC
**Internal Version:** v0.6.9.2+2
**SemVer:** v0.4.815+2
**Epic / Story / Task:** E6 / S09 / T02

## Overview

**FR-081** brownfield modular adopter integration: operationalize [ADR-003](docs/architecture/standards-and-adrs/ADR-003-greenfield-vs-brownfield-adoption.md) with a canonical **Brownfield adoption** chapter in [`INSTALL_IN_YOUR_PROJECT.md`](../../INSTALL_IN_YOUR_PROJECT.md), per-surface adoption matrices, RW-only minimum path, anonymized worked example, satellite doc cross-links, framework README alignment, and installer brownfield messaging.

## Added

- [`docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md`](docs/implementation-cycles/IPP-E6S09T02-brownfield-modular-adopter-integration-fr081.md) — IPW planning package.
- [`INSTALL_IN_YOUR_PROJECT.md`](../../INSTALL_IN_YOUR_PROJECT.md) — §Brownfield adoption (existing repositories): non-goals, matrices, contract seams, worked example, deferrals.
- [`tests/test_install_brownfield_docs.py`](../../tests/test_install_brownfield_docs.py) — structural regression for INSTALL brownfield anchors.

## Changed

- User-docs scope stubs and [EXISTING_PROJECT_ROLLOUT_CHECKLIST.md](docs/documentation/user-docs/EXISTING_PROJECT_ROLLOUT_CHECKLIST.md) — point to INSTALL brownfield SoT; de-emphasize copy-only rollout.
- [`packages/frameworks/workflow mgt/README.md`](../../packages/frameworks/workflow%20mgt/README.md), [`packages/frameworks/kanban/README.md`](../../packages/frameworks/kanban/README.md) — brownfield / vendoring vs imposed-tree clarity.
- `install_release_workflow.py` — brownfield epilog; `install_kanban_framework.py` — fresh-mode brownfield warning.

## Documentation

- [FR-081](docs/project-management/kanban/fr-br/FR-081-brownfield-modular-adopter-integration.md) — IMPLEMENTED with evidence.
- **E6:S09** story complete (T01–T06).

## Verification

- `pytest tests/test_install_brownfield_docs.py` — 3 passed.
- RW gates: branch context, task complete, intent (`--art`).
