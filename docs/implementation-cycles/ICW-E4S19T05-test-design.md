---
lifecycle: draft
ttl_days: null
created_at: 2026-04-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Test Design — E4:S19:T05 kanban and FR/BR/UXR filename normalization

## Test Objectives

Verify mapping completeness, link integrity, and workflow compatibility after filename normalization.

## Test Matrix

1. **Policy/mapping completeness**
   - Scenario: review migration manifest against in-scope inventory.
   - Expected: each targeted file is mapped once; no ambiguous collisions.

2. **Internal link integrity**
   - Scenario: scan markdown references before/after migration.
   - Expected: no dangling links to renamed files.

3. **Board/story/task/UXR cross-wiring**
   - Scenario: inspect primary governance docs (`fbuboard`, `fr-br-uxr-structure`, UXR/task/story docs).
   - Expected: references are canonical and point to rehoused `E4:S19:T05`.

4. **Workflow path compatibility**
   - Scenario: run kanban update dry-run/tests.
   - Expected: scripts resolve canonical paths and complete successfully.

5. **Migration safety messaging**
   - Scenario: inspect migration docs for legacy reference handling.
   - Expected: explicit guidance for adopters with legacy names.

## Evidence Capture

- Migration mapping table committed in docs.
- `rg` checks for stale file references.
- Dry-run and test outputs for workflow scripts.

## References

- [ICW Specification](./ICW-E4S19T05-specification.md)
- [Task E4:S19:T05](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
