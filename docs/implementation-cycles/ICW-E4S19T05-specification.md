---
lifecycle: draft
ttl_days: null
created_at: 2026-04-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Specification — E4:S19:T05 kanban and FR/BR/UXR filename normalization

## Context

The board defaults were standardized to `kboard.md` and `fbuboard.md`, but supporting kanban/FR-BR-UXR documentation under `docs/project-management/kanban/` still has mixed filename conventions, causing discoverability and link-drift friction.

## Goal

Define and apply a canonical filename policy for in-scope kanban and FR/BR/UXR related docs, with deterministic migration mapping and compatibility-safe transition.

## In Scope

- Canonical filename policy for supporting kanban/FBU docs.
- In-scope inventory and old-name -> new-name mapping.
- Link and reference rewiring across docs.
- Script/config path updates where renamed docs are referenced.
- Migration/compatibility notes for legacy names.

## Out of Scope

- Renaming individual issue docs away from `FR-`, `BR-`, `UXR-` prefixes.
- Renaming task files that follow EST task naming unless explicitly required.
- Non-kanban documentation refactors outside `docs/project-management/kanban/`.

## Acceptance Criteria

1. Canonical naming policy is documented and linked from T05/UXR-008.
2. Deterministic migration mapping exists for all renamed files.
3. Internal markdown links resolve post-migration.
4. Workflow/script references for renamed docs are updated and validated.
5. Compatibility guidance exists for legacy filename references.

## Dependencies

- [UXR-008](../project-management/kanban/fr-br/UXR-008-kboard-fbuboard-default-naming-adoption.md)
- [Task E4:S19:T05](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
- [FR-086](../project-management/kanban/fr-br/FR-086-canonical-supporting-kanban-fbu-doc-naming-and-fbu-collective-terminology.md)
