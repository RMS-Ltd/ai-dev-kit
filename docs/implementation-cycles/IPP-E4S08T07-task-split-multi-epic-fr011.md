---
lifecycle: evergreen
created_at: 2026-05-29T12:00:00Z
housekeeping_policy: keep
---

# E4:S08:T07 — Planning: FR-011 multi-epic task split (IPP)

**Host Task:** [`T07-task-splitting-across-multiple-canonical-epics-fr-011.md`](../kanban/epics/epic-04/story-08-intelligent-epic-matching-canonical-adoption/T07-task-splitting-across-multiple-canonical-epics-fr-011.md) **(E4:S08:T07)**  
**Planning for:** [FR-011](../kanban/fr-br/FR-011-task-splitting-multiple-canonical-epics.md)  
**Status:** Published

**Supersedes (consolidated):** [ICW-E4S8T7-specification.md](ICW-E4S08T07-implementation-plan.md), [ICW-E4S8T7-test-design.md](ICW-E4S08T07-implementation-plan.md), [ICW-E4S8T7-implementation-plan.md](ICW-E4S08T07-implementation-plan.md)

## 1. Requirements

Map FR-011 FR-1..FR-6: split-candidate detection, task assignment, split-plan report, deterministic ID remap, reference rewrite, explainable output.

## 4. Implementation plan

| Wave | Action |
|------|--------|
| 1 | Package `packages/frameworks/workflow-mgt/scripts/task_split/` (engine + models) |
| 2 | CLI `task_split_plan.py` + tests per ICW test design |
| 3 | Hook in `intake_decision_flow.py` for multi-epic secondary matches |
| 4 | `RW E4:S08:T07 --art` (BUILD +1); integration docs |
| 5 | Optional second RW if integration wave separate |

## 7. Success criteria

- FR-011 AC-1..6; pytest green; host task COMPLETE
