---
lifecycle: evergreen
ttl_days: null
created_at: 2026-04-01T18:00:00Z
expires_at: null
housekeeping_policy: keep
---

# Epic 5, Story 1, Task 75: ICW durable planning artifacts in the documentation system

**Task ID:** E5:S01:T75  
**Status:** ✅ COMPLETE  
**Priority:** MEDIUM  
**Estimated Effort:** Small (documentation + governance; optional RW)  
**Created:** 2026-04-01  
**Completed:** 2026-04-01  
**Last updated:** 2026-04-01 — **RW E5:S01:T75** **`v0.5.1.75+1`** (**FR-075**)  
**Code:** E5S01T75  
**Version anchor:** ✅ COMPLETE (v0.5.1.75+1)

**Repository pattern:** FR-075 = E5:S01:T75

---

## Task ID

**Full Task ID:** `E5:S01:T75`

---

## Scope

Deliver **FR-075**: codify that **ICW** persists spec / test design / implementation plan under **`docs/implementation-cycles/`** (or project `icw-workflow.yaml` **`output_dir`**), links them from the **Kanban task**, and does **not** treat IDE-only plan folders as system of record. Ship **policy**, **framework ICW docs**, **`icw-workflow.yaml` comment**, **`.cursorrules`** ICW steps, and **implementation-cycles README**.

---

## Input

- **FR:** [FR-075](../../../fr-br/FR-075-icw-durable-planning-artifacts-documentation-system.md)
- **Prior art:** [FR-040](../../../fr-br/FR-040-implementation-cycle-workflow-icw.md), [FR-048](../../../fr-br/FR-048-icw-task-identifier-argument.md)
- **Existing ICW output config:** `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml`

---

## Deliverable

| Artifact | Path |
|----------|------|
| Policy | `docs/architecture/standards-and-adrs/specification-and-planning-artifacts-policy.md` |
| Implementation cycles index | `docs/implementation-cycles/README.md` |
| ICW framework README section | `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/README.md` |
| ICW guide | `packages/frameworks/workflow mgt/docs/implementation-cycle-workflow-guide.md` |
| YAML comment | `packages/frameworks/workflow mgt/workflows/implementation-cycle-workflow/icw-workflow.yaml` |
| Agent rules | `.cursorrules` (ICW trigger + Kanban integration bullet) |

**Release:** Land via **RW** on the appropriate branch; set **Version anchor** on this task per validator when marking **COMPLETE**.

---

## Acceptance Criteria

- [x] **FR-075:R01–R06** satisfied (files present; mutual links sane).
- [x] **FR-075** acceptance criteria checked and status advanced when done.
- [x] Task **Version anchor** **✅ COMPLETE (v0.5.1.75+1)**.

---

## Related

- Story: [`Story-001-fr-repo.md`](../Story-001-fr-repo.md)
