---
lifecycle: draft
ttl_days: null
created_at: 2026-04-20T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Specification — E6:S07:T114 canonical board filename migration

## Context

Board naming defaults were implemented (`kboard.md`) before formal planning artifacts were created. This specification backfills the contract so implementation and verification are traceable and reproducible.

## Goal

Define canonical board filenames and required compatibility behavior across project docs, framework packages, and workflow scripts.

## In Scope

- Canonical defaults:
  - task board: `kboard.md`
  - FR/BR/UXR board: `kboard.md`
- Documentation references updated to canonical names for active guidance.
- Script/install defaults updated to canonical names.
- Legacy alias support retained for:
  - `kboard.md`
  - `fr-br-uxr-board.md`

## Out of Scope

- Historical changelog archive rewrites.
- Forced removal of legacy aliases.
- Release/tag creation in this task.

## Acceptance Criteria

1. Active docs and packaged framework docs point to canonical board names.
2. Workflow scripts default to canonical names and still resolve legacy aliases.
3. Existing board-update edge test suite remains green.
4. Docusaurus production build succeeds after documentation updates.

## Dependencies

- [UXR-008](../kanban/fbu/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [Task E6:S07:T114](../kanban/epics/epic-06/story-07-adk-implementation-analysis-and-package-management/T114-canonical-board-filename-migration-kboard-fbuboard.md)
