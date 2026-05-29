---
lifecycle: draft
ttl_days: null
created_at: 2026-04-25T00:00:00Z
expires_at: null
housekeeping_policy: keep
---

# ICW Implementation Plan — E4:S19:T05 kanban and FR/BR/UXR filename normalization

## Plan

### Phase 1 — Policy and mapping

1. Define canonical filename grammar for supporting kanban/FBU docs.
2. Build migration manifest for in-scope files.
3. Publish mapping in task-linked planning docs.

### Phase 2 — Controlled migration

1. Rename files in atomic batches to reduce blast radius.
2. Rewire markdown references and navigation links after each batch.
3. Update script/config references that target renamed files.

### Phase 3 — Validation and rollout safety

1. Run kanban workflow dry-run and targeted tests.
2. Run stale-reference scans across kanban docs.
3. Publish legacy-name migration guidance and finalize cross-wiring.

## Risks and Mitigations

- **Risk:** Broad rename produces hidden broken links.
  - **Mitigation:** batch migration + post-batch reference scans.
- **Risk:** Script assumptions on legacy filenames break workflow runs.
  - **Mitigation:** update config/script references and validate with dry-runs.
- **Risk:** Scope creep into issue-file renaming (`FR-`, `BR-`, `UXR-`).
  - **Mitigation:** keep native issue prefixes explicitly out of scope.

## Completion Definition

Implementation is complete when canonical names are applied to in-scope supporting docs, references/scripts validate cleanly, and migration guidance is published.

## References

- [ICW Specification](./ICW-E4S19T05-specification.md)
- [ICW Test Design](./ICW-E4S19T05-test-design.md)
- [Task E4:S19:T05](../project-management/kanban/epics/Epic-4/Story-019-fr-br-uxr-abstract-governance-and-intake/T05-kanban-and-fr-br-uxr-filename-normalization-uxr008.md)
