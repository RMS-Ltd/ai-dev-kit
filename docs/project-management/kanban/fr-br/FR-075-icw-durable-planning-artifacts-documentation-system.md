---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Feature Request: ICW — Durable planning artifacts in the documentation system

**Type:** Feature Request (FR)  
**ID:** FR-075  
**Submitted:** 2026-04-01  
**Submitted By:** RMS (AI Dev Kit)  
**Priority:** MEDIUM  
**Status:** COMPLETE (**`v0.5.1.75+1`** — **RW E5:S01:T75**)  

**Implementing Task:** [E5:S01:T75](../epics/Epic-5/Story-001-fr-repo/T75-icw-durable-planning-artifacts-documentation-system.md)

**Related:** [FR-040 – Implementation Cycle Workflow (ICW)](./FR-040-implementation-cycle-workflow-icw.md); [FR-048 – ICW task identifier argument](./FR-048-icw-task-identifier-argument.md)

---

## Summary

Make **ICW explicitly responsible** for persisting specifications, test design, and implementation plans in the **repository documentation tree** (not only in IDE-local plan directories), with a **policy**, **framework docs**, and **agent rules** so specs are discoverable and traceable from **Kanban tasks**.

---

## Problem

Implementation planning often produces structured specs in **editor-local** folders (e.g. Cursor `~/.cursor/plans/`). Those paths are **outside git**, **not inventoried**, and **not architected** with the rest of the KB. Teams cannot rely on them for audit, onboarding, or cross-session continuity.

---

## Proposed solution

1. **Policy:** Define source-of-truth ordering (task doc → FR → `docs/implementation-cycles/` → ADRs → tests) and a **promotion workflow** from transient plans to durable `docs/`.
2. **ICW package:** Document in **ICW README**, **ICW guide**, and **`icw-workflow.yaml`** that **`output_dir`** (`docs/implementation-cycles/`) is mandatory persistence; require **bidirectional links** with the Kanban task.
3. **Agent execution:** Update **`.cursorrules`** ICW trigger so agents **persist** the three-phase package and **link** it from the task.
4. **Entry point:** Add **`docs/implementation-cycles/README.md`** pointing maintainers at the policy.

---

## Requirements

- **FR-075:R01** — Architecture policy: **`specification-and-planning-artifacts-policy.md`** under `docs/architecture/standards-and-adrs/` (source-of-truth ladder, transient vs durable, promotion workflow, discovery).
- **FR-075:R02** — **`docs/implementation-cycles/README.md`** explains naming, `output_dir`, and links to the policy.
- **FR-075:R03** — Framework **`implementation-cycle-workflow/README.md`**: section **Durable planning artifacts (ICW responsibility)** with links to policy and implementation-cycles README.
- **FR-075:R04** — **`implementation-cycle-workflow-guide.md`**: same responsibility called out under Overview with links.
- **FR-075:R05** — **`icw-workflow.yaml`**: comment on **`output_dir`** referencing the policy.
- **FR-075:R06** — **`.cursorrules`**: ICW steps require persisting outputs under `docs/implementation-cycles/` (or configured `output_dir`), linking from the **task doc**, and citing the policy; Kanban integration step requires **Planning artifact** links.

---

## Acceptance criteria

- [x] All **R01–R06** artifacts exist in the repo and cross-reference each other consistently.
- [x] **E5:S01:T75** marked **COMPLETE** with version anchor **`v0.5.1.75+1`**.
- [x] **FR-075** status updated to reflect completion and links to the release / task.

---

## Out of scope

- Changing ICW **handler** code or templates beyond documentation and YAML comments (separate FR if automation must enforce writes).
- Migrating historical `~/.cursor/plans/` files (manual hygiene if desired).

---

## References

- Policy: [`specification-and-planning-artifacts-policy.md`](../../../architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md)
- ICW config: `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml`
