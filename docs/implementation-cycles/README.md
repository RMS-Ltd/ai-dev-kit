---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T16:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Implementation cycles (`docs/implementation-cycles/`)

This directory holds **durable** planning outputs: ICW-style **specifications**, **test designs**, **implementation plans**, consolidated **IPP** packages (including documentation deliverables and housing), and related summaries linked from Kanban **tasks**.

## Policy (read this first)

**Where is the “real” spec?** See **[Specification and planning artifacts policy](../architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md)** — task docs and FRs own intent; **IDE-only** plan folders are **not** inventory.

## Naming

Prefer predictable filenames so grep and humans can find work by **E/S/T**:

- `IPP-E{epic}S{story}T{task}-{slug}.md` (consolidated IPW output; preferred in ai-dev-kit)
- `ICW-E{epic}S{story}T{task}-specification.md`
- `ICW-E{epic}S{story}T{task}-test-design.md`
- `ICW-E{epic}S{story}T{task}-implementation-plan.md`

Batch ICW packages may use a range in the basename (e.g. `ICW-E7S06-T10-T16-*`) when one cycle deliberately covers multiple tasks.

## ICW configuration

The Implementation Cycle Workflow declares **`output_dir: docs/implementation-cycles`** in:

`packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml`

That path is part of **ICW’s responsibility**: persist the three-phase package here (or the adopt project’s configured `output_dir`), link it from the **task doc**, and do **not** rely on editor-local `plans` as the only copy. New automation or agents should **write here**, not only under editor-local `plans` paths.

## Related

- [ICW implementation summary](./ICW-IMPLEMENTATION-SUMMARY.md) (historical context)
- [Framework ICW README](https://github.com/earlution/ai-dev-kit/blob/main/packages/frameworks/workflow%20mgt/workflows/implementation-cycle-workflow/README.md)


## Publication discoverability contract (BR-066)

Planning artifacts are only considered published when the host task doc links to the package in this directory (or marks publication as not applicable with reason).

Reference package for this hardening task:
- [ICW-E2S15T01-specification](./ICW-E2S15T01-specification.md)
- [ICW-E2S15T01-test-design](./ICW-E2S15T01-test-design.md)
- [ICW-E2S15T01-implementation-plan](./ICW-E2S15T01-implementation-plan.md)

